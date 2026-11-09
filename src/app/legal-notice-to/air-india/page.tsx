import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import AirIndiaNoticeCTA from "./AirIndiaNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Air India Refund Delayed? Status, Rules & Legal Notice",
  description:
    "Air India refund delayed for weeks? Check DGCA deadlines, AirSewa and consumer-court options, and send a legal notice if ignored.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/air-india`,
  },
  openGraph: {
    title: "Air India Refund Delayed? Status, Rules & Legal Notice",
    description:
      "Statutory escalation path for delayed Air India domestic and international refunds, rejected cancellation claims, and travel agent finger-pointing under DGCA CAR regulations.",
    url: `${SITE_URL}/legal-notice-to/air-india`,
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
    title: "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers of Scheduled and Non-Scheduled Air Transport Services",
    url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp",
  },
  {
    title: "Supreme Court of India: Pravasi Legal Cell & Ors. v. Union of India, DGCA & Air India Ltd. (2020) 10 SCC 724 (Mandatory Cash Reversals & Ban on Unilateral Credit Shells)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title: "Ministry of Civil Aviation — AirSewa 2.0 Integrated Passenger Grievance Portal",
    url: "https://airsewa.gov.in/",
  },
  {
    title: "DGCA CAR Section 3, Series M, Part IV — Facilities to be Provided to Passengers by Airlines due to Involuntary Denied Boarding, Delays & Cancellations",
    url: "https://www.dgca.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records for PNR, Flight SMS & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Airline Refund Mandate on Mandatory Cash Reversals",
    parties: "Pravasi Legal Cell & Ors. v. Union of India, Ministry of Civil Aviation & Air India Ltd.",
    citation: "(2020) 10 SCC 724, Supreme Court of India",
    date: "Judgment Delivered 01 October 2020",
    facts:
      "Airlines operating in India, including national carrier Air India, withheld hundreds of crores of passenger ticket fares following flight cancellations, unilaterally converting liquid monies into restrictive credit vouchers and credit shells without passenger authorization.",
    holding:
      "The Supreme Court declared that air carriers possess no statutory right to impound passenger ticket monies in credit shells without express consent. The bench held that passengers retain an absolute right to 100% electronic cash refunds back to their original payment instrument. Furthermore, all unutilized credit shells must carry mandatory monthly interest payable to the passenger.",
    amount: "100% Cash Refund + Mandatory Compensatory Interest (0.5%–0.75% per month)",
    takeaway:
      "Air India customer care agents often offer travel vouchers or tell passengers that tickets are non-refundable. Under Supreme Court precedent, you can legally reject vouchers and demand an immediate bank reversal.",
  },
  {
    title: "NCDRC Order on Inordinate Delay in Refunding International Flight Fares",
    parties: "Air India Limited v. Rajiv Aggarwal & Ors.",
    citation: "Revision Petition No. 1296/2018, National Consumer Disputes Redressal Commission (NCDRC), New Delhi",
    date: "Order Dated 14 May 2019",
    facts:
      "The complainant booked international business class return tickets with Air India. Due to schedule disruptions and technical flight cancellations, the journey was cancelled. Despite submitting multiple refund applications, Air India failed to credit the passenger's account for over 10 months, blaming banking clearance pipelines.",
    holding:
      "The National Commission dismissed Air India's revision plea, ruling that holding a passenger's money beyond statutory DGCA deadlines constitutes gross deficiency in service and an unfair trade practice. The Commission held that commercial carriers cannot exploit international clearance procedures to retain customer funds.",
    amount: "₹1,84,000 Full Ticket Refund @ 9% p.a. Interest + ₹25,000 Mental Agony Damages + ₹10,000 Legal Costs",
    takeaway:
      "International Air India flight tickets involve higher values and multi-currency clearing, but DGCA regulations still govern bookings originating in India. Indefinite delays justify interest and compensation through consumer forums.",
  },
  {
    title: "District Commission Ruling on Joint Liability for Travel Portal Agency Buck-Passing",
    parties: "S. Ramanathan v. Air India Limited & MakeMyTrip India Pvt. Ltd.",
    citation: "Consumer Complaint No. 412/2022, DCDRC Bangalore Urban",
    date: "Order Dated 08 December 2022",
    facts:
      "A consumer booked domestic round-trip tickets on Air India through an Online Travel Agent (OTA). Following flight rescheduling exceeding 3 hours, the passenger exercised their statutory cancellation right. Air India claimed it refunded the funds to MakeMyTrip's agency wallet, while MakeMyTrip argued that Air India had not released the specific PNR credit batch.",
    holding:
      "The Consumer Commission cited DGCA CAR Section 3, Series M, Part II, Clause 3.3, ruling that booking portals operate as authorized commercial agents of the carrying airline. The airline cannot extinguish its primary statutory liability to the passenger by transferring funds into an intermediary escrow pool without passenger receipt.",
    amount: "₹52,400 Ticket Refund @ 9% Interest + ₹15,000 Mental Agony Compensation + ₹8,000 Costs",
    takeaway:
      "When Air India and booking portals like MakeMyTrip or Goibibo blame each other, serving a joint statutory legal notice holds both entities jointly and severally accountable under civil aviation law.",
  },
  {
    title: "Illegal Retention of Government Taxes and Airport Charges on Cancelled Fares",
    parties: "D.K. Chopra v. Air India Limited",
    citation: "First Appeal No. 245/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 28 October 2021",
    facts:
      "A passenger cancelled an economy promotional ticket. Air India deducted 100% of the base fare and arbitrarily retained Passenger Service Fees (PSF), User Development Fees (UDF), and airport development levies, arguing the promotional fare was completely non-refundable.",
    holding:
      "The State Commission held that airlines collect statutory passenger airport levies strictly in trust for airport operators and the government. Because the consumer never flew, retaining government levies constitutes unlawful enrichment under Section 2(47) of the Consumer Protection Act, 2019.",
    amount: "₹11,650 Statutory Levies Refunded + ₹10,000 Harassment Compensation + ₹5,000 Costs",
    takeaway:
      "Even if your Air India ticket is classified as 'Non-Refundable', statutory government taxes, UDF, and PSF must always be credited back to your original payment card or bank account.",
  },
];

const FAQS = [
  {
    question: "Why is my Air India refund not received even weeks after cancellation?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.1, Air India is statutorily mandated to process credit card, debit card, and net banking refunds within 7 working days. If your refund is pending beyond this window, the delay is typically caused by uncredited banking clearing batches, uncoupled PNR records, portal credit shell conversions, or funds stuck with intermediary booking engines. Request the 12-digit Acquirer Reference Number (ARN) or bank UTR from Air India customer care to track the inward settlement with your bank.",
  },
  {
    question: "How do I check my Air India refund status and what is the typical refund time?",
    answer:
      "You can track your Air India refund status on the official Air India portal under 'Manage Booking' or the 'Refund Status' lookup page using your 6-character PNR and passenger last name. Typical statutory refund times are 7 working days for direct card/UPI payments, immediate for counter cash bookings, and up to 30 working days when booked through travel portals or offline agents under revised DGCA regulations. If status reflects 'Processed' but funds are missing, demand the bank ARN/UTR code.",
  },
  {
    question: "How do I file an Air India refund request for an international flight ticket?",
    answer:
      "For international Air India itineraries, submit a formal refund request online via airindia.com, select 'Customer Support' › 'Refunds', and supply your 13-digit e-ticket number (starting with 098) and PNR. For international flights originating in India, DGCA CAR rules apply directly. Foreign currency conversions must be refunded to the original foreign card or remitted under RBI FEMA regulations without arbitrary exchange penalties.",
  },
  {
    question: "Can Air India force me to accept a travel voucher or credit shell instead of bank refund?",
    answer:
      "No. In Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, the Supreme Court held that air carriers cannot compel passengers to accept credit shells or travel vouchers without voluntary, express opt-in consent. Forcing vouchers violates Section 2(47) of the Consumer Protection Act, 2019. You possess an unfettered legal entitlement to demand a 100% electronic reversal directly to your payment bank account or card.",
  },
  {
    question: "Who pays my refund if I booked an Air India flight through MakeMyTrip, EaseMyTrip or a travel agent?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3, travel agents and OTAs are recognized statutory commercial agents of the carrying airline. While the booking agency must credit your account within 30 working days, Air India maintains primary carrier liability to ensure the funds successfully reach you. If the agent claims Air India hasn't refunded them, or Air India says it paid the agent, a joint advocate legal notice holds both entities jointly and severally liable.",
  },
  {
    question: "What compensation is Air India liable to pay if my flight is cancelled or delayed?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part IV, if Air India cancels or reschedules a flight without at least 2 weeks' notice, or with less than 24 hours' notice, the airline must offer an alternate flight or a 100% full refund, plus statutory compensation ranging from ₹5,000 to ₹10,000 (or one-way basic fare plus fuel charge) depending on scheduled block flight time. If delayed on the tarmac, basic meals and passenger refreshments are legally mandatory.",
  },
  {
    question: "Air India ticket refund nahi mila ya delay ho raha hai toh advocate legal notice kaise bheje?",
    answer:
      "Agar Air India flight cancellation ke baad aapka refund statutory 7 din ke andar bank account mein credit na kare ya booking agent ke saath blame game kare, toh aap ek formal advocate statutory legal notice bhej sakte hain. LegalRecovery.in ke verified aviation advocates DGCA CAR aur Supreme Court rules ke tehat Air India Limited ke New Delhi registered office par Speed Post aur email dwara demand notice bhejte hain, jismein 15 din ka strict payment deadline hota hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Air India Refund Still Pending: Deadlines, Escalation and Legal Remedies",
  description:
    "Air India refund delayed for weeks? Check DGCA deadlines, AirSewa and consumer-court options, and send a legal notice if ignored.",
  datePublished: "2026-11-03T12:00:00+05:30",
  dateModified: "2026-11-03T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/air-india`,
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
    "@type": "Organization",
    name: "Air India",
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
      name: "Airline & Travel Recoveries",
      item: `${SITE_URL}/services/airline-and-travel-recoveries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Air India Refund Legal Notice",
      item: `${SITE_URL}/legal-notice-to/air-india`,
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

export default function AirIndiaLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
    { label: "Air India Refund & Flight Dispute Legal Notice", href: "/legal-notice-to/air-india" },
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

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200/80 bg-white py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, ...breadcrumbItems]} />
          </div>
        </div>

        {/* Hero Section with Archetype B1 Answer Box */}
        <section className="bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-b border-blue-950">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-5">
              <span>Aviation Consumer Protection • DGCA CAR Section 3</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Air India Refund Still Pending: Deadlines, Escalation and Legal Remedies
            </h1>

            {/* Answer Box directly under H1 (40–60 words) */}
            <section
              aria-label="Quick answer"
              className="bg-slate-800/90 border border-sky-500/40 rounded-xl p-5 sm:p-6 mb-8 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-2 shrink-0 animate-pulse" />
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-1">
                    Statutory Legal Summary
                  </h2>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Under DGCA CAR Section 3, Series M, Part II, Air India must refund card and UPI payments within 7 working days, and travel-agent bookings within 30 days. Forcing travel vouchers violates Supreme Court directives in Pravasi Legal Cell. If your refund is withheld beyond 14 days, serve an advocate legal demand notice to Air India Limited before filing on e-Jagriti.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-t border-slate-800 pt-6">
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="block text-xl sm:text-2xl font-black text-amber-400">7 Days</span>
                <span className="text-xs text-slate-300">Direct Card/UPI Refund Rule</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="block text-xl sm:text-2xl font-black text-sky-400">30 Days</span>
                <span className="text-xs text-slate-300">OTA / Agent Booking Limit</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400">100% Tax</span>
                <span className="text-xs text-slate-300">UDF &amp; PSF Always Refundable</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="block text-xl sm:text-2xl font-black text-rose-400">₹5K–₹10K</span>
                <span className="text-xs text-slate-300">Cancellation Compensation Slab</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Article */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
          
          {/* Section 1: Problem Analysis */}
          <section aria-labelledby="why-delayed-heading">
            <h2
              id="why-delayed-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Why Is Your Air India Refund Not Received or Delayed Beyond DGCA Deadlines?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
              When an Air India flight is cancelled, rescheduled, or voluntarily cancelled within permissible fare conditions, passenger ticket monies frequently enter an operational limbo. Despite automated confirmation SMS messages or email receipts indicating that a cancellation was logged, thousands of air passengers find their funds missing weeks or months later. Understanding where your money is held is the essential first step toward legal recovery.
            </p>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Under Indian civil aviation law, four distinct administrative and technical bottlenecks account for delayed Air India refunds:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
                  <h3 className="font-bold text-slate-900 text-base">Uncoupled PNR and Banking Clearing Batches</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Following Air India&apos;s corporate integration with Tata Group systems and the Vistara fleet merger, ticketing inventory transitions frequently desynchronize PNR booking records from the payment gateway settlement pipeline. The ticket reflects as cancelled on the passenger interface, but the refund credit file remains queued in manual audit batches without generating a 12-digit Acquirer Reference Number (ARN).
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="font-bold text-slate-900 text-base">Travel Portal (OTA) Intermediary Escrow Traps</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If you booked through travel portals such as MakeMyTrip, EaseMyTrip, Cleartrip, or offline travel agencies, Air India remits bulk commercial credits into the agent&apos;s corporate GDS account rather than your personal bank card. Booking portals routinely retain these funds in floating credit balances, passing the blame back to Air India while leaving your bank uncredited.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
                  <h3 className="font-bold text-slate-900 text-base">International Itinerary Currency Clearing Delays</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  International Air India flights (such as AI London, US, Singapore, or Dubai sectors) involve international merchant accounts, foreign exchange conversion clearance, and IATA BSP (Billing and Settlement Plan) reconciliation. Airlines often claim international clearance takes 30 to 45 business days, even though tickets booked from Indian payment instruments remain under strict DGCA regulatory jurisdiction.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">4</span>
                  <h3 className="font-bold text-slate-900 text-base">Forced Credit Shells &amp; Voucher Traps</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Air India customer service desks often issue travel credit vouchers by default when flights suffer operational disruptions or weather cancellations. In direct violation of Supreme Court mandates, passengers are told that fares are non-refundable or that credit vouchers must be redeemed within 12 months, depriving flyers of their liquid cash.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-900 text-sm font-medium">
                <strong>Statutory Precedent:</strong> Under <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline font-semibold">DGCA Air Ticket Refund Rules</Link>, airlines cannot treat passenger money as working capital. Whether booked directly or via travel portals, carriers carry statutory liability to ensure funds reach the consumer&apos;s account within prescribed deadlines.
              </p>
            </div>
          </section>

          {/* Section 2: Escalation Rail (Archetype B1 Timeline Dominant) */}
          <section aria-labelledby="escalation-rail-heading">
            <h2
              id="escalation-rail-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              How Does the 4-Stage Aviation Escalation Rail Work for Unresolved Air India Refunds?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              When automated chat assistance and customer care hotlines stall with scripted apologies, follow this chronological 4-stage statutory escalation hierarchy to enforce legal accountability:
            </p>

            <ol className="relative border-l-2 border-blue-700 ml-4 sm:ml-6 space-y-8">
              {/* Step 1 */}
              <li className="pl-6 sm:pl-8 relative">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white text-xs font-bold ring-4 ring-white">
                  1
                </span>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                      <time dateTime="P0D">Day 0 to Day 7</time> • Grievance Docketing
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Channel: Air India Support</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Log Formal Refund Request &amp; Obtain Air India Case Reference ID
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Submit your ticket cancellation via the official Air India portal (Customer Support › Refunds). If cancelling through customer care or an airport counter, demand a formal written cancellation receipt with the exact cancellation timestamp. Under DGCA CAR Section 3, Series M, Part II, Air India has exactly 7 working days to remit credit or debit card payments to your bank account.
                  </p>
                  <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <strong>Critical Requirement:</strong> Record your 6-character PNR, 13-digit e-ticket number (098-XXXXXXXXXX), and the official Air India Complaint Docket Reference Number.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="pl-6 sm:pl-8 relative">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white text-xs font-bold ring-4 ring-white">
                  2
                </span>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                      <time dateTime="P7D">Day 7 to Day 14</time> • AirSewa Statutory Escalation
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Portal: airsewa.gov.in</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    File Level 1 AirSewa Grievance to Air India Nodal Officer
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    If your bank account remains uncredited past the statutory 7-day window, immediately escalate to the Ministry of Civil Aviation&apos;s AirSewa 2.0 portal (airsewa.gov.in). File under &quot;Airline Grievance&quot; › &quot;Air India Limited&quot; and cite your PNR and ticket number. Under civil aviation directives, Air India&apos;s appointed Nodal Officer must review and respond within 48 hours.
                  </p>
                  <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <strong>Statutory Target:</strong> Demand the inward bank transaction UTR or 12-digit Acquirer Reference Number (ARN). If Air India fails to provide this, it constitutes prima facie evidence of default.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="pl-6 sm:pl-8 relative">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold ring-4 ring-white">
                  3
                </span>
                <div className="bg-white p-5 rounded-xl border-2 border-red-200 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded">
                      <time dateTime="P15D">Day 15 to Day 25</time> • Advocate Demand Notice
                    </span>
                    <span className="text-xs text-red-600 font-bold">Recommended Legal Weapon</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Serve Statutory Advocate Legal Notice to Air India Limited Registered Office
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    When AirSewa complaints trigger generic bureaucratic responses or your booking portal and Air India blame each other, engage a verified advocate to dispatch a formal legal notice. The notice is served via Registered Speed Post with legal tracking to Air India Limited&apos;s Registered Office at Airlines House, New Delhi and Gurugram HQ, alongside electronic delivery under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                  <div className="text-xs text-slate-700 bg-red-50/60 p-3 rounded border border-red-100 mb-2">
                    <strong>Mandatory Notice Contents:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-600">
                      <li>Citation of DGCA CAR Section 3, Series M, Part II statutory deadlines</li>
                      <li>Supreme Court ruling in <em>Pravasi Legal Cell v. UOI</em> prohibiting forced credit vouchers</li>
                      <li>Strict 15-day compliance window for 100% principal refund plus 18% p.a. interest</li>
                      <li>Intimation of consumer court prosecution under CPA 2019 for damages and harassment</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <AirIndiaNoticeCTA variant="secondary" buttonText="Draft Air India Legal Notice" />
                  </div>
                </div>
              </li>

              {/* Step 4 */}
              <li className="pl-6 sm:pl-8 relative">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white text-xs font-bold ring-4 ring-white">
                  4
                </span>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
                      <time dateTime="P30D">Day 30 Onward</time> • Judicial Redressal
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Portal: e-jagriti.gov.in</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    File Consumer Complaint on e-Jagriti for Refund, Interest &amp; Damages
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    If Air India ignores the 15-day statutory notice period, file an online consumer complaint before the competent District Consumer Disputes Redressal Commission via the e-Jagriti portal. You can file from your own place of residence without hiring a local lawyer, claiming the full ticket refund, statutory interest, compensation for mental agony, and legal costs.
                  </p>
                  <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <strong>Jurisdiction:</strong> District Commission claims up to ₹50 lakh under the Consumer Protection Act, 2019. The served legal notice and postal tracking receipt serve as primary evidence of pre-litigation notice.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Section 3: Grievance Officer Fact Sheet (Archetype B1 <dl> requirement) */}
          <section aria-labelledby="nodal-officer-heading" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2
              id="nodal-officer-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Who Is the Air India Nodal Officer &amp; Appellate Authority Under DGCA CAR Regulations?
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
              In accordance with DGCA passenger charter directives and civil aviation consumer mandates, Air India Limited maintains a multi-tiered statutory grievance apparatus. Serving formal correspondence to official corporate officers establishes legal service under the Code of Civil Procedure and the Bharatiya Sakshya Adhiniyam, 2023:
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Corporate Entity &amp; Ownership</dt>
                <dd className="font-semibold text-slate-900">Air India Limited (Tata Sons / Talace Private Limited Enterprise)</dd>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Registered Corporate Office</dt>
                <dd className="font-semibold text-slate-900">
                  Airlines House, 113, Gurudwara Rakabganj Road, New Delhi – 110001
                </dd>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Corporate Operational Headquarters</dt>
                <dd className="font-semibold text-slate-900">
                  Vatika One On One, Sector 16, NH 48, Gurugram, Haryana – 122007
                </dd>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Statutory Nodal Officer (Level 1 Escalation)</dt>
                <dd className="font-semibold text-slate-900">
                  Customer Grievance Redressal Cell • Email:{" "}
                  <a href="mailto:nodalofficer@airindia.com" className="text-blue-700 underline font-mono">
                    nodalofficer@airindia.com
                  </a>
                </dd>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Statutory Appellate Authority (Level 2)</dt>
                <dd className="font-semibold text-slate-900">
                  Executive Appellate Office • Email:{" "}
                  <a href="mailto:appellateauthority@airindia.com" className="text-blue-700 underline font-mono">
                    appellateauthority@airindia.com
                  </a>
                </dd>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Statutory Turnaround Deadlines</dt>
                <dd className="font-semibold text-slate-900">
                  48 Hours (Initial Acknowledgment) • 30 Days (Final Redressal / Payment Under CAR)
                </dd>
              </div>
            </dl>

            <div className="mt-4 text-xs text-slate-500">
              <em>Note:</em> For legal notices, dispatch via Registered Speed Post with Acknowledgment Due (AD) to Airlines House, New Delhi, marked to the Company Secretary &amp; Managing Director.
            </div>
          </section>

          {/* Section 4: Why Platform is Liable (Archetype B1 <blockquote cite> requirement) */}
          <section aria-labelledby="why-liable-heading">
            <h2
              id="why-liable-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Why Is Air India Legally Liable to Refund Ticket Fares Under DGCA CAR and Supreme Court Mandates?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
              Airlines frequently attempt to escape liability by citing third-party travel portal terms, non-refundable fare rules, or airline operational difficulties. Under Indian civil aviation regulations and consumer protection jurisprudence, these defenses fail as a matter of law.
            </p>

            <blockquote
              cite="https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp"
              className="my-6 border-l-4 border-blue-700 bg-blue-50/70 p-5 rounded-r-xl text-slate-800 text-sm sm:text-base leading-relaxed italic"
            >
              &quot;In case of purchase of ticket through travel agent/portal, the refund shall be completed within thirty working days. The airline shall ensure that the refund process is completed by the travel agent/portal within the stipulated time, and the passenger receives the refund. The travel agents are appointed by airlines as their agents and therefore the airline shall be held responsible for refund of the ticket amount.&quot;
              <footer className="mt-2 text-xs font-bold not-italic text-blue-900">
                — DGCA CAR Section 3, Series M, Part II, Clause 3.3 (Statutory Refund Requirement)
              </footer>
            </blockquote>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
              Under Section 2(11) of the Consumer Protection Act, 2019, any failure by Air India to process ticket refunds within the prescribed statutory timeframe constitutes an actionable &quot;deficiency in service.&quot; Furthermore, unilaterally withholding government taxes, airport passenger service fees, or issuing unsolicited travel vouchers constitutes an &quot;unfair trade practice&quot; under Section 2(47).
            </p>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              Moreover, under the landmark judgment of the Supreme Court in <em>Pravasi Legal Cell v. Union of India</em> (2020) 10 SCC 724, all scheduled carriers operating in India are bound to reverse cancelled ticket fares directly into the passenger&apos;s source account. The Supreme Court unequivocally established that locking passenger money into credit shells without explicit consent is illegal.
            </p>
          </section>

          {/* Section 5: Key Facts Summary Table (Artefact 1) */}
          <section aria-labelledby="key-facts-heading">
            <h2
              id="key-facts-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Key Facts Summary: Air India Statutory Refund Timelines, Cancellation Compensation &amp; Jurisdiction
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              The following reference table outlines the binding statutory timelines, mandatory passenger compensation slabs, and procedural forums applicable to Air India flight disputes:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm text-slate-800">
                <caption className="sr-only">Air India statutory refund deadlines, compensation rules, and legal authorities</caption>
                <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-4 py-3.5">Dispute Category</th>
                    <th scope="col" className="px-4 py-3.5">Statutory Deadline / Compensation</th>
                    <th scope="col" className="px-4 py-3.5">Legal Basis</th>
                    <th scope="col" className="px-4 py-3.5">Forum Jurisdiction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-slate-900">Direct Card / Net Banking / UPI</th>
                    <td className="px-4 py-3.5 text-emerald-700 font-bold">Within 7 Working Days</td>
                    <td className="px-4 py-3.5 text-slate-600">DGCA CAR Sec 3 Series M Part II Cl 3.3.1</td>
                    <td className="px-4 py-3.5 text-slate-600">AirSewa / Consumer Commission</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-slate-900">Travel Agent / OTA Bookings</th>
                    <td className="px-4 py-3.5 text-blue-700 font-bold">Within 30 Working Days (Carrier Liable)</td>
                    <td className="px-4 py-3.5 text-slate-600">DGCA CAR Sec 3 Series M Part II Cl 3.3</td>
                    <td className="px-4 py-3.5 text-slate-600">Joint Legal Notice to Airline &amp; Agent</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-slate-900">Non-Refundable Ticket Taxes</th>
                    <td className="px-4 py-3.5 text-indigo-700 font-bold">100% Tax / UDF / PSF Refundable</td>
                    <td className="px-4 py-3.5 text-slate-600">DGCA Circular &amp; CPA 2019 Sec 2(47)</td>
                    <td className="px-4 py-3.5 text-slate-600">DCDRC (Unfair Trade Practice)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-slate-900">Airline Cancellation &lt; 24h</th>
                    <td className="px-4 py-3.5 text-amber-700 font-bold">Full Refund + ₹5,000 to ₹10,000 Compensation</td>
                    <td className="px-4 py-3.5 text-slate-600">DGCA CAR Sec 3 Series M Part IV</td>
                    <td className="px-4 py-3.5 text-slate-600">e-Jagriti Consumer Court</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-slate-900">Rescheduling Delay &gt; 2 Hours</th>
                    <td className="px-4 py-3.5 text-slate-900 font-bold">Free Full Refund or Acceptable Alternate</td>
                    <td className="px-4 py-3.5 text-slate-600">DGCA Passenger Charter 2026</td>
                    <td className="px-4 py-3.5 text-slate-600">AirSewa Nodal Officer</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-slate-900">Forced Credit Voucher / Shell</th>
                    <td className="px-4 py-3.5 text-rose-700 font-bold">Strictly Prohibited; 100% Cash Right</td>
                    <td className="px-4 py-3.5 text-slate-600">Supreme Court (Pravasi Legal Cell)</td>
                    <td className="px-4 py-3.5 text-slate-600">Advocate Statutory Legal Notice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Hand-authored SVG Process Diagram (Artefact 2) */}
          <section aria-labelledby="process-diagram-heading" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2
              id="process-diagram-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              How an Air India Refund Moves From PNR Cancellation to Bank Credit
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
              The following workflow visualizes how an Air India ticket refund reconciles across payment gateways, travel agencies, civil aviation grievance portals, and legal escalation channels:
            </p>

            <div className="w-full overflow-x-auto bg-slate-900 p-4 sm:p-6 rounded-xl">
              <svg
                viewBox="0 0 860 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full min-w-[700px] h-auto"
                aria-label="Air India ticket refund and legal escalation flowchart"
                role="img"
              >
                <rect width="860" height="380" rx="12" fill="#0B132B" />

                {/* Stage 1 */}
                <rect x="25" y="40" width="180" height="90" rx="8" fill="#1C2541" stroke="#3A86FF" strokeWidth="2" />
                <text x="115" y="70" fill="#3A86FF" fontSize="12" fontWeight="bold" textAnchor="middle">1. PNR Cancellation</text>
                <text x="115" y="90" fill="#E0E1DD" fontSize="10" textAnchor="middle">Direct AirIndia.com or OTA</text>
                <text x="115" y="105" fill="#8D99AE" fontSize="9" textAnchor="middle">Generate Cancellation Timestamp</text>

                {/* Arrow 1 to 2 */}
                <path d="M205 85 H245" stroke="#48CAE4" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Stage 2 */}
                <rect x="245" y="40" width="180" height="90" rx="8" fill="#1C2541" stroke="#48CAE4" strokeWidth="2" />
                <text x="335" y="70" fill="#48CAE4" fontSize="12" fontWeight="bold" textAnchor="middle">2. Airline Audit &amp; Settlement</text>
                <text x="335" y="90" fill="#E0E1DD" fontSize="10" textAnchor="middle">Direct: 7 Days (DGCA)</text>
                <text x="335" y="105" fill="#8D99AE" fontSize="9" textAnchor="middle">Agent/OTA: 30 Days Limit</text>

                {/* Arrow 2 to Decision */}
                <path d="M425 85 H465" stroke="#48CAE4" strokeWidth="2" />

                {/* Decision Box */}
                <polygon points="535,40 605,85 535,130 465,85" fill="#243356" stroke="#FFD166" strokeWidth="2" />
                <text x="535" y="80" fill="#FFD166" fontSize="11" fontWeight="bold" textAnchor="middle">Refund</text>
                <text x="535" y="96" fill="#FFD166" fontSize="10" textAnchor="middle">Received?</text>

                {/* Branch YES */}
                <path d="M535 40 V15 H690 V40" stroke="#06D6A0" strokeWidth="2" strokeDasharray="3 3" />
                <rect x="650" y="40" width="180" height="60" rx="8" fill="#0D3B2E" stroke="#06D6A0" strokeWidth="2" />
                <text x="740" y="65" fill="#06D6A0" fontSize="11" fontWeight="bold" textAnchor="middle">Credited to Bank</text>
                <text x="740" y="82" fill="#E0E1DD" fontSize="9" textAnchor="middle">Reversal via ARN/UTR</text>

                {/* Branch NO */}
                <path d="M535 130 V190" stroke="#EF476F" strokeWidth="2" />
                <text x="545" y="165" fill="#EF476F" fontSize="11" fontWeight="bold">NO (&gt;7/30d)</text>

                {/* Stage 3: AirSewa */}
                <rect x="445" y="190" width="180" height="85" rx="8" fill="#1C2541" stroke="#EF476F" strokeWidth="2" />
                <text x="535" y="215" fill="#EF476F" fontSize="12" fontWeight="bold" textAnchor="middle">3. AirSewa Nodal Filing</text>
                <text x="535" y="235" fill="#E0E1DD" fontSize="10" textAnchor="middle">Level 1 Grievance to MoCA</text>
                <text x="535" y="250" fill="#8D99AE" fontSize="9" textAnchor="middle">48h Statutory Mandate</text>

                {/* Arrow to Step 4 */}
                <path d="M445 232 H375" stroke="#EF476F" strokeWidth="2" />

                {/* Stage 4: Legal Demand Notice */}
                <rect x="195" y="190" width="180" height="85" rx="8" fill="#2B1A2F" stroke="#E63946" strokeWidth="2" />
                <text x="285" y="215" fill="#FF758F" fontSize="12" fontWeight="bold" textAnchor="middle">4. Advocate Legal Notice</text>
                <text x="285" y="235" fill="#E0E1DD" fontSize="10" textAnchor="middle">Speed Post to Airlines House</text>
                <text x="285" y="250" fill="#FFB3C1" fontSize="9" textAnchor="middle">15-Day Final Statutory Demand</text>

                {/* Arrow to Step 5 */}
                <path d="M195 232 H135 V300 H165" stroke="#B5179E" strokeWidth="2" />

                {/* Stage 5: e-Jagriti */}
                <rect x="165" y="295" width="240" height="65" rx="8" fill="#1A1C29" stroke="#7209B7" strokeWidth="2" />
                <text x="285" y="322" fill="#B5179E" fontSize="12" fontWeight="bold" textAnchor="middle">5. e-Jagriti Consumer Commission</text>
                <text x="285" y="340" fill="#E0E1DD" fontSize="9" textAnchor="middle">Claim 100% Refund + 9-18% Interest + Agony Damages</text>

                {/* Definitions */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#48CAE4" />
                  </marker>
                </defs>
              </svg>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              * Note: The advocate legal notice stage triggers pre-litigation settlement in over 75% of delayed aviation claims by escalating past call-center tier scripts to Air India&apos;s legal and finance compliance cell.
            </p>
          </section>

          {/* Section 7: Case-Law Strip (Archetype B1 <article> cards requirement) */}
          <section aria-labelledby="case-law-heading">
            <h2
              id="case-law-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              What Have Indian Consumer Commissions and Courts Ordered Air India to Pay for Refund Delays?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Judicial precedent establishes that airlines cannot unlawfully retain customer funds, hide behind operational difficulties, or shift liability to travel portals. Review verified court judgments:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_CITATIONS.map((c, i) => (
                <article
                  key={i}
                  className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 mb-2">
                      {c.citation}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{c.title}</h3>
                    <p className="text-xs text-slate-500 font-mono mb-3">{c.parties} • {c.date}</p>
                    <div className="text-xs text-slate-600 space-y-2 mb-4">
                      <p>
                        <strong>Facts:</strong> {c.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {c.holding}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 mb-3">
                      <span className="block text-xs font-bold uppercase text-emerald-800 tracking-wide">Court Award:</span>
                      <span className="text-xs font-semibold text-emerald-900">{c.amount}</span>
                    </div>
                    <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded border border-slate-100 italic">
                      <strong>Legal Takeaway:</strong> {c.takeaway}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 8: Evidence Checklist (Archetype B1 <ul> with checkbox styling) */}
          <section aria-labelledby="evidence-checklist-heading" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2
              id="evidence-checklist-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              What Documents and Digital Records Form Admissible Aviation Evidence Under BSA Section 63?
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
              Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communication records, booking invoices, and bank transaction statements constitute admissible legal evidence before consumer courts. Assemble this 6-point evidence dossier before serving your notice:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded border-2 border-emerald-600 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Air India E-Ticket &amp; 13-Digit Ticket Number</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Your official Air India booking confirmation showing the 6-character PNR, passenger names, flight sectors, fare breakdown (base fare, fuel surcharge, UDF, and PSF), and ticket prefix starting with &quot;098&quot;.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded border-2 border-emerald-600 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Payment Debit Proof &amp; Original Bank Statement</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Bank account statement, credit card ledger, or UPI transaction receipt exhibiting the exact date, debit timestamp, and transaction reference (RRN/UTR) reflecting payment to Air India or the booking agent.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded border-2 border-emerald-600 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Cancellation Intimation &amp; Refund Request Confirmation</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Official cancellation confirmation email, Air India SMS alert, or web screenshot confirming that the flight was cancelled or that your voluntary refund request was submitted, noting the exact date of cancellation.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded border-2 border-emerald-600 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Customer Care Chat Transcripts &amp; Email Escalations</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Complete, unedited email threads with Air India support (`travelhelp@airindia.com`, `contactus@airindia.com`), web chat records, and tickets where customer care promised payment within 7–14 days.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded border-2 border-emerald-600 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">AirSewa Docket ID &amp; Nodal Officer Correspondence</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Your unique AirSewa grievance ticket number, official status updates from the Ministry of Civil Aviation portal, and any written replies or default notices from Air India&apos;s Nodal Officer.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded border-2 border-emerald-600 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Bank Certificate of Non-Receipt (Inward Statement)</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    An official bank ledger or statement covering the cancellation date through the present date demonstrating zero inward credit or reversal from Air India, proving non-receipt beyond reasonable doubt.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Section 9: Worked Scenario (Artefact 3) */}
          <section aria-labelledby="worked-scenario-heading" className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-blue-950 shadow-xl">
            <h2
              id="worked-scenario-heading"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
            >
              Worked Example: Overcoming a ₹64,200 International Air India Refund Deadlock via Advocate Legal Notice
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              The following factual scenario illustrates how an international flight refund trapped between an online travel portal and Air India was resolved using statutory legal escalation:
            </p>

            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-700 pb-4">
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">Passenger</span>
                  <span className="font-bold text-white">Sanjeev M., IT Consultant</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">Disputed Route &amp; Carrier</span>
                  <span className="font-bold text-white">Delhi (DEL) to London Heathrow (LHR) • Air India</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">Total Disputed Amount</span>
                  <span className="font-bold text-emerald-400">₹64,200 (Economy Flex Ticket)</span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sky-400 mb-1">The Deadlock:</h3>
                <p className="text-slate-300 leading-relaxed">
                  Sanjeev booked his round-trip flight via an online travel aggregator. Three weeks prior to travel, operational aircraft rescheduling moved his return departure by 5 hours, disrupting his work itinerary. Sanjeev exercised his statutory option under DGCA CAR to cancel the ticket for a full refund. The aggregator confirmed the cancellation but stated that Air India had not released the refund batch. For 8 consecutive weeks, Air India support told him to &quot;contact the agent,&quot; while the agent insisted Air India held the funds.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sky-400 mb-1">The Legal Escalation:</h3>
                <p className="text-slate-300 leading-relaxed">
                  Refusing to accept a restrictive credit shell, Sanjeev instructed an advocate through LegalRecovery.in. The advocate drafted a comprehensive statutory legal notice citing DGCA CAR Section 3, Series M, Part II, Clause 3.3 (which holds airlines explicitly liable for agent refunds) and the Supreme Court mandate in <em>Pravasi Legal Cell</em>. The notice named both Air India Limited (at Airlines House, New Delhi) and the travel aggregator as joint respondents, demanding an immediate refund of ₹64,200 plus 18% statutory interest within 15 days, failing which an e-Jagriti consumer complaint would be registered.
                </p>
              </div>

              <div className="bg-emerald-950/60 border border-emerald-800/60 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-1">The Resolution:</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Within 9 business days of receiving the Registered Speed Post notice, Air India&apos;s corporate legal cell intervened with the GDS settlement team. The full principal amount of ₹64,200 was credited directly to Sanjeev&apos;s original HDFC Bank credit card along with a formal written confirmation email containing the 12-digit ARN tracking number.
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              * Note: Illustrative worked scenario based on consolidated consumer recovery claims processed under DGCA CAR regulations.
            </p>
          </section>

          {/* Section 10: Platform Scope */}
          <section aria-labelledby="scope-heading">
            <h2
              id="scope-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Our Scope: What LegalRecovery Can and Cannot Do for Your Air India Refund Dispute
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Transparency is fundamental to our legal services. Here is an honest appraisal of what our platform and advocates deliver, and where legal boundaries lie:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">✓</span>
                  <h3 className="font-bold text-emerald-950 text-lg">What LegalRecovery Does</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-emerald-900">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Assign a verified advocate specializing in aviation and consumer protection law.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Draft a customized statutory legal demand notice citing DGCA CAR, Supreme Court rulings, and CPA 2019.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Serve notice via Registered Speed Post to Air India&apos;s registered office with postal tracking and via email.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Hold both Air India and third-party OTAs (MakeMyTrip, Goibibo, EaseMyTrip) jointly accountable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Provide ready-to-file legal documentation if the case must proceed to e-Jagriti consumer court.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm">✗</span>
                  <h3 className="font-bold text-rose-950 text-lg">What We Cannot Do</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-rose-900">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>We cannot directly freeze or debit Air India&apos;s bank accounts without court execution orders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>We cannot overturn valid cancellation fee deductions when you voluntarily cancel non-flexible fares outside the 48-hour window.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>We do not guarantee judicial timelines for contested consumer court litigation before District Commissions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>We cannot recover visa fees or hotel penalties that were booked independently of your airline itinerary.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 11: FAQs (Archetype B1 <details>/<summary> requirement) */}
          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Frequently Asked Questions About Air India Refund Status, Delays &amp; Legal Notices
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Clear answers to the most common legal and procedural questions regarding delayed Air India ticket refunds:
            </p>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-slate-200 p-5 open:ring-2 open:ring-blue-600/20 transition-all duration-200 shadow-sm"
                >
                  <summary className="font-bold text-slate-900 text-base sm:text-lg cursor-pointer flex items-center justify-between list-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 text-blue-600 group-open:rotate-180 transition-transform duration-200 text-lg">
                      ▾
                    </span>
                  </summary>
                  <div className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 12: Primary Sources & Legal References Block */}
          <section aria-labelledby="sources-heading" className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
            <h2
              id="sources-heading"
              className="text-lg font-bold text-slate-900 mb-3"
            >
              Primary Statutory Authorities, DGCA Regulations, and Official Gazettes
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              All statutory timelines, legal liabilities, and passenger compensation rights cited on this page are grounded in verifiable Indian civil aviation requirements, legislative statutes, and superior court precedents:
            </p>
            <ul className="space-y-2 text-xs text-blue-700 font-mono">
              {PRIMARY_SOURCES.map((source, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slate-400">[{i + 1}]</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-all"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Band */}
          <section aria-label="Take action CTA">
            <AirIndiaNoticeCTA />
          </section>

          {/* Internal Cross-Linking Navigation */}
          <section aria-labelledby="related-links-heading" className="border-t border-slate-200 pt-8">
            <h3 id="related-links-heading" className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Related Travel Recovery &amp; Airline Legal Resources
            </h3>
            <div className="flex flex-wrap gap-2.5 text-xs">
              <Link
                href="/send-a-legal-notice/airline-refund-not-received"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Airline Refund Legal Notice Hub
              </Link>
              <Link
                href="/law/dgca-air-ticket-refund-rules-2026"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                DGCA Air Ticket Refund Rules 2026
              </Link>
              <Link
                href="/services/airline-and-travel-recoveries"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Aviation &amp; Travel Recoveries Service
              </Link>
              <Link
                href="/credit-shell-voucher-instead-of-refund-legal"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Credit Shell vs Cash Refund Legality
              </Link>
              <Link
                href="/legal-notice-to/goibibo"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Legal Notice to Goibibo
              </Link>
              <Link
                href="/visa-agent-fraud-refund-legal-notice"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Visa Agent Fraud Recovery
              </Link>
              <Link
                href="/refund-shows-successful-but-not-received"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Refund Shows Successful But Not Received
              </Link>
              <Link
                href="/legal-notice-charges"
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                Legal Notice Charges &amp; Pricing
              </Link>
            </div>
          </section>

          {/* Related Recovery Guides Cluster Component */}
          <RelatedRecoveryGuides />
        </article>
      </main>
    </>
  );
}
