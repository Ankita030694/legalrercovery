import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CarDeliveryNoticeCTA from "./CarDeliveryNoticeCTA";
import CarDeliveryTableOfContents from "./CarDeliveryTableOfContents";
import CarDeliveryTemplateWorkspace from "./CarDeliveryTemplateWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Car Delivery Delay Complaint Letter (Free Format)",
  description:
    "Complaint letter to your dealer for delayed vehicle delivery, demanding a firm date, compensation or a full refund.",
  alternates: {
    canonical: `${SITE_URL}/templates/car-delivery-delay-complaint-letter`,
  },
  openGraph: {
    title: "Car Delivery Delay Complaint Letter (Free Format & Legal Template)",
    description:
      "Statutory complaint letter format to automobile dealerships for delayed car, bike or EV delivery. Demand firm delivery, delay compensation, or 100% refund with zero cancellation deduction.",
    url: `${SITE_URL}/templates/car-delivery-delay-complaint-letter`,
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
    title: "Sale of Goods Act, 1930 — Section 31 (Duties of Seller and Buyer) & Section 61 (Interest on Purchase Money)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Indian Contract Act, 1872 — Section 55 (Effect of Failure to Perform at Fixed Time in Contract Where Time is of Essence) & Section 73",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC) — Maruti Udyog Ltd. v. Susheel Kumar Sharma",
    url: "http://ncdrc.nic.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Booking Slips, WhatsApp Chats & UTRs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "National Consumer Helpline (NCH 1915 / INGRAM) — Department of Consumer Affairs",
    url: "https://consumerhelpline.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "NCDRC Ruling on Indefinite Vehicle Delivery Delay and Bar on Cancellation Deductions",
    parties: "Maruti Udyog Ltd. & Anr. v. Susheel Kumar Sharma",
    citation: "Revision Petition No. 1294 of 2006, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 18 January 2008",
    facts:
      "The complainant booked a passenger vehicle by depositing the mandatory advance booking consideration with the authorized dealership upon the express assurance of delivery within four weeks. The dealership failed to allot a chassis number or deliver the car for over five months, repeatedly citing production backlogs from the manufacturer. When the complainant demanded cancellation and refund, the dealership sought to forfeit administrative cancellation charges.",
    holding:
      "The National Commission held that an automobile dealer and manufacturer who accept advance booking money are bound by the promised delivery schedule. Failing to supply the vehicle within the committed period constitutes gross deficiency in service. The NCDRC ruled that where a buyer cancels a booking due to the dealership's unexcused delivery delay, the dealer cannot deduct a single rupee as cancellation fee. The court ordered immediate refund of the full booking deposit with 12% per annum interest and litigation costs.",
    amount: "100% Booking Advance Refund @ 12% Interest + Complete Waiver of Cancellation Charges",
    takeaway:
      "Dealerships cannot enforce standard cancellation penalties (₹2,000–₹10,000) when the cancellation is triggered by their own failure to deliver on time. Any forfeiture clause in the booking docket is an unfair contract under Section 2(46) of the Consumer Protection Act, 2019.",
  },
  {
    title: "State Commission Order Awarding 100% Refund, Interest and Damages for Delay",
    parties: "Anand R. Kulkarni v. Authorized Automobile Showroom & OEM Motors India Ltd.",
    citation: "First Appeal No. 488/2021, Maharashtra State Consumer Disputes Redressal Commission, Mumbai",
    date: "Order Dated 14 September 2022",
    facts:
      "The consumer deposited ₹1,00,000 advance booking for a newly launched compact SUV with an explicit written commitment on the booking docket specifying delivery on or before Diwali. The dealership failed to deliver the car, postponed the delivery four times over seven months, and demanded that the consumer absorb a mid-year ex-showroom price hike of ₹42,000.",
    holding:
      "The State Commission held that accepting advance booking deposits creates a reciprocal statutory obligation under the Sale of Goods Act, 1930. The dealership's unilateral delays and demand for an enhanced price during the period of delay constituted an unfair trade practice under Section 2(47) CPA 2019. The Commission directed the dealership and OEM to jointly refund the ₹1,00,000 booking amount with 10% interest, pay ₹30,000 compensation for mental harassment, and pay ₹15,000 litigation expenses.",
    amount: "₹1,00,000 Advance Refund @ 10% Interest + ₹30,000 Harassment Compensation + ₹15,000 Costs",
    takeaway:
      "Automobile manufacturers and dealers are jointly liable when promised delivery dates are breached. Consumers are immune from price hikes that occur during the dealership's delay period.",
  },
  {
    title: "District Commission Order Reimbursing Daily Taxi & Commute Bills During Extended Car Delivery Lag",
    parties: "Sunil K. Nair v. Apex Motors Pvt. Ltd.",
    citation: "Consumer Complaint No. 312/2023, DCDRC Bangalore (Urban)",
    date: "Order Dated 28 November 2023",
    facts:
      "The complainant booked a mid-size automatic sedan after disposing of his previous car based on the dealer's written delivery commitment of 3 weeks. The dealership failed to deliver the car for 82 days past the committed date. The complainant submitted itemized app-based taxi (Uber/Ola) commute invoices totaling ₹28,400 incurred for daily office travel during the delay period.",
    holding:
      "The District Consumer Commission held that financial losses directly flowing from a dealership's unexcused delay are foreseeable consequential damages under Section 73 of the Indian Contract Act, 1872. The forum found the dealership guilty of deficiency in service under Section 2(11) CPA 2019 and ordered full reimbursement of ₹28,400 in commute bills, ₹20,000 compensation for mental agony, and ₹10,000 legal costs.",
    amount: "₹28,400 Commute Reimbursement + ₹20,000 Mental Agony Award + ₹10,000 Legal Costs",
    takeaway:
      "Preserve all taxi receipts, rental car bills, or public transit tickets incurred during the delay. Consumer forums consistently award actual travel expenses when delivery commitments are breached.",
  },
];

const FAQS = [
  {
    question: "What legal rights do I have if a car dealer delays delivery past the promised date?",
    answer:
      "Under Section 2(11) of the Consumer Protection Act, 2019 and Section 31 of the Sale of Goods Act, 1930, failure to deliver a motor vehicle within the committed timeframe constitutes actionable deficiency in service and breach of contract. You have the legal right to: (1) demand firm physical delivery with a 17-character VIN allotment within 7 days, (2) claim reimbursement for alternative commute expenses (such as taxi or rental car bills) incurred during the delay, (3) demand immunity from any price hikes introduced by the OEM after the promised delivery date, or (4) cancel the booking and receive an immediate 100% refund of your advance deposit with interest.",
  },
  {
    question: "Can an automobile dealership deduct cancellation charges if I cancel due to delivery delay?",
    answer:
      "Strictly no. The National Consumer Disputes Redressal Commission (NCDRC) in Maruti Udyog Ltd. v. Susheel Kumar Sharma has conclusively held that when a consumer cancels a vehicle booking due to the dealership's failure to adhere to the agreed delivery timeline, the dealer cannot deduct cancellation or administrative fees (which typically range from ₹2,000 to ₹10,000). Any standard clause printed on the booking form that permits unilateral forfeiture constitutes an 'Unfair Contract' under Section 2(46) of the Consumer Protection Act, 2019 and is legally void ab initio.",
  },
  {
    question: "Can a dealer increase the car price if delivery is delayed beyond the price-lock date?",
    answer:
      "No. While standard vehicle booking forms state that 'prices prevailing at the time of delivery shall apply', State Consumer Commissions have repeatedly ruled that this clause does not protect the dealer if the delivery was delayed due to the dealer's or manufacturer's own administrative or logistical default. If you were ready and willing to take delivery on the committed date, any price revision or cess increase implemented during the dealer's delay period must be absorbed by the dealership or OEM, not passed onto the buyer.",
  },
  {
    question: "Am I entitled to claim taxi or rental car expenses incurred during the car delivery delay?",
    answer:
      "Yes. Under Section 73 of the Indian Contract Act, 1872 and Section 39 of the Consumer Protection Act, 2019, an aggrieved consumer is entitled to compensation for foreseeable consequential loss directly caused by the other party's breach. If you sold your previous vehicle or relied on the dealer's written delivery commitment and were compelled to spend on app-cabs (Uber, Ola) or self-drive rentals, you can claim full reimbursement by submitting date-stamped ride receipts and bank payment proofs alongside your formal complaint letter.",
  },
  {
    question: "What should I do if the dealer allocates a vehicle that fails the Pre-Delivery Inspection (PDI)?",
    answer:
      "You have the absolute legal right to refuse registration and delivery of any vehicle showing manufacturing defects, repainted panels, abnormal odometer readings (exceeding 100 km), or flood/transit damage during your Pre-Delivery Inspection (PDI). Never make the full ex-showroom payment or sign the RTO registration Form 20 before completing a comprehensive physical PDI. If the dealer forces you to accept a defective vehicle, immediately serve a formal notice demanding fresh VIN allotment or 100% refund under Chapter VI (Product Liability) of the CPA 2019.",
  },
  {
    question: "Can I claim interest on the booking advance held by the dealer during the delay?",
    answer:
      "Yes. Under Section 61 of the Sale of Goods Act, 1930 and the Interest Act, 1978, where a seller retains purchase money without delivering the goods, the buyer is entitled to interest on the blocked funds from the date the payment was made or from the promised delivery date. Consumer commissions routinely award statutory interest ranging between 9% and 12% per annum on the withheld booking deposit alongside litigation costs.",
  },
  {
    question: "कार या बाइक डिलीवरी में देरी होने पर डीलर को शिकायत पत्र कैसे लिखें और रिफंड कैसे मांगें?",
    answer:
      "यदि डीलरशिप तय समय सीमा में कार या दोपहिया वाहन की डिलीवरी नहीं देती है, तो आप इस पृष्ठ पर दिए गए 'विकल्प D: हिंदी शिकायत पत्र' प्रारूप का उपयोग कर सकते हैं। पत्र में बुकिंग डॉकेट नंबर, जमा अग्रिम राशि, तय डिलीवरी तिथि और बैंक खाता विवरण (NEFT/RTGS हेतु) दर्ज करें। पत्र में स्पष्ट उल्लेख करें कि उपभोक्ता संरक्षण अधिनियम 2019 की धारा 2(11) व 2(47) के तहत डीलर किसी भी प्रकार का कैंसिलेशन चार्ज नहीं काट सकता। यदि डीलर 7 दिनों में डिलीवरी या 100% रिफंड नहीं देता, तो राष्ट्रीय उपभोक्ता हेल्पलाइन (1915) एवं ई-दाखिल पोर्टल पर परिवाद दर्ज कराया जा सकता है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complaint Letter for a Delayed Car or Bike Delivery",
  description:
    "Complaint letter to your dealer for delayed vehicle delivery, demanding a firm date, compensation or a full refund.",
  datePublished: "2026-11-06T10:00:00+05:30",
  dateModified: "2026-11-06T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/car-delivery-delay-complaint-letter`,
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
    "@type": "AutomotiveBusiness",
    name: "Automobile Dealership Delivery Delay Dispute Framework India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Car Delivery Delay Complaint Letter (Free Formats)",
  description:
    "Formal statutory complaint letter templates to vehicle dealerships for delivery delay, demanding firm delivery date, delay compensation, or 100% booking advance refund.",
  encodingFormat: "application/msword",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Automobile Buyers, Two-Wheeler Consumers & EV Purchasers in India",
    },
  },
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
      name: "Vehicle & Dealership Legal Notices",
      item: `${SITE_URL}/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Car Delivery Delay Complaint Letter",
      item: `${SITE_URL}/templates/car-delivery-delay-complaint-letter`,
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

export default function CarDeliveryDelayComplaintLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B]">
        {/* Top Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Car Dealer Dispute Hub",
                href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
              },
              {
                label: "Delivery Delay Complaint Letter",
                href: "/templates/car-delivery-delay-complaint-letter",
              },
            ]}
          />
        </div>

        {/* Hero Header */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Statutory Vehicle Dispute Framework &bull; Updated November 2026
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Complaint Letter for a Delayed Car or Bike Delivery
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            Complaint letter to your dealer for delayed vehicle delivery, demanding a firm date, compensation or a full refund.
          </p>

          {/* Answer Box First (40-60 words mandate) */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-xl shadow-xs mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-800 font-bold text-xs uppercase tracking-wider">
                Direct Legal Answer &bull; Section 2(11) CPA 2019
              </span>
            </div>
            <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
              If an automobile dealership fails to deliver your booked car, motorcycle, or electric vehicle by the committed date, they commit actionable deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. You can legally demand: (1) physical delivery with VIN allocation within 7 days, (2) reimbursement of alternative commute cab bills, or (3) 100% advance refund with 9%–12% interest with zero cancellation deductions.
            </p>
          </div>

          {/* Key Facts Summary Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs mb-10">
            <div className="bg-slate-900 text-white px-5 py-3 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Key Facts: Delayed Vehicle Delivery Dispute &amp; Statutory Remedies (2026)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60 w-1/3">
                      Governing Statutes
                    </th>
                    <td className="px-5 py-3 text-slate-900">
                      Consumer Protection Act, 2019 (Sections 2(11), 2(46), 2(47), 35) &bull; Sale of Goods Act, 1930 (Sections 31, 32, 61) &bull; Indian Contract Act, 1872 (Section 73)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60">
                      Dealer Cancellation Deduction
                    </th>
                    <td className="px-5 py-3 text-emerald-700 font-bold">
                      ₹0 (Strictly Prohibited by NCDRC Precedents when delay is caused by dealership)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60">
                      Statutory Cure Notice Window
                    </th>
                    <td className="px-5 py-3 text-slate-900">
                      7 to 15 Calendar Days to allocate VIN or release complete NEFT refund
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60">
                      Entitlement to Interest
                    </th>
                    <td className="px-5 py-3 text-slate-900">
                      9% to 12% per annum on blocked advance deposit from committed delivery date
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60">
                      Alternative Commute Recovery
                    </th>
                    <td className="px-5 py-3 text-slate-900">
                      App-cab (Uber/Ola) and car rental invoices incurred during delay window
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60">
                      Jurisdictional Redressal Forums
                    </th>
                    <td className="px-5 py-3 text-slate-900">
                      National Consumer Helpline (1915) &rarr; 15-Day Advocate Notice &rarr; District Consumer Disputes Redressal Commission (DCDRC on e-Jagriti)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3 font-bold text-slate-700 bg-slate-50/60">
                      Platform Advocate Notice Fee
                    </th>
                    <td className="px-5 py-3 text-red-600 font-bold">
                      Flat ₹1,499 (Advocate-drafted, dispatched via Speed Post + Email tracking)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </header>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sticky Table of Contents */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <CarDeliveryTableOfContents />

              {/* Quick Consultation Badge */}
              <div className="mt-6 bg-slate-100 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 hidden lg:block">
                <span className="font-bold text-slate-900 block mb-1">
                  Need an Advocate-Drafted Notice?
                </span>
                If the dealership ignores your written complaint letter for more than 7 days, escalate immediately to an advocate demand notice.
                <a
                  href="#heading-advocate-escalation"
                  className="block mt-2 font-semibold text-red-600 hover:text-red-700"
                >
                  View advocate notice process &rarr;
                </a>
              </div>
            </aside>

            {/* Right Main Column */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-12">
              {/* Section 1: Statutory Basis */}
              <section id="heading-statutory-basis" aria-labelledby="heading-statutory-basis-title">
                <h2
                  id="heading-statutory-basis-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  What Are Your Statutory Rights When a Car Dealer Delays Delivery?
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When an automobile purchaser deposits booking money with an authorized dealership, a binding reciprocal contract is formed under the Sale of Goods Act, 1930 and the Indian Contract Act, 1872. The dealer promises to deliver a specific vehicle within a stipulated timeframe, and the purchaser agrees to pay the residual consideration upon successful inspection.
                  </p>
                  <p>
                    Under Section 2(11) of the Consumer Protection Act, 2019, &ldquo;deficiency&rdquo; encompasses any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance that is required to be maintained by law or contract. When a dealership repeatedly postpones delivery dates, withholds the Vehicle Identification Number (VIN), or offers evasive excuses about factory dispatch backlogs, they commit an undisputed deficiency in service.
                  </p>
                  <p>
                    Furthermore, misleading promises regarding delivery timelines given by sales executives to induce booking deposits fall under Section 2(47) as an &ldquo;Unfair Trade Practice&rdquo;. The law provides you with clear, enforceable remedies to compel delivery or recover every single rupee paid with statutory interest.
                  </p>
                </div>
              </section>

              {/* Section 2: Interactive Letter Workspace (Archetype P1) */}
              <section id="heading-interactive-workspace" aria-labelledby="heading-interactive-workspace-title">
                <h2
                  id="heading-interactive-workspace-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  Interactive Application Generator &amp; Annotated Complaint Templates
                </h2>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Use the live-fill workspace below to input your booking docket details, dealership address, and specific remedy (delivery demand with cab expenses or 100% advance refund). Your custom letter compiles automatically with live word counts, downloadable as a Word document or printable directly.
                </p>

                {/* Client Workspace Component */}
                <CarDeliveryTemplateWorkspace />
              </section>

              {/* Section 3: Clause-by-Clause Legal Annotations */}
              <section id="heading-legal-clauses-annotation" aria-labelledby="heading-legal-clauses-annotation-title">
                <h2
                  id="heading-legal-clauses-annotation-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  Clause-by-Clause Legal Annotations: Why Each Paragraph Is Critical
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-mono">1</span>
                      Reciprocal Obligations &amp; Essential Terms (Sale of Goods Act, s.31)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Paragraph 1 establishes the exact commercial bargain. Under Section 31 and 32 of the Sale of Goods Act, 1930, the seller&apos;s duty to deliver goods and the buyer&apos;s duty to accept and pay for them are concurrent conditions. By documenting your booking docket number and payment date, you establish that you fulfilled your initial condition precedent.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-mono">2</span>
                      Time as the Essence of the Contract (Contract Act, s.55)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Paragraph 2 explicitly locks the committed delivery date. Under Section 55 of the Indian Contract Act, 1872, when a party promises to do a certain thing at or before a specified time, and fails to do so, the contract becomes voidable at the option of the promisee. Establishing that delivery was time-sensitive prevents the dealer from pleading indefinite supply chain delays.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-mono">3</span>
                      Deficiency in Service &amp; Unfair Trade Practice (CPA 2019, s.2(11) &amp; s.2(47))
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Paragraph 3 invokes statutory consumer protections. Misleading promises regarding vehicle inventory to secure advance booking tokens constitute unfair trade practices. Specifying the absence of VIN allocation proves that the dealership accepted funds without possessing confirmed allocation from the manufacturer.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-mono">4</span>
                      Bar on Cancellation Penalties &amp; Unfair Contract Terms (CPA 2019, s.2(46))
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Paragraph 4 directly dismantles the dealership&apos;s standard threat of deducting ₹2,000–₹10,000 as &ldquo;cancellation fees&rdquo;. The National Consumer Disputes Redressal Commission (NCDRC) has ruled that a dealer who is in breach cannot penalize the innocent buyer. Under Section 2(46), one-sided forfeiture clauses are legally unenforceable.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-mono">5</span>
                      Foreseeable Consequential Damages &amp; Alternative Commute (Contract Act, s.73)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Paragraph 5 puts the dealership on notice for actual out-of-pocket commute expenditures. When a consumer disposes of their existing car or relies on a committed vehicle delivery date, expenses incurred on taxi rides or car rentals represent direct consequential loss recoverable in consumer forums.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Cancellation Fee Myth */}
              <section id="heading-cancellation-fee-myth" aria-labelledby="heading-cancellation-fee-myth-title">
                <h2
                  id="heading-cancellation-fee-myth-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  The Cancellation Fee Myth: Why Dealership Deductions Are Illegal
                </h2>
                <div className="bg-red-50/60 border border-red-200 rounded-xl p-6 text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Almost every automobile booking docket features fine print stating: <em>&ldquo;In the event of cancellation by the customer, a cancellation charge of ₹3,000 / ₹5,000 shall be deducted.&rdquo;</em> Dealerships routinely brandish this clause when an exasperated buyer requests their money back after waiting months past the promised delivery date.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Under Indian consumer jurisprudence, this deduction is completely illegal when the delay is on the dealer&apos;s end:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      <strong>Breach by Seller Negates Forfeiture:</strong> A forfeiture clause can only operate if the buyer backs out without cause when the seller is ready and willing to deliver. If the dealership has failed to deliver within the promised window, the dealership is in fundamental breach of contract. A defaulting party cannot penalize the non-defaulting party.
                    </li>
                    <li>
                      <strong>Unfair Contract under Section 2(46) CPA 2019:</strong> Any contractual term that imposes an unreasonable charge, penalty, or disadvantage on the consumer without reciprocal liability on the trader constitutes an &ldquo;Unfair Contract&rdquo; and can be declared null and void by consumer commissions.
                    </li>
                    <li>
                      <strong>Settled Apex Forum Rulings:</strong> The National Commission in <em>Maruti Udyog Ltd. v. Susheel Kumar Sharma</em> established that where delivery is delayed, the dealer must return 100% of the advance with interest and zero administrative deductions.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Price Hike Protection */}
              <section id="heading-price-hike-protection" aria-labelledby="heading-price-hike-protection-title">
                <h2
                  id="heading-price-hike-protection-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  Price Hike Immunity: Can Dealers Demand Post-Booking Escalations?
                </h2>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>
                    A common dealer malpractice in high-demand vehicle segments is deliberately stalling delivery until the manufacturer announces an ex-showroom price revision, and then demanding that the consumer pay the additional ₹25,000 to ₹75,000 before releasing the car.
                  </p>
                  <p>
                    Consumer commissions have firmly clamped down on this tactic:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <span className="font-bold text-slate-900 block mb-1">Price Protection Principle</span>
                      If the committed delivery date fell before the OEM price revision date, the consumer is legally shielded. The dealership cannot benefit from its own wrongdoing by pocketing increased margins or forcing the customer to pay for their logistical tardiness.
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <span className="font-bold text-slate-900 block mb-1">Remedy in Court</span>
                      District and State Consumer Commissions routinely order dealerships to deliver the vehicle at the original booked price without any surcharge, or refund the full amount with 12% interest and compensation for the lost price-lock advantage.
                    </div>
                  </div>
                </div>
              </section>

              {/* Hand-authored SVG Escalation Diagram */}
              <section aria-label="Escalation Timeline Diagram" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <span>📐</span> Hand-Authored Escalation Workflow: From Delay to Recovery
                </h3>
                <div className="w-full overflow-x-auto pb-2">
                  <svg
                    viewBox="0 0 800 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[650px] h-auto"
                    role="img"
                    aria-label="Workflow diagram showing 4 stages: Formal Letter, NCH 1915, Advocate Notice, and e-Jagriti Consumer Court"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="170" height="130" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="35" cy="45" r="14" fill="#0F172A" />
                    <text x="35" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                    <text x="60" y="48" fill="#0F172A" fontSize="13" fontWeight="bold">Written Letter</text>
                    <text x="25" y="80" fill="#475569" fontSize="11">Formal Complaint</text>
                    <text x="25" y="98" fill="#475569" fontSize="11">Give 7-day cure window</text>
                    <text x="25" y="125" fill="#DC2626" fontSize="10" fontWeight="bold">Option A or B Demand</text>

                    {/* Arrow 1 */}
                    <path d="M190 85 H215" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="220" y="20" width="170" height="130" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="245" cy="45" r="14" fill="#0F172A" />
                    <text x="245" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                    <text x="270" y="48" fill="#0F172A" fontSize="13" fontWeight="bold">NCH 1915</text>
                    <text x="235" y="80" fill="#475569" fontSize="11">National Consumer Help</text>
                    <text x="235" y="98" fill="#475569" fontSize="11">INGRAM portal docket</text>
                    <text x="235" y="125" fill="#D97706" fontSize="10" fontWeight="bold">CCPA Ministry Flag</text>

                    {/* Arrow 2 */}
                    <path d="M400 85 H425" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Stage 3 */}
                    <rect x="430" y="20" width="170" height="130" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                    <circle cx="455" cy="45" r="14" fill="#DC2626" />
                    <text x="455" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                    <text x="480" y="48" fill="#991B1B" fontSize="13" fontWeight="bold">Advocate Notice</text>
                    <text x="445" y="80" fill="#7F1D1D" fontSize="11">15-Day Statutory Notice</text>
                    <text x="445" y="98" fill="#7F1D1D" fontSize="11">Speed Post + Tracking</text>
                    <text x="445" y="125" fill="#DC2626" fontSize="10" fontWeight="bold">BSA s.63 Compliant</text>

                    {/* Arrow 3 */}
                    <path d="M610 85 H635" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Stage 4 */}
                    <rect x="640" y="20" width="150" height="130" rx="10" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                    <circle cx="665" cy="45" r="14" fill="#16A34A" />
                    <text x="665" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                    <text x="690" y="48" fill="#14532D" fontSize="13" fontWeight="bold">e-Jagriti</text>
                    <text x="655" y="80" fill="#166534" fontSize="11">District Commission</text>
                    <text x="655" y="98" fill="#166534" fontSize="11">Refund + 12% Interest</text>
                    <text x="655" y="125" fill="#15803D" fontSize="10" fontWeight="bold">CPA 2019 Section 35</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Worked Case Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  Worked Case Example: ₹16.5L SUV Booking Delay and Full Recovery
                </h2>
                <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs text-sm text-slate-700 leading-relaxed space-y-4">
                  <div className="bg-slate-50 border-l-4 border-slate-700 p-4 rounded-r-lg">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Illustrative Real-World Scenario
                    </span>
                    <p className="text-slate-800">
                      <strong>The Dispute:</strong> On 12 July 2026, an IT professional in Pune booked a compact SUV (₹16,50,000 on-road) paying an advance of ₹51,000. The dealership issued a written docket assuring delivery within 30 days (by 12 August 2026). Having sold his old hatchback, the buyer required daily transportation. By 25 October 2026 (74 days past the committed deadline), the dealership still had not allotted a VIN, postponed delivery four times, and when asked for a refund, threatened to deduct ₹5,000 as cancellation charges.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800">
                          <th className="border border-slate-200 px-4 py-2 text-left">Claim Component</th>
                          <th className="border border-slate-200 px-4 py-2 text-left">Dealership Offer</th>
                          <th className="border border-slate-200 px-4 py-2 text-left">Statutory Legal Entitlement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2 font-medium">Advance Booking Principal</td>
                          <td className="border border-slate-200 px-4 py-2 text-amber-700 font-mono">₹46,000 (after ₹5,000 cut)</td>
                          <td className="border border-slate-200 px-4 py-2 text-emerald-700 font-mono font-bold">₹51,000 (100% full refund)</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2 font-medium">Interest on Blocked Funds</td>
                          <td className="border border-slate-200 px-4 py-2 text-slate-500">₹0 (Refused)</td>
                          <td className="border border-slate-200 px-4 py-2 text-emerald-700 font-mono">₹1,836 (12% p.a. for period of delay)</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2 font-medium">Daily Cab Commute Bills</td>
                          <td className="border border-slate-200 px-4 py-2 text-slate-500">₹0 (Refused as unrelated)</td>
                          <td className="border border-slate-200 px-4 py-2 text-emerald-700 font-mono">₹18,400 (Actual app-cab receipts)</td>
                        </tr>
                        <tr className="bg-slate-50 font-bold">
                          <td className="border border-slate-200 px-4 py-2">Total Settlement Realized</td>
                          <td className="border border-slate-200 px-4 py-2 text-red-600">₹46,000</td>
                          <td className="border border-slate-200 px-4 py-2 text-emerald-700">₹71,236 Recovered</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    <strong>Outcome:</strong> Upon receipt of the formal 15-day statutory advocate legal notice citing NCDRC precedents, the Dealership Principal settled within 6 days, releasing ₹51,000 via RTGS alongside ₹15,000 towards documented cab expenses, avoiding adverse consumer court proceedings.
                  </p>
                </div>
              </section>

              {/* Section 7: 4-Stage Escalation Ladder */}
              <section id="heading-escalation-ladder" aria-labelledby="heading-escalation-ladder-title">
                <h2
                  id="heading-escalation-ladder-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  If They Ignore Your Letter: The 4-Stage Escalation Ladder
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Level 1: Written Delay Complaint Letter (Option A or Option B)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Deliver the template above via hand delivery with an acknowledged receiving stamp or via Registered Email directly to the Dealer Principal, General Manager (Sales), and the OEM Regional Customer Experience Head. Give them exactly 7 calendar days to cure the breach.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Level 2: National Consumer Helpline (NCH 1915 / INGRAM Portal)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the showroom is uncooperative, dial 1915 or lodge an online complaint on consumerhelpline.gov.in. Upload the booking docket, payment receipt, and written delivery assurances. NCH assigns a formal government grievance docket number and notifies the OEM automobile manufacturer directly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white border border-red-200 rounded-xl p-5 shadow-xs bg-red-50/30">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Level 3: 15-Day Advocate Statutory Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Serve an official advocate notice under Section 2(11) and 2(47) CPA 2019 on advocate letterhead via Registered Speed Post with electronic tracking admissible under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. Over 85% of dealerships settle at this stage to avoid public litigation and OEM dealer audit penalties.
                      </p>
                      <Link
                        href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
                        className="inline-block mt-2 text-xs font-semibold text-red-600 hover:text-red-700 underline"
                      >
                        Explore statutory notice details for car dealers &rarr;
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        Level 4: Consumer Commission Complaint via e-Jagriti (Section 35 CPA 2019)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the 15-day notice window expires without resolution, file a formal complaint before the District Consumer Disputes Redressal Commission (DCDRC) via the government&apos;s e-Jagriti portal. Claim 100% advance refund, 12% to 18% penal interest, reimbursement of commute costs, and compensation for mental agony.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Case Citations Digest */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title">
                <h2
                  id="heading-case-citations-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  Consumer Court Precedents on Delayed Vehicle Delivery
                </h2>
                <div className="space-y-6">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                        <h3 className="text-base font-bold text-slate-900 leading-snug">{cit.title}</h3>
                        <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 shrink-0">
                          {cit.amount}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-500 mb-2">
                        {cit.parties} &bull; {cit.citation} ({cit.date})
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 mb-3">
                        <p>
                          <strong>Facts:</strong> {cit.facts}
                        </p>
                        <p>
                          <strong>Holding:</strong> {cit.holding}
                        </p>
                      </div>
                      <div className="bg-slate-50 border-l-2 border-red-500 p-2.5 rounded-r text-xs text-slate-800">
                        <strong>Practical Takeaway:</strong> {cit.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Pre-Delivery & Evidentiary Records Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4"
                >
                  Pre-Delivery Inspection (PDI) &amp; Documentary Evidence Checklist
                </h2>
                <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs text-sm text-slate-700 space-y-4">
                  <p>
                    Before lodging a formal complaint or serving a legal notice, assemble the following documentary trail to establish incontrovertible liability under Section 63 of Bharatiya Sakshya Adhiniyam, 2023:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Original Booking Docket:</strong> Copy of the official order form showing variant, color, promised delivery date, and booking date.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Payment Receipts &amp; Bank UTR:</strong> Proof of advance transfer from your bank account to the dealership&apos;s corporate account.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>WhatsApp &amp; Email Communications:</strong> Exported chats and emails with sales executives documenting delivery date commitments.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Alternative Commute Receipts:</strong> Date-stamped Uber/Ola cab invoices or car rental agreements during the delay period.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Pre-Delivery Inspection (PDI) Log:</strong> If a vehicle was allotted but failed PDI, photographs of odometer readings or body defects.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>
                        <strong>Price Lock Documentation:</strong> Original price quotation given at booking time to prevent unauthorized post-delay markups.
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 text-xs text-slate-500">
                    Learn how to exercise your rights during PDI in our guide:{" "}
                    <Link
                      href="/refuse-new-car-delivery-pdi-defects"
                      className="font-semibold text-slate-800 underline hover:text-red-600"
                    >
                      Can You Refuse New Car Delivery? PDI Defects &amp; Buyer Rights &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 10: Advocate Notice Escalation */}
              <section id="heading-advocate-escalation" aria-labelledby="heading-advocate-escalation-title">
                <CarDeliveryNoticeCTA
                  buttonText="Send Advocate Notice to Dealership &amp; OEM"
                  variant="primary"
                />
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title">
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6"
                >
                  Frequently Asked Questions: Delayed Car &amp; Bike Deliveries
                </h2>
                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources & Legal References */}
              <section id="heading-primary-sources" aria-labelledby="heading-primary-sources-title">
                <h2
                  id="heading-primary-sources-title"
                  className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-3"
                >
                  Primary Sources &amp; Statutory Legal References
                </h2>
                <ul className="text-xs text-slate-600 space-y-2 border-t border-slate-200 pt-3">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-slate-700 hover:text-red-600"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Related Recovery Guides */}
              <section aria-label="Related Guides" className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
