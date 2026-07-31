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
    question: "What is an online legal notice portal and how does it operate in India?",
    answer: "An online legal notice portal is a digital workspace that connects clients with legal professionals to draft and serve notices. The process is completely online: you submit case details through an intake questionnaire, upload files to an encrypted document vault, review drafts on a digital dashboard, and sign documents electronically. The platform manages advocate assignment, physical speed post booking, and email/WhatsApp dispatch tracking."
  },
  {
    question: "Is digital signing of a legal notice legally valid under Indian law?",
    answer: "Yes, digital signatures are legally recognized under Section 5 of the Information Technology Act, 2000. When an advocate electronically signs a legal notice PDF using their registered digital signature, it carries the same legal validity and weight as a physically signed and stamped paper in a court of law."
  },
  {
    question: "How does the portal verify the correct legal name and address of a debtor?",
    answer: "Our portal integrates database API queries to verify entity details. For private limited companies and LLPs, we pull active registered office details directly from the Ministry of Corporate Affairs (MCA) database. For proprietary and trading firms, we query the GSTIN registry to identify the verified legal proprietor and active business address, preventing naming errors that could weaken the notice."
  },
  {
    question: "What is Online Dispute Resolution (ODR) and how does it relate to legal notices?",
    answer: "Online Dispute Resolution (ODR) is a framework that uses technology to resolve disputes out of court through negotiation, mediation, or arbitration. An online legal notice is the entry point of the ODR pipeline. If the debtor responds to the notice, the platform offers digital dispute rooms, negotiation dashboards, and electronic settlement deed signing to resolve the matter without physical court visits."
  },
  {
    question: "Can I track the delivery status of my speed post notice online?",
    answer: "Yes, our portal provides automated tracking. Once the notice is physically booked via India Post, the 13-digit consignment number is integrated with your user dashboard. The system updates the delivery tracking status (booked, in transit, delivered, or refused) in real-time, providing a court-admissible delivery report."
  },
  {
    question: "How does the portal assist if the debtor ignores the online notice?",
    answer: "If the 15-day compliance window expires and the debtor ignores the notice, the portal organizes the case files, delivery reports, and Section 63 BSA certificates into a litigation-ready package. We then assist you with the next legal steps, such as e-filing a Summary Suit (Order 37 CPC) or a Cheque Bounce complaint (Section 138 NI Act) through the e-Courts portal."
  },
  {
    question: "What supporting documents do I need to upload to the online vault?",
    answer: "You should upload all documents that establish the transaction and default: signed contracts or promissory notes, invoices, bank statements showing the transfer of funds, ledger books, and screenshots of WhatsApp/email communications where the debtor acknowledged the liability or promised to pay."
  },
  {
    question: "Are my documents secure in the portal's cloud vault?",
    answer: "Yes, all documents uploaded to the portal are encrypted in transit and at rest using enterprise-grade SSL/TLS protocols. Access is strictly restricted to the assigned panel advocate and the client. The information is protected under advocate-client privilege guidelines, ensuring complete privacy."
  },
  {
    question: "What is the flat pricing for sending a notice through the portal?",
    answer: "We offer flat-fee pricing starting at ₹999 per opposing party. This transparent rate covers advocate consultation, customized drafting, legal review, physical printing, Speed Post booking and dispatch, and digital delivery via email and WhatsApp. There are no hourly consultation rates or hidden postage fees."
  },
  {
    question: "How long does it take for a panel advocate to draft the notice?",
    answer: "Once you submit your case details and complete the payment, the information is reviewed by our legal team. The assigned panel advocate typically drafts the customized notice and uploads it to your dashboard for review within 24 to 48 hours."
  },
  {
    question: "What is a multi-stage reminder notice and how does it work?",
    answer: "If the first notice is delivered but the debtor does not respond, our platform can initiate a multi-stage reminder workflow. We send subsequent weekly reminders via WhatsApp and email to maintain structured legal pressure on the debtor and encourage an out-of-court settlement."
  },
  {
    question: "How is electronic service of a notice proved in court?",
    answer: "To prove email or WhatsApp service in court, you must present the delivery receipt or screenshot showing read status, accompanied by a signed certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Our portal automatically packages these digital receipts and drafts the Section 63 BSA certificate for your advocate to submit."
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
      "name": "Legal Notice Online Portal",
      "item": "https://www.legalrecovery.in/legal-notice-online"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice Online Portal: Digital Workflows, ODR, and e-Courts in India",
  "description": "Discover how technology-enabled legal notice portals simplify case submission, advocate drafting, e-signing, and ODR integrations under modern Indian laws.",
  "image": "https://www.legalrecovery.in/og-legal-notice-online.png",
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
  "name": "Legal Notice Online Portal",
  "image": "https://www.legalrecovery.in/og-legal-notice-online.png",
  "description": "Flat-fee online legal notice drafting, posting, and tracking portal for money recovery in India.",
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
        "name": "Balakrishnan Iyer"
      },
      "reviewBody": "Using this online portal was seamless. I uploaded my invoices and outstanding ledger details to the secure vault. The platform verified the debtor's company registration, and a panel lawyer drafted the notice within 24 hours. The real-time Speed Post tracking showed delivery, and the company settled the ₹3.8L dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nidhi Aggarwal"
      },
      "reviewBody": "The e-signing process under the IT Act made everything fast and convenient. I didn't have to visit any offices or print files manually. The advocate digitally signed the notice, and the platform handled the Speed Post dispatch. Extremely efficient legal tech service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ranjeet Deshmukh"
      },
      "reviewBody": "Highly transparent pricing. The ₹999 flat rate covered everything, from lawyer review to postal dispatch. I tracked the delivery status directly on my dashboard. When the debtor signed the online settlement deed, the payment was resolved out of court."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Raghavan"
      },
      "reviewBody": "The integration with e-courts is a huge benefit. When the debtor ignored the notice, the platform packaged our files and delivery reports into a litigation-ready format, making it simple for my lawyer to file a summary suit. Outstanding legal infrastructure."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tanmay Ghosh"
      },
      "reviewBody": "As a freelancer, recovering unpaid retainer fees is stressful. The online notice system allowed me to upload all my work files and email agreements to the cloud vault. The panel advocate reviewed everything, sent the notice, and the client settled."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Hegde"
      },
      "reviewBody": "Excellent digital portal. The automatic MCA and GSTIN database checks ensured we addressed the notice to the correct registered business entity. The tracking alerts kept me informed at every step of the recovery process."
    }
  ]
};

export default function LegalNoticeOnlineClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "digital-transformation", title: "1. The Digital Transformation of Legal Notice Workflows" },
    { id: "portal-advantages", title: "2. Advantages of Issuing Legal Notices Online" },
    { id: "onboarding-signing", title: "3. Drafting and E-Signing Protocols" },
    { id: "delivery-evidence", title: "4. Evidentiary Foundations of Digital Delivery" },
    { id: "case-studies", title: "5. Real-World Case Studies &amp; Reviews" },
    { id: "faqs", title: "6. Frequently Asked Questions on Online Notice Services" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice Online Portal", href: "/legal-notice-online" },
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
              India&apos;s Advanced Legal Tech Infrastructure
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice <span className="text-[#DC2626]">Online Portal</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Explore how technology-enabled legal notice portals streamline drafting, digital validation, ODR mediation, and e-courts e-filing integrations.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Access Online Notice Portal
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
                
                {/* Section 1: The Digital Transformation of Legal Notice Workflows */}
                <section id="digital-transformation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Digital Transformation of Legal Notice Workflows
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Indian legal system is undergoing a massive digital overhaul. Through government-led initiatives like the <strong>e-Courts Mission Mode Project</strong>, court registries are shifting from physical, paper-heavy systems to modern e-filing infrastructures. This modernization has paved the way for technology-enabled legal notice portals to streamline pre-litigation workflows. In this new digital environment, a legal notice is no longer just a letter; it is the entry point of a digital case file.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      By integrating technology with a panel of practicing advocates, online legal notice portals bridge the gap between traditional legal procedures and technology. These portals connect directly with <strong>Online Dispute Resolution (ODR)</strong> platforms and e-filing systems in India. They create a secure digital workspace where client onboarding, document vetting, advocate assignment, and delivery tracking are handled through a single dashboard, removing the need for physical office visits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This digital shift has significantly changed how disputes are handled. When you submit a case through an online portal, the document is structured using validated templates and legal databases. If the debtor chooses to settle, the portal provides online mediation rooms and digital settlement deed templates. If they ignore the notice, the digital records are exported in a format ready for immediate e-filing on the e-Courts portal. This system makes pre-litigation and recovery faster, more transparent, and highly accessible.
                    </p>
                  </div>
                </section>

                {/* Section 2: Advantages of Issuing Legal Notices Online */}
                <section id="portal-advantages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Advantages of Issuing Legal Notices Online
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Using an online legal notice portal offers significant advantages over traditional, manual methods. Traditional drafting through offline advocate chambers often involves variable billing rates, scheduling delays, and manual paperwork. Online portals replace these challenges with a standardized, efficient, and transparent workflow.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      The key advantages of using an online legal notice portal include:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Flat-Fee Pricing and Financial Transparency</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Unlike traditional advocate chambers that charge hourly consultation rates or variable fees for typing and postage, online portals operate on a flat-fee pricing model. On LegalRecovery, services start at a transparent rate of ₹999 per opposing party. This rate is all-inclusive, covering advocate review, customized drafting, printing on advocate letterhead, physical Speed Post dispatch, and digital delivery.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. Database Cross-Referencing &amp; Corporate KYC Validation</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          A common reason legal notices fail is that they are sent to incorrect company names or outdated addresses. Online portals prevent this by integrating database API queries. If the debtor is a company or LLP, the system queries the Ministry of Corporate Affairs (MCA) database to pull their active registered office address. If they are a proprietary concern, the system queries the GSTIN directory to verify the proprietor&apos;s name and active address, ensuring the notice is legally valid.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Real-Time Consignment Tracking &amp; Dashboard Alerts</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Rather than requiring users to manually copy tracking numbers and query the post office website, online portals integrate with the India Post tracking API. Once the notice is dispatched, tracking updates (booked, in transit, delivered, or refused) are automatically updated on your secure user dashboard, accompanied by email and SMS notifications.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">D. Multi-Stage Automated Reminder Notice Workflows</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          A single notice can sometimes be overlooked. Our portal allows setting up automated multi-stage reminders. If the first notice is delivered but not responded to, the platform can automatically dispatch secondary reminders via WhatsApp and email to maintain structured legal pressure, encouraging the debtor to settle out of court.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Drafting and E-Signing Protocols */}
                <section id="onboarding-signing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Drafting and E-Signing Protocols
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The drafting of an online legal notice combines software-assisted verification with professional review by a practicing advocate. By structuring the onboarding process, the portal ensures that all necessary facts are compiled before the advocate begins drafting the notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      The drafting and validation workflow follows a structured digital pipeline:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">1. Secure Document Vault Upload</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The client uploads supporting files (contracts, invoices, bank receipts, ledger statements, and chat logs) to our secure, encrypted cloud vault. The database indexes these documents, allowing the advocate to quickly verify the transaction history and default dates.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">2. Advocate Assignment &amp; Draft Preview</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The system routes the case file to a practicing advocate on our panel specializing in debt recovery. The advocate drafts the notice on their official letterhead, including all relevant statutory citations (e.g. Section 73 Contract Act, Interest Act). The draft is uploaded to the client&apos;s dashboard for review and approval.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">3. E-Signing under Section 5 of the IT Act, 2000</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Under Section 5 of the Information Technology Act, 2000, digital signatures carry the same legal recognition as physical signatures. The advocate electronically signs the finalized notice PDF using their registered digital signature certificate. The client also signs an online confirmation statement, ensuring that the notice is fully authorized.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">4. Hybrid Dispatch Execution</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Once e-signed, the notice is sent to our automated print-and-dispatch queue. It is physically printed, sealed, and dispatched via Speed Post. Simultaneously, the digital system serves the notice via verified corporate email and WhatsApp, creating multiple paths of delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Evidentiary Foundations of Digital Delivery */}
                <section id="delivery-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Evidentiary Foundations of Digital Delivery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice must be accompanied by reliable proof of delivery to be useful in subsequent court proceedings. If a debtor claims in court that they never received the notice, the plaintiff must present indisputable service records. Online legal notice portals address this by combining physical delivery records with electronic tracking.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      Proving service of an online legal notice relies on two key legal frameworks:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-base font-black text-slate-900 mb-2">1. Constructive Service under the General Clauses Act</h4>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          When the portal dispatches the notice physically via Speed Post or Registered Post AD, the delivery is protected under Section 27 of the General Clauses Act, 1897. This statute states that if a letter is correctly addressed, prepaid, and posted, service is deemed to be completed. Even if the debtor refuses the post or it is returned as &quot;unclaimed&quot;, the court accepts the returned envelope as proof of constructive service.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-black text-slate-900 mb-2">2. Section 63 BSA 2023 Digital Evidence Certificates</h4>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For electronic delivery (via WhatsApp read receipts or email delivery logs), the evidentiary rules are governed by the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act. Section 63 of the BSA (previously Section 65B) requires all digital evidence introduced in court to be accompanied by a signed device certificate. This certificate validates that the computer or phone used to send the notice was functioning properly and that the screenshots of WhatsApp delivery or email headers have not been tampered with. Our portal automatically packages these digital receipts and drafts the Section 63 BSA certificate for your advocate to submit.
                        </p>
                      </div>
                    </div>

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
                            <td className="p-3 font-bold text-slate-900">India Post Speed Post</td>
                            <td className="p-3">Consignment delivery report showing date, time, and recipient location.</td>
                            <td className="p-3">Section 27 of the General Clauses Act, 1897</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">WhatsApp Dispatch</td>
                            <td className="p-3">Screenshots showing the PDF attachment delivery status and double blue ticks.</td>
                            <td className="p-3">Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Verified Email</td>
                            <td className="p-3">SMTP transmission logs, email headers, and read receipt tracker logs.</td>
                            <td className="p-3">Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 5: Real-World Case Studies & User Reviews */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Real-World Case Studies &amp; Reviews
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Using a technology-enabled legal notice portal has helped hundreds of clients recover outstanding money without resorting to expensive, long litigation. Below are three representative case studies:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Friendly Loan Dispute</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.5 Lakhs personal loan</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A lender in Pune had given a ₹3.5L friendly loan. The borrower went silent, evading physical service. We drafted a notice on advocate letterhead, uploaded it to the dashboard, and served it via WhatsApp. The read status (double blue ticks) was certified under Section 63 BSA. The debtor settled the loan within 10 days of delivery.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Trade Receivable Recovery</span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹6.8 Lakhs invoice dues</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            A manufacturer in Gujarat faced defaults on B2B invoices from a distributor. The distributor claimed they never received the invoices. We cross-referenced the distributor&apos;s GSTIN, verified their active registered address, and dispatched the notice via Speed Post and email. The distributor cleared the outstanding dues to avoid insolvency proceedings.
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

                {/* Section 6: Frequently Asked Questions on Online Notice Services */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Frequently Asked Questions on Online Notice Services
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
