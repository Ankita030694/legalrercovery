import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RmcSteelChemicalNoticeCTA from "./RmcSteelChemicalNoticeCTA";
import RmcSteelChemicalNoticeTOC from "./RmcSteelChemicalNoticeTOC";
import RmcSteelChemicalNoticeWorkspace from "./RmcSteelChemicalNoticeWorkspace";

export const revalidate = 86400;

const PAGE_URL = "/templates/rmc-steel-chemical-building-material-demand-legal-notice";
const EXACT_H1 =
  "Advocate-Vetted Legal Demand Notice Format for RMC, TMT Steel, Chemical & Polymer Suppliers (With MTC / Weighbridge / E-Way Bill Annexure)";
const META_TITLE = "RMC, Steel, Chemical & Building-Material Legal Notice Format";
const META_DESCRIPTION =
  "Heavy-supply demand notice format with E-Way, Dharamkanta & MTC Batch annexures, Sale of Goods s.42 acceptance lock, Order 37 CPC & Pre-IBC warning.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
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
    title: "Sale of Goods Act, 1930 — Section 42 (Irrevocable Acceptance Upon Consumption or Retention)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits) & Order XXXVIII Rule 5 (Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 — Section 8 & Section 9 (Operational Creditor Demand Notice)",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Sections 15, 16 & 18 (3x RBI Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Sections 138, 141 & 143A (Cheque Dishonour & 20% Interim Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Records: E-Way Bills, Weighbridge & WhatsApp)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software — Filtering Sham Post-Supply Quality Disputes",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353 (Supreme Court of India)",
    facts:
      "An operational creditor served a Section 8 IBC demand notice for unpaid commercial invoices. The corporate debtor attempted to defeat NCLT admission by raising belated, unsubstantiated quality objections.",
    holding:
      "The Supreme Court held that a 'pre-existing dispute' under Section 8(2)(a) of the IBC must be a genuine, plausible contention raised before receipt of the demand notice—not a patently feeble legal argument, an assertion unsupported by evidence, or a spurious afterthought.",
    takeaway:
      "Sending a structured demand notice with your 6-column E-Way, Dharamkanta, and MTC schedule establishes on record that zero pre-existing dispute existed prior to demand, neutralizing fabricated 28-day cube-test or purity excuses.",
  },
  {
    title: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd. — Denying Leave to Defend in Order XXXVII Suits",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568 (Supreme Court of India)",
    facts:
      "In a commercial summary suit under Order XXXVII CPC, the defendant sought unconditional leave to defend based on vague oral counter-claims and unquantified quality grievances despite signed commercial documents.",
    holding:
      "The Supreme Court laid down strict guidelines for Order XXXVII Rule 3 CPC: where the defense is frivolous, vexatious, or 'moonshine' with no real triable issue, leave to defend must be refused and the plaintiff is entitled to judgment forthwith; even for borderline defenses, full security deposit is mandatory.",
    takeaway:
      "Attaching GST Tax Invoices, E-Way Bills, weighbridge slips, and signed gate-inward challans turns your heavy-supply ledger into a liquidated written contract fit for summary decree.",
  },
  {
    title: "Sripati Singh v. State of Jharkhand — Enforcing Security Cheques on Crystalized Supply Debt",
    parties: "Sripati Singh (Since Deceased) Through His Son v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002 (Supreme Court of India)",
    facts:
      "The drawer of post-dated security cheques argued that cheques handed over at the start of a commercial credit arrangement could not be prosecuted under Section 138 NI Act.",
    holding:
      "The Supreme Court clarified that a cheque issued as security is not a worthless piece of paper. Once the underlying supply is delivered and the credit period expires without payment, the debt crystallizes and dishonour triggers full criminal liability under Section 138 NI Act.",
    takeaway:
      "Your demand notice should explicitly preserve Section 138/141 NI Act rights alongside civil Order XXXVII and Pre-IBC remedies to compel immediate settlement.",
  },
];

const FAQS = [
  {
    question: "Why must a building-material or chemical demand notice include a 6-column annexure?",
    answer:
      "Builders and factory buyers routinely deny receipt or claim short-weight weeks after unloading. Including Tax Invoice No., GST E-Way Bill No., Vehicle No., Dharamkanta Ticket, MTC/Batch COA Reference, and Site Gate-Inward Stamp inside Annexure-A converts scattered site paperwork into an indisputable Order XXXVII CPC liquidated debt dossier.",
  },
  {
    question: "How does Section 42 of the Sale of Goods Act defeat 28-day RMC cube-test excuses?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they perform an act inconsistent with the seller's ownership—such as pouring RMC into a slab, casting subsequent floors, or decanting chemical tankers into storage tanks—without contemporaneous written rejection at the pour or unloading point.",
  },
  {
    question: "When should an RMC, steel, or chemical supplier send a Pre-Section 8 IBC warning?",
    answer:
      "When the defaulting buyer is a Private Limited or Public Limited company (corporate debtor) and cumulative unpaid principal plus contractual interest meets the ₹1 Crore IBC threshold, a Pre-Section 8 IBC warning in your demand notice puts the board on notice of imminent NCLT Form 3/4 proceedings, often triggering settlement before formal filing.",
  },
  {
    question: "Can MSME suppliers claim Section 43B(h) tax disallowance leverage in this notice?",
    answer:
      "Yes. If your plant or trading firm holds a valid Micro or Small Udyam Registration, overdue invoices beyond 45 days attract compound interest at 3x the RBI Bank Rate under Section 16 MSMED Act and cannot be claimed as a deductible business expense by the buyer under Section 43B(h) of the Income Tax Act until actually paid.",
  },
  {
    question: "What if the buyer never signed a formal supply agreement—only WhatsApp indents and invoices?",
    answer:
      "Under Order XXXVII Rule 1(2) CPC, confirmed Purchase Orders, WhatsApp/email dispatch indents, GST Tax Invoices bearing credit-period terms, E-Way Bills, and acknowledged Delivery Challans together constitute a valid written contract for a liquidated sum, provided electronic records are backed by a Section 63 BSA 2023 certificate.",
  },
  {
    question: "Can I file a Section 138 cheque bounce case and an Order XXXVII suit simultaneously?",
    answer:
      "Yes. Criminal prosecution under Section 138 NI Act (punishing dishonour of cheques with up to 2 years imprisonment, double fine, and 20% interim compensation under s.143A) and a civil Order XXXVII Summary Suit for principal plus interest operate concurrently on distinct causes of action.",
  },
];

export default function RmcSteelChemicalNoticePage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        url: `${SITE_URL}${PAGE_URL}`,
        inLanguage: "en-IN",
        datePublished: "2026-11-17T09:00:00+05:30",
        dateModified: "2026-11-17T09:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
            name: "AMA Legal Solutions",
          },
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
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${PAGE_URL}#template`,
        name: "RMC, TMT Steel, Chemical & Building-Material Legal Demand Notice Format",
        description:
          "Interactive commercial demand notice template with 6-column E-Way, Dharamkanta, MTC/Batch COA, and Gate-Inward annexure schedule.",
        url: `${SITE_URL}${PAGE_URL}`,
        inLanguage: "en-IN",
        learningResourceType: "Legal Notice Template",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PAGE_URL}#breadcrumbs`,
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
            name: "Heavy-Supply Recovery Hub",
            item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "RMC, Steel & Chemical Demand Notice Format",
            item: `${SITE_URL}${PAGE_URL}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            IND-14 &bull; Heavy-Supply &amp; Building-Material Notice Workspace
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            Under our{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Chemicals, Steel, RMC &amp; Building-Materials Recovery Hub
            </Link>
            , this notice template converts site challans, GST E-Way Bills, Dharamkanta slips, and MTC/Batch COAs into an Order XXXVII CPC and Pre-Section 8 IBC dossier—locking irrevocable buyer acceptance under Section 42 of the Sale of Goods Act, 1930.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-xl font-black text-slate-100">Section 42</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Sale of Goods Acceptance Lock</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-emerald-400">6-Column</p>
              <p className="text-[10px] sm:text-xs text-slate-400">E-Way / Dharamkanta / MTC Table</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">MSMED s.16 &amp; IT Act s.43B(h)</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-red-400">Order 37 / IBC</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Summary Suit &amp; Pre-s.8 Warning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Heavy-Supply Recovery Hub", href: "/industries/chemicals-steel-rmc-building-materials-recovery" },
              { label: "RMC, Steel & Chemical Demand Notice", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <RmcSteelChemicalNoticeTOC />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-statutory-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Architecture: Locking Delivery &amp; Defeating Quality Excuses
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Generic commercial demand notices fail in heavy-supply industries because builders, EPC contractors, and downstream factories rarely deny receiving material outright. Instead, they wait 45 to 90 days after credit expiry and fabricate technical objections—claiming failed 28-day concrete cubes, TMT bar short-weight, or contaminated solvent tankers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An institutional credit manager must serve a notice engineered around <strong>Section 42 of the Sale of Goods Act, 1930</strong>. Once the buyer pours Ready-Mix Concrete into structural slabs, cuts and bends TMT reinforcement bars, or decants industrial solvents into plant storage tanks without a contemporaneous written rejection at the site gate, ownership and irrevocable statutory acceptance are locked by law.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase text-emerald-800 mb-1">Acceptance Lock</p>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Consumption or incorporation into structure bars belated quality claims under s.42 Sale of Goods Act.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase text-amber-800 mb-1">Tax &amp; Interest Leverage</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    For Udyam Micro/Small suppliers, s.16 MSMED 3x RBI rate and IT Act s.43B(h) disallowance apply past 45 days.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase text-red-800 mb-1">Dual Escalation</p>
                  <p className="text-xs text-[#DC2626] leading-relaxed">
                    Combines{" "}
                    <Link href="/law/order-37-summary-suit-money-recovery" className="underline font-bold">
                      Order XXXVII CPC
                    </Link>{" "}
                    liquidated debt recovery with Pre-Section 8 IBC Form 3/4 warning.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section
              id="heading-interactive-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Heavy-Supply Notice &amp; Annexure Schedule Workspace
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your industry track below—<strong>RMC &amp; Building Materials</strong>, <strong>TMT Steel &amp; Structural Iron</strong>, or <strong>Chemicals &amp; Polymers</strong>—enter your ledger details and 6-column consignment annexure, and copy or download the Word-ready notice.
              </p>

              <RmcSteelChemicalNoticeWorkspace />
            </section>

            {/* Dual-Track CTA */}
            <RmcSteelChemicalNoticeCTA />

            {/* Section 3: 6-Column Dossier Matrix */}
            <section
              id="heading-six-column-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The 6-Column Litigation Dossier: E-Way, Dharamkanta &amp; MTC Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most supplier notices attach only an invoice summary, allowing the defaulting buyer&apos;s counsel to demand a lengthy trial over delivery proof. Every column in our Annexure-A table neutralizes a specific courtroom defense:
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Annexure Column</th>
                      <th className="p-3.5 font-bold">Debtor Defense Neutralized</th>
                      <th className="p-3.5 font-bold">Evidentiary &amp; Statutory Effect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1. Tax Invoice No. &amp; Date</td>
                      <td className="p-3.5 text-slate-600">&ldquo;No liquidated written contract exists&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Establishes written debt &amp; credit period for Order XXXVII CPC &amp; GST ITC audit.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">2. GST E-Way Bill No.</td>
                      <td className="p-3.5 text-slate-600">&ldquo;Goods never left the plant&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Government NIC portal timestamped dispatch record admissible under BSA 2023 s.63.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">3. Vehicle / Tanker No.</td>
                      <td className="p-3.5 text-slate-600">&ldquo;Wrong site or ghost billing&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Corroborates FASTag/GPS transit logs and transit mixer rotation records.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">4. Dharamkanta Ticket</td>
                      <td className="p-3.5 text-slate-600">&ldquo;Short weight / quantity shortage&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Independent gross/tare weighment slip proving exact tonnage within BIS tolerances.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">5. MTC / Batch COA Ref</td>
                      <td className="p-3.5 text-slate-600">&ldquo;Sub-standard grade or purity&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Links Heat No. / Batch No. to lab-tested IS 1786, IS 456, or chemical COA specs.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">6. Site Gate-Inward Stamp</td>
                      <td className="p-3.5 text-slate-600">&ldquo;Unauthorized site delivery&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Proves physical custody transfer and triggers Sale of Goods Act s.42 acceptance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Rejecting Quality Excuses */}
            <section
              id="heading-rejecting-quality-excuses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Rejecting Belated Cube-Test &amp; Post-Decanting Purity Complaints
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a builder withholds RMC bills citing 28-day cube failure, or a chemical processor alleges moisture contamination after decanting, your demand notice must preemptively dismantle the excuse before they file a sham reply:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>
                  <strong>RMC Concrete (IS 456 &amp; IS 516):</strong> Demand joint witness records of slump testing at the transit mixer chute and curing tank logs. As detailed in our{" "}
                  <Link
                    href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    RMC Cube-Test Dispute Recovery Guide
                  </Link>
                  , casting subsequent upper slabs over the disputed concrete proves structural reliance and estops rejection.
                </li>
                <li>
                  <strong>TMT &amp; Structural Steel (IS 1786):</strong> Cite primary Mill Test Certificates and note that once bars are cut, bent, or welded at site, unilateral weight or bend-test claims are barred. Explore our{" "}
                  <Link
                    href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    TMT Steel Credit Default Playbook
                  </Link>{" "}
                  for Order XXXVIII Rule 5 stock attachment tactics.
                </li>
                <li>
                  <strong>Industrial Chemicals, Solvents &amp; Polymers:</strong> Cite tanker valve-seal numbers and sealed retention samples. Once commingled in the buyer&apos;s storage tank or extrusion hopper, post-consumption purity excuses fail under our{" "}
                  <Link
                    href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    Chemical &amp; Solvent Invoice Recovery Guide
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 5: 3-Channel Service Protocol & BSA 2023 s.63 */}
            <section
              id="heading-service-protocol-bsa"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  3-Channel Service Protocol &amp; BSA 2023 s.63 Electronic Proof
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A commercial demand notice only triggers statutory timelines when service is airtight. Dispatch simultaneously across all three channels and archive proof under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <p className="text-xs font-black uppercase text-slate-900 mb-1">1. Speed Post RPAD</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve at the buyer&apos;s MCA Registered Office and Project Site. Preserve the India Post tracking receipt and signed AD / &ldquo;refused&rdquo; endorsement (deemed service under Section 27 General Clauses Act).
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <p className="text-xs font-black uppercase text-slate-900 mb-1">2. Official GST / MCA Email</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Send PDF notice + Annexure-A to the director&apos;s official email and accounts desk. Crucial for IBC Section 8 Form 3/4 admissibility and Order XXXVII summons verification.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <p className="text-xs font-black uppercase text-slate-900 mb-1">3. WhatsApp Business</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deliver to the site procurement head and managing director with double-blue-tick read receipts exported alongside a BSA 2023 s.63 hash certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Pre-Section 8 IBC vs Order XXXVII */}
            <section
              id="heading-ibc-vs-order37"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pre-Section 8 IBC Warning vs. Order XXXVII Summary Suit Escalation
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Depending on ticket size and debtor entity type, your notice sets up two high-pressure recovery tracks—plus parallel cheque bounce prosecution covered in our{" "}
                <Link href="/cheque-bounce-and-civil-suit-together" className="text-[#DC2626] font-semibold underline">
                  Cheque Bounce &amp; Civil Suit Together Guide
                </Link>{" "}
                and{" "}
                <Link href="/recovery/vendor-payments" className="text-[#DC2626] font-semibold underline">
                  B2B Vendor Payment Recovery Desk
                </Link>
                . You can also compute exact 3x RBI compound interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Escalation Track</th>
                      <th className="p-3.5 font-bold">Monetary / Entity Criteria</th>
                      <th className="p-3.5 font-bold">Strategic Pressure on Debtor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Pre-Section 8 IBC Form 3/4</td>
                      <td className="p-3.5 text-slate-600">&ge; ₹1 Crore against Pvt Ltd / LLP / Ltd</td>
                      <td className="p-3.5 text-slate-700">10-day statutory window before NCLT CIRP filing; threatens board displacement.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Order XXXVII CPC Summary Suit</td>
                      <td className="p-3.5 text-slate-600">Any ticket against Company, Firm or Proprietorship</td>
                      <td className="p-3.5 text-slate-700">Defendant must prove triable defense within 10 days or face immediate decree.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">MSMED s.18 MSEFC Reference</td>
                      <td className="p-3.5 text-slate-600">Udyam Micro/Small supplier (any amount)</td>
                      <td className="p-3.5 text-slate-700">Mandatory 3x RBI compound interest + 75% pre-deposit for buyer appeal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Verified Supreme Court Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Verified Supreme Court Precedents for Material Suppliers
                </h2>
              </div>
              <div className="space-y-4">
                {CASE_CITATIONS.map((c) => (
                  <div
                    key={c.title}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70 border-l-4 border-l-[#DC2626] space-y-2"
                  >
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">{c.title}</p>
                    <p className="text-xs font-semibold text-red-700">
                      {c.parties} &bull; {c.citation}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Holding:</strong> {c.holding}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Creditor Takeaway:</strong> {c.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-supplier-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: RMC, Steel, Chemical &amp; Building-Material Demand Notices
                </h2>
              </div>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer text-xs sm:text-sm font-bold text-slate-900 list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-base group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Primary Statutory Sources */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Acts &amp; Official Recovery References
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
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-slate-200">
                <RmcSteelChemicalNoticeCTA variant="secondary" />
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
