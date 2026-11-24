import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RescoSolarTableOfContents from "./RescoSolarTableOfContents";
import RescoSolarScenarioTabs from "./RescoSolarScenarioTabs";
import RescoSolarCTA from "./RescoSolarCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Factory Consuming Your Rooftop OPEX Solar Power While Defaulting on PPA Bills & Locking the Factory Gate? Urgent Section 9 & Buyout Playbook";

// Tightened from 61ch PDF draft to 53ch for Screaming Frog 30-60ch compliance
const META_TITLE = "OPEX / RESCO Solar PPA Default: Buyout & Repossession";

// Tightened from 172ch PDF draft to 150ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Your ₹3 Cr RESCO solar plant sits on a defaulter's roof. Enforce remote curtailment, Arbitration Act s.9 roof-access orders & PPA Termination Buyouts.";

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
      "Arbitration and Conciliation Act, 1996 (Section 9 — Interim Measures for Roof Access, Restraining Consumption & Securing Termination Buyout)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 53, 54, 73, 74 & 148–160 — Prevention of Performance, Liquidated Buyout Schedules & Asset Bailment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Specific Relief Act, 1963 (Sections 7, 8 & 36–38 — Recovery of Specific Movable Plant Property & Mandatory Injunctions)",
    url: "https://www.indiacode.nic.in/handle/123456789/1583",
  },
  {
    title:
      "The Electricity Act, 2003 (Net-Metering, Open-Access Captive/Group Captive & Late Payment Surcharge Rules)",
    url: "https://www.indiacode.nic.in/handle/123456789/2052",
  },
  {
    title:
      "Insolvency and Bankruptcy Code, 2016 (Section 18(1)(f) Explanation (a) — Exclusion of Third-Party Bailed/Licensed Solar Assets from CIRP)",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of SCADA, Inverter Telemetry, WMS & JMR Electronic Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a RESCO developer remotely curtail or shut down rooftop solar inverters when a factory stops paying monthly PPA bills?",
    a: "Yes, provided the Power Purchase Agreement (PPA) contains an express Suspension of Supply / Remote Curtailment clause triggered upon uncured payment default after a written cure notice (typically 7–15 days). The developer must serve a formal Event of Default & Curtailment Notice first, execute a clean remote zero-export or inverter standby command without interfering with the factory's own utility switchgear, and log every timestamp under BSA 2023 Section 63.",
  },
  {
    q: "What legal remedy forces a defaulting factory to unlock its gate and allow our engineers onto the roof?",
    a: "File an urgent Section 9 Petition under the Arbitration and Conciliation Act, 1996 before the jurisdictional Commercial Court or High Court. Because a 1 MW rooftop plant worth ₹3–4 Crore is a wasting, maintenance-sensitive asset exposed to electrical fire and warranty voiding if unserviced, courts routinely grant ad-interim mandatory injunctions directing the Offtaker to provide unhindered roof access (with police assistance if necessary) and restraining unauthorized power draw.",
  },
  {
    q: "Are PPA Termination Buyout Schedules legally enforceable in India, or do courts strike them down as penalties?",
    a: "A well-drafted Termination Buyout Schedule—which steps down each year from Year 1 to Year 15–25 in line with debt amortisation and depreciated CapEx—is enforceable under Section 74 of the Indian Contract Act, 1872 as a genuine pre-estimate of unrecovered capital expenditure, not an arbitrary penalty. To fortify enforceability, the RESCO SPV should place its EPC capitalisation ledger, term-loan sanction schedule, and tax-depreciation table on record.",
  },
  {
    q: "What if the factory owner claims our solar plant caused roof leakage or failed guaranteed generation only after receiving our demand notice?",
    a: "Belated technical excuses raised months after commercial operation and only in response to payment demands fail the Mobilox bona fide pre-existing dispute test. Rebut them using the signed Roof Handover & Structural Stability Certificate at COD, periodic preventive-maintenance checklists, and BSA 2023 Section 63 certified WMS pyranometer/SCADA irradiance logs showing that any generation drop resulted from grid outages or Offtaker breaker tripping.",
  },
  {
    q: "How do we protect our ₹3 Crore rooftop solar plant if the defaulting factory enters NCLT insolvency (IBC)?",
    a: "Under Explanation (a) to Section 18(1)(f) of the Insolvency and Bankruptcy Code, 2016, assets owned by a third party that are in the possession of the Corporate Debtor under contractual or bailment arrangements do not form part of the insolvency estate. Maintaining explicit Title Retention clauses in the PPA, CERSAI/ROC charge filings on the RESCO SPV, and serial-number asset registers prevents the Resolution Professional from treating your solar plant as the defaulter's collateral.",
  },
  {
    q: "Can a RESCO developer disconnect the solar ACDB/LT panel physically if the Offtaker disables remote GPRS telemetry?",
    a: "Do not attempt unilateral physical entry or forced disconnection by private security guards if the factory gate is locked—that invites trespass or breach-of-peace counter-FIRs. Instead, document the telemetry sabotage via server heartbeat loss logs, issue an immediate 7-day Cure-and-Access Notice, and seek a Section 9 mandatory injunction for court-supervised access, inverter isolation, or full plant dismantling.",
  },
  {
    q: "Can Udyam-registered solar EPC and O&M vendors also use MSMED Act Section 16 or Section 43B(h) on RESCO disputes?",
    a: "While pure long-term electricity supply PPAs are typically arbitrated under the PPA's dispute clause, standalone EPC balance invoices, BOS material supply, and annual O&M service contracts held by Udyam-registered Micro or Small Enterprises qualify for 3x RBI bank rate compound interest under MSMED Act Sections 15–18 and buyer tax disallowance under Section 43B(h) of the Income Tax Act.",
  },
];

const HOWTO_STEPS = [
  {
    name: "Freeze Telemetry & Serve 7-Day Event of Default Notice",
    text: "Export BSA 2023 s.63 certified SCADA, JMR, and inverter heartbeat logs; serve a formal Event of Default and Cure Notice via Email, WhatsApp, and Speed Post RPAD demanding overdue tariff plus Late Payment Surcharge.",
  },
  {
    name: "Execute PPA-Authorized Remote Zero-Export Curtailment",
    text: "Upon expiry of the cure window without payment, execute a logged remote standby/zero-export command on the string or central inverters strictly within PPA suspension rights without touching factory switchgear.",
  },
  {
    name: "Issue Termination Notice & Quantify Buyout Schedule Value",
    text: "If arrears remain uncured or the Offtaker blocks roof access/kills telemetry, serve the Termination Notice crystallising the Year-N Termination Buyout Price, accrued LPS, and dismantling/restoration costs.",
  },
  {
    name: "File Urgent Arbitration Act Section 9 Petition",
    text: "Move the Commercial Court or High Court under Section 9 of the Arbitration and Conciliation Act, 1996 for mandatory roof access, injunction against unauthorized solar draw, and bank-guarantee/escrow security for the Buyout Value.",
  },
  {
    name: "Enforce Buyout Recovery or Execute Supervised Repossession",
    text: "Either settle on full Termination Buyout + arrears (transferring plant title post-clearance) or execute court-monitored dismantling and redeployment of modules, inverters, and MMS structures.",
  },
];

export default function OpexRescoSolarPpaDefaultPage() {
  const breadcrumbItems = [
    {
      label: "Solar, Renewable & EV Power Recovery",
      href: "/industries/solar-renewable-ev-power-recovery",
    },
    {
      label: "OPEX / RESCO Solar PPA Default & Buyout",
      href: PAGE_URL,
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    inLanguage: "en-IN",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
      url: `${SITE_URL}/about`,
    },
    reviewedBy: {
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
    about: [
      "OPEX Solar PPA Payment Default",
      "RESCO Solar Termination Buyout",
      "Arbitration Act Section 9 Roof Access Injunction",
      "Rooftop Solar Plant Repossession",
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Enforce RESCO Solar PPA Default, Section 9 Roof Access & Termination Buyout in India",
    description: META_DESCRIPTION,
    totalTime: "P21D",
    step: HOWTO_STEPS.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
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
        name: "Solar, Renewable & EV Power Recovery",
        item: `${SITE_URL}/industries/solar-renewable-ev-power-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "OPEX / RESCO Solar PPA Default & Buyout",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <span>IND-19 · Solar &amp; Renewable IPP/RESCO Playbook</span>
            <span className="text-slate-500">&bull;</span>
            <span>Arbitration Act s.9 &amp; Buyout Enforcement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When a factory consumes OPEX rooftop solar power while defaulting on
            PPA bills and locking the gate, immediately serve a 7-day Event of
            Default notice, execute PPA-authorized remote inverter curtailment,
            and file an urgent{" "}
            <strong className="text-white">
              Arbitration Act Section 9 petition
            </strong>{" "}
            for mandatory roof access and Termination Buyout security under our{" "}
            <Link
              href="/industries/solar-renewable-ev-power-recovery"
              className="text-red-300 underline hover:text-white transition-colors"
            >
              Solar, Renewable &amp; EV Power Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-lg sm:text-2xl font-black text-slate-100">
                &#8377;3–5 Cr/MW
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                RESCO CapEx Bolted to Client Roof
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-amber-400">
                7–15 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                PPA Cure &amp; Curtailment Notice
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400">
                Section 9
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Mandatory Roof-Access Injunction
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-red-400">
                100% Buyout
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Contract Act s.74 Schedule Recovery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <RescoSolarTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-rooftop-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Rooftop OPEX &amp; RESCO Solar PPAs Turn Into Hostage Assets
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  In India&apos;s Commercial &amp; Industrial (C&amp;I) clean-energy
                  sector, the{" "}
                  <strong>OPEX / RESCO (Renewable Energy Service Company)</strong>{" "}
                  model flips traditional credit risk on its head. Instead of the
                  factory funding solar CapEx, the RESCO SPV invests{" "}
                  <strong>&#8377;3.2 Crore to &#8377;4.5 Crore per MW</strong>{" "}
                  (often 70%–75% project-financed by PSU or NBFC green lenders) to
                  bolt 1,800+ solar PV modules, string inverters, ACDB/LT panels,
                  and hot-dip galvanised structures directly onto a textile,
                  steel, cold-storage, or auto-component factory&apos;s roof.
                </p>
                <p>
                  For the first 12 to 24 months, the factory enjoys &#8377;3.80–&#8377;4.90/kWh
                  solar tariffs—a 30%–45% discount to industrial DISCOM grid
                  rates. Trouble erupts when the Offtaker faces a working-capital
                  crunch or changes management. The factory stops clearing monthly
                  PPA invoices, unplugs the GPRS/4G SCADA telemetry modem so the
                  developer cannot monitor kWh generation, and instructs plant
                  security guards to deny roof access to O&amp;M engineers.
                </p>
                <p>
                  Every day of inaction compounds three fatal losses for the
                  RESCO CFO: (1) the Offtaker consumes{" "}
                  <strong>free zero-cost solar electricity</strong> off the
                  synchronized LT busbar, (2) unmaintained DC strings and
                  soiling degrade PR (Performance Ratio) and void OEM inverter
                  warranties, and (3) project debt DSCR breaches trigger lender
                  penal interest. You cannot send private security to storm a
                  factory gate—doing so invites trespass FIRs. You need a
                  disciplined, court-backed{" "}
                  <strong>
                    Remote Curtailment + Section 9 Injunction + Termination
                    Buyout
                  </strong>{" "}
                  escalation sequence.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Section 9, Curtailment &amp; Buyout Escalation Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this strict 21-day legal-operational pipeline to convert a
                locked-gate rooftop tariff default into either a fully secured
                Termination Buyout payout or a court-protected plant
                repossession.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto mb-6">
                <svg
                  viewBox="0 0 920 210"
                  width="920"
                  height="210"
                  role="img"
                  aria-label="5-Stage RESCO Solar PPA Default Escalation Pipeline"
                  className="w-full h-auto"
                >
                  <rect width="920" height="210" rx="16" fill="#0F172A" />
                  {/* Stage 1 */}
                  <rect x="20" y="30" width="156" height="150" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="34" y="56" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 · DAY 1–3</text>
                  <text x="34" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">SCADA Lock &amp;</text>
                  <text x="34" y="96" fill="#FFFFFF" fontSize="13" fontWeight="bold">7-Day EoD Notice</text>
                  <text x="34" y="122" fill="#CBD5E1" fontSize="11">Export BSA s.63 logs;</text>
                  <text x="34" y="138" fill="#CBD5E1" fontSize="11">serve Cure Notice via</text>
                  <text x="34" y="154" fill="#CBD5E1" fontSize="11">Email + RPAD + WA</text>

                  <path d="M176 105 L198 105" stroke="#DC2626" strokeWidth="2.5" />
                  {/* Stage 2 */}
                  <rect x="200" y="30" width="156" height="150" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="214" y="56" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 · DAY 8–10</text>
                  <text x="214" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Remote Zero-</text>
                  <text x="214" y="96" fill="#FFFFFF" fontSize="13" fontWeight="bold">Export Curtailment</text>
                  <text x="214" y="122" fill="#CBD5E1" fontSize="11">Invoke PPA suspension</text>
                  <text x="214" y="138" fill="#CBD5E1" fontSize="11">clause; place inverters</text>
                  <text x="214" y="154" fill="#CBD5E1" fontSize="11">in logged standby</text>

                  <path d="M356 105 L378 105" stroke="#DC2626" strokeWidth="2.5" />
                  {/* Stage 3 */}
                  <rect x="380" y="30" width="156" height="150" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="394" y="56" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 3 · DAY 11–14</text>
                  <text x="394" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Termination &amp;</text>
                  <text x="394" y="96" fill="#FFFFFF" fontSize="13" fontWeight="bold">Buyout Demand</text>
                  <text x="394" y="122" fill="#CBD5E1" fontSize="11">Crystallise Year-N</text>
                  <text x="394" y="138" fill="#CBD5E1" fontSize="11">Buyout Schedule +</text>
                  <text x="394" y="154" fill="#CBD5E1" fontSize="11">LPS + Lender Notice</text>

                  <path d="M536 105 L558 105" stroke="#DC2626" strokeWidth="2.5" />
                  {/* Stage 4 */}
                  <rect x="560" y="30" width="156" height="150" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="574" y="56" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4 · DAY 15–21</text>
                  <text x="574" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Arbitration Act s.9</text>
                  <text x="574" y="96" fill="#FFFFFF" fontSize="13" fontWeight="bold">Roof-Access Order</text>
                  <text x="574" y="122" fill="#CBD5E1" fontSize="11">Urgent Commercial</text>
                  <text x="574" y="138" fill="#CBD5E1" fontSize="11">Court injunction +</text>
                  <text x="574" y="154" fill="#CBD5E1" fontSize="11">BG/escrow security</text>

                  <path d="M716 105 L738 105" stroke="#DC2626" strokeWidth="2.5" />
                  {/* Stage 5 */}
                  <rect x="740" y="30" width="160" height="150" rx="10" fill="#064E3B" stroke="#10B981" />
                  <text x="754" y="56" fill="#6EE7B7" fontSize="11" fontWeight="bold">STAGE 5 · RESOLUTION</text>
                  <text x="754" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Buyout Payout or</text>
                  <text x="754" y="96" fill="#FFFFFF" fontSize="13" fontWeight="bold">Plant Repossession</text>
                  <text x="754" y="122" fill="#D1FAE5" fontSize="11">Escrow Buyout or</text>
                  <text x="754" y="138" fill="#D1FAE5" fontSize="11">police-assisted</text>
                  <text x="754" y="154" fill="#D1FAE5" fontSize="11">safe dismantling</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-4">
                {HOWTO_STEPS.map((step, i) => (
                  <div
                    key={step.name}
                    className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Stage {i + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5 mb-1">
                      {step.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.text}
                    </p>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  RESCO Solar Statutory Matrix: Arbitration s.9, Contract Act &amp; IBC
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Standard money-recovery suits take years while your solar asset
                depreciates on a hostile roof. Combine these five statutory
                levers to secure immediate interim protection and full CapEx
                recovery.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Provision</th>
                      <th className="p-3.5 font-bold">Creditor Remedy in RESCO Default</th>
                      <th className="p-3.5 font-bold">Forum &amp; Timeline</th>
                      <th className="p-3.5 font-bold">Critical Pre-Condition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Arbitration Act 1996, s.9
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Ad-interim mandatory injunction for unhindered roof
                        access, inverter isolation/dismantling &amp; Buyout BG
                        security
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Commercial Court / High Court (7–21 days urgent relief)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Valid Arbitration Clause in PPA + Section 21 Notice
                        within 90 days
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act 1872, s.73–74
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Enforces Year-N Termination Buyout Schedule as genuine
                        pre-estimate of unamortized CapEx
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Arbitral Tribunal / Commercial Court
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Strict adherence to PPA cure window &amp; Termination
                        Notice format
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act, s.53 &amp; s.54
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Defeats Offtaker excuses where factory breaker-tripping
                        or gate lockout prevented generation
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Arbitral Tribunal / MSEFC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contemporaneous SCADA/WMS irradiance &amp; grid-loss logs
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Specific Relief Act, s.7–8
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Specific delivery/repossession of movable solar modules,
                        inverters &amp; MMS structures
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Commercial Court / Arbitral Tribunal
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Express PPA Title Retention &amp; &ldquo;Chattel / Non-Fixture&rdquo;
                        clause
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC 2016, s.18(1)(f) Expl. (a)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Excludes third-party RESCO plant from Offtaker&apos;s
                        insolvency estate during NCLT CIRP
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NCLT / Resolution Professional
                      </td>
                      <td className="p-3.5 text-slate-700">
                        SPV fixed-asset register, CERSAI charge &amp; tax
                        depreciation proof
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 High-Stakes RESCO PPA Default Scenarios &amp; Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact operational bottleneck below to inspect the
                Day-1 notice protocol, court remedy, and mandatory evidence
                pack.
              </p>

              <RescoSolarScenarioTabs />
            </section>

            {/* Section 5: Worked Financial Ledger */}
            <section
              id="heading-buyout-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Financial Ledger: 1 MW Year-2 PPA Default &amp; Buyout
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Why chasing only unpaid monthly bills is a strategic mistake: in
                a 1 MWp rooftop RESCO project (&#8377;3.60 Cr CapEx, &#8377;4.40/kWh
                tariff, 15-year PPA), Month 18–21 tariff arrears are only{" "}
                <strong>&#8377;22.4 Lakh</strong>, whereas the unrecovered
                project exposure exceeds <strong>&#8377;3.35 Crore</strong>.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                    1 MWp Textile Factory RESCO Claim Breakdown (Year 2 Default)
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    Contract Act s.74 + s.9 Security
                  </span>
                </div>
                <div className="p-5 bg-slate-50 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">
                      4 Months Unpaid Solar Tariff Bills (5,09,000 kWh @ &#8377;4.40)
                    </span>
                    <span className="font-bold text-slate-900">&#8377;22,39,600</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">
                      Contractual Late Payment Surcharge (1.5% / month compounded)
                    </span>
                    <span className="font-bold text-slate-900">&#8377;1,12,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">
                      Year-2 PPA Termination Buyout Schedule Value (Depreciated CapEx + Debt Breakage)
                    </span>
                    <span className="font-bold text-slate-900">&#8377;3,12,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">
                      Alternative: Dismantling, Craneage &amp; Re-Commissioning Loss (if repossessed)
                    </span>
                    <span className="font-bold text-amber-700">&#8377;38,50,000</span>
                  </div>
                  <div className="flex justify-between p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="font-extrabold text-emerald-900">
                      Total Crystallised Termination Buyout Demand (Excl. GST)
                    </span>
                    <span className="font-black text-emerald-700 text-base">
                      &#8377;3,35,51,600
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: SCADA & BSA s.63 Checklist */}
            <section
              id="heading-scada-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  SCADA, JMR &amp; BSA 2023 s.63 Electronic Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before filing a Section 9 Commercial Court petition, compile
                these six evidentiary pillars so the Offtaker cannot stall
                interim relief with fabricated &ldquo;low generation&rdquo; or
                &ldquo;billing discrepancy&rdquo; claims:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed PPA & Roof License Deed",
                    desc: "Highlighting Title Retention, Non-Fixture Chattel status, Cure Period, Suspension/Curtailment right, Year-N Buyout Schedule, and Arbitration Clause.",
                  },
                  {
                    title: "2. CEIG Approval & COD Handover",
                    desc: "Chief Electrical Inspector to Government (CEIG) energisation approval, DISCOM net-metering sync letter, and joint Roof Structural Stability sign-off.",
                  },
                  {
                    title: "3. Joint Meter Reading (JMR) Slips",
                    desc: "Monthly bidirectional ABT/solar generation meter readings signed or acknowledged by the factory's electrical engineer prior to the default.",
                  },
                  {
                    title: "4. SCADA & WMS Pyranometer Logs",
                    desc: "15-minute DC string, inverter availability, and irradiance logs proving the plant generated at normative PR until the Offtaker unplugged telemetry.",
                  },
                  {
                    title: "5. Gate-Lockout & Telemetry Tamper Proof",
                    desc: "Timestamped O&M engineer site-visit logs, security-gate denial emails, and cloud SCADA heartbeat-drop alerts matching the default date.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Mandatory electronic evidence affidavit signed by the RESCO NOC/SCADA administrator authenticating all CSV generation exports and GST e-invoices.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Guardrails */}
            <section
              id="heading-curtailment-guardrails"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Legal Guardrails: Remote Curtailment vs. Sabotage Liability
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Permitted Under PPA Default Clause
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Logged Remote Standby / Zero-Export
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    After expiry of the written 7–15 day Cure Notice, placing
                    developer-owned inverters into remote standby or zero-export
                    mode strictly stops uncompensated generation without
                    affecting the factory&apos;s DISCOM grid supply.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Strictly Prohibited Self-Help
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Never Force Gate Entry or Trip Factory HT
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Never scale factory walls, cut padlocks, or interfere with
                    the Offtaker&apos;s main HT/LT incomer. Unilateral physical
                    self-help triggers criminal trespass, mischief, and factory
                    production-loss counterclaims that derail Section 9 relief.
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Launch Single-Site PPA Notice or Bulk Solar Portfolio Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are enforcing a single &#8377;3 Cr rooftop RESCO
                Termination Buyout or managing 25+ C&amp;I O&amp;M and PPA
                arrears across industrial estates, start immediately below.
              </p>

              <RescoSolarCTA />
            </section>

            {/* Section 9: Related Solar & Commercial Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Solar EPC, Power &amp; Commercial Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/solar-renewable-ev-power-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Parent Industry Hub
                  </span>
                  <span className="font-bold text-slate-900">
                    Solar EPC, Renewable IPP, EV &amp; Power Recovery Hub &rarr;
                  </span>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Interactive Calculator (T1)
                  </span>
                  <span className="font-bold text-slate-900">
                    MSME 3x RBI Compound Interest &amp; s.43B(h) Calculator &rarr;
                  </span>
                </Link>

                <Link
                  href="/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Solar Spoke
                  </span>
                  <span className="font-bold text-slate-900">
                    C&amp;I Rooftop Solar EPC &amp; Net-Metering Balance Recovery &rarr;
                  </span>
                </Link>

                <Link
                  href="/solar-panel-module-inverter-distributor-installer-credit-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Solar Spoke
                  </span>
                  <span className="font-bold text-slate-900">
                    Solar Module &amp; Inverter Distributor Credit Recovery &rarr;
                  </span>
                </Link>

                <Link
                  href="/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Solar Spoke
                  </span>
                  <span className="font-bold text-slate-900">
                    DISCOM, KUSUM &amp; SNA Renewable Payment Delay (LPS Rules) &rarr;
                  </span>
                </Link>

                <Link
                  href="/subcontractor-payment-recovery-india"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Live EPC Cross-Link
                  </span>
                  <span className="font-bold text-slate-900">
                    EPC Subcontractor Payment Recovery in India &rarr;
                  </span>
                </Link>

                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Live Statutory Guide
                  </span>
                  <span className="font-bold text-slate-900">
                    Section 80 CPC Notice for PSU &amp; Nodal Agency Arrears &rarr;
                  </span>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Notice Workspace (P1)
                  </span>
                  <span className="font-bold text-slate-900">
                    Ready-to-Use Commercial Notice &amp; Reply Workspace &rarr;
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: RESCO PPA Default &amp; Repossession
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black shrink-0 group-open:rotate-45 transition-transform">
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
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2"
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
