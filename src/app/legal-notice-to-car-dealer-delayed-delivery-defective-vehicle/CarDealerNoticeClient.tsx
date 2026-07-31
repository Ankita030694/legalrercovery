'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a car dealer legally forfeit my booking advance if they delay the delivery?",
    answer: "No. If the dealership fails to deliver the vehicle within the promised timeframe documented on the booking receipt, it constitutes a 'deficiency of service' under the Consumer Protection Act. They cannot invoke arbitrary cancellation fee clauses to retain your booking advance when they are the party in default."
  },
  {
    question: "What exactly qualifies as a 'Lemon Car' under Indian law?",
    answer: "While India lacks a specific 'Lemon Law' like the United States, consumer courts define a 'lemon' as a brand new vehicle possessing a severe, inherent manufacturing defect that substantially impairs its use, value, or safety, and which cannot be permanently repaired despite multiple attempts by the authorized service center."
  },
  {
    question: "Who is liable for a manufacturing defect: the local dealership or the car manufacturer?",
    answer: "Both are held jointly and severally liable. The dealership is the direct point of sale providing the deficient service, and the manufacturer is liable for producing the defective good. A proper legal notice must always be addressed to both the dealership management and the corporate headquarters of the manufacturer."
  },
  {
    question: "How many times should I let the service center try to fix a defective new car before sending a notice?",
    answer: "There is no rigid statutory number, but generally, if a critical defect (like engine failure, transmission issues, or electrical stalling) persists after three documented repair attempts within the first few months of ownership, you should escalate immediately via a legal notice demanding replacement."
  },
  {
    question: "Can I demand a completely new replacement vehicle instead of continuous repairs?",
    answer: "Yes. If an independent expert or the repeated job cards prove that the vehicle suffers from a fundamental manufacturing defect that cannot be rectified, you can legally demand a completely new, defect-free replacement vehicle of the same make and model, or a full refund with interest."
  },
  {
    question: "What should I do if the dealer forces me to buy accessories to get early delivery?",
    answer: "Tying the sale of a vehicle to the mandatory purchase of accessories or insurance from the dealership is an 'Unfair Trade Practice' and a 'Restrictive Trade Practice' under the Consumer Protection Act. You can send a legal notice demanding the removal of these forced charges."
  },
  {
    question: "Do I need to hire an automotive expert to prove a manufacturing defect in court?",
    answer: "It is highly recommended. Courts rely heavily on empirical evidence. An inspection report from an independent, certified automotive engineer confirming the manufacturing defect carries significantly more weight than a consumer personal complaints about the vehicle performance."
  }
];

const reviews = [
  {
    author: "Rahul S.",
    rating: "5",
    text: "I booked a popular SUV and waited eight months. The dealer kept shifting the delivery date and refused to refund my one lakh booking amount, citing cancellation charges. I used this guide to send a legal notice to the dealer and the manufacturer. I received my full refund with interest within a week."
  },
  {
    author: "Sneha P.",
    rating: "5",
    text: "My brand new hatchback broke down three times in the first month due to a faulty gearbox. The service center just kept patching it up. Following the checklist here, I gathered all job cards and sent a strong legal notice demanding a replacement. The company finally agreed to replace the entire transmission assembly and gave an extended warranty."
  },
  {
    author: "Vikram A.",
    rating: "5",
    text: "Dealing with a lemon car is an absolute nightmare. The dealership blamed my driving style for an obvious engine defect. Sending a formal legal notice drafted by an advocate changed their entire tone. They realized I was preparing for consumer court and finally took the car back for a full refund."
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
      "name": "Notice to Car Dealer for Defective Vehicle",
      "item": "https://www.legalrecovery.in/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Car Dealer for Delayed Delivery & Defective Vehicle",
  "description": "Learn how to hold car dealerships and manufacturers accountable for delayed deliveries and manufacturing defects. Draft a legal notice for vehicle replacement or refund.",
  "image": "https://www.legalrecovery.in/og-car-dealer-notice.png",
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
  "name": "Automotive Consumer Rights Guide",
  "image": "https://www.legalrecovery.in/og-car-dealer-notice.png",
  "description": "A comprehensive guide on drafting legal notices to car dealerships and manufacturers for delayed deliveries, unfair practices, and defective lemon vehicles.",
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

export default function CarDealerNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-dealership-power-imbalance", title: "The Dealership Power Imbalance",
      children: [
        { id: "delayed-delivery-booking-fraud", title: "Delayed Delivery and Booking Amount Fraud" },
        { id: "the-lemon-car-nightmare", title: "The Lemon Car Nightmare: Manufacturing Defects" }
      ]
    },
    { id: "lemon-car-evidence-checklist", title: "Lemon Car Evidence Checklist" },
    { id: "drafting-the-legal-notice", title: "Drafting the Legal Notice to the Dealership" },
    { id: "automotive-consumer-court-timeline", title: "Automotive Consumer Court Timeline" },
    { id: "success-stories-reviews", title: "Success Stories & Buyer Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Notice to Car Dealer for Defective Vehicle", href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle" }
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
              Automotive Consumer Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice for Delayed Delivery &amp; <span className="text-[#DC2626]">Lemon Cars</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Car buyers frequently face months of unjustified delivery delays or are handed defective vehicles that spend more time in the service center than on the road. Learn how to legally demand a refund, replacement, or compensation from arrogant dealerships and manufacturers.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Purchasing a car is the second largest financial investment most Indians make, superseded only by buying a home. The expectation is a seamless, joyous experience resulting in a reliable asset. However, the reality for thousands of consumers is a frustrating battle against arrogant dealerships, systemic delays, and the nightmare of receiving a defective vehicle straight from the factory.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The automotive sales model heavily favors the manufacturer and the dealer. Dealerships routinely accept substantial booking advances for highly anticipated models, fully aware they cannot meet the promised delivery timelines. They use these advances as interest free capital. When frustrated buyers demand their booking amount back, dealerships arbitrarily invoke hidden cancellation clauses, deducting significant sums of money for a delay they caused.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Even worse is the scenario where a buyer finally receives the vehicle, only to discover it suffers from critical, recurring manufacturing defects. These are commonly referred to globally as "lemon cars." The vehicle experiences engine stalling, transmission failures, or severe electrical faults within weeks of purchase. The dealership response is a never ending cycle of temporary software updates and patch repairs, actively refusing to acknowledge the inherent defect or offer a replacement. The consumer is left paying EMIs for a car permanently parked at the service center.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Consumers must understand that they are not powerless against automotive giants. The Consumer Protection Act, 2019, provides potent remedies against both "Deficiency of Service" (delayed delivery) and "Defective Goods" (lemon cars). The catalyst for triggering these remedies is a meticulously drafted legal notice served simultaneously to the dealership and the manufacturer. To comprehend the foundational strategy of these legal demands, reviewing a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is highly beneficial.
                </p>
              </div>

              <section id="the-dealership-power-imbalance" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Dealership Power Imbalance
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Dealerships operate on aggressive sales targets and actively utilize predatory tactics to lock in consumers. Recognizing these illegal practices is the first step in formulating your legal response.
                  </p>

                  <h3 id="delayed-delivery-booking-fraud" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Delayed Delivery and Booking Amount Fraud
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    When you pay a booking advance, the dealership issues a receipt indicating a tentative delivery timeline (e.g., four to six weeks). This constitutes a binding agreement for the provision of a service (procuring and delivering the vehicle). If the dealership unilaterally extends this timeline month after month, they are committing a gross deficiency in service.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The fraud occurs when you attempt to cancel. Dealerships often claim they have a policy to deduct five thousand to ten thousand rupees as "processing fees" or "cancellation charges." Under Indian consumer law, a party in breach cannot penalize the victim. Because the dealership failed to deliver on time, they have zero legal authority to retain any portion of your advance. Retaining it constitutes an Unfair Trade Practice, and courts routinely order the refund of the full amount along with penal interest.
                  </p>

                  <h3 id="the-lemon-car-nightmare" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Lemon Car Nightmare: Manufacturing Defects
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A manufacturing defect is an inherent flaw built into the vehicle during production, rendering it unfit for its intended purpose. It is distinctly different from normal wear and tear or damage caused by the driver.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Dealerships are trained to downplay manufacturing defects. They will claim a severe transmission jerk is "normal characteristic of the vehicle" or that an engine warning light is a "minor sensor glitch." Their goal is to push the vehicle past the warranty period through endless, ineffective repairs. Indian consumer courts have consistently ruled that consumers pay for a functional, defect free vehicle. If a brand new car requires major component overhauls (like replacing the entire engine or gearbox) within the first few months, it is legally deemed a defective good. The consumer has the absolute right to demand a completely new replacement vehicle or a full refund of the purchase price, including registration and insurance costs.
                  </p>
                </div>
              </section>

              <section id="lemon-car-evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Lemon Car Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Automotive litigation relies entirely on paper trails. Before instructing an advocate to draft a legal notice for a defective vehicle, you must meticulously organize the service history. A judge will not replace a vehicle based on verbal complaints; they require documented proof of repeated failures.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. Complete Set of Job Cards</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            This is the most critical evidence. Every time you leave the car at the service center, they must open a "Job Card" detailing your specific complaints. Ensure you retain every physical or digital copy of these cards. They prove how many times the same defect was reported.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Service Invoices and Zero Bills</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Collect the final service invoices provided when picking up the car. Even if the repair was covered under warranty and the bill was zero, the invoice details exactly what parts were replaced and what software was flashed.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. Video and Photographic Evidence</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If the car stalls randomly or warning lights flash intermittently, safely record a video of the dashboard showing the errors, the odometer reading, and the exact date and time. This prevents the dealer from claiming they "could not replicate the issue."
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Independent Expert Report (Optional but Powerful)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If the manufacturer stubbornly denies the defect, hiring an independent, certified automotive engineer to inspect the vehicle and draft a technical report confirming the manufacturing flaw makes your case almost unbeatable in consumer court.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    By attaching these specific proofs to your formal legal demands, you demonstrate to the corporate legal team that you are fully prepared for a protracted consumer court battle.
                  </p>
                </div>
              </section>

              <section id="drafting-the-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting the Legal Notice to the Dealership
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    An automotive legal notice must be dual targeted. It must be addressed to the Managing Director or proprietor of the local dealership, and simultaneously copied to the Grievance Officer and the CEO of the manufacturer corporate headquarters in India. This prevents the dealer from hiding the dispute from the parent company.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    For delayed deliveries, the notice will state the booking date, the promised delivery date, and the refusal to refund the advance. It will invoke the Consumer Protection Act for deficiency in service and demand the immediate refund of the full booking amount without any arbitrary deductions, plus interest and legal costs, within 15 days.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    For a defective vehicle, the drafting is more complex. The notice must chronologically list every single breakdown, referencing the specific job card numbers and dates. It must explicitly state that the vehicle suffers from an "inherent manufacturing defect" that the authorized service center has failed to rectify despite multiple opportunities. It will declare that the vehicle poses a safety hazard and is unfit for its intended purpose.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The demand section must be absolute. You must demand either the immediate replacement of the vehicle with a brand new, defect free unit of the exact same specification, or a total refund of the vehicle on road price, including all RTO taxes, insurance premiums, and loan processing fees, along with substantial compensation for mental agony. For executing this effectively against large corporations, utilizing an <Link href="/online-lawyer-to-send-legal-notice" className="text-[#DC2626] hover:underline font-medium">online lawyer to send a legal notice</Link> is highly recommended.
                  </p>
                </div>
              </section>

              <section id="automotive-consumer-court-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Automotive Consumer Court Timeline
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Holding an automotive giant accountable requires persistence. This timeline outlines the standard escalation path from the initial legal notice to the final consumer court decree.
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
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: Corporate Legal Notice</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The advocate issues the notice via RPAD to both the dealer and the manufacturer. Often, the corporate office intervenes upon receiving the notice, overriding the local dealer to offer a settlement (like a refund of the booking amount or offering a free extended warranty) to avoid bad PR and court costs.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 30: NCH Grievance Registration</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the notice yields no satisfactory response, you register a formal grievance against the manufacturer on the National Consumer Helpline portal. This adds a layer of government regulatory tracking to the dispute, further pressuring the company to resolve the defect.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 30 Onwards: District or State Commission</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The final step is filing a formal petition in the Consumer Court based on the financial value of the car (District Commission for under 50 Lakhs, State Commission for above). The court will review the job cards and expert reports. If a manufacturing defect is proven, the court will issue a binding order for a full replacement or refund.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Buyer Reviews
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
                  Discuss your vehicle dispute with consumer court experts. We draft legal notices to force car manufacturers and dealers to provide refunds or replacements.
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
