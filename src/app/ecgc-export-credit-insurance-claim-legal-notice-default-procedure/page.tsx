import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EcgcTableOfContents from "./EcgcTableOfContents";
import EcgcScenarioTabs from "./EcgcScenarioTabs";
import EcgcClaimCTA from "./EcgcClaimCTA";

export const revalidate = 86400;

const PAGE_URL = "/ecgc-export-credit-insurance-claim-legal-notice-default-procedure";
const EXACT_H1 =
  "Filing a Bulletproof ECGC Export Default Claim: Default Declaration Timelines, Mandatory Buyer Legal Notice & Unconditional EDPMS Write-Off (Clause C.24)";
const META_TITLE = "ECGC Export Default Claim: Legal Notice & EDPMS Closure";
const META_DESCRIPTION =
  "Protect your 80–90% ECGC payout: Form 205 overdue reporting, audit-ready Legal Notices to foreign buyers & RBI Clause C.24 EDPMS write-off.";

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
        alt: formatAltText("ECGC export credit insurance claim legal notice and Clause C.24 EDPMS guide"),
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

const FAQS = [
  {
    question: "What is the exact timeline to report an overdue foreign buyer to ECGC?",
    answer:
      "Under ECGC Standard Policy and Specific Shipment Policy conditions, exporters must declare all shipments in Form 203 by the 15th of the following month and report any bill remaining unpaid 30 days past its due date in Form 205 (Monthly Declaration of Overdue Payments). A formal Report of Default must be submitted within 4 months from the due date (or extended due date) so ECGC can freeze buyer credit limits and preserve claim eligibility.",
  },
  {
    question: "Is a formal Legal Notice to the foreign buyer mandatory before ECGC pays the 80%–90% claim?",
    answer:
      "Yes. ECGC policy conditions obligate the insured exporter to act as a prudent uninsured seller and take all reasonable steps to prevent or minimize loss. Informal emails or WhatsApp reminders rarely pass ECGC's claim audit. An Advocate-drafted International Legal Demand Notice served via email and trackable international courier (with Proof of Delivery and a BSA 2023 Section 63 certificate) proves bonafide recovery diligence.",
  },
  {
    question: "Is complaining to the Indian Embassy or Consulate enough for an ECGC claim?",
    answer:
      "No. While filing a trade dispute with the Indian Mission or DGFT creates diplomatic outreach, embassies have no judicial authority to compel payment or toll limitation periods in the buyer's jurisdiction. ECGC claims officers expect formal legal demand notices and, where directed, local collection or legal proceedings alongside diplomatic intervention.",
  },
  {
    question: "How does RBI Master Direction Clause C.24 clear the remaining 10%–20% in EDPMS?",
    answer:
      "Normally, RBI limits exporter self-write-offs to 5% and AD Category-I Bank write-offs to 10% of the preceding year's realized export proceeds. However, Clause C.24 of the RBI Master Direction on Export of Goods and Services provides an unconditional carve-out: once ECGC settles an export credit claim, the AD Category-I Bank is authorized to write off the remaining unrealized export bill balance in EDPMS without applying the 10% ceiling.",
  },
  {
    question: "Can an exporter appeal if ECGC rejects a claim due to late Form 205 filing?",
    answer:
      "Yes. Exporters can submit a reasoned condonation and grievance representation to the ECGC Regional Review Committee or Grievance Redressal Officer, demonstrating that premiums were paid in full, no moral hazard existed, and continuous legal recovery steps (including formal Legal Notices and AD Bank follow-ups) protected ECGC's subrogation rights without causing financial prejudice.",
  },
  {
    question: "What happens if the foreign buyer raises a fake quality complaint after receiving the goods?",
    answer:
      "ECGC policies exclude unresolved commercial disputes until settled or adjudicated. To prevent a defaulting buyer from weaponizing a sham quality excuse, the exporter must immediately rebut the allegation with pre-shipment inspection reports (SGS/Intertek), clean Bills of Lading, destination customs clearance logs, and a formal Advocate Legal Notice invoking deemed acceptance under Sections 41 and 42 of the Sale of Goods Act, 1930.",
  },
  {
    question: "How does an ECGC claim protect an exporter from the RBI EDPMS Caution List?",
    answer:
      "Under FEMA 1999, unrealized export bills beyond 9 months (or 15 months where extended) trigger EDPMS flagging and potential Caution Listing by the RBI, which blocks future shipments and RoDTEP/Duty Drawback. Serving a formal Legal Notice establishes bonafide recovery effort for interim AD Bank extensions, and final ECGC settlement unlocks Clause C.24 full EDPMS closure.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "ECGC Ltd. — Standard Policy, Small Exporter's Policy & Claim Filing Guidelines",
    url: "https://www.ecgc.in/",
  },
  {
    title: "Reserve Bank of India (RBI) — Master Direction on Export of Goods and Services (EDPMS & Clause C.24 Write-Off)",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Foreign Exchange Management Act, 1999 (FEMA) — Export Realization & Repatriation Rules",
    url: "https://www.indiacode.nic.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & Delivery Logs)",
    url: "https://www.indiacode.nic.in/",
  },
  {
    title: "Directorate General of Foreign Trade (DGFT) — Trade Dispute & Indian Mission Intervention Framework",
    url: "https://www.dgft.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER = {
  name: "Anuj Anand Malik",
  title: "Advocate & Founder, AMA Legal Solutions",
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-17T00:00:00+05:30",
  dateModified: "2026-11-17T00:00:00+05:30",
  author: {
    "@type": "Person",
    name: REVIEWER.name,
    jobTitle: REVIEWER.title,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to File a Compliant ECGC Export Default Claim & Close EDPMS Under Clause C.24",
  description:
    "Four-stage operational workflow for Indian exporters to comply with ECGC default reporting, serve audit-ready foreign buyer legal notices, secure 80%–90% claim payouts, and close EDPMS under RBI Clause C.24.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "File Form 203 & Form 205 Overdue Declarations on Time",
      text: "Declare all shipments in Form 203 by the 15th of the next month and report any invoice overdue by 30+ days in Form 205, followed by a formal Report of Default within 4 months.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Audit-Ready Advocate Legal Notice to Foreign Buyer",
      text: "Dispatch an Advocate-vetted International Legal Demand Notice via email, WhatsApp, and trackable international courier with BSA 2023 s.63 evidence logs to satisfy ECGC loss-mitigation clauses.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Submit Protracted Default Claim After 4-Month Waiting Period",
      text: "Upon completion of the 4-month waiting period from due date, file the ECGC claim dossier with inspection certificates, shipping bills, and legal notice proof to receive 80%–90% indemnity.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Execute RBI Master Direction Clause C.24 EDPMS Write-Off",
      text: "Submit the ECGC Claim Settlement Advice and Letter of Subrogation to your AD Category-I Bank to write off the remaining 10%–20% uninsured balance in EDPMS without any 10% cap.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
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
      name: "Exporters & Cross-Border Trade Recovery",
      item: `${SITE_URL}/industries/exporters-cross-border-trade-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ECGC Export Default Claim & Legal Notice",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function EcgcExportCreditInsuranceClaimPage() {
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
            <span>IND-15 Cross-Border Trade</span>
            <span>&bull;</span>
            <span>ECGC Mitigation SOP</span>
            <span>&bull;</span>
            <span>RBI Clause C.24 EDPMS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; FEMA &amp; ECGC Compliance
            </span>
            Under{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Indian Exporter &amp; Cross-Border Trade Recovery
            </Link>{" "}
            protocols, securing an 80%–90% ECGC protracted-default payout requires timely Form 205 reporting, a formal Advocate Legal Notice to the foreign buyer proving loss mitigation, and post-settlement{" "}
            <strong>RBI Master Direction Clause C.24</strong> application to write off the uninsured 10%–20% balance in EDPMS without any 10% cap.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl font-black text-emerald-400">80%–90%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                ECGC Indemnity Cover (SCR / Standard Policy)
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-amber-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Form 205 Overdue Reporting Window
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-slate-100">4 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Protracted Default Waiting Period
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-red-400">Clause C.24</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Unconditional EDPMS Write-Off (0% Cap)
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
            Reviewed by <strong className="text-slate-200">{REVIEWER.name}</strong> ({REVIEWER.title}) &middot; Updated November 2026
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Exporters & Cross-Border Trade Recovery",
                href: "/industries/exporters-cross-border-trade-recovery",
              },
              {
                label: "ECGC Export Default Claim & Legal Notice",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <EcgcTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Dual Bottleneck */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Exporters Lose ECGC Claims &amp; Get Trapped in EDPMS
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Indian merchant exporters, engineering manufacturers, textile houses, and pharma shippers purchase{" "}
                  <strong>ECGC</strong> (Export Credit Guarantee Corporation of India) policies—such as the{" "}
                  <em>Standard Policy (SCR)</em>, <em>Small Exporter&apos;s Policy</em>, or <em>Specific Shipment Policy</em>—to insulate working capital against foreign buyer insolvency and protracted default. Yet, a disproportionately high volume of export credit claims are rejected or slashed on technical grounds before a single rupee is disbursed.
                </p>
                <p>
                  In practice, policyholders suffer a <strong>double statutory bottleneck</strong>. First, ECGC rejects the 80%–90% indemnity payout when the exporter misses monthly Form 205 overdue declarations or fails to produce audit-grade proof of prompt debt-mitigation steps—specifically, a formal{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Legal Notice to the International Client
                  </Link>{" "}
                  served after buyer default. Second, even when ECGC settles 80% of the invoice, the exporter&apos;s AD Category-I Bank refuses to close the Shipping Bill in the RBI&apos;s{" "}
                  <strong>Export Data Processing and Monitoring System (EDPMS)</strong> for the uncovered 20%, pushing the exporter toward the{" "}
                  <Link
                    href="/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    RBI EDPMS Caution List
                  </Link>
                  .
                </p>
                <p>
                  This operational playbook resolves both bottlenecks simultaneously. Whether you are managing a single unpaid{" "}
                  <Link
                    href="/recovery/export-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    export receivables default
                  </Link>{" "}
                  or an institutional portfolio of overdue foreign shipments, following this 4-stage compliance sequence locks in your ECGC payout and unlocks unconditional EDPMS closure under{" "}
                  <strong>RBI Master Direction Clause C.24</strong>.
                </p>
              </div>
            </section>

            {/* Section 2: 4-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4-Stage ECGC Claim &amp; Clause C.24 Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every ECGC protracted-default file must pass four sequential statutory gates from the date of invoice maturity to final EDPMS closure. Skipping Stage 2 (formal Legal Notice) is the single most common reason claims stall at Stage 3.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="920"
                  height="250"
                  viewBox="0 0 920 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="4-Stage ECGC Claim Compliance and RBI Clause C.24 EDPMS Write-Off Decision Tree"
                >
                  {/* Stage 1 */}
                  <rect x="12" y="25" width="200" height="190" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="38" cy="52" r="14" fill="#DC2626" />
                  <text x="38" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">1</text>
                  <text x="60" y="57" fill="#F8FAFC" fontSize="13" fontWeight="700">Form 203 &amp; 205</text>
                  <text x="26" y="88" fill="#94A3B8" fontSize="11">Declare shipment (Form 203)</text>
                  <text x="26" y="106" fill="#94A3B8" fontSize="11">by 15th of next month.</text>
                  <text x="26" y="132" fill="#FBBF24" fontSize="11" fontWeight="600">Due + 30 Days:</text>
                  <text x="26" y="150" fill="#CBD5E1" fontSize="11">File Form 205 Overdue</text>
                  <text x="26" y="168" fill="#CBD5E1" fontSize="11">Report &amp; freeze buyer CL.</text>
                  <rect x="26" y="182" width="172" height="22" rx="6" fill="#0F172A" />
                  <text x="112" y="197" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">GATE 1: ZERO SUPPRESSION</text>

                  {/* Arrow 1->2 */}
                  <path d="M214 120 L240 120" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="240,115 250,120 240,125" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="252" y="25" width="200" height="190" rx="14" fill="#1E293B" stroke="#DC2626" strokeWidth="1.8" />
                  <circle cx="278" cy="52" r="14" fill="#DC2626" />
                  <text x="278" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">2</text>
                  <text x="300" y="57" fill="#F8FAFC" fontSize="13" fontWeight="700">Buyer Legal Notice</text>
                  <text x="266" y="88" fill="#94A3B8" fontSize="11">Serve Advocate Notice via</text>
                  <text x="266" y="106" fill="#94A3B8" fontSize="11">Email + DHL/FedEx POD.</text>
                  <text x="266" y="132" fill="#F87171" fontSize="11" fontWeight="600">Due + 45 to 90 Days:</text>
                  <text x="266" y="150" fill="#CBD5E1" fontSize="11">Rebut sham quality claims;</text>
                  <text x="266" y="168" fill="#CBD5E1" fontSize="11">issue BSA s.63 certificate.</text>
                  <rect x="266" y="182" width="172" height="22" rx="6" fill="#450A0A" />
                  <text x="352" y="197" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="700">GATE 2: MITIGATION PROOF</text>

                  {/* Arrow 2->3 */}
                  <path d="M454 120 L480 120" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="480,115 490,120 480,125" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="492" y="25" width="200" height="190" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="518" cy="52" r="14" fill="#DC2626" />
                  <text x="518" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">3</text>
                  <text x="540" y="57" fill="#F8FAFC" fontSize="13" fontWeight="700">ECGC Claim Payout</text>
                  <text x="506" y="88" fill="#94A3B8" fontSize="11">Submit Report of Default</text>
                  <text x="506" y="106" fill="#94A3B8" fontSize="11">within 4 months of due date.</text>
                  <text x="506" y="132" fill="#34D399" fontSize="11" fontWeight="600">4-Month Wait Complete:</text>
                  <text x="506" y="150" fill="#CBD5E1" fontSize="11">File Claim + Subrogation;</text>
                  <text x="506" y="168" fill="#CBD5E1" fontSize="11">receive 80%–90% payout.</text>
                  <rect x="506" y="182" width="172" height="22" rx="6" fill="#0F172A" />
                  <text x="592" y="197" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">GATE 3: 80–90% INDEMNITY</text>

                  {/* Arrow 3->4 */}
                  <path d="M694 120 L720 120" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="720,115 730,120 720,125" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="732" y="25" width="176" height="190" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="1.8" />
                  <circle cx="758" cy="52" r="14" fill="#10B981" />
                  <text x="758" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">4</text>
                  <text x="780" y="57" fill="#F8FAFC" fontSize="13" fontWeight="700">Clause C.24 Close</text>
                  <text x="746" y="88" fill="#94A3B8" fontSize="11">Submit ECGC Settlement</text>
                  <text x="746" y="106" fill="#94A3B8" fontSize="11">Advice to AD Cat-I Bank.</text>
                  <text x="746" y="132" fill="#34D399" fontSize="11" fontWeight="600">Uncovered 10%–20%:</text>
                  <text x="746" y="150" fill="#CBD5E1" fontSize="11">Written off in EDPMS with</text>
                  <text x="746" y="168" fill="#CBD5E1" fontSize="11">zero 10% ceiling cap.</text>
                  <rect x="746" y="182" width="148" height="22" rx="6" fill="#064E3B" />
                  <text x="820" y="197" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">GATE 4: EDPMS CLEARED</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "1",
                    title: "Form 203 & Form 205 Overdue Reporting",
                    desc: "Declare shipments by the 15th of the next month (Form 203). Report unpaid bills 30+ days past due date in Form 205 to preserve buyer credit limit validity.",
                  },
                  {
                    step: "2",
                    title: "Audit-Ready Foreign Buyer Legal Notice",
                    desc: "Serve an Advocate Demand Notice via Email + DHL/FedEx POD with BSA 2023 s.63 logs to satisfy ECGC loss-mitigation clauses and rebut sham quality excuses.",
                  },
                  {
                    step: "3",
                    title: "4-Month Waiting Period & ECGC Payout",
                    desc: "File Report of Default within 4 months of due date. Upon completing the 4-month protracted default wait, submit claim dossier for 80%–90% indemnity.",
                  },
                  {
                    step: "4",
                    title: "RBI Clause C.24 Unconditional EDPMS Write-Off",
                    desc: "Present ECGC Settlement Advice to your AD Category-I Bank to write off the remaining 10%–20% balance in EDPMS without any 10% ceiling.",
                  },
                ].map((card) => (
                  <div
                    key={card.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {card.step}
                      </span>
                      <span className="text-sm font-bold">{card.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory & Timeline Matrix Table */}
            <section
              id="heading-timeline-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  ECGC Policy &amp; RBI EDPMS Statutory Timeline Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Missing a single statutory deadline in either the ECGC policy calendar or the FEMA 9-month realization clock can jeopardize both insurance recovery and AD Bank standing. Use our{" "}
                <Link
                  href="/tools/softex-fema-export-realization-deadline-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  FEMA Export Realization Deadline Calculator
                </Link>{" "}
                to track your shipping bill due dates alongside the matrix below.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Compliance Milestone</th>
                      <th className="p-3.5 font-bold">Statutory / Policy Window</th>
                      <th className="p-3.5 font-bold">Mandatory Deliverable</th>
                      <th className="p-3.5 font-bold">Consequence of Lapse</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Shipment Declaration (Form 203)</td>
                      <td className="p-3.5 text-slate-700">15th of month following shipment</td>
                      <td className="p-3.5 text-slate-700">Invoice value, buyer credit limit &amp; premium remittance</td>
                      <td className="p-3.5 text-[#DC2626] font-medium">Uninsured shipment; zero cover at default</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Overdue Statement (Form 205)</td>
                      <td className="p-3.5 text-slate-700">Within 30 days of invoice due date</td>
                      <td className="p-3.5 text-slate-700">Monthly list of all bills unpaid past maturity</td>
                      <td className="p-3.5 text-[#DC2626] font-medium">Technical rejection for late default intimation</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Report of Default (ROD)</td>
                      <td className="p-3.5 text-slate-700">Within 4 months of due date</td>
                      <td className="p-3.5 text-slate-700">Formal default notice to ECGC + buyer ledger</td>
                      <td className="p-3.5 text-[#DC2626] font-medium">Forfeiture of claim unless condoned on appeal</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Advocate Legal Demand Notice</td>
                      <td className="p-3.5 text-slate-700">Day 30–60 post-maturity</td>
                      <td className="p-3.5 text-slate-700">Email + Intl Courier POD + BSA 2023 s.63 log</td>
                      <td className="p-3.5 text-[#DC2626] font-medium">Audit failure under &ldquo;reasonable steps&rdquo; clause</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Protracted Default Claim Filing</td>
                      <td className="p-3.5 text-slate-700">After 4-month waiting period</td>
                      <td className="p-3.5 text-slate-700">Claim Form + Shipping Bill + BL + Legal Notice</td>
                      <td className="p-3.5 text-amber-700 font-medium">Claim held in abeyance / commercial dispute tag</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">FEMA Realization / Extension</td>
                      <td className="p-3.5 text-slate-700">9 months from date of export</td>
                      <td className="p-3.5 text-slate-700">AD Bank extension request + Legal Notice proof</td>
                      <td className="p-3.5 text-[#DC2626] font-medium">RBI EDPMS Caution Listing &amp; RoDTEP freeze</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">RBI Clause C.24 EDPMS Write-Off</td>
                      <td className="p-3.5 text-slate-700">Immediately on ECGC settlement</td>
                      <td className="p-3.5 text-slate-700">ECGC Settlement Advice + Letter of Subrogation</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Unconditional closure (no 10% AD-Bank cap)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 ECGC Claim Failure Modes &amp; Operational Counters
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select a failure scenario below to inspect the exact statutory counter-position and 3-step recovery sequence for your export finance and legal teams.
              </p>

              <EcgcScenarioTabs />
            </section>

            {/* Mid-Page Dual-Track CTA */}
            <EcgcClaimCTA />

            {/* Section 5: Indian Mission / Embassy vs. Formal Legal Notice */}
            <section
              id="heading-legal-notice-rule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Indian Mission Intervention vs. Audit-Ready Legal Notice
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  A recurring mistake among Indian exporters—especially in{" "}
                  <Link
                    href="/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    CAD / DP container abandonment
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    wrongful LC discrepancy dishonours
                  </Link>
                  —is assuming that writing to the Commercial Attach&eacute; at the Indian Embassy or filing a DGFT trade complaint satisfies ECGC&apos;s legal-action mandate. It does not.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-amber-900 mb-2">
                      Why Embassy Outreach Alone Fails ECGC Audit
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900/90 list-disc pl-4">
                      <li>Indian Missions issue diplomatic letters with zero statutory or judicial enforceability.</li>
                      <li>Embassy complaints do not stop foreign limitation clocks or create an admissible default record.</li>
                      <li>ECGC policy clauses require proof that the exporter acted like a prudent uninsured creditor pursuing legal remedies.</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-emerald-900 mb-2">
                      What an Audit-Ready Advocate Notice Delivers
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900/90 list-disc pl-4">
                      <li>Establishes formal demand, interest accrual, and rejection of sham quality excuses.</li>
                      <li>Creates verifiable DHL/FedEx POD + SMTP email + WhatsApp logs certified under BSA 2023 s.63.</li>
                      <li>Satisfies both ECGC mitigation rules and AD Bank FEMA extension /{" "}
                        <Link
                          href="/recovery/international-client-payment"
                          className="underline font-semibold"
                        >
                          international client recovery
                        </Link>{" "}
                        audits.
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  You can inspect and customize the exact statutory clauses required for overseas buyers in our{" "}
                  <Link
                    href="/templates/international-export-buyer-legal-demand-notice-fema-ecgc-format"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    International Export Buyer Legal Demand Notice Template (FEMA &amp; ECGC Format)
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: RBI Master Direction Clause C.24 */}
            <section
              id="heading-clause-c24"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Unlocking Unconditional EDPMS Write-Off Under RBI Clause C.24
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Under normal RBI norms (Part C.23 of the Master Direction on Export of Goods and Services), an exporter can self-write-off unrealized bills up to <strong>5%</strong>, and an AD Category-I Bank can approve write-offs up to <strong>10%</strong> of the total export proceeds realized during the previous calendar year. For mid-market exporters hit by a single large buyer default, the uncovered 10%–20% ECGC co-insurance share frequently exceeds this 10% annual cap—leaving the Shipping Bill stuck in EDPMS.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border-l-4 border-emerald-400">
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1.5">
                    RBI Export Master Direction — Clause C.24 Exception
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Where the unrealized export bill is covered by ECGC and <strong>ECGC has settled the claim</strong>, the AD Category-I Bank is expressly permitted to write off the remaining unrealized balance in EDPMS <strong>without any percentage ceiling (no 10% cap)</strong>, provided the exporter submits the ECGC Claim Settlement Advice and proves that all recovery/legal steps were duly exhausted.
                  </p>
                </div>
                <p>
                  Note on export incentives: while Clause C.24 clears your EDPMS record and prevents RBI Caution Listing, exporters must separately reconcile proportionate Duty Drawback or RoDTEP benefits with Customs if the full foreign exchange was not realized, unless ECGC settlement covers the realization shortfall under applicable FTP rules.
                </p>
              </div>
            </section>

            {/* Section 7: Worked Financial & EDPMS Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Ledger: USD 120,000 ECGC Payout &amp; Clause C.24 Closure
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider an Indian engineering exporter holding an ECGC Standard Policy (80% commercial risk cover) whose previous year&apos;s total export realization was USD 150,000 (giving a normal 10% AD-Bank write-off limit of only USD 15,000).
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-slate-400 text-xs uppercase font-bold">Defaulted Export Invoice (60 Days DA)</p>
                    <p className="text-xl font-black text-white mt-1">USD 120,000 (&#8377;1,00,80,000)</p>
                    <p className="text-xs text-slate-400 mt-1">Exchange rate benchmark: &#8377;84.00 / USD</p>
                  </div>
                  <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-700/50">
                    <p className="text-emerald-300 text-xs uppercase font-bold">ECGC 80% Claim Settlement</p>
                    <p className="text-xl font-black text-emerald-400 mt-1">USD 96,000 (&#8377;80,64,000)</p>
                    <p className="text-xs text-emerald-200/80 mt-1">Unlocked via Form 205 + Advocate Legal Notice</p>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-300">Uncovered 20% Balance Left in EDPMS</span>
                    <span className="font-bold text-amber-400">USD 24,000 (&#8377;20,16,000)</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-300">Normal 10% AD-Bank Cap (on USD 150K prior exports)</span>
                    <span className="font-bold text-red-400">USD 15,000 (Insufficient by USD 9,000)</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 border-t border-slate-800">
                    <span className="text-emerald-300 font-bold">RBI Clause C.24 Unconditional Write-Off</span>
                    <span className="font-black text-emerald-400">Full USD 24,000 Cleared (0% Cap)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: 8-Point BSA 2023 s.63 & ECGC Evidentiary Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8-Point ECGC Claim &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {[
                  "ECGC Policy Schedule & Approved Buyer Credit Limit (CL) Endorsement prior to shipment date.",
                  "Monthly Form 203 Shipment Declarations, Premium Ledger & Form 205 Overdue Acknowledgments.",
                  "Shipping Bill (ICEGATE), Commercial Invoice, Packing List & Clean On-Board Bill of Lading / AWB.",
                  "Pre-Shipment Quality Inspection Certificate (SGS / Intertek / Buyer QC sign-off) to defeat sham disputes.",
                  "Advocate-Drafted International Legal Demand Notice served via Email + Trackable DHL/FedEx POD.",
                  "Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 Certificate covering email headers & WhatsApp logs.",
                  "AD Category-I Bank Non-Realization / Dishonour Memo & FEMA 9-Month Extension Correspondence.",
                  "ECGC Claim Settlement Advice & Executed Letter of Subrogation for AD Bank Clause C.24 EDPMS closure.",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: ECGC Claims &amp; EDPMS Closure
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-slate-900 text-xs sm:text-sm">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Authorities &amp; Official Regulatory Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
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

      <RelatedRecoveryGuides />
    </div>
  );
}
