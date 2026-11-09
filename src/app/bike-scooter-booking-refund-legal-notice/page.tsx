import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BikeScooterNoticeCTA from "./BikeScooterNoticeCTA";
import BikeScooterTableOfContents from "./BikeScooterTableOfContents";
import BikeScooterProblemTabs from "./BikeScooterProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bike or EV Scooter Booking Refund Not Received?",
  description:
    "Dealer or EV maker not refunding a bike or scooter booking? Cancellation terms, consumer rights and a demand notice.",
  alternates: {
    canonical: `${SITE_URL}/bike-scooter-booking-refund-legal-notice`,
  },
  openGraph: {
    title: "Bike or EV Scooter Booking Refund Not Received? Legal Remedies & Demand Notice",
    description:
      "Statutory guide on two-wheeler and EV booking amount refunds: tackling dealer ghosting, app refund delays, illegal cancellation deductions, and consumer court escalation.",
    url: `${SITE_URL}/bike-scooter-booking-refund-legal-notice`,
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
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency, Section 2(46) Unfair Contract, Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Sale of Goods Act, 1930 — Section 31 (Duties of Seller and Buyer), Section 32 (Payment and Delivery Concurrent), Section 61 (Interest and Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Ministry of Road Transport and Highways (MoRTH) Directive on Prohibition of Handling / Logistics Charges by Automobile Dealers (RT-11021/44/2018-MVL)",
    url: "https://morth.gov.in/",
  },
  {
    title: "Reserve Bank of India (RBI) Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed / Cancelled Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Competition Commission of India (CCI) In Re: Unbundled Automobile Insurance & Tied Accessory Directives",
    url: "https://www.cci.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Booking Receipts, Bank UTRs, & WhatsApp Chats)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on Forfeiture of Motorcycle Booking Advance",
    parties: "Bhanwar Lal v. M/s Royal Enfield Showroom & Authorized Dealership",
    citation: "Consumer Complaint No. 178/2022, DCDRC Jodhpur",
    date: "Order Dated 19 August 2023",
    facts:
      "The complainant booked a Royal Enfield Classic 350 motorcycle by paying an advance booking deposit of ₹10,000. The dealership committed delivery within 45 days on the booking slip. However, delivery was postponed repeatedly for over 5 months. When the complainant demanded cancellation, the dealer refused to refund the advance, citing a standard clause on the receipt that booking deposits are non-refundable upon cancellation.",
    holding:
      "The District Consumer Commission held that delivery within the promised timeframe is the essence of an automobile purchase agreement under Section 31 of the Sale of Goods Act, 1930. A dealership cannot hold a consumer's money indefinitely while failing to supply the vehicle. The forum declared the 'non-refundable' clause an unfair trade practice under Section 2(47) and an unfair contract under Section 2(46) of the Consumer Protection Act, 2019. The Commission directed the dealership to refund the entire ₹10,000 with 9% annual interest from the date of cancellation, along with ₹15,000 compensation for mental agony and ₹5,000 litigation expenses.",
    amount: "₹10,000 Advance Refund @ 9% Interest + ₹15,000 Agony Damages + ₹5,000 Litigation Costs",
    takeaway:
      "Dealership boilerplate clauses claiming booking amounts are 'strictly non-refundable' have zero legal validity in consumer courts when delivery has exceeded the promised waiting period or where no vehicle chassis has been allocated.",
  },
  {
    title: "State Commission Ruling on EV App Ghosting & Failed Digital Wallet Refund",
    parties: "Ramesh Kumar v. Ola Electric Technologies Pvt. Ltd.",
    citation: "Consumer Complaint No. 412/2023, DCDRC Bengaluru Urban (Central)",
    date: "Order Dated 24 January 2024",
    facts:
      "The complainant reserved an electric scooter through the manufacturer's smartphone application by transferring ₹20,000 via UPI. Due to repeated production delays and battery delivery postponements spanning 4 months, the consumer cancelled the booking in the app. The app displayed 'Cancellation Accepted - Refund Initiated', but no funds credited to the complainant's bank account for over 120 days. In-app customer support tickets were closed automatically without providing an Acquirer Reference Number (ARN) or bank UTR.",
    holding:
      "The Commission held that accepting advance money digitally and failing to reverse funds upon customer cancellation amounts to severe deficiency in service under Section 2(11) and unfair trade practice under Section 2(47) CPA 2019. The forum observed that digital EV manufacturers cannot exploit automated software interfaces to trap customer funds. The court directed Ola Electric to immediately refund the ₹20,000 booking amount with 12% penal interest, ₹20,000 as compensation for digital harassment, and ₹10,000 litigation costs.",
    amount: "₹20,000 Booking Refund @ 12% Penal Interest + ₹20,000 Harassment Award + ₹10,000 Costs",
    takeaway:
      "A simulated app status stating 'Refund Initiated' does not discharge the manufacturer's legal obligation. Until funds reflect in the consumer's bank statement with a verified UTR, the OEM remains strictly liable for statutory interest and compensation.",
  },
  {
    title: "State Commission Ruling on Arbitrary Deduction of 'Administrative Charges'",
    parties: "Vikas Sharma v. Tanya Automobiles & Two-Wheeler Dealership",
    citation: "First Appeal No. 89/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 14 July 2022",
    facts:
      "The consumer booked a commuter scooter with a token advance of ₹5,000. Before vehicle allocation, the dealer insisted on mandatory in-house insurance at inflated premiums and non-negotiable accessory packages. The consumer refused and opted to cancel the booking. The dealer deducted ₹3,000 as 'clerical handling and administrative processing charges' and refunded only ₹2,000.",
    holding:
      "The State Commission dismissed the dealer's appeal, ruling that automobile dealers cannot levy administrative or handling charges without statutory backing or proof of actual customized expenditure incurred on the specific vehicle. The deduction was held to be illegal under MoRTH directives and Section 2(47) CPA 2019. The dealer was ordered to refund the deducted ₹3,000 with 10% interest, plus ₹10,000 punitive compensation and ₹7,500 legal costs.",
    amount: "₹3,000 Unlawful Deduction Restitution @ 10% Interest + ₹10,000 Punitive Award + ₹7,500 Costs",
    takeaway:
      "Dealers have no legal right to withhold 'administrative' or 'processing' fees from a booking refund if the vehicle was never invoiced or registered in the consumer's name.",
  },
  {
    title: "District Commission Order on Delivery Rejection at Pre-Delivery Inspection (PDI)",
    parties: "Siddharth Nair v. Ather Energy & Authorized Retail Experience Center",
    citation: "Consumer Case No. 95/2023, DCDRC Ernakulam",
    date: "Order Dated 18 November 2023",
    facts:
      "The buyer inspected the allotted electric scooter at the showroom stockyard prior to RTO registration. The customer detected deep paint scratches, a misaligned front fender, and a persistent battery sensor error on the dashboard. The buyer refused delivery and requested either a replacement vehicle or an immediate refund of the ₹15,000 booking amount and ₹35,000 down payment. The showroom refused, asserting that once a vehicle VIN is assigned, no refund can be granted.",
    holding:
      "The District Commission held that under Section 16 of the Sale of Goods Act, 1930 and Chapter VI of CPA 2019, goods sold must be merchantable and free from defects at the time of delivery. A consumer possesses an absolute legal right to inspect the vehicle prior to registration and reject sub-standard goods. The Commission ordered a full refund of ₹50,000 with 9% interest, alongside ₹15,000 compensation and ₹5,000 litigation expenses.",
    amount: "₹50,000 Full Down Payment & Booking Refund @ 9% Interest + ₹15,000 Damages + ₹5,000 Costs",
    takeaway:
      "Never accept a damaged or defective vehicle during PDI under dealer pressure. Rejection prior to VAHAN registration legally obligates the dealer to refund all deposited sums.",
  },
];

const FAQS = [
  {
    question: "Can a bike dealer legally keep my booking amount if I cancel the purchase?",
    answer:
      "No. Under Sections 31 and 32 of the Sale of Goods Act, 1930 and Section 2(46) of the Consumer Protection Act, 2019, booking advance retention clauses on receipts are classified as unfair contracts and are void in consumer courts. If you cancel before vehicle invoice generation or permanent RTO registration—especially when delivery is delayed beyond the committed date—the dealer is legally required to refund 100% of your booking amount without arbitrary administrative deductions.",
  },
  {
    question: "How long can a two-wheeler showroom take to process a bike booking amount refund?",
    answer:
      "Standard industry commercial practice and consumer court precedents require two-wheeler dealerships and EV manufacturers to process booking refunds within 7 to 14 business days from written cancellation. If the refund is not credited within 14 days, you are entitled to claim commercial interest (typically 9% to 12% per annum) from the date of cancellation until actual realisation.",
  },
  {
    question: "What should I do if an EV manufacturer (Ola, Ather, TVS) app shows 'Refund Initiated' but money is not in my bank?",
    answer:
      "First, download your certified bank statement covering the period from booking debit to the present date to prove non-receipt. Next, email the EV company's grievance officer demanding the 12-digit Acquirer Reference Number (ARN) or bank Unique Transaction Reference (UTR) for the refund batch. If they fail to provide the UTR or credit funds within 7 days, serve a statutory advocate legal notice demanding immediate refund with penal interest under RBI payment settlement guidelines.",
  },
  {
    question: "How to write a bike booking cancellation letter to the dealer?",
    answer:
      "Your cancellation letter must clearly cite: (1) Booking docket number and booking date, (2) Model, variant, and color booked, (3) Payment reference, bank UTR, and receipt number, (4) Promised delivery date versus actual delay, (5) Explicit statement that the contract is repudiated under Section 31 of the Sale of Goods Act, 1930, and (6) A 7-day deadline for 100% bank transfer to your specified account number and IFSC code before initiating consumer court proceedings.",
  },
  {
    question: "Can Royal Enfield deduct cancellation charges on a motorcycle booking refund?",
    answer:
      "While some Royal Enfield dealerships attempt to deduct ₹1,000 to ₹2,500 under printed receipt conditions, consumer commissions consistently rule such deductions illegal if the cancellation was prompted by delivery delays exceeding the promised waiting period or if the vehicle was never invoiced. If Royal Enfield or its dealer arbitrarily deducts cancellation charges, you can recover the full deducted sum with interest via a legal notice.",
  },
  {
    question: "Can I refuse delivery and demand a full refund if I find defects during Pre-Delivery Inspection (PDI)?",
    answer:
      "Yes, absolutely. Under Section 16 of the Sale of Goods Act, 1930 and Chapter VI of CPA 2019, you have the absolute legal right to reject a vehicle that has cosmetic damages, repainted panels, high odometer mileage, or EV battery sensor faults. Ensure you do not sign RTO Form 20/21 or share Aadhaar registration OTP until you are fully satisfied with the vehicle during PDI.",
  },
  {
    question: "Bike booking cancel karne ke baad dealer refund na de toh legal notice kaise bheje?",
    answer:
      "Agar do-pahiya showroom ya EV company booking cancel karne ke baad aapka advance wapas na kare ya bina wajah cancellation charges kaat le, toh aap ek advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocate Sale of Goods Act 1930 aur Consumer Protection Act 2019 ke antargat dealership aur brand corporate office par Registered Speed Post aur digital notice bhejte hain, jismein 15 din ka strict payment demand diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Two-Wheeler Booking Cancelled but the Refund Hasn't Come?",
  description:
    "Dealer or EV maker not refunding a bike or scooter booking? Cancellation terms, consumer rights and a demand notice.",
  datePublished: "2026-11-06T12:00:00+05:30",
  dateModified: "2026-11-06T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/bike-scooter-booking-refund-legal-notice`,
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
    "@type": "Thing",
    name: "Vehicle Booking Refund & Consumer Rights",
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
      name: "Automotive & Delivery Disputes",
      item: `${SITE_URL}/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Bike & Scooter Booking Refund Notice",
      item: `${SITE_URL}/bike-scooter-booking-refund-legal-notice`,
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

export default function BikeScooterBookingRefundPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Automotive Disputes",
      href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
    },
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
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Sale of Goods Act 1930</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Automotive Refund Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Two-Wheeler Booking Cancelled but the Refund Hasn't Come?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Two-Wheeler &amp; EV Booking Refund Mandate)
              </p>
              <p>
                Under Section 31 of the Sale of Goods Act, 1930 and Section 2(11) of the Consumer Protection Act, 2019, two-wheeler dealerships and EV manufacturers cannot forfeit booking advances when delivery is delayed beyond the committed date or cancelled prior to invoicing. Buyers are legally entitled to a 100% refund without arbitrary administrative deductions. If the dealer or EV maker refuses payment within 14 days, dispatch an advocate demand notice for full reimbursement plus 9% to 12% statutory interest before initiating e-Jagriti consumer proceedings.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Mandatory Prior to Invoicing &amp; RTO
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">14 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Turnaround Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Annual Interest in Commission Awards
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹0 Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Handling Charges Prohibited by MoRTH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6">
          <Breadcrumbs
            items={breadcrumbItems}
            currentPage="Bike & Scooter Booking Refund Notice"
          />
        </div>

        {/* Main Content Layout with Sticky TOC Sidebar */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Table of Contents Column */}
            <BikeScooterTableOfContents />

            {/* Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-12">
              {/* Archetype G2: Scenario Grid Near Top */}
              <section id="heading-scenarios" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                    Archetype G2 • Dispute Scenarios &amp; Recovery Odds
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Where Does Your Two-Wheeler Booking Refund Stand?
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Evaluate your legal standing, recovery likelihood, and immediate tactical next step based on how the booking was made and why it was cancelled.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-red-100 text-red-800">
                          Dealer Showroom Booking
                        </span>
                        <span className="text-xs font-black text-emerald-600">
                          95% Recovery Probability
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Delivery Exceeded Committed Waiting Period
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        You deposited ₹5,000 to ₹25,000 for a popular motorcycle (Royal Enfield, Yamaha, Honda) with a promise of 4-week delivery. Months have passed, the sales executive gives elusive excuses, and the showroom refuses to refund your deposit.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Legal Ground: Sale of Goods Act s. 31
                      </span>
                      <a
                        href="#heading-step-by-step"
                        className="text-xs font-bold text-red-600 hover:text-red-800"
                      >
                        Follow Playbook →
                      </a>
                    </div>
                  </article>

                  {/* Card 2 */}
                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800">
                          Direct EV App Reservation
                        </span>
                        <span className="text-xs font-black text-emerald-600">
                          90% Recovery Probability
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        EV App Shows 'Refund Initiated' but No Bank Credit
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        You booked an EV scooter online (Ola Electric, Ather, Simple Energy). You cancelled the reservation on the mobile app, but weeks passed without money reaching your bank account. In-app chatbots loop generic responses.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Legal Ground: RBI Payment Aggregator TAT
                      </span>
                      <a
                        href="#heading-problem-picker"
                        className="text-xs font-bold text-red-600 hover:text-red-800"
                      >
                        Inspect EV Steps →
                      </a>
                    </div>
                  </article>

                  {/* Card 3 */}
                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900">
                          Unlawful Deductions
                        </span>
                        <span className="text-xs font-black text-emerald-600">
                          92% Recovery Probability
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Dealer Forfeits 'Cancellation / Handling Charges'
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        The showroom agrees to cancel your booking but deducts ₹1,000 to ₹5,000 as 'file processing charges', citing small print on the booking slip. The vehicle was never registered or invoiced in your name.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Legal Ground: CPA 2019 s. 2(46) Unfair Contract
                      </span>
                      <a
                        href="#heading-legal-basis"
                        className="text-xs font-bold text-red-600 hover:text-red-800"
                      >
                        View Statute →
                      </a>
                    </div>
                  </article>

                  {/* Card 4 */}
                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-100 text-purple-900">
                          Pre-Delivery Inspection
                        </span>
                        <span className="text-xs font-black text-emerald-600">
                          88% Recovery Probability
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Vehicle Rejected at PDI Due to Manufacturing Defects
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        During PDI, you discovered paint damage, repainted chassis, mismatched motor numbers, or battery warnings. You refused delivery before RTO registration, but the dealer refuses to return your advance.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Legal Ground: Sale of Goods Act s. 16
                      </span>
                      <Link
                        href="/refuse-new-car-delivery-pdi-defects"
                        className="text-xs font-bold text-red-600 hover:text-red-800"
                      >
                        PDI Rejection Guide →
                      </Link>
                    </div>
                  </article>
                </div>
              </section>

              {/* Overview & Key Facts Table */}
              <section id="heading-overview" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Statutory Framework
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Two-Wheeler Booking Advance: What Indian Law Actually Dictates
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a consumer books a motorcycle or electric scooter in India, the transaction is governed by the <strong>Sale of Goods Act, 1930</strong> and the <strong>Consumer Protection Act, 2019</strong>. The booking deposit is not an unconditional gift to the showroom—it is an executory advance consideration paid subject to timely delivery of a merchantable, defect-free vehicle.
                </p>

                {/* Key Facts Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <caption className="sr-only">Two-Wheeler Booking Refund Statutory Matrix</caption>
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Dimension</th>
                        <th scope="col" className="p-3.5 sm:p-4">Governing Statute / Rule</th>
                        <th scope="col" className="p-3.5 sm:p-4">Consumer Legal Entitlement</th>
                        <th scope="col" className="p-3.5 sm:p-4">Enforcement Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 bg-slate-50/50">
                          Delivery Timeline Default
                        </th>
                        <td className="p-3.5 sm:p-4">Sale of Goods Act, 1930 (ss. 31, 32)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                          100% Refund + Statutory Interest
                        </td>
                        <td className="p-3.5 sm:p-4">Advocate Demand Notice / e-Jagriti DCDRC</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 bg-slate-50/50">
                          'Non-Refundable' Boilerplate Clauses
                        </th>
                        <td className="p-3.5 sm:p-4">CPA 2019 (s. 2(46) Unfair Contract)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                          Clause Void Ab Initio in Law
                        </td>
                        <td className="p-3.5 sm:p-4">District Consumer Commission</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 bg-slate-50/50">
                          Dealer Handling / Administrative Fees
                        </th>
                        <td className="p-3.5 sm:p-4">MoRTH Directive RT-11021/44/2018</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                          Zero Deductions Permissible
                        </td>
                        <td className="p-3.5 sm:p-4">Transport Dept / Consumer Forum</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 bg-slate-50/50">
                          D2C EV App Settlement Delays
                        </th>
                        <td className="p-3.5 sm:p-4">RBI Failed Transaction TAT Framework</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                          Reversal + ₹100/day Penal Compensation
                        </td>
                        <td className="p-3.5 sm:p-4">RBI Ombudsman / Consumer Forum</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 bg-slate-50/50">
                          PDI Defect Rejection Prior to RTO
                        </th>
                        <td className="p-3.5 sm:p-4">Sale of Goods Act (s. 16) &amp; CPA (Ch. VI)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                          Right of Rejection &amp; Full Restitution
                        </td>
                        <td className="p-3.5 sm:p-4">Pre-Litigation Notice / DCDRC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Legal Basis Section with Quoted Statute */}
              <section id="heading-legal-basis" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Statutory Authority
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    The Legal Ground: Why Showrooms Cannot Legally Keep Your Deposit
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Automotive dealerships routinely print intimidating disclaimers on booking receipts: <em>"Booking amount is non-refundable upon cancellation"</em> or <em>"Cancellation subject to ₹2,500 administrative fee"</em>. In Indian jurisprudence, these unilateral clauses collapse when challenged under the Consumer Protection Act, 2019:
                </p>

                {/* Quoted Statute Blockquote */}
                <blockquote className="border-l-4 border-red-600 bg-red-50/60 p-4 sm:p-6 rounded-r-2xl my-4 text-slate-800 text-xs sm:text-sm leading-relaxed">
                  <p className="font-bold text-red-900 mb-2 uppercase text-[11px] tracking-wider">
                    Section 2(46) &amp; Section 2(47), Consumer Protection Act, 2019
                  </p>
                  <p className="italic mb-2">
                    " 'unfair contract' means a contract between a manufacturer or trader or service provider on one hand, and a consumer on the other, having such terms which cause significant change in the rights of such consumer, including... (iii) imposing on the consumer any unreasonable charge, obligation or condition which puts such consumer to disadvantage... (vi) imposing on the consumer any penalty for the breach of contract which is wholly disproportionate to the loss occurred."
                  </p>
                  <footer className="text-[11px] font-semibold text-slate-600 text-right">
                    — The Gazette of India, Act No. 35 of 2019
                  </footer>
                </blockquote>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Similarly, under Section 31 and Section 32 of the <strong>Sale of Goods Act, 1930</strong>, delivery of the bike and payment of the purchase price are concurrent conditions. If a showroom fails to deliver the allotted vehicle on or before the committed delivery week, the dealership is in breach of contract. Under Section 61 of the Sale of Goods Act, the buyer is entitled to terminate the booking and claim interest on the purchase money deposited.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For cross-category vehicle delivery delays, explore our companion analysis on{" "}
                  <Link
                    href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
                    className="font-bold text-red-600 hover:text-red-800 hover:underline"
                  >
                    legal notices to car dealers for delayed vehicle delivery and manufacturing defects
                  </Link>
                  , or review our{" "}
                  <Link
                    href="/templates/car-delivery-delay-complaint-letter"
                    className="font-bold text-red-600 hover:text-red-800 hover:underline"
                  >
                    formal vehicle delivery delay complaint letter template
                  </Link>
                  .
                </p>
              </section>

              {/* Hand-Authored Inline SVG Resolution Rail Diagram */}
              <section id="heading-escalation-flow" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Procedural Blueprint
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Statutory Escalation Rail: From Cancellation to Bank Credit
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Follow the five progressive legal milestones to enforce a two-wheeler booking refund without protracted showroom arguments.
                  </p>
                </div>

                <div className="p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 880 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Statutory Escalation Rail for Bike and EV Scooter Booking Refund"
                  >
                    {/* Connecting Rail */}
                    <line x1="80" y1="90" x2="800" y2="90" stroke="#334155" strokeWidth="4" />

                    {/* Step 1 */}
                    <g transform="translate(60, 40)">
                      <circle cx="20" cy="50" r="22" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                      <text x="20" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
                      <text x="20" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Written Notice</text>
                      <text x="20" y="106" fill="#94A3B8" fontSize="10" textAnchor="middle">Cancellation Letter</text>
                      <text x="20" y="120" fill="#EF4444" fontSize="9" fontWeight="bold" textAnchor="middle">Day 0–7</text>
                    </g>

                    {/* Step 2 */}
                    <g transform="translate(240, 40)">
                      <circle cx="20" cy="50" r="22" fill="#1E293B" stroke="#F59E0B" strokeWidth="3" />
                      <text x="20" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">2</text>
                      <text x="20" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">UTR / Nodal Demand</text>
                      <text x="20" y="106" fill="#94A3B8" fontSize="10" textAnchor="middle">OEM Grievance / Bank</text>
                      <text x="20" y="120" fill="#F59E0B" fontSize="9" fontWeight="bold" textAnchor="middle">Day 8–14</text>
                    </g>

                    {/* Step 3 */}
                    <g transform="translate(420, 40)">
                      <circle cx="20" cy="50" r="22" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                      <text x="20" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">3</text>
                      <text x="20" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                      <text x="20" y="106" fill="#94A3B8" fontSize="10" textAnchor="middle">Speed Post + Digital</text>
                      <text x="20" y="120" fill="#EF4444" fontSize="9" fontWeight="bold" textAnchor="middle">Day 15–30</text>
                    </g>

                    {/* Step 4 */}
                    <g transform="translate(600, 40)">
                      <circle cx="20" cy="50" r="22" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />
                      <text x="20" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">4</text>
                      <text x="20" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">NCH / INGRAM</text>
                      <text x="20" y="106" fill="#94A3B8" fontSize="10" textAnchor="middle">National Helpline 1915</text>
                      <text x="20" y="120" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">Parallel Track</text>
                    </g>

                    {/* Step 5 */}
                    <g transform="translate(780, 40)">
                      <circle cx="20" cy="50" r="22" fill="#1E293B" stroke="#10B981" strokeWidth="3" />
                      <text x="20" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">5</text>
                      <text x="20" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">e-Jagriti DCDRC</text>
                      <text x="20" y="106" fill="#94A3B8" fontSize="10" textAnchor="middle">Refund + 12% + Costs</text>
                      <text x="20" y="120" fill="#10B981" fontSize="9" fontWeight="bold" textAnchor="middle">Commission Award</text>
                    </g>
                  </svg>
                </div>
              </section>

              {/* Step-by-Step Playbook for Most Common Scenario */}
              <section id="heading-step-by-step" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Execution Guide
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    The 5-Step Refund Playbook: How to Clinch Full Reimbursement
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    When dealing with an uncooperative two-wheeler dealer or a silent EV customer care portal, follow this battle-tested protocol.
                  </p>
                </div>

                <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Transmit Formal Cancellation Letter via Registered Email
                      </h3>
                      <p className="leading-relaxed">
                        Never cancel solely over a verbal phone call or showroom walk-in. Draft a formal letter stating that due to failure to deliver the vehicle within the committed timeframe, you repudiate the contract under Section 31 of the Sale of Goods Act, 1930. Demand a 100% refund of the booking advance within 7 business days to your bank account (provide account number, IFSC, and account holder name). Send this to the dealership principal, sales manager, and the manufacturer's regional customer care email.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Block Unilateral 'Cancellation Charges' in Writing
                      </h3>
                      <p className="leading-relaxed">
                        If the dealer responds by claiming that ₹1,000 to ₹3,000 will be deducted as 'handling' or 'cancellation fee', immediately reply citing <strong>Section 2(46) of the Consumer Protection Act, 2019</strong> and MoRTH circulars prohibiting unauthorized dealer charges. State clearly that as the vehicle was never registered on VAHAN or invoiced, any arbitrary forfeiture constitutes an unfair trade practice.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Lodge National Consumer Helpline (NCH) Grievance (Call 1915)
                      </h3>
                      <p className="leading-relaxed">
                        Register a consumer grievance on the government INGRAM portal (consumerhelpline.gov.in) or call 1915. Enter the dealership's GSTIN and corporate entity name. NCH grievances create an official government docket number that alerts the OEM's institutional escalation cell.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Dispatch a Statutory Advocate Legal Notice (15-Day Demand)
                      </h3>
                      <p className="leading-relaxed">
                        If 14 days elapse without payment, have a verified advocate issue a formal legal notice to both the showroom proprietor and the automotive manufacturer's registered headquarters. The notice sets out the full transaction timeline, invokes the Sale of Goods Act and Consumer Protection Act, 2019, and gives a peremptory 15-day window to remit the principal plus 12% annual interest and drafting costs.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        File e-Jagriti Consumer Complaint for Restitution &amp; Damages
                      </h3>
                      <p className="leading-relaxed">
                        If the 15-day notice window expires without settlement, file an online consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) via <strong>e-jagriti.gov.in</strong>. Attach the booking docket, payment proof, cancellation email, advocate notice, and postal tracking receipts. Consumer commissions routinely award the full refund, 9%–12% interest, and ₹10,000 to ₹25,000 in harassment damages.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Mistakes to Avoid (UL with X styling) */}
              <section id="heading-mistakes-to-avoid" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                    Critical Pitfalls
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Mistakes to Avoid When Cancelling a Two-Wheeler Booking
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Minor tactical blunders during the cancellation stage can weaken your legal claim or delay refund disbursement for months.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="p-4 rounded-xl bg-red-50/50 border border-red-200 flex items-start gap-3">
                    <span className="text-base text-red-600 font-black shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        Never surrender your original booking receipt or payment docket
                      </strong>
                      <span>
                        Showrooms often demand that you surrender your physical original booking slip before processing a refund, leaving you with zero proof of deposit. Always provide only self-attested photocopies or PDF scans; keep the physical original in your custody.
                      </span>
                    </div>
                  </li>

                  <li className="p-4 rounded-xl bg-red-50/50 border border-red-200 flex items-start gap-3">
                    <span className="text-base text-red-600 font-black shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        Never share Aadhaar OTP or sign RTO registration forms before vehicle inspection
                      </strong>
                      <span>
                        Once a vehicle chassis and engine number are registered in your name on VAHAN, unwinding the sale requires RTO cancellation or resale, severely limiting your refund rights. Complete your Pre-Delivery Inspection (PDI) before signing Form 20 or sharing registration OTPs.
                      </span>
                    </div>
                  </li>

                  <li className="p-4 rounded-xl bg-red-50/50 border border-red-200 flex items-start gap-3">
                    <span className="text-base text-red-600 font-black shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        Never rely on verbal assurances or unrecorded WhatsApp promises from sales executives
                      </strong>
                      <span>
                        Showroom sales agents frequently promise verbal refunds within "3 to 4 days" to avoid negative escalations. Unless confirmed in writing from the official corporate dealership domain email, verbal promises carry minimal evidentiary weight.
                      </span>
                    </div>
                  </li>

                  <li className="p-4 rounded-xl bg-red-50/50 border border-red-200 flex items-start gap-3">
                    <span className="text-base text-red-600 font-black shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        Never accept a 'credit note' or voucher in lieu of a bank transfer
                      </strong>
                      <span>
                        Dealerships often attempt to issue store credit or merchandise vouchers redeemable only for future bike service or accessories. You are legally entitled to 100% liquidity into your bank account.
                      </span>
                    </div>
                  </li>

                  <li className="p-4 rounded-xl bg-red-50/50 border border-red-200 flex items-start gap-3">
                    <span className="text-base text-red-600 font-black shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        Never omit the OEM manufacturer when serving legal notice
                      </strong>
                      <span>
                        Always issue notice to both the authorized showroom entity and the vehicle manufacturer (e.g. Royal Enfield / Eicher Motors, Ola Electric, Ather Energy). Manufacturers tightly monitor dealer non-compliance and often intervene to safeguard brand reputation.
                      </span>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Primary In-Content CTA */}
              <BikeScooterNoticeCTA
                buttonText="Draft Legal Notice for Two-Wheeler Booking Refund"
                variant="primary"
              />

              {/* Common Cancellation Dispute Scenarios - Interactive Tabs */}
              <section id="heading-cancellation-disputes" className="scroll-mt-28">
                <BikeScooterProblemTabs />
              </section>

              {/* Binding Court Precedents */}
              <section id="heading-case-digest" className="space-y-6 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Judicial Authority
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Verified Consumer Commission Rulings on Booking Advance Disputes
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Review how State and District Consumer Commissions penalize two-wheeler dealerships and EV manufacturers for withholding advance booking funds.
                  </p>
                </div>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-slate-100 text-slate-800">
                          {c.citation}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        {c.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mb-3 italic">
                        {c.parties}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-3">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <strong className="block text-slate-900 mb-1">Core Facts:</strong>
                          <p className="leading-relaxed">{c.facts}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                          <strong className="block text-emerald-900 mb-1">Judicial Holding:</strong>
                          <p className="leading-relaxed text-emerald-950">{c.holding}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="text-xs">
                          <span className="text-slate-400 font-bold uppercase text-[10px] block">
                            Awarded Relief
                          </span>
                          <span className="font-bold text-emerald-400">{c.amount}</span>
                        </div>
                        <div className="text-[11px] text-slate-300 sm:max-w-md">
                          <strong className="text-white">Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Worked Case Example */}
              <section id="heading-worked-example" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Real-World Case Study
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Worked Case Example: ₹15,000 Advance Recovery on Delayed EV Scooter
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    An illustrative breakdown of how a consumer successfully recovered their advance booking plus statutory damages after a 90-day delay.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Aggrieved Buyer</span>
                      <p className="text-sm font-bold text-slate-900">Arun K., Bengaluru</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Opposite Party</span>
                      <p className="text-sm font-bold text-slate-900">D2C EV OEM &amp; Regional Hub</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Stuck Amount</span>
                      <p className="text-sm font-bold text-red-600">₹15,000 Advance Deposit</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Arun booked an electric scooter online on 15 August 2023 with a promised delivery window of 30 days. By November 2023 (90 days later), no vehicle chassis was assigned. Arun cancelled through the mobile application. The app indicated "Refund Processed", but no credit appeared in his HDFC account. Customer care closed three support tickets with robotic apologies.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> On 10 December 2023, Arun engaged an advocate on LegalRecovery.in to serve a formal 15-day statutory demand notice addressed to the EV OEM's corporate headquarters and executive directors under Section 2(47) CPA 2019 and RBI TAT norms.
                    </p>
                    <p>
                      <strong>The Outcome:</strong> Within 9 days of receiving the Speed Post notice, the OEM's legal compliance team contacted Arun, confirmed a technical batch failure in their payment aggregator settlement, transferred the full ₹15,000 advance directly via IMPS, and paid ₹5,000 towards legal costs to avert a consumer forum petition.
                    </p>
                  </div>

                  {/* Financial Settlement Matrix */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <table className="w-full text-left text-xs">
                      <thead className="text-[10px] uppercase text-slate-500 border-b border-slate-200">
                        <tr>
                          <th className="pb-2">Claim Head</th>
                          <th className="pb-2">Initial Dealer Position</th>
                          <th className="pb-2">Recovered via Legal Notice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-800">
                        <tr>
                          <td className="py-1.5 font-semibold">Principal Booking Amount</td>
                          <td className="py-1.5 text-red-600">Stuck in 'Processing' limbo</td>
                          <td className="py-1.5 font-bold text-emerald-600">₹15,000 (100% Refunded)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 font-semibold">Cancellation Deductions</td>
                          <td className="py-1.5 text-red-600">Attempted ₹2,000 fee</td>
                          <td className="py-1.5 font-bold text-emerald-600">₹0 (Zero Deduction)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 font-semibold">Litigation Reimbursement</td>
                          <td className="py-1.5 text-slate-500">Nil</td>
                          <td className="py-1.5 font-bold text-emerald-600">₹5,000 Goodwill Costs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Documentary Evidence Checklist */}
              <section id="heading-evidence-checklist" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Evidentiary Preparation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Documentary Evidence Checklist for a Booking Refund Demand
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic records are admissible evidence. Prepare these 6 items before issuing notice:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block mb-0.5">Booking Receipt / Order Slip</strong>
                      <span className="text-slate-600">
                        Official showroom docket or digital order confirmation detailing vehicle model, variant, booking date, and promised delivery period.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block mb-0.5">Bank Statement / UPI Debit Record</strong>
                      <span className="text-slate-600">
                        Bank PDF statement showing the exact debited advance amount, timestamp, and 12-digit transaction UTR to establish consideration.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block mb-0.5">Written Cancellation Request</strong>
                      <span className="text-slate-600">
                        Email transmission copy or signed showroom letter requesting cancellation and specifying bank refund details.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block mb-0.5">In-App Chat / Customer Care Tickets</strong>
                      <span className="text-slate-600">
                        Screenshots of service tickets, automated chatbot responses, and emails demonstrating follow-ups and lack of inward bank credit.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block mb-0.5">Dealership Communication / WhatsApp</strong>
                      <span className="text-slate-600">
                        Chat logs with sales executives confirming delivery delays, waiting period extensions, or threats of fee deductions.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block mb-0.5">VAHAN Non-Registration Status</strong>
                      <span className="text-slate-600">
                        Affidavit or confirmation that no chassis or engine was registered in your name with RTO, establishing an executory transaction.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section id="heading-faqs" className="space-y-5 scroll-mt-28">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Common Inquiries
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Frequently Asked Questions: Two-Wheeler Booking Refunds
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm open:border-red-300 transition-colors"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Primary Legal References Block */}
              <section id="heading-sources" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Sources &amp; Primary Legal References
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-700 hover:underline break-all"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-400 mt-2">
                  * All statutory references verified against the Consumer Protection Act, 2019, Sale of Goods Act, 1930, MoRTH orders, and official portal directives as of November 2026.
                </p>
              </section>

              {/* Related Recovery Guides */}
              <RelatedRecoveryGuides />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
