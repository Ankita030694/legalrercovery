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
    question: "What is a legal notice for recovery of money and when should I send it?",
    answer: "A legal notice for recovery of money is a formal, written communication sent by an advocate on behalf of a creditor to a debtor. It serves as a final demand for the settlement of outstanding dues before legal proceedings are initiated. You should send it when a debtor fails to repay a loan, clear an outstanding invoice, settle business dues, or pay for services rendered within the agreed timeline, and verbal or written follow-ups have been ignored."
  },
  {
    question: "Can I draft and send a legal notice for money recovery without a lawyer?",
    answer: "While it is technically possible for an individual to send a demand notice, it is highly recommended to have it drafted and served by a qualified advocate. A notice on an advocate's letterhead carries significant legal weight, uses precise statutory terms (such as citing the Indian Contract Act or CPC Order 37), and creates a formal, court-admissible record. Most debtors take a lawyer's notice much more seriously, resulting in a higher settlement rate."
  },
  {
    question: "What is the time limit (limitation period) for sending a recovery notice in India?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit is generally three (3) years from the date the cause of action arose (e.g., the due date of an invoice, the maturity date of a loan, or the date of last payment). While you can send a legal notice at any time, it is critical to send it and initiate legal action before this 3-year window expires, as the court will not entertain claims filed after the limitation period unless a written acknowledgment of debt resets the clock."
  },
  {
    question: "How does a written acknowledgment of debt affect the limitation period?",
    answer: "Under Section 18 of the Limitation Act, 1963, if a debtor acknowledges their liability in writing (such as via email, WhatsApp, a signed balance confirmation, or a promissory note) before the expiry of the three-year limitation period, a fresh limitation period of three years begins from the date of that acknowledgment. Similarly, a partial payment reflected in your bank statement can reset the clock, giving you more time to initiate recovery."
  },
  {
    question: "What is a Summary Suit under Order 37 of the CPC, and how does it help?",
    answer: "Order 37 of the Code of Civil Procedure (CPC) provides a fast-track civil remedy called a Summary Suit for recovering liquidated debts. It applies to claims based on written contracts, promissory notes, bills of exchange, or invoices. Unlike regular civil suits, the defendant does not have an automatic right to defend; they must apply for 'leave to defend' within 10 days of receiving summons. If their defense is deemed sham or frivolous, the court passes an immediate decree, reducing the trial time from years to months."
  },
  {
    question: "Can I file a criminal case for recovery of money?",
    answer: "Purely civil contractual defaults cannot be converted into criminal cases. However, if the debtor had a dishonest intention to deceive you from the very inception of the transaction (e.g., using fake documents or identity theft), you can file a case for Cheating (Section 318 BNS / 420 IPC). Similarly, if they misappropriated funds lawfully entrusted to them, a charge of Criminal Breach of Trust (Section 316 BNS / 406 IPC) can be pursued. In most cases, civil recovery is accompanied by criminal complaints to build pressure."
  },
  {
    question: "What is the procedure if a cheque given by the debtor bounces?",
    answer: "A bounced cheque is a serious criminal offense under Section 138 of the Negotiable Instruments Act, 1881. You must serve a statutory 30-Day Demand Notice to the debtor within 30 days of receiving the bank's return memo. The debtor has 15 days from the receipt of the notice to clear the payment. If they fail to pay, you must file a criminal complaint in the Magistrate's Court within 30 days from the expiry of the 15-day period. This carries a penalty of up to two years of imprisonment and double the cheque amount."
  },
  {
    question: "Are WhatsApp messages and emails valid evidence for recovering money?",
    answer: "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (previously Section 65B of the Indian Evidence Act), electronic records such as emails, WhatsApp chats, and SMS messages are fully admissible as secondary evidence in Indian courts. They must be accompanied by a signed statutory certificate verifying that the electronic device was functioning properly and that the data has not been tampered with. WhatsApp messages admitting the debt are highly effective."
  },
  {
    question: "Is an oral agreement to lend money legally enforceable in India?",
    answer: "Yes, oral agreements are legally valid under Section 10 of the Indian Contract Act, 1872. However, proving an oral contract in court is challenging. You will need strong corroborative evidence such as bank transaction statements showing the transfer of funds, audio recordings, witness testimonies, or subsequent electronic chats (WhatsApp/emails) where the debtor acknowledges receiving the money and promises to repay it."
  },
  {
    question: "Can I claim interest on the unpaid amount, and what is the legal rate?",
    answer: "Yes, you can claim interest on the outstanding dues. If there is a written agreement specifying an interest rate, the court will generally enforce it. In the absence of a contract clause, you can claim interest under the Interest Act, 1978. For commercial transactions, courts often grant interest ranging from 9% to 18% per annum, while for personal or non-commercial transactions, the standard court rate is usually 6% to 9% simple interest."
  },
  {
    question: "What if the debtor refuses to accept the legal notice or changes their address?",
    answer: "If the legal notice is sent to the debtor's last known correct address via Registered Post or Speed Post, and they refuse to accept it, or the post office returns it as 'refused' or 'unclaimed,' it is legally deemed as 'valid service' under Section 27 of the General Clauses Act, 1897. The court will presume that the notice has been served, and you can proceed with legal action. We also recommend serving the notice digitally via email and WhatsApp to ensure proof of delivery."
  },
  {
    question: "What happens if the debtor does not respond to the legal notice?",
    answer: "If the debtor does not respond or clear the dues within the notice period (usually 15 days), it establishes their silence and lack of defense, which can be used against them in court. The next step is to file a civil recovery suit (like an Order 37 Summary Suit) or file a criminal complaint (for cheque bounce or cheating) depending on the facts of the case. The legal notice acts as the foundation of your lawsuit."
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
      "name": "Legal Notice for Recovery of Money",
      "item": "https://www.legalrecovery.in/legal-notice-for-recovery-of-money"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice for Recovery of Money: Legal Framework, Format, and Procedure in India",
  "description": "A comprehensive legal guide on how to draft and send a legal notice for the recovery of money under Indian law. Learn about Order 37 CPC, Section 138 NI Act, and electronic evidence.",
  "image": "https://www.legalrecovery.in/og-money-recovery-notice.png",
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
  "datePublished": "2026-06-10",
  "dateModified": "2026-06-10"
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
  "name": "Money Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-money-recovery-notice.png",
  "description": "Professional legal drafting and dispatch of legal notices for money recovery in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1240"
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
        "name": "Rajesh Singhania"
      },
      "reviewBody": "A vendor had withheld my payment of 4.5 lakhs for over a year, ignoring my calls. LegalRecovery drafted a highly professional notice. Within 10 days of delivery, the vendor reached out and cleared my entire outstanding amount. Excellent service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Krishnan"
      },
      "reviewBody": "I lent 2 lakhs to a family friend who refused to pay back. The legal notice drafted by their advocate was very detailed and had all the WhatsApp communications attached. They returned the money in two installments. Highly recommended."
    },
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
      "reviewBody": "As an independent consultant, payment defaults by corporate clients are a nightmare. LegalRecovery has helped me send quick notices to three defaulting clients. Two of them paid immediately, and the third agreed to a structured settlement. Truly saves time and money."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Preeti Saxena"
      },
      "reviewBody": "We had a security deposit issue where the business partner backed out and held our advance. The notice sent by LegalRecovery pierced the corporate veil by naming the active directors, which forced them to negotiate and refund our money."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Kumar Mishra"
      },
      "reviewBody": "Very smooth process. Everything from uploading documents to tracking the speed post is automated. The advocate drafted the notice within 24 hours. The debtor paid up the principal along with 12% interest as demanded in the notice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Doshi"
      },
      "reviewBody": "Outstanding legal support. I was skeptical about online legal portals, but LegalRecovery exceeded expectations. The cheque bounce notice they drafted under Section 138 was flawless, and the debtor immediately cleared the dues to avoid court."
    }
  ]
};

export default function LegalNoticeRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction & Legal Significance" },
    { id: "legal-grounds", title: "Statutory Grounds for Notice" },
    { id: "notice-components", title: "Anatomy of an Effective Notice" },
    { id: "dispatch-validity", title: "Dispatch & Electronic Service" },
    { id: "civil-remedies", title: "Civil Litigation & Summary Suits" },
    { id: "criminal-actions", title: "Criminal Action vs Civil Dispute" },
    { id: "limitation-act", title: "Limitation & Debt Acknowledgement" },
    { id: "testimonials", title: "Reviews & Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice for Recovery of Money", href: "/legal-notice-for-recovery-of-money" },
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
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Draft &amp; Send a <span className="text-[#DC2626]">Legal Notice for Recovery of Money</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover outstanding business dues, friendly loans, unpaid invoices, and advance payments. Get expert advocate-drafted notices served via Speed Post and digital channels to secure your money fast.
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
                
                {/* Introduction & Legal Significance */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Introduction &amp; Legal Significance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Financial transactions form the bedrock of both personal relationships and commercial enterprises in India. Whether it is an individual extending a friendly hand loan to a trusted associate, a small-scale entrepreneur delivering raw materials to a purchaser, or a freelancer providing professional consultancy services, the timely return of capital is essential. However, default on financial obligations has become a prevalent issue. In such scenarios, creditors are frequently left with unanswered phone calls, ignored messages, and empty promises. If you find yourself in a position where your hard-earned money is being withheld unlawfully, the first and most critical legal step is to serve a formal <strong>Legal Notice for the Recovery of Money</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is not just an ordinary letter or a standard reminder email. It is a formal, structured, and legally binding communication sent by an advocate on behalf of a client. It serves as a final, statutory warning to the defaulting party (the debtor) that they must clear their outstanding liabilities within a specified time frame (typically 15 to 30 days) or face formal civil and criminal prosecution. The legal notice serves a dual purpose: first, it establishes a clear, undeniable chronological record that the creditor made a formal demand for the repayment of the debt, which is highly scrutinized by judges if the matter escalates to court; second, it exerts serious legal and psychological pressure on the debtor, signaling that the creditor is prepared to invoke the machinery of the state to protect their financial interests.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many creditors make the mistake of jumping directly into litigation or, conversely, waiting indefinitely in the hope that the debtor will voluntarily repay. Both approaches are legally counterproductive. Going straight to court without sending a notice can lead to the court viewing the suit as premature, and it may even result in the judge denying you the recovery of legal costs. On the other hand, delaying too long can result in your claim becoming time-barred under the Limitation Act. The serve of a legal notice acts as a bridge, resolving approximately 80% to 85% of payment defaults out of court. Most individuals and corporate entities prefer to clear undisputed debts immediately rather than bear the exorbitant costs, public embarrassment, and operational disruption of a full-scale legal trial.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This comprehensive guide is dedicated strictly to the general recovery of money. It addresses scenarios involving friendly loans, personal borrowings, commercial invoices, trade receivables, contractor agreements, freelancer payouts, agency retainers, and general contractual defaults. It does not deal with specific niches like landlord-tenant rental deposit recoveries or employment-related salary disputes, which are governed by specialized rental codes and labor departments respectively. At LegalRecovery, our panel of experienced civil and commercial advocates is dedicated to ensuring that your financial claims are backed by rigorous legal drafting, precise statutory citations, and flawless execution to recover every rupee you are owed.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A legal notice is the first arrow in a creditor&apos;s legal quiver. It defines the battleground, establishes the cause of action, and frequently forces the debtor to negotiate, saving both parties from the grueling expense of a prolonged trial.&quot;
                    </div>
                  </div>
                </section>

                {/* Statutory Grounds for Notice */}
                <section id="legal-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Statutory Grounds for Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For a legal notice to be enforceable and carry weight in a court of law, it must be founded on established statutory grounds. You cannot demand money arbitrarily; the claim must arise from a legally recognized relationship or transaction. In India, several statutes define these grounds:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Personal Loans and Promissory Notes</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          Lending money to friends, relatives, or business acquaintances is common. Under the <strong>Indian Contract Act, 1872</strong>, a loan is a contract where one party agrees to deliver a sum of money to another, and the other agrees to return it. If the loan is secured by a <strong>Promissory Note</strong> under Section 4 of the <strong>Negotiable Instruments Act, 1881</strong>, the borrower has given an unconditional, written promise to pay a certain sum of money on demand or at a fixed time. A breach of this promise forms immediate, solid grounds for a recovery notice.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Commercial Transactions and Sale of Goods</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          In business-to-business (B2B) or business-to-consumer (B2C) transactions, goods are often delivered on credit. The <strong>Sale of Goods Act, 1930</strong> establishes that when the property in the goods has passed to the buyer, and the buyer wrongfully neglects or refuses to pay for the goods according to the terms of the contract, the seller may sue them for the price. Unpaid commercial invoices, delivery challans, and purchase orders are potent statutory documents. Under Section 73 of the Contract Act, you are also entitled to claim compensation for any loss or damage caused by the breach.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Service Contracts and Independent Consultancy</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          Freelancers, software developers, marketing agencies, and independent contractors frequently face payment defaults. The relationship is governed by the service agreement or retainer contract. When services are rendered as per the scope of work, and the client accepts the work but refuses to pay, it constitutes a breach of contract. Even in the absence of a written contract, if the services were rendered at the request of the debtor, a claim can be made under the doctrine of <strong>Quantum Meruit</strong> (as much as he has earned) under Section 70 of the Indian Contract Act.
                        </p>
                      </div>
                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">Written vs. Oral Contracts: The Evidentiary Standpoint</h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          Under Section 10 of the Indian Contract Act, 1872, oral contracts are valid and enforceable. However, from an evidentiary standpoint, oral agreements are notoriously difficult to prove in court. They require substantial corroborative evidence, such as independent witness testimonies, bank statements showing the exact debit and credit of funds, and subsequent electronic communication (WhatsApp messages, SMS, or emails) where the debtor admits to the existence of the loan and promises a timeline for repayment. A written contract, loan agreement, or signed promissory note provides absolute clarity, allowing the creditor to file fast-track suits where the court will not permit the debtor to deny the debt easily.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Anatomy of an Effective Notice */}
                <section id="notice-components" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Anatomy of an Effective Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly drafted legal notice is worse than no notice at all. If the notice contains factual inconsistencies, mathematical errors, or lacks key legal provisions, the debtor&apos;s advocate will easily dismantle it in their reply, and it can even harm your case when presented before a judge. A professionally drafted legal notice for money recovery must contain the following core components:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Identities of the Parties:</strong> The notice must clearly state the full name, physical description, and complete residential or registered corporate address of both the sender (the creditor) and the recipient (the debtor). If the debtor is a company, the notice must be addressed to the company itself and also to the active directors who are responsible for its day-to-day operations to establish personal and collective liability.
                      </li>
                      <li>
                        <strong>Factual Chronology &amp; Details:</strong> The body of the notice must outline a clear, date-wise timeline of the transaction. It should specify when the money was lent or when the contract was signed, how the funds were transferred (including bank transaction IDs, cheque numbers, or cash receipts), the terms of repayment agreed upon, and the exact dates on which the default occurred.
                      </li>
                      <li>
                        <strong>Pecuniary Demands and Calculations:</strong> The notice must quantify the exact amount due. This is broken down into the principal outstanding amount and the interest claimed. Under the <strong>Interest Act, 1978</strong>, you are legally entitled to claim interest from the date the debt became due. If the rate of interest is not mentioned in the contract, the advocate will claim interest at standard commercial rates (usually 12% to 18% per annum) or market rates. The notice should also demand the payment of nominal advocate fees for drafting and sending the notice.
                      </li>
                      <li>
                        <strong>The Default Notice Period:</strong> You must give the debtor a reasonable, legally acceptable window to clear the dues. In India, the standard notice period is <strong>15 days</strong> (or 30 days in specific commercial/government cases) from the date of receipt of the notice. Demanding immediate payment or a 24-hour settlement is legally invalid.
                      </li>
                      <li>
                        <strong>The Consequence &amp; Action Clause:</strong> This is the most crucial part. The notice must state in clear, unambiguous terms that if the debtor fails to repay the demanded sum within the 15-day period, the advocate has strict instructions to initiate civil lawsuits (such as a Summary Suit under Order 37) and appropriate criminal complaints. It must also state that the debtor will be held liable for all court fees, advocate charges, and damages arising from the litigation.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Dispatch & Electronic Service */}
                <section id="dispatch-validity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Dispatch &amp; Electronic Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Even a perfectly drafted legal notice is ineffective if it cannot be proven to have been served on the debtor. The law requires the creditor to establish that the debtor received the demand, thereby giving them a fair opportunity to respond. In India, the dispatch and service of a legal notice are governed by strict protocols.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The traditional and most secure method of serving a notice is via <strong>Registered Post with Acknowledgment Due (RPAD)</strong> or <strong>Speed Post</strong> through the India Post network. This method provides a physical dispatch receipt containing a tracking number. Once delivered, India Post provides a delivery report or a signed Acknowledgment Card (AD Card). In many cases, a dishonest debtor may intentionally refuse to accept the post, or the postman may return it with remarks like &quot;refused,&quot; &quot;left without address,&quot; or &quot;not claimed.&quot; Creditors often panic in such situations, thinking the notice has failed. However, under <strong>Section 27 of the General Clauses Act, 1897</strong> and <strong>Section 114 of the Indian Evidence Act, 1872</strong>, if a letter is properly addressed, prepaid, and posted by registered post, the court will presume that delivery has been effected. A return of the post with the remarks &quot;refused&quot; is treated as constructive service, meaning the law deems it as served, and the debtor cannot claim ignorance in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With the digitisation of the legal system, electronic service has gained parity with physical post. Under the new <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act, 1872, electronic records are given primary importance. Section 63 of the BSA (corresponding to the old Section 65B) permits the admissibility of digital records in courts. In the landmark case of <strong>*M/s. SIL Import, USA v. M/s. Exim Aides Silk Exporters (1999)*</strong>, the Supreme Court held that the send of a notice via fax or email satisfies the statutory requirement of a notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, in recent years, various High Courts and the Supreme Court of India have actively permitted the service of summons and legal notices via instant messaging platforms like <strong>WhatsApp</strong>. For a WhatsApp notice to be legally valid:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The contact number must be proven to belong to the debtor (e.g., linked to their business, KYC, or active communications).</li>
                      <li>The document must be sent as a PDF attachment.</li>
                      <li>The double-blue ticks (indicating the message has been read) or delivery status must be screenshot and preserved.</li>
                      <li>To produce this in court, the creditor must submit a statutory <strong>Section 63 BSA Certificate</strong> confirming the authenticity of the printout and the device from which it was extracted.</li>
                    </ul>
                  </div>
                </section>

                {/* Civil Litigation & Summary Suits */}
                <section id="civil-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Civil Litigation &amp; Summary Suits
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor fails to repay the amount within the 15-day period designated in the legal notice, the creditor must escalate the matter to civil courts. Civil litigation for money recovery generally proceeds along two distinct pathways: a Regular Suit for Recovery or a Summary Suit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A <strong>Regular Civil Suit for Recovery</strong> is filed under the Code of Civil Procedure, 1908. In this process, the plaintiff files a plaint, the defendant is served summons and files a written statement, issues are framed by the judge, both sides present their evidence, witnesses are cross-examined, and finally, oral arguments are heard before a judgment is passed. While a regular suit allows for the recovery of any debt, regardless of whether it is oral or written, it is notorious for being time-consuming. Due to backlogs in Indian courts, a regular recovery suit can drag on for 2 to 5 years.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To counter these delays, the legislature introduced a fast-track remedy: the <strong>Summary Suit under Order XXXVII (Order 37) of the CPC</strong>. This is an exceptionally powerful tool for creditors. A Summary Suit is applicable only to specific debts that are backed by written evidence. This includes:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li>Written contracts (such as signed loan agreements, lease agreements, or service contracts).</li>
                      <li>Bills of exchange, promissory notes, and cheques.</li>
                      <li>Signed invoices, purchase orders, or balance confirmation sheets.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary advantage of an Order 37 Summary Suit is that <em>the defendant does not have an automatic right to defend the case</em>. Once the suit is filed, the defendant is served with summons of appearance and must enter an appearance within <strong>10 days</strong>. If they fail to appear, the allegations in the plaintiff&apos;s plaint are deemed admitted, and the court immediately passes a decree in favor of the creditor.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defendant enters an appearance, the plaintiff serves a &quot;Summons for Judgment.&quot; The defendant must then file a petition showing <strong>&quot;Leave to Defend.&quot;</strong> The judge will inspect the debtor&apos;s defense. If the defense is found to be sham, frivolous, or merely a tactic to delay the trial, the judge will deny leave and pass an immediate decree. Alternatively, if there is a triable issue, the judge may grant conditional leave, ordering the debtor to deposit the entire disputed amount (or a substantial part of it) in the court&apos;s custody before they are allowed to contest the suit. This effectively neutralizes the debtor&apos;s ability to drag out the case, resulting in resolution within 6 to 12 months.
                    </p>
                  </div>
                </section>

                {/* Criminal Action vs Civil Dispute */}
                <section id="criminal-actions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Criminal Action vs Civil Dispute
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common dilemma faced by creditors is whether to pursue civil recovery or file a criminal complaint. In Indian law, there is a clear distinction between a civil breach of contract and a criminal offense. Filing a criminal complaint for a purely civil transaction is highly discouraged, and the Supreme Court of India has repeatedly warned that criminal law cannot be used as a shortcut or a tool of harassment to settle civil disputes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, if the debtor&apos;s conduct involves elements of fraud, deception, or misappropriation, criminal charges can be brought alongside civil suits. The two primary offenses under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (previously the Indian Penal Code - IPC) are:
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-slate-300 pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          <strong>1. Cheating (Section 318 BNS / Section 420 IPC):</strong> To establish cheating, the creditor must prove that the debtor had a dishonest and fraudulent intention <em>at the very inception of the transaction</em>. For instance, if a borrower took a loan by presenting forged property papers or a fake identity, it is clear that they had zero intention of repaying the money from the beginning.
                        </p>
                      </div>
                      <div className="border-l-4 border-slate-300 pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          <strong>2. Criminal Breach of Trust (Section 316 BNS / Section 406 IPC):</strong> Unlike cheating, this offense begins with a lawful transfer. The creditor entrusts their property or funds to the debtor under a specific contract or trust, and the debtor subsequently misappropriates or converts that property to their own use dishonestly.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      The most potent criminal remedy, however, is a <strong>Cheque Bounce case under Section 138 of the Negotiable Instruments Act, 1881</strong>. A cheque is a negotiable instrument, and its dishonor is a strict liability criminal offense. If a debtor issues a cheque to clear their debt and it bounces due to &quot;insufficient funds&quot; or &quot;stop payment,&quot; the law presumes the debtor&apos;s liability. The creditor must follow these statutory steps:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Present the cheque within its validity period of three months.</li>
                      <li>Upon receiving the bank&apos;s return memo, serve a statutory <strong>30-Day Demand Notice</strong> to the debtor.</li>
                      <li>Allow the debtor 15 days from the receipt of the notice to pay the amount.</li>
                      <li>If unpaid, file a criminal complaint in the Magistrate&apos;s Court within 30 days.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Section 138 trials can lead to the arrest of the debtor and directors, and the court can order a fine of up to <strong>double the cheque amount</strong> and imprisonment of up to 2 years. Under Section 143A, the court can also direct the debtor to pay up to 20% of the cheque amount as interim compensation to the creditor during the trial, providing immediate financial relief.
                    </p>
                  </div>
                </section>

                {/* Limitation & Debt Acknowledgement */}
                <section id="limitation-act" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Limitation &amp; Debt Acknowledgement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The concept of time is of paramount importance in the legal arena. The law does not assist those who sleep over their rights. In India, the timeline for filing a suit to recover money is strictly governed by the <strong>Limitation Act, 1963</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Article 19 and Article 21 of the Schedule to the Limitation Act, 1963</strong>, the limitation period for filing a civil suit for the recovery of money or outstanding dues is <strong>three (3) years</strong>. This three-year clock starts ticking from the date the cause of action arises. For a loan, it begins on the agreed maturity date of the loan; for an invoice, it starts on the due date mentioned on the invoice; and for contractual services, it starts from the date the invoice was raised or when the work was completed. Once this three-year period expires, the debt becomes a &quot;time-barred debt,&quot; and the creditor loses their legal right to enforce the claim in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, the Limitation Act provides a vital escape route under <strong>Section 18: Effect of Acknowledgment in Writing</strong>. This section states that if, before the expiration of the prescribed three-year limitation period, the debtor makes an acknowledgment of their liability in writing, signed by them or their authorized agent, a fresh limitation period of three years begins running from the date of that acknowledgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This written acknowledgment does not need to be a formal contract. It can take various forms:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>An email from the debtor apologizing for the delay and requesting a new timeline to repay the debt.</li>
                      <li>A WhatsApp message admitting that they owe the specified amount and promising a partial payment.</li>
                      <li>A signed Balance Confirmation Letter or a Ledger Statement acknowledged by the debtor&apos;s accountant.</li>
                      <li>A partial payment made via bank transfer (RTGS/NEFT/UPI), which acts as an implied acknowledgment of the larger debt.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice well before the expiry of the three-year period is crucial. In many cases, when a debtor receives a formal legal notice, they respond in writing, either admitting the debt and asking for time, or raising a dispute. Even if they raise a dispute, they often admit to parts of the transaction. This written response can act as an acknowledgment under Section 18, resetting your limitation clock and securing your legal standing for another three years.
                    </p>
                  </div>
                </section>

                {/* Reviews & Success Stories */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Reviews &amp; Success Stories
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our mission is to simplify legal processes and deliver fast, transparent, and successful debt recoveries. We have successfully assisted individuals, freelancers, and businesses across India in recovering over ₹15 Crores in outstanding dues. Below are three representative case studies of recoveries handled by our legal panel, followed by verified client reviews:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: B2B Supplier Invoice</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹12 Lakhs Dues</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A manufacturing unit in Pune delivered packaging materials to an enterprise buyer. The buyer withheld payment of ₹12 Lakhs for nine months citing quality issues, though no issues were raised at delivery. We served a legal notice under the Sale of Goods Act, outlining that the buyer had accepted the goods and was liable for 18% interest. The buyer cleared the principal amount in full within 14 days of notice delivery.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Friendly Personal Loan</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹5 Lakhs Personal Loan</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          An IT professional in Bangalore lent ₹5 Lakhs to a former colleague for a medical emergency, backed by a simple promissory note. Post-emergency, the colleague stopped responding. We served a legal notice citing Section 4 of the Negotiable Instruments Act and Section 73 of the Contract Act. The debtor, realizing the threat of civil litigation, repaid the amount in three monthly installments.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Freelancer Retention Fee</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.8 Lakhs Freelance Fee</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A digital marketing consultant in Delhi was denied their final campaign retainer fee of ₹1.8 Lakhs by a startup. The startup claimed the campaign ROI was low. We served a notice highlighting the scope of work contract and digital handovers. The startup released the payment within 7 days to avoid public dispute.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviewSchema.review.map((rev, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-amber-500 text-sm">★</span>
                            ))}
                          </div>
                          <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
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
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
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
            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
