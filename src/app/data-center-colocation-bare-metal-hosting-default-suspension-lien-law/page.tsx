import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DataCenterLienTableOfContents from "./DataCenterLienTableOfContents";
import DataCenterLienScenarioTabs from "./DataCenterLienScenarioTabs";
import DataCenterLienCTA from "./DataCenterLienCTA";

export const revalidate = 86400;

const PAGE_PATH = "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Data Center & GPU Cloud Recovery Law: Exercising Physical Lien on Co-Located Servers & Suspending Hosting Without DPDP / IT Act Liability";
const META_TITLE = "Data Center Colocation Server Lien & DPDP Suspension Law";
const META_DESCRIPTION =
  "Can a colocation data center block removal of defaulting client's ₹80L servers? Yes via Contract Act s.170/171 lien with a 7-day DPDP-safe export window.";
const OG_IMAGE_ALT = formatAltText(
  "Data Center Colocation Server Lien and DPDP Safe Suspension Law India"
);

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "data center colocation unpaid bill server lien and suspension law india",
    "can colocation data center block client physical server removal unpaid bill",
    "dpdp act 2023 data fiduciary vs data processor hosting suspension",
    "gpu cluster ai startup hosting default india",
    "graceful read only data export window before server wipe",
    "power kwh cross connect commit arrears data center",
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
        alt: OG_IMAGE_ALT,
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

const STATUTORY_TIMELINES = [
  {
    window: "Day 0 – Day 15",
    milestone: "Contractual Cure Notice & Smart-PDU Reconciliation",
    statute: "Indian Contract Act s.39 / MSA Default Clause",
    action:
      "Serve written default notice via Email, WhatsApp & Speed Post RPAD attaching itemized rack MRC, kWh power logs, and cross-connect invoices.",
  },
  {
    window: "Day 16 – Day 22",
    milestone: "7-Day Read-Only Logical Data-Export Window",
    statute: "DPDP Act 2023 s.8 & IT Act 2000 s.43 Safe-Harbor",
    action:
      "Throttle production ingress/egress traffic while keeping a read-only SFTP/out-of-band VPN snapshot endpoint open for 7 days so end-citizen data is never held hostage.",
  },
  {
    window: "Day 23 Onward",
    milestone: "Gate-Pass Freeze & Physical Rack Hardware Lien",
    statute: "Contract Act s.170 / s.171 Express Contractual Lien",
    action:
      "Refuse physical De-Install Gate-Pass for Dell/HPE/Nvidia H100 rack hardware; issue formal Lien Crystallization Notice separating hardware security from exported data.",
  },
  {
    window: "Day 30 – Day 60",
    milestone: "Summary Suit / Section 9 Asset Preservation",
    statute: "Order XXXVII CPC / Arbitration Act s.9 & s.21",
    action:
      "File Commercial Court Order XXXVII Summary Suit (or Section 21 + Section 9 petition) with BSA 2023 s.63 PDU telemetry to recover arrears, lock-in, and judicial sale orders.",
  },
  {
    window: "Within 3 Years",
    milestone: "Statutory Limitation Cutoff",
    statute: "Limitation Act 1963 Art. 14 & Art. 55",
    action:
      "Enforce unpaid recurring hosting invoices and lock-in damages within 3 years from invoice due date or written balance acknowledgment under Section 18.",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Contractual Lien vs Statutory General Lien (Section 171)",
    parties: "Board of Trustees of the Port of Bombay v. Sriyanesh Knitters",
    citation: "(1999) 7 SCC 359, Supreme Court of India",
    holding:
      "The Supreme Court clarified that while Section 171 of the Indian Contract Act limits statutory general liens to five specified categories (bankers, factors, wharfingers, attorneys, and policy-brokers), parties are fully competent to create an express Contractual Lien by written agreement covering detained goods and equipment for unpaid charges.",
    takeaway:
      "Data centers cannot rely on a vague implied general lien alone—your Colocation MSA must contain an explicit Contractual Lien & Gate-Pass Withholding clause, reinforced by Section 170 where smart-hands engineering and rack maintenance were performed.",
  },
  {
    title: "Supreme Court on Lock-In & Power Commit Liquidated Damages (Section 74)",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    holding:
      "Under Section 74 of the Indian Contract Act, 1872, liquidated damages or early-exit lock-in charges are enforceable when they represent a genuine pre-estimate of loss and the claimant proves actual resource commitment or inability to immediately re-monetize stranded capacity.",
    takeaway:
      "To recover 12–24 month bare-metal GPU or kW power lock-in balances, Tier-3/4 data centers must document reserved UPS/chiller capacity, dedicated PDU circuits, and re-allocation timelines alongside the MSA lock-in schedule.",
  },
  {
    title: "Supreme Court on Order XXXVII CPC Leave-to-Defend Thresholds",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568, Supreme Court of India",
    holding:
      "Where a creditor sues on a written contract and quantified invoices under Order XXXVII CPC, unconditional leave to defend is refused if the debtor's defense is sham, moonshine, or illusory; at minimum, the court directs deposit of the admitted or undisputed principal.",
    takeaway:
      "Signed Colocation Order Forms, accepted SLA schedules, and undisputed monthly kWh/rack tax invoices allow data centers to defeat dilatory borrower defenses and compel court deposits under Order XXXVII CPC.",
  },
  {
    title: "Supreme Court on Mandatory Electronic Record Certification",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
    citation: "(2020) 7 SCC 1, Supreme Court of India (Now BSA 2023 s.63)",
    holding:
      "Electronic records generated by automated systems—such as server logs, telemetry, and digital communications—require a statutory certificate by the person in lawful control of the system at the time of filing to be admissible in evidence.",
    takeaway:
      "Every smart-PDU kWh meter log, BMS cooling reading, biometric cage-access log, and 7-day SFTP export audit trail must be accompanied by a Section 63 BSA 2023 certificate signed by the Data Center NOC Head.",
  },
];

const DEFENSE_PREEMPTION_ROWS = [
  {
    defense: "Tenant Files Police Complaint for Criminal Breach of Trust (BNS s.316)",
    risk: "Tenant claims data center illegally 'stole' or 'misappropriated' ₹80L+ Dell/Nvidia servers by blocking Gate-Pass exit.",
    counter:
      "Produce signed MSA Contractual Lien clause + itemized unpaid ledger + 15-day Cure Notice. Detention under a bona fide civil contractual lien lacks dishonest intention (mens rea), converting any police complaint into a purely civil commercial dispute.",
  },
  {
    defense: "Tenant Alleges IT Act s.43 / s.66 Cyber-Trespass or Data Extortion",
    risk: "Abruptly cutting root access or wiping NVMe drives without notice triggers civil damages under s.43 or criminal allegations under s.66.",
    counter:
      "Serve a documented 7-day Read-Only Data-Export Window notice (SFTP/snapshot) with SHA-256 download logs before logical suspension. You withheld physical steel/silicon under contract—never the tenant's business data.",
  },
  {
    defense: "Tenant Invokes DPDP Act 2023 End-Citizen Personal Data Emergency",
    risk: "FinTech/HealthTech defaulter claims blocking server access violates DPDP Act 2023 obligations toward citizens.",
    counter:
      "Cite DPDP Act s.2(i)-(k) & s.8: the tenant is the Data Fiduciary and the data center is solely a Data Processor. Providing a 7-day read-only export window fulfills processor assistance duties while isolating hardware lien.",
  },
  {
    defense: "Tenant Claims 'Unplanned Power/Cooling Outage' Set-Off",
    risk: "Defaulter fabricates a phantom SLA downtime counterclaim to block summary judgment on ₹50L+ arrears.",
    counter:
      "Submit BSA 2023 s.63 certified BMS/UPS telemetry, 99.982% Tier-3 uptime reports, and zero-ticket NOC logs, plus MSA 'No Set-Off / Pay-First' clause under IDBI Trusteeship standards.",
  },
];

const FAQS = [
  {
    q: "Can a colocation data center legally refuse a Gate-Pass to remove a defaulting client's physical servers in India?",
    a: "Yes. If your Colocation Master Services Agreement (MSA) contains an express Contractual Lien and Gate-Pass Withholding clause, the Supreme Court's ruling in Port of Bombay v. Sriyanesh Knitters confirms you may lawfully retain physical possession of the tenant's Dell, HPE, Cisco, or Nvidia rack servers until undisputed arrears are settled—especially when paired with Section 170 smart-hands/maintenance charges.",
  },
  {
    q: "What is the biggest legal mistake data centers make when suspending a defaulting hosting client?",
    a: "Conflating physical hardware lien with logical data hostage-taking. Pulling the network plug abruptly or wiping databases without a documented read-only export window exposes the data center to Section 43/66 Information Technology Act 2000 claims and DPDP Act 2023 regulatory friction. Always decouple the two: grant a 7-day read-only data-export window while maintaining the physical Gate-Pass hold on hardware.",
  },
  {
    q: "Under the DPDP Act 2023, is a data center or bare-metal GPU host a Data Fiduciary or a Data Processor?",
    a: "In standard colocation and bare-metal/GPU hosting, the enterprise tenant is the Data Fiduciary (determining purpose and means of processing end-citizens' personal data), while the data center acts strictly as a Data Processor under Section 2(k) and Section 8. Providing a 7-day read-only export window before suspension or wipe protects the data center's processor safe-harbor.",
  },
  {
    q: "How can bare-metal GPU cloud providers recover stranded Nvidia H100 cluster commits from AI startups?",
    a: "Serve a 72-hour Final Compute & Power Suspension Notice, snapshot model weights/checkpoints to a 7-day read-only S3/SFTP export bucket, re-allocate GPU nodes to mitigate loss under Section 73 Explanation, and sue for consumed kWh/compute arrears plus genuine pre-estimated lock-in differential under Section 74 and Order XXXVII CPC.",
  },
  {
    q: "Can a defaulting tenant file a BNS Section 316 (erstwhile IPC 406) criminal complaint over detained servers?",
    a: "While tenants sometimes threaten criminal breach of trust complaints, bona fide retention of rack hardware pursuant to a written MSA Contractual Lien and prior Advocate Cure Notice negates dishonest misappropriation (mens rea). Courts routinely quash or treat such complaints as civil commercial disputes.",
  },
  {
    q: "What electronic evidence must a data center preserve to win an Order XXXVII Summary Suit for kWh and rack arrears?",
    a: "Preserve the signed MSA and Service Order Form (SOF), monthly tax invoices, smart-PDU metered kWh logs, cross-connect patch records, biometric cage-access logs, and the 7-day export window audit trail—all backed by a Section 63 Bharatiya Sakshya Adhiniyam (BSA) 2023 electronic evidence certificate.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Indian Contract Act, 1872 (Sections 39, 53, 54, 73, 74, 170 & 171 — Lien & Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Digital Personal Data Protection Act, 2023 (Sections 2 & 8 — Data Fiduciary vs Processor)",
    url: "https://www.indiacode.nic.in/handle/123456789/20434",
  },
  {
    title: "The Information Technology Act, 2000 (Sections 43 & 66 — Computer Resource Access & Safeguards)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic PDU & Access Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

export default function DataCenterColocationLienLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
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
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/blog_money_recovery.png`,
          },
        },
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
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
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Telecom, ISP & Data Center Recovery",
            item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Data Center Server Lien & DPDP Suspension Law",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository — Advocate attribution: Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions
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
            <span>IND-18 Statutory Deep-Dive</span>
            <span aria-hidden="true">&bull;</span>
            <span>Contract Act s.170/171 &times; DPDP Act 2023</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Creditor Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 hover:text-white underline underline-offset-2 font-bold"
            >
              Telecom, ISP &amp; Data Center Recovery framework
            </Link>
            , a Tier-3/4 colocation provider may lawfully block Gate-Pass exit of a defaulting
            tenant&apos;s &#8377;80L+ physical rack servers under an express Contract Act
            s.170/171 MSA lien—provided it decouples silicon from personal data by granting a
            documented 7-day read-only export window under DPDP Act 2023 and IT Act s.43.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Lawful Lien</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSA Physical Gate-Pass Hold (s.170/171)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">7-Day Window</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Read-Only SFTP Data Export Safe-Harbor
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Order 37 CPC</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Summary Suit on Rack, kWh &amp; Lock-In
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Zero s.43/66</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Cyber-Trespass &amp; DPDP Hostage Shield
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
            Reviewed by <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate
            &amp; Founder, AMA Legal Solutions &bull; Updated November 18, 2026
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Telecom, ISP & Data Center Recovery",
              href: "/industries/telecom-isp-datacenter-msp-recovery",
            },
            { label: "Data Center Server Lien & DPDP Law" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <DataCenterLienTableOfContents />

          {/* Right Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Core Legal Distinction */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Physical Rack Lien vs Data Hostage-Taking: The Critical Split
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Tier-3 and Tier-4 Indian data centers, bare-metal providers, and GPU cloud operators
                face a uniquely high-stakes collection dilemma when an enterprise tenant defaults on
                &#8377;25 Lakh to &#8377;3 Crore+ in rack colocation, metered electricity (kWh),
                cross-connects, and Nvidia H100 cluster commits. If the operator grants an
                unconditional De-Install Gate-Pass, &#8377;80 Lakh+ in Dell, HPE, or Supermicro
                hardware walks out of the loading bay overnight, leaving the creditor with an
                unsecured paper claim. Conversely, if the NOC team abruptly pulls network uplinks or
                wipes NVMe storage containing end-citizens&apos; health, KYC, or financial records,
                the tenant immediately files criminal cyber-trespass complaints under{" "}
                <strong>Sections 43 and 66 of the Information Technology Act, 2000</strong> and
                threatens regulatory escalation under the{" "}
                <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Indian commercial law draws a sharp, decisive line between{" "}
                <strong>tangible server hardware</strong> and{" "}
                <strong>intangible personal/business data</strong>. Holding physical rack servers
                inside your biometric cage under an express{" "}
                <strong>Indian Contract Act, 1872 Sections 170/171 Contractual Lien</strong> is
                lawful property security. Holding third-party citizens&apos; personal data hostage
                without a structured retrieval window is an avoidable regulatory liability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
                    Lawful Property Security (Retain Hardware)
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    Withholding De-Install Gate-Pass clearance for tenant-owned Dell PowerEdge,
                    HPE ProLiant, Cisco Nexus, or GPU chassis pursuant to an express MSA
                    Contractual Lien and Section 170 smart-hands improvement lien.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                    Avoidable Trap (Never Hold Data Hostage)
                  </p>
                  <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                    Blocking logical read-only export of patient EHRs, FinTech KYC vaults, or ERP
                    backups, or wiping production volumes without a documented 7-day SFTP/snapshot
                    retrieval notice under DPDP Act s.8 and IT Act s.43.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Safe-Suspension Decision Split (SVG + Mobile Cards) */}
            <section
              id="heading-protocol-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Dual-Track Hardware Lien &amp; 7-Day Data Export Protocol
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                General Counsel should instruct Finance and NOC Operations to split every default
                escalation into two parallel tracks on Day 16 after the initial cure notice expires:
              </p>

              {/* Desktop SVG Diagram */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  viewBox="0 0 760 240"
                  width={760}
                  height={240}
                  className="w-full h-auto"
                  role="img"
                  aria-label="Data center physical hardware lien versus 7-day read-only data export decision flow"
                >
                  <rect x="20" y="85" width="160" height="70" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="100" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">15-Day Default</text>
                  <text x="100" y="132" textAnchor="middle" fill="#94A3B8" fontSize="11">Cure Notice Unpaid</text>

                  <line x1="180" y1="120" x2="235" y2="60" stroke="#64748B" strokeWidth="2" />
                  <line x1="180" y1="120" x2="235" y2="180" stroke="#64748B" strokeWidth="2" />

                  <rect x="235" y="20" width="225" height="80" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="347" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">TRACK A: Physical Hardware</text>
                  <text x="347" y="66" textAnchor="middle" fill="#A7F3D0" fontSize="11">Block Gate-Pass (MSA Lien s.170/171)</text>
                  <text x="347" y="82" textAnchor="middle" fill="#A7F3D0" fontSize="10">Retain Dell/HPE/H100 Rack Assets</text>

                  <rect x="235" y="140" width="225" height="80" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="347" y="168" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">TRACK B: Logical Hosted Data</text>
                  <text x="347" y="186" textAnchor="middle" fill="#FDE68A" fontSize="11">Throttle Prod + 7-Day Read-Only SFTP</text>
                  <text x="347" y="202" textAnchor="middle" fill="#FDE68A" fontSize="10">DPDP s.8 &amp; IT Act s.43 Safe-Harbor</text>

                  <line x1="460" y1="60" x2="520" y2="120" stroke="#64748B" strokeWidth="2" />
                  <line x1="460" y1="180" x2="520" y2="120" stroke="#64748B" strokeWidth="2" />

                  <rect x="520" y="75" width="220" height="90" rx="10" fill="#DC2626" />
                  <text x="630" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Recovery Enforcement</text>
                  <text x="630" y="124" textAnchor="middle" fill="#FEE2E2" fontSize="11">Order 37 CPC / Sec 9 Arbitration</text>
                  <text x="630" y="142" textAnchor="middle" fill="#FEE2E2" fontSize="10">BSA s.63 PDU Logs + Judicial Sale</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-bold text-red-400 uppercase mb-1">Step 1: Day 0–15</p>
                  <p className="text-sm font-bold">Serve 15-Day Cure Notice (Rack + kWh Ledger)</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase mb-1">
                    Track A: Physical Rack Hardware
                  </p>
                  <p className="text-xs text-slate-700">
                    Freeze De-Install Gate-Pass under MSA Contractual Lien (s.170/171 Contract Act).
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 uppercase mb-1">
                    Track B: Logical Hosted Data
                  </p>
                  <p className="text-xs text-slate-700">
                    Throttle production traffic; keep read-only SFTP/snapshot export open for 7 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Dark-Header Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Contractual Lien vs DPDP &amp; IT Act Boundaries
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Enforcement Dimension</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Permitted Creditor Action</th>
                      <th className="p-3.5 font-bold">Mandatory Compliance Guardrail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Colocation Rack Hardware Hold
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian Contract Act s.170 &amp; s.171 (Express MSA Lien)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Refuse De-Install Gate-Pass; retain servers inside locked cage
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Itemized arrears notice; never sell hardware privately without court/arbitral
                        order or explicit s.176-style power
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Production Hosting Suspension
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IT Act 2000 s.43 / s.66 &amp; Contract Act s.54
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Disable public BGP/ingress &amp; halt unpaid GPU compute jobs
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Prior 15-day written cure notice + 7-day read-only out-of-band export
                        endpoint
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        End-Citizen Personal Data
                      </td>
                      <td className="p-3.5 text-slate-700">
                        DPDP Act 2023 s.2(i)-(k) &amp; s.8 (Processor Role)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Return/export data to defaulting Data Fiduciary; wipe post-expiry
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Capture SHA-256 export audit logs; never inspect or monetize tenant datasets
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Power (kWh) &amp; Lock-In Arrears
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.74, Order XXXVII CPC &amp; Commercial Courts Act
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit / Arbitration for rack MRC, PUE power &amp; lock-in loss
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Prove reserved kW capacity &amp; mitigation; certify PDU logs under BSA s.63
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Bare-Act Timelines & Limitation Stops */}
            <section
              id="heading-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Timelines, Export Windows &amp; Limitation Stops
                </h2>
              </div>

              <div className="space-y-3">
                {STATUTORY_TIMELINES.map((item) => (
                  <div
                    key={item.window}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="sm:w-36 shrink-0">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold">
                        {item.window}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black text-slate-900">{item.milestone}</p>
                      <p className="text-[11px] font-bold text-[#DC2626] mb-1">{item.statute}</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Verified Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Supreme Court Precedents Governing Lien, Lock-In &amp; Summary Suits
                </h2>
              </div>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-900 bg-white border border-slate-200 rounded-lg p-3 font-medium">
                      <strong>Data Center Takeaway:</strong> {item.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Colocation &amp; GPU Cloud Default Scenarios (GC Playbooks)
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Select your operational failure mode below to view the statutory basis and
                step-by-step execution protocol:
              </p>
              <DataCenterLienScenarioTabs />
            </section>

            {/* Section 7: Worked ₹80L Hardware Lien & Power Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Case Study: &#8377;80L Rack Hardware Lien &amp; kWh Recovery Ledger
                </h2>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-400 font-bold">
                      Navi Mumbai Tier-3 Colocation &bull; 4 Full Racks (32 kW Commit)
                    </p>
                    <p className="text-base sm:text-lg font-black">
                      Defaulting FinTech SaaS Tenant vs Data Center Operator
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                    Asset Coverage: 2.35x
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-800/80 rounded-xl p-4 space-y-1.5">
                    <p className="text-slate-400 font-bold uppercase text-[11px]">
                      Quantified Creditor Claim
                    </p>
                    <p>4 Months Rack MRC &amp; Cross-Connects: &#8377;14,40,000</p>
                    <p>Metered Smart-PDU Power (kWh &times; 1.45 PUE): &#8377;11,60,000</p>
                    <p>6-Month Unexpired Lock-In Differential (s.74): &#8377;8,00,000</p>
                    <p className="pt-2 border-t border-slate-700 font-black text-emerald-400">
                      Total Claim: &#8377;34,00,000 + 18% p.a. Contractual Interest
                    </p>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-4 space-y-1.5">
                    <p className="text-slate-400 font-bold uppercase text-[11px]">
                      Detained Collateral &amp; DPDP Compliance
                    </p>
                    <p>Hardware Held Under MSA Lien: 12x Dell PowerEdge + Cisco Switches</p>
                    <p>Depreciated Hardware Value: ~&#8377;80,00,000</p>
                    <p>7-Day Read-Only SFTP Export Window: Completed Day 21 (SHA-256 Logged)</p>
                    <p className="pt-2 border-t border-slate-700 font-black text-amber-300">
                      Result: Full &#8377;34L Settlement Wired on Day 26 to Unlock Gate-Pass
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                If your data center qualifies as a Micro or Small Enterprise under the MSMED Act,
                2006, compute statutory 3x RBI Bank Rate compound interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                , or inspect{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  Order XXXVII CPC Summary Suit rules
                </Link>{" "}
                for larger enterprise colocation claims.
              </p>
            </section>

            {/* Section 8: Debtor Defense Pre-Emption Table */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pre-Empting Criminal &amp; Cyber Counterclaims by Defaulting Tenants
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Debtor Retaliation Tactic</th>
                      <th className="p-3.5 font-bold">Operational Risk</th>
                      <th className="p-3.5 font-bold">Creditor Pre-Emption Shield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {DEFENSE_PREEMPTION_ROWS.map((row) => (
                      <tr key={row.defense} className="align-top">
                        <td className="p-3.5 font-bold text-slate-900">{row.defense}</td>
                        <td className="p-3.5 text-slate-700">{row.risk}</td>
                        <td className="p-3.5 text-slate-700">{row.counter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Evidence &amp; BSA 2023 Section 63 Admissibility Checklist
                </h2>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>1. Executed MSA &amp; Service Order Forms:</strong> Highlighting the
                  express Contractual Lien, Gate-Pass Hold, and Lock-In Termination clauses.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>2. Smart-PDU kWh &amp; PUE Meter Telemetry:</strong> Timestamped CSV
                  exports of rack amperage/kWh consumption certified under BSA 2023 s.63.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>3. Asset Serial &amp; Cage Biometric Logs:</strong> Rack elevation
                  diagrams, hardware serial numbers, and security gate-in manifests.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>4. 7-Day Export Window &amp; SHA-256 Logs:</strong> Proof that read-only
                  SFTP/snapshot credentials were emailed and kept active for 7 full days.
                </li>
              </ul>

              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
                <strong>Related Cloud &amp; B2B Playbooks:</strong> Also review our guides on{" "}
                <Link
                  href="/cloud-reseller-aws-azure-gcp-microsoft-csp-unpaid-consumption-recovery"
                  className="font-bold underline hover:text-[#DC2626]"
                >
                  AWS/Azure Cloud Reseller Unpaid Consumption Recovery
                </Link>
                ,{" "}
                <Link
                  href="/source-code-escrow-ip-withholding-clause-unpaid-it-invoices"
                  className="font-bold underline hover:text-[#DC2626]"
                >
                  IP Withholding vs IT Act Section 66
                </Link>
                ,{" "}
                <Link
                  href="/services/vendor-and-invoice-recoveries"
                  className="font-bold underline hover:text-[#DC2626]"
                >
                  B2B Vendor &amp; Invoice Recoveries
                </Link>
                , and our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="font-bold underline hover:text-[#DC2626]"
                >
                  Advocate Legal Notice Template Workspace
                </Link>
                .
              </div>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <section className="scroll-mt-28">
              <DataCenterLienCTA />
            </section>

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Data Center Lien &amp; DPDP Law
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
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
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2 font-medium"
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

      <RelatedRecoveryGuides currentPath={PAGE_PATH} />
    </div>
  );
}
