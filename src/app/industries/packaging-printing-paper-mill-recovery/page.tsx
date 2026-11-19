import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PackagingPrintingHubTableOfContents from "./PackagingPrintingHubTableOfContents";
import PackagingPrintingHubScenarioTabs from "./PackagingPrintingHubScenarioTabs";
import PackagingPrintingHubCTA from "./PackagingPrintingHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/packaging-printing-paper-mill-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Packaging, Corrugated Box, Printing & Paper Mill Recovery"; // 57 chars
const PAGE_DESCRIPTION =
  "92%+ Indian packaging units are Micro/Small Udyam MSMEs. Recover overdue FMCG/pharma carton bills, cylinder costs & unlifted pouches via s.43B(h) & s.55."; // 153 chars
const H1_TEXT =
  "Invoice, Cylinder & Custom-Printed Inventory Recovery for Corrugated Box Makers, Flexible Converters, Printers & Paper Mills"; // 124 chars

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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

interface PackagingSpoke {
  id: string;
  archetype: "G1" | "L1" | "P1";
  archetypeLabel: string;
  track: "corrugated-flexible-mills" | "rigid-sacks-printing" | "lien-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_22_SPOKES: PackagingSpoke[] = [
  {
    id: "B2B-252",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "corrugated-flexible-mills",
    title: "Buyer Not Lifting Custom-Printed Pouches & Mono-Cartons: Full Price + Cylinder Recovery",
    url: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
    statute: "Sale of Goods Act s.55/56 + Contract Act s.73 (Zero-Salvage Damages) & Cylinder Lien",
    summary:
      "Recover 100% contract price, monthly s.44 godown holding charges, and gravure cylinder engraving costs when an FMCG, spice, or pharma brand alters FSSAI artwork or abandons MOQ laminate stock.",
  },
  {
    id: "B2B-253",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "corrugated-flexible-mills",
    title: "Corrugated Box Manufacturer Recovery: Defeating Post-Use BF, GSM & Monsoon Moisture Deductions",
    url: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
    statute: "Sale of Goods Act s.42 (Consumption = Acceptance) + MSMED s.15–18 & s.43B(h)",
    summary:
      "Built for FCBM automatic and semi-automatic box plants facing 10–15% unilateral QC deductions months after buyers packed and shipped outward goods inside those cartons.",
  },
  {
    id: "B2B-254",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "corrugated-flexible-mills",
    title: "Kraft Paper, Duplex Board & Writing-Paper Mill Recovery: Defeating Post-Slitting Reel Claims",
    url: "/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery",
    statute: "Paper Trade Custom (No Claim Post-Slitting/Printing) + NI Act s.138 & IBC s.8",
    summary:
      "Enforce jumbo-reel receivables across Morbi, Vapi, Muzaffarnagar, Kashipur, Erode, and Chawri Bazar against corrugators and paper merchants inventing post-conversion GSM/Cobb disputes.",
  },
  {
    id: "B2B-255",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "rigid-sacks-printing",
    title: "Rigid Plastic (PET Preform, HDPE Drum) & Glass Bottle Makers: Custom Blow-Mould Lien Recovery",
    url: "/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery",
    statute: "Contract Act s.170 / Contractual General Lien over Buyer Moulds + MSMED s.15–18",
    summary:
      "Stop beverage, edible-oil, and agrochemical brands from dispatching trucks to shift their embossed blow-moulds or injection dies to a cheaper moulder before clearing overdue bottle ledgers.",
  },
  {
    id: "B2B-256",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "rigid-sacks-printing",
    title: "Commercial Offset Printers, Retail POSM Signage & Diwali Corporate Gifting Payment Recovery",
    url: "/commercial-offset-printer-posm-retail-branding-corporate-gifting-recovery",
    statute: "Approved Pantone/Artwork Proof + Geo-Tagged Store Photos (BSA s.63) + s.43B(h)",
    summary:
      "Unfreeze final invoices held up by procurement over three damaged festive hampers or minor retail glow-sign punch points after pan-India multi-pincode execution.",
  },
  {
    id: "B2B-257",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "rigid-sacks-printing",
    title: "ISPM-15 Wooden Pallet, Heavy Seaworthy Export Crating & Container Lashing Vendor Recovery",
    url: "/wooden-pallet-industrial-crating-export-lashing-vendor-recovery",
    statute: "ISPM-15 Heat-Treatment Certificate + Export Shipping Reference + MSMED s.15–18",
    summary:
      "Recover 120-day overdue heavy-engineering exporter ledgers across Chakan, Peenya, Ambattur, Vadodara, and Nhava Sheva where pinewood MSMEs buy imported timber on cash terms.",
  },
  {
    id: "B2B-258",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "rigid-sacks-printing",
    title: "PP Woven Sack, BOPP Laminated Rice/Fertilizer Bag & FIBC Jumbo-Bag Manufacturer Recovery",
    url: "/woven-sacks-pp-raffia-fibc-jumbo-bag-manufacturer-payment-recovery",
    statute: "BIS Weight/Denier Tolerance + Sale of Goods s.55 (Branded BOPP Bags) + NI s.138",
    summary:
      "Bridge the cash-polymer squeeze for raffia and FIBC clusters in Ahmedabad, Silvassa, Daman, Kanpur, Indore, and Coimbatore when cement, rice, sugar, or mineral buyers stretch bag bills.",
  },
  {
    id: "B2B-259",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "lien-templates",
    title: "Rotogravure Cylinders, Flexo Plates & Cutting Dies: Ownership vs General-Lien Law",
    url: "/printing-cylinders-dies-plates-ownership-and-lien-law-packaging",
    statute: "Development Contribution vs Title Transfer + Contract Act s.171 General Lien & De-Chroming Notice",
    summary:
      "Practitioner legal deep-dive settling when a converter can lawfully retain 8-colour copper cylinders, separate artwork copyright from physical steel/copper ownership, and scrap idle cylinders after notice.",
  },
  {
    id: "B2B-260",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "lien-templates",
    title: "Packaging & Printing Legal Notice Template: Overdue Invoice + 15-Day Lift-Stock & Godown Rent",
    url: "/templates/packaging-unlifted-custom-stock-and-invoice-legal-notice",
    statute: "Sale of Goods Act s.44 (Storage/Care Charges) + s.55 + MSMED s.16 & s.43B(h)",
    summary:
      "Interactive advocate-vetted notice pack bundling Invoice & e-Way schedules, Custom-Printed WIP/FG tables, Section 44 monthly godown rent, Cylinder Lien intimation, and Section 43B(h) tax warning.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "corrugated-flexible-mills" as const,
    heading: "Track A: Custom-Printed Flexible Laminates, Corrugated Box Plants & Paper Mills",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "rigid-sacks-printing" as const,
    heading: "Track B: Rigid Plastic (PET/HDPE), PP Woven Sacks, Wooden Pallets & Commercial Printing",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "lien-templates" as const,
    heading: "Track C: Gravure Cylinder & Die Lien Law + Unlifted Stock Notice Workspace",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const STATUTORY_MANDATES = [
  {
    citation: "Sale of Goods Act, 1930 — Sections 55, 56 & 44 + Indian Contract Act, 1872 — Section 73",
    title: "100% Contract Price + Godown Holding Rent for Zero-Salvage Brand-Printed Packaging",
    parties: "Flexible Laminate Converters, Mono-Carton Printers, BOPP Bag Makers vs Defaulting FMCG / D2C / Pharma Buyers",
    holding:
      "In ordinary commodity trade, a seller whose buyer refuses delivery must mitigate loss by reselling in the open market and claiming only the price difference. Custom-printed packaging bearing a buyer's registered trademark, barcode, and FSSAI/drug licence number is legally non-resaleable: reselling branded pouches or cartons to third parties violates trademark and food-safety statutes, leaving only ₹6–₹10/kg scrap value. Under Sale of Goods Act s.55 (suit for price where property passed or goods are appropriated to the contract) and s.56 read with Contract Act s.73, the converter is entitled to recover the full contract invoice value minus verified scrap realization, plus monthly godown storage, insurance, and care charges under Section 44 from the date of Ready-for-Dispatch intimation.",
    impact:
      "Neutralizes the buyer's primary hostage-taking tactic—forcing 15–30% distress haircuts on printed rolls and mono-cartons rotting in your factory godown.",
  },
  {
    citation: "Sale of Goods Act, 1930 — Section 42 & Indian Paper/Corrugation Trade Usage",
    title: "Consumption of Cartons or Slitting of Paper Reels Extinguishes Belated QC Deductions",
    parties: "Corrugated Box Manufacturers & Kraft/Duplex Paper Mills vs E-Commerce, Garment, Pharma & Converter Buyers",
    holding:
      "Section 42 of the Sale of Goods Act stipulates that a buyer is deemed to have accepted goods when it does any act in relation to them inconsistent with the ownership of the seller, or retains them beyond a reasonable inspection window without intimating rejection. Packing finished consumer products into 5-ply corrugated shippers and dispatching them across India—or slitting, sheeting, and feeding kraft/duplex paper reels into a corrugation or offset machine—constitutes irrevocable statutory acceptance. Belated unilateral debit notes alleging low Bursting Factor (BF), Edge Crush Test (ECT) variance, monsoon moisture absorption, or Cobb/shade issues raised 60 days later without a contemporaneous pre-use joint lab report have zero legal standing.",
    impact:
      "Defeats arbitrary 10–15% post-dispatch debit notes so box plants and paper mills can enforce 100% of GST-invoiced principal in MSEFC or Order XXXVII CPC.",
  },
  {
    citation: "MSMED Act, 2006 — Sections 15–18 & Income Tax Act, 1961 — Section 43B(h)",
    title: "45-Day Statutory Payment Ceiling, 3x RBI Compound Interest & Corporate Tax Disallowance",
    parties: "Micro & Small Udyam Packaging Converters (92%+ of Sector) vs Corporate, FMCG, Pharma & Export Buyers",
    holding:
      "Because over 92% of India's 18,000+ corrugated plants, 3,000+ flexible converters, label printers, rigid-plastic moulders, and wooden-pallet makers qualify as Micro or Small manufacturing enterprises under Udyam, Section 15 of the MSMED Act caps credit at 45 days even if a corporate vendor portal dictates 90–120 days. Every day past the statutory due date attracts monthly compounded interest at 3 times the RBI Bank Rate under Section 16—non-deductible as a business expense by the buyer under Section 23. Simultaneously, Income Tax Act Section 43B(h) disallows the buyer's entire purchase deduction in the financial year if an Udyam Micro/Small supplier's invoice remains unpaid past the s.15 window across March 31, adding an immediate 25–30% corporate tax cash hit.",
    impact:
      "Moves your overdue packaging ledger from the buyer's junior purchase desk straight onto the CFO and Statutory Auditor's March 31 compliance escalation list.",
  },
  {
    citation: "Indian Contract Act, 1872 — Sections 170 & 171 + NI Act s.138 & Order XXXVII CPC",
    title: "Contractual General Lien on Gravure Cylinders & Blow-Moulds + Summary Monetary Recovery",
    parties: "Flexible Converters, Rigid Bottle Moulders & Paper Mills vs Switching Brands & Bounced-Cheque Dealers",
    holding:
      "When a defaulting brand demands immediate handover of its 8-colour copper rotogravure cylinders, flexo plates, cutting dies, or custom PET/HDPE blow-moulds to onboard a rival converter, ownership depends on whether prior invoices charged a partial 'cylinder/mould development contribution' versus full capital transfer—and whether quotations/PO terms establish an express Contractual General Lien covering all running pouch/bottle invoices. Issuing a formal written Lien Intimation Notice preserves custody without risking baseless criminal breach-of-trust complaints, while running parallel NI Act s.138 prosecution on dishonoured cheques (strict 30-day notice window) and Order XXXVII CPC summary suits (or IBC Section 8 for ≥ ₹1 Crore corporate paper-mill defaults).",
    impact:
      "Stops defaulting brands from walking away with critical production tooling until every rupee of unpaid packaging bills and unlifted stock is cleared.",
  },
];

const FAQS = [
  {
    question: "Can a flexible packaging converter recover 100% of invoice value when a buyer abandons custom-printed pouches after changing FSSAI artwork?",
    answer:
      "Yes. Because pouches, laminate rolls, and mono-cartons printed with a buyer's trademark, brand logo, and FSSAI or drug licence number cannot legally be sold to any other party in the open market (yielding only nominal scrap value of ~₹8/kg), courts apply Sale of Goods Act Sections 55–56 and Contract Act Section 73 to award the full contract price minus scrap realization, plus monthly godown storage and care charges under Section 44 from the Ready-for-Dispatch date.",
  },
  {
    question: "How do corrugated box manufacturers defeat 10–15% unilateral deductions for 'low Bursting Factor (BF), GSM, or monsoon moisture'?",
    answer:
      "Invoke Section 42 of the Sale of Goods Act. Once an FMCG, garment, pharma, or e-commerce buyer consumes your corrugated cartons to pack and ship outward goods without raising a written pre-use rejection supported by a joint laboratory test within 48–72 hours of delivery, statutory acceptance is complete. Serve an advocate-drafted notice enclosing your dispatch QC slip, e-Way Bill, and Udyam certificate citing MSMED s.15–18 and Income Tax s.43B(h).",
  },
  {
    question: "Can a packaging converter or PET/HDPE bottle maker legally hold rotogravure cylinders or blow-moulds until overdue bills are paid?",
    answer:
      "Yes, provided your documentation is handled lawfully. First verify whether the buyer only paid a subsidized 'development/engraving contribution' (retaining base copper/steel ownership with you) or whether your quotations and invoices include an express Contractual General Lien clause over buyer-funded cylinders, dies, or moulds. Always issue a formal written advocate Lien Intimation Notice before withholding gate release—this demonstrates lawful commercial retention and neutralizes false police complaints.",
  },
  {
    question: "Does Income Tax Section 43B(h) apply to corrugated box plants, flexible converters, printers, and pallet makers?",
    answer:
      "Yes. Over 92% of Indian corrugated box units, flexible packaging converters, offset/label printers, rigid plastic bottle makers, and ISPM-15 wooden pallet manufacturers are registered as Micro or Small manufacturing enterprises on Udyam. Under Section 43B(h) of the Income Tax Act, corporate buyers cannot claim tax deduction for overdue purchases from Micro/Small enterprises remaining unpaid beyond the MSMED Act s.15 ceiling (maximum 45 days with written agreement, or 15 days without one) at financial year-end.",
  },
  {
    question: "How can kraft paper and duplex board mills defeat post-slitting or post-printing quality complaints from corrugators and merchants?",
    answer:
      "Under established Indian paper-trade custom and standard mill invoice covenants, no complaint regarding GSM, Bursting Factor, Cobb sizing, or shade is maintainable once a jumbo reel is slit, sheeted, or mounted on a corrugation or printing machine without prior mill inspection. Combine mill lab slips, weighbridge records, and signed e-Way Bills with NI Act s.138 cheque-bounce prosecution, Order XXXVII CPC summary suits, or IBC Section 8 Form 3 demand notices where corporate arrears equal or exceed ₹1 Crore.",
  },
  {
    question: "Can we charge monthly godown rent and eventually scrap unlifted custom-printed rolls or cartons occupying factory space?",
    answer:
      "Yes, by following a strict written statutory sequence. Under Section 44 of the Sale of Goods Act, when a buyer neglects or refuses to lift ready goods after reasonable intimation, the buyer is liable for your reasonable storage, insurance, and care charges. Serve a formal 15-day Notice to Lift Custom-Printed Inventory specifying exact tonnage/carton count, daily or monthly godown rent, and a clear final warning that unlifted stock will be shredded/scrapped at the buyer's risk and cost with full price recovery minus scrap credit.",
  },
  {
    question: "What legal proof do commercial offset printers and Diwali corporate-gifting vendors need when procurement freezes final payment?",
    answer:
      "Preserve the signed PO, the buyer's email or WhatsApp approval of final PDF artwork and Pantone/digital proof, courier/POD delivery logs across all pin codes, and geo-tagged store installation photos for retail POSM signage—backed by a Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63 certificate for electronic records. Procurement cannot legally freeze a ₹30 Lakh festive invoice over 3 transit-damaged hampers when 99.9% delivery is proved.",
  },
  {
    question: "Can packaging trade associations (like FCBM chapters) or paper mills run bulk March 31 Section 43B(h) recovery drives?",
    answer:
      "Yes. Individual plants can test a single overdue FMCG, pharma, or dealer account for ₹999 (Advocate Drafted + Email, WhatsApp & Speed Post RPAD), while paper mills, multi-plant converters, and regional packaging associations can upload 10 to 10,000+ overdue ledgers via CSV in our Bulk Institutional Desk for coordinated CFO and Statutory Auditor Section 43B(h) intimation waves.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Sale of Goods Act, 1930 (Sections 42, 44, 55 & 56) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "MSME Samadhaan Delayed Payment Portal (MSMED Act s.15–18)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) MSME Payment Rule) — Income Tax India",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 73, 170 & 171 Lien) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 141) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Insolvency and Bankruptcy Board of India (IBBI — Section 8/9 IBC)",
    url: "https://ibbi.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType:
    "B2B Packaging, Corrugated Box, Flexible Laminate Converter, Commercial Printing & Paper Mill Payment, Cylinder & Unlifted Custom-Inventory Recovery",
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  provider: {
    "@type": "LegalService",
    name: "LegalRecovery.in (AMA Legal Solutions)",
    url: SITE_URL,
  },
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-22 Packaging, Corrugated Boxes, Flexible Laminates, Commercial Printing & Paper Mill Recovery Playbooks",
  numberOfItems: IND_22_SPOKES.length,
  itemListElement: IND_22_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Packaging, Printing & Paper Mill Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function PackagingPrintingPaperMillHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([SERVICE_SCHEMA, ITEM_LIST_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Corrugated, Flexible Laminates, Rigid Plastic, Printing &amp; Paper Mills</span>
            <span className="text-slate-500">&bull;</span>
            <span>Creditor-Side Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (MSMED s.15–18, s.43B(h) &amp; Sale of Goods Act s.55/44)
            </span>
            Built exclusively for India&rsquo;s 18,000+ corrugated box plants, 3,000+ flexible packaging &amp; label converters, rigid bottle moulders, commercial printers, and 850+ paper mills—not defaulting buyers. Enforce <strong>45-day Udyam MSME payment limits &amp; Income Tax s.43B(h)</strong>, recover <strong>100% contract price + s.44 godown rent</strong> on zero-salvage custom-printed stock, and assert lawful <strong>gravure cylinder &amp; blow-mould liens</strong>.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">92%+ Udyam</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Micro/Small Indian packaging converters protected by 45-day s.43B(h) &amp; 3x RBI interest
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.55 + s.44</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                100% full-price recovery + monthly godown holding rent on zero-salvage branded stock
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">s.170 / s.171</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Contractual General Lien over copper gravure cylinders, cutting dies &amp; blow-moulds
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Single &#8377;999 live test or CSV bulk March 31 s.43B(h) CFO &amp; dealer drives
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Target Creditors:{" "}
              <strong className="text-slate-200">
                Corrugated Box Plant Owners, Flexible Converters, Kraft/Duplex Paper Mill CFOs, Rigid Bottle Makers &amp; Printers
              </strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: "Packaging, Printing & Paper Mill Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <PackagingPrintingHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Industry Gap */}
            <section
              id="heading-zero-salvage-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Zero-Salvage Custom-Printed Stock Trap in Indian Packaging
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  India&rsquo;s packaging, printing, and paper ecosystem—spanning <strong>18,000+ corrugated box plants</strong>, <strong>3,000+ flexible laminate and label converters</strong>, rigid PET/HDPE bottle moulders, PP woven-sack units, ISPM-15 pallet makers, and <strong>850+ kraft and duplex paper mills</strong>—operates inside one of the sharpest working-capital traps in Indian manufacturing. Converters buy kraft reels, BOPP/PET films, polymer granules (RIL/IOCL), inks, and adhesives on cash, LC, or strict 15-day mill terms, while supplying FMCG, D2C food, pharmaceutical, garment, and e-commerce buyers on 60-to-120-day open credit.
                </p>
                <p>
                  Worse still, packaging converters face an asymmetric hostage problem that ordinary commodity suppliers never encounter. The moment 5 tons of multilayer laminate rolls, mono-cartons, BOPP rice bags, or embossed HDPE containers are printed with a buyer&rsquo;s brand logo, barcode, and FSSAI or drug licence number, <strong>trademark and regulatory law bar the converter from selling that stock to anyone else</strong>. Its open-market resale value plunges instantly to ₹6–₹10/kg shredded scrap. Defaulting buyers exploit this asymmetry aggressively—leaving 60% of an MOQ sitting in your godown after tweaking artwork, demanding 15% retroactive haircuts citing bogus Bursting Factor (BF) or monsoon moisture excuses long after packing and shipping goods in your cartons, or sending a truck to snatch back custom rotogravure cylinders and blow-moulds while owing ₹20–₹50 Lakh in unpaid bills.
                </p>
                <p>
                  Yet over <strong>92% of Indian packaging converters are Micro or Small Udyam enterprises</strong>. That gives plant owners, converter directors, and paper-mill CFOs an extraordinary statutory arsenal—combining <strong>MSMED Act Sections 15–18</strong> (mandatory 45-day ceiling and 3x RBI Bank Rate compound interest),{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Income Tax Act Section 43B(h)
                  </Link>{" "}
                  corporate tax disallowance, <strong>Sale of Goods Act Sections 42, 44 &amp; 55</strong>, and <strong>Contract Act Sections 73 &amp; 170/171</strong> tooling liens. LegalRecovery.in operationalizes every single one of these statutory hooks from a single ₹999 test case up to 10,000-account association and paper-mill CSV recovery waves.
                </p>
              </div>
            </section>

            {/* Section 2: Multi-Track Escalation Matrix */}
            <section
              id="heading-multi-track-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Multi-Track Recovery Matrix: Cartons, Laminates, Moulds &amp; Mills
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match your exact packaging vertical, overdue DPD aging bucket, and tooling/inventory leverage to the fastest statutory recovery forum in India:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Packaging Vertical &amp; Dispute Type</th>
                      <th className="p-3 sm:p-4 font-bold">Ticket &amp; Aging</th>
                      <th className="p-3 sm:p-4 font-bold">Primary Statutory Trigger</th>
                      <th className="p-3 sm:p-4 font-bold">Target Forum &amp; Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Unlifted Custom-Printed Pouches &amp; Mono-Cartons
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;4L–&#8377;85L &bull; 30–120 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Sale of Goods s.55/56 + s.44 Storage Rent + Contract Act s.73
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        15-Day Lift-Stock Notice &rarr; MSEFC / Commercial Court 100% Price
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Corrugated Box BF / GSM / Moisture Debit Notes
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;2L–&#8377;60L &bull; 45–120 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Sale of Goods s.42 (Consumption) + MSMED s.15–18 &amp; s.43B(h)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        CFO 43B(h) Demand &rarr; MSEFC 3x RBI Award / Order XXXVII
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Kraft Paper &amp; Duplex Board Mill Reel Defaults
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;10L–&#8377;2.5 Cr+ &bull; 45–90 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Post-Slitting Custom Bar + NI Act s.138 + IBC s.8 (&ge; &#8377;1 Cr)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        JMFC s.138 Prosecution + Order 37 / NCLT Form 3 Demand
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Gravure Cylinders, Flexo Plates &amp; Cutting Dies
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;3L–&#8377;75L &bull; Handover Dispute</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Development-Fee Title + Contractual General Lien (s.171)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-amber-800">
                        Formal Lien Intimation Notice &rarr; Conditional RTGS Release
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Rigid PET Preforms, HDPE Drums &amp; Glass Moulds
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;5L–&#8377;1.2 Cr &bull; 60–150 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Contract Act s.170/171 Blow-Mould Lien + MSMED s.15–18
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        Mould Custody Notice + MSEFC / Order XXXVII Summary Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        PP Woven Sacks, BOPP Rice Bags &amp; FIBC Jumbo Bags
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;6L–&#8377;1.8 Cr &bull; 60–120 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        BIS Weight Tolerance + s.55 Branded Bags + NI s.138 &amp; 43B(h)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        Advocate Demand + NI s.138 + MSEFC Compound Interest
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Commercial Offset, Retail POSM &amp; Diwali Gifting
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;1.5L–&#8377;45L &bull; 45–90 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Approved Pantone Proof + Geo-Tagged POD (BSA s.63) + 43B(h)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Procurement &amp; CFO Notice &rarr; Pre-Audit Settlement
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        ISPM-15 Wooden Pallets &amp; Export Crating Vendors
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;2L–&#8377;50L &bull; 60–120 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        ISPM-15 Certificate + Export Shipping Ref + MSMED s.15–18
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        45-Day Udyam Demand &rarr; MSEFC Samadhaan / Order 37
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Visual Workflow Architecture */}
            <section
              id="heading-recovery-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4-Stage Packaging, Cylinder &amp; Unlifted-Inventory Recovery Flow
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                From locking artwork sign-offs and BF/GSM dispatch QC slips to serving Section 43B(h) CFO notices and enforcing MSEFC or Order XXXVII decrees, every stage is engineered for BSA 2023 s.63 evidentiary admissibility:
              </p>

              {/* Desktop SVG Pipeline */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  viewBox="0 0 820 200"
                  width="820"
                  height="200"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Four-stage packaging, corrugated box, printing cylinder and paper mill recovery pipeline"
                >
                  <rect x="10" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="100" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 &bull; DAY 1</text>
                  <text x="100" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">QC &amp; Artwork Lock</text>
                  <text x="100" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">PO, Artwork/Pantone</text>
                  <text x="100" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Approval, BF/GSM Lab</text>
                  <text x="100" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Slip &amp; GST e-Way Bill</text>

                  <path d="M 192 100 L 214 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowPack)" />

                  <rect x="216" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="306" y="60" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 &bull; DAY 2–3</text>
                  <text x="306" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Multi-Hook Notice</text>
                  <text x="306" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">s.55/44 Lift-Stock +</text>
                  <text x="306" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">s.43B(h) CFO Alert +</text>
                  <text x="306" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Cylinder/Mould Lien</text>

                  <path d="M 398 100 L 420 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowPack)" />

                  <rect x="422" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="512" y="60" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3 &bull; DAY 15</text>
                  <text x="512" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Settlement / Scrap</text>
                  <text x="512" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">RTGS Release + Stock</text>
                  <text x="512" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Lift OR Documented</text>
                  <text x="512" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Scrap Credit + Rent</text>

                  <path d="M 604 100 L 626 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowPack)" />

                  <rect x="628" y="30" width="182" height="140" rx="14" fill="#DC2626" />
                  <text x="719" y="60" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 4 &bull; ESCALATION</text>
                  <text x="719" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">MSEFC &amp; Court Suit</text>
                  <text x="719" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">Samadhaan 3x RBI,</text>
                  <text x="719" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">NI s.138, Order XXXVII</text>
                  <text x="719" y="138" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">&amp; IBC s.8 (&ge; &#8377;1 Cr)</text>

                  <defs>
                    <marker id="arrowPack" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 • Day 1",
                    title: "QC, Artwork & e-Way Lock",
                    detail: "Assemble PO/MOQ confirmation, Pantone/artwork approval, dispatch BF/GSM lab slip, and GST e-Way Bills.",
                  },
                  {
                    stage: "Stage 2 • Day 2–3",
                    title: "s.55/44, 43B(h) & Lien Notice",
                    detail: "Serve Email + WhatsApp + RPAD advocate notice demanding invoice payout, 15-day stock lift, godown rent, and tooling lien.",
                  },
                  {
                    stage: "Stage 3 • Day 15",
                    title: "RTGS Cure or Scrap Protocol",
                    detail: "Collect cleared RTGS prior to cylinder/mould release or document zero-salvage scrap realization under s.55/44.",
                  },
                  {
                    stage: "Stage 4 • Escalation",
                    title: "MSEFC, NI s.138 & Order 37",
                    detail: "File MSEFC Samadhaan for 3x RBI compound interest, JMFC s.138 on bounced cheques, or IBC s.8 for ≥ ₹1 Cr paper-mill dues.",
                  },
                ].map((item) => (
                  <div key={item.stage} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[11px] font-bold uppercase text-red-400 mb-1">{item.stage}</p>
                    <p className="text-sm font-extrabold mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Playbooks */}
            <section
              id="heading-interactive-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Playbooks: Pouches, BF/GSM Disputes, Moulds &amp; Reels
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Toggle between the four most destructive payment failure modes hitting Indian corrugated box plants, flexible converters, rigid bottle moulders, and kraft/duplex paper mills:
              </p>

              <PackagingPrintingHubScenarioTabs />
            </section>

            {/* Section 5: Dual-Track CTA & Bulk CSV Desk */}
            <section
              id="heading-csv-batch-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Single &#8377;999 Test Notice or 10–10,000+ Converter CSV Batch Desk
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Validate our advocate-drafted recovery workflow on one stubborn FMCG brand, unlifted stock ledger, or defaulting paper dealer for &#8377;999—or onboard your entire regional plant or paper-mill receivable book via CSV ahead of financial year-end audits.
              </p>

              <PackagingPrintingHubCTA />
            </section>

            {/* Section 6: Binding Statutory Mandates */}
            <section
              id="heading-statutory-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Zero-Salvage Goods, s.44 Godown Rent &amp; Cylinder Lien Law
                </h2>
              </div>

              <div className="space-y-4">
                {STATUTORY_MANDATES.map((item) => (
                  <div
                    key={item.citation}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">{item.parties}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {item.holding}
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3.5 py-2 text-xs font-semibold text-emerald-800">
                      Creditor Leverage: {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Economics */}
            <section
              id="heading-worked-ledgers"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledgers: &#8377;26L Pouches vs &#8377;19.5L Corrugated Bills
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Worked Case 1 */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60 mb-3">
                    Case A &bull; Flexible Laminate Converter (Zero-Salvage Stock)
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mb-3">
                    &#8377;26,40,000 Unlifted Brand Pouches + 8-Colour Cylinders
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>Delivered Laminate Invoices Overdue (75 DPD):</strong> &#8377;9,80,000</li>
                    <li>&bull; <strong>Unlifted FSSAI-Printed Stock (3.5 Tons @ &#8377;360/kg):</strong> &#8377;12,60,000</li>
                    <li>&bull; <strong>Unpaid 8-Colour Gravure Cylinder Balance:</strong> &#8377;1,92,000</li>
                    <li>&bull; <strong>Sale of Goods s.44 Godown Rent (4 Months @ &#8377;22,000):</strong> &#8377;88,000</li>
                    <li>&bull; <strong>MSMED s.16 Interest (3x RBI ~19.5% Compounded):</strong> &#8377;1,20,000</li>
                    <li>&bull; <strong>Total Statutory Claim (Less &#8377;28,000 Scrap if Unlifted):</strong> &#8377;26,40,000</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Outcome: 15-day Lift-Stock + Cylinder Lien + Section 43B(h) CFO notice stops 25% haircut demand and triggers phased RTGS clearance.
                  </div>
                </div>

                {/* Worked Case 2 */}
                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-3">
                    Case B &bull; Corrugated Box Plant (FCBM / Udyam Micro Unit)
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mb-3">
                    &#8377;19,50,000 Overdue Shipper Cartons + Bogus 15% BF Debit Note
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>GST-Invoiced 5-Ply Cartons Delivered (105 DPD):</strong> &#8377;19,50,000</li>
                    <li>&bull; <strong>Buyer&rsquo;s Belated Debit Note (15% &ldquo;Monsoon Moisture/BF&rdquo;):</strong> &#8377;2,92,500 (Rejected under s.42)</li>
                    <li>&bull; <strong>Buyer&rsquo;s Section 43B(h) Tax Hit Across March 31 (~25.17%):</strong> &#8377;4,90,815 immediate corporate tax add-back</li>
                    <li>&bull; <strong>MSMED s.16 Compound Interest (60 Days Overdue):</strong> Compute live on our{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-[#DC2626] underline font-semibold"
                      >
                        MSME Interest Calculator
                      </Link>
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Outcome: Buyer CFO drops the &#8377;2.92L moisture deduction to avoid &#8377;4.90L corporate tax disallowance and MSEFC 3x RBI award.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Complete Hub-and-Spoke Directory */}
            <section
              id="heading-ind22-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  All 9 Packaging, Printing &amp; Paper Mill Sub-Routes (IND-22)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Navigate every specialized operational playbook, statutory cylinder/die lien commentary, and interactive unlifted-stock legal notice template engineered for the IND-22 packaging and paper cluster:
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_22_SPOKES.filter((s) => s.track === track.key);
                  return (
                    <div key={track.key}>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-200">
                        {track.heading}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {trackSpokes.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all shadow-sm hover:shadow-md"
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${track.badgeClass}`}
                              >
                                {spoke.archetypeLabel}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400">{spoke.id}</span>
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </h4>
                            <p className="text-[11px] font-semibold text-slate-500 mb-2">
                              {spoke.statute}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">{spoke.summary}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 9: Seed Resources, Calculators & Templates */}
            <section
              id="heading-msme-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  MSME Section 43B(h) Rules, Calculators &amp; Commercial Templates
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Statutory Tax Hook</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Section 43B(h) Income Tax MSME 45-Day Payment Rule
                  </p>
                  <p className="text-xs text-slate-600">
                    Exact compliance mechanics showing how unpaid Udyam carton, laminate, and printing bills trigger buyer tax disallowance on March 31.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Interactive T1 Calculator</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    MSME Delayed Payment Interest Calculator (3x RBI Bank Rate)
                  </p>
                  <p className="text-xs text-slate-600">
                    Calculate monthly compounded MSMED Section 16 interest on overdue packaging and paper-mill invoices before issuing your advocate notice.
                  </p>
                </Link>

                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Commercial Notice Workspace</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    MSME Delayed Payment Demand Notice Template (s.15–18 &amp; 43B(h))
                  </p>
                  <p className="text-xs text-slate-600">
                    Advocate-vetted Udyam demand format ready for corrugated box plants, flexible converters, offset printers, and pallet makers.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Institutional CSV Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Bulk Recovery Cases: All-in-One Institutional Solutions
                  </p>
                  <p className="text-xs text-slate-600">
                    Upload 10 to 10,000+ overdue converter, paper-mill, or association ledgers in a single tracked Email + WhatsApp + Speed Post RPAD wave.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-packaging-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Corrugated Box, Flexible Pouch, Cylinder &amp; Paper Mill Dues
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-statutory-portals"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Bare Acts, MSME Samadhaan &amp; Packaging Trade Portals
                </h2>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-xs font-semibold text-slate-800 hover:text-[#DC2626] transition-colors"
                    >
                      <span>{src.title}</span>
                      <span aria-hidden="true">&nearr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
