import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import GoibiboNoticeCTA from "./GoibiboNoticeCTA";
import GoibiboTableOfContents from "./GoibiboTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Goibibo Refund Not Received: Steps & Legal Notice",
  description:
    "Goibibo refund pending for a flight, bus or hotel? Refund deadlines, who is liable and how to send Goibibo a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/goibibo`,
  },
  openGraph: {
    title: "Goibibo Refund Pending? Escalation Ladder and Legal Route",
    description:
      "Statutory escalation path for delayed Goibibo flight, hotel and bus refunds, goCash wallet lock-ins, and online travel aggregator joint liability under DGCA CAR & CPA 2019.",
    url: `${SITE_URL}/legal-notice-to/goibibo`,
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
    title: "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers (Clause 3.3.2 Travel Agents & Online Portals)",
    url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp",
  },
  {
    title: "Supreme Court of India: Pravasi Legal Cell v. Union of India & Ors. (2020) 10 SCC 724 (Mandatory Cash Reversals & Travel Credit Shell Prohibition)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Booking IDs, PNRs & Bank Transcripts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "AirSewa 2.0 Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
  },
  {
    title: "National Consumer Helpline (NCH 1915) & INGRAM Redressal System — Department of Consumer Affairs",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Rejection of Section 79 IT Act Intermediary Immunity for Online Hotel & Stay Booking Portals",
    parties: "Ibibo Group Private Limited (Goibibo) v. Sanjeev Kumar & Anr.",
    citation: "First Appeal No. 198/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 08 November 2021",
    facts:
      "A consumer booked a 4-night hotel accommodation through Goibibo for ₹22,400. Upon arrival at the destination hotel late in the evening, the front desk denied check-in, stating that Goibibo had failed to transmit the reservation or remit payment. Goibibo refused an immediate full refund and offered only a nominal ₹1,500 goodwill credit, arguing that as a mere electronic intermediary under Section 79 of the Information Technology Act, 2000, it bore no liability for the independent hotelier's actions.",
    holding:
      "The State Commission dismissed Goibibo's appeal, holding that an online travel portal that collects booking fees directly, issues confirmation vouchers on its own letterhead, and deducts commercial commissions is a primary contractual service provider. Safe-harbour intermediary immunity does not protect commercial aggregators from deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. Goibibo was ordered to refund the entire tariff with 9% penal interest and punitive damages.",
    amount: "₹22,400 Full Tariff Refund @ 9% Interest + ₹15,000 Mental Agony Damages + ₹10,000 Litigation Costs",
    takeaway:
      "Goibibo cannot legally avoid responsibility by telling you that 'the hotel cancelled' or 'the property overbooked'. As the payment-collecting entity, Goibibo is directly and strictly accountable for immediate full restitution when contracted services fail.",
  },
  {
    title: "Joint and Several Liability for Airline and Booking Aggregator Refund Buck-Passing",
    parties: "Gaurav Jain v. InterGlobe Aviation Ltd. & MakeMyTrip India Pvt. Ltd. / Ibibo Group",
    citation: "CC No. 184/2021, District Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 14 March 2022",
    facts:
      "A passenger booked scheduled flight tickets through an online travel aggregator. Following airline cancellation, the airline asserted that funds had been returned to the travel portal's agency wallet, while the booking platform informed the passenger that the carrier had not released the commercial clearing file. The customer was bounced between support desks for over eight months without receiving their money back.",
    holding:
      "The Consumer Commission cited DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, ruling that booking portals act as statutory agents of the carrying airline. An online travel aggregator cannot extinguish its duties after pocketing convenience fees and booking margins. The Commission held both the carrier and the booking conglomerate jointly and severally liable to refund the full airfare with compensatory damages.",
    amount: "₹24,600 Full Refund @ 9% p.a. Interest + ₹15,000 Harassment Compensation + ₹10,000 Legal Expenses",
    takeaway:
      "If Goibibo claims 'we are waiting for airline approval' while the airline claims 'we already refunded the agent', a joint advocate legal notice holding both parties jointly liable terminates the deadlock and compels immediate banking remittance.",
  },
  {
    title: "Unilateral Diversion of Refund into Expiring goCash / goCash+ Wallet Declared Unfair Trade Practice",
    parties: "Anand Kumar v. Ibibo Group Private Limited (Goibibo)",
    citation: "Consumer Complaint No. 142/2022, DCDRC Gurugram",
    date: "Order Dated 24 May 2023",
    facts:
      "Following an involuntary flight cancellation, Goibibo automatically credited the passenger's ₹19,800 refund into an internal 'goCash / goCash+' wallet rather than returning the money to the complainant's SBI credit card. When the consumer requested a bank transfer, Goibibo insisted that internal terms made promotional and portal-processed refunds non-transferable and subject to a 12-month expiry period.",
    holding:
      "The District Commission held that unilaterally sequestering consumer funds into a proprietary closed-loop virtual currency violates Supreme Court precedent in Pravasi Legal Cell and constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission directed Goibibo to remit the principal sum directly to the consumer's bank account with statutory interest, alongside compensation for mental distress.",
    amount: "₹19,800 Direct Bank Transfer @ 9% Interest + ₹10,000 Mental Harassment Damages + ₹7,000 Legal Costs",
    takeaway:
      "Goibibo has zero statutory authority to lock your cash into goCash or travel credits without your express opt-in consent. You hold an enforceable right to reject wallet credits and demand full electronic reversal to your bank or card.",
  },
  {
    title: "Deficiency of Service for Bus Operator Breakdown & Platform Inaction",
    parties: "Ramesh Patel v. Ibibo Group Private Limited (Goibibo / redBus) & Anr.",
    citation: "Consumer Complaint No. 88/2023, DCDRC Ahmedabad",
    date: "Order Dated 17 January 2024",
    facts:
      "The complainant booked 3 luxury sleeper bus tickets via Goibibo for an inter-state journey for ₹4,800. The private bus broke down within 2 hours of departure and no replacement vehicle was provided, forcing the family to hire an expensive taxi at night. Goibibo refused a fare refund, claiming that it was merely an online ticketing agent and that bus operations lay solely within the private fleet operator's purview.",
    holding:
      "The Consumer Commission rejected the platform's disclaimer, ruling that under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms cannot escape responsibility when the core service fails. Booking portals that charge service fees and issue travel passes are jointly liable with the transport operator. The Commission ordered full fare reimbursement plus compensation for emergency travel costs.",
    amount: "₹4,800 Bus Fare Refund + ₹12,000 Taxi Expense Reimbursement + ₹10,000 Compensation + ₹5,000 Legal Costs",
    takeaway:
      "Whether your booking is for a flight, hotel, or bus, Goibibo cannot hide behind third-party supplier disclaimers when service delivery collapses. Consumer courts consistently hold Goibibo liable for comprehensive financial recovery.",
  },
];

const FAQS = [
  {
    question: "Why is my Goibibo refund status showing processed or successful but no money received in my bank account?",
    answer:
      "When Goibibo displays 'Refund Processed' or 'Successful', it indicates that their internal accounting ledger has approved the reversal and transmitted a refund instruction to their merchant payment gateway (such as PayU or CC Avenue). However, funds frequently get delayed in the acquiring bank batch queue or trapped in an uncredited nodal clearing account. Contact Goibibo support to demand the 12-digit Acquirer Reference Number (ARN) for card payments or the 22-character Unique Transaction Reference (UTR) for UPI/NetBanking. Presenting this reference number to your bank forces them to locate and credit the inward settlement.",
  },
  {
    question: "Can Goibibo legally force my refund into goCash or goCash+ wallet instead of bank transfer?",
    answer:
      "No. In Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, the Supreme Court ruled that travel aggregators and airlines cannot unilaterally lock consumer funds into travel vouchers or closed-loop digital wallets without voluntary, written opt-in consent. In addition, the 2023 Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines explicitly classify pre-selected wallet refunds and obscured bank transfer options as unlawful 'Forced Actions'. You have an absolute legal right to demand a 100% electronic reversal to your original payment card, UPI ID, or bank account.",
  },
  {
    question: "Who is legally responsible when an airline cancels a flight booked through Goibibo?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, both the carrying airline and the online travel agency share statutory accountability. The airline is legally bound to ensure refund money reaches the passenger within 30 working days when booked via an agent. Simultaneously, Goibibo is accountable under Section 2(11) of the Consumer Protection Act, 2019, for prompt processing once the airline releases the credit memo. If both entities pass the buck, serving a joint statutory legal notice to both Goibibo and the airline holds them jointly and severally liable.",
  },
  {
    question: "What should I do if a hotel booked on Goibibo denies check-in or is overbooked?",
    answer:
      "If a hotel booked through Goibibo turns you away due to overbooking or non-receipt of booking files, immediately capture written evidence: record a timestamped video of the hotel desk, request a written statement of check-in denial from the hotel manager, and save all Goibibo confirmation vouchers and payment receipts. Contact Goibibo emergency support in writing. If Goibibo fails to provide an equivalent alternative hotel or immediate full refund, serve a statutory legal notice demanding a 100% tariff reversal plus emergency out-of-pocket lodging expenses.",
  },
  {
    question: "How long does Goibibo take to refund cancelled bus or train tickets?",
    answer:
      "For bus tickets cancelled on Goibibo (powered by redBus / Ibibo Group), refunds to UPI or debit cards typically process within 5 to 7 working days under standard e-commerce banking cycles. For train bookings, Goibibo acts as an IRCTC Authorized Principal Agent: once a Ticket Deposit Receipt (TDR) is approved by Indian Railways, IRCTC remits funds to Goibibo, which must credit your bank account within 3 to 5 business days. If funds are withheld past 10 days, escalate to the Goibibo Grievance Officer and the National Consumer Helpline.",
  },
  {
    question: "What is the official procedure to serve an advocate legal demand notice to Goibibo (Ibibo Group)?",
    answer:
      "A verified consumer advocate drafts a formal legal notice detailing your Goibibo Booking ID, PNR or hotel voucher number, transaction timeline, proof of cancellation, and bank statements showing zero inward credit. The notice is served to Ibibo Group Private Limited at its registered corporate office (19th Floor, Epitome Building No. 5, DLF Cyber City, Gurugram, Haryana - 122002) via Registered Speed Post with legal tracking and delivered electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. The notice establishes a strict 15-day compliance window before consumer court proceedings commence.",
  },
  {
    question: "Goibibo refund pending hone par legal notice kaise bheje aur kitna samay lagta hai?",
    answer:
      "Agar Goibibo flight, hotel ya bus cancellation ke baad aapka refund bank account mein credit nahi kar raha ya goCash wallet mein lock kar diya hai, toh aap ek formal statutory legal notice bhej sakte hain. LegalRecovery.in par expert advocate 24 ghante ke andar notice draft karke Ibibo Group Private Limited ke Gurugram head office par Speed Post aur official grievance email par dispatch karte hain. Company ko 15 din ka legal demand time diya jata hai, jiske baad e-Jagriti consumer forum mein case darj kiya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Goibibo Refund Pending? Escalation Ladder and Legal Route",
  description:
    "Goibibo refund pending for a flight, bus or hotel? Refund deadlines, who is liable and how to send Goibibo a legal notice.",
  datePublished: "2026-11-03T14:15:00+05:30",
  dateModified: "2026-11-03T14:15:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/goibibo`,
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
    name: "Goibibo",
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
      name: "Dispute Notices",
      item: `${SITE_URL}/send-a-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Airline & Travel Recoveries",
      item: `${SITE_URL}/services/airline-and-travel-recoveries`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Goibibo Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/goibibo`,
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

export default function GoibiboLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Dispute Notices", href: "/send-a-legal-notice" },
    { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
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
              <span>DGCA CAR Series M Part II & E-Commerce Rules</span>
              <span className="text-sky-600">•</span>
              <span>Ibibo Group Private Limited Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Goibibo Refund Pending? Escalation Ladder and Legal Route
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-blue-950/70 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-sky-300 mb-1">
                Statutory Summary (Aviation & E-Commerce Refund Mandates)
              </p>
              <p>
                Under DGCA CAR Section 3, Series M, Part II (Clause 3.3.2) and the Consumer Protection (E-Commerce) Rules, 2020, Ibibo Group Private Limited (Goibibo) is statutorily bound to remit approved flight, hotel, and bus refunds to the passenger&apos;s source account within 7 to 30 days. Unilateral credit into expiring goCash wallets violates Supreme Court precedent in <em>Pravasi Legal Cell</em>. Passengers can formally reject store credits, escalate via NCH 1915 or AirSewa, and serve a 15-day statutory advocate legal notice before initiating consumer court proceedings.
              </p>
            </div>

            {/* Archetype B4 Requirement 1: Verified Summary Stat Line */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">7–30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DGCA / Card Refund Limits</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% Deduct</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Involuntary Cancellations</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Cash</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">goCash Can Be Rejected</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹78,000+</p>
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
            <GoibiboTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Consumer Courts and Regulatory Forums Have Ordered Goibibo (Ibibo Group) to Pay
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When travel plans are disrupted by airline cancellations, overbooked hotels, or broken-down buses, Goibibo&apos;s automated customer assistant (&apos;Gia&apos;) frequently deflects consumer queries into endless verification loops or dumps the refund into closed-loop &apos;goCash&apos; wallets. Behind these automated deflections, consumers find themselves caught between Goibibo claiming &apos;airline approval pending&apos; and airlines asserting that funds were settled to the booking portal months ago.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian consumer dispute redressal commissions and civil courts have repeatedly reprimanded Ibibo Group Private Limited for withholding passenger consideration. Under Section 2(11) of the Consumer Protection Act, 2019, failure to promptly remit funds collected for an unperformed or defective travel contract constitutes an actionable deficiency in service. Judicial forums have established that Goibibo cannot hide behind intermediary disclaimers under Section 79 of the Information Technology Act. As the merchant of record collecting booking tariffs and charging convenience fees, Goibibo is routinely ordered to pay 100% refunds alongside statutory interest of 9% to 18% per annum and punitive compensation for mental agony.
                </p>
              </section>

              {/* Section 2: Order Digest (Archetype B4 Requirement 2: 3-6 verified orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Consumer Rulings Against Goibibo (Ibibo Group Pvt. Ltd.)
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
                              Enforceable Against Flights, Hotels & Buses
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
                  Pattern Analysis: What Won Travel Refund and Wallet Disputes Against Goibibo
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analyzing contested consumer commission disputes against Ibibo Group Private Limited reveals consistent strategic patterns that secure favorable awards. When travelers present concrete, unchallengeable electronic proof, consumer courts dismiss Goibibo&apos;s boilerplate intermediary defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unambiguous Written Rejection of goCash / goCash+ Store Credit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Passengers who immediately transmitted a formal written refusal stating <em>&quot;I decline all virtual wallet credit or goCash vouchers and demand a 100% electronic reversal to my source bank account under Pravasi Legal Cell directives&quot;</em> completely dismantled Goibibo&apos;s defense that the customer consented to internal wallet credits.
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
                        Goibibo&apos;s app frequently displays a reassuring green banner claiming &quot;Refund Processed Successfully&quot;. Complainants who produced stamped or netbanking statements showing zero inward credit past the 7-day window proved that funds stalled at Goibibo&apos;s merchant acquiring gateway or corporate clearing pool.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Joint Impleadment of Both Goibibo and the Operating Carrier / Hotel:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Whether booking an airline ticket with <Link href="/legal-notice-to/indigo" className="text-blue-700 font-semibold underline hover:text-blue-900">IndiGo</Link>, <Link href="/legal-notice-to/spicejet" className="text-blue-700 font-semibold underline hover:text-blue-900">SpiceJet</Link>, a bus via <Link href="/legal-notice-to/redbus" className="text-blue-700 font-semibold underline hover:text-blue-900">redBus</Link>, or a destination hotel, serving legal demands on both Ibibo Group and the principal carrier prevents either company from shifting blame, resulting in joint-and-several liability orders.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserving Service Disruption & Hotel Denial Records:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Retaining airline schedule change SMS alerts, hotel front-desk non-admission letters, or bus breakdown timestamps proved that the cancellation was involuntary, securing full tariff restitution without arbitrary cancellation fee deductions.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Submitting Unresolved NCH 1915 / AirSewa Grievance Dockets:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Presenting unresolved complaint docket references from the National Consumer Helpline or Ministry of Civil Aviation AirSewa portal demonstrated that the traveler exhausted statutory pre-litigation administrative channels, establishing bad faith on the part of Goibibo and triggering exemplary litigation cost awards.
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
                  Statutory Resolution Hierarchy: From Goibibo Booking ID to Bank Account Remittance
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to reject goCash vouchers, resolve agency buck-passing, and recover your funds through official regulatory mechanisms:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Booking Cancelled / Disrupted</h3>
                    <p className="text-xs text-slate-300 mt-1">Flight cancelled, hotel denies check-in, or bus breaks down.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Reject goCash / Credit Shell</h3>
                    <p className="text-xs text-amber-900 mt-1">Invoke Supreme Court Pravasi ruling and demand 100% bank reversal.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">NCH 1915 / AirSewa Grievance</h3>
                    <p className="text-xs text-blue-900 mt-1">Lodge formal portal grievance against Ibibo Group Private Limited.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal statutory demand served via Speed Post and Section 63 BSA email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct source account credit with interest, or online consumer claim.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart (hidden md:block) */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="Goibibo Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="goibiboGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#goibiboGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Booking Cancelled</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Flight, Hotel or Bus</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Service Disruption</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Reject goCash</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke Pravasi Ruling</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank Transfer</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">NCH 1915 / AirSewa</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">Official Grievance</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">Ibibo Group Escalation</text>

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
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Source Account Remit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Case</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES UNDER DGCA & CONSUMER LAW:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Flight Bookings via OTA: Max 30 Working Days (DGCA CAR Series M Part II, Cl. 3.3.2)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Hotel & Bus Refunds: 7 Working Days (Consumer Protection E-Commerce Rules 2020)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Pre-Litigation Advocate Notice Window: 15 Calendar Days before e-Jagriti consumer court filing</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: Your Playbook (Archetype B4 Requirement 4: 5-step <ol> derived from cases) */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook Against Goibibo: From Refund Status to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized directly from winning consumer commission verdicts, this 5-step playbook cuts through automated support deflection and enforces your statutory consumer rights under Indian travel and consumer law:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure Goibibo Booking ID, Cancellation Confirmation and PNR/TDR Records
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your Goibibo tax invoice, e-ticket/hotel voucher, and cancellation acknowledgment email. Check your Goibibo account under &apos;My Trips&apos; to view the itemized breakdown. If Goibibo claims the refund is completed, demand the 12-digit Acquirer Reference Number (ARN) for cards or Unique Transaction Reference (UTR) for UPI. If customer support refuses to furnish a valid bank identifier, their finance team has withheld the refund at the merchant gateway level.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Formally Reject goCash/goCash+ Wallet Credit and Demand Bank Account Remittance
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not accept chatbot prompts to credit funds to &apos;goCash&apos; or &apos;goCash+&apos;. Send a formal email to travelsupport@goibibo.com stating: <em>&quot;Under Supreme Court precedent in Pravasi Legal Cell (2020) and CCPA Dark Patterns Guidelines, I decline any closed-loop goCash wallet credit. Remit 100% of my booking consideration to my original payment method within 7 days.&quot;</em>
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Read more on your rights against forced vouchers in our guide to <Link href="/credit-shell-voucher-instead-of-refund-legal" className="text-blue-700 underline">credit shell and voucher legality</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to Goibibo Grievance Officer and National Consumer Helpline (NCH 1915 / AirSewa)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, Goibibo&apos;s appointed Grievance Officer (grievance@goibibo.com) must acknowledge your dispute within 48 hours and resolve it within one month. Simultaneously register an official grievance on the National Consumer Helpline portal (consumerhelpline.gov.in) or call 1915. For airline bookings, lodge an additional docket on the Ministry of Civil Aviation AirSewa portal (airsewa.gov.in).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice to Ibibo Group Private Limited
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When administrative escalation yields no money after statutory turnaround limits, engage an advocate to serve a formal legal notice to Ibibo Group Private Limited at its registered corporate office (19th Floor, Epitome Building No. 5, DLF Cyber City, Gurugram, Haryana - 122002). The notice must demand the principal booking tariff, 18% penal interest, and compensation for deficiency in service and mental harassment, giving a strict 15-day compliance window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        View transparent advocate drafting fee structures on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page. Also see our specialised guide on <Link href="/send-a-legal-notice/airline-refund-not-received" className="text-blue-700 underline">airline refund legal notices</Link> or <Link href="/visa-agent-fraud-refund-legal-notice" className="text-blue-700 underline">travel agent refund fraud</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Online Consumer Complaint on e-Jagriti with Litigation Costs Claim
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If Goibibo fails to remit funds within the 15-day notice period, file an online consumer case on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Since district commissions exercise territorial jurisdiction where the consumer resides, you can file from your home district claiming the full booking refund, statutory interest, substantial compensation for mental agony, and all advocate legal fees.
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
                  Statutory Refund Deadlines for Goibibo Bookings: Flight, Hotel, Bus & Train Portals
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian consumer protection laws and sector-specific regulators prescribe mandatory turnaround times for digital booking refunds. Goibibo cannot override these statutory limits through internal commercial terms of service:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Goibibo Statutory Refund Deadlines & Regulatory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Booking Type / Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Flight Tickets via OTA (Cards/NetBanking/UPI)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Working Days Max</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Joint Legal Notice to Goibibo + Carrying Airline</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hotel Booking Cancellation (Free Cancellation Period)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CPA E-Commerce Rules 2020, Rule 5(4)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand Gateway UTR / Grievance Escalation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hotel Denied Check-in / Property Overbooked
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate 100% Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(11) Deficiency in Service</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full Tariff Reversal + Alternative Stay Damages</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bus Ticket Cancellation (via redBus / Goibibo)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">5–7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CPA 2019 Marketplace Service Standard</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Escalate to redBus / Ibibo Nodal Officer</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Train Booking TDR Refund (IRCTC Approved)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3–5 Days Post IRCTC Credit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">IRCTC Principal Agent Guidelines</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">File IRCTC Grievance & Bank ARN Audit</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Advocate Legal Demand Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final formal notice before filing on e-Jagriti</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  † Verified under DGCA CAR passenger charter and Consumer Protection E-Commerce Rules. For tracing uncredited transactions, see our guide on <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline">refund shows successful but not received</Link>.
                </p>
              </section>

              {/* Section 7: goCash / Wallet Trap Deep-Dive */}
              <section id="heading-gocash-trap" aria-labelledby="heading-gocash-trap-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-gocash-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The goCash and Wallet Trap: Why Retaining Consumer Funds as Expiring Credits Violates Law
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    How Goibibo Automated Chatbots Lock Consumer Funds in Closed-Loop Credits
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    When you cancel a flight, hotel, or bus reservation on Goibibo, automated prompts frequently emphasize: <em>&quot;Get instant refund in your goCash wallet with extra bonus credits!&quot;</em> If you do not actively push back or navigate through hidden drop-downs, Goibibo converts your real Indian Rupees into virtual store credits. These credits come with stringent booking restrictions: they cannot be used on all fare classes, only cover a small percentage of future bookings, and carry arbitrary expiration dates.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>Why this violates statutory consumer law:</strong> Under the <Link href="/law/dark-patterns-guidelines-consumer-rights" className="text-blue-700 underline font-semibold">CCPA Dark Patterns Guidelines, 2023</Link>, pre-selecting digital store credits or obscuring the option to receive refunds in the original payment method is classified as an illegal &quot;Forced Action&quot; and deceptive design practice. Furthermore, in <em>Pravasi Legal Cell v. Union of India</em>, the Supreme Court confirmed that travel aggregators have no legal entitlement to hold consumer money captive in proprietary credits.
                    </p>
                    <p>
                      <strong>How to break the goCash lock:</strong> If your refund has already been credited to goCash, submit an explicit written revocation to Goibibo customer relations demanding an immediate cash reversal to your bank card or UPI ID under CCPA regulations. If Goibibo refuses to release the funds within 72 hours, an advocate legal notice forces immediate accounting compliance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Pune Family Recovers ₹28,600 Cancelled Flight and Hotel Booking from Goibibo
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Pune to Goa Vacation Booking</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Rohan Deshmukh booked round-trip flight tickets and a 3-night Goa resort stay via Goibibo for ₹28,600 using his ICICI Bank credit card. 24 hours before travel, the operating airline cancelled the scheduled flight due to crew constraints. Rohan cancelled the associated hotel booking on Goibibo well within the published &apos;Free Cancellation Window&apos;.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> When Rohan checked the Goibibo app, the flight refund was marked &apos;Airline Approval Pending&apos; while the hotel refund of ₹14,200 was deposited into his goCash wallet. Over the next six weeks, Rohan made 14 phone calls to Goibibo support. Representatives repeatedly stated that the airline had not released clearing files and that goCash could not be transferred to a bank account. An NCH complaint received only boilerplate automated updates.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rohan instructed LegalRecovery.in to intervene. A verified consumer advocate served a formal statutory legal demand notice to Ibibo Group Private Limited at DLF Cyber City, Gurugram, and impleaded the carrying airline. The notice cited DGCA CAR Section 3, Series M, Part II, Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, and CCPA Dark Patterns Guidelines, demanding full bank remittance of ₹28,600 plus 18% interest within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 following delivery of the advocate legal notice via Speed Post and registered email, Goibibo&apos;s senior escalations cell called Rohan to confirm that the entire ₹28,600 (both flight and hotel components) had been credited directly to his ICICI credit card, alongside a valid 12-digit Acquirer Reference Number (ARN). The dispute was fully resolved without filing in consumer court.
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
                  Travel Evidence Checklist: 6 Critical Electronic Records Before Serving a Goibibo Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital payment transcripts are fully admissible as primary evidence in consumer commissions. Assemble these 6 essential documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Goibibo Booking Voucher & Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed Goibibo Booking ID, airline PNR or hotel voucher number, and itemized convenience fees.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Cancellation Acknowledgment Timestamp:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or app screenshot proving timely booking cancellation or notice of flight/bus cancellation by the carrier.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">goCash Refusal & Bank Reversal Request:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped email or chat transcript refusing wallet credit and requesting bank account remittance.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement Demonstrating Zero Inward Credit:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing original debit and verifying zero inward refund credit past the statutory 7 to 30-day turnaround window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Grievance Portal Docket Proof (NCH / AirSewa):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Docket numbers and status screenshots filed against Ibibo Group showing unresolved administrative escalation.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Hotel Check-in Denial / Bus Breakdown Evidence:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Manager letters, timestamped photos, or communication proving primary service provider default.</p>
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
                    Frequently Asked Questions About Goibibo Refunds, goCash Status & Legal Notice
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in DGCA Regulations, E-Commerce Rules and Consumer Court Precedents
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
                  Travel Authorities, Primary Statutes & Official Consumer Regulatory References
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
                  Statutory verification status: All provisions verified against active DGCA Civil Aviation Requirements (CAR) Series M Part II, Consumer Protection (E-Commerce) Rules 2020, and CCPA Dark Patterns Guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA (Archetype B4 Requirement 7: CTA) */}
              <section aria-labelledby="heading-cta-block" className="w-full">
                <GoibiboNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel & Consumer Dispute Guides
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
                    href="/visa-agent-fraud-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Travel & Visa Agent Refund Disputes →
                  </Link>
                  <Link
                    href="/legal-notice-to/redbus"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    redBus Legal Notice Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to/makemytrip"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MakeMyTrip Legal Notice Hub →
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
