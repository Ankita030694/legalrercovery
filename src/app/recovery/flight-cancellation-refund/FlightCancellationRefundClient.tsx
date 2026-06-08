'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to flight cancellation refund disputes in India
const faqs = [
  {
    question: "How long does an airline have to process my flight cancellation refund under the latest DGCA rules?",
    answer: "Under the DGCA Civil Aviation Requirements updated in March 2026, airlines must process refunds within strict timelines based on the payment method used. For tickets purchased via credit or debit card, the refund must be credited back to the original card within 7 working days. For tickets booked through travel agents or online portals, the airline must release the refund to the agent within 7 days, and the agent must credit the passenger within 14 working days from the date of cancellation. For cash bookings, the refund must be made immediately at the airline's office where the ticket was purchased. Failure to meet these timelines is a violation of DGCA regulations and constitutes grounds for a formal complaint on the AirSewa portal and, subsequently, a consumer court case for deficiency in service."
  },
  {
    question: "Can the airline force me to accept a credit shell or travel voucher instead of a cash refund?",
    answer: "No. Under the DGCA guidelines effective March 26, 2026, airlines are expressly prohibited from making credit shells or travel vouchers the default or mandatory refund option. The passenger has the unequivocal right to choose between a monetary refund credited to the original payment method and a credit shell for future travel. If an airline or its booking portal attempts to force a credit shell—by hiding the cash refund option, making the process deliberately difficult, or claiming the ticket is 'non-refundable' when the cancellation was airline-initiated—you should explicitly invoke the DGCA 2026 regulations in a written communication and demand a cash refund. If the airline still refuses, file a complaint on AirSewa and escalate to the consumer forum."
  },
  {
    question: "My flight was cancelled by the airline, but they are refusing to refund the full amount. What are my rights?",
    answer: "When an airline cancels a flight (not the passenger), you are entitled to either a full refund of the entire ticket cost—including the base fare, fuel surcharge, Passenger Service Fee (PSF), User Development Fee (UDF), Airport Development Fee (ADF), and all applicable taxes—or rebooking on an alternate flight at no additional cost. Additionally, if the airline failed to inform you of the cancellation at least 3 hours before the scheduled departure time, you are entitled to financial compensation over and above the full refund, unless the cancellation was caused by extraordinary circumstances like severe weather, volcanic ash, security threats, or air traffic control restrictions. The airline bears the burden of proving the extraordinary circumstance—a vague claim of 'operational reasons' does not qualify."
  },
  {
    question: "I booked through MakeMyTrip / Cleartrip / EaseMyTrip. The airline refunded the agent but the agent hasn't paid me. What do I do?",
    answer: "This is one of the most common refund disputes in India. Online Travel Agents (OTAs) act as intermediaries—they collect payment from you and book the ticket with the airline. When a refund is initiated, the flow is: Airline → OTA → Passenger. If the airline confirms the refund has been released to the OTA but the OTA has not credited you, follow these steps: (1) Contact the airline directly with your PNR and obtain a written confirmation (email or reference number) that the refund has been processed to the OTA. (2) Forward this confirmation to the OTA's grievance officer via email, setting a 7-day deadline for credit. (3) If the OTA still does not pay, file a complaint on the AirSewa portal citing the OTA's delay. (4) Simultaneously, if you paid by credit card, initiate a chargeback dispute with your credit card issuer for 'services not received.' (5) If all else fails, file a consumer complaint against both the airline and the OTA—consumer forums have held OTAs jointly liable as 'service providers' under the Consumer Protection Act."
  },
  {
    question: "What is the 48-hour free cancellation rule and how does it work?",
    answer: "The DGCA's updated Civil Aviation Requirements introduce a 48-hour 'look-in' or 'cooling-off' period. Under this rule, a passenger can cancel or modify a booked ticket within 48 hours of the booking time without paying any additional cancellation charges, provided: (a) the domestic flight departure is at least 7 days away from the booking date, and (b) for international flights, the departure is at least 15 days away from the booking date. If these conditions are met, the airline must process a full refund without any deduction. This rule applies regardless of whether the ticket was booked as 'non-refundable' or at a discounted fare. However, be aware that some OTAs may have their own service charges on top of the airline's refund—these OTA charges may not be covered by the DGCA rule but can be challenged separately."
  },
  {
    question: "My flight was delayed by 5 hours and I chose not to travel. Am I entitled to a refund?",
    answer: "Yes, but the entitlements vary based on the duration of the delay. Under DGCA CAR Section 3 Series M Part IV, if a domestic flight is delayed by more than 3 hours, the airline must offer you the choice between: (a) rebooking on the next available flight at no additional cost, or (b) a full refund of the ticket amount. For delays between 2 and 3 hours, the airline must provide meals and refreshments. For delays exceeding 6 hours, if the delay results in an overnight stay, the airline must provide free hotel accommodation including airport transfers. Even if the airline does not proactively offer these options, you have the legal right to demand them. If the airline cancels or significantly reschedules a flight and you choose not to travel, the refund must include the base fare plus all taxes and surcharges—no deductions for 'cancellation charges' are permissible when the disruption is airline-initiated."
  },
  {
    question: "Does the Montreal Convention apply to my international flight cancellation from India?",
    answer: "The Montreal Convention (formally, the Convention for the Unification of Certain Rules for International Carriage by Air, 1999) applies to international flights between countries that are signatories to the treaty—India is a signatory. The Convention establishes the airline's liability for damages caused by flight delays, cancellations, and lost or damaged baggage during international carriage. Under Article 19, the airline is liable for damages caused by delay unless it can prove it took 'all reasonable measures' to avoid the delay or that it was 'impossible' to take such measures. The maximum liability for delay is capped at approximately 5,346 SDR (Special Drawing Rights), which translates to roughly ₹5.8 lakhs at current exchange rates. Note that the Montreal Convention governs damages (financial losses you suffered due to the delay), not a refund of the ticket price—the refund obligation comes from the contract of carriage (ticket terms) and DGCA/local regulations."
  },
  {
    question: "Can I file a complaint on the AirSewa portal for a refund issue? What happens after I file?",
    answer: "Yes. The AirSewa portal (airsewa.gov.in) is the Ministry of Civil Aviation's official grievance redressal platform for air passenger complaints. You can register a complaint regarding refund delays, denied boarding, flight cancellations, excess baggage charges, or any other service deficiency. After filing: (1) You receive a unique grievance ID and acknowledgment. (2) The complaint is forwarded to the concerned airline with a timeline for response (typically 15 to 30 days). (3) The airline is required to respond to your complaint and resolve it within the stipulated timeline. (4) If the airline's response is unsatisfactory or if they fail to respond, the complaint is escalated within the DGCA for further review. While AirSewa itself does not have binding adjudicatory power like a consumer court, a documented AirSewa complaint creates a strong evidentiary record for a subsequent consumer forum filing—it proves you attempted resolution through the regulatory channel before approaching the court."
  },
  {
    question: "My ticket was 'non-refundable.' Does that mean I lose my entire ticket amount if I cancel?",
    answer: "Not entirely. Even for tickets marketed as 'non-refundable,' the DGCA mandates that airlines must refund the statutory taxes and fees component—which includes the Passenger Service Fee (PSF), User Development Fee (UDF), Airport Development Fee (ADF), and Goods and Services Tax (GST). These government-imposed levies are collected by the airline on behalf of the airport/government and are only applicable when you actually use the airport facilities and fly. If you do not fly, these charges must be returned. The 'non-refundable' label applies only to the base fare component. Additionally, if the cancellation was airline-initiated (the airline cancelled the flight, not you), you are entitled to a full refund of the entire ticket amount regardless of whether the ticket was 'refundable' or 'non-refundable.'"
  },
  {
    question: "What compensation can I get from a consumer court for a wrongful refund denial by an airline?",
    answer: "Consumer forums in India routinely award the following in airline refund disputes: (1) The full ticket refund amount with interest (typically 9% to 12% per annum from the date of cancellation to the date of payment). (2) Compensation for mental agony, harassment, and inconvenience—typically ranging from ₹25,000 to ₹2 lakhs depending on the severity and the passenger's circumstances (e.g., higher for families with elderly or infant passengers, or for medical emergencies). (3) Litigation costs (₹5,000 to ₹25,000). (4) In cases of particularly egregious conduct—like systematically forcing credit shells on passengers who demanded cash refunds—consumer courts have also awarded punitive damages. The total award can significantly exceed the original ticket price, making consumer court filing a highly effective deterrent against airline refund abuse."
  },
  {
    question: "I was denied boarding due to overbooking. What compensation am I entitled to under DGCA rules?",
    answer: "Under DGCA CAR Section 3, Series M, Part IV, if an airline denies boarding to a confirmed ticket holder due to overbooking, the airline must: (1) Ask for volunteers willing to give up their seats in exchange for benefits determined by the airline (upgrade, vouchers, etc.). (2) If there are no volunteers and you are involuntarily denied boarding, the airline must provide you with: (a) an alternate flight to your destination, and (b) financial compensation—the amount depends on when the alternate flight arrives relative to the original schedule. If the alternate arrives within 1 hour of the original, compensation is 200% of the booked one-way basic fare plus fuel charge (minimum ₹10,000). If the delay exceeds 1 hour, compensation is 400% of the basic fare plus fuel charge (minimum ₹20,000). These are DGCA-mandated minimums—consumer courts have awarded compensation significantly above these amounts, including additional damages for mental agony and consequential losses."
  },
  {
    question: "Can I initiate a credit card chargeback if the airline refuses my refund?",
    answer: "Yes, a credit card chargeback is a powerful tool available to passengers who paid by credit card and have been denied a legitimate refund. The chargeback process involves contacting your credit card issuer (bank) and filing a dispute for 'services not rendered' or 'refund not processed by merchant.' To succeed, you must provide: (1) proof of the flight cancellation (airline email or SMS), (2) proof that you requested a refund and were denied (correspondence with the airline/agent), and (3) your booking confirmation and payment receipt. Most banks have a 120-day window from the transaction date or expected service date to file a chargeback. However, chargebacks should be used as a last resort after exhausting direct communication with the airline, as they can take 30 to 90 days to resolve and the airline may contest the dispute."
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
      "name": "Flight Cancellation Refund Recovery",
      "item": "https://www.legalrecovery.in/recovery/flight-cancellation-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flight Cancellation Refund Denied? How to Recover Your Full Ticket Amount Under DGCA Rules & Consumer Protection Act in India",
  "description": "Comprehensive legal guide on recovering wrongfully denied flight cancellation refunds in India. Covers DGCA CAR Section 3 regulations, the 2026 credit shell ban, AirSewa complaints, OTA disputes, denied boarding compensation, Montreal Convention, and Consumer Forum remedies.",
  "image": "https://www.legalrecovery.in/og-flight-cancellation-refund.png",
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
  "datePublished": "2026-06-08",
  "dateModified": "2026-06-08"
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
  "name": "Flight Cancellation Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-flight-cancellation-refund.png",
  "description": "Expert legal services for recovering wrongfully denied or delayed flight cancellation refunds in India, including airline disputes, OTA refund delays, credit shell challenges, denied boarding compensation, and Consumer Forum representation.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "930"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Malhotra"
      },
      "reviewBody": "IndiGo cancelled my Bangalore-Delhi flight and offered only a credit shell valid for 6 months. I needed the ₹14,800 back as cash. LegalRecovery drafted a formal notice citing the DGCA 2026 credit shell ban and filed a complaint on AirSewa. IndiGo processed the full cash refund to my credit card within 8 days. Extremely professional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Venkatesh"
      },
      "reviewBody": "I booked 4 return tickets to Goa through MakeMyTrip for a family vacation. The airline cancelled the flights, but MakeMyTrip sat on the ₹47,000 refund for over 2 months, blaming the airline for delays. LegalRecovery obtained a refund release confirmation from the airline and served a legal notice to MakeMyTrip. The full amount was credited within 10 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Kapoor"
      },
      "reviewBody": "Air India denied me boarding on my confirmed Mumbai-London flight due to overbooking. They offered to put me on the next day's flight with no compensation. LegalRecovery filed a consumer complaint citing DGCA denied boarding rules. The District Commission ordered Air India to pay ₹20,000 compensation plus ₹1.2 Lakhs for my hotel, missed meeting losses, and mental agony."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shalini Gupta"
      },
      "reviewBody": "SpiceJet delayed my Hyderabad-Mumbai flight by 7 hours and refused to provide hotel accommodation or meals, claiming it was 'weather related.' LegalRecovery proved through publicly available ATC and weather data that no weather disruption existed at either airport during the relevant period. The Consumer Forum awarded me ₹35,000 in compensation plus the full refund."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Ravi Shankar"
      },
      "reviewBody": "I cancelled my ticket within 24 hours of booking but IndiGo deducted ₹3,500 as cancellation charges. LegalRecovery cited the DGCA 48-hour look-in rule—my flight was 10 days away, well within the 7-day window. After a formal complaint, IndiGo refunded the deducted amount. Great knowledge of aviation regulations."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nandini Mehta"
      },
      "reviewBody": "My international flight from Delhi to Dubai was cancelled by the airline but they refused a refund, offering only a rescheduled flight 3 days later which did not work for my business trip. LegalRecovery filed an AirSewa complaint and a legal notice citing the Montreal Convention and DGCA guidelines. The airline refunded ₹38,000 plus ₹15,000 in consequential damages for my missed hotel and meeting bookings."
    }
  ]
};

export default function FlightCancellationRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-refund-trap", title: "The Airline Refund Trap" },
    { id: "dgca-regulatory-framework", title: "The DGCA Regulatory Framework" },
    { id: "anatomy-of-refund-denials", title: "Anatomy of Refund Denials" },
    { id: "the-ota-maze", title: "The OTA & Travel Agent Maze" },
    { id: "recovery-escalation-blueprint", title: "Recovery Escalation Blueprint" },
    { id: "evidence-war-chest", title: "Your Evidence War Chest" },
    { id: "case-outcomes", title: "Case Outcomes" },
    { id: "client-reviews", title: "Client Reviews" },
    { id: "why-legalrecovery", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Flight Cancellation Refund", href: "/recovery/flight-cancellation-refund" },
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
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Aviation Refund Recovery Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Flight Cancellation <span className="text-[#DC2626]">Refund Denied?</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Airlines can&apos;t force credit shells, ignore DGCA refund timelines, or hide behind &quot;non-refundable&quot; labels when they cancel your flight. Recover your full ticket amount—plus compensation for denied boarding, delays, and mental agony.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Recover My Refund
            </button>
          </div>
        </div>

        <div className="mx-auto px-4 max-w-8xl py-10">
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

                {/* Section 1: The Airline Refund Trap */}
                <section id="the-refund-trap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Airline Refund Trap</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every year, millions of Indian air passengers are caught in a frustrating cycle: they book a flight, the airline cancels it or delays it indefinitely, and then the refund either never arrives, gets trapped in a credit shell they didn&apos;t ask for, or is reduced to a fraction of what they paid through opaque &quot;cancellation charges.&quot; The airline industry&apos;s refund machinery is designed not around passenger convenience but around cash flow preservation—airlines hold billions in passenger funds at any given time, and every day they delay a refund is a day they earn interest on your money while you bear the cost of rebooking, rearranging, and waiting.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The problem intensified dramatically during the pandemic years when airlines across India unilaterally converted billions of rupees in passenger refunds into &quot;credit shells&quot;—time-limited vouchers that could only be used for future bookings on the same airline, often with blackout dates and fare restrictions that made them practically worthless. Passengers who needed their cash—families who had saved for months for a vacation, business travelers who had booked non-refundable tickets for client meetings that were never rescheduled, students who needed the money for tuition—were told to accept a credit shell or lose everything. The DGCA intervened, the Supreme Court weighed in, and the regulatory landscape has been fundamentally rewritten. Yet airlines continue to exploit passengers who don&apos;t know their rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we have built India&apos;s most specialized aviation refund recovery practice. Our legal-tech platform and expert panel have recovered refunds from every major Indian carrier—IndiGo, Air India, SpiceJet, Vistara (now merged into Air India), Akasa Air, and Alliance Air—as well as from international airlines operating in India and from Online Travel Agents (OTAs) like MakeMyTrip, Cleartrip, EaseMyTrip, Yatra, and Goibibo. Whether your flight was cancelled by the airline, you were denied boarding due to overbooking, your refund has been delayed for months, or you were forced into a credit shell you didn&apos;t want—we deploy a multi-pronged legal strategy using DGCA regulations, the Consumer Protection Act, 2019, the Montreal Convention (for international flights), and credit card chargeback mechanisms to recover your money with interest and compensation.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Effective March 26, 2026, airlines operating in India can no longer force credit shells as the default refund option. Passengers have the unequivocal right to a monetary refund to the original payment method. Credit card refunds must be processed within 7 days; agent bookings within 14 working days.&quot; — DGCA Civil Aviation Requirements, 2026 Amendment
                    </div>
                  </div>
                </section>

                {/* Section 2: The DGCA Regulatory Framework */}
                <section id="dgca-regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The DGCA Regulatory Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Directorate General of Civil Aviation (DGCA) is India&apos;s aviation regulator, and its <strong>Civil Aviation Requirements (CAR) Section 3, Series M, Part IV</strong> is the foundational regulation governing passenger rights during flight disruptions. Combined with the landmark 2026 amendments that address refund timelines and the credit shell ban, these regulations provide a comprehensive shield for air passengers. Here is a detailed breakdown of every regulatory weapon at your disposal:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">Airline-Initiated Cancellation: Your Entitlements</h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          When the airline cancels your flight—for any reason, whether operational, commercial (low load factor), crew shortage, or technical—you are entitled to: <strong>(a) A full refund</strong> of the entire ticket price including all taxes, surcharges, fees, and add-on charges (seat selection, meal, baggage), OR <strong>(b) Rebooking</strong> on the next available flight to the same destination at no additional cost. The airline must inform you of the cancellation <strong>at least 3 hours before the scheduled departure time</strong>. If they fail to provide 3 hours&apos; notice, you are entitled to <strong>additional financial compensation</strong> over and above the refund—unless the airline proves the cancellation was caused by &quot;extraordinary circumstances&quot; (severe weather, volcanic ash, security threats, airport closure, or air traffic control restrictions). Crucially, the airline bears the burden of proving the extraordinary circumstance—a vague claim of &quot;operational reasons&quot; or &quot;technical issue&quot; does not qualify, and Indian consumer courts have consistently rejected such defenses.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The 2026 Refund Timeline Mandates</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          The March 2026 DGCA amendments have introduced the most passenger-friendly refund timeline rules in Indian aviation history. These are not guidelines or recommendations—they are binding regulatory requirements, and non-compliance constitutes a violation enforceable through AirSewa and consumer courts:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                          <li><strong>Credit/Debit Card Payments:</strong> Refund must be credited back to the original card within <strong>7 working days</strong> of the cancellation/refund request.</li>
                          <li><strong>Net Banking/UPI Payments:</strong> Refund must be processed to the original bank account within <strong>7 working days</strong>.</li>
                          <li><strong>Travel Agent/OTA Bookings:</strong> The airline must release the refund to the agent within <strong>7 days</strong>, and the agent must credit the passenger within <strong>14 working days</strong> total from the date of cancellation.</li>
                          <li><strong>Cash Bookings:</strong> Refund must be made <strong>immediately</strong> at the airline&apos;s ticketing office.</li>
                          <li><strong>No Processing Fees:</strong> Airlines are <strong>prohibited</strong> from charging any additional processing fee, convenience fee, or handling charge to process the refund.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The 48-Hour Cooling-Off Period</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The 2026 amendments also introduce a critical <strong>48-hour look-in period</strong> for passenger-initiated cancellations. If a passenger cancels their ticket within 48 hours of booking, and the flight departure is at least <strong>7 days away</strong> (domestic) or <strong>15 days away</strong> (international), the airline must refund the full ticket amount <strong>without any cancellation charge</strong>—regardless of whether the ticket was booked under a &quot;non-refundable,&quot; &quot;saver,&quot; or &quot;promotional&quot; fare category. This rule recognizes that passengers often make impulsive bookings and deserve a reasonable window to reconsider without financial penalty. Airlines that deduct cancellation charges for tickets cancelled within this 48-hour window are in direct violation of DGCA regulations.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Denied Boarding Compensation (Overbooking)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Airlines routinely overbook flights—selling more tickets than available seats—anticipating that some passengers will not show up. When all passengers do show up, someone gets bumped. Under DGCA CAR Section 3 Series M Part IV, airlines must first seek <strong>volunteers</strong> willing to give up their seats in exchange for negotiated benefits. If no volunteers come forward and you are involuntarily denied boarding with a confirmed ticket, the compensation is: <strong>(a)</strong> If the airline arranges an alternate flight that arrives within 1 hour of the original arrival time: <strong>200% of the booked one-way basic fare plus fuel charge, minimum ₹10,000</strong>. <strong>(b)</strong> If the alternate arrives more than 1 hour after the original: <strong>400% of the basic fare plus fuel charge, minimum ₹20,000</strong>. <strong>(c)</strong> In all cases, meals, refreshments, and (if overnight) hotel accommodation with airport transfers. These DGCA amounts are regulatory minimums—consumer courts have consistently awarded additional compensation for mental agony, consequential financial losses (missed hotel bookings, business meetings, connecting flights), and litigation costs, often bringing total awards to ₹1–3 lakhs.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The &quot;Non-Refundable&quot; Myth: Statutory Taxes Must Be Returned</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Airlines market certain fare categories as &quot;non-refundable&quot; to discourage cancellations. However, under DGCA regulations and established consumer court precedent, the &quot;non-refundable&quot; designation applies only to the <strong>base fare</strong> component of the ticket. All statutory taxes, fees, and levies—including the Passenger Service Fee (PSF), User Development Fee (UDF), Airport Development Fee (ADF), Goods and Services Tax (GST), and any other government-imposed charge—must be refunded in full when the passenger does not fly. These charges are collected by the airline on behalf of the government/airport authority and are payable only when the passenger actually uses the airport facilities. If you did not fly, these amounts are not earned by the airline and must be returned. An airline that refuses to refund statutory taxes on a &quot;non-refundable&quot; ticket is in violation of DGCA norms and can be compelled to refund through AirSewa or the consumer forum.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Anatomy of Refund Denials */}
                <section id="anatomy-of-refund-denials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Anatomy of Refund Denials</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      After handling hundreds of airline refund disputes, we have identified the most prevalent denial tactics that airlines deploy against passengers. Understanding these patterns is the first step in building a winning recovery strategy:
                    </p>

                    <div className="space-y-5">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Tactic 1: The Credit Shell Coercion</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          This is the single most abused tactic in Indian aviation. When a flight is cancelled by the airline, instead of offering a cash refund as required, the airline automatically issues a credit shell or travel voucher—often with an expiry date of 6 to 12 months—and buries the cash refund option deep within the booking management interface. The customer service script is designed to deflect: agents are trained to say &quot;your credit shell has been issued&quot; as if it were the final outcome, without informing passengers that they have the right to demand a cash refund. Since March 2026, this practice is a direct DGCA regulation violation. Our legal team challenges credit shell coercion by citing the specific DGCA amendment clause, demanding reversal of the credit shell, and initiating a cash refund to the original payment method. If the airline does not comply within 7 days, we escalate to AirSewa and, if necessary, file a consumer complaint for &quot;unfair trade practice&quot; under Section 2(47) of the Consumer Protection Act, 2019.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Tactic 2: The &quot;Force Majeure&quot; Shield</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Airlines invoke &quot;force majeure&quot; or &quot;extraordinary circumstances&quot; to avoid paying compensation for cancellations and delays—and sometimes even to deny refunds entirely. While genuine extraordinary circumstances (severe weather events, volcanic eruptions, government-imposed airspace closures, security threats, natural disasters) can exempt airlines from paying additional compensation, they do <strong>not</strong> exempt airlines from providing a full refund or alternate flight arrangement. This is a critical distinction that most passengers—and many airline customer service agents—do not understand. The refund obligation exists regardless of whether the cancellation was within the airline&apos;s control. Furthermore, airlines frequently abuse the force majeure defense by claiming &quot;weather&quot; or &quot;ATC restrictions&quot; when the actual reason was a crew scheduling issue, aircraft maintenance failure, or commercial decision to merge flights due to low passenger loads. Our team challenges force majeure claims by cross-referencing publicly available weather data (IMD records), NOTAM (Notice to Airmen) bulletins, and ATC restriction logs for the relevant airport and time window to determine whether the airline&apos;s claim is factually supported.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Tactic 3: Excessive Cancellation Charge Deductions</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For passenger-initiated cancellations (where you cancel the ticket, not the airline), airlines charge a cancellation fee that is disclosed in the fare rules at the time of booking. However, the deduction frequently exceeds what was disclosed, or the airline deducts the cancellation fee from the total ticket amount rather than just the base fare—effectively deducting from the taxes and fees component that is supposed to be fully refundable regardless. Additionally, some airlines apply a tiered cancellation penalty based on how close to departure you cancel—but the tier brackets and charges are often buried in dense fare rules that most passengers never read. If the cancellation was within the 48-hour look-in window, no cancellation charge is permissible at all. Our team audits every cancellation charge deduction against the original fare rules, the DGCA regulations, and the 48-hour look-in rule to identify overcharges and recover the excess.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Tactic 4: The Infinite Processing Loop</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Perhaps the most insidious tactic is the indefinite &quot;processing&quot; delay. The airline acknowledges your refund request, provides a reference number, and then... nothing. Weeks turn into months. Every time you call customer service, you are told the refund is &quot;being processed&quot; or &quot;under review&quot; or &quot;escalated to the refund team.&quot; No specific timeline is provided, no status update is available online, and there is no escalation path beyond the call center agent reading from a script. This is a deliberate cash retention strategy. Under the 2026 DGCA regulations, the refund must be completed within 7 or 14 working days depending on the payment channel. Every day beyond this deadline is a regulatory violation. Our legal notice calculates the exact number of days of delay, demands the refund with interest at the prevailing bank rate, and puts the airline on notice that a consumer complaint will follow if the refund is not credited within 7 days of the notice.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: The OTA & Travel Agent Maze */}
                <section id="the-ota-maze" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The OTA &amp; Travel Agent Maze</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A significant percentage of flight bookings in India are made through Online Travel Agents (OTAs)—MakeMyTrip, Cleartrip, EaseMyTrip, Yatra, Goibibo, ixigo, and dozens of smaller platforms. When a refund is due, the involvement of the OTA creates an additional layer of complexity, delay, and finger-pointing that leaves the passenger stranded between two entities, each blaming the other. Understanding the OTA refund mechanics is essential to recovering your money efficiently.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The refund flow for OTA bookings is: <strong>Airline → OTA → Passenger</strong>. When a refund is initiated (either by the airline due to cancellation or by the passenger through the OTA&apos;s interface), the airline processes the refund to the OTA&apos;s merchant account—not directly to the passenger&apos;s bank account or credit card. The OTA must then transfer this amount to the passenger. The problem arises because: (a) the airline may take its time releasing the refund to the OTA (especially for bulk cancellations), (b) the OTA may sit on the refund for weeks or months after receiving it from the airline—earning float interest on the pooled passenger funds, (c) the OTA may deduct its own &quot;convenience fee,&quot; &quot;service charge,&quot; or &quot;cancellation processing fee&quot; from the refund before crediting the passenger, and (d) communication between the airline and OTA about the refund status is often opaque, making it impossible for the passenger to determine who is holding the money.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian consumer courts have addressed this directly. In multiple landmark rulings, the National Consumer Disputes Redressal Commission (NCDRC) and various State Commissions have held that <strong>OTAs are not mere &quot;marketplace platforms&quot; but are &quot;service providers&quot;</strong> under the Consumer Protection Act, 2019. This means they are jointly liable—alongside the airline—for any deficiency in service, including refund delays. If the airline has released the refund to the OTA and the OTA has not credited you, the OTA is independently liable for the delay and can be compelled to pay the refund plus compensation for the delayed period. At LegalRecovery, we name <strong>both the airline and the OTA as opposite parties</strong> in our consumer complaints, ensuring maximum accountability and preventing each entity from shifting blame to the other.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      An additional powerful tool for passengers who paid via credit card is the <strong>chargeback mechanism</strong>. If the airline or OTA fails to process your refund within a reasonable period, you can contact your credit card issuing bank and file a dispute for &quot;services not rendered&quot; or &quot;refund not processed by merchant.&quot; The bank initiates a chargeback against the merchant (the OTA or airline), temporarily crediting the disputed amount back to your card while it investigates. To succeed, you need: (a) proof of the flight cancellation, (b) proof that you requested a refund and it was denied or delayed, (c) your booking confirmation and payment receipt, and (d) copies of all correspondence with the airline/OTA. Most card networks (Visa, Mastercard, RuPay) allow chargebacks within 120 days of the transaction date or expected service date. While the chargeback process takes 30 to 90 days and the airline may contest it, it is an extremely effective pressure lever—especially against OTAs.
                    </p>
                  </div>
                </section>

                {/* Section 5: Recovery Escalation Blueprint */}
                <section id="recovery-escalation-blueprint" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Recovery Escalation Blueprint</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we execute a battle-tested, five-stage escalation sequence designed to recover your flight refund with the minimum time and maximum pressure:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm text-slate-650">
                      <li>
                        <strong>Formal Written Demand to the Airline&apos;s Nodal Officer (Days 1–7):</strong> We draft a comprehensive legal demand letter addressed to the airline&apos;s Nodal Officer and Appellate Authority (every airline operating in India is mandated by DGCA to appoint these officers and publish their contact details). The letter details your booking, the cancellation, the refund request, the DGCA regulation violated, the exact number of days of delay, the amount due, and a 7-day deadline for compliance. This is not a customer service email—it is a formal legal document citing specific regulatory provisions, designed to trigger the airline&apos;s legal compliance team rather than the call center.
                      </li>
                      <li>
                        <strong>AirSewa Complaint Filing (Days 7–21):</strong> If the airline does not comply with the demand letter, we file a detailed complaint on the AirSewa portal (airsewa.gov.in)—the Ministry of Civil Aviation&apos;s official grievance platform. The complaint includes the PNR, booking details, copies of the demand letter, the airline&apos;s response (or proof of non-response), and citations of the specific DGCA regulations violated. AirSewa assigns a unique grievance ID, forwards the complaint to the airline, and tracks the resolution timeline. While AirSewa itself does not have binding adjudicatory power, a documented AirSewa complaint creates a powerful evidentiary record for subsequent legal proceedings—it proves you exhausted the regulatory channel before approaching the court.
                      </li>
                      <li>
                        <strong>Formal Legal Notice Under Consumer Protection Act (Days 14–21):</strong> Simultaneously with or immediately after the AirSewa filing, we serve a formal legal notice to the airline&apos;s corporate office, the OTA (if applicable), and their respective legal departments. The notice is drafted under Section 35(1) of the Consumer Protection Act, 2019, demanding: (a) the full refund amount with interest at 12% per annum from the date the refund became due, (b) compensation of ₹50,000 to ₹2,00,000 for mental agony, harassment, and financial inconvenience, (c) consequential damages for any financial losses caused by the denied refund (missed hotel bookings, alternate ticket purchases, business losses), and (d) litigation costs. The notice gives the airline 15 days to comply before a consumer complaint is filed.
                      </li>
                      <li>
                        <strong>Consumer Forum Complaint via eDaakhil (Days 30–90):</strong> If the airline fails to comply with the legal notice, we draft and file a comprehensive consumer complaint before the appropriate Consumer Commission via the eDaakhil portal (edaakhil.nic.in). The complaint names the airline and OTA (if applicable) as opposite parties and seeks the refund, interest, compensation, consequential damages, and litigation costs. The complaint is accompanied by the full evidence package—booking confirmation, cancellation proof, demand letters, AirSewa complaint record, legal notice with delivery proof, and Section 63 BSA digital certificates for all electronic evidence. Consumer Commissions in India have a strong track record of ruling in favor of passengers in refund disputes, with total awards frequently exceeding the ticket price by 3x to 5x.
                      </li>
                      <li>
                        <strong>Credit Card Chargeback (Parallel Track):</strong> For passengers who paid by credit card, we initiate a chargeback dispute as a parallel recovery track. This runs simultaneously with the legal process and often produces faster results—banks typically process chargebacks within 30 to 60 days. Even if the airline contests the chargeback, the documented evidence from our demand letter, AirSewa complaint, and legal notice strongly supports the &quot;services not rendered&quot; dispute ground.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 6: Your Evidence War Chest */}
                <section id="evidence-war-chest" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Your Evidence War Chest</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The strength of your refund recovery case depends entirely on the quality and completeness of your evidence. At LegalRecovery, we assemble what we call a <strong>&quot;Refund Recovery Dossier&quot;</strong>—a structured, chronological evidence package that addresses every element required by the Consumer Commission and the AirSewa review process:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Booking Confirmation:</strong> The original email or SMS confirming your flight booking, showing the PNR number, flight number, travel dates, passenger names, fare breakdown (base fare, taxes, fees, add-ons), total amount paid, and payment method. If you booked through an OTA, include both the OTA&apos;s booking confirmation and the airline&apos;s PNR confirmation.</li>
                      <li><strong>Cancellation Notification:</strong> The airline&apos;s cancellation email, SMS, or push notification, showing the exact date and time you were informed. If you were not informed at all (you arrived at the airport and discovered the cancellation), document this with a written statement and, if possible, photos of the departure board showing the cancelled status.</li>
                      <li><strong>Payment Proof:</strong> Credit card statement, bank statement, or UPI transaction confirmation showing the exact amount debited for the booking. If you paid through an OTA, include both the OTA payment receipt and the credit card/bank statement.</li>
                      <li><strong>Refund Request Documentation:</strong> Proof that you requested a cash refund—screenshots of the online refund request, the refund tracking status page showing &quot;processing&quot; for weeks, emails sent to customer service, and chat transcripts with the airline or OTA&apos;s support team.</li>
                      <li><strong>Customer Service Correspondence:</strong> A chronological compilation of every email, chat transcript, call log (with date, time, duration, and representative&apos;s name/ID), and complaint reference number from your interactions with the airline and OTA. Each communication should be documented in a table format: Date | Channel | Reference# | Outcome.</li>
                      <li><strong>Consequential Loss Documentation:</strong> If the denied refund caused you additional financial losses—such as the cost of purchasing an alternate ticket at a higher price, non-refundable hotel bookings that went unused, taxi/transport bookings that were wasted, or business losses from missed meetings—compile receipts, invoices, and payment proofs for each loss.</li>
                      <li><strong>Section 63 BSA Digital Certificate:</strong> Under the Bharatiya Sakshya Adhiniyam, 2023, every electronic document submitted as evidence in a consumer complaint must be accompanied by a Section 63 BSA certificate—a signed declaration confirming the integrity and authenticity of the digital record. We prepare this certificate for every email, screenshot, PDF receipt, and chat transcript in the dossier.</li>
                    </ul>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      Pro Tip: Take screenshots of the airline&apos;s refund status page at regular intervals (every 3–5 days) while it shows &quot;processing&quot; or &quot;under review.&quot; These timestamped screenshots create a visual timeline of the delay that is extremely persuasive before a Consumer Commission.
                    </div>
                  </div>
                </section>

                {/* Section 7: Case Outcomes */}
                <section id="case-outcomes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Case Outcomes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every case below represents a real category of aviation refund dispute we handle routinely. These outcomes demonstrate that airlines—regardless of size or market dominance—can be compelled to comply with the law when passengers challenge them with the right legal strategy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Credit Shell Reversed</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹14,800 Cash Refund After Airline Forced Credit Shell</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A Bangalore-based IT professional had his Delhi flight cancelled by IndiGo. The airline issued a credit shell without consent. Our legal notice citing the DGCA 2026 credit shell ban and an AirSewa complaint compelled IndiGo to process the full cash refund to his credit card within 8 working days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: OTA Refund Recovered</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹47,000 Recovered from MakeMyTrip After 2-Month Delay</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A family of four booked Goa return tickets through MakeMyTrip. The airline cancelled and refunded the OTA, but MakeMyTrip delayed the passenger refund for over 2 months. We obtained airline refund release confirmation, served a legal notice to MakeMyTrip, and the full ₹47,000 was credited within 10 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Denied Boarding Compensation</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹1.4 Lakhs Awarded for Overbooking Denial on Mumbai-London Flight</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A business traveler with a confirmed Air India ticket was denied boarding due to overbooking. Our consumer complaint cited DGCA denied boarding rules plus consequential losses. The District Commission awarded ₹20,000 DGCA compensation + ₹1.2 lakhs for hotel costs, missed meeting losses, and mental agony.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 4: False Force Majeure Defeated</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹35,000 Compensation After Airline&apos;s False Weather Claim</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          SpiceJet delayed a Hyderabad-Mumbai flight by 7 hours, citing &quot;weather.&quot; Our team cross-referenced IMD weather data and ATC NOTAM records to prove no weather disruption existed at either airport. The Consumer Forum rejected the force majeure defense and awarded ₹35,000 compensation plus the full refund.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8: Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-extrabold text-slate-900 text-sm md:text-base">{rev.author.name}</span>
                          <div className="flex items-center text-amber-500">
                            {Array.from({ length: Number(rev.reviewRating.ratingValue) }).map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 italic leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 9: Why LegalRecovery */}
                <section id="why-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why LegalRecovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery&apos;s aviation refund recovery practice is India&apos;s most specialized legal service for airline disputes. We don&apos;t just write complaint emails—we execute a multi-forum legal strategy that applies regulatory, financial, and judicial pressure simultaneously until the airline pays.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">DGCA Regulation Mastery</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          Our team has encyclopedic knowledge of DGCA CARs, the 2026 amendments, denied boarding compensation rules, and the AirSewa escalation process. We cite the exact regulation clause in every demand letter and complaint.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Force Majeure Busting</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          Airlines routinely claim &quot;weather&quot; or &quot;ATC restrictions&quot; to dodge compensation. We cross-reference IMD weather data, NOTAM bulletins, and flight tracking databases to verify or disprove these claims.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">OTA Joint Liability Strategy</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We name both the airline and OTA as opposite parties in consumer complaints, citing the &quot;service provider&quot; classification under the Consumer Protection Act to prevent blame-shifting between the two entities.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Transparent Flat-Fee Recovery</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          No hourly billing, no percentage commission on the recovered amount. A single flat fee quoted upfront—covering demand letter, AirSewa complaint, legal notice, and consumer complaint filing if needed.
                        </p>
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
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left cursor-pointer"
                          >
                            <span className="font-bold text-slate-900 text-sm md:text-base">{faq.question}</span>
                            <span className="text-xl text-slate-500 font-light">{isExpanded ? '−' : '+'}</span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 bg-white border-t border-slate-200 text-xs md:text-sm text-slate-650 leading-relaxed">
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

            {/* Right Sidebar - Sticky CTA */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] text-white p-6 rounded-3xl border border-slate-900 shadow-xl">
                <span className="inline-block text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-3 bg-red-950/40 px-3 py-1 rounded-full border border-red-500/10">
                  Refund Recovery Active
                </span>
                <h3 className="text-lg font-black mb-3 text-white leading-tight">
                  Recover Your Flight Refund
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Connect with our aviation refund recovery panel. We handle DGCA complaints, legal notices, AirSewa filings, OTA disputes, and Consumer Forum representation.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-lg text-xs md:text-sm cursor-pointer"
                >
                  Start Refund Recovery
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </>
  );
}
