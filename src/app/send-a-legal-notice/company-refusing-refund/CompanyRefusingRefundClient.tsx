'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can I send a legal notice for a company refusing refund?",
    answer: "Yes, you can send a legal notice for a company refusing a refund under Section 35 of the Consumer Protection Act, 2019. A formally drafted legal notice serves as a mandatory pre-litigation warning that compels the company to process your refund within 15 days to avoid consumer court proceedings. Addressing this notice to the grievance officer and corporate headquarters ensures serious legal attention."
  },
  {
    question: "How long does a company have to respond to a legal notice for a refund?",
    answer: "A company typically has a strict 15-day compliance window to respond to a legal notice demanding a refund. If the corporate entity fails to initiate the refund process or provide a satisfactory resolution within this timeframe, the consumer can file a formal complaint in the District Consumer Disputes Redressal Commission. Most established brands prefer to settle the dispute immediately rather than facing litigation costs and reputational damage."
  },
  {
    question: "Can an e-commerce company refuse a refund citing internal return policies?",
    answer: "No e-commerce company can refuse a legitimate refund by citing internal return policies if the product delivered was defective, deficient, or spurious. The Consumer Protection (E-Commerce) Rules, 2020 strictly prohibit online marketplaces from imposing cancellation charges or denying refunds that violate statutory consumer rights. Internal company policies are legally void if they contravene national consumer protection legislation."
  },
  {
    question: "What compensation can I claim in a consumer court for a refused refund?",
    answer: "Consumers can legally claim the total principal amount of the refused refund along with an 18% annual interest rate from the date of the transaction. Furthermore, consumer commissions frequently award additional financial compensation for the mental agony endured and cover all legal costs incurred during the litigation process. Punitive damages may also be levied against the company if gross negligence or persistent unfair trade practices are proven."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/company-refusing-refund"
      },
      "headline": "Send a Legal Notice for Company Refusing Refund",
      "image": [
        "https://legalrecovery.in/images/og/company-refusing-refund.jpg"
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
      "datePublished": "2024-05-10T08:00:00+08:00",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/company-refusing-refund",
      "name": "Send a Legal Notice for Company Refusing Refund",
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
          "name": "Company Refusing Refund",
          "item": "https://legalrecovery.in/send-a-legal-notice/company-refusing-refund"
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
      "name": "Steps to Send a Legal Notice to a Company Refusing Refund",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Collect all invoices, payment receipts, and communication logs"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Identify the registered corporate headquarters and grievance officer"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft a formal legal notice invoking the Consumer Protection Act, 2019"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch the notice via Registered Post with Acknowledgment Due"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "File a consumer dispute if the company fails to refund within 15 days"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Company Refusing Refund",
      "description": "Professional legal notice drafting and dispatch service to demand a refund from a non-compliant company.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "154"
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
            "name": "Amit Desai"
          },
          "reviewBody": "A travel agency refused to refund my canceled booking. I sent a legal notice for company refusing refund through Legal Recovery and received my 45,000 INR back in exactly 9 days. Brilliant service."
        }
      ]
    }
  ]
};

export default function CompanyRefusingRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-the-law", title: "1. Understanding the Law on Refused Refunds" },
    { id: "identifying-deficiency", title: "2. Identifying a Deficiency in Service" },
    { id: "common-reasons", title: "3. Common Excuses Companies Use to Deny Refunds" },
    { id: "legal-remedies", title: "4. Legal Remedies for Non-Refunds" },
    { id: "step-by-step", title: "5. Step-by-Step Process to Send a Notice" },
    { id: "crucial-elements", title: "6. Crucial Elements of the Legal Notice" },
    { id: "timeline-escalation", title: "7. Resolution Timeline & Court Escalation" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Company Refusing Refund", href: "/send-a-legal-notice/company-refusing-refund" },
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
              Legal Notice for <span className="text-[#DC2626]">Company Refusing Refund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the exact legal mechanisms to demand your money back when a corporation, e-commerce platform, or service provider illegally withholds your refund.
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fcompany-refusing-refund&text=Check%20out%20this%20comprehensive%20guide%20on%20sending%20a%20legal%20notice%20for%20a%20company%20refusing%20refund!%20%23ConsumerRights" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fcompany-refusing-refund" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fcompany-refusing-refund&title=Send%20a%20Legal%20Notice%20for%20Company%20Refusing%20Refund" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Consumers have a statutory right to send a legal notice to any company refusing a refund for deficient services or defective products under the Consumer Protection Act, 2019. This formal notice acts as a binding legal ultimatum, granting the defaulting corporate entity exactly 15 days to process the withheld money before litigation begins. If the company ignores the legal notice, the consumer can proceed to file a complaint with the consumer commission seeking the principal amount, accrued interest, and punitive damages.
                  </p>
                </div>

                <section id="understanding-the-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Understanding the Law on Refused Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The refusal to refund a consumer's money when services are unfulfilled or goods are defective constitutes a direct violation of consumer rights. Under the framework of the Consumer Protection Act, 2019, an unwarranted retention of a consumer's money by a business entity qualifies as an "Unfair Trade Practice." The legislation strictly curtails the power of corporations to unilaterally formulate 'no-refund' policies that bypass statutory obligations.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The law mandates that whenever a contract for sale is breached—whether due to non-delivery, delivery of sub-standard products, or failure to render agreed-upon services—the consumer is entitled to restitution. Section 2(47) of the Consumer Protection Act clearly outlines that any business practice that aims to impose unjustified costs or retain payments for unrendered services is inherently deceptive. Furthermore, the Reserve Bank of India (RBI) guidelines on failed transactions also enforce stringent timelines for merchants and payment gateways to reverse funds back to the original payment source.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many companies attempt to shield themselves behind complex Terms and Conditions (T&Cs) or digital clickwrap agreements that the consumer 'accepted' during checkout. However, the Supreme Court of India has routinely observed that terms forming a contract of adhesion (where the consumer has no bargaining power) cannot override the fundamental protections guaranteed under the Consumer Protection Act. If a term is found to be exceptionally one-sided, consumer commissions possess the absolute authority to strike it down and order an immediate refund.
                    </p>
                  </div>
                </section>

                <section id="identifying-deficiency" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Identifying a Deficiency in Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating legal action, it is imperative to establish that a "deficiency in service" or a "defect in goods" has occurred. The legal notice for a company refusing a refund hinges entirely on this classification. Section 2(11) of the Act defines 'deficiency' as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, or manner of performance which is required to be maintained by or under any law. 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Common scenarios establishing a clear deficiency that warrants a refund include:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                        <li><strong>E-commerce Failures:</strong> The delivery of damaged, incorrect, or counterfeit merchandise where the platform refuses to authorize a return pickup.</li>
                        <li><strong>Travel and Hospitality:</strong> Airlines or hotels canceling bookings arbitrarily and offering 'credit shells' instead of transferring the cash refund to the source account.</li>
                        <li><strong>EdTech and Subscriptions:</strong> Educational platforms refusing to cancel subscriptions or failing to provide the promised curriculum, yet continuing to auto-deduct EMIs.</li>
                        <li><strong>Real Estate Delays:</strong> Builders failing to deliver possession of a residential flat within the stipulated timeframe agreed upon in the builder-buyer agreement.</li>
                        <li><strong>Financial Services:</strong> Insurance companies wrongfully repudiating legitimate claims or banks levying unauthorized penalty charges.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="common-reasons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Common Excuses Companies Use to Deny Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Corporations employ sophisticated delay tactics to exhaust consumers and prevent them from pursuing legal action. Recognizing these standard defenses is vital, as a professionally drafted legal notice systematically dismantles these excuses by citing appropriate legal precedents.
                    </p>
                    <ul className="list-decimal list-inside text-sm md:text-base text-slate-650 space-y-4">
                      <li><strong>"You accepted our No-Refund Policy":</strong> The most ubiquitous defense. A legal notice counters this by invoking Section 47 of the Consumer Protection Act, declaring the clause as an unfair contract term.</li>
                      <li><strong>"The return window has expired":</strong> E-commerce entities frequently quote arbitrary 7-day or 10-day return windows. A notice clarifies that statutory limitation periods for filing disputes extend up to two years.</li>
                      <li><strong>"Force Majeure (Act of God)":</strong> Used extensively by travel agencies. Unless the event strictly made the service objectively impossible and the contract specifically covers it without penalizing the consumer, courts generally mandate refunds.</li>
                      <li><strong>"We are only an intermediary":</strong> Marketplaces attempt to shift liability to third-party sellers. As per the <span className="font-semibold text-slate-700">Consumer Protection (E-Commerce) Rules, 2020</span>, intermediaries share joint liability if they control the payment gateway and delivery logistics.</li>
                    </ul>
                  </div>
                </section>

                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Legal Remedies for Non-Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A consumer is not helpless against corporate intransigence. The Indian judicial system provides a tiered escalation mechanism to enforce refund rights. The following comparative table illustrates the available legal pathways.
                    </p>
                    
                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Remedy Option</th>
                            <th className="p-3">Process Duration</th>
                            <th className="p-3">Legal Force</th>
                            <th className="p-3">Outcome Reliability</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">National Consumer Helpline (NCH)</td>
                            <td className="p-3">30 to 60 Days</td>
                            <td className="p-3">Low (Mediation only)</td>
                            <td className="p-3">Often results in the company reiterating its initial denial as the NCH cannot pass binding orders.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Formal Legal Notice via Advocate</td>
                            <td className="p-3">15 to 30 Days</td>
                            <td className="p-3">High (Pre-litigation warning)</td>
                            <td className="p-3">Highly effective. Compels corporate legal teams to intervene and settle to avoid court costs and PR damage.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Consumer Court (e-Daakhil)</td>
                            <td className="p-3">8 to 24 Months</td>
                            <td className="p-3">Absolute (Judicial Decree)</td>
                            <td className="p-3">Guarantees recovery of the refund amount, plus significant interest and compensation for mental agony.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Process to Send a Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executing a legal notice requires meticulous attention to procedural law. A poorly drafted notice sent by an individual rather than a registered advocate is routinely ignored by corporate legal departments. To ensure maximum compliance, follow this authorized sequence:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Assemble the Documentary Trail</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Consolidate your evidence. This includes the original tax invoice, bank or credit card transaction statements, terms of service at the time of purchase, and all email/chat transcripts with customer support proving their refusal.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Locate Corporate Details</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Identify the exact legal name of the entity via the Ministry of Corporate Affairs (MCA) database. Find the address of their registered headquarters and the designated Grievance Officer.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Retain Legal Counsel for Drafting</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Engage an advocate to draft the notice on official letterhead. The draft must establish the chronological timeline of events, articulate the specific breach of contract, and cite relevant sections of the Consumer Protection Act.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Issue the 15-Day Ultimatum</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">The notice must conclude with an unambiguous demand for the full refund, legal expenses, and a firm 15-day deadline to comply before litigation is instituted.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Execute Multi-Channel Dispatch</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">Dispatch the physical notice via India Post Registered Post (RPAD) to secure a legally binding tracking receipt. Simultaneously, email a scanned copy of the signed notice to the company&apos;s legal and grievance email IDs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="crucial-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Crucial Elements of the Legal Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/company-refusing-refund.jpg" alt="Company Refusing Refund Legal Notice Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A notice will only yield a refund if it is structurally impenetrable. Corporate lawyers scrutinize these documents for loopholes. An effective legal notice for a company refusing a refund must contain:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>Advocate&apos;s Credentials:</strong> Clear display of the lawyer&apos;s Bar Council enrollment number on the letterhead.</li>
                      <li><strong>Precise Addressing:</strong> Addressed to the Managing Director (MD) or Grievance Officer, ensuring it bypasses lower-level customer support.</li>
                      <li><strong>Financial Calculus:</strong> An exact breakdown of the demanded amount: Principal + 18% Interest + Mental Agony Compensation + Notice Drafting Fees.</li>
                      <li><strong>Jurisdictional Clause:</strong> Specifying the exact District Consumer Disputes Redressal Commission where the complaint will be filed (usually based on the consumer&apos;s residence as per the updated 2019 Act).</li>
                      <li><strong>Evidentiary Annexures:</strong> Clear references to the attached proofs, such as "Annexure A: Bank Statement" and "Annexure B: Email Rejection".</li>
                    </ul>
                  </div>
                </section>

                <section id="timeline-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timeline &amp; Court Escalation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the legal notice is delivered via Registered Post, the statutory clock begins ticking. In over 80% of cases involving legitimate consumer grievances, the company&apos;s legal team will initiate contact within 10 to 12 days. They typically propose an out-of-court settlement consisting of the full principal refund, provided the consumer agrees not to pursue litigation or post negatively on social media.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company maintains its refusal or ignores the notice entirely after the 15-day period lapses, the consumer&apos;s legal standing is significantly strengthened. The ignored notice serves as irrefutable proof in court that the company was granted a fair opportunity to rectify its deficiency but acted with mala fide intent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The immediate next step is to file a formal complaint via the government&apos;s <span className="font-semibold text-slate-700">e-Daakhil portal</span>. The consumer court will review the legal notice, the postal receipt, and the evidence, subsequently issuing a summons to the company. The <span className="font-semibold text-slate-700">National Consumer Disputes Redressal Commission (NCDRC)</span> guidelines mandate the expeditious disposal of such clear-cut refund disputes.
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
                    References: [1] <span className="font-semibold text-slate-700">The Consumer Protection (E-Commerce) Rules, 2020</span>. [2] <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline transition-colors">NCDRC judgments on deficiency in service</a>. [3] <span className="font-semibold text-slate-700">e-Daakhil filing platform</span>.
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
                  <span className="text-xs text-slate-500">(154 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">AD</div>
                    <span className="text-xs font-bold text-slate-800">Amit Desai</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "A travel agency refused to refund my canceled booking. I sent a legal notice for company refusing refund through Legal Recovery and received my 45,000 INR back in exactly 9 days. Brilliant service."
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
              <Link href="/flipkart-return-refund-complaint" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Fight E-commerce Fraud</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn specific strategies to combat return and refund rejections by leading e-commerce platforms.</p>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm border-[#DC2626]">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India's trusted consumer protection and legal tech platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ people on consumer disputes, defective products, and e-commerce frauds. Legal Recovery focuses on fast out-of-court settlements and connects you with top panel advocates.
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
        <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />
      )}
    </>
  );
}
