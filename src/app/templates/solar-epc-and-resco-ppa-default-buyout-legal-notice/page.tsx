import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SolarNoticeCTA from "./SolarNoticeCTA";
import SolarNoticeTOC from "./SolarNoticeTOC";
import SolarNoticeWorkspace from "./SolarNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/solar-epc-and-resco-ppa-default-buyout-legal-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Clean-Energy Legal Notice Pack: (1) RESCO Solar PPA Default, Inverter Curtailment & Buyout Notice + (2) CapEx Solar EPC Balance Demand";

const EXACT_TITLE = "Solar EPC & RESCO PPA Default / Buyout Legal Notice Format";

const EXACT_DESCRIPTION =
  "Fact-verified Solar EPC & RESCO PPA notice templates covering Deemed Generation, Inverter Curtailment, s.74 Termination Buyout & Roof Access.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(EXACT_TITLE),
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
    title:
      "Arbitration and Conciliation Act, 1996 — Sections 9 & 21 (Interim Injunction, Receiver Access & Limitation Stop)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Indian Contract Act, 1872 — Sections 53, 54, 70 & 74 (Deemed Commissioning & RESCO Termination Buyout)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 — Section 316 (Criminal Breach of Trust for Detained Solar/EV Hardware)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Admissibility of SCADA, WMS Pyranometer & OCPP Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "MSMED Act, 2006 — Sections 15–18 & Income Tax Act Section 43B(h) (3x RBI Interest & Tax Disallowance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
];

const FAQS = [
  {
    q: "Can a RESCO solar developer legally curtail inverters remotely after serving this notice?",
    a: "Yes, provided your OPEX/RESCO PPA contains an Event of Default or Suspension of Supply clause and you serve the mandatory contractual cure notice (typically 7 to 15 days) first. Putting inverters into remote standby or OCPP bay lock eliminates zero-cost captive power draw while you pursue Termination Buyout under Contract Act s.74 or interim relief under Arbitration Act s.9.",
  },
  {
    q: "How does this template handle CapEx Solar EPC final 15–20% net-metering holdbacks?",
    a: "Select the 'CapEx C&I Solar EPC' preset in the workspace above. It activates the Contract Act s.53/54 Deemed Commissioning clause for DISCOM bi-directional meter delays, IEC 61724-1 soiling-adjusted Performance Ratio normalization, and MSMED Act s.15–18 / Income Tax s.43B(h) compound interest demand for divisible Supply Purchase Orders.",
  },
  {
    q: "Why include BNS Section 316 and Arbitration Section 9 in a solar or EV charger notice?",
    a: "When an off-taker or site landlord locks a factory gate, rooftop hatch, or EV charging bay to block plant inspection or hardware dismantling, framing the serialized PV modules, string inverters, and DC fast chargers as entrusted movable property under BNS s.316 alongside an Arbitration s.9 Receiver warning defeats spurious 'immovable fixture' defenses.",
  },
  {
    q: "What notice is required if the rooftop solar off-taker is a PSU, railway, or government body?",
    a: "Where your PPA or EPC contract is with a Central/State Government department or statutory body without an exclusive arbitration clause, you must serve a mandatory 2-month statutory notice under Section 80 of the Code of Civil Procedure (CPC) before instituting a civil recovery suit, while preserving any MSMED MSEFC reference track.",
  },
  {
    q: "How should Deemed Generation hours and SCADA logs be attached to avoid pre-existing dispute claims?",
    a: "Export monthly kWh JMR sheets, inverter SCADA CSVs, and WMS pyranometer irradiance logs in tamper-evident PDF/CSV format and accompany them with a signed Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63 electronic record certificate. Quantifying Deemed Generation hours at the contracted PPA tariff prevents off-takers from alleging vague billing discrepancies.",
  },
  {
    q: "How should this legal notice be served for maximum evidentiary value before MSEFC or Commercial Court?",
    a: "Serve simultaneously via (1) India Post Speed Post / Registered Post AD (RPAD) to both the debtor's MCA-registered office and the plant site, (2) official email to the CFO/Director, and (3) WhatsApp to the authorized signatory—preserving the RPAD tracking receipt and BSA 2023 s.63 electronic delivery certificate.",
  },
];

export default function SolarLegalNoticeTemplatePage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
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
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: EXACT_TITLE,
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    inLanguage: "en-IN",
    learningResourceType: "Legal Notice Template",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solar, RESCO & EV Power Recovery Hub",
        item: `${SITE_URL}/industries/solar-renewable-ev-power-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Solar EPC & RESCO PPA Legal Notice Format",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-19 P1 Notice Workspace</span>
            <span>&bull;</span>
            <span>RESCO PPA Buyout + CapEx EPC + EV CPO Template</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            Built under our{" "}
            <Link
              href="/industries/solar-renewable-ev-power-recovery"
              className="text-red-300 underline underline-offset-2 hover:text-white font-semibold"
            >
              Solar, RESCO &amp; EV Power Recovery Playbook
            </Link>
            , this dual-track notice pack equips clean-energy creditors to trigger{" "}
            <strong className="text-white">7-day remote inverter curtailment</strong>,{" "}
            <strong className="text-white">Contract Act s.74 Termination Buyout</strong>,{" "}
            <strong className="text-white">s.53 Deemed Commissioning</strong>, and{" "}
            <strong className="text-white">Arbitration s.9 roof/bay access</strong>.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="block text-lg sm:text-xl font-black text-red-400">7-Day</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Inverter / OCPP Curtailment Cure Window
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-amber-400">s.53 &amp; s.74</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Contract Act Deemed COD &amp; PPA Buyout
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-emerald-400">3x RBI</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Compound Interest + s.43B(h)
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-slate-100">s.9 + BNS 316</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Receiver Roof Access &amp; Asset Protection
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Solar, RESCO & EV Power Recovery",
              href: "/industries/solar-renewable-ev-power-recovery",
            },
            {
              label: "Solar & RESCO Notice Template",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <SolarNoticeTOC />

          <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-notice-overview"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                Dual-Track Clean-Energy Notice Pack
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Why Generic Demand Notices Fail in Solar &amp; RESCO Disputes
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Standard commercial recovery letters routinely fail for solar EPCs, OPEX/RESCO IPPs, and EV Charge Point Operators (CPOs) because defaulting industrial off-takers exploit technical loopholes—claiming unverified kWh billing, DISCOM net-metering delays, dust-induced Performance Ratio (PR) dips, or landlord roof-access lockouts. Without embedding <strong className="text-slate-900">Bharatiya Sakshya Adhiniyam (BSA) 2023 s.63</strong> telemetry certification and explicit movable-asset title over serialized hardware, creditors lose leverage before the first hearing.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This workspace solves both halves of clean-energy B2B recovery: <strong className="text-slate-900">Track (1)</strong> covers{" "}
                <Link
                  href="/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  OPEX / RESCO Solar PPA Tariff Default, Inverter Curtailment &amp; Termination Buyout
                </Link>
                , while <strong className="text-slate-900">Track (2)</strong> covers{" "}
                <Link
                  href="/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  CapEx C&amp;I Rooftop Solar EPC Net-Metering &amp; Commissioning Balance Recovery
                </Link>
                —alongside a dedicated third preset for EV CPO fleet charger defaults and{" "}
                <Link
                  href="/solar-panel-module-inverter-distributor-installer-credit-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  module/inverter distributor credit recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section id="heading-notice-workspace" className="scroll-mt-28">
              <SolarNoticeWorkspace />
            </section>

            {/* Section 3: Ready-to-Fill Technical & Buyout Schedule Tables */}
            <section
              id="heading-ready-tables"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28 space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Ready-to-Fill Annexure Tables for Your Legal Notice
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Attach these four standardized schedules as <strong className="text-slate-900">Annexure A–D</strong> to your RPAD notice. Courts, arbitral tribunals, and MSEFCs rely on quantified kWp/kWh data rather than narrative allegations.
                </p>
              </div>

              {/* Table 1: Plant Capacity & kWh Meter / SCADA / Deemed Generation */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Schedule A &amp; B: Plant Capacity (kWp), SCADA Readings &amp; Deemed Generation Hours
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">Plant Capacity (kWp)</th>
                        <th className="p-3 font-bold">Billing Period</th>
                        <th className="p-3 font-bold">kWh Meter / SCADA Reading</th>
                        <th className="p-3 font-bold">Deemed Generation Hours</th>
                        <th className="p-3 font-bold">Contract Tariff (₹/kWh)</th>
                        <th className="p-3 font-bold">Total Billed + Deemed (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">1,200 kWp (1.2 MWp)</td>
                        <td className="p-3 text-slate-700">Jun–Sep 2026</td>
                        <td className="p-3 text-slate-700">4,12,500 kWh (JMR + SCADA)</td>
                        <td className="p-3 text-slate-700">68 hrs (Grid/Roof Lockout)</td>
                        <td className="p-3 text-slate-700">₹4.35 / kWh</td>
                        <td className="p-3 font-bold text-[#DC2626]">₹18,40,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-500">[Insert kWp]</td>
                        <td className="p-3 text-slate-500">[MM/YYYY]</td>
                        <td className="p-3 text-slate-500">[Export kWh + Inverter ID]</td>
                        <td className="p-3 text-slate-500">[Curtailment Hrs × WMS]</td>
                        <td className="p-3 text-slate-500">[₹ Tariff]</td>
                        <td className="p-3 font-semibold text-slate-500">[₹ Claim Amount]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: PPA Year-Wise Buyout Value & 7-Day Inverter Curtailment */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Schedule C &amp; D: PPA Year-Wise Buyout Value &amp; 7-Day Inverter Remote-Shutdown Warning
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">PPA Operating Year</th>
                        <th className="p-3 font-bold">Depreciated CapEx / Buyout Factor</th>
                        <th className="p-3 font-bold">Termination Buyout Value (per MWp)</th>
                        <th className="p-3 font-bold">7-Day Inverter Remote-Shutdown Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Year 1 – Year 3</td>
                        <td className="p-3 text-slate-700">90% – 82% of Base EPC + Unamortized Debt</td>
                        <td className="p-3 font-bold text-slate-900">₹3.45 Cr – ₹3.15 Cr</td>
                        <td className="p-3 text-slate-700">Day 1–7 Cure Notice → Day 8 Zero-Export Standby</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Year 4 – Year 7</td>
                        <td className="p-3 text-slate-700">75% – 58% of Base EPC + Buyout Premium</td>
                        <td className="p-3 font-bold text-slate-900">₹2.85 Cr – ₹2.20 Cr</td>
                        <td className="p-3 text-slate-700">Day 8 Remote Inverter Lock + s.9 Roof Access</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Year 8 – Year 15</td>
                        <td className="p-3 text-slate-700">50% – 15% of Base EPC (Schedule II)</td>
                        <td className="p-3 font-bold text-slate-900">₹1.90 Cr – ₹0.58 Cr</td>
                        <td className="p-3 text-slate-700">Buyout Demand or Dismantling &amp; Asset Retrieval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: 5 Mandatory Clauses */}
            <section
              id="heading-statutory-clauses"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                5 Statutory Clauses That Force Early Solar &amp; RESCO Settlement
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Every clause in our generator maps to a specific statutory remedy under Indian commercial law. Use our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                to compute exact 3x RBI Bank Rate interest before locking your demand figure, and review{" "}
                <Link
                  href="/subcontractor-payment-recovery-india"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  subcontractor &amp; EPC payment recovery protocols
                </Link>{" "}
                if back-to-back I&amp;C bills are stuck.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. 7-Day Remote Inverter / OCPP Curtailment",
                    desc: "Eliminates zero-cost captive solar draw during the cure window while establishing clean contractual compliance under PPA Suspension clauses.",
                  },
                  {
                    title: "2. Contract Act s.74 Termination Buyout",
                    desc: "Accelerates the pre-agreed depreciated CapEx schedule so the off-taker faces the full plant buyout rather than merely 2 months of tariff.",
                  },
                  {
                    title: "3. Arbitration s.9 & BNS s.316 Roof/Bay Access",
                    desc: "Establishes movable-asset title over serialized PV modules, inverters, and DC chargers to defeat landlord or factory gate lockouts.",
                  },
                  {
                    title: "4. Deemed Commissioning (s.53/54) & IEC 61724 PR",
                    desc: "Neutralizes DISCOM bi-directional meter stockouts and buyer-caused dust/soiling excuses on CapEx EPC retentions.",
                  },
                  {
                    title: "5. MSMED s.15–18 & Income Tax s.43B(h)",
                    desc: "Triggers 3x RBI Bank Rate compound interest and corporate tax disallowance on overdue Micro/Small supply and O&M invoices.",
                  },
                  {
                    title: "6. Section 80 CPC / Arbitration s.21 Trigger",
                    desc: "Stops the 3-year Limitation Act clock via Arbitration s.21 invocation, or initiates mandatory 2-month notice under Section 80 CPC for PSU/Govt plants.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                For rooftop solar plants installed on government, PSU, railway, or municipal buildings without an arbitration clause, pair this notice with a{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Section 80 CPC Notice to Government
                </Link>{" "}
                before filing a civil recovery suit.
              </p>
            </section>

            {/* Section 5: Annexure & BSA 2023 s.63 Checklist */}
            <section
              id="heading-annexure-checklist"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Mandatory Annexure &amp; BSA 2023 Section 63 Evidence Checklist
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Before dispatching your notice, compile these five evidentiary records. Under <strong className="text-slate-900">Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63</strong>, inverter SCADA exports, Weather Monitoring Station (WMS) irradiance logs, and EV OCPP session records require an electronic hash/device certificate to be admissible in Commercial Court or Arbitration.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <span>
                    <strong className="text-slate-900">Executed PPA / Supply PO &amp; Buyout Schedule:</strong> Signed copy containing Termination Buyout table, Deemed Generation formula, and Arbitration seat/venue clause.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <span>
                    <strong className="text-slate-900">CEIG Charging Approval &amp; JMR Sheets:</strong> Chief Electrical Inspector to Government (CEIG) energization certificate, Joint Meter Reading (JMR) sheets, or DISCOM synchronization application proving Plant Readiness.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <span>
                    <strong className="text-slate-900">SCADA / WMS / OCPP Telemetry + BSA s.63 Certificate:</strong> Timestamped generation CSVs, curtailment logs, and pyranometer GHI data certified under BSA 2023 s.63.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    4
                  </span>
                  <span>
                    <strong className="text-slate-900">Serialized Asset Schedule:</strong> Module flash-test serial numbers, inverter serials, and transformer/DC charger asset tags proving movable chattel ownership.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    5
                  </span>
                  <span>
                    <strong className="text-slate-900">Udyam Certificate &amp; GST Tax Invoices:</strong> Udyam Registration (Micro/Small) dated prior to supply/PO, GSTR-1 reconciliation, and ledger balance confirmation.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 6: Service Protocol */}
            <section
              id="heading-service-protocol"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                RPAD + BSA 2023 Section 63 Multi-Channel Service Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Always dispatch the signed notice via <strong className="text-slate-900">India Post Speed Post / Registered Post AD (RPAD)</strong> to both the debtor&apos;s MCA-registered office and the factory/plant address, alongside <strong className="text-slate-900">official email and WhatsApp</strong>. Retain India Post tracking printouts and SCADA/OCPP telemetry exports with a BSA 2023 s.63 certificate for immediate{" "}
                <strong className="text-slate-900">Section 9 Arbitration interim relief</strong>{" "}
                or MSEFC filing.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 font-bold">Dispatch Channel</th>
                      <th className="p-3 font-bold">Target Address / Recipient</th>
                      <th className="p-3 font-bold">Evidentiary Proof Preserved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Speed Post / RPAD</td>
                      <td className="p-3 text-slate-700">MCA Registered Office + Factory / Plant Site</td>
                      <td className="p-3 text-slate-700">Original Postal Receipt + India Post Delivery Track</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">Official Email</td>
                      <td className="p-3 text-slate-700">Managing Director, CFO &amp; Contract Notice Email</td>
                      <td className="p-3 text-slate-700">EML Header + BSA 2023 s.63 Hash Certificate</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">WhatsApp Business</td>
                      <td className="p-3 text-slate-700">Authorized Signatory &amp; Plant Head</td>
                      <td className="p-3 text-slate-700">Timestamped PDF Delivery + Double-Tick Screenshot</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Dual CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <SolarNoticeCTA />
            </section>

            {/* Section 8: Related Guides */}
            <section id="heading-related-links" className="scroll-mt-28">
              <RelatedRecoveryGuides />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions: Solar &amp; RESCO Legal Notice Format
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 open:bg-white open:border-red-200 transition-colors"
                  >
                    <summary className="text-sm sm:text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
                Primary Statutory Authorities &amp; Official Portals
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] font-medium underline underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
