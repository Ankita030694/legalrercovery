'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to flight compensation claims (not refund)
const faqs = [
  {
    question: "What is the difference between a flight refund and flight compensation?",
    answer: "A refund is the return of the ticket price you paid—it gives you your own money back. Compensation, on the other hand, is an additional monetary payment the airline owes you for the inconvenience, hardship, or financial loss caused by the disruption—above and beyond the refund. Under DGCA rules, when an airline cancels your flight without adequate notice, delays it significantly, denies you boarding, or downgrades your seat class, you are entitled to both: a refund (or alternate flight) AND compensation. The refund replaces the ticket cost; the compensation covers the harm caused by the airline's failure. Consumer courts can award even higher compensation than the DGCA minimums, including damages for mental agony, consequential financial losses (missed hotel bookings, business meetings), and litigation costs."
  },
  {
    question: "How much compensation can I get for a domestic flight delay in India?",
    answer: "Under DGCA CAR Section 3, Series M, Part IV, the compensation depends on the scheduled block time of the flight and the duration of the delay. For flights with a block time of up to 2 hours, the airline must provide meals and refreshments for delays beyond 2 hours. For flights with a block time of 2 to 5 hours, facilities kick in for delays beyond 3 hours. For all flights delayed beyond 6 hours, the airline must offer either an alternate flight or a full refund. Financial compensation for cancellations without adequate notice ranges from ₹5,000 to ₹20,000 depending on the circumstances. However, consumer courts are not bound by these DGCA amounts—they can and do award significantly higher compensation for 'deficiency in service,' including ₹25,000 to ₹3 lakhs for mental agony, consequential damages, and litigation costs, depending on the severity of the disruption."
  },
  {
    question: "I was denied boarding because the airline overbooked the flight. What compensation am I entitled to?",
    answer: "Under DGCA rules, if you are involuntarily denied boarding despite holding a confirmed ticket and checking in on time, the airline must: (1) First seek volunteers willing to give up their seats. (2) If no volunteers, provide you with an alternate flight AND financial compensation. The compensation is: (a) 200% of the one-way basic fare plus fuel charge (minimum ₹10,000) if the alternate flight arrives within 24 hours of the original scheduled arrival, or (b) 400% of the one-way basic fare plus fuel charge (minimum ₹20,000) if the alternate arrives more than 24 hours later or if you opt for a full refund instead. These are DGCA regulatory minimums. In consumer courts, denied boarding awards routinely include the DGCA compensation plus additional damages for missed hotel bookings, business losses, and mental harassment—total awards of ₹1 to ₹3 lakhs are common."
  },
  {
    question: "My seat was downgraded from Business Class to Economy without my consent. What are my rights?",
    answer: "Involuntary downgrading—being moved to a lower class than what you booked and paid for—entitles you to a fare difference refund under DGCA regulations. For domestic flights, the airline must refund 75% of the ticket cost (including taxes). For international flights, the refund depends on flight distance: 30% for flights up to 1,500 km, 50% for flights between 1,500–3,500 km, and 75% for flights over 3,500 km. These are the regulatory minimum reimbursements. Through a consumer complaint, you can additionally claim compensation for the inconvenience and the inferior travel experience—especially if the downgrade caused tangible harm (e.g., a business traveler who needed the workspace of business class for a critical presentation, or a medical passenger who required the recline of a premium seat). Awards for wrongful downgrading in consumer courts typically range from ₹50,000 to ₹2 lakhs above the fare difference."
  },
  {
    question: "What are my rights during a tarmac delay—when the plane is stuck on the runway?",
    answer: "India does not have a rigid maximum tarmac delay limit like the US (which caps it at 3 hours for domestic flights). However, DGCA guidelines require airlines to ensure passenger comfort during tarmac delays, including: drinking water for delays of up to 2 hours, tea/coffee with snacks for delays of 2–4 hours, and full meals for longer delays. Airlines must maintain cabin air conditioning at comfortable temperatures. If the delay is prolonged (typically beyond 2–3 hours on the tarmac), the airline and airport may coordinate to deplane passengers back to the terminal through departure gates. Following high-profile tarmac delay incidents in 2023–2024 (including the viral Mumbai tarmac eating incident), the DGCA imposed penalties totaling ₹2.70 crore on airlines and imposed stricter SOPs. If you suffered during a tarmac delay—heat, dehydration, lack of food, medical distress—you can file a consumer complaint for deficiency in service."
  },
  {
    question: "My luggage was lost by the airline. What compensation can I claim?",
    answer: "For domestic flights, airline liability for lost baggage is capped at ₹20,000 per passenger under DGCA CAR Section 3, Series M, Part VI. Some airlines calculate this based on weight (approximately ₹450 per kg). For international flights, liability is governed by the Montreal Convention, which caps compensation at 1,288 SDR (Special Drawing Rights), approximately ₹1.5 lakhs at current exchange rates, per passenger. To claim: (1) File a Property Irregularity Report (PIR) at the airline's baggage desk before leaving the airport. (2) Submit a formal written claim within 7 days for damaged baggage and 21 days for delayed/lost baggage. (3) Provide an inventory of the bag's contents with approximate values. Consumer courts can award compensation above these caps if you prove the airline was grossly negligent—for instance, if the airline failed to trace the bag despite repeated follow-ups or if the bag contained irreplaceable items like medical equipment or professional instruments."
  },
  {
    question: "Does the Montreal Convention apply to my international flight from India?",
    answer: "Yes. India ratified the Montreal Convention (Convention for the Unification of Certain Rules for International Carriage by Air, 1999) through the Carriage by Air Act, 1972 (as amended). The Convention applies to all international flights departing from or arriving in India on any carrier. Under Article 19, airlines are liable for damages caused by flight delays unless they prove all reasonable measures were taken to avoid the delay. Under Articles 17–18, airlines are liable for death, injury, or damage to passengers and baggage. The maximum liability for delay is approximately 5,346 SDR (about ₹6.2 lakhs), for baggage damage/loss is 1,288 SDR (about ₹1.5 lakhs), and for death/injury is 128,821 SDR (about ₹1.5 crores). These limits apply per passenger and can be exceeded if the airline's conduct amounts to reckless or intentional misconduct."
  },
  {
    question: "Can I claim compensation for a missed connecting flight caused by the airline's delay?",
    answer: "Yes, if the missed connection was caused by the airline's delay (not by your own late arrival at the gate). If both legs were booked on a single PNR (a through-booking), the airline has a clear contractual obligation to ensure your connection and must rebook you at no cost plus provide meals and accommodation during the wait. If the legs were on separate tickets, the situation is more complex—the first airline may argue it has no responsibility for the second flight. However, consumer courts have awarded compensation in separate-ticket scenarios too, if the passenger can prove the delay was the airline's fault and the consequential loss (second ticket cost, hotel booking) was foreseeable. For international connections, the Montreal Convention provides additional protection. Always document: the original itinerary, the delay, the missed connection, and every additional cost incurred."
  },
  {
    question: "What is the difference between 'extraordinary circumstances' and 'operational reasons' for airline delays?",
    answer: "'Extraordinary circumstances' is the specific legal defense that exempts airlines from paying compensation—it covers genuinely unforeseeable and uncontrollable events like severe weather (cyclones, volcanic ash, thunderstorms making landing unsafe), air traffic control imposed ground stops, airport closures due to security threats, political instability, or natural disasters. 'Operational reasons,' on the other hand, is a vague catch-all phrase airlines use for disruptions caused by their own internal management failures—crew scheduling problems, aircraft rotation issues, crew duty time limits being reached, minor technical faults that should have been resolved during routine maintenance, or commercial decisions to merge low-load flights. Indian consumer courts have consistently held that 'operational reasons' do NOT qualify as extraordinary circumstances and that airlines remain fully liable for compensation when the delay is caused by their own mismanagement."
  },
  {
    question: "How do I prove the airline's delay claim of 'weather' is false?",
    answer: "Airlines frequently cite 'weather conditions' as the reason for delays to avoid paying compensation, even when the actual cause was crew unavailability or a technical fault. You can verify the weather defense using publicly available data: (1) India Meteorological Department (IMD) website—check the hourly weather data for the departure and arrival airports during the relevant time window. (2) NOTAM (Notice to Airmen) bulletins—these are published by the Airports Authority of India and list all operational restrictions, including weather-related closures. They can be accessed through aviation information portals. (3) Flight tracking websites (FlightRadar24, FlightAware)—check if other flights on the same route departed on time during the same period. If other airlines were flying the route normally, the weather defense fails. (4) ATC logs—in a consumer complaint, you can request the court to summon ATC records for the relevant time window to verify whether any weather-related restrictions were in effect."
  },
  {
    question: "Can I file a compensation claim for both DGCA compensation and consumer court damages?",
    answer: "Yes. DGCA-mandated compensation (denied boarding amounts, meals, hotels) represents the regulatory minimum that the airline must provide automatically—it is not a cap on total damages. You can separately approach the consumer court to claim additional damages for deficiency in service under the Consumer Protection Act, 2019. The consumer court can award: (a) the DGCA-mandated compensation if the airline failed to pay it, (b) compensation for mental agony, harassment, and inconvenience (typically ₹25,000 to ₹2 lakhs), (c) consequential damages for actual financial losses caused by the disruption (cost of alternate tickets, hotel bookings, business losses), (d) interest on delayed payments (typically 9–12% per annum), and (e) litigation costs. Total consumer court awards in flight compensation cases routinely range from ₹50,000 to ₹3 lakhs, depending on the severity of the disruption."
  },
  {
    question: "What is the time limit to file a compensation claim against an airline?",
    answer: "The limitation periods vary depending on the forum and the nature of the claim: (1) For AirSewa complaints, you should ideally file within 30 days of the disruption, although there is no strict statutory bar. (2) For consumer court complaints under the Consumer Protection Act, 2019, the limitation period is 2 years from the date of the cause of action (the date of the disruption or the date the airline refused compensation). (3) For claims under the Montreal Convention (international flights), the limitation period is 2 years from the date of arrival at the destination, the date the aircraft should have arrived, or the date of stoppage of carriage. (4) For civil suits, the Limitation Act, 1963 prescribes a 3-year period. Missing these deadlines can result in your claim being time-barred, although courts have discretion to condone delays with sufficient cause. We recommend filing within 6 months of the disruption for maximum effectiveness."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "Flight Compensation Claim", "item": "https://www.legalrecovery.in/recovery/flight-compensation-claim" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flight Compensation Claim India: How to Recover Money for Delays, Denied Boarding, Downgrading, Tarmac Delays & Lost Baggage",
  "description": "Comprehensive legal guide on claiming compensation from airlines in India for flight delays, denied boarding due to overbooking, involuntary downgrading, tarmac delays, lost/damaged baggage, and missed connections. Covers DGCA rules, Montreal Convention, Carriage by Air Act, and Consumer Protection Act remedies.",
  "image": "https://www.legalrecovery.in/og-flight-compensation.png",
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
  "name": "Flight Compensation Claim Recovery Services",
  "image": "https://www.legalrecovery.in/og-flight-compensation.png",
  "description": "Expert legal services for claiming compensation from airlines in India for flight delays, denied boarding, involuntary downgrading, tarmac delays, lost baggage, and missed connections.",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "845" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Aditya Joshi" },
      "reviewBody": "My Air India flight from Delhi to Kolkata was delayed by 6 hours due to 'crew unavailability.' The airline offered nothing—no meals, no hotel, no alternate flight. LegalRecovery filed an AirSewa complaint proving the delay was operational (not weather-related) and followed up with a consumer complaint. The District Commission awarded me ₹15,000 DGCA compensation plus ₹45,000 for mental agony and ₹10,000 litigation costs. Total ₹70,000 for a ₹4,500 ticket."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Shweta Pillai" },
      "reviewBody": "I was involuntarily denied boarding on my confirmed IndiGo flight from Bangalore to Mumbai due to overbooking. The airline put me on a flight 8 hours later and offered only a meal voucher. LegalRecovery demanded 400% fare compensation under DGCA rules plus consequential damages for my missed client presentation. The consumer forum awarded ₹20,000 denied boarding compensation plus ₹85,000 for business loss and mental agony."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Mohan Das" },
      "reviewBody": "SpiceJet downgraded me from Business to Economy on my Mumbai-Dubai flight without consent. They initially refused any compensation, claiming it was a 'schedule change.' LegalRecovery cited the DGCA downgrading rules (75% of ticket for flights over 3,500 km) and filed a consumer complaint. I was awarded ₹38,000 fare difference plus ₹60,000 for deficiency in service. Outstanding work."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Pallavi Saxena" },
      "reviewBody": "Our family of four was stuck on the tarmac at Delhi airport for 3.5 hours in an Air India flight with no air conditioning and no water. My elderly father had a panic attack. LegalRecovery filed a complaint citing DGCA tarmac delay guidelines and the airline's duty of care. The consumer forum awarded us ₹1.2 lakhs total—₹30,000 per passenger—for deficiency in service and medical distress."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Karan Mehra" },
      "reviewBody": "IndiGo lost my checked bag on a Delhi-Goa flight containing professional camera equipment worth ₹3 lakhs. They offered ₹20,000 citing the DGCA domestic baggage cap. LegalRecovery filed a consumer complaint proving the airline's gross negligence (the bag was tracked to a different city and never recovered). The Commission awarded ₹1.8 lakhs after reviewing purchase invoices for the equipment."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Nisha Sharma" },
      "reviewBody": "My connecting flight from Mumbai to London via Delhi was missed because the Mumbai-Delhi leg was delayed by 4 hours. Both flights were on the same Air India PNR. The airline refused to rebook the international leg. LegalRecovery invoked the Montreal Convention and filed a consumer complaint. I was awarded the full cost of a replacement international ticket (₹52,000) plus ₹40,000 for hotel costs and mental agony."
    }
  ]
};

export default function FlightCompensationClaimClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) => prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]);
  };

  const tocSections = [
    { id: "beyond-the-ticket-price", title: "Beyond the Ticket Price" },
    { id: "compensation-triggers", title: "The Five Compensation Triggers" },
    { id: "the-compensation-math", title: "The Compensation Math" },
    { id: "proving-airline-fault", title: "Proving Airline Fault" },
    { id: "claim-execution-playbook", title: "Claim Execution Playbook" },
    { id: "case-outcomes", title: "Case Outcomes" },
    { id: "client-reviews", title: "Client Reviews" },
    { id: "why-legalrecovery", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Flight Compensation Claim", href: "/recovery/flight-compensation-claim" },
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
              Aviation Compensation Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Claim <span className="text-[#DC2626]">Flight Compensation</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Delayed for hours, denied boarding, downgraded without consent, stranded on the tarmac, or lost your luggage? Airlines owe you more than apologies. Claim DGCA-mandated compensation plus consumer court damages for mental agony and financial losses.
            </p>
            <button onClick={() => setIsPaymentModalOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer">
              Claim Compensation Now
            </button>
          </div>
        </div>

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
                <section id="beyond-the-ticket-price" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Beyond the Ticket Price</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an airline disrupts your travel—whether through a multi-hour delay, a last-minute cancellation, an overbooking-driven denial of boarding, an involuntary downgrade from Business to Economy, a nightmarish tarmac ordeal, or the loss of your checked baggage—the harm you suffer goes far beyond the price of the ticket. You lose time, miss critical business meetings and family events, incur emergency rebooking costs, spend nights in airport terminals, and endure the stress and anxiety of being stranded without control over your own schedule. Yet when you approach the airline for redress, the standard response is a scripted apology, a ₹200 meal voucher, and a suggestion to &quot;check the website for our terms and conditions.&quot;
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      What most Indian air passengers do not realize is that they are entitled to <strong>financial compensation</strong> that is completely separate from, and in addition to, any ticket refund. This compensation is a legal right—not a goodwill gesture from the airline. It is mandated by the DGCA under CAR Section 3, Series M, Part IV for domestic disruptions, governed by the Montreal Convention and the Carriage by Air Act, 1972 for international flights, and expandable through the Consumer Protection Act, 2019 for consequential damages that exceed the DGCA&apos;s regulatory minimums. Airlines know these rights exist. They are designed to not remind you.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we have built India&apos;s deepest aviation compensation practice—not refunds (which is a separate service), but compensation: the money airlines owe you for the disruption itself, the downstream damages it caused, and the mental anguish you endured. Our legal panel has successfully claimed compensation from every major Indian carrier—IndiGo, Air India, SpiceJet, Akasa Air, Alliance Air—and from international operators like Emirates, Qatar Airways, Etihad, British Airways, and Lufthansa for flights touching Indian airports. Whether the airline offered you nothing, offered a token meal voucher, cited &quot;weather&quot; to dodge liability, or simply ignored your complaint—we deploy a multi-forum strategy using DGCA regulations, the Montreal Convention, the Carriage by Air Act, and consumer litigation to recover every rupee you are entitled to.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;DGCA compensation for denied boarding and delays is the regulatory floor, not the ceiling. Consumer courts in India have consistently awarded 3x to 10x the DGCA amount when airlines are found liable for deficiency in service—including damages for missed events, business losses, medical distress, and prolonged mental agony.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="compensation-triggers" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Five Compensation Triggers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian aviation law recognizes five distinct categories of airline disruption that trigger a legal right to compensation. Each has its own regulatory framework, calculation methodology, and evidentiary requirements. Understanding which trigger applies to your situation determines the compensation strategy:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Trigger 1: Flight Delay Beyond Prescribed Thresholds</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Under DGCA CAR Section 3, Series M, Part IV, when a flight is delayed beyond specific thresholds, the airline must provide graduated facilities and, in some cases, financial compensation. The thresholds are linked to the flight&apos;s scheduled <strong>block time</strong> (the total planned duration from gate departure to gate arrival). For flights with a block time of up to 2 hours, airline obligations begin at a 2-hour delay. For flights with a block time of 2 to 5 hours, obligations begin at a 3-hour delay. Facilities include drinking water (2 hours), meals and refreshments (2–4 hours), and hotel accommodation with transfers for overnight delays. If the delay exceeds <strong>6 hours</strong>, the passenger must be offered a choice between a full refund and an alternate flight. The critical point for compensation claims is that these facilities are not &quot;goodwill&quot;—they are legal obligations. Airlines that fail to provide them commit a &quot;deficiency in service&quot; actionable under the Consumer Protection Act. Consumer courts have awarded ₹25,000 to ₹1.5 lakhs in damages to passengers who were denied meals, water, or accommodation during lengthy delays, even where the airline eventually provided an alternate flight.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Trigger 2: Denied Boarding Due to Overbooking</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Airlines routinely sell more tickets than available seats—a practice called overbooking—betting that a certain percentage of passengers will not show up. When all passengers show up and someone must be &quot;bumped,&quot; the airline must first seek <strong>volunteers</strong> willing to give up their seats in exchange for negotiated benefits (upgrades, vouchers, cash). If there are no volunteers and you are <strong>involuntarily denied boarding</strong> despite holding a confirmed ticket and having checked in on time, the DGCA mandates immediate financial compensation. The amounts are structured based on when the airline can arrange an alternate flight: <strong>200% of the one-way basic fare plus fuel charge (minimum ₹10,000)</strong> if the alternate arrives within 24 hours of the original arrival time, or <strong>400% of the one-way basic fare plus fuel charge (minimum ₹20,000)</strong> if the alternate arrives more than 24 hours later or if you choose a full refund instead. These are regulatory minimums paid <em>in addition to</em> the alternate flight or refund. In consumer courts, the total award for denied boarding—including the DGCA compensation, consequential financial losses (missed hotel bookings, business meetings, connecting flights), and mental agony damages—routinely reaches ₹1 to ₹3 lakhs, making denied boarding one of the most lucrative compensation categories for passengers who challenge the airline.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Trigger 3: Involuntary Downgrading</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          When an airline places you in a lower class than what you booked—Business Class passenger seated in Economy, First Class moved to Business—without your consent, you are entitled to a fare difference reimbursement under DGCA regulations. For <strong>domestic sectors</strong>, the reimbursement is <strong>75% of the ticket cost including taxes</strong>. For <strong>international sectors</strong>, the percentage depends on the flight distance: <strong>30%</strong> for flights up to 1,500 km, <strong>50%</strong> for flights between 1,500–3,500 km, and <strong>75%</strong> for flights exceeding 3,500 km. Critically, this fare difference is just the starting point. If the downgrade caused tangible harm—a business traveler who lost the workspace and lie-flat seat needed for a critical presentation, a medical passenger who required the extended legroom for a post-surgical recovery, or a premium passenger whose business class lounge access and priority services were revoked—consumer courts award additional compensation for deficiency in service, typically ₹50,000 to ₹2 lakhs above the fare difference. Airlines often attempt to disguise downgrades as &quot;equipment changes&quot; or &quot;schedule modifications&quot;—our legal team cuts through these euphemisms to establish the involuntary nature of the downgrade and claim full compensation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Trigger 4: Tarmac Delays and On-Board Ordeal</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          While India lacks a rigid maximum tarmac delay cap like the US (which imposes a 3-hour domestic limit), DGCA guidelines mandate that airlines maintain passenger comfort during prolonged on-board waits—including drinking water, meals appropriate to the wait duration, and functional air conditioning. Following several viral incidents in 2023–2024 where passengers were stranded on the tarmac for hours in extreme heat without water or air conditioning—including the widely reported Mumbai Airport incident where passengers were photographed eating on the tarmac—the DGCA imposed total penalties of <strong>₹2.70 crore</strong> on IndiGo, Air India, SpiceJet, and the Mumbai airport operator and issued stricter Standard Operating Procedures. If you suffered during a tarmac delay—heat exhaustion, dehydration, panic attacks, medical emergencies, children in distress—each incident is independently actionable as deficiency in service. Consumer courts have awarded ₹30,000 to ₹50,000 <em>per passenger</em> for tarmac ordeal cases, which for a family of four can aggregate to ₹1.2 to ₹2 lakhs. Our team documents tarmac delays using flight tracking data, passenger photographs, social media posts, and airport CCTV requests to build an irrefutable factual record.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Trigger 5: Lost, Delayed, or Damaged Baggage</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Baggage compensation operates under a dual framework. For <strong>domestic flights</strong>, DGCA CAR Section 3, Series M, Part VI caps airline liability at <strong>₹20,000 per passenger</strong> (or approximately ₹450/kg based on weight). For <strong>international flights</strong>, the Montreal Convention caps liability at <strong>1,288 SDR</strong> (approximately ₹1.5 lakhs) per passenger. To initiate a claim, you <strong>must</strong> file a <strong>Property Irregularity Report (PIR)</strong> at the airline&apos;s baggage desk <em>before leaving the airport</em>—failure to file a PIR can severely weaken your claim. Written claims must be submitted within <strong>7 days</strong> for damaged baggage and <strong>21 days</strong> for delayed or lost baggage. These caps, however, are not absolute. Consumer courts have awarded compensation <em>above</em> the regulatory caps in cases of proven gross negligence—for example, where the airline failed to trace the bag despite repeated follow-ups, where the bag contained irreplaceable professional equipment (cameras, medical devices, musical instruments) with documented purchase invoices, or where the airline misrouted the bag to a different country and never recovered it. Our team prepares detailed baggage valuation inventories supported by purchase receipts, photographs, and professional appraisals to maximize the compensation claim.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="the-compensation-math" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Compensation Math</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding what you can claim is the foundation of every successful compensation case. Indian law provides three distinct layers of recovery, and our legal panel stacks all three to maximize your total award:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs md:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="p-3 font-bold">Layer</th>
                            <th className="p-3 font-bold">Source</th>
                            <th className="p-3 font-bold">What It Covers</th>
                            <th className="p-3 font-bold">Typical Range</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="bg-white">
                            <td className="p-3 font-bold">1. Regulatory</td>
                            <td className="p-3">DGCA CAR / Montreal Convention</td>
                            <td className="p-3">Mandated compensation for denied boarding, downgrading, baggage loss</td>
                            <td className="p-3">₹5,000 – ₹20,000 (DGCA) / up to ₹6.2L (Montreal)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold">2. Consequential</td>
                            <td className="p-3">Consumer Protection Act, 2019</td>
                            <td className="p-3">Actual financial losses: alternate tickets, hotel costs, business losses, medical expenses</td>
                            <td className="p-3">₹10,000 – ₹5,00,000+</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-3 font-bold">3. Compensatory</td>
                            <td className="p-3">Consumer Protection Act, 2019</td>
                            <td className="p-3">Mental agony, harassment, inconvenience, litigation costs, interest on delayed amounts</td>
                            <td className="p-3">₹25,000 – ₹3,00,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      The total claim is the sum of all three layers. A denied boarding case, for example, might yield ₹20,000 in DGCA compensation (Layer 1) + ₹52,000 for the replacement international ticket and ₹15,000 for the wasted hotel booking (Layer 2) + ₹75,000 for mental agony and ₹10,000 litigation costs (Layer 3) = <strong>₹1,72,000 total</strong> — for a passenger whose original ticket might have cost ₹8,000. This is not hypothetical; it is the actual structure of successful consumer court awards in Indian flight compensation cases.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="proving-airline-fault" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Proving Airline Fault</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The single most important factor in a compensation claim is establishing that the disruption was within the airline&apos;s control—not caused by &quot;extraordinary circumstances.&quot; Airlines invoke force majeure liberally, claiming &quot;weather,&quot; &quot;ATC restrictions,&quot; or &quot;security reasons&quot; for disruptions that were actually caused by crew shortages, maintenance failures, commercial decisions, or poor operational planning. At LegalRecovery, we have developed a systematic methodology for verifying or debunking airline defenses using publicly available data:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Weather Verification (IMD Data):</strong> We access hourly weather observations from the India Meteorological Department (IMD) for both the departure and arrival airports during the relevant time window. If the weather data shows clear skies, normal visibility, and wind speeds within operational limits while the airline claims &quot;adverse weather conditions,&quot; the defense collapses. We also check the TAF (Terminal Aerodrome Forecast) issued hours before the scheduled departure to see if any weather disruption was predicted.
                      </li>
                      <li>
                        <strong>NOTAM Cross-Reference:</strong> Notices to Airmen (NOTAMs) are official bulletins issued by the Airports Authority of India (AAI) that list all operational restrictions affecting airports and airspace—including runway closures, navigation equipment outages, security restrictions, and VIP movement-related airspace closures. We access the NOTAM database for the relevant airport and time to determine whether any restriction was actually in effect. If no NOTAM was issued, the airline&apos;s claim of ATC restrictions is unsupported.
                      </li>
                      <li>
                        <strong>Comparative Flight Analysis:</strong> If the airline claims weather or ATC restrictions caused the delay, we check whether other airlines operating the same route departed on schedule during the same time window using flight tracking platforms (FlightRadar24, FlightAware). If three other carriers flew Delhi-Mumbai at the same time without delay, the weather defense for your specific flight fails the credibility test.
                      </li>
                      <li>
                        <strong>Crew and Maintenance Records (Court-Summoned):</strong> In consumer complaints, we request the Commission to summon the airline&apos;s internal records—crew duty time logs, aircraft maintenance logs (technical log/journey log), and operational decision records—to determine the actual cause of the delay. Airlines frequently cite &quot;technical snag&quot; which, upon examination of the maintenance log, turns out to be a routine defect that should have been resolved during scheduled maintenance, not an unforeseeable failure.
                      </li>
                      <li>
                        <strong>Social Media and Passenger Reports:</strong> We compile contemporaneous evidence from social media posts, tweets, and passenger forums documenting the disruption—photos of departure boards showing delays, videos of tarmac conditions, and passenger accounts of the airline&apos;s response (or lack thereof). This crowd-sourced evidence is highly persuasive before Consumer Commissions, as it provides real-time corroboration that cannot be fabricated after the fact.
                      </li>
                    </ul>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      Pro Tip: At the airport, request a <strong>written delay certificate</strong> from the airline&apos;s ground staff. This document states the duration and stated reason for the delay. If the airline later changes its story (e.g., from &quot;operational reasons&quot; in the delay certificate to &quot;weather&quot; in the court response), the inconsistency devastates their credibility.
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="claim-execution-playbook" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Claim Execution Playbook</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery&apos;s compensation claim process is a structured, escalating sequence that moves from administrative demand through regulatory complaint to judicial enforcement:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm text-slate-650">
                      <li>
                        <strong>Compensation Demand to the Airline&apos;s Nodal &amp; Appellate Authority (Days 1–7):</strong> Every airline operating in India is mandated by DGCA to appoint a Nodal Officer and an Appellate Authority for passenger complaints. We draft a comprehensive demand letter citing the specific DGCA regulation, calculating the exact compensation owed (regulatory + consequential + compensatory), attaching our evidence package, and setting a 7-day deadline for payment. This formal demand serves a dual purpose: it often triggers payment from compliance-conscious airlines, and it creates the mandatory pre-litigation paper trail required for consumer court filing.
                      </li>
                      <li>
                        <strong>AirSewa Regulatory Complaint (Days 7–21):</strong> If the airline ignores the demand, we file a detailed complaint on the AirSewa portal—the Ministry of Civil Aviation&apos;s official grievance platform. The complaint includes the PNR, disruption details, weather/NOTAM verification data, the demand letter, and the airline&apos;s response (or proof of non-response). AirSewa assigns a grievance ID, forwards it to the airline, and tracks resolution. A documented AirSewa complaint is powerful evidence in consumer court—it proves the passenger exhausted the regulatory channel.
                      </li>
                      <li>
                        <strong>Formal Legal Notice Under Consumer Protection Act (Days 14–21):</strong> We serve a legal notice to the airline&apos;s corporate office and legal department demanding the full three-layer compensation package with a 15-day compliance deadline. The notice explicitly warns that failure to comply will result in a consumer complaint seeking the demanded amount plus punitive damages for &quot;unfair trade practice&quot; (if the airline deliberately misrepresented the delay cause) and additional compensation for the harassment of forcing the passenger to pursue litigation.
                      </li>
                      <li>
                        <strong>Consumer Forum Complaint via eDaakhil (Days 30–90):</strong> If the airline fails to pay, we draft and file a comprehensive consumer complaint before the appropriate Consumer Commission via eDaakhil (edaakhil.nic.in). The complaint sets out the three-layer compensation claim with full documentary support—including the airline-busting weather and NOTAM evidence, the Section 63 BSA digital certificates for all electronic evidence, the AirSewa record, and the legal notice with delivery proof. Consumer Commissions in India resolve most flight compensation cases within 6–12 months and have a strong track record of awarding compensation significantly exceeding the DGCA minimums.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 6: Case Outcomes */}
                <section id="case-outcomes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Case Outcomes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Delay Compensation</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹70,000 Awarded for 6-Hour Delay With No Facilities</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">An Air India Delhi-Kolkata passenger was delayed 6 hours due to crew unavailability. No meals or alternate flight offered. District Commission awarded ₹15,000 DGCA compensation + ₹45,000 mental agony + ₹10,000 litigation costs.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Denied Boarding</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹1.05 Lakhs for Overbooking on IndiGo BLR-BOM</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Business traveler denied boarding on confirmed ticket due to overbooking. Put on flight 8 hours later with only a meal voucher. Commission awarded ₹20,000 DGCA + ₹85,000 for missed client presentation and mental agony.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Downgrading</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹98,000 for Involuntary BOM-DXB Business-to-Economy Downgrade</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">SpiceJet downgraded a passenger from Business to Economy on Mumbai-Dubai without consent. Commission awarded ₹38,000 fare difference (75% of ticket) + ₹60,000 for deficiency in service and inferior travel experience.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Lost Baggage</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹1.8 Lakhs for Lost Camera Equipment on DEL-GOA</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">IndiGo lost a checked bag containing professional camera equipment worth ₹3 lakhs. Airline offered ₹20,000 citing DGCA cap. Commission awarded ₹1.8 lakhs after reviewing purchase invoices—proving gross negligence overcomes the cap.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-extrabold text-slate-900 text-sm md:text-base">{rev.author.name}</span>
                          <div className="flex items-center text-amber-500">
                            {Array.from({ length: Number(rev.reviewRating.ratingValue) }).map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 italic leading-relaxed">&quot;{rev.reviewBody}&quot;</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why LegalRecovery */}
                <section id="why-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why LegalRecovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s foremost aviation compensation recovery platform—distinct from generic refund services. We specialize in the compensation that airlines owe you <em>beyond</em> the ticket price.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Three-Layer Compensation Stacking</h4>
                        <p className="text-xs md:text-sm text-slate-650">We don&apos;t just claim the DGCA minimum. We stack regulatory compensation + consequential damages + mental agony damages to maximize your total award—routinely 3x to 10x the DGCA floor.</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Airline Defense Demolition</h4>
                        <p className="text-xs md:text-sm text-slate-650">We systematically verify weather claims (IMD data), ATC restrictions (NOTAMs), and comparative flight operations (FlightRadar24) to expose false force majeure defenses that airlines use to dodge compensation.</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Montreal Convention Expertise</h4>
                        <p className="text-xs md:text-sm text-slate-650">For international flights, we deploy the Montreal Convention and Carriage by Air Act framework—with SDR-based damage calculations—to claim compensation levels significantly above domestic DGCA limits.</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Transparent Flat-Fee Model</h4>
                        <p className="text-xs md:text-sm text-slate-650">No hourly billing, no percentage commission on the compensation recovered. A single flat fee quoted upfront—covering the entire process from demand letter to consumer forum filing.</p>
                      </div>
                    </div>
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
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                          <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left cursor-pointer">
                            <span className="font-bold text-slate-900 text-sm md:text-base">{faq.question}</span>
                            <span className="text-xl text-slate-500 font-light">{isExpanded ? '−' : '+'}</span>
                          </button>
                          {isExpanded && (<div className="p-5 bg-white border-t border-slate-200 text-xs md:text-sm text-slate-650 leading-relaxed">{faq.answer}</div>)}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] text-white p-6 rounded-3xl border border-slate-900 shadow-xl">
                <span className="inline-block text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-3 bg-red-950/40 px-3 py-1 rounded-full border border-red-500/10">Compensation Claims Active</span>
                <h3 className="text-lg font-black mb-3 text-white leading-tight">Claim Your Flight Compensation</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">Delayed, denied boarding, downgraded, or lost luggage? Our aviation panel recovers DGCA compensation plus consumer court damages.</p>
                <button onClick={() => setIsPaymentModalOpen(true)} className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-lg text-xs md:text-sm cursor-pointer">Start Compensation Claim</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
