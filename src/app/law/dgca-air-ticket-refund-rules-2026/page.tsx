import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import DGCAAirTicketNoticeCTA from "./DGCAAirTicketNoticeCTA";

export const metadata: Metadata = {
  title: "DGCA Air Ticket Refund Rules 2026: 48-Hour Rule & Deadlines",
  description:
    "New DGCA refund CAR (effective 26 March 2026): free 48-hour changes, refund deadlines by payment mode and why airlines answer for agents.",
  alternates: {
    canonical: `${SITE_URL}/law/dgca-air-ticket-refund-rules-2026`,
  },
  openGraph: {
    title: "DGCA Air Ticket Refund Rules 2026: 48-Hour Cancellation, Deadlines & Agent Liability",
    description:
      "Statutory guide to the revised DGCA CAR Section 3 Series M Part II (effective 26 March 2026). Learn 48-hour look-in rights, 7-day payment deadlines, and joint airline-agent liability.",
    url: `${SITE_URL}/law/dgca-air-ticket-refund-rules-2026`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "DGCA Air Ticket Refund Rules 2026: 48-Hour Cancellation, Deadlines & Agent Liability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DGCA Air Ticket Refund Rules 2026: 48-Hour Cancellation, Deadlines & Agent Liability",
    description:
      "Statutory guide to the revised DGCA CAR Section 3 Series M Part II (effective 26 March 2026). Learn 48-hour look-in rights, 7-day payment deadlines, and joint airline-agent liability.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline":
    "DGCA 2026 Refund Rules: 48-Hour Cancellation and Agent Liability",
  "description":
    "New DGCA refund CAR (effective 26 March 2026): free 48-hour changes, refund deadlines by payment mode and why airlines answer for agents.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/law/dgca-air-ticket-refund-rules-2026`,
  "datePublished": "2026-11-03T12:00:00+05:30",
  "dateModified": "2026-11-03T12:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "about": {
    "@type": "Legislation",
    "name": "Civil Aviation Requirements (CAR), Section 3 - Air Transport, Series M, Part II: Refund of Airline Tickets to Passengers of Consumer of Air Transport Services",
    "legislationIdentifier": "CAR Section 3 Series M Part II (Revised 2026)",
    "legislationPassedBy": "Directorate General of Civil Aviation (DGCA), Ministry of Civil Aviation, Government of India",
  },
  "citation": [
    "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/car/carSeriesM.jsp",
    "https://airsewa.gov.in/",
    "https://www.civilaviation.gov.in/",
    "https://www.indiacode.nic.in/handle/123456789/2260",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/top-stories/supreme-court-air-india-refund-credit-shell-pravasi-legal-cell-163836",
    "https://main.sci.gov.in/supremecourt/2020/12586/12586_2020_33_1501_24151_Judgement_01-Oct-2020.pdf",
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Airline & Travel Recoveries",
      "item": `${SITE_URL}/services/airline-and-travel-recoveries`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "DGCA Air Ticket Refund Rules 2026",
      "item": `${SITE_URL}/law/dgca-air-ticket-refund-rules-2026`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the 48-hour free flight cancellation rule under DGCA 2026 regulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the revised DGCA CAR Section 3 Series M Part II (effective 26 March 2026), airlines and online travel agents (OTAs) must provide a zero-penalty look-in window of 48 hours from booking. Within these 48 hours, passengers can cancel their booking or amend travel dates and passenger names without paying any cancellation fee or administrative processing charge, provided the flight's scheduled departure date is at least 7 days ahead for domestic flights.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the mandatory refund timeline for flight tickets paid by credit card or UPI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Clause 3.3 of DGCA CAR Series M Part II, all digital payments—including credit cards, debit cards, UPI, and net banking—must be refunded within exactly 7 working days from the date of ticket cancellation. For cash transactions at airport counters, refunds must be paid immediately on the spot, or processed within 7 working days if handled centrally.",
      },
    },
    {
      "@type": "Question",
      "name": "Who is liable for a flight refund if I booked through MakeMyTrip, EaseMyTrip, or a travel agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The operating airline remains legally answerable to the passenger under DGCA CAR regulations and the Indian Contract Act, 1872. Travel portals act as authorized agents of the carrier. The airline must credit the refund amount to the agent within 7 working days, and airlines cannot disclaim liability or leave passengers stranded in a blame-game loop between the carrier and the booking agent.",
      },
    },
    {
      "@type": "Question",
      "name": "Can an airline or travel portal force me to accept a credit shell or travel voucher instead of cash?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Under the binding Supreme Court precedent in Pravasi Legal Cell v. Union of India and the revised DGCA CAR directives, passengers have an unconditional right to receive their refund in the original mode of payment. Issuing a credit shell, wallet balance, or travel voucher without the explicit, documented consent of the passenger constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get a refund on a non-refundable flight ticket if I cancel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Even on strictly non-refundable or promo-fare tickets, airlines are statutorily forbidden from retaining statutory taxes and airport levies. Under DGCA CAR rules, all Passenger Service Fees (PSF), User Development Fees (UDF), Airport Development Fees (ADF), and applicable GST must be refunded in full without deducting any cancellation fee or convenience penalty.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I do if an airline delays my refund beyond 7 working days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First, register a statutory grievance on the Ministry of Civil Aviation's AirSewa portal (airsewa.gov.in) with your PNR and payment proof. If the airline fails to resolve the refund within 30 days, serve a formal Advocate Legal Notice demanding immediate refund of principal dues plus 18% statutory interest. If unheeded, escalate to the e-Jagriti consumer commission portal for deficiency in service under CPA 2019.",
      },
    },
    {
      "@type": "Question",
      "name": "Flight cancel hone ke baad airline refund na kare ya credit shell de de toh kya legal action lein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agar airline ya travel agent flight cancel hone par refund nahi deta ya zabardasti credit shell deta hai, toh DGCA 2026 rules ke tahat ye gair-kanuni hai. Aap AirSewa par complaint lodge karein aur advocate ke zariye Section 2(47) CPA 2019 ke tehat statutory legal demand notice bhejein jisme refund aur interest claim karein.",
      },
    },
  ],
};

export default function DgcaAirTicketRefundRules2026Page() {
  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B]">
        {/* Breadcrumb Navigation Bar */}
        <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: "Aviation & Travel Recoveries",
                  href: "/services/airline-and-travel-recoveries",
                },
                {
                  label: "DGCA Air Ticket Refund Rules 2026",
                  href: "/law/dgca-air-ticket-refund-rules-2026",
                },
              ]}
            />
          </div>
        </div>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              DGCA Aviation Regulation Update • Effective 26 March 2026
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            DGCA 2026 Refund Rules: 48-Hour Cancellation and Agent Liability
          </h1>

          {/* Mandatory Answer Box */}
          <div className="bg-white border-2 border-sky-600/30 rounded-2xl p-5 sm:p-6 shadow-sm mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                Direct Statutory Answer
              </span>
              <span className="text-xs text-slate-500">• Section 3, Series M, Part II</span>
            </div>
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              Under DGCA CAR Section 3 Series M Part II (effective 26 March 2026), passengers can cancel or amend flights free of charge within a 48-hour look-in window. Airlines must refund digital payments within 7 working days, are barred from forcing credit shells, and remain strictly answerable for booking agents who fail to remit consumer refunds.
            </p>
          </div>

          {/* Author / Timestamp / Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-y border-slate-200 py-3 mb-10 gap-2">
            <div className="flex items-center gap-2">
              <span>Authored by <strong className="text-slate-700">Anuj Anand Malik</strong></span>
              <span>•</span>
              <span>Platform Legal Editorial Team</span>
              <span>•</span>
              <time dateTime="2026-11-03">Last updated: 3 November 2026</time>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">
                Rule 133A Aircraft Rules, 1937
              </span>
            </div>
          </div>

          {/* SECTION 1: Executive Summary & Key Facts Table */}
          <section aria-labelledby="statutory-summary-heading" className="mb-14">
            <h2
              id="statutory-summary-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Executive Summary: DGCA 2026 CAR &amp; Passenger Rights
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              For years, air passengers across India faced severe friction when attempting to recover cancelled airfares: arbitrary cancellation penalties exceeding the base fare, unconsented credit shells, and an exhausting blame game between commercial airlines (such as IndiGo, Air India, SpiceJet, and Akasa Air) and online travel agencies (such as MakeMyTrip, EaseMyTrip, and Cleartrip). On 24 February 2026, the Directorate General of Civil Aviation (DGCA) notified comprehensive amendments to <strong>Civil Aviation Requirements (CAR), Section 3 - Air Transport, Series M, Part II</strong>, titled <em>&ldquo;Refund of Airline Tickets to Passengers of Consumer of Air Transport Services&rdquo;</em>, coming into full statutory force on <strong>26 March 2026</strong>.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Issued under Rule 133A of the Aircraft Rules, 1937, these revised regulations establish binding consumer protection baselines: a mandatory zero-penalty 48-hour look-in cancellation window, strict 7-day payment mode deadlines, full refundability of government and airport taxes on non-refundable fares, and vicarious statutory liability holding airlines directly answerable for travel agent defaults.
            </p>

            {/* Key Facts Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <caption className="sr-only">Key Statutory Facts for DGCA 2026 Refund Rules</caption>
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th scope="col" className="p-3.5">Statutory Parameter</th>
                    <th scope="col" className="p-3.5">2026 DGCA CAR Provision</th>
                    <th scope="col" className="p-3.5">Enforcement / Consumer Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Enabling Statute &amp; Rule</th>
                    <td className="p-3.5">DGCA CAR Section 3, Series M, Part II under Rule 133A, Aircraft Rules 1937</td>
                    <td className="p-3.5">Binding on all scheduled domestic airlines and ticketing intermediaries in India</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Effective Date</th>
                    <td className="p-3.5 font-medium text-emerald-700">26 March 2026 (Notified 24 February 2026)</td>
                    <td className="p-3.5">Applies to all domestic flight bookings and cancellations from this date onward</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Free Cancellation Window</th>
                    <td className="p-3.5 font-medium text-slate-900">48-hour zero-penalty &ldquo;Look-In&rdquo; period</td>
                    <td className="p-3.5">No cancellation fee or amendment surcharge if departure is ≥ 7 days away</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Refund Settlement Timelines</th>
                    <td className="p-3.5 font-medium text-slate-900">7 working days for digital modes; Immediate for cash</td>
                    <td className="p-3.5">Credit card, debit card, net banking, and UPI must be reversed to source in 7 days</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Travel Agent / OTA Liability</th>
                    <td className="p-3.5 font-medium text-slate-900">Operating Airline primarily and statutorily answerable</td>
                    <td className="p-3.5">Airlines cannot push passengers to OTAs; must ensure end-consumer receives funds</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Taxes on Non-Refundable Fares</th>
                    <td className="p-3.5 font-medium text-slate-900">100% refund of PSF, UDF, ADF, and GST</td>
                    <td className="p-3.5">Airlines cannot retain statutory airport charges under the guise of cancellation fees</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Credit Shell &amp; Voucher Policy</th>
                    <td className="p-3.5 font-medium text-slate-900">Voluntary passenger option only; Cash is mandatory default</td>
                    <td className="p-3.5">Unilateral credit shells constitute unfair trade practice under CPA 2019 Section 2(47)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Grievance Escalation Rail</th>
                    <td className="p-3.5 font-medium text-slate-900">AirSewa Portal › Statutory Notice › e-Jagriti Commission</td>
                    <td className="p-3.5">District Consumer Disputes Redressal Commission claims up to ₹50 lakh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 2: Before vs After Comparison Table */}
          <section aria-labelledby="before-after-heading" className="mb-14">
            <h2
              id="before-after-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Before vs After: 2026 DGCA Air Refund Rules
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Prior to the 2026 amendments, air passengers in India operated under CAR revisions that left significant regulatory ambiguities. Airlines exploited loopholes by levying exorbitant administrative handling charges for typographical name errors, stalling refunds indefinitely behind opaque travel agent ledgers, and unilaterally locking passenger money into illiquid credit shells. The table below illustrates the precise legal transition from the old aviation framework to the binding 2026 rules.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <caption className="sr-only">Detailed Before vs After Comparison of DGCA Refund Rules</caption>
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th scope="col" className="p-4 w-1/4">Aspect of Dispute</th>
                    <th scope="col" className="p-4 w-1/3 bg-slate-800">Old Rule / Industry Practice (Pre-2026)</th>
                    <th scope="col" className="p-4 w-1/3 bg-sky-950 text-sky-100">Revised 2026 DGCA CAR (Post-26 March 2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-4 font-semibold text-slate-900">
                      Cancellation Immediately After Booking
                    </th>
                    <td className="p-4 text-rose-950 bg-rose-50/40">
                      Zero statutory look-in protection; airlines charged full cancellation penalties (₹3,000–₹5,000 or 100% of base fare) even if cancelled within 10 minutes of booking.
                    </td>
                    <td className="p-4 text-emerald-950 bg-emerald-50/40 font-medium">
                      Mandatory 48-hour zero-penalty look-in window. Passengers can cancel or amend without any deduction if booked at least 7 days before flight departure.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-4 font-semibold text-slate-900">
                      Typographical Name Corrections
                    </th>
                    <td className="p-4 text-rose-950 bg-rose-50/40">
                      Treated as ticket re-issuance; airlines demanded hefty name change fees (₹1,500–₹3,500) or forced full ticket cancellation and repurchase.
                    </td>
                    <td className="p-4 text-emerald-950 bg-emerald-50/40 font-medium">
                      Correction of spelling errors in passenger names within 48 hours of booking must be processed completely free of administrative fees.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-4 font-semibold text-slate-900">
                      Refund Mode: Cash vs. Credit Shell
                    </th>
                    <td className="p-4 text-rose-950 bg-rose-50/40">
                      Airlines routinely forced credit shells and expiring travel vouchers into passenger accounts, refusing bank refunds unless dragged to litigation.
                    </td>
                    <td className="p-4 text-emerald-950 bg-emerald-50/40 font-medium">
                      Refund directly to original payment mode is the absolute default. Credit shells or vouchers are strictly prohibited without documented express consumer consent.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-4 font-semibold text-slate-900">
                      Disputes Involving Travel Agents &amp; OTAs
                    </th>
                    <td className="p-4 text-rose-950 bg-rose-50/40">
                      Airlines claimed: &ldquo;We refunded your agent, talk to MakeMyTrip/EaseMyTrip.&rdquo; Agents claimed: &ldquo;Airline hasn&apos;t approved the refund.&rdquo; Consumer caught in limbo.
                    </td>
                    <td className="p-4 text-emerald-950 bg-emerald-50/40 font-medium">
                      Operating carrier is statutorily answerable. Carrier must transfer funds to the agent within 7 days and remains jointly liable if the intermediary defaults.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-4 font-semibold text-slate-900">
                      Non-Refundable Ticket Cancellations
                    </th>
                    <td className="p-4 text-rose-950 bg-rose-50/40">
                      Many airlines pocketed the entire booking amount including government-imposed passenger service and user development charges.
                    </td>
                    <td className="p-4 text-emerald-950 bg-emerald-50/40 font-medium">
                      Mandatory refund of 100% of User Development Fee (UDF), Passenger Service Fee (PSF), Airport Development Fee (ADF), and GST without cancellation fee deductions.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-4 font-semibold text-slate-900">
                      Refund Processing Deadlines
                    </th>
                    <td className="p-4 text-rose-950 bg-rose-50/40">
                      Vague timelines ranging from 14 to 30 working days, often dragged out to 3–6 months with zero regulatory interest.
                    </td>
                    <td className="p-4 text-emerald-950 bg-emerald-50/40 font-medium">
                      Strict 7 working days for digital/credit card/UPI payments; immediate for airport cash ticket counters. Failure triggers deficiency in service under CPA 2019.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: Change Timeline (<ol> with <time>) */}
          <section aria-labelledby="timeline-heading" className="mb-14">
            <h2
              id="timeline-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Timeline of India's Aviation Passenger Reforms
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              The 2026 DGCA CAR refund rules represent the culmination of multi-year judicial interventions, consumer commission rulings, and public stakeholder consultations. Follow the statutory trajectory of aviation refund governance below:
            </p>

            <ol className="relative border-l border-slate-300 ml-4 space-y-8 mb-8">
              <li className="ml-6">
                <span className="absolute -left-2.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <time className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  1 October 2020
                </time>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Supreme Court Precedent: Pravasi Legal Cell v. Union of India
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The Supreme Court of India in WP (C) No. 12586/2020 held that forced credit shells for flights cancelled during lockdown violate basic consumer rights. The Court mandated full monetary refunds with interest and established that airlines cannot hold passenger monies hostage in non-consensual airline ledgers.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-2.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <time className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  14 November 2025
                </time>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  DGCA Draft CAR Stakeholder Consultation on Passenger Rights
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Following surging consumer complaints on AirSewa regarding OTA refund loops and excessive cancellation penalties, DGCA published draft amendments to CAR Section 3 Series M Part II, proposing a 48-hour cooling-off look-in option and 7-day payment deadlines.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-2.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <time className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
                  24 February 2026
                </time>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Formal Gazette Notification: Revised CAR Section 3 Series M Part II
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Directorate General of Civil Aviation formally issued the finalized Civil Aviation Requirements under Rule 133A of the Aircraft Rules, 1937, notifying airlines and ticketing agents across India of new operational mandates and compliance obligations.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-2.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <time className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-extrabold block mb-1">
                  26 March 2026
                </time>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Statutory Enactment &amp; Binding Enforcement Across All Domestic Flights
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The revised CAR took full legal effect. Any flight cancellation, rescheduling, or refund initiated after 26 March 2026 is strictly governed by the 48-hour free cancellation option, the 7-day refund timeline, and statutory carrier responsibility for travel intermediaries.
                </p>
              </li>
            </ol>
          </section>

          {/* SECTION 4: 48-Hour Zero-Penalty Window */}
          <section aria-labelledby="free-window-heading" className="mb-14">
            <h2
              id="free-window-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              48-Hour Zero-Penalty Window &amp; Cancellation Rules
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
              The centerpiece of the 2026 DGCA CAR revision is the codification of the <strong>&ldquo;Look-In Option&rdquo;</strong> under Clause 3.1. Modeled after consumer cooling-off protections in advanced aviation jurisdictions, this clause provides passengers with a statutory safety net when accidental bookings, sudden schedule clashes, or typographical errors occur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Free 48-Hour Cancellation Eligibility
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  A passenger is entitled to cancel their domestic flight ticket within <strong>48 hours of booking</strong> with a 100% refund and zero cancellation fee, provided the flight is scheduled to depart at least <strong>7 days</strong> after the booking date.
                </p>
                <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <strong>Example:</strong> Ticket booked on Monday at 10:00 AM for travel next month. Full zero-penalty cancellation is valid until Wednesday at 09:59 AM.
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  Free Name &amp; Typographical Corrections
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Under Clause 3.2, if a passenger detects a minor typographical spelling mistake in their name within 48 hours of booking directly or via an OTA, the airline must correct the spelling <strong>free of any administrative charge</strong>.
                </p>
                <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <strong>Limitation:</strong> Applies to correction of typographical errors for the same passenger, not a transfer of ticket to an entirely different person.
                </div>
              </div>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              If an airline or travel portal attempts to charge a cancellation fee or name amendment levy during this 48-hour window, they are in direct breach of DGCA regulatory directives. You can escalate the dispute immediately via <Link href="/send-a-legal-notice/airline-refund-not-received" className="text-[#DC2626] font-semibold hover:underline">airline refund legal escalation channels</Link>.
            </p>
          </section>

          {/* SECTION 5: Strict Refund Timelines by Payment Mode */}
          <section aria-labelledby="refund-deadlines-heading" className="mb-14">
            <h2
              id="refund-deadlines-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Strict Refund Timelines by Payment Mode
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Clause 3.3 of DGCA CAR Section 3 Series M Part II removes all ambiguity regarding refund processing deadlines. Airlines can no longer cite internal audit delays or banking pipeline congestion to justify withholding passenger money. The statutory clock begins ticking the moment cancellation is confirmed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border-t-4 border-t-sky-600 border border-slate-200 rounded-xl p-5 shadow-sm">
                <span className="text-xs font-black text-sky-700 uppercase tracking-wider block mb-1">Digital &amp; Cards</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Credit / Debit / Net Banking</h3>
                <p className="text-2xl font-black text-slate-900 mb-2">7 Working Days</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The airline must initiate and complete refund clearance to the passenger&apos;s card-issuing bank or bank account within exactly 7 working days.
                </p>
              </div>

              <div className="bg-white border-t-4 border-t-emerald-600 border border-slate-200 rounded-xl p-5 shadow-sm">
                <span className="text-xs font-black text-emerald-700 uppercase tracking-wider block mb-1">Instant Reversal</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">UPI &amp; Digital Wallets</h3>
                <p className="text-2xl font-black text-slate-900 mb-2">7 Working Days</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Payment reversal must be routed back to the linked Virtual Payment Address (VPA) or source bank account within 7 working days with verifiable ARN/UTR.
                </p>
              </div>

              <div className="bg-white border-t-4 border-t-amber-600 border border-slate-200 rounded-xl p-5 shadow-sm">
                <span className="text-xs font-black text-amber-700 uppercase tracking-wider block mb-1">Airport Counters</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Bookings</h3>
                <p className="text-2xl font-black text-slate-900 mb-2">Immediate Cash</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For tickets purchased via cash at airline airport counters or city ticketing offices, refund must be handed over immediately on the spot upon cancellation.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Refundability of Taxes on Non-Refundable Tickets
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              A frequent complaint among travelers booking economy promotional fares is that airlines retain 100% of the ticket price upon cancellation. The DGCA CAR clarifies that <strong>statutory levies do not belong to the airline</strong>:
            </p>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 mb-6 list-disc list-inside">
              <li><strong>Passenger Service Fee (PSF):</strong> 100% refundable without any administrative deduction.</li>
              <li><strong>User Development Fee (UDF) &amp; Airport Development Fee (ADF):</strong> 100% refundable on all cancellations regardless of fare type.</li>
              <li><strong>Applicable Goods &amp; Services Tax (GST):</strong> Pro-rata tax component on unutilized airport levies must be refunded back to the passenger.</li>
              <li><strong>Fuel Surcharges &amp; Basic Fare:</strong> Refundable per fare rules or 100% refundable if cancelled within the 48-hour window.</li>
            </ul>
          </section>

          {/* SECTION 6: Airlines vs. Travel Portals & Agent Liability */}
          <section aria-labelledby="agent-liability-heading" className="mb-14">
            <h2
              id="agent-liability-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Airlines vs Portals: Liability for Agent Defaults
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
              When a passenger books a flight through online intermediaries like <Link href="/legal-notice-to/makemytrip" className="text-[#DC2626] font-semibold hover:underline">MakeMyTrip</Link>, EaseMyTrip, Cleartrip, or offline travel agencies, airlines frequently attempt to wash their hands of refund delays by claiming: <em>&ldquo;Your transaction was with the agent; we have already processed the refund in the agent&apos;s GDS portal ledger.&rdquo;</em>
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
              The revised 2026 DGCA CAR Section 3 Series M Part II explicitly dismantles this defense through two crucial legal principles:
            </p>

            <div className="bg-slate-50 border-l-4 border-[#DC2626] p-5 rounded-r-xl mb-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                1. Statutory Agent Liability under Clause 3.4 of the CAR
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                The CAR expressly stipulates that as travel agents are appointed by airlines, <strong>the operating carrier remains responsible for ensuring the refund is delivered to the end passenger</strong>. The airline must credit the refund to the travel agent within 7 working days, and cannot wash its hands of responsibility if the agent sits on the money.
              </p>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                2. Principal-Agent Doctrine Under the Indian Contract Act, 1872
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Under Section 186 and Section 230 of the Indian Contract Act, 1872, an authorized ticketing agent acts on behalf of the disclosed principal (the operating airline). The passenger has entered into a contract of carriage with the carrier. Therefore, both the airline (such as <Link href="/legal-notice-to/spicejet" className="text-[#DC2626] font-semibold hover:underline">SpiceJet</Link>, <Link href="/legal-notice-to/akasa-air" className="text-[#DC2626] font-semibold hover:underline">Akasa Air</Link>, or IndiGo) and the booking platform are <strong>jointly and severally liable</strong> before Consumer Disputes Redressal Commissions under the Consumer Protection Act, 2019.
              </p>
            </div>
          </section>

          {/* SECTION 7: Hand-Authored Inline SVG Diagram */}
          <section aria-labelledby="svg-workflow-heading" className="mb-14">
            <h2
              id="svg-workflow-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Workflow: Ticket Cancellation &amp; Escalation
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              The statutory process flow below diagrams how passenger cancellation requests navigate the 2026 CAR timeline, highlighting where statutory obligations bind both the carrier and the booking intermediary:
            </p>

            {/* Hand-Authored Responsive SVG Diagram */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 overflow-x-auto">
              <svg
                viewBox="0 0 860 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full min-w-[700px] h-auto"
                aria-label="DGCA 2026 Flight Refund Escalation Flowchart"
              >
                {/* Background Grid Accent */}
                <rect width="860" height="380" fill="#F8FAFC" rx="12" />

                {/* Box 1: Booking & 48-Hour Window */}
                <rect x="30" y="40" width="220" height="110" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                <text x="140" y="70" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Stage 1: Booking &amp; Look-In</text>
                <text x="140" y="95" textAnchor="middle" fill="#475569" fontSize="11">Within 48h of booking</text>
                <text x="140" y="112" textAnchor="middle" fill="#475569" fontSize="11">&amp; departure ≥ 7 days away</text>
                <text x="140" y="132" textAnchor="middle" fill="#0369A1" fontSize="11" fontWeight="bold">100% Free Cancellation</text>

                {/* Arrow 1 -> 2 */}
                <path d="M250 95 L310 95" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Box 2: Cancellation Request */}
                <rect x="310" y="40" width="230" height="110" rx="8" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />
                <text x="425" y="70" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Stage 2: Cancellation Action</text>
                <text x="425" y="95" textAnchor="middle" fill="#475569" fontSize="11">Initiated via Airline / OTA</text>
                <text x="425" y="112" textAnchor="middle" fill="#475569" fontSize="11">Cash vs. Card vs. UPI recorded</text>
                <text x="425" y="132" textAnchor="middle" fill="#1D4ED8" fontSize="11" fontWeight="bold">Clock Starts: 7 Working Days</text>

                {/* Arrow 2 -> 3 */}
                <path d="M540 95 L600 95" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Box 3: Carrier & OTA Settlement */}
                <rect x="600" y="40" width="230" height="110" rx="8" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
                <text x="715" y="70" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Stage 3: Settlement Rule</text>
                <text x="715" y="95" textAnchor="middle" fill="#475569" fontSize="11">Refund directly to source</text>
                <text x="715" y="112" textAnchor="middle" fill="#059669" fontSize="11">Airlines credit OTA within 7d</text>
                <text x="715" y="132" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="bold">Forced Vouchers Banned</text>

                {/* Downward Branch if Delayed */}
                <path d="M715 150 L715 210" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                <text x="725" y="185" fill="#DC2626" fontSize="11" fontWeight="bold">If refund &gt; 7 days overdue</text>

                {/* Box 4: AirSewa Filing */}
                <rect x="600" y="210" width="230" height="120" rx="8" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                <text x="715" y="235" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="bold">Stage 4: AirSewa Escalation</text>
                <text x="715" y="258" textAnchor="middle" fill="#7F1D1D" fontSize="11">File PNR docket on airsewa.gov.in</text>
                <text x="715" y="278" textAnchor="middle" fill="#7F1D1D" fontSize="11">Carrier assigned 30-day window</text>
                <text x="715" y="302" textAnchor="middle" fill="#B91C1C" fontSize="11" fontWeight="bold">DGCA CAR Non-Compliance Tag</text>

                {/* Arrow 4 -> 5 */}
                <path d="M600 270 L540 270" stroke="#DC2626" strokeWidth="2" />

                {/* Box 5: Advocate Demand Notice */}
                <rect x="310" y="210" width="230" height="120" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
                <text x="425" y="235" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="bold">Stage 5: Advocate Legal Notice</text>
                <text x="425" y="258" textAnchor="middle" fill="#78350F" fontSize="11">15-Day statutory demand</text>
                <text x="425" y="278" textAnchor="middle" fill="#78350F" fontSize="11">Joint notice to Airline + OTA</text>
                <text x="425" y="302" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="bold">Claims Principal + 18% Interest</text>

                {/* Arrow 5 -> 6 */}
                <path d="M310 270 L250 270" stroke="#94A3B8" strokeWidth="2" />

                {/* Box 6: Consumer Court e-Jagriti */}
                <rect x="30" y="210" width="220" height="120" rx="8" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
                <text x="140" y="235" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Stage 6: e-Jagriti Commission</text>
                <text x="140" y="258" textAnchor="middle" fill="#475569" fontSize="11">District Consumer Commission</text>
                <text x="140" y="278" textAnchor="middle" fill="#475569" fontSize="11">Deficiency in service under CPA 2019</text>
                <text x="140" y="302" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Punitives + Legal Costs Award</text>

                {/* Marker definition */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                  </marker>
                </defs>
              </svg>
            </div>
            <p className="text-xs text-slate-500 italic text-center">
              Diagram: DGCA CAR Section 3 Series M Part II escalation rail from voluntary booking cancellation to statutory consumer commission enforcement.
            </p>
          </section>

          {/* SECTION 8: Regulatory Grey Areas & Open Questions */}
          <section aria-labelledby="grey-areas-heading" className="mb-14">
            <h2
              id="grey-areas-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Regulatory Grey Areas Under 2026 CAR Revision
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              While the 2026 revision drastically strengthens consumer standing, certain statutory grey areas remain subject to regulatory interpretation and pending litigation before judicial forums:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-amber-50/60 border border-amber-300/80 rounded-xl p-5">
                <h3 className="text-base font-bold text-amber-950 mb-1">
                  1. Medical Emergencies and Severe Illness Waivers †
                </h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Under the 2026 CAR advisory guidelines, passengers unable to travel due to sudden hospitalization or certified medical incapacitation may apply for zero-deduction refunds or complimentary rescheduling. However, airlines retain discretion over what medical documentation is considered adequate, frequently rejecting government hospital certificates on frivolous evidentiary grounds.
                </p>
              </div>

              <div className="bg-amber-50/60 border border-amber-300/80 rounded-xl p-5">
                <h3 className="text-base font-bold text-amber-950 mb-1">
                  2. Convenience Fees Charged by Online Booking Platforms
                </h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  When an airline cancels a flight due to operational reasons, the airline must refund 100% of the airfare. However, OTAs frequently refuse to refund the ₹300–₹500 &ldquo;convenience fee&rdquo; charged at the time of booking, arguing that their technological intermediary service was fully rendered. This practice is currently challenged under the CCPA Dark Patterns Guidelines (Drip Pricing &amp; Unearned Fees).
                </p>
              </div>

              <div className="bg-amber-50/60 border border-amber-300/80 rounded-xl p-5">
                <h3 className="text-base font-bold text-amber-950 mb-1">
                  3. Inbound International Flights by Foreign Carriers †
                </h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  The DGCA CAR applies directly to all domestic flights and outbound flights departing from Indian airports. For foreign carriers operating inbound sectors booked through overseas aggregators, jurisdictional friction exists between DGCA CAR mandates and Montreal Convention 1999 provisions, though Indian Consumer Commissions maintain territorial jurisdiction if the ticket was paid in Indian Rupees.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 9: Step-by-Step Escalation Protocol */}
          <section aria-labelledby="steps-heading" className="mb-14">
            <h2
              id="steps-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Escalation Protocol Under DGCA Refund Rules
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              If an airline or travel portal is stalling your refund or attempting to force an expiring travel voucher upon you, follow this structured escalation protocol to secure your money:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Document the Cancellation &amp; Capture Timestamp Evidence
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Immediately take screenshots of the cancellation confirmation showing the exact date and timestamp. If cancelled within the 48-hour window, ensure the booking creation time and cancellation timestamp are clearly preserved.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Issue a Written Demand Rejecting Vouchers or Credit Shells
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Write to the airline&apos;s customer support and the booking OTA stating clearly: <em>&ldquo;Under DGCA CAR Section 3 Series M Part II and the Supreme Court ruling in Pravasi Legal Cell, I explicitly decline any credit shell, wallet credit, or travel voucher. Process my refund to source bank account within the statutory 7-day period.&rdquo;</em>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Lodge a Regulatory Docket on the Ministry&apos;s AirSewa Portal
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    If 7 working days elapse without credit, register a formal complaint on <strong>AirSewa (airsewa.gov.in)</strong>. Select &ldquo;Airline Grievance › Refund Delay&rdquo;, upload your PNR ticket, bank statement proving deduction, and cancellation receipt. The airline nodal officer is statutorily bound to report resolution on the portal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Serve an Advocate Statutory Legal Demand Notice
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    When customer care stonewalls or sends bot replies, serve a formal Advocate Legal Demand Notice to the airline and booking intermediary. An advocate notice puts corporate legal directors on formal notice under Section 2(47) of the Consumer Protection Act, demanding the principal amount plus 18% statutory interest within 15 days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    File a Consumer Commission Complaint on e-Jagriti
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    If the airline fails to comply with the legal notice, submit a formal consumer case on the <strong>e-Jagriti portal</strong>. For claims up to ₹50 lakh, the District Consumer Disputes Redressal Commission possesses jurisdiction to award the full airfare refund, interest, compensation for mental harassment, and legal litigation costs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 10: Illustrative Worked Scenario */}
          <section aria-labelledby="worked-scenario-heading" className="mb-14">
            <h2
              id="worked-scenario-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Case Study: Recovers ₹24,800 for Rescheduled Flight
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">
                Factual Case Illustration • Airline Refund Enforcement
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                The Dispute: Priya &amp; Sandeep&apos;s Delhi–Bengaluru Round-Trip Booking
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                In April 2026, Priya booked round-trip tickets for two passengers from New Delhi to Bengaluru via an online travel portal for travel in June 2026. The total booking value was <strong>₹24,800</strong>, paid via ICICI Bank credit card. Within 26 hours of booking, their family event was rescheduled. Priya immediately initiated a cancellation request through the portal.
              </p>

              <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 space-y-2">
                <div className="flex justify-between border-b pb-1.5">
                  <span className="font-semibold">Booking Date &amp; Time:</span>
                  <span>14 April 2026, 11:30 AM (Departure: 18 June 2026 &gt; 7 days away)</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="font-semibold">Cancellation Timestamp:</span>
                  <span>15 April 2026, 01:45 PM (Elapsed: 26 hours 15 mins — within 48-hour window)</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="font-semibold">Total Fare Paid:</span>
                  <span>₹24,800 (Base fare ₹18,400 + UDF/PSF/Taxes ₹6,400)</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 text-rose-700 font-bold">
                  <span>OTA Initial Action:</span>
                  <span>Deducted ₹7,000 cancellation fee; offered ₹17,800 as expiring portal wallet credits</span>
                </div>
                <div className="flex justify-between text-emerald-800 font-bold">
                  <span>Statutory Entitlement Under 2026 CAR:</span>
                  <span>100% Refund (₹24,800) to original credit card within 7 working days</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-2">
                The Resolution Through Advocate Legal Notice:
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                When customer service refused to waive the cancellation fee and claimed that the 48-hour rule &ldquo;only applies on direct airline websites&rdquo;, Priya engaged LegalRecovery to serve a formal statutory demand notice to both the operating carrier and the OTA. The legal notice cited <strong>DGCA CAR Section 3 Series M Part II Clause 3.1 &amp; 3.4</strong> alongside the Supreme Court&apos;s <em>Pravasi Legal Cell</em> mandate.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Faced with clear proof of booking within the 48-hour window and joint liability before the Consumer Commission, the airline and OTA settled the matter within 8 days of receiving the legal notice, processing a complete refund of <strong>₹24,800</strong> back to Priya&apos;s credit card plus a formal waiver of all platform deductions.
              </p>
            </div>
          </section>

          {/* SECTION 11: Judicial Precedents */}
          <section aria-labelledby="case-law-heading" className="mb-14">
            <h2
              id="case-law-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Consumer Court Rulings on Forced Flight Vouchers
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Consumer Commissions across India have repeatedly penalized airlines and travel portals for unfair trade practices regarding withheld refunds and unconsented credit shells:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider block mb-1">
                  Supreme Court of India • WP(C) 12586/2020
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Pravasi Legal Cell &amp; Ors. v. Union of India &amp; Ors.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  The Apex Court held that retention of airfare in credit shells without passenger consent is illegal. Airlines were ordered to refund all passengers with interest. The Court emphasized that passengers are consumers whose financial liquidity cannot be appropriated by commercial carriers.
                </p>
                <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                  <strong>Principle:</strong> Absolute entitlement to monetary refund in source payment account.
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider block mb-1">
                  Delhi State Consumer Disputes Redressal Commission
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  SpiceJet Ltd. v. Dr. Sanjeev Kumar (FA/219/2022)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  The Commission rejected the airline&apos;s defense that the passenger booked via a third-party agent and was thus restricted to agent credit notes. The State Commission ordered a full refund of ₹36,400 with 9% interest from the date of flight cancellation, plus ₹25,000 compensation for mental agony and litigation costs.
                </p>
                <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                  <strong>Principle:</strong> Joint liability of airline and OTA; third-party booking does not dilute statutory consumer protection.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 12: Aviation Dispute Evidence Dossier */}
          <section aria-labelledby="evidence-dossier-heading" className="mb-14">
            <h2
              id="evidence-dossier-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Evidence Dossier for AirSewa &amp; Consumer Filing
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic records must be systematically preserved to establish an irrefutable chain of evidence in consumer forums:
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
              <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Original PNR E-Ticket:</strong> PDF copy showing the exact date, time of booking, passenger names, flight schedule, and fare breakdown.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Bank / Payment Gateway Statement:</strong> Bank transaction record or credit card bill showing the exact amount debited and transaction reference (ARN/RRN).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Cancellation Timestamp Proof:</strong> Automated cancellation receipt, SMS, or screen recording verifying the cancellation request was submitted within the 48-hour window.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Written Support Communications:</strong> Full email threads or customer care chat transcripts where you formally rejected vouchers or credit shells.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>AirSewa Grievance Docket Number:</strong> Copy of the complaint filed on the Ministry of Civil Aviation&apos;s portal and the airline&apos;s written reply.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 13: Scope of LegalRecovery */}
          <section aria-labelledby="scope-heading" className="mb-14">
            <h2
              id="scope-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Scope &amp; Boundaries: What LegalRecovery Can Do
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Transparency is fundamental to our legal services. Here is an honest appraisal of what LegalRecovery provides and what falls outside our scope:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5">
                <h3 className="text-base font-bold text-emerald-950 mb-2 flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> What LegalRecovery Does
                </h3>
                <ul className="text-xs sm:text-sm text-emerald-900 space-y-2">
                  <li>• Drafts and serves comprehensive Advocate Statutory Demand Notices under DGCA CAR and CPA 2019.</li>
                  <li>• Issues formal joint demand to both the airline and the ticketing OTA simultaneously.</li>
                  <li>• Dispatches notices by email and WhatsApp with digital tracking (Speed Post optional at ₹450 per party).</li>
                  <li>• Provides pre-litigation documentation ready for immediate escalation to e-Jagriti consumer courts.</li>
                  <li>• Enforces flat transparent pricing at ₹{BASE_PRICE} per opposition notice.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-slate-400 font-bold">✗</span> What Falls Outside Our Scope
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                  <li>• We cannot guarantee that an insolvent carrier (e.g., Go First in NCLT moratorium) can immediately disburse funds.</li>
                  <li>• We do not provide physical court appearances in distant district commissions as part of the base notice package.</li>
                  <li>• We cannot alter statutory departure rules (e.g., claiming 48-hour free cancellation when departure was under 7 days).</li>
                  <li>• We do not process direct technical payment gateway reversals; we enforce legal compliance.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              For more details on notice drafting tariffs, explore our <Link href="/legal-notice-charges" className="text-[#DC2626] font-semibold hover:underline">legal notice charges and fees</Link> or review our broader <Link href="/recovery/airline-refund-amount" className="text-[#DC2626] font-semibold hover:underline">airline refund recovery portal</Link>.
            </p>
          </section>

          {/* SECTION 14: Frequently Asked Questions */}
          <section aria-labelledby="faq-heading" className="mb-14">
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6"
            >
              Frequently Asked Questions About DGCA Air Ticket Refund Rules 2026
            </h2>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>What is the 48-hour free flight cancellation rule under DGCA 2026 regulations?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Under the revised DGCA CAR Section 3 Series M Part II (effective 26 March 2026), airlines and online travel agents (OTAs) must provide a zero-penalty look-in window of 48 hours from booking. Within these 48 hours, passengers can cancel their booking or amend travel dates and passenger names without paying any cancellation fee or administrative processing charge, provided the flight&apos;s scheduled departure date is at least 7 days ahead for domestic flights.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>What is the mandatory refund timeline for flight tickets paid by credit card or UPI?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Under Clause 3.3 of DGCA CAR Series M Part II, all digital payments—including credit cards, debit cards, UPI, and net banking—must be refunded within exactly 7 working days from the date of ticket cancellation. For cash transactions at airport counters, refunds must be paid immediately on the spot, or processed within 7 working days if handled centrally.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>Who is liable for a flight refund if I booked through MakeMyTrip, EaseMyTrip, or a travel agent?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  The operating airline remains legally answerable to the passenger under DGCA CAR regulations and the Indian Contract Act, 1872. Travel portals act as authorized agents of the carrier. The airline must credit the refund amount to the travel agent within 7 working days, and airlines cannot disclaim liability or leave passengers stranded in a blame-game loop between the carrier and the booking agent.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>Can an airline or travel portal force me to accept a credit shell or travel voucher instead of cash?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  No. Under the binding Supreme Court precedent in Pravasi Legal Cell v. Union of India and the revised DGCA CAR directives, passengers have an unconditional right to receive their refund in the original mode of payment. Issuing a credit shell, wallet balance, or travel voucher without the explicit, documented consent of the passenger constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>Can I get a refund on a non-refundable flight ticket if I cancel?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Yes. Even on strictly non-refundable or promo-fare tickets, airlines are statutorily forbidden from retaining statutory taxes and airport levies. Under DGCA CAR rules, all Passenger Service Fees (PSF), User Development Fees (UDF), Airport Development Fees (ADF), and applicable GST must be refunded in full without deducting any cancellation fee or convenience penalty.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>What should I do if an airline delays my refund beyond 7 working days?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  First, register a statutory grievance on the Ministry of Civil Aviation&apos;s AirSewa portal (airsewa.gov.in) with your PNR and payment proof. If the airline fails to resolve the refund within 30 days, serve a formal Advocate Legal Notice demanding immediate refund of principal dues plus 18% statutory interest. If unheeded, escalate to the e-Jagriti consumer commission portal for deficiency in service under CPA 2019.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                  <span>Flight cancel hone ke baad airline refund na kare ya credit shell de de toh kya legal action lein?</span>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:-rotate-180 transition-transform">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Agar airline ya travel agent flight cancel hone par refund nahi deta ya zabardasti credit shell deta hai, toh DGCA 2026 rules ke tahat ye gair-kanuni hai. Aap AirSewa par complaint lodge karein aur advocate ke zariye Section 2(47) CPA 2019 ke tehat statutory legal demand notice bhejein jisme refund aur interest claim karein.
                </p>
              </details>
            </div>
          </section>

          {/* SECTION 15: Primary Sources & Legal References */}
          <section aria-labelledby="sources-heading" className="mb-14">
            <h2
              id="sources-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Statutory Citations &amp; DGCA CAR References
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs sm:text-sm text-slate-700 space-y-2.5">
              <p>
                <strong>1. DGCA Civil Aviation Requirements (CAR):</strong> Section 3 - Air Transport, Series M, Part II: <em>Refund of Airline Tickets to Passengers of Consumer of Air Transport Services</em> (Revised 24 Feb 2026, Effective 26 Mar 2026). Published by Directorate General of Civil Aviation under Rule 133A, Aircraft Rules, 1937. Available at: <a href="https://www.dgca.gov.in" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">dgca.gov.in</a>.
              </p>
              <p>
                <strong>2. Aircraft Rules, 1937:</strong> Rule 133A (Powers of Director-General to issue directions). Government of India Gazette. India Code: <a href="https://www.indiacode.nic.in/handle/123456789/2260" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">Aircraft Act &amp; Rules</a>.
              </p>
              <p>
                <strong>3. Supreme Court of India:</strong> <em>Pravasi Legal Cell &amp; Ors. v. Union of India &amp; Ors.</em> (Writ Petition (Civil) No. 12586 of 2020, Decided on 1 October 2020). AIR 2020 SC 4785. Judgments Information System (SC-Judgments).
              </p>
              <p>
                <strong>4. Consumer Protection Act, 2019 (Act 35 of 2019):</strong> Section 2(11) (Deficiency in service), Section 2(47) (Unfair trade practice), and Section 34 / 35 (Jurisdiction of District Consumer Commission). India Code: <span className="text-sky-700 font-medium">Act No. 35 of 2019</span>.
              </p>
              <p>
                <strong>5. Ministry of Civil Aviation AirSewa Portal:</strong> Consumer grievance redressal rail established under national civil aviation policy. Portal: <a href="https://airsewa.gov.in" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">airsewa.gov.in</a>.
              </p>
            </div>
          </section>

          {/* SECTION 16: Call to Action */}
          <section className="mb-14">
            <DGCAAirTicketNoticeCTA />
          </section>

          {/* Reviewer Note per Guideline Rule 97 */}
          {/* TODO(reviewer): src/data/reviewers.ts is missing in repo; editorial review by Anuj Anand Malik */}
        </article>

        {/* Contextual Cluster Links */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
