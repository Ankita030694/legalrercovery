'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can I send a legal notice for an airline refund if the travel portal blames the airline?",
    answer: "Yes, you can send a legal notice to both the travel portal and the airline under the Consumer Protection Act, 2019, to claim your airline refund. Both entities are jointly and severally liable for the deficiency in service, preventing them from passing the buck. A formal legal notice compels the grievance officers of both companies to coordinate and process your refund within 15 days."
  },
  {
    question: "How much compensation can I claim for a delayed flight cancellation refund?",
    answer: "You can legally claim the total unrefunded ticket amount along with 12% to 18% interest per annum for the period of delay. Furthermore, consumer courts frequently award additional compensation for mental agony, harassment, and the legal costs incurred in sending the notice. The exact compensation depends on the severity of the airline's negligence and your documented financial loss."
  },
  {
    question: "Are airlines legally obligated to refund the money in cash rather than a credit shell?",
    answer: "Airlines are legally obligated to refund the ticket amount in the original mode of payment unless the consumer explicitly consents to accept a credit shell. The Directorate General of Civil Aviation (DGCA) strictly prohibits airlines from unilaterally converting refunds into credit vouchers without passenger approval. If an airline forces a credit shell upon you, it constitutes an unfair trade practice actionable via a legal notice."
  },
  {
    question: "Who do I address the legal notice to for a MakeMyTrip or Indigo refund failure?",
    answer: "The legal notice must be jointly addressed to the Grievance Officer or Nodal Officer at the registered corporate headquarters of both the e-commerce travel portal and the operating airline. Addressing both entities ensures that the intermediary marketplace cannot evade liability under the pretext of being merely a booking agent. This dual-targeting approach guarantees rapid intervention from their respective legal departments."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/airline-refund-not-received"
      },
      "headline": "Send a Legal Notice for Airline Refund Not Received",
      "image": [
        "https://legalrecovery.in/images/og/airline-refund-not-received.jpg"
      ],
      "author": {
        "@type": "Person",
        "name": "Advocate Aman Chawla",
        "url": "https://legalrecovery.in/authors/advocate-aman-chawla"
      },
      "reviewedBy": {
        "@type": "Person",
        "name": "Advocate Sneha Sharma",
        "url": "https://legalrecovery.in/authors/advocate-sneha-sharma"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Legal Recovery",
        "logo": {
          "@type": "ImageObject",
          "url": "https://legalrecovery.in/icon.png"
        }
      },
      "datePublished": "2024-03-14T08:00:00+08:00",
      "dateModified": new Date().toISOString()
    },
    {
      "@type": "Organization",
      "name": "Legal Recovery",
      "url": "https://legalrecovery.in",
      "sameAs": [
        "https://www.linkedin.com/company/legal-recovery-india",
        "https://twitter.com/legalrecoveryin"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://legalrecovery.in/send-a-legal-notice/airline-refund-not-received",
      "name": "Send a Legal Notice for Airline Refund Not Received",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "#quick-answer"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://legalrecovery.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Send a Legal Notice",
          "item": "https://legalrecovery.in/send-a-legal-notice"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Airline Refund Not Received",
          "item": "https://legalrecovery.in/send-a-legal-notice/airline-refund-not-received"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "ItemList",
      "name": "Steps to Send a Legal Notice for Airline Refund Not Received",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Secure the evidence (PNR, cancellation email, payment receipt, correspondence)"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Exhaust internal grievance mechanisms via AirSewa or airline portals"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft the legal notice detailing the deficiency in service under CPA and DGCA rules"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch the notice via registered post with acknowledgment due"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "File a consumer complaint if the dispute remains unresolved after 15 days"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Airline Refund Not Received",
      "description": "Professional legal notice drafting and dispatch service to demand a pending airline ticket refund from carriers and travel agencies.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "142"
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
            "name": "Amit Sharma"
          },
          "reviewBody": "Sent a legal notice for a canceled flight refund that was pending for 6 months. I received my full refund within 14 days of the notice. The lawyer was extremely professional."
        }
      ]
    }
  ]
};

export default function AirlineRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "dgca-guidelines", title: "1. DGCA Guidelines on Flight Refunds" },
    { id: "legal-liability", title: "2. E-Commerce Portals vs. Airlines Liability" },
    { id: "rejection-reasons", title: "3. Reasons for Delayed Airline Refunds" },
    { id: "remedies", title: "4. Comparison of Legal Remedies" },
    { id: "process", title: "5. Step-by-Step Notice Process" },
    { id: "elements", title: "6. Essential Notice Elements" },
    { id: "timeline", title: "7. Resolution Timeline & Escalation" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Airline Refund Not Received", href: "/send-a-legal-notice/airline-refund-not-received" },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden pt-32 md:pt-48 pb-20 md:pb-32 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              CONSUMER RIGHTS PROTECTION
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Airline Refund Not Received</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the exact legal steps to demand your pending airline refund from flight carriers and travel portals under the Consumer Protection Act, 2019.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Draft &amp; Send Legal Notice
            </button>
          </div>
        </div>

        {/* Achievements Strip */}
        <div className="bg-white border-b border-slate-200 py-6 relative z-30 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">100CR+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Amount Recovered</div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">10,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Cases Handled</div>
              </div>
              <div className="px-2">
                <div className="flex justify-center items-center gap-1.5 mb-1">
                  <span className="text-xl md:text-2xl font-black text-slate-900">4.7</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Google Rating</div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">15,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Customers Counselled</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-8xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-24 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Meta details & Share */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  
                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fairline-refund-not-received&text=Check%20out%20this%20comprehensive%20guide%20on%20sending%20a%20legal%20notice%20for%20an%20airline%20refund%20not%20received!%20%23ConsumerRights" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fairline-refund-not-received" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fairline-refund-not-received&title=Send%20a%20Legal%20Notice%20for%20Airline%20Refund%20Not%20Received" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Consumers can send a legal notice for an airline refund not received to demand immediate reimbursement for a canceled or delayed flight under the Consumer Protection Act, 2019. A formally drafted legal notice provides a strict 15-day ultimatum to the airline and the travel booking portal to return the full ticket amount and pay compensation for the deficiency in service. Failure to comply with the statutory notice empowers the passenger to file a formal complaint in the District Consumer Disputes Redressal Commission seeking the principal amount, accrued interest, and legal costs.
                  </p>
                </div>

                <section id="dgca-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. DGCA Guidelines on Flight Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The aviation sector in India is strictly regulated by the <a href="https://www.dgca.gov.in/" className="text-purple-600 hover:text-purple-800 hover:underline" target="_blank" rel="noopener noreferrer">Directorate General of Civil Aviation (DGCA)</a>, which has laid down explicit Civil Aviation Requirements (CAR) governing ticket refunds. According to CAR Section 3, Series M, Part IV, airlines must refund passenger tickets fully and promptly when flights are canceled by the airline itself. This regulatory framework establishes that failing to refund a ticket is a severe violation of aviation laws, constituting an unfair trade practice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the rules mandate the timeframe within which refunds must be processed. If a passenger paid via a credit card, the airline must execute the refund within seven days. For cash payments, the refund must be immediate. If an airline attempts to bypass these timelines by offering a credit shell or future travel voucher without the explicit, written consent of the passenger, it breaches its statutory duties. The consumer has an absolute legal right to demand the refund in cash or back to the original source account.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Despite these clear mandates, airlines frequently exploit procedural loopholes or blame payment gateways to delay payouts. In such scenarios, invoking the DGCA guidelines in a legal notice for a legal notice for airline refund establishes an undeniable legal precedent. It forces the airline's legal compliance team to recognize the breach of regulatory statutes and prioritize the settlement to avoid escalation to the aviation regulator or consumer courts.
                    </p>
                  </div>
                </section>

                <section id="legal-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. E-Commerce Portals vs. Airlines Liability
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A significant portion of flight tickets in India are booked through Online Travel Aggregators (OTAs) such as MakeMyTrip, Cleartrip, Yatra, or EaseMyTrip. When a refund is delayed, consumers often face a frustrating cycle of blame-shifting: the travel portal claims the airline hasn't released the funds, while the airline asserts that the refund has already been credited to the booking agent. Determining liability is essential for a successful legal notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Legally, under the Consumer Protection Act, 2019, and various precedents set by the <a href="https://ncdrc.nic.in/" className="text-purple-600 hover:text-purple-800 hover:underline" target="_blank" rel="noopener noreferrer">National Consumer Disputes Redressal Commission (NCDRC)</a>, both the airline and the travel portal are deemed jointly and severally liable. The travel portal cannot evade responsibility by citing its status as a mere intermediary or booking agent, as they charge convenience fees and facilitate the financial transaction. They are legally bound to ensure the consumer receives the service paid for or the corresponding refund.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Therefore, when preparing to send a legal notice for airline refund not received, the notice must be jointly addressed to the Grievance Officers of both the e-commerce travel platform and the operating airline. By making both entities "Noticees," the advocate legally compels them to resolve their internal accounting discrepancies and disburse the refund to the consumer immediately. This dual-party notice strategy is highly effective in terminating the corporate blame game.
                    </p>
                  </div>
                </section>

                <section id="rejection-reasons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Reasons for Delayed Airline Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Airlines and ticketing platforms deploy various administrative excuses to delay refunds, leveraging the complexity of aviation finance to frustrate consumers into abandoning their claims. Anticipating these defenses is crucial when drafting a robust legal notice.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                        <li><strong>Forced Credit Shells:</strong> Airlines unilaterally convert cash refunds into credit vouchers valid for future travel, violating the passenger's right to a monetary refund.</li>
                        <li><strong>Payment Gateway Delays:</strong> Companies falsely claim the refund is stuck with the bank or the intermediary payment gateway.</li>
                        <li><strong>OTA vs. Airline Disputes:</strong> The travel agency and the airline point fingers at each other regarding who holds the funds.</li>
                        <li><strong>Non-Refundable Fare Clauses:</strong> Airlines improperly apply "non-refundable" policies to flights that they canceled themselves, which is legally void.</li>
                        <li><strong>System Errors:</strong> Repeated claims of technical glitches preventing the processing of the refund to the source account.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Comparison of Legal Remedies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumers can pursue various channels to recover a delayed airline refund. The table below compares the effectiveness and timelines of the primary dispute resolution mechanisms available in India.
                    </p>
                    
                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Remedy Type</th>
                            <th className="p-3">Average Timeline</th>
                            <th className="p-3">Legal Weight</th>
                            <th className="p-3">Expected Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">AirSewa / DGCA Portal</td>
                            <td className="p-3">30 to 60 Days</td>
                            <td className="p-3">Moderate (Regulatory)</td>
                            <td className="p-3">Nodal officers may push the airline to refund, but lacks immediate punitive power.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Formal Legal Notice</td>
                            <td className="p-3">15 to 30 Days</td>
                            <td className="p-3">High (Pre-litigation)</td>
                            <td className="p-3">Direct settlement and prompt refund to avoid consumer court litigation.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Consumer Court (e-Daakhil)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Absolute (Statutory)</td>
                            <td className="p-3">Binding judicial order for the refund amount, interest, and substantial compensation.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Notice Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executing a legal demand against massive aviation corporations requires strict adherence to legal procedures. Follow these exact chronological steps to send a valid legal notice for an airline refund:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Secure the evidence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Collect the confirmed PNR ticket, cancellation email or SMS, payment receipt, and all written correspondence with customer support.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Exhaust internal grievance mechanisms</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Ensure you have formally requested the refund through the airline's official portal or the AirSewa platform to prove an initial attempt at resolution.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft the legal notice</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Engage an advocate to draft the notice detailing the deficiency in service under the Consumer Protection Act and DGCA Civil Aviation Requirements.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch via registered post</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Send the finalized legal notice via India Post with Acknowledgment Due (RPAD) to the registered corporate offices of the airline and OTA.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">File a consumer complaint</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">If the dispute remains unresolved after the 15-day deadline expires, file a formal complaint before the District Consumer Commission.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Notice Elements
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/airline-refund-not-received.jpg" alt="Airline Refund Not Received Legal Notice Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly drafted notice is easily ignored by corporate legal teams. To exert maximum pressure on an airline, the legal notice must contain specific statutory elements and structural precision.
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>Header and Advocate Details:</strong> Official advocate letterhead showcasing BAR enrollment credentials.</li>
                      <li><strong>Cause Title:</strong> Precise naming of the Airline's Nodal Officer and the OTA's Grievance Officer.</li>
                      <li><strong>Booking Credentials:</strong> Explicit mention of the PNR number, date of travel, and sector (e.g., DEL-BOM).</li>
                      <li><strong>Chronology of Default:</strong> A clear timeline of booking, cancellation by airline, and subsequent refund requests.</li>
                      <li><strong>Statutory Invocations:</strong> Direct citations to the Consumer Protection Act, 2019, and DGCA CAR Section 3.</li>
                      <li><strong>Demand Clause:</strong> Calculation of the exact refund amount, demanded interest rate, and litigation costs.</li>
                      <li><strong>Limitation Period:</strong> A non-negotiable 15-day ultimatum to process the payment before court action.</li>
                    </ul>
                  </div>
                </section>

                <section id="timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timeline &amp; Escalation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Statutory limitations dictate the pace at which a consumer must act. Under Indian law, a consumer has a strict two-year limitation period from the date of the airline's failure to refund to file a case in the consumer forum. Delaying legal action weakens the claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the legal notice is dispatched via registered post, the airline's legal department is given a standard 15-day period to comply with the demands. In cases involving clear regulatory breaches, such as a refusal to refund a carrier-canceled flight, the airline will typically reach out within this window to negotiate a settlement or instantly process the refund to avoid a summons from the District Commission.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the airline maintains silence or rejects the notice outright after the 15 days, the consumer's advocate will immediately escalate the matter by filing an online consumer complaint via the <a href="https://edaakhil.nic.in/" className="text-purple-600 hover:text-purple-800 hover:underline" target="_blank" rel="noopener noreferrer">e-Daakhil portal</a>. The courts view the unanswered legal notice as proof of the airline's obstinacy, significantly increasing the probability of winning punitive damages alongside the original refund.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Frequently Asked Questions
                  </h2>
                  <div className="mt-8 space-y-4">
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

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-xs text-slate-400">
                    References: [1] <a href="https://www.dgca.gov.in/" className="font-semibold text-purple-600 hover:text-purple-800 hover:underline" target="_blank" rel="noopener noreferrer">DGCA Civil Aviation Requirements, Section 3, Series M</a>. [2] <a href="https://consumeraffairs.nic.in/" className="font-semibold text-purple-600 hover:text-purple-800 hover:underline" target="_blank" rel="noopener noreferrer">The Consumer Protection Act, 2019</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-32">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Send Legal Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We match you with a panel advocate, handle the custom drafting, physically post the notice, and track its delivery in real-time.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Intake
                </button>
              </div>

              {/* Client Reviews */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-black mb-1 text-slate-900">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#F59E0B] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5</span>
                  <span className="text-xs text-slate-500">(142 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">AS</div>
                    <span className="text-xs font-bold text-slate-800">Amit Sharma</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;Sent a legal notice for a canceled flight refund that was pending for 6 months. I received my full refund within 14 days of the notice. The lawyer was extremely professional.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Consumer Protection Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/legal-notice-to-retailer-wrong-damaged-product-delivery" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Wrong Product Delivery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn how to send a legal notice if you received a faulty or incorrect product from an e-commerce platform.</p>
              </Link>
              <Link href="/how-to-file-consumer-complaint-india" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Consumer Court Filing</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step guide to escalating your grievance to the National Consumer Disputes Redressal Commission.</p>
              </Link>
              <Link href="/send-a-legal-notice" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">All Legal Notices</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Explore our full suite of legal notice templates and professional drafting services for various disputes.</p>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted consumer protection and legal tech platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ people on consumer disputes, defective products, and airline refund delays. Legal Recovery focuses on fast out-of-court settlements and connects you with top panel advocates.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Send Legal Notice
                  </Link>
                  <Link href="/how-to-file-consumer-complaint-india" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                  <Link href="/flipkart-return-refund-complaint" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Fight E-commerce Fraud
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isPaymentModalOpen && (
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      )}
    </>
  );
}
