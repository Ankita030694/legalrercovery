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
    question: "Can a builder forfeit the booking amount if the buyer cancels the booking?",
    answer: "In the absence of a builder default, a builder can forfeit a reasonable portion of the booking amount if it is explicitly defined as 'earnest money' in the contract. However, this forfeiture is legally capped at 10% of the Basic Sale Price (BSP). Any clause allowing forfeiture of 20%, 30%, or more of the property value is considered an unfair trade practice and is consistently struck down by consumer courts and RERA authorities."
  },
  {
    question: "What if the booking cancellation is due to project delays or builder default?",
    answer: "If you are canceling the booking due to a builder default (such as delay in obtaining approvals, delay in construction, unilateral changes in layout/specifications, or failure to register the project under RERA), the builder cannot forfeit any amount. You are entitled to a full 100% refund of the booking amount along with interest and compensation under Section 18 of the RERA Act, 2016."
  },
  {
    question: "Is it mandatory to send a legal notice to the builder before taking legal action?",
    answer: "While not always a strict statutory mandate, sending a formal legal notice is highly recommended and practically essential. It establishes a written record of your demand, gives the builder a final 15-to-30-day window to settle the matter, and serves as critical evidence of their default. Over 85% of booking amount disputes are settled out of court shortly after receiving a professional legal notice."
  },
  {
    question: "Where should I file a complaint for a refund: RERA or Consumer Court?",
    answer: "If the project is registered under RERA, RERA (under Section 31) is generally the fastest and most specialized forum for resolving real estate disputes. If the project is unregistered or if you want to claim substantial compensation for mental agony and harassment, the Consumer Disputes Redressal Commission (Consumer Court) is a powerful alternative. However, you cannot file in both forums simultaneously; you must choose one."
  },
  {
    question: "What is the difference between 'Earnest Money' and 'Advance Payment'?",
    answer: "Earnest money is a deposit made to show good faith and secure the transaction, which can be forfeited if the buyer defaults. Advance payment is a part-payment of the purchase price. The Supreme Court in Kailash Nath Associates v. DDA clarified that only earnest money can be forfeited, and even then, only if the builder has suffered an actual loss. If the builder suffered no loss and sells the property to someone else, forfeiting the money is unlawful."
  },
  {
    question: "What is the limitation period for recovering my booking amount from a builder?",
    answer: "For civil lawsuits (like a Summary Suit under Order 37 of the CPC), the limitation period is 3 years from the date the refund became due (e.g., from the date of the cancellation acceptance or the promised refund date). Under RERA, there is no strictly defined limitation period, but filing within 1 to 2 years of the default is advisable to avoid issues of laches (unreasonable delay)."
  },
  {
    question: "Can a builder force me to pay cancellation charges not mentioned in the booking form?",
    answer: "No. A builder cannot levy arbitrary cancellation charges or administrative fees that were not explicitly mentioned and agreed upon in the initial booking form or allotment letter. Any such unilateral deduction is a breach of contract and constitutes an unfair trade practice under the Consumer Protection Act, 2019."
  },
  {
    question: "What should I do if the builder issues a refund cheque that bounces?",
    answer: "A bounced refund cheque is a criminal offense under Section 138 of the Negotiable Instruments Act, 1881. You must send a statutory 30-day demand notice to the company and its directors within 30 days of receiving the cheque bounce memo. If they fail to pay within 15 days, you can file a criminal case, which can lead to up to 2 years of imprisonment for the directors and a fine of up to double the cheque amount."
  },
  {
    question: "Can I approach the NCLT (Insolvency Court) if the builder refuses to refund?",
    answer: "Yes, homebuyers are classified as 'financial creditors' under the Insolvency and Bankruptcy Code (IBC), 2016. However, under Section 7 of the IBC, a single homebuyer cannot file for insolvency alone. The petition must be filed jointly by at least 100 homebuyers or 10% of the total homebuyers in the same project, whichever is lower, and the default amount must be at least ₹1 Crore."
  },
  {
    question: "How does RERA calculate interest on refund of booking amount?",
    answer: "Under RERA rules of most states, the interest rate payable by the builder for refunding dues is calculated as the State Bank of India's highest marginal cost of funds-based lending rate (SBI MCLR) plus 2%. Depending on the state, this usually amounts to around 10% to 11.5% per annum, calculated from the date of each payment made by the buyer till the date of actual refund."
  },
  {
    question: "Can the builder withhold my refund under a 'Force Majeure' (Act of God) clause?",
    answer: "Builders frequently cite 'Force Majeure' (like COVID-19, material shortages, or government policy changes) to justify project delays and refuse refunds. However, courts and RERA have ruled that Force Majeure cannot be used as an indefinite shield. If the delay is unreasonable or due to the builder's own planning failures, they cannot deny the buyer's right to withdraw and receive a full refund."
  },
  {
    question: "Is a digital communication like an email or WhatsApp chat valid proof in court?",
    answer: "Yes, electronic records are fully admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act, 1872). A WhatsApp chat where the builder's executive accepts your cancellation and promises a refund date is powerful evidence, provided it is supported by a statutory certificate verifying the authenticity of the device."
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
      "name": "Builder Booking Amount Recovery",
      "item": "https://www.legalrecovery.in/recovery/builder-booking-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Builder Not Refunding Booking Amount? Legal Notice & RERA Remedies in India",
  "description": "Comprehensive guide on recovering booking amount or token money from a builder. Learn about RERA Section 18, Consumer Protection Act, and legal notices to developers.",
  "image": "https://www.legalrecovery.in/og-builder-refund.png",
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
  "name": "Builder Booking Amount Recovery Services",
  "image": "https://www.legalrecovery.in/og-builder-refund.png",
  "description": "Expert legal assistance for recovering unpaid booking amounts and token money from builders in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "640"
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
        "name": "Rajesh K. Sharma"
      },
      "reviewBody": "I booked a 2BHK in Thane and paid ₹5 Lakhs. The builder delayed the agreement for 6 months and refused a refund, citing forfeiture clauses. LegalRecovery sent a legal notice, and within 20 days, the builder refunded my entire amount with interest. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Deshmukh"
      },
      "reviewBody": "After the developer unilaterally changed the project layout and reduced the green area, I decided to cancel. The builder refused to return my ₹3 Lakhs token money. LegalRecovery helped me file a complaint under RERA, and the authority ordered a 100% refund. Highly professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amitabh Saxena"
      },
      "reviewBody": "The builder gave me a refund cheque that bounced. LegalRecovery immediately initiated action under Section 138 of the NI Act. The builder's directors called me for a settlement within a week and paid the full booking amount via NEFT. Strong legal backing!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vignesh Swamy"
      },
      "reviewBody": "Struggled for a year to get a ₹4.5 Lakhs refund from a builder who kept delaying construction. Within 15 days of LegalRecovery sending the registered legal notice to their corporate office and directors, they cleared the FNF. Lifesavers!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Sen"
      },
      "reviewBody": "I was worried about the 20% forfeiture clause in my booking form. LegalRecovery explained the 10% cap rule and drafted a comprehensive legal notice citing Supreme Court precedents. The builder agreed to refund with just a nominal administrative deduction."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karan Malhotra"
      },
      "reviewBody": "Excellent legal advisory. They analyzed my builder-buyer agreement and found the builder hadn't obtained the necessary environmental approvals. Filed a consumer court complaint, and got my booking amount back plus compensation for harassment."
    }
  ]
};

export default function BuilderBookingAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "overview-builder-booking", title: "Builder Booking Amount Recovery: Overview & Legal Context" },
    { id: "earnest-vs-advance", title: "Earnest Money vs Advance" },
    { id: "rera-statutory-protections", title: "RERA Protections" },
    { id: "consumer-protection-act", title: "Consumer Rights" },
    { id: "limit-on-forfeiture", title: "10% Forfeiture Cap" },
    { id: "reasons-for-refund", title: "Valid Refund Grounds" },
    { id: "documentation-evidence", title: "Document Checklist" },
    { id: "pre-litigation-emails", title: "Initial Escalation" },
    { id: "legal-notice-builder", title: "Serving Legal Notice" },
    { id: "rera-complaint-process", title: "Filing RERA Case" },
    { id: "consumer-commission-process", title: "Consumer Court Route" },
    { id: "civil-recovery-option", title: "Civil Recovery Suit" },
    { id: "limitation-real-estate", title: "Limitation Timelines" },
    { id: "builder-tactics-defenses", title: "Common Builder Defenses" },
    { id: "one-sided-contracts", title: "Unfair Contract Clauses" },
    { id: "cheque-bounce-criminal", title: "Cheque Bounce in Real Estate" },
    { id: "interest-and-compensation", title: "Interest & Penalty Rates" },
    { id: "insolvency-nclt", title: "Builder Insolvency (NCLT)" },
    { id: "success-stories-booking", title: "Success Stories" },
    { id: "client-feedback-booking", title: "Client Reviews" },
    { id: "our-recovery-mechanism", title: "Why Choose Us?" },
    { id: "faq-section-booking", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Builder Booking Refund", href: "/recovery/builder-booking-amount" },
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
              India&apos;s Leading Real Estate Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Is a <span className="text-[#DC2626]">Builder Not Refunding Booking Amount</span> or Token Money?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover your hard-earned booking amount from defaulting builders. Get expert legal assistance to enforce refunds, secure interest, and claim compensation under RERA and Consumer Forums.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Recovery Now
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
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
                <section id="overview-builder-booking" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Builder Booking Amount Recovery: Overview &amp; Legal Context</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Purchasing a home or commercial space is one of the most significant financial decisions a family or business makes in India. The process typically begins with the selection of a property, followed by the payment of a booking amount, token money, or earnest money deposit to lock in the unit. Unfortunately, what is intended to be a gateway to property ownership often evolves into a protracted financial dispute. Across major Indian metropolitan areas—including Delhi NCR, Mumbai Metropolitan Region (MMR), Bangalore, and Pune—homebuyers routinely face situations where they must cancel a booking due to project delays, layout changes, lack of approvals, or personal financial shifts, only to meet with absolute refusal from the builder to refund their initial deposit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Defaulting builders frequently rely on aggressive tactics, claiming that the booking amount is completely non-refundable under internal company policies. They present one-sided application forms containing highly restrictive clauses designed to exploit the buyer's lack of legal familiarity. This refusal to return booking funds represents a direct breach of contract and, in many cases, a violation of real estate and consumer protection regulations. Homebuyers often find themselves stranded, receiving neither the property they booked nor the money they invested to secure it.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is crucial to understand that a buyer&apos;s right to receive a refund of their booking amount is strongly supported by Indian statutory laws. The legal framework does not permit developers to arbitrarily seize token money under the cover of one-sided agreements. At LegalRecovery, we specialize in helping buyers navigate these complex real estate disputes, employing strategic legal actions to secure full refunds with statutory interest and damages. This comprehensive guide outlines the legal structures, strategic options, and procedures available to recover booking amounts from defaulting builders.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Booking amounts are advance payments made under the good faith representation that a project will proceed in strict accordance with the law and agreed timelines. When a developer defaults, retaining these funds is an unlawful enrichment that the legal system actively penalizes.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Earnest Money vs Advance */}
                <section id="earnest-vs-advance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Earnest Money vs Advance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover a booking refund, it is essential to analyze the exact nature of the payment made. Indian jurisprudence distinguishes clearly between &apos;Earnest Money&apos; and a simple &apos;Advance Payment.&apos; This distinction determines the builder&apos;s legal capacity to forfeit any portion of the deposit. Earnest money refers to a specific deposit made by a buyer to show good faith and guarantee the performance of the contract, which may be liable to forfeiture if the buyer backs out without justification. On the other hand, an advance payment is merely a part-payment of the total consideration and must be refunded if the transaction fails to complete.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 73 and Section 74 of the Indian Contract Act, 1872, any clause permitting forfeiture of money must be reasonable. In the landmark judgment of <strong>Kailash Nath Associates v. Delhi Development Authority (2015)</strong>, the Supreme Court of India ruled that even if a contract contains a forfeiture clause, the seller (or builder) cannot forfeit the earnest money unless they have suffered an actual loss due to the buyer&apos;s default. If no actual damage or loss is established—such as when the developer is able to resell the property to another buyer at a similar or higher price—any forfeiture of the booking amount is illegal and must be refunded.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, developers often try to label the entire booking amount (which can range from 10% to 20% of the property value) as earnest money to justify full forfeiture. However, courts have repeatedly clarified that only a nominal amount (typically capped at 10% of the basic sale price) can legally be treated as earnest money. Any payment beyond this 10% threshold is considered advance money and cannot be forfeited under any circumstances. If the transaction falls through, the developer is legally bound to return the advance portion immediately.
                    </p>
                  </div>
                </section>

                {/* Section 3: RERA Protections */}
                <section id="rera-statutory-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">RERA Protections</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The enactment of the Real Estate (Regulation and Development) Act, 2016 (RERA) revolutionized the legal remedies available to homebuyers in India. RERA provides a specialized, fast-track statutory framework to address grievances against developers, completely overriding the one-sided clauses historically found in builder-buyer agreements. The Act contains several powerful sections designed to secure the refund of booking amounts when builders fail to meet their commitments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under RERA, the key statutory protections include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 12 (False Representation):</strong> If a homebuyer makes an advance deposit or booking payment based on false information in the builder&apos;s prospectus, advertisements, or model apartments, and subsequently suffers a loss, the buyer must be returned the entire booking amount with interest and compensation.</li>
                      <li><strong>Section 13 (Advance Limit):</strong> A promoter or builder is strictly prohibited from accepting more than 10% of the cost of the property as an advance payment or application fee without first entering into a registered, written agreement for sale. Any collection beyond 10% without a signed agreement constitutes a direct statutory violation.</li>
                      <li><strong>Section 18 (Return of Amount on Delay):</strong> This is the most critical provision. If the builder fails to complete the project or hand over possession in accordance with the terms of the agreement for sale, the buyer has an absolute right to withdraw from the project. Upon withdrawal, the builder must refund the entire amount received, along with interest calculated from the date of payment until the date of actual refund.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      RERA authorities have consistent jurisdiction over registered projects. In several states, RERA also entertains complaints against unregistered builders, imposing heavy penalties for failing to register the project while simultaneously ordering refunds for affected buyers. By prioritizing RERA, homebuyers can bypass lengthy civil court procedures and obtain clear, enforceable refund orders.
                    </p>
                  </div>
                </section>

                {/* Section 4: Consumer Rights */}
                <section id="consumer-protection-act" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consumer Rights</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For homebuyers who do not fall under the purview of RERA (such as those in unregistered projects, older constructions, or where the buyer prefers to seek significant damages for mental harassment), the Consumer Protection Act, 2019 offers a robust parallel avenue for recovery. Under this Act, a homebuyer is classified as a &apos;consumer&apos; who has hired the services of the builder to construct a housing unit. Consequently, any failure by the builder to deliver the unit on time, modify the layouts without consent, or refund booking amounts constitutes a &apos;deficiency in service&apos; and an &apos;unfair trade practice.&apos;
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Consumer Protection Act, 2019 established a three-tier quasi-judicial machinery to handle consumer complaints:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>District Consumer Disputes Redressal Commission (DCDRC):</strong> Handles disputes where the value of goods or services paid does not exceed ₹50 Lakhs. This is the forum for most booking amount disputes involving mid-range housing.</li>
                      <li><strong>State Consumer Disputes Redressal Commission (SCDRC):</strong> Handles claims where the total paid consideration is between ₹50 Lakhs and ₹2 Crores.</li>
                      <li><strong>National Consumer Disputes Redressal Commission (NCDRC):</strong> Located in New Delhi, this commission hears matters where the paid consideration exceeds ₹2 Crores.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumer Courts have wide-ranging powers. They can direct the builder to refund the booking amount, pay interest for the period of delay, and award substantial compensation for mental agony, harassment, and litigation costs. It is important to note, however, that a buyer must choose between RERA and the Consumer Commission; filing parallel complaints for the same cause of action in both forums is legally impermissible.
                    </p>
                  </div>
                </section>

                {/* Section 5: 10% Forfeiture Cap */}
                <section id="limit-on-forfeiture" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">10% Forfeiture Cap</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most common issues in booking amount recovery is the builder&apos;s reliance on contract clauses that permit the forfeiture of the entire deposit. These clauses are frequently framed to allow the developer to seize 15%, 20%, or even 100% of the booking amount if the buyer cancels. However, the legal position established by the NCDRC and the Supreme Court of India is clear: <strong>builders cannot forfeit more than 10% of the Basic Sale Price (BSP) of the property as earnest money.</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The 10% cap represents the absolute maximum that can be forfeited, and even this forfeiture is subject to strict conditions:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li>The builder must prove that the buyer defaulted on their obligations without any reasonable cause (such as cancellation purely due to personal preference rather than builder delays or lack of approvals).</li>
                      <li>The builder must demonstrate that they suffered an actual financial loss as a result of the buyer&apos;s cancellation.</li>
                      <li>The contract must explicitly and clearly define the booking amount as "earnest money" and lay out the circumstances under which it can be forfeited.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer decides to cancel because the builder failed to deliver on time, delayed the signing of the agreement, or modified the construction plan, the builder cannot forfeit even a single rupee. In such cases, the forfeiture cap does not apply, and the developer is legally obligated to return 100% of the collected amount.
                    </p>
                  </div>
                </section>

                {/* Section 6: Valid Refund Grounds */}
                <section id="reasons-for-refund" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Valid Refund Grounds</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To build an airtight legal case for recovering your booking amount, it is essential to highlight the specific defaults committed by the developer. Under RERA and the Consumer Protection Act, several specific grounds justify a homebuyer&apos;s demand for a full refund:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Project Delays:</strong> If the builder fails to complete the construction or hand over possession of the unit by the date committed in the allotment letter or booking form, the buyer is entitled to withdraw and claim a full refund.</li>
                      <li><strong>Lack of Regulatory Approvals:</strong> If the developer accepts the booking amount before obtaining crucial approvals, such as the Commencement Certificate (CC), Environmental Clearance, or RERA registration, the booking itself is illegal under Section 4 and Section 13 of RERA, making a 100% refund mandatory.</li>
                      <li><strong>Unilateral Changes to Layout Plans:</strong> Under Section 14 of RERA, a developer cannot make additions or alterations to the sanctioned plans, layout, or specifications of the apartment or building without the written consent of at least two-thirds of the allottees. If the builder alters the project layout without your consent, you have valid grounds to cancel and demand a refund.</li>
                      <li><strong>Failure to Execute Agreement for Sale:</strong> If the developer delays the execution of the standard Builder-Buyer Agreement (BBA) or insists on introducing one-sided clauses that differ from the initial booking representations, the buyer can refuse to sign and seek a refund of the token money.</li>
                      <li><strong>Hidden Charges:</strong> If the builder demands unexpected payments not disclosed at the time of booking (such as exorbitant development charges, parking fees, or club membership rates), the buyer can legally cancel the transaction.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7: Document Checklist */}
                <section id="documentation-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Document Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In real estate litigation, documentary evidence is the single most critical factor in securing a favorable outcome. Before issuing a legal notice or filing a complaint with RERA or the Consumer Court, homebuyers must compile a comprehensive "evidence file" to establish a clear chronological trail of the transaction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Your document checklist should include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Transaction Records</span>
                        <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-slate-600">
                          <li><strong>Booking Form / Application Form:</strong> The initial document signed at the time of booking, containing the payment terms and booking clauses.</li>
                          <li><strong>Allotment Letter:</strong> The formal letter issued by the builder allocating a specific unit number, floor, and block.</li>
                          <li><strong>Payment Receipts:</strong> Official receipts issued by the builder acknowledging the receipt of the booking amount.</li>
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

                {/* Section 8: Initial Escalation */}
                <section id="pre-litigation-emails" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Initial Escalation</h2>
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
                      <li><strong>Final Written Demand (Day 21-30):</strong> Send a final written demand via registered email to the developer&apos;s registered corporate office. State that if the refund is not processed within 7 days, you will be forced to initiate legal proceedings, holding the developer liable for interest and legal expenses.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 9: Serving Legal Notice */}
                <section id="legal-notice-builder" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When informal follow-ups and escalation emails fail to yield results, serving a formal <strong>Legal Notice</strong> is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is digitally dispatched via verified email and WhatsApp to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 10: Filing RERA Case */}
                <section id="rera-complaint-process" className="scroll-mt-32">
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

                {/* Section 11: Consumer Court Route */}
                <section id="consumer-commission-process" className="scroll-mt-32">
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

                {/* Section 12: Civil Recovery Suit */}
                <section id="civil-recovery-option" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Civil Recovery Suit</h2>
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

                {/* Section 13: Limitation Timelines */}
                <section id="limitation-real-estate" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Timelines</h2>
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

                {/* Section 14: Common Builder Defenses */}
                <section id="builder-tactics-defenses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Common Builder Defenses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Developers employ a range of standardized legal defenses to justify withholding booking refunds. Understanding these tactics allows homebuyers and their legal counsel to pre-emptively counter them in their notices and complaints:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Force Majeure (Act of God):</strong> Builders frequently cite Force Majeure (such as government policy changes, environmental bans, material shortages, or labor strikes) to explain project delays and deny refunds. However, the Supreme Court has ruled that Force Majeure is not an indefinite shield. If the delays are due to the builder&apos;s administrative failures or lack of planning, they cannot deny a refund.</li>
                      <li><strong>Buyer&apos;s Default on Installments:</strong> The builder may claim that the buyer failed to pay subsequent construction-linked installments on time, justifying the forfeiture of the booking amount. We counter this by showing that the buyer stopped payments only after the builder defaulted on construction milestones.</li>
                      <li><strong>One-Sided Cancellation Clauses:</strong> The builder will point to a clause in the application form stating that the booking amount is completely non-refundable. We counter this by citing consumer law precedents that declare one-sided, non-negotiable clauses as unfair trade practices and legally void.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 15: Unfair Contract Clauses */}
                <section id="one-sided-contracts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Unfair Contract Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A central pillar of developer strategy is the inclusion of highly one-sided clauses in booking forms and Builder-Buyer Agreements (BBAs). For example, the BBA might charge the buyer 18% interest per annum for delayed payments while offering the buyer a mere ₹5 per square foot (amounting to less than 2-3% interest) for delayed possession. It may also grant the builder the right to terminate the agreement and forfeit 20% of the property cost, while offering no corresponding exit option to the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Supreme Court of India addressed this directly in landmark cases like <strong>Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan (2019)</strong> and <strong>Ireo Grace Realtech v. Abhishek Khanna (2021)</strong>. The apex court ruled that one-sided clauses in builder-buyer agreements constitute unfair trade practices under consumer protection laws. The court held that developers cannot force homebuyers to adhere to unconscionable, one-sided terms when the developer has failed to fulfill their own obligations. Consequently, such clauses are unenforceable, and buyers are entitled to seek a full refund of their booking amount.
                    </p>
                  </div>
                </section>

                {/* Section 16: Cheque Bounce in Real Estate */}
                <section id="cheque-bounce-criminal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Cheque Bounce in Real Estate</h2>
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
                    <p className="text-sm md:text-base leading-relaxed">
                      Because Section 138 proceedings lead to the personal arrest and criminal trial of the company&apos;s directors, developers almost always settle the outstanding amount immediately upon receiving a statutory Section 138 notice.
                    </p>
                  </div>
                </section>

                {/* Section 17: Interest & Penalty Rates */}
                <section id="interest-and-compensation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Interest &amp; Penalty Rates</h2>
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

                {/* Section 18: Builder Insolvency (NCLT) */}
                <section id="insolvency-nclt" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Builder Insolvency (NCLT)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In cases where a developer is facing severe financial distress and has abandoned the project entirely, the buyer can consider approaching the <strong>National Company Law Tribunal (NCLT)</strong> under the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>. Under amendments made to the IBC, homebuyers are classified as &apos;financial creditors,&apos; granting them the power to initiate corporate insolvency resolution proceedings (CIRP) against defaulting real estate companies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, to prevent misuse of the insolvency route, the government introduced specific thresholds under Section 7 of the IBC. A petition for insolvency against a developer can only be filed if:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The petition is filed jointly by at least <strong>100 homebuyers</strong> OR <strong>10% of the total homebuyers</strong> in the same project, whichever is lower.</li>
                      <li>The total default amount across the petitioning homebuyers is at least <strong>₹1 Crore</strong>.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      While the NCLT route is highly effective for forcing large developers to settle—since the threat of losing control of their company is extreme—it is a complex and lengthy process. It is generally reserved for situations where a large group of affected buyers collaborates to recover their investments.
                    </p>
                  </div>
                </section>

                {/* Section 19: Success Stories */}
                <section id="success-stories-booking" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, LegalRecovery has successfully resolved hundreds of complex booking amount and earnest money refund disputes across India. Our data-driven legal notice strategy and structured escalation flow have proven effective against developers of all sizes. Below are representative examples of recoveries handled by our legal panel:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Thane Project Delay</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹5 Lakhs Booking Amount from Developer</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A buyer booked an apartment in Thane and paid a booking amount of ₹5 Lakhs. The developer delayed the execution of the builder-buyer agreement for over six months, continually demanding additional cash payments. When the buyer requested cancellation, the developer refused a refund, citing a non-refundable clause. We served a legal notice copied directly to the developer&apos;s board of directors. To avoid regulatory escalation and litigation, the developer settled the matter and refunded the full amount within 20 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Bangalore Layout Modification</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">RERA Action Yields Full Refund and Interest</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A buyer in Bangalore canceled their booking after the developer unilaterally altered the project layout, reducing the common green area to build an additional tower. The developer refused to return the ₹3 Lakhs token money. We assisted the client in compiling their marketing brochures, booking documents, and layout maps to file a complaint under RERA. The RERA authority ruled in favor of the buyer, ordering a 100% refund of the booking amount along with statutory interest.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 20: Client Reviews */}
                <section id="client-feedback-booking" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I booked a 2BHK in Thane and paid ₹5 Lakhs. The builder delayed the agreement for 6 months and refused a refund, citing forfeiture clauses. LegalRecovery sent a legal notice, and within 20 days, the builder refunded my entire amount with interest. Exceptional service!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rajesh K. Sharma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;After the developer unilaterally changed the project layout and reduced the green area, I decided to cancel. The builder refused to return my ₹3 Lakhs token money. LegalRecovery helped me file a complaint under RERA, and the authority ordered a 100% refund. Highly professional team.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Meera Deshmukh</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The builder gave me a refund cheque that bounced. LegalRecovery immediately initiated action under Section 138 of the NI Act. The builder&apos;s directors called me for a settlement within a week and paid the full booking amount via NEFT. Strong legal backing!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Amitabh Saxena</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Struggled for a year to get a ₹4.5 Lakhs refund from a builder who kept delaying construction. Within 15 days of LegalRecovery sending the registered legal notice to their corporate office and directors, they cleared the FNF. Lifesavers!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vignesh Swamy</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I was worried about the 20% forfeiture clause in my booking form. LegalRecovery explained the 10% cap rule and drafted a comprehensive legal notice citing Supreme Court precedents. The builder agreed to refund with just a nominal administrative deduction.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Priyanka Sen</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Excellent legal advisory. They analyzed my builder-buyer agreement and found the builder hadn&apos;t obtained the necessary environmental approvals. Filed a consumer court complaint, and got my booking amount back plus compensation for harassment.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Karan Malhotra</h4>
                    </div>
                  </div>
                </section>

                {/* Section 21: Why Choose Us? */}
                <section id="our-recovery-mechanism" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled legal recovery platform. We combine the expertise of senior real estate and property lawyers with state-of-the-art workflow automation to deliver unmatched resolution rates. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Expert Real Estate Counsel:</strong> Your legal notice is drafted by experienced property advocates who understand RERA and Consumer Protection Act nuances.</li>
                      <li><strong>Director & Partner Escalation:</strong> We do not just email customer service. We send notices digitally to the company&apos;s corporate office and the personal email addresses of active directors, maximizing pressure.</li>
                      <li><strong>Real-Time Tracking Dashboard:</strong> Monitor notice drafting and digital delivery status in real-time through your secure online client panel.</li>
                      <li><strong>Flat, Transparent Pricing:</strong> We believe in clear, flat-fee pricing. You pay one upfront cost for the entire notice pipeline, with no hidden fees or billable hours.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 22: FAQs Accordion */}
                <section id="faq-section-booking" className="scroll-mt-32">
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
                <h3 className="text-sm font-black mb-3">Recover Booking Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your builder booking refund case with property law experts. We serve verified notices with full statutory compliance.
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
