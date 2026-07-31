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
    question: "What legal actions can a consultant take to recover unpaid fees in India?",
    answer: "A consultant can initiate several legal actions, including: (1) serving a formal advocate notice; (2) filing a Summary Suit under Order 37 of the CPC for fast-track recovery; (3) filing an online petition under MSME Samadhaan (if registered under the MSMED Act); (4) filing a criminal complaint under Section 138 of the NI Act if a cheque bounced; or (5) initiating commercial mediation or arbitration as per the contract terms."
  },
  {
    question: "How are consulting agreements legally classified under Indian contract law?",
    answer: "Consulting agreements are legally classified as a 'contract for services', which makes the consultant an independent contractor rather than an employee (who works under a 'contract of service'). Consequently, disputes are handled as B2B commercial disputes under the Indian Contract Act, 1872, and civil procedure, rather than labor codes."
  },
  {
    question: "Can a consultant claim unpaid fees if the client never signed a physical agreement?",
    answer: "Yes, under the Indian Contract Act, 1872, oral contracts and electronic agreements (formed via email exchanges, proposal approvals, Slack, or WhatsApp confirmations) are legally valid. Additionally, under Section 70 of the Act, if a client enjoys the benefit of your professional work, they are legally bound to pay for it under the principle of quasi-contract."
  },
  {
    question: "What is the time limit for a consultant to file a legal claim for unpaid fees?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a recovery suit or commercial suit for outstanding consulting fees is three (3) years from the date the invoice payment became due. Any written acknowledgment of debt or partial payment by the client resets the 3-year limitation clock."
  },
  {
    question: "How does the MSMED Act protect registered consulting firms?",
    answer: "If a consulting firm is registered under the MSMED Act (Udyam Registration), the client is legally required to pay for services within 45 days. If they fail to do so, the client must pay compound interest to the consulting firm at three times the RBI bank rate, compounded monthly, under Section 16 of the Act."
  },
  {
    question: "What is the pre-deposit requirement if a client appeals an MSEFC consulting award?",
    answer: "Under Section 19 of the MSMED Act, if a client wants to appeal or challenge an arbitration award passed by the Micro and Small Enterprises Facilitation Council (MSEFC), the court cannot entertain the appeal unless the client first deposits 75% of the award amount with the court."
  },
  {
    question: "Can I file a summary suit under Order 37 CPC based on email trails and invoices?",
    answer: "Yes, invoices, purchase orders, Statements of Work (SOWs), and exchange of emails containing transaction terms are valid written contracts for the purpose of filing a fast-track Summary Suit under Order XXXVII of the CPC. The client must seek the court's leave to defend the case."
  },
  {
    question: "What copyright leverage does a consultant have if a client defaults on payment?",
    answer: "Under the Copyright Act, 1957, the intellectual property and copyright of custom designs, strategy reports, videos, or code remain with the consultant until the client clears all invoices, unless the contract states otherwise. If the client uses unpaid work, you can send a cease-and-desist notice for copyright infringement."
  },
  {
    question: "What is the Specified Value threshold for consulting fee disputes under the Commercial Courts Act?",
    answer: "Under the Commercial Courts Act, 2015, if the dispute is commercial and the outstanding amount is ₹3,00,000 (three lakh rupees) or more, the case falls under the jurisdiction of a specialized Commercial Court. This division offers expedited summary judgments and strict case management."
  },
  {
    question: "How does mandatory pre-institution mediation under Section 12A work for consultants?",
    answer: "Under Section 12A of the Commercial Courts Act, you cannot file a commercial suit directly unless you first undergo mediation. You file an application before the DLSA. If the client refuses to participate, the DLSA issues a 'Non-Starter Report,' which allows you to proceed to court."
  },
  {
    question: "What digital evidence is required to prove a consulting fee claim in court?",
    answer: "Email trails showing deliverables, timesheets, Slack chats, WhatsApp confirmations, and invoice receipts are admissible. Under Section 63 of the BNS, you must provide a signed certificate verifying the authenticity of these electronic records to ensure they are admitted."
  },
  {
    question: "Can I claim interest on delayed retainer fees if the contract doesn't mention interest?",
    answer: "Yes, under the Interest Act, 1978, you can claim interest by serving a formal written notice stating that interest (usually 12% to 18% p.a.) will be charged from the date of the notice. For registered MSME consulting firms, the statutory rate of 3x the RBI bank rate is mandated by law."
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
      "name": "Consultancy Fees Recovery",
      "item": "https://www.legalrecovery.in/recovery/consultancy-fees"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Consultancy Fees & Retainer Dues | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding consulting fees, advisory retainers, and professional service debts in India.",
  "image": "https://www.legalrecovery.in/og-consultancy-fees.png",
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
  "name": "B2B Consultancy Fees Recovery Services",
  "image": "https://www.legalrecovery.in/og-consultancy-fees.png",
  "description": "Advocate-backed legal assistance for recovering outstanding B2B consulting fees, advisory retainers, and professional service debts in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "290"
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
        "name": "Sanjay Dutt"
      },
      "reviewBody": "Our management consulting firm was owed ₹7,50,000 for business strategy consulting by a corporate client. The client stopped responding to emails after we submitted our final report. LegalRecovery drafted a highly strategic demand notice and assisted in filing a claim under MSME Samadhaan. Faced with the statutory 3x RBI bank rate compounding interest, they paid all dues. Professional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Prakash"
      },
      "reviewBody": "We had outstanding engineering consultancy retainer fees of ₹5,40,000. LegalRecovery served an advocate notice warning of an Order 37 CPC summary suit. The client's legal team settled within a week, clearing the balance. Highly recommended for independent consultants."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nikhil Kamath"
      },
      "reviewBody": "An architectural consulting client defaulted on our milestone payment of ₹9,20,000. LegalRecovery guided us through Commercial Court Section 12A mediation. The DLSA mediator helped us reach a binding settlement. Truly exceptional legal support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kritika Sen"
      },
      "reviewBody": "As a freelance marketing consultant, I was owed ₹1,90,000. The agency owner went silent. LegalRecovery sent a formal notice invoking Section 70 of the Contract Act. The agency cleared my invoices immediately. Excellent service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Rampal"
      },
      "reviewBody": "A corporate client issued a cheque for our financial consulting fees that bounced. LegalRecovery acted swiftly, serving the statutory 138 NI Act notice. The client realized they faced criminal prosecution and transferred the balance online within a week."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Roy"
      },
      "reviewBody": "Outstanding support for professional service providers. They helped us recover our unpaid digital consulting fees from a company that went silent. Highly professional team."
    }
  ]
};

export default function ConsultancyFeesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "consultancy-fees-disputes-context", title: "1. Overview & Advisory Disputes" },
    { id: "consulting-agreements-legal-nature", title: "2. Legal Nature of Consulting Agreements" },
    { id: "recovering-retainers-success-fees", title: "3. Retainers, Milestones & Success Fees" },
    { id: "summary-suits-cpc-order-37-consultants", title: "4. Summary Suits (Order 37 CPC)" },
    { id: "cheque-bounce-criminal-breach-trust", title: "5. Cheque Bounce & Criminal Breach" },
    { id: "mediation-commercial-courts-specified-value", title: "6. Commercial Mediation (Sec 12A)" },
    { id: "documentary-evidence-timesheets-deliverables", title: "7. Evidence, Timesheets & Logs" },
    { id: "reconciliation-legal-notice-piercing-veil", title: "8. Escalation & Legal Notices" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Consultancy Fees Recovery", href: "/recovery/consultancy-fees" },
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
              India&apos;s Premium Professional Fee Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Unpaid <span className="text-[#DC2626]">Consultancy Fees</span> &amp; Retainers
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with defaulting clients, unpaid advisory retainer invoices, delayed project milestone fees, or bounced corporate cheques? Serve advocate-backed legal notices and initiate fast-track recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Fee Recovery
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
                
                {/* Section 1: Overview & Advisory Disputes */}
                <section id="consultancy-fees-disputes-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overview &amp; Advisory Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the knowledge-driven business landscape, consultants and professional advisors play a vital role. From financial and management consulting to engineering, architectural design, marketing, and legal advisory services, organizations rely on specialized experts to optimize their operations. Unlike standard procurement of goods, consulting services involve intangibles, including intellectual capital, strategic advice, custom designs, and professional hours. The commercial relationship is typically structured on credit or retainer terms, with the expectation that the client will clear invoices within 15 to 30 days of deliverable submission or monthly cycles. However, payment defaults on consultancy fees are common, leaving independent advisors and boutique consulting firms with cash flow constraints. At LegalRecovery, we specialize in recovering unpaid professional fees and protecting your intellectual capital.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A key distinction in recovering unpaid consultancy fees is the B2B commercial nature of the relationship. Consultants are independent professionals or entities, not employees. This means labor laws, labor courts, and labor commissioners do not have jurisdiction over these disputes. The relationship is governed strictly by commercial contract law and civil procedures. To successfully recover outstanding consulting fees, the advisor must present clear documentation of the engagement terms, proof of service delivery, and project approvals.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Defaults on consultancy fees often stem from project changes, client budget cuts, or strategic delays. Clients may exploit the consultant&apos;s lack of corporate resources, assuming they will not pursue legal action due to the perceived high costs of litigation. In other cases, clients may raise sudden, subjective disputes regarding the quality of advice or deliverable milestones only when payment is demanded. Waiting indefinitely is risky, as the debt may become time-barred under the Limitation Act, making prompt legal action essential.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian law offers several pathways for recovering outstanding consultancy fees. Registered MSME consulting firms can use the MSME Samadhaan portal to claim statutory interest at three times the RBI bank rate on delayed payments. Other consultants can file a Summary Suit under Order XXXVII of the CPC for fast-track recovery, initiate pre-institution mediation under the Commercial Courts Act, 2015, or file a criminal complaint under Section 138 of the NI Act if the client issued a cheque that bounced.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Advisory retainers and professional consultancy fees represent valuable intellectual services. If a client fails to clear your invoices, it is a breach of contract. Leveraging Order 37 summary suits and formal notices ensures rapid recovery.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Legal Nature of Consulting Agreements */}
                <section id="consulting-agreements-legal-nature" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Legal Nature of Consulting Agreements</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common defense raised by defaulting clients is that the consultant was not a regular employee and therefore has no right to demand pay or raise a dispute. However, under the Indian Contract Act, 1872, the relationship between a consultant and a client is classified as a contract for services, establishing the consultant as an independent contractor. Unlike a contract of service (which defines an employer-employee relationship), a contract for services is a commercial B2B agreement where one independent party agrees to provide specific deliverables to another for mutually agreed compensation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts have consistently recognized that a consultant&apos;s legal rights are protected under contract law. The absence of a formal HR file or payroll listing does not invalidate the agreement. The relationship is governed by the terms of the consulting agreement, Statement of Work (SOW), or retainer contract. Under Section 73 of the Indian Contract Act, 1872, if a party breaches a contract, they must compensate the other party for any loss or damage directly caused by the breach. In consulting fee disputes, this includes the principal invoice amount, agreed interest on delays, and any direct consequential losses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The principle of quasi-contract under Section 70 of the Indian Contract Act, 1872, provides additional protection against &quot;unjust enrichment.&quot; Section 70 states that if a person lawfully does anything for another, or delivers anything to him, not intending to do so gratuitously, and the other person enjoys the benefit, the receiving party must compensate the provider. This means a client cannot retain and use a consultant&apos;s strategic reports, code, designs, or marketing plans without paying for them, even if the formal contract was unsigned or had technical defects.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, intellectual property laws provide consultants with significant leverage. Under the Copyright Act, 1957, the copyright in any creative work initially vests with the creator (the consultant) unless there is a written contract explicitly assigning the copyright to the client upon payment. If a client uses a consultant&apos;s work without clearing the invoices, they do not hold the legal copyright. The consultant can demand that the client stop using the work and warn of copyright infringement actions, which often encourages immediate payment.
                    </p>
                  </div>
                </section>

                {/* Section 3: Retainers, Milestones & Success Fees */}
                <section id="recovering-retainers-success-fees" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Retainers, Milestones &amp; Success Fees</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consulting fees are typically structured in three formats: monthly retainers, milestone-based payments, or success-based fees. Monthly retainers involve a fixed fee paid for ongoing advisory services. Milestone payments are tied to the completion of specific deliverables, such as submitting a design or report. Success-based fees are contingent on achieving a specific outcome, such as securing a license or completing a merger. Defaults can occur in all three structures, and each requires a specific legal approach.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In retainer agreements, clients may continue to seek advice and accept deliverables while failing to clear monthly invoices. In court, the consultant can present the signed retainer agreement along with email records of deliverables and monthly invoices as proof of the contract and the client&apos;s default. If the client accepted the services without raising quality concerns during the retainer period, they cannot suddenly withhold payment post-service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Milestone payments require clear proof of deliverable submission and client approval. If a contract specifies that payment is due upon submission of a draft report, and the client receives the report but delays approval without giving technical reasons, they breach the agreement. Under the Indian Contract Act, a party cannot prevent the performance of a condition and then rely on its non-performance to avoid payment. The consultant&apos;s proof of submission acts as proof of performance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Success-based fees often lead to disputes over whether the success criteria were met. If a client achieves the outcome (e.g., secures a partner) but claims the consultant&apos;s advice was not the primary cause, the consultant must present a clear paper trail showing their involvement, advisory reports, and meetings that contributed to the success. Digital records, including meeting minutes, emails, and WhatsApp exchanges, are critical to proving the causal link.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits (Order 37 CPC) */}
                <section id="summary-suits-cpc-order-37-consultants" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits (Order 37 CPC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A major concern for consultants when considering legal action is the potential delay in the civil court system. Regular civil recovery suits can take years, making them impractical for recovering outstanding professional fees. However, the Code of Civil Procedure, 1908, provides a fast-track remedy under <strong>Order XXXVII (Summary Suits)</strong>. This procedure is designed for the rapid recovery of liquidated debts arising from written contracts, which include invoices, Statements of Work, and written correspondences.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Order 37, the defendant does not have an automatic right to defend the suit. Once the suit is filed, the court issues a specialized summons in Form 4. The defendant must enter an appearance, in person or through an advocate, within <strong>10 days</strong> of receiving the summons. If they fail to do so, the allegations in the plaint are deemed admitted, and the court immediately passes a decree in the consultant&apos;s favor.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defendant enters an appearance, the plaintiff serves a &quot;Summons for Judgment.&quot; The defendant then has 10 days to apply for <strong>&quot;Leave to Defend&quot;</strong>. To obtain leave, the defendant must convince the court through an affidavit that they have a substantial and bona fide defense, rather than a sham or delay tactic. If the court finds the defense is a mere delay tactic, it will deny leave and pass a decree, or grant &quot;conditional leave&quot; requiring the defendant to deposit a portion of the disputed amount into court before proceeding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A summary suit decree can be executed immediately under Order 21 CPC. The court has the power to attach the debtor&apos;s bank accounts and sell their assets to recover the dues. Because the legal burden shifts to the debtor during the &quot;Leave to Defend&quot; phase, serving a summary suit often encourages clients to enter out-of-court settlement discussions to avoid asset attachment.
                    </p>
                  </div>
                </section>

                {/* Section 5: Cheque Bounce & Criminal Breach */}
                <section id="cheque-bounce-criminal-breach-trust" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Cheque Bounce &amp; Criminal Breach</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Clients sometimes issue cheques to consultants for invoice payments that are subsequently dishonored. Under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>, issuing a cheque that bounces due to &quot;insufficient funds&quot; or &quot;stop payment&quot; instructions is a criminal offense. The criminal nature of cheque bounce proceedings provides significant leverage, as it exposes the client or corporate directors to personal prosecution, arrest warrants, and criminal records.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal procedure for a Section 138 claim has strict statutory timelines. The cheque must be presented to the bank within its 3-month validity period. If dishonored, the bank issues a &quot;Cheque Return Memo.&quot; The consultant must serve a formal statutory demand notice to the drawer within <strong>30 days</strong> of receiving the return memo, demanding payment of the cheque amount and giving the drawer <strong>15 days</strong> from receipt to clear the dues. If the drawer fails to pay within 15 days, the consultant must file a criminal complaint in the Magistrate court within <strong>30 days</strong> thereafter.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 143A of the NI Act, the Magistrate court can order the drawer of the cheque to pay <strong>interim compensation</strong> to the complainant. This compensation can be up to <strong>20% of the cheque amount</strong> and must be paid within 60 days of the court&apos;s order. If the trial concludes in a conviction, the court can sentence the accused to imprisonment for up to <strong>two (2) years</strong>, impose a fine up to <strong>twice the cheque amount</strong>, or both, and award compensation to the complainant.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When the drawer of the bounced cheque is a company, the consultant can prosecute the company&apos;s directors personally under Section 141. Furthermore, if the client issued the cheque with pre-existing fraudulent intent (such as closing the bank account immediately after issuing the cheque), the consultant can also file a complaint for <strong>Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> or criminal breach of trust.
                    </p>
                  </div>
                </section>

                {/* Section 6: Commercial Mediation (Sec 12A) */}
                <section id="mediation-commercial-courts-specified-value" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Commercial Mediation (Sec 12A)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If a consulting fee dispute involves a claim of <strong>₹3,00,000 (three lakh rupees)</strong> or more and the client is a business entity, the dispute falls under the jurisdiction of the <strong>Commercial Courts Act, 2015</strong>. The Act was enacted to speed up the resolution of commercial disputes and improve India&apos;s business dispute resolution mechanisms. It created specialized Commercial Courts at the district level and Commercial Divisions in High Courts, featuring strict timelines for filing pleadings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 12A</strong> of the Commercial Courts Act, a plaintiff cannot file a commercial suit directly unless they undergo mandatory <strong>Pre-Institution Mediation</strong>. This rule applies to all commercial suits that do not contemplate urgent interim relief. The process is initiated by filing an application along with a nominal fee before the <strong>District Legal Services Authority (DLSA)</strong>. The DLSA issues summons to the debtor, inviting them to participate in mediation sessions conducted by a trained, neutral mediator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor refuses to participate, ignores the DLSA summons, or fails to appear for the mediation sessions, the mediator concludes the process and issues a <strong>&quot;Non-Starter Report.&quot;</strong> This report serves as a legal clearance certificate, permitting the consultant to file the commercial suit in court. The period spent in mediation is entirely excluded from the 3-year limitation period under the Limitation Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the mediation is successful, the parties draft and sign a formal <strong>Mediation Settlement Agreement</strong>. Under Section 12A(5) of the Act, this settlement agreement has the <strong>same status and effect as an arbitral award</strong> under the Arbitration and Conciliation Act, 1996. This means the settlement is binding and final, and cannot be appealed. If the debtor defaults on the payment terms agreed upon, the consultant can apply directly to the court to execute the settlement agreement and attach the debtor&apos;s bank accounts.
                    </p>
                  </div>
                </section>

                {/* Section 7: Evidence, Timesheets & Logs */}
                <section id="documentary-evidence-timesheets-deliverables" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Evidence, Timesheets &amp; Logs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of a consultancy fee recovery claim depends on the quality of digital and paper records. Because consulting services often involve intangible deliverables, having a clear audit trail of your performance is critical. The foundation of your case consists of timesheets, deliverable logs, meeting minutes, and email approvals showing that the work was requested, delivered, and accepted.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Written agreements and Statements of Work (SOWs) define the scope of work. In court, the consultant must show that they performed the work according to these terms. Providing email updates, draft submissions, final reports, and the client&apos;s written approvals (or their silence and continued use of the reports) acts as proof of performance. Timesheets detailing the hours spent by the consulting team are essential for hourly retainer models.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Electronic records must comply with the statutory requirements under Section 63 of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 65B of the Indian Evidence Act). This requires providing a signed certificate verifying the authenticity of email trails, Slack communications, or WhatsApp messages. Without this certificate, courts may refuse to admit digital records, which could weaken the case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consultants should maintain organized archives of all client communications, feedback threads, deliverable submission receipts, and monthly invoices. Periodically securing signed &quot;balance confirmations&quot; or &quot;reconciliation sheets&quot; from the client&apos;s finance team provides an official admission of debt, making it difficult for them to contest the outstanding amount.
                    </p>
                  </div>
                </section>

                {/* Section 8: Escalation & Legal Notices */}
                <section id="reconciliation-legal-notice-piercing-veil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Escalation &amp; Legal Notices</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal litigation, it is essential to follow a structured pre-litigation escalation process. This shows courts that you acted in good faith and exhausted all informal remedies. The escalation should begin with a formal email to the client&apos;s finance team, attaching a reconciliation sheet showing all paid and unpaid invoices, credit notes, and the outstanding balance. If this is ignored, escalate the communication to the client&apos;s Chief Financial Officer (CFO) and Chief Executive Officer (CEO), demanding a formal response within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If executive escalation fails, the next step is to serve a formal <strong>Legal Notice</strong>. A legal notice is a structured, advocate-signed document sent to the debtor, setting out the facts of the transaction, detailing the default, demanding payment of the outstanding dues within a strict window (typically 15 days), and warning of the legal actions that will be taken if they fail to comply. A legal notice is not just a warning; it establishes your cause of action and forms part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel drafts custom notices tailored to the specific facts of your case. We do not use generic templates. Instead, we highlight the client&apos;s violations of the contract, the statutory interest liabilities under the contract or Interest Act, and the criminal consequences of bounced cheques or cheating. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the debtor&apos;s corporate office. Crucially, we also send copies of the notice to the personal residential addresses of the company&apos;s directors, piercing the corporate veil and encouraging immediate settlement.
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
                    Legal Path: Commercial Contract Law
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Protections: Section 70 Quasi-Contract
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Fast-Track: CPC Order 37 Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Mandatory: Sec 12A DLSA Mediation
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Limitation: 3 Years from Due Date
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
                  Our corporate advocates specialize in recovering unpaid consultancy fees, advisory retainers, and professional services claims. Let us handle your legalnotice campaign.
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
