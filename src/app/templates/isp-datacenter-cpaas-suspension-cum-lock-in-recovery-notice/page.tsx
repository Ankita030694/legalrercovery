import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import IspTelecomNoticeCTA from "./IspTelecomNoticeCTA";
import IspTelecomNoticeTOC from "./IspTelecomNoticeTOC";
import IspTelecomNoticeWorkspace from "./IspTelecomNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/isp-datacenter-cpaas-suspension-cum-lock-in-recovery-notice";

const EXACT_H1 =
  "Telecom, ISP & Data Center Legal Notice Template: Bandwidth/Rack Arrears, 7-Day Data-Export Suspension Warning, Lock-In CapEx & CPE Return";

const EXACT_TITLE = "ISP, Data Center & CPaaS Suspension Legal Notice Format";

const EXACT_DESCRIPTION =
  "Downloadable B2B telecom & cloud notice format with Circuit/Rack ID schedule, DPDP 7-day data-export suspension warning & BNS s.316 CPE return.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: EXACT_TITLE,
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
    title: "Commercial Courts Act, 2015 — Section 2(1)(c)(xviii) & Section 12A (Commercial Service Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Telecom Regulatory Authority of India (TRAI) Act, 1997 — Sections 14 & 15 (TDSAT vs Civil Court)",
    url: "https://www.indiacode.nic.in/handle/123456789/1964",
  },
  {
    title: "Digital Personal Data Protection Act, 2023 — Section 8 (Data Fiduciary & Processor Obligations)",
    url: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
  },
  {
    title: "Indian Contract Act, 1872 — Section 74 (Liquidated Damages) & Section 170 (Bailee's Particular Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 — Section 316 (Criminal Breach of Trust for Entrusted CPE)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of CDRs, NetFlow & kWh Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Information Technology Act, 2000 — Section 43 (Safe-Harbor vs Unlawful Data Disruption)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
];

const CASE_CITATIONS = [
  {
    title: "Genuine Pre-Estimate Required for Telecom Lock-In CapEx Claims",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136 (Supreme Court of India)",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A commercial contracting party sought forfeiture of an entire contractual sum upon breach without proving actual loss or establishing that the stipulated amount represented a genuine pre-estimate of damages.",
    holding:
      "The Supreme Court clarified under Section 74 of the Indian Contract Act, 1872 that where a sum is named as liquidated damages, reasonable compensation not exceeding the named amount may be awarded, and the claimant must prove actual loss or demonstrate that the lock-in formula reflects a genuine pre-estimate of sunk capital expenditure.",
    takeaway:
      "In ILL and colocation notices, never demand arbitrary '100% remaining contract value' without itemizing waived installation OTCs, last-mile fiber trenching, or dedicated rack provisioning costs.",
  },
  {
    title: "Pre-Institution Mediation & Urgent Interim Relief in Commercial Suits",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1 (Supreme Court of India)",
    date: "Judgment Dated 17 August 2022",
    facts:
      "A commercial plaintiff instituted a recovery suit without completing mandatory Section 12A pre-institution mediation under the Commercial Courts Act, 2015.",
    holding:
      "The Supreme Court held Section 12A mandatory for commercial suits not contemplating urgent interim relief, while preserving immediate court access where urgent injunction or hardware attachment is genuinely sought.",
    takeaway:
      "Serving a 15-day statutory demand notice before filing either starts the pre-litigation record cleanly or supports urgent Order XXXIX / Order XXXVIII relief if the customer is stripping CPE hardware.",
  },
  {
    title: "Pre-Existing Dispute Threshold Against Postpaid Telecom & Cloud Invoices",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353 (Supreme Court of India)",
    date: "Judgment Dated 21 September 2017",
    facts:
      "A technology vendor served an IBC Section 8 demand notice for unpaid invoices; the corporate debtor alleged prior quality and SLA deficiencies.",
    holding:
      "The Supreme Court ruled that a 'pre-existing dispute' must be plausible, contemporaneous, and supported by evidence predating the demand notice—not a belated excuse raised after default.",
    takeaway:
      "Attaching the signed Acceptance Testing (AT) report and SLA uptime logs in your notice forecloses post-facto 'packet loss' or 'latency' excuses.",
  },
  {
    title: "Commercial Contract Damages Where Precise Loss Quantification Is Complex",
    parties: "Oil & Natural Gas Corporation Ltd. v. Saw Pipes Ltd.",
    citation: "(2003) 5 SCC 705 (Supreme Court of India)",
    date: "Judgment Dated 17 April 2003",
    facts:
      "A party challenged enforcement of a liquidated damages clause in an infrastructure supply contract arguing difficulty in proving exact daily loss.",
    holding:
      "The Supreme Court held that where parties agree to a genuine pre-estimate of damages in a commercial contract where exact loss is difficult to compute, courts should enforce the stipulated sum unless shown to be penal or unconscionable.",
    takeaway:
      "Tie your lock-in CapEx schedule to amortized hardware, cross-connect, and reserved port capacity per month so it qualifies as a genuine pre-estimate.",
  },
];

const FAQS = [
  {
    q: "Can an ISP or Data Center immediately shut down a defaulting customer's port or server without notice?",
    a: "No. Abruptly cutting off live enterprise traffic or locking out tenant data without prior written notice exposes the provider to counterclaims under Section 43 of the Information Technology Act, 2000 and Section 8 of the DPDP Act, 2023. Always serve a formal 7-day Data-Export & Suspension Warning first so the customer has a documented window to migrate backups.",
  },
  {
    q: "What technical fields must an ISP or colocation legal notice include to hold up in Commercial Court?",
    a: "A generic invoice reminder fails because enterprise debtors deny provisioning. Your notice must schedule the Customer Application Form (CAF) number, Circuit ID or Rack ID, Acceptance Testing (AT) / commissioning date, lock-in expiry date, and exact CPE serial numbers and MAC addresses.",
  },
  {
    q: "Is a telecom lock-in early termination fee enforceable under Section 74 of the Contract Act?",
    a: "Yes, provided it is framed as recovery of unamortized sunk CapEx—such as waived One-Time Charges (OTC), last-mile optical fiber trenching, or dedicated power provisioning—rather than a pure penalty. Itemize the amortized CapEx per remaining lock-in month to satisfy Kailash Nath Associates v. DDA.",
  },
  {
    q: "How do Data Centers exercise a lien over tenant servers without violating the DPDP Act?",
    a: "Separate physical hardware from logical data. Grant a documented 7-day remote export window (or temporary read-only port access) for the tenant to retrieve personal/business data, and simultaneously assert a bailee's particular lien under Section 170 of the Indian Contract Act, 1872 over the physical servers until rack and kWh arrears are cleared.",
  },
  {
    q: "Can we file a criminal complaint under BNS Section 316 for unreturned routers, ONTs, or firewalls?",
    a: "Yes. When Customer Premises Equipment (CPE) such as Cisco routers, Nokia MUX units, or managed firewalls is entrusted strictly for service use under a CAF/MSA, refusing to return it after termination constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 406 IPC).",
  },
  {
    q: "Should our enterprise default notice go to TDSAT or Commercial Court?",
    a: "Under Sections 14 and 15 of the TRAI Act, 1997, TDSAT has exclusive jurisdiction over disputes between DoT licensees (e.g., ISP-to-telco interconnect, MSO-to-LCO). However, B2B recovery from an end-enterprise subscriber (corporate ILL, colocation tenant, or CPaaS enterprise client) lies before the Commercial Court (Order XXXVII CPC) or MSME Samadhaan.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_ATTRIBUTION = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export default function IspDataCenterNoticeTemplatePage() {
  const canonicalUrl = `${SITE_URL}${PAGE_PATH}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: {
      "@type": "Person",
      name: REVIEWER_ATTRIBUTION.name,
      jobTitle: REVIEWER_ATTRIBUTION.role,
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
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const digitalDocumentSchema = {
    "@context": "https://schema.org",
    "@type": ["DigitalDocument", "CreativeWork"],
    name: EXACT_TITLE,
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: canonicalUrl,
    encodingFormat: "text/html",
    license: `${SITE_URL}/terms`,
    creator: {
      "@type": "Organization",
      name: "LegalRecovery.in",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
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
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Telecom, ISP & Data Center Recovery",
        item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ISP, Data Center & CPaaS Notice",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, digitalDocumentSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-18 P1 Template</span>
            <span>&bull;</span>
            <span>ISP, Data Center, CPaaS &amp; MSP</span>
            <span>&bull;</span>
            <span>Fact-Verified</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Statutory Summary with parent hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Telecom, ISP &amp; Data Center Recovery Playbook
            </Link>
            , an enforceable notice must pair CAF/Circuit IDs and Acceptance Testing dates with a DPDP-safe 7-day data-export window before port shutdown, Contract Act s.74 lock-in CapEx schedules, s.170 rack lien rights, and BNS s.316 CPE return demands.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">7 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">DPDP Safe-Harbor Data Export Window</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.74 / s.170</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Lock-In CapEx &amp; Rack Hardware Lien</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Criminal Breach for Unreturned CPE</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400">CDR, NetFlow &amp; kWh Log Admissibility</p>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-400">
            Legal Review: <strong className="text-slate-200">{REVIEWER_ATTRIBUTION.name}</strong> ({REVIEWER_ATTRIBUTION.role})
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Telecom, ISP & Data Center Recovery", href: "/industries/telecom-isp-datacenter-msp-recovery" },
            { label: "ISP, Data Center & CPaaS Notice" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <IspTelecomNoticeTOC />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-telecom-notice-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Generic Demand Letters Fail in Telecom, Cloud &amp; CPaaS Defaults
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Standard commercial dunning letters routinely collapse when deployed by Enterprise ISPs, Tier-III/IV Data Centers, or CPaaS aggregators. Corporate defaulters exploit three sector-specific loopholes: denying that the circuit or rack was ever commissioned, alleging unlawful data hostage-taking under the Digital Personal Data Protection Act, 2023 (DPDP) or Information Technology Act, 2000 Section 43 when ports are suspended, and retaining high-value Customer Premises Equipment (CPE) such as Cisco routers, Nokia MUX units, or managed firewalls.
                </p>
                <p>
                  To convert an overdue bandwidth or colocation ledger into a summary decree under{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Order XXXVII CPC Summary Suits
                  </Link>
                  , your legal notice must lock in the exact technical identifiers: the signed Customer Application Form (CAF), Circuit ID or Rack ID, Acceptance Testing (AT) sign-off date, lock-in expiry date, and CPE serial/MAC schedule.
                </p>
              </div>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section
              id="heading-notice-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive ISP, Data Center &amp; CPaaS Legal Notice Workspace
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Select your vertical preset below, customize the CAF, Circuit/Rack ID, AT date, and CPE serial numbers, and toggle the statutory protective clauses to generate an advocate-structured demand notice ready for Speed Post RPAD and registered email dispatch.
              </p>
              <IspTelecomNoticeWorkspace />
            </section>

            {/* Section 3: 7-Day DPDP Safe Suspension */}
            <section
              id="heading-dpdp-suspension-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  DPDP-Safe 7-Day Data-Export &amp; Bandwidth Suspension Protocol
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Cutting off live BGP routing, bare-metal root access, or WhatsApp BSP API keys without a documented data-migration window invites criminal and civil counterclaims for wrongful disruption. Follow this four-stage safe-harbor sequence:
              </p>

              {/* Desktop SVG Workflow */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4">
                <svg
                  viewBox="0 0 820 140"
                  width={820}
                  height={140}
                  className="w-full h-auto"
                  role="img"
                  aria-label="Four-stage DPDP-safe suspension and recovery workflow"
                >
                  <rect x="10" y="20" width="175" height="96" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="24" y="46" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 &bull; DAY 1</text>
                  <text x="24" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Serve Notice +</text>
                  <text x="24" y="86" fill="#CBD5E1" fontSize="11">7-Day Export Window</text>
                  <text x="24" y="102" fill="#94A3B8" fontSize="10">Email + RPAD + WA</text>

                  <line x1="185" y1="68" x2="215" y2="68" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="215" y="20" width="175" height="96" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="229" y="46" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 2 &bull; DAYS 2-7</text>
                  <text x="229" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Open Backup Path</text>
                  <text x="229" y="86" fill="#CBD5E1" fontSize="11">Read-Only / SFTP Access</text>
                  <text x="229" y="102" fill="#94A3B8" fontSize="10">DPDP s.8 Safe Harbor</text>

                  <line x1="390" y1="68" x2="420" y2="68" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="420" y="20" width="175" height="96" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="434" y="46" fill="#34D399" fontSize="11" fontWeight="700">STAGE 3 &bull; DAY 8</text>
                  <text x="434" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Port / API Shutdown</text>
                  <text x="434" y="86" fill="#CBD5E1" fontSize="11">BGP &amp; Trunk Suspension</text>
                  <text x="434" y="102" fill="#94A3B8" fontSize="10">Zero IT Act s.43 Risk</text>

                  <line x1="595" y1="68" x2="625" y2="68" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="625" y="20" width="185" height="96" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="639" y="46" fill="#FCA5A5" fontSize="11" fontWeight="700">STAGE 4 &bull; DAY 15+</text>
                  <text x="639" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Suit + Lien + BNS 316</text>
                  <text x="639" y="86" fill="#FEE2E2" fontSize="11">Order 37 / s.170 / CPE</text>
                  <text x="639" y="102" fill="#FECACA" fontSize="10">BSA s.63 Log Bundle</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  { step: "Stage 1 (Day 1)", title: "Serve Notice + 7-Day Export Window", desc: "Dispatch via Speed Post RPAD, registered email, and WhatsApp." },
                  { step: "Stage 2 (Days 2-7)", title: "Open Backup / SFTP Path", desc: "Preserve DPDP s.8 safe harbor by allowing logical data export." },
                  { step: "Stage 3 (Day 8)", title: "Lawful Port / API Suspension", desc: "Shut down BGP routing, SIP trunks, or WABA keys post-expiry." },
                  { step: "Stage 4 (Day 15+)", title: "Suit + s.170 Lien + BNS s.316", desc: "Escalate for Order 37 summary recovery and CPE return." },
                ].map((card) => (
                  <div key={card.step} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">{card.step}</span>
                    <p className="text-sm font-bold mt-1">{card.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Lock-In CapEx Matrix */}
            <section
              id="heading-lock-in-capex-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Contract Act s.74 Lock-In CapEx &amp; Waived OTC Recovery Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <em>Kailash Nath Associates v. DDA</em>, Indian courts strike down windfall &ldquo;100% remaining contract value&rdquo; penalties unless linked to actual sunk CapEx. Structure your notice schedule around verifiable capital outlays:
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Telecom / Cloud Segment</th>
                      <th className="p-3.5 font-bold">Sunk CapEx / Waived OTC</th>
                      <th className="p-3.5 font-bold">Enforceable s.74 Formula</th>
                      <th className="p-3.5 font-bold">Deep-Dive Guide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">ILL / MPLS / SD-WAN</td>
                      <td className="p-3.5 text-slate-700">Last-mile fiber trenching, municipal RoW &amp; waived OTC</td>
                      <td className="p-3.5 text-slate-700">Unamortized CapEx + minimum port commitment</td>
                      <td className="p-3.5">
                        <Link
                          href="/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp"
                          className="text-[#DC2626] font-semibold hover:underline"
                        >
                          ILL Lock-In Guide &rarr;
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Colocation &amp; Bare-Metal</td>
                      <td className="p-3.5 text-slate-700">Custom cage fabrication, A+B PDU &amp; cross-connects</td>
                      <td className="p-3.5 text-slate-700">Pro-rata rack fit-out + reserved kW capacity</td>
                      <td className="p-3.5">
                        <Link
                          href="/data-center-colocation-bare-metal-hosting-default-suspension-lien-law"
                          className="text-[#DC2626] font-semibold hover:underline"
                        >
                          Colocation Lien Guide &rarr;
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">CPaaS &amp; WhatsApp BSP</td>
                      <td className="p-3.5 text-slate-700">Dedicated WABA onboarding, DLT header &amp; Meta pre-buys</td>
                      <td className="p-3.5 text-slate-700">Unconsumed minimum monthly commitment (MMC)</td>
                      <td className="p-3.5">
                        <Link
                          href="/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery"
                          className="text-[#DC2626] font-semibold hover:underline"
                        >
                          CPaaS Recovery Guide &rarr;
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: BNS s.316 & s.170 Lien */}
            <section
              id="heading-cpe-bns316-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BNS s.316 Criminal Breach of Trust &amp; s.170 Rack Hardware Lien
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    ISP / MSP-Owned CPE
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                    BNS Section 316 Hardware Recovery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Routers, optical line terminals (OLTs), MUX chassis, and managed firewalls remain the ISP&apos;s property under bailment. Listing exact serial numbers and MAC addresses in the notice converts wrongful retention after 7 days into actionable Criminal Breach of Trust under BNS s.316.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    Tenant-Owned Servers
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                    Contract Act s.170 Particular Lien
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Where a colocation tenant owns the servers inside your cage, Section 170 of the Indian Contract Act, 1872 grants a statutory bailee lien over physical hardware for unpaid rack, power, and cooling charges—provided logical data export was offered first.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 Technical Schedule */}
            <section
              id="heading-bsa63-technical-schedule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Technical Annexure: CAF, AT Report, CDR &amp; kWh Logs
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Every electronic billing record cited in your notice should be preserved with a Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA) hash-verified certificate signed by your NOC/billing head:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">1. Signed CAF / MSA &amp; Purchase Order</strong>
                  Establishes agreed credit period, lock-in tenure, and interest rate.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">2. Acceptance Testing (AT) &amp; Go-Live Mail</strong>
                  Proves bandwidth/rack handover and defeats &ldquo;never commissioned&rdquo; defenses.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">3. NetFlow / CDR / Webhook / kWh Logs</strong>
                  Demonstrates continuous consumption and metered burst volume.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">4. CPE Delivery Challan &amp; MAC Inventory</strong>
                  Essential proof of entrustment for BNS s.316 hardware recovery.
                </li>
              </ul>
            </section>

            {/* Section 7: Worked Ledger */}
            <section
              id="heading-worked-ill-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked ₹38.40 Lakh ILL Lock-In, CPE &amp; Bandwidth Arrears Ledger
                </h2>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-300">Overdue Monthly Bandwidth Invoices (3 Months @ ₹4.86L)</span>
                  <span className="font-bold text-white">₹14,60,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-300">Unamortized Lock-In Fiber CapEx &amp; Waived OTC (24 Mos Remaining)</span>
                  <span className="font-bold text-white">₹19,00,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-300">Unreturned Cisco ISR Router + Nokia MUX Replacement Value</span>
                  <span className="font-bold text-amber-400">₹4,80,000</span>
                </div>
                <div className="flex justify-between pt-1 text-base font-black">
                  <span className="text-emerald-400">Total Quantified Notice Demand (+ 21.75% MSME Interest)</span>
                  <span className="text-emerald-400">₹38,40,000</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Compute exact 3x RBI statutory interest on your overdue invoices using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Binding Precedents */}
            <section
              id="heading-telecom-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Binding Supreme Court &amp; High Court Precedents for Telecom Creditors
                </h2>
              </div>
              <div className="space-y-4">
                {CASE_CITATIONS.map((c) => (
                  <div key={c.parties} className="border border-slate-200 rounded-xl p-4 sm:p-5 relative pl-6">
                    <span className="absolute left-0 top-4 bottom-4 w-1.5 rounded-r bg-[#DC2626]" />
                    <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">{c.citation}</p>
                    <h3 className="text-base font-extrabold text-slate-900 mt-0.5">{c.parties}</h3>
                    <p className="text-xs text-slate-500 mb-2">{c.date}</p>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Holding:</strong> {c.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 bg-slate-50 p-2.5 rounded-lg">
                      <strong>Creditor Takeaway:</strong> {c.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track CTA */}
            <section
              id="heading-institutional-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dispatch One Fact-Verified Notice or Upload Postpaid CSV Batch
                </h2>
              </div>
              <IspTelecomNoticeCTA />
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
                  Frequently Asked Questions: Telecom, ISP &amp; Data Center Notices
                </h2>
              </div>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl p-4 open:bg-slate-50 transition-colors"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Sources & Cross-Links */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Bare Acts, TRAI/MeitY Portals &amp; Cross-Cluster Links
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                    Official Statutory Sources
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {PRIMARY_SOURCES.map((src) => (
                      <li key={src.url}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-slate-700 hover:text-[#DC2626] underline"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                    Related Telecom &amp; B2B Recovery Pages
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li>
                      <Link href="/industries/telecom-isp-datacenter-msp-recovery" className="text-[#DC2626] font-semibold hover:underline">
                        Telecom, ISP, Data Center &amp; MSP Recovery Hub
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/vendor-and-invoice-recoveries" className="text-[#DC2626] font-semibold hover:underline">
                        B2B Vendor &amp; Invoice Recovery Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-[#DC2626] font-semibold hover:underline">
                        Bulk Recovery Solutions (10–10,000+ Cases)
                      </Link>
                    </li>
                    <li>
                      <Link href="/templates/it-software-saas-msa-payment-default-legal-notice" className="text-[#DC2626] font-semibold hover:underline">
                        IT, Software &amp; SaaS MSA Legal Notice Template
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
