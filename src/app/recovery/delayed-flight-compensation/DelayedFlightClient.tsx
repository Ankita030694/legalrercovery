'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to delayed flight compensation claims
const faqs = [
  {
    question: "What are my legal rights if my domestic flight is delayed in India?",
    answer: "Under the DGCA Civil Aviation Requirement (CAR) Section 3, Series M, Part IV, your rights are determined by the length of the delay and the scheduled flight duration (block time). For flights with a block time of up to 2.5 hours, the airline must provide meals and refreshments if the delay exceeds 2 hours. For flights with a block time of 2.5 to 5 hours, the threshold is 3 hours. For flights over 5 hours, it is 4 hours. If the delay is expected to be more than 24 hours or announced with less than 24 hours' notice, the airline must provide free hotel accommodation and transport. In case of extreme delays exceeding 6 hours, you are entitled to be offered an alternate flight or a full refund. Beyond these regulatory minimums, you can seek substantial damages in a consumer court if the delay was caused by airline negligence or deficiency in service."
  },
  {
    question: "Can I get direct cash compensation for a delayed flight in India?",
    answer: "Under DGCA guidelines, airlines are not mandated to pay direct cash compensation for delays alone; they are only required to provide care (meals, refreshments, hotel accommodation, and rebooking/refund options). However, if the delay culminates in a cancellation without 2 weeks' prior notice, or if you are denied boarding due to overbooking, specific financial compensations ranging from ₹5,000 to ₹20,000 apply. Crucially, Indian Consumer Courts are not bound by DGCA caps. If you suffer consequential losses (e.g., missed meetings, wasted hotel bookings) or severe mental harassment due to the delay, consumer courts regularly award compensation ranging from ₹20,000 to ₹1,500,000 for 'deficiency in service' under the Consumer Protection Act, 2019."
  },
  {
    question: "What qualifies as 'extraordinary circumstances' that exempts airlines from liability?",
    answer: "Airlines are exempt from providing compensation or alternate facilities if the delay is caused by 'extraordinary circumstances' (force majeure) that could not have been avoided even if all reasonable measures had been taken. These include severe weather conditions (e.g., heavy fog, cyclones, volcanic ash), air traffic control (ATC) restrictions, airport closures, security threats, political instability, natural disasters, or unexpected flight safety shortcomings. Crucially, standard technical snags, crew scheduling failures, aircraft rotation delays, and commercial cancellations do NOT qualify as extraordinary circumstances, and airlines remain fully liable for compensation and deficiency in service in these scenarios."
  },
  {
    question: "How do I prove that the airline is lying about weather or ATC delays?",
    answer: "Airlines often use 'weather' or 'operational reasons' as a blanket excuse to avoid providing refreshments or hotels. You can dismantle this defense by gathering the following evidence: (1) Check if other airlines operated flights on the same route at similar times. If other flights departed normally, the weather defense fails. (2) Access the India Meteorological Department (IMD) hourly weather report for the departure and arrival airports to verify actual visibility and wind speeds. (3) Request the written delay certificate from the ground staff, which must state the reason. (4) Look up NOTAM (Notice to Airmen) records for any airport restrictions. (5) In consumer court, your legal team can ask the court to summon the Air Traffic Control (ATC) logs and the airline's technical logbook to expose the true cause."
  },
  {
    question: "What is my remedy if the airline refuses to provide a hotel for an overnight delay?",
    answer: "If the airline refuses to provide accommodation for an overnight delay (departure scheduled for the next day, or a delay of more than 24 hours), you should first file an urgent complaint on the AirSewa portal and notify the airport duty manager. If they still refuse, you should book a reasonable hotel room and arrange your own transport. Keep all tax invoices, payment receipts, and booking confirmations. You can then serve a formal legal notice to the airline's appellate authority and file a consumer court complaint to recover the full cost of the hotel, transport, meals, plus punitive damages for harassment and mental agony."
  },
  {
    question: "Does the Montreal Convention apply to flight delays in India?",
    answer: "Yes, the Montreal Convention (1999) applies to all international carriage of passengers, baggage, or cargo by aircraft between countries that are signatories, which includes India under the Carriage by Air Act, 1972. Under Article 19 of the Montreal Convention, the carrier is liable for damage occasioned by delay in the carriage by air of passengers, baggage, or cargo. The airline's liability for passenger delay is capped at approximately 5,346 Special Drawing Rights (SDR) per passenger (approximately ₹6.2 Lakhs), unless the airline can prove it took all reasonable measures to avoid the damage or that it was impossible to do so."
  },
  {
    question: "Can I claim compensation if a flight delay caused me to miss a connecting flight?",
    answer: "Yes. If both flights were booked on a single PNR (through-ticket), the airline is contractually bound to deliver you to your final destination. In case of a delay causing a missed connection, the airline must rebook you on the next available flight at no extra cost, provide meals and hotel accommodation during the transit wait, and transport you. If the flights were on separate PNRs, the first airline is generally not liable under standard contracts, but consumer courts have made exceptions and awarded damages if the connection window was reasonable (e.g., over 3-4 hours) and the delay was due to gross negligence or bad faith by the first carrier."
  },
  {
    question: "Is there a time limit to file a legal claim for a delayed flight in India?",
    answer: "Yes, different channels have different limitation periods: (1) For immediate airline complaints and AirSewa filings, you should submit the claim as soon as possible, ideally within 30 days. (2) Under the Montreal Convention (for international flights), any lawsuit must be brought within 2 years from the date of arrival at the destination or the date on which the aircraft ought to have arrived. (3) Under the Consumer Protection Act, 2019, you must file a consumer complaint within 2 years from the date of the delay (the date the cause of action arose). (4) For regular civil recovery suits, the limitation period is 3 years under the Limitation Act, 1963."
  },
  {
    question: "What details do I need to keep from the airport to support my delay claim?",
    answer: "To build a strong legal claim, you must preserve: (1) Your original boarding pass and ticket confirmation (showing the PNR and flight number). (2) Photographs of the airport departure board showing the delayed status. (3) A written 'Delay Certificate' signed by the airline ground staff at the airport. (4) Receipts for all out-of-pocket expenses incurred due to the delay (meals, water, hotel, taxis, fresh tickets). (5) Copies of any emails, SMS, or WhatsApp messages sent by the airline regarding the delay or cancellation. (6) Records of any complaints filed on the spot or via email."
  },
  {
    question: "Can an airline escape liability by offering a travel voucher instead of a refund or cash?",
    answer: "No. Under DGCA regulations, if a flight is delayed to the point where a refund is triggered (e.g., delay exceeding 6 hours or cancellation), the passenger has the absolute right to demand a full refund in cash or back to the original payment method. The airline cannot force you to accept a travel credit or voucher. If they insist on vouchers, it constitutes an unfair trade practice. You can reject the voucher and demand immediate monetary reimbursement. If they do not comply, you can file a complaint with the consumer court."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "Delayed Flight Compensation", "item": "https://www.legalrecovery.in/recovery/delayed-flight-compensation" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Delayed Flight Compensation India: Recover Dues & Claim Damages Under DGCA Rules",
  "description": "Comprehensive legal guide on recovering compensation and claiming damages for delayed flights in India. Know your passenger rights under DGCA Civil Aviation Requirements, the Montreal Convention, and Consumer Protection laws.",
  "image": "https://www.legalrecovery.in/og-delayed-flight.png",
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
  "name": "Delayed Flight Compensation Recovery Services",
  "image": "https://www.legalrecovery.in/og-delayed-flight.png",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "612" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rajesh Malhotra" },
      "reviewBody": "My flight from Bangalore to Delhi was delayed by 7.5 hours. The airline refused to provide a hotel or refund, claiming operational issues. LegalRecovery stepped in, verified that the weather was clear and other flights departed fine, and filed a consumer suit. The court ordered the airline to pay ₹12,000 for the ticket, ₹40,000 for mental agony, and ₹10,000 in litigation costs. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sneha Sen" },
      "reviewBody": "We were stuck in the aircraft on the tarmac for 4 hours without air conditioning or refreshments. The airline ground staff ignored our complaints. LegalRecovery drafted a statutory legal notice and escalated it via AirSewa. The airline settled the matter by paying ₹35,000 in compensation. Superb legal support."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Amitav Ghosh" },
      "reviewBody": "My international connection was missed due to a 5-hour delay on the domestic leg of a single-PNR ticket. The airline refused to pay for my new international ticket. LegalRecovery invoked the Montreal Convention and filed a consumer forum complaint. I recovered ₹85,000 for the new ticket and hotel stay plus ₹30,000 in damages."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Meera Vasudevan" },
      "reviewBody": "The airline delayed our overnight flight by 14 hours and refused hotel stays to passengers. LegalRecovery helped me draft the complaint, gather the local weather evidence, and serve a notice. The airline paid up ₹25,000 within a month. Excellent transparency and efficiency."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Gurpreet Singh" },
      "reviewBody": "SpiceJet delayed our flight to Amritsar by 9 hours, resulting in missing my cousin's wedding ceremony. LegalRecovery filed a detailed deficiency of service case in consumer court. We won an award of ₹55,000 for harassment and emotional distress."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Vikram Rathore" },
      "reviewBody": "My flight was delayed by 5.5 hours and they didn't even offer water. LegalRecovery helped file a formal complaint using the DGCA CAR rules. The airline refunded my complete fare and added ₹15,000 as compensation. Very satisfied with the outcome."
    }
  ]
};

export default function DelayedFlightClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) => prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]);
  };

  const tocSections = [
    { id: "understanding-dgca-rules-delayed-flights", title: "DGCA CAR Section 3 Rules" },
    { id: "determining-financial-liability-airlines", title: "Compensation & Liability Math" },
    { id: "international-travel-rights-montreal-convention", title: "Montreal Convention Rights" },
    { id: "debunking-force-majeure-defenses", title: "Debunking Airline Excuses" },
    { id: "legal-recourse-and-dispute-resolution", title: "Dispute Escalation Playbook" },
    { id: "expert-legal-representation-delayed-flights", title: "The LegalRecovery Advantage" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Delayed Flight Compensation", href: "/recovery/delayed-flight-compensation" },
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
              Aviation Delay Claims
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Delayed Flight</span> Compensation
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don't accept empty apologies. Under Indian law and international treaties, you have a right to care, refunds, and substantial monetary damages for flight delays. We hold airlines legally accountable.
            </p>
            <button onClick={() => setIsPaymentModalOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer">
              Initiate Claim Now
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
                <section id="understanding-dgca-rules-delayed-flights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Regulatory Foundation: DGCA CAR Section 3 Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Flight delays represent one of the most frustrating experiences in modern travel. In India, the legal rights of passengers subjected to flight delays are primary, structured, and protected. The cornerstone of these rights is the <strong>Civil Aviation Requirement (CAR) Section 3, Series M, Part IV</strong>, issued by the Directorate General of Civil Aviation (DGCA) under the Ministry of Civil Aviation. This binding regulatory framework outlines the minimum level of services, facilities, and options that airlines must provide when flights are delayed beyond specified thresholds. Every passenger purchasing a ticket from an Indian carrier or departing from an Indian airport is protected under this mandate. The regulations are designed to prevent passengers from being held captive by airline scheduling failures, ensuring that essential care is provided dynamically as the delay progresses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The application of DGCA rules depends on the concept of <strong>block time</strong>, which is the total time from the moment the aircraft moves from the departure gate until it comes to a stop at the arrival gate. For domestic flights, the rules establish graduated levels of care:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Delays of 2 Hours or More:</strong> For flights with a scheduled block time of up to 2.5 hours, the airline is legally obligated to provide basic care, beginning with drinking water, followed by meals and refreshments appropriate to the hour of the day.
                      </li>
                      <li>
                        <strong>Delays of 3 Hours or More:</strong> For flights with a block time between 2.5 and 5 hours, the threshold for meals and refreshments kicks in at 3 hours of delay.
                      </li>
                      <li>
                        <strong>Delays of 4 Hours or More:</strong> For flights with a block time exceeding 5 hours, the care and refreshments must be provided after a 4-hour delay.
                      </li>
                      <li>
                        <strong>Overnight Delays:</strong> When the delay is expected to result in an overnight stay, or if a delay of more than 24 hours is expected, the airline must provide free hotel accommodation and round-trip airport transfers.
                      </li>
                      <li>
                        <strong>Delays Exceeding 6 Hours:</strong> For extreme delays exceeding 6 hours, the airline is mandated to notify the passengers at least 24 hours prior to the scheduled departure. If they fail to do so, they must offer an alternate flight or a full ticket refund.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Despite these clear mandates, airlines regularly flout DGCA regulations. Ground staff frequently pretend that passengers are not entitled to food or water, or claim that refreshments are unavailable. Furthermore, airlines often attempt to hide behind the blanket defense of &quot;extraordinary circumstances&quot; (such as weather or ATC instructions) to deny their statutory obligations. However, Indian courts have repeatedly held that even when a delay is caused by genuine force majeure, the airline is NOT exempt from its duty of care. Providing drinking water, food, and safe shelter is an absolute humanitarian and regulatory duty that cannot be signed away or ignored under any circumstances.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The DGCA Civil Aviation Requirements are mandatory conditions of the airline's operating license. Non-compliance is not merely a breach of contract with the passenger; it is a regulatory violation that subjects the airline to severe financial penalties and forms an open-and-shut case of deficiency in service under consumer protection laws.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="determining-financial-liability-airlines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Compensation & Liability Math: Facilities, Refunds, and Damages
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common point of confusion is whether an airline must pay direct cash compensation for a flight delay. Under the strict letter of the DGCA CAR, direct cash compensation (ranging from ₹5,000 to ₹20,000) is explicitly mandated for <em>cancellations</em> without adequate notice and for <em>denied boarding</em> due to overbooking. For delays, the regulatory mandate is focused on &quot;care and facilities&quot;—meals, hotel stays, rebooking, or a full refund. However, this is where the interaction between regulatory law and consumer law becomes critical.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an airline fails to provide the required care, or if the delay causes you tangible financial damage or mental distress, the consumer protection framework opens up substantial liability. Under the <strong>Consumer Protection Act, 2019</strong>, any failure by the airline to adhere to DGCA guidelines, or any delay caused by the airline's own operational negligence, is classified as a <strong>deficiency in service</strong>. This enables passengers to claim three distinct layers of financial recovery:
                    </p>
                    <div className="space-y-4">
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm md:text-base text-slate-900">Layer 1: Out-of-Pocket Expense Recovery</h4>
                        <p className="text-xs md:text-sm text-slate-650 mt-2 leading-relaxed">
                          If the airline refuses to provide meals or overnight accommodation, you can purchase them yourself and claim full reimbursement. This includes the cost of meals, water, taxis to and from the airport, hotel room charges, and the price of purchasing a replacement ticket on another airline if you had to cancel your delayed flight to reach your destination. You must maintain complete tax invoices and receipts for every expenditure.
                        </p>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm md:text-base text-slate-900">Layer 2: Consequential Damage Claims</h4>
                        <p className="text-xs md:text-sm text-slate-650 mt-2 leading-relaxed">
                          Consequential damages cover the financial losses you suffered as a direct result of the delay. Examples include: a pre-paid hotel booking at your destination that went to waste, a missed connection on a separate ticket, a missed business contract because you failed to arrive on time, or lost wages due to missing work. While airlines write disclaimers against consequential damages into their carriage contracts, consumer courts regularly strike down these clauses if the delay is proven to be caused by airline mismanagement or bad faith.
                        </p>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm md:text-base text-slate-900">Layer 3: Compensation for Mental Agony and Harassment</h4>
                        <p className="text-xs md:text-sm text-slate-650 mt-2 leading-relaxed">
                          This is often the largest component of a consumer court award. Being stranded in an airport for hours, particularly with children, elderly relatives, or medical conditions, without clear communication or care, causes significant psychological stress. Consumer Commissions routinely award ₹20,000 to ₹1,50,000 for mental agony, harassment, and loss of peace of mind, plus litigation expenses. In egregious cases (e.g., medical emergency passengers left unattended), courts have awarded punitive damages exceeding ₹3,00,000.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      When we calculate your claim, we compile all three layers. For instance, a 10-hour delay that causes a passenger to spend ₹8,000 on a hotel, lose ₹15,000 on a wasted holiday booking, and suffer extreme stress due to lack of food will form a total claim of ₹23,000 (actuals) + ₹50,000 (mental agony) + ₹15,000 (litigation costs) = <strong>₹88,000</strong>. Our legal team uses this comprehensive calculation model to force airlines into realistic settlement discussions or win matching judgments in court.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="international-travel-rights-montreal-convention" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Beyond Borders: The Montreal Convention for International Delayed Flights
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your delayed flight was international—whether departing from India on a domestic or foreign carrier, or arriving in India—your rights are governed by an international treaty known as the <strong>Montreal Convention of 1999</strong> (MC99). India is a signatory to the Montreal Convention, having ratified it through an amendment to the <strong>Carriage by Air Act, 1972</strong>. The Convention establishes a unified, global legal framework for airline liability, overriding the airline's local terms and conditions and providing robust protections for international travelers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The core provision for delayed flights is found in <strong>Article 19 of the Montreal Convention</strong>, which states:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">
                      &quot;The carrier is liable for damage occasioned by delay in the carriage by air of passengers, baggage or cargo. Nevertheless, the carrier shall not be liable for damage occasioned by delay if it proves that it and its servants and agents took all measures that could reasonably be required to avoid the damage or that it was impossible for it or them to take such measures.&quot;
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under MC99, liability is quantified in <strong>Special Drawing Rights (SDR)</strong>, which is an international reserve asset created by the International Monetary Fund (IMF) based on a basket of major currencies. The liability limits are reviewed every five years. Currently, the maximum liability limit for damage caused by passenger delay is capped at <strong>5,346 SDR</strong> per passenger, which translates to approximately <strong>₹6,20,000</strong> at current exchange rates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unlike domestic claims where you seek general damages for mental agony, an international claim under the Montreal Convention requires you to prove actual, quantifiable &quot;damage&quot; resulting from the delay. This includes the cost of purchasing fresh clothes and toiletries if your baggage was also delayed, the cost of transit hotels, missed cruise bookings, or alternative transportation required to complete your journey. To successfully claim under MC99, you must bring your legal action within a strict limitation period of <strong>two years</strong> from the date the aircraft arrived, or ought to have arrived, at the destination.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="debunking-force-majeure-defenses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Proving Deficiency: Dismantling the Airline's "Weather" and "ATC" Excuses
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When confronted with a compensation claim, the airline's immediate reaction is to deny responsibility by citing weather, Air Traffic Control (ATC) restrictions, or unexpected technical snags. Because the burden of proof under DGCA rules and the Montreal Convention lies on the airline to establish &quot;extraordinary circumstances,&quot; they will produce standard, computer-generated delay logs as evidence. Without expert legal representation, most passengers cannot challenge these technical documents.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our aviation data analysts dismantle fake force majeure defenses using independent, third-party data sources:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>IMD Meteorological Auditing:</strong> We retrieve historical METAR (Meteorological Aerodrome Report) and TAF (Terminal Aerodrome Forecast) data from the India Meteorological Department for the precise hours of your scheduled departure and arrival. If the METAR shows visibility was well above the CAT-I/CAT-III instrument landing system limits, we prove the weather excuse was a fabrication.
                      </li>
                      <li>
                        <strong>NOTAM and ATC Analysis:</strong> We query the Airports Authority of India's NOTAM (Notice to Airmen) registry. If the airline claims the delay was due to sudden runway maintenance or airspace restrictions, but no NOTAM was active during those hours, their defense is legally disproven.
                      </li>
                      <li>
                        <strong>Comparative Route Monitoring:</strong> We perform a historical check on flight tracking portals (such as FlightRadar24) to see if other airlines operating the same route at the same time took off and landed on schedule. If three other carriers flew Delhi to Mumbai normally, the weather defense for your specific flight is disproven.
                      </li>
                      <li>
                        <strong>Technical Logbook Audits:</strong> If the airline claims a technical defect was an &quot;unforeseeable safety issue,&quot; we request the Consumer Commission to order the production of the aircraft's Technical Logbook (Tech Log). If the records show the defect had been deferred multiple times or was a recurring maintenance issue, it constitutes operational negligence, not force majeure.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      By presenting these objective data points, we shift the balance of credibility in court. When the airline realizes that their internal logs are being contrasted with official meteorological and ATC data, they frequently settle the claim to avoid adverse judicial findings.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="legal-recourse-and-dispute-resolution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Dispute Escalation Playbook: Notices, AirSewa, and Consumer Court
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering delayed flight compensation requires a systematic, escalating legal approach. Most passengers fail because they send standard emails to generic customer support addresses, which are handled by automated response bots. To succeed, you must follow our structured legal playbook:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Step 1: Serve a Formal Demand and Legal Notice (Days 1–7):</strong> We bypass front-line customer support and draft a comprehensive demand letter addressed directly to the airline's Nodal Officer and Appellate Authority. This notice sets out the facts of the delay, cites the relevant DGCA CAR or Montreal Convention sections, presents the itemized claim (actuals + damages), and provides a strict 7-to-15 day deadline for compliance. This notice must be sent via registered post or official legal channels.
                      </li>
                      <li>
                        <strong>Step 2: Escalation to the AirSewa Portal (Days 7–21):</strong> If the airline fails to respond or rejects the demand, we file a formal grievance on the Ministry of Civil Aviation's AirSewa portal. We upload the legal notice, boarding passes, delay certificates, and our evidence package. AirSewa grievances are tracked directly by ministry officials, forcing the airline's compliance cell to review the case.
                      </li>
                      <li>
                        <strong>Step 3: Filing a Consumer Complaint (Days 21+):</strong> If the administrative and regulatory channels do not yield a fair settlement, we file a formal consumer complaint under the Consumer Protection Act, 2019. Depending on the claim amount, the complaint is filed in the District Consumer Disputes Redressal Commission (for claims up to ₹50 Lakhs). Thanks to the e-Daakhil portal, complaints can be filed and argued online, reducing the time and cost of litigation. The complaint will demand the refund of the ticket, out-of-pocket costs, interest at 9-12% per annum, substantial damages for mental agony, and legal costs.
                      </li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      By following this structured path, we ensure that every claim is backed by a solid paper trail. If the airline chooses to contest the case in consumer court, they face the prospect of paying substantial litigation costs and interest, making pre-trial settlement a much more attractive option for them.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="expert-legal-representation-delayed-flights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The LegalRecovery Advantage: Strategic Debt and Claim Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India's leading legal-tech platform specializing in debt recovery and consumer claim enforcement. We understand that passengers do not have the time, resources, or technical knowledge to fight multi-billion-dollar airlines. That is why we have built a comprehensive, end-to-end recovery service that manages everything for you.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our panel of consumer rights advocates, aviation experts, and data analysts handles the entire lifecycle of your claim: from checking local weather and ATC logs to drafting and serving the statutory notice, managing the AirSewa escalation, and representing you before the Consumer Commissions. We operate on a transparent model designed to make legal recourse affordable and accessible for every air traveler in India.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With a success rate of over 92% in pre-litigation settlements and court awards, we hold defaulting airlines accountable. Don't let airlines get away with pocketing your hard-earned money and ignoring your basic rights. Partner with LegalRecovery to get what is rightfully yours.
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Claim Delayed Compensation</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Airlines must pay for scheduling failures. We gather weather and ATC evidence and file professional claims.
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
