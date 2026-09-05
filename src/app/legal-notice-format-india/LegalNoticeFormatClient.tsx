'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is a legal notice and is it mandatory before filing a court case in India?",
    answer: "A legal notice is a formal written communication sent by one party to another, outlining a legal grievance and demanding remedy. Under Indian law, a legal notice is not universally mandatory for all civil cases, but it is a statutory requirement under specific laws. For example, Section 80 of the Code of Civil Procedure (CPC), 1908, makes it mandatory to serve a two-month legal notice before filing a suit against the government or a public officer. Similarly, Section 138 of the Negotiable Instruments Act, 1881, requires a 15-day notice to be served within 30 days of receiving information about a cheque bounce. For commercial and contract disputes, serving a notice is highly recommended as it demonstrates to the court that the plaintiff attempted pre-litigation resolution."
  },
  {
    question: "Can a legal notice be sent without hiring an advocate?",
    answer: "Yes, a legal notice can be sent by a person directly, without hiring an advocate. This is known as a personal legal notice. However, it is highly recommended to have a notice drafted and served by an advocate. An advocate-drafted notice carries the lawyer's letterhead, which adds legal weight and seriousness to the demand. Furthermore, advocates possess the professional expertise to structure the legal arguments, specify the exact provisions of the relevant acts (such as the Indian Contract Act or the Code of Civil Procedure), and avoid errors that could damage the subsequent lawsuit. Any admissions made in a legal notice are legally binding, so professional drafting is critical."
  },
  {
    question: "What is the typical notice period given in a legal notice for recovery of money?",
    answer: "In a legal notice for recovery of money, the standard notice period given to the recipient to comply with the demands is 15 days from the date of receipt. In some cases, depending on the complexity of the contract or specific statutory provisions, a 30-day notice period may be granted. This compliance window is crucial because it allows the recipient reasonable time to respond, arrange funds, or settle the dispute. If the recipient fails to clear the outstanding amount within this notice period, the sender gains the right to initiate legal proceedings in a competent civil court or commercial tribunal immediately."
  },
  {
    question: "What happens if the recipient refuses to accept the legal notice?",
    answer: "If the recipient deliberately refuses to accept the legal notice sent via Registered Post or Speed Post, the postal department will return it with an endorsement such as 'Refused' or 'Not Claimed'. Under Indian law, particularly Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act, 1872, service of notice is presumed to be complete if it was sent to the correct address with prepaid postage. The court will treat 'Refused' as deemed service, meaning the recipient is legally considered to have received the notice. It is important to preserve the returned envelope with the postal markings intact to present to the judge as proof."
  },
  {
    question: "How long is a legal notice valid to file a case in court?",
    answer: "The validity of a legal notice does not expire, but the right to file a lawsuit is governed by the Limitation Act, 1963. The limitation period is the time within which you must file your suit in court. For most money recovery cases, the limitation period is three years from the date the cause of action arose (e.g., the date a payment was due or a cheque bounced). Serving a legal notice does not halt or extend this three-year limit. Therefore, you must keep track of the timeline and ensure your lawsuit is filed before the period expires, regardless of when the notice was sent."
  },
  {
    question: "Can a legal notice be sent digitally via WhatsApp or Email in India?",
    answer: "Yes, Indian courts have recognized digital service of legal notices. Under the Information Technology Act, 2000, and subsequent judicial precedents from the Supreme Court of India, a legal notice sent via email or WhatsApp is considered valid service, provided it can be proved that the message was successfully delivered and read. For WhatsApp, the 'blue double ticks' serve as evidence of receipt. However, to ensure maximum legal safety, it is standard practice to send the notice via physical Registered Post AD (Acknowledgement Due) or Speed Post alongside the digital copy, creating a comprehensive proof of delivery."
  },
  {
    question: "Is a response to a legal notice mandatory, and what happens if it is ignored?",
    answer: "Legally, there is no automatic penalty or statutory provision that makes replying to a legal notice mandatory in general civil cases (except under specific statutes like the Negotiable Instruments Act). However, ignoring a legal notice is highly disadvantageous. If the case goes to court, the judge will notice that the defendant failed to respond to a formal accusation, which can lead to an adverse inference. By not replying, the recipient misses the opportunity to state their version of the facts, dispute the claims, or offer an amicable settlement, making the subsequent litigation more difficult to defend."
  },
  {
    question: "What is the difference between a legal notice and a demand letter?",
    answer: "While the terms are often used interchangeably, there are distinct differences in Indian legal practice. A demand letter is a formal business communication sent by one company or individual to another, requesting payment or performance of an obligation, usually without explicit legal citations or advocate involvement. A legal notice, on the other hand, is a formal legal document drafted by a legal professional (or the sender), citing specific statutes, detailing the cause of action, and threatening formal legal action (like a civil suit) if the demands are not met. A legal notice is a formal precursor to litigation."
  },
  {
    question: "How much does it cost to draft and send a legal notice in India?",
    answer: "The cost of drafting and sending a legal notice in India varies widely depending on the complexity of the dispute, the amount of money involved, and the reputation of the advocate. Simple notices for rent defaults or minor debt recovery may cost between 2,000 and 5,000 INR. More complex notices involving commercial contracts, e-commerce platforms, or intellectual property disputes drafted by senior counsel can range from 10,000 to 25,000 INR or more. Many online legal service providers offer standardized notices at fixed, affordable rates, making professional drafting accessible to small businesses and individuals."
  }
];

const reviews = [
  {
    author: "Vikramaditya Sen (Kolkata)",
    rating: "5",
    text: "I was struggling to recover 4.5 Lakhs from a client who kept ignoring my invoices. I downloaded generic templates online, but they were full of old English and lacked specific statutory provisions. After consulting with the legal team, we sent a highly structured, advocate-backed notice detailing the breach. The client paid the full amount within 10 days of receiving the notice. Having the right format and citing the Contract Act was the turning point."
  },
  {
    author: "Meera Deshmukh (Pune)",
    rating: "5",
    text: "A vendor failed to deliver raw materials after taking an advance of 2 Lakhs. I wanted to file a case but learned that serving a notice first is crucial. We drafted a notice using the checklist here, outlining the facts chronologically and demanding refund within 15 days. Faced with formal notice and the threat of civil litigation, the vendor refunded the money with interest, avoiding a long court battle."
  },
  {
    author: "Karan Johar (Bengaluru)",
    rating: "5",
    text: "I gave a personal loan of 6 Lakhs to an acquaintance without a detailed written agreement, just bank transfers and WhatsApp chats. When he refused to pay, I didn't know if a notice would work. Using the format and checklist on this site, we drafted a notice highlighting the bank transactions as evidence of debt. It was served digitally via verified email. The recipient realized the legal risk and settled the debt in three installments."
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
      "name": "Legal Notice Format in India: PDF Download & Drafting Checklist",
      "item": "https://www.legalrecovery.in/legal-notice-format-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice Format in India: PDF Download & Drafting Checklist",
  "description": "Download a legally valid legal notice format in India. Learn how to write a legal notice, essential drafting rules under the Civil Procedure Code, and money recovery notice guidelines.",
  "image": "https://www.legalrecovery.in/og-legal-notice-format.png",
  "author": {
    "@type": "Person",
    "name": "Advocate Aman Chawla",
    "url": "https://www.legalrecovery.in/authors/advocate-aman-chawla"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Advocate Sneha Sharma",
    "url": "https://www.legalrecovery.in/authors/advocate-sneha-sharma"
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
  "name": "Legal Notice Drafting and Advisory Service",
  "image": "https://www.legalrecovery.in/og-legal-notice-format.png",
  "description": "A comprehensive checklist and formatting guide to draft and serve legally enforceable notices in India, tailored for civil and commercial money recovery.",
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

export default function LegalNoticeFormatClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction to Legal Notice Formats in India" },
    { id: "critical-role", title: "The Critical Role of a Legal Notice under Indian Law" },
    { id: "essential-structure", title: "Essential Structure and Anatomy of a Legal Notice Format",
      children: [
        { id: "header-ref", title: "Header, Title, and Reference Number" },
        { id: "sender-receiver-details", title: "Details of the Sender and Receiver" },
        { id: "statement-facts", title: "Statement of Facts and Chronology" },
        { id: "legal-basis-demands", title: "Legal Basis and Specific Demands" },
        { id: "compliance-window", title: "Notice Period and Advocate Endorsement" }
      ]
    },
    { id: "drafting-rules-cpc", title: "Drafting Rules and Civil Procedure Compliance in India" },
    { id: "recovery-specific-notice", title: "The Legal Notice Format for Recovery of Money" },
    { id: "comparison-routes", title: "Comparison: Generic Templates vs. Professional Legal Notice" },
    { id: "step-by-step-drafting", title: "Step-by-Step Roadmap to Draft and Serve a Legal Notice" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Checklist for Drafting" },
    { id: "success-stories", title: "Real-World Money Recovery Success Stories" },
    { id: "faq-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice Format in India", href: "/legal-notice-format-india" }
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
              Indian Civil Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice Format in India: <span className="text-[#DC2626]">Drafting Checklist & PDF Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the essential legal notice format under Indian civil law. Avoid outdated templates and learn the correct drafting checklist to recover outstanding payments.
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
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>
              
              {/* Introduction */}
              <div id="introduction" className="prose prose-base max-w-none text-slate-650 space-y-6 scroll-mt-32">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  A legal notice is a formal pre-litigation step that serves as the foundation for civil suits in India. While generic templates are widely available online, they often lack proper structure, contain outdated legal jargon, and miss critical statutory requirements. This comprehensive guide provides a modern, legally valid notice format, explains the essential drafting principles under the Code of Civil Procedure, and outlines the checklist of evidence required to serve an enforceable demand.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In the Indian legal ecosystem, communication between disputing parties must follow specific protocols before escalating to a court of law. One of the most critical mechanisms is the legal notice, a formal written document that states a party's grievances, sets out the material facts of the case, establishes a legal demand, and provides a compliance window. Whether you are dealing with unpaid commercial invoices, salary delays, landlord tenant conflicts, or breach of contract, the drafting of this document must be precise. A poorly worded notice can weaken your subsequent court case, as statements made in a legal notice are considered binding admissions that can be used against you in judicial proceedings.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Sellers, freelancers, landlords, and businesses often search for a standard legal notice format india pdf to handle outstanding dues. However, generic internet downloads rarely cover the nuances of individual transactions. A proper notice must incorporate specific components (Header, Party Details, Facts of Case, Specific Legal Demands, Notice Period, and advocate endorsement) to be effective. For recovery matters, you should understand how to tailor the notice for specific situations, such as serving a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium font-semibold">legal notice for recovery of money</Link> instead of using a generic template. This guide dissects the anatomy of a legally valid notice, explores the relevant sections of the Code of Civil Procedure, and offers a step-by-step roadmap to draft, verify, and serve a notice that commands respect and results.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The primary gap in the current online space is the abundance of low-quality, copy-paste legal notice drafts that contain obsolete language (such as under my instructions and on behalf of my client repeated ad nauseam without substance) and lack the exact statutory foundations required by modern Indian tribunals. A valid notice must be clear, concise, chronological, and legally robust. It should show the recipient that you are prepared to escalate the matter to court if the demand is not resolved. By following the civil rules and drafting guidelines explained below, you can draft a document that protects your interests and paves the way for a successful recovery.
                </p>
              </div>

              {/* Section 1: The Critical Role of a Legal Notice */}
              <section id="critical-role" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Critical Role of a Legal Notice under Indian Law
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice acts as a formal warning - a pre-litigation step - that informs the recipient that they have violated the sender's rights or breached a contractual agreement. The primary objective is to resolve the dispute amicably without entering into a protracted, expensive court battle. In India, where civil courts face significant backlogs, the legal notice serves as a filter, allowing parties to settle their differences during the compliance window. If the recipient responds to the notice with a settlement offer or pays the outstanding amount, both parties save time, energy, and financial resources.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Beyond its role as a negotiation tool, a legal notice has substantial evidentiary value in court. It establishes the date on which the dispute was formally communicated, which is vital for calculating interest and showing the court that the plaintiff acted in good faith by trying to resolve the matter before resorting to litigation. Under the Specific Relief Act, 1963, and the Code of Civil Procedure, 1908, showing that you gave the opposite party adequate opportunity to perform their contractual obligations is a critical factor in obtaining favorable court orders.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In certain types of disputes, serving a notice is not merely a recommendation; it is a mandatory statutory obligation. If you are preparing to file a suit against the government, a government department, or a public officer in their official capacity, Section 80 of the Code of Civil Procedure, 1908, mandates that you serve a written notice at least two months prior to filing the suit. If you fail to serve this notice, the court will dismiss your suit immediately. Similarly, under Section 138 of the Negotiable Instruments Act, 1881, you must serve a notice to the drawer of a bounced cheque within 30 days of receiving the memo from the bank, demanding payment within 15 days. If this notice is not served or is served late, you cannot file a criminal complaint under the Act, and your legal remedy will be severely limited.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In commercial transactions, contracts often contain clauses requiring a mandatory consultation or notice period before initiating arbitration or litigation. A formal legal notice satisfies these contractual pre-requisites. Even in cases where it is not mandatory by statute (such as standard recovery of outstanding business invoices), serving a notice drafted by a professional advocate demonstrates your resolve. It signals to the defaulting party that you have hired legal counsel and are prepared to file a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium font-semibold">civil suit for recovery of money India</Link> if they do not comply, which often prompts immediate payment or settlement negotiations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    It is also important to note that the legal notice must be drafted with absolute precision. Since it is the first formal document in the dispute, any facts, figures, or legal admissions stated within it will bind you throughout the litigation process. If your notice contains incorrect facts or contradictory statements, the opposite party's defense counsel will exploit these discrepancies in court, arguing that your case is inconsistent. This is why relying on generic, unvetted online templates is highly risky, and understanding the precise layout and requirements is critical for any claimant.
                  </p>
                </div>
              </section>

              {/* Section 2: Essential Structure and Anatomy of a Legal Notice */}
              <section id="essential-structure" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Essential Structure and Anatomy of a Legal Notice Format
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legally valid notice must contain specific structural sections to ensure it is clear, unambiguous, and compliant with civil litigation rules. A standard notice can be divided into six core sections: the header, party details, facts of the case, specific legal demands, the compliance notice period, and the advocate endorsement. Each section serves a distinct purpose and must be drafted according to established guidelines.
                  </p>

                  <h3 id="header-ref" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    1. Header, Title, and Reference Number
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The header of the legal notice contains the professional credentials of the advocate drafting the notice. It is printed on the advocate's official letterhead, which displays their name, office address, contact numbers, email address, and enrollment number with the State Bar Council. This information is critical because it establishes the sender's legal representation and provides a direct channel for the recipient or their lawyer to respond.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Immediately below the letterhead, the notice must carry a unique reference number and the date of dispatch. The reference number is essential for tracking correspondence and proving the date of service in future court proceedings. The date is particularly important as it marks the beginning of the compliance window and is used to calculate the interest period for outstanding debts. The title of the notice must be centered and written in bold, uppercase letters, clearly stating the nature of the notice (e.g., 'LEGAL NOTICE FOR RECOVERY OF OUTSTANDING DUES UNDER THE INDIAN CONTRACT ACT, 1872' or 'LEGAL NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881').
                  </p>

                  <h3 id="sender-receiver-details" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    2. Details of the Sender and Receiver
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must identify the parties involved in the dispute. The details must be accurate and comprehensive, matching the names and addresses recorded in the contracts, invoices, or official government registrations (such as GSTIN or PAN).
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For the recipient, you must list their full name, parentage (if known and applicable), and their complete residential or business address. If the recipient is a partnership firm, LLP, or private limited company, the notice must be addressed to the firm or company through its partners, directors, or authorized representatives. Addressing the notice correctly is a vital legal requirement; if you serve a notice to an incorrect address or fail to name the authorized officers of a corporation, the recipient can claim in court that they never received it, thereby invalidating the service.
                  </p>

                  <h3 id="statement-facts" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    3. Statement of Facts and Chronology
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The statement of facts is the narrative core of the legal notice. It must outline the history of the relationship between the sender and the recipient in a strict, chronological order. The facts should begin with the origin of the agreement or transaction (such as a contract signature, purchase order placement, or employment offer letter), detail the performance of obligations by the sender (delivery of goods, rendering of services, or payment of deposits), and conclude with the breach committed by the recipient.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The narrative must be detailed, specifying dates, invoice numbers, transaction IDs, and communication dates. The language must be objective, factual, and free from emotional outbursts or personal attacks. You must explicitly state how the recipient failed to perform their duties (such as non-payment, delayed delivery, or unilateral termination), and detail all the subsequent follow-ups (emails, phone calls, and text messages) that were ignored or rejected. This chronological record proves that you gave the recipient multiple chances to rectify the situation, making their breach deliberate and clear.
                  </p>

                  <h3 id="legal-basis-demands" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    4. Legal Basis and Specific Demands
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    After establishing the facts, the notice must lay down the legal basis for your claims. This involves citing the specific provisions of Indian law that the recipient has violated. For instance, in a breach of contract case, you should cite Section 73 and 74 of the Indian Contract Act, 1872, which govern compensation for breach and penalties. In a money recovery dispute, you must assert the principle of unjust enrichment under Section 70. Citing the appropriate statutes shows the recipient that your claims are backed by solid legal foundations and are not merely empty threats.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Following the legal citations, the notice must outline your specific demands. The demands must be clear, quantifiable, and non-negotiable. If you are seeking money recovery, you must state the exact outstanding principal amount, the interest rate claimed (which must align with the contract terms, trade customs, or the Interest Act, 1978), and the legal cost incurred for drafting the notice. If you are demanding performance of an obligation (such as the delivery of a property deed or the release of a relieving letter), you must specify the exact action required.
                  </p>

                  <h3 id="compliance-window" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    5. Notice Period and Advocate Endorsement
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The compliance notice period is the specific timeframe given to the recipient to fulfill your demands. The standard period is 15 days from the receipt of the notice, which is widely considered reasonable for commercial and personal disputes under Indian civil procedure. For statutory notices under Section 80 CPC, the notice period is two months, while Section 138 of the NI Act requires 15 days. The notice must state that if the recipient fails to comply with the demands within this specified period, the sender will initiate formal legal action in a court of law, commercial tribunal, or arbitration, and the recipient will be liable for all subsequent legal costs and interest.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The legal notice concludes with the advocate's signature, date, and endorsement. The advocate signs the document in their professional capacity on behalf of their client. The client also signs the notice in many practices (often under a statement declaring that the facts have been read and verified as true), confirming that the advocate is acting under direct instructions. The signature block must be clean and clearly identify the signing parties to prevent any claims of unauthorized service.
                  </p>
                </div>
              </section>

              {/* Section 3: Drafting Rules and Civil Procedure Compliance */}
              <section id="drafting-rules-cpc" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting Rules and Civil Procedure Compliance in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Drafting a legal notice requires a thorough understanding of the Code of Civil Procedure, 1908, and the Indian Evidence Act, 1872. Although a legal notice is served before a suit is filed, it must adhere to the general principles of pleadings outlined in Order VI of the CPC. Order VI, Rule 2, states that every pleading shall contain, and contain only, a statement in a concise form of the material facts on which the party pleading relies for his claim or defense, but not the evidence by which they are to be proved. Applying this rule to your legal notice means you must state all the material facts clearly, without cluttering the document with irrelevant evidence or arguments.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Another critical drafting rule is the doctrine of admission. Under Section 17 to 23 of the Indian Evidence Act, 1872, statements made in a legal notice can be treated as admissions by the sender. If you make a statement in your notice (for example, admitting that you received a partial payment or acknowledging a delay on your part), this admission is legally binding. You cannot retract or contradict this admission in your subsequent plaint without facing severe credibility issues in court. Therefore, the advocate must verify every fact, date, and figure with the client and inspect the documentary evidence before signing the notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The language used in the notice should be professional, precise, and polite, yet firm. Avoid emotional language, personal insults, or accusations of criminal intent unless you are drafting a notice for specific offenses like fraud or cheque bounce. The notice must be structured in numbered paragraphs, with each paragraph dealing with a single, clear point or transaction. This structure makes the document easy to read, reference, and respond to, both for the recipient and for the judge who will examine it in future litigation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, the notice must be served through proper, legally recognized channels. Under Order V, Rule 9, of the CPC, and standard procedural rules, serving a notice is considered valid service. In recent years, courts have recognized digital service via email and WhatsApp. Advocates recommend using these methods alongside other communication logs to ensure service is verifiable.
                  </p>
                </div>
              </section>

              {/* Section 4: Legal Notice Format for Recovery of Money */}
              <section id="recovery-specific-notice" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Legal Notice Format for Recovery of Money
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Money recovery disputes represent the largest category of civil litigation in India. Whether the dispute involves unpaid vendor invoices, freelance dues, delayed employee salaries, or outstanding personal loans, serving a structured notice is the mandatory starting point.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When drafting a notice for money recovery, the advocate must lay down the exact financial ledger. You must state the principal amount outstanding, the invoices or transactions from which the debt arose, the interest rate claimed (which must align with the written agreement or trade usage under the Interest Act, 1978), and the late payment penalties. For a detailed breakdown of recovery notice structures, you can examine our guide on the <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium font-semibold">legal notice for recovery of money</Link>.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the most complex issues in money recovery is dealing with transactions where no written agreement exists. In India, many small businesses and individuals lend money or provide services based on verbal trust, bank transfers, and informal WhatsApp chats. If you find yourself in this situation, you must establish a paper trail. You can read our advice on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium font-semibold">how to recover money without written agreement</Link> to understand how to leverage digital communications, bank records, and email correspondence to build a valid claim in your legal notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the recipient ignores the notice or refuses to pay, you must initiate formal legal proceedings. The standard route is filing a civil recovery suit or a summary suit under Order XXXVII of the CPC in a competent civil court. Understanding the procedure, jurisdiction, and court fees involved is essential. You can study our guide on a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium font-semibold">civil suit for recovery of money India</Link> to learn how to transition from a notice to active court litigation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Finally, you must be extremely mindful of the limitation period. Under the Limitation Act, 1963, the deadline to file a civil suit for money recovery is three years from the date the cause of action arose. Serving a legal notice does not stop or extend this three-year period. You must monitor the calendar carefully. For a detailed analysis of these deadlines and how to protect your right to sue, refer to our guide on the <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium font-semibold">time limit to file money recovery case India</Link>. Keeping a track of this timeline ensures that your legal notice is served well in advance of the deadline, giving you sufficient time to file your suit if the notice is ignored.
                  </p>
                </div>
              </section>

              {/* Section 5: Comparison Table */}
              <section id="comparison-routes" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Comparison: Generic Templates vs. Professional Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Sellers and businesses often hesitate between downloading a free generic legal notice format from the internet and hiring a professional advocate to draft and serve a custom notice. While templates offer convenience and zero upfront cost, they carry significant risks that can compromise your recovery efforts. The matrix below compares the two routes across key parameters:
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Generic Online Template</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Professional Lawyer Notice</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Legal Validity</td>
                          <td className="px-6 py-4">High risk of invalidity due to outdated laws, missing sections, or incorrect terminology.</td>
                          <td className="px-6 py-4">100 percent legally valid and compliant with the latest civil procedure rules and statutes.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Customization</td>
                          <td className="px-6 py-4">Rigid layout; difficult to adapt for complex commercial facts, multiple invoices, or specific breaches.</td>
                          <td className="px-6 py-4">Fully customized based on your transactions, invoices, communication history, and specific contract terms.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Advocate Letterhead</td>
                          <td className="px-6 py-4">Not available; must be sent as a personal notice, which carries less authority.</td>
                          <td className="px-6 py-4">Served on the official letterhead of a practicing advocate, showing serious intent to litigate.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Statutory References</td>
                          <td className="px-6 py-4">Often contains incorrect or generic sections that do not apply to your specific case.</td>
                          <td className="px-6 py-4">Precisely cites relevant sections of the Indian Contract Act, Negotiable Instruments Act, CPC, etc.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Response Rate</td>
                          <td className="px-6 py-4">Low response rate; corporate recipients and debtors frequently ignore personal or templated messages.</td>
                          <td className="px-6 py-4">High response rate; triggers immediate manual review by the recipient's in-house legal and compliance teams.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Evidentiary Risk</td>
                          <td className="px-6 py-4">High risk; self-drafting errors can act as binding adverse admissions, damaging your subsequent lawsuit.</td>
                          <td className="px-6 py-4">Protected; advocate ensures facts are stated carefully to preserve all legal options for the court plaint.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 6: Step-by-Step Roadmap */}
              <section id="step-by-step-drafting" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Roadmap to Draft and Serve a Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To draft and serve a legally enforceable notice, you must follow a structured process that ensures all legal and factual requirements are met. The following roadmap outlines the five essential stages of the process:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Case Consultation & Evidence Gathering</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Consult with your legal counsel and gather all relevant documents, including agreements, invoices, ledger accounts, banking transactions, and correspondence history. Verify that the debtor's registered address is active and correct.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Drafting the Fact Statement & Demands</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Draft a chronological narrative of the transaction history and the breach. Lay down the exact outstanding principal, calculated interest, and legal costs. Structure the notice in numbered paragraphs for clarity.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Legal Citation & Advocate Endorsement</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Cite the relevant provisions of the Indian Contract Act, Code of Civil Procedure, or Negotiable Instruments Act. Have the notice reviewed, approved, and signed by both the advocate and the client.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Formal Dispatch & Service</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Dispatch the physical notice via Registered Post AD and Speed Post to ensure official receipt. Send a copy via email and WhatsApp as a digital backup, and preserve all postal receipts and tracking documents.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Tracking & Compliance Monitoring</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Monitor the 15-day compliance period. If the recipient responds with a reply or settlement, negotiate the terms. If the notice is ignored or rejected, proceed with filing a civil recovery suit or initiating arbitration.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 7: Prerequisites and Evidence Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Drafting
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Before your advocate can draft a legally valid and enforceable notice, you must compile a robust evidence bundle. Having these documents ready ensures that your notice is factual, precise, and immune to simple refutations by the debtor's counsel:
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Legal Notice Drafting Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Written Agreements or Contracts:</strong> Service level agreements (SLAs), purchase orders, lease deeds, partnership agreements, or promissory notes.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Financial & Transaction Proofs:</strong> Bank statements showing payouts, transaction receipts, outstanding ledger statements, and GST invoices.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Communication Records:</strong> Chronological email threads, WhatsApp chat transcripts, letter correspondence, or call logs discussing the dues.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Proof of Default or Breach:</strong> Copy of invoices showing unpaid status past the due date, bounced cheque return memos, or contract termination letters.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Recipient Information:</strong> Full legal name, verified residential address, office address, company registration details, or GSTIN.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Case Studies and Reviews */}
              <section id="success-stories" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Real-World Money Recovery Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured legal notices, correct formatting, and professional advocate backing resolve payment disputes:
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
                          <p className="text-[10px] text-slate-500">Verified Client Success</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 9: FAQs */}
              <section id="faq-section" className="scroll-mt-32 space-y-6">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 border-b-2 border-[#DC2626] pb-2 inline-block">
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
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left font-sans">
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
