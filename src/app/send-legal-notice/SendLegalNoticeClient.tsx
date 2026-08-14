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
    question: "What is a legal notice and what is its primary purpose under Indian civil law?",
    answer: "A legal notice is a formal, written document sent by an advocate on behalf of their client to demand compliance with a legal obligation or remedy a grievance. Its primary purpose is to inform the recipient of the sender's specific grievances and state their intention to initiate legal action if the dispute is not resolved. In India, a legal notice acts as a vital pre-litigation step. It establishes a clear, documented record of demands, provides the recipient a final chance to settle the matter out of court, and demonstrates the sender's good faith to the judiciary, helping to prevent unnecessary litigation."
  },
  {
    question: "Is it mandatory to reply to a legal notice in India?",
    answer: "While there is no general statutory law in India that penalizes a recipient solely for failing to reply to a legal notice, ignoring one is considered a major tactical mistake. In certain statutory matters, such as cheque bounce cases under Section 138 of the Negotiable Instruments Act, replying to deny allegations or clarify facts is critical. For general civil disputes, failing to reply allows the sender to proceed directly to court, where your silence can be interpreted by a judge as an 'adverse inference' or a sign of bad faith, which can significantly weaken your defense."
  },
  {
    question: "What is the legal doctrine of 'adverse inference' in relation to unanswered notices?",
    answer: "Under Section 114 of the Indian Evidence Act (now Section 114 of the Bharatiya Sakshya Adhiniyam, 2023), courts have the discretion to draw an adverse inference against a party that ignores a legal notice. If a plaintiff proves that a legal notice detailing specific, fact-based allegations was duly served to the defendant, and the defendant chose to remain silent, the court may presume that the defendant had no valid defense to offer or was admitting the facts by acquiescence. This weakens the defendant's credibility during the trial."
  },
  {
    question: "How long does a recipient have to respond to a legal notice?",
    answer: "The timeline to respond to a legal notice is not governed by a single universal law; instead, it is specified by the sender within the notice itself. In private and commercial disputes, the standard reply period is typically 15 to 30 days. However, in statutory disputes, the timeline is prescribed by the specific statute. For example, a cheque bounce notice under Section 138 of the NI Act mandates a 15-day payment period, while a notice to a government authority under Section 80 of the Code of Civil Procedure (CPC) requires a mandatory 2-month (60 days) waiting period before a lawsuit can be filed."
  },
  {
    question: "Can I draft and send a legal notice myself without engaging an advocate?",
    answer: "While a citizen has the right to draft and send a personal demand letter or notice directly, it is highly recommended to send a legal notice through a qualified advocate. A notice drafted on an advocate's official letterhead carries more weight, signals seriousness to the recipient, and ensures that all facts, dates, and relevant statutory provisions (e.g. Indian Contract Act, Transfer of Property Act) are cited correctly. An improperly drafted notice containing factual errors or admissions can weaken your case if the matter proceeds to court."
  },
  {
    question: "What are the legal consequences if a recipient refuses to accept a legal notice sent by post?",
    answer: "If a recipient refuses to accept a legal notice sent via Registered Post AD or India Post Speed Post, or if the notice is returned as 'unclaimed' or 'door locked' after multiple attempts, the court accepts this as 'constructive service.' Under Section 27 of the General Clauses Act, 1897, if a letter is correctly addressed, prepaid, and posted, the service is deemed to be completed. The recipient cannot escape legal proceedings by simply avoiding the postman, and the returned envelope serves as admissible proof of service."
  },
  {
    question: "Is a legal notice served via WhatsApp or email legally valid in Indian courts?",
    answer: "Yes, electronic service of a legal notice is legally valid and recognized by Indian courts. The Supreme Court and various High Courts have repeatedly allowed notices to be served via email, WhatsApp, and other instant messaging platforms. To prove electronic service in court under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act), you must present the delivery receipt logs, read receipts (blue ticks), and a signed Section 63 BSA certificate validating the device's authenticity and data integrity."
  },
  {
    question: "What is Online Dispute Resolution (ODR) and how does it benefit the notice process?",
    answer: "Online Dispute Resolution (ODR) is a digital framework that uses technology to resolve disputes out of court through negotiation, mediation, or arbitration. Our portal integrates an ODR pipeline into every legal notice. The notice contains a secure digital link inviting the recipient to join an online dispute resolution room. In this private virtual space, the parties can discuss settlement terms, propose payment schedules, and reach an amicable settlement. Once resolved, they e-sign a binding settlement deed, avoiding the cost and delay of traditional litigation."
  },
  {
    question: "How does the portal verify the correct address and legal name of a corporate debtor?",
    answer: "To ensure your notice is legally sound, our portal uses database API queries to verify entity details. If the debtor is a private limited company or LLP, the system queries the Ministry of Corporate Affairs (MCA) database to pull their active registered office address. If the debtor is a proprietary firm, retail shop, or sole proprietorship, the system queries the GSTIN registry to verify the legal proprietor's name and active address, preventing naming errors that could weaken your notice."
  },
  {
    question: "What is the flat fee structure for sending a notice on LegalRecovery?",
    answer: "LegalRecovery offers all-inclusive, flat-fee pricing starting at ₹999 per opposing party. This transparent rate covers advocate consultation, customized drafting on the advocate's official letterhead, client dashboard review, and electronic delivery via verified email and WhatsApp. There are no hourly consultation fees."
  },
  {
    question: "What should I do if the recipient replies to my notice with false counterclaims?",
    answer: "If the recipient replies to your legal notice with false allegations or counterclaims, do not panic. Your assigned advocate will review their reply, verify the facts, and draft a formal rejoinder (response) to refute their claims. If the reply does not lead to an amicable settlement, the notice and response form the pre-litigation record, allowing your advocate to file a recovery suit or summary suit (Order 37 CPC) in the appropriate court."
  },
  {
    question: "How secure is my personal and case data on the LegalRecovery portal?",
    answer: "LegalRecovery prioritizes data security and confidentiality. All documents uploaded to our encrypted cloud vault are secured using enterprise-grade SSL/TLS protocols in transit and AES-256 encryption at rest. Access is restricted exclusively to the assigned panel advocate and the client. The information is protected under advocate-client privilege guidelines, ensuring complete privacy."
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
      "name": "Send Legal Notice Portal",
      "item": "https://www.legalrecovery.in/send-legal-notice"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Send Legal Notice Online in India: The Comprehensive Strategic & Statutory Guide",
  "description": "Learn how to send a legal notice online in India. Understand statutory notices, response timelines, the doctrine of adverse inference, and ODR integrations.",
  "image": "https://www.legalrecovery.in/og-send-legal-notice-portal.png",
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
  "name": "Send Legal Notice Online",
  "image": "https://www.legalrecovery.in/og-send-legal-notice-portal.png",
  "description": "Standardized legal notice drafting and dispatch portal for individuals, businesses, and freelancers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1080"
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
        "name": "Divya Teja"
      },
      "reviewBody": "Using this online portal was a game changer for my freelance agency. A client had defaulted on invoices totaling ₹4.2 Lakhs. The platform verified the client's corporate office registry via MCA, matched me with an advocate, and sent a notice via verified email and WhatsApp. The client settled through the ODR mediator within two weeks. Outstanding legal tech platform!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karan Malhotra"
      },
      "reviewBody": "Extremely fast service. I uploaded my bounced cheque details to the document vault. The advocate prepared the statutory notice under Section 138 of the NI Act within 24 hours. The real-time Speed Post tracking showed delivery, and the debtor processed the payment to avoid criminal prosecution."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Swati Deshpande"
      },
      "reviewBody": "I sent a legal notice for the refund of my security deposit. The landlord ignored my emails, but once the formal notice on the advocate's letterhead was delivered via Speed Post, he returned the deposit. The flat pricing of ₹999 is highly transparent and competitive."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Hrishikesh Sen"
      },
      "reviewBody": "Highly recommend the ODR negotiation room feature. The debtor responded to the notice and joined the online dispute room. We negotiated a payment schedule and e-signed a settlement deed within days, avoiding court entirely. Efficient legal innovation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Gupta"
      },
      "reviewBody": "The database API check is a lifesaver. It corrected the legal entity name of my vendor from their GSTIN, ensuring our notice was addressed to the correct legal proprietor. This prevented a major technical error that could have weakened my recovery case."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Singhal"
      },
      "reviewBody": "The Section 63 BSA certificate provided with the digital delivery receipts gave my lawyer complete confidence. The court accepted the WhatsApp blue ticks immediately as valid proof of service. The technology integration is seamless."
    }
  ]
};

export default function SendLegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "anatomy", title: "1. The Legal Anatomy & Strategic Role of a Notice" },
    { id: "frameworks", title: "2. Statutory Frameworks & Response Timelines" },
    { id: "inaction", title: "3. Legal Consequences of Refusal & Silence" },
    { id: "replies", title: "4. Strategic Defenses & Reply Workflows" },
    { id: "digital", title: "5. Digital Service Proof & Verification" },
    { id: "mediation", title: "6. ODR Settlements & e-Courts Transition" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Send Legal Notice", href: "/send-legal-notice" },
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
              Send <span className="text-[#DC2626]">Legal Notice</span> Online
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the tactical leverage, statutory timelines, response protocols, and technology-driven ODR options for sending a legal notice.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Access Notice Portal
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
                
                {/* Section 1: The Legal Anatomy & Strategic Role of a Notice */}
                <section id="anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Legal Anatomy &amp; Strategic Role of a Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is a formal, written communication served by one party (the sender or claimant) to another (the recipient) through a practicing advocate. It is not a court order or a summons, but rather a structured pre-litigation step that outlines the sender&apos;s legal grievances, identifies the facts of the dispute, sets out a demand for relief, and warns of imminent litigation if the default is not cured. Under Indian jurisprudence, a legal notice acts as a vital bridge, establishing a clear line of communication and offering the parties an opportunity to resolve their differences before approaching a court of law.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Every well-drafted legal notice consists of several essential components that form its legal anatomy. It must clearly state the name, description, and place of residence of the sender. It must establish a clear cause of action by detailing the chronological events, agreements, and specific breaches committed by the recipient. It must outline the legal grounds of the claim, citing relevant statutes such as the Indian Contract Act or the Transfer of Property Act. Most importantly, it must issue a clear and unambiguous demand for relief—whether it is the recovery of outstanding money, specific performance of a contract, or the eviction of a tenant—and provide a specific compliance period (typically 15 to 30 days) for the recipient to act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond its procedural necessity, a legal notice plays a strategic role in dispute resolution. Economically, it is far more cost-effective to resolve a dispute through pre-litigation negotiations than to file a formal lawsuit, which involves high court fees, legal costs, and years of delays. Psychologically, receiving a formal legal notice drafted on an advocate&apos;s official letterhead alerts the recipient that the claimant is serious and prepared to take the matter to court. This pressure often prompts defaulting parties, who may have ignored previous emails or phone calls, to immediately open negotiations.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, sending a notice establishes a permanent, court-admissible record of your demands. In subsequent civil trials, the notice is introduced as primary evidence to prove that the defendant was given a fair opportunity to cure their default. If the defendant chose to remain silent, this fact can be leveraged to establish bad faith. In commercial disputes, the date of service of the legal notice is often used as the starting point for calculating interest on outstanding dues, making it a critical financial tool for recovery.
                    </p>
                  </div>
                </section>

                {/* Section 2: Statutory Frameworks & Response Timelines */}
                <section id="frameworks" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Statutory Frameworks &amp; Response Timelines
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Different categories of civil and criminal disputes in India are governed by specific statutes that dictate how a notice must be framed, dispatched, and timed. Failing to comply with these statutory timelines can weaken your case or lead to its outright rejection in court.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      The four primary statutory notices and their respective response timelines under Indian law include:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Section 80 of the Code of Civil Procedure (CPC), 1908</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          This is a mandatory statutory notice required before filing a civil suit against the Central Government, any State Government, or a public officer acting in their official capacity. The law mandates a strict <strong>two-month waiting period (60 days)</strong> from the date of service before a lawsuit can be filed. The notice must specify the cause of action, the plaintiff&apos;s identity, and the exact relief sought. Filing a suit without complying with Section 80 CPC, unless the court grants special leave for urgent relief under Section 80(2), will result in the rejection of the plaint under Order 7, Rule 11 of the CPC.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. Section 138 of the Negotiable Instruments Act, 1881</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          In cheque bounce cases, the law prescribes strict timelines. The statutory notice must be sent within <strong>30 days</strong> of receiving the cheque return memo from the bank. The notice must demand the payment of the cheque amount within a strict <strong>15-day compliance window</strong> from the date of receipt. If the drawer fails to make the payment within these 15 days, the payee must file a criminal complaint in the Magistrate&apos;s Court within <strong>30 days</strong> of the expiry of the compliance period.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Section 106 of the Transfer of Property Act, 1882</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          This section governs the termination of leases where there is no written contract or where the contract is silent on lease termination. For residential or commercial tenancies, the landlord must serve a <strong>15-day notice period</strong> to terminate the tenancy. For agricultural or manufacturing leases, a <strong>6-month notice period</strong> is required. The notice period begins from the date the tenant receives the notice, and the landlord can file an eviction suit if the tenant fails to vacate after the period expires.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">D. Non-Statutory Commercial Notices (Indian Contract Act, 1872)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          In disputes involving unpaid commercial invoices, service level defaults, or non-delivery of goods, the notice is based on Section 73 of the Indian Contract Act. While there is no statutory waiting period, most business contracts contain a &quot;Notice and Cure Clause&quot; (usually prescribing 15, 30, or 45 days) that must be followed. If the contract is silent, a reasonable reply period (typically 15 to 20 days) must be provided before initiating civil recovery suits or arbitration.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Legal Consequences of Refusal & Silence */}
                <section id="inaction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Consequences of Refusal &amp; Silence
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common misconception among defaulting debtors and tenants is that ignoring or refusing a legal notice will prevent the claimant from initiating legal action. In reality, under the Indian civil justice system, remaining silent or actively refusing to accept a notice can significantly weaken your legal position.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      The key legal consequences of ignoring or refusing a notice include:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Constructive Service under Section 27 of the General Clauses Act</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          If a legal notice is sent via Registered Post AD or Speed Post to the correct registered address of the recipient, and the recipient refuses to accept it or fails to claim it from the post office, the law deems it served. Under Section 27 of the General Clauses Act, 1897, if a letter is correctly addressed, prepaid, and posted, the service is deemed completed. The returned envelope with postal remarks such as &quot;refused&quot; or &quot;unclaimed&quot; is accepted by courts as valid proof of constructive service, allowing the case to proceed.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. The Doctrine of Adverse Inference</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Under Section 114 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly the Indian Evidence Act, 1872), if a recipient fails to reply to a legal notice detailing specific, fact-based allegations, the court can draw an adverse inference. The judge may presume that the recipient remained silent because they had no valid defense to offer, weakening their credibility during the subsequent trial.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Estoppel by Silence (or Acquiescence)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          If a recipient chooses to remain silent when they have a legal duty to speak, they may face the principle of estoppel by silence. By failing to deny allegations in the notice, the recipient may be prevented from introducing contrary arguments later in court, as the law does not protect parties who act in bad faith or remain silent to mislead the claimant.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">D. Liability for Court and Litigation Costs</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Under Section 35 of the CPC, courts have the power to order the losing party to pay the other party&apos;s litigation costs. If a judge finds that the defendant ignored a valid legal notice and refused an amicable settlement, forcing the plaintiff to file an expensive lawsuit, the court may order the defendant to pay all court fees and advocate charges incurred by the plaintiff.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Strategic Defenses & Reply Workflows */}
                <section id="replies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Strategic Defenses &amp; Reply Workflows
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you receive a legal notice, replying is the most effective way to protect your interests. A reply allows you to present your side of the dispute, deny false claims, and set the legal record straight before litigation starts. However, drafting a reply requires careful legal drafting and strategy.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-800">
                      A strategic reply to a legal notice should follow these guidelines:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">1. Paragraph-by-Paragraph Denial</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The reply must address every allegation in the original notice individually. Any allegation that is not explicitly denied in the reply is deemed to be admitted under civil procedure rules. A structured denial ensures that no claims are accepted by default.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">2. Raise Counterclaims and Set-Offs</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          If the claimant owes you money or breached a contract first, you can use the reply to demand payment or outline their defaults. For example, if a client demands a refund, you can counterclaim for unpaid service hours, establishing a strong defense.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">3. Challenge Advocate Credentials &amp; Jurisdiction</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Verify if the advocate sending the notice is active and authorized. Your advocate will also check if the notice has been sent to the correct jurisdiction or if the claims are barred under the Limitation Act (generally three years for debt recovery).
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2">4. Engage Professional Legal Representation</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          While you can reply to a notice yourself, engaging a qualified advocate is highly recommended. Advocates understand how to write replies without making accidental admissions of liability, protecting your rights and ensuring the reply is drafted professionally.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Digital Service Proof & Verification */}
                <section id="digital" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Digital Service Proof &amp; Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Modern technology has changed how legal notices are sent and tracked. Traditional dispatch methods relied on physical tracking slips that could be lost or manipulated. Online legal portals address this by integrating API-driven verification and digital tracking tools.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our portal implements several advanced features to ensure the validity and deliverability of online notices:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">A. Ministry of Corporate Affairs (MCA) Database API Integration</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Sending a legal notice to an outdated company address can lead to the dismissal of your case. Our portal connects directly with the MCA registry. When you enter a corporate debtor&apos;s name or Corporate Identification Number (CIN), the system pulls their active registered office address and lists their directors, ensuring the notice is addressed to the correct legal party.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">B. GSTIN Directory Cross-Referencing</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          For sole proprietorships or retail firms, the system queries the GSTIN registry to identify the verified proprietor and active business address. This ensures that the notice is legally valid and addressed to the person who holds the ultimate liability for the debt.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">C. Section 5 IT Act, 2000 Electronic Signing</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Once the draft notice is approved, the advocate digitally signs the PDF notice using their registered digital signature certificate. Under Section 5 of the Information Technology Act, 2000, digital signatures carry the same legal validity as physical signatures, eliminating the need to physically mail documents back and forth.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">D. Section 63 Bharatiya Sakshya Adhiniyam, 2023 Digital Evidence Certificates</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          For electronic delivery (via WhatsApp or email), service is proved by presenting the delivery receipt logs, read receipts, and double blue ticks. Under Section 63 of the BSA (which replaced Section 65B of the Indian Evidence Act), these electronic records must be accompanied by a signed certificate validating the device&apos;s authenticity. Our portal automatically drafts and packages this Section 63 BSA certificate for your advocate to submit.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: ODR Settlements & e-Courts Transition */}
                <section id="mediation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. ODR Settlements &amp; e-Courts Transition
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice served through an online portal is not just a warning; it is the entry point for a digital dispute resolution pipeline. Online Dispute Resolution (ODR) platforms offer a fast, cost-effective way to resolve disputes out of court, avoiding the delays of traditional litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a notice is served through our portal, the recipient receives a secure digital link inviting them to resolve the matter on our negotiation dashboard. If they accept, both parties gain access to a secure, private virtual negotiation room. Here, they can discuss settlement terms, propose payment schedules, and reach an amicable settlement. If an agreement is reached, the platform drafts a legally binding Settlement Deed that both parties e-sign, creating an enforceable contract under the Indian Contract Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient ignores the notice or refuses to settle, the platform organizes the case files, delivery reports, and Section 63 BSA certificates into a litigation-ready package. This structured package makes it simple for your advocate to transition the case to the government&apos;s e-Courts portal. The advocate can e-file a Summary Suit under Order 37 of the CPC, file a cheque bounce complaint under Section 138 of the NI Act, or approach the Labour Court for unpaid salary, ensuring your case moves forward efficiently.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
                            A manufacturer in Gujarat faced defaults on B2B invoices from a distributor. We verified the distributor&apos;s GSTIN and sent the notice via corporate email and WhatsApp. The distributor cleared the dues to avoid insolvency proceedings.
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
                <h3 className="text-sm font-black mb-3">Send Legal Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We handle the entire recovery notice process for you, from database entity audit and advocate drafting to dispatching and tracking.
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
