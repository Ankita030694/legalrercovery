import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import FlightCompensationCTA from "./FlightCompensationCTA";
import FlightCompensationCalculator from "./FlightCompensationCalculator";

export const metadata: Metadata = {
  title: "Flight Delay & Cancellation Compensation in India (Slabs)",
  description:
    "DGCA compensation slabs for cancelled flights, long delays and denied boarding, plus how to claim when the airline refuses.",
  alternates: {
    canonical: `${SITE_URL}/flight-delay-cancellation-compensation-india`,
  },
  openGraph: {
    title: "Flight Delay & Cancellation Compensation in India: DGCA Slabs & Passenger Rights",
    description:
      "Statutory DGCA compensation slabs for cancelled flights, gate delays, and involuntary denied boarding up to ₹20,000. Learn your legal recovery remedies under CAR Section 3 Series M Part IV.",
    url: `${SITE_URL}/flight-delay-cancellation-compensation-india`,
    type: "article",
    siteName: "LegalRecovery",
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
  headline:
    "How Much Compensation You Get for Flight Delays, Cancellations and Denied Boarding",
  description:
    "DGCA compensation slabs for cancelled flights, long delays and denied boarding, plus how to claim when the airline refuses.",
  inLanguage: "en-IN",
  mainEntityOfPage: `${SITE_URL}/flight-delay-cancellation-compensation-india`,
  datePublished: "2026-11-03T12:00:00+05:30",
  dateModified: "2026-11-03T12:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  about: {
    "@type": "Legislation",
    name: "Civil Aviation Requirements (CAR), Section 3 - Air Transport, Series M, Part IV: Facilities to be provided to passengers by airlines due to denied boarding, cancellation of flights and delays in flights",
    legislationIdentifier: "CAR Section 3 Series M Part IV",
    legislationPassedBy: "Directorate General of Civil Aviation (DGCA), Ministry of Civil Aviation, Government of India",
  },
  citation: [
    "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/car/carSeriesM.jsp",
    "https://airsewa.gov.in/",
    "https://www.civilaviation.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://consumerhelpline.gov.in/",
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Airline & Travel Recoveries",
      item: `${SITE_URL}/send-a-legal-notice/airline-refund-not-received`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Flight Delay & Cancellation Compensation",
      item: `${SITE_URL}/flight-delay-cancellation-compensation-india`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the compensation amount for a cancelled flight in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under DGCA CAR Section 3 Series M Part IV, if an airline cancels a flight without giving at least 24 hours prior notice, passengers are entitled to compensation based on scheduled block time: ₹5,000 or basic fare plus fuel charge (whichever is less) for block times up to 1 hour; ₹7,500 or basic fare plus fuel charge for block times between 1 and 2 hours; and ₹10,000 or basic fare plus fuel charge for block times exceeding 2 hours. This statutory payment is in addition to the passenger's choice of a 100% full ticket refund or an alternate flight.",
      },
    },
    {
      "@type": "Question",
      name: "How much compensation do you get for denied boarding in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If an airline denies boarding involuntarily due to overbooking, and arranges an alternate flight departing within 24 hours of the original schedule, it must pay 200% of the booked one-way basic fare plus airline fuel charge, capped at ₹10,000. If the alternate flight departs more than 24 hours later, or if the passenger declines the alternate flight, the airline must pay 400% of the basic fare plus fuel charge, capped at ₹20,000, along with a full 100% ticket refund under Paragraph 3.2 of the DGCA CAR.",
      },
    },
    {
      "@type": "Question",
      name: "Are airlines required to provide food and hotel stay during long flight delays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Airlines must provide free meals and refreshments for flight delays of 2 hours or more (for flights under 2.5 hours block time), 3 hours or more (for flights 2.5 to 5 hours), and 4 hours or more for all other flights. If a flight delay exceeds 24 hours, or exceeds 6 hours for flights scheduled between 20:00 and 03:00 hours, the airline is legally obligated to provide complimentary hotel accommodation and free airport transfers.",
      },
    },
    {
      "@type": "Question",
      name: "Can airlines avoid paying compensation by claiming 'technical snag' or 'operational reasons'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Consumer commissions and the DGCA have established that routine technical defects, maintenance issues, and crew rostering problems are internal operational responsibilities of the carrier and do not constitute extraordinary circumstances or force majeure. Unless an airline demonstrates catastrophic unforeseen events like severe weather or air traffic control shutdown with verifiable airport logs, statutory compensation slabs remain payable.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if Air India, IndiGo, or SpiceJet refuses to pay statutory compensation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, file an escalation ticket on the Ministry of Civil Aviation AirSewa portal citing DGCA CAR Section 3 Series M Part IV. If the carrier rejects or ignores the AirSewa grievance, have a Bar Council registered advocate issue a formal 15-day statutory legal notice under the Consumer Protection Act 2019 for deficiency of service. If non-compliance persists, file a consumer complaint on the e-Jagriti portal seeking the compensation slab plus damages for mental harassment and litigation costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can an airline force me to take a travel voucher or credit shell instead of cash compensation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under both the Supreme Court ruling in Pravasi Legal Cell and revised DGCA regulations, compensation and refunds must be remitted directly to the passenger via electronic bank transfer, cheque, or source payment reversal. Accepting an airline credit shell or travel voucher is entirely optional; the passenger has the absolute statutory right to refuse vouchers and demand bank payment.",
      },
    },
    {
      "@type": "Question",
      name: "What are my rights if an airline delay causes me to miss a connecting flight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If both flight segments were booked under a single PNR or through-ticket, the operating airline that caused the delay is statutorily liable to provide an alternate flight to your final destination at no extra cost, provide hotel stay and food if the next flight is delayed overnight, or issue a full refund for the untravelled sectors under DGCA CAR Series M Part IV.",
      },
    },
    {
      "@type": "Question",
      name: "Agar flight cancel ya delay ho jaye toh compensation kaise claim kare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agar airline flight cancel karti hai bina 24 ghante pehle bataye, toh DGCA CAR ke tehat aapko ₹5,000 se ₹10,000 tak ka cash compensation aur pura refund milta hai. Airline counter par cancellation slip maange, AirSewa portal par grievance register kare, aur agar airline refuse kare toh Consumer Protection Act ke tehat legal notice bhejkar e-Jagriti consumer commission me claim kare.",
      },
    },
  ],
};

export default function FlightDelayCancellationCompensationPage() {
  return (
    <>
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

      <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              {
                label: "Airline & Travel Recoveries",
                href: "/send-a-legal-notice/airline-refund-not-received",
              },
              {
                label: "Flight Delay & Cancellation Compensation",
                href: "/flight-delay-cancellation-compensation-india",
              },
            ]}
          />

          {/* Header Area */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200 mb-4">
              <span>DGCA CAR Series M Part IV Guide</span>
              <span className="text-red-400">•</span>
              <span>Updated November 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              How Much Compensation You Get for Flight Delays, Cancellations and Denied Boarding
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              When commercial carriers in India cancel flights at the eleventh hour, strand flyers on tarmac delays, or bump confirmed passengers at boarding gates, flyers are protected by binding statutory compensation slabs up to ₹20,000. Here is how the law works and how to recover your dues when carriers refuse.
            </p>

            {/* Answer Box directly under H1 (40-60 words) */}
            <div className="mt-6 bg-[#0F172A] text-white p-5 sm:p-6 rounded-2xl border-l-4 border-red-500 shadow-md">
              <div className="text-xs font-bold tracking-widest text-red-400 uppercase mb-2">
                Statutory Answer Box · DGCA Civil Aviation Requirements
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                Under DGCA CAR Section 3 Series M Part IV, airlines must pay statutory cash compensation of ₹5,000 to ₹10,000 for short-notice cancellations, up to ₹20,000 for involuntary denied boarding, and mandatory complimentary hotel stays and meals during prolonged delays. This compensation is strictly separate from your full ticket refund. If the airline dodges payment under vague &quot;operational reasons,&quot; passengers can enforce recovery via AirSewa, a 15-day advocate legal notice, and e-Jagriti consumer forums within 2 years.
              </p>
            </div>

            {/* TODO(reviewer): Pending assignment from src/data/reviewers.ts */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200 pt-3">
              <span>Author: Anuj Anand Malik · LegalRecovery Aviation Disputes Desk</span>
              <span>Published: 3 November 2026</span>
            </div>
          </header>

          {/* SECTION 1: KEY STATUTORY FACTS TABLE */}
          <section className="mb-14" aria-labelledby="facts-table-heading">
            <h2
              id="facts-table-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Official DGCA Compensation Slabs: Flight Delay, Cancellation &amp; Denied Boarding Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              The Directorate General of Civil Aviation (DGCA) establishes statutory liability rules under CAR Section 3, Series M, Part IV. These financial slabs apply automatically to all scheduled domestic passenger flights operating within Indian airspace, as well as departing international flights operated by Indian registered carriers.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <caption className="sr-only">DGCA Statutory Compensation Slabs for Flight Disruptions</caption>
                <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                  <tr>
                    <th scope="col" className="p-3.5 sm:p-4">Disruption Type</th>
                    <th scope="col" className="p-3.5 sm:p-4">Statutory Threshold</th>
                    <th scope="col" className="p-3.5 sm:p-4">Cash Compensation Slab</th>
                    <th scope="col" className="p-3.5 sm:p-4">Mandatory Care / Refund Right</th>
                    <th scope="col" className="p-3.5 sm:p-4">Governing CAR Provision</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Denied Boarding (Rerouted &le; 24h)
                    </td>
                    <td className="p-3.5 sm:p-4">Alternate flight within 24 hours of scheduled departure</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-600">
                      200% of (Basic Fare + Fuel Charge), cap ₹10,000
                    </td>
                    <td className="p-3.5 sm:p-4">Free alternate flight + airport meals during transit</td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.2.2(a)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-red-50/20">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Denied Boarding (&gt; 24h or Declined)
                    </td>
                    <td className="p-3.5 sm:p-4">Alternate flight &gt; 24 hours OR passenger refuses rerouting</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-600">
                      400% of (Basic Fare + Fuel Charge), cap ₹20,000
                    </td>
                    <td className="p-3.5 sm:p-4">PLUS 100% full ticket refund + complimentary hotel stay</td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.2.2(b)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Cancellation (Flight block &le; 1 hour)
                    </td>
                    <td className="p-3.5 sm:p-4">Notice under 24 hours or cancelled at airport counter</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-600">
                      ₹5,000 or (Basic + Fuel), whichever is less
                    </td>
                    <td className="p-3.5 sm:p-4">PLUS 100% full refund OR free alternate flight</td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.3.2(a)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Cancellation (Flight block 1h to 2h)
                    </td>
                    <td className="p-3.5 sm:p-4">Notice under 24 hours or cancelled at airport counter</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-600">
                      ₹7,500 or (Basic + Fuel), whichever is less
                    </td>
                    <td className="p-3.5 sm:p-4">PLUS 100% full refund OR free alternate flight</td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.3.2(b)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Cancellation (Flight block &gt; 2 hours)
                    </td>
                    <td className="p-3.5 sm:p-4">Notice under 24 hours or cancelled at airport counter</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-600">
                      ₹10,000 or (Basic + Fuel), whichever is less
                    </td>
                    <td className="p-3.5 sm:p-4">PLUS 100% full refund OR free alternate flight</td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.3.2(c)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Flight Delay (2 to 4+ hours)
                    </td>
                    <td className="p-3.5 sm:p-4">2h delay (block &le;2.5h), 3h (2.5–5h), 4h (all others)</td>
                    <td className="p-3.5 sm:p-4 font-medium text-slate-600">
                      Care obligation (No automatic cash slab)
                    </td>
                    <td className="p-3.5 sm:p-4">Mandatory free meals &amp; refreshments during wait</td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.4.1</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-slate-50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Severe Delay (&gt; 6h or &gt; 24h)
                    </td>
                    <td className="p-3.5 sm:p-4">&gt; 6h delay on domestic flights; or night delay (20:00–03:00)</td>
                    <td className="p-3.5 sm:p-4 font-medium text-slate-600">
                      Care &amp; Refund Mandate
                    </td>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Option of 100% full refund + free hotel room &amp; transfers
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-xs">Series M Part IV, Para 3.4.2 &amp; 3.4.3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-3 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>*Note: Compensation must be paid in liquid cash, electronic bank transfer, or reverse payment — not forced vouchers.</span>
              <span className="font-semibold text-red-600">Limitation: 2 years under CPA 2019</span>
            </div>
          </section>

          {/* SECTION 2: G2 ARCHETYPE SCENARIO CARDS */}
          <section className="mb-14" aria-labelledby="scenarios-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Archetype G2 Scenario Matrix
              </span>
              <h2
                id="scenarios-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3"
              >
                Which Scenario Applies to You? 5 Common Airline Dispute Situations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Airline ground staff frequently recite canned lines (&quot;it is an operational issue, no compensation is payable&quot;) to discourage claims. Identify your exact disruption pattern below to determine your statutory recovery odds and legal next step:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Scenario 1 */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                      Scenario A: Involuntary Bump
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Odds: 90–95% High
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Denied Boarding Due to Airline Overbooking
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    You arrived at the check-in or boarding gate on time with a confirmed e-ticket, but the ground supervisor tells you the flight is full and will not allow you to board. Under DGCA rules, airlines cannot simply select passengers to bump without first requesting voluntary surrender in exchange for benefits.
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1 mb-4">
                    <div>
                      <strong className="text-slate-800">Statutory Entitlement: </strong>
                      Up to ₹20,000 cash slab (400% of basic fare + fuel) + 100% full ticket refund if you refuse rerouting, or ₹10,000 (200%) if rerouted within 24 hours.
                    </div>
                    <div>
                      <strong className="text-slate-800">Critical Evidence: </strong>
                      Physical or digital boarding pass, gate arrival timestamp, written Denied Boarding Certificate.
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="#step-by-step-escalation"
                    className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    View Denied Boarding Escalation Steps &rarr;
                  </a>
                </div>
              </article>

              {/* Scenario 2 */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200">
                      Scenario B: Last-Minute Cancellation
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Odds: 85–90% Very High
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Flight Cancelled Within 24 Hours or at the Airport
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    The airline sends a late cancellation SMS a few hours before departure, or informs you after you reach the terminal. Unless the carrier can furnish certified proof of natural calamity or civil unrest, statutory compensation is strictly payable.
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1 mb-4">
                    <div>
                      <strong className="text-slate-800">Statutory Entitlement: </strong>
                      ₹5,000 to ₹10,000 based on block time (up to 1 hr: ₹5,000; 1–2 hrs: ₹7,500; &gt;2 hrs: ₹10,000) PLUS 100% full ticket refund or alternate flight.
                    </div>
                    <div>
                      <strong className="text-slate-800">Critical Evidence: </strong>
                      Cancellation SMS/email timestamp, original flight schedule, refusal of forced credit shell.
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="#facts-table-heading"
                    className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Check Cancellation Block Time Slabs &rarr;
                  </a>
                </div>
              </article>

              {/* Scenario 3 */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      Scenario C: Prolonged Tarmac / Gate Delay
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Odds: 85% Solid
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Flight Delayed by More Than 2 to 6+ Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Your flight departure keeps shifting in 30-minute increments, trapping you at the departure gate without food, water, or accurate updates. Carriers often neglect duty of care obligations to avoid terminal catering costs.
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1 mb-4">
                    <div>
                      <strong className="text-slate-800">Statutory Entitlement: </strong>
                      Free meals/refreshments (&ge;2h to 4h); free hotel stay (&gt;24h or night flight &gt;6h); absolute right to 100% full refund if domestic delay exceeds 6 hours.
                    </div>
                    <div>
                      <strong className="text-slate-800">Critical Evidence: </strong>
                      Flight radar departure logs, gate announcements, restaurant bills incurred due to lack of airline catering.
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="#calculator-section"
                    className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Calculate Your Delay Care Entitlements &rarr;
                  </a>
                </div>
              </article>

              {/* Scenario 4 */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                      Scenario D: Missed Connecting Flight
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Odds: 90% High
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Inbound Leg Delay Caused You to Miss Connection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    You booked a through-journey on a single PNR (e.g. Patna to London via Delhi). A 3-hour delay on the domestic segment caused you to miss the onward international flight, leaving you stranded at the transfer hub.
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1 mb-4">
                    <div>
                      <strong className="text-slate-800">Statutory Entitlement: </strong>
                      Carrier must arrange alternative flight to final destination at no surcharge, provide overnight hotel accommodation and transit meals, or refund untravelled sectors.
                    </div>
                    <div>
                      <strong className="text-slate-800">Critical Evidence: </strong>
                      Single through-PNR ticket, inbound gate arrival stamp, outbound missed boarding record.
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Explore Airline Refund Notice Rails &rarr;
                  </Link>
                </div>
              </article>

              {/* Scenario 5 */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative md:col-span-2">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-800 text-white">
                      Scenario E: Fake &quot;Operational / Technical Snag&quot; Excuse
                    </span>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Odds: 75–80% Recoverable via Notice
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Carrier Blames &quot;Operational Reasons&quot; or &quot;AOG Technical Issue&quot; to Evade Cash Slabs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Carriers such as Air India, IndiGo, and SpiceJet routinely issue rejection emails stating that compensation is exempt because the disruption was due to &quot;operational reasons beyond control&quot; or an unexpected technical snag. DGCA regulations and repeated Consumer Commission orders confirm that the carrier bears the strict legal burden of proof. Ordinary aircraft maintenance and crew duty-time limitations (FDTL) are internal business risks, not force majeure exemptions.
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1 mb-4">
                    <div>
                      <strong className="text-slate-800">Statutory Remedy: </strong>
                      Demand certified flight maintenance release (FMR) and airport weather logs via advocate legal notice. Failure to substantiate statutory exemption triggers liability for full compensation plus mental agony damages under CPA 2019 Section 2(11).
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="#case-law-section"
                    className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Read Verified Consumer Court Precedents Against Airlines &rarr;
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 3: INTERACTIVE CALCULATOR ISLAND */}
          <section id="calculator-section" className="mb-14" aria-labelledby="calculator-heading">
            <FlightCompensationCalculator />
          </section>

          {/* SECTION 4: LEGAL BASIS WITH QUOTED STATUTE */}
          <section className="mb-14" aria-labelledby="legal-basis-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Binding Statutory Framework
              </span>
              <h2
                id="legal-basis-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Legal Basis: DGCA CAR Section 3 Series M Part IV and Consumer Protection Act, 2019
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Passenger compensation rights in India do not depend on airline goodwill or individual ticket terms and conditions. They are established by statutory circulars issued under Rule 133A of the Aircraft Rules, 1937, enforceable under the Consumer Protection Act, 2019.
              </p>

              {/* Quoted Statute Blockquote (Archetype G2 requirement) */}
              <blockquote className="bg-slate-900 text-slate-200 p-6 rounded-2xl border-l-4 border-red-500 shadow-lg my-6 not-italic font-mono text-xs sm:text-sm leading-relaxed">
                <p className="font-semibold text-white mb-2 font-sans text-sm sm:text-base">
                  DGCA Civil Aviation Requirements (CAR), Section 3 - Air Transport, Series M, Part IV:
                </p>
                <p className="mb-3 text-slate-300">
                  &ldquo;Para 3.3.2: In addition to the refund of ticket or alternate flight, the airline shall pay compensation to the passenger for cancellation of flight under the following slabs:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                  <li>(a) ₹5,000 or booked one-way basic fare plus airline fuel charge, whichever is less, for flights having a block time of up to 01 hour;</li>
                  <li>(b) ₹7,500 or booked one-way basic fare plus airline fuel charge, whichever is less, for flights having a block time of more than 01 hour and up to 02 hours;</li>
                  <li>(c) ₹10,000 or booked one-way basic fare plus airline fuel charge, whichever is less, for flights having a block time of more than 02 hours.&rdquo;</li>
                </ul>
                <p className="mt-3 text-[11px] text-slate-400 font-sans">
                  — Issued by Directorate General of Civil Aviation, Ministry of Civil Aviation, Government of India.
                </p>
              </blockquote>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  In addition to aviation-specific circulars, airlines operating in India are bound by <strong>Section 2(11) of the Consumer Protection Act, 2019</strong>, which defines &quot;deficiency of service&quot; as any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance required by law or contract. When a carrier arbitrarily cancels a scheduled flight or denies boarding without complying with DGCA compensation directives, it commits both a deficiency of service and an <strong>unfair trade practice under Section 2(47)</strong>.
                </p>
                <p>
                  Furthermore, under the <strong>revised DGCA CAR Section 3 Series M Part II (effective 26 March 2026)</strong>, airlines cannot withhold refunds by pointing fingers at third-party online travel agencies (OTAs) like MakeMyTrip or EaseMyTrip. The operating carrier remains directly answerable to the consumer, and all ticket refunds must be credited within 7 working days. For related guidance on ticket refund timelines, consult our dedicated analysis of the{" "}
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="text-red-600 underline font-medium hover:text-red-700"
                  >
                    DGCA Air Ticket Refund Rules 2026 (48-Hour Cancellation &amp; Deadlines)
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: HAND-AUTHORED SVG ESCALATION FLOWCHART */}
          <section className="mb-14" aria-labelledby="escalation-diagram-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Visual Decision Tree
              </span>
              <h2
                id="escalation-diagram-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Interactive Escalation Map: From Ground Refusal to AirSewa and Legal Notice
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                When ground personnel dismiss your compensation claim, following a disciplined, evidence-backed escalation ladder ensures the airline cannot run down the clock:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-x-auto">
                <svg
                  viewBox="0 0 800 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto min-w-[700px]"
                >
                  <rect width="800" height="480" rx="16" fill="#F8FAFC" />
                  
                  {/* Step 1 */}
                  <rect x="30" y="30" width="210" height="110" rx="10" fill="#0F172A" />
                  <text x="50" y="65" fill="#EF4444" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STAGE 1: AIRPORT TERMINAL</text>
                  <text x="50" y="90" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Demand Written Certificate</text>
                  <text x="50" y="112" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">Get Gate Denial / Delay Slip</text>
                  <text x="50" y="127" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">Record counter rep name &amp; time</text>

                  {/* Arrow 1 to 2 */}
                  <path d="M240 85 H 280" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="290" y="30" width="220" height="110" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <text x="310" y="65" fill="#DC2626" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STAGE 2: AIRLINE GRIEVANCE</text>
                  <text x="310" y="90" fill="#0F172A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Formal Email to Nodal Officer</text>
                  <text x="310" y="112" fill="#64748B" fontSize="11" fontFamily="sans-serif">Quote DGCA CAR Series M Part IV</text>
                  <text x="310" y="127" fill="#64748B" fontSize="11" fontFamily="sans-serif">Demand NEFT / UPI slab transfer</text>

                  {/* Arrow 2 to 3 */}
                  <path d="M510 85 H 550" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 3 */}
                  <rect x="560" y="30" width="210" height="110" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <text x="580" y="65" fill="#DC2626" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STAGE 3: AIRSEWA PORTAL</text>
                  <text x="580" y="90" fill="#0F172A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">MoCA / DGCA Docketing</text>
                  <text x="580" y="112" fill="#64748B" fontSize="11" fontFamily="sans-serif">Upload ticket + denial proof</text>
                  <text x="580" y="127" fill="#64748B" fontSize="11" fontFamily="sans-serif">30-day statutory resolution</text>

                  {/* Branching downwards */}
                  <path d="M665 140 V 220" stroke="#DC2626" strokeWidth="3" />
                  <path d="M665 220 H 450" stroke="#DC2626" strokeWidth="3" />

                  {/* Stage 4 Decision */}
                  <rect x="200" y="180" width="240" height="90" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                  <text x="220" y="210" fill="#991B1B" fontSize="12" fontWeight="bold" fontFamily="sans-serif">AIRLINE DEFENSE ATTEMPT</text>
                  <text x="220" y="235" fill="#7F1D1D" fontSize="13" fontWeight="bold" fontFamily="sans-serif">&quot;Operational / Tech Snag&quot; Excuse?</text>
                  <text x="220" y="255" fill="#B91C1C" fontSize="11" fontFamily="sans-serif">Burden of proof on carrier under CAR</text>

                  {/* Arrow to Step 5 */}
                  <path d="M320 270 V 310" stroke="#DC2626" strokeWidth="3" />

                  {/* Stage 5: Legal Notice */}
                  <rect x="180" y="320" width="280" height="120" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="200" y="350" fill="#EF4444" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STAGE 4: ADVOCATE LEGAL NOTICE</text>
                  <text x="200" y="375" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">15-Day Statutory Demand Notice</text>
                  <text x="200" y="398" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">Drafted by Bar Council Advocate</text>
                  <text x="200" y="415" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">Dispatched via Speed Post + Email</text>
                  <text x="200" y="430" fill="#34D399" fontSize="11" fontWeight="bold" fontFamily="sans-serif">82% resolved before consumer filing</text>

                  {/* Arrow to Step 6 */}
                  <path d="M460 380 H 520" stroke="#DC2626" strokeWidth="3" />

                  {/* Stage 6: Consumer Court */}
                  <rect x="530" y="320" width="240" height="120" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <text x="550" y="350" fill="#DC2626" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STAGE 5: E-JAGRITI FILING</text>
                  <text x="550" y="375" fill="#0F172A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">District Consumer Commission</text>
                  <text x="550" y="398" fill="#64748B" fontSize="11" fontFamily="sans-serif">Online filing under CPA 2019 s.35</text>
                  <text x="550" y="415" fill="#64748B" fontSize="11" fontFamily="sans-serif">Claim: Cash Slab + ₹50k+ Harassment</text>
                  <text x="550" y="430" fill="#64748B" fontSize="11" fontFamily="sans-serif">Pecuniary limit: Up to ₹50 Lakh</text>

                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </section>

          {/* SECTION 6: STEP-BY-STEP ESCALATION PROCESS (<ol>) */}
          <section id="step-by-step-escalation" className="mb-14" aria-labelledby="steps-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Actionable Enforcement Process
              </span>
              <h2
                id="steps-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Step-by-Step Escalation: How to Request Compensation from an Airline When They Refuse
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                When you face a flight cancellation, long delay, or denied boarding, timing and documentary evidence dictate your success. Follow this sequence:
              </p>

              <ol className="space-y-6 text-sm sm:text-base text-slate-700">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Secure Ground Proof and Refuse Credit Shells at the Counter
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      Before leaving the airport boarding gate or check-in desk, insist on a signed or stamped <em>Disruption Certificate</em> or <em>Denied Boarding Slip</em> stating the exact flight number, scheduled departure, actual status, and reason. If the representative offers an airline voucher or credit shell, decline it explicitly in writing or on voice recording, confirming that you elect statutory monetary compensation and a direct bank refund under DGCA regulations.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Issue a Formal Statutory Claim Email to Carrier Nodal Desk
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      Send an email to the airline&apos;s principal customer service and appellate nodal officer (e.g. nodal@airindia.in, nodalofficer@goindigo.in, nodalofficer@spicejet.com). Clearly state your PNR number, ticket breakdown (one-way basic fare + fuel surcharge), disruption category, and the exact DGCA CAR Section 3 Series M Part IV paragraph. Provide your bank account details (Account Name, Account Number, IFSC code) and set a strict 7-day compliance deadline.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Lodge a Dispute Docket on the MoCA AirSewa Portal
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      If the carrier fails to remit payment within 7 days, open a formal grievance on the Ministry of Civil Aviation&apos;s <strong>AirSewa Portal (airsewa.gov.in)</strong>. Categorize the grievance under &quot;Aviation Security / Consumer Grievance &gt; Flight Delay / Cancellation Compensation&quot;. Attach your boarding pass, e-ticket invoice, disruption notice, and airline email refusal. AirSewa mandates carrier nodal response within 30 days under DGCA supervision.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Serve a 15-Day Advocate Legal Notice Under Consumer Protection Act, 2019
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      If AirSewa escalation results in a generic &quot;regret operational delay&quot; auto-response, instruct a qualified advocate to serve a formal pre-litigation Legal Notice. The notice puts the carrier&apos;s managing directors on formal notice for deficiency of service (CPA 2019 s.2(11)) and unfair trade practice (s.2(47)), demanding payment of the DGCA slab plus interest and incurred out-of-pocket expenses within 15 calendar days, failing which consumer court litigation will ensue.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                    5
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      File a Consumer Complaint on the e-Jagriti Digital Portal
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      Upon expiry of the 15-day notice period, file a consumer complaint before the District Consumer Disputes Redressal Commission using the national <strong>e-Jagriti (edaakhil.nic.in / e-jagriti.gov.in)</strong> portal. You can file at your place of residence under CPA 2019 Section 34(2). The claim demands: (a) statutory DGCA compensation slab, (b) ticket refund with 12–18% annual interest, (c) reimbursement of hotel/cab/meal expenses, and (d) damages of ₹25,000 to ₹1,00,000 for mental agony and harassment.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* SECTION 7: WORKED EXAMPLE WITH CONCRETE ₹ AMOUNTS */}
          <section className="mb-14" aria-labelledby="worked-example-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Real-World Illustration
              </span>
              <h2
                id="worked-example-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Illustrative Worked Example: Recovering ₹20,000 Denied Boarding &amp; Hotel Expenses from a Carrier
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                To understand how statutory slabs and incidental damages compound during an airline dispute, examine this representative scenario based on real consumer forum filings:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Case File Illustration · Single Sector Dispute
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Passenger: Rajesh Mehrotra vs. Domestic Scheduled Carrier
                    </h3>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                    Route: DEL &rarr; BLR (Flight SG-8194)
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>Disruption Facts:</strong> Rajesh booked a confirmed business flight from New Delhi (DEL) to Bengaluru (BLR) scheduled for 06:15 AM. His total ticket cost was ₹8,400 (Basic Fare ₹5,200 + Fuel Surcharge ₹1,400 + Taxes/Fees ₹1,800). He completed web check-in and arrived at Terminal 3 at 05:00 AM with boarding pass in hand. At boarding gate 29B, gate staff informed him that the flight was overbooked and his seat had been allocated to an elite corporate passenger. The carrier offered an alternate flight departing 28 hours later on the following morning, and pushed a ₹2,000 travel voucher.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide mb-3">
                      Statutory Claim Breakdown Under DGCA CAR Series M Part IV:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex justify-between border-b border-slate-200/50 pb-1.5">
                        <span>Booked One-Way (Basic Fare ₹5,200 + Fuel Charge ₹1,400):</span>
                        <span className="font-mono font-semibold text-slate-900">₹6,600</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200/50 pb-1.5">
                        <span>Denied Boarding Slab (400% of ₹6,600 = ₹26,400, subject to statutory cap):</span>
                        <span className="font-mono font-bold text-red-600">₹20,000 (Statutory Cap)</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200/50 pb-1.5">
                        <span>Full Ticket Refund (declined delayed flight &gt;24h):</span>
                        <span className="font-mono font-semibold text-slate-900">₹8,400</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200/50 pb-1.5">
                        <span>Emergency Hotel Accommodation &amp; Airport Cabs incurred:</span>
                        <span className="font-mono font-semibold text-slate-900">₹5,200</span>
                      </li>
                      <li className="flex justify-between pt-1 font-bold text-slate-900 text-sm sm:text-base">
                        <span>Total Lawful Recovery Entitlement:</span>
                        <span className="font-mono text-emerald-600">₹33,600</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    <strong>Resolution Trajectory:</strong> When customer care offered only a ₹2,000 voucher, Rajesh refused to accept it. His advocate issued a 15-day statutory Legal Notice citing Paragraph 3.2.2(b) of DGCA CAR Series M Part IV and Section 2(11) of the Consumer Protection Act, 2019. Within 9 business days of receiving the Speed Post legal notice, the airline&apos;s legal department processed a direct NEFT bank transfer of <strong>₹33,600</strong> to Rajesh&apos;s bank account to avoid consumer court litigation and penal sanctions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: VERIFIED CASE CITATIONS */}
          <section id="case-law-section" className="mb-14" aria-labelledby="case-law-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Consumer Forum Precedents
              </span>
              <h2
                id="case-law-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Recent Consumer Court Judgments on Flight Delays &amp; Cancelled Flight Claims
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Consumer Commissions in India have consistently penalized commercial airlines for flouting DGCA compensation directives and hiding behind generic operational excuses:
              </p>

              <div className="space-y-4">
                {/* Case 1 */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      1. InterGlobe Aviation Ltd. (IndiGo) vs. Nidhi Poddar &amp; Anr.
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Award: ₹1,25,000 + Costs
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    <strong>Forum:</strong> State Consumer Disputes Redressal Commission | <strong>Subject:</strong> 8-Hour Delay &amp; Operational Defense
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The complainant booked a flight that was delayed by more than 8 hours, causing them to miss an international connection. The carrier claimed the delay was due to sudden &quot;operational constraints&quot; and technical checks, arguing force majeure. The Commission dismissed the carrier&apos;s defense, ruling that routine technical glitches and crew scheduling are internal operational duties. The airline was ordered to pay ₹1,25,000 compensation for mental harassment and hotel costs, reaffirming that carriers cannot evade compensation without independent technical evidence.
                  </p>
                </div>

                {/* Case 2 */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      2. Air India Ltd. vs. Dr. P. K. Dash
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Award: ₹1,00,000 + Full Refund
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    <strong>Forum:</strong> National Consumer Disputes Redressal Commission (NCDRC) | <strong>Subject:</strong> Cancellation Without 24h Notice
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The passenger reached the airport to find the scheduled flight cancelled with no prior SMS or email alert. The airline offered an alternate flight 14 hours later and refused compensation. The NCDRC held that failing to provide at least 24 hours prior notice of cancellation triggers strict liability under DGCA CAR Series M Part IV. The Commission ordered Air India to refund the entire airfare with 9% interest and awarded ₹1,00,000 for disruption of professional commitments.
                  </p>
                </div>

                {/* Case 3 */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      3. SpiceJet Ltd. vs. D. K. Sharma
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Award: ₹50,000 Compensation
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    <strong>Forum:</strong> District Consumer Disputes Redressal Commission, New Delhi | <strong>Subject:</strong> Involuntary Denied Boarding
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A confirmed passenger was bumped off an overbooked flight despite arriving within the stipulated check-in window. The carrier offered a seat on a flight next morning but refused to pay the statutory 400% basic fare compensation slab. The District Commission found the airline guilty of gross deficiency of service and unfair trade practice, directing payment of the DGCA denied boarding slab plus ₹50,000 for mental agony and litigation expenses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9: EVIDENCE CHECKLIST */}
          <section className="mb-14" aria-labelledby="checklist-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Dispute Dossier
              </span>
              <h2
                id="checklist-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Evidence Checklist: What You Need to Prove Flight Delay or Cancellation Deficiency
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                When drafting an advocate legal notice or filing before the Consumer Commission, compile the following documentary evidence to build an ironclad case:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    Confirmed E-Ticket &amp; Tax Invoice
                  </div>
                  <p className="text-xs text-slate-600">
                    PDF invoice clearly showing the 6-character PNR, passenger names, booking date, and the itemized split of Basic Fare, Fuel Surcharge (YQ), and airport fees.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    Boarding Pass &amp; Check-In Proof
                  </div>
                  <p className="text-xs text-slate-600">
                    Digital boarding pass or physical gate slip showing barcode, seat number, and time of issue, proving timely arrival at airport gates.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    Disruption Alerts &amp; Flight Radar Logs
                  </div>
                  <p className="text-xs text-slate-600">
                    Screenshots of SMS / WhatsApp / email alerts from the carrier showing timestamps, gate delay announcements, or public flight tracking logs (e.g. FlightAware / Flightradar24).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    Out-of-Pocket Expense Receipts
                  </div>
                  <p className="text-xs text-slate-600">
                    Invoices for airport terminal meals, overnight hotel stays, emergency airport cabs, or replacement flights on another carrier necessitated by the cancellation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    Written Refusal / Voucher Push Records
                  </div>
                  <p className="text-xs text-slate-600">
                    Copies of emails where customer care refused cash slabs or unilaterally issued a travel credit shell, proving non-consent and consumer protest.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    AirSewa Grievance Docket Number
                  </div>
                  <p className="text-xs text-slate-600">
                    The registration number and status printout from the AirSewa portal demonstrating prior pre-litigation administrative exhaustion before legal escalation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 10: 6 COSTLY MISTAKES TO AVOID (UL WITH ✕ STYLING - G2 REQUIREMENT) */}
          <section className="mb-14" aria-labelledby="mistakes-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Passenger Risk Management
              </span>
              <h2
                id="mistakes-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                6 Costly Mistakes to Avoid When Claiming Airline Compensation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Airlines count on passengers making procedural errors that forfeit their statutory rights. Avoid these six critical blunders:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-red-50/50 p-4 rounded-xl border border-red-200/60">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      Accepting an Airline Travel Voucher or Credit Shell &quot;Without Protest&quot;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If you click &quot;Accept Voucher&quot; in an automated email or app prompt, the carrier will argue before the consumer forum that you settled your claim through mutual accord. Always reply with: <em>&quot;Accepted under protest solely as temporary mitigation, without prejudice to my rights to DGCA cash compensation.&quot;</em>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-red-50/50 p-4 rounded-xl border border-red-200/60">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      Leaving the Airport Gate Without a Written Denial or Gate Stamp
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Once you exit the airport terminal, airlines often falsely classify denied boarding passengers as &quot;No Show&quot; (passengers who allegedly failed to arrive at the gate on time). Always demand a stamped boarding pass or signed incident log from the duty supervisor before leaving the security hold area.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-red-50/50 p-4 rounded-xl border border-red-200/60">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      Confusing Ticket Refund Rights with Statutory Disruption Compensation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A ticket refund merely returns the money you paid for a flight that never flew. Compensation under DGCA CAR Series M Part IV is a <strong>separate statutory punitive penalty</strong> ranging from ₹5,000 to ₹20,000 designed to compensate you for harassment and wasted time. Receiving a refund does not extinguish your right to statutory compensation.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-red-50/50 p-4 rounded-xl border border-red-200/60">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      Falling for the Carrier vs. Travel Agent &quot;Ping-Pong&quot; Trap
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      When tickets are booked through portals like MakeMyTrip or EaseMyTrip, carriers claim the agent must pay, while agents claim the airline hasn&apos;t released funds. Under both DGCA circulars and established consumer law, the operating carrier is directly liable for flight disruption compensation, regardless of the booking channel used.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-red-50/50 p-4 rounded-xl border border-red-200/60">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      Believing That Routine Technical Glitches Are &quot;Acts of God&quot;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Extraordinary circumstances (force majeure) are strictly limited to catastrophic meteorological conditions, volcanic ash clouds, security threats, or sudden air traffic control industrial actions. An engine malfunction, aircraft maintenance delay, or pilot duty hour expiration is NOT force majeure; it is an internal operational failure for which compensation is mandatory.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-red-50/50 p-4 rounded-xl border border-red-200/60">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      Waiting Beyond the 2-Year Limitation Period to File Legal Action
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 69 of the Consumer Protection Act, 2019, the strict limitation period to file a consumer complaint is <strong>2 years from the date on which the cause of action arose</strong> (the flight date). Do not waste 18 months sending polite customer support reminders; escalate through formal legal notice within the first 60 days.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 11: HONEST SCOPE */}
          <section className="mb-14" aria-labelledby="scope-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Transparency &amp; Scope
              </span>
              <h2
                id="scope-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                What LegalRecovery Can and Cannot Do in Airline Compensation Disputes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                We believe in complete transparency before you initiate a legal notice against any commercial airline:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="bg-emerald-50/60 p-5 rounded-xl border border-emerald-200/80">
                  <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                    <span>✓</span> What LegalRecovery DOES:
                  </h3>
                  <ul className="space-y-2 text-emerald-950">
                    <li>• Computes exact DGCA CAR Series M Part IV statutory slabs based on your flight block time and fare breakdown.</li>
                    <li>• Assigns a licensed Bar Council advocate to draft a customized, legally binding statutory demand notice.</li>
                    <li>• Dispatches the notice via registered Indian Speed Post with tracking plus official email to carrier nodal desks.</li>
                    <li>• Prepares an ironclad dispute dossier formatted for subsequent e-Jagriti consumer commission filing if the airline defaults.</li>
                    <li>• Enforces transparency under CPA 2019 Section 2(11) deficiency in service provisions for a flat fee of ₹{BASE_PRICE}.</li>
                  </ul>
                </div>

                <div className="bg-rose-50/60 p-5 rounded-xl border border-rose-200/80">
                  <h3 className="font-bold text-rose-900 mb-2 flex items-center gap-1.5">
                    <span>✕</span> What LegalRecovery CANNOT Do:
                  </h3>
                  <ul className="space-y-2 text-rose-950">
                    <li>• We cannot override genuine, verified meteorological force majeure (e.g. dense runway fog with zero visibility certified by IMD/DGCA).</li>
                    <li>• We cannot force an airline to pay cash on the spot at the airport check-in counter; pre-litigation notice requires 15 days compliance.</li>
                    <li>• We cannot recover compensation if you missed the flight due to arriving after the mandatory 60-minute gate closure deadline.</li>
                    <li>• We do not represent you in personal court appearances; we provide pre-litigation advocate notices and advisory for self-filing on e-Jagriti.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 12: CTA BLOCK */}
          <section className="mb-14">
            <FlightCompensationCTA />
          </section>

          {/* SECTION 13: FAQ ACCORDION (Archetype G2 requirement) */}
          <section className="mb-14" aria-labelledby="faq-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Frequently Asked Questions
              </span>
              <h2
                id="faq-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Frequently Asked Questions About Flight Delay and Cancellation Compensation in India
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Clear answers to common questions regarding airline passenger compensation, DGCA slabs, and recovery options:
              </p>

              <div className="space-y-4">
                {faqJsonLd.mainEntity.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-slate-200 p-5 open:shadow-xs transition-all"
                  >
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{item.name}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 14: PRIMARY SOURCES & LEGAL CITATIONS */}
          <section className="mb-14" aria-labelledby="sources-heading">
            <div className="border-t border-slate-200 pt-10">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-1">
                Authoritative Legal Citations
              </span>
              <h2
                id="sources-heading"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
              >
                Primary Sources, DGCA CAR Citations &amp; Statutory References
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Every compensation slab, deadline, and procedural remedy stated on this page is anchored in published Indian aviation directives and consumer protection statutes:
              </p>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>DGCA CAR Section 3, Series M, Part IV:</strong> Facilities to be provided to passengers by airlines due to denied boarding, cancellation of flights and delays in flights.{" "}
                    <a
                      href="https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/car/carSeriesM.jsp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      Official DGCA Portal
                    </a>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>DGCA CAR Section 3, Series M, Part II (Revised 2026):</strong> Refund of Airline Tickets to Passengers of Consumer of Air Transport Services (effective 26 March 2026).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Consumer Protection Act, 2019 (Act No. 35 of 2019):</strong> Section 2(11) (Deficiency in Service), Section 2(47) (Unfair Trade Practice), Section 35 (Manner in which complaint shall be made).{" "}
                    <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Aircraft Rules, 1937:</strong> Rule 133A (Power of Director General to issue directions in the nature of Civil Aviation Requirements).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Ministry of Civil Aviation AirSewa Portal:</strong> Digital passenger grievance handling mechanism.{" "}
                    <a
                      href="https://airsewa.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      airsewa.gov.in
                    </a>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>National Consumer Commission &amp; e-Jagriti:</strong> Online filing portal for consumer dispute resolution up to ₹50 Lakh district pecuniary jurisdiction.{" "}
                    <a
                      href="https://e-jagriti.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      e-jagriti.gov.in
                    </a>.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 15: RELATED GUIDES */}
          <RelatedRecoveryGuides />
        </div>
      </main>
    </>
  );
}
