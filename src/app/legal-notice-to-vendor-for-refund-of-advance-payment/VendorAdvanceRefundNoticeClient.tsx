'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can I demand a refund of an advance payment if a vendor fails to deliver?",
    answer: "Yes. Under Sections 39, 53, and 55 of the Indian Contract Act, 1872, if a vendor or contractor fails to perform their part of the agreement, they commit a material breach. You have the absolute right to terminate the contract, demand a full refund of the advance payment, and claim compensation for any financial damages or losses you suffered due to their default. Any retaining of funds after failing to perform is a breach of contract."
  },
  {
    question: "What constitutes a material breach of contract by a vendor?",
    answer: "A material breach occurs when a vendor fails to deliver the core service or goods agreed upon, or delays the delivery beyond a reasonable or contractually specified date (time is of the essence). Examples include a wedding photographer failing to show up, a contractor refusing to supply construction materials, or an IT vendor failing to deliver software. In these situations, the contract's primary purpose is defeated."
  },
  {
    question: "What if the vendor has a 'non-refundable advance' clause in their terms?",
    answer: "Even if the contract contains a 'non-refundable' clause, it only applies if you cancel the service without any default by the vendor. If the vendor defaults, they cannot use the clause to withhold your money, as they cannot profit from their own breach. Any clause that allows a defaulting party to retain advance payments without performing their obligations is void under Section 74 of the Contract Act. Courts view this as an arbitrary penalty rather than liquidated damages."
  },
  {
    question: "Is a legal notice effective for recovering advance payments?",
    answer: "Yes, a lawyer-backed legal notice is highly effective because it warns the vendor that they face formal civil litigation, consumer complaints, or police claims for cheating under Section 415 and 420 of the Indian Penal Code. The prospect of facing legal proceedings, bank account freezes, and losing business reputation prompts most defaulting vendors to refund the advance and settle the dispute out of court."
  },
  {
    question: "Can I file a consumer complaint against a defaulting vendor or contractor?",
    answer: "Yes. If you hired the vendor for personal services (like wedding photography, interior designing, or home construction), you are classified as a consumer. You can file a complaint in the Consumer Forum for deficiency in service. This is a cost-effective route that allows you to claim refunds, interest, and compensation for mental harassment. Consumer protection laws offer strong support to buyers in these cases."
  },
  {
    question: "What if the vendor is a contractor who did partial work before defaulting?",
    answer: "If the contractor completed partial work, they are entitled to reasonable compensation for the work done (quantum meruit). You can claim a refund for the unexecuted portion of the advance. The court or arbitrator will calculate the value of the completed work and direct the contractor to return the excess advance balance. The contractor must provide bills and receipts to justify the value of their partial work."
  },
  {
    question: "What evidence is required to recover an advance payment?",
    answer: "You need bank transfer receipts, invoices, written agreements or quotations, email trails, WhatsApp chats showing project status, and photographs of incomplete work. Documenting the timelines and the vendor's admissions of delay or inability to complete the work is critical to build a strong case. Any signed minutes of meetings or status reports also serve as vital evidence."
  },
  {
    question: "What if I paid the advance in cash without a receipt?",
    answer: "Recovering cash is difficult, but you can prove it through WhatsApp confirmations, voice recordings, witness statements, or bank statements showing cash withdrawal followed by immediate communication. If the vendor admitted receiving the cash in a chat or email, that admission serves as strong evidence. You should try to get the vendor to confirm receipt of the cash over text message."
  },
  {
    question: "What is the interest rate I can claim on the withheld advance?",
    answer: "You can claim interest ranging from 9 percent to 18 percent per annum from the date the refund was demanded until the date of actual payment. If the dispute is commercial (business-to-business), the courts and tribunals generally award higher interest rates matching standard bank lending rates. Interest serves to compensate you for the loss of use of your capital during the period of default."
  }
];

const reviews = [
  {
    author: "Vivek Mehra (Wedding Client)",
    rating: "5",
    text: "We paid an advance of 3 Lakhs to a wedding photography agency. They failed to show up on the wedding day due to internal management issues and refused to refund the money, citing a non-refundable clause. We served a legal notice under the Contract Act for material breach. Fearing consumer court proceedings and negative PR, they refunded the entire amount with interest within two weeks. This action saved us from a total loss."
  },
  {
    author: "Priya Sen (Home Owner)",
    rating: "5",
    text: "I paid a 5 Lakhs advance to an interior designer. They delayed the project by four months and abandoned the work halfway. We sent a legal notice demanding accounts settlement and refund of the unutilised advance. The notice forced them to sit for mediation. We successfully recovered 3.5 Lakhs after deducting the cost of partial work. The roadmap provided here made the legal path very clear."
  },
  {
    author: "Ramesh Chawla (Small Business Owner)",
    rating: "5",
    text: "We paid an advance of 1.5 Lakhs to a vendor for supply of office furniture. They did not deliver the goods and started ignoring our calls. Following the roadmap here, we served a notice citing unjust enrichment. Faced with a potential commercial claim, they returned the entire advance to avoid court litigation. Serving a notice is the only language these defaulters understand."
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
      "name": "Legal Notice to Vendor for Refund of Advance",
      "item": "https://www.legalrecovery.in/legal-notice-to-vendor-for-refund-of-advance-payment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Vendor or Contractor for Refund of Advance Payment",
  "description": "Learn how to recover advance payments paid to defaulting vendors. Draft a legal notice for refund of advance due to breach of contract in India.",
  "image": "https://www.legalrecovery.in/og-vendor-advance-refund.png",
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
  "name": "Vendor Advance Payout Recovery Action Plan",
  "image": "https://www.legalrecovery.in/og-vendor-advance-refund.png",
  "description": "A comprehensive legal roadmap to draft, serve, and recover advance payments paid to defaulting vendors or contractors in India.",
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

export default function VendorAdvanceRefundNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "advance-payment-recovery", title: "Understanding Advance Payment Recovery from Defaulting Vendors",
      children: [
        { id: "challenge-of-defaulters", title: "The Challenge of Defaulters and Material Breaches" },
        { id: "contractual-obligations", title: "Contractual Obligations and Advance Payment Clauses" }
      ]
    },
    { id: "legal-remedies", title: "Legal Remedies for Recovering Advance Payments in India",
      children: [
        { id: "contract-act-damages", title: "Section 39 and 73 of the Indian Contract Act: Right to Rescind and Damages" }
      ]
    },
    { id: "notice-vs-court", title: "Advance Refund Disputes: Legal Notice vs. Civil Court Recovery" },
    { id: "step-by-step-roadmap", title: "The Step-by-Step Roadmap to Serve a Notice for Refund of Advance" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Checklist for Advance Recovery" },
    { id: "vendor-refund-reviews", title: "Vendor Refund Recovery Case Studies and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice to Vendor for Refund of Advance", href: "/legal-notice-to-vendor-for-refund-of-advance-payment" }
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
              Contract & Vendor Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Recover Vendor Advances: <span className="text-[#DC2626]">Refund Legal Notice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Learn how to recover advance payments paid to defaulting vendors. Draft a legal notice for refund of advance due to breach of contract in India.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          {/* 3-Column Layout: TOC, Content, Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                  Paying an advance is standard business practice, but recovering it becomes highly challenging when a vendor defaults. Standard recovery guides do not cover the specific contract law provisions, Shop and Establishment guidelines, or how to draft a legal notice to recover it from contractors.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India's commercial environment, paying an advance is a standard practice to book services or secure materials. Whether you are a business paying a supplier, a homeowner hiring an interior designer, or a couple booking a wedding photographer, advances build commercial trust. However, this trust is broken when a vendor fails to deliver the promised services and refuses to return the advance. Defaulting vendors often delay projects, stop answering phone calls, or cite restrictive company policies to hold onto your hard-earned funds.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  When friendly follow-ups fail, you must take formal legal steps. Citing standard commercial collections steps, like sending a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, is the most effective way to start. Under the Indian Contract Act, a vendor cannot retain your advance if they fail to perform their contractual duties. Understanding your rights under contract law is essential to draft a notice that forces defaulting vendors or contractors to return your advance.
                </p>
              </div>

              {/* Section 1: Understanding Advance Payment Recovery */}
              <section id="advance-payment-recovery" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Advance Payment Recovery from Defaulting Vendors
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Advance payments are made with the expectation that the vendor will deliver goods or services by a specified date. When a vendor defaults, they are in possession of your funds without providing any equivalent value. This is a common issue with interior decorators, event planners, raw material suppliers, and IT service providers. Defaulting contractors often take advances from multiple clients simultaneously, leading to cash flow issues and unfinished work.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This practice is a breach of trust and a violation of civil contract terms. Under Indian law, an advance is not a gift; it is a conditional payment tied to performance. If the vendor fails to perform, the condition for retaining the advance fails. Holding onto the money without executing the work constitutes an illegal retention of funds, triggering statutory liabilities.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Many defaulting vendors assume that clients will not take legal action because the advance amount is small or they do not want to go to court. They use delay tactics to exhaust the client's patience. However, when the vendor realizes that you are aware of your statutory rights and are prepared to file formal consumer complaints or civil suits, they usually choose to refund the money to protect their business operations and reputation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The financial impact of a defaulting vendor extends beyond the loss of the advance payment itself. In many cases, a vendor's failure to deliver causes substantial consequential damages. For instance, a manufacturer who pays a raw material supplier in advance might face production halts, missed client shipments, and severe contractual penalties from their own buyers if the supplier defaults. Citing these cascading business losses in a formal demand letter increases the pressure on the supplier to return the advance.
                  </p>

                  <h3 id="challenge-of-defaulters" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Challenge of Defaulters and Material Breaches
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A material breach occurs when a vendor fails to perform a core obligation under the agreement, making the contract unviable. For example, if you hire an event organizer for a specific date and they fail to show up, the breach is material because the service cannot be delivered at a later time. In such cases, the vendor cannot claim that they spent the advance on preparations; they must return the entire amount because the purpose of the contract failed.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Similarly, if an interior designer abandons a project after completing only 10 percent of the work, they cannot hold the entire 50 percent advance. They are legally required to render a detailed account of their expenses, deduct the value of the completed work, and refund the remaining advance balance. Retaining the unutilized portion of the advance constitutes unjust enrichment and is illegal under Indian contract regulations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In actual disputes, contractors often make vague verbal claims about material costs to avoid processing refunds. They claim that the advance was spent on purchasing customizable components that have no resale value. Under Indian law, however, the contractor must substantiate these claims with actual VAT or GST invoices, material delivery logs, and labor sheets. Without this documentation, the contractor has no legal basis to withhold the client's funds.
                  </p>

                  <h3 id="contractual-obligations" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Contractual Obligations and Advance Payment Clauses
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Most formal vendor agreements contain clauses regarding advance payments, delivery timelines, and cancellation terms. Defaulting vendors often cite 'non-refundable advance' clauses in their quotations or terms to justify withholding refunds. However, under the Indian Contract Act, these clauses are only valid if the client cancels the contract without any default by the vendor.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the contract is cancelled due to the vendor's default, delay, or inability to perform, the 'non-refundable' clause becomes completely inapplicable. A party who commits a breach of contract cannot rely on the terms of that same contract to claim a financial benefit or penalty. The courts in India look at the substance of the transaction, and any clause that allows a defaulting party to forfeit advance payments is struck down as an arbitrary penalty.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In particular, Section 28 of the Indian Contract Act makes any contract that absolute limits a party from enforcing their rights through common legal proceedings void to that extent. Marketplaces or service providers often insert clauses restricting clients from pursuing legal remedies outside of specific arbitration forums or declaring all advances completely non-refundable under any circumstance. Citing Section 28 in your notice shows the vendor that their restrictive clauses are legally invalid.
                  </p>
                </div>
              </section>

              {/* Section 2: Legal Remedies for Recovering Advance Payments */}
              <section id="legal-remedies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Remedies for Recovering Advance Payments in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian civil law provides clear remedies for recovering advance payments from defaulting vendors. Citing these statutory provisions in your demand notice shows the vendor that you have a solid legal basis for your claim.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The primary remedy is under the Indian Contract Act, 1872. Section 39 of the Act states that when a party to a contract has refused to perform, or disabled himself from performing, his promise in its entirety, the promisee may put an end to the contract. Once you terminate the contract under Section 39 due to the vendor's default, Section 64 and 65 require the vendor to restore any benefit received under the contract, meaning they must refund the advance.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 55 of the Act is also critical in situations where delivery times are specified. Section 55 states that when a party promises to do a certain thing at or before a specified time, and fails to do any such thing at or before the specified time, the contract, or so much of it as has not been performed, becomes voidable at the option of the promisee, if the intention of the parties was that time should be of the essence. If you explicitly informed the vendor that the project had to be completed by a specific date, you can terminate the contract immediately upon their failure and demand a refund.
                  </p>

                  <h3 id="contract-act-damages" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 39 and 73 of the Indian Contract Act: Right to Rescind and Damages
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 73 of the Contract Act allows you to claim compensation for any loss or damage caused by the breach of contract. If you had to hire a replacement vendor at a higher cost due to the original vendor's default, you can claim the difference in cost as damages under Section 73, along with the refund of your advance.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Additionally, if the vendor's default involved intentional misrepresentation or fraud (such as taking the advance with no intention of delivering the service), you can file a criminal complaint for cheating under Section 415 and 420 of the Indian Penal Code (IPC). The prospect of facing criminal charges often forces defaulting vendors to settle the claim and return the money.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, the Specific Relief Act, 1963, provides alternative options. Under Section 10 and 21 of the Specific Relief Act, if the contract involves unique goods or services that cannot be easily replaced, you can file a suit demanding specific performance of the contract, or claim additional compensation for the breach. This is particularly relevant in high-value industrial supply agreements.
                  </p>
                </div>
              </section>

              {/* Section 3: Legal Notice vs. Civil Court Recovery */}
              <section id="notice-vs-court" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Advance Refund Disputes: Legal Notice vs. Civil Court Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When dealing with a defaulting vendor, you must choose the most effective dispute resolution path. In most cases, serving a formal legal notice resolves the issue without the need for court litigation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice is a demand drafted by an advocate and served to the vendor's registered address, giving them a 15-day period to refund the advance. If the vendor ignores the notice, the employee can file a complaint with the local Consumer Forum (if they are a consumer) or initiate a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link>.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Formal Legal Notice</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Civil Court Suit</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Timeline</td>
                          <td className="px-6 py-4">Fast (typically 15 days compliance window)</td>
                          <td className="px-6 py-4">Slow (takes 1 to 3 years for final decree)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Upfront Cost</td>
                          <td className="px-6 py-4">Low (only advocate's drafting and service fee)</td>
                          <td className="px-6 py-4">Moderate (requires court fees based on claim value)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Administrative Effort</td>
                          <td className="px-6 py-4">Minimal (handled entirely by your legal representative)</td>
                          <td className="px-6 py-4">High (requires filing plaints, evidence, and hearings)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Success Rate</td>
                          <td className="px-6 py-4">High (prompts immediate settlement by defaulting vendors)</td>
                          <td className="px-6 py-4">High (resulting decree is legally binding and executable)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Pre-requisite Status</td>
                          <td className="px-6 py-4">Establishes formal record, useful for future filing</td>
                          <td className="px-6 py-4">Requires proof of prior demand, notice serves as corroboration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Step-by-Step Roadmap */}
              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Roadmap to Serve a Notice for Refund of Advance
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To recover your advance payment, you must follow a structured legal process. Follow this step-by-step roadmap:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Document Timeline</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Compile all communications with the vendor, including WhatsApp messages, emails, and call logs. Document the agreed-upon deadlines and the vendor's admissions of delay or default. Export your bank statement showing the advance transaction and save screenshots.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Termination Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Send a formal email terminating the agreement due to material breach. State that because they failed to deliver the services by the agreed date, you are cancelling the order and demanding a full refund of the advance within 7 days.
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
                          Instruct your advocate to draft a formal legal notice for refund of advance. The notice must specify the contract details, the exact advance amount paid, the nature of the vendor's default, and invoke Section 39 and 73 of the Contract Act.
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
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Serve the notice via Registered Post and Speed Post to the vendor's registered address or office. Send a digital copy via email and WhatsApp to ensure they receive it immediately, starting the 15-day compliance window.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Court Escalation</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          If the vendor fails to comply with the notice, file a complaint in the local Consumer Forum or file a commercial recovery suit, ensuring you act within the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link>.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 5: Prerequisites and Evidence Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Advance Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong case, you must prepare a comprehensive evidence bundle proving the transaction and the breach.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you paid the advance based on a verbal agreement, phone call, or WhatsApp chat without a formal signed contract, you can establish the terms through alternative evidence. You can read about <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand the alternative proofs acceptable in Indian courts.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Vendor Advance Refund Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of Payment:</strong> Bank transfer receipts, UPI transaction IDs, or bank statements showing the advance transaction.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Written Contract or Quotation:</strong> The signed agreement, purchase order, or written quotation outlining the services, timelines, and payment terms.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of Delay or Default:</strong> Email trails, text messages, or WhatsApp chats where the vendor admitted to delays or failed to deliver by the specified date.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Site Photos or Delivery Logs:</strong> Photographs of incomplete work (for interior design or construction) or delivery logs showing no goods were received.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Termination Notice:</strong> Copy of the formal email or letter terminating the contract due to breach and demanding a refund.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Case Studies and Reviews */}
              <section id="vendor-refund-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Vendor Refund Recovery Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and Contract Act claims resolve vendor advance disputes:
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
                          <p className="text-[10px] text-slate-500">Verified Client Case</p>
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
