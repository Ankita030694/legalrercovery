import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AgriColdStorageHubTableOfContents from "./AgriColdStorageHubTableOfContents";
import AgriColdStorageHubScenarioTabs from "./AgriColdStorageHubScenarioTabs";
import AgriColdStorageHubCTA from "./AgriColdStorageHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/agri-inputs-cold-storage-food-processing-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Agri-Inputs, Seeds, Cold Storage & Food Mill Debt Recovery"; // 58 chars
const PAGE_DESCRIPTION =
  "Recover Kharif/Rabi agro-dealer credit defaults, execute lawful Cold-Storage commodity auctions, and collect rice/pulse/oil/feed mill wholesale ledgers."; // 152 chars
const H1_TEXT =
  "Seasonal Dealer Credit, Cold-Storage Lien & Wholesale Recovery for Agrochemical, Seed, Feed & Food-Processing Companies"; // 119 chars

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

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "L1" | "H1" | "P1";
  archetypeLabel: string;
  track: "inputs-cold-chain" | "mills-feed-horeca" | "hindi-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_21_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-242",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "inputs-cold-chain",
    title: "Agrochemical & Hybrid Seed Dealer Recovery: Defeating 'Crop Failure' Excuses",
    url: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
    statute: "Seeds Act / Insecticides Act Statutory Lab Sampling + NI Act s.138",
    summary:
      "Neutralize post-harvest oral 'poor germination' or 'pest efficacy' excuses from Krishi Kendra dealers lacking Govt Agriculture Officer panchnamas and prosecute seasonal PDCs.",
  },
  {
    id: "B2B-243",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "inputs-cold-chain",
    title: "Cold Storage Unpaid Rent: Lawful Commodity Lien, Auction Notice & Deficit Suit",
    url: "/cold-storage-unpaid-rent-commodity-lien-lawful-auction-notice-india",
    statute: "State Cold Storage Acts + Contract Act s.170/176 Registered Notice",
    summary:
      "Clear abandoned potato, red chilli, turmeric, and apple chambers lawfully via 15-day Speed Post RPAD pre-auction notices without triggering Consumer Court penalties.",
  },
  {
    id: "B2B-248",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "inputs-cold-chain",
    title: "Drip Irrigation, Polyhouse & Farm Machinery Dealer & PMKSY Subsidy Recovery",
    url: "/drip-irrigation-tractor-implement-greenhouse-dealer-subsidy-recovery",
    statute: "MSMED Act s.15–18 + NI Act s.138 + CPC s.80 Horticulture Notice",
    summary:
      "Recover rotavator, tractor-implement, and micro-irrigation dealer credit ledgers while accelerating stuck PMKSY and State Horticulture subsidy releases.",
  },
  {
    id: "B2B-244",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "mills-feed-horeca",
    title: "Rice, Dal, Flour & Edible-Oil Mill Wholesale Buyer & Mandi Broker Recovery",
    url: "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery",
    statute: "MSMED s.15–18 + Income Tax s.43B(h) + BNS s.318 + Order XXXVII CPC",
    summary:
      "Stop Naya Bazar, Vashi, and outstation mandi 'bust-out' buyers and bogus moisture/broken deductions on truckload grain and edible-oil supplies.",
  },
  {
    id: "B2B-245",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "mills-feed-horeca",
    title: "Poultry, Cattle & Aqua-Feed Dealer Recovery & Contract-Farming Bird Diversion",
    url: "/poultry-feed-cattle-feed-aqua-shrimp-feed-dealer-integrator-recovery",
    statute: "Batch Mycotoxin Lab Reports + BNS s.316 Bailee Bird-Lifting Action",
    summary:
      "Rebut viral mortality feed-blame in Andhra/Odisha shrimp and Namakkal/Haryana poultry belts and prosecute night-time contract-broiler diversion.",
  },
  {
    id: "B2B-246",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "mills-feed-horeca",
    title: "FPO (Farmer Producer Company) & Dairy Cooperative Institutional Buyer Recovery",
    url: "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery",
    statute: "APMC 24–72 Hr Timely Payment Rules + NI Act s.138 + Order XXXVII",
    summary:
      "Protect FPOs and dairy chilling plants from agri-tech offtaker and APMC trader defaults with formal notices copied to the APMC Secretary.",
  },
  {
    id: "B2B-247",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "mills-feed-horeca",
    title: "HoReCa Food, Dairy, Meat & Seafood Distributor: Restaurant & QSR Recovery",
    url: "/horeca-food-service-meat-seafood-dairy-restaurant-chain-recovery",
    statute: "NI Act s.138/141 Directors + Kitchen Chef Challans + s.43B(h)",
    summary:
      "Collect overdue F&B invoices before cloud kitchens and pub chains shut LLP-1 and phoenix into a new outlet, binding founders via PDCs and personal guarantees.",
  },
  {
    id: "B2B-249",
    archetype: "H1",
    archetypeLabel: "H1 Hindi Vyapari Guide",
    track: "hindi-templates",
    title: "खाद-बीज डीलर, कोल्ड स्टोरेज और मंडी उधार की कानूनी वसूली गाइड",
    url: "/hi/khad-beej-pesticide-cold-storage-mandi-udhar-recovery-notice",
    statute: "NI Act s.138 + State Cold Storage Acts + APMC Rules (Hindi)",
    summary:
      "UP, MP, राजस्थान, बिहार, हरियाणा और पंजाब के खाद-बीज डिस्ट्रीब्यूटर, राइस/दाल मिलर और कोल्ड स्टोरेज मालिकों के लिए सरल हिंदी कानूनी वसूली गाइड।",
  },
  {
    id: "B2B-250",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "hindi-templates",
    title: "Agri & Cold-Chain Legal Template Pack: Pre-Auction & Agro-Dealer Notice",
    url: "/templates/cold-storage-auction-notice-and-agro-dealer-recovery-format",
    statute: "Contract Act s.170/176 + State Cold Storage Acts + NI Act s.20/138",
    summary:
      "Interactive notice builder generating (1) Consumer-Court-proof Cold Storage Registered Pre-Auction Notices and (2) Agro-Input / Feed Dealer Ledger Demands.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "inputs-cold-chain" as const,
    heading: "Track A: Agrochemicals, Hybrid Seeds, Cold Storages & Agri-Machinery",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "mills-feed-horeca" as const,
    heading: "Track B: Rice/Dal/Oil Mills, Poultry & Aqua-Feed, FPOs & HoReCa Vendors",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "hindi-templates" as const,
    heading: "Track C: Hindi Mandi/Vyapari Guide & Pre-Auction Notice Template Pack",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "Seeds Act, 1966 & Insecticides Act, 1968 — Statutory Sampling & Lab Rules",
    title: "Rebutting Post-Harvest Oral 'Poor Germination' & 'Low Efficacy' Credit Excuses",
    parties: "Agrochemical, Micronutrient & Hybrid Seed Companies vs Defaulting Krishi Kendra Dealers",
    holding:
      "Under the Seeds Act, 1966 and Insecticides Act, 1968, product quality or germination failure can only be established through statutory sampling by an authorized Seed Inspector or Insecticide Analyst in the prescribed sealed manner, followed by testing at a notified Government laboratory. Oral 'farmer complaints' raised 4–5 months after Kharif/Rabi supply—without contemporaneous Department of Agriculture panchnamas or batch-wise lab failure reports—provide zero legal defence against an unpaid wholesale ledger or bounced seasonal PDC.",
    impact:
      "Strips defaulting dealers of fabricated crop-failure set-offs so regional credit heads can enforce full principal plus interest before the next sowing cycle.",
  },
  {
    citation: "Indian Contract Act, 1872 — Sections 170 & 176 & State Cold Storage Regulation Acts",
    title: "Lawful Bailee Lien, Mandatory Registered Pre-Auction Notice & Deficit-Rent Recovery",
    parties: "Cold Storage & Dry-Warehouse Owners vs Vanished Commodity Depositors",
    holding:
      "Cold storage operators hold a statutory bailee's lien under Section 170 of the Contract Act and power of sale under Section 176, regulated alongside State Cold Storage Acts (such as in Uttar Pradesh, West Bengal, Bihar, and Gujarat). Before auctioning abandoned potato, red chilli, turmeric, or apple lots, the storage owner must serve a clear Registered Speed Post (RPAD) Pre-Auction Notice specifying Lot Receipt numbers, chamber, bag count, accrued rent, and a reasonable redemption window (typically 15 days), followed by public auction notice.",
    impact:
      "Eliminates Consumer Court deficiency-of-service penalties for 'illegal disposal' while preserving the cold storage's legal right to sue the trader for any post-auction rent shortfall.",
  },
  {
    citation: "Negotiable Instruments Act, 1881 — Sections 138, 139 & 141 (+ s.20 Inchoate Stamped Instruments)",
    title: "Enforcing Seasonal Security PDCs Against Proprietors, Partners & Corporate Directors",
    parties: "Seed/Pesticide Companies, Feed Integrators & Grain Millers vs Channel Partners",
    holding:
      "Under Section 139 of the NI Act, a cheque issued towards a legally enforceable debt carries a statutory presumption of consideration—even when handed over as a seasonal security cheque once the Kharif/Rabi ledger crystallizes on the date of presentation (Sripati Singh v. State of Jharkhand). Serving a mandatory written demand notice within 30 days of the bank return memo triggers a strict 15-day cure window; non-payment opens criminal prosecution under s.138 and vicarious liability for active directors/partners under s.141.",
    impact:
      "Converts slow rural/mandi civil receivables into time-bound criminal-court pressure where dealers settle rapidly to avoid bailable/non-bailable warrants.",
  },
  {
    citation: "MSMED Act, 2006 (s.15–18), Income Tax Act s.43B(h) & APMC Timely Payment Mandates",
    title: "3x RBI Compound Interest for Udyam Mills & APMC License Pressure on Mandi Buyers",
    parties: "Rice/Dal/Oil/Feed Mills, FPOs & Drip Manufacturers vs Corporate Offtakers & Arhatiyas",
    holding:
      "Udyam-registered grain, pulse, flour, edible-oil, and feed mills are manufacturing MSMEs entitled under MSMED Act Section 16 to compound interest at 3 times the RBI Bank Rate (~19.5% p.a.) on payments delayed beyond 45 days. Furthermore, under Income Tax Act Section 43B(h), corporate buyers lose tax deductibility on unpaid MSME purchases at financial year-end. Simultaneously, state APMC rules mandate 24–72 hour settlement for notified agricultural produce, exposing defaulting mandi traders to trading-license suspension upon formal complaint to the APMC Secretary.",
    impact:
      "Gives agro-processors and FPOs dual financial and regulatory leverage to recover truckload dues without sacrificing 1% mill margins to years of civil litigation.",
  },
];

const FAQS = [
  {
    question: "How do agrochemical and seed companies defeat false 'crop failure' payment excuses?",
    answer:
      "Serve an advocate-drafted statutory demand notice enclosing your batch-wise Certificate of Analysis, signed bilty/e-Way Bill, and dealer ledger. Put the dealer on formal notice that under the Seeds Act, 1966 and Insecticides Act, 1968, oral post-harvest complaints without a contemporaneous Government Agriculture Officer panchnama and notified lab report are legally inadmissible, while initiating NI Act s.138 action on bounced seasonal PDCs.",
  },
  {
    question: "Can a cold storage sell abandoned potato or chilli bags if the trader stops paying rent?",
    answer:
      "Yes, but never sell informally without statutory notice—doing so invites heavy Consumer Court damages. Serve a Registered Speed Post (RPAD) Pre-Auction Notice under Contract Act s.170/176 and the applicable State Cold Storage Act listing Lot numbers, bag count, accrued rent, and a 15-day redemption window, publish the auction notice in a local newspaper, conduct a transparent sale, and sue for any deficit rent.",
  },
  {
    question: "What if the cold-storage auction proceeds are less than the unpaid rent and electricity bill?",
    answer:
      "When spot mandi prices crash below accrued storage charges, lawful auction proceeds are adjusted first against storage rent, loading/unloading, and power charges. You can then serve a Post-Auction Deficit Demand Notice enclosing the auction sheet and recover the remaining shortfall via Order XXXVII CPC summary suit or civil recovery.",
  },
  {
    question: "Are rice, dal, flour, and edible-oil mills eligible for MSME Samadhaan & Section 43B(h) benefits?",
    answer:
      "Yes. Processing mills with valid Udyam registration qualify as manufacturing MSMEs under the MSMED Act, 2006. Buyers delaying payment beyond 45 days owe compound interest at 3x the RBI Bank Rate (~19.5% p.a.) enforceable via MSEFC Samadhaan, and corporate buyers risk losing Income Tax s.43B(h) deduction on those unpaid purchases.",
  },
  {
    question: "How can poultry and aqua-feed companies handle 'high FCR or disease mortality' blame?",
    answer:
      "Preserve retained factory batch samples and NABL mycotoxin/nutrition test reports alongside farm veterinary or pond-water logs showing viral outbreaks (such as WSSV or Ranikhet) rather than feed defects. For contract broiler farming, unauthorized night-time sale of integrator birds ('bird lifting') attracts BNS s.316 Criminal Breach of Trust.",
  },
  {
    question: "How can an FPO or dairy plant force an APMC mandi trader or agri-tech buyer to pay?",
    answer:
      "Send a formal advocate notice citing state APMC timely-payment rules (often 24–72 hours for agricultural produce) and mark a formal copy to the jurisdictional APMC Secretary requesting trading/commission-agent license action, alongside NI Act s.138 or Order XXXVII CPC proceedings.",
  },
  {
    question: "Can agro-input companies and cold storages send bulk seasonal notices via CSV upload?",
    answer:
      "Yes. You can test 1 overdue dealer or cold-storage lot for ₹999, or upload 10 to 10,000+ seasonal ledgers via CSV in our Bulk Institutional Desk with bilingual English/Hindi notices dispatched simultaneously via Email, WhatsApp, and Speed Post RPAD.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 141) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 170 & 176 Lien/Sale) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Seeds Act, 1966 & Insecticides Act, 1968 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1480",
  },
  {
    title: "MSME Samadhaan Delayed Payment Portal (MSMED Act s.15–18)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "e-NAM National Agriculture Market & APMC Portal",
    url: "https://www.enam.gov.in/",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) MSME Clause) — Income Tax India",
    url: "https://www.incometaxindia.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType:
    "B2B Agrochemical & Seed Dealer Credit Recovery, Cold-Storage Pre-Auction Lien Notices & Food Mill Wholesale Recovery",
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
  name: "IND-21 Agri-Inputs, Seeds, Cold Storage, Feed & Food Processing Recovery Playbooks",
  numberOfItems: IND_21_SPOKES.length,
  itemListElement: IND_21_SPOKES.map((spoke, index) => ({
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
      name: "Agri-Inputs, Cold Storage & Food Processing Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function AgriColdStorageFoodProcessingHubPage() {
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
            <span>IND-21 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Agrochemicals, Seeds, Cold Storage, Mills &amp; Feed</span>
            <span className="text-slate-500">&bull;</span>
            <span>Creditor-Side Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (NI s.138, Cold Storage s.176 Auction &amp; Seeds Act Rules)
            </span>
            Built exclusively for agri-input manufacturers, cold-storage owners, and food processors—not defaulting buyers. Recover <strong>120-day Kharif/Rabi dealer credit</strong>, execute <strong>Consumer-Court-proof Cold-Storage commodity auctions</strong> under Contract Act s.170/176, and collect <strong>rice, pulse, edible-oil, feed &amp; HoReCa ledgers</strong> via NI Act s.138/141, MSMED s.15–18, and Order XXXVII CPC.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">120-Day</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Kharif &amp; Rabi seasonal dealer credit cycles recovered before next sowing
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.170 / s.176</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Lawful Cold-Storage commodity lien, 15-day RPAD notice &amp; deficit suit
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">NI s.138/141</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                30-day statutory cheque bounce prosecution for seasonal dealer PDCs
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Bilingual English/Hindi CSV batch notices via Email, WhatsApp &amp; RPAD
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Sector Scope:{" "}
              <strong className="text-slate-200">
                Agrochemical &amp; Seed Credit Heads, Cold Storages, Rice/Dal/Oil Mills, Feed Makers, FPOs &amp; HoReCa
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
              { label: "Agri-Inputs, Cold Storage & Food Processing Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <AgriColdStorageHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Industry Gap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Agri-Inputs &amp; Food Chains Bleed Post-Harvest Cash
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  India&rsquo;s agricultural input and food-processing economy runs on extended, trust-heavy seasonal credit. Agrochemical, hybrid seed, and fertilizer companies in Hyderabad, Ahmedabad, Pune, Karnal, Indore, and Jalna ship crores of inventory to rural <em>Krishi Seva Kendras</em> on 90-to-120-day Kharif and Rabi credit cycles. Once the harvest is sold and dealers collect cash from farmers, Zonal Sales Managers routinely face post-dated cheque (PDC) bounces, fabricated oral &ldquo;poor germination&rdquo; excuses, or dealers quietly transferring their shop license to a relative&rsquo;s name.
                </p>
                <p>
                  Downstream in the cold-chain and milling belts—Agra, Farrukhabad, Hooghly, Guntur, Deesa, Karnal, Akola, Latur, and Naya Bazar—the credit risk is equally acute. Cold-storage owners face empty-pocket defaults when potato or red chilli prices crash below accrued chamber rent, leaving chambers choked with rotting stock that cannot be sold informally without risking Consumer Court damages. Meanwhile, rice, dal, flour, and edible-oil millers operating on razor-thin 1% net margins lose truckloads to outstation mandi &ldquo;bust-out&rdquo; buyers, while poultry/aqua-feed makers battle viral mortality blame and HoReCa suppliers face overnight restaurant shutdowns.
                </p>
                <p>
                  Urban SaaS debt-collection tools and generic consumer portals fail this sector completely because they ignore rural Speed Post RPAD service, Hindi/vernacular mandi documentation, statutory Seed/Insecticide laboratory sampling rules, and State Cold Storage auction procedures. LegalRecovery.in bridges this exact institutional gap—combining advocate-drafted statutory notices with bilingual batch CSV execution.
                </p>
              </div>
            </section>

            {/* Section 2: Multi-Track Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  8-Track Agri, Cold-Storage &amp; Food Mill Escalation Matrix
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select the exact statutory track based on vertical, DPD aging, security instrument, and ticket size:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Vertical / Counterparty</th>
                      <th className="p-3 sm:p-4 font-bold">Ticket &amp; Aging</th>
                      <th className="p-3 sm:p-4 font-bold">Primary Statutory Trigger</th>
                      <th className="p-3 sm:p-4 font-bold">Target Forum &amp; Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Agrochemical &amp; Seed Dealer (Kharif/Rabi PDC)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;1.5L–&#8377;45L &bull; 90–150 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        NI Act s.138/141 + Seeds/Insecticides Act Lab Rules
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        30-Day Cheque Bounce Notice &rarr; JMFC Court + Order 37
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Cold Storage Unpaid Rent &amp; Abandoned Stock
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;3L–&#8377;1.5 Cr &bull; End of Season</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        State Cold Storage Acts + Contract Act s.170/176
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        15-Day RPAD Pre-Auction Notice &rarr; Lawful Sale + Deficit Suit
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Rice, Dal, Flour &amp; Edible-Oil Mill Wholesale Buyer
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;8L–&#8377;2.5 Cr &bull; 30–75 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        MSMED s.15–18 + Income Tax s.43B(h) + BNS s.318
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        MSEFC 3x RBI Interest / APMC Secretary CC + Commercial Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Poultry, Cattle &amp; Shrimp Aqua-Feed Dealer
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;5L–&#8377;80L &bull; 60–120 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Batch Mycotoxin Lab Report + BNS s.316 (Bird Lifting)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        Police Station CC (BNS s.316) + NI s.138 + Collateral Suit
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        FPO / Dairy Plant Corporate &amp; Mandi Offtaker
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;4L–&#8377;1 Cr &bull; 15–45 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        APMC 24–72 Hr Payment Rules + NI s.138 + Order 37
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-amber-800">
                        APMC License Suspension CC + Summary Recovery Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        HoReCa Supplier vs Restaurant / Cloud Kitchen
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;1L–&#8377;35L &bull; 30–60 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        NI s.138/141 Directors + Kitchen Chef Challans
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Day-35 Director Demand &rarr; Pre-Shutdown Settlement
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Drip Irrigation / Polyhouse Dealer &amp; Subsidy
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;5L–&#8377;1.2 Cr &bull; 90–365 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        MSMED s.15–18 + CPC s.80 Horticulture Notice
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        Dealer PDC Enforcement + State Subsidy Writ/s.80 Notice
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        10–10,000+ Seasonal Dealer / Lot Portfolios
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">All Ticket Tiers &bull; Batch Drive</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        BSA 2023 s.63 Certified Multi-Channel Dispatch
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        CSV Batch Upload &rarr; Bilingual Email + WhatsApp + RPAD
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Visual Workflow Architecture */}
            <section
              id="heading-workflow-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Harvest-to-Recovery &amp; Pre-Auction Legal Pipeline
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Whether recovering 400 seasonal agro-dealer ledgers or clearing 50,000 cold-storage bags before the next potato crop arrives, every step builds court-admissible BSA 2023 s.63 proof:
              </p>

              {/* Desktop SVG Pipeline */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  viewBox="0 0 820 200"
                  width="820"
                  height="200"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Four-stage agri-input, cold storage and food mill recovery pipeline"
                >
                  <rect x="10" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="100" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 &bull; DAY 1</text>
                  <text x="100" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Evidence &amp; Lab Lock</text>
                  <text x="100" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Bilty, e-Way Bill, Lot</text>
                  <text x="100" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Receipt &amp; Batch QC</text>
                  <text x="100" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Certificate of Analysis</text>

                  <path d="M 192 100 L 214 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowAgri)" />

                  <rect x="216" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="306" y="60" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 &bull; DAY 2–3</text>
                  <text x="306" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Bilingual RPAD Notice</text>
                  <text x="306" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Advocate Demand +</text>
                  <text x="306" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">s.176 Pre-Auction or</text>
                  <text x="306" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">APMC Secretary CC</text>

                  <path d="M 398 100 L 420 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowAgri)" />

                  <rect x="422" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="512" y="60" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3 &bull; DAY 15–30</text>
                  <text x="512" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">PDC / Auction Trigger</text>
                  <text x="512" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">NI s.138 15-Day Cure</text>
                  <text x="512" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Clock OR Newspaper</text>
                  <text x="512" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Cold-Storage Auction</text>

                  <path d="M 604 100 L 626 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowAgri)" />

                  <rect x="628" y="30" width="182" height="140" rx="14" fill="#DC2626" />
                  <text x="719" y="60" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 4 &bull; ESCALATION</text>
                  <text x="719" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Court &amp; MSEFC Filing</text>
                  <text x="719" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">JMFC s.138, MSEFC</text>
                  <text x="719" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">3x RBI Award, Order 37</text>
                  <text x="719" y="138" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">&amp; Auction Deficit Suit</text>

                  <defs>
                    <marker id="arrowAgri" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
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
                    title: "Evidence & Batch QC Lock",
                    detail: "Compile signed bilty, e-Way Bill, Lot Receipt, and retained lab Certificate of Analysis.",
                  },
                  {
                    stage: "Stage 2 • Day 2–3",
                    title: "Bilingual RPAD + WhatsApp Notice",
                    detail: "Serve English/Hindi advocate notice with s.176 Pre-Auction or APMC Secretary CC.",
                  },
                  {
                    stage: "Stage 3 • Day 15–30",
                    title: "PDC Cure Clock or Auction",
                    detail: "Run mandatory 15-day NI s.138 clock on bounced cheques or conduct lawful cold-storage sale.",
                  },
                  {
                    stage: "Stage 4 • Escalation",
                    title: "JMFC, MSEFC & Order 37 Filing",
                    detail: "Enforce s.138 criminal complaints, 3x RBI Samadhaan interest, and deficit recovery suits.",
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

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Agri-Input, Cold-Storage &amp; Mill Playbooks (Interactive)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Switch between the four highest-frequency default patterns across India&rsquo;s rural credit, cold-chain, grain-milling, and feed belts:
              </p>

              <AgriColdStorageHubScenarioTabs />
            </section>

            {/* Section 5: Dual-Track CTA & Bulk CSV Desk */}
            <section
              id="heading-bulk-csv-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Seasonal Dealer, Cold-Storage &amp; Mill Batch CSV Desk
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Run a single &#8377;999 live test notice against your toughest dealer or abandoned cold-storage lot—or upload 10 to 10,000+ Kharif/Rabi accounts in one tracked seasonal recovery drive.
              </p>

              <AgriColdStorageHubCTA />
            </section>

            {/* Section 6: Binding Statutory Mandates */}
            <section
              id="heading-statutory-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Binding Statutory Mandates: Seeds Act, s.176 &amp; NI s.138
                </h2>
              </div>

              <div className="space-y-4">
                {BINDING_MANDATES.map((item) => (
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
              id="heading-worked-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Economics: &#8377;18.4L Agro-Dealer vs &#8377;42.6L Cold-Storage Auction
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Worked Case 1 */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60 mb-3">
                    Case A &bull; Agrochemical / Seed Seasonal Credit
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mb-3">
                    &#8377;18,40,000 Kharif Dealer Ledger + Bounced PDC
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>Invoice Principal (120-Day Credit):</strong> &#8377;18,40,000</li>
                    <li>&bull; <strong>Dealer Excuse Raised at Day 135:</strong> Oral &ldquo;low pest efficacy&rdquo; claim</li>
                    <li>&bull; <strong>Statutory Rebuttal:</strong> Zero Agriculture Officer panchnama or Govt Lab report under Insecticides Act, 1968</li>
                    <li>&bull; <strong>Contractual / MSME Interest (18% p.a. for 6 months):</strong> &#8377;1,65,600</li>
                    <li>&bull; <strong>Total Demand + NI s.138 Notice:</strong> &#8377;20,05,600</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Outcome: 15-day Speed Post RPAD + WhatsApp NI s.138 notice triggers pre-summons ledger settlement before next Rabi dispatch.
                  </div>
                </div>

                {/* Worked Case 2 */}
                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-3">
                    Case B &bull; Cold Storage Lien &amp; Deficit Recovery
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mb-3">
                    &#8377;42,60,000 Unpaid Potato Chamber Rent &amp; Auction Shortfall
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>Accrued Rent + Handling + Power (12,000 Bags):</strong> &#8377;42,60,000</li>
                    <li>&bull; <strong>Step 1:</strong> 15-Day Registered Pre-Auction Notice (Contract Act s.176) + Local Newspaper Publication</li>
                    <li>&bull; <strong>Step 2 (Net Transparent Auction Realization):</strong> &#8377;31,20,000</li>
                    <li>&bull; <strong>Step 3 (Post-Auction Deficit Claim):</strong> &#8377;11,40,000 +{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-[#DC2626] underline font-semibold"
                      >
                        MSME Interest Calculator
                      </Link>
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Outcome: Chambers cleared lawfully for next season with zero Consumer Court liability + &#8377;11.4L deficit preserved for Order 37 suit.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Complete Hub-and-Spoke Directory */}
            <section
              id="heading-spokes-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Complete IND-21 Directory: All 9 Spokes &amp; Notice Pack
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Explore every specialized guide, statutory deep-dive, Hindi Vyapari SOP, and interactive notice workspace in our Agri-Inputs, Cold Storage, Feed &amp; Food-Processing recovery cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_21_SPOKES.filter((s) => s.track === track.key);
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

            {/* Section 9: Seed Resources & Tools */}
            <section
              id="heading-seed-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Essential Statutory Guides, Hindi SOPs &amp; Bulk Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Channel Credit Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Distributor &amp; Dealer Dues Recovery India
                  </p>
                  <p className="text-xs text-slate-600">
                    Structured recovery playbook for regional Krishi Kendra dealers, stockists, and channel partners withholding seasonal credit.
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">PDC Enforcement</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Cheque Bounce Notice Timeline (NI Act Section 138)
                  </p>
                  <p className="text-xs text-slate-600">
                    Never miss the strict 30-day notice window after a seasonal dealer PDC bounces—track every statutory milestone.
                  </p>
                </Link>

                <Link
                  href="/hi/legal-notice-kaise-bheje"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Hindi Vyapari Guide</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Legal Notice Kaise Bheje (कानूनी नोटिस कैसे भेजें)
                  </p>
                  <p className="text-xs text-slate-600">
                    Step-by-step Hindi guide for mandi traders, grain millers, and rural distributors sending advocate notices via Speed Post RPAD.
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
                    Upload 10 to 10,000+ Kharif/Rabi dealer ledgers, cold-storage lots, or mill invoices in a single tracked wave.
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Agri, Cold Storage &amp; Mill Recovery
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
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
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
