import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SolarEnergyHubTableOfContents from "./SolarEnergyHubTableOfContents";
import SolarEnergyHubScenarioTabs from "./SolarEnergyHubScenarioTabs";
import SolarEnergyHubCTA from "./SolarEnergyHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/solar-renewable-ev-power-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Solar EPC, RESCO PPA, EV Charging & Power Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover C&I rooftop solar commissioning balances, OPEX/RESCO PPA monthly defaults & termination buyouts, solar BOS dealer credit & EV fleet-hub dues.";
const H1_TEXT =
  "Commercial Debt, PPA Tariff & Asset Recovery for Solar EPCs, RESCO Developers, EV Charging Operators & Power Contractors";

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
  track: "solar-epc-resco-bos" | "discom-ev-power" | "om-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_19_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-222",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "solar-epc-resco-bos",
    title: "OPEX / RESCO Solar PPA Tariff Default, Termination Buyout & Plant Repossession",
    url: "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession",
    statute: "Arbitration Act s.9 + Contract Act s.74 + BSA s.63 SCADA Logs",
    summary:
      "Stop defaulting factories from consuming rooftop solar power for free while locking the gate—enforce Termination Buyout schedules and s.9 plant dismantling.",
  },
  {
    id: "B2B-223",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "solar-epc-resco-bos",
    title: "C&I Rooftop Solar EPC Final 15–20% Balance & Net-Metering Holdback Recovery",
    url: "/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery",
    statute: "Contract Act s.53/54 Deemed Commissioning + MSMED s.15–18",
    summary:
      "Defeat indefinite retention triggered by buyer-side DISCOM net-metering delays or dust-induced generation drops using Deemed Commissioning and s.43B(h).",
  },
  {
    id: "B2B-224",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "solar-epc-resco-bos",
    title: "Solar Panel, Module & Inverter Distributor Credit & Serial Warranty Hold Recovery",
    url: "/solar-panel-module-inverter-distributor-installer-credit-recovery",
    statute: "Sale of Goods Act + NI Act s.138 PDCs + Serial Warranty Hold",
    summary:
      "Recover 30–60 day BOS container credit from regional EPC installers through PDC enforcement, e-Way Bill proof, and OEM serial-number warranty holds.",
  },
  {
    id: "B2B-225",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "discom-ev-power",
    title: "DISCOM Tariff & PM-KUSUM / State Nodal Agency Payment Delays: Electricity LPS Rules",
    url: "/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules",
    statute: "Electricity LPS Rules 2022 + Electricity Act s.86(1)(f) + s.80 CPC",
    summary:
      "Invoke mandatory Late Payment Surcharge (LPS) escalation, SERC adjudication under s.86(1)(f), and Section 80 CPC notices against State Nodal Agencies.",
  },
  {
    id: "B2B-226",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "discom-ev-power",
    title: "EV Charging Station CPO Fleet-Hub Billing Defaults & DC Charger Repossession",
    url: "/ev-charging-station-cpo-fleet-hub-landlord-revenue-share-recovery",
    statute: "BSA s.63 OCPP Logs + BNS s.316 + Arbitration Act s.9",
    summary:
      "Collect overdue postpaid EV fleet kWh bills with certified OCPP session logs and recover 60kW–240kW DC fast chargers from obstructive site landlords.",
  },
  {
    id: "B2B-227",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "discom-ev-power",
    title: "STP, ETP, ZLD Water-Treatment & Biogas Turnkey Plant Final 25% Balance Recovery",
    url: "/stp-etp-zld-water-treatment-biogas-turnkey-plant-payment-recovery",
    statute: "PCB CTO Milestone Proof + MSMED s.15–18 + Order XXXVII CPC",
    summary:
      "Prevent factories and builders from freezing your final 25% turnkey balance and monthly O&M fees right after obtaining State PCB Consent to Operate.",
  },
  {
    id: "B2B-228",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "discom-ev-power",
    title: "HT / LT Electrical Substation, Transformer & Custom Panel Contractor Bill Recovery",
    url: "/electrical-ht-lt-substation-transformer-contractor-bill-recovery",
    statute: "CEIG Energization Approval + Contract Act s.70 + MSMED s.16",
    summary:
      "Recover post-energization retention and custom APFC/PCC panel fabrication balances once the client draws grid power through your CEIG-approved substation.",
  },
  {
    id: "B2B-229",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "om-templates",
    title: "Solar & Wind O&M / Module-Cleaning Contractor Arrears & Availability SLA Recovery",
    url: "/solar-wind-o-and-m-module-cleaning-contractor-arrears-recovery",
    statute: "Plant-Availability SLA Log + MSMED s.15–18 + s.43B(h)",
    summary:
      "Stop renewable IPP SPVs from deducting grid-curtailment or inverter-OEM downtime losses from your monthly O&M and robotic module-cleaning invoices.",
  },
  {
    id: "B2B-230",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "om-templates",
    title: "Clean-Energy Legal Notice Pack: RESCO PPA Buyout & CapEx Solar EPC Balance Demand",
    url: "/templates/solar-epc-and-resco-ppa-default-buyout-legal-notice",
    statute: "Arbitration s.9 + Inverter Curtailment Warning + Contract Act s.53/54",
    summary:
      "Interactive dual-purpose template workspace covering (1) RESCO PPA Default, Curtailment & Buyout Notice and (2) CapEx Solar EPC Retention Demand.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "solar-epc-resco-bos" as const,
    heading: "Track A: OPEX/RESCO PPAs, C&I CapEx Solar EPCs & BOS Distributors",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "discom-ev-power" as const,
    heading: "Track B: DISCOM / PM-KUSUM, EV Charging CPOs, HT/LT & STP/ETP Plants",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "om-templates" as const,
    heading: "Track C: Solar/Wind O&M Contractors & Clean-Energy Notice Workspace",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "Arbitration and Conciliation Act, 1996 — Section 9 & Contract Act s.74",
    title: "OPEX / RESCO Plant Repossession, Free-Consumption Injunction & Termination Buyout",
    parties: "RESCO Solar Developers, Rooftop IPP SPVs & EV Charger Leasing Operators vs Commercial Off-Takers",
    holding:
      "Under an OPEX/RESCO PPA or leased EV charger hosting agreement, ownership of the serialized PV modules, string inverters, and DC fast chargers remains vested in the developer until full buyout or term expiry. When an off-taker defaults on monthly kWh bills and locks factory gates, Commercial Courts exercising Section 9 Arbitration jurisdiction can restrain unauthorized power draw, appoint a Receiver to inspect or dismantle plant hardware, and secure the pre-agreed Termination Buyout value.",
    impact:
      "Prevents defaulting factories from enjoying zero-cost solar electricity during prolonged arbitration while preserving asset resale value.",
  },
  {
    citation: "Electricity Act, 2003 — Section 86(1)(f) & Electricity (LPS) Rules, 2022",
    title: "DISCOM Tariff Arrears, PM-KUSUM / State Nodal Agency Subsidies & Mandatory Surcharge",
    parties: "Utility-Scale Solar/Wind IPPs, PM-KUSUM Pump EPCs & Open-Access Generators vs State DISCOMs / SNAs",
    holding:
      "Disputes between generating companies and distribution licensees over unpaid energy bills or delayed commissioning clearances fall under Section 86(1)(f) before the State Electricity Regulatory Commission (SERC). Under the Electricity (Late Payment Surcharge and Related Matters) Rules, 2022, delayed DISCOM payments attract escalating monthly LPS interest and statutory payment-security discipline, while State Nodal Agency subsidy delays require a formal Section 80 CPC notice prior to civil writ or suit.",
    impact:
      "Replaces informal follow-ups with binding regulatory interest accrual and statutory notice timelines against state power utilities.",
  },
  {
    citation: "Indian Contract Act, 1872 — Sections 53/54 & MSMED Act, 2006 — Sections 15–18",
    title: "Deemed Commissioning on Net-Metering, CEIG Substation & PCB Consent-to-Operate Holdbacks",
    parties: "C&I Solar EPCs, HT/LT Electrical Substation Contractors & STP/ETP/ZLD Turnkey Vendors",
    holding:
      "Where a buyer withholds the final 15–25% turnkey balance because DISCOM net-metering, CEIG energization, or State PCB Consent-to-Operate is delayed due to the buyer's own unpaid utility arrears or incomplete civil works, Sections 53 and 54 of the Contract Act treat the milestone as Deemed Commissioned. Udyam-registered EPCs and contractors can simultaneously claim 3x RBI Bank Rate compound interest from Day 46 under MSMED Section 16.",
    impact:
      "Strips away perpetual 'final commissioning' excuses once the buyer is already drawing captive power or operating the energized substation/ETP.",
  },
  {
    citation: "Bharatiya Nyaya Sanhita (BNS), 2023 — Section 316 & BSA 2023 — Section 63",
    title: "Criminal Breach of Trust on Leased Chargers/Plants & Admissible SCADA / OCPP Evidence",
    parties: "EV Charge Point Operators (CPOs), RESCO SPVs & Solar Module/Inverter OEM Distributors",
    holding:
      "Retaining or misappropriating serialized RESCO solar equipment or DC fast chargers after valid license termination constitutes criminal breach of trust over bailed/entrusted property under BNS Section 316. For billing proof, inverter SCADA kWh generation logs, net-meter readings, and OCPP 1.6J/2.0.1 EV charging session records certified under BSA 2023 Section 63 are directly admissible in Commercial Courts and Order XXXVII CPC summary suits.",
    impact:
      "Gives clean-energy creditors enforceable digital billing proof and rapid leverage to recover physical assets from hostile host sites.",
  },
];

const FAQS = [
  {
    question: "What can a RESCO solar developer do if a factory stops paying monthly PPA bills and locks the rooftop gate?",
    answer:
      "Serve an advocate-drafted PPA Event-of-Default & Termination Buyout Cure Notice attaching BSA s.63 certified SCADA generation logs. Upon expiry of the cure window, enforce contractual inverter curtailment/zero-export controls (where permitted by the PPA) and file a Section 9 petition under the Arbitration and Conciliation Act, 1996 before the Commercial Court seeking an injunction against unauthorized solar consumption and appointment of a Receiver for plant repossession.",
  },
  {
    question: "How can a C&I Solar EPC recover its final 15–20% balance when DISCOM net-metering is delayed by the client?",
    answer:
      "Invoke Deemed Commissioning under Sections 53 and 54 of the Indian Contract Act, 1872. Document mechanical completion, zero-export daytime generation, CEIG filing, and written reminders showing the client failed to clear DISCOM arrears or load-extension fees. Pair this with an MSMED Act s.15–18 demand (3x RBI compound interest) and Income-tax Act s.43B(h) tax-disallowance pressure.",
  },
  {
    question: "How do EV Charge Point Operators (CPOs) recover DC fast chargers from a hostile mall or fleet landlord?",
    answer:
      "Separate the equipment title from the site license. Rely on serialized asset invoices, e-Way Bills, and the Site License Agreement's asset-ownership clause to issue a 7-day de-installation access demand citing BNS Section 316 (criminal breach of trust). If the landlord still obstructs removal, file an urgent Arbitration Act Section 9 petition for court-assisted dismantling and recovery of unamortized site CapEx.",
  },
  {
    question: "Can solar module and inverter distributors block OEM warranties when an EPC installer defaults on 60-day credit?",
    answer:
      "Yes, provided the commercial sale terms or distribution agreement expressly reserve warranty activation and flash-test serial-number registration until full invoice realization. Combine a contractual serial-number warranty hold with NI Act Section 138 prosecution on bounced security cheques within 30 days of dishonour and Order XXXVII CPC summary recovery.",
  },
  {
    question: "What is the legal remedy for DISCOM tariff delays or State Nodal Agency PM-KUSUM subsidy holdbacks?",
    answer:
      "For DISCOM power-purchase arrears, invoke the Electricity (Late Payment Surcharge) Rules, 2022 and file a Section 86(1)(f) adjudication petition before the concerned State Electricity Regulatory Commission (SERC). For State Nodal Agency (SNA) solar-pump or institutional subsidy tranches, serve a mandatory 60-day statutory notice under Section 80 CPC before initiating civil recovery or writ proceedings.",
  },
  {
    question: "How do HT/LT electrical contractors and STP/ETP plant vendors defeat post-energization retention freezes?",
    answer:
      "Once the client obtains CEIG substation energization approval or State Pollution Control Board (PCB) Consent to Operate using your plant, they have accepted beneficial use under Contract Act s.70 and Sale of Goods Act s.42. Udyam-registered contractors can file directly on MSME Samadhaan for the frozen 20–25% retention plus 3x RBI compound interest.",
  },
  {
    question: "Can a solar EPC, RESCO developer, or EV CPO send bulk legal notices across 50+ sites or fleet accounts?",
    answer:
      "Yes. Through LegalRecovery.in's Bulk CSV Desk and Representees Workspace, clean-energy finance teams can test 1 live notice at ₹999 first and then upload 10 to 10,000+ defaulting PPA sites, BOS dealer ledgers, or EV fleet accounts mapped to PPA IDs, SCADA kWh logs, and module serials for simultaneous Email, WhatsApp, and Speed Post RPAD dispatch.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Electricity Act, 2003 (Section 86(1)(f) SERC Adjudication) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2058",
  },
  {
    title: "Ministry of Power — Electricity (Late Payment Surcharge) Rules, 2022",
    url: "https://powermin.gov.in/",
  },
  {
    title: "Ministry of New and Renewable Energy (MNRE) — Rooftop & PM-KUSUM",
    url: "https://mnre.gov.in/",
  },
  {
    title: "Central Electricity Regulatory Commission (CERC) Official Portal",
    url: "https://cercind.gov.in/",
  },
  {
    title: "MSME Samadhaan Delayed Payment Portal (MSMED Act s.15–18)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 9 Interim Measures) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType: "B2B Solar EPC, OPEX/RESCO PPA, EV Charging CPO & Power Contractor Debt Recovery",
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
  name: "IND-19 Solar EPC, RESCO PPA, EV Charging & Power Contractor Recovery Playbooks",
  numberOfItems: IND_19_SPOKES.length,
  itemListElement: IND_19_SPOKES.map((spoke, index) => ({
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
      name: "Solar, Renewable, EV & Power Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function SolarRenewableEvPowerHubPage() {
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
            <span>IND-19 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Solar EPC, RESCO PPA, EV Charging &amp; Power Infra</span>
            <span className="text-slate-500">&bull;</span>
            <span>Creditor-Side Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (Arbitration s.9, LPS Rules &amp; MSMED s.15–18)
            </span>
            Built exclusively for clean-energy and power creditors—not retail consumer complaints. Enforce <strong>OPEX/RESCO PPA monthly tariffs &amp; Termination Buyouts</strong> via <strong>Arbitration Act s.9</strong> plant repossession injunctions, unlock stalled <strong>C&amp;I CapEx net-metering retentions</strong> under <strong>Contract Act s.53/54 &amp; MSMED s.16</strong>, and recover <strong>DISCOM / EV fleet / HT-LT substation</strong> dues through <strong>LPS Rules &amp; Order XXXVII CPC</strong>.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">&#8377;20L–&#8377;25Cr</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Typical CapEx &amp; RESCO asset deployment protected per commercial site
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Arb Act s.9</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Urgent Commercial Court injunction against free power draw &amp; gate lockouts
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI + LPS</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 compound interest &amp; Electricity LPS Rules surcharge
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Batch CSV notices mapped to PPA IDs, SCADA kWh &amp; BOS serials
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Sector Scope: <strong className="text-slate-200">C&amp;I Solar EPCs, RESCO SPVs, BOS Distributors, EV CPOs, HT/LT &amp; STP/ETP Contractors</strong>
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
              { label: "Solar, Renewable, EV & Power Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <SolarEnergyHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Creditor-Side Polarity */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Solar EPCs, RESCO Developers &amp; EV CPOs Need a Creditor Hub
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&rsquo;s commercial and industrial (C&amp;I) clean-energy transition—spanning rooftop CapEx solar EPCs, 15-to-25-year OPEX/RESCO Power Purchase Agreements (PPAs), Tier-1 solar module and inverter distributors, EV Charge Point Operators (CPOs), HT/LT electrical substation contractors, and industrial STP/ETP/ZLD plant builders—deploys <strong>₹20 Lakh to ₹25 Crore+ per site</strong> in serialized hardware and upfront engineering. Unlike residential consumer refund disputes, institutional energy creditors bear heavy upfront OEM payables, bank project finance, and working-capital interest from Day 1.
                </p>
                <p>
                  Yet when a factory off-taker, fleet operator, real-estate developer, or regional installer defaults, clean-energy businesses encounter severe legal bottlenecks. An OPEX/RESCO off-taker stops paying monthly kWh invoices while locking the rooftop gate and consuming generated solar power for free. A factory enjoying zero-export daytime solar freezes the EPC&rsquo;s final 15–20% balance citing DISCOM net-metering delays caused by the factory&rsquo;s own pending utility arrears. An EV fleet hub defaults on postpaid OCPP charging cycles, or a host mall blocks a CPO from uninstalling ₹30L DC fast chargers.
                </p>
                <p>
                  LegalRecovery.in provides an institutional, creditor-only recovery framework engineered for India&rsquo;s renewable and power sector. Our advocate-vetted notices pair <strong>BSA 2023 Section 63</strong> certified SCADA/OCPP logs with <strong>Arbitration Act Section 9</strong> asset-preservation injunctions, <strong>Contract Act Sections 53/54</strong> Deemed Commissioning, <strong>Electricity (LPS) Rules 2022</strong>, <strong>MSMED Act Sections 15–18</strong> (3x RBI compound interest), and <strong>BNS Section 316</strong> criminal breach of trust remedies for immobilized hardware.
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
                  8-Track Solar, RESCO, EV &amp; Power Escalation Decision Matrix
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match your clean-energy business model, ticket tier, aging bucket, and technical proof to the correct statutory forum before dispatching single or bulk CSV legal notices.
              </p>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold rounded-tl-xl">Creditor &amp; Claim Type</th>
                      <th className="p-3.5 font-bold">Ticket &amp; Aging</th>
                      <th className="p-3.5 font-bold">Technical Proof / Instrument</th>
                      <th className="p-3.5 font-bold rounded-tr-xl">Primary Statutory Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 border border-slate-200">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">OPEX / RESCO PPA Monthly Tariff &amp; Termination Buyout</td>
                      <td className="p-3.5 text-slate-700">&#8377;20L–&#8377;25 Cr<br /><span className="text-xs text-slate-500">60–180 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Signed PPA + BSA s.63 SCADA kWh Logs + Buyout Schedule</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Arbitration Act s.9 Injunction + Commercial Court</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">C&amp;I CapEx Solar EPC Final 15–20% Net-Metering Holdback</td>
                      <td className="p-3.5 text-slate-700">&#8377;8L–&#8377;5 Cr<br /><span className="text-xs text-slate-500">90–365 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Mechanical Completion + Zero-Export Logs + DISCOM Emails</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Contract Act s.53/54 + MSMED s.15–18 (3x RBI)</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Solar Module &amp; Inverter Distributor 30–60d Credit</td>
                      <td className="p-3.5 text-slate-700">&#8377;3L–&#8377;3 Cr<br /><span className="text-xs text-slate-500">30–120 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Tax Invoice + e-Way Bill + Flash-Test Serials + Security PDCs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">NI Act s.138 + Serial Warranty Hold + Order XXXVII CPC</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">DISCOM Tariff &amp; PM-KUSUM / State Nodal Agency Arrears</td>
                      <td className="p-3.5 text-slate-700">&#8377;15L–&#8377;25 Cr+<br /><span className="text-xs text-slate-500">120–540+ DPD</span></td>
                      <td className="p-3.5 text-slate-700">Joint Meter Reading (JMR) + SNA Work Completion + PPA</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Electricity LPS Rules 2022 + SERC s.86(1)(f) + s.80 CPC</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">EV Charging CPO Fleet-Hub Bills &amp; DC Charger Repossession</td>
                      <td className="p-3.5 text-slate-700">&#8377;3L–&#8377;3 Cr<br /><span className="text-xs text-slate-500">30–150 DPD</span></td>
                      <td className="p-3.5 text-slate-700">BSA s.63 OCPP Session Logs + Asset Serial + Site License</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Order XXXVII CPC (Fleet) + BNS s.316 &amp; Arb s.9 (Chargers)</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">STP / ETP / ZLD &amp; Biogas Turnkey Final 25% + O&amp;M</td>
                      <td className="p-3.5 text-slate-700">&#8377;5L–&#8377;4 Cr<br /><span className="text-xs text-slate-500">90–365 DPD</span></td>
                      <td className="p-3.5 text-slate-700">State PCB Consent to Operate (CTO) + Trial-Run Logs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">MSME Samadhaan (s.15–18) + Contract Act s.70 + O.37</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">HT / LT Electrical Substation, Transformer &amp; Panel Bills</td>
                      <td className="p-3.5 text-slate-700">&#8377;4L–&#8377;3.5 Cr<br /><span className="text-xs text-slate-500">60–270 DPD</span></td>
                      <td className="p-3.5 text-slate-700">CEIG Energization Approval + FAT Report + BoQ Certification</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">MSMED s.16 + s.43B(h) Tax Leverage + Arbitration</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Solar / Wind O&amp;M &amp; Module-Cleaning Contractor Arrears</td>
                      <td className="p-3.5 text-slate-700">&#8377;1.5L–&#8377;80L<br /><span className="text-xs text-slate-500">45–180 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Plant-Availability SLA Sheet + Monthly Cleaning Sign-Offs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">MSMED s.15–18 (3x RBI) + Order XXXVII CPC</td>
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
                  Section 9, LPS Rules &amp; Deemed Commissioning Recovery Pipeline
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Follow this 3-stage clean-energy escalation architecture to lock telemetry proof, trigger lawful curtailment or statutory notice timelines, and route each claim to its fastest enforcement forum.
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
                  aria-label="Three-stage Solar EPC, RESCO PPA, EV Charging and Power Contractor legal recovery pipeline"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="65" width="175" height="125" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="97" y="92" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1: TELEMETRY &amp; TITLE</text>
                  <text x="97" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">BSA s.63 &amp; Asset</text>
                  <text x="97" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Proof Lock</text>
                  <text x="97" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">SCADA / OCPP / JMR Logs,</text>
                  <text x="97" y="172" textAnchor="middle" fill="#CBD5E1" fontSize="10">CEIG, PCB CTO &amp; Serials</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="185" y1="127" x2="225" y2="127" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="225,121 237,127 225,133" fill="#DC2626" />

                  {/* Stage 2 Top (RESCO / EV / BOS) */}
                  <rect x="237" y="15" width="250" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="362" y="38" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="700">TRACK A: RESCO PPA / EV CPO / BOS</text>
                  <text x="362" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Buyout, Curtailment &amp; BNS s.316</text>
                  <text x="362" y="76" textAnchor="middle" fill="#CBD5E1" fontSize="10">PPA Cure Notice + Zero-Export Control</text>
                  <text x="362" y="92" textAnchor="middle" fill="#CBD5E1" fontSize="10">DC Charger / Module Serial Hold</text>

                  {/* Stage 2 Bottom (EPC / DISCOM / Infra) */}
                  <rect x="237" y="145" width="250" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="362" y="168" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">TRACK B: EPC / DISCOM / SUBSTATION</text>
                  <text x="362" y="188" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Deemed Commissioning &amp; LPS</text>
                  <text x="362" y="206" textAnchor="middle" fill="#CBD5E1" fontSize="10">Contract Act s.53/54 + MSMED s.16</text>
                  <text x="362" y="222" textAnchor="middle" fill="#CBD5E1" fontSize="10">Electricity LPS Rules / s.80 CPC Notice</text>

                  {/* Arrows 2 -> 3 */}
                  <line x1="487" y1="62" x2="535" y2="100" stroke="#DC2626" strokeWidth="2" />
                  <line x1="487" y1="192" x2="535" y2="155" stroke="#10B981" strokeWidth="2" />
                  <polygon points="532,95 543,105 529,106" fill="#DC2626" />
                  <polygon points="529,149 543,150 532,160" fill="#10B981" />

                  {/* Stage 3 */}
                  <rect x="543" y="55" width="265" height="145" rx="12" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="675" y="82" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="700">STAGE 3: FORUM EXECUTION</text>
                  <text x="675" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Asset &amp; Tariff Enforcement</text>
                  <text x="675" y="128" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">1. Arbitration s.9 (Plant Repossession)</text>
                  <text x="675" y="146" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">2. SERC s.86(1)(f) (DISCOM Arrears)</text>
                  <text x="675" y="164" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">3. MSEFC (3x RBI) &amp; s.43B(h)</text>
                  <text x="675" y="182" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">4. Order 37 CPC &amp; NI Act s.138</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 1 &bull; Telemetry &amp; Title Lock</p>
                  <p className="text-sm font-bold mb-1">BSA s.63 SCADA, OCPP &amp; CEIG Proof</p>
                  <p className="text-xs text-slate-300">Export certified SCADA kWh logs, OCPP fleet sessions, CEIG/PCB CTO approvals, and serialized hardware lists.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-red-900/60">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 2A &bull; RESCO PPA, EV CPO &amp; BOS</p>
                  <p className="text-sm font-bold mb-1">Buyout Notice, Curtailment &amp; BNS s.316</p>
                  <p className="text-xs text-slate-300">Serve PPA Termination Buyout notice, enforce lawful curtailment, and demand DC charger / module serial return.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-emerald-900/60">
                  <p className="text-[11px] font-bold uppercase text-emerald-400 mb-1">Stage 2B &bull; EPC, DISCOM &amp; Contractors</p>
                  <p className="text-sm font-bold mb-1">Arb s.9, SERC s.86(1)(f) &amp; MSEFC</p>
                  <p className="text-xs text-slate-300">Trigger Deemed Commissioning (s.53/54), LPS Rules surcharge, or s.80 CPC notice for rapid recovery.</p>
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
                  4 Clean-Energy &amp; Power Recovery Playbooks (Interactive Explorer)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select your renewable, EV charging, or electrical contracting profile below to inspect the exact statutory hook, commercial bottleneck, and 3-step recovery protocol.
              </p>

              <SolarEnergyHubScenarioTabs />
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
                  Solar EPC, RESCO SPV &amp; EV CPO Batch CSV Recovery Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Multi-site RESCO developers, Tier-1 solar module/inverter distributors, EV Charging CPOs, and O&amp;M contractors rarely manage a single overdue invoice—they hold 25 to 1,500+ distributed commercial off-takers, regional EPC dealer ledgers, or EV fleet accounts across states. Through LegalRecovery.in&rsquo;s{" "}
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
                , renewable CFOs and credit controllers can test 1 live notice at &#8377;999 first and then onboard 10 to 10,000+ accounts mapped to PPA IDs, SCADA kWh meters, module serial numbers, and OCPP session ledgers with simultaneous Email, Business WhatsApp, and Speed Post RPAD tracking.
              </p>

              <SolarEnergyHubCTA />
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
                  Binding Statutory Mandates: Arb s.9, LPS Rules &amp; MSMED
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
                  Worked Economics: &#8377;1.85 Cr RESCO Buyout vs &#8377;42L EPC Holdback
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Compare how structured statutory claims convert frozen clean-energy CapEx and withheld commissioning balances into enforceable commercial recoveries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                    Scenario A &bull; 500 kWp OPEX / RESCO Solar SPV
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    &#8377;1,85,00,000 PPA Tariff Arrears + Year-4 Termination Buyout
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>Overdue Monthly PPA Invoices (5 months):</strong> &#8377;21,00,000 (SCADA kWh verified)</li>
                    <li>&bull; <strong>Contractual Year-4 Termination Buyout Value:</strong> &#8377;1,64,00,000</li>
                    <li>&bull; <strong>Interim Relief:</strong> Arbitration Act s.9 petition restraining free consumption &amp; gate lockout</li>
                    <li>&bull; <strong>Asset Security:</strong> Court Receiver inventory of 920 Tier-1 modules &amp; 5 string inverters</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Result: Off-taker forced to settle &#8377;21L arrears + reinstate Escrow / LC or surrender plant under s.9.
                  </div>
                </div>

                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Scenario B &bull; C&amp;I Rooftop Solar EPC (Udyam Registered)
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    &#8377;42,00,000 Final 20% Net-Metering Retention (240 Days Overdue)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>Withheld Principal Balance:</strong> &#8377;42,00,000 (plant running on zero-export)</li>
                    <li>&bull; <strong>Legal Hook:</strong> Contract Act s.53/54 Deemed Commissioning (buyer-caused DISCOM delay)</li>
                    <li>&bull; <strong>Tax Pressure:</strong> Income-tax Act s.43B(h) disallowance of &#8377;42L buyer deduction</li>
                    <li>&bull; <strong>Udyam MSME Interest:</strong> 3x RBI Bank Rate (~19.5% p.a. compounded monthly via{" "}
                      <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] underline font-semibold">
                        MSME Interest Calculator
                      </Link>)
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Result: ~&#8377;5.4L+ accrued statutory compound interest in 8 months + immediate MSEFC Samadhaan leverage.
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
                  Complete IND-19 Directory: All 9 Spokes &amp; Notice Template
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Explore every specialized guide, statutory commentary, and notice workspace in our Solar EPC, RESCO PPA, EV Charging &amp; Power Contractor recovery cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_19_SPOKES.filter((s) => s.track === track.key);
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
                  href="/subcontractor-payment-recovery-india"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">EPC &amp; Subcontractor Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Subcontractor &amp; Turnkey EPC Payment Recovery India
                  </p>
                  <p className="text-xs text-slate-600">
                    Defeat pay-when-paid clauses, wrongful liquidated damages, and prolonged retention freezes on solar, substation, and utility projects.
                  </p>
                </Link>

                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Government &amp; PSU Claims</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Section 80 CPC Statutory Notice to Government &amp; Nodal Agencies
                  </p>
                  <p className="text-xs text-slate-600">
                    Mandatory 60-day statutory pre-suit notice protocol for delayed PM-KUSUM, State Nodal Agency, and PSU solar tender payments.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Interactive Calculator</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </p>
                  <p className="text-xs text-slate-600">
                    Compute exact compound interest under MSMED s.16 for Udyam-registered solar EPCs, BOS suppliers, HT/LT contractors, and O&amp;M vendors.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Bulk CSV Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Bulk Recovery Cases: All-in-One Institutional Solutions
                  </p>
                  <p className="text-xs text-slate-600">
                    Upload 10 to 10,000+ defaulting PPA sites, BOS dealer invoices, or EV fleet-hub ledgers in a single tracked wave.
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
                  Frequently Asked Questions: Solar, RESCO &amp; EV Recovery
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
                  Primary Statutory Authorities &amp; Clean-Energy Portals
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
