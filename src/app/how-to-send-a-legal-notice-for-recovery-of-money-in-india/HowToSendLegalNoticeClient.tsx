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
    question: "Is it legally mandatory to send a legal notice before filing a money recovery suit?",
    answer: "For a standard civil recovery suit under the Code of Civil Procedure (CPC), sending a legal notice is not strictly mandatory under the law, but it is highly recommended. It shows the court that you acted in good faith and gave the debtor a final opportunity to settle. However, for certain specific cases, such as cheque bounce cases under Section 138 of the Negotiable Instruments Act or filing a suit against the government under Section 80 of the CPC, serving a statutory notice is a mandatory prerequisite. Filing without it will result in the immediate dismissal of the case."
  },
  {
    question: "What is the cost of sending a legal notice for money recovery in India?",
    answer: "The cost of sending a legal notice varies based on the advocate's experience, the complexity of the transaction, and the recovery amount. Typically, fees range from ₹1,000 to ₹5,000 for standard notices, while highly complex commercial or corporate notices may cost more. At LegalRecovery, we offer transparent, flat-rate notice drafting and dispatch services starting at ₹999 per opposing party, which includes advocate review and speed post delivery."
  },
  {
    question: "How do I trace the address of a debtor who has changed their location?",
    answer: "If the debtor has relocated, you can try to trace their address through several channels. For corporate debtors or LLP firms, you can pull their active registered office address directly from the Ministry of Corporate Affairs (MCA) portal. For individuals, check recent invoices, tax documents (like GSTIN search), or check recent bank transfer details. If they have disappeared, sending the notice to their last known correct address via registered post is legally acceptable. If returned as 'left' or 'refused', it is still considered constructive service in court."
  },
  {
    question: "Can I send a legal notice to a debtor residing in a different state in India?",
    answer: "Yes, you can send a legal notice to a debtor residing in any state or union territory in India. The notice is physically dispatched via Speed Post or Registered Post AD through the India Post network, which covers the entire country. The legal jurisdiction for subsequent court filings is determined by where the cause of action arose (e.g., where the contract was signed, where the money was transferred, or where the debtor resides), not necessarily where the notice was sent from."
  },
  {
    question: "How long does a debtor have to reply to a money recovery notice?",
    answer: "The standard notice period given to a debtor in India is fifteen (15) days from the date they receive the notice. This is the legally accepted timeframe for the debtor to either clear the outstanding amount or file a formal reply through their advocate. If they do not respond or pay within these 15 days, you gain the legal right to immediately file a lawsuit or initiate criminal actions."
  },
  {
    question: "What should I do if the debtor sends a false or disputing reply?",
    answer: "If the debtor sends a reply raising false quality disputes or denying the loan, you must review the reply with your advocate. If the reply contains factual lies, you can send a Rejoinder Notice to counter their claims. Alternatively, if their defense is completely baseless, you can proceed directly to file a Summary Suit under Order 37 of the CPC. Their reply is actually useful because it locks them into a specific defense, preventing them from raising new excuses in court later."
  },
  {
    question: "Is WhatsApp blue tick delivery considered valid service of a notice?",
    answer: "Yes, various High Courts and the Supreme Court of India have recognized WhatsApp delivery as valid service of legal notices. If you send the notice as a PDF file and the delivery shows double-blue ticks (or read receipts), it is considered served. To prove this in court, you must submit a printout of the chat history and delivery status accompanied by a statutory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (previously Section 65B of the Evidence Act)."
  },
  {
    question: "What is the difference between a legal notice and a demand notice?",
    answer: "While both are formal demands, a 'legal notice' is a broad term for any advocate-signed communication outlining a claim and threatening legal action. A 'demand notice' is a specific statutory notice required under particular laws. For example, under Section 138 of the NI Act (cheque bounce) or Section 8 of the Insolvency and Bankruptcy Code (IBC), serving a specific 'Statutory Demand Notice' is a mandatory prerequisite, and the format is strictly defined by those acts."
  },
  {
    question: "Can I claim interest on friendly loans in a legal notice?",
    answer: "Yes. Even if your initial friendly loan agreement or promissory note did not specify an interest rate, you are legally entitled to claim interest under the Interest Act, 1978. In your notice, you can demand simple interest at standard market rates (usually 6% to 9% per annum for personal loans, and 12% to 18% for commercial debts) calculated from the date the loan became due until the date of payment."
  },
  {
    question: "What is a Settlement Deed and when is it signed?",
    answer: "A Settlement Deed is a legally binding contract signed when the debtor agrees to repay the dues (either in full or in structured installments) after receiving the legal notice. The deed outlines the exact repayment schedule, the consequences of defaulting on the settlement, and a clause stating that both parties will withdraw any pending complaints or lawsuits once the final payment is cleared."
  },
  {
    question: "Can a legal notice be sent to a company director personally?",
    answer: "Yes. If the debtor is a company or partnership, the notice is sent to the registered entity and also to the active directors/partners personally. While a company is a separate legal entity, directors can be held personally liable if there is evidence of personal fraud, cheating, or if a cheque signed by them bounces under Section 138 of the NI Act. Naming directors personally is a highly effective pressure tactic."
  },
  {
    question: "What if the debtor ignores my legal notice completely?",
    answer: "If the debtor ignores the notice and the 15-day period expires, it is treated as a default. Their silence serves as evidence in court that they had no valid defense to your claims. The next step is to file a Summary Suit under Order 37 of the CPC (for written contracts/invoices) or file a criminal complaint (for cheque bounce or cheating) depending on the facts. The legal notice serves as the foundation of your lawsuit."
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
      "name": "How to Send a Legal Notice for Recovery of Money",
      "item": "https://www.legalrecovery.in/how-to-send-a-legal-notice-for-recovery-of-money-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Send a Legal Notice for Recovery of Money in India: Step-by-Step Legal Process",
  "description": "A comprehensive, step-by-step practical guide on how to draft, service, and follow up on a legal notice for money recovery under Indian law. Learn about evidence collection and tracking.",
  "image": "https://www.legalrecovery.in/og-how-to-send-notice.png",
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
  "datePublished": "2026-06-10",
  "dateModified": "2026-06-10"
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
  "name": "Legal Notice Dispatch Services",
  "image": "https://www.legalrecovery.in/og-how-to-send-notice.png",
  "description": "Step-by-step legal notice drafting, posting, and tracking services for money recovery in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1040"
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
        "name": "Dinesh Khanna"
      },
      "reviewBody": "Following the step-by-step guide here, I collected all my WhatsApp logs and bank receipts. LegalRecovery connected me with a lawyer who drafted the notice within 24 hours. The speed post tracking was updated on my dashboard, and the debtor settled in 10 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Joshi"
      },
      "reviewBody": "I didn't know how to send a notice to a company. The guide explained that I must find the registered MCA address and name the directors. I followed this, and the pressure worked. The company refunded my advance payment immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Abhishek Malhotra"
      },
      "reviewBody": "Excellent information on WhatsApp service. I served the notice digitally first, as the debtor was evading speed post. The double blue ticks screenshot backed by the 65B certificate was enough to force them to sign a settlement deed."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Radhika Iyengar"
      },
      "reviewBody": "Very practical guide. The section on how to handle the debtor's reply helped me write a proper rejoinder notice. LegalRecovery makes the entire complex process of legal drafting simple and flat-priced."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Gaurav Sen"
      },
      "reviewBody": "Professional service. Everything is handled digitally on their dashboard, from uploading bank PDFs to advocate verification. The speed post consignment details were shared instantly. Recovered ₹3.5 Lakhs commercial dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Chawla"
      },
      "reviewBody": "This step-by-step layout is perfect. It explains exactly what evidence is required before drafting. I gathered my invoices and got a verified legal notice sent to a defaulting client. Highly recommended platform."
    }
  ]
};

export default function HowToSendLegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction & Pre-Drafting Audit" },
    { id: "step1-evidence", title: "Step 1: Gathering Evidence & KYC" },
    { id: "step2-drafting", title: "Step 2: Onboarding & Drafting Mechanics" },
    { id: "step3-service", title: "Step 3: Dispatch & Service Protocols" },
    { id: "step4-responses", title: "Step 4: Managing Debtor Responses" },
    { id: "step5-escalations", title: "Step 5: Post-Notice Legal Action" },
    { id: "how-platform-works", title: "How LegalRecovery Platform Works" },
    { id: "testimonials", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "How to Send a Legal Notice for Recovery of Money", href: "/how-to-send-a-legal-notice-for-recovery-of-money-in-india" },
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
        
        {/* Expanded Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              How to Send a <span className="text-[#DC2626]">Legal Notice for Recovery of Money</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A complete, step-by-step practical guide on how to audit your debt, collect admissible evidence, draft your notice with advocate precision, and track Speed Post delivery in India.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Your Notice Now
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
                
                {/* Introduction & Pre-Drafting Audit */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Introduction &amp; Pre-Drafting Audit
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Taking the first step toward recovering outstanding funds can be daunting. Creditors often hesitate because they are unsure of the correct legal channels, concerned about advocate fees, or worried about damaging personal or business relationships. However, letting defaults drag on without formal action is a recipe for losing your capital permanently. Under Indian law, the process of recovering money begins with a structured and legally binding workflow. The entry point of this workflow is serving a formal <strong>Legal Notice for the Recovery of Money</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Before putting pen to paper or engaging an advocate, it is vital to perform a <strong>Pre-Drafting Audit</strong>. This audit is a sanity check to ensure that your claim is legally viable and that you are not wasting resources. The audit involves verifying two critical factors:
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">1. The Limitation Window Check</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Under the <strong>Limitation Act, 1963</strong>, the limitation period for recovering debts is <strong>three (3) years</strong> from the date the default occurred (the cause of action). If a loan matured or an invoice became due in January 2023, you must initiate legal action before January 2026. If you send a notice or file a suit after this 3-year window without a written acknowledgment of debt to reset the clock under Section 18, the court will dismiss your claim as time-barred.
                        </p>
                      </div>
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">2. Financial Solvent Check</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Audit whether the debtor is active, in operation, or going through bankruptcy. If a corporate debtor has entered insolvency under the IBC, filing a suit is barred, and you must instead submit claims to the appointed Resolution Professional. For individuals, verify if they hold traceable personal assets or bank accounts that can be attached by court orders.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the pre-drafting audit confirms that your claim is active, valid, and viable, you can proceed with the step-by-step process of drafting, serving, and following up on the notice. This guide outlines these steps in exhaustive, practical detail to ensure that you are fully prepared to secure your money legally and efficiently.
                    </p>
                  </div>
                </section>

                {/* Step 1: Gathering Evidence & KYC */}
                <section id="step1-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Step 1: Gathering Evidence &amp; KYC
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A lawsuit in India is won or lost based on the quality of documentation. A debtor will search for any loophole to deny the debt, claim that the funds were a gift, or argue that the work delivered was defective. To prevent these defenses, you must gather an airtight evidentiary file before drafting the notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Your evidence gathering should target three categories of documentation:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">A. The Transaction Trail</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Collect bank statements highlighting the transfer of funds (NEFT, RTGS, IMPS, or UPI transactions). Avoid relying on cash payments; if cash was lent, you must produce signed cash receipts, promissory notes, or witness declarations. In commercial transactions, collect signed tax invoices, purchase orders (PO), delivery challans, and transportation bills (Lorry Receipts).
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">B. Written Acknowledgments and Communications</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Audit all communications for admissions of debt. Print out emails where the debtor promises to clear the dues by a specific date. Take screenshots of WhatsApp chats where they acknowledge receiving the funds or apologize for the delay. Under the <strong>Bharatiya Sakshya Adhiniyam, 2023</strong>, these digital admissions are highly valuable, provided they are backed by the correct device certificate.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">C. Debtor Tracing &amp; KYC Verification</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          You must verify the exact legal identity and physical location of the debtor. For individuals, obtain their PAN card details, Aadhaar details, or last known residential address. For partnership firms or LLP/Private Limited companies, search the Ministry of Corporate Affairs (MCA) portal to pull their active registered office address. Naming the correct legal entity (e.g. &quot;Novus Tech Private Limited&quot; instead of just &quot;Novus Tech&quot;) is a statutory requirement to make the notice enforceable.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 2: Onboarding & Drafting Mechanics */}
                <section id="step2-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Step 2: Onboarding &amp; Drafting Mechanics
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once your evidence file is complete, the next step is advocate onboarding and drafting. While you can draft a simple demand letter yourself, having a notice drafted and sent by a practicing advocate on their official letterhead changes the legal landscape. It signals to the debtor that you have initialized the formal litigation pipeline.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When onboarding an advocate, provide them with a structured <strong>Chronology sheet</strong> outlining the facts. The advocate will then draft the notice, adhering to the following structural mechanics:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Statutory References:</strong> The draft must cite appropriate acts. For loans, it references Section 10 and 73 of the Indian Contract Act, 1872. For unpaid goods, it cites the Sale of Goods Act, 1930. For interest claims, it cites the Interest Act, 1978.
                      </li>
                      <li>
                        <strong>Liquidated Claim Presentation:</strong> The draft must state the exact outstanding amount. This includes: the Principal Outstanding, the Interest Accrued (calculated at a specific rate, e.g., 18% p.a. for commercial, 9% p.a. for personal), and the Advocate drafting charges.
                      </li>
                      <li>
                        <strong>Notice Period and Remedy:</strong> The notice must explicitly grant a <strong>15-day notice period</strong> from delivery for the debtor to clear the dues. It must state that failure to comply will result in civil lawsuits (Summary Suits under Order 37 CPC) and criminal actions (Section 138 NI Act for cheque bounce, or cheating/criminal breach of trust under BNS).
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Step 3: Dispatch & Service Protocols */}
                <section id="step3-service" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Step 3: Dispatch &amp; Service Protocols
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A beautifully drafted notice is useless unless it is delivered. Proving service of the notice is the foundation of any subsequent lawsuit. If the debtor claims in court that they never received the notice, the entire suit can be dismissed or delayed.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary and most secure method of service is through <strong>Speed Post</strong> or <strong>Registered Post with Acknowledgment Due (RPAD)</strong> via the India Post network. This method provides:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li>A physical booking receipt containing a 13-digit tracking number (consignment number).</li>
                      <li>A court-admissible tracking report showing the date, time, and status of delivery.</li>
                      <li>An Acknowledgment Card (AD Card) physically signed by the recipient upon delivery.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor intentionally refuses to accept the post, or the envelope is returned marked &quot;refused&quot; or &quot;not claimed,&quot; the law treats this as <strong>constructive service</strong> under Section 27 of the General Clauses Act, 1897. The court will presume delivery, and the debtor cannot claim ignorance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To double-secure service, we also recommend <strong>Electronic Service</strong>. Serve the notice PDF via the debtor&apos;s verified corporate email and WhatsApp number. Under the <strong>Bharatiya Sakshya Adhiniyam, 2023</strong>, electronic delivery is legally valid. Take screenshots of the email delivery status, WhatsApp double-blue ticks, and archive them. To submit this electronic service in court, your advocate will prepare a <strong>Section 63 BSA Certificate</strong> verifying that the devices were functioning properly and the logs have not been tampered with.
                    </p>
                  </div>
                </section>

                {/* Step 4: Managing Debtor Responses */}
                <section id="step4-responses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Step 4: Managing Debtor Responses
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the legal notice is delivered, the debtor has 15 days to react. Their response will determine your next strategic move. Typically, debtors react in one of three ways:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">Scenario A: Total Denial or No Response</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          If the debtor ignores the notice completely or replies with a blanket denial of the transaction, the notice period expires, and you gain the right to file your lawsuit. Their silence or denial is valuable because it shows the court their lack of cooperative intent, and they will struggle to raise new, complex defenses during the trial.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">Scenario B: Quality Disputes and Counter-claims</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          In commercial defaults, debtors often reply claiming that the goods delivered were defective, or the service was incomplete. Analyze their claims with your advocate. If their claims are demonstrably false (e.g. they accepted the goods via delivery challan without protest), your advocate will draft and send a <strong>Rejoinder Notice</strong> to dismantle their arguments.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">Scenario C: Negotiating a Settlement</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          In 80%+ of cases, the debtor will contact you or your advocate to settle the matter. They may offer to pay the principal in installments or request a waiver of the interest. If you reach an agreement, do not accept verbal promises. Your advocate will draft a formal <strong>Settlement Deed</strong>. This deed outlines the installment dates, contains a default penalty clause, and states that you will withdraw legal claims only after the final installment is credited.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 5: Post-Notice Legal Action */}
                <section id="step5-escalations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Step 5: Post-Notice Legal Action
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day notice period expires and the debtor has neither paid nor negotiated, you must execute the legal threats outlined in your notice. Continuing to send informal reminders after serving a legal notice signals weakness, making the debtor take you less seriously.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Depending on your transaction, your advocate will initiate one of three primary legal escalations:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Fast-Track Summary Suit (Order 37 CPC)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If the loan, B2B invoice, or service retainer is backed by a written contract, promissory note, or signed ledger, your advocate will file a <strong>Summary Suit under Order 37 of the CPC</strong>. This fast-track lawsuit bypasses a full trial, forcing the debtor to seek &quot;leave to defend&quot; within 10 days of summons. If leave is denied, the court passes an immediate recovery decree.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Cheque Bounce Prosecution (Section 138 NI Act)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If the debtor issued a cheque that bounced, and you served the statutory Section 138 demand notice within 30 days of the bounce, you must file a criminal complaint in the Magistrate&apos;s Court within 30 days of the expiry of the notice period. This leads to a criminal trial, personal arrest warrants, and potential double-value fines.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. BNS / IPC Criminal Complaint</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If the debtor used fake documents, identity theft, or misappropriated funds lawfully entrusted to them, you can file a criminal complaint for <strong>Cheating (Section 318 BNS / 420 IPC)</strong> or <strong>Criminal Breach of Trust (Section 316 BNS / 406 IPC)</strong>. This is pursued alongside civil recovery to build maximum legal pressure.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How LegalRecovery Platform Works */}
                <section id="how-platform-works" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    How LegalRecovery Platform Works
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sending a legal notice manually involves booking consultations, traveling to advocate offices, explaining facts repeatedly, tracking dispatch receipts, and coordinating follow-ups. The <strong>LegalRecovery</strong> platform automates and streamlines this entire workflow. By integrating technology with a handpicked panel of verified legal professionals, we offer an efficient, flat-price solution to draft and serve notices directly from your computer.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      Here is the systematic workflow showing how our platform helps you send a legal notice in India:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">1</span>
                            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Case Submission &amp; Document Upload</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            You start by filling out our intuitive questionnaire, detailing the nature of the dispute, outstanding amount, and debtor coordinates. You can securely upload all supporting documentation (agreements, invoices, bank statements, ledger PDFs, and digital communication logs) directly to your secure user dashboard.
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">2</span>
                            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">AI Audit &amp; Verification</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Our system performs a preliminary digital audit to verify that your claim falls within the 3-year statutory limitation period. If the debtor is a business entity, we cross-reference active GSTIN details and Ministry of Corporate Affairs (MCA) directories to verify their legal name and active registered office addresses.
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">3</span>
                            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Advocate Drafting &amp; Review</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Your case is assigned to a practicing advocate from our partner panel specializing in debt recovery. The advocate reviews your files, structures the chronology of events, drafts a professional notice on their official letterhead with appropriate statutory citations (e.g., Section 73 Contract Act, Interest Act), and shares the draft with you for review.
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">4</span>
                            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Multi-Channel Service &amp; Dispatch</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Once approved, we handle the physical booking and dispatch via India Post Speed Post. Concurrently, the notice is served digitally via verified email and WhatsApp. We track delivery, upload the booking slips, and provide a digital Section 63 BSA certificate to establish read receipt records for subsequent court filings.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#111827]/5 border border-slate-100 rounded-2xl p-6 md:p-8 mt-6">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">Why Choose LegalRecovery Over Manual Notice Dispatch?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className="space-y-1">
                          <p className="text-xs text-slate-700 font-bold flex items-center gap-1.5">
                            <span className="text-[#DC2626]">✓</span> Flat, Transparent Fees
                          </p>
                          <p className="text-[11px] text-slate-600 leading-normal">
                            No hourly consult charges or hidden typing fees. Get attorney drafting and speed post delivery starting at ₹999.
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-slate-700 font-bold flex items-center gap-1.5">
                            <span className="text-[#DC2626]">✓</span> 100% Digital Process
                          </p>
                          <p className="text-[11px] text-slate-600 leading-normal">
                            No office visits required. Track status, read replies, and upload files completely online from our dashboard.
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-slate-700 font-bold flex items-center gap-1.5">
                            <span className="text-[#DC2626]">✓</span> Multi-Stage Escalation
                          </p>
                          <p className="text-[11px] text-slate-600 leading-normal">
                            We don&apos;t stop at one dispatch. We support subsequent weekly reminder dispatches to build pressure on the debtor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Success Stories & Reviews */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Success Stories &amp; Reviews
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Following a structured, step-by-step notice process has helped hundreds of creditors secure their outstanding capital without facing long court battles. Below are three representative case studies of successful recoveries, followed by verified client reviews:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Friendly Loan Recovery</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹4.2 Lakhs personal loan</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A client in Delhi NCR lent ₹4.2 Lakhs to a colleague via bank transfer. When the colleague stopped replying, the client used our platform to audit the evidence, compile the bank UTR logs, and serve a notice on our advocate&apos;s letterhead. The debtor responded within 12 days and repaid the amount via bank transfer.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: B2B Supplier Trade Receivable</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹8.5 Lakhs from corporate buyer</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A supplier in Chennai delivered raw materials to a logistics firm. The firm withheld the final payment of ₹8.5 Lakhs. The supplier audited the MCA directory, gathered the challans, and had our advocate serve a notice on the firm&apos;s registered address. The firm&apos;s legal team cleared the invoice to avoid IBC insolvency proceedings.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Gig Agency Retainer Fee</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.6 Lakhs from startup client</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          An agency in Bangalore delivered a mobile app prototype. The startup client refused to pay the final retainer, claiming poor app feedback. The agency gathered their Jira logs, email handovers, and sent a notice served via WhatsApp and speed post. The startup signed a settlement deed and paid.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviewSchema.review.map((rev, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-amber-500 text-sm">★</span>
                            ))}
                          </div>
                          <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div 
                          key={idx} 
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
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

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Support?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We handle the entire recovery notice process for you, from evidence audit and advocate drafting to dispatching and tracking.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Setup
                </button>
              </div>
            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
