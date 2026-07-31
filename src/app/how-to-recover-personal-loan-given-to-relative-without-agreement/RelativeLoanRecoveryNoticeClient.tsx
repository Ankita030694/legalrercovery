'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Is it legally possible to recover a loan given to a relative without a written agreement?",
    answer: "Yes. In India, an oral agreement is entirely valid and enforceable under the Indian Contract Act, 1872. The absence of a promissory note or stamped contract does not invalidate the debt, provided you can prove the money was transferred and that it was intended as a loan, not a gift."
  },
  {
    question: "What evidence can I use in court if I do not have a signed contract?",
    answer: "You must rely on circumstantial and electronic evidence. Bank account statements showing the exact transfer, UPI transaction IDs, WhatsApp conversations discussing the repayment schedule, SMS exchanges, and call recordings (where legally permissible) serve as robust evidence of the transaction."
  },
  {
    question: "Will sending a legal notice to my relative permanently destroy our family relationship?",
    answer: "A legal notice is a formal boundary setting mechanism. While it may strain relations temporarily, it shifts the dynamic from a casual familial request to a serious legal obligation. Often, relatives ignore casual requests because they feel no pressure; a legal notice provides that necessary pressure to facilitate a settlement."
  },
  {
    question: "How much time do I have to legally claim the money back from a family member?",
    answer: "The Limitation Act sets a strict time limit of three years to file a civil suit for money recovery. This three year countdown generally begins from the date the loan was given or the date the relative explicitly defaulted on a promised repayment date. Acknowledgment of the debt over WhatsApp can reset this clock."
  },
  {
    question: "Can I file a police complaint against my relative for cheating?",
    answer: "Generally, unpaid loans are treated as civil disputes. However, if you can prove that your relative had a fraudulent intention from the very beginning and never intended to repay the money (criminal breach of trust or cheating under the Bharatiya Nyaya Sanhita), a police complaint can be filed. This is highly complex in family matters and requires strong proof of deceit."
  },
  {
    question: "What should be included in a legal notice directed at a family member?",
    answer: "The notice must remain entirely professional and devoid of emotional language. It should state the exact amount lent, the date of transfer, the mode of transfer, reference any WhatsApp acknowledgments, and state a firm deadline (usually 15 days) for the refund before civil litigation is initiated."
  },
  {
    question: "Can I charge interest on a loan given to a relative without a prior agreement?",
    answer: "If there was no prior agreement regarding interest, you cannot arbitrarily demand it for the loan duration. However, in your legal notice, you can demand standard penal interest (e.g., 18 percent per annum) from the date of the notice or the date of default, citing the delay and mental agony caused."
  }
];

const reviews = [
  {
    author: "Sanjay M.",
    rating: "5",
    text: "I lent my cousin five lakhs for his business via a simple bank transfer two years ago. He kept avoiding my calls. I was terrified of causing a family feud, but this guide helped me realize I needed to set a boundary. I sent a formal notice. His parents got involved, and the money was returned within a week."
  },
  {
    author: "Pooja K.",
    rating: "5",
    text: "Lending money to family without paperwork is a nightmare. My brother-in-law refused to return a heavy amount, claiming it was a gift. The checklist here helped me compile our old WhatsApp chats where he promised to repay. The legal notice drafted by my lawyer used those chats to completely destroy his 'gift' defense."
  },
  {
    author: "Ravi S.",
    rating: "5",
    text: "The hardest part was separating the emotional betrayal from the legal reality. This page clearly explained the Limitation Act, and I realized I only had a few months left to act. I stopped pleading and sent a firm legal notice. It bypassed the family drama and treated it like a pure financial transaction, which finally worked."
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
      "name": "Recover Personal Loan from Relative",
      "item": "https://www.legalrecovery.in/how-to-recover-personal-loan-given-to-relative-without-agreement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Personal Loan Given to Relative Without Agreement in India",
  "description": "Learn how to recover a personal loan given to a relative or family member without a written agreement in India. Draft a firm legal notice for an unpaid loan.",
  "image": "https://www.legalrecovery.in/og-relative-loan.png",
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
  "name": "Relative Loan Recovery Guide",
  "image": "https://www.legalrecovery.in/og-relative-loan.png",
  "description": "A comprehensive guide on the emotional and legal strategies to recover unpaid loans from family members and relatives without a written agreement.",
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

export default function RelativeLoanRecoveryNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-familial-trap", title: "The Familial Trap: When Trust Replaces Contracts",
      children: [
        { id: "the-gift-defense", title: "Countering the 'It Was a Gift' Defense" },
        { id: "validity-of-oral-agreements", title: "The Validity of Oral Agreements in India" }
      ]
    },
    { id: "family-loan-evidence-checklist", title: "Family Loan Evidence Checklist" },
    { id: "drafting-the-legal-notice", title: "Drafting a Boundary Setting Legal Notice" },
    { id: "pre-litigation-escalation-timeline", title: "Pre-Litigation Escalation Timeline" },
    { id: "success-stories-reviews", title: "Success Stories & Client Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Recover Personal Loan from Relative", href: "/how-to-recover-personal-loan-given-to-relative-without-agreement" }
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
              Civil Litigation &amp; Family Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Recover Personal Loan from <span className="text-[#DC2626]">Relative Without Agreement</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Lending money to family members is emotionally complex, especially without a written contract. Learn how to transform informal WhatsApp chats and bank transfers into binding evidence, and draft a firm legal notice that establishes professional boundaries to secure your refund.
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
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Lending money to a family member is fundamentally different from a commercial transaction. It is driven by emotion, obligation, and trust. Because of this familial bond, insisting on a signed promissory note or a formal contract feels aggressive and disrespectful. Consequently, massive sums of money change hands via simple bank transfers or UPI, backed by nothing more than a verbal promise to repay.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The crisis begins when that promise is repeatedly broken. What starts as a simple delay morphs into avoided phone calls, defensive arguments, and eventually, complete silence. The lender is trapped in a devastating psychological dilemma: they desperately need their money back, but they are terrified of tearing the family fabric apart by escalating the situation. Defaulting relatives explicitly rely on this fear. They know you will hesitate to take aggressive action because of the social fallout. This creates a deeply toxic dynamic where the victim is made to feel guilty for demanding what is rightfully theirs.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  To successfully recover your funds, you must separate the emotional betrayal from the legal reality. The law does not care about family gossip or social awkwardness. The Indian Contract Act, 1872, clearly stipulates that an oral agreement is entirely valid and enforceable. The absence of a written contract does not mean you have surrendered your rights; it simply means you must construct your case using alternative evidence.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The most crucial step is transitioning the dispute from a casual family argument into a formal legal proceeding. A well drafted legal notice acts as a vital boundary setting tool. It signals that you are no longer relying on their goodwill and are prepared to invoke the judicial system. To understand the broader mechanics of formal demands, exploring a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is essential.
                </p>
              </div>

              <section id="the-familial-trap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Familial Trap: When Trust Replaces Contracts
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    When dealing with family, the legal defense strategies change. A corporation will deny a breach of contract; a relative will often deny the contract ever existed.
                  </p>

                  <h3 id="the-gift-defense" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Countering the "It Was a Gift" Defense
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The most common legal defense employed by defaulting relatives is claiming that the transferred money was a gift, not a loan. Because there is no formal promissory note stating the terms of repayment, they will argue before a judge that the funds were given out of love and affection, with no expectation of return. 
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    To defeat this defense, you must prove intent. Under the Indian Evidence Act, the burden of proof lies with the person asserting a fact. You must demonstrate that the transaction was a loan. This is why every single communication post transfer becomes critical. If you have a WhatsApp message asking, "When will you return the money?" and they reply, "Give me two more months," you have successfully established that both parties understood the transaction was a loan requiring repayment. This single exchange destroys the gift defense entirely.
                  </p>

                  <h3 id="validity-of-oral-agreements" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Validity of Oral Agreements in India
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Many people believe that without a stamped paper, they have no legal standing. This is completely false. Section 10 of the Indian Contract Act defines what agreements are contracts, and it does not mandate that they must be in writing (except in specific cases like real estate). An oral agreement to lend and borrow money is a perfectly valid contract. The challenge is merely evidentiary. You must reconstruct the terms of that oral agreement using circumstantial evidence.
                  </p>
                </div>
              </section>

              <section id="family-loan-evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Family Loan Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Before sending a legal notice, you must consolidate your "paper trail" from the digital ether. If you lack a formal contract, your advocate will build your case entirely on these four pillars of evidence.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. Irrefutable Proof of Transfer</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            You must obtain the official bank statement showing the exact date, amount, and the recipient account details. If paid via UPI, download the detailed transaction receipt. Cash transactions are incredibly difficult to prove without signed receipts.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Digital Acknowledgment of Debt</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Export your entire WhatsApp or SMS history with the relative. Highlight any message where they ask for the money, apologize for the delay, or promise a future payment date. This is the cornerstone of proving it was not a gift.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. The Three Year Limitation Check</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Verify the timeline. Under the Limitation Act, 1963, you only have three years to file a recovery suit from the date the cause of action arose. Ensure your claim is not time barred. An acknowledgment of debt over text can refresh this three year period.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Written Demand Record</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Before sending the formal advocate notice, ensure you have sent at least one firm message clearly stating the total amount owed and demanding its return, establishing a formal default.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    By providing this curated evidence to your legal counsel, you transform a messy family dispute into a clinical, undeniable civil claim.
                  </p>
                </div>
              </section>

              <section id="drafting-the-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Boundary Setting Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice to a relative requires a specific tone. It must be utterly devoid of emotion, guilt trips, or family history. The goal is to shock the relative out of their complacency by presenting them with a sterile, threatening legal document drafted by a third party professional.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice will commence by outlining the exact date and mechanism of the financial transfer (e.g., NEFT transfer of Rs. 2,00,000 on 14th August). It will then state that this transfer was made pursuant to an oral agreement for a short term personal loan. Crucially, the notice will quote the exact dates of the WhatsApp messages where the relative acknowledged the debt and failed to honor their promised repayment schedule.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The legal framing will classify their failure to repay as a civil breach of contract. The demand section will set a strict 15 day deadline for the return of the principal amount. While you cannot claim interest if none was agreed upon originally, the notice will often state that failure to pay within the 15 day window will result in civil litigation where penal interest (usually 18 percent) and full legal costs will be demanded from the court. The sudden arrival of this document on an advocate letterhead usually prompts immediate involvement from older family members, forcing a rapid settlement to avoid public humiliation in court. For an efficient process, you can <Link href="/send-legal-notice-online-india" className="text-[#DC2626] hover:underline font-medium">send legal notice online in India</Link> without having to face the relative in person.
                  </p>
                </div>
              </section>

              <section id="pre-litigation-escalation-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Pre-Litigation Escalation Timeline
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Understanding the timeline of escalation helps manage the anxiety associated with taking legal action against family. The process is designed to exhaust all settlement opportunities before actually filing a lawsuit.
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
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: Formal Notice Period</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The advocate issues the legal notice via RPAD. This is the shock phase. The relative realizes you are no longer making casual requests. In over seventy percent of family disputes, the matter is settled here, often through the mediation of elders who wish to keep the dispute out of the public record.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 30: Drafting the Civil Suit</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the 15 day deadline expires without a refund or a signed repayment agreement, your advocate begins drafting a formal civil suit for money recovery (Summary Suit under Order 37 of the CPC, if applicable). This requires compiling all bank records and WhatsApp transcripts into formal court affidavits.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 30 Onwards: Court Filing and Summons</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The suit is filed in the jurisdictional civil court. The court issues official summons to the relative. At this point, the family dispute is entirely public. The court will demand the relative prove the transaction was a gift, which they cannot do against your digital evidence. The court eventually issues a decree mandating the refund.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Client Reviews
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
                  Discuss your loan recovery with legal experts. We draft and serve boundary setting legal notices to relatives to secure your funds without unnecessary drama.
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
      </main>
      
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
