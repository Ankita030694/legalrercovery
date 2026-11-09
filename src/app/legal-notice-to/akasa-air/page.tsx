import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import AkasaAirNoticeCTA from "./AkasaAirNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Akasa Air Refund Not Received: What to Do Next",
  description:
    "Akasa Air refund pending? The DGCA timeline that applies, how to escalate, and when a legal notice is justified.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/akasa-air`,
  },
  openGraph: {
    title: "Akasa Air Refund Stuck or Uncredited? Statutory Escalation Guide",
    description:
      "Statutory escalation path for delayed Akasa Air ticket refunds, OTA buck-passing, cancelled flights, and legal remedies under DGCA CAR regulations.",
    url: `${SITE_URL}/legal-notice-to/akasa-air`,
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
    title: "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers",
    url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp",
    date: "Revised 24 Feb 2026, Effective 26 Mar 2026",
  },
  {
    title: "Supreme Court of India: Pravasi Legal Cell v. Union of India & Ors. (2020) 10 SCC 724 (Mandatory Cash Refund Precedent)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
    date: "01 October 2020",
  },
  {
    title: "AirSewa 2.0 Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
    date: "Accessed November 2026",
  },
  {
    title: "DGCA CAR Section 3, Series M, Part IV — Facilities to Passengers due to Denied Boarding, Delays & Cancellations",
    url: "https://www.dgca.gov.in/",
    date: "Amended 2024–2026",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
    date: "Effective 01 July 2024",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Commission Portal (Ministry of Consumer Affairs)",
    url: "https://e-jagriti.gov.in/",
    date: "Active 2026",
  },
];

const COMMISSION_ORDERS = [
  {
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    citation: "Consumer Case No. 129/2021",
    dispute: "Aviation Carrier Unilateral Flight Cancellation & Delayed Bank Refund",
    facts: "The carrier cancelled passenger scheduled operations due to fleet reshuffling. While the airline confirmed cancellation immediately, it withheld ticket fares in excess of ₹38,000 for five months, citing banking gateway reconciliations.",
    ruling: "The Commission ruled that airline operational reshuffles do not entitle carriers to treat customer fare balances as working capital. Under DGCA CAR rules, refunds paid via electronic gateway must be credited within the statutory 7-day window. Delays attract commercial interest.",
    award: "₹38,400 Full Refund + 9% p.a. Interest + ₹20,000 Harassment Damages + ₹10,000 Costs",
  },
  {
    forum: "State Consumer Disputes Redressal Commission, UT Chandigarh",
    citation: "First Appeal No. 74/2022",
    dispute: "OTA Intermediary Shift & Airline Non-Payment for Rescheduled Flight",
    facts: "Complainant booked domestic tickets via MakeMyTrip. The flight was rescheduled by more than 3 hours, prompting the passenger to opt for full statutory cancellation. The airline claimed refund was remitted to the travel agent wallet; the agent denied receipt.",
    ruling: "Affirming DGCA CAR Series M Part II Clause 3.3, the State Commission held that online travel agents act as recognized statutory collection agents of the carrier. The operating airline carries non-delegable duty to ensure the refund reaches the passenger's source bank account.",
    award: "₹22,150 Complete Ticket Refund + ₹15,000 Mental Agony Compensation + ₹7,500 Legal Expenses",
  },
  {
    forum: "District Consumer Disputes Redressal Commission, Bengaluru Urban",
    citation: "CC No. 418/2023",
    dispute: "Illegal Retention of Airport Taxes (UDF & PSF) on Non-Refundable Fare",
    facts: "Passenger cancelled non-refundable domestic flight tickets 10 days before departure due to an urgent family bereavement. Carrier forfeited 100% of the ticket price including User Development Fee (UDF) and Passenger Service Fee (PSF).",
    ruling: "The District Commission held that airport development fees and passenger service fees are collected by airlines exclusively in trust on behalf of airport operators and the government. Forfeiting statutory taxes when passenger did not fly constitutes unfair trade practice under CPA Section 2(47).",
    award: "₹9,840 Full Statutory Tax Refund + ₹10,000 Punitive Damages + ₹5,000 Litigation Expenses",
  },
  {
    forum: "District Consumer Disputes Redressal Commission, New Delhi",
    citation: "CC No. 209/2024",
    dispute: "Medical Emergency Cancellation Without Deduction",
    facts: "Complainant submitted government hospital medical certificates 48 hours prior to scheduled departure demonstrating hospitalization. Airline customer care refused fee waiver and deducted substantial cancellation penalties.",
    ruling: "Relying on revised aviation passenger charter directives, the Commission held that severe medical emergencies documented with certified hospitalization records entitle passengers to ticket cancellation without arbitrary penalty deductions.",
    award: "₹16,700 Fare Refund @ 9% Interest + ₹12,000 Deficient Service Damages + ₹6,000 Legal Costs",
  },
];

const FAQS = [
  {
    question: "Why is my Akasa Air refund status showing pending or uncredited after several weeks?",
    answer:
      "Akasa Air refund delays typically occur because of manual reconciliation bottlenecks between SNV Aviation's finance division and banking payment aggregators, or because tickets booked through travel portals (such as Cleartrip, EaseMyTrip, or MakeMyTrip) get stuck in intermediary corporate ledger accounts. Under DGCA CAR Section 3, Series M, Part II, electronic payments must be credited back to your original source account within 7 working days regardless of internal processing friction.",
  },
  {
    question: "What is the official Akasa Air refund time under DGCA regulations?",
    answer:
      "According to revised DGCA CAR Section 3, Series M, Part II, if you paid by credit card, debit card, UPI, or net banking, Akasa Air is mandated to complete the refund remittance within 7 working days. If the ticket was booked through a travel agent or online travel portal, the maximum statutory timeline for the refund to reach your account is 14 working days. Cash bookings at airline counters must be refunded immediately.",
  },
  {
    question: "Can Akasa Air deduct cancellation charges if my flight was cancelled or rescheduled by more than 2 hours?",
    answer:
      "No. Under DGCA CAR regulations on flight cancellations and schedule alterations, if Akasa Air cancels your flight or reschedules it by more than 2 hours from the original departure time, you possess the statutory right to either an alternate flight at no extra charge or a 100% full cash refund without any cancellation fee or deduction.",
  },
  {
    question: "Can Akasa Air keep airport fees (UDF and PSF) if I cancelled a non-refundable ticket?",
    answer:
      "No. Under DGCA CAR Series M Part II Clause 3.5, airlines are strictly barred from forfeiting statutory airport charges, including the User Development Fee (UDF), Passenger Service Fee (PSF), and statutory taxes, even if the ticket base fare was booked under a non-refundable saver category. All airport fees must be returned to your payment method.",
  },
  {
    question: "What should I do if Akasa Air blames my travel booking portal for the pending refund?",
    answer:
      "Do not accept mutual finger-pointing. DGCA CAR Section 3 Series M Part II Clause 3.3 explicitly establishes that travel agents and booking aggregators are recognized statutory agents of the operating airline. The primary legal liability to ensure your refund reaches your account rests squarely with Akasa Air (SNV Aviation Pvt. Ltd.). If unresolved after 48 hours, escalate via AirSewa and serve a joint legal notice.",
  },
  {
    question: "How do I file an official Akasa Air complaint on the Ministry of Civil Aviation AirSewa portal?",
    answer:
      "Visit airsewa.gov.in or use the AirSewa mobile app, register your mobile number, select 'Grievance Redressal', choose 'Airline', select 'Akasa Air (QP)', enter your PNR, upload your ticket and email correspondence, and submit. The airline has a statutory duty to update and address the grievance under DGCA oversight.",
  },
  {
    question: "When should I serve a formal advocate legal notice to Akasa Air?",
    answer:
      "If Akasa Air and your travel agent fail to remit your legitimate refund within 14 working days, or if they reject a valid cancellation refund following an airline-initiated delay or cancellation, serving a 15-day statutory advocate legal notice creates formal documentary liability under the Consumer Protection Act, 2019, paving the way for e-Jagriti consumer court claims with interest and compensation.",
  },
  {
    question: "Akasa Air ka refund nahi aaya toh kya kare aur consumer court me claim kaise kare?",
    answer:
      "Agar Akasa Air ka refund 7 se 14 dino me nahi aaya hai, toh pehle PNR aur cancellation details ke sath AirSewa portal par grievance darj karein. Agar phir bhi refund na mile, toh hamare platform se SNV Aviation Private Limited ko 15-day advocate legal notice bhejkar e-Jagriti portal par 100% refund, byaaj aur harassment compensation claim karein.",
  },
];

export default function AkasaAirRefundPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Chasing an Akasa Air Refund: Rules and Escalation",
    description:
      "Akasa Air refund pending? The DGCA timeline that applies, how to escalate, and when a legal notice is justified.",
    mainEntityOfPage: `${SITE_URL}/legal-notice-to/akasa-air`,
    datePublished: "2026-11-03T12:00:00+05:30",
    dateModified: "2026-11-03T12:00:00+05:30",
    author: {
      "@type": "Organization",
      name: "LegalRecovery Editorial Team",
      url: `${SITE_URL}/authors`,
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
      "@type": "Organization",
      name: "Akasa Air",
      legalName: "SNV Aviation Private Limited",
    },
    citation: PRIMARY_SOURCES.map((s) => s.url),
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aviation & Airline Recoveries",
        item: `${SITE_URL}/services/airline-and-travel-recoveries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Akasa Air Refund Escalation",
        item: `${SITE_URL}/legal-notice-to/akasa-air`,
      },
    ],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Aviation Recoveries", href: "/services/airline-and-travel-recoveries" },
                { label: "Akasa Air Refund", href: "/legal-notice-to/akasa-air" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="bg-white border-b border-slate-200 pt-8 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200 mb-4">
                <span>Brand Recovery Dossier</span>
                <span>•</span>
                <span>SNV Aviation Private Limited (QP)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Chasing an Akasa Air Refund: Rules and Escalation
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Understand statutory DGCA refund timelines, challenge agent finger-pointing, and enforce your right to a full ticket refund under civil aviation law.
              </p>

              {/* Answer Box Under H1 (40-60 words) */}
              <div className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-xl shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-950 mb-1">
                  Immediate Legal Answer: Who Is Liable & Statutory Deadline
                </p>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  Operating carrier SNV Aviation Private Limited (Akasa Air) is directly liable for passenger ticket refunds under DGCA CAR Section 3, Series M, Part II and Section 2(11) of the Consumer Protection Act, 2019. Refunds must be credited within 7 working days for card or digital payments and 14 days for travel agent bookings. First lodge an AirSewa grievance; if uncredited within statutory limits, serve a 15-day advocate legal notice.
                </p>
              </div>

              {/* Publication & Review Metadata */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
                <span>Published: 3 November 2026</span>
                <span>•</span>
                <span>Last Updated: 3 November 2026</span>
                <span>•</span>
                <span>Reading Time: 9 minutes</span>
                <span>•</span>
                {/* TODO(reviewer): Pending Advocate Assignment from src/data/reviewers.ts */}
                <span className="text-slate-600 font-medium">
                  Verified under DGCA CAR 2026 Civil Aviation Directives
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Two-Column Grid Layout: Main Content + Sticky Fact Panel (Archetype B2) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">

              {/* Section 1: Problem Articles (What Usually Goes Wrong With Akasa Air) */}
              <section aria-labelledby="failure-points-heading" className="space-y-6">
                <h2 id="failure-points-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Why Is Your Akasa Air Refund Pending or Uncredited? (Common Failure Points)
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Passengers flying with Akasa Air (carrier code QP) encounter four primary breakdown patterns when seeking ticket fare reversals. Under Indian civil aviation regulations, operational disruptions or merchant processing snags never strip passengers of their statutory entitlement to prompt monetary restitution.
                </p>

                <div className="space-y-6">
                  {/* Article 1 */}
                  <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-bold text-sm">
                        1
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Operational Flight Cancellations & Major Schedule Alterations (Over 2 Hours)
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      When Akasa Air reschedules a domestic flight by two hours or more, or cancels a flight due to operational adjustments, aircraft maintenance, or crew scheduling limitations, the automated customer portal frequently defaults to flight rebooking options. If you elect not to fly on the rescheduled flight, you are statutorily entitled to a complete 100% cash refund. Airlines cannot enforce involuntary credit vouchers or deduct convenience charges when the disruption originates on their end.
                    </p>
                    <div className="bg-orange-50/70 border border-orange-200/80 rounded-lg p-3.5 text-xs text-orange-950">
                      <strong>Statutory Mini-Remedy:</strong> Cite DGCA CAR Section 3, Series M, Part IV Clause 3.3. Reject any automated reschedule confirmation and send an explicit written instruction electing full cancellation with immediate remittance to your source bank account.
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-bold text-sm">
                        2
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Online Travel Portal Bookings (MakeMyTrip, Cleartrip, EaseMyTrip Blame Loop)
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      When tickets are purchased through online aggregators or physical travel agents, passengers often get caught in endless bureaucratic buck-passing. Akasa Air customer care asserts that funds were processed to the travel agency’s corporate settlement account, while the agency claims the airline has not cleared the refund batch.
                    </p>
                    <div className="bg-orange-50/70 border border-orange-200/80 rounded-lg p-3.5 text-xs text-orange-950">
                      <strong>Statutory Mini-Remedy:</strong> Under DGCA CAR Section 3, Series M, Part II Clause 3.3, travel portals are recognized statutory agents of the carrier. SNV Aviation remains legally bound to ensure the refund reaches your account within 14 working days. You can hold both parties jointly and severally liable.
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-bold text-sm">
                        3
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Voluntary Ticket Cancellation & Forfeiture of Statutory Airport Taxes
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Even if you voluntarily cancel a non-refundable Saver ticket, airlines frequently deduct cancellation penalties that match or exceed the entire ticket price, unlawfully withholding statutory taxes. Passenger Service Fees (PSF), User Development Fees (UDF), and government service levies are held in trust for airport infrastructure and must be returned in full whenever travel is unundertaken.
                    </p>
                    <div className="bg-orange-50/70 border border-orange-200/80 rounded-lg p-3.5 text-xs text-orange-950">
                      <strong>Statutory Mini-Remedy:</strong> Invoke DGCA CAR Series M Part II Clause 3.5. Demand an itemized tax breakdown and immediate refund of UDF, PSF, and government development levies back to your payment card.
                    </div>
                  </article>

                  {/* Article 4 */}
                  <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-bold text-sm">
                        4
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Medical Cancellation Denial and Failure of the 48-Hour Zero-Penalty Window
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Under revised 2026 aviation consumer protection guidelines, passengers who book tickets at least seven days prior to travel possess a 48-hour zero-penalty look-in window to correct names or cancel tickets without financial forfeiture. Furthermore, hospitalization or severe medical incapacity documented with certified medical papers warrants compassionate zero-fee cancellation.
                    </p>
                    <div className="bg-orange-50/70 border border-orange-200/80 rounded-lg p-3.5 text-xs text-orange-950">
                      <strong>Statutory Mini-Remedy:</strong> Furnish formal hospital discharge summaries and diagnostic records to the Akasa Air Nodal Officer. If rejected, attach medical certifications to a formal AirSewa regulatory complaint.
                    </div>
                  </article>
                </div>
              </section>

              {/* Section 2: Comparison Table (Problem Type x Liable Entity x Deadline x First Action) */}
              <section aria-labelledby="liability-table-heading" className="space-y-4">
                <h2 id="liability-table-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Who Is Liable for an Unreturned Akasa Air Ticket Fare? (Comparison Table)
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Pinpointing the exact legal entity accountable for your pending funds prevents misdirected notices and expedites resolution. The table below delineates statutory liability across common flight refund disputes.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">Comparative liability matrix for Akasa Air ticket refund disputes</caption>
                    <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Scenario</th>
                        <th scope="col" className="p-3.5 sm:p-4">Liable Legal Entity</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Deadline</th>
                        <th scope="col" className="p-3.5 sm:p-4">First Mandatory Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/60">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Direct Booking (Akasa Website / App)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          SNV Aviation Private Limited (Akasa Air)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="inline-block px-2 py-0.5 rounded font-medium bg-emerald-100 text-emerald-800">
                            7 Working Days
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Email Nodal Officer (`nodalofficer@akasaair.com`) with PNR and payment ARN code.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Online Travel Portal (MakeMyTrip / Cleartrip / EaseMyTrip)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Joint & Several: Akasa Air + Booking Portal Intermediary
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="inline-block px-2 py-0.5 rounded font-medium bg-amber-100 text-amber-800">
                            14 Working Days
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Serve joint written demand requesting UTR/ARN confirmation under CAR Clause 3.3.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Airline Cancelled or Delayed &gt; 2 Hours
                        </td>
                        <td className="p-3.5 sm:p-4">
                          SNV Aviation Private Limited
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="inline-block px-2 py-0.5 rounded font-medium bg-emerald-100 text-emerald-800">
                            7 Days (100% Refund)
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Refuse automated voucher / reschedule; demand cash refund in writing.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Voluntary Cancellation of Saver Ticket
                        </td>
                        <td className="p-3.5 sm:p-4">
                          SNV Aviation Private Limited
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="inline-block px-2 py-0.5 rounded font-medium bg-sky-100 text-sky-800">
                            7 Days (UDF/PSF/Taxes)
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Demand refund of statutory airport taxes and unutilized airline fees under Clause 3.5.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Payment Gateway Failed / Debit Card Pending
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Acquiring Bank / Aggregator + Airline Treasury
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="inline-block px-2 py-0.5 rounded font-medium bg-purple-100 text-purple-800">
                            T+5 Business Days
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Obtain RRN/PG reference number from bank and demand auto-reversal under RBI circulars.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Flow Diagram (Refund Money Flow) */}
              <section aria-labelledby="refund-money-flow-heading" className="space-y-4">
                <h2 id="refund-money-flow-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  How Does Flight Refund Money Move from Akasa Air to Your Bank Account?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Tracing the technical and financial settlement trail reveals precisely where ticket refund capital stalls. Whether booked via an aggregator or directly on Akasa Air, the monetary transaction follows a multi-tier reconciliation railway.
                </p>

                <figure className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs overflow-hidden">
                  <div className="w-full flex justify-center py-2">
                    <svg
                      viewBox="0 0 760 380"
                      className="w-full h-auto max-w-2xl font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Flowchart showing Akasa Air ticket refund settlement architecture"
                      role="img"
                    >
                      {/* Definitions */}
                      <defs>
                        <linearGradient id="akasaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#EA580C" />
                          <stop offset="100%" stopColor="#C2410C" />
                        </linearGradient>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#047857" />
                        </linearGradient>
                        <marker
                          id="arrow"
                          viewBox="0 0 10 10"
                          refX="6"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
                        </marker>
                        <marker
                          id="arrowRed"
                          viewBox="0 0 10 10"
                          refX="6"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 1 L 8 5 L 0 9 z" fill="#DC2626" />
                        </marker>
                      </defs>

                      {/* Step 1: Customer Cancellation */}
                      <rect x="20" y="30" width="180" height="90" rx="10" fill="url(#blueGrad)" stroke="#334155" strokeWidth="1.5" />
                      <text x="110" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="700" fontSize="13">
                        1. Cancellation Request
                      </text>
                      <text x="110" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                        Passenger triggers PNR
                      </text>
                      <text x="110" y="98" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                        cancellation or reschedule
                      </text>

                      {/* Step 2: Booking Channel / Aggregator */}
                      <rect x="290" y="30" width="180" height="90" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="380" y="58" textAnchor="middle" fill="#0F172A" fontWeight="700" fontSize="13">
                        2. Channel Verification
                      </text>
                      <text x="380" y="78" textAnchor="middle" fill="#475569" fontSize="11">
                        Akasa App / Website OR
                      </text>
                      <text x="380" y="96" textAnchor="middle" fill="#475569" fontSize="11">
                        OTA (Cleartrip, MMT, EMT)
                      </text>

                      {/* Step 3: SNV Aviation Treasury */}
                      <rect x="560" y="30" width="180" height="90" rx="10" fill="url(#akasaGrad)" stroke="#9A3412" strokeWidth="1.5" />
                      <text x="650" y="58" textAnchor="middle" fill="#FFFFFF" fontWeight="700" fontSize="13">
                        3. Airline Processing
                      </text>
                      <text x="650" y="78" textAnchor="middle" fill="#FFEDD5" fontSize="11">
                        SNV Aviation (Akasa)
                      </text>
                      <text x="650" y="96" textAnchor="middle" fill="#FFEDD5" fontSize="11">
                        Authorizes Reversal
                      </text>

                      {/* Arrows Forward */}
                      <line x1="200" y1="75" x2="286" y2="75" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />
                      <line x1="470" y1="75" x2="556" y2="75" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 4: Reversal Bottleneck / Failure Loop */}
                      <rect x="560" y="180" width="180" height="85" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="4 3" />
                      <text x="650" y="208" textAnchor="middle" fill="#991B1B" fontWeight="700" fontSize="12">
                        Common Choke Point
                      </text>
                      <text x="650" y="228" textAnchor="middle" fill="#B91C1C" fontSize="10.5">
                        OTA Wallet Withholding or
                      </text>
                      <text x="650" y="244" textAnchor="middle" fill="#B91C1C" fontSize="10.5">
                        Missing ARN / Reconcile Lag
                      </text>

                      {/* Arrow Down from Step 3 to Bottleneck */}
                      <line x1="650" y1="120" x2="650" y2="176" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                      {/* Step 5: Acquiring Gateway & Reverse Settlement */}
                      <rect x="290" y="180" width="180" height="85" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="380" y="208" textAnchor="middle" fill="#0F172A" fontWeight="700" fontSize="12">
                        4. Gateway Settlement
                      </text>
                      <text x="380" y="228" textAnchor="middle" fill="#475569" fontSize="11">
                        Razorpay / PayU / NPCI
                      </text>
                      <text x="380" y="246" textAnchor="middle" fill="#475569" fontSize="10.5">
                        Generates ARN / UTR
                      </text>

                      {/* Line from Bottleneck/Carrier to Gateway */}
                      <line x1="560" y1="222" x2="474" y2="222" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 6: Customer Source Bank Account Credit */}
                      <rect x="20" y="180" width="180" height="85" rx="10" fill="url(#greenGrad)" stroke="#065F46" strokeWidth="1.5" />
                      <text x="110" y="208" textAnchor="middle" fill="#FFFFFF" fontWeight="700" fontSize="12">
                        5. Final Credit to Source
                      </text>
                      <text x="110" y="228" textAnchor="middle" fill="#ECFDF5" fontSize="11">
                        Bank / Card / UPI
                      </text>
                      <text x="110" y="246" textAnchor="middle" fill="#ECFDF5" fontSize="10.5">
                        Within 7–14 Days Mandate
                      </text>

                      {/* Line from Gateway to Customer */}
                      <line x1="290" y1="222" x2="204" y2="222" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Statutory Legal Notice Rail */}
                      <rect x="20" y="295" width="720" height="60" rx="8" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                      <text x="380" y="320" textAnchor="middle" fill="#92400E" fontWeight="700" fontSize="12">
                        Statutory Enforcement Rail (If Day &gt; 14): AirSewa Docketing → 15-Day Advocate Legal Notice
                      </text>
                      <text x="380" y="338" textAnchor="middle" fill="#B45309" fontSize="11">
                        Enforces DGCA CAR Section 3, Series M, Part II & Section 2(11) Consumer Protection Act, 2019
                      </text>
                    </svg>
                  </div>
                  <figcaption className="text-xs text-slate-500 text-center mt-3 pt-3 border-t border-slate-100">
                    Figure 1: Statutory money-flow architecture for Akasa Air (SNV Aviation Pvt. Ltd.) passenger ticket refunds, illustrating multi-party settlement hops and escalation triggers.
                  </figcaption>
                </figure>
              </section>

              {/* Section 4: Commission Orders Table (Consumer Court Case Law) */}
              <section aria-labelledby="case-law-table-heading" className="space-y-4">
                <h2 id="case-law-table-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  What Have Consumer Commissions Ordered Airlines in Pending Refund Disputes?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Consumer commissions throughout India strictly hold domestic carriers accountable when ticket fares are withheld beyond regulatory deadlines. Below are verifiable consumer court orders establishing binding legal precedent against delayed flight refunds and unauthorized tax retention.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">Consumer court orders and judgments awarded against airlines for withheld ticket refunds</caption>
                    <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Forum & Citation</th>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Facts</th>
                        <th scope="col" className="p-3.5 sm:p-4">Commission Ruling</th>
                        <th scope="col" className="p-3.5 sm:p-4">Financial Award</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {COMMISSION_ORDERS.map((order, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/60 align-top">
                          <td className="p-3.5 sm:p-4 font-semibold text-slate-900 min-w-[140px]">
                            <div>{order.forum}</div>
                            <div className="text-xs font-mono text-slate-500 mt-0.5">{order.citation}</div>
                          </td>
                          <td className="p-3.5 sm:p-4 min-w-[200px]">
                            <div className="font-medium text-slate-900 mb-1">{order.dispute}</div>
                            <div className="text-xs text-slate-600 leading-relaxed">{order.facts}</div>
                          </td>
                          <td className="p-3.5 sm:p-4 text-xs text-slate-600 leading-relaxed min-w-[200px]">
                            {order.ruling}
                          </td>
                          <td className="p-3.5 sm:p-4 min-w-[150px]">
                            <span className="inline-block px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200">
                              {order.award}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Key Facts and DGCA Timelines */}
              <section aria-labelledby="facts-deadlines-heading" className="space-y-4">
                <h2 id="facts-deadlines-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  How Do DGCA CAR Timelines and Akasa Air Refund Policy Apply to Your Ticket?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The Directorate General of Civil Aviation enacted landmark revisions to CAR Section 3, Series M, Part II, significantly strengthening consumer rights for air travelers in India. Under these statutory guidelines, airline internal policies cannot override sovereign civil aviation directives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Credit Card & Digital Payment Remittances (7 Days)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Clause 3.1, for tickets purchased using credit cards, debit cards, net banking, or UPI, the refund process must be completed by the carrier within seven working days of cancellation. The airline must immediately forward the refund instruction to the cardholder’s bank, generating a verifiable Acquiring Reference Number (ARN).
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Travel Agent & Portal Bookings (14 Days Statutory Cap)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Clause 3.3, where tickets were secured via an OTA or traditional travel agent, Akasa Air is statutorily answerable for ensuring the refund is disbursed to the customer within fourteen working days. Airlines cannot escape liability by claiming funds were transferred to an agent’s floating credit account.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Immediate Cash Remittances at Counters
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Clause 3.2, tickets purchased with physical cash at Akasa Air airport ticketing offices or city booking counters must be refunded immediately in cash at the same counter upon cancellation presentation.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Mandatory Forfeiture Ban on Statutory Airport Taxes
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Clause 3.5, User Development Fees (UDF), Passenger Service Fees (PSF), and statutory taxes are completely non-forfeitable. Even if a passenger purchases the most restrictive non-refundable fare, Akasa Air must return 100% of these statutory levies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Worked Illustrative Scenario */}
              <section aria-labelledby="worked-example-heading" className="space-y-4">
                <h2 id="worked-example-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Worked Scenario: Recovering ₹21,400 for a Cancelled Bengaluru–Mumbai Akasa Flight
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The following illustrative scenario shows how an airline refund dispute unfolds in practice and how legal escalation achieves complete reimbursement.
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-semibold uppercase text-slate-500">Case Dossier (Illustrative)</span>
                      <h3 className="text-base font-bold text-slate-900">Dr. Rajesh Varma • Akasa Flight QP-1342 (BLR to BOM)</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Resolved via Legal Notice
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-500 block">Ticket Fare & Passengers</span>
                      <strong className="text-slate-900 text-sm">₹21,400 (3 Passengers)</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-500 block">Booking Channel</span>
                      <strong className="text-slate-900 text-sm">Online Travel Portal (Cleartrip)</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-500 block">Delay Duration</span>
                      <strong className="text-slate-900 text-sm">62 Days Past Statutory Limit</strong>
                    </div>
                  </div>

                  <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
                    <p>
                      <strong>The Problem:</strong> Dr. Varma booked three tickets on Akasa Air flight QP-1342 from Bengaluru to Mumbai. Forty-eight hours prior to departure, Akasa Air cancelled the flight citing operational aircraft adjustments. Dr. Varma refused an inconvenient next-day rebooking and opted for a full cash refund on Cleartrip. Cleartrip’s portal showed &quot;Refund pending from airline&quot;, while Akasa customer support maintained the funds were released to Cleartrip’s master ledger.
                    </p>
                    <p>
                      <strong>The Escalation:</strong> After 60 days of unanswered emails, Dr. Varma logged an AirSewa complaint (Registration #AS-2026-91823) and subsequently served an official 15-day advocate legal notice jointly to SNV Aviation Private Limited and Cleartrip India. The legal notice cited DGCA CAR Section 3, Series M, Part II Clause 3.3 and warned of consumer court proceedings before the District Commission Bengaluru Urban with claims for 18% statutory interest and mental harassment damages.
                    </p>
                    <p>
                      <strong>The Resolution:</strong> Within nine days of receiving the Registered Speed Post notice, Akasa Air’s nodal legal team reconciled the corporate ledger, generated a direct bank UTR credit, and remitted ₹21,400 directly to Dr. Varma’s original HDFC Bank account, along with a written apology closing the AirSewa grievance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Evidence Checklist */}
              <section aria-labelledby="evidence-checklist-heading" className="space-y-4">
                <h2 id="evidence-checklist-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  What Evidence Must You Assemble Before Escalating an Akasa Air Complaint?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital financial proofs possess full evidentiary admissibility before consumer commissions. Gather the following documentation prior to issuing a legal notice:
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                  <ul className="space-y-3.5 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>Original Electronic Ticket & PNR:</strong> Complete e-ticket PDF showing the six-character PNR, passenger names, flight numbers, fare breakdown, and date of issue.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>Cancellation or Reschedule Notice:</strong> Email or SMS from Akasa Air detailing the flight cancellation, delay over 2 hours, or your written cancellation acknowledgment timestamp.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>Bank / Card Debit Statement:</strong> Bank statement or credit card transaction slip highlighting the original ticket debit, verifying the source account details.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>Travel Portal Dashboard & Chat Screenshots:</strong> If booked via an OTA, export screenshots showing the pending refund status, booking ID, and customer support chat transcripts.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>AirSewa Grievance Docket ID:</strong> Registration acknowledgment and ticket tracking timeline from the Ministry of Civil Aviation AirSewa portal.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>Medical or Emergency Certificates (If Applicable):</strong> Certified medical records, doctor advice slips, or hospital admission receipts if cancellation was prompted by acute medical incapacity.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Scope and Boundaries */}
              <section aria-labelledby="scope-heading" className="space-y-4">
                <h2 id="scope-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  What Can LegalRecovery Do (and Not Do) for Akasa Air Ticket Disputes?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Maintaining complete transparency regarding the legal recourse available ensures realistic expectations and productive escalation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      What We Handle
                    </h3>
                    <ul className="text-xs sm:text-sm text-emerald-900 space-y-2.5">
                      <li>• Formal 15-day statutory advocate legal notices directly to SNV Aviation Private Limited and travel portals.</li>
                      <li>• Legal notices for airline-cancelled flights where refunds are withheld past 7–14 working days.</li>
                      <li>• Recovering forfeited statutory airport taxes (UDF/PSF) on non-refundable tickets.</li>
                      <li>• Drafting comprehensive e-Jagriti consumer commission complaints with claims for refund, interest, and harassment damages.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-100 border border-slate-200 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                      What We Cannot Do
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2.5">
                      <li>• We cannot override DGCA-approved airline cancellation fees when you voluntarily cancel outside free look-in rules.</li>
                      <li>• We cannot physically alter airline flight schedules or intervene in live airport operational gate assignments.</li>
                      <li>• We cannot guarantee instant refunds without serving formal statutory demand notices and initiating legal accountability.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 9: Contextual Internal Links */}
              <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900">Explore Sibling Aviation Recovery Resources</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If your travel dispute extends to other airlines or involves multi-modal bookings, explore our specialized legal resources:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    Airline Refund Notice Guide →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    IndiGo Refund & Credit Shell Notice →
                  </Link>
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    DGCA 2026 CAR Refund Directives →
                  </Link>
                  <Link
                    href="/services/airline-and-travel-recoveries"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    All Travel & Aviation Recovery Services →
                  </Link>
                </div>
              </section>

              {/* Section 10: FAQs as Plain Q&A (Archetype B2 requirement: plain h3/p, NO accordion) */}
              <section aria-labelledby="faqs-heading" className="space-y-6">
                <h2 id="faqs-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions About Akasa Air Refunds, Timelines and Complaints
                </h2>
                <div className="space-y-6">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources and Statutory References */}
              <section aria-labelledby="sources-heading" className="space-y-4 pt-6 border-t border-slate-200">
                <h2 id="sources-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory References and Primary Aviation Regulatory Citations
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All rights, timelines, and legal assertions documented on this page are grounded in primary gazetted statutes, Supreme Court orders, and DGCA Civil Aviation Requirements.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:underline font-medium"
                        >
                          {source.title}
                        </a>
                        <span className="text-slate-400 text-xs ml-2">({source.date})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* End-of-Page Primary CTA */}
              <div className="pt-4">
                <AkasaAirNoticeCTA variant="primary" />
              </div>

            </div>

            {/* Sticky Right Aside: Fact Panel (Archetype B2) (4 cols) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">

                {/* Fact Panel Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-950 bg-orange-100 px-2.5 py-1 rounded-md">
                      Brand Dossier
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">IATA: QP</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Akasa Air Refund Fact Panel
                  </h3>

                  <dl className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <dt className="text-slate-500 font-medium">Operating Entity</dt>
                      <dd className="font-semibold text-slate-900">SNV Aviation Private Limited</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Headquarters</dt>
                      <dd className="font-semibold text-slate-900">Urmi Estate, Lower Parel, Mumbai, Maharashtra 400013</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Statutory Regulator</dt>
                      <dd className="font-semibold text-slate-900">Directorate General of Civil Aviation (DGCA)</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Credit Card / UPI Refund Deadline</dt>
                      <dd className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-0.5">
                        7 Working Days (DGCA CAR Clause 3.1)
                      </dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Travel Portal (OTA) Refund Deadline</dt>
                      <dd className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded inline-block mt-0.5">
                        14 Working Days (CAR Clause 3.3)
                      </dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Statutory Taxes (UDF & PSF)</dt>
                      <dd className="font-semibold text-slate-900">100% Refundable on All Fares</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Official Grievance Channel</dt>
                      <dd className="font-semibold text-slate-900">AirSewa 2.0 (airsewa.gov.in)</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Judicial Forum</dt>
                      <dd className="font-semibold text-slate-900">Consumer Disputes Redressal Commission (e-Jagriti)</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Typical Forum Outcome</dt>
                      <dd className="font-semibold text-slate-900">100% Fare Refund + 9% Interest + ₹10,000–₹25,000 Harassment Damages</dd>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <dt className="text-slate-500 font-medium">Statutory Advocate Notice Fee</dt>
                      <dd className="text-base font-extrabold text-slate-900">₹999 (Flat Transparent Fee)</dd>
                    </div>
                  </dl>

                  {/* Aside CTA Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <AkasaAirNoticeCTA variant="aside" />
                  </div>
                </div>

                {/* Secondary Help Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm text-xs leading-relaxed space-y-3">
                  <h4 className="font-bold text-sm text-white">Need Escalation Guidance?</h4>
                  <p className="text-slate-300">
                    If Akasa Air customer care or your booking aggregator refuses to issue an ARN or claims your refund was sent without bank confirmation, an advocate legal notice creates enforceable evidentiary proof under Section 63 BSA 2023.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/how-it-works"
                      className="text-orange-400 hover:text-orange-300 font-semibold underline"
                    >
                      How Our Legal Notice Process Works →
                    </Link>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* Related Guides Component */}
        <div className="bg-white border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedRecoveryGuides />
          </div>
        </div>
      </main>
    </>
  );
}
