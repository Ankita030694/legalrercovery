import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import StudyAbroadTableOfContents from "./StudyAbroadTableOfContents";
import StudyAbroadScenarioTabs from "./StudyAbroadScenarioTabs";
import StudyAbroadCommissionCTA from "./StudyAbroadCommissionCTA";

export const revalidate = 86400;

const PAGE_URL = "/study-abroad-master-aggregator-university-sub-agent-commission-dispute";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF H1 (130 chars) — matched verbatim in <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "B2B Overseas Education Commission Recovery: When Master Aggregators Receive Foreign University Payouts & Withhold Sub-Agent Shares";

const META_TITLE = "Study-Abroad Aggregator Withholding Sub-Agent Commissions";
const META_DESCRIPTION =
  "Protect B2B overseas-education partners whose ₹10L–₹1Cr commissions are held by aggregators via Contract Act s.213 accounting & Order XXXVII CPC.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("B2B Study-Abroad Aggregator Sub-Agent Commission Recovery Guide"),
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

const PRIMARY_SOURCES = [
  {
    title:
      "The Indian Contract Act, 1872 (Sections 73, 74, 190–195 & 213 — Agent Duty to Render Accounts & Sub-Agent Privity) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XI Production of Electronic Accounts) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Sections 63 & 119 — Electronic Portal Logs & Adverse Inference on Withheld Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Cap & 3x RBI Interest) — MSME Samadhaan",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Integrated Goods and Services Tax (IGST) Act, 2017 (Sections 2(6), 12, 13(8)(b) & 16 — Intermediary & Export of Services) — CBIC",
    url: "https://www.cbic.gov.in/",
  },
];

const FAQS = [
  {
    question:
      "Can a regional study-abroad sub-agent sue a master aggregator if the student is already enrolled in the second semester abroad?",
    answer:
      "Yes. Once the student clears the foreign university's census date and pays second-semester tuition, the master aggregator's claim that 'university reconciliation is pending' collapses. Under Section 213 of the Indian Contract Act, 1872, the aggregator must render verifiable university remittance accounts, and confirmed portal enrolment logs support an Order XXXVII CPC summary suit for liquidated commission recovery.",
  },
  {
    question:
      "Is a master aggregator legally allowed to hold a 25%–40% 'university clawback' reserve indefinitely across all intakes?",
    answer:
      "No. Under Sections 73 and 74 of the Indian Contract Act, 1872, a contracting party cannot retain earned commission as a blanket penalty or speculative buffer without proving actual loss. Unless the aggregator produces a student-specific university refund or clawback debit note for a named withdrawal, withholding earned shares on clean-cohort enrollments is an actionable breach.",
  },
  {
    question:
      "What should we do if the aggregator freezes our B2B portal wallet or deactivates our sub-agent login?",
    answer:
      "Immediately preserve timestamped screen recordings, CSV wallet exports, CAS/CoE confirmation emails, and WhatsApp account-manager threads with SHA-256 hashes for BSA 2023 Section 63 admissibility. Serve a formal pre-litigation preservation notice citing BSA Section 119—any deliberate deletion or suppression of portal enrolment logs triggers adverse judicial inference against the aggregator.",
  },
  {
    question:
      "Does a study-abroad sub-agent qualify for MSMED Act 45-day payment protection and 3x RBI bank rate interest?",
    answer:
      "Yes, provided the regional overseas education consultancy holds an active Udyam Registration Certificate prior to the sub-agent agreement and invoice date. Under Sections 15 and 16 of the MSMED Act, 2006, even a master EdTech aggregator cannot contract out of the 45-day maximum credit period, and delayed commission invoices attract compound monthly interest at three times the RBI bank rate.",
  },
  {
    question:
      "How do GST zero-rated export rules and Section 194H TDS affect sub-agent commission recovery?",
    answer:
      "When your sub-agency contract is executed with an Indian master aggregator entity rather than directly with a foreign university, the transaction is typically a domestic B2B supply attracting 18% GST and TDS under Section 194H (or 194J where applicable), not a zero-rated export under IGST Section 16. Aggregators cannot use tax-classification queries as a pretext to freeze the undisputed principal commission beyond statutory timelines.",
  },
  {
    question:
      "What if our sub-agent agreement has an arbitration clause naming the aggregator's home city?",
    answer:
      "A valid arbitration clause does not bar you from serving a pre-litigation Section 213 accounting and Section 21 Arbitration invocation notice. Moreover, if the aggregator attempts to appoint its own internal officer or empaneled counsel as sole arbitrator, that unilateral appointment is void under Section 12(5) of the Arbitration Act and Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020), allowing you to seek an independent institutional arbitrator.",
  },
  {
    question:
      "How is this B2B page different from student visa or college fee refund guides?",
    answer:
      "This playbook exclusively protects B2B overseas-education sub-agents and regional IELTS/admissions consultancies recovering ₹10 Lakh to ₹1 Crore+ in earned university placement commissions from master EdTech aggregators. It has zero overlap with consumer student-versus-consultant disputes.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/blog_money_recovery.png`,
    },
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage B2B Study-Abroad Sub-Agent Commission Recovery Workflow",
  description:
    "Step-by-step statutory escalation for regional overseas education consultancies to recover withheld university commissions from master EdTech aggregators.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Stage 1: Portal Ledger & BSA s.63 Hash Lock",
      text: "Export B2B portal wallet statements, CAS/CoE/LOA enrolment proofs, and commission slab annexures with BSA 2023 Section 63 certification before raising formal dispute.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Stage 2: Contract Act s.213 Accounting Demand",
      text: "Serve a 15-day fact-verified notice demanding student-wise foreign university remittance dates, FX credit advices, and specific clawback debit notes.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Stage 3: MSMED s.15-18 & s.43B(h) Tax Leverage",
      text: "If Udyam-registered, file on MSME Samadhaan claiming 3x RBI bank rate compound interest and notify the aggregator of Income Tax s.43B(h) disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Stage 4: Order XXXVII Summary Suit / Section 9 Freeze",
      text: "File a summary suit under Order XXXVII CPC on confirmed portal credit notes and unpaid tax invoices, or seek Section 9 interim security where arbitration applies.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Stage 5: NI Act s.138 / Order XXI Execution",
      text: "Prosecute bounced settlement cheques under NI Act s.138 (with 20% s.143A interim compensation) or execute decrees via Order XXI bank-account attachment.",
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
      name: "Study-Abroad Commission Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function StudyAbroadCommissionDisputePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 B2B Playbook</span>
            <span>&bull;</span>
            <span>Contract Act s.213 &amp; Order XXXVII CPC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Zero Consumer Overlap
            </span>
            Regional study-abroad sub-agents owed ₹10 Lakh–₹1 Crore+ by master EdTech aggregators can compel payout using{" "}
            <strong className="text-white">Contract Act Section 213</strong> (mandatory agent accounting),{" "}
            <strong className="text-white">Order XXXVII CPC</strong> summary suits on confirmed portal CAS/CoE logs, and{" "}
            <strong className="text-white">MSMED Act s.16</strong> interest. Explore the full{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Schools, Universities &amp; EdTech B2B Recovery Hub
            </Link>{" "}
            for vertical escalation tracks.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-red-400">9–14 Months</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical Aggregator Commission Hold
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-slate-100">Section 213</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Contract Act Accounting Duty
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">3&times; RBI Rate</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 Compound Interest
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-amber-400">BSA s.63</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Portal Enrolment Log Proof
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Schools, Universities & EdTech B2B",
                href: "/industries/schools-universities-edtech-b2b-recovery",
              },
              {
                label: "Study-Abroad Commission Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <StudyAbroadTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Market Gap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Master Aggregators Withhold Regional Sub-Agent Commissions
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India, more than 15,000 regional IELTS coaching centres, tier-2/tier-3 overseas education consultancies, and independent student recruiters route UK, Canada, Australia, and European university applications through 6 to 8 dominant B2B master aggregators. Because regional sub-agents rarely hold direct university contracts, they rely on the master aggregator&apos;s portal to submit applications, track Confirmation of Acceptance for Studies (CAS), Confirmation of Enrolment (CoE), or Letter of Acceptance (LOA) milestones, and receive their 60%–80% commission split.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The commercial breakdown begins after the student lands abroad and clears census dates. Even after foreign universities wire gross tuition commissions in GBP, AUD, CAD, or EUR to the master aggregator, sub-agents routinely face 9 to 14 months of unexplained delays. Aggregators cite opaque excuses: &ldquo;university reconciliation pending,&rdquo; &ldquo;rolling clawback reserve,&rdquo; &ldquo;portal wallet compliance review,&rdquo; or last-minute GST/TDS mismatches. Worse, when a regional sub-agent threatens to shift future intakes to a rival platform, some aggregators freeze portal wallets altogether—blocking visibility into earned payables.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong className="font-bold block mb-1">
                  Critical Distinction: 100% B2B Creditor Protection (Zero Student-Refund Overlap)
                </strong>
                Every statutory remedy in this guide is drafted strictly for{" "}
                <strong>B2B overseas-education sub-agents and institutional partners</strong> recovering earned placement commissions from master EdTech aggregators. If you are a regional agency managing multi-branch fee or franchise receivables, also review our{" "}
                <Link
                  href="/coaching-institute-franchise-royalty-and-installment-bounce-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Coaching Franchise Royalty &amp; Bounce Recovery Playbook
                </Link>{" "}
                and{" "}
                <Link
                  href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  B2B EdTech Unpaid Dues Guide
                </Link>
                .
              </div>
            </section>

            {/* Section 2: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Recovery Matrix for Withheld Overseas Commissions
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Master aggregators count on regional sub-agents treating commission holds as an &ldquo;industry norm&rdquo; rather than a breach of statutory agency accounting. Deploying the correct legal track forces immediate reconciliation because it shifts evidentiary burden onto the aggregator&apos;s finance team.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Statutory Track</th>
                      <th className="py-3.5 px-4 font-bold">Core Legal Trigger</th>
                      <th className="py-3.5 px-4 font-bold">Best-Fit Dispute</th>
                      <th className="py-3.5 px-4 font-bold">Timeline &amp; Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Contract Act s.213 &amp; ss.190–195
                      </td>
                      <td className="py-3.5 px-4">
                        Agent&apos;s statutory duty to render true accounts of foreign university receipts
                      </td>
                      <td className="py-3.5 px-4">
                        &ldquo;Reconciliation pending&rdquo; excuses after student Term-2 enrolment
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        15-day notice; shifts burden to aggregator to produce FX credit logs
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="py-3.5 px-4">
                        Liquidated debt evidenced by written contract, portal credit notes &amp; invoices
                      </td>
                      <td className="py-3.5 px-4">
                        Approved portal wallet balances frozen or unpaid past 60–180 days
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        6–12 months; aggregator must deposit cash to get leave to defend
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act ss.15–18 &amp; s.43B(h)
                      </td>
                      <td className="py-3.5 px-4">
                        45-day max payment cap for Udyam-registered consultancies
                      </td>
                      <td className="py-3.5 px-4">
                        Chronic 9–14 month delays by Indian Pvt Ltd aggregators
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        3&times; RBI compound interest + tax disallowance pressure on debtor
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Arbitration s.9 / Commercial Court s.12A
                      </td>
                      <td className="py-3.5 px-4">
                        Interim asset/account preservation &amp; pre-institution mediation
                      </td>
                      <td className="py-3.5 px-4">
                        High-value ₹25L–₹1Cr+ multi-intake disputes with arbitration clauses
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">
                        Blocks unilateral aggregator arbitrator under Perkins Eastman
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        NI Act s.138 / PSS Act s.25
                      </td>
                      <td className="py-3.5 px-4">
                        Criminal prosecution on bounced settlement PDCs or NACH mandates
                      </td>
                      <td className="py-3.5 px-4">
                        Aggregator issues post-dated settlement cheque that bounces
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        Strict 30-day notice + 20% interim compensation under s.143A
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-escalation-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Sub-Agent Commission Escalation Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this sequential operational decision tree before your portal login is deactivated or limitation under the Limitation Act, 1963 (3 years from invoice/milestone accrual—verify dates on our{" "}
                <Link
                  href="/tools/limitation-period-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Limitation Period Calculator
                </Link>
                ) expires.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 920 230"
                  width={920}
                  height={230}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-stage B2B study-abroad sub-agent commission recovery escalation flowchart"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L0,6 L7,3 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Node 1 */}
                  <rect x="10" y="35" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="34" cy="60" r="12" fill="#DC2626" />
                  <text x="34" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">Evidence Lock</text>
                  <text x="22" y="90" fill="#CBD5E1" fontSize="10.5">Export portal wallet,</text>
                  <text x="22" y="106" fill="#CBD5E1" fontSize="10.5">CAS/CoE/LOA logs &amp;</text>
                  <text x="22" y="122" fill="#CBD5E1" fontSize="10.5">commission slab PDF.</text>
                  <text x="22" y="152" fill="#34D399" fontSize="10" fontWeight="bold">BSA 2023 s.63 Hash</text>

                  <line x1="170" y1="108" x2="195" y2="108" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 2 */}
                  <rect x="198" y="35" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="222" cy="60" r="12" fill="#DC2626" />
                  <text x="222" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="242" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">s.213 Notice</text>
                  <text x="210" y="90" fill="#CBD5E1" fontSize="10.5">Demand university FX</text>
                  <text x="210" y="106" fill="#CBD5E1" fontSize="10.5">remittance proof &amp;</text>
                  <text x="210" y="122" fill="#CBD5E1" fontSize="10.5">clawback debit notes.</text>
                  <text x="210" y="152" fill="#FBBF24" fontSize="10" fontWeight="bold">15-Day Statutory Window</text>

                  <line x1="358" y1="108" x2="383" y2="108" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 3 */}
                  <rect x="386" y="35" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="410" cy="60" r="12" fill="#DC2626" />
                  <text x="410" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="430" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">MSMED Track</text>
                  <text x="398" y="90" fill="#CBD5E1" fontSize="10.5">File Samadhaan claim</text>
                  <text x="398" y="106" fill="#CBD5E1" fontSize="10.5">if Udyam registered;</text>
                  <text x="398" y="122" fill="#CBD5E1" fontSize="10.5">cite s.43B(h) tax hit.</text>
                  <text x="398" y="152" fill="#34D399" fontSize="10" fontWeight="bold">3x RBI Interest Clock</text>

                  <line x1="546" y1="108" x2="571" y2="108" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 4 */}
                  <rect x="574" y="35" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="598" cy="60" r="12" fill="#DC2626" />
                  <text x="598" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="618" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">Order 37 / s.9</text>
                  <text x="586" y="90" fill="#CBD5E1" fontSize="10.5">Summary suit on portal</text>
                  <text x="586" y="106" fill="#CBD5E1" fontSize="10.5">credit notes or neutral</text>
                  <text x="586" y="122" fill="#CBD5E1" fontSize="10.5">ODR arbitration s.21.</text>
                  <text x="586" y="152" fill="#F87171" fontSize="10" fontWeight="bold">No Unilateral Arbitrator</text>

                  <line x1="734" y1="108" x2="759" y2="108" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 5 */}
                  <rect x="762" y="35" width="148" height="145" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="786" cy="60" r="12" fill="#DC2626" />
                  <text x="786" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="806" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">Execution</text>
                  <text x="774" y="90" fill="#CBD5E1" fontSize="10.5">Order XXI bank attach</text>
                  <text x="774" y="106" fill="#CBD5E1" fontSize="10.5">or NI Act s.138 if</text>
                  <text x="774" y="122" fill="#CBD5E1" fontSize="10.5">settlement PDC bounces.</text>
                  <text x="774" y="152" fill="#34D399" fontSize="10" fontWeight="bold">Principal + Interest</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "1. Evidence Lock (BSA s.63)",
                    desc: "Export portal wallet ledgers, CAS/CoE/LOA enrolment proofs, and commission slab annexures before escalating.",
                  },
                  {
                    step: "2. Contract Act s.213 Notice",
                    desc: "Serve a 15-day advocate demand for foreign university FX remittance dates and student-specific clawback debit notes.",
                  },
                  {
                    step: "3. MSMED s.15–18 & s.43B(h)",
                    desc: "Trigger 3x RBI bank rate compound interest and Income Tax disallowance leverage if Udyam-registered.",
                  },
                  {
                    step: "4. Order XXXVII CPC / Section 9",
                    desc: "File a summary suit on confirmed portal credit notes or invoke neutral institutional arbitration.",
                  },
                  {
                    step: "5. Order XXI / NI Act s.138",
                    desc: "Attach corporate bank accounts via execution or prosecute bounced settlement cheques with 20% interim relief.",
                  },
                ].map((card) => (
                  <div
                    key={card.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <div className="text-xs font-black text-red-400 uppercase tracking-wider mb-1">
                      {card.step}
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              <StudyAbroadCommissionCTA variant="dual" />
            </section>

            {/* Section 4: Interactive 4 Failure Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Overseas Aggregator Failure Modes &amp; Sub-Agent Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the exact bottleneck delaying your payout below to inspect the statutory basis and 3-step recovery sequence.
              </p>

              <StudyAbroadScenarioTabs />
            </section>

            {/* Section 5: Worked ₹36L Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Commission Ledger: ₹36 Lakh UK/Australia Intake Default
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a typical Punjab/Gujarat/Kerala regional study-abroad consultancy (Udyam-registered) that placed{" "}
                <strong>24 students</strong> across UK and Australian universities for the September/February intake through a Bengaluru/Gurugram master aggregator at an agreed ₹1,50,000 net sub-agent share per enrolled student (₹36,00,000 total). After 11 months, the aggregator released only ₹12,00,000 and froze ₹24,00,000 citing &ldquo;clawback reserve and pending reconciliation.&rdquo;
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-black uppercase tracking-widest text-red-400">
                    Liquidated Claim &amp; Statutory Interest Computation
                  </span>
                  <span className="text-xs text-slate-400">
                    Illustrative MSMED s.16 + Order XXXVII Ledger
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Gross Earned Commission (24 Students)</span>
                      <span className="font-bold text-white">₹36,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Less: Verified University Dropouts (1 Student)</span>
                      <span className="font-bold text-amber-400">- ₹1,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Less: Partial Tranche Released</span>
                      <span className="font-bold text-slate-200">- ₹12,00,000</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2">
                      <span className="font-bold text-emerald-400">Net Undisputed Principal Due</span>
                      <span className="font-black text-emerald-400">₹22,50,000</span>
                    </div>
                  </div>

                  <div className="bg-emerald-950/40 rounded-xl p-4 border border-emerald-700/40 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Delay Beyond 45-Day Cap (285 Days)</span>
                      <span className="font-bold text-white">~9.5 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">MSMED s.16 Rate (3&times; RBI 6.50% Bank Rate)</span>
                      <span className="font-bold text-emerald-400">19.50% p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Compounded Statutory Interest (Est.)</span>
                      <span className="font-bold text-emerald-400">₹3,69,800</span>
                    </div>
                    <div className="flex justify-between border-t border-emerald-700/40 pt-2">
                      <span className="font-bold text-white">Total Recoverable Demand</span>
                      <span className="font-black text-white">₹26,19,800</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Calculate exact day-by-day compound interest for your stalled commission invoices using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline font-semibold hover:text-white"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  and generate a formal demand using our{" "}
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="text-red-300 underline font-semibold hover:text-white"
                  >
                    MSME Delayed Payment Demand Notice Template
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Clawback, GST & TDS Rules */}
            <section
              id="heading-clawback-gst"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Defeating Arbitrary Clawbacks, GST Export Traps &amp; TDS Holds
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-sm sm:text-base font-black text-[#DC2626]">
                    1. Unsubstantiated &ldquo;Clawback Reserve&rdquo; Defenses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Foreign universities claw back commissions only when a student withdraws before the statutory census date or has a visa cancelled for fraud. Once a student clears Term-1 census and pays Term-2 fees, no university clawback risk survives. Under Indian Contract Act ss.73–74, an aggregator cannot hold pooled reserves across unrelated students without furnishing the university&apos;s student-specific refund debit note.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-sm sm:text-base font-black text-emerald-800">
                    2. Zero-Rated Export GST vs Domestic B2B Invoicing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    When your sub-agent contract is with an Indian Pvt Ltd aggregator, your supply is rendered to the Indian entity—not directly to the overseas university—so IGST s.16 zero-rated export rules generally do not apply. Issue compliant B2B tax invoices (with 18% GST and TDS reconciliation under s.194H) and adapt our{" "}
                    <Link
                      href="/templates/it-software-saas-msa-payment-default-legal-notice"
                      className="text-emerald-900 font-semibold underline"
                    >
                      B2B SaaS / Portal MSA Payment Default Notice
                    </Link>{" "}
                    for portal-governed commercial agreements.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Note: If your institution also handles government-funded overseas scholarship or state skill-mission tranches, check{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Section 80 CPC Notice to Government
                </Link>{" "}
                before suing public bodies. If the aggregator issued a settlement cheque that bounced, follow our{" "}
                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Cheque Bounce Account Closed &amp; Signature Mismatch Guide
                </Link>{" "}
                to lock criminal liability under NI Act Section 138.
              </p>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Portal Evidence &amp; BSA 2023 Section 63 Admissibility Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because master aggregators control the B2B application portal, your strongest protection against sudden login deactivation is compiling a self-contained electronic evidence dossier certified under{" "}
                <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> before sending a legal notice:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {[
                  "Executed Sub-Agent / Channel Partner Agreement & Commission Slab Annexures (PDF).",
                  "Portal Wallet Dashboard CSV exports & timestamped screen recordings showing 'Approved / Payable' balances.",
                  "Foreign University CAS (UK), CoE (Australia), or LOA (Canada) offer & enrolment confirmation emails.",
                  "Student Tuition Fee Remittance Receipts (Term-1 & Term-2 wire proofs proving census clearance).",
                  "Account-Manager WhatsApp & Email threads admitting university payout receipt or promising release dates.",
                  "Signed Tax Invoices, E-Invoices (IRN), Form 26AS / AIS TDS credits, and Udyam Registration Certificate.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="text-emerald-600 font-black mt-0.5">&check;</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Managing Multiple Branches or Bulk Defaulters?</strong>{" "}
                If your consultancy also faces unpaid institutional dues across multiple campuses, explore{" "}
                <Link
                  href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                  className="text-[#DC2626] font-semibold underline"
                >
                  RTE-Compliant Fee Recovery
                </Link>{" "}
                or upload your batch ledger via{" "}
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Bulk Recovery Cases (10 to 10,000+ Accounts)
                </Link>
                .
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Study-Abroad Commission Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline leading-relaxed"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
                <span>
                  Legal Review:{" "}
                  <strong className="text-slate-800">
                    Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions
                  </strong>
                </span>
                <span>Last Statutory Audit: 18 November 2026</span>
              </div>
            </section>

            {/* Bottom Dual-Track Conversion CTA */}
            <StudyAbroadCommissionCTA variant="dual" />
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides cluster="educationB2B" />
    </div>
  );
}
