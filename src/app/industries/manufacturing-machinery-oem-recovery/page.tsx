import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ManufacturingHubTableOfContents from "./ManufacturingHubTableOfContents";
import ManufacturingHubScenarioTabs from "./ManufacturingHubScenarioTabs";
import ManufacturingHubCTA from "./ManufacturingHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/manufacturing-machinery-oem-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Manufacturing, Machinery & OEM Supplier Debt Recovery India";
const PAGE_DESCRIPTION =
  "Recover withheld commissioning balances, OEM arbitrary debit notes, cancelled tooling costs, CNC job-work dues & industrial dealer ledgers across India.";
const H1_TEXT =
  "Commercial Debt & Retention Recovery for Manufacturers, Heavy Machinery Makers & OEM Ancillary Units";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "G2" | "L1" | "P1" | "H1";
  archetypeLabel: string;
  track: "machinery" | "ancillary" | "tax-evidence";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_06_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-078",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "machinery",
    title: "Commissioning Balance Withheld While Buyer Runs Machinery",
    url: "/custom-industrial-machinery-balance-withheld-after-installation-recovery",
    statute: "Sale of Goods Act s.42, s.55 & s.59",
    summary:
      "Establish deemed acceptance when factories run SPM, CNC, or packaging lines commercially while delaying the final 10–20% commissioning sign-off.",
  },
  {
    id: "B2B-082",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "machinery",
    title: "Wrongful PBG Invocation: Section 9 Stay & Post-Encashment Recovery",
    url: "/wrongful-performance-bank-guarantee-pbg-invocation-stay-recovery",
    statute: "Arbitration Act s.9 & Supreme Court BG Standards",
    summary:
      "Distinguish conditional vs unconditional Performance Bank Guarantees, meet egregious-fraud injunction tests, and sue for restitution with interest.",
  },
  {
    id: "B2B-085",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "machinery",
    title: "Purchase Order Cancelled Mid-Fabrication: WIP & Profit Claims",
    url: "/purchase-order-cancelled-mid-production-bespoke-goods-recovery",
    statute: "Contract Act s.39, s.73 & A.T. Brij Paul Singh",
    summary:
      "Quantify special-alloy work-in-progress less salvage value plus 10–15% loss of profit when EPC or industrial buyers cancel bespoke POs after GAD approval.",
  },
  {
    id: "B2B-079",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "ancillary",
    title: "Auto-Ancillary Unamortized Tooling & Arbitrary OEM Debit Notes",
    url: "/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery",
    statute: "Contract Act s.73/s.170 & MSMED s.15–18",
    summary:
      "Challenge retrospective Tier-1 OEM price cuts and line-stoppage penalties while recovering unamortized die and mould capital.",
  },
  {
    id: "B2B-081",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "ancillary",
    title: "CNC Job-Work & Fabrication Bills: Statutory Bailee Lien (s.170)",
    url: "/cnc-machining-fabrication-job-work-challan-payment-recovery",
    statute: "Contract Act s.170 & CGST s.143 Challans",
    summary:
      "Exercise particular bailee liens strictly on components worked upon without inviting criminal conversion risk, synced with ITC-04 rules.",
  },
  {
    id: "B2B-084",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "ancillary",
    title: "Industrial OEM Dealer & Authorized Distributor Credit Defaults",
    url: "/industrial-dealer-oem-authorized-distributor-credit-default-recovery",
    statute: "Deposit Set-Off, NI Act s.138 & Commercial Courts",
    summary:
      "Recover ₹10L–₹2Cr channel balances across pumps, motors, cables, switchgear, and bearings dealers via deposit set-off and security cheques.",
  },
  {
    id: "B2B-080",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "tax-evidence",
    title: "Medium-Enterprise Udyam Trap: 4 Faster Alternatives to Samadhaan",
    url: "/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options",
    statute: "MSMED s.2(n) Exclusion & Silpi Industries",
    summary:
      "Why ₹50–250 Cr Medium factories get dismissed at MSEFC—and how to recover faster via Order XXXVII, Commercial Court s.12A, TReDS, and IBC s.8.",
  },
  {
    id: "B2B-083",
    archetype: "G2",
    archetypeLabel: "G2 Strategy Matrix",
    track: "tax-evidence",
    title: "Using Section 43B(h) & Form 3CD Clause 22 Before March 31",
    url: "/section-43bh-march-31-corporate-buyer-tax-disallowance-notice-strategy",
    statute: "Income Tax Act s.43B(h) & Form 3CD Clause 22",
    summary:
      "Operationalize Q4 CFO and Statutory Auditor intimations highlighting the 25.17%–34.94% tax hit on overdue Micro and Small invoices.",
  },
  {
    id: "B2B-086",
    archetype: "G2",
    archetypeLabel: "G2 Evidentiary Matrix",
    track: "tax-evidence",
    title: "Proving Delivery via Buyer GST ITC (GSTR-3B) & E-Way Bill Logs",
    url: "/tax-invoice-eway-bill-grn-proof-checklist-b2b-summary-suit",
    statute: "CGST s.16(2)(b), FASTag & Order XXXVII CPC",
    summary:
      "Defeat 'goods not received' defenses when physical GRNs go missing by proving the buyer availed GSTR-2B/3B Input Tax Credit.",
  },
  {
    id: "B2B-088",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "tax-evidence",
    title: "2-Stage Section 43B(h) CFO Advisory & s.16/s.23 Advocate Notice",
    url: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
    statute: "Income Tax s.43B(h) & MSMED s.16 / s.23",
    summary:
      "Customizable Stage-1 tax-audit alert preserving OEM relationships plus Stage-2 formal advocate notice citing non-deductible s.23 interest.",
  },
  {
    id: "B2B-087",
    archetype: "H1",
    archetypeLabel: "H1 Hindi Vyapari Guide",
    track: "tax-evidence",
    title: "फैक्ट्री व B2B GST बिल पेमेंट रिकवरी (MSME 45-दिन और नोटिस गाइड)",
    url: "/hi/factory-msme-b2b-udhar-bill-recovery-legal-notice",
    statute: "MSMED s.15–18, s.43B(h), NI s.138 & Order 37",
    summary:
      "Bawana, Okhla, Faridabad, Ludhiana, Rajkot aur Surat factory malikon ke liye E-Way Bill, GST ITC aur ₹999 advocate notice ki puri Hindi guide.",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title: "Commercial Use of Machinery Constitutes Deemed Acceptance",
    parties: "Sale of Goods Act, 1930 — Sections 42, 55 & 59 (Statutory Doctrine)",
    citation: "Statutory Sale-of-Goods Acceptance Rule for Capital Equipment",
    holding:
      "Under Section 42, a buyer is deemed to have accepted delivered machinery when they intimate acceptance, perform any act in relation to it inconsistent with the seller's ownership (such as running the equipment in commercial production), or retain it beyond a reasonable period without rejecting it. Under Section 59, once deemed acceptance occurs, the buyer cannot reject the machinery or withhold the balance price, and is restricted to proving quantifiable damages for any alleged breach of warranty.",
    impact:
      "Neutralizes post-installation 'efficiency shortfall' excuses raised months after commercial production begins.",
  },
  {
    title: "Only Micro & Small Suppliers at Supply Date Qualify for MSEFC",
    parties: "Silpi Industries & Ors. v. Kerala State Road Transport Corporation & Anr.",
    citation: "Supreme Court of India — MSMED Act Sections 2(n), 15 & 18",
    holding:
      "The Supreme Court held that Udyam/MSME registration must exist on the date of contract or supply for a seller to invoke Section 18 Facilitation Council jurisdiction. Critically, Section 2(n) defines 'supplier' strictly as Micro or Small enterprises—meaning Medium Enterprises (even with valid Udyam certificates) and pure traders fall outside MSEFC Samadhaan and Section 43B(h) protection.",
    impact:
      "Prevents Medium Enterprises from wasting 12–18 months on threshold rejections at MSEFC.",
  },
  {
    title: "Mandatory Section 12A Mediation Before Commercial Suits (>= ₹3 Lakh)",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. & Yamini Manohar",
    citation: "Supreme Court of India — Commercial Courts Act, 2015 Section 12A",
    holding:
      "For commercial disputes of Specified Value ₹3 Lakh and above not seeking genuine urgent interim relief (such as Order XXXVIII Rule 5 asset attachment), pre-institution mediation under Section 12A is mandatory and non-compliance invites Order VII Rule 11 plaint rejection. A pre-suit advocate legal notice plus DLSA Form-1 mediation triggers faster settlement or produces a clean Non-Starter Report for Order XXXVII / Order XIII-A summary judgment.",
    impact:
      "Structures Medium and non-MSME machinery claims cleanly for Commercial Court enforcement.",
  },
  {
    title: "High Bar for Unconditional BG Injunctions vs WIP Loss of Profit",
    parties: "U.P. State Sugar Corp. v. Sumac International & A.T. Brij Paul Singh",
    citation: "Supreme Court of India — Bank Guarantees & Contract Act Section 73",
    holding:
      "Courts restrain unconditional Bank Guarantees only on strict proof of egregious fraud or irretrievable injustice (special equities), making careful reading of conditional vs unconditional PBG text essential before filing Section 9 Arbitration petitions. Conversely, under A.T. Brij Paul Singh, where a buyer commits anticipatory repudiation mid-fabrication under Section 39, the manufacturer can recover WIP cost less scrap salvage plus reasonable loss of profit (10–15% benchmark).",
    impact:
      "Protects capital-goods makers from hasty PBG injunctions while maximizing mid-PO cancellation claims.",
  },
];

const FAQS = [
  {
    question:
      "How can a machinery maker recover the last 10–20% balance when the buyer already runs the machine?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, putting delivered machinery into commercial production without timely written rejection constitutes deemed acceptance. Once accepted, Section 59 bars unilateral rejection and preserves your suit for price under Section 55. Pair E-Way Bill Part-B records, installation logs, PLC/production output evidence, and the buyer's GSTR-2B/3B Input Tax Credit availment (CGST s.16(2)(b)) inside an advocate demand notice before escalating to MSEFC (if Micro/Small) or Commercial Court.",
  },
  {
    question:
      "Can a Medium Enterprise on Udyam file a delayed-payment claim on MSME Samadhaan?",
    answer:
      "No. Section 2(n) of the MSMED Act, 2006 restricts statutory 'supplier' protection strictly to Micro and Small enterprises, and Section 43B(h) of the Income Tax Act follows the same boundary. Medium Enterprises (and units that registered only after the supply contract, per Silpi Industries) face threshold dismissal at MSEFC. They should route claims ≥ ₹3 Lakh to Commercial Courts via Section 12A mediation, Order XXXVII CPC summary suits, Section 138 NI Act on dishonoured cheques, or IBC Section 8 for undisputed defaults ≥ ₹1 Crore.",
  },
  {
    question:
      "What happens if an auto-ancillary supplier exercises a lien on buyer-owned dies or job-work goods?",
    answer:
      "Under Section 170 of the Indian Contract Act, 1872, a job-worker or supplier who renders skill and labour on bailed raw material or dies holds a statutory Particular Lien over that specific worked batch until machining or modification charges are paid. However, unless an explicit general-lien clause exists in the contract, retaining unrelated goods or older dies creates criminal breach-of-trust exposure under BNS s.316—so batch segregation and CGST s.143 challan hygiene are mandatory.",
  },
  {
    question:
      "How does Section 43B(h) of the Income Tax Act help Micro and Small factories collect before March 31?",
    answer:
      "Under Section 43B(h), any sum payable by a buyer to a Micro or Small supplier beyond the Section 15 MSMED cap (15 days without written credit terms, or maximum 45 days with agreement) and remaining unpaid at March 31 is disallowed as a deductible business expense for that financial year, triggering an immediate 25.17%–34.94% cash tax liability and mandatory Form 3CD Clause 22 tax-audit disclosure. Additionally, Section 23 MSMED Act renders any 3x RBI compound interest paid completely non-deductible.",
  },
  {
    question:
      "Can a manufacturer prove delivery in an Order 37 summary suit if the signed GRN challan was lost?",
    answer:
      "Yes. Under Section 16(2)(b) of the CGST Act, 2017, a buyer cannot legally avail Input Tax Credit unless goods have actually been received. Demonstrating that the buyer accepted your tax invoice in GSTR-2B/IMS and offset ITC in GSTR-3B—corroborated by E-Way Bill Part-B vehicle details, FASTag toll movement, and Tally/SAP ledgers certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023—creates strong documentary estoppel against false 'non-delivery' pleas.",
  },
  {
    question:
      "What if an EPC or industrial buyer cancels a bespoke machinery Purchase Order mid-fabrication?",
    answer:
      "If the buyer repudiates a custom-engineered PO after GAD drawing approval and alloy procurement, Section 39 and Section 73 of the Indian Contract Act entitle you to recover actual raw-material and Work-in-Progress (WIP) expenditure minus realizable scrap salvage, plus reasonable loss of profit (guided by A.T. Brij Paul Singh). Serve an immediate anticipatory-breach notice freezing WIP inspection evidence before liquidating bespoke assemblies.",
  },
  {
    question:
      "Can our factory test LegalRecovery.in on one stuck invoice before uploading an entire dealer ledger?",
    answer:
      "Yes. Under our Dual-Track onboarding, plant finance controllers can submit a single overdue buyer or dealer account at ₹999—attaching multiple unpaid tax invoices, POs, and E-Way bills in one notice—to verify advocate drafting, BSA s.63 server certification, and tri-channel Email + WhatsApp + Speed Post RPAD tracking before launching 10–10,000+ CSV batch dispatches via Representees.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Sale of Goods Act, 1930 (Sections 42, 55 & 59 — Deemed Acceptance & Suit for Price) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 & MSME Samadhaan Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) & Tax Audit Form 3CD Clause 22) — Income Tax Department",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 39, 73 & 170 Bailee Particular Lien) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Commercial Courts Act, 2015 (Sections 2(1)(c), 12A & Order XIII-A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Central Goods and Services Tax (CGST) Act, 2017 (Sections 16(2)(b) & 143 Job-Work) — CBIC",
    url: "https://www.cbic.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Records Certification) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Manufacturing, Industrial Machinery & OEM Supplier Commercial Debt Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Industrial Machinery Makers, Heavy Engineering Units, Auto-Ancillary OEMs, CNC Job-Workers & Medium/MSME Manufacturers",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-06 Manufacturing, Industrial Machinery & OEM Legal Recovery Spokes",
  numberOfItems: IND_06_SPOKES.length,
  itemListElement: IND_06_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manufacturing & OEM Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SPOKE_GROUPS = [
  {
    groupTitle: "Track A: Capital Machinery Commissioning Balances, PBG Stays & Cancelled POs",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_06_SPOKES.filter((s) => s.track === "machinery"),
  },
  {
    groupTitle: "Track B: Auto-Ancillary Tooling, OEM Debit Notes, CNC Job-Work & Channel Dealers",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_06_SPOKES.filter((s) => s.track === "ancillary"),
  },
  {
    groupTitle: "Track C: Medium Udyam Alternatives, GST ITC Proof, s.43B(h) Templates & Hindi Guide",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_06_SPOKES.filter((s) => s.track === "tax-evidence"),
  },
];

export default function ManufacturingMachineryOemRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Manufacturing & OEM Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-06 Manufacturing &amp; OEM Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Sale of Goods s.42 &bull; MSMED &bull; s.43B(h) &bull; Order 37</span>
              <span className="text-red-500">&bull;</span>
              <span>Capital Goods &amp; Ancillary Units</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Factory MDs, OEM CFOs &amp; Plant Controllers)
              </span>
              <p>
                Manufacturers and OEM suppliers can enforce unpaid 10–20% commissioning balances, arbitrary debit notes, and dealer ledgers by combining Sale of Goods Act Section 42 deemed-acceptance notices with buyer GST ITC (GSTR-2B/3B) proof, Section 43B(h) CFO tax-disallowance alerts for Micro/Small units, and Order XXXVII / Commercial Court Section 12A / IBC Section 8 filings for Medium Enterprises.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;3L&ndash;&rupee;10Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Job-Work to Capital Machinery Ticket Span
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  3x RBI Rate
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Monthly Compound Interest (Micro/Small)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  s.42 + ITC
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Commercial Run + GSTR-3B Delivery Estoppel
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Multi-Invoice Notice to Dealer Batch
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Statutory Architecture Reviewed by{" "}
              <Link
                href="/authors/anuj-anand-malik"
                className="text-slate-200 underline hover:text-white font-semibold"
              >
                Anuj Anand Malik
              </Link>
              , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
            </p>
          </div>
        </section>

        {/* Main 2-Column Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <ManufacturingHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-overview-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Indian Manufacturers Lose Margin to Retention &amp; Debit Notes
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Closing the Capital-Goods Commissioning Gap, Auto-Ancillary Tooling Traps &amp; Medium Udyam Blind Spots
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Across India&apos;s industrial corridors—Pune-Chakan, Manesar-Faridabad, Rajkot, Coimbatore, Ludhiana, Sriperumbudur, Hosur, Sanand, and Jamshedpur—receivables loss rarely stems from simple buyer insolvency alone. Instead, factory Managing Directors and industrial Finance Controllers lose 15% to 22% of net project margin through structural commercial traps engineered after goods leave the factory gate.
                  </p>
                  <p>
                    Capital-goods and Special Purpose Machine (SPM) builders routinely collect 80% before dispatch, install the line on the buyer&apos;s shop floor, and watch the customer run three commercial shifts while refusing to sign the Commissioning Certificate to pocket the final 10–20% retention. Tier-2 auto-ancillary units invest tens of lakhs in custom dies against OEM Letters of Intent, only to absorb unilateral retrospective debit notes for line stoppages or raw-material rate clawbacks. Meanwhile, growing ₹50–250 Crore factories holding Medium Udyam certificates assume they can file on{" "}
                    <Link
                      href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      MSME Samadhaan
                    </Link>
                    —only to have claims dismissed at threshold because MSMED Section 2(n) excludes Medium Enterprises.
                  </p>
                  <p>
                    Generic invoice templates written for trading shops fail completely in heavy manufacturing. This IND-06 Pillar Hub unites all 11 vertical manufacturing playbooks, GST/E-Way evidentiary protocols, Section 43B(h) Q4 CFO notices, and Commercial Court escalation tracks—allowing single-factory teams to test one live multi-invoice dispute at ₹999 or onboard multi-plant dealer ledgers via CSV.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Sale of Goods Act s.42
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Deemed Acceptance Doctrine
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Commercial production run + buyer GSTR-2B/3B ITC claim estops belated machine defect excuses.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Udyam Tier Precision
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Micro/Small vs Medium Split
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Micro/Small units weaponize s.43B(h) + MSEFC; Medium units route cleanly to Order XXXVII &amp; s.12A.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Admissible Digital Trail
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      BSA 2023 s.63 Ledger Seal
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Certifies Tally/SAP ledgers, E-Way Bill Part-B, FASTag, and WhatsApp dispatch proofs for summary suits.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Multi-Track Matrix */}
              <section
                id="heading-escalation-matrix"
                aria-labelledby="heading-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="heading-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Industrial &amp; OEM Recovery Matrix by Claim Type &amp; Forum
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Mapping Ticket Value, Supplier Udyam Status, Commercial Bottleneck, Statutory Lever &amp; Target Forum
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[720px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Manufacturing Claim Bucket</th>
                        <th className="p-3.5 border-b border-slate-800">Typical Ticket &amp; Bucket</th>
                        <th className="p-3.5 border-b border-slate-800">Core Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Notice &amp; Cure Window</th>
                        <th className="p-3.5 border-b border-slate-800">Optimal Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Custom SPM / Machinery 10–20% Commissioning Balance
                        </td>
                        <td className="p-3.5">&rupee;5L &ndash; &rupee;3 Cr+ (60&ndash;240 DPD)</td>
                        <td className="p-3.5">Sale of Goods Act s.42/s.55/s.59 + CGST s.16(2)(b)</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15d Deemed-Acceptance Notice</td>
                        <td className="p-3.5">MSEFC / MSME ODR / Commercial Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Micro &amp; Small Factory Q4 Overdue Invoices
                        </td>
                        <td className="p-3.5">&rupee;3L &ndash; &rupee;2 Cr (45+ DPD pre-Mar 31)</td>
                        <td className="p-3.5">Income Tax s.43B(h), Form 3CD Cl.22 &amp; MSMED s.16/23</td>
                        <td className="p-3.5 font-semibold text-amber-700">7d CFO Alert + 15d Formal Notice</td>
                        <td className="p-3.5">MSME ODR / MSEFC (3x RBI Interest)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Auto-Ancillary Tooling &amp; OEM Retrospective Debit Notes
                        </td>
                        <td className="p-3.5">&rupee;10L &ndash; &rupee;5 Cr (LOI/PO Drop)</td>
                        <td className="p-3.5">Contract Act s.73/s.170, Promissory Estoppel &amp; MSMED</td>
                        <td className="p-3.5">15d Debit-Note Rebuttal &amp; Die Lien</td>
                        <td className="p-3.5">MSEFC / Neutral Arbitration / s.12A</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Medium Enterprise (&rupee;50&ndash;250 Cr) Unpaid Supply Ledgers
                        </td>
                        <td className="p-3.5">&rupee;10L &ndash; &rupee;10 Cr+ (Excluded from MSEFC)</td>
                        <td className="p-3.5">Commercial Courts s.12A, Order XXXVII, TReDS &amp; IBC s.8</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">15d Notice or 10d IBC Form 3/4</td>
                        <td className="p-3.5">Commercial Court / NCLT (&ge; &rupee;1 Cr)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          CNC Machining, Plating &amp; Fabrication Job-Work Challans
                        </td>
                        <td className="p-3.5">&rupee;2L &ndash; &rupee;45L (Unpaid Labour Bills)</td>
                        <td className="p-3.5">Contract Act s.170 Particular Lien + CGST s.143</td>
                        <td className="p-3.5">7&ndash;15d Batch Lien Intimation</td>
                        <td className="p-3.5">Lawful Retention / MSEFC / Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Industrial Channel Dealers &amp; Cancelled Bespoke POs
                        </td>
                        <td className="p-3.5">&rupee;10L &ndash; &rupee;2 Cr+ (Open Credit / WIP)</td>
                        <td className="p-3.5">Deposit Set-Off, NI s.138/141 &amp; Contract s.39/73</td>
                        <td className="p-3.5">30d Cheque Notice (15d Cure) / s.39</td>
                        <td className="p-3.5">Magistrate s.138 + Commercial Suit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Workflow Architecture + Mobile Stacked Cards */}
              <section
                id="heading-workflow-architecture"
                aria-labelledby="heading-workflow-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-workflow-architecture-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Factory Invoice to Decree: 5-Stage B2B Recovery Workflow
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Structured Industrial Legal Pipeline Linking ERP Ledgers, GST/E-Way Proof, Tri-Channel Service &amp; Adjudication
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Diagram */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={300}
                    viewBox="0 0 920 300"
                    role="img"
                    aria-label="5-stage manufacturing and OEM B2B debt recovery workflow from ERP and GST evidence lock to decree execution"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="300" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-06 MANUFACTURING &amp; OEM RECOVERY PIPELINE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Evidence Lock</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">PO, Tax Invoices &amp; Ledger</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">E-Way Part-B &amp; FASTag</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">GSTR-2B / 3B ITC Proof</text>
                    <rect x="36" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="196" fill="#34D399" fontSize="10" fontWeight="700">Udyam Tier Check</text>
                    <text x="44" y="213" fill="#94A3B8" fontSize="9.5">Micro/Small vs Medium</text>

                    <path d="M180 152 L202 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,147 212,152 202,157" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">2-Tier Notice</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">Stage 1: s.43B(h) CFO</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">Stage 2: Advocate Demand</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">s.42 / s.170 / s.138</text>
                    <rect x="224" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">Tri-Channel + BSA s.63</text>
                    <text x="232" y="213" fill="#94A3B8" fontSize="9.5">Email, WhatsApp &amp; RPAD</text>

                    <path d="M368 152 L390 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,147 400,152 390,157" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Reply Triage</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">Debit-Note Rebuttals</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">PBG Encashment Watch</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">Sec. 18 Balance Ack.</text>
                    <rect x="412" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="196" fill="#34D399" fontSize="10" fontWeight="700">Mobilox Hygiene</text>
                    <text x="420" y="213" fill="#94A3B8" fontSize="9.5">Pre-dispute screening</text>

                    <path d="M556 152 L578 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,147 588,152 578,157" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum Routing</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">Micro/Small: MSEFC / ODR</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">Medium: s.12A &amp; O.37</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">&ge; ₹1 Cr: IBC s.8 / s.9</text>
                    <rect x="600" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">Interim Relief</text>
                    <text x="608" y="213" fill="#94A3B8" fontSize="9.5">Arb s.9 / O.38 R.5</text>

                    <path d="M744 152 L766 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,147 776,152 766,157" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Realization</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">75% s.19 Deposit</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">3x RBI Interest</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">CPC O.21 Decree</text>
                    <rect x="788" y="176" width="96" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="196" fill="#34D399" fontSize="10" fontWeight="700">Cash Recovered</text>
                    <text x="794" y="213" fill="#94A3B8" fontSize="9.5">Principal + Interest</text>

                    <text x="24" y="280" fill="#94A3B8" fontSize="10">
                      Every stage aligns Tally/SAP multi-invoice ledgers with BSA 2023 s.63 certificates, CGST s.16(2)(b) ITC records, and Silpi Industries Udyam validation.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "ERP, E-Way Bill & GST ITC Evidence Lock",
                      desc: "Bundle POs, tax invoices, E-Way Part-B, FASTag, GSTR-2B/3B ITC proof, and Udyam date-of-contract verification.",
                    },
                    {
                      num: "02",
                      title: "2-Tier CFO Tax Alert & Tri-Channel Advocate Notice",
                      desc: "Deploy s.43B(h) tax-disallowance alerts or s.42/s.170/s.138 demands via Email, WhatsApp, and Speed Post RPAD.",
                    },
                    {
                      num: "03",
                      title: "Inbound Triage & Debit-Note Rebuttal",
                      desc: "Refute sham defect/line-stoppage debit notes and track s.18 balance acknowledgments or urgent s.9 PBG risks.",
                    },
                    {
                      num: "04",
                      title: "Udyam-Matched Forum Escalation",
                      desc: "Route Micro/Small units to MSEFC/MSME ODR and Medium/larger OEMs to s.12A Commercial Courts, Order 37, or IBC s.8.",
                    },
                    {
                      num: "05",
                      title: "Award Enforcement & 75% Pre-Deposit Leverage",
                      desc: "Collect principal plus 3x RBI compound interest, enforce s.19 75% deposit hurdles, or execute CPC Order 21 decrees.",
                    },
                  ].map((stage) => (
                    <div
                      key={stage.num}
                      className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                        {stage.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{stage.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive Vertical Scenario Tabs */}
              <section
                id="heading-scenario-playbooks"
                aria-labelledby="heading-scenario-playbooks-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-scenario-playbooks-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Recovery Playbooks Across 4 Factory Verticals
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Switch Between Capital Machinery, Auto-Ancillary Tooling, Medium Udyam / Dealer Credit, and CNC Job-Work / Cancelled POs
                      </p>
                    </div>
                  </div>
                  <ManufacturingHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: Multi-Invoice Ledger Engine & Dual-Track CTA */}
              <section
                id="heading-invoices-bulk-engine"
                aria-labelledby="heading-invoices-bulk-engine-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-invoices-bulk-engine-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Multi-Invoice Ledger Engine &amp; Representee Group Billing Desk
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Purpose-Built Commercial Plumbing for Multi-Bill Running Accounts, Group Plants &amp; Dealer Batches
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Invoice Array (invoices[])
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Bundle Dozens of Tax Invoices &amp; POs in One Notice
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Manufacturing sales run on running ledgers—attach multiple invoice numbers, PO dates, E-Way Bill IDs, and part-payment credits into a single statutory demand schedule.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Multi-Plant Representees Workspace
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Segregated Sister Concerns &amp; Regional Plants
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Manage distinct Udyam registrations, GSTINs, and authorized finance signatories per manufacturing subsidiary inside{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees management
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Tri-Channel Proof &amp; BSA s.63 Hash
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Email + Blue-Tick WhatsApp + Speed Post RPAD
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Eliminate &ldquo;notice never reached our CFO&rdquo; excuses at MSEFC, Commercial Courts, or NCLT with simultaneous postal barcode tracking and Section 63 BSA certificates.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Centralized Debtor Reply Triage
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Capture Section 18 Acknowledgments &amp; UTRs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every buyer response—part-payment promises, sham debit-note claims, or settlement schedules—is logged centrally to preserve Section 18 limitation resets and Mobilox readiness.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <ManufacturingHubCTA />
                </div>
              </section>

              {/* Section 6: Statutory Rules & Judicial Precedents */}
              <section
                id="heading-statutory-precedents"
                aria-labelledby="heading-statutory-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-statutory-precedents-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Key Statutory Rules &amp; Judicial Precedents for Suppliers
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Binding Supreme Court Rulings &amp; Statutory Doctrines Embedded Into Manufacturing Recovery Notices
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {STATUTORY_PRECEDENTS.map((item) => (
                    <article
                      key={item.title}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span
                        className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Creditor Doctrine
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Factory Impact: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Math */}
              <section
                id="heading-recovery-math"
                aria-labelledby="heading-recovery-math-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-recovery-math-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Math: 10% Retention &amp; Section 43B(h) Tax Leverage
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Financial Comparison: ₹24 Lakh Commissioning Balance vs ₹40 Lakh Q4 Micro/Small Ledger
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider two everyday factory receivables scenarios: (A) an SPM manufacturer with &rupee;24,00,000 (20% retention on a &rupee;1.20 Crore packaging line) stuck for 7 months while the buyer runs commercial shifts, and (B) a Small Udyam forging unit holding &rupee;40,00,000 in overdue invoices from a corporate OEM on March 10 before fiscal close.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                      Scenario A: &rupee;24 Lakh Machine Retention (Medium vs Small)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>If buyer ran production 7 months: Sale of Goods s.42 deemed acceptance applies.</li>
                      <li>If supplier is Udyam Small: 3x RBI monthly compound interest accrues under s.16.</li>
                      <li>If supplier is Udyam Medium: skip MSEFC; serve s.12A + Order XXXVII notice immediately.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Scenario B: &rupee;40 Lakh Q4 Invoice Under Section 43B(h)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Unpaid past 45 days on March 31: &rupee;40,00,000 disallowed in buyer&apos;s tax computation.</li>
                      <li>At 25.17% corporate tax rate: &rupee;10,06,800 immediate cash tax outflow on buyer.</li>
                      <li>Plus Form 3CD Clause 22 auditor reporting &amp; non-deductible s.23 MSMED interest.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">
                      Compute Exact Section 16 Interest &amp; Section 43B(h) Tax Impact
                    </strong>
                    <span className="text-slate-300">
                      Generate a downloadable CSV interest schedule at 3x RBI Bank Rate with monthly rests and Appointed Day dates.
                    </span>
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shrink-0 text-center transition-colors"
                  >
                    Open MSME Interest Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 8: Full 11-Spoke Downward Directory */}
              <section
                id="heading-spokes-directory"
                aria-labelledby="heading-spokes-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-spokes-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      All 11 Manufacturing, Machinery &amp; OEM Spokes &amp; Templates
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Complete IND-06 Hub-and-Spoke Architecture Covering B2B-078 Through B2B-088 Across Playbooks, Law, Templates &amp; Hindi Guide
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_GROUPS.map((group) => (
                    <div key={group.groupTitle} className="space-y-3.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                        {group.groupTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span
                                  className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${group.badgeClass}`}
                                >
                                  {spoke.archetypeLabel}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  {spoke.id}
                                </span>
                              </div>
                              <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                {spoke.title}
                              </p>
                              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                {spoke.summary}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-semibold text-slate-500 truncate">
                                {spoke.statute}
                              </span>
                              <span className="font-bold text-[#DC2626] shrink-0">Open &rarr;</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Live Seed Resources */}
              <section
                id="heading-seed-resources"
                aria-labelledby="heading-seed-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-seed-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live MSME, Order 37 &amp; Commercial Recovery Guides
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Existing Live Calculators, Statutory Guides &amp; Bulk Recovery Solutions on LegalRecovery.in
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "MSME Samadhaan vs Legal Notice (45-Day Rule & 3x Interest)",
                      href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
                      tag: "IND-06 Seed Link",
                      desc: "Compare MSEFC filing timelines with pre-filing Section 15/16 advocate demand notices.",
                    },
                    {
                      title: "MSME ODR Portal Delayed Payment Guide",
                      href: "/msme-odr-portal-delayed-payment-guide",
                      tag: "IND-06 Seed Link",
                      desc: "Step-by-step online mediation, conciliation, and arbitration workflow for Micro and Small units.",
                    },
                    {
                      title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
                      href: "/tools/msme-delayed-payment-interest-calculator",
                      tag: "Live Calculator",
                      desc: "Compute monthly compound interest under Section 16 and preview buyer Section 43B(h) impact.",
                    },
                    {
                      title: "Section 43B(h): The MSME 45-Day Payment Rule",
                      href: "/law/section-43bh-msme-payment-rule",
                      tag: "Tax Disallowance",
                      desc: "Detailed statutory Q&A on March 31 cross-year disallowance and Form 3CD Clause 22 leverage.",
                    },
                    {
                      title: "MSMED Amendment Act 2026: Key Changes for Suppliers",
                      href: "/law/msmed-amendment-act-2026",
                      tag: "2026 Amendment",
                      desc: "Updated 45-day payment ceilings, 90-day ODR rules, and Section 19 75% appeal pre-deposit norms.",
                    },
                    {
                      title: "Order XXXVII Summary Suit for Money Recovery",
                      href: "/law/order-37-summary-suit-money-recovery",
                      tag: "Medium & B2B Track",
                      desc: "Fast-track civil recovery on written contracts, invoices, and cheques with 10-day leave-to-defend rules.",
                    },
                    {
                      title: "MSME Delayed Payment Demand Notice Template",
                      href: "/templates/msme-delayed-payment-demand-notice",
                      tag: "Live Template",
                      desc: "Standard Samadhaan pre-filing demand format ready for customization and advocate review.",
                    },
                    {
                      title: "Distributor & Dealer Dues Recovery Guide",
                      href: "/distributor-dealer-dues-recovery",
                      tag: "Channel Credit",
                      desc: "Recover stuck channel partner balances using signed ledger confirmations and Section 138 cheques.",
                    },
                    {
                      title: "Company Cheque Bounce Against Directors (Section 141)",
                      href: "/cheque-bounce-case-against-company-directors",
                      tag: "Criminal Leverage",
                      desc: "Arraigning company and managing directors under NI Act s.138/s.141 with Aneeta Hada compliance.",
                    },
                    {
                      title: "Bulk Recovery Cases: All-in-One CSV Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "Enterprise Batch",
                      desc: "Launch 10 to 10,000+ tri-channel advocate notices for dealer networks and industrial groups.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/40 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Read Live Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: Manufacturing, Machinery &amp; OEM Debt Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Statutory Answers for Factory Managing Directors, Plant CFOs, Auto-Ancillary Promoters &amp; Credit Heads
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Official Portals */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Statutes, Tax Circulars &amp; Official Filing Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Central Enactments, GST/Income-Tax Rules &amp; Adjudication Portals Referenced
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
