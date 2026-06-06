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
    question: "Can a developer forfeit the entire booking amount if I cancel the flat booking?",
    answer: "No. Developers cannot forfeit the entire booking amount. Even if you cancel for personal reasons (voluntary cancellation), judicial guidelines from RERA and the Supreme Court limit the forfeiture to a reasonable amount, typically capped at 10% of the Basic Sale Price (BSP) as earnest money, or up to 2% of the total cost of the flat. Any clause in the booking form that allows the developer to forfeit 15%, 20%, or the entire amount paid is considered unfair and legally void."
  },
  {
    question: "Am I entitled to a full refund if the cancellation is due to developer delay?",
    answer: "Yes. Under Section 18 of the RERA Act, 2016, if the developer fails to complete the construction or deliver possession of the flat by the date specified in the agreement, the buyer has an absolute right to withdraw. Upon withdrawal, the developer is legally bound to provide a 100% refund of all amounts paid (including the booking amount and subsequent installments) along with interest and compensation. No deduction can be made."
  },
  {
    question: "What is the interest rate payable by the developer on flat cancellation refunds?",
    answer: "Under RERA rules in most states, the developer must pay interest calculated at the State Bank of India's highest marginal cost of funds-based lending rate (SBI MCLR) plus 2%. This interest is calculated from the date the developer received each installment from the buyer until the date of actual payment. Currently, this interest rate averages between 10% and 11.5% per annum."
  },
  {
    question: "How long does a developer have to process a refund after cancellation approval?",
    answer: "Under RERA rules, once a refund is ordered or agreed upon, the developer is legally obligated to return the entire amount to the homebuyer within 45 days. If they delay past this 45-day statutory window, interest will continue to accumulate on the outstanding dues."
  },
  {
    question: "Can a developer deduct cancellation charges if we cancel because we couldn't get a home loan?",
    answer: "If the booking form or allotment letter contains a specific 'subject to home loan approval' clause, you are entitled to a full refund without deductions if your bank rejects the loan. If no such clause exists, the builder may attempt to forfeit a portion of the booking amount, but this remains subject to the 10% BSP cap. Unilateral deductions not explicitly documented are strictly illegal."
  },
  {
    question: "Where should I file a complaint for a flat refund: RERA or the Consumer Forum?",
    answer: "If the project is RERA-registered, the local RERA authority (such as MahaRERA or UP RERA) is the fastest, most specialized forum. If the project is unregistered, or if you are seeking significant damages for mental harassment and litigation costs, filing a complaint under the Consumer Protection Act, 2019 (through the e-Daakhil portal) is a highly effective alternative. You must choose one forum as parallel filings are not permitted."
  },
  {
    question: "What happens if a developer offers to give me credit notes or transfer my booking to another project?",
    answer: "Developers frequently pressure homebuyers to accept credit notes or transfer their booking to a different tower or project. You are under no legal obligation to accept these offers. You have the absolute right to refuse and demand a cash refund of your original deposit."
  },
  {
    question: "What if the developer issues a post-dated refund cheque that bounces?",
    answer: "A bounced refund cheque is a criminal offense under Section 138 of the Negotiable Instruments Act, 1881. You must issue a formal 30-day demand notice to the developer and its active directors within 30 days of receiving the return memo from the bank. If they fail to pay within 15 days, you can file a criminal complaint in court, which carries a penalty of up to 2 years of imprisonment and a fine of up to double the cheque amount."
  },
  {
    question: "Can the developer refuse a refund citing a Force Majeure clause?",
    answer: "Developers often cite COVID-19, sand bans, cement shortages, or government approval delays as Force Majeure to justify construction delays and deny refunds. RERA and consumer commissions have repeatedly ruled that Force Majeure is not an indefinite shield. If the project delay is unreasonable, the developer cannot deny the buyer's right to cancel and receive a full refund."
  },
  {
    question: "How do I prove my cancellation and request a refund in court?",
    answer: "You must build a clear paper trail. This includes: the original booking form, payment receipts, bank statement entries showing the debit, the formal cancellation request email or registered post sent to the builder, the builder's written acknowledgment of cancellation (if any), and copies of follow-up communications."
  },
  {
    question: "Can I approach the NCLT (Insolvency Court) if the developer is not paying the refund?",
    answer: "Homebuyers are classified as financial creditors under the Insolvency and Bankruptcy Code (IBC), 2016. However, to file an insolvency petition against a developer under Section 7, you must file jointly with at least 100 other homebuyers in the same project or 10% of the total allottees (whichever is lower), and the total default amount must exceed ₹1 Crore."
  },
  {
    question: "Is a WhatsApp chat or email conversation legally valid proof of cancellation?",
    answer: "Yes. Under Section 63 of the BNS, 2023 (formerly Section 65B of the Indian Evidence Act, 1872), electronic records like emails and WhatsApp chats are fully admissible as secondary evidence in court, provided you supply a signed statutory certificate confirming the authenticity of the device from which they were retrieved."
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
      "name": "Flat Booking Cancellation Refund",
      "item": "https://www.legalrecovery.in/recovery/flat-booking-cancellation-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flat Booking Cancellation & Refund: RERA Rules & Legal Notices in India",
  "description": "Comprehensive guide on how to cancel your apartment booking and recover a full refund under RERA rules. Learn about forfeiture limits, consumer court options, and legal notices.",
  "image": "https://www.legalrecovery.in/og-flat-refund.png",
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
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06"
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
  "name": "Flat Cancellation Refund Legal Services",
  "image": "https://www.legalrecovery.in/og-flat-refund.png",
  "description": "Expert legal assistance for recovering refunds and earnest money after canceling flat bookings in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "510"
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
        "name": "Vikramaditya Roy"
      },
      "reviewBody": "I canceled my flat booking in Rajarhat because of a 12-month construction delay. The builder refused a refund and threatened to forfeit my ₹4 Lakhs. LegalRecovery drafted a formal notice citing RERA Section 18. Within 2 weeks, the builder cleared my refund. Outstanding job!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Reddy"
      },
      "reviewBody": "Had to cancel my booking for personal reasons. The builder wanted to deduct 20% of the flat cost. LegalRecovery explained the MahaRERA and Supreme Court 10% earnest money cap. They sent a notice, and the builder settled with just a nominal administrative fee. Thank you!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Mehta"
      },
      "reviewBody": "The builder issued a post-dated cheque for my flat cancellation refund, which subsequently bounced. LegalRecovery immediately filed a Section 138 criminal complaint against the directors. Fearing legal consequences, they cleared my dues via RTGS. Excellent work!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Nair"
      },
      "reviewBody": "Struggled to get a refund of ₹3.5 Lakhs from a developer who stopped work on a project. LegalRecovery helped me file a complaint under RERA, and the authority ordered a 100% refund with interest. Highly recommend their legal services."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya K."
      },
      "reviewBody": "The developer unilaterally changed the master plan of the society, deleting the park in front of my tower. I refused to sign the BBA and requested a refund. The builder refused. LegalRecovery's notice made them realize their mistake, and they returned my booking amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Sen"
      },
      "reviewBody": "I was running around for 9 months to get my flat cancellation refund. LegalRecovery's portal kept me updated, and their advocate sent a strong legal notice to the builder's corporate office and directors. The refund was processed in 18 days."
    }
  ]
};

export default function FlatBookingCancellationRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "cancellation-context", title: "Overview & Context" },
    { id: "voluntary-vs-involuntary", title: "Voluntary vs. Involuntary" },
    { id: "refund-forfeiture-rules", title: "Forfeiture Rules" },
    { id: "rera-cancellation-guidelines", title: "RERA Guidelines" },
    { id: "agreement-termination-clause", title: "Termination Clause" },
    { id: "flat-booking-valid-reasons", title: "Valid Refund Grounds" },
    { id: "rera-registered-vs-unregistered", title: "Project Registration" },
    { id: "evidence-cancellation-trail", title: "Document Checklist" },
    { id: "step1-formal-cancellation", title: "Initial Request" },
    { id: "step2-legal-notice-cancellation", title: "Serving Legal Notice" },
    { id: "step3-filing-rera-cancellation", title: "Filing RERA Case" },
    { id: "step4-consumer-court-cancellation", title: "Consumer Court Route" },
    { id: "step5-summary-suit-cancellation", title: "Summary Suit" },
    { id: "limitation-for-flat-cancellation", title: "Limitation Period" },
    { id: "interest-calculation-rules", title: "Interest Calculation" },
    { id: "forfeiture-caps-precedents", title: "Judicial Forfeiture Caps" },
    { id: "force-majeure-cancellation", title: "Force Majeure Defense" },
    { id: "builder-refund-cheque-bounce", title: "Cheque Bounce Remedies" },
    { id: "case-studies-cancellation", title: "Success Stories" },
    { id: "reviews-flat-cancellation", title: "Client Reviews" },
    { id: "our-recovery-service", title: "Why Choose Us?" },
    { id: "faqs-flat-cancellation", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Flat Cancellation Refund", href: "/recovery/flat-booking-cancellation-refund" },
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
              India&apos;s Premium Real Estate Resolution Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Struggling with a <span className="text-[#DC2626]">Flat Booking Cancellation Refund</span>?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Do not let developers seize your hard-earned savings. Recover your booking amount and flat installments with expert legal tech representation under RERA and consumer protection laws.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Recovery Now
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
                
                {/* Section 1: Overview & Context */}
                <section id="cancellation-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview &amp; Context</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Purchasing a residential flat or apartment represents a major milestone for home buyers in India. The transaction typically begins with the selection of a property, followed by paying a substantial booking amount to reserve the unit. Under normal circumstances, this booking amount leads to the execution of a formal Builder-Buyer Agreement (BBA) and subsequent construction progress. However, a significant percentage of property bookings end in cancellation due to developer delays, changes in building plans, or personal financial crises. In such scenarios, developers routinely attempt to withhold the initial booking deposit, claiming that the booking amount is entirely non-refundable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Developers rely on one-sided clauses buried in the initial booking form or allotment letter to justify these forfeitures. Homebuyers are often met with outright refusals or aggressive responses from customer service representatives, who suggest that canceling the booking will result in the loss of all paid funds. This practice is not only unethical but in direct violation of real estate and consumer protection regulations. Homebuyers are frequently left in a vulnerable position, facing the loss of lakhs of rupees with no clear path to recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is crucial to understand that your right to a refund of your flat booking deposit is protected under Indian statutory laws. The legal framework does not permit developers to arbitrarily seize booking amounts. At LegalRecovery, we specialize in assisting homebuyers through these property disputes, using targeted legal notices, RERA complaints, and consumer court filings to secure full refunds with statutory interest and damages. This guide outlines the legal landscape, buyer rights, and procedures available to recover your flat booking cancellation refund.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Flat booking cancellation deposits are trust-based advances held by developers. If the contract fails, any arbitrary attempt by the developer to seize the entire amount constitutes a breach of contract that courts actively penalize.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Voluntary vs. Involuntary */}
                <section id="voluntary-vs-involuntary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Voluntary vs. Involuntary</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When seeking a flat booking refund, the legal strategy depends on whether the cancellation is classified as voluntary or involuntary. An involuntary cancellation is one triggered by the developer&apos;s default—such as project delays, failure to secure construction permits, or changes to the project layouts. Under these circumstances, the homebuyer has an absolute right to withdraw from the project, and the developer must refund 100% of all paid amounts along with statutory interest and compensation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In contrast, a voluntary cancellation occurs when the homebuyer cancels the booking for personal reasons—such as financial constraints, change of plans, or loan rejections—while the developer is meeting all obligations. In voluntary cancellations, developers may be legally permitted to forfeit a portion of the booking deposit. However, this forfeiture is not arbitrary. Real estate laws and judicial precedents place strict caps on the maximum amount a builder can deduct, protecting buyers from excessive penalties.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding this distinction is the first step in formulating your recovery claim. Developers often attempt to classify all cancellations as voluntary to justify high deductions. We analyze the timeline, correspondence, and project status to establish if the cancellation was in fact triggered by builder defaults, thereby forcing the developer to provide a full refund without deductions.
                    </p>
                  </div>
                </section>

                {/* Section 3: Forfeiture Rules */}
                <section id="refund-forfeiture-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Forfeiture Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The rules governing the forfeiture of booking deposits are rooted in Section 73 and Section 74 of the Indian Contract Act, 1872. Developers frequently claim that the initial booking deposit is entirely non-refundable. However, the Supreme Court of India has established that a seller can only forfeit the earnest money if they have suffered an actual financial loss due to the buyer&apos;s withdrawal. If the developer suffers no loss—such as when they can resell the flat to another buyer at a similar or higher price—any forfeiture of the booking amount is illegal.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the law distinguishes between 'earnest money' (a nominal deposit made to show good faith) and 'advance payments' (part-payment of the flat purchase price). Only earnest money is subject to forfeiture, and it is legally capped at a maximum of 10% of the flat&apos;s basic sale price. Any amount collected by the developer beyond this 10% threshold is considered advance money and cannot be forfeited under any circumstances. If the transaction falls through, the developer must refund the advance portion immediately.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Developers often draft booking forms to label the entire collected amount as earnest money to justify full forfeiture. Courts and RERA authorities actively strike down these attempts, limiting deductions to a reasonable percentage of the earnest money or the total flat cost, depending on the circumstances of the cancellation.
                    </p>
                  </div>
                </section>

                {/* Section 4: RERA Guidelines */}
                <section id="rera-cancellation-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">RERA Guidelines</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The enactment of the Real Estate (Regulation and Development) Act, 2016 (RERA) introduced a powerful regulatory framework to protect homebuyers. RERA contains specific provisions designed to secure refunds when flat bookings are canceled due to developer defaults. These provisions override one-sided clauses found in builder-buyer agreements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The key statutory provisions under the RERA Act include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 12 (False Representation):</strong> If a homebuyer pays a booking deposit based on false representations in the developer&apos;s prospectus, model flats, or advertisements, the buyer can cancel the booking and receive a full refund with interest and compensation.</li>
                      <li><strong>Section 13 (Limit on Advance Collection):</strong> Developers are prohibited from accepting more than 10% of the cost of the flat as an advance payment or booking fee without first executing and registering a written agreement for sale. Any collection beyond 10% without a registered agreement is a direct violation of the Act.</li>
                      <li><strong>Section 18 (Return of Dues on Delay):</strong> If the developer fails to complete the construction or hand over possession of the flat in accordance with the agreement for sale, the buyer can withdraw from the project. The developer must then refund the entire amount received with interest and compensation.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      RERA authorities have strict jurisdiction over registered projects. Homebuyers can file formal complaints online through their state&apos;s RERA portal to obtain clear, enforceable refund orders, bypass lengthy civil procedures, and protect their investments.
                    </p>
                  </div>
                </section>

                {/* Section 5: Termination Clause */}
                <section id="agreement-termination-clause" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Termination Clause</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Builder-Buyer Agreement (BBA) is a key document in flat booking disputes. Historically, BBAs were drafted with highly one-sided clauses that heavily penalized homebuyers while giving developers complete freedom. For instance, the BBA might charge the buyer 18% interest per annum for delayed payments but offer the buyer a mere ₹5 per square foot (less than 2-3% interest) for delayed possession. It may also grant the builder the right to terminate the agreement and forfeit 20% of the flat cost, while offering no corresponding exit option to the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Supreme Court of India addressed this directly in cases like <strong>Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan (2019)</strong>. The apex court ruled that one-sided clauses in builder-buyer agreements constitute unfair trade practices under consumer protection laws. The court held that developers cannot force homebuyers to adhere to unconscionable, one-sided terms when the developer has failed to fulfill their own obligations. Consequently, such clauses are unenforceable, and buyers are entitled to cancel and seek a full refund.
                    </p>
                  </div>
                </section>

                {/* Section 6: Valid Refund Grounds */}
                <section id="flat-booking-valid-reasons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Valid Refund Grounds</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To build an airtight legal case for recovering your flat booking refund, you must highlight the specific defaults committed by the developer. Under RERA and consumer law, several specific grounds justify a homebuyer&apos;s demand for a full refund:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Construction Delays:</strong> If the builder fails to complete the construction or deliver possession of the flat by the committed date, the buyer is entitled to withdraw and claim a full refund.</li>
                      <li><strong>Lack of Necessary Permits:</strong> If the developer accepts the booking amount before obtaining crucial approvals, such as the Commencement Certificate (CC), Environmental Clearance, or RERA registration, the booking itself is illegal, making a 100% refund mandatory.</li>
                      <li><strong>Unilateral Changes to Layout Plans:</strong> Under Section 14 of RERA, a developer cannot make additions or alterations to the sanctioned plans, layout, or specifications of the apartment without the written consent of at least two-thirds of the allottees. If the builder alters the project layout without your consent, you have valid grounds to cancel.</li>
                      <li><strong>Failure to Execute Agreement for Sale:</strong> If the developer delays the execution of the standard Builder-Buyer Agreement (BBA) or insists on introducing one-sided clauses that differ from the initial booking representations, the buyer can refuse to sign and seek a refund of the token money.</li>
                      <li><strong>Hidden Charges:</strong> If the builder demands unexpected payments not disclosed at the time of booking (such as exorbitant development charges, parking fees, or club membership rates), the buyer can legally cancel the transaction.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7: Project Registration */}
                <section id="rera-registered-vs-unregistered" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Project Registration</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal remedies available to you can vary depending on whether the project is registered under RERA. Under Section 3 of the RERA Act, all commercial and residential projects where the land area exceeds 500 square meters or the number of apartments exceeds eight must be registered with the state RERA authority.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the project is registered, RERA provides the most streamlined route. You can file a complaint online under Section 31 to seek a refund, interest, and compensation. If the project is unregistered, the builder is in violation of the law. In many states, RERA authorities will still accept complaints against unregistered builders, imposing heavy penalties for failing to register while simultaneously ordering refunds for the affected buyers. Alternatively, buyers can approach the Consumer Court or file a civil recovery suit to recover their dues.
                    </p>
                  </div>
                </section>

                {/* Section 8: Document Checklist */}
                <section id="evidence-cancellation-trail" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Document Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In flat cancellation disputes, documentary evidence is the single most critical factor in securing a favorable outcome. Before issuing a legal notice or filing a complaint, homebuyers must compile a comprehensive "evidence file" to establish a clear chronological trail of the transaction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Your document checklist should include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Transaction Records</span>
                        <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-slate-600">
                          <li><strong>Booking Form:</strong> The initial document signed at the time of booking, containing the payment terms and booking clauses.</li>
                          <li><strong>Allotment Letter:</strong> The formal letter issued by the builder allocating a specific unit number, floor, and block.</li>
                          <li><strong>Payment Receipts:</strong> Official receipts issued by the builder acknowledging the receipt of the booking amount and installments.</li>
                          <li><strong>Bank Statements:</strong> Statements showing the debit entries for the booking amount transfers.</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Communication Trails</span>
                        <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-slate-600">
                          <li><strong>Emails:</strong> Printouts of all email exchanges with sales executives regarding payment timelines, construction progress, or cancellation requests.</li>
                          <li><strong>WhatsApp Chats:</strong> Verified screenshots of chats with sales agents or managers promising refund timelines or booking confirmations.</li>
                          <li><strong>Marketing Brochure:</strong> Copy of the project brochure or layout plan shared at the time of booking to prove misrepresentation or changes.</li>
                          <li><strong>Written Cancellation Request:</strong> Copy of the formal letter or email sent to the builder requesting cancellation and refund.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9: Initial Request */}
                <section id="step1-formal-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Initial Request</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before proceeding to formal legal action, it is strategically wise to execute a structured, written escalation process. This initial stage serves two purposes: first, it provides the developer with a clear opportunity to resolve the issue amicably; second, it creates a crucial paper trail proving that the buyer acted in good faith and exhausted administrative remedies before approaching the courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We recommend a 30-day pre-litigation escalation cycle:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Formal Cancellation Email (Day 1-10):</strong> Send a formal email to the builder&apos;s customer care and sales head. State clearly your decision to cancel the booking, cite the specific reasons (e.g., project delay, failure to execute the BBA), and request a full refund of the booking amount within 15 days. Attach copies of the booking form and payment receipts.</li>
                      <li><strong>Written Reminder & Call Audit (Day 11-20):</strong> If the developer fails to respond or offers vague verbal assurances, send a written reminder. Document any phone calls or in-person discussions by sending a follow-up email summarizing the conversation (e.g., &quot;As discussed on the phone today, you promised to process my refund by next week...&quot;).</li>
                      <li><strong>Final Written Demand (Day 21-30):</strong> Send a final written demand via registered email and speed post to the developer&apos;s registered corporate office. State that if the refund is not processed within 7 days, you will be forced to initiate legal proceedings, holding the developer liable for interest and legal expenses.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 10: Serving Legal Notice */}
                <section id="step2-legal-notice-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When informal follow-ups and escalation emails fail to yield results, serving a formal <strong>Legal Notice</strong> is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 11: Filing RERA Case */}
                <section id="step3-filing-rera-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Filing RERA Case</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the developer refuses to comply with the legal notice, the buyer can file a formal complaint under <strong>Section 31 of the RERA Act, 2016</strong>. The complaint is submitted to the RERA Authority of the respective state (such as MahaRERA in Maharashtra, UP RERA in Uttar Pradesh, or K-RERA in Karnataka) via their official online portal.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The process for filing a RERA complaint is highly structured:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Online Registration:</strong> Create an account on the state RERA portal, select the &apos;File Complaint&apos; option, and provide details of the promoter, project registration number, and the unit booked.</li>
                      <li><strong>Drafting the Complaint:</strong> State the facts of the case, detailing the payments made, the builder&apos;s default (delay, plan changes, etc.), and the cancellation request. The complaint must explicitly cite Section 12 or Section 18 to demand a refund with interest.</li>
                      <li><strong>Uploading Documents:</strong> Upload the evidence file (booking form, receipts, bank statements, legal notice, and delivery proof).</li>
                      <li><strong>Paying Filing Fees:</strong> Pay the prescribed online filing fee (typically ranging from ₹1,000 to ₹5,000 depending on the state).</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon submission, RERA issues a unique complaint number and schedules hearings. The authority conducts conciliation and arguments. Once satisfied of the builder&apos;s default, RERA issues a binding order directing the developer to refund the booking amount with statutory interest. If the builder fails to pay, RERA can issue a Revenue Recovery Certificate (RRC) to the District Collector to recover the money by attaching the builder&apos;s bank accounts or sealing their properties.
                    </p>
                  </div>
                </section>

                {/* Section 12: Consumer Court Route */}
                <section id="step4-consumer-court-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consumer Court Route</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a complaint in the <strong>Consumer Disputes Redressal Commission (Consumer Court)</strong> is a powerful alternative for buyers seeking booking refunds. Under the Consumer Protection Act, 2019, a complaint is filed electronically via the <strong>e-Daakhil portal</strong>, making the filing process completely digital.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The consumer court process involves:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Jurisdiction Determination:</strong> File the complaint in the District Commission if the amount paid is under ₹50 Lakhs. For larger bookings, file in the State or National Commission based on financial limits.</li>
                      <li><strong>Drafting the Petition:</strong> Outline the facts, highlighting the builder&apos;s deficiency in service and unfair trade practices. The petition should demand the refund of the booking amount, statutory interest, and specific damages for mental agony and litigation costs.</li>
                      <li><strong>Admission & Summons:</strong> The commission reviews the complaint. Once admitted, it issues formal summons to the builder, directing them to file a written response within 30 to 45 days.</li>
                      <li><strong>Evidence and Arguments:</strong> Both parties present documentary evidence and final arguments.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumer Courts are highly protective of homebuyers. Under current precedents, they frequently award interest ranging from 9% to 12% per annum, alongside compensation of ₹25,000 to ₹1,00,000 for mental harassment and litigation expenses.
                    </p>
                  </div>
                </section>

                {/* Section 13: Summary Suit */}
                <section id="step5-summary-suit-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Summary Suit</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For commercial property bookings, institutional buyers, or cases where RERA or Consumer Court jurisdiction is limited, filing a civil suit under the Code of Civil Procedure, 1908 (CPC) is the primary remedy. Specifically, we utilize <strong>Order 37 of the CPC</strong> to file a <strong>Summary Suit</strong>. A summary suit is a fast-track civil remedy designed for recovering liquidated debts arising out of written contracts, such as signed booking forms, allotment letters, or refund settlement agreements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In a standard civil suit, defendants can drag out proceedings for years by filing endless procedural applications. Under Order 37, however, the rules are heavily weighted in favor of the plaintiff:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Once the summary suit is filed and summons are served, the builder must enter an appearance within <strong>10 days</strong>.</li>
                      <li>If the builder fails to appear, the allegations in the buyer&apos;s petition are deemed accepted, and the court immediately passes a decree for the recovery of the booking amount.</li>
                      <li>If the builder appears, the buyer serves a &apos;Summons for Judgment.&apos; The builder must then petition the court for &apos;Leave to Defend.&apos;</li>
                      <li>The court will inspect the builder&apos;s defense. If the defense is found to be a sham or a delay tactic, the court will deny leave and pass a decree, or order the builder to deposit the entire booking amount in court as a condition to contest the case.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 14: Limitation Period */}
                <section id="limitation-for-flat-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Period</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Timing is critical when recovering outstanding dues in real estate disputes. Homebuyers must initiate legal action within the strict timelines prescribed by the <strong>Limitation Act, 1963</strong>. Under the Act, the limitation period to file a civil recovery suit or a Summary Suit for the refund of a booking amount is <strong>three (3) years</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The limitation clock begins ticking from the date the cause of action arises, which is typically:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The date the builder accepted the cancellation request and promised to refund the money but failed to do so.</li>
                      <li>The date the promised refund cheque bounced.</li>
                      <li>The date the developer defaulted on project completion as per the allotment letter or booking agreement.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under RERA, while there is no explicitly defined limitation period in the statute, courts and tribunals apply the doctrine of laches (unreasonable delay). Filing a complaint within 1 to 2 years of the default is highly recommended to ensure the authority takes swift action and does not view the delay as an acceptance of the builder&apos;s timelines.
                    </p>
                  </div>
                </section>

                {/* Section 15: Interest Calculation */}
                <section id="interest-calculation-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Interest Calculation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When recovering a booking amount, you are entitled to claim more than just the principal sum. Under Section 18 of the RERA Act, 2016, if a developer defaults on their obligations, they must refund the entire booking amount along with statutory interest. This interest is designed to compensate the buyer for the loss of opportunity and the cost of capital.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      RERA rules across most states calculate this interest rate as:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-semibold text-slate-800 text-sm leading-relaxed mb-4">
                      Interest Rate = State Bank of India (SBI) Highest Marginal Cost of Funds-based Lending Rate (MCLR) + 2%
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Currently, this formula translates to an interest rate of approximately <strong>10% to 11.5% per annum</strong>. The interest is calculated from the exact date each payment was made by the buyer to the builder, until the date of actual refund. In addition to interest, buyers can claim compensation for mental agony, professional harassment, and legal fees, particularly when pursuing the case through Consumer Courts.
                    </p>
                  </div>
                </section>

                {/* Section 16: Judicial Forfeiture Caps */}
                <section id="forfeiture-caps-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Judicial Forfeiture Caps</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most contested issues in flat cancellations is the developer&apos;s attempt to forfeit a large portion of the deposit. Developers frequently insert clauses permitting them to forfeit 15% or 20% of the flat cost if the buyer cancels. RERA authorities and the Supreme Court have ruled against these one-sided terms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For example, MahaRERA has consistently ruled that in voluntary cancellations, the builder cannot forfeit more than 10% of the earnest money or a maximum of 2% of the total flat value as cancellation charges. Any deduction exceeding this limit is considered an unfair trade practice. This cap ensures that homebuyers are not heavily penalized for canceling a booking due to genuine personal difficulties or financial challenges.
                    </p>
                  </div>
                </section>

                {/* Section 17: Force Majeure Defense */}
                <section id="force-majeure-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Force Majeure Defense</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Developers employ a range of standardized legal defenses to justify withholding booking refunds. Understanding these tactics allows homebuyers and their legal counsel to pre-emptively counter them in their notices and complaints. The most common defense is the invocation of "Force Majeure" (Act of God).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Builders cite COVID-19, material shortages, labor strikes, or government approval delays to explain construction halts. However, RERA and consumer commissions have repeatedly ruled that Force Majeure is not an indefinite shield. If the project delay is unreasonable or due to the developer&apos;s own administrative failures, they cannot deny the buyer&apos;s right to cancel and receive a full refund.
                    </p>
                  </div>
                </section>

                {/* Section 18: Cheque Bounce Remedies */}
                <section id="builder-refund-cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Cheque Bounce Remedies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under legal pressure, developers sometimes agree to refund the booking amount and issue post-dated cheques to the buyer. However, these cheques frequently bounce due to &quot;insufficient funds&quot; or &quot;stop payment&quot; instructions. While a bounced cheque is frustrating, it provides the buyer with a powerful criminal remedy that often yields faster results than standard civil recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A bounced refund cheque is prosecuted under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. This is a criminal offense punishable by up to two years of imprisonment, a fine of up to double the cheque amount, or both. The procedure under Section 138 is governed by strict statutory timelines:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The refund cheque must be presented to the bank within three (3) months of its issue date.</li>
                      <li>Upon receiving the bank&apos;s return memo confirming the bounce, the buyer must serve a statutory <strong>30-Day Demand Notice</strong> to the builder and all signing directors.</li>
                      <li>The builder has 15 days from the receipt of the notice to clear the payment.</li>
                      <li>If the builder fails to pay within 15 days, the buyer must file a criminal complaint in the Magistrate&apos;s Court within 30 days from the expiry of the 15-day period.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 19: Success Stories */}
                <section id="case-studies-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, LegalRecovery has successfully resolved hundreds of complex booking amount and earnest money refund disputes across India. Our data-driven legal notice strategy and structured escalation flow have proven effective against developers of all sizes. Below are representative examples of recoveries handled by our legal panel:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Rajarhat Flat Delay</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹4 Lakhs from a Defaulting Builder</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A homebuyer canceled their booking in a Rajarhat project after a 12-month construction delay. The builder refused to refund their ₹4 Lakhs, citing non-refundable clauses. We drafted and sent a formal legal notice under RERA Section 18. Upon receiving the notice and recognizing the statutory risk, the developer agreed to process a full refund within 14 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Voluntary Cancellation Cap</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered Booking Amount with Nominal Deduction</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A buyer decided to cancel their flat booking due to a sudden job relocation. The developer attempted to forfeit the entire ₹3 Lakhs deposit, citing a 20% forfeiture clause in the booking form. We sent a legal notice outlining the 10% BSP earnest money cap under RERA and consumer law. The developer agreed to settle, returning the amount with a nominal administrative charge.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 20: Client Reviews */}
                <section id="reviews-flat-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I canceled my flat booking in Rajarhat because of a 12-month construction delay. The builder refused a refund and threatened to forfeit my ₹4 Lakhs. LegalRecovery drafted a formal notice citing RERA Section 18. Within 2 weeks, the builder cleared my refund. Outstanding job!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vikramaditya Roy</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Had to cancel my booking for personal reasons. The builder wanted to deduct 20% of the flat cost. LegalRecovery explained the MahaRERA and Supreme Court 10% earnest money cap. They sent a notice, and the builder settled with just a nominal administrative fee. Thank you!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sneha Reddy</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The builder issued a post-dated cheque for my flat cancellation refund, which subsequently bounced. LegalRecovery immediately filed a Section 138 criminal complaint against the directors. Fearing legal consequences, they cleared my dues via RTGS. Excellent work!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rahul Mehta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Struggled to get a refund of ₹3.5 Lakhs from a developer who stopped work on a project. LegalRecovery helped me file a complaint under RERA, and the authority ordered a 100% refund with interest. Highly recommend their legal services.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Anjali Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The developer unilaterally changed the master plan of the society, deleting the park in front of my tower. I refused to sign the BBA and requested a refund. The builder refused. LegalRecovery's notice made them realize their mistake, and they returned my booking amount.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Divya K.</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I was running around for 9 months to get my flat cancellation refund. LegalRecovery's portal kept me updated, and their advocate sent a strong legal notice to the builder's corporate office and directors. The refund was processed in 18 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Siddharth Sen</h4>
                    </div>
                  </div>
                </section>

                {/* Section 21: Why Choose Us? */}
                <section id="our-recovery-service" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran real estate advocates with advanced workflow automation to deliver unmatched speed, transparency, and resolution rates. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Attorney-Drafted Quality:</strong> Your notice is individually reviewed and drafted by a qualified legal professional, ensuring precise statutory citations tailored to your specific case facts.</li>
                      <li><strong>VC/Director Escalation:</strong> We do not just email HR. We dispatch physical registered letters to the registered company office and personal residences of all active directors, maximizing pressure.</li>
                      <li><strong>Digital Dashboard:</strong> Track the drafting progress, post dispatch tracking, and delivery status of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no retention fee surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 22: FAQs Accordion */}
                <section id="faqs-flat-cancellation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div 
                          key={idx} 
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Flat Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your flat booking cancellation case with property law experts. We serve verified notices with full compliance support.
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
