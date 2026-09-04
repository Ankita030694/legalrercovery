'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const faqs = [
  {
    question: "Is an online arbitration award legally valid in India?",
    answer: "Online arbitration awards are completely valid and enforceable across Indian courts. The Arbitration and Conciliation Act 1996 grants digital awards equal status. Combined with the Information Technology Act 2000, digital awards execute like court decrees."
  },
  {
    question: "Can I use ODR to recover my money without an arbitration clause in the original contract?",
    answer: "You can execute a digital post-dispute arbitration agreement with the defaulting party. Alternatively, parties can initiate voluntary online mediation through certified digital recovery platforms. Successful mediation settlements become legally binding contracts enforceable before civil executing courts."
  },
  {
    question: "How long does the online legal recovery process typically take?",
    answer: "Online dispute resolution resolves debt recovery disputes within forty-five to ninety days. The timeframe depends upon document complexity and responsiveness of the participating parties. Automated digital case tracking prevents procedural adjournments common in traditional court litigation."
  },
  {
    question: "Are digital signatures and WhatsApp notices legally recognized in ODR?",
    answer: "The Supreme Court of India officially recognizes legal notices served through WhatsApp. Delivery confirmation with read receipts establishes valid court-admissible proof of statutory service. Aadhaar e-Signatures and digital signatures maintain full evidentiary validity under Indian statutes."
  },
  {
    question: "What happens if the debtor simply ignores the final ODR arbitral award?",
    answer: "Creditors file execution petitions under Section 36 in jurisdictional civil courts. Civil judges enforce arbitral awards by ordering immediate attachment of debtor bank accounts. Courts can also seize movable assets or garnish business receivables for debt realization."
  },
  {
    question: "Is ODR suitable for very small amounts of money recovery?",
    answer: "Digital dispute platforms make small financial claim recoveries practical and economically viable. Eliminating court travel, heavy paperwork, and lawyer appearance retainers cuts legal expenses. Small business owners can recover unpaid client dues without incurring disproportionate litigation expenses."
  },
  {
    question: "Do I need to hire a lawyer to represent me in an ODR proceeding?",
    answer: "Parties can represent themselves directly on user-friendly digital dispute resolution portals. Engaging specialized legal recovery counsel ensures accurate document drafting and evidence presentation. Advocates help navigate procedural arbitration rules and manage subsequent court execution filings efficiently."
  }
];

const reviews = [
  {
    author: "Ravi Shankar",
    rating: "5",
    text: "The digital platform helped me recover unpaid freelance invoices within sixty days. Serving digital notices via email accelerated negotiations without visiting physical courtrooms once."
  },
  {
    author: "Meera Desai",
    rating: "5",
    text: "Online mediation helped me resolve an outstanding personal loan dispute smoothly. The mediator facilitated structured settlement dialogues leading to a binding enforceable agreement."
  },
  {
    author: "Vikram Kapoor",
    rating: "5",
    text: "Implementing digital arbitration clauses protected our small manufacturing company from default losses. We secured binding arbitral awards and enforced recovery through local civil courts."
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
      "name": "Online Dispute Resolution in India",
      "item": "https://www.legalrecovery.in/online-dispute-resolution-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Online Dispute Resolution in India: Legal Recovery",
  "description": "Discover how Online Dispute Resolution (ODR) in India provides a legal, fast alternative to traditional courts for personal and commercial money recovery.",
  "image": "https://www.legalrecovery.in/og-odr-india.png",
  "author": {
    "@type": "Person",
    "name": "Vikram Sharma",
    "url": "https://www.legalrecovery.in/author/vikramsharma",
    "image": "https://www.legalrecovery.in/blank-profile.svg"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29"
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
  "name": "Online Dispute Resolution Guide",
  "image": "https://www.legalrecovery.in/og-odr-india.png",
  "description": "A comprehensive guide to utilizing Online Dispute Resolution for recovering unpaid money in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
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

export default function OnlineDisputeResolutionClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-odr", title: "Understanding Online Dispute Resolution (ODR) in India" },
    { id: "types-of-disputes", title: "Types of Disputes Eligible for Online Resolution" },
    { id: "process-map", title: "The Step-by-Step ODR Legal Process Map" },
    { id: "key-benefits", title: "Key Benefits of Choosing ODR for Money Recovery" },
    { id: "red-flags", title: "Potential Red Flags to Watch Out For" },
    { id: "reviews", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Online Dispute Resolution in India", href: "/online-dispute-resolution-india" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Money Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Online Dispute Resolution in India: <span className="text-[#DC2626]">Legal Recovery</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid personal or commercial debts swiftly through digital mediation and arbitration. Avoid lengthy courtroom adjournments while securing legally binding enforceable debt recovery awards.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                {/* DATA CALLOUT UI */}
                <div className="bg-slate-900 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#DC2626]/10 rounded-xl">
                      <svg className="w-8 h-8 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">The Litigation Crisis in India</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Over sixty-five percent of pending Indian civil disputes involve unpaid commercial invoices. Traditional litigation clogs district courts for an average of three years. Online Dispute Resolution provides legally binding arbitral awards without physical courtroom appearances.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  Digital justice systems represent a transformative breakthrough for businesses and individual lenders. Understanding online dispute resolution mechanics accelerates recovery against chronic non-paying debtors. Traditional litigation consumes excessive capital, whereas digital platforms emphasize speed and transparency.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Integrating modern technology into dispute resolution makes debt recovery accessible to everyone. Creditors move disputes from overcrowded courtrooms to secure and efficient virtual platforms. Digital enforcement tools protect contractual rights while eliminating procedural delays and bureaucracy.
                </p>
              </div>

              <section id="understanding-odr" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Online Dispute Resolution (ODR) in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Online Dispute Resolution combines digital software platforms with traditional alternative dispute resolution. The Arbitration and Conciliation Act 1996 provides statutory authority for proceedings. The Information Technology Act 2000 validates electronic records, e-signatures, and virtual hearings.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    NITI Aayog actively advocates online dispute platforms to clear judicial case backlogs. The Reserve Bank of India mandates digital grievance mechanisms across payment systems. Institutional backing establishes online resolution as a permanent foundation for modern justice. Creditors leverage structured virtual systems to recover outstanding funds without administrative friction.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    How ODR Differs from Traditional Court Litigation
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Digital dispute resolution offers distinct strategic advantages over conventional physical court litigation. Traditional recovery suits drag on for years through procedural adjournments and delays. In contrast, online arbitration concludes disputes within weeks through strict digital timelines. Traditional litigation involves high court fees, physical printing, and ongoing advocate retainers. Digital resolution reduces dispute expenditure by operating entirely within remote paperless workflows.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Virtual platforms offer superior convenience through asynchronous messaging and online video conferences. Parties participate from their offices without taking disruptive leaves from active work. The informal digital environment avoids intimidating courtroom atmosphere and complex procedural rituals. Specialized arbitrators and retired judges manage proceedings with deep commercial financial expertise. Expert adjudicators evaluate financial documents quickly, ensuring accurate and swift debt determinations.
                  </p>
                </div>
              </section>

              <section id="types-of-disputes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Types of Disputes Eligible for Online Resolution
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Digital dispute platforms resolve diverse civil, commercial, and financial payment contract disputes. Creditors primarily leverage online mechanisms for invoice realization and breached loan agreements.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Commercial Debt Recovery
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Unpaid commercial invoices severely disrupt operational cash flow for modern Indian enterprises. Digital dispute platforms resolve vendor supply contract defaults and service level breaches. Micro and small enterprises face critical liquidity challenges when corporate clients delay payments.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors can integrate claims into private dispute portals for accelerated conciliation hearings. Digital mediation encourages structured payment installments while preserving valuable long-term business partnerships. Whether recovering distributor dues or freelance fees, online resolution enforces contractual obligations.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Personal Loan Defaults
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Informal peer lending and unsecured personal loans frequently lead to bitter disputes. Lenders struggle to recover borrowed capital without pursuing hostile criminal police complaints. Online dispute resolution offers a structured and professional platform to demand repayment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Digital mediation facilitates constructive dialogue to resolve personal loan defaults without hostility. When borrowers refuse cooperation, claims escalate to binding arbitration based on promissory notes. Digital payment receipts and WhatsApp debt acknowledgments provide conclusive supporting legal evidence. Online resolution formalizes legitimate financial claims, ensuring lenders recover their hard-earned money.
                  </p>
                </div>
              </section>

              <section id="process-map" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step ODR Legal Process Map
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Following a structured legal process map ensures seamless debt recovery on platforms:
                  </p>
                </div>

                {/* LEGAL PROCESS MAP UI */}
                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Drafting and Serving the Digital Notice</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The recovery process commences by issuing a comprehensive digital legal demand notice. Creditors serve notices via verified email, WhatsApp messages, and registered mobile links. The Supreme Court confirms that instant messaging delivery constitutes valid legal notice service. Digital notices detail exact loan amounts, payment timelines, and consequences of default. Verifiable delivery timestamps eliminate common debtor claims of never receiving physical letters.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">The e-Mediation Phase</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Unresolved payment notices transition immediately into the formal online mediation resolution phase. The platform appoints an impartial accredited mediator to facilitate constructive settlement negotiations. The mediator identifies underlying financial constraints and suggests realistic structured repayment installment plans.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        Parties conduct private video conferences to negotiate mutually acceptable debt resolution terms. Reaching an agreement leads to a formal settlement contract signed via Aadhaar. Digital settlement agreements possess equal legal force as formal court decrees under law.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Binding e-Arbitration and the Arbitral Award</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Disputes escalate to binding digital arbitration if borrowers refuse mediation settlement offers. The digital platform appoints an independent arbitrator to adjudicate the financial claim. Both parties upload invoices, contract agreements, and bank records to the portal.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        Arbitrators conduct virtual hearings or review documentary evidence through accelerated paperless procedures. The arbitrator delivers a digitally signed arbitral award holding full binding legal authority. The award conclusively establishes borrower liability and mandates immediate payment of outstanding dues.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="key-benefits" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Key Benefits of Choosing ODR for Money Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Online dispute resolution resolves chronic collection bottlenecks inherent in conventional judicial litigation. Creditors recover outstanding capital faster while maintaining complete statutory compliance throughout proceedings:
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Speed and Efficiency of Digital Proceedings
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Automated case management software eliminates administrative delays and missing physical court file issues. Software systems strictly enforce document filing deadlines without granting endless verbal adjournments. Virtual hearings start punctually, saving valuable working hours for business founders and executives.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors secure enforceable arbitral awards in weeks rather than enduring years in courts. Digital processes eliminate geographical boundaries, enabling seamless resolution across different Indian cities.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Legal Enforceability of the Final Award
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Online arbitral awards carry full legal validity under Indian arbitration statutory law. Section 36 of the Arbitration and Conciliation Act 1996 ensures complete enforceability. Digital awards function with identical authority as formal decrees passed by civil courts.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If debtors fail to comply, creditors file execution petitions in local courts. Civil courts order bank account attachments, salary garnishments, or property seizures against debtors. Ironclad legal enforceability transforms online dispute resolution into a formidable recovery tool.
                  </p>
                </div>
              </section>

              <section id="red-flags" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Potential Red Flags to Watch Out For
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors must navigate procedural challenges and deceptive debtor tactics during digital dispute proceedings:
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Non-responsive Defaulters During Mediation
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Debtors occasionally ignore digital summons, hoping creditors abandon claims due to frustration. Uncooperative respondents refuse portal registrations and leave official settlement messages unread continuously:
                  </p>

                  {/* RED FLAGS LIST UI */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Ignoring Legal Notices</h4>
                        <p className="text-xs text-slate-600 mt-1">Debtors receive verified digital notices but refuse to reply within fifteen days.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Refusing Portal Registration</h4>
                        <p className="text-xs text-slate-600 mt-1">Borrowers decline to verify identity credentials on the digital dispute resolution platform.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Delay Tactics in Arbitration</h4>
                        <p className="text-xs text-slate-600 mt-1">Defaulting parties submit repetitive procedural applications to delay arbitral hearings unnecessarily.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Hidden Asset Execution</h4>
                        <p className="text-xs text-slate-600 mt-1">Debtors divert funds across accounts to frustrate court execution of arbitral awards.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Arbitrators proceed ex-parte when defaulting parties deliberately ignore official dispute notices. The arbitrator evaluates creditor evidence independently and delivers a binding ex-parte arbitral award. Solid documentary records of unpaid debts guarantee favorable awards despite respondent absence.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Executing awards requires identifying active bank accounts and tangible assets of debtors. Creditors should conduct preliminary asset searches to facilitate swift civil court execution. Diligent financial recordkeeping ensures court bailiffs attach debtor assets without procedural delays.
                  </p>
                </div>
              </section>

              <section id="reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Reviews
                </h2>
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
                        <p className="text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                        <p className="text-xs text-slate-500">Verified Client</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32">
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
                          <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Author Aside placed on the right as per specifications */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm relative">
                  <Image 
                    src="/blank-profile.svg" 
                    alt="Vikram Sharma Author Image" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg">Vikram Sharma</h3>
                <p className="text-xs text-[#DC2626] font-bold uppercase tracking-wider mb-3">Legal Strategist</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized legal strategist advising enterprises on digital dispute resolution and debt recovery. Dedicated to helping Indian creditors secure fast, compliant, and enforceable financial resolutions.
                </p>
                <time dateTime="2026-06-29" className="block mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-semibold border-t border-slate-100 pt-3">
                  Updated: June 29, 2026
                </time>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}
