import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HtSubstationTableOfContents from "./HtSubstationTableOfContents";
import HtSubstationScenarioTabs from "./HtSubstationScenarioTabs";
import HtSubstationCTA from "./HtSubstationCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/electrical-ht-lt-substation-transformer-contractor-bill-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Energized the HT/LT Substation via CEIG Approval, Yet the Factory Withholds Retention or Cancels Custom PCC/APFC Panels?";

const META_TITLE = "HT/LT Substation, Transformer & Panel Bill Recovery";

const META_DESCRIPTION =
  "Recover post-energization retention and custom APFC/PCC panel fabrication balances once the client draws grid power via your CEIG-approved substation.";

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
      "The Indian Contract Act, 1872 (Sections 53, 54, 70 & 74 — Reciprocal Promises, Quantum Meruit & Unlawful LD)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 42, 55 & 56 — Deemed Acceptance & Custom Panel Fabrication Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 3x RBI Interest for Panel & Transformer OEMs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Corporate Tax Disallowance on Unpaid Micro & Small Supplier Invoices)",
    url: "https://www.incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Central Electricity Authority (Measures Relating to Safety and Electric Supply) Regulations — CEIG Energization Standards",
    url: "https://cea.nic.in/",
  },
];

const FAQS = [
  {
    q: "Can a factory withhold 15–20% substation retention after obtaining CEIG charging approval and drawing HT grid power?",
    a: "No. Securing Chief Electrical Inspector to Government (CEIG) energization permission and drawing live HT/LT power through the transformer, VCB/RMU yard, and PCC panels constitutes conclusive acceptance and commercial enjoyment under Section 42 of the Sale of Goods Act, 1930 and Section 70 of the Indian Contract Act, 1872. Minor punch-list items cannot justify freezing 20% of the contract value.",
  },
  {
    q: "What legal remedy does an APFC/PCC/MCC panel manufacturer have if the buyer cancels after GA drawing approval?",
    a: "Custom-built electrical switchboards fabricated to a buyer's Single Line Diagram (SLD) and GA drawings are non-standard goods with no ready open-market resale value. Under Sections 55 and 56 of the Sale of Goods Act, 1930 and Section 73 of the Indian Contract Act, once you notify Factory Acceptance Test (FAT) readiness, you can sue for the full contract price or 100% of custom BOM + fabrication damages—and invoke MSMED s.15–18 if Udyam-registered.",
  },
  {
    q: "How do Class-A electrical contractors defeat wrongful Liquidated Damages (LD) deductions?",
    a: "Maintain a chronological Hindrance Register showing buyer-side delays in transformer plinth casting, cable trench readiness, or DISCOM shutdown permits. Under Contract Act Sections 53–54 and Kailash Nath Associates v. DDA (s.74), a buyer cannot deduct LD for delays caused by its own civil defaults or without proving actual pecuniary loss.",
  },
  {
    q: "Can transformer, RMU, and HT cable suppliers file on MSME Samadhaan even on turnkey substation projects?",
    a: "Yes, whenever transformers, Ring Main Units (RMUs), VCBs, and HT/LT XLPE cables are billed under a separate Supply PO or segregated HSN-coded supply invoices backed by GST e-Way Bills and Store Receipt Vouchers (SRVs). MSEFCs enforce 3x RBI Bank Rate compound interest on the divisible hardware supply tranche.",
  },
  {
    q: "What if the buyer refuses to sign the Final Handover Certificate even though the plant is running on the substation?",
    a: "Use the CEIG Charging Approval Certificate, DISCOM HT feeder meter energization date, transformer oil BDV/megger test reports, and site gate-entry logs as objective proof of commissioning. Serve a 15-day Deemed Handover Notice and pursue Order XXXVII CPC or Commercial Court summary recovery.",
  },
];

export default function HtSubstationRecoveryPage() {
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
    name: "How HT/LT Substation & Panel Contractors Recover Post-Energization Retention & Custom Panel Bills",
    description:
      "5-step creditor playbook using CEIG energization certificates, FAT readiness proof, hindrance logs, and divisible Supply PO MSME leverage.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Compile CEIG Energization Approval & FAT/Megger Reports",
        text: "Archive the CEIG Charging Certificate, DISCOM HT synchronization date, transformer BDV/megger tests, and signed FAT reports.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Build Hindrance Matrix Against Wrongful LD Deductions",
        text: "Document buyer-side delays in transformer plinths, cable trenches, or shutdown permits to defeat Contract Act s.74 LD.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Segregate Transformer, RMU & Panel Supply Invoices for MSEFC",
        text: "Isolate HSN-coded equipment supply bills backed by e-Way Bills and SRVs to invoke MSMED s.15–18 and s.43B(h).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve 15-Day Post-Energization / Ready-for-Dispatch Notice",
        text: "Demand retention release under Contract Act s.70 or custom panel damages under Sale of Goods Act s.55/56.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File MSEFC Samadhaan or Commercial Court Order XIII-A",
        text: "Escalate unpaid Supply POs to MSEFC (3x RBI interest) and I&C retention to Commercial Court or Arbitration.",
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
        name: "HT/LT Substation & Panel Recovery",
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
            <span>HT/LT Electrical Substation, Transformer &amp; Panel Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
            Class-A electrical contractors and panel OEMs routinely deliver 11kV/33kV substations, transformers, and CPRI-tested PCC/APFC switchboards—only for industrial buyers to withhold 15–20% retention post-energization or cancel bespoke panels mid-fabrication. Enforce <strong className="text-white">CEIG Energization Acceptance (Contract Act s.70)</strong>, <strong className="text-white">Sale of Goods s.55/56</strong>, and <strong className="text-white">MSMED s.15–18</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              CEIG Energization Proof
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              Custom Panel s.55/56 Damages
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-semibold">
              Divisible Transformer MSME
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
              label: "HT/LT Substation & Panel Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <HtSubstationTableOfContents />

          <main className="flex-1 min-w-0 w-full space-y-12">
            {/* Section 1: Executive Answer Box */}
            <section
              id="heading-ceig-energization-trap"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                Executive Creditor Answer Box
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                How Electrical Contractors Enforce Post-Energization Retention &amp; Custom Panel Bills
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Once a factory obtains <strong className="text-slate-900">CEIG Charging Approval</strong> and begins drawing grid power through your transformer, VCB/RMU yard, and LT distribution panels, the buyer has exercised full dominion and commercial benefit over the installation. Under <strong className="text-slate-900">Sale of Goods Act s.42</strong> and <strong className="text-slate-900">Contract Act s.70</strong>, withholding 15–20% of the contract value over minor documentation or earthing snags is legally unsustainable.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For custom-engineered PCC, MCC, and APFC panels cancelled mid-order, <strong className="text-slate-900">Sale of Goods Act Sections 55 &amp; 56</strong> allow recovery of the full contract price or 100% of bespoke fabrication losses once Factory Acceptance Test (FAT) readiness is established.
              </p>
            </section>

            {/* Section 2: 5-Step Recovery Pipeline */}
            <section
              id="heading-decision-tree"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                5-Stage HT/LT Substation &amp; Panel Recovery Rail
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Anchor your recovery in statutory CEIG/DISCOM energization records and divisible Supply PO documentation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  {
                    step: "Stage 1",
                    title: "CEIG & FAT Proof",
                    desc: "Archive CEIG Charging Approval, HT meter energization date, BDV/megger & FAT reports.",
                  },
                  {
                    step: "Stage 2",
                    title: "Hindrance Audit",
                    desc: "Compile buyer-caused plinth, trench & shutdown delays to defeat wrongful LD.",
                  },
                  {
                    step: "Stage 3",
                    title: "Supply PO Split",
                    desc: "Segregate transformer, RMU, cable & panel supply bills (e-Way Bills) for MSEFC.",
                  },
                  {
                    step: "Stage 4",
                    title: "15-Day Notice",
                    desc: "Serve Post-Energization Retention or FAT Ready-for-Dispatch Notice via RPAD & Email.",
                  },
                  {
                    step: "Stage 5",
                    title: "MSEFC / Order XXXVII",
                    desc: "Recover 3x RBI MSME interest at MSEFC or summary judgment in Commercial Court.",
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
                Statutory Matrix for Substation &amp; Switchboard Contractors
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 rounded-tl-xl font-bold">Statute</th>
                      <th className="p-3 font-bold">Electrical Dispute Trigger</th>
                      <th className="p-3 rounded-tr-xl font-bold">Creditor Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">Contract Act s.70 &amp; s.53</td>
                      <td className="p-3 text-slate-700">Client draws HT power post-CEIG approval</td>
                      <td className="p-3 text-slate-700">Quantum meruit &amp; bar on buyer-caused delay excuses</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Sale of Goods s.55 &amp; s.56</td>
                      <td className="p-3 text-slate-700">Cancelled custom PCC / MCC / APFC panels</td>
                      <td className="p-3 text-slate-700">Suit for price or 100% bespoke fabrication damages</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-slate-900">Contract Act s.74</td>
                      <td className="p-3 text-slate-700">Arbitrary LD deductions without loss proof</td>
                      <td className="p-3 text-slate-700">Sets aside punitive LD deductions (<em>Kailash Nath</em>)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">MSMED Act s.15–18</td>
                      <td className="p-3 text-slate-700">Divisible transformer, RMU &amp; panel Supply POs</td>
                      <td className="p-3 text-slate-700">3x RBI Bank Rate compound interest + s.43B(h)</td>
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
                4 High-Friction HT/LT Substation &amp; Panel Billing Scenarios
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Select your dispute scenario to inspect the statutory counter and technical evidence required.
              </p>
              <HtSubstationScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-recovery-ledger"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Worked Recovery Ledger: &#8377;46 Lakh 33kV Substation + Custom PCC Panel Order
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
                      <td className="p-3 font-semibold text-slate-900">2.5 MVA Transformer &amp; RMU Supply Balance</td>
                      <td className="p-3 text-slate-600">MSMED s.15–18 + s.43B(h) (e-Way Bill &amp; SRV)</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;18,50,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Cancelled 4000A Custom PCC Switchboard</td>
                      <td className="p-3 text-slate-600">Sale of Goods s.55/56 (Approved GA/SLD + FAT)</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;13,20,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Post-CEIG Energization 15% Retention + Wrongful LD</td>
                      <td className="p-3 text-slate-600">Contract Act s.70 &amp; s.74 Rebuttal</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;9,80,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">MSMED 3x RBI / Commercial Interest</td>
                      <td className="p-3 text-slate-600">Accrued beyond 45-day statutory credit cap</td>
                      <td className="p-3 text-right font-bold text-slate-900">&#8377;4,50,000</td>
                    </tr>
                    <tr className="bg-red-50/70">
                      <td className="p-3 font-extrabold text-slate-900">Total Recoverable Claim</td>
                      <td className="p-3 text-slate-700 font-semibold">Enforced via MSEFC + Order XXXVII CPC</td>
                      <td className="p-3 text-right font-extrabold text-[#DC2626]">&#8377;46,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: CEIG & FAT Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Mandatory CEIG, FAT &amp; Hindrance Evidence Checklist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. CEIG Energization & Charging Certificate",
                    desc: "Preserve the Chief Electrical Inspector charging approval and DISCOM HT feeder synchronization date proving commercial energization.",
                  },
                  {
                    title: "2. Approved GA Drawings & FAT Reports",
                    desc: "Archive buyer-signed SLD/GA drawings, CPRI type-test references, and Factory Acceptance Test (FAT) invitation & test sheets.",
                  },
                  {
                    title: "3. Hindrance Register & Plinth Emails",
                    desc: "Maintain dated site emails and photos of incomplete transformer plinths, trenches, or shutdown delays to nullify buyer LD.",
                  },
                  {
                    title: "4. Divisible Supply PO & e-Way Bills",
                    desc: "Segregate HSN-coded transformer, cable, and panel invoices with LRs and SRVs alongside a pre-PO Udyam certificate.",
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

            {/* Section 7: Custom Panel Fabrication Damages */}
            <section
              id="heading-custom-panel-lien"
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                Enforcing 100% Fabrication Recovery on Cancelled Custom PCC, MCC &amp; APFC Panels
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Unlike off-the-shelf commodities, a 4000A PCC or synchronized DG-Solar AMF/APFC panel is custom-engineered to a single factory&apos;s busbar rating, breaker short-circuit kA, and room dimensions. When a buyer attempts to cancel after GA drawing approval, <strong className="text-slate-900">Sale of Goods Act Section 55/56</strong> and <strong className="text-slate-900">Contract Act Section 73</strong> allow the panel builder to recover the full contract price or actual BOM + copper + labor costs without being forced to scrap the switchboard for salvage value.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore how <Link href="/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery" className="text-[#DC2626] font-semibold hover:underline">C&amp;I Solar EPC Deemed Commissioning</Link> and <Link href="/subcontractor-payment-recovery-india" className="text-[#DC2626] font-semibold hover:underline">EPC Subcontractor Retention Recovery</Link> reinforce your electrical billing claims.
              </p>
            </section>

            {/* Section 8: Dual CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <HtSubstationCTA />
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
                Frequently Asked Questions: HT/LT Substation &amp; Panel Recovery
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
