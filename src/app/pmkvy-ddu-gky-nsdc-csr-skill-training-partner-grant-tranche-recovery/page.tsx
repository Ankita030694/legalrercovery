import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SkillTrancheTableOfContents from "./SkillTrancheTableOfContents";
import SkillTrancheScenarioTabs from "./SkillTrancheScenarioTabs";
import SkillTrancheNoticeCTA from "./SkillTrancheNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH = "/pmkvy-ddu-gky-nsdc-csr-skill-training-partner-grant-tranche-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Recovering Stuck 30%–50% Assessment & Placement Tranches From State Skill Development Missions (SSDMs) & Corporate CSR Foundations";
const META_TITLE = "PMKVY, DDU-GKY, SSDM & CSR Tranche Recovery Guide";
const META_DESC =
  "Stuck PMKVY, DDU-GKY, SSDM & CSR Tranche-2/3 payouts despite AEBAS logs & placement audit? Use CPC s.80, MOU arbitration & Art. 226 writs.";

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
        alt: formatAltText("PMKVY DDU-GKY SSDM and CSR Grant Tranche Recovery Guide"),
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
    q: "Can a Skill Training Partner file a High Court Writ Petition under Article 226 for stuck PMKVY or DDU-GKY tranches?",
    a: "Yes, in specific circumstances. While High Courts do not ordinarily adjudicate disputed facts under Article 226, the Supreme Court in ABL International Ltd. v. Export Credit Guarantee Corpn. of India Ltd. ((2004) 3 SCC 553) held that where a State instrumentality (such as an SSDM or State Rural Livelihood Mission) arbitrarily withholds undisputed, audited contractual payments despite completed AEBAS attendance, SSC assessment, and placement verification, a Writ of Mandamus is maintainable unless an effective arbitration clause covers the dispute.",
  },
  {
    q: "Is a 60-day Section 80 CPC notice mandatory before suing a State Skill Development Mission (SSDM)?",
    a: "If the SSDM is a State Government department or its Mission Director is sued as a public officer in official capacity in a civil court, serving a 60-day statutory notice under Section 80(1) of the Code of Civil Procedure, 1908 is mandatory unless urgent interim relief is sought under Section 80(2). Even where the SSDM is registered as a State Society and the MOU contains an arbitration clause, issuing a structured 60-day pre-litigation notice creates an indisputable statutory record of demand and interest accrual.",
  },
  {
    q: "What if the SSDM MOU names the Mission Director or Principal Secretary as the Sole Arbitrator?",
    a: "Such unilateral appointment clauses are void under Section 12(5) read with the Seventh Schedule of the Arbitration and Conciliation Act, 1996, as settled by the Supreme Court in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) 20 SCC 760 and the 5-Judge Constitution Bench in Central Organisation for Railway Electrification (CORE). A Training Partner should serve a Section 21 notice objecting to the departmental officer and, failing mutual agreement within 30 days, file a Section 11(6) petition in the jurisdictional High Court for an independent arbitrator.",
  },
  {
    q: "How do we stop an SSDM from encashing our Performance Bank Guarantee (PBG) when they owe us Tranche-3?",
    a: "Where an SSDM threatens PBG invocation while simultaneously withholding audited Tranche-2/3 payouts exceeding the guarantee amount, immediately file a Section 9 Arbitration Petition (or Order XXXIX CPC / Article 226 interim stay) pleading 'special equities' and irretrievable injustice. Simultaneously serve the court filing acknowledgment on the issuing bank branch manager.",
  },
  {
    q: "Are Corporate CSR Foundations (Section 8 Companies) protected by Section 80 CPC when they freeze skill grants?",
    a: "No. Section 80 CPC applies only to the Central/State Government and public officers. A private corporate CSR Foundation or Section 8 Implementing Agency is a private juristic entity governed by the Indian Contract Act, 1872. Once training milestones and Utilisation Certificates are submitted under a signed CSR MOU, you can initiate Commercial Courts Act s.12A mediation, an Order XXXVII CPC Summary Suit, or Section 138 NI Act prosecution for dishonoured milestone cheques.",
  },
  {
    q: "Can a Training Partner claim MSME Samadhaan (Section 18) interest on stuck government skill-training tranches?",
    a: "MSME Samadhaan under Sections 15–18 of the MSMED Act, 2006 applies to contracts for 'goods supplied or services rendered' by a Udyam-registered Micro or Small Enterprise. Pure sovereign welfare grants without a buyer-supplier service consideration may face jurisdictional objections before MSEFC; however, commercial sub-contracts, third-party assessment mandates, and corporate CSR training service contracts with Udyam-registered TPs qualify for 3x RBI bank rate compound interest.",
  },
  {
    q: "What digital records are required under BSA 2023 Section 63 to prove DDU-GKY or PMKVY batch completion?",
    a: "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, all electronic portal records—AEBAS biometric attendance exports, Skill India Portal / Kaushal Bharat batch closure sheets, SSC third-party assessment scorecards, candidate bank-credited salary statements, EPFO/UAN verification screenshots, and email acknowledgments—must be accompanied by a signed Section 63 Electronic Evidence Certificate detailing the server/device custody and hash/export integrity.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Code of Civil Procedure, 1908 — Section 80 (Notice to Government) & Order XXXVII (Summary Suits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Arbitration and Conciliation Act, 1996 — Sections 9, 11(6), 12(5), 21, 29A & 36",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Ministry of Skill Development & Entrepreneurship (MSDE) — PMKVY & Common Norms Guidelines",
    url: "https://www.msde.gov.in/",
  },
  {
    title: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) — Ministry of Rural Development",
    url: "https://ddugky.gov.in/",
  },
  {
    title: "Companies Act, 2013 — Section 135 (Corporate Social Responsibility Policy Rules)",
    url: "https://www.indiacode.nic.in/handle/123456789/2114",
  },
];

const DECISION_STEPS = [
  {
    stage: "Stage 1",
    title: "Portal & Audit Lock",
    detail: "Export AEBAS biometric logs, SSC certificates, EPFO/UAN placement proofs & CA-signed UCs under BSA s.63.",
  },
  {
    stage: "Stage 2",
    title: "Entity & Clause Audit",
    detail: "Classify payer: SSDM/SRLM (State Society/Dept) vs NSDC vs Corporate Section 8 CSR Foundation.",
  },
  {
    stage: "Stage 3",
    title: "Statutory Demand",
    detail: "Serve 60-day Section 80 CPC Notice (State/SSDM), s.21 Arbitration Notice, or 15-day CSR Commercial Notice.",
  },
  {
    stage: "Stage 4",
    title: "BG Freeze & Forum",
    detail: "Move s.9 Arbitration / Art. 226 stay against wrongful PBG invocation; file s.11(6) or Order 37 Suit.",
  },
  {
    stage: "Stage 5",
    title: "Execution & Release",
    detail: "Enforce High Court Mandamus timeline or s.36 Arbitral Award against Mission/Corporate bank accounts.",
  },
];

export default function SkillTrainingTrancheRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerName = "Anuj Anand Malik";
  const reviewerTitle = "Advocate & Founder, AMA Legal Solutions";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESC,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: reviewerName,
      jobTitle: reviewerTitle,
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
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Skill Training Partners Recover Stuck 30%–50% Tranches from SSDMs and CSR Foundations",
    description:
      "Step-by-step statutory recovery SOP using BSA 2023 s.63 portal evidence, Section 80 CPC notices, independent MOU arbitration, and Article 226 Writ Mandamus.",
    step: DECISION_STEPS.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `${s.stage}: ${s.title}`,
      text: s.detail,
    })),
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "Education & EdTech Recovery",
        item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PMKVY, DDU-GKY, SSDM & CSR Tranche Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 Institutional Playbook</span>
            <span className="text-slate-500">&bull;</span>
            <span>PMKVY &bull; DDU-GKY &bull; SSDM &bull; CSR s.135</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When State Skill Development Missions (SSDMs) or CSR Foundations freeze 30%–50%
            Tranche-2/3 payouts after AEBAS biometric logs and SSC placement audits, Training
            Partners under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Education &amp; Skill-Training Recovery Hub
            </Link>{" "}
            enforce release via Section 80 CPC notices, independent MOU arbitration (s.12(5)),
            and Article 226 High Court Writ Mandamus.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">30%–50%</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Typical Tranche-2/3 Stuck Post-Audit
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">60 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Mandatory s.80 CPC Notice to State/SSDM
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Art. 226</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Writ Mandamus for Admitted Audited Bills
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.12(5)</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Bars Unilateral SSDM Officer Arbitrators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Education & Skill Recovery",
                href: "/industries/schools-universities-edtech-b2b-recovery",
              },
              {
                label: "PMKVY, DDU-GKY, SSDM & CSR Tranche Recovery",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <SkillTrancheTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Tranche Freeze Bottleneck */}
            <section
              id="heading-tranche-bottleneck"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why State Skill Missions Freeze Final 30%–50% Grant Tranches
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India, Project Implementing Agencies (PIAs) and NSDC-affiliated Training
                  Partners (TPs) executing <strong>PMKVY 3.0/4.0</strong>,{" "}
                  <strong>DDU-GKY</strong>, and State Skill Development Mission (SSDM) mandates
                  front-load 100% of working capital—residential hostels, Aadhaar-Enabled Biometric
                  Attendance System (AEBAS) hardware, trainer payroll, and post-placement tracking.
                  Under Common Norms, Tranche-1 (typically 30%) covers mobilisation, while the
                  decisive <strong>30% to 50% Tranche-2 and Tranche-3 payouts</strong> are tied to
                  Sector Skill Council (SSC) certification and 70% verified placement.
                </p>
                <p>
                  In practice, even after 2,000+ rural youth complete training on AEBAS logs, pass
                  third-party SSC assessments, and submit 3-to-6 months of bank-credited salary
                  slips and EPFO/UAN records, SSDMs and State Rural Livelihood Missions (SRLMs)
                  stall final release for 18 to 36 months. Common bureaucratic bottlenecks include
                  central-to-state fund release delays, repeated third-party desk re-audits,
                  unilateral portal rule changes applied retrospectively, and silent refusal to
                  close Utilisation Certificates (UCs).
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <strong className="font-bold text-amber-950">NPA &amp; Limitation Warning:</strong>{" "}
                  Waiting passively for departmental file movement erodes working capital into
                  bank NPAs while the 3-year limitation clock under the Limitation Act, 1963 keeps
                  running from the date each audited tranche became due. Formal written invocation
                  is essential to lock both limitation and interest.
                </div>
                <p className="text-xs text-slate-500">
                  Reviewed by <strong>{reviewerName}</strong>, {reviewerTitle}.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Escalation Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Skill-Mission &amp; CSR Tranche Escalation Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Recovery forum selection depends strictly on whether the defaulting counterparty is
                a sovereign State Mission/SRLM, an NSDC-empanelled agency, or a private Corporate
                CSR Foundation under Section 135 of the Companies Act, 2013.
              </p>

              {/* Desktop SVG Decision Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto mb-4">
                <svg
                  viewBox="0 0 900 240"
                  width={900}
                  height={240}
                  className="w-full h-auto rounded-xl border border-slate-200 bg-slate-900"
                  role="img"
                  aria-label="5-Stage Skill-Mission and CSR Tranche Escalation Decision Tree"
                >
                  <rect x="0" y="0" width="900" height="240" fill="#0F172A" rx="12" />
                  {[
                    { x: 20, stage: "STAGE 1", title: "AEBAS & BSA s.63", sub: "Lock Portal & UCs" },
                    { x: 196, stage: "STAGE 2", title: "Entity & MOU Audit", sub: "SSDM vs CSR s.8" },
                    { x: 372, stage: "STAGE 3", title: "Statutory Demand", sub: "s.80 CPC / s.21 Arb" },
                    { x: 548, stage: "STAGE 4", title: "BG Stay & Forum", sub: "s.9 / Art. 226 / O.37" },
                    { x: 724, stage: "STAGE 5", title: "Mandamus / s.36", sub: "Time-Bound Payout" },
                  ].map((node, i) => (
                    <g key={node.stage}>
                      <rect
                        x={node.x}
                        y="48"
                        width="156"
                        height="144"
                        rx="10"
                        fill={i === 2 ? "#7F1D1D" : "#1E293B"}
                        stroke={i === 2 ? "#DC2626" : "#334155"}
                        strokeWidth="2"
                      />
                      <text
                        x={node.x + 78}
                        y="84"
                        textAnchor="middle"
                        fill="#F87171"
                        fontSize="11"
                        fontWeight="bold"
                      >
                        {node.stage}
                      </text>
                      <text
                        x={node.x + 78}
                        y="118"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="14"
                        fontWeight="bold"
                      >
                        {node.title}
                      </text>
                      <text
                        x={node.x + 78}
                        y="148"
                        textAnchor="middle"
                        fill="#CBD5E1"
                        fontSize="11"
                      >
                        {node.sub}
                      </text>
                      {i < 4 && (
                        <path
                          d={`M ${node.x + 158} 120 L ${node.x + 174} 120`}
                          stroke="#DC2626"
                          strokeWidth="3"
                          markerEnd="url(#arrow)"
                        />
                      )}
                    </g>
                  ))}
                  <defs>
                    <marker
                      id="arrow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L0,6 L6,3 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {DECISION_STEPS.map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      {item.stage}
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: CPC s.80, MOU Arbitration &amp; Art. 226 Writs
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Counterparty / Trigger</th>
                      <th className="p-3.5 font-bold">Governing Statute / Hook</th>
                      <th className="p-3.5 font-bold">Pre-Action Notice</th>
                      <th className="p-3.5 font-bold">Target Judicial Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        State Skill Mission (SSDM / SRLM) — Audited Bill Held
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Art. 226 &amp; Art. 14 Constitution (<em>ABL International</em>)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Formal Demand / s.80 CPC Notice (where applicable)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Jurisdictional High Court (Writ Mandamus)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        SSDM MOU with Unilateral Arbitrator Clause
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Arbitration Act s.12(5), s.21 &amp; s.11(6) (<em>Perkins Eastman</em> /{" "}
                        <em>CORE</em>)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-Day s.21 Invocation Objecting to Officer Arbitrator
                      </td>
                      <td className="p-3.5 text-slate-900 font-semibold">
                        High Court s.11(6) &rarr; Independent Sole Arbitrator
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Retaliatory Performance Bank Guarantee Invocation
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Arbitration Act s.9 / Order XXXIX CPC (Special Equities)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Urgent Filing + Bank Branch Intimation
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        Commercial Court / High Court Injunction
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Corporate CSR Foundation (Section 8 / PSU)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.73, Order XXXVII CPC &amp; Commercial Courts s.12A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        15-Day Commercial Demand Notice + s.12A Mediation
                      </td>
                      <td className="p-3.5 text-slate-900 font-semibold">
                        Commercial Court / Civil Court Summary Suit
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Bounced CSR Milestone Cheque / Sub-Centre PDC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act 1881 s.138 &amp; PSS Act 2007 s.25
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mandatory 30-Day Post-Return Notice (15-Day Cure)
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        JMFC / Metropolitan Magistrate Court
                      </td>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Skill-Training &amp; CSR Default Scenarios (Interactive Playbook)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact institutional bottleneck below to inspect the governing statute,
                Supreme Court precedent, and 3-step execution sequence.
              </p>

              <SkillTrancheScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Ledger: ₹64 Lakh Stuck DDU-GKY &amp; PMKVY Tranche-3
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Training Partner sanctioned 2,000 candidates across 4 districts at an
                average Common Norms training-plus-boarding cost of ₹8,000/candidate (Total
                Sanction: ₹1,60,00,000), where the final 40% Tranche-3 has been withheld for 24
                months post-SSC certification and placement audit:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Total Sanctioned Project Value (2,000 Candidates)</span>
                  <span className="font-bold text-white">&#8377;1,60,00,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Tranche-1 &amp; Tranche-2 Released (60%)</span>
                  <span className="font-bold text-slate-300">&#8377;96,00,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-red-300 font-semibold">
                    Stuck Tranche-3 Principal (40% Post-Placement)
                  </span>
                  <span className="font-extrabold text-red-400">&#8377;64,00,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">
                    24-Month Commercial / Arbitral Interest (@12% p.a. simple pendente lite)
                  </span>
                  <span className="font-bold text-amber-400">&#8377;15,36,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">
                    Blocked 5% Performance Bank Guarantee Margin Released
                  </span>
                  <span className="font-bold text-emerald-400">&#8377;8,00,000</span>
                </div>
                <div className="flex justify-between pt-2 text-sm sm:text-base">
                  <span className="font-extrabold text-white">Total Quantified Recovery Claim</span>
                  <span className="font-black text-emerald-400">&#8377;87,36,000</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4">
                For commercial CSR service contracts or eligible Udyam-registered service invoices,
                compute statutory 3x RBI bank rate compound interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 6: BG Protection & Blacklisting */}
            <section
              id="heading-bg-protection"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Preventing Wrongful Bank Guarantee Invocation &amp; Blacklisting
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Many Training Partners hesitate to issue a formal{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 80 CPC Notice to Government
                  </Link>{" "}
                  out of fear that the SSDM will retaliate by invoking their 5%–10% Performance Bank
                  Guarantee (PBG) or issuing a blacklisting order that disqualifies them from future
                  tenders across India.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
                      PBG Injunction (Special Equities)
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      Under Section 9 of the Arbitration Act or Article 226, courts restrain PBG
                      encashment where the TP demonstrates that audited unpaid tranches far exceed
                      the guarantee sum and invocation is an arbitrary counter-blast to a lawful
                      payment demand.
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      Anti-Blacklisting Guardrail
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Under settled Supreme Court administrative law (<em>Kulja Industries</em> &amp;{" "}
                      <em>Gorkha Security Services</em>), an SSDM cannot blacklist a Training Partner
                      without a specific show-cause notice proposing debarment and a reasoned
                      speaking order.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Skill India, AEBAS &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {[
                  "Executed SSDM / NSDC / Corporate CSR MOU, Sanction Order, and Target Allocation Letter with jurisdiction & arbitration clauses.",
                  "AEBAS biometric daily attendance exports and Skill India Portal / Kaushal Bharat batch-closure snapshots.",
                  "Sector Skill Council (SSC) third-party assessment result sheets and candidate certification logs.",
                  "Placement verification pack: offer letters, 3-month bank-credited salary proofs, and EPFO/UAN verification logs.",
                  "Chartered Accountant-certified Utilisation Certificates (UCs) and audited tranche invoices submitted on portal/dak.",
                  "Signed Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 Electronic Evidence Certificate covering all portal exports and email/WhatsApp follow-ups.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="text-emerald-600 font-black mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <SkillTrancheNoticeCTA />

            {/* Section 8: IND-17 & Cross-Links */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  IND-17 Education, Skill-Mission &amp; Commercial Recovery Links
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <Link
                  href="/industries/schools-universities-edtech-b2b-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="font-bold text-slate-900">
                    Education, Universities &amp; EdTech B2B Hub &rarr;
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Complete IND-17 recovery directory for schools, trusts, and skill institutes.
                  </p>
                </Link>
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="font-bold text-slate-900">
                    Section 80 CPC Notice to Government &rarr;
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Mandatory 60-day statutory notice rules for State Missions and PSUs.
                  </p>
                </Link>
                <Link
                  href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="font-bold text-slate-900">
                    B2B EdTech, Smart-Class &amp; ERP Recovery &rarr;
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Suing Registered Societies &amp; Trusts under s.6 Societies Act.
                  </p>
                </Link>
                <Link
                  href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="font-bold text-slate-900">
                    Private School Fee Recovery Without Holding TC &rarr;
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    RTE s.5(3) compliant parent fee recovery and Order 37 suits.
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="font-bold text-slate-900">
                    Cheque Bounce: Account Closed &amp; Signature Mismatch &rarr;
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    NI Act s.138 prosecution for bounced CSR or sub-centre PDCs.
                  </p>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="font-bold text-slate-900">
                    Advocate-Vetted Legal Notice Template &rarr;
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Interactive commercial demand and reply workspace with BSA s.63 clauses.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Skill Grant &amp; CSR Tranche Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Skill-Mission Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
