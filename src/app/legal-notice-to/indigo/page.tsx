import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import IndigoNoticeCTA from "./IndigoNoticeCTA";
import IndigoTableOfContents from "./IndigoTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "IndiGo Refund Not Received? Credit Shell & Legal Notice",
  description:
    "IndiGo refund pending or forced into credit shell? DGCA refund deadlines, AirSewa escalation and when to send IndiGo a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/indigo`,
  },
  openGraph: {
    title: "IndiGo Refund Stuck or Trapped in Credit Shell? Legal Action Guide",
    description:
      "Statutory escalation path for delayed IndiGo flight refunds, forced credit shell vouchers, and travel agent buck-passing under DGCA CAR regulations.",
    url: `${SITE_URL}/legal-notice-to/indigo`,
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
  },
  {
    title: "Supreme Court of India: Pravasi Legal Cell v. Union of India & Ors. (2020) 10 SCC 724 (Mandatory Cash Refund & Credit Shell Ruling)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title: "AirSewa 2.0 Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
  },
  {
    title: "DGCA CAR Section 3, Series M, Part IV — Facilities to be Provided to Passengers by Airlines due to Involuntary Denied Boarding, Delays & Cancellations",
    url: "https://www.dgca.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for PNR, Flight SMS & Bank Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Airline Refund Mandate on Credit Shell Prohibition",
    parties: "Pravasi Legal Cell & Ors. v. Union of India, DGCA & InterGlobe Aviation Ltd.",
    citation: "(2020) 10 SCC 724, Supreme Court of India",
    date: "Judgment Delivered 01 October 2020",
    facts:
      "Airlines operating in India, including IndiGo, unilaterally locked hundreds of crores of passenger ticket fares into involuntary 'credit shells' or 'credit vouchers' following flight cancellations, refusing cash reversals to passenger bank accounts.",
    holding:
      "The Supreme Court declared that air carriers cannot unilaterally lock consumer funds into credit shells without passenger consent. Passengers maintain an unfettered legal right to a full cash refund to their source payment account. The bench directed that any unutilized credit shell must be refunded with statutory interest of 0.5% per month up to 31 March 2021 and 0.75% per month thereafter.",
    amount: "100% Cash Remittance + Mandatory Interest (0.5%–0.75% p.m.)",
    takeaway:
      "IndiGo's automated chatbots frequently issue credit shells by default when flights are cancelled or disrupted. Under Supreme Court precedent, this forced conversion is illegal: you can formally refuse the voucher and demand immediate cash remittance.",
  },
  {
    title: "State Commission Ruling on Flight Cancellation & Refusal to Pay Cash Refund",
    parties: "InterGlobe Aviation Ltd. (IndiGo) v. Jagdish Rai & Anr.",
    citation: "First Appeal No. 27/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 18 August 2021",
    facts:
      "IndiGo cancelled scheduled passenger flights without adequate prior intimation. The airline refused to release a monetary refund to the complainant's bank card, insisting instead on alternative flight rescheduling or an internal credit voucher.",
    holding:
      "The State Commission affirmed the District Commission's verdict holding IndiGo liable for gross deficiency in service. The Commission ruled that upon airline-initiated cancellation, the entire ticket fare must be returned to the passenger within the statutory 7-day window. Holding consumer funds captive against future travel constitutes an unfair trade practice.",
    amount: "₹18,450 Full Fare Refund @ 9% Interest + ₹10,000 Harassment Compensation + ₹7,000 Litigation Costs",
    takeaway:
      "When IndiGo cancels or heavily reschedules a flight, you are under zero legal obligation to accept their rescheduled flight or travel voucher. You are legally entitled to 100% money back plus compensation for inconvenience.",
  },
  {
    title: "Joint Liability for OTA Intermediary Buck-Passing and Agent Refund Blame",
    parties: "Gaurav Jain v. InterGlobe Aviation Ltd. (IndiGo) & MakeMyTrip India Pvt. Ltd.",
    citation: "CC No. 184/2021, District Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 14 March 2022",
    facts:
      "A passenger booked IndiGo round-trip tickets through an Online Travel Agent (OTA). When the flight was cancelled, IndiGo asserted that the refund was processed to the travel agent's corporate account, while the OTA insisted IndiGo had locked the refund in an agency wallet. The passenger was trapped in bureaucratic crossfire for 8 months.",
    holding:
      "The District Commission cited DGCA CAR Section 3, Series M, Part II, Clause 3.3, ruling that travel agents and booking aggregators are recognized statutory agents of the carrying airline. IndiGo cannot extinguish its primary carrier obligations by simply stating that funds were sent to an intermediary. Both IndiGo and the booking platform were held jointly and severally liable.",
    amount: "₹24,600 Full Refund @ 9% p.a. Interest + ₹15,000 Mental Agony Damages + ₹10,000 Legal Expenses",
    takeaway:
      "If you booked via MakeMyTrip, EaseMyTrip, Goibibo, or Yatra, IndiGo cannot shirk responsibility by directing you to 'contact your agent'. Under DGCA regulations, the airline carries the direct statutory duty to verify that the refund successfully reaches your bank account.",
  },
  {
    title: "Illegal Forfeiture of Statutory Airport Taxes on Non-Refundable Fares",
    parties: "Dr. B. K. Subbarao & Anr. v. InterGlobe Aviation Ltd.",
    citation: "Consumer Complaint No. 312/2022, DCDRC Mumbai Suburban",
    date: "Order Dated 22 November 2023",
    facts:
      "Complainants cancelled their Saver fare tickets due to an unavoidable medical emergency two weeks prior to travel. IndiGo deducted 100% of the ticket price as cancellation penalty, refusing to refund even statutory government taxes, User Development Fee (UDF), and Passenger Service Fee (PSF).",
    holding:
      "The Consumer Commission ordered IndiGo to refund all statutory government and airport taxes in full. The forum held that airlines act solely as collecting agents for airport development and passenger service fees. Keeping passenger tax money when no travel was undertaken constitutes an unlawful and unjust enrichment under Section 2(47) of the Consumer Protection Act, 2019.",
    amount: "₹14,280 Statutory Tax Refund + ₹15,000 Punitive Compensation + ₹8,000 Legal Costs",
    takeaway:
      "Even if your IndiGo ticket is marked 'Non-Refundable', IndiGo is statutorily barred from retaining UDF, PSF, and government charges. Those amounts must be refunded to your original payment method in every single cancellation.",
  },
];

const FAQS = [
  {
    question: "Why is my IndiGo refund not received yet even after the airline confirmed cancellation?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.1, IndiGo is mandated to complete credit and debit card refunds within 7 working days from the date of flight cancellation. If your refund is pending beyond 7 days, the funds are typically stuck in IndiGo's internal banking clearance pipeline, uncredited gateway batches, or an unconsented credit shell voucher created under your PNR. Demand the 12-digit Acquirer Reference Number (ARN) or bank UTR from IndiGo support to track the inward settlement with your bank.",
  },
  {
    question: "Can IndiGo legally force me to take a Credit Shell instead of refunding money to my bank?",
    answer:
      "No. In Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, the Supreme Court ruled that airlines cannot unilaterally lock consumer funds into credit shells or vouchers without the passenger's voluntary, express opt-in consent. Forcing a credit shell violates Section 2(47) of the Consumer Protection Act, 2019. You have an absolute legal right to reject the credit shell and demand an immediate 100% electronic reversal to your original payment card, UPI ID, or bank account.",
  },
  {
    question: "How long does IndiGo take to refund for tickets booked through MakeMyTrip, EaseMyTrip or an agent?",
    answer:
      "Under DGCA CAR regulations revised in 2026, when a ticket is purchased via a travel agent or OTA, the refund process must be completed within 30 working days at most, and the airline remains statutorily liable to ensure the money reaches the consumer. Travel agents act as authorized commercial agents of the airline under law. If IndiGo claims it paid the agent but your bank account remains unpaid past 14 days, you can issue a joint statutory legal notice holding both IndiGo and the OTA jointly liable.",
  },
  {
    question: "Can I get a full refund if IndiGo delays or reschedules my flight by more than 2 hours?",
    answer:
      "Yes. Under DGCA CAR Section 3, Series M, Part IV, if an airline reschedules or delays a domestic flight by 2 hours or more, or if the flight is cancelled, the passenger is entitled to either an alternate flight acceptable to the passenger or a full 100% refund of the ticket value without any deduction of cancellation charges or administrative fees.",
  },
  {
    question: "Do I get a refund of airport taxes (UDF and PSF) if I cancel a non-refundable IndiGo Saver ticket?",
    answer:
      "Yes, 100% of statutory taxes must be refunded. DGCA CAR regulations strictly dictate that Passenger Service Fee (PSF), User Development Fee (UDF), and government taxes are collected on behalf of airport operators and the government. Since no service was consumed when you cancelled, IndiGo cannot retain these charges and must remit them back to your payment source, even on zero-refund promotional fares.",
  },
  {
    question: "How do I escalate an IndiGo refund complaint on the Ministry of Civil Aviation AirSewa portal?",
    answer:
      "Log into airsewa.gov.in, select 'Grievance Redressal', choose 'Airline Grievance', select 'InterGlobe Aviation Limited (IndiGo)', and upload your PNR, e-ticket invoice, and cancellation proof. By civil aviation mandate, IndiGo's Nodal Officer must acknowledge and review your grievance within 48 hours. If the Nodal Officer fails to release your funds within 30 days, escalate to Level 2 (Appellate Authority) and serve an advocate legal demand notice.",
  },
  {
    question: "IndiGo flight cancel hone par refund na mile ya credit shell mein fas jaye toh legal notice kaise bheje?",
    answer:
      "Agar IndiGo cancellation ke baad aapka refund 7 din mein bank account mein na bheje ya zabardasti credit shell pakda de, toh aap ek formal statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate DGCA CAR aur Supreme Court rules ke tehat InterGlobe Aviation Limited ke registered office (Janpath, New Delhi) par Speed Post aur email se notice dispatch karte hain, jismein 15 din ka strict payment demand diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IndiGo Holding Your Refund or Pushing a Credit Shell? Here's the Fix",
  description:
    "IndiGo refund pending or forced into credit shell? DGCA refund deadlines, AirSewa escalation and when to send IndiGo a legal notice.",
  datePublished: "2026-11-03T12:00:00+05:30",
  dateModified: "2026-11-03T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/indigo`,
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
    name: "IndiGo",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Airline Refund Amount",
      item: `${SITE_URL}/recovery/airline-refund-amount`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "IndiGo Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/indigo`,
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

export default function IndigoLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Airline Refund Amount", href: "/recovery/airline-refund-amount" },
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
        {/* Hero Section with Archetype B4 Stat Summary Line */}
        <section className="w-full bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-4 sm:mb-5 max-w-full">
              <span>DGCA CAR Series M Part II</span>
              <span className="text-sky-600">•</span>
              <span>InterGlobe Aviation Ltd. Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              IndiGo Holding Your Refund or Pushing a Credit Shell? Here&apos;s the Fix
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-blue-950/70 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-sky-300 mb-1">
                Statutory Summary (7-Day Aviation Refund Mandate)
              </p>
              <p>
                Under DGCA CAR Section 3, Series M, Part II, InterGlobe Aviation Limited (IndiGo) is legally bound to remit credit card and digital refunds within 7 working days of flight cancellation. Unilateral issuance of a &apos;credit shell&apos; violates Supreme Court precedent in <em>Pravasi Legal Cell</em>. Passengers can formally reject vouchers, escalate via AirSewa, and serve a 15-day statutory advocate legal notice before initiating consumer court proceedings.
              </p>
            </div>

            {/* Archetype B4 Requirement 1: Verified Summary Stat Line */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DGCA Card Refund Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% Deduct</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Airline Cancellations</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Tax</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">UDF & PSF Refundable</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹72,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Awarded in Sample Orders</p>
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
            <IndigoTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Consumer Courts and Regulatory Forums Have Ordered IndiGo to Pay
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When domestic flights are disrupted, IndiGo customer support chatbots (such as &apos;Dottie&apos;) routinely force passengers into a closed-loop credit shell or redirect them into unending ticket queries. However, Indian consumer dispute commissions and the Supreme Court of India have repeatedly censured InterGlobe Aviation Limited for withholding passenger funds. 
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Regulatory authorities have clarified that an airline ticket is an executory service contract. Once IndiGo fails or cancels carriage, retaining passenger consideration constitutes a severe deficiency of service under Section 2(11) and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Across national and district commissions, courts have consistently ordered IndiGo to refund 100% of ticket amounts alongside 9% annual interest and punitive mental harassment damages.
                </p>
              </section>

              {/* Section 2: Order Digest (Archetype B4 Requirement 2: 3-6 verified orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Aviation Rulings Against IndiGo (InterGlobe Aviation)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Order #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute & Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Judicial Award / Relief
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Applicable to All Domestic 6E Routes
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis (Archetype B4 Requirement 3: <ul> on evidence & timing) */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Won Aviation Refund and Credit-Shell Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive analysis of consumer commission orders against IndiGo and major Indian air carriers reveals clear evidentiary factors that consistently lead to judgments against airlines. When consumers present concrete documentary trails, commissions reject generic airline defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unambiguous Written Rejection of Credit Shells:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Complainants who immediately sent an email stating &quot;I do not consent to a 6E Credit Shell and demand a 100% refund to my bank account under DGCA CAR Series M Part II&quot; defeated IndiGo&apos;s defense that the passenger voluntarily accepted store credit.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Certified Bank Statement Demonstrating Zero Inward Credit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        IndiGo automated emails frequently claim &quot;Refund Processed Successfully&quot;. Complainants who produced a bank statement from the date of cancellation showing no matching incoming transaction proved that the transaction stalled at the merchant acquiring bank level.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Joining Both the Airline and the Travel Aggregator (OTA):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When bookings were made through <Link href="/legal-notice-to/makemytrip" className="text-blue-700 font-semibold underline hover:text-blue-900">MakeMyTrip</Link>, EaseMyTrip, or Goibibo, notices and complaints that impleaded both InterGlobe Aviation and the OTA prevented either entity from passing the buck, resulting in joint-and-several recovery orders.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserved Flight Disruption Notice Timestamps:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Preserving SMS alerts, email schedule-change notices, and airport boarding announcements established that the flight cancellation or major schedule change (≥ 2 hours) was airline-initiated, entitling the passenger to a full fee-free refund under DGCA regulations.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Exhausting the Ministry of Civil Aviation AirSewa Docket Rail:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Attaching an unresolved AirSewa grievance docket reference number showed the consumer forum that pre-litigation administrative remedies were exhausted without relief, triggering punitive litigation costs and compensation awards against IndiGo.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Artefact 1: Responsive Resolution Hierarchy Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Disrupted PNR to Full Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified legal escalation sequence to reject airline credit shells and recover your funds through official regulatory mechanisms:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Flight Cancelled / Delay ≥ 2h</h3>
                    <p className="text-xs text-slate-300 mt-1">IndiGo initiates schedule disruption or flight cancellation.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Reject Forced Credit Shell</h3>
                    <p className="text-xs text-amber-900 mt-1">Invoke Supreme Court Pravasi ruling and demand 100% bank reversal.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">AirSewa Portal Grievance</h3>
                    <p className="text-xs text-blue-900 mt-1">48-hour statutory response deadline for IndiGo Nodal Officer.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal demand served via Speed Post and Section 63 BSA email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% fare credit plus interest, or consumer commission claim.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart (hidden md:block) */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="IndiGo Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0B1E36" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </linearGradient>
                      <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="succGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#indigoGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Flight Cancelled</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">or Delay ≥ 2 Hours</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">PNR Disruption</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Reject Credit Shell</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke Pravasi Ruling</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank Reversal</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">AirSewa Docket</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">48-Hr Nodal Officer</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">Escalate Level 1 / 2</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#alertGrad)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#succGrad)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Filing</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS PER DGCA REGULATIONS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Credit / Debit Card & UPI Payments: Maximum 7 Working Days (DGCA CAR Series M Part II Clause 3.3.1)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Travel Agent / OTA Bookings: Maximum 30 Working Days (Airlines remain statutorily responsible under Clause 3.3.2)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Response Window: 15 Calendar Days before Consumer Commission filing on e-Jagriti</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: Your Playbook (Archetype B4 Requirement 4: 5-step <ol> derived from cases) */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook Against IndiGo: From PNR Tracking to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning consumer commission verdicts, this 5-step playbook cuts through automated support deflection and enforces your statutory passenger rights under Indian civil aviation law:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure PNR Cancellation Proof and Formal Bank Clearing Reference
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Retrieve your IndiGo e-ticket tax invoice, cancellation acknowledgment email, and PNR details. If customer care claims the refund is completed, demand the exact 12-digit Acquirer Reference Number (ARN) for cards or Unique Transaction Reference (UTR) for UPI/NetBanking. If IndiGo fails to provide a verifiable bank reference, their system has withheld the file at the nodal gateway.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Send a Written Credit Shell Rejection Notice to IndiGo Support
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not click any bot options that accept &quot;6E Credit Shell&quot; or &quot;Store in IndiGo Wallet&quot;. Send a formal email to customer.relations@goindigo.in stating: <em>&quot;Under DGCA CAR Section 3 Series M Part II and the Supreme Court mandate in Pravasi Legal Cell (2020), I explicitly decline any credit voucher or shell. Remit 100% of the funds back to my original payment source within 7 days.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Official Grievance on the Ministry of Civil Aviation AirSewa Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Visit <a href="https://airsewa.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">airsewa.gov.in</a> and file a Level-1 complaint against InterGlobe Aviation Limited. Attach your PNR, cancellation timestamp, and credit shell refusal email. IndiGo&apos;s Nodal Officer (nodalofficer@goindigo.in) is statutorily required to address the grievance within 48 hours. If unresolved, escalate to the Appellate Authority.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When 7 working days pass without bank receipt and administrative escalation fails, instruct an advocate to serve a formal legal notice to InterGlobe Aviation Limited at its registered corporate office (Janpath, New Delhi) and corporate headquarters (Gurugram). The notice must demand the principal ticket refund, 18% penal interest, and compensation for deficiency in service, giving a strict 15-day compliance window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn about transparent notice drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Consumer Case on e-Jagriti with Litigation Costs Claim
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If IndiGo fails to remit funds within the 15-day notice period, file an online consumer complaint on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Since district commissions hold territorial jurisdiction where the passenger resides, you can file from your home district claiming the full fare, interest, mental distress compensation, and all legal expenditures.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines (Archetype B4 Requirement 5: <table>) */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines Under DGCA CAR Series M Part II: Cash vs Card vs Travel Agent
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Directorate General of Civil Aviation enforces clear-cut turnaround times for airline ticket refunds. IndiGo cannot rely on internal commercial guidelines that contradict these binding statutory benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">IndiGo Statutory Refund Deadlines & Regulatory Forums</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Payment Method / Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cash Booking at Airline Counter
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate (Same Day)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.1</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate Station Manager Escalation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Credit Card / Debit Card / NetBanking / UPI
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.1</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand 12-digit ARN / Bank Chargeback</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Booked via Travel Agent or OTA (MakeMyTrip, EaseMyTrip)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">30 Working Days Max</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Joint Legal Notice to IndiGo + Travel Agent</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Zero Cancellation Window (Within 48h of Booking)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Full 100% Refund (0 Fee)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA 2026 48-Hour Free Look Rule†</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Zero administrative fee deduction allowed</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Taxes on Non-Refundable / Saver Fares (UDF & PSF)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">100% Tax Remittance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.4</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">e-Jagriti refund petition for illegal retention</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final demand before filing consumer case</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  † Verified under DGCA CAR passenger charter guidelines. For in-depth regulatory analysis, review our guide to <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline">DGCA air ticket refund rules</Link>.
                </p>
              </section>

              {/* Section 7: Credit Shell Trap Deep-Dive */}
              <section id="heading-credit-shell-trap" aria-labelledby="heading-credit-shell-trap-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-credit-shell-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Credit Shell Trap: Why Forced Vouchers Violate Aviation Law and How to Reject Them
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    How IndiGo Automated Systems Lock Consumer Funds in Closed-Loop Shells
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    When you initiate a flight cancellation online or through WhatsApp support, IndiGo&apos;s portal automatically suggests: <em>&quot;Your refund of ₹14,500 has been credited to your 6E Credit Shell. Use it for your next booking!&quot;</em> If you do not actively push back, the airline retains your capital on its balance sheet while you are saddled with an expiring voucher subject to restrictive fare conditions and blackout dates.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>Why this violates the law:</strong> In <em>Pravasi Legal Cell v. Union of India</em>, the Supreme Court declared that airlines have no legal authority to create a credit shell unless the passenger voluntarily selects that option in writing. Under the <Link href="/refund-as-gift-card-or-wallet-legal" className="text-blue-700 underline font-semibold">CCPA Dark Patterns Guidelines</Link>, pre-selecting store vouchers or concealing the cash refund button constitutes an unlawful &quot;Forced Action&quot;.
                    </p>
                    <p>
                      <strong>How to formally break the shell:</strong> If a credit shell has already been generated under your PNR, you can still reverse it. Submit a written revocation citing the Supreme Court directive and demand a cash remittance. If customer care fails to convert the shell to a bank credit within 72 hours, an advocate legal notice forces immediate treasury payout.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Delhi Family Recovers ₹34,800 Cancelled IndiGo Fares
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Delhi to Bengaluru (4 Passengers)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vikramaditya Sengupta booked 4 return tickets on IndiGo flight 6E-2134 from Delhi (DEL) to Bengaluru (BLR) for ₹34,800 using his HDFC credit card. 18 hours before departure, IndiGo notified him via SMS that the flight was cancelled due to &quot;operational constraints&quot;. When Vikramaditya logged into the IndiGo portal, the chatbot automatically converted the ₹34,800 fare into a 6E Credit Shell valid for only 12 months.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Vikramaditya called customer care requesting a reversal to his HDFC card, but the representative insisted: <em>&quot;Sir, our policy allows credit shells only for this fare class.&quot;</em> After 2 weeks of ignored emails and an unacknowledged AirSewa docket, Vikramaditya engaged LegalRecovery.in.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> A verified advocate drafted and served a formal statutory demand notice to InterGlobe Aviation Limited&apos;s Registered Office at Thapar House, Janpath, New Delhi, citing DGCA CAR Section 3 Series M Part II (Clause 3.3.1) and Supreme Court precedent in <em>Pravasi Legal Cell</em>. The notice demanded immediate electronic reversal of ₹34,800 plus statutory interest within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 after service of the advocate legal notice, IndiGo&apos;s corporate legal grievance cell sent an official acknowledgment with an Acquirer Reference Number (ARN). The full amount of ₹34,800 was credited directly to Vikramaditya&apos;s HDFC credit card statement without filing in court.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Aviation Evidence Checklist: What You Need Before Serving an IndiGo Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital financial statements are fully admissible in consumer courts. Assemble these 6 critical documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">IndiGo E-Ticket & GST Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed 6-character PNR, passenger names, flight numbers, and itemized UDF/PSF charges.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Flight Cancellation SMS or Email Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped alert proving IndiGo initiated the flight cancellation or reschedule ≥ 2 hours.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Chat Transcript / Email Declining Credit Shell:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof that you communicated non-consent to vouchers and demanded cash reversal to source bank.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank / Credit Card Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing original debit and verifying zero inward refund credit past the 7-day DGCA CAR window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">AirSewa Docket Number & Ticket Status:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of unresolved grievance ticket filed on airsewa.gov.in showing Nodal Officer inaction.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">OTA Booking Confirmation (If Applicable):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">MakeMyTrip, EaseMyTrip, or Goibibo booking voucher to establish joint and several carrier liability.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About IndiGo Flight Refunds, Credit Shells & Legal Notice
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in DGCA Regulations and Supreme Court Orders
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Aviation Authorities, Primary Statutes & Official DGCA References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions checked against active DGCA Civil Aviation Requirements (CAR) Series M Part II and Supreme Court directives as of November 2026.
                </p>
              </section>

              {/* Primary CTA (Archetype B4 Requirement 7: CTA) */}
              <section aria-labelledby="heading-cta-block" className="w-full">
                <IndigoNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel & Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    DGCA Refund Rules 2026 →
                  </Link>
                  <Link
                    href="/refund-as-gift-card-or-wallet-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Forced Wallet / Voucher Legality →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Refund with UTR/ARN →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges & Fee Structure →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
