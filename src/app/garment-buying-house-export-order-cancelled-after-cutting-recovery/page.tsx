import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import GarmentTableOfContents from "./GarmentTableOfContents";
import GarmentScenarioTabs from "./GarmentScenarioTabs";
import GarmentOrderNoticeCTA from "./GarmentOrderNoticeCTA";
import { SITE_URL, formatAltText } from "@/lib/site";

// Metadata adhering strictly to screamingfrog.md guidelines:
// Title <= 60 chars (sweet spot 50-58)
// Description 120-155 chars
export const metadata: Metadata = {
  title: "Garment Exporter Recovery: Cancelled Order & Air-Freight",
  description:
    "Buying house delayed approvals and forced air-freight debits or cancelled cut orders? Recover CMT losses under Contract Act s.53/54 & MSMED Act.",
  alternates: {
    canonical: `${SITE_URL}/garment-buying-house-export-order-cancelled-after-cutting-recovery`,
  },
  openGraph: {
    title: "Garment Exporter Recovery: Cancelled Order & Air-Freight",
    description:
      "Buying house delayed approvals and forced air-freight debits or cancelled cut orders? Recover CMT losses under Contract Act s.53/54 & MSMED Act.",
    url: `${SITE_URL}/garment-buying-house-export-order-cancelled-after-cutting-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Garment Exporter Air-Freight Penalty and Cancelled Cut Order Legal Recovery Protocol"
        ),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garment Exporter Recovery: Cancelled Order & Air-Freight",
    description:
      "Buying house delayed approvals and forced air-freight debits or cancelled cut orders? Recover CMT losses under Contract Act s.53/54 & MSMED Act.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PAGE_H1 =
  "Garment Exporter Survival Guide: Countering Mid-Production Order Cancellations, Buyer-Induced Air-Freight Penalties & Destination Discount Blackmail";

const FAQ_ITEMS = [
  {
    question: "Can an Indian buying house be sued directly when the foreign buyer cancels the order?",
    answer:
      "Yes. Under Section 230(1) of the Indian Contract Act, 1872, there is a legal presumption that an agent is personally bound by and liable on contracts made for the sale or purchase of goods for a merchant resident abroad. Unless the agency agreement explicitly and unequivocally excludes personal liability and the garment manufacturer agreed in writing to look solely to the foreign entity, Indian commercial courts hold the domestic liaison buying agency personally accountable for unpaid goods and consequential breaches.",
  },
  {
    question: "How does Section 53 and 54 of the Contract Act protect apparel factories from air-freight debit notes?",
    answer:
      "Under Sections 53 and 54 of the Indian Contract Act, 1872 (reciprocal promises), when a contract requires the buyer to perform a precedent condition—such as approving Pre-Production (PP) samples, size sets, or lab dips within agreed turnaround times, or issuing purchase orders to nominated trim vendors—any delay by the buyer legally excuses the manufacturer from meeting the original FOB delivery date. The buyer cannot breach its reciprocal obligation and subsequently demand air shipment or levy freight penalties.",
  },
  {
    question: "Can a garment manufacturer legally cut off brand labels and sell cancelled export stock in the domestic market?",
    answer:
      "Yes, under Section 54 of the Sale of Goods Act, 1930, an unpaid seller in possession of goods has the right of resale to mitigate damages. However, to avoid trademark infringement or intellectual property litigation from the overseas brand, the factory must serve a formal 15-day 'Notice of Mitigation of Damages & De-branding Salvage Sale'. If the buyer fails to lift and pay for the stock, the factory meticulously cuts out main brand woven labels, wash-care tags bearing trademark logos, and sells the sanitized blanks as commercial salvage.",
  },
  {
    question: "What should a garment exporter write on shipping documents when forced to air-freight under duress?",
    answer:
      "Never sign an unconditional authorization absorbing air freight costs. Exporters must issue a formal contemporaneous written protest stating: 'Air freight dispatch is being undertaken strictly WITHOUT PREJUDICE, under explicit commercial duress and financial coercion, reserving all statutory rights under Sections 53, 54, and 72 of the Indian Contract Act, 1872 to recover full air-freight differential costs and damages resulting from buyer-induced sampling delays.'",
  },
  {
    question: "Can an apparel export unit file for MSME Samadhaan recovery against an Indian buying agency?",
    answer:
      "Yes. If the garment manufacturing unit is registered under Udyam (Micro or Small Enterprise) prior to the issuance of the Purchase Order, and the Purchase Order or cutting approval was routed through an Indian-registered buying house or liaison agency entity, the exporter can file a delayed payment reference before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, claiming compound interest at 3x the RBI bank rate.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act impact buying houses and domestic brand intermediaries?",
    answer:
      "Under Section 43B(h) introduced into the Income Tax Act, 1961, any sum payable by a buyer to a registered Micro or Small enterprise beyond the statutory timeline (15 days without agreement, maximum 45 days with agreement under MSMED Act Section 15) is disallowed as a tax deduction in the financial year of accrual. For buying agencies that book commission, fabric procurement, or CMT billings in their Indian audited books, non-payment triggers severe tax disallowance and direct assessment liability.",
  },
  {
    question: "What is the legal limitation period to file a recovery suit for cancelled apparel orders in India?",
    answer:
      "Under the Limitation Act, 1963, the limitation period for recovering the price of goods sold and delivered or damages for breach of contract is 3 years from the date of the breach or delivery cutoff. However, serving a Section 12A Pre-Institution Mediation notice under the Commercial Courts Act, 2015 stops the limitation clock during the pendency of mediation.",
  },
];

export default function GarmentBuyingHouseRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "Operational legal recovery guide for Indian garment exporters facing mid-production order cancellations, delayed sampling air-freight extortion, and destination discounts.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/garment-buying-house-export-order-cancelled-after-cutting-recovery`,
    },
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
    datePublished: "2026-11-17T14:58:00+05:30",
    dateModified: "2026-11-17T14:58:00+05:30",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Garment Exporters Counter Air-Freight Traps and Recover Cancelled Cut Orders",
    description:
      "A 5-step operational and statutory SOP to defeat buyer-induced sampling delays, refuse coerced air-freight debits, and salvage uncollected cut garment lots.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Time-Action Calendar & PP-Sample Approval Delays",
        text: "Collate all timestamps showing when tech-packs, lab dips, and PP samples were submitted versus when the buying house merchandiser approved them. Document every delay exceeding agreed T&A milestones.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Issue Section 53/54 Contract Act Reservation Notice",
        text: "Formally notify the buying agency that buyer delays have excused the original FOB date, extending the delivery schedule day-for-day and legally barring any air-freight debit note.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Execute Dispatch Strictly 'Under Commercial Duress & Protest'",
        text: "If goods must be shipped by air to preserve retail season shelf-life, endorse all airway bills and communications as 'Dispatched Under Explicit Duress, Without Prejudice to Contractual Remedies'.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve Joint Statutory Demand Notice Under Section 230",
        text: "Issue a fact-verified demand notice to the Indian liaison buying house entity and overseas principal under Section 230 Indian Contract Act and Section 15 of MSMED Act.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Execute 15-Day De-branding Salvage Sale Protocol",
        text: "For cancelled cut lots, issue a statutory resale notice under Section 54 Sale of Goods Act, deface trademark labels upon expiry, and liquidate blanks domestically to mitigate damages.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        name: "Textiles & Apparel Recovery",
        item: `${SITE_URL}/industries/textiles-apparel-garment-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Garment Buying House Cancelled Order Recovery",
        item: `${SITE_URL}/garment-buying-house-export-order-cancelled-after-cutting-recovery`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
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

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Playbook</span>
            <span>&bull;</span>
            <span>Apparel Export &amp; CMT Factories</span>
            <span>&bull;</span>
            <span>Contract Act s.53/54 &amp; s.230</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Summary &amp; Creditor Answer
            </span>
            Under the Indian Contract Act, 1872 Sections 53 and 54, when an international buying house or retail brand delays Pre-Production (PP) sample sign-offs or nominated trims, the factory&apos;s contractual FOB delivery obligation is excused and extended day-for-day. Forcing an Indian apparel manufacturer to absorb ₹15–35 Lakh air-freight penalties or unilaterally repudiating orders after custom fabric has been cut constitutes wrongful breach of contract under Section 73. Indian liaison buying agencies can be held personally liable under Section 230(1), while uncollected cut stock can be lawfully de-branded and liquidated in domestic markets under Section 54 of the Sale of Goods Act, 1930. Read our comprehensive vertical playbook in the{" "}
            <Link
              href="/industries/textiles-apparel-garment-recovery"
              className="text-red-400 hover:text-red-300 underline font-bold"
            >
              Textiles, Apparel &amp; Garment Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                ₹15L–₹40L
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Avg. Coerced Air-Freight Debit
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                s.53 / 54
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Contract Act Delay Defense
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                s.230(1)
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buying House Resident Liability
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                15 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                De-branding Resale Notice Bar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Textiles & Apparel Recovery",
                href: "/industries/textiles-apparel-garment-recovery",
              },
              {
                label: "Cancelled Export Order & Air-Freight Recovery",
                href: "/garment-buying-house-export-order-cancelled-after-cutting-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <GarmentTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Executive Creditor Summary */}
            <section
              id="statutory-executive-summary"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 1 &bull; Operational Vulnerability
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                The Predatory Economics of Apparel Export Cancellation in India
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                In garment manufacturing clusters across <strong>Tirupur, Noida Sector 63/65, Gurugram Udyog Vihar, Karur, Bengaluru Peenya, and Ludhiana</strong>, apparel exporters operate on razor-thin operating margins between 4% and 8%. When an overseas retail brand or wholesale importer places a cut-make-trim (CMT) or full-package (FOB) purchase order, the Indian factory commits hundreds of thousands of meters of yarn, circular/warp knitting or woven fabric, customized lab-dip dyeing, and specialized trims (zippers, shank buttons, heat-transfer neck labels, and polybags).
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Tragically, when consumer demand fluctuates in the United States or Western Europe, international buyers routinely exploit two devastating commercial leverage tactics:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                  <h3 className="text-sm font-bold text-red-900 mb-1">
                    1. The &quot;Air-Freight Extortion Trap&quot;
                  </h3>
                  <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                    The buyer&apos;s nominated trim supplier or buying-house merchandiser deliberately delays Pre-Production (PP) sample, embroidery swatch, or size-set approvals by 15–25 days. When the scheduled sea-shipment handover date approaches, the buyer threatens immediate PO cancellation unless the Indian factory bears astronomical air-cargo freight costs (typically ₹15,00,000 to ₹35,00,000 per consignment), wiping out entire annual factory profits.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    2. Mid-Production PO Repudiation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Orders are unilaterally cancelled after the fabric has already been laid out and cut on cutting tables into custom pattern pieces. Because cut panels cannot be reused for other buyers without total reconfiguration and scrap losses, the factory is left holding dead, un-stitchable cut stock and unpaid fabric bills.
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Indian exporters historically absorbed these predatory losses out of fear of being blacklisted by liaison buying agencies. However, under current Indian jurisprudence, the{" "}
                <Link
                  href="/how-to-recover-money-without-written-agreement"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  statutory machinery of the Indian Contract Act
                </Link>
                , the Sale of Goods Act, and the Micro, Small and Medium Enterprises Development (MSMED) Act provides robust protections to reverse coerced debit notes, hold domestic buying houses personally liable, and enforce salvage rights.
              </p>
            </section>

            {/* Section 2: Air-Freight Trap Deep Dive */}
            <section
              id="air-freight-trap-analysis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 2 &bull; Contractual Mechanism
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Deconstructing the &apos;Air-Freight Trap&apos;: Buyer Default vs Delivery Deadlines
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                A classic apparel export contract is governed by a Time and Action (T&amp;A) calendar. The T&amp;A calendar is not a unilateral factory commitment; it is an interdependent series of reciprocal promises. The buyer cannot claim that &quot;Time is of the Essence&quot; regarding the FOB port handover date while treating its own preliminary approval deadlines as non-binding informal guidelines.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 my-6">
                <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">
                  The Reciprocal Chain of Performance in Apparel Contracts
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </span>
                    <p>
                      <strong>Precedent Obligation:</strong> Buyer/Buying House must approve Lab Dips, Strike-offs, and PP Samples within 5 working days of courier receipt.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </span>
                    <p>
                      <strong>Nominated Supply Chain:</strong> Buyer&apos;s nominated thread, zipper, or barcode polybag vendors must deliver verified raw materials to the factory within scheduled lead times.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </span>
                    <p>
                      <strong>Subsequent Obligation:</strong> Only upon timely receipt of approvals and trims is the factory obligated to commence bulk fabric cutting, sewing line loading, and final finishing.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      4
                    </span>
                    <p>
                      <strong>FOB Delivery Handover:</strong> Handover to the ocean shipping line or container freight station (CFS) within agreed shipping windows.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                When the buying house delays PP-sample sign-off by 21 days, the entire production schedule is compressed. Under Indian law, this delay directly triggers{" "}
                <strong>Section 54 of the Indian Contract Act, 1872</strong>:
              </p>
              <blockquote className="border-l-4 border-red-600 bg-red-50/40 p-4 rounded-r-lg my-4 text-xs sm:text-sm text-slate-800 italic">
                &quot;When a contract consists of reciprocal promises, such that one of them cannot be performed, or that its performance cannot be claimed till the other has been performed, and the promisor of the promise last mentioned fails to perform it, such promisor cannot claim the performance of the reciprocal promise, and must make compensation to the other party of the contract for any loss which such other party may sustain by the non-performance of the contract.&quot;
              </blockquote>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Therefore, when the foreign buyer or buying house merchandiser delays trim approval, <strong>they have breached their precedent condition</strong>. The factory cannot be held in default of the original delivery date, and demanding that the factory bear air shipment costs constitutes an illegal penalty under Section 74 and commercial coercion under Section 15 of the Contract Act.
              </p>
            </section>

            {/* Section 3: Interactive Scenarios */}
            <section
              id="interactive-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 3 &bull; Operational Failure Modes
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                4 Critical Garment Export Dispute Scenarios &amp; Action Plans
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Explore each commercial dispute pattern to review the statutory counter-arguments, immediate factory SOP, and required evidentiary logs:
              </p>
              <GarmentScenarioTabs />
            </section>

            {/* Section 4: Decision Tree Workflow */}
            <section
              id="decision-tree-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 4 &bull; Statutory Escalation Flowchart
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Operational Escalation Decision Tree for Garment Cancellations
              </h2>
              <p className="text-slate-700 text-xs sm:text-sm mb-6">
                Follow this sequential decision framework from the moment a buying house halts production or threatens air freight deductions:
              </p>

              {/* Desktop SVG Visual Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-xl p-6 mb-6">
                <svg
                  viewBox="0 0 900 480"
                  className="w-full h-auto text-white font-sans"
                  style={{ minWidth: "750px" }}
                >
                  {/* Step 1 */}
                  <rect
                    x="20"
                    y="30"
                    width="240"
                    height="90"
                    rx="10"
                    fill="#1F2937"
                    stroke="#DC2626"
                    strokeWidth="2"
                  />
                  <text x="35" y="60" fill="#EF4444" fontSize="12" fontWeight="bold">
                    STAGE 1: T&amp;A DELAY DETECTED
                  </text>
                  <text x="35" y="80" fill="#F3F4F6" fontSize="11">
                    Buyer delays PP-sample / trim
                  </text>
                  <text x="35" y="100" fill="#9CA3AF" fontSize="10">
                    Issue Sec 54 Time-Extension Notice
                  </text>

                  {/* Arrow 1 -> 2 */}
                  <line
                    x1="260"
                    y1="75"
                    x2="330"
                    y2="75"
                    stroke="#EF4444"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />

                  {/* Step 2 */}
                  <rect
                    x="330"
                    y="30"
                    width="240"
                    height="90"
                    rx="10"
                    fill="#1F2937"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  <text x="345" y="60" fill="#60A5FA" fontSize="12" fontWeight="bold">
                    STAGE 2: COERCED AIR-FREIGHT?
                  </text>
                  <text x="345" y="80" fill="#F3F4F6" fontSize="11">
                    Buyer demands factory pay air bill
                  </text>
                  <text x="345" y="100" fill="#9CA3AF" fontSize="10">
                    Sign strictly &apos;Under Protest / Duress&apos;
                  </text>

                  {/* Arrow 2 -> 3 */}
                  <line
                    x1="570"
                    y1="75"
                    x2="640"
                    y2="75"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />

                  {/* Step 3 */}
                  <rect
                    x="640"
                    y="30"
                    width="240"
                    height="90"
                    rx="10"
                    fill="#1F2937"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <text x="655" y="60" fill="#34D399" fontSize="12" fontWeight="bold">
                    STAGE 3: OR ORDER CANCELLED?
                  </text>
                  <text x="655" y="80" fill="#F3F4F6" fontSize="11">
                    Cut panels lying idle in factory
                  </text>
                  <text x="655" y="100" fill="#9CA3AF" fontSize="10">
                    Serve 15-day De-branding Salvage Notice
                  </text>

                  {/* Branching Lines Downward */}
                  <line
                    x1="450"
                    y1="120"
                    x2="450"
                    y2="200"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />
                  <line
                    x1="760"
                    y1="120"
                    x2="760"
                    y2="200"
                    stroke="#10B981"
                    strokeWidth="2"
                  />

                  {/* Step 4: Joint Legal Notice */}
                  <rect
                    x="250"
                    y="200"
                    width="400"
                    height="100"
                    rx="10"
                    fill="#111827"
                    stroke="#DC2626"
                    strokeWidth="3"
                  />
                  <text x="270" y="235" fill="#EF4444" fontSize="14" fontWeight="bold">
                    STAGE 4: DUAL-TARGET STATUTORY DEMAND NOTICE
                  </text>
                  <text x="270" y="260" fill="#F3F4F6" fontSize="11">
                    Noticee 1: Indian Liaison Buying Agency (Contract Act s.230 Resident Liability)
                  </text>
                  <text x="270" y="280" fill="#F3F4F6" fontSize="11">
                    Noticee 2: Foreign Brand HQ (Section 73 Damages + MSMED Act s.16 Interest)
                  </text>

                  {/* Arrow 4 -> 5 */}
                  <line
                    x1="450"
                    y1="300"
                    x2="450"
                    y2="360"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />

                  {/* Step 5: Dual Forum Execution */}
                  <rect
                    x="150"
                    y="360"
                    width="600"
                    height="90"
                    rx="10"
                    fill="#1F2937"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <text x="175" y="390" fill="#FBBF24" fontSize="13" fontWeight="bold">
                    STAGE 5: DUAL-TRACK FORUM EXECUTION
                  </text>
                  <text x="175" y="415" fill="#F3F4F6" fontSize="11">
                    Track A: MSME Samadhaan (3x RBI Compound Interest against Indian Entity)
                  </text>
                  <text x="175" y="435" fill="#9CA3AF" fontSize="11">
                    Track B: Commercial Court Summary Suit / Order 38 Rule 5 Account Freeze &amp; DGFT Complaint
                  </text>

                  <defs>
                    <marker
                      id="arrow"
                      viewBox="0 0 10 10"
                      refX="5"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50">
                  <div className="text-xs font-bold text-red-900 mb-1">
                    Step 1: Document T&amp;A Milestones
                  </div>
                  <p className="text-xs text-red-950">
                    Log PP sample courier slips and merchandiser approval delays past PO calendar.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50">
                  <div className="text-xs font-bold text-blue-900 mb-1">
                    Step 2: Reserve Rights Under Duress
                  </div>
                  <p className="text-xs text-blue-950">
                    Endorse airway bills &apos;Under Protest &amp; Commercial Duress&apos; to protect future recovery.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50">
                  <div className="text-xs font-bold text-emerald-900 mb-1">
                    Step 3: 15-Day Salvage Notice
                  </div>
                  <p className="text-xs text-emerald-950">
                    Notify brand under Sale of Goods Act s.54; cut labels and liquidate blanks if uncollected.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-900 text-white">
                  <div className="text-xs font-bold text-red-400 mb-1">
                    Step 4: Dual Statutory Notice
                  </div>
                  <p className="text-xs text-slate-300">
                    Serve Indian Buying Agency (s.230) &amp; Foreign Principal simultaneously via Speed Post &amp; Email.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Contract Act Statutory Nuance */}
            <section
              id="contract-act-sections"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 5 &bull; Statutory Authority
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Statutory Anatomy: Contract Act s.53, s.54 &amp; s.230 Resident Liability
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                When legal notices are issued by generic law practitioners, buying houses dismiss them as standard saber-rattling. However, when an exporter grounds its legal demand in specific bare-act jurisprudence governing reciprocal performance and agency law, the buying house legal counsel immediately recognizes exposure.
              </p>

              <div className="space-y-4 my-6">
                {/* Accordion/Card 1: Section 53 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center justify-between">
                    <span>Indian Contract Act, 1872 &mdash; Section 53</span>
                    <span className="text-xs font-mono bg-red-100 text-red-800 px-2 py-0.5 rounded">
                      Excuse of Performance
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Statutory Principle:</strong> &quot;When a contract contains reciprocal promises, and one party to the contract prevents the other from performing his promise, the contract becomes voidable at the option of the party so prevented; and he is entitled to compensation from the other party for any loss which he may sustain in consequence of the non-performance of the contract.&quot;
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Garment Factory Application:</strong> By failing to supply approved tech-packs, barcode stickers, or nominated fabric trims, the buyer actively prevents the factory from sewing and packing. The factory is relieved from the FOB delivery cutoff and entitled to recover all idle labor and machine downtime.
                  </p>
                </div>

                {/* Accordion/Card 2: Section 230(1) */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center justify-between">
                    <span>Indian Contract Act, 1872 &mdash; Section 230(1)</span>
                    <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      Foreign Principal Presumption
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Statutory Principle:</strong> In the absence of a contract to the contrary, an agent is presumed to be personally bound by and liable for contracts made by him for the sale or purchase of goods for a merchant resident abroad.
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Garment Factory Application:</strong> Buying houses routinely say &quot;We are merely liaison agents, sue the buyer in London.&quot; Under Section 230(1), Indian courts presume the liaison agent is personally liable unless the contract specifically excludes personal liability. This enables Indian garment exporters to attach domestic bank accounts and assets of Gurugram and Noida buying houses.
                  </p>
                </div>

                {/* Accordion/Card 3: Section 43B(h) */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center justify-between">
                    <span>Income Tax Act, 1961 &mdash; Section 43B(h)</span>
                    <span className="text-xs font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                      MSME Tax Disallowance
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Statutory Principle:</strong> Any business payment due to an MSME enterprise beyond 45 days is disallowed as an expense in the buyer&apos;s tax computation for that fiscal year, resulting in an immediate 25%–30% corporate income tax hit.
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Garment Factory Application:</strong> Review our comprehensive{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Section 43B(h) MSME Payment Rule Guide
                    </Link>{" "}
                    to understand how corporate intermediaries face tax disallowances on stuck CMT ledgers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: De-Branding & Salvage Sale Protocol */}
            <section
              id="debranding-salvage-playbook"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 6 &bull; Operational Mitigation SOP
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                The 15-Day De-Branding &amp; Domestic Salvage Protocol
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                When 30,000 units of custom dyed knit t-shirts or woven trousers are cancelled after cutting or sewing, the factory cannot afford to let the goods rot in its godown while civil litigation drags on. Under Section 54(2) of the Sale of Goods Act, 1930, the unpaid seller has an affirmative legal duty to mitigate damages by reselling the goods.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                However, selling branded export apparel in the Indian domestic market without precautions invites lawsuits under the Trade Marks Act, 1999 or Customs seizures. Exporters must strictly execute this 4-step de-branding compliance protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                    Protocol Step 1
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Serve Formal 15-Day Salvage Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve a formal statutory notice by registered email and Speed Post stating that unless the cancelled PO is reinstated and full payment remitted within 15 days, the manufacturer will exercise its statutory right of resale under Section 54 Sale of Goods Act.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                    Protocol Step 2
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Physical Trademark Neutralization
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon expiry of the 15-day notice, the factory QA supervisor must physically snip out or unpick all main woven brand labels, brand neck heat transfers, and wash-care tags containing the buyer&apos;s registered brand or logo. Replace them with plain generic size tabs.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                    Protocol Step 3
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Videographic &amp; Photographic Evidence
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capture continuous high-resolution video and photo logs showing the de-branding process, carton counts, and label destruction. Secure an electronic evidence certificate under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                    Protocol Step 4
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Arm&apos;s-Length Domestic Tender Sale
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sell the unbranded garments to domestic wholesalers or surplus liquidators via formal GST tax invoices. Credit the net realization against the contract debt and sue the buyer for the unpaid balance and manufacturing difference under Section 73.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Forum & Remedy Matrix */}
            <section
              id="statutory-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 7 &bull; Forum Comparison
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Statutory Remedy &amp; Forum Comparison Matrix for Garment Exporters
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Evaluate the optimal recovery route based on your factory&apos;s corporate structure, claim size, and debtor entity:
              </p>

              <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Recovery Forum</th>
                      <th className="py-3 px-4 font-bold">Pecuniary Floor</th>
                      <th className="py-3 px-4 font-bold">Statutory Timeline</th>
                      <th className="py-3 px-4 font-bold">Key Tactical Advantage</th>
                      <th className="py-3 px-4 font-bold">Debtor Pressure Point</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        MSME Samadhaan (MSEFC)
                      </td>
                      <td className="py-3 px-4">No minimum floor</td>
                      <td className="py-3 px-4">90 days statutory target</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">
                        Mandatory 3x RBI compound interest + zero court fee
                      </td>
                      <td className="py-3 px-4">
                        75% pre-deposit under Section 19 to challenge award
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Commercial Courts Act (s.12A)
                      </td>
                      <td className="py-3 px-4">&#8377;3 Lakhs</td>
                      <td className="py-3 px-4">6–12 months</td>
                      <td className="py-3 px-4">
                        Order 38 Rule 5 attachment before judgment of buying house bank accounts
                      </td>
                      <td className="py-3 px-4">
                        Summary judgment under Order XIII-A on undisputed shipping docs
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        DGFT Quality Complaints Committee
                      </td>
                      <td className="py-3 px-4">Export PO claims</td>
                      <td className="py-3 px-4">60–90 days</td>
                      <td className="py-3 px-4">
                        Engages Indian Embassy Commercial Counselor in buyer&apos;s home country
                      </td>
                      <td className="py-3 px-4">
                        International buyer risks blacklisting across Indian EPCs
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 138 NI Act (PDC Bounce)
                      </td>
                      <td className="py-3 px-4">Cheque face value</td>
                      <td className="py-3 px-4">Summary criminal trial</td>
                      <td className="py-3 px-4 text-red-700 font-semibold">
                        Personal criminal liability &amp; 20% interim deposit (s.143A)
                      </td>
                      <td className="py-3 px-4">
                        Bailable/Non-bailable warrants against buying house directors
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                For complete operational details on MSEFC arbitration filings, see our{" "}
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  MSME ODR Portal Delayed Payment Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Financial Loss Calculation */}
            <section
              id="financial-loss-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 8 &bull; Numerical Loss Ledger
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Worked Financial Calculation: Air-Freight Debit &amp; Cancelled Cut Order
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Consider an illustrative case from a 250-machine woven shirt manufacturing unit in Sector 65, Noida, fulfilling a PO for 20,000 units at an agreed FOB price of $8.50 (₹714) per unit.
              </p>

              {/* Financial Ledger Table */}
              <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                  Illustrative Creditor Claim Computation (Noida Garment Exporter vs Buying Agency)
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm font-mono">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-300">Total Purchase Order Value (20,000 pcs @ &#8377;714 FOB)</span>
                    <span className="font-bold">&#8377;1,42,80,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-300">Custom Fabric Knitted, Dyed &amp; Cut (100% Lay Table Completed)</span>
                    <span className="font-bold text-amber-400">&#8377;62,40,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-300">Coerced Air-Freight Deductions Levied by Buyer (Under Protest)</span>
                    <span className="font-bold text-red-400">&#8377;21,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-300">Net De-branding Domestic Salvage Realization (Credit)</span>
                    <span className="font-bold text-emerald-400">(-) &#8377;18,20,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5 font-bold text-sm">
                    <span className="text-white">Net Direct Principal Loss</span>
                    <span className="text-white">&#8377;65,70,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5 text-emerald-400 font-bold">
                    <span>MSMED Act Compound Interest @ 3x Bank Rate (21.75% p.a. for 180 Days)</span>
                    <span>+ &#8377;7,14,487</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-black text-red-400">
                    <span>TOTAL STATUTORY DEMAND CLAIM</span>
                    <span>&#8377;72,84,487</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm">
                Calculate your exact delayed interest penalties with our interactive{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 9: Evidence & BSA 2023 Checklist */}
            <section
              id="evidence-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 9 &bull; Evidentiary Arsenal
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Garment Exporter Evidentiary &amp; BSA 2023 s.63 Checklist
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA) Section 63</strong> (which replaced Section 65B of the Indian Evidence Act), electronic records including email approvals, ERP tracking logs, WhatsApp chats, and courier web tracking must be supported by a cryptographic hash certificate signed by the IT administrator or custodian.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Assemble these 8 documentary assets prior to issuing your statutory demand notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Purchase Order &amp; Spec Sheet:</span>
                    <span className="text-slate-600">Countersigned PO, tech-pack, fabric consumption marker, and agreed T&amp;A schedule.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">PP Sample Dispatch Proof:</span>
                    <span className="text-slate-600">Courier airway bills and delivery confirmation receipts of fit samples and strike-offs.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Merchandiser Communication Thread:</span>
                    <span className="text-slate-600">Email timestamps showing repeated factory follow-ups and buying house delays.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Cutting Room Daily Log:</span>
                    <span className="text-slate-600">Fabric spreading sheets, layer counts, and cut panel registers verified by QA.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Final Random Inspection (FRI) Pass:</span>
                    <span className="text-slate-600">Passed third-party quality inspection report (SGS, Intertek, Bureau Veritas).</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Airway Bill Under Duress:</span>
                    <span className="text-slate-600">AWB copy marked &apos;Shipped Under Explicit Duress and Commercial Coercion&apos;.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">De-branding Video &amp; Photos:</span>
                    <span className="text-slate-600">High-resolution footage of label cutting and defacing to counter trademark claims.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base">&#10003;</span>
                  <div>
                    <span className="font-bold text-slate-900 block">BSA 2023 s.63 Hash Certificate:</span>
                    <span className="text-slate-600">Electronic certificate verifying server timestamps and raw header data.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 10 &bull; Legal Clarifications
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions: Garment Order Recovery
              </h2>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                  >
                    <summary className="font-semibold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg ml-2">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom Dual-Track CTA Component */}
            <section className="scroll-mt-28">
              <GarmentOrderNoticeCTA />
            </section>

            {/* Sibling Industry Spokes Directory */}
            <section className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Related Textile &amp; Garment Recovery Guides
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Explore specialized statutory playbooks across the textile supply chain:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/textile-commission-agent-broker-adatiya-buyer-default-liability"
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-red-400 hover:shadow-sm transition block text-xs font-semibold text-slate-800"
                >
                  &rarr; Textile Commission Agent &amp; Adatiya Default Liability
                </Link>
                <Link
                  href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery"
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-red-400 hover:shadow-sm transition block text-xs font-semibold text-slate-800"
                >
                  &rarr; Retail Fashion Brand SOR (Sale or Return) Dispute Recovery
                </Link>
                <Link
                  href="/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery"
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-red-400 hover:shadow-sm transition block text-xs font-semibold text-slate-800"
                >
                  &rarr; Dyeing, Printing &amp; Embroidery Job-Work Fabric Lien (s.170)
                </Link>
                <Link
                  href="/templates/textile-garment-buyer-and-broker-joint-demand-legal-notice"
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-red-400 hover:shadow-sm transition block text-xs font-semibold text-slate-800"
                >
                  &rarr; Textile Buyer &amp; Broker Joint Legal Notice Template
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
