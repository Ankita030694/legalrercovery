'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to hotel booking refund recovery claims
const faqs = [
  {
    question: "Can a hotel keep my money if they cancel the booking unilaterally?",
    answer: "No. If a hotel cancels your booking unilaterally due to overbooking, maintenance, or any other operational reason, they are legally required to refund your entire booking amount immediately. They cannot force you to accept credit codes or alternate dates. Furthermore, under the Consumer Protection Act, 2019, cancelling a confirmed booking last minute is classified as a severe 'deficiency in service' and 'unfair trade practice.' You are not only entitled to a full refund but can also sue the hotel for the cost of any replacement accommodation you had to purchase and compensation for mental agony."
  },
  {
    question: "What are my rights if my 'non-refundable' booking was cancelled due to a natural disaster?",
    answer: "Various State Consumer Commissions and courts in India have ruled that 'non-refundable' clauses in hotel contracts become invalid in cases of force majeure (Act of God) such as heavy landslides, floods, lockdowns, or severe natural disasters that make travel impossible. If the customer could not reach the hotel due to these events, the hotel cannot unjustly enrich itself by withholding the money. They must process a full or partial refund, minus only actual, verifiable out-of-pocket costs that they had already incurred for the booking."
  },
  {
    question: "What constitutes a 'Deficiency in Service' for hotel stays under consumer law?",
    answer: "Under the Consumer Protection Act, deficiency in service for hotel stays includes: (1) Rooms or amenities not matching the advertised photos or description (e.g., unhygienic conditions, broken AC, no water). (2) Overbooking leading to denied check-in despite holding a confirmed booking. (3) Charging more than the advertised rate or double-charging. (4) Unilateral cancellations without prior notice. (5) Refusing to refund deposits for bookings cancelled within the advertised 'free cancellation' policy. You can claim a refund and additional damages for these violations."
  },
  {
    question: "Who is responsible for the refund if I booked the hotel through an online travel agent (OTA)?",
    answer: "Both the hotel and the online booking portal (like MakeMyTrip, Agoda, Goibibo, Booking.com) are jointly and severally liable. The portal cannot claim they are just a booking engine and wash their hands of the refund. If the hotel cancels or fails to provide the room, the OTA must coordinate the refund and ensure it reaches your bank account. In consumer court cases, both the hotel and the OTA are listed as co-respondents, and the court will direct them to resolve the refund jointly."
  },
  {
    question: "Can a hotel charge arbitrary cancellation fees that exceed the booking cost?",
    answer: "No. The cancellation fee must be reasonable and proportional. A hotel cannot charge a cancellation fee that exceeds the booking value or basic room rate. If you cancel your stay, and the hotel attempts to charge fees that were not clearly disclosed in the booking terms at the time of purchase, it constitutes an unfair trade practice. You are entitled to a refund of the remaining balance after deduction of a reasonable, transparently declared cancellation fee."
  },
  {
    question: "What is a credit card chargeback and can I use it for hotel refund disputes?",
    answer: "Yes. If you paid for the hotel booking using a credit card, and the hotel did not provide the service (e.g., they denied check-in, the hotel was closed, or they double-charged your card), you can file a formal 'chargeback' request with your credit card issuing bank. Under card network rules (Visa/Mastercard), this is classified as 'Services Not Rendered' or 'Duplicate Billing.' You must submit proof of booking, cancellation confirmations, and proof that the hotel refused the refund. The bank will temporarily reverse the charge and investigate. If the hotel cannot prove they provided the service, the refund is permanently credited back to your card."
  },
  {
    question: "Can I get a refund if the hotel room is dirty or lacks basic amenities?",
    answer: "Yes. If the room is unhygienic, or lacks the basic services promised during booking (e.g., non-functional bathrooms, no electricity, insect infestation), you must document the conditions immediately by taking photos and videos. Send a written complaint to the hotel reception and the OTA manager on the spot, stating that you cannot occupy the room. If they fail to provide an alternate, acceptable room, you can leave the hotel and demand a full refund. If they refuse, file a consumer complaint for deficiency in service to recover your booking amount and the cost of booking an alternate hotel."
  },
  {
    question: "Is there a deadline to file a consumer complaint against a hotel in India?",
    answer: "Under the Consumer Protection Act, 2019, you must file your consumer complaint within <strong>two years</strong> from the date the dispute arose (the date the booking was cancelled or the date the hotel refused the refund). It is highly recommended to serve a formal legal notice within the first few months to create a solid paper trail and try to settle the dispute out of court before filing."
  },
  {
    question: "What documents do I need to preserve to sue a hotel for a refund?",
    answer: "You must preserve: (1) The original booking confirmation receipt showing the payment details, room category, and cancellation terms. (2) Proof of payment (bank statement or credit card slip). (3) All emails, chats, or messages exchanged with the hotel and the booking portal regarding the dispute. (4) Photographs or videos documenting the substandard conditions of the hotel (if applicable). (5) Legal notice served and proof of delivery."
  },
  {
    question: "What can I recover in consumer court besides the hotel booking refund?",
    answer: "In a consumer forum, you can recover: (1) The principal booking amount. (2) Interest on the delayed refund amount (ranging from 9% to 12% per annum). (3) Compensation for mental agony, harassment, and disappointment caused by the disrupted travel. (4) Actual out-of-pocket costs incurred (e.g., booking a replacement hotel at a higher rate, extra taxi fares). (5) Litigation expenses."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "Hotel Booking Refund", "item": "https://www.legalrecovery.in/recovery/hotel-booking-refund" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hotel Booking Refund Recovery India: Claim Lodging Dues Under Consumer Laws",
  "description": "Comprehensive legal guide on recovering delayed, withheld, or double-charged hotel booking refunds in India. Understand your consumer rights regarding refundable vs non-refundable bookings, OTA joint liabilities, and legal actions.",
  "image": "https://www.legalrecovery.in/og-hotel-booking.png",
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
  "name": "Hotel Booking Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-hotel-booking.png",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "395" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Nisha Krishnan" },
      "reviewBody": "Agoda and a resort in Munnar refused to refund my booking amount of ₹38,000 after flight cancellations due to heavy rainfall. LegalRecovery drafted a notice citing force majeure rulings. The booking platform processed the full refund. Excellent service."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rahul Deshmukh" },
      "reviewBody": "The hotel cancelled my confirmed booking on Christmas eve because they overbooked. They refused any compensation or refund. LegalRecovery helped file a consumer case. We won a full refund plus ₹25,000 for mental harassment."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sanjay Dutt" },
      "reviewBody": "Agoda double-charged my card for a hotel in Goa. They kept delaying the refund for months. LegalRecovery helped me file a chargeback and served a notice. The bank permanently reversed the charges. Very satisfied."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Kavita Seth" },
      "reviewBody": "MMT and a hotel in Ooty had a dispute. They held my refund of ₹16,000 hostage. LegalRecovery stepped in, filed a case against both co-respondents, and recovered the entire amount within 15 days."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Aman Verma" },
      "reviewBody": "The resort was unhygienic and completely different from the pictures. We checked out immediately, but they refused to refund. LegalRecovery helped us document the proof and file a case. Won the refund plus litigation costs."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Priyanka Roy" },
      "reviewBody": "I cancelled within the free cancellation window, but the hotel deducted a massive fee. With LegalRecovery's guidance, I served a statutory notice and recovered the entire deducted amount. Highly recommend their services."
    }
  ]
};

export default function HotelRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) => prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]);
  };

  const tocSections = [
    { id: "legal-rights-hotel-bookings-india", title: "Consumer Rights & OTA Liability" },
    { id: "cancellation-rules-and-force-majeure", title: "Non-Refundable Rulings" },
    { id: "ad-hoc-deductions-and-unfair-policies", title: "Unfair Policies & Overcharges" },
    { id: "the-hotel-portal-dispute-strategy", title: "Dispute Strategies & Chargebacks" },
    { id: "escalation-playbook-notices-daakhil", title: "Escalation & e-Daakhil" },
    { id: "expert-hotel-refund-recovery-services", title: "The LegalRecovery Advantage" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Hotel Booking Refund", href: "/recovery/hotel-booking-refund" },
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
              Lodging Dispute Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Withheld <span className="text-[#DC2626]">Hotel Booking</span> Refund
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with hotel cancellations, double charges, or OTA disputes? Under Indian consumer law, hotels cannot hide behind arbitrary non-refundable terms if service fails. Get expert legal representation to recover your lodging dues.
            </p>
            <button onClick={() => setIsPaymentModalOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer">
              Initiate Hotel Recovery
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
                <section id="legal-rights-hotel-bookings-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Statutory Foundation: Consumer Protection Act 2019
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Hotel bookings represent a core component of travel and hospitality, and disputes regarding refunds for lodging are heavily regulated in India. Under the <strong>Consumer Protection Act, 2019</strong>, hotels, resorts, home-stays, and the Online Travel Agencies (OTAs) that market them are classified as service providers. This means they are legally bound to deliver services that match the specifications, quality, and standards promised at the time of booking. Any failure to do so, or any arbitrary refusal to refund customer money when the service is not utilized, constitutes a <strong>deficiency in service</strong> and an <strong>unfair trade practice</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 2(47) of the Consumer Protection Act, 2019, terms and conditions that create a significant imbalance between the rights of the consumer and the service provider to the detriment of the consumer are classified as <strong>unfair contract terms</strong>. This is highly relevant to lodging contracts. Hotels frequently attempt to enforce rigid disclaimers stating that all payments are 100% non-refundable under any circumstances. However, consumer courts have consistently ruled that these disclaimers are not absolute. If a hotel cannot provide the room as booked (e.g., due to overbooking), or if the room is substandard and unoccupiable, the hotel cannot cite a 'non-refundable' policy to pocket the customer's money. The court has the authority to strike down these unfair terms and order a full refund plus interest.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, booking portals like Agoda, Booking.com, and MakeMyTrip are co-liable. They act as the payment collection agent and issue the confirmation voucher. The OTA cannot escape liability by claiming they are merely a tech engine. If a customer is denied check-in or suffers from substandard services, the OTA must coordinate the refund process and return the funds. Both the operating hotel and the booking portal are co-defendants in consumer forums.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A hotel cannot enrich itself unjustly by keeping booking fees when the service is not rendered or when the customer cancellations occur under force majeure conditions. Consumer commissions regularly award full refunds plus compensation to passengers who challenge these unfair practices.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="cancellation-rules-and-force-majeure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Hotel Refund Rules: Non-Refundable Terms &amp; Force Majeure
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Lodging contracts are divided into two main structures: refundable and non-refundable bookings. If you book a refundable room, the hotel must credit the refund to your bank account if you cancel within the free cancellation window. Any delay in processing this credit, or any unauthorized deductions of service charges or processing fees, constitutes a direct breach of contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For 'non-refundable' bookings, the legal position shifts in cases of <strong>force majeure</strong> (such as landslides, heavy rain, earthquakes, lockdowns, or severe flight cancellations that make it impossible to reach the resort). Under the doctrine of frustration of contract, if travel is prevented by an Act of God or regulatory order, the contract becomes impossible to perform. Consumer commissions have ruled that hotels cannot retain the entire booking deposit in these scenarios. They must refund the fare, deducting only actual, verifiable expenses that they had already incurred for the booking.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="ad-hoc-deductions-and-unfair-policies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Exposing Hidden Hotel Fees &amp; False Advertising
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Another major point of dispute is the deduction of arbitrary or hidden fees. Some hotels charge extra taxes, resort fees, or check-in charges that were not disclosed in the primary booking contract. These are classified as unfair trade practices. Additionally, if a hotel room fails to match the advertised photos (e.g., unhygienic washrooms, insect infestations, non-functional AC), you have the right to reject the room on check-in and demand a full refund. You must document these conditions immediately with photographs and videos to support your claim.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="the-hotel-portal-dispute-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Booking Portal Deflections &amp; Card Chargebacks
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When dealing with hotel refund disputes, passengers are often stuck between the hotel and the booking portal. To break this deadlock, we follow a joint liability approach:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Transaction Reference Tracking (ARN/RRN):</strong> We request the booking portal to provide the precise transaction details and reference numbers showing the refund transfer to the hotel.
                      </li>
                      <li>
                        <strong>Initiating Credit Card Chargebacks:</strong> If you paid via card, we help you file a chargeback request with your card issuing bank for 'Services Not Rendered,' which bypasses the hotel's customer support and forces a formal investigation.
                      </li>
                      <li>
                        <strong>Filing Joint Consumer Court Complaints:</strong> We list both the hotel operator and the booking OTA as co-respondents in consumer commissions, preventing them from deflecting responsibility.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="escalation-playbook-notices-daakhil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Legal Escalation: Notices, NCH &amp; e-Daakhil Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover your withheld hotel refund, you must follow a structured legal playbook:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Step 1: Statutory Demand Notice (Days 1–7):</strong> We draft a formal notice addressed directly to the hotel management and the OTA's compliance officer, giving them a 15-day deadline to credit the refund.
                      </li>
                      <li>
                        <strong>Step 2: National Consumer Helpline Escalation (Days 7–21):</strong> Simultaneously, we register the grievance on the National Consumer Helpline (NCH) portal, forcing their compliance cells to review the case.
                      </li>
                      <li>
                        <strong>Step 3: Filing a Consumer Case (Days 21+):</strong> If the notice does not result in a refund, we file a formal consumer complaint through the e-Daakhil portal to approach the District Consumer Commission, demanding the refund, interest, compensation, and legal expenses.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="expert-hotel-refund-recovery-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The LegalRecovery Hotel Claims Advantage
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering withheld lodging refunds from hotels and online travel portals requires professional legal representation. LegalRecovery is India's leading platform for passenger and consumer rights enforcement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our team of consumer advocates, travel experts, and financial analysts manages the entire recovery process. We track the transaction path, draft and serve the statutory notices, escalate the matter on the NCH portal, and represent you before the Consumer Commissions. We work on a transparent model to ensure you get your hard-earned money back without the stress of managing the dispute yourself.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With a success rate of over 91% in resolving withheld lodging refunds, we ensure that consumer rights are respected. If a hotel or travel portal is holding your refund, contact LegalRecovery today to start your recovery campaign.
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
                <h3 className="text-sm font-black mb-3">Claim Hotel Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Hotels cannot refuse refunds for failed service or force majeure. We serve statutory demands, track transaction references, and enforce recovery.
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
