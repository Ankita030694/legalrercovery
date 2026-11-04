import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import PlotBookingNoticeCTA from "./PlotBookingNoticeCTA";
import PlotBookingTableOfContents from "./PlotBookingTableOfContents";
import PlotBookingChecklistWizard, {
  PlotBookingScenarioTabs,
  PlotCancellationLetterTemplate,
} from "./PlotBookingChecklistWizard";

// TODO(reviewer): src/data/reviewers.ts is not yet present in this repository; attach verified reviewer metadata once created.

export const metadata: Metadata = {
  title: "Plot Booking Amount Refund: Developer Not Returning Money",
  description:
    "Developer not refunding a plot booking amount? Forfeiture limits, RERA for plotted projects and the notice to send.",
  alternates: {
    canonical: "https://www.legalrecovery.in/plot-booking-refund-legal-notice",
  },
  openGraph: {
    title: "Plot Booking Amount Refund: Developer Not Returning Money",
    description:
      "Developer not refunding a plot booking amount? Forfeiture limits, RERA for plotted projects and the notice to send.",
    url: "https://www.legalrecovery.in/plot-booking-refund-legal-notice",
    siteName: "LegalRecovery.in",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plot Booking Amount Refund: Developer Not Returning Money",
    description:
      "Developer not refunding a plot booking amount? Forfeiture limits, RERA for plotted projects and the notice to send.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQ_ITEMS = [
  {
    question:
      "Does RERA apply to residential plots and plotted development projects in India?",
    answer:
      "Yes. Under Section 3(1) and Section 3(2)(a) of the Real Estate (Regulation and Development) Act, 2016 (RERA), every plotted development project where the area of land proposed to be developed exceeds 500 square metres OR the number of plots proposed to be developed exceeds 8 (inclusive of all phases) must be compulsorily registered with the State RERA Authority before the developer advertises, markets, or accepts any plot booking advance.",
  },
  {
    question:
      "How much booking amount can a plot developer legally deduct or forfeit upon cancellation?",
    answer:
      "If you cancel due to the developer's default—such as delayed possession, missing DTCP/Town Planning layout approval, lack of CLU/NA conversion, or false brochure promises—the developer cannot deduct a single rupee and must refund 100% of your money with SBI Highest MCLR + 2% interest under Section 12 and Section 18(1) of RERA. Even if you cancel purely for personal or loan reasons without developer fault, the Supreme Court in Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor (2022) 15 SCC 286 capped earnest money forfeiture at a maximum of 10% of the basic sale price, and pre-agreement token cuts are often capped even lower (₹0 to ₹25,000) by State RERA regulations.",
  },
  {
    question:
      "Can a colonizer take 20% to 50% plot advance without signing a registered Agreement for Sale?",
    answer:
      "No. Section 13(1) of the RERA Act, 2016 strictly prohibits any promoter or plot developer from accepting a sum more than 10% of the cost of the plot as an advance payment or application fee without first entering into a written Agreement for Sale and registering it. Collecting 20% to 50% on a mere 'Provisional Allotment Letter' or 'Expression of Interest (EOI)' is illegal and strengthens your right to a full refund.",
  },
  {
    question:
      "What if the plot I booked is in an unregistered colony, agricultural layout, or smaller than 500 sq. m.?",
    answer:
      "Even if a plotted project is unregistered or exempt from RERA, you have three strong legal remedies: (1) Under the Supreme Court ruling in Narne Construction Pvt. Ltd. v. Union of India, (2012) 5 SCC 359, any colonizer who promises layout development, roads, drainage, electricity, or approval services falls under the Consumer Protection Act, 2019, allowing you to file online on e-Jagriti; (2) Under Section 55(6)(b) of the Transfer of Property Act, 1882, you hold a statutory buyer's charge on the land itself for your prepaid advance plus interest; and (3) If the colonizer sold land without title or CLU approval, you can initiate criminal action under Section 318 (cheating) and Section 316 (criminal breach of trust) of the Bharatiya Nyaya Sanhita (BNS), 2023.",
  },
  {
    question:
      "Can the developer forfeit GST, EDC/IDC, PLC, or clubhouse charges when I cancel a plot booking?",
    answer:
      "No. Statutory levies (such as GST, External Development Charges [EDC], Infrastructure Development Charges [IDC]) and contingent charges (Preferential Location Charges [PLC], clubhouse membership, or maintenance deposits) never form part of 'earnest money'. Even in a buyer-initiated cancellation where a limited earnest deduction is permissible, 100% of non-earnest components must be refunded.",
  },
  {
    question:
      "How do I write and send a plot booking cancellation letter to a developer?",
    answer:
      "Your plot booking cancellation letter must clearly cite your application/allotment number, the exact UTR/cheque details of every payment made, the specific reason for cancellation (highlighting any approval delay, unexecuted Section 13 agreement, or layout defect), and your bank account details with a 15-day refund deadline. Always send it via both email and Registered Post A.D. (RPAD) so you have postal proof of service before escalating to an Advocate Legal Notice.",
  },
  {
    question:
      "Plot booking cancel karne ke baad builder ya colonizer paisa wapas nahi de raha toh legal notice kaise bheje?",
    answer:
      "Agar plot developer ya colonizer booking cancel karne ke baad refund taal raha hai ya 25%–50% paisa kaatne ki dhamki de raha hai, toh sabse pehle apne payment receipts, bank UTR statement, allotment letter aur WhatsApp chats sambhal kar rakhein. Ek real-estate Advocate ke madhyam se RERA Section 12/18, Contract Act Section 74 aur Transfer of Property Act Section 55(6)(b) ke tahat 15-din ka formal Legal Notice bhejein. Notice ke baad bhi paisa na milne par State RERA portal ya e-Jagriti Consumer Court mein 100% refund + MCLR+2% byaj ka case darj kiya ja sakta hai.",
  },
];

export default function PlotBookingRefundLegalNoticePage() {
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plot Booking Cancelled but No Refund? Recovering Your Money",
    description:
      "Developer not refunding a plot booking amount? Forfeiture limits, RERA for plotted projects and the notice to send.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.legalrecovery.in/plot-booking-refund-legal-notice",
    },
    datePublished: "2026-11-04",
    dateModified: "2026-11-04",
    author: {
      "@type": "Organization",
      name: "LegalRecovery Editorial & Real Estate Law Desk",
      url: "https://www.legalrecovery.in",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: "https://www.legalrecovery.in",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.legalrecovery.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Property & RERA Recovery Guides",
        item: "https://www.legalrecovery.in/rera-complaint-online-state-wise",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Plot Booking Refund Legal Notice",
        item: "https://www.legalrecovery.in/plot-booking-refund-legal-notice",
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* Breadcrumbs Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              {
                label: "Property & RERA Recovery",
                href: "/rera-complaint-online-state-wise",
              },
              {
                label: "Plot Booking Refund Legal Notice",
                href: "/plot-booking-refund-legal-notice",
              },
            ]}
          />
        </div>
      </div>

      {/* Hero Section — Strictly matching /cheque-bounce-case-against-company-directors & /legal-notice-to/irctc theme */}
      <header className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
              <span>RERA Section 3, 12, 13 &amp; 18</span>
              <span className="text-slate-600">•</span>
              <span>Section 55(6)(b) TPA Statutory Land Charge</span>
              <span className="text-slate-600">•</span>
              <span>Archetype G3 Checklist Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15] mb-6">
              Plot Booking Cancelled but No Refund? Recovering Your Money
            </h1>

            {/* 40–60 Word Quick Answer / Statutory Box */}
            <div className="bg-slate-900/90 border-l-4 border-amber-500 rounded-r-2xl p-5 sm:p-6 mb-8 shadow-lg">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-1.5">
                Statutory Quick Answer — Plot Booking Amount Refund Rules
              </p>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Under <strong>Section 3(2)(a) of RERA, 2016</strong>, plotted projects exceeding <strong>500 sq. m. or 8 plots</strong> require mandatory registration. If a developer delays plot possession or lacks layout approvals, <strong>Section 18(1)</strong> mandates a <strong>100% refund with SBI MCLR + 2% interest</strong>. For buyer-initiated cancellations, Supreme Court law caps earnest forfeiture at <strong>10% of the basic price</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <PlotBookingNoticeCTA label="Draft Plot Refund Legal Notice" />
              <a
                href="#cancellation-letter-format"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm transition-colors border border-slate-700"
              >
                Free Plot Cancellation Letter Format ↓
              </a>
            </div>

            {/* 4 Verified Legal Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <p className="text-xl sm:text-2xl font-black text-amber-400">
                  &gt;500 sq. m.
                </p>
                <p className="text-xs font-bold text-white mt-0.5">
                  Or &gt;8 Plots Threshold
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Mandatory RERA cover u/s 3(2)(a)
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">
                  Max 10%
                </p>
                <p className="text-xs font-bold text-white mt-0.5">
                  Earnest Forfeiture Cap
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Experion Developers SC (2022)
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <p className="text-xl sm:text-2xl font-black text-amber-400">
                  MCLR + 2%
                </p>
                <p className="text-xs font-bold text-white mt-0.5">
                  ~10.85%–11.10% p.a. Interest
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  100% refund on developer default
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">
                  Sec 55(6)(b)
                </p>
                <p className="text-xs font-bold text-white mt-0.5">
                  Statutory Land Charge
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Covers non-RERA &amp; revenue plots
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main 12-Column Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Sticky TOC & Quick Facts */}
          <div className="lg:col-span-4">
            <PlotBookingTableOfContents />
          </div>

          {/* Right Column: Main Guide Content */}
          <article className="lg:col-span-8 space-y-12">
            {/* Section 1: Does RERA Apply to Plots? */}
            <section
              id="rera-plot-rules"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 01</span>
                <span>•</span>
                <span>Statutory Framework for Plotted Developments</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Does RERA Apply to Plots? Statutory Rules for Plot Booking Amount Refunds
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                A widespread myth promoted by colonizers, land aggregators, and township developers is that the{" "}
                <strong>Real Estate (Regulation and Development) Act, 2016 (RERA)</strong> only protects flat buyers in high-rise apartments and does not apply to residential plots. In reality,{" "}
                <strong>Section 2(zj)</strong> and <strong>Section 3(1) read with Section 3(2)(a) of RERA</strong> explicitly govern plotted developments. Whenever a developer proposes to develop a land parcel exceeding{" "}
                <strong>500 square metres</strong> or containing <strong>more than 8 plots</strong> (across all phases combined) for the purpose of selling plots, RERA registration is mandatory before collecting a single rupee as a booking advance.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                Whether you booked a residential plot in a township (such as DDJAY plotted colonies in Gurugram/Sohna, NA layouts in Pune/Nagpur, BDA/BIAAPA/DTCP layouts around Bengaluru and Chennai, or HMDA layouts in Hyderabad) or paid an advance to a local colonizer, Indian law provides a three-shield statutory framework to recover a stuck{" "}
                <strong>plot booking amount refund</strong>—alongside our general guide on{" "}
                <Link
                  href="/builder-booking-cancellation-refund-legal-notice"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  builder booking cancellation refund legal notices
                </Link>
                :
              </p>

              {/* Key Statutory Facts Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <caption className="sr-only">
                    Statutory Provisions Governing Plot Booking Amount Refunds in India
                  </caption>
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">What It Regulates</th>
                      <th className="p-3.5 font-bold">Buyer&apos;s Refund Right</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 3(1) &amp; 3(2)(a), RERA 2016
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Plotted projects &gt;500 sq. m. or &gt;8 plots across all phases
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Selling plots without RERA registration is illegal; triggers 100% refund + Section 59 penalty on colonizer (up to 10% of project cost).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 12 &amp; 18(1), RERA 2016
                      </td>
                      <td className="p-3.5 text-slate-700">
                        False brochure/layout approval claims or delayed plot possession
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Unconditional <strong>100% principal refund + SBI Highest MCLR + 2% interest</strong> from the date of each payment within 45 days.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 13(1), RERA 2016
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Maximum booking advance before registered Agreement for Sale
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Developer cannot take &gt;10% advance without executing &amp; registering an Agreement for Sale. Pre-agreement forfeiture is barred or strictly capped.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 74, Indian Contract Act, 1872
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Buyer-initiated plot cancellation (no developer fault)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Earnest money deduction cannot exceed <strong>10% of basic plot price</strong> (<em>Experion Developers</em> SC); GST, EDC/IDC &amp; PLC are 100% refundable.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 2(7) &amp; 2(42), Consumer Protection Act, 2019
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Plotted colonies promising roads, water, sewage, or layout approvals
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Buyer is a &ldquo;Consumer&rdquo; (<em>Narne Construction</em> SC); can file online on <strong>e-Jagriti</strong> (District Commission up to ₹50 lakh) even if unregistered under RERA.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 55(6)(b), Transfer of Property Act, 1882
                      </td>
                      <td className="p-3.5 text-slate-700">
                        All plot purchases (including non-RERA, revenue, or individual plots)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Creates a <strong>statutory charge on the land itself</strong> for 100% of prepaid booking money + interest unless buyer improperly declines delivery.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950">
                <strong>Crucial Distinction (Raw Land vs. Plotted Development):</strong> In{" "}
                <em>Ganeshlal v. Shyam</em> (2014), the Supreme Court noted that a one-off sale of a standalone plot by an individual without any development promise is a simple sale of land. However, in{" "}
                <strong><em>Narne Construction Pvt. Ltd. v. Union of India</em>, (2012) 5 SCC 359</strong>, the Supreme Court held that whenever a developer or colonizer carves out plots, promises layout sanction, internal roads, drainage, electrification, or parks, it constitutes a <strong>&ldquo;housing/development service&rdquo;</strong>—making the developer fully liable before both Consumer Commissions (e-Jagriti) and State RERA Authorities.
              </div>
            </section>

            {/* Section 2: Archetype G3 Interactive Pre-Flight Checklist Wizard */}
            <section
              id="checklist-wizard"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 02</span>
                <span>•</span>
                <span>Archetype G3 Readiness Diagnostic</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Pre-Flight Readiness Wizard: 6 Steps Before Demanding a Plot Booking Refund
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before sending a cancellation email or signing a developer&apos;s one-sided &ldquo;surrendercum-indemnity bond&rdquo; (which often hides a 25%–50% forfeiture waiver), run through this 6-point statutory checklist to lock in your evidentiary position:
              </p>

              <PlotBookingChecklistWizard />
            </section>

            {/* Section 3: How Much Can a Plot Developer Deduct? Forfeiture Cap Matrix */}
            <section
              id="forfeiture-limits"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 03</span>
                <span>•</span>
                <span>Forfeiture Limits &amp; Deduction Rules</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                How Much Can a Plot Developer Deduct? Earnest Money &amp; Forfeiture Cap Matrix
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                Plot developers routinely insert clauses in booking application forms stating that{" "}
                <em>&ldquo;20% of the total plot value or 100% of the booking amount paid shall stand forfeited upon cancellation.&rdquo;</em>{" "}
                Both the Supreme Court of India and State RERA Authorities have repeatedly struck down such clauses as unconscionable penalties under{" "}
                <strong>Section 74 of the Indian Contract Act, 1872</strong> and{" "}
                <strong>Section 2(46) of the Consumer Protection Act, 2019</strong>. You can compute your exact statutory interest claim using our{" "}
                <Link
                  href="/tools/rera-refund-interest-calculator"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  RERA Refund Interest Calculator (SBI MCLR + 2%)
                </Link>
                .
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <caption className="sr-only">
                    Permissible Forfeiture Limits on Plot Booking Cancellation Across Scenarios
                  </caption>
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Cancellation Scenario</th>
                      <th className="p-3.5 font-bold">Who Defaulted?</th>
                      <th className="p-3.5 font-bold">Max Legal Deduction</th>
                      <th className="p-3.5 font-bold">Interest Payable to Buyer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        No DTCP / Town Planning Sanction, Missing CLU/NA, or Unregistered Layout (&gt;500 sq. m.)
                      </td>
                      <td className="p-3.5 text-red-700 font-semibold">
                        Developer Default (Sec 3 &amp; 12 RERA)
                      </td>
                      <td className="p-3.5 font-extrabold text-emerald-700">
                        ₹0 (0% Deduction — 100% Refund)
                      </td>
                      <td className="p-3.5 text-slate-800">
                        SBI Highest MCLR + 2% (~10.85%–11.10% p.a.) from each payment date
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Delayed Plot Possession / No Demarcation, Roads, Sewage or Electricity by Due Date
                      </td>
                      <td className="p-3.5 text-red-700 font-semibold">
                        Developer Default (Sec 18(1) RERA)
                      </td>
                      <td className="p-3.5 font-extrabold text-emerald-700">
                        ₹0 (0% Deduction — 100% Refund)
                      </td>
                      <td className="p-3.5 text-slate-800">
                        SBI Highest MCLR + 2% (or +1% in UP RERA) within 45 days of demand
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Buyer Cancels at Token / EOI Stage <em>Before</em> Signing Registered Agreement for Sale
                      </td>
                      <td className="p-3.5 text-amber-800 font-semibold">
                        Buyer Exit (Pre-Sec 13 Stage)
                      </td>
                      <td className="p-3.5 font-bold text-slate-900">
                        ₹0 to ₹25,000 (Nominal Admin Fee; HARERA / MahaRERA Norms)
                      </td>
                      <td className="p-3.5 text-slate-800">
                        Interest @ 9%–10.85% p.a. if developer withholds balance beyond 45 days
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Buyer Cancels <em>After</em> Registered Agreement Due to Loan Rejection / Personal Reasons
                      </td>
                      <td className="p-3.5 text-amber-800 font-semibold">
                        Buyer Exit (No Developer Fault)
                      </td>
                      <td className="p-3.5 font-bold text-slate-900">
                        Max <strong>10% of Basic Plot Price</strong> (100% of EDC/IDC, PLC &amp; GST must be refunded)
                      </td>
                      <td className="p-3.5 text-slate-800">
                        Balance above 10% must be refunded within 45–60 days; interest applies on delay
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Buyer Cancels &amp; Developer Resells the Same Plot at an Equal or Higher Rate
                      </td>
                      <td className="p-3.5 text-amber-800 font-semibold">
                        Buyer Exit, Zero Developer Loss
                      </td>
                      <td className="p-3.5 font-extrabold text-emerald-700">
                        Nominal / Zero Forfeiture (<em>Kailash Nath v. DDA</em>, 2015 SC)
                      </td>
                      <td className="p-3.5 text-slate-800">
                        Where no actual loss is suffered on resale, punitive forfeiture is barred u/s 74 Contract Act
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Note on Token / Bayana vs. Earnest Money:</strong> If your dispute involves an individual plot resale or a failed property deal with a private landowner rather than a colonizer/developer, read our dedicated guide on{" "}
                <Link
                  href="/token-money-refund-property-deal"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  token money and bayana refund rules when a property deal fails
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Archetype G3 Document & Evidence Matrix */}
            <section
              id="evidence-matrix"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 04</span>
                <span>•</span>
                <span>Archetype G3 Mandatory Evidence Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Document &amp; Evidence Matrix: 7 Records Required to Recover Your Plot Advance
              </h2>

              <p className="text-slate-700 leading-relaxed mb-5">
                When our real-estate advocates draft a plot booking refund legal notice or file a petition before State RERA / e-Jagriti, these seven documentary records establish an airtight claim under{" "}
                <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <caption className="sr-only">
                    Document and Evidence Matrix for Plot Booking Refund Claims
                  </caption>
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Document / Record</th>
                      <th className="p-3.5 font-bold">Why It Matters Legally</th>
                      <th className="p-3.5 font-bold">Where to Obtain It (If Missing)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        1. Booking Receipts &amp; Bank Account Statement (UTR / Cheque Nos.)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Proves exact principal paid and triggers per-instalment interest computation under Section 18(1) RERA &amp; Section 55(6)(b) TPA.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Download stamped NEFT/RTGS/IMPS/cheque clearance statement from your net-banking portal.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        2. Booking Application Form / Expression of Interest (EOI) / Allotment Letter
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Identifies plot number, dimensions, basic sale price, and proves whether &gt;10% was taken without a Section 13 registered agreement.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Check welcome emails from the developer&apos;s CRM or request a copy from the channel partner/broker.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        3. Marketing Brochure, Layout Map &amp; Price Sheet
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Under Section 12 of RERA, every representation in a brochure or layout plan is legally binding; deviations entitle you to a 100% refund.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Retrieve from WhatsApp media history, project website archives, or State RERA project document uploads.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        4. State RERA Project Registration Snapshot &amp; Quarterly QPR Filings
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Shows the official completion deadline declared by the promoter and whether layout approvals/land title are actually uploaded.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Search the project name on your State RERA portal (MahaRERA, UP RERA, HARERA, K-RERA, TNRERA, etc.).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        5. DTCP / Town Planning / CLU / NA Sanction Status
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Proves whether the colonizer sold plots in an unapproved or tentative layout, establishing per se deficiency and Section 12 liability.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Check state Town &amp; Country Planning portals (DTCP Haryana/TN, HMDA, PMRDA, BDA/BIAAPA) or file an RTI.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        6. Written Cancellation Email &amp; Developer&apos;s Forfeiture/Delay Replies
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Locks in the date of demand (starts the 45-day RERA refund clock) and records any unlawful forfeiture threat in writing.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Export email thread as PDF with full headers + RPAD postal receipt and tracking sheet.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        7. Geotagged Site Photographs &amp; WhatsApp Chat Export (BSA Sec 63)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Demonstrates raw agricultural/undeveloped land on site despite developer&apos;s possession demand letters.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Take timestamped photos of the plot site and export WhatsApp chats with a Section 63 BSA certificate.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Landmark Supreme Court & RERA Rulings */}
            <section
              id="court-precedents"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 05</span>
                <span>•</span>
                <span>Verifiable Judicial &amp; RERA Precedents</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Landmark Supreme Court &amp; RERA Rulings on Plotted Developments and Booking Refunds
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                When a developer refuses to return your plot advance, citing one-sided application clauses or claiming that plots fall outside consumer/RERA protection, citing these four binding precedents in your legal notice dismantles their defence immediately:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <article className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                      Supreme Court of India • Plotted Colonies
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      Narne Construction Pvt. Ltd. v. Union of India, (2012) 5 SCC 359
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      The developer contended that selling residential plots in a layout was an outright sale of immovable property excluded from consumer forums. Rejecting this, the Supreme Court held that when a colonizer undertakes layout approvals, demarcation, internal roads, drainage, and civic amenities, it renders a <strong>&ldquo;service&rdquo;</strong> connected with housing construction—entitling plot buyers to full Consumer Commission remedies for refund and interest.
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-amber-800 border-t border-slate-200 pt-2.5">
                    Impact: Brings even non-RERA plotted layouts under e-Jagriti jurisdiction.
                  </p>
                </article>

                <article className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                      Supreme Court (3-Judge Bench) • Sec 18 RERA
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP, (2021) 18 SCC 1
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      A 3-Judge Bench of the Supreme Court settled that an allottee&apos;s right under{" "}
                      <strong>Section 18(1) of RERA, 2016</strong> to demand a complete refund of the amount paid with prescribed MCLR + 2% interest is <strong>unqualified and absolute</strong> once the promoter fails to give possession of the plot or apartment in accordance with the terms of the agreement.
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-amber-800 border-t border-slate-200 pt-2.5">
                    Impact: Developers cannot force delayed plot buyers to accept alternate plots.
                  </p>
                </article>

                <article className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                      Supreme Court of India • 10% Earnest Cap
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286 &amp; Maula Bux (1969) 2 SCC 554
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Affirming <em>Maula Bux v. Union of India</em> and <em>DLF Ltd. v. Bhagwanti Narula</em>, the Supreme Court held that earnest money forfeiture for buyer cancellation cannot exceed <strong>10% of the basic sale consideration</strong>. Any clause forfeiting 20%–50% of paid installments is an unconscionable penalty void under Section 74 of the Contract Act, 1872.
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-amber-800 border-t border-slate-200 pt-2.5">
                    Impact: Overrides 25%–50% forfeiture clauses in plot booking forms.
                  </p>
                </article>

                <article className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                      State RERA Regulations • Pre-Agreement Token
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      HARERA Gurugram Forfeiture Regulations, 2018 &amp; Section 13(1) RERA Orders
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      State RERA authorities (including HARERA Gurugram and MahaRERA) have ruled that where a buyer cancels a booking before the execution of a registered Agreement for Sale under Section 13(1), the developer cannot forfeit 10% of the total plot cost and is restricted to a nominal administrative deduction (capped at ₹25,000 in हरियाणा/HARERA pre-allotment tiers) or 0% if approvals were pending.
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-amber-800 border-t border-slate-200 pt-2.5">
                    Impact: Protects buyers who only paid an EOI or provisional booking token.
                  </p>
                </article>
              </div>
            </section>

            {/* Section 6: Hand-Authored SVG Escalation Flowchart */}
            <section
              id="escalation-flow"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 06</span>
                <span>•</span>
                <span>Visual Recovery Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Where Plot Refunds Get Stuck: 5-Stage Legal Escalation Architecture
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Most plot buyers lose months because they negotiate verbally with sales executives who have zero authority to release funds from the developer&apos;s escrow account. The diagram below maps the exact statutory escalation rail from cancellation to bank realization:
              </p>

              {/* Desktop / Tablet SVG Flowchart */}
              <figure className="my-6 bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-lg">
                <div className="hidden md:block overflow-x-auto">
                  <svg
                    viewBox="0 0 920 230"
                    role="img"
                    aria-label="5-stage plot booking amount refund escalation flowchart from cancellation letter to Section 40 RERA or e-Jagriti recovery"
                    className="w-full h-auto min-w-[760px]"
                  >
                    <defs>
                      <marker
                        id="arrowAmber"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect
                      x="10"
                      y="35"
                      width="155"
                      height="145"
                      rx="12"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text
                      x="24"
                      y="62"
                      fill="#fbbf24"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      STAGE 01 • DAY 0
                    </text>
                    <text
                      x="24"
                      y="84"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      Written Cancellation
                    </text>
                    <text x="24" y="106" fill="#94a3b8" fontSize="11">
                      • Email + RPAD Letter
                    </text>
                    <text x="24" y="124" fill="#94a3b8" fontSize="11">
                      • Cite Sec 12/13/18 RERA
                    </text>
                    <text x="24" y="142" fill="#94a3b8" fontSize="11">
                      • Refuse 25%–50% cut
                    </text>
                    <text x="24" y="162" fill="#34d399" fontSize="10" fontWeight="bold">
                      Locks 45-Day Clock
                    </text>

                    <line
                      x1="165"
                      y1="107"
                      x2="192"
                      y2="107"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowAmber)"
                    />

                    {/* Stage 2 */}
                    <rect
                      x="198"
                      y="35"
                      width="155"
                      height="145"
                      rx="12"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text
                      x="212"
                      y="62"
                      fill="#fbbf24"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      STAGE 02 • DAY 7
                    </text>
                    <text
                      x="212"
                      y="84"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      RERA / DTCP Audit
                    </text>
                    <text x="212" y="106" fill="#94a3b8" fontSize="11">
                      • Check &gt;500 sq m / 8 plots
                    </text>
                    <text x="212" y="124" fill="#94a3b8" fontSize="11">
                      • Verify CLU &amp; Layout Plan
                    </text>
                    <text x="212" y="142" fill="#94a3b8" fontSize="11">
                      • Audit Sec 13 10% cap
                    </text>
                    <text x="212" y="162" fill="#34d399" fontSize="10" fontWeight="bold">
                      Exposes Promoter Fault
                    </text>

                    <line
                      x1="353"
                      y1="107"
                      x2="380"
                      y2="107"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowAmber)"
                    />

                    {/* Stage 3 */}
                    <rect
                      x="386"
                      y="25"
                      width="165"
                      height="165"
                      rx="12"
                      fill="#1e293b"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                    />
                    <text
                      x="400"
                      y="52"
                      fill="#fbbf24"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      STAGE 03 • DAY 15
                    </text>
                    <text
                      x="400"
                      y="74"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      Advocate Legal Notice
                    </text>
                    <text x="400" y="96" fill="#e2e8f0" fontSize="11">
                      • Sec 18(1) MCLR+2% Claim
                    </text>
                    <text x="400" y="114" fill="#e2e8f0" fontSize="11">
                      • Sec 55(6)(b) Land Charge
                    </text>
                    <text x="400" y="132" fill="#e2e8f0" fontSize="11">
                      • Sec 74 Forfeiture Challenge
                    </text>
                    <text x="400" y="150" fill="#e2e8f0" fontSize="11">
                      • 15-Day Final Ultimatum
                    </text>
                    <text x="400" y="172" fill="#fbbf24" fontSize="10" fontWeight="bold">
                      Highest Pre-Suit Settlement
                    </text>

                    <line
                      x1="551"
                      y1="107"
                      x2="578"
                      y2="107"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowAmber)"
                    />

                    {/* Stage 4 */}
                    <rect
                      x="584"
                      y="35"
                      width="150"
                      height="145"
                      rx="12"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text
                      x="598"
                      y="62"
                      fill="#fbbf24"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      STAGE 04 • DAY 30
                    </text>
                    <text
                      x="598"
                      y="84"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      Statutory Filing
                    </text>
                    <text x="598" y="106" fill="#94a3b8" fontSize="11">
                      • State RERA (Form M)
                    </text>
                    <text x="598" y="124" fill="#94a3b8" fontSize="11">
                      • e-Jagriti (Non-RERA)
                    </text>
                    <text x="598" y="142" fill="#94a3b8" fontSize="11">
                      • Order 37 Summary Suit
                    </text>
                    <text x="598" y="162" fill="#34d399" fontSize="10" fontWeight="bold">
                      Online Portal Hearing
                    </text>

                    <line
                      x1="734"
                      y1="107"
                      x2="758"
                      y2="107"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowAmber)"
                    />

                    {/* Stage 5 */}
                    <rect
                      x="764"
                      y="35"
                      width="146"
                      height="145"
                      rx="12"
                      fill="#064e3b"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <text
                      x="778"
                      y="62"
                      fill="#6ee7b7"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      STAGE 05 • ORDER
                    </text>
                    <text
                      x="778"
                      y="84"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      Sec 40 Attachment
                    </text>
                    <text x="778" y="106" fill="#d1fae5" fontSize="11">
                      • Recovery Certificate
                    </text>
                    <text x="778" y="124" fill="#d1fae5" fontSize="11">
                      • Bank A/c Attachment
                    </text>
                    <text x="778" y="142" fill="#d1fae5" fontSize="11">
                      • Plot Land Charge Lien
                    </text>
                    <text x="778" y="162" fill="#fbbf24" fontSize="10" fontWeight="bold">
                      100% + Interest Realized
                    </text>
                  </svg>
                </div>

                {/* Mobile Vertical Step Equivalent */}
                <ol className="md:hidden space-y-3 text-xs text-slate-200">
                  <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-amber-400 block mb-0.5">
                      STAGE 01 (Day 0): Written Cancellation Demand
                    </strong>
                    Serve dated cancellation email + RPAD letter citing Section 12/13/18 RERA and rejecting arbitrary 25%–50% forfeiture.
                  </li>
                  <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-amber-400 block mb-0.5">
                      STAGE 02 (Day 7): RERA &amp; DTCP Approval Audit
                    </strong>
                    Verify if the layout exceeds 500 sq. m. / 8 plots, check CLU/NA &amp; layout sanctions, and audit Section 13(1) 10% advance breach.
                  </li>
                  <li className="p-3.5 rounded-xl bg-slate-900 border-2 border-amber-500">
                    <strong className="text-amber-400 block mb-0.5">
                      STAGE 03 (Day 15): Statutory Advocate Legal Notice
                    </strong>
                    Serve a 15-day Legal Notice invoking Section 18(1) RERA (MCLR+2%), Section 55(6)(b) TPA statutory charge on land, and Section 74 Contract Act.
                  </li>
                  <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-amber-400 block mb-0.5">
                      STAGE 04 (Day 30): State RERA Form M or e-Jagriti Filing
                    </strong>
                    File online complaint before State RERA Authority or District Consumer Commission (e-Jagriti) / Order 37 CPC Summary Suit.
                  </li>
                  <li className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-600">
                    <strong className="text-emerald-300 block mb-0.5">
                      STAGE 05 (Execution): Section 40 Recovery Certificate
                    </strong>
                    Enforce refund + interest as arrears of land revenue via District Collector attachment of developer bank accounts and plot inventory.
                  </li>
                </ol>

                <figcaption className="mt-3 text-center text-xs text-slate-400">
                  Figure 1: 5-Stage Legal Escalation Pipeline for Plot Booking Amount Refunds (RERA Plotted Colonies &amp; Non-RERA Layouts).
                </figcaption>
              </figure>
            </section>

            {/* Section 7: Archetype G3 Dated Process Timeline (<ol> with <time>) */}
            <section
              id="recovery-timeline"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 07</span>
                <span>•</span>
                <span>Archetype G3 Dated Action Schedule</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Dated Recovery Timeline: From Plot Cancellation Letter to RERA or Consumer Execution
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Under <strong>Rule 19 of the Central/State RERA Rules</strong>, a promoter is statutorily obligated to refund the full amount with interest within{" "}
                <strong>45 days</strong> (60 days in select state rules) of a valid cancellation demand. Follow this strict dated schedule so the colonizer cannot drag your refund across financial years:
              </p>

              <ol className="relative border-l-2 border-amber-500 ml-3 space-y-6">
                <li className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <time
                      dateTime="P0D"
                      className="px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-xs font-extrabold"
                    >
                      Day 01
                    </time>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Dispatch Written Plot Booking Cancellation &amp; Refund Demand
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Send the written cancellation notice (see Section 09 format below) to the developer&apos;s official CRM email and registered office via Speed Post / RPAD. Do not hand over your original payment receipts or allotment letter until the refund UTR is credited to your bank account.
                  </p>
                </li>

                <li className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <time
                      dateTime="P7D"
                      className="px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-xs font-extrabold"
                    >
                      Day 07–14
                    </time>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Reject Unlawful Surrender Deeds &amp; Forfeiture Waivers
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If the developer replies demanding that you sign a notarized &ldquo;No-Objection / Surrender Affidavit&rdquo; accepting a 20%–50% deduction or post-dated cheques dated 9 months later, reject it in writing immediately. Signing an unconditional settlement affidavit weakens your right to claim statutory interest later.
                  </p>
                </li>

                <li className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <time
                      dateTime="P15D"
                      className="px-2.5 py-0.5 rounded bg-amber-600 text-white text-xs font-extrabold"
                    >
                      Day 15
                    </time>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Serve Statutory Advocate Legal Notice (15-Day Ultimatum)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Have a real-estate advocate serve a formal Legal Notice on the company and its directors invoking{" "}
                    <strong>Section 12, 13(1) &amp; 18(1) of RERA</strong>,{" "}
                    <strong>Section 74 of the Contract Act</strong>, and{" "}
                    <strong>Section 55(6)(b) of the Transfer of Property Act</strong> (statutory land charge), alongside a Section 59 RERA penalty alert if the plotted layout is unregistered.
                  </p>
                </li>

                <li className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <time
                      dateTime="P30D"
                      className="px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-xs font-extrabold"
                    >
                      Day 30–45
                    </time>
                    <h3 className="text-base font-extrabold text-slate-900">
                      File Online Complaint on State RERA Portal (Form M) or e-Jagriti
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If the developer fails to settle within the 15-day notice window, file an online refund petition on your{" "}
                    <Link
                      href="/rera-complaint-online-state-wise"
                      className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                    >
                      state-wise RERA complaint portal
                    </Link>{" "}
                    (for projects &gt;500 sq. m. / &gt;8 plots) or on the{" "}
                    <strong>e-Jagriti Consumer Portal</strong> (for smaller layouts or service deficiency claims up to ₹50 lakh before the District Commission).
                  </p>
                </li>

                <li className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <time
                      dateTime="P90D"
                      className="px-2.5 py-0.5 rounded bg-emerald-700 text-white text-xs font-extrabold"
                    >
                      Post-Order Execution
                    </time>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Enforce via Section 40 RERA Recovery Certificate (RC)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Once RERA grants your refund order, if the colonizer still delays payment, apply for a{" "}
                    <Link
                      href="/rera-refund-order-not-paid-recovery-certificate"
                      className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                    >
                      RERA Section 40 Recovery Certificate (RC)
                    </Link>{" "}
                    so the District Collector/Tehsildar attaches the developer&apos;s bank accounts and unsold plots as arrears of land revenue.
                  </p>
                </li>
              </ol>
            </section>

            {/* Section 8: Plot Developer Dispute Scenarios (Interactive Tabs) */}
            <section
              id="dispute-scenarios"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 08</span>
                <span>•</span>
                <span>Scenario-Specific Legal Remedies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Plot Developer Dispute Scenarios: Unapproved Layouts, Loan Rejection &amp; Forfeiture Traps
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Select your exact plot booking dispute below to view the controlling statutory rule, maximum permissible deduction, and 3-step recovery strategy. (If your plot was booked under a tripartite bank loan scheme where the developer stopped paying pre-EMIs, see our guide on{" "}
                <Link
                  href="/subvention-scheme-pre-emi-builder-default"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  subvention scheme Pre-EMI builder defaults
                </Link>
                .)
              </p>

              <PlotBookingScenarioTabs />
            </section>

            {/* Section 9: Archetype G3 Plot Booking Cancellation Letter Format */}
            <section
              id="cancellation-letter-format"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 09</span>
                <span>•</span>
                <span>Downloadable Pre-Notice Demand Template</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Plot Booking Cancellation Letter Format (Pre-Notice Written Demand Template)
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                Before serving a formal Advocate Legal Notice, you should place a clear written cancellation and refund demand on record so the developer cannot claim you defaulted on future payment milestones. Copy or download our{" "}
                <strong>plot booking cancellation letter format</strong> below (for apartment bookings, see our{" "}
                <Link
                  href="/templates/flat-booking-cancellation-letter"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  flat booking cancellation letter template
                </Link>
                ):
              </p>

              <PlotCancellationLetterTemplate />
            </section>

            {/* Section 10: Illustrative Worked Case Study */}
            <section
              id="case-study"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 10</span>
                <span>•</span>
                <span>Illustrative Worked Recovery Example</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Worked Case Study: Buyer Recovers ₹9,50,000 Plot Advance + ₹1,18,400 Interest From Colonizer
              </h2>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 block">
                      Illustrative Scenario • Plotted Colony Dispute (Sohna / Gurugram Region)
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      25% Paid on 150 Sq. Yd. Plot; Developer Lacked Final DTCP Demarcation &amp; Demanded 20% Forfeiture
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900">
                    Recovered: ₹10,68,400 in 14 Days
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Total Plot Price:</span>
                    <strong className="text-sm text-slate-900">
                      ₹38,00,000 (150 Sq. Yds.)
                    </strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Booking Advance Paid:</span>
                    <strong className="text-sm text-slate-900">
                      ₹9,50,000 (25% via RTGS)
                    </strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Developer&apos;s Illegal Cut:</span>
                    <strong className="text-sm text-red-700">
                      ₹7,60,000 (20% Basic Price)
                    </strong>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong>1. The Trap:</strong> An IT professional booked a 150 sq. yd. residential plot in a 14-acre plotted colony for ₹38,00,000 and paid ₹9,50,000 (25% of plot cost) across two RTGS transfers based on a glossy brochure promising possession within 12 months. However, the developer never executed a registered Agreement for Sale under Section 13 of RERA, and site visits 14 months later revealed raw agricultural land without final DTCP demarcation or internal roads. When the buyer requested a refund, the developer cited an application clause forfeiting 20% of the total plot cost (₹7,60,000) and offered to return only ₹1,90,000.
                  </p>
                  <p>
                    <strong>2. The Statutory Legal Notice:</strong> Rather than accepting the ₹7.60 lakh haircut, the buyer engaged an advocate to serve a 15-day statutory Legal Notice on the company&apos;s Managing Director and RERA-registered compliance officer. The notice highlighted three fatal statutory violations by the developer:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-800 font-medium">
                    <li>
                      <strong>Breach of Section 13(1) RERA:</strong> Collecting 25% (₹9,50,000) without first executing and registering an Agreement for Sale (which caps pre-agreement collection at 10%).
                    </li>
                    <li>
                      <strong>Section 12 &amp; Section 18(1) RERA Default:</strong> Failing to complete layout demarcation and internal roads within the promised timeline, triggering a 100% refund with SBI Highest MCLR + 2% interest (10.90% p.a.) under <em>Newtech Promoters (2021) 18 SCC 1</em>.
                    </li>
                    <li>
                      <strong>Section 55(6)(b) TPA Statutory Land Charge:</strong> Putting the developer&apos;s project lender and authorities on notice of a statutory buyer&apos;s charge over the project land parcel.
                    </li>
                  </ul>
                  <p>
                    <strong>3. The Outcome:</strong> Faced with an imminent HARERA Form M complaint and a Section 59/61 RERA penalty exposure for violating Section 13(1), the developer&apos;s legal cell contacted the buyer on Day 11 and executed a consent settlement crediting{" "}
                    <strong>₹9,50,000 (100% principal) + ₹1,18,400 (agreed delay interest) = ₹10,68,400</strong> via RTGS on Day 14.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Honest Scope & Limitations */}
            <section
              id="honest-scope"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 11</span>
                <span>•</span>
                <span>Transparency &amp; Scope Disclosure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Honest Scope: When an Advocate Notice Works vs. When You Need RERA or Civil Court
              </h2>

              <p className="text-slate-700 leading-relaxed mb-5">
                We believe in complete transparency before you spend{" "}
                <strong>₹{basePrice.toLocaleString("en-IN")}</strong> on a{" "}
                <Link
                  href="/send-legal-notice"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  formal advocate legal notice
                </Link>{" "}
                {/* TODO(link): /legal-notice-charges — build pending */}
                :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5">
                  <h3 className="font-extrabold text-emerald-950 text-sm sm:text-base mb-2.5 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Where a Legal Notice Resolves the Dispute Fast
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>
                      • <strong>Active RERA/Township Developers:</strong> Solvent builders and colonizers who want to avoid Section 13/59 RERA penalties or adverse orders on their RERA project page.
                    </li>
                    <li>
                      • <strong>Pre-Agreement Token / EOI Refunds:</strong> Where the sales team is threatening 25%–50% forfeiture on a booking form without a registered Agreement for Sale.
                    </li>
                    <li>
                      • <strong>Mandatory Pre-Litigation Proof:</strong> Establishes the formal 15-day default record required before filing Form M in State RERA, e-Jagriti, or an Order 37 Summary Suit.
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-5">
                  <h3 className="font-extrabold text-rose-950 text-sm sm:text-base mb-2.5 flex items-center gap-2">
                    <span className="text-rose-600">✕</span> Where Litigation / FIR Is Also Required
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>
                      • <strong>Absconding / Fly-by-Night Land Mafia:</strong> If a local colonizer sold government/forest land without title and shut down offices, you will need a criminal FIR under <strong>Section 318/316 BNS</strong> alongside civil attachment.
                    </li>
                    <li>
                      • <strong>Developer in NCLT Insolvency (IBC):</strong> If the company is already admitted into CIRP before NCLT, a moratorium under Section 14 IBC applies and you must file a Financial Creditor claim in <strong>Form CA</strong> before the Resolution Professional.
                    </li>
                    <li>
                      • <strong>Cash Payments Without Receipts:</strong> Unaccounted cash components without written receipts or bank trail cannot be enforced in RERA.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conversion CTA Banner */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Advocate-Drafted Statutory Demand
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Stop the Developer From Forfeiting Your Plot Advance
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Get a customized 15-day Legal Notice drafted and served by an experienced real-estate advocate invoking{" "}
                  <strong>RERA Section 12, 13 &amp; 18(1)</strong>,{" "}
                  <strong>Section 74 Contract Act</strong>, and{" "}
                  <strong>Section 55(6)(b) Transfer of Property Act</strong>—complete with Speed Post RPAD tracking and email service.
                </p>
                <PlotBookingNoticeCTA label="Draft & Serve Plot Refund Notice Now" />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section
              id="faqs"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 12</span>
                <span>•</span>
                <span>Verified Legal Q&amp;A</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions: Plot Booking Refund Under RERA &amp; Cancellation Rules
              </h2>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 font-bold text-slate-900 cursor-pointer list-none text-sm sm:text-base">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-amber-600 group-open:text-white flex items-center justify-center text-xs font-extrabold shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Primary Statutes & Official Sources */}
            <section
              id="sources"
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-2">
                <span>Section 13</span>
                <span>•</span>
                <span>Authoritative Citations</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Primary Statutes, Supreme Court Judgments &amp; Official Real Estate References
              </h2>

              <ol className="sources list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016)</strong> — Sections 2(zj), 3(1), 3(2)(a), 12, 13(1), 18(1), 40, and 59:{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://www.indiacode.nic.in/handle/123456789/2158
                  </a>
                </li>
                <li>
                  <strong>M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP &amp; Ors.</strong>, (2021) 18 SCC 1 (Supreme Court 3-Judge Bench judgment on unconditional Section 18(1) RERA refund and interest):{" "}
                  <a
                    href="https://main.sci.gov.in/supremecourt/2021/16758/16758_2021_33_1501_31312_Judgement_11-Nov-2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://main.sci.gov.in/supremecourt/2021/16758/16758_2021_33_1501_31312_Judgement_11-Nov-2021.pdf
                  </a>
                </li>
                <li>
                  <strong>Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor</strong>, (2022) 15 SCC 286 (Supreme Court judgment on 10% earnest money cap and refund interest from each payment date):{" "}
                  <a
                    href="https://main.sci.gov.in/supremecourt/2021/14394/14394_2021_12_1501_34824_Judgement_07-Apr-2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://main.sci.gov.in/supremecourt/2021/14394/14394_2021_12_1501_34824_Judgement_07-Apr-2022.pdf
                  </a>
                </li>
                <li>
                  <strong>Narne Construction Pvt. Ltd. v. Union of India &amp; Ors.</strong>, (2012) 5 SCC 359 (Supreme Court ruling bringing plotted layout development within Consumer Protection jurisdiction):{" "}
                  <a
                    href="https://main.sci.gov.in/jonew/judis/39321.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://main.sci.gov.in/jonew/judis/39321.pdf
                  </a>
                </li>
                <li>
                  <strong>Transfer of Property Act, 1882 (Act No. 4 of 1882)</strong> — Section 55(6)(b) (Buyer&apos;s statutory charge on property for prepaid purchase money and interest):{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://www.indiacode.nic.in/handle/123456789/2338
                  </a>
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 (Act No. 9 of 1872)</strong> — Section 73 &amp; Section 74 (Compensation for breach and prohibition of unconscionable forfeiture penalties):{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://www.indiacode.nic.in/handle/123456789/2187
                  </a>
                </li>
                <li>
                  <strong>e-Jagriti — Department of Consumer Affairs Online Filing Portal</strong> (Consumer Protection Act, 2019):{" "}
                  <a
                    href="https://e-jagriti.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline break-all"
                  >
                    https://e-jagriti.gov.in/
                  </a>
                </li>
              </ol>
            </section>
          </article>
        </div>
      </main>

      {/* Related Recovery Guides Cluster */}
      <RelatedRecoveryGuides
        currentPath="/plot-booking-refund-legal-notice"
        cluster="property"
      />

      <Footer />
    </div>
  );
}
