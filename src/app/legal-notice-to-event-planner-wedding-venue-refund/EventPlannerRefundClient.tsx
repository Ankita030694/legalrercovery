'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the law on non-refundable booking deposits in India?",
    answer: "In India, one-sided clauses that declare booking deposits as strictly non-refundable under all circumstances are legally questionable. Under the Indian Contract Act, 1872, particularly Section 74, a party cannot forfeit a booking advance as a penalty unless they can prove they suffered actual financial loss due to the cancellation. If a banquet hall or event planner incurs no expenses or finds a replacement booking for the same date, retaining the entire deposit constitutes unjust enrichment. The courts look at whether the clause represents a genuine pre-estimate of loss or a penalty. Penalty clauses are void, and the vendor is only entitled to reasonable compensation for actual damage, requiring them to refund the rest."
  },
  {
    question: "Can a wedding venue refuse a refund if the event is cancelled due to lockdowns or natural disasters?",
    answer: "No. If an event is cancelled due to government restrictions, lockdowns, natural disasters, or other unforeseen events beyond control, the contract is governed by Section 56 of the Indian Contract Act, 1872. Under the doctrine of frustration of contract, when an agreement becomes impossible to perform, it becomes void. According to Section 65, any party who has received an advantage or advance under a void contract is legally bound to restore it or compensate the other party. Therefore, the venue or event planner must refund the booking advance. They cannot rely on non-refundable clauses during force majeure events because the entire contract has failed."
  },
  {
    question: "What is the time limit to file a legal case for a wedding venue refund in India?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil suit or consumer complaint for recovering advance booking payments is three years. This time limit begins from the date the cause of action arises, which is typically the date the event was scheduled to take place, the date the cancellation was initiated, or the date the vendor explicitly refused to issue the refund. It is critical to take action within this period. Initiating the recovery process early by serving a formal legal notice helps establish the timeline of the dispute and prevents the claim from becoming time-barred."
  },
  {
    question: "How do I send a legal notice to a wedding decorator who defaulted on services?",
    answer: "If a wedding decorator defaults on services such as failing to set up the decor, providing substandard materials, or failing to show up, you should serve a formal legal notice. The notice must detail the terms of the agreement, the amount paid as an advance, the specific defaults committed by the decorator, and the resulting financial and emotional distress. You must demand a full refund of the advance along with interest and compensation. The notice should give the decorator a 15-day compliance window to settle the matter. It should be drafted by a qualified advocate and served digitally via email and WhatsApp to ensure legal validity."
  },
  {
    question: "Can I file a consumer complaint against a banquet hall for poor service?",
    answer: "Yes. Customers booking banquet halls or hiring event planners for personal functions fall under the definition of consumers under the Consumer Protection Act, 2019. If the venue provides poor services, changes the booked hall without consent, offers unhygienic catering, or fails to maintain basic amenities, it constitutes a deficiency in service. You can file a complaint in the District Consumer Disputes Redressal Commission. Before filing the complaint, serving a formal legal notice is a mandatory procedural step to give the venue provider a final opportunity to resolve the issue."
  },
  {
    question: "What happens if I do not have a written contract with the event planner?",
    answer: "Even without a signed physical contract, you can recover your money under Indian law. Oral agreements and digital communications are legally binding. Under the Indian Evidence Act, 1872, emails, WhatsApp messages, payment receipts, bank transfer records, and call logs are valid proofs of a contract. If you have sent money via UPI or net banking and have messages discussing the venue booking, these establish the transaction. You can draft a legal notice citing these digital records to demand your refund, relying on established principles of implied contracts."
  },
  {
    question: "Is WhatsApp chat a valid proof of booking and advance payment in court?",
    answer: "Yes, WhatsApp chats are admissible in Indian courts as electronic evidence under Section 65B of the Indian Evidence Act, 1872. To use WhatsApp chats as evidence, you must preserve the conversation history, take screenshots showing the phone numbers and timestamps, and obtain the relevant bank transaction receipt corresponding to the payment discussed. A formal legal notice can reference these chat details, and they can be attached to a consumer complaint or civil suit as proof of the contract terms and the vendor's agreement to provide services."
  },
  {
    question: "How long does a venue owner have to reply to a legal notice?",
    answer: "A standard legal notice served for money recovery or breach of contract typically demands a response or compliance within 15 days from the date of receipt. The venue owner or event planner must respond through their advocate within this timeframe. If they fail to reply or send an evasive reply, it is considered a refusal to settle. This failure to reply can be used against them in court to show their non-cooperative conduct, allowing you to proceed with filing a consumer complaint or civil recovery suit immediately after the 15-day period expires."
  },
  {
    question: "What if the venue owner threatens me or refuses to reply to my notice?",
    answer: "If the venue owner threatens you or ignores the legal notice, you should not engage in direct confrontations. The lack of response or hostle behavior is common. Legally, their silence or refusal to settle strengthens your case in court, as it demonstrates their bad faith. You can immediately proceed to file a complaint before the consumer forum or initiate a civil suit. If they threaten you physically or try to harass you, you can also file a police complaint for criminal intimidation under the Bharatiya Nyaya Sanhita (formerly IPC Section 506) along with your civil recovery proceedings."
  }
];

const reviews = [
  {
    author: "Vikram and Meera Sharma (New Delhi)",
    rating: "5",
    text: "We booked a premium banquet hall in West Delhi for our daughter's wedding and paid an advance of 3.5 Lakhs. Due to a sudden family emergency, we had to cancel the wedding three months in advance. The venue management refused to refund even a single rupee, pointing to their non-refundable clause. We served a formal legal notice citing Section 74 of the Contract Act. The venue legal team contacted us within a week and settled the matter, refunding 3.1 Lakhs after a minimal administrative deduction."
  },
  {
    author: "Amit Goel (Bangalore)",
    rating: "5",
    text: "Our corporate annual event planner defaulted on decorations and catering quality, ruined the event, and refused to return our advance payment of 2.2 Lakhs. We had no formal signed agreement, only WhatsApp messages and bank receipts. Following the guide here, we sent a notice under the Contract Act. The event planner realized we had solid electronic evidence and agreed to a full refund to avoid consumer court. Highly recommend this professional approach."
  },
  {
    author: "Priyadarshini Rao (Hyderabad)",
    rating: "5",
    text: "A luxury wedding decorator failed to show up with the promised floral setups and light arrangements for our reception. They withheld our 1.8 Lakhs advance. We drafted and sent a legal notice demanding a refund and damages for mental harassment. The decorator responded to the notice by issuing a demand draft for the full advance plus 20,000 Rupees as compensation. Taking a structured legal route saved us months of stress."
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
      "name": "Legal Notice for Event Planner or Wedding Venue Refund",
      "item": "https://www.legalrecovery.in/legal-notice-to-event-planner-wedding-venue-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Event Planner or Wedding Venue for Booking Refund",
  "description": "Learn how to recover advance booking payments from event planners, wedding decorators, or banquet halls. Serve a legal notice for venue booking cancellations.",
  "image": "https://www.legalrecovery.in/og-event-refund.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-07-31",
  "dateModified": "2026-07-31"
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
  "name": "Event Booking Refund Legal Notice Service",
  "image": "https://www.legalrecovery.in/og-event-refund.png",
  "description": "Professional legal drafting and service of notices to event planners, decorators, and wedding venues to recover advance booking payments in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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

export default function EventPlannerRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-disputes", title: "1. Understanding Booking Cancellation Disputes" },
    { id: "indian-contract-law", title: "2. Indian Contract Law and Unconscionable Clauses" },
    { id: "force-majeure-clause", title: "3. Force Majeure and Frustration of Contract" },
    { id: "dispute-resolution-routes", title: "4. Dispute Resolution: Legal Notice vs. Litigation" },
    { id: "step-by-step-guide", title: "5. Step-by-Step Roadmap to Recover Advance Payments" },
    { id: "evidence-checklist", title: "6. Prerequisites and Evidence Checklist" },
    { id: "success-stories", title: "7. Event Booking Refund Success Stories" },
    { id: "frequently-asked-questions", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice for Event Planner or Wedding Venue Refund", href: "/legal-notice-to-event-planner-wedding-venue-refund" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Banner with dark background #111827 and Red accent */}
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Consumer & Contract Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Recovering Event Advances: <span className="text-[#DC2626]">Venue & Planner Refunds</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A comprehensive legal guide on challenging non-refundable booking clauses, recovering venue advances, and serving formal legal notices under Indian law.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          {/* 3-Column Layout: TOC, Content, Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Column Sticky TOC */}
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            {/* Middle Column Main Content */}
            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Planning a milestone event like a wedding, reception, anniversary, or large corporate gathering requires significant coordination and substantial financial investments. Families and businesses routinely pay massive upfront advances to book banquet halls, luxury wedding venues, event planners, and catering decorators. However, when plans change due to emergencies, government restrictions, or vendor default, clients often face stubborn refusals to refund their advance payments. Vendors routinely cite unilateral non-refundable booking clauses or force majeure terms to retain the money. This guide details your legal rights under Indian contract and consumer laws, and outlines how to recover your funds using structured legal processes.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India, the wedding and event industry is largely unorganized, leading to a high frequency of contractual disputes. Banquet halls and event management agencies often use standard form agreements that are heavily skewed in their own favor. These agreements contain clauses that allow the vendor to cancel the booking without any penalty, while denying the client any refund of their booking advance even if the cancellation occurs months in advance. Such unequal terms are not absolute. The Indian legal system provides robust mechanisms to challenge unconscionable contract terms, ensure restitution under contract law, and enforce refunds.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  If you are currently facing a dispute with a defaulting wedding planner, banquet hall owner, or decorator who is refusing to return your booking advance, you do not have to accept their unilateral decisions. By utilizing a formal <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, you can escalate the matter directly to the vendor's legal representatives or owners. This step bypasses regular customer service agents and forces a formal legal review of the transaction. If the vendor remains non-compliant after receiving the notice, you can initiate a consumer dispute or file a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link> to enforce your rights. It is also essential to act promptly and stay aware of the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case India</Link> to preserve your claim.
                </p>
              </div>

              {/* Section 1: Understanding Booking Cancellation Disputes */}
              <section id="understanding-disputes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  1. Understanding Booking Cancellation Disputes
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Booking disputes in the event industry generally fall into three main categories: client-side cancellations due to personal emergencies, cancellations forced by external circumstances such as natural disasters or government restrictions, and vendor-side defaults where services are not delivered as promised. In each scenario, the legal implications and rights of the parties differ, but the core dispute revolves around the distribution of the financial risk associated with the cancellation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a client cancels an event due to a personal emergency (such as a medical crisis, bereavement, or relationship breakdown), venues and planners are quick to point to their non-refundable clauses. They argue that because they blocked the date, they lost other potential clients and are entitled to keep the entire booking advance. While this argument seems reasonable on the surface, contract law requires a balance. The vendor cannot simply keep the entire advance as a forfeit unless they can demonstrate that they suffered actual, equivalent financial loss. If the cancellation was made several months in advance, giving the vendor ample time to find another client for the same date, retaining the full booking amount is considered an unjustified penalty under Indian law.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Vendor-side default is another frequent cause of disputes. In these cases, the event planner or wedding decorator fails to deliver the promised services. For instance, a decorator might deliver subpar setups that do not match the approved designs, or a caterer might fail to provide the agreed menu, or a banquet hall might change the booked hall to a smaller, less premium room at the last minute without the client's consent. Sometimes, the event planner fails to show up altogether, leaving the family stranded on the day of the event. In such situations of clear breach of contract, the client has an absolute right to demand a full refund of all advances paid, along with substantial compensation for the mental agony, reputational damage, and inconvenience caused by the default.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The complexity increases when there is no formal, signed contract between the client and the vendor. In India, many bookings are finalized based on word-of-mouth recommendations, oral agreements, and digital conversations. In these situations, vendors often assume that the lack of a physical document means they have no legal liability and can refuse refunds with impunity. However, this is a legal misconception. The Indian legal system recognizes oral agreements and digital communications as valid contracts. If you have transaction records, messages, and emails, you can still build a powerful case. For details on how to handle such situations, you can refer to the guide on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link>.
                  </p>
                </div>
              </section>

              {/* Section 2: Indian Contract Law and Unconscionable Clauses */}
              <section id="indian-contract-law" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  2. Indian Contract Law and Unconscionable Clauses
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The fundamental law governing all business agreements in India is the Indian Contract Act, 1872. While the law respects the freedom of parties to negotiate and enter into agreements, it also contains checks to prevent exploitation and abuse of bargaining power. Standard form contracts used by wedding venues and event planners often contain terms that are legally invalid because they violate statutory provisions.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the most critical legal concepts in this domain is the rule against unconscionable contracts. An unconscionable contract is one that is so one-sided, unfair, and oppressive that it shocks the conscience of a court. The Supreme Court of India, in landmark rulings like Central Inland Water Transport Corporation Limited v. Brojo Nath Ganguly, has held that courts will not enforce unfair and unreasonable clauses in contracts where there is a gross inequality of bargaining power between the parties. When a consumer books a wedding venue, they are presented with a pre-printed form contract and have no power to negotiate the terms. A clause that allows the venue to forfeit 100% of a massive advance payment, even when the cancellation is done far in advance, is a classic example of an unconscionable contract clause.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, Section 73 and Section 74 of the Indian Contract Act, 1872, deal with damages for breach of contract. Section 74 specifically addresses contracts where a penalty is stipulated for breach. The law makes a clear distinction between liquidated damages (a genuine pre-estimate of loss) and a penalty (an excessive amount meant to penalize the defaulting party). If a venue contract states that the entire booking advance will be forfeited in case of cancellation, this is considered a penalty clause. The Supreme Court in Maula Bux v. Union of India established that even if a contract contains a forfeiture clause, the party claiming breach cannot forfeit the money unless they prove they suffered actual damage. If no loss was caused, or if the loss was far less than the advance, the court will only award reasonable compensation, and the remainder of the advance must be returned to the client.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Another important legal principle is the doctrine of unjust enrichment, which is based on equity and codified under Section 70 of the Contract Act. It states that if a person lawfully does something for another, not intending to do so gratuitously, and the other person enjoys the benefits of that act, they must compensate or restore the benefit. When a banquet hall or event planner receives a large advance and does not perform the agreed services because the event was cancelled, they cannot retain the money. Doing so would amount to unjust enrichment. They must return the advance, minus any reasonable, documented expenses they actually incurred in preparation for the event.
                  </p>
                </div>
              </section>

              {/* Section 3: Force Majeure and Frustration of Contract */}
              <section id="force-majeure-clause" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  3. Force Majeure and Frustration of Contract
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Force Majeure refers to unexpected, extraordinary events or circumstances beyond the control of the contracting parties (such as acts of God, natural disasters, wars, epidemics, or government-imposed restrictions) that make it impossible to fulfill the contractual obligations. Frustration of contract is a related legal doctrine under Indian law that applies when an event occurs after the contract is signed, making the performance of the contract impossible or unlawful.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 56 of the Indian Contract Act, 1872, lays down the doctrine of frustration. It states that an agreement to do an act impossible in itself is void. It further states that a contract to do an act which, after the contract is made, becomes impossible or, by reason of some event which the promisor could not prevent, unlawful, becomes void when the act becomes impossible or unlawful. In the context of the event industry, if the government imposes a lockdown, restricts public gatherings to a tiny number of guests, or if the booked venue is destroyed by fire or flooded due to natural disasters, the contract is legally frustrated. The parties are discharged from their obligations because the very foundation of the contract has ceased to exist.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once a contract is declared void due to frustration under Section 56, the legal consequences are governed by Section 65 of the Act. Section 65 deals with the obligation of a person who has received an advantage under a void agreement or contract. It states that when an agreement is discovered to be void, or when a contract becomes void, any person who has received any advantage under such agreement or contract is bound to restore it, or to make compensation for it, to the person from whom he received it. This means that if a banquet hall or event planner has received an advance payment for an event that cannot take place due to force majeure, they are legally bound to restore that advance. They cannot claim that the booking deposit is non-refundable because the non-refundable clause itself falls along with the rest of the frustrated contract.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Some vendors attempt to bypass Section 65 by inserting specific force majeure clauses that state they will retain the advance or issue a credit note for future use instead of a refund. However, under Indian consumer jurisprudence, such clauses are often considered unfair trade practices if they do not offer an option for a cash refund. If the consumer has no use for a future credit note (for instance, if the wedding had to be held elsewhere or the planned event cannot be rescheduled), forcing them to accept a credit note is an unfair trade practice, and the consumer forum will order a cash refund with interest.
                  </p>
                </div>
              </section>

              {/* Section 4: Dispute Resolution: Legal Notice vs. Litigation */}
              <section id="dispute-resolution-routes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  4. Dispute Resolution: Legal Notice vs. Litigation
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When a wedding venue, banquet hall, or event planner refuses to issue a refund, you must evaluate the most effective route to recover your money. The main options are serving a formal legal notice, filing a complaint in the Consumer Disputes Redressal Commission, or initiating a commercial civil suit.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Serving a formal legal notice is the most recommended first step. It is a structured demand letter drafted by a lawyer that details the contract terms, the payments made, the breach committed by the vendor, and the legal provisions under which the refund is claimed. The notice gives the vendor a 15-day period to return the money and warns them of legal action if they fail to comply. In a large majority of cases, receiving a formal legal notice from an advocate convinces the vendor to settle the matter. They realize that the client is serious, has professional legal representation, and that defending a lawsuit will cost them more than settling the refund.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the vendor ignores the legal notice, you can proceed to litigation. For personal bookings like weddings and family events, you can file a complaint in the Consumer Forum. The Consumer Protection Act, 2019, provides a highly consumer-friendly forum where disputes are resolved relatively quickly without the strict procedural formalities of civil courts. The forum has the power to order a refund, award interest, and direct the vendor to pay compensation for mental harassment. For commercial bookings (such as corporate product launches or exhibitions), the dispute is classified as a commercial dispute. In such cases, you must file a commercial suit or invoke the arbitration clause if one exists in your agreement.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Legal Notice Route</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Consumer Court Complaint</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Civil Suit Route</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Purpose</td>
                          <td className="px-6 py-4">Pre-litigation demand to settle out of court</td>
                          <td className="px-6 py-4">Resolve consumer disputes & service deficiencies</td>
                          <td className="px-6 py-4">Recover debt or damages through civil litigation</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Timeline</td>
                          <td className="px-6 py-4">Fast (requires a 15-day compliance window)</td>
                          <td className="px-6 py-4">Moderate (takes 6 to 18 months for resolution)</td>
                          <td className="px-6 py-4">Long (takes 1 to 3 years depending on backlog)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Cost Factor</td>
                          <td className="px-6 py-4">Very low (minimal drafting and postage fees)</td>
                          <td className="px-6 py-4">Low (nominal court fee, consumer-friendly)</td>
                          <td className="px-6 py-4">High (court fees based on claim amount & legal fees)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Applicability</td>
                          <td className="px-6 py-4">Applicable to all personal and commercial bookings</td>
                          <td className="px-6 py-4">Applicable to personal event bookings only</td>
                          <td className="px-6 py-4">Applicable to commercial and business bookings</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Result</td>
                          <td className="px-6 py-4">Out-of-court settlement and refund of dues</td>
                          <td className="px-6 py-4">Order of refund, compensation, and litigation costs</td>
                          <td className="px-6 py-4">Execution decree to attach assets and recover funds</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 5: Step-by-Step Roadmap to Recover Advance Payments */}
              <section id="step-by-step-guide" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  5. Step-by-Step Roadmap to Recover Advance Payments
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Recovering your advance booking money from a non-compliant event organizer or banquet hall requires a systematic approach. By following these structured stages, you can maximize your chances of recovery:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 1: Collect Communication and Payment Proofs</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Gather all transaction records showing the transfer of booking advances, along with written confirmations, receipts, WhatsApp chats, and email exchanges. This constitutes the foundation of your claim.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 2: Issue a Written Cancellation and Refund Request</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Send a formal email requesting cancellation of the booking and return of the advance payment. State the reasons clearly (such as personal emergency or force majeure) and document the vendor's refusal to refund the money.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 3: Draft and Serve the Formal Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Engage an advocate to draft a legal notice demanding refund of the advance. The notice must specify the contract terms, detail the vendor's unconscionable clauses, cite Section 56/74 of the Contract Act, and give a 15-day compliance window.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 4: Track Delivery and Wait for Compliance</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Send the notice digitally via verified email and WhatsApp. Preserve the delivery confirmation. Wait for the 15-day window for their reply or settlement.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 5: Escalate to Consumer Forum or Court</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the vendor refuses to comply or ignores the notice, file a complaint in the District Consumer Disputes Redressal Commission or file a civil recovery suit, ensuring it is done within the 3-year limitation period.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 6: Prerequisites and Evidence Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  6. Prerequisites and Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a legally sound case that event planners, decorators, or banquet venues cannot dismiss, you must compile a robust evidence portfolio. Proper documentation ensures that your legal notice is impactful and that any subsequent court proceedings are resolved in your favor.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Many clients worry that they do not have a formal signed agreement with their vendor. However, under the Indian Evidence Act, 1872, digital trail and transaction records are fully admissible in court. If you are in a situation where no formal contract exists, you should focus on gathering alternative evidence such as WhatsApp chats, bank transfers, and receipts. For a detailed guide on how to approach this, read our advice on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link>.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Event Booking Refund Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Booking Invoice or Receipt:</strong> An official invoice, quotation, or receipt issued by the venue, decorator, or event planner showing the booking date, services, and total amount.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of Advance Payment:</strong> Bank account statements, UPI transfer details, debit card transaction records, or credit card slips showing the exact date and amount transferred to the vendor.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Written Communications:</strong> Screenshots of WhatsApp conversations, SMS text messages, and email threads discussing the booking details, advance payments, and cancellation requests.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Vendor's Refusal Record:</strong> A written response from the vendor (email or message) where they explicitly refuse to return the booking advance or point to their non-refundable policy.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Event Cancellation Proof (if applicable):</strong> Medical reports, certificates, or government lockdown notifications that explain the necessity of canceling or postponing the scheduled event.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Success Stories */}
              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  7. Event Booking Refund Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world success stories demonstrate how structured legal notices and Section 74/56 demands resolve event booking and refund disputes in India:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</p>
                          <p className="text-[10px] text-slate-500">Verified Recovery Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section id="frequently-asked-questions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  8. Frequently Asked Questions
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
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar with Advice Card */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626]/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Need Legal Advice? Discuss your money recovery case with legal experts. We draft and serve legally compliant notices tailored to your transaction.
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

        {/* Modal for initiating payment/advice */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
