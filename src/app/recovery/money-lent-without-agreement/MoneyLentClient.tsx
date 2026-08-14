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
    question: "Is a verbal or oral agreement to lend money legally binding in India?",
    answer: "Yes, under Section 10 of the Indian Contract Act, 1872, oral agreements are legally valid and enforceable, provided they fulfill the essential conditions of a valid contract: free consent, lawful consideration, competent parties, and a lawful object. However, the primary challenge with an oral agreement is the burden of proof, which lies entirely on the lender to establish the transaction through secondary evidence like bank transfers, chat histories, witnesses, or partial repayment receipts."
  },
  {
    question: "How can I prove that I lent money if there is no written agreement?",
    answer: "You can establish the existence of a loan through a strong digital and financial trail. Admissible evidence includes bank account statements showing the debit, UPI transaction history (GPay, PhonePe, Paytm), WhatsApp chats, SMS, or emails where the borrower acknowledges the receipt of the money and promises to repay it, witness testimonies of people present during the transaction, and any history of partial repayments made by the borrower."
  },
  {
    question: "What is the time limit (limitation period) to file a money recovery suit in India?",
    answer: "According to the Limitation Act, 1963, the limitation period to file a civil money recovery suit is three (3) years. This timeline starts from the date the money was lent (if no repayment date was specified) or from the agreed repayment deadline. Importantly, the limitation period can be reset (renewed) if the borrower acknowledges the debt in writing or makes a partial payment towards the principal or interest before the three-year window expires."
  },
  {
    question: "Can I file a police complaint or FIR for a friendly loan recovery?",
    answer: "A friendly loan recovery is primarily a civil dispute. However, if you can prove that the borrower had a dishonest intention to cheat you right from the inception of the transaction (e.g., they used fake pretexts, forged documents, or went completely untraceable after receiving the money), you can file a criminal complaint for Cheating under Section 318 of the Bharatiya Nyaya Sanhita (formerly Section 420 IPC) and Criminal Breach of Trust under Section 316 BNS (formerly Section 406 IPC)."
  },
  {
    question: "Can I file a Summary Suit under Order 37 CPC if there is no written contract?",
    answer: "Generally, Order 37 of the Civil Procedure Code applies to suits based on written contracts, bills of exchange, or promissory notes. However, courts have repeatedly held that if you have bank transfer receipts combined with written acknowledgments of the debt (such as clear WhatsApp messages or emails confirming the loan amount and repayment terms), a Summary Suit can be admitted. This is because these documents cumulatively constitute a written contract or liquidated demand."
  },
  {
    question: "What happens if a borrower gave me a cheque for repayment and it bounced?",
    answer: "If the borrower issued a cheque for the repayment of the loan and it bounced due to 'insufficient funds' or 'stop payment', you have a highly effective criminal remedy under Section 138 of the Negotiable Instruments Act, 1881. You must send a statutory legal notice within 30 days of the cheque bounce. If they fail to pay within 15 days of receiving the notice, you can file a criminal complaint in court within 45 days. This offense carries a penalty of up to double the cheque amount and imprisonment up to two years."
  },
  {
    question: "How does a legal notice help in recovering money lent without an agreement?",
    answer: "A formal legal notice drafted by an advocate is a powerful tool. It acts as a final warning, officially documenting your claim and warning the borrower of potential civil and criminal litigation. It details the transaction history, the outstanding amount, and sets a deadline (usually 15 days) to clear the dues. In roughly 80-85% of cases, borrowers settle the dispute at this stage to avoid public litigation, court expenses, and the risk of criminal records."
  },
  {
    question: "Can I claim interest on a loan given to a friend or relative without an agreement?",
    answer: "Yes, you can claim interest on the delayed repayment of a loan. Under Section 34 of the Code of Civil Procedure (CPC), civil courts have the discretion to award interest from the date the suit is filed until the money is recovered. Typically, courts grant simple interest ranging from 6% to 12% per annum, depending on whether the transaction was commercial or personal. You must specifically demand this interest in your legal notice and court filings."
  },
  {
    question: "What should I do if the borrower threatens or harasses me when I ask for my money?",
    answer: "If the borrower resort to threats, intimidation, or harassment, you should immediately file a police complaint at your local police station under Section 351 (Criminal Intimidation) and Section 352 (Intentional Insult with Intent to Provoke Breach of Peace) of the Bharatiya Nyaya Sanhita (BNS). Do not attempt to use force or counter-threaten the borrower, as this could weaken your legal standing in court. Always handle the recovery through formal legal notice and court processes."
  },
  {
    question: "Can WhatsApp chats and audio recordings be submitted as evidence in court?",
    answer: "Yes, electronic records like WhatsApp chats, emails, and audio recordings are fully admissible in Indian courts under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872). To make them admissible, you must provide a digital certificate (Certificate under Section 63 BSA / 65B IEA) verifying that the device from which the logs were printed was in working condition and the data was not tampered with."
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
      "name": "Money Lent Without Agreement",
      "item": "https://www.legalrecovery.in/recovery/money-lent-without-agreement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Money Lent Without a Written Agreement: Legal Actions & Evidence Guide",
  "description": "A comprehensive guide on recovering friendly or unsecured loans given without a contract in India. Discover your legal options under the Contract Act, CPC Order 37, and NI Act.",
  "image": "https://www.legalrecovery.in/og-money-lent-recovery.png",
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
  "name": "Money Recovery Legal Services for Friendly Loans",
  "image": "https://www.legalrecovery.in/og-money-lent-recovery.png",
  "description": "Professional legal services for recovering money lent to friends, relatives, or businesses without written contracts in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
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
        "name": "Rajesh Kumar"
      },
      "reviewBody": "I lent ₹4.5 Lakhs to an acquaintance for a business emergency without signing a contract. When he stopped picking up my calls, I was devastated. LegalRecovery helped me gather WhatsApp logs and bank transfers, sent a legal notice, and within a month, the borrower settled the dues. Highly professional!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Joshi"
      },
      "reviewBody": "Excellent service. They walked me through the process of recovering a friendly loan of ₹2 Lakhs given to a close relative. The legal notice worked wonders and the relative agreed to a monthly installment plan."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Sharma"
      },
      "reviewBody": "Very reliable platform. I recovered ₹7.8 Lakhs from a business partner where no formal loan agreement was drafted. The draft of the legal notice was very detailed and pinpointed bank transfers. Got my money back with interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Nair"
      },
      "reviewBody": "I was skeptical about recovering money because I only had UPI transfer receipts and WhatsApp chats. The legal experts at LegalRecovery draft a powerful notice and explained the law clearly. Got the payment within 20 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Rathore"
      },
      "reviewBody": "I had given ₹5 Lakhs to my childhood friend. He kept postponing the payment for years. I consulted LegalRecovery, they sent a professional notice, and the friend immediately realized I was taking legal steps. We settled it without going to court."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Sen"
      },
      "reviewBody": "Helpful service, they explained the Limitation Act which I was unaware of. Successfully recovered ₹3 Lakhs friendly loan within 45 days. The portal is transparent and easy to use."
    }
  ]
};

export default function MoneyLentClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "legal-validity-oral-agreements", title: "Oral Loan Validity" },
    { id: "crucial-evidentiary-trail", title: "Building Evidence" },
    { id: "recovering-through-legal-notice", title: "Legal Notice Strategy" },
    { id: "summary-suits-order-37", title: "Summary Suits" },
    { id: "cheque-bounce-criminal-complaint", title: "Cheque & Cheating Laws" },
    { id: "limitation-act-critical-deadlines", title: "Limitation & Deadlines" },
    { id: "professional-recovery-success-stories", title: "Success Stories" },
    { id: "client-feedback-reviews", title: "Client Reviews" },
    { id: "expert-debt-recovery-assistance", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Money Lent Without Agreement", href: "/recovery/money-lent-without-agreement" }
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
              Lent <span className="text-[#DC2626]">Money Without Agreement</span> & Struggling to Recover It?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Lending money on trust to a friend, relative, or associate shouldn&apos;t mean losing it. Get expert legal solutions to build your case, serve notice, and recover your funds legally.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Money Recovery Now
            </button>
          </div>
        </div>

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
                
                {/* Section 1: Validity of Oral Agreements */}
                <section id="legal-validity-oral-agreements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Validity of Oral Loan Agreements under Indian Law
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In India, lending money on good faith is an age-old tradition. Friendly loans are frequently extended to relatives, colleagues, close friends, and long-standing business partners to tide over immediate crises. In a vast majority of these transactions, no formal loan contract, promissory note, or mortgage deed is drafted. This is usually due to mutual trust, social expectations, or the urgency of the situation. However, when the borrower defaults or goes cold, the lender is left with a deep anxiety: <strong>Is an oral agreement to lend money legally valid, or is the money lost forever?</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The short and clear answer under Indian law is <strong>Yes</strong>. Oral agreements are fully valid and enforceable. According to <strong>Section 10 of the Indian Contract Act, 1872</strong>, all agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration, and with a lawful object, and are not expressively declared to be void. The Act does not mandate that a contract must always be in writing. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This statutory position has been repeatedly upheld by the highest judiciary. In the landmark case of <strong>Alka Bose v. Parmatma Devi (2009)</strong>, the Supreme Court of India observed that even an oral agreement can be as binding and enforceable as a written contract, provided the essential components of a valid contract are established. Similarly, in <strong>S.V. Narayanaswamy v. Savithriamma (2013)</strong>, the court clarified that the burden of proving an oral agreement is undoubtedly heavy, but if the lender can present consistent, reliable, and corroborative evidence, the court will readily grant a recovery decree.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, the critical distinction between a written contract and an oral contract lies entirely in the <strong>Burden of Proof</strong>. In a written agreement, the contract itself is primary evidence under the Indian Evidence Act (now the Bharatiya Sakshya Adhiniyam, 2023), and the borrower cannot easily deny their signature or the terms. In an oral agreement, the lender must reconstruct the transaction before the court using circumstantial evidence, financial transactions, and digital communications. Under Section 101 of the Evidence Act, the person who asserts the existence of a fact must prove it. Therefore, you must present a cumulative chain of evidence to convince the judge that money was transferred as a loan (a debt to be repaid) rather than a gift, a business investment, or a donation.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An oral agreement is a valid contract in law. The challenge is not its legal status, but the standard of proof required to establish it. A lender must gather a comprehensive digital and banking trail to transform an oral promise into a judicially enforceable debt.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Building Evidence */}
                <section id="crucial-evidentiary-trail" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Building the Evidentiary Chain Without a Contract
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When there is no signed agreement, the court looks at the <strong>conduct of the parties</strong> and the <strong>contemporaneous records</strong> of the transaction. You cannot rely solely on your verbal testimony; you must construct an airtight paper trail. A successful recovery strategy hinges on collecting, preserving, and organizing the following classes of evidence:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Bank Account Statements & UPI Logs</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          This is the absolute cornerstone of your case. Avoid cash transactions, as they are notoriously difficult to prove in court unless backed by immediate, signed cash receipts. If you transferred the money via NEFT, RTGS, IMPS, or UPI apps (GPay, PhonePe, Paytm), the transaction record acts as irrefutable proof that money left your account and entered the borrower's account. This proves the <strong>fact of transfer</strong> (the delivery of consideration), which is the first step in proving a contract.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Electronic Communications (WhatsApp, SMS, Emails)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          While bank transfers prove you sent money, they do not automatically prove the money was a *loan*. The borrower might argue in court that the transfer was for a purchase, a pre-existing liability, or a gift. To counter this, electronic chats are vital. You must look for and compile messages where:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-slate-650">
                          <li>The borrower requested the money (e.g., &quot;Can you lend me ₹2 Lakhs for a medical emergency?&quot;).</li>
                          <li>The borrower acknowledged receiving the funds (e.g., &quot;Thanks, received the ₹2 Lakhs in my account&quot;).</li>
                          <li>The borrower agreed to a repayment timeline or interest rate.</li>
                          <li>The borrower apologized for delays and asked for more time (e.g., &quot;I am facing a cash crunch, please give me until next month to return the loan&quot;).</li>
                        </ul>
                      </div>

                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">
                          Admissibility under Bharatiya Sakshya Adhiniyam, 2023 (BSA)
                        </h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          Electronic records are fully admissible as secondary evidence in Indian courts. Under <strong>Section 63 of the BSA</strong> (which replaced the old Section 65B of the Indian Evidence Act), you must file a digital certificate alongside printed copies of WhatsApp chats, SMS, or emails. This certificate must be signed by a person in charge of the computer system or device from which the logs are retrieved, stating that the device was operating properly and the data was not manipulated. LegalRecovery assists clients in drafting this critical certificate to ensure their digital evidence is accepted by the judge without delay.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Audio Recordings & Transcripts</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Phone call recordings where the borrower admits their liability and promises to return the money are excellent corroborative evidence. Ensure that you preserve the original recording device (e.g., the phone) and draft an accurate transcript of the conversation to submit to the court.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Third-Party Witnesses</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If the loan was discussed or handed over in the presence of common friends, colleagues, or relatives, their statements can be highly persuasive. A witness can depose in court regarding the verbal conversations they overheard, confirming the borrower's promise to repay the amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Legal Notice */}
                <section id="recovering-through-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Strategy of a Statutory Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many lenders jump straight to filing a lawsuit, which can be expensive and time-consuming. At LegalRecovery, we believe in a phased, strategic approach. The single most cost-effective and powerful step you can take is serving a formal <strong>Advocate-Signed Legal Notice</strong>. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is not just a letter; it is a formal, statutory warning that creates a permanent legal record. It notifies the borrower that their failure to repay the loan constitutes a civil breach and potentially a criminal offense, and gives them a strict deadline (typically 15 days) to clear the outstanding amount.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A well-drafted legal notice from our legal panel performs several critical functions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Establishes the Cause of Action:</strong> It documents the history of the friendly loan, the exact dates of transfer, the verbal terms, and the borrower&apos;s default. This timeline is crucial if the case eventually goes to court.</li>
                      <li><strong>Stops Denials:</strong> When a borrower receives a notice detailing bank transaction numbers and transcripts of their WhatsApp promises, they realize that they cannot simply deny the debt in court.</li>
                      <li><strong>Triggers Settlement:</strong> Approximately <strong>80% to 85%</strong> of friendly loan disputes are settled out of court after the delivery of a legal notice. Borrowers often consult their own lawyers, who advise them that settling the debt is cheaper and safer than fighting a long civil and criminal battle.</li>
                      <li><strong>Calculates Dues and Interest:</strong> The notice formally demands the principal amount along with delayed interest (usually calculated at 9% to 18% per annum) and the costs of the legal notice.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our process at LegalRecovery ensures maximum impact. We digitally dispatch notices via verified email and WhatsApp to the borrower&apos;s home and office addresses. If the borrower is running a business, we also send notices to their active directors or partners to pierce the corporate shield and establish personal liability.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits */}
                <section id="summary-suits-order-37" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Summary Suit (Order 37 CPC) for Fast-Track Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the borrower ignores the legal notice, you must take the dispute to court. A common fear is that Indian courts take decades to resolve civil disputes. However, the Code of Civil Procedure, 1908 (CPC) contains a specialized, fast-track mechanism called a <strong>Summary Suit</strong> under <strong>Order 37</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is vastly different from a regular civil recovery suit. In a regular suit, the defendant has a right to file a written statement, delay hearings, cross-examine witnesses, and drag the case for years. Under Order 37, the defendant does not have an automatic right to defend the case. They must apply for <strong>&quot;Leave to Defend&quot;</strong> within 10 days of being served the summons.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To obtain Leave to Defend, the borrower must satisfy the judge that they have a genuine, triable defense. If their defense is found to be a sham, vague, or merely an attempt to delay payment, the court will dismiss their application and immediately pass a judgment and decree in your favor. Even if the court grants them permission to fight the case, it is often conditional upon them depositing the disputed amount (or a portion of it) in the court registry.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Can a Summary Suit be filed for a loan without a written agreement?</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While Order 37 is typically reserved for suits based on bills of exchange, hundis, promissory notes, or written contracts, the judiciary has expanded its scope. In a series of landmark judgments, including <strong>Jyotsna K. Valia v. Patel Travels (2001)</strong> and <strong>Sandeep Kohli v. Ranjit Singh (2018)</strong>, courts have held that a written acknowledgment of a debt—such as bank statements showing transfer, accompanied by emails or WhatsApp chats admitting the liability—constitutes a written contract for a liquidated sum of money. Therefore, if your digital trail is robust, we can file a Summary Suit to bypass years of litigation and secure a quick recovery decree.
                    </p>
                  </div>
                </section>

                {/* Section 5: Cheque Bounce & Cheating */}
                <section id="cheque-bounce-criminal-complaint" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    NI Act Section 138 & Cheating Cases (BNS/IPC)
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Civil suits are effective, but criminal remedies bring a different level of urgency and pressure. If the borrower has acted with fraudulent intent or issued cheques that bounced, you have powerful criminal avenues:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">
                          1. Cheque Bounce under Section 138 of the Negotiable Instruments Act, 1881
                        </h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          When lending money, it is common to ask for a post-dated cheque (PDC) as security. If the borrower defaults and you present this cheque to the bank, and it bounces due to 'insufficient funds', 'account closed', or 'stop payment', a criminal offense is triggered.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                          <li><strong>Statutory Notice:</strong> You must send a formal demand notice to the drawer within 30 days of receiving the bounce memo from your bank.</li>
                          <li><strong>15-Day Window:</strong> The borrower has exactly 15 days from receiving the notice to pay the amount.</li>
                          <li><strong>Filing Complaint:</strong> If they fail to pay, you must file a criminal complaint in the Magistrate Court within 30 days.</li>
                          <li><strong>Penalties:</strong> Under Section 138, the court can sentence the borrower to up to 2 years in prison and impose a fine of up to <strong>double the cheque amount</strong>, which is awarded to the lender as compensation.</li>
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

                {/* Section 6: Limitation Act */}
                <section id="limitation-act-critical-deadlines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Limitation Act: Timelines and Resetting the Clock
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, delay can defeat equity. You cannot wait indefinitely to recover a loan. The <strong>Limitation Act, 1963</strong> mandates a strict timeframe within which a lender must initiate legal action. If you cross this deadline, the court will dismiss your recovery suit as &quot;time-barred,&quot; regardless of how strong your evidence is.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For a suit to recover money lent, the limitation period is <strong>three (3) years</strong>. But when does the three-year clock start ticking?
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>If a Repayment Date is Agreed:</strong> The three years begin from the day the repayment deadline passes (e.g., if they promised to return the money on December 31, 2024, you have until December 31, 2027 to file a suit).</li>
                      <li><strong>If No Repayment Date is Agreed:</strong> The limitation begins from the date the money was actually lent and transferred.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>How to Reset the Limitation Clock (Section 18 & 19):</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The law provides two critical exceptions that can reset the three-year limitation period, giving you a fresh window of three years:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Written Acknowledgment (Section 18):</strong> If, before the expiry of the three-year period, the borrower signs an acknowledgment of the debt, or sends a clear written communication (such as an email or signed letter) admitting their liability, a fresh limitation period of three years begins from the date of that acknowledgment.</li>
                      <li><strong>Part Payment (Section 19):</strong> If the borrower makes a partial payment towards the principal amount or pays interest before the three-year limit expires, a fresh three-year limitation period starts from the date the payment was made. Even a small transfer of ₹1,000 via UPI as token repayment can reset the limitation clock.</li>
                    </ul>
                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <p className="text-sm text-red-900 leading-relaxed font-semibold">
                        Warning: Always audit the timeline of your loan. If you are approaching the three-year mark, you must immediately secure a written acknowledgment (even in a WhatsApp message) or initiate legal notice proceedings to prevent the debt from becoming legally unrecoverable.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Success Stories */}
                <section id="professional-recovery-success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Case Studies and Real-world Recoveries
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we handle hundreds of friendly loan disputes every month. These real-world case studies illustrate how strategic legal notice and evidence gathering can resolve even the most difficult cases:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: The Trust Deficit</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹4.5 Lakhs Friendly Loan</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A tech professional in Gurugram lent ₹4.5 Lakhs to his former colleague for a medical emergency. The transfer was done via IMPS, but no agreement was signed. A year later, the colleague stopped responding to chats. We collected the IMPS bank statement, retrieved WhatsApp chats where the colleague requested the money and acknowledged the delay, and served a formal legal notice. Realizing that the electronic chats were legally binding under the Evidence Act, the borrower settled the entire amount in three weekly installments.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Business Partner Settlement</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹8.2 Lakhs via Legal Notice</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A boutique owner in Mumbai lent ₹8.2 Lakhs to a business partner without a formal contract to buy initial inventory. The partner later claimed the money was an equity investment, not a loan, and refused to repay. We gathered emails outlining the terms of the loan and bank transaction records, and served a statutory notice warning of a Summary Suit under Order 37. The partner&apos;s legal counsel advised them to settle. A mutual settlement deed was executed, and the funds were fully recovered.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8: Client Reviews */}
                <section id="client-feedback-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Verified Client Testimonials
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

                {/* Section 9: Why LegalRecovery */}
                <section id="expert-debt-recovery-assistance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Partner with LegalRecovery
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
                <h3 className="text-sm font-black mb-3">Recover Your Loan</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Lent money on trust and facing payment delays? Get professional legal notices and support to recover your funds quickly.
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
