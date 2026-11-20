import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CommodityHubTableOfContents from "./CommodityHubTableOfContents";
import CommodityHubScenarioTabs from "./CommodityHubScenarioTabs";
import CommodityHubCTA from "./CommodityHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/mining-minerals-fuel-scrap-commodity-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Coal, Petcoke, Metal Scrap, Mineral & Fuel Recovery";
const PAGE_DESCRIPTION =
  "Protect 2–4% bulk commodity margins: defeat GCV/moisture/slag debit notes, attach mill assets (Order 38 Rule 5) & trigger IBC Section 8.";
const H1_TEXT =
  "High-Value Commodity, Sampling-Dispute & Asset-Attachment Recovery for Coal, Petcoke, Metal Scrap, Mineral & Industrial Fuel Suppliers";

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
  archetype: "G1" | "L1" | "P1";
  archetypeLabel: string;
  track:
    | "Coal, Scrap & Fuel"
    | "Gas Cylinders, Minerals & OB"
    | "Attachment Law & Notice Pack";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_25_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-282",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Coal, Scrap & Fuel",
    title: "Imported Coal, Petcoke & Biomass: Defeating GCV/Moisture Cuts",
    url: "/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery",
    statute: "Sale of Goods s.42 & NABL Umpire Finality",
    summary:
      "Neutralize unilateral boiler-plant GCV, moisture, and ash debit notes raised 45 days after the lot is burned using SGS/Intertek umpire certificates.",
  },
  {
    id: "B2B-283",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Coal, Scrap & Fuel",
    title: "Metal Scrap (HMS / Copper / Aluminium) & Rolling Mill Default Recovery",
    url: "/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery",
    statute: "s.42 Furnace Melting Estoppel & Order 38 Rule 5",
    summary:
      "Pair Dharamkanta weighbridge slips, E-Way Bills, and gate-camera timestamps to defeat post-melting slag deductions and attach mill billets.",
  },
  {
    id: "B2B-285",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Coal, Scrap & Fuel",
    title: "Industrial Lubricants, Furnace Oil, LDO & Bulk Diesel Recovery",
    url: "/industrial-lubricants-furnace-oil-ldo-bulk-diesel-bowser-credit-recovery",
    statute: "Order XXXVII CPC & NI Act s.138",
    summary:
      "Convert signed fuel indent books, digital RFID bowser receipts, and fleet fuel cards into fast-track Order 37 summary suits and s.138 director action.",
  },
  {
    id: "B2B-284",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Gas Cylinders, Minerals & OB",
    title: "Industrial Gas Cylinders (O2, N2, Argon, CO2) Retention & BNS s.316",
    url: "/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery",
    statute: "Gas Cylinders Rules 2016 (PESO) & BNS s.316",
    summary:
      "Enforce PESO neck-ring embossing ownership, stop rival bottlers from refilling your cylinders, and recover daily cylinder demurrage plus gas bills.",
  },
  {
    id: "B2B-286",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Gas Cylinders, Minerals & OB",
    title: "Industrial Minerals (Quartz, Feldspar, Clay, Lime) Debt Recovery",
    url: "/industrial-minerals-quartz-feldspar-china-clay-lime-foundry-recovery",
    statute: "MSMED ss.15–18, s.43B(h) & Order 37",
    summary:
      "Leverage Manufacturing MSME status for mineral grinding and calcining plants in Beawar, Udaipur, Bhuj, Ongole, and Katni to claim 3x RBI interest.",
  },
  {
    id: "B2B-287",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Gas Cylinders, Minerals & OB",
    title: "Mining Overburden (OB), Drilling, Blasting & HEMM Contractor Recovery",
    url: "/mining-overburden-removal-drilling-blasting-hems-contractor-recovery",
    statute: "Volumetric Survey Sign-Offs & Arbitration s.9/21",
    summary:
      "Lock joint volumetric survey sheets and e-Ravanna records while securing Arbitration s.9 interim protection against leaseholder gate-pass blockades.",
  },
  {
    id: "B2B-288",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Gas Cylinders, Minerals & OB",
    title: "Timber Importers (Gandhidham) & Plywood/MDF Makers Recovery",
    url: "/timber-plywood-veneer-sawmill-importer-wholesaler-credit-recovery",
    statute: "MSMED s.15–18, s.43B(h) & NI Act s.138",
    summary:
      "Recover port-yard timber and Yamunanagar/Perumbavoor plywood dealer arrears using Section 43B(h) tax disallowance pressure and Order 37 suits.",
  },
  {
    id: "B2B-289",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "Attachment Law & Notice Pack",
    title: "Order 38 Rule 5 CPC (Attachment Before Judgment) Creditor Guide",
    url: "/order-38-rule-5-attachment-before-judgment-b2b-commodity-recovery",
    statute: "CPC Order XXXVIII Rule 5 & Commercial Courts s.12A",
    summary:
      "Bypass mandatory Section 12A mediation under the Yamini Manohar urgent interim relief doctrine to freeze factory assets or bank accounts.",
  },
  {
    id: "B2B-290",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "Attachment Law & Notice Pack",
    title: "Coal/Scrap Sampling Rebuttal & PESO Gas-Cylinder Return Notice Pack",
    url: "/templates/coal-scrap-commodity-supply-and-gas-cylinder-recovery-notice",
    statute: "Sale of Goods s.42, PESO Rules, BNS s.316 & IBC s.8",
    summary:
      "Dual-purpose advocate notice templates annexing NABL umpire certificates, Dharamkanta slips, and PESO embossed cylinder serial schedules.",
  },
];

const SPOKE_TRACKS = [
  {
    groupTitle: "Track A: Coal, Petcoke, Metal Scrap & Bulk Industrial Fuel",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_25_SPOKES.filter((s) => s.track === "Coal, Scrap & Fuel"),
  },
  {
    groupTitle: "Track B: PESO Gas Cylinders, Industrial Minerals, Mining OB & Timber",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_25_SPOKES.filter((s) => s.track === "Gas Cylinders, Minerals & OB"),
  },
  {
    groupTitle: "Track C: Asset Attachment Law (Order 38 Rule 5) & Notice Templates",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    items: IND_25_SPOKES.filter((s) => s.track === "Attachment Law & Notice Pack"),
  },
];

const ESCALATION_MATRIX = [
  {
    tier: "₹3L – ₹25L | Fuel Indents, Timber & Lubricant Ledgers",
    aging: "15 – 45 DPD",
    evidence: "Signed fuel indent / delivery challan, E-Way Bill Part-B, GSTR-2B, PDCs",
    forum: "Advocate Demand Notice + NI Act s.138 / Order XXXVII CPC",
    advantage: "20% interim cheque compensation (s.143A) + summary decree without trial delay",
  },
  {
    tier: "₹10L – ₹1 Cr | Mineral Grinding, Quartz, Clay & Plywood",
    aging: "45 – 90 DPD",
    evidence: "Udyam Manufacturing Certificate, Tax Invoice, Weighbridge Slip, BSA s.63 log",
    forum: "MSMED s.18 (MSEFC) + Income Tax s.43B(h) Audit Notice",
    advantage: "3x RBI compound interest (s.16) + 75% mandatory pre-deposit on buyer appeal (s.19)",
  },
  {
    tier: "₹25L – ₹5 Cr | Metal Scrap Melting & Boiler Coal GCV Cuts",
    aging: "30 – 90 DPD",
    evidence: "Dharamkanta slip, SGS/NABL load-port umpire certificate, gate CCTV/WhatsApp",
    forum: "Order XXXVIII Rule 5 Attachment + s.12A Urgent Relief Exception",
    advantage: "Freezes rolling mill stock/bank receivables before assets are siphoned",
  },
  {
    tier: "₹1 Cr – ₹15 Cr+ | Port Coal Rakes, Sponge Iron & OB Fleets",
    aging: "60 – 180+ DPD",
    evidence: "Tripartite/Umpire NABL report, Railway Receipt, Joint OB Survey, Contract",
    forum: "IBC Section 8 (Form 3/4) NCLT Trigger / Arbitration s.9",
    advantage: "10-day statutory ultimatum threatening CIRP board displacement & IRP takeover",
  },
  {
    tier: "Any Ticket | Unreturned PESO O2 / N2 / Argon / CO2 Cylinders",
    aging: "Post-Termination",
    evidence: "Neck-ring embossed serial challans, PESO license, security deposit ledger",
    forum: "BNS s.316 Criminal Breach of Trust + Gas Cylinders Rules 2016 Notice",
    advantage: "Triggers police/PESO inspection against illegal refilling + daily demurrage recovery",
  },
];

const APEX_PRECEDENTS = [
  {
    title: "Bypassing Section 12A Mediation for Urgent Asset Attachment",
    parties: "Yamini Manohar v. T.K.D. Keerthi",
    citation: "2023 SCC OnLine SC 1382, Supreme Court of India",
    holding:
      "While Section 12A pre-institution mediation is mandatory for commercial suits >= ₹3 Lakh (Patil Automation), the Supreme Court held that a creditor's plaint contemplating genuine 'urgent interim relief'—such as an Order XXXVIII Rule 5 attachment before judgment to stop a defaulting factory from alienating machinery or stock—is statutorily exempt from 12A delay.",
    takeaway:
      "Scrap dealers and coal importers facing a mill quietly shifting billets or closing bank accounts can approach the Commercial Court immediately with an Order 38 Rule 5 application.",
  },
  {
    title: "Threshold Standard for Order XXXVIII Rule 5 Attachment Before Judgment",
    parties: "Raman Tech. & Process Engg. Co. & Anr. v. Solanki Traders",
    citation: "(2008) 2 SCC 302, Supreme Court of India",
    holding:
      "The Supreme Court clarified that Order XXXVIII Rule 5 is an extraordinary preventive power requiring prima facie merit plus concrete material showing the defendant is about to dispose of or remove property from the court's jurisdiction with intent to obstruct or delay decree execution.",
    takeaway:
      "Commodity suppliers must annex concrete diversion proof—GST cancellation alerts, plant auction listings, sister-concern E-Way transfers, or bounced PDCs—to win an attachment order.",
  },
  {
    title: "Defeating Spurious Post-Consumption Quality Debit Notes Under IBC",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    holding:
      "Under IBC Section 8/9, only a genuine, plausible 'pre-existing dispute' raised prior to the Section 8 Demand Notice bars insolvency admission; a patently feeble, moonshine, or unsupported defense raised as an afterthought cannot defeat an Operational Creditor's petition.",
    takeaway:
      "When a boiler plant burns your imported coal or melts your scrap without lodging a joint NABL umpire objection at unloading, a belated 45-day debit note is exposed as a moonshine defense.",
  },
  {
    title: "Mandatory Section 12A Compliance Where No Urgent Relief Exists",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    holding:
      "The Supreme Court declared Section 12A of the Commercial Courts Act, 2015 mandatory for commercial suits of ₹3 Lakh and above that do not seek urgent interim relief, warning that non-compliant plaints face rejection under Order VII Rule 11.",
    takeaway:
      "For routine non-urgent ledgers, file Form-1 PIMS mediation promptly to obtain a Non-Starter Report within weeks while running parallel NI Act s.138 or IBC s.8 pressure.",
  },
];

const FAQS = [
  {
    question:
      "Can a boiler plant deduct ₹15–₹25 Lakh for 'low GCV or high moisture' 45 days after burning my coal?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930, once the buyer feeds the coal or petcoke lot into its boiler or kiln without raising a timely rejection within the contractual unloading window, the buyer has performed an act inconsistent with the seller's ownership—constituting irrevocable legal acceptance. Where your contract stipulates SGS, Intertek, or NABL umpire/referee sample finality, unilateral post-consumption yard lab reports are legally untenable.",
  },
  {
    question:
      "How do metal scrap traders defeat 'excess slag or recovery loss' claims after an induction furnace melts the load?",
    answer:
      "Scrap dealers in Mandi Gobindgarh, Alang, Durgapur, and Bhiwandi lock acceptance at the factory gate by combining four records under BSA 2023 Section 63: the Tax Invoice, GST E-Way Bill Part-B, certified Dharamkanta gross/tare weighbridge slip, and gate-inward stamp or unloading timestamp. Once the scrap is charged into an induction furnace within 12 hours, physical verification is impossible and Section 42 bars belated slag deductions.",
  },
  {
    question:
      "When can a commodity supplier get Order XXXVIII Rule 5 attachment before judgment?",
    answer:
      "Under Order XXXVIII Rule 5 CPC, if you demonstrate a strong prima facie unpaid ledger (invoices, E-Way Bills, GSTR-2B) and concrete evidence that the defaulting mill or plant is dismantling machinery, transferring inventory to sister entities, or emptying bank accounts to frustrate a decree, the Commercial Court can attach assets or freeze accounts—and bypass mandatory Section 12A mediation under the Yamini Manohar urgent interim relief exception.",
  },
  {
    question:
      "What criminal and regulatory remedies exist for unreturned PESO oxygen, nitrogen, or argon cylinders?",
    answer:
      "Under the Gas Cylinders Rules, 2016 (administered by PESO), no person or rival bottler may fill high-pressure cylinders bearing another owner's embossed neck-ring identification mark without written permission. Retaining bailed cylinders after notice and non-payment also constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), allowing simultaneous criminal action, PESO complaints, and daily cylinder demurrage recovery.",
  },
  {
    question:
      "Do mineral grinding plants, quartz processors, and plywood units qualify for MSMED 3x RBI interest?",
    answer:
      "Yes. While pure trading without processing is excluded from MSEFC adjudication, mineral grinding, calcining, micronizing (quartz, feldspar, china clay, lime, silica), and plywood/veneer manufacturing units holding a valid Udyam Registration Certificate prior to the invoice date qualify as Manufacturing MSMEs—unlocking 3x RBI compound interest under Section 16 and buyer tax disallowance under Income Tax Act Section 43B(h).",
  },
  {
    question:
      "Can coal and scrap traders club contractual interest with principal to cross the ₹1 Crore IBC Section 8 threshold?",
    answer:
      "Yes. Where the underlying supply agreement, purchase order, or mutually accepted tax invoices explicitly stipulate overdue interest (for example, 18%–24% p.a.), NCLAT jurisprudence permits Operational Creditors to aggregate principal plus accrued contractual interest to cross the ₹1 Crore threshold under Section 4 of the IBC and serve a Form 3/Form 4 Demand Notice under Section 8.",
  },
  {
    question:
      "How does LegalRecovery handle both a single ₹999 test case and 100+ defaulting factory ledgers?",
    answer:
      "Track 1 lets you test one live overdue coal, scrap, fuel, or cylinder claim for ₹999—advocate-drafted and served simultaneously via Email, WhatsApp, and Speed Post RPAD. Track 2 lets port yards, fuel distributors, and gas plants upload 10 to 10,000+ defaulting accounts via CSV inside the Representees workspace for segregated GSTIN dispatch and escalation.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Sale of Goods Act, 1930 (Sections 41 & 42 — Buyer's Acceptance & Irreversible Consumption)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Insolvency and Bankruptcy Board of India (IBBI) — IBC Section 8 & Operational Creditor Form 3/4",
    url: "https://ibbi.gov.in/",
  },
  {
    title: "Petroleum and Explosives Safety Organisation (PESO) — Gas Cylinders Rules, 2016",
    url: "https://peso.gov.in/",
  },
  {
    title: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
    url: "https://nabl-india.org/",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 316 — Criminal Breach of Trust) & BSA 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
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
  },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coal, Petcoke, Metal Scrap, Mineral & Industrial Fuel B2B Debt Recovery",
  serviceType: "Institutional Commodity & Industrial Asset Legal Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-25 Mining, Minerals, Fuel, Scrap & Bulk Commodity Recovery Spokes",
  numberOfItems: IND_25_SPOKES.length,
  itemListElement: IND_25_SPOKES.map((spoke, index) => ({
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
      name: "Mining, Minerals, Fuel & Scrap Recovery",
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

export default function MiningMineralsFuelScrapCommodityRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Mining, Minerals, Fuel & Scrap Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
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
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              IND-25 Pillar Hub &bull; Coal, Petcoke, Scrap, Fuel &amp; Minerals
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Recovery Protocol
              </span>
              Bulk commodity traders operate on 2–4% margins where one ₹50L–₹15Cr factory default erases months of port and yard turnover. Lock irrevocable acceptance under{" "}
              <strong>Sale of Goods Act s.42</strong> and NABL umpire finality, freeze mill assets via{" "}
              <strong>Order XXXVIII Rule 5</strong>, prosecute cylinder retention under{" "}
              <strong>BNS s.316</strong>, and trigger <strong>IBC Section 8</strong> (&ge; ₹1 Cr).
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">₹50L–₹15Cr</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Typical factory &amp; mill commodity ledger exposure
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">s.42 + NABL</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Irreversible consumption bars late GCV/slag debits
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">Order 38 R.5</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Urgent asset attachment bypassing s.12A delay
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">IBC s.8 / BNS 316</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  10-day CIRP trigger (&ge; ₹1 Cr) &amp; PESO cylinder rescue
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <CommodityHubTableOfContents />

            {/* Right Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The 2-4% Margin Crisis */}
              <section
                id="heading-margin-risk-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why 2–4% Commodity Margins Collapse on One Factory Default
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Across India&apos;s heavy industrial corridors—imported steam coal and petcoke yards at{" "}
                    <strong>Gandhidham, Mundra, Vizag, Paradip, and Krishnapatnam</strong>; ferrous and non-ferrous scrap hubs in{" "}
                    <strong>Mandi Gobindgarh, Alang, Durgapur, Bhiwandi, and Raipur</strong>; mineral grinding belts in{" "}
                    <strong>Beawar, Udaipur, Bhuj, Ongole, and Katni</strong>; and industrial fuel and PESO gas cylinder networks—suppliers ship high-value bulk loads on razor-thin{" "}
                    <strong>2% to 4% net trading margins</strong>.
                  </p>
                  <p>
                    Unlike consumer retail or SaaS subscriptions, a single defaulting sponge-iron kiln, induction furnace, or ceramic plant routinely carries{" "}
                    <strong>₹50 Lakh to ₹15 Crore</strong> of open credit across 10 to 60 tipper or rake dispatches. When working capital tightens, buyers rarely admit inability to pay. Instead, they deploy four predictable tactics:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li>
                      <strong>Post-Consumption GCV &amp; Moisture Debit Notes:</strong> Raising unilateral ₹15L–₹40L quality deductions 45 days after burning the entire imported coal or petcoke lot in their boiler.
                    </li>
                    <li>
                      <strong>Post-Melting &ldquo;Excess Slag&rdquo; Set-Offs:</strong> Charging 25-ton HMS, copper, or aluminium scrap truckloads into an induction furnace within 12 hours of gate entry, then withholding payment over alleged recovery loss.
                    </li>
                    <li>
                      <strong>PESO Cylinder Hostage &amp; Illegal Refilling:</strong> Stopping gas bill payments while retaining hundreds of neck-ring embossed oxygen, nitrogen, argon, or CO2 cylinders and refilling them via unauthorized third-party bottlers.
                    </li>
                    <li>
                      <strong>Silent Asset Stripping Before Suit:</strong> Shifting finished billets, closing operating bank accounts, or transferring plant machinery to sister entities while dragging out ordinary civil suits.
                    </li>
                  </ul>
                  <p>
                    Generic consumer demand letters fail in heavy commodity disputes because they ignore technical acceptance triggers. To recover principal and interest without surrendering 30% haircuts, creditors must anchor every notice in{" "}
                    <strong>Sale of Goods Act Section 42</strong>, <strong>NABL umpire sampling finality</strong>,{" "}
                    <strong>Order XXXVII</strong>, <strong>Order XXXVIII Rule 5 asset attachment</strong>, and{" "}
                    <strong>IBC Section 8</strong>.
                  </p>
                </div>
              </section>

              {/* Section 2: Multi-Track Escalation Decision Matrix */}
              <section
                id="heading-escalation-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Multi-Track Escalation Matrix by Ticket Size &amp; Collateral
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Selecting the wrong forum wastes 6 to 18 months—long enough for a stressed rolling mill or mining contractor to strip assets. Match your overdue ledger&apos;s ticket tier, aging bucket, and dispatch proof to the optimal statutory track below.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[720px]">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                        <th className="p-3.5 font-bold">Ticket Tier &amp; Sector</th>
                        <th className="p-3.5 font-bold">Aging</th>
                        <th className="p-3.5 font-bold">Mandatory Proof Dossier</th>
                        <th className="p-3.5 font-bold">Primary Legal Forum</th>
                        <th className="p-3.5 font-bold">Creditor Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {ESCALATION_MATRIX.map((row) => (
                        <tr key={row.tier} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{row.tier}</td>
                          <td className="p-3.5 text-slate-600 whitespace-nowrap">{row.aging}</td>
                          <td className="p-3.5 text-slate-700">{row.evidence}</td>
                          <td className="p-3.5 font-semibold text-[#DC2626]">{row.forum}</td>
                          <td className="p-3.5 text-slate-700">{row.advantage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Workflow / Escalation Rail */}
              <section
                id="heading-sampling-to-ibc-rail"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    From Gate Weighment &amp; NABL Sampling to Asset Attachment
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every bulk commodity recovery hinges on converting operational dispatch records—Dharamkanta slips, E-Way Bills, NABL certificates, and PESO serial logs—into an unassailable statutory dossier before the buyer fabricates a dispute.
                </p>

                {/* Desktop SVG Diagram */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                  <svg
                    viewBox="0 0 880 260"
                    width="880"
                    height="260"
                    className="w-full h-auto"
                    role="img"
                    aria-label="IND-25 Four-Stage Commodity Recovery Escalation Flow"
                  >
                    <defs>
                      <marker
                        id="arrowRed"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0,0 L0,6 L9,3 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="15" y="45" width="190" height="165" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="30" y="75" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 • DAY 0–15</text>
                    <text x="30" y="98" fill="#FFFFFF" fontSize="14" fontWeight="800">Dispatch &amp; Gate Lock</text>
                    <text x="30" y="124" fill="#CBD5E1" fontSize="11">• E-Way Bill Part-A/B</text>
                    <text x="30" y="144" fill="#CBD5E1" fontSize="11">• Dharamkanta Weight Slip</text>
                    <text x="30" y="164" fill="#CBD5E1" fontSize="11">• Load-Port NABL / SGS</text>
                    <text x="30" y="184" fill="#CBD5E1" fontSize="11">• PESO Embossed Serials</text>

                    <line x1="205" y1="127" x2="233" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                    {/* Stage 2 */}
                    <rect x="237" y="45" width="190" height="165" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="252" y="75" fill="#34D399" fontSize="11" fontWeight="700">STAGE 2 • DAY 16–30</text>
                    <text x="252" y="98" fill="#FFFFFF" fontSize="14" fontWeight="800">s.42 Acceptance Notice</text>
                    <text x="252" y="124" fill="#CBD5E1" fontSize="11">• Boiler Burn / Furnace Melt</text>
                    <text x="252" y="144" fill="#CBD5E1" fontSize="11">• Estoppel Against Debit Note</text>
                    <text x="252" y="164" fill="#CBD5E1" fontSize="11">• BSA 2023 s.63 Cert.</text>
                    <text x="252" y="184" fill="#CBD5E1" fontSize="11">• Email + WA + RPAD</text>

                    <line x1="427" y1="127" x2="455" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                    {/* Stage 3 */}
                    <rect x="459" y="45" width="190" height="165" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="474" y="75" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 3 • DAY 31–60</text>
                    <text x="474" y="98" fill="#FFFFFF" fontSize="14" fontWeight="800">Interim Freeze &amp; Penal</text>
                    <text x="474" y="124" fill="#CBD5E1" fontSize="11">• Order 38 Rule 5 Freeze</text>
                    <text x="474" y="144" fill="#CBD5E1" fontSize="11">• Yamini Manohar s.12A</text>
                    <text x="474" y="164" fill="#CBD5E1" fontSize="11">• NI s.138 (20% s.143A)</text>
                    <text x="474" y="184" fill="#CBD5E1" fontSize="11">• BNS s.316 (Gas Cylinders)</text>

                    <line x1="649" y1="127" x2="677" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                    {/* Stage 4 */}
                    <rect x="681" y="45" width="184" height="165" rx="14" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="696" y="75" fill="#FECACA" fontSize="11" fontWeight="700">STAGE 4 • &ge; ₹1 CR</text>
                    <text x="696" y="98" fill="#FFFFFF" fontSize="14" fontWeight="800">IBC s.8 / Decree</text>
                    <text x="696" y="124" fill="#FEE2E2" fontSize="11">• Form 3/4 10-Day Notice</text>
                    <text x="696" y="144" fill="#FEE2E2" fontSize="11">• Order 37 Summary Decree</text>
                    <text x="696" y="164" fill="#FEE2E2" fontSize="11">• MSMED 3x RBI Award</text>
                    <text x="696" y="184" fill="#FEE2E2" fontSize="11">• Order 21 Bank Attachment</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                  <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[10px] font-bold uppercase text-red-400 mb-1">Stage 1 &bull; Day 0–15</p>
                    <p className="text-sm font-extrabold mb-1.5">Dispatch &amp; Gate Lock</p>
                    <p className="text-xs text-slate-300">E-Way Bill Part-B, Dharamkanta slip, Load-Port NABL/SGS &amp; PESO serials.</p>
                  </div>
                  <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[10px] font-bold uppercase text-emerald-400 mb-1">Stage 2 &bull; Day 16–30</p>
                    <p className="text-sm font-extrabold mb-1.5">s.42 Acceptance Notice</p>
                    <p className="text-xs text-slate-300">Lock boiler/furnace consumption estoppel + BSA s.63 notice via Email, WA &amp; RPAD.</p>
                  </div>
                  <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[10px] font-bold uppercase text-amber-400 mb-1">Stage 3 &bull; Day 31–60</p>
                    <p className="text-sm font-extrabold mb-1.5">Interim Freeze &amp; Penal</p>
                    <p className="text-xs text-slate-300">Order 38 Rule 5 attachment, NI s.138 director action &amp; BNS s.316 cylinder rescue.</p>
                  </div>
                  <div className="bg-red-950 text-white rounded-xl p-4 border border-red-800">
                    <p className="text-[10px] font-bold uppercase text-red-300 mb-1">Stage 4 &bull; &ge; ₹1 Cr</p>
                    <p className="text-sm font-extrabold mb-1.5">IBC s.8 / Summary Decree</p>
                    <p className="text-xs text-red-100">Form 3/4 10-day CIRP trigger, Order 37 decree &amp; MSMED 3x RBI execution.</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive 4-Sector Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4 Commodity Default Scenarios &amp; Creditor Counter-Moves
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Select your sub-sector below to inspect the exact commercial bottleneck, statutory counter-mechanism, and 3-step enforcement rail.
                </p>

                <CommodityHubScenarioTabs />
              </section>

              {/* Section 5: Dual-Track Conversion Desk */}
              <section
                id="heading-dual-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Test 1 Live Commodity Claim (₹999) or Onboard Bulk CSV
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Whether you are testing one stalled coal rake or rolling-mill ledger today, or managing 50 to 5,000+ defaulting fuel, mineral, and gas-cylinder buyers across regional GSTINs, choose your onboarding track below.
                </p>

                <CommodityHubCTA />
              </section>

              {/* Section 6: Apex Court Precedents */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Supreme Court Precedents Governing Commodity Attachment
                  </h2>
                </div>

                <div className="space-y-4">
                  {APEX_PRECEDENTS.map((item) => (
                    <article
                      key={item.parties}
                      className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-600 mb-2.5">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                        {item.holding}
                      </p>
                      <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-800">
                        <strong className="text-slate-900">Creditor Takeaway:</strong> {item.takeaway}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Financial & Margin-Protection Ledger */}
              <section
                id="heading-worked-math"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Ledger: Margin Wipeout &amp; IBC s.8 Interest Clubbing
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-300 border border-red-800 mb-3">
                      2.5% Margin Exposure Math
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold mb-3">
                      Why One ₹75L Scrap/Coal Default Demands Immediate Action
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span>Disputed Factory Ledger Principal</span>
                        <span className="font-bold text-white">₹75,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span>Net Trading Margin (2.5%)</span>
                        <span className="font-bold text-amber-400">₹1,87,500 per ₹75L</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span>Fresh Turnover Needed to Recover Loss</span>
                        <span className="font-bold text-red-400">₹30,00,00,000 (₹30 Cr)</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span>Unilateral &ldquo;GCV / Slag&rdquo; Haircut Offered</span>
                        <span className="font-bold text-slate-200">25% (₹18.75L lost)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
                      IBC s.8 &amp; Contractual Interest Clubbing
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                      Crossing the ₹1 Crore IBC Threshold on an ₹86L Principal
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <div className="flex justify-between py-1.5 border-b border-emerald-200">
                        <span>Overdue Imported Coal Principal (10 Months)</span>
                        <span className="font-bold text-slate-900">₹86,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-emerald-200">
                        <span>Contractual Invoice Interest (24% p.a. &times; 10m)</span>
                        <span className="font-bold text-emerald-700">+ ₹17,20,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-emerald-200">
                        <span>Combined Operational Debt (Form 3/4 Claim)</span>
                        <span className="font-black text-slate-900">₹1,03,20,000</span>
                      </div>
                      <p className="text-xs text-emerald-900 pt-1 leading-relaxed">
                        <strong>Result:</strong> Exceeds the ₹1 Crore IBC Section 4 floor, unlocking a 10-day statutory Form 3/4 Demand Notice without accepting a 25% haircut.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: IND-25 Hub-and-Spoke Directory */}
              <section
                id="heading-ind25-directory"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    IND-25 Sector Playbooks, Attachment Law &amp; Notice Directory
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every sub-sector inside IND-25 carries distinct physical custody, sampling, and statutory attachment mechanics. Below is the complete 9-spoke architecture under this pillar hub.
                </p>

                <div className="space-y-8">
                  {SPOKE_TRACKS.map((track) => (
                    <div key={track.groupTitle}>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${track.badgeClass}`}
                        >
                          {track.items.length} Playbooks
                        </span>
                        <span>{track.groupTitle}</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {track.items.map((spoke) => (
                          <div
                            key={spoke.id}
                            className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                                  {spoke.id} &bull; {spoke.archetype}
                                </span>
                                <span className="text-[10px] font-semibold text-slate-500">
                                  {spoke.archetypeLabel}
                                </span>
                              </div>
                              <h4 className="text-sm font-extrabold text-slate-900 leading-snug mb-1.5">
                                {spoke.title}
                              </h4>
                              <p className="text-[11px] font-semibold text-emerald-700 mb-2">
                                {spoke.statute}
                              </p>
                              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                {spoke.summary}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                              <span className="font-mono text-slate-500 truncate max-w-[180px]">
                                {spoke.url}
                              </span>
                              <Link
                                href="/user/new-recovery"
                                className="font-bold text-[#DC2626] hover:underline shrink-0"
                              >
                                File Claim &rarr;
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Live Core B2B Seed Guides & Calculators */}
              <section
                id="heading-live-seed-guides"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Live Statutory Guides, Calculators &amp; Bulk Recovery Tools
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Summary Suit Law
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                      Order XXXVII CPC Summary Suit for Money Recovery
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bypass 4-year ordinary trials on liquidated commodity invoices, signed fuel indents, and written supply contracts.
                    </p>
                  </Link>

                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Director Liability
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                      Cheque Bounce Case Against Company Directors (NI s.138/141)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hold managing directors and signatory partners personally accountable with 20% interim compensation under s.143A.
                    </p>
                  </Link>

                  <Link
                    href="/recovery/unpaid-invoices"
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      B2B Invoice Desk
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                      Unpaid B2B Invoices &amp; Commercial Ledger Recovery
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      End-to-end advocate demand notices, GSTR-2B reconciliation, and multi-channel BSA s.63 delivery.
                    </p>
                  </Link>

                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Interactive Calculator
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                      MSME 3x RBI Delayed Payment Interest Calculator
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Compute exact monthly compounded MSMED s.16 interest for Udyam-registered mineral, calcining, and plywood units.
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
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: Commodity &amp; Scrap Recovery
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="list-none flex items-center justify-between gap-3 cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
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
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Primary Statutory Authorities &amp; Official Portals
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
                        className="text-slate-700 hover:text-[#DC2626] hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                  Reviewed by <strong>Anuj Anand Malik</strong> (Advocate &amp; Founder, AMA Legal Solutions) for statutory accuracy under Indian commercial and insolvency law.
                </p>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides currentPath={PAGE_URL} />
      </div>
    </>
  );
}
