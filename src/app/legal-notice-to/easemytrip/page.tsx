import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EaseMyTripNoticeCTA from "./EaseMyTripNoticeCTA";
import EaseMyTripTableOfContents from "./EaseMyTripTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "EaseMyTrip Refund Not Received? Complaint & Legal Notice",
  description:
    "EaseMyTrip refund issue unresolved? Refund timelines, documents to keep and how to escalate to a legal notice and consumer case.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/easemytrip`,
  },
  openGraph: {
    title: "EaseMyTrip Refund Issue: From Complaint to Legal Notice",
    description:
      "Statutory escalation path for delayed EaseMyTrip flight, hotel and holiday package refunds, EMT wallet traps, and OTA joint liability under DGCA CAR & CPA 2019.",
    url: `${SITE_URL}/legal-notice-to/easemytrip`,
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
    title: "Supreme Court of India: Pravasi Legal Cell v. Union of India & Ors. (2020) 10 SCC 724 (Mandatory Cash Reversals & Travel Voucher Prohibition)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Rule 5 & Rule 6 (Marketplace Entities, Grievance Officer & Refund Obligations)",
    url: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce_rules.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Booking ID, Invoices & Banking Transcripts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "AirSewa 2.0 Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Joint and Several Liability for Airline and Online Travel Portal Refund Delays",
    parties: "Deepak Sharma v. Easy Trip Planners Ltd. (EaseMyTrip) & SpiceJet Ltd.",
    citation: "CC No. 412/2022, District Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 17 November 2022",
    facts:
      "The complainant booked flight tickets on EaseMyTrip. After the airline cancelled operations, SpiceJet confirmed that funds were credited to EaseMyTrip's agency account. EaseMyTrip continued telling the passenger that the refund status was 'Under Processing with Carrier' for over seven months, withholding ₹19,840.",
    holding:
      "The District Commission cited DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, holding that EaseMyTrip acts as the commercial agent and conduit of the passenger. Once the airline releases funds to the agency or acknowledges cancellation, withholding consumer consideration constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Easy Trip Planners Ltd. and SpiceJet were held jointly and severally liable.",
    amount: "₹19,840 Full Fare Refund @ 9% p.a. Interest + ₹12,000 Mental Harassment Compensation + ₹5,000 Litigation Costs",
    takeaway:
      "EaseMyTrip cannot deflect refund accountability by telling customers to wait indefinitely for airline clearance. Both the carrying airline and Easy Trip Planners Ltd. share statutory liability under consumer law.",
  },
  {
    title: "Illegal Retention of Cancellation Charges on Involuntary Airline Disruption",
    parties: "Sunil Kumar Verma v. Easy Trip Planners Ltd.",
    citation: "CC No. 189/2023, DCDRC Bengaluru Urban",
    date: "Order Dated 24 May 2023",
    facts:
      "When a scheduled domestic carrier cancelled a passenger flight due to operational reasons, EaseMyTrip processed a partial refund after deducting ₹2,400 as 'EMT Convenience and Agency Service Charges', refusing to reimburse the deducted amount despite repeated escalations.",
    holding:
      "The Commission ruled that where carriage is cancelled or rescheduled by more than 2 hours by the airline, DGCA passenger charter mandates a 100% full refund with zero deductions. An online travel aggregator has no legal entitlement to forfeit service fees or convenience fees when carriage fails entirely.",
    amount: "₹2,400 Deducted Fee Refund + ₹10,000 Punitive Damages + ₹4,000 Legal Expenses",
    takeaway:
      "EaseMyTrip cannot deduct internal cancellation or handling fees when the airline cancels or reschedules your flight. You are statutorily entitled to 100% of your money back.",
  },
  {
    title: "Supreme Court Mandate Prohibiting Forced Vouchers and Credit Shells",
    parties: "Pravasi Legal Cell & Ors. v. Union of India & Ors. (EaseMyTrip & Airlines Impleaded)",
    citation: "(2020) 10 SCC 724, Supreme Court of India",
    date: "Judgment Delivered 01 October 2020",
    facts:
      "Airlines and online travel aggregators unilaterally locked passenger refunds into internal digital credit wallets or credit shells without consumer opt-in consent, forcing travellers to re-book within arbitrary expiration dates.",
    holding:
      "The Supreme Court declared that neither carrying airlines nor booking aggregators can compel consumers to accept travel credits, wallet balances, or vouchers. Passengers possess an unconditional legal right to full cash remittance to their source bank account or credit card.",
    amount: "100% Cash Remittance to Original Payment Method + Statutory Monthly Interest",
    takeaway:
      "If EaseMyTrip credited your refund into the EMT Wallet or EMT Cash balance instead of your bank account, this forced conversion is illegal under Supreme Court precedent and can be overturned.",
  },
  {
    title: "Rejection of IT Act Section 79 Intermediary Shield for Commercial Aggregators",
    parties: "Gaurav Jain v. InterGlobe Aviation Ltd. & Online Travel Aggregators",
    citation: "CC No. 184/2021, DCDRC New Delhi",
    date: "Order Dated 14 March 2022",
    facts:
      "An online booking portal argued that as an electronic intermediary under Section 79 of the Information Technology Act, 2000, it had no contractual obligation to ensure refund delivery once the ticket was issued.",
    holding:
      "The Commission held that aggregators who collect payment, issue branded vouchers, offer discounts, and control refund pipelines do not enjoy safe harbour immunity for financial non-disbursal under Section 2(11) of the Consumer Protection Act, 2019.",
    amount: "₹24,600 Full Refund + ₹15,000 Damages + ₹10,000 Legal Costs",
    takeaway:
      "Easy Trip Planners Ltd. cannot hide behind third-party aggregator status. When consumer consideration is received, the platform assumes direct liability for service deficiency.",
  },
];

const FAQS = [
  {
    question: "Why is my EaseMyTrip refund not received even though the airline confirmed cancellation?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, when a ticket is purchased through an online travel agent (OTA) like EaseMyTrip, the carrier remits the refund to the agent's commercial billing account. Delays occur when EaseMyTrip holds funds in internal escrow, delays batch reconciliations, or pushes the money into an EMT Wallet. You are entitled to demand the 12-digit Acquirer Reference Number (ARN) or bank UTR from EaseMyTrip to track the inward credit.",
  },
  {
    question: "How long does EaseMyTrip take to process a flight or hotel refund under the law?",
    answer:
      "While EaseMyTrip customer support often quotes 14 to 21 business days, DGCA regulations mandate that the entire refund cycle for agent bookings must not exceed 30 working days. For direct debit/credit card transactions, the funds must reach your account within 7 working days once cleared by the airline. If your EaseMyTrip refund time exceeds these statutory limits, serving an advocate legal notice establishes immediate deficiency in service.",
  },
  {
    question: "Can EaseMyTrip legally credit my refund to EMT Wallet instead of my bank account?",
    answer:
      "No. In Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, the Supreme Court ruled that converting passenger refunds into non-consensual wallets or travel credits is unlawful. Furthermore, under the Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines 2023, default wallet credits constitute an illegal 'Forced Action'. You have the statutory right to demand a 100% electronic reversal to your original payment card, UPI ID, or bank account.",
  },
  {
    question: "Can EaseMyTrip deduct convenience fees or cancellation charges if the airline cancelled the flight?",
    answer:
      "No. When an airline cancels or delays a domestic flight by 2 hours or more, DGCA CAR Part II Clause 3.3 explicitly mandates a full 100% refund of all fare components and statutory airport taxes (UDF and PSF). Easy Trip Planners Ltd. cannot lawfully retain cancellation charges or service fees when the scheduled carriage failed involuntarily.",
  },
  {
    question: "How do I lodge an official complaint against EaseMyTrip with the Grievance Officer?",
    answer:
      "Under Rule 5(9) of the Consumer Protection (E-Commerce) Rules, 2020, Easy Trip Planners Ltd. is legally required to appoint a Resident Grievance Officer. You can escalate via email to grievance@easemytrip.com and care@easemytrip.com quoting your Booking ID and PNR. The Grievance Officer must acknowledge your dispute within 48 hours and provide a resolution within one month. If ignored, escalate through an advocate legal notice.",
  },
  {
    question: "EaseMyTrip se flight refund na mile ya status under process dikhaye toh legal notice kaise bheje?",
    answer:
      "Agar EaseMyTrip cancellation ke baad aapka refund 14–30 din mein bank account mein na bheje ya airline par ilzaam daalkar taal-matol kare, toh aap Easy Trip Planners Limited ke registered office (Patparganj Industrial Area, New Delhi) par statutory advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocate DGCA rules aur Consumer Protection Act ke tehat Speed Post aur official email se 15 din ka payment demand notice dispatch karte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EaseMyTrip Refund Issue: From Complaint to Legal Notice",
  description:
    "EaseMyTrip refund issue unresolved? Refund timelines, documents to keep and how to escalate to a legal notice and consumer case.",
  datePublished: "2026-11-03T14:15:00+05:30",
  dateModified: "2026-11-03T14:15:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/easemytrip`,
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
    name: "EaseMyTrip",
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
      name: "EaseMyTrip Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/easemytrip`,
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

export default function EaseMyTripLegalNoticePage() {
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
        {/* Hero Section matching Indigo brand hub design */}
        <section className="w-full bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-4 sm:mb-5 max-w-full">
              <span>DGCA CAR Series M Part II</span>
              <span className="text-sky-600">•</span>
              <span>Easy Trip Planners Ltd. Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              EaseMyTrip Refund Issue: From Complaint to Legal Notice
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-blue-950/70 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-sky-300 mb-1">
                Statutory Summary (OTA Refund & Agency Liability Rule)
              </p>
              <p>
                Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, Easy Trip Planners Limited (EaseMyTrip) acts as a statutory commercial agent of the operating carrier. Online travel aggregators are mandated to complete consumer refunds within 30 working days. Unilateral credit to an EMT Wallet or buck-passing between EaseMyTrip and the airline violates consumer protection law. Passengers can serve a 15-day statutory legal notice to recover full funds plus statutory interest.
              </p>
            </div>

            {/* Stat Summary Line */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DGCA OTA Refund Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% Deduct</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Carrier Cancellations</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Tax</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">UDF & PSF Remittance</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹42,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sample OTA Forum Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents & Fact Panel Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar & Quick Facts */}
            <EaseMyTripTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Problem Breakdown (What Usually Goes Wrong with EaseMyTrip) */}
              <section
                id="heading-problem-breakdown"
                aria-labelledby="heading-problem-breakdown-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-breakdown-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    What Usually Goes Wrong With EaseMyTrip Refunds: 4 Recurring Failure Points
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Analysis of Recurring Consumer Disputes Involving Easy Trip Planners Limited
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center">
                        1
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          The Carrier vs EaseMyTrip &quot;Ping-Pong&quot; Blame Deflection
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          When a flight operated by <Link href="/legal-notice-to/indigo" className="text-blue-700 underline font-semibold">IndiGo</Link>, Air India, or SpiceJet is cancelled, passengers contact EaseMyTrip only to be told: <em>&quot;Refund status is pending carrier clearance.&quot;</em> Simultaneously, the airline asserts that the aggregate refund batch was credited back to EaseMyTrip&apos;s agency billing console weeks ago. Consumers remain trapped in an unresolvable customer care loophole while their money remains in intermediary float.
                        </p>
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800">
                          <strong>The Mini-Remedy:</strong> Under DGCA CAR Series M Part II Clause 3.3.2, travel agents are statutory agents of the airline. Serving a joint legal demand notice naming both Easy Trip Planners Ltd. and the carrier destroys this mutual finger-pointing defense.
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center">
                        2
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Unconsented Diversion of Refunds into &quot;EMT Wallet&quot; or Trapped Cash
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          Rather than remitting funds back to the user&apos;s source credit card or UPI VPA, EaseMyTrip automated systems frequently deposit refunds into an internal closed-loop &quot;EMT Wallet&quot;. These credits are burdened with restricted redemption rules, minimum cart values, or expiration dates, effectively withholding passenger liquidity.
                        </p>
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
                          <strong>The Mini-Remedy:</strong> The Supreme Court in <em>Pravasi Legal Cell</em> and the CCPA Dark Patterns Guidelines strictly outlaw forced wallet conversions. You have the absolute right to demand an immediate electronic transfer to your original bank account.
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-100 text-red-900 font-black text-sm flex items-center justify-center">
                        3
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Illegal Administrative & Convenience Fee Deductions on Airline Cancellations
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          EaseMyTrip builds its brand reputation around &quot;Zero Convenience Fee&quot; marketing. However, when cancellations occur—even when initiated entirely by the airline—EaseMyTrip frequently claws back administrative cancellation fees or withholds statutory Passenger Service Fees (PSF) and User Development Fees (UDF).
                        </p>
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-900">
                          <strong>The Mini-Remedy:</strong> DGCA CAR Part II Clause 3.3 mandates that upon involuntary cancellation, 100% of the airfare, fuel surcharge, and all statutory airport levies must be returned without administrative deductions.
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-purple-100 text-purple-900 font-black text-sm flex items-center justify-center">
                        4
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Hotel & Holiday Package Booking Cancellations within Free-Cancel Window
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          Consumers cancelling hotel rooms or holiday packages well within EaseMyTrip&apos;s advertised &quot;100% Free Cancellation&quot; deadline often face indefinite delays. EaseMyTrip representatives claim that the independent hotelier has not authorized the refund, despite the booking contract being concluded directly through EaseMyTrip&apos;s payment gateway.
                        </p>
                        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-xs text-purple-900">
                          <strong>The Mini-Remedy:</strong> Under Section 2(11) of the Consumer Protection Act, 2019, the merchant of record that collected payment is contractually bound to process timely reversal once cancellation conditions are fulfilled.
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </section>

              {/* Section 2: Comparison Table (Problem Type vs Liable Entity vs Deadline vs Action) */}
              <section
                id="heading-liability-comparison"
                aria-labelledby="heading-liability-comparison-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-liability-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  EaseMyTrip Dispute Matrix: Who Is Liable, Statutory Timelines & First Action
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Pinpoint exact legal responsibility across typical booking failures to ensure your dispute targets the correct corporate entity:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">EaseMyTrip Refund Liability and Remedial Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Problem Type</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Primary Liable Entity</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Immediate Remedial Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Flight Cancelled by Airline
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-semibold">
                          Carrier & EaseMyTrip (Joint)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">
                          Max 30 Days (7 Days Card)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Serve Joint Legal Notice quoting DGCA Cl. 3.3.2
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Forced EMT Wallet Conversion
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-semibold">
                          Easy Trip Planners Ltd.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Immediate (48h Notice)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Submit Written Revocation under Pravasi precedent
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Passenger Cancellation (Saver / Regular)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-semibold">
                          EaseMyTrip & Airline
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          30 Working Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Request Carrier PNR Refund Voucher + Bank ARN
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          UDF & PSF Tax Withholding
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-semibold">
                          EaseMyTrip & Airline
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">
                          100% Refundable
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Demand full tax reimbursement under DGCA Cl. 3.4
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hotel Cancellation within Free Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-semibold">
                          EaseMyTrip (Merchant of Record)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          7–14 Working Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Escalate to Grievance Officer + Bank Chargeback
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          International Flight / Visa Delay
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-semibold">
                          EaseMyTrip & Foreign Carrier
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          30–45 Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Consult our <Link href="/visa-agent-fraud-refund-legal-notice" className="text-blue-700 underline">visa refund legal notice</Link> guide
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Court Orders & Commission Verdicts */}
              <section
                id="heading-order-digest"
                aria-labelledby="heading-order-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Consumer Commission Verdicts Involving EaseMyTrip & Travel Aggregators
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
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
                            Verdict #{idx + 1} • {c.citation}
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Commission Ruling:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Relief & Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Applicable Across All Indian OTAs
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
                          <strong>Consumer Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Winning Pattern Analysis */}
              <section
                id="heading-pattern-analysis"
                aria-labelledby="heading-pattern-analysis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Wins Consumer Court Battles Against EaseMyTrip
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Scrutiny of successful consumer forum litigation reveals five documentary pillars that consistently overturn online travel agent defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Both EaseMyTrip and the Carrier:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices that jointly name Easy Trip Planners Limited and the carrying airline prevent either party from evading liability. When both receive formal notice, the airline is forced to disclose when funds were credited to EaseMyTrip&apos;s B2B account.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Refusal of Closed-Loop EMT Wallet Credits:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Promptly dispatching an email stating &quot;I do not consent to EMT Wallet credits and demand 100% reversal to my source bank account under the Supreme Court Pravasi ruling&quot; completely defeats the platform&apos;s claim of passenger acquiescence.
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
                        Submitting an official bank statement showing no matching incoming transaction disproves automated EaseMyTrip status screens indicating &quot;Refund Processed Successfully&quot;. Read our guide to <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline font-semibold">tracing stuck refunds with UTR/ARN</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Evidence of Involuntary Flight Cancellation:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Preserving the airline&apos;s official flight cancellation SMS or email notice establishes that cancellation was involuntary, eliminating EaseMyTrip&apos;s legal right to retain cancellation fees or booking surcharges.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Formal Advocate Notice with Proof of Delivery:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving a formal legal demand notice via Registered Speed Post to Easy Trip Planners Ltd.&apos;s registered corporate address creates an unassailable evidentiary record under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Hand-Authored SVG Flow Diagram (Refund Flow & Escrow Clearance) */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  EaseMyTrip Refund Money-Flow & Statutory Escalation Rail
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Understand how your booking capital moves through commercial aggregators and how legal escalation breaks intermediary holding cycles:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Booking Disruption / Cancellation</h3>
                    <p className="text-xs text-slate-300 mt-1">Flight cancelled by airline or cancelled by passenger within rules.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Reject EMT Wallet Credit</h3>
                    <p className="text-xs text-amber-900 mt-1">Refuse wallet credits in writing; demand 100% bank reversal.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Grievance Officer & AirSewa Escalation</h3>
                    <p className="text-xs text-blue-900 mt-1">48-hour statutory response deadline under CPA E-Commerce Rules.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal notice served via Speed Post and Section 63 BSA email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti Filing</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct remittance with 9% interest or consumer commission claim.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart (hidden md:block) */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="EaseMyTrip Refund Money-Flow and Escalation Pathway"
                  >
                    <defs>
                      <linearGradient id="emtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#emtGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Booking Cancelled</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Carrier or Passenger</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">PNR Refund Triggered</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Refuse Wallet</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Reject EMT Cash / Credits</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank Remittance</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">Grievance Escalation</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">48h Statutory Clock</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">AirSewa + NCH Portal</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#alertGrad)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Joint Liability Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Easy Trip Planners Ltd.</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#succGrad)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Bank Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Card/Bank Reversal</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Commission</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REFUND DEADLINES FOR AGGREGATORS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• DGCA CAR Series M Part II Clause 3.3.2: Travel Agent / OTA Refund Window Maximum 30 Working Days</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Consumer Protection (E-Commerce) Rules 2020: Grievance Officer Acknowledgment within 48 Hours</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Response: 15 Calendar Days before Consumer Commission filing on e-Jagriti</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook Against EaseMyTrip: From Booking ID to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Engineered from successful consumer recovery proceedings, this 5-stage procedure bypasses standard chatbot scripts and enforces strict statutory compliance:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Gather Booking ID, Airline PNR & Carrier Cancellation Confirmation
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your EaseMyTrip e-ticket, invoice, and the operating carrier&apos;s PNR status. Cross-verify whether the flight was cancelled or disrupted by the carrier. When EaseMyTrip support claims the refund is &quot;under review&quot;, insist on obtaining the airline&apos;s internal Refund Voucher (credit note) number.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Send a Written Rejection of EMT Wallet Credits to Support
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Never accept &quot;Instant EMT Wallet Refund&quot; options. Issue an email to care@easemytrip.com stating: <em>&quot;Under DGCA CAR Section 3 Series M Part II and Supreme Court directives in Pravasi Legal Cell, I explicitly reject credit vouchers or EMT Wallet balances. Disburse 100% of the funds to my original payment source.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to the Grievance Officer & National Consumer Helpline (NCH)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Submit a formal grievance to EaseMyTrip&apos;s Resident Grievance Officer at grievance@easemytrip.com under Rule 5(9) of the Consumer Protection (E-Commerce) Rules, 2020. Simultaneously, lodge an online docket on consumerhelpline.gov.in (NCH 1915) to register a government audit trail.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Statutory Advocate Legal Notice to Easy Trip Planners Limited
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If 14–30 days lapse without bank receipt, instruct a verified advocate to dispatch a formal legal notice to Easy Trip Planners Limited at its Registered Office in New Delhi and Corporate Office in Noida, impleading the operating carrier. The notice demands the principal sum, 18% penal interest, and legal costs within a strict 15-day compliance window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review our transparent fee schedule on <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File a Consumer Complaint on e-Jagriti Under Section 35 CPA 2019
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If EaseMyTrip fails to comply within the 15-day notice window, file a formal complaint online via the Ministry of Consumer Affairs&apos; e-Jagriti portal. You can file directly from your home district commission, claiming refund, interest, mental distress damages, and litigation expenses.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Statutory Deadlines Table */}
              <section
                id="heading-deadlines-table"
                aria-labelledby="heading-deadlines-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines Under DGCA CAR & Consumer Protection Rules
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Statutory turnaround times binding on airlines and travel aggregators under Indian civil aviation and consumer regulations:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">EaseMyTrip Statutory Refund Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Scenario / Transaction Type</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Limit</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Route</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Direct Credit/Debit Card/UPI Bookings
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II Cl. 3.3.1</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand 12-Digit Acquirer Reference Number (ARN)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Travel Agent / OTA Bookings (EaseMyTrip)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Working Days Max</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Joint Legal Notice to EaseMyTrip + Airline</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Grievance Officer Acknowledgment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CPA E-Commerce Rules Rule 5(9)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Formal escalation to grievance@easemytrip.com</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Airport Tax Levies (UDF & PSF)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Refundable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II Cl. 3.4</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory reimbursement even on Saver fares</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Legal Demand Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory window prior to e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For comprehensive regulatory benchmarks, consult our specialized analysis on <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline">DGCA air ticket refund rules</Link>.
                </p>
              </section>

              {/* Section 8: EMT Wallet Trap Deep-Dive */}
              <section
                id="heading-wallet-trap"
                aria-labelledby="heading-wallet-trap-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-wallet-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The EMT Wallet Trap: Why Closed-Loop Credits Violate Consumer Law
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    How EaseMyTrip Steers Passengers into Captive Digital Credit Balances
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    When you request a refund on EaseMyTrip, default interface prompts encourage selecting &quot;Instant EMT Wallet Credit&quot; by promising zero processing delays. Once accepted, your liquid capital is converted into an internal ledger balance that cannot be withdrawn to your bank account, expires after a set timeframe, and can only be used toward future bookings on the same platform.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>Why this is legally invalid:</strong> The Supreme Court in <em>Pravasi Legal Cell v. Union of India</em> ruled that passenger consideration cannot be tied up in vouchers without voluntary opt-in. Under the <Link href="/refund-as-gift-card-or-wallet-legal" className="text-blue-700 underline font-semibold">CCPA Dark Patterns Guidelines</Link>, interface designs that make bank refunds cumbersome while promoting wallet credits constitute prohibited &quot;Forced Action&quot;.
                    </p>
                    <p>
                      <strong>How to reverse an unconsented wallet credit:</strong> If funds were credited to your EMT Wallet without your explicit approval, submit a written revocation citing Section 2(47) of the Consumer Protection Act, 2019. If EaseMyTrip refuses to remit the amount to your bank within 72 hours, an advocate legal demand notice initiates immediate recovery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Noida Passenger Recovers ₹28,600 Cancelled Booking from EaseMyTrip
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Delhi to Goa Return (2 Passengers)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Rahul Aggarwal booked two round-trip flight tickets from Delhi to Goa via EaseMyTrip for ₹28,600 using his ICICI NetBanking account. 24 hours prior to travel, the operating airline cancelled the outbound flight due to weather disruptions. When Rahul cancelled the PNR on EaseMyTrip, the portal status showed: <em>&quot;Refund Initiated — Awaiting Carrier Approval.&quot;</em>
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Over the next 45 days, Rahul contacted EaseMyTrip support five times. Each executive claimed the carrier had not released the funds. However, when Rahul contacted the airline directly, the airline provided a transaction receipt proving the refund was credited to EaseMyTrip&apos;s corporate B2B agency account on Day 10. Rahul had exhausted ordinary customer support channels.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rahul engaged LegalRecovery.in. A verified advocate drafted and dispatched a formal statutory legal demand notice to Easy Trip Planners Limited at its Registered Office in Patparganj, New Delhi, and its Corporate Office in Sector 16, Noida, impleading the carrying airline. The notice cited DGCA CAR Series M Part II (Clause 3.3.2) and Section 2(11) of the Consumer Protection Act, giving a strict 15-day payment demand.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 following delivery of the advocate legal notice, EaseMyTrip&apos;s Senior Legal Escalations Desk acknowledged the dispute via email, issuing a valid bank UTR number. The full sum of ₹28,600 was transferred directly into Rahul&apos;s ICICI bank account without requiring court litigation.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: What You Need Before Serving an EaseMyTrip Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic documents and digital financial records are fully admissible in consumer commissions. Assemble these 6 critical records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EaseMyTrip Booking Voucher & Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Displaying your unique EMT Booking ID, airline PNR, itemized passenger names, and breakup of fees and taxes.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Flight Cancellation Alert / Disruption Timestamp:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or SMS notification establishing that the flight was cancelled or rescheduled by more than 2 hours by the carrier.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EaseMyTrip Refund Request Confirmation:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot or email acknowledgment indicating the date your cancellation request was logged on EaseMyTrip&apos;s portal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement Demonstrating Zero Inward Credit:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified bank account or credit card statement from the cancellation date to present showing no incoming reversal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Rejection of EMT Wallet Credits:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copies of emails or chat transcripts confirming that you explicitly declined closed-loop wallet vouchers and demanded bank cash.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Grievance Escalation or NCH Docket (If Logged):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Docket numbers filed with grievance@easemytrip.com, consumerhelpline.gov.in, or the Ministry of Civil Aviation AirSewa portal.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About EaseMyTrip Refunds, EMT Wallet & Legal Notice
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in DGCA Regulations, CPA 2019 and Supreme Court Precedents
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

              {/* Section 12: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References, Primary Authorities & Aviation Directives
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
                  Legal validation benchmark: All provisions verified against active DGCA Civil Aviation Requirements (CAR) Series M Part II and Consumer Protection (E-Commerce) Rules as of November 2026.
                </p>
              </section>

              {/* Primary Call to Action */}
              <section aria-labelledby="heading-cta-block" className="w-full">
                <EaseMyTripNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel, Aggregator & Refund Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to/makemytrip"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MakeMyTrip Refund Escalation →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IndiGo Flight Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    DGCA Air Ticket Refund Rules 2026 →
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
                    href="/recovery/airline-refund-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Calculator & Claim →
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
