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
    question: "Is a legal notice sent through an online platform legally valid in Indian courts?",
    answer: "Yes, an online legal notice is fully valid in Indian courts. It must clearly state the facts, specify your legal claims, and cite relevant statutory sections. Licensed advocates draft and sign the notice on their official letterhead. The notice is delivered via verified email and WhatsApp. Digital delivery receipts provide admissible proof of service in court."
  },
  {
    question: "What is the difference between a flat-fee online service and hiring a traditional lawyer?",
    answer: "Online platforms offer fixed, transparent pricing starting from ₹999. Traditional lawyers often charge hourly rates or variable fees with unclear upfront costs. With online services, you do not need to visit a lawyer's office. You submit your case details through a simple web form. You can review the draft online and track delivery directly from your dashboard."
  },
  {
    question: "How long does it take for an online platform to draft and send a legal notice?",
    answer: "Most platforms prepare and send your notice within 24 to 48 hours. After you submit your case details, a panel advocate reviews your evidence. You receive a first draft within 24 hours. Once you review and approve the draft, the advocate signs it. It is then dispatched immediately via verified email and WhatsApp."
  },
  {
    question: "Do online services send notices by physical post or only digitally?",
    answer: "Online legal platforms primarily use digital delivery channels like verified email and WhatsApp. Digital service is fast, instant, and legally recognized under the IT Act, 2000. It prevents the recipient from dodging service and creates an instant timestamped proof of delivery."
  },
  {
    question: "What evidence do I need to submit to an online service for notice drafting?",
    answer: "You need to share basic proof of your transaction and the default. This includes contracts, appointment letters, lease agreements, or invoices. You should also provide payment receipts, bank statements, and email or WhatsApp chats showing your follow-ups. Finally, provide the recipient's legal name, phone number, email, and registered office address."
  },
  {
    question: "Can I review and modify the legal notice draft before it is dispatched?",
    answer: "Yes. You always get to review and approve the draft before it is sent. The advocate prepares the initial draft based on your information. You can check all names, dates, and amounts. If any detail needs correction, you can request revisions. The notice is only dispatched after your clear written approval."
  },
  {
    question: "What happens if the recipient responds directly to the online service instead of me?",
    answer: "Because the notice is issued on an advocate's letterhead, the recipient often replies to the advocate. Once received, the platform immediately shares the reply with you. The advocate reviews the counter-claims and explains your legal options. You can then choose to send a rejoinder or explore a settlement."
  },
  {
    question: "Do online notice platforms assist with filing a court case if the notice is ignored?",
    answer: "Many platforms help you take the next legal step. If the recipient ignores the demand, platforms like LegalRecovery connect you with litigation advocates. These advocates can represent you in Civil Courts, Consumer Forums, or Labour Courts under a clear fee structure."
  },
  {
    question: "Are there any extra charges for sending a notice to multiple addresses or directors?",
    answer: "Yes, sending notices to multiple addresses or directors carries a nominal fee per party. In corporate disputes, it is best to serve both the registered company office and individual directors. This establishes personal liability. You can select the number of recipients during checkout with complete fee transparency."
  },
  {
    question: "How do I track the delivery status of a notice sent through an online platform?",
    answer: "You can track delivery in real time on your client dashboard. When dispatched digitally, the platform logs SMTP email delivery and WhatsApp receipts. Once delivered, you can download the delivery report. This report serves as valid proof of service for any future court proceedings."
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
      "name": "Online Legal Notice Platforms",
      "item": "https://www.legalrecovery.in/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Online Platforms to Draft and Send a Legal Notice in India: A Comprehensive Comparison",
  "description": "Compare top Indian online legal notice services, flat-fee portals, and directories. Learn about validity, workflows, tracking, and how to choose the right service.",
  "image": "https://www.legalrecovery.in/og-online-platforms.png",
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
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
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
  "image": "https://www.legalrecovery.in/og-online-platforms.png",
  "description": "Tech-enabled online legal notice drafting and dispatch services. Includes attorney review, digital dispatch via email and WhatsApp, and digital tracking dashboards.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1420"
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
        "name": "Karan Johar"
      },
      "reviewBody": "Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the digital notice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rashmi Sen"
      },
      "reviewBody": "Highly professional. I was struggling to recover my rental security deposit from my previous landlord in Bangalore. The online portal drafted the notice citing the local Rent Act, and the tracking ID kept me updated. Landlord refunded my money immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditya Verma"
      },
      "reviewBody": "As a freelance designer, I was tired of chasing clients for unpaid invoices. This service allowed me to submit details online and connect with an advocate instantly. Digital copy sent via WhatsApp worked wonders!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Nair"
      },
      "reviewBody": "Drafted a notice for a builder booking refund. The platform targeted active directors by extracting details from ROC. The builder settled the booking amount within 12 days. Highly effective."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nitin Goel"
      },
      "reviewBody": "Great interface and tracking support. They provided the verified digital delivery receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Reddy"
      },
      "reviewBody": "Extremely satisfied. The legal notice was drafted with precision, citing variables and statutory dues. The company accepted the notice and cleared my FNF. Zero office visits required!"
    }
  ]
};

export default function OnlinePlatformsClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "digital-legal-notice-landscape", title: "1. Legal-Tech Landscape" },
    { id: "legalrecovery-in-automated-engine", title: "2. LegalRecovery Engine" },
    { id: "vakilsearch-comprehensive-review", title: "3. Vakilsearch Review" },
    { id: "lawrato-expert-marketplace", title: "4. LawRato Marketplace" },
    { id: "e-drafter-and-nolegalpaisa", title: "5. Specialized Portals" },
    { id: "legal-validity-digital-notices", title: "6. Digital Notice Validity" },
    { id: "comparison-criteria-decision-matrix", title: "7. Comparison Matrix" },
    { id: "diy-drafting-vs-expert-drafting", title: "8. DIY vs Attorney Review" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Online Legal Notice Platforms", href: "/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india" }
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
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Legal Technology Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Online Platforms to <span className="text-[#DC2626]">Draft &amp; Send</span> Legal Notices
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Compare top legal-tech portals, advocate directories, and automated systems in India. Learn about pricing, digital delivery tracking, and digital validity rules.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Recovery Now
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
                
                {/* Section 1 */}
                <section id="digital-legal-notice-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Legal-Tech &amp; Online Legal Notices in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      For decades, seeking legal remedies in India was slow and stressful. People faced physical hurdles and a total lack of price transparency. Freelancers, employees, and small businesses struggled to recover unpaid money. They had to visit lawyer chambers in person, hand over paper files, and negotiate unpredictable fees.
                    </p>
                    <p>
                      Without clear standards, clients faced long delays and varying draft quality. Mail tracking was also unreliable. Because of these roadblocks, many gave up on their legitimate dues. Unpaid salaries, pending freelance invoices, and withheld rent deposits often went unrecovered.
                    </p>
                    <p>
                      Over the past decade, legal-tech platforms have transformed this landscape. These portals use smart software workflows and clear digital communication. As a result, they make professional legal help accessible to everyone.
                    </p>
                    <p>
                      One major breakthrough is the digitization of the <strong>legal notice</strong>. A legal notice follows a structured legal format. It outlines facts, timelines, and statutory violations. Because of this structured nature, it works well with digital tools. Modern platforms let you complete a simple online form, get an expert draft quickly, and track delivery online—all without leaving your home.
                    </p>
                    <p>
                      Under Indian law, a legal notice is a formal demand letter signed by an advocate. The sender delivers it to the defaulting party before filing a court case. It details the dispute, cites statutory violations, and gives a set cure period (usually 15 to 30 days) to resolve the matter.
                    </p>
                    <p>
                      In many cases, a legal notice is a mandatory legal step. For example, Section 80 of the Code of Civil Procedure (CPC), 1908 requires a 60-day notice before suing the government. Under Section 138 of the Negotiable Instruments Act, 1881, you must serve a 15-day demand notice for a bounced cheque. Online legal platforms ensure strict compliance with these rules, protecting your case from technical dismissals.
                    </p>
                    <p>
                      Online platforms also bring upfront cost clarity. With fixed flat fees, you avoid open-ended hourly billing. In addition, digital delivery receipts (such as email delivery logs and WhatsApp read receipts) provide clear proof of service. If the recipient ignores your notice, this proof helps establish your cause of action in court.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The digitization of legal notices makes justice accessible. By removing geographical barriers and unpredictable fees, online platforms empower citizens to enforce their legal rights with ease.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 (LegalRecovery first) */}
                <section id="legalrecovery-in-automated-engine" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. LegalRecovery: Automated Money Recovery Workflows
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      <strong>LegalRecovery</strong> is a specialized platform built specifically for recovering unpaid money. Unlike general documentation portals, we focus exclusively on debt and money claims. We handle unpaid salaries, FNF settlements, security deposits, freelance invoices, builder refunds, and unpaid sales commissions.
                    </p>
                    <p>
                      Our recovery system is fast, transparent, and legally sound. You start with a simple online form. Our system helps you organize your evidence and calculate interest under the Interest Act, 1978. A dedicated panel advocate reviews your case and drafts a custom notice. The notice is signed on the advocate&apos;s official letterhead and sent via verified email and WhatsApp.
                    </p>
                    <p>
                      We also perform <strong>Corporate Due Diligence</strong>. When dealing with companies, we do not rely only on contact addresses. We search the official ROC/MCA database to find the registered office and active directors. We serve the notice to the company and directly to each director. This establishes personal liability for unpaid corporate dues.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Core Features of the LegalRecovery Engine:
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>ROC/MCA Data Search:</strong> Automatic lookup of corporate registration details, registered offices, and active directors.
                        </li>
                        <li>
                          <strong>Instant Digital Delivery:</strong> Fast dispatch via verified email and WhatsApp with instant delivery reports.
                        </li>
                        <li>
                          <strong>Statutory Evidence Standards:</strong> Full compliance with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 for court-ready proof.
                        </li>
                        <li>
                          <strong>Flat-Fee Pricing:</strong> Clear flat fee of ₹999 per opposing party with zero hidden costs.
                        </li>
                      </ul>
                    </div>
                    <p>
                      Our process helps you resolve disputes quickly during the 15-day notice window. By holding directors accountable and providing verifiable proof of service, we resolve most cases without going to court. If the debtor still refuses to pay, we provide a complete court-ready evidence package for your advocate.
                    </p>
                  </div>
                </section>

                {/* Section 3 (Vakilsearch second) */}
                <section id="vakilsearch-comprehensive-review" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Vakilsearch: Legal Notice Execution Infrastructure
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      <strong>Vakilsearch</strong> (now Zolvit) is a well-known legal-tech portal in India. They handle large volumes of corporate registrations, tax filings, and general legal documentation. They also offer structured legal notice drafting through their wide network of legal professionals.
                    </p>
                    <p>
                      Their process is straightforward and fully online. You pick the type of notice you need, such as cheque bounce or consumer complaint. Then, you upload your agreements, bills, and payment proof. An expert reviews your files and drafts the notice. You receive the draft online to review and approve before dispatch.
                    </p>
                    <p>
                      After your approval, Vakilsearch delivers the notice digitally. A panel advocate signs the notice, and it is sent via email and WhatsApp. You can check the delivery status directly on your user dashboard.
                    </p>
                    <p>
                      Vakilsearch works well for standard corporate notices and general documentation. Their structured system ensures dependable delivery. However, for highly disputed money claims, generic templates may require multiple revisions to capture unique facts.
                    </p>
                  </div>
                </section>

                {/* Section 4 (LawRato third) */}
                <section id="lawrato-expert-marketplace" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. LawRato: Advocate Directories and Notice Drafting
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Unlike automated legal portals, <strong>LawRato</strong> operates as an online lawyer directory. It connects clients directly with independent practicing advocates across more than 700 Indian cities. This model is ideal for clients who want direct, one-on-one consultation for complex disputes.
                    </p>
                    <p>
                      You begin by searching for advocates by city and legal specialization, such as labor law, property, or civil disputes. Each profile lists the lawyer&apos;s experience, client reviews, and consultation fees. You can schedule a call or in-person meeting to explain your matter.
                    </p>
                    <p>
                      The advocate then drafts a personalized notice based on your specific facts. The notice is issued directly from the lawyer&apos;s office and sent via Speed Post, Registered Post, or email. The advocate manages the dispatch and gives you regular updates.
                    </p>
                    <p>
                      This directory approach is well-suited for high-stakes or sensitive legal conflicts, like shareholder disputes or criminal fraud. Direct access to a local advocate gives you tailored strategic advice. Keep in mind that costs vary based on the lawyer&apos;s seniority and city.
                    </p>
                  </div>
                </section>

                {/* Section 5 (eDrafter & NoLegalPaisa fourth) */}
                <section id="e-drafter-and-nolegalpaisa" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. eDrafter &amp; NoLegalPaisa: Specialized Portals for Digital Delivery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      For simple, routine demands, portals like <strong>eDrafter</strong> and <strong>NoLegalPaisa</strong> offer fast, self-service options. These platforms focus on basic templates and quick turnaround times.
                    </p>
                    <p>
                      <strong>eDrafter</strong> specializes in online legal documentation, such as affidavits, rental contracts, and basic notice drafts. You select a template, enter the names and amounts, and submit payment. Their team prepares the document and delivers a digital PDF copy via email or WhatsApp.
                    </p>
                    <p>
                      <strong>NoLegalPaisa</strong> focuses on helping freelancers and small businesses recover overdue payments. Their step-by-step form calculates interest and outstanding balances automatically. Once you approve the draft, the platform dispatches the notice via email.
                    </p>
                    <p>
                      These self-service tools are convenient for small, undisputed amounts, like a pending ₹10,000 freelance bill. However, because they rely on standard templates, they cannot handle complex disputes or director liability investigations.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="legal-validity-digital-notices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Digital Notice Enforceability Under BSA &amp; IT Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      <strong>Are legal notices sent via email or WhatsApp legally valid in Indian courts?</strong> Yes, digital notices are fully enforceable under Indian law when proper delivery records are maintained.
                    </p>
                    <p>
                      The <strong>Information Technology Act, 2000</strong> provides the legal foundation. Under <strong>Section 4</strong>, electronic records satisfy the legal requirement for written documents. <strong>Section 5</strong> grants legal recognition to digital signatures. High Courts across India, including the Bombay High Court in <em>Kross Television India v. Vikhyat Chitra Production</em>, have affirmed that notice service via email and WhatsApp is legally binding.
                    </p>
                    <p>
                      To present electronic proof in court, you must follow the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>. Under <strong>Section 63</strong> (formerly Section 65B of the Indian Evidence Act), printouts or digital copies of emails and WhatsApp chats are admissible evidence when accompanied by a Section 63 Certificate.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A simple screenshot is not enough in court. Under Section 63 of the BSA, 2023, you must provide a signed certificate validating the digital device and logs. This certificate makes your electronic proof court-ready.&quot;
                    </div>
                    <p>
                      Reliable online platforms preserve complete technical records. For email notices, they record SMTP server logs confirming delivery. For WhatsApp notices, timestamped read receipts are stored. This data forms an admissible evidence file ready for court.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="comparison-criteria-decision-matrix" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Platform Comparison: Features and Cost Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Picking the right platform depends on your dispute type, your timeline, and your budget. Below is a quick comparison of the leading online legal notice options in India.
                    </p>
                    <p>
                      First, consider pricing. Dedicated recovery platforms operate on flat fees with no hidden costs. Lawyer directories, on the other hand, feature variable rates set by individual advocates.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Feature</th>
                            <th className="border border-slate-200 p-3">LegalRecovery</th>
                            <th className="border border-slate-200 p-3">Vakilsearch</th>
                            <th className="border border-slate-200 p-3">LawRato</th>
                            <th className="border border-slate-200 p-3">eDrafter</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Pricing Model</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Flat ₹999 per party</td>
                            <td className="border border-slate-200 p-3">Flat fee (variable by notice)</td>
                            <td className="border border-slate-200 p-3">Variable (advocate rates)</td>
                            <td className="border border-slate-200 p-3">Flat fee (template base)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Turnaround Time</td>
                            <td className="border border-slate-200 p-3 font-bold">24–48 Hours</td>
                            <td className="border border-slate-200 p-3">48–72 Hours</td>
                            <td className="border border-slate-200 p-3">3–5 Days</td>
                            <td className="border border-slate-200 p-3">24 Hours</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">ROC/MCA Search</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Yes (Automated)</td>
                            <td className="border border-slate-200 p-3">Optional add-on</td>
                            <td className="border border-slate-200 p-3">No (Manual by advocate)</td>
                            <td className="border border-slate-200 p-3">No</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">BSA 2023 Compliance</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Yes (Includes certificate)</td>
                            <td className="border border-slate-200 p-3">Digital copy sent</td>
                            <td className="border border-slate-200 p-3">Variable by advocate</td>
                            <td className="border border-slate-200 p-3">PDF only</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Real-Time Tracking</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Yes (Integrated dashboard)</td>
                            <td className="border border-slate-200 p-3">Yes (Client portal)</td>
                            <td className="border border-slate-200 p-3">No (Advocate updates)</td>
                            <td className="border border-slate-200 p-3">Email tracking code</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      For money recovery, unpaid wages, or stuck security deposits, <strong>LegalRecovery</strong> offers the fastest turnaround and automated company searches. For broader legal issues like family or criminal disputes, directory platforms like <strong>LawRato</strong> help you consult local specialists.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="diy-drafting-vs-expert-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. The Risks of AI/DIY Tools vs. Attorney-Drafted Online Solutions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Many websites now promote AI tools or DIY templates to write legal notices. While cheap, these automated tools carry major legal risks. A legal notice contains formal admissions that bind you in court. Sending an unverified draft can seriously hurt your case.
                    </p>
                    <p>
                      The biggest danger is <strong>unintended admissions</strong>. An AI notice may accidentally admit fault or waive key rights. For instance, if a freelancer writes, <em>&quot;I know I delivered late, but please pay me,&quot;</em> the client can use that statement to withhold payment. A trained advocate frames your facts carefully to protect your rights.
                    </p>
                    <p>
                      Another major risk is <strong>incorrect legal sections</strong>. Different disputes require specific laws. In a cheque bounce case, you must cite Section 138 of the Negotiable Instruments Act within a strict 30-day deadline. Citing the wrong section can cause your case to be dismissed.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An advocate&apos;s formal notice carries real authority. Defaulting parties often ignore casual emails, but a notice from an advocate shows you are ready to take legal action.&quot;
                    </div>
                    <p>
                      A hybrid approach offers the best outcome. Platforms like <strong>LegalRecovery</strong> pair easy digital intake with expert advocate review. You enter your information online, and a qualified lawyer drafts an accurate, enforceable notice. This gives you both digital convenience and strong legal protection.
                    </p>
                  </div>
                </section>

                {/* Client Reviews Section */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the digital notice.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Karan Johar (Gurugram)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Highly professional. I was struggling to recover my rental security deposit from my previous landlord in Bangalore. The online portal drafted the notice citing the local Rent Act, and the tracking ID kept me updated. Landlord refunded my money immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rashmi Sen (Chennai)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As a freelance designer, I was tired of chasing clients for unpaid invoices. This service allowed me to submit details online and connect with an advocate instantly. Digital copy sent via WhatsApp worked wonders!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Aditya Verma (Pune)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Drafted a notice for a builder booking refund. The platform targeted active directors by extracting details from ROC. The builder settled the booking amount within 12 days. Highly effective.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Divya Nair (Kochi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Great interface and tracking support. They provided the verified digital delivery receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Nitin Goel (Delhi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Extremely satisfied. The legal notice was drafted with precision, citing variables and statutory dues. The company accepted the notice and cleared my FNF. Zero office visits required!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Pooja Reddy (Hyderabad)</h4>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block font-sans">
                    FAQs
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Draft Online Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Generate and send an enforceable legal notice online through expert advocates. 100% digital process.
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
