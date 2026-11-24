import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FranchisorHubTableOfContents from "./FranchisorHubTableOfContents";
import FranchisorHubScenarioTabs from "./FranchisorHubScenarioTabs";
import FranchisorHubCTA from "./FranchisorHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/franchisors-brand-licensors-oem-dealership-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Franchisors, Brand Licensors & EV/Auto OEM Network Recovery"; // 59 chars
const PAGE_DESCRIPTION =
  "Built for Franchisors & OEMs: recover under-reported POS royalties, MMG shortfalls, commissary bills & stop rogue signboard holdovers under s.9 & TM Act."; // 150 chars
const H1_TEXT =
  "Royalty Arrears, Commissary Credit & Rogue Ex-Franchisee Enforcement for Franchisors, Retail Brands & OEM Networks"; // 114 chars

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "P1";
  archetypeLabel: string;
  track: "qsr-retail-signboard" | "foco-oem-licensing" | "templates-audit";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_24_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-272",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "qsr-retail-signboard",
    title: "The Rogue Holdover Franchisee Playbook: Stopping Signboard Misuse & Swiggy/Zomato Hijacking",
    url: "/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery",
    statute: "Trade Marks Act s.29/135 + Arbitration Act s.9 + IT Rules 2021 Takedown",
    summary:
      "Compel immediate removal of exterior ACP glow-sign boards, delist rogue outlets from Swiggy and Zomato, and secure ad-interim injunctions appointing a Local Commissioner to impound branded inventory.",
  },
  {
    id: "B2B-273",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "qsr-retail-signboard",
    title: "Franchisee POS Cash-Skimming & Sales Under-Reporting: Mystery Audits & Royalty Recovery",
    url: "/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery",
    statute: "Commercial Courts Act s.2(1)(c)(ix) + BSA 2023 s.63 + Order XIII-A CPC",
    summary:
      "Detect counter cash skimming and personal UPI QR evasion; reconstruct true gross sales using central packaging consumption ratios and mystery shopper digital evidence to collect royalty shortfalls.",
  },
  {
    id: "B2B-278",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "qsr-retail-signboard",
    title: "Central-Kitchen & Commissary Invoices: Halting Unauthorized Local Sourcing & Collecting Dues",
    url: "/central-kitchen-commissary-franchise-supply-invoice-default-recovery",
    statute: "Contract Act s.73/74 + Exclusive Supply Covenants + NI Act s.138",
    summary:
      "Stop outlets from diluting brand quality through cheap, unapproved local ingredient sourcing; enforce exclusive supply covenants and collect 90-day unpaid commissary ledgers with interest.",
  },
  {
    id: "B2B-274",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "foco-oem-licensing",
    title: "FOCO/FICO Investor Minimum Guarantee (MMG) Lockout & ₹35L Kitchen Asset Rescue",
    url: "/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery",
    statute: "Arbitration Act s.9 Court Receiver + BNS s.316 Criminal Breach of Trust",
    summary:
      "Rescue trapped ovens, chillers, and POS terminals when a franchise property owner unlawfully padlocks a company-operated store over operational deficit splits or unmet MMG expectations.",
  },
  {
    id: "B2B-275",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "foco-oem-licensing",
    title: "EV Two-Wheeler / Three-Wheeler & Auto OEM Dealer Credit & Floorplan Recovery",
    url: "/ev-two-wheeler-three-wheeler-automobile-oem-dealer-credit-recovery",
    statute: "Vahan Portal Dealer Freeze + Commercial Courts Act s.2(1)(c) + PSS Act s.25",
    summary:
      "Block Vahan 4.0 dealer registration credentials when a dealer sells 40 vehicles for cash and diverts wholesale proceeds, securing showroom vehicle attachments and prosecuting dishonoured trade PDCs.",
  },
  {
    id: "B2B-276",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "foco-oem-licensing",
    title: "Preschool, K-12 & EdTech Franchise Royalty & Concealed Student Enrollment Recovery",
    url: "/preschool-k12-edtech-franchise-royalty-student-kit-fee-recovery",
    statute: "Copyright Act s.51/55 + Commercial Courts Act s.2(1)(c)(ix) + Audit Mandates",
    summary:
      "Prosecute preschool franchisees admitting 90 students while declaring only 30 on the central portal, stopping unauthorized book photocopying and collecting student-kit arrears.",
  },
  {
    id: "B2B-277",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "foco-oem-licensing",
    title: "Brand Licensing & Merchandising Minimum Guaranteed Royalty (MGR) Recovery",
    url: "/brand-licensing-merchandising-minimum-royalty-guarantee-recovery",
    statute: "Contract Act s.74 Liquidated Damages + Commercial Courts Act s.2(1)(c)(xvii)",
    summary:
      "Enforce shortfall claims on Minimum Guaranteed Royalties against apparel and consumer goods licensees while halting post-expiry clearance dumping on unauthorized e-commerce channels.",
  },
  {
    id: "B2B-279",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "templates-audit",
    title: "Master Franchisee Regional Development Schedule Default & Territory Step-In",
    url: "/master-franchisee-regional-development-schedule-default-recovery",
    statute: "Specific Relief Act s.14/16 + Commercial Arbitration + Escrow Recovery",
    summary:
      "Revoke state exclusivity when a master franchisee squats on territories, misses mandatory store roll-out schedules, or diverts sub-franchisee sign-up fees without franchisor clearance.",
  },
  {
    id: "B2B-280",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "templates-audit",
    title: "2-Stage Franchisor Legal Notice Pack: Royalty Cure + Termination & Signboard De-Branding",
    url: "/templates/franchisor-royalty-default-termination-signboard-takedown-notice",
    statute: "Commercial Courts Act s.2(1)(c)(ix) + Trade Marks Act s.135 + NI Act s.138",
    summary:
      "Interactive fact-verified notice builder generating: (1) 15-Day Royalty Arrears & POS Audit Cure Notice, and (2) Formal Franchise Termination & 48-Hour Signboard De-Branding Notice.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "qsr-retail-signboard" as const,
    heading: "Track A: QSR, Cafe & Retail Chains: Signboard Hijacking, POS Skimming & Commissaries",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "foco-oem-licensing" as const,
    heading: "Track B: FOCO Lockouts, Auto/EV Dealership Credit, Preschools & Brand Merchandising",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "templates-audit" as const,
    heading: "Track C: Master Franchise Territory Defaults & 2-Stage Statutory Notice Pack",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "Commercial Courts Act, 2015 — Section 2(1)(c)(ix) & Section 2(1)(c)(xvii)",
    title: "Franchise Agreements & IP Disputes are Statutory Commercial Disputes with Fast-Track Benches",
    parties: "Franchisors & Brand Licensors vs Defaulting Franchisees & Licensees",
    holding:
      "Section 2(1)(c)(ix) of the Commercial Courts Act, 2015 explicitly enumerates disputes arising out of 'franchise agreements' as statutory commercial disputes. Together with sub-clause (xvii) covering intellectual property rights, disputes involving royalty non-payment, minimum monthly guarantees, territory breaches, and trademark misuse are heard exclusively by specialized Commercial Courts or Commercial Divisions of High Courts. This provides access to Summary Judgment under Order XIII-A CPC, strict Case Management Hearings under Order XV-A CPC, and exemption from Section 12A mediation when urgent interim protection is sought.",
    impact:
      "Completely neutralizes slow ordinary civil suits, allowing franchisors to secure summary decrees and immediate asset freezes within 6 to 9 months.",
  },
  {
    citation: "Trade Marks Act, 1999 — Sections 29, 134 & 135 (+ Order XXXIX Rules 1 & 2 CPC)",
    title: "Post-Termination Signboard & Menu Usage Constitutes Trademark Infringement Entitling Ex-Parte Injunctions",
    parties: "Brand Licensors vs Rogue Holdover Franchisees (*Gujarat Bottling Co. Ltd. v. Coca Cola Co.*)",
    holding:
      "The Supreme Court of India in Gujarat Bottling Co. Ltd. v. Coca Cola Co. (1995 5 SCC 545) affirmed that negative covenants and post-termination trademark restrictions in franchise agreements do not violate Section 27 of the Contract Act and are fully enforceable. Once a franchise agreement is lawfully terminated, any continued use of the brand name, logo, exterior glow-sign board, interior decor, or proprietary recipes constitutes statutory trademark infringement under Section 29 and passing off under Section 135. The franchisor is entitled to ex-parte ad-interim injunctions and the appointment of a Court-appointed Local Commissioner to dismantle signboards and seize infringing inventory.",
    impact:
      "Enables franchisors to obtain same-week court orders removing rogue signboards, delisting aggregator accounts, and impounding lookalike packaging across any Tier-2 or Tier-3 city.",
  },
  {
    citation: "Arbitration & Conciliation Act, 1996 — Section 9 & Section 17 (Interim Asset & Trademark Protection)",
    title: "Urgent Commercial Court Injunctions to Secure Royalty Arrears & Appoint Receivers Before Arbitral Reference",
    parties: "Franchisors, Cafe Networks & Auto OEMs vs Defaulting Outlets",
    holding:
      "Under Section 9 of the Arbitration and Conciliation Act, 1996, the Commercial Court holds plenary power prior to or during arbitral proceedings to grant interim protection, including: (a) restraining a franchisee from transferring or alienating store assets, (b) directing pre-deposit of admitted or formula-derived royalty arrears into an escrow or court deposit, and (c) appointing an advocate receiver or commissioner to inspect POS terminals, recover leased kitchen equipment, or supervise inventory handovers.",
    impact:
      "Prevents defaulting franchisees from stripping store assets, siphoning cash, or changing signboards overnight while the dispute proceeds to fast-track sole arbitration.",
  },
  {
    citation: "Negotiable Instruments Act, 1881 (s.138/141) & Payments and Settlement Systems Act, 2007 (s.25)",
    title: "Criminal Prosecution for Bounced Franchise Security Cheques & Dishonoured Recurring NACH Royalties",
    parties: "Franchisors & OEMs vs Proprietors, Partners & Managing Directors of Defaulting Outlets",
    holding:
      "Under Section 139 of the NI Act and Sripati Singh v. State of Jharkhand, security cheques handed over by a franchisee become enforceable negotiable instruments the moment monthly royalty, commissary supply, or minimum guarantee invoices mature. Furthermore, Section 25 of the Payments and Settlement Systems Act, 2007 accords identical criminal liability to dishonoured electronic NACH/e-Mandate debits. Serving a statutory 30-day demand notice followed by a Section 138/141 complaint fastens vicarious criminal liability directly onto outlet partners, directors, and active signatories.",
    impact:
      "Converts corporate expansion defaults into personal criminal liability, compelling rapid commercial settlement within the mandatory 15-day statutory cure window.",
  },
];

const FAQS = [
  {
    question: "What legal action can a franchisor take if a terminated franchisee refuses to remove the signboard?",
    answer:
      "Serve an immediate 48-hour de-branding notice citing Trade Marks Act 1999 s.29/135 and Commercial Courts Act s.2(1)(c)(ix). If non-compliant, file an urgent Section 9 Arbitration Petition or Commercial Trademark Suit seeking an ex-parte ad-interim injunction and appointment of a Local Commissioner (Court Receiver) to dismantle the ACP glow-sign board, seize branded menus and packaging with police protection, and delist the outlet from Swiggy, Zomato, and Google Maps under IT Rules 2021.",
  },
  {
    question: "How can a franchisor legally prove POS cash-skimming and personal UPI QR royalty evasion?",
    answer:
      "Deploy a certified mystery shopper audit to document video and UPI payment receipts routed to personal accounts rather than the franchisor POS, authenticated under Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63. Simultaneously, compare central kitchen raw material dispatches (e.g., custom cups, dough, spice blends) against declared sales—the unavoidable packaging-to-revenue ratio provides mathematical proof of turnover suppression before the Commercial Court.",
  },
  {
    question: "Can an EV or automobile OEM block a defaulting dealer's Vahan portal credentials?",
    answer:
      "Yes. Dealership agreements grant OEMs administrative authority to suspend or revoke dealer access on the central Homologation and Vahan 4.0 portals upon wholesale invoice default or diverted retail sale proceeds. This stops the defaulting dealer from registering vehicles to new customers, instantly arresting unauthorized vehicle liquidations while initiating NI Act s.138 and Commercial Court pre-judgment attachment.",
  },
  {
    question: "What should a brand do if a FOCO store property owner padlocks the store with equipment inside?",
    answer:
      "A franchise investor has zero statutory lien or right of distress over company-owned kitchen, medical, or diagnostic machinery. File an urgent Section 9 Petition under the Arbitration Act before the Commercial Court for the appointment of an advocate receiver to take possession of the equipment with police assistance. Simultaneously, lodge a formal police complaint under BNS Section 316 (Criminal Breach of Trust) and Section 329 (Criminal Trespass/Wrongful Restraint).",
  },
  {
    question: "Are franchise agreement disputes eligible for fast-track Commercial Courts?",
    answer:
      "Yes. Section 2(1)(c)(ix) of the Commercial Courts Act, 2015 expressly designates disputes arising out of 'franchise agreements' as statutory commercial disputes. Franchisors can obtain expedited trials, pre-judgment asset attachments under Order XXXVIII Rule 5 CPC, and summary judgments under Order XIII-A CPC where the defaulting franchisee has no real prospect of defending the claim.",
  },
  {
    question: "Can a franchisor send bulk legal notices across 20+ defaulting stores simultaneously?",
    answer:
      "Yes. Through our Institutional Batch Recovery Desk, franchisors and OEMs can upload store ledger CSVs mapping store codes, unpaid royalties, commissary invoices, and bounced PDC details. Fact-verified statutory demand notices are dispatched simultaneously via Email, WhatsApp, and physical Speed Post RPAD across all target cities with centralized tracking.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(ix) Franchise Disputes) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Trade Marks Act, 1999 (Sections 29 & 135 Infringement & Injunctions) — IP India",
    url: "https://ipindia.gov.in/",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 9 Interim Measures) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 141 Dishonour of Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 NACH Dishonour)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Ministry of Road Transport and Highways (MoRTH) — Vahan 4.0 Portal",
    url: "https://vahan.parivahan.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType:
    "B2B Franchisor Royalty Recovery, Trademark Signboard De-Branding Enforcement & OEM Dealership Credit Recovery",
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  provider: {
    "@type": "LegalService",
    name: "LegalRecovery.in (AMA Legal Solutions)",
    url: SITE_URL,
  },
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-24 Franchisor, Brand Licensor & Auto/EV Dealership Recovery Playbooks",
  numberOfItems: IND_24_SPOKES.length,
  itemListElement: IND_24_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
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
      name: "Franchisors & OEM Dealership Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function FranchisorsBrandLicensorsOEMHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([SERVICE_SCHEMA, ITEM_LIST_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-24 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Franchisors, QSRs, Retail Chains &amp; EV/Auto OEMs</span>
            <span className="text-slate-500">&bull;</span>
            <span>Creditor &amp; Brand Owner Enforcement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor &amp; Brand-Owner Answer (Commercial Courts Act s.2(1)(c)(ix) &amp; TM Act s.135)
            </span>
            Built exclusively for Indian franchisors, brand licensors, QSR chains, and EV/auto OEMs—never defaulting franchisees. Recover <strong>under-reported POS royalties</strong>, collect <strong>unpaid central commissary &amp; spare-part supply ledgers</strong>, enforce <strong>Minimum Monthly Guarantee (MMG) shortfalls</strong>, and dismantle <strong>rogue ex-franchisee signboards</strong> under Section 2(1)(c)(ix) of the Commercial Courts Act, 2015, Section 9 of the Arbitration Act, and Sections 29 &amp; 135 of the Trade Marks Act, 1999.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100 mb-1">
                4,500+
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Indian Franchisor Brands
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 mb-1">
                s.2(1)(c)(ix)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Commercial Court Forum
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 mb-1">
                48-72 Hrs
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Aggregator Delisting Clock
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400 mb-1">
                Section 9
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Signboard Seizure Orders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: "Franchisors & OEM Dealership Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        {/* 2-Column Split: TOC Sidebar + Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <FranchisorHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Strategic Industry Overview & The Creditor Dilemma */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  IND-24 Sector Analysis &bull; Franchisor Legal Gap
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Why 4,500+ Indian Franchisor Networks Bleed Uncollected Royalties
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Over the past decade, India’s franchise ecosystem has exploded across Quick-Service Restaurants (QSRs), cafe chains, beauty salons, preschools, diagnostic clinics, and electric vehicle (EV) dealerships. Over 4,500 homegrown and international franchisor brands operate across Tier-1, Tier-2, and Tier-3 cities. Yet, a glaring asymmetry paralyzes the sector: while 100% of consumer law portals and legal blogs cater to disgruntled franchisees demanding franchise-fee refunds, <strong>zero institutional legal platforms represent the franchisor or brand licensor</strong>.
                </p>
                <p>
                  In reality, the primary financial bleed in Indian retail expansion falls squarely on the brand owner. Franchisors invest massive upfront capital in brand building, trademark registrations, recipes, SOP architecture, kitchen design, and national marketing campaigns. In return, franchisors rely on recurring monthly net-sales royalties (typically 5%–10%), marketing fund contributions (1%–3%), central kitchen commissary margins, and vehicle inventory financing.
                </p>
                <p>
                  Once an outlet gains steady footfall, however, an alarming pattern of default emerges across three distinct commercial failure modes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mb-2">
                      1
                    </span>
                    <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                      POS Cash Skimming &amp; UPI Diversion
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Counter staff display personal Google Pay / PhonePe QR codes or pocket cash for walk-in orders, hiding 30% to 55% of true store turnover from the cloud ERP POS to artificially depress royalty pay-outs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mb-2">
                      2
                    </span>
                    <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                      Rogue Holdover Signboard Misuse
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      After termination for non-payment, the ex-franchisee refuses to dismantle the brand exterior glow-sign board, continues serving unauthorized ingredients under the brand logo, or launches an identical lookalike brand.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mb-2">
                      3
                    </span>
                    <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                      OEM Dealership Cash Diversions
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Automobile and EV two-wheeler/three-wheeler dealers collect cash from 20 to 50 retail customers, fail to deposit proceeds into the OEM escrow, and default on multi-lakh vehicle consignments and spare-part ledgers.
                    </p>
                  </div>
                </div>
                <p>
                  Traditional civil recovery suits in district courts take 5 to 8 years—during which the defaulting outlet bankrupts the territory and dilutes the franchisor’s trademark goodwill. LegalRecovery.in deploys a specialized statutory framework combining <strong>Section 2(1)(c)(ix) of the Commercial Courts Act, 2015</strong>, <strong>Section 9 urgent interim injunctions under the Arbitration Act</strong>, <strong>Trade Marks Act Section 135 Local Commissioners</strong>, and <strong>NI Act Section 138 / PSS Act Section 25 criminal mandates</strong> to enforce recovery within weeks.
                </p>
              </div>
            </section>

            {/* Section 2: 8-Track Multi-Track Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional Remedy Sizing &bull; Multi-Track Playbook
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                8-Track Franchise, Commissary &amp; OEM Dealership Escalation Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Institutional recovery requires matching the dispute profile against the appropriate statutory forum, ticket tier, and interim relief threshold. The matrix below defines the optimal enforcement track for brand expansion executives.
              </p>

              <div className="overflow-x-auto -mx-5 sm:mx-0 rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">Track &amp; Breach Category</th>
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">Typical Claim Band</th>
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">Primary Statutory Hook</th>
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">Urgent Interim Relief</th>
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">Expected Resolution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 1: POS Under-Reporting &amp; Cash Skimming
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹2.5L – ₹25L</td>
                      <td className="py-3 px-4">Commercial Courts Act s.2(1)(c)(ix) + BSA s.63</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">Independent Forensic POS Audit Order</td>
                      <td className="py-3 px-4">15–30 Days (Pre-Mediation Settlement)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 2: Post-Termination Rogue Signboard Misuse
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹10L – ₹1.5 Cr+</td>
                      <td className="py-3 px-4">Trade Marks Act s.29/135 + CPC Order XXXIX</td>
                      <td className="py-3 px-4 text-[#DC2626] font-medium">Ex-Parte Injunction &amp; Local Commissioner</td>
                      <td className="py-3 px-4">7–14 Days (Signboard Dismantled)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 3: Central Commissary &amp; Raw Material Credit
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹1.8L – ₹35L</td>
                      <td className="py-3 px-4">NI Act s.138/141 + Order XXXVII Summary Suit</td>
                      <td className="py-3 px-4 text-slate-800">Supply Cut-Off + Bank Account Freeze</td>
                      <td className="py-3 px-4">30–60 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 4: FOCO / FICO Store Lockout &amp; Equipment
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹20L – ₹1.2 Cr+</td>
                      <td className="py-3 px-4">Arbitration Act s.9 + BNS s.316 Criminal Breach</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">Court Receiver for Asset Recovery</td>
                      <td className="py-3 px-4">10–21 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 5: EV 2W/3W &amp; Auto Dealership Consignment
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹25L – ₹3 Cr+</td>
                      <td className="py-3 px-4">Vahan Portal Freeze + Order XXXVIII Rule 5</td>
                      <td className="py-3 px-4 text-[#DC2626] font-medium">Showroom Vehicle Attachment Order</td>
                      <td className="py-3 px-4">21–45 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 6: Preschool &amp; K-12 Student Kit Concealment
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹3L – ₹18L</td>
                      <td className="py-3 px-4">Copyright Act s.51/55 + Commercial s.2(1)(c)</td>
                      <td className="py-3 px-4 text-slate-800">Curriculum ERP License De-Activation</td>
                      <td className="py-3 px-4">15–30 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 7: Brand Merchandising Minimum Guarantee (MGR)
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹15L – ₹80L</td>
                      <td className="py-3 px-4">Commercial Courts Act s.2(1)(c)(xvii) IP</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">Restraint on Marketplace Discount Dumping</td>
                      <td className="py-3 px-4">30–60 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Track 8: Master Franchise Territory Exclusivity Squat
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-800">₹50L – ₹5 Cr+</td>
                      <td className="py-3 px-4">Specific Relief Act s.14 + Commercial Arbitration</td>
                      <td className="py-3 px-4 text-[#DC2626] font-medium">Termination &amp; Direct Brand Step-In</td>
                      <td className="py-3 px-4">45–90 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Statutory Workflow & Escalation Architecture (SVG Diagram) */}
            <section
              id="heading-workflow-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Enforcement Architecture &bull; Step-by-Step SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Workflow: From POS Audit to Section 9 Trademark Freeze
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Recovering institutional dues from a retail franchisee requires combining contract law, trademark rights, and criminal statutory clocks. Below is our battle-tested multi-track pipeline designed for in-house legal heads.
              </p>

              {/* Desktop SVG Workflow Diagram */}
              <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6 overflow-hidden">
                <div className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-4 text-center">
                  Franchisor 4-Stage Statutory Escalation Pipeline
                </div>
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 900 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label={formatAltText("Franchisor Enforcement Workflow")}
                  width={900}
                  height={180}
                >
                  {/* Step 1 Box */}
                  <rect x="20" y="30" width="185" height="120" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="35" y="60" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 1 &bull; AUDIT &amp; DEMAND</text>
                  <text x="35" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">Mystery POS Audit</text>
                  <text x="35" y="105" fill="#94A3B8" fontSize="11">BSA s.63 Video &amp; QR Trail</text>
                  <text x="35" y="125" fill="#94A3B8" fontSize="11">15-Day Cure Notice</text>

                  {/* Arrow 1 */}
                  <path d="M215 90 H245" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="245,86 253,90 245,94" fill="#DC2626" />

                  {/* Step 2 Box */}
                  <rect x="255" y="30" width="185" height="120" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="270" y="60" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 2 &bull; TERMINATION</text>
                  <text x="270" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">Formal Termination</text>
                  <text x="270" y="105" fill="#94A3B8" fontSize="11">48-Hr De-Branding Notice</text>
                  <text x="270" y="125" fill="#94A3B8" fontSize="11">Swiggy/Zomato Delisting</text>

                  {/* Arrow 2 */}
                  <path d="M450 90 H480" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="480,86 488,90 480,94" fill="#DC2626" />

                  {/* Step 3 Box */}
                  <rect x="490" y="30" width="185" height="120" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="505" y="60" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 3 &bull; INJUNCTION</text>
                  <text x="505" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">Section 9 Commercial Pet.</text>
                  <text x="505" y="105" fill="#94A3B8" fontSize="11">Ex-Parte Restraint Order</text>
                  <text x="505" y="125" fill="#94A3B8" fontSize="11">Local Commissioner Seizure</text>

                  {/* Arrow 3 */}
                  <path d="M685 90 H715" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="715,86 723,90 715,94" fill="#DC2626" />

                  {/* Step 4 Box */}
                  <rect x="725" y="30" width="155" height="120" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="740" y="60" fill="#10B981" fontSize="12" fontWeight="bold">STAGE 4 &bull; RECOVERY</text>
                  <text x="740" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">NI s.138 &amp; Order XIII-A</text>
                  <text x="740" y="105" fill="#94A3B8" fontSize="11">Director Personal Liability</text>
                  <text x="740" y="125" fill="#94A3B8" fontSize="11">Bank Account Attachment</text>
                </svg>
              </div>

              {/* Mobile Responsive Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Stage 1 &bull; Audit &amp; 15-Day Demand
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Forensic POS Audit &amp; BSA s.63 Evidence</p>
                  <p className="text-xs text-slate-300">
                    Mystery shoppers capture personal UPI QR evasion. Reconstruct sales via packaging usage and issue a 15-day cure-or-terminate demand.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Stage 2 &bull; Formal Termination &amp; Delisting
                  </span>
                  <p className="text-sm font-bold text-white mb-1">48-Hour De-Branding &amp; Aggregator Delisting</p>
                  <p className="text-xs text-slate-300">
                    Revoke POS software access and dispatch IT Rules 2021 intermediary notices to Swiggy, Zomato, and Google Maps to delist the outlet.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Stage 3 &bull; Section 9 Urgent Injunction
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Commercial Court Section 9 &amp; Local Commissioner</p>
                  <p className="text-xs text-slate-300">
                    Bypass Section 12A mediation; obtain ex-parte interim injunction and Court Receiver to dismantle ACP glow-sign boards and seize branded stock.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Stage 4 &bull; Monetized Recovery
                  </span>
                  <p className="text-sm font-bold text-white mb-1">NI s.138 Criminal Complaint &amp; Summary Judgment</p>
                  <p className="text-xs text-slate-300">
                    Prosecute bounced security cheques fastening personal liability on partners and directors; attach bank accounts via Order XIII-A CPC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Explorer */}
            <section
              id="heading-scenario-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Decision Engine &bull; 4 Tactical Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                4 Critical Brand Protection &amp; Royalty Failure Modes (Interactive)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Click across the tabs below to explore exact commercial bottlenecks, statutory hooks, and operational action plans tailored for QSR brands, retail licensors, and auto OEMs.
              </p>

              {/* Client Component: Scenario Tabs */}
              <FranchisorHubScenarioTabs />
            </section>

            {/* Section 5: Bulk Franchise CSV Desk & Enterprise Multi-Outlet Recovery */}
            <section
              id="heading-bulk-csv-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pan-India Multi-Location Scalability &bull; Bulk CSV Desk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Bulk Franchise Ledger &amp; Multi-Location Signboard Enforcement Desk
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Enterprise franchisors managing 50 to 500+ franchise outlets across multiple states face acute operational bottlenecks when multiple franchisees default concurrently. Pursuing individual defaulting stores through scattered local advocates leads to fragmented legal strategies, lost statutory limitation stops, and astronomical litigation costs.
                </p>
                <p>
                  Through LegalRecovery.in’s <strong>Dedicated Institutional Recovery Desk</strong>, enterprise franchisors, salon chains, preschool aggregators, and EV OEMs execute structured, multi-city recovery drives with centralized MIS reporting:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Standardized CSV Ingestion:</strong> Ingest hundreds of store ledgers mapping Franchisee Legal Entity, Store Code, Territory, Unpaid Royalty Months, POS Audit Discrepancy, Commissary Supply Bills, and Bounced Security Cheque / NACH mandate details directly via our{" "}
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Bulk Recovery CSV Engine
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/user/representees"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Representees Network Manager
                    </Link>.
                  </li>
                  <li>
                    <strong>Simultaneous Multi-Channel Notice Service:</strong> Every notice is dispatched simultaneously via Senior Advocate Email, WhatsApp Business API (with read-receipt logging), and physical registered Speed Post RPAD with real-time India Post tracking integration.
                  </li>
                  <li>
                    <strong>Aggregator Delisting Automation:</strong> Structured notice copies are auto-routed to legal grievance officers at Swiggy, Zomato, Google Maps, and Magicpin under the Information Technology (Intermediary Guidelines) Rules, 2021, freezing the defaulting outlet’s online order stream within 48 to 72 hours.
                  </li>
                  <li>
                    <strong>Batch Escalation Routing:</strong> High-ticket defaulters (&gt;₹10 Lakh) are automatically triaged into fast-track Section 9 Commercial Court Petitions or sole-arbitrator appointment under Section 11 of the Arbitration Act.
                  </li>
                </ul>
              </div>

              {/* Dual-Track CTA Component */}
              <div className="mt-8">
                <FranchisorHubCTA />
              </div>
            </section>

            {/* Section 6: Statutory Commentary & Landmark Judicial Precedents */}
            <section
              id="heading-statutory-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Precedents &bull; Commercial Bench Authority
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Commercial Courts Act s.2(1)(c)(ix), TM Act &amp; Arbitration s.9 Hooks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Indian courts strictly enforce negative covenants, post-termination de-branding, and royalty recovery when framed under the appropriate commercial statutes. Below are the governing authorities relied upon in our notices and court pleadings.
              </p>

              <div className="space-y-4">
                {BINDING_MANDATES.map((mandate, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626] shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {mandate.citation}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {mandate.parties}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      {mandate.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {mandate.holding}
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                      <strong className="text-slate-900">Creditor Enforcement Impact: </strong>
                      {mandate.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Financial Calculation & Comparison Ledgers */}
            <section
              id="heading-worked-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Forensic Accounting &bull; Mathematical Proof
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Ledger: ₹34.5L QSR Default vs ₹68L EV Dealership Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Review concrete numerical illustrations demonstrating how forensic packaging multipliers expose POS royalty evasion, and how OEM floorplan credit is crystallized into enforceable claims.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Ledger 1: QSR POS Skimming vs Packaging Reconstruction */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Illustration A: QSR Cafe Chain (Tier-2 City)
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">FOFO Model &bull; 7% Royalty</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white mb-3">
                    Packaging Multiplier Exposes ₹28.8L Sales Skimming
                  </h3>
                  <div className="space-y-2 text-xs text-slate-300 font-mono mb-4">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Franchisee Declared POS Sales (12 Mos):</span>
                      <span className="text-slate-100 font-bold">₹36,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Royalty Paid @ 7% + 2% Ad Fund (9%):</span>
                      <span className="text-slate-100">₹3,24,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Central Branded Cups/Boxes Dispatched:</span>
                      <span className="text-amber-400">72,000 Units</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Average Order Value (AOV) via Audit:</span>
                      <span className="text-slate-100">₹90 / unit</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>True Reconstructed Turnover (72k × ₹90):</span>
                      <span className="text-emerald-400 font-bold">₹64,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Gross Sales Skimmed via Personal UPI:</span>
                      <span className="text-red-400 font-bold">₹28,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Unpaid Royalty Arrears (9% of ₹28.8L):</span>
                      <span className="text-emerald-400 font-bold">₹2,59,200</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Unpaid Commissary Ingredient Invoices:</span>
                      <span className="text-slate-100 font-bold">₹8,45,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Audit Penalty + 18% p.a. Contract Interest:</span>
                      <span className="text-slate-100 font-bold">₹3,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-sm bg-red-950/40 p-2 rounded-lg font-bold">
                      <span className="text-white">Total Statutory Claim Amount:</span>
                      <span className="text-red-400">₹14,84,200</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Backed by BSA Section 63 mystery audit receipts and central packaging bills, the Commercial Court awarded summary judgment under Order XIII-A CPC in 4 months.
                  </p>
                </div>

                {/* Ledger 2: EV Two-Wheeler Dealership Default */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Illustration B: EV 2W OEM Network
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">District Dealership &bull; 40 Vehicles</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white mb-3">
                    Vahan Freeze &amp; Recovery of Diverted Cash
                  </h3>
                  <div className="space-y-2 text-xs text-slate-300 font-mono mb-4">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Wholesale Vehicle Consignment (40 Scooters):</span>
                      <span className="text-slate-100 font-bold">₹42,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Spare Parts &amp; Fast-Charger Inventory:</span>
                      <span className="text-slate-100">₹8,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Dealer Retail Cash Collections Diverted:</span>
                      <span className="text-red-400 font-bold">₹31,50,000 (30 Units)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Unsold Stock in Showroom (10 Units):</span>
                      <span className="text-amber-400">₹10,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Dealer Security PDC Bounced on Presentation:</span>
                      <span className="text-red-400 font-bold">₹50,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Vahan 4.0 OEM Credential Suspension:</span>
                      <span className="text-emerald-400 font-bold">Instant (0 Days)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Court Receiver Showroom Attachment:</span>
                      <span className="text-emerald-400">₹10.5L Stock Recovered</span>
                    </div>
                    <div className="flex justify-between py-1 text-sm bg-red-950/40 p-2 rounded-lg font-bold">
                      <span className="text-white">Cash Balance Recovered via s.138:</span>
                      <span className="text-emerald-400">₹40,00,000</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Suspending the dealer’s Vahan chassis portal stopped customer deliveries; criminal NI s.138 pressure on the managing director triggered full payment within 18 days of notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Complete IND-24 Hub-and-Spoke Directory */}
            <section
              id="heading-spokes-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  IND-24 Architecture &bull; Complete Downward Spokes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Complete IND-24 Directory: All 9 Spokes &amp; Legal Notice Pack
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Access specialized practitioner guides, operational playbooks, and ready-to-use notice templates across every franchise and dealership dispute corridor.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const spokes = IND_24_SPOKES.filter((s) => s.track === track.key);
                  return (
                    <div key={track.key}>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${track.badgeClass}`}>
                          {track.heading}
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {spokes.map((spoke) => (
                          <div
                            key={spoke.id}
                            className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] font-mono">
                                  {spoke.id} &bull; {spoke.archetype}
                                </span>
                                <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-semibold">
                                  {spoke.archetypeLabel.split(" ")[1] || "Guide"}
                                </span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-2 leading-snug">
                                <Link
                                  href={spoke.url}
                                  className="hover:text-[#DC2626] transition-colors"
                                >
                                  {spoke.title}
                                </Link>
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                {spoke.summary}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                              <span className="text-[10px] text-slate-500 font-mono truncate max-w-[170px]">
                                {spoke.statute.split("+")[0]}
                              </span>
                              <Link
                                href={spoke.url}
                                className="text-xs font-bold text-[#DC2626] hover:underline shrink-0"
                              >
                                View SOP &rarr;
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 9: Essential Seed Cross-Links & Complementary B2B Portals */}
            <section
              id="heading-seed-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core B2B Network &bull; Lateral Cross-Links
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Essential Brand Protection Guides, ODR &amp; Bulk Debt Portals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Connect your brand legal operations with our core institutional dispute resolution frameworks, dealer debt solutions, and all-in-one bulk recovery systems:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Commercial Distribution Network
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                      <Link
                        href="/distributor-dealer-dues-recovery"
                        className="hover:text-[#DC2626] transition-colors"
                      >
                        Distributor &amp; Dealer Dues Recovery
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      High-velocity institutional debt collection protocol for FMCG, retail brands, and industrial manufacturers collecting unpaid channel dealer ledgers.
                    </p>
                  </div>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-xs font-bold text-[#DC2626] hover:underline"
                  >
                    Open Dealer Portal &rarr;
                  </Link>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      Fast-Track Arbitration &amp; ODR
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                      <Link
                        href="/online-dispute-resolution-india"
                        className="hover:text-[#DC2626] transition-colors"
                      >
                        Online Dispute Resolution (ODR) India
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Digital institutional arbitration and conciliation infrastructure delivering enforceable arbitral awards against outstation franchisees in under 60 days.
                    </p>
                  </div>
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-xs font-bold text-[#DC2626] hover:underline"
                  >
                    Explore ODR Platform &rarr;
                  </Link>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                      High-Volume Institutional Recovery
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                      <Link
                        href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                        className="hover:text-[#DC2626] transition-colors"
                      >
                        Bulk Recovery Cases &amp; Solutions
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Ingest 10 to 10,000+ franchisee defaults, central kitchen supply debts, and bounced dealer PDCs via CSV with pan-India automated notice tracking.
                    </p>
                  </div>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="text-xs font-bold text-[#DC2626] hover:underline"
                  >
                    Upload CSV Batch &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 10: Frequently Asked Questions (Accordion) */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal FAQ &bull; Franchisor Rights
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: Franchisor &amp; Brand Licensor Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Detailed statutory answers to urgent operational questions faced by QSR founders, retail expansion heads, and automobile OEM finance executives.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 transition-all duration-150 open:bg-white open:border-slate-300 open:shadow-xs"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 font-extrabold text-xs sm:text-sm text-slate-900 cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                        &darr;
                      </span>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Authorities & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Government Acts &bull; Bare Act Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutory Authorities &amp; Official Enforcement Portals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Every legal notice, arbitration petition, and trademark injunction drafted by LegalRecovery.in directly incorporates bare-act provisions from official legislative repositories:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-slate-900 leading-snug mb-2">
                      {source.title}
                    </span>
                    <span className="text-[10px] text-[#DC2626] font-semibold flex items-center gap-1">
                      <span>View Official Portal</span>
                      <span>&nearr;</span>
                    </span>
                  </a>
                ))}
              </div>

              {/* Legal Reviewer Accreditation Box */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div>
                  <span className="font-semibold text-slate-700">Practitioner Review: </span>
                  <span>{LEGAL_REVIEWER.name}, {LEGAL_REVIEWER.role}</span>
                </div>
                <div>
                  <span>Standard Reference: IND-24 &bull; Commercial Courts Act 2015</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Section */}
      <RelatedRecoveryGuides />
    </div>
  );
}
