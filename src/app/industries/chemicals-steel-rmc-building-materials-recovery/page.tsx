import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ChemicalsRmcHubTableOfContents from "./ChemicalsRmcHubTableOfContents";
import ChemicalsRmcHubScenarioTabs from "./ChemicalsRmcHubScenarioTabs";
import ChemicalsRmcHubCTA from "./ChemicalsRmcHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/chemicals-steel-rmc-building-materials-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "RMC, TMT Steel, Building Materials & Chemical Recovery";
const PAGE_DESCRIPTION =
  "Recover ₹5L–₹10Cr+ site & factory supply ledgers from builders, EPC contractors & plants using Weighbridge/MTC/E-Way proof, Order 37 & IBC Section 8.";
const H1_TEXT =
  "High-Ticket B2B Debt Recovery for RMC Plants, Steel/Cement Traders, Building-Material Brands, Chemical & Polymer Suppliers";

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
  archetype: "G1" | "L1" | "H1" | "P1";
  archetypeLabel: string;
  track:
    | "RMC, Steel & Road Supply"
    | "Chemicals, Polymers & Finishing"
    | "IBC s.8 & Hindi Vyapari"
    | "Notice Templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_14_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-169",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RMC, Steel & Road Supply",
    title: "RMC Supplier Builder Payment & '28-Day Cube Failure' Dispute Playbook",
    url: "/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute",
    statute: "IS 456 / IS 516 & Sale of Goods s.42",
    summary:
      "Expose unilateral un-witnessed site cube tests, prove plant retention-cube NABL strength, and use constructed RERA slabs as conclusive acceptance.",
  },
  {
    id: "B2B-170",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RMC, Steel & Road Supply",
    title: "TMT, Structural & Coil Steel Distributor Credit Recovery India",
    url: "/tmt-steel-structural-iron-trader-credit-default-recovery-india",
    statute: "Order 37, Order 38 Rule 5 & s.138",
    summary:
      "Protect razor-thin 1.5% steel margins using Dharamkanta weighbridge slips, E-Way Bills, MTCs, and unsold-inventory attachment.",
  },
  {
    id: "B2B-174",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RMC, Steel & Road Supply",
    title: "Bitumen, Stone Crusher & Road-Material Highway Contractor Recovery",
    url: "/bitumen-aggregates-fly-ash-road-material-highway-contractor-recovery",
    statute: "e-Ravanna Pass & Order 38 Rule 5",
    summary:
      "Freeze contractor receivables using State Mining e-Ravanna royalty passes and weighment slips before the hot-mix camp demobilizes.",
  },
  {
    id: "B2B-171",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Chemicals, Polymers & Finishing",
    title: "Industrial Chemical, Solvent, Resin & Dye Tanker Invoice Recovery",
    url: "/industrial-chemicals-solvents-dyes-pigments-invoice-recovery",
    statute: "Sale of Goods s.42 & Order 37 CPC",
    summary:
      "Lock pre-decanting tanker valve-seal COA sign-offs to defeat sham moisture and purity claims raised 45 days after underground tank mixing.",
  },
  {
    id: "B2B-172",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Chemicals, Polymers & Finishing",
    title: "Polymer Granule (PP/HDPE/PVC), Masterbatch & Petrochemical DCA Recovery",
    url: "/polymer-granules-plastic-raw-material-pp-hdpe-pvc-trader-recovery",
    statute: "Contract Act s.140–141 Subrogation",
    summary:
      "Enforce Del Credere Agent (DCA) subrogation rights when RIL/IOCL/GAIL encashes your BG for a defaulting plastic processor.",
  },
  {
    id: "B2B-173",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Chemicals, Polymers & Finishing",
    title: "Morbi Tiles, Glass, Sanitaryware, Plywood & Lift Builder Supply Recovery",
    url: "/tiles-sanitaryware-plywood-glass-electricals-project-supply-recovery",
    statute: "MSMED s.15–18 & CERSAI Barter Audit",
    summary:
      "Escape double-mortgaged 'barter flat' pressure at the finishing stage and enforce cash recovery with 3x RBI compound interest.",
  },
  {
    id: "B2B-175",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Chemicals, Polymers & Finishing",
    title: "Waterproofing, Epoxy Flooring & Construction-Chemical Recovery",
    url: "/paint-waterproofing-construction-chemicals-dealer-contractor-recovery",
    statute: "Warranty vs Price Separation & s.43B(h)",
    summary:
      "Separate independent 10-year warranty bonds from 30-day invoice liability and defeat substrate moisture blame on industrial floors.",
  },
  {
    id: "B2B-176",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "IBC s.8 & Hindi Vyapari",
    title: "Solo IBC Section 8 & 9 Action by Material Suppliers Against Builders",
    url: "/ibc-section-8-by-building-material-suppliers-against-real-estate-builder",
    statute: "IBC s.8/s.9 & Prashat Agarwal Rule",
    summary:
      "Why single RMC, steel, or lift vendors owed ₹1 Cr+ (Principal + Interest) bypass the 100-homebuyer bar and trigger 10-day settlements.",
  },
  {
    id: "B2B-177",
    archetype: "H1",
    archetypeLabel: "H1 Hindi Vyapari Guide",
    track: "IBC s.8 & Hindi Vyapari",
    title: "बिल्डर या ठेकेदार से सरिया, सीमेंट, RMC व बिल्डिंग मटेरियल वसूली गाइड",
    url: "/hi/building-material-sariya-cement-rmc-udhar-recovery-notice",
    statute: "Order 37, s.138 & MSMED (Hindi)",
    summary:
      "धर्मकांटा पर्ची, ई-वे बिल और ₹999 वकील नोटिस से सरिया, सीमेंट, टाइल्स व हार्डवेयर व्यापारियों की तेज़ कानूनी वसूली प्रक्रिया।",
  },
  {
    id: "B2B-178",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "Notice Templates",
    title: "Fact-Verified Legal Demand Notice for RMC, Steel, Chemical & Polymer",
    url: "/templates/rmc-steel-chemical-building-material-demand-legal-notice",
    statute: "s.42 Acceptance & Pre-IBC Warning",
    summary:
      "Interactive notice workspace with E-Way Bill, Vehicle No., Dharamkanta Ticket, MTC/COA Batch & Gate-Inward Stamp annexure tables.",
  },
];

const APEX_PRECEDENTS = [
  {
    title: "Sham Post-Consumption Quality Disputes Fail the Mobilox Pre-Existing Dispute Test",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353 — Supreme Court of India (IBC Section 8 & 9)",
    holding:
      "To defeat an Operational Creditor's Section 9 petition, a corporate debtor must demonstrate a genuine, plausible pre-existing dispute raised prior to receipt of the Section 8 Demand Notice—not a patently feeble, moonshine, or belated quality excuse manufactured after consuming the goods.",
    impact:
      "Destroys backdated '28-day cube failure' or 'moisture variance' emails sent only when demand notices arrive.",
  },
  {
    title: "Contractual Invoice Interest Combines With Principal to Cross the ₹1 Crore IBC Floor",
    parties: "Prashat Agarwal v. Vikash Parasrampuria & Anr.",
    citation: "Company Appeal (AT) (Ins) No. 690 of 2022 — NCLAT New Delhi",
    holding:
      "Where tax invoices and delivery terms explicitly stipulate commercial interest on delayed payments (e.g., 18% to 24% p.a.), the accrued interest forms part of the 'operational debt' under Section 5(21) IBC and can be aggregated with principal to satisfy the ₹1 Crore Section 4 threshold.",
    impact:
      "Enables ₹78L–₹90L aged RMC, steel, and elevator principal ledgers to trigger solo IBC Section 8 Form 3 notices.",
  },
  {
    title: "Signed Security Cheques Are Fully Prosecutable Under Section 138 NI Act Upon Default",
    parties: "Sripati Singh v. State of Jharkhand & Bir Singh v. Mukesh Kumar",
    citation: "(2021) SCC OnLine SC 1002 & (2019) 4 SCC 197 — Supreme Court of India",
    holding:
      "A cheque issued as security—or completed by the payee under Section 20 NI Act to reflect crystallized ledger dues—attracts full criminal liability under Section 138 once the underlying supply credit becomes due and payable, shifting the Section 139 presumption onto the drawer.",
    impact:
      "Empowers steel, chemical, and polymer traders to prosecute dealer PDCs and compel 20% interim compensation under s.143A.",
  },
  {
    title: "MSMED Act Section 16 Overrides Contractual 'No-Interest' & Extended Credit Clauses",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790 — Supreme Court of India (MSMED Act Sections 15–18 & 24)",
    holding:
      "Under Section 24 of the MSMED Act, 2006, statutory protections—including the 45-day maximum credit cap under Section 15 and 3x RBI bank-rate compound interest under Section 16—have an overriding effect over conflicting buyer PO clauses or unilateral 90–120 day payment terms.",
    impact:
      "Unlocks 3x RBI compound interest and Section 43B(h) tax disallowance pressure for Udyam-registered material manufacturers.",
  },
];

const FAQS = [
  {
    question:
      "How does an RMC supplier defeat a builder's '28-day cube test failure' excuse raised after pouring concrete?",
    answer:
      "Under IS 456:2000 and IS 516, concrete cube sampling, curing, and 28-day compression testing must be jointly witnessed; unilateral site tests conducted without the RMC plant's representative carry minimal evidentiary weight when the plant's own NABL-certified retention cubes meet the M30/M40 grade. Crucially, under Section 42 of the Sale of Goods Act, 1930, once the builder embeds the concrete into structural slabs, columns, or podiums and continues RERA construction without demolishing the pour, the buyer is deemed to have conclusively accepted the goods.",
  },
  {
    question:
      "Can a single building-material or steel supplier file IBC Section 8 against a builder without 100 claimants?",
    answer:
      "Yes. The statutory proviso under Section 7 of the Insolvency and Bankruptcy Code, 2016 requiring at least 100 allottees or 10% of total allottees applies exclusively to homebuyer Financial Creditors. An RMC plant, TMT steel distributor, elevator OEM, or MEP supplier is an Operational Creditor under Section 5(21) and Sections 8–9 IBC. Any single supplier owed ₹1 Crore or more (aggregating unpaid principal and contractual invoice interest) can independently serve a Form 3 / Form 4 Demand Notice, compelling the builder to cure or settle within 10 days to avoid CIRP.",
  },
  {
    question:
      "What documents turn a site delivery into an Order XXXVII CPC Summary Suit dossier for steel and cement traders?",
    answer:
      "To qualify for a fast-track Order XXXVII CPC Summary Suit (where the defendant cannot defend as a matter of right without obtaining leave to defend), you must prove an undisputed written contract and liquidated debt. In heavy material supply, this is established by bundling four records per dispatch: (1) the GST Tax Invoice with interest and jurisdiction terms, (2) GST E-Way Bill Part-A and Part-B (vehicle number), (3) certified Dharamkanta weighbridge gross/tare slip, and (4) the buyer's site gate-inward stamp or signed delivery challan alongside the Mill Test Certificate (MTC).",
  },
  {
    question:
      "How do chemical and solvent distributors overcome 'purity or moisture variance' claims raised weeks after tanker decanting?",
    answer:
      "Once 20 KL of solvent, acid, or resin is pumped from a road tanker into the buyer's commingled underground storage tank, batch identity is permanently lost. Under Sale of Goods Act Section 42, your delivery protocol and demand notice must establish that pre-decanting top and bottom retention samples were drawn and cleared against the Certificate of Analysis (COA) before breaking the tanker valve seal. Any quality claim raised 30 to 60 days later—after industrial consumption—is legally barred as an afterthought.",
  },
  {
    question:
      "What legal remedy does a petrochemical Del Credere Agent (DCA) have when RIL, IOCL, or GAIL encashes their BG for a buyer's default?",
    answer:
      "Under Sections 140 and 141 of the Indian Contract Act, 1872, a surety or Del Credere Agent (DCA) who discharges the principal debtor's liability to the petrochemical PSU is automatically subrogated to all rights and remedies of the principal creditor. By documenting the BG encashment or ledger debit alongside the polymer dispatch invoices, the DCA can serve a Subrogation Demand Notice and prosecute the defaulting plastic processor under Order XXXVII CPC and Section 138 NI Act for dishonoured PDCs.",
  },
  {
    question:
      "Should a Morbi tile, glass, or lift supplier accept an unsold 'barter flat' from a stressed builder instead of cash?",
    answer:
      "Never accept an allotment letter or barter flat without a comprehensive CERSAI charge search, RERA encumbrance check, and lender NOC. Cash-strapped builders routinely offer overvalued inventory that is already mortgaged to a construction-finance NBFC or bank, leaving the material supplier with an unenforceable unsecured paper claim. Serving a pre-IBC Section 8 warning or Order XXXVIII Rule 5 attachment notice protects your cash priority.",
  },
  {
    question:
      "Can an out-of-state supplier enforce Section 138 NI Act cheque bounce cases at their own home-bank court?",
    answer:
      "Yes. Under Section 142(2)(a) of the Negotiable Instruments Act, 1881, jurisdiction for prosecuting a dishonoured cheque lies squarely before the Magistrate Court having jurisdiction over the branch of the bank where the payee (supplier) maintains the account and presents the cheque for collection. A Raipur steel mill, Ankleshwar chemical plant, or Morbi tile factory does not need to travel to the builder's city to initiate Section 138 criminal prosecution and seek 20% interim compensation under Section 143A.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Sale of Goods Act, 1930 (Sections 37, 41, 42 & 59 Deemed Acceptance) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Insolvency and Bankruptcy Code, 2016 (Sections 4, 5(21), 8 & 9 Operational Creditors) — IBBI",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 20, 138, 139, 141, 142(2) & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 & 24) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 73, 126, 128, 140 & 141 DCA Subrogation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence for E-Way, SCADA & Weighbridge Logs) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "National Company Law Tribunal (NCLT) & Supreme Court Judgments Portal",
    url: "https://main.sci.gov.in/judgments",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-17T09:00:00+05:30",
  dateModified: "2026-11-17T15:30:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType:
    "B2B Commercial Debt Recovery for RMC Plants, Steel Traders, Chemical, Polymer & Building-Material Suppliers",
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
      "RMC Plant Directors, TMT Steel & Structural Traders, Chemical & Solvent Distributors, Polymer DCAs, Tiles/Sanitaryware/Electrical Brand CFOs",
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
  name: "IND-14 Chemicals, Steel, RMC & Building Materials Recovery Spokes, Guides & Templates",
  numberOfItems: IND_14_SPOKES.length,
  itemListElement: IND_14_SPOKES.map((spoke, index) => ({
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
      name: "Chemicals, Steel, RMC & Building Materials Recovery",
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

const SPOKE_GROUPS: {
  groupTitle: string;
  badgeClass: string;
  items: IndustrySpoke[];
}[] = [
  {
    groupTitle: "Track A: Ready-Mix Concrete (RMC), TMT Steel & Highway Aggregate Supply",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_14_SPOKES.filter((s) => s.track === "RMC, Steel & Road Supply"),
  },
  {
    groupTitle: "Track B: Industrial Chemicals, Polymer DCAs, Morbi Tiles & Finishing Brands",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_14_SPOKES.filter((s) => s.track === "Chemicals, Polymers & Finishing"),
  },
  {
    groupTitle: "Track C: Solo IBC Section 8 Builder Action & Hindi Vyapari Recovery",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_14_SPOKES.filter((s) => s.track === "IBC s.8 & Hindi Vyapari"),
  },
  {
    groupTitle: "Track D: Heavy-Supply Advocate Notice Workspace (MTC / Weighbridge / E-Way)",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    items: IND_14_SPOKES.filter((s) => s.track === "Notice Templates"),
  },
];

export default function ChemicalsSteelRmcBuildingMaterialsRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Chemicals, Steel, RMC & Building Materials", href: PAGE_URL },
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-14 Heavy-Supply &amp; Materials Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Sale of Goods Act s.42</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC &amp; IBC s.8/s.9</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Scope
              </span>
              Across India&apos;s real-estate and industrial corridors, builders and factory buyers stretch 60–150 day material credit and manufacture sham &ldquo;28-day cube strength&rdquo; or &ldquo;chemical purity&rdquo; excuses the week PDCs mature. LegalRecovery.in arms RMC plants, steel traders, chemical distributors, polymer DCAs, and building-material brands with Sale of Goods Act s.42 acceptance locks, Weighbridge/E-Way/MTC dossiers, Order XXXVII summary suits, NI Act s.138 prosecutions, and solo IBC Section 8 Form 3 demands.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                  Quality Bluff Bar
                </span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-slate-100 block">
                  s.42 Sale of Goods
                </span>
                <span className="text-[10px] text-slate-400">Consumption = Acceptance</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                  Solo Builder Leverage
                </span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-emerald-400 block">
                  10-Day IBC s.8
                </span>
                <span className="text-[10px] text-slate-400">No 100-Allottee Hurdle</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                  PDC / Cheque Teeth
                </span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-amber-400 block">
                  s.138 &amp; s.143A
                </span>
                <span className="text-[10px] text-slate-400">20% Interim Deposit</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                  MSME Statutory Yield
                </span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-red-400 block">
                  3x RBI Compound
                </span>
                <span className="text-[10px] text-slate-400">MSMED s.16 &amp; s.43B(h)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Table of Contents */}
            <ChemicalsRmcHubTableOfContents />

            {/* Main Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Heavy-Supply Credit Gap */}
              <section
                id="heading-heavy-supply-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Industry Recovery Gap &bull; IND-14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why RMC, Steel, Chemical &amp; Building-Material Credit Stalls
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Heavy industrial and construction-material suppliers operate as the physical working-capital engine of India&apos;s real-estate, infrastructure, and manufacturing economy. Unlike SaaS or consulting vendors, an RMC batching plant, a Mandi Gobindgarh or Raipur TMT rolling mill, an Ankleshwar solvent distributor, or a Morbi ceramic factory parts with irreversible physical commodities on razor-thin trading margins of 1.5% to 4% while extending 60 to 150 days of open credit.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  When a real-estate developer&apos;s construction finance tightens or a factory buyer faces liquidity stress, generic reminder emails fail completely. Defaulting buyers exploit four sector-specific bottlenecks designed to manufacture artificial disputes and exhaust the supplier&apos;s working capital:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      1. Sham &ldquo;28-Day Cube&rdquo; &amp; Purity Disputes
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Builders pour ₹40 Lakh to ₹1.5 Crore of M30/M40 Ready-Mix Concrete into tower slabs—and 60 days later, the week post-dated cheques mature, email a unilateral &ldquo;cube test failed&rdquo; report to fabricate a <em>Mobilox</em> pre-existing dispute, even while continuing RERA flat sales above that exact slab. Chemical buyers run the same playbook after decanting solvent tankers into commingled underground tanks.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      2. Thin-Margin Steel &amp; Polymer DCA Crunch
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A single 30-ton trailer of TMT bars or HR/CR coils carries ₹18–22 Lakh of principal on a 1.5% margin; one ₹65 Lakh default wipes out the net profit of 45 clean truckloads. Similarly, petrochemical Del Credere Agents (DCAs) selling PP/HDPE/PVC granules for RIL, IOCL, or GAIL suffer immediate Bank Guarantee encashments the moment a moulding unit stalls payment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      3. The Finishing-Stage &ldquo;Barter Flat&rdquo; Trap
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Morbi tile makers, toughened-glass processors, sanitaryware brands, plywood wholesalers, and elevator OEMs deliver at the finishing stage—just as the builder&apos;s project loan dries up. Cash-strapped developers pressure vendors to &ldquo;adjust ₹75 Lakh against an unsold flat&rdquo; that is already double-mortgaged to a bank or NBFC under CERSAI.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      4. Out-of-State Camp Demobilization
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Highway and EPC subcontractors purchase crores worth of VG30/VG40 bitumen, stone-crusher aggregates, and fly ash locally, then dismantle their hot-mix plant and demobilize overnight once the NHAI/PWD package concludes—leaving local quarry owners and emulsion suppliers chasing an empty site.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    The 4-Document BSA 2023 s.63 Evidentiary Dossier
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023), automated plant telemetry and logistics records are directly admissible as primary electronic evidence when paired with a statutory certificate. Before serving any demand, LegalRecovery.in structures your dispatch trail into an unassailable four-document dossier: (1) GST Tax Invoice carrying explicit 18%–24% delayed-interest and jurisdiction clauses; (2) GST Portal E-Way Bill Part-A and Part-B confirming vehicle registration and interstate/intrastate movement; (3) Certified Dharamkanta weighbridge gross/tare slips, automated RMC SCADA batching printouts, or State Mining e-Ravanna royalty passes; and (4) Mill Test Certificates (MTC), NABL retention-cube reports, or pre-decanting valve-seal Certificates of Analysis (COA) alongside the buyer&apos;s site gate-inward stamp.
                  </p>
                </div>

                <div className="bg-red-50/70 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <strong>The Sale of Goods Act s.42 Breakthrough:</strong> Under Section 42 of the Sale of Goods Act, 1930, a buyer is legally deemed to have accepted goods when they perform any act in relation to the goods inconsistent with the ownership of the seller—such as pouring concrete into a structural slab, fabricating TMT steel into columns, decanting solvent into a commingled tank, or installing tiles and lifts in a commercial project. Once consumed without a contemporaneous written rejection within the inspection window, belated quality excuses are legally barred.
                  </p>
                </div>
              </section>

              {/* Section 2: Multi-Track Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Multi-Track Forum Selection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Multi-Track Recovery Matrix by Supply Category &amp; Ticket
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Selecting the wrong recovery forum wastes 12–24 months. A ₹1.15 Crore unpaid steel or RMC ledger against a corporate real-estate builder belongs on a 10-day IBC Section 8 Form 3 track, whereas a ₹14 Lakh dealer default with a dishonoured security cheque belongs on a parallel NI Act Section 138 + Order XXXVII CPC rail:
                </p>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[640px]">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider">Supply Vertical</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Typical Ticket</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Core Proof Dossier</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Primary Statutory Rail</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Target Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Ready-Mix Concrete (RMC)
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;15L – &#8377;3 Cr</td>
                        <td className="py-3 px-3">SCADA Batch Printout, Pour Slip, Retention Cube NABL</td>
                        <td className="py-3 px-3">s.42 Sale of Goods &amp; IS 456 Joint-Test Lock</td>
                        <td className="py-3 px-3 font-medium text-[#DC2626]">Order 37 / IBC s.8 (&ge;&#8377;1 Cr)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          TMT, Structural &amp; Coil Steel
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;18L – &#8377;5 Cr</td>
                        <td className="py-3 px-3">E-Way Bill, Dharamkanta Slip, MTC &amp; Gate Pass</td>
                        <td className="py-3 px-3">Order 37 CPC, Order 38 R.5 &amp; NI s.138/143A</td>
                        <td className="py-3 px-3 font-medium text-emerald-700">Commercial Court / Home Magistrate</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Chemicals, Solvents &amp; Resins
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;8L – &#8377;2 Cr</td>
                        <td className="py-3 px-3">Pre-Decant Valve Sample, Batch COA, Tanker LR</td>
                        <td className="py-3 px-3">s.42 Acceptance &amp; MSMED s.15–18 (3x RBI)</td>
                        <td className="py-3 px-3 font-medium text-amber-800">MSEFC Samadhaan / Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Polymer Granules &amp; DCAs
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;10L – &#8377;4 Cr</td>
                        <td className="py-3 px-3">PSU BG Debit Note, DCA Ledger, PDCs</td>
                        <td className="py-3 px-3">Contract Act s.140–141 Subrogation &amp; s.138</td>
                        <td className="py-3 px-3 font-medium text-[#DC2626]">Commercial Court / s.138 Magistrate</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Morbi Tiles, Glass, Plywood &amp; Lifts
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;5L – &#8377;2.5 Cr</td>
                        <td className="py-3 px-3">Project PO, Site Handover Challan, CERSAI Audit</td>
                        <td className="py-3 px-3">MSMED s.16, s.43B(h) Tax Notice &amp; IBC s.8</td>
                        <td className="py-3 px-3 font-medium text-slate-900">MSEFC / NCLT (No Barter Trap)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Bitumen, Aggregates &amp; Fly Ash
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;12L – &#8377;1.8 Cr</td>
                        <td className="py-3 px-3">Mining e-Ravanna Pass, Weighment, NHAI Package ID</td>
                        <td className="py-3 px-3">CPC Order 38 Rule 5 Pre-Demobilization Stay</td>
                        <td className="py-3 px-3 font-medium text-red-700">District Commercial Court Garnishee</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Corporate Builder Defaults (&ge; &#8377;1 Cr)
                        </td>
                        <td className="py-3 px-3 font-mono">&ge; &#8377;1 Crore</td>
                        <td className="py-3 px-3">Principal + 18%/24% Invoice Interest Schedule</td>
                        <td className="py-3 px-3">IBC 2016 s.8 Form 3/4 &amp; Prashat Agarwal Rule</td>
                        <td className="py-3 px-3 font-medium text-emerald-700">NCLT (10-Day Cure Window)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Hand-Authored SVG Workflow */}
              <section
                id="heading-supply-chain-rail"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Operational Architecture
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4-Stage E-Way, Dharamkanta &amp; IBC Section 8 Escalation Rail
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To neutralize manufactured quality disputes before a debtor files a preemptive civil suit or blocks NCLT admission, every heavy-supply recovery follows a four-stage evidentiary and statutory pipeline:
                </p>

                {/* Desktop SVG Flow */}
                <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-x-auto">
                  <svg
                    viewBox="0 0 820 210"
                    width="820"
                    height="210"
                    className="w-full h-auto"
                    role="img"
                    aria-label="4-Stage Heavy-Supply Legal Recovery Pipeline from E-Way and Weighbridge Dossier to IBC Section 8 and Order 37"
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
                    <rect x="10" y="25" width="175" height="155" rx="14" fill="#0F172A" />
                    <text x="26" y="52" fill="#F87171" fontSize="11" fontWeight="700">
                      STAGE 01 &bull; DAY 1
                    </text>
                    <text x="26" y="76" fill="#FFFFFF" fontSize="14" fontWeight="800">
                      4-Doc Dispatch
                    </text>
                    <text x="26" y="95" fill="#FFFFFF" fontSize="14" fontWeight="800">
                      Dossier (BSA s.63)
                    </text>
                    <text x="26" y="122" fill="#CBD5E1" fontSize="11">
                      Tax Invoice + E-Way
                    </text>
                    <text x="26" y="139" fill="#CBD5E1" fontSize="11">
                      Dharamkanta / SCADA
                    </text>
                    <text x="26" y="156" fill="#CBD5E1" fontSize="11">
                      MTC / COA / Gate Stamp
                    </text>

                    <line
                      x1="188"
                      y1="102"
                      x2="215"
                      y2="102"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowRed)"
                    />

                    {/* Stage 2 */}
                    <rect x="220" y="25" width="175" height="155" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="236" y="52" fill="#DC2626" fontSize="11" fontWeight="700">
                      STAGE 02 &bull; DAY 2
                    </text>
                    <text x="236" y="76" fill="#0F172A" fontSize="14" fontWeight="800">
                      s.42 Acceptance
                    </text>
                    <text x="236" y="95" fill="#0F172A" fontSize="14" fontWeight="800">
                      &amp; Forum Audit
                    </text>
                    <text x="236" y="122" fill="#475569" fontSize="11">
                      Lock Slab/Tank Usage
                    </text>
                    <text x="236" y="139" fill="#475569" fontSize="11">
                      Check Udyam / 43B(h)
                    </text>
                    <text x="236" y="156" fill="#475569" fontSize="11">
                      Combine Interest &ge;1Cr
                    </text>

                    <line
                      x1="398"
                      y1="102"
                      x2="425"
                      y2="102"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowRed)"
                    />

                    {/* Stage 3 */}
                    <rect x="430" y="25" width="175" height="155" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="446" y="52" fill="#DC2626" fontSize="11" fontWeight="700">
                      STAGE 03 &bull; DAY 3–15
                    </text>
                    <text x="446" y="76" fill="#0F172A" fontSize="14" fontWeight="800">
                      Tri-Channel
                    </text>
                    <text x="446" y="95" fill="#0F172A" fontSize="14" fontWeight="800">
                      Advocate Notice
                    </text>
                    <text x="446" y="122" fill="#475569" fontSize="11">
                      Email + WhatsApp + RPAD
                    </text>
                    <text x="446" y="139" fill="#475569" fontSize="11">
                      PDC Deposit Intimation
                    </text>
                    <text x="446" y="156" fill="#475569" fontSize="11">
                      Pre-IBC Form 3 Warning
                    </text>

                    <line
                      x1="608"
                      y1="102"
                      x2="635"
                      y2="102"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowRed)"
                    />

                    {/* Stage 4 */}
                    <rect x="640" y="25" width="170" height="155" rx="14" fill="#DC2626" />
                    <text x="656" y="52" fill="#FEE2E2" fontSize="11" fontWeight="700">
                      STAGE 04 &bull; DAY 16+
                    </text>
                    <text x="656" y="76" fill="#FFFFFF" fontSize="14" fontWeight="800">
                      Multi-Forum
                    </text>
                    <text x="656" y="95" fill="#FFFFFF" fontSize="14" fontWeight="800">
                      Coercive Filing
                    </text>
                    <text x="656" y="122" fill="#FEF2F2" fontSize="11">
                      IBC s.8/s.9 NCLT (10d)
                    </text>
                    <text x="656" y="139" fill="#FEF2F2" fontSize="11">
                      Order 37 + O.38 Attach
                    </text>
                    <text x="656" y="156" fill="#FEF2F2" fontSize="11">
                      s.138 + 20% s.143A
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Stage 01 &bull; Day 1
                    </span>
                    <p className="text-sm font-bold">4-Doc Dispatch Dossier (BSA s.63)</p>
                    <p className="text-xs text-slate-300">
                      Tax Invoice + E-Way Bill + Dharamkanta/SCADA Printout + MTC/COA &amp; Site Gate Stamp.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Stage 02 &bull; Day 2
                    </span>
                    <p className="text-sm font-bold text-slate-900">s.42 Acceptance &amp; Forum Audit</p>
                    <p className="text-xs text-slate-600">
                      Lock structural/tank consumption, verify Udyam s.43B(h), and aggregate interest for &ge; ₹1 Cr IBC.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Stage 03 &bull; Day 3–15
                    </span>
                    <p className="text-sm font-bold text-slate-900">Tri-Channel Advocate Notice</p>
                    <p className="text-xs text-slate-600">
                      Serve tracked Email + WhatsApp + Speed Post RPAD with PDC presentation &amp; Pre-IBC warnings.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#DC2626] text-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-100">
                      Stage 04 &bull; Day 16+
                    </span>
                    <p className="text-sm font-bold">Multi-Forum Coercive Filing</p>
                    <p className="text-xs text-red-50">
                      IBC s.8/s.9 NCLT (10-day cure), Order 37 Summary Suit + O.38 attachment, and s.138 + 20% s.143A.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Interactive Sector Playbooks
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Sector Playbooks: RMC, Steel, Chemicals &amp; Tiles
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your supply vertical below to inspect the exact commercial failure mode, statutory defense-buster, and three-step execution rail used by LegalRecovery.in advocates:
                </p>

                <ChemicalsRmcHubScenarioTabs />
              </section>

              {/* Section 5: Dual-Track B2B Conversion Desk */}
              <section
                id="heading-dual-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Dual-Track Onboarding &bull; Single Test or Bulk CSV
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Test 1 Overdue Ledger or Onboard Multi-Plant Defaulters
                  </h2>
                </div>

                <ChemicalsRmcHubCTA />
              </section>

              {/* Section 6: Verified Statutory Precedents */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Supreme Court &amp; NCLAT Doctrine
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Precedents Locking Acceptance &amp; Defeating Sham Disputes
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {APEX_PRECEDENTS.map((item) => (
                    <div
                      key={item.title}
                      className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 space-y-2.5 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-[#DC2626]">
                        {item.parties} &bull;{" "}
                        <span className="text-slate-500 font-semibold">{item.citation}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.holding}
                      </p>
                      <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5">
                        Creditor Impact: {item.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Financial & Interest Calculation */}
              <section
                id="heading-worked-math"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Commercial &amp; IBC Threshold Illustration
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Ledger Math: &#8377;1.18 Cr RMC &amp; TMT Steel Recovery
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Many RMC plants and steel distributors hesitate to serve an IBC Section 8 Form 3 notice because their unpaid invoice principal sits at &#8377;88 Lakh—just under the &#8377;1 Crore threshold. Under the <em>Prashat Agarwal</em> NCLAT rule, contractual invoice interest bridges that gap cleanly:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                      Illustrative Builder Default Ledger (180 Days Overdue)
                    </span>
                    <div className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">Unpaid RMC / TMT Principal (14 Challans)</span>
                        <span className="font-mono font-bold">&#8377;88,50,000</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">Contractual Invoice Interest (24% p.a. &times; 180d)</span>
                        <span className="font-mono font-bold text-amber-400">+ &#8377;10,47,452</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">OR MSMED s.16 Interest (3x RBI ~19.5% Compound)</span>
                        <span className="font-mono font-bold text-emerald-400">+ &#8377;8,88,200</span>
                      </div>
                      <div className="flex justify-between pt-1 text-sm sm:text-base">
                        <span className="font-bold text-white">Crystallized Operational Debt (IBC s.8)</span>
                        <span className="font-mono font-black text-emerald-400">&#8377;98.97L – &#8377;1.02Cr+</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                        Strategic Threshold &amp; Leverage Outcome
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        Once overdue aging crosses 190–210 days on &#8377;88.50 Lakh principal at a 24% contractual invoice rate (or &#8377;90L+ principal at 18%), total operational debt crosses <strong>&#8377;1,00,00,000</strong>—unlocking a solo <strong>IBC Section 8 Form 3 Notice</strong> with a 10-day cure window, alongside <strong>20% interim compensation (&#8377;17.70 Lakh)</strong> under NI Act s.143A on dishonoured PDCs.
                      </p>
                    </div>
                    <div className="pt-2 flex flex-wrap gap-2">
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="inline-flex items-center px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
                      >
                        Calculate MSMED 3x RBI Interest &rarr;
                      </Link>
                      <Link
                        href="/ibc-section-8-by-building-material-suppliers-against-real-estate-builder"
                        className="inline-flex items-center px-3.5 py-2 rounded-lg bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-bold transition-colors"
                      >
                        IBC s.8 Threshold Rules &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Complete 10-Spoke IND-14 Directory */}
              <section
                id="heading-ind14-directory"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Hub-and-Spoke Architecture &bull; IND-14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Complete IND-14 Heavy-Supply &amp; Building-Material Directory
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Explore all 10 specialized playbooks, statutory deep-dives, Hindi Vyapari guides, and ready-to-use notice workspaces in the IND-14 Chemicals, Steel, RMC &amp; Building Materials cluster:
                </p>

                <div className="space-y-8">
                  {SPOKE_GROUPS.map((group) => (
                    <div key={group.groupTitle} className="space-y-3.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {group.groupTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 hover:bg-white transition-all shadow-xs flex flex-col justify-between space-y-3"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${group.badgeClass}`}
                                >
                                  {spoke.archetypeLabel}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  {spoke.id}
                                </span>
                              </div>
                              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                {spoke.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {spoke.summary}
                              </p>
                              <p className="text-[11px] font-semibold text-slate-500">
                                Hook: {spoke.statute}
                              </p>
                            </div>
                            <span className="text-xs font-bold text-[#DC2626] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 self-start">
                              Open Guide &rarr;
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Core B2B Cross-Links */}
              <section
                id="heading-live-seed-guides"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Codebase Integration &bull; Core B2B Rails
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Core B2B Order 37, Cheque Bounce &amp; Vendor Recovery Guides
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all shadow-xs space-y-2 block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                      Civil Summary Action
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      Order XXXVII CPC Summary Suit Money Recovery
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Convert signed invoices, E-Way Bills, and weighbridge slips into fast-track summary decrees without full civil trials.
                    </p>
                  </Link>

                  <Link
                    href="/cheque-bounce-and-civil-suit-together"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all shadow-xs space-y-2 block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                      Parallel Prosecution
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      Cheque Bounce (s.138) &amp; Civil Suit Together
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Combine criminal NI Act s.138/143A leverage against directors with simultaneous civil recovery for the full balance.
                    </p>
                  </Link>

                  <Link
                    href="/recovery/vendor-payments"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all shadow-xs space-y-2 block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                      B2B Vendor Desk
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      B2B Vendor &amp; Supplier Payment Recovery
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Institutional demand workflows, MSME Samadhaan triggers, and Section 43B(h) buyer tax-disallowance notices.
                    </p>
                  </Link>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FAQs: RMC, Steel, Chemical &amp; Building-Material Debt Recovery
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={faq.question}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-white open:bg-slate-50/50 transition-colors"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-3 text-slate-900 font-bold text-sm sm:text-base select-none">
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#DC2626]">
                            Q{idx + 1}.
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3.5 pt-3.5 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Official Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Statutory Foundations &bull; Primary Sources
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities, Acts &amp; Official Recovery Portals
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All legal notices, Order XXXVII pleadings, and IBC Section 8 Form 3/4 demands structured by LegalRecovery.in comply strictly with primary legislation published on India Code, IBBI, and Supreme Court / NCLAT precedents:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((src) => (
                    <li key={src.title} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#DC2626] hover:underline font-medium"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                  <p>
                    <strong>Editorial &amp; Review Attribution:</strong> Prepared on verified facts Anuj Anand Malik, Founder &amp; Managing Partner, AMA Legal Solutions. Formulated strictly from institutional creditor perspectives for RMC plants, steel distributors, chemical traders, polymer DCAs, and building-material manufacturers across India.
                  </p>
                </div>
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
