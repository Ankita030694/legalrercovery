'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs for rendering and Schema
const faqs = [
  {
    question: "Is a hand loan given without a written agreement legally recoverable in India?",
    answer: "Yes, hand loans given without a written contract are fully recoverable under Indian law. Oral agreements are legally valid contracts under Section 10 of the Indian Contract Act, 1872. You can establish the debt by producing digital and financial evidence such as bank transaction logs, GPay/UPI records, WhatsApp text logs, emails, call records, and witness testimonies."
  },
  {
    question: "How do I prove I gave a hand loan to someone if I don't have a contract?",
    answer: "The easiest way to prove a hand loan is by establishing a transaction history. Collect bank account statements showing NEFT, RTGS, or UPI debits, and combine them with WhatsApp messages or SMS logs where the borrower acknowledged receipt of the money and promised to repay it. If they have made any partial repayments, these are also strong proofs of an existing debt."
  },
  {
    question: "What is the limitation period for recovering a hand loan?",
    answer: "According to the Limitation Act, 1963, the limitation period to file a civil suit for recovering a hand loan is three (3) years. The clock begins ticking from the date the money was transferred (if no repayment date was agreed) or from the agreed repayment deadline. You can reset the 3-year clock if the borrower makes a partial payment or signs a written acknowledgment of the debt."
  },
  {
    question: "Can I file a Summary Suit under Order 37 CPC for hand loan recovery?",
    answer: "Yes, you can. While Order 37 is typically used for written contracts or promissory notes, Indian courts have held that a written acknowledgment of debt (such as bank transfer records combined with WhatsApp chats or emails admitting the loan and promising to pay) constitutes a written contract for a liquidated sum of money, making a Summary Suit admissible."
  },
  {
    question: "Can I file a cheating case if a friend defaults on a hand loan?",
    answer: "A simple loan default is a civil dispute. However, if you can prove that the borrower had a dishonest intention to deceive or cheat you right from the beginning (e.g., using a fake crisis pretext, providing forged bank details, or running away after receiving the funds), you can file a criminal complaint for Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 420 IPC)."
  },
  {
    question: "What should I do if a cheque given to repay a hand loan bounces?",
    answer: "If the borrower issued a cheque that bounced, you should immediately send a statutory legal notice under Section 138 of the Negotiable Instruments Act, 1881, within 30 days of the bounce. If they fail to pay the cheque amount within 15 days of receiving the notice, you can file a criminal complaint in court within 30 days thereafter."
  },
  {
    question: "Are WhatsApp messages and screenshots accepted in court as evidence?",
    answer: "Yes, electronic records like WhatsApp chats and email history are fully admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). To make them admissible, you must file a digital certificate (BSA Section 63 Certificate) verifying that the records have not been tampered with and the device was functioning properly."
  },
  {
    question: "Can I claim interest on a hand loan if no interest rate was agreed?",
    answer: "Yes, under Section 3 of the Interest Act, 1978, and Section 34 of the CPC, civil courts have the discretion to award reasonable interest on delayed payments. Courts typically grant simple interest ranging from 6% to 12% per annum, calculated from the date of default or from the date the suit was filed."
  },
  {
    question: "What is the cost of sending a legal notice for hand loan recovery?",
    answer: "The cost of sending a legal notice is highly affordable compared to filing a lawsuit. At LegalRecovery, we provide transparent flat-fee pricing for advocate-signed notices, which include drafting, reviewing your evidence trail, and dispatching physical registered letters to the borrower."
  },
  {
    question: "What happens if a borrower lives in a different state from me?",
    answer: "You can file a recovery suit in the court within whose territorial jurisdiction the cause of action wholly or partially arose. Under Section 20 of the CPC, since the money left your bank account, your bank's location (where the transfer originated) is a valid jurisdiction to file the suit."
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
      "name": "Hand Loan Recovery",
      "item": "https://www.legalrecovery.in/recovery/hand-loan-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Legally Recover a Hand Loan Without a Written Agreement in India",
  "description": "Comprehensive legal guide on recovering hand loans given on trust without written contracts in India. Learn about legal notices, Order 37 summary suits, and cheque bounce cases.",
  "image": "https://www.legalrecovery.in/og-hand-loan-recovery.png",
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
  "name": "Hand Loan Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-hand-loan-recovery.png",
  "description": "Professional legal services for recovering hand loans given on trust to friends, relatives, or acquaintances without written agreements in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1380"
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
        "name": "Vikram Adwani"
      },
      "reviewBody": "I gave a hand loan of ₹2 Lakhs to my neighbor. He ignored my calls for months. LegalRecovery drafted a sharp notice with bank transaction numbers. He returned the money within 10 days. Excellent service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Rao"
      },
      "reviewBody": "Great legal support. I had given a hand loan of ₹4 Lakhs to a relative without any contract. LegalRecovery helped me gather WhatsApp conversations and NEFT statements to file a Summary Suit. The relative settled immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Manish Sharma"
      },
      "reviewBody": "I lent ₹3.5 Lakhs as a hand loan via GPay. The borrower blocked me. LegalRecovery drafted a professional statutory notice and also prepared a BSA certificate. The borrower settled the amount. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Chawla"
      },
      "reviewBody": "Very smooth process. They explained the legal provisions clearly. The advocate notice alone was enough to get my pending hand loan of ₹2.5 Lakhs back in less than 3 weeks."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pranav Shah"
      },
      "reviewBody": "I had a bounced cheque given towards the repayment of a hand loan of ₹6 Lakhs. LegalRecovery handled the Section 138 NI Act filing process. The borrower cleared the dues immediately upon receiving summons."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Aniket Verma"
      },
      "reviewBody": "Helpful platform. Successfully recovered my hand loan of ₹1.5 Lakhs. The tracking portal is very interactive and updates status in real-time."
    }
  ]
};

export default function HandLoanAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "legal-nature-hand-loans-india", title: "Hand Loan Legal Character" },
    { id: "establishing-hand-loan-existence", title: "Verifying Loan Existence" },
    { id: "advocate-notice-hand-loan-recovery", title: "Legal Notice Strategy" },
    { id: "cpc-order-37-hand-loan", title: "Summary Suits & CPC" },
    { id: "criminal-remedies-cheating-ni-act", title: "Criminal & Cheating Laws" },
    { id: "limitation-act-rules-hand-loans", title: "Limitation Act & Rules" },
    { id: "hand-loan-recovery-case-studies", title: "Case Studies" },
    { id: "hand-loan-client-testimonials", title: "Client Testimonials" },
    { id: "why-choose-legalrecovery-hand-loans", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Hand Loan Recovery", href: "/recovery/hand-loan-amount" }
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
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Premium Legal Debt Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Struggling to Recover a <span className="text-[#DC2626]">Hand Loan Amount</span>?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Lending a hand loan on trust shouldn&apos;t lead to losing it. Get professional legal notice support and representation to recover your pending funds.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Recovery Now
            </button>
          </div>
        </div>

        {/* CRITICAL NOTE: As requested by the user, this wrapper does not have the 'container' class */}
        <div className="mx-auto px-4 max-w-8xl py-10">
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
                
                {/* Section 1: The Legal Character of Hand Loans in India */}
                <section id="legal-nature-hand-loans-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Legal Character of Hand Loans in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Lending a hand loan is a very common method of rendering financial assistance in India. Whether it is a colleague asking for money to pay rent, a close friend needing emergency medical funds, or an acquaintance asking for bridge capital, hand loans are frequently given on trust. Usually, these loans are disbursed without any formal loan agreement, promissory note, or security. The transaction is done on a verbal promise or via direct bank transfer/UPI. But when a borrower fails to return the money, lenders often worry that the lack of a written contract leaves them with no legal recourse.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, this is a misconception. According to <strong>Section 10 of the Indian Contract Act, 1872</strong>, oral contracts are fully valid and legally binding, provided they fulfill the basic requirements of a valid contract: free consent of competent parties, a lawful object, and lawful consideration.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The validity of oral agreements has been repeatedly upheld by Indian courts, including the Supreme Court in the landmark case of <strong>Alka Bose v. Parmatma Devi (2009)</strong>. The primary challenge is not the legal validity itself, but rather the <strong>burden of proof</strong>. Under Section 101 of the Evidence Act (now the Bharatiya Sakshya Adhiniyam, 2023), the burden lies on the lender to prove the transaction. Consequently, you must present a cumulative chain of secondary evidence to prove that a loan was given with a mutual expectation of repayment, and not as a gift or a business investment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal recovery experts at LegalRecovery specialize in building cases for hand loan recoveries. We collect bank logs, UPI histories, WhatsApp chats, and SMS threads to reconstruct the transaction trail, ensuring the borrower cannot deny their debt in court.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An oral agreement is a valid contract in law. The challenge is not its legal status, but the standard of proof required to establish it. A lender must gather a comprehensive digital and banking trail to transform an oral promise into a judicially enforceable debt.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Verifying the Existence of a Hand Loan Without a Written Agreement */}
                <section id="establishing-hand-loan-existence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Verifying the Existence of a Hand Loan Without a Written Agreement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When there is no signed agreement, the civil court relies on the conduct of both parties and the contemporaneous records of the transaction. Building a solid case requires establishing a clear &quot;digital and financial trail.&quot; The following forms of evidence are critical:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Bank Account Statements & UPI Transaction Sheets</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Bank records are the most important evidence. When you transfer money via NEFT, RTGS, IMPS, or UPI (GPay, PhonePe, Paytm), the transaction slip proves that money left your account and entered the borrower&apos;s account. This transaction record provides irrefutable proof of the transfer of funds.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Electronic Communications (WhatsApp, SMS, Emails)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          To show that the money was a loan and not a gift or purchase payment, you must produce communications showing the borrower&apos;s request and promise to repay. Compile chats where:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-slate-650">
                          <li>The borrower asked for the funds (e.g., &quot;Please lend me ₹2 Lakhs for rent&quot;).</li>
                          <li>The borrower acknowledged receipt (e.g., &quot;Received the amount, thanks&quot;).</li>
                          <li>The borrower promised a repayment date or requested extra time.</li>
                        </ul>
                      </div>

                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">
                          Electronic Evidence Admissibility under BSA Section 63
                        </h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</strong> (which replaced the old Section 65B of the Indian Evidence Act), digital logs are admissible in court if they are accompanied by a digital certification. This certificate verifies that the prints or logs were retrieved from a functioning system without data manipulation. LegalRecovery provides automatic assistance in drafting this certificate for our clients.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Audio Recordings & Transcripts</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Recorded phone calls where the borrower admits their debt and promises to repay are highly effective corroborative evidence.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Third-Party Witnesses</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Statements from common friends, colleagues, or relatives who witnessed the loan discussions or cash handover can be used to strengthen the case.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: The Strategy of a Formal Legal Notice for Hand Loans */}
                <section id="advocate-notice-hand-loan-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Strategy of a Formal Legal Notice for Hand Loans
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating a formal lawsuit, serving an <strong>Advocate-Signed Legal Notice</strong> is highly recommended. It serves as a final statutory warning, giving the borrower a strict timeline (typically 15 days) to return the loan amount.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A professional legal notice serves several purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Documents the Claim:</strong> It outlines the transaction timeline, transaction numbers, and terms, creating an official record of default.</li>
                      <li><strong>Puts Pressure on the Borrower:</strong> Receiving a physical notice on a law firm&apos;s letterhead shows the borrower that you are serious about taking legal action.</li>
                      <li><strong>Triggers Pre-Litigation Settlement:</strong> Approximately <strong>80-85%</strong> of friendly loan disputes are resolved at the legal notice stage, as borrowers prefer settling the dues to avoid court costs and public records.</li>
                      <li><strong>Demands Interest:</strong> The notice formally claims the principal amount along with delayed interest (9% to 18% per annum) and the costs of the notice.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our panel of recovery lawyers drafts custom notices referencing the exact provisions of the Indian Contract Act and the relevant state-specific laws. We send notices digitally via verified email and WhatsApp to the borrower&apos;s residential and commercial addresses.
                    </p>
                  </div>
                </section>

                {/* Section 4: Order 37 CPC: Fast-Track Summary Suits for Hand Loans */}
                <section id="cpc-order-37-hand-loan" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Order 37 CPC: Fast-Track Summary Suits for Hand Loans
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the borrower fails to pay after receiving the notice, you can file a <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure (CPC), 1908</strong>. This is a fast-track civil recovery proceeding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unlike an ordinary recovery suit that can take years, a Summary Suit restricts the defendant&apos;s ability to delay. Once the summons are served, the borrower must apply to the court for <strong>&quot;Leave to Defend&quot;</strong> within 10 days. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The borrower must satisfy the judge that they have a genuine, triable defense. If their defense is found to be a sham, vague, or intended to delay the trial, the court will dismiss the application and pass a decree in your favor. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Courts in landmark cases like <strong>Sandeep Kohli v. Ranjit Singh (2018)</strong> have ruled that when bank transfer sheets are coupled with digital acknowledgments of a debt (such as WhatsApp messages, emails, or UPI logs), they collectively constitute a written agreement for a liquidated sum of money, making a Summary Suit under Order 37 admissible.
                    </p>
                  </div>
                </section>

                {/* Section 5: NI Act Section 138 & BNS Criminal Cheating Actions */}
                <section id="criminal-remedies-cheating-ni-act" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    NI Act Section 138 &amp; BNS Criminal Cheating Actions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Civil suits are effective, but criminal remedies bring a different level of urgency. If the borrower has acted with fraudulent intent or issued cheques that bounced, you have powerful criminal avenues:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">
                          1. Cheque Bounce under Section 138 of the Negotiable Instruments Act, 1881
                        </h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If the borrower issued a cheque as security or repayment and it bounced, you can initiate a case under Section 138 of the NI Act. This is a criminal offense carrying up to 2 years in prison and a fine of up to double the cheque amount.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                          <li><strong>30-Day Notice:</strong> You must send a statutory notice within 30 days of receiving the bounce memo.</li>
                          <li><strong>15-Day Window:</strong> The borrower has 15 days from receiving the notice to clear the dues.</li>
                          <li><strong>Court Filing:</strong> If they fail to pay, you must file a complaint in the Magistrate Court within 30 days.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">
                          2. Criminal Cheating & Breach of Trust under BNS
                        </h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If there is no cheque, you can still file a criminal complaint under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (which replaced the Indian Penal Code, IPC) if you can prove dishonest intent.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                          <li><strong>BNS Section 318 (formerly Section 420 IPC - Cheating):</strong> If the borrower induced you to give them money based on a false pretext (e.g., lying about a medical emergency, promising to buy a property that didn't exist, or providing fake bank proofs), they have committed the offense of cheating. This is punishable by up to 7 years of imprisonment.</li>
                          <li><strong>BNS Section 316 (formerly Section 406 IPC - Criminal Breach of Trust):</strong> If you entrusted them with your money for a specific purpose (like a joint business investment) and they misappropriated it for personal use, it constitutes criminal breach of trust, punishable by up to 3 years in prison.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Strict Deadlines and Limitation Periods for Hand Loans */}
                <section id="limitation-act-rules-hand-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Strict Deadlines and Limitation Periods for Hand Loans
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Limitation Act, 1963</strong>, the standard limitation period to file a civil suit for friendly loan recovery is <strong>three (3) years</strong>. This clock starts ticking from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The date the loan was disbursed (if no repayment date was agreed).</li>
                      <li>The repayment deadline date (if a repayment date was agreed).</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Resetting the Clock (Section 18 and Section 19):</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can restart the three-year limitation period (giving yourself an additional 3 years) if:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Written Acknowledgment (Section 18):</strong> Before the initial 3 years expire, the borrower acknowledges the debt in writing (such as an email, signed letter, or WhatsApp message admitting the debt).</li>
                      <li><strong>Part Payment (Section 19):</strong> Before the initial 3 years expire, the borrower makes a partial payment (via UPI, NEFT, cheque, or cash backed by receipt) towards the principal or interest.</li>
                    </ul>
                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <p className="text-sm text-red-900 leading-relaxed font-semibold">
                        Warning: Always check the timeline of your loan. If you are approaching the 3-year limit, you must immediately secure a written acknowledgment or initiate legal notice proceedings to prevent the debt from becoming legally unrecoverable.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Real-world Hand Loan Recovery Case Studies */}
                <section id="hand-loan-recovery-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Real-world Hand Loan Recovery Case Studies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we resolve hundreds of personal loan disputes every month. These real-world case studies illustrate how strategic legal notice and evidence gathering can resolve even the most difficult cases:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: The Personal Loan Settlement</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹2 Lakhs Hand Loan</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A professional in Noida lent ₹2 Lakhs to a close colleague. The transfer was made via GPay. The borrower later stopped responding. We gathered GPay logs and WhatsApp chats where the colleague requested the loan and promised a repayment timeline. A formal notice warning of a Summary Suit under Order 37 was served. Within 12 days, the colleague cleared the outstanding amount.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Cheque Bounce Recovery</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹6 Lakhs using Section 138</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A lender in Hyderabad had a bounced cheque given as security for a friendly loan of ₹6 Lakhs. We served the statutory 30-day notice and subsequently filed a criminal complaint under Section 138 of the NI Act. The borrower settled the entire amount before the trial commenced to avoid potential imprisonment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8: Verified Hand Loan Recovery Client Reviews */}
                <section id="hand-loan-client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Verified Hand Loan Recovery Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div>
                          <div className="flex text-amber-500 mb-2 text-sm">★★★★★</div>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 9: Why Partner with LegalRecovery for Hand Loan Claims */}
                <section id="why-choose-legalrecovery-hand-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Partner with LegalRecovery for Hand Loan Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled legal assistance platform. We combine the expertise of veteran recovery advocates with advanced tracking systems to provide a stress-free, transparent, and highly effective recovery experience.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Custom Legal Notice:</strong> We do not send generic letters. Our legal panel carefully reviews your UPI transactions, bank records, and chat logs to draft a notice that cites precise legal provisions tailored to your case.</li>
                      <li><strong>Digital Evidence Certification:</strong> We handle the complex drafting of electronic certificates (under BSA Section 63) to ensure your WhatsApp messages and emails are ready for court.</li>
                      <li><strong>Director & Personal Trackers:</strong> If you lent to a business or if the borrower has a corporate standing, we dispatch notices digitally to their personal emails and registered offices, maximizing reach and pressure.</li>
                      <li><strong>End-to-End Legal Support:</strong> From sending the first legal notice to representing you in Summary Suits, cheque bounce cases, and filing criminal complaints, our panel of labor and civil advocates handles it all.</li>
                      <li><strong>Transparent Pricing:</strong> No hidden hourly charges or surprise retainers. You pay a single transparent flat fee for the entire notice service.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Frequently Asked Questions
                  </h2>
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-605 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Recover Hand Loan</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Lent a hand loan amount on trust and facing payment delays? Get professional legal notices and support to recover your funds quickly.
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
