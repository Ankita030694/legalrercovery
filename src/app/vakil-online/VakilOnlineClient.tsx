'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What does 'Vakil Online' mean and is online legal consultation valid in India?",
    answer: "Vakil Online refers to the digital practice of consulting advocates and executing pre-litigation or litigation tasks through technology-enabled platforms. Yes, online legal consultations are completely valid under Indian law. Section 30 of the Advocates Act, 1961, grants advocates the right to practice in all courts and before any authority in India. The law does not restrict the medium of consultation; advice provided via email, video calls, or secure legal tech portals carries the same validity as an in-person consultation at an advocate's office, provided the advocate is duly registered with a State Bar Council."
  },
  {
    question: "Are communications with an online advocate protected by client privilege?",
    answer: "Yes, attorney-client privilege applies fully to digital consultations. Under Section 126 of the Indian Evidence Act, 1872 (now Section 126 of the Bharatiya Sakshya Adhiniyam, 2023), an advocate is prohibited from disclosing any communications made to them by their client in the course and for the purpose of their professional employment. This privilege covers all documents uploaded to secure cloud vaults, emails, chat messages, and virtual consultation logs, ensuring complete confidentiality under Indian law."
  },
  {
    question: "How does the Bar Council of India (BCI) regulate legal tech portals and online advocates?",
    answer: "The Bar Council of India (BCI) regulates the legal profession through the BCI Rules under the Advocates Act, 1961. BCI Rule 36 strictly prohibits advocates from advertising or soliciting work, either directly or indirectly. Consequently, legal tech portals like ours do not advertise or solicit cases for specific advocates. Instead, they act as technology aggregators and workflow automation tools, providing clients with document management, automated database lookups, and routing to independent panel advocates, ensuring full compliance with BCI guidelines."
  },
  {
    question: "What is a Vakalatnama and can it be executed and signed digitally?",
    answer: "A Vakalatnama is a formal document by which a client authorizes an advocate to represent them in a court of law or before an authority. Under Section 5 and Section 15 of the Information Technology Act, 2000, digital signatures (such as Aadhaar e-Sign or DSC) have legal equivalence to wet-ink signatures. Many High Courts in India (including Kerala, Delhi, and Bombay High Courts) have amended their e-filing rules to explicitly accept digitally signed Vakalatnamas, making digital execution fully valid for online court filings."
  },
  {
    question: "How does the portal verify the credentials of advocates on its panel?",
    answer: "Our portal enforces a strict verification process for all panel advocates. Every lawyer must submit their certificate of enrollment issued by their respective State Bar Council, their Bar Council of India (BCI) registration details, and proof of active practice. We cross-reference their enrollment numbers with state bar directories and monitor their performance to ensure clients receive high-quality, professional legal advice."
  },
  {
    question: "Can an online notice lead to out-of-court settlement through ODR?",
    answer: "Yes, a key advantage of online legal services is the integration of Online Dispute Resolution (ODR). When a panel advocate sends a legal notice through our portal, the document includes a secure digital link inviting the recipient to join an online negotiation room. In this private virtual space, the parties can discuss settlement options, propose payment schedules, and reach an agreement. If settled, the portal drafts a binding settlement deed that both parties e-sign, resolving the dispute without court visits."
  },
  {
    question: "What happens if a debtor refuses to accept a legal notice sent by an online advocate?",
    answer: "If a recipient intentionally evades service, the court accepts this as constructive service. For electronic service (WhatsApp and email), delivery is proved by presenting read receipts and delivery logs accompanied by a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, verifying the authenticity of the digital record."
  },
  {
    question: "What supporting files do I need to upload for an online advocate to draft my notice?",
    answer: "You should upload all files that document the transaction and the default. This includes signed contracts or agreements, invoices, ledger statements, bank receipts showing the transaction, and screenshots of emails or WhatsApp chats where the debtor acknowledged the liability or promised to pay. These files are saved in our secure document vault for the advocate&apos;s review."
  },
  {
    question: "Is there a flat fee structure for online advocate services on LegalRecovery?",
    answer: "Yes, LegalRecovery uses a flat-fee pricing model starting at ₹999 per opposing party. This all-inclusive rate covers advocate consultation, custom drafting on the advocate's official letterhead, client dashboard review, and electronic service via verified email and WhatsApp. There are no hidden charges or hourly fees."
  },
  {
    question: "What is the role of database queries (MCA and GSTIN) in online drafting?",
    answer: "To ensure your legal notice is valid and addressed to the correct legal party, our system integrates database API queries. If the debtor is a company or LLP, the system queries the Ministry of Corporate Affairs (MCA) database to verify the registered office address. For proprietary firms, the system queries the GSTIN registry to verify the proprietor's name and active business address, preventing naming errors that could weaken the notice."
  },
  {
    question: "How long does it take for an online advocate to draft and dispatch a notice?",
    answer: "Once you submit your case details and complete the flat-fee payment, the system routes the file to a specialized panel advocate. The advocate typically reviews your evidence, drafts the customized notice on their letterhead, and uploads it to your user dashboard for review within 24 to 48 hours. Once you approve, it is e-signed and dispatched immediately."
  },
  {
    question: "Can an online advocate represent me in physical court if the notice is ignored?",
    answer: "Yes. If the debtor ignores the notice and you decide to file a lawsuit, the portal organizes your files, delivery records, and Section 63 BSA certificates into a litigation-ready package. Our panel advocates, who are registered to practice across various jurisdictions in India, can represent you in physical court or manage e-filing through the e-Courts portal."
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
      "name": "Vakil Online Portal",
      "item": "https://www.legalrecovery.in/vakil-online"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vakil Online: The Modern Framework of Online Legal Counsel and e-Courts in India",
  "description": "Comprehensive guide on online advocate consultations, digital Vakalatnama execution, and Bar Council of India ethics in digital legal practice.",
  "image": "https://www.legalrecovery.in/og-vakil-online.png",
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
  "datePublished": "2026-06-10",
  "dateModified": "2026-06-10"
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
  "name": "Online Advocate Consultation Portal",
  "image": "https://www.legalrecovery.in/og-vakil-online.png",
  "description": "Vetted panel advocate consultation, custom notice drafting, and digital case management portal in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1040"
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
        "name": "Girish Deshmukh"
      },
      "reviewBody": "Drafting a legal notice through this online advocate portal was incredibly smooth. I uploaded my unpaid invoices to the document vault, and a panel advocate prepared the draft on his official letterhead within 24 hours. The debtor responded and cleared the ₹3.5 Lakhs dues within 10 days of delivery. Exceptional legal tech service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Sundaram"
      },
      "reviewBody": "The digital execution of the Vakalatnama was seamless. I signed it using Aadhaar e-Sign, and the advocate signed the notice using his DSC under the IT Act. The court accepted these digitally verified documents for our summary suit filing. Saved me multiple office visits."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajiv Talwar"
      },
      "reviewBody": "Highly transparent pricing. The ₹999 flat rate covered the advocate's drafting fee and email/WhatsApp service. The real-time dashboard notifications kept me informed at every stage of the dispatch."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anchal Aggarwal"
      },
      "reviewBody": "Excellent attorney-client data security. The encrypted cloud vault gave me complete confidence when uploading sensitive financial agreements and communications. The legal team was highly professional and helpful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Varun Malhotra"
      },
      "reviewBody": "As a startup founder, recovering outstanding invoices is always a challenge. The online advocate platform allowed us to send structured demands using corporate database checks (MCA and GSTIN), ensuring zero clerical errors in the notice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Roy"
      },
      "reviewBody": "The Section 63 BSA certificate provided with the delivery logs was crucial. It validated our WhatsApp service proof, allowing us to proceed with our cheque bounce case in court without technical issues. Truly a modern legal solution."
    }
  ]
};

export default function VakilOnlineClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "evolution", title: "1. The Evolution of Digital Legal Counsel in India" },
    { id: "regulations", title: "2. Bar Council Regulations & Ethical Practice" },
    { id: "vakalatnama", title: "3. Legality & Execution of Digital Vakalatnama" },
    { id: "pipeline", title: "4. Step-by-Step Online Intake & Consultation" },
    { id: "evidence", title: "5. Pre-Litigation Dispatches & Digital Evidence" },
    { id: "cases-faqs", title: "6. Case Studies, Reviews & FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Vakil Online Portal", href: "/vakil-online" },
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
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Advanced Legal Tech Infrastructure
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Vakil <span className="text-[#DC2626]">Online Portal</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Consult verified advocates online, execute digital Vakalatnamas, and manage pre-litigation and e-filing workflows through our secure platform.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Consult Vakil Online
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
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
                
                {/* Section 1: The Evolution of Digital Legal Counsel in India */}
                <section id="evolution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Evolution of Digital Legal Counsel in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The practice of law in India has historically been characterized by physical processes, handwritten filings, and manual document storage. For decades, clients facing disputes had to seek out advocate chambers in person, navigate complex court registries, and deal with variable pricing structures. However, the introduction of government e-governance policies, the e-Courts Mission Mode Project, and modern legal tech applications has transformed how legal counsel operates. Today, <strong>online advocate portals</strong> connect clients with qualified legal professionals, offering structured, efficient, and transparent services.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This digital shift has significantly modified pre-litigation recovery workflows. Advocates are no longer restricted by geography when providing legal advice or drafting documents. Under Section 30 of the Advocates Act, 1961, advocates registered with a State Bar Council have the right to practice in all courts and before any tribunal in India. The law does not restrict the medium of consultation; advice provided via email, video calls, or secure legal portals carries the same validity as an in-person meeting, allowing advocates to serve clients across the country.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At the same time, Indian courts are shifting toward digital workflows. E-filing portals, virtual court hearings, and digitized registries are becoming the standard across High Courts and District Courts. This modernization makes pre-litigation legal notices even more critical. A legal notice drafted and served online is no longer just a physical letter; it forms the beginning of a digital case file. If the dispute is not resolved, this file can be immediately uploaded to the e-Courts system to initiate a summary suit or cheque bounce complaint, ensuring a fast-track litigation pipeline.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For clients, the benefits of this digital evolution are clear. They gain access to a centralized network of specialized lawyers, transparent pricing models, and real-time dashboard updates on case progress. Online portals remove the inefficiencies of traditional legal practice, making legal counsel and dispute resolution accessible to individuals, freelancers, and businesses across India.
                    </p>
                  </div>
                </section>

                {/* Section 2: Bar Council Regulations & Ethical Practice */}
                <section id="regulations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Bar Council Regulations &amp; Ethical Practice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While legal technology portals simplify document drafting and case management, the practice of law remains subject to strict regulations. The Bar Council of India (BCI) enforces professional standards and ethics under the Advocates Act, 1961, to protect client interests and maintain the integrity of the judiciary. Any digital legal service must operate within these ethical boundaries.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      The key regulatory and ethical considerations for online legal services include:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Compliance with BCI Rule 36 on Advertising and Solicitation</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Rule 36 of the Bar Council of India Rules strictly prohibits advocates from advertising their services or soliciting work, either directly or indirectly. Legal tech portals comply with this rule by acting as neutral technology platforms. We do not promote individual advocates or list them with promotional ratings. Instead, our platform provides document assembly tools, database KYC verification APIs, and secure case routing to independent panel advocates, ensuring BCI compliance.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. Protection of Attorney-Client Privilege</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Confidentiality is a cornerstone of the legal profession. Section 126 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 of the Indian Evidence Act, 1872) protects communications between a client and their advocate from unauthorized disclosure. Our portal ensures this privilege is maintained in the digital space. All documents, case files, and communications uploaded to our system are secured using enterprise-grade encryption, and access is restricted exclusively to the assigned advocate and the client.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Client Data Privacy and the IT Act, 2000</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Under the Information Technology Act, 2000, platforms handling personal and financial data must maintain strict security standards. Our system uses SSL/TLS encryption for data in transit and AES-256 encryption for files at rest in our cloud vault. This ensures that client files, banking details, and identity documents remain protected against unauthorized access.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Legality & Execution of Digital Vakalatnama */}
                <section id="vakalatnama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legality &amp; Execution of Digital Vakalatnama
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A Vakalatnama is a formal document by which a client authorizes an advocate to represent them before a court, tribunal, or authority. In traditional practice, executing a Vakalatnama required the client to physically sign the document and present it to the advocate, who would then file it in court. In the digital age, this process has been simplified through electronic signature frameworks.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal validity of electronic signatures on Vakalatnamas is established under the <strong>Information Technology Act, 2000</strong>. Section 5 and Section 15 of the IT Act provide that digital signatures (such as Aadhaar e-Sign or Digital Signature Certificates) have the same legal standing as physical, wet-ink signatures. High Courts across India, including the Kerala, Delhi, and Bombay High Courts, have amended their e-filing rules to explicitly accept digitally signed Vakalatnamas, digital affidavits, and electronic declarations.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure security and compliance, our portal uses verified e-signature pipelines:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">A. Aadhaar e-Sign Integration</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The client can e-sign the Vakalatnama using their Aadhaar-linked mobile number. This service verifies the signer&apos;s identity through an OTP from the Unique Identification Authority of India (UIDAI), creating a tamper-evident, legally binding signature.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">B. Advocate Digital Signature Certificates (DSC)</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The panel advocate signs the legal notice and court pleadings using their Class 3 Digital Signature Certificate. This cryptographic signature verifies the advocate&apos;s identity and enrollment details, ensuring the documents meet court e-filing requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Step-by-Step Online Intake & Consultation */}
                <section id="pipeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Step-by-Step Online Intake &amp; Consultation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Connecting with an advocate online through our platform is structured to ensure speed, security, and legal accuracy. The step-by-step pipeline is designed to collect necessary information and establish a clear legal strategy:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Upload Documents to the Cloud Vault</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The client begins by uploading all supporting files—such as contracts, invoices, bank statements, ledger statements, and chat logs—to our secure cloud vault. The vault encrypts the files, preserving evidence integrity for the advocate&apos;s review.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Complete the Case Intake Form</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The client completes a guided intake questionnaire. This form captures key details, including the identities of the parties, transaction dates, the exact default amount, and communications, allowing the system to route the case file to the right panel advocate.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Review &amp; Strategy Consultation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The assigned panel advocate reviews the case files in the vault. If needed, the advocate schedules a telephonic or video consultation with the client to discuss the legal strategy, clarify facts, and confirm the statutory provisions to be cited in the notice.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          4
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft Vetting &amp; Client Dashboard Approval</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The advocate drafts the customized legal notice on their official letterhead and uploads it to the client&apos;s dashboard. The client can review the draft, request modifications, and approve the notice when satisfied.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Pre-Litigation Dispatches & Digital Evidence */}
                <section id="evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Pre-Litigation Dispatches &amp; Digital Evidence
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is only useful if you can prove to a court that the recipient received it. Under the Indian civil justice system, defendants frequently try to delay trials by claiming they never received the notice. Proving service requires combining physical postal records with digital delivery logs.
                    </p>
                    
                    <h3 className="font-extrabold text-base text-slate-900 mb-2">A. Constructive Service under the General Clauses Act</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      When a legal notice is sent digitally to the correct address, its delivery is protected under the law. This establishes a legal presumption that if a notice is correctly addressed and dispatched, service is deemed completed. Even if the recipient intentionally evades service, the court accepts the digital delivery report as proof of service.
                    </p>

                    <h3 className="font-extrabold text-base text-slate-900 mb-2">B. Digital Service under the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      For electronic service (such as corporate emails or WhatsApp messages), the legal framework is governed by the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act. Under Section 63 of the BSA, electronic records are admissible as primary or secondary evidence. To prove email or WhatsApp service in court, the sender must submit:
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-650 space-y-2">
                      <li>Screenshots showing the email transmission logs, read receipts, or WhatsApp double blue ticks.</li>
                      <li>A signed certificate under Section 63 of the BSA, verifying the authenticity and data integrity of the electronic record.</li>
                    </ul>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      Our platform automatically packages these digital receipts and drafts the Section 63 BSA certificate for your advocate to submit, ensuring your electronic evidence is ready for court.
                    </p>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Service Channel</th>
                            <th className="p-3">Proof of Delivery (POD) Record</th>
                            <th className="p-3">Statutory Admissibility Basis</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Digital Dispatch</td>
                            <td className="p-3">Consignment delivery report showing date, time, and recipient location.</td>
                            <td className="p-3">Section 27 of the General Clauses Act, 1897</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Corporate Email</td>
                            <td className="p-3">SMTP transmission logs, email headers, and read receipt tracker logs.</td>
                            <td className="p-3">Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">WhatsApp Messaging</td>
                            <td className="p-3">Screenshots showing the PDF attachment delivery status and double blue ticks.</td>
                            <td className="p-3">Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 6: Case Studies, Reviews & FAQs */}
                <section id="cases-faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Case Studies, Reviews &amp; FAQs
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consulting advocates online through our platform has helped hundreds of clients recover outstanding money without resorting to expensive, long-drawn litigation. Below are three representative case studies:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Friendly Loan</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.5 Lakhs Loan</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A lender in Pune had given a ₹3.5L friendly loan. The borrower went silent, evading physical service. We drafted a notice and served it via WhatsApp, with the read status certified under Section 63 BSA. The borrower agreed to a settlement plan.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Trade Receivable</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹6.8 Lakhs Invoice Dues</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A manufacturer in Gujarat faced defaults on B2B invoices from a distributor. We verified the distributor&apos;s GSTIN and sent the notice via Speed Post and corporate email. The distributor cleared the dues to avoid insolvency proceedings.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Freelance Retainer</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.2 Lakhs Milestone Dues</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A developer in Mumbai was denied payment for app delivery by a client. We drafted a notice invoking Section 70 of the Contract Act and served it via email and WhatsApp. The client signed a settlement deed and paid.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviewSchema.review.map((rev, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-amber-500 text-sm">★</span>
                            ))}
                          </div>
                          <p className="text-sm text-slate-700 italic mb-4 leading-relaxed font-medium">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 space-y-4">
                      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4">Frequently Asked Questions</h3>
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
                              <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                                ▼
                              </span>
                            </button>
                            {isExpanded && (
                              <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </section>

              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Consult Vakil Online</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Connect with a panel advocate, review your evidence, and execute digital Vakalatnamas for recovery notice dispatches.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Consultation
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
