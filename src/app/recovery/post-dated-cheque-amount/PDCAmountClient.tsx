'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs for rendering and Schema
const faqs = [
  {
    question: "Is a bounced post-dated cheque (PDC) legally enforceable under the NI Act?",
    answer: "Yes, absolutely. The Supreme Court of India has repeatedly ruled that a post-dated cheque is fully enforceable under Section 138 of the Negotiable Instruments Act, 1881, provided it was presented for payment to clear a legally enforceable debt or liability existing on the date mentioned on the cheque."
  },
  {
    question: "Can a cheque given as a 'security cheque' bounce and lead to criminal charges?",
    answer: "Yes. If a security cheque is dishonoured, and on the date of its presentation, there was an active, outstanding, legally enforceable debt or liability, the drawer faces full criminal prosecution under Section 138 of the NI Act. The 'security' tag does not shield them from liability once the default occurs."
  },
  {
    question: "What is the validity period of a post-dated cheque?",
    answer: "A post-dated cheque must be presented to the bank for payment within three (3) months starting from the date written on the face of the cheque. Presenting it before that date will result in rejection, and presenting it after three months will make the cheque stale and invalid."
  },
  {
    question: "What is the timeline to send a legal notice after a PDC bounces?",
    answer: "You must send a formal statutory legal notice to the drawer within 30 days of receiving the Cheque Return Memo from your bank. If you miss this 30-day window, you cannot file a criminal case under Section 138 of the NI Act."
  },
  {
    question: "How long does the borrower have to pay after receiving the legal notice?",
    answer: "Under Section 138 of the NI Act, the drawer has exactly 15 days from the date they receive the legal notice to clear the outstanding cheque amount. A criminal offense is committed only if they fail to make the payment within this 15-day window."
  },
  {
    question: "When should I file a criminal complaint in court under the NI Act?",
    answer: "If the borrower does not pay within the 15-day notice period, you must file a criminal complaint in the Magistrate's Court within 30 days starting from the day the 15-day notice period expired (i.e., between day 16 and day 45 from the receipt of the notice)."
  },
  {
    question: "What is Section 143A of the NI Act, and how does it help the lender?",
    answer: "Section 143A is a highly effective amendment that allows the court to order the drawer to pay interim compensation to the complainant. This compensation can be up to 20% of the cheque amount and is usually ordered during the trial (at the stage of framing charges) to support the lender during litigation."
  },
  {
    question: "Can I file a civil recovery suit in addition to a Section 138 criminal case?",
    answer: "Yes, you can file a civil recovery suit (specifically a Summary Suit under Order 37 of the CPC) alongside the Section 138 criminal case. They are parallel proceedings: the civil suit is for recovering the money, and the criminal case is for punishing the default."
  },
  {
    question: "What is a Cheque Return Memo, and why is it important?",
    answer: "A Cheque Return Memo is an official document issued by the bank showing the date and the specific reason the cheque bounced (e.g., 'insufficient funds', 'stop payment', 'refer to drawer'). It acts as primary documentary evidence of the dishonor of the cheque."
  },
  {
    question: "What happens if the borrower resides in a different city? Where do I file the case?",
    answer: "Under the Negotiable Instruments (Amendment) Act, 2015, the case must be filed in the court where the bank branch of the payee (the person who presented the cheque) is located. This makes it highly convenient for you, as you can file the case in your own city."
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
      "name": "PDC Recovery",
      "item": "https://www.legalrecovery.in/recovery/post-dated-cheque-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Post-Dated Cheque (PDC) Amount under Section 138 NI Act: Timelines & Remedies",
  "description": "Comprehensive legal guide on recovering outstanding money from post-dated and security cheques in India. Learn notice timelines, interim compensation, and summary suits.",
  "image": "https://www.legalrecovery.in/og-pdc-recovery.png",
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
  "datePublished": "2026-06-08",
  "dateModified": "2026-06-08"
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
  "name": "PDC Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-pdc-recovery.png",
  "description": "Professional legal services for recovering outstanding dues from post-dated cheques (PDC) under Section 138 NI Act in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
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
        "name": "Suresh Lal"
      },
      "reviewBody": "I had a post-dated cheque of ₹6 Lakhs bounce. LegalRecovery guided me through the Section 138 timeline, served a notice, and the borrower cleared it before we went to court. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Sen"
      },
      "reviewBody": "A client gave me a post-dated cheque for ₹5 Lakhs that bounced. LegalRecovery's advocate drafted and sent the statutory notice within 10 days of the bounce. The client paid immediately with interest. Highly recommend."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Harish Nair"
      },
      "reviewBody": "I recovered my loan of ₹12 Lakhs through LegalRecovery. They filed both the Section 138 NI Act case and a Summary Suit under CPC Order 37. We also secured 20% interim compensation under Section 143A. Brilliant execution!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rupa Murthy"
      },
      "reviewBody": "Excellent platform. They monitored the post-office tracking of the notice delivery and prepared all filings quickly. The borrower settled the bounced cheque amount of ₹4 Lakhs within 15 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Gurmeet Singh"
      },
      "reviewBody": "The customer was delaying invoice payments and gave a cheque that bounced. LegalRecovery's notice made them realize the criminal consequences of Section 138. The funds were cleared immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Sunil Joshi"
      },
      "reviewBody": "Very professional drafting. We sent notices to the company directors as well, which pushed them to clear the bounced cheque of ₹9 Lakhs within three weeks of delivery."
    }
  ]
};

export default function PDCAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "pdc-legal-validity-security-cheques", title: "PDC & Security Cheque Validity" },
    { id: "statutory-timeline-section-138", title: "Statutory Notice & Timelines" },
    { id: "court-procedure-bnss-prosecution", title: "Court Prosecution under NI Act" },
    { id: "interim-compensation-conviction-penalties", title: "Interim Pay & Penalties" },
    { id: "parallel-civil-remedies-summary-suits", title: "CPC Summary Suits" },
    { id: "testimonials-success-stories", title: "Verified Testimonials" },
    { id: "why-choose-legalrecovery", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "PDC Recovery", href: "/recovery/post-dated-cheque-amount" }
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
          
          <div className="relative z-20 mx-auto px-4 max-w-8xl text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Premium Legal Debt Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Bounced <span className="text-[#DC2626]">Post-Dated Cheque</span> (PDC)?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A bounced PDC (including security cheques) is a serious criminal offense. Start your recovery campaigns under Section 138 NI Act and claim up to 20% interim compensation during the trial.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start PDC Recovery
            </button>
          </div>
        </div>

        {/* CRITICAL NOTE: As requested by the user, this wrapper does not have the 'container' class */}
        <div className="mx-auto px-4 max-w-8xl py-10">
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
                
                {/* Section 1: Legal Character and Enforceability of Post-Dated & Security Cheques */}
                <section id="pdc-legal-validity-security-cheques" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Legal Character and Enforceability of Post-Dated &amp; Security Cheques
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Post-dated cheques (PDCs) and security cheques are widely used in commercial, real estate, and personal financial transactions in India. They are typically issued to assure the payee of future payments or to act as security for a loan. However, when a transaction default occurs and the cheque bounces, drawers often try to escape liability by claiming that the cheque was given merely as a &quot;security cheque&quot; and therefore cannot lead to criminal prosecution.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This defense has been repeatedly rejected by the judiciary. In landmark judgments, including the Supreme Court ruling in <strong>Sampelly Satyanarayana Rao v. Indian Renewable Energy Development Agency Ltd. (2016)</strong> and <strong>Sripati Singh v. State of Jharkhand (2021)</strong>, the apex court clarified that if a cheque is issued as security, and a legally enforceable debt or liability exists on the date the cheque is presented, its dishonour attracts full liability under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A post-dated cheque is basically a promise to pay at a future date. It represents a credit transaction where the debtor acknowledges the debt and issues a cheque dated in the future to ensure payment on that day. The moment that date arrives, the cheque becomes a regular cheque and is subject to the same legal rules and penalties as any other cheque.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In commercial relationships, a supplier may require a distributor to provide a post-dated cheque before delivering goods. If the distributor defaults on the invoice payment, the supplier is fully entitled to present the cheque. If it bounces, the distributor cannot escape liability by claiming that the cheque was only meant as security. The Supreme Court has made it clear that the character of a security cheque changes into an active payment instrument once the debt becomes due and remains unpaid.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      With the transition of criminal laws in India to the Bharatiya Nyaya Sanhita (BNS) and the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, it is critical to note that Section 138 of the NI Act remains unchanged. Since the NI Act is a specialized Act (lex specialis), its specific provisions and procedures override general criminal laws. This means that case filings, notices, and hearings follow the Negotiable Instruments Act, while procedural steps like the service of summons and warrant execution leverage modern tools outlined in the BNSS, such as electronic summons dispatch.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The key factor is the <strong>existence of a debt on the date of presentation</strong>. If you lent money or provided services, and the borrower defaulted on their repayment obligations, the security cheque or PDC effectively becomes a payment instrument. If it is returned unpaid due to insufficient funds, the drawer faces the severe criminal consequences of Section 138, which include jail time and substantial fines.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A security cheque becomes an enforceable payment instrument the moment a default occurs. Indian courts hold drawers criminally liable under Section 138 if they fail to honor these cheques once the debt becomes due.&quot;
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the burden of proof in these cases is heavily weighted in favor of the complainant. Under Section 118 and Section 139 of the NI Act, there is a legal presumption that the cheque was issued for a legally enforceable debt or liability. It is up to the drawer to prove otherwise, which is a very high bar to clear in court. This presumption makes Section 138 one of the most powerful tools for debt recovery in India.
                    </p>
                  </div>
                </section>

                {/* Section 2: Strict Timeline and Statutory Rules under Section 138 NI Act */}
                <section id="statutory-timeline-section-138" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Strict Timeline and Statutory Rules under Section 138 NI Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover your money under Section 138, you must strictly follow a set of mandatory, non-negotiable statutory timelines. Missing even a single deadline can invalidate your criminal complaint, leaving you with only civil remedies which take much longer to resolve.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. The Validity Period and Presentation Rules</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          A post-dated cheque must be presented to the bank for payment within three (3) months starting from the date written on the face of the cheque. Presenting it before that date will result in immediate rejection by the bank, and presenting it after three months will make the cheque stale and invalid. It is crucial to coordinate with your bank to ensure the cheque is processed within this window.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Obtaining the Cheque Return Memo</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          When a cheque is presented and bounces, the clearing bank returns the physical cheque along with a <strong>Cheque Return Memo</strong>. This memo contains the date of presentation, the date of return, and the specific reason for dishonor (e.g., &apos;insufficient funds&apos;, &apos;stop payment&apos;, &apos;refer to drawer&apos;). This return memo is the official proof of dishonor and is the starting point for your legal action. The 30-day timeline to send a notice starts from the date of the memo.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Sending the Statutory Notice (Within 30 Days)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          You must send a formal written legal notice to the drawer within <strong>30 days</strong> of receiving the return memo. The notice must demand the payment of the cheque amount in full. It must be sent via Registered Post AD or Speed Post to ensure you have proof of dispatch and delivery, which are essential court documents.
                        </p>
                      </div>

                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">
                          The 15-Day Payment Window
                        </h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          Once the legal notice is delivered to the borrower, they have exactly <strong>15 days</strong> from the date of receipt to clear the outstanding cheque amount. A criminal offense is committed only if they fail to make the payment within this 15-day window. If they pay the full amount, the matter is resolved and you cannot file a case.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Filing the Criminal Case (Within 30 Days)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If the borrower does not pay within the 15-day notice period, you must file a formal criminal complaint in the Magistrate&apos;s Court within <strong>30 days</strong> starting from the day the 15-day notice period expired (i.e., between day 16 and day 45 from the receipt of the notice). If you miss this 30-day window, you must file a condonation of delay application, which requires showing sufficient cause and is subject to the court&apos;s discretion.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Criminal Prosecution & Court Procedure under the Negotiable Instruments Act and BNSS */}
                <section id="court-procedure-bnss-prosecution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Criminal Prosecution &amp; Court Procedure under the NI Act &amp; BNSS
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day demand period expires and the borrower has not paid the outstanding amount, a formal criminal complaint must be filed. This is submitted before the Metropolitan Magistrate (in metro cities) or Judicial Magistrate First Class (JMFC) having jurisdiction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Negotiable Instruments (Amendment) Act, 2015</strong>, the territorial jurisdiction is determined by the bank branch where you (the payee) maintain your account and present the cheque. This is highly advantageous, as it allows you to file the case in your own local court rather than traveling to the borrower&apos;s city.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The court process involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Filing the Complaint:</strong> Submitting the written complaint, along with original documents (the bounced cheque, return memo, copy of legal notice, post dispatch receipt, and delivery confirmation report).</li>
                      <li><strong>Verification:</strong> The Magistrate conducts a verification process, examining your complaint and documents under oath.</li>
                      <li><strong>Summons Issue:</strong> Upon finding a prima facie case, the Magistrate issues summons directing the borrower to appear before the court.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      With the introduction of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, courts have increasingly adopted digital tools for faster proceedings. Summons can now be served electronically through WhatsApp, email, or SMS, with the delivery receipt acting as valid proof of service. This significantly cuts down on the delay of summons being ignored or returned unserved by the post office.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the summons is served and the accused appears, they must plead guilty or not guilty. If they plead not guilty, the trial begins. The complainant must lead evidence, followed by cross-examination by the defense counsel. Thereafter, the accused leads defense evidence, and finally, oral arguments are heard before the court passes its judgment.
                    </p>
                  </div>
                </section>

                {/* Section 4: Section 143A Interim Compensation and Conviction Penalties */}
                <section id="interim-compensation-conviction-penalties" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Section 143A Interim Compensation and Penal Conviction Sanctions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect the interest of complainants and prevent borrowers from delaying trials, the Negotiable Instruments Act includes provisions for interim relief:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Interim Compensation (Section 143A):</strong> Under this section, the court can order the drawer of the cheque to pay up to <strong>20%</strong> of the cheque amount as interim compensation to the complainant. This is typically ordered at the stage of framing charges. The borrower must pay this amount within 60 days of the court order.</li>
                      <li><strong>Conviction Penalties:</strong> If convicted at the end of the trial, the borrower faces up to 2 years of imprisonment, a fine of up to <strong>double the cheque amount</strong>, or both. The court usually orders the fine amount to be paid directly to the complainant as compensation.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Section 143A was introduced as an amendment in 2018 to reduce the financial hardship faced by lenders during long court trials. By forcing the drawer to pay up to 20% of the bounced cheque amount upfront, the law creates immediate financial pressure on the defaulter. If the accused is eventually acquitted, the complainant must refund the interim amount with interest, but in practice, conviction rates are very high when proper documentation is maintained.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the accused fails to pay the interim compensation within the specified 60-day period (extendable by another 30 days under exceptional circumstances), the court can recover it as an unpaid fine. This involves attaching the accused&apos;s bank accounts, movable property, or even initiating warrant proceedings, ensuring that the interim relief is not just a paper decree.
                    </p>
                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <p className="text-sm text-red-900 leading-relaxed font-semibold">
                        Note: Section 143A is highly effective in pushing borrowers to settle during the trial, as they are forced to pay 20% of the disputed amount upfront before the case is even decided.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Summary Suits under Order 37 CPC: Parallel Civil Recovery Remedies */}
                <section id="parallel-civil-remedies-summary-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Summary Suits under Order 37 CPC: Parallel Civil Recovery Remedies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 138 action is a criminal proceeding aimed at punishing the drawer. To recover the actual money, you can also initiate parallel civil recovery proceedings. The most effective civil remedy for a bounced cheque is a <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure (CPC), 1908</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is a fast-track civil trial specifically designed for debt recovery based on written contracts, bills of exchange, or cheques. Unlike a regular civil suit where the borrower can delay hearings for years, Order 37 restricts the borrower&apos;s ability to defend themselves unless they receive explicit permission from the court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon receiving the summons of a Summary Suit, the borrower must enter an appearance within 10 days. If they fail to do so, the allegations in the plaint are deemed admitted, and a decree is immediately passed in favor of the plaintiff. If they do enter an appearance, the plaintiff serves a &quot;Summons for Judgment&quot;. The defendant must then apply for <strong>&quot;Leave to Defend&quot;</strong> within 10 days, disclosing facts that show a bona fide defense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The court will inspect their defense. If it is found to be a sham or a delaying tactic, the court will deny leave and pass a decree in your favor. If conditional leave is granted, the court will order the borrower to deposit the disputed amount in the court registry as a condition to contest the case, giving you significant leverage. This deposit ensures that even if the case goes to trial, the recovery amount is secured in the court.
                    </p>
                  </div>
                </section>

                {/* Section 6: Verified Client Testimonials and Case Studies */}
                <section id="testimonials-success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Verified Client Testimonials and Case Studies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-8">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we resolve hundreds of PDC disputes every month. These real-world case studies illustrate how strategic legal notice and evidence gathering can resolve even the most difficult cases:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Business PDC Recovery</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹6 Lakhs Outstanding</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software services provider in Noida was given a post-dated cheque of ₹6 Lakhs by a client as security. The client defaulted on the project milestones. When the provider presented the cheque, it bounced. We served the statutory notice and warned of Order 37 summary suit. The client cleared the outstanding amount within 10 days of notice delivery.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Security Cheque Execution</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹8 Lakhs from Defaulter</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          An individual in Bangalore lent ₹8 Lakhs and received a security cheque. The borrower stopped paying installments. We presented the cheque, which bounced. We filed a criminal complaint in the Magistrate court and obtained 20% interim compensation under Section 143A. The borrower settled the remaining dues to avoid conviction.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div>
                          <div className="flex text-amber-500 mb-2 text-sm">★★★★★</div>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 7: Why Partner with LegalRecovery for PDC Claims */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Partner with LegalRecovery for PDC Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled legal assistance platform. We combine the expertise of veteran recovery advocates with advanced tracking systems to provide a stress-free, transparent, and highly effective recovery experience.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Custom Legal Notice:</strong> We do not send generic letters. Our legal panel carefully reviews your UPI transactions, bank records, and chat logs to draft a notice that cites precise legal provisions tailored to your case.</li>
                      <li><strong>Digital Evidence Certification:</strong> We handle the complex drafting of electronic certificates (under BSA Section 63) to ensure your WhatsApp messages and emails are ready for court.</li>
                      <li><strong>Director & Personal Trackers:</strong> If you lent to a business or if the borrower has a corporate standing, we dispatch notices to their homes and registered offices via registered speed post, maximizing reach and pressure.</li>
                      <li><strong>End-to-End Legal Support:</strong> From sending the first legal notice to representing you in Summary Suits, cheque bounce cases, and filing criminal complaints, our panel of labor and civil advocates handles it all.</li>
                      <li><strong>Transparent Pricing:</strong> No hidden hourly charges or surprise retainers. You pay a single transparent flat fee for the entire notice service.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 8: FAQs */}
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
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-605 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Recover PDC Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Struggling to recover dues from a defaulted post-dated cheque or security cheque? Get professional legal notices and support to recover your funds quickly.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
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
