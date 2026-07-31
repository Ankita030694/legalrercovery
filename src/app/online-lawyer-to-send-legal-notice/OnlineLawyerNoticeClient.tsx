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
    question: "Why should I hire an online lawyer to send a legal notice rather than drafting it myself?",
    answer: "While you can legally draft and send a personal demand letter, hiring a licensed advocate to send a formal legal notice carries significantly more weight. A notice drafted on an advocate's official letterhead signals to the debtor that you are serious and prepared to initiate litigation. Furthermore, advocates possess the legal expertise to analyze your contract, structure the chronological facts, cite the correct statutory provisions (e.g. Indian Contract Act, Transfer of Property Act), and draft the warning clauses to protect your interests, preventing factual admissions that could weaken your case in court."
  },
  {
    question: "What are the typical fees charged by an online lawyer to send a legal notice in India?",
    answer: "Advocate fees for legal notices in India are not regulated and can vary from ₹1,500 to ₹10,000+ based on the lawyer's experience and the complexity of the matter. Traditional offline law firms often charge separate counseling fees, typing charges, and postal markups. On LegalRecovery, we provide a transparent, flat-fee pricing model starting at ₹999 per opposing party. This all-inclusive rate covers advocate vetting, custom drafting on letterhead, client dashboard modifications, Speed Post booking, and email/WhatsApp dispatches with tracking."
  },
  {
    question: "How does the advocate matching and onboarding process work online?",
    answer: "Our portal automates the advocate-client intake pipeline. You complete a guided online questionnaire outlining your case details and upload supporting documents (contracts, invoices, ledger statements) to our encrypted cloud vault. The system routes your case to a panel advocate specializing in debt recovery or civil disputes. The advocate reviews the files, drafts the notice, and uploads it to your personal dashboard for your review and approval before final dispatch."
  },
  {
    question: "Is digital signing of a legal notice by an advocate legally valid in court?",
    answer: "Yes. Under Section 5 and Section 15 of the Information Technology Act, 2000, digital signatures have the same legal standing as wet-ink signatures. High Courts and District Courts across India accept digitally signed Vakalatnamas, notices, and pleadings. The assigned advocate e-signs the notice PDF using their registered Digital Signature Certificate (DSC), which verifies their identity and enrollment details for court records."
  },
  {
    question: "How do online advocates prove the delivery of a notice in court?",
    answer: "Delivery is proved through a combination of physical and digital records. For physical dispatches, the 13-digit consignment number from India Post is updated on your dashboard, showing delivery reports in real-time. For electronic service (WhatsApp and email), service is proved by presenting read receipts and delivery logs accompanied by a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, validating the electronic record."
  },
  {
    question: "What is constructive service and what happens if the debtor refuses the notice?",
    answer: "Constructive service is a legal principle which states that if a legal notice is sent via Registered Post AD or Speed Post to the correct registered address of the recipient, and the recipient refuses to accept it, or the letter returns as 'unclaimed' after multiple attempts, the court accepts it as served. This is backed by Section 27 of the General Clauses Act, 1897, preventing debtors from evading legal actions by simply refusing delivery."
  },
  {
    question: "Can an online lawyer help me resolve the dispute through an out-of-court settlement?",
    answer: "Yes, online legal notices sent through our portal integrate with an Online Dispute Resolution (ODR) pipeline. The notice served contains a secure digital link inviting the recipient to join an online negotiation room. If they join, both parties can discuss payment plans, request interest waivers, and reach a settlement on our dashboard. Once resolved, the portal drafts a binding settlement deed that both parties e-sign."
  },
  {
    question: "What happens if the recipient ignores the legal notice sent by the advocate?",
    answer: "If the compliance window (usually 15 days) expires and the recipient ignores the notice, the advocate can initiate formal litigation. The portal organizes your case files and proof of service into a litigation-ready package. Your panel advocate can then e-file a Summary Suit (Order 37 CPC), a cheque bounce complaint (Section 138 NI Act), or approach the Labour Court, depending on the dispute."
  },
  {
    question: "How does the portal verify the correct address of a corporate debtor?",
    answer: "To prevent notices from failing due to wrong addresses, our system integrates database API queries. If the debtor is a company or LLP, the system queries the Ministry of Corporate Affairs (MCA) database to verify the registered office address. For proprietary firms, the system queries the GSTIN registry to verify the proprietor's name and active address, preventing clerical errors."
  },
  {
    question: "Are my uploaded files secure in the cloud vault?",
    answer: "Yes. LegalRecovery uses enterprise-grade security protocols. All documents uploaded to our vault are encrypted using SSL/TLS in transit and AES-256 encryption at rest. Access is restricted exclusively to the assigned panel advocate and the client. The information is protected under advocate-client privilege guidelines, ensuring complete privacy."
  },
  {
    question: "What is Section 126 of the Bharatiya Sakshya Adhiniyam (BSA), 2023?",
    answer: "Section 126 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 of the Indian Evidence Act, 1872) governs attorney-client privilege. It prohibits advocates from disclosing any communications made to them by their client in the course of their professional employment. This privilege covers all documents and details uploaded to our secure portal, ensuring your case data remains legally protected."
  },
  {
    question: "Can I recover the cost of hiring a lawyer to send a notice from the debtor?",
    answer: "Yes. Under Section 35 of the Code of Civil Procedure (CPC), courts have the discretion to award litigation costs to the winning party. In your legal notice and subsequent plaint, your advocate can demand that the debtor pay the costs incurred for drafting and dispatching the notice, especially if the debtor's default forced you to file a lawsuit."
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
      "name": "Online Lawyer Notice",
      "item": "https://www.legalrecovery.in/online-lawyer-to-send-legal-notice"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Online Lawyer to Send Legal Notice: Timelines, Fees, and ODR Workflows in India",
  "description": "Learn how to hire an online lawyer to draft and send a legal notice. Understand advocate fees, BCI rules, digital signing, and ODR settlement pipelines.",
  "image": "https://www.legalrecovery.in/og-online-lawyer-notice.png",
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
  "name": "Online Lawyer Legal Notice Service",
  "image": "https://www.legalrecovery.in/og-online-lawyer-notice.png",
  "description": "Hire vetted advocates online to draft, sign, and dispatch customized legal notices in India.",
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
        "name": "Amit Sharma"
      },
      "reviewBody": "Drafting my legal notice through this online advocate portal was a great experience. I uploaded my invoices, and the lawyer drafted the notice on his official letterhead within 24 hours. The debtor received the Speed Post and settled the ₹2.5 Lakhs dues immediately. Highly professional and efficient legal tech platform!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ritu Kapoor"
      },
      "reviewBody": "The Aadhaar e-signing process for the Vakalatnama was very convenient. I didn't have to print anything or visit an advocate's office. The lawyer signed the notice using his DSC under the IT Act, and the platform handled the physical and electronic dispatch. Exceptional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Venkat Raman"
      },
      "reviewBody": "Highly transparent pricing. The ₹999 flat rate covered everything, including the advocate's drafting fee and mailing charges. I tracked the delivery status directly on my dashboard and received instant updates when the post was delivered."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Rao"
      },
      "reviewBody": "The security of the document vault was my main priority. Uploading financial ledger sheets and communication logs was secure. The advocate reviewed the files, drafted a solid notice under Section 73 of the Contract Act, and recovered my dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kartik Nair"
      },
      "reviewBody": "Excellent database check. The system pulled the debtor's correct registered company office from the MCA registry, avoiding clerical errors in addressing the notice. This pre-verification is vital for any recovery action."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Preeti Singh"
      },
      "reviewBody": "The Section 63 BSA certificate provided with the WhatsApp dispatch tracking was crucial for our civil suit. The court accepted the digital service proof without hesitation. This integration of law and tech is highly impressive."
    }
  ]
};

export default function OnlineLawyerNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "shift", title: "1. The Paradigm Shift to Online Advocates" },
    { id: "statutes", title: "2. Statutory Foundations & Citations in Notice Drafting" },
    { id: "fees", title: "3. Transparent Flat-Fee Models vs. Hourly Billing" },
    { id: "ethics", title: "4. Advocate Responsibility, Professional Ethics &amp; Privilege" },
    { id: "dispatch", title: "5. Hybrid Service Delivery &amp; Digital Forensics" },
    { id: "settlement", title: "6. Out-of-Court Settlements &amp; e-Courts Transition" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Online Lawyer Notice", href: "/online-lawyer-to-send-legal-notice" },
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
              Online Lawyer to <span className="text-[#DC2626]">Send Legal Notice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Hire vetted panel advocates online, review draft notices on your dashboard, and track hybrid postal and digital dispatches in real-time.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Hire Lawyer to Send Notice
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
                
                {/* Section 1: The Paradigm Shift to Online Advocates */}
                <section id="shift" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Paradigm Shift to Online Advocates
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The traditional process of hiring an advocate to send a legal notice has often been challenging for clients. It typically involved navigating multiple offline offices, dealing with unstructured fee ranges, coping with scheduling delays, and experiencing a lack of visibility over case dispatches. For small businesses, freelancers, and individuals, these hurdles often made pursuing outstanding debts too difficult. Today, the integration of technology with professional legal services has created a paradigm shift, enabling clients to hire <strong>online lawyers</strong> and manage legal notice dispatches completely digitally.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This digital shift has transformed the pre-litigation process. Clients are no longer restricted to local advocates; instead, they can access a vetted panel of advocates specializing in civil recovery, tenancy, or corporate disputes across India. By using secure web dashboards, clients can complete case intakes, upload transaction files to encrypted cloud storage, and consult with legal professionals through secure video or telephonic channels, removing the need for physical office visits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At the same time, online advocate services enhance the speed and transparency of drafting. Once the case details are submitted, the matched panel advocate reviews the files and drafts the customized notice on their official letterhead. The draft is uploaded directly to the client&apos;s dashboard, allowing the client to review, edit, or approve the text in real-time. This automated workflow ensures notices are prepared, verified, and dispatched within 24 to 48 hours, providing a level of efficiency that traditional chambers struggle to match.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Ultimately, online advocate portals make access to justice simple and transparent. They enable individuals and businesses to protect their legal rights, send structured demand notices, and resolve financial defaults efficiently, bridging the gap between traditional legal procedures and technology.
                    </p>
                  </div>
                </section>

                {/* Section 2: Statutory Foundations & Citations in Notice Drafting */}
                <section id="statutes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Statutory Foundations &amp; Citations in Notice Drafting
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice must be grounded in correct statutory foundations to be effective in subsequent court trials. While a personal demand letter simply requests payment, a formal legal notice sent through an advocate cites specific statutes that define the recipient&apos;s liability and the claimant&apos;s rights. A qualified advocate ensures that these citations are accurate:
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary statutory notice categories and their legal bases include:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Section 80 of the Code of Civil Procedure (CPC), 1908</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          This is a mandatory statutory notice required before initiating a civil suit against a government authority or public officer. The law prescribes a strict <strong>2-month waiting period (60 days)</strong> from the date of service to allow the government to resolve the claim. Failing to comply with Section 80 CPC, unless the court grants leave for urgent relief under Section 80(2), will result in the rejection of the plaint under Order 7, Rule 11 of the CPC.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. Section 138 of the Negotiable Instruments Act, 1881</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          For cheque bounce cases, the statutory notice must be sent within <strong>30 days</strong> of receiving the bank&apos;s cheque return memo. The notice must demand the payment of the bounced amount within a strict <strong>15-day compliance window</strong>. If the drawer fails to make the payment within these 15 days, a criminal complaint must be filed in the Magistrate&apos;s Court within 30 days.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Section 106 of the Transfer of Property Act, 1882</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          This section governs the termination of leases. Residential or commercial leases require a <strong>15-day notice period</strong> to terminate, while agricultural or manufacturing leases require a <strong>6-month notice period</strong>. The notice must be in writing and signed by the landlord or their representative.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">D. Section 70 &amp; 73 of the Indian Contract Act, 1872</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          In B2B invoice defaults or freelancer payments, the notice is based on Section 73 (compensation for losses arising from breach of contract) and Section 70 (Quantum Meruit, claiming compensation for services rendered). The notice must specify the contract terms breached, document the losses, and provide a clear cure period before initiating civil recovery suits or arbitration.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Transparent Flat-Fee Models vs. Hourly Billing */}
                <section id="fees" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Transparent Flat-Fee Models vs. Hourly Billing
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the primary advantages of hiring an online advocate is financial transparency. Traditional offline advocates often use variable billing rates, charging separate fees for consultations, draft preparations, clerical typing, and postal dispatch costs. This lack of standardization can make it difficult for clients to budget their recovery expenses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Online platforms replace these challenges with a standardized, flat-fee pricing model. On LegalRecovery, services start at a transparent rate of ₹999 per opposing party. This flat fee is all-inclusive, covering:
                    </p>
                    
                    <ul className="list-disc list-inside text-sm text-slate-650 space-y-2">
                      <li>Professional case review and document vetting by a panel advocate.</li>
                      <li>Customized drafting on the advocate&apos;s official letterhead.</li>
                      <li>Client dashboard access for draft review and modifications.</li>
                      <li>Physical Speed Post booking with India Post.</li>
                      <li>Electronic delivery via verified corporate email and WhatsApp.</li>
                      <li>Real-time tracking dashboard updates.</li>
                    </ul>

                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, under Section 35 of the Code of Civil Procedure (CPC), courts have the discretion to award litigation costs to the winning party. By using a flat-fee service, you establish a clear, documented record of your pre-litigation expenses. Your advocate can demand that the debtor refund these costs in the notice, allowing you to recover your drafting and dispatch expenses if the debtor defaults and forces you to file a lawsuit.
                    </p>
                  </div>
                </section>

                {/* Section 4: Advocate Responsibility, Professional Ethics & Privilege */}
                <section id="ethics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Advocate Responsibility, Professional Ethics &amp; Privilege
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Hiring an advocate online is governed by the same ethical and professional rules that apply to traditional offline practices. In India, advocates are regulated by the <strong>Advocates Act, 1961</strong> and the Bar Council of India (BCI) Rules. These regulations are designed to protect client interests and maintain professional standards.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      Our portal operates within these strict ethical frameworks:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Active Credentials and Directory Verification</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          To protect clients against unauthorized practice, our portal enforces a strict verification process. Every panel advocate must submit their certificate of enrollment issued by their State Bar Council and their BCI registration details. We cross-reference enrollment numbers with official directories, ensuring clients consult only with active, licensed advocates.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. Sanctity of Advocate-Client Privilege</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Confidentiality is a fundamental duty of the legal profession. Section 126 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the Indian Evidence Act, prohibits advocates from disclosing any communications made to them by their client in the course of their professional employment. Our portal secures all uploaded documents and case details using AES-256 encryption, ensuring complete client privacy.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Compliance with BCI Rule 36</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          BCI Rule 36 strictly prohibits advocates from advertising their services or soliciting legal work. Our portal complies with this rule by acting as a neutral technology provider. We do not advertise individual advocates, list them with promotional ratings, or solicit cases for specific lawyers. Instead, we provide case assembly tools and route files to independent panel advocates, maintaining professional compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Hybrid Service Delivery & Digital Forensics */}
                <section id="dispatch" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Hybrid Service Delivery &amp; Digital Forensics
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To be effective in court, a legal notice must have indisputable proof of delivery. If a debtor claims they never received the notice, the plaintiff must present clear service records. Our portal addresses this by combining physical dispatches with digital service tracking.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Proving service relies on two key legal frameworks:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-base font-black text-slate-900 mb-2">1. Constructive Service under the General Clauses Act</h4>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          When the notice is sent physically via Speed Post or Registered Post AD, its service is protected under Section 27 of the General Clauses Act, 1897. This statute states that if a letter is correctly addressed, prepaid, and posted, service is deemed completed. Even if the recipient refuses to accept the post, or if it is returned as &quot;unclaimed&quot; or &quot;door locked,&quot; the court accepts the returned envelope as proof of constructive service.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-black text-slate-900 mb-2">2. Section 63 BSA 2023 Digital Evidence Certificates</h4>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For electronic delivery (via WhatsApp or email), the evidentiary rules are governed by Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). To prove electronic service in court, you must present delivery logs, read receipts, or WhatsApp blue ticks, accompanied by a signed certificate under Section 63 of the BSA verifying the device&apos;s authenticity and data integrity. Our portal automatically drafts and packages this Section 63 BSA certificate for your advocate to submit.
                        </p>
                      </div>
                    </div>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Dispatch Method</th>
                            <th className="p-3">Proof of Service Record</th>
                            <th className="p-3">Statutory Basis</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">India Post Speed Post</td>
                            <td className="p-3">Consignment delivery status report showing date, time, and recipient location.</td>
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

                {/* Section 6: Out-of-Court Settlements & e-Courts Transition */}
                <section id="settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Out-of-Court Settlements &amp; e-Courts Transition
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While a legal notice acts as a warning, its primary goal is often to resolve the dispute without going to court. Initiating formal litigation is time-consuming and expensive. A well-drafted notice served through an online portal acts as a catalyst for out-of-court settlements, especially when integrated with modern Online Dispute Resolution (ODR) systems.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a notice is served through our portal, the recipient receives a secure digital link inviting them to resolve the dispute on our negotiation dashboard. If they join, both parties can discuss payment plans, request interest waivers, and reach a settlement on our dashboard. Once resolved, the portal drafts a binding settlement deed that both parties e-sign using Aadhaar e-Sign or DSC, creating an enforceable contract under the Indian Contract Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient ignores the notice or refuses to settle, the platform organizes your case files, delivery reports, and Section 63 BSA certificates into a litigation-ready package. This structured package makes it simple for your advocate to transition the case to the government&apos;s e-Courts portal. The advocate can e-file a Summary Suit under Order 37 of the CPC, file a cheque bounce complaint under Section 138 of the NI Act, or approach the Labour Court for unpaid salary, ensuring your case moves forward efficiently.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: B2B Invoices</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹5.4 Lakhs Invoice Dues</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A vendor in Pune faced defaults on B2B invoices from a distributor. We verified the distributor&apos;s GSTIN and sent the notice via Speed Post and corporate email. The distributor cleared the dues to avoid insolvency proceedings.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Personal Loan</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹2.5 Lakhs Loan</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A lender in Bangalore had given a ₹2.5L friendly loan. The borrower went silent, evading physical service. We drafted a notice and served it via WhatsApp, with the read status certified under Section 63 BSA. The borrower agreed to a settlement plan.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Salary Recovery</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.8 Lakhs Unpaid Wages</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A software engineer in Mumbai was denied his FNF settlement by a startup. We drafted a notice and sent it to the startup&apos;s registered address. The company processed the payment to avoid legal disputes.
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
                <h3 className="text-sm font-black mb-3">Hire Online Lawyer</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Connect with a panel advocate, handle the custom drafting on letterhead, and physically post the notice with tracking.
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
