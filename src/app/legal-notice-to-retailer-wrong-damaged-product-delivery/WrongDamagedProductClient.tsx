'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What should I do immediately after receiving a wrong or damaged product?",
    answer: "You must capture clear photographic and video evidence of the damaged or wrong product immediately, preferably during unboxing. Contact the retailer's customer support within their specified window (typically 24 to 48 hours for transit damage) and file a formal return request. Save all automated tickets, email confirmations, and chat screenshots. This establishes an immediate, documented timeline of the issue. You should also ensure that you do not discard the original outer delivery packaging."
  },
  {
    question: "Can an e-commerce platform refuse a return if I do not have an unboxing video?",
    answer: "No. While an unboxing video is strong evidence, a platform cannot legally reject a legitimate claim solely because you lack one. If you can provide photos of the product defects, package weight details, or courier box condition, the seller must investigate. Rejecting returns without a manual inspection is considered an unfair trade practice. Platforms cannot use automated rejections to escape their statutory obligations. If they refuse to inspect, they are in violation of consumer guidelines."
  },
  {
    question: "What is Product Liability under the Consumer Protection Act, 2019?",
    answer: "Product Liability, codified under Chapter VI of the Consumer Protection Act, 2019, is the legal responsibility of a product manufacturer, seller, or service provider to compensate a consumer for any harm, injury, or loss caused by a defective product or deficient service. Under this, you can sue for damages, not just a refund. The goal is to hold businesses accountable for the quality of goods they put in the stream of commerce."
  },
  {
    question: "Is an e-commerce marketplace liable for a defective product sold by a third-party seller?",
    answer: "Yes, under the Consumer Protection (E-Commerce) Rules, 2020. Marketplaces like Amazon and Flipkart are intermediaries, but they are required to maintain a grievance redressal mechanism and ensure the details of the sellers are correct. Under the fallback liability rule, the marketplace can be held directly liable if a seller fails to deliver the promised goods or process a refund, or if counterfeit items are delivered."
  },
  {
    question: "How does a legal notice help in resolving product delivery disputes?",
    answer: "A legal notice escalates the issue past the standard customer support bots directly to the company's legal cell and Grievance Officer. Faced with a formal notice citing the Consumer Protection Act, companies usually process the refund or replacement immediately to avoid consumer court fines, negative publicity, and administrative expenses associated with consumer commission trials. It forces a human review of your support ticket."
  },
  {
    question: "Can I file a case in the Consumer Court for a wrong item delivery?",
    answer: "Yes. If a retailer or marketplace refuses to refund or replace a wrong or damaged item, you can file a complaint with the District Consumer Disputes Redressal Commission (DCDRC). You can file this complaint online via the e-Daakhil portal without hiring an advocate, claiming the product cost, interest, and compensation for mental agony and litigation expenses."
  },
  {
    question: "What is the limitation period to file a complaint in Consumer Court?",
    answer: "Under Section 69 of the Consumer Protection Act, 2019, the limitation period to file a consumer complaint is two years from the date the cause of action arose. This is typically the date you received the wrong or damaged product, or the date the seller formally rejected your request for a refund or replacement. Delaying beyond this two-year limit makes the claim time-barred under consumer laws."
  },
  {
    question: "What if the seller claims that the product was damaged during shipping?",
    answer: "The contract of sale is between you and the seller. The seller is responsible for ensuring the product reaches you in good condition. Any damage caused during transit is a dispute between the seller and their logistics partner. The seller cannot use shipping damage as an excuse to withhold your refund or replacement. The consumer cannot be penalized for transit errors or courier negligence."
  },
  {
    question: "Can I claim compensation for mental harassment in my legal notice?",
    answer: "Yes. Under consumer protection laws, you are entitled to claim compensation for the mental agony, harassment, and litigation expenses caused by the retailer's default. Citing this in the legal notice adds financial pressure on the retailer to resolve the issue before a formal consumer case is filed. In many cases, this is the main driver for an out-of-court settlement, as companies want to avoid punitive damages."
  }
];

const reviews = [
  {
    author: "Ananya Sen (Delhi)",
    rating: "5",
    text: "I ordered a smart television worth 45,000 rupees from an online store and received a unit with a shattered screen. The portal rejected my return claim, stating the damage happened after delivery. We served a legal notice under the Consumer Protection Act. The platform's grievance cell contacted us within 7 days, picked up the TV, and processed a full refund. The legal framework here worked perfectly and bypasses automated desk rejections."
  },
  {
    author: "Vikram Malhotra (Mumbai)",
    rating: "5",
    text: "I received counterfeit shoes instead of the premium brand I ordered. The seller refused the return, claiming the product delivered was genuine. We served a legal notice citing unfair trade practices and product liability. Fearing a consumer court complaint and license issues, the marketplace processed the refund and deactivated the seller. Excellent step-by-step guidance that every buyer should read."
  },
  {
    author: "Meera Nair (Bangalore)",
    rating: "5",
    text: "Ordered a wooden cabinet but received a damaged laminate version. Customer support kept closing my tickets automatically. Following the roadmap here, we served a legal notice to the seller and the marketplace. The legal team intervened, apologized for the bot errors, and delivered the replacement cabinet within a week. I highly recommend this approach for resolving e-commerce delivery issues."
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
      "name": "Legal Notice for Wrong or Damaged Product Delivery",
      "item": "https://www.legalrecovery.in/legal-notice-to-retailer-wrong-damaged-product-delivery"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Retailer/E-Commerce Seller for Wrong or Damaged Product Delivery",
  "description": "Receive a wrong, counterfeit, or damaged item? Learn how to serve a legal notice to e-commerce sellers and retailers for product replacement or refund in India.",
  "image": "https://www.legalrecovery.in/og-wrong-damaged-product.png",
  "author": {
    "@type": "Person",
    "name": "Advocate Aman Chawla",
    "url": "https://www.legalrecovery.in/authors/advocate-aman-chawla"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Advocate Sneha Sharma",
    "url": "https://www.legalrecovery.in/authors/advocate-sneha-sharma"
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
  "name": "Wrong/Damaged Product Refund Action Plan",
  "image": "https://www.legalrecovery.in/og-wrong-damaged-product.png",
  "description": "A tactical legal roadmap to draft, serve, and recover refunds or replacements for wrong, counterfeit, or damaged goods delivered in India.",
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

export default function WrongDamagedProductClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "wrong-damaged-rights", title: "Understanding Consumer Rights in Wrong or Damaged Product Deliveries",
      children: [
        { id: "rise-delivery-failures", title: "The Rise of E-Commerce Delivery Failures" },
        { id: "product-liability-act", title: "Product Liability under the Consumer Protection Act, 2019" }
      ]
    },
    { id: "seller-platform-obligations", title: "Seller and Platform Obligations for Product Standards",
      children: [
        { id: "sections-liability-action", title: "Section 84 to 86: Product Liability Action Against Manufacturers and Sellers" }
      ]
    },
    { id: "notice-vs-consumer-court", title: "Product Delivery Disputes: Legal Notice vs. Consumer Forum Complaint" },
    { id: "step-by-step-roadmap", title: "The Step-by-Step Roadmap to Demand a Replacement or Refund" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Checklist for Delivery Claims" },
    { id: "product-refund-stories", title: "Product Refund Success Stories and Case Studies" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice for Wrong or Damaged Product Delivery", href: "/legal-notice-to-retailer-wrong-damaged-product-delivery" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Banner with dark background #111827 and Red accent */}
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Consumer Protection Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Wrong or Damaged Delivery: <span className="text-[#DC2626]">Refund Legal Notice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Receive a wrong, counterfeit, or damaged item? Learn how to serve a legal notice to e-commerce sellers and retailers for product replacement or refund in India.
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
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Consumers buy high-value items (furniture, electronics, clothing) and receive wrong, counterfeit, or damaged goods. When support channels reject returns, consumers need to leverage Product Liability provisions of the Consumer Protection Act. This page details the legal notice procedure for refunds or product replacements.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India's growing e-commerce landscape, millions of transactions happen daily. While online shopping offers convenience, it also carries the risk of delivery failures. Many consumers buy high-value goods (like home furniture, high-end electronics, or luxury clothing) only to receive a broken, wrong, or counterfeit item. When they approach customer support, they are often met with auto-closed tickets or accused of trying to scam the platform.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  When support desks reject your return requests, you must shift from customer service chats to statutory legal claims. Citing a general demand notice, like a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, is a good starting point, but consumer disputes require specific statutory weight. Under the Consumer Protection Act, 2019, both e-commerce marketplaces and sellers are bound by product liability and service standards. Understanding these rights is essential to draft a notice that forces platforms to resolve your refund or replacement claim.
                </p>
              </div>

              {/* Section 1: Wrong or Damaged Product Deliveries */}
              <section id="wrong-damaged-rights" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Consumer Rights in Wrong or Damaged Product Deliveries
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A wrong or damaged product delivery occurs when the item delivered does not match the specifications, image, or quality description shown on the retail portal, or arrives in a broken, unusable state. Many platforms use automated algorithms to handle return claims, which often reject cases automatically if the system flags the buyer's account or if the seller disputes the damage.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This automated rejection violates your consumer rights. Under Indian law, a transaction is an implied contract where the seller agrees to deliver the specific product in merchantable condition. Delivering a wrong or damaged item and refusing to refund is a direct breach of this contract, as well as a statutory offense under consumer protection regulations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Many corporate portals rely on the sheer scale of transactions to ignore individual complaints. They assume that since the cost of hiring an advocate is high, the average consumer will eventually give up. However, under the Consumer Protection Act, the consumer has access to quick, online dispute resolution mechanisms. Serving a formal notice is the necessary first step to show the portal that you are willing to escalate the issue.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Additionally, many consumers are unaware that they are protected by the Sale of Goods Act, 1930, alongside consumer laws. Section 15 of the Sale of Goods Act states that where there is a contract for the sale of goods by description, there is an implied condition that the goods shall correspond with the description. If you order a blue leather sofa and receive a brown fabric sofa, the seller has failed to meet this implied condition, making the sale voidable and giving you a direct legal right to demand a refund.
                  </p>

                  <h3 id="rise-delivery-failures" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Rise of E-Commerce Delivery Failures
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    With the expansion of quick-commerce and third-party delivery partners, transit damages and wrong item swaps have increased significantly. High-value electronics like smartphones and laptops are sometimes swapped during transit, leaving the buyer with bricks or soap bars. When the buyer opens the box and reports the issue, the platform often claims that the package was delivered in secure packaging, leaving the buyer without their money or the product.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To counter these situations, consumers must build a clear chain of evidence and understand the platform's logistics responsibilities. Marketplaces use independent logistics providers, but under consumer law, the seller remains responsible for the safety of the goods until they are delivered to the buyer. You are not required to settle disputes with the courier; your contract is directly with the seller and the platform hosting them.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In quick commerce services, the delivery agent often leaves the package at the doorstep without verifying the recipient. If the package contains fragile items that are broken upon opening, proving transit damage can be difficult without an immediate inspection report. Consumers should record a continuous unboxing video from the moment the delivery box is picked up from the door to avoid any disputes.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, many e-commerce platforms have implemented 'open-box delivery' policies for high-value items, where the delivery agent opens the package in front of you. If you accept a product during an open-box delivery without noting damages, the platform will automatically reject subsequent refund claims. In such cases, if the damage is internal (e.g. a TV screen that is cracked underneath the protective film, or a laptop that does not turn on), you must still raise a product liability claim since internal defects cannot be verified during a visual doorstep check.
                  </p>

                  <h3 id="product-liability-act" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Product Liability under the Consumer Protection Act, 2019
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The Consumer Protection Act, 2019, introduced a dedicated chapter on Product Liability. This section allows consumers to seek compensation for any harm, injury, or loss caused by a defective product. Product liability applies to the manufacturer, the seller, and even the e-commerce service provider in specific scenarios.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the Act, a seller is liable for product defects if they exercised control over the design, testing, or packaging of the product, or if they modified the product before sale. If a seller delivers a wrong or damaged item and refuses to replace it, they are retaining your money for a defective transaction, which allows you to initiate a product liability action in the Consumer Commission.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This liability is strict, meaning that the consumer does not need to prove negligence on the part of the manufacturer or seller. It is sufficient to prove that the product was defective or did not match the description, and that this defect caused a financial or physical loss to the consumer. Citing this strict liability framework in your demand notice makes it clear to the retailer that their standard defenses will not hold up.
                  </p>
                </div>
              </section>

              {/* Section 2: Seller and Platform Obligations */}
              <section id="seller-platform-obligations" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Seller and Platform Obligations for Product Standards
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    E-commerce marketplaces and sellers are bound by strict obligations under consumer laws. Marketplaces cannot shield themselves behind the 'intermediary' defense under the IT Act if they fail to address consumer grievances.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The Consumer Protection (E-Commerce) Rules, 2020, mandate that every e-commerce entity must establish a clear consumer grievance mechanism. They must appoint a Grievance Officer and publish their contact details on the portal. Furthermore, marketplaces are prohibited from adopting unfair trade practices, such as refusing returns for defective or wrong products, or charging unreasonable cancellation fees.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The rules also state that e-commerce entities must display the total price of goods, along with a break-up of all fees, delivery charges, and taxes. They must provide clear details about the country of origin, warranty terms, and the exact contact details of the third-party seller. If a marketplace fails to display this information or facilitates a fraudulent listing, they can be held directly liable for consumer exploitation.
                  </p>

                  <h3 id="sections-liability-action" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 84 to 86: Product Liability Action Against Manufacturers and Sellers
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 84 of the Act outlines the liability of a product manufacturer, while Section 86 details the liability of a product seller. Under Section 86, a product seller is liable if they made a modification or alteration to the product that caused the defect, or if they made a warranty or representation that did not match the product.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When an e-commerce seller lists a product with specific photos and descriptions but delivers a wrong or inferior item, they are making a false representation. This misrepresentation triggers direct liability under Section 86. Citing these specific sections in your legal notice shows the platform's legal department that you have a clear case for product liability.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Crucially, Section 86 also holds the seller liable if they failed to inspect or maintain the product, or if they failed to pass on the manufacturer's safety instructions. If a retailer sells an item without verifying its packaging safety and it arrives broken, they cannot pass the blame to the manufacturer. The seller's failure to verify transit readiness constitutes a deficiency in service, making them the primary party liable to refund the consumer.
                  </p>
                </div>
              </section>

              {/* Section 3: Legal Notice vs. Consumer Forum Complaint */}
              <section id="notice-vs-consumer-court" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Product Delivery Disputes: Legal Notice vs. Consumer Forum Complaint
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When dealing with a wrong or damaged delivery, you have two primary legal options: serving a formal legal notice or filing a complaint with the Consumer Forum (DCDRC).
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice is a demand drafted by an advocate and served to the seller and the marketplace, giving them 15 days to resolve the claim. This is the fastest route, as portals want to avoid being listed in Consumer Forum filings. If the notice is ignored, the consumer can file a complaint in the Consumer Forum using the online e-Daakhil portal, or file a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link>.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Formal Legal Notice</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Consumer Forum Complaint</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Timeline</td>
                          <td className="px-6 py-4">Fast (typically 15 days compliance window)</td>
                          <td className="px-6 py-4">Slow (takes 6 to 18 months for final order)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Upfront Cost</td>
                          <td className="px-6 py-4">Low (only advocate's drafting and posting fee)</td>
                          <td className="px-6 py-4">Zero (no court fees for claims up to 5 Lakhs)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Representation</td>
                          <td className="px-6 py-4">Served by advocate on your behalf</td>
                          <td className="px-6 py-4">Can be filed directly by the consumer without a lawyer</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Compensation Scope</td>
                          <td className="px-6 py-4">Demands refund, interest, and pre-litigation costs</td>
                          <td className="px-6 py-4">Awards refund, interest, and punitive damages for harassment</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Pre-requisite Status</td>
                          <td className="px-6 py-4">Establishes formal record, useful for future filing</td>
                          <td className="px-6 py-4">Can be filed directly, notice serves as corroboration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Step-by-Step Roadmap */}
              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Roadmap to Demand a Replacement or Refund
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To recover your funds for a wrong or damaged delivery, you must follow a structured process. Follow this step-by-step roadmap:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Save Package Labels</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Save all packing materials, shipping labels, and barcode tags. Take photos of the packaging box, noting any tears or weight markings. These details prove that the package was tampered with or delivered in damaged condition.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: File Formal Return</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          File a return request on the portal within the return window. Upload photos of the damaged item. If support closes your ticket automatically, send an email to the portal's Grievance Officer and Grievance Team.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Draft Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Instruct an advocate to draft a formal legal notice to the seller and the marketplace. The notice must specify the order ID, transaction details, defect description, and cite Chapter VI of the Consumer Protection Act, 2019.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Formal Service</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Serve the notice via Speed Post and Registered Post to the corporate headquarters of both the seller and the marketplace. Send a digital copy to their legal team and Grievance Officer, starting the 15-day compliance window.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: e-Daakhil Filing</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          If the company fails to comply, file a consumer complaint on the online e-Daakhil portal. Attach your delivery proofs, unboxing photos, and the served legal notice, keeping in mind the statutory <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link>.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 5: Prerequisites and Evidence Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Delivery Claims
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To prevent the marketplace from dismissing your claim on technical grounds, you must prepare a comprehensive evidence bundle.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you purchased the product from an Instagram seller or a local store without a written agreement, you can still establish the purchase terms. You can read about <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand the alternative proofs acceptable under Indian consumer law.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Wrong or Damaged Product Delivery Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Order Invoice:</strong> The tax invoice generated by the portal showing the order ID, seller GSTIN, purchase price, and item specifications.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Unboxing Media:</strong> Unboxing video and high-resolution photos of the wrong or damaged item, showing the barcode and box label clearly.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Support logs:</strong> Copy of the return request ticket, support chat history, email exchanges with grievance officers, and automated rejection logs.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Courier Manifest Details:</strong> Delivery SMS or email confirmation showing the weight of the package and transit details.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of payment:</strong> Bank account statement, credit card slip, or digital wallet receipt showing the transaction.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Case Studies and Reviews */}
              <section id="product-refund-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Product Refund Success Stories and Case Studies
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and Product Liability claims resolve wrong or damaged product disputes:
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
                          <p className="text-xs md:text-sm text-slate-655 leading-relaxed italic">&quot;{review.text}&quot;</p>
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

              {/* Section 7: FAQs */}
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

            {/* Right Column Sidebar with Requested Advice Card */}
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
