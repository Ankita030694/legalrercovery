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
    answer: "Yes. Online arbitration awards are fully valid under Indian law. The Arbitration and Conciliation Act, 1996, and the IT Act, 2000, treat digital awards the same as regular court decrees."
  },
  {
    question: "Can I use ODR to recover my money without an arbitration clause in the original contract?",
    answer: "Yes. You and the debtor can sign a simple digital arbitration agreement after the dispute arises. You can also start with voluntary online mediation. Any settlement reached during mediation is legally binding."
  },
  {
    question: "How long does the online legal recovery process typically take?",
    answer: "Most online dispute claims wrap up within 45 to 90 days. This timeline depends on the complexity of your case and how quickly both sides respond. Automated portals prevent long court adjournments."
  },
  {
    question: "Are digital signatures and WhatsApp notices legally recognized in ODR?",
    answer: "Yes. The Supreme Court of India recognizes legal notices sent via WhatsApp when blue ticks show delivery. Aadhaar e-Signatures and digital signatures also hold full legal proof under Indian law."
  },
  {
    question: "What happens if the debtor simply ignores the final ODR arbitral award?",
    answer: "You can take the award to your local civil court under Section 36. The court can order bank account freezes, salary attachments, or property seizures to recover your money."
  },
  {
    question: "Is ODR suitable for very small amounts of money recovery?",
    answer: "Yes. Online dispute resolution is ideal for small claims. Because there is no travel or costly court paperwork, legal expenses remain low. Small businesses and individuals can recover modest sums without losing money on legal fees."
  },
  {
    question: "Do I need to hire a lawyer to represent me in an ODR proceeding?",
    answer: "No, you can represent yourself on the digital portal. However, hiring a legal recovery expert helps ensure your documents are strong and filed correctly. A lawyer can also guide you through court execution if the debtor does not pay."
  }
];

const reviews = [
  {
    author: "Ravi Shankar",
    rating: "5",
    text: "The digital platform helped me recover unpaid freelance invoices in under 60 days. Serving notices online saved me from visiting a courtroom even once."
  },
  {
    author: "Meera Desai",
    rating: "5",
    text: "Online mediation helped me resolve an outstanding personal loan dispute smoothly. The mediator set up a clear payment plan that we both signed online."
  },
  {
    author: "Vikram Kapoor",
    rating: "5",
    text: "Adding a digital arbitration clause protected our small manufacturing firm from bad debts. We secured a binding award and enforced recovery through our local court."
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
              Recover unpaid money quickly through online mediation and arbitration. Skip long court delays and get legally binding recovery orders from home.
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
                      <p className="text-white font-bold text-lg mb-2">The Litigation Crisis in India</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Over 65% of pending civil cases in India involve unpaid bills. Regular court cases often take over three years. Online dispute resolution offers a fast way out. It delivers binding legal awards without a single court visit.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  Online dispute resolution helps you recover unpaid money without court delays. It gives lenders and businesses a fast, fair way to resolve claims online. Traditional civil lawsuits take years and cost too much money. In contrast, digital dispute platforms focus on speed, low costs, and clear outcomes. You can file claims from your phone or laptop. Certified neutrals guide both sides toward a settlement. If talks fail, you can get a binding arbitral award quickly.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Moving your dispute online protects your hard-earned cash. It saves you time and avoids stressful courtroom fights. You can submit contracts, chats, and bank slips with ease. The system tracks every step so no one can play delay games. Best of all, the final award has the full force of law.
                </p>
              </div>

              <section id="understanding-odr" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Online Dispute Resolution (ODR) in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Online Dispute Resolution uses web tools to resolve conflicts out of court. It combines online mediation and digital arbitration into one simple flow. Two key laws back this process: the Arbitration and Conciliation Act, 1996, and the IT Act, 2000. Under these laws, online hearings, digital records, and e-signatures are fully valid.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Government think tanks like NITI Aayog actively promote online dispute tools. Top financial bodies, including the Reserve Bank of India, also support digital claims. This strong backing gives online dispute resolution true legal weight. Lenders and business owners can now resolve money disputes with speed and confidence.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    How ODR Differs from Traditional Court Litigation
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Online dispute resolution offers major benefits over regular civil courts. First, it saves years of waiting. Traditional court cases drag on through endless adjournments. Online arbitration sets strict timelines and often wraps up in weeks. Second, it cuts legal costs. You do not need to print thick paper files or pay daily court fees.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Third, it is far more convenient. Both sides join hearings by video call from their office or home. You do not have to waste days traveling to distant courtrooms. In addition, skilled arbitrators handle your case. They understand business contracts, bank statements, and loan agreements. Their commercial expertise ensures quick, fair decisions.
                  </p>
                </div>
              </section>

              <section id="types-of-disputes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Types of Disputes Eligible for Online Resolution
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Digital platforms handle many kinds of monetary claims. Lenders and companies use them most often for unpaid invoices, service defaults, and personal loans.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Commercial Debt Recovery
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Unpaid invoices can choke any business. Late payments hurt small firms, freelancers, and suppliers the hardest. Online platforms offer a fast way to collect this money. You can upload unpaid bills, purchase orders, and delivery slips in minutes.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Trained mediators then step in to help both sides talk. Many clients agree to pay in installments once formal talks begin. This helps you recover your money while keeping a good business relationship. If the client refuses to pay, you can move straight to binding arbitration.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Personal Loan Defaults
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Lending money to friends, relatives, or peers can turn sour quickly. Without a formal recovery plan, lenders often feel stuck. Police rarely take up pure loan matters, and courts take years. Online dispute tools offer a calm, professional way forward.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A mediator helps the borrower set up a clear repayment plan. If the borrower still evades payment, an arbitrator steps in. Your bank transfers, WhatsApp chats, and promissory notes serve as strong proof. The arbitrator can issue a binding award that holds the borrower legally accountable.
                  </p>
                </div>
              </section>

              <section id="process-map" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step ODR Legal Process Map
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Follow this clear roadmap to recover unpaid money online:
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
                        The process begins with a formal digital legal notice. You send this notice by email, WhatsApp, and SMS. The Supreme Court of India accepts notices sent on WhatsApp with blue ticks as valid legal delivery. The notice states the exact amount due, the repayment deadline, and next steps. Digital delivery timestamps stop debtors from claiming they never received the letter.
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
                        If the debtor does not clear the dues, the case moves to online mediation. The platform assigns an accredited mediator to help both sides reach an agreement. The mediator reviews the debt and suggests a realistic payment plan.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        Both sides join private video calls to work out terms. If you reach a deal, both sides sign a settlement agreement via Aadhaar e-Sign. Under Indian law, this agreement has the same legal power as a court decree.
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
                        If mediation fails or the debtor refuses to join, the claim moves to arbitration. The platform appoints an independent arbitrator to rule on your case. Both sides upload their contracts, chats, and bank receipts to the portal.
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
                        The arbitrator reviews the evidence and holds virtual hearings. Then, the arbitrator issues a final, digitally signed arbitral award. This award is legally binding and orders the debtor to pay the full debt with interest.
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
                    Online dispute resolution fixes the biggest flaws of regular court cases. It lets you recover money fast while staying fully within the law:
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Speed and Efficiency of Digital Proceedings
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Automated software keeps your case on track. It prevents the paperwork delays and lost case files common in district courts. The portal enforces strict deadlines for filing documents. Hearings start on time, so business owners do not waste valuable work hours.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Most online cases finish in weeks rather than years. Because it is all online, you can resolve claims across different states with zero travel.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Legal Enforceability of the Final Award
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    An online arbitral award carries the same legal weight as a civil court decree. Section 36 of the Arbitration and Conciliation Act gives it full binding force. The debtor must follow the award once it is issued.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the debtor still refuses to pay, you can take the award to your local civil court for execution. The court can freeze the debtor's bank accounts, garnish their salary, or attach their property. This strong legal backing gives online claims real teeth.
                  </p>
                </div>
              </section>

              <section id="red-flags" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Potential Red Flags to Watch Out For
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Watch out for common debtor tricks and procedural hurdles during online claims:
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Non-responsive Defaulters During Mediation
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Some debtors ignore digital summons, hoping you will give up. They skip portal sign-ups and leave messages unread. Keep an eye out for these warning signs:
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
                        <p className="text-xs text-slate-600 mt-1">The debtor receives your digital notice but fails to reply within 15 days.</p>
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
                        <p className="text-xs text-slate-600 mt-1">The borrower refuses to verify their ID on the dispute resolution portal.</p>
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
                        <p className="text-xs text-slate-600 mt-1">The debtor files repeated excuses to stall virtual hearings.</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="shrink-0 mt-1 mr-3">
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Hiding Assets from Recovery</h4>
                        <p className="text-xs text-slate-600 mt-1">The debtor moves money to other accounts to avoid paying the final award.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    If a debtor refuses to join the case, the arbitrator does not stop. The arbitrator can hold ex-parte proceedings. They review your evidence alone and issue a binding ex-parte award in your favor. Strong digital records ensure you still win your case.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To collect your money, you must know where the debtor keeps their assets. Do a quick check of their bank branches, business premises, or vehicles. Clear asset details help court officers attach funds quickly and recover every rupee owed.
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
                  Vikram Sharma is a legal strategist who guides businesses on digital debt recovery and online dispute tools. He helps Indian creditors resolve payment defaults quickly, fairly, and within the law.
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
