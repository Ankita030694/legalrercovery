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
    question: "What legal classification do freelancers have under Indian law?",
    answer: "Under Indian law, freelancers are classified as independent contractors rather than employees. This means their relationship with clients is a B2B commercial contract ('contract for services') rather than a contract of service. Consequently, freelancers cannot approach labor commissioners or labor courts; they must seek recovery under contract law and civil procedure."
  },
  {
    question: "Is a verbal or email agreement legally binding for a freelancer?",
    answer: "Yes, under the Indian Contract Act, 1872, verbal contracts are legally binding. Furthermore, under Section 10A of the Information Technology Act, 2000, contracts formed electronically (via email exchanges, Slack, WhatsApp messages, or digital proposals) are fully valid and enforceable in a court of law."
  },
  {
    question: "Can a freelancer file a summary suit under Order 37 CPC for unpaid invoices?",
    answer: "Yes, a freelancer can file a Summary Suit under Order XXXVII of the CPC for fast-track recovery. Email confirmations of rates, sent invoices, purchase orders, and client acknowledgments of the deliverables serve as a valid written contract required for filing under Order 37."
  },
  {
    question: "What is the limitation period for a freelancer to file a recovery suit?",
    answer: "Under the Limitation Act, 1963, a freelancer must file a recovery suit or initiate legal recovery within three (3) years from the date the invoice payment became due. Any written acknowledgment of the debt by the client (such as an email saying 'payment will be cleared soon') resets the 3-year limitation clock."
  },
  {
    question: "How does the principle of unjust enrichment protect freelancers?",
    answer: "Under Section 70 of the Indian Contract Act, 1872, if a freelancer performs work or delivers assets that are not intended to be free, and the client enjoys the benefit, the client is legally bound to compensate the freelancer. This prevents the client from unjustly enriching themselves on unpaid work."
  },
  {
    question: "Can an MSME-registered freelancer use the MSME Samadhaan portal?",
    answer: "Yes, if a freelancer is registered as a Micro or Small enterprise (Udyam Registration) under the MSMED Act, 2006, they can file a complaint on the MSME Samadhaan portal. The buyer is legally obligated to pay within 45 days and must pay compound interest at three times the RBI bank rate on delays."
  },
  {
    question: "What happens if a client's cheque issued to a freelancer bounces?",
    answer: "Under Section 138 of the NI Act, a bounced cheque is a criminal offense. The freelancer must serve a statutory demand notice to the drawer within 30 days of dishonor, wait 15 days, and if payment is not cleared, file a criminal complaint in the Magistrate court within 30 days."
  },
  {
    question: "Can I claim copyright infringement if a client uses my work without paying?",
    answer: "Yes, under the Copyright Act, 1957, the copyright of creative works (designs, code, copy, videos) remains with the freelancer until payment is completed, unless a contract explicitly states otherwise. If the client uses the unpaid work, they commit copyright infringement and can be sued."
  },
  {
    question: "What is the Specified Value threshold for freelancer disputes under the Commercial Courts Act?",
    answer: "Under the Commercial Courts Act, 2015, if the dispute is commercial and the Specified Value is ₹3,00,000 (three lakh rupees) or more, the case must be filed in a Commercial Court. This provides access to expedited summary judgments and strict case management."
  },
  {
    question: "What is mandatory pre-institution mediation under Section 12A?",
    answer: "Under Section 12A of the Commercial Courts Act, a plaintiff cannot file a commercial suit directly unless they first undergo mediation. You file an application before the DLSA. If mediation fails or the client does not attend, the DLSA issues a 'Non-Starter Report,' allowing you to file the suit."
  },
  {
    question: "What digital evidence is admissible in court for a freelance payment claim?",
    answer: "Emails, Slack chats, WhatsApp exchanges, and project management logs are admissible. Under Section 63 of the BNS, you must provide a signed certificate verifying the authenticity of these electronic records to ensure they are admitted as evidence."
  },
  {
    question: "Can I charge interest on delayed freelance payments if it wasn't in the agreement?",
    answer: "Yes, under the Interest Act, 1978, you can claim interest by serving a formal written notice stating that interest (usually 12% to 18% p.a.) will be charged from the date of the notice. For MSME-registered freelancers, the statutory rate of 3x the RBI bank rate is mandated by law."
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
      "name": "Freelancer Payments Recovery",
      "item": "https://www.legalrecovery.in/recovery/freelancer-payments"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Freelancer Payments & Consultant Fees | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding freelance project payments, gig worker fees, and independent contractor dues in India.",
  "image": "https://www.legalrecovery.in/og-freelancer-payments.png",
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
  "name": "B2B Freelancer Payments Recovery Services",
  "image": "https://www.legalrecovery.in/og-freelancer-payments.png",
  "description": "Advocate-backed legal assistance for recovering outstanding B2B freelance payments, consultant fees, and independent contractor dues in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "380"
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
        "name": "Siddharth Roy"
      },
      "reviewBody": "As a freelance software developer, a corporate client refused to pay my final project milestone of ₹3,50,000, claiming quality issues after using my code. LegalRecovery analyzed our email trail and served an advocate notice warning of copyright infringement and a summary suit. The client cleared my balance in 5 days. Fantastic support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Malini Iyer"
      },
      "reviewBody": "A digital agency withheld ₹1,80,000 of my content writing retainer fees. LegalRecovery drafted a formal legal notice invoking Section 70 of the Contract Act. The agency owner settled immediately to protect their online reputation. Highly recommended for creative freelancers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kabir Mehta"
      },
      "reviewBody": "I am an independent UI/UX designer and was owed ₹2,40,000 by a startup that stopped responding to my Slack messages. LegalRecovery sent a strong legal demand to the startup board and directors. They cleared my dues within a week. Truly professional and fast."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tanvi Sharma"
      },
      "reviewBody": "Recovered my outstanding graphic design fees from a retail brand. LegalRecovery guided me through compiling our email agreements and delivered a high-impact notice. The brand settled my invoices in full."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Sen"
      },
      "reviewBody": "Our consultancy firm had ₹6,20,000 outstanding from a company. The company issued a cheque that bounced. LegalRecovery immediately served the statutory Section 138 notice. The company replaced the cheque with a bank transfer immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ayesha Khan"
      },
      "reviewBody": "Outstanding legal support for gig economy workers. They helped me recover my video editing fees from an agency that went silent. Professional and highly effective."
    }
  ]
};

export default function FreelancerPaymentsClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "freelancer-payment-default-context", title: "1. Overview & Gig Economy Dynamics" },
    { id: "independent-contractor-legal-status", title: "2. Legal Status of Freelancers" },
    { id: "written-and-digital-contracts", title: "3. Written, Oral & Email Contracts" },
    { id: "cpc-order-37-summary-suits-freelance", title: "4. Summary Suits (Order 37 CPC)" },
    { id: "cheque-bounce-bns-cheating-remedies", title: "5. Cheque Bounce & BNS Remedies" },
    { id: "mandatory-mediation-commercial-courts", title: "6. Commercial Mediation (Sec 12A)" },
    { id: "admissibility-digital-evidence-chats", title: "7. Admissibility of Email & Chats" },
    { id: "structured-dispute-escalation-demand", title: "8. Escalation & Legal Notices" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Freelancer Payments Recovery", href: "/recovery/freelancer-payments" },
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
              India&apos;s Premium Freelance Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">Freelancer Payments</span> &amp; Fees
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with defaulting clients, unpaid project invoices, delayed freelance retainer fees, or bounced cheques? Serve advocate-backed legal notices and initiate fast-track recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Freelancer Recovery
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
                
                {/* Section 1: Overview & Gig Economy Dynamics */}
                <section id="freelancer-payment-default-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overview &amp; Gig Economy Dynamics</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The rise of the gig economy has transformed the global and Indian labor landscapes, offering professionals unprecedented autonomy and businesses access to specialized talent. Freelancers, independent consultants, creative professionals, and tech contractors now provide essential services—ranging from software development and digital marketing to UI/UX design, copywriting, and corporate strategy—without being bound by traditional employment structures. This relationship is built on trade credit, where freelancers render services or deliver milestones with the expectation that their invoices will be cleared by the client within an agreed timeline, typically 15 to 30 days. However, payment defaults are extremely common, leaving freelancers with unpaid bills and limited working capital. At LegalRecovery, we are committed to providing gig workers and independent consultants with the legal tools to recover their outstanding dues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A key difference between freelancers and standard employees is their legal classification. Freelancers are not employees; they are independent contractors under the law. This means they cannot file claims under labor laws, approach labor commissioners, or file disputes under the Industrial Disputes Act, 1847. Instead, their relationship is strictly commercial (B2B), governed by the terms of their agreements and civil contract procedures. The burden of proof falls entirely on the freelancer to present clear, undisputed records of the agreement and delivery of work, making a structured, document-heavy legal strategy essential for successful recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Clients default on freelancer payments for various reasons, including budgeting issues, project cancellations, or strategic delay tactics. Often, clients exploit the freelancer&apos;s lack of corporate resources, assuming they will not pursue legal action due to the perceived high costs of litigation. In other cases, clients may raise sudden, subjective complaints regarding quality or delivery only when the invoice becomes due. Waiting indefinitely in the hope of a voluntary settlement is risky. As time passes, the debtor&apos;s financial position may weaken, or the claim may become time-barred under the Limitation Act, making prompt legal action necessary.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian law offers several pathways for recovering outstanding freelance dues, depending on the contract details and the client&apos;s corporate status. For freelancers registered as micro or small enterprises (via Udyam Registration), the MSMED Act, 2006, provides a powerful fast-track recovery mechanism. For other freelancers, options include filing a Summary Suit under Order XXXVII of the CPC, serving a statutory demand notice under the Commercial Courts Act, 2015, or initiating insolvency proceedings under the IBC if the client is a corporate entity and the debt meets the statutory threshold. Additionally, if the client issued a cheque that bounced, criminal prosecution under Section 138 of the NI Act provides significant leverage.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Freelancers operate as B2B service providers. When a client defaults on payment, it represents a breach of a commercial agreement. Strong legal advocacy via legal notices and Order 37 summary suits ensures gig workers recover their hard-earned fees.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Legal Status of Freelancers */}
                <section id="independent-contractor-legal-status" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Legal Status of Freelancers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common defense raised by defaulting clients is the absence of a formal &quot;employment contract,&quot; arguing that the freelancer was not a regular employee and therefore has no right to demand pay or raise a dispute. However, under the Indian Contract Act, 1872, the relationship between a freelancer and a client is classified as a contract for services, establishing the freelancer as an independent contractor. Unlike a contract of service (which defines an employer-employee relationship), a contract for services is a commercial B2B agreement where one independent party agrees to provide specific deliverables to another for mutually agreed compensation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts have consistently recognized that a freelancer&apos;s legal rights are protected under contract law. The absence of a formal HR file or payroll listing does not invalidate the agreement. The relationship is governed by the terms of the freelance agreement, Statement of Work (SOW), or retainer contract. Under Section 73 of the Indian Contract Act, 1872, if a party breaches a contract, they must compensate the other party for any loss or damage directly caused by the breach. In freelance payment disputes, this includes the principal invoice amount, agreed interest on delays, and any direct consequential losses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The principle of quasi-contract under Section 70 of the Indian Contract Act, 1872, provides additional protection against &quot;unjust enrichment.&quot; Section 70 states that if a person lawfully does anything for another, or delivers anything to him, not intending to do so gratuitously, and the other person enjoys the benefit, the receiving party must compensate the provider. This means a client cannot retain and use a freelancer&apos;s code, design assets, copy, or strategy documents without paying for them, even if the formal contract was unsigned or had technical defects.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, intellectual property laws provide freelancers with significant leverage. Under the Copyright Act, 1957, the copyright in any creative work (such as code, designs, or copy) initially vests with the creator (the freelancer) unless there is a written contract explicitly assigning the copyright to the client upon payment. If a client uses a freelancer&apos;s work without clearing the invoices, they do not hold the legal copyright. The freelancer can demand that the client stop using the work and warn of copyright infringement actions, which often encourages immediate payment.
                    </p>
                  </div>
                </section>

                {/* Section 3: Written, Oral & Email Contracts */}
                <section id="written-and-digital-contracts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Written, Oral &amp; Email Contracts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many freelancers operate without a formal contract, relying instead on verbal agreements, exchange of emails, or chat threads. When a client defaults, the freelancer may fear they have no legal recourse. However, under Section 10 of the Indian Contract Act, 1872, oral contracts are legally valid and enforceable, provided they contain free consent, competent parties, lawful consideration, and a lawful object. The challenge with oral contracts is proof, not enforceability. If the freelancer has written or digital records confirming the scope of work and payment terms, the court will enforce the agreement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In modern business, email exchanges, Statements of Work (SOWs), and purchase orders serve as written contracts. Under Section 10A of the Information Technology Act, 2000, contracts formed electronically—such as through emails, digital signatures, or electronic click-through agreements—are legally valid and enforceable. When a client sends an email outlining project milestones and rates, and the freelancer replies accepting those terms and begins work, a binding written contract is established.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Retainer agreements, where a client pays a fixed monthly fee for a set number of hours or deliverables, are also legally enforceable. If a client fails to clear retainer invoices but continues to request and accept deliverables, they breach the retainer contract. In court, the freelancer can present the retainer agreement along with email records of deliverables and monthly invoices as proof of the contract and the client&apos;s default, shifting the burden onto the client to explain the non-payment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect their interests, freelancers should ensure that all key terms are documented in writing before starting work. This includes defining deliverables, milestone payment schedules, feedback revision limits, credit periods, and interest on delayed payments. Even a simple email summary sent by the freelancer and confirmed by the client (e.g., &quot;Please reply to confirm these terms&quot;) serves as a valid contract, providing essential evidence if a dispute arises.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits (Order 37 CPC) */}
                <section id="cpc-order-37-summary-suits-freelance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits (Order 37 CPC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A major concern for freelancers when considering legal action is the potential delay in the civil court system. Regular civil recovery suits can take years, making them impractical for recovering relatively small freelance fees. However, the Code of Civil Procedure, 1908, provides a fast-track remedy under <strong>Order XXXVII (Summary Suits)</strong>. This procedure is designed for the rapid recovery of liquidated debts arising from written contracts, which include invoices, Statements of Work, and written correspondences.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Order 37, the defendant does not have an automatic right to defend the suit. Once the suit is filed, the court issues a specialized summons in Form 4. The defendant must enter an appearance, in person or through an advocate, within <strong>10 days</strong> of receiving the summons. If they fail to do so, the allegations in the plaint are deemed admitted, and the court immediately passes a decree in the freelancer&apos;s favor, allowing for rapid recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defendant enters an appearance, the plaintiff serves a &quot;Summons for Judgment.&quot; The defendant then has 10 days to apply for <strong>&quot;Leave to Defend&quot;</strong>. To obtain leave, the defendant must convince the court through an affidavit that they have a substantial and bona fide defense, rather than a sham or delay tactic. If the court finds the defense is a mere delay tactic, it will deny leave and pass a decree, or grant &quot;conditional leave&quot; requiring the defendant to deposit a portion of the disputed amount into court before proceeding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A summary suit decree can be executed immediately under Order 21 CPC. The court has the power to attach the debtor&apos;s bank accounts and sell their assets to recover the dues. Because the legal burden shifts to the debtor during the &quot;Leave to Defend&quot; phase, serving a summary suit often encourages clients to enter out-of-court settlement discussions to avoid asset attachment.
                    </p>
                  </div>
                </section>

                {/* Section 5: Cheque Bounce & BNS Remedies */}
                <section id="cheque-bounce-bns-cheating-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Cheque Bounce &amp; BNS Remedies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Clients sometimes issue cheques to freelancers for invoice payments that are subsequently dishonored. Under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>, issuing a cheque that bounces due to &quot;insufficient funds&quot; or &quot;stop payment&quot; instructions is a criminal offense. The criminal nature of cheque bounce proceedings provides significant leverage, as it exposes the client or corporate directors to personal prosecution, arrest warrants, and criminal records.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal procedure for a Section 138 claim has strict statutory timelines. The cheque must be presented to the bank within its 3-month validity period. If dishonored, the bank issues a &quot;Cheque Return Memo.&quot; The freelancer must serve a formal statutory demand notice to the drawer within <strong>30 days</strong> of receiving the return memo, demanding payment of the cheque amount and giving the drawer <strong>15 days</strong> from receipt to clear the dues. If the drawer fails to pay within 15 days, the freelancer must file a criminal complaint in the Magistrate court within <strong>30 days</strong> thereafter.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 143A of the NI Act, the Magistrate court can order the drawer of the cheque to pay <strong>interim compensation</strong> to the complainant. This compensation can be up to <strong>20% of the cheque amount</strong> and must be paid within 60 days of the court&apos;s order. If the trial concludes in a conviction, the court can sentence the accused to imprisonment for up to <strong>two (2) years</strong>, impose a fine up to <strong>twice the cheque amount</strong>, or both, and award compensation to the complainant.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When the drawer of the bounced cheque is a company, the freelancer can invoke Section 141 of the NI Act to prosecute the company&apos;s directors personally. Furthermore, if the client issued the cheque with pre-existing fraudulent intent (such as closing the bank account immediately after issuing the cheque), the freelancer can also file a complaint for <strong>Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                    </p>
                  </div>
                </section>

                {/* Section 6: Commercial Mediation (Sec 12A) */}
                <section id="mandatory-mediation-commercial-courts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Commercial Mediation (Sec 12A)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If a freelance payment dispute involves a claim of <strong>₹3,00,000 (three lakh rupees)</strong> or more and the client is a business entity, the dispute falls under the jurisdiction of the <strong>Commercial Courts Act, 2015</strong>. The Act was enacted to speed up the resolution of commercial disputes and improve India&apos;s business dispute resolution mechanisms. It created specialized Commercial Courts at the district level and Commercial Divisions in High Courts, featuring strict timelines for filing pleadings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 12A</strong> of the Commercial Courts Act, a plaintiff cannot file a commercial suit directly unless they undergo mandatory <strong>Pre-Institution Mediation</strong>. This rule applies to all commercial suits that do not contemplate urgent interim relief. The process is initiated by filing an application along with a nominal fee before the <strong>District Legal Services Authority (DLSA)</strong>. The DLSA issues summons to the debtor, inviting them to participate in mediation sessions conducted by a trained, neutral mediator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor refuses to participate, ignores the DLSA summons, or fails to appear for the mediation sessions, the mediator concludes the process and issues a <strong>&quot;Non-Starter Report.&quot;</strong> This report serves as a legal clearance certificate, permitting the freelancer to file the commercial suit in court. The period spent in mediation is entirely excluded from the 3-year limitation period under the Limitation Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the mediation is successful, the parties draft and sign a formal <strong>Mediation Settlement Agreement</strong>. Under Section 12A(5) of the Act, this settlement agreement has the <strong>same status and effect as an arbitral award</strong> under the Arbitration and Conciliation Act, 1996. This means the settlement is binding and final, and cannot be appealed. If the debtor defaults on the payment terms agreed upon, the freelancer can apply directly to the court to execute the settlement agreement and attach the debtor&apos;s bank accounts.
                    </p>
                  </div>
                </section>

                {/* Section 7: Admissibility of Email & Chats */}
                <section id="admissibility-digital-evidence-chats" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Admissibility of Email &amp; Chats</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of a freelance recovery claim depends on the quality of digital records. Because most freelance work is managed remotely, communications via email, WhatsApp, Slack, and project management tools (like Trello or Jira) form the bulk of the evidence. Under Indian law, these digital communications are classified as electronic records and are admissible in court. They serve to establish the terms of the agreement, the delivery of work, and the client&apos;s acknowledgment of the debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 10A of the Information Technology Act, 2000, electronic records and communications are legally recognized. In court, presenting an email trail where the client confirms receiving the deliverables and promises to pay the invoice by a specific date serves as an admission of debt. WhatsApp messages confirming project approvals or acknowledging outstanding payments are also valuable evidence to counter claims of non-performance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure digital evidence is admissible, it must comply with the statutory requirements under Section 63 of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 65B of the Indian Evidence Act). This requires providing a signed certificate verifying the authenticity of the electronic records. The certificate must state that the computer or phone was operating properly, and that the data was not tampered with. Without this certificate, courts may refuse to admit digital records.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Freelancers should maintain organized backups of all professional communications, project approvals, invoice delivery confirmations, and follow-up exchanges. Archiving Slack workspaces, exporting WhatsApp chat histories, and saving email threads as PDF files provides a solid foundation for drafting legal notices and preparing court filings.
                    </p>
                  </div>
                </section>

                {/* Section 8: Escalation & Legal Notices */}
                <section id="structured-dispute-escalation-demand" className="scroll-mt-32">
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
                    Legal Status: Independent Contractor
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Enforceable: Oral/Email Contracts
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Fast-Track: Order 37 CPC Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    IP Leverage: Copyright Ownership
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
                  Our corporate advocates specialize in recovering unpaid freelance payments, contractor dues, and consultant retainers. Let us handle your legalnotice campaign.
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
