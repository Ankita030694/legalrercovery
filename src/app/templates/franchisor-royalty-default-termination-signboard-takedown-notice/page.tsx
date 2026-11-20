import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FranchisorNoticeCTA from "./FranchisorNoticeCTA";
import FranchisorNoticeTOC from "./FranchisorNoticeTOC";
import FranchisorNoticeWorkspace from "./FranchisorNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/franchisor-royalty-default-termination-signboard-takedown-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "2-Stage Franchisor Legal Notice Pack: (1) 15-Day Royalty/Commissary Cure Notice + (2) Termination, Signboard De-Branding & Aggregator Delisting Notice";

const EXACT_TITLE =
  "Franchisor Royalty Default & Signboard Takedown Notice";

const EXACT_DESCRIPTION =
  "Advocate-vetted franchisor templates for Royalty/MMG/Ad-Fund arrears, POS-bypass penalties, 48-hr signboard removal & Zomato/Swiggy/Google IP takedowns.";

const HERO_IMAGE_ALT = formatAltText(
  "2-Stage Franchisor Royalty Default Termination and Signboard Takedown Legal Notice"
);

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: HERO_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
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
    title: "Commercial Courts Act, 2015 — s.2(1)(c)(ix) (Franchise Agreements) & s.2(1)(c)(xvii) (IP Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Trade Marks Act, 1999 — Section 29 (Infringement) & Section 135 (Injunction & Account of Profits)",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 — Section 25 (e-NACH / ECS Dishonour)",
    url: "https://www.indiacode.nic.in/handle/123456789/2071",
  },
  {
    title: "IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — Rule 3(1)(d) (36-Hr IP Takedown)",
    url: "https://www.meity.gov.in/content/information-technology-intermediary-guidelines-and-digital-media-ethics-code-rules-2021",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic POS & Aggregator Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const PRECEDENTS = [
  {
    title: "Urgent Trademark Injunction Bypasses Section 12A Mediation",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1 (Supreme Court of India)",
    holding:
      "While Section 12A pre-institution mediation is mandatory for routine commercial suits, suits contemplating urgent interim relief—such as restraining a terminated franchisee from misusing a brand signboard—are statutorily exempt.",
    takeaway:
      "Combine unpaid royalty claims with an Order XXXIX Rule 1 & 2 / Section 9 injunction prayer to approach Commercial Courts immediately without a 3-month mediation delay.",
  },
  {
    title: "Strict Enforcement of Contractual Cure Periods Before Termination",
    parties: "Indian Oil Corporation Ltd. v. Amritsar Gas Service",
    citation: "(1991) 1 SCC 533 (Supreme Court of India)",
    holding:
      "Commercial dealership and franchise agreements determinable by notice must be terminated strictly in accordance with the agreed cure-period clause; premature termination without notice invites damages.",
    takeaway:
      "Serving Stage 1 (15-Day Cure Notice) before Stage 2 (Termination & De-Branding Notice) insulates the franchisor against wrongful-termination counterclaims.",
  },
];

const FAQS = [
  {
    question: "Why must a franchisor send a 2-stage notice instead of terminating immediately?",
    answer:
      "Under settled Supreme Court precedent (Indian Oil Corp. v. Amritsar Gas Service), commercial franchise and dealership agreements with a contractual cure window must be terminated strictly in compliance with the cure clause. Issuing Stage 1 (15-day cure notice) establishes an indisputable record of default and non-rectification. Once the 15-day window expires without payment or POS reconciliation, Stage 2 triggers lawful termination, immediate trademark license revocation under Section 29 of the Trade Marks Act, 1999, and 48-hour signboard removal.",
  },
  {
    question: "Can a franchisor force Swiggy, Zomato, and Google Maps to delist a rogue franchisee?",
    answer:
      "Yes. Once the franchise agreement is terminated via Stage 2 Notice and the trademark license is revoked, the franchisee's continued use of your brand name, menu photos, or trade dress on food aggregators and Google Business Profile constitutes trademark infringement under Section 29. Under Rule 3(1)(d) of the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, intermediaries must act on documented IP takedown intimations within 36 hours when supported by Trademark Registration certificates and the executed Stage 2 Termination Notice.",
  },
  {
    question: "How do franchisors prove POS cash skimming and personal UPI bypass in court?",
    answer:
      "Franchisors can combine mystery-shopper UPI transaction receipts (showing payments routed to a partner's personal VPA instead of the central POS), GST GSTR-1 vs. POS gross-sales variance reports, commissary raw-material consumption ratios (e.g., packaging boxes or coffee beans supplied vs. billed orders), and Swiggy/Zomato payout reconciliations. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, all such server logs and digital exports are admissible when accompanied by a statutory hash-verified electronic evidence certificate.",
  },
  {
    question: "Does a franchise royalty dispute qualify as a Commercial Suit in India?",
    answer:
      "Yes. Section 2(1)(c)(ix) of the Commercial Courts Act, 2015 explicitly classifies 'distribution and licensing agreements' and 'franchising agreements' as statutory commercial disputes, while Section 2(1)(c)(xvii) covers intellectual property rights relating to registered and unregistered trademarks. Furthermore, where urgent interim relief is sought against a holdover franchisee displaying the brand signboard, the franchisor is exempt from mandatory Section 12A pre-institution mediation under Patil Automation (2022).",
  },
  {
    question: "What if the franchisee's monthly royalty e-NACH mandate or security cheque bounces?",
    answer:
      "If an e-NACH or ECS auto-debit for monthly royalty, MMG, or commissary supply fails, the franchisor acquires a parallel criminal-statutory remedy under Section 25 of the Payment and Settlement Systems Act, 2007 (punishable with up to 2 years imprisonment or twice the bounced amount), provided a statutory demand notice is served within 30 days of receiving the bank return memo. Similarly, a dishonoured security cheque triggers Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    question: "How does this notice pack apply to EV 2W/3W and automobile dealerships?",
    answer:
      "For EV and auto OEMs, Stage 1 demands overdue vehicle/spare-parts channel credit, DMS ledger balances, and expired bank guarantee replenishment within 15 days. Stage 2 terminates the Authorized Dealership Agreement, revokes DMS and Vahan dealer-code access, mandates 48-hour showroom fascia de-branding under Section 29 of the Trade Marks Act, and initiates takedown notices against unauthorized listings on BikeDekho, CarDekho, and Google Maps.",
  },
];

export default function FranchisorNoticeTemplatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
          url: CANONICAL_URL,
          name: EXACT_TITLE,
          description: EXACT_DESCRIPTION,
        },
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        inLanguage: "en-IN",
        mainEntityOfPage: CANONICAL_URL,
        datePublished: "2026-11-20T09:00:00+05:30",
        dateModified: "2026-11-20T09:00:00+05:30",
        // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
      },
      {
        "@type": "CreativeWork",
        "@id": `${CANONICAL_URL}#template`,
        name: "2-Stage Franchisor Royalty Default, Termination & Signboard Takedown Legal Notice Pack",
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        genre: "Commercial Franchise Legal Notice & IP Takedown Format",
        inLanguage: "en-IN",
        creator: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
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
        "@id": `${CANONICAL_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Franchisor Royalty & Signboard Takedown Notice",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-24 · Franchisors, Brand Licensors &amp; EV/Auto OEMs</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Part of our{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Franchisor, Brand Licensor &amp; OEM Dealership Recovery Hub
            </Link>
            , this 2-stage legal notice pack enforces Commercial Courts Act s.2(1)(c)(ix)/(xvii) royalty, MMG, ad-fund, and commissary recovery within 15 days, then triggers Trade Marks Act s.29/135 termination, 48-hour signboard de-branding, and Zomato/Swiggy/Google delisting.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-lg sm:text-2xl font-black text-slate-100">15 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Stage 1 Contractual Cure Window</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-amber-400">48 Hours</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Stage 2 Signboard De-Branding</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400">36 Hours</div>
              <div className="text-[10px] sm:text-xs text-slate-400">IT Rules Aggregator Takedown</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-red-400">s.12A Exempt</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Urgent IP Injunction Fast-Track</div>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-400">
            Vetted by <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions · Updated November 2026
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Templates", href: "/templates" },
            {
              label: "Franchisor Royalty & Signboard Takedown Notice",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <FranchisorNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Interactive Workspace */}
            <section
              id="interactive-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Interactive 2-Stage Franchisor Notice Workspace
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your franchise vertical below—<strong>QSR / Cloud Kitchen</strong>,{" "}
                <strong>Salon / Preschool</strong>, or <strong>EV 2W/3W OEM Dealership</strong>—and toggle between{" "}
                <strong>Stage 1 (15-Day Cure Notice)</strong> and{" "}
                <strong>Stage 2 (Termination, 48-Hour Signboard Removal &amp; Aggregator Delisting)</strong>. All ledger totals and statutory clauses update live.
              </p>

              <FranchisorNoticeWorkspace />
            </section>

            {/* Section 2: Why 2-Stage Enforcement Works */}
            <section
              id="two-stage-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why 2-Stage Franchise Enforcement Beats Generic Demand Letters
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most franchisors lose leverage when they send an informal email threatening termination or prematurely cut off commissary supplies without exhausting the contractual cure period. A rogue franchisee immediately files a civil suit alleging wrongful termination and obtains an ad-interim stay protecting their possession of your brand signboard.
              </p>

              {/* Desktop SVG Escalation Timeline */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 text-white">
                <svg
                  width="760"
                  height="150"
                  viewBox="0 0 760 150"
                  className="w-full h-auto"
                  role="img"
                  aria-label="2-Stage Franchisor Legal Notice Escalation Workflow"
                >
                  <rect x="10" y="20" width="165" height="105" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="25" y="45" fill="#F87171" fontSize="11" fontWeight="bold">DAY 0 · STAGE 1</text>
                  <text x="25" y="66" fill="#FFFFFF" fontSize="13" fontWeight="bold">15-Day Cure Notice</text>
                  <text x="25" y="86" fill="#CBD5E1" fontSize="10">Royalty + MMG + Ad-Fund</text>
                  <text x="25" y="102" fill="#CBD5E1" fontSize="10">+ POS Audit + PSS s.25</text>

                  <line x1="175" y1="72" x2="205" y2="72" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="205,67 215,72 205,77" fill="#DC2626" />

                  <rect x="215" y="20" width="165" height="105" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="230" y="45" fill="#FBBF24" fontSize="11" fontWeight="bold">DAY 16 · STAGE 2</text>
                  <text x="230" y="66" fill="#FFFFFF" fontSize="13" fontWeight="bold">Termination &amp; IP</text>
                  <text x="230" y="86" fill="#CBD5E1" fontSize="10">TM License Revoked</text>
                  <text x="230" y="102" fill="#CBD5E1" fontSize="10">48-Hr Signboard Removal</text>

                  <line x1="380" y1="72" x2="410" y2="72" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="410,67 420,72 410,77" fill="#DC2626" />

                  <rect x="420" y="20" width="165" height="105" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="435" y="45" fill="#34D399" fontSize="11" fontWeight="bold">36 HOURS · DIGITAL</text>
                  <text x="435" y="66" fill="#FFFFFF" fontSize="13" fontWeight="bold">Aggregator Takedown</text>
                  <text x="435" y="86" fill="#CBD5E1" fontSize="10">Zomato, Swiggy, Google</text>
                  <text x="435" y="102" fill="#CBD5E1" fontSize="10">IT Rules 2021 Rule 3(1)(d)</text>

                  <line x1="585" y1="72" x2="615" y2="72" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="615,67 625,72 615,77" fill="#DC2626" />

                  <rect x="625" y="20" width="125" height="105" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="640" y="45" fill="#FCA5A5" fontSize="11" fontWeight="bold">DAY 19 · COURT</text>
                  <text x="640" y="66" fill="#FFFFFF" fontSize="13" fontWeight="bold">s.9 / Commercial</text>
                  <text x="640" y="86" fill="#FEE2E2" fontSize="10">Ex-Parte Injunction</text>
                  <text x="640" y="102" fill="#FEE2E2" fontSize="10">+ Receiver + Recovery</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold text-red-400 uppercase">Day 0 · Stage 1</span>
                  <p className="font-bold text-sm mt-1">15-Day Cure Notice</p>
                  <p className="text-xs text-slate-300 mt-1">Royalty, MMG, Ad-Fund, Commissary &amp; POS Audit Penalty.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Day 16 · Stage 2</span>
                  <p className="font-bold text-sm mt-1">Termination &amp; 48-Hr De-Branding</p>
                  <p className="text-xs text-slate-300 mt-1">Revokes TM license &amp; orders physical signboard removal.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">36 Hours · Digital</span>
                  <p className="font-bold text-sm mt-1">Aggregator Delisting</p>
                  <p className="text-xs text-slate-300 mt-1">Zomato, Swiggy &amp; Google Maps takedown under IT Rules 2021.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-950 text-white border border-red-800">
                  <span className="text-[10px] font-bold text-red-300 uppercase">Day 19 · Court</span>
                  <p className="font-bold text-sm mt-1">Section 9 / Commercial Suit</p>
                  <p className="text-xs text-red-100 mt-1">Urgent interim injunction bypassing s.12A mediation.</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                For deeper vertical playbooks, see our guides on{" "}
                <Link
                  href="/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  rogue holdover franchisees misusing brand signboards
                </Link>
                ,{" "}
                <Link
                  href="/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  POS cash skimming &amp; personal UPI royalty audits
                </Link>
                , and{" "}
                <Link
                  href="/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  FOCO/FICO store lockouts &amp; CapEx disputes
                </Link>
                .
              </p>
            </section>

            {/* Section 3: Statutory Hooks & Case Law */}
            <section
              id="statutory-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Framework &amp; Commercial Court Precedents
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Statute / Provision</th>
                      <th className="p-3 sm:p-4 font-bold">Franchisor Enforcement Role</th>
                      <th className="p-3 sm:p-4 font-bold">Stage Triggered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Commercial Courts Act, 2015 s.2(1)(c)(ix) &amp; (xvii)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Classifies franchising, licensing, and trademark disputes as commercial suits with summary judgment &amp; urgent injunction powers.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-[#DC2626]">Stage 1 &amp; 2</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Trade Marks Act, 1999 ss.29 &amp; 135
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Renders post-termination signboard display, packaging, and look-alike store operation actionable infringement + account of profits.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-[#DC2626]">Stage 2 (48-Hr)</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        PSS Act, 2007 s.25 &amp; NI Act s.138
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Criminal prosecution for dishonoured royalty/commissary e-NACH mandates or security cheques (30-day notice window).
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-[#DC2626]">Stage 1 (Parallel)</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Arbitration Act, 1996 s.9
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Ex-parte interim injunction &amp; Court Receiver appointment to seal/de-brand rogue outlets pending{" "}
                        <Link href="/online-dispute-resolution-india" className="text-[#DC2626] underline">
                          ODR arbitration
                        </Link>
                        .
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-[#DC2626]">Post-Stage 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Precedent Cards */}
              <div className="space-y-4">
                {PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-3 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title} — <span className="italic">{item.parties}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                        <strong>Franchisor Takeaway:</strong> {item.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Zomato, Swiggy & Google Maps Delisting */}
            <section
              id="aggregator-takedown"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Zomato, Swiggy &amp; Google Maps IP Takedown Protocol
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Even after physical termination, rogue QSRs, salons, and EV dealers continue accepting orders via aggregator apps and Google Maps. Marking your <strong>Stage 2 Termination Notice</strong> directly to platform IP Grievance Officers under{" "}
                <strong>Rule 3(1)(d) of the IT Rules, 2021</strong> cuts off their digital revenue within 36 hours:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900">Zomato &amp; Swiggy</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit Restaurant ID, TM Registration Certificate, Stage 1 Cure Notice, and Stage 2 Termination Notice to the Partner Legal/IP Grievance Desk demanding immediate storefront suspension and payout freeze.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900">Google Business Profile</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a Trademark Infringement &amp; Misleading Storefront complaint attaching your Class 43/44/12 TM certificate and termination proof to mark the outlet &ldquo;Permanently Closed&rdquo; or transfer ownership.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900">EV / Dealer Portals</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Revoke DMS credentials and Vahan dealer-code authorization while serving takedown notices on BikeDekho, CarDekho, and Justdial. See our{" "}
                    <Link
                      href="/ev-two-wheeler-three-wheeler-automobile-oem-dealer-credit-recovery"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      EV OEM Dealer Recovery Guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Evidence & BSA s.63 Checklist */}
            <section
              id="evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Mandatory Annexures &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  "Executed Franchise / Dealership Agreement with Cure, Termination & Arbitration Clauses",
                  "Trademark Registration Certificates (Classes 30, 41, 43, 44, 12, or 37 as applicable)",
                  "Audited Royalty, MMG, Ad-Fund & Commissary Ledger + Unpaid GST Tax Invoices",
                  "POS-Bypass Proof: Mystery-shopper UPI receipts, GSTR-1 variance & raw-material audit",
                  "e-NACH Return Memo (UMRN) or Dishonoured Cheque Memo for PSS s.25 / NI s.138",
                  "Geo-tagged, time-stamped photographs of unauthorized signboard & BSA s.63 Certificate",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong>Statutory Interest &amp; NACH Tools:</strong> If your franchisor entity or commissary supplier holds MSME Udyam registration, compute 3x RBI Bank Rate compound interest with our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                . For bounced franchisee e-NACH mandates, pair Stage 1 with our{" "}
                <Link
                  href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                  className="text-[#DC2626] font-bold underline"
                >
                  Section 25 PSS Act e-NACH Bounce Notice Format
                </Link>
                , or review{" "}
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="text-[#DC2626] font-bold underline"
                >
                  Distributor &amp; Dealer Dues Recovery
                </Link>
                .
              </div>
            </section>

            {/* Section 6: Tri-Channel Service Protocol */}
            <section
              id="service-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Tri-Channel Service Protocol (RPAD + Email + WhatsApp)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Dispatch Channel</th>
                      <th className="p-3 sm:p-4 font-bold">Target Recipients</th>
                      <th className="p-3 sm:p-4 font-bold">Evidentiary Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Speed Post RPAD</td>
                      <td className="p-3 sm:p-4 text-slate-700">Outlet address, Registered Office &amp; Director residences</td>
                      <td className="p-3 sm:p-4 text-slate-700">Deemed service under General Clauses Act s.27</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Registered Email</td>
                      <td className="p-3 sm:p-4 text-slate-700">Franchisee official email + Stage 2 CC to Zomato/Swiggy/Google</td>
                      <td className="p-3 sm:p-4 text-slate-700">Admissible under BSA 2023 s.63 + IT Rules 2021</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">WhatsApp Business</td>
                      <td className="p-3 sm:p-4 text-slate-700">Managing Partner / Sole Proprietor mobile number</td>
                      <td className="p-3 sm:p-4 text-slate-700">Read-receipt audit trail proving actual knowledge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions (Franchisor Enforcement)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:border-red-200 transition-colors"
                  >
                    <summary className="cursor-pointer p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 list-none">
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

            {/* Primary Statutory Sources */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Primary Statutory &amp; Regulatory Sources
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc pl-5">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dual-Track CTA */}
            <FranchisorNoticeCTA />
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
