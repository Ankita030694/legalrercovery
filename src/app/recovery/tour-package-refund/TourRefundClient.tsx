'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to tour package refund recovery claims
const faqs = [
  {
    question: "Can a tour operator refuse a refund if they cancel the holiday package?",
    answer: "No. If a tour operator cancels a holiday package unilaterally due to operational failures, lack of bookings, or administrative issues, they are legally required to refund your entire payment immediately in cash. They cannot force you to accept credit notes, vouchers, or alternate travel dates. Under the Consumer Protection Act, 2019, unilateral cancellation is a clear 'deficiency in service.' You are entitled to a full refund plus compensation for any losses (e.g., separate flight tickets booked to reach the departure city) and the mental agony caused by the ruined vacation plans."
  },
  {
    question: "What happens to my tour deposit if the trip is cancelled due to weather or landslides?",
    answer: "If a package tour is cancelled due to force majeure (Act of God) like landslides, floods, heavy rain, or lockdowns, the contract is frustrated. The tour operator cannot pocket your advance or booking deposit. Under Indian consumer law, the operator must refund your money, after deducting only actual, verifiable out-of-pocket costs that they have already paid to third parties (like hotels or transport providers) that are strictly non-refundable. The operator must present valid receipts and invoices for these deductions. If they refuse to provide proof of third-party payments, the deduction is illegal, and you can recover the entire amount."
  },
  {
    question: "What constitutes a 'Deficiency in Service' in tour packages under consumer law?",
    answer: "In tour packages, deficiency in service includes: (1) Providing substandard hotel accommodation that does not match the promised rating or photos. (2) Non-functional or unsafe transport vehicles. (3) Skipping parts of the promised itinerary without valid justification or alternate arrangements. (4) Failing to provide promised services like tour guides, meals, or entry tickets. (5) Abandoning travelers during the trip or failing to coordinate safety measures. You can claim a refund for the value of the unprovided services and substantial damages for harassment."
  },
  {
    question: "Can tour operators charge arbitrary cancellation fees that exceed the package price?",
    answer: "No. Cancellation fees charged by tour operators must be reasonable, proportional, and transparently declared at the time of booking. A tour operator cannot charge a 100% cancellation fee for cancellations made weeks in advance unless they can prove they incurred matching non-refundable costs. If the cancellation terms are arbitrary or hidden, they are classified as unfair contract terms under the Consumer Protection Act, and you can challenge them in court."
  },
  {
    question: "What should I do if a travel portal and the local tour operator blame each other for my refund?",
    answer: "This is a common issue when holiday packages are booked online. The portal claims the local operator has not returned the money, while the operator claims they haven't received it from the portal. To resolve this, serve a formal joint legal notice naming both the travel portal (OTA) and the local tour operator as co-respondents. Under the Consumer Protection Act, both are jointly liable to ensure the refund reaches the consumer. Listing both parties forces their legal compliance teams to coordinate and resolve the refund immediately to avoid court proceedings."
  },
  {
    question: "Can I get a refund if the hotel room provided during my tour is dirty or unsafe?",
    answer: "Yes. If the lodging provided during a package tour is unhygienic, lacks basic amenities (like hot water or AC), or is located in an unsafe area, you must document the conditions immediately by taking photos and videos. Send a written complaint to the tour manager and OTA helpline on the spot. If they fail to provide an acceptable, equivalent alternative, you can book your own accommodation and demand a full refund for that portion of the package plus reimbursement for the extra cost incurred, which you can recover through a consumer complaint."
  },
  {
    question: "Is there a limitation period to file a legal claim for a tour package refund?",
    answer: "Yes. Under the Consumer Protection Act, 2019, you must file a consumer complaint within **two years** from the date the dispute arose (the date the package was cancelled or the date the operator refused the refund). You should serve a statutory demand notice within the first few weeks of the dispute to establish a strong pre-litigation paper trail."
  },
  {
    question: "What evidence do I need to support my tour package refund case?",
    answer: "You must preserve: (1) The holiday package brochure, booking receipt, and detailed itinerary showing the promised services and ratings. (2) Proof of all payments made (receipts, bank statement, or card charge slips). (3) All emails, chats, or WhatsApp messages exchanged with the tour manager or agency regarding the dispute. (4) Photographs or videos documenting any substandard services, dirty rooms, or unfulfilled promises. (5) Legal notice served and proof of delivery."
  },
  {
    question: "Can a tour operator escape liability by claiming they are just an 'aggregator'?",
    answer: "No. Under Indian consumer law, if a company packages and sells a tour under its own brand name and issues the booking voucher, they are legally the primary service provider. They cannot avoid liability by claiming they are just aggregating independent hotels or transport operators. They are responsible for the quality and delivery of every component in their package."
  },
  {
    question: "What damages can I claim in consumer court for a ruined holiday package?",
    answer: "In a consumer commission, you can claim: (1) A full refund of the package cost or the value of the unprovided services. (2) Interest on the delayed refund (typically 9% to 12% per annum). (3) Substantial compensation for mental agony, harassment, and disappointment caused by a ruined vacation (often ranging from ₹25,000 to ₹1.5 Lakhs). (4) Out-of-pocket expenses (like booking alternate hotels or transport). (5) Legal expenses."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "Tour Package Refund", "item": "https://www.legalrecovery.in/recovery/tour-package-refund" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tour Package Refund Recovery India: Recover Holiday Dues Under Consumer Protection Act",
  "description": "Comprehensive legal guide on recovering delayed, withheld, or deficient tour package refunds in India. Learn your rights against tour operators, travel portal joint liabilities, and legal actions under consumer protection laws.",
  "image": "https://www.legalrecovery.in/og-tour-package.png",
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
  "name": "Tour Package Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-tour-package.png",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "285" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Deepika Sen" },
      "reviewBody": "Our family group tour to Himachal was cancelled due to heavy landslides. The operator refused to refund our advance of ₹85,000. LegalRecovery served a notice citing frustration of contract rulings. The operator refunded ₹78,000 back. Very professional."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Abhishek Banerjee" },
      "reviewBody": "MMT and the local operator blamed each other for my cancelled Europe package refund of ₹2.4 Lakhs. LegalRecovery drafted a joint notice.Mytrip settled and refunded the full amount within two weeks. Outstanding results."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Ritu Sharma" },
      "reviewBody": "The operator skipped half the sightseeing spots and put us in a dirty hotel. LegalRecovery helped us document the proof and file a case. We won a 50% refund plus ₹20,000 damages for mental agony."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Jaspreet Singh" },
      "reviewBody": "The tour package was cancelled unilaterally by the operator. They offered only credit notes valid for 6 months. LegalRecovery took over, served a notice, and forced the operator to refund the cash back. Superb support."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Nikhil Kapoor" },
      "reviewBody": "Our holiday package was ruined due to substandard transport and lodging. LegalRecovery helped us file a service deficiency complaint on e-Daakhil. We won a refund of ₹45,000 plus litigation expenses."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Meera Vasudevan" },
      "reviewBody": "I cancelled my tour package due to medical reasons, but they charged a 100% cancellation fee. With LegalRecovery's help, I served a statutory notice and recovered the taxes and a partial waiver. Highly satisfied."
    }
  ]
};

export default function TourRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) => prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]);
  };

  const tocSections = [
    { id: "legal-rights-tour-packages-india", title: "Consumer Rights & OTA Liability" },
    { id: "cancellation-by-operator-and-force-majeure", title: "Unilateral Cancellations" },
    { id: "substandard-services-and-unfulfilled-itineraries", title: "Substandard Services" },
    { id: "the-operator-agent-vendor-liability", title: "Establishing Joint Liability" },
    { id: "escalation-playbook-notices-edaakhil", title: "Escalation & e-Daakhil" },
    { id: "expert-tour-package-refund-services", title: "The LegalRecovery Advantage" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Tour Package Refund", href: "/recovery/tour-package-refund" },
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
              Vacation Claim Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Withheld <span className="text-[#DC2626]">Tour Package</span> Refund
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Ruined vacation, cancelled package tours, or substandard lodging? Under Indian consumer law, tour operators cannot escape liability by pocketing your booking advance. Get expert legal representation to recover your holiday dues.
            </p>
            <button onClick={() => setIsPaymentModalOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer">
              Initiate Package Recovery
            </button>
          </div>
        </div>

        {/* Layout container using the requested non-container wrapper */}
        <div className="mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6"><Breadcrumbs items={breadcrumbItems} /></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                <section id="legal-rights-tour-packages-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Statutory Foundation: Deficiency of Service and Unfair Terms in Package Tours under the Consumer Protection Act, 2019
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Holiday packages represent a major expenditure for families and travelers. When you purchase a customized vacation package or sign up for a group tour, you enter into a legally binding contract. Under the <strong>Consumer Protection Act, 2019</strong>, tour operators, travel agencies, and booking portals are legally classified as service providers. They have a statutory duty to deliver the exact quality, scheduling, and standard of services (accommodation, transport, and sightseeing) described in the booking details. Any failure to meet these standards constitutes a <strong>deficiency in service</strong> and an <strong>unfair trade practice</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many tour operators attempt to shield themselves from liability by inserting one-sided clauses into their carriage terms, declaring that booking advances are strictly non-refundable and that the agency is not liable for weather-related cancellations or vendor failures. Under Section 2(47) of the Consumer Protection Act, 2019, terms that create a significant imbalance between the rights of the consumer and the operator are classified as <strong>unfair contract terms</strong>. Consumer commissions in India have repeatedly struck down these clauses. If a tour operator cancels the package or fails to provide the promised services, they cannot hide behind disclaimers to pocket your booking deposit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, online booking portals like MakeMyTrip, Cleartrip, or EaseMyTrip that package and sell these tours under their own brand are jointly liable. The travel portal cannot evade liability by deflecting the blame onto independent local hotels or cab drivers. They are the contracting party with the consumer and must manage the refund process. Both the booking OTA and the local operator are listed as co-respondents in consumer forums.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A tour operator cannot enrich itself by keeping booking advances when the service fails. Under the Consumer Protection Act, 2019, they are primary service providers and remain responsible for the delivery and refund of every component in their package.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="cancellation-by-operator-and-force-majeure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Refund Mechanics: Unilateral Operator Cancellations, Deductions, and Force Majeure
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If a tour operator cancels a holiday package unilaterally due to operational failures, lack of group size, or backend booking errors, they must refund the entire amount immediately. They cannot force you to accept credit codes or shift the vacation to other dates against your will. Unilateral cancellation is a direct breach of contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In cases of cancellations caused by force majeure (such as earthquakes, floods, landslides, lockdowns, or severe weather that makes the destination inaccessible), the doctrine of frustration of contract applies. Under Indian law, the operator must refund your money, deducting only actual, verifiable expenses they have already paid to third parties (like airlines or hotels) that are strictly non-refundable. The operator must present valid invoices and receipts to prove these third-party deductions. Keeping the service fee or deducting arbitrary amounts without proof is illegal, and you can recover the entire amount.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="substandard-services-and-unfulfilled-itineraries" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    deficiency of Service: Claiming Refunds for Substandard Stays, Unsafe Transport, and Missed Sightseeing
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A major point of dispute is the delivery of substandard services during the tour. If the operator promises a 4-star hotel but places you in an unhygienic guest house, or if the transport vehicle is non-functional or unsafe, it constitutes a severe deficiency in service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Similarly, if the operator skips parts of the promised itinerary without valid justification or alternate arrangements, they are in breach of contract. You have the right to claim a partial refund representing the value of the unprovided services and compensation for the loss of enjoyment and mental agony. You must document these deficiencies with photos, videos, and written complaints sent to the tour manager on the spot to support your claim.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="the-operator-agent-vendor-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Establishing Liability: Holding Tour Operators, Booking Agents, and Local Vendors Accountable Jointly
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When dealing with travel disputes, consumers are often caught between booking agents and local operators. To resolve this:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Direct Reference Verification:</strong> We request the booking portal to provide transaction logs and reference numbers showing the refund status with the local operators.
                      </li>
                      <li>
                        <strong>Joint Demand Notices:</strong> Naming both the travel portal and the local operator in a formal joint notice prevents them from deflecting responsibility.
                      </li>
                      <li>
                        <strong>Joint Consumer Complaints:</strong> We list all parties (portal, operator, local agent) as co-respondents in consumer commissions, forcing them to resolve the dispute jointly.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="escalation-playbook-notices-edaakhil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Legal Escalation Playbook: Statutory Demand Notice, NCH Grievances, and e-Daakhil Filings
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover your withheld tour package refund, you must follow a structured legal playbook:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Step 1: Statutory Demand Notice (Days 1–7):</strong> We draft a formal notice addressed to the tour operator and booking portal, giving them a 15-day deadline to credit the refund.
                      </li>
                      <li>
                        <strong>Step 2: NCH Grievance Escalation (Days 7–21):</strong> Simultaneously, we register the grievance on the National Consumer Helpline (NCH) portal, forcing their compliance cells to review the case.
                      </li>
                      <li>
                        <strong>Step 3: Filing a Consumer Case (Days 21+):</strong> If they ignore the notice, we file a formal consumer complaint through the e-Daakhil portal to approach the District Consumer Commission, demanding the refund, interest, compensation, and legal expenses.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="expert-tour-package-refund-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The LegalRecovery Advantage: Structured Advocacy and Successful Outcomes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering withheld holiday package refunds from tour operators and booking portals requires professional legal representation. LegalRecovery is India's leading platform for consumer rights enforcement and claim recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our team of consumer advocates, travel experts, and financial analysts manages the entire recovery process. We track the transaction path, draft and serve the statutory notices, escalate the matter on the NCH portal, and represent you before the Consumer Commissions. We work on a transparent model to ensure you get your hard-earned money back without the stress of managing the dispute yourself.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With a success rate of over 91% in resolving withheld travel package refunds, we ensure that consumer rights are respected. If a tour operator or travel portal is holding your refund, contact LegalRecovery today to start your recovery campaign.
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
                <h3 className="text-sm font-black mb-3">Claim Package Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Operators must refund deposits for cancelled tours. We serve statutory demands, track transaction references, and enforce recovery.
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
