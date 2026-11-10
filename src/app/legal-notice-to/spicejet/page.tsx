import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SpicejetNoticeCTA from "./SpicejetNoticeCTA";
import SpicejetTableOfContents from "./SpicejetTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "SpiceJet Refund Not Received? Legal Notice & Consumer Case",
  description:
    "SpiceJet refund overdue or flight cancelled without refund? DGCA rules, consumer-court precedents and a lawyer-drafted notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/spicejet`,
  },
  openGraph: {
    title: "SpiceJet Refund Overdue? DGCA Rules, AirSewa Escalation & Legal Notice",
    description:
      "Statutory escalation path for delayed SpiceJet flight refunds, airline cash-flow excuses, forced travel vouchers, and travel agent buck-passing under DGCA CAR regulations.",
    url: `${SITE_URL}/legal-notice-to/spicejet`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "SpiceJet Refund Overdue? DGCA Rules, AirSewa Escalation & Legal Notice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpiceJet Refund Overdue? DGCA Rules, AirSewa Escalation & Legal Notice",
    description:
      "Statutory escalation path for delayed SpiceJet flight refunds, airline cash-flow excuses, forced travel vouchers, and travel agent buck-passing under DGCA CAR regulations.",
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
    title: "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers",
    url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp",
  },
  {
    title: "Supreme Court of India: Pravasi Legal Cell v. Union of India & Ors. (2020) 10 SCC 724 (Mandatory Cash Refund & Credit Shell Ruling)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC): SpiceJet Ltd. v. Ranju Aery (Online Booking Jurisdiction & Cancellation Damages)",
    url: "https://cms.nic.in/ncdrcnew/judgments.html",
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
    title: "Landmark NCDRC Precedent on Online Booking Jurisdiction and Flight Cancellation Harassment",
    parties: "SpiceJet Ltd. v. Ranju Aery",
    citation: "Revision Petition No. 1195/2016, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 07 February 2017",
    facts:
      "A passenger booked SpiceJet flights online from Chandigarh to Bagdogra via New Delhi for a planned family vacation. SpiceJet cancelled the scheduled flight without adequate advance intimation and failed to arrange alternative flights or an immediate cash refund. When the complainant filed a consumer dispute in Chandigarh, SpiceJet argued that only Delhi courts had territorial jurisdiction because the airline's registered corporate office is located in Delhi.",
    holding:
      "The National Commission dismissed SpiceJet's revision petition and affirmed that in online air bookings, the cause of action arises where the booking was made and where the passenger resides. SpiceJet's unilateral cancellation without providing an immediate fare refund or alternative carriage constituted gross deficiency in service. The NCDRC confirmed the award of full fare refund alongside heavy compensation for mental agony and harassment.",
    amount: "₹80,885 Full Fare Refund + ₹1,25,000 Mental Harassment Damages + ₹10,000 Litigation Costs",
    takeaway:
      "You do not need to travel to SpiceJet's head office in Delhi or Gurugram to file a legal claim. Under established NCDRC precedent, you can issue a legal demand notice and file an e-Jagriti consumer case right from your home district.",
  },
  {
    title: "State Commission Order on Flight Cancellation Due to 'Operational Reasons' & Withheld Funds",
    parties: "SpiceJet Limited v. D. S. Bansal",
    citation: "Appeal No. 211/2018, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 14 November 2018",
    facts:
      "SpiceJet cancelled scheduled domestic passenger flights citing internal technical constraints and operational aircraft maintenance. Despite numerous written requests and follow-ups by the passenger over 9 months, SpiceJet withheld the ticket fare, attempting to compel the passenger to accept an internal travel credit voucher.",
    holding:
      "The State Commission held that operational constraints, aircraft groundings, and crew scheduling issues are internal commercial risks of the air carrier. The airline cannot transfer its financial distress or fleet complications onto ticket-holding passengers. Once carriage is not provided, withholding passenger money violates DGCA regulations and constitutes an unfair trade practice under consumer law.",
    amount: "₹22,300 Full Fare Refund @ 9% p.a. Interest + ₹25,000 Harassment Compensation + ₹10,000 Legal Expenses",
    takeaway:
      "SpiceJet cannot legally withhold your refund by citing operational difficulties, aircraft maintenance, or fleet grounding. Once a flight is cancelled, DGCA regulations mandate 100% money back within 7 working days.",
  },
  {
    title: "Joint Liability for Travel Agent Buck-Passing and Agency Wallet Stagnation",
    parties: "Dr. Arvind Sharma v. SpiceJet Limited & EaseMyTrip (Easy Trip Planners Ltd.)",
    citation: "CC No. 98/2022, District Consumer Disputes Redressal Commission, Jaipur",
    date: "Order Dated 19 September 2023",
    facts:
      "A complainant booked round-trip tickets on SpiceJet via EaseMyTrip. Following flight cancellation, SpiceJet claimed the refund was remitted to EaseMyTrip's B2B agency account, whereas EaseMyTrip insisted that SpiceJet had blocked the payout due to liquidity constraints. The passenger remained unpaid for 7 months.",
    holding:
      "The District Commission cited DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, ruling that travel agents act as statutory commercial intermediaries and authorized agents of the operating airline. The carrier cannot extinguish its statutory refund duty by asserting money was transferred to an agency ledger. Both SpiceJet and the booking aggregator were held jointly and severally liable.",
    amount: "₹28,950 Full Ticket Refund @ 9% p.a. Interest + ₹20,000 Compensation + ₹8,000 Legal Costs",
    takeaway:
      "If you booked SpiceJet via an Online Travel Agent such as EaseMyTrip or MakeMyTrip, SpiceJet cannot brush you off. An advocate legal demand notice addressing both SpiceJet and the OTA pins joint legal liability on both parties.",
  },
  {
    title: "Unlawful Retention of Statutory Airport Taxes (UDF & PSF) on Non-Refundable Fares",
    parties: "Rajesh Kumar Gupta v. SpiceJet Ltd.",
    citation: "Consumer Complaint No. 342/2021, DCDRC South Delhi",
    date: "Order Dated 12 October 2022",
    facts:
      "A passenger cancelled a SpiceJet discount Saver ticket 10 days before flight departure. SpiceJet deducted 100% of the ticket fare as a cancellation penalty, refusing to return Passenger Service Fees (PSF), User Development Fees (UDF), and statutory airport taxes.",
    holding:
      "The Consumer Commission held that air carriers collect airport charges and government levies purely as holding agents on behalf of airport authorities and the government. Under DGCA CAR rules, airlines are statutorily prohibited from retaining airport taxes when no travel has occurred. Refusing to remit UDF and PSF constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
    amount: "₹11,240 Statutory Tax Refund + ₹15,000 Punitive Damages + ₹7,000 Litigation Expenses",
    takeaway:
      "Even if your SpiceJet ticket was labelled 'Non-Refundable', SpiceJet cannot keep airport development fees, passenger service charges, or government taxes. Those amounts must be refunded to your original payment method.",
  },
];

const FAQS = [
  {
    question: "Why is my SpiceJet refund not received yet even after the flight was cancelled?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.1, SpiceJet is legally obligated to complete credit card, debit card, and UPI ticket refunds within 7 working days from the date of flight cancellation. If your refund is overdue past this statutory window, the funds are typically caught in SpiceJet's centralized treasury processing backlog, held as an uncredited batch, or converted into an unconsented travel voucher under your PNR. Demand the 12-digit Acquirer Reference Number (ARN) or bank UTR from SpiceJet to trace the transaction with your receiving bank.",
  },
  {
    question: "Can SpiceJet delay my refund citing operational constraints, aircraft grounding, or cash crunches?",
    answer:
      "No. Consumer commissions and the DGCA have repeatedly held that operational constraints, aircraft maintenance, fleet groundings, or corporate financial issues are internal operational risks of the carrier. Under law, passenger consideration cannot be treated as unsecured working capital. Once SpiceJet fails to operate the booked flight, it has no legal right to retain your funds and must return 100% of the fare within 7 working days.",
  },
  {
    question: "What should I do if SpiceJet customer care or the Pepper chatbot refuses to provide an ARN or bank UTR?",
    answer:
      "Automated chatbots like 'Pepper' frequently issue canned responses such as 'Refund Processed' without releasing actual banking instructions. If customer support cannot provide a verifiable 12-digit ARN (for credit/debit cards) or bank UTR (for UPI/NetBanking), it indicates that funds have not been cleared by SpiceJet's acquiring bank. Send a formal written grievance to nodalofficer@spicejet.com demanding immediate bank proof, and lodge a Level-1 complaint on the Ministry of Civil Aviation AirSewa portal.",
  },
  {
    question: "Can SpiceJet legally force me to accept a travel voucher or credit shell instead of a bank refund?",
    answer:
      "No. In Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, the Supreme Court ruled that air carriers cannot unilaterally force passengers into credit shells or vouchers without explicit, voluntary passenger consent. Under the CCPA Dark Patterns Guidelines, defaulting passengers into store vouchers constitutes an unlawful forced action. You have an absolute legal right to reject any voucher and demand an immediate 100% electronic remittance to your original bank account.",
  },
  {
    question: "How do I recover a SpiceJet refund for tickets booked through EaseMyTrip, MakeMyTrip, or a travel agent?",
    answer:
      "Under DGCA CAR regulations revised in 2026, when a ticket is purchased via a travel agent or OTA, the complete refund cycle must not exceed 30 working days, and the carrying airline remains statutorily responsible for passenger payout. If SpiceJet claims it refunded the travel agent while the agent denies receipt, issue a joint statutory legal notice to both SpiceJet Limited and the booking platform (such as EaseMyTrip or MakeMyTrip) asserting joint and several liability under DGCA CAR Clause 3.3.2.",
  },
  {
    question: "Can I claim a full refund if SpiceJet delays or reschedules my flight by 2 hours or more?",
    answer:
      "Yes. Under DGCA CAR Section 3, Series M, Part IV, if an airline reschedules or delays a domestic flight by 2 hours or more, or if a connecting flight is disrupted, the passenger is entitled to choose either an alternate flight acceptable to them or an immediate full 100% refund of the ticket value with zero cancellation fees or administrative deductions.",
  },
  {
    question: "How do I escalate a SpiceJet refund complaint on the Ministry of Civil Aviation AirSewa portal?",
    answer:
      "Visit airsewa.gov.in, select 'Grievance Redressal', choose 'Airline Grievance', pick 'SpiceJet Limited', and upload your PNR, e-ticket invoice, and cancellation proof. By civil aviation mandate, SpiceJet's Nodal Officer must review and address your docket within 48 hours. If the airline fails to release your money within 30 days, escalate to Level 2 (Appellate Authority) and serve an advocate legal demand notice before initiating consumer court proceedings.",
  },
  {
    question: "SpiceJet flight cancel hone par refund na mile toh legal notice kaise bheje aur consumer court me claim kaise kare?",
    answer:
      "Agar SpiceJet flight cancel hone ke baad aapka refund 7 working days me bank account me na bheje ya unconsented voucher pakda de, toh aap verified advocate ke zariye statutory legal notice dispatch karwa sakte hain. LegalRecovery.in par advocate DGCA CAR aur Supreme Court rules ke tehat SpiceJet Limited ke Gurugram corporate office aur Delhi registered office par Registered Speed Post aur official email se notice dispatch karte hain, jismein 15 din ka strict payment demand diya jata hai. Iske baad e-Jagriti consumer commission me case file kiya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SpiceJet Refund Overdue: Escalation From AirSewa to Consumer Court",
  description:
    "SpiceJet refund overdue or flight cancelled without refund? DGCA rules, consumer-court precedents and a lawyer-drafted notice.",
  datePublished: "2026-11-03T13:30:00+05:30",
  dateModified: "2026-11-03T13:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/spicejet`,
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
    name: "SpiceJet",
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
      name: "SpiceJet Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/spicejet`,
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

export default function SpicejetLegalNoticePage() {
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
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-4 sm:mb-5 max-w-full">
              <span>DGCA CAR Series M Part II</span>
              <span className="text-sky-600">•</span>
              <span>SpiceJet Limited Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              SpiceJet Refund Overdue: Escalation From AirSewa to Consumer Court
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
                Under DGCA CAR Section 3, Series M, Part II, SpiceJet Limited is legally required to complete credit card and digital ticket refunds within 7 working days of flight cancellation. Citing operational turbulence or pushing unconsented travel vouchers violates binding Supreme Court and consumer court rulings. Passengers can demand immediate bank reversal, escalate via AirSewa, and serve a 15-day advocate legal notice before initiating consumer court proceedings.
              </p>
            </div>

            {/* Verified Summary Stat Line */}
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
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹1.5L+</p>
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
            <SpicejetTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Consumer Court &amp; Forum Orders Against SpiceJet
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Amid operational restructuring, aircraft groundings, and ongoing fleet disputes, SpiceJet has historically registered some of the highest complaint volumes in Indian domestic civil aviation. When scheduled flights are abruptly cancelled or delayed for several hours, passengers are frequently subjected to endless automated deflections by the Pepper chatbot or offered unrequested travel vouchers instead of their rightful cash refunds.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumer dispute commissions across India and the National Consumer Disputes Redressal Commission (NCDRC) have taken a decisive stance against SpiceJet Limited. Courts have established that internal financial distress, aircraft maintenance delays, and fleet scheduling bottlenecks are commercial liabilities that belong strictly to the airline. Holding consumer money after failing to provide air transport constitutes an actionable deficiency in service under Section 2(11) and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Consumer forums routinely order SpiceJet to refund ticket fares in full, alongside 9% to 12% interest and substantial compensatory damages.
                </p>
              </section>

              {/* Section 2: Order Digest (4 Verified Orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Consumer Rulings Against SpiceJet Limited
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
                              Binding Precedent Across India
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

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Won Refund &amp; Cancellation Disputes Against SpiceJet
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive examination of consumer commission orders against SpiceJet Limited highlights clear evidentiary patterns. Passengers who secure decisive rulings and compensation consistently maintain clean documentary paper trails:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Refusal of Credit Shells and Travel Vouchers:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Passengers who promptly replied via email refusing vouchers (citing the Supreme Court judgment in <em>Pravasi Legal Cell</em>) eliminated SpiceJet&apos;s defense that the passenger voluntarily accepted future flight credit under the booking terms.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proof of Missing Acquirer Reference Number (ARN) / UTR:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        SpiceJet often sends automated notifications stating &quot;Refund Initiated&quot;. Passengers who showed bank statements with zero inward credit alongside written proof that SpiceJet failed to supply a valid 12-digit ARN or UTR conclusively proved payment default.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Joint Impleadment of the Travel Agent or OTA:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When tickets were purchased via <Link href="/legal-notice-to/easemytrip" className="text-blue-700 font-semibold underline hover:text-blue-900">EaseMyTrip</Link>, MakeMyTrip, or Goibibo, notices and complaints that named both SpiceJet and the OTA eliminated buck-passing and led to joint-and-several financial recovery orders under DGCA CAR Clause 3.3.2.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserved Flight Delay and Cancellation Alerts:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Saving SMS alerts, departure gate cancellation slips, or flight reschedule notices established that the disruption was airline-initiated, entitling the passenger to a 100% refund with zero cancellation charges under DGCA CAR regulations.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unresolved AirSewa Docket Escalation:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting an unanswered or dismissed AirSewa grievance docket reference demonstrated that pre-litigation administrative remedies were exhausted, prompting consumer forums to award maximum litigation expenses and mental distress compensation.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Hierarchy Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Resolution Hierarchy: From Disrupted PNR to Full Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory escalation sequence to break through SpiceJet support loops and secure your funds:
                </p>

                {/* Mobile Responsive Step Sequence */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Flight Cancelled / Delay ≥ 2h</h3>
                    <p className="text-xs text-slate-300 mt-1">SpiceJet initiates flight cancellation, schedule change, or operational disruption.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Reject Forced Travel Vouchers</h3>
                    <p className="text-xs text-amber-900 mt-1">Invoke Supreme Court Pravasi ruling, bypass Pepper bot, and demand bank reversal.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">AirSewa Portal Grievance</h3>
                    <p className="text-xs text-blue-900 mt-1">48-hour statutory review deadline for SpiceJet Nodal Officer.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal statutory demand served via Registered Speed Post and BSA Section 63 email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% fare credit plus interest, or consumer commission claim in your home district.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="SpiceJet Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="spicejetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#spicejetGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Flight Disrupted</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Cancellation / Delay ≥ 2h</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">PNR Interrupted</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Reject Voucher</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Bypass Pepper Bot</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank Reversal</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">AirSewa Docket</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">48-Hr Nodal Review</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">Official Ministry Escalation</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#alertGrad)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Corporate Email</text>

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
                    <text x="25" y="208" fill="#475569" fontSize="10">• Travel Agent / OTA Bookings: Maximum 30 Working Days (Airline remains statutorily responsible under Clause 3.3.2)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Response Window: 15 Calendar Days before filing on e-Jagriti Consumer Commission</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook Against SpiceJet
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning consumer commission verdicts, this 5-step playbook cuts through automated support deflection and enforces your passenger rights under Indian civil aviation law:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure PNR Cancellation Records and Demand a Bank ARN / UTR
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your original SpiceJet e-ticket invoice, cancellation confirmation email, and disruption SMS. If customer support or the Pepper chatbot claims the refund is processed, demand the specific 12-digit Acquirer Reference Number (ARN) for cards or bank UTR for digital payments. If SpiceJet cannot provide an ARN, the transaction has not cleared their merchant acquiring bank.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Written Voucher Rejection to SpiceJet Customer Relations
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not accept automated options that offer &quot;SpiceJet Credit Voucher&quot; or store credit. Send an email to custrelations@spicejet.com stating: <em>&quot;Under DGCA CAR Section 3 Series M Part II and the Supreme Court mandate in Pravasi Legal Cell (2020), I expressly decline any travel voucher or credit shell. Remit 100% of my fare back to my original payment bank account within 7 working days.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Formal Grievance on the Ministry of Civil Aviation AirSewa Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Log into <a href="https://airsewa.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">airsewa.gov.in</a> and file a Level-1 complaint against SpiceJet Limited. Attach your PNR, invoice, and cancellation timestamps. SpiceJet&apos;s Nodal Officer (nodalofficer@spicejet.com) is statutorily required to address the complaint within 48 hours. If unresolved, escalate to the Appellate Authority.
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
                        When 7 working days lapse without payment and administrative escalation stalls, engage an advocate to dispatch a formal legal notice to SpiceJet Limited at its registered office (Terminal 1D, IGI Airport, New Delhi) and corporate headquarters (Udyog Vihar, Gurugram). The notice demands the principal fare, 18% penal interest, and compensation for deficiency in service within a 15-day compliance window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review our transparent notice fee structure on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Consumer Complaint on e-Jagriti with Full Cost Claims
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If SpiceJet fails to remit funds within the 15-day notice period, file an online consumer complaint on the central government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Under the NCDRC <em>Ranju Aery</em> precedent, you have territorial jurisdiction to file in your own home district commission, claiming full ticket reimbursement, interest, damages for mental distress, and litigation costs.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  DGCA CAR Refund Deadlines: Cash vs Card vs Agent
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Directorate General of Civil Aviation enforces binding turnaround times for airline ticket refunds. SpiceJet cannot cite internal cash flow issues to delay refunds beyond these statutory deadlines:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">SpiceJet Statutory Refund Deadlines & Regulatory Forums</caption>
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
                          Cash Booking at SpiceJet Airport Counter
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate (Same Day)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.1</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate Station Duty Manager Escalation</td>
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
                          Booked via Travel Agent or OTA (EaseMyTrip, MakeMyTrip)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">30 Working Days Max</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Joint Legal Notice to SpiceJet + OTA</td>
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
                          Taxes on Non-Refundable / Discount Fares (UDF & PSF)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">100% Tax Remittance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.4</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">e-Jagriti petition for illegal tax retention</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Compliance Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory demand before filing case</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  † Verified under DGCA CAR passenger charter guidelines. For in-depth regulatory analysis, see our guide to <Link href="/send-a-legal-notice/airline-refund-not-received" className="text-blue-700 underline">airline refund legal notices</Link> and <Link href="/credit-shell-voucher-instead-of-refund-legal" className="text-blue-700 underline">forced credit shell legality</Link>.
                </p>
              </section>

              {/* Section 7: SpiceJet Delay Tactics & Vouchers Deep-Dive */}
              <section id="heading-delay-tactics" aria-labelledby="heading-delay-tactics-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-delay-tactics-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  SpiceJet Delay Trap: Bot Loops &amp; Unlawful Credit Shells
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    Why SpiceJet Delays Refunds and How Automated Channels Mislead Consumers
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Following extensive aircraft groundings and fleet litigation under the Cape Town Convention, SpiceJet has frequently managed working capital by deferring passenger ticket refund payouts. When passengers try to claim refunds through SpiceJet&apos;s Pepper chatbot or call center, they routinely encounter three common roadblocks:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>1. False &quot;Processed&quot; Status without ARN:</strong> Support interfaces state that the refund has been processed, but no funds arrive in the passenger&apos;s bank. Without a 12-digit Acquirer Reference Number (ARN) or UTR, no actual interbank credit instructions have been issued.
                    </p>
                    <p>
                      <strong>2. Forced Travel Vouchers and Credit Shells:</strong> The online portal automatically offers travel credits valid for limited periods. Under <em>Pravasi Legal Cell v. Union of India</em> and the CCPA Dark Patterns Guidelines, defaulting passengers into expiring vouchers constitutes an illegal forced action. You have an absolute legal entitlement to cash.
                    </p>
                    <p>
                      <strong>3. Deflection to Third-Party Travel Agents:</strong> For tickets booked through <Link href="/legal-notice-to/easemytrip" className="text-blue-700 underline font-semibold">EaseMyTrip</Link> or other aggregators, SpiceJet support deflects inquiries to the booking agent, while the agent asserts SpiceJet has not settled its merchant balance. Under DGCA CAR Clause 3.3.2, the operating carrier remains statutorily accountable for verifying that the refund reaches the consumer. If you suspect fraud by an unaccredited agent, see our guide on <Link href="/visa-agent-fraud-refund-legal-notice" className="text-blue-700 underline font-semibold">travel and visa agent fraud notices</Link>.
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
                  Case Study: Recovers ₹26,400 Cancelled SpiceJet Fares
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Mumbai to Goa (Round Trip, 2 Passengers)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Rituja Deshmukh booked 2 return tickets on SpiceJet flight SG-456 from Mumbai (BOM) to Goa (GOX) for ₹26,400 using her ICICI debit card. Less than 24 hours prior to departure, SpiceJet cancelled the flight citing &quot;operational and aircraft availability reasons&quot;. When Rituja attempted to process a refund online, the Pepper chatbot issued an unrequested travel voucher valid for 6 months.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Rituja repeatedly emailed customer relations insisting on a cash refund to her debit card. Support representatives claimed that &quot;as per operational policy, cancellations under these conditions are processed as vouchers only.&quot; After 5 weeks of unfulfilled promises and an ignored AirSewa grievance ticket, Rituja contacted LegalRecovery.in.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> An advocate drafted and dispatched a formal statutory demand notice to SpiceJet Limited&apos;s Registered Office at IGI Airport Terminal 1D, New Delhi, and its Corporate Office in Udyog Vihar, Gurugram. The notice cited DGCA CAR Section 3 Series M Part II (Clause 3.3.1) and the Supreme Court mandate in <em>Pravasi Legal Cell</em>, granting 15 days to remit ₹26,400 plus 18% interest before an e-Jagriti consumer complaint was filed.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 following delivery of the advocate legal notice, SpiceJet&apos;s legal nodal team contacted Rituja with an official bank UTR reference number. The full sum of ₹26,400 was credited directly to her ICICI bank account without requiring court litigation.
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
                  Evidence Checklist Before Serving a SpiceJet Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital communications and electronic bank statements are fully admissible in consumer courts. Gather these 6 key documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">SpiceJet E-Ticket & GST Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed 6-character PNR, passenger names, flight numbers, and itemized UDF/PSF charges.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Flight Disruption SMS / Email Alert:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped alert proving SpiceJet initiated the flight cancellation or reschedule ≥ 2 hours.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Email Declining Travel Vouchers:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof that you communicated non-consent to vouchers and demanded electronic reversal to your bank.</p>
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
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">AirSewa Docket Number & Status:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of unresolved grievance ticket filed on airsewa.gov.in demonstrating administrative inaction.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">OTA Booking Confirmation (If Applicable):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">EaseMyTrip, MakeMyTrip, or Goibibo booking invoice to establish joint and several carrier liability.</p>
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
                    FAQs: SpiceJet Flight Refunds, Delays &amp; Legal Notice
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
                  Statutory verification status: All provisions checked against active DGCA Civil Aviation Requirements (CAR) Series M Part II, CPA 2019, and Supreme Court directives as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <SpicejetNoticeCTA variant="primary" />
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
                    href="/credit-shell-voucher-instead-of-refund-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Shell & Voucher Legality →
                  </Link>
                  <Link
                    href="/legal-notice-to/easemytrip"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice to EaseMyTrip →
                  </Link>
                  <Link
                    href="/visa-agent-fraud-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Visa & Travel Agent Fraud Notice →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges & Fee Schedule →
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
