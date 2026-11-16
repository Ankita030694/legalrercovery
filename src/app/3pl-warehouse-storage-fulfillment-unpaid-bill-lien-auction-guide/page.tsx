import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import WarehouseStorageLienCTA from "./WarehouseStorageLienCTA";
import WarehouseStorageLienTableOfContents from "./WarehouseStorageLienTableOfContents";
import WarehouseStorageScenarioTabs from "./WarehouseStorageScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/3pl-warehouse-storage-fulfillment-unpaid-bill-lien-auction-guide`;
const PAGE_H1 =
  "D2C or Enterprise Client Stopped Paying 3PL Storage Bills & Left Dead Stock Blocking 500 Pallets? Lawful Lien & Auction-Disposal Guide";

export const metadata: Metadata = {
  title: "3PL Warehouse Unpaid Storage Bills & Dead-Stock Lien Sale",
  description:
    "D2C client stopped paying 3PL warehouse fees? Execute Section 170 bailee lien, statutory valuation, 15-day auction notice, and CPC Order 37 deficit recovery.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "3PL Warehouse Unpaid Storage Bills & Dead-Stock Lien Sale",
    description:
      "D2C client stopped paying 3PL warehouse fees? Execute Section 170 bailee lien, statutory valuation, 15-day auction notice, and CPC Order 37 deficit recovery.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "3PL Warehouse Unpaid Storage Bills and Dead Stock Lien Auction Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3PL Warehouse Unpaid Storage Bills & Dead-Stock Lien Sale",
    description:
      "D2C client stopped paying 3PL warehouse fees? Execute Section 170 bailee lien, statutory valuation, 15-day auction notice, and CPC Order 37 deficit recovery.",
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
    title: "The Indian Contract Act, 1872 (Section 170 — Bailee's Particular Lien & Section 171 — General Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Contracts & Liquidated Demands)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Disputes Arising Out of Carriage & Warehousing Services)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for WMS Database & Barcode Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Insolvency and Bankruptcy Code, 2016 (Section 5(13) & Section 14 — IRP Costs Priority vs Moratorium on Bailee Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title: "The Sale of Goods Act, 1930 (Sections 46, 47 & 54 — Unpaid Seller's and Bailee's Rights of Re-Sale)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Bailee's Possessory Lien & Contractual Power-of-Sale for Unpaid Dues",
    parties: "Board of Trustees of the Port of Bombay v. Sriyanesh Knitters",
    citation: "(1999) 7 SCC 359, 3-Judge Bench, Supreme Court of India",
    date: "Judgment Dated 27 August 1999",
    facts:
      "A commercial consignee refused to pay accrued warehousing, demurrages, and storage charges on imported consignments. The port authority bailee retained the cargo and initiated statutory public auction proceedings to realize its accrued storage bill. The consignee filed a writ challenging the sale as an unauthorized deprivation of private property.",
    holding:
      "The Supreme Court affirmed that a warehouse bailee in lawful possession holds an enforceable lien over stored goods until all legitimate storage, handling, and custodial rates are satisfied. The Court ruled that where statutory regulations or contractual terms confer a power of sale, the bailee is fully empowered to conduct a public auction after due statutory notice to liquidate the storage debt, adjusting proceeds against the storage ledger.",
    amount: "Bailee Power-of-Sale Upheld for Unpaid Storage & Custodial Arrears",
    takeaway:
      "3PL warehouse operators who serve formal statutory notice and conduct a transparent public auction are fully protected against accusations of illegal conversion or theft.",
  },
  {
    title: "Supreme Court on Demurrage & Storage Lien Overriding Proprietary Title",
    parties: "International Airport Authority of India v. Grand Slam International & Ors.",
    citation: "(1995) 3 SCC 151, Supreme Court of India",
    date: "Judgment Dated 17 February 1995",
    facts:
      "Goods were detained at a commercial cargo terminal pursuant to customs inquiries. The importer eventually obtained a clearance certificate and demanded delivery without paying accumulated terminal storage and handling fees, arguing that the detention was not attributable to their default.",
    holding:
      "The Supreme Court held that the bailee custodian who provides warehousing space, security, and maintenance is legally entitled to recover its storage and demurrage charges irrespective of inter-party disputes. The custodian's lien on the goods cannot be defeated or extinguished merely because the goods owner was exonerated from customs penalties.",
    amount: "Warehouse Storage Lien Prevails Over Importer's Right to Immediate Possession",
    takeaway:
      "3PL fulfillment centers have an absolute possessory right to withhold inventory until storage, put-away, and minimum-space guarantee fees are paid in full.",
  },
  {
    title: "Delhi High Court on Summary Judgment Under Order XXXVII CPC for Contractual Warehousing Dues",
    parties: "Container Corporation of India Ltd. v. Roadwings International Pvt. Ltd.",
    citation: "CS(OS) No. 1294/2008, High Court of Delhi",
    date: "Decision Dated 14 May 2012",
    facts:
      "A logistics terminal operator provided warehousing, container handling, and terminal storage to a freight forwarder under a signed commercial service contract. The client stopped payments and abandoned cargo, leaving huge storage arrears. The operator instituted an Order XXXVII CPC summary suit based on invoices, signed interchange receipts, and computerized ledger entries.",
    holding:
      "The Delhi High Court decreed the suit in favor of the warehousing corporation, holding that unpaid storage, ground rent, and handling charges calculated pursuant to an executed tariff schedule or Master Service Agreement constitute a liquidated debt under Order XXXVII Rule 1(2)(b) CPC. The defendant's bald denials without documentary counter-proof do not entitle them to leave to defend.",
    amount: "Liquidated Storage Arrears Decreed with 18% Commercial Interest",
    takeaway:
      "After auctioning dead inventory, a 3PL operator can fast-track recovery of the remaining deficit balance via an Order 37 CPC summary suit, bypassing multi-year civil trials.",
  },
  {
    title: "NCLAT on 3PL Warehousing & Cold Storage Charges Qualifying as Priority CIRP Costs",
    parties: "MSTC Ltd. v. Jain Carbide & Chemicals Ltd. & Ors.",
    citation: "Company Appeal (AT) (Insolvency) No. 143/2019, NCLAT New Delhi",
    date: "Order Dated 04 July 2019",
    facts:
      "A corporate debtor admitted to CIRP had stored raw materials in a third-party commercial warehouse. The Resolution Professional demanded unconditional handover of the goods under Section 14 IBC moratorium. The warehouse keeper claimed that continuing storage and security preserved the estate's value and demanded full payment before release.",
    holding:
      "The National Company Law Appellate Tribunal held that storage, preservation, and custodial fees incurred to maintain and protect the assets of a corporate debtor during CIRP constitute 'Insolvency Resolution Process Costs' under Section 5(13) of the IBC. Such costs enjoy super-priority and must be paid before any distribution to financial or operational creditors under Section 53.",
    amount: "Warehouse Custodial Fees Accorded Absolute Priority as IRP Costs",
    takeaway:
      "If a defaulting D2C brand enters NCLT insolvency, the 3PL operator must demand that the IRP or liquidator treat ongoing pallet storage as priority CIRP expenses before releasing a single carton.",
  },
];

const FAQS = [
  {
    question: "Can a 3PL warehouse legally auction abandoned D2C inventory without a court decree?",
    answer:
      "Yes, provided two statutory conditions are met: First, the Master Service Agreement (MSA) or Warehousing Terms must contain an explicit 'Power-of-Sale / Disposal Clause' authorizing the bailee to sell retained goods upon payment default exceeding the cure period (typically 30–60 days). Second, the 3PL operator must strictly comply with natural justice: obtaining an independent valuation report from a government-registered valuer, serving a formal 15-day final redemption-cum-auction notice via registered Speed Post RPAD and digital channels, and advertising the public e-auction or sealed-bid sale in widely circulated newspapers. If the contract is completely silent on power-of-sale, the bailee holds a possessory lien under Section 170 Indian Contract Act and must petition the Commercial Court under Order XXXIX Rule 6 CPC for an order of sale of movable property.",
  },
  {
    question: "What happens if the auction proceeds do not cover the unpaid 3PL storage and handling bill?",
    answer:
      "The sale of goods under a bailee lien operates as a pro tanto (partial) satisfaction of the debt. If 500 pallets of abandoned inventory yield ₹7.2 Lakhs at public auction while the accumulated storage, handling, and advertising expenses total ₹24.8 Lakhs, the client remains personally and corporately liable for the remaining deficit of ₹17.6 Lakhs. The 3PL operator issues an immediate Statement of Account showing auction realization and expenses, followed by an advocate demand notice for the deficit. If unpaid within 15 days, the operator files an Order XXXVII CPC summary suit in the Commercial Court claiming the liquidated shortfall balance plus statutory commercial interest.",
  },
  {
    question: "Can a 3PL fulfillment center retain current fast-moving goods for unpaid bills on older dead stock?",
    answer:
      "Under Section 170 of the Indian Contract Act, 1872, the statutory bailee lien is a 'particular lien'—meaning it attaches strictly to the specific goods upon which labor, skill, and storage services were expended. However, commercial warehousing contracts routinely incorporate an express 'General Lien Clause' under Section 171 of the Act. With an explicit contractual general lien clause, the 3PL operator is legally entitled to hold any inventory, consignments, or goods belonging to the client currently in the warehouse, regardless of which specific batch generated the unpaid invoice.",
  },
  {
    question: "Is a 3PL warehouse liable if abandoned cosmetics, food, or electronics expire or violate regulations?",
    answer:
      "Under Section 151 of the Indian Contract Act, a bailee is bound to take as much care of the goods as a person of ordinary prudence would under similar circumstances. However, the bailee is not an insurer of goods against inherent vice, natural perishability, or statutory expiry dates (FSSAI, CDSCO, or Legal Metrology). To insulate against regulatory prosecution, the 3PL operator must formally issue an Expiry Intimation Notice to the brand when stock approaches within 90/60 days of shelf-life expiry, placing the sole legal burden of compliance, recall, or bio-waste destruction on the client.",
  },
  {
    question: "Can a defaulting D2C brand sue the 3PL warehouse for criminal breach of trust or theft?",
    answer:
      "Defaulting debtors frequently attempt to criminalize commercial contract disputes by filing frivolous police complaints under Sections 316/318 of the Bharatiya Nyaya Sanhita, 2023 (BNS, formerly Sections 406/420 IPC) alleging criminal breach of trust or extortion. The Supreme Court has repeatedly held (e.g., Indian Oil Corp. v. NEPC India Ltd.) that exercising a lawful contractual possessory lien under Section 170/171 of the Indian Contract Act does not constitute an offense of misappropriation or criminal breach of trust. Maintaining an unbroken BSA 2023 Section 63 electronic audit trail of invoices, default notices, and valuer reports ensures immediate quashing of such frivolous FIRs under Section 528 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS).",
  },
  {
    question: "How does an IBC Section 14 moratorium affect a 3PL warehouseman's physical lien?",
    answer:
      "When a client enters Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code, 2016, Section 14 prohibits the institution of suits or execution of judgments against the debtor. However, physical possessory lien established prior to the insolvency commencement date is not extinguished. The 3PL operator cannot proceed with private auction without NCLT permission, but the operator is legally entitled to condition the handover of inventory to the Resolution Professional (IRP) on the immediate payment of post-commencement warehousing costs as 'Insolvency Resolution Process Costs' (IRP Costs under IBC Section 5(13)), which enjoy super-priority over all other financial creditors.",
  },
  {
    question: "What is the statutory limitation period to file a civil recovery suit for unpaid warehouse storage fees?",
    answer:
      "Under Article 18 and Article 55 of the Schedule to the Limitation Act, 1963, the limitation period for recovering unpaid warehouse storage, fulfillment fees, and minimum-guarantee shortfall is exactly three (3) years from the date each respective monthly invoice fell due, or from the date of the breach of the Master Service Agreement. Where the debtor has acknowledged the liability in writing (e.g., via ledger confirmation, balance confirmation email, or partial bank transfer), a fresh 3-year limitation period begins under Section 18 of the Limitation Act from the date of such acknowledgment.",
  },
];

const RECOVERABLE_HEADS = [
  {
    category: "Minimum Pallet Space Guarantee (MMG / MVC)",
    statutoryBasis: "Indian Contract Act, 1872 — Sections 73 & 74 (Liquidated Damages / Minimum Volume Commitment)",
    evidentiaryProof: "Master Service Agreement (MSA) with agreed minimum pallet floor (e.g., 500 pallets @ ₹650/pallet)",
    enforceability: "Directly enforceable in Commercial Court as liquidated contractual debt without proof of actual loss.",
  },
  {
    category: "Accrued Storage & Rack Demurrage",
    statutoryBasis: "Indian Contract Act, 1872 — Section 170 (Bailee's Particular Lien for Storage & Care)",
    evidentiaryProof: "WMS daily pallet occupancy reports, computerized bin allocation logs, and monthly GST invoices",
    enforceability: "Possessory lien enables complete withholding of stock until paid in full.",
  },
  {
    category: "Inward Unloading, De-Stuffing & Put-Away Fees",
    statutoryBasis: "Indian Contract Act, 1872 — Section 158 (Bailor's Duty to Repay Necessary Expenses Incurred by Bailee)",
    evidentiaryProof: "Signed Inward Goods Receipt Notes (GRN), container gate-in slips, forklift operator labor logs",
    enforceability: "Recoverable as direct operational cost incurred for preserving and housing bailor's property.",
  },
  {
    category: "Pick, Pack & Order Fulfillment Charges",
    statutoryBasis: "Indian Contract Act, 1872 — Section 170 (Labor and Skill Expended on Goods by Bailee)",
    evidentiaryProof: "WMS API order sync logs, barcode scan dispatch records, courier manifest handovers",
    enforceability: "Forms the core basis of Section 170 particular lien for skill and labor expended on inventory.",
  },
  {
    category: "RTO (Return to Origin) Processing & QC Audits",
    statutoryBasis: "Commercial Contract & Rate Card Terms — Service Remuneration Clauses",
    evidentiaryProof: "E-commerce platform return manifests, reverse logistics intake scans, defect grading reports",
    enforceability: "Liquidated per-unit processing fee fully enforceable under Commercial Courts Act Section 2(1)(c)(xviii).",
  },
  {
    category: "Valuation, Auction Advertising & Legal Expenses",
    statutoryBasis: "Code of Civil Procedure, 1908 — Section 35 & Contractual Recovery Costs Covenant",
    evidentiaryProof: "Government-approved valuer invoice, newspaper advertisement receipts, advocate statutory notice fee",
    enforceability: "Deducted at first priority from gross auction proceeds prior to debt satisfaction.",
  },
];

export default function ThreePLWarehouseLienAuctionGuidePage() {
  const breadcrumbItems = [
    { label: "Logistics & 3PL Debt Recovery", href: "/industries/logistics-freight-3pl-recovery" },
    {
      label: "3PL Unpaid Storage & Lien Auction Guide",
      href: "/3pl-warehouse-storage-fulfillment-unpaid-bill-lien-auction-guide",
    },
  ];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "D2C client stopped paying 3PL warehouse fees? Execute Section 170 bailee lien, statutory valuation, 15-day auction notice, and CPC Order 37 deficit recovery.",
    image: [`${SITE_URL}/blog_money_recovery.png`],
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T10:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
  };

  const jsonLdFaq = {
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Lawfully Dispose of Abandoned Dead Stock and Recover Unpaid 3PL Warehouse Bills",
    description:
      "A 7-step statutory procedure under the Indian Contract Act, 1872 and Code of Civil Procedure, 1908 for 3PL warehouse operators to auction abandoned inventory and recover storage deficits.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Default Trigger & WMS Outward Freeze",
        text: "Issue formal Section 170 Bailee Lien intimation and lock WMS dispatch privileges upon 30-day payment default.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Independent Government Valuation",
        text: "Engage an IBBI-registered valuer to inspect physical inventory, verify batch expiry, and establish distress salvage value.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve 15-Day Statutory Power-of-Sale Notice",
        text: "Dispatch advocate legal notice via Speed Post RPAD, WhatsApp, and Email giving 15 days to redeem inventory or face public auction.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Public Auction Advertisement",
        text: "Publish public auction notices in leading English and vernacular financial newspapers with SKU lot details and bidding dates.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Transparent Public E-Auction Execution",
        text: "Conduct an open e-auction or sealed-bid liquidation with empanelled auctioneers, documenting all bids and participant KYC.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Appropriation & Formal Statement of Account",
        text: "Apply net auction proceeds against accrued storage, handling, and disposal costs, generating a certified ledger for the client.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Deficit Summary Suit Under Order XXXVII CPC",
        text: "File an expedited Order 37 summary recovery suit in the Commercial Court for the remaining shortfall balance plus commercial interest.",
      },
    ],
  };

  const jsonLdBreadcrumb = {
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
        name: "Logistics & 3PL Debt Recovery",
        item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "3PL Unpaid Storage & Lien Auction Guide",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            IND-09 Logistics &amp; 3PL Warehousing &bull; Contract Act s.170 &amp; CPC Order 37
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Protocol
            </span>
            Under Section 170 of the Indian Contract Act, 1872 and modern contract logistics jurisprudence, a 3PL warehouse bailee possesses an absolute possessory lien over stored inventory for unpaid storage, kitting, and fulfillment charges. When a client abandons dead stock, the operator can lawfully execute a 15-day power-of-sale public auction and recover the remaining deficit balance under{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-[#DC2626] underline-offset-2"
            >
              Logistics &amp; 3PL Debt Recovery
            </Link>{" "}
            protocols and Order XXXVII CPC summary suits without conversion liability.
          </div>

          {/* 4-Card Hero Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Statutory Notice
              </span>
              <p className="text-lg sm:text-2xl font-black text-amber-400">15 Days</p>
              <p className="text-[11px] text-slate-300">Mandatory Auction Pre-Condition</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Statutory Hook
              </span>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Sec. 170</p>
              <p className="text-[11px] text-slate-300">Indian Contract Act Bailee Lien</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Deficit Recovery
              </span>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Order 37</p>
              <p className="text-[11px] text-slate-300">Fast Civil Summary Suit (&lt;12 Mos)</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Evidence Standard
              </span>
              <p className="text-lg sm:text-2xl font-black text-red-400">BSA s.63</p>
              <p className="text-[11px] text-slate-300">Certified WMS &amp; Barcode Audit Trails</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <WarehouseStorageLienTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Statutory Overview & Modern 3PL Crisis */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Crisis &bull; Statutory Foundation
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                The 3PL Dead-Stock Dilemma: Frozen Pallets, Lost Rent &amp; Tort Risks
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                The rapid expansion of direct-to-consumer (D2C) brands, omnichannel retail, and venture-funded e-commerce startups across India has created a silent balance-sheet catastrophe for third-party logistics (3PL) fulfillment centers and Grade-A contract warehousing hubs. Operators across major logistics clusters—including Bhiwandi, Bilaspur-Tauru Road, Luhari, Chakan, Sriperumbudur, Oragadam, and Dankuni—routinely dedicate hundreds of high-bay pallet positions to fast-growing consumer brands under Master Service Agreements (MSAs).
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                When a venture-backed startup experiences cash depletion, failed funding rounds, or catastrophic product-market collapse, its management frequently abandons slow-moving stock. The 3PL operator is trapped in a devastating commercial squeeze:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900">
                  <p className="font-bold text-xs uppercase tracking-wide text-red-700 mb-1">
                    Revenue &amp; Opportunity Loss
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-red-950">
                    500 to 2,000 pallet positions remain frozen for months, generating zero cash flow while the 3PL operator continues paying Grade-A warehouse lease rent, power, and security staff out of pocket.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                  <p className="font-bold text-xs uppercase tracking-wide text-amber-700 mb-1">
                    The Legal Conversion Trap
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-amber-950">
                    If the frustrated warehouse team unceremoniously dumps inventory into scrap yards or sells it privately, the debtor suddenly surfaces with aggressive advocates, filing suits for civil conversion (trover) and criminal complaints.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Overcoming this deadlock requires abandoning casual informal demands and executing the rigorous statutory framework governed by the Indian Contract Act, 1872, the Commercial Courts Act, 2015, and the Bharatiya Sakshya Adhiniyam, 2023. By establishing an unbroken legal chain of custody—from Section 170 bailee lien intimation to independent valuation, 15-day statutory power-of-sale notice, and public auction—the 3PL operator liquidates inventory lawfully and preserves the right to recover remaining deficits through an expedited{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  Order XXXVII CPC Summary Suit
                </Link>
                .
              </p>
            </section>

            {/* SECTION 2: Indian Contract Act s.170 & s.171 Mechanics */}
            <section
              id="heading-contract-act-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Anatomy &bull; Sections 170 vs 171
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Bailee’s Particular Lien (s.170) vs. Contractual General Lien (s.171)
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                The legal foundation of a warehouseman’s right to detain client cargo rests on the law of bailment under Chapter IX of the Indian Contract Act, 1872. Understanding the technical distinction between a <em>Particular Lien</em> and a <em>General Lien</em> is vital to avoiding procedural dismissal in the Commercial Court:
              </p>

              {/* Statutory Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-xs uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded">
                      Section 170 Contract Act
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">Particular Lien</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Labor, Skill &amp; Value Addition on Goods
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    Section 170 confers an automatic statutory lien upon any bailee who has, in accordance with the purpose of bailment, rendered any service involving the exercise of <strong>labor or skill</strong> in respect of the goods. In modern fulfillment centers, this encompasses:
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>SKU-level barcode labeling, scanning, and pallet put-away.</li>
                    <li>Order pick-and-pack, shrink-wrapping, and secondary packaging.</li>
                    <li>Temperature, humidity, and cleanroom atmospheric maintenance.</li>
                    <li>Quality-control grading, return sorting, and serialization.</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 mt-3 italic">
                    Limitation: Applies strictly to the specific batch or pallet of goods on which the labor was expended.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-xs uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded">
                      Section 171 Contract Act
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">General Lien</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Contractual Cross-Consignment Retention
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    Under Section 171, bankers, factors, wharfingers, and attorneys hold an automatic general lien. For commercial 3PLs, the statute permits a general lien <strong>only if there is an express agreement to that effect</strong> in the written contract:
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Enables holding current fresh stock for overdue bills on older dead stock.</li>
                    <li>Permits cross-collateralization across multiple warehouse facilities.</li>
                    <li>Covers accrued minimum space guarantees, demurrage, and WMS fees.</li>
                    <li>Must be explicitly drafted in the Master Service Agreement (MSA).</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 mt-3 italic">
                    Critical Rule: Possessory lien requires uninterrupted physical custody; unauthorized release waives the lien forever.
                  </p>
                </div>
              </div>

              {/* Crucial Statutory Warning Box */}
              <div className="rounded-xl bg-amber-50 border-l-4 border-amber-500 p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <span className="font-bold text-amber-800 uppercase tracking-wide block mb-1">
                  Practitioner Caution &bull; Loss of Lien Upon Delivery
                </span>
                A bailee’s lien is strictly possessory. Under Indian law, once goods are loaded onto the client’s trucks and pass the facility security gate, the lien is extinguished. 3PL managers must never release high-value fast-moving inventory on oral promises or post-dated cheques while retaining low-value dead stock, as this deprives the business of its primary recovery security.
              </div>
            </section>

            {/* SECTION 3: Landmark Court Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Precedents &bull; Supreme Court &amp; High Courts
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Judicial Rulings on Warehouse Liens, Power of Sale &amp; Conversion Suits
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                When asserting a warehouseman lien or defending against bad-faith criminal complaints, 3PL CFOs and corporate counsel can rely on authoritative holdings from the Supreme Court of India, Delhi High Court, and NCLAT:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 p-5 bg-white relative overflow-hidden shadow-xs"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-slate-900">{item.parties}</span>
                      <span className="text-[11px] font-mono text-[#DC2626] font-bold bg-red-50 px-2 py-0.5 rounded">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-semibold mb-3">{item.date}</p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <div>
                        <strong className="text-slate-900">Core Issue: </strong>
                        <span>{item.facts}</span>
                      </div>
                      <div>
                        <strong className="text-slate-900">Judicial Holding: </strong>
                        <span>{item.holding}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                          {item.amount}
                        </span>
                        <span className="text-slate-600 font-medium">
                          <strong>Strategic Rule: </strong>
                          {item.takeaway}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: Decision Tree Flowchart (Visual SVG + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Decision Tree &bull; Escalation Architecture
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                3PL Warehouse Default &amp; Dead-Stock Liquidation Flowchart
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Follow this sequential decision tree to navigate client non-payment, prevent conversion claims, and determine whether to conduct a public auction or file an Order 37 summary suit:
              </p>

              {/* Desktop SVG Visual Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 860 380"
                  className="w-full h-auto text-white font-sans"
                  style={{ minWidth: "750px" }}
                  width={860}
                  height={380}
                  aria-label="3PL Warehouse Default and Auction Decision Tree Flowchart"
                >
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Node 1: Trigger */}
                  <rect x="20" y="20" width="180" height="70" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="110" y="45" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">TRIGGER: BILL DEFAULT</text>
                  <text x="110" y="65" textAnchor="middle" fill="#E2E8F0" fontSize="10">Storage Bill &gt; 30 Days Overdue</text>
                  <text x="110" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">Client Ghosting / Unresponsive</text>

                  {/* Line 1 -> 2 */}
                  <line x1="200" y1="55" x2="250" y2="55" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Node 2: WMS Freeze */}
                  <rect x="250" y="20" width="180" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="340" y="45" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">STEP 1: POSSESSORY LIEN</text>
                  <text x="340" y="65" textAnchor="middle" fill="#E2E8F0" fontSize="10">Lock WMS Dispatch Privileges</text>
                  <text x="340" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">Serve Sec. 170 Bailee Notice</text>

                  {/* Line 2 -> 3 */}
                  <line x1="430" y1="55" x2="480" y2="55" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Node 3: Inventory Valuation */}
                  <rect x="480" y="20" width="180" height="70" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="570" y="45" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STEP 2: ASSET VALUATION</text>
                  <text x="570" y="65" textAnchor="middle" fill="#E2E8F0" fontSize="10">Govt-Registered IBBI Valuer</text>
                  <text x="570" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">Lot Catalog &amp; Salvage Worth</text>

                  {/* Line 3 -> Branch Decision */}
                  <line x1="660" y1="55" x2="710" y2="55" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Node 4: 15-Day Notice */}
                  <rect x="710" y="20" width="130" height="70" rx="8" fill="#991B1B" stroke="#DC2626" strokeWidth="2" />
                  <text x="775" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">STEP 3: 15D NOTICE</text>
                  <text x="775" y="65" textAnchor="middle" fill="#FEE2E2" fontSize="10">Power-of-Sale Notice</text>
                  <text x="775" y="80" textAnchor="middle" fill="#FECACA" fontSize="9">Speed Post + Email</text>

                  {/* Downward Lines */}
                  <line x1="775" y1="90" x2="775" y2="150" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Node 5: Condition: Paid vs Unpaid */}
                  <polygon points="775,150 840,195 775,240 710,195" fill="#0F172A" stroke="#FBBF24" strokeWidth="2" />
                  <text x="775" y="192" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="bold">15 DAYS</text>
                  <text x="775" y="207" textAnchor="middle" fill="#E2E8F0" fontSize="9">EXPIRED?</text>

                  {/* Branch Paid */}
                  <line x1="710" y1="195" x2="520" y2="195" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
                  <rect x="340" y="165" width="180" height="60" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="430" y="190" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">CLIENT PAYS FULL DUES</text>
                  <text x="430" y="210" textAnchor="middle" fill="#D1FAE5" fontSize="10">Release Goods &amp; Reset Account</text>

                  {/* Branch Unpaid -> Auction */}
                  <line x1="775" y1="240" x2="775" y2="280" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  <rect x="680" y="280" width="170" height="75" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="765" y="305" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 4: PUBLIC AUCTION</text>
                  <text x="765" y="325" textAnchor="middle" fill="#E2E8F0" fontSize="10">Newspaper Ads + E-Auction</text>
                  <text x="765" y="342" textAnchor="middle" fill="#94A3B8" fontSize="9">Proceeds Deducted from Ledger</text>

                  {/* Auction -> Deficit Summary Suit */}
                  <line x1="680" y1="315" x2="490" y2="315" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  <rect x="290" y="280" width="200" height="75" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                  <text x="390" y="305" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="bold">STEP 5: DEFICIT SUMMARY SUIT</text>
                  <text x="390" y="325" textAnchor="middle" fill="#E2E8F0" fontSize="10">Order XXXVII CPC in Commercial Court</text>
                  <text x="390" y="342" textAnchor="middle" fill="#94A3B8" fontSize="9">Recover Shortfall + 18% Interest</text>

                  {/* Attachment */}
                  <line x1="290" y1="315" x2="160" y2="315" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
                  <rect x="20" y="280" width="140" height="75" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="90" y="305" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">ASSET FREEZE</text>
                  <text x="90" y="325" textAnchor="middle" fill="#E2E8F0" fontSize="10">Order 38 Rule 5 CPC</text>
                  <text x="90" y="342" textAnchor="middle" fill="#94A3B8" fontSize="9">Bank Accounts Attached</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards Fallback */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                  <p className="font-bold text-xs text-red-400 uppercase">Phase 1: Default &amp; WMS Freeze</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Invoice unpaid past 30 days. Lock outbound dispatch privileges; issue formal Section 170 bailee lien notice.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-500">
                  <p className="font-bold text-xs text-amber-400 uppercase">Phase 2: Independent Valuation</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Empanel an IBBI-registered valuer. Compile itemized lot list, condition report, and fair salvage market valuation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-600">
                  <p className="font-bold text-xs text-red-400 uppercase">Phase 3: 15-Day Statutory Notice</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Serve advocate demand giving 15 clear days for total debt redemption before public auction via Speed Post RPAD &amp; Email.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-blue-500">
                  <p className="font-bold text-xs text-blue-400 uppercase">Phase 4: Public Auction &amp; Ledger Adjustment</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Advertise in national &amp; vernacular dailies. Conduct e-auction; adjust net proceeds against total storage billing.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                  <p className="font-bold text-xs text-emerald-400 uppercase">Phase 5: Deficit Summary Suit (CPC Order 37)</p>
                  <p className="text-xs text-slate-300 mt-1">
                    File in Commercial Court for remaining unpaid balance plus 18% commercial interest and attachment of debtor bank accounts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Recoverable Heads Matrix */}
            <section
              id="heading-recoverable-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cost Head Classification &bull; Statutory Matrix
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Recoverable Heads of Claim in 3PL Warehouse Default Disputes
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                When compiling an advocate legal notice or filing an Order XXXVII CPC summary plaint, 3PL finance teams must categorize claims into specific statutory heads backed by documentary evidence:
              </p>

              {/* Dark Table Header Matrix */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Cost Head</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Statutory Authority</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Mandatory Evidence</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Enforceability Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {RECOVERABLE_HEADS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900 align-top">
                          {row.category}
                        </td>
                        <td className="py-3 px-4 text-slate-700 align-top">
                          {row.statutoryBasis}
                        </td>
                        <td className="py-3 px-4 text-slate-600 align-top font-mono text-[11px]">
                          {row.evidentiaryProof}
                        </td>
                        <td className="py-3 px-4 text-slate-800 align-top font-medium">
                          {row.enforceability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: 4 Commercial Failure Scenarios (Interactive Component) */}
            <section
              id="heading-failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Strategy &bull; Commercial Scenarios
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                4 Critical 3PL Default Scenarios &amp; Tailored Recovery Action Plans
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Select your specific operational bottleneck below to inspect the governing statutory provisions, commercial traps, and tactical recovery steps:
              </p>

              <WarehouseStorageScenarioTabs />
            </section>

            {/* SECTION 7: Worked Financial Calculation Box (500 Pallets Case Study) */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Empirical Financial Audit &bull; Worked Recovery Ledger
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: 500-Pallet D2C Abandonment &amp; Deficit Summary Suit
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Consider an institutional 3PL operator holding a 12-month fulfillment contract with a D2C footwear brand at a Grade-A warehouse in Bilaspur (Haryana). The brand defaults after 6 months, leaving 500 pallets of slow-moving inventory blocking prime multi-tier racking:
              </p>

              {/* Financial Ledger Box */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7 shadow-xl border border-slate-700">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-700">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Commercial Claim Ledger &bull; 500 Pallets (6-Month Default Period)
                  </span>
                  <span className="text-xs font-mono text-slate-300">Ref: 3PL-BIL-2026-REC</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">1. Unpaid Monthly Storage (500 Pallets @ ₹700/pallet x 6 Mos)</span>
                    <span className="font-mono font-bold text-slate-100">₹21,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">2. Inward Handling, Unloading &amp; Put-Away (12 Containers)</span>
                    <span className="font-mono font-bold text-slate-100">₹1,80,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">3. WMS Software License &amp; Order Sync Integration (6 Mos)</span>
                    <span className="font-mono font-bold text-slate-100">₹90,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">4. Valuation Fees (Government Registered Valuer)</span>
                    <span className="font-mono font-bold text-slate-100">₹35,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">5. Public Auction Newspaper Advertisements (English &amp; Hindi Dailies)</span>
                    <span className="font-mono font-bold text-slate-100">₹75,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b-2 border-slate-600 text-sm sm:text-base font-bold">
                    <span className="text-white">Gross Accrued Creditor Claim (A)</span>
                    <span className="font-mono text-red-400">₹24,80,000</span>
                  </div>

                  {/* Auction Realization */}
                  <div className="pt-2 text-slate-300">
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-emerald-300">
                        Less: Gross Public Auction Realization (500 Pallets Sold to Salvage Wholesaler)
                      </span>
                      <span className="font-mono font-bold text-emerald-400">(₹7,20,000)</span>
                    </div>
                  </div>

                  {/* Net Deficit */}
                  <div className="flex justify-between py-3 rounded-xl bg-white/5 px-4 border border-white/10 text-sm sm:text-base font-black">
                    <span className="text-amber-300">Net Unrecovered Deficit for CPC Order 37 Suit (A - B)</span>
                    <span className="font-mono text-amber-300">₹17,60,000</span>
                  </div>

                  <div className="flex justify-between py-1.5 text-xs text-slate-400 pt-1">
                    <span>Statutory Commercial Pre-Suit Interest (18% p.a. under Interest Act, 1978)</span>
                    <span className="font-mono">₹1,58,400</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-slate-300 font-semibold">
                    Enforcement Venue: Gurugram Commercial Court (Pecuniary Threshold &gt; ₹3 Lakhs)
                  </span>
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="text-red-400 hover:text-red-300 font-bold underline"
                  >
                    View Invoice Recovery Protocols &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 8: 15-Day Public Auction Disposal SOP */}
            <section
              id="heading-auction-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Standard Operating Procedure &bull; 7-Step Playbook
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                The 7-Step Lawful Bailee Auction &amp; Disposal SOP
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Executing a public auction without inviting civil damages or police interference requires strict adherence to this 7-step statutory SOP:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">1</span>
                    Issue Section 170 Bailee Lien Intimation &amp; Freeze WMS
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Upon default exceeding contractual cure terms (typically 30 days), issue formal notice placing a possessory lien on all inventory. Immediately de-authorize the client’s ERP/API access and lock warehouse management system (WMS) outward dispatches.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">2</span>
                    Independent Government Valuation &amp; SKU Lotting
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Empanel an IBBI-registered valuer or Income Tax Rule 112 certified valuer. Conduct a physical bin-by-bin inventory count, inspect packaging condition, check expiration dates (for cosmetics/food), and obtain a formal Valuation Certificate establishing distress market value.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">3</span>
                    Serve 15-Day Final Statutory Power-of-Sale Notice
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Issue an advocate legal notice under Section 170 Indian Contract Act and contract disposal clauses. Give exactly 15 clear days to redeem inventory by clearing total outstanding storage, handling, and valuation bills. Dispatch simultaneously via Registered Speed Post AD, courier, WhatsApp, and registered corporate email.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">4</span>
                    Public Auction Tender Publication in National Dailies
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Publish public auction notices in one leading national English daily and one regional vernacular newspaper having wide circulation in the warehouse district. State SKU categories, pallet counts, reserve price based on the valuation report, and auction date/portal.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">5</span>
                    Conduct Transparent Public E-Auction or Sealed-Bid Sale
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Execute the auction through an established liquidator, e-auction platform, or sealed-envelope tender in the presence of an advocate commissioner. Maintain full KYC records of all bidders, bid increment sheets, and winning payment receipts.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">6</span>
                    Appropriate Proceeds &amp; Issue Final Settlement Statement
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Deduct advertising, valuation, auctioneer commissions, and legal costs from gross proceeds. Apply the net balance to accrued storage and handling invoices. Formally transmit an itemized Statement of Realization to the debtor with a demand for the remaining deficit.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
                  <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[11px] font-bold">7</span>
                    Initiate Deficit Recovery Suit Under Order XXXVII CPC
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    File a summary recovery plaint in the designated Commercial Court under Order XXXVII Rule 1(2)(b) CPC for the unpaid deficit balance. Concurrently petition under Order XXXVIII Rule 5 CPC for attachment before judgment against the debtor company’s active bank accounts and receivables.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Digital Evidence Checklist under BSA 2023 s.63 */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Documentary Protocol &bull; Electronic Evidence
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier for 3PL Commercial Litigation
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63, replacing Section 65B of the Indian Evidence Act, 1872), electronic records generated by automated warehouse management systems (WMS) are fully admissible in court provided they are accompanied by a certified electronic record certificate:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-xs text-slate-900 uppercase">1. Executed Master Service Agreement</p>
                  <p className="text-xs text-slate-600">
                    Signed MSA, Warehousing Terms, Rate Card Annexure with minimum guaranteed pallet commitments, power-of-sale terms, and interest clauses.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-xs text-slate-900 uppercase">2. Inward Goods Receipt Notes (GRN)</p>
                  <p className="text-xs text-slate-600">
                    Signed lorry receipts, e-way bills, container de-stuffing tallies, and GRN receipts establishing exact quantity and condition of cargo admitted.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-xs text-slate-900 uppercase">3. WMS Database Activity &amp; Pallet Logs</p>
                  <p className="text-xs text-slate-600">
                    Exported SQL logs showing daily pallet position allocations, bin rack addresses, timestamped barcode scans, and pick-pack event histories.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-xs text-slate-900 uppercase">4. Statutory BSA 2023 s.63 Certificate</p>
                  <p className="text-xs text-slate-600">
                    Mandatory affidavit executed by the warehouse IT administrator certifying server custody, database integrity, and automated uncorrupted printouts.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-xs text-slate-900 uppercase">5. GST Invoices &amp; Ledger Confirmation</p>
                  <p className="text-xs text-slate-600">
                    Filed GSTR-1 reports proving invoice transmission, unpaid GST tax invoices, and periodic balance confirmation emails from the client.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-xs text-slate-900 uppercase">6. Speed Post RPAD &amp; Digital Tracking</p>
                  <p className="text-xs text-slate-600">
                    Original India Post registered postal receipts, official online delivery tracking confirmations, WhatsApp blue-tick read receipts, and email headers.
                  </p>
                </div>
              </div>

              {/* Inline Secondary CTA */}
              <div className="mt-8">
                <WarehouseStorageLienCTA variant="inline" />
              </div>
            </section>

            {/* SECTION 10: Frequently Asked Questions (Accordion) */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Executive FAQ &bull; Legal Clarifications
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions on 3PL Warehouse Liens &amp; Dead-Stock Auctions
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Common questions answered by logistics and contract litigation advocates:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-2 font-bold text-slate-900 text-sm sm:text-base">
                      <span>{faq.question}</span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 11: Statutory Sources Table */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Bare Act &bull; Statutory Matrix
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Primary Statutory Authorities &amp; Legislative References
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Official statutory provisions governing warehousing liens, commercial summary suits, and electronic proofs in India:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Enactment</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Relevant Provisions</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Official Legislative Portal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">{source.title.split("(")[0]}</td>
                        <td className="py-3 px-4 text-slate-600">{source.title.match(/\((.*?)\)/)?.[1] || "All sections"}</td>
                        <td className="py-3 px-4">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-[#DC2626] hover:text-[#B91C1C] font-semibold underline"
                          >
                            India Code &rarr;
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Author / Legal Reviewer Attribution */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm shrink-0">
                AAM
              </div>
              <div className="flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900">
                  Advocate Vetting &bull; Anuj Anand Malik
                </p>
                <p className="text-slate-500 text-[11px] mb-1">
                  Advocate &amp; Founder, AMA Legal Solutions &bull; Bar Council of Delhi &bull; Supreme Court Bar Association
                </p>
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <p className="text-[11px] text-slate-500">
                  Specializing in institutional B2B debt recovery, freight &amp; supply-chain litigation, commercial bailment liens, and Commercial Court summary proceedings.
                </p>
              </div>
            </div>

            {/* Sibling Spokes Cross-Links Strip */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Related Logistics &amp; Freight Debt Recovery Playbooks
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <Link
                  href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-medium text-slate-800 hover:text-[#DC2626] flex items-center justify-between"
                >
                  <span>Carrier Lien: Holding Cargo for Unpaid Freight</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/truck-detention-halting-charges-container-demurrage-recovery"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-medium text-slate-800 hover:text-[#DC2626] flex items-center justify-between"
                >
                  <span>Recovering Halting, Detention &amp; Demurrage Dues</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-medium text-slate-800 hover:text-[#DC2626] flex items-center justify-between"
                >
                  <span>CHA &amp; Freight Forwarder Customs Duty Recovery</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/tools/b2b-debt-recovery-legal-forum-selector"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-medium text-slate-800 hover:text-[#DC2626] flex items-center justify-between"
                >
                  <span>B2B Recovery Forum Selector (MSME vs Order 37 vs IBC)</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Bottom Dual-Track B2B CTA */}
            <div className="pt-4">
              <WarehouseStorageLienCTA variant="primary" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
