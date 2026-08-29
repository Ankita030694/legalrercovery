'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "How long should a consumer wait before sending a legal notice to Zomato for an uncredited refund?",
    answer: "Consumers should wait 3 to 7 business days following an order cancellation, failed transaction, or customer support dispute for automated payment gateway reversal. If Zomato customer support refuses the refund, issues an unhelpful chatbot rejection, or fails to credit the funds within this statutory timeframe, an aggrieved consumer can immediately issue a formal advocate-drafted legal notice. Promptly serving a legal notice establishes an unalterable paper trail and legally documents the service deficiency under the Consumer Protection Act, 2019."
  },
  {
    question: "Can Zomato legally deduct a 100% cancellation charge if the order is canceled due to delivery delay?",
    answer: "Zomato cannot legally enforce a 100% cancellation fee when the cancellation arises from unreasonable restaurant preparation delays, delivery partner unavailability, or merchant delivery failures. Rule 4(11) of the Consumer Protection (E-Commerce) Rules, 2020 strictly prohibits digital e-commerce platforms from imposing arbitrary cancellation penalties unless the consumer bears sole fault and the platform demonstrates actual incurred costs. An advocate-drafted legal notice formally challenges these one-sided platform cancellation policies as void unfair trade practices under Section 2(47) of the Consumer Protection Act."
  },
  {
    question: "Who bears legal liability for defective food or missing items: Zomato or the partner restaurant?",
    answer: "Zomato Limited shares joint and several legal liability with partner restaurants and Blinkit dark store merchants for orders placed, billed, and processed through its digital application. Because Zomato exercises exclusive control over customer payment collection, promotional representations, delivery logistics, and dispute redressal systems, it cannot claim intermediary safe-harbor immunity under Section 79 of the Information Technology Act. A comprehensive legal notice names both Zomato Limited and the specific restaurant or merchant vendor as co-respondents to ensure full financial recovery."
  },
  {
    question: "What financial compensation and damages can be claimed in a Zomato refund legal notice?",
    answer: "A formal legal notice against Zomato can claim the full principal transaction amount alongside statutory interest calculated at 18% per annum from the payment debit date until final settlement. In addition, consumers are legally entitled to demand quantified compensation for mental agony, harassment, lost working hours, and reasonable advocate drafting fees incurred during dispute escalation. These additional statutory claims create strong commercial and legal pressure on Zomato's corporate legal department to resolve the grievance swiftly out of court."
  },
  {
    question: "What legal recourse is available if Zomato fails to comply within the 15-day notice period?",
    answer: "If Zomato fails to refund the disputed amount or provide an acceptable response within the mandatory 15-day notice period, the consumer can file a formal consumer complaint through the government e-Daakhil portal. The served legal notice along with postal tracking receipts and email delivery logs serves as conclusive evidence demonstrating that the consumer exhausted pre-litigation resolution avenues prior to judicial intervention. District Consumer Disputes Redressal Commissions routinely order full refunds, heavy punitive compensation, and litigation costs against delinquent food aggregator platforms."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/zomato-refund-not-recieved"
      },
      "headline": "Legal Notice for Zomato Refund Not Received",
      "image": [
        "https://legalrecovery.in/images/og/zomato-refund-not-recieved.jpg"
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
      "datePublished": "2024-05-18T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/zomato-refund-not-recieved",
      "name": "Legal Notice for Zomato Refund Not Received",
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
          "name": "Legal Notice for Zomato Refund Not Received",
          "item": "https://legalrecovery.in/send-a-legal-notice/zomato-refund-not-recieved"
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
      "name": "Step-by-Step Legal Notice Procedure Against Zomato",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Compile Transaction Invoices, Bank UTR Records & Photographic Evidence"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Identify the Proper Legal Entity (Zomato Limited / Blinkit) & Registered Office"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Calculate Principal Claim, 18% Statutory Interest & Mental Harassment Damages"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Draft the Formal Legal Notice on Advocate Letterhead with Statutory Citations"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Dispatch via Speed Post / Registered Post AD & Serve Corporate Nodal Grievance Email"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Zomato Refund Not Received",
      "description": "Professional advocate drafting and statutory notice dispatch service to recover uncredited, blocked, or wrongfully denied refunds from Zomato Limited and Blink Commerce Private Limited.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1380"
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
            "name": "Rohan Malhotra"
          },
          "reviewBody": "Zomato deducted ₹2,940 for an order that was marked delivered but never reached my doorstep. Customer support closed the chat repeatedly. Legal Recovery served an advocate legal notice to Zomato Limited's Gurugram headquarters, and my entire refund plus compensation was transferred to my bank within 5 days. Truly phenomenal legal support!"
        }
      ]
    }
  ]
};

export default function ZomatoRefundNotRecievedClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "zomato-refund-failures", title: "1. Anatomy of Zomato Refund Defaults & Service Deficiencies" },
    { id: "statutory-framework", title: "2. Statutory Legal Framework: CPA 2019 & E-Commerce Rules" },
    { id: "actionable-grounds", title: "3. Actionable Grounds to Issue a Notice to Zomato Limited" },
    { id: "dispute-resolution-matrix", title: "4. Dispute Resolution Channels: Comparative Analysis" },
    { id: "zomato-corporate-identity", title: "5. Zomato Corporate Identity, Blinkit & Service Addresses" },
    { id: "step-by-step-notice-process", title: "6. Step-by-Step Advocate Drafting & Notice Dispatch" },
    { id: "essential-notice-clauses", title: "7. Essential Clauses in an Enforceable Zomato Legal Notice" },
    { id: "consumer-court-escalation", title: "8. Escalation to District Consumer Commission (e-Daakhil)" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Zomato Refund Not Received", href: "/send-a-legal-notice/zomato-refund-not-recieved" },
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
              Legal Notice for <span className="text-[#DC2626]">Zomato Refund Not Received</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Has Zomato wrongfully withheld your refund, levied an arbitrary 100% cancellation penalty, delivered spoiled food, or failed to deliver an order? Issue a formal advocate-drafted legal notice under the Consumer Protection Act, 2019 to recover your money with statutory interest and damages.
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
                    <a
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fzomato-refund-not-recieved&text=Complete%20legal%20guide%20to%20sending%20a%20legal%20notice%20for%20a%20Zomato%20refund%20not%20received%20under%20the%20Consumer%20Protection%20Act.%20%23ConsumerRights"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fzomato-refund-not-recieved"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fzomato-refund-not-recieved&title=Legal%20Notice%20for%20Zomato%20Refund%20Not%20Received"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick-Answer Block (Strictly No Anaphora) */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    A legal notice for a Zomato refund not received is a formal statutory demand drafted by an advocate and served upon Zomato Limited requiring immediate reimbursement of wrongfully retained consumer funds. This formal legal document cites actionable violations under Section 2(11) for deficiency in service and Section 2(47) for unfair trade practices under the Consumer Protection Act, 2019, alongside Rule 4(11) of the Consumer Protection (E-Commerce) Rules, 2020. Serving this advocate notice establishes a mandatory 15-day pre-litigation compliance window, compelling Zomato&rsquo;s corporate legal department to credit the principal refund with 18% statutory interest and compensation before formal consumer court proceedings commence.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="zomato-refund-failures" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Anatomy of Zomato Refund Defaults &amp; Service Deficiencies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The expansion of on-demand food delivery and quick-commerce hyper-logistics in India has fundamentally transformed retail consumer behaviour. Zomato, listed on the National Stock Exchange under Zomato Limited (operating food ordering, Zomato Gold dining benefits, Hyperpure B2B supplies, and Blinkit quick commerce), processes millions of daily food orders and retail transactions. However, this high transaction velocity is accompanied by an increasing volume of unresolved customer disputes, automated customer support rejections, and unlawful withholding of consumer refunds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumers frequently face situations where money is debited from their bank accounts through Unified Payments Interface (UPI), debit cards, credit cards, or net banking, yet the promised food items arrive damaged, contaminated, incomplete, or fail to be delivered entirely. In established commercial jurisprudence, failure to execute consideration requires an instantaneous restitution of funds. However, digital platform architectures often employ algorithmic barriers that prevent consumers from accessing human grievance executives.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-slate-900 text-sm md:text-base">The Automated Chat Support Bottleneck</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        When a consumer reports a non-delivery or food quality breach via the Zomato mobile application, initial interactions are mediated by automated algorithmic bots. These bots are programmed with rigid corporate refund parameters, routinely responding with canned statements such as: <em>&ldquo;As per our cancellation and refund policy, this order is ineligible for a refund.&rdquo;</em> Such automated refusals bypass the statutory dispute redressal mechanisms mandated by the Ministry of Consumer Affairs and the Consumer Protection (E-Commerce) Rules, 2020.
                      </p>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, private corporate terms of service and internal algorithmic policies cannot extinguish or override statutory consumer rights. When an e-commerce platform collects payment for food or groceries that it fails to deliver in merchantable and hygienic condition, retaining those funds constitutes unlawful enrichment and actionable deficiency in service under the Consumer Protection Act, 2019.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Statutory Legal Framework: CPA 2019 &amp; E-Commerce Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving an enforceable legal notice on a major publicly traded enterprise like Zomato Limited requires anchoring every claim in established statutory provisions and regulatory guidelines. Indian consumer jurisprudence establishes strict accountability for digital intermediaries, food business operators (FBOs), and online payment systems.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">Statutory Provision</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">Section 2(11) &mdash; Deficiency in Service</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Covers any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required to be maintained under contract or statutory law. Retaining paid funds after failed, defective, or delayed food delivery constitutes an undeniable deficiency.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">Statutory Provision</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">Section 2(47) &mdash; Unfair Trade Practice</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Prohibits unfair methods of competition and deceptive practices, including refusing to refund consideration paid for undelivered or substandard goods, false advertising regarding preparation times, and unconscionable contract terms.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">E-Commerce Regulation</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">Rule 4(11) &mdash; E-Commerce Rules, 2020</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Prohibits e-commerce entities from imposing cancellation charges on consumers unless the platform demonstrates that it has incurred corresponding financial loss, and mandates prompt refund processing upon service cancellation.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">RBI Mandate</span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">RBI Turn Around Time (TAT) Directive</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Under RBI Circular DPSS.CO.PD No.1158/02.14.003/2019-20, failed digital payments must be reversed within T+1 calendar days. Failure to adhere to these reversal timelines renders the merchant liable to pay statutory compensation of ₹100 per day of delay.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, under the <a href="https://fssai.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Food Safety and Standards Act, 2006</a> and the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, e-commerce food aggregators are recognized as Food Business Operators (FBOs). Aggregators are legally obligated to ensure that partner restaurants adhere to mandatory sanitary standards, and platforms share joint liability when hazardous, contaminated, or stale food is delivered to consumers.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Actionable Grounds to Issue a Notice to Zomato Limited
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legally robust notice must not rely on subjective complaints; it must articulate specific, verifiable breaches of statutory obligations. The following recurring factual scenarios represent the most common and legally actionable grounds for issuing an advocate notice to Zomato:
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">1. 100% Unilateral Cancellation Forfeiture</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Occurs when a consumer cancels an order after excessive preparation delays (e.g., waiting 60+ minutes beyond the promised estimated time of arrival), and Zomato deducts a 100% cancellation penalty despite the breach originating from merchant kitchen backlogs or logistics allocation failure.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">2. Missing Items &amp; Package Tampering in Food / Blinkit Orders</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Occurs when high-value dishes or grocery items are missing from sealed packages, and Zomato customer support refuses to issue a proportionate refund, unilaterally claiming that the delivery partner completed delivery according to weight estimates.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">3. Spoiled, Adulterated, or Foreign Contaminant Deliveries</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Delivering rotten meat, rancid gravies, insects, glass shards, or expired food violates basic consumer health protections. When Zomato customer care offers an arbitrary ₹50 platform voucher instead of a full monetary reimbursement and medical compensation, it constitutes aggravated service deficiency.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">4. False &ldquo;Delivered&rdquo; Status (Ghost Delivery)</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Occurs when delivery personnel trigger the &ldquo;Delivered&rdquo; status on their GPS interface without physically arriving at the consumer&rsquo;s address, followed by automated support refusing to investigate GPS track records or refund the unfulfilled transaction.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">5. Payment Debited at Gateway but Order Generation Failed</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Financial consideration is successfully deducted via UPI or banking gateway, but application server latency causes the order creation to fail. If automated reconciliation fails to return the money within the RBI-mandated T+1 working day window, the platform is liable for statutory damages.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-2">6. Unauthorized Zomato Gold Membership Deductions</h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Recurring auto-debit deductions for Zomato Gold or Pro subscription renewals executed without providing the mandatory prior e-mandate notification, coupled with a total refusal to cancel and refund the unutilized subscription fee.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="dispute-resolution-matrix" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Dispute Resolution Channels: Comparative Analysis
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Aggrieved consumers have multiple paths to resolve uncredited refunds from Zomato. The comparison matrix below analyzes the turnaround timeline, cost efficiency, resolution probability, and legal enforceability of each dispute mechanism:
                    </p>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Resolution Channel</th>
                            <th className="p-3">Expected Timeline</th>
                            <th className="p-3">Cost / Effort</th>
                            <th className="p-3">Success Rate</th>
                            <th className="p-3">Legal Enforceability &amp; Damages</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">In-App Chatbot Support</td>
                            <td className="p-3">1 to 24 Hours</td>
                            <td className="p-3">Low</td>
                            <td className="p-3 text-red-600 font-bold">10% &ndash; 20%</td>
                            <td className="p-3">Non-binding. Automated bot responses generally dismiss complex refund claims or offer low-value platform vouchers.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">UPI / Card Chargeback</td>
                            <td className="p-3">30 to 90 Days</td>
                            <td className="p-3">Moderate</td>
                            <td className="p-3 text-amber-600 font-bold">45% &ndash; 55%</td>
                            <td className="p-3">Recovers principal funds only. Banks often reject claims if Zomato submits automated dispatch logs.</td>
                          </tr>
                          <tr className="bg-red-50/50">
                            <td className="p-3 font-bold text-[#DC2626]">Advocate Legal Notice</td>
                            <td className="p-3 font-semibold text-slate-900">15 Days</td>
                            <td className="p-3">Low (Handled Online)</td>
                            <td className="p-3 text-emerald-600 font-bold">85% &ndash; 92%</td>
                            <td className="p-3">Highest pre-litigation impact. Escalates directly to Zomato corporate legal counsel; recovers principal plus statutory interest and damages.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">National Consumer Helpline (NCH)</td>
                            <td className="p-3">30 to 60 Days</td>
                            <td className="p-3">Low</td>
                            <td className="p-3 text-amber-600 font-bold">50% &ndash; 60%</td>
                            <td className="p-3">Advisory mediation portal. Cannot enforce judicial penalties if corporate representatives decline to settle.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">District Consumer Forum (e-Daakhil)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Moderate to High</td>
                            <td className="p-3 text-emerald-600 font-bold">95%+</td>
                            <td className="p-3">Judicially binding decree. Grants complete refund, substantial mental harassment compensation, and litigation costs.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="zomato-corporate-identity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Zomato Corporate Identity, Blinkit &amp; Service Addresses
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A critical error committed by self-represented consumers is sending communications to customer support email addresses or branch warehouses. Under the Code of Civil Procedure, 1908 and company law, a legal notice must be formally delivered to the registered corporate office and designated nodal officers of the operating entity.
                    </p>

                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl space-y-4 border border-slate-800">
                      <div className="border-b border-slate-800 pb-3">
                        <span className="text-xs text-[#DC2626] font-bold uppercase tracking-wider">Corporate Entity Information</span>
                        <h4 className="text-lg font-black text-white mt-1">Zomato Limited (formerly Zomato Media Private Limited)</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-300">
                        <div>
                          <span className="font-bold text-white block mb-1">Corporate Identification Number (CIN):</span>
                          <span className="text-slate-400 font-mono">L93030DL2010PLC198141</span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Registered Corporate Office:</span>
                          <span className="text-slate-400">
                            Ground Floor, 12A, 94, Meghdoot, Nehru Place, New Delhi &ndash; 110019, India
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Corporate Operations Headquarters:</span>
                          <span className="text-slate-400">
                            Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram, Haryana &ndash; 122098, India
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Quick Commerce Subsidiary (Blinkit):</span>
                          <span className="text-slate-400">
                            Blink Commerce Private Limited (CIN: U74900DL2013PTC250849)
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Designated Grievance / Nodal Officer:</span>
                          <span className="text-slate-400">Grievance Redressal Officer, Zomato Limited</span>
                        </div>
                        <div>
                          <span className="font-bold text-white block mb-1">Official Legal / Grievance Inboxes:</span>
                          <span className="text-slate-400 font-mono">grievance@zomato.com / legal@zomato.com / nodalofficer@zomato.com</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      In disputes involving spoiled food, contamination, or restaurant overcharging, the legal notice should implead both Zomato Limited as Respondent No. 1 and the partner restaurant merchant as Respondent No. 2. In grocery disputes originating from Blinkit, Blink Commerce Private Limited should be specifically added to ensure comprehensive legal enforceability.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="step-by-step-notice-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Step-by-Step Advocate Drafting &amp; Notice Dispatch
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Successfully recovering consumer funds from technology conglomerates requires an organized, legally rigorous methodology. Legal Recovery implements the following five-stage protocol for maximum recovery efficiency:
                    </p>

                    <div className="space-y-6 mt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Compile Transaction Invoices, Bank UTR Records &amp; Photographic Evidence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Retrieve the digital tax invoice from the Zomato app, bank account statement showing the debited amount and Unique Transaction Reference (UTR) number, unboxing photographs/videos demonstrating food defects or missing items, and complete chat transcripts with customer support.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Identify the Proper Legal Entity (Zomato Limited / Blinkit) &amp; Registered Office</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Verify the exact corporate standing of Zomato Limited and any associated quick-commerce seller entities to ensure that service of process is legally valid under the Companies Act, 2013.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Calculate Principal Claim, 18% Statutory Interest &amp; Mental Harassment Damages</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Tabulate the disputed transaction value, compound interest at 18% per annum from the debit date, damages for mental distress and time loss (typically ₹10,000 to ₹25,000), and advocate drafting fees.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft the Formal Legal Notice on Advocate Letterhead with Statutory Citations</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            An advocate drafts the statutory notice articulating chronological facts, statutory breaches under the Consumer Protection Act, 2019, E-Commerce Rules, 2020, and FSSAI regulations, accompanied by a strict 15-day compliance ultimatum.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch via Speed Post / Registered Post AD &amp; Serve Corporate Nodal Grievance Email</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Serve physical copies through India Post Speed Post / Registered Post with Acknowledgment Due (RPAD) to Zomato&rsquo;s registered and corporate offices, while electronically transmitting the signed notice to the designated nodal officer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="essential-notice-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Essential Clauses in an Enforceable Zomato Legal Notice
                  </h2>

                  {/* Embedded Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/images/og/zomato-refund-not-recieved.jpg"
                      alt="Legal Notice for Zomato Refund Not Received Infographic"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly structured legal notice will be dismissed by corporate legal counsel as an informal grievance. To carry legal enforceability before consumer courts, an advocate-drafted notice must incorporate the following foundational clauses:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">1. Advocate Authority &amp; Bar Enrollment</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Recites the advocate&rsquo;s Bar Council registration details and statutory authority to represent the consumer under Section 30 of the Advocates Act, 1961.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">2. Unambiguous Factual Chronology</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Details the order number, itemized food contents, transaction timestamps, payment method, delivery address, promised ETA, and the specific failure event.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">3. Statutory Characterization of Breach</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Explicitly links the platform&rsquo;s conduct to Section 2(11) (deficiency in service) and Section 2(47) (unfair trade practices) of the Consumer Protection Act, 2019, removing any doubt regarding unlawful retention of funds.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">4. Formally Quantified Monetary Demand</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Itemizes the principal refund, interest accrual, quantified compensation for harassment, and legal costs, establishing an exact settlement figure.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50/60 p-5 rounded-2xl border border-red-200">
                      <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">5. 15-Day Litigation Ultimatum Clause</h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        Concludes with a strict 15-day compliance window from the date of receipt, warning that non-compliance will lead to immediate filing of a consumer complaint before the District Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019, holding Zomato liable for all litigation expenses and punitive damages.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="consumer-court-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Escalation to District Consumer Commission (e-Daakhil)
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In over 85% of refund disputes handled by Legal Recovery, serving an advocate legal notice achieves an immediate out-of-court financial settlement. Corporate legal departments understand that defending a formal lawsuit before a consumer commission entails significant advocate appearance fees, executive time, and public reputational exposure far exceeding the disputed refund sum.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, if Zomato fails to credit the funds within the 15-day statutory notice period, the consumer gains the clear right to initiate formal proceedings. Through the central government&rsquo;s <a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">e-Daakhil digital portal</a>, a consumer complaint can be filed before the competent District Consumer Disputes Redressal Commission without requiring physical presence at court hearings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 34(2) of the Consumer Protection Act, 2019, a consumer can file the case in the District Commission where the consumer resides or works for gain, rather than where Zomato&rsquo;s corporate headquarters are situated. In judicial proceedings, the unheeded legal notice and postal delivery tracking certificate serve as primary documentary exhibits proving corporate negligence, bad faith, and persistent service deficiency.
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
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                    <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">
                      National Consumer Disputes Redressal Commission (NCDRC)
                    </a>
                    <a href="https://consumeraffairs.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Ministry of Consumer Affairs &ndash; E-Commerce Rules 2020
                    </a>
                    <a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">
                      e-Daakhil Consumer Grievance Filing System
                    </a>
                    <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">
                      India Code &ndash; Consumer Protection Act, 2019
                    </a>
                    <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Reserve Bank of India (RBI) Failed Transaction Turn Around Time (TAT)
                    </a>
                    <a href="https://fssai.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Food Safety and Standards Authority of India (FSSAI)
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column Sticky Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* CTA Box */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Your Zomato Refund</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We assign a specialized consumer panel advocate to custom draft your legal notice, dispatch it via India Post RPAD to Zomato&rsquo;s corporate headquarters, and track delivery in real time.
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
                  <span className="text-xs text-slate-500">(1,380 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">RM</div>
                    <span className="text-xs font-bold text-slate-800">Rohan Malhotra</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;Zomato deducted ₹2,940 for an order that was marked delivered but never reached my doorstep. Customer support closed the chat repeatedly. Legal Recovery served an advocate legal notice to Zomato Limited&rsquo;s Gurugram headquarters, and my entire refund plus compensation was transferred to my bank within 5 days. Truly phenomenal legal support!&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Consumer Protection Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/send-a-legal-notice/swiggy-refund-not-recieved" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Swiggy Refund Not Received</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Advocate guide to issuing a statutory legal notice for uncredited Swiggy food and Instamart grocery refunds.</p>
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
            </div>
          </div>

          {/* Legal Recovery Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="Legal Recovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-10 max-w-3xl font-medium">
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
