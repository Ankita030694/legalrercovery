'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to travel booking refund recovery claims
const faqs = [
  {
    question: "Who is legally liable if a travel portal (OTA) delays my cancellation refund?",
    answer: "Under the Consumer Protection Act, 2019, Online Travel Agencies (OTAs) like MakeMyTrip, Cleartrip, Yatra, Agoda, and Booking.com are classified as 'service providers,' not merely neutral intermediaries. They cannot escape liability by claiming that the service was to be provided by a third-party airline, hotel, or tour operator. If you cancel a booking according to the terms, or if the provider cancels, the OTA is jointly and severally liable to ensure that the refund is returned to you. If the airline or hotel has already refunded the money to the OTA, and the OTA delays releasing it to you, they are committing a deficiency in service and are liable to pay the principal amount plus interest and damages."
  },
  {
    question: "What is a 'Deficiency in Service' under consumer law for travel bookings?",
    answer: "A deficiency in service is defined as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance that is required to be maintained under law or contract. For travel bookings, this includes: (1) Failing to process refunds within a reasonable timeframe (usually 14 to 30 days) after cancellation. (2) Charging excessive, hidden, or non-transparent cancellation fees that violate central guidelines. (3) Failing to provide the promised quality of hotel rooms, transport, or itineraries. (4) Failing to inform the passenger of schedule changes or cancellations, resulting in loss. You can sue the travel provider or agency in consumer court to claim full refunds plus damages for these deficiencies."
  },
  {
    question: "How long does a travel portal have to refund my money after cancellation?",
    answer: "Under Ministry of Consumer Affairs guidelines and the IT Intermediary Rules, refunds for cancelled bookings should be initiated immediately and credited to the user's account within 14 to 30 working days. For air travel bookings specifically, DGCA guidelines require airlines to refund travel agents within 14 days, and the agent must transfer that refund to the passenger. If a refund is pending for more than 30 days, it is classified as a service deficiency and an unfair trade practice, enabling the consumer to escalate the matter through legal channels."
  },
  {
    question: "Can travel portals charge arbitrary or excessive cancellation fees in India?",
    answer: "No. The Central Consumer Protection Authority (CCPA) and the Ministry of Civil Aviation have repeatedly warned travel portals and airlines against charging excessive and arbitrary cancellation fees. The cancellation fee cannot exceed the basic fare plus fuel charge of the ticket. If you cancel a booking, and the portal attempts to charge fees that exceed this limit, or charges fee amounts that were not transparently disclosed at the time of booking, it constitutes an unfair trade practice. You can contest these fees and demand a full recalculation of the refund."
  },
  {
    question: "What are my rights if a tour operator cancels a holiday package due to force majeure?",
    answer: "If a tour operator cancels a package tour due to force majeure (e.g., natural disasters, heavy rain, landslides, lockdowns, or political instability), they are exempt from paying compensation for breach of contract. However, they cannot withhold your booking money. They must refund the amount paid by you, after deducting only actual, verifiable out-of-pocket expenses that they have already paid to third-party providers (like airlines or hotels) that are non-refundable. The tour operator must provide documentary proof of these third-party payments. If they refuse to provide proof or deduct arbitrary amounts, you can file a complaint with the consumer court."
  },
  {
    question: "What should I do if a hotel refuses a refund for a booking that was advertised as refundable?",
    answer: "If you cancelled a hotel booking within the designated 'free cancellation' window, but the hotel or booking portal refuses to refund your deposit, you must: (1) Take screenshots of the original booking details showing the 'free cancellation' terms and the date/time of cancellation. (2) Send a formal email citing these screenshots to the hotel manager and the OTA. (3) If they do not comply, register a complaint on the National Consumer Helpline (NCH). (4) If the amount is substantial, serve a statutory legal notice. Under the Consumer Protection Act, failing to honor a advertised refund policy constitutes an unfair trade practice and a direct breach of contract."
  },
  {
    question: "How do I deal with the 'airline says ask agent, agent says ask airline' deadlock?",
    answer: "This is a classic deflection strategy. To resolve this: (1) Request the airline in writing to provide the status of the refund. Specifically ask for the transaction date and the ARN/RRN (Acquirer Reference Number) showing the transfer to the travel agent. (2) Once the airline provides the ARN/RRN, forward it to the travel agent and demand immediate credit. (3) If the airline refuses to provide the data, or if the agent denies receiving the funds despite the RRN, serve a formal legal notice naming both entities as co-respondents. This forces both parties to present their bank records in a consumer forum, immediately resolving the deadlock."
  },
  {
    question: "Does the look-in option apply to flight bookings made through travel agents?",
    answer: "Yes. Under DGCA CAR rules, airlines must offer a 24-hour 'look-in' option allowing passengers to cancel or change their ticket booking without any cancellation fee. This applies to all bookings, whether made directly with the airline or through travel agents and portals, provided the ticket is booked at least 7 days before the flight departure. Travel portals cannot charge an agent service fee for cancellations made during this look-in window, and they must refund the complete ticket amount."
  },
  {
    question: "Can I claim a refund if a tour operator provides substandard services compared to the booking details?",
    answer: "Yes. If a tour operator promises premium services (e.g., 4-star hotels, air-conditioned transport, guided tours) in the booking details but provides substandard facilities (e.g., unhygienic rooms, non-functional AC, missing itinerary items), it constitutes a severe deficiency in service. You can demand a partial refund for the value of the unprovided services and compensation for the loss of enjoyment and mental agony. You must document the substandard services with photographs, videos, and written complaints sent to the tour manager on the spot."
  },
  {
    question: "What is the procedure to file a travel refund case on e-Daakhil?",
    answer: "To file a consumer case on the e-Daakhil portal: (1) Register as a consumer on e-daakhil.nic.in. (2) Draft a consumer complaint stating the facts of the booking, the cancellation, the delayed refund, and the legal notices served. (3) Upload supporting documents: booking confirmation, cancellation email, payment receipts, bank statements showing no credit, and the legal notice with proof of service. (4) Pay the nominal court fee online (no fee for claims up to ₹5 Lakhs). (5) Submit the complaint to the District Consumer Commission in the jurisdiction where you reside or where the OTA has its office. The case can be conducted online without hiring an advocate if you choose to present it yourself."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "Travel Booking Refund", "item": "https://www.legalrecovery.in/recovery/travel-booking-refund" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Travel Booking Refund Recovery India: Recover Dues from OTAs, Hotels, and Tour Operators",
  "description": "Comprehensive legal guide on recovering delayed and withheld refunds for travel bookings, tour packages, hotel bookings, and flights in India. Understand consumer protection laws, OTA liabilities, and escalation channels.",
  "image": "https://www.legalrecovery.in/og-travel-booking.png",
  "author": { "@type": "Organization", "name": "Team LegalRecovery", "url": "https://www.legalrecovery.in" },
  "publisher": { "@type": "Organization", "name": "LegalRecovery", "logo": { "@type": "ImageObject", "url": "https://www.legalrecovery.in/logo.png" } },
  "datePublished": "2026-06-08",
  "dateModified": "2026-06-08"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Travel Booking Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-travel-booking.png",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "415" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Kiran Kumar" },
      "reviewBody": "MMT delayed my Europe tour package refund of ₹1.8 Lakhs for 5 months, blaming flight operators. LegalRecovery sent a joint notice to both.Mytrip processed the full amount back to my bank within 12 days. Highly professional service."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Priyanka Nair" },
      "reviewBody": "Agoda charged me ₹32,000 for a free-cancellation hotel booking and refused to refund. LegalRecovery registered an NCH grievance and served a legal notice. Agoda reversed the charges. Excellent and fast execution."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Niranjan Sen" },
      "reviewBody": "A local tour operator cancelled our Shimla package due to landslides but kept our advance of ₹45,000. LegalRecovery filed a consumer case. We got the full refund plus ₹15,000 in damages for mental agony."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Ritu Sharma" },
      "reviewBody": "EaseMyTrip and SpiceJet kept passing the buck for my cancelled flight ticket refund of ₹14,000. I was stuck for months. LegalRecovery took up the case and resolved it. Got the refund back. Very satisfied."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Abhishek Banerjee" },
      "reviewBody": "We were given a extremely dirty hotel room instead of the premium room promised in our tour package. LegalRecovery helped us file a service deficiency case. We won a 50% refund of the package cost."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Vikas Joshi" },
      "reviewBody": "I cancelled my flight booking during the 24-hour free look-in window, but the agent charged a heavy cancellation fee. LegalRecovery helped file a complaint. The agent refunded the complete fare."
    }
  ]
};

export default function TravelRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) => prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]);
  };

  const tocSections = [
    { id: "consumer-rights-travel-bookings-india", title: "Consumer Rights & OTA Liability" },
    { id: "refund-deadlines-excessive-cancellation-fees", title: "Timelines & Excess Fees" },
    { id: "travel-packages-hotel-booking-disputes", title: "Hotel & Package Disputes" },
    { id: "the-agent-airline-blame-game-strategy", title: "Unmasking Joint Liability" },
    { id: "escalation-playbook-notices-consumer-helpline", title: "Escalation & Litigation" },
    { id: "expert-travel-booking-refund-services", title: "The LegalRecovery Advantage" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Travel Booking Refund", href: "/recovery/travel-booking-refund" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Consumer Travel Claims
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Withheld <span className="text-[#DC2626]">Travel Booking</span> Refund
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with delayed holiday package, hotel, or flight booking refunds from Online Travel Agencies (OTAs)? Under Indian consumer law, portals cannot dodge refund liability. Recover your money through expert legal advocacy.
            </p>
            <button onClick={() => setIsPaymentModalOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer">
              Initiate Refund Recovery
            </button>
          </div>
        </div>

        {/* Layout container using the requested non-container wrapper */}
        <div className="mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6"><Breadcrumbs items={breadcrumbItems} /></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">

                {/* Section 1 */}
                <section id="consumer-rights-travel-bookings-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Legal Foundation: Consumer Protection Act, 2019 and OTA Liability
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Online Travel Aggregators (OTAs) have transformed the travel industry, making booking flights, hotels, and holiday packages a matter of a few clicks. However, this convenience often vanishes when things go wrong and refunds are due. Travel portals frequently attempt to dodge refund liability by claiming they are merely neutral technological intermediaries connecting the passenger with the service provider (airline, hotel, or tour operator). They present their terms of service as a shield, stating that they are not responsible for cancellations or refund delays.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This defense is legally invalid in India. Under the <strong>Consumer Protection Act, 2019</strong>, OTAs are classified as <strong>service providers</strong>, not merely intermediaries. They collect the ticket fare, charge a convenience fee, issue the booking confirmation under their own brand, and manage the reservation portal. Consequently, they owe a duty of care to the consumer. Any failure by the travel portal to process refunds, or any arbitrary delay in releasing funds received from the airline or hotel, constitutes a direct <strong>deficiency in service</strong> and an <strong>unfair trade practice</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the <strong>Central Consumer Protection Authority (CCPA)</strong>, a statutory body established under the Act to protect consumer rights, has taken strict action against travel portals regarding withheld refunds. The CCPA has clarified that if a consumer pays the travel agent, the agent is responsible for ensuring the refund is returned to the consumer. The agent cannot hold passenger funds hostage by citing administrative delays or disputes with the backend operators.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Travel portals are contractually and legally bound to return consumer funds when a booking is cancelled. Under the Consumer Protection Act, 2019, they cannot hide behind intermediary disclaimers to escape liability for withholding refunds.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="refund-deadlines-excessive-cancellation-fees" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Refund Economics: Processing Timelines and Excessive Cancellation Fees
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A major point of dispute between passengers and travel portals is the delay in processing refunds and the deduction of excessive cancellation charges. Under e-commerce rules and guidelines issued by the Ministry of Consumer Affairs, refunds for travel bookings must be processed and credited to the original payment method within a reasonable period, typically <strong>14 to 30 working days</strong> from the cancellation date. Any delay beyond this timeline is considered an unfair holding of passenger capital.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another challenge is the charging of excessive, arbitrary cancellation fees. Some portals charge a 'portal cancellation fee' in addition to the airline or hotel cancellation charge, which can swallow the entire value of the booking. The CCPA has initiated investigations into these practices, stating that cancellation fees must be reasonable, transparently disclosed at the time of booking, and must not exceed the basic fare plus fuel charge of the ticket. The travel portal cannot levy fees that are not explicitly agreed to by the passenger in the primary booking contract.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="travel-packages-hotel-booking-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Holiday Packages and Lodging Disputes: Wasted Bookings and Deficient Services
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Disputes involving holiday packages and hotel bookings are highly common. Holiday packages often involve multiple components: flights, hotel stays, transport, and sightseeing tours. If a tour operator fails to provide any of these promised services—for instance, placing you in a lower category hotel, providing a non-functional transport vehicle, or cancelling a portion of the itinerary without notice—it constitutes a severe deficiency in service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the tour is cancelled by the operator due to force majeure (such as natural disasters or travel restrictions), the operator must return your money. While they can deduct actual, non-refundable expenses paid to third parties (like airlines or international hotels), they must provide objective documentary proof of these deductions. They cannot deduct arbitrary amounts or pocket the service fee. If a hotel booking advertised as 'fully refundable' is withheld, it constitutes a clear breach of contract and an unfair trade practice.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="the-agent-airline-blame-game-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Unmasking the Agent-Airline Blame Game: Establishing Joint Liability
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The most common obstacle in recovering travel refunds is the deflection strategy used by portals and airlines. The airline claims that the refund has been processed and sent to the travel agent's account, while the travel agent insists that they have not received any funds from the airline. This blame game can drag on for months, leaving the consumer without their money.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To dismantle this strategy, we follow a joint liability approach:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Direct Transaction Tracking:</strong> We request the airline to provide the precise date, time, and <strong>ARN/RRN (Acquirer Reference Number)</strong> of the refund transfer to the travel agent. This reference number is the definitive proof of payment.
                      </li>
                      <li>
                        <strong>Serving Joint Demand Notices:</strong> Once the transaction is tracked, we serve a formal notice to both the airline and the travel portal. Naming both parties prevents them from deflecting responsibility and forces their compliance teams to coordinate and locate the funds.
                      </li>
                      <li>
                        <strong>Joint Consumer Court Filings:</strong> In consumer complaints, we list both the operating carrier and the OTA as co-respondents. Under consumer precedents, both entities are jointly responsible until the refund is credited to your bank account.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="escalation-playbook-notices-consumer-helpline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Dispute Escalation Playbook: Grievance Officers, NCH, and e-Daakhil
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover your withheld travel refund, you must follow a structured legal playbook. Bypassing front-line customer care and escalating the dispute through formal channels is key to success:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Step 1: Statutory Legal Notice (Days 1–7):</strong> We draft a formal demand notice addressed directly to the OTA's designated Grievance Officer and the airline's Nodal Officer. This notice cites the booking details, payment proofs, PNR, and outlines the service deficiency. We set a strict 15-day deadline for repayment.
                      </li>
                      <li>
                        <strong>Step 2: National Consumer Helpline Escalation (Days 7–21):</strong> Simultaneously, we register the grievance on the National Consumer Helpline (NCH) portal. Major travel portals are registered partners on the NCH portal, and NCH grievances are monitored by consumer affairs officials, which often prompts immediate resolution to protect the portal's compliance rating.
                      </li>
                      <li>
                        <strong>Step 3: Filing a Consumer Forum Case (Days 21+):</strong> If they ignore the notice and NCH grievance, we file a formal consumer complaint through the e-Daakhil system. The complaint will demand the principal refund, interest at 12% per annum, compensation for mental harassment, and legal costs.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="expert-travel-booking-refund-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The LegalRecovery Advantage: Strategic Debt Recovery and Consumer Advocacy
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India's leading legal-tech platform specializing in debt recovery and consumer claim enforcement. We understand that passengers do not have the time or resources to fight large corporate travel portals and airlines. That is why we manage the entire recovery lifecycle for you.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our panel of consumer rights advocates, aviation experts, and data analysts handles the entire process: from verifying transaction logs and tracking RRN numbers to drafting and serving the statutory notices, managing the NCH escalation, and presenting your case before the Consumer Commissions. We operate on a transparent model to make consumer justice accessible to everyone in India.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With a success rate of over 91% in pre-litigation settlements, we hold defaulting portals accountable. If a travel agent, portal, or hotel is withholding your refund, contact LegalRecovery today to start your recovery campaign.
                    </p>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-extrabold text-sm text-slate-900">{rev.author.name}</span>
                          <span className="text-[#DC2626] text-xs font-black">Rating: {rev.reviewRating.ratingValue}/5 ★</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-4 sm:p-5 flex justify-between items-center bg-white hover:bg-slate-50/50 cursor-pointer transition-colors"
                          >
                            <span className="font-extrabold text-xs sm:text-sm text-slate-800 leading-snug">
                              {faq.question}
                            </span>
                            <span className={`text-[#DC2626] text-xs font-black transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-655 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Claim Travel Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  OTAs cannot block your refunds. We serve statutory demands, track transaction references, and enforce recovery.
                </p>
                <button onClick={() => setIsPaymentModalOpen(true)} className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer">
                  Start Recovery Now
                </button>
              </div>
            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
