'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "How long should I wait before sending a legal notice for an online refund?",
    answer: "You should generally wait for the standard 7 to 14 business days prescribed by most e-commerce return policies before escalating the issue. If the seller fails to process the refund beyond their stated timeline and ignores your written reminders, you can immediately send a legal notice for deficiency in service."
  },
  {
    question: "Can I claim compensation along with my delayed online refund?",
    answer: "Yes, under the Consumer Protection Act, 2019, you are fully entitled to claim additional compensation for mental agony, harassment, and legal expenses. Your legal notice must clearly quantify these damages alongside the principal refund amount to ensure the merchant understands your intent to pursue strict penal action."
  },
  {
    question: "What documents are required to draft a legal notice for an online refund?",
    answer: "To draft a compelling legal notice, you must gather your original invoice, order confirmation emails, payment transaction receipts, and all written correspondence or chat transcripts with customer support. These documents serve as irrefutable evidence of the transaction and the merchant's subsequent failure to initiate the online refund."
  },
  {
    question: "Is the e-commerce platform or the third-party seller liable for the refund?",
    answer: "Both parties share joint and several liability. E-commerce platforms cannot evade responsibility under 'safe harbor' provisions if they actively facilitate the transaction. Therefore, the legal notice should be addressed jointly to both the platform and the third-party seller to maximize legal pressure."
  },
  {
    question: "What happens if the company ignores the legal notice?",
    answer: "If the company fails to respond or process the refund within the 15-day ultimatum stipulated in the notice, you have the legal right to file a formal complaint in the District Consumer Disputes Redressal Commission. The ignored legal notice will serve as crucial evidence that you exhausted pre-litigation attempts."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/online-refund-not-received"
      },
      "headline": "Send a Legal Notice for Online Refund Not Received",
      "image": [
        "https://legalrecovery.in/images/og/online-refund-not-received.jpg"
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/online-refund-not-received",
      "name": "Send a Legal Notice for Online Refund Not Received",
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
          "name": "Online Refund Not Received",
          "item": "https://legalrecovery.in/send-a-legal-notice/online-refund-not-received"
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
      "name": "Step-by-Step Notice Process",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Compile All Evidentiary Materials"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Identify the Defending Parties"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft the Legal Notice via an Advocate"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch via Registered Post & Electronic Means"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Establish a 15-Day Ultimatum"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Online Refund Not Received",
      "description": "Professional legal notice drafting and dispatch service to demand your delayed or blocked refund from an e-commerce platform.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1420"
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
          "reviewBody": "Legal Recovery helped me get my ₹45,000 refund from a major e-commerce site in just 8 days after sending the notice. Highly recommend their swift and professional service."
        }
      ]
    }
  ]
};

export default function OnlineRefundNotReceivedClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "deficiency-in-service", title: "1. What Constitutes a Deficiency in Service?" },
    { id: "merchant-obligations", title: "2. E-Commerce Obligations for Refunds" },
    { id: "common-excuses", title: "3. Common Merchant Excuses for Delays" },
    { id: "legal-remedies", title: "4. Comparison of Consumer Remedies" },
    { id: "step-by-step", title: "5. Step-by-Step Notice Process" },
    { id: "essential-elements", title: "6. Essential Notice Elements" },
    { id: "timeline-escalation", title: "7. Resolution Timeline & Escalation" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Online Refund Not Received", href: "/send-a-legal-notice/online-refund-not-received" },
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
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        serviceType="legal-notice-refund"
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              CONSUMER FINANCIAL PROTECTION
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Online Refund Not Received</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Hold e-commerce platforms and sellers accountable for delayed or denied refunds. Draft and send a legally binding notice under the Consumer Protection Act to recover your money instantly.
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
                  <span className="text-xl md:text-2xl font-black text-slate-900">4.9</span>
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fonline-refund-not-received&text=Check%20out%20this%20comprehensive%20guide%20on%20sending%20a%20legal%20notice%20for%20an%20online%20refund%20not%20received!%20%23ConsumerRights" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fonline-refund-not-received" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fonline-refund-not-received&title=Send%20a%20Legal%20Notice%20for%20Online%20Refund%20Not%20Received" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    A legal notice for an online refund not received is a formal communication warning an e-commerce platform or seller of impending litigation if they fail to process an owed refund. Consumers must draft this notice strictly detailing the transaction ID, product details, and the seller's failure to adhere to their return policy timeline. Sending a legally sound notice compels the merchant to issue the refund immediately to avoid severe penalties and consumer court proceedings.
                  </p>
                </div>

                <section id="deficiency-in-service" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. What Constitutes a Deficiency in Service?
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the realm of digital commerce, the withholding of a consumer's money post-cancellation or valid return represents a severe "deficiency in service." The Consumer Protection Act, 2019, specifically categorizes the unreasonable delay of a refund as an unfair trade practice. When you purchase an item online, a legal contract is established. If the e-commerce platform or the seller agrees to accept a return—or if the order is canceled before dispatch—they are legally bound to reverse the transaction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A deficiency arises the moment the merchant surpasses their own publicly stated refund timeline (often 7 to 14 working days). Many corporations rely on the fact that individual consumers lack the resources to enforce these timelines, using the aggregated delayed refunds as working capital. By failing to credit the amount back to the original payment source, the seller violates Section 2(11) of the Act, which defines 'deficiency' as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance that is required to be maintained by or under any law for the time being in force.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumers should not view a delayed refund as a mere operational hurdle. It is a statutory breach. The moment the internal grievance timelines expire, the consumer’s right to seek legal recourse crystallizes, paving the way for the dispatch of a formal legal notice.
                    </p>
                  </div>
                </section>

                <section id="merchant-obligations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. E-Commerce Obligations for Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To curb rampant malpractices in the digital retail space, the Ministry of Consumer Affairs introduced the Consumer Protection (E-Commerce) Rules, 2020. These rules impose rigid, non-negotiable obligations on both inventory-based e-commerce entities and marketplace platforms like Amazon, Flipkart, Myntra, and others. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Rule 4(11) of the E-Commerce Rules explicitly mandates that no e-commerce entity shall refuse to take back goods, or withdraw or discontinue services purchased or agreed to be purchased, or refuse to refund consideration, if such goods or services are defective, deficient, spurious, or if they are delivered late. Furthermore, Rule 5 places the burden of ensuring a seamless refund process squarely on the platform, forcing them to maintain an active, responsive grievance redressal mechanism.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Crucially, the law does not allow marketplace platforms to completely wash their hands of financial liability by hiding behind the 'intermediary' defense found in the Information Technology Act. If the platform facilitates the payment collection, manages the logistics, and dictates the return policy, consumer courts hold them jointly and severally liable alongside the independent third-party seller for the failure to process a refund.
                    </p>
                  </div>
                </section>

                <section id="common-excuses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Common Merchant Excuses for Delays
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      E-commerce support teams are trained to use a myriad of operational excuses to delay refund payouts. Recognizing these tactics is the first step in formulating a robust legal notice that cuts through the corporate bureaucracy.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                        <li><strong>"Stuck in the Payment Gateway":</strong> Merchants frequently blame banking partners or payment gateways like Razorpay or PayU for the delay. However, legally, the consumer's contract is with the merchant, and the merchant holds the ultimate responsibility to ensure the reversal.</li>
                        <li><strong>"Quality Check Failed":</strong> After accepting a return, sellers may arbitrarily claim the item failed a secondary quality check at their warehouse, indefinitely holding the refund without providing concrete photographic evidence to the consumer.</li>
                        <li><strong>"Refund Initiated, Await Bank Processing":</strong> Platforms often mark the refund as 'processed' on their dashboard, yet the ARN (Acquirer Reference Number) is never generated, indicating the funds never left the merchant's account.</li>
                        <li><strong>"Account Blocked/Flagged":</strong> Some platforms freeze consumer accounts citing 'suspicious activity' or 'too many returns' just as a large refund is due, effectively trapping the funds.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Comparison of Consumer Remedies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a refund is delayed, consumers have several avenues for dispute resolution. The table below compares the primary mechanisms available, highlighting why a legal notice is often the most effective pre-litigation tool.
                    </p>
                    
                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Remedy Type</th>
                            <th className="p-3">Timeline</th>
                            <th className="p-3">Cost / Effort</th>
                            <th className="p-3">Effectiveness & Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Credit Card Chargeback</td>
                            <td className="p-3">45 to 90 Days</td>
                            <td className="p-3">Low</td>
                            <td className="p-3">High success rate for credit cards, but not applicable for UPI, debit, or net banking transactions.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Formal Legal Notice</td>
                            <td className="p-3">15 to 30 Days</td>
                            <td className="p-3">Moderate</td>
                            <td className="p-3">Highly effective. Forces the corporate legal team to intervene, resulting in rapid out-of-court settlements.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Consumer Court (e-Daakhil)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">High</td>
                            <td className="p-3">Absolute statutory power. Can award the refund, interest, mental agony compensation, and legal costs.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Notice Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sending a legal notice for an online refund not received requires adherence to a strict procedural sequence to ensure the communication is legally valid and admissible as evidence. Follow these exact chronological steps:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Compile All Evidentiary Materials</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Gather the original tax invoice, payment deduction SMS/email from your bank, order cancellation or return confirmation, and all chat transcripts with the platform's support team.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Identify the Defending Parties</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Extract the correct legal entity names and registered corporate office addresses of both the marketplace platform (e.g., Amazon Seller Services Pvt Ltd) and the specific third-party seller.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft the Legal Notice via an Advocate</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Draft the document using formal legal terminology on the letterhead of a practicing advocate, explicitly invoking the Consumer Protection Act, 2019.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch via Registered Post & Electronic Means</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Send the physical copies via India Post RPAD (Registered Post with Acknowledgment Due) to secure a legally valid delivery receipt. Simultaneously, email a digital copy to the grievance officers.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Establish a 15-Day Ultimatum</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">The notice must conclude with a definitive compliance window, typically 15 days from the date of receipt, warning of consumer court litigation if the refund is not processed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="essential-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Notice Elements
                  </h2>
                  
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/online-refund-not-received.jpg" alt="Online Refund Not Received Legal Notice Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice cannot be a simple angry letter. To ensure the document holds absolute legal validity and forces a settlement, the notice must contain specific structural elements and statutory references. If the matter eventually goes to court, this document will serve as the foundation of your legal complaint.
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>Header and Advocate Details:</strong> Must be drafted on the official letterhead of a registered legal practitioner containing their Bar Council enrollment number.</li>
                      <li><strong>Chronology of Facts:</strong> Precise timeline of the order placement, payment deduction, order cancellation/return, and subsequent follow-ups.</li>
                      <li><strong>Description of Breach:</strong> Clear articulation of how the company's failure to refund violates their own terms of service and consumer laws.</li>
                      <li><strong>Statutory Invocations:</strong> Explicit references to the Consumer Protection Act, 2019, and the E-Commerce Rules, 2020.</li>
                      <li><strong>Demand Clause:</strong> Precise monetary calculation demanding the principal refund, plus additional compensation for mental agony and legal drafting expenses.</li>
                    </ul>
                  </div>
                </section>

                <section id="timeline-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timeline &amp; Escalation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The timeline for resolving a blocked refund accelerates massively once a formal legal notice reaches the company's headquarters. Most e-commerce entities have internal legal compliance teams tasked with preventing consumer disputes from reaching public courts, as litigation damages brand reputation and incurs heavy legal defense costs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon receiving the legal notice via Registered Post, the corporate legal department typically intervenes. In clear-cut cases of delayed refunds, the company will usually bypass the standard customer support hierarchy and contact the consumer directly within 7 to 10 days to initiate an out-of-court settlement, resulting in an immediate bank transfer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, if the 15-day ultimatum expires without a satisfactory resolution, the consumer possesses the absolute right to escalate the matter. A formal complaint should be filed in the District Consumer Disputes Redressal Commission (easily accessible via the e-Daakhil portal). The court will review the ignored legal notice as irrefutable proof of the merchant's negligence, opening the door for punitive damages.
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
                    References: [1] <span className="font-semibold text-slate-700">The Consumer Protection (E-Commerce) Rules, 2020</span>. [2] <span className="font-semibold text-slate-700">NCDRC Directives</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Your Money Now</h3>
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
                  <span className="text-xs text-slate-500">(1,420 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">RK</div>
                    <span className="text-xs font-bold text-slate-800">Rajesh Kumar</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "Legal Recovery helped me get my ₹45,000 refund from a major e-commerce site in just 8 days after sending the notice. Highly recommend their swift and professional service."
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
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Damaged Product Delivery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn how to send a legal notice if you received a faulty or damaged product from an e-commerce platform.</p>
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
                Legal Recovery is India's trusted tech-legal platform empowering consumers and businesses to resolve disputes, recover pending dues, and send legally vetted notices with speed and authority. Our network of seasoned advocates ensures your voice is heard and your rights are protected.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/services/consumer-complaints" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                  <Link href="/services/cheque-bounce" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Cheque Bounce Cases
                  </Link>
                  <Link href="/services/corporate-recovery" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Corporate Debt Recovery
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
