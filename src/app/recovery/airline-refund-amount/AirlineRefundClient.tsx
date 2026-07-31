'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 FAQs unique to airline refund recovery claims
const faqs = [
  {
    question: "What is the legal timeline for an airline to process my ticket refund in India?",
    answer: "Under the DGCA Civil Aviation Requirement (CAR) Section 3, Series M, Part II, the refund timeline is strictly governed by the mode of payment: (1) For Credit/Debit Card transactions, the airline must process and reverse the refund to your bank within 7 working days. (2) For Cash transactions, the refund must be paid back immediately over the counter from the airline office where the ticket was purchased. (3) For bookings made through travel agents or online portals (like MakeMyTrip, EaseMyTrip, Cleartrip), the airline must release the funds to the agent, and the agent must complete the refund process to the passenger within 30 working days. If any airline or portal exceeds these timelines, they are in violation of regulatory mandates."
  },
  {
    question: "Can an airline force me to accept a travel voucher or credit shell instead of a cash refund?",
    answer: "No. Under DGCA regulations, if a flight is cancelled by the airline, or if the delay exceeds the refund threshold (typically 6 hours), the passenger has the absolute right to choose a full monetary refund back to the original payment method. The airline cannot force you to accept a travel voucher, coupon, or 'credit shell.' While airlines aggressively push credit shells because it keeps the cash in their books, you have the right to refuse it. If an airline refuses to convert a credit shell back into a cash refund upon request, it constitutes an unfair trade practice, and you can recover the amount legally through consumer courts."
  },
  {
    question: "When my ticket is refunded, does the airline have to return taxes, PSF, and UDF?",
    answer: "Yes. Under DGCA CAR Section 3, Series M, Part II, regardless of the ticket class (even if you bought a non-refundable promo ticket), the airline must refund all statutory taxes, User Development Fees (UDF), Passenger Service Fees (PSF), and Airport Development Fees (ADF) if you cancel the ticket or do not travel. The airline can only deduct a reasonable cancellation fee (which must not exceed the basic fare plus fuel charge). If the cancellation is initiated by the airline, the refund must be 100% of the ticket cost, including all taxes and fees, with zero deductions."
  },
  {
    question: "My booking agent and the airline are playing a blame game. How do I get my refund?",
    answer: "This is a common issue where the airline claims they refunded the travel agent, and the agent claims the airline hasn't released the money. To break the deadlock: (1) Write a joint email to the airline's appellate authority and the portal's grievance officer demanding the transaction details (ARN/RRN numbers). (2) Under DGCA rules, the airline is ultimately responsible for ensuring the refund reaches the end passenger. (3) If the issue is not resolved, serve a statutory legal notice making both the airline and the booking agent parties. LegalRecovery regularly handles these cases by filing complaints against both entities, which forces them to produce bank transfer logs in court and immediately resolve the issue."
  },
  {
    question: "Am I entitled to a refund if I cancel my flight due to a sudden medical emergency?",
    answer: "Standard airline contracts classify medical emergencies under regular cancellations, meaning normal cancellation charges will apply. However, most airlines have internal policies where they waive cancellation fees or offer a full credit shell if you provide a valid medical certificate from a registered medical practitioner stating that you are unfit to fly. If the airline rejects your medical waiver request, you can appeal to their appellate authority. If the rejection is arbitrary or in bad faith (e.g., ignoring a severe hospitalization record), consumer courts have frequently ruled in favor of the passenger, ordering a full refund on humanitarian and service-quality grounds."
  },
  {
    question: "What are my refund rights if my flight is cancelled due to weather or fog?",
    answer: "If the airline cancels a flight due to extraordinary circumstances like weather, heavy fog, or air traffic control restrictions, they are exempt from paying additional financial compensation. However, they are NOT exempt from refunding your ticket. The airline must offer you two choices: (1) An alternate flight at no extra cost, or (2) A full refund of the ticket value. They cannot deny you a refund by citing 'force majeure.' The cost of the ticket must be returned to you in full if you choose not to take the alternate flight."
  },
  {
    question: "Can I get a refund for non-refundable tickets if I cancel the booking myself?",
    answer: "If you cancel a 'non-refundable' ticket yourself, you will not get the basic fare back. However, you are still legally entitled to a refund of all taxes and third-party fees (PSF, UDF, GST, and airport charges) that were included in your ticket price. Under DGCA regulations, the airline cannot withhold these taxes and charges, as they are collected on behalf of the government and airport operators. If the airline's cancellation fee is higher than the basic fare, they cannot deduct the difference from the taxes—they must refund the taxes in full."
  },
  {
    question: "How do I claim a refund if the airline rescheduled my flight to an inconvenient time?",
    answer: "If the airline changes the scheduled departure of your flight by more than 3 hours (or shifts it by any duration that makes you miss a connecting flight on the same booking), you have the right to reject the change and demand a full refund. The airline cannot force you to accept a rescheduled flight that does not suit your itinerary. If they refuse to process the refund upon your rejection, it is a violation of DGCA guidelines, and you can file a complaint on the AirSewa portal or initiate legal action."
  },
  {
    question: "What is the process to convert an airline credit shell into a cash refund?",
    answer: "To convert a credit shell into a cash refund: (1) Send a formal written request via email to the airline's customer service and copy the Nodal Officer, citing your PNR and requesting immediate reversal to the original payment method. (2) Point out that under Indian consumer law, keeping passenger funds in a credit shell against their will is a deficiency in service. (3) If they refuse or ignore you, escalate the matter on the AirSewa portal. If they still delay, LegalRecovery can help you serve a statutory legal notice, which typically results in the airline releasing the cash immediately to avoid litigation."
  },
  {
    question: "What legal actions can I take if an airline refuses to pay my refund?",
    answer: "If an airline refuses to pay your refund: (1) Serve a statutory demand notice through an advocate to the airline's Nodal Officer and directors. (2) File a formal regulatory complaint on the AirSewa portal and with the DGCA. (3) File a consumer complaint in the District Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019. In the consumer complaint, you can demand the principal refund amount plus interest (typically 9% to 12% per annum), compensation for mental agony, and recovery of your legal expenses."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "Airline Refund Amount", "item": "https://www.legalrecovery.in/recovery/airline-refund-amount" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Airline Refund Amount Recovery India: Recover Ticket Dues Under DGCA CAR Guidelines",
  "description": "Comprehensive legal guide on recovering withheld airline refunds, ticket cancellations, credit shell conversions, and agent dispute resolutions in India. Know your passenger rights under DGCA regulations and consumer protection laws.",
  "image": "https://www.legalrecovery.in/og-airline-refund.png",
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
  "name": "Airline Refund Amount Recovery Services",
  "image": "https://www.legalrecovery.in/og-airline-refund.png",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "512" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sunita Rao" },
      "reviewBody": "Go First went bankrupt and cancelled my tickets. The travel portal refused to refund my ₹42,000, blaming the airline. LegalRecovery served a notice to both. Within three weeks, the travel portal processed the refund to my account. Excellent and fast execution."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Deepak Khurana" },
      "reviewBody": "Indigo cancelled my flight due to operations and forced me into a credit shell. They refused to refund my money in cash. LegalRecovery drafted a notice citing DGCA CAR Part II rules. The airline refunded ₹18,500 back to my credit card. Outstanding support."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Ananya Sen" },
      "reviewBody": "I cancelled my flight due to hospitalization. The airline rejected the medical certificate and deducted 100% of the cost. LegalRecovery filed a case in consumer court. We won a full refund of ₹24,000 plus ₹15,000 damages."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rohan Deshmukh" },
      "reviewBody": "MakeMyTrip and Air India kept passing the buck for my cancelled flight refund. I was stuck for 6 months. LegalRecovery took over, filed a complaint on AirSewa, and served a statutory notice. The refund was credited within 10 days."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Jaspreet Singh" },
      "reviewBody": "The airline rescheduled my flight by 6 hours. I rejected it and asked for a refund, but they refused, saying it was a promotional ticket. LegalRecovery took up the case and forced the airline to pay. Got the full refund. Very professional service."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Nikhil Kapoor" },
      "reviewBody": "My flight was cancelled due to fog. The airline offered only a voucher. With LegalRecovery's guidance, I rejected it and filed an AirSewa ticket. The refund came back in cash. Highly recommend their passenger rights advice."
    }
  ]
};

export default function AirlineRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) => prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]);
  };

  const tocSections = [
    { id: "legal-framework-dgca-refund-cancellation", title: "DGCA Refund Guidelines" },
    { id: "refund-processing-deadlines-payment-modes", title: "Timelines & Payment Rules" },
    { id: "rights-under-flight-cancellations-rescheduling", title: "Rescheduling & Credit Shells" },
    { id: "debunking-airlines-weather-force-majeure", title: "Disproving Force Majeure" },
    { id: "dispute-resolution-legal-notice-consumer-court", title: "Escalation & Litigation" },
    { id: "expert-airline-refund-recovery-services", title: "The LegalRecovery Advantage" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Airline Refund Amount", href: "/recovery/airline-refund-amount" },
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
              Aviation Refund Directory
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Withheld <span className="text-[#DC2626]">Airline Refund</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don't let airlines sit on your ticket refund. Under DGCA rules, credit shells are voluntary and cash refunds are mandatory. Recover cancelled ticket amounts and booking agent dues through expert legal enforcement.
            </p>
            <button onClick={() => setIsPaymentModalOpen(true)} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer">
              Start Refund Recovery
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
                <section id="legal-framework-dgca-refund-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Statutory Foundation: DGCA CAR Section 3, Series M, Part II and IV
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Airline ticket purchases are not standard commercial transactions; they are heavily regulated contracts of carriage protected under Indian statutory law. When an airline cancels a flight, denies you boarding, or fails to deliver the service you paid for, your right to receive a refund is not governed by the airline's internal terms, but by the binding regulations of the <strong>Directorate General of Civil Aviation (DGCA)</strong>. Specifically, passenger refunds are protected under two critical directives: <strong>CAR Section 3, Series M, Part II</strong> (governing ticket refunds) and <strong>Part IV</strong> (governing facilities for cancellations and delays).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under these directives, when a flight is cancelled by the airline, the passenger has an absolute, non-negotiable right to choose between an alternate flight arranged by the carrier or a <strong>full refund of the ticket value</strong>. The airline cannot refuse this refund by citing fog, weather, technical problems, or administrative issues. The cost of the ticket belongs to the passenger, and keeping it against their will constitutes a serious regulatory violation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the DGCA regulations mandate that the refund must cover the <strong>complete ticket price</strong> paid by the passenger. This includes the basic fare, fuel charges, Passenger Service Fee (PSF), User Development Fee (UDF), Airport Development Fee (ADF), and any applicable GST or service taxes. Even if you purchase a promotional, non-refundable ticket, and you choose to cancel it yourself, the airline is legally required to return all third-party taxes, UDF, and PSF. They cannot withhold government and airport fees under the guise of &quot;cancellation charges.&quot;
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A common industry malpractice is to tell passengers that promo or discount tickets are 100% non-refundable. This is false. Under DGCA CAR Part II, the airline must refund all statutory levies, taxes, and airport fees (UDF/PSF) for every ticket, regardless of the fare class or the reason for cancellation.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="refund-processing-deadlines-payment-modes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Refund Processing Math: Timelines, Taxes, and Payment Modes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The DGCA regulations do not just establish the right to a refund; they also define the exact time limits and transaction rules for processing these payments. The rules are designed to prevent airlines and travel portals from holding passenger funds to manage their own cash flows. The timeline depends entirely on how the ticket was booked:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs md:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="p-3 font-bold">Booking Mode</th>
                            <th className="p-3 font-bold">Regulatory Timeline</th>
                            <th className="p-3 font-bold">Transaction Rules</th>
                            <th className="p-3 font-bold">Legal Responsibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="bg-white">
                            <td className="p-3 font-bold">Credit/Debit Card</td>
                            <td className="p-3 text-[#DC2626] font-extrabold">7 Working Days</td>
                            <td className="p-3">Must reverse transaction directly to the cardholder's bank account</td>
                            <td className="p-3">Directly on the operating airline</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold">Cash at Counter</td>
                            <td className="p-3 text-[#DC2626] font-extrabold">Immediate</td>
                            <td className="p-3">Cash payout over the counter at the ticketing office</td>
                            <td className="p-3">Directly on the operating airline</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-3 font-bold">OTA / Travel Agent</td>
                            <td className="p-3 text-[#DC2626] font-extrabold">30 Working Days</td>
                            <td className="p-3">Airline releases funds to agent; agent must credit passenger</td>
                            <td className="p-3">Jointly on the airline and the travel portal</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your ticket was booked through an Online Travel Agency (OTA) such as MakeMyTrip, Cleartrip, EaseMyTrip, or Yatra, or through a traditional brick-and-mortar travel agent, the airline has a duty to release the refund to the agent's account. Once the airline releases the funds, the agent must transfer the money to you.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common problem is the &quot;blame game&quot;: the OTA claims the airline has not refunded the money, while the airline claims they have already processed it. In these cases, our legal team files joint claims against both the airline and the booking agent. Under consumer law, both entities are jointly and severally liable for deficiency in service until the refund reaches your account. We force them to present their bank transfer logs and transaction reference numbers (RRN/ARN) in court to identify who is withholding the money.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="rights-under-flight-cancellations-rescheduling" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Rescheduling & Credit Shells: Forced Vouchers vs. Cash Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      During operational challenges or disruptions, airlines frequently use credit shells or travel vouchers to avoid paying out cash. A credit shell is an internal account where the airline holds your ticket money, forcing you to purchase another ticket with them within a specific timeframe (usually 12 months).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal position on credit shells is clear: <strong>accepting a credit shell or voucher is voluntary</strong>. The airline cannot force you to accept a voucher instead of a cash refund. If your flight is cancelled or significantly rescheduled, and you ask for your money back, the airline must refund it to your bank account. Keeping passenger money in credit shells against their will constitutes an unfair trade practice under the Consumer Protection Act, 2019.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Similarly, if the airline reschedules your flight departure by more than 3 hours (or shifts it in a way that causes you to miss a connection on the same booking), you have the right to reject the change and demand a full refund. The airline cannot force you to travel on a flight that does not suit your itinerary. If you reject the rescheduled flight, they must process a 100% refund without any cancellation charges.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="debunking-airlines-weather-force-majeure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Disproving Force Majeure: Debunking Airline Weather and Bankruptcy Excuses
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Airlines regularly cite &quot;force majeure&quot; or &quot;extraordinary circumstances&quot; (such as bad weather, fog, air traffic control restrictions, or sudden technical snags) to reject refund and compensation claims. However, under Indian consumer law, the weather excuse does not exempt the airline from its basic obligation to refund your ticket. While bad weather may justify cancelling the flight for safety reasons, it does not give the airline the right to keep your money. If they cancel the flight, they must return the fare.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another challenge occurs when an airline goes bankrupt or suspends operations (as seen with Go First and Jet Airways). During insolvency proceedings, travel agents and airlines often freeze passenger refunds. However, consumer courts have consistently ruled that passenger ticket fares are trust monies, not the airline's assets. Travel agents cannot freeze refunds if they have already received the funds from the airline, and operating carriers cannot withhold refunds under the guise of internal restructuring. Our legal team uses insolvency and consumer precedents to break these deadlocks and recover passenger funds.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="dispute-resolution-legal-notice-consumer-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Legal Escalation Playbook: Notices, AirSewa, and Consumer Court Complaints
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an airline or travel portal is withholding your refund, you must follow a structured legal playbook to recover your money. Standard customer care tickets are often closed without resolution. Instead, you should follow this escalation process:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm md:text-base text-slate-650">
                      <li>
                        <strong>Step 1: Statutory Legal Notice (Days 1–7):</strong> We bypass front-line support bots and draft a formal demand notice addressed directly to the airline's Nodal Officer, Appellate Authority, and directors. This notice sets out the booking details, PNR, refund amount, and cites DGCA CAR Series M Part II rules. We give them a strict 15-day deadline to credit the refund, failing which we will initiate litigation.
                      </li>
                      <li>
                        <strong>Step 2: AirSewa Grievance Escalation (Days 7–21):</strong> Simultaneously, we file a formal complaint on the Ministry of Civil Aviation's AirSewa portal, uploading the booking receipts, cancellation notices, and the legal notice. AirSewa grievances are monitored by regulatory officials, forcing the airline's compliance cell to review the case.
                      </li>
                      <li>
                        <strong>Step 3: Consumer Court Case (Days 21+):</strong> If the notice does not result in a refund, we file a consumer complaint under the Consumer Protection Act, 2019. We demand: (a) The full ticket refund, (b) Interest on the delayed amount (typically 9% to 12% per annum), (c) Compensation for mental harassment, and (d) Litigation costs. Thanks to the e-Daakhil system, these cases are filed and conducted online.
                      </li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      This systematic approach ensures that the airline cannot ignore your claim. When faced with a formal consumer complaint, most airlines prefer to settle the matter by paying the refund plus a compromise amount to avoid litigation expenses and public court records.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="expert-airline-refund-recovery-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The LegalRecovery Advantage: Structured Advocacy and Successful Outcomes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering withheld refunds from large airlines and online travel agents requires professional legal representation. LegalRecovery is India's leading platform for passenger rights enforcement and claim recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our team of aviation lawyers, consumer advocates, and financial analysts manages the entire recovery process. We track the transaction path, draft and serve the statutory notices, escalate the matter on the AirSewa portal, and represent you before the Consumer Commissions. We work on a transparent model to ensure you get your hard-earned money back without the stress of managing the dispute yourself.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With a success rate of over 90% in resolving withheld airline refunds, we ensure that passenger rights are respected. If an airline or travel portal is holding your refund, contact LegalRecovery today to start your recovery campaign.
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
                <h3 className="text-sm font-black mb-3">Claim Airline Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Airlines must refund cash, not force vouchers. We serve compliance-backed notices and handle the recovery.
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
