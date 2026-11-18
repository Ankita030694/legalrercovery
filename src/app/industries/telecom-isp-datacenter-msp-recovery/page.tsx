import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TelecomIspHubTableOfContents from "./TelecomIspHubTableOfContents";
import TelecomIspHubScenarioTabs from "./TelecomIspHubScenarioTabs";
import TelecomIspHubCTA from "./TelecomIspHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/telecom-isp-datacenter-msp-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Telecom, Enterprise ISP, Data Center, CPaaS & MSP Recovery";
const PAGE_DESCRIPTION =
  "Recover unpaid ILL/MPLS leased lines, rack colocation lock-ins, postpaid SMS/WhatsApp/voice bursts, OFC contractor bills & unreturned Cisco/Fortinet CPE.";
const H1_TEXT =
  "Enterprise Billing, Lock-In & Hardware Recovery for ISPs, Data Centers, Cloud Hosts, CPaaS Platforms & Managed IT Providers";

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
  track: "isp-datacenter-cpaas" | "tdsat-infra-si" | "msp-mso-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_18_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-212",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "isp-datacenter-cpaas",
    title: "Enterprise ILL / MPLS / SD-WAN Lock-In Breach & Unamortized Fiber CapEx Recovery",
    url: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
    statute: "Signed CAF + AT Report + Contract Act s.74 + BNS s.316",
    summary:
      "Frame early-termination claims around waived installation OTC and unamortized last-mile optical fiber CapEx while recovering MUX/ONT/router CPE.",
  },
  {
    id: "B2B-213",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "isp-datacenter-cpaas",
    title: "Data Center Colocation & GPU Cloud Default: Physical Server Lien vs DPDP Safe Suspension",
    url: "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law",
    statute: "Contract Act s.170/171 + DPDP Act 2023 + IT Act s.43",
    summary:
      "Exercise contractual Gate-Pass lien over physical Dell/HPE/Nvidia rack hardware while serving a lawful 7-day read-only data-export window.",
  },
  {
    id: "B2B-214",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "isp-datacenter-cpaas",
    title: "WhatsApp BSP, Bulk SMS & Cloud-Telephony Postpaid Burst Default Recovery",
    url: "/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery",
    statute: "BSA 2023 s.63 CDR/Webhook Proof + API Custody + MSMED s.16",
    summary:
      "Prove Meta conversation and DLT SMS traffic using BSA s.63 certified delivery logs, defeat 'API key leak' excuses, and enforce 3x RBI interest.",
  },
  {
    id: "B2B-215",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "tdsat-infra-si",
    title: "TDSAT (TRAI Act s.14) vs Commercial Court: Exact Telecom & ISP Jurisdiction Map",
    url: "/tdsat-vs-commercial-court-jurisdiction-telecom-isp-broadcasting-recovery",
    statute: "TRAI Act 1997 s.14(a) & s.15 Bar + Commercial Courts Act",
    summary:
      "Avoid 2-year jurisdictional dismissals by routing inter-licensee/MSO-LCO disputes to TDSAT and enterprise subscriber debt to Commercial Court.",
  },
  {
    id: "B2B-216",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tdsat-infra-si",
    title: "Optical Fiber (OFC) Trenching & Telecom Tower IP-1 O&M Contractor Bill Recovery",
    url: "/telecom-tower-ip1-optical-fiber-ofc-trenching-contractor-recovery",
    statute: "OTDR Acceptance Test (AT) + MSMED s.15–18 + Arbitration",
    summary:
      "Defeat 180-day certification stalls and wrongful municipal ROW deductions on BharatNet, 5G fiber splicing, and tower diesel/security contracts.",
  },
  {
    id: "B2B-217",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tdsat-infra-si",
    title: "IT System Integrator (SI) Hardware Delivery & 30% Site-Readiness Holdback Recovery",
    url: "/system-integrator-it-hardware-networking-campus-project-recovery",
    statute: "Contract Act s.53/54 Deemed Commissioning + Order XXXVII CPC",
    summary:
      "Trigger Deemed Commissioning maturity on stuck 20–30% installation milestones when client civil/electrical rooms stall Redington/Ingram payback.",
  },
  {
    id: "B2B-218",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "msp-mso-templates",
    title: "Managed IT (MSP) & SOC Annual AMC + Unreturned Firewall-as-a-Service (CPE) Recovery",
    url: "/managed-it-services-msp-annual-amc-sla-unreturned-firewall-recovery",
    statute: "IT Act s.43 Safe Admin Handover + BNS s.316 + Order 37 CPC",
    summary:
      "Hand over client-owned DNS/M365 credentials cleanly to avoid IT Act s.43 liability while prosecuting unreturned Fortinet/Sophos firewalls.",
  },
  {
    id: "B2B-219",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "msp-mso-templates",
    title: "MSO & Regional ISP Franchisee: LCO Subsidized Set-Top-Box / ONT Swap & Arrears Recovery",
    url: "/cable-tv-mso-broadcaster-set-top-box-lco-arrears-recovery-tdsat",
    statute: "TRAI Interconnect 21-Day Notice + TDSAT Hardware Recovery",
    summary:
      "Stop local cable operators (LCOs) and fiber franchisees from migrating subsidized STBs/ONTs overnight via TRAI 21-day notices and TDSAT petitions.",
  },
  {
    id: "B2B-220",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "msp-mso-templates",
    title: "ISP, Data Center & CPaaS Suspension + Lock-In + CPE Return Legal Notice Format",
    url: "/templates/isp-datacenter-cpaas-suspension-cum-lock-in-recovery-notice",
    statute: "DPDP 7-Day Export Window + Contract Act s.74/170 + BNS s.316",
    summary:
      "Interactive notice builder with Circuit ID, Rack ID, CAF, AT Date, Lock-In Expiry, CPE Serial/MAC schedule, and 7-day data-migration warning.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "isp-datacenter-cpaas" as const,
    heading: "Track A: Enterprise ISPs, Colocation Data Centers & CPaaS Platforms",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "tdsat-infra-si" as const,
    heading: "Track B: TDSAT Jurisdiction, OFC/Tower Infra & System Integrators",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "msp-mso-templates" as const,
    heading: "Track C: Managed MSPs, MSO/LCO Networks & Notice Workspace",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "TRAI Act, 1997 — Section 14(a) & Section 15 Civil Court Bar",
    title: "TDSAT Exclusive Jurisdiction vs Commercial Court / Order XXXVII CPC",
    parties: "DoT Licensees, Class-A/B/C ISPs, MSOs, Broadcasters & LCOs vs Enterprise Subscribers",
    holding:
      "Section 14(a) of the TRAI Act vests exclusive jurisdiction in TDSAT for disputes between two service providers (such as Telco–Telco interconnect, Broadcaster–MSO carriage, or MSO–LCO subscription/STB disputes), barring Civil Courts under Section 15. Conversely, TDSAT has no jurisdiction over a dispute between an ISP/MSP and an individual or corporate end-subscriber—those claims must be filed in Commercial Courts, Civil Courts (Order XXXVII CPC), or Arbitration.",
    impact:
      "Routing the claim to the right forum on Day 1 prevents 18–24 months of wasted litigation and jurisdictional dismissals.",
  },
  {
    citation: "Indian Contract Act, 1872 — Section 74 (Unamortized Last-Mile CapEx)",
    title: "Enforcing 12/24/36-Month ILL, MPLS & Colocation Lock-In Periods",
    parties: "Enterprise ISPs, Colocation Data Centers, Bare-Metal GPU Hosts & Corporate Clients",
    holding:
      "While courts scrutinize bare 'penalty' clauses under Section 74 of the Contract Act, genuine pre-estimated liquidated damages representing waived One-Time Charges (OTC), dedicated last-mile optical fiber digging/splicing CapEx, or committed kWh power allocation are enforceable when backed by the signed Customer Application Form (CAF), Acceptance Test (AT) report, and vendor CapEx vouchers.",
    impact:
      "Converts 'we stopped using the link' excuses into recoverable unamortized infrastructure costs plus accrued monthly recurring charges.",
  },
  {
    citation: "DPDP Act, 2023 & Information Technology Act, 2000 — Section 43",
    title: "Lawful Hosting Suspension, Data-Export Windows & MSP Credential Handover",
    parties: "Tier-3/4 Data Centers, Cloud Hosts, Bare-Metal GPU Providers & Managed MSPs",
    holding:
      "Abruptly deleting a defaulting tenant's production database or holding a corporate client's M365/DNS root passwords hostage exposes the provider to IT Act Section 43 unauthorized-denial-of-access claims and DPDP Act data-fiduciary disputes. Instead, contractual hardware lien under Contract Act s.170/171 over physical rack servers—paired with a written 7-day read-only data-export window—protects the provider completely.",
    impact:
      "Lets Data Centers and MSPs suspend non-paying workloads and retain physical rack security without triggering regulatory or criminal counterclaims.",
  },
  {
    citation: "Bharatiya Nyaya Sanhita (BNS), 2023 — Section 316 & BSA 2023 — Section 63",
    title: "Recovering Unreturned CPE Hardware & Certifying CDR / Webhook Delivery Logs",
    parties: "ISPs (MUX/ONT/Cisco CPE), MSPs (Fortinet/Sophos Firewalls) & CPaaS / WhatsApp BSPs",
    holding:
      "Leased routers, SD-WAN edges, firewalls, and MUX units remain the provider's property under the CAF/MSA. Retaining or misappropriating serialized CPE after termination notice constitutes criminal breach of trust under BNS Section 316. For usage-based CPaaS/SMS billing, Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 renders server-generated CDRs and Meta webhook receipts admissible in summary suits.",
    impact:
      "Creates immediate executive pressure for physical hardware return within 7 days and defeats 'traffic/API leak' billing disputes in court.",
  },
];

const FAQS = [
  {
    question: "Should an Enterprise ISP file recovery against a defaulting corporate client in TDSAT or Commercial Court?",
    answer:
      "In Commercial Court, Civil Court (Order XXXVII CPC), or Arbitration—never TDSAT. Under Section 14(a) of the TRAI Act, 1997, TDSAT adjudicates disputes between a licensor and licensee or between two telecom/broadcasting service providers (such as MSO vs LCO or Telco vs Telco). Claims by an ISP against an enterprise subscriber for unpaid ILL/MPLS bills or lock-in charges belong strictly in Commercial/Civil Courts or agreed arbitration.",
  },
  {
    question: "Can a colocation data center block a defaulting client from removing their physical servers?",
    answer:
      "Yes, if your Colocation Master Services Agreement (MSA) includes an express contractual lien/retention clause over co-located equipment for unpaid rack, power, and cross-connect dues. However, you must separate physical hardware security from hosted data: serve a documented 7-day read-only data-export notice under DPDP/IT Act guardrails before suspending network ports, and never wipe client data without notice.",
  },
  {
    question: "How can an ISP enforce a 24-month ILL or MPLS lock-in if the client shuts its office in Month 4?",
    answer:
      "Frame the demand around actual unamortized CapEx rather than an abstract penalty. Present the signed Customer Application Form (CAF) showing the waived installation OTC, dedicated last-mile fiber trenching/splicing or RF link invoices, and the signed Commissioning Acceptance Test (AT) report. Under Section 74 of the Indian Contract Act, documented unamortized infrastructure cost is recoverable as genuine pre-estimated loss.",
  },
  {
    question: "Can a Managed IT Provider (MSP) withhold a client's M365 or DNS admin password until AMC bills are paid?",
    answer:
      "No—withholding client-owned domain, DNS, or M365/AWS root credentials creates severe liability under Section 43 of the Information Technology Act, 2000. The safe legal playbook is to hand over client-owned credentials cleanly via email while enforcing unpaid SLA/AMC invoices via Order XXXVII CPC / MSMED s.16 and prosecuting unreturned leased firewalls (Fortinet/Sophos) under BNS Section 316.",
  },
  {
    question: "How do WhatsApp BSPs and Bulk SMS aggregators prove postpaid burst usage if a client alleges API key leak?",
    answer:
      "Export immutable Call Detail Records (CDRs), Meta Cloud API webhook delivery receipts, originating IP logs, and DLT template approval records, backed by a Section 63 BSA 2023 electronic evidence certificate. Combined with the MSA's API-Key Customer Custody Clause, this shifts full liability onto the enterprise client and supports summary recovery or MSEFC 3x RBI interest claims.",
  },
  {
    question: "What legal remedy do OFC trenching and telecom tower O&M contractors have for 180-day withheld bills?",
    answer:
      "Udyam-registered OFC civil contractors and IP-1 tower O&M vendors can file on MSME Samadhaan (MSEFC) under MSMED Act Sections 15–18 for principal plus 3x RBI Bank Rate compound interest, relying on OTDR optical-link Acceptance Test (AT) certificates and site handover logs to defeat arbitrary municipal ROW deductions.",
  },
  {
    question: "Can regional ISPs and MSOs send bulk legal notices to 100+ defaulting enterprise subscribers or LCOs?",
    answer:
      "Yes. Using LegalRecovery.in's Bulk CSV Desk and Representees workspace, ISPs, data centers, CPaaS platforms, and MSOs can test 1 live notice at ₹999 first and then upload 10 to 10,000+ accounts mapped to Circuit IDs, Rack IDs, CPE MAC/serial numbers, and overdue ledgers for simultaneous Email, Business WhatsApp, and Speed Post RPAD dispatch.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "TRAI Act, 1997 (Section 14 TDSAT Jurisdiction & Section 15 Bar) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1951",
  },
  {
    title: "Telecom Disputes Settlement and Appellate Tribunal (TDSAT) Official Portal",
    url: "https://tdsat.gov.in/",
  },
  {
    title: "Digital Personal Data Protection (DPDP) Act, 2023 — MeitY / India Code",
    url: "https://www.meity.gov.in/data-protection-framework",
  },
  {
    title: "Information Technology Act, 2000 (Section 43 & 10A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "MSME Samadhaan Delayed Payment Monitoring Portal (MSMED Act s.15–18)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType: "B2B Telecom, Enterprise ISP, Data Center, CPaaS & MSP Legal Debt Recovery",
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
  name: "IND-18 Telecom, ISP, Data Center, CPaaS & MSP Recovery Playbooks & Notice Template",
  numberOfItems: IND_18_SPOKES.length,
  itemListElement: IND_18_SPOKES.map((spoke, index) => ({
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
      name: "Telecom, ISP, Data Center & MSP Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function TelecomIspDatacenterMspHubPage() {
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
            <span>IND-18 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Telecom, Enterprise ISP, Data Center, CPaaS &amp; MSP</span>
            <span className="text-slate-500">&bull;</span>
            <span>TDSAT vs Commercial Court</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (TRAI s.14, DPDP &amp; BNS s.316 Compliant)
            </span>
            Under <strong>TRAI Act Section 14(a)</strong>, inter-operator and MSO–LCO disputes go exclusively to <strong>TDSAT</strong>, while enterprise ILL/MPLS lock-in, colocation, CPaaS burst, and MSP arrears route to <strong>Commercial Courts / Order XXXVII CPC</strong>. Pair a <strong>DPDP-safe 7-day data-export notice</strong> with <strong>Contract Act s.74/170</strong> hardware lien and <strong>BNS s.316</strong> CPE recovery.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">7-Day Export</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                DPDP &amp; IT Act s.43 safe-harbour window before hosting suspension
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.14 vs O.37</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                TDSAT (inter-licensee) vs Commercial Court (enterprise client)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Criminal breach of trust leverage on unreturned Cisco/Fortinet CPE
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Batch CSV notices mapped to Circuit ID, Rack ID &amp; CPE Serial
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Sector Scope: <strong className="text-slate-200">Class-A/B/C ISPs, Tier-3/4 Data Centers, CPaaS, SIs &amp; MSPs</strong>
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
              { label: "Telecom, ISP, Data Center & MSP Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <TelecomIspHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Polarity Flip */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Telecom, Data Center &amp; CPaaS Creditors Bleed Working Capital
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&rsquo;s digital infrastructure backbone—Class-A/B/C Enterprise ISPs, Tier-3/4 Colocation Data Centers, Bare-Metal GPU hosts, WhatsApp Business Solution Providers (BSPs), IT System Integrators (SIs), and Managed Service Providers (MSPs)—operates on high upfront pass-through costs. An ISP digs dedicated last-mile optical fiber or installs licensed RF towers with &ldquo;Zero OTC&rdquo; against a 12-to-36-month Customer Application Form (CAF) lock-in; a WhatsApp BSP pays Meta ₹0.80+ per marketing conversation upfront; a System Integrator pays Redington or Ingram Micro on strict 45-day channel credit.
                </p>
                <p>
                  Yet when an enterprise customer defaults on ₹5 Lakh to ₹3 Crore+ in recurring bills, technology creditors face a legal tightrope that generic recovery agencies fail to navigate. Abruptly wiping a tenant&rsquo;s hosted database or locking an MSP client&rsquo;s M365/DNS root admin credentials invites multi-crore counterclaims under <strong>Section 43 of the Information Technology Act, 2000</strong> and the <strong>DPDP Act, 2023</strong>. Conversely, filing an enterprise subscriber debt suit in <strong>TDSAT</strong>—or filing an MSO-vs-LCO set-top-box suit in a District Court—triggers automatic jurisdictional dismissal under <strong>Sections 14 and 15 of the TRAI Act, 1997</strong>.
                </p>
                <p>
                  LegalRecovery.in replaces this operational paralysis with a specialized, statutory recovery engine. Our advocate-drafted notices separate physical hardware lien from hosted customer data, frame ILL/MPLS lock-in claims around documented unamortized CapEx under <strong>Contract Act Section 74</strong>, certify CDR/webhook delivery logs under <strong>BSA 2023 Section 63</strong>, and prosecute unreturned Cisco, Fortinet, Juniper, and MUX equipment under <strong>BNS Section 316</strong>.
                </p>
              </div>
            </section>

            {/* Section 2: 8-Track Multi-Tier Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  8-Track Telecom, Cloud &amp; MSP Escalation Decision Matrix
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match your infrastructure vertical, ticket size, aging bucket, and technical proof to the legally correct statutory forum before dispatching single or bulk CSV notices.
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
                      <td className="p-3.5 font-bold text-slate-900">Enterprise ILL / MPLS / SD-WAN Lock-In Breach</td>
                      <td className="p-3.5 text-slate-700">₹1.5L–₹45L<br /><span className="text-xs text-slate-500">60–180 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Signed CAF + Acceptance Test (AT) + Last-Mile CapEx Vouchers</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Contract Act s.74 + Order XXXVII CPC / Commercial Court</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Colocation Rack &amp; Bare-Metal GPU Default</td>
                      <td className="p-3.5 text-slate-700">₹5L–₹3 Cr+<br /><span className="text-xs text-slate-500">30–120 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Colocation MSA + kWh Power Logs + Cross-Connect Schedule</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">7-Day DPDP Export Notice + Hardware Lien + Arb s.9</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">WhatsApp BSP, Bulk SMS &amp; CPaaS Postpaid Burst</td>
                      <td className="p-3.5 text-slate-700">₹2L–₹80L<br /><span className="text-xs text-slate-500">30–90 DPD</span></td>
                      <td className="p-3.5 text-slate-700">BSA s.63 Certified CDRs, DLT Logs &amp; Meta Webhook Receipts</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">MSMED s.18 (3x RBI) + NI s.138 + Order XXXVII CPC</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Unreturned Cisco / Fortinet / MUX / ONT CPE</td>
                      <td className="p-3.5 text-slate-700">₹50K–₹25L<br /><span className="text-xs text-slate-500">Post-Termination</span></td>
                      <td className="p-3.5 text-slate-700">CAF Hardware Annexure + MAC/Serial Delivery Challan</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">BNS s.316 Criminal Breach of Trust + Civil Recovery</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">IT System Integrator (SI) 30% Site Holdback</td>
                      <td className="p-3.5 text-slate-700">₹10L–₹2 Cr<br /><span className="text-xs text-slate-500">90–365 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Hardware Delivery Challan + Site-Readiness Reminder Emails</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Contract Act s.53/54 Deemed Commissioning + MSEFC</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Managed IT (MSP) &amp; SOC Annual AMC Arrears</td>
                      <td className="p-3.5 text-slate-700">₹1L–₹40L<br /><span className="text-xs text-slate-500">60–180 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Signed MSA/SLA + Ticketing Logs + Clean Credential Handover</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Order XXXVII CPC + BNS s.316 (Firewall-as-a-Service)</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">OFC Trenching &amp; IP-1 Tower O&amp;M Contractors</td>
                      <td className="p-3.5 text-slate-700">₹3L–₹1.5 Cr<br /><span className="text-xs text-slate-500">120–365+ DPD</span></td>
                      <td className="p-3.5 text-slate-700">OTDR Link Acceptance Report + Diesel/Logbook Sign-Offs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">MSME Samadhaan (s.15–18) + Contractual Arbitration</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">MSO vs LCO / Broadcaster / Telco Interconnect</td>
                      <td className="p-3.5 text-slate-700">₹2L–₹3 Cr+<br /><span className="text-xs text-slate-500">Inter-Licensee</span></td>
                      <td className="p-3.5 text-slate-700">TRAI Interconnect Agreement + STB/ONT Seed Ledger</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">TRAI 21-Day Notice + TDSAT Petition (TRAI s.14)</td>
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
                  DPDP-Safe Suspension, Hardware Lien &amp; Forum Routing Pipeline
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Follow this 3-stage compliance architecture to protect against IT Act s.43 / DPDP counterclaims while routing each default to TDSAT or Commercial Court.
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
                  aria-label="Three-stage Telecom, ISP, Data Center and MSP legal recovery and DPDP-safe suspension workflow"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="65" width="175" height="125" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="97" y="92" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1: PROOF &amp; DATA</text>
                  <text x="97" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">BSA s.63 &amp; DPDP</text>
                  <text x="97" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Safe-Harbour</text>
                  <text x="97" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">Lock CAF, AT, CDR &amp; MACs;</text>
                  <text x="97" y="172" textAnchor="middle" fill="#CBD5E1" fontSize="10">Offer 7d Data-Export Window</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="185" y1="127" x2="225" y2="127" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="225,121 237,127 225,133" fill="#DC2626" />

                  {/* Stage 2 Top (Enterprise / Commercial) */}
                  <rect x="237" y="15" width="250" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="362" y="38" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="700">TRACK A: ENTERPRISE / CLOUD / MSP</text>
                  <text x="362" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Lock-In CapEx &amp; CPE Notice</text>
                  <text x="362" y="76" textAnchor="middle" fill="#CBD5E1" fontSize="10">Contract Act s.74 + s.170 Server Lien</text>
                  <text x="362" y="92" textAnchor="middle" fill="#CBD5E1" fontSize="10">BNS s.316 Demand for Leased CPE</text>

                  {/* Stage 2 Bottom (Inter-Licensee / Infra) */}
                  <rect x="237" y="145" width="250" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="362" y="168" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">TRACK B: MSO–LCO / OFC INFRA</text>
                  <text x="362" y="188" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">TRAI 21d / MSMED s.15–18</text>
                  <text x="362" y="206" textAnchor="middle" fill="#CBD5E1" fontSize="10">OTDR AT Certificate &amp; STB/ONT Audit</text>
                  <text x="362" y="222" textAnchor="middle" fill="#CBD5E1" fontSize="10">Pre-TDSAT / MSEFC Statutory Demand</text>

                  {/* Arrows 2 -> 3 */}
                  <line x1="487" y1="62" x2="535" y2="100" stroke="#DC2626" strokeWidth="2" />
                  <line x1="487" y1="192" x2="535" y2="155" stroke="#10B981" strokeWidth="2" />
                  <polygon points="532,95 543,105 529,106" fill="#DC2626" />
                  <polygon points="529,149 543,150 532,160" fill="#10B981" />

                  {/* Stage 3 */}
                  <rect x="543" y="55" width="265" height="145" rx="12" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="675" y="82" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="700">STAGE 3: FORUM EXECUTION</text>
                  <text x="675" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Jurisdiction-Accurate Remedies</text>
                  <text x="675" y="128" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">1. Commercial Court / Order 37 CPC</text>
                  <text x="675" y="146" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">2. TDSAT Petition (TRAI Act s.14)</text>
                  <text x="675" y="164" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">3. MSEFC (3x RBI) &amp; NI Act s.138</text>
                  <text x="675" y="182" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">4. BNS s.316 CPE Repossession</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 1 &bull; Proof &amp; Data Safe-Harbour</p>
                  <p className="text-sm font-bold mb-1">BSA s.63 Logs &amp; 7-Day Export Window</p>
                  <p className="text-xs text-slate-300">Lock CAF, AT, CDR &amp; CPE MACs; offer a documented 7-day read-only export window before port suspension.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-red-900/60">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 2A &bull; Enterprise / Cloud / MSP</p>
                  <p className="text-sm font-bold mb-1">Lock-In CapEx, Hardware Lien &amp; BNS s.316</p>
                  <p className="text-xs text-slate-300">Demand unamortized fiber CapEx, enforce Gate-Pass server lien, and issue 7-day CPE return notice.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-emerald-900/60">
                  <p className="text-[11px] font-bold uppercase text-emerald-400 mb-1">Stage 2B &bull; Inter-Licensee &amp; Infra</p>
                  <p className="text-sm font-bold mb-1">TDSAT (TRAI s.14) vs MSEFC / Commercial Court</p>
                  <p className="text-xs text-slate-300">Route MSO–LCO STB swaps to TDSAT and enterprise/OFC/SI claims to Commercial Court or MSEFC.</p>
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
                  4 Sector-Specific Recovery Playbooks (Interactive Explorer)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select your telecom, data center, CPaaS, or MSP profile below to inspect the exact statutory hook, commercial bottleneck, and 3-step recovery protocol.
              </p>

              <TelecomIspHubScenarioTabs />
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
                  Enterprise Postpaid CSV &amp; CPE Hardware Batch Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Enterprise ISPs, regional broadband MSOs, WhatsApp BSPs, and Managed IT providers rarely chase a single defaulter—they carry 40 to 2,500+ overdue enterprise circuits, LCO set-top-box accounts, or unreturned Fortinet/Cisco CPE deployments across multiple circles. Through LegalRecovery.in&rsquo;s{" "}
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
                , telecom CFOs and collections heads can test 1 live notice at ₹999 first and then onboard 10 to 10,000+ accounts mapped to Circuit IDs, Rack IDs, and CPE serial numbers with simultaneous Email, Business WhatsApp, and Speed Post RPAD tracking.
              </p>

              <TelecomIspHubCTA />
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
                  Binding Statutory Mandates: TRAI s.14, DPDP &amp; BNS s.316
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
                  Worked Economics: ILL Lock-In Batch vs ₹62L Colocation Default
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                See how framing claims around unamortized last-mile CapEx, physical rack hardware lien, and serialized CPE return converts stalled telecom write-offs into enforceable recoveries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                    Scenario A &bull; Class-B Enterprise ISP
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    35 Disconnected ILL / MPLS Links (Month 4–8 Lock-In Breach)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>Unamortized Last-Mile Fiber CapEx:</strong> ₹1,45,000 avg / link (₹50.75L)</li>
                    <li>&bull; <strong>Accrued Bandwidth MRC + Unreturned MUX/CPE:</strong> ₹34.25L</li>
                    <li>&bull; <strong>Action:</strong> Bulk CSV dispatch pairing Contract Act s.74 CapEx proof + BNS s.316 CPE serial schedule</li>
                    <li>&bull; <strong>Forum:</strong> Order XXXVII CPC / Commercial Court (avoiding TDSAT dismissal)</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Result: ₹85,00,000 total claim backed by signed CAFs, AT sign-offs &amp; CPE MAC logs.
                  </div>
                </div>

                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Scenario B &bull; Tier-3 Colocation Data Center
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    ₹62,00,000 Rack Space, Power kWh &amp; GPU Cluster Arrears
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>Principal Overdue:</strong> ₹62,00,000 (4 months rack MRC + metered kWh)</li>
                    <li>&bull; <strong>Compliance Step:</strong> 7-day read-only data-export notice under DPDP / IT Act s.43</li>
                    <li>&bull; <strong>Security Leverage:</strong> Contractual Gate-Pass lien on ₹1.4 Cr co-located server racks</li>
                    <li>&bull; <strong>Udyam MSME Interest:</strong> 3x RBI Bank Rate (~19.5% p.a. compounded monthly via{" "}
                      <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] underline font-semibold">
                        MSME Interest Calculator
                      </Link>)
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Result: Hardware security preserved without triggering data-hostage or IT Act s.43 counterclaims.
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
                  Complete IND-18 Directory: All 9 Spokes &amp; Notice Template
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Explore every specialized guide, statutory commentary, and notice workspace in our Telecom, ISP, Data Center, CPaaS &amp; MSP recovery cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_18_SPOKES.filter((s) => s.track === track.key);
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
                  href="/services/vendor-and-invoice-recoveries"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">B2B Invoice Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Vendor &amp; Commercial Invoice Recovery Services
                  </p>
                  <p className="text-xs text-slate-600">
                    End-to-end B2B advocate notices and pre-litigation recovery for enterprise SLAs, hardware deliveries, and infrastructure bills.
                  </p>
                </Link>

                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Summary Suits</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Order XXXVII CPC Summary Suit Money Recovery
                  </p>
                  <p className="text-xs text-slate-600">
                    Fast-track summary decrees on signed CAFs, colocation MSAs, acknowledged invoices, and bounced corporate cheques.
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
                    Upload 10 to 10,000+ defaulting enterprise links, CPaaS accounts, or LCO ledgers in a single tracked wave.
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
                    Compute exact compound interest under MSMED s.16 for Udyam OFC contractors, MSPs, SIs, and CPaaS platforms.
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
                  Frequently Asked Questions: ISP, Data Center &amp; MSP Recovery
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
                  Primary Statutory Authorities &amp; Telecom Portals
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
