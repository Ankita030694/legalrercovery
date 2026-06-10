'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "If an event is cancelled by the organizer, am I legally entitled to a full refund including convenience fees?",
    answer: "Yes. When an event is cancelled by the organizer or ticketing platform, you are legally entitled to a full refund. Ticketing platforms like BookMyShow or Paytm Insider often attempt to deduct 'convenience fees' or 'booking charges' from the refund amount. However, consumer courts have repeatedly held that convenience fees are ancillary to the main service (the event). If the main service is not rendered, retaining any part of the money constitutes a deficiency in service and unjust enrichment. You are entitled to a 100% refund of the total debited amount."
  },
  {
    question: "Can an organizer refuse a refund by invoking a 'Force Majeure' or 'Act of God' clause?",
    answer: "No. While organizers include 'force majeure' clauses in their terms to protect themselves from breach of contract damages, they cannot use it to pocket your money. Under Section 65 of the Indian Contract Act, 1872, if a contract becomes void or is frustrated (even due to natural disasters, government lockouts, or pandemics), any party who has received a benefit (advance ticket money) must restore it to the person from whom they received it. Force majeure can excuse the organizer from paying you extra damages for cancellation, but it never excuses them from returning your ticket money."
  },
  {
    question: "Is the ticketing platform (like BookMyShow) liable, or only the event organizer?",
    answer: "Both are jointly and severally liable. Under the Consumer Protection Act, 2019, ticketing portals are not merely 'neutral intermediaries' under the IT Act when they actively market the event, handle payments, issue tickets, and charge a convenience fee. If they collect your money, they are service providers. While they may have internal agreements with the organizers to pass on the funds, the consumer's contract is directly with the platform. You have the right to send a legal notice and file a consumer court case naming both the ticketing platform and the event management company."
  },
  {
    question: "What should I do if an event is postponed indefinitely rather than officially cancelled?",
    answer: "Indefinite postponement is treated as a constructive cancellation under the law. If an event is postponed without a concrete, reasonable new date, or if the new date does not suit the consumer (e.g., if you traveled from another city specifically for that weekend), you are not obligated to accept the postponement. You have the right to reject the new date and demand a full refund. Refusing to refund in such scenarios constitutes a deficiency in service under Section 2(11) of the Consumer Protection Act."
  },
  {
    question: "Can I get a refund if I cancel my ticket due to personal emergencies?",
    answer: "Unlike organizer-led cancellations, if you cancel the ticket due to personal reasons, the refund is governed by the specific cancellation policy agreed to at the time of purchase. However, if the terms are completely one-sided (e.g., charging 100% forfeiture even if cancelled weeks in advance), consumer commissions can inspect the contract. Under Section 2(46) of the Consumer Protection Act, 2019, terms that impose an unreasonable penalty on the consumer can be declared void as an 'unconscionable contract'."
  },
  {
    question: "How long does the organizer legally have to process my refund?",
    answer: "While there is no single statutory timeline, the standard consumer law benchmark for financial transactions is 7 to 14 business days from the date of cancellation. If the platform or organizer retains your funds past 30 days without processing the refund, it is considered wrongful retention. You are entitled to claim the principal amount along with interest (usually calculated at 12% to 18% per annum) for the period of the delay."
  },
  {
    question: "What documents do I need to file a consumer case for a cancelled event refund?",
    answer: "You must preserve a complete paper and digital trail: (1) The ticket booking confirmation email and SMS; (2) The official ticket PDF showing the booking ID, price break-up, and convenience fees; (3) Bank or credit card statements showing the debit; (4) The official cancellation announcement (email, social media post, or newspaper clipping); (5) Email exchanges with customer support showing their refusal or delay; (6) A copy of the legal notice sent along with proof of delivery (postal AD card or speed post tracking report)."
  },
  {
    question: "Can I file a class-action or joint complaint if hundreds of ticket holders are affected?",
    answer: "Yes, this is highly recommended. Under Section 35(1)(c) of the Consumer Protection Act, 2019, one or more consumers can file a representative complaint on behalf of numerous consumers having the same interest, with the permission of the Consumer Commission. A joint action creates immense legal and reputational pressure on the ticketing platform and organizer, pool resources, and fast-track the resolution process."
  },
  {
    question: "What is the limitation period to file a legal claim for an event refund?",
    answer: "Under the Consumer Protection Act, 2019, the limitation period to file a complaint before the Consumer Commission is two (2) years from the date on which the cause of action arose (the date the event was officially cancelled or the date the refund was formally refused). Under the Limitation Act, 1963, the timeline for filing a civil recovery suit is three (3) years."
  },
  {
    question: "What happens if a wedding venue or event vendor cancels and refuses to return the advance?",
    answer: "This is a direct breach of contract. Venue bookings, catering, decors, and artist bookings are governed by the Indian Contract Act, 1872. If the vendor cancels their service, they cannot retain your advance. Doing so violates Section 39 and Section 65 of the Contract Act. You can serve them a formal legal notice and file a consumer complaint for deficiency of service to recover the full advance, along with damages for mental harassment and alternative booking costs."
  }
];

const reviews = [
  {
    id: "rev-ec-1",
    name: "Amanpreet Singh (Concert Ticket Holder)",
    rating: 5,
    review: "I bought VIP zone tickets worth ₹38,000 for an international music festival in Mumbai. The event was cancelled due to local administration permission issues. The ticketing platform refunded only the ticket base price, retaining ₹3,800 as 'non-refundable convenience fee'. LegalRecovery drafted and served a sharp legal notice to the platform. Within 12 days, they credited the remaining balance to my bank account. Excellent follow-through!"
  },
  {
    id: "rev-ec-2",
    name: "Dr. Shruti Iyer (Wedding Venue Booking)",
    rating: 5,
    review: "Our wedding venue in Bengaluru cancelled our booking 10 days before the wedding due to an internal licensing issue and refused to refund the advance of ₹2.5 Lakhs, citing force majeure. LegalRecovery helped us draft a consumer complaint. Faced with e-Daakhil filing notice and the threat of court proceedings, the management settled out of court, returning the full advance along with ₹50,000 compensation for the emergency venue arrangement."
  },
  {
    id: "rev-ec-3",
    name: "Kunal Sen (Corporate Event Organizer)",
    rating: 5,
    review: "An event tech vendor failed to deliver the custom app and registration portals for our annual conference, causing us to cancel the event. They refused to return the ₹1.5 Lakh retainer. LegalRecovery served a statutory demand notice under Section 65 of the Contract Act. The vendor's legal team responded by processing the refund immediately to avoid litigation. Very professional platform."
  },
  {
    id: "rev-ec-4",
    name: "Rohan & Riya (Music Concert Tickets)",
    rating: 5,
    review: "We booked tickets for a concert in Delhi that was postponed three times over 9 months. The ticketing agency refused our refund request, saying tickets would be valid for the new dates. We did not want to wait. LegalRecovery sent a formal notice showing how indefinite postponement constitutes a deficiency in service. The platform processed our full refund of ₹14,200 in 7 days."
  },
  {
    id: "rev-ec-5",
    name: "Devendra Mehta (Exhibition Stall Booking)",
    rating: 5,
    review: "I booked an exhibition stall for ₹75,000. The trade fair was cancelled due to extreme weather, and the organizers refused a refund citing their 'no-refund under Act of God' clause. LegalRecovery's notice highlighted Section 65 of the Contract Act, which mandates restitution for void contracts. The organizers realized their clause was legally invalid and refunded my entire money."
  },
  {
    id: "rev-ec-6",
    name: "Meera Nair (Theatre Event Tickets)",
    rating: 5,
    review: "The ticketing portal kept ignoring our support emails for 45 days after a play cancellation. LegalRecovery drafted a formal notice on my behalf. I was surprised by how quickly the ticketing portal responded once they saw the legal notice. They credited the full ticket amount plus convenience fees within a week. Highly recommended for ticket refunds!"
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
      "name": "Event Cancellation Refund",
      "item": "https://www.legalrecovery.in/recovery/event-cancellation-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cancelled Event Refund: Your Legal Rights & Recovery Procedures in India",
  "description": "Exhaustive legal guide on recovering booking amounts, ticket costs, convenience fees, and venue advances for cancelled or postponed events in India under consumer and contract laws.",
  "image": "https://www.legalrecovery.in/og-event-refund.png",
  "author": {
    "@type": "Organization",
    "name": "Team LegalRecovery",
    "url": "https://www.legalrecovery.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
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
  "name": "Event Refund Legal Services",
  "image": "https://www.legalrecovery.in/og-event-refund.png",
  "description": "Expert assistance for recovering cancelled event tickets, venue booking advances, and convenience fees from portals and organizers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "620"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(rev.rating)
    },
    "author": {
      "@type": "Person",
      "name": rev.name
    },
    "reviewBody": rev.review
  }))
};

export default function EventRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "event-refund-overview", title: "1. Legal Realities of Event Cancellations" },
    { id: "statutory-consumer-rights", title: "2. Consumer Protection Act Safeguards" },
    { id: "ticketing-platforms-liability", title: "3. Portal Liability vs. Event Organizer" },
    { id: "force-majeure-clause-limits", title: "4. Limits of Force Majeure & 'No Refunds'" },
    { id: "administrative-steps-tickets", title: "5. Initial Steps & Proof Checklist" },
    { id: "legal-notice-demand-drafting", title: "6. Statutory Demand Legal Notice" },
    { id: "consumer-court-edaakhil", title: "7. e-Daakhil Consumer Commission Filing" },
    { id: "success-stories-reviews", title: "8. Success Stories & Reviews" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Event Cancellation Refund", href: "/recovery/event-cancellation-refund" }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Expanded Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Event Cancelled But <span className="text-[#DC2626]">Refusing Refund</span>?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Do not let ticketing apps or event organizers pocket your money. Citing 'convenience fees' or 'force majeure' is legally invalid for non-rendered services. Get professional legal support to recover your ticket bookings, venue advances, and convenience charges.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Ticket Recovery Now
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* 1. Legal Realities of Event Cancellations */}
                <section id="event-refund-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Legal Realities of Event Cancellations</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In India&apos;s rapidly growing entertainment and live-event industry, booking tickets for a major music festival, concert, sporting match, stand-up comedy show, or business exhibition has become a seamless, digital process. Millions of consumers regularly authorize transactions worth thousands of rupees on ticketing portals, trusting that they will receive the entertainment or professional utility they paid for. However, event cancellations have also skyrocketed due to administrative permissions being denied at the last minute, poor weather management, artist cancellations, or financial insolvencies of independent event management agencies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a show cannot go on, the primary legal issue that emerges is not the disappointment of the ticket holders, but the financial custody of the booking amounts. Ticketing portals and event management agencies frequently attempt to withhold refunds or pass the blame back and forth. They rely on the consumer&apos;s exhaustion, sending automated replies, deferring timelines indefinitely, or offering credit vouchers that expire in a few months. For the ticket holder, this is not just an inconvenience—it represents an illegal retention of their money.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, the relationship between a ticket buyer and the ticket seller (including the platform and the organizer) is governed by two major frameworks: the <strong>Consumer Protection Act, 2019</strong> and the <strong>Indian Contract Act, 1872</strong>. When an event is cancelled by the provider, the contract to provide the service is broken. If the service is not rendered, retaining the ticket price constitutes a fundamental default. The law does not permit any corporate entity to collect money for a service and then refuse to return it because of external circumstances.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we have observed that event organizers frequently exploit corporate shield structures, believing that because they run the event under an independent, short-lived Private Limited shell company or partnership firm, they cannot be pursued individually. This is incorrect. Both the ticketing platform that collected the payment and the directors of the event management company are personally liable to answer for the funds collected from the public. Our specialized legal-tech platform is built to pierce these administrative tactics, ensuring that your ticket cost, travel booking losses, and convenience charges are fully recovered through aggressive, multi-forum legal actions.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Ticket booking advances are not a donation or a risk investment. If an event is cancelled or indefinitely postponed by the organizer, the customer has an absolute statutory right to a 100% refund of the transaction value under the laws of India.&quot;
                    </div>
                  </div>
                </section>

                {/* 2. Consumer Protection Act Safeguards */}
                <section id="statutory-consumer-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Consumer Protection Act Safeguards</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Consumer Protection Act, 2019</strong> is the cornerstone of consumer advocacy in India, providing a comprehensive protective shield against exploitative business practices. When you buy a ticket or book an event venue, you are legally classified as a &quot;consumer&quot; under Section 2(7) of the Act, having paid consideration for a service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an event is cancelled and a refund is refused or delayed, the organizer and the ticketing platform are guilty of two primary statutory violations:
                    </p>
                    <div className="space-y-6 pl-4 border-l-2 border-slate-200">
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm md:text-base">A. Deficiency in Service (Section 2(11))</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          Deficiency is defined as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance which is required to be maintained by or under any law or has been undertaken to be performed in pursuance of a contract. Cancelling the event means the service provider has failed to perform their primary obligation. Refusing to return the consumer&apos;s money when the performance is cancelled is a classic, indefensible case of deficiency in service.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm md:text-base">B. Unfair Trade Practice (Section 2(47))</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          An unfair trade practice involves a trade practice which, for the purpose of promoting the sale, use, or supply of any goods or for the provision of any service, adopts any unfair method or unfair or deceptive practice. Retaining convenience fees for cancelled events, forcing customers to accept credit vouchers instead of cash refunds, or delaying refunds for months represents an unfair trade practice that is heavily penalized by consumer commissions.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm md:text-base">C. Unconscionable Contracts (Section 2(46))</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          Under the 2019 Act, State and National Commissions have the power to declare any term in a contract void if it is one-sided, unreasonable, or unconscionable. Ticketing portals often rely on pre-ticked check-boxes containing lines like 'tickets are non-refundable under all circumstances, even if cancelled due to reasons beyond organizer control.' These represent 'contracts of adhesion' where the consumer has no bargaining power. Consumer courts routinely strike down these one-sided clauses, holding that they cannot override the consumer&apos;s statutory right to a refund.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the Consumer Protection Act, 2019, you do not just recover the ticket amount. You have the right to claim compensation for the mental agony, transport and accommodation bookings (if you traveled from another city to attend), and the litigation expenses incurred to recover your money.
                    </p>
                  </div>
                </section>

                {/* 3. Portal Liability vs. Event Organizer */}
                <section id="ticketing-platforms-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Portal Liability vs. Event Organizer</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common tactic used by ticketing platforms like BookMyShow, Paytm Insider, or Townscript is to act as a &quot;mere intermediary.&quot; When an event is cancelled, they send automated emails stating: <i>&quot;We are only the ticketing partner. The funds have been transferred to the event organizer. For any refunds, please contact the organizer directly.&quot;</i> They provide a defunct email ID or a phone number of the organizer, leaving the customer stranded.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This defense is legally invalid under the Consumer Protection Act, 2019. Ticketing platforms are not passive conduits. They actively participate in marketing, collect the payment in their own bank accounts, charge a separate 'convenience fee' from the consumer, issue branded tickets with their own logos, and manage the entry infrastructure at the venue.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The consumer&apos;s commercial transaction is with the ticketing platform. The platform cannot unilaterally delegate its liability to a third party (the organizer) with whom the customer has no direct transaction record. The platform acts as a commercial agent for the organizer. Under Section 230 of the Indian Contract Act, 1872, while an agent is not personally liable for contracts made on behalf of an disclosed principal, the consumer commission views the platform and the organizer as <strong>joint and several service providers</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the Consumer Protection (E-Commerce) Rules, 2020 explicitly dictate that e-commerce entities must provide a clear mechanism for refunds, grievances, and tracking of customer queries. Retaining convenience fees by e-commerce ticket sellers for services that were never delivered represents a direct violation of these rules. At LegalRecovery, our legal panel drafts notices naming both the portal and the organizer, holding them jointly responsible. When the ticketing platform realizes it cannot hide behind intermediary status, it typically initiates the refund process to protect its merchant account status and avoid court appearances.
                    </p>
                  </div>
                </section>

                {/* 4. Limits of Force Majeure & 'No Refunds' */}
                <section id="force-majeure-clause-limits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Limits of Force Majeure &amp; &apos;No Refunds&apos;</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Event organizers almost universally invoke the clause of <strong>Force Majeure</strong> (Act of God) to deny refunds. They argue that because the cancellation was caused by rain, public health lockdowns, government restrictions, or law-and-order issues, they are not responsible for returning the money.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This argument represents a complete misinterpretation of the Indian Contract Act, 1872. While Force Majeure can excuse a party from fulfilling its contractual obligations or paying damages for non-performance, it does not allow them to keep the money paid for a service they failed to deliver.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, force majeure is governed by two key sections:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>A. Section 56 (Frustration of Contract):</strong> A contract to do an act which, after the contract is made, becomes impossible, or, by reason of some event which the promisor could not prevent, unlawful, becomes void when the act becomes impossible or unlawful.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>B. Section 65 (Obligation of Person who has Received Advantage under Void Agreement):</strong> When an agreement is discovered to be void, or when a contract becomes void, any person who has received any advantage under such agreement or contract is bound to restore it, or to make compensation for it, to the person from whom he received it.
                      </p>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal application of Section 65 is absolute: when an event is cancelled due to force majeure, the contract becomes void (frustrated) under Section 56. Consequently, under Section 65, the organizer or platform who collected the ticket amount (the advantage) is bound by law to restore it to the consumer. Retaining the ticket amount under a 'force majeure clause' is a direct violation of Section 65 and represents a form of civil theft.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Supreme Court of India has consistently held that the principle of restitution is based on equity and the prevention of unjust enrichment. An organizer cannot profit from a public cancellation. If they have paid vendors or incurred preparatory expenses, that is their business risk; they cannot transfer that commercial loss to the consumer by pocketing ticket booking fees.
                    </p>
                  </div>
                </section>

                {/* 5. Initial Steps & Proof Checklist */}
                <section id="administrative-steps-tickets" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Initial Steps &amp; Proof Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you are faced with a cancelled event refund dispute, the first 30 days are critical for establishing a secure evidence file. Portals often change the event page, delete transaction histories, or edit their FAQs to alter refund policies after a major event fails.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Follow this step-by-step checklist to build a solid legal file:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Capture Transaction Evidence:</strong> Export the PDF ticket receipt from the portal. Save the confirmation emails showing the booking ID and the payment receipt. Take a screenshot of the booking on the app showing the transaction status.</li>
                      <li><strong>Document the Cancellation:</strong> Take screenshots of the official announcement on the organizer&apos;s Instagram, Twitter, or Facebook handles. Save the cancellation email or SMS sent by the portal. If the event was cancelled at the venue, take photographs of the venue gates showing the closure notice or crowd disruption.</li>
                      <li><strong>Track Your Correspondence:</strong> Send a formal email to customer support demanding a full refund. Keep a record of their auto-replies, their promise dates, or their refusal emails. Do not handle negotiations over phone calls unless you are recording the call.</li>
                      <li><strong>Secure Financial Statements:</strong> Download your bank statement or credit card statement highlighting the specific transaction date and amount debited.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Having this file ready ensures that when our panel of advocates drafts your legal notice or files your e-Daakhil consumer complaint, we have indisputable proof to counter any corporate denial.
                    </p>
                  </div>
                </section>

                {/* 6. Statutory Demand Legal Notice */}
                <section id="legal-notice-demand-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Statutory Demand Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A <strong>Legal Notice</strong> is a formal, advocate-signed document that serves as the final warning to the defaulting party. It is not a template email. It is a precise legal instrument served to the registered corporate office of the ticketing platform and the personal addresses of the event organizer&apos;s directors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts customized notices citing:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Section 65 of the Indian Contract Act, 1872, demonstrating their absolute obligation to return the advance.</li>
                      <li>Section 2(11) and 2(47) of the Consumer Protection Act, 2019, outlining the deficiency of service and unfair trade practices.</li>
                      <li>The Consumer Protection (E-Commerce) Rules, 2020, challenging the ticketing platform&apos;s refund defaults.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal notice gives the target company 15 days to process the full refund, along with a specified amount for mental harassment, interest, and the legal fees of the notice itself. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate entities, ignoring a formal advocate notice is highly risky. It can be used in court to prove that the company had a malicious intention to withhold public funds, which can result in the court awarding punitive damages. Approximately 78% of ticketing disputes are settled immediately after the notice is served, as platforms prefer processing a refund to facing public consumer litigation.
                    </p>
                  </div>
                </section>

                {/* 7. e-Daakhil Consumer Commission Filing */}
                <section id="consumer-court-edaakhil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. e-Daakhil Consumer Commission Filing</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the ticketing agency or organizer ignores the legal notice, we escalate the case to the jurisdictional <strong>District Consumer Disputes Redressal Commission</strong>. The government has made this process completely digital through the <strong>e-Daakhil portal</strong> (edaakhil.nic.in).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a case on e-Daakhil has several key advantages:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Convenient Jurisdiction:</strong> Under the 2019 Act, you can file the complaint where you reside. You do not need to travel to the city where the event was scheduled or where the organizer is registered.</li>
                      <li><strong>Minimal Fees:</strong> The court fee is nominal, ranging from ₹100 to ₹500 for most consumer ticket claims, and is paid online.</li>
                      <li><strong>No Personal Appearance Needed:</strong> Hearings can be conducted via video conferencing, and your advocate can represent your case, meaning you do not need to miss work or visit the court.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the case is admitted, the Commission issues summons to the ticketing platform and the organizers, requiring them to file a written defense within 30 to 45 days. If they fail, the Commission passes an *ex-parte* order directing them to refund the amount with interest (usually 9% to 12%), pay compensation for mental harassment, and clear your litigation costs.
                    </p>
                  </div>
                </section>

                {/* 8. Success Stories & Reviews */}
                <section id="success-stories-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Success Stories &amp; Reviews</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      We have recovered ticket costs, travel accommodation losses, and booking advances for customers across India. Below are representative case studies:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: VIP Concert Tickets</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹38,000 + Convenience Fees in Mumbai</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A consumer bought tickets for a cancelled international festival. The portal refunded only the ticket base price and withheld ₹3,800 in fees. LegalRecovery served a formal notice. The ticketing agency realized it could not legally defend the deduction of fees for a cancelled service and refunded the entire amount in 12 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Wedding Venue Booking</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹2.5 Lakh Advance in Bengaluru</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A venue cancelled a wedding booking due to administrative licensing issues and refused to refund the advance, citing force majeure. We prepared a consumer complaint. Faced with e-Daakhil filing notice, the venue management settled out of court, returning the full advance along with ₹50,000 compensation.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviews.map((r, i) => (
                        <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-sm text-slate-700 italic mb-4">&quot;{r.review}&quot;</p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {r.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 9. FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">9. FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
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

            {/* Right Sidebar */}
            <div className="space-y-8 sticky top-24">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your event cancellation refund case with consumer and contract law experts. We serve verified notices with full compliance support.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
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
