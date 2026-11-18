import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import StpEtpTableOfContents from "./StpEtpTableOfContents";
import StpEtpScenarioTabs from "./StpEtpScenarioTabs";
import StpEtpCTA from "./StpEtpCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/stp-etp-zld-water-treatment-biogas-turnkey-plant-payment-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Commissioned the STP, ETP, ZLD or Biogas Plant, Yet the Factory Freezes Your Final 25% After Obtaining PCB Consent to Operate?";

const META_TITLE = "STP, ETP & ZLD Plant Turnkey Balance Recovery India";

const META_DESCRIPTION =
  "Factories and builders stall final 25% STP/ETP/ZLD and biogas turnkey payments after obtaining PCB Consent to Operate. Enforce Deemed Acceptance & MSMED.";

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
      "The Indian Contract Act, 1872 (Sections 51–54 & 70 — Reciprocal Promises, Influent Breach & Quantum Meruit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Section 42 — Deemed Acceptance via Commercial & Regulatory Utilization)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Corporate Tax Disallowance on Unpaid Micro & Small Supplier Invoices)",
    url: "https://www.incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of OCEMS Online Effluent & Biogas SCADA Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Central Pollution Control Board (CPCB) — Effluent Discharge Standards & OCEMS Guidelines",
    url: "https://cpcb.nic.in/",
  },
];

const FAQS = [
  {
    q: "Can a factory or builder withhold the final 25% of an STP/ETP/ZLD contract even after obtaining State PCB Consent to Operate (CTO)?",
    a: "No. Obtaining State Pollution Control Board (SPCB) Consent to Operate (CTO) or a Municipal Occupancy Certificate (OC) on the strength of your installed plant, coupled with continuous daily effluent treatment, constitutes Deemed Acceptance under Section 42 of the Sale of Goods Act, 1930 and Section 70 of the Indian Contract Act, 1872. A buyer cannot enjoy statutory compliance while indefinitely freezing the final commissioning milestone.",
  },
  {
    q: "What if the factory feeds unsegregated high-COD chemical effluent and blames our ETP/ZLD for membrane fouling?",
    a: "Performance guarantees in water-treatment contracts apply strictly within the signed Basis of Design (BOD) inlet parameters (COD, BOD, TDS, pH, oil & grease). Under Section 53 of the Indian Contract Act, 1872, if the buyer's own shock-loading or skipped dosing caused biological culture death or RO scaling, the buyer cannot rely on its own breach to withhold payment. Preserve OCEMS/inlet lab logs to prove off-spec influent.",
  },
  {
    q: "Can an STP/ETP/ZLD vendor use the MSME Samadhaan portal if the buyer claims it is a 'works contract'?",
    a: "Yes, whenever electro-mechanical equipment (RO skids, MBBR media, filter presses, blowers, dosing pumps, PLC panels) is billed under a separate Supply PO or segregated HSN-coded supply invoices backed by e-Way Bills. Courts and MSEFCs enforce MSMED Act Sections 15–18 on the divisible equipment supply tranche, triggering 3x RBI Bank Rate compound interest and Income Tax Section 43B(h) disallowance.",
  },
  {
    q: "How do we recover overdue monthly O&M chemical and operator fees when the factory refuses to sign logbooks?",
    a: "Use biometric/gate-entry attendance logs, chemical drum delivery e-Way Bills, NABL outlet water test reports, and online OCEMS analyzer exports certified under BSA 2023 Section 63. Serve a 15-day O&M Arrears & Manpower Demobilization Notice warning that withdrawal of certified operators will expose the factory to PCB closure/show-cause liability.",
  },
  {
    q: "What evidence defeats 'incomplete stabilization' excuses on Bio-CNG / Biogas digesters?",
    a: "Maintain daily slurry feedstock TS/VS lab reports alongside BSA s.63-certified biogas flowmeter SCADA logs and PESO safety clearances. Demonstrating that per-kg Volatile Solids (VS) gas yield meets design specs—while total Nm3/day dropped only due to buyer-side feedstock dilution—establishes Deemed PGTR Satisfaction.",
  },
];

export default function StpEtpRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How STP, ETP, ZLD & Biogas Turnkey Vendors Recover Withheld Final 25% Balances",
    description:
      "5-step creditor playbook using PCB CTO utilization proof, NABL outlet reports, OCEMS inlet shock-load logs, and divisible Supply PO MSME leverage.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Compile PCB CTO, NABL Outlet Reports & OCEMS Logs",
        text: "Secure copies of State PCB Consent to Operate (CTO), NABL-accredited BOD/COD/TDS outlet test reports, and BSA s.63 OCEMS logs.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Document Inlet Shock-Loading vs. Basis of Design",
        text: "Match inlet lab/OCEMS spikes against the contractual Basis of Design to rebut false membrane-fouling or low-biogas-yield claims.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Segregate Divisible Equipment Supply POs for MSEFC",
        text: "Isolate pumps, blowers, membranes, and PLC supply invoices (with e-Way Bills) to trigger MSMED s.15–18 and s.43B(h).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve 15-Day Deemed Acceptance & O&M Demobilization Notice",
        text: "Demand final 25% release citing CTO utilization under Sale of Goods Act s.42 and Contract Act s.53/70.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate to MSEFC Samadhaan or Commercial Court Order XXXVII",
        text: "File MSEFC claim on supply tranches or Commercial Court summary suit for full turnkey balance plus 18%–3x RBI interest.",
      },
    ],
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
        name: "STP, ETP, ZLD & Biogas Plant Recovery",
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
            <span>IND-19 Playbook</span>
            <span>&bull;</span>
            <span>STP, ETP, ZLD Water-Treatment &amp; Biogas Plant Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
            Water-treatment and Bio-CNG EPCs routinely deliver compliant plants that secure the buyer&apos;s <strong className="text-white">State PCB Consent to Operate (CTO)</strong> or Occupancy Certificate—only to have the factory or builder freeze the final 25% balance and monthly O&amp;M fees. Enforce <strong className="text-white">Sale of Goods Act s.42 Deemed Acceptance</strong>, <strong className="text-white">Contract Act s.53</strong>, and <strong className="text-white">MSMED s.15–18</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              PCB CTO Deemed Acceptance
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              Inlet Shock-Load Rebuttal
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              Divisible Skid Supply MSME
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Solar, RESCO & EV Power Recovery",
              href: "/industries/solar-renewable-ev-power-recovery",
            },
            {
              label: "STP, ETP, ZLD & Biogas Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <StpEtpTableOfContents />

          <main className="flex-1 min-w-0 w-full space-y-12">
            {/* Section 1: Executive Answer Box */}
            <section
              id="heading-cto-milestone-trap"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                Executive Creditor Answer Box
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                How Water-Treatment &amp; Biogas EPCs Break the Post-CTO 25% Payment Freeze
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The single strongest legal weapon for an STP, ETP, or ZLD contractor is the buyer&apos;s own <strong className="text-slate-900">State PCB Consent to Operate (CTO)</strong> or Municipal Occupancy Certificate. Under <strong className="text-slate-900">Section 42 of the Sale of Goods Act, 1930</strong> and <strong className="text-slate-900">Section 70 of the Indian Contract Act, 1872</strong>, once the buyer relies on your commissioned plant for statutory environmental clearance and runs daily factory/residential discharge through it, the plant is deemed accepted.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Combined with <strong className="text-slate-900">NABL outlet test reports</strong>, <strong className="text-slate-900">BSA 2023 s.63 OCEMS inlet logs</strong> (to defeat false chemical shock-load claims), and <strong className="text-slate-900">divisible Supply PO MSME filings</strong>, EPCs can force settlement without waiting years in civil litigation.
              </p>
            </section>

            {/* Section 2: 5-Step Recovery Pipeline */}
            <section
              id="heading-decision-tree"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                5-Stage STP, ETP, ZLD &amp; Biogas Payment Recovery Rail
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Anchor your legal notice in statutory PCB compliance and Basis-of-Design telemetry before the buyer fabricates post-handover snag lists.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  {
                    step: "Stage 1",
                    title: "CTO & NABL Proof",
                    desc: "Archive State PCB CTO/OC, NABL outlet BOD/COD/TDS reports, and trial-run logs.",
                  },
                  {
                    step: "Stage 2",
                    title: "Inlet BOD Audit",
                    desc: "Export OCEMS/inlet lab logs proving any shock-load or feedstock dilution is buyer-caused.",
                  },
                  {
                    step: "Stage 3",
                    title: "Supply PO Split",
                    desc: "Segregate pumps, RO skids, membranes & blowers (e-Way Bills) for MSMED s.15–18.",
                  },
                  {
                    step: "Stage 4",
                    title: "15-Day Notice",
                    desc: "Serve Deemed Acceptance + O&M Demobilization Warning via RPAD, Email & WhatsApp.",
                  },
                  {
                    step: "Stage 5",
                    title: "MSEFC / Order XXXVII",
                    desc: "Enforce 3x RBI compound interest at MSEFC or summary decree in Commercial Court.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.step}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Statutory Matrix for Water-Treatment &amp; Biogas Contractors
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 rounded-tl-xl font-bold">Statute</th>
                      <th className="p-3 font-bold">Technical Trigger</th>
                      <th className="p-3 rounded-tr-xl font-bold">Creditor Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">Sale of Goods Act s.42</td>
                      <td className="p-3 text-slate-700">Buyer obtains PCB CTO / OC &amp; runs plant</td>
                      <td className="p-3 text-slate-700">Conclusive Deemed Acceptance of supplied plant</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Contract Act s.53 &amp; s.54</td>
                      <td className="p-3 text-slate-700">Influent COD shock-load / diluted biogas feed</td>
                      <td className="p-3 text-slate-700">Bars buyer from withholding PGTR over its own breach</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">MSMED Act s.15–18</td>
                      <td className="p-3 text-slate-700">Divisible skid/membrane/pump Supply POs</td>
                      <td className="p-3 text-slate-700">3x RBI Bank Rate compound interest via MSEFC</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Income Tax s.43B(h)</td>
                      <td className="p-3 text-slate-700">Micro/Small Udyam dues unpaid &gt;45 days</td>
                      <td className="p-3 text-slate-700">Corporate tax disallowance pressure on buyer&apos;s CFO</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">BSA 2023 s.63</td>
                      <td className="p-3 text-slate-700">Online OCEMS &amp; biogas flowmeter SCADA logs</td>
                      <td className="p-3 text-slate-700">Admissible electronic proof of daily compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                4 High-Friction STP, ETP, ZLD &amp; Biogas Payment Scenarios
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Select your project bottleneck to inspect the statutory counter and technical evidence checklist.
              </p>
              <StpEtpScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-recovery-ledger"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Worked Recovery Ledger: &#8377;38 Lakh 150 KLD ZLD Turnkey + O&amp;M Arrears
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                      <th className="p-3 font-bold">Tranche / Claim</th>
                      <th className="p-3 font-bold">Statutory Basis</th>
                      <th className="p-3 font-bold text-right">Amount (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Divisible RO/MEE Skid Supply Balance</td>
                      <td className="p-3 text-slate-600">MSMED Act s.15 + s.43B(h) (e-Way Bill &amp; SRV)</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;14,50,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Post-CTO Commissioning 20% Milestone</td>
                      <td className="p-3 text-slate-600">Sale of Goods s.42 Deemed Acceptance</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;12,00,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">6-Month O&amp;M Chemicals &amp; Operators</td>
                      <td className="p-3 text-slate-600">Contract Act s.70 + Biometric &amp; Lab Logs</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;7,20,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">MSMED 3x RBI Compound Interest</td>
                      <td className="p-3 text-slate-600">Accrued on delayed Supply &amp; O&amp;M invoices</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;4,30,000</td>
                    </tr>
                    <tr className="bg-red-50/70">
                      <td className="p-3 font-extrabold text-slate-900">Total Claimable Recovery</td>
                      <td className="p-3 text-slate-700 font-semibold">Enforced via MSEFC + Order XXXVII CPC</td>
                      <td className="p-3 text-right font-extrabold text-[#DC2626]">&#8377;38,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: NABL & CTO Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Mandatory NABL, PCB CTO &amp; OCEMS Evidence Checklist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. State PCB CTO / Occupancy Utilization",
                    desc: "Obtain the factory's or builder's Consent to Operate (CTO) or OC reference showing your STP/ETP capacity as the approved pollution-control asset.",
                  },
                  {
                    title: "2. NABL Outlet Water Quality Reports",
                    desc: "Archive third-party NABL lab reports confirming treated water BOD (<10/30 mg/L), COD, TSS, and pH within SPCB norms.",
                  },
                  {
                    title: "3. OCEMS / Inlet Shock-Load Proof",
                    desc: "Export BSA s.63-certified OCEMS analyzer data proving any performance dip coincided with buyer-side toxic or high-TDS effluent surges.",
                  },
                  {
                    title: "4. Segregated Equipment Supply Trail",
                    desc: "Compile HSN-coded equipment invoices, e-Way Bills, LRs, and Udyam certificate predating the PO for MSEFC jurisdiction.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{card.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: O&M & Chemical Arrears */}
            <section
              id="heading-om-chemical-arrears"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                Recovering Monthly O&amp;M Chemical &amp; Operator Fees Without Triggering PCB Risk
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Many STP/ETP contractors continue supplying coagulants, antiscalants, and 24/7 plant operators for 4–8 months without payment out of fear that stopping operations will trigger environmental liability. In reality, statutory PCB compliance rests on the <strong className="text-slate-900">occupier / factory owner</strong> under the Water (Prevention and Control of Pollution) Act, 1974.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By serving a formal <strong className="text-slate-900">15-Day O&amp;M Arrears &amp; Planned Handover-Demobilization Notice</strong>—putting the occupier on written notice to clear arrears or deploy its own licensed operators—you shift regulatory risk back onto the defaulting buyer while locking in your <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] font-semibold hover:underline">MSME 3x RBI compound interest</Link> and <Link href="/subcontractor-payment-recovery-india" className="text-[#DC2626] font-semibold hover:underline">turnkey EPC retention recovery</Link>.
              </p>
            </section>

            {/* Section 8: Dual CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <StpEtpCTA />
            </section>

            {/* Section 9: Related Guides */}
            <section id="heading-related-links" className="scroll-mt-28">
              <RelatedRecoveryGuides />
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions: STP, ETP, ZLD &amp; Biogas Recovery
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
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
                      rel="noopener noreferrer"
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
