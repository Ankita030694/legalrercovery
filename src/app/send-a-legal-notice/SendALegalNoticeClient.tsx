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
    question: "What is a legal notice and is it mandatory to send one before filing a civil lawsuit in India?",
    answer: "A legal notice is a formal written communication sent by an advocate on behalf of their client to demand compliance with a legal obligation or remedy a grievance. Under Indian civil procedure, sending a legal notice is mandatory in specific statutory cases, such as filing a suit against the government or a public officer under Section 80 of the Code of Civil Procedure (CPC) or initiating criminal proceedings for a bounced cheque under Section 138 of the Negotiable Instruments Act. In other civil disputes, such as breach of contract, property disputes, or recovery of dues, sending a notice is not strictly mandatory by statute but is highly recommended. It serves as crucial pre-litigation evidence, establishes a clear timeline of default, demonstrates the sender's good faith to the court, and often resolves the dispute out of court without expensive litigation."
  },
  {
    question: "What is the mandatory waiting period after serving a legal notice under CPC Section 80?",
    answer: "Under Section 80 of the Code of Civil Procedure, 1908, when you intend to file a civil suit against the Government (either Central or State) or a public officer for any act done in their official capacity, you must serve a formal written notice and wait for a mandatory period of two months (60 days) from the date of service before instituting the lawsuit. This window is designed to allow the government or public authority to review the case details and settle the matter out of court. However, under Section 80(2) of the CPC, if the matter requires urgent or immediate relief, you can file the suit without serving the notice or waiting for the two-month period, provided you obtain the explicit leave (permission) of the court. If the court finds no urgency, it will return the plaint to be refiled after complying with the notice requirements."
  },
  {
    question: "What are the strict timelines for sending a legal notice for a bounced cheque under Section 138 of the NI Act?",
    answer: "The Negotiable Instruments Act, 1881, prescribes strict, non-negotiable timelines for cheque bounce cases. First, the cheque must be presented to the bank within its validity period (usually 3 months). Second, if the cheque bounces, you must receive a cheque return memo from the bank. Third, you must send a statutory legal notice to the drawer within 30 days of receiving the return memo. Fourth, the notice must demand that the drawer pay the cheque amount within 15 days of receiving the notice. Fifth, if the drawer fails to make the payment within those 15 days, you must file a criminal complaint in the Magistrate's Court within 30 days starting from the day the 15-day compliance period expired. Any delay in these steps can weaken the case, requiring a formal condonation of delay application supported by sufficient cause."
  },
  {
    question: "How does a legal notice under Section 106 of the Transfer of Property Act operate for lease termination?",
    answer: "Section 106 of the Transfer of Property Act, 1882, governs the termination of leases where there is no written contract or where the contract is silent on lease termination. If the property is leased for agricultural or manufacturing purposes, the lease is deemed to be from year to year, requiring a mandatory 6-month notice period to terminate. If the property is leased for other purposes (residential or commercial tenancy), the lease is deemed to be from month to month, requiring a 15-day notice period. The notice must be in writing, signed by the landlord or their authorized agent, and properly delivered to the tenant. The notice period begins from the date the tenant receives the notice. If the tenant fails to vacate the premises after the notice period expires, the landlord can initiate eviction proceedings in the civil court."
  },
  {
    question: "What essential details must be included in a legal notice to make it legally enforceable?",
    answer: "To be legally enforceable and withstand scrutiny in court, a legal notice must contain: 1) The complete name, description, and address of the sender (the claimant). 2) The complete name and address of the recipient (the opposing party). 3) A clear, chronological statement of facts containing dates, agreements, transaction history, and defaults. 4) The cause of action, detailing the legal grievance, breach of terms, or statutory violations. 5) A specific, clear demand for relief (e.g., payment of outstanding dues, rectification of a breach, or handover of property). 6) A reasonable timeline for compliance (usually 15 days for private disputes, or 60 days for government notices). 7) A clear statement that failure to comply will result in civil or criminal legal proceedings at the recipient's cost and risk."
  },
  {
    question: "Can I draft and send a legal notice online without visiting an advocate's office?",
    answer: "Yes, modern legal tech platforms like LegalRecovery allow you to draft and send a legal notice completely online. You do not need to make physical visits to an advocate's chambers. You submit your case details through our secure digital intake questionnaire, upload supporting files to an encrypted document vault, and review the draft notice prepared by a panel advocate on your personal dashboard. Once you approve the draft, the advocate digitally signs the notice under Section 5 of the Information Technology Act, 2000. The portal then dispatches the notice digitally via verified email and WhatsApp, providing you with real-time delivery tracking alerts."
  },
  {
    question: "How is the delivery of a legal notice proved in court if the recipient refuses to accept it?",
    answer: "Under Indian law, if a physical legal notice is sent via Registered Post AD or Speed Post to the correct registered address of the recipient and is returned with postal remarks such as 'refused,' 'unclaimed,' 'not claimed,' or 'door locked,' the court accepts this as constructive service. This principle is backed by Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act (now Bharatiya Sakshya Adhiniyam, 2023), which establish a legal presumption that the notice was duly served. For electronic delivery (via WhatsApp or email), service is proved by presenting the read receipts, double blue ticks, or server delivery logs accompanied by a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, validating the authenticity of the digital evidence."
  },
  {
    question: "What is Online Dispute Resolution (ODR) and how does it integrate with legal notices?",
    answer: "Online Dispute Resolution (ODR) is a modern legal framework that uses digital technology, mediation platforms, and online negotiation dashboards to resolve disputes out of court. An online legal notice served through our portal acts as the entry point for the ODR pipeline. If the recipient responds to the notice and indicates a willingness to settle, the platform moves the dispute to a secure virtual negotiation room. A neutral mediator can facilitate discussions, helping both parties reach a mutual agreement. Once settled, the platform drafts a settlement deed that both parties e-sign, creating a legally binding and enforceable contract, avoiding the cost and delays of traditional court proceedings."
  },
  {
    question: "What are the advantages of using database cross-referencing (MCA and GSTIN) for legal notices?",
    answer: "One of the most common reasons civil cases and legal notices fail is that they are addressed to incorrect legal entities or outdated registered offices. Our online portal addresses this by integrating database API queries. When you draft a notice to a corporate entity, our system queries the Ministry of Corporate Affairs (MCA) database to verify the exact active corporate name and registered office address. For proprietary firms, partnership concerns, or retail businesses, the system queries the GSTIN registry to verify the proprietor's name and tax registration address. This automated validation ensures the notice is addressed to the correct legal party, preventing technical dismissals in court."
  },
  {
    question: "What is the flat fee pricing structure for sending a notice through LegalRecovery?",
    answer: "LegalRecovery operates on a transparent, flat-fee pricing model starting at ₹999 per opposing party. This flat rate is all-inclusive and covers: 1) Client intake and case file assembly. 2) Document verification and vetting by a panel advocate. 3) Professional drafting on the advocate's official letterhead. 4) Digital review and modifications via the user dashboard. 5) Digital signing under the IT Act. 6) Electronic dispatch via verified email and WhatsApp. 7) Real-time tracking dashboard updates. There are no hidden charges or hourly fees."
  },
  {
    question: "What legal actions can I take if the recipient ignores my legal notice?",
    answer: "If the recipient fails to comply with or respond to the legal notice within the stipulated notice period (e.g., 15 days), the next step is to initiate formal legal action. Depending on the nature of the dispute, your advocate can file: 1) A Summary Suit under Order 37 of the CPC for fast-track recovery of contractual debts. 2) A criminal complaint under Section 138 of the Negotiable Instruments Act for cheque bounce. 3) An eviction and recovery suit under the Rent Control Act or Transfer of Property Act. 4) A complaint before the consumer forum for deficiency of service. 5) An application before the Labour Court or Labour Commissioner for unpaid salary. The portal organizes your case files and proof of service into a litigation-ready package to simplify this transition."
  },
  {
    question: "How secure is the document vault on LegalRecovery?",
    answer: "Security and confidentiality are fundamental to legal transactions. LegalRecovery uses enterprise-grade security protocols. All documents uploaded to our cloud vault are encrypted both in transit (using SSL/TLS) and at rest (using AES-256 encryption). Access to the documents is restricted to the assigned panel advocate and the client. The data is protected under advocate-client privilege guidelines, ensuring complete confidentiality. We do not share or sell client data to third parties."
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
      "name": "Send a Legal Notice",
      "item": "https://www.legalrecovery.in/send-a-legal-notice"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Send a Legal Notice in India: The Ultimate Procedural & Statutory Guide",
  "description": "Exhaustive guide on sending legal notices under CPC Section 80, NI Act Section 138, and TPA Section 106 in India. Learn about drafting, digital tracking, and ODR.",
  "image": "https://www.legalrecovery.in/og-send-legal-notice.png",
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
  "name": "Online Legal Notice Dispatch Service",
  "image": "https://www.legalrecovery.in/og-send-legal-notice.png",
  "description": "Standardized legal notice drafting and dispatch portal with real-time post and electronic tracking.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Vikram Rathore"
      },
      "reviewBody": "Sending a legal notice to my former business partner was incredibly easy through this portal. The platform verified the firm's registration via GSTIN and automatically filled the correct office address. The lawyer drafted the notice on his letterhead, signed it electronically, and it was served via Speed Post and WhatsApp. The partner agreed to settle within 10 days of receiving the notice. Fantastic tech-enabled legal workflow!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Sen"
      },
      "reviewBody": "I needed to send a lease termination notice to a tenant who was refusing to pay rent or vacate. The platform helped draft a statutory notice under Section 106 of the Transfer of Property Act. The tenant refused delivery of the physical post, but the system tracked this refusal in real-time, providing constructive service proof. Together with the email delivery reports, this evidence allowed us to file an eviction suit. Highly professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kunal Jha"
      },
      "reviewBody": "An employer withheld my FNF and salary for four months after my resignation. I used LegalRecovery to send a formal legal notice. The draft was ready in 24 hours on the advocate's letterhead. The company HR contact received it via email and immediately processed the dues to prevent litigation. Saved me weeks of follow-ups and offline visits."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Joshi"
      },
      "reviewBody": "The flat fee of ₹999 is highly transparent and competitive. Traditional lawyers quoted hourly consultations plus mailing costs. Here, everything was done online, tracked in real-time, and supported by a panel advocate. The ODR pipeline option is a great touch for out-of-court settlements."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditya Vardhan"
      },
      "reviewBody": "A client defaulted on my invoice payments for freelance development work. The online legal notice portal allowed me to upload the contracts and invoices to the document vault. The advocate reviewed the trail, sent the notice, and the client e-signed the settlement deed. Excellent service for freelancers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Nair"
      },
      "reviewBody": "The Section 63 BSA certificate provided with the WhatsApp dispatch tracking was crucial for my cheque bounce case. The court accepted the proof of delivery immediately. The portal's speed and integration of technology with actual legal procedures is outstanding."
    }
  ]
};

export default function SendALegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "protocol", title: "1. The Modern Protocol of Sending a Notice" },
    { id: "statutes", title: "2. Essential Statutes & Notice Periods" },
    { id: "procedure", title: "3. Step-by-Step Online Notice Process" },
    { id: "evidence", title: "4. Evidentiary Authenticity & Proof of Service" },
    { id: "resolution", title: "5. Out-of-Court Settlement & ODR Integration" },
    { id: "cases-faqs", title: "6. Case Studies, Reviews & FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
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
              PRE-LITIGATION AND RECOVERY ENGINE
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Send a <span className="text-[#DC2626]">Legal Notice</span> in India
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the statutory requirements, procedural workflows, and digital tools for drafting and serving a legal notice online under modern Indian laws.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Draft &amp; Send Legal Notice
            </button>
          </div>
        </div>

        <div className="w-full max-w-8xl mx-auto px-4 py-10">
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

                {/* Section 1: The Modern Protocol of Sending a Notice */}
                <section id="protocol" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Modern Protocol of Sending a Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is a formal, structured communication sent by a person or business (the claimant) through their authorized advocate to another individual or entity (the recipient). It serves as an official declaration of the claimant&apos;s legal grievances, summarizing the facts of the dispute, explaining the breach of terms or statutory violations, and demanding a specific remedy. This formal communication acts as a pre-litigation step, providing the recipient with a final opportunity to settle the matter amicably within a specified compliance window before formal civil or criminal litigation is initiated.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the Indian legal framework, sending a legal notice serves several critical objectives. First, it clearly conveys your legal grievances to the other party, leaving no room for ambiguity about your intentions. Second, it establishes a reliable, court-admissible paper trail showing that you made reasonable efforts to resolve the dispute out of court. Third, it sets a firm timeline for the other party to respond or comply, which is vital for calculating limitation periods in civil recovery suits. Fourth, it demonstrates your good faith in eventual court proceedings. Judges consistently look favorably upon plaintiffs who have tried to settle disputes through formal warnings before burdening the judicial system.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In recent years, the process of sending a legal notice has undergone a massive digital transition. Traditionally, drafting a notice required multiple in-person meetings with an advocate, manual document checks, printing on legal paper, and posting at a local post office. Today, legal tech platforms have digitized this entire flow. By combining automated database checks, secure cloud document vaults, panel advocate assignment, and digital tracking dashboards, online portals make drafting and dispatching notices faster and more transparent. A legal notice has evolved into a structured digital case file, which is integrated with Online Dispute Resolution (ODR) systems and ready for e-filing.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal notices in India fall into two broad categories: statutory notices and non-statutory notices. Statutory notices are those mandated by specific acts of parliament before any legal action can be filed. For instance, you cannot file a suit against a government department without serving a 60-day notice under Section 80 of the Code of Civil Procedure (CPC), nor can you file a criminal cheque bounce complaint without serving a 15-day notice under Section 138 of the Negotiable Instruments Act. Non-statutory notices are those sent in general civil matters, such as contractual breaches, partition disputes, or consumer grievances. While not strictly mandated by law, sending a non-statutory notice is standard practice to establish default and encourage settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding this distinction is critical for any claimant. Failure to serve a mandatory statutory notice, or failing to adhere to the strict timelines prescribed by law, can lead to the outright rejection of your plaint under Order 7, Rule 11 of the CPC for lack of a cause of action. Consequently, ensuring that your notice is drafted with the correct statutory citations, factual chronology, and demand timelines is the foundation of successful debt recovery and dispute resolution.
                    </p>
                  </div>
                </section>

                {/* Section 2: Essential Statutes & Notice Periods */}
                <section id="statutes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Essential Statutes &amp; Notice Periods
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Different legal disputes in India are governed by specific statutes that dictate how a notice must be drafted, served, and timed. Compliance with these statutory provisions is non-negotiable. Below is a detailed breakdown of the four most common statutory notice categories under Indian civil and criminal law:
                    </p>

                    <div className="space-y-8">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-3">A. Section 80 of the Code of Civil Procedure, 1908 (Government Notices)</h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          When a citizen intends to file a civil lawsuit against the Central Government, a State Government, or any public officer acting in their official capacity, they must serve a formal written notice under Section 80 of the CPC. The law mandates a strict <strong>two-month waiting period (60 days)</strong> from the date the notice is delivered before the suit can be filed. The notice must clearly state the cause of action, the name and address of the plaintiff, and the exact relief claimed.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Under Section 80(2) CPC, if the plaintiff requires urgent or immediate interim relief (such as an injunction to prevent demolition or asset transfer), they can file the lawsuit without serving the notice or waiting for the two-month period. However, they must obtain the explicit leave of the court. The court will not grant any interim relief without first giving the government counsel a reasonable opportunity to show cause. If the court later finds that there was no real urgency, it will return the plaint to the plaintiff to be refiled after complying with the two-month notice period.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-3">B. Section 138 of the Negotiable Instruments Act, 1881 (Cheque Bounce Cases)</h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          A bounced cheque is a serious criminal offense in India under Section 138 of the Negotiable Instruments Act. However, a criminal complaint cannot be filed directly. The holder of the cheque must follow a strict, fast-track timeline:
                        </p>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-slate-650 space-y-2 mb-3">
                          <li>The cheque must be presented to the bank within its 3-month validity period.</li>
                          <li>If the cheque is dishonored, the sender must receive an official Cheque Return Memo from the bank stating the reason (e.g., insufficient funds, signatures mismatch).</li>
                          <li>The statutory notice must be sent to the drawer of the cheque within <strong>30 days</strong> of receiving the return memo.</li>
                          <li>The notice must demand payment of the cheque amount within a strict <strong>15-day compliance window</strong> from the date the drawer receives the notice.</li>
                          <li>If the drawer fails to clear the dues within those 15 days, the sender can file a criminal complaint in the Magistrate&apos;s Court within <strong>30 days</strong> of the expiry of the 15-day window.</li>
                        </ul>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          These timelines are absolute. Failing to send the notice within 30 days or filing the complaint before the 15-day window expires will result in the case being dismissed, unless you can prove sufficient cause for the delay in a separate condonation application.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-3">C. Section 106 of the Transfer of Property Act, 1882 (Lease &amp; Tenancy Disputes)</h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          In landlord-tenant disputes where there is no written lease agreement or where the lease has expired and the tenant is holding over, tenancy termination is governed by Section 106 of the TPA. The law divides tenancies into two classes:
                        </p>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-slate-650 space-y-2 mb-3">
                          <li><strong>Year-to-Year Leases:</strong> Leases for agricultural or manufacturing purposes require a <strong>6-month notice period</strong> to terminate.</li>
                          <li><strong>Month-to-Month Leases:</strong> Residential or commercial tenancies require a <strong>15-day notice period</strong> to terminate.</li>
                        </ul>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          The notice must be in writing, signed by the landlord or their representative, and sent to the tenant. The notice period begins from the date the tenant receives the document. If the tenant fails to vacate the property by the end of the notice period, they are considered an unauthorized occupant, and the landlord can file an eviction suit in civil court.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-3">D. General Breach of Contract under the Indian Contract Act, 1872</h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          In disputes involving unpaid commercial invoices, service level defaults, or non-delivery of goods, the legal notice is grounded in Section 73 of the Indian Contract Act. This section entitles the affected party to claim compensation for losses arising from a breach of contract. While the statute does not mandate a specific waiting period, most commercial agreements contain a &quot;Notice and Cure Clause&quot; (usually prescribing 15, 30, or 45 days) that must be followed. The notice must specify the contract terms breached, document the losses suffered, and provide a clear cure period before civil recovery suits or arbitration proceedings are initiated.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Step-by-Step Online Notice Process */}
                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Step-by-Step Online Notice Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Leveraging technology to draft and send a legal notice online simplifies what was once a slow, manual process. On LegalRecovery, the entire workflow is handled through a structured digital pipeline designed to ensure maximum speed, transparency, and legal compliance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      The step-by-step procedure for sending a notice online is structured as follows:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Upload to the Secure Document Vault</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The client begins by uploading all supporting documents to our secure, encrypted cloud vault. For salary disputes, this includes offer letters, payslips, and resignation emails. For commercial defaults, this includes invoices, ledgers, bank receipts, and agreements. This file storage preserves evidence integrity and ensures all documents are ready for review by the panel advocate.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Complete the Case Intake Questionnaire</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The client completes a guided online intake questionnaire. This form captures essential details, including the identities of the parties, transaction dates, the exact default amount, details of communication, and attempts made to resolve the dispute. This structured data allows the system to analyze the claim and route the file to the right advocate.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Assignment &amp; Custom Drafting</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The system assigns the case file to a panel advocate specializing in the relevant area of law (e.g., labor, property, or corporate recovery). The advocate reviews the documents in the vault, drafts a customized notice on their official letterhead with all statutory citations, and uploads the draft to the client&apos;s dashboard for review.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          4
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Digital Signing under the IT Act</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Once the draft notice is approved by the client, the advocate digitally signs the PDF notice using their registered Digital Signature Certificate (DSC) or e-sign under Section 5 of the Information Technology Act, 2000. E-signed legal notices carry the same validity in court as physical signatures, eliminating the need to physically mail documents back and forth.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          5
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Hybrid Service &amp; Dispatch Execution</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The system dispatches the notice through a hybrid delivery model. The notice is physically printed, sealed, and sent via India Post Speed Post. Simultaneously, it is served electronically via verified email and WhatsApp. This combined approach ensures the notice reaches the recipient, preventing common claims of non-delivery.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                          6
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Real-Time Delivery Tracking &amp; Notifications</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            The platform monitors the delivery status. The 13-digit consignment number from India Post is linked to your dashboard, showing delivery updates in real-time. Similarly, email delivery receipts and WhatsApp status logs are tracked, providing a clear record of service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Evidentiary Authenticity & Proof of Service */}
                <section id="evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Evidentiary Authenticity &amp; Proof of Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is only effective if you can prove to a court that it was delivered to the recipient. Under the Indian civil justice system, defendants frequently try to delay proceedings by claiming they never received the notice. Proving service requires combining physical postal records with digital delivery logs.
                    </p>

                    <h3 className="font-extrabold text-base text-slate-900 mb-2">A. Constructive Service under the General Clauses Act</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      When a legal notice is sent physically to the correct address via Registered Post AD or India Post Speed Post, its service is protected by <strong>Section 27 of the General Clauses Act, 1897</strong>. This section states that if a letter is correctly addressed, prepaid, and posted, service is deemed to have been completed. Even if the recipient refuses to accept the letter, or if it is returned as &quot;unclaimed&quot; or &quot;out of station,&quot; the court accepts the returned envelope as proof of constructive service. This prevents recipients from evading the notice simply by refusing to open their door.
                    </p>

                    <h3 className="font-extrabold text-base text-slate-900 mb-2">B. Digital Service under the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      For electronic service (such as emails or WhatsApp messages), the legal framework has changed with the introduction of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act, 1872. Under Section 63 of the BSA, electronic records are admissible as primary or secondary evidence. To prove email or WhatsApp service in court, the sender must submit:
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-650 space-y-2">
                      <li>Screenshots showing the email or WhatsApp message, including the date, time, and recipient&apos;s verified details.</li>
                      <li>For WhatsApp, screenshots showing the blue read receipts or the message delivery logs.</li>
                      <li>A signed certificate under Section 63 of the BSA, confirming that the device used was functioning properly and that the digital record has not been altered.</li>
                    </ul>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      Our platform automatically packages these digital receipts and drafts the Section 63 BSA certificate for your advocate to submit, ensuring your electronic evidence is ready for court.
                    </p>

                    <h3 className="font-extrabold text-base text-slate-900 mb-2">C. Preventing Service Failures through Database Verification</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      To prevent delivery failures, our portal integrates database API queries to verify entity details. For private limited companies and LLPs, the system queries the Ministry of Corporate Affairs (MCA) database to confirm their active registered office address. For partnerships, proprietorships, or commercial firms, the system queries the GSTIN directory to identify the verified proprietor and active business address. This automated check ensures that the notice is addressed to the correct legal party, preventing technical dismissals in court.
                    </p>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Delivery Method</th>
                            <th className="p-3">Primary Evidence Required</th>
                            <th className="p-3">Statutory Protection</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">India Post Speed Post</td>
                            <td className="p-3">Official online tracking delivery report showing date, time, and recipient location.</td>
                            <td className="p-3">Section 27, General Clauses Act, 1897</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Registered Post AD</td>
                            <td className="p-3">Physical Acknowledgment Card signed by the recipient or returned envelope showing refusal.</td>
                            <td className="p-3">Section 27, General Clauses Act, 1897</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Corporate Email</td>
                            <td className="p-3">SMTP server headers, transmission logs, read receipt trackers, and Section 63 BSA certificate.</td>
                            <td className="p-3">Section 63, Bharatiya Sakshya Adhiniyam, 2023</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">WhatsApp Messaging</td>
                            <td className="p-3">Delivery receipt screenshots showing double blue ticks and Section 63 BSA certificate.</td>
                            <td className="p-3">Section 63, Bharatiya Sakshya Adhiniyam, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 5: Out-of-Court Settlement & ODR Integration */}
                <section id="resolution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Out-of-Court Settlement &amp; ODR Integration
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While a legal notice warns of potential litigation, its primary goal is often to resolve the dispute without going to court. Initiating formal litigation is time-consuming, expensive, and stressful for both parties. A well-drafted notice acts as a catalyst for out-of-court settlements, especially when supported by modern digital platforms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a notice is served through our portal, it is integrated with an <strong>Online Dispute Resolution (ODR)</strong> pipeline. ODR uses technology to resolve disputes through negotiation, mediation, or arbitration. When the recipient receives the notice, the accompanying digital message contains a secure link inviting them to resolve the matter on our negotiation dashboard. If they accept, both parties gain access to a secure, private virtual negotiation room, avoiding the need for physical meetings or confrontational discussions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In this virtual negotiation space, the parties can propose payment schedules, request waivers on interest, or suggest settlements. If needed, a neutral mediator can join the virtual room to facilitate discussions. If an agreement is reached, the platform automatically drafts a legally binding Settlement Deed. Both parties can e-sign the deed using Aadhaar e-Sign or DSC, making it an enforceable contract under the Indian Contract Act. If the debtor defaults on the settlement terms, the creditor can present the e-signed deed in court as clear proof of liability, speeding up subsequent recovery suits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient ignores the notice or refuses to settle, the platform organizes the case files, delivery reports, and Section 63 BSA certificates into a litigation-ready package. This structured package makes it simple for your advocate to transition the case to the government&apos;s e-Courts portal. The advocate can e-file a Summary Suit under Order 37 of the CPC, file a cheque bounce complaint under Section 138 of the NI Act, or approach the Labour Court for unpaid salary, ensuring your case moves forward efficiently.
                    </p>
                  </div>
                </section>

                {/* Section 6: Case Studies, Reviews & FAQs */}
                <section id="cases-faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Case Studies, Reviews &amp; FAQs
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sending a legal notice online has helped hundreds of individuals and businesses recover outstanding funds without resorting to expensive, long-drawn litigation. Below are three representative case studies:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Trade Receivable</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹5.4 Lakhs Outstanding Invoice</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A vendor in Pune faced defaults on B2B invoices from a distributor. The distributor claimed they never received the invoices. We verified the distributor&apos;s GSTIN and sent the notice via corporate email and WhatsApp. The distributor cleared the dues to avoid insolvency proceedings.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Personal Loan Recovery</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹2.5 Lakhs Loan from Friend</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A lender in Bangalore had given a ₹2.5L personal loan to a friend. The borrower went silent, ignoring physical letters. We drafted the notice and served it via WhatsApp, with the read status certified under Section 63 BSA. The borrower agreed to a settlement plan.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Salary Dues Recovery</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.8 Lakhs unpaid wages</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A software engineer in Mumbai was denied his FNF settlement by a startup. Follow-up emails went unanswered. We drafted a notice and sent it to the startup&apos;s registered address. The company processed the payment to avoid legal disputes.
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
                <h3 className="text-sm font-black mb-3">Send Legal Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We match you with a panel advocate, handle the custom drafting, physically post the notice, and track its delivery in real-time.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Intake
                </button>
              </div>

              {/* Related Templates Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-black text-slate-900 mb-4">Notice Templates</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/send-a-legal-notice/airline-refund-not-received" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Airline Refund Not Received
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-a-legal-notice/company-refusing-refund" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Company Refusing Refund
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-a-legal-notice/defective-product-refund" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Defective Product Refund
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-a-legal-notice/online-refund-not-received" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Online Refund Not Received
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-a-legal-notice/online-shopping-dispute" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Online Shopping Dispute
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-a-legal-notice/unfair-trade-practice-complaint" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Unfair Trade Practice Complaint
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-a-legal-notice/wrong-product-delivered" className="text-xs font-medium text-slate-650 hover:text-[#DC2626] transition-colors flex items-center">
                      <span className="mr-2 text-slate-300">→</span> Wrong Product Delivered
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
