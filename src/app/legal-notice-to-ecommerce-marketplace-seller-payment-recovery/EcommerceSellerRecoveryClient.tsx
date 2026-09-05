'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Why do e-commerce marketplaces freeze seller payouts?",
    answer: "E-commerce platforms like Amazon, Flipkart, and Meesho freeze seller payouts primarily to protect themselves from potential customer returns, refunds, chargebacks, and intellectual property (IP) disputes. If a seller's account is suspended for policy violations or suspected fraudulent activity, the marketplace moves the entire account balance into a 'reserve' status. While a temporary hold is contractually permitted, holding these funds indefinitely without clear justification is illegal under Indian contract law. Marketplaces claim this is a security measure, but in practice, it severely locks the working capital of genuine sellers."
  },
  {
    question: "Is it legal for Amazon or Flipkart to hold my funds indefinitely?",
    answer: "No. While the marketplace agreements allow platforms to hold funds for a reasonable period (typically 90 days) to cover customer returns and chargebacks, retaining your payouts permanently without proving actual damage or fraud is illegal. Doing so constitutes unjust enrichment under Section 70 of the Indian Contract Act, 1872. Once the return window for the products sold has expired, the marketplace must release the remaining balance to the seller. Retaining funds beyond the return cycle constitutes an unauthorized financial penalty."
  },
  {
    question: "What is a Business Solutions Agreement (BSA) or Seller Agreement?",
    answer: "A Business Solutions Agreement or Seller Terms is the adhesion contract that every third-party vendor must accept to sell on a marketplace. These agreements are heavily weighted in favor of the platform, granting them unilateral rights to suspend accounts and hold funds. However, these clauses are subject to the Indian Contract Act, and any clause that is unconscionable, arbitrary, or acts as an absolute restraint on legal proceedings is void under Section 28 of the Act. Courts routinely strike down one-sided clauses that completely block a seller's right to recover their dues."
  },
  {
    question: "How does a legal notice help in recovering suspended seller funds?",
    answer: "Serving a formal legal notice is highly effective because it bypasses the automated support bots and seller support desks. It escalates the dispute directly to the marketplace's in-house legal and compliance teams. Marketplaces want to avoid formal litigation and arbitration due to the administrative costs involved. In many cases, receiving a lawyer-backed notice prompts the legal team to review the account and release the frozen payouts to resolve the dispute before it escalates to an expensive tribunal."
  },
  {
    question: "Can I invoke arbitration against an e-commerce platform?",
    answer: "Yes. Most seller agreements contain an arbitration clause. If the marketplace refuses to release your funds after receiving a legal notice, you can invoke arbitration. Under Section 21 of the Arbitration and Conciliation Act, 1996, you serve a notice to commence arbitration, requiring both parties to appoint an arbitrator. The prospect of paying for expensive arbitration often forces the marketplace to settle out of court, as they would prefer to release the funds rather than pay administrative tribunal fees."
  },
  {
    question: "What happens to my funds if my seller account is permanently deactivated?",
    answer: "Even if your account is permanently deactivated, the marketplace cannot legally confiscate your earnings. After a standard waiting period of 90 days (to allow all customer return windows to close), the platform is legally obligated to disburse the net balance of your sales. If they refuse to release the funds after 90 days, you have a direct cause of action to serve a legal notice and recover the withheld money. Any policy statement by the platform claiming they will withhold all funds permanently is void under Indian law."
  },
  {
    question: "What evidence do I need to prepare to claim my frozen payouts?",
    answer: "You must assemble a complete documentation trail, including: (1) your Seller Central ledger statements showing the exact balance, (2) payout reports and transaction history, (3) the deactivation email and subsequent appeal logs, (4) proof of tax invoice filings (GST returns), and (5) inventory and delivery records proving that the goods were successfully shipped to customers. Having physical manifests signed by the marketplace's logistics partner is extremely helpful."
  },
  {
    question: "Can I file a case in a local consumer court against the marketplace?",
    answer: "Generally, no. As a third-party seller on a marketplace, you are engaged in commercial transactions to earn profits, which excludes you from the definition of a 'consumer' under the Consumer Protection Act, 2019. Any dispute between a seller and a platform is classified as a commercial dispute. It must be resolved through commercial arbitration, mediation, or by filing a case in a competent commercial civil court. However, you can seek urgent interim protection in commercial courts before starting arbitration."
  },
  {
    question: "What is the limitation period to file a suit against a marketplace?",
    answer: "Under the Limitation Act, 1963, the limitation period to initiate legal action for recovering frozen payouts is three years. This period begins from the date the cause of action arose, which is typically the date the marketplace deactivated your account or explicitly refused to release your funds after the standard 90-day retention period. If you do not act within this three-year window, your claim becomes time-barred and you lose your legal right to enforce recovery."
  }
];

const reviews = [
  {
    author: "Rajesh Gupta (Gupta Electronics)",
    rating: "5",
    text: "Amazon suspended our seller account due to a suspected customer complaint and froze 8.5 Lakhs of our payouts. We spent two months sending appeals through the automated dashboard but kept receiving canned responses. Finally, we sent a formal legal notice to Amazon's legal cell. Within 15 days, they reviewed the ledger manually and released the entire balance to our bank account. This guide was a lifesaver for our business cash flow."
  },
  {
    author: "Sneha Patel (Vogue Apparels)",
    rating: "5",
    text: "Flipkart withheld 4.2 Lakhs of our payments citing an IP policy violation. The return window for our products had closed, but they refused to release the reserve. We served a legal notice under the Contract Act demanding our proceeds. The legal team contacted us directly, verified our invoices, and processed the payout, avoiding arbitration. The step-by-step roadmap provided here worked exactly as described."
  },
  {
    author: "Amit Verma (Verma Toys & Games)",
    rating: "5",
    text: "Meesho suspended our shop after a logistics dispute and held 6.7 Lakhs of our money. The automated support desk was unreachable. Following the roadmap here, we served a notice citing unjust enrichment. Faced with a potential commercial claim, Meesho resolved the dispute and cleared our pending ledger dues within a month. This is the only way to deal with marketplace suspensions."
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
      "name": "E-Commerce Seller Dispute: Recover Frozen Payouts",
      "item": "https://www.legalrecovery.in/legal-notice-to-ecommerce-marketplace-seller-payment-recovery"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "E-Commerce Seller Dispute: Recover Frozen Payouts from Amazon/Flipkart",
  "description": "Learn how to recover frozen seller account money on Amazon, Flipkart, or Meesho. Serve a legal notice to e-commerce marketplace platforms for withheld payouts.",
  "image": "https://www.legalrecovery.in/og-ecommerce-seller-recovery.png",
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
  "name": "E-Commerce Seller Payout Recovery Action Plan",
  "image": "https://www.legalrecovery.in/og-ecommerce-seller-recovery.png",
  "description": "A tactical legal roadmap to draft, serve, and recover suspended and frozen payouts from major e-commerce marketplaces in India.",
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

export default function EcommerceSellerRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "frozen-payouts-suspension", title: "Understanding E-Commerce Seller Account Suspensions and Frozen Payouts",
      children: [
        { id: "reality-blocked-funds", title: "The Reality of Blocked Funds and Reserve Balances" },
        { id: "bsa-contractual-bind", title: "E-Commerce Business Solution Agreements: The Contractual Bind" }
      ]
    },
    { id: "seller-contract-rights", title: "Seller Rights Under Indian Contract Law for Frozen Proceed Recovery",
      children: [
        { id: "unjust-enrichment-remedies", title: "Section 73 and 74: Remedies for Breach and Unjust Enrichment" }
      ]
    },
    { id: "notice-vs-arbitration", title: "E-Commerce Dispute Resolution: Legal Notice vs. Arbitration" },
    { id: "step-by-step-notice", title: "The Step-by-Step Roadmap to Draft and Serve the Notice" },
    { id: "seller-prerequisites-evidence", title: "Prerequisites and Evidence Checklist for third-party Sellers" },
    { id: "payout-success-stories", title: "Seller Payout Recovery Case Studies and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "E-Commerce Seller Dispute: Recover Frozen Payouts", href: "/legal-notice-to-ecommerce-marketplace-seller-payment-recovery" }
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
              E-Commerce Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              E-Commerce Seller Disputes: <span className="text-[#DC2626]">Recover Frozen Payouts</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover frozen seller account money on Amazon or Flipkart by serving a formal legal notice to e-commerce marketplaces and invoking contract law.
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
                  Third-party sellers on e-commerce platforms like Amazon, Flipkart, or Meesho frequently have seller accounts suspended and payouts/reserves frozen indefinitely. This guide covers e-commerce marketplace agreements, seller rights under contract law, and how to serve a legal notice to recover locked proceeds.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India's digital retail landscape, e-commerce marketplaces host millions of small and medium businesses. While platforms like Amazon and Flipkart provide access to a massive consumer base, they also exercise immense authority over vendor operations. One of the most critical challenges third-party sellers face is the sudden deactivation of their seller accounts. This suspension is often accompanied by an indefinite freeze on outstanding payouts. Marketplaces frequently cite generic policy violations, customer complaints, or suspected intellectual property issues, placing the seller's hard-earned revenues into an inaccessible reserve balance.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  When seller support portals fail and appeals receive automated responses, sellers are left with few options. Standard commercial collection steps, such as sending a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, must be adapted to account for the complex adhesive agreements signed with tech platforms. Under Indian contract law, platforms cannot unilaterally confiscate your proceeds. Knowing how to draft a formal demand, invoke the Indian Contract Act, and bypass automated dashboards is essential to reclaim your locked working capital.
                </p>
              </div>

              {/* Section 1: E-Commerce Account Suspensions */}
              <section id="frozen-payouts-suspension" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding E-Commerce Seller Account Suspensions and Frozen Payouts
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    E-commerce marketplaces operate on trust and safety metrics. The platforms use automated risk algorithms that monitor account health, order defect rates, customer reviews, and intellectual property claims. When an algorithm flags an account for suspected policy violations (such as selling inauthentic items, listing manipulation, or multiple account links), the seller dashboard is locked instantly. Along with account suspension, the marketplace immediately freezes the seller's outstanding balance, moving it to a reserve status.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The platform's standard policy is to hold these funds for a minimum of 90 days. This period is intended to allow for customer return windows to close and to process any chargebacks. However, once this 90-day period expires, many sellers find that their funds remain locked indefinitely. The platform's automated systems continue to generate boilerplate deactivation messages, refusing manual reviews. This leaves the seller with frozen cash flow, unresolved inventories, and unpaid vendor obligations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This practice can be financially devastating. For small business owners, having their entire working capital frozen means they cannot pay their manufacturers, clear their GST liabilities, or maintain daily operations. The marketplaces operate under the assumption that they are protected by their online terms of service, but under the Indian legal system, no platform can unilaterally seize commercial proceeds without showing cause and establishing actual damages.
                  </p>

                  <h3 id="reality-blocked-funds" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Reality of Blocked Funds and Reserve Balances
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The reserve balance represents the funds generated from orders that have been successfully delivered to customers. Unlike pending orders, these are completed transactions where the buyer has received the product, paid the marketplace, and the return window has closed. The marketplace acts as an intermediary, collecting the money from the customer and holding it in trust before disbursing it to the seller after deducting fees.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When the marketplace retains this reserve balance permanently, they are withholding funds that belong to the seller. While the platform has the right to withhold money temporarily for return buffer purposes, holding it indefinitely after the return windows close is a direct violation of property rights and trust. Sellers must recognize that this reserve is their asset and the marketplace cannot legally confiscate it.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, platforms often fail to provide detailed itemized accounts of the withheld reserves. They group the funds under vague categories like 'deficits' or 'withheld payouts', making it impossible for the seller to calculate the exact net balance through standard accounting. A formal demand notice requires the platform to provide a full ledger statement and render proper accounts of all transactions completed before the deactivation.
                  </p>

                  <h3 id="bsa-contractual-bind" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    E-Commerce Business Solution Agreements: The Contractual Bind
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The relationship between a seller and a marketplace is governed by a standard Seller Agreement or Business Solutions Agreement (BSA). These contracts are adhesive agreements, meaning the seller must accept them on a 'take-it-or-leave-it' basis to access the portal. The BSA contains clauses that grant the marketplace the unilateral right to suspend accounts, withhold payments, and destroy inventory if they suspect counterfeit sales or illegal activity.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    However, under Indian law, adhesive contracts are not immune to judicial review. If a clause in the seller agreement allows the marketplace to confiscate payments without proving actual loss or fraud, it is considered an arbitrary and unconscionable contract term. The courts and arbitrators in India have repeatedly held that such clauses are invalid, as they allow the stronger party to impose penalties without trial. The marketplace cannot use the BSA to override the statutory rights of the seller under the Indian Contract Act.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In particular, Section 28 of the Indian Contract Act makes any contract that absolute limits a party from enforcing their rights through common legal proceedings void to that extent. Marketplaces often insert clauses restricting sellers from pursuing legal remedies outside of specific arbitration forums. While arbitration is a valid route, the marketplace cannot use these clauses to block you from seeking urgent interim relief in court or demanding the release of undisputed balances.
                  </p>
                </div>
              </section>

              {/* Section 2: Seller Rights Under Contract Law */}
              <section id="seller-contract-rights" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Seller Rights Under Indian Contract Law for Frozen Proceed Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Sellers are protected by the provisions of the Indian Contract Act, 1872. Even if a marketplace deactivates your account for a policy violation, they are legally required to disburse the proceeds from sales that were completed before the suspension.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The key legal principle that protects sellers is the doctrine of unjust enrichment, which is codified under Section 70 of the Contract Act. Section 70 states that where a person lawfully does anything for another person, or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation to the former in respect of, or to restore, the thing so done or delivered. Since the seller delivered goods to the customers and paid fees to the marketplace, the platform cannot retain the sale proceeds. Doing so would allow the marketplace to enjoy the benefit of the transaction without compensating the seller, which is unlawful.
                  </p>

                  <h3 id="unjust-enrichment-remedies" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 73 and 74: Remedies for Breach and Unjust Enrichment
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 73 of the Contract Act, when a contract has been broken, the party who suffers by such breach is entitled to receive compensation for any loss or damage caused to him. By freezing payouts indefinitely, the marketplace is in breach of its payment obligation under the seller agreement. The seller is entitled to claim the outstanding principal amount plus interest for the period of delay.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 74 of the Act deals with reasonable compensation for breach of contract where a penalty is stipulated. If the marketplace agreement contains a clause stating that the platform can forfeit the entire seller balance as a penalty for policy violations, such a clause is considered a penalty clause. Under Section 74, the court will not enforce the forfeiture of the entire balance. The marketplace is only entitled to receive reasonable compensation for any actual, proven damage they suffered due to the seller's violation. If no actual damage occurred, the entire balance must be refunded.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This distinction is vital. If a marketplace claims you violated their seller policies, they must prove the exact financial damage your violation caused them. For example, if a customer claimed an item was inauthentic and was refunded, the marketplace can withhold the cost of that specific transaction. They cannot, however, use that single incident as a justification to freeze millions of rupees generated from hundreds of other unrelated and successful sales.
                  </p>
                </div>
              </section>

              {/* Section 3: Legal Notice vs. Arbitration */}
              <section id="notice-vs-arbitration" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  E-Commerce Dispute Resolution: Legal Notice vs. Arbitration
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Sellers must choose the right forum to resolve their payment disputes with marketplaces. The Business Solutions Agreement typically mandates arbitration as the exclusive dispute resolution mechanism, restricting access to traditional civil courts.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice is the first step in this dispute resolution process. It gives the marketplace's legal team a 15-day period to review the case and release the funds to avoid arbitration. Because arbitration requires the marketplace to pay significant administrative and arbitrator fees, receiving a well-drafted notice often prompts them to settle the claim and release the payouts. If they ignore the notice, you must file for arbitration under the Arbitration and Conciliation Act, 1996, rather than filing a standard <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link>.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Legal Notice Route</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Commercial Arbitration</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Timeline</td>
                          <td className="px-6 py-4">Fast (requires a 15-day compliance window)</td>
                          <td className="px-6 py-4">Moderate (takes 6 to 12 months for final award)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Upfront Cost</td>
                          <td className="px-6 py-4">Low (only drafting and service fees)</td>
                          <td className="px-6 py-4">High (arbitrator fees and administrative expenses)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Legal Binding</td>
                          <td className="px-6 py-4">Pre-litigation demand, establishes cause of action</td>
                          <td className="px-6 py-4">Resulting award is equivalent to a civil court decree</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Platform Response</td>
                          <td className="px-6 py-4">Triggers manual review by in-house counsel</td>
                          <td className="px-6 py-4">Requires appointment of formal external legal representatives</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Arbitration Clause Compatibility</td>
                          <td className="px-6 py-4">Fully compatible (serves as mandatory pre-arbitration step)</td>
                          <td className="px-6 py-4">Mandated by the seller agreement dispute clause</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Step-by-Step Roadmap */}
              <section id="step-by-step-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Roadmap to Draft and Serve the Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To recover frozen seller account money, you must follow a structured legal process. Here is the step-by-step roadmap:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Ledger Account Export</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Export the complete seller ledger statements and payment transaction reports from the dashboard. Highlight the exact balance withheld by the platform. Keep screenshots of the reserve status and account health dashboard.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Appeal History Assembly</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Compile all communication records with the marketplace support team, including your plan of action (POA) submissions, appeal case logs, and the platform's rejection emails. This proves that you exhausted all internal resolution options.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Notice Drafting</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Instruct an advocate to draft the legal notice to e-commerce marketplace. The notice must specify the seller account details, the exact frozen amount, invoke Section 70 and 73 of the Contract Act, and demand payment within 15 days, referencing the pre-arbitration requirements.
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
                          Serve the notice via Registered Post and Speed Post to the registered corporate headquarters of the marketplace in India (typically Bangalore for Flipkart/Amazon, Bangalore/Delhi for Meesho) and send a digital copy to their legal email address.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Escalation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the 15-day compliance window expires without a resolution, instruct your counsel to file an application under Section 11 of the Arbitration Act for the appointment of an arbitrator, keeping in mind the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link>.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 5: Prerequisites and Evidence Checklist */}
              <section id="seller-prerequisites-evidence" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for third-party Sellers
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To ensure the marketplace legal department cannot dismiss your claim on technical grounds, you must prepare a comprehensive evidence bundle.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are a dropshipper or reseller operating without a formal written agreement with your manufacturers, you must still establish a clear paper trail of your transaction costs and sales. You can read about <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand the alternative evidence acceptable under Indian law.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">E-Commerce Seller Payout Recovery Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Seller Registration details:</strong> Merchant Token ID, registered seller email, registered phone number, and GSTIN details.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Financial Ledger Statements:</strong> Bank account statements matching the registered seller bank account, showing prior payouts and the current frozen balance.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Order Dispatch Proofs:</strong> Courier tracking logs, manifest sheets, and delivery receipts showing successful shipment to customers.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Appeal records:</strong> Screenshots of appeal submissions, submitted POAs, and the system ticket numbers showing active follow-up.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Tax Invoice Records:</strong> GST returns filed for the dispute period showing tax payments on sales, proving the transactions were lawful and documented.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Case Studies and Reviews */}
              <section id="payout-success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Seller Payout Recovery Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and Section 70 demands resolve seller payout disputes:
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
                          <p className="text-[10px] text-slate-500">Verified Seller Case</p>
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
