import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SolarOmTableOfContents from "./SolarOmTableOfContents";
import SolarOmScenarioTabs from "./SolarOmScenarioTabs";
import SolarOmCTA from "./SolarOmCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/solar-wind-o-and-m-module-cleaning-contractor-arrears-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Solar or Wind IPP Deducting Grid-Curtailment & Inverter OEM Downtime from Your Monthly O&M or Robotic Cleaning Bills?";

const META_TITLE = "Solar & Wind O&M Contractor Arrears & SLA Recovery";

const META_DESCRIPTION =
  "Stop renewable IPP SPVs from deducting grid curtailment or OEM inverter downtime from monthly O&M and robotic module-cleaning bills. Enforce MSMED.";

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
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — Full Coverage for Pure O&M & Cleaning Services)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Corporate Tax Disallowance on Unpaid Micro & Small O&M Contractor Bills)",
    url: "https://www.incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 53, 56 & 74 — Grid Curtailment Exclusions & Unlawful SLA Penalties)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of SCADA, SLDC & Robotic Cleaning Telemetry)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust for Detained Cleaning Robots & Tools)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
];

const FAQS = [
  {
    q: "Can a solar or wind IPP SPV deduct SLDC grid curtailment or DISCOM feeder outages from our O&M Availability SLA?",
    a: "No. Standard renewable O&M contracts define Plant Availability by excluding Force Majeure, SLDC/RLDC backing-down instructions, and 33kV/132kV DISCOM grid outages. Under Indian Contract Act Sections 53 and 74, penalizing an O&M contractor for external grid downtime outside its control is unlawful.",
  },
  {
    q: "Are solar/wind O&M and module-cleaning contractors eligible for MSME Samadhaan (MSEFC) recovery?",
    a: "Yes—100%. Unlike disputed turnkey EPC works contracts, standalone O&M retainers, grass-cutting, and dry-robotic or manual module-cleaning contracts are pure 'services rendered' squarely within MSMED Act Sections 15–18. Unpaid bills beyond 45 days attract 3x RBI Bank Rate compound interest and Income Tax Section 43B(h) disallowance for the IPP SPV.",
  },
  {
    q: "What if an inverter or WTG gearbox fails under OEM warranty and the SPV blames us for the spare-part delay?",
    a: "Where major equipment spares fall under OEM warranty or Owner Free-Issue scope, your duty is prompt fault diagnosis, RMA ticket logging, and installation once the spare arrives. Preserve dated OEM RMA tickets and Store Indent logs to prove that MTTR downtime was caused by owner/OEM procurement lead time.",
  },
  {
    q: "Can an IPP SPV detain our dry-cleaning robots or thermography tools until we sign a 'No-Dues Waiver'?",
    a: "No. Detaining contractor-owned robotic cleaners, drones, or hydraulic tools to coerce a fee waiver constitutes economic duress (Contract Act s.15/16) and Criminal Breach of Trust under BNS Section 316. Serve a 7-day BNS s.316 Hardware Release Notice and seek urgent Arbitration Section 9 relief if required.",
  },
  {
    q: "What electronic proof defeats 'missed cleaning cycle' excuses?",
    a: "Export daily robotic cleaning SCADA cycle reports, geo-tagged before/after photos, drone thermography logs, and site gate-entry attendance sheets certified under BSA 2023 Section 63.",
  },
];

export default function SolarOmRecoveryPage() {
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
    name: "How Solar & Wind O&M Contractors Recover Arrears & Reverse Wrongful SLA Deductions",
    description:
      "5-step creditor playbook using SLDC grid-curtailment exclusions, OEM RMA timelines, BSA s.63 SCADA logs, and MSMED s.15-18 + s.43B(h).",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Export SCADA Availability & SLDC Curtailment Logs",
        text: "Compile BSA s.63-certified inverter SCADA logs, SLDC backing-down notices, and GSS feeder outage records.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Isolate OEM Warranty & Owner-Spare Lead Times",
        text: "Match inverter/WTG downtime against dated OEM RMA tickets and owner spare-procurement delays.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Invoke Pure-Service MSMED s.15–18 & s.43B(h)",
        text: "Attach Udyam Registration to trigger 3x RBI compound interest and corporate tax disallowance on unpaid O&M bills.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve 15-Day SLA Normalization & BNS s.316 Tool Notice",
        text: "Demand reversal of wrongful SLA deductions and unobstructed removal of robotic cleaning fleets.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File MSEFC Samadhaan or Arbitration s.9 Petition",
        text: "Escalate pure O&M arrears to MSEFC and protect deployed hardware via Commercial Court s.9.",
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
        name: "Solar & Wind O&M Arrears Recovery",
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
            <span>Solar &amp; Wind O&amp;M / Robotic Module-Cleaning Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
            Utility-scale solar/wind O&amp;M contractors and robotic module-cleaning vendors are pure service providers under <strong className="text-white">MSMED Act s.15–18</strong>. Stop IPP SPVs from shifting SLDC grid-curtailment or OEM inverter spare delays onto your monthly retainer—enforce <strong className="text-white">BSA s.63 SCADA Availability Logs</strong> and <strong className="text-white">s.43B(h) Tax Disallowance</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              SLDC Curtailment Exclusions
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              Pure-Service MSEFC Jurisdiction
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              BNS s.316 Robotic Fleet Protection
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
              label: "Solar & Wind O&M Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <SolarOmTableOfContents />

          <main className="flex-1 min-w-0 w-full space-y-12">
            {/* Section 1: Executive Answer Box */}
            <section
              id="heading-om-sla-trap"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                Executive Creditor Answer Box
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                How Solar &amp; Wind O&amp;M Contractors Defeat Wrongful SLA Deductions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                IPP Special Purpose Vehicles (SPVs) frequently squeeze O&amp;M margins by deducting external <strong className="text-slate-900">SLDC grid curtailment</strong>, <strong className="text-slate-900">33kV feeder outages</strong>, and <strong className="text-slate-900">OEM inverter spare lead times</strong> from monthly O&amp;M retainers. Under Contract Act Sections 53 &amp; 74, a contractor cannot be penalized for grid-side Force Majeure or owner-supplied spare delays.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Crucially, because standalone O&amp;M and robotic module-cleaning contracts are <strong className="text-slate-900">pure service contracts</strong> (not works contracts), Udyam-registered contractors enjoy indisputable <strong className="text-slate-900">MSEFC Samadhaan</strong> jurisdiction, 3x RBI compound interest, and <strong className="text-slate-900">Income Tax s.43B(h)</strong> leverage.
              </p>
            </section>

            {/* Section 2: 5-Step Recovery Pipeline */}
            <section
              id="heading-decision-tree"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                5-Stage Solar &amp; Wind O&amp;M Arrears Recovery Rail
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Normalize Plant Availability data and lock in your pure-service MSME leverage before serving notice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  {
                    step: "Stage 1",
                    title: "SCADA & SLDC Lock",
                    desc: "Export inverter SCADA logs, SLDC backing-down notices & GSS feeder tripping records.",
                  },
                  {
                    step: "Stage 2",
                    title: "OEM RMA Timeline",
                    desc: "Map inverter/WTG downtime against dated OEM RMA tickets & owner spare indents.",
                  },
                  {
                    step: "Stage 3",
                    title: "MSME s.43B(h) Audit",
                    desc: "Pair Udyam certificate with SAC-coded O&M/cleaning invoices & GSTR-1 proof.",
                  },
                  {
                    step: "Stage 4",
                    title: "15-Day SLA Notice",
                    desc: "Demand reversal of wrongful deductions + unobstructed robotic fleet exit if terminated.",
                  },
                  {
                    step: "Stage 5",
                    title: "MSEFC / s.9 Relief",
                    desc: "File MSEFC reference for 3x RBI interest and s.9 if tools/robots are detained.",
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
                Statutory Matrix for Renewable O&amp;M &amp; Cleaning Contractors
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 rounded-tl-xl font-bold">Statute</th>
                      <th className="p-3 font-bold">O&amp;M Dispute Trigger</th>
                      <th className="p-3 rounded-tr-xl font-bold">Creditor Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">MSMED Act s.15–18</td>
                      <td className="p-3 text-slate-700">Unpaid O&amp;M &amp; robotic cleaning retainers</td>
                      <td className="p-3 text-slate-700">Undisputed pure-service MSEFC + 3x RBI interest</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Income Tax s.43B(h)</td>
                      <td className="p-3 text-slate-700">IPP SPV delays Micro/Small bills &gt;45 days</td>
                      <td className="p-3 text-slate-700">Expense disallowance in SPV&apos;s annual tax audit</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">Contract Act s.53 &amp; s.74</td>
                      <td className="p-3 text-slate-700">Grid curtailment &amp; OEM spare SLA penalties</td>
                      <td className="p-3 text-slate-700">Nullifies deductions outside contractor control</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">BNS 2023 s.316</td>
                      <td className="p-3 text-slate-700">SPV detains cleaning robots or thermal kits</td>
                      <td className="p-3 text-slate-700">Criminal Breach of Trust prosecution + s.9 retrieval</td>
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
                4 High-Friction Solar &amp; Wind O&amp;M Arrears Scenarios
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Select your operational dispute to inspect the statutory counter and SCADA/SLDC evidence checklist.
              </p>
              <SolarOmScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-recovery-ledger"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Worked Recovery Ledger: &#8377;28 Lakh 30 MW Solar Park O&amp;M + Robotic Cleaning
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                      <th className="p-3 font-bold">Claim Component</th>
                      <th className="p-3 font-bold">Statutory Basis</th>
                      <th className="p-3 font-bold text-right">Amount (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">4-Month Unpaid O&amp;M &amp; Cleaning Retainers</td>
                      <td className="p-3 text-slate-600">MSMED Act s.15 + s.43B(h) (SAC Invoices)</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;18,40,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Reversed Grid-Curtailment SLA Deductions</td>
                      <td className="p-3 text-slate-600">Contract Act s.53/74 + SLDC Curtailment Logs</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;6,10,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">MSMED 3x RBI Compound Interest</td>
                      <td className="p-3 text-slate-600">Accrued beyond 45-day statutory credit limit</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;3,50,000</td>
                    </tr>
                    <tr className="bg-red-50/70">
                      <td className="p-3 font-extrabold text-slate-900">Total Recoverable O&amp;M Claim</td>
                      <td className="p-3 text-slate-700 font-semibold">Enforced via MSEFC Samadhaan</td>
                      <td className="p-3 text-right font-extrabold text-[#DC2626]">&#8377;28,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: SCADA & SLDC Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Mandatory SCADA, SLDC &amp; BSA 2023 s.63 Evidence Checklist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. SLDC Curtailment & GSS Feeder Logs",
                    desc: "Export SLDC backing-down messages and 33kV/132kV substation tripping logs to exclude external grid outages from Availability.",
                  },
                  {
                    title: "2. Inverter SCADA & OEM RMA Tickets",
                    desc: "Preserve BSA s.63-certified inverter fault timestamps alongside OEM RMA ticket numbers proving owner/OEM spare delays.",
                  },
                  {
                    title: "3. Robotic Cleaning & Beat-Sheet Logs",
                    desc: "Archive daily dry-robotic cycle exports, geo-tagged module photos, and monthly joint sign-offs.",
                  },
                  {
                    title: "4. Gate-In Challans for Tools & Robots",
                    desc: "Maintain asset serial numbers and gate-in challans for cleaning robots and thermal cameras to enforce BNS s.316 exit.",
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

            {/* Section 7: Robotic Fleet & MSME */}
            <section
              id="heading-robotic-cleaning-lien"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                Protecting Dry-Robotic Cleaning Fleets &amp; Using Section 43B(h) Leverage
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Because IPP SPVs are audit-sensitive entities backed by institutional lenders and private equity funds, an <strong className="text-slate-900">Income Tax Act Section 43B(h)</strong> intimation—putting the SPV&apos;s statutory auditor on notice that overdue Micro/Small O&amp;M bills cannot be claimed as tax-deductible expenses—routinely unlocks stalled payments before March 31.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Calculate your exact compound interest claim with our <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] font-semibold hover:underline">MSME 3x RBI Delayed Payment Calculator</Link>, or review <Link href="/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules" className="text-[#DC2626] font-semibold hover:underline">DISCOM &amp; KUSUM LPS Rules Recovery</Link> if the SPV cites upstream DISCOM delays.
              </p>
            </section>

            {/* Section 8: Dual CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <SolarOmCTA />
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
                Frequently Asked Questions: Solar &amp; Wind O&amp;M Recovery
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
