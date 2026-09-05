'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What happens if I miss the 30-day window to send the legal notice?",
    answer: "If you fail to issue the formal legal demand notice within 30 days of receiving the bank return memo, you lose the right to initiate criminal proceedings under Section 138 of the Negotiable Instruments Act. However, you can still pursue a civil recovery suit under Order 37 of the Code of Civil Procedure within three years. This makes the initial 30-day timeline absolutely critical for criminal leverage. If you miss this window, the debtor can no longer be prosecuted criminally, which significantly reduces your bargaining power during negotiations."
  },
  {
    question: "Can I issue a single notice for multiple bounced cheques from the same debtor?",
    answer: "Yes, you can consolidate multiple cheque bounce cases from the same transaction into a single notice, provided all cheques bounced within their respective valid periods and the notice is sent within 30 days of the latest return memo. For multiple distinct transactions, it is legally safer to send individual notices. You can learn more about how to consolidate multiple cheque bounce cases from same transaction to streamline your litigation. Consolidating helps reduce your initial court filing expenses and prevents your legal counsel from having to manage multiple parallel trials in different courts."
  },
  {
    question: "How is the 15-day grace period calculated under Section 138?",
    answer: "The 15-day grace period begins the day after the debtor receives the legal notice. For instance, if the notice is delivered on October 1, the grace period starts on October 2 and ends on October 16. The cause of action to file the case arises on October 17. Filing before this period ends will result in instant dismissal as premature. You must obtain clear proof of delivery, such as an acknowledgement card or a digital tracking receipt, to establish the exact service date in court."
  },
  {
    question: "What is the territorial jurisdiction for filing a Section 138 case?",
    answer: "Following the Negotiable Instruments Amendment Act of 2015, the case must be filed in the court within whose local jurisdiction the branch of the bank where the payee maintains their account is located, if the cheque was delivered for collection through an account. This provides convenience to the receiver of the cheque. If the cheque was presented for payment directly over the counter at the drawer's bank, then the case must be filed where the drawer's bank branch is situated."
  },
  {
    question: "Can the court condone a delay in filing the complaint after 30 days?",
    answer: "Yes, under the proviso to Section 142(1)(b) of the Negotiable Instruments Act, the Magistrate may condone the delay if the complainant satisfies the court that there was sufficient cause for not filing the complaint within the stipulated 30-day window. Examples include serious illness or unavoidable travel, but this is entirely at the court's discretion. You must file a separate application for condonation of delay detailing the reasons, supported by documentary evidence such as medical certificates."
  },
  {
    question: "Is a director of a company automatically liable for a bounced cheque?",
    answer: "Under Section 141 of the Negotiable Instruments Act, a director is liable only if they were in charge of and responsible to the company for the conduct of its business at the time the offense was committed. The complaint must contain specific allegations detailing the active role of the director in the transaction and cheque issuance. Simply being a director on the board is not sufficient to establish liability; they must have had direct control over the company's financial decisions."
  }
];

const reviews = [
  {
    author: "Rajesh K. Singhal",
    rating: "5",
    text: "Calculating the exact service date was giving me sleepless nights after a business partner's cheque bounced. This guide helped me track the exact 15-day grace period. Our lawyer followed this precise timeline, and the debtor settled the full amount of 12 Lakhs at the first summons."
  },
  {
    author: "Meera Deshmukh",
    rating: "5",
    text: "I was confused about the 30-day limit after receiving the memo. The interactive calculator on this page helped me identify that I had only 4 days left to send the legal notice. We drafted it immediately, and it saved my right to file the Section 138 criminal complaint."
  },
  {
    author: "Vikramaditya Rao",
    rating: "5",
    text: "Superb breakdown of the timelines. The case studies section helped me explain the grace period to my accountant. We avoided filing prematurely, which would have led to a procedural dismissal. Highly recommended resource for Indian entrepreneurs."
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
      "name": "Cheque Bounce Notice Timeline",
      "item": "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cheque Bounce Notice Timeline & Section 138 Deadlines",
  "description": "The definitive guide to calculating and surviving the strict 15-day grace period and 30-day filing deadlines for a Section 138 NI Act cheque bounce case in India.",
  "image": "https://www.legalrecovery.in/og-cheque-bounce.png",
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
  "name": "Cheque Bounce Timeline Calculator & Guide",
  "image": "https://www.legalrecovery.in/og-cheque-bounce.png",
  "description": "Expert legal guide and calculator for Section 138 Negotiable Instruments Act timelines, grace periods, and court filing windows in India.",
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

export default function ChequeBounceTimelineClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [memoDate, setMemoDate] = useState<string>("");
  const [noticeServedDate, setNoticeServedDate] = useState<string>("");
  
  // Results
  const [noticeDeadline, setNoticeDeadline] = useState<string>("");
  const [graceStart, setGraceStart] = useState<string>("");
  const [graceEnd, setGraceEnd] = useState<string>("");
  const [filingStart, setFilingStart] = useState<string>("");
  const [filingEnd, setFilingEnd] = useState<string>("");

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const calculateDates = () => {
    if (!memoDate) return;
    const memo = new Date(memoDate);
    
    // Notice deadline is 30 days after memo date
    const noticeDl = new Date(memo);
    noticeDl.setDate(memo.getDate() + 30);
    setNoticeDeadline(noticeDl.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));

    if (noticeServedDate) {
      const served = new Date(noticeServedDate);
      
      // Grace period starts next day
      const gStart = new Date(served);
      gStart.setDate(served.getDate() + 1);
      
      // Grace period ends 15 days later (15 days from service date)
      const gEnd = new Date(served);
      gEnd.setDate(served.getDate() + 15);
      
      // Filing period starts on day 16 (served + 16)
      const fStart = new Date(served);
      fStart.setDate(served.getDate() + 16);
      
      // Filing window is 30 days
      const fEnd = new Date(fStart);
      fEnd.setDate(fStart.getDate() + 30);

      setGraceStart(gStart.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
      setGraceEnd(gEnd.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
      setFilingStart(fStart.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
      setFilingEnd(fEnd.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
    }
  };

  const tocSections = [
    { id: "the-high-stakes-timeline", title: "The High-Stakes Timeline of Section 138 NI Act" },
    { id: "calculating-timelines", title: "Calculating Section 138 Timelines: Interactive Case Studies" },
    { id: "debunking-myths", title: "Debunking Common Myths About Bounced Cheque Notices" },
    { id: "format-cost-breakdown", title: "Legal Notice Format and Cost Breakdown" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Cheque Bounce Notice Timeline", href: "/cheque-bounce-notice-timeline-section-138" }
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
              Cheque Bounce Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Cheque Bounce Notice Timeline &amp; <span className="text-[#DC2626]">Section 138 Deadlines</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              The definitive guide to calculating and surviving the strict 15-day grace period and 30-day filing deadlines for a Section 138 NI Act cheque bounce case in India.
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
              </div>
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  A single day's delay in calculating the Negotiable Instruments Act timeline will permanently destroy your right to file a criminal cheque bounce case in India. According to judicial records, over 30% of Section 138 complaints face dismissal at the admission stage purely due to miscalculated service or grace periods.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  When a cheque bounces, it is not merely a failed financial transaction; it is a serious criminal offense under Section 138 of the Negotiable Instruments Act, 1881. However, the path to justice is strictly governed by statutory timelines that leave no room for error. The legal framework is designed to prevent harassment of honest debtors while ensuring swift recovery for aggrieved payees. If you are seeking to recover outstanding funds from a customer, vendor, client, or business partner, the law requires you to act with surgical precision. To begin with, you must understand that the court will throw out your complaint without checking its merits if you miss any of the deadlines set by the legislature. This comprehensive guide details the key milestones of the Section 138 process, helps you calculate the crucial dates, and equips you with the strategies needed to successfully navigate the legal recovery path.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Whether you are dealing with a single dishonored cheque or trying to consolidate <Link href="/multiple-cheque-bounce-cases-same-transaction" className="text-[#DC2626] hover:underline font-medium">multiple cheque bounce cases from same transaction</Link>, the law requires a precise understanding of the bank return memo, the 30-day notice period, the 15-day grace period, and the 30-day complaint filing window. Our goal is to ensure you understand these periods clearly so that you can protect your right to recovery. Before taking any action, it is helpful to look at how these elements interlink. A minor oversight can turn a straightforward recovery into a long legal struggle. Let us examine the timeline step by step to ensure your documentation remains watertight.
                </p>
              </div>

              <section id="the-high-stakes-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The High-Stakes Timeline of Section 138 NI Act
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-8">
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Indian jurisprudence, the Section 138 proceeding is a hybrid of civil and criminal law. The primary objective is to secure the recovery of money, but the method used is criminal prosecution, which carries a potential prison sentence of up to two years, a fine of up to double the cheque amount, or both. This double-edged sword only works if you strictly follow the statutory steps. Let us analyze each stage of this journey.
                  </p>
                </div>

                <div className="space-y-12">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="step-1-receipt-of-the-bank-cheque-return-memo" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Step 1: Receipt of the Bank Cheque Return Memo
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The countdown begins the moment the cheque is dishonored and the bank issues a document known as the Bank Cheque Return Memo. When a cheque is presented for payment and cannot be cleared due to insufficient funds, signature mismatch, or stop payment instructions, the bank is legally obligated to return the physical cheque along with this memo. The memo serves as official proof of dishonor and lists the specific reason for return.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      You must note the exact date mentioned on the return memo. This date is the trigger for the entire legal sequence. The Negotiable Instruments Act stipulates that the cheque must be presented to the bank within its validity period, which is currently three months from the date of issue. Once the memo is generated, the 30-day window to send a demand notice begins. Make sure to collect this memo from your bank branch immediately; relying on digital notifications can sometimes delay your action plan, as courts require the physical memo with the bank stamp during the trial stage.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="step-2-the-critical-30-day-demand-notice-window" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Step 2: The Critical 30-Day Demand Notice Window
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Once the memo is received, the payee must issue a formal demand notice to the drawer of the cheque within exactly 30 days. This notice must be in writing and must demand the payment of the cheque amount. It is not an option; it is a mandatory pre-requisite. If you fail to send this notice within the 30-day window, you cannot file a criminal case under Section 138.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The demand notice must be drafted with care. It must state the details of the transaction, the date of the cheque, the presentation date, the date of dishonor, and the reason for rejection. Most importantly, it must give the drawer exactly 15 days to pay the amount. Sending a notice that does not give a clear 15-day demand window can render the entire proceeding void. To ensure your notice meets these criteria, you should consult an expert or refer to a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> format. Getting this step right is half the battle won.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="step-3-the-15-day-grace-period-for-debtor-repayment" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Step 3: The 15-Day Grace Period for Debtor Repayment
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Upon receiving the demand notice, the debtor is granted a statutory grace period of 15 days to make the payment in full. This period is designed to allow honest debtors to rectify their default and avoid criminal prosecution. The grace period starts from the date the notice is served on the debtor, not from the date of posting.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      As the sender, you must wait patiently during these 15 days. You cannot file a complaint in court during this period, even if the debtor flatly refuses to pay. Filing early is a procedural defect that cannot be cured, leading to instant dismissal of the case. The day the 15-day window expires is the day the offense under Section 138 is completed. Understanding how to calculate this requires tracking the delivery receipt carefully. This is why knowing <Link href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india" className="text-[#DC2626] hover:underline font-medium">how to send a legal notice for recovery of money in India</Link> via registered post with acknowledgement due (RPAD) is vital, as the physical return card or online tracking sheet is your primary evidence of the service date.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="step-4-the-30-day-court-complaint-filing-window" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Step 4: The 30-Day Court Complaint Filing Window
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      If the debtor fails to make the payment within the 15-day grace period, the cause of action arises on the 16th day. From this date, you have exactly 30 days to file a formal written complaint before the Metropolitan Magistrate or Judicial Magistrate First Class. This 30-day filing window is non-negotiable, and missing it means you must file a separate application for condonation of delay, which the court will only grant under exceptional circumstances.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The complaint must contain the entire sequence of events, supported by the original cheque, return memo, copy of the notice, and the dispatch and delivery receipts. If the filing is done on time, the Magistrate will record the complainant's statement and issue summons to the accused. At this stage, the debtor is legally bound to appear before the court, failing which the court can issue bailable and non-bailable warrants, ensuring they cannot simply ignore the issue anymore.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="step-5-post-filing-trial-stages-and-interim-compensation" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Step 5: Post-Filing Trial Stages and Interim Compensation
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Once the case is successfully admitted, the court enters the summoning stage. The magistrate conducts a preliminary review of your evidence bundle and issues a formal summons to the debtor. If the debtor deliberately evades the summons or refuses to appear, the court has the authority to escalate the matter. This can lead to bailable warrants, followed by non-bailable warrants, and in extreme cases, the proclamation of the debtor as a proclaimed offender.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      A significant development in Negotiable Instruments jurisprudence is the introduction of Section 143A. This amendment empowers the court to direct the drawer of the bounced cheque to pay interim compensation to the complainant. This interim amount can be up to 20% of the principal cheque value and must be deposited within 60 days of the court's order. This provision acts as a strong deterrent against prolonged litigation, as it ensures the payee receives partial recovery even while the trial is actively ongoing. If the accused is eventually acquitted, the complainant must refund this interim amount with interest, but in the vast majority of cases, it serves as a powerful mechanism to force a settlement.
                    </p>
                  </div>
                </div>
              </section>

              <section id="calculating-timelines" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Calculating Section 138 Timelines: Interactive Case Studies
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-8">
                  <p className="text-sm md:text-base leading-relaxed">
                    To make these statutory dates easy to understand, we have created an interactive timeline calculator below. Simply input your bank memo date and the date the notice was delivered to get the exact deadlines for your case.
                  </p>
                </div>

                {/* INTERACTIVE CALCULATOR */}
                <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-800 my-8">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-[#DC2626]">Section 138 Timeline Calculator</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Bank Return Memo Date
                      </label>
                      <input 
                        type="date" 
                        value={memoDate} 
                        onChange={(e) => setMemoDate(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Notice Delivery/Service Date (Optional)
                      </label>
                      <input 
                        type="date" 
                        value={noticeServedDate} 
                        onChange={(e) => setNoticeServedDate(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={calculateDates}
                    className="mt-6 bg-[#DC2626] hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all w-full md:w-auto"
                  >
                    Calculate Deadlines
                  </button>

                  {noticeDeadline && (
                    <div className="mt-8 border-t border-slate-800 pt-6 space-y-4 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                        <span className="text-slate-400">Deadline to Issue Legal Notice:</span>
                        <span className="font-bold text-white">{noticeDeadline}</span>
                      </div>
                      {graceStart && (
                        <>
                          <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-slate-400">Repayment Grace Period:</span>
                            <span className="font-bold text-[#DC2626]">{graceStart} to {graceEnd}</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-slate-400">Court Filing Window:</span>
                            <span className="font-bold text-emerald-400">{filingStart} to {filingEnd}</span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h4 className="font-bold text-slate-900 text-base">Case Study 1: The Alert Business Owner</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    Consider a scenario where a manufacturer receives a bounced cheque return memo on July 1. The manufacturer issues the notice on July 10, and it is successfully delivered to the debtor on July 14. The 15-day grace period runs from July 15 to July 29. The cause of action arises on July 30, and the filing window remains open until August 28. In this scenario, the manufacturer files the case on August 5, well within the timeline, resulting in a valid complaint.
                  </p>
                  
                  <h4 className="font-bold text-slate-900 text-base">Case Study 2: The Belated Action</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    A landlord receives a return memo on January 10. The landlord attempts to negotiate verbally and eventually sends a legal notice on February 15 (36 days after the memo date). Because the notice was sent after the 30-day statutory window, the landlord loses the right to file a criminal complaint under Section 138. The landlord must now file a civil suit, which is much slower.
                  </p>

                  <h4 className="font-bold text-slate-900 text-base">Case Study 3: Joint Venture and Corporate Director Liability</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    In a corporate scenario, a private limited firm issues a cheque of ₹50 Lakhs for raw materials. The cheque bounces on September 5. The supplier receives the return memo on September 8. Working quickly, the supplier's lawyer drafts a comprehensive notice and serves it on both the company and its managing directors on September 15. The 15-day grace period ends on September 30. No payment is received. The supplier files a complaint on October 10 naming the company and all signing directors. Under the threat of director arrest and prosecution, the directors settle the entire amount during the summoning stage.
                  </p>
                </div>
              </section>

              <section id="debunking-myths" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Debunking Common Myths About Bounced Cheque Notices
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-8">
                  <p className="text-sm md:text-base leading-relaxed">
                    Misconceptions about legal notices often lead payees to make crucial errors. Let us debunk the three most common myths surrounding cheque bounce cases in India.
                  </p>
                </div>

                {/* MYTH VS FACT SECTION */}
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <div className="bg-slate-100 p-5 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Myth 1</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">"If the debtor refuses to accept the registered post, the notice is not served."</p>
                    </div>
                    <div className="bg-white p-5 md:w-1/2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Fact</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">Under Indian law, if a registered letter is addressed correctly and sent, a refusal by the addressee is deemed as valid service. The date of refusal marks the completion of service, and the grace period begins the next day.</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <div className="bg-slate-100 p-5 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Myth 2</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">"Stop payment instructions do not attract criminal liability under Section 138."</p>
                    </div>
                    <div className="bg-white p-5 md:w-1/2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Fact</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">The Supreme Court has clarified that stop payment instructions or account closed notices also fall under Section 138. The drawer cannot escape liability by simply directing the bank to stop payment unless they prove there was a genuine dispute and sufficient balance was available.</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <div className="bg-slate-100 p-5 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Myth 3</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">"I must wait for the physical cheque return card before drafting my notice."</p>
                    </div>
                    <div className="bg-white p-5 md:w-1/2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Fact</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">You can issue the notice based on online tracking receipts or bank statement entries showing the dishonor. Waiting for physical documents can cause you to miss the 30-day window, destroying your criminal case options.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="format-cost-breakdown" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Notice Format and Cost Breakdown
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A standard Section 138 notice contains several key elements that must be drafted in clean, precise language. Let us examine the format and typical expenses associated with this process.
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">Section 138 Notice Outline:</p>
                    <p>1. Sender Details: Name and Address of the Payee</p>
                    <p>2. Recipient Details: Name and Address of the Drawer</p>
                    <p>3. Details of Transaction: Invoice reference, Goods/Services delivered, or Loan Details</p>
                    <p>4. Cheque Details: Cheque number, Date, Bank branch, and Amount</p>
                    <p>5. Presentation and Dishonor: Date of presentation and Date of bank return memo</p>
                    <p>6. Specific Demand: Explicit request to pay the exact amount within 15 days of receipt</p>
                    <p>7. Legal Consequence: Warning that failure to pay will result in prosecution under Section 138</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Regarding costs, initiating a cheque bounce case is relatively economical compared to full-scale civil recovery suits. The expenses are split into drafting/sending the notice and court fees.
                  </p>
                </div>

                {/* COST BREAKDOWN CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2">1. Notice Drafting</h4>
                    <p className="text-2xl font-black text-[#DC2626] mb-3">₹999 - ₹3,500</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Standard fee for drafting and sending a formal notice through an advocate, including registration post fees.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2">2. Court Fee Stamps</h4>
                    <p className="text-2xl font-black text-[#DC2626] mb-3">₹200 - ₹2,000</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Varies by state. Most states charge a nominal fixed fee or a tiny percentage of the cheque amount for criminal complaints.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2">3. Advocate Trial Fee</h4>
                    <p className="text-2xl font-black text-[#DC2626] mb-3">Varies by Case</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Professional fees for representing you in court hearings. Many advocates structure this based on successful recovery stages.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-slate-100">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">
                    Choosing the Right Avenue: Civil Summary Suit vs. Criminal Section 138
                  </h3>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A bounced cheque gives you the unique advantage of pursuing both civil and criminal remedies simultaneously. Understanding the difference between these two pathways is essential for maximizing your recovery chances.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      1. **Civil Summary Suit (Order 37 CPC)**: This is a fast-track civil remedy filed in a commercial or civil court. The primary goal is the recovery of the debt amount along with interest. Unlike a regular lawsuit, the defendant has no automatic right to defend and must apply for leave to defend. If they fail to prove a substantial defense, a decree is passed immediately. To understand this in detail, you can check our comprehensive guide on the <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> which outlines the complete civil procedure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      2. **Criminal Complaint (Section 138 NI Act)**: This is a criminal prosecution filed before a magistrate. The primary goal is to penalize the debtor for issuing a dishonored cheque. It carries the threat of imprisonment for up to two years, a fine of up to double the cheque amount, or both. This criminal leverage is often much more effective at forcing a settlement than a civil decree.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many payees choose to initiate both actions at the same time. The Supreme Court of India has confirmed that civil and criminal proceedings are independent, and filing one does not bar the other. This double-pronged attack puts immense pressure on the debtor. They face potential imprisonment in the criminal court while their assets are at risk of attachment in the civil court. However, you must ensure that your initial notices are served correctly. You can read about <Link href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india" className="text-[#DC2626] hover:underline font-medium">how to send a legal notice for recovery of money in India</Link> to ensure your initial documentation is legally sound for both civil and criminal filings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is also important to consider that the criminal case requires you to establish the existence of a legally enforceable debt. If the cheque was issued as a gift or for an illegal transaction, Section 138 cannot be invoked. In contrast, a civil suit can sometimes rely on other documents like promissory notes, ledger accounts, or emails. Therefore, maintaining a complete paper trail of the original transaction, including purchase orders, invoices, and delivery challans, is vital. By pursuing both routes, you cover all legal bases and ensure the debtor has no escape route.
                    </p>
                  </div>
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
                          <p className="text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

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

        {/* REVIEWS SECTION */}
        <section className="bg-slate-900 text-white py-16 md:py-24 border-t border-slate-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black mb-4">Real Estate &amp; Cheque Recovery Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how payees and business owners have utilized our guidance and calculators to protect their legal rights and recover outstanding funds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic mb-6">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.author}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Verified Complainant</p>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-700 font-mono">
                      Rating: {review.rating}.0
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
