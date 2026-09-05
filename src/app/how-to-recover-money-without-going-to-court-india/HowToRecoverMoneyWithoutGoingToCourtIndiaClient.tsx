'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "How much does it cost to send a formal legal notice in India?",
    answer: "Costs depend on your case and your lawyer's experience. A solid legal notice usually costs between ₹3,000 and ₹15,000. This small step often helps you recover your money without expensive court trials."
  },
  {
    question: "Is it absolutely mandatory to send a legal notice before filing a civil suit for money recovery?",
    answer: "Regular civil suits do not strictly require a prior notice by law. However, sending one is a vital legal best practice. In cheque bounce cases under Section 138, a 30-day notice is mandatory. Corporate insolvency filings also require a formal demand notice first."
  },
  {
    question: "Can I use WhatsApp messages, text messages or emails as evidence for out of court recovery?",
    answer: "Yes. Digital chats and emails serve as strong proof under Indian law. WhatsApp chats, SMS threads, and emails prove deals and payment promises. Make sure to save full chat backups with clear date and time stamps. If your case goes to court, you must add a Section 65B certificate."
  },
  {
    question: "What is the exact limitation period for recovering a commercial debt in India?",
    answer: "Under the Limitation Act of 1963, you have three years to take legal action. The clock starts on the date of default. Any written admission of the debt or part-payment resets this three-year clock. You must act before this deadline runs out."
  },
  {
    question: "Can the MSME Samadhaan portal be used against individual retail consumers who default?",
    answer: "No. The MSME Samadhaan portal only covers business-to-business (B2B) transactions. The buyer must be a company, partnership, or government agency. For retail consumers, you should send a lawyer's notice and file a regular recovery suit."
  },
  {
    question: "What exactly happens if the debtor simply ignores the legal notice and the deadline passes?",
    answer: "Ignoring your notice gives you a strong legal edge. Courts often treat silence as proof that the debtor owes the money. You can quickly file a summary suit under Order 37 of the CPC. You can also start arbitration or lodge a criminal complaint if fraud is involved."
  },
  {
    question: "Are online dispute resolution platforms legally recognized and binding in India?",
    answer: "Yes. Online dispute resolution platforms are fully valid under Indian law. Digital mediation and arbitration follow the Arbitration and Conciliation Act, 1996. Online arbitral awards have the same power as civil court decrees. You can enforce them directly in district court."
  }
];

const reviews = [
  {
    author: "Rohit Mehra",
    rating: "5",
    text: "A corporate client held back our ₹12-lakh payment for six months. We skipped court and sent an advocate notice citing our arbitration clause. The client's legal team stepped in and paid us in full within three weeks."
  },
  {
    author: "Sunita Agarwal",
    rating: "5",
    text: "Our factory faced a cash crunch when a distributor failed to pay. We filed on the MSME Samadhaan portal instead of going to court. The threat of heavy penal interest made them settle. We got our full money back in 40 days."
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
              Discover smart pre-litigation steps and legal notice drafting to recover unpaid money. Learn how alternative dispute resolution and MSME rules resolve debts without court battles.
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
              
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Updated: June 29, 2026</span>
              </div>

              <section className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Over 40 million cases are pending in Indian courts. Because of this backlog, regular civil lawsuits take years and cost too much money. You can resolve debt disputes in weeks by using smart pre-litigation tools.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Casual phone calls and polite emails rarely make stubborn debtors pay. Instead, debtors use polite delays to stall for months. Taking formal legal steps shifts the pressure back onto the debtor right away.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Indian law gives creditors strong options outside of court. You can use the Civil Procedure Code, the MSMED Act, and the Arbitration Act to your benefit. These laws create real pressure and push debtors to settle fast without trial.
                </p>
              </section>

              <section id="financial-reality" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Financial Reality of Out-of-Court Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Civil court litigation in India takes years and drains your wallet. A standard recovery suit often drags on for three to ten years. You must pay court fees, lawyer retainers, and paperwork costs. For businesses and freelancers, blocked cash can ruin daily operations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In contrast, out-of-court recovery brings quick settlements at very low costs. A formal notice from a lawyer proves you are serious about enforcing your rights. Most company directors want to avoid public lawsuits and damage to their credit record.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A well-drafted <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> changes the debtor&apos;s math at once. They must choose between paying now or spending lakhs on a multi-year court fight. Most businesses realize that settling the bill is far cheaper.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Settling out of court also keeps the matter private. It protects company trade secrets and avoids bad publicity in the market. That is why out-of-court recovery is the smartest, most practical path for creditors.
                  </p>
                </div>
              </section>

              <section id="pre-litigation-tools" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Pre-Litigation Tools for Debt Collection
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors should use proven legal tools before filing a lawsuit in court. These steps build solid written proof and put steady pressure on the debtor. They also put you in a winning position if a trial becomes necessary.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  Leveraging a Formally Drafted Legal Notice
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice is the foundation of any successful recovery. It is an official letter drafted and signed by an advocate on legal letterhead. Learning <Link href="/how-to-draft-a-legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">how to draft a legal notice</Link> helps you document the default clearly. The notice lists key details, including invoices, delivery dates, and the exact balance due.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A lawyer&apos;s demand letter turns an informal dispute into an urgent legal risk. It warns of summary suits under Order 37 of the CPC. It can also cite Section 406 or Section 420 for criminal breach. The debtor gets a strict fifteen-day to thirty-day compliance window to settle the debt in full.
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
                      <p className="text-sm text-slate-500">Assemble all proof: contracts, purchase orders, unpaid invoices, and bank statements.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 3: Drafting</h5>
                      <p className="text-sm text-slate-500">Your lawyer drafts the formal notice with exact dates, sums, and legal sections.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 5: Dispatch</h5>
                      <p className="text-sm text-slate-500">Send the notice by Registered Post AD, Speed Post, and verified email.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-[#DC2626]">
                        <span className="w-3 h-3 bg-[#DC2626] rounded-full"></span>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 10: Expected Delivery</h5>
                      <p className="text-sm text-slate-500">The debtor receives the notice. The countdown to pay begins on this day.</p>
                    </li>
                    <li className="ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-[#DC2626] rounded-full -left-4 ring-4 ring-white shadow">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <h5 className="flex items-center mb-1 text-sm font-bold text-slate-900">Day 25: Deadline Expiration</h5>
                      <p className="text-sm text-slate-500">The deadline passes. Your lawyer reviews any reply and prepares next steps.</p>
                    </li>
                  </ol>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Serving the notice properly is just as vital as drafting it well. Always use Speed Post AD and send copies to official email addresses. Indian courts presume valid delivery when letters reach the debtor&apos;s recorded address. Failing to reply often counts as proof against the debtor in court.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  Utilizing Alternative Dispute Resolution (ADR)
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Alternative Dispute Resolution (ADR) gives you great leverage when a notice alone does not work. ADR includes mediation, conciliation, and private arbitration under the Arbitration and Conciliation Act, 1996. These paths skip courtroom queues and long trial delays.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If your contract has an arbitration clause, you can name a private arbitrator. The arbitrator checks your documents, hears arguments, and issues a binding award in months. Under Section 36 of the Act, an arbitral award executes just like a court decree. Debtors often settle early to avoid heavy arbitration costs.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Mediation offers a private space to negotiate a calm solution. A trained mediator helps both sides work out a fair payment plan. Once signed, the settlement agreement is legally binding under contract law. If talks fail, whatever was said during mediation stays private and cannot be used in court.
                  </p>
                </div>
              </section>

              <section id="sector-specific-strategies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Sector-Specific Recovery Strategies
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Every trade has its own recovery rules. Freelancers, factories, and vendors fall under different legal protections. Using the right law for your sector speeds up recovery and cuts unnecessary delays.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  MSME Samadhaan for Business Dues
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The MSMED Act of 2006 offers strong protections for registered small businesses. If you hold an active Udyam Registration, corporate buyers cannot delay payments. Section 15 of the Act requires buyers to clear invoices within 45 days of delivery.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Late payments carry heavy statutory penalties under Section 16. Defaulting buyers must pay monthly compound interest at three times the RBI bank rate. This steep penalty forces corporate debtors to clear their dues quickly. Eligible MSMEs can submit claims online via the MSME Samadhaan portal.
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
                    <p><strong>Background:</strong> A registered supplier sold ₹20 lakhs of automotive parts to a vendor. The buyer delayed payment for eight months, claiming internal audit checks.</p>
                    <p><strong>Action Taken:</strong> The supplier filed a claim on the MSME Samadhaan portal. They uploaded their Udyam certificate, purchase orders, and signed delivery challans.</p>
                    <p><strong>The Process:</strong> The Council reviewed the case and summoned the buyer for conciliation. The buyer faced mandatory arbitration and triple RBI interest.</p>
                    <p><strong>Resolution:</strong> The buyer settled the dispute in 45 days. They paid the full principal sum plus agreed interest to avoid trial.</p>
                  </blockquote>
                </figure>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If conciliation fails, the council moves to binding arbitration. To challenge an MSME arbitral award, buyers must deposit 75% of the amount in court first. This rule stops frivolous appeals and ensures swift payment. Remember to file your claim within the <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">three-year limitation period</Link> established by the Limitation Act.
                  </p>
                </div>
              </section>

              <section id="police-complaints" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Police Complaints and Criminal Leverage
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Debt recovery is mostly a civil issue, but some defaults involve outright crime. Applying criminal law correctly puts strong pressure on dishonest borrowers. However, you must never file fake police reports just to collect a regular civil debt.
                  </p>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                  Recognizing Cheating vs. Civil Breach
                </h3>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian law draws a clear line between civil breach and criminal fraud. Failing to pay because a business ran out of money is a civil breach. In such cases, the police will tell you to go to civil court.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    However, clear intent to cheat from the start is a crime under Section 420 of the IPC. Diverting entrusted goods or funds is a criminal breach of trust under Section 406. Passing bad cheques from closed accounts or forging bank receipts proves fraud. In those cases, you can legally file police complaints and criminal cases.
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
                        You can file a police complaint for any unpaid bill to scare debtors.
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
                        Police cannot step into civil debts without clear proof of fraud or forgery.
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
                        A bounced cheque leads to an instant arrest by local police.
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
                        Cheque bounce under Section 138 is a special legal process. You must send a 30-day notice first.
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
                        Threatening debtors with criminal complaints in demand letters is risk-free.
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
                        False criminal threats can expose you to criminal intimidation charges under law.
                      </p>
                    </article>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Solid proof of fraud lets you file complaints with the Economic Offences Wing. The risk of a criminal probe, questioning, and arrest pushes fraudsters to negotiate. Most dishonest debtors choose to settle rather than face a criminal trial.
                  </p>
                </div>
              </section>

              <section id="negotiating-settlement" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Negotiating a Final Settlement Agreement
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Legal pressure often brings the debtor to the table on your terms. Once you agree on numbers, put every term in a solid written settlement agreement.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The contract must state the exact sum, payment dates, and payment modes. Always include a default clause that cancels all discounts if a payment is missed. If the debtor defaults on one installment, your full original claim revives at once.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Demand payments through bank transfer or cleared cheques before signing off. Execute the agreement on stamp paper and get it notarized. Never drop legal notices or cases until all funds hit your account. Any formal withdrawal must depend strictly on full payment.
                  </p>
                </div>
              </section>

              <section id="red-flags" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Red Flags of Fraudulent Debtors
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Spotting bad-faith debtors early saves you months of wasted time. Certain warning signs show that friendly talks will fail and fast legal steps are needed.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Frequent office address changes and shifting directors are classic warning signs. Another red flag is raising fake quality complaints only after payment deadlines pass. Dishonest buyers use these made-up excuses purely to delay court action.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Sudden company changes, quiet asset sales, and bouncing cheques also signal danger. If a borrower stops answering calls and avoids writing back, act fast. When you see these signs, file court petitions immediately to freeze their assets.
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
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-left space-y-3">
                <p className="text-xs text-slate-500">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Written by</span>
                  <Link href="/authors/advocate-aman-chawla" className="font-bold text-[#DC2626] hover:underline text-sm">Advocate Aman Chawla</Link>
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Reviewed by</span>
                    <Link href="/authors/advocate-sneha-sharma" className="font-bold text-[#DC2626] hover:underline text-sm">Advocate Sneha Sharma</Link>
                  </p>
                </div>
                <time dateTime="2026-06-29" className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold border-t border-slate-100 pt-3">
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
