'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Do I need a technician's report to prove a product is defective?",
    answer: "Yes, in many cases involving electronics or machinery, consumer courts require an independent expert's report to substantiate a manufacturing defect claim. If the company denies the defect, a diagnostic report from a qualified third-party technician acts as crucial evidence. This prevents the company from dismissing your claim as a mere operational glitch or user-induced damage."
  },
  {
    question: "What if the company offers to repair the item instead of a refund?",
    answer: "If a product continues to malfunction despite multiple repair attempts, you are legally entitled to demand a full refund or a brand-new replacement. Landmark judgments like 'L.G. Electronics vs. Nidhi Dhakare' establish that consumers are not bound to accept endless repairs for an inherently defective item. A legal notice enforces this right when service centers refuse to replace the unit."
  },
  {
    question: "Are e-commerce platforms liable for defective products sold by third parties?",
    answer: "Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms cannot completely evade responsibility. If a platform unfairly denies a refund for a clearly defective product, it can be held liable for a deficiency in service. Your legal notice should jointly address the manufacturer, the seller, and the e-commerce platform to ensure maximum accountability."
  },
  {
    question: "How long do I have to file a claim for a defective product?",
    answer: "The Consumer Protection Act, 2019, mandates a limitation period of exactly two years from the date the cause of action arose (i.e., the date the defect was discovered or the date the company refused your refund). Sending a formal legal notice immediately upon refusal is vital to establishing a clear timeline of your grievance before filing a case via E-Daakhil."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/defective-product-refund"
      },
      "headline": "Send a Legal Notice for Defective Product Refund",
      "image": [
        "https://legalrecovery.in/images/og/defective-product-refund.jpg"
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
        "https://twitter.com/legalrecoveryin",
        "https://www.facebook.com/legalrecoveryin"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://legalrecovery.in/send-a-legal-notice/defective-product-refund",
      "name": "Send a Legal Notice for Defective Product Refund",
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
          "name": "Defective Product Refund",
          "item": "https://legalrecovery.in/send-a-legal-notice/defective-product-refund"
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
      "name": "Steps to Send a Legal Notice for Defective Product Refund",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Document the defect with clear videos and an independent technician's report if the defect is denied."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Identify the registered corporate offices of the manufacturer, the retail seller, and the e-commerce platform."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft a formal legal notice explicitly invoking the Product Liability framework (Sections 82-87) of the CPA, 2019."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch the legal notice via Registered Post with Acknowledgment Due (RPAD) and email, setting a 15-day ultimatum."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "File a consumer dispute via the E-Daakhil portal if the company fails to process the refund within the given timeline."
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Defective Product Refund",
      "description": "Professional legal notice drafting and dispatch service to demand a refund or replacement for a defective product.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "184"
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
            "name": "Karan Mehta"
          },
          "reviewBody": "My laptop had motherboard issues in just 2 months. The service center denied replacement. Legal Recovery sent a legal notice for defective product refund, and HP replaced my unit in 10 days. Exceptional service!"
        }
      ]
    }
  ]
};

export default function DefectiveProductRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "what-is-defective", title: "1. Legal Definition of a Defective Product" },
    { id: "product-liability", title: "2. The Product Liability Framework (CPA 2019)" },
    { id: "expert-evidence", title: "3. The Role of Expert Evidence" },
    { id: "landmark-judgments", title: "4. Landmark Consumer Court Judgments" },
    { id: "notice-process", title: "5. Step-by-Step Legal Notice Process" },
    { id: "essential-elements", title: "6. Essential Notice Elements" },
    { id: "resolution-timeline", title: "7. Court Timeline & E-Daakhil" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Defective Product Refund", href: "/send-a-legal-notice/defective-product-refund" },
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
        {/* Hero Section - Reduced height/padding */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              CONSUMER RIGHTS PROTECTION
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Defective Product Refund</span>
            </h1>
            <p className="text-sm md:text-lg mb-8 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Leverage the Product Liability laws under the Consumer Protection Act, 2019 to legally demand a full refund or replacement for faulty electronics, vehicles, and goods.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-8 md:py-4 md:px-12 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-base cursor-pointer animate-pulse-slow"
            >
              Draft &amp; Send Notice
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fdefective-product-refund&text=Check%20out%20this%20comprehensive%20guide%20on%20sending%20a%20legal%20notice%20for%20a%20defective%20product%20refund!%20%23ConsumerRights" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fdefective-product-refund" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fdefective-product-refund&title=Send%20a%20Legal%20Notice%20for%20Defective%20Product%20Refund" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    A legal notice for a defective product refund is a formal demand letter sent to a manufacturer or seller invoking the Consumer Protection Act, 2019, specifically the Product Liability framework. This document establishes that the faulty item fails to meet the legal standards of merchantability, giving the responsible party a mandatory 15-day window to rectify the deficiency in service by issuing a full refund or a defect-free replacement. Failing to comply empowers the consumer to file a case in the District Consumer Disputes Redressal Commission for the principal amount plus damages.
                  </p>
                </div>

                <section id="what-is-defective" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Legal Definition of a Defective Product
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before drafting a legal notice, it is crucial to establish that your product meets the strict statutory definition of &quot;defective&quot;. Under Section 2(10) of the Consumer Protection Act, 2019, a defect encompasses any fault, imperfection, or shortcoming in the quality, quantity, potency, purity, or standard which is required to be maintained by or under any law for the time being in force.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This expansive definition means that a product does not just have to be completely broken to be legally defective. If an electronic device frequently overheats, a vehicle suffers from recurrent mechanical failures, or a home appliance fails to perform as advertised, it is considered legally defective. Sellers routinely attempt to dismiss these issues as &quot;normal wear and tear&quot;, but the law strictly differentiates between natural degradation and inherent manufacturing flaws that prevent a product from serving its intended purpose.
                    </p>
                  </div>
                </section>

                <section id="product-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The Product Liability Framework (CPA 2019)
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The most powerful tool in your legal arsenal is the &quot;Product Liability&quot; framework introduced in Sections 82–87 of the Consumer Protection Act, 2019. This framework fundamentally shifted the burden of responsibility, making it easier for consumers to claim a defective product refund.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                        <li><strong>Strict Manufacturer Liability (Section 84):</strong> Manufacturers are strictly liable if a product contains a manufacturing defect, deviates from manufacturing specifications, or fails to conform to an express warranty. The manufacturer cannot claim ignorance of the defect as a defense.</li>
                        <li><strong>Seller Liability (Section 86):</strong> Product sellers, including retail stores and e-commerce platforms, are legally liable if they exercised substantial control over the product&apos;s testing or packaging, or if the manufacturer cannot be identified or is not subject to Indian jurisdiction.</li>
                        <li><strong>E-commerce Accountability:</strong> Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms cannot hide behind an &quot;intermediary&quot; status to deny refunds for heavily defective items sold on their platform.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Highly Prominent Infographic Section */}
                <section id="infographic" className="my-12">
                  <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border-2 border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC2626]/5 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
                      <span className="text-[#DC2626] uppercase tracking-wider text-xs block mb-1 font-bold">Visual Guide</span>
                      Anatomy of a Defective Product Legal Notice
                    </h3>
                    
                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                      <img 
                        src="/images/og/defective-product-refund.jpg" 
                        alt="Infographic showing the essential elements of a legal notice for a defective product refund, including statutory citations and demand structure." 
                        className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500" 
                      />
                    </div>
                    <p className="text-center text-xs text-slate-500 mt-4 italic">
                      Save this infographic as a reference for structuring your legal demand.
                    </p>
                  </div>
                </section>

                <section id="expert-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. The Role of Expert Evidence
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While a malfunction might seem obvious to you, the law requires proof. A critical aspect of securing a defective product refund, especially for complex electronics or vehicles, is substantiating the defect. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Courts have frequently ruled that a malfunction does not automatically equate to a &quot;manufacturing defect&quot;. If a brand denies your claim by stating the device suffered liquid damage or user mishandling, you must counter this with <strong>expert evidence</strong>. Obtaining a diagnostic report or a signed certificate from an independent, qualified technician proving that the fault is inherent to the manufacturing process drastically increases the weight of your legal notice and any subsequent consumer court case.
                    </p>
                  </div>
                </section>

                <section id="landmark-judgments" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Landmark Consumer Court Judgments
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumer forums in India heavily rely on established judicial precedents when adjudicating defective product disputes. Citing these judgments in your legal notice demonstrates legal competence and deters companies from fighting a losing battle.
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>L.G. Electronics vs. Nidhi Dhakare:</strong> The National Commission established that if a defect persists despite multiple attempts at repair by the authorized service center, the consumer cannot be forced to accept an endless cycle of repairs and is fully entitled to a complete refund or a brand-new replacement.</li>
                      <li><strong>Expectation of Service Principle:</strong> Various State Commissions have upheld that consumers pay for products with a legitimate expectation of &quot;trouble-free service for a reasonable period.&quot; A product failing within weeks or months of purchase fundamentally breaches this expectation, constituting a severe deficiency in service.</li>
                    </ul>
                  </div>
                </section>

                <section id="notice-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Legal Notice Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sending a legally enforceable notice requires strict adherence to procedural protocols. A simple email to customer care does not carry the same legal weight as a formally dispatched document.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Secure the Evidence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Gather original invoices, warranty certificates, service center job sheets detailing repair attempts, and independent technician reports if the brand is denying the defect.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Identify Target Entities</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Address the notice jointly to the registered corporate headquarters of the manufacturer, the specific retail seller, and the e-commerce platform.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft with Statutory Citations</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Ensure your advocate drafts the notice specifically invoking the Product Liability framework (Sections 82-87) and Section 2(10) of the Consumer Protection Act, 2019.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch via RPAD</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Send the physical copies via Registered Post with Acknowledgment Due (RPAD) through India Post. The postal receipts serve as undeniable proof of service.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="essential-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Notice Elements
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure corporate legal departments take your grievance seriously and approve a settlement, your notice must contain these non-negotiable elements:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>Advocate Letterhead:</strong> The document must be drafted and signed by a practicing advocate.</li>
                      <li><strong>Chronology of Failure:</strong> A meticulous timeline of when the product was purchased, when the defect manifested, and every subsequent repair attempt.</li>
                      <li><strong>Explicit Legal Invocations:</strong> Direct references to the CPA 2019 and relevant NCDRC judgments.</li>
                      <li><strong>Quantified Demand Clause:</strong> A precise calculation of the refund amount, coupled with reasonable demands for mental agony compensation and legal expenses.</li>
                      <li><strong>Strict Ultimatum:</strong> A definitive 15-day deadline for the company to comply before court proceedings are initiated.</li>
                    </ul>
                  </div>
                </section>

                <section id="resolution-timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Court Timeline &amp; E-Daakhil
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon receiving the legal notice, companies generally have 15 days to respond. In clear cases of manufacturing defects backed by strong documentation, companies often prefer to settle by issuing a refund or replacing the product rather than facing litigation costs and negative precedents.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, if the 15-day ultimatum expires without a satisfactory resolution, you must escalate the matter. Under the CPA 2019, consumers have a strict limitation period of two years from the date the defect was discovered to file a formal complaint. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file your complaint digitally through the Government of India&apos;s <strong>E-Daakhil</strong> portal, which routes the dispute directly to the appropriate District, State, or National Consumer Disputes Redressal Commission based on the pecuniary jurisdiction of your claim.
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
                    References: [1] <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 hover:underline">National Consumer Disputes Redressal Commission (NCDRC)</a>. [2] <a href="https://consumeraffairs.nic.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 hover:underline">Department of Consumer Affairs, Government of India</a>. [3] <a href="https://edaakhil.nic.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 hover:underline">E-Daakhil Portal</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
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
                  <span className="text-xs text-slate-500">(184 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">KM</div>
                    <span className="text-xs font-bold text-slate-800">Karan Mehta</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;My laptop had motherboard issues in just 2 months. The service center denied replacement. Legal Recovery sent a legal notice for defective product refund, and HP replaced my unit in 10 days. Exceptional service!&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Consumer Protection Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/legal-notice-to-retailer-wrong-damaged-product-delivery" className="group block p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Wrong Product Delivery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn how to send a legal notice if you received an incorrect item from an online seller.</p>
              </Link>
              <Link href="/how-to-file-consumer-complaint-india" className="group block p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Consumer Court Filing</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step guide to escalating your grievance to the Consumer Commission.</p>
              </Link>
              <Link href="/flipkart-return-refund-complaint" className="group block p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Flipkart Refund Complaints</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Tackle specific return and refund issues encountered on major e-commerce platforms.</p>
              </Link>
              <Link href="/send-a-legal-notice" className="group block p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">All Legal Notices</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Explore our full suite of professional legal notice drafting services.</p>
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
                Legal Recovery is India&apos;s trusted consumer protection and legal tech platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ people on consumer disputes, defective products, and e-commerce frauds. Legal Recovery focuses on fast out-of-court settlements and connects you with top panel advocates.
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

      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
