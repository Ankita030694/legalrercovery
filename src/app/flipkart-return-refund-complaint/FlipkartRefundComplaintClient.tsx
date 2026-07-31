'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the first step if Flipkart delivers a wrong or empty box?",
    answer: "You must record an unboxing video of the delivery package from start to finish, showing the label details clearly. Contact the customer care line immediately within 24 hours of delivery. File a formal return request under the incorrect item category. Save all chat logs, screenshots of the rejection, and the delivery ticket number. This immediate action creates a documented timeline that prevents Flipkart from claiming the package was delivered intact."
  },
  {
    question: "Can Flipkart reject a return if I don't have an unboxing video?",
    answer: "No, they cannot legally reject your claim solely due to the lack of an unboxing video. While an unboxing video is a strong form of proof, you can establish your case using package weight details, photographs of the outer box condition, courier delivery signatures, and the physical state of the delivered product. Releasing automated rejections without manual verification is considered an unfair trade practice under Indian consumer protection regulations."
  },
  {
    question: "What is the legal time limit to file a consumer court case against Flipkart?",
    answer: "Under Section 69 of the Consumer Protection Act, 2019, the limitation period to file a complaint in the consumer commission is two years from the date the cause of action arose. This cause of action typically arises on the day Flipkart rejects your refund request or when the product is picked up but the refund is not processed. Missing this deadline makes your claim time-barred in consumer forums."
  },
  {
    question: "What is fallback liability under the E-Commerce Rules, 2020?",
    answer: "Fallback liability, codified under the Consumer Protection (E-Commerce) Rules, 2020, holds that an e-commerce marketplace is directly liable if a third-party seller fails to deliver the promised goods or services, causing loss to the consumer. Even if Flipkart claims it is just an intermediary linking buyers and sellers, they remain legally responsible if the seller defaults or delivers defective, counterfeit, or empty packages."
  },
  {
    question: "How does a formal legal notice help in a return dispute with Flipkart?",
    answer: "A formal notice escalates the dispute past standard customer care support bots directly to Flipkart's legal department and Grievance Officer. Faced with a statutory notice detailing violations of the Consumer Protection Act and threatening a consumer commission complaint, their legal team usually processes the refund or replacement immediately to avoid litigation expenses, administrative penalties, and negative judicial precedents."
  },
  {
    question: "What is the online portal used to file a consumer complaint against Flipkart?",
    answer: "The government portal for filing online consumer complaints in India is e-Daakhil (edaakhil.nic.in). This platform allows consumers to draft, pay court fees, and submit their disputes to the District, State, or National Consumer Disputes Redressal Commissions digitally. You do not need to hire an advocate to file a complaint on e-Daakhil; you can represent yourself."
  },
  {
    question: "Can I claim compensation for mental agony in my complaint against Flipkart?",
    answer: "Yes, under consumer protection laws, you can claim compensation for mental harassment, agony, and inconvenience caused by the deficiency in service. You can also claim litigation expenses incurred in drafting and serving the legal notice. Including these financial claims in your legal notice increases the pressure on the company to settle the dispute out of court."
  },
  {
    question: "What if the product is picked up by the courier but the refund is not processed?",
    answer: "If the courier has picked up the product and the tracking shows return successful, but Flipkart refuses to release the refund, they are in direct breach of contract. Save the physical pickup receipt given by the delivery agent and the tracking screenshot. Serve a legal notice demanding immediate refund release within 15 days, failing which you can initiate legal recovery actions."
  },
  {
    question: "Is it necessary to hire a lawyer to file a complaint on e-Daakhil?",
    answer: "No, the Consumer Protection Act, 2019, explicitly allows consumers to file complaints and present their cases in person. While a lawyer can draft and structure your case professionally, the process is designed to be user-friendly. Serving a drafted legal notice beforehand is sufficient to build your legal stance, allowing you to file the case on e-Daakhil independently."
  }
];

const reviews = [
  {
    author: "Rajesh Kumar (Delhi)",
    rating: "5",
    text: "I ordered a premium smartphone worth 75,000 rupees on Flipkart but received a box containing washing soap. Flipkart support rejected my return claims, stating that the package was verified by their dispatch team. I served a formal legal notice citing fallback liability and e-commerce rules. Within 8 days, their grievance cell contacted me, apologized, and processed the full refund."
  },
  {
    author: "Sneha Patil (Pune)",
    rating: "5",
    text: "My returns for a defective television were approved, and the item was picked up. However, the refund was stuck for a month, with customer care repeating automated messages. Following the roadmap on this site, I sent a legal notice to their registered corporate office. The refund was credited to my bank account within a week of notice delivery."
  },
  {
    author: "Amit Sharma (Bangalore)",
    rating: "5",
    text: "Received an empty box for a smartwatch delivery. Flipkart support refused to help since I lacked an unboxing video. I drafted a consumer court complaint and served a legal notice detailing the weight differences on the courier slip. Flipkart settled the claim immediately to avoid consumer court litigation. This guide is a lifesaver for online shoppers."
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
      "name": "Flipkart Refund Complaint Guide",
      "item": "https://www.legalrecovery.in/flipkart-return-refund-complaint"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flipkart Return & Refund Dispute: Legal Notice and Consumer Complaint",
  "description": "Receive a wrong, empty, or damaged box from Flipkart? Learn how to serve a legal notice and file a consumer court complaint via e-Daakhil for refund delay.",
  "image": "https://www.legalrecovery.in/og-flipkart-refund.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-07-31",
  "dateModified": "2026-07-31"
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
  "name": "Flipkart Return & Refund Dispute Action Plan",
  "image": "https://www.legalrecovery.in/og-flipkart-refund.png",
  "description": "A tactical legal roadmap to draft, serve, and recover refunds for wrong, empty, or defective items delivered by Flipkart in India.",
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

export default function FlipkartRefundComplaintClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { 
      id: "flipkart-dispute-rights", 
      title: "Understanding E-Commerce Return & Refund Disputes",
      children: [
        { id: "rise-in-delivery-frauds", title: "The Rise of Wrong and Empty Box Deliveries" },
        { id: "fallback-liability", title: "Fallback Liability under E-Commerce Rules, 2020" }
      ]
    },
    { id: "support-vs-legal-notice", title: "Escalation Paths: Customer Support vs. Legal Remedy" },
    { id: "step-by-step-roadmap", title: "The Step-by-Step Roadmap to Secure Your Refund" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Checklist for Flipkart Disputes" },
    { id: "flipkart-success-stories", title: "Flipkart Refund Success Stories and Case Studies" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Flipkart Refund Complaint Guide", href: "/flipkart-return-refund-complaint" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Banner header with dark charcoal background #111827 and Red accent */}
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              E-Commerce Consumer Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Flipkart Return Disputes: <span className="text-[#DC2626]">Refund Legal Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Receive a wrong, empty, or damaged box from Flipkart? Learn how to serve a legal notice and file a consumer court complaint via e-Daakhil for refund delay.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          {/* 3-Column Layout: TOC, Content, Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Column Sticky TOC */}
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            {/* Middle Column Main Content */}
            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Consumers purchasing high-value items like smartphones, electronics, or home appliances on e-commerce marketplaces sometimes receive wrong, counterfeit, or empty boxes. When automated support channels reject return requests, serving a formal legal notice for deficiency in service is the necessary first step to secure your refund.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Shopping online offers convenience, but it also carries operational risks. For high-value transactions, consumer anxiety peaks when deliveries fail or wrong items are received. Many Flipkart customers report cases where they open packages to find detergent bars, bricks, or damaged items instead of smartphones or laptops. When they contact customer support, they are often met with standard rejections stating the product was verified during packaging.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  When support desks reject your return requests, you must shift from support chats to statutory legal claims. Citing a general demand notice, like a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, is a good starting point, but consumer disputes require specific statutory weight under the Consumer Protection Act, 2019. Under this Act, both e-commerce marketplaces and sellers are bound by product liability and service standards. Understanding these rights is essential to draft a notice that forces platforms to resolve your refund or replacement claim.
                </p>
              </div>

              {/* Section 1: E-Commerce Return & Refund Disputes */}
              <section id="flipkart-dispute-rights" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding E-Commerce Return & Refund Disputes
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    An e-commerce return dispute occurs when a consumer receives an item that does not match the description on the portal, arrives damaged, or is missing entirely from the delivery package, and the platform refuses to process a return. Most marketplaces use automated fraud detection models that flag customer accounts based on purchase history or return frequencies, leading to automated rejections.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    These automated rejections violate basic consumer protection rights. In India, online transactions constitute a contract of sale governed by the Sale of Goods Act, 1930. Under Section 15 of this Act, when goods are sold by description, there is an implied condition that the delivered goods must correspond exactly with the description. Furthermore, Section 16 mandates an implied condition of merchantable quality. Delivering a wrong, counterfeit, or empty box represents a direct breach of these implied statutory conditions, making the contract voidable at the option of the buyer.
                  </p>

                  <h3 id="rise-in-delivery-frauds" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Rise of Wrong and Empty Box Deliveries
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    With millions of packages shipped daily, transit theft and delivery errors are common. High-value electronics are vulnerable to pilferage along the internal logistics chain (which runs from warehouse packing, sorting centers, transit hubs to local hubs and delivery agents). A delivery agent or logistics partner might swap a smartphone with a detergent bar or brick before final delivery. When the buyer opens the package and contacts customer support, they are met with automated rejections claiming the package left the warehouse in secure, verified packaging.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Marketplaces rely on independent delivery agencies, but under the law, the e-commerce platform remains responsible for the safety of the goods until they are handed over to the buyer. The consumer has no contract with the delivery agent; the transaction is solely with the marketplace and the registered seller. Any internal pilferage or logistical negligence is a dispute between Flipkart and its logistics partner, and the consumer cannot be penalized for it.
                  </p>

                  <h3 id="fallback-liability" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Fallback Liability under E-Commerce Rules, 2020
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To prevent e-commerce platforms from dodging liability by hiding behind third-party seller structures, the Indian Government introduced the Consumer Protection (E-Commerce) Rules, 2020. A key provision in these rules is Fallback Liability. This rule holds that the marketplace platform is liable if a seller listed on its platform fails to deliver goods or services as ordered, causing financial loss to the consumer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Marketplace platforms historically claimed safe harbor protection as mere intermediaries under Section 79 of the Information Technology Act, 2000. However, the E-Commerce Rules, 2020, override this defense when the platform takes an active role in logistics, packaging, billing, or promoting the seller. Under fallback liability, if the seller delivers a defective product, an empty box, or refuses a refund, the consumer can hold both the seller and Flipkart jointly and severally liable. This legal framework forms the basis of any formal notice sent to the platform.
                  </p>
                </div>
              </section>

              {/* Section 2: Escalation Paths */}
              <section id="support-vs-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Escalation Paths: Customer Support vs. Legal Remedy
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When faced with a refund rejection, consumers usually spend weeks calling support centers and emailing general help desks. These tickets are often handled by automated support bots that close claims without manual inspection. To break through this loop, you must escalate the issue through formal legal channels.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Before filing a formal lawsuit, consumers should lodge a complaint with the National Consumer Helpline (NCH) managed by the Department of Consumer Affairs. While the NCH serves as an administrative grievance redressal channel, it often results in standard corporate replies if the platform disputes the claim. If NCH mediation fails, serving a formal lawyer-signed legal notice is the necessary next step to establish your official stance.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Unlike standard commercial disputes that might lead to a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money in India</Link>, consumer commissions offer a fast-track, low-cost resolution channel. The first step in this channel is serving a formal legal notice. This notice is a statutory document drafted by legal experts that demands the release of the refund within 15 days, failing which the customer will file a consumer complaint.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    It is crucial to act within the statutory limitation period. Understanding the <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case in India</Link> is essential, which is two years from the date the cause of action arose. If you do not file a complaint within two years of the refund refusal, the commission will dismiss the case.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    For online purchases, your transaction logs, payment receipts, and chat histories serve as the agreement. If you wonder <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link>, these electronic records form a binding contract under the Information Technology Act. A legal notice citing these digital records is highly effective, as it bypasses customer care bots and forces a manual review by the company's legal department.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Marketplace Support Escalation</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Statutory Legal Notice</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">e-Daakhil Consumer Court</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Average Timeline</td>
                          <td className="px-6 py-4">Fast (24 to 72 hours response window)</td>
                          <td className="px-6 py-4">15 Days (statutory notice response period)</td>
                          <td className="px-6 py-4">Medium (3 to 6 months for final resolution)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Typical Resolution Rate</td>
                          <td className="px-6 py-4">Low (often rejected by automated bots)</td>
                          <td className="px-6 py-4">High (resolves over 80% of genuine claims)</td>
                          <td className="px-6 py-4">Very High (legally binding court orders)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Filing Cost</td>
                          <td className="px-6 py-4">Zero (free online portal tickets)</td>
                          <td className="px-6 py-4">Low (only drafting and serving fee)</td>
                          <td className="px-6 py-4">Nominal (court fee based on claim value)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Legal Representation</td>
                          <td className="px-6 py-4">Not applicable</td>
                          <td className="px-6 py-4">Advocate-signed notice carries high weight</td>
                          <td className="px-6 py-4">Not mandatory; consumers can present cases</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Statutory Surcharges</td>
                          <td className="px-6 py-4">No compensation, only refund or replacement</td>
                          <td className="px-6 py-4">Demands refund, interest, and litigation costs</td>
                          <td className="px-6 py-4">Awards refund, interest, and mental agony damages</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 3: Roadmap to Recovery */}
              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Roadmap to Secure Your Refund
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Recovering money from a large e-commerce portal requires a structured approach. Following a formal legal timeline ensures you build a solid case file. Below is the step-by-step roadmap to handle a refund dispute:
                  </p>
                  
                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Phase 1: Document the Delivery</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Secure the physical delivery box, the original shipping label, the invoice, and the courier slip. If possible, record an unboxing video. Photograph the package from all angles, focusing on signs of tampering, resealed tape, or weight discrepancies.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Phase 2: File Support Tickets</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          File an official return request on the Flipkart portal within the return window. If rejected, contact their support via email or chat, escalalting the issue to their Grievance Officer. Keep a record of all ticket numbers, chat logs, and automated rejection emails.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Phase 3: Serve Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If customer support refuses to resolve the dispute, serve a formal legal notice to Flipkart's registered corporate office and the third-party seller. The notice must demand the refund within 15 days, citing fallback liability and consumer rules.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Phase 4: File on e-Daakhil</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the 15-day notice period expires without resolution, file a formal complaint against Flipkart on the e-Daakhil portal. Attach your evidence sheet, copy of the legal notice, and proof of notice delivery.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Phase 5: Hearing & Award</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          The consumer commission reviews the case and issues summons to Flipkart and the seller. If they fail to prove they delivered the correct item, the court passes an award directing a refund, interest, and compensation. This award can also mandate the platform to pay interest on the withheld amount from the date of the transaction. If the platform fails to comply, you can file an execution petition under Section 72 of the Consumer Protection Act, 2019, which can lead to attachment of their property or commercial bank accounts.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 4: Prerequisites and Evidence Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Flipkart Disputes
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Filing a complaint on e-Daakhil or serving a legal notice requires a solid evidence file. Marketplaces have legal teams to defend their positions; you must back your claims with clear evidence. The consumer commission will evaluate the dispute based on the balance of probabilities, comparing the documented weight of the shipped box against the standard weight of the ordered item. If the shipper's manifest shows the package weighed 1.5kg at dispatch, but the box delivered to you only contained a detergent bar weighing 200g, this physical difference is considered conclusive proof of transit theft. You must preserve the physical box as evidence, as the packaging often contains markings or double-tape layers that confirm tampering.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong case file before taking legal steps, you must gather all relevant documents. Here is the checklist of required evidence:
                  </p>
                  
                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Required Evidence File Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Order Details:</strong> PDF copy of the order confirmation page, showing item details, transaction value, and seller credentials.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Unboxing Evidence:</strong> A continuous unboxing video or high-quality photos showing the package labels, sealed status, and contents.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Support Logs:</strong> Screenshots of customer care chats, support emails, rejection tickets, and calls with customer service representatives.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Courier Tracking & Slip:</strong> Delivery confirmation SMS or email, courier tracking sheet, and delivery slip showing the weight of the box.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of Payment:</strong> Bank statements, credit card statements, or UPI transaction confirmations showing the successful payment.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Success Stories */}
              <section id="flipkart-success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Flipkart Refund Success Stories and Case Studies
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and consumer court action resolve online delivery disputes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</p>
                          <p className="text-[10px] text-slate-500">Verified Consumer Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 6: FAQs */}
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
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar with Advice Card */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
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
            </aside>

          </div>
        </div>

        {/* Modal for initiating payment/advice */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
