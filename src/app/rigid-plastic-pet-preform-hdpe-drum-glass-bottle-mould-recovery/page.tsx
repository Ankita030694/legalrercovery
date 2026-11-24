import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RigidPackagingTableOfContents from "./RigidPackagingTableOfContents";
import RigidPackagingScenarioTabs from "./RigidPackagingScenarioTabs";
import RigidPackagingCTA from "./RigidPackagingCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (127 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Rigid Plastic, PET Preform, HDPE Drum & Glass Bottle Makers: Using Custom Blow-Mould Lien & MSME Law to Recover Overdue Ledgers";

// 58 chars — tightened from 63ch PDF draft for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE =
  "Rigid Plastic (PET/HDPE), Closures & Glass Bottle Recovery";

// 150 chars — tightened from 168ch PDF draft for Screaming Frog 120–155ch limit while preserving all statutory hooks
const META_DESCRIPTION =
  "Buyer shifting custom moulds while owing ₹28L for PET/HDPE bottles? Enforce Contract Act s.170 & contractual general lien plus MSMED s.15–18 recovery.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "pet bottle hdpe drum rigid plastic packaging unpaid invoice mould lien",
    "beverage oil agrochemical buyer unpaid pet hdpe bottle bill",
    "exercising lien on buyer blow mould injection mould unpaid bills",
    "custom embossed bottle stock abandoned by brand",
    "drop test leakage allegation after improper capping torque",
    "msme samadhaan rigid packaging manufacturers",
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
      "The Indian Contract Act, 1872 (Sections 148, 170, 171 & 73 — Bailment, Bailee's Particular Lien, Contractual General Lien & Damages for Non-Resaleable Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17, 18 & 24 — 45-Day Statutory Payment Cap, 3x RBI Compound Interest & MSEFC)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 41, 42, 44 & 55 — Deemed Acceptance on Bottling/Dispatch, Warehouse Demurrage & Full Price Suit for Custom Embossed Stock)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Year-End Expense Disallowance for Buyers Delaying Payments to Micro & Small Rigid Packaging Units)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "MSME Samadhaan Portal — Delayed Payment Monitoring System & MSEFC Filing (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Bureau of Indian Standards (BIS) — IS 6312 (Polyethylene Containers for Transport of Liquids), IS 14537 / IS 12252 (PET Containers) & Glass Container Norms",
    url: "https://www.bis.gov.in/",
  },
  {
    title:
      "Central Institute of Petrochemicals Engineering & Technology (CIPET) — Accredited NABL Polymer, ESCR & Drop-Test Verification Labs",
    url: "https://www.cipet.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of WhatsApp Resin Rate Approvals, ERP Dispatch Logs & Mould Handover Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a PET bottle or HDPE drum manufacturer legally hold a buyer's custom blow-mould for unpaid bottle invoices under Section 170 of the Indian Contract Act?",
    a: "Section 170 of the Indian Contract Act grants a statutory 'Particular Lien' only for unpaid skill, labour, or maintenance charges directly incurred on that specific mould—such as unpaid cavity re-polishing, hot-runner manifold repair, neck-ring machining, or balance mould-fabrication dues. To legally detain a buyer-owned mould against overdue invoices for previously delivered PET bottles, preforms, or HDPE drums, you must rely on a written 'Contractual General Lien' clause (expressly permitted under the saving words 'in the absence of a contract to the contrary' in Section 170 and commercial contract terms printed in your Tooling Agreement, Mould Custody Receipt, Purchase Order, or accepted Tax Invoices).",
  },
  {
    q: "What if the buyer paid only 40% to 60% as a 'mould development contribution' and now sends a truck to take the mould to a cheaper vendor?",
    a: "Where the buyer only paid a partial tooling contribution or amortized the mould cost over a committed Minimum Order Quantity (MOQ) of bottles or drums, legal title to the steel/aluminium mould has not passed to the buyer. In that scenario, you are not merely exercising a bailee's lien—you retain ownership and possession until the full balance tooling capital and amortized MOQ shortfall are paid. Immediately serve a written Tooling Title & Conditional Release Notice documenting the unpaid fabrication balance.",
  },
  {
    q: "The buyer threatened to file a police FIR for criminal breach of trust (BNS s.316) if we refuse to release their blow-mould. How do we protect our plant?",
    a: "Never conceal, dismantle, or threaten to scrap a buyer-owned mould without court authorization. Instead, proactively dispatch an Advocate Mould-Lien & Conditional Release Notice via Email, WhatsApp, and Speed Post RPAD stating the exact serial number and safe custody of the mould, itemizing both your Section 170 mould-maintenance dues and your Contractual General Lien ledger, and expressly offering immediate handover upon RTGS payment or deposit of an equivalent Bank Guarantee. This documented good-faith commercial lien defeats mens rea (dishonest misappropriation) and converts any threatened FIR into a purely civil commercial dispute.",
  },
  {
    q: "An agrochemical or edible oil buyer deducted 20% citing 'drop-test leakage' 45 days after filling and dispatching our HDPE jerrycans. Can we recover the full bill?",
    a: "Yes. Under Section 42 of the Sale of Goods Act, 1930, once a buyer fills, induction-seals, caps, labels, and dispatches rigid containers to distributors, that commercial consumption constitutes final statutory acceptance. Under the MSMED Act (Section 2(b) Explanation), any quality objection must be raised in writing within 15 days of delivery. In rigid packaging, post-filling leakage almost always stems from improper capping torque, misaligned chuck cappers, faulty induction wad sealing, or incompatible chemical ESCR—not blow-mould defects. Produce your dispatch-day BIS IS 6312 drop-test logs, neck-finish Go/No-Go gauge sheets, and polymer resin COA to dismantle the debit note.",
  },
  {
    q: "Can we recover 100% value when a beverage or cosmetic brand abandons custom-embossed PET bottles or pantone-matched flip-top caps in our warehouse?",
    a: "Yes. Brand-embossed PET bottles, proprietary neck-finish HDPE jerrycans, custom-coloured closures, and embossed liquor or pharma glass bottles cannot legally be sold in the open market because they carry the buyer's trademark and registered shape. Their only salvage value is nominal plastic regrind or glass cullet scrap. Under Sections 55 and 44 of the Sale of Goods Act, 1930 read with Section 73 of the Indian Contract Act, you can sue for 100% of the contract price (less documented scrap credit) plus monthly godown storage and pallet-holding demurrage.",
  },
  {
    q: "How does MSME Section 43B(h) help rigid plastic, closure, and glass container factories recover 90-to-120-day overdue accounts?",
    a: "Over 90% of Indian PET preform, blow-moulded HDPE drum, injection-moulded closure, and semi-automatic glass bottle manufacturers qualify as Udyam-registered Micro or Small Enterprises. Under Section 15 of the MSMED Act, buyer credit cannot legally exceed 45 days regardless of vendor-portal payment terms. Under Section 43B(h) of the Income Tax Act, if a corporate buyer fails to clear your overdue bottle invoices within 45 days before March 31, the entire packaging expenditure is disallowed from its taxable income—triggering a 25.17% to 30% immediate tax penalty plus Form 3CD Clause 22 statutory audit qualification.",
  },
  {
    q: "Should we file at MSEFC (MSME Samadhaan) or Commercial Court Order XXXVII when both unpaid bottle bills and a high-value blow-mould lien are involved?",
    a: "Use a dual-track strategy. Immediately file your overdue invoice principal plus 3x RBI monthly-compounded interest on MSME Samadhaan (MSEFC) for fast statutory leverage without heavy ad-valorem court fees. Simultaneously, if the defaulting buyer threatens an urgent civil injunction to pull a high-value multi-cavity hot-runner preform or blow-mould worth ₹10 Lakh+, prepare a Commercial Court counterclaim or Section 9 interim custody/security plea demanding the buyer deposit the disputed ledger balance in court before touching the mould.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T11:00:00+05:30",
  dateModified: "2026-11-19T11:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  image: `${SITE_URL}/blog_money_recovery.png`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: [
    "Rigid Plastic Packaging Debt Recovery",
    "Indian Contract Act Section 170 Particular Lien",
    "Contractual General Lien on Blow Moulds and Injection Moulds",
    "MSMED Act Sections 15 to 18",
    "Income Tax Act Section 43B(h)",
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Rigid Plastic, PET Preform, HDPE Drum & Glass Bottle Makers Enforce Blow-Mould Lien & MSME Recovery",
  description:
    "Step-by-step legal and operational SOP to secure custom moulds under Indian Contract Act s.170 / Contractual General Lien, defeat drop-test excuses, and recover overdue ledgers via MSMED ss.15–18.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Mould Title, Maintenance Dues & General-Lien Clauses",
      text: "Separate unpaid mould-specific refurbishment/hot-runner/cavity-polishing bills (Contract Act s.170 Particular Lien) and partial tooling ownership balances from finished bottle invoices covered by Contractual General Lien clauses.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Freeze Unauthorised Gate-Pass & Document Safe Mould Custody",
      text: "Instruct plant security to halt ad-hoc tempo pickup, photograph the mould serial plates and cavity condition with timestamps, and confirm safe custody in your toolroom logbook.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Compile QC Dispatch Pack Against Drop-Test & Torque Excuses",
      text: "Assemble polymer resin COAs, BIS IS 6312 / IS 14537 drop-test logs, neck-finish Go/No-Go gauge sheets, signed clean GRNs, and GSTR-2B acceptance records.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Issue Advocate Mould-Lien Conditional Release & Section 43B(h) Notice",
      text: "Dispatch a calibrated statutory demand via Email, WhatsApp, and Speed Post RPAD offering immediate mould handover against RTGS settlement or Bank Guarantee while notifying the buyer's CFO of Section 43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File MSME Samadhaan MSEFC Reference or Order XXXVII Suit",
      text: "Escalate unresolved arrears after 15 days to MSEFC for 3x RBI monthly-compounded interest under MSMED s.16, or initiate a Commercial Court summary suit with Section 55 custom-embossed stock claims.",
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
      name: "Packaging, Printing & Paper Mill Recovery",
      item: `${SITE_URL}/industries/packaging-printing-paper-mill-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rigid Plastic, PET Preform, HDPE Drum & Glass Bottle Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function RigidPlasticMouldRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (Article + HowTo + FAQPage + BreadcrumbList) */}
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
            <span>IND-22 Rigid Packaging Playbook</span>
            <span className="text-red-700">&bull;</span>
            <span>Contract Act s.170 &amp; General Lien</span>
            <span className="text-red-700">&bull;</span>
            <span>MSMED ss.15&ndash;18</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When an oil, beverage, pharma, or agrochemical buyer owes &#8377;25L+ for PET preforms, HDPE drums, caps, or glass bottles and sends a truck to remove its custom blow-mould, you can lawfully detain tooling via{" "}
            <strong>Indian Contract Act s.170</strong> (unpaid mould maintenance/refurbishment) and a{" "}
            <strong>Contractual General Lien</strong>, while enforcing 45-day{" "}
            <strong>MSMED ss.15&ndash;18</strong> recovery under our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-bold"
            >
              Packaging, Printing &amp; Paper Mill Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Hero Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                s.170 + Lien
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Particular &amp; Contractual General Lien on Blow/Injection Moulds
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                3&times; RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly-Compounded MSME s.16 Interest Beyond Day 45
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                100% Price
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Sale of Goods s.55 Recovery on Abandoned Embossed Bottles
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                25.17%+ Hit
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer Corporate Tax Disallowance via Income Tax s.43B(h)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Packaging, Printing & Paper Mill Recovery",
                href: "/industries/packaging-printing-paper-mill-recovery",
              },
              {
                label:
                  "Rigid Plastic, PET Preform, HDPE Drum & Glass Bottle Recovery",
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <RigidPackagingTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Contract Act s.170 vs Contractual General Lien */}
            <section
              id="heading-mould-lien-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Contract Act s.170 vs Contractual General Lien on Buyer Moulds
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Every PET preform converter, extrusion blow-moulder of HM-HDPE jerrycans and open-top drums, injection-moulded cap/closure manufacturer, cosmetic jar moulder, and flint/amber glass bottle unit in India lives inside a brutal working-capital vice. You purchase virgin PET chips, HM-HDPE blow-moulding granules, PP copolymer, masterbatch, or soda-ash cullet on strict advance RTGS or Bank Guarantee terms from petrochemical majors like RIL, IOCL, OPAL, and Haldia Petrochemicals. Meanwhile, your edible-oil, beverage, lubricant, agrochemical, and FMCG brand buyers stretch container invoices to 90&ndash;120 days.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                When the overdue ledger hits &#8377;25 Lakh to &#8377;40 Lakh and you pause fresh dispatches, the defaulting brand almost always executes the exact same ambush: it quietly quotes a neighbouring blow-moulder &#8377;1.20/bottle cheaper and sends a pickup truck to your factory gate demanding immediate handover of its custom embossed blow-mould, injection preform mould, or glass I.S. machine mould set. If your plant hands over that mould without security, your strongest commercial leverage vanishes overnight. Yet detaining a buyer&apos;s mould blindly without understanding the statutory boundary between <strong>Particular Lien</strong> and <strong>Contractual General Lien</strong> exposes plant directors to frivolous police complaints.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-extrabold text-amber-900 mb-2">
                    1. Statutory Particular Lien (Contract Act s.170)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
                    Under Section 170 of the Indian Contract Act, 1872, a bailee who has rendered labour or skill in respect of bailed goods has a statutory right to retain those goods until paid for <em>those specific services</em>.
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Covered automatically:</strong> Unpaid mould-fabrication balance, cavity re-polishing, hot-runner nozzle/heater replacement, neck-ring machining, bottom-insert welding, and preventive overhaul charges billed on that mould.
                    </li>
                    <li>
                      <strong>Critical limitation:</strong> Pure s.170 Particular Lien does <em>not</em> automatically secure overdue bills for previously delivered PET bottles or HDPE drums unless backed by an express contract.
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-extrabold text-emerald-900 mb-2">
                    2. Contractual General Lien &amp; Partial Tooling Title
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
                    Section 170 begins with the decisive saving phrase: <em>&ldquo;in the absence of a contract to the contrary.&rdquo;</em> Commercial parties are legally entitled to stipulate a <strong>Contractual General Lien</strong> over all buyer-supplied moulds, inserts, and dies in custody.
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Where it binds:</strong> Clauses printed in your Tooling Bailment Receipt, Quotation/PO Acceptance, or accepted GST Tax Invoices stating that buyer moulds stand pledged/subject to general lien against the entire running container ledger.
                    </li>
                    <li>
                      <strong>Partial development fee rule:</strong> If the buyer only paid a 30%&ndash;60% tooling contribution or fell short of amortized MOQ, ownership never transferred&mdash;giving you full title retention.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Precedent Callout with Crimson Left Bar */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 border-l-4 border-l-[#DC2626]">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                  Settled Commercial Jurisprudence &amp; Police-Threat Shield
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Indian Supreme Court jurisprudence on general lien and commercial bailment (including the principles affirmed in <em>Syndicate Bank v. Vijay Kumar</em> on general lien and commercial contracts, and <em>Mobilox Innovations</em> on genuine vs sham disputes) confirms that an express contractual lien over bailed property is enforceable against a running general balance of account. Crucially, issuing a formal <strong>Conditional Release Notice</strong>&mdash;confirming safe custody of the mould and offering immediate release against RTGS clearance or Bank Guarantee&mdash;negates dishonest misappropriation under Section 316 of the Bharatiya Nyaya Sanhita (BNS), shutting down retaliatory police threats.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree Flowchart (SVG + Mobile Cards) */}
            <section
              id="heading-escalation-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Mould-Hold &amp; Ledger Recovery Flowchart for Rigid Packaging Units
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this five-gate operational decision tree the moment an overdue rigid-packaging buyer stops clearing Day-45 MSME invoices, raises a sudden leakage debit note, or sends transport to retrieve its custom blow-mould or injection-mould cavities.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-4">
                <svg
                  width="960"
                  height="330"
                  viewBox="0 0 960 330"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-stage mould-lien and MSME payment recovery decision flowchart for rigid plastic, PET preform, HDPE drum, and glass bottle manufacturers"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                    <marker
                      id="arrowEmerald"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="16" y="34" width="166" height="122" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="30" y="58" fill="#F87171" fontSize="11" fontWeight="800">STAGE 01 · DAY 1</text>
                  <text x="30" y="80" fill="#FFFFFF" fontSize="13" fontWeight="800">Gate-Pass Freeze &amp;</text>
                  <text x="30" y="98" fill="#FFFFFF" fontSize="13" fontWeight="800">Mould Custody Audit</text>
                  <text x="30" y="120" fill="#CBD5E1" fontSize="10.5">Verify s.170 repair bills,</text>
                  <text x="30" y="135" fill="#CBD5E1" fontSize="10.5">partial tooling title &amp; PO</text>
                  <text x="30" y="150" fill="#CBD5E1" fontSize="10.5">general-lien clause.</text>

                  <line x1="182" y1="95" x2="208" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Stage 2 */}
                  <rect x="210" y="34" width="166" height="122" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="224" y="58" fill="#FBBF24" fontSize="11" fontWeight="800">STAGE 02 · DAY 2–3</text>
                  <text x="224" y="80" fill="#FFFFFF" fontSize="13" fontWeight="800">QC &amp; Embossed Stock</text>
                  <text x="224" y="98" fill="#FFFFFF" fontSize="13" fontWeight="800">Proof Compilation</text>
                  <text x="224" y="120" fill="#CBD5E1" fontSize="10.5">Lock resin COA, BIS IS 6312</text>
                  <text x="224" y="135" fill="#CBD5E1" fontSize="10.5">drop-test sheets, neck gauge</text>
                  <text x="224" y="150" fill="#CBD5E1" fontSize="10.5">logs &amp; unlifted RFD counts.</text>

                  <line x1="376" y1="95" x2="402" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Stage 3 */}
                  <rect x="404" y="34" width="174" height="122" rx="12" fill="#DC2626" stroke="#FCA5A5" strokeWidth="1.5" />
                  <text x="418" y="58" fill="#FEE2E2" fontSize="11" fontWeight="800">STAGE 03 · DAY 4</text>
                  <text x="418" y="80" fill="#FFFFFF" fontSize="13" fontWeight="800">Advocate Mould-Lien</text>
                  <text x="418" y="98" fill="#FFFFFF" fontSize="13" fontWeight="800">&amp; s.43B(h) Notice</text>
                  <text x="418" y="120" fill="#FEF2F2" fontSize="10.5">Offer conditional release</text>
                  <text x="418" y="135" fill="#FEF2F2" fontSize="10.5">against RTGS/BG; copy CFO</text>
                  <text x="418" y="150" fill="#FEF2F2" fontSize="10.5">on Form 3CD tax hit.</text>

                  <line x1="578" y1="95" x2="604" y2="95" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrowEmerald)" />

                  {/* Stage 4 */}
                  <rect x="606" y="34" width="166" height="122" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="620" y="58" fill="#34D399" fontSize="11" fontWeight="800">STAGE 04 · DAY 15</text>
                  <text x="620" y="80" fill="#FFFFFF" fontSize="13" fontWeight="800">Dual Escalation:</text>
                  <text x="620" y="98" fill="#FFFFFF" fontSize="13" fontWeight="800">MSEFC + Order 37</text>
                  <text x="620" y="120" fill="#CBD5E1" fontSize="10.5">File MSME Samadhaan for</text>
                  <text x="620" y="135" fill="#CBD5E1" fontSize="10.5">3x RBI compound interest</text>
                  <text x="620" y="150" fill="#CBD5E1" fontSize="10.5">&amp; s.55 unlifted FG price.</text>

                  <line x1="772" y1="95" x2="798" y2="95" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrowEmerald)" />

                  {/* Stage 5 */}
                  <rect x="800" y="34" width="144" height="122" rx="12" fill="#064E3B" stroke="#34D399" strokeWidth="2" />
                  <text x="814" y="58" fill="#A7F3D0" fontSize="11" fontWeight="800">STAGE 05 · CLOSE</text>
                  <text x="814" y="80" fill="#FFFFFF" fontSize="13" fontWeight="800">Escrow Payout &amp;</text>
                  <text x="814" y="98" fill="#FFFFFF" fontSize="13" fontWeight="800">Mould Release</text>
                  <text x="814" y="120" fill="#D1FAE5" fontSize="10.5">Collect cleared RTGS,</text>
                  <text x="814" y="135" fill="#D1FAE5" fontSize="10.5">sign no-claim memo &amp;</text>
                  <text x="814" y="150" fill="#D1FAE5" fontSize="10.5">release mould safely.</text>

                  {/* Bottom Branch Safeguard Bar */}
                  <rect x="16" y="192" width="928" height="114" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <text x="34" y="218" fill="#FBBF24" fontSize="11.5" fontWeight="800">PARALLEL SAFEGUARDS IF BUYER ESCALATES</text>

                  <rect x="34" y="232" width="286" height="58" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                  <text x="46" y="252" fill="#F87171" fontSize="11" fontWeight="700">If Buyer Threatens Police FIR (BNS s.316):</text>
                  <text x="46" y="270" fill="#E2E8F0" fontSize="10.5">Serve Conditional Release Notice + BG option</text>
                  <text x="46" y="283" fill="#94A3B8" fontSize="10">Converts threat into civil accounting lien.</text>

                  <rect x="336" y="232" width="288" height="58" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                  <text x="348" y="252" fill="#34D399" fontSize="11" fontWeight="700">If Buyer Has Issued PDCs / Security Cheques:</text>
                  <text x="348" y="270" fill="#E2E8F0" fontSize="10.5">Trigger NI Act s.138/141 + 20% s.143A deposit</text>
                  <text x="348" y="283" fill="#94A3B8" fontSize="10">Personal criminal summons on brand directors.</text>

                  <rect x="640" y="232" width="288" height="58" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                  <text x="652" y="252" fill="#FBBF24" fontSize="11" fontWeight="700">If Unlifted Embossed Bottles Clog Godown:</text>
                  <text x="652" y="270" fill="#E2E8F0" fontSize="10.5">Invoke Sale of Goods s.44 Rent + s.55 Price</text>
                  <text x="652" y="283" fill="#94A3B8" fontSize="10">Bill monthly pallet rent before scrap notice.</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards Fallback */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "STAGE 01 · DAY 1",
                    title: "Gate-Pass Freeze & Mould Custody Audit",
                    body: "Halt ad-hoc tempo pickup, photograph mould serial plates, and segregate Contract Act s.170 repair bills from Contractual General Lien bottle arrears.",
                  },
                  {
                    stage: "STAGE 02 · DAY 2–3",
                    title: "QC & Embossed Stock Proof Compilation",
                    body: "Lock polymer resin COA, BIS IS 6312 / IS 14537 drop-test logs, Go/No-Go neck gauge records, signed clean GRNs, and unlifted embossed stock counts.",
                  },
                  {
                    stage: "STAGE 03 · DAY 4",
                    title: "Advocate Mould-Lien & s.43B(h) Notice",
                    body: "Serve a Conditional Release Notice offering handover against RTGS or Bank Guarantee while alerting the buyer's CFO to Section 43B(h) tax disallowance.",
                  },
                  {
                    stage: "STAGE 04 · DAY 15",
                    title: "Dual Escalation: MSEFC + Commercial Court",
                    body: "File MSME Samadhaan for 3x RBI compound interest under MSMED s.16 alongside Sale of Goods s.55/44 claims for unlifted custom containers.",
                  },
                  {
                    stage: "STAGE 05 · RESOLUTION",
                    title: "Escrow Settlement & Documented Mould Release",
                    body: "Receive cleared RTGS settlement, execute a mutual no-quality-claim discharge memo, and release the blow/injection mould under signed handover receipt.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 mb-1">
                      {card.stage}
                    </p>
                    <p className="text-sm font-bold text-white mb-1">
                      {card.title}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-legal-remedies"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Statutory &amp; Contractual Remedies for PET, HDPE &amp; Glass Makers
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Rigid packaging claims rarely involve a single clean invoice; they bundle delivered container batches, partially amortized multi-cavity moulds, unlifted embossed jars or bottles, and sham post-filling quality deductions. Map each overdue component to its exact Indian statutory weapon below.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">
                        Claim / Asset Category
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Governing Statute
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Creditor Leverage &amp; Remedy
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Preferred Forum
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Unpaid Mould Repair, Hot-Runner &amp; Cavity Polishing
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">
                        Contract Act s.170
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Automatic statutory Particular Lien to detain blow, injection, or glass mould until mould-specific charges are cleared.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Advocate Lien Notice + Commercial Court
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Holding Buyer Mould for Unpaid Bottle / Drum Invoices
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">
                        Contract Act ss.170&ndash;171 (Express Contract)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Enforces Contractual General Lien embedded in Tooling Receipt / PO / Tax Invoice terms; conditional release against RTGS/BG.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Conditional Release Notice + s.9 / Civil Suit
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Overdue PET Preform, HDPE Jerrycan, Cap &amp; Glass Bills
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">
                        MSMED Act ss.15&ndash;18 &amp; s.24; IT Act s.43B(h)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        45-day absolute ceiling overriding 90-day buyer portals; 3&times; RBI compound interest + full corporate tax disallowance on March 31.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        MSME Samadhaan (MSEFC)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Abandoned Custom-Embossed Bottles &amp; Coloured Closures
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">
                        Sale of Goods Act ss.44 &amp; 55; Contract Act s.73
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        100% contract price (less nominal regrind/cullet scrap credit) because trademarked containers have zero open-market resale value + storage rent.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        MSEFC / Commercial Court Order XXXVII
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Post-Filling Drop-Test &amp; Capping Leakage Debit Notes
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">
                        Sale of Goods Act s.42; MSMED s.2(b) (15-Day Rule)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Filling, capping &amp; shipping destroys rejection right; shifts burden onto buyer&apos;s capping torque &amp; induction-sealer calibration logs.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Written Debit-Note Rejection + MSEFC
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Dishonoured Buyer Security / Post-Dated Cheques
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">
                        NI Act ss.138, 141 &amp; 143A
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Personal criminal liability for brand directors + up to 20% interim compensation order during trial (strict 30-day statutory demand window).
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        JMFC / Metropolitan Magistrate Court
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4 Failure Modes */}
            <section
              id="heading-dispute-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  4 Rigid Packaging Default Traps &amp; Mould-Lien Countermeasures
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select the exact commercial bottleneck facing your blow-moulding, injection-moulding, or glass container plant to inspect the buyer&apos;s standard playbook and your exact statutory counter-execution.
              </p>

              <RigidPackagingScenarioTabs />
            </section>

            {/* Section 5: Technical Defenses (Drop-Test, Torque, ESCR) */}
            <section
              id="heading-technical-defenses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Rebutting Drop-Test, Neck-Finish &amp; Capping-Torque Allegations
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To stall MSEFC conciliation or justify shifting custom moulds to a rival plant, defaulting beverage, edible-oil, lube, and agrochemical brands routinely manufacture technical complaints weeks after dispatch. Equip your legal notice with exact polymer and glass engineering rebuttals grounded in BIS standards and CIPET test protocols:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    Improper Capping Torque &amp; Induction-Seal Failure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Leakage around bottle necks after filling is rarely a mould defect when pre-dispatch Go/No-Go ring gauges verified T-dimension, E-dimension, and thread pitch. Over-torquing on high-speed rotary cappers strips plastic threads or fractures glass finishes; under-torquing prevents induction aluminium foil liners from bonding cleanly. Demand the buyer&apos;s shift-wise torque-meter audit sheets.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    Chemical ESCR &amp; Formulation Incompatibility
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Agrochemical emulsifiable concentrates (EC), acidic cleaners, and solvent-based pesticides cause <strong>Environmental Stress Crack Resistance (ESCR)</strong> panelling or bottom-seam cracking if the buyer alters its chemical solvent ratio without upgrading from standard HDPE to fluorinated/multi-layer COEX barrier drums. Your resin supplier COA proves you moulded the exact buyer-approved grade (e.g., HM-HDPE 52GB003 or PET IV 0.80&ndash;0.84).
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    BIS IS 6312 / IS 14537 Drop-Test &amp; Stacking Norms
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under <strong>BIS IS 6312</strong> (HDPE liquid containers) and <strong>IS 14537 / IS 12252</strong> (PET bottles), drop-test height, water-fill conditioning temperature, and top-load stack limits are strictly defined. A buyer throwing over-stacked 20-litre jerrycans off an unpalletized truck in 45&deg;C summer heat cannot blame the blow-moulder for transit rupture after signing a clean delivery GRN.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    Glass Bottle Thermal Shock &amp; Annealing Variance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    For flint, amber, and green glass bottle makers serving liquor, pharma syrup, and food sauces, hot-filling beyond agreed thermal-shock differentials (&Delta;T &gt; 42&deg;C) or uncalibrated high-speed conveyor line impacts cause hairline stress fractures inside the buyer&apos;s bottling plant&mdash;disproved cleanly by your annealing lehr polariscope and internal hydrostatic pressure batch logs.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="text-[#DC2626]">Drafting Tip for Future POs &amp; Tooling Receipts:</strong>{" "}
                Insert a 4-line <em>Contractual General Lien &amp; Amortized Tooling Clause</em> on every Quotation, Mould Custody Receipt, and GST Tax Invoice: <em>&ldquo;All buyer-supplied or co-funded blow moulds, injection moulds, hot-runner assemblies, and inserts remain subject to a paramount Contractual General Lien under ss.170&ndash;171 of the Indian Contract Act for all overdue container invoices, unlifted custom-embossed stock, and mould maintenance dues across all running accounts.&rdquo;</em>
              </div>
            </section>

            {/* Section 6: Worked ₹28 Lakh Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  &#8377;28 Lakh HDPE Drum &amp; PET Preform Ledger: Full Statutory Math
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a realistic recovery ledger for a Daman/Silvassa Udyam-registered Small Enterprise supplying 1L embossed PET bottles and 20L HM-HDPE agrochemical jerrycans to a regional brand that has defaulted for 180 days beyond the statutory Day-45 MSME ceiling and just sent a tempo to retrieve its 4-cavity blow-mould:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 mb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Worked Creditor Recovery Ledger (Illustrative 6.50% RBI Bank Rate Benchmark)
                    </p>
                    <p className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                      Total Statutory Claim vs Buyer&apos;s Tax Disallowance Cost
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    180 Days Past Day-45 Ceiling
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800">
                    <div>
                      <p className="font-bold text-slate-100">
                        1. Overdue Delivered PET Bottle &amp; HDPE Drum Invoices
                      </p>
                      <p className="text-slate-400 text-xs">
                        14 GST Tax Invoices with clean GRNs &amp; GSTR-2B ITC availed by buyer
                      </p>
                    </div>
                    <span className="font-mono font-bold text-white shrink-0">
                      &#8377;28,00,000
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800">
                    <div>
                      <p className="font-bold text-slate-100">
                        2. Unpaid Mould Cavity Re-Polishing &amp; Hot-Runner Repair
                      </p>
                      <p className="text-slate-400 text-xs">
                        Direct automatic statutory Particular Lien trigger under Contract Act s.170
                      </p>
                    </div>
                    <span className="font-mono font-bold text-amber-300 shrink-0">
                      &#8377;1,80,000
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800">
                    <div>
                      <p className="font-bold text-slate-100">
                        3. Unlifted Custom-Embossed FG Stock (Net of Regrind Salvage)
                      </p>
                      <p className="text-slate-400 text-xs">
                        Sale of Goods s.55 (&#8377;4.60L invoice value minus &#8377;40k plastic regrind credit)
                      </p>
                    </div>
                    <span className="font-mono font-bold text-slate-100 shrink-0">
                      &#8377;4,20,000
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800">
                    <div>
                      <p className="font-bold text-slate-100">
                        4. Godown Pallet-Holding Rent (3 Months &times; &#8377;22,000)
                      </p>
                      <p className="text-slate-400 text-xs">
                        Recoverable post-RFD care &amp; storage charges under Sale of Goods Act s.44
                      </p>
                    </div>
                    <span className="font-mono font-bold text-slate-100 shrink-0">
                      &#8377;66,000
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800">
                    <div>
                      <p className="font-bold text-emerald-300">
                        5. MSMED Act s.16 Compound Interest (3&times; RBI Rate = 19.50% p.a. Monthly Rests)
                      </p>
                      <p className="text-slate-400 text-xs">
                        Compounded monthly over 6 months on &#8377;29.80L overdue delivered/mould bills
                      </p>
                    </div>
                    <span className="font-mono font-bold text-emerald-400 shrink-0">
                      &#8377;3,02,710
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-sm sm:text-base font-black text-white">
                      TOTAL RECOVERABLE CREDITOR DEMAND (PRINCIPAL + INTEREST + STOCK)
                    </p>
                    <span className="text-base sm:text-xl font-mono font-black text-emerald-400 shrink-0">
                      &#8377;37,68,710
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-red-950/50 border border-red-800/60 rounded-xl p-3.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-300 mb-1">
                      Buyer&apos;s Extra Tax Hit (Income Tax s.43B(h))
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200">
                      Unpaid past March 31 at 25.17% corporate rate ={" "}
                      <strong className="text-red-300">&#8377;7,50,066 extra income tax</strong>{" "}
                      (non-deductible expense + Form 3CD Clause 22 audit disclosure).
                    </p>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-1">
                      Mould Replacement Cost for Buyer
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200">
                      Fabricating a new 4-cavity embossed blow-mould takes{" "}
                      <strong className="text-amber-300">8&ndash;12 weeks &amp; &#8377;12L&ndash;&#8377;18L</strong>{" "}
                      — making immediate settlement far cheaper than litigation.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Need exact invoice-by-invoice monthly compounding at the current RBI Bank Rate? Run your overdue bill dates through our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                and review the statutory disallowance rules in our{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] font-bold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Section 43B(h) MSME Payment Rule Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Mould Custody, Resin Lot &amp; BSA 2023 s.63 Proof Dossier
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before dispatching your Advocate Mould-Lien &amp; MSME Demand Notice, organize these four evidentiary quadrants. Every WhatsApp rate confirmation, ERP vendor-portal screenshot, and email artwork approval must be exported with metadata and backed by a <strong>Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> Electronic Evidence Certificate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      A
                    </span>
                    Mould Custody &amp; Tooling Ledger
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Signed Mould Bailment / Custody Receipt &amp; gate inward register</li>
                    <li>Tooling quotation, partial advance invoices &amp; MOQ amortization sheet</li>
                    <li>Mould maintenance, cavity polishing &amp; hot-runner repair job cards (s.170)</li>
                    <li>Timestamped photos of mould serial plate, cavity count &amp; safe rack storage</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      B
                    </span>
                    Resin Batch &amp; Pre-Dispatch QC Proof
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Polymer Resin COA (RIL / IOCL / OPAL grade &amp; MFI/IV certificate)</li>
                    <li>BIS IS 6312 / IS 14537 drop-test, top-load &amp; ESCR batch registers</li>
                    <li>Go/No-Go neck-finish thread gauge &amp; parison weight QC sheets</li>
                    <li>Approved 2D/3D bottle drawings, embossing proof &amp; Pantone shade cards</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      C
                    </span>
                    Dispatch, GST ITC &amp; Udyam Registration
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Udyam Registration Certificate dated prior to supply invoices (Micro/Small)</li>
                    <li>GST Tax Invoices, E-Way Bills, Weighbridge slips &amp; stamped buyer GRNs</li>
                    <li>GSTR-1 / GSTR-2B reconciliation proving buyer availed full GST Input Credit</li>
                    <li>Unlifted custom-embossed FG stock sheet &amp; Ready-for-Dispatch notices</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      D
                    </span>
                    Digital BSA 2023 s.63 Authentication
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Native WhatsApp chats approving resin-hike rates or urgent dispatches</li>
                    <li>Buyer procurement emails confirming rolling schedules or requesting moulds</li>
                    <li>SAP / Ariba / Tally ledger confirmation &amp; debit-note rejection emails</li>
                    <li>Signed BSA 2023 s.63 Hash Certificate by plant IT/Accounts custodian</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion Funnel CTA */}
            <section
              id="heading-action-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Freeze Mould Handover &amp; Trigger &#8377;999 or Bulk Ledger Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you need an urgent single-buyer Advocate Mould-Lien Conditional Release Notice before tomorrow&apos;s pickup tempo arrives, or want to run a disciplined March 31 Section 43B(h) collection drive across 50+ overdue beverage, oil, and agrochemical accounts, pick your track below:
              </p>

              <RigidPackagingCTA />
            </section>

            {/* Section 9: Related Packaging Hub, Tools & Sibling Guides */}
            <section
              id="heading-related-cluster"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Packaging Recovery Hub, Section 43B(h) Tools &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/packaging-printing-paper-mill-recovery"
                  className="group block bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400">
                    Parent Industry Pillar Hub
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-red-300 mt-1 mb-1.5">
                    Packaging, Corrugated Box, Printing &amp; Paper Mill Recovery
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Master IND-22 escalation hub for corrugated plants, flexible laminate converters, rigid plastic bottle makers, and paper mills.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                    Interactive Statutory Calculator
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                    MSME Delayed Payment Interest Calculator (3&times; RBI Rate)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compute exact monthly-compounded Section 16 interest on overdue PET preform, HDPE drum, cap, and glass bottle bills.
                  </p>
                </Link>

                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Ready-to-Use Notice Template
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                    MSME Delayed Payment &amp; Section 43B(h) Demand Notice Format
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ready-to-customize statutory notice template incorporating invoice schedules, 45-day ceiling alerts, and MSEFC escalation warnings.
                  </p>
                </Link>

                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700">
                    Annotated Tax &amp; MSME Statute
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                    Section 43B(h) Income Tax Disallowance Rule for MSME Suppliers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Learn how March 31 corporate tax disallowance forces CFOs and statutory auditors to clear overdue rigid packaging bills.
                  </p>
                </Link>

                <Link
                  href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    IND-22 Sibling Playbook
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                    Unlifted Custom-Printed Pouches &amp; Mono-Cartons Price Recovery
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recover 100% contract price, rotogravure cylinder balances, and Section 44 storage rent when brands abandon custom packaging.
                  </p>
                </Link>

                <Link
                  href="/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    IND-22 Sibling Playbook
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                    Corrugated Box Manufacturer Recovery: Defeating BF &amp; GSM Excuses
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Use Sale of Goods Act s.42 deemed acceptance and BIS IS 2771 norms to defeat unilateral 15% post-dispatch carton deductions.
                  </p>
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
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Frequently Asked Questions on Blow-Mould Lien &amp; Bottle Debts
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 p-4 sm:p-5 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{item.q}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-black shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 mt-1 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Authorities & Official Portals */}
            <section
              id="heading-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  Governing Statutes, BIS Standards &amp; Official Filing Portals
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Authored &amp; reviewed for LegalRecovery.in by{" "}
                <strong className="text-slate-900">Anuj Anand Malik</strong>{" "}
                (Advocate &amp; Founder, AMA Legal Solutions). Verify the bare acts, BIS testing frameworks, and MSME Samadhaan portals cited in this guide directly via official government sources:
              </p>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((source, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
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

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
