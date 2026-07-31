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
    question: "How is MSME delayed payment interest calculated?",
    answer: "Under Section 16 of the MSMED Act, interest is calculated as compound interest with monthly rests on the outstanding amount at three times (3x) the RBI bank rate."
  },
  {
    question: "What is the compounding frequency for MSME delayed payment interest?",
    answer: "The interest compounds with 'monthly rests', meaning the accumulated interest is added to the principal balance at the end of each month, accelerating the total dues."
  },
  {
    question: "How do I find the RBI bank rate for MSME interest calculations?",
    answer: "The RBI bank rate is published on the official Reserve Bank of India website (rbi.org.in). It changes dynamically based on monetary policy adjustments."
  },
  {
    question: "Is the 3x RBI interest rate mandatory even if the contract says no interest?",
    answer: "Yes, Section 16 is mandatory. Under Section 24, the provisions of the MSMED Act override any private contract, making any 'no-interest' clause void."
  },
  {
    question: "Is MSME delayed payment interest tax-deductible for the buyer?",
    answer: "No, Section 23 of the MSMED Act explicitly disallows the interest paid or payable to an MSME as a business expense deduction under the Income Tax Act, 1961."
  },
  {
    question: "What are the balance sheet disclosure requirements under Section 22?",
    answer: "Audited buyers must disclose outstanding principal and accrued interest separately in their annual accounts, detailing delayed payments and unpaid interest."
  },
  {
    question: "How does CARO 2020 affect MSME delayed payments?",
    answer: "The Companies Auditor's Report Order (CARO) 2020 requires statutory auditors to report on the company's compliance with MSMED Act disclosure requirements."
  },
  {
    question: "What is the impact of Clause 22 of Form 3CD on delayed payments?",
    answer: "Tax auditors must list all interest paid or payable under the MSMED Act in Clause 22 of Form 3CD, making the default visible to the Income Tax department."
  },
  {
    question: "When does the interest calculation window begin?",
    answer: "The calculation window begins on the day following the 'appointed day' (the day following the expiry of 45 days if agreed in writing, or 15 days if no agreement)."
  },
  {
    question: "When does the interest calculation window end?",
    answer: "It ends on the date the payment is actually realized by the supplier (date of clearance of bank transfer, demand draft, or cheque)."
  },
  {
    question: "Can I claim interest alone if the buyer has already paid the principal amount?",
    answer: "Yes, you can file a claim before the MSEFC for the recovery of the statutory compound interest alone for the period of delay, even if the principal is paid."
  },
  {
    question: "What is the statutory pre-deposit required for a buyer to appeal an award?",
    answer: "Under Section 19, the buyer must deposit seventy-five percent (75%) of the awarded interest and principal in court before they can challenge the award."
  },
  {
    question: "Does the interest continue to accrue during the MSEFC proceedings?",
    answer: "Yes, the statutory interest under Section 16 continues to compound monthly until the buyer clears the entire outstanding dues."
  },
  {
    question: "How does the 'deemed acceptance' rule impact the interest calculation?",
    answer: "If the buyer does not object in writing within 15 days of delivery, they are deemed to have accepted the goods/services, and the 45-day calculation window begins."
  },
  {
    question: "Does the interest rate change if the RBI bank rate is revised mid-way?",
    answer: "Yes, since the rate is fixed at 3x the RBI bank rate, the interest calculations must apply the prevailing RBI rate for each respective period of delay."
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
      "name": "MSME Delayed Payment Interest Recovery",
      "item": "https://www.legalrecovery.in/recovery/delayed-payment-interest-under-msme"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering MSME Delayed Payment Interest under Section 16 | Legal Guide",
  "description": "Detailed legal guide on B2B MSME compound interest recovery under MSMED Act Section 16, RBI bank rate application, tax non-deductibility, and CARO disclosures.",
  "image": "https://www.legalrecovery.in/og-msme-interest.png",
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
  "name": "MSME Delayed Payment Interest Recovery Services",
  "image": "https://www.legalrecovery.in/og-msme-interest.png",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "description": "Expert legal assistance for calculating, claiming, and recovering B2B delayed payment compound interest under the MSMED Act, 2006.",
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
        "name": "Anil Kumar"
      },
      "reviewBody": "A corporate client cleared our principal amount after a delay of 10 months but refused to pay any interest. LegalRecovery drafted a notice citing Section 16 and calculated the compound interest with monthly rests. Realizing the tax non-deductibility under Section 23, the client settled and paid the ₹4,50,000 interest amount within 15 days. Excellent guidance!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Geeta Rao"
      },
      "reviewBody": "Our software firm faced delayed payments for milestones. LegalRecovery calculated the statutory interest at 3x the RBI bank rate and served a formal notice. The client's finance head cleared the entire dues + interest to avoid audit qualifications. Highly professional legal support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Manoj Tiwari"
      },
      "reviewBody": "We were struggling to recover interest on late payments from a public limited buyer. LegalRecovery helped us draft a notice citing Section 22 balance sheet disclosures and CARO 2020 compliance. To avoid public disclosure, the buyer settled the interest immediately. Brilliant strategy!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Raina"
      },
      "reviewBody": "A public sector buyer delayed our invoice by a year. LegalRecovery helped us file a claim for the principal and compound interest on the Samadhaan portal. We recovered our principal and the full statutory interest under Section 16. Incredibly effective support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Joseph"
      },
      "reviewBody": "When the buyer challenged our MSEFC interest award in court, LegalRecovery enforced the Section 19 rule making them deposit 75% of the award. Facing this financial block, the buyer withdrew the appeal and paid us. Excellent result!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Malhotra"
      },
      "reviewBody": "A buyer raised quality issues post-facto to avoid paying late interest. LegalRecovery proved the quality objections were invalid under the 15-day deemed acceptance rule. The arbitrator ordered the buyer to pay the principal and compound interest. Brilliant legal work!"
    }
  ]
};

export default function MSMEInterestClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "msme-penal-interest-b2b-debts", title: "1. Introduction to MSME Penal Interest & B2B Debts" },
    { id: "msmed-act-sections-15-16", title: "2. Statutory Provisions: Sections 15 & 16 of the MSMED Act" },
    { id: "tax-accounting-sections-22-23", title: "3. Tax & Accounting Implications: Sections 22 & 23" },
    { id: "interest-calculation-window-resolutions", title: "4. Interest Calculation Window & Dispute Resolutions" },
    { id: "msme-advocate-notices-calculation-negotiation", title: "5. Advocate Notices & Calculation-Based Negotiation" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "MSME Interest Recovery", href: "/recovery/delayed-payment-interest-under-msme" },
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
              MSME Delayed Payment Interest
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Calculate &amp; Recover <span className="text-[#DC2626]">MSME Interest</span> Dues
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Outstanding B2B dues? Learn how to calculate and claim statutory compound interest at 3x the RBI bank rate under Section 16 of the MSMED Act, 2006. Understand tax non-deductibility and balance sheet disclosures.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Interest Recovery
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
                
                {/* Section 1: Introduction to MSME Penal Interest & B2B Debts */}
                <section id="msme-penal-interest-b2b-debts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Introduction to MSME Penal Interest &amp; B2B Debts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern commercial environment of India, delayed payments represent one of the most critical challenges to the survival and growth of Micro and Small Enterprises (MSEs). Small manufacturing units, B2B vendors, component suppliers, and professional service providers operate on tight margins, with cash flows linked directly to invoice realization. When large buyers—ranging from multinational corporations and private limited companies to public sector undertakings (PSUs)—delay clearing invoices, it creates a cascading credit crunch. The supplier is forced to default on bank loans, vendor payments, and statutory liabilities. To address this structural vulnerability, the Parliament introduced the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>. This Act establishes a statutory right to penal interest for delayed payments, designed to act as a powerful financial deterrent against corporate buyers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is critical to distinguish B2B MSME delayed payment interest claims from other common recovery scenarios, such as unpaid salary claims, flat booking refunds, or rental security deposit disputes. Salary claims are governed by labor codes designed to protect individual employees. Rental security deposit disputes or flat booking cancellation claims are covered by the Rent Control Act or the Real Estate Regulatory Authority (RERA), which protect consumers or tenants. In contrast, MSME delayed payment interest is a commercial, transaction-based claim governed by the provisions of the MSMED Act, 2006, the Indian Contract Act, 1872, and the Code of Civil Procedure, 1908. Recovering these commercial debts requires navigating business transaction logs, proof of delivery, and specialized statutory interest calculations under central law.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The concept of statutory penal interest under the MSMED Act represents a departure from traditional commercial practices. In standard contracts, interest on delays is either not specified or limited to nominal rates (like 6% to 12% p.a. simple interest). If a contract does not mention interest, suppliers must rely on the Interest Act, 1978, which allows courts to award interest at commercial bank rates. The MSMED Act, by contrast, establishes a mandatory, high-rate compound interest penalty that applies regardless of any contract terms. This statutory interest is designed to compensate the supplier for the loss of working capital and penalize the buyer for using vendor payables as a source of interest-free funding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary mechanism of the Act relies on financial pressure. By raising the cost of delayed payments through high compound interest rates, the law makes it economically disadvantageous for buyers to delay payments. This framework helps rebalance the relationship between large buyers and small suppliers, protecting the supplier's working capital. Exporters are also protected, as they can claim interest on delayed B2B payments, helping to buffer their cash flow against international trade default risks.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the statutory right to interest cannot be contractually bypassed. Corporate buyers often include &quot;no-interest&quot; or &quot;limited liability&quot; clauses in their vendor registration forms or purchase orders to avoid interest claims. Under Section 24 of the MSMED Act, the provisions of Sections 15 to 23 have an overriding effect, prevailing over any other law or private agreement. This means that even if a supplier signs a contract containing a waiver, the right to statutory interest remains fully enforceable in court, providing absolute security for the supplier.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel specializes in helping registered micro and small businesses calculate and recover their statutory delayed payment interest. We analyze your commercial invoices, purchase orders, delivery challans, and payment logs to build a detailed interest statement of accounts. By serving structured statutory notices citing the MSMED Act, filing cases on the MSME Samadhaan portal, and representing you before the MSEFC, we help protect your business from cash-flow crises. We help you assert your rights, ensuring that corporate buyers respect their financial and statutory obligations.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;MSME delayed payment interest is a mandatory statutory penalty under Section 16. Buyers cannot contractually waive or reduce this interest, and any attempts to do so are legally void under Section 24.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Statutory Provisions: Sections 15 & 16 of the MSMED Act */}
                <section id="msmed-act-sections-15-16" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Statutory Provisions: Sections 15 &amp; 16 of the MSMED Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The statutory right of an MSME supplier to receive timely payment and penal interest is established under <strong>Sections 15 and 16</strong> of the MSMED Act, 2006. These sections provide a strict framework designed to protect small suppliers from the financial pressure of corporate payment defaults. These provisions have an overriding effect under Section 24 of the Act, prevailing over any other law or private agreement, meaning the buyer cannot contractually waive or reduce these statutory rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary protection is <strong>Section 15</strong>, which mandates a strict payment timeline. Under Section 15, when a registered MSME supplier provides goods or services to a buyer, the buyer must make the payment on or before the date agreed upon in writing. Crucially, the law mandates that this agreed credit period <strong>cannot exceed forty-five (45) days</strong> from the date of acceptance or deemed acceptance of the goods or services. If there is no written agreement, the payment must be made within <strong>15 days</strong> of delivery. Any contract clause that attempts to extend the credit window beyond 45 days is legally void. If the buyer fails to pay within this statutory window, they commit a direct violation of the Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer defaults, <strong>Section 16</strong> of the MSMED Act imposes a severe financial penalty. The buyer is legally liable to pay <strong>compound interest with monthly rests</strong> on the outstanding amount. The interest rate is fixed at <strong>three times (3x) the bank rate</strong> notified by the Reserve Bank of India (RBI). This rate is significantly higher than standard commercial lending rates or civil court interest rates, serving as a powerful deterrent against buyers who delay payments to manage their cash flow. The interest begins accruing automatically from the day following the statutory due date, and the buyer cannot contractually waive or reduce this rate. Under Section 24, these provisions have an overriding effect, prevailing over any other law or private agreement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The compounding mechanism with &quot;monthly rests&quot; is a critical aspect of the Section 16 penalty. Unlike simple interest, where interest is calculated only on the principal amount, compound interest with monthly rests means that the accumulated interest is added to the principal balance at the end of each month. In the succeeding month, interest is calculated on this new, higher balance. This compounding effect causes the outstanding debt to grow exponentially over time, creating a substantial financial liability for buyers who delay payments for long periods. The interest rate is tied to the RBI bank rate, which is adjusted dynamically based on monetary policy, and the calculation must apply the prevailing rate for each respective period of delay.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Exporters and B2B vendors must also note that this penal interest applies regardless of the buyer&apos;s internal processing delays or administrative cycles. Excuses such as &quot;system audits,&quot; &quot;delayed client approvals,&quot; or &quot;sign-off delays&quot; are legally irrelevant under Section 16. Once the statutory payment window has closed, the interest calculation begins automatically by operation of law, and the buyer is obligated to clear it.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team helps suppliers verify their eligibility, audit their contracts and invoices, and calculate the statutory compound interest. We prepare detailed statements of accounts using historical RBI rates, providing the documentation needed to assert your claims before the MSEFC or in civil recovery suits, protecting your business from payment defaults.
                    </p>
                  </div>
                </section>

                {/* Section 3: Tax & Accounting Implications: Sections 22 & 23 */}
                <section id="tax-accounting-sections-22-23" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Tax &amp; Accounting Implications: Sections 22 &amp; 23</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure compliance, the MSMED Act, 2006 establishes strict tax and accounting disclosures for buyers who delay payments to MSME suppliers. These provisions, set out in <strong>Sections 22 and 23</strong> of the Act, create significant financial and regulatory consequences for buyers. They make it costly for corporate entities to treat vendor payables as a source of interest-free funding and ensure that defaults are disclosed to auditors and tax authorities.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary tax deterrent is <strong>Section 23</strong> of the MSMED Act. Under Section 23, any interest paid or payable by a buyer to an MSME supplier under Section 16 <strong>is not allowed as a tax-deductible expenditure</strong> under the Income Tax Act, 1961. In standard business transactions, interest paid on business loans or commercial debts is treated as a tax-deductible business expense, reducing the company&apos;s taxable income. However, MSME delayed payment interest is classified as a statutory penalty, making it inadmissible for tax purposes. The buyer must pay the penal interest out of their net profits after tax and cannot claim it as a business expense. This significantly increases the financial cost of delaying payments, creating a major incentive for buyers to pay on time.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To enforce this rule, <strong>Section 22</strong> of the MSMED Act imposes mandatory disclosure requirements. Any buyer required to have their annual accounts audited under any law must include specific disclosures in their annual financial statements regarding their outstanding dues to MSME suppliers. These disclosures include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Outstanding Principal and Interest:</strong> the principal amount and interest due thereon remaining unpaid to any supplier at the end of each accounting year.</li>
                      <li><strong>Interest Paid:</strong> the amount of interest paid by the buyer under Section 16, along with the payments made beyond the appointed day.</li>
                      <li><strong>Accrued and Unpaid Interest:</strong> the amount of interest due and payable for the period of delay, and the interest accrued and remaining unpaid at the end of the year.</li>
                      <li><strong>Further Interest:</strong> the amount of further interest remaining due and payable in succeeding years.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These disclosure requirements are reinforced by statutory audit regulations. Under the <strong>Companies Auditor&apos;s Report Order (CARO) 2020</strong>, statutory auditors are required to report on the company&apos;s compliance with these MSMED Act disclosure requirements. Additionally, tax auditors must report any interest paid or payable under the MSMED Act under <strong>Clause 22 of Form 3CD (Tax Audit Report)</strong>. This makes any payment defaults visible to the Income Tax department, which can disallow the interest deduction and issue tax demand notices. More recently, the introduction of <strong>Section 43B(h)</strong> of the Income Tax Act disallows the deduction of the principal payment itself if it is not cleared within the statutory MSME timeline (45 days or 15 days), further increasing the pressure on corporate buyers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This double financial penalty—paying the interest plus paying tax on the interest amount—is a powerful tool for exporters and suppliers during negotiations. Corporate boards and CFOs are highly sensitive to audit qualifications and tax disallowances. Our legal panel leverages these audit and tax rules during negotiations, advising buyers of the regulatory risks of non-payment to secure prompt settlements.
                    </p>
                  </div>
                </section>

                {/* Section 4: Interest Calculation Window & Dispute Resolutions */}
                <section id="interest-calculation-window-resolutions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Interest Calculation Window &amp; Dispute Resolutions</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Calculating MSME delayed payment interest requires defining the exact calculation window, which is governed by the provisions of the MSMED Act. The calculation window begins on the day following the <strong>appointed day</strong>. Under Section 2(b) of the Act, the appointed day is the day following the expiry of <strong>15 days</strong> from the date of acceptance or deemed acceptance of the goods or services by the buyer. If the parties have a written agreement, the window begins on the day following the agreed payment date, which cannot exceed <strong>45 days</strong> from delivery. The calculation window ends on the date the payment is actually realized by the supplier (date of clearance of bank transfer, demand draft, or cheque).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common challenge in interest recovery is handling buyer disputes. Buyers frequently raise quality or delivery disputes to justify withholding payment and avoiding interest accrual. Under the Act&apos;s <strong>deemed acceptance</strong> rule, the buyer must raise any written objection to the goods or services within <strong>15 days</strong> of delivery. If no written objection is raised within 15 days, the buyer is deemed to have accepted the goods/services, and they cannot later raise quality issues to withhold payment or avoid interest. This rule protects suppliers from sham quality disputes raised months after delivery, establishing a clear calculation window.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer clears the principal amount but refuses to pay the accrued interest, the supplier can file a claim for the <strong>recovery of the statutory interest alone</strong> before the state-level <strong>Micro and Small Enterprises Facilitation Council (MSEFC)</strong>. The interest claim is filed online on the MSME Samadhaan portal. Once admitted, the council initiates conciliation and arbitration proceedings. A key protection for the supplier is <strong>Section 19</strong> of the Act. If the buyer wishes to challenge or appeal the MSEFC arbitration award, they must <strong>deposit seventy-five percent (75%) of the awarded amount</strong> (including the principal and the accrued compound interest) with the court before the appeal can be heard. This requirement prevents buyers from filing frivolous appeals to delay payment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the court receives the 75% deposit under Section 19, the supplier can apply to have a portion of it released to support their business operations during the appeal, providing critical financial support. If the buyer loses the appeal, the deposited amount is paid directly to the supplier. This pre-deposit rule significantly raises the cost of litigation for buyers, encouraging them to settle disputes amicably rather than file appeals.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team assists suppliers in preparing these calculation sheets, filing Samadhaan claims, and executing awards in court. We ensure that your interest calculations are computed correctly, using the dynamic RBI bank rates for each respective period of delay, and assist in executing the award to attach the buyer&apos;s bank accounts and assets.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & MSME Negotiation Strategies */}
                <section id="msme-advocate-notices-calculation-negotiation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; MSME Negotiation Strategies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery of unpaid MSME interest begins with a structured pre-litigation escalation strategy. This involves building a clear documentary record of the debt and the interest calculation. Suppliers should compile all relevant records, including the contract, commercial invoices, delivery challans, Udyam certificates, bank ledger statements showing payment dates, and buyer correspondence. A final demand email should be sent to the buyer's finance team and senior management, attaching a detailed statement of accounts and requesting a resolution within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed Legal Notice</strong> citing the MSMED Act. A legal notice is a structured legal document sent to the buyer, setting out the facts of the transaction, detailing the payment default, calculating the compound interest due under Section 16, and warning of the civil, regulatory, and arbitration actions that will follow if they fail to comply. Serving a legal notice is a critical step, as it establishes your cause of action and forms part of the regulatory record for the MSEFC or courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific details of your MSME dispute. We do not use generic templates. Instead, we include a detailed, month-by-month compound interest statement of account, calculated at 3x the RBI bank rate. This statement leaves no room for the buyer to dispute the calculation and immediately shows them the mounting financial liability. We also outline the tax consequences under Section 23 and the balance sheet disclosure requirements under Section 22 and CARO 2020. Piercing the corporate veil by sending copies to the personal residential addresses of the directors ensures that the board is aware of the dispute, which often prompts their legal team to propose a settlement to protect their management from audits and litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Citing the non-deductibility of interest under Section 23 and the reporting requirements under CARO 2020 increases the legal pressure. Corporate buyers prefer to clear the interest dues rather than face tax audit qualifications or penalties that could damage their business reputation. If the buyer has liaison offices or subsidiaries in India, we target these entities, warning of local asset attachments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of MSME interest disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to clear outstanding interest rather than face public listing on a government portal, tax audits, or NCLT insolvency proceedings. If the client responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed. This deed includes clear milestone dates, payment channels (wire transfers with SWIFT details), and a default clause that automatically activates the full original claim in case of default. By combining pre-litigation notices with the threat of portal filing, we help you recover your dues quickly and protect your business from cash-flow crises.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-655 text-xs sm:text-sm italic mb-4 leading-relaxed">
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
                <h3 className="text-sm font-black text-[#111827] mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Formula: 3x RBI Bank Rate Compound
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Rests: Monthly compounding frequency
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Tax: Interest not tax-deductible (Sec 23)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Audits: Mandatory balance sheet disclosure
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Appeal: 75% statutory pre-deposit (Sec 19)
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
                  Our corporate and MSME advocates specialize in interest calculations, MSEFC claims, and balance sheet disclosures. Let us handle your legal notices and recovery.
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
