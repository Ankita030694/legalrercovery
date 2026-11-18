import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EquipmentRentalHubTableOfContents from "./EquipmentRentalHubTableOfContents";
import EquipmentRentalHubScenarioTabs from "./EquipmentRentalHubScenarioTabs";
import EquipmentRentalHubCTA from "./EquipmentRentalHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/equipment-rental-machinery-leasing-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Equipment Rental, Cranes, Scaffolding & IT Leasing Recovery";
const PAGE_DESCRIPTION =
  "Recover unpaid plant, DG & IT rental bills AND rescue ₹10L–₹10Cr of unreturned cranes, scaffolding & laptops via BNS s.316, Bailment & Court Receivers.";
const H1_TEXT =
  "Monthly Hire Arrears, Gate-Pass Release & Asset Repossession Desk for Equipment Rental & B2B Leasing Companies";

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
  archetype: "G1" | "L1" | "P1";
  archetypeLabel: string;
  track: "heavy-plant-scaffolding" | "it-utility-clinical-av" | "statute-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_20_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-232",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "heavy-plant-scaffolding",
    title: "Unreturned Rented Cuplock Scaffolding, Shuttering & Formwork: BNS s.316 Recovery",
    url: "/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery",
    statute: "BNS 2023 s.316(2)/(3) + Running Hire Meter + Replacement Value",
    summary:
      "Stop contractors from retaining, shifting, or scrapping rented steel props and aluminium formwork—trigger BNS s.316 Police CC and recover running rent plus replacement cost.",
  },
  {
    id: "B2B-233",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "heavy-plant-scaffolding",
    title: "Builder Blocking Gate-Pass for Your Rented Crane or Piling Rig: Urgent Release Law",
    url: "/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery",
    statute: "Third-Party Bailment (Nemo Dat) + Tort of Detinue + Arb Act s.9",
    summary:
      "Force project owners who terminated your EPC contractor to issue an immediate demobilization Gate-Pass and pay daily idle-rent for illegally detaining your RC-proved machinery.",
  },
  {
    id: "B2B-235",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "heavy-plant-scaffolding",
    title: "DG Set (Generator), Chiller & Air-Compressor Rental Arrears & Logbook Recovery",
    url: "/diesel-generator-dg-set-temporary-chiller-load-bank-rental-recovery",
    statute: "Operator Logbooks + Telematics + Contract Act s.151–152 Care",
    summary:
      "Enforce minimum monthly hour guarantees, defeat logbook disputes with BSA s.63 telematics, and recover engine repair costs caused by adulterated diesel or overloading.",
  },
  {
    id: "B2B-234",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "it-utility-clinical-av",
    title: "Corporate IT Laptop, MacBook & Workstation Rental: Startup Default Recovery",
    url: "/corporate-it-laptop-macbook-workstation-rental-startup-default-recovery",
    statute: "ABM / Windows Autopilot MDM Lock + BNS s.316 + Residual Buyout",
    summary:
      "Recover overdue DaaS rental invoices and trace unreturned MacBooks after startup layoffs using enforceable MDM lock clauses, Police CC, and residual buyout demands.",
  },
  {
    id: "B2B-236",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "it-utility-clinical-av",
    title: "Forklift, Reach-Truck MHE Leasing & Pallet-Pooling Arrears & Multi-Site Recovery",
    url: "/forklift-mhe-pallet-pooling-warehouse-equipment-leasing-recovery",
    statute: "Contract Act s.152 Negligence + Multi-Site Section 9 Receiver",
    summary:
      "Recover warehouse MHE arrears, deep-cycle battery abuse damages, and missing pooled pallets across 3PL hubs through multi-site Section 9 Receiver petitions.",
  },
  {
    id: "B2B-237",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "it-utility-clinical-av",
    title: "Hospital ICU Ventilator, C-Arm & Aesthetic Laser Rental Default Recovery",
    url: "/medical-icu-equipment-c-arm-ventilator-hospital-rental-default-recovery",
    statute: "7/14-Day Clinical Handover Notice + BNS s.316 + Order XL Receiver",
    summary:
      "Repossess high-value medical and aesthetic laser equipment from defaulting clinics and nursing homes without clinical liability using structured Patient-Safe Handover notices.",
  },
  {
    id: "B2B-238",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "it-utility-clinical-av",
    title: "Cine Camera, Lighting & Live-Event LED Wall / AV Gear Rental Recovery",
    url: "/audio-visual-led-wall-camera-cine-gear-production-rental-recovery",
    statute: "Check-Out/In QC Challan + Bailee Damage Liability + NI Act s.138",
    summary:
      "Collect post-shoot rental arrears from film line-producers and event agencies, prosecute bounced PDCs under s.138, and recover rain or laser-sensor damage repairs.",
  },
  {
    id: "B2B-239",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "statute-templates",
    title: "Lessee Sold Your Rented Machine (or Entered NCLT)? Nemo Dat & IBC s.18 Law",
    url: "/lessee-pledged-or-sold-rented-machinery-criminal-recovery-court-receiver",
    statute: "Sale of Goods Act s.27 + BNSS Superdari + IBC s.18 Explanation(a)",
    summary:
      "Void unauthorized scrap/third-party sales under Nemo Dat s.27, reclaim police-seized plant on Superdari, and exclude leased assets from IBC CIRP moratorium estates.",
  },
  {
    id: "B2B-240",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "statute-templates",
    title: "3-in-1 Equipment Rental Legal Notice Pack: Arrears, BNS s.316 & Gate-Pass",
    url: "/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice",
    statute: "Contract Act s.160–161 + BNS s.316 + Tortious Detinue Notice",
    summary:
      "Interactive notice builder with Challan/Serial/Chassis schedules, running daily hire meters, lost-asset replacement value, Project-Owner Gate-Pass demands, and Police CC.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "heavy-plant-scaffolding" as const,
    heading: "Track A: Heavy Cranes, Piling Rigs, Scaffolding & DG/Chiller Plant Hire",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "it-utility-clinical-av" as const,
    heading: "Track B: Corporate IT DaaS, Warehouse MHE, Medical ICU & AV/LED Rentals",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "statute-templates" as const,
    heading: "Track C: Nemo Dat / IBC Insolvency Law & 3-in-1 Rental Notice Workspace",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "Indian Contract Act, 1872 — Sections 148 to 161 (Law of Bailment)",
    title: "Statutory Duty of Bailee to Return Hired Machinery & Pay Detention Losses",
    parties: "Equipment Lessors, Crane/Scaffolding Owners & DaaS Vendors vs Defaulting Lessees",
    holding:
      "Every equipment hire agreement creates a statutory bailment under Section 148 of the Contract Act. Under Sections 160 and 161, the bailee (lessee) is legally bound to return the hired machinery immediately upon lease expiry or termination; if the bailee fails to return the goods at the proper time, the bailee is strictly responsible to the bailor for any loss, destruction, deterioration, and continuing hire/detention damages from that date.",
    impact:
      "Establishes both running daily hire liability after lease termination and strict liability for damage or loss during unauthorized retention.",
  },
  {
    citation: "Bharatiya Nyaya Sanhita (BNS), 2023 — Section 316 & BNSS Superdari",
    title: "Criminal Breach of Trust by Bailee & Jurisdictional Police Station Intimation",
    parties: "Scaffolding Depots, Corporate IT Laptop Lessors & Plant Owners vs Rogue Contractors",
    holding:
      "Where a lessee is entrusted with movable equipment under a bailment/rental contract and dishonestly misappropriates, conceals, shifts to undisclosed sites, sub-pledges, or refuses to return the assets after lawful termination, the conduct attracts Criminal Breach of Trust under BNS Section 316 (erstwhile IPC Section 406). Serving a formal notice with a copy marked to the jurisdictional SHO creates an immediate evidentiary trail for FIR registration and BNSS s.497/503 Superdari custody release.",
    impact:
      "Prevents contractors from treating unreturned scaffolding, laptops, or generators as a mere civil billing delay while accelerating physical recovery.",
  },
  {
    citation: "Sale of Goods Act, 1930 — Section 27 (Nemo Dat) & IBC 2016 — s.18 Explanation(a)",
    title: "Voiding Unauthorized Scrap/Third-Party Sales & Excluding Leased Assets from NCLT Moratorium",
    parties: "Operating Lease NBFCs, Heavy Crane Lessors & Formwork Vendors vs Scrap Buyers / Resolution Professionals",
    holding:
      "Under Section 27 of the Sale of Goods Act (Nemo dat quod non habet), a lessee who holds machinery on rent has no title to sell or pledge it—any third-party purchaser or scrap dealer acquires zero legal title against the true owner. Crucially, under Section 18 Explanation (a) and Section 36(4)(a)(iv) of the Insolvency and Bankruptcy Code, 2016, assets owned by a third party in possession of a corporate debtor under a bailment or operating lease are excluded from the debtor's CIRP/Liquidation estate.",
    impact:
      "Protects lessor-owned cranes, DG sets, and IT fleets from being swallowed into an insolvent contractor's NCLT moratorium or lost to rogue buyers.",
  },
  {
    citation: "CPC Order XL Rule 1 & Arbitration and Conciliation Act, 1996 — Section 9",
    title: "Urgent Court Receiver Appointment for Gate-Pass Obstruction & Multi-Site Repossession",
    parties: "Heavy Crane, Piling Rig, MHE & Medical Equipment Lessors vs Builders & Hostile Site Owners",
    holding:
      "When a project developer terminates an EPC contractor and blocks the site Gate-Pass for a third-party crane or piling rig, Commercial Courts exercising Section 9 Arbitration jurisdiction (where an arbitration clause exists) or Civil Courts under Order XL Rule 1 CPC can appoint a Court Receiver or Advocate Commissioner—with local police assistance if required—to inspect, inventory, and repossess the lessor's serialized machinery while fixing daily idle-rent liability.",
    impact:
      "Breaks illegal site lockouts quickly so ₹1 Cr–₹8 Cr machines are not stranded idle for years pending main trial.",
  },
];

const FAQS = [
  {
    question: "What can an equipment lessor do if a builder blocks the Gate-Pass for a rented crane after terminating the contractor?",
    answer:
      "Serve an urgent Title-Proof & Gate-Pass Release Notice directly on the Project Owner/Builder enclosing RC books, OEM purchase invoices, e-Way Bills, and hire challans. Because a principal employer has no lien over third-party bailed machinery, continued detention triggers Tort of Detinue/Conversion liability for daily idle rent and supports an immediate Court Receiver petition under Order XL Rule 1 CPC or Arbitration Act s.9.",
  },
  {
    question: "How do scaffolding and shuttering lessors recover unreturned steel props or Mivan formwork?",
    answer:
      "Reconcile outward delivery challans, e-Way Bills, and weighbridge slips against partial return challans. Serve a 3-in-1 Bailee Return Notice terminating the hire, demanding return within 7 days, quantifying running daily hire plus full lost-material replacement value, and marking a CC to the jurisdictional Police Station under BNS 2023 Section 316 (Criminal Breach of Trust).",
  },
  {
    question: "Can a DaaS or corporate IT laptop lessor remotely lock leased MacBooks if a funded startup defaults?",
    answer:
      "Yes, when your Master Rental Agreement expressly authorizes Apple Business Manager (ABM) or Windows Autopilot MDM lock upon payment default and expiry of a written cure window. Pair the cure notice with BSA s.63 certified MDM serial logs, NI Act s.138 action on bounced security cheques, and a BNS s.316 bailee-return demand against the company and directors.",
  },
  {
    question: "What happens if a defaulting lessee enters NCLT insolvency (CIRP) while holding our rented machinery?",
    answer:
      "Under Section 18 Explanation (a) and Section 36(4)(a)(iv) of the Insolvency and Bankruptcy Code (IBC), 2016, assets owned by a third party in the possession of the corporate debtor under a bailment or operating lease do NOT form part of the insolvency or liquidation estate. Serve formal ownership proof on the Interim Resolution Professional (IRP/RP) demanding immediate handover.",
  },
  {
    question: "What if the contractor illegally sold or pledged our rented machinery or scaffolding to a scrap dealer?",
    answer:
      "Under Section 27 of the Sale of Goods Act, 1930 (Nemo dat quod non habet), a lessee cannot pass a better title than they possess—meaning the third-party buyer or scrap yard gets zero ownership. Initiate immediate BNS s.316 criminal proceedings with Police CC and apply for Superdari custody under BNSS Sections 497/503 upon seizure.",
  },
  {
    question: "How can hospital ICU or medical equipment lessors repossess ventilators or C-Arms without clinical liability?",
    answer:
      "Never disconnect active patient-support equipment abruptly. Issue a structured 7-to-14-day Patient-Safe Clinical Handover Notice directing the hospital management to arrange alternative clinical support before scheduled de-installation, and pair it with an Order XL Rule 1 Court Receiver or Section 9 petition.",
  },
  {
    question: "Can equipment rental companies send bulk legal notices across 50+ defaulting sites or DaaS accounts?",
    answer:
      "Yes. Through LegalRecovery.in's Bulk CSV Desk and Representees Workspace, lessors can test 1 live notice at ₹999 first and then upload 10 to 10,000+ defaulting lessee ledgers mapped to Delivery Challan numbers, Chassis/Serial IDs, site addresses, and jurisdictional Police Station details for simultaneous Email, WhatsApp, and Speed Post RPAD dispatch.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Sections 148–161 Bailment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "Sale of Goods Act, 1930 (Section 27 Nemo Dat) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (Section 18) — IBBI",
    url: "https://ibbi.gov.in/",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 9) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "MSME Samadhaan Delayed Payment Portal (MSMED Act s.15–18)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType: "B2B Equipment Rental Hire Arrears, Gate-Pass Release & Asset Repossession Recovery",
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
  name: "IND-20 Equipment Rental, Heavy Cranes, Scaffolding, DG & IT Leasing Recovery Playbooks",
  numberOfItems: IND_20_SPOKES.length,
  itemListElement: IND_20_SPOKES.map((spoke, index) => ({
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
      name: "Equipment Rental & Machinery Leasing Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function EquipmentRentalMachineryLeasingHubPage() {
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
            <span>IND-20 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Cranes, Scaffolding, DG Sets, IT &amp; Medical Leasing</span>
            <span className="text-slate-500">&bull;</span>
            <span>Creditor-Side Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (Bailment s.148–161, BNS s.316 &amp; Court Receiver)
            </span>
            Built exclusively for equipment lessors—not borrowers. Recover <strong>unpaid monthly plant, DG &amp; DaaS hire arrears</strong> AND rescue <strong>&#8377;10L–&#8377;8 Cr+ of stranded cranes, scaffolding, generators &amp; laptops</strong> by combining <strong>Contract Act s.148–161 Bailment</strong>, <strong>BNS s.316 Police CC</strong>, <strong>Gate-Pass Detinue Notices</strong>, and <strong>CPC Order XL Rule 1 / Arbitration s.9 Receivers</strong>.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">&#8377;10L–&#8377;8Cr+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Hire arrears &amp; unreturned machine replacement value protected per site
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Criminal breach of trust by bailee with jurisdictional SHO intimation
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">Order XL / s.9</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Urgent Court Receiver seizure &amp; Gate-Pass release for stranded assets
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Batch CSV notices mapped to Challans, Chassis/Serials &amp; Police CC
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Sector Scope: <strong className="text-slate-200">Crane &amp; Piling Fleet Owners, Scaffolding Depots, DaaS IT, DG/MHE, Medical &amp; AV Lessors</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: "Equipment Rental & Machinery Leasing Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <EquipmentRentalHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Double Catastrophe */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Equipment Lessors Face a Double Financial Catastrophe
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  B2B equipment rental and operating-lease companies across India—spanning heavy crawler cranes, tower cranes, piling rigs, boom lifts, cuplock scaffolding, Mivan aluminium formwork, diesel generator (DG) sets, industrial chillers, warehouse forklifts, corporate IT MacBook/workstation fleets (DaaS), hospital ICU ventilators, and live-event LED walls—deploy <strong>&#8377;10 Lakh to &#8377;8 Crore+ per contract</strong> in mobile, depreciating capital assets.
                </p>
                <p>
                  Unlike ordinary trade suppliers whose exposure ends at unpaid invoice value, equipment lessors suffer a <strong>double catastrophe</strong> when a contractor, builder, or startup defaults: not only does the lessee stop paying monthly hire bills for 4–8 months, they also <strong>refuse to return the physical equipment</strong>. A project developer who terminates an EPC contractor locks the site Gate-Pass and holds a &#8377;4 Crore crane hostage. A subcontractor shifts rented shuttering to an undisclosed site or sells it as scrap. A laid-off startup loses track of 80 leased MacBooks.
                </p>
                <p>
                  Standard civil money-recovery blogs fail equipment lessors because chasing rent alone leaves your CapEx stranded. LegalRecovery.in combines <strong>Contract Act Sections 148–161 (Bailment)</strong>, <strong>BNS 2023 Section 316</strong> criminal breach of trust notices with jurisdictional Police Station CC, <strong>Tort of Detinue</strong> Gate-Pass demands on project owners, <strong>Sale of Goods Act s.27 (Nemo Dat)</strong>, <strong>IBC s.18 Explanation(a)</strong> insolvency exclusions, and <strong>CPC Order XL Rule 1 / Arbitration s.9 Court Receivers</strong> to recover both your arrears and your machines.
                </p>
              </div>
            </section>

            {/* Section 2: 8-Track Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  8-Track Equipment Rental &amp; Asset Repossession Matrix
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match your leased asset class, ticket exposure, aging bucket, and evidentiary instrument to the fastest statutory enforcement forum before dispatching single or bulk CSV notices.
              </p>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold rounded-tl-xl">Asset Class &amp; Default Mode</th>
                      <th className="p-3.5 font-bold">Exposure &amp; Aging</th>
                      <th className="p-3.5 font-bold">Title &amp; Usage Proof</th>
                      <th className="p-3.5 font-bold rounded-tr-xl">Primary Enforcement Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 border border-slate-200">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Heavy Cranes, Piling Rigs &amp; Gate-Pass Lockout</td>
                      <td className="p-3.5 text-slate-700">&#8377;25L–&#8377;8 Cr+<br /><span className="text-xs text-slate-500">30–180 DPD</span></td>
                      <td className="p-3.5 text-slate-700">RC Book + OEM Invoice + e-Way Bill + Hire Challan</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Gate-Pass Detinue Notice + Arb s.9 / Order XL Receiver</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Cuplock Scaffolding &amp; Mivan Formwork</td>
                      <td className="p-3.5 text-slate-700">&#8377;5L–&#8377;3 Cr<br /><span className="text-xs text-slate-500">45–240 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Outward/Return Challans + Weighbridge Slips</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">BNS s.316 Police CC + Order XXXVII CPC (Running Rent)</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Corporate IT Laptops, MacBooks &amp; DaaS</td>
                      <td className="p-3.5 text-slate-700">&#8377;4L–&#8377;2.5 Cr<br /><span className="text-xs text-slate-500">30–150 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Serial/IMEI List + ABM/Autopilot MDM Logs + POD</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">MDM Lock Clause + BNS s.316 + NI s.138 / Arb</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">DG Sets, Chillers &amp; Air Compressors</td>
                      <td className="p-3.5 text-slate-700">&#8377;3L–&#8377;2 Cr<br /><span className="text-xs text-slate-500">45–180 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Daily Operator Logbooks + BSA s.63 Telematics</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Contract Act s.151–152 + MSMED s.15–18 / O.37</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Forklifts, Reach-Trucks &amp; Pallet Pooling</td>
                      <td className="p-3.5 text-slate-700">&#8377;4L–&#8377;3 Cr<br /><span className="text-xs text-slate-500">60–210 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Serial Fleet Schedule + Battery/Damage QC Photos</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Contract Act s.152 + Multi-Site Section 9 Receiver</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Hospital ICU Ventilators, C-Arms &amp; Lasers</td>
                      <td className="p-3.5 text-slate-700">&#8377;6L–&#8377;3.5 Cr<br /><span className="text-xs text-slate-500">60–240 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Clinical Installation Report + Asset Tag + Lease</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">7/14-Day Clinical Handover + Order XL Receiver</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Cine Cameras, Lighting &amp; Event LED Walls</td>
                      <td className="p-3.5 text-slate-700">&#8377;2L–&#8377;80L<br /><span className="text-xs text-slate-500">15–120 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Check-Out/In QC Challan + Security PDCs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">NI Act s.138 + Bailee Damage Liability + O.37</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Rogue Scrap Sale or Lessee NCLT CIRP</td>
                      <td className="p-3.5 text-slate-700">&#8377;15L–&#8377;10 Cr<br /><span className="text-xs text-slate-500">Immediate</span></td>
                      <td className="p-3.5 text-slate-700">Original OEM Invoice + GPS/Serial + Bailment Deed</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Sale of Goods s.27 + BNSS Superdari + IBC s.18 Expl(a)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Visual SVG Workflow Architecture */}
            <section
              id="heading-workflow-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Bailment, Police CC &amp; Court Receiver Recovery Pipeline
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Execute this 3-stage recovery pipeline to lock asset title proof, split civil hire-arrears from criminal retention or Gate-Pass obstruction, and deploy Court Receivers where hardware is stranded.
              </p>

              {/* Desktop SVG Diagram */}
              <div className="hidden md:block bg-slate-950 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  width="820"
                  height="260"
                  viewBox="0 0 820 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Three-stage equipment rental arrears, BNS 316 police intimation, and Court Receiver repossession pipeline"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="65" width="175" height="125" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="97" y="92" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1: TITLE &amp; CHALLAN</text>
                  <text x="97" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Bailment &amp; Asset</text>
                  <text x="97" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Proof Lock</text>
                  <text x="97" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">RC, OEM Invoice, Serials,</text>
                  <text x="97" y="172" textAnchor="middle" fill="#CBD5E1" fontSize="10">e-Way Bill &amp; Logbooks</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="185" y1="127" x2="225" y2="127" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="225,121 237,127 225,133" fill="#DC2626" />

                  {/* Stage 2 Top (Criminal / Gate-Pass) */}
                  <rect x="237" y="15" width="250" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="362" y="38" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="700">TRACK A: ASSET RECOVERY</text>
                  <text x="362" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">BNS s.316 &amp; Gate-Pass Release</text>
                  <text x="362" y="76" textAnchor="middle" fill="#CBD5E1" fontSize="10">Police Station CC + Bailee Return</text>
                  <text x="362" y="92" textAnchor="middle" fill="#CBD5E1" fontSize="10">Project-Owner Detinue Notice</text>

                  {/* Stage 2 Bottom (Hire Arrears) */}
                  <rect x="237" y="145" width="250" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="362" y="168" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">TRACK B: HIRE ARREARS &amp; DAMAGE</text>
                  <text x="362" y="188" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Running Meter + s.152 Care</text>
                  <text x="362" y="206" textAnchor="middle" fill="#CBD5E1" fontSize="10">Contract Act s.160–161 + MSMED</text>
                  <text x="362" y="222" textAnchor="middle" fill="#CBD5E1" fontSize="10">MDM Lock / NI s.138 PDC Demand</text>

                  {/* Arrows 2 -> 3 */}
                  <line x1="487" y1="62" x2="535" y2="100" stroke="#DC2626" strokeWidth="2" />
                  <line x1="487" y1="192" x2="535" y2="155" stroke="#10B981" strokeWidth="2" />
                  <polygon points="532,95 543,105 529,106" fill="#DC2626" />
                  <polygon points="529,149 543,150 532,160" fill="#10B981" />

                  {/* Stage 3 */}
                  <rect x="543" y="55" width="265" height="145" rx="12" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="675" y="82" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="700">STAGE 3: SEIZURE &amp; ENFORCEMENT</text>
                  <text x="675" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Court &amp; Insolvency Action</text>
                  <text x="675" y="128" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">1. Order XL Rule 1 / Arb s.9 Receiver</text>
                  <text x="675" y="146" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">2. BNSS s.497/503 Superdari Release</text>
                  <text x="675" y="164" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">3. IBC s.18 Expl(a) RP Handover</text>
                  <text x="675" y="182" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">4. Order 37 CPC &amp; MSEFC Recovery</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 1 &bull; Title &amp; Challan Lock</p>
                  <p className="text-sm font-bold mb-1">RC, OEM Invoice &amp; Bailment Proof</p>
                  <p className="text-xs text-slate-300">Compile signed delivery challans, e-Way Bills, serial/IMEI schedules, and operator logbooks.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-red-900/60">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 2A &bull; Asset Repossession</p>
                  <p className="text-sm font-bold mb-1">BNS s.316 Police CC &amp; Gate-Pass Notice</p>
                  <p className="text-xs text-slate-300">Demand 7-day bailee return with SHO intimation and serve Detinue notice on obstructing builders.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-emerald-900/60">
                  <p className="text-[11px] font-bold uppercase text-emerald-400 mb-1">Stage 2B &amp; 3 &bull; Court Receiver &amp; Arrears</p>
                  <p className="text-sm font-bold mb-1">Order XL / Arb s.9, Superdari &amp; IBC s.18</p>
                  <p className="text-xs text-slate-300">Appoint Court Receiver for physical seizure, exclude assets from CIRP, and recover running rent.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Equipment Rental Recovery Playbooks (Interactive Explorer)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select your rental vertical below to inspect the exact statutory trigger, commercial bottleneck, and 3-step execution protocol.
              </p>

              <EquipmentRentalHubScenarioTabs />
            </section>

            {/* Section 5: Bulk CSV & Dual-Track CTA */}
            <section
              id="heading-bulk-csv-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Equipment Fleet, Scaffolding &amp; DaaS Batch CSV Recovery Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Regional scaffolding yards, crane and DG rental fleets, pallet-pooling operators, and corporate IT DaaS companies rarely face a single defaulter—they manage 25 to 1,500+ active hire challans across multiple project sites and states. Through LegalRecovery.in&rsquo;s{" "}
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Bulk Recovery CSV Desk
                </Link>{" "}
                and{" "}
                <Link
                  href="/user/representees"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Representees Workspace
                </Link>
                , lessors can test 1 live notice at &#8377;999 first and then upload 10 to 10,000+ defaulting contracts mapped to Delivery Challans, Chassis/Serial numbers, Project-Owner contacts, and jurisdictional Police Station emails for simultaneous Email, WhatsApp, and Speed Post RPAD dispatch.
              </p>

              <EquipmentRentalHubCTA />
            </section>

            {/* Section 6: Statutory & Precedent Deep-Dive */}
            <section
              id="heading-statutory-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Binding Statutory Mandates: Bailment, BNS s.316 &amp; IBC s.18
                </h2>
              </div>

              <div className="space-y-4">
                {BINDING_MANDATES.map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5 border-l-4 border-l-[#DC2626]"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">
                      Applicable To: {item.parties}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                      Creditor Impact: {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Economics Ledger */}
            <section
              id="heading-worked-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Economics: &#8377;4.28 Cr Crane Lockout vs &#8377;38L Scaffolding
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Compare how combining hire-charge recovery with statutory repossession and replacement-value claims protects both monthly cashflow and underlying asset capital.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                    Scenario A &bull; Heavy Crawler Crane / Piling Rig Lessor
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    &#8377;4,28,00,000 Asset + Idle-Rent Claim (Gate-Pass Blocked)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>Capital Asset Value (Stranded Crane):</strong> &#8377;3,80,00,000 (RC &amp; OEM invoice proved)</li>
                    <li>&bull; <strong>Unpaid Monthly Hire (4 Months @ &#8377;9L/mo):</strong> &#8377;36,00,000</li>
                    <li>&bull; <strong>Post-Termination Idle Detention (40 Days):</strong> &#8377;12,00,000 against obstructing builder</li>
                    <li>&bull; <strong>Forum Action:</strong> Gate-Pass Detinue Notice + Arbitration s.9 / Order XL Receiver</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Result: Urgent Court Receiver order forces Gate-Pass release &amp; preserves &#8377;3.8 Cr fleet deployment.
                  </div>
                </div>

                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Scenario B &bull; Cuplock Scaffolding Depot (Udyam MSME)
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    &#8377;38,00,000 Running Rent + Unreturned Material Replacement
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>Unpaid Monthly Scaffolding Rent (6 Months):</strong> &#8377;11,40,000</li>
                    <li>&bull; <strong>Unreturned Cuplock &amp; Ledger Replacement Value:</strong> &#8377;26,60,000</li>
                    <li>&bull; <strong>Criminal Leverage:</strong> BNS s.316 Bailee Return Notice with jurisdictional Police CC</li>
                    <li>&bull; <strong>Udyam MSME Interest:</strong> 3x RBI Bank Rate (~19.5% p.a. compounded via{" "}
                      <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] underline font-semibold">
                        MSME Interest Calculator
                      </Link>)
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Result: Contractor returns 85% physical stock within 14 days to avoid BNS s.316 FIR &amp; settles arrears.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Complete Hub-and-Spoke Directory */}
            <section
              id="heading-spokes-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Complete IND-20 Directory: All 9 Spokes &amp; Notice Pack
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Explore every specialized guide, statutory deep-dive, and interactive notice workspace in our Equipment Rental, Heavy Machinery, Scaffolding, DG &amp; IT Leasing recovery cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_20_SPOKES.filter((s) => s.track === track.key);
                  return (
                    <div key={track.key}>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-200">
                        {track.heading}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {trackSpokes.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all shadow-sm hover:shadow-md"
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${track.badgeClass}`}
                              >
                                {spoke.archetypeLabel}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400">{spoke.id}</span>
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </h4>
                            <p className="text-[11px] font-semibold text-slate-500 mb-2">
                              {spoke.statute}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {spoke.summary}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 9: Seed Resources & Tools */}
            <section
              id="heading-seed-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Essential Statutory Guides, Calculators &amp; Bulk Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Criminal vs Civil Boundary</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    BNS Section 318 Cheating vs Civil Dispute Analysis
                  </p>
                  <p className="text-xs text-slate-600">
                    Learn when dishonest asset retention, forged challans, and intentional misappropriation cross from civil breach into cognizable BNS offences.
                  </p>
                </Link>

                <Link
                  href="/recovery/contractor-payment"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Construction &amp; Infra Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Contractor &amp; Infra Payment Recovery India
                  </p>
                  <p className="text-xs text-slate-600">
                    Coordinate plant-hire recovery with main contractor billing disputes, RA bill holds, and project-owner payment chains.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Multi-Channel Dispatch</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Bulk Notice Dispatch: Email + WhatsApp + Speed Post RPAD
                  </p>
                  <p className="text-xs text-slate-600">
                    Serve lessee directors, site project owners, and Police Station CCs simultaneously with BSA s.63 compliant delivery receipts.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Institutional CSV Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Bulk Recovery Cases: All-in-One Institutional Solutions
                  </p>
                  <p className="text-xs text-slate-600">
                    Upload 10 to 10,000+ overdue rental contracts, scaffolding challans, or DaaS laptop ledgers in a single tracked wave.
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Equipment &amp; Leasing Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-xs font-semibold text-slate-800 hover:text-[#DC2626] transition-colors"
                    >
                      <span>{src.title}</span>
                      <span aria-hidden="true">&nearr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
