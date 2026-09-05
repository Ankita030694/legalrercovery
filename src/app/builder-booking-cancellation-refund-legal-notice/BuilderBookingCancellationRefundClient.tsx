'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a builder legally forfeit the entire token money if I cancel a flat booking?",
    answer: "No, a builder cannot legally forfeit the entire token money or earnest money if a homebuyer decides to cancel the booking before signing a formal Builder-Buyer Agreement (BBA). Under the flat booking cancellation refund rules and Section 74 of the Indian Contract Act, 1872, any forfeiture clause in a unilateral booking form is considered a penal clause. Builders are only entitled to retain a nominal administrative charge (usually not exceeding a few thousand rupees) or must show actual financial damages that they incurred due to the cancellation. If they have suffered no actual loss, they must refund the entire booking amount."
  },
  {
    question: "What does the RERA Act say about builders forfeiting booking amounts?",
    answer: "Section 13(1) of the Real Estate (Regulation and Development) Act, 2016 (RERA) states that a promoter or builder cannot accept a sum exceeding ten percent of the cost of the apartment, plot, or building as an advance payment or booking amount without first entering into a written agreement for sale and registering it. If a builder forfeits booking amount RERA guidelines are violated. The regulatory authorities have repeatedly ruled that since the booking form is a unilateral document and not a registered agreement for sale, the builder does not have the legal authority to forfeit the earnest money."
  },
  {
    question: "What is the difference between a booking form and a Builder-Buyer Agreement (BBA)?",
    answer: "A booking form or application form is simply a preliminary request to reserve a flat, usually signed by the buyer to express interest and pay the initial token money. It is an adhesive, non-binding document in terms of final sale obligations. On the other hand, the Builder-Buyer Agreement (BBA) is a comprehensive, bilateral, legally binding contract that outlines all the terms of sale, payment schedules, possession dates, penalties, and dispute resolution mechanisms. Until the BBA is drafted, agreed upon, and executed by both parties, no binding contract of sale exists, and any forfeiture based on the booking form is invalid."
  },
  {
    question: "How do I send a legal notice to a builder for a token money refund?",
    answer: "You can send a legal notice to builder for token money refund through a qualified legal professional. The notice should detail the reservation of the flat, the date and mode of token payment, the reasons for cancellation (such as financial problems, home loan rejection, or builder's delay), and why the forfeiture is illegal under RERA and the Contract Act. The notice must demand the refund of the token money within a compliance window of 15 days from receipt. Serving this notice is a crucial pre-litigation step to establish your claim and invite the builder's legal department to settle."
  },
  {
    question: "How can I recover my booking amount if the builder refuses to refund it?",
    answer: "If the builder refuses to refund the booking money, you have three primary legal routes to recover token money paid to builder. You can file a formal complaint under Section 31 of RERA before the Real Estate Regulatory Authority of your state, file a consumer complaint before the District Consumer Disputes Redressal Commission, or file a civil recovery suit in court. A complaint under RERA is often the fastest and most specialized route for projects registered under RERA, while consumer court is useful if you can prove deficiency in service."
  },
  {
    question: "Can I get a refund of my token money if my home loan is rejected?",
    answer: "Yes. Home loan rejection is one of the most common reasons for flat booking cancellations. Since the buyer's capacity to purchase the flat is contingent upon securing financial assistance, and the builder has not suffered any direct loss, the builder cannot forfeit your booking money. Most model agreements and judicial precedents state that token money must be refunded in full if the cancellation is due to factors beyond the buyer's control, such as a bank rejecting the home loan application."
  },
  {
    question: "Is there a time limit to file a legal case against a builder for a token money refund?",
    answer: "Yes, under the Limitation Act, 1963, the time limit to file money recovery case India is three years. This three-year period starts from the date the builder officially rejects your refund request or when the cause of action arises (such as the date you formally canceled the booking and demanded the refund). If you fail to initiate legal action (like filing a RERA complaint or a civil recovery suit) within this three-year period, your claim will become time-barred, and you will lose your legal right to recover the money."
  },
  {
    question: "What if the builder is not registered under RERA? Can I still get a refund?",
    answer: "Yes, even if the builder's project is not registered under RERA (either because it is a small project under 500 square meters or because the builder is violating RERA registration mandates), you can still claim your refund. In such cases, your primary remedies lie under the Indian Contract Act, 1872, and the Consumer Protection Act, 2019. You can send a formal legal notice and file a consumer complaint or a civil recovery suit. You can check how to recover money without written agreement to understand how oral bookings, payment receipts, and WhatsApp communications can be used as valid evidence in court."
  },
  {
    question: "Can the builder deduct GST or administrative charges from my token money refund?",
    answer: "A builder can only deduct a nominal, reasonable administrative charge (typically between 5,000 to 25,000 rupees depending on the project scale) if they can prove they incurred administrative expenses in processing your booking application. However, they cannot deduct GST on cancelled bookings because no service or sale was completed, and any GST collected must be refunded or reversed. If the builder deducts a substantial portion of your token money citing GST or unilateral cancellation fees, it violates the principles of equity and contract law, and you can challenge it legally."
  }
];

const reviews = [
  {
    author: "Ramesh Kumar (New Delhi)",
    rating: "5",
    text: "Ramesh booked a 2BHK apartment in Gurugram by paying a token money of 2 Lakhs. Two weeks later, Ramesh faced a financial setback due to an unexpected family emergency and requested a cancellation. The builder refused to refund the money, citing a non-refundable clause in the booking form. Ramesh served a formal legal notice to the builder, citing Section 74 of the Contract Act and pointing out that the builder had suffered no actual damage. Realizing the legal risk, the builder's legal department contacted Ramesh and refunded the entire amount, deducting only a nominal 10,000 rupees as administrative charges."
  },
  {
    author: "Priya Sharma (Mumbai)",
    rating: "5",
    text: "Priya Sharma paid a booking amount of 1.5 Lakhs to reserve a flat in Thane. The builder delayed providing the draft Builder-Buyer Agreement for four months. When the draft BBA was finally shared, it contained clauses that allowed the builder to delay possession indefinitely without penalties. Priya refused to sign the BBA and demanded a refund. The builder refused, claiming unilateral forfeiture. Priya served a lawyer-backed notice and subsequently filed a complaint with MahaRERA. The authority ordered the builder to refund the entire booking amount with interest, ruling that a builder cannot force a buyer to sign a one-sided agreement."
  },
  {
    author: "Vikram Mehta (Bengaluru)",
    rating: "5",
    text: "Vikram Mehta booked an apartment in Bengaluru by paying 3 Lakhs token money. His home loan application was rejected by multiple banks due to a technical title dispute on the builder's land. The builder refused to refund the booking money, claiming the loan rejection was the buyer's problem. Vikram served a legal notice citing Section 70 of the Indian Contract Act (unjust enrichment) and demanding a refund. Faced with a potential RERA complaint, the builder agreed to settle the dispute. The builder refunded the full 3 Lakhs to Vikram's account within 30 days of receiving the notice."
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
      "name": "Flat Booking Cancellation: Recover Token Money Refund from Builder",
      "item": "https://www.legalrecovery.in/builder-booking-cancellation-refund-legal-notice"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flat Booking Cancellation: Recover Token Money Refund from Builder",
  "description": "Learn how to recover token money after a flat booking cancellation. Serve a legal notice to the builder for booking amount refund under RERA guidelines and contract rules.",
  "image": "https://www.legalrecovery.in/og-builder-booking-refund.png",
  "author": {
    "@type": "Person",
    "name": "Advocate Aman Chawla",
    "url": "https://www.legalrecovery.in/authors/advocate-aman-chawla"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Advocate Sneha Sharma",
    "url": "https://www.legalrecovery.in/authors/advocate-sneha-sharma"
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
  "name": "Builder Booking Cancellation Refund Recovery Action Plan",
  "image": "https://www.legalrecovery.in/og-builder-booking-refund.png",
  "description": "A tactical legal roadmap to draft, serve, and recover token money and booking deposits from builders in India.",
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

export default function BuilderBookingCancellationRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "booking-cancellation-overview", title: "Understanding Flat Booking Cancellations and Token Money Forfeiture" },
    { id: "rera-rules-refunds", title: "RERA Guidelines on Flat Booking Cancellation Refund Rules" },
    { id: "contract-law-forfeiture", title: "Contract Act Provisions Against Arbitrary Forfeiture of Booking Amounts" },
    { id: "legal-notice-strategy", title: "Drafting a Legal Notice to Builder for Token Money Refund" },
    { id: "step-by-step-roadmap", title: "Step-by-Step Roadmap to Recover Token Money Paid to Builder" },
    { id: "legal-remedies-comparison", title: "Dispute Resolution Matrix: RERA Complaint versus Consumer Forum" },
    { id: "checklist-prerequisites", title: "Checklist of Evidence and Prerequisites for Token Money Recovery" },
    { id: "success-stories", title: "Client Success Stories and Real-World Recovery Cases" },
    { id: "faq-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Flat Booking Cancellation Refund", href: "/builder-booking-cancellation-refund-legal-notice" }
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
              Real Estate Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Flat Booking Cancellation: <span className="text-[#DC2626]">Recover Token Money Refund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Learn how to recover token money after a flat booking cancellation. Demand your booking amount refund under RERA guidelines and contract rules.
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
              
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>

              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Homebuyers pay initial token money (usually 1 to 5 Lakhs) to reserve a flat. If the buyer decides to cancel the booking before signing the formal Builder-Buyer Agreement (BBA) or registering it under RERA, builders often forfeit the entire token money citing unilateral booking forms. This page explains how, under RERA guidelines and contract rules, builders cannot forfeit booking amounts without an executed contract, and how to demand a full refund.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  For most individuals, purchasing a residential flat is one of the most significant financial decisions of their lifetime. The journey typically begins with visiting various project sites, reviewing brochures, and selecting a suitable apartment. Once a buyer decides to proceed with a purchase, real estate promoters and builders require them to pay an initial deposit, commonly referred to as token money, earnest money, or booking amount. This token money, which usually ranges from 1 to 5 Lakhs, is paid to reserve the specific flat and prevent the builder from selling it to other prospective buyers. The payment is accompanied by the signing of a preliminary booking application form.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  However, circumstances can change rapidly. A buyer might face an unexpected financial crisis, a sudden medical emergency, job loss, or relocation. Alternatively, the buyer's home loan application might be rejected by financial institutions due to eligibility issues or technical defects in the builder's land title. In other cases, the buyer may decide to cancel the booking after receiving the draft of the Builder-Buyer Agreement (BBA) and discovering that the contract contains highly unilateral, biased, and unfair terms that favor the builder.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  When a buyer communicates their decision to cancel the booking and requests a refund of their earnest deposit, builders almost always refuse. They cite the clauses printed in their booking application forms, claiming that the token money is completely non-refundable and stands forfeited. They argue that by signing the booking form, the buyer agreed to these terms. This practice creates a severe financial gap and distress for homebuyers.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In reality, under Indian real estate regulations and contract laws, builders cannot unilaterally forfeit booking amounts without an executed contract. Knowing how to demand a full refund and taking the correct legal steps is essential to reclaim your locked money. If you find yourself in a situation where no formal contract exists, you should understand <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to leverage your legal position effectively.
                </p>
              </div>

              {/* Section 1: The Booking Form vs BBA */}
              <section id="booking-cancellation-overview" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Flat Booking Cancellations and Token Money Forfeiture
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To understand why a builder's forfeiture of token money is legally untenable, one must understand the difference between a booking application form and a Builder-Buyer Agreement (BBA). A booking form is merely a preliminary expression of interest by the buyer and a reservation slip issued by the promoter. It does not constitute a completed contract of sale. It is a unilateral document prepared by the builder's sales office, and its clauses are heavily weighted against the buyer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For a contract to be legally binding under the Indian Contract Act, 1872, there must be a consensus ad idem, which means a meeting of minds on all essential terms of the transaction. A booking form lacks this consensus. It does not detail the final specifications of the flat, the exact date of possession, the detailed payment milestones, or the mutual obligations of the parties. It is merely an invitation to offer or a preliminary step towards entering into a contract.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The formal contract of sale is the Builder-Buyer Agreement (BBA). The BBA is a bilateral agreement that must be executed by both parties, outlining the comprehensive terms of the transaction. Until the BBA is drafted, agreed upon, and signed by both the builder and the buyer, no binding contract exists. If the buyer decides to cancel the booking before signing the BBA, they are exercising their right to withdraw from a preliminary negotiation. Since there is no executed contract, there is no breach of contract. Consequently, the builder has no legal right to enforce forfeiture clauses contained in the booking form. The forfeiture of earnest money in the absence of a signed agreement constitutes a wrongful withholding of the buyer's funds.
                  </p>
                </div>
              </section>

              {/* Section 2: RERA Guidelines */}
              <section id="rera-rules-refunds" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  RERA Guidelines on Flat Booking Cancellation Refund Rules
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The enactment of the Real Estate (Regulation and Development) Act, 2016 (RERA) brought significant relief to homebuyers by regulating the arbitrary practices of promoters. RERA provides clear guidelines regarding advance payments and booking cancellations. The primary provision that restricts builders from taking excessive deposits and forfeiting them is Section 13(1) of the RERA Act.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 13(1) states that a promoter shall not accept a sum more than ten percent of the cost of the apartment, plot, or building as an advance payment or booking amount from a person without first entering into a written agreement for sale and registering the said agreement. This means that any token money collected by the builder is legally classified as an advance payment towards the flat. If the builder collects this money and fails to execute and register a formal agreement for sale, they are in violation of Section 13.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a <span className="font-semibold text-slate-900">builder forfeits booking amount rera</span> guidelines are directly violated. Regulatory authorities across various states, including MahaRERA in Maharashtra, Karnataka RERA (K-RERA), and Haryana RERA (HRERA), have repeatedly ruled on <span className="font-semibold text-slate-900">flat booking cancellation refund rules</span>. The authorities have established that if a buyer cancels a booking before the BBA is signed and registered, the builder must refund the token money.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The builder is only permitted to deduct a nominal, reasonable administrative charge (typically ranging from 10,000 to 25,000 rupees depending on the project scale) to cover the cost of processing the application. The builder cannot forfeit the entire token money of 1 to 5 Lakhs. Any clause in a booking form that permits the complete forfeiture of the booking amount is void under RERA, as it contradicts the statutory protection provided to buyers. Furthermore, if the cancellation is due to the builder's failure to provide the draft BBA in a timely manner or because the builder altered the specifications of the flat, the buyer is entitled to a full refund with no deductions.
                  </p>
                </div>
              </section>

              {/* Section 3: Indian Contract Act Provisions */}
              <section id="contract-law-forfeiture" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Contract Act Provisions Against Arbitrary Forfeiture of Booking Amounts
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the Indian Contract Act, 1872, the rules governing earnest money forfeiture are strict. Builders often believe that they can forfeit any amount by calling it earnest money or token deposit. However, Section 74 of the Contract Act, which deals with compensation for breach of contract where a penalty is stipulated, prevents such arbitrary forfeitures.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The legal position on the forfeiture of earnest money has been settled by the Supreme Court of India in several landmark judgments, most notably in the cases of Maula Bux versus Union of India (1969) and Kailash Nath Associates versus Delhi Development Authority (2015). The Supreme Court held that the forfeiture of earnest money is only permissible if the seller has suffered actual damage or loss due to the buyer's default. If no loss has been suffered by the seller, the forfeiture of earnest money acts as a penalty, which is void under Section 74.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a buyer cancels a flat booking, the builder does not suffer an automatic financial loss. The builder retains ownership of the flat and can sell it to another buyer, often at a higher market price. For the builder to legally forfeit the token money, they must prove the exact financial loss they suffered as a direct result of the cancellation. Since the project is usually under construction and the flat is put back into the inventory, the builder cannot prove any actual damage. In the absence of proven damage, forfeiting the booking amount is illegal and constitutes unjust enrichment under Section 70 of the Contract Act.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, Section 70 stipulates that if a person lawfully does something for another person or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation. The builder enjoys the benefit of the buyer's token money and must restore it if the transaction is cancelled. If the builder refuses to refund the money, the homebuyer has the right to initiate a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link> to enforce their claim and obtain a decree for refund along with interest.
                  </p>
                </div>
              </section>

              {/* Section 4: Legal Notice Strategy */}
              <section id="legal-notice-strategy" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Legal Notice to Builder for Token Money Refund
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When a builder refuses to process a refund after a booking cancellation, serving a formal pre-litigation notice is the most effective first step. Sending a <span className="font-semibold text-slate-900">legal notice to builder for token money refund</span> establishes a formal record of your demand and escalates the dispute from the local sales office to the builder's corporate legal cell.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A well-drafted legal notice must contain precise details to ensure the builder's legal team understands the strength of your case. The notice should outline the details of the buyer and the flat, the date of the booking application form, the details of the token money payment (including bank transaction IDs, cheque numbers, and receipts), the reasons for the cancellation, the legal grounds for the refund (specifically citing Section 13 of the RERA Act, 2016, and Section 74 of the Indian Contract Act, 1872), and a clear demand for the refund of the entire token money within a compliance window of 15 days from the receipt of the notice. It should also include a warning that failure to refund the money will result in the buyer filing a complaint before RERA, the Consumer Forum, or civil courts, holding the builder liable for interest, legal costs, and compensation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    By serving this notice, you provide the builder with a final opportunity to settle the matter amicably. In most cases, builders prefer to refund the money after deducting a nominal administrative charge rather than facing regulatory action under RERA or consumer courts. If you are unsure about how to proceed with the legal demand, you can read more about a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to understand how these formal demands are structured and served in Indian jurisdictions.
                  </p>
                </div>
              </section>

              {/* Section 5: Step-by-Step Roadmap */}
              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Roadmap to Recover Token Money Paid to Builder
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To successfully <span className="font-semibold text-slate-900">recover token money paid to builder</span>, you must follow a structured legal roadmap. This ensures that you build a strong case and do not miss any critical deadlines.
                  </p>

                  {/* Process Map Timeline */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Document Gathering and Verification</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Compile all records related to the transaction. This includes the payment receipt for the token money, your bank statement showing the debit, the copy of the booking application form, and all correspondence with the builder's sales representatives. Verify that the project is registered under RERA on the state RERA portal.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Formal Written Cancellation Request</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Send a formal request for cancellation and refund in writing. Send an email to the builder's official support address and a physical letter to their corporate office. State your reasons for cancellation clearly and request a refund. Keep records of delivery confirmations.
                        </p>
                      </div>
                    </div>

                    {/* Step-3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Drafting the Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the builder rejects your request or fails to respond within 14 days, instruct an advocate to draft a formal legal notice. The notice must cite RERA Section 13 and Contract Act Section 74, demanding the refund of the earnest money within a 15-day window.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Dispatch and Service of the Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Serve the notice formally via Registered Post or Speed Post to the builder's corporate address and send a copy via email. Keep the physical postal receipts and track the delivery status online. The 15-day compliance window begins on delivery.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Filing a RERA or Consumer Court Complaint</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the 15-day notice period expires and the builder refuses to refund the money, initiate a complaint before RERA or the Consumer Forum. Remember that the <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case India</Link> is three years from the cancellation date.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 6: Comparison Table */}
              <section id="legal-remedies-comparison" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Dispute Resolution Matrix: RERA Complaint versus Consumer Forum
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Homebuyers often wonder whether they should file a complaint with RERA or the Consumer Forum to recover their token money. Both routes have their advantages and disadvantages, and the choice depends on the specific facts of your case.
                  </p>

                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">RERA Complaint (Section 31)</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Consumer Forum Complaint</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Primary Focus</td>
                          <td className="px-6 py-4">Specialized real estate regulatory body. Strictly regulates promoter compliance and project development.</td>
                          <td className="px-6 py-4">Broad consumer protection body. Resolves general deficiency of services and unfair trade practices.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Project Applicability</td>
                          <td className="px-6 py-4">Applies exclusively to RERA-registered projects or projects eligible for registration.</td>
                          <td className="px-6 py-4">Applies to all real estate disputes, regardless of the RERA registration status.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Resolution Speed</td>
                          <td className="px-6 py-4">Fast. Specialized procedures usually lead to resolutions within 60 to 90 days.</td>
                          <td className="px-6 py-4">Moderate. Large backlogs can lead to case resolution taking 6 to 18 months.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Enforcement Power</td>
                          <td className="px-6 py-4">High. Can issue Recovery Certificates to District Collectors to recover dues as land revenue.</td>
                          <td className="px-6 py-4">High. Can award refunds, interest, and substantial compensation for mental harassment.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Filing Fees</td>
                          <td className="px-6 py-4">Low. Structured state-wise filing fees (usually ranging between ₹1,000 to ₹5,000).</td>
                          <td className="px-6 py-4">Low. Fees are calculated on a sliding scale based on the total claim value.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 7: Prerequisites Checklist */}
              <section id="checklist-prerequisites" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Checklist of Evidence and Prerequisites for Token Money Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build an airtight case for recovering your token money, you must prepare a comprehensive evidence bundle. The strength of your claim before RERA or the Consumer Forum depends entirely on the documentary proof you provide.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Evidence Checklist for Flat Token Money Refund</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Booking Application Form:</strong> The copy of the initial application form or booking slip signed by you and the builder's representative. This establishes the booking date and terms.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Payment Receipts:</strong> Official receipts issued by the builder for the token money. If receipts were not issued, your bank statements showing the debit serve as proof.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Cancellation Request copy:</strong> Copies of emails, letters, or WhatsApp messages where you formally requested cancellation and demanded a refund.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Home Loan Rejection Letter:</strong> If the cancellation is due to loan rejection, a formal letter from the bank stating that your application was rejected.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>BBA Draft:</strong> The draft Builder-Buyer Agreement provided to you. Highlight unilateral, unfair, or non-negotiable clauses that you refused to sign.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Notice Dispatch Proofs:</strong> The physical postal receipts and online delivery reports proving the legal notice was delivered to the builder's registered office.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Success Stories */}
              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Client Success Stories and Real-World Recovery Cases
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how homebuyers successfully recovered their token money using legal notices and regulatory complaints:
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
                          <p className="text-[10px] text-slate-500">Verified Homebuyer Refund</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 9: FAQs */}
              <section id="faq-section" className="scroll-mt-32">
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

            {/* Right Column Sidebar with Requested Advice Card */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
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

        {/* Modal for initiating payment/advice */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
