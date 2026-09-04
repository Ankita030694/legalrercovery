'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What constitutes an unfair trade practice under Indian law?",
    answer: "An unfair trade practice under Section 2(47) of the Consumer Protection Act includes false representations, deceptive advertising, misleading pricing, or withholding critical information about a product or service. Examples include bait-and-switch tactics, refusing to honor warranty commitments, and charging hidden fees not disclosed upfront. Sending a legal notice for an unfair trade practice complaint is the first formal step to hold the business accountable."
  },
  {
    question: "How long does a company have to respond to a legal notice for an unfair trade practice complaint?",
    answer: "Once a company receives a legal notice for an unfair trade practice complaint, they are typically given a strict 15-day window to respond and comply with the demands. If the business ignores the notice or provides an unsatisfactory resolution, the consumer gains a solid legal ground to file a formal case in the consumer forum. Silence from the company is often treated as an admission of fault by consumer commissions."
  },
  {
    question: "Can I claim compensation for mental agony caused by deceptive marketing?",
    answer: "Yes, you can absolutely claim compensation for mental agony, harassment, and financial loss caused by a company's deceptive practices. When drafting your legal notice for an unfair trade practice complaint, your advocate will quantify these damages along with the actual monetary loss incurred. Consumer courts frequently award punitive damages against corporations found guilty of deliberate deceptive behavior to deter future misconduct."
  },
  {
    question: "Is it mandatory to send a legal notice before filing a consumer court case?",
    answer: "While the Consumer Protection Act does not explicitly mandate a legal notice in every scenario, courts highly prefer that you send a formal legal notice for an unfair trade practice complaint before initiating litigation. It demonstrates to the judge that you exhausted all amicable pre-litigation settlement options in good faith. Furthermore, nearly 60% of commercial disputes are settled out of court immediately after a strongly worded advocate notice is received."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/unfair-trade-practice-complaint"
      },
      "headline": "Legal Notice for Unfair Trade Practice Complaint",
      "image": [
        "https://legalrecovery.in/images/og/unfair-trade-practice-complaint.jpg"
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
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString()
    },
    {
      "@type": "Organization",
      "name": "Legal Recovery",
      "url": "https://legalrecovery.in",
      "logo": "https://legalrecovery.in/lrlogo.svg",
      "sameAs": [
        "https://www.linkedin.com/company/legal-recovery-india",
        "https://twitter.com/legalrecoveryin",
        "https://www.facebook.com/legalrecoveryin"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://legalrecovery.in/send-a-legal-notice/unfair-trade-practice-complaint",
      "name": "Legal Notice for Unfair Trade Practice Complaint",
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
          "name": "Unfair Trade Practice Complaint",
          "item": "https://legalrecovery.in/send-a-legal-notice/unfair-trade-practice-complaint"
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
      "name": "Steps to File a Legal Notice for Unfair Trade Practice",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Document the Deception (Save advertisements, brochures, emails, and invoices)"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Identify the Specific Violation (Analyze which clause of Section 2(47) was breached)"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft the Notice (Quantify the exact financial loss and claim mental agony)"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch to Registered Office (Send via Registered Post with Acknowledgment Due)"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Escalate to Consumer Forum (If the company fails to comply within 15 days)"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Unfair Trade Practice Complaint",
      "description": "Professional legal notice drafting and dispatch service to demand compensation for deceptive marketing, hidden charges, and corporate fraud.",
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
            "name": "Vikram Singh"
          },
          "reviewBody": "A prominent real estate builder hit me with hidden charges that were never disclosed in the brochure. Sent a legal notice for an unfair trade practice complaint through Legal Recovery. The builder waived the charges immediately to avoid litigation."
        }
      ]
    }
  ]
};

export default function UnfairTradePracticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "identifying-unfair-practices", title: "1. Identifying Unfair Trade Practices" },
    { id: "statutory-protections", title: "2. Statutory Protections Under Law" },
    { id: "quantifying-damages", title: "3. Quantifying Your Compensation" },
    { id: "notice-drafting-process", title: "4. Notice Drafting & Dispatch Process" },
    { id: "essential-elements", title: "5. Essential Elements of the Notice" },
    { id: "escalation", title: "6. Escalation to Consumer Forums" },
    { id: "faqs", title: "7. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Unfair Trade Practice Complaint", href: "/send-a-legal-notice/unfair-trade-practice-complaint" },
  ];

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-36 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              COMMERCIAL DISPUTE RESOLUTION
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Unfair Trade Practice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Combat deceptive marketing, hidden corporate fees, and false claims. Force businesses to compensate you under the robust frameworks of the Consumer Protection Act.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
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
            <div className="hidden lg:block sticky top-32 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-hide">
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
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Funfair-trade-practice-complaint&text=Learn%20how%20to%20send%20a%20legal%20notice%20for%20unfair%20trade%20practices!',
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
                          'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Funfair-trade-practice-complaint',
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
                          'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Funfair-trade-practice-complaint&title=Legal%20Notice%20for%20Unfair%20Trade%20Practice%20Complaint',
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

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Consumers face unfair trade practices whenever a company engages in false advertising, hidden pricing, or misleading warranties to secure a commercial advantage. Sending a formal legal notice for an unfair trade practice complaint provides the offending business a stringent 15-day deadline to rectify the financial injury and cease the deceptive behavior. Failure to comply establishes robust grounds to seek a full refund and punitive damages through litigation under the Consumer Protection Act.
                  </p>
                </div>

                <section id="identifying-unfair-practices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Identifying Unfair Trade Practices
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before dispatching a legal notice for an unfair trade practice complaint, it is vital to correctly classify the corporate behavior under the statutory definitions provided by law. Section 2(47) of the Consumer Protection Act, 2019 comprehensively defines an &quot;unfair trade practice&quot; as any trade method or deceptive practice adopted for the purpose of promoting the sale, use, or supply of any goods or services.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These deceptive practices often manifest in ways that manipulate the consumer&apos;s purchasing decision. For instance, a common violation involves e-commerce platforms artificially inflating the &quot;Maximum Retail Price&quot; (MRP) only to offer a fabricated &quot;discount&quot; to lure buyers. Another widespread issue involves educational institutions or gymnasiums embedding one-sided, non-refundable clauses in their contracts, trapping consumers who wish to exit deficient services. Such asymmetric contracts are explicitly classified as unfair.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Bait-and-switch advertising, where a company advertises a high-quality product at a low price but substitutes it with inferior goods post-payment, is a textbook violation. To combat these tactics, the <a href="https://consumeraffairs.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Central Consumer Protection Authority (CCPA)</a> possesses the mandate to penalize entities engaging in misleading advertisements and unfair trade practices on a macroscopic level, while individual consumers can seek personal redressal through a targeted legal notice.
                    </p>
                  </div>
                </section>

                <section id="statutory-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Statutory Protections Under Law
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Indian legal framework heavily favors the consumer when dealing with corporate deception. A well-drafted legal notice for an unfair trade practice complaint leverages these statutes to compel immediate corporate compliance, bypassing the necessity for a prolonged court battle. 
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <ul className="list-decimal list-inside text-sm md:text-base text-slate-650 space-y-4">
                        <li>
                          <strong>Section 2(47) of the Consumer Protection Act, 2019:</strong> This core section establishes the legal definition of unfair trade practices, encompassing false representations regarding the standard, quality, or grade of goods and services.
                        </li>
                        <li>
                          <strong>Section 89 &amp; 90 of the Consumer Protection Act, 2019:</strong> These provisions introduce stringent penalties for manufacturers or service providers caught issuing misleading advertisements, threatening them with imprisonment and substantial fines.
                        </li>
                        <li>
                          <strong>The Consumer Protection (E-Commerce) Rules, 2020:</strong> These rules explicitly prohibit digital marketplaces from manipulating search algorithms to favor certain sellers or artificially inflating prices, establishing liability for digital unfair trade practices.
                        </li>
                        <li>
                          <strong>Section 73 of the Indian Contract Act, 1872:</strong> This statute permits the aggrieved consumer to demand compensation for any loss or damage naturally arising from the breach of contract initiated by the deceptive practice.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="quantifying-damages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Quantifying Your Compensation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A critical component of a legal notice for an unfair trade practice complaint is the precise quantification of damages. Vague demands allow corporate legal teams to dismiss the notice as frivolous. Your advocate will strategically structure the demand clause to encompass multiple tiers of compensation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Firstly, the notice demands the refund of the principal amount paid for the goods or services, augmented by an interest rate (typically 12% to 18% per annum) calculated from the date of the deceptive transaction. Secondly, it quantifies the damages for mental agony and harassment. While subjective, this amount should remain proportionate to the principal loss to maintain credibility before the <a href="http://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">National Consumer Disputes Redressal Commission (NCDRC)</a> or lower courts. Finally, the notice demands reimbursement for the legal costs incurred in drafting and dispatching the document itself.
                    </p>
                  </div>
                </section>

                <section id="notice-drafting-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Notice Drafting &amp; Dispatch Process
                  </h2>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sending a legal notice for an unfair trade practice complaint requires absolute procedural correctness. Any technical flaw can be exploited by the opposing party to invalidate your claim. Follow this strict chronological procedure:
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Evidence Compilation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Archive all deceptive advertisements, brochures, emails, and transaction receipts. Ensure timestamps are visible on digital evidence.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Corporate Identification</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Locate the exact registered corporate address and the details of the Grievance Officer or Managing Director of the offending company.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Engage an advocate to draft the notice on official letterhead, establishing the legal link between the company&apos;s actions and the statutory definitions of unfair trade practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Registered Dispatch</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Dispatch the physical notice via Registered Post with Acknowledgment Due (RPAD) to secure an undeniable proof of delivery.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="essential-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Essential Elements of the Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/unfair-trade-practice-complaint.jpg" alt="Steps to Send an Unfair Trade Practice Legal Notice" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A standard email complaint is easily ignored, but a meticulously drafted legal notice forces the corporate legal department to intervene. To command authority, the notice must contain:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>The Advocate&apos;s Authority:</strong> A clear statement that the notice is issued under the instructions of the aggrieved client.</li>
                      <li><strong>Detailed Chronology:</strong> A step-by-step recounting of the transaction, highlighting exactly when the deceptive practice occurred.</li>
                      <li><strong>Statutory Mapping:</strong> Explicit mapping of the company&apos;s behavior to the subsections of Section 2(47) of the Consumer Protection Act.</li>
                      <li><strong>Evidence Reference:</strong> A declaration that incontrovertible evidence (emails, recordings, contracts) is currently in the client&apos;s possession.</li>
                      <li><strong>The 15-Day Ultimatum:</strong> A non-negotiable deadline demanding compliance, failing which the client will initiate civil and consumer proceedings.</li>
                    </ul>
                  </div>
                </section>

                <section id="escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Escalation to Consumer Forums
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company fails to honor the demands set forth in the legal notice for an unfair trade practice complaint within the 15-day stipulation, the dispute enters the litigation phase. The consumer is now legally positioned to file a complaint via the national e-Daakhil portal. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The jurisdiction of the consumer court depends entirely on the value of the goods or services paid as consideration. The District Commission handles cases up to ₹50 Lakhs, the State Commission oversees matters between ₹50 Lakhs and ₹2 Crores, and the National Commission (NCDRC) adjudicates disputes exceeding ₹2 Crores. The previously sent legal notice, along with its postal tracking receipt, serves as Annexure-A in your complaint petition, proving to the judge that the corporation willfully ignored an opportunity to resolve the matter amicably.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Frequently Asked Questions
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
                    Disclaimer: This legal guide is for informational purposes only. Every dispute requires custom legal drafting to be enforceable.
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
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">VS</div>
                    <span className="text-xs font-bold text-slate-800">Vikram Singh</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;A prominent real estate builder hit me with hidden charges that were never disclosed in the brochure. Sent a legal notice for an unfair trade practice complaint through Legal Recovery. The builder waived the charges immediately to avoid litigation.&quot;
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
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Defective Product Notice</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn how to send a legal notice if you received a faulty or damaged product from an e-commerce platform.</p>
              </Link>
              <Link href="/how-to-file-consumer-complaint-india" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Consumer Court Filing</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step guide to escalating your grievance to the National Consumer Disputes Redressal Commission.</p>
              </Link>
              <Link href="/flipkart-return-refund-complaint" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">E-Commerce Disputes</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Fight back against major platforms that illegally reject your legitimate return or refund requests.</p>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4 max-w-sm mx-auto md:mx-0">
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
                Legal Recovery is India&apos;s trusted consumer protection and legal tech platform. We specialize in holding corporations accountable for unfair trade practices, deceptive marketing, and commercial fraud. With over 15,000 customers counselled, our mission is to provide fast, out-of-court resolutions by connecting you with top-tier panel advocates for immediate legal action.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Send Legal Notice
                  </Link>
                  <Link href="/how-to-file-consumer-complaint-india" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                  <Link href="/flipkart-return-refund-complaint" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    E-commerce Fraud
                  </Link>
                  <Link href="/services" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    All Services
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
