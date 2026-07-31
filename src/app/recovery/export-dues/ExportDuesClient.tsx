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
    question: "What are the key legal remedies available to an Indian exporter for unpaid export bills?",
    answer: "Indian exporters can serve formal international legal notices, initiate international arbitration if defined in the contract, file civil/commercial suits in Indian or foreign courts, make claims with the Export Credit Guarantee Corporation (ECGC), or utilize local debt collection agencies in the buyer's home country."
  },
  {
    question: "What is the statutory timeline under FEMA to realize export proceeds?",
    answer: "Under the Foreign Exchange Management Act (FEMA), exporters are legally mandated to realize and repatriate the full value of export proceeds to India within nine (9) months from the date of export, or within such period as may be prescribed by the RBI. Extensions can be requested through Authorized Dealer (AD) banks."
  },
  {
    question: "How does the RBI's EDPMS track unpaid export invoices?",
    answer: "The Export Data Processing and Monitoring System (EDPMS) is an electronic portal that tracks shipping bills and corresponding foreign exchange receipts. When a shipping bill is generated, the customs department logs it, and it remains 'outstanding' in the EDPMS until the exporter's AD bank matches it with a foreign exchange remittance certificate (FIRC) or e-BRC."
  },
  {
    question: "What is the process to write off unrealized export dues under FEMA?",
    answer: "To write off unrealized dues, you must submit a write-off application to your AD bank, proving that all possible recovery efforts (such as legal notices, correspondence, and insurer notifications) have been exhausted. Write-offs are permitted if the buyer is insolvent, the legal cost of recovery exceeds the debt, or the buyer is untraceable, subject to RBI limits."
  },
  {
    question: "How does ECGC insurance help in recovering unpaid export payments?",
    answer: "ECGC provides credit risk insurance policies that protect exporters against buyer insolvency, protracted default, and political risks (like war or currency transfer restrictions). If a buyer defaults, you file a claim with ECGC along with proof of debt and recovery efforts, and ECGC compensates up to 90% of the loss."
  },
  {
    question: "Can I file a summary suit under Order 37 CPC against an overseas importer in an Indian court?",
    answer: "Yes, provided the contract specifies Indian jurisdiction, or if a major part of the cause of action arose in India (such as execution of the contract, manufacture of goods, or shipping from an Indian port). Service of summons to foreign defendants must be done through registered international channels or diplomatic post."
  },
  {
    question: "What documents are essential to prove an export debt claim in court or for insurance?",
    answer: "You must maintain: (1) the export contract or signed Purchase Order; (2) Commercial Invoices and Packing Lists; (3) Shipping Bills and Bills of Lading / Airway Bills; (4) bank correspondence showing non-realization; (5) correspondence with the buyer acknowledging the debt; and (6) proof of GST export declarations."
  },
  {
    question: "What is the difference between commercial risk and political risk under ECGC policies?",
    answer: "Commercial risk covers buyer insolvency, default, or refusal to accept goods after shipment. Political risk covers events outside the control of the buyer and exporter, such as changes in import/export policies, war, civil disturbance, or foreign exchange transfer restrictions imposed by the buyer's government."
  },
  {
    question: "How can I enforce a commercial court decree against a foreign buyer?",
    answer: "To enforce an Indian court decree abroad, you must check if the destination country has a reciprocating treaty with India (under Section 44A CPC). If it does, you can execute the decree directly in their courts. If it does not, you must file a fresh suit in their local courts using the Indian decree as prima facie evidence of the debt."
  },
  {
    question: "What is the role of an Authorized Dealer (AD) bank in handling outstanding export bills?",
    answer: "The AD bank acts as the regulatory intermediary between the exporter and the RBI. The bank monitors EDPMS entries, issues reminders for delayed proceeds, processes extension applications, and evaluates write-off requests based on RBI master directions, ensuring compliance with exchange control laws."
  },
  {
    question: "How does an international arbitration clause help in export dues recovery?",
    answer: "An arbitration clause seated in a New York Convention signatory country ensures that the arbitral award is enforceable in over 160 countries. If the buyer defaults, you initiate arbitration, and the award can be executed directly by attaching the buyer's local bank accounts and assets in their home country."
  },
  {
    question: "Can I hold a foreign buyer's local Indian agent or liaison office liable for unpaid export bills?",
    answer: "Yes. Under Section 230 of the Indian Contract Act, 1872, an agent can be held personally liable for contracts entered into on behalf of an undisclosed foreign principal, or if the contract explicitly imposes liability on the agent. This allows you to initiate recovery actions directly against the local Indian agent."
  },
  {
    question: "What happens if my shipping bills are flagged on the RBI Caution List?",
    answer: "If your shipping bills are caution-listed on EDPMS, you cannot export goods unless you obtain a 100% advance remittance or a confirmed irrevocable Letter of Credit (LC) from the buyer. To resolve this, you must submit a formal regularisation request to your AD bank, showing active recovery efforts, or apply for an extension/write-off to clear the outstanding entries."
  },
  {
    question: "Can I claim interest on delayed export payments in the absence of a contract clause?",
    answer: "Yes, even without a contract clause, you can claim interest under the Interest Act, 1978. Under Section 3 of the Act, courts and arbitration tribunals have the power to award interest at the prevailing commercial bank lending rates from the date the debt became payable (or the date of the legal notice) until the date of payment."
  },
  {
    question: "How does the GST refund (IGST/ITC) get impacted by unrealized export dues?",
    answer: "Under GST rules, if export proceeds are not realized within the timeline prescribed by FEMA (9 months), the exporter must refund the IGST refund or Input Tax Credit (ITC) claimed on those exports, along with interest at 18% p.a. However, once the proceeds are subsequently realized (even after a delay), the exporter can claim a re-refund of the tax paid."
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
      "name": "Export Dues Recovery",
      "item": "https://www.legalrecovery.in/recovery/export-dues"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Export Dues & International Trade Payments | Legal Guide",
  "description": "Exhaustive legal guide on B2B export payment recovery, ECGC insurance claims, FEMA write-offs under RBI guidelines, and commercial arbitration in India.",
  "image": "https://www.legalrecovery.in/og-export-dues.png",
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
  "name": "Export Dues Recovery Services",
  "image": "https://www.legalrecovery.in/og-export-dues.png",
  "description": "Advocate-backed legal assistance for recovering outstanding export dues, international B2B trade payments, and ECGC claims in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "510"
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
        "name": "Aditya Goel"
      },
      "reviewBody": "Our textile export business was facing a severe liquidity crunch when a US buyer defaulted on a $45,000 shipment. LegalRecovery drafted a comprehensive international notice and served it directly to the buyer's US office. The buyer's legal team settled the entire outstanding amount within two weeks of receiving the notice. Highly professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Malhotra"
      },
      "reviewBody": "A foreign buyer defaulted on a shipment of spices, leaving us with an unpaid bill of €18,000. LegalRecovery helped us compile the evidence dossier, coordinate with our AD bank, and file a formal claim with ECGC. We recovered 90% of our loss through the insurance policy, saving our business from bankruptcy."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Singhania"
      },
      "reviewBody": "Our auto components manufacturing firm was flagged on the EDPMS portal because a foreign client delayed payments for 10 months. LegalRecovery drafted a recovery trail document and served a legal notice to the client. Fearing legal action, the client cleared all payments immediately, helping us satisfy the RBI's compliance requirements."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanjay Kapoor"
      },
      "reviewBody": "An overseas buyer went insolvent, leaving our leather goods export business with ₹8,0,000 in outstanding bills. LegalRecovery documented our recovery efforts, including legal notices, helping us secure a write-off from our AD bank under RBI guidelines, protecting us from FEMA penalties."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Verma"
      },
      "reviewBody": "A client's Indian liaison office bounced their post-dated payment cheques for our engineering goods export. LegalRecovery served a statutory 15-day notice under Section 138 of the NI Act. The liaison office paid the full amount via RTGS to avoid criminal prosecution. Excellent results!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ritu Sen"
      },
      "reviewBody": "A Middle East importer delayed payments for our chemical shipments. LegalRecovery helped us draft a notice citing the governing law clause in our contract, forcing the client to clear all dues. Incredibly effective support!"
    }
  ]
};

export default function ExportDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "export-dues-corporate-context", title: "1. Export Defaults & Global Trade Realities" },
    { id: "fema-edpms-compliance", title: "2. FEMA Compliance & EDPMS Realization" },
    { id: "ecgc-trade-insurance-claims", title: "3. ECGC Claims & Trade Credit Insurance" },
    { id: "judicial-recovery-cross-border", title: "4. Judicial Forums & Debt Recovery" },
    { id: "advocate-notices-export-strategy", title: "5. Advocate Notices & Negotiations" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Export Dues Recovery", href: "/recovery/export-dues" },
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
              India&apos;s Premium Export Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">Export Dues</span> &amp; Trade Payments
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling to recover unpaid export invoices, outstanding B2B trade payments, or facing RBI/FEMA compliance alerts on outstanding export entries? Know your statutory options and enforce recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Export Recovery
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
                
                {/* Section 1: Export Defaults & Global Trade Realities */}
                <section id="export-dues-corporate-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Export Defaults &amp; Global Trade Realities</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the highly competitive arena of international trade, Indian exporters, manufacturers, and merchant traders play a central role, supplying physical goods—such as textiles, agricultural commodities, auto components, chemicals, and engineering products—to global buyers. These B2B transactions are structured around a complex exchange of shipping documents: commercial invoices, detailed packing lists, shipping bills generated via the Indian customs portal (ICEGATE), ocean bills of lading (B/L) issued by maritime carriers, and airway bills (AWB) for air cargo shipments. The payment terms are established under sales contracts or purchase orders, ranging from secure Letters of Credit (LC) and Documents against Payment (D/P) to much riskier arrangements like Documents against Acceptance (D/A) and open account credit terms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Despite the presence of written contracts, default by foreign importers represents an ongoing threat to exporters. A buyer might delay payments, raise quality disputes, or fail to pay entirely due to sudden business insolvency, regional credit squeezes, or currency devaluations. These defaults trigger a severe liquidity crisis for the Indian exporter, who has already incurred manufacturing costs, paid local suppliers, and covered shipping and freight expenses. Without the timely receipt of export proceeds, exporters often struggle to service their export credit loans, pay sub-vendors, or maintain daily manufacturing operations, threatening the viability of their business.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is essential to distinguish cross-border export dues recovery from other common recovery scenarios, such as unpaid salary claims, contractor milestone disputes, or domestic B2B invoice collection. Salary claims are governed by domestic labor laws like the Payment of Wages Act, designed to protect individual employees. Domestic contractor or freelance payment recovery relies on local service agreements and contracts. In contrast, export dues recovery is a cross-border commercial dispute involving the sale of physical goods, international transit logistics, customs regulations, and private international law. Overseas buyers often exploit the geographical distance and the exporter’s lack of immediate access to their local legal system to delay payments or demand deep discounts once the cargo has arrived.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Exporters must also understand how the choice of International Commercial Terms (Incoterms 2020) affects cargo liability and payment disputes. Under Free on Board (FOB) terms, risk transfers to the buyer once the goods pass the ship's rail at the port of loading, whereas under Cost, Insurance and Freight (CIF) or Delivered Duty Paid (DDP) terms, the exporter retains liability for transport and insurance costs until the goods reach the destination. Importers often raise disputes regarding transit damage—such as water damage in cargo holds, temperature deviations in reefer containers, or packaging tears—as an excuse to default on payments, claiming the seller is responsible. Exporters must maintain clear records of pre-shipment quality and loading inspections (e.g., from SGS or Bureau Veritas) to prove that the goods were loaded in compliant condition, establishing that transit issues fall under the carrier's or buyer's liability depending on the Incoterms used.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, discrepancies in Letters of Credit (LCs) are frequently exploited by foreign buyers to stall payments. While an LC is designed to guarantee payment upon the presentation of complying documents, the buyer's bank can reject the documents if they contain minor typographical errors, late shipment dates, or inconsistent descriptions of goods. Importers sometimes request complex or non-standard documents in the LC terms, creating document discrepancies that allow their bank to refuse payment. The exporter is then forced to negotiate on an open account basis, leaving them vulnerable to defaults. Unpaid export bills also impact export incentives like the Remission of Duties and Taxes on Exported Products (RoDTEP) and Duty Drawback (DBK), which are clawed back by customs if the export proceeds are not realized.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel specializes in helping Indian exporters and B2B traders recover outstanding trade payments. We analyze your commercial invoices, shipping bills, customs logs, and buyer correspondence to build a strong evidence dossier. By serving international legal notices, coordinating with credit insurers like ECGC, and guiding you through FEMA-compliant write-off procedures, we protect your business from both financial loss and regulatory penalties. We help you assert your rights across borders, ensuring that foreign buyers respect their contractual and financial commitments.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Export dues are commercial debts subject to international trade regulations. Recovering these payments requires a combination of contract enforcement, credit insurance coordination, and FEMA compliance documentation to protect your business.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: FEMA Compliance & EDPMS Realization */}
                <section id="fema-edpms-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. FEMA Compliance &amp; EDPMS Realization</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Export transactions in India are subject to strict regulatory supervision under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and the Master Directions issued by the Reserve Bank of India (RBI). Under FEMA regulations, an exporter is legally obligated to realize and repatriate the full value of export proceeds to India within <strong>nine (9) months</strong> from the date of export. For exports to warehouses established outside India with RBI approval, this timeline is extended to fifteen (15) months. The RBI monitors the flow of foreign exchange through its centralized electronic tracking system, the <strong>Export Data Processing and Monitoring System (EDPMS)</strong>. When a shipping bill is generated by customs at the port of export, the details are transmitted directly to EDPMS. The entry remains open and classified as an outstanding export bill until the exporter's Authorized Dealer (AD) Category-I bank matches it with a corresponding foreign remittance certificate (FIRC) or electronic Bank Realization Certificate (e-BRC).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When an overseas buyer defaults or delays payment, the outstanding entry remains open on the EDPMS portal, triggering automated alerts. Exporters receive regular notifications and show-cause letters from their AD bank, demanding proof of realization or explanations for the delay. Under Section 13 of FEMA, the failure to realize and repatriate export proceeds within the statutory timeline constitutes a serious compliance violation. If the exporter fails to resolve the outstanding entries or secure an extension, the RBI can place them on the <strong>Caution List</strong>. Being caution-listed is a severe penalty that restricts the exporter's business operations. Once caution-listed, the exporter cannot ship any goods unless they receive 100% advance payment or an irrevocable Letter of Credit confirmed by a reputed bank, effectively halting their international trade. Additionally, the Enforcement Directorate (ED) has the power to initiate audits and levy penalties up to three times the amount of the unrealized foreign exchange.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect their business from caution-listing and FEMA penalties, exporters must build a clear recovery trail showing that they have taken all possible legal steps to recover the debt. If the exporter can prove that the delay is due to the buyer's default or insolvency, they can apply to their AD bank for an extension of the realization period using Form ETD. If, despite all efforts, the dues remain unrealized, the exporter can apply for a formal <strong>write-off of outstanding export bills</strong>. Under RBI guidelines, exporters can self-write off up to a specified percentage (typically 5% to 10% of their total export realizations in the preceding calendar year) depending on their status holder category. For write-offs exceeding this limit, the application must be submitted to the AD bank, backed by evidence of the buyer's insolvency, a liquidator's certificate, or proof that the legal cost of recovery exceeds the debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A key regulatory exception is that if the outstanding export bill has been settled by the <strong>Export Credit Guarantee Corporation (ECGC)</strong> or a private trade credit insurer regulated by the IRDA, the standard percentage limits for write-offs do not apply. The exporter must submit the claim settlement certificate from the insurer to the AD bank. The bank will then write off the relative export bills in the EDPMS portal and remove the outstanding entry, clearing the exporter's regulatory record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, under GST rules, if export proceeds are not realized within the timeline prescribed by FEMA, the exporter must refund the IGST refund or Input Tax Credit (ITC) claimed on those exports, along with interest at 18% p.a. This can place an additional financial burden on the exporter. However, once the proceeds are subsequently realized (even after a delay), the exporter can claim a re-refund of the tax paid.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team assists exporters in preparing these compliance dossiers. We draft formal representations to AD banks, document all recovery attempts, and compile the evidence required to secure write-offs or extensions, protecting your business from FEMA penalties and caution-listing. We ensure that your recovery trail is fully documented, satisfying regulatory requirements and protecting your business interests.
                    </p>
                  </div>
                </section>

                {/* Section 3: ECGC Claims & Trade Credit Insurance */}
                <section id="ecgc-trade-insurance-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. ECGC Claims &amp; Trade Credit Insurance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect exporters against the risks of cross-border trade, the Government of India established the <strong>Export Credit Guarantee Corporation (ECGC)</strong>. ECGC provides trade credit insurance policies that protect exporters against payment defaults by foreign buyers. Private insurance companies also offer similar credit insurance products. These policies cover both commercial and political risks, typically compensating the exporter for 85% to 90% of the invoice value in the event of default, helping to protect business liquidity.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      ECGC and private insurers divide the covered risks into two main categories:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Commercial Risk:</strong> This includes the buyer's insolvency, protracted default (failure to pay within the agreed credit period, usually 4 months from the due date), and the buyer's refusal to accept goods after shipment, provided the seller is not in breach of contract.</li>
                      <li><strong>Political Risk:</strong> This covers events outside the control of both parties, such as war, civil war, foreign exchange transfer restrictions imposed by the buyer's government, import bans, or the cancellation of import licenses.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To file a claim under an ECGC policy, the exporter must adhere strictly to the policy's terms and timelines. The exporter must submit a declaration of default to ECGC within a specified timeframe (typically 30 days from the due date). The formal claim must then be filed on the ECGC portal within 360 days of the due date, accompanied by supporting documents: commercial invoices, bills of lading, customs declarations, bank realization statements, and all correspondence with the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A major challenge exporters face is that if the buyer raises any dispute regarding the quality or delivery of the goods, ECGC will immediately put the claim on hold. The insurer will not settle the claim until the dispute is resolved through arbitration or a court decree. Buyers frequently raise sham disputes to block the exporter's insurance claim. Exporters must be prepared to contest these claims by presenting independent inspection reports or filing for arbitration.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once a claim is approved and paid, any recoveries made from the buyer must be shared between the exporter and ECGC in the same ratio as the claim payout (usually 90:10). The exporter remains obligated to assist the insurer in recovery efforts, including legal action against the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team helps exporters navigate the ECGC and trade credit insurance claim process. We compile the evidence dossier, draft the required recovery notices, and provide legal opinion letters certifying the contract compliance. We ensure that your claim is filed correctly, helping you secure the maximum compensation from your policy and protecting your business cash flow.
                    </p>
                  </div>
                </section>

                {/* Section 4: Judicial Forums & Debt Recovery */}
                <section id="judicial-recovery-cross-border" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Judicial Forums &amp; Debt Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If pre-litigation notices and insurance claims fail, the exporter must choose the appropriate judicial forum to recover the debt. If the dispute is governed by Indian jurisdiction, the exporter can file a commercial suit under the <strong>Commercial Courts Act, 2015</strong>. Commercial courts have specialized procedures and strict timelines for case management, designed to resolve B2B disputes faster than traditional civil courts. Exporters must first complete the mandatory pre-institution mediation process, and if that fails, they can proceed to trial.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the contract contains a mutual <strong>Arbitration Clause</strong>, the dispute must be referred to arbitration under the <strong>Arbitration and Conciliation Act, 1996</strong>. Arbitration is the preferred method for international B2B disputes because it is faster and resulting arbitral awards are recognized globally under the <strong>New York Convention of 1958</strong>. An award obtained in India can be executed directly in any of the 160+ convention signatory countries by attaching the buyer's local bank accounts and assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the foreign buyer has an active presence in India, such as a subsidiary, liaison office, or bank accounts, the exporter can file a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. Order 37 is a fast-track civil remedy for recovering liquidated debts based on written contracts or invoices. The foreign defendant does not have an automatic right to defend the suit; they must apply for 'Leave to Defend' within 10 days of receiving the summons, proving they have a genuine and substantial defense. If they fail to do so, the court passes a decree in the exporter's favor.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 44A of the CPC, a decree passed by a superior court in India can be executed directly in <strong>reciprocating territories</strong> like the UK, Singapore, UAE, or Malaysia. For non-reciprocating territories like the US, the exporter must file a fresh lawsuit in the local foreign court, using the Indian decree as strong evidence of the debt. Additionally, under Section 230 of the Indian Contract Act, 1872, the local Indian agent of a foreign principal can be held personally liable under specific circumstances.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Exporters can also work with international debt collection agencies and local law firms in the buyer's home country. These agencies can initiate local recovery actions, send demands in the local language, and negotiate settlements on the exporter's behalf, providing an effective parallel path to recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our team evaluates your contract and debtor profile to recommend the most effective legal forum. We assist in drafting arbitration petitions, filing summary suits, and coordinating with international legal panels to enforce decrees and attach foreign assets, ensuring a structured approach to recovery.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & Negotiations */}
                <section id="advocate-notices-export-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; Negotiations</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery of unpaid export dues begins with a structured pre-litigation escalation strategy. This involves building a clear documentary record of the debt. Exporters should compile all relevant records, including the contract, commercial invoices, packing lists, shipping bills, bills of lading, customs logs, and buyer correspondence. A final demand email should be sent to the buyer's finance team and senior management, attaching a detailed statement of accounts and requesting a resolution within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed International Legal Notice</strong>. An international legal notice is a structured legal document sent to the foreign client, setting out the facts of the transaction, detailing the payment default, calculating the interest due under the contract or the Interest Act, 1978, and warning of the civil, regulatory, and arbitration actions that will follow if they fail to comply. Serving a legal notice is a critical step, as it establishes your cause of action and forms part of the regulatory record for your AD bank.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom international notices tailored to the specific details of your export dispute. We do not use generic templates. Instead, we highlight the contract terms, the governing law provisions, the applicability of international conventions, and the personal liability of the company's directors. We send the notice via Registered International Speed Post or email to the company's registered corporate address, and send copies to the personal residential addresses of the directors. Piercing the corporate veil in this manner ensures that the directors are personally aware of the dispute, which often prompts the company's legal team to propose a settlement to protect their management from litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The notice also demands interest under the contract or the Interest Act, 1978. Citing interest (typically 12% to 18% per annum) raises the financial stakes for the buyer, encouraging them to prioritize the settlement. We also outline the potential impact of non-payment on their credit rating, citing notifications to credit databases like Dun &amp; Bradstreet.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, we leverage notifications to local chambers of commerce and trade bodies in the buyer's home country. This can impact their business reputation, prompting them to resolve the dispute. If the buyer has liaison offices or subsidiary operations in India, we target these entities, warning of local asset attachments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of export dues disputes are resolved successfully at the legal notice stage. Most foreign corporate entities prefer to clear outstanding invoices rather than face public litigation, credit rating impacts, or regulatory audits that could damage their business operations. If the client responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed that covers both the payment timeline and the release of any project deliverables, helping you protect your business interests.
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
                    FEMA: Realization Obligatory (RBI)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    EDPMS: Tracks Outstanding export bills
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Awards: Enforceable globally (New York Conv.)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forums: International Arbitration / Small Claims
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Escalation: Advocate Notice to foreign Board
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
                  Our international trade advocates specialize in B2B cross-border recovery and satisfying FEMA/RBI AD bank compliance. Let us handle your legal notice campaign.
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
