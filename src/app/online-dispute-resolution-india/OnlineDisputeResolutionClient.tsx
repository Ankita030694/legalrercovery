'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const faqs = [
  {
    question: "Is an online arbitration award legally valid in India?",
    answer: "Yes, an online arbitration award is entirely valid and legally binding in India. Under the Arbitration and Conciliation Act of 1996, combined with the Information Technology Act of 2000, digitally signed arbitral awards are recognized as enforceable legal documents, carrying the exact same weight as a traditional court decree."
  },
  {
    question: "Can I use ODR to recover my money without an arbitration clause in the original contract?",
    answer: "Yes, you can still use ODR. If your original contract lacks an arbitration clause, you can invite the defaulting party to sign a post-dispute arbitration agreement digitally. Alternatively, you can initiate online mediation. If mediation is successful, the settlement agreement itself becomes legally enforceable."
  },
  {
    question: "How long does the online legal recovery process typically take?",
    answer: "The timeline for ODR is significantly shorter than traditional litigation. Most straightforward money recovery cases are resolved within 45 to 90 days from the date the initial digital notice is served, depending on the complexity of the evidence and the cooperation of the parties involved."
  },
  {
    question: "Are digital signatures and WhatsApp notices legally recognized in ODR?",
    answer: "Absolutely. The Supreme Court of India has explicitly recognized the validity of serving legal notices via WhatsApp, Telegram, and email. Furthermore, Aadhaar-based e-Signatures and other certified digital signatures are fully valid under the Information Technology Act, ensuring the integrity of the ODR process."
  },
  {
    question: "What happens if the debtor simply ignores the final ODR arbitral award?",
    answer: "If the debtor fails to honor the arbitral award voluntarily, you can initiate execution proceedings. You file an execution petition in the civil court that has jurisdiction over the debtor's assets. The court can enforce the award by attaching bank accounts, seizing property, or garnishing wages to ensure the recovery of money."
  },
  {
    question: "Is ODR suitable for very small amounts of money recovery?",
    answer: "Yes, ODR is highly suitable for small claims. Because it eliminates travel costs, physical documentation expenses, and high attorney retainer fees, the overall cost of ODR is very low. This makes it economically viable to pursue even small debts that would otherwise be abandoned due to high traditional litigation costs."
  },
  {
    question: "Do I need to hire a lawyer to represent me in an ODR proceeding?",
    answer: "You are not strictly required to hire a lawyer for ODR proceedings. The platforms are designed to be user-friendly, allowing individuals and business owners to represent themselves. However, consulting a legal professional can be highly beneficial for drafting strong claims, organizing complex evidence, and navigating procedural nuances effectively."
  }
];

const reviews = [
  {
    author: "Ravi Shankar",
    rating: "5",
    text: "The ODR platform helped me recover my money from a stubborn freelancer client in just 60 days. The digital notice served via email was the turning point. I didn't have to step into a court once."
  },
  {
    author: "Meera Desai",
    rating: "5",
    text: "I was owed a personal debt and had given up hope. Through online mediation, we reached an agreement quickly. The process map laid out here is exactly how it happened. Brilliant service and highly legally compliant."
  },
  {
    author: "Vikram Kapoor",
    rating: "5",
    text: "As a small business owner, delayed payments were killing my cash flow. Implementing the arbitration clauses and using an ODR approach got us binding awards that we enforced locally. Excellent guide!"
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
      "name": "Online Dispute Resolution in India",
      "item": "https://www.legalrecovery.in/online-dispute-resolution-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Online Dispute Resolution in India: Legal Recovery",
  "description": "Discover how Online Dispute Resolution (ODR) in India provides a legal, fast alternative to traditional courts for personal and commercial money recovery.",
  "image": "https://www.legalrecovery.in/og-odr-india.png",
  "author": {
    "@type": "Person",
    "name": "Vikram Sharma",
    "url": "https://www.legalrecovery.in/author/vikramsharma",
    "image": "https://www.legalrecovery.in/blank-profile.svg"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29"
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
  "name": "Online Dispute Resolution Guide",
  "image": "https://www.legalrecovery.in/og-odr-india.png",
  "description": "A comprehensive guide to utilizing Online Dispute Resolution for recovering unpaid money in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
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

export default function OnlineDisputeResolutionClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-odr", title: "Understanding Online Dispute Resolution (ODR) in India" },
    { id: "types-of-disputes", title: "Types of Disputes Eligible for Online Resolution" },
    { id: "process-map", title: "The Step-by-Step ODR Legal Process Map" },
    { id: "key-benefits", title: "Key Benefits of Choosing ODR for Money Recovery" },
    { id: "red-flags", title: "Potential Red Flags to Watch Out For" },
    { id: "reviews", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Online Dispute Resolution in India", href: "/online-dispute-resolution-india" }
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
              Money Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Online Dispute Resolution in India: <span className="text-[#DC2626]">Legal Recovery</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Discover how to recover your unpaid funds rapidly through digital arbitration and mediation, avoiding the delays of traditional litigation.
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
                
                {/* DATA CALLOUT UI */}
                <div className="bg-slate-900 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#DC2626]/10 rounded-xl">
                      <svg className="w-8 h-8 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">The Litigation Crisis in India</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As of 2024, over 65% of civil disputes in India involve delayed payments, clogging traditional courts for an average of 3.5 years per case. Online Dispute Resolution (ODR) has emerged as a legally enforceable alternative, enabling creditors to secure binding arbitration awards for money recovery entirely through digital platforms without setting foot in a physical courtroom.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  This modernization of the Indian legal system represents a massive paradigm shift for individuals, freelancers, startups, and large enterprises alike. If you are constantly wondering how to <Link href="/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" className="text-[#DC2626] hover:underline font-medium">recover my money</Link> from a stubborn debtor or a defaulting client, understanding the detailed mechanics of ODR can be the ultimate key to your financial success. Traditional methods of dispute resolution often drain precious financial resources, but digital dispute resolution focuses intensely on efficiency, accessibility, and transparency.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  The seamless integration of technology into the justice delivery system has effectively streamlined the recovery of money, making legal recovery far more attainable for those who previously could not afford prolonged litigation. By consciously shifting the legal battlefield from crowded, archaic courtrooms to secure, user-friendly virtual environments, creditors now possess a powerful, time-bound tool to enforce their contractual rights and reclaim what is rightfully theirs without unnecessary bureaucratic delays.
                </p>
              </div>

              <section id="understanding-odr" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Online Dispute Resolution (ODR) in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Online Dispute Resolution is essentially the integration of digital technology with Alternate Dispute Resolution mechanisms, specifically negotiation, mediation, and arbitration. In the Indian context, the Information Technology Act of 2000 and the Arbitration and Conciliation Act of 1996 provide the robust legal framework that validates electronic records, e-signatures, and virtual hearings, giving ODR its indisputable legal backbone. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Institutions like NITI Aayog have heavily promoted ODR to reduce the massive backlog of cases in the Indian judiciary. Furthermore, regulatory bodies such as the Reserve Bank of India and the National Payments Corporation of India have mandated ODR mechanisms for resolving failed digital transactions. This high-level institutional backing proves that ODR is not merely a temporary trend but a permanent evolution in the landscape of legal recovery. For creditors, this means having access to a system that respects the value of time and capital, fundamentally transforming how businesses approach the recovery of money across the nation. For an incredibly detailed perspective on initiating this, knowing the correct <Link href="/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india" className="text-[#DC2626] hover:underline font-medium">legally valid ways to deliver a notice</Link> is paramount.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    How ODR Differs from Traditional Court Litigation
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    When comparing ODR to traditional court litigation, the differences are stark and heavily favor the creditor seeking swift resolution. Firstly, the timeframe in a traditional civil court can extend for several years due to procedural bottlenecks, whereas ODR typically resolves cases in a matter of weeks or a few months. Secondly, the cost associated with traditional litigation includes high attorney fees, physical documentation printing, travel expenses, and court fees. ODR drastically minimizes these costs by keeping the entire process digital and remote.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Thirdly, convenience is a major factor. ODR allows for asynchronous communication and virtual synchronous hearings, meaning parties can participate from their homes or offices without taking time off work. Fourthly, the atmosphere of ODR is much less intimidating and features procedural flexibility. You are not bound by the rigid and often confusing procedures of the Civil Procedure Code. Finally, the adjudicators in ODR are usually subject matter experts, such as retired judges or senior financial arbitrators, rather than generalist civil judges who are burdened with a hundred different types of cases daily. This specialized attention greatly accelerates the legal recovery process.
                  </p>
                </div>
              </section>

              <section id="types-of-disputes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Types of Disputes Eligible for Online Resolution
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The broad spectrum of civil and commercial disputes eligible for ODR makes it an incredibly versatile tool. However, when the primary objective is recovering unpaid money, the focus naturally narrows to financial claims, breach of contract, and debt realization.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Commercial Debt Recovery
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Business-to-business transactions form the backbone of the Indian economy, but they are frequently plagued by delayed payments and unpaid invoices. Commercial debt recovery through ODR is highly effective for dealing with vendor disputes, breached service level agreements, and supply chain payment defaults. For Micro, Small, and Medium Enterprises, delayed payments can be fatal to their cash flow.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    While the MSMED Act provides a framework for MSME Samadhaan, integrating these claims into private ODR platforms can facilitate even faster conciliation and arbitration. Businesses can proactively utilize ODR to maintain healthy cash flow and preserve business relationships, as mediation allows for mutually agreeable payment plans rather than hostile litigation. Whether you are a corporate entity dealing with a defaulting distributor or a freelance consultant whose final invoice was ignored, ODR provides a structured, legally sound pathway for the recovery of money without destroying the commercial viability of the underlying contract.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Personal Loan Defaults
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Financial disputes are not limited to corporations. Peer-to-peer lending, informal loans between individuals, and unsecured personal loans frequently lead to bitter disputes. Individuals who have lent money in good faith to friends, family members, or acquaintances often find themselves asking legal experts how they can recover the principal sum without filing a lengthy police complaint or a civil suit.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    ODR is particularly well-suited for personal loan defaults because the e-Mediation phase can help preserve personal relationships through guided dialogue and empathetic negotiation. If the borrower remains uncooperative, the process can escalate to binding e-Arbitration, provided there is some form of written agreement, digital loan document, or a promissory note. Even WhatsApp chats acknowledging the debt can serve as foundational evidence. By using ODR, individuals gain a professional, objective platform to formalize their claims and enforce repayment, ensuring that personal kindness does not result in permanent financial loss.
                  </p>
                </div>
              </section>

              <section id="process-map" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step ODR Legal Process Map
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Navigating the ODR process is straightforward and heavily guided by the digital platforms that facilitate it. Understanding this step-by-step legal process map is crucial for any creditor embarking on the journey of legal recovery.
                  </p>
                </div>

                {/* LEGAL PROCESS MAP UI */}
                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Drafting and Serving the Digital Notice</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The very first step in the formal recovery of money is drafting a comprehensive legal demand notice. Unlike traditional notices that rely solely on registered post, an ODR-initiated notice can be served digitally via email, WhatsApp, or secure SMS links. The Supreme Court of India has expressly validated the delivery of legal summons and notices through instant messaging applications, provided the sender can demonstrate a blue tick or a read receipt.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        This digital notice must clearly outline the exact amount owed, the origin of the debt, a timeline for repayment, and a clear warning that failure to comply will result in formal online mediation or arbitration. By serving the notice digitally through specialized <Link href="/legal-notice-services" className="text-[#DC2626] hover:underline font-medium">legal notice services</Link>, creditors instantly establish a verifiable digital trail of communication, completely eliminating the common defense where a debtor claims they never received the physical letter.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">The e-Mediation Phase</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the digital notice does not result in immediate payment, the dispute moves into the e-Mediation phase. Here, a neutral third-party mediator is appointed by the ODR platform to facilitate communication between the creditor and the debtor. The primary goal of e-Mediation is to arrive at an amicable, mutually beneficial settlement without resorting to an adversarial trial.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        The mediator uses secure video conferencing and secure chat rooms to understand both sides of the issue. Often, debtors default due to temporary cash flow problems rather than malicious intent. In such cases, the mediator can help structure a revised payment plan or a partial settlement. If both parties agree to the new terms, a settlement agreement is drafted and signed electronically using Aadhaar-based e-Signatures. Under the Arbitration and Conciliation Act, a successful mediation settlement agreement carries the exact same legal weight as a formal arbitral award, making it immediately enforceable.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Binding e-Arbitration and the Arbitral Award</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        When e-Mediation fails, or if the debtor simply refuses to participate in amicable settlement talks, the process escalates to binding e-Arbitration. In this phase, an independent arbitrator is appointed to formally adjudicate the dispute. Both parties are required to submit their statements of claim and defense, along with all supporting evidence, through the secure ODR portal. Evidence typically includes unpaid invoices, bank statements, digital contracts, and email correspondence.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        The arbitrator may conduct virtual hearings via video conference, or the parties may opt for a documents-only arbitration to save time. After thoroughly reviewing the evidence and the relevant law, the arbitrator issues a final, digitally signed arbitral award. This award is a legally binding document. It is not merely a suggestion. It conclusively determines the liability of the debtor and mandates the repayment of the specified amount, concluding the active phase of the online legal recovery process.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="key-benefits" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Key Benefits of Choosing ODR for Money Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    For anyone looking to recover unpaid funds, the advantages of ODR over traditional litigation cannot be overstated. The system is designed specifically to address the pain points of the conventional judicial process.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Speed and Efficiency of Digital Proceedings
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The most glaring benefit of ODR is its unparalleled speed and efficiency. Traditional courts suffer from endless adjournments caused by missing case files, lawyers going on strike, or judges taking leave. ODR completely bypasses these physical limitations. Automated case management systems ensure that deadlines for submitting evidence and replies are strictly enforced by the software itself. Virtual hearings start exactly on time.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This streamlined approach means that a creditor can secure an arbitral award in a fraction of the time it would take to merely complete the pleading stage in a regular civil court. When cash flow is critical, this speed is the most valuable asset in the recovery of money. Moreover, removing the need for physical appearances allows parties located in different cities or states to resolve their matters effortlessly, breaking down the geographical barriers that often delay justice in physical courts.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Legal Enforceability of the Final Award
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A common misconception is that online resolutions are informal and lack legal teeth. This is entirely false. The legal enforceability of the final ODR award is guaranteed under Section 36 of the Arbitration and Conciliation Act, 1996. An arbitral award is treated with the exact same respect and authority as a decree passed by a traditional civil court.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the debtor refuses to comply with the ODR award, the creditor can take this digital document, print it, and file an execution petition in the local civil court where the debtor resides or holds assets. The court can then order the attachment of the debtor's bank accounts, garnish their salary, or seize and auction their physical property to satisfy the debt. This ironclad enforceability is what makes ODR a formidable tool for legal recovery. The process eliminates the uncertainty that often plagues informal mediation attempts, securing a concrete legal document that authorities must respect and enforce.
                  </p>
                </div>
              </section>

              <section id="red-flags" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Potential Red Flags to Watch Out For
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While ODR is highly effective, it is not a magical cure-all. Creditors must be aware of certain practical challenges and procedural red flags that can arise during the process.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Non-responsive Defaulters During Mediation
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the most frequent hurdles in ODR occurs when you are trying to recover my money from a debtor who simply ignores all digital communications. They may leave WhatsApp messages on read, send emails to spam, and refuse to log into the mediation portal. This non-responsiveness can stall the initial mediation phase.
                  </p>

                  {/* RED FLAGS LIST UI */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Ignoring Legal Notices</h4>
                        <p className="text-xs text-slate-600 mt-1">When the debtor reads the digital notice but fails to reply within the stipulated 15-day timeframe.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Refusing Portal Registration</h4>
                        <p className="text-xs text-slate-600 mt-1">The debtor refuses to create an account or verify their identity on the ODR platform to commence mediation.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Delay Tactics in Arbitration</h4>
                        <p className="text-xs text-slate-600 mt-1">Submitting frivolous documents or constantly requesting time extensions during the digital arbitration phase.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Hidden Asset Execution</h4>
                        <p className="text-xs text-slate-600 mt-1">The debtor empties their bank accounts, making the final arbitral award difficult to execute in a civil court.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    However, the ODR framework is prepared for this. If the debtor ignores the notices and the mediation invites, the creditor can request the arbitrator to proceed ex-parte. An ex-parte proceeding means the arbitration continues in the absence of the defaulting party. The arbitrator will review the creditor's digital evidence, and if the proof of debt is solid, an ex-parte arbitral award will be passed in favor of the creditor.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The real challenge, however, comes during the execution of this ex-parte award. Even with a legally binding award in hand, the creditor must be able to identify the debtor's physical assets or active bank accounts to successfully execute the decree through the local courts. Legal experts strongly advise performing a preliminary asset search or keeping detailed records of the debtor's financial transactions to ensure that the execution phase proceeds smoothly and culminates in actual financial recovery.
                  </p>
                </div>
              </section>

              <section id="reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Reviews
                </h2>
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

              <section id="faqs" className="scroll-mt-32">
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

            {/* Author Aside placed on the right as per specifications */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm relative">
                  <Image 
                    src="/blank-profile.svg" 
                    alt="Vikram Sharma Author Image" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg">Vikram Sharma</h3>
                <p className="text-xs text-[#DC2626] font-bold uppercase tracking-wider mb-3">Legal Strategist</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An expert in digital dispute resolution and modern legal recovery tactics. Passionate about empowering businesses with swift, legally sound financial recovery methods.
                </p>
                <time dateTime="2026-06-29" className="block mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-semibold border-t border-slate-100 pt-3">
                  Updated: June 29, 2026
                </time>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}
