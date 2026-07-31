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
    question: "What legal provisions govern delayed payments to vendors in India?",
    answer: "Delayed payments to vendors are governed primarily by the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (for registered MSMEs), the Indian Contract Act, 1872 (for breach of vendor agreements), and the Code of Civil Procedure, 1908 (Order XXXVII for Summary Suits). For registered MSME vendors, Chapter V of the MSMED Act mandates payment within 45 days and penal compound interest at three times the RBI bank rate."
  },
  {
    question: "Can an MSME vendor claim compound interest on delayed payments?",
    answer: "Yes, under Section 16 of the MSMED Act, 2006, a buyer is legally liable to pay compound interest to an MSME vendor if they fail to clear invoices within the statutory limit (maximum 45 days). The interest is calculated at three (3) times the RBI bank rate, compounded monthly, and is mandatory."
  },
  {
    question: "How does the MSME Samadhaan portal assist vendors in recovering outstanding dues?",
    answer: "The MSME Samadhaan portal is an online dispute resolution system set up by the Ministry of MSME. Registered suppliers can file applications regarding delayed payments by buyers. The facilitation council (MSEFC) conducts conciliation; if it fails, it moves to arbitration. The final award is treated as a civil court decree and can be executed under Order 21 of the CPC."
  },
  {
    question: "What is the pre-deposit requirement for a buyer appealing an MSEFC vendor award?",
    answer: "Under Section 19 of the MSMED Act, if a buyer wants to appeal or challenge an arbitration award passed by the Micro and Small Enterprises Facilitation Council (MSEFC), the court cannot entertain the appeal unless the buyer first deposits 75% of the award amount (including principal and interest) with the court."
  },
  {
    question: "What is the statutory limitation period for recovering outstanding vendor payments?",
    answer: "Under the Limitation Act, 1963, a vendor has three (3) years from the date the cause of action arose (typically the invoice due date or the date of delivery) to file a recovery suit or commercial suit. Any written acknowledgment of debt or partial payment resets the 3-year limitation clock."
  },
  {
    question: "Can a vendor file a summary suit under Order 37 CPC based on purchase orders and invoices?",
    answer: "Yes, invoices, purchase orders, delivery challans, and exchange of emails are valid documents to establish a liquidated debt for a Summary Suit under Order XXXVII of the CPC. Courts have ruled that these documents constitute a written contract if they contain terms of payment, description of goods, and interest on delay."
  },
  {
    question: "How does the GST trail help a vendor prove delivery and debt in court?",
    answer: "When a vendor uploads a tax invoice to the GST portal in their GSTR-1, the buyer receives it in GSTR-2B. If the buyer claims Input Tax Credit (ITC) on that invoice, they have legally admitted the transaction and receipt of the goods. Presenting the buyer's ITC claims serves as an official admission of debt in court."
  },
  {
    question: "What is the procedure if a buyer's cheque issued to a vendor bounces?",
    answer: "Under Section 138 of the NI Act, a bounced cheque is a criminal offense. The vendor must present the cheque within its validity period, receive the return memo, serve a formal statutory demand notice to the drawer within 30 days, wait 15 days, and if payment is not received, file a criminal complaint in the Magistrate court within 30 days."
  },
  {
    question: "Can company directors be held personally liable for unpaid vendor dues?",
    answer: "Directors are protected by limited liability, but courts can pierce the corporate veil if you prove fraud, siphoning of funds, or deliberate misrepresentation (e.g. placing orders knowing the company was insolvent). In criminal cases under Section 138 of the NI Act or Section 318 BNS (cheating), directors responsible for daily operations are personally prosecuted."
  },
  {
    question: "What is the Specified Value threshold for vendor disputes under the Commercial Courts Act?",
    answer: "Under the Commercial Courts Act, 2015, the Specified Value threshold for a commercial dispute to be tried in a Commercial Court is ₹3,00,000 (three lakh rupees). This allows suppliers to access specialized divisions that feature strict case management timelines and expedited summary judgments."
  },
  {
    question: "How does mandatory pre-institution mediation work for vendor payment disputes?",
    answer: "Under Section 12A of the Commercial Courts Act, if a commercial dispute has a specified value of ₹3 lakh or more and does not require urgent interim relief, the plaintiff must first undergo mediation. You file an application before the District Legal Services Authority (DLSA). If mediation fails, the DLSA issues a 'Non-Starter Report,' enabling you to file the suit."
  },
  {
    question: "Is a mediation settlement agreement under the Commercial Courts Act enforceable?",
    answer: "Yes, under Section 12A(5) of the Commercial Courts Act, a mediation settlement agreement has the same status and effect as an arbitral award under the Arbitration and Conciliation Act, 1996. It is binding, final, and can be executed directly under Order 21 CPC to attach the debtor's bank accounts."
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
      "name": "Vendor Payments Recovery",
      "item": "https://www.legalrecovery.in/recovery/vendor-payments"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Vendor Payments & Supply Chain Dues | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding B2B vendor payments, raw material supplier dues, and contract payments in India.",
  "image": "https://www.legalrecovery.in/og-vendor-payments.png",
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
  "name": "B2B Vendor Payments Recovery Services",
  "image": "https://www.legalrecovery.in/og-vendor-payments.png",
  "description": "Advocate-backed legal assistance for recovering outstanding B2B vendor payments, raw material supplier dues, and contract payments in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "495"
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
        "name": "Anil Deshmukh"
      },
      "reviewBody": "We are a packaging material supplier and had ₹11,30,000 outstanding from a manufacturing unit. LegalRecovery helped us draft a formal demand citing the MSMED Act, and filed a petition on MSME Samadhaan. Faced with the facilitation council's arbitration and 3x bank rate interest, the buyer cleared the dues. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Venkatesh Prasad"
      },
      "reviewBody": "A corporate client withheld ₹7,50,000 of our logistics and transport dues. LegalRecovery served an advocate notice warning of a summary suit under Order 37 CPC. Their legal team advised settlement to avoid litigation, and we recovered the principal plus interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepa Nair"
      },
      "reviewBody": "We had raw material supply dues of ₹5,20,000. The buyer issued a cheque that bounced. LegalRecovery immediately served the statutory Section 138 NI Act notice. The buyer realized they faced criminal prosecution and cleared the dues in a week. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunil Varma"
      },
      "reviewBody": "As an IT hardware vendor, I was owed ₹16,00,050. LegalRecovery guided us through Commercial Court Section 12A pre-institution mediation. The DLSA mediator helped us reach a binding settlement. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sen"
      },
      "reviewBody": "A corporate buyer ignored our follow-ups for a year. LegalRecovery helped us compile our GST input tax credit log, showing they had claimed ITC on our invoices. Faced with this official admission of debt, they settled immediately. Truly professional support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Manish Malhotra"
      },
      "reviewBody": "Excellent legal support for suppliers. We recovered outstanding dues from a major distributor within 20 days of serving the notice. They really know corporate debt recovery."
    }
  ]
};

export default function VendorPaymentsClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "vendor-payment-defaults-overview", title: "1. Overview & Supply Chain Impact" },
    { id: "vendor-agreements-purchase-orders", title: "2. Vendor Agreements & POs" },
    { id: "msme-delayed-payments-framework", title: "3. MSMED Act Protections" },
    { id: "fast-track-summary-suits-cpc", title: "4. Summary Suits (Order 37)" },
    { id: "cheque-bounce-criminal-remedies-ni", title: "5. Cheque Bounce & Criminal Remedies" },
    { id: "pre-institution-mediation-commercial", title: "6. Commercial Mediation (Section 12A)" },
    { id: "documentary-evidence-gst-reconciliation", title: "7. Evidence, E-Way Bills & GST Trail" },
    { id: "structured-escalation-legal-demand", title: "8. Escalation & Legal Notices" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Vendor Payments Recovery", href: "/recovery/vendor-payments" },
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
              India&apos;s Premium Vendor Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">Vendor Payments</span> &amp; Supplier Dues
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with defaulting buyers, unpaid supplier invoices, delayed MSME vendor payments, or bounced corporate cheques? Serve advocate-backed legal notices and initiate fast-track recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Vendor Recovery
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
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
                
                {/* Section 1: Overview & Supply Chain Impact */}
                <section id="vendor-payment-defaults-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overview &amp; Supply Chain Impact</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the complex and interdependent network of modern commerce, supply chains function as the backbone of economic activity. Vendors, suppliers, and service providers form the foundation of this structure, providing the raw materials, logistics, component parts, and operational services that enable larger enterprises to manufacture products and deliver services to end consumers. In any commercial vendor relationship, cash flow is the lifeblood. Transactions are conducted on credit terms, with vendors extending trade credit to buyers on the understanding that payments will be made within an agreed-upon timeframe, typically 30 to 45 days. However, when corporate buyers or distributors default on these vendor payments, the impact is immediate and severe, causing a ripple effect of financial distress that can disrupt the entire supply chain.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unlike consumer debt or employment salary disputes, recovering outstanding vendor payments is a B2B commercial challenge. It is governed by a distinct set of business laws, contract procedures, and commercial regulations. In India, the legal framework expects corporate entities to manage their transactions professionally. This means that a vendor facing a payment default cannot rely on labor laws or consumer protection forums; instead, they must seek remedies through specialized commercial legislation, civil summary suits, or statutory arbitration councils. Meticulous documentation, including written contracts, purchase orders, delivery records, and invoices, is critical to successfully navigating these legal channels.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The causes of vendor payment defaults range from genuine cash flow difficulties to strategic delays and bad-faith disputes. Larger corporate buyers often exploit their size and market power to delay payments to smaller vendors, essentially using their suppliers as interest-free source of capital. In other cases, buyers may raise delayed or fabricated disputes regarding the quality of goods or services only when the payment becomes due, using these claims to force discounts or avoid payment. Waiting indefinitely in the hope of an amicable resolution is risky. As time passes, the debtor&apos;s financial health may deteriorate, or the claim may become time-barred under limitation laws, making prompt legal action necessary.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering unpaid vendor dues under Indian law involves several distinct pathways, depending on the status of the vendor and the debtor. For micro and small enterprises, the MSMED Act, 2006, provides a powerful fast-track recovery mechanism through the MSME Samadhaan portal. For other vendors, options include filing a Summary Suit under Order 37 of the CPC, initiating insolvency proceedings under the IBC, or serving a statutory legal notice under the Commercial Courts Act, 2015. Additionally, if the payment default involves a bounced cheque, criminal prosecution under Section 138 of the NI Act offers significant leverage. A comprehensive recovery strategy often combines these methods to maximize legal and financial pressure on the defaulting buyer.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Vendor payments form the bedrock of supply chain stability. When a corporate buyer delays clearing invoices, it creates severe cash flow friction. Strategic legal recovery via the MSMED Act or CPC Order 37 ensures fast and effective resolution.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Vendor Agreements & POs */}
                <section id="vendor-agreements-purchase-orders" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Vendor Agreements &amp; POs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common defense raised by defaulting corporate buyers is that there is no formal, signed contract on stamp paper. They argue that without a single, bilateral contract document, the vendor cannot claim a breach of contract or file a fast-track summary suit. However, under the Indian Contract Act, 1872, a legally binding contract does not require a singular, formal document. A contract is established through a series of communications, purchase orders, delivery challans, and invoices. The buyer&apos;s Purchase Order (PO) represents an offer to purchase, the vendor&apos;s delivery of the goods or services represents performance, and the tax invoice represents the terms of payment and consideration, which, if accepted without protest, forms a binding contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts have consistently ruled that tax invoices containing terms of payment, credit periods, and interest on delay serve as valid written contracts under the law. For example, in key commercial judgments, courts have held that a written contract under Order XXXVII CPC includes invoices, delivery challans, and email correspondences. When a buyer accepts delivery and signs a delivery challan without raising complaints within a reasonable timeframe, they legally accept the transaction and the terms printed on the invoice. Terms regarding interest on delayed payment (such as &quot;Interest @ 18% p.a. will be charged for delays&quot;) are therefore contractually binding on the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 70 of the Indian Contract Act, 1872, the principle of quasi-contract and &quot;unjust enrichment&quot; provides additional protection to vendors. If a person lawfully does anything for another, or delivers anything to him, not intending to do so gratuitously, and the other person enjoys the benefit, the receiving party must compensate the provider or restore the goods. This means a buyer cannot retain the benefit of supplied raw materials or services without payment, even if they argue that the purchase order was unsigned or had a technical defect. The law prevents them from enriching themselves at the vendor&apos;s expense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Transactions involving physical goods are also governed by the Sale of Goods Act, 1930. Under Section 41, a buyer is deemed to have accepted the goods when they intimate the seller of acceptance, or when the goods are delivered and the buyer does any act inconsistent with the seller&apos;s ownership (such as using the raw materials in manufacturing or selling them to a third party). Once accepted, the buyer&apos;s obligation to pay the agreed price is absolute. Any dispute regarding quality must be raised promptly; sudden claims of &quot;poor quality&quot; made only when payment is demanded are generally dismissed by courts as bad-faith tactics.
                    </p>
                  </div>
                </section>

                {/* Section 3: MSMED Act Protections */}
                <section id="msme-delayed-payments-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. MSMED Act Protections</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Micro and small enterprises registered under the MSMED Act, 2006 (holding a Udyam Registration), have access to powerful statutory protections designed to prevent delayed payments. Under Section 15 of the Act, when an MSME vendor supplies goods or renders services to a buyer, the buyer must make payment on or before the date agreed in writing. Crucially, the law mandates that this credit period <strong>cannot exceed 45 days</strong> from the &quot;day of acceptance&quot; or &quot;day of deemed acceptance.&quot; If no written agreement exists, the payment deadline is <strong>15 days</strong> from delivery. Any contractual clause attempting to extend the payment window beyond 45 days is legally invalid.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a buyer fails to clear an MSME vendor&apos;s invoice within the statutory limit, Section 16 of the MSMED Act imposes a mandatory penal interest rate. The buyer is legally liable to pay compound interest on the outstanding amount from the due date. The interest rate is strictly defined as <strong>three (3) times the bank rate</strong> notified by the RBI, calculated with monthly rests. This is a statutory mandate, and courts or facilitation councils do not have the discretion to reduce this rate. The monthly compounding interest creates a significant financial liability for the defaulting buyer, encouraging prompt settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Registered MSME vendors can enforce these rights by filing a complaint on the <strong>MSME Samadhaan portal</strong> (the MSEFC ODR portal). The vendor uploads the unpaid invoices, purchase orders, proof of delivery, and their Udyam registration certificate. Once registered, the Micro and Small Enterprises Facilitation Council (MSEFC) of the state initiates conciliation proceedings under Section 18. The council summons both parties to hearings. If conciliation fails, the MSEFC either arbitrates the dispute itself or refers it to an arbitration center. The resulting arbitration award has the same legal force as a civil court decree and can be executed under Order 21 of the CPC.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A major advantage of the MSME Samadhaan process is the restriction it places on appeals. Under Section 19 of the MSMED Act, no court can entertain an appeal or challenge to an MSEFC award unless the buyer first deposits <strong>75% of the award amount</strong> (including principal and penal interest) with the court. This requirement deters buyers from filing frivolous appeals to delay payment. Furthermore, under Section 23, buyers cannot claim the penal interest paid to MSMEs as a tax-deductible business expense, adding further financial consequences to the payment default.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits (Order 37) */}
                <section id="fast-track-summary-suits-cpc" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits (Order 37)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For vendors that do not qualify as micro or small enterprises (or are unregistered under the MSMED Act), a <strong>Summary Suit under Order XXXVII of the CPC</strong> is the most effective civil court remedy for recovering unpaid invoices. Standard civil suits in India can take years due to procedural delays, as defendants can file lengthy statements, demand cross-examinations, and request multiple adjournments. Order 37 bypasses these delays through a fast-track procedure where the defendant does not have an automatic right to contest the suit. It applies to suits for recovering liquidated debts arising from written contracts, which include invoices and purchase orders.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedural steps of a Summary Suit are strictly timed. Upon filing, the court issues a specialized summons in Form 4 to the defendant. The defendant must enter an appearance, in person or through an advocate, within <strong>10 days</strong> of receiving the summons. If they fail to do so, the allegations in the plaint are deemed admitted, and the court immediately passes a decree in the plaintiff&apos;s favor. This allows a vendor to secure a recovery decree in a matter of weeks if the debtor fails to respond.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defendant enters an appearance, the plaintiff serves a &quot;Summons for Judgment.&quot; The defendant then has 10 days to file an application for <strong>&quot;Leave to Defend&quot;</strong>. To obtain leave, the defendant must convince the court through an affidavit that they have a substantial and bona fide defense, rather than a sham or delaying tactic. If the court finds the defense is a mere delay tactic (for example, admitting receipt of goods but claiming financial hardship), it will deny leave and pass a decree, or grant &quot;conditional leave&quot; requiring the defendant to deposit a substantial portion of the disputed amount into court before proceeding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Securing a decree under Order 37 CPC is followed by execution under Order 21. The executing court has the power to attach the debtor&apos;s bank accounts, seize and sell their assets, and even arrest the debtor or company directors in cases of deliberate evasion. Because the legal burden shifts to the debtor during the &quot;Leave to Defend&quot; phase, serving a summary suit often encourages corporate buyers to enter out-of-court settlement discussions to protect their assets.
                    </p>
                  </div>
                </section>

                {/* Section 5: Cheque Bounce & Criminal Remedies */}
                <section id="cheque-bounce-criminal-remedies-ni" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Cheque Bounce &amp; Criminal Remedies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In vendor relationships, buyers often issue cheques as security or payment for invoices. If a cheque issued by a debtor bounces due to &quot;insufficient funds,&quot; &quot;refer to drawer,&quot; or &quot;stop payment&quot; instructions, it becomes a criminal offense under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>. The criminal nature of cheque bounce proceedings provides significant leverage, as it exposes the directors and officers of the defaulting company to personal prosecution, arrest warrants, and criminal records. Corporate executives will often settle to avoid criminal trials.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal procedure for a Section 138 claim has strict statutory timelines. The cheque must be presented to the bank within its 3-month validity period. If dishonored, the bank issues a &quot;Cheque Return Memo.&quot; The vendor must serve a formal statutory demand notice to the drawer within <strong>30 days</strong> of receiving the return memo, demanding payment of the cheque amount and giving the drawer <strong>15 days</strong> from receipt to clear the dues. If the drawer fails to pay within 15 days, the cause of action is complete, and the vendor must file a criminal complaint in the Magistrate court within <strong>30 days</strong> thereafter.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The NI Act also provides for interim relief. Under Section 143A, the Magistrate court can order the drawer of the cheque to pay <strong>interim compensation</strong> to the complainant. This compensation can be up to <strong>20% of the cheque amount</strong> and must be paid within 60 days of the court&apos;s order. This helps vendors cover legal expenses and manage cash flow during the trial. If the trial concludes in a conviction, the court can sentence the accused to imprisonment for up to <strong>two (2) years</strong>, impose a fine up to <strong>twice the cheque amount</strong>, or both, and award compensation to the complainant.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When the drawer of the bounced cheque is a company, the vendor can invoke Section 141 of the NI Act to prosecute the company&apos;s directors. Section 141 states that every person in charge of and responsible to the company for the conduct of its business at the time of the offense shall be deemed guilty. By naming key board members and the Managing Director in the complaint, the vendor pierces the corporate veil. Furthermore, if the buyer issued the cheque with pre-existing fraudulent intent, the vendor can also file a complaint for <strong>Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                    </p>
                  </div>
                </section>

                {/* Section 6: Commercial Mediation (Section 12A) */}
                <section id="pre-institution-mediation-commercial" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Commercial Mediation (Section 12A)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial disputes involving unpaid vendor invoices fall under the jurisdiction of the <strong>Commercial Courts Act, 2015</strong>. The Act was enacted to speed up the resolution of commercial disputes and improve India&apos;s business dispute resolution mechanisms. It created specialized Commercial Courts at the district level and Commercial Divisions in High Courts. For a dispute to be classified as commercial, it must arise from transactions of merchants, traders, export/import, carriage of goods, or service contracts, and its <strong>Specified Value</strong> must be at least <strong>₹3,00,000 (three lakh rupees)</strong>. This lower threshold allows small business owners and suppliers to benefit from fast-track procedures, including strict timelines for filing pleadings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 12A</strong> of the Commercial Courts Act, a plaintiff cannot file a commercial suit directly unless they undergo mandatory <strong>Pre-Institution Mediation</strong>. This rule applies to all commercial suits that do not contemplate urgent interim relief. The process is initiated by filing an application along with a nominal fee before the <strong>District Legal Services Authority (DLSA)</strong>. The DLSA issues summons to the debtor, inviting them to participate in mediation sessions conducted by a trained, neutral mediator who assists both parties in reaching a mutually acceptable settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor refuses to participate, ignores the DLSA summons, or fails to appear for the mediation sessions, the mediator concludes the process and issues a <strong>&quot;Non-Starter Report.&quot;</strong> This report serves as a legal clearance certificate, permitting the plaintiff to file the commercial suit in court. The period spent in mediation is entirely excluded from the 3-year limitation period under the Limitation Act. This ensures that the vendor is not penalized for attempting mediation before moving to litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the mediation is successful, the parties draft and sign a formal <strong>Mediation Settlement Agreement</strong>. Under Section 12A(5) of the Act, this settlement agreement has the <strong>same status and effect as an arbitral award</strong> under the Arbitration and Conciliation Act, 1996. This means the settlement is binding and final, and cannot be appealed. If the debtor defaults on the payment terms agreed upon, the vendor does not need to file a new suit; they can apply directly to the court to execute the settlement agreement, attach the debtor&apos;s bank accounts, and recover the outstanding dues.
                    </p>
                  </div>
                </section>

                {/* Section 7: Evidence, E-Way Bills & GST Trail */}
                <section id="documentary-evidence-gst-reconciliation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Evidence, E-Way Bills &amp; GST Trail</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of any legal recovery action depends on the strength of your documentary evidence. In commercial disputes, courts expect a high standard of record-keeping. The foundation of your claim is the &quot;audit trail&quot; that links the transaction from inception to default. The primary document is the tax invoice. However, an invoice on its own only proves a demand; it does not prove delivery or acceptance. To build an airtight case, you must link the invoice to a valid Purchase Order (PO), signed delivery challans or service completion certificates, and a clean statement of accounts (ledger).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern digital era, the <strong>GST trail</strong> has become one of the most persuasive forms of evidence in commercial recovery. Under the Goods and Services Tax (GST) framework, when you issue a tax invoice, you report it in your GSTR-1 return. The buyer can see this invoice in their GSTR-2B statement and use it to claim Input Tax Credit (ITC) to reduce their tax liability. If the buyer has claimed ITC on your invoice, they have legally admitted the transaction and the receipt of the goods or services. In court, presenting the GSTR-2B log showing that the buyer claimed ITC on your unpaid invoices acts as an official admission of debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to GST records, maintaining a detailed <strong>ledger statement</strong> is critical. A ledger is a continuous record of transactions, debits, and credits between you and the buyer. Ideally, you should obtain periodic &quot;Balance Confirmations&quot; signed by the buyer&apos;s finance team, verifying that the outstanding balance in their books matches yours. Even if a signed confirmation is unavailable, sending regular ledger statements via email and obtaining a reply saying &quot;we are reviewing it&quot; or &quot;will pay soon&quot; acts as a written acknowledgment of debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because most business communications occur via email or WhatsApp, digital records form the bulk of your evidence. Under Section 63 of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 65B of the Indian Evidence Act), electronic records are admissible as secondary evidence in court, provided they are accompanied by a specific certificate. This certificate must be signed by a person in responsible control of the device and must verify that the computer or phone was operating properly, and that the data was not tampered with.
                    </p>
                  </div>
                </section>

                {/* Section 8: Escalation & Legal Notices */}
                <section id="structured-escalation-legal-demand" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Escalation &amp; Legal Notices</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal litigation, it is essential to follow a structured pre-litigation escalation process. This shows courts that you acted in good faith and exhausted all informal remedies. The escalation should begin with a formal email to the buyer&apos;s finance team, attaching a reconciliation sheet showing all paid and unpaid invoices, credit notes, and the outstanding balance. If this is ignored, escalate the communication to the buyer&apos;s Chief Financial Officer (CFO) and Chief Executive Officer (CEO), demanding a formal response within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If executive escalation fails, the next step is to serve a formal <strong>Legal Notice</strong>. A legal notice is a structured, advocate-signed document sent to the debtor, setting out the facts of the transaction, detailing the default, demanding payment of the outstanding dues within a strict window (typically 15 days), and warning of the legal actions that will be taken if they fail to comply. A legal notice is not just a warning; it establishes your cause of action and forms part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel drafts custom notices tailored to the specific facts of your case. We do not use generic templates. Instead, we highlight the buyer&apos;s violations of the contract, the statutory interest liabilities under the MSMED Act, and the criminal consequences of bounced cheques or cheating. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the debtor&apos;s corporate office. Crucially, we also send copies of the notice to the personal residential addresses of the company&apos;s directors, piercing the corporate veil and encouraging immediate settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of B2B payment disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to settle undisputed dues rather than face public litigation, credit rating downgrades, or asset attachment. If the debtor responds with a counter-claim or denies the debt, their reply helps our legal team understand their defense strategy, allowing us to prepare a stronger petition for the MSEFC, a Summary Suit, or cheque bounce proceedings.
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
                    Credit Term: Max 45 Days (MSME)
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
                    Limitation: 3 Years from Due Date
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Pre-mediation: Mandatory Section 12A
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
                  Our corporate advocates specialize in recovering B2B outstanding vendor payments, supplier dues, and contract claims. Let us handle your legalnotice campaign.
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
