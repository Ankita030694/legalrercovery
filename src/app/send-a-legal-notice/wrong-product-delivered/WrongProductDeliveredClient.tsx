'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can I send a legal notice for a wrong product delivered if the seller refuses a return?",
    answer: "Yes, you can send a legal notice to a seller under Section 35 of the Consumer Protection Act, 2019, if they refuse to accept a return for a wrongly delivered product. A formal legal notice serves as a final warning, compelling the retailer to process your refund or replacement to avoid litigation in a consumer forum. Most established e-commerce platforms resolve the dispute within 15 days of receiving the legal notice."
  },
  {
    question: "How much compensation can I claim for a wrong product delivery?",
    answer: "You can legally claim the total invoice value of the wrong product, along with reasonable compensation for mental agony and the legal costs incurred in sending the notice. Section 39 of the Consumer Protection Act empowers consumer commissions to order the removal of the defect, replacement of the goods, or return of the price charges. Punitive damages may also be awarded in cases of severe negligence or unfair trade practices."
  },
  {
    question: "Do I need an unboxing video to win a consumer court case for a wrong product delivery?",
    answer: "While an unboxing video is not strictly mandatory under the law, it acts as the most compelling electronic evidence to prove a deficiency in service by the seller. Without continuous video evidence showing the sealed package being opened, sellers frequently claim the buyer swapped the item after delivery. Consumer forums heavily rely on unboxing videos, photographic evidence, and initial delivery weights to determine liability."
  },
  {
    question: "Who do I address the legal notice to for an Amazon or Flipkart wrong delivery?",
    answer: "The legal notice must be jointly addressed to the Grievance Officer at the registered corporate office of the e-commerce platform and the specific third-party seller listed on the tax invoice. Addressing both entities ensures that the marketplace cannot evade liability by claiming intermediary status under the Information Technology Act. This dual-targeting approach guarantees that the platform's legal department intervenes to force the seller to issue a refund."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/wrong-product-delivered"
      },
      "headline": "Send a Legal Notice for Wrong Product Delivered",
      "image": [
        "https://legalrecovery.in/images/og/wrong-product-delivered.jpg"
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/wrong-product-delivered",
      "name": "Send a Legal Notice for Wrong Product Delivered",
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
          "name": "Wrong Product Delivered",
          "item": "https://legalrecovery.in/send-a-legal-notice/wrong-product-delivered"
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
      "name": "Steps to Send a Legal Notice for Wrong Product Delivered",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Secure the evidence (Unboxing video, invoice, delivery receipt)"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Exhaust internal grievance mechanisms"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft the legal notice detailing the deficiency in service"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch the notice via registered post with acknowledgment due"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "File a consumer complaint if the dispute remains unresolved"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Wrong Product Delivered",
      "description": "Professional legal notice drafting and dispatch service to demand a refund or replacement for a wrongly delivered product.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "127"
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
            "name": "Rohan Gupta"
          },
          "reviewBody": "Sent a legal notice to Flipkart for a wrong phone delivery. I got my full refund within 12 days. The lawyer drafted a very strong notice."
        }
      ]
    }
  ]
};

export default function WrongProductDeliveredClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "what-constitutes", title: "1. What Constitutes a Wrong Product Delivery?" },
    { id: "legal-liability", title: "2. Legal Liability of E-Commerce Platforms" },
    { id: "rejection-reasons", title: "3. Reasons Retailers Reject Returns" },
    { id: "remedies", title: "4. Comparison of Legal Remedies" },
    { id: "process", title: "5. Step-by-Step Notice Process" },
    { id: "elements", title: "6. Essential Notice Elements" },
    { id: "timeline", title: "7. Resolution Timeline & Escalation" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Wrong Product Delivered", href: "/send-a-legal-notice/wrong-product-delivered" },
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
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              CONSUMER RIGHTS PROTECTION
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Wrong Product Delivered</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the exact legal steps to demand a refund or replacement from e-commerce sellers under the Consumer Protection Act, 2019.
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fwrong-product-delivered&text=Check%20out%20this%20comprehensive%20guide%20on%20sending%20a%20legal%20notice%20for%20a%20wrong%20product%20delivered!%20%23ConsumerRights" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fwrong-product-delivered" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fwrong-product-delivered&title=Send%20a%20Legal%20Notice%20for%20Wrong%20Product%20Delivered" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Consumers can send a legal notice for a wrong product delivered under the Consumer Protection Act, 2019, by demanding an immediate refund or replacement from the seller and the e-commerce platform. A legally drafted notice provides a 15-day ultimatum to the retail entity to rectify the deficiency in service. Failure to comply with the legal notice allows the consumer to file a formal complaint in the District Consumer Disputes Redressal Commission seeking the principal amount, compensation for mental agony, and legal costs.
                  </p>
                </div>

                <section id="what-constitutes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. What Constitutes a Wrong Product Delivery?
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A wrong product delivery qualifies as a clear deficiency in service and an unfair trade practice under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019. When an e-commerce platform or independent retailer dispatches an item that materially differs from the product description, specifications, or images presented at the point of sale, the seller breaches the implied contract of sale. The law mandates that the goods supplied must correspond strictly with the description under Section 15 of the Sale of Goods Act, 1930. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The delivery of incorrect items is not merely an operational error; it constitutes a legal violation of consumer rights. Whether the discrepancy involves receiving a completely different brand, a cheaper substitute, a wrong size, an incorrect color, or a refurbished item instead of a new one, the liability rests entirely on the seller and the facilitating marketplace. According to the Consumer Protection (E-Commerce) Rules, 2020, e-commerce entities cannot refuse to take back goods or refuse to refund the consideration if the goods delivered are defective, deficient, or spurious.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many consumers assume that e-commerce return policies supersede national legislation. However, internal company policies cannot override the statutory protections granted by the Consumer Protection Act. If a retailer&apos;s 7-day return window expires, the consumer still retains the legal right to send a legal notice for a wrong product delivered within the two-year limitation period prescribed for filing a consumer dispute. The legal notice acts as the formal mechanism to enforce these overarching statutory rights when customer support channels fail.
                    </p>
                  </div>
                </section>

                <section id="legal-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Legal Liability of E-Commerce Platforms vs. Third-Party Sellers
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Identifying the correct legal entity is critical when preparing to send a legal notice for a wrong product delivered, as liability may fall on the e-commerce marketplace, the third-party seller, or both. E-commerce entities operate under two primary models: inventory-based and marketplace-based. Under the inventory-based model, the e-commerce platform owns the goods and is directly liable for any wrong product delivery. Conversely, the marketplace model involves the platform merely acting as an intermediary between the buyer and a third-party seller.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Despite the intermediary status of marketplace platforms like Amazon or Flipkart, the Consumer Protection (E-Commerce) Rules, 2020, impose specific duties on them. Section 5(3)(b) requires marketplace entities to provide a ticket number for each complaint lodged, enabling consumers to track the status of their grievance. More importantly, courts have consistently held e-commerce platforms jointly liable for unfair trade practices committed by third-party sellers using their infrastructure. A landmark ruling by the National Consumer Disputes Redressal Commission (NCDRC) established that marketplace platforms cannot completely evade liability by claiming &apos;safe harbor&apos; protection under the Information Technology Act, 2000, when they actively participate in the payment and delivery ecosystem.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When drafting a legal notice, advocates systematically address the notice to both the registered office of the e-commerce platform and the specific third-party seller identified on the tax invoice. This dual-targeting strategy prevents entities from shifting the blame and ensures that the maximum legal pressure is applied to facilitate a rapid refund. The notice explicitly demands that both parties coordinate to reverse the transaction and compensate the consumer for the gross deficiency in service.
                    </p>
                  </div>
                </section>

                <section id="rejection-reasons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Top Reasons Retailers Reject Return Requests
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Retailers and e-commerce platforms frequently reject legitimate return requests for wrong products by citing restrictive internal policies or claiming a lack of evidence. Understanding the standard rejection rationales allows consumers to pre-emptively gather the necessary proof to invalidate the seller&apos;s defense in a legal notice.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                        <li><strong>Missing Unboxing Video:</strong> Sellers often reject claims by stating the consumer cannot definitively prove the wrong item was inside the sealed package upon arrival.</li>
                        <li><strong>Tampered Packaging:</strong> Retailers may claim the product box or the manufacturer&apos;s seal was tampered with after delivery, transferring the liability to the buyer.</li>
                        <li><strong>Delayed Reporting:</strong> Platforms routinely reject disputes raised outside their arbitrary 48-hour or 7-day reporting windows, despite the two-year statutory limitation period.</li>
                        <li><strong>Weight Discrepancies:</strong> Sellers occasionally present courier manifest weights to argue the correct heavier item was shipped, implying the consumer swapped the item before requesting a return.</li>
                        <li><strong>Missing Tags or Accessories:</strong> Returns are frequently denied if the wrong item delivered is missing a tag or accessory.</li>
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
                      Consumers face multiple avenues for dispute resolution when they receive a wrong product, ranging from internal escalation to formal litigation. The table below compares the primary legal mechanisms available.
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
                            <td className="p-3 font-bold text-slate-900">National Consumer Helpline</td>
                            <td className="p-3">30 to 45 Days</td>
                            <td className="p-3">Low (Advisory)</td>
                            <td className="p-3">Mediation attempt; no binding order can be passed against the seller.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Formal Legal Notice</td>
                            <td className="p-3">15 to 30 Days</td>
                            <td className="p-3">High (Pre-litigation)</td>
                            <td className="p-3">Direct settlement, immediate refund, or replacement to avoid court proceedings.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">E-Daakhil (Consumer Court)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Absolute (Statutory)</td>
                            <td className="p-3">Binding judicial order for refund, legal costs, and punitive compensation.</td>
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
                      Sending a legal notice for a wrong product delivered requires adherence to a strict procedural sequence to ensure the communication is legally valid and admissible as evidence in court. Follow these exact chronological steps:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Compile All Evidentiary Materials</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Gather the original tax invoice, delivery receipt, digital screenshots of the product listing, high-resolution photographs, and the unboxing video if available.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Identify the Defending Parties</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Extract the correct legal entity names and registered office addresses of both the marketplace platform and the third-party seller.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft the Legal Notice</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Draft the document using formal legal terminology on the letterhead of an advocate, explicitly invoking the Consumer Protection Act, 2019.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Establish a 15-Day Ultimatum</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Conclude with a definitive compliance window, typically 15 days from receipt, warning of impending litigation.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch via Registered Post & Electronic Means</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Send the physical copies via India Post RPAD and email a digital copy to the grievance officers.</p>
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
                    <img src="/images/og/wrong-product-delivered.jpg" alt="Wrong Product Delivered Legal Notice Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure the document holds absolute legal validity and forces a settlement, the notice must contain specific structural elements and statutory references.
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>Header and Advocate Details:</strong> Official letterhead with enrollment number.</li>
                      <li><strong>Cause Title:</strong> Clear identification of Noticee and Client.</li>
                      <li><strong>Chronology of Facts:</strong> Precise timeline of order, payment, and delivery.</li>
                      <li><strong>Description of Breach:</strong> Detailed comparison of ordered vs. delivered product.</li>
                      <li><strong>Evidence of Prior Escalation:</strong> Summary of complaint ticket numbers.</li>
                      <li><strong>Statutory Invocations:</strong> Explicit references to the Consumer Protection Act, 2019.</li>
                      <li><strong>Demand Clause:</strong> Precise monetary calculation of the refund and compensation.</li>
                      <li><strong>Limitation Clause:</strong> Strict 15-day deadline for compliance.</li>
                    </ul>
                  </div>
                </section>

                <section id="timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timeline &amp; Escalation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The timeline for resolving a wrong product dispute accelerates significantly once a formal legal notice is dispatched. Under the Consumer Protection Act, consumers have exactly two years from the date the cause of action arises to file a formal complaint.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon receiving the legal notice via Registered Post, the corporate legal department of the e-commerce entity has 15 days to respond. In clear-cut cases involving wrong product deliveries, the company will typically contact the consumer or their advocate within 7 to 10 days to initiate a settlement, often involving the immediate dispatch of a return courier and a full refund.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day ultimatum expires without a satisfactory resolution, the consumer must immediately escalate the matter by filing a complaint in the District Consumer Disputes Redressal Commission (via the e-Daakhil portal). The consumer court will review the previously sent legal notice as proof that the consumer exhausted all pre-litigation avenues.
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
                    References: [1] <span className="font-semibold text-slate-700">The Consumer Protection (E-Commerce) Rules, 2020</span>. [2] <span className="font-semibold text-slate-700">NCDRC judgments on joint liability</span>.
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
                  <span className="text-xs text-slate-500">(127 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">RG</div>
                    <span className="text-xs font-bold text-slate-800">Rohan Gupta</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;Sent a legal notice to Flipkart for a wrong phone delivery. I got my full refund within 12 days. The lawyer drafted a very strong notice.&quot;
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
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Defective Product Delivery</h3>
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
                  <Link href="/services" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-1">
                    Support against Harassment
                  </Link>
                  <Link href="/legal-notice-to-retailer-wrong-damaged-product-delivery" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-2">
                    Defective Product Recovery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
