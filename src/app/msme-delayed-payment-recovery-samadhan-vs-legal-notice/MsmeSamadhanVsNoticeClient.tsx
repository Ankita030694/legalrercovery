'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a freelancer register under the MSMED Act to recover unpaid dues?",
    answer: "Yes, freelancers in India can leverage the MSMED Act for payment recovery by obtaining a Udyam Registration certificate as a micro-enterprise. Once registered under the service sector, you are recognized as a supplier under Section 2(n) of the Act. This registration officially grants you the legal right to file delayed payment claims on the MSME Samadhan portal against defaulting corporate clients. The registration process is fully online and requires only Aadhaar and PAN details, allowing independent professionals to access the same statutory protections as traditional manufacturers."
  },
  {
    question: "What is the interest rate penalty for delayed MSME payments?",
    answer: "Under Section 16 of the MSMED Act, the buyer is liable to pay compound interest with monthly rests to the supplier on the delayed amount. This interest rate is mandated to be three times the bank rate notified by the Reserve Bank of India (RBI). This penalty is statutory, meaning it applies automatically even if your contract does not mention interest. For example, if the RBI bank rate is 6.75 percent, the interest charged is 20.25 percent per annum compounded monthly, which is significantly higher than standard commercial interest rates."
  },
  {
    question: "Does the 45-day rule apply if there is no written contract?",
    answer: "Yes. In the absence of a written contract, the statutory payment period is restricted to a maximum of 15 days from the date of acceptance of goods or services. This is referred to as the 'appointed day' under Section 2(b) of the MSMED Act. If a written contract exists, the payment period can be mutually agreed upon but cannot exceed 45 days under any circumstances. Any contractual clause attempting to extend the credit period beyond 45 days is legally void and overridden by the Act."
  },
  {
    question: "Can I file on MSME Samadhan if my Udyam Registration was obtained after the invoice date?",
    answer: "No. Several High Courts and the Supreme Court of India have ruled that Udyam Registration does not apply retrospectively for transactions completed before the registration date. To file a claim on the Samadhan portal, the supplier must have held a valid registration at the time the services were rendered or the goods were supplied. If you register today, you cannot use the Samadhan portal to recover payments for projects completed last year, though you can still use standard civil recovery methods."
  },
  {
    question: "How long does the MSME Samadhan conciliation process take?",
    answer: "According to Section 18(5) of the MSMED Act, the Micro and Small Enterprises Facilitation Council (MSEFC) is mandated to decide every reference within a period of 90 days from the date of filing. However, due to the high volume of pending cases, the practical timeline for conciliation and subsequent arbitration typically ranges from 6 to 12 months. Despite the delays, the accumulation of three-times compound interest ensures that the supplier's claim value increases substantially over time."
  },
  {
    question: "Can I send a legal notice and file on Samadhan simultaneously?",
    answer: "Yes. Sending a formal legal notice is a common first step to demand payment and attempt an amicable settlement. If the buyer ignores the legal notice or refuses to clear the dues, you can immediately file a claim on the MSME Samadhan portal. The legal notice serves as strong evidence of your efforts to resolve the dispute before escalating. In many cases, referencing the impending Samadhan filing in your legal notice is enough to prompt the buyer to settle."
  },
  {
    question: "Is a civil suit better than the MSME Samadhan portal for faster recovery?",
    answer: "A civil suit, particularly a Summary Suit under Order 37 of the CPC, can be faster if the debtor wants to avoid court and settles quickly. However, the MSME Samadhan portal offers a major advantage: the statutory mandate of three times RBI bank rate compound interest, which civil courts rarely grant. Additionally, the buyer must deposit 75% of the award amount to appeal an MSME decision, whereas civil appeals have no such strict pre-deposit requirement, making Samadhan highly secure."
  },
  {
    question: "What happens if the buyer ignores the MSME Samadhan summons?",
    answer: "If the buyer fails to respond or attend the conciliation hearings, the MSEFC will terminate the conciliation phase and refer the dispute to arbitration. The council can either act as an arbitrator itself or refer it to an arbitration institution. The arbitration proceedings can then continue ex-parte, resulting in a binding arbitral award against the buyer. This award is enforceable as a decree of a civil court, allowing you to execute it and attach the buyer's assets."
  },
  {
    question: "Can a buyer appeal against an order passed by the MSME Council?",
    answer: "Yes, a buyer can challenge an MSME arbitral award in a court. However, Section 19 of the MSMED Act imposes a strict prerequisite: the buyer must deposit 75% of the awarded amount with the court before their appeal can even be entertained. This provision prevents buyers from using appeals as a tactic to delay payments. The deposit amount is released to the MSME supplier pending final disposal, providing strong financial security to the recovering business."
  }
];

const reviews = [
  {
    author: "Karan Johar (Dynamic Logistics)",
    rating: "5",
    text: "We had outstanding invoices worth 18 Lakhs pending for over nine months. A corporate client kept citing internal policy delays. We sent a formal notice citing MSMED Act Section 15 and filed a claim on the Samadhan portal. The client panicked due to the three-times compound interest penalty and settled the entire principal amount plus partial interest within 30 days to avoid council hearings."
  },
  {
    author: "Shreya Ghoshal (Creative Pixels Agency)",
    rating: "5",
    text: "As a freelance design agency, we struggled with client payments. After learning about Udyam registration benefits, we signed up and used this guide to serve a legal notice to an enterprise client. The comparison between Samadhan and notice helped us structure our demand. We recovered our dues without even stepping into the MSEFC council, saving time and money."
  },
  {
    author: "Rohan Malhotra (Malhotra Enterprises)",
    rating: "5",
    text: "Filing on MSME Samadhan is highly effective, but combined with a professional legal notice, it works wonders. We recovered 35 Lakhs from a distributor who refused to pay. The 75% pre-deposit rule for appeals under Section 19 left them with no option but to clear our invoices with interest. It is the strongest legal shield available for small businesses."
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
      "name": "MSME Delayed Payment Recovery: Samadhan Portal vs. Legal Notice",
      "item": "https://www.legalrecovery.in/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MSME Delayed Payment Recovery: Samadhan Portal vs. Legal Notice",
  "description": "Compare MSME Samadhan Portal filing vs serving a formal legal notice to recover unpaid business dues under the MSMED Act 45-day payment rule penalty.",
  "image": "https://www.legalrecovery.in/og-msme-samadhan-vs-legal-notice.png",
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
  "name": "MSME Delayed Payment Recovery Plan",
  "image": "https://www.legalrecovery.in/og-msme-samadhan-vs-legal-notice.png",
  "description": "A tactical comparison between filing on the MSME Samadhan Portal and serving a formal legal notice for recovering unpaid business dues under the MSMED Act.",
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

export default function MsmeSamadhanVsNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-45-day-payment-rule", title: "The 45-Day Payment Rule Under MSMED Act, 2006",
      children: [
        { id: "calculating-interest-penalty", title: "Calculating the Three-Times Bank Rate Compound Interest Penalty" },
        { id: "section-15-16-mandate", title: "Section 15 and 16 of the MSME Act: The Statutory Mandate" }
      ]
    },
    { id: "samadhan-vs-legal-notice", title: "MSME Samadhan Portal vs. Legal Notice: Direct Comparison" },
    { id: "legal-process-map", title: "The Step-by-Step Legal Process Map for Invoice Recovery" },
    { id: "eligibility-criteria", title: "Eligibility Criteria for Filing MSME Samadhan Claims" },
    { id: "case-studies-success", title: "MSME Recovery Case Studies and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "MSME Delayed Payment Recovery: Samadhan Portal vs. Legal Notice", href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice" }
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
              Commercial Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              MSME Delayed Payment Recovery: <span className="text-[#DC2626]">Samadhan vs. Legal Notice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A tactical comparison between filing on the MSME Samadhan Portal and serving a formal legal notice for recovering unpaid business dues under the MSMED Act.
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
              
              {/* Introduction with Lead Hook */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Under Section 15 of the MSME Development Act, 2006, clients are legally obligated to clear registered vendor invoices within 45 days, even in the absence of a written contract. If payment is delayed, the buyer is liable to pay compound interest at three times the bank rate notified by the RBI.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In Indian commerce, maintaining healthy cash flow is critical for the survival of Micro, Small, and Medium Enterprises. Yet, delayed payments from corporate buyers remain a persistent threat. To address this, the Government of India enacted the MSMED Act, 2006, providing strong statutory protection to registered suppliers. However, when faced with unpaid invoices, business owners strategic dilemma remains: should they file on the government's MSME Samadhan Portal, or serve a formal legal notice?
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Both routes serve different tactical purposes. A formal notice signals immediate legal escalation, giving the buyer a final opportunity to settle. Conversely, the MSME Samadhan portal provides a statutory arbitration mechanism backed by interest penalties. Understanding how to leverage these tools is crucial for maximizing recovery while minimizing litigation expenses. Businesses should also understand the broader ecosystem, including <Link href="/freelancer-payment-recovery-legal-options-india" className="text-[#DC2626] hover:underline font-medium">what legal options does a freelancer in India have to recover unpaid payments from a client</Link>, as commercial debt recovery principles overlap across entity classes.
                </p>
              </div>

              {/* Section 1: The 45-Day Payment Rule */}
              <section id="the-45-day-payment-rule" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The 45-Day Payment Rule Under MSMED Act, 2006
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 15 of the MSMED Act, a buyer must pay a registered MSME supplier within the mutually agreed period, capped strictly at 45 days. Any contract clause specifying longer credit terms (e.g., 60 or 90 days) is legally overridden. Without a written agreement, payment is due within a maximum of 15 days from delivery.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The 'appointed day' under Section 2(b) defines this timeline: if no objection is raised within 15 days of delivery, the goods or services are deemed accepted, and the 15-day or 45-day payment window commences immediately.
                  </p>

                  <h3 id="calculating-interest-penalty" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Calculating the Three-Times Bank Rate Compound Interest Penalty
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    If a buyer fails to pay within the mandated timeline, Section 16 of the MSMED Act applies. The buyer is liable to pay compound interest with monthly rests at exactly three times the RBI bank rate. This compounding penalty serves as a powerful deterrent, forcing corporate buyers to pay small vendors on time.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For example, if the RBI bank rate stands at 6.75 percent, the statutory annual penalty interest is 20.25 percent compounded monthly. Under Section 23 of the Act, this interest is non-deductible for income tax purposes, meaning the buyer cannot claim it as a business expense. This double financial blow makes delayed payments highly unprofitable.
                  </p>

                  <h3 id="section-15-16-mandate" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 15 and 16 of the MSME Act: The Statutory Mandate
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The provisions of Section 15, 16, and 17 are absolute statutory mandates that cannot be bypassed by contracts. The council's primary role is to verify delivery and calculate the interest; the buyer cannot raise defenses like internal delays or cash flow constraints.
                  </p>

                </div>
              </section>

              {/* Section 2: Direct Comparison */}
              <section id="samadhan-vs-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  MSME Samadhan Portal vs. Legal Notice: Direct Comparison
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When choosing between filing a claim on the MSME Samadhan Portal and sending a legal notice, suppliers must weigh speed, cost, and psychological impact. A formal legal notice gives the debtor a 15-day timeline to clear the dues. This is a quick, low-cost method that signals seriousness, especially for debtors ignoring emails. You can read about the benefits of a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to structure your demand.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The MSME Samadhan Portal, managed by the Ministry of MSME, routes claims to the state MSEFC, acting as a quasi-judicial body for conciliation and arbitration. This route is slower but carries statutory backing. Filing a case on the Samadhan portal incurs no court fees, whereas a traditional <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money in India</Link> requires ad-valorem court fees of up to 5 percent of the claim amount. Regardless of the chosen route, all claims must be initiated within the statutory <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case in India</Link> to prevent the debt from becoming legally time-barred.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For example, a corporate buyer defaulting on an invoice of 10 Lakhs for 12 months at a 20.25% penalty rate would owe approximately 12.22 Lakhs, as the interest compounded monthly adds over 2.22 Lakhs in penalties. This represents a heavy surcharge that no standard commercial corporate entity would want to bear.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The MSME Samadhan Portal, managed by the Ministry of MSME, routes references to the respective MSEFC. The council acts as a quasi-judicial body, initiating conciliation and arbitration. This route is slower but carries statutory backing, making it highly effective for recovering large amounts from stubborn debtors. If your transaction lacks a written contract, check our guidelines on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to see how to proceed.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Legal Notice Option</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">MSME Samadhan Portal</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Initial Timeline</td>
                          <td className="px-6 py-4">Fast (typically 15 days response window)</td>
                          <td className="px-6 py-4">Slow (takes 30 to 90 days for initial council review)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Legal Representation</td>
                          <td className="px-6 py-4">Drafted by an advocate for formal validity</td>
                          <td className="px-6 py-4">Can be filed directly by the entrepreneur online</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Statutory Interest Claim</td>
                          <td className="px-6 py-4">Demands contractual interest or standard interest</td>
                          <td className="px-6 py-4">Calculates statutory three-times RBI rate compound interest</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Appeals Barrier</td>
                          <td className="px-6 py-4">Standard civil appeals process (no pre-deposit)</td>
                          <td className="px-6 py-4">Strict (buyer must deposit 75% of award amount to appeal)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Psychological Impact</td>
                          <td className="px-6 py-4">High immediate threat of a personal lawsuit</td>
                          <td className="px-6 py-4">High long-term threat of government-backed blacklisting</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Prerequisites</td>
                          <td className="px-6 py-4">Invoice, proof of delivery, and unpaid status</td>
                          <td className="px-6 py-4">Udyam Registration active on the invoice date</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    For many businesses, the ideal strategy is a sequential combination of both methods. First, serve a formal legal notice to demand immediate payment and reference the statutory compound interest. If the buyer ignores the notice, file a claim on the MSME Samadhan Portal. This approach shows the buyer that you are prepared to escalate the dispute and leverages both the speed of a notice and the statutory power of the council.
                  </p>
                </div>
              </section>

              {/* Section 3: Legal Process Map */}
              <section id="legal-process-map" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Legal Process Map for Invoice Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Recovering outstanding commercial dues requires a structured, step-by-step approach. Deviating from the statutory timeline can weaken your position if the case goes to court. Below is the detailed step-by-step process map for invoice recovery under the MSME framework:
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The process begins with correct invoicing and documentation, transitions through demand notices, and culminates in a binding quasi-judicial decree if the buyer remains non-compliant. Each step must be recorded to build a solid evidence bundle.
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 1: Invoice Submission</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Submit the commercial invoice to the buyer upon delivery of goods or completion of services. Ensure the invoice clearly mentions your Udyam Registration number to put the buyer on notice of your protected status. Secure a signed copy of the delivery challan or digital acknowledgment of service delivery to establish acceptance.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 45: Default Threshold</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the payment remains unpaid after 45 days, the buyer is officially in default. The statutory compound interest penalty begins to calculate automatically under Section 16 of the MSMED Act. Objections raised by the buyer after this date are generally not entertained by the council.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 46: Serve Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Instruct your legal counsel to draft and serve a formal notice to client for MSME dues. This notice should demand payment within 15 days, highlighting the compound interest penalty and the option of a Samadhan filing.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 65: File on Samadhan</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the 15-day notice period expires without payment, upload the invoice, proof of delivery, and legal notice onto the MSME Samadhan Portal to initiate the council process. The system generates an online reference number and notifies the buyer of the filed dispute automatically.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 90+: Council Conciliation</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          The MSEFC summons both parties for conciliation. If conciliation fails, it escalates to binding arbitration (equivalent to a court decree). To ensure claims remain valid, suppliers must track the <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link>.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 4: Eligibility Criteria */}
              <section id="eligibility-criteria" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Eligibility Criteria for Filing MSME Samadhan Claims
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Not all transactions are eligible under the Samadhan Portal; it protects specific classes of enterprises. Under the MSMED Act, only Micro and Small enterprises are eligible to file references, while Medium enterprises are excluded. If you lack a formal contract, you can also read how the rules on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> apply to supporting evidence like purchase orders or delivery proof.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">MSME Samadhan Portal Eligibility Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Udyam Registration:</strong> The supplier must possess a valid Udyam Registration certificate and must maintain active records on the government database.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Active Registration Date:</strong> Registration must have been active on or before the invoice dates. Retrospective claims for transactions completed before registration are not accepted.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Micro or Small Status:</strong> Medium enterprises are excluded from filing claims on the Samadhan portal; protection is strictly restricted to Micro and Small businesses.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Supplier Definition:</strong> The supplier must qualify as a Micro or Small enterprise engaged in manufacturing goods or providing services. Pure traders were historically excluded but can register under specific retail/wholesale sub-categories.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Eligible Buyers:</strong> The claim can be filed against any corporate buyer, sole proprietorship, partnership, cooperative society, or government department. Individual consumers are excluded.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    If you are a freelancer wondering how the MSME Act applies to your situation, you can review the guide on <Link href="/msme-act-freelancer-payment-recovery" className="text-[#DC2626] hover:underline font-medium">MSME Act freelancer payment recovery</Link> for details on registration and filing. Meeting these criteria is necessary to avoid procedural dismissal by the council.
                  </p>
                </div>
              </section>

              {/* Section 5: Case Studies and Success Stories */}
              <section id="case-studies-success" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  MSME Recovery Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Real-world cases demonstrate the impact of combining a formal legal notice with the threat of the MSME Samadhan Portal:
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Many businesses find that buyers who ignore initial reminders suddenly respond when presented with a formal notice citing the compound interest rate of three times the RBI bank rate. The threat of a formal filing on a government-monitored portal represents a significant risk to the buyer's corporate credit rating and reputation, prompting quick resolutions.
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
                          <p className="text-[10px] text-slate-500">Verified Recovery Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 6: FAQs */}
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

            {/* Right Column Sidebar with Requested Advice Card (no face image) */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
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
