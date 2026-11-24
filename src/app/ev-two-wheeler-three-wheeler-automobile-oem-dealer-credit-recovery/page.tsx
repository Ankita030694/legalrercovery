import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EvDealerTableOfContents from "./EvDealerTableOfContents";
import EvDealerScenarioTabs from "./EvDealerScenarioTabs";
import EvDealerCTA from "./EvDealerCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/ev-two-wheeler-three-wheeler-automobile-oem-dealer-credit-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "EV Two-Wheeler / Three-Wheeler Dealer Sold 40 Vehicles for Cash, Pocketed Proceeds & Defaulted on OEM Billing? Vahan & Legal Recovery Guide";

// Tightened from 66ch PDF draft to 53ch for Screaming Frog 30-60ch compliance
const META_TITLE = "EV 2W/3W OEM Dealership Credit & Spare-Parts Recovery";

// Tightened from 168ch PDF draft to 151ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "EV 2W/3W & L3/L5 OEMs lose crores when dealers pocket cash instead of clearing floor-credit. Use Sale of Goods s.25, Vahan locks, s.138 & BG set-offs.";

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
      "The Sale of Goods Act, 1930 (Section 25 — Reservation of Right of Disposal; Sections 45–47 & 55 — Unpaid Seller's Lien & Suit for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Central Motor Vehicles Rules (CMVR), 1989 & Vahan 4.0 Portal (Rules 33–47 — Trade Certificate, Form 21 Sale Certificate & Form 22)",
    url: "https://vahan.parivahan.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138 & 141 — Dishonour of Dealer Security Cheques & Vicarious Liability of Partners/Directors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH Dealer Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2027",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 126, 148–160 & 171 — Unconditional Bank Guarantees, Bailment of Warranty Cores & Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316(2) & 316(5) — Criminal Breach of Trust by Merchant, Factor or Dealership Agent)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of DMS Ledgers, Vahan API Logs & Electronic Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Can an EV OEM legally withhold Form 21 and Vahan dealer-invoice clearance when a dealer defaults?",
    answer:
      "Yes, provided the Dealership Agreement contains an express Reservation of Title / Right of Disposal clause under Section 25(1) of the Sale of Goods Act, 1930, stipulating that property in the vehicle and entitlement to Form 21 Sale Certificate pass only upon full invoice realization. For vehicles already sold to innocent retail customers for cash, the OEM should pursue criminal breach of trust (BNS s.316(5)), BG encashment, and s.138 against the dealer while protecting the OEM brand from consumer-court backlash.",
  },
  {
    question:
      "How does a Bank Guarantee (BG) encashment work when a defaulting EV dealer threatens a stay order?",
    answer:
      "Under settled Supreme Court precedent (including UP Cooperative Federation and Himadri Chemicals), an unconditional and irrevocable Bank Guarantee payable on demand must be honoured by the issuing bank irrespective of underlying commercial disputes between the OEM and the dealer, unless egregious fraud or irretrievable injustice is proved. Serve the written invocation letter strictly within the BG validity and claim period.",
  },
  {
    question:
      "Can an EV OEM prosecute a dealer under Section 138 NI Act using blank signed security cheques?",
    answer:
      "Yes. Under Section 20 of the Negotiable Instruments Act, 1881 and the Supreme Court ruling in Sripati Singh v. State of Jharkhand (2021), a security cheque issued at dealership onboarding becomes an enforceable instrument once the debt crystallizes upon default. Before presenting the cheque, issue a 7-day written ledger reconciliation and pre-deposit intimation specifying the exact overdue principal after BG/deposit set-offs.",
  },
  {
    question:
      "What legal action applies when a dealer refuses to return defective warranty lithium battery packs?",
    answer:
      "Replacement battery packs dispatched under warranty against return of defective cores are held by the dealer as a bailee under Sections 148 and 160 of the Indian Contract Act, 1872. Withholding or reselling failed LFP/NMC battery packs constitutes wrongful conversion and criminal breach of trust under BNS s.316, allowing the OEM to debit full pack value from the dealer's security deposit and issue a 7-day return-or-pay demand.",
  },
  {
    question:
      "How do EV OEMs recover PM E-DRIVE or FAME-II subsidy clawbacks caused by dealer KYC errors?",
    answer:
      "When the Ministry of Heavy Industries (MHI) rejects or claws back demand-incentive claims due to duplicate Aadhaar IDs, unverified phone numbers, or fabricated fleet invoices uploaded by the dealer, the OEM can recover the disallowed amount under Contractual Indemnity (Contract Act ss.124–125) and Liquidated Damages (s.74). Set off the clawback against pending dealer margins first and pursue the net shortfall via Order XXXVII CPC or institutional ODR.",
  },
  {
    question:
      "Should an OEM terminate a multi-city EV dealership before or after blocking the Vahan dealer code?",
    answer:
      "Issue a formal 15-day Cure-and-Termination Notice first (or immediate termination if cash diversion/fraud is documented), and simultaneously suspend DMS billing and Form 21 generation. Immediately after termination takes effect, submit the termination letter and dealer GSTIN/code details to the jurisdictional RTO and NIC Vahan helpdesk to delink the dealer's Trade Certificate authorization.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How EV 2W/3W OEMs Recover Unpaid Floor-Credit, Cash-Diverted Vehicles & Battery Stock",
  description:
    "5-step institutional legal and Vahan portal escalation playbook for EV two-wheeler, three-wheeler, and automobile OEMs facing defaulting dealers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Freeze DMS Billing & Reserve Title under Sale of Goods Act s.25",
      text: "Suspend dealer DMS access and hold Form 21 Sale Certificate issuance for all unpaid VIN/chassis inventory.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Conduct 48-Hour Videographed Showroom & Battery Core Audit",
      text: "Verify physical chassis numbers and warranty lithium battery cores on the showroom floor to quantify diverted cash-sale units.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Invoke Unconditional Bank Guarantees & Set Off Security Deposits",
      text: "Lodge a strict-compliance BG invocation letter before expiry and set off dealer margin credits and warranty holdbacks.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Serve Tri-Channel BNS s.316, s.138 & Vahan Delinking Notice",
      text: "Issue a Legal Notice combining criminal breach of trust (BNS s.316), 7-day pre-presentation cheque/e-NACH intimation (NI s.138 / PSS s.25), and dealership termination.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate to s.138 Prosecution, Commercial Court Injunction or ODR",
      text: "File NI Act s.138 complaints within 30 days of bounce-notice expiry, seek Commercial Court s.12A urgent injunctions against rogue signage use, or invoke institutional ODR arbitration.",
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
      name: "Franchisors & OEM Dealerships",
      item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: META_TITLE,
      item: CANONICAL_URL,
    },
  ],
};

export default function EvOemDealerCreditRecoveryPage() {
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
            <span>IND-24 Playbook</span>
            <span>&bull;</span>
            <span>EV 2W / 3W &amp; Auto OEMs</span>
            <span>&bull;</span>
            <span>Vahan &amp; s.25 Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Summary + Inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When an EV 2W/3W dealer sells OEM-billed stock for cash and pockets
            proceeds, invoke{" "}
            <strong>Sale of Goods Act s.25</strong> title reservation to freeze
            Vahan Form 21 issuance, encash unconditional{" "}
            <strong>Bank Guarantees</strong>, and serve a tri-channel{" "}
            <strong>BNS s.316 + NI s.138</strong> demand. Part of our{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Franchisors &amp; OEM Dealership Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                s.25 SoGA
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Title Reserved Until Payment
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                48 Hours
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                DMS, Form 21 &amp; BG Freeze
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                30+15+30d
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                NI s.138 / PSS s.25 Clock
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                BNS s.316(5)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Cash-Sale Diversion Offence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Shell */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Franchisors & OEM Dealerships",
                href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
              },
              { label: "EV 2W/3W OEM Dealer Credit Recovery" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <EvDealerTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why EV 2W/3W OEMs Face Cash-Diversion Dealer Defaults
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Unlike legacy ICE passenger-vehicle manufacturers (such as
                  Maruti Suzuki or Hyundai) that operate on 100% bank-funded
                  channel-finance limits where private banks pay the OEM on Day 0,
                  India&apos;s 400+ electric two-wheeler (2W), e-rickshaw (L3),
                  and electric cargo/passenger three-wheeler (L5) OEMs routinely
                  extend <strong>direct OEM floor-credit</strong> of 15 to 45
                  days on both chassis inventory and high-value lithium-ion
                  battery packs. The same structural exposure hits tractor,
                  auto-component, and lubricant OEMs expanding rapidly into
                  Tier-2, Tier-3, and semi-urban districts.
                </p>
                <p>
                  When a Tier-2 or Tier-3 dealer faces a local liquidity crunch,
                  the classic failure pattern unfolds: the dealer collects 100%
                  retail cash or personal UPI transfers from 25 to 50 walk-in
                  buyers, hands over physical scooters or e-rickshaws off the
                  showroom floor, and <strong>pockets the proceeds</strong>{" "}
                  instead of remitting the OEM&apos;s wholesale billing. Weeks
                  later, the OEM CFO discovers an unhedged ₹30 Lakh to ₹1.50
                  Crore receivable gap, unreturned warranty lithium battery
                  cores, and rejected{" "}
                  <strong>PM E-DRIVE / FAME-II</strong> subsidy claims caused by
                  sloppy dealer KYC uploads.
                </p>
                <p>
                  Conventional civil recovery suits take 4 to 7 years and
                  destroy unit economics. Instead, EV and automobile OEMs must
                  deploy a synchronized{" "}
                  <strong>portal + statutory + financial set-off</strong>{" "}
                  playbook: locking Vahan Form 21 mapping under{" "}
                  <strong>Sale of Goods Act s.25</strong>, encashing
                  unconditional Bank Guarantees within 48 hours, and triggering{" "}
                  <strong>NI Act s.138 / PSS Act s.25</strong> alongside{" "}
                  <strong>BNS s.316(5)</strong> criminal breach of trust notices.
                </p>
              </div>
            </section>

            {/* Section 2: Operational Decision Tree (SVG + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Decision Tree: Vahan Lock, BG Set-Off or Section 138?
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Channel heads and legal teams should triage defaulted dealers
                within 48 hours of billing overdue based on whether vehicles are
                still on the floor, sold for cash, or tied to warranty/subsidy
                clawbacks.
              </p>

              {/* Desktop SVG Decision Flowchart */}
              <div className="hidden md:block overflow-x-auto bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <svg
                  width="760"
                  height="310"
                  viewBox="0 0 760 310"
                  className="w-full h-auto"
                  role="img"
                  aria-label="EV OEM Dealer Default Operational Decision Tree"
                >
                  <rect width="760" height="310" rx="14" fill="#F8FAFC" />

                  {/* Root Node */}
                  <rect
                    x="220"
                    y="16"
                    width="320"
                    height="52"
                    rx="10"
                    fill="#111827"
                  />
                  <text
                    x="380"
                    y="38"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="700"
                  >
                    Dealer Overdue &gt; 15 Days / Cash Diversion Flagged
                  </text>
                  <text
                    x="380"
                    y="55"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="600"
                  >
                    Step 1: Freeze DMS Billing + Videographed VIN Audit
                  </text>

                  {/* Connector Lines */}
                  <line
                    x1="380"
                    y1="68"
                    x2="380"
                    y2="98"
                    stroke="#64748B"
                    strokeWidth="2"
                  />
                  <line
                    x1="125"
                    y1="98"
                    x2="635"
                    y2="98"
                    stroke="#64748B"
                    strokeWidth="2"
                  />
                  <line
                    x1="125"
                    y1="98"
                    x2="125"
                    y2="126"
                    stroke="#64748B"
                    strokeWidth="2"
                  />
                  <line
                    x1="380"
                    y1="98"
                    x2="380"
                    y2="126"
                    stroke="#64748B"
                    strokeWidth="2"
                  />
                  <line
                    x1="635"
                    y1="98"
                    x2="635"
                    y2="126"
                    stroke="#64748B"
                    strokeWidth="2"
                  />

                  {/* Branch 1 */}
                  <rect
                    x="20"
                    y="126"
                    width="210"
                    height="164"
                    rx="12"
                    fill="#FFFFFF"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="20"
                    y="126"
                    width="210"
                    height="32"
                    rx="12"
                    fill="#DC2626"
                  />
                  <text
                    x="125"
                    y="146"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                  >
                    Branch A: Stock Sold for Cash
                  </text>
                  <text
                    x="32"
                    y="178"
                    fill="#1E293B"
                    fontSize="11"
                    fontWeight="600"
                  >
                    1. Hold Form 21 (SoGA s.25)
                  </text>
                  <text x="32" y="198" fill="#475569" fontSize="10.5">
                    2. Encash Unconditional BG
                  </text>
                  <text x="32" y="218" fill="#475569" fontSize="10.5">
                    3. Serve BNS s.316(5) Notice
                  </text>
                  <text x="32" y="238" fill="#475569" fontSize="10.5">
                    4. Present Security Cheque (s.138)
                  </text>
                  <text
                    x="32"
                    y="268"
                    fill="#047857"
                    fontSize="10.5"
                    fontWeight="700"
                  >
                    Target: Recovery in 21–45 Days
                  </text>

                  {/* Branch 2 */}
                  <rect
                    x="275"
                    y="126"
                    width="210"
                    height="164"
                    rx="12"
                    fill="#FFFFFF"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="275"
                    y="126"
                    width="210"
                    height="32"
                    rx="12"
                    fill="#0F172A"
                  />
                  <text
                    x="380"
                    y="146"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                  >
                    Branch B: Unsold Floor Stock
                  </text>
                  <text
                    x="287"
                    y="178"
                    fill="#1E293B"
                    fontSize="11"
                    fontWeight="600"
                  >
                    1. Unpaid Seller Lien (SoGA s.47)
                  </text>
                  <text x="287" y="198" fill="#475569" fontSize="10.5">
                    2. Peaceable Stock Repossession
                  </text>
                  <text x="287" y="218" fill="#475569" fontSize="10.5">
                    3. Delink Vahan Trade Certificate
                  </text>
                  <text x="287" y="238" fill="#475569" fontSize="10.5">
                    4. Debit Restocking &amp; Interest
                  </text>
                  <text
                    x="287"
                    y="268"
                    fill="#047857"
                    fontSize="10.5"
                    fontWeight="700"
                  >
                    Target: Inventory Salvage in 7d
                  </text>

                  {/* Branch 3 */}
                  <rect
                    x="530"
                    y="126"
                    width="210"
                    height="164"
                    rx="12"
                    fill="#FFFFFF"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="530"
                    y="126"
                    width="210"
                    height="32"
                    rx="12"
                    fill="#334155"
                  />
                  <text
                    x="635"
                    y="146"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                  >
                    Branch C: Spares / Subsidy Gap
                  </text>
                  <text
                    x="542"
                    y="178"
                    fill="#1E293B"
                    fontSize="11"
                    fontWeight="600"
                  >
                    1. Warranty Core Bailment (s.160)
                  </text>
                  <text x="542" y="198" fill="#475569" fontSize="10.5">
                    2. MHI Subsidy Indemnity Set-Off
                  </text>
                  <text x="542" y="218" fill="#475569" fontSize="10.5">
                    3. MSME 3x Interest (if Udyam)
                  </text>
                  <text x="542" y="238" fill="#475569" fontSize="10.5">
                    4. ODR / Order XXXVII Summary
                  </text>
                  <text
                    x="542"
                    y="268"
                    fill="#047857"
                    fontSize="10.5"
                    fontWeight="700"
                  >
                    Target: Decree / Award 90–150d
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-black text-[#DC2626] uppercase mb-1">
                    Branch A: Vehicles Sold for Cash
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Hold Vahan Form 21 (SoGA s.25), encash unconditional BG,
                    serve BNS s.316(5) criminal breach of trust notice, and
                    present security cheque under NI s.138.
                  </p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-black text-slate-900 uppercase mb-1">
                    Branch B: Unsold Floor Inventory
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Exercise unpaid seller&apos;s right under SoGA s.47, execute
                    consent-backed stock transfer/repossession, and delink Vahan
                    Trade Certificate.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-black text-emerald-800 uppercase mb-1">
                    Branch C: Lithium Cores &amp; Subsidy Clawback
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Enforce Contract Act s.160 bailment for unreturned warranty
                    batteries, set off MHI subsidy rejections, and escalate via
                    ODR or Order XXXVII CPC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix */}
            <section
              id="heading-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  OEM Dealership Enforcement Matrix: 2W, L3/L5 &amp; Spares
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">
                        Asset / Claim Class
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Primary Statutory Hook
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Immediate Portal / Financial Lever
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Escalation Forum
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        High-Speed EV 2W &amp; L5 3W (Vahan Registered)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Sale of Goods Act s.25(1); CMVR Rule 47; BNS s.316(5)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Withhold Form 21 &amp; Vahan dealer mapping; BG
                        encashment
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        NI s.138 / PSS s.25 + Commercial Court s.12A
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Low-Speed 2W &amp; L3 E-Rickshaws
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Sale of Goods Act s.55; NI Act s.138; Contract Act s.126
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Security Deposit set-off + 7-day pre-cheque intimation
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Magistrate Court (s.138) + Institutional ODR
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Warranty Lithium Battery Packs
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Contract Act ss.148, 151, 160 (Bailment); BNS s.316(2)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Core-return debit note + BMS serial lock / tracking
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        7-Day Return-or-Pay Notice + Summary Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        PM E-DRIVE / FAME Subsidy Clawback
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Contract Act ss.73–74 &amp; 124–125 (Indemnity)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Margin holdback &amp; incentive ledger adjustment
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Order XXXVII CPC / Arbitration
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Spare Parts, Chargers &amp; Lubricants
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Sale of Goods Act s.55; MSMED Act ss.15–16 (if Udyam)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Stop-supply + e-NACH mandate trigger (PSS s.25)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        MSME Samadhaan (3x RBI interest) / ODR
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Sale of Goods s.25 & Lawful Vahan Portal Holds */}
            <section
              id="heading-vahan-reservation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Sale of Goods s.25 &amp; Lawful Vahan Portal Holds
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Many EV OEMs mistakenly believe that once a GST tax invoice
                  and E-Way Bill are generated at the factory gate, ownership
                  automatically passes to the dealer—leaving the OEM as an
                  unsecured creditor. That assumption is incorrect where the
                  Dealership Agreement incorporates{" "}
                  <strong>Section 25(1) of the Sale of Goods Act, 1930</strong>.
                  Under Section 25(1), where specific goods are appropriated to
                  the contract, the seller may reserve the right of disposal
                  until certain conditions (such as full RTGS realization and
                  Vahan dealer-invoice clearance) are fulfilled.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                      Lawful OEM Controls
                    </p>
                    <ul className="text-xs sm:text-sm text-emerald-950 space-y-1.5 list-disc pl-4">
                      <li>
                        Withholding Form 21 Sale Certificate generation in DMS
                        for unpaid VINs pursuant to an express s.25 clause.
                      </li>
                      <li>
                        Notifying the Transport Commissioner / NIC Vahan
                        helpdesk upon formal dealership termination to delink
                        the dealer&apos;s Trade Certificate.
                      </li>
                      <li>
                        Encashing unconditional Bank Guarantees under Contract
                        Act s.126 without waiting for dealer consent.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1.5">
                      Consumer-Court Trap to Avoid
                    </p>
                    <ul className="text-xs sm:text-sm text-amber-950 space-y-1.5 list-disc pl-4">
                      <li>
                        If a retail customer holds a genuine dealer payment
                        receipt and physical vehicle, Consumer Commissions often
                        implead the OEM for vicarious deficiency in service.
                      </li>
                      <li>
                        Never leave bona fide retail buyers stranded indefinitely:
                        ring-fence the retail buyer&apos;s registration via
                        direct escrow settlement while prosecuting the dealer
                        under BNS s.316(5) and NI s.138.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive 4 Failure Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 EV Dealer Default Scenarios &amp; Legal Counter-Moves
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Select a dealership failure mode below to inspect the exact
                statutory basis and 3-step recovery protocol.
              </p>
              <EvDealerScenarioTabs />
            </section>

            {/* Section 6: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledger: 40-Vehicle Cash-Sale &amp; Battery Default
                </h2>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-red-400 font-bold">
                      Illustrative CFO Recovery Ledger
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Tier-2 EV 2W Dealership — 120-Day Overdue &amp; Cash
                      Diversion
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 self-start sm:self-auto">
                    Net Legal Claim: &#8377;34,60,000 + Interest
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      40 EV 2W Scooters Sold for Cash (&#8377;85,000 wholesale
                      each)
                    </span>
                    <span className="font-bold text-white">&#8377;34,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      18 Unreturned Warranty LFP Battery Cores (&#8377;32,000
                      each, Contract Act s.160)
                    </span>
                    <span className="font-bold text-white">&#8377;5,76,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      PM E-DRIVE Subsidy Clawback (12 Invalid Aadhaar KYC Cases)
                    </span>
                    <span className="font-bold text-white">&#8377;1,80,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      Unpaid Spare Parts &amp; Chargers Ledger (60+ DPD)
                    </span>
                    <span className="font-bold text-white">&#8377;3,04,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-emerald-400">
                    <span>
                      Less: Unconditional Bank Guarantee Encashed (Day 3)
                    </span>
                    <span className="font-bold">(&#8377;7,50,000)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-emerald-400">
                    <span>
                      Less: Dealership Security Deposit &amp; Margin Set-Off
                    </span>
                    <span className="font-bold">(&#8377;2,50,000)</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm sm:text-base font-black text-red-400">
                    <span>
                      Quantified Net Principal for s.138 Cheque &amp; BNS s.316
                      Notice
                    </span>
                    <span>&#8377;34,60,000</span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed pt-1">
                  Note: Under Sripati Singh v. State of Jharkhand, the OEM
                  quantifies the exact net shortfall (&#8377;34,60,000) in a
                  7-day pre-presentation ledger notice before depositing the
                  dealer&apos;s security cheque—preventing any &ldquo;unliquidated
                  debt&rdquo; defence in Section 138 trial.
                </p>
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  DMS, Form 21 &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed Dealership Agreement + s.25 Clause",
                    desc: "Verify signed title-reservation, BG encashment, and jurisdiction/arbitration clauses plus personal guarantees of partners/directors.",
                  },
                  {
                    title: "2. VIN-Wise GST E-Invoices & E-Way Bills",
                    desc: "Export chassis/motor/battery serial-number invoices and transporter PODs proving physical delivery to the dealer showroom.",
                  },
                  {
                    title: "3. Vahan Form 21 & DMS Audit Logs",
                    desc: "Capture DMS login timestamps, Form 21 hold status, and any unauthorized RTO filings under the dealer's Trade Certificate.",
                  },
                  {
                    title: "4. Videographed Showroom Stock Panchnama",
                    desc: "Time-stamped video and signed field-executive stock sheet proving missing cash-sold vehicles and unreturned warranty battery cores.",
                  },
                  {
                    title: "5. Security Cheque / e-NACH & Bank Return Memo",
                    desc: "Original dishonoured cheque, bank return memo with reason code, and 7-day pre-presentation ledger reconciliation email.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Hash Certificate",
                    desc: "Mandatory electronic-record certificate signed by the OEM IT/Finance Head authenticating DMS ledgers, MHI subsidy logs, and WhatsApp notices.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Serve an OEM Dealer Demand Notice or Bulk CSV Drive
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Test a single defaulted dealership immediately or upload your
                pan-India overdue dealer ledger for synchronized
                dispatch.
              </p>
              <EvDealerCTA />
            </section>

            {/* Section 9: Internal Links & Hub Resources */}
            <section
              id="heading-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  OEM Dealership, Franchise &amp; B2B Recovery Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Franchisors, Brand Licensors &amp; EV/Auto OEM Hub
                  </p>
                </Link>

                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Channel Credit Seed
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Distributor &amp; Dealer Dues Recovery Desk
                  </p>
                </Link>

                <Link
                  href="/online-dispute-resolution-india"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Fast Arbitration
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Online Dispute Resolution (ODR) India
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    T1 Calculator
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME 3x RBI Compound Interest Calculator
                  </p>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    P1 Template Workspace
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Commercial Legal Notice &amp; Reply Workspace
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Enterprise Batch
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Bulk CSV Recovery (10–10,000+ Dealers)
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: EV OEM Dealer Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li
                    key={source.url}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <span className="text-[#DC2626] font-bold mt-0.5">
                      &rarr;
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2"
                    >
                      {source.title}
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
