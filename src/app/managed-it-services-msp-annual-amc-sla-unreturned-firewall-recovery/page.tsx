import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MspAmcTableOfContents from "./MspAmcTableOfContents";
import MspAmcScenarioTabs from "./MspAmcScenarioTabs";
import MspAmcCTA from "./MspAmcCTA";

export const revalidate = 86400;

const PAGE_URL = "/managed-it-services-msp-annual-amc-sla-unreturned-firewall-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Managed IT (MSP) & Cybersecurity (MSSP) Recovery: Collecting Unpaid AMC/SOC Contracts & Repossessing 'Firewall-as-a-Service' Appliances Safely";

// Tightened from 62ch PDF draft to 51ch for Screaming Frog 30-60ch compliance
const META_TITLE = "MSP & IT AMC Unpaid Invoice + Firewall/CPE Recovery";

// Tightened from 180ch PDF draft to 151ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Withholding domain/root passwords risks IT Act s.43 liability. Hand over client credentials cleanly while recovering unpaid AMC dues & CPE (BNS s.316).";

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
      "Information Technology Act, 2000 (Sections 43 & 66 — Unauthorized Access, Denial of Computer Resource & Cyber Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust for Unreturned Leased CPE & Firewalls)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 70, 73, 74 & 148–160 — Bailment of FaaS Hardware & Liquidated Contract Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Written MSAs, SOWs & GST Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Admissibility for RMM, PSA, SIEM & Credential Handover Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "MSME Samadhaan Portal (Ministry of MSME — MSMED Act Sections 15–18 Compound Interest & Delayed Payment Filing)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const FAQS = [
  {
    q: "Can an MSP withhold Microsoft 365 Global Admin, Cloudflare DNS, or domain passwords until unpaid AMC invoices are cleared?",
    a: "No. Withholding client-owned cloud tenants, domain registrar access, or internal server root passwords as payment leverage exposes the MSP and its directors to civil damages under Section 43 of the Information Technology Act, 2000 and criminal extortion or cyber-tampering counter-complaints under Section 66 IT Act and BNS Section 308. The safe creditor protocol is a timestamped 'Without Prejudice' credential handover paired with a simultaneous Order XXXVII CPC or MSMED recovery demand.",
  },
  {
    q: "How can an MSP legally repossess leased Fortinet, SonicWall, or Sophos firewalls when a defaulting client blocks site entry?",
    a: "Firewall-as-a-Service (FaaS) and managed switch deployments are legally governed by bailment under Sections 148–160 of the Indian Contract Act, 1872. Once the contract is terminated for non-payment, serve a 7-day Advocate Hardware Surrender Notice listing exact serial numbers, MAC IDs, and Delivery Challan dates. If the client refuses return, the MSP can file for specific delivery/replacement value under Sections 7–8 of the Specific Relief Act, 1963 and initiate criminal breach of trust proceedings under BNS Section 316.",
  },
  {
    q: "What if the defaulting client claims '99.9% SLA uptime failure' or 'SOC missed alerts' only after receiving our AMC demand notice?",
    a: "Under standard Managed IT and MSSP Master Service Agreements, SLA breaches must be logged contemporaneously via PSA trouble tickets within 7–15 days and are remedied strictly through capped monthly service credits (typically 5%–10% of MRC), not total annual invoice forfeiture. Belated SLA allegations raised after months of non-payment fail the Mobilox bona fide pre-existing dispute test when rebutted with BSA 2023 Section 63 certified RMM/SIEM uptime logs.",
  },
  {
    q: "Can an MSP deactivate FortiCloud, Sophos Central, or EDR agents remotely when a client stops paying?",
    a: "An MSP may lawfully cease paying third-party OEM subscription renewals or decouple its own proprietary RMM/PSA management seats upon contract termination after prior written notice. However, the MSP must never push destructive scripts, factory-reset client-owned network configs without notice, or lock out local administrator access on client-owned endpoints, as doing so invites IT Act Section 43/66 liability.",
  },
  {
    q: "Can Udyam-registered MSPs and IT AMC firms use Section 43B(h) of the Income Tax Act against corporate defaulters?",
    a: "Yes. If your MSP or IT AMC firm holds a Micro or Small Enterprise Udyam Registration (NIC services code for IT support/managed services), any corporate buyer delaying payment beyond 45 days (or 15 days without a written agreement) faces mandatory tax disallowance of that entire IT expense under Section 43B(h) of the Income Tax Act, plus 3x RBI bank rate compound interest under Section 16 of the MSMED Act.",
  },
  {
    q: "Are annual 24x7 SOC and IT AMC lock-in retainers enforceable if a client exits in Month 5?",
    a: "Yes, particularly where the MSP demonstrates sunk annual commitments—such as upfront 12-month SIEM/EDR/firewall OEM licenses procured specifically for the client tenant and dedicated L1/L2 engineer staffing. Framing the demand around actual unamortized OEM license costs and past-due monthly retainers under Sections 73–74 of the Contract Act prevents courts from dismissing the claim as an arbitrary penalty.",
  },
  {
    q: "How can an MSP or MSSP recover overdue retainers across 25 to 500+ SMB and multi-branch clients efficiently?",
    a: "Instead of writing off sub-₹2 lakh retainers or risking IT Act counter-claims, MSPs can upload overdue client ledgers, SOW dates, and FaaS hardware serials via CSV for standardized tri-channel Fact-Verified Notices (Email + WhatsApp + Speed Post RPAD) and escalate stubborn accounts selectively to MSEFC Samadhaan or Order XXXVII summary suits.",
  },
];

export default function ManagedItMspRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
            url: `${SITE_URL}/logo.png`,
          },
        },
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        inLanguage: "en-IN",
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": "HowTo",
        "@id": `${CANONICAL_URL}#howto`,
        name: "5-Stage MSP Credential Handover, FaaS Hardware Repossession & AMC Debt Recovery Protocol",
        description:
          "How Managed Service Providers and Cybersecurity MSSPs safely hand over client-owned credentials under IT Act s.43 while prosecuting unreturned firewalls under BNS s.316 and unpaid AMC invoices under Order XXXVII CPC.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Segregate Client Credentials & Execute Clean Handover",
            text: "Separate client-owned M365, DNS, and domain credentials from MSP-owned RMM scripts and deliver client passwords against a 'Without Prejudice' acknowledgement to eliminate IT Act s.43 exposure.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Certify RMM, PSA & SIEM Logs Under BSA s.63",
            text: "Export 99.5%+ uptime dashboards, closed trouble tickets, and Delivery Challans with Firewall/Switch MAC IDs under a Section 63 BSA 2023 certificate.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Serve Combined AMC Demand & 7-Day BNS s.316 CPE Notice",
            text: "Dispatch a tri-channel Fact-Verified Notice demanding overdue AMC/SOC retainers, unamortized OEM licenses, and physical return of bailed FaaS firewalls within 7 days.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Trigger MSMED s.16 / Section 43B(h) Tax Intimation",
            text: "For Udyam-registered MSPs, issue a Section 43B(h) tax disallowance alert and compute 3x RBI compound interest on invoices overdue beyond 45 days.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Escalate to Order XXXVII CPC, MSEFC or BNS s.316",
            text: "File an Order XXXVII summary suit or MSEFC Samadhaan claim for the money ledger, alongside Specific Relief Act s.7–8 / BNS s.316 action for detained hardware.",
          },
        ],
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
            name: "Telecom, ISP & MSP Recovery",
            item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "MSP AMC & Unreturned Firewall Recovery",
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
            <span>IND-18 · MSP, MSSP &amp; IT AMC RECOVERY</span>
            <span className="text-red-700">&bull;</span>
            <span>IT ACT S.43 + BNS S.316 + ORDER XXXVII</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Part of our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline decoration-red-500/60 hover:text-white font-semibold"
            >
              Telecom, Enterprise ISP, Data Center &amp; MSP Recovery Hub
            </Link>
            : Managed Service Providers must never hold client-owned Microsoft 365, DNS, or domain passwords hostage (IT Act s.43 risk). Instead, execute a &ldquo;Without Prejudice&rdquo; credential handover while prosecuting unpaid AMC/SOC contracts via Order XXXVII CPC and unreturned leased Fortinet/SonicWall firewalls under BNS s.316.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">IT Act s.43</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Safe Admin-Handover Protocol (Zero Cyber-Extortion Risk)
              </p>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-red-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Criminal Breach of Trust on Leased FaaS Firewalls &amp; Switches
              </p>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MSMED s.16 Compound Interest + s.43B(h) Tax Leverage
              </p>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-slate-100">Order 37</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Fast-Track Summary Suit on Signed SOW &amp; GST Invoices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Telecom, ISP & MSP Recovery",
              href: "/industries/telecom-isp-datacenter-msp-recovery",
            },
            {
              label: "MSP AMC & Unreturned Firewall Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <MspAmcTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-hostage-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Holding Client DNS or M365 Passwords Backfires Under IT Act s.43
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Across India, Managed Service Providers (MSPs), 24x7 Security Operations Centers (MSSPs), and IT facility AMC vendors routinely lose valid receivables not because their contracts are weak, but because of one reactive operational mistake: withholding the defaulting client&apos;s Microsoft 365 Global Admin, Cloudflare DNS, GoDaddy domain, or local server root passwords until overdue AMC invoices are paid.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Invariably, the defaulting client&apos;s incoming IT vendor or legal counsel weaponizes that credential lock. Within 48 hours, the MSP receives a police cyber-cell complaint or statutory notice alleging unauthorized denial of access to a computer resource under <strong>Section 43(a)/(b)</strong> and <strong>Section 66 of the Information Technology Act, 2000</strong>, alongside criminal extortion allegations under <strong>Section 308 of the Bharatiya Nyaya Sanhita (BNS), 2023</strong>. Once a criminal cyber-complaint is registered, the MSP founder spends months defending anticipatory bail and quashing petitions instead of collecting the unpaid AMC bill.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The legally invincible alternative is separation of remedies: <strong>release client-owned credentials cleanly</strong> under a timestamped &ldquo;Without Prejudice&rdquo; Handover Protocol, while simultaneously deploying lethal civil and criminal remedies on what actually belongs to you—your <strong>unpaid AMC/SOC retainers</strong> ({" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Order XXXVII CPC Summary Suit
                </Link>
                {" "}and MSMED s.16) and your <strong>leased Firewall-as-a-Service (FaaS) hardware</strong> (BNS s.316 Criminal Breach of Trust).
              </p>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Stage MSP Credential Handover &amp; CPE Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential workflow before suspending RMM monitoring or responding to a new vendor&apos;s credential demand. Every stage is engineered to insulate your technical team from cyber-law counter-claims while locking in evidentiary admissibility for commercial recovery.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  width="900"
                  height="230"
                  viewBox="0 0 900 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Stage MSP Credential Handover and FaaS Firewall Recovery Flowchart"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="35" width="155" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="34" cy="60" r="12" fill="#DC2626" />
                  <text x="34" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="64" fill="#F8FAFC" fontSize="11" fontWeight="bold">Segregate IP</text>
                  <text x="22" y="90" fill="#CBD5E1" fontSize="10">Split Client M365/DNS</text>
                  <text x="22" y="106" fill="#CBD5E1" fontSize="10">from MSP RMM scripts</text>
                  <text x="22" y="122" fill="#CBD5E1" fontSize="10">&amp; leased FaaS gear.</text>
                  <rect x="22" y="142" width="131" height="22" rx="6" fill="#064E3B" />
                  <text x="87" y="157" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="bold">IT Act s.43 Shield</text>

                  <path d="M168 108 L188 108" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="192" y="35" width="155" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="216" cy="60" r="12" fill="#DC2626" />
                  <text x="216" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="236" y="64" fill="#F8FAFC" fontSize="11" fontWeight="bold">Clean Handover</text>
                  <text x="204" y="90" fill="#CBD5E1" fontSize="10">Deliver client logins</text>
                  <text x="204" y="106" fill="#CBD5E1" fontSize="10">against Without-Prej</text>
                  <text x="204" y="122" fill="#CBD5E1" fontSize="10">escrow receipt.</text>
                  <rect x="204" y="142" width="131" height="22" rx="6" fill="#064E3B" />
                  <text x="269" y="157" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="bold">Debt Unwaived</text>

                  <path d="M350 108 L370 108" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="374" y="35" width="155" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="398" cy="60" r="12" fill="#DC2626" />
                  <text x="398" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="418" y="64" fill="#F8FAFC" fontSize="11" fontWeight="bold">BSA s.63 Audit</text>
                  <text x="386" y="90" fill="#CBD5E1" fontSize="10">Certify PSA tickets,</text>
                  <text x="386" y="106" fill="#CBD5E1" fontSize="10">SIEM logs &amp; CPE MAC</text>
                  <text x="386" y="122" fill="#CBD5E1" fontSize="10">Delivery Challans.</text>
                  <rect x="386" y="142" width="131" height="22" rx="6" fill="#451A03" />
                  <text x="451" y="157" textAnchor="middle" fill="#FCD34D" fontSize="9.5" fontWeight="bold">Kills SLA Excuses</text>

                  <path d="M532 108 L552 108" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="556" y="35" width="155" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="580" cy="60" r="12" fill="#DC2626" />
                  <text x="580" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="600" y="64" fill="#F8FAFC" fontSize="11" fontWeight="bold">Dual Notice</text>
                  <text x="568" y="90" fill="#CBD5E1" fontSize="10">Serve AMC + s.43B(h)</text>
                  <text x="568" y="106" fill="#CBD5E1" fontSize="10">demand + 7-day CPE</text>
                  <text x="568" y="122" fill="#CBD5E1" fontSize="10">surrender notice.</text>
                  <rect x="568" y="142" width="131" height="22" rx="6" fill="#7F1D1D" />
                  <text x="633" y="157" textAnchor="middle" fill="#FCA5A5" fontSize="9.5" fontWeight="bold">Email + WA + RPAD</text>

                  <path d="M714 108 L734 108" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="738" y="35" width="152" height="145" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="762" cy="60" r="12" fill="#DC2626" />
                  <text x="762" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="782" y="64" fill="#F8FAFC" fontSize="11" fontWeight="bold">Dual Enforcement</text>
                  <text x="750" y="90" fill="#CBD5E1" fontSize="10">Order 37 / MSEFC for</text>
                  <text x="750" y="106" fill="#CBD5E1" fontSize="10">AMC dues + BNS s.316</text>
                  <text x="750" y="122" fill="#CBD5E1" fontSize="10">for detained firewalls.</text>
                  <rect x="750" y="142" width="128" height="22" rx="6" fill="#DC2626" />
                  <text x="814" y="157" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold">Decree + Recovery</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "1. Segregate Client IP vs. MSP Gear",
                    desc: "Separate client-owned M365/DNS logins from MSP-owned RMM scripts and leased FaaS firewalls.",
                  },
                  {
                    step: "2. Clean 'Without Prejudice' Handover",
                    desc: "Release client-owned passwords against a written acknowledgement preserving 100% of unpaid AMC claims.",
                  },
                  {
                    step: "3. BSA 2023 s.63 Telemetry Audit",
                    desc: "Certify RMM uptime, PSA tickets, SIEM heartbeats, and Hardware Delivery Challans (MAC/Serial IDs).",
                  },
                  {
                    step: "4. Tri-Channel Demand + 7-Day CPE Notice",
                    desc: "Serve Fact-Verified Notice combining AMC/SOC arrears, s.43B(h) tax alert, and 7-day BNS s.316 hardware surrender.",
                  },
                  {
                    step: "5. Order XXXVII / MSEFC + BNS s.316",
                    desc: "Pursue summary money recovery alongside civil/criminal repossession of unreturned Fortinet/SonicWall gear.",
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold text-red-400 mb-1">{item.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  MSP, MSSP &amp; Firewall-as-a-Service Statutory Recovery Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every MSP default involves three distinct legal layers: intangible access credentials, physical CPE hardware, and recurring service/license debt. This matrix maps the exact Indian statute governing each layer.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Statute &amp; Section</th>
                      <th className="py-3.5 px-4 font-bold">MSP / FaaS Trigger</th>
                      <th className="py-3.5 px-4 font-bold">Creditor Remedy / Guardrail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        IT Act, 2000<br />
                        <span className="text-[#DC2626] font-semibold">ss. 43 &amp; 66</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Client demands M365 Global Admin, Cloudflare DNS, or root domain credentials despite unpaid AMC.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Mandatory clean handover &ldquo;Without Prejudice&rdquo; avoids cyber-extortion counter-FIRs while preserving full civil debt rights.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        BNS, 2023<br />
                        <span className="text-[#DC2626] font-semibold">Section 316</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Client retains leased Fortinet, SonicWall, Sophos firewalls, or core switches post-termination.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Criminal Breach of Trust prosecution for dishonest misappropriation/retention of bailed networking hardware.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Contract Act, 1872<br />
                        <span className="text-[#DC2626] font-semibold">ss. 148–160</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        FaaS / Hardware-as-a-Service equipment deployed at client premises without title transfer.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Establishes strict bailor-bailee title, entitling MSP to immediate return upon expiry or default plus detention damages.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Specific Relief Act<br />
                        <span className="text-[#DC2626] font-semibold">ss. 7 &amp; 8</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Defaulting corporate locks office or IT-park facility denies engineer entry to unplug CPE.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Civil decree for specific delivery of tagged movable property (with serial/MAC IDs) or full replacement value.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CPC, 1908<br />
                        <span className="text-[#DC2626] font-semibold">Order XXXVII</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Unpaid quarterly/annual AMC, SOC monitoring, or sunk OEM license invoices.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Summary suit on written MSA/SOW and GST invoices—shifts burden on debtor to prove triable defence for leave to defend.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act &amp; IT Act<br />
                        <span className="text-[#DC2626] font-semibold">s.16 &amp; s.43B(h)</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Udyam-registered Micro/Small MSP facing 45+ day payment delays from corporate buyers.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Compels 3x RBI bank rate monthly compound interest via MSEFC Samadhaan and triggers buyer corporate tax disallowance.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 MSP, SOC &amp; Firewall-as-a-Service Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the operational failure mode matching your overdue client account to view the exact legal basis and 3-step execution sequence.
              </p>

              <MspAmcScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Ledger: ₹14.80L MSP AMC, Sunk OEM Licenses &amp; FaaS CPE
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Udyam-registered Managed Security Service Provider (MSSP) in Bengaluru or Gurugram that signed a 12-month ₹1.20 lakh/month SOC + IT AMC contract with an enterprise client, deploying two leased Fortinet FortiGate firewalls (replacement value ₹3,20,000) and procuring upfront annual EDR/SIEM seats (₹2,80,000). The client defaults after Month 5 and refuses to return the firewalls while demanding M365 Global Admin credentials.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Recoverable Creditor Claim Breakdown
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                      Clean Handover Executed · Dual Civil + BNS s.316 Demand
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold">
                    100% Itemized Liquidated Claim
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">1. Overdue Monthly AMC/SOC Invoices (4 Months @ ₹1.20L + 18% GST)</span>
                    <span className="font-bold text-white">&#8377;5,66,400</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">2. Unamortized Annual OEM EDR/SIEM Licenses (7/12ths Pro-Rata Contract Act s.73)</span>
                    <span className="font-bold text-white">&#8377;1,63,333</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">3. Unreturned Leased Fortinet FortiGate Appliances (2 Units · Specific Relief s.7–8 / BNS s.316)</span>
                    <span className="font-bold text-amber-400">&#8377;3,20,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">4. MSMED Act s.16 Compound Interest (3x RBI Bank Rate ~19.5% p.a. over 180d Delay)</span>
                    <span className="font-bold text-emerald-400">&#8377;4,30,267</span>
                  </div>
                  <div className="flex justify-between pt-3 text-sm sm:text-base font-black">
                    <span className="text-red-400">Total Principal + Statutory Interest + Hardware Claim</span>
                    <span className="text-emerald-400">&#8377;14,80,000</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Use our interactive{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                {" "}to compute exact 3x RBI monthly compounding on your overdue IT AMC invoices, or adapt our{" "}
                <Link
                  href="/templates/it-software-saas-msa-payment-default-legal-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  IT Software &amp; SaaS MSA Payment Default Legal Notice Template
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Evidence & BSA s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  RMM, PSA &amp; BSA 2023 s.63 Evidentiary Proof Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, electronic billing records, PSA ticket closures, and RMM monitoring logs are admissible in Commercial Courts and MSEFC proceedings only when backed by a signed electronic record certificate. Assemble these six records before serving notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Signed MSA / SOW & Bailment Schedule",
                    desc: "Executed agreement specifying monthly AMC/SOC scope, SLA credit caps, lock-in period, and explicit MSP title over leased FaaS hardware.",
                  },
                  {
                    title: "2. Hardware Delivery Challans (MAC & Serials)",
                    desc: "Client-stamped installation sign-off listing exact Fortinet/SonicWall/Sophos serial numbers, MAC addresses, and branch rack locations.",
                  },
                  {
                    title: "3. 'Without Prejudice' Credential Handover Log",
                    desc: "Email/portal audit trail proving clean delivery of client-owned M365, DNS, and domain credentials with explicit reservation of unpaid AMC dues.",
                  },
                  {
                    title: "4. BSA s.63 Certified RMM / SIEM Telemetry",
                    desc: "Monthly uptime reports, patch compliance summaries, and closed PSA ticket logs refuting any fabricated 'service failure' afterthought.",
                  },
                  {
                    title: "5. OEM License Procurement Invoices",
                    desc: "Distributor/OEM tax invoices showing upfront annual CrowdStrike, SentinelOne, FortiGuard, or M365 NCE seats bought for the client tenant.",
                  },
                  {
                    title: "6. GST E-Invoices & GSTR-2B ITC Trail",
                    desc: "IRN-verified GST tax invoices and ledger confirmations—ITC availment by the client operates as a powerful admission of service receipt.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Strict IT Act Guardrails */}
            <section
              id="heading-guardrails"
              className="scroll-mt-28 bg-red-50/70 rounded-2xl border border-red-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Strict IT Act Guardrails: What MSPs Must Never Do
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
                    Never Lock Client-Owned Tenants
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Do not revoke client CEO/IT access to M365 Global Admin, Google Workspace, Cloudflare DNS, or domain registrars. That invites immediate IT Act s.43/s.66 complaints.
                  </p>
                </div>
                <div className="bg-white border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
                    Never Trigger Remote Wipes
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Even if you uninstall your RMM agent, never push remote wipe, firewall factory-reset, or service-disruption scripts that erase client business data or halt operations.
                  </p>
                </div>
                <div className="bg-white border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
                    Never Enter Premises Without Notice
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Do not send field engineers to forcibly unplug leased firewalls inside a client&apos;s locked server room. Serve a 7-day BNS s.316 surrender notice and notify the building facility manager first.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Initiate IT-Act-Safe MSP AMC &amp; Firewall Recovery
              </h2>
              <MspAmcCTA />
            </section>

            {/* Section 9: IND-18 Sibling & B2B Seed Cross-Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  IND-18 Telecom, Data Center &amp; B2B Recovery Network
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/telecom-isp-datacenter-msp-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Parent Industry Pillar Hub
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Telecom, Enterprise ISP, Data Center, CPaaS &amp; MSP Recovery
                  </p>
                </Link>
                <Link
                  href="/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Spoke · Enterprise ISP
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Enterprise ILL / MPLS / SD-WAN Lock-In Breach Recovery
                  </p>
                </Link>
                <Link
                  href="/data-center-colocation-bare-metal-hosting-default-suspension-lien-law"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Spoke · Data Centers
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Data Center Colocation Server Lien &amp; DPDP Suspension Law
                  </p>
                </Link>
                <Link
                  href="/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Spoke · CPaaS &amp; Cloud Telephony
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    CPaaS, Bulk SMS, WhatsApp BSP &amp; Cloud Telephony Postpaid Recovery
                  </p>
                </Link>
                <Link
                  href="/services/vendor-and-invoice-recoveries"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Core B2B Service
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    B2B Vendor &amp; Unpaid Commercial Invoice Recoveries
                  </p>
                </Link>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Institutional Batch Desk
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Bulk CSV Legal Notice &amp; Portfolio Recovery (10–10,000+ Cases)
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: MSP AMC &amp; Firewall Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Bare Acts & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Bare Acts &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
