'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const faqs = [
  {
    question: "How much does it cost to send a formal legal notice in India?",
    answer: "Costs vary according to advocate experience and the complexity of your financial dispute. A professional demand notice typically ranges from three thousand to fifteen thousand rupees. This small initial investment often recovers substantial dues without prolonged civil court litigation."
  },
  {
    question: "Is it absolutely mandatory to send a legal notice before filing a civil suit for money recovery?",
    answer: "Standard civil suits do not strictly require a prior demand notice by law. However, serving a notice is universally recommended as an essential legal best practice. Furthermore, Section 138 cheque bounce proceedings mandate a statutory thirty-day legal demand notice. Formal corporate insolvency petitions also require statutory demand notices before judicial tribunal filing."
  },
  {
    question: "Can I use WhatsApp messages, text messages or emails as evidence for out of court recovery?",
    answer: "Yes, digital messages and emails serve as valid electronic evidence under Indian law. WhatsApp messages, SMS threads, and emails reliably prove commercial agreements and payment acknowledgments. You should archive complete chat logs and preserve exact date and time stamps. If disputes escalate to litigation, you must submit a mandatory Section 65B certificate."
  },
  {
    question: "What is the exact limitation period for recovering a commercial debt in India?",
    answer: "The Limitation Act, 1963 establishes a strict three-year period for debt recovery actions. The statutory clock starts running from the date of the initial invoice default. Any written acknowledgment of debt or partial payment resets this three-year limitation clock. You must initiate formal recovery proceedings before this statutory deadline expires completely."
  },
  {
    question: "Can the MSME Samadhaan portal be used against individual retail consumers who default?",
    answer: "No, the MSME Samadhaan portal applies strictly to Business-to-Business (B2B) commercial transactions. The defaulting buyer must be a corporate company, sole proprietorship, or government entity. Individual retail consumers who default cannot be prosecuted under the MSMED Act mechanisms. Retail consumer recovery requires standard advocate legal notices and regular summary civil suits."
  },
  {
    question: "What exactly happens if the debtor simply ignores the legal notice and the deadline passes?",
    answer: "Ignoring a formal legal notice gives the creditor a decisive tactical legal advantage. Courts often view unrefuted legal notices as tacit admissions of undisputed debt liability. The creditor can immediately initiate summary suits under Order 37 of the CPC. Alternatively, creditors can invoke private commercial arbitration or file formal criminal complaints."
  },
  {
    question: "Are online dispute resolution platforms legally recognized and binding in India?",
    answer: "Yes, Online Dispute Resolution (ODR) platforms are fully recognized under Indian statutory law. Digital conciliation and arbitration proceedings comply with the Arbitration and Conciliation Act, 1996. Electronic arbitral awards generated through ODR platforms hold equal authority to civil court decrees. Successful settlement agreements can be executed directly through competent Indian district civil courts."
  }
];

const reviews = [
  {
    author: "Rohit Mehra",
    rating: "5",
    text: "A corporate client withheld our final twelve-lakh software milestone payment for six months. We avoided costly civil court litigation by serving an advocate legal notice. The notice invoked our contract's arbitration clause and set a strict deadline. The client's corporate legal department intervened and cleared our payment within three weeks."
  },
  {
    author: "Sunita Agarwal",
    rating: "5",
    text: "Our manufacturing unit faced a severe cash crisis after a major distributor defaulted. We avoided slow traditional courts and filed directly on the MSME Samadhaan portal. The statutory threat of triple RBI interest brought the buyer to conciliation. We recovered our entire principal payment within forty days without stepping into court."
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
      "name": "How to Recover Money Without Going to Court",
      "item": "https://www.legalrecovery.in/how-to-recover-money-without-going-to-court-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Money Without Going to Court in India",
  "description": "Discover actionable pre-litigation strategies, legal notice drafting, and alternative dispute resolution methods to recover your money without fighting civil court battles.",
  "image": "https://www.legalrecovery.in/og-recover-without-court.png",
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
  "name": "Out-of-Court Recovery Guide",
  "image": "https://www.legalrecovery.in/og-recover-without-court.png",
  "description": "Strategic guide for recovering unpaid money in India without going to court. Learn pre-litigation notices, MSME Samadhaan, and alternative dispute resolution.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "2"
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

export default function HowToRecoverMoneyWithoutGoingToCourtIndiaClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "financial-reality", title: "The Financial Reality of Out-of-Court Recovery" },
    { id: "pre-litigation-tools", title: "Pre-Litigation Tools for Debt Collection" },
    { id: "sector-specific-strategies", title: "Sector-Specific Recovery Strategies" },
    { id: "police-complaints", title: "Police Complaints and Criminal Leverage" },
    { id: "negotiating-settlement", title: "Negotiating a Final Settlement Agreement" },
    { id: "red-flags", title: "Red Flags of Fraudulent Debtors" },
    { id: "reviews", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "How to Recover Money Without Going to Court", href: "/how-to-recover-money-without-going-to-court-india" }
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
              How to Recover Money Without Going to Court in India
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Discover effective pre-litigation strategies and legal notice drafting to recover unpaid money. Learn how alternative dispute resolution and MSME frameworks resolve debts without court battles.
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
              
              <section className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Over forty million cases remain pending across Indian district courts and judicial tribunals. Consequently, traditional civil court litigation often proves exhausting and expensive for debt recovery. You can resolve payment disputes in weeks by leveraging effective pre-litigation legal tools.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Informal phone calls and casual email reminders rarely convince chronic debtors to pay. Debtors frequently exploit polite follow-ups to postpone financial settlements for several months. Initiating structured pre-litigation action shifts bargaining leverage decisively back to the creditor.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Statutory frameworks provide powerful leverage outside of lengthy and contested judicial trials. You can utilize the Code of Civil Procedure and the MSMED Act effectively. The Arbitration and Conciliation Act also establishes rapid non-judicial dispute resolution mechanisms. These structured tools compel defaulting debtors to settle accounts quickly without court battles.
                </p>
              </section>

              <section id="financial-reality" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Financial Reality of Out-of-Court Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Civil litigation in India demands immense financial resources and years of patient waiting. A regular civil recovery lawsuit often takes three to ten years to conclude. Creditors face substantial court fees, advocate appearance retainers, and prolonged administrative delays. Locked working capital inflicts severe financial damage on growing enterprises and independent professionals.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In contrast, pre-litigation recovery strategies deliver rapid settlements at a fraction of court costs. Serving an advocate notice proves your clear intent to enforce legal rights decisively. Corporate directors and business owners actively avoid public lawsuits and formal credit impairment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A well-drafted <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> alters the debtor&apos;s financial calculation immediately. Debtors compare the cost of immediate settlement against defending a multi-year courtroom trial. Most commercial enterprises conclude that settling overdue invoices is far more economical.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, out-of-court settlements protect corporate confidentiality and preserve commercial market goodwill. Private agreements prevent damage to enterprise reputation, investor confidence, and banking relationships. Consequently, out-of-court mechanisms represent the most practical, cost-effective avenue for commercial debt recovery.
                  </p>
                </div>
              </section>

              <section id="pre-litigation-tools" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Pre-Litigation Tools for Debt Collection
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors must deploy effective pre-litigation instruments before filing formal civil or criminal lawsuits. These instruments create concrete evidentiary records and exert escalating pressure on defaulting parties. A disciplined approach fortifies your legal position if future court litigation becomes unavoidable.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  Leveraging a Formally Drafted Legal Notice
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice forms the cornerstone of every effective debt recovery process. It serves as an authoritative statutory communication drafted and signed by an advocate. Learning <Link href="/how-to-draft-a-legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">how to draft a legal notice</Link> ensures you establish undeniable contractual default. The notice recites transaction chronology, invoice numbers, delivery challans, and exact overdue amounts.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    An advocate&apos;s demand letter elevates routine commercial disagreements into urgent, actionable liabilities. It warns of summary suits under Order 37 of the CPC. It can also cite Section 406 or Section 420 for criminal breach. The notice mandates full settlement within a strict fifteen-day to thirty-day compliance window.
                  </p>
                </div>

                {/* TIMELINE SECTION */}
                <div className="my-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC2626] opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                  <h4 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    The Legal Notice Lifecycle
                  </h4>
                  <ol className="relative border-l-2 border-slate-200 ml-4 space-y-8">
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 1: Documentation</h5>
                      <p className="text-sm text-slate-500">Assemble all evidentiary documents, contracts, purchase orders, unpaid invoices, and account ledgers.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 3: Drafting</h5>
                      <p className="text-sm text-slate-500">Your advocate drafts the formal legal notice reciting dates, invoices, and statutory citations.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 5: Dispatch</h5>
                      <p className="text-sm text-slate-500">Dispatch the notice via Registered Post with Acknowledgement Due and verified email delivery.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 10: Expected Delivery</h5>
                      <p className="text-sm text-slate-500">Debtor receives the notice. The statutory compliance period starts strictly from confirmed delivery.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-[#DC2626] rounded-full -left-4 ring-4 ring-white shadow">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 25: Deadline Expiration</h5>
                      <p className="text-sm text-slate-500">The notice deadline expires. The creditor evaluates the debtor&apos;s reply and initiates formal escalations.</p>
                    </li>
                  </ol>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Proper service of the notice carries equal legal importance to its drafted contents. Dispatch copies through speed post with acknowledgment due and registered corporate email addresses. Indian courts presume valid legal service when dispatches reach the debtor&apos;s verified address. Failing to reply to a notice often counts as tacit admission in court.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  Utilizing Alternative Dispute Resolution (ADR)
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Alternative Dispute Resolution (ADR) offers powerful leverage when initial notices do not resolve debts. ADR includes structured mediation, conciliation, and arbitration under the Arbitration and Conciliation Act, 1996. These statutory procedures bypass court adjournments, rigid procedural hurdles, and systemic district court delays.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Contracts containing arbitration clauses allow creditors to appoint private arbitrators to resolve disputes. Arbitrators examine documentary evidence, hear arguments, and deliver binding arbitral awards within months. Under Section 36 of the Act, arbitral awards are enforceable as court decrees. Debtors often settle disputes immediately to avoid bearing substantial institutional arbitration fees.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Mediation provides a confidential, voluntary forum for resolving disputes through facilitated compromise negotiations. A trained neutral mediator helps commercial parties agree on restructured debt settlement schedules. Resulting settlement agreements carry binding legal force under Indian conciliation and contract law. If talks stall, statements made during confidential mediation cannot be used during litigation.
                  </p>
                </div>
              </section>

              <section id="sector-specific-strategies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Sector-Specific Recovery Strategies
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Different commercial transactions require specialized legal recovery approaches tailored to your specific industry. Freelancers, manufacturing enterprises, and corporate vendors operate under distinct commercial statutory frameworks. Understanding your specific statutory protections maximizes recovery speed and minimizes unnecessary procedural delays.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  MSME Samadhaan for Business Dues
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The MSMED Act, 2006 provides specialized recovery mechanisms for registered small enterprises in India. Businesses holding valid Udyam Registration enjoy statutory protection against delayed payments from corporate buyers. Section 15 requires buyers to clear invoices within forty-five days of asset delivery.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Payment defaults trigger severe statutory penalties under Section 16 of the MSMED Act. Defaulting buyers must pay monthly compound interest at three times the RBI rate. This heavy interest penalty compels corporate debtors to settle invoices without unnecessary delay. Eligible MSME enterprises can file claims directly online through the MSME Samadhaan portal.
                  </p>
                </div>

                {/* CASE STUDY SECTION */}
                <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-5 rounded-bl-[100px]"></div>
                  <figcaption className="flex items-center gap-3 mb-4 relative z-10">
                    <span className="bg-[#DC2626] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Case Study</span>
                    <strong className="text-slate-900 font-bold">The Manufacturing Supplier Recovery</strong>
                  </figcaption>
                  <blockquote className="text-sm text-slate-700 leading-relaxed border-l-4 border-[#DC2626] pl-5 space-y-3 relative z-10">
                    <p><strong>Background:</strong> A registered enterprise supplied automotive fasteners worth twenty lakh rupees to a vendor. The corporate buyer delayed payments for eight months, citing internal financial audits.</p>
                    <p><strong>Action Taken:</strong> The supplier filed a formal recovery grievance on the MSME Samadhaan portal. They uploaded their Udyam certificate, original purchase orders, and accepted delivery challans.</p>
                    <p><strong>The Process:</strong> The Facilitation Council reviewed the application and summoned the corporate buyer for conciliation. The buyer faced mandatory arbitration and penal interest at triple the RBI rate.</p>
                    <p><strong>Resolution:</strong> The corporate buyer settled the dispute out of court within forty-five days. They paid the complete principal invoice amount with negotiated interest, avoiding trial.</p>
                  </blockquote>
                </figure>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If conciliation before the council fails, the council initiates binding commercial arbitration proceedings. Challenging an MSME arbitral award requires buyers to deposit seventy-five percent upfront in court. This mandatory deposit requirement discourages frivolous litigation and compels buyers to settle debts promptly. Always ensure claims are filed within the <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">three-year limitation period</Link> established by the Limitation Act.
                  </p>
                </div>
              </section>

              <section id="police-complaints" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Police Complaints and Criminal Leverage
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Debt recovery is fundamentally a civil dispute, but some defaults involve criminal conduct. Applying criminal law correctly creates substantial pressure on fraudulent and dishonest defaulting debtors. However, creditors must never file frivolous police complaints solely to pressure civil debtors.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  Recognizing Cheating vs. Civil Breach
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian law draws a sharp distinction between civil breaches and criminal offenses. Defaulting on payments due to commercial losses constitutes a purely civil contractual breach. In such ordinary defaults, police will direct creditors to competent civil courts.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    However, demonstrable initial fraudulent intention establishes criminal cheating under Section 420 of IPC. Misappropriating entrusted property constitutes a criminal breach of trust under Section 406. Issuing cheques from pre-closed bank accounts or presenting forged payment receipts proves deception. In such fraudulent cases, creditors can legitimately initiate formal police and criminal proceedings.
                  </p>
                </div>

                {/* MYTH VS FACT SECTION */}
                <div className="bg-slate-900 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8 shadow-sm">
                  <h4 className="text-white font-bold text-lg mb-6">Criminal Action in Debt Recovery: Myth vs Fact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="bg-red-500/10 p-5 rounded-xl border border-red-500/20">
                      <h5 className="text-[#DC2626] font-bold text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Myth
                      </h5>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        You can easily file a police complaint for any unpaid invoice to scare debtors.
                      </p>
                    </article>
                    <article className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                      <h5 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Fact
                      </h5>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Police cannot interfere in civil debts without documentary proof of initial fraud or forgery.
                      </p>
                    </article>

                    <article className="bg-red-500/10 p-5 rounded-xl border border-red-500/20">
                      <h5 className="text-[#DC2626] font-bold text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Myth
                      </h5>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        A bounced cheque automatically leads to an immediate arrest by local police.
                      </p>
                    </article>
                    <article className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                      <h5 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Fact
                      </h5>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Section 138 of the Negotiable Instruments Act establishes a specific quasi-criminal statutory procedure. Creditors must serve a formal notice within thirty days before filing complaints.
                      </p>
                    </article>

                    <article className="bg-red-500/10 p-5 rounded-xl border border-red-500/20">
                      <h5 className="text-[#DC2626] font-bold text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Myth
                      </h5>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Threatening a debtor with criminal complaints in demand letters is completely risk-free.
                      </p>
                    </article>
                    <article className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                      <h5 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Fact
                      </h5>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Baseless threats of criminal prosecution can expose creditors to criminal intimidation charges under law.
                      </p>
                    </article>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Documented evidence of fraud allows creditors to file before the Economic Offences Wing. The risk of formal criminal investigation, interrogation, and arrest compels fraudulent debtors to negotiate. Most fraudulent actors prefer settling outstanding liabilities rather than facing prolonged criminal trials.
                  </p>
                </div>
              </section>

              <section id="negotiating-settlement" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Negotiating a Final Settlement Agreement
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Pre-litigation legal pressure brings the defaulting debtor to the negotiating table on favorable terms. Creditors must formalize all terms through an airtight, written Final Settlement Agreement.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The agreement defines the exact agreed settlement amount, installment schedules, and payment modes. Crucially, include an explicit default clause revoking all concessions upon any payment failure. If the debtor misses an installment deadline, full original claims revive with penal interest.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Secure payments through immediate bank transfers or post-dated cheques before signing formal agreements. You should execute the settlement agreement on non-judicial stamp paper and notarize it. Never withdraw existing legal notices or complaints until funds clear into your bank account. Formal withdrawal of proceedings must remain legally conditional upon full and final realization.
                  </p>
                </div>
              </section>

              <section id="red-flags" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Red Flags of Fraudulent Debtors
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Recognizing debtors who intend to default helps creditors avoid wasting valuable collection time. Certain evasive behaviors signal that out-of-court negotiations will fail and judicial action is necessary.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Frequent changes of registered corporate addresses and executive personnel indicate evasive debtor conduct. Another common warning sign is manufacturing frivolous quality disputes after payment deadlines expire. Dishonest debtors use these unrecorded quality objections purely to fabricate defenses for litigation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Sudden corporate restructuring, director resignations, and shell company transfers indicate asset concealment attempts. Debtors issuing stop-payment cheque instructions or avoiding written communications also warrant urgent suspicion. When these red flags appear, creditors must immediately petition courts for asset attachment.
                  </p>
                </div>
              </section>

              {/* REVIEWS SECTION */}
              <section id="reviews" className="mt-12">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories & Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {reviews.map((review, idx) => (
                    <article key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-yellow-400 mb-3" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < parseInt(review.rating) ? 'fill-current' : 'text-slate-300 fill-current'}`} viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                      </div>
                      <footer className="mt-4 pt-4 border-t border-slate-200">
                        <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                        <p className="text-xs text-slate-500">Verified Client</p>
                      </footer>
                    </article>
                  ))}
                </div>
              </section>

              {/* FAQS SECTION */}
              <section id="faqs" className="mt-12">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaqs.includes(`faq-${index}`);
                    return (
                      <article key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
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
                      </article>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Author Aside placed on the right */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm relative">
                  <Image 
                    src="/anujbhiya.png" 
                    alt="Anuj Bhiya Author Image" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg">Anuj Bhiya</h3>
                <p className="text-xs text-[#DC2626] font-bold uppercase tracking-wider mb-3">Legal Strategist</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialist in commercial debt recovery and dispute resolution. Dedicated to helping clients resolve complex financial claims without courtroom litigation.
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
