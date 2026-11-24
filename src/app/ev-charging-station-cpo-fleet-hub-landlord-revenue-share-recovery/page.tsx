import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EvCpoTableOfContents from "./EvCpoTableOfContents";
import EvCpoScenarioTabs from "./EvCpoScenarioTabs";
import EvCpoCTA from "./EvCpoCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/ev-charging-station-cpo-fleet-hub-landlord-revenue-share-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Legal Recovery for EV Charge Point Operators (CPOs) & Charger OEMs: B2B EV-Fleet Charging Defaults & Host-Site DC Fast-Charger Repossession";

// Tightened to 48ch for Screaming Frog 30-60ch compliance
const META_TITLE = "EV Charging CPO Fleet Billing & Charger Recovery";

// Tightened to 148ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "EV fleet operator defaulted on postpaid kWh charging or host hotel shut power to your DC fast charger? Enforce OCPP logs, Section 9 & BNS s.316.";

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
      "Arbitration and Conciliation Act, 1996 (Section 9 — Urgent Interim Measures for DC Fast-Charger Custody & Restraint Against Third-Party Tampering) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust for Wrongful Detention of Leased/Hosted EV Chargers)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Admissibility of OCPP 1.6J/2.0.1 Telemetry, MeterValues & CMS Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Ministry of Power (MoP) — Guidelines for Installation and Operation of Electric Vehicle Charging Infrastructure (2024)",
    url: "https://powermin.gov.in/",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Cap & 3x RBI Compound Interest) — MSME Samadhaan",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Insolvency and Bankruptcy Code (IBC), 2016 (Section 8 Form 3/4 Operational Creditor Demand Notice for Postpaid EV Fleet Arrears) — IBBI",
    url: "https://ibbi.gov.in/",
  },
];

const FAQS = [
  {
    q: "How can an EV Charge Point Operator (CPO) legally prove unpaid kWh fleet charging bills when the fleet operator disputes session totals?",
    a: "Export raw OCPP 1.6J or OCPP 2.0.1 MeterValues, StartTransaction, and StopTransaction telemetry logs mapped to each vehicle's RFID tag or AutoCharge VIN, along with CMS payment gateway reconciliations and DISCOM EV-meter bills. Pair the CSV export with a Section 63 certificate under the Bharatiya Sakshya Adhiniyam (BSA), 2023 signed by your CMS administrator to establish primary electronic admissibility in Commercial Courts, Arbitration, or NCLT.",
  },
  {
    q: "What if a highway hotel, mall, or commercial landlord disconnects power and locks the bay around our ₹14 Lakh DC Fast Charger?",
    a: "Do not attempt forced physical entry, which invites criminal trespass allegations. Document the CMS offline heartbeat loss and geo-tagged site photographs, serve a 7-day Notice of Equipment Ownership and Peaceful Demobilization citing your Space License Agreement's Title Retention clause, and immediately file a Section 9 petition under the Arbitration and Conciliation Act, 1996 (or Commercial Court injunction) for an ad-interim order and Court Commissioner to safely remove the charger.",
  },
  {
    q: "Does a Space License / Revenue-Share Agreement give the landlord a lien over a CPO's DC Fast Charger for disputed electricity or parking dues?",
    a: "No, unless an express contractual lien is granted. A CPO installing a DC Fast Charger under a Space License or Easement Agreement retains legal title over the movable charger hardware, transformer, and switchgear. Wrongful detention or handover of the charger to a competing CPO attracts civil recovery under Specific Relief Act Sections 7–8 and criminal breach of trust under BNS Section 316.",
  },
  {
    q: "Can a CPO remotely disable fleet RFID cards or lock a hosted charger via OCPP when invoices go unpaid?",
    a: "Yes for postpaid fleet RFID/VIN whitelisting: suspending postpaid fleet credit access via CMS after contractual notice of default is a standard commercial remedy. However, for third-party walk-in public chargers hosted at a landlord site, avoid disabling safety-critical emergency stops or interfering with the host's own sub-meter electrical infrastructure; restrict remote actions to commercial billing suspension strictly within contract terms.",
  },
  {
    q: "Can an EV charger OEM or turnkey installer use MSMED Act Section 18 and Income Tax Section 43B(h) for unpaid depot commissioning balances?",
    a: "Yes. If the EV charger manufacturer or turnkey electrical EPC contractor holds a valid Micro or Small Enterprise Udyam Registration, unpaid supply and installation invoices beyond 45 days trigger 3x RBI Bank Rate compound interest before the MSEFC under MSMED Act Section 16 and disallowance of the buyer's tax deduction under Section 43B(h) of the Income Tax Act.",
  },
  {
    q: "Is an IBC Section 8 Demand Notice effective against a defaulting e-cab aggregator or logistics EV fleet company?",
    a: "Yes, where total undisputed operational debt across unpaid kWh charging invoices crosses the ₹1 Crore statutory threshold. Serving a Form 3 Demand Notice under Section 8 of the IBC, 2016 backed by reconciled OCPP session logs and GST invoices frequently compels urgent settlement or structured escrow repayment before a Section 9 NCLT petition is admitted.",
  },
  {
    q: "How does a CPO recover unamortized capex when a host site terminates a 7-year revenue-share agreement prematurely to switch to a rival operator?",
    a: "Enforce the Lock-In and Unamortized Capex Buyout / Relocation Cost schedule in the Space License Agreement under Indian Contract Act Sections 73 and 74. Where the host breaches exclusivity or prematurely terminates without cause, claim both peaceful removal of the 60 kW/120 kW charger hardware and liquidated relocation, civil-foundation, and LT/HT cabling losses.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-18T15:00:00+05:30",
  dateModified: "2026-11-18T15:00:00+05:30",
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How EV CPOs Recover Unpaid Fleet Charging Bills and Repossess Host-Site DC Fast Chargers",
  description:
    "5-stage legal recovery workflow for EV Charge Point Operators and charger OEMs facing fleet kWh defaults or host-site charger lockouts.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Freeze Postpaid RFID Whitelisting & Export OCPP Telemetry",
      text: "Suspend postpaid fleet charging access in the CMS and export signed OCPP 1.6J/2.0.1 MeterValues and StopTransaction logs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Execute BSA 2023 Section 63 Electronic Certificate",
      text: "Certify CMS server exports, RFID/VIN mappings, and DISCOM sub-meter readings under BSA 2023 s.63.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Statutory Demand & Equipment Ownership Notice",
      text: "Dispatch a fact-verified notice via Email, WhatsApp, and Speed Post RPAD demanding kWh arrears or 7-day peaceful charger demobilization.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Section 9 Arbitration / Order XXXVII / MSEFC Claim",
      text: "Seek urgent interim custody orders under Arbitration Act s.9 for locked DC chargers or file Order XXXVII CPC / MSEFC / IBC s.8 proceedings.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Enforce Court Commissioner Removal or Escrow Settlement",
      text: "Execute peaceful charger demobilization with a Court Commissioner or recover principal plus statutory interest.",
    },
  ],
};

const FAQ_SCHEMA = {
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
      name: "Solar, EV & Power Recovery",
      item: `${SITE_URL}/industries/solar-renewable-ev-power-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "EV Charging CPO & DC Charger Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function EvCpoRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
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
            <span>IND-19 &middot; EV Charging &amp; Clean Mobility</span>
            <span className="text-red-700">&bull;</span>
            <span>Creditor &amp; CPO Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/solar-renewable-ev-power-recovery"
              className="text-red-300 underline decoration-red-500/60 hover:text-white font-semibold"
            >
              Solar, Renewable &amp; EV Power Recovery Hub
            </Link>
            , EV Charge Point Operators (CPOs) and charger OEMs recover postpaid fleet kWh arrears and locked 60–120 kW DC fast chargers using OCPP 1.6J/2.0.1 telemetry certified under BSA 2023 s.63, Arbitration Act s.9 custody injunctions, BNS s.316 notices, and MSMED s.18.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                BSA s.63
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                OCPP MeterValues &amp; RFID Proof
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                Sec. 9 Arb
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Urgent DC Charger Repossession
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 Compound Interest
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                BNS s.316
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Host-Site Charger Detention Deterrent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Solar, EV & Power Recovery",
                href: "/industries/solar-renewable-ev-power-recovery",
              },
              {
                label: "EV Charging CPO & DC Charger Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <EvCpoTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Problem & Commercial Mechanics */}
            <section
              id="heading-ev-credit-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why EV Fleet Operators &amp; Host Sites Trigger Sudden CPO Losses
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s commercial EV charging ecosystem operates on two capital-intensive credit loops that expose Charge Point Operators (CPOs) and DC fast-charger OEMs to acute working-capital shocks. First, B2B electric cab aggregators, e-bus operators, and last-mile delivery fleets rely on dedicated charging hubs under fortnightly or monthly postpaid kWh billing cycles. Because fleet operators run on thin per-kilometre unit economics, a sudden drop in utilization or investor funding squeeze frequently causes them to default on ₹15 Lakh to ₹60 Lakh of energy bills while migrating their vehicles to a competing hub overnight.
                </p>
                <p>
                  Second, public and semi-public CPOs deploy ₹10 Lakh to ₹25 Lakh per site in 60 kW or 120 kW DC fast chargers, compact transformers, and civil foundations at highway hotels, retail malls, and tech parks under 5-to-10-year Space License or Revenue-Share Agreements. When a landlord disputes parking revenue shares, receives a competing bid from another CPO, or faces internal management changes, the host site routinely cuts sub-meter power and locks the charging bay—holding high-value OEM hardware hostage.
                </p>
                <p>
                  Unlike generic unsecured trade receivables, EV charging defaults combine regulated electricity pass-throughs, real-time cloud telemetry (OCPP 1.6J / 2.0.1), and physical movable equipment installed on third-party premises. Enforcing recovery requires pairing electronic session evidence with rapid interim court protection rather than slow ordinary civil suits.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage EV Fleet Billing &amp; Charger Repossession Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential escalation tree from Day 1 of a missed fleet settlement or host-site power disconnection so your CMS logs remain admissible and your right to repossess DC charger hardware stays intact.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 840 310"
                  width={840}
                  height={310}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage EV CPO Fleet Billing and DC Charger Repossession Decision Tree"
                >
                  <defs>
                    <marker
                      id="ev-arrow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="7"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="15" y="25" width="145" height="105" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="87" y="48" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (DAY 1–3)</text>
                  <text x="87" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">OCPP &amp; RFID</text>
                  <text x="87" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Credit Freeze</text>
                  <text x="87" y="106" textAnchor="middle" fill="#94A3B8" fontSize="10">Export MeterValues</text>
                  <text x="87" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">&amp; Heartbeat Faults</text>

                  <line x1="160" y1="77" x2="180" y2="77" stroke="#DC2626" strokeWidth="2" markerEnd="url(#ev-arrow)" />

                  {/* Stage 2 */}
                  <rect x="182" y="25" width="145" height="105" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="254" y="48" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 2 (DAY 4–7)</text>
                  <text x="254" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">BSA 2023 s.63</text>
                  <text x="254" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Evidence Seal</text>
                  <text x="254" y="106" textAnchor="middle" fill="#94A3B8" fontSize="10">Certify CMS Logs,</text>
                  <text x="254" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">VINs &amp; Title Invoice</text>

                  <line x1="327" y1="77" x2="347" y2="77" stroke="#DC2626" strokeWidth="2" markerEnd="url(#ev-arrow)" />

                  {/* Stage 3 */}
                  <rect x="349" y="25" width="145" height="105" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="421" y="48" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 3 (DAY 7–15)</text>
                  <text x="421" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Advocate Demand</text>
                  <text x="421" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">&amp; Removal Notice</text>
                  <text x="421" y="106" textAnchor="middle" fill="#94A3B8" fontSize="10">RPAD + Email + WA</text>
                  <text x="421" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">7-Day Demobilization</text>

                  <line x1="494" y1="77" x2="514" y2="77" stroke="#DC2626" strokeWidth="2" markerEnd="url(#ev-arrow)" />

                  {/* Stage 4 */}
                  <rect x="516" y="25" width="145" height="105" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="588" y="48" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">STAGE 4 (DAY 16–30)</text>
                  <text x="588" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Forum Split</text>
                  <text x="588" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Filing</text>
                  <text x="588" y="106" textAnchor="middle" fill="#94A3B8" fontSize="10">Arb s.9 / Order 37</text>
                  <text x="588" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">MSEFC / IBC s.8</text>

                  <line x1="661" y1="77" x2="681" y2="77" stroke="#DC2626" strokeWidth="2" markerEnd="url(#ev-arrow)" />

                  {/* Stage 5 */}
                  <rect x="683" y="25" width="142" height="105" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="754" y="48" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="700">STAGE 5 (RECOVERY)</text>
                  <text x="754" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Asset Custody</text>
                  <text x="754" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">&amp; Ledger Recovery</text>
                  <text x="754" y="106" textAnchor="middle" fill="#D1FAE5" fontSize="10">Court Commissioner</text>
                  <text x="754" y="120" textAnchor="middle" fill="#D1FAE5" fontSize="10">or RTGS Settlement</text>

                  {/* Lower Track Split */}
                  <rect x="40" y="175" width="365" height="110" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <text x="60" y="200" fill="#F87171" fontSize="11" fontWeight="700">TRACK A: FLEET kWh BILLING DEFAULT</text>
                  <text x="60" y="222" fill="#E2E8F0" fontSize="11.5">&bull; Set off refundable fleet security deposit against arrears</text>
                  <text x="60" y="242" fill="#E2E8F0" fontSize="11.5">&bull; File NI Act s.138 (if PDC bounced) or Order XXXVII CPC</text>
                  <text x="60" y="262" fill="#E2E8F0" fontSize="11.5">&bull; Serve IBC s.8 Form 3 if undisputed debt &ge; ₹1 Crore</text>

                  <rect x="435" y="175" width="365" height="110" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <text x="455" y="200" fill="#34D399" fontSize="11" fontWeight="700">TRACK B: HOST-SITE LOCKOUT / POWER CUT</text>
                  <text x="455" y="222" fill="#E2E8F0" fontSize="11.5">&bull; Invoke Space License Title Retention &amp; Easement clauses</text>
                  <text x="455" y="242" fill="#E2E8F0" fontSize="11.5">&bull; File Arbitration Act s.9 for urgent DC charger custody</text>
                  <text x="455" y="262" fill="#E2E8F0" fontSize="11.5">&bull; Warn host of BNS s.316 &amp; unamortized capex damages</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "Stage 1 (Day 1–3)",
                    title: "OCPP & RFID Credit Freeze",
                    desc: "Suspend postpaid fleet whitelisting in CMS and export MeterValues, StopTransaction, and offline heartbeat logs.",
                  },
                  {
                    stage: "Stage 2 (Day 4–7)",
                    title: "BSA 2023 s.63 Evidence Seal",
                    desc: "Certify CMS CSV exports, RFID/VIN allocations, OEM charger invoices, and geo-tagged site photos.",
                  },
                  {
                    stage: "Stage 3 (Day 7–15)",
                    title: "Advocate Demand & Removal Notice",
                    desc: "Serve RPAD + Email + WhatsApp notice demanding kWh arrears or 7-day peaceful DC charger demobilization.",
                  },
                  {
                    stage: "Stage 4 (Day 16–30)",
                    title: "Forum Split Filing",
                    desc: "File Arbitration Act s.9 for locked chargers, or Order XXXVII CPC / MSEFC s.18 / IBC s.8 for fleet arrears.",
                  },
                  {
                    stage: "Stage 5 (Recovery)",
                    title: "Asset Custody & Settlement",
                    desc: "Execute Court Commissioner charger removal or recover principal plus statutory interest.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                      {item.stage}
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">{item.title}</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix for CPOs, EV Fleet Hubs &amp; Charger OEMs
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">EV Charging Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Timeline / Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Arbitration Act, 1996 (s.9)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mall/hotel host locks bay or cuts power to 60–120 kW DC charger
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Ad-interim injunction + Court Commissioner custody &amp; removal
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        7–21 days urgent interim relief
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        BNS, 2023 (s.316)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Landlord/sub-lessee detains or transfers hosted charger to rival CPO
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Criminal Breach of Trust notice &amp; police complaint on entrusted asset
                      </td>
                      <td className="p-3.5 font-semibold text-red-700">
                        High deterrent against asset diversion
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        BSA, 2023 (s.63)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Fleet disputes OCPP kWh session totals or RFID charging logs
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Primary electronic admissibility of CMS CSVs &amp; hash-certified logs
                      </td>
                      <td className="p-3.5 font-semibold text-slate-800">
                        Neutralizes &ldquo;unverified meter&rdquo; defense
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act, 2006 (s.15–18)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Udyam charger OEM / electrical EPC unpaid for depot commissioning
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSEFC conciliation/arbitration + 3x RBI Bank Rate compound interest
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        75% pre-deposit for buyer appeal
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC, 2016 (s.8 Form 3)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        E-cab / logistics fleet owes &ge; ₹1 Cr undisputed kWh arrears
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day statutory Demand Notice prior to NCLT Section 9 filing
                      </td>
                      <td className="p-3.5 font-semibold text-amber-700">
                        10-day insolvency pressure window
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC / Contract Act s.73
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Unpaid reconciled fleet invoices or unamortized host capex buyout
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary recovery suit (leave-to-defend barrier) &amp; liquidated damages
                      </td>
                      <td className="p-3.5 font-semibold text-slate-800">
                        Faster than ordinary civil suit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 EV Charging Fleet &amp; Host-Site Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact operational bottleneck below to inspect the immediate Day 1–7 containment step, statutory forum, and BSA 2023 s.63 proof packet.
              </p>

              <EvCpoScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Ledger: ₹25L Fleet kWh Default + ₹14L Host Charger Lockout
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Below is a dual-claim ledger illustrating how a CPO or Udyam-registered charger OEM quantifies both postpaid fleet energy arrears and host-site unamortized capex upon breach. Use our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                to model exact monthly compounding on your invoice dates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Ledger A */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">
                    Case A &middot; Postpaid Fleet Hub Default
                  </span>
                  <h3 className="text-base font-bold text-white mb-3">
                    1,38,889 kWh @ ₹18/kWh (Incl. GST)
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm border-t border-slate-800 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gross Unpaid OCPP Billing (2 Cycles)</span>
                      <span className="font-bold text-white">₹25,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Less: Forfeited Fleet Security Deposit</span>
                      <span className="font-bold text-amber-400">- ₹4,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Net Principal Arrears</span>
                      <span className="font-bold text-white">₹21,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contractual / MSMED Interest (180 Days @ 19.5% p.a.)</span>
                      <span className="font-bold text-emerald-400">+ ₹2,01,945</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2 text-sm sm:text-base">
                      <span className="font-extrabold text-white">Total Recoverable Claim</span>
                      <span className="font-black text-emerald-400">₹23,01,945</span>
                    </div>
                  </div>
                </div>

                {/* Ledger B */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-slate-900">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-emerald-800 mb-1">
                    Case B &middot; Host-Site 60 kW DC Charger Lockout
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    Year-2 Termination Breach &amp; Removal Claim
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm border-t border-emerald-200 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-700">60 kW DC Fast Charger (Repossession via Sec. 9)</span>
                      <span className="font-bold text-slate-900">₹14,00,000 Asset</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Unamortized Civil, Foundation &amp; LT Cabling</span>
                      <span className="font-bold text-slate-900">₹3,20,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">De-installation, Crane &amp; Relocation Cost</span>
                      <span className="font-bold text-slate-900">₹85,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Withheld Walk-in Charging Collections (2 Months)</span>
                      <span className="font-bold text-slate-900">₹1,95,000</span>
                    </div>
                    <div className="flex justify-between border-t border-emerald-300 pt-2 text-sm sm:text-base">
                      <span className="font-extrabold text-emerald-950">Monetary Claim + Asset Return</span>
                      <span className="font-black text-emerald-800">₹6,00,000 + Charger</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: OCPP Telemetry & BSA 2023 s.63 Proof Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  OCPP Telemetry &amp; BSA 2023 s.63 Evidentiary Proof Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {[
                  {
                    title: "1. OCPP 1.6J / 2.0.1 Raw Session Logs",
                    detail:
                      "Export StartTransaction, MeterValues (Wh), StopTransaction, and ConnectorId CSVs showing exact kWh dispensed per vehicle session.",
                  },
                  {
                    title: "2. RFID Tag / AutoCharge VIN Mapping",
                    detail:
                      "Signed fleet onboarding annexure linking each RFID UID or vehicle MAC/VIN to the defaulting fleet operator's corporate entity.",
                  },
                  {
                    title: "3. BSA 2023 Section 63 Certificate",
                    detail:
                      "Mandatory electronic evidence certificate executed by the CMS/IT administrator specifying server hash, export timestamp, and system integrity.",
                  },
                  {
                    title: "4. Host Space License & Title Retention",
                    detail:
                      "Executed agreement explicitly stating the DC fast charger, transformer, and switchgear remain movable property of the CPO.",
                  },
                  {
                    title: "5. OEM Serial Number & e-Way Bill Trail",
                    detail:
                      "Tax invoice, e-Way Bill, and OEM serial plate photos proving exclusive ownership when seeking Section 9 Court Commissioner custody.",
                  },
                  {
                    title: "6. Offline Heartbeat & Site Photos",
                    detail:
                      "CMS StatusNotification / Heartbeat drop logs paired with geo-tagged photos showing padlocked bays or severed sub-meter supply.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Strict Legal Guardrails */}
            <section
              id="heading-cpo-guardrails"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Strict Legal Guardrails for CPOs &amp; Charger OEMs
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="font-extrabold text-[#DC2626] uppercase tracking-wider text-[11px] mb-1.5">
                    Never Force Physical Entry
                  </p>
                  <p className="text-slate-800 leading-relaxed">
                    Sending technicians to cut padlocks or unbolt a DC charger inside a hostile hotel or mall without a Section 9 order risks criminal trespass and counter-FIRs. Use Court Commissioner custody.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="font-extrabold text-amber-800 uppercase tracking-wider text-[11px] mb-1.5">
                    Preserve Electrical Safety
                  </p>
                  <p className="text-slate-800 leading-relaxed">
                    When suspending postpaid fleet RFID access via OCPP, never disable emergency-stop relays or leave live exposed high-voltage DC/AC terminals unattended during a host dispute.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="font-extrabold text-emerald-800 uppercase tracking-wider text-[11px] mb-1.5">
                    Lock Title Retention Early
                  </p>
                  <p className="text-slate-800 leading-relaxed">
                    Ensure every Space License explicitly excludes fixture-by-annexation under Transfer of Property principles so a landlord&apos;s bank or receiver cannot claim your DC chargers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Initiate EV Fleet Billing or DC Charger Repossession Action
                </h2>
              </div>

              <EvCpoCTA />
            </section>

            {/* Section 9: IND-19 Clean Energy & Cross-Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  IND-19 Solar, EV &amp; Power Recovery Network
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {[
                  {
                    href: "/industries/solar-renewable-ev-power-recovery",
                    title: "IND-19 Solar, EV & Power Recovery Hub",
                    desc: "Master industry pillar covering RESCO PPAs, C&I EPCs, EV CPOs, and DISCOM arrears.",
                  },
                  {
                    href: "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession",
                    title: "OPEX / RESCO Solar PPA Default & Buyout",
                    desc: "Section 9 injunctions and rooftop plant repossession when factory off-takers stop paying.",
                  },
                  {
                    href: "/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery",
                    title: "C&I Rooftop Solar EPC Balance Recovery",
                    desc: "Recovering final commissioning tranches and net-metering holdbacks from factory owners.",
                  },
                  {
                    href: "/solar-panel-module-inverter-distributor-installer-credit-recovery",
                    title: "Solar Module & Inverter Distributor Credit",
                    desc: "NI Act s.138 PDC enforcement, SoGA s.56 price-drop claims, and warranty holds.",
                  },
                  {
                    href: "/subcontractor-payment-recovery-india",
                    title: "Subcontractor Payment Recovery Guide",
                    desc: "Recovering civil, cabling, and electrical erection bills withheld by prime EPCs.",
                  },
                  {
                    href: "/law/section-80-cpc-notice-to-government",
                    title: "Section 80 CPC Notice to Government / PSUs",
                    desc: "Mandatory 2-month statutory notice before suing state transport or PSU depot buyers.",
                  },
                  {
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    title: "MSME 3x RBI Interest Calculator",
                    desc: "Compute exact monthly compounded MSMED s.16 interest on overdue EV/solar invoices.",
                  },
                  {
                    href: "/templates/legal-notice-reply-format",
                    title: "Commercial Legal Notice Workspace",
                    desc: "Draft and customize fact-verified statutory demand notices with annexure checklists.",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#DC2626] transition-colors group"
                  >
                    <p className="font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {linkItem.title} &rarr;
                    </p>
                    <p className="text-slate-600 mt-1 leading-relaxed">{linkItem.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: EV CPO &amp; Charger Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Bare Acts &amp; Official EV Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 font-medium"
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
