'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What legal actions can I take if an interior designer abandons the project after taking a 70% advance?",
    answer: "If an interior designer abandons your project after collecting a substantial advance, you can initiate civil and consumer actions. First, you should serve a formal legal notice demanding either the immediate completion of the work or a full refund of the unutilized advance payment within 15 days. If they fail to comply, you can file a consumer complaint for deficiency in service and unfair trade practices under the Consumer Protection Act, 2019, before the District Consumer Commission. Alternatively, you can file a civil suit for breach of contract and recovery of money under the Indian Contract Act, 1872. If there is clear dishonest intent from the inception, you may also file a criminal complaint for cheating and criminal breach of trust under the Bharatiya Nyaya Sanhita."
  },
  {
    question: "Can I get my money back from an interior contractor who did substandard work?",
    answer: "Yes, you can recover money spent on substandard or defective renovation work. Under the Consumer Protection Act, 2019, delivering defective work, using inferior materials contrary to the agreed specifications, and failing to adhere to professional standards constitutes a deficiency in service. You can demand a refund of the amount charged for the defective portions, compensation for the damage caused to your property, and additional funds to cover the cost of rectifying the errors. To support your claim, you should document the substandard work with high-quality photographs, video recordings, and, if possible, obtain a technical valuation report from an independent architect or a certified civil engineer."
  },
  {
    question: "How does the Specific Relief Act help in home renovation disputes?",
    answer: "The Specific Relief Act, 1963, provides critical remedies for homeowners facing defaulting contractors. Specifically, Section 20 of the Act, which was amended in 2018, introduces the remedy of substituted performance. This allows a homeowner, upon a breach by the interior designer, to get the incomplete work performed by a third party or their own agency and recover the actual expenses and costs incurred from the defaulting designer. Before executing this, you must give a written notice of not less than 30 days to the defaulting contractor, calling upon them to complete the work within the specified time. If they refuse, you can proceed with the third party and sue to recover the costs."
  },
  {
    question: "What constitutes a 'deficiency in service' by an interior decorator under the Consumer Protection Act?",
    answer: "Under the Consumer Protection Act, 2019, deficiency is defined as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance which is required to be maintained by or under any law or has been undertaken to be performed in relation to any service. For an interior decorator, this includes abandoning the site midway, using sub-standard wood or hardware instead of premium brands specified in the contract, failing to provide electrical and plumbing layouts leading to safety hazards, delaying delivery past agreed timelines without justification, and charging for services or materials that were never delivered."
  },
  {
    question: "What is the time limit to file a money recovery case against an interior designer in India?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or initiate arbitration against a defaulting interior designer is three years. This three-year period begins from the date the cause of action arises. In renovation disputes, the cause of action typically arises on the date the project was abandoned, the date the contractor refused to refund the advance, or the final contractual completion deadline. For consumer complaints, the limitation period is two years from the date on which the cause of action arose. It is essential to act quickly and serve a legal notice well within these timelines to preserve your legal rights."
  },
  {
    question: "Can I sue an interior designer if we only had a verbal agreement and WhatsApp chats?",
    answer: "Yes, you can initiate legal proceedings even without a formal signed contract. Under Section 10 of the Indian Contract Act, 1872, oral agreements are legally valid and binding if they are made with the free consent of parties competent to contract, for a lawful consideration, and with a lawful object. You can establish the terms of the agreement using secondary evidence such as bank transfer records showing the advance payments, WhatsApp chat logs discussing timelines, design approvals, and material choices, emails, and cost estimates sent by the designer. These records serve as strong electronic evidence under Section 65B of the Indian Evidence Act, or the corresponding provisions of the Bharatiya Sakshya Adhiniyam."
  },
  {
    question: "Can I hire another contractor to finish the work and charge the cost to the defaulting designer?",
    answer: "Yes, this is legally permissible under the principle of substituted performance codified in Section 20 of the Specific Relief Act, 1963. To do this legally, you must first serve a written notice to the defaulting interior designer giving them a minimum of 30 days to complete the work. If they fail to complete the work within this period, you can hire a new contractor or agency to finish the project. You must maintain detailed invoices, bills, and payment records for the new contractor. After the work is completed, you can file a recovery suit or consumer complaint to recover all the costs, expenses, and damages from the original defaulting designer."
  },
  {
    question: "Where should I file a consumer complaint against my home renovation contractor?",
    answer: "You must file your consumer complaint before the District Consumer Disputes Redressal Commission (District Commission) if the total value of the services paid and the compensation claimed does not exceed 50 Lakhs. If the claim value is between 50 Lakhs and 2 Crores, you must file it before the State Consumer Disputes Redressal Commission (State Commission). For claims exceeding 2 Crores, the complaint lies with the National Commission. You can file the complaint online through the e-Daakhil portal. The complaint can be filed where you reside, where the contractor's office is located, or where the work was being executed."
  },
  {
    question: "What damages can I claim in a legal notice to a defaulting interior design studio?",
    answer: "In your legal notice, you can claim several types of damages and recoveries. First, demand the refund of the unutilized advance payment. Second, claim direct financial damages for the cost of rectifying substandard work. Third, claim consequential damages, such as rental expenses incurred if you had to live in rented accommodation due to project delays. Fourth, claim interest on the blocked funds, typically calculated at 12% to 18% per annum from the date of default. Finally, you can demand compensation for mental agony, harassment, and the legal costs associated with drafting and serving the notice."
  }
];

const reviews = [
  {
    author: "Vikram Malhotra (Bengaluru)",
    rating: "5",
    text: "I paid an advance of 8 Lakhs to a boutique design studio in Bengaluru for my 3BHK apartment. After installing basic plywood frames, the designer stopped attending calls and abandoned the project. I served a formal legal notice invoking Section 20 of the Specific Relief Act for substituted performance and demanding a refund of the unused advance. Within 12 days, their legal team contacted me, returned unused raw materials, and refunded 4.5 Lakhs. This legal route saved me from complete financial loss."
  },
  {
    author: "Deepika Sen (Mumbai)",
    rating: "5",
    text: "Our renovation contractor delayed our flat completion by nine months and used sub-standard commercial plywood instead of the waterproof plywood specified in the agreement. We served a legal notice under the Consumer Protection Act and subsequently filed a complaint with e-Daakhil. The District Consumer Commission ruled in our favor, ordering the contractor to refund the excess advance, pay 1.5 Lakhs for rectification, and 1 Lakh in damages for mental agony."
  },
  {
    author: "Aditya Hegde (Hyderabad)",
    rating: "5",
    text: "We did not have a formal contract, only an email quotation and WhatsApp chats. The designer took 5 Lakhs advance and vanished. By compiling all WhatsApp chats, payment slips, and photos of the empty flat, we sent a lawyer-backed notice for recovery of money. The designer realized the evidence was solid and agreed to a settlement, paying back the advance in three installments. I highly recommend compiling digital records immediately."
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
      "name": "Legal Notice to Interior Designer for Incomplete Work",
      "item": "https://www.legalrecovery.in/legal-notice-to-interior-designer-contractor-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Interior Designer or Renovation Contractor for Incomplete Work",
  "description": "Learn how to send a legal notice to interior designer for incomplete work. Recover advance payments and claim damages for abandoned or delayed home renovation disputes.",
  "image": "https://www.legalrecovery.in/og-interior-designer-refund.png",
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
  "name": "Interior Designer Dispute Recovery Plan",
  "image": "https://www.legalrecovery.in/og-interior-designer-refund.png",
  "description": "A tactical legal roadmap to draft, serve, and recover advances and claim damages from defaulting interior designers and renovation contractors in India.",
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

export default function InteriorDesignerRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-disputes", title: "Understanding Interior Design and Renovation Disputes" },
    { id: "specific-relief-act", title: "Specific Performance and Substituted Performance Remedies" },
    { id: "consumer-protection-act", title: "Consumer Rights and Deficiency in Service Options" },
    { id: "recovery-options-matrix", title: "Choosing Your Legal Route: Consumer Court vs. Civil Suit" },
    { id: "drafting-serving-notice", title: "How to Draft and Serve the Legal Notice Correctly" },
    { id: "step-by-step-process", title: "Step-by-Step Recovery Roadmap for Homeowners" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Collection Checklist" },
    { id: "client-case-studies", title: "Success Stories: How Homeowners Recovered Their Advances" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice to Interior Designer for Incomplete Work", href: "/legal-notice-to-interior-designer-contractor-refund" }
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
              Consumer Protection & Property Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice to Interior Designer: <span className="text-[#DC2626]">Recover Incomplete Work Refunds</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Leverage the Specific Relief Act and Consumer Protection laws to reclaim advance payments, recover raw materials, and claim damages from defaulting renovation contractors.
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
                  Homeowners across India frequently pay massive advances to interior design studios, architects, or renovation contractors. Unfortunately, these service providers often abandon the project halfway, deliver highly substandard work, or delay timelines indefinitely while refusing to refund the unused advance or return paid materials. This guide details how you can leverage statutory provisions under the Specific Relief Act, 1963, and the Consumer Protection Act, 2019, to send a formal legal notice, recover your funds, and claim substantial damages.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Hiring an interior decorator or renovation contractor is a significant emotional and financial investment. In major Indian cities, modern residential interior packages range from a few lakhs to multiple crores. The industry is highly unorganized, characterized by informal quotes, lack of standard execution agreements, and a massive imbalance in power once advance payments are disbursed. Typically, contractors demand a heavy advance (ranging from 50% to 80% of the total estimate) before initiating work, claiming they need to secure raw materials and pay labor.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Once they receive these funds, many default. They may stop responding to calls, delay construction timelines for months, deliver work that deviates completely from approved 3D renders, or abandon the site entirely. When confronted, they refuse to return unused materials or refund the unutilized portion of the advance payment. Homeowners are left stranded with half finished, unlivable spaces, forced to pay rent elsewhere while their hard earned money remains stuck. 
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In these situations, standard customer support escalations or online reviews are insufficient. Homeowners must take strategic legal steps. Initiating recovery action through a formal <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is the most effective pre-litigation step. A well drafted notice, backed by statutory provisions under Indian civil and consumer law, bypasses informal communication channels and forces the contractor to confront their liability.
                </p>
              </div>

              {/* Section 1: Understanding Interior Design and Renovation Disputes */}
              <section id="understanding-disputes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Interior Design and Renovation Disputes
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Interior design and home renovation disputes generally fall under three categories: project abandonment, substandard execution, and infinite timeline delays. Each category presents unique challenges but shares a common theme, which is the contractor withholding customer funds while failing to perform their obligations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Project abandonment is the most severe default. In this scenario, the interior designer or studio collects a significant advance, performs minor initial demolition or basic brickwork, and subsequently ceases operations. They may cite material shortages, labor disputes, or cash flow difficulties, eventually shutting down communications entirely. The homeowner is left with a demolished site, missing raw materials (such as modular boards, wires, or plumbing fittings that were paid for), and no clear path to completion.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Substandard execution involves situations where the contractor completes the work but the quality of materials and workmanship is extremely poor. Common examples include using commercial-grade blockboards instead of the boiling waterproof plywood agreed in the quotation, installing defective laminates, poor alignment of modular units, faulty electrical wiring, or leaky plumbing fittings. These errors not only ruin the aesthetics of the home but also create long-term structural and safety hazards.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Timeline delays occur when the contractor prolongs the project indefinitely. A standard 3BHK apartment renovation should take 45 to 90 days. Defaulting designers often stretch this to 12 or 18 months by sending only one or two laborers to the site once a week. They continuously request additional funds, claiming that the initial advance was exhausted on site overheads, without showing any visible progress.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When homeowners attempt to cancel the contract, designers often claim that the advance paid is non-refundable, citing unilateral terms in their quotation or invoice. Under the Indian legal framework, such forfeiture clauses are not automatically enforceable. If the contractor failed to deliver the services, retaining the money is illegal. Homeowners can seek relief through civil litigation, consumer protection forums, or criminal channels if fraudulent intent is evident.
                  </p>
                </div>
              </section>

              {/* Section 2: Specific Performance and Substituted Performance Remedies */}
              <section id="specific-relief-act" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Specific Performance and Substituted Performance Remedies
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    In civil disputes involving construction and service contracts, the Specific Relief Act, 1963, provides the primary statutory remedies. Prior to 2018, courts rarely ordered the specific performance of construction contracts because monitoring day-to-day work was deemed practically impossible. Homeowners had to wait for years to secure a court decree for compensation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    However, the Specific Relief (Amendment) Act, 2018, introduced a revolutionary remedy designed specifically to address contract breaches: Substituted Performance, codified under Section 20 of the Act. Section 20 provides that where a contract is broken due to non-performance of a promise by any party, the party who suffers from such breach has the option of substituted performance. This means the homeowner can choose to have the contract performed by a third party, or by their own agency, and recover the actual costs, expenses, and damages incurred from the party who committed the breach.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This is an incredibly powerful tool for homeowners. Instead of waiting for a court order to force the defaulting interior designer to finish the work, you can hire a new designer or contractor to complete the remaining renovation. Once the work is done, you can file a recovery action to claim every rupee spent on the new contractor from the original defaulting designer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To claim remedies under Section 20, you must strictly follow the statutory procedure:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                    <li>
                      <strong>Mandatory Written Notice:</strong> You must give a written notice of not less than 30 days to the defaulting contractor or designer.
                    </li>
                    <li>
                      <strong>Opportunity to Cure:</strong> In the notice, call upon them to perform and complete the work within the specified time (minimum 30 days).
                    </li>
                    <li>
                      <strong>Right to Proceed:</strong> If the contractor refuses or fails to perform the work within the notice period, you can proceed with the substituted performance through a third party.
                    </li>
                    <li>
                      <strong>Recovery of Costs:</strong> You are legally entitled to recover the cost of this substituted performance from the defaulting party. However, you cannot claim specific performance of the contract after you have opted for substituted performance.
                    </li>
                  </ul>
                  <p className="text-sm md:text-base leading-relaxed">
                    In addition to substituted performance, Section 21 of the Specific Relief Act allows you to claim compensation/damages for the breach of contract. This compensation can be claimed either in addition to, or in substitution of, other remedies. For example, you can claim the difference in cost between the original contract and the new contract, compensation for the loss of use of your house, and rent paid for alternative accommodation during the delay period.
                  </p>
                </div>
              </section>

              {/* Section 3: Consumer Rights and Deficiency in Service Options */}
              <section id="consumer-protection-act" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Consumer Rights and Deficiency in Service Options
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While filing a civil suit under the Specific Relief Act is highly effective, the Consumer Protection Act, 2019, offers a faster, more accessible, and cost effective dispute resolution mechanism. A homeowner who hires an interior designer or renovation contractor for their self-use residential property qualifies as a consumer under Section 2(7) of the Act.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The primary ground for filing a consumer complaint is deficiency in service. Section 2(11) of the Act defines deficiency as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance. When an interior designer fails to complete the work on time, uses sub-standard materials, or delivers defective craftsmanship, it constitutes a clear case of deficiency.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Additionally, if a designer misrepresents their credentials, displays fake portfolio images, or makes false claims about using specific branded materials in their quotes, you can sue them for unfair trade practices under Section 2(47) of the Act. The Consumer Protection Act also protects consumers against unfair contracts. If the agreement drafted by the design studio contains heavily one sided clauses, such as charging 24% interest on late customer payments but paying zero penalty for designer delays, the Consumer Commission has the power to declare such clauses void.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Critical Exception: Commercial Spaces:</strong> It is crucial to note that if you hired the interior designer to renovate a commercial space, such as an office, retail outlet, hotel, or restaurant, you may not qualify as a consumer. Under the Act, services acquired for commercial purposes are excluded from consumer court jurisdiction unless you can prove that you run the commercial business solely for the purpose of earning your livelihood by means of self employment. If this exception does not apply, you must file a commercial civil recovery suit or invoke arbitration.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the Consumer Protection Act, 2019, the monetary jurisdiction of consumer forums is highly favorable:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                    <li><strong>District Commission:</strong> Handles claims up to 50 Lakhs.</li>
                    <li><strong>State Commission:</strong> Handles claims from 50 Lakhs up to 2 Crores.</li>
                    <li><strong>National Commission:</strong> Handles claims exceeding 2 Crores.</li>
                  </ul>
                  <p className="text-sm md:text-base leading-relaxed">
                    Homeowners can file a complaint online through the e-Daakhil portal. The consumer court has the authority to order the contractor to remove the deficiencies, refund the entire unutilized advance, pay compensation for financial losses and rental expenses, and award punitive damages for mental agony, harassment, and litigation costs.
                  </p>
                </div>
              </section>

              {/* Section 4: Choosing Your Legal Route: Consumer Court vs. Civil Suit */}
              <section id="recovery-options-matrix" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Choosing Your Legal Route: Consumer Court vs. Civil Suit
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Homeowners must evaluate the advantages and limitations of each legal route before filing a case. While consumer commissions are faster and do not require heavy court fees, civil courts offer broader powers, particularly when seeking substituted performance or dealing with commercial properties.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The following comparison matrix details the key differences between the two routes:
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Consumer Commission Route</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Civil Court Route (Civil Suit / Arbitration)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Primary Objective</td>
                          <td className="px-6 py-4">Redressal for deficiency in service, compensation for mental agony, refund of advance.</td>
                          <td className="px-6 py-4">Specific performance, recovery of dues, or substituted performance damages under the Specific Relief Act.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Jurisdiction Limit</td>
                          <td className="px-6 py-4">Based on value of services and compensation claimed (up to 50 Lakhs for District Commission).</td>
                          <td className="px-6 py-4">Determined by pecuniary limits of local civil courts or terms of the arbitration clause.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Applicability to Commercial Sites</td>
                          <td className="px-6 py-4">No, unless strictly for earning livelihood by self employment.</td>
                          <td className="px-6 py-4">Yes, fully applicable to commercial, residential, and industrial renovation contracts.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Court Fees</td>
                          <td className="px-6 py-4">Nominal (ranges from 100 to 1,000 rupees depending on claim size).</td>
                          <td className="px-6 py-4">Ad valorem court fees (typically 1% to 8% of the claim value depending on the state).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Timeline for Resolution</td>
                          <td className="px-6 py-4">Relatively fast (usually resolved within 6 to 18 months via summary procedures).</td>
                          <td className="px-6 py-4">Longer (can take 2 to 4 years, unless resolved via fast-track commercial arbitration).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Representation</td>
                          <td className="px-6 py-4">Homeowners can argue their own case without an advocate if they choose.</td>
                          <td className="px-6 py-4">Requires formal legal representation by an advocate or legal counsel.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 5: How to Draft and Serve the Legal Notice Correctly */}
              <section id="drafting-serving-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  How to Draft and Serve the Legal Notice Correctly
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice is a formal communication sent by an advocate on behalf of their client, giving the recipient a final chance to resolve a dispute before legal action is initiated. In renovation disputes, it is a crucial tool to document the default, start the statutory timelines, and establish the cause of action. If the contractor ignores this notice, you will file a formal case, and the fact that the contractor refused to reply will count heavily against them in court.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To be legally valid and enforceable, the legal notice must contain specific details:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                    <li>
                      <strong>Facts of Engagement:</strong> Clearly state the date of hiring, the agreed scope of work (modular kitchen, wardrobes, false ceiling, painting), the total contract value, and the payment schedule.
                    </li>
                    <li>
                      <strong>Details of Payments Made:</strong> List every transaction, including bank transfer details, Cheque numbers, and receipts. If you had to pay cash, refer to the messages where the designer acknowledged receipt, keeping in mind the guidance on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link>.
                    </li>
                    <li>
                      <strong>Nature of Breach:</strong> Detail how the contractor defaulted. For example, specify the date they stopped attending the site, outline the specific substandard work executed, and list the materials they removed from your home.
                    </li>
                    <li>
                      <strong>Legal Provisions Invoked:</strong> Expressly invoke Section 70 (unjust enrichment) and Section 73 (damages) of the Indian Contract Act, 1872, and Section 20 of the Specific Relief Act, 1963 (substituted performance).
                    </li>
                    <li>
                      <strong>Specific Demands and Timeline:</strong> Give the designer a clear 15-day compliance window. Demand that they either complete the work under your supervision or refund the unutilized advance payment along with interest.
                    </li>
                    <li>
                      <strong>Warning of Consequences:</strong> Warn them that if they fail to comply, you will file a consumer complaint or a recovery suit, and they will be liable for all associated costs, interest, and damages.
                    </li>
                  </ul>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Methods of Service:</strong> The legal notice must be served via Speed Post or Registered Post with Acknowledgement Due (RPAD) to the designer's registered office address or home address. Serving the notice via post is legally required to prove delivery in court. In addition, you should email a scanned copy of the signed notice to the designer's official email address and send a digital copy via WhatsApp to their verified mobile number. Under current IT laws, proof of WhatsApp and email delivery is accepted as valid service of notice.
                  </p>
                </div>
              </section>

              {/* Section 6: Step-by-Step Recovery Roadmap for Homeowners */}
              <section id="step-by-step-process" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Recovery Roadmap for Homeowners
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If your interior designer or contractor has abandoned your project or is delivering substandard work, you must take immediate structured action to protect your home and recover your money. Here is the step-by-step roadmap:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Document the Site and Stop Payments</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Immediately cease all further payments to the contractor. Take detailed high-resolution photographs and videos of the entire site, highlighting incomplete areas, raw material stockpiles, and defective workmanship. Do not let the contractor remove any raw materials from the site.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Obtain an Independent Architecture Valuation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Hire an independent architect, certified civil engineer, or government approved valuer to visit the site. Ask them to draft a formal assessment report detailing the exact percentage of work completed, the value of work done, the cost of raw materials left on site, and the estimated cost to rectify any substandard execution. This report serves as your primary evidence of financial damage.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Draft and Serve the Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Retain an advocate to draft and serve a formal 15-day legal notice to the interior designer. The notice must demand a refund of the excess advance, payment for defective work rectification, and outline the intent to execute substituted performance under Section 20 of the Specific Relief Act if the default is not cured.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Execute Substituted Performance</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          If the contractor fails to respond or finish the work within the notice period, proceed to hire a new contractor or agency. Keep all bills, contracts, tax invoices, and payment receipts from the new contractor to prove the actual costs you incurred to complete the work.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: File a Case before the Consumer Commission or Civil Court</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          If the designer refuses to settle, file a consumer complaint for deficiency in service or a civil recovery suit, keeping in mind the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link>. Use your valuation report and new invoices to recover all excess expenses and claim interest and mental agony damages.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 7: Prerequisites and Evidence Collection Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Collection Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong legal case against a defaulting contractor, you must prepare a comprehensive folder of electronic and physical evidence. This ensures that the contractor cannot make false counterclaims in court, such as accusing you of locking them out of the site or refusing to make payments.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are filing a case and do not have a formal signed agreement, do not panic. Read the guide on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to learn how to structure electronic records and oral conversations to establish the contract.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Interior Renovation Dispute Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Signed Contract or Approved Quotation:</strong> The primary document outlining the scope of work, agreed material brands (CenturyPly, Greenply, Ebco, Hettich, Asian Paints), and cost estimates.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of Payments:</strong> Bank ledger statements, online transfer receipts, and Cheque payment records showing the exact amounts paid.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Site Photographs and Videos:</strong> High-resolution media showing incomplete work, scrap materials, raw structures, and defective carpentry or wiring.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Architect Valuation Report:</strong> A formal report from an independent architect detailing the work done and the estimated cost to finish the project.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Communication Records:</strong> Exported WhatsApp chat backups, email threads, and recorded phone conversations discussing delays, demands for money, and design approvals.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Rent Receipts (if applicable):</strong> Proof of rent paid for alternative accommodation if you were unable to move into your house due to the renovation delay.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Make sure that you also file a police complaint if the designer used threat tactics, locked the site from the outside, or stole materials that you paid for. While police do not handle civil recovery, filing a complaint creates a formal government record of the contractor's illegal acts, which serves as valuable support in consumer court.
                  </p>
                </div>
              </section>

              {/* Section 8: Success Stories */}
              <section id="client-case-studies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories: How Homeowners Recovered Their Advances
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real homeowner case studies demonstrate how structured notices, architect valuations, and consumer court filings resolved interior design disputes:
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
                          <p className="text-[10px] text-slate-500">Verified Case Study</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 9: FAQs */}
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

            {/* Right Column Sidebar with Advice Card (No face cards) */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed font-medium">
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
