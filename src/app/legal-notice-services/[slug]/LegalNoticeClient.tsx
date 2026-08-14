'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data - unique to legal notice services
const faqs = [
  {
    question: "What is a legal notice and why is it important?",
    answer: "A legal notice is a formal written communication drafted by an advocate and sent to an individual or entity who has failed to fulfill a legal obligation. It serves as a pre-litigation step, informing the recipient of their default and giving them a deadline (usually 15-30 days) to comply. Under Indian law, sending a legal notice is often a mandatory requirement before initiating a civil suit or criminal proceeding."
  },
  {
    question: "How does the Legal Recovery legal notice service work?",
    answer: "Simply submit your dispute details and supporting documents on our platform. Our panel advocate reviews your case, drafts a professionally worded legal notice citing the applicable laws and statutory provisions, and dispatches it via Registered Post and digital channels (email/WhatsApp). You receive tracking details and a digital copy of the notice within 48 hours of submission."
  },
  {
    question: "What types of disputes can I send a legal notice for?",
    answer: "Our legal notice service covers a wide range of disputes including unpaid salary and FNF recovery, withheld rental security deposits, unpaid freelancer or vendor invoices, cheque bounce cases (Section 138 NI Act), property disputes, breach of contract, deficiency of service under the Consumer Protection Act, defamation, and recovery of personal loans."
  },
  {
    question: "Is sending a legal notice the same as filing a court case?",
    answer: "No. A legal notice is a pre-litigation communication that demands compliance from the opposing party before any court proceedings. It does not require filing in court and there is no court fee involved. However, if the recipient fails to respond or comply within the notice period, the notice serves as evidence of demand if you decide to pursue court action later."
  },
  {
    question: "What is the cost of sending a legal notice through your platform?",
    answer: "Our legal notice service starts at a flat fee of ₹999. This covers advocate review, professional drafting with relevant legal sections, dispatch via Registered Post, digital delivery (email/WhatsApp), and a soft copy of the notice for your records. There are zero hidden fees or additional charges."
  },
  {
    question: "How long does it take for the recipient to receive the legal notice?",
    answer: "The advocate-drafted notice is dispatched within 48 hours of your submission. Registered Post delivery typically takes 5-7 business days depending on the destination city. Digital copies via email and WhatsApp are sent simultaneously for immediate awareness. You receive delivery tracking details and postal acknowledgment."
  },
  {
    question: "What documents do I need to provide for drafting a legal notice?",
    answer: "You need basic proof of the dispute such as agreements, invoices, employment letters, bank statements, rent agreements, bounced cheque copies, email or WhatsApp communications, and any other documentary evidence supporting your claim. Our team will guide you on specific documents based on your dispute type."
  },
  {
    question: "Can I send a legal notice for a personal loan not returned by a friend?",
    answer: "Yes, absolutely. If you have proof of the loan transaction such as bank transfer receipts, UPI transaction records, WhatsApp or text messages acknowledging the debt, or a signed promissory note, our advocates can draft a formal legal notice demanding repayment with a deadline."
  },
  {
    question: "What happens if the recipient ignores the legal notice?",
    answer: "If the recipient fails to respond within the notice period (typically 15-30 days), you have several legal options. Our platform can then assist with filing consumer complaints, police complaints for cheating or criminal breach of trust, or refer you to our advocate network for court proceedings including civil recovery suits, cheque bounce prosecution, or labor tribunal matters."
  },
  {
    question: "Is the entire legal notice process handled online?",
    answer: "Yes, the entire process is 100% digital and paperless from your end. You submit details and documents online, our advocates review and draft the notice, we handle dispatch via Registered Post, and you can track delivery status from your dashboard. No office visits or in-person meetings are required."
  }
];

interface Location {
  slug: string;
  name: string;
  title: string;
  description: string;
}

interface LegalNoticeClientProps {
  location: Location;
}

export default function LegalNoticeClient({ location }: LegalNoticeClientProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const locationName = location.name;
  const pageTitle = location.title;

  // Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
      { "@type": "ListItem", "position": 2, "name": "Legal Notice Services", "item": "https://www.legalrecovery.in/legal-notice-services" },
      { "@type": "ListItem", "position": 3, "name": `Legal Notice Services in ${locationName}`, "item": `https://www.legalrecovery.in/legal-notice-services/${location.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Professional Legal Notice Services in ${locationName}`,
    "description": location.description,
    "image": "https://www.legalrecovery.in/services/3.png",
    "author": {
      "@type": "Organization",
      "name": "Legal Recovery",
      "url": "https://www.legalrecovery.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Legal Recovery",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.legalrecovery.in/lrlogo.svg"
      }
    },
    "datePublished": "2024-03-01",
    "dateModified": "2025-12-15"
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
    "name": `Legal Notice Services in ${locationName}`,
    "image": "https://www.legalrecovery.in/services/3.png",
    "description": `Professional legal notice drafting and dispatch services in ${locationName}, India.`,
    "brand": {
      "@type": "Brand",
      "name": "Legal Recovery"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "980"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Ankit Verma" },
        "reviewBody": "I needed to send a legal notice to my landlord who was refusing to return my security deposit. Legal Recovery's team drafted a very professional notice and my deposit was returned within 2 weeks!"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Meera Krishnan" },
        "reviewBody": "A client owed me ₹3 lakh for freelance work. After Legal Recovery sent the legal notice, the client settled the full amount in 10 days. Excellent and affordable service."
      }
    ]
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-legal-notice", title: "What is a Legal Notice?" },
    { id: "when-to-send", title: "When to Send?" },
    { id: "types-of-notices", title: "Types of Notices" },
    { id: "legal-provisions", title: "Legal Provisions" },
    { id: "process", title: "Our Process" },
    { id: "documents", title: "Documents Required" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Legal Notice Services", href: "/legal-notice-services" },
    { label: `${locationName}`, href: `/legal-notice-services/${location.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              {pageTitle}
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Get a professional advocate-drafted legal notice sent in <strong>{locationName}</strong> for unpaid dues, breach of contract, property disputes, or any legal demand. Fast, affordable, and fully online — starting at just ₹999.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg cursor-pointer"
            >
              Send Legal Notice Now (₹999 Only)
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">

                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Notice Services in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Need to send a legal notice in <strong>{locationName}</strong>? Whether you are dealing with an employer who has withheld your salary, a landlord refusing to return your security deposit, a client who hasn&apos;t paid your invoice, or a party that has breached a contract — a formal legal notice is the most effective first step toward resolution.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    <strong>Legal Recovery</strong> offers professional legal notice drafting and dispatch services in <strong>{locationName}</strong>. Our experienced advocate panel drafts notices that are legally precise, cite the relevant statutory provisions, and create maximum pressure on the defaulting party to comply — all for a flat fee of just ₹999.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Unlike traditional methods that require multiple advocate consultations and office visits, our platform is entirely digital. Submit your dispute details online, and our team handles everything from drafting to registered post dispatch, ensuring your legal notice reaches the recipient promptly and with full postal acknowledgment.
                  </p>
                </section>

                {/* What is a Legal Notice */}
                <section id="what-is-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is a Legal Notice?</h2>
                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-red-900 italic">
                      &quot;A legal notice is a formal written communication sent by or on behalf of a person through an advocate, informing the recipient of the sender&apos;s intention to undertake legal proceedings against the recipient if a specified demand is not met within a given timeframe.&quot;
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Under Indian law, a legal notice serves as a formal demand to the opposing party, putting them on notice that failure to comply may result in civil or criminal proceedings. Section 80 of the Code of Civil Procedure (CPC) mandates that a two-month notice be served before filing a suit against the government or public officials. Similarly, Section 138 of the Negotiable Instruments Act requires a mandatory notice within 30 days of a cheque being dishonored.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Beyond statutory requirements, a legal notice demonstrates seriousness of intent, creates a documented paper trail, and often compels the recipient to settle the matter without the expense and time of a full court trial. In {locationName}, our advocate panel drafts notices that are tailored to local jurisdictional requirements, ensuring maximum legal efficacy.
                  </p>
                </section>

                {/* When to Send */}
                <section id="when-to-send" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When Should You Send a Legal Notice in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    A legal notice is appropriate whenever a party has failed to meet a legal, contractual, or financial obligation. Common scenarios include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">📋</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Breach of Contract</h4>
                        <p className="text-gray-600 text-sm">When a party fails to honor the terms of a written or verbal agreement, including service contracts, partnership deeds, or business agreements.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">💰</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Recovery of Money</h4>
                        <p className="text-gray-600 text-sm">When someone owes you money — unpaid salary, freelancer fees, personal loans, vendor invoices, or security deposits — and verbal reminders have failed.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">🏗️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Property & Tenant Disputes</h4>
                        <p className="text-gray-600 text-sm">Disputes with landlords over deposits, illegal eviction threats, builders delaying possession, or unauthorized construction on your property.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">📄</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Cheque Bounce / Dishonor</h4>
                        <p className="text-gray-600 text-sm">When a cheque issued to you is dishonored by the bank. A legal notice within 30 days under Section 138 NI Act is mandatory before prosecution.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">🛒</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Consumer Complaints</h4>
                        <p className="text-gray-600 text-sm">Deficiency of service by a company, defective products, misleading advertisements, or refusal to provide warranty services.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">⚖️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Employment Matters</h4>
                        <p className="text-gray-600 text-sm">Wrongful termination, denial of statutory benefits like PF/gratuity, sexual harassment at workplace, or violation of employment terms.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Types of Legal Notices */}
                <section id="types-of-notices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Types of Legal Notices We Draft in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Our advocate panel specializes in drafting a comprehensive range of legal notices tailored to the specific nature of your dispute:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Demand Notice for Money Recovery</h3>
                      <p className="text-gray-700 text-xs md:text-base">Formal demand for repayment of unpaid invoices, loans, salary arrears, FNF settlements, security deposits, or any outstanding financial obligation.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Cheque Bounce Notice (Sec 138 NI Act)</h3>
                      <p className="text-gray-700 text-xs md:text-base">Mandatory statutory notice to the drawer of a dishonored cheque, demanding payment within 15 days as required before criminal prosecution.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Breach of Contract Notice</h3>
                      <p className="text-gray-700 text-xs md:text-base">Notice alleging violation of contractual terms under the Indian Contract Act, 1872, demanding specific performance or compensation for damages suffered.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Eviction & Property Notice</h3>
                      <p className="text-gray-700 text-xs md:text-base">Notices to tenants for eviction, illegal occupation, or to landlords for return of deposits, unauthorized deductions, or breach of rental agreement.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Consumer Grievance Notice</h3>
                      <p className="text-gray-700 text-xs md:text-base">Notice under the Consumer Protection Act for deficiency of service, defective goods, unfair trade practices, or denial of warranty/refund.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Employment & Labor Notice</h3>
                      <p className="text-gray-700 text-xs md:text-base">Notices under labor laws for wrongful termination, non-payment of gratuity/PF, sexual harassment, or violation of employment agreement terms.</p>
                    </div>
                  </div>
                </section>

                {/* Legal Provisions */}
                <section id="legal-provisions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Key Legal Provisions Governing Legal Notices in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Legal notices in {locationName} are governed by several statutory provisions that provide the legal framework and enforceability:
                  </p>
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">Applicable Laws & Sections</h3>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Section 80, CPC</h4>
                      <p className="text-gray-600 text-sm">Mandates a two-month notice before filing suits against the government or public officers, giving them an opportunity to settle the matter.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Section 138, NI Act</h4>
                      <p className="text-gray-600 text-sm">Requires a mandatory notice within 30 days of cheque dishonor. If the drawer fails to pay within 15 days, criminal prosecution can be initiated.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Indian Contract Act, 1872</h4>
                      <p className="text-gray-600 text-sm">Legal notices for breach of contract can invoke Sections 73-75 for claiming damages, and Section 39 for repudiation of contract.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Consumer Protection Act, 2019</h4>
                      <p className="text-gray-600 text-sm">Notices for deficiency of service, misleading advertisements, and unfair trade practices. A notice often resolves disputes without filing a formal consumer complaint.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Transfer of Property Act, 1882</h4>
                      <p className="text-gray-600 text-sm">Governs notices for termination of lease, eviction, and return of security deposits under Sections 106, 111, and related provisions.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">IPC Sections 403, 406, 420</h4>
                      <p className="text-gray-600 text-sm">Criminal notices alleging dishonest misappropriation of property, criminal breach of trust, and cheating — creating criminal liability pressure.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How to Send a Legal Notice from {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Our streamlined 4-step process ensures your legal notice is drafted, reviewed, and dispatched professionally:
                  </p>
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Submit Your Dispute Details</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Fill out our simple online form with the details of your dispute, the opposing party&apos;s information, and the demand you wish to make. Upload supporting documents such as invoices, agreements, communications, and bank statements.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Advocate Review & Drafting</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Our panel advocate reviews your submission, identifies the applicable legal provisions, and drafts a professionally worded legal notice. The notice clearly states the facts, the legal obligation, the demand, and the deadline for compliance.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Dispatch via Registered Post & Digital</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          The finalized notice is dispatched to the recipient digitally via email and WhatsApp, ensuring immediate impact and proof of delivery.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Track Delivery & Follow Up</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Track the postal delivery status from your dashboard. Once the notice period expires, if the recipient has not complied, our team advises you on the next steps — whether it is filing a consumer complaint, a police report, or proceeding to court.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documents Required for Sending a Legal Notice from {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    To draft an effective and legally sound notice, we typically require the following documentation:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Identity Proof (Aadhaar / PAN / Passport)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Recipient&apos;s Name & Address</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Contract / Agreement Copy</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Invoices / Billing Records</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Bank Statements / Payment Proof</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Email / WhatsApp Communications</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Bounced Cheque Copy (if applicable)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Employment Letter / Salary Slips (if applicable)</li>
                  </ul>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose Legal Recovery for Legal Notice Services in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Legal Recovery is India&apos;s leading digital legal notice platform trusted by thousands of clients across {locationName} and beyond. Here&apos;s what sets us apart:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">📝</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Expert Advocate Drafting</h3>
                      <p className="text-gray-600 text-sm">Every notice is drafted by experienced advocates who specialize in the specific area of law relevant to your dispute, ensuring legal precision and maximum impact.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">🚀</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">48-Hour Dispatch</h3>
                      <p className="text-gray-600 text-sm">From submission to dispatch in under 48 hours. Our efficient process ensures your legal notice reaches the recipient without unnecessary delays.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">💵</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Flat ₹999 Fee</h3>
                      <p className="text-gray-600 text-sm">No hourly billing, no retainers, no hidden charges. One transparent flat fee covers everything — advocate drafting, registered post dispatch, and digital delivery.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#DC2626] absolute top-4 left-4 opacity-20">&quot;</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base">
                        &quot;I was owed ₹1.5 lakh by a client who kept delaying payments for months. Legal Recovery drafted a stern legal notice with all the right legal sections. Within 12 days of receiving the notice, the client transferred the full amount. Incredible service!&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Ankit Verma</p>
                          <p className="text-xs text-gray-500">Web Developer, Noida</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#DC2626] absolute top-4 left-4 opacity-20">&quot;</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base">
                        &quot;My landlord in Bangalore refused to return my ₹2 lakh security deposit. I used Legal Recovery to send a legal notice. The advocate drafted it perfectly, citing the right provisions. My landlord agreed to refund the deposit within a week of receiving the notice.&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Meera Krishnan</p>
                          <p className="text-xs text-gray-500">Marketing Manager, Bangalore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Frequently Asked Questions About Legal Notice Services in {locationName}</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 md:pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-start">
                          <span className="text-[#DC2626] mr-2 md:mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Send a Legal Notice in {locationName} Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don&apos;t let disputes drag on. Take the first step toward resolution with a professionally drafted legal notice — starting at just ₹999.
                    </p>
                    <div className="flex justify-center">
                      <button 
                        onClick={() => setIsPaymentModalOpen(true)}
                        className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto cursor-pointer"
                      >
                        Send Legal Notice (₹999 Only)
                      </button>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Advocate Drafted • Registered Post • 48-Hour Dispatch
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Send a Legal Notice</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get an expert advocate-drafted legal notice dispatched from {locationName} within 48 hours.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors cursor-pointer"
                >
                  Send Notice (₹999)
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/recovery-of-salary-and-employment-dues" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Salary Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/recovery-of-freelancer-and-client-payments" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Freelancer Payments
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/security-deposits-and-rental-recoveries" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Security Deposits
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/vendor-and-invoice-recoveries" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Vendor Invoices
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-recovery-by-city" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Recovery by City
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Notice Categories Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                Legal Notice Categories We Cover
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Salary Recovery", href: "/services/recovery-of-salary-and-employment-dues" },
                  { name: "Freelancer Fees", href: "/services/recovery-of-freelancer-and-client-payments" },
                  { name: "Rental Deposits", href: "/services/security-deposits-and-rental-recoveries" },
                  { name: "Vendor Invoices", href: "/services/vendor-and-invoice-recoveries" },
                  { name: "Consumer Refunds", href: "/services/refunds-and-consumer-complaints" },
                  { name: "Travel & Airlines", href: "/services/airline-and-travel-recoveries" },
                  { name: "Property Disputes", href: "/services/property-and-builder-disputes" },
                  { name: "Money from Friend", href: "/services/recovery-of-money-from-a-friend" },
                ].map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#DC2626]/20 hover:border-[#DC2626]/30 hover:bg-[#DC2626]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-bold text-base leading-tight block">{service.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm md:text-lg text-gray-700">
                  Our legal notice services in {locationName} cover all major dispute categories under Indian laws
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
