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
    question: "Who is eligible to file a claim under the MSMED Act, 2006?",
    answer: "Only Micro and Small Enterprises (MSEs) holding a valid Udyam Registration can file claims for delayed payments under the Act. Medium enterprises are excluded from using the MSEFC facilitation council mechanism."
  },
  {
    question: "What is the statutory time limit for buyers to pay MSMEs?",
    answer: "Under Section 15 of the MSMED Act, payments must be made on or before the date agreed in writing, which cannot exceed forty-five (45) days from acceptance. If there is no written agreement, it must be cleared within 15 days of delivery."
  },
  {
    question: "What is the penalty for delayed payment to an MSME?",
    answer: "Section 16 mandates that buyers pay compound interest with monthly rests on the outstanding amount at three times (3x) the RBI bank rate from the due date until realization."
  },
  {
    question: "Does MSME protection apply if I obtained registration after the transaction?",
    answer: "No, the Supreme Court in Silpi Industries (2021) ruled that the MSMED Act operates prospectively. You must be registered as an MSME at the time of entering the contract or delivering the goods/services."
  },
  {
    question: "Can the buyer contractually waive or reduce the 3x RBI interest rate?",
    answer: "No, Section 24 of the Act gives its provisions an overriding effect over any other laws or private agreements. Any contract clause attempting to waive or reduce the statutory interest rate is void."
  },
  {
    question: "How does the MSME Samadhaan portal work?",
    answer: "It is an online platform (samadhaan.msme.gov.in) where micro and small businesses file delayed payment applications. The complaint is sent to the regional MSEFC for conciliation and arbitration."
  },
  {
    question: "What is the Section 19 pre-deposit requirement for appealing an MSEFC award?",
    answer: "To appeal or challenge an MSEFC award in court, the buyer must deposit seventy-five percent (75%) of the awarded amount (principal + interest) with the court, preventing frivolous appeals."
  },
  {
    question: "Can a trader file a case on the MSME Samadhaan portal?",
    answer: "While traders can obtain Udyam registration for priority sector lending, the benefits of delayed payment under Chapter V of the MSMED Act are generally restricted to manufacturing and service enterprises."
  },
  {
    question: "How is an MSEFC arbitration award enforced against a defaulting buyer?",
    answer: "An MSEFC arbitration award is executed in the same manner as a civil court decree. You can file an execution petition in the local court to attach the buyer's bank accounts, assets, or property."
  },
  {
    question: "Can I claim MSME interest if my invoice doesn't mention my Udyam registration?",
    answer: "Yes, the right to interest is statutory under Section 16. However, mentioning your Udyam number and the MSMED Act 45-day payment clause on your invoices is highly recommended as a deterrent."
  },
  {
    question: "Is a lawyer required to file a complaint on the Samadhaan portal?",
    answer: "No, the portal is designed for self-filing. However, during council hearings or subsequent arbitration, engaging a qualified advocate helps present the contractual evidence effectively."
  },
  {
    question: "What happens to the buyer's income tax deduction on unpaid MSME interest?",
    answer: "Under Section 23 of the MSMED Act, the interest paid or payable to an MSME on delayed payments is not allowed as a tax deduction. This increases the buyer's tax liability, serving as an additional deterrent."
  },
  {
    question: "What is the difference between 'deemed acceptance' and 'actual acceptance' of goods/services?",
    answer: "Actual acceptance is when the buyer signs the delivery challan or acknowledges receipt. Deemed acceptance occurs if the buyer does not raise any written objection to the goods or services within 15 days of delivery."
  },
  {
    question: "Can I file an MSME claim against a government department or PSU?",
    answer: "Yes, the definition of a buyer under Section 2(d) of the MSMED Act includes government departments, public sector undertakings (PSUs), state enterprises, and private limited companies."
  },
  {
    question: "How does the MSME payment rule affect the buyer's GST input tax credit (ITC)?",
    answer: "Under GST laws, if a buyer fails to pay the supplier within 180 days from the invoice date, the buyer must reverse the Input Tax Credit (ITC) claimed on that invoice, along with 18% p.a. interest, until they make the payment."
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
      "name": "MSME Dues Recovery",
      "item": "https://www.legalrecovery.in/recovery/msme-dues"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Outstanding MSME Dues & B2B Delayed Payments | Legal Guide",
  "description": "Exhaustive legal guide on MSME payment recovery under MSMED Act 2006, Section 15 & 16 interest penalties, Samadhaan portal filing, and MSEFC arbitration.",
  "image": "https://www.legalrecovery.in/og-msme-dues.png",
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
  "name": "MSME Dues Recovery Services",
  "image": "https://www.legalrecovery.in/og-msme-dues.png",
  "description": "Advocate-backed legal assistance for recovering outstanding B2B MSME dues, delayed payments, and MSEFC filing support.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "620"
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
        "name": "Ramesh Chawla"
      },
      "reviewBody": "Our engineering components manufacturing unit had an outstanding bill of ₹12,00,000 pending with a major automobile MNC for over 8 months. LegalRecovery drafted a highly technical notice citing Section 15 and 16 of the MSMED Act and assisted us in filing on the MSME Samadhaan portal. Facing MSEFC arbitration and penal compound interest, the MNC cleared the entire dues within 20 days. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Nair"
      },
      "reviewBody": "As a micro IT services agency, we were struggling to recover our final milestone payment of ₹8,50,000 from a corporate client who kept shifting goalposts. LegalRecovery helped us document our deliverables, reference our Udyam Certificate, and file a case. The MSEFC conciliation summoned the client’s directors, and they settled the amount immediately. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Alok Deshmukh"
      },
      "reviewBody": "A large retail brand delayed payments for our packaging boxes shipment by 6 months. LegalRecovery served a formal notice calculated at 3x the RBI bank rate compound interest. The brand’s legal counsel advised their management to pay to avoid the tax non-deductibility under Section 23 of the Act. We recovered our principal and delayed interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Harish Gupta"
      },
      "reviewBody": "We were facing payment defaults from a public sector undertaking (PSU) for over a year, which choked our chemical manufacturing plant’s cash flow. LegalRecovery drafted a formal representation and notice. The PSU resolved our billing issues under MSEFC mediation, clearing ₹24,00,000 in arrears."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shruti Iyer"
      },
      "reviewBody": "A corporate client tried to challenge our MSEFC award in court. LegalRecovery enforced the Section 19 provision, making them deposit 75% of the total award. Seeing they had no escape, the client agreed to a structured settlement deed, and we got our funds. Brilliant legal support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunil Bhatia"
      },
      "reviewBody": "A buyer raised a fake quality dispute to withhold payment for plastic molds. LegalRecovery’s panel advocates successfully contested the quality claims in the arbitration phase by presenting our pre-dispatch inspection reports. The arbitrator ordered the buyer to clear all dues with penal interest. Incredible result!"
    }
  ]
};

export default function MSMEDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "msme-payment-defaults-realities", title: "1. MSME Payment Defaults & Economic Realities" },
    { id: "msmed-act-statutory-protections", title: "2. Statutory Protections Under the MSMED Act, 2006" },
    { id: "msme-samadhaan-msefc-process", title: "3. The MSME Samadhaan Portal & MSEFC Process" },
    { id: "msme-alternative-legal-remedies", title: "4. Alternative Legal Remedies for MSME Dues" },
    { id: "msme-advocate-notices-negotiation", title: "5. Advocate Notices & MSME Negotiation Strategies" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "MSME Dues Recovery", href: "/recovery/msme-dues" },
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
              India&apos;s Premium MSME Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">MSME Dues</span> &amp; B2B Payments
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with outstanding B2B payments from corporate buyers? Get expert legal assistance to recover your MSME dues under the MSMED Act, 2006. Claim statutory 3x RBI interest and file MSEFC cases.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start MSME Recovery
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
                
                {/* Section 1: MSME Payment Defaults & Economic Realities */}
                <section id="msme-payment-defaults-realities" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. MSME Payment Defaults &amp; Economic Realities</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the commercial landscape of India, Micro, Small, and Medium Enterprises (MSMEs) represent the backbone of the economy, driving industrial growth, generating employment, and acting as critical suppliers of goods and services to larger corporations. These enterprises operate on highly optimized business structures and tight working capital cycles. Exporters and domestic vendors ship raw materials, manufacture precision parts, or execute IT and professional service contracts, expecting payment within standard commercial timelines. However, in the B2B ecosystem, buyers—ranging from large private limited companies and multinational conglomerates to public sector undertakings (PSUs)—frequently delay payments. Corporate buyers often treat outstanding vendor payables as interest-free working capital, delaying invoice clearances for 90, 120, or even 180 days, which puts immense pressure on the small business.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This delay in payments creates a severe liquidity crisis for small businesses. Unlike large buyers, micro and small enterprises (MSEs) lack access to extensive bank credit or venture funding to bridge long payment gaps. When a buyer defaults, the supplier struggles to cover their own essential costs: paying staff salaries, purchasing raw materials for subsequent orders, paying electricity bills, and servicing bank credit facilities like cash credit (CC) or bank overdrafts. The resulting cash-flow squeeze can quickly escalate into business insolvency. Exporters are also affected, as unpaid export bills can lead to the clawback of domestic export benefits and incentives like the duty drawback (DBK) or RoDTEP, causing additional financial stress.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is critical to distinguish MSME dues defaults from other common recovery scenarios, such as unpaid salary claims, rental or security deposit disputes, and consumer contract cancellations. Salary recovery is governed by labor codes and state-specific Shops and Commercial Establishments Acts, designed to protect employees. Rental security deposit disputes or flat booking cancellation claims are covered by the Rent Control Act or the Real Estate Regulatory Authority (RERA), which protect consumers or tenants. In contrast, MSME dues recovery is a commercial B2B transaction governed by the provisions of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, the Indian Contract Act, 1872, and the Code of Civil Procedure, 1908. Recovering these commercial debts requires navigating cross-border trade practices, goods delivery tracking, quality dispute resolutions, and statutory mediation procedures before the state-appointed facilitation councils.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The financial damage caused by delayed payments to a small business is compounded by tax and regulatory requirements. Under Section 16(4) of the Central Goods and Services Tax (CGST) Act, 2017, a buyer must pay the supplier within 180 days from the invoice date. If the buyer defaults, they must reverse any Input Tax Credit (ITC) claimed on the transaction, along with interest at 18% p.a., until they pay the supplier. This rule was designed to encourage prompt payments, but in practice, buyers often demand that suppliers continue supplying goods while withholding payments, shifting the tax burden to the small business. The supplier must also pay GST to the government on an accrual basis when issuing the invoice, even if they have not received the payment, which can exhaust their cash reserves and lead to bank account freezing.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Moreover, corporate buyers frequently exploit their bargaining power to force small suppliers into accepting unfavorable payment terms or deep price cuts. They may raise retroactive quality disputes, claiming the supplied goods were defective or the service milestones were incomplete, only when the invoice becomes due. By geographical distance or threats of contract termination, buyers pressure small vendors into waiving interest or accepting partial settlements. Navigating these B2B payment defaults requires a structured approach that combines statutory protections, documented evidence of delivery, and strategic escalation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel specializes in helping registered micro and small businesses recover outstanding payments from defaulting buyers. We analyze your commercial invoices, purchase orders, delivery challans, Udyam certificates, and buyer communications to build a strong evidence dossier. By serving structured statutory notices citing the MSMED Act, filing cases on the MSME Samadhaan portal, and representing you before the MSEFC, we help protect your business from cash-flow crises. We help you assert your rights, ensuring that corporate buyers respect their contractual and statutory obligations.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;MSME dues are commercial debts protected by central legislation. Recovering these payments requires a combination of Udyam registration, contract enforcement, and MSEFC facilitation to protect your business.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Statutory Protections Under the MSMED Act, 2006 */}
                <section id="msmed-act-statutory-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Statutory Protections Under the MSMED Act, 2006</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To address the issue of delayed payments to micro and small businesses, the Parliament enacted the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>. The Act provides a powerful statutory framework designed to protect small suppliers from the financial pressure of corporate payment defaults. The core protections are set out in Chapter V of the Act, which establishes clear payment rules, interest penalties, and dispute resolution mechanisms. These provisions override any private contracts or agreements between the parties, providing a robust legal shield for registered suppliers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary statutory protection is <strong>Section 15</strong> of the MSMED Act, which mandates a strict payment timeline. Under Section 15, when a registered MSME supplier provides goods or services to a buyer, the buyer must make the payment on or before the date agreed upon in writing. Crucially, the law mandates that this agreed credit period <strong>cannot exceed forty-five (45) days</strong> from the date of acceptance or deemed acceptance of the goods or services. If there is no written agreement, the payment must be made within <strong>15 days</strong> of delivery. Any contract clause that attempts to extend the credit window beyond 45 days is legally void. If the buyer fails to pay within this statutory window, they commit a direct violation of the Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer defaults, <strong>Section 16</strong> of the MSMED Act imposes a severe financial penalty. The buyer is legally liable to pay <strong>compound interest with monthly rests</strong> on the outstanding amount. The interest rate is fixed at <strong>three times (3x) the bank rate</strong> notified by the Reserve Bank of India (RBI). This rate is significantly higher than standard commercial lending rates or civil court interest rates, serving as a powerful deterrent against buyers who delay payments to manage their cash flow. The interest begins accruing automatically from the day following the statutory due date, and the buyer cannot contractually waive or reduce this rate. Under Section 24, these provisions have an overriding effect, prevailing over any other law or private agreement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another important protection is that under Section 23 of the MSMED Act, the interest paid or payable by a buyer under Section 16 is <strong>not allowed as a tax deduction</strong> under the Income Tax Act, 1961. This means the buyer must pay the penal interest out of their net profits, and cannot claim it as a business expense, significantly increasing the financial cost of delaying payments. To avail of these statutory protections, the supplier must qualify as a &apos;supplier&apos; under Section 2(n), which requires having a valid <strong>Udyam Registration</strong> (formerly EM-II or Udyog Aadhaar). The Supreme Court, in landmark cases like <strong>Silpi Industries v. Kerala State Road Transport Corporation (2021)</strong> and <strong>Gujarat State Civil Supplies Corporation v. Mahakali Foods (2022)</strong>, has confirmed that these benefits apply prospectively. The supplier must hold a valid registration at the time the contract is signed or the goods/services are delivered; registration obtained after the dispute arose cannot be applied retroactively to prior transactions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The distinction between &quot;actual acceptance&quot; and &quot;deemed acceptance&quot; under Section 2 of the Act is also critical. Actual acceptance is when the buyer acknowledges receipt of the goods or services. Deemed acceptance occurs if the buyer does not raise any written objection regarding the quality or quantity of the supplied items within **15 days** of delivery. If no objection is raised, the buyer is deemed to have accepted the goods, and they cannot later raise quality issues to withhold payment, making it easier for the supplier to establish their claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team helps MSME suppliers verify their eligibility, audit their contracts and invoices, and calculate the statutory compound interest. We assist in preparing Udyam registration certificates and compiling the evidence required to enforce Section 15 and 16 rights, protecting your business from corporate defaults and helping to secure the payments.
                    </p>
                  </div>
                </section>

                {/* Section 3: The MSME Samadhaan Portal & MSEFC Process */}
                <section id="msme-samadhaan-msefc-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. The MSME Samadhaan Portal &amp; MSEFC Process</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To simplify the recovery process, the Ministry of MSME launched the <strong>MSME Samadhaan Portal</strong> (samadhaan.msme.gov.in). This electronic portal allows registered micro and small enterprises to file claims online against defaulting buyers, bypassing slow civil courts. The application must include details of the outstanding invoices, purchase orders, proof of delivery (such as signed delivery challans or lorry receipts), and a calculation of the principal and statutory compound interest due under Section 16 of the MSMED Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the online application is submitted and verified by the regional office, it is referred to the state-level <strong>Micro and Small Enterprises Facilitation Council (MSEFC)</strong>. The MSEFC process is structured as a two-stage dispute resolution mechanism:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Conciliation Phase:</strong> Under Section 18(2) of the Act, the council first attempts to resolve the dispute through conciliation. The council issues summons to the buyer, directing them to appear for joint mediation sessions. If the parties reach an agreement, a formal conciliation deed is signed, which is legally binding. If the buyer fails to appear or refuses to settle, the conciliation is declared failed.</li>
                      <li><strong>Arbitration Phase:</strong> Under Section 18(3), if conciliation fails, the council takes up the dispute for arbitration itself or refers it to an alternative dispute resolution center. The council acts as an arbitral tribunal under the Arbitration and Conciliation Act, 1996, conducting hearings, examining evidence, and issuing a binding arbitration award for the principal and compound interest.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      A major advantage of the MSEFC process is the protection provided under <strong>Section 19</strong> of the MSMED Act. If the buyer wishes to appeal or challenge the MSEFC arbitration award in a higher court, the law mandates that they must <strong>deposit seventy-five percent (75%) of the awarded amount</strong> (including both the principal and the accrued compound interest) with the court before the appeal can be heard. This requirement prevents buyers from filing frivolous appeals simply to delay payment, ensuring that the supplier&apos;s dues are secured during litigation. Once the award is passed, it can be executed in the local civil court as a decree, allowing for the attachment of the buyer&apos;s bank accounts and assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The MSEFC arbitration award carries the same weight as a civil court decree, and the local court can execute it directly. If the buyer fails to pay the awarded amount, the supplier can file an execution petition to attach the buyer&apos;s office assets, bank accounts, or other property. The council also has the power to summon the buyer&apos;s financial records and bank statements to verify their ability to pay, protecting the supplier from bad-faith defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our team guides MSME suppliers through the entire Samadhaan filing and MSEFC process. We draft the initial portal petition, represent you during the conciliation meetings, present the evidence during the arbitration hearings, and assist in executing the final award in court to secure the payments.
                    </p>
                  </div>
                </section>

                {/* Section 4: Alternative Legal Remedies for MSME Dues */}
                <section id="msme-alternative-legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Alternative Legal Remedies for MSME Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While the MSEFC facilitation council is the primary forum for recovery, exporters and B2B vendors can also utilize alternative legal remedies depending on the debtor's profile and contract terms. If the defaulting buyer has active operations and assets in India, the supplier can file a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. Order 37 is a fast-track civil remedy for recovering liquidated debts arising from written contracts, signed invoices, or bills of exchange. Unlike regular civil suits, the defendant does not have an automatic right to defend the case; they must apply for &apos;Leave to Defend&apos; within 10 days of receiving the summons. If their defense is found to be a sham or delay tactic, the court will deny leave and pass a decree in favor of the supplier.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another effective recovery tool is the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>, which is highly effective against corporate buyers. Under the IBC, MSME suppliers are classified as <strong>Operational Creditors</strong>. If a corporate buyer defaults on paying outstanding invoices above the statutory threshold (currently ₹1 crore), the supplier can serve a formal demand notice under Section 8 of the IBC. If the company fails to pay or show a pre-existing dispute within 10 days, the supplier can petition the National Company Law Tribunal (NCLT) to initiate corporate insolvency proceedings. The threat of losing control of the company often forces directors to clear outstanding debts immediately during the notice period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, if the buyer issued cheques for payment that subsequently bounced due to insufficient funds, the supplier can initiate criminal proceedings under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. The supplier must serve a statutory 15-day notice within 30 days of the cheque bounce. If the buyer fails to pay within 15 days, the supplier can file a criminal complaint before a judicial magistrate. The threat of criminal prosecution, fines up to double the cheque amount, and imprisonment often forces immediate settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For disputes containing an <strong>Arbitration Clause</strong> in the agreement, the supplier can initiate independent arbitration under the Arbitration and Conciliation Act, 1996. Arbitration provides a private, structured forum outside the civil courts, resulting in a binding arbitral award that can be executed as a court decree. The supplier can also file a civil recovery suit under the Commercial Courts Act, 2015 if the claim value exceeds ₹3 lakh, which provides a fast-track commercial trial path.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Exporters can also check if the buyer has local assets, subsidiaries, or liaison offices in India that can be attached under Section 230 of the Contract Act. Our legal team evaluates your agreement and the buyer&apos;s financial profile to recommend the most effective recovery path, whether through MSEFC, civil courts, NCLT, or criminal action.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & MSME Negotiation Strategies */}
                <section id="msme-advocate-notices-negotiation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; MSME Negotiation Strategies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery of unpaid MSME dues begins with a structured pre-litigation escalation strategy. This involves building a clear documentary record of the debt. Suppliers should compile all relevant records, including the contract, commercial invoices, packing lists, delivery challans, Udyam certificates, and buyer correspondence. A final demand email should be sent to the buyer's finance team and senior management, attaching a detailed statement of accounts and requesting a resolution within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed Legal Notice</strong> citing the MSMED Act. A legal notice is a structured legal document sent to the buyer, setting out the facts of the transaction, detailing the payment default, calculating the compound interest due under Section 16, and warning of the civil, regulatory, and arbitration actions that will follow if they fail to comply. Serving a legal notice is a critical step, as it establishes your cause of action and forms part of the regulatory record for the MSEFC or courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific details of your MSME dispute. We do not use generic templates. Instead, we highlight the contract terms, the provisions of the MSMED Act, the 45-day payment limit, and the personal liability of the company's directors. We send the notice via Registered Speed Post with Acknowledgment Due (AD) to the company's registered corporate office, and send copies to the personal residential addresses of the directors. Piercing the corporate veil in this manner ensures that the directors are personally aware of the dispute, which often prompts the company's legal team to propose a settlement to protect their management from litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The notice also demands interest under Section 16 of the Act. Citing the statutory compound interest (typically three times the RBI bank rate) raises the financial stakes for the buyer, encouraging them to prioritize the settlement. We also outline the potential tax consequences under Section 23 of the Act, which denies tax deductions on MSME interest, increasing their tax liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, we leverage notifications to trade bodies and chambers of commerce to impact the buyer&apos;s business reputation. This can prompt them to resolve the dispute to protect their creditworthiness. If the buyer responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed that covers both the payment timeline and the release of any deliverables, helping you protect your business interests.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of MSME dues disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to clear outstanding invoices rather than face public litigation, NCLT insolvency proceedings, or compound interest penalties that could damage their business operations. We ensure that your settlement terms are legally binding, providing a fast-track recovery.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-650 text-xs sm:text-sm italic mb-4 leading-relaxed">
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
                    Limits: 45 Days max Credit (Sec 15)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Penal Interest: 3x RBI Bank Rate (Sec 16)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Samadhaan: MSEFC statutory arbitration
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Appeal Pre-Deposit: 75% Award (Sec 19)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Tax: No deduction on MSME Interest (Sec 23)
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
                  Our corporate and MSME advocates specialize in MSEFC filings, Samadhaan claims, and fast-track debt recovery. Let us handle your legal notices and arbitration.
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
