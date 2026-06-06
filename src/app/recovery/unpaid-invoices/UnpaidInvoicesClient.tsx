'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What legal definition classifies an unpaid invoice dispute as a commercial dispute in India?",
    answer: "Under Section 2(1)(c) of the Commercial Courts Act, 2015, any dispute arising out of ordinary transactions of merchants, bankers, financiers, and traders, including mercantile documents, export/import transactions, and service level contracts, is defined as a commercial dispute. If the Specified Value of the unpaid invoices is ₹3,00,000 or more, it must be tried in specialized Commercial Courts, which follow fast-track rules, strict case management timelines, and mandatory pre-institution mediation."
  },
  {
    question: "How long does a buyer have to pay an invoice under the MSMED Act, 2006?",
    answer: "Under Section 15 of the MSMED Act, the buyer must make payment to a registered MSME supplier within the period agreed upon in writing, which cannot exceed 45 days. If there is no written agreement, the statutory payment limit is 15 days from the date the goods or services were delivered and accepted. Any contract clause specifying a credit window longer than 45 days is void."
  },
  {
    question: "What is the penal interest rate for delayed payments to registered MSMEs?",
    answer: "According to Section 16 of the MSMED Act, if a buyer fails to clear an MSME's invoice within the statutory limit (maximum 45 days), they are legally liable to pay compound interest to the supplier. The interest rate is strictly defined as three (3) times the bank rate notified by the Reserve Bank of India (RBI), calculated with monthly rests. This interest rate is mandatory, and the MSEFC or courts cannot reduce it."
  },
  {
    question: "What is the statutory limitation period for filing a recovery case for unpaid invoices?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or commercial suit for outstanding invoices is three (3) years from the date the cause of action arose (typically the invoice payment due date). If the debtor makes a partial payment or sends a written acknowledgment of the debt (such as an email admitting the outstanding amount), the 3-year limitation clock resets from the date of such acknowledgment."
  },
  {
    question: "Can an invoice serve as a written contract to file a summary suit under Order 37 CPC?",
    answer: "Yes, Indian courts have repeatedly held that invoices, purchase orders, and delivery challans constitute a written contract under Order XXXVII of the Code of Civil Procedure (CPC). If the invoices contain the terms of the transaction, description of goods/services, payment due dates, and terms for delayed interest, it is a valid written contract for filing a fast-track Summary Suit."
  },
  {
    question: "What is the pre-deposit requirement for a buyer appealing an MSME Facilitation Council award?",
    answer: "Under Section 19 of the MSMED Act, if a buyer wants to challenge or appeal an arbitration award passed by the Micro and Small Enterprises Facilitation Council (MSEFC), the court cannot entertain the appeal unless the buyer first deposits 75% of the award amount (including the principal dues and accumulated interest) with the court. This prevents buyers from filing frivolous appeals to delay payments."
  },
  {
    question: "What is the difference between a Summary Suit and a Regular Civil Suit for invoice recovery?",
    answer: "In a regular civil suit, the debtor can delay the trial for years by raising multiple issues and demanding cross-examinations. In a Summary Suit under Order 37 CPC, the debtor does not have an automatic right to defend the case. They must apply for 'Leave to Defend' within 10 days of receiving the summons. If their defense is found to be a sham or a delaying tactic, the court will deny leave and immediately pass a decree in your favor."
  },
  {
    question: "How does the GST trail help prove the debt in an unpaid invoice recovery case?",
    answer: "When you upload a tax invoice to the GST portal in your GSTR-1 return, the buyer receives it in their GSTR-2B statement. If the buyer uses that invoice to claim Input Tax Credit (ITC) to offset their tax liability, they have legally admitted the transaction and receipt of goods/services. Presenting the buyer's ITC claims in court serves as an official admission of the debt, leaving no room for them to deny the transaction."
  },
  {
    question: "What are the criminal consequences if a buyer's cheque bounces?",
    answer: "If a buyer issues a cheque for invoice payment that is dishonored due to insufficient funds or stop payment orders, it is a criminal offense under Section 138 of the Negotiable Instruments Act. If they fail to pay the cheque amount within 15 days of receiving your statutory demand notice, you can file a criminal case within 30 days. It carries a penalty of up to two years of imprisonment, a fine up to twice the cheque amount, or both."
  },
  {
    question: "Can I hold company directors personally liable for unpaid B2B invoices?",
    answer: "While a company is a separate legal entity, you can hold directors personally liable if you can prove fraud, siphoning of funds, or that they placed purchase orders knowing the company was insolvent. Furthermore, in criminal cases under Section 138 of the NI Act (cheque bounce) or Section 318 of the BNS (cheating), directors responsible for the day-to-day operations of the company are prosecuted personally."
  },
  {
    question: "What is mandatory pre-institution mediation under Section 12A of the Commercial Courts Act?",
    answer: "Under Section 12A of the Commercial Courts Act, 2015, if a commercial dispute has a specified value of ₹3 lakh or more and does not require urgent interim relief, the plaintiff must first undergo mandatory mediation. You file an application before the District Legal Services Authority (DLSA). If the debtor refuses to participate or mediation fails, the DLSA issues a 'Non-Starter Report,' which allows you to file the suit."
  },
  {
    question: "Can I charge interest on unpaid invoices if interest terms were not printed on the invoice?",
    answer: "Yes, even if the invoice or purchase order is silent on interest, you can claim interest under Section 3 of the Interest Act, 1978. You must serve a formal written demand notice stating that you will charge interest from the date of the notice. For registered MSMEs, the interest is automatically mandated by law under Section 16 of the MSMED Act at three times the RBI bank rate."
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
      "name": "Unpaid Invoices Recovery",
      "item": "https://www.legalrecovery.in/recovery/unpaid-invoices"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Invoices & B2B Vendor Payments | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding B2B unpaid invoices, commercial vendor payments, and supplier debts in India.",
  "image": "https://www.legalrecovery.in/og-unpaid-invoices.png",
  "author": {
    "@type": "Organization",
    "name": "Team LegalRecovery",
    "url": "https://www.legalrecovery.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06"
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
  "name": "B2B Unpaid Invoice Recovery Services",
  "image": "https://www.legalrecovery.in/og-unpaid-invoices.png",
  "description": "Advocate-backed legal assistance for recovering outstanding B2B unpaid invoices, commercial vendor payments, and supplier debts in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "540"
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
        "name": "Rajesh Khanna"
      },
      "reviewBody": "As the proprietor of Khanna Textiles, I was struggling to recover ₹8,50,000 from a major retail chain that had been dodging my invoices for nine months. LegalRecovery drafted a highly strategic demand notice and assisted in filing a claim under MSME Samadhaan. Faced with the statutory 3x RBI bank rate compounding interest, the retailer cleared all outstanding invoices in two weeks. Truly an outstanding and highly professional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shalini Sen"
      },
      "reviewBody": "Our software agency was owed ₹14,20,000 for custom ERP development by a corporate client. They suddenly raised arbitrary performance issues to withhold our payments. LegalRecovery audited our GST trail, showed that the client had claimed Input Tax Credit on our invoices, and served a notice warning of an Order 37 summary suit. The client's legal team settled within 10 days, releasing our full payment. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikramaditya Singh"
      },
      "reviewBody": "We had outstanding logistics and freight dues of ₹18,50,000 from a manufacturing firm. LegalRecovery guided us through the Commercial Court's mandatory Section 12A mediation process. The DLSA mediator helped us sign a binding settlement that has the force of an arbitral award. We recovered our principal amount in three structured installments. Outstanding legal support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nandini Rao"
      },
      "reviewBody": "As a freelance UI/UX designer, I was owed ₹2,10,000 by a marketing agency that refused to respond to my emails. LegalRecovery drafted a formal notice citing Section 70 of the Contract Act for unjust enrichment. The agency owner realized I had professional legal backing and immediately transferred the balance. Excellent experience, particularly for freelancers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Sharma"
      },
      "reviewBody": "A manufacturing firm issued two cheques totaling ₹6,40,000 for raw material supplies which bounced. LegalRecovery acted swiftly, serving the statutory 138 NI Act notice within the 30-day window. The fear of criminal prosecution and director liability forced the company to replace the bounced cheques with an online bank transfer within a week. Extremely fast and effective."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Preeti Patel"
      },
      "reviewBody": "We are a packaging unit and were owed ₹9,70,000 by a distributor. LegalRecovery helped us file an MSEFC petition on the MSME Samadhaan portal. The buyer tried to appeal but the requirement to deposit 75% of the award amount stopped them from dragging the case. They paid our dues in full. Exceptional legal guidance."
    }
  ]
};

export default function UnpaidInvoicesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "overview-business-impact-unpaid-invoices", title: "1. Overview & Business Impact" },
    { id: "legal-status-invoices-contracts", title: "2. Invoices as Binding Contracts" },
    { id: "msme-samadhan-udyam-portal", title: "3. MSME Samadhaan Route" },
    { id: "summary-suits-order-37", title: "4. Summary Suits (Order 37 CPC)" },
    { id: "cheque-bounce-criminal-remedies", title: "5. Bounced Cheques & BNS Remedies" },
    { id: "mandatory-pre-institution-mediation", title: "6. Commercial Mediation (Sec 12A)" },
    { id: "documentary-evidence-gst-ledger", title: "7. Evidence, Ledgers & GST Trail" },
    { id: "pre-litigation-escalation-legal-notice", title: "8. Escalation & Legal Notices" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unpaid Invoices Recovery", href: "/recovery/unpaid-invoices" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Premium Commercial Debt Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">Unpaid Invoices</span> &amp; Vendor Dues
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with defaulting corporate buyers, delayed vendor invoices, unpaid professional fees, or bounced business cheques? Serve advocate-backed legal notices and initiate fast-track legal recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Invoice Recovery
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                
                {/* Section 1: Overview & Business Impact */}
                <section id="overview-business-impact-unpaid-invoices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overview &amp; Business Impact</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the commercial landscape of B2B commerce, cash flow represents the vital circulation system that sustains operations, fuels expansions, and enables payroll. Unlike retail sales, business-to-business transactions are traditionally conducted on credit terms. This credit mechanism is built on mutual trust and formal agreements, where suppliers deliver goods or render services, and buyers commit to clearing the corresponding tax invoices within a specified credit window—typically 30, 45, or 60 days. However, when a client or corporate buyer defaults on these invoices, the impact cascades throughout the supplier&apos;s business. Delayed payments stall operations, limit capital expenditure, and prevent vendors from meeting their own obligations to sub-vendors and employees. At LegalRecovery, we recognize that recovering outstanding business dues is not merely a collection task but a critical defense of your business survival.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      B2B debt recovery differs fundamentally from recovering unpaid employment wages or consumer claims. While labor laws heavily favor employees (who enjoy statutory protections like the Payment of Wages Act and dedicated Labour Commissioners), B2B disputes are categorized as commercial disputes governed by corporate contracts and civil codes. This means the law expects businesses to act as sophisticated entities, maintaining meticulous records and executing detailed agreements. Consequently, a vendor cannot simply approach a labor commissioner; instead, they must navigate the complex avenues of commercial litigation, statutory arbitration under the MSMED Act, summary suits, or insolvency proceedings. This structural difference requires a strategic, document-heavy approach to establish clear liability and enforce fast-track recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The reasons behind B2B invoice defaults are varied, ranging from genuine cash flow difficulties on the buyer&apos;s end to malicious and strategic delays. Often, corporate buyers exploit their size and market power to delay payments to smaller vendors, essentially treating their suppliers as interest-free lenders. In other cases, companies fabricate quality issues or contract breaches post-delivery as an excuse to negotiate discounts or avoid payment entirely. When informal follow-ups and polite reminders are met with silence, evasive replies, or bad-faith disputations, continuing to wait only increases the risk of the debt becoming unrecoverable. As time passes, the debtor&apos;s financial position may deteriorate, or the claim may face the hurdle of statutory limitation periods, making prompt legal intervention essential.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal recovery of invoices under Indian law is highly structured. Depending on the amount in dispute, the corporate status of the debtor, and whether the supplier has Udyam registration, several legal channels are available. These include filing a petition with the Micro and Small Enterprises Facilitation Council (MSEFC) under the MSMED Act, instituting a Summary Suit under Order 37 of the Code of Civil Procedure (CPC), filing a commercial suit under the Commercial Courts Act, 2015, or initiating corporate insolvency under the Insolvency and Bankruptcy Code (IBC). In addition, when payment defaults involve dishonored instruments (such as bounced cheques), criminal prosecutions under Section 138 of the Negotiable Instruments Act provide powerful leverage. A well-designed recovery strategy often combines these routes to create maximum legal and financial pressure on the defaulting debtor.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Delayed payments to vendors and business suppliers restrict working capital. Leveraged legal enforcement like the MSMED Act and summary suits ensure that buyers are held strictly accountable, returning cash to your operations.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Invoices as Binding Contracts */}
                <section id="legal-status-invoices-contracts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Invoices as Binding Contracts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common defense raised by defaulting buyers is the absence of a formal, bilateral contract executed on stamp paper. They argue that because there is no signed &quot;contract document,&quot; the supplier cannot claim breach of contract or file a fast-track summary suit. However, under the Indian Contract Act, 1872, a contract does not require a singular, formal document to be legally binding. A contract is formed when there is an offer, an acceptance, mutual assent, and lawful consideration. In B2B transactions, the contract is established through a chain of documents and actions: the buyer issues a Purchase Order (PO) or Statement of Work (SOW) (the offer), the supplier delivers the goods or services (the performance), and the supplier issues a tax invoice which the buyer receives and retains without protest (the acceptance and consideration).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Courts in India have repeatedly affirmed that a tax invoice containing terms of payment, credit period, and interest on delay is a valid written contract. For example, in landmark rulings, the Delhi High Court (such as in Lala Shanti Swarup v. Munshi Singh and subsequent commercial matters) has held that a written contract under Order XXXVII of the CPC includes invoices, delivery challans, and exchange of emails. When a buyer accepts delivery of goods and signs a delivery challan (or accepts services without raising any complaints within a reasonable timeframe), they acknowledge the transaction and accept the terms printed on the invoice. Therefore, the conditions regarding interest on delayed payment (e.g., &quot;Interest @ 18% p.a. will be charged if not paid within 30 days&quot;) become contractually binding on the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 70 of the Indian Contract Act, 1872, the principle of quasi-contract and &quot;unjust enrichment&quot; further protects suppliers. Section 70 states that if a person lawfully does anything for another, or delivers anything to him, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the receiving party is bound to make compensation to the former, or to restore the thing so done or delivered. This means that even if the buyer claims that the purchase order was unsigned or that there was a technical defect in the contract, they cannot retain the benefit of the supplied goods or services without paying for them. The law prevents them from enriching themselves unjustly at the expense of the vendor.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to the Contract Act, the Sale of Goods Act, 1930, governs transactions involving physical goods. Under Section 41 of the Sale of Goods Act, the buyer is deemed to have accepted the goods when they intimate the seller that they have accepted them, or when the goods have been delivered to them and they do any act in relation to them which is inconsistent with the ownership of the seller (such as using the raw materials in manufacturing or selling them to a third party). Once the goods are accepted, the buyer&apos;s obligation to pay the price becomes absolute. Any subsequent dispute regarding the quality of the goods must be raised within a reasonable period, and a sudden claim of &quot;poor quality&quot; raised only when the supplier demands payment is routinely dismissed by courts as a bad-faith afterthought.
                    </p>
                  </div>
                </section>

                {/* Section 3: MSME Samadhaan Route */}
                <section id="msme-samadhan-udyam-portal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. MSME Samadhaan Route</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For micro and small enterprises registered under the MSMED Act, 2006, the Indian legislature has provided a highly potent statutory remedy to recover unpaid invoices. Under Section 15 of the Act, when a micro or small enterprise supplies goods or renders services to any buyer, the buyer must make payment on or before the date agreed upon in writing. Crucially, the law mandates that this agreed credit period <strong>cannot exceed 45 days</strong> from the &quot;day of acceptance&quot; or the &quot;day of deemed acceptance.&quot; If there is no written agreement, the statutory payment deadline is even shorter—just <strong>15 days</strong> from the delivery of the goods or services. Any contract clause that attempts to stretch the payment window beyond 45 days is void to that extent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a buyer fails to clear the invoice within this statutory limit, Section 16 of the MSMED Act imposes a mandatory penal interest rate. The buyer is legally liable to pay compound interest to the MSME supplier on the outstanding amount from the due date. The interest rate is strictly defined as <strong>three (3) times the bank rate</strong> notified by the Reserve Bank of India (RBI), calculated with monthly rests. This is a statutory mandate, and courts or arbitration councils have no discretion to reduce this interest rate. The interest is compounding monthly, making it a heavy financial burden for the defaulting buyer and providing a strong incentive to settle the dues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To enforce these rights, a registered MSME can file an online application on the <strong>MSME Samadhaan portal</strong> (also known as the MSEFC ODR portal). The supplier uploads the outstanding invoices, purchase orders, proof of delivery, and Udyam registration certificate. Once the application is registered, the Micro and Small Enterprises Facilitation Council (MSEFC) of the respective state initiates conciliation proceedings under Section 18 of the Act. The council conducts hearings where both parties are summoned. If conciliation fails to yield a settlement, the MSEFC either takes up the dispute for arbitration itself or refers it to an alternative dispute resolution center. The arbitration award passed by the MSEFC has the same legal force as a civil court decree and can be executed under Order 21 of the CPC.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most significant advantages of the MSME Samadhaan route is the protection it offers during appeals. Under Section 19 of the MSMED Act, if the buyer wants to appeal or challenge an MSEFC arbitration award in any court, the court cannot entertain the appeal unless the buyer first deposits <strong>75% of the award amount</strong> (including the penal interest) with the court. This statutory requirement prevents buyers from filing frivolous appeals simply to delay payment. Additionally, under Section 23 of the Act, buyers cannot claim the penal interest paid to MSMEs as a tax-deductible business expense under the Income Tax Act, 1961, further compounding the financial consequences of their default.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits (Order 37 CPC) */}
                <section id="summary-suits-order-37" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits (Order 37 CPC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For businesses that do not qualify as micro or small enterprises (or chose not to register under the MSMED Act), the <strong>Summary Suit under Order XXXVII of the CPC</strong> is the most effective civil court remedy for recovering unpaid invoices. Regular civil suits in India are notorious for taking years to resolve, as defendants can delay trials by filing lengthy written statements, demanding cross-examinations, and seeking multiple adjournments. Order 37 bypasses these delays by introducing a fast-track procedure where the defendant does not have an automatic right to contest the suit. It applies to suits for the recovery of a liquidated debt or demand in money arising on a written contract, which includes tax invoices and purchase orders.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedural steps of a Summary Suit are strictly timed. When you file an Order 37 suit, the court issues a specialized summons in Form 4 to the defendant. The defendant must enter an appearance, either in person or through an advocate, within <strong>10 days</strong> of receiving the summons. If the defendant fails to enter an appearance within this 10-day window, the allegations in the plaint are deemed to be admitted, and the court immediately passes a decree in favor of the plaintiff. This allows a diligent supplier to secure a recovery decree in a matter of weeks if the debtor fails to respond.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defendant does enter an appearance, the plaintiff serves a &quot;Summons for Judgment&quot; on the defendant. The defendant then has 10 days to file an application for <strong>&quot;Leave to Defend&quot;</strong>. To obtain leave, the defendant must convince the court through an affidavit that they have a substantial and bona fide defense, and not a sham or vexatious one. If the court finds that the defense is a mere delaying tactic (for instance, if the debtor admits receiving the goods but makes a vague claim of financial hardship), the court will either deny leave and pass a decree, or grant &quot;conditional leave,&quot; requiring the defendant to deposit a substantial portion of the disputed amount into court before being allowed to defend the case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Securing a decree under Order 37 CPC is only the first part; the second is execution. Once the court passes the decree, it can be executed immediately under Order 21 of the CPC. The executing court has the power to attach the debtor&apos;s bank accounts, seize and sell their movable and immovable assets, and even arrest the judgment-debtor or its directors in cases of deliberate evasion. Because the legal burden shifts heavily onto the debtor during the &quot;Leave to Defend&quot; phase, serving a summary suit often forces corporate buyers to enter into out-of-court settlement discussions to avoid having their assets attached.
                    </p>
                  </div>
                </section>

                {/* Section 5: Bounced Cheques & BNS Remedies */}
                <section id="cheque-bounce-criminal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Bounced Cheques &amp; BNS Remedies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In B2B commerce, buyers often issue post-dated cheques (PDCs) as security or payment for invoices. If a cheque issued by a debtor bounces due to &quot;insufficient funds,&quot; &quot;refer to drawer,&quot; or &quot;stop payment&quot; instructions, it elevates the dispute from a civil breach of contract to a criminal offense under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>. The criminal nature of cheque bounce proceedings provides immense leverage to suppliers, as it exposes the directors and officers of the defaulting company to personal prosecution, arrest warrants, and criminal records. It is one of the fastest ways to recover dues, as corporate executives will go to great lengths to avoid criminal trials.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal procedure for a Section 138 claim has strict statutory timelines that must be followed. First, the cheque must be presented to the bank within its validity period (usually 3 years or the period written on it, currently 3 months). If the cheque is dishonored, the supplier&apos;s bank issues a &quot;Cheque Return Memo.&quot; The supplier must then serve a formal statutory demand notice to the drawer within <strong>30 days</strong> of receiving the return memo. This notice must demand payment of the cheque amount and give the drawer exactly <strong>15 days</strong> from the receipt of the notice to clear the dues. If the drawer fails to make the payment within these 15 days, the cause of action is complete, and the supplier must file a criminal complaint in the Magistrate court within <strong>30 days</strong> thereafter.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to the principal amount, the NI Act contains provisions for interim relief. Under Section 143A, the Magistrate court can order the drawer of the cheque to pay <strong>interim compensation</strong> to the complainant. This compensation can be up to <strong>20% of the cheque amount</strong> and must be paid within 60 days of the court&apos;s order. This interim payment helps suppliers cover legal expenses and manage cash flow during the trial. If the trial concludes in a conviction, the court can sentence the accused to imprisonment for up to <strong>two (2) years</strong>, impose a fine up to <strong>twice the cheque amount</strong>, or both, out of which the court can award compensation to the complainant.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Crucially, when the drawer of the bounced cheque is a company, the supplier can invoke Section 141 of the NI Act to prosecute the company&apos;s directors. Section 141 states that every person who, at the time the offense was committed, was in charge of and was responsible to the company for the conduct of its business, shall be deemed guilty of the offense. By naming the Managing Director, Chief Financial Officer, and active board members in the complaint, the supplier pierces the corporate veil. Furthermore, if the supplier can prove that the buyer issued the cheque with a pre-existing intention to default (such as closing the bank account immediately after issuing the cheque), they can also file a police complaint or a criminal case for <strong>Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                    </p>
                  </div>
                </section>

                {/* Section 6: Commercial Mediation (Sec 12A) */}
                <section id="mandatory-pre-institution-mediation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Commercial Mediation (Sec 12A)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When commercial disputes involving unpaid invoices arise, they fall under the jurisdiction of the <strong>Commercial Courts Act, 2015</strong>. The Act was enacted to speed up the resolution of commercial disputes and improve India&apos;s &quot;ease of doing business&quot; ranking. It created specialized Commercial Courts at the district level and Commercial Divisions in High Courts. For a dispute to be classified as commercial, it must arise from transactions of merchants, traders, export/import, carriage of goods, or service contracts, and its <strong>Specified Value</strong> must be at least <strong>₹3,00,000 (three lakh rupees)</strong>. This lower threshold allows small business owners and freelancers to benefit from the fast-track procedures of Commercial Courts, which include strict timelines for filing pleadings and case management hearings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 12A</strong> of the Commercial Courts Act, a plaintiff cannot file a commercial suit directly unless they undergo mandatory <strong>Pre-Institution Mediation</strong>. This rule applies to all commercial suits that do not contemplate urgent interim relief (such as a temporary injunction to freeze assets). The process is initiated by filing an application along with a nominal fee before the <strong>District Legal Services Authority (DLSA)</strong>. The DLSA issues summons to the debtor, inviting them to participate in mediation sessions. The mediation is conducted by a trained, neutral mediator who assists both parties in reaching a mutually acceptable settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor refuses to participate, ignores the DLSA summons, or fails to appear for the mediation sessions after multiple notices, the mediator concludes the process and issues a <strong>&quot;Non-Starter Report.&quot;</strong> This report serves as a legal clearance certificate, permitting the plaintiff to file the commercial suit in court. The period spent in mediation—from the date of filing the application to the date of the Non-Starter Report—is entirely excluded from the 3-year limitation period under the Limitation Act. This ensures that the supplier is not penalized for attempting mediation before moving to litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If, on the other hand, the mediation is successful, the parties draft and sign a formal <strong>Mediation Settlement Agreement</strong>. Under Section 12A(5) of the Act, this settlement agreement has the <strong>same status and effect as an arbitral award</strong> under the Arbitration and Conciliation Act, 1996. This means the settlement is binding and final, and cannot be appealed. If the debtor defaults on the payment terms agreed upon in the mediation settlement, the supplier does not need to file a new suit; they can apply directly to the court to execute the settlement agreement, attach the debtor&apos;s bank accounts, and recover the outstanding dues.
                    </p>
                  </div>
                </section>

                {/* Section 7: Evidence, Ledgers & GST Trail */}
                <section id="documentary-evidence-gst-ledger" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Evidence, Ledgers &amp; GST Trail</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of any legal recovery action—whether before the MSEFC, a Commercial Court, or a Magistrate—depends entirely on the strength of your documentary evidence. In commercial disputes, courts expect a high standard of record-keeping. The foundation of your claim is the &quot;audit trail&quot; that links the transaction from inception to default. The primary document is the tax invoice. However, an invoice on its own only proves a demand; it does not prove delivery or acceptance. To build an airtight case, you must link the invoice to a valid Purchase Order (PO) or Statement of Work (SOW), signed delivery challans or service completion certificates, and a clean statement of accounts (ledger).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern digital era, the <strong>GST trail</strong> has become one of the most persuasive forms of evidence in commercial recovery. Under the Goods and Services Tax (GST) framework, when you issue a tax invoice, you report it in your GSTR-1 return. The buyer can see this invoice in their GSTR-2B statement and use it to claim Input Tax Credit (ITC) to reduce their tax liability. If the buyer has claimed ITC on your invoice, they have legally admitted the transaction and the receipt of the goods or services. In court, presenting the GSTR-2B log showing that the buyer claimed ITC on your unpaid invoices acts as an official admission of debt, making it virtually impossible for them to deny the transaction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to GST records, maintaining a detailed <strong>ledger statement</strong> is critical. A ledger is a continuous record of transactions, debits, and credits between you and the buyer. Ideally, you should obtain periodic &quot;Balance Confirmations&quot; or &quot;No Objection Certificates&quot; signed by the buyer&apos;s finance team, verifying that the outstanding balance in their books matches yours. Even if a signed confirmation is unavailable, sending regular ledger statements via email and obtaining a reply saying &quot;we are reviewing it&quot; or &quot;will pay soon&quot; acts as a written acknowledgment of debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because most business communications occur via email, WhatsApp, or Slack, digital records form the bulk of your evidence. Under Section 63 of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 65B of the Indian Evidence Act), electronic records are admissible as secondary evidence in court, provided they are accompanied by a specific certificate. This certificate must be signed by a person in responsible control of the device (such as the IT manager or the business owner) and must verify that the computer or phone was operating properly, and that the data was not tampered with. Without this statutory certificate, courts can refuse to read emails or chat logs, potentially weakening your case.
                    </p>
                  </div>
                </section>

                {/* Section 8: Escalation & Legal Notices */}
                <section id="pre-litigation-escalation-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Escalation &amp; Legal Notices</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal litigation, which can be expensive and time-consuming, it is essential to follow a structured pre-litigation escalation process. This shows courts that you acted in good faith and exhausted all informal remedies. The escalation should begin with a formal email to the buyer&apos;s finance and accounts team, attaching a reconciliation sheet showing all paid and unpaid invoices, credit notes, and the outstanding balance. If this is ignored, escalate the communication to the buyer&apos;s Chief Financial Officer (CFO) and Chief Executive Officer (CEO), demanding a formal response within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If executive escalation fails, the next step is to serve a formal <strong>Legal Notice</strong>. A legal notice is a structured, advocate-signed document sent to the debtor, setting out the facts of the transaction, detailing the default, demanding payment of the outstanding dues within a strict window (typically 15 days), and warning of the legal actions that will be taken if they fail to comply. A legal notice is not just a warning; it establishes your cause of action and forms part of the court record. It shows the debtor that you are serious and have engaged professional counsel.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific facts of your case. We do not use generic templates. Instead, we highlight the buyer&apos;s violations of the contract, the statutory interest liabilities under the MSMED Act, and the criminal consequences of bounced cheques or cheating. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the debtor&apos;s corporate office. Crucially, we also send copies of the notice to the personal residential addresses of the company&apos;s directors. This personal delivery pierces the corporate veil, alerting the directors that they face personal civil and criminal liability, which often prompts immediate settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of B2B payment disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to settle the undisputed dues rather than face public litigation, credit rating downgrades, or asset attachment. By presenting a clear, advocate-backed demand, you shift the financial risk onto the debtor. If the debtor responds with a counter-claim or denies the debt, their reply helps our legal team understand their defense strategy, allowing us to prepare a stronger petition for the MSEFC, a Summary Suit, or cheque bounce proceedings.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-600 text-xs sm:text-sm italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-extrabold text-slate-800 text-xs sm:text-sm">{rev.author.name}</span>
                          <div className="flex items-center gap-0.5 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white hover:border-slate-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-[#DC2626] transition-colors focus:outline-none text-xs sm:text-base"
                          >
                            <span>{faq.question}</span>
                            <span className="ml-4 flex-shrink-0 text-slate-400">
                              {isOpen ? (
                                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - CTA Cards */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                <h3 className="text-sm font-black text-slate-900 mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Credit Cap: Max 45 Days (MSME)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Interest: 3x RBI Bank Rate
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Fast-Track: Order 37 Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Limitation Period: 3 Years
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Mediation: Mandatory Section 12A
                  </li>
                </ul>
              </div>

              {/* Legal Consultation Card */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] text-white p-6 rounded-2xl shadow-md relative overflow-hidden border border-slate-900 text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-black mb-2 uppercase tracking-wide text-white">
                  Need Expert Help?
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-relaxed">
                  Our corporate advocates specialize in recovering B2B outstanding invoices, vendor payments, and commercial contract claims. Let us handle your legalnotice campaign.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  Consult Advocate Now
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Modal form */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />

      </div>
    </>
  );
}
