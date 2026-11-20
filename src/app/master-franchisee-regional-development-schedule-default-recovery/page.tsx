import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MasterFranchiseeTableOfContents from "./MasterFranchiseeTableOfContents";
import MasterFranchiseeScenarioTabs from "./MasterFranchiseeScenarioTabs";
import MasterFranchiseeCTA from "./MasterFranchiseeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/master-franchisee-regional-development-schedule-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Master Franchisee Squatting on State Exclusivity Without Hitting Store-Opening Targets (or Pocketing Sub-Franchise Fees)? Step-In & Recovery Guide";

// Tightened from 63ch PDF draft to 55ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Master Franchisee Territory Breach & Fee Share Recovery";

// 153ch — within Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Revoke dead-weight regional exclusivity cleanly, exercise Step-In Assignment over healthy sub-franchisees, and recover withheld sub-franchise fee shares.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "master franchisee territory development schedule breach recovery",
    "master franchisee squatting on state exclusivity without opening stores",
    "sub franchise fee share not remitted to principal brand",
    "step in rights direct assignment of sub franchisees",
    "revoking state master franchise exclusivity notice",
    "international brand vs indian master franchisee arbitration",
  ],
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
        alt: formatAltText(META_TITLE),
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
      "The Commercial Courts Act, 2015 (Section 2(1)(c)(ix) Franchise & Distribution Agreements + Section 12A Urgent Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Section 9 Interim Measures, Section 2(2) Proviso for Foreign Seats & Section 21 Invocation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Section 55 Time of Essence, Section 62 Novation & Section 74 Milestone Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316(5) Criminal Breach of Trust by Entrusted Agent / Sub-Franchise Fee Diversion)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Trade Marks Act, 1999 (Sections 29 & 135 — Territorial License Termination & Post-Termination Restraint)",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Certification for ERP Development Logs & Sub-Franchise Bank Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Can a principal brand revoke state exclusivity without terminating the Master Franchisee's own flagship stores?",
    answer:
      "Yes, if the Master Franchise Agreement (MFA) distinguishes between the Master's unit-level right to operate existing compliant stores and its regional development exclusivity. By serving a 30-day Cure-or-Exclusivity-Revocation Notice under Section 55 of the Indian Contract Act, 1872, the franchisor can strip territorial exclusivity for unserved districts while preserving or separately managing existing outlets.",
  },
  {
    question:
      "How do Tripartite Step-In Clauses protect healthy sub-franchisees when the Master Franchisee defaults?",
    answer:
      "A Tripartite Step-In and Direct Assignment clause—executed at the time each sub-franchise agreement is approved—grants the Principal Brand an irrevocable option to step directly into the Master's shoes upon MFA termination. Once triggered, sub-franchisees remit royalties and sign-on tranches straight to Brand HQ without shutting down compliant stores.",
  },
  {
    question:
      "What legal remedy applies if a Master Franchisee collects ₹20L sub-franchise fees and fails to remit our 40%–50% brand share?",
    answer:
      "Withholding the Principal Brand's contractually earmarked share of third-party sub-franchise fees constitutes both a commercial debt under Commercial Courts Act s.2(1)(c)(ix) and fiduciary misappropriation under BNS 2023 s.316(5). Franchisors should issue a 7-day Tripartite Accounting Notice, redirect future sub-franchisee tranches directly to HQ, and move under Arbitration Act s.9 for bank-account freeze and disclosure.",
  },
  {
    question:
      "Does the Master Franchisee have a right to demand a refund of the upfront Territory Fee upon termination for non-development?",
    answer:
      "No. Upfront regional reservation or master development fees are earned consideration for blocking the state territory from rival investors during the ramp-up window. Where the Master breaches the Regional Development Schedule, the fee is lawfully retained and adjusted against Section 74 milestone liquidated damages and lost state royalty projections.",
  },
  {
    question:
      "Can an international franchisor (Singapore, Dubai, UK, or US) obtain urgent Indian court relief against a defaulting Indian Master?",
    answer:
      "Yes. Under the proviso to Section 2(2) of the Arbitration and Conciliation Act, 1996, Section 9 interim court relief in India applies even to foreign-seated international commercial arbitrations unless expressly excluded in the MFA. Foreign brands can seek immediate High Court injunctions protecting Indian trademarks and sub-franchisee step-in continuity while running SIAC, ICC, or LCIA arbitration.",
  },
  {
    question:
      "What if the Master Franchisee did not sign a tripartite addendum with existing sub-franchisees?",
    answer:
      "Even without a pre-signed tripartite addendum, the Principal Brand can terminate the Master's sub-licensing authority, serve Trademark & System Authorization Revocation Notices on sub-franchisees, and offer direct fresh unit Franchise Agreements to compliant operators—backed by a Section 9 injunction barring the ex-Master from interfering.",
  },
  {
    question:
      "Does mandatory Section 12A pre-institution mediation block an urgent injunction to stop a rogue Master from signing unauthorized sub-franchisees?",
    answer:
      "No. Under the Supreme Court's ruling in Yamini Manohar v. T.K.D. Keerthi (2023), commercial suits seeking urgent interim relief—such as restraining an ex-Master from pocketing fresh sub-franchise deposits or misusing brand IP—are exempt from mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-20T09:00:00+05:30",
  dateModified: "2026-11-20T09:00:00+05:30",
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
      url: `${SITE_URL}/logo.png`,
    },
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Revoke Master Franchisee Exclusivity, Exercise Sub-Franchisee Step-In & Recover Fee Shares",
  description:
    "Four-step institutional playbook for franchisors to strip stalled state exclusivity, step into healthy sub-franchise agreements, and recover withheld fee shares.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Regional Development Schedule (RDS) & Sub-Franchise Fee Ledger",
      text: "Compile milestone store-opening shortfalls, sub-franchisee sign-on dates, and unremitted fee shares backed by BSA 2023 s.63 electronic certification.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve 30-Day Cure-or-Exclusivity-Revocation Notice",
      text: "Issue formal notice under Contract Act s.55 and MFA default clauses via Email, WhatsApp, and Speed Post RPAD stripping unserved territory exclusivity.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Trigger Tripartite Step-In & Direct Royalty Redirect",
      text: "Serve Step-In Assignment and Payment Redirect Notices on compliant unit sub-franchisees so monthly royalties flow directly to Principal Brand HQ.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Section 9 Interim Petition & Commercial Recovery Claim",
      text: "Approach the Commercial Court under Arbitration Act s.9 (or Commercial Courts Act s.2(1)(c)(ix)) for asset freeze, IP restraint, and ₹50L–₹10Cr recovery.",
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
      name: "Franchisor & Dealership Recovery",
      item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Master Franchisee Territory Breach & Fee Share Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function MasterFranchiseeTerritoryRecoveryPage() {
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
            <span>IND-24 · Franchisors &amp; Brand Licensors</span>
            <span className="text-red-700">|</span>
            <span>Master Franchise Step-In Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Statutory Summary */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              Commercial Courts Act s.2(1)(c)(ix)
            </Link>{" "}
            and Tripartite Step-In clauses, principal brands can strip dead-weight
            state exclusivity upon Regional Development Schedule default, novate
            compliant unit sub-franchisees directly to Brand HQ, and recover
            withheld ₹50L–₹10Cr sub-franchise fee shares via Arbitration Act s.9
            and BNS s.316(5).
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                ₹50L–₹10Cr
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Typical Regional Master Dispute Ticket
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                7–30 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Exclusivity Revocation &amp; Step-In Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                Sec. 2(1)(c)(ix)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Statutory Commercial Dispute Jurisdiction
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                BNS s.316(5)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Criminal Breach for Pocketed Fee Shares
              </p>
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
                label: "Franchisor & Dealership Recovery",
                href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
              },
              {
                label: "Master Franchisee Territory Default",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <MasterFranchiseeTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="exclusivity-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why State Master Franchisees Squat on Exclusivity &amp; Hoard Fees
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  National and international brands entering high-growth Indian
                  states—such as Maharashtra, Gujarat, Karnataka, Delhi-NCR,
                  Telangana, or Punjab—routinely grant exclusive State or
                  Regional Master Franchise rights in exchange for an upfront
                  territory fee and a binding{" "}
                  <strong>Regional Development Schedule (RDS)</strong> (e.g., 15
                  outlets in 36 months).
                </p>
                <p>
                  When a Master Franchisee runs out of expansion capital or pivots
                  focus, two destructive failure modes paralyze the brand:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Dead-Weight Territory Squatting:</strong> The Master
                    opens 1 or 2 flagship outlets, misses Q2–Q6 store-opening
                    milestones, yet refuses to surrender state exclusivity—blocking
                    the Principal Brand from onboarding funded local investors in
                    20+ unserved districts.
                  </li>
                  <li>
                    <strong>Sub-Franchise Fee &amp; Royalty Pocketing:</strong>{" "}
                    The Master signs unit sub-franchisees, collects ₹15L–₹30L in
                    upfront sub-franchise fees plus monthly 6%–8% royalties, and
                    withholds the Principal Brand&apos;s contractually earmarked
                    40%–50% split while blaming &ldquo;unreconciled launch
                    marketing expenses.&rdquo;
                  </li>
                </ul>
                <p>
                  Because hasty termination without a{" "}
                  <strong>Step-In Assignment protocol</strong> can spook healthy
                  unit sub-franchisees into shutting down or defecting, brand
                  expansion VPs need a surgical two-track legal mechanism: strip
                  the Master&apos;s exclusivity cleanly while preserving every
                  revenue-generating sub-franchisee outlet in the state.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Decision Tree: Exclusivity Revocation vs Sub-Franchisee Step-In
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before issuing a blanket termination notice, classify the Master
                Franchisee&apos;s default into one of two escalation tracks so
                healthy unit operators are transitioned straight to Principal
                Brand HQ without a single day of store downtime.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-950 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="860"
                  height="310"
                  viewBox="0 0 860 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Master Franchisee Default Decision Tree Flowchart"
                  className="w-full h-auto"
                >
                  {/* Root Node */}
                  <rect
                    x="20"
                    y="115"
                    width="190"
                    height="80"
                    rx="12"
                    fill="#1E293B"
                    stroke="#DC2626"
                    strokeWidth="2"
                  />
                  <text
                    x="115"
                    y="145"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    GATE 1: AUDIT DEFAULT
                  </text>
                  <text
                    x="115"
                    y="165"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    RDS Shortfall or
                  </text>
                  <text
                    x="115"
                    y="182"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Fee Share Withheld?
                  </text>

                  {/* Connector Arrows */}
                  <path
                    d="M210 140 L270 75"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M210 170 L270 235"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />

                  {/* Branch A: RDS Squatting */}
                  <rect
                    x="275"
                    y="25"
                    width="245"
                    height="95"
                    rx="12"
                    fill="#0F172A"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <text
                    x="397"
                    y="50"
                    textAnchor="middle"
                    fill="#FBBF24"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    TRACK A: TERRITORY SQUATTING
                  </text>
                  <text
                    x="397"
                    y="70"
                    textAnchor="middle"
                    fill="#E2E8F0"
                    fontSize="11"
                  >
                    Serve 30-Day Cure-or-Revocation
                  </text>
                  <text
                    x="397"
                    y="87"
                    textAnchor="middle"
                    fill="#E2E8F0"
                    fontSize="11"
                  >
                    Notice (Contract Act s.55 &amp; s.74)
                  </text>
                  <text
                    x="397"
                    y="104"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="10"
                  >
                    Strip State Exclusivity in 30 Days
                  </text>

                  {/* Branch B: Fee Pocketing */}
                  <rect
                    x="275"
                    y="185"
                    width="245"
                    height="100"
                    rx="12"
                    fill="#0F172A"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                  />
                  <text
                    x="397"
                    y="210"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    TRACK B: SUB-FEE DIVERSION
                  </text>
                  <text
                    x="397"
                    y="230"
                    textAnchor="middle"
                    fill="#E2E8F0"
                    fontSize="11"
                  >
                    7-Day Accounting + Direct Payment
                  </text>
                  <text
                    x="397"
                    y="247"
                    textAnchor="middle"
                    fill="#E2E8F0"
                    fontSize="11"
                  >
                    Redirect to Sub-Franchisees
                  </text>
                  <text
                    x="397"
                    y="264"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="10"
                  >
                    BNS s.316(5) + NI s.138 Trigger
                  </text>

                  {/* Converge Arrows */}
                  <path
                    d="M520 75 L585 135"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />
                  <path
                    d="M520 235 L585 175"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />

                  {/* Final Node: Step-In & Sec 9 */}
                  <rect
                    x="590"
                    y="95"
                    width="250"
                    height="120"
                    rx="12"
                    fill="#064E3B"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <text
                    x="715"
                    y="122"
                    textAnchor="middle"
                    fill="#6EE7B7"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    GATE 3: STEP-IN &amp; RECOVERY
                  </text>
                  <text
                    x="715"
                    y="144"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    1. Tripartite Novation Addendum
                  </text>
                  <text
                    x="715"
                    y="164"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    2. Sec. 9 Bank Freeze &amp; Restraint
                  </text>
                  <text
                    x="715"
                    y="184"
                    textAnchor="middle"
                    fill="#A7F3D0"
                    fontSize="11"
                  >
                    3. Commercial Suit / Arbitration
                  </text>
                  <text
                    x="715"
                    y="202"
                    textAnchor="middle"
                    fill="#A7F3D0"
                    fontSize="10"
                  >
                    Zero Store Closures · Direct Royalties
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-[10px] font-bold uppercase text-red-400 mb-1">
                    Gate 1 · Audit Default
                  </p>
                  <p className="text-sm font-bold">
                    Separate RDS Store-Opening Shortfall from Sub-Franchise Fee
                    Diversion
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-[10px] font-bold uppercase text-amber-700 mb-1">
                    Track A · Territory Squatting
                  </p>
                  <p className="text-xs text-slate-800">
                    Serve 30-Day Cure-or-Exclusivity-Revocation Notice under
                    Contract Act s.55 &amp; s.74 to strip unserved districts.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-[10px] font-bold uppercase text-[#DC2626] mb-1">
                    Track B · Sub-Fee Diversion
                  </p>
                  <p className="text-xs text-slate-800">
                    Issue 7-Day Accounting Notice + Direct Payment Redirect to
                    sub-franchisees, backed by BNS s.316(5) &amp; NI s.138.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-[10px] font-bold uppercase text-emerald-700 mb-1">
                    Gate 3 · Step-In &amp; Recovery
                  </p>
                  <p className="text-xs text-slate-800">
                    Execute Tripartite Step-In Addenda with healthy outlets +
                    file Arbitration Act s.9 for bank freeze and fee recovery.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Matrix: Territory Breach &amp; Fee-Share Recovery
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default Type</th>
                      <th className="p-3.5 font-bold">Controlling Statute</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Execution Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Missed RDS Store-Opening Milestones
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian Contract Act s.55 &amp; s.74; Commercial Courts
                        Act s.2(1)(c)(ix)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Revoke state exclusivity; forfeit territory fee as
                        milestone liquidated damages
                      </td>
                      <td className="p-3.5 font-bold text-emerald-700">
                        30 Days (Cure Notice)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Pocketing Sub-Franchise Sign-On Fees
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS 2023 s.316(5) + Arbitration Act s.9 + NI Act s.138
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Fiduciary breach FIR/complaint, Section 9 bank freeze,
                        PDC prosecution
                      </td>
                      <td className="p-3.5 font-bold text-[#DC2626]">
                        7–15 Days (Urgent)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Preserving Healthy Sub-Franchisees
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Tripartite Step-In Clause; Contract Act s.40 &amp; s.62
                        (Novation)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Direct Assignment Addendum; redirect monthly royalties to
                        Brand HQ
                      </td>
                      <td className="p-3.5 font-bold text-emerald-700">
                        48–96 Hours Post-Termination
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Foreign Brand vs Indian Master
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Arbitration Act s.2(2) Proviso + s.9 + Part II s.44–49
                        (NY Convention)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian High Court s.9 IP &amp; escrow protection +
                        SIAC/ICC award
                      </td>
                      <td className="p-3.5 font-bold text-amber-700">
                        14–21 Days (Interim)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Judicial Precedents */}
            <section
              id="judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Key Judicial Precedents for Master Franchise Enforcement
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex gap-4">
                  <div className="w-1.5 bg-[#DC2626] rounded-full shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      Yamini Manohar v. T.K.D. Keerthi (Supreme Court, 2023)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Commercial suits that genuinely contemplate{" "}
                      <strong>urgent interim relief</strong>—such as restraining
                      a terminated Master Franchisee from signing unauthorized
                      sub-franchisees or interfering with Step-In operators—are
                      exempt from mandatory pre-institution mediation under
                      Section 12A of the Commercial Courts Act, 2015.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex gap-4">
                  <div className="w-1.5 bg-[#DC2626] rounded-full shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.
                      (Supreme Court, 2022)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where no urgent interim relief is sought (e.g., pure
                      post-termination historical fee-share recovery after
                      exclusivity has already lapsed), Section 12A pre-institution
                      mediation is mandatory before filing a Commercial Suit—making
                      pre-suit statutory demand notices essential to trigger fast
                      settlement or satisfy s.12A compliance.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex gap-4">
                  <div className="w-1.5 bg-[#DC2626] rounded-full shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      CORE 5-Judge Constitution Bench (Supreme Court, 2024)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Unilateral appointment of a sole arbitrator by the
                      franchisor is invalid under Section 12(5). Principal brands
                      must either invoke a neutral arbitral institution (MCIA,
                      DIAC, SIAC, or{" "}
                      <Link
                        href="/online-dispute-resolution-india"
                        className="text-[#DC2626] underline font-semibold"
                      >
                        ODR panel
                      </Link>
                      ) or approach the High Court under Section 11 for rapid
                      independent arbitrator appointment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Regional Master Franchise Failure Modes &amp; Counter-Moves
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact regional dispute profile below to review the
                controlling statutory hook, 3-step escalation sequence, and
                expected Master Franchisee counter-defenses.
              </p>

              <MasterFranchiseeScenarioTabs />
            </section>

            {/* Section 6: Worked Recovery Ledger */}
            <section
              id="worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Recovery Ledger: ₹1.84 Cr State Master Default
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Illustration of a QSR/Retail Principal Brand enforcing an MFA
                default in Gujarat where the Master opened only 3 of 12
                scheduled outlets over 24 months and pocketed 50% principal
                brand shares on 4 sub-franchise signings:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Quantified Claim &amp; Step-In Valuation Sheet
                  </span>
                  <span className="text-xs text-slate-400">
                    Commercial Courts Act s.2(1)(c)(ix)
                  </span>
                </div>

                <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      1. Unremitted 50% Share of 4 Sub-Franchise Sign-On Fees
                      (₹20L × 4 × 50%)
                    </span>
                    <span className="font-bold text-white shrink-0">
                      ₹40,00,000
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      2. Withheld Principal Share of Unit Royalties (9 Months
                      Audited Arrears)
                    </span>
                    <span className="font-bold text-white shrink-0">
                      ₹27,50,000
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      3. RDS Milestone Liquidated Damages (9 Unopened Stores ×
                      ₹12L/store under s.74)
                    </span>
                    <span className="font-bold text-white shrink-0">
                      ₹1,08,00,000
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      4. Contractual Default Interest @ 18% p.a. on Withheld
                      Fee Shares
                    </span>
                    <span className="font-bold text-amber-400 shrink-0">
                      ₹8,50,000
                    </span>
                  </div>
                  <div className="py-3 flex justify-between gap-4 bg-emerald-950/50 px-3 rounded-xl mt-2 border border-emerald-800/50">
                    <span className="font-bold text-emerald-300">
                      Total Actionable Recovery Claim (+ Direct Step-In of 3
                      Healthy Outlets)
                    </span>
                    <span className="font-black text-emerald-400 text-base sm:text-lg shrink-0">
                      ₹1,84,00,000
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: 6-Point BSA s.63 Evidence Dossier */}
            <section
              id="evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  6-Point Regional Development &amp; BSA 2023 s.63 Evidence Pack
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed MFA & RDS Annexure",
                    desc: "Stamped Master Franchise Agreement highlighting the quarterly store-opening table, cure periods, and automatic exclusivity-conversion clause.",
                  },
                  {
                    title: "2. Sub-Franchise Tripartite Addenda",
                    desc: "Signed Brand Approval NOCs and Tripartite Step-In Clauses linking each unit operator directly to Principal Brand HQ upon Master default.",
                  },
                  {
                    title: "3. Sub-Franchisee Fee Payment Proofs",
                    desc: "UTR receipts, GST invoices, or sub-franchisee confirmations showing sign-on fees collected by the Master but not remitted to HQ.",
                  },
                  {
                    title: "4. Default & Milestone Cure Notices",
                    desc: "Chronological quarterly review emails, store-opening shortfall trackers, and Speed Post RPAD tracking receipts.",
                  },
                  {
                    title: "5. Dishonoured Guarantee PDCs / BGs",
                    desc: "Bank return memos for security cheques or performance Bank Guarantees supporting NI Act s.138 and Section 9 filings.",
                  },
                  {
                    title: "6. BSA 2023 s.63 Electronic Certificate",
                    desc: "Mandatory statutory certificate authenticating CRM/ERP royalty dashboards, WhatsApp admissions, and email logs for Commercial Court admissibility.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="take-action"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Serve an Exclusivity Revocation &amp; Step-In Notice Today
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are stripping a single stalled state territory or
                executing simultaneous Tripartite Step-In Notices across 10 to
                500+ unit sub-franchisees, choose your institutional track
                below:
              </p>

              <MasterFranchiseeCTA />
            </section>

            {/* Section 9: Hub, Calculators & Sibling Guides */}
            <section
              id="related-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Franchisor Hub, Calculators, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    tag: "Parent Hub",
                    title: "Franchisors, Brand Licensors & OEM Dealership Hub",
                    href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
                  },
                  {
                    tag: "Calculator · T1",
                    title: "Commercial Limitation Period Calculator",
                    href: "/tools/limitation-period-calculator",
                  },
                  {
                    tag: "Calculator · T1",
                    title: "NI Act s.138 Cheque Bounce Deadline Calculator",
                    href: "/tools/cheque-bounce-deadline-calculator",
                  },
                  {
                    tag: "Template · P1",
                    title: "Security Cheque Presentation & Ledger Notice",
                    href: "/templates/security-cheque-presentation-intimation-cum-ledger-notice",
                  },
                  {
                    tag: "Sibling · IND-24",
                    title: "Terminated Rogue Franchisee Signboard Injunction",
                    href: "/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery",
                  },
                  {
                    tag: "Sibling · IND-24",
                    title: "Franchisee POS Cash-Skimming & Royalty Audit",
                    href: "/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery",
                  },
                  {
                    tag: "Sibling · IND-24",
                    title: "FOCO / FICO Store Lockout & CapEx Dispute Recovery",
                    href: "/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery",
                  },
                  {
                    tag: "B2B Seed",
                    title: "Distributor & Dealer Dues Recovery",
                    href: "/distributor-dealer-dues-recovery",
                  },
                  {
                    tag: "B2B Seed",
                    title: "Bulk Recovery CSV & Institutional Desk",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#DC2626] transition-all"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {linkItem.tag}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {linkItem.title} &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Master Franchise Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Authorities */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold mt-0.5">
                      &#8227;
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
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
