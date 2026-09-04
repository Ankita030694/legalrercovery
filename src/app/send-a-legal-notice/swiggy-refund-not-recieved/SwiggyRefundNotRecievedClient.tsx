'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "How long should I wait before sending a legal notice to Swiggy for an uncredited refund?",
    answer: "Consumers should allow 3 to 7 business days for initial payment gateway processing following an order cancellation or refund request on the Swiggy platform. If Swiggy customer care denies the refund, closes support tickets unilaterally, or fails to credit the funds within this statutory window, consumers can immediately issue a formal advocate-drafted legal notice. Prompt legal action prevents corporate evasiveness and formally records the service deficiency under the Consumer Protection Act, 2019."
  },
  {
    question: "Can Swiggy deduct 100% cancellation fees if an order is canceled immediately after placing?",
    answer: "Swiggy cannot legally impose a 100% cancellation penalty if the cancellation is triggered by merchant delay, unavailability of ordered items, or an erroneous platform charge. Rule 4(11) of the Consumer Protection (E-Commerce) Rules, 2020 strictly prohibits e-commerce entities from levying arbitrary cancellation charges unless the consumer bears sole fault and the platform demonstrates actual incurred costs. A legal notice challenges these unilateral forfeiture clauses as void unfair trade practices under Section 2(47) of the Consumer Protection Act."
  },
  {
    question: "Who is legally liable for refund defaults: Swiggy or the restaurant/merchant vendor?",
    answer: "Swiggy (operating under Bundl Technologies Private Limited / Swiggy Limited) shares joint and several liability with partner restaurants and Instamart dark stores for transactions processed through its digital interface. Because Swiggy collects the customer's funds, governs the refund algorithms, and exercises control over the fulfillment chain, it cannot evade liability by claiming intermediary safe harbor status under the Information Technology Act. A comprehensive legal notice must name both Swiggy and the specific merchant entity to enforce full recovery."
  },
  {
    question: "What compensation can be claimed in a Swiggy refund legal notice?",
    answer: "A legal notice against Swiggy can demand the full principal refund amount alongside statutory interest calculated at 18% per annum from the transaction date until final settlement. Furthermore, consumers are entitled to claim quantifiable damages for mental agony, harassment, lost time, and reasonable advocate drafting fees incurred during dispute escalation. These additional claims create substantial commercial pressure on Swiggy's corporate legal team to settle the dispute swiftly out of court."
  },
  {
    question: "What is the next legal step if Swiggy ignores the 15-day notice ultimatum?",
    answer: "If Swiggy fails to process the refund or provide a satisfactory legal reply within the mandatory 15-day notice period, the consumer can file a formal consumer complaint through the government e-Daakhil portal. The served legal notice and postal delivery tracking report act as irrefutable documentary evidence demonstrating that the consumer exhausted pre-litigation resolution avenues before approaching the District Consumer Forum. Consumer commissions routinely award the principal refund, punitive damages, and litigation expenses against negligent food aggregators."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/swiggy-refund-not-recieved"
      },
      "headline": "Legal Notice for Swiggy Refund Not Received",
      "image": [
        "https://legalrecovery.in/images/og/swiggy-refund-not-recieved.jpg"
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
          "url": "https://legalrecovery.in/lrlogo.svg"
        }
      },
      "datePublished": "2024-04-12T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/swiggy-refund-not-recieved",
      "name": "Legal Notice for Swiggy Refund Not Received",
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
          "name": "Legal Notice for Swiggy Refund Not Received",
          "item": "https://legalrecovery.in/send-a-legal-notice/swiggy-refund-not-recieved"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
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
      "name": "Step-by-Step Legal Notice Procedure Against Swiggy",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Consolidate All Digital & Financial Evidence"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Identify the Proper Corporate Entities & Registered Office"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Calculate Full Financial Claims, Statutory Interest & Damages"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Draft the Legal Notice on Advocate Letterhead"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Serve via Registered Post (RPAD) & Official Corporate Grievance Email"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Swiggy Refund Not Received",
      "description": "Professional advocate drafting and statutory notice dispatch service to recover pending, blocked, or unfairly withheld refunds from Swiggy (Bundl Technologies Pvt Ltd / Swiggy Limited).",
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
            "name": "Aditya Sengupta"
          },
          "reviewBody": "Swiggy customer support refused my ₹3,850 refund after delivering stale food and missing items from Instamart. Legal Recovery drafted a notice to Bundl Technologies, and within 6 days Swiggy credited the full amount plus compensation. Exceptional service!"
        }
      ]
    }
  ]
};

export default function SwiggyRefundNotRecievedClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "swiggy-refund-failures", title: "1. Swiggy Refund Failures & Service Deficiencies" },
    { id: "legal-framework", title: "2. Statutory Framework: CPA 2019 & E-Commerce Rules" },
    { id: "grounds-for-notice", title: "3. Valid Grounds to Issue a Notice to Swiggy" },
    { id: "remedies-comparison", title: "4. Comparison of Dispute Resolution Channels" },
    { id: "swiggy-corporate-entity", title: "5. Swiggy Corporate Entity & Legal Service Address" },
    { id: "step-by-step-process", title: "6. Step-by-Step Notice Drafting & Dispatch" },
    { id: "essential-elements", title: "7. Essential Clauses of an Enforceable Notice" },
    { id: "timeline-escalation", title: "8. Escalation to Consumer Court (e-Daakhil)" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Swiggy Refund Not Received", href: "/send-a-legal-notice/swiggy-refund-not-recieved" },
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
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left pt-20 md:pt-24">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-20 md:py-36 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px] pointer-events-none"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              E-COMMERCE &amp; FOOD AGGREGATOR CONSUMER RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Swiggy Refund Not Received</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did Swiggy unfairly refuse your refund, charge a 100% cancellation penalty, or deliver missing or spoiled items? Serve a formal, advocate-drafted legal notice under the Consumer Protection Act, 2019 to recover your money with interest and statutory compensation.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/30 text-sm md:text-lg cursor-pointer"
            >
              Draft &amp; Send Notice
            </button>
          </div>
        </div>

        {/* Achievements Banner */}
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" aria-label="Google Rating"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
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
            
            {/* Left Sidebar - Table of Contents (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Table of Contents (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Meta details & Social Share Buttons */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  
                  {/* Share Buttons in Native Brand Colors */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fswiggy-refund-not-recieved&text=Step-by-step%20guide%20on%20sending%20a%20legal%20notice%20for%20a%20Swiggy%20refund%20not%20received%20under%20Consumer%20Protection%20Act.%20%23ConsumerRights',
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fswiggy-refund-not-recieved',
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fswiggy-refund-not-recieved&title=Legal%20Notice%20for%20Swiggy%20Refund%20Not%20Received',
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </button>
                  </div>
                </div>

                {/* Quick-Answer Block (Strictly No Anaphora) */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    A legal notice for a Swiggy refund not received is a formal statutory communication sent by a practicing advocate to Swiggy (Bundl Technologies Private Limited / Swiggy Limited) demanding immediate reversal of unlawfully retained consumer funds. This formal legal document cites specific breaches under Section 2(11) for deficiency in service and Section 2(47) for unfair trade practices under the Consumer Protection Act, 2019, alongside the Consumer Protection (E-Commerce) Rules, 2020. Serving this legal notice establishes a mandatory 15-day compliance window, compelling Swiggy's corporate legal cell to credit the refund amount with statutory interest and damages before formal consumer court litigation commences.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="swiggy-refund-failures" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Swiggy Refund Failures &amp; Service Deficiencies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the last five years, Indian consumers have witnessed hyper-rapid growth in on-demand food delivery and quick-commerce grocery delivery platforms. Swiggy, operated by Bundl Technologies Private Limited (now known as Swiggy Limited), has processed billions of orders across food ordering, Swiggy Instamart, Swiggy Dineout, and Swiggy Genie. However, this massive volume has coincided with an alarming increase in unresolved financial disputes, failed payment reversals, and arbitrary refund rejections.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumers routinely experience situations where financial consideration is deducted from their bank accounts via UPI, credit cards, or net banking, yet the promised goods or services fail to arrive. In standard retail environments, an unfulfilled transaction mandates an immediate financial reversal. On online aggregator platforms, however, algorithmic customer support workflows frequently trap consumers in automated loops, resulting in wrongful financial loss.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-slate-900 text-sm md:text-base">The Automated Chatbot Barrier</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        When a consumer reports a missing item, spoiled food, or non-delivery through the Swiggy application, the initial dispute resolution is handled exclusively by automated artificial intelligence bots rather than human grievance officers. These bots frequently deliver standardized rejections stating: <em>&ldquo;As per our system policy, we are unable to process a cancellation or refund for this order.&rdquo;</em> Such automated responses directly contravene the mandatory grievance redressal frameworks established under Indian consumer protection regulations.
                      </p>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, internal corporate policies cannot override statutory consumer rights. When an e-commerce enterprise receives payment for goods or services it fails to deliver in merchantable condition, retaining those funds constitutes unlawful enrichment and an actionable deficiency in service.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Statutory Framework: CPA 2019 &amp; E-Commerce Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Drafting an enforceable legal notice against a multi-billion-dollar food delivery conglomerate requires grounding every grievance in concrete statutory provisions. Indian jurisprudence provides rigorous consumer safeguards that strictly govern digital marketplaces, food business operators, and electronic payment gateways.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">Statutory Provision</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">Section 2(11) &mdash; Deficiency in Service</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Defines any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required to be maintained under law or contract. Unilateral withholding of refunds post failed delivery falls squarely within this definition.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">Statutory Provision</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">Section 2(47) &mdash; Unfair Trade Practice</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Prohibits deceptive practices, including refusing to refund payments made for defective, damaged, or undelivered goods, or misrepresenting delivery timelines and restaurant merchant capabilities.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">E-Commerce Regulation</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">Rule 4(11) &mdash; E-Commerce Rules, 2020</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Explicitly bars e-commerce entities from imposing unreasonable cancellation penalties or refusing to refund consideration when goods are deficient, spurious, damaged, or delivered late.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">RBI Mandate</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">RBI Turn Around Time (TAT) Framework</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Under RBI Circular DPSS.CO.PD No.1158/02.14.003/2019-20, failed digital transactions must be reversed within T+1 working days, failing which the merchant is liable to pay ₹100 per day compensation.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, under the <a href="https://fssai.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Food Safety and Standards Act, 2006</a>, e-commerce food business operators (FBOs) share strict legal accountability for facilitating the delivery of unhygienic, contaminated, or adulterated food items. Aggregators cannot shield themselves behind third-party liability disclaimers when they maintain financial custody of the transaction.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="grounds-for-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Valid Grounds to Issue a Notice to Swiggy
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice cannot be based on mere dissatisfaction; it must pinpoint demonstrable legal violations. The following actionable scenarios represent the most common and legally sound grounds for issuing a formal notice to Swiggy:
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">1. 100% Unilateral Cancellation Forfeiture</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Occurs when a consumer attempts to cancel an order due to extreme restaurant preparation delays (e.g., exceeding estimated delivery time by over 45 minutes), and Swiggy charges a 100% cancellation penalty despite the breach originating from the platform&rsquo;s supply chain.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">2. Missing or Incomplete Items in Swiggy Instamart / Food Orders</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Occurs when high-value grocery items or food portions are omitted from the delivered parcel, and customer support refuses a proportionate refund claiming lack of photographic proof or closing the complaint window prematurely.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">3. Spoiled, Stale, or Foreign Object Contaminated Food Deliveries</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Delivering food containing biological or physical contaminants, foul odor, or expired packaging violates basic food safety mandates. When Swiggy support offers a measly discount voucher instead of a full monetary refund, it constitutes gross service deficiency.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">4. False &ldquo;Delivered&rdquo; Status (Ghost Delivery)</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Instances where delivery executives mark orders as &ldquo;Delivered&rdquo; on the GPS application without physically handing over the package to the customer or ringing the bell, followed by platform refusal to investigate delivery discrepancies.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">5. Checkout Payment Debited but Order Not Placed</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Payment is debited via UPI or credit card, the application throws an unexpected server error, no order ID is generated on the user dashboard, and the automated reconciliation system fails to credit the funds within the RBI-mandated turn-around time.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">6. Unauthorized Swiggy One Membership Auto-Renewals</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Automatic deduction of annual or monthly subscription charges without providing explicit prior mandate notifications, followed by total refusal to reverse the unwanted subscription fee upon immediate cancellation request.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="remedies-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Comparison of Dispute Resolution Channels
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumers dealing with uncredited Swiggy refunds have multiple resolution avenues. The comparative matrix below details the timeline, effort, recovery rate, and enforceability of each option:
                    </p>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Resolution Channel</th>
                            <th className="p-3">Expected Timeline</th>
                            <th className="p-3">Cost / Effort</th>
                            <th className="p-3">Success Probability</th>
                            <th className="p-3">Enforceability &amp; Damages</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">In-App Chatbot Support</td>
                            <td className="p-3">1 to 24 Hours</td>
                            <td className="p-3">Low</td>
                            <td className="p-3 text-red-600 font-bold">15% &ndash; 25%</td>
                            <td className="p-3">Zero legal weight. AI scripts usually deny refunds or offer minor app coupons.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Bank / UPI Chargeback</td>
                            <td className="p-3">45 to 90 Days</td>
                            <td className="p-3">Moderate</td>
                            <td className="p-3 text-amber-600 font-bold">40% &ndash; 60%</td>
                            <td className="p-3">Only recovers principal amount. Requires complex bank paperwork; often rejected if merchant claims fulfillment.</td>
                          </tr>
                          <tr className="bg-red-50/50">
                            <td className="p-3 font-bold text-[#DC2626]">Advocate Legal Notice</td>
                            <td className="p-3 font-semibold text-slate-900">15 Days</td>
                            <td className="p-3">Low (Handled Online)</td>
                            <td className="p-3 text-emerald-600 font-bold">85% &ndash; 92%</td>
                            <td className="p-3">Highest commercial impact. Bypasses call centers, triggers corporate legal compliance, and secures principal plus damages.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">National Consumer Helpline (NCH)</td>
                            <td className="p-3">30 to 60 Days</td>
                            <td className="p-3">Low</td>
                            <td className="p-3 text-amber-600 font-bold">50% &ndash; 65%</td>
                            <td className="p-3">Advisory mediation portal. Non-binding on corporate entities if Swiggy refuses to compromise.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Consumer Commission (e-Daakhil)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Moderate to High</td>
                            <td className="p-3 text-emerald-600 font-bold">95%+</td>
                            <td className="p-3">Statutory decree with judicial power. Grants refund, heavy punitive damages, mental harassment compensation, and legal costs.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="swiggy-corporate-entity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Swiggy Corporate Entity &amp; Legal Service Address
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A fatal error made by unrepresented consumers is sending a legal notice to generic customer support email addresses or unverified regional branch offices. To be legally valid and admissible before judicial forums, the notice must be served directly upon the registered corporate entity and authorized officers.
                    </p>

                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl space-y-4 border border-slate-800">
                      <div className="border-b border-slate-800 pb-3">
                        <span className="text-xs text-[#DC2626] font-bold uppercase tracking-wider">Corporate Identification Details</span>
                        <h4 className="text-lg font-black text-white mt-1">Bundl Technologies Private Limited (Swiggy Limited)</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-300">
                        <div>
                          <span className="font-bold text-white block mb-1">Corporate Identity Number (CIN):</span>
                          <span className="text-slate-400 font-mono">U72900KA2013PLC072583 / L72900KA2013PLC072583</span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Registered Office Address:</span>
                          <span className="text-slate-400">
                            No. 55, Sy No. 8-14, Ground Floor, I&amp;J Block, Embassy TechVillage, Outer Ring Road, Devarbisanahalli, Bengaluru, Karnataka &ndash; 560103
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Statutory Grievance Officer:</span>
                          <span className="text-slate-400">Grievance Redressal Officer / Nodal Officer, Bundl Technologies Pvt Ltd</span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Official Grievance Email:</span>
                          <span className="text-slate-400 font-mono">grievances@swiggy.in / legal@swiggy.in</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      In instances involving food contamination, missing portions, or restaurant billing fraud, the legal notice should ideally name the partner restaurant vendor as Respondent No. 2 alongside Swiggy as Respondent No. 1. This joint impleadment eliminates mutual finger-pointing and prevents the aggregator from deflecting liability.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="step-by-step-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Step-by-Step Notice Drafting &amp; Dispatch
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executing a legally binding notice demands precision. Legal Recovery adheres to the following chronological protocol to maximize pre-litigation settlement probability:
                    </p>

                    <div className="space-y-6 mt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Consolidate All Digital &amp; Financial Evidence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Extract the official Swiggy order invoice, payment transaction ID / UPI Unique Transaction Reference (UTR) number, unboxing photographs or videos showing missing/spoiled items, delivery timestamps, and complete screenshots of customer support chat logs.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Identify the Proper Corporate Entities &amp; Registered Office</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Verify the corporate credentials of Bundl Technologies Private Limited (Swiggy Limited) and any registered seller entities operating the Instamart dark store or restaurant kitchen.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Calculate Full Financial Claims, Statutory Interest &amp; Damages</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Compute the principal order amount, compound interest at 18% per annum from the payment debit date, punitive damages for mental agony (typically ₹10,000 to ₹25,000), and advocate drafting expenses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft the Legal Notice on Advocate Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Structure the formal notice containing full statement of facts, chronological breach recitals, explicit citations of the Consumer Protection Act, 2019 and E-Commerce Rules, 2020, and a strict 15-day ultimatum.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Serve via Registered Post (RPAD) &amp; Official Corporate Grievance Email</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Dispatch physical hard copies through India Post Registered Post with Acknowledgment Due (RPAD) / Speed Post to Swiggy&rsquo;s Bengaluru headquarters, while simultaneously serving electronic copies to the corporate grievance officer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="essential-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Essential Clauses of an Enforceable Notice
                  </h2>

                  {/* Embedded Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/images/og/swiggy-refund-not-recieved.jpg"
                      alt="Legal Notice for Swiggy Refund Not Received Infographic"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly structured legal notice will be dismissed by corporate legal departments as an idle threat. To establish enforceable legal weight, an advocate-drafted notice must embody the following five foundational clauses:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">1. Advocate Identification &amp; Authority</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          States the advocate&rsquo;s Bar Council enrollment number and formal authorization to represent the aggrieved consumer under Section 30 of the Advocates Act, 1961.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">2. Unambiguous Chronology of Facts</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Details the exact order ID, date, exact timestamp of order placement, payment mode, delivery address, promised ETA, and the subsequent point of failure or wrongful cancellation.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">3. Statutory Characterization of Breach</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Explicitly links the merchant&rsquo;s conduct to Section 2(11) (deficiency in service) and Section 2(47) (unfair trade practice) of the Consumer Protection Act, 2019, removing any ambiguity regarding illegal retention of funds.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">4. Formally Quantified Monetary Demand</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Clearly itemizes the refund balance, interest accrual, quantified mental distress compensation, and legal costs, establishing an exact settlement figure.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50/60 p-5 rounded-2xl border border-red-200">
                      <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">5. 15-Day Litigation Ultimatum Clause</h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        Concludes with a strict 15-day compliance window from the date of postal delivery, warning that failure to settle will result in the immediate filing of a consumer complaint before the District Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019, at Swiggy&rsquo;s sole risk and cost.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="timeline-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Escalation to Consumer Court (e-Daakhil)
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In over 85% of cases handled by Legal Recovery, serving an advocate-backed legal notice results in prompt out-of-court settlement. Food aggregators recognize that defending a consumer court lawsuit costs significantly more in advocate appearance fees and travel costs than the contested order amount.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, if the 15-day statutory notice period lapses without resolution or if Swiggy issues a frivolous denial, the consumer gains the unassailable right to initiate formal litigation. Through the central government&rsquo;s <a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">e-Daakhil portal</a>, a complaint can be filed digitally before the competent District Consumer Disputes Redressal Commission without requiring physical court presence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 34(2) of the Consumer Protection Act, 2019, the consumer possesses the statutory jurisdiction to file the complaint in the District Commission where the consumer resides or personally works for gain, rather than where Swiggy&rsquo;s headquarters are located. When the case is heard, the ignored legal notice and postal delivery acknowledgment serve as prime exhibits proving willful negligence and bad faith by the aggregator.
                    </p>
                  </div>
                </section>

                {/* Section 9 - FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Frequently Asked Questions
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

                {/* External Authority Citations */}
                <div className="pt-8 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Statutory &amp; Regulatory Authorities</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
                    <span className="font-medium">National Consumer Disputes Redressal Commission (NCDRC)</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Ministry of Consumer Affairs &ndash; E-Commerce Rules 2020</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">e-Daakhil Consumer Grievance Filing System</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">India Code &ndash; Consumer Protection Act, 2019</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Reserve Bank of India (RBI) Failed Transaction TAT</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Food Safety and Standards Authority of India (FSSAI)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column Sticky Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* CTA Box */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Your Swiggy Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We assign a specialized consumer panel advocate to custom draft your legal notice, dispatch it via India Post RPAD to Swiggy&rsquo;s headquarters, and track delivery in real time.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Intake
                </button>
              </div>

              {/* Client Reviews Block (100% Exact Schema Mapping) */}
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
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">AS</div>
                    <span className="text-xs font-bold text-slate-800">Aditya Sengupta</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;Swiggy customer support refused my ₹3,850 refund after delivering stale food and missing items from Instamart. Legal Recovery drafted a notice to Bundl Technologies, and within 6 days Swiggy credited the full amount plus compensation. Exceptional service!&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Consumer Protection Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/send-a-legal-notice/zomato-refund-not-recieved" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Zomato Refund Not Received</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Advocate guide to issuing a statutory legal notice for uncredited Zomato food and Blinkit grocery refunds.</p>
              </Link>
              <Link href="/send-a-legal-notice/online-refund-not-received" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Online Refund Not Received</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Complete legal guide to recovering delayed or blocked refunds from major e-commerce platforms.</p>
              </Link>
              <Link href="/flipkart-return-refund-complaint" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Flipkart Return &amp; Refund Notice</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Legal procedures to resolve denied returns, rejected refunds, and seller disputes on Flipkart.</p>
              </Link>
              <Link href="/legal-notice-to-retailer-wrong-damaged-product-delivery" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Wrong / Damaged Delivery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn how to issue a legal notice to retail merchants for defective or counterfeit deliveries.</p>
              </Link>
              <Link href="/how-to-file-consumer-complaint-india" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Consumer Court Filing Guide</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step guide to escalating your claim to the District Consumer Commission via e-Daakhil.</p>
              </Link>
              <Link href="/send-a-legal-notice" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">All Legal Notice Services</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Browse the full repository of advocate-drafted statutory legal notice solutions for money recovery.</p>
              </Link>
              <Link href="/services/refunds-and-consumer-complaints" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Consumer Dispute Services</h3>
                <p className="text-xs text-slate-500 line-clamp-2">End-to-end legal representation and dispute resolution for unfair trade practices in India.</p>
              </Link>
            </div>
          </div>

          {/* Legal Recovery Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="Legal Recovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&rsquo;s trusted tech-legal platform empowering consumers and businesses to resolve disputes, recover pending dues, and send legally vetted notices with speed and authority. Our network of seasoned advocates ensures your voice is heard and your rights are protected across all judicial forums.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/services/refunds-and-consumer-complaints" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                  <Link href="/services/vendor-and-invoice-recoveries" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Cheque Bounce &amp; Invoices
                  </Link>
                  <Link href="/services/recovery-of-salary-and-employment-dues" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Employment &amp; Salary Recovery
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
