'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can an Indian advocate send a valid legal notice to a company based in the US or UK?",
    answer: "Yes, an Indian advocate can issue a formal demand notice to foreign firms. Indian lawyers cannot practice inside foreign courtrooms. Even so, the legal notice creates an official dispute record. This step paves the way for arbitration or foreign litigation."
  },
  {
    question: "What if we did not sign a formal contract, but agreed to the project over email or Slack?",
    answer: "Written digital messages form a valid contract under the Indian Contract Act, 1872. You do not need a physical stamped document. Digital emails, Upwork messages, and Slack threads establish your legal agreement. They prove project scope, agreed payment rates, and asset delivery. Courts worldwide accept these digital records as binding proof."
  },
  {
    question: "The foreign client is ignoring my emails. How do I serve the legal notice?",
    answer: "You can serve the legal notice through formal corporate email to company directors. Electronic email delivery is legally accepted in international trade disputes. You should also dispatch a physical copy via DHL or FedEx. Address it directly to their registered headquarters. Always preserve the signed delivery tracking receipt for court records."
  },
  {
    question: "Which country laws apply if we did not specify a 'Governing Law' in our agreement?",
    answer: "Private International Law governs contracts that stay silent on legal jurisdiction. Indian courts often claim jurisdiction because you performed work inside India. However, foreign courts may claim jurisdiction over the overseas client. Express contractual jurisdiction clauses make debt recovery much faster and simpler."
  },
  {
    question: "Is it practical to sue a foreign client for a small invoice of three thousand dollars?",
    answer: "Full civil lawsuits in foreign courts cost too much for modest unpaid invoices. However, an advocate demand notice costs very little and brings swift results. Foreign corporations fear audit disclosures, regulatory scrutiny, and cross-border commercial disputes. A formal advocate notice usually compels quick settlement without costly litigation."
  },
  {
    question: "Can I use International Commercial Arbitration to recover my money?",
    answer: "Yes, you can arbitrate if your contract contains an arbitration clause. International commercial arbitration delivers much faster awards than foreign civil courts. Over 170 countries enforce these awards under the New York Convention. Major trading nations like India, the US, and the UK recognize them."
  },
  {
    question: "What is the limitation period for recovering dues from an international client?",
    answer: "Under the Indian Limitation Act, you get three years from the invoice date. Overseas jurisdictions impose their own strict statutory limitation periods. For instance, California allows four years for breach of written agreements. You must issue a formal demand notice promptly to safeguard your claims."
  }
];

const reviews = [
  {
    author: "Karthik N.",
    rating: "5",
    text: "A San Francisco startup stopped communicating after receiving our custom software module. We held only Slack message history as proof of our agreement. We instructed an advocate to draft a formal legal notice under commercial law. The overseas client wired our full payment three days after receiving the PDF notice."
  },
  {
    author: "Priya M.",
    rating: "5",
    text: "A UK client delayed my freelance payments for six months, citing internal audit reviews. I engaged an advocate and issued a formal legal notice to London. The warning of cross-border debt recovery went straight to their chief executive officer. Their accounts department cleared my entire overdue invoice within five business days."
  },
  {
    author: "Rohit D.",
    rating: "5",
    text: "Cross-border debt collection seemed daunting when a Dubai client stopped responding. I compiled my emails and repository logs following this clear guide. The advocate notice highlighted severe consequences for using unpaid intellectual property. The client understood the legal risks and paid the outstanding balance in full."
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
      "name": "Notice to International Client for Unpaid Invoice",
      "item": "https://www.legalrecovery.in/legal-notice-to-international-client-unpaid-invoice-recovery"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to International Client for Unpaid Invoice & Project Dues",
  "description": "Learn how Indian freelancers and agencies can legally recover unpaid invoices from foreign clients. Draft a cross-border legal notice for breach of contract.",
  "image": "https://www.legalrecovery.in/og-international-client-notice.png",
  "author": {
    "@type": "Organization",
    "name": "LegalRecovery"
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
  "name": "Cross-Border Payment Recovery Guide",
  "image": "https://www.legalrecovery.in/og-international-client-notice.png",
  "description": "A practical legal guide for freelancers and agencies recovering unpaid international invoices. Learn how advocate notices enforce contracts and recover overseas commercial debts.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
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

export default function InternationalClientNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-cross-border-ghosting-epidemic", title: "The Cross-Border Ghosting Epidemic",
      children: [
        { id: "the-jurisdiction-intimidation-tactic", title: "The Jurisdiction Intimidation Tactic" },
        { id: "the-power-of-the-formal-legal-demand", title: "The Power of the Formal Legal Demand" }
      ]
    },
    { id: "cross-border-evidence-checklist", title: "Cross-Border Evidence Checklist" },
    { id: "drafting-the-international-legal-notice", title: "Drafting the International Legal Notice" },
    { id: "international-dispute-resolution-timeline", title: "International Dispute Resolution Timeline" },
    { id: "success-stories-reviews", title: "Success Stories & Agency Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Notice to International Client for Unpaid Invoice", href: "/legal-notice-to-international-client-unpaid-invoice-recovery" }
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
              International Commercial Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice for Unpaid <span className="text-[#DC2626]">International Invoices</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Foreign clients often assume distance protects them from paying Indian agencies and freelancers. You can enforce cross-border contracts through structured legal demand notices. Learn how to assert your rights and recover your unpaid commercial dues.
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
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  The digital economy allows Indian software teams and creators to serve global clients. However, cross-border commerce carries unique payment risks for service providers. Collecting outstanding fees becomes difficult when an overseas client suddenly stops replying.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  This problem occurs frequently in cross-border software and creative projects. An Indian IT agency builds a mobile application for a foreign startup. The agency finishes development, commits clean source code, and submits the final invoice. Then, the client disappears and ignores all follow-up payment messages. Foreign founders often assume distance shields them from legal accountability. They believe Indian vendors will not pursue debts across international borders.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  This assumption relies entirely on jurisdictional confusion and geographic distance. Foreign companies know overseas lawsuits require significant time and capital. However, legal recovery does not start with an expensive foreign court case. A formal legal demand notice delivers immediate leverage at modest cost.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  An advocate notice shatters the illusion of safety across borders. It forces foreign corporate officers to address an official commercial dispute immediately. Corporate boards hate unresolved liabilities and audit disclosures in their balance sheets. Our guide on a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> explains these key principles.
                </p>
              </div>

              <section id="the-cross-border-ghosting-epidemic" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Cross-Border Ghosting Epidemic
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Defaulting international clients employ predictable tactics to evade their financial obligations. Identifying these patterns helps you execute a decisive legal recovery strategy.
                  </p>

                  <h3 id="the-jurisdiction-intimidation-tactic" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Jurisdiction Intimidation Tactic
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Foreign companies often assume Indian vendors fear foreign legal systems. They believe you cannot afford local attorneys in New York or London. When clients ignore polite reminders, they test your resolve. They hope you will write off the invoice as bad debt.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Clients also exploit situations lacking a formal Master Service Agreement (MSA). However, digital communications create enforceable legal contracts under modern commercial law. Clear emails, Slack messages, and invoices establish binding contractual obligations. You do not need lengthy stamped paperwork to establish valid payment claims.
                  </p>

                  <h3 id="the-power-of-the-formal-legal-demand" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Power of the Formal Legal Demand
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice changes the client&apos;s calculations immediately. Corporate officers must take an advocate notice citing contract law seriously. The notice outlines commercial defaults and promises formal dispute resolution.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Foreign corporate directors actively avoid unresolved legal disputes and audit qualifications. Demands must be disclosed to auditors, lenders, and corporate investors. Settling your invoice costs far less than defending arbitration or enduring public exposure. Consequently, most foreign companies settle rapidly after receiving a formal demand.
                  </p>
                </div>
              </section>

              <section id="cross-border-evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Cross-Border Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Cross-border freelance work relies on clear digital records. You must assemble comprehensive documentation before instructing an advocate to draft your notice.
                  </p>

                  {/* CHECKLIST UI SECTION */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-8 shadow-sm">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. The Contract or Written Agreement</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Provide your Master Service Agreement (MSA), Statement of Work (SOW), or project contract. If formal documents are missing, export email chains and chat logs. Upwork, Fiverr, or Slack records prove scope and agreed billing rates.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Undeniable Proof of Delivery</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            You must show that you completed all agreed milestones satisfactorily. Gather GitHub commit histories, Jira task updates, and cloud file links. Delivery confirmation emails prove the client received and approved your work.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. The Unpaid Invoices</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Assemble copies of all overdue invoices sent to the client. Verify that invoices display currency amounts, SWIFT codes, and payment deadlines. Clear payment due dates establish exact contractual default timelines.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Foreign Corporate Identity Details</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Identify the client&apos;s registered corporate headquarters in their home jurisdiction. Search US Secretary of State databases or UK Companies House records. Formal legal notices sent to corporate addresses cannot be easily ignored.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    A thorough digital paper trail prevents the foreign client from disputing your claim. Your advocate builds an airtight legal demand backed by solid evidence.
                  </p>
                </div>
              </section>

              <section id="drafting-the-international-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting the International Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    An international legal notice requires a formal, authoritative, and uncompromising tone. It serves as an official declaration of contractual breach under commercial law.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice details the complete chronology of your working relationship. It specifies engagement dates, delivered milestones, invoice details, and overdue wire payments. It cites written communications proving the client approved work before defaulting on payment.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The notice includes explicit warnings concerning intellectual property (IP) rights. Unpaid source code, designs, or creative content remain your exclusive property. Using unpaid deliverables constitutes copyright infringement under international intellectual property treaties. Foreign companies risk massive statutory damages in their domestic courts for copyright violation. This intellectual property warning provides immense leverage against tech startups.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The final section demands full invoice settlement with accrued interest within 15 days. It warns of international arbitration, statutory complaints, and global debt collection proceedings. Consulting an <Link href="/send-a-legal-notice" className="text-[#DC2626] hover:underline font-medium">online lawyer to send a legal notice</Link> ensures strong drafting and global impact.
                  </p>
                </div>
              </section>

              <section id="international-dispute-resolution-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  International Dispute Resolution Timeline
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Understanding each escalation stage gives service providers confidence when facing non-paying overseas clients.
                  </p>
                </div>

                {/* TIMELINE UI SECTION */}
                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: Digital Legal Service</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Your advocate serves the formal notice directly to key company executives. Delivery occurs through tracked corporate email and international registered courier. Receiving a formal advocate demand usually prompts corporate officers to settle quickly.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 45: Invoking Arbitration (If Applicable)</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If contracts include arbitration clauses, your advocate issues a formal arbitration notice. Commercial arbitration through forums like the ICC or LCIA carries significant costs. Foreign companies settle promptly because arbitration awards are enforceable under the New York Convention.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 45 Onwards: IP Takedowns and Debt Collection</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If claims remain unpaid, advocates deploy aggressive commercial and digital remedies. You can serve DMCA copyright notices to remove unpaid code from web hosts. You can also assign debts to licensed international recovery agencies abroad.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Agency Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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

            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Never let overseas clients withhold your hard-earned revenue. We draft authoritative cross-border notices asserting contract and copyright rights. Protect your agency and recover your international invoice dues today.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Recover International Dues
                </button>
              </div>
            </aside>

          </div>
        </div>
      </main>
      
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
