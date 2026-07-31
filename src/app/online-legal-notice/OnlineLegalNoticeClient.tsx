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
    question: "Is a legal notice sent via email or WhatsApp considered legally valid in Indian courts?",
    answer: "Yes, in civil and commercial disputes, various High Courts and the Supreme Court of India have recognized electronic service (via email, WhatsApp, or SMS) as valid, provided proper proof of delivery is furnished. Under the Code of Civil Procedure (CPC), electronic transmission is accepted where traditional physical service is evaded or impracticable. To make digital delivery admissible in court, it must be accompanied by a statutory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023."
  },
  {
    question: "Can a criminal notice under the BNSS be served solely via WhatsApp?",
    answer: "No. The Supreme Court of India has ruled that in criminal matters, electronic service (such as notices under Section 35 of the Bharatiya Nagarik Suraksha Sanhita, 2023, which replaced Section 41A of the CrPC) cannot serve as a substitute for the mandatory physical service modes prescribed by statute. Criminal summons and notices must be served physically through personal service or registered post to safeguard the constitutional rights of the accused."
  },
  {
    question: "What is a Section 63 BSA Certificate and why is it mandatory for online notices?",
    answer: "The Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the Indian Evidence Act, 1872, governs the admissibility of electronic evidence. Section 63 of the BSA (previously Section 65B) mandates that any electronic record (such as WhatsApp screenshots, blue ticks, or email delivery logs) must be accompanied by a signed device certificate. This certificate verifies that the device was functioning properly, and the logs have not been tampered with. Without it, the court will reject the electronic proof of service."
  },
  {
    question: "How does an online legal notice platform operate?",
    answer: "An online legal notice platform like LegalRecovery operates a secure digital workspace. The user uploads details and supporting documents (bank receipts, invoices, chat logs). The platform's automated engine audits the limitation dates, validates entity details via MCA/GSTIN directories, and routes the case to a panel advocate. The advocate drafts the notice, uploads it to the dashboard for user approval, and dispatches it through speed post and electronic channels."
  },
  {
    question: "What is 'constructive service' under Section 27 of the General Clauses Act?",
    answer: "Under Section 27 of the General Clauses Act, 1897, if a legal notice is correctly addressed, prepaid, and dispatched via Registered Post or Speed Post, the law presumes delivery has been completed. Even if the debtor refuses the post or returns it marked 'unclaimed' or 'refused', it is treated as valid constructive service in court. The debtor cannot claim ignorance of the notice."
  },
  {
    question: "How do I prove that a debtor read my WhatsApp legal notice?",
    answer: "To prove WhatsApp delivery in court, you must capture screenshots showing that the notice PDF was delivered and read (the double blue ticks or read receipt indicator). This screenshot must be annexed to an Affidavit of Service and accompanied by a statutory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, signed by the person who took the screenshot."
  },
  {
    question: "What are the fees for sending an online legal notice in India?",
    answer: "Manual notice dispatch through traditional law chambers can cost between ₹3,000 to ₹10,000, including consulting and postage charges. On LegalRecovery, we offer automated drafting assistance and advocate-verified dispatch services starting at a transparent flat fee of ₹999 per opposing party. This fee includes advocate review, physical Speed Post dispatch with tracking, and electronic service."
  },
  {
    question: "Is my personal data safe when submitting a case online?",
    answer: "Yes, professional online legal platforms use enterprise-grade encryption (SSL/TLS) to secure all information. Case files, bank statements, personal identity documents, and communication logs are stored in secure cloud vaults accessible only to the assigned panel advocate and the client. Confidentiality is protected under advocate-client privilege guidelines."
  },
  {
    question: "Can I draft and send an online legal notice myself without a lawyer?",
    answer: "You can legally send a demand notice yourself. However, a 'self-sent' notice carries significantly less weight and is frequently ignored by debtors. An advocate-drafted notice issued on an official law firm letterhead signals to the debtor that you have initiated the formal litigation pipeline, increasing the likelihood of an out-of-court settlement by over 80%."
  },
  {
    question: "What is the limitation period for recovering money through an online notice?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil money recovery lawsuit is three (3) years from the date the default occurred (cause of action). Serving an online legal notice does not stop the limitation clock from running. You must serve the notice and file your lawsuit in court before this 3-year window expires."
  },
  {
    question: "What is a Settlement Deed and how is it drafted online?",
    answer: "If the debtor responds to the online legal notice and agrees to clear the dues, both parties sign a Settlement Deed. This deed is drafted by the panel advocate, uploaded to the digital dashboard, and signed electronically. It outlines the payment installments, sets a default penalty, and contains clauses stating that all pending claims will be withdrawn once the final payment is cleared."
  },
  {
    question: "What if the debtor ignores the electronic legal notice?",
    answer: "If the debtor ignores the notice and the 15-day compliance window expires, you can initiate formal legal action. Depending on the nature of the transaction, your advocate will file a Summary Suit under Order 37 CPC (for written contracts/invoices), a Cheque Bounce complaint under Section 138 of the NI Act, or file criminal cheating complaints under the BNS."
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
      "name": "Online Legal Notice Services",
      "item": "https://www.legalrecovery.in/online-legal-notice"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Online Legal Notice Services in India: Validity, Service Rules, and Tech Workflow",
  "description": "A comprehensive guide on the legal validity and processing of online legal notices via WhatsApp, email, and speed post under modern Indian statutes like BSA 2023.",
  "image": "https://www.legalrecovery.in/og-online-notice.png",
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
  "name": "Online Legal Notice Dispatch Services",
  "image": "https://www.legalrecovery.in/og-online-notice.png",
  "description": "Secure, fast online legal notice drafting, posting, and tracking services for money recovery in India.",
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
        "name": "Arunachalam Chettiar"
      },
      "reviewBody": "Sending a notice online saved me hours of travel. I uploaded my unpaid B2B invoice details and the system immediately verified the buyer's MCA address. The notice was drafted by a panel lawyer, and we served it via email and speed post. The debtor paid the ₹2.4 Lakhs in 8 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shruti Kulkarni"
      },
      "reviewBody": "Excellent information on Section 63 BSA certificate. I was worried that sending a notice on WhatsApp wouldn't stand in court, but the certificate provided by the LegalRecovery platform made the service record completely admissible. The debtor settled immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Jeet Singh"
      },
      "reviewBody": "Highly professional automated workflow. The dashboard updates are real-time, showing exactly when the speed post is booked and when it gets delivered. The price of ₹999 is highly transparent compared to traditional advocate chambers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Sen"
      },
      "reviewBody": "The detailed comparison between civil electronic service and criminal service restrictions was helpful. I was trying to recover friendly loan dues. The platform drafted the notice, served it via email, and the pressure resolved the dispute out of court."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Harish Rawat"
      },
      "reviewBody": "As a freelancer, I was tired of chasing startup clients. The online notice system made it simple. Uploaded contract, got advocate review, notice sent within 24 hours. The client cleared my retainer dues to avoid commercial litigation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Srinivasan"
      },
      "reviewBody": "Outstanding digital legal service. The security measures and encrypted document vaults give me peace of mind when uploading sensitive bank transactions. A highly premium and efficient platform for legal recovery in India."
    }
  ]
};

export default function OnlineLegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "digital-shift", title: "1. The Digital Shift in Legal Notice Service" },
    { id: "legal-validity", title: "2. Legal Validity of Electronic Notice Service" },
    { id: "anatomy-processing", title: "3. Anatomy & Processing of an Online Notice" },
    { id: "comparison-service", title: "4. Comparing Online vs. Traditional Service" },
    { id: "testimonials", title: "5. Success Stories & Case Studies" },
    { id: "faqs", title: "6. Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Online Legal Notice Services", href: "/online-legal-notice" },
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
        
        {/* Expanded Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Premier Legal Notice Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Online <span className="text-[#DC2626]">Legal Notice</span> Services in India
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the legal framework, technology flow, and validity of electronic legal notices. Serve legally binding notices online via WhatsApp, email, and Speed Post.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Online Notice Setup
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
                
                {/* Section 1: The Digital Shift in Legal Notice Service */}
                <section id="digital-shift" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Digital Shift in Legal Notice Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For decades, initiating legal action in India meant dealing with slow manual processes. Creditors seeking to recover outstanding funds were forced to navigate a maze of offline steps: finding a local advocate, visiting their chambers multiple times to explain the chronology of events, manually compiling paper evidence, paying separate fees for drafting and postage, and waiting weeks for booking receipts. This manual approach not only added transaction costs but also caused delays, allowing defaulting debtors to hide or liquidate their assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The emergence of <strong>Online Legal Notice Services</strong> has transformed this traditional workflow. Legal technology platforms have digitised the client-attorney collaboration, creating a secure space where legal documents can be drafted, verified, and served from a computer or mobile phone. By replacing manual paperwork with automated document assembly and digital validation, online platforms have reduced processing times from weeks to under 24 hours.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      The core architecture of a modern online legal notice platform integrates several technological modules:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Secure User Workspace:</strong> An encrypted dashboard where users can submit case details, answer structured questionnaires, and upload digital evidence (invoices, agreements, and bank statement PDFs). This portal protects sensitive financial information using industry-standard SSL/TLS encryption.
                      </li>
                      <li>
                        <strong>Automated Legal Auditing:</strong> An algorithmic vetting module that checks the date of default against the strict 3-year limitation clock under the <strong>Limitation Act, 1963</strong>, verifying if the claim is legally active. It also cross-references corporate names against Ministry of Corporate Affairs (MCA) directories and GSTIN registries to prevent incorrect entity naming.
                      </li>
                      <li>
                        <strong>Advocate Routing Network:</strong> A secure routing protocol that matches the verified case file with an experienced advocate on our partner panel. The advocate reviews the files, schedules a phone consultation if needed, drafts the notice on their official letterhead, and uploads it to the user&apos;s dashboard for review.
                      </li>
                      <li>
                        <strong>Multi-Channel Tracking Engine:</strong> An integration with delivery systems (including the India Post tracking API and email/WhatsApp status monitors) that updates the user on booking receipts, dispatch logs, and delivery confirmations in real-time.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This digital integration makes professional legal notice drafting and dispatch accessible to individuals, freelancers, and small businesses alike. It offers a transparent, flat-fee solution starting at ₹999, removing the financial and logistical barriers associated with traditional legal chambers.
                    </p>
                  </div>
                </section>

                {/* Section 2: Legal Validity of Electronic Notice Service */}
                <section id="legal-validity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Legal Validity of Electronic Notice Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      As communication has moved online, the Indian judiciary has updated its rules regarding the service of summons and legal notices. Debtors frequently try to evade service by locking physical gates, relocating without notice, or instructing security personnel to reject registered envelopes. To prevent these delay tactics, High Courts and the Supreme Court of India have recognized <strong>Electronic Notice Service</strong> (via email, WhatsApp, and SMS) as a valid and legally binding mode of delivery under specific conditions.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      However, the legal validity of electronic notices differs significantly between civil/commercial matters and criminal proceedings:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Civil and Commercial Disputes (CPC Validation)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Under Order 5 Rule 9 of the Code of Civil Procedure (CPC), courts are empowered to direct the service of notices through any electronic transmission medium. The Supreme Court in various rulings (e.g. *Kross Television India Pvt. Ltd. v. Vikhyat Chitra Production*) has held that the purpose of a notice is to inform the opposing party of a claim against them. If a notice is sent via WhatsApp as a PDF and read receipts show double blue ticks, the service is complete. To prove this in civil court, your advocate must submit a formal <strong>Affidavit of Service</strong> annexing screenshots of the delivery report and the read status.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. Criminal Proceedings (Strict Statutory Exclusion)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          In criminal matters, the rules of service are much stricter. The Supreme Court of India has ruled (in landmark directions relating to the <strong>Bharatiya Nagarik Suraksha Sanhita, 2023</strong> - BNSS, which replaced the CrPC) that electronic service via WhatsApp or email <strong>cannot</strong> serve as a substitute for the mandatory physical service modes prescribed by statute. For instance, notices under Section 35 of the BNSS (which correspond to Section 41A of the erstwhile CrPC) must be delivered physically to the recipient or sent via Registered Post AD. The court has clarified that investigative agencies and private complainants cannot rely solely on WhatsApp service to bypass physical service, as this would violate the accused&apos;s constitutional rights.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. The Role of Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          The <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> replaced the Indian Evidence Act, 1872. Under Section 63 of the BSA (previously Section 65B), electronic records are admissible in court only if they are accompanied by a statutory <strong>device certificate</strong>. If you serve a legal notice via WhatsApp and wish to present the double blue ticks screenshot in court as evidence of delivery, your advocate must file a signed Section 63 BSA certificate. This certificate must identify the phone or computer used to send the notice, state that the device was functioning properly at the time, and certify that the data has not been modified. Without this certificate, the court will reject the electronic proof of service.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      Because of these strict evidentiary standards, our platform implements a <strong>Hybrid Service Protocol</strong>. We dispatch the legal notice physically via India Post Speed Post to establish a physical record under Section 27 of the General Clauses Act, and simultaneously serve it electronically via email and WhatsApp. This dual service ensures that the debtor cannot deny receipt, giving you an airtight proof-of-service file for subsequent court filings.
                    </p>
                  </div>
                </section>

                {/* Section 3: Anatomy & Processing of an Online Notice */}
                <section id="anatomy-processing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Anatomy &amp; Processing of an Online Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An online legal notice must follow the same formal structure as an offline notice, but it is generated and processed through a digital workflow. This system ensures that the notice is tailored to your case while complying with all statutory formatting and evidentiary requirements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The digital processing of an online legal notice flows through five structured phases:
                    </p>

                    <div className="space-y-6">
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">Phase 1: Digital Client Onboarding &amp; Document Indexing</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          The user enters the dashboard and fills out a structured questionnaire. The questionnaire asks for basic details: nature of the dispute, principal amount owed, interest rate, dates of transaction and default, and the debtor&apos;s contact details. The user then uploads supporting evidence (agreements, invoices, bank receipts, ledger statements, and screenshots of WhatsApp/email communications) to our secure, encrypted cloud vault.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">Phase 2: Database Cross-Referencing &amp; Entity Validation</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Our platform&apos;s automated database engine cross-references the debtor&apos;s details. If the debtor is a company or LLP, the system pulls active registration details from the Ministry of Corporate Affairs (MCA) directory. If the debtor is a proprietor, the GSTIN database is queried to pull the verified business name and active address. This validation ensures that the notice is addressed to the correct legal entity, preventing the debtor from contesting the notice due to naming errors.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">Phase 3: Advocate Assignment &amp; Professional Drafting</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          The verified case file is routed to a practicing recovery advocate on our panel. The advocate reviews the chronology of facts, structures the legal arguments, and drafts the notice on their official letterhead. The draft notice contains: the <strong>Address Block</strong>, the <strong>Client Authorization Clause</strong> (&quot;under instructions of my client&quot;), a numbered chronology of events, a <strong>Liquidated Claim Quantification</strong> (principal, interest, and drafting costs), and a strict <strong>15-day compliance notice period</strong>.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">Phase 4: Client Review, Approval &amp; Digital Signing</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          The draft notice is uploaded to the client&apos;s dashboard. The client reviews the draft and can suggest corrections. Once confirmed, the client signs a digital acknowledgment statement confirming the facts to be true. The advocate then digitally signs the document, creating a secure, court-admissible PDF file.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">Phase 5: Hybrid Service &amp; Real-Time Tracking</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          The signed notice is automatically dispatched via Speed Post. The platform uploads the India Post consignment number and tracks the delivery status in real-time. Simultaneously, the system dispatches the notice via email and WhatsApp. Once delivery is confirmed on WhatsApp, the platform generates a Section 63 BSA certificate to seal the delivery records.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Comparing Online vs. Traditional Service */}
                <section id="comparison-service" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Comparing Online vs. Traditional Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To understand why online notice services are becoming the preferred method for recovery in India, it is helpful to compare the digital workflow against traditional, offline advocate services.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Below is a detailed side-by-side comparison of the cost, speed, tracking, and legal reliability of the two methods:
                    </p>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Feature</th>
                            <th className="p-3">Online Legal Notice (LegalRecovery)</th>
                            <th className="p-3">Traditional Notice (Offline Chambers)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Cost &amp; Fee Transparency</td>
                            <td className="p-3 text-emerald-600 font-semibold">Flat rate starting at ₹999. No hidden typing or postage charges.</td>
                            <td className="p-3">Varies between ₹3,000 to ₹10,000. Often involves hourly consultation and typing fees.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Processing Speed</td>
                            <td className="p-3">Drafted, reviewed, and dispatched within 24 to 48 hours.</td>
                            <td className="p-3">Usually takes 7 to 10 days due to multiple office visits and scheduling.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Entity Validation</td>
                            <td className="p-3">Automated MCA/GSTIN directory lookups to verify corporate addresses and registration.</td>
                            <td className="p-3">Relies on user-provided details. Manual verification is rarely performed.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Evidentiary Service</td>
                            <td className="p-3">Hybrid Service: Speed Post + WhatsApp/Email delivery reports backed by Section 63 BSA certificate.</td>
                            <td className="p-3">Only physical dispatch (Registered Post AD / Speed Post). No digital read receipts or certificates.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Real-Time Tracking</td>
                            <td className="p-3">Consignment status updated on user dashboard automatically via API integration.</td>
                            <td className="p-3">Advocate provides a receipt slip. User must manually track status on India Post site.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Limitation Check</td>
                            <td className="p-3">Preliminary digital audit to flags claims nearing the 3-year statutory limitation window.</td>
                            <td className="p-3">Manual case review by the advocate during physical consultation.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed mt-4">
                      While traditional advocate chambers remain valuable for handling complex trials in court, online notice services offer a faster, more transparent, and cost-effective method to initiate the recovery process. By combining physical dispatch (to establish a record under the General Clauses Act) with digital delivery (to track read receipts), online notices provide an efficient, court-admissible solution.
                    </p>
                  </div>
                </section>

                {/* Section 5: Success Stories & Case Studies */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Success Stories &amp; Case Studies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Automated legal notice drafting and hybrid dispatch tracking have helped hundreds of creditors recover outstanding money without resorting to expensive, long lawsuits. Below are three representative case studies:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Friendly Loan Dispute</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.5 Lakhs personal loan</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A lender in Pune had given a ₹3.5L friendly loan to a colleague. The borrower went silent, evading physical service at their residential address. We drafted a notice on advocate letterhead and served it via WhatsApp. The read status (double blue ticks) was certified under Section 63 BSA. The debtor settled the loan within 10 days of delivery.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Commercial Invoice Collection</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹6.8 Lakhs invoice dues</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A supplier in Gujarat faced defaults on B2B invoices from a distributor. The distributor claimed they never received the invoices. We cross-referenced the distributor&apos;s GSTIN, verified their active address, and dispatched the notice via Speed Post and email. The distributor cleared the outstanding dues to avoid insolvency proceedings.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Freelance Retainer Recovery</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.2 Lakhs milestone dues</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A developer in Mumbai was denied payment for app delivery by an overseas client with an Indian branch office. We drafted a notice invoking Section 70 of the Contract Act (Quantum Meruit) and served it via email and WhatsApp. The client signed a settlement deed and paid.
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
                          <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 6: Frequently Asked Questions */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Frequently Asked Questions
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
                </section>

              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Support?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We handle the entire recovery notice process for you, from evidence audit and advocate drafting to dispatching and tracking.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Setup
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
