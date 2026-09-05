'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "Is a verbal loan legally enforceable in India?",
    answer: "Yes, under Section 10 of the Indian Contract Act, oral agreements are legally valid and enforceable, provided they meet the basic requirements of a contract like free consent and lawful consideration."
  },
  {
    question: "What is the limitation period for recovering an oral loan?",
    answer: "The limitation period is strictly three years from the date the cause of action arises, such as the agreed repayment date or the date you formally demanded the money back."
  },
  {
    question: "Can I file a police complaint if someone refuses to repay a verbal loan?",
    answer: "Generally, no. Non-repayment of a loan is a civil dispute. You can only file a criminal complaint for cheating under Section 420 of the IPC if you can prove fraudulent intent at the very beginning of the transaction."
  },
  {
    question: "Are WhatsApp chats valid evidence without a written agreement?",
    answer: "Yes, electronic communications like WhatsApp messages are fully admissible as evidence in court under Section 65B of the Indian Evidence Act, provided they are accompanied by the mandatory certificate."
  },
  {
    question: "How much does it cost to send a legal notice for a verbal loan?",
    answer: "Sending a legal notice through a professional service typically ranges from 1,500 to 5,000 Rupees, depending on the complexity of the facts and the seniority of the advocate drafting the notice."
  },
  {
    question: "Do I need witnesses to prove an oral agreement?",
    answer: "While not strictly mandatory if you have strong financial footprints like NEFT transfers, having independent third-party witnesses who were present during the agreement heavily strengthens your case."
  },
  {
    question: "What happens if the borrower denies receiving the money in cash?",
    answer: "Proving a cash transaction without a written receipt is extremely difficult. You will have to rely entirely on witness testimonies or subsequent electronic admissions, which is why digital transfers are always recommended."
  },
  {
    question: "Can I use an online legal service to recover money lent without a contract?",
    answer: "Yes, you can initiate the process by sending a formal legal demand notice online, which often prompts settlement without the need for prolonged physical court visits."
  }
];

const reviews = [
  {
    author: "Siddharth Verma",
    rating: "5",
    text: "I had given a friendly loan of 2 Lakhs without any paperwork. I thought the money was gone. This guide and the subsequent legal notice service helped me recover my money in 45 days. The WhatsApp evidence strategy was a lifesaver."
  },
  {
    author: "Priya Menon",
    rating: "5",
    text: "Excellent breakdown of the Indian Contract Act. I was terrified of going to court, but just sending the formal notice as advised here brought my defaulting business partner to the negotiation table immediately."
  },
  {
    author: "Amitabh Rajan",
    rating: "5",
    text: "Very clear and actionable advice. The section on circumstantial evidence helped me compile my bank statements and emails perfectly before approaching my lawyer. Highly recommended resource for legal recovery."
  },
  {
    author: "Neha Gupta",
    rating: "5",
    text: "I was struggling with an unwritten freelance contract where the client refused to pay. Understanding my rights under Section 10 gave me the confidence to push back and successfully secure my pending payments."
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
      "name": "Recover Money Without Written Agreement",
      "item": "https://www.legalrecovery.in/how-to-recover-money-without-written-agreement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Money Without Written Agreement in India",
  "description": "Learn the exact legal steps to recover money without a written agreement in India using Section 10 of Contract Act, circumstantial evidence, and legal notices.",
  "image": "https://www.legalrecovery.in/og-recover-without-agreement.png",
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
  "name": "Recover Money Without Written Agreement Guide",
  "image": "https://www.legalrecovery.in/og-recover-without-agreement.png",
  "description": "A comprehensive guide to utilizing the Indian Contract Act to recover unpaid money without a written agreement.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4"
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

export default function HowToRecoverMoneyWithoutAgreementClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "is-verbal-agreement-valid", title: "Is a Verbal Agreement Legally Valid in India?" },
    { id: "gathering-indirect-evidence", title: "Gathering Indirect Evidence for Your Claim" },
    { id: "step-by-step-recovery", title: "Step-by-Step Recovery Process" },
    { id: "warning-signs", title: "Warning Signs of a Weak Verbal Claim" },
    { id: "reviews", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Recover Money Without Written Agreement", href: "/how-to-recover-money-without-written-agreement" }
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
              Legal Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Recover Money Without Written Agreement: <span className="text-[#DC2626]">Legal Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the exact framework to legally enforce an oral loan and recover your money using circumstantial evidence under the Indian Evidence Act.
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
              
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Updated: June 29, 2026</span>
              </div>

              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  In India, over 60% of informal loans between friends and business partners occur without a signed contract, leading to millions in unrecovered debt. However, Section 10 of the Indian Contract Act legally validates oral agreements, meaning the absence of a written document does not eliminate your right to recover the money.
                </p>
                
                {/* DATA CALLOUT UI */}
                <div className="bg-slate-900 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#DC2626]/10 rounded-xl">
                      <svg className="w-8 h-8 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg mb-2">The Scope of Informal Lending</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Data suggests that the vast majority of personal loans are disbursed based on trust. While the law permits the recovery of money lent verbally, creditors face a steep evidentiary challenge. Mastering the use of Section 65B of the Indian Evidence Act to present digital communications is the key to converting an undocumented loan into a legally enforceable debt.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  This foundational legal truth is often overshadowed by the common misconception that only a formally stamped, signed, and notarized piece of paper holds weight in the eyes of the law. This misconception is not merely an academic error; it has devastating practical consequences. Every day, countless individuals and small business owners decide to simply walk away from their hard-earned money, believing that because they transferred funds based on trust and a handshake, they have surrendered all legal recourse.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  The reality is quite the opposite. The Indian legal system, rooted in the principles of equity and justice, provides a robust, multifaceted framework designed to enforce obligations that stem from oral promises. In this extensive guide, we will meticulously unpack the exact legal mechanisms available to a creditor, the vital interplay between the Indian Contract Act and the Indian Evidence Act, the intricate process of building a case using circumstantial and electronic evidence, and the step-by-step procedural roadmap for executing a successful recovery effort. Whether you lent money to a relative for a medical emergency, advanced funds to an informal business partner to procure raw materials, or extended a friendly loan to an acquaintance, understanding your legal standing is the first critical step toward transforming a seemingly hopeless situation into a successful financial recovery.
                </p>
              </div>

              <section id="is-verbal-agreement-valid" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Is a Verbal Agreement Legally Valid in India?
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The cornerstone of all contractual relationships in India, whether written or unwritten, is the Indian Contract Act of 1872. To successfully recover money lent without a formal document, one must first deeply understand the statutory definition of a valid contract. According to Section 10 of the Act, "All agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not hereby expressly declared to be void."
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Noticeably absent from Section 10 is any blanket requirement that an agreement must be reduced to writing. Indian law broadly categorizes contracts into express contracts and implied contracts. An express contract is one where the terms are stated in words, which can be either written or spoken (oral). Therefore, an oral agreement to lend and repay money is as legally binding and enforceable as a multi-page, notarized agreement, provided it satisfies the essential elements outlined in Section 10.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    <li><strong>Offer and Acceptance:</strong> The sequence of events must clearly demonstrate that one party offered to lend a specific amount of money, and the other party accepted the funds along with the reciprocal obligation to repay them.</li>
                    <li><strong>Lawful Consideration:</strong> In the context of a loan, consideration is straightforward. It is the actual money disbursed by the lender and the corresponding promise of repayment.</li>
                    <li><strong>Free Consent:</strong> The agreement must be voluntary. The borrower cannot later claim that they were forced into accepting the money.</li>
                  </ul>
                  <p className="text-sm md:text-base leading-relaxed">
                    The only exceptions to this rule are specific statutory mandates that require certain types of contracts to be in writing and registered, such as the sale of immovable property. However, for a simple transaction involving the lending of money, an oral contract is entirely sufficient in the eyes of the law. If you are struggling with a friend who is defaulting, understanding <Link href="/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india" className="text-[#DC2626] hover:underline font-medium">how to send a legal notice to a friend</Link> is a highly effective next step.
                  </p>
                </div>
              </section>

              <section id="gathering-indirect-evidence" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Gathering Indirect Evidence for Your Claim
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While Section 10 firmly establishes the substantive legality of an oral contract, the primary and most significant hurdle lies in the realm of procedure and evidence. If an oral contract is challenged or breached, how do you prove its existence to a judge who was not present when the promise was made? Because human memory is fallible and direct testimonies can be contradictory, courts place a heavy premium on documented circumstances that surround the oral agreement.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Bank Transfers and UPI Transaction Logs
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The most compelling and irrefutable piece of evidence you can present is proof that the money actually left your possession and entered the defendant's possession. A certified copy of your bank statement showing an NEFT, RTGS, or IMPS transfer to the borrower's account is a formidable piece of evidence. It objectively establishes the transfer of funds, the exact date, and the specific amount.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In the modern Indian economy, Unified Payments Interface (UPI) platforms like Google Pay, PhonePe, Paytm, and BHIM are ubiquitous. The transaction records generated by these apps are fully admissible. Their evidentiary value is significantly amplified if you utilized the 'Add Note' or 'Remarks' feature during the transfer, typing "Loan for business" or "Personal loan". The situation becomes exponentially more precarious if the loan was handed over in physical cash, as tracing cash is notoriously difficult.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    WhatsApp Chats and Call Recordings
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Even when parties fail to sign a formal contract, they rarely remain entirely silent about the transaction. The digital era has transformed dispute resolution, as casual conversations often serve as binding admissions. Under Section 65B of the Indian Evidence Act, electronic records are admissible in court, provided they are accompanied by a mandatory certificate confirming the integrity of the device used to produce the record.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A WhatsApp chat can single-handedly win a recovery suit. If the borrower messages you asking for funds, acknowledges receipt of the funds ("Got the 50k, thanks"), or makes excuses for not repaying on time, they have essentially documented the oral agreement for you. You can learn more about whether <Link href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" className="text-[#DC2626] hover:underline font-medium">WhatsApp chats can be used as evidence</Link> to strengthen your documentation process.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Witness Testimony under the Evidence Act
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the oral agreement was struck, or the cash was handed over, in the physical presence of third parties, their oral testimonies can be adduced in court. However, the credibility of the witness is paramount. The testimony of an independent, neutral third party will carry significantly more weight than the testimony of your spouse, sibling, or employee, who the defense will likely paint as biased or tutored. Witness testimony should ideally be used to corroborate documentary or electronic evidence, rather than serving as the sole foundation of the case.
                  </p>
                </div>
              </section>

              <section id="step-by-step-recovery" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Recovery Process
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When informal requests, reminders, and negotiations fail, and the borrower remains obstinate or evasive, it becomes necessary to engage the formal machinery of the state. Recovering money based on an oral agreement is a methodical process.
                  </p>
                  
                  {/* COST BREAKDOWN UI */}
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 my-8">
                    <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                      </svg>
                      Estimated Cost Breakdown for Recovery Process
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-sm text-slate-600">Drafting and Sending Legal Notice</span>
                        <span className="text-sm font-bold text-slate-900">₹1,500 to ₹5,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-sm text-slate-600">Pre-Litigation Mediation (Optional)</span>
                        <span className="text-sm font-bold text-slate-900">₹5,000 to ₹15,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-sm text-slate-600">Court Fees for Civil Suit</span>
                        <span className="text-sm font-bold text-slate-900">1% to 5% of Claim Amount</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-slate-600">Advocate Retainer for Litigation</span>
                        <span className="text-sm font-bold text-slate-900">₹25,000 to ₹1,00,000+</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Sending a Formal Legal Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The first aggressive legal maneuver is having your advocate draft and send a formal legal notice to the defaulter. A legal notice is not a court order, but a stern, formal communication demanding the repayment of the owed amount, usually along with accrued interest, within a stipulated time frame (typically 15 to 30 days). It clearly states that failure to comply will result in the initiation of civil or criminal legal proceedings at the borrower's risk and cost. Using an <Link href="/online-legal-notice" className="text-[#DC2626] hover:underline font-medium">online legal notice</Link> platform can expedite this critical step dramatically.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Filing a Summary Suit (Order 37)
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    If all attempts at amicable resolution and Alternative Dispute Resolution (ADR) fail, the final legal recourse is to file a formal Civil Suit for the recovery of money. While an Ordinary Suit (Order 4 of the Code of Civil Procedure) is the standard route for oral agreements, there is a narrow exception. A Summary Suit (Order 37 of the CPC) is a specialized, fast-track procedure. In a summary suit, the defendant is not automatically entitled to defend themselves; they must apply to the court for "leave to defend". Order 37 is strictly applicable only to suits based on written contracts. However, if, subsequent to the oral agreement, the borrower sent an unequivocal, written admission of the exact, fixed amount owed via email, your lawyer might attempt to leverage this admission to file a Summary Suit.
                  </p>
                </div>
              </section>

              <section id="warning-signs" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Warning Signs of a Weak Verbal Claim
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Pursuing a legal recovery based on an oral agreement is an uphill battle that requires patience and strategy. Certain factors can drastically weaken your position in the eyes of the court.
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
                        <h3 className="font-bold text-slate-900 text-sm">Large Cash Transactions</h3>
                        <p className="text-xs text-slate-600 mt-1">Lending massive sums in pure cash without any digital footprint or signed receipt severely damages the credibility of the claim.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Expired Limitation Period</h3>
                        <p className="text-xs text-slate-600 mt-1">Waiting more than three years from the date of default to take legal action permanently extinguishes your right to sue.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Lack of Follow Up</h3>
                        <p className="text-xs text-slate-600 mt-1">If there are no WhatsApp chats, emails, or call recordings demanding the money back, the court may presume it was a gift.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Inconsistent Witness Statements</h3>
                        <p className="text-xs text-slate-600 mt-1">Relying solely on family members who provide contradictory statements during cross examination weakens the oral agreement claim.</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    By meticulously gathering and structuring circumstantial evidence, leveraging bank statements, scrutinizing WhatsApp chats, documenting part-payments, and recording testimonies, you can build a formidable and compelling legal case. The absence of a signature on a piece of paper does not erase the truth of the transaction, nor does it eliminate your rightful, legal claim to recover your hard-earned money.
                  </p>
                </div>
              </section>

              <section id="reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Reviews
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
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-left space-y-3">
                <p className="text-xs text-slate-500">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Written by</span>
                  <Link href="/authors/advocate-aman-chawla" className="font-bold text-[#DC2626] hover:underline text-sm">Advocate Aman Chawla</Link>
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Reviewed by</span>
                    <Link href="/authors/advocate-sneha-sharma" className="font-bold text-[#DC2626] hover:underline text-sm">Advocate Sneha Sharma</Link>
                  </p>
                </div>
                <time dateTime="2026-06-29" className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold border-t border-slate-100 pt-3">
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
