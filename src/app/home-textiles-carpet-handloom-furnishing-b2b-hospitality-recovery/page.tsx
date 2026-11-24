import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import HomeTextilesTableOfContents from "./HomeTextilesTableOfContents";
import HomeTextilesScenarioTabs from "./HomeTextilesScenarioTabs";
import HomeTextilesNoticeCTA from "./HomeTextilesNoticeCTA";
import { SITE_URL, formatAltText } from "@/lib/site";

// Metadata adhering strictly to screamingfrog.md guidelines:
// Title <= 60 chars (55 chars)
// Description 120-155 chars (152 chars)
export const metadata: Metadata = {
  title: "Home Textiles, Carpet & Hospitality Furnishing Recovery",
  description:
    "Supplied custom carpets, curtains, mattresses & hotel linen and the promoter or contractor stopped paying? Recover via MSMED s.15–18, 43B(h) & Order 37.",
  alternates: {
    canonical: `${SITE_URL}/home-textiles-carpet-handloom-furnishing-b2b-hospitality-recovery`,
  },
  openGraph: {
    title: "Home Textiles, Carpet & Hospitality Furnishing Recovery",
    description:
      "Supplied custom carpets, curtains, mattresses & hotel linen and the promoter or contractor stopped paying? Recover via MSMED s.15–18, 43B(h) & Order 37.",
    url: `${SITE_URL}/home-textiles-carpet-handloom-furnishing-b2b-hospitality-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Home Textiles, Carpet and Hospitality Linen B2B Debt Recovery Guide"
        ),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Textiles, Carpet & Hospitality Furnishing Recovery",
    description:
      "Supplied custom carpets, curtains, mattresses & hotel linen and the promoter or contractor stopped paying? Recover via MSMED s.15–18, 43B(h) & Order 37.",
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
  "B2B Receivable Recovery for Home-Textile, Carpet & Hospitality Linen Manufacturers (Panipat, Bhadohi, Karur & Solapur)";

const FAQ_ITEMS = [
  {
    question:
      "Can a Panipat or Bhadohi furnishing vendor recover dues when a hotel promoter runs out of pre-opening CapEx funds?",
    answer:
      "Yes. Under Section 15 of the MSMED Act, 2006, a buyer cannot defer payment beyond 45 days from deemed acceptance regardless of internal term-loan disbursement delays or hotel cashflow crunches. If your unit holds an Udyam Registration (Micro or Small) predating the Purchase Order, you can claim 3x the RBI bank rate compounded monthly under Section 16 and trigger Income Tax disallowance under Section 43B(h) against the hotel SPV.",
  },
  {
    question:
      "What if the turnkey interior contractor refuses to pay citing a 'back-to-back pay-when-paid' clause with the hotel owner?",
    answer:
      "For registered Micro and Small enterprises, Section 24 of the MSMED Act overrides any inconsistent contract term. Any 'pay-when-paid' or back-to-back certification clause that delays vendor payment past 45 days is legally void. Additionally, serving a dual-addressee Advocate Notice on both the turnkey contractor and the hotel operator's CFO/General Counsel under Section 70 of the Indian Contract Act creates immediate commercial pressure to release held funds.",
  },
  {
    question:
      "Can we file an Order XXXVII CPC Summary Suit for custom-woven banquet carpets, blackout curtains, or 300-TC hotel linen?",
    answer:
      "Yes. Once custom-manufactured home textiles or carpets are delivered against signed GST tax invoices, E-Way bills, and site gate-entry/handover checklists without a written quality objection within a reasonable inspection window (Sale of Goods Act s.42), the debt becomes a liquidated written contract enforceable via an Order XXXVII CPC Summary Suit in Commercial Courts.",
  },
  {
    question:
      "How does Section 43B(h) of the Income Tax Act force hotel promoters and furnishing dealers to settle overdue bills?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any amount payable to a Micro or Small enterprise that remains unpaid beyond the 15-day (or max 45-day agreed) MSMED s.15 window as of 31 March is disallowed as a business expense in the buyer's tax computation for that financial year. Hotel SPVs and profitable interior contractors face an immediate ~25%–30% corporate tax cash hit plus audit qualifications if they leave your invoices unpaid.",
  },
  {
    question:
      "What legal remedy applies if a foreign importer or Indian buying house rejects a Karur or Panipat export container at destination?",
    answer:
      "Where an Indian buying house or liaison agency placed or mediated the order for an overseas merchant, Section 230(1) of the Indian Contract Act, 1872 presumes the Indian agent to be personally liable unless explicitly excluded in writing. Paired with passed Pre-Shipment Inspection (PSI) reports, exporters can pursue the Indian buying agency locally while logging recovery steps with their AD-Bank under RBI EDPMS norms.",
  },
  {
    question:
      "Can a furnishing wholesaler present a dealer's blank security cheque under Section 138 NI Act for unpaid catalogue bills?",
    answer:
      "Yes. Under Section 20 of the Negotiable Instruments Act, 1881 and the Supreme Court's Bir Singh and Sripati Singh rulings, a signed blank security cheque handed over at dealership onboarding can be lawfully filled for the crystallized ledger amount after serving a formal 7-day ledger intimation notice. Upon dishonour, Section 138 proceedings can be filed in your home-bank jurisdiction under Section 142(2).",
  },
];

export default function HomeTextilesHospitalityRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "Operational B2B recovery playbook for Panipat, Bhadohi, Karur, and Solapur home-textile, carpet, curtain, mattress, and hospitality linen manufacturers facing hotel pre-opening and turnkey contractor defaults.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/home-textiles-carpet-handloom-furnishing-b2b-hospitality-recovery`,
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
    datePublished: "2026-11-17T15:25:00+05:30",
    dateModified: "2026-11-17T15:25:00+05:30",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Home-Textile & Carpet Manufacturers Recover Unpaid Hotel FF&E & Dealer Bills",
    description:
      "A 5-step statutory escalation SOP for Panipat, Bhadohi, Karur, and Solapur furnishing suppliers under MSMED Act s.15–18, Section 43B(h), and Order XXXVII CPC.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Deemed Acceptance & Site Installation Proof",
        text: "Collate signed GST invoices, E-Way bills, hotel gate-entry stamps, room-by-room handover sheets, and live hotel launch photos proving commercial use under Sale of Goods Act s.42.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Calculate Compound Interest & Section 43B(h) Tax Exposure",
        text: "Compute 3x RBI bank rate monthly compound interest from Day 46 under MSMED Act s.16 and quantify the buyer's Income Tax disallowance risk under Section 43B(h).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Dual-Addressee Fact-Verified Demand Notice",
        text: "Dispatch a tri-channel notice (Email + WhatsApp + Speed Post RPAD) to both the Turnkey Interior Contractor and Hotel Promoter/CFO invoking MSMED s.15–18 and Contract Act s.70.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Crystallize Dealer Security Cheques (If Applicable)",
        text: "For domestic furnishing dealers, issue a 7-day ledger crystallization notice under NI Act s.20 before presenting security cheques and filing s.138 complaints.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate to MSEFC Samadhaan or Order XXXVII Commercial Suit",
        text: "File online MSEFC conciliation/arbitration under s.18 MSMED Act (up to ₹1 Cr+) or an Order XXXVII CPC Summary Suit / IBC s.8 Demand Notice for corporate hotel debtors.",
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
        name: "Home Textiles, Carpet & Hospitality Recovery",
        item: `${SITE_URL}/home-textiles-carpet-handloom-furnishing-b2b-hospitality-recovery`,
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
            <span>B2B Creditor Guide</span>
            <span>&bull;</span>
            <span>Soft-FF&amp;E &amp; Home Textiles</span>
            <span>&bull;</span>
            <span>MSMED s.15–18 &amp; s.43B(h)</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &amp; Statutory Summary
            </span>
            Under Sections 15–18 of the MSMED Act, 2006 and Income Tax Act Section 43B(h), hotel promoters and turnkey interior contractors cannot defer payment for custom carpets, blackout curtains, mattresses, or 300-TC hospitality linen beyond 45 days from deemed acceptance—regardless of hotel pre-opening CapEx overruns or back-to-back PO clauses. Pair a Fact-Verified Demand Notice with Order XXXVII CPC Summary Suits via our{" "}
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
                45 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Max MSMED s.15 Credit Cap
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                3x RBI
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Compound Monthly Penal Interest
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                s.43B(h)
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer Tax Disallowance Lever
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                Order 37
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Fast-Track Summary Decree
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
                label: "Home Textiles, Carpet & Hospitality Recovery",
                href: "/home-textiles-carpet-handloom-furnishing-b2b-hospitality-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <HomeTextilesTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Soft-FF&E Bottleneck */}
            <section
              id="soft-ffe-bottleneck"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 1 &bull; Sector Bottleneck
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Why Hotel Pre-Opening Budgets Stall Soft-FF&amp;E Vendor Payments
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Across India&apos;s premier home-textile and handloom manufacturing belts—<strong>Panipat</strong> (blackout curtains, sofa upholstery, blankets, tufted rugs), <strong>Bhadohi and Mirzapur</strong> (hand-knotted and machine-tufted banquet carpets), <strong>Karur</strong> (table, kitchen, and organic furnishing linen), and <strong>Solapur</strong> (300-TC percale/sateen bedsheets and high-GSM terry towels)—hospitality and institutional project orders carry disproportionate credit risk.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Unlike civil contractors or HVAC/elevator OEMs who collect milestone payments early in construction, soft-FF&amp;E (Furniture, Fixtures &amp; Equipment) suppliers sit at the very end of the hotel pre-opening timeline. When civil works, MEP, and facade budgets overrun by 20%–35%, the hotel promoter&apos;s project term loan is exhausted right as carpets, curtains, mattresses, and room linens arrive at the site.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                  <h3 className="text-sm font-bold text-red-900 mb-1">
                    1. Custom-Monogrammed &amp; Non-Salvageable Stock
                  </h3>
                  <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                    Banquet carpets are woven to exact ballroom floorplans; 300-TC bedsheets and bathrobes carry custom resort logos; blackout curtains are stitched to non-standard ceiling heights. Once installed, vendors fear they have zero resale leverage if the promoter stalls the final 40%–60% tranche.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    2. Informal Credit &amp; Turnkey Contractor Shields
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Many Panipat and Bhadohi units supply on Purchase Orders issued by a turnkey interior contractor or on WhatsApp swatch approvals without formal credit agreements—allowing buyers to pass blame back and forth between the contractor and the hotel SPV.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Even where no formal signed master contract exists, Indian commercial law treats GST tax invoices, E-Way bills, and signed site gate-entry receipts as enforceable written contracts. Explore how{" "}
                <Link
                  href="/how-to-recover-money-without-written-agreement"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  invoices and delivery challans establish binding debt without a formal agreement
                </Link>{" "}
                and how{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  Section 43B(h) of the Income Tax Act
                </Link>{" "}
                turns unpaid Micro and Small enterprise bills into an immediate tax penalty for hotel companies.
              </p>
            </section>

            {/* Section 2: Interactive 4 Scenarios */}
            <section
              id="interactive-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 2 &bull; Failure Mode Explorer
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                4 Soft-FF&amp;E &amp; Home-Textile Default Scenarios (Interactive)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                Select your exact commercial bottleneck below to inspect the buyer&apos;s standard excuse, the statutory counter-strike, and the required evidentiary packet.
              </p>
              <HomeTextilesScenarioTabs />
            </section>

            {/* Section 3: Escalation Decision Tree (SVG + Mobile Cards) */}
            <section
              id="escalation-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 3 &bull; Operational SOP
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Escalation Decision Tree for Panipat, Bhadohi &amp; Karur Units
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Follow this 4-stage statutory escalation tree based on your Udyam registration status, whether a security cheque is held, and the debtor&apos;s corporate structure.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 900 390"
                  width={900}
                  height={390}
                  className="w-full h-auto"
                  role="img"
                  aria-label="Operational Escalation Decision Tree for Home-Textile and Hospitality Linen Recovery"
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
                    <marker
                      id="arrowSlate"
                      markerWidth="10"
                      markerHeight="10"
                      refX="8"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L0,6 L9,3 z" fill="#94A3B8" />
                    </marker>
                  </defs>

                  {/* Node 1: Trigger */}
                  <rect x="20" y="150" width="190" height="80" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="115" y="178" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    DAY 46+ OVERDUE
                  </text>
                  <text x="115" y="198" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Hotel / Contractor / Dealer
                  </text>
                  <text x="115" y="216" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Invoice + GRN Accepted
                  </text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="210" y1="190" x2="265" y2="190" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 2: Tri-Channel Notice */}
                  <rect x="270" y="140" width="210" height="100" rx="12" fill="#DC2626" />
                  <text x="375" y="168" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">
                    STAGE 1: 15-DAY NOTICE
                  </text>
                  <text x="375" y="188" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                    Advocate Demand Notice
                  </text>
                  <text x="375" y="208" textAnchor="middle" fill="#FEF2F2" fontSize="10.5">
                    MSMED s.15–18 + s.43B(h) Warning
                  </text>
                  <text x="375" y="224" textAnchor="middle" fill="#FEF2F2" fontSize="10.5">
                    Email + WhatsApp + Speed Post RPAD
                  </text>

                  {/* Branch Arrows from Node 2 */}
                  <line x1="480" y1="165" x2="555" y2="75" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowSlate)" />
                  <line x1="480" y1="190" x2="555" y2="190" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowSlate)" />
                  <line x1="480" y1="215" x2="555" y2="305" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowSlate)" />

                  {/* Track A: Micro/Small Udyam */}
                  <rect x="560" y="25" width="320" height="90" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="580" y="50" fill="#6EE7B7" fontSize="11" fontWeight="bold">
                    TRACK A: UDYAM MICRO / SMALL UNIT
                  </text>
                  <text x="580" y="70" fill="#FFFFFF" fontSize="12.5" fontWeight="bold">
                    MSME Samadhaan (MSEFC s.18)
                  </text>
                  <text x="580" y="90" fill="#D1FAE5" fontSize="10.5">
                    3x RBI compound interest + 75% buyer pre-deposit
                  </text>
                  <text x="580" y="104" fill="#D1FAE5" fontSize="10.5">
                    to challenge award + s.43B(h) tax disallowance
                  </text>

                  {/* Track B: Medium / Non-MSME / Urgent Freeze */}
                  <rect x="560" y="145" width="320" height="90" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="580" y="170" fill="#FCD34D" fontSize="11" fontWeight="bold">
                    TRACK B: LIQUIDATED INVOICES / HIGH TICKET
                  </text>
                  <text x="580" y="190" fill="#FFFFFF" fontSize="12.5" fontWeight="bold">
                    Order XXXVII CPC / Commercial Court s.12A
                  </text>
                  <text x="580" y="210" fill="#E2E8F0" fontSize="10.5">
                    Summary Suit + Order 38 Rule 5 attachment before
                  </text>
                  <text x="580" y="224" fill="#E2E8F0" fontSize="10.5">
                    judgment; IBC s.8 Form 3 if Hotel Pvt Ltd &gt;= ₹1 Cr
                  </text>

                  {/* Track C: Security Cheque / PDC */}
                  <rect x="560" y="265" width="320" height="90" rx="12" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="580" y="290" fill="#FCA5A5" fontSize="11" fontWeight="bold">
                    TRACK C: PDC / SECURITY CHEQUE HELD
                  </text>
                  <text x="580" y="310" fill="#FFFFFF" fontSize="12.5" fontWeight="bold">
                    NI Act s.20 Intimation + s.138 Prosecution
                  </text>
                  <text x="580" y="330" fill="#E2E8F0" fontSize="10.5">
                    7-day ledger crystallization -&gt; Home-bank filing
                  </text>
                  <text x="580" y="344" fill="#E2E8F0" fontSize="10.5">
                    (s.142(2)) + 20% interim compensation (s.143A)
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <p className="text-[11px] font-bold text-red-400 uppercase">Stage 1 &bull; Day 46+</p>
                  <p className="font-bold text-sm mt-0.5">Serve Dual-Addressee Fact-Verified Demand Notice</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Invoke MSMED s.15–18 &amp; s.43B(h) via Email + WhatsApp + Speed Post RPAD.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-[11px] font-bold text-emerald-700 uppercase">Track A &bull; Udyam Micro/Small</p>
                  <p className="font-bold text-sm text-slate-900 mt-0.5">MSME Samadhaan (MSEFC s.18)</p>
                  <p className="text-xs text-slate-700 mt-1">
                    Claim 3x RBI compound interest + 75% buyer pre-deposit barrier on appeal.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-[11px] font-bold text-amber-800 uppercase">Track B &bull; High Ticket / Non-MSME</p>
                  <p className="font-bold text-sm text-slate-900 mt-0.5">Order XXXVII CPC / IBC s.8 (&gt;= ₹1 Cr)</p>
                  <p className="text-xs text-slate-700 mt-1">
                    Summary suit on signed invoices/GRNs or insolvency demand against hotel SPV.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-[11px] font-bold text-red-700 uppercase">Track C &bull; Cheque Held</p>
                  <p className="font-bold text-sm text-slate-900 mt-0.5">NI Act s.20 + s.138 Home-Bank Filing</p>
                  <p className="text-xs text-slate-700 mt-1">
                    7-day crystallization notice, criminal complaint, and 20% s.143A interim relief.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: MSMED & 43B(h) Leverage */}
            <section
              id="msmed-43bh-leverage"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 4 &bull; Statutory Leverage
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                MSMED Act s.15–18 &amp; Section 43B(h) Leverage on Hotel Promoters
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Most Panipat handloom weavers, Bhadohi carpet manufacturers, and Solapur terry-towel mills qualify as <strong>Micro or Small Enterprises</strong> under the Udyam framework. When properly invoked, two interlocking statutory provisions eliminate a hotel promoter&apos;s incentive to delay your payment:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong>MSMED Act Section 15 &amp; 16 (45-Day Cap &amp; 3x RBI Compound Interest):</strong> Even if a hotel PO states &quot;90-day credit&quot; or &quot;payment after bank disbursement,&quot; Section 15 caps the maximum permissible credit period at 45 days from deemed acceptance. From Day 46, Section 16 mandates compound interest with monthly rests at <strong>three times the RBI bank rate</strong> (currently ~19.5%–20.25% p.a. compounded monthly). Compute your exact statutory claim using our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong>Income Tax Act Section 43B(h) (Tax Disallowance Pressure):</strong> If a corporate hotel chain, resort SPV, or interior contracting firm fails to clear your Micro/Small enterprise invoices within the 15/45-day window by financial year-end (31 March), the entire unpaid invoice amount is disallowed as a deductible expense in their tax return. Serving our{" "}
                    <Link
                      href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Section 43B(h) Tax Disallowance Intimation Notice
                    </Link>{" "}
                    puts the buyer&apos;s statutory auditor and CFO on formal notice.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong>MSME Samadhaan &amp; 75% Pre-Deposit Shield (Section 18 &amp; 19):</strong> Once your reference is filed on the{" "}
                    <a
                      href="https://samadhaan.msme.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      MSME Samadhaan Portal
                    </a>
                    , the Micro and Small Enterprises Facilitation Council (MSEFC) conducts mandatory conciliation followed by arbitration. Under Section 19, no court can entertain a hotel&apos;s appeal against an MSEFC award unless the buyer first deposits <strong>75% of the awarded amount</strong>. Read our{" "}
                    <Link
                      href="/msme-odr-portal-delayed-payment-guide"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      MSME ODR &amp; Samadhaan Filing Guide
                    </Link>{" "}
                    for step-by-step filing mechanics.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 5: Turnkey Contractor vs Hotel Owner */}
            <section
              id="contractor-vs-promoter"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 5 &bull; Privity &amp; Joint Pressure
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Turnkey Interior Contractor vs. Hotel Owner: Who Must Pay?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                In hospitality projects, soft-FF&amp;E procurement is frequently routed through a turnkey interior contractor or procurement management company (PMC). When payments stall, the contractor points to the hotel owner (&quot;owner hasn&apos;t cleared our RA bill&quot;), while the hotel owner hides behind privity of contract (&quot;your PO is with the contractor, not us&quot;).
              </p>
              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 my-5 space-y-3 text-xs sm:text-sm">
                <p className="text-red-400 font-bold uppercase tracking-wider text-xs">
                  Breaking the Turnkey Blame-Game
                </p>
                <p>
                  <strong>1. Primary Liability on the PO Issuer:</strong> Under the{" "}
                  <a
                    href="https://www.indiacode.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-red-400 underline hover:text-red-300"
                  >
                    Indian Contract Act, 1872
                  </a>{" "}
                  and MSMED Act s.15, the entity that issued the Purchase Order and booked your GST invoice in GSTR-2B is unconditionally liable within 45 days. Back-to-back &quot;pay-when-paid&quot; clauses are void against Micro/Small suppliers under MSMED s.24.
                </p>
                <p>
                  <strong>2. Section 70 Quantum Meruit &amp; Dual-Addressee Notices:</strong> Where the hotel owner&apos;s PMC approved your carpet strike-offs or curtain swatches, and your custom-monogrammed goods are installed in an operating hotel, serving a formal copy of the Advocate Notice on the Hotel Brand Operator and SPV Directors under Section 70 (non-gratuitous benefit enjoyed) triggers immediate internal audit intervention—because branded hotel operators cannot risk litigation or contractor liens during live guest operations.
                </p>
              </div>
            </section>

            {/* Section 6: Forum & Remedy Comparison Matrix */}
            <section
              id="forum-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 6 &bull; Forum Selection
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Forum &amp; Remedy Matrix for Home-Textile &amp; Hospitality Arrears
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                Select the optimal statutory forum based on your Udyam status, invoice value, and whether you hold dishonoured cheques.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Legal Forum / Remedy</th>
                      <th className="p-3.5 font-bold">Best-Fit Ticket &amp; Eligibility</th>
                      <th className="p-3.5 font-bold">Statutory Timeline</th>
                      <th className="p-3.5 font-bold">Key Creditor Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSME Samadhaan (MSEFC s.18)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Any amount; Micro/Small Udyam prior to PO
                      </td>
                      <td className="p-3.5 text-slate-700">
                        90 days (statutory target)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        3x RBI compound interest; 75% buyer pre-deposit for appeal (s.19)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹3 Lakh+ Commercial Court; accepted invoices/PO
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day appearance window
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Defendant cannot defend without court leave &amp; security deposit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Commercial Courts s.12A + Order XIII-A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹3 Lakh+ (Medium/Non-MSME textile mills)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3–5 mo mediation; summary judgment
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Stops limitation clock; enables Order 38 Rule 5 asset attachment
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act Section 138 / 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Any amount with bounced PDC / security cheque
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day notice + 15-day cure
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Home-bank jurisdiction; 20% interim compensation; criminal summons
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC Section 8 Demand Notice
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹1 Crore+ against Pvt Ltd / Ltd Hotel SPV
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day statutory cure window
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Insolvency threat forces immediate promoter settlement
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Worked Financial Calculation */}
            <section
              id="worked-claim-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 7 &bull; Worked Financial Ledger
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Worked Claim Ledger: ₹32.40 Lakh Banquet Carpet &amp; Linen Arrears
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                Consider a Bhadohi carpet manufacturer and a Solapur hotel-linen unit jointly supplying a 110-key resort pre-opening order where ₹32,40,000 remains unpaid for 180 days past the 45-day MSMED s.15 cutoff:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-700 pb-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Principal Overdue Balance</p>
                    <p className="text-xl sm:text-2xl font-black text-white">₹32,40,000</p>
                    <p className="text-[11px] text-slate-400">Banquet carpets + 300-TC linen</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">MSMED s.16 Interest (6 Mo @ 19.5% p.a. comp.)</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-400">₹3,30,450</p>
                    <p className="text-[11px] text-slate-400">3x RBI Bank Rate (6.50% x 3)</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Total Statutory Claim</p>
                    <p className="text-xl sm:text-2xl font-black text-red-400">₹35,70,450</p>
                    <p className="text-[11px] text-slate-400">+ Legal &amp; MSEFC costs</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  <strong>Section 43B(h) Tax Impact on Hotel SPV:</strong> Leaving ₹32,40,000 unpaid past 31 March triggers a ~₹8,15,000–₹9,72,000 immediate corporate tax disallowance hit (25.17%–30% tax bracket) in the hotel&apos;s audited books—making settlement of your ₹35.70 Lakh claim far cheaper than litigation.
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 8 &bull; Evidentiary Readiness
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                BSA 2023 s.63 Evidence Checklist for Custom Hospitality Orders
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, WhatsApp swatch approvals, email POs, and digital hotel-launch evidence require proper electronic certification. Assemble these 8 records before serving your{" "}
                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  MSME Delayed Payment Demand Notice
                </Link>
                :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Udyam Registration Certificate (Micro/Small) dated prior to the Purchase Order date.",
                  "Approved Purchase Order, Proforma Invoice, or WhatsApp/email swatch & strike-off sign-offs.",
                  "GST Tax Invoices & E-Way Bills matching GSTR-1 / GSTR-2B ITC claimed by the buyer.",
                  "Transport Lorry Receipts (Bilties) & Hotel Gate-Entry Register stamps.",
                  "Room-by-Room Installation Sign-off or Housekeeping Linen Handover Sheet.",
                  "Live Hotel Photos / OTA Portal Listings showing your carpets, curtains, or linens in use.",
                  "Statement of Account / Running Ledger & Form 26AS TDS credit (if deducted u/s 194C/194J).",
                  "BSA 2023 Section 63 Certificate covering exported WhatsApp chats, emails, and ERP logs.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3 inline-block">
                Section 9 &bull; Legal Clarifications
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions: Home-Textile &amp; Hotel FF&amp;E Recovery
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
              <HomeTextilesNoticeCTA />
            </section>

            {/* Sibling Industry Spokes Directory */}
            <section className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Related Textile, Apparel &amp; Handloom Recovery Guides
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Explore specialized statutory playbooks across the IND-13 textile supply chain:
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
                  href="/garment-buying-house-export-order-cancelled-after-cutting-recovery"
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-red-400 hover:shadow-sm transition block text-xs font-semibold text-slate-800"
                >
                  &rarr; Garment Exporter Cancelled Order &amp; Air-Freight Recovery
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
