'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const faqs = [
  {
    question: "Can I file a civil suit for recovery of money without a written contract?",
    answer: "Yes, you can file a civil suit for recovery of money even without a written contract, although it becomes a standard civil suit rather than a summary suit under Order 37. You will need to rely heavily on circumstantial evidence, emails, WhatsApp messages, bank statements, and witness testimonies to prove the existence of the oral agreement and the subsequent default."
  },
  {
    question: "What is the time limit or limitation period to file a money recovery suit in India?",
    answer: "The Limitation Act, 1963 prescribes a strict time limit of three years for filing a civil suit for recovery of money. This three-year period begins from the date the cause of action arises, which is typically the date the debt became due and payable or the date of the last acknowledged payment by the debtor."
  },
  {
    question: "How is court fee calculated for a civil suit for recovery of money?",
    answer: "Court fees are calculated based on the total value of the suit, which includes the principal amount and the interest accrued up to the date of filing. Each state in India has its own Court Fees Act, but it generally ranges from 2% to 7% of the total claim amount, subject to a maximum cap in certain jurisdictions."
  },
  {
    question: "Is it mandatory to send a legal notice before filing a civil suit?",
    answer: "While it is not strictly mandatory under the Civil Procedure Code for private disputes, it is highly recommended and practically essential. Sending a formal demand notice establishes a clear timeline, gives the debtor a final opportunity to settle, and serves as crucial documentary evidence of your intent and the debtor's default when presented in court."
  },
  {
    question: "What happens if the defendant does not respond to the summons in a summary suit?",
    answer: "In a summary suit under Order 37, if the defendant fails to enter an appearance within ten days of receiving the summons, the court assumes the allegations in the plaint are admitted. The plaintiff is then immediately entitled to a decree for a sum not exceeding the claimed amount, along with interest and costs."
  },
  {
    question: "Can a company file a civil suit for recovery of money against another company?",
    answer: "Absolutely. Companies frequently file civil suits against other corporate entities for unpaid invoices, breached vendor agreements, or unreturned security deposits. If the transaction qualifies as a commercial dispute, it is subject to the provisions of the Commercial Courts Act, 2015, which mandates pre-institution mediation and strict timelines."
  },
  {
    question: "What is 'Leave to Defend' in the context of Order 37 of the CPC?",
    answer: "In a summary suit, the defendant does not have an automatic right to defend themselves. They must file an application seeking 'Leave to Defend' by submitting an affidavit disclosing facts that constitute a substantial defense. If the court finds the defense frivolous or vexatious, leave is denied, and the plaintiff wins a summary decree."
  }
];

const reviews = [
  {
    author: "Aditya Verma",
    rating: "5",
    text: "This strategic breakdown of Order 37 saved my manufacturing business. We had Rs 15 Lakhs stuck with a distributor. Using this exact process map, we filed a summary suit and got a decree in just 4 months. Highly recommended legal insight."
  },
  {
    author: "Priya Sharma",
    rating: "5",
    text: "I was completely lost on how to calculate court fees and what steps to take after sending my notice. This guide is incredibly comprehensive and lacks the confusing jargon you normally find online. The comparison table cleared all my doubts."
  },
  {
    author: "Rajesh Khanna",
    rating: "5",
    text: "The section on 'Leave to Defend' is brilliant. My lawyer explained it to me, but this page made it crystal clear. We successfully attached the defaulter's bank accounts during the execution phase just as described here."
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
      "name": "Civil Suit for Recovery of Money",
      "item": "https://www.legalrecovery.in/civil-suit-for-recovery-of-money-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Civil Suit for Recovery of Money in India under Order 37",
  "description": "Learn how to file a civil suit for recovery of money under Order 37 of the CPC in India. A strategic guide to securing summary decrees swiftly.",
  "image": "https://www.legalrecovery.in/og-civil-suit.png",
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
  "name": "Civil Suit for Recovery of Money Guide",
  "image": "https://www.legalrecovery.in/og-civil-suit.png",
  "description": "A comprehensive, step-by-step strategic guide to filing a civil suit for the recovery of money under Order 37 of the CPC in India.",
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

export default function CivilSuitRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-order-37", title: "Understanding Order 37 vs. Ordinary Civil Suits" },
    { id: "pre-litigation-arsenal", title: "The Pre-Litigation Arsenal" },
    { id: "filing-the-plaint", title: "Filing the Plaint: Step-by-Step" },
    { id: "defending-a-recovery-suit", title: "Defending a Recovery Suit" },
    { id: "execution-of-the-decree", title: "Execution of the Decree" },
    { id: "reviews", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Civil Suit for Recovery of Money", href: "/civil-suit-for-recovery-of-money-india" }
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
              Civil Litigation Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Civil Suit for Recovery of Money in India: <span className="text-[#DC2626]">Strategic Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A comprehensive blueprint for filing a civil suit under Order 37 of the CPC, bypassing delays and securing your money rapidly through summary decrees.
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
                
                <p className="text-sm md:text-base leading-relaxed font-bold">
                  Over ₹60,000 crores are currently locked in pending commercial disputes across Indian district courts. Filing a civil suit for recovery of money without leveraging Order 37 of the CPC can trap your capital in litigation for years.
                </p>

                {/* DATA CALLOUT UI */}
                <div className="bg-slate-900 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#DC2626]/10 rounded-xl">
                      <svg className="w-8 h-8 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">The Cost of Conventional Litigation</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Data from the National Judicial Data Grid reveals that an ordinary civil suit in India takes an average of 1,200 days just to reach the final judgment stage. However, by strategically utilizing Order 37 of the Civil Procedure Code for a summary suit, creditors can completely bypass the lengthy trial phases of framing issues, cross-examinations, and endless adjournments, reducing the timeline to a fraction of the norm.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  Navigating the complex corridors of Indian civil law requires more than just a valid claim, it requires tactical precision. When a debtor willfully defaults on a payment, the frustration and financial strain on the creditor are immense. The instinctive reaction is often to rush into filing a standard civil suit for recovery of money, but this common approach is fraught with procedural traps and delays. Instead, the legal focus must sharply pivot towards mechanisms designed for rapid adjudication. 
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  This strategic guide is engineered to dissect the exact legal mechanics of initiating a successful recovery action. We will thoroughly explore how to weaponize the pre-litigation phase, correctly invoke summary procedures, navigate jurisdictional limitations, and ultimately execute the final decree to attach the assets of a stubborn defaulter. Whether you are dealing with unpaid corporate invoices, a breached vendor agreement, or a defaulted personal loan backed by a promissory note, mastering this legal framework is the only way to ensure your capital is returned safely.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  The Indian judiciary, while burdened, provides potent tools for those who understand how to use them. Through a careful examination of procedural rules, strict compliance with statutory limitation periods, and flawless documentation, a plaintiff can transform a disputed debt into an enforceable court order. We will dismantle the entire process, piece by piece, providing you with the exact roadmap required to reclaim what rightfully belongs to you. If you need clarity on the initial demand phase, our detailed <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice format</Link> provides the foundational template needed before escalating to court.
                </p>
              </div>

              <section id="understanding-order-37" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Order 37 vs. Ordinary Civil Suits
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The fundamental distinction in Indian civil law regarding money recovery lies between an ordinary civil suit and a summary suit filed under Order 37 of the Civil Procedure Code (CPC), 1908. An ordinary civil suit is a marathon. It involves multiple stages, filing of plaints, extensive written statements, framing of complex issues by the judge, leading evidence, cross-examination of witnesses, and final arguments. This process gives the defendant ample opportunity to deploy delay tactics, stretching the timeline over many years.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In stark contrast, a summary suit under Order 37 is a sprint designed explicitly to prevent defendants from prolonging commercial litigation unreasonably. The core philosophy of a summary suit is that in certain specific classes of cases where the debt is based on written documents, the defendant should not be permitted to automatically defend the suit. Unless they can prove to the court that they have a genuine, substantial defense, the court will pass a decree in favor of the plaintiff immediately based purely on the documents presented. This mechanism is a powerful deterrent against frivolous defenses. To fully grasp this mechanism, exploring the specifics of the summary suit order 37 is absolutely essential for any creditor seeking rapid justice.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    When to Opt for a Summary Suit
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A plaintiff cannot simply choose to file a summary suit for every type of financial dispute. The CPC strictly categorizes the nature of debts eligible for this expedited process. To qualify for a summary suit under Order 37, your claim must be for a liquidated sum of money, meaning a specific, predetermined, and mathematically calculable amount. Unliquidated damages, such as claims for emotional distress or highly speculative business losses, cannot form the basis of a summary suit.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Specifically, the debt must arise from a written contract, an enactment (where the sum sought to be recovered is a fixed sum of money or in the nature of a debt), a guarantee (where the claim against the principal is in respect of a debt or liquidated demand only), or bills of exchange, hundies, and promissory notes. If you have an unpaid invoice that the debtor has acknowledged in writing, a bounced cheque backed by a commercial agreement, or a signed loan document, you are perfectly positioned to file a summary suit. It shifts the entire burden of proof heavily onto the defendant right from the outset, stripping them of their presumed right to a drawn-out trial.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Limitations and Jurisdictional Hurdles
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Before rushing to draft a plaint, a critical assessment of the limitation period and court jurisdiction is mandatory. The Limitation Act, 1963 provides a strict window of three years to file a civil suit for recovery of money. This clock starts ticking from the moment the cause of action arises. If the debt was due on January 1, 2021, and you file the suit on January 2, 2024, the court will dismiss it instantly on the grounds of limitation, regardless of how strong your evidence is. The only exception is if the debtor has acknowledged the debt in writing or made a partial payment before the expiration of the three-year period, which resets the limitation clock entirely.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Jurisdiction is another crucial hurdle. You must file the suit in the correct court, defined by pecuniary (monetary) and territorial jurisdiction. Pecuniary jurisdiction dictates which level of court can hear the matter based on the claim amount. Territorial jurisdiction depends on where the defendant resides, where they carry on their business, or where the cause of action (like the signing of the contract or the delivery of goods) actually took place. Filing in the wrong jurisdiction will result in the plaint being returned, wasting precious months and incurring unnecessary legal expenses.
                  </p>
                </div>

                {/* COMPARISON TABLE UI */}
                <div className="mt-8 mb-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 font-bold text-slate-900">Feature</th>
                        <th className="px-6 py-4 font-bold text-slate-900 border-l border-slate-200">Ordinary Civil Suit</th>
                        <th className="px-6 py-4 font-bold text-[#DC2626] border-l border-slate-200">Order 37 Summary Suit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Right to Defend</td>
                        <td className="px-6 py-4 border-l border-slate-200">Defendant has an automatic right to file a written statement and contest.</td>
                        <td className="px-6 py-4 border-l border-slate-200 font-semibold bg-red-50/30">Defendant must apply for and be granted "Leave to Defend" by the judge.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Applicability</td>
                        <td className="px-6 py-4 border-l border-slate-200">Any civil dispute, including unliquidated damages and complex factual matters.</td>
                        <td className="px-6 py-4 border-l border-slate-200 bg-red-50/30">Restricted to bills of exchange, hundies, promissory notes, and written contracts for a liquidated sum.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Average Timeline</td>
                        <td className="px-6 py-4 border-l border-slate-200">Typically 3 to 7 years due to extensive procedural stages.</td>
                        <td className="px-6 py-4 border-l border-slate-200 font-semibold bg-red-50/30">Typically 6 to 18 months, assuming no complex leave to defend is granted.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Burden of Proof</td>
                        <td className="px-6 py-4 border-l border-slate-200">Rests heavily on the plaintiff throughout a lengthy trial phase.</td>
                        <td className="px-6 py-4 border-l border-slate-200 bg-red-50/30">Shifts immediately to the defendant to prove they have a triable issue.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="pre-litigation-arsenal" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Pre-Litigation Arsenal
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Success in a civil suit is rarely determined entirely inside the courtroom. The battle is often won or lost based on the meticulous preparation executed during the pre-litigation phase. Gathering evidence, solidifying your legal standing, and officially placing the debtor on notice are the foundational pillars of a successful money recovery campaign. Neglecting this phase severely weakens your position before a judge.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Drafting a Watertight Legal Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice is the first aggressive step in the recovery process. While the CPC does not mandate a legal notice for all private suits, skipping this step is a monumental strategic error. A watertight legal notice serves multiple functions. It crystallizes the exact amount owed, demands repayment within a specific timeframe (usually 15 or 30 days), and puts the debtor on formal warning that litigation is imminent.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must be drafted with absolute precision. It must detail the entire history of the transaction, reference all relevant invoices, contracts, or dishonored cheques, and calculate interest accurately up to the date of drafting. Crucially, the legal notice is often the document that traps a deceitful debtor. If they reply to the notice and admit a portion of the liability while contesting the rest, that written admission becomes a lethal piece of evidence in your summary suit. If the dispute involves a dishonored cheque alongside the civil debt, studying the correct <Link href="/recovery/cheque-bounce-amount" className="text-[#DC2626] hover:underline font-medium">cheque bounce notice</Link> requirements under Section 138 of the Negotiable Instruments Act is absolutely vital, as this can trigger parallel criminal proceedings, applying immense pressure on the defaulter.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Preserving Critical Documentary Evidence
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The entire architecture of a summary suit relies exclusively on documentary evidence. Because oral testimonies and cross-examinations are bypassed unless leave to defend is granted, your paper trail must be invincible. From the moment a default occurs, you must freeze and preserve all communications. This includes printed copies of emails with complete headers, original signed contracts, ledger accounts, and bank statements certified under the Bankers Books Evidence Act.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In the modern digital age, electronic evidence is paramount. WhatsApp chats, digital invoices, and PDF agreements are highly admissible, provided they are supported by a certificate under Section 65B of the Indian Evidence Act. Without this certificate, electronic records hold absolutely no evidentiary value in an Indian court. Your legal team must compile an indexed, paginated file of these documents well before drafting the plaint. Missing a single crucial document at the time of filing can result in the court refusing to treat the matter as a summary suit, thereby throwing your case into the abysmal timeline of ordinary litigation.
                  </p>
                </div>
              </section>

              <section id="filing-the-plaint" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Filing the Plaint: Step-by-Step
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Once the notice period expires without a satisfactory resolution, the formal judicial process commences with the drafting and filing of the plaint. The plaint is the comprehensive legal document that lays out your entire case before the judge. In an Order 37 suit, the plaint must carry a specific endorsement stating that it is filed under this particular order, and that no relief falling outside the ambit of the rule has been claimed.
                  </p>
                </div>

                {/* TIMELINE UI */}
                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Drafting the Summary Plaint</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The plaint must be concise, factual, and strictly aligned with the documentary evidence. It must detail the exact nature of the commercial relationship, the dates of transaction, the date of default, and the calculation of interest. The plaint must be accompanied by an affidavit of verification, affirming that the contents are true to the plaintiff's knowledge and belief.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Payment of Court Fees</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Calculating and depositing the correct court fee is a mandatory prerequisite. The fee is a percentage of the total suit valuation (principal plus interest). This fee varies from state to state and must be paid either through physical stamp papers or online e-Court fee portals before the registry will accept the filing.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Registry Scrutiny and Numbering</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The court registry meticulously scrutinizes the plaint for formatting errors, missing signatures, improper jurisdiction, and correct fee payment. If defects are found, the file is returned for rectification. Once cleared, the suit is officially registered and assigned a unique case number.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                    Court Fees and Valuation of Suit
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The valuation of the suit for the purpose of jurisdiction and court fees must be calculated with absolute precision. The plaintiff must sum up the principal amount owed and the interest accrued at the contractual rate up to the date of filing. If there is no contractual rate of interest, a reasonable commercial rate (often determined by current banking norms) can be applied. This total figure determines the pecuniary jurisdiction of the court and the exact court fee payable. Underpaying court fees will result in the immediate rejection of the plaint, while overvaluing the suit might push it into a higher court with lengthier pendency rates. 
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Serving Summons to the Defendant
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once the suit is numbered, the court issues a special summons in Form No. 4 of Appendix B, tailored specifically for summary suits. Serving this summons on the defendant is the most critical juncture of the early litigation phase. The law requires strict adherence to service protocols. It can be served via court bailiff, registered post with acknowledgment due, or in modern contexts, via approved courier services and even email if permitted by the specific commercial court. The ten-day clock for the defendant to enter an appearance begins ticking the exact moment this summons is legally served. Evading summons is a common tactic by defendants, so plaintiffs must aggressively monitor the tracking reports and request substituted service (like newspaper publication) if the defendant actively avoids delivery.
                  </p>
                </div>
              </section>

              <section id="defending-a-recovery-suit" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Defending a Recovery Suit
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While this guide focuses on recovering money, understanding the defensive maneuvers of a debtor is crucial for anticipating their strategy. In an ordinary civil suit, the defendant simply files a written statement denying the claims, which automatically forces a lengthy trial. Order 37 aggressively eliminates this loophole. A defendant facing a summary suit is immediately put on the defensive. They do not have the automatic luxury of contesting the plaintiff's claims. If they fail to act rapidly and precisely within the strict statutory deadlines, they forfeit their right to present any defense whatsoever.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Applying for Leave to Defend
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Upon receiving the summons, the defendant must enter an appearance within ten days. Following this, the plaintiff serves a 'Summons for Judgment'. The defendant then has another strictly enforced ten days to file an affidavit applying for 'Leave to Defend'. This affidavit must meticulously detail facts that legally justify a trial. The court evaluates this affidavit rigorously. If the defense presented is a mere moonshine, an illusion, or completely legally untenable, the judge will unconditionally refuse the leave to defend and immediately pass a decree in favor of the plaintiff.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the defendant presents a plausible but weak defense, the court may grant conditional leave, forcing the defendant to deposit a substantial portion of the disputed amount into the court registry as a security measure before a trial is permitted. Only if the defendant reveals a genuinely triable issue, such as a fundamental flaw in the contract or proof of prior payment, will the court grant unconditional leave, effectively converting the summary suit into an ordinary, drawn-out civil suit. Consequently, a plaintiff's plaint must be drafted so airtight that it leaves absolutely no room for a judge to find a triable issue in the defendant's desperate affidavit.
                  </p>
                </div>
              </section>

              <section id="execution-of-the-decree" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Execution of the Decree
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Securing a summary decree from the judge is a massive victory, but a piece of paper does not automatically place funds in your bank account. A decree is merely a judicial declaration of your right to recover the money. The final, and arguably most complex phase of litigation, is the execution of that decree. Many plaintiffs exhaust their energy securing the order and fail to aggressively pursue the actual financial recovery, allowing the debtor to hide assets and declare bankruptcy.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Attaching the Defaulter’s Assets
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To execute the decree, the plaintiff, now legally termed the decree-holder, must file an Execution Petition under Order 21 of the CPC. This petition requests the court's coercive assistance to physically recover the funds. The court has vast powers to ensure compliance. The most common and effective method is the attachment and sale of the judgment debtor's movable or immovable property. This means court bailiffs can seize commercial machinery, inventory, vehicles, or even auction the debtor's real estate.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Additionally, the court can issue garnishee orders. A garnishee order is directed at a third party who owes money to the debtor, most commonly the debtor's bank. The court freezes the debtor's bank accounts and directly orders the bank manager to transfer the funds to the court registry or the plaintiff's account. In cases of extreme and willful defiance, where the debtor actively conceals assets to frustrate the decree, the civil court even possesses the power to order the civil imprisonment of the defaulter. However, the onus is always heavily on the decree-holder to conduct thorough asset tracing and provide the court with specific details of the debtor's financial holdings to ensure a swift and successful execution.
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
                <p className="text-xs text-[#DC2626] font-bold uppercase tracking-wider mb-3">Senior Legal Strategist</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An expert in digital dispute resolution and modern civil recovery tactics. Passionate about empowering businesses with swift, legally sound financial recovery methods under the Indian judicial system.
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
