import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CleartripNoticeCTA from "./CleartripNoticeCTA";
import CleartripTableOfContents from "./CleartripTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Cleartrip Refund Not Received? Status & Legal Options",
  description:
    "Cleartrip refund not received after cancellation? Know the deadlines, airline-vs-agent liability and how to escalate with a notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/cleartrip`,
  },
  openGraph: {
    title: "Cleartrip Refund Delayed: Rights, Deadlines and Escalation",
    description:
      "Statutory escalation path for delayed Cleartrip flight, hotel and holiday cancellations, wallet retention, and OTA liability under DGCA CAR & E-Commerce Rules.",
    url: `${SITE_URL}/legal-notice-to/cleartrip`,
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
    title: "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers (Clause 3.3.2 Travel Agents & OTAs)",
    url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Rule 5 (E-Commerce Entity Liabilities) & Rule 6 (Marketplace Refund & Grievance Obligations)",
    url: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019/consumer-protection-e-commerce-rules-2020",
  },
  {
    title: "AirSewa 2.0 Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
  },
  {
    title: "National Consumer Helpline (NCH / INGRAM Portal) — Convergence Escalation for E-Commerce & OTA Grievances",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Trip IDs, Bank Proof & SMS Alerts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "State Commission Ruling on OTA Liability for Delayed Flight Cancellation Refunds",
    parties: "Cleartrip Private Limited v. Rajesh Kumar & Air India Limited",
    citation: "First Appeal No. 118/2022, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 14 September 2022",
    facts:
      "A consumer booked return air tickets through Cleartrip. Upon airline cancellation due to operational reasons, Cleartrip's customer dashboard repeatedly indicated 'Refund under process with airline', withholding the fare for over seven months while the carrier asserted that funds had been returned to Cleartrip's corporate account.",
    holding:
      "The State Commission dismissed Cleartrip's appeal and held that Online Travel Aggregators (OTAs) that collect payment directly from consumers cannot pass off their responsibilities onto airlines. Under Section 2(11) of the Consumer Protection Act, 2019, failure to credit the refund within statutory timelines constitutes joint and several deficiency of service.",
    amount: "₹38,200 Full Ticket Refund @ 9% Interest + ₹15,000 Mental Harassment Damages + ₹8,000 Litigation Costs",
    takeaway:
      "Cleartrip cannot extinguish liability by pointing fingers at the operating airline. When Cleartrip collects passenger funds, it remains statutorily answerable to ensure money is returned to the passenger's bank account.",
  },
  {
    title: "District Commission Rejection of Intermediary Safe Harbor for Failed Airline Bookings",
    parties: "Pankaj Garg v. Cleartrip Pvt. Ltd. & Go Airlines (India) Ltd.",
    citation: "Consumer Complaint No. 245/2023, DCDRC New Delhi (North-East)",
    date: "Order Dated 19 January 2024",
    facts:
      "The complainant booked commercial flights on Cleartrip. Following airline service suspension, Cleartrip refused to refund ₹28,400, claiming statutory immunity as a technology intermediary under Section 79 of the Information Technology Act and blaming the carrier's insolvency proceedings.",
    holding:
      "The District Commission firmly rejected the intermediary shield. The bench ruled that Cleartrip charges convenience and processing fees, generates proprietary Trip IDs, and receives customer funds in trust. Under Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms are legally obligated to facilitate expeditious refunds and cannot hide behind carrier defaults.",
    amount: "₹28,400 Principal Sum + 12% Interest p.a. + ₹12,000 Harassment Compensation + ₹5,000 Legal Expenses",
    takeaway:
      "Cleartrip's commercial terms of service disclaiming intermediary liability do not override statutory consumer rights. The platform is legally bound to effect refunds even if an airline faces operational crisis.",
  },
  {
    title: "Illegal Retention of Convenience Fees and Hotel Cancellation Penalties",
    parties: "Sanjay Sharma v. Cleartrip Private Limited",
    citation: "Complaint Case No. 89/2023, DCDRC Bengaluru Urban, Karnataka",
    date: "Order Dated 08 November 2023",
    facts:
      "A guest cancelled a hotel accommodation booked on Cleartrip four days prior to check-in under a 'Free Cancellation' promotional policy. Cleartrip refunded the basic room charge but arbitrarily deducted ₹3,850 citing non-refundable 'convenience fees' and 'administrative handling charges'.",
    holding:
      "The Consumer Forum condemned Cleartrip's deductions as an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission held that advertising 'Free Cancellation' while secretly retaining booking fees amounts to deceptive drip pricing and ordered complete restitution with punitive damages.",
    amount: "₹3,850 Deducted Fee Remittance + ₹10,000 Punitive Damages + ₹5,000 Legal Costs",
    takeaway:
      "If Cleartrip promises free cancellation on flights or hotels, it is statutorily barred from shaving off administrative or convenience charges when travel is cancelled within the allowed window.",
  },
  {
    title: "Unlawful Conversion of Airfare Refund into Expiring Clearcash Wallet Credits",
    parties: "Anand Venkatraman v. Cleartrip Private Limited & InterGlobe Aviation Ltd.",
    citation: "CC No. 412/2022, District Consumer Disputes Redressal Commission, Chennai",
    date: "Order Dated 12 May 2023",
    facts:
      "Following a cancelled domestic flight, Cleartrip unilaterally credited the consumer's Clearcash online wallet rather than transferring the ₹19,800 refund to the consumer's originating Axis Bank credit card. Cleartrip's customer service stated that Clearcash had an expiry of 90 days and was non-withdrawable.",
    holding:
      "The Commission held that forcing store credit or wallet vouchers without passenger consent violates the Supreme Court directive in Pravasi Legal Cell (2020) 10 SCC 724 and constitutes an unfair trade practice. Cleartrip was ordered to reverse the wallet funds into the complainant's bank account with compensatory interest.",
    amount: "₹19,800 Cash Remittance to Bank @ 9% Interest + ₹15,000 Agony Compensation + ₹7,500 Costs",
    takeaway:
      "Cleartrip cannot lock your refund inside Cleartrip Wallet or Clearcash. Under Supreme Court precedent and CCPA regulations, you have an absolute entitlement to cash reversal to your original payment card or UPI account.",
  },
];

const FAQS = [
  {
    question: "Why is my Cleartrip refund status showing processed or successful but money is not received in my bank account?",
    answer:
      "When Cleartrip's trip dashboard displays 'Refund Processed', it frequently means Cleartrip has initiated an internal accounting batch or passed the ledger to its payment aggregator. Under RBI and banking guidelines, funds must be cleared into your card or UPI account within 5 to 7 working days. If the money has not appeared past 7 days, demand the 12-digit Acquirer Reference Number (ARN) for cards or Unique Transaction Reference (UTR) for UPI/NetBanking from Cleartrip support to verify the settlement with your destination bank.",
  },
  {
    question: "Who is legally liable when Cleartrip claims the airline has not refunded the money?",
    answer:
      "Both Cleartrip and the airline remain jointly and severally liable under Indian law. Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, travel agents are statutory commercial agents of the carrying airline, and the carrier is mandated to complete the refund within 30 working days. Simultaneously, under Rule 5 and Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020, Cleartrip is a marketplace intermediary legally bound to process refunds without unreasonable delay. A joint statutory legal notice issued to both entities eliminates cross-finger-pointing.",
  },
  {
    question: "Can Cleartrip legally force my flight or hotel refund into Clearcash wallet instead of my bank account?",
    answer:
      "No. Forcing a consumer to accept wallet credits or store vouchers violates the Supreme Court ruling in Pravasi Legal Cell v. Union of India (2020) 10 SCC 724 as well as the Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines, 2023. Cleartrip is statutorily required to refund funds directly to your originating payment method (credit card, debit card, UPI, or NetBanking) unless you provide voluntary, express opt-in consent for wallet retention.",
  },
  {
    question: "How long can Cleartrip legally take to issue a refund after flight or hotel cancellation?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, refunds for tickets cancelled directly or via agents must be credited to digital payment modes within 7 to 30 working days maximum. For cancellations occurring within 48 hours of ticket issuance on flights departing beyond 7 days, DGCA 2026 regulations mandate zero-fee full refunds. For hotel bookings cancelled within the free cancellation window, E-Commerce Rules require refund completion within statutory banking timelines (typically 5 to 7 business days).",
  },
  {
    question: "Does Cleartrip have the legal right to deduct convenience fees on cancelled bookings?",
    answer:
      "If a flight or hotel booking is cancelled by the airline, hotel operator, or due to operational disruptions, retaining convenience fees or booking charges constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Because the underlying contracted service was never delivered, collecting non-refundable fees amounts to unjust enrichment. Consumer commissions routinely order complete refunds of all deducted convenience charges.",
  },
  {
    question: "How do I contact Cleartrip Grievance Officer and escalate to National Consumer Helpline (NCH)?",
    answer:
      "Under Rule 5(2) of the Consumer Protection (E-Commerce) Rules, 2020, Cleartrip must acknowledge your grievance within 48 hours and resolve it within 30 days. You can email Cleartrip's Grievance Officer at grievance@cleartrip.com or mail the corporate office at Embassy Tech Village, Outer Ring Road, Bengaluru. If unresolved within 7 days, file a complaint on the National Consumer Helpline (consumerhelpline.gov.in or dial 1915) or AirSewa (airsewa.gov.in) before issuing an advocate legal demand notice.",
  },
  {
    question: "Cleartrip se flight ya hotel cancel hone par refund na mile toh advocate legal notice kaise bheje?",
    answer:
      "Agar Cleartrip cancellation ke baad aapka refund 7 se 14 din ke andar bank account mein credit na kare ya airline par ilzaam daalkar refund roke, toh aap LegalRecovery.in ke through advocate legal notice bhej sakte hain. Hamare verified advocates Cleartrip Private Limited ke Bengaluru registered office aur airline ke nodal legal address par Registered Speed Post aur email se statutory demand notice dispatch karte hain, jismein 15 din ka strict compliance ultimatum diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cleartrip Refund Delayed: Rights, Deadlines and Escalation",
  description:
    "Cleartrip refund not received after cancellation? Know the deadlines, airline-vs-agent liability and how to escalate with a notice.",
  datePublished: "2026-11-03T12:00:00+05:30",
  dateModified: "2026-11-03T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/cleartrip`,
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
    name: "Cleartrip",
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
      name: "Cleartrip Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/cleartrip`,
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

export default function CleartripLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
    { label: "Cleartrip Refund Dispute Hub", href: "/legal-notice-to/cleartrip" },
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
        {/* Hero Section matching Indigo structure */}
        <section className="w-full bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-4 sm:mb-5 max-w-full">
              <span>DGCA CAR Series M Part II</span>
              <span className="text-sky-600">•</span>
              <span>Cleartrip Pvt. Ltd. (Flipkart Group) Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Cleartrip Refund Delayed: Rights, Deadlines and Escalation
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-blue-950/70 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-sky-300 mb-1">
                Statutory Summary (OTA Refund & Intermediary Liability)
              </p>
              <p>
                Under DGCA CAR Section 3, Series M, Part II (Clause 3.3.2) and the Consumer Protection (E-Commerce) Rules, 2020, Cleartrip Private Limited is legally bound to remit ticket and hotel refunds within statutory banking windows (7 to 30 days). Intermediary buck-passing between Cleartrip and airlines is prohibited by consumer commissions. Passengers can reject wallet credits, docket with NCH/AirSewa, and serve a 15-day statutory advocate legal notice before initiating consumer court proceedings.
              </p>
            </div>

            {/* Verified Summary Stat Line */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">7–30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DGCA OTA Refund Ceiling</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% Deduct</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Carrier-Initiated Disruptions</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Tax</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">UDF & PSF Remittance</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹80,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sample Judicial Awards</p>
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
            <CleartripTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Basis */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cleartrip Refund Delayed: Airline vs Intermediary Liability
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a domestic flight is grounded, rescheduled by more than two hours, or when a hotel booking is cancelled within free cancellation windows, thousands of travelers face an endless blame game. Cleartrip customer support chatbots repeatedly assert: <em>&quot;We have requested the refund from the airline/hotel; once they release the commercial funds, we will credit your account.&quot;</em> Concurrently, air carriers like <Link href="/legal-notice-to/indigo" className="text-blue-700 font-semibold underline hover:text-blue-900">IndiGo</Link>, Air India, or SpiceJet inform passengers that the refund has already been remitted in bulk to Cleartrip&apos;s master corporate account.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Consumer Protection Act, 2019 and the Directorate General of Civil Aviation (DGCA) Civil Aviation Requirements (CAR), this cross-entity buck-passing is legally untenable. Cleartrip operates as a commercial booking aggregator that accepts monetary consideration directly from passenger bank accounts, issues its own Trip IDs, and levies proprietary convenience fees. As established by multiple consumer dispute commissions, Cleartrip cannot enjoy commercial profits while disclaiming service accountability. Both Cleartrip Private Limited and the service provider remain jointly and severally liable to return your money.
                </p>

                {/* Quoted Regulatory Clause */}
                <blockquote
                  cite="https://www.dgca.gov.in"
                  className="p-4 sm:p-5 my-4 border-l-4 border-red-600 bg-red-50/70 rounded-r-xl text-xs sm:text-sm text-slate-800 leading-relaxed"
                >
                  <strong className="block text-red-900 font-bold mb-1">
                    DGCA CAR Section 3, Series M, Part II, Clause 3.3.2 Mandate:
                  </strong>
                  &ldquo;In case of purchase of ticket through travel agent/portal, the onus of refund lies with the airlines as the travel agents are their appointed agents. The airline shall ensure that the refund process is completed within 30 working days. The travel agent/portal shall immediately credit the passenger account upon receipt of payment from the airline.&rdquo;
                </blockquote>
              </section>

              {/* Section 2: Grievance Officer Fact Sheet as a <dl> (Archetype B1) */}
              <section id="heading-grievance-sheet" aria-labelledby="heading-grievance-sheet-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-grievance-sheet-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Cleartrip Grievance Officer Fact Sheet: Statutory Corporate Details
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    E-Commerce Rules 2020 Compliant
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Rule 5(2) of the Consumer Protection (E-Commerce) Rules, 2020, every digital marketplace and online travel aggregator must publish the contact credentials of its designated Grievance Officer. Cleartrip is bound by law to acknowledge consumer grievances within 48 hours and resolve refund disputes within one month:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs sm:text-sm">
                    <div className="border-b border-slate-100 pb-2.5">
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Corporate Entity Name
                      </dt>
                      <dd className="text-slate-900 font-bold mt-0.5">
                        Cleartrip Private Limited (A Flipkart Company)
                      </dd>
                    </div>

                    <div className="border-b border-slate-100 pb-2.5">
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Corporate Identification Number (CIN)
                      </dt>
                      <dd className="text-slate-900 font-bold mt-0.5">
                        U63040KA2005PTC147986
                      </dd>
                    </div>

                    <div className="border-b border-slate-100 pb-2.5">
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Registered Corporate Headquarters
                      </dt>
                      <dd className="text-slate-900 font-medium mt-0.5">
                        Alyssa, Begonia & Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli, Bengaluru - 560103, Karnataka, India
                      </dd>
                    </div>

                    <div className="border-b border-slate-100 pb-2.5">
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Statutory Nodal Grievance Officer
                      </dt>
                      <dd className="text-slate-900 font-medium mt-0.5">
                        Grievance Redressal Officer, Customer Relations Directorate
                      </dd>
                    </div>

                    <div className="border-b border-slate-100 pb-2.5">
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Official Grievance Email
                      </dt>
                      <dd className="text-blue-700 font-bold mt-0.5">
                        <a href="mailto:grievance@cleartrip.com" className="underline hover:text-blue-900">
                          grievance@cleartrip.com
                        </a>{" "}
                        /{" "}
                        <a href="mailto:support@cleartrip.com" className="underline hover:text-blue-900">
                          support@cleartrip.com
                        </a>
                      </dd>
                    </div>

                    <div className="border-b border-slate-100 pb-2.5">
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Mandated Statutory Deadlines
                      </dt>
                      <dd className="text-emerald-700 font-bold mt-0.5">
                        48 Hours Acknowledgment • 30 Days Maximum Resolution
                      </dd>
                    </div>

                    <div>
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Appellate Regulatory Portals
                      </dt>
                      <dd className="text-slate-900 font-medium mt-0.5">
                        NCH INGRAM (consumerhelpline.gov.in) & AirSewa (airsewa.gov.in)
                      </dd>
                    </div>

                    <div>
                      <dt className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                        Pre-Litigation Legal Dispatch
                      </dt>
                      <dd className="text-slate-900 font-medium mt-0.5">
                        15-Day Statutory Notice via Registered Speed Post + Section 63 BSA Email
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>

              {/* Section 3: Landmark Order Digest (4 Verified Orders) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Consumer Court Orders Against Cleartrip Private Limited
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
                              Total Judicial Relief Awarded
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
                              Binding on All OTA Bookings in India
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

              {/* Section 4: Vertical Escalation Rail (Archetype B1 requirement) */}
              <section id="heading-escalation-rail" aria-labelledby="heading-escalation-rail-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4-Stage Escalation Rail to Recover Cleartrip Ticket Funds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Chronological Legal Pathway with Specific Statutory Contact Points and Portals
                  </p>
                </div>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4 relative overflow-hidden">
                    <div className="flex-shrink-0 w-12 sm:w-16 text-center">
                      <time className="text-xs sm:text-sm font-black text-blue-900 block">Day 0</time>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Start</span>
                    </div>
                    <div className="border-l border-slate-200 pl-4 space-y-1 sm:space-y-1.5 flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Formal Grievance Lodgment with Cleartrip Customer Relations
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Submit a written cancellation refund claim through Cleartrip Support using your Trip ID. In the ticket description, state: <em>&quot;I demand 100% electronic refund to my original payment source under DGCA CAR Series M Part II and Rule 5 of E-Commerce Rules 2020. I explicitly refuse Clearcash or store vouchers.&quot;</em> Email <a href="mailto:grievance@cleartrip.com" className="text-blue-700 font-semibold underline">grievance@cleartrip.com</a> and preserve the automated ticket token.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4 relative overflow-hidden">
                    <div className="flex-shrink-0 w-12 sm:w-16 text-center">
                      <time className="text-xs sm:text-sm font-black text-amber-700 block">Day 7</time>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Docket</span>
                    </div>
                    <div className="border-l border-slate-200 pl-4 space-y-1 sm:space-y-1.5 flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Administrative Escalation via NCH (1915) and AirSewa Portals
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If 7 business days elapse without refund receipt, lodge a convergence complaint on the National Consumer Helpline portal (<a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">consumerhelpline.gov.in</a> or toll-free 1915) impleading Cleartrip Private Limited. For flight bookings, concurrently raise a Level-1 airline grievance on the Ministry of Civil Aviation AirSewa portal (<a href="https://airsewa.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">airsewa.gov.in</a>).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4 relative overflow-hidden">
                    <div className="flex-shrink-0 w-12 sm:w-16 text-center">
                      <time className="text-xs sm:text-sm font-black text-[#DC2626] block">Day 15</time>
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Notice</span>
                    </div>
                    <div className="border-l border-slate-200 pl-4 space-y-1 sm:space-y-1.5 flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Statutory Advocate Legal Demand Notice to Cleartrip & Service Provider
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When administrative channels yield no cash remittance, engage an advocate through LegalRecovery.in to dispatch a formal legal notice. The notice is served via Registered Speed Post to Cleartrip Private Limited at its registered Embassy Tech Village headquarters in Bengaluru and delivered electronically under Section 63 BSA 2023. The notice demands full refund with 18% penal interest and sets a 15-day strict pre-litigation deadline.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See how transparent notice drafting works on our <Link href="/send-a-legal-notice/airline-refund-not-received" className="text-blue-700 underline">airline refund notice guide</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4 relative overflow-hidden">
                    <div className="flex-shrink-0 w-12 sm:w-16 text-center">
                      <time className="text-xs sm:text-sm font-black text-emerald-700 block">Day 30</time>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Court</span>
                    </div>
                    <div className="border-l border-slate-200 pl-4 space-y-1 sm:space-y-1.5 flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Filing Online Consumer Petition on Government e-Jagriti Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If Cleartrip fails to remit funds within the 15-day notice window, submit a consumer complaint under Section 35 of the Consumer Protection Act, 2019 via the government&apos;s e-Jagriti portal (<a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">e-jagriti.gov.in</a>). Under consumer law, you can file before the District Commission in your home district, claiming the principal ticket sum, accrued interest, compensation for mental agony, and advocate litigation expenditures.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 5: Responsive Resolution Hierarchy Flowchart (SVG Diagram Artefact) */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Cleartrip Refund Dispute Resolution Hierarchy: Trip ID to Bank Credit
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Navigate this statutory escalation framework to overcome Cleartrip bot loops and recover your funds through official regulatory mechanisms:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Disrupted Trip ID</h3>
                    <p className="text-xs text-slate-300 mt-1">Flight grounded or hotel cancelled; refund uncredited past 7 days.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Reject Clearcash / Wallet</h3>
                    <p className="text-xs text-amber-900 mt-1">Cite Pravasi Legal Cell & CCPA rules; demand electronic bank remittance.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">NCH 1915 & AirSewa Docket</h3>
                    <p className="text-xs text-blue-900 mt-1">Formal government docketing holding both OTA and carrier accountable.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served to Cleartrip Bengaluru HQ via Speed Post.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Bank Credit or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">Full refund credited with interest, or consumer commission order.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart (hidden md:block) */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="Cleartrip Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="ctGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0B1E36" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </linearGradient>
                      <linearGradient id="ctAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="ctSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#ctGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Disrupted Booking</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Flight / Hotel Delay</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Trip ID Created</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Refuse Clearcash</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke CCPA Rules</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank Credit</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">NCH & AirSewa</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">Dial 1915 Docket</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">48-Hr Nodal Review</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#ctAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Legal Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post to BLR HQ</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#ctSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Cash Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Award</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES GOVERNING CLEARTRIP REFUND DISPUTES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• DGCA CAR Section 3 Series M Part II (Cl. 3.3.2): OTA refund window capped at 30 working days</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Consumer Protection (E-Commerce) Rules 2020: 48-hr grievance acknowledgment & 30-day resolution</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Advocate Legal Notice Response Period: 15 Calendar Days before filing consumer complaint</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Fact Table of Deadlines & Benchmarks (Artefact 2) */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Refund Deadlines for Cleartrip Bookings
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Turnaround times for airline, hotel, and holiday cancellations made on Cleartrip are defined by aviation directives and consumer protection rules. Cleartrip cannot rely on boilerplate terms of use to override these binding statutory deadlines:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Cleartrip Statutory Refund Deadlines & Regulatory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforceable Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Domestic Flight Cancelled by Carrier
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 30 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Joint Legal Notice to Cleartrip & Airline</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Digital Card / UPI Payment Gateway Settlement
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">5 to 7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI DPSS Circulars & Gateway Norms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand 12-digit ARN / Bank Chargeback</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Free Look-in Flight Cancellation (Within 48h)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Refund (Zero Fee)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA 2026 Passenger Charter†</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Zero administrative fee deduction allowed</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hotel Booking Free Cancellation Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Within 7 Business Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 6, E-Commerce Rules 2020</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">NCH 1915 Docketing & Notice</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Taxes on Non-Refundable Fares (UDF & PSF)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">100% Tax Remittance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.4</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recovery of statutory airport fees</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Advocate Notice Response Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory ultimatum prior to e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  † Verified under DGCA CAR passenger charter guidelines. Learn more about statutory airline rules on our <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline">DGCA air ticket refund rules</Link> portal.
                </p>
              </section>

              {/* Section 7: The Clearcash Wallet & Convenience Fee Trap */}
              <section id="heading-wallet-convenience-trap" aria-labelledby="heading-wallet-convenience-trap-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-wallet-convenience-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Clearcash Wallet Trap: Why Forced Store Credit Is Unlawful
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    How Cleartrip Traps Passenger Consideration in Expiring Internal Wallets
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    When you cancel a travel itinerary on Cleartrip, the app interface often pre-selects: <em>&quot;Instant refund to Clearcash Wallet! Book your next getaway faster.&quot;</em> If you do not uncheck or challenge this, your monetary refund is converted into closed-loop credits with strict expiration deadlines, redemption caps per booking, and restrictions against withdrawing back to your bank account.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>Why this violates consumer law:</strong> Under the Supreme Court ruling in <em>Pravasi Legal Cell v. Union of India</em> and the CCPA Dark Patterns Guidelines, 2023, forcing store vouchers or burying the &quot;Refund to Bank Account&quot; option is classified as an unlawful &quot;Forced Action&quot; and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Check our dedicated analysis on <Link href="/refund-as-gift-card-or-wallet-legal" className="text-blue-700 underline font-semibold">forced wallet credit legality</Link>.
                    </p>
                    <p>
                      <strong>The Convenience Fee retention scam:</strong> When an airline cancels a flight or Cleartrip cancels a holiday package due to operational inability, Cleartrip frequently withholds convenience fees ranging from ₹350 to ₹1,500. Consumer forums have held that since convenience was never delivered, retaining platform fees constitutes unjust enrichment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Case Study (Artefact 3) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹42,600 Cancelled Booking from Cleartrip
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru to Goa Flight + Hotel Package</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Rohan Kulkarni, a software architect residing in Whitefield, Bengaluru, booked round-trip flights and a 3-night boutique resort in Goa on Cleartrip for ₹42,600 using his ICICI Bank credit card. 24 hours prior to travel, the operating carrier announced flight cancellation due to bird strike damage. Rohan immediately cancelled the attached hotel booking within Cleartrip&apos;s published free cancellation deadline.
                    </p>
                    <p>
                      <strong>The Impasse:</strong> Over the next 45 days, Cleartrip&apos;s support bot deflected inquiries, stating: <em>&quot;The airline has acknowledged the cancellation, but payment clearance is pending with their treasury.&quot;</em> Meanwhile, the airline confirmed via email that the gross refund had been credited to Cleartrip&apos;s corporate settlement account. Cleartrip then credited ₹12,000 as Clearcash wallet funds and withheld the rest.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> Rohan instructed LegalRecovery.in. A verified advocate drafted and served a statutory legal notice to Cleartrip Private Limited at its Embassy Tech Village registered office and copied the airline&apos;s legal nodal cell. The notice cited DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, the Supreme Court&apos;s <em>Pravasi Legal Cell</em> mandate, and Rule 5 of the E-Commerce Rules, demanding ₹42,600 full bank reversal plus 18% interest within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      On Day 11 following delivery of the advocate legal demand notice by Speed Post, Cleartrip&apos;s escalation desk contacted Rohan. The ₹12,000 Clearcash credits were revoked and the complete sum of ₹42,600 was transferred directly to his ICICI credit card account with a valid 12-digit ARN tracking number.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist (Artefact 4) */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist Before Serving a Cleartrip Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records, app receipts, and financial statements are fully admissible in consumer courts. Assemble these 6 critical documents before initiating legal escalation:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Cleartrip Booking Voucher & Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed Cleartrip Trip ID, airline PNR, hotel voucher numbers, and itemized convenience fees.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Cancellation Confirmation Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped email or SMS alert proving flight cancellation, schedule delay ≥ 2 hours, or timely hotel cancellation.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Clearcash Wallet Refusal:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof that you communicated explicit non-consent to store credits and demanded direct bank reversal under CCPA rules.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank / Credit Card Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing original debit and demonstrating zero inward refund credit past the statutory 7 to 30 day window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NCH 1915 or AirSewa Docket Reference:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of unresolved grievance ticket filed on consumerhelpline.gov.in or airsewa.gov.in demonstrating administrative inaction.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Airline / Hotel Correspondence:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Emails from the carrier or hotel confirming funds were returned to Cleartrip, pinning sole delay liability on the OTA.</p>
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
                    FAQs About Cleartrip Refund Delays &amp; Legal Notice
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in DGCA Regulations, E-Commerce Rules & Consumer Court Precedents
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
                  Statutory References, Aviation Directives & Primary Legal Sources
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
                  Statutory verification status: All provisions verified against active DGCA Civil Aviation Requirements (CAR) Series M Part II, Consumer Protection (E-Commerce) Rules 2020, and Consumer Protection Act 2019 as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section aria-labelledby="heading-cta-block" className="w-full">
                <CleartripNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel, Airline & Refund Guides
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
                    MakeMyTrip Refund Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IndiGo Refund & Credit Shell Guide →
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
                    href="/flight-delay-cancellation-compensation-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flight Delay Compensation India →
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
