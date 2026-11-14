import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LogisticsHubTableOfContents from "./LogisticsHubTableOfContents";
import LogisticsHubScenarioTabs from "./LogisticsHubScenarioTabs";
import LogisticsHubCTA from "./LogisticsHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/logistics-freight-3pl-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Logistics, 3PL, Transporter & Freight Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover unpaid FTL/PTL freight ledgers, truck halting/detention, container demurrage, CHA customs duty advances & 3PL storage bills across India.";
const H1_TEXT =
  "Commercial Receivables, Detention & Lien Enforcement for Transporters, 3PL Warehouses, Freight Forwarders & CHAs";

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
  archetype: "L1" | "G1" | "H1" | "P1";
  archetypeLabel: string;
  track: "lien_fleet" | "cha_3pl_cold" | "hindi_templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_09_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-114",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "lien_fleet",
    title: "Transporter's Right of Lien: Current vs Past Cargo Detention",
    url: "/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act",
    statute: "Contract Act s.170–171 & Carriage Act",
    summary:
      "Distinguish statutory Particular Lien from contractual GR General Lien clauses and serve Lien Notices without triggering BNS theft FIRs.",
  },
  {
    id: "B2B-115",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "lien_fleet",
    title: "Truck Detention, Halting Charges & Container Demurrage Recovery",
    url: "/truck-detention-halting-charges-container-demurrage-recovery",
    statute: "BSA 2023 s.63 GPS / FASTag & s.73",
    summary:
      "Use AIS-140 GPS geofence logs, FASTag toll records, and E-Way Bill extension timestamps to defeat missing gate stamps.",
  },
  {
    id: "B2B-117",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "lien_fleet",
    title: "Defeating Arbitrary 'Transit Damage & Shortage' Freight Debits",
    url: "/shipper-fake-transit-damage-shortage-debit-note-defense-transporter",
    statute: "Raman Iron Foundry & Carriage Act s.16",
    summary:
      "Invoke clean POD estoppel, the 180-day claim limit, and marine-insurance double-dip bars against illegal freight set-offs.",
  },
  {
    id: "B2B-119",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "lien_fleet",
    title: "Dedicated Fleet Minimum-Km Guarantees & Early Lock-In Breaches",
    url: "/dedicated-fleet-contract-minimum-km-guarantee-shortfall-recovery",
    statute: "Contract Act s.73–74 & Commercial Courts",
    summary:
      "Recover fixed monthly standing charges and unamortized EV or custom-container CapEx when shippers slash dedicated routes.",
  },
  {
    id: "B2B-116",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "cha_3pl_cold",
    title: "CHA & Freight Forwarder Customs Duty & Ocean Freight Recovery",
    url: "/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery",
    statute: "Contract Act s.222 Indemnity & BL Hold",
    summary:
      "Enforce principal indemnity for upfront ICEGATE customs challans, CFS, and THC charges and shift abandoned-cargo demurrage.",
  },
  {
    id: "B2B-118",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "cha_3pl_cold",
    title: "3PL Warehouse Unpaid Storage Bills & Dead-Stock Lien Auction",
    url: "/3pl-warehouse-storage-fulfillment-unpaid-bill-lien-auction-guide",
    statute: "Contract Act s.170 Bailee Lien & O.37",
    summary:
      "Clear blocked pallet racks abandoned by defaulting D2C or enterprise clients using independent valuation and 15-day auction notices.",
  },
  {
    id: "B2B-120",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "cha_3pl_cold",
    title: "Cold-Chain & Reefer Freight Recovery Against Spoilage Blame",
    url: "/cold-chain-reefer-transport-unpaid-freight-spoilage-counterclaim",
    statute: "Carriage Act s.10/12 & BSA s.63 Telemetry",
    summary:
      "Prove warm-loaded cargo pulp temperatures via data-logger charts to defeat improper pre-cooling spoilage deductions.",
  },
  {
    id: "B2B-121",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "cha_3pl_cold",
    title: "Courier Aggregator Negative Seller Wallets & RTO Bulk Recovery",
    url: "/courier-aggregator-hyperlocal-logistics-seller-negative-wallet-recovery",
    statute: "IT Act s.10A Clickwrap & Batch CSV",
    summary:
      "Recover -₹15K to -₹5L D2C merchant wallet deficits triggered by post-COD RTO surges and volumetric weight audits in bulk.",
  },
  {
    id: "B2B-122",
    archetype: "H1",
    archetypeLabel: "H1 Hindi Vyapari Guide",
    track: "hindi_templates",
    title: "ट्रांसपोर्ट का रुका हुआ भाड़ा और हॉल्टिंग कैसे वसूलें? (Hindi Guide)",
    url: "/hi/transport-bilty-truck-bhada-recovery-legal-notice",
    statute: "Carriage Act 2007, s.170–171 & O.37 CPC",
    summary:
      "ट्रांसपोर्टर और फ्लीट मालिकों के लिए सरल हिंदी में बिल्टी (POD), ई-वे बिल, हॉल्टिंग चार्ज और कैरियर लियन के कानूनी नियम।",
  },
  {
    id: "B2B-123",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template Pack",
    track: "hindi_templates",
    title: "Logistics Template Pack: Overdue Bilty Freight + Carrier Lien",
    url: "/templates/transporter-freight-detention-carrier-lien-legal-notice",
    statute: "Carriage Act, Contract Act s.170/222 & O.37",
    summary:
      "Ready-to-customize GR/Bilty/E-Way Bill schedules, GPS halting annexures, Raman Iron Foundry rebuttals, and Lien notices.",
  },
];

const SPOKE_GROUPS = [
  {
    key: "lien_fleet",
    heading: "Track A: Carrier Lien, Halting Detention, Debit Notes & Dedicated Fleets",
    badgeClass: "bg-red-50 border-red-200 text-[#DC2626]",
    items: IND_09_SPOKES.filter((s) => s.track === "lien_fleet"),
  },
  {
    key: "cha_3pl_cold",
    heading: "Track B: CHAs, Freight Forwarders, 3PL Warehouses, Reefers & Aggregators",
    badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    items: IND_09_SPOKES.filter((s) => s.track === "cha_3pl_cold"),
  },
  {
    key: "hindi_templates",
    heading: "Track C: Hindi Fleet Owner Guide & Advocate Notice Template Pack",
    badgeClass: "bg-amber-50 border-amber-200 text-amber-800",
    items: IND_09_SPOKES.filter((s) => s.track === "hindi_templates"),
  },
];

const ESCALATION_MATRIX_ROWS = [
  {
    segment: "FTL / PTL Running Freight & Unpaid Bilty Ledgers",
    ticket: "₹50,000 – ₹75L+",
    trigger: "30–90 Days Past POD",
    statutoryTrack: "Order XXXVII CPC Summary Suit / Commercial Court s.12A + MSMED s.16",
    criticalGuardrail: "Attach signed POD, GR/Bilty, GST E-Way Bill & s.63 ledger certificate",
  },
  {
    segment: "In-Transit Cargo Withholding (Current vs Past Dues)",
    ticket: "₹1L – ₹2 Cr+",
    trigger: "Active Transit / Hub Hold",
    statutoryTrack: "Contract Act s.170 Particular Lien vs Contractual GR General Lien",
    criticalGuardrail: "Serve 48-hr Carrier Lien Intimation Notice; avoid BNS theft/extortion FIRs",
  },
  {
    segment: "Truck Halting, Trailer Detention & Container Demurrage",
    ticket: "₹50,000 – ₹35L",
    trigger: ">24–48h Gate Detention",
    statutoryTrack: "Contract Act s.73 + BSA 2023 s.63 AIS-140 GPS, FASTag & E-Way Logs",
    criticalGuardrail: "Overcome missing gate stamps with time-stamped geofence & toll logs",
  },
  {
    segment: "CHA ICEGATE Customs Duty, THC & Ocean Freight Advances",
    ticket: "₹3L – ₹1.5 Cr+",
    trigger: "Imminent Port Demurrage",
    statutoryTrack: "Contract Act s.222 Agent Indemnity + Delivery Order / HBL Hold",
    criticalGuardrail: "Put importer on immediate notice before port/line sues Notify Party",
  },
  {
    segment: "3PL Warehousing Storage Arrears & Abandoned Dead Stock",
    ticket: "₹2L – ₹80L",
    trigger: "60+ Days Unpaid WMS",
    statutoryTrack: "Contract Act s.170 Bailee Lien + Valuation + 15-Day Auction Notice",
    criticalGuardrail: "Never dump dead stock silently; run transparent public auction & deficit suit",
  },
  {
    segment: "Bogus Transit Damage / Reefer Spoilage / Dedicated Min-Km",
    ticket: "₹1.5L – ₹1 Cr+",
    trigger: "Arbitrary Debit / Cut",
    statutoryTrack: "Raman Iron Foundry Anti-Set-Off + Carriage Act s.10/12 & s.16 (180d bar)",
    criticalGuardrail: "Demand marine-insurance claim disclosure & pulp-temp logger printouts",
  },
  {
    segment: "Courier Aggregator Negative Seller Wallets & RTO Surges",
    ticket: "₹15K – ₹5L / Seller",
    trigger: "Post-COD RTO Deficit",
    statutoryTrack: "IT Act s.10A Clickwrap Terms + Bulk CSV Tri-Channel Notice + ODR",
    criticalGuardrail: "Include AWB-level volumetric audit & RTO manifests in batch dispatch",
  },
];

const STATUTORY_MANDATES = [
  {
    title: "Particular Lien vs Contractual General Lien on Consignments",
    citation: "Indian Contract Act, 1872 — Sections 170 & 171 + Carriage by Road Act, 2007",
    holding:
      "Statutory carrier/bailee Particular Lien under Section 170 protects withholding cargo strictly for freight due on that exact consignment. Detaining a fresh ₹50 Lakh shipment to recover older ledger arrears without an explicit General Lien clause printed on the Goods Receipt (Bilty) and Forwarding Note risks criminal breach of trust or wrongful restraint allegations.",
    impact:
      "Always pair GR General Lien wording with a formal 48-hour advocate Lien Intimation Notice.",
  },
  {
    title: "No Unilateral Set-Off of Unliquidated Damage Against Admitted Freight",
    citation: "Union of India v. Raman Iron Foundry (Supreme Court of India, 1974)",
    holding:
      "A shipper or consignee cannot unilaterally appropriate or deduct disputed, unquantified 'transit shortage' or 'spoilage' counterclaims from admitted running freight bills. Until a court or arbitrator adjudicates damages, withholding undisputed Bilty invoices is an actionable breach.",
    impact:
      "Cite Raman Iron Foundry alongside clean PODs and the 180-day Carriage Act s.16 claim notice bar.",
  },
  {
    title: "Principal's Statutory Duty to Indemnify CHAs & Freight Forwarders",
    citation: "Indian Contract Act, 1872 — Section 222 + Commercial Courts Act s.2(1)(c)(iv)/(v)",
    holding:
      "When a Customs House Agent or freight forwarder advances ICEGATE customs duty, Terminal Handling Charges (THC), or CFS fees on an importer's authorization, Section 222 statutorily obligates the principal to indemnify the agent against all lawful expenses and third-party shipping-line demurrage exposures.",
    impact:
      "Trigger immediate Section 222 indemnity notices alongside Delivery Order holds on abandoned cargo.",
  },
  {
    title: "Electronic GPS, FASTag, E-Way Bill & Reefer Telemetry Admissibility",
    citation: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 + Carriage by Road Act s.10 & s.12",
    holding:
      "AIS-140 GPS geofence entry/exit pings, FASTag toll-plaza timestamps, GST E-Way Bill validity-extension records, and continuous reefer return-air temperature logs qualify as primary electronic evidence when accompanied by a Section 63 BSA hash certificate—defeating missing physical gate stamps and warm-loading spoilage excuses.",
    impact:
      "Automate SHA-256 BSA s.63 packaging with every tri-channel Email, WhatsApp, and Speed Post dispatch.",
  },
];

const LIVE_SEED_LINKS = [
  {
    title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    tag: "CSV Batch Desk",
    desc: "Upload 10 to 10,000+ defaulting shippers, D2C sellers, or consignors with consolidated reply triage.",
  },
  {
    title: "Unpaid Business Invoices Legal Recovery Guide",
    href: "/recovery/unpaid-invoices",
    tag: "IND-09 Core Seed",
    desc: "Enforce overdue GST freight bills, signed Bilties, and commercial purchase-order payment terms.",
  },
  {
    title: "Order XXXVII Summary Suit for Fast Money Recovery",
    href: "/law/order-37-summary-suit-money-recovery",
    tag: "CPC Fast-Track",
    desc: "Convert written freight contracts, signed PODs, and confirmed ledgers into expedited decrees without full trial.",
  },
  {
    title: "Tri-Channel Bulk Notice Dispatch (Email + WhatsApp + Speed Post)",
    href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
    tag: "Service Proof",
    desc: "Simultaneous Zoho Email, WATI WhatsApp, and India Post Speed Post RPAD tracking with BSA s.63 proof.",
  },
  {
    title: "MSME Delayed Payment Interest Calculator (3x RBI Bank Rate)",
    href: "/tools/msme-delayed-payment-interest-calculator",
    tag: "Interactive Tool",
    desc: "Calculate Section 16 monthly compound interest and Section 43B(h) buyer tax disallowance for Udyam transporters.",
  },
  {
    title: "Section 43B(h) MSME 45-Day Payment Rule for Corporate Shippers",
    href: "/law/section-43bh-msme-payment-rule",
    tag: "Tax Leverage",
    desc: "Use March 31 Income-tax disallowance and Form 3CD Clause 22 audit disclosure to unlock stuck freight payments.",
  },
  {
    title: "MSME Samadhaan Portal vs Advocate Legal Notice",
    href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
    tag: "Strategy Matrix",
    desc: "Compare MSEFC conciliation timelines against immediate advocate notices and Section 138 cheque actions.",
  },
  {
    title: "Vendor & B2B Commercial Invoice Recovery Services",
    href: "/services/vendor-and-invoice-recoveries",
    tag: "B2B Services",
    desc: "Dedicated commercial recovery workflows for transport contractors, 3PL vendors, and institutional suppliers.",
  },
];

const FAQS = [
  {
    question: "Can an Indian transporter legally hold cargo in transit for unpaid past freight bills?",
    answer:
      "Only if your Goods Receipt (Bilty) or Master Transport Contract contains an explicit General Lien clause—and you serve an immediate written Carrier Lien Intimation Notice. Under Section 170 of the Indian Contract Act, 1872, a statutory Particular Lien covers only freight and charges due on the specific consignment currently in custody. Holding a fresh load for prior months' bills without contractual General Lien terms invites criminal breach of trust or extortion FIRs.",
  },
  {
    question: "How can fleet owners prove truck halting or detention when factory security refuses to stamp the POD?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), fleet operators can certify AIS-140 GPS geofence entry and exit logs, FASTag toll-plaza timestamps, driver dispatch WhatsApp pings, and GST E-Way Bill validity extension records as primary electronic evidence. Attaching this BSA s.63 schedule to an advocate demand notice strips away the consignee's missing-stamp excuse.",
  },
  {
    question: "What legal remedy protects CHAs and freight forwarders who advanced ICEGATE customs duty or CFS charges?",
    answer:
      "Section 222 of the Indian Contract Act, 1872 mandates that a principal (the importer/exporter) indemnify its agent (the CHA or freight forwarder) against all lawful payments made and liabilities incurred in executing agency instructions. Combining a Delivery Order or House Bill of Lading hold with an immediate Section 222 indemnity notice protects the CHA before shipping lines pursue demurrage against the Notify Party.",
  },
  {
    question: "Can a corporate shipper deduct unverified 'transit shortage' or 'spoilage' from admitted running freight bills?",
    answer:
      "No. Under the Supreme Court's ruling in Union of India v. Raman Iron Foundry, a party cannot unilaterally appropriate or set off unliquidated, disputed damage claims against admitted bills payable for completed trips. Furthermore, clean consignee-signed PODs, the 180-day notice limit under Section 16 of the Carriage by Road Act, 2007, and marine-insurance double-dip bars invalidate arbitrary debit notes.",
  },
  {
    question: "How can a 3PL warehouse dispose of dead stock abandoned by a defaulting D2C brand?",
    answer:
      "A warehouse keeper holds a statutory Bailee Lien under Section 170 Contract Act for storage and handling charges, strengthened by contractual power-of-sale clauses in the 3PL Warehousing Agreement. Never dump or liquidate stock quietly. Document unpaid WMS pallet-days, commission an independent inventory valuation, serve a 15-day tri-channel Lien & Public Auction Notice, credit sale proceeds transparently, and sue for any deficit.",
  },
  {
    question: "Do Udyam-registered transporters, 3PLs, and fleet owners qualify for MSME Section 43B(h) and 3x interest?",
    answer:
      "Yes. Micro and Small Enterprises holding valid Udyam Registration covering road freight, warehousing, or logistics support services can enforce the 15/45-day payment ceiling under Section 15 MSMED Act, 3x RBI Bank Rate monthly compound interest under Section 16, and corporate buyer tax disallowance under Section 43B(h) of the Income-tax Act—putting immense year-end audit pressure on enterprise shippers.",
  },
  {
    question: "Can a transport company or courier aggregator test LegalRecovery with one overdue Bilty before bulk CSV upload?",
    answer:
      "Yes. Track 1 lets any fleet owner, CHA, or 3PL finance lead pilot a single live overdue invoice, detention claim, or Carrier Lien notice for ₹999 via Email, WhatsApp, and Speed Post RPAD. Once you verify the advocate drafting and BSA s.63 delivery trail, Track 2 lets you onboard 10 to 10,000+ overdue seller wallets or Bilty ledgers via CSV in the Representees workspace.",
  },
];

const OFFICIAL_SOURCES = [
  {
    title: "Carriage by Road Act, 2007 & Rules, 2011 — India Code",
    url: "https://www.indiacode.nic.in/",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 73, 74, 170, 171 & 222) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(v) & Section 12A) — India Code",
    url: "https://www.indiacode.nic.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Ministry of Road Transport & Highways (MoRTH) — Vahan & AIS-140 Telemetry",
    url: "https://morth.nic.in/",
  },
  {
    title: "GST E-Way Bill Portal — NIC / Ministry of Finance",
    url: "https://ewaybillgst.gov.in/",
  },
  {
    title: "ICEGATE (Indian Customs Electronic Gateway) & CBIC Portals",
    url: "https://www.icegate.gov.in/",
  },
  {
    title: "MSME Samadhaan — Delayed Payment Monitoring & ODR Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "B2B Logistics, Transporter, 3PL Warehouse & CHA Legal Debt Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "3PL CFOs, Fleet Owners, Transport Contractors, Freight Forwarders, Customs House Agents (CHAs), Cold-Chain Operators & Courier Aggregators",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-09 Logistics, 3PL, Freight Forwarder & CHA Recovery Spokes",
  numberOfItems: IND_09_SPOKES.length,
  itemListElement: IND_09_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Logistics, 3PL & Freight Recovery",
      item: CANONICAL_URL,
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

export default function LogisticsFreight3plRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Logistics, 3PL & Freight Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-09 Logistics &amp; 3PL Pillar Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Carriage Act &bull; s.170/171 Lien &bull; s.222 CHA Indemnity</span>
              <span className="text-red-500">&bull;</span>
              <span>Order 37 CPC</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Transporters, 3PLs, CHAs &amp; Fleet Owners)
              </span>
              <p>
                Transporters, 3PL warehouses, freight forwarders, and CHAs recover unpaid FTL/PTL freight ledgers, GPS-proven truck halting, ICEGATE customs duty advances, and storage arrears by pairing 48-hour{" "}
                <strong className="text-white">Section 170/171 Carrier Lien</strong> and{" "}
                <strong className="text-white">Section 222 Agent Indemnity</strong> notices with{" "}
                <Link
                  href="/services/vendor-and-invoice-recoveries"
                  className="text-red-300 underline decoration-red-400/60 hover:text-white"
                >
                  commercial invoice recovery workflows
                </Link>{" "}
                and bulk CSV tri-channel dispatch.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;50K&ndash;2Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Bilty, Detention &amp; CHA Duty Spectrum
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-emerald-400">
                  24&ndash;48 Hrs
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Carrier Lien &amp; Freight Notice Dispatch
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-amber-400">
                  s.170 / s.222
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Bailee Lien &amp; CHA Indemnity Protections
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Live Freight Test to 10,000+ Sellers
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <p>
                Statutory Architecture Reviewed by{" "}
                <Link
                  href="/authors/anuj-anand-malik"
                  className="text-slate-200 underline hover:text-white font-semibold"
                >
                  Anuj Anand Malik
                </Link>
                , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold transition-colors"
                >
                  MSME 3x Freight Interest Tool &rarr;
                </Link>
                <a
                  href="#dual-track-cta"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
                >
                  &rupee;999 Live Test / Bulk CSV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main 2-Column Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <LogisticsHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview & Creditor Polarity */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-overview-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Logistics, 3PL &amp; CHA Creditors Lose Capital to Freight Stalls
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Closing India&apos;s Creditor-Side Blind Spot Across Road Freight, Warehousing, Maritime Forwarding &amp; Cold-Chain Fleets
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Logistics CFOs, fleet owners, Customs House Agents (CHAs), and 3PL warehouse promoters operate on razor-thin 4–9% operating margins while advancing massive working capital up front—diesel, FASTag tolls, driver bhatta, ICEGATE customs duties, shipping-line Terminal Handling Charges (THC), and monthly pallet lease rents. Yet almost every legal guide online treats logistics purely from a consumer-against-courier angle rather than protecting the carrier or warehouse creditor.
                  </p>
                  <p>
                    That information vacuum causes four catastrophic cash-flow leaks. First, fleet owners release cargo upon clean Proof of Delivery (POD), only to watch corporate shippers sit on{" "}
                    <Link
                      href="/recovery/unpaid-invoices"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      overdue freight invoices
                    </Link>{" "}
                    for 90–180 days or slice off 20% via fabricated transit-shortage debit notes. Second, transporters attempting self-help cargo detention without understanding Particular versus General Lien under Sections 170–171 of the Indian Contract Act get hit with criminal theft or extortion FIRs.
                  </p>
                  <p>
                    Third, factory gatekeepers refuse physical detention stamps on lorry PODs while shippers pass shipping-line container demurrage down to the trucker. Fourth, CHAs and D2C fulfillment 3PLs get trapped paying port demurrage on abandoned containers or absorbing 500 pallets of dead inventory. This IND-09 Pillar Hub unites all 10 specialized logistics legal playbooks, Hindi mandi guides, notice templates, and our{" "}
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      bulk CSV institutional recovery desk
                    </Link>{" "}
                    under one statutory roof.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Zero Criminal Exposure
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Lawful Carrier Lien Rules
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Enforce Section 170 Particular Lien or GR General Lien with immediate advocate Lien Intimation Notices.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Electronic Proof Engine
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      BSA s.63 GPS &amp; E-Way Logs
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Certify AIS-140 geofence pings, FASTag tolls, E-Way extensions, and reefer pulp-temp telemetry.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Commercial Fast-Track
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Order 37 &amp; MSME 43B(h)
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Convert signed Bilty/PODs into{" "}
                      <Link
                        href="/law/order-37-summary-suit-money-recovery"
                        className="text-[#DC2626] underline font-semibold"
                      >
                        Order XXXVII Summary Suits
                      </Link>{" "}
                      or 3x RBI compound interest claims.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Multi-Track Matrix */}
              <section
                id="heading-escalation-matrix"
                aria-labelledby="heading-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="heading-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Freight, Detention &amp; 3PL Recovery Matrix by Ticket &amp; Track
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Matching Consignment Status, Ticket Tier &amp; Statutory Remedy Across Seven Logistics Default Modes
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[740px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Logistics Claim Segment</th>
                        <th className="p-3.5 border-b border-slate-800">Typical Ticket</th>
                        <th className="p-3.5 border-b border-slate-800">Action Window</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Track</th>
                        <th className="p-3.5 border-b border-slate-800">Mandatory Proof / Guardrail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                      {ESCALATION_MATRIX_ROWS.map((row) => (
                        <tr key={row.segment} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900 align-top">{row.segment}</td>
                          <td className="p-3.5 font-semibold text-[#DC2626] whitespace-nowrap align-top">
                            {row.ticket}
                          </td>
                          <td className="p-3.5 text-slate-600 whitespace-nowrap align-top">
                            {row.trigger}
                          </td>
                          <td className="p-3.5 text-slate-800 font-medium align-top">
                            {row.statutoryTrack}
                          </td>
                          <td className="p-3.5 text-slate-600 align-top">{row.criticalGuardrail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Custom SVG Architecture + Mobile Cards */}
              <section
                id="heading-lien-architecture"
                aria-labelledby="heading-lien-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-lien-architecture-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      48-Hour Carrier Lien &amp; POD-to-Decree Recovery Architecture
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Five-Stage Pipeline Separating Active-Cargo Lien Interventions From Post-Delivery Commercial Execution
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Diagram */}
                <div className="hidden md:block rounded-xl border border-slate-800 bg-[#0F172A] p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={310}
                    viewBox="0 0 920 310"
                    role="img"
                    aria-label="5-stage logistics, carrier lien, and Bilty POD freight legal recovery pipeline"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="310" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-09 LOGISTICS, 3PL &amp; CHA RECOVERY ARCHITECTURE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="56" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="82" r="13" fill="#DC2626" />
                    <text x="48" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="86" fill="#F8FAFC" fontSize="12" fontWeight="700">Dossier Audit</text>
                    <text x="36" y="114" fill="#CBD5E1" fontSize="10.5">GR / Bilty &amp; Rate Card</text>
                    <text x="36" y="132" fill="#CBD5E1" fontSize="10.5">Signed POD &amp; E-Way Bill</text>
                    <text x="36" y="150" fill="#CBD5E1" fontSize="10.5">ICEGATE / CFS Challan</text>
                    <rect x="36" y="176" width="132" height="60" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="196" fill="#34D399" fontSize="10" fontWeight="700">Lien Clause Check</text>
                    <text x="44" y="213" fill="#94A3B8" fontSize="9.5">s.170 Particular vs</text>
                    <text x="44" y="226" fill="#94A3B8" fontSize="9.5">GR General Lien</text>

                    <path d="M180 154 L202 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,149 212,154 202,159" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="56" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="82" r="13" fill="#DC2626" />
                    <text x="236" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="86" fill="#F8FAFC" fontSize="12" fontWeight="700">BSA s.63 Seal</text>
                    <text x="224" y="114" fill="#CBD5E1" fontSize="10.5">AIS-140 GPS Geofence</text>
                    <text x="224" y="132" fill="#CBD5E1" fontSize="10.5">FASTag Plaza Logs</text>
                    <text x="224" y="150" fill="#CBD5E1" fontSize="10.5">Reefer Pulp Telemetry</text>
                    <rect x="224" y="176" width="132" height="60" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">Audit Counterclaims</text>
                    <text x="232" y="213" fill="#94A3B8" fontSize="9.5">Raman Iron Foundry &amp;</text>
                    <text x="232" y="226" fill="#94A3B8" fontSize="9.5">180d s.16 Claim Bar</text>

                    <path d="M368 154 L390 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,149 400,154 390,159" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="56" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="82" r="13" fill="#DC2626" />
                    <text x="424" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="86" fill="#F8FAFC" fontSize="12" fontWeight="700">48h Dispatch</text>
                    <text x="412" y="114" fill="#CBD5E1" fontSize="10.5">Advocate Demand Notice</text>
                    <text x="412" y="132" fill="#CBD5E1" fontSize="10.5">Email + WhatsApp + RPAD</text>
                    <text x="412" y="150" fill="#CBD5E1" fontSize="10.5">DO / Lien Intimation</text>
                    <rect x="412" y="176" width="132" height="60" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="196" fill="#34D399" fontSize="10" fontWeight="700">Tax &amp; MSME Lever</text>
                    <text x="420" y="213" fill="#94A3B8" fontSize="9.5">s.43B(h) 45d Cap &amp;</text>
                    <text x="420" y="226" fill="#94A3B8" fontSize="9.5">s.16 3x Compound Rate</text>

                    <path d="M556 154 L578 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,149 588,154 578,159" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="56" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="82" r="13" fill="#DC2626" />
                    <text x="612" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="86" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum Track</text>
                    <text x="600" y="114" fill="#CBD5E1" fontSize="10.5">&ge;₹3L Commercial s.12A</text>
                    <text x="600" y="132" fill="#CBD5E1" fontSize="10.5">Order XXXVII Summary</text>
                    <text x="600" y="150" fill="#CBD5E1" fontSize="10.5">MSME ODR / MSEFC</text>
                    <rect x="600" y="176" width="132" height="60" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">3PL &amp; CHA Track</text>
                    <text x="608" y="213" fill="#94A3B8" fontSize="9.5">15d Auction Notice /</text>
                    <text x="608" y="226" fill="#94A3B8" fontSize="9.5">s.222 Indemnity Suit</text>

                    <path d="M744 154 L766 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,149 776,154 766,159" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="56" width="120" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="82" r="13" fill="#10B981" />
                    <text x="800" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="86" fill="#F8FAFC" fontSize="12" fontWeight="700">Realization</text>
                    <text x="788" y="114" fill="#CBD5E1" fontSize="10.5">Freight Cleared</text>
                    <text x="788" y="132" fill="#CBD5E1" fontSize="10.5">Pallet Rack Freed</text>
                    <text x="788" y="150" fill="#CBD5E1" fontSize="10.5">CPC O.21 Decree</text>
                    <rect x="788" y="176" width="96" height="60" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="196" fill="#34D399" fontSize="10" fontWeight="700">Cash Recovered</text>
                    <text x="794" y="213" fill="#94A3B8" fontSize="9.5">Base + Halting</text>
                    <text x="794" y="226" fill="#94A3B8" fontSize="9.5">+ 3x Interest</text>

                    <text x="24" y="286" fill="#94A3B8" fontSize="10">
                      Every notice tracks Consignment Note (GR) No., Vehicle No., E-Way Bill No., Signed POD Date, and separate Halting/Reimbursement schedules.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Dossier & GR Lien Clause Audit",
                      desc: "Separate Particular Lien (active load) from GR General Lien (past ledger) and compile Bilty, POD, and E-Way Bills.",
                    },
                    {
                      num: "02",
                      title: "BSA s.63 Telemetry & Debit-Note Rebuttal",
                      desc: "Certify AIS-140 GPS geofence, FASTag tolls, and reefer temp logs while invoking Raman Iron Foundry against bogus deductions.",
                    },
                    {
                      num: "03",
                      title: "24–48 Hour Tri-Channel Advocate Dispatch",
                      desc: "Serve Lien Intimation, Section 222 CHA Indemnity, or Section 43B(h) MSME demand via Email, WhatsApp, and Speed Post RPAD.",
                    },
                    {
                      num: "04",
                      title: "Commercial Court, O.37, MSEFC & 15-Day Auction",
                      desc: "Route uncured ledgers to Order 37 Summary Suits (>=₹3L Commercial), MSEFC ODR, or 3PL Bailee Lien disposal.",
                    },
                    {
                      num: "05",
                      title: "Cash Realization & Rack Clearance",
                      desc: "Collect base freight, halting dues, and 3x statutory interest or free blocked warehouse pallet capacity.",
                    },
                  ].map((stage) => (
                    <div
                      key={stage.num}
                      className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                        {stage.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{stage.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive Operator Scenario Tabs */}
              <section
                id="heading-operator-playbooks"
                aria-labelledby="heading-operator-playbooks-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-operator-playbooks-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Logistics Recovery Playbooks by Operator Segment
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Switch Across FTL/PTL Transporters, Cold-Chain Reefers, CHAs/3PLs &amp; Dedicated/Courier Aggregators
                      </p>
                    </div>
                  </div>
                  <LogisticsHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: Bulk CSV Engine & Dual-Track CTA */}
              <section
                id="heading-csv-dispatch"
                aria-labelledby="heading-csv-dispatch-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-csv-dispatch-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Bulk Bilty Ledger CSV Engine &amp; Tri-Channel Dispatch Workflow
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Built for 3PL Finance Teams, Transport Groups &amp; Shipping Aggregators Managing 10 to 10,000+ Defaulters
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Tabular GR / Bilty / E-Way Schedule
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Itemized Invoice, Vehicle &amp; POD Mapping
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every notice prints structured trip schedules—Consignment Note (GR) No., Truck No., GST E-Way Bill No., Signed POD Date, Base Freight, Halting Days, and ICEGATE/CFS Reimbursements—building Order XXXVII readiness from day one.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Multi-Hub Representees Vault
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Regional Fleet Branches, CHAs &amp; SPVs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Separate GSTINs, regional fleet entities, and authorized signatories cleanly inside{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees management
                      </Link>{" "}
                      with zero SaaS seat fees.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Tri-Channel Proof &amp; BSA s.63 Hash
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Email + WhatsApp + Speed Post RPAD
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Deliver 48-hour Carrier Lien or 15-day freight demand notices simultaneously across corporate finance email, director WhatsApp, and India Post RPAD with Section 63 BSA evidence trails.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Debit-Note &amp; Settlement Triage
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Centralized Inbound Reply Tracking
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Track shipper shortage claims, UTR part-payments, and ODR settlement offers in one queue before escalating into Commercial Court or MSEFC arbitration.
                    </p>
                  </div>
                </div>

                <LogisticsHubCTA />
              </section>

              {/* Section 6: Binding Statutory & Supreme Court Rules */}
              <section
                id="heading-statutory-mandates"
                aria-labelledby="heading-statutory-mandates-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-statutory-mandates-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Binding Statutory &amp; Supreme Court Rules for Carrier Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Core Contract Act, Carriage by Road Act, BSA 2023 &amp; Supreme Court Authorities Embedded in Every Notice
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {STATUTORY_MANDATES.map((item) => (
                    <article
                      key={item.title}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span
                        className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Carrier Protection
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Operational Rule: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Freight & CHA Math */}
              <section
                id="heading-worked-freight-math"
                aria-labelledby="heading-worked-freight-math-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-worked-freight-math-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Freight Math: &rupee;8.4L Halting vs &rupee;22L CHA Duty Advance
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Commercial Recovery Scenarios Comparing Unstructured Follow-Ups Against Statutory Intervention
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                      Scenario A &bull; FTL Trailer Detention + Shortage Debit
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      &rupee;8,40,000 Base Freight + 14-Day Factory Gate Halting
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>
                        <strong>Shipper Tactic:</strong> Storekeeper withholds gate stamp on POD and deducts &rupee;2.1L claiming unverified moisture damage 45 days post-delivery.
                      </li>
                      <li>
                        <strong>Statutory Intervention:</strong> Serve 15-day notice attaching AIS-140 GPS geofence, FASTag logs, BSA s.63 certificate, Raman Iron Foundry bar, and Udyam Section 43B(h) tax disallowance notice.
                      </li>
                      <li className="text-emerald-800 font-semibold">
                        Legal Position: Above &rupee;3 Lakh Commercial Court threshold; eligible for Order XXXVII CPC + 3x RBI monthly compound interest.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      Scenario B &bull; CHA / Freight Forwarder Reimbursement
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      &rupee;22,00,000 ICEGATE Customs Duty &amp; CFS / THC Advance
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>
                        <strong>Importer Default:</strong> Importer stops clearing goods after CHA pays customs challan and port fees, leaving shipping lines billing daily container demurrage.
                      </li>
                      <li>
                        <strong>Statutory Intervention:</strong> Hold Delivery Order / HBL, serve 48-hour Section 222 Contract Act Agent Indemnity Notice, and copy shipping line on importer liability.
                      </li>
                      <li className="text-emerald-800 font-semibold">
                        Legal Position: Liquidated ICEGATE &amp; CFS receipts establish indisputable principal-indemnity debt in Commercial Court.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">
                      Udyam-Registered Transporter, Warehouse, or Fleet Contractor?
                    </strong>
                    <span className="text-slate-300">
                      Calculate exact Section 16 compound interest (3x RBI Bank Rate) and March 31 Section 43B(h) tax disallowance leverage.
                    </span>
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shrink-0 text-center transition-colors"
                  >
                    Open MSME 3x Interest Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 8: Complete 10-Spoke IND-09 Directory */}
              <section
                id="heading-ind09-spokes"
                aria-labelledby="heading-ind09-spokes-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-ind09-spokes-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Complete IND-09 Logistics &amp; 3PL Recovery Spoke Directory
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      All 10 Dedicated Spokes Covering B2B-114 Through B2B-123 Across Road Freight, CHAs, 3PLs, Reefers, Hindi &amp; Templates
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_GROUPS.map((group) => (
                    <div key={group.key} className="space-y-3.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                        {group.heading}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span
                                  className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${group.badgeClass}`}
                                >
                                  {spoke.archetypeLabel}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  {spoke.id}
                                </span>
                              </div>
                              <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                {spoke.title}
                              </p>
                              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                {spoke.summary}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-semibold text-slate-500 truncate">
                                {spoke.statute}
                              </span>
                              <span className="font-bold text-[#DC2626] shrink-0">Open &rarr;</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Live Commercial & Bulk Seed Guides */}
              <section
                id="heading-live-guides"
                aria-labelledby="heading-live-guides-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-live-guides-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live Commercial Invoice, Order 37 &amp; Bulk Dispatch Guides
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Core Live LegalRecovery.in Resources &amp; Interactive Calculators Ready to Use Today
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {LIVE_SEED_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/40 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Read Live Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: Transporter, 3PL, CHA &amp; Reefer Debt Recovery in India
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Answers for Fleet Owners, 3PL Finance Directors, Freight Forwarders &amp; Courier Aggregators
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Official Portals */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Statutory Authorities, Maritime &amp; Road Transport Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Acts, Customs/E-Way Portals &amp; Electronic Telemetry Standards Referenced
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {OFFICIAL_SOURCES.map((source) => (
                    <li key={source.title} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="logistics" />
      </div>
    </>
  );
}
