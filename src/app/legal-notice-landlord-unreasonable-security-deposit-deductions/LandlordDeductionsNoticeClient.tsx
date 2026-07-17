'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a landlord arbitrarily deduct painting charges from my security deposit?",
    answer: "No. Unless explicitly stated in your registered rent agreement that painting charges will be borne by the tenant upon vacating, a landlord cannot unilaterally deduct these charges. Painting is generally considered part of routine property maintenance and normal wear and tear under Indian tenancy laws."
  },
  {
    question: "What legally qualifies as normal wear and tear in India?",
    answer: "Normal wear and tear refers to the natural deterioration of a property resulting from ordinary, everyday use. This includes minor scuff marks on walls, slight fading of paint, loose door hinges, or minor carpet wear. It does not include severe damage like shattered windows, large holes in walls, or broken permanent fixtures."
  },
  {
    question: "Is the landlord required to provide GST invoices for the deductions made?",
    answer: "Yes, absolutely. A landlord cannot deduct estimated or arbitrary amounts from your deposit. They must provide legitimate, verifiable GST invoices or official receipts from registered contractors proving that the exact deducted amount was actually spent on repairing damages caused beyond normal wear and tear."
  },
  {
    question: "Can I challenge landlord deposit deductions if there was no move-in inspection?",
    answer: "Yes. If there is no documented inventory or move-in inspection report signed by both parties at the start of the tenancy, it becomes extremely difficult for the landlord to legally prove that the damages occurred during your specific occupancy. The burden of proof rests heavily on the landlord."
  },
  {
    question: "How long does a landlord legally have to return my security deposit?",
    answer: "The timeline for returning the security deposit is usually dictated by the rent agreement, commonly within 15 to 30 days of vacating the premises. If the agreement is silent, under the Model Tenancy Act, the deposit must be refunded at the time of handing over vacant possession, subject to lawful deductions."
  },
  {
    question: "Can I send a legal notice to my landlord for refusing to refund the security deposit?",
    answer: "Yes, sending a formal legal notice is the standard and most effective first step. A legal notice drafted by an advocate outlines the illegal deductions, demands the immediate release of the remaining deposit, and threatens civil litigation or filing a police complaint for criminal breach of trust if they fail to comply."
  },
  {
    question: "Where do I file a case if the landlord ignores the legal notice?",
    answer: "Depending on your state, you can file a petition with the Rent Control Court or the Rent Authority under the applicable state Tenancy Act. Alternatively, you can file a civil suit for the recovery of money in the jurisdictional civil court, demanding the principal amount plus penal interest and legal costs."
  }
];

const reviews = [
  {
    author: "Rohan K.",
    rating: "5",
    text: "My landlord tried to withhold forty thousand rupees for 'deep cleaning and repainting' without showing a single bill. I used the checklist from this guide and sent a legal notice through my lawyer. The landlord returned the entire amount within four days, realizing I knew my exact rights."
  },
  {
    author: "Priya S.",
    rating: "5",
    text: "This article is a lifesaver. It clearly explained the difference between normal wear and tear and actual damage. When my owner tried to charge me for minor scuff marks, I quoted the legal precedents mentioned here in my notice. The arbitrary deductions were instantly reversed."
  },
  {
    author: "Amit V.",
    rating: "5",
    text: "I was struggling with how to challenge landlord deposit deductions after vacating my flat in Bangalore. The matrix provided here helped me formulate my arguments. I demanded GST invoices for the supposed repairs in my legal notice, and since he had none, he had to refund my full deposit."
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
      "name": "Notice for Unreasonable Landlord Deductions",
      "item": "https://www.legalrecovery.in/legal-notice-landlord-unreasonable-security-deposit-deductions"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tenant Legal Notice for Unreasonable Landlord Deposit Deductions",
  "description": "Learn how to challenge landlord deposit deductions in India. Understand tenant rights regarding security deposit painting charges and draft a legal notice.",
  "image": "https://www.legalrecovery.in/og-landlord-deductions.png",
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
  "name": "Tenant Rights & Deposit Recovery Guide",
  "image": "https://www.legalrecovery.in/og-landlord-deductions.png",
  "description": "A comprehensive guide outlining tenant rights against arbitrary security deposit deductions and how to draft a legal notice.",
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

export default function LandlordDeductionsNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-security-deposit-trap", title: "The Security Deposit Trap: Understanding Your Rights",
      children: [
        { id: "normal-wear-and-tear", title: "Normal Wear and Tear vs. Actual Damage" },
        { id: "painting-and-cleaning", title: "The Legality of Painting and Deep Cleaning Charges" }
      ]
    },
    { id: "deduction-validity-matrix", title: "The Deduction Validity Matrix" },
    { id: "demanding-invoices", title: "The Crucial Step: Demanding Verifiable Invoices" },
    { id: "drafting-the-legal-notice", title: "Drafting the Legal Notice to Contest Deductions" },
    { id: "timeline-of-escalation", title: "Timeline of Legal Escalation against the Landlord" },
    { id: "success-stories-reviews", title: "Success Stories & Tenant Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Notice for Unreasonable Landlord Deductions", href: "/legal-notice-landlord-unreasonable-security-deposit-deductions" }
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
              Tenant Rights
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice for Unreasonable <span className="text-[#DC2626]">Deposit Deductions</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Landlords often return only a fraction of the security deposit by making bad faith deductions for painting or deep cleaning without invoices. Learn how to challenge these arbitrary charges and recover your full deposit legally.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Renting a property in India involves paying a significant security deposit, often amounting to several months of rent upfront. While this deposit is meant to protect the landlord against unpaid rent or severe property damage, it has increasingly become a tool for unjust enrichment. A pervasive issue faced by tenants nationwide is the arbitrary withholding of this deposit upon vacating the premises.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The scenario is highly predictable. You give your formal notice, clean the apartment thoroughly, and hand over the keys. Weeks later, instead of a full refund, you receive a heavily redacted settlement statement. The landlord has deducted exorbitant amounts for arbitrary repairs, deep cleaning services, or a fresh coat of paint. When you request the invoices or receipts validating these expenses, you are met with silence, hostility, or vague explanations about market rates.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  This practice is not merely unethical; it constitutes a direct violation of tenant rights under Indian property laws and the various state specific Rent Control Acts. The law strictly differentiates between the natural degradation of a property and actual negligent damage caused by a tenant. Landlords operate under the assumption that tenants will not pursue legal action for deductions ranging from ten thousand to fifty thousand rupees due to the perceived hassle of courts. By understanding exactly how to challenge landlord deposit deductions and serving a formal legal notice, you destroy this assumption and force compliance.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Before accepting an unfair settlement or writing off the lost money, you must equip yourself with the exact legal definitions governing deductions. Sending a robust legal notice is the absolute most effective method to recover your funds without entering a courtroom. For comprehensive insights into drafting such demands, reading about a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is highly recommended.
                </p>
              </div>

              <section id="the-security-deposit-trap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Security Deposit Trap: Understanding Your Rights
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The core of almost every security deposit dispute lies in the interpretation of property condition. Landlords frequently attempt to shift the financial burden of routine maintenance onto the outgoing tenant. To combat this, you must rely on the precise legal definitions of wear and tear versus damage.
                  </p>

                  <h3 id="normal-wear-and-tear" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Normal Wear and Tear vs. Actual Damage
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian courts have repeatedly established that a tenant is not responsible for repairing the "normal wear and tear" of a property. This legal concept covers the inevitable decline in the condition of a property and its fixtures resulting from ordinary, reasonable, and daily use over time. Examples of normal wear and tear include faded paint due to sunlight, minor scuff marks on walls, worn out carpet paths, or slightly loose hinges on doors. The landlord is expected to absorb these costs as part of the business of renting property.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Conversely, "actual damage" refers to destruction or deterioration caused by the tenant negligence, abuse, or carelessness. This includes massive holes in walls, shattered windows, broken ceramic tiles, or permanent stains on flooring. A landlord can legally deduct the cost of repairing actual damage from the security deposit, provided they can prove the damage occurred during your tenancy and can produce legitimate invoices for the repair work.
                  </p>

                  <h3 id="painting-and-cleaning" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    The Legality of Painting and Deep Cleaning Charges
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A prevalent tactic is for the landlord to deduct a flat fee for repainting the entire apartment. The legality of this deduction hinges entirely on your registered rent agreement. If the agreement explicitly contains a clause stating that the tenant shall bear the cost of painting upon vacating, or that a specific amount (like one month rent) will be deducted as painting charges, you are contractually bound by it.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    However, if the agreement is silent on painting charges, the situation changes drastically. In the absence of a specific clause, repainting is classified under routine maintenance and normal wear and tear. A landlord cannot arbitrarily impose painting charges just because they want the apartment refreshed for the next tenant. If a landlord deducted painting charges from deposit without a contractual basis, it is an illegal deduction. The same legal logic applies to arbitrary "deep cleaning" fees. Unless you left the property in a state of catastrophic filth requiring specialized hazard cleaning, routine cleaning costs cannot be dumped on you.
                  </p>
                </div>
              </section>

              <section id="deduction-validity-matrix" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Deduction Validity Matrix
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    To easily assess whether your landlord deductions are lawful or illegal, refer to this matrix before drafting your legal notice.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">Unpaid Rent or Utility Bills (Lawful)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If you have outstanding rent, electricity, water, or maintenance bills for the period you occupied the property, the landlord has the absolute right to deduct these exact amounts from your deposit.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1">
                          <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">Standard Repainting Costs (Illegal, unless in agreement)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Deducting money to repaint faded walls or cover minor scuffs is illegal unless your signed agreement specifically mandates a painting deduction upon vacating.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1">
                          <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">Arbitrary or Estimated Repair Charges (Illegal)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            A landlord cannot deduct a random lump sum (e.g., twenty thousand rupees for "general repairs"). Every deduction must correspond directly to an actual expense incurred, backed by verifiable GST invoices.
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
                          <h4 className="text-slate-900 font-bold text-lg mb-1">Repairing Tenant Caused Damage (Lawful)</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            If you broke a window or destroyed a permanent fixture, the landlord can deduct the exact replacement cost, provided they supply the invoice for the repair work.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="demanding-invoices" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Crucial Step: Demanding Verifiable Invoices
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The absolute most powerful weapon a tenant has against a greedy landlord is the demand for invoices. A security deposit is your money, held in trust by the landlord. They do not own it. If they wish to use your money to pay for something, they bear the complete burden of proof to justify the expense.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    When a landlord claims they spent twenty thousand rupees on repairs, they are legally required to produce legitimate, verifiable GST invoices from registered contractors or hardware stores. They cannot simply present a hand written slip or claim they paid a local worker in cash. In your legal communications, you must aggressively demand these invoices. In the vast majority of cases involving bad faith deductions, the landlord actually did not spend the money. They simply pocketed the deduction as extra profit. When legally cornered and forced to produce invoices they do not possess, their defense collapses entirely, and they are forced to refund the money to avoid fraud allegations. If your landlord is refusing to engage entirely, understanding <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline font-medium">what to do if legal notice is ignored</Link> will prepare you for the next steps.
                  </p>
                </div>
              </section>

              <section id="drafting-the-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting the Legal Notice to Contest Deductions
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice is a formal demand drafted by an advocate, warning the landlord of impending civil and criminal litigation if the withheld deposit is not refunded. It must be precise, legally sound, and devoid of emotional language.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must begin by establishing the facts: the date the rent agreement was executed, the property address, the exact amount of the security deposit paid, and the date you handed over vacant possession. It must clearly state that you vacated the premises in good condition, accounting only for normal wear and tear as permitted under the law.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The core of the notice will systematically dismantle the landlord deductions. You will explicitly state that the deductions are arbitrary, illegal, and constitute "criminal breach of trust" and "misappropriation of funds" under the Bharatiya Nyaya Sanhita (the new Indian Penal Code). The notice will demand that the landlord either produce valid GST invoices for the alleged damages within a strict timeframe or refund the principal amount immediately. The demand should also include penal interest (typically 18 percent per annum) for the delay and the cost of issuing the legal notice. Sending this notice is often enough to resolve the dispute, as landlords realize that fighting a court battle over a few thousand rupees is economically disastrous for them. For a streamlined process, you can utilize an <Link href="/online-lawyer-to-send-legal-notice" className="text-[#DC2626] hover:underline font-medium">online lawyer to send a legal notice</Link> quickly and efficiently.
                  </p>
                </div>
              </section>

              <section id="timeline-of-escalation" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Timeline of Legal Escalation against the Landlord
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are dealing with a stubborn landlord, it is vital to understand the exact sequence of legal escalation. You do not jump straight to filing a lawsuit; there is a calculated progression designed to apply increasing pressure.
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
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: The Legal Notice Period</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Your advocate drafts and serves the legal notice via Registered Post with Acknowledgment Due (RPAD) and email. This notice gives the landlord a strict 15 day deadline to refund the money or produce verifiable invoices. Most disputes are settled during this window as landlords wish to avoid legal fees.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 30: Police Complaint (Optional)</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the landlord ignores the notice and you suspect outright fraud, you can file a formal complaint at the local police station under the jurisdiction of the rented property, citing criminal breach of trust. While police often classify rent disputes as civil matters, the summons alone can frighten a landlord into paying.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 30 Onwards: Rent Court or Civil Suit</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If all else fails, your advocate will file a formal petition before the Rent Control Authority or a civil suit for money recovery in the jurisdictional court. The court will demand the landlord prove the damages with invoices. Failure to do so will result in a court order commanding the refund with heavy interest and legal costs.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Tenant Reviews
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
                  Discuss your deposit recovery case with legal experts. We draft and serve legally compliant notices to force your landlord to pay.
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
      </main>
      
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
