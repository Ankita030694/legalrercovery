'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a gym legally refuse a refund if I signed a contract saying 'fees are non-refundable'?",
    answer: "No. Under the Consumer Protection Act, 2019, a blanket 'non-refundable' clause in a standard form contract is often classified as an unfair contract and an unfair trade practice. Businesses cannot unjustly enrich themselves by keeping money for services they have not provided, especially if you have a valid reason for cancellation."
  },
  {
    question: "Am I entitled to a full refund or a pro-rata refund for my annual membership?",
    answer: "You are generally entitled to a pro-rata refund. This means the gym can deduct the fee for the months you actually utilized the facilities (often calculated at their standard monthly rate) and must refund the balance amount for the unutilized months."
  },
  {
    question: "What if I have to cancel my membership due to a sudden medical emergency?",
    answer: "Medical emergencies, injuries, or sudden illnesses constitute a 'frustration of contract' under the Indian Contract Act. Since you are physically incapable of using the service due to unforeseen circumstances beyond your control, the gym is legally obligated to process a pro-rata refund upon presentation of valid medical certificates."
  },
  {
    question: "Can I get a refund if I am relocating to a city where the gym has no branches?",
    answer: "Yes. Relocation is a valid ground for terminating a long term service contract. If the service provider cannot offer their services in your new location, they cannot penalize you by retaining the upfront annual fee for services you cannot access."
  },
  {
    question: "Does the CCPA have specific guidelines against subscription traps?",
    answer: "Yes, the Central Consumer Protection Authority (CCPA) has issued strict guidelines prohibiting 'dark patterns' and unfair trade practices. Making it exceedingly difficult to cancel a subscription, hiding cancellation options, or forcing consumers into annual lock-ins without a clear exit policy violates these guidelines."
  },
  {
    question: "How long should I wait before sending a formal legal notice to the gym management?",
    answer: "If you have submitted a formal written request for cancellation (via email or physical letter) and the management denies the refund or ignores your communication for more than 15 days, you should immediately proceed with sending a legal notice drafted by an advocate."
  },
  {
    question: "Can I approach the Consumer Court directly without sending a legal notice first?",
    answer: "While you can technically file a consumer complaint directly, it is highly unadvisable. Judges expect consumers to have attempted an amicable resolution first. A legal notice proves you gave the business a fair opportunity to rectify their deficiency in service before burdening the courts."
  }
];

const reviews = [
  {
    author: "Neha T.",
    rating: "5",
    text: "I paid forty thousand rupees for an annual gym membership and fractured my ankle two months later. The manager rudely pointed to the 'no refund' sign. This guide showed me my rights. After my lawyer sent the legal notice citing the Consumer Protection Act, the head office called and processed my pro-rata refund within three days."
  },
  {
    author: "Karan V.",
    rating: "5",
    text: "An online coding bootcamp refused to refund my upfront fee when I had to relocate internationally for a job. They stopped replying to emails. The checklist here helped me organize my evidence. The threat of a CCPA complaint in the legal notice terrified them into returning my money."
  },
  {
    author: "Aditi M.",
    rating: "5",
    text: "I was stuck in a predatory yearly fitness app subscription that refused to cancel. Their customer service was a loop of bots. Sending a formal legal notice to their registered corporate address broke the loop. It proves that businesses only respond to real legal pressure."
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
      "name": "Refund of Gym Membership & Subscriptions",
      "item": "https://www.legalrecovery.in/legal-notice-to-gym-subscription-fee-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Refund of Gym Membership: Legal Notice & Consumer Action",
  "description": "Learn how to get a refund for your gym membership or online subscription in India. Draft a legal notice to challenge unfair no-refund policies.",
  "image": "https://www.legalrecovery.in/og-gym-refund.png",
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
  "name": "Gym & Subscription Refund Guide",
  "image": "https://www.legalrecovery.in/og-gym-refund.png",
  "description": "A comprehensive guide outlining consumer rights against unfair no-refund policies of gyms and digital subscription services, including steps to send a legal notice.",
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

export default function GymRefundNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-subscription-trap", title: "The Subscription Trap: Unfair Trade Practices",
      children: [
        { id: "the-myth-of-no-refunds", title: "The Myth of Absolute 'No Refunds'" },
        { id: "pro-rata-refunds", title: "Understanding Pro-Rata Refunds" }
      ]
    },
    { id: "refund-eligibility-checklist", title: "Refund Eligibility Evidence Checklist" },
    { id: "drafting-the-legal-notice", title: "Drafting the Legal Notice for Gym Refunds" },
    { id: "consumer-court-escalation", title: "Consumer Court Escalation Timeline" },
    { id: "success-stories-reviews", title: "Success Stories & Consumer Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Refund of Gym Membership", href: "/legal-notice-to-gym-subscription-fee-refund" }
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
              Consumer Rights Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice for Gym &amp; <span className="text-[#DC2626]">Subscription Refunds</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Gyms and online platforms often trap consumers in annual contracts with rigid no refund policies. Learn how the Consumer Protection Act invalidates these clauses and how to legally force a pro-rata refund.
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
                  The modern fitness and digital service industry operates heavily on the model of upfront annual commitments. Consumers are aggressively persuaded to pay for twelve months in advance to secure a heavily discounted monthly rate. The core business assumption driving this model is breakage; companies rely entirely on the statistical probability that a large percentage of consumers will stop using the service after a few months, resulting in massive, unearned profit for the business.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The conflict inevitably arises when a consumer actively attempts to cancel this membership and demands a refund for the remaining, unutilized months. Whether the cancellation is due to a sudden medical injury, a career relocation to a different city, or simply profound dissatisfaction with the quality of the service, the corporate response is almost universally identical: they point to a microscopic clause in the terms and conditions explicitly stating that all fees are non-refundable under any circumstances whatsoever.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Consumers are conditioned to accept this rejection as final. They assume that because they signed the digital waiver or the physical contract, they have irrevocably signed away their money. This assumption is legally incorrect and plays directly into the hands of predatory business models. Indian consumer law, specifically the Consumer Protection Act of 2019 and the sweeping guidelines issued by the Central Consumer Protection Authority (CCPA), provides powerful ammunition against these exact tactics.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  A gym membership refund legal notice is not just a polite request; it is a formal declaration of your consumer rights and a warning of impending litigation. Businesses know their non-refundable clauses rarely survive judicial scrutiny. To learn more about initiating formal disputes, reading about a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is a great starting point.
                </p>
              </div>

              <section id="the-subscription-trap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Subscription Trap: Unfair Trade Practices
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    To successfully challenge a corporate subscription denial, you must understand how consumer courts view these contracts. They do not view them as agreements between equals, but rather as standard form contracts heavily skewed against the consumer.
                  </p>

                  <h3 id="the-myth-of-no-refunds" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Myth of Absolute "No Refunds"
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A clause that strictly prohibits refunds, regardless of the circumstances, is legally defined as an "unfair contract" under Section 2(46) of the Consumer Protection Act, 2019. The law prohibits contracts that impose unreasonable charges, obligations, or conditions which put the consumer at a disadvantage. If a gym retains your annual fee when you are physically paralyzed or have moved across the country, they are engaging in Unfair Trade Practices. 
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Courts recognize the doctrine of "unjust enrichment." A business cannot legally retain money for a service it has not yet provided and will never provide. When you cancel in month three of a twelve month contract, retaining the fees for months four through twelve is unjust enrichment. 
                  </p>

                  <h3 id="pro-rata-refunds" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Understanding Pro-Rata Refunds
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    It is crucial to set realistic legal expectations. You are rarely entitled to a full, one hundred percent refund if you have utilized the service for a certain period. The legal standard is a "pro-rata refund."
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    In a pro-rata settlement, the business is legally permitted to calculate the cost of the time you actually used the facility, typically recalculating it at their standard, non-discounted monthly rate, rather than the heavily discounted annual rate. They deduct this utilized amount from your upfront payment and must refund the balance. Refusal to process this pro-rata balance is the exact trigger for legal action.
                  </p>
                </div>
              </section>

              <section id="refund-eligibility-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Refund Eligibility Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Before your advocate can draft a compelling legal notice, you must compile evidence that proves your cancellation is based on legitimate, legally recognized grounds rather than mere buyer remorse.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. Proof of the Payment and Contract</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Collect the original invoice, credit card statements showing the charge, and any digital copy of the terms and conditions or membership agreement provided at the time of signing up.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Medical Documentation (If Applicable)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If cancelling due to health, you need official medical certificates, MRI reports, or a letter from an orthopedic surgeon explicitly advising against physical exertion or gym activities.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. Proof of Relocation (If Applicable)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If moving, provide a formal job transfer letter from your HR department, a newly signed lease agreement in the destination city, or updated utility bills demonstrating your change of address.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Documented Deficiency of Service</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If cancelling because the gym is dirty, equipment is broken, or trainers are absent, you must have photos, videos, or copies of prior written complaints submitted to management proving the deficiency.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    By attaching these specific proofs to your formal legal demands, you strip the business of its ability to claim the cancellation was arbitrary.
                  </p>
                </div>
              </section>

              <section id="drafting-the-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting the Legal Notice for Gym Refunds
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    When customer support ignores your emails, an advocate notice bypasses the front desk and lands directly on the desks of the corporate legal and compliance teams. These teams understand consumer law and know when a fight is too expensive.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must meticulously construct the timeline. It states the date of joining, the exact amount paid upfront, and the exact date you formally requested cancellation. It then details the specific reason for cancellation, referencing the attached medical or relocation proof, firmly establishing that continuing the contract is impossible.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The core legal argument must accuse the gym of "Deficiency in Service" and "Unfair Trade Practices" under the Consumer Protection Act, 2019. It will explicitly state that relying on a blanket non-refundable clause constitutes an unfair contract and unjust enrichment. 
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The demand section must calculate the precise pro-rata refund amount owed. It will set a strict 15 day deadline for the business to transfer the funds. Furthermore, the notice will state that failure to comply will result in a formal petition before the District Consumer Disputes Redressal Commission, where the consumer will seek not only the refund but also heavy compensation for mental harassment and full coverage of all litigation costs. For rapid deployment against corporate entities, utilizing an <Link href="/online-legal-notice" className="text-[#DC2626] hover:underline font-medium">online legal notice</Link> service ensures the document is formatted correctly and tracked legally.
                  </p>
                </div>
              </section>

              <section id="consumer-court-escalation" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Consumer Court Escalation Timeline
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Understanding the escalation path demonstrates why legal notices are so effective. Corporations want to avoid the final step of this timeline at all costs.
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
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: The Legal Notice Phase</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Your advocate sends the formal notice digitally via verified email to the gym corporate headquarters. This triggers an internal legal review. Realizing they are dealing with a legally informed consumer and risking a CCPA complaint, many businesses quietly process the refund during this window.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 30: CCPA &amp; NCH Complaints</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the notice is ignored, the next step involves filing formal grievances on the National Consumer Helpline (NCH) portal and flagging the business to the CCPA for engaging in dark patterns and unfair contracts. Regulatory pressure often forces compliance.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 30 Onwards: Consumer Court Petition</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The final escalation is filing a formal case in the District Consumer Disputes Redressal Commission. The court issues a summons to the company. Defending a consumer case is incredibly expensive for businesses, and courts routinely rule in favor of the consumer regarding pro-rata refunds for valid medical or relocation issues.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Consumer Reviews
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
                  Discuss your membership dispute with consumer rights experts. We draft legally compliant notices to force gyms and subscriptions to process your refund.
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
