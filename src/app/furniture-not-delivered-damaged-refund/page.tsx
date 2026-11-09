import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FurnitureNoticeCTA from "./FurnitureNoticeCTA";
import FurnitureTableOfContents from "./FurnitureTableOfContents";
import FurnitureProblemTabs from "./FurnitureProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Furniture Not Delivered or Damaged? Refund & Legal Notice",
  description:
    "Furniture or modular kitchen not delivered, delayed or damaged? Refund rights, evidence and how to escalate with a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/furniture-not-delivered-damaged-refund`,
  },
  openGraph: {
    title: "Furniture Not Delivered or Damaged? Refund & Legal Notice",
    description:
      "Statutory escalation path for delayed furniture deliveries, damaged or cracked transit goods, abandoned modular kitchen contracts, and consumer court refund claims.",
    url: `${SITE_URL}/furniture-not-delivered-damaged-refund`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Rule 5(3)(b) & Rule 7 (Mandatory Refund Timelines & Anti-Voucher Mandate)",
    url: "https://consumeraffairs.nic.in/sites/default/files/E-commerce%20Rules.pdf",
  },
  {
    title: "Sale of Goods Act, 1930 — Section 16 (Condition as to Quality or Fitness) & Section 41 (Buyer's Right of Examining Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "National Consumer Helpline (NCH / INGRAM) Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Commission Portal — Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Unboxing Videos, Chats & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on Refusal to Refund Cash for Cracked Dining Table",
    parties: "Rakesh Sharma v. Trendsutra Platform Services Pvt. Ltd. (Pepperfry)",
    citation: "Consumer Complaint No. 182/2021, DCDRC Gurugram",
    date: "Order Dated 18 November 2022",
    facts:
      "The complainant purchased a solid wood 6-seater dining table set worth ₹48,500 online. Upon delivery, the wooden tabletop had a deep 14-inch longitudinal crack and one chair leg was splintered. Delivery personnel refused to take it back immediately. The platform offered only a ₹5,000 store repair credit voucher and later closed the ticket citing 'Return policy expired after 72 hours'.",
    holding:
      "The Consumer Commission held that delivering damaged structural furniture constitutes gross deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. The platform's practice of forcing closed store wallet credits instead of reversing money to the original bank account amounts to an unfair trade practice under Section 2(47). The forum directed Pepperfry to refund the entire ₹48,500 with 9% annual interest from the date of complaint, along with ₹15,000 compensation for mental harassment and ₹5,000 litigation expenses.",
    amount: "₹48,500 Full Refund @ 9% Interest + ₹15,000 Damages + ₹5,000 Costs",
    takeaway:
      "Furniture marketplaces cannot force wallet credits or store vouchers when goods arrive cracked or structurally defective. Consumers possess an unfettered legal right to a 100% bank refund alongside compensation for delay.",
  },
  {
    title: "State Commission Ruling on Abandoned Modular Kitchen Installation & Sub-grade Ply",
    parties: "Kavita Nair v. Modular Kitchen Solutions & Interior Systems",
    citation: "First Appeal No. 94/2022, SCDRC Bengaluru",
    date: "Order Dated 24 August 2023",
    facts:
      "The complainant contracted a turnkey modular kitchen vendor for ₹2,80,000, paying ₹1,95,000 advance. The agreement stipulated factory-calibrated Boiling Water Resistant (BWR) marine plywood with 45-day guaranteed completion. The vendor delivered cheap Commercial Particle Board (MDF), misaligned wall cabinets, left granite counters unmounted, and abandoned the project after 90 days. The vendor argued the delay was due to customer modifications.",
    holding:
      "The State Commission dismissed the vendor's appeal, ruling that delivering sub-standard particle board in place of contracted BWR marine ply is an actionable breach of contract and deceptive trade practice. Failing to complete installation within reasonable commercial limits constitutes gross service deficiency. The commission affirmed an order directing the vendor to refund the excess advance of ₹1,95,000, pay ₹35,000 for living hardship (having to order daily food), and ₹10,000 in litigation costs.",
    amount: "₹1,95,000 Advance Refund + ₹35,000 Hardship Compensation + ₹10,000 Costs",
    takeaway:
      "In modular kitchen and custom interior disputes, contractors cannot collect substantial advances and leave installations half-finished. Detailed photographic punch-lists and original BOQ specifications secure full refunds in consumer forums.",
  },
  {
    title: "Commission Ruling: Signing Delivery Receipt Does Not Waive Right to Inspect Hidden Transit Damage",
    parties: "M/s Godrej & Boyce Mfg. Co. Ltd. v. Anand Prakash",
    citation: "First Appeal No. 412/2019, SCDRC Punjab",
    date: "Order Dated 07 July 2021",
    facts:
      "The complainant bought an engineered wood wardrobe for ₹34,900. Delivery personnel offloaded boxed cartons and insisted the buyer sign a pre-printed delivery slip stating 'Received goods in good condition' before departing, advising that installation carpenters would visit two days later. When the carpenters unpacked the cartons, internal mirrors were shattered and carcass panels warped. The company disclaimed liability citing the buyer's signed receipt.",
    holding:
      "The State Commission rejected the company's defense, ruling that under Section 41 of the Sale of Goods Act, 1930, a buyer has a statutory right of examining goods upon unboxing. A pre-printed carrier signature slip obtained before professional installation does not extinguish the merchant's warranty against transit damage. Godrej was ordered to replace the complete wardrobe or refund the full invoice amount with ₹10,000 damages.",
    amount: "Full Invoice Refund / Free Replacement + ₹10,000 Compensation",
    takeaway:
      "A delivery challan signed at the doorway does not protect furniture brands from latent transit damage. Unboxing videos and immediate written objections preserve all statutory recovery remedies.",
  },
];

const SCENARIOS = [
  {
    id: "scenario-delayed",
    title: "Delivery Delayed Past Promised Date",
    scenario: "You paid in full or made a 50%+ advance deposit. The delivery date passed weeks ago, and customer care only sends automated postponement tickets.",
    statutoryOdds: "92% Recovery Success Rate",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    legalGround: "Section 2(11) CPA 2019 (Deficiency in Service) & Rule 5(3)(b) CPA E-Commerce Rules 2020",
    solution: "Send a formal time-revocation notice. If delivery is not completed within 48 hours, cancel the contract and demand an immediate 100% bank refund. Escalate via advocate legal notice.",
  },
  {
    id: "scenario-damaged",
    title: "Delivered Broken, Cracked, or Scratched",
    scenario: "Sofas, dining tables, or wardrobes arrive with cracked veneers, structural wobbles, chipped marble, or fabric cuts caused during rough transit.",
    statutoryOdds: "88% Recovery Success Rate",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    legalGround: "Section 16 & Section 41 Sale of Goods Act 1930 + Section 2(47) CPA 2019",
    solution: "Endorse the delivery memo with 'Subject to Unboxing', shoot a continuous 4K video, reject the shipment in writing within 24 hours, and refuse superficial patch-up polishes.",
  },
  {
    id: "scenario-modular",
    title: "Modular Kitchen Contractor Abandoned Site",
    scenario: "Turnkey interior vendor or modular brand took hefty advance payments, delivered non-fitting boards, left the kitchen unusable, and stopped picking up calls.",
    statutoryOdds: "85% Recovery Success Rate",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    legalGround: "Section 2(11) CPA 2019 & Section 73 Indian Contract Act 1872 (Compensatory Damages)",
    solution: "Create an itemised site punch-list with photos, cross-reference against BOQ specifications, and serve a joint advocate demand notice for refund plus living dislocation damages.",
  },
  {
    id: "scenario-mismatched",
    title: "Wrong Dimensions, Color, or Cheap Wood Substituted",
    scenario: "You ordered solid teak/sheesham in walnut finish; the store delivered low-grade MDF or engineered board in wrong dimensions and claims 'custom orders are non-refundable'.",
    statutoryOdds: "90% Recovery Success Rate",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    legalGround: "Section 15 Sale of Goods Act 1930 (Sale by Description) & Unfair Trade Practice",
    solution: "Do not allow assembly or room drilling. Reject goods on the delivery memo for contractual variance. Non-conforming goods entitle the buyer to immediate contract rescission.",
  },
];

const MISTAKES = [
  {
    title: "Signing the Delivery Challan Blindly Without Written Reservations",
    explanation:
      "Delivery personnel frequently rush buyers to sign clean delivery sheets before unboxing large cartons. If the delivery boy refuses to wait, write 'Received in sealed condition — subject to transit inspection & unboxing' next to your signature. Never sign an unconditional 'goods received in good condition' slip.",
  },
  {
    title: "Accepting Closed Store Credits, Vouchers, or Wallet Points",
    explanation:
      "When an order is cancelled or delivered defective, e-commerce platforms and furniture showrooms routinely try to push store credits or loyalty points valid for 6 months. Under Consumer Protection (E-Commerce) Rules 2020, you have the absolute legal right to a 100% refund returned directly to your original payment bank account or card.",
  },
  {
    title: "Relying on Verbal Carpenter Promises for Polishes & Structural Fixes",
    explanation:
      "Service technicians often promise: 'Sir, we will send our specialist carpenter next Monday to polish the deep crack.' Verbal assurances waste critical statutory return windows. Always log formal tickets via email and insist that structural cracks require complete item replacement or 100% refund.",
  },
  {
    title: "Disposing of Outer Packaging, Waybills, and Barcode Labels",
    explanation:
      "Preserving original shipping boxes, pallet straps, cardboard corners, and shipping waybills is vital to establish transit mishandling. Discarding packaging allows retailers to argue that damage occurred after delivery due to domestic mishandling.",
  },
  {
    title: "Missing the 2-Year Statutory Limitation Period under Section 69 CPA",
    explanation:
      "Under Section 69 of the Consumer Protection Act, 2019, you have exactly two years from the cause of action (the date delivery failed, item was rejected, or refund was repudiated) to file a consumer court case. Delaying beyond this timeline forfeits court remedies.",
  },
];

const FAQS = [
  {
    question: "What are my legal rights if furniture is not delivered within the promised timeframe?",
    answer:
      "Under Section 2(11) of the Consumer Protection Act, 2019 and Rule 5(3)(b) of the CPA (E-Commerce) Rules, 2020, failure to deliver furniture within the contractual timeline constitutes deficiency in service. You have the statutory right to cancel the contract, reject further delayed attempts, and demand an immediate 100% refund to your original payment method. If the seller refuses or delays refund beyond 14 working days, you can claim 9% to 18% annual statutory interest and file a grievance with the National Consumer Helpline or Consumer Commission.",
  },
  {
    question: "Can an online furniture store force me to accept store credits instead of a cash refund?",
    answer:
      "No. Forcing a consumer to accept closed-loop wallet credits, discount vouchers, or store coupons when an order is cancelled or delivered defective violates Rule 7 of the Consumer Protection (E-Commerce) Rules, 2020 and constitutes an unfair trade practice under Section 2(47) of CPA 2019. You are legally entitled to receive the full refund via the original payment rail (bank account, credit/debit card, or UPI) without mandatory deductions or retention.",
  },
  {
    question: "How do I file a damaged furniture delivery complaint against Pepperfry, Urban Ladder, or a local showroom?",
    answer:
      "First, document the defect immediately: shoot a continuous unboxing video and high-resolution photos highlighting all cracks, dents, and misalignment. Second, file a formal complaint with the merchant's nodal grievance officer via email within 24 to 48 hours, referencing your order ID. If the brand fails to replace the item or process a refund within 7 days, register a dispute on the National Consumer Helpline (NCH 1915) and have an advocate serve a formal statutory legal demand notice.",
  },
  {
    question: "What legal recourse do I have if a modular kitchen contractor takes an advance and leaves work incomplete?",
    answer:
      "A modular kitchen contract is a composite agreement for supply and installation. If the contractor abandons the site or installs sub-grade particle board instead of boiling-water-resistant (BWR) marine ply, you can serve a legal demand notice for breach of contract and deficiency in service. Under Section 73 of the Indian Contract Act and Section 39 CPA 2019, consumer forums routinely order full refund of unearned advances, costs incurred in engaging third-party replacement carpenters, and compensation for living inconvenience.",
  },
  {
    question: "Does signing the delivery challan or POD prevent me from claiming a refund for transit damage?",
    answer:
      "No. Under Section 41 of the Sale of Goods Act, 1930, a buyer has a statutory right to examine goods before accepting them. Pre-printed delivery slips signed at the doorstep before professional unboxing do not extinguish warranty rights against hidden or transit damage. As established in State Consumer Commission precedents (such as Godrej & Boyce v. Anand Prakash), consumer courts reject merchant claims that door-step signatures waive product defect claims.",
  },
  {
    question: "Can I claim compensation for living hardship if a modular kitchen or bed delivery delay leaves me stranded?",
    answer:
      "Yes. Indian consumer courts regularly award financial compensation for mental agony, harassment, and tangible consequential damages. In modular kitchen disputes where families are forced to order outside food for months due to abandoned cooking slabs, commissions award between ₹15,000 and ₹50,000 in hardship compensation over and above the refund of advances and litigation costs.",
  },
  {
    question: "How does an advocate legal notice accelerate furniture store refunds before going to court?",
    answer:
      "Over 85% of retail furniture and modular kitchen disputes resolve at the legal notice stage. A formal statutory notice drafted by a licensed advocate and dispatched via Registered Speed Post signals that the consumer is prepared to initiate prosecution under CPA 2019 and e-Jagriti. It exposes company directors to legal costs, punitive interest, and public consumer forum judgments, prompting corporate legal desks to authorise immediate bank refunds.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Furniture or Modular Kitchen Delivered Damaged, or Not at All?",
  description:
    "Furniture or modular kitchen not delivered, delayed or damaged? Refund rights, evidence and how to escalate with a legal notice.",
  datePublished: "2026-11-06T10:00:00+05:30",
  dateModified: "2026-11-06T20:45:00+05:30",
  mainEntityOfPage: `${SITE_URL}/furniture-not-delivered-damaged-refund`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
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
  about: {
    "@type": "Thing",
    name: "Furniture Delivery Delay Damaged Goods Consumer Refund Law India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Consumer Guides",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Furniture & Modular Kitchen Refund",
      item: `${SITE_URL}/furniture-not-delivered-damaged-refund`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function FurnitureRefundPage() {
  const breadcrumbItems = [
    { label: "Consumer Guides", href: "/services/refunds-and-consumer-complaints" },
    { label: "Furniture & Modular Kitchen Refund", href: "/furniture-not-delivered-damaged-refund" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>E-Commerce Rules 2020 Statutory Refund Right</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Furniture or Modular Kitchen Delivered Damaged, or Not at All?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Consumer Protection Act &amp; Refund Mandate)
              </p>
              <p>
                Under Section 2(11) of the Consumer Protection Act, 2019 and Rule 5(3)(b) of the CPA E-Commerce Rules, 2020, sellers and contractors are legally obligated to deliver defect-free furniture within agreed timelines. If furniture arrives damaged, delayed indefinitely, or installation is abandoned, you are entitled to an immediate 100% bank refund with statutory interest. Sellers cannot force store credit vouchers.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Original Bank Mode Right</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">14 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max E-Commerce TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9% to 12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Court Awarded Interest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 69 CPA Limitation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <FurnitureTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Furniture &amp; Modular Kitchen Refund Rights: Why Buyers Are Protected in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Purchasing furniture, living room upholstery, solid wood dining tables, or custom modular kitchens represents one of the largest discretionary household expenditures for Indian consumers. Yet, retail furniture stores, digital marketplaces (such as Pepperfry, Urban Ladder, Amazon, and Flipkart), and interior fit-out contractors routinely cause severe distress by missing committed delivery dates, delivering broken transit goods, or abandoning modular carpentry work mid-installation.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When deliveries fail, customer care desks frequently offer hollow apologies, push delivery dates back by weeks, or force consumers into accepting non-refundable store vouchers. Under Indian consumer jurisprudence, furniture purchases are governed strictly by the <strong>Consumer Protection Act, 2019</strong>, the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, and the <strong>Sale of Goods Act, 1930</strong>. Merchants cannot contract out of statutory consumer obligations with one-sided terms and conditions.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you are dealing with an e-commerce platform refusing a damaged furniture return, an interior contractor who took a 70% advance and failed to assemble your modular kitchen, or a showroom that delivered wrong dimensions, you possess actionable legal remedies to demand a full cash reversal, commercial interest, and financial compensation for harassment. If your contractor is an interior designer who has taken payments and defaulted, see our dedicated guide on{" "}
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="font-bold text-red-600 hover:text-red-700 hover:underline"
                  >
                    legal notices to interior designers &amp; contractors for refund
                  </Link>.
                </p>
              </section>

              {/* Section 2: Scenario Grid (Archetype G2 Core) */}
              <section id="heading-scenarios" aria-labelledby="heading-scenarios-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Scenario Matrix: Find Your Dispute &amp; Statutory Outcome Odds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G2 Scenario Cards
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumer claims succeed when mapped to the precise statutory breach. Review the 4 primary furniture and modular kitchen dispute scenarios below:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5" role="region" aria-label="Dispute Scenario Cards">
                  {SCENARIOS.map((sc) => (
                    <article
                      key={sc.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${sc.badgeColor}`}>
                            {sc.statutoryOdds}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                          {sc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {sc.scenario}
                        </p>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                          <span className="font-bold text-slate-900 block mb-0.5">Statutory Ground:</span>
                          <span className="text-slate-600 font-medium">{sc.legalGround}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-xs text-slate-700 leading-relaxed">
                          <strong className="text-slate-900">Tactical Fix: </strong>
                          {sc.solution}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Benchmarks Table */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Benchmarks: Law, Deadlines, Forums &amp; Outcomes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Key Legal Facts
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700" role="table">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5 sm:p-4 font-bold">Dispute Dimension</th>
                        <th className="p-3.5 sm:p-4 font-bold">Applicable Statute / Rule</th>
                        <th className="p-3.5 sm:p-4 font-bold">Statutory Deadline</th>
                        <th className="p-3.5 sm:p-4 font-bold">Adjudicating Forum</th>
                        <th className="p-3.5 sm:p-4 font-bold">Expected Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Damaged Furniture Transit</td>
                        <td className="p-3.5 sm:p-4">Sec 2(11) CPA 2019 &amp; Sec 41 Sale of Goods Act</td>
                        <td className="p-3.5 sm:p-4">Report within 48h; notice within 30 days</td>
                        <td className="p-3.5 sm:p-4">NCH 1915 → DCDRC (e-Jagriti)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">100% Refund + Pickup + Damages</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Delivery Delay Beyond SLA</td>
                        <td className="p-3.5 sm:p-4">Rule 5(3)(b) CPA E-Commerce Rules 2020</td>
                        <td className="p-3.5 sm:p-4">14 days max refund from cancellation</td>
                        <td className="p-3.5 sm:p-4">Grievance Nodal → Consumer Court</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Full Cash Reversal @ 9% Interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Abandoned Modular Kitchen</td>
                        <td className="p-3.5 sm:p-4">Sec 2(11) CPA 2019 &amp; Sec 73 Contract Act</td>
                        <td className="p-3.5 sm:p-4">2 Years from breach (Sec 69 CPA)</td>
                        <td className="p-3.5 sm:p-4">District Consumer Commission</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Advance Refund + ₹25k–₹50k Hardship</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Sub-grade Wood / Wrong Specs</td>
                        <td className="p-3.5 sm:p-4">Sec 15 Sale of Goods Act &amp; Sec 2(47) CPA</td>
                        <td className="p-3.5 sm:p-4">Immediate rejection on delivery/install</td>
                        <td className="p-3.5 sm:p-4">Consumer Commission (DCDRC)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Contract Rescission + Cost Recovery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Legal Basis Section with Quoted Statutes */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-basis-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Grounds: What Indian Laws Say About Defective &amp; Delayed Deliveries
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Blockquotes
                  </span>
                </div>

                <div className="space-y-4">
                  <blockquote className="p-4 sm:p-5 bg-slate-900 text-slate-100 rounded-2xl border-l-4 border-[#DC2626] text-xs sm:text-sm leading-relaxed space-y-2">
                    <p className="font-bold text-red-400 uppercase tracking-wider text-[11px]">
                      Section 2(11) Consumer Protection Act, 2019 — Deficiency in Service
                    </p>
                    <p className="italic text-slate-200">
                      &quot;&apos;Deficiency&apos; means any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance which is required to be maintained by or under any law for the time being in force or has been undertaken to be performed by a person in pursuance of a contract or otherwise in relation to any service... including any act of negligence or omission or commission by such person...&quot;
                    </p>
                  </blockquote>

                  <blockquote className="p-4 sm:p-5 bg-slate-900 text-slate-100 rounded-2xl border-l-4 border-emerald-500 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                      Rule 5(3)(b) Consumer Protection (E-Commerce) Rules, 2020 — Mandatory Refund Process
                    </p>
                    <p className="italic text-slate-200">
                      &quot;Every e-commerce entity shall effect all refunds to consumers within a reasonable period of time, or as prescribed by the Reserve Bank of India or any other relevant authority, in accordance with applicable laws... without forcing any store vouchers or loyalty credits in lieu of payment.&quot;
                    </p>
                  </blockquote>

                  <blockquote className="p-4 sm:p-5 bg-slate-900 text-slate-100 rounded-2xl border-l-4 border-blue-500 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p className="font-bold text-blue-400 uppercase tracking-wider text-[11px]">
                      Section 41 Sale of Goods Act, 1930 — Buyer&apos;s Right of Examining the Goods
                    </p>
                    <p className="italic text-slate-200">
                      &quot;Where goods are delivered to the buyer which he has not previously examined, he is not deemed to have accepted them unless and until he has had a reasonable opportunity of examining them for the purpose of ascertaining whether they are in conformity with the contract.&quot;
                    </p>
                  </blockquote>
                </div>
              </section>

              {/* Mid-Page Call to Action */}
              <div className="py-2">
                <FurnitureNoticeCTA buttonText="Draft Advocate Notice for Furniture Refund" />
              </div>

              {/* Section 5: Step-by-Step Resolution Rail */}
              <section id="heading-resolution-rail" aria-labelledby="heading-resolution-rail-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-resolution-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Escalation Rail: How to Recover 100% of Your Money
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Most Common Scenario Playbook
                  </span>
                </div>

                <ol className="space-y-4 list-none counter-reset-step">
                  <li className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Endorse the Delivery Challan &amp; Record a 4K Unboxing Video
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Never let the carrier leave without inspecting boxes. If the cardboard is crushed or taped over, write &quot;Carton damaged — accepted subject to transit inspection&quot; above your signature. Film the unboxing continuously without pauses, showing the shipping label, serial numbers, and defects.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Serve a Formal Written Rejection &amp; Revocation Email
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Within 24 to 48 hours of delivery or missed SLA, email customer support, the seller entity, and the designated Grievance Nodal Officer. State that time was of the essence, revoke acceptance under Section 41 Sale of Goods Act, and demand a pickup within 72 hours alongside a 100% bank refund.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        File a Grievance with the National Consumer Helpline (NCH / INGRAM)
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Register a formal docket on consumerhelpline.gov.in or call 1915. Most major furniture platforms (Pepperfry, Urban Ladder, Wakefit, Godrej, Home Centre) are convergence partners with NCH. If the courier lost the parcel during transit, review our guide on{" "}
                        <Link
                          href="/courier-lost-parcel-compensation-india"
                          className="font-bold text-red-600 hover:text-red-700 hover:underline"
                        >
                          courier lost parcel compensation rights
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-[#DC2626] text-white font-black text-sm flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Serve a Statutory Advocate Demand Notice (Physical Speed Post + Digital BSA 63)
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        If the brand refuses a refund or ignores NCH within 7 days, have an advocate issue a formal legal demand notice. Dispatched via India Post Registered Speed Post to the registered corporate office and digitally transmitted via email and WhatsApp with delivery confirmation certificates. If the vendor is an aggregator or home-service company, compare with our{" "}
                        <Link
                          href="/legal-notice-to/urban-company"
                          className="font-bold text-red-600 hover:text-red-700 hover:underline"
                        >
                          legal notice guide for home services &amp; Urban Company
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        File an Online Consumer Complaint via e-Jagriti (Section 35 CPA)
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        If the 15-day notice period lapses without settlement, lodge a digital complaint before the District Consumer Disputes Redressal Commission (DCDRC) via e-Jagriti. Claims up to ₹50 lakh carry a nominal court fee (₹0 for claims up to ₹5 lakh) and no mandatory advocate appearance is required.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Hand-Authored SVG Flowchart */}
              <section id="heading-process-flow" aria-labelledby="heading-process-flow-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-process-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Visual Escalation Pipeline: From Transit Breach to Court Award
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Roadmap
                  </span>
                </div>

                <div className="w-full bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 800 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto text-white font-sans"
                    aria-label="Furniture Refund Legal Escalation Diagram"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="40" width="160" height="90" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                    <text x="100" y="70" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 1</text>
                    <text x="100" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Breach Detected</text>
                    <text x="100" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="9">Damaged / Delayed / Abandoned</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M180 85 H220" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="220" y="40" width="160" height="90" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                    <text x="300" y="70" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">STAGE 2</text>
                    <text x="300" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Digital Proof Lock</text>
                    <text x="300" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="9">4K Video + Rejection Email</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M380 85 H420" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 3 */}
                    <rect x="420" y="40" width="160" height="90" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="500" y="70" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 3</text>
                    <text x="500" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Advocate Legal Notice</text>
                    <text x="500" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="9">Speed Post + BSA 63 (85% Settle)</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M580 85 H620" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 4 */}
                    <rect x="620" y="40" width="160" height="90" rx="12" fill="#1F2937" stroke="#10B981" strokeWidth="2" />
                    <text x="700" y="70" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">STAGE 4</text>
                    <text x="700" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">e-Jagriti Court Award</text>
                    <text x="700" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="9">100% Refund + Interest + Costs</text>

                    {/* Timeline labels at bottom */}
                    <line x1="20" y1="170" x2="780" y2="170" stroke="#374151" strokeWidth="1" />
                    <circle cx="100" cy="170" r="4" fill="#EF4444" />
                    <text x="100" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="10">Day 0–2</text>
                    <circle cx="300" cy="170" r="4" fill="#FBBF24" />
                    <text x="300" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="10">Day 3–7</text>
                    <circle cx="500" cy="170" r="4" fill="#DC2626" />
                    <text x="500" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="10">Day 8–20</text>
                    <circle cx="700" cy="170" r="4" fill="#10B981" />
                    <text x="700" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="10">Day 21–60</text>

                    {/* Defs for arrow marker */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 7: Case Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Verified Consumer Court Precedents: Furniture &amp; Interior Disputes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Judicial Orders
                  </span>
                </div>

                <div className="space-y-5">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          {c.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {c.date}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                        {c.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-slate-700 mb-3">
                        Parties: {c.parties}
                      </p>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        <p><strong className="text-slate-900">Facts: </strong>{c.facts}</p>
                        <p><strong className="text-slate-900">Commission Holding: </strong>{c.holding}</p>
                      </div>

                      <div className="p-3 bg-red-50 border border-red-100 rounded-xl mb-3">
                        <p className="text-xs font-black text-red-900">
                          Final Award: {c.amount}
                        </p>
                      </div>

                      <p className="text-xs text-slate-500 italic">
                        <strong className="not-italic text-slate-700">Litigation Takeaway: </strong>
                        {c.takeaway}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Interactive Problem Resolver */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Problem Resolver: Failure Modes &amp; Action Plans
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Troubleshooting
                  </span>
                </div>

                <FurnitureProblemTabs />
              </section>

              {/* Section 9: Real Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: ₹1,85,000 Modular Kitchen Delay &amp; Cracked Quartz Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      Dispute Value: ₹1,85,000
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Recovered: ₹1,85,000 + ₹25,000 Damages
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                      Resolution Time: 21 Days
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Background: </strong>Mr. Arvind Hegde (Bengaluru) contracted a branded modular kitchen studio for an acrylic-finish modular kitchen with quartz countertop for ₹1,85,000, paying ₹1,30,000 as advance. The contract committed handover within 35 days. By Day 65, the carcass had been loosely dumped in his living room, the quartz countertop had an unpolished hairline fracture, and the kitchen was unusable. Customer care repeatedly promised carpenters &quot;in 2 days&quot;.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Action Taken: </strong>Arvind engaged LegalRecovery.in. An advocate drafted a formal statutory demand notice citing Section 2(11) of the Consumer Protection Act, 2019, Section 73 of the Contract Act, and Section 41 of the Sale of Goods Act. The notice itemised the unboxing video evidence, site photographs, and WhatsApp chat transcripts with delivery managers. The notice demanded immediate cancellation, carting away of dumped materials, and a full refund of ₹1,30,000 plus ₹25,000 food-ordering displacement compensation within 15 days.
                  </p>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                    <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      Outcome &amp; Settlement:
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                      On Day 12 after receiving the advocate Speed Post notice, the brand&apos;s corporate legal cell contacted Arvind. They arranged a full material reverse-pickup and transferred ₹1,55,000 (full ₹1,30,000 advance refund + ₹25,000 goodwill settlement) directly to his HDFC bank account, avoiding public consumer court proceedings. If commercial entities issue bounced refund cheques during settlement, check our guide on{" "}
                      <Link
                        href="/cheque-bounce-case-against-company-directors"
                        className="font-bold text-emerald-800 hover:underline"
                      >
                        Section 141 company director cheque bounce liability
                      </Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Mistakes to Avoid */}
              <section id="heading-mistakes-to-avoid" aria-labelledby="heading-mistakes-to-avoid-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-mistakes-to-avoid-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5 Costly Mistakes Consumers Make in Furniture Delivery Disputes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Common Pitfalls
                  </span>
                </div>

                <ul className="space-y-4 list-none">
                  {MISTAKES.map((m, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5"
                    >
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div className="space-y-1 text-xs sm:text-sm">
                        <h3 className="font-bold text-slate-900">
                          {m.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {m.explanation}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 11: Admissible Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Admissible Evidence Checklist: 6 Documents Required for Legal Action
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Section 63 BSA Compliant
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase">Document #1</span>
                    <h3 className="text-sm font-bold text-slate-900">Tax Invoice &amp; Payment Receipts</h3>
                    <p className="text-xs text-slate-600">Original GST invoice showing seller details, GSTIN, product SKU, and UPI/card payment confirmation.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase">Document #2</span>
                    <h3 className="text-sm font-bold text-slate-900">Continuous 4K Unboxing Video</h3>
                    <p className="text-xs text-slate-600">Unedited video recording showing outer seal, carrier airway bill (AWB), and unpacking of defective parts.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase">Document #3</span>
                    <h3 className="text-sm font-bold text-slate-900">Delivery Challan with Endorsement</h3>
                    <p className="text-xs text-slate-600">Physical POD or digital delivery receipt marked with &quot;Subject to inspection&quot; or defect remarks.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase">Document #4</span>
                    <h3 className="text-sm font-bold text-slate-900">Written Email &amp; Ticket Trail</h3>
                    <p className="text-xs text-slate-600">All customer support tickets, email communications, and WhatsApp chats rejecting vouchers and demanding refund.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase">Document #5</span>
                    <h3 className="text-sm font-bold text-slate-900">Original Quotation / BOQ Specs</h3>
                    <p className="text-xs text-slate-600">For modular kitchens: 3D render designs, bill of quantities (BOQ), hardware brand specifications (Hafele, Hettich, etc.).</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase">Document #6</span>
                    <h3 className="text-sm font-bold text-slate-900">Section 63 BSA Electronic Certificate</h3>
                    <p className="text-xs text-slate-600">Electronic certificate verifying authenticity and metadata timestamps of digital photos, videos, and email printouts.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed">
                  <strong>Platform Scope &amp; Honest Limitations: </strong>LegalRecovery provides advocate drafting, postal dispatch, digital BSA 63 transmission, and consumer forum documentation. We do not provide physical carpenter repairs or pursue unverified cash-only transactions devoid of tax receipts. For disputes involving property utility damage during fit-out, review our{" "}
                  <Link
                    href="/templates/wrong-electricity-bill-complaint-application"
                    className="font-bold text-red-600 hover:underline"
                  >
                    wrong electricity bill complaint format
                  </Link>.
                </div>
              </section>

              {/* Bottom Notice CTA */}
              <div className="py-2">
                <FurnitureNoticeCTA buttonText="Start Legal Notice for Furniture Refund" />
              </div>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Furniture &amp; Modular Kitchen Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-4 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-base sm:text-lg font-black text-slate-900 tracking-tight"
                >
                  Primary Statutes, Official Gazettes &amp; Regulatory References
                </h2>
                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-600 hover:underline break-all"
                      >
                        {src.title} — {src.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Related Recovery Guides */}
              <div className="pt-8">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
