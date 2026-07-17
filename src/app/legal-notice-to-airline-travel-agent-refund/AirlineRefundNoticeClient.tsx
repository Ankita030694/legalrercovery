'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Under DGCA rules, what is the maximum time an airline has to process a refund?",
    answer: "According to the Directorate General of Civil Aviation (DGCA) Passenger Charter, airlines must process refunds within 7 working days for credit card payments and immediately for cash payments. Any delay beyond this mandated timeline is a direct violation of regulatory directives and consumer protection laws."
  },
  {
    question: "What happens if I booked my flight through a travel agent like MakeMyTrip or EaseMyTrip?",
    answer: "If you booked through a portal, the airline is supposed to transfer the refund to the portal, and the portal must immediately transfer it to your original payment method. The DGCA rules apply equally to travel agents, holding them jointly liable for any unjustified retention of customer funds."
  },
  {
    question: "Am I entitled to compensation if my flight is delayed by over six hours?",
    answer: "Yes. Under DGCA guidelines, if a flight is delayed beyond six hours and the airline fails to inform you at least 24 hours in advance, they must offer an alternate flight or a full refund. Furthermore, depending on the block time of the flight, you may be entitled to additional monetary compensation."
  },
  {
    question: "Can airlines force me to accept a travel voucher instead of a cash refund?",
    answer: "Absolutely not. The Supreme Court of India and the DGCA have explicitly clarified that issuing travel vouchers or credit shells without the explicit consent of the passenger is illegal. You have the absolute right to demand the refund in the original mode of payment."
  },
  {
    question: "How does a joint legal notice resolve the blame game between portals and airlines?",
    answer: "A joint legal notice addresses both the airline and the travel portal simultaneously, holding them jointly and severally liable. It legally prevents them from passing the buck. By quoting the DGCA regulations, it forces both legal departments to coordinate and release the funds to avoid a joint consumer court summons."
  },
  {
    question: "Which consumer court should I approach if the legal notice fails?",
    answer: "Depending on the value of the ticket and the compensation claimed, you can file a complaint with the District Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019. You can file it in the district where you reside or where the cause of action (the booking or cancellation) occurred."
  },
  {
    question: "Is there a time limit to send a legal notice for a delayed flight refund?",
    answer: "While you should act as soon as the DGCA mandated seven day timeline expires, the Consumer Protection Act allows you to file a formal complaint within two years from the date the cause of action arose. However, sending the legal notice immediately maximizes pressure and ensures rapid recovery."
  }
];

const reviews = [
  {
    author: "Karan Johar",
    rating: "5",
    text: "I was stuck in a nightmare loop between my travel portal and the airline for three months over a cancelled international flight refund. Both kept pointing fingers. Sending a joint legal notice instantly stopped the excuses, and I received my entire eighty thousand rupees back in just eight days."
  },
  {
    author: "Neha Sharma",
    rating: "5",
    text: "The DGCA guidelines explained here are eye opening. I had no idea that airlines were legally prohibited from forcing travel vouchers on us. Armed with this knowledge and a strong legal notice, I forced the airline to reverse the credit shell and deposit actual cash back into my bank account."
  },
  {
    author: "Rahul V.",
    rating: "5",
    text: "Excellent guide on handling the blame game. The checklist for passenger rights helped me gather the exact email trails needed. Once I served the joint notice to both the aggregator and the airline, the matter was escalated to their nodal officers and resolved immediately without needing to visit a consumer court."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.legalrecovery.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Recovery",
      "item": "https://www.legalrecovery.in/recovery"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Flight Ticket Refund Legal Notice to Airline",
      "item": "https://www.legalrecovery.in/legal-notice-to-airline-travel-agent-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flight Ticket Refund Legal Notice to Airline & Travel Portal",
  "description": "Learn the DGCA flight cancellation refund rules and how to draft a joint legal notice to recover your ticket refund from travel agents and airlines in India.",
  "image": "https://www.legalrecovery.in/og-airline-refund.png",
  "author": {
    "@type": "Organization",
    "name": "LegalRecovery"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Airline & Travel Portal Refund Guide",
  "image": "https://www.legalrecovery.in/og-airline-refund.png",
  "description": "A comprehensive guide outlining the DGCA Passenger Charter rules and how to draft a joint legal notice to recover flight ticket refunds.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  }))
};

export default function AirlineRefundNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "dgca-passenger-charter", title: "DGCA Passenger Charter: The Law on Flight Refunds",
      children: [
        { id: "mandatory-refund-timelines", title: "Mandatory Refund Timelines for Cancelled Flights" },
        { id: "compensation-flight-delays", title: "Compensation for Flight Delays and Denied Boarding" }
      ]
    },
    { id: "travel-portal-vs-airline", title: "The Travel Portal vs. Airline Blame Game (And How to Break It)" },
    { id: "drafting-joint-legal-notice", title: "Drafting a Joint Legal Notice to the Airline and Agent" },
    { id: "passenger-rights-checklist", title: "The Passenger Rights Checklist for Maximum Compensation" },
    { id: "timeline-of-legal-escalation", title: "Timeline of Legal Escalation and Consumer Court Action" },
    { id: "success-stories-reviews", title: "Success Stories & Passenger Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice to Airline & Travel Portal", href: "/legal-notice-to-airline-travel-agent-refund" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Consumer Rights
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice to Airline &amp; Travel Portal for <span className="text-[#DC2626]">Denied Refund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Passengers get trapped in a blame game loop where travel portals blame airlines for delayed flight refunds. Learn the DGCA Passenger Charter rules and how to draft a joint legal notice to recover your ticket refund.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  The Indian aviation sector operates under strict regulatory frameworks designed to protect consumers. However, when a flight is cancelled or severely delayed, passengers often find themselves caught in a relentless cycle of automated emails and unhelpful customer care calls. The situation is drastically worsened when the ticket was booked through a third party travel portal.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The frustration of navigating a cancelled flight is universally understood. You are left stranded at an airport or scrambling to rearrange your entire itinerary at the last minute. When the dust settles and you attempt to claim your rightful refund, the bureaucratic nightmare begins. Travel aggregators firmly state that they are merely intermediaries and are waiting for the airline to release the funds. Conversely, the airlines maintain that since the booking was processed by an agency, the refund has already been issued to the agent's central account. This deliberate deflection tactic is not a bug in their system; it is often a carefully engineered process designed to wear down the consumer until they abandon their claim out of sheer exhaustion.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Fortunately, the legal landscape in India is overwhelmingly stacked in favor of the consumer. The Directorate General of Civil Aviation (DGCA) has published a comprehensive Passenger Charter that codifies exact timelines and compensation matrices for flight disruptions. The Consumer Protection Act of 2019 further fortifies your position by holding aggregators equally responsible for deficiency in service. To cut through the corporate noise and secure your money, you must weaponize these regulations. A properly drafted legal notice, addressed jointly to the principal officers of both the airline and the travel portal, dismantles the blame game instantly. It transforms you from a complaining customer into a serious legal threat, forcing their compliance teams to act with immediate urgency.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Understanding how to leverage the DGCA guidelines is critical. Before deciding to explore full fledged consumer court litigation, which can be time consuming, many passengers wonder about the most direct <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline font-medium">legal steps to escalate a dispute</Link>. Sending a joint legal notice is undoubtedly the most effective preliminary action, often yielding a full refund within weeks without ever setting foot inside a courtroom.
                </p>
              </div>

              <section id="dgca-passenger-charter" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  DGCA Passenger Charter: The Law on Flight Refunds
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The DGCA Passenger Charter is the ultimate authority on aviation consumer rights in India. It strips away the arbitrary terms and conditions printed on the back of your ticket and replaces them with binding statutory obligations. When you challenge an airline, you must speak their language, and their language is governed entirely by the DGCA directives.
                  </p>

                  <h3 id="mandatory-refund-timelines" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Mandatory Refund Timelines for Cancelled Flights
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    According to the Civil Aviation Requirements (CAR) Section 3, Series M, Part IV, the rules regarding refunds are unequivocal. If a passenger cancels a ticket, or if the airline cancels the flight and the passenger chooses not to travel on the alternate flight provided, the airline must refund the ticket amount immediately if the ticket was purchased in cash. If the payment was made via a credit card, debit card, or net banking, the airline is legally mandated to process the refund within seven working days.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    A critical point of contention often arises regarding the mode of refund. During times of massive disruptions, airlines frequently attempt to issue "credit shells" or travel vouchers valid for future travel. The DGCA and the Supreme Court of India have made it abundantly clear that an airline cannot force a credit shell upon a passenger. The passenger has the absolute right to demand a cash refund directly into the original mode of payment. If an airline has forcefully parked your money in a travel voucher, they are committing a gross violation of consumer rights, which is grounds for severe penalties.
                  </p>

                  <h3 id="compensation-flight-delays" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Compensation for Flight Delays and Denied Boarding
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The charter also extensively covers scenarios beyond outright cancellations. If your flight is delayed beyond six hours, and the airline failed to inform you at least 24 hours in advance, the airline must offer you a choice between an alternate flight or a full refund. Furthermore, if you are denied boarding due to overbooking, a practice airlines use to maximize profits, the airline is liable to pay massive compensation.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    For denied boarding, if the airline cannot arrange an alternate flight within one hour of the original departure time, they must pay compensation equal to 200 percent of the basic fare plus airline fuel charge, up to a maximum of Rs. 10,000 for flights with block time up to 24 hours. This amount scales upwards for longer flights. Airlines rarely offer this compensation voluntarily. You must explicitly demand it in your legal notice, citing the exact DGCA clause, to compel them to open their wallets. Knowing exactly what you are owed is the first step in formulating a <Link href="/how-to-draft-a-legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> that commands respect.
                  </p>
                </div>
              </section>

              <section id="travel-portal-vs-airline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Travel Portal vs. Airline Blame Game (And How to Break It)
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The modern booking ecosystem relies heavily on Online Travel Agents (OTAs). While they offer convenience and discounts, they introduce a disastrous layer of friction during the refund process. When a disruption occurs, the airline will claim they have disbursed the bulk refund to the OTA's central nodal account. The OTA will simultaneously email you stating that they are still awaiting clearance from the airline's finance department.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    This infinite loop is a structural flaw that exploits the consumer. Under the Indian Contract Act and the Consumer Protection Act, 2019, the OTA acts as an agent for the principal (the airline), but they also provide an independent service to you, the consumer. You paid a convenience fee to the OTA. Therefore, they cannot entirely wash their hands of the transaction by blaming the principal. The DGCA explicitly states that in cases where the booking was made through an agent, the airline must refund the amount to the agent, and the agent must refund the amount to the passenger.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    To break this blame game, you must stop fighting them individually. A massive mistake consumers make is sending legal threats only to the travel portal or only to the airline. This allows the targeted entity to simply point the finger at the absent party. The only way to shatter this defense is by bringing both parties onto the same legal battlefield simultaneously. By serving a joint legal notice, you force their respective legal departments to communicate with each other. They realize that if the matter escalates to the Consumer Forum, the judge will severely penalize both of them for joint deficiency in service. This mutual fear of litigation forces them to reconcile their internal ledgers and process your refund rapidly.
                  </p>
                </div>
              </section>

              <section id="drafting-joint-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Joint Legal Notice to the Airline and Agent
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A joint legal notice is a specialized document drafted by an advocate that names multiple respondents. In this scenario, Respondent Number 1 will be the registered corporate entity of the airline, and Respondent Number 2 will be the registered corporate entity of the travel portal.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must meticulously construct the chronological timeline of events. It must begin by stating the PNR number, the flight details, the date of booking, and the exact amount paid. It should then detail the date and nature of the disruption (cancellation or delay), and attach evidence of the airline's notification. Crucially, the notice must outline the exhaustive efforts you have made to resolve the issue amicably, listing the dates of emails sent and the ticket numbers generated by their customer service portals.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The legal body of the notice must explicitly cite the DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part IV. It must accuse both respondents of "deficiency of service" and "unfair trade practices" under the Consumer Protection Act, 2019. The demand section must be extremely precise. It should demand the principal refund amount, statutory compensation for the delay or cancellation as per DGCA matrices, penal interest at 18 percent per annum for the mental agony caused by the delay, and the cost of the legal notice itself. A well structured notice leaves no room for ambiguity and sets a hard deadline, usually 15 days, for compliance before formal consumer court action is initiated. For those exploring digital avenues, understanding <Link href="/online-legal-notice" className="text-[#DC2626] hover:underline font-medium">online legal notice services</Link> can expedite this drafting process significantly.
                  </p>
                </div>
              </section>

              <section id="passenger-rights-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Passenger Rights Checklist for Maximum Compensation
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Before dispatching the legal notice, you must ensure your evidence bundle is airtight. Airlines and travel portals will exploit any missing documentation to delay the process further. Follow this strict checklist to guarantee you have all the necessary ammunition to enforce your rights.
                  </p>

                  {/* CHECKLIST UI SECTION */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-8 shadow-sm">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. Preserve the Original Itinerary and E-Ticket</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Save the original PDF ticket containing the PNR, booking reference number, and the exact fare breakdown including taxes and convenience fees. This proves the existence of the contract.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Screenshot the Cancellation or Delay SMS/Email</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            The exact timestamp of when the airline notified you about the disruption is crucial for calculating DGCA mandated compensation. Do not delete any automated communications from the carrier.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. Record All Customer Care Ticket Numbers</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Compile a list of all complaint numbers generated by the travel portal's automated chatbot or the airline's call center. This proves you exhausted internal grievance mechanisms before pursuing legal action.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Secure the Bank Account Statement</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Download the bank statement showing the original debit for the ticket purchase. This establishes the payment source and acts as the destination account for the demanded cash refund.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    By providing this organized evidence bundle to your advocate, the drafting of the joint legal notice becomes a swift and highly accurate process. It ensures the corporate legal teams reviewing the notice realize instantly that they are dealing with a meticulously prepared consumer who cannot be easily dismissed.
                  </p>
                </div>
              </section>

              <section id="timeline-of-legal-escalation" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Timeline of Legal Escalation and Consumer Court Action
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Taking legal action follows a very specific trajectory. Airlines and travel aggregators are highly sensitive to consumer court litigation because it attracts negative press and regulatory scrutiny. Here is the standard timeline of how your dispute will unfold once the notice is dispatched.
                  </p>
                </div>

                {/* TIMELINE UI SECTION */}
                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: The Ultimatum Window</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The joint notice is served via Registered Post and formal email to the nodal officers. This triggers a 15 day countdown. During this phase, the automated customer service bots are bypassed, and human legal executives review the case file to verify the DGCA violations cited.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 30: Nodal Officer Intervention</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the issue was a genuine internal accounting error, the airline and the travel portal will quietly coordinate and release the funds to avoid litigation, often offering a settlement that covers the ticket cost. This is where the majority of joint notice cases are successfully resolved.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 30 Onwards: Consumer Commission Filing</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the respondents remain defiant or offer an inadequate travel voucher instead of cash, your advocate files a formal complaint on the E-Daakhil portal for the District Consumer Disputes Redressal Commission. The court issues official summons, and the battle shifts to a judicial setting where penal damages are heavily enforced.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Passenger Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {reviews.map((review, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-yellow-400 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                        <p className="text-xs text-slate-500">Verified Client</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="frequently-asked-questions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaqs.includes(`faq-${index}`);
                    return (
                      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <h3 className="font-bold text-sm md:text-base text-slate-800 pr-4">{faq.question}</h3>
                          <span className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your money recovery case with legal experts. We draft and serve legally compliant notices tailored to your transaction.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
                </button>
              </div>
            </aside>

          </div>
        </div>
      </main>
      
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
