'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the difference between a consumer complaint and a civil suit for money recovery?",
    answer: "A consumer complaint is filed before a specialized Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019, specifically to address deficiencies in service or unfair trade practices. It is designed to be a summary, fast-track process with lower filing fees and does not strictly require an advocate. In contrast, a civil suit for recovery of money India is filed in a regular civil or commercial court under the Code of Civil Procedure, 1908. Civil suits involve formal pleadings, strict adherence to the Indian Evidence Act, and typically longer timelines, making them more suitable for complex commercial transactions that fall outside consumer definitions."
  },
  {
    question: "Is it mandatory to hire an advocate to file a complaint on e-Daakhil?",
    answer: "No, it is not mandatory to hire an advocate. The Consumer Protection Act, 2019, empowers consumers to file, argue, and represent their own cases before the District, State, and National Commissions. The e-Daakhil portal is specifically designed to allow self-represented litigants to register, upload case files, pay fees, and track notices. While you can draft the petition yourself, it must contain clear allegations of deficiency in service or unfair trade practice, and all supporting evidence must be systematically cataloged."
  },
  {
    question: "What is the pecuniary jurisdiction limit for a District Consumer Commission under the 2019 Act?",
    answer: "Following the central government notification in December 2021, the pecuniary jurisdiction of the District Consumer Disputes Redressal Commission is for claims where the value of goods or services paid as consideration does not exceed 50 Lakh rupees. If the consideration paid is between 50 Lakh rupees and 2 Crore rupees, the complaint must be filed before the State Commission. For cases where the consideration exceeds 2 Crore rupees, the National Commission holds jurisdiction. Filing in the wrong commission will lead to the rejection and return of your complaint."
  },
  {
    question: "How is the pecuniary jurisdiction value calculated under the Consumer Protection Act, 2019?",
    answer: "Under the Consumer Protection Act, 2019, pecuniary jurisdiction is calculated solely based on the actual value of the goods or services paid as consideration by the consumer. This is a major departure from the 1986 Act, where jurisdiction was determined by adding the value of the goods plus the compensation claimed. For example, if you bought a car for 12 Lakh rupees and claim 40 Lakh rupees as compensation for injury, the consideration paid is 12 Lakh rupees, so the case must be filed in the District Commission, as the consideration is under 50 Lakh rupees."
  },
  {
    question: "Is there any court fee for filing a consumer case in India?",
    answer: "Yes, there is a nominal filing fee, but it is waived for claims up to 5 Lakh rupees. For disputes where the value of consideration paid is between 5 Lakh and 10 Lakh rupees, the fee is 200 rupees. For 10 Lakh to 20 Lakh rupees, it is 400 rupees. For 20 Lakh to 50 Lakh rupees, it is 1,000 rupees. State Commission filings for cases between 50 Lakh and 1 Crore rupees require a fee of 2,000 rupees, and up to 2 Crore rupees require 2,500 rupees. Fees must be paid online via SBI Collect or through demand drafts."
  },
  {
    question: "What is the time limit or limitation period to file a consumer complaint in India?",
    answer: "Under Section 69 of the Consumer Protection Act, 2019, the time limit to file a consumer complaint is two years from the date on which the cause of action arose. This is different from the standard three-year limitation period applicable to general civil recovery under the Limitation Act, 1963. The commission may admit a complaint after this period if the complainant satisfies the commission that there was sufficient cause for the delay, but such condonation of delay is at the sole discretion of the commission and is not granted as a matter of right."
  },
  {
    question: "Can a consumer file a complaint if there is no written contract or agreement with the seller?",
    answer: "Yes. While a written agreement provides strong documentation, it is not mandatory. You can establish the relationship using alternative evidence. This includes tax invoices, payment receipts, bank statement entries showing transfers, WhatsApp chats, email correspondence, and delivery notes. If you are dealing with situations without formal documentation, you can review guides on how to recover money without written agreement to understand how these proofs are presented to establish the terms of the transaction."
  },
  {
    question: "What is the e-Daakhil portal and how does it verify the complainant's identity?",
    answer: "The e-Daakhil portal (edaakhil.nic.in) is the official online system developed by the National Informatics Centre (NIC) for filing consumer complaints digitally. It verifies the identity of the user through a multi-step registration process requiring the upload of a valid photo identification card (such as an Aadhaar Card, PAN Card, or Passport) and mobile and email OTP verifications. Once registered, the user is assigned a unique login, through which they can draft, pay, and submit complaints to any commission across India."
  },
  {
    question: "What happens if the seller or company ignores the consumer commission's notice?",
    answer: "If the opposite party fails to appear or submit their written version within the statutory period of 30 days (extendable by a maximum of 15 days), the Consumer Commission has the authority to proceed ex-parte. This means the commission will hear the case and pass its judgment based solely on the complainant's petition and evidence. An ex-parte order is fully binding and enforceable. If the company refuses to comply with the final order, you can file an execution application under Section 71 and 72 of the Consumer Protection Act, 2019."
  }
];

const reviews = [
  {
    author: "Aarav Sharma (New Delhi)",
    rating: "5",
    text: "I bought a premium laptop for 1.5 Lakh rupees that stopped working within two weeks. The dealer refused to replace it, and the company support dragged the issue. I drafted and served a legal notice first. When they did not respond, I registered on e-Daakhil and filed my complaint online. The District Commission ordered the brand to replace the laptop and pay 25,000 rupees compensation. The e-Daakhil steps in this guide were highly accurate."
  },
  {
    author: "Priya Nair (Bengaluru)",
    rating: "5",
    text: "I paid a booking amount of 8 Lakh rupees to a builder, but the project was delayed indefinitely. I wanted my money back. I sent a formal notice for recovery of money, which went ignored. Following the steps here, I filed a consumer complaint before the State Commission. The builder settled the case in mediation, refunding my entire booking amount with interest. This guide saved me months of civil court litigation."
  },
  {
    author: "Vikram Goel (Mumbai)",
    rating: "5",
    text: "An online travel agency refused to refund my cancelled international ticket worth 2.2 Lakh rupees. I used e-Daakhil to submit my petition, index of evidence, and fee payment receipt. The process was straightforward, and the portal allowed me to track the listing dates easily. The commission ordered a full refund with 9 percent interest. The checklist provided here was crucial for organizing my flight manifests and emails."
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
      "name": "Consumer Complaint Guide: e-Daakhil & Offline",
      "item": "https://www.legalrecovery.in/how-to-file-consumer-complaint-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to File a Consumer Complaint in India: Online (e-Daakhil) & Offline Guide",
  "description": "Learn how to file a consumer complaint in India online via e-Daakhil and offline. Master pecuniary jurisdiction limits, fee calculations, and legal notice requirements under the Consumer Protection Act, 2019.",
  "image": "https://www.legalrecovery.in/og-consumer-complaint-guide.png",
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
  "name": "Consumer Dispute Resolution Action Plan",
  "image": "https://www.legalrecovery.in/og-consumer-complaint-guide.png",
  "description": "A tactical legal roadmap to draft, serve, and file consumer court complaints in India via e-Daakhil or physical submission.",
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

export default function ConsumerComplaintClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction-consumer-rights", title: "Introduction: Consumer Protection in India" },
    { id: "key-provisions-cpa-2019", title: "Key Provisions of the Consumer Protection Act, 2019" },
    { id: "pecuniary-jurisdiction-limits", title: "Pecuniary Jurisdiction Limits & Commission Selection" },
    { id: "prior-legal-notice-requirement", title: "Mandatory Prior Legal Notice & Deficiency in Service" },
    { id: "edaakhil-filing-procedure", title: "e-Daakhil Filing Procedure: Step-by-Step Mechanics" },
    { id: "fee-to-file-consumer-case", title: "Fee Schedule & Calculation of Filing Fees" },
    { id: "prerequisites-evidence-checklist", title: "Prerequisites & Evidence Checklist" },
    { id: "offline-filing-procedure", title: "Offline Filing Procedure: The Physical Submission Route" },
    { id: "process-roadmap-timeline", title: "Process Map Roadmap: Timeline of Consumer Cases" },
    { id: "dispute-resolution-matrix", title: "Dispute Resolution Matrix: e-Daakhil vs. Physical Filing" },
    { id: "consumer-success-stories", title: "Consumer Success Stories & Case Studies" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "How to File a Consumer Complaint in India", href: "/how-to-file-consumer-complaint-india" }
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
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-red-920/20">
              Consumer Protection Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              How to File a Consumer Complaint in India: <span className="text-[#DC2626]">e-Daakhil & Offline Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the step-by-step mechanics of the e-Daakhil portal, pecuniary jurisdiction limits, fee calculations, and legal notice requirements under the Consumer Protection Act, 2019.
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
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Filing a consumer complaint in India has been simplified with the introduction of the e-Daakhil online portal. However, successfully navigating the system requires a clear understanding of the pecuniary jurisdiction changes under the Consumer Protection Act, 2019, calculating the appropriate court fees, and establishing a solid cause of action. This comprehensive guide outlines the entire mechanics of online and offline filing, detailing the exact requirements needed to resolve consumer disputes.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India's rapidly growing consumer economy, disputes between buyers and sellers are inevitable. Whether it is a defective product, a delayed real estate project, an unfair cancellation fee, or a direct deficiency in service, consumers are often left seeking remedies. To protect consumer rights, the Indian legal system provides a specialized three-tier quasi-judicial machinery. This machinery comprises District, State, and National Consumer Disputes Redressal Commissions. The Consumer Protection Act, 2019, replaced the outdated 1986 legislation, introducing sweeping reforms to modernize the dispute resolution process, crack down on unfair trade practices, and enable digital filing.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Despite these legal simplifications, many consumers struggle to file complaints correctly. Typical online summaries often outline general steps but omit the actual mechanics of the e-Daakhil online portal, the specific documents required, the updated pecuniary limits, and the method of calculating filing fees. Furthermore, consumers frequently ignore the critical step of serving a prior legal notice to the opposite party. Serving a formal notice, such as a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, is essential to establish a clear deficiency in service and provide a legal basis for your claim.
                </p>
              </div>

              {/* Section 1: Introduction */}
              <section id="introduction-consumer-rights" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Introduction: Consumer Protection in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The concept of consumer protection in India is rooted in the recognition of the inherent imbalance of power between individual buyers and large corporate entities or organized service providers. Under traditional civil law, resolving a dispute required filing a regular lawsuit. However, pursuing a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link> in civil courts involves complex procedural requirements, high court fees, and years of litigation, which is highly impractical for everyday consumer grievances.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To bridge this gap, the legislature established consumer commissions as quasi-judicial bodies. The goal was to provide a fast, cost-effective, and consumer-friendly forum for summary adjudication. A key benefit of these commissions is that the strict rules of the Code of Civil Procedure, 1908, and the Indian Evidence Act, 1872, do not apply. Instead, the proceedings are guided by the principles of natural justice, and consumers can represent themselves without hiring an advocate.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    With the expansion of digital trade and e-commerce, the nature of consumer transactions has transformed. Buyers no longer interact face-to-face with sellers, and transactions occur across state borders. The modern legal framework must handle these complexities. This led to the enactment of the Consumer Protection Act, 2019, which officially came into force on July 20, 2020. This act introduced rules for e-commerce transactions, product liability, and online filing through the e-Daakhil portal.
                  </p>
                </div>
              </section>

              {/* Section 2: Key Provisions */}
              <section id="key-provisions-cpa-2019" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Key Provisions of the Consumer Protection Act, 2019
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The Consumer Protection Act, 2019, introduced several progressive changes to protect the interests of consumers in the digital era. Understanding these key provisions is critical before drafting your complaint:
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>1. Definition of a Consumer:</strong> The definition has been expanded to include anyone who buys goods or avails services online or offline, through electronic means, teleshopping, direct selling, or multi-level marketing. This ensures that online shoppers enjoy the same statutory protections as offline buyers.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>2. Central Consumer Protection Authority (CCPA):</strong> The 2019 Act established the CCPA as a central regulatory body with power to investigate violations of consumer rights, recall unsafe goods, order refunds of price paid, and impose penalties for misleading advertisements.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>3. Product Liability:</strong> A consumer can now bring a product liability action against a product manufacturer, product service provider, or product seller for any harm caused by a defective product. This means that if a product is defective and causes injury, the manufacturer can be held directly liable, bypassing the traditional contractual limitations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>4. Unfair Contracts:</strong> The Act defines unfair contracts as agreements between a consumer and a manufacturer or trader that contain one-sided, arbitrary, or unreasonable clauses. For example, clauses that charge excessive cancellation fees, impose heavy interest rates for delayed payments, or allow unilateral terminations are classified as unfair contracts. Complainants can request the State or National Commission to declare such clauses null and void.
                  </p>
                </div>
              </section>

              {/* Section 3: Pecuniary Jurisdiction */}
              <section id="pecuniary-jurisdiction-limits" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Pecuniary Jurisdiction Limits & Commission Selection
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the most important steps in filing a consumer complaint is selecting the correct commission based on its pecuniary jurisdiction. Pecuniary jurisdiction refers to the financial limits within which a commission has the authority to hear and decide cases. Filing a case in a commission that lacks pecuniary jurisdiction will result in the immediate return of the complaint, causing significant delays.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the previous 1986 Act, the pecuniary limit was determined by calculating the value of the goods or services plus the compensation claimed. This formula led to inflated compensation demands from complainants trying to bypass the District Commission to file directly in the State or National Commission, leading to a backlog of cases in the higher commissions.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To resolve this, the Consumer Protection Act, 2019, changed the formula. The pecuniary jurisdiction is now calculated solely on the basis of the value of the goods or services paid as consideration by the consumer. Any compensation claims, interest demands, or litigation costs are excluded from this calculation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In December 2021, the Ministry of Consumer Affairs, Food and Public Distribution revised these pecuniary limits to streamline the caseload:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base leading-relaxed">
                    <li>
                      <strong>District Consumer Commission:</strong> Has jurisdiction to entertain complaints where the value of the goods or services paid as consideration does not exceed 50 Lakh rupees (reduced from the initial 1 Crore limit in the 2019 Act).
                    </li>
                    <li>
                      <strong>State Consumer Commission:</strong> Has jurisdiction to entertain complaints where the value of the goods or services paid as consideration exceeds 50 Lakh rupees but does not exceed 2 Crore rupees (reduced from the initial 10 Crore limit).
                    </li>
                    <li>
                      <strong>National Consumer Commission (NCDRC):</strong> Has jurisdiction to entertain complaints where the value of the goods or services paid as consideration exceeds 2 Crore rupees.
                    </li>
                  </ul>
                  <p className="text-sm md:text-base leading-relaxed">
                    Let us look at a practical example: If you purchase an apartment for 1.5 Crore rupees and experience a delay in delivery, and seek a refund of your payment along with 60 Lakh rupees as compensation for mental harassment, the pecuniary jurisdiction is determined solely by the consideration paid (1.5 Crore rupees). Since this value falls between 50 Lakh and 2 Crore rupees, the case must be filed before the State Commission of your state, even though the total claim value exceeds 2 Crore rupees.
                  </p>
                </div>
              </section>

              {/* Section 4: Prior Legal Notice Requirement */}
              <section id="prior-legal-notice-requirement" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Mandatory Prior Legal Notice & Deficiency in Service
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Although the Consumer Protection Act does not contain a clause that explicitly mandates serving a legal notice before filing a complaint, doing so is highly recommended by legal experts. Serving a prior notice is a critical step in establishing a deficiency in service or unfair trade practice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A deficiency in service is defined as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, or manner of performance that is required to be maintained by or under any law. When a seller delivers a defective product or fails to provide a service, you must notify them of the defect and request a resolution. If you file a case directly without giving the seller an opportunity to correct the issue, the seller can claim they were unaware of the problem and would have resolved it voluntarily, potentially weakening your claim.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    By sending a formal, lawyer-backed legal notice, you:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base leading-relaxed">
                    <li>
                      <strong>Establish the Deficiency:</strong> The notice acts as clear evidence that you notified the opposite party of the issue and gave them a specific timeframe (usually 15 days) to resolve it. If they fail to reply or resolve the issue, it proves their deficiency in service.
                    </li>
                    <li>
                      <strong>Provide a Resolution Window:</strong> Many companies, especially e-commerce portals and manufacturers, prefer to avoid formal litigation. A lawyer-backed notice bypasses automated support systems and reaches the corporate legal team, which often leads to a voluntary settlement.
                    </li>
                    <li>
                      <strong>Create a Written Record:</strong> The notice documents the facts of the transaction, the payments made, the defects identified, and the communications exchanged. This provides a clear framework for your subsequent consumer petition.
                    </li>
                  </ol>
                  <p className="text-sm md:text-base leading-relaxed">
                    The legal notice must specify the details of the transaction, the exact defects or deficiency, a demand for rectification or refund, and a warning that you will initiate legal proceedings if the demand is not met within 15 days. If you are dealing with a financial dispute or seeking a refund, you can read about the structure of a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to ensure all key terms are captured.
                  </p>
                </div>
              </section>

              {/* Section 5: e-Daakhil Filing Procedure */}
              <section id="edaakhil-filing-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  e-Daakhil Filing Procedure: Step-by-Step Mechanics
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The e-Daakhil portal (edaakhil.nic.in) is the official online platform for filing consumer complaints digitally. The portal allows consumers to submit complaints, pay court fees, and track the status of their cases online. Here is a detailed guide to the e-Daakhil filing procedure:
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 1: Account Registration & Verification</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To use the portal, you must register as a consumer, advocate, or representative. Visit edaakhil.nic.in and click on the registration option. You must provide your name, email address, mobile number, and address details. You will need to upload a scanned copy of a valid photo identification document, such as an Aadhaar Card, PAN Card, or Passport, in PDF format. Once submitted, a verification link is sent to your email, and an OTP is sent to your mobile number. Completing both verifications activates your account.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 2: Case Initialization & Commission Selection</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Log in using your registered credentials. On the dashboard, select the option to file a new case. The system will prompt you to select the appropriate commission based on your location and the value of your claim. Under the Consumer Protection Act, 2019, you can file the complaint where you reside or work, which is a major convenience. Select the state and the specific District Commission from the dropdown menus.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 3: Complainant & Opposite Party Details</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Enter the details of the complainant (yourself) and the opposite party (the seller, manufacturer, or company). You must provide names, complete addresses, contact numbers, and email addresses. If there are multiple opposite parties (for example, both the local dealer and the parent manufacturing company), you can add them one by one. Providing accurate contact details is critical because the portal uses these details to serve automated notices.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 4: Complaint Details & Valuation</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Provide the details of the dispute, including the date of purchase, transaction amount, and details of the product or service. Enter the exact consideration amount paid to determine the pecuniary jurisdiction. The portal will prompt you to enter the compensation amount and interest rate claimed, but the system will calculate the filing fee based on the consideration value alone.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 5: Uploading Documents</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    You must compile and upload several documents in PDF format. The files must be clear and readable, and each document must not exceed the size limit specified by the portal (usually 2 MB to 5 MB per document). The required files include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base leading-relaxed">
                    <li>
                      <strong>Index of Documents:</strong> A cover page listing all the documents being submitted.
                    </li>
                    <li>
                      <strong>Complaint Petition:</strong> The main petition, detailing the facts of the case, the allegations of deficiency, the relief sought, and a verification clause at the end.
                    </li>
                    <li>
                      <strong>Affidavit:</strong> A signed and notarized affidavit stating that the facts in the petition are true.
                    </li>
                    <li>
                      <strong>Evidence Bundle:</strong> A single PDF containing invoices, warranty cards, service reports, photos, emails, and the prior legal notice with post tracking receipts.
                    </li>
                    <li>
                      <strong>Fee Payment Receipt:</strong> Scanned copy of the SB Collect payment receipt.
                    </li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 6: Review & Final Submission</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once all details are filled and documents are uploaded, the portal will show a preview of your application. Review all information carefully to ensure there are no errors in spelling, addresses, or financial values. If everything is correct, click the submit option. The system will generate a temporary case number and send a confirmation to your email and mobile number.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">Step 7: Scrutiny and Admission</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    After submission, the registry of the selected commission will review your petition. The registry checks for any procedural defects, jurisdictional errors, or fee discrepancies. If the registry flags an issue, they will mark it as defective and return it to your dashboard with instructions for rectification. If the petition is in order, the case is listed for admission before the commission. The commission will hear you briefly and, if satisfied, admit the complaint and issue notices to the opposite party.
                  </p>
                </div>
              </section>

              {/* Section 6: Fee Structure */}
              <section id="fee-to-file-consumer-case" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Fee Schedule & Calculation of Filing Fees
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Filing fees for consumer disputes are calculated based on the value of the consideration paid by the consumer. Here is the revised fee structure:
                  </p>

                  <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200 text-left">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">S.No.</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Value of Consideration Paid</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Filing Fee Amount</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">1</td>
                          <td className="px-6 py-4">Up to 5 Lakh rupees</td>
                          <td className="px-6 py-4 text-emerald-600 font-bold">Nil (Zero Fee)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">2</td>
                          <td className="px-6 py-4">Above 5 Lakh to 10 Lakh rupees</td>
                          <td className="px-6 py-4">200 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">3</td>
                          <td className="px-6 py-4">Above 10 Lakh to 20 Lakh rupees</td>
                          <td className="px-6 py-4">400 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">4</td>
                          <td className="px-6 py-4">Above 20 Lakh to 50 Lakh rupees</td>
                          <td className="px-6 py-4">1,000 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">5</td>
                          <td className="px-6 py-4">Above 50 Lakh to 1 Crore rupees (State Commission)</td>
                          <td className="px-6 py-4">2,000 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">6</td>
                          <td className="px-6 py-4">Above 1 Crore to 2 Crore rupees (State Commission)</td>
                          <td className="px-6 py-4">2,500 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">7</td>
                          <td className="px-6 py-4">Above 2 Crore to 4 Crore rupees (National Commission)</td>
                          <td className="px-6 py-4">3,000 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">8</td>
                          <td className="px-6 py-4">Above 4 Crore to 6 Crore rupees (National Commission)</td>
                          <td className="px-6 py-4">4,000 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">9</td>
                          <td className="px-6 py-4">Above 6 Crore to 8 Crore rupees (National Commission)</td>
                          <td className="px-6 py-4">5,000 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">10</td>
                          <td className="px-6 py-4">Above 8 Crore to 10 Crore rupees (National Commission)</td>
                          <td className="px-6 py-4">6,000 rupees</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">11</td>
                          <td className="px-6 py-4">Above 10 Crore rupees (National Commission)</td>
                          <td className="px-6 py-4">7,500 rupees</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Sellers must note that the filing fee must be paid before submitting the case. If the case is submitted on e-Daakhil, the payment must be made usingSBI Collect or the integrated payment gateway. Keep the transaction reference number and download the PDF receipt, as you will need to upload it with your petition.
                  </p>
                </div>
              </section>

              {/* Section 7: Evidence Checklist */}
              <section id="prerequisites-evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites & Evidence Checklist
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong case and prevent the opposite party from disputing the facts, you must compile a comprehensive evidence bundle.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you do not have a formal written agreement or contract, you can still establish a consumer relationship by presenting alternative evidence. You can read about <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand how to establish a valid claim using alternative proof under Indian law.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Consumer Court Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-750">
                          <strong>Proof of Purchase:</strong> Tax invoice, retail bill, cash memo, or booking receipt showing the details of the product/service and the consideration paid.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-750">
                          <strong>Payment Confirmation:</strong> Bank statements, credit card statements, or UPI transaction history showing the transfer of funds to the seller.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-750">
                          <strong>Communications Log:</strong> Copies of emails, support tickets, and WhatsApp messages regarding the issue or repair requests.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-750">
                          <strong>Prior Legal Notice:</strong> A copy of the formal legal notice served to the seller, along with the tracking receipt and proof of delivery.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-750">
                          <strong>Expert Opinions:</strong> If applicable, an inspection report from an independent engineer or certified technician confirming the manufacturing defect.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#DC2626] mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-750">
                          <strong>Section 65B Certificate:</strong> A signed certificate under the Indian Evidence Act (now Bharatiya Sakshya Adhiniyam) to prove the authenticity of digital evidence like emails or WhatsApp chats.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Offline Filing */}
              <section id="offline-filing-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Offline Filing Procedure: The Physical Submission Route
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While online filing is highly recommended, some consumers prefer the traditional offline submission route. The physical filing process is also useful if you face issues with the e-Daakhil system. Here is a guide to physical filing:
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To file a complaint physically, you must prepare multiple copies of the petition. You must submit one original set of the petition, affidavit, and evidence for the commission, along with one complete set for each opposite party. For example, if you are filing against a local dealer and the manufacturing company, you must submit three complete sets of documents.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The complaint petition and the affidavit must be signed on each page. The affidavit must be notarized by a registered notary public. The court fee must be paid using a demand draft drawn in favor of the Registrar of the specific Consumer Commission, or through SBI Collect, depending on the rules of the commission.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The documents must be presented at the filing counter of the commission during filing hours. The registry will verify the documents, check the jurisdiction and fee details, and assign a diary number. The case will then be listed for admission. You must track the hearing dates manually or through the Confonet portal (confonet.nic.in). Note the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case India</Link> of two years to avoid your case being dismissed as time-barred.
                  </p>
                </div>
              </section>

              {/* Section 9: Timeline Roadmap */}
              <section id="process-roadmap-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Process Map Roadmap: Timeline of Consumer Cases
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The lifespan of a consumer case, from the dispute to execution of the order, is structured around specific timelines. Here is a roadmap of the key stages:
                  </p>

                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Stage 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 1: Dispute & Prior Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Identify the deficiency in service or defect in product. Prepare and serve a formal legal notice to the opposite party. Give them 15 days to comply or respond.
                        </p>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 2: Filing on e-Daakhil</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the notice goes ignored or is rejected, register on e-Daakhil. Upload your petition, affidavit, and evidence within two years of the dispute date.
                        </p>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 3: Scrutiny & Admission</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          The registry reviews the filing. If there are no defects, the case is listed for admission. The commission hears your case briefly and issues notice to the opposite party.
                        </p>
                      </div>
                    </div>

                    {/* Stage 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 4: Reply & Evidence Submission</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          The opposite party must file their written version within 30 days (extendable by 15 days). Both parties will then submit their evidence-in-chief via affidavits.
                        </p>
                      </div>
                    </div>

                    {/* Stage 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Stage 5: Adjudication & Order</h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          The commission hears final arguments and passes its judgment. If the company fails to comply, you can file an execution application under Section 71 and 72 of the CPA 2019.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 10: Matrix Table */}
              <section id="dispute-resolution-matrix" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Dispute Resolution Matrix: e-Daakhil vs. Physical Filing
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To help you decide between online and offline filing routes, here is a detailed matrix table:
                  </p>

                  <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200 text-left">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Online Route (e-Daakhil)</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Offline Route (Physical)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Submission Method</td>
                          <td className="px-6 py-4">Digital uploads in PDF format via portal</td>
                          <td className="px-6 py-4">Physical submission of paper files at registry</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Fee Payment</td>
                          <td className="px-6 py-4">Online via SBI Collect or netbanking</td>
                          <td className="px-6 py-4">Demand drafts or physical SBI receipts</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Filing Copies Needed</td>
                          <td className="px-6 py-4">Single digital copy of all documents</td>
                          <td className="px-6 py-4">3 to 4 physical sets of all documents</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Case Tracking</td>
                          <td className="px-6 py-4">Real-time status updates on e-Daakhil</td>
                          <td className="px-6 py-4">Manual tracking via Confonet portal</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Advocate Requirement</td>
                          <td className="px-6 py-4">Optional (consumers can register directly)</td>
                          <td className="px-6 py-4">Optional (but requires presence at filing desk)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 11: Success Stories */}
              <section id="consumer-success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Consumer Success Stories & Case Studies
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world success stories demonstrate how consumer protection actions can help recover funds and resolve disputes:
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
                          <p className="text-[10px] text-slate-500">Verified Case Outcome</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 12: FAQs */}
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

            {/* Right Column Sidebar with Advice Card */}
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
