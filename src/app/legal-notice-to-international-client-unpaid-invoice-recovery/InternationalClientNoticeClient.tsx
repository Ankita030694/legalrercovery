'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can an Indian advocate send a valid legal notice to a company based in the US or UK?",
    answer: "Yes. An Indian advocate can send a formal legal demand notice to any foreign entity. While the advocate cannot physically practice law in the foreign country, the notice serves as a formal declaration of dispute and a precursor to initiating international arbitration or filing a civil suit based on the governing law of the contract."
  },
  {
    question: "What if we did not sign a formal contract, but agreed to the project over email or Slack?",
    answer: "Under the Indian Contract Act and international commercial principles, a formal stamped document is not strictly necessary. Written communication over email, Slack, or Upwork confirming the scope of work, the payment terms, and the delivery of the final assets constitutes a legally binding and enforceable contract."
  },
  {
    question: "The foreign client is ignoring my emails. How do I serve the legal notice?",
    answer: "For international clients, serving a legal notice via formal corporate email to their directors or legal department is standard practice and legally recognized. You can also send a physical copy via international registered courier (like DHL or FedEx) to their registered corporate headquarters, ensuring you retain the delivery tracking receipt."
  },
  {
    question: "Which country laws apply if we did not specify a 'Governing Law' in our agreement?",
    answer: "If the contract is silent on jurisdiction, the principles of Private International Law apply. Generally, if the service provider (you) performed the bulk of the work from India, Indian courts may assume jurisdiction. However, it is always easier to enforce a claim if the contract explicitly names the governing jurisdiction."
  },
  {
    question: "Is it practical to sue a foreign client for a small invoice of three thousand dollars?",
    answer: "Filing a full blown cross border civil suit for small amounts is often not cost effective due to legal fees in foreign jurisdictions. However, sending a strong, legally sound notice drafted by an advocate is very inexpensive and highly effective, as foreign corporations want to avoid the reputational damage and compliance headaches of international disputes."
  },
  {
    question: "Can I use International Commercial Arbitration to recover my money?",
    answer: "Yes, if your contract contains an arbitration clause. International arbitration is generally faster and the resulting awards are highly enforceable globally under the New York Convention, to which most major countries (including the US, UK, and India) are signatories."
  },
  {
    question: "What is the limitation period for recovering dues from an international client?",
    answer: "If Indian law applies, the Limitation Act prescribes a period of three years from the date the invoice became overdue. If foreign law applies, the limitation period varies (for example, breach of written contract in California has a four year limitation). You must act promptly."
  }
];

const reviews = [
  {
    author: "Karthik N.",
    rating: "5",
    text: "A startup in San Francisco ghosted my agency after we delivered a ten thousand dollar software module. We only had Slack messages as proof. I used this guide to have an advocate draft a severe legal notice citing international commercial law. The client paid the full amount via wire transfer three days after receiving the PDF."
  },
  {
    author: "Priya M.",
    rating: "5",
    text: "I was freelancing for a UK client who kept delaying payment for six months, claiming internal audit issues. I finally sent a formal advocate notice to their registered London address. The threat of initiating formal debt recovery proceedings bypassed their accounts team and went straight to the CEO. My invoice was cleared immediately."
  },
  {
    author: "Rohit D.",
    rating: "5",
    text: "Cross border recovery seemed impossible. A client in Dubai stopped replying after taking my design files. By following the evidence checklist here, I compiled all the GitHub logs and emails. The legal notice worked like magic. They realized they could not steal intellectual property across borders without consequences."
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
      "name": "Notice to International Client for Unpaid Invoice",
      "item": "https://www.legalrecovery.in/legal-notice-to-international-client-unpaid-invoice-recovery"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to International Client for Unpaid Invoice & Project Dues",
  "description": "Learn how Indian freelancers and agencies can legally recover unpaid invoices from foreign clients. Draft a cross-border legal notice for breach of contract.",
  "image": "https://www.legalrecovery.in/og-international-client-notice.png",
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
  "name": "Cross-Border Payment Recovery Guide",
  "image": "https://www.legalrecovery.in/og-international-client-notice.png",
  "description": "A comprehensive legal guide detailing how freelancers and IT agencies can enforce contracts and recover unpaid dues from foreign clients across international borders.",
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

export default function InternationalClientNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-cross-border-ghosting-epidemic", title: "The Cross-Border Ghosting Epidemic",
      children: [
        { id: "the-jurisdiction-intimidation-tactic", title: "The Jurisdiction Intimidation Tactic" },
        { id: "the-power-of-the-formal-legal-demand", title: "The Power of the Formal Legal Demand" }
      ]
    },
    { id: "cross-border-evidence-checklist", title: "Cross-Border Evidence Checklist" },
    { id: "drafting-the-international-legal-notice", title: "Drafting the International Legal Notice" },
    { id: "international-dispute-resolution-timeline", title: "International Dispute Resolution Timeline" },
    { id: "success-stories-reviews", title: "Success Stories & Agency Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Notice to International Client for Unpaid Invoice", href: "/legal-notice-to-international-client-unpaid-invoice-recovery" }
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
              International Commercial Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice for Unpaid <span className="text-[#DC2626]">International Invoices</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Foreign clients often assume they can default on payments to Indian freelancers and IT agencies without consequences due to geographical distance. Learn how to enforce cross border contracts and utilize international legal demands to recover your hard earned money.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  The digital economy has erased borders, allowing Indian freelancers, software developers, and creative agencies to export their highly skilled services globally. However, this borderless economy presents a massive vulnerability: recovering payment when a client sitting five thousand miles away simply stops replying to emails.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The scenario is tragically common. An Indian IT agency signs a contract with a startup based in Delaware or London. The agency dedicates months to building a complex software application, pushing final code commits, and handing over the intellectual property. Upon submitting the final invoice, the communication abruptly halts. The foreign client vanishes, operating under the assumption that the Indian service provider lacks the financial resources to pursue a lawsuit in an American or British court.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  This assumption relies entirely on intimidation by geography. Foreign entities believe they are shielded by complex jurisdictional laws and exorbitant international litigation costs. While it is true that fighting a protracted civil suit in a foreign country is expensive, the initial stages of legal recovery are remarkably cost effective and shockingly successful.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The primary weapon against a defaulting international client is not a lawsuit, but a perfectly engineered legal notice drafted by an advocate. A formal legal demand pierces the shield of distance, forcing the client corporate officers to confront the reality of a formal commercial dispute. To understand the foundational mechanics of demanding unpaid business dues, reading about a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is a highly recommended prerequisite.
                </p>
              </div>

              <section id="the-cross-border-ghosting-epidemic" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Cross-Border Ghosting Epidemic
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Defaulting clients employ specific tactics to avoid payment. Recognizing these tactics helps you build a robust legal strategy rather than succumbing to frustration.
                  </p>

                  <h3 id="the-jurisdiction-intimidation-tactic" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Jurisdiction Intimidation Tactic
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Foreign companies know that you are afraid of their legal system. They assume you cannot afford to hire an attorney in New York or London. When they ignore your polite reminder emails, they are calling your bluff. They are waiting to see if you will escalate the matter formally or simply write off the invoice as a bad debt.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, if you never signed a formal Master Service Agreement (MSA) dictating the governing law, they rely on the ambiguity of the situation. However, under international commercial law, emails and digital chat logs unequivocally establish the existence of a contract. You do not need a fifty page physical document to prove you are owed money.
                  </p>

                  <h3 id="the-power-of-the-formal-legal-demand" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Power of the Formal Legal Demand
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice shatters the illusion of safety. When a foreign CEO or legal department receives a demand notice drafted by an Indian advocate, heavily citing international contract law and threatening to initiate cross border dispute resolution, the calculus changes immediately.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Corporate entities, especially in the US and UK, despise unresolved legal liabilities. A formal notice creates an official legal risk that must be reported to their accounting departments and investors. Suddenly, the cost of paying your invoice is significantly lower than the potential cost of defending an international arbitration claim or dealing with the reputational damage of being labeled a fraudulent business.
                  </p>
                </div>
              </section>

              <section id="cross-border-evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Cross-Border Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Because physical interactions rarely occur in international freelancing, digital evidence is everything. Before instructing your advocate, meticulously compile the following documentation.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. The Contract or Written Agreement</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Provide the Master Service Agreement (MSA), Statement of Work (SOW), or Non Disclosure Agreement (NDA). If no formal contract exists, export the email threads or Upwork/Fiverr chat logs where the scope of work and payment terms (hourly rate or fixed fee) were explicitly agreed upon.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Undeniable Proof of Delivery</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            You must prove you did the work. Compile GitHub commit histories, Google Drive access logs, Jira ticket completions, or emails showing the final design files were delivered to the client and accepted without immediate complaint.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. The Unpaid Invoices</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Provide clear copies of all raised invoices. Ensure these invoices contain your bank routing details (SWIFT code), the exact currency agreed upon (e.g., USD or GBP), and the explicit due date that has now passed.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Foreign Corporate Identity Details</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Locate the exact registered corporate address of the client. In the US, you can find this via the Secretary of State website for the state they are incorporated in (e.g., Delaware). In the UK, use Companies House. A notice sent to a registered legal address cannot be ignored.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    By providing this irrefutable digital paper trail, your advocate can draft a notice that leaves the foreign client with absolutely no room for plausible deniability.
                  </p>
                </div>
              </section>

              <section id="drafting-the-international-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting the International Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    An international legal notice must adopt a highly formal, uncompromising tone. It is not a request; it is a declaration of breach of contract under commercial law.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must meticulously outline the chronological sequence of events: the date of engagement, the specific deliverables provided, the date the final invoice was raised, and the subsequent failure of the client to process the wire transfer. It will explicitly cite the emails or chat logs confirming their satisfaction with the work prior to the ghosting.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Crucially, if the work involved creating software, designs, or content, the notice must include a stern warning regarding Intellectual Property (IP) infringement. It will state that until the invoice is paid in full, the IP rights remain entirely with the Indian freelancer or agency. Any use of the delivered assets by the foreign company constitutes copyright infringement, exposing them to massive statutory damages in their own country. This is often the most terrifying threat for a foreign tech startup.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The demand section will require the immediate transfer of the outstanding USD or GBP amount, plus late payment interest, within a strict 7 to 15 day deadline. It will state that failure to comply will force the initiation of debt recovery proceedings, including international arbitration (if an arbitration clause exists) or reporting the fraudulent conduct to regulatory bodies. To ensure the notice is impeccably drafted and properly formatted for cross border impact, utilizing an <Link href="/send-a-legal-notice" className="text-[#DC2626] hover:underline font-medium">online lawyer to send a legal notice</Link> is highly advised.
                  </p>
                </div>
              </section>

              <section id="international-dispute-resolution-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  International Dispute Resolution Timeline
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Understanding how international disputes escalate provides confidence when dealing with arrogant foreign clients.
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
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: Digital Legal Service</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The advocate sends the legally drafted notice directly to the CEO, CFO, and legal counsel of the foreign company via tracked email and international courier. The sheer formality of a lawyer letter from India usually breaks the silence, resulting in immediate payment to avoid escalation.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 45: Invoking Arbitration (If Applicable)</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the contract contains an arbitration clause (e.g., ICC or LCIA), a formal notice invoking arbitration is sent. International arbitration is a severe threat; the proceedings are expensive, and the resulting award is enforceable against the company assets in almost any country under the New York Convention.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 45 Onwards: IP Takedowns and Debt Collection</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If arbitration is not viable, aggressive alternative tactics are employed. This includes issuing DMCA takedown notices to their hosting providers for utilizing unpaid software or design IP, or transferring the debt to an international commercial collection agency operating in their specific jurisdiction.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Agency Reviews
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
                  Do not let international clients steal your work. We draft severe cross-border legal notices threatening IP litigation to force foreign companies to clear your invoices immediately.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Recover International Dues
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
