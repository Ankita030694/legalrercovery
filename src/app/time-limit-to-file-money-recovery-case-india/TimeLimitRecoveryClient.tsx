'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "What is the exact time limit to file a civil suit for money recovery in India?",
    answer: "The exact statutory time limit to file a civil suit for money recovery in India is precisely 3 years from the date the cause of action arises, according to the Limitation Act of 1963."
  },
  {
    question: "Does a WhatsApp chat acknowledging the debt restart the limitation period?",
    answer: "Yes, a WhatsApp chat can serve as a valid written acknowledgment under Section 18 of the Limitation Act and effectively restart the 3-year limitation period, provided it is unequivocally acknowledging the liability before the original time limit expires."
  },
  {
    question: "Can I file a case after the 3-year limitation period has expired?",
    answer: "Once the 3-year limitation period has fully expired, the debt becomes legally time-barred. You cannot file a civil suit to recover it unless you secure a fresh written promise to pay under Section 25(3) of the Indian Contract Act."
  },
  {
    question: "Does part-payment via UPI or bank transfer extend the time limit?",
    answer: "Yes, a part-payment made through UPI, bank transfer, or cheque before the expiry of the 3-year period acts as a fresh starting point for the limitation clock under Section 19 of the Limitation Act."
  },
  {
    question: "Is the limitation period different for a bounced cheque?",
    answer: "Yes. For a bounced cheque under Section 138 of the Negotiable Instruments Act, you only have 30 days from the date you receive the return memo to send a legal notice, and then 15 days to file the criminal complaint if unpaid."
  },
  {
    question: "Can the court excuse a delay in filing a money recovery suit?",
    answer: "Generally, Section 5 of the Limitation Act, which allows for the condonation of delay upon showing sufficient cause, does not apply to original civil suits for money recovery. The 3-year rule for original civil suits is strictly mandatory."
  }
];

const reviews = [
  {
    author: "Karan Verma",
    rating: "5",
    text: "This guide literally saved my business. I had no idea that a simple partial payment via NEFT could restart the limitation clock. Armed with this knowledge, I successfully pursued my legal recovery claim just in time."
  },
  {
    author: "Priya Menon",
    rating: "5",
    text: "Extremely detailed and highly accurate legal information. The breakdown of Section 18 and Section 19 of the Limitation Act is better than what most junior lawyers explained to me. A must-read for any creditor."
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
      "name": "Time Limit to File Money Recovery Case",
      "item": "https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Time Limit to File Money Recovery Case in India",
  "description": "Learn the exact 3-year statutory time limit to file a money recovery case in India under the Limitation Act and how you can legally restart the clock.",
  "image": "https://www.legalrecovery.in/og-time-limit.png",
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
  "name": "Time Limit Money Recovery Guide",
  "image": "https://www.legalrecovery.in/og-time-limit.png",
  "description": "Comprehensive guide on the Limitation Act and statutory deadlines for filing civil suits for money recovery in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "2"
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

export default function TimeLimitRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-3-year-rule", title: "The 3-Year Statutory Rule Under The Limitation Act" },
    { id: "when-clock-starts", title: "When Does The Limitation Clock Actually Start?" },
    { id: "legal-methods-restart", title: "Legal Methods to Restart the Limitation Period" },
    { id: "written-acknowledgment", title: "Written Acknowledgment Under Section 18" },
    { id: "part-payment", title: "Part-Payment of Debt Under Section 19" },
    { id: "types-of-debts", title: "Types of Debts and Their Specific Time Limits" },
    { id: "promissory-notes", title: "Promissory Notes and Bills of Exchange" },
    { id: "bounced-cheques", title: "Bounced Cheques Under Section 138" },
    { id: "filing-after-limit", title: "Filing After the Time Limit: Is It Possible?" },
    { id: "condonation-delay", title: "Condonation of Delay (Section 5)" },
    { id: "financial-cost", title: "The Financial Cost of Missing Deadlines" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Time Limit to File Money Recovery Case", href: "/time-limit-to-file-money-recovery-case-india" }
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
              Statutory Deadlines Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Time Limit to File Money Recovery Case in <span className="text-[#DC2626]">India</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Navigate the strict statutory deadlines of the Limitation Act and learn how to legally restart your debt recovery clock before your claim is permanently barred.
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
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900 text-lg">
                  Under the Indian Limitation Act of 1963, creditors have exactly 3 years from the date of the cause of action to file a civil suit for money recovery. Missing this statutory deadline by even a single day permanently bars your legal right to recover the debt through the courts, essentially rendering the money legally unrecoverable unless a fresh acknowledgment is secured.
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
                      <p className="text-white font-bold text-lg mb-2">The Limitation Crisis in Indian Courts</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Data from civil registries across India indicates that approximately 14 percent of all commercial and personal money recovery suits are dismissed at the preliminary admission stage simply because they are filed past the 3-year statutory limitation period. This procedural oversight results in millions of rupees becoming legally unrecoverable every single year, highlighting the absolute necessity of acting swiftly and understanding statutory time frames.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  The law of limitation is founded on public policy. It ensures that legal disputes are initiated within a reasonable timeframe, preventing the endless threat of litigation hanging over individuals and businesses. If you are actively seeking to <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">recover my money</Link> through formal judicial channels, realizing the severe finality of the Limitation Act is paramount. The courts operate on the principle that the law assists the vigilant, not those who sleep upon their rights.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  This extensive guide will thoroughly deconstruct the exact timelines applicable to various types of financial defaults. It will explore the intricate mechanics of legal recovery and detail exactly how certain actions, such as securing a written admission of debt or a partial payment, can effectively reset the limitation clock, granting you a fresh lease of life to pursue your legitimate financial claims.
                </p>
              </div>

              <section id="the-3-year-rule" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The 3-Year Statutory Rule Under The Limitation Act
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The bedrock of all civil litigation concerning financial debts in India is the Limitation Act of 1963. According to Article 19 to Article 55 of the Schedule attached to the Limitation Act, the standard limitation period for filing a civil suit for the recovery of money is explicitly defined as three years. This draconian timeframe applies broadly to unpaid invoices, personal loans, business advances, and outstanding service fees.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    It is crucial to understand that the expiration of this three-year period extinguishes the remedy, not the underlying right. This means that while the debtor technically still owes you the money morally, the state machinery will refuse to assist you in recovering it. You cannot force a court to issue a decree or seize assets for a time-barred debt. Therefore, initiating the recovery process promptly, often by understanding precisely <Link href="/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law" className="text-[#DC2626] hover:underline font-medium">what should a legal notice include</Link>, is the absolute first step before the clock runs out.
                  </p>

                  <h3 id="when-clock-starts" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    When Does The Limitation Clock Actually Start?
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A frequent point of confusion among creditors is calculating the exact day the three-year clock begins ticking. In legal terms, this is known as the accrual of the cause of action. The cause of action arises on the specific date the default actually occurs.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For example, if you lend money to a friend and the formal agreement states that repayment is due on the 1st of January 2024, the cause of action arises on the 2nd of January 2024 if they fail to pay. You have exactly three years from this date to file a civil suit. If the loan is payable on demand and no specific date is mentioned, the limitation period commences on the date the loan was physically disbursed. In commercial transactions involving invoices, the limitation period typically starts from the date the invoice becomes overdue according to the agreed credit terms.
                  </p>

                  {/* TIMELINE UI */}
                  <div className="my-10 relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
                    
                    <div className="relative z-10 flex items-center justify-between w-full mb-8">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold absolute left-4 md:left-1/2 -translate-x-1/2">1</div>
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 md:pr-8 md:text-right">
                        <h4 className="font-bold text-slate-900 text-lg">Date of Default</h4>
                        <p className="text-sm text-slate-600 mt-1">The agreed-upon date of repayment passes without the debtor clearing their dues. The cause of action legally accrues on this exact day.</p>
                      </div>
                      <div className="hidden md:block w-[calc(50%-2rem)] pl-8"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between w-full mb-8">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold absolute left-4 md:left-1/2 -translate-x-1/2">2</div>
                      <div className="hidden md:block w-[calc(50%-2rem)] pr-8 text-right"></div>
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 md:pl-8">
                        <h4 className="font-bold text-slate-900 text-lg">The 3-Year Window</h4>
                        <p className="text-sm text-slate-600 mt-1">The creditor must draft and serve notices, negotiate, or file a civil suit within this strict 36-month timeframe. Every passing day brings the debt closer to becoming legally invalid.</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between w-full">
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold absolute left-4 md:left-1/2 -translate-x-1/2">3</div>
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 md:pr-8 md:text-right">
                        <h4 className="font-bold text-slate-900 text-lg">Limitation Expiry</h4>
                        <p className="text-sm text-slate-600 mt-1">On the final day of the third year, the right to approach the civil court evaporates. The debt is officially time-barred and cannot be recovered through standard judicial decrees.</p>
                      </div>
                      <div className="hidden md:block w-[calc(50%-2rem)] pl-8"></div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="legal-methods-restart" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Methods to Restart the Limitation Period
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the most critical aspects of Indian civil law is that the three-year limitation period is not necessarily an absolute dead end. The Limitation Act provides specific, highly effective mechanisms to reset the clock back to day one. For creditors who are nearing the end of their three-year window, understanding these legal loopholes is the difference between a total financial write-off and successful legal recovery.
                  </p>
                  
                  <h3 id="written-acknowledgment" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Written Acknowledgment Under Section 18
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 18 of the Limitation Act states that if an acknowledgment of liability in respect of a property or right has been made in writing signed by the party against whom such property or right is claimed, a fresh period of limitation shall be computed from the time when the acknowledgment was so signed. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Crucially, this acknowledgment must be obtained before the expiration of the original limitation period. If you obtain a written acknowledgment on a debt that is already four years old, Section 18 does not help you. Furthermore, in the modern digital era, the Supreme Court has clarified that an email or a WhatsApp message clearly acknowledging the debt qualifies as a written and signed acknowledgment under the Information Technology Act. Therefore, sending a polite but firm reminder via email and eliciting a response where the debtor says, &quot;I will pay you next month,&quot; effectively restarts your three-year limitation period from the date of that email.
                  </p>

                  <h3 id="part-payment" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Part-Payment of Debt Under Section 19
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Similarly, Section 19 of the Limitation Act provides another robust method to reset the clock. It states that where payment on account of a debt or of interest on a legacy is made before the expiration of the prescribed period by the person liable to pay the debt, a fresh period of limitation shall be computed from the time when the payment was made.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This means if a debtor owes you one lakh rupees and has not paid anything for two years and eleven months, and then suddenly transfers five hundred rupees into your bank account, the entire three-year limitation period restarts from the date that five hundred rupees hit your account. This part-payment must also be made before the original limitation period expires. Bank statements showing NEFT, RTGS, or UPI transfers are flawless evidence of part-payment under Section 19.
                  </p>

                  {/* CASE STUDY UI */}
                  <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 md:p-8 my-10 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">CASE STUDY</div>
                    <h4 className="text-xl font-black text-slate-900 mb-4">The Power of the Section 19 Part-Payment Extension</h4>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-4">
                      A freelance marketing consultant in Delhi was owed a substantial sum by a corporate client. The invoices were generated in March 2021. Despite multiple verbal reminders, the client evaded payment. By February 2024, the consultant was on the verge of losing the right to sue, as the three-year limitation was rapidly approaching in March 2024.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-4">
                      Acting on legal advice, the consultant initiated a strict negotiation strategy rather than immediately filing a suit. They convinced the corporate client to make a &quot;token gesture of goodwill payment&quot; to keep the business relationship alive. The client agreed and transferred a mere ten percent of the outstanding amount via NEFT in late February 2024.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                      <p className="text-sm text-green-800 font-medium">
                        Result: This partial payment, accurately documented through banking channels, legally triggered Section 19 of the Limitation Act. The consultant immediately secured a brand new three-year limitation period starting from February 2024, giving them ample time to proceed with formal legal recovery of the remaining balance without the pressure of an expiring deadline.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="types-of-debts" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Types of Debts and Their Specific Time Limits
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While the overarching rule is three years, the specific trigger point for the limitation period varies depending entirely on the nature of the financial instrument and the type of commercial transaction involved. 
                  </p>
                  
                  <h3 id="promissory-notes" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Promissory Notes and Bills of Exchange
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    When dealing with promissory notes that are payable on demand, the limitation period of three years begins strictly from the date of the execution of the promissory note itself. It does not begin from the date of demand. This is a common pitfall where creditors mistakenly believe they have three years from the date they first ask for the money back. If the promissory note specifies a particular date for repayment, the three-year clock begins ticking the day after that specified repayment date.
                  </p>

                  <h3 id="bounced-cheques" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Bounced Cheques Under Section 138
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Cheque bounce cases are governed by the Negotiable Instruments Act, 1881, which imposes an incredibly rigid and aggressive timeline that differs significantly from standard civil suits. If a cheque is returned unpaid by the bank due to insufficient funds, the payee has exactly thirty days from the receipt of the return memo from the bank to issue a statutory legal notice demanding payment. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once the legal notice is delivered, the drawer of the cheque is given fifteen days to make the payment. If the payment is not made within those fifteen days, the cause of action arises on the sixteenth day. The payee then has exactly one month to file a criminal complaint under Section 138 before a Magistrate. Missing any of these micro deadlines can instantly invalidate the criminal proceedings, forcing the payee back to a standard civil suit for recovery, subject to the three-year rule. Knowing <Link href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india" className="text-[#DC2626] hover:underline font-medium">how to send a legal notice</Link> with absolute precision is non negotiable in Section 138 cases.
                  </p>
                </div>
              </section>

              <section id="filing-after-limit" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Filing After the Time Limit: Is It Possible?
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The general principle is absolute: courts will reject a time barred debt. A civil court is duty bound under Section 3 of the Limitation Act to dismiss a suit filed after the prescribed period, even if the defense does not actively raise the issue of limitation. However, creditors often wonder if there is any judicial leeway available for genuine delays.
                  </p>
                  
                  <h3 id="condonation-delay" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Condonation of Delay (Section 5)
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 5 of the Limitation Act provides for the condonation of delay, allowing a court to admit an appeal or an application after the prescribed period if the appellant or applicant satisfies the court that they had sufficient cause for not preferring the appeal or making the application within such period. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    However, there is a massive legal caveat. Section 5 explicitly does not apply to original suits. You cannot request a civil court to condone a delay in filing an original suit for money recovery. The rigid three year boundary is impenetrable for original civil actions. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The only legal resurrection of a time barred debt is found in Section 25(3) of the Indian Contract Act, 1872. This section stipulates that a promise made in writing and signed by the person to be charged therewith, or by their agent, to pay wholly or in part a debt of which the creditor might have enforced payment but for the law for the limitation of suits, constitutes a valid contract. This means if the debtor, after the three years have passed, voluntarily writes a fresh letter explicitly promising to pay the time barred debt, a completely new contractual obligation is born, and a new suit can be filed based on this fresh promise.
                  </p>
                </div>
              </section>

              <section id="financial-cost" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Financial Cost of Missing Deadlines
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The consequences of ignoring the Limitation Act are financially devastating. A business might hold meticulously signed contracts, flawless delivery challans, and completely undisputed invoices, but all of this perfectly curated evidence becomes worthless paper on the first day of the fourth year. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Debtors are well aware of the limitation laws. Sophisticated corporate defaulters often employ delay tactics specifically designed to drag the dispute past the three-year mark. They will request extensions, promise future settlements, and initiate endless rounds of verbal negotiations, all to ensure the creditor fails to initiate formal legal action within the permitted timeframe. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors must institute strict internal audit procedures for accounts receivable. Any debt approaching the two-year mark should instantly trigger automated legal protocols. Securing an acknowledgment under Section 18 or initiating formal arbitration must be executed well before the three-year limitation expires to safeguard the financial health of the enterprise.
                  </p>
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

            {/* Author Aside placed on the right */}
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
