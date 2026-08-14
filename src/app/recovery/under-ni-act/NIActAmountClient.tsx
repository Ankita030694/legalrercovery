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
    question: "What legal instruments are governed under the Negotiable Instruments Act, 1881?",
    answer: "The Negotiable Instruments Act, 1881 primarily governs promissory notes, bills of exchange, and cheques. In debt recovery, the most commonly used provisions relate to Section 138 (dishonour of cheques) and Section 4 (promissory notes) to enforce liabilities."
  },
  {
    question: "What is the timeline to send a legal notice after a cheque bounces under the NI Act?",
    answer: "You must send a formal statutory legal notice to the drawer within 30 days of receiving the Cheque Return Memo from your bank. If you fail to send the notice within this 30-day window, you cannot file a criminal complaint under Section 138 of the NI Act."
  },
  {
    question: "How much time does the drawer have to pay after receiving the notice under Section 138?",
    answer: "Under Section 138 of the NI Act, the drawer has exactly 15 days from the date they receive the legal notice to clear the outstanding cheque amount. A criminal offense is committed only if they fail to make the payment within this 15-day window."
  },
  {
    question: "When should I file a criminal complaint in court under the NI Act?",
    answer: "If the borrower does not pay within the 15-day notice period, you must file a criminal complaint in the Magistrate's Court within 30 days starting from the day the 15-day notice period expired (i.e., between day 16 and day 45 from the receipt of the notice)."
  },
  {
    question: "What is Section 143A of the NI Act and how does it help the lender?",
    answer: "Section 143A is a highly effective amendment that allows the court to order the drawer to pay interim compensation to the complainant. This compensation can be up to 20% of the cheque amount and is usually ordered during the trial (at the stage of framing charges) to support the lender during litigation."
  },
  {
    question: "Can I file a civil recovery suit in addition to a Section 138 criminal case?",
    answer: "Yes, you can file a civil recovery suit (specifically a Summary Suit under Order 37 of the CPC) alongside the Section 138 criminal case. They are parallel proceedings: the civil suit is for recovering the money, and the criminal case is for punishing the default."
  },
  {
    question: "Does Section 138 apply if the cheque was given as security?",
    answer: "Yes, the Supreme Court of India has repeatedly ruled that even if a cheque was issued as a security, if there was an active, legally enforceable debt or liability on the date the cheque was presented, Section 138 NI Act is fully applicable."
  },
  {
    question: "What is a Cheque Return Memo, and why is it important?",
    answer: "A Cheque Return Memo is an official document issued by the bank showing the date and the specific reason the cheque bounced (e.g., 'insufficient funds', 'stop payment', 'refer to drawer'). It acts as primary documentary evidence of the dishonor of the cheque."
  },
  {
    question: "Can I file a case if a cheque bounce occurred due to 'signature mismatch'?",
    answer: "Yes, the Supreme Court has ruled that dishonor due to 'signature mismatch' or 'difference in signature' falls within the scope of Section 138, provided the account is active and there was a legally enforceable liability."
  },
  {
    question: "What happens if the borrower resides in a different city? Where do I file the case?",
    answer: "Under the Negotiable Instruments (Amendment) Act, 2015, the case must be filed in the court where the bank branch of the payee (the person who presented the cheque) is located. This makes it highly convenient for you, as you can file the case in your own city."
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
      "name": "Recovery under NI Act",
      "item": "https://www.legalrecovery.in/recovery/under-ni-act"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Outstanding Dues under the Negotiable Instruments Act, 1881: Timelines & Remedies",
  "description": "Comprehensive legal guide on recovering outstanding money under the NI Act in India. Follow step-by-step notice timelines, interim compensation claims, and summary suits.",
  "image": "https://www.legalrecovery.in/og-ni-act-recovery.png",
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
  "name": "NI Act Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-ni-act-recovery.png",
  "description": "Professional legal services for recovering outstanding dues under the Negotiable Instruments Act (Section 138) in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1780"
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
        "name": "Kailash Sharma"
      },
      "reviewBody": "I had a business cheque of ₹12 Lakhs bounce due to 'insufficient funds'. LegalRecovery guided me through the Section 138 timeline, served a notice, and the vendor cleared it before we went to court. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Goel"
      },
      "reviewBody": "A client gave me a post-dated cheque for ₹4 Lakhs that bounced. LegalRecovery's advocate drafted and sent the statutory notice within 10 days of the bounce. The client paid immediately with interest. Highly recommend."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Sen"
      },
      "reviewBody": "I recovered my loan of ₹15 Lakhs through LegalRecovery. They filed both the Section 138 NI Act case and a Summary Suit under CPC Order 37. We also secured 20% interim compensation under Section 143A. Brilliant execution!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arathi Pillai"
      },
      "reviewBody": "Excellent platform. They monitored the post-office tracking of the notice delivery and prepared all filings quickly. The borrower settled the bounced cheque amount of ₹6.5 Lakhs within 15 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ranjeet Singh"
      },
      "reviewBody": "The customer was delaying invoice payments and gave a cheque that bounced. LegalRecovery's notice made them realize the criminal consequences of Section 138. The funds were cleared immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Alok Deshmukh"
      },
      "reviewBody": "Very professional drafting. We sent notices to the company directors as well, which pushed them to clear the bounced cheque of ₹10 Lakhs within three weeks of delivery."
    }
  ]
};

export default function NIActAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "statutory-elements-negotiable-instruments", title: "Legal Foundations" },
    { id: "timelines-provisions-section-138", title: "NI Act Timelines" },
    { id: "advocate-drafted-demand-notice-ni", title: "Notice Strategy" },
    { id: "magistrate-complaint-process", title: "Magistrate Filings" },
    { id: "fast-track-civil-summary-suits", title: "Summary Suits & CPC" },
    { id: "section-143a-interim-relief-penalties", title: "Interim Pay & Penalties" },
    { id: "ni-act-recovery-case-studies", title: "Success Stories" },
    { id: "ni-act-verified-testimonials", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-ni-claims", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Recovery under NI Act", href: "/recovery/under-ni-act" }
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
              Recovery <span className="text-[#DC2626]">Under Negotiable Instruments Act</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Faced with a defaulted cheque or promissory note? Start your recovery campaigns under Section 138 of the NI Act, 1881 and enforce your rights with professional attorney support.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start NI Act Recovery
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
                
                {/* Section 1: Legal Foundations of the Negotiable Instruments Act */}
                <section id="statutory-elements-negotiable-instruments" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Legal Foundations of the Negotiable Instruments Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Negotiable Instruments Act, 1881 is one of the oldest and most important pieces of commercial legislation in India. It regulates the usage of promissory notes, bills of exchange, and cheques. The primary objective of this Act is to facilitate trade, commerce, and banking transactions by providing legal protection and predictability to financial instruments. When a business, customer, or associate fails to honor a cheque or promissory note, it disrupts the trust that holds commerce together.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With the transition of criminal laws in India to the Bharatiya Nyaya Sanhita (BNS) and the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, it is critical to note that Section 138 of the NI Act remains unchanged. Since the NI Act is a specialized Act (lex specialis), its specific provisions and procedures override general criminal laws. This means that case filings, notices, and hearings follow the Negotiable Instruments Act, while procedural steps like the service of summons and warrant execution leverage modern tools outlined in the BNSS, such as electronic summons dispatch.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The statutory framework of Section 138 is designed to protect lenders and creditors. The law applies if a cheque is drawn by a person on an account maintained by them with a banker for payment of any amount of money to another person for the discharge, in whole or in part, of any <strong>legally enforceable debt or other liability</strong>. If the cheque is returned by the bank unpaid because the amount of money standing to the credit of that account is insufficient to honor the cheque or it exceeds the amount arranged to be paid, the drawer is deemed to have committed a criminal offense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel specializes in guiding clients through the complex procedural steps of cheque bounce recoveries. We ensure that your evidence, starting with the Cheque Return Memo, is correctly compiled and that all legal notices are served within the strict timelines mandated by law, maximizing your chances of recovery.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The NI Act provides an effective statutory shield to lenders. Correct application of Section 138, combined with proper notice dispatch timelines, is the key to recovering outstanding dues.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Essential Steps and Timelines under Section 138 NI Act */}
                <section id="timelines-provisions-section-138" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Essential Steps and Timelines under Section 138 NI Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover your money under Section 138, you must strictly follow a set of mandatory, non-negotiable statutory timelines. Missing even a single deadline can invalidate your criminal complaint.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Obtaining the Cheque Return Memo</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          When a cheque is presented and bounces, the clearing bank returns the physical cheque along with a <strong>Cheque Return Memo</strong>. This memo contains the date of presentation, the date of return, and the specific reason for dishonor (e.g., 'insufficient funds'). This return memo is the starting point for your legal action.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Sending the Statutory Notice (Within 30 Days)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          You must send a formal written notice to the drawer within <strong>30 days</strong> of receiving the return memo. The notice must demand the payment of the cheque amount in full.
                        </p>
                      </div>

                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">
                          The 15-Day Payment Window
                        </h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          Once the legal notice is delivered, the borrower has exactly <strong>15 days</strong> to clear the dues. If they pay the full cheque amount within this 15-day window, no offense is committed, and you cannot file a criminal case. However, if they fail to clear the dues by the 15th day, the criminal offense is complete on the 16th day.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Filing the Criminal Case (Within 30 Days)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If the borrower ignores the notice or refuses to pay, you must file a formal criminal complaint in the Magistrate&apos;s Court within <strong>30 days</strong> from the date the 15-day payment window expired.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: The Strategy of a Statutory Legal Notice under the NI Act */}
                <section id="advocate-drafted-demand-notice-ni" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Strategy of a Statutory Legal Notice under the NI Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A statutory legal notice under Section 138 is a formal, advocate-signed document that serves as the mandatory prelude to criminal litigation. The notice must be drafted carefully to include all essential legal details, as any technical flaw can cause the court to reject your subsequent complaint.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal notice must specify:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>The Debt Details:</strong> The background of the transaction and the active, legally enforceable debt or liability for which the cheque was issued.</li>
                      <li><strong>The Cheque Details:</strong> The cheque number, date of issue, drawer details, and the presenting bank details.</li>
                      <li><strong>The Dishonour Details:</strong> The date of bank presentation, the return memo date, and the specific reason for dishonor.</li>
                      <li><strong>The 15-Day Demand:</strong> An explicit demand to pay the exact cheque amount within 15 days of receiving the notice.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our panel of recovery advocates at LegalRecovery drafts custom notices, ensuring that the return memo details, delivery tracking logs, and legal codes are perfectly integrated. We digitally dispatch notices via verified email and WhatsApp to ensure proof of service is officially recorded, which is crucial for proving delivery in court.
                    </p>
                  </div>
                </section>

                {/* Section 4: Procedural Mechanics of Filing a Criminal Case before the Magistrate */}
                <section id="magistrate-complaint-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Procedural Mechanics of Filing a Criminal Case before the Magistrate
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day demand period expires and the borrower has not paid the outstanding amount, a formal criminal complaint must be filed. This is submitted before the Metropolitan Magistrate (in metro cities) or Judicial Magistrate First Class (JMFC) having jurisdiction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Negotiable Instruments (Amendment) Act, 2015</strong>, the territorial jurisdiction is determined by the bank branch where you (the payee) maintain your account and present the cheque. This is highly advantageous, as it allows you to file the case in your own local court rather than traveling to the borrower&apos;s city.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The filing process involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Filing the Complaint:</strong> Submitting the written complaint, along with original documents (the bounced cheque, return memo, copy of legal notice, post dispatch receipt, and delivery confirmation report).</li>
                      <li><strong>Verification:</strong> The Magistrate conducts a verification process, examining your complaint and documents under oath.</li>
                      <li><strong>Summons Issue:</strong> Upon finding a prima facie case, the Magistrate issues summons directing the borrower to appear before the court.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5: Order 37 CPC: Parallel Civil Recovery Remedies */}
                <section id="fast-track-civil-summary-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Order 37 CPC: Parallel Civil Recovery Remedies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 138 action is a criminal proceeding aimed at punishing the drawer. To recover the actual money, you can also initiate parallel civil recovery proceedings. The most effective civil remedy for a bounced cheque is a <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure (CPC), 1908</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is a fast-track civil trial. Unlike a regular civil suit where the borrower can delay hearings for years, Order 37 restricts the borrower&apos;s defense. Upon receiving summons, the borrower must apply for <strong>&quot;Leave to Defend&quot;</strong> within 10 days. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The court will inspect their defense. If it is found to be a sham or a delaying tactic, the court will deny leave and pass a decree in your favor. If conditional leave is granted, the court will order the borrower to deposit the disputed amount in the court registry as a condition to contest the case, giving you significant leverage.
                    </p>
                  </div>
                </section>

                {/* Section 6: Section 143A Interim Compensation and Conviction Penalties */}
                <section id="section-143a-interim-relief-penalties" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Section 143A Interim Compensation and Conviction Penalties
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect the interest of complainants and prevent borrowers from delaying trials, the Negotiable Instruments Act includes provisions for interim relief:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Interim Compensation (Section 143A):</strong> Under this section, the court can order the drawer of the cheque to pay up to <strong>20%</strong> of the cheque amount as interim compensation to the complainant. This is typically ordered at the stage of framing charges. The borrower must pay this amount within 60 days of the court order.</li>
                      <li><strong>Conviction Penalties:</strong> If convicted at the end of the trial, the borrower faces up to 2 years of imprisonment, a fine of up to <strong>double the cheque amount</strong>, or both. The court usually orders the fine amount to be paid directly to the complainant as compensation.</li>
                    </ul>
                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <p className="text-sm text-red-900 leading-relaxed font-semibold">
                        Note: Section 143A is highly effective in pushing borrowers to settle during the trial, as they are forced to pay 20% of the disputed amount upfront before the case is even decided.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Real-world NI Act Recovery Case Studies */}
                <section id="ni-act-recovery-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Real-world NI Act Recovery Case Studies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we resolve hundreds of NI Act disputes every month. These real-world case studies illustrate how strategic legal notice and evidence gathering can resolve even the most difficult cases:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Commercial Debt Resolution</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹10 Lakhs Dues</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A merchant in Mumbai had a cheque of ₹10 Lakhs bounce. We served the statutory 138 notice within 10 days of the bounce. Upon receiving the notice, the client realised the potential criminal liability and cleared the entire amount plus interest within the 15-day window.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Promissory Note Execution</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹7 Lakhs with 20% Interim Relief</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          An individual in Bangalore had a signed promissory note and cheque bounce. We filed a criminal complaint in the Magistrate court. During the trial, the court ordered 20% interim compensation under Section 143A. Facing the requirement to pay ₹1.4 Lakhs upfront and potentially face jail time, the borrower settled the remaining dues.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8: Verified Client Testimonials for NI Act Recoveries */}
                <section id="ni-act-verified-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Verified Client Testimonials for NI Act Recoveries
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

                {/* Section 9: Why Partner with LegalRecovery for NI Act Claims */}
                <section id="why-choose-legalrecovery-ni-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Partner with LegalRecovery for NI Act Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled legal assistance platform. We combine the expertise of veteran recovery advocates with advanced tracking systems to provide a stress-free, transparent, and highly effective recovery experience.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Custom Legal Notice:</strong> We do not send generic letters. Our legal panel carefully reviews your UPI transactions, bank records, and chat logs to draft a notice that cites precise legal provisions tailored to your case.</li>
                      <li><strong>Digital Evidence Certification:</strong> We handle the complex drafting of electronic certificates (under BSA Section 63) to ensure your WhatsApp messages and emails are ready for court.</li>
                      <li><strong>Director & Personal Trackers:</strong> If you lent to a business or if the borrower has a corporate standing, we dispatch notices digitally via email and WhatsApp to their homes and registered offices, maximizing reach and pressure.</li>
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
                <h3 className="text-sm font-black mb-3">Enforce Dues Now</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Struggling to recover dues under the Negotiable Instruments Act? Get professional legal notices and support to recover your funds quickly.
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
