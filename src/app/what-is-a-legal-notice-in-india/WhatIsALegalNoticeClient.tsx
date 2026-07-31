'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    "question": "What is a legal notice, and when is it sent in India?",
    "answer": "A legal notice is a formal written communication sent by one party to another, conveying an intention to initiate legal proceedings. It serves as a final warning, giving the recipient a specific period (usually 15 to 30 days) to resolve the dispute or comply with the sender's demands. In India, it is typically sent in matters concerning money recovery, property disputes, employer-employee conflicts, consumer complaints, breach of contract, or matrimonial issues. The primary objective is to settle the matter outside of court, saving both parties from time-consuming and expensive litigation."
  },
  {
    "question": "Is it mandatory to send a legal notice before filing a civil suit?",
    "answer": "Generally, sending a legal notice is not mandatory in all civil disputes, but it is highly recommended. However, under Section 80 of the Civil Procedure Code, 1908, it is strictly mandatory to serve a two-month legal notice before filing a lawsuit against the Government or a public officer. Similarly, in cheque bounce cases under Section 138 of the Negotiable Instruments Act, 1881, sending a legal notice within 30 days of receiving the cheque return memo is a mandatory statutory prerequisite. Failing to send a notice in such statutory cases will result in the immediate dismissal of the lawsuit."
  },
  {
    "question": "What is the validity period of a legal notice once served?",
    "answer": "A legal notice does not have an expiry date or validity period in the sense of a license. However, it is governed by the limitation periods set under the Limitation Act, 1963. For instance, the limitation period to file a civil suit for money recovery is three years from the date the cause of action arose. While the notice remains a valid piece of evidence, you must initiate actual legal proceedings in court within the legally prescribed limitation window. Waiting too long after serving the notice without taking subsequent legal action can weaken your case and make it time-barred."
  },
  {
    "question": "Can I send a legal notice myself without hiring an advocate?",
    "answer": "While any individual can technically draft and send a legal notice on their own personal letterhead, it is highly advisable to hire a professional advocate to do so. A legal notice drafted by an advocate carries formal legal weight and clearly signals to the recipient that you are prepared to escalate the matter to court. Furthermore, advocates are trained to draft notices using precise legal terminology, cite the correct statutory provisions, and articulate the facts in a manner that avoids contradictions. Errors or misstatements in a self-drafted notice can be used against you in subsequent court proceedings."
  },
  {
    "question": "What should I do if the recipient refuses to accept the legal notice?",
    "answer": "If the recipient refuses to accept the legal notice delivered by registered post or speed post, the postman will return it with an endorsement such as 'Refused' or 'Not Claimed'. Under Indian law, specifically Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act, 1872, a refusal of service is deemed as 'constructive service'. This means the court will presume that the notice was successfully delivered to the recipient, and they chose not to accept it. You can proceed with filing your civil suit, using the returned envelope with the postman's stamp as proof of service."
  },
  {
    "question": "How should I respond if I receive a legal notice?",
    "answer": "If you receive a legal notice, you must never ignore it. Ignoring a legal notice can be viewed as an admission of the allegations by the court, or it may lead to ex-parte proceedings. You should carefully read the notice, note down the facts, and consult a qualified advocate immediately. Your advocate will help you draft a formal reply to the legal notice, refuting the false allegations, presenting your version of the facts, and raising legal defenses. The reply must be sent within the time frame specified in the notice, usually 15 or 30 days, to prevent the sender from taking immediate legal action."
  },
  {
    "question": "Is a legal notice sent via email or WhatsApp valid under Indian law?",
    "answer": "Yes, electronic modes of communication like email and WhatsApp are legally valid for serving a legal notice. Section 65B of the Indian Evidence Act, 1872, read with the Information Technology Act, 2000, recognizes electronic records as admissible evidence. The Supreme Court of India has also validated the service of summons and notices through WhatsApp and email, provided there is proof of delivery (such as the double blue ticks on WhatsApp or email delivery reports). However, as a matter of practice, it is recommended to send the notice via registered post or speed post alongside the electronic version."
  },
  {
    "question": "What is the standard cost of drafting and sending a legal notice in India?",
    "answer": "The cost of drafting and sending a legal notice in India varies widely depending on the complexity of the dispute, the value of the claim, and the experience of the advocate. Generally, legal fees for drafting a basic notice can range from 2,000 to 10,000 Rupees. For complex commercial disputes, corporate contract breaches, or high-value recovery claims, the fees may be higher. At LegalRecovery, we provide transparent and standardized pricing for drafting and serving legally compliant notices, ensuring that individuals and small businesses can access professional legal support without hidden costs."
  },
  {
    "question": "What happens if a legal notice is completely ignored by the recipient?",
    "answer": "If the recipient ignores the legal notice and the specified notice period expires without any reply or resolution, the sender gains a strong ground to initiate formal legal action. The ignored notice serves as key evidence in court, demonstrating that the sender acted in good faith and gave the recipient a fair opportunity to resolve the dispute before litigation. The court may also order the recipient to pay the litigation costs incurred by the sender, as their failure to respond or settle the matter forced the sender to approach the court, thereby wasting judicial time."
  }
];

const reviews = [
  {
    "author": "Vikram Mehta (V.M. Enterprises)",
    "rating": "5",
    "text": "We had pending business dues of 12 Lakhs from a vendor who stopped responding to our calls. We consulted LegalRecovery and served a formal legal notice. The vendor's legal team contacted us within 10 days of receiving the notice, and we settled the entire outstanding amount in two installments. Serving a structured notice saved us from a lengthy civil trial."
  },
  {
    "author": "Priya Sharma (Creative Solutions)",
    "rating": "5",
    "text": "As a freelance designer, my contract was terminated abruptly, and the client withheld 3.5 Lakhs of my final settlement. I used this platform to send a formal legal notice citing the Indian Contract Act. The client replied immediately, and we reached an amicable settlement within a week. The detailed guides here helped me collect the right evidence."
  },
  {
    "author": "Harish Chawla (Retail Logistics)",
    "rating": "5",
    "text": "A former business associate defaulted on a friendly loan of 5 Lakhs. Because we did not have a detailed agreement, I was unsure of my options. Following the advice card and guides, we served a legal notice under Section 70 of the Contract Act. Faced with formal legal demand, they agreed to repay. The service is highly professional and efficient."
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
      "name": "What is a Legal Notice in India: Validity, Rules & Recovery",
      "item": "https://www.legalrecovery.in/what-is-a-legal-notice-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is a Legal Notice in India: Validity, Rules & Recovery",
  "description": "Learn what is a legal notice in India, its legal validity, rules of service under Civil Procedure Code, how to reply, and the step-by-step recovery process.",
  "image": "https://www.legalrecovery.in/og-legal-notice-india.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a legal notice, and when is it sent in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A legal notice is a formal written communication sent by one party to another, conveying an intention to initiate legal proceedings. It serves as a final warning, giving the recipient a specific period (usually 15 to 30 days) to resolve the dispute or comply with the sender's demands. In India, it is typically sent in matters concerning money recovery, property disputes, employer-employee conflicts, consumer complaints, breach of contract, or matrimonial issues. The primary objective is to settle the matter outside of court, saving both parties from time-consuming and expensive litigation."
      }
    },
    {
      "@type": "Question",
      "name": "Is it mandatory to send a legal notice before filing a civil suit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, sending a legal notice is not mandatory in all civil disputes, but it is highly recommended. However, under Section 80 of the Civil Procedure Code, 1908, it is strictly mandatory to serve a two-month legal notice before filing a lawsuit against the Government or a public officer. Similarly, in cheque bounce cases under Section 138 of the Negotiable Instruments Act, 1881, sending a legal notice within 30 days of receiving the cheque return memo is a mandatory statutory prerequisite. Failing to send a notice in such statutory cases will result in the immediate dismissal of the lawsuit."
      }
    },
    {
      "@type": "Question",
      "name": "What is the validity period of a legal notice once served?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A legal notice does not have an expiry date or validity period in the sense of a license. However, it is governed by the limitation periods set under the Limitation Act, 1963. For instance, the limitation period to file a civil suit for money recovery is three years from the date the cause of action arose. While the notice remains a valid piece of evidence, you must initiate actual legal proceedings in court within the legally prescribed limitation window. Waiting too long after serving the notice without taking subsequent legal action can weaken your case and make it time-barred."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send a legal notice myself without hiring an advocate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While any individual can technically draft and send a legal notice on their own personal letterhead, it is highly advisable to hire a professional advocate to do so. A legal notice drafted by an advocate carries formal legal weight and clearly signals to the recipient that you are prepared to escalate the matter to court. Furthermore, advocates are trained to draft notices using precise legal terminology, cite the correct statutory provisions, and articulate the facts in a manner that avoids contradictions. Errors or misstatements in a self-drafted notice can be used against you in subsequent court proceedings."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if the recipient refuses to accept the legal notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the recipient refuses to accept the legal notice delivered by registered post or speed post, the postman will return it with an endorsement such as 'Refused' or 'Not Claimed'. Under Indian law, specifically Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act, 1872, a refusal of service is deemed as 'constructive service'. This means the court will presume that the notice was successfully delivered to the recipient, and they chose not to accept it. You can proceed with filing your civil suit, using the returned envelope with the postman's stamp as proof of service."
      }
    },
    {
      "@type": "Question",
      "name": "How should I respond if I receive a legal notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you receive a legal notice, you must never ignore it. Ignoring a legal notice can be viewed as an admission of the allegations by the court, or it may lead to ex-parte proceedings. You should carefully read the notice, note down the facts, and consult a qualified advocate immediately. Your advocate will help you draft a formal reply to the legal notice, refuting the false allegations, presenting your version of the facts, and raising legal defenses. The reply must be sent within the time frame specified in the notice, usually 15 or 30 days, to prevent the sender from taking immediate legal action."
      }
    },
    {
      "@type": "Question",
      "name": "Is a legal notice sent via email or WhatsApp valid under Indian law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, electronic modes of communication like email and WhatsApp are legally valid for serving a legal notice. Section 65B of the Indian Evidence Act, 1872, read with the Information Technology Act, 2000, recognizes electronic records as admissible evidence. The Supreme Court of India has also validated the service of summons and notices through WhatsApp and email, provided there is proof of delivery (such as the double blue ticks on WhatsApp or email delivery reports). However, as a matter of practice, it is recommended to send the notice via registered post or speed post alongside the electronic version."
      }
    },
    {
      "@type": "Question",
      "name": "What is the standard cost of drafting and sending a legal notice in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of drafting and sending a legal notice in India varies widely depending on the complexity of the dispute, the value of the claim, and the experience of the advocate. Generally, legal fees for drafting a basic notice can range from 2,000 to 10,000 Rupees. For complex commercial disputes, corporate contract breaches, or high-value recovery claims, the fees may be higher. At LegalRecovery, we provide transparent and standardized pricing for drafting and serving legally compliant notices, ensuring that individuals and small businesses can access professional legal support without hidden costs."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a legal notice is completely ignored by the recipient?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the recipient ignores the legal notice and the specified notice period expires without any reply or resolution, the sender gains a strong ground to initiate formal legal action. The ignored notice serves as key evidence in court, demonstrating that the sender acted in good faith and gave the recipient a fair opportunity to resolve the dispute before litigation. The court may also order the recipient to pay the litigation costs incurred by the sender, as their failure to respond or settle the matter forced the sender to approach the court, thereby wasting judicial time."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Notice Drafting and Dispatch Action Plan",
  "image": "https://www.legalrecovery.in/og-legal-notice-india.png",
  "description": "A tactical legal roadmap to draft, serve, and resolve commercial and personal disputes through formal legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3"
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
        "name": "Vikram Mehta (V.M. Enterprises)"
      },
      "reviewBody": "We had pending business dues of 12 Lakhs from a vendor who stopped responding to our calls. We consulted LegalRecovery and served a formal legal notice. The vendor's legal team contacted us within 10 days of receiving the notice, and we settled the entire outstanding amount in two installments. Serving a structured notice saved us from a lengthy civil trial."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma (Creative Solutions)"
      },
      "reviewBody": "As a freelance designer, my contract was terminated abruptly, and the client withheld 3.5 Lakhs of my final settlement. I used this platform to send a formal legal notice citing the Indian Contract Act. The client replied immediately, and we reached an amicable settlement within a week. The detailed guides here helped me collect the right evidence."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Harish Chawla (Retail Logistics)"
      },
      "reviewBody": "A former business associate defaulted on a friendly loan of 5 Lakhs. Because we did not have a detailed agreement, I was unsure of my options. Following the advice card and guides, we served a legal notice under Section 70 of the Contract Act. Faced with formal legal demand, they agreed to repay. The service is highly professional and efficient."
    }
  ]
};

export default function WhatIsALegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    {
      id: "introduction-to-legal-notices",
      title: "What is a Legal Notice in India?",
      children: [
        { id: "defining-the-instrument", title: "Defining the Instrument of Notice" },
        { id: "purpose-of-service", title: "The Purpose and Intent of Service" }
      ]
    },
    {
      id: "legal-validity-and-provisions",
      title: "Statutory Framework and Legal Provisions",
      children: [
        { id: "section-80-cpc-rules", title: "Section 80 of the Civil Procedure Code" },
        { id: "negotiable-instruments-framework", title: "Section 138 of the Negotiable Instruments Act" }
      ]
    },
    { id: "when-to-send-notice", title: "When is it Mandatory or Advisable to Send a Legal Notice?" },
    { id: "notice-vs-lawsuit", title: "Legal Notice vs. Direct Civil Lawsuit" },
    { id: "essential-components", title: "Essential Components of an Enforceable Legal Notice" },
    { id: "step-by-step-process", title: "The Process of Drafting and Serving a Legal Notice" },
    { id: "checklist-and-evidence", title: "Prerequisites and Evidence Checklist for Senders" },
    { id: "how-to-respond", title: "How to Respond When You Receive a Legal Notice" },
    { id: "dispute-success-stories", title: "Dispute Resolution Case Studies and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "What is a Legal Notice in India", href: "/what-is-a-legal-notice-in-india" }
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
              Indian Legal System Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              What is a Legal Notice in India: <span className="text-[#DC2626]">Validity, Rules & Process</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the statutory rules, procedural validity, and step-by-step methodology to serve or reply to a legal notice under Indian law.
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
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Navigating the legal landscape in India can be highly complex and intimidating. One of the most common yet critical tools used in civil, commercial, and personal disputes is the legal notice. Understanding what a legal notice is, when it is sent, how to respond to it, and how to utilize it effectively to resolve disputes constitutes the cornerstone of pre-litigation strategy.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India, a legal notice is not a court document, but it holds immense weight. It represents a formal communication from one entity or person to another, setting out a clear set of grievances, demands, and the intention to seek legal redressal in court if the demands are not met. The tool is designed to provide the recipient with a fair chance to resolve the matter amicably, thereby reducing the burden on the judicial system.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Navigating legal claims requires formal demands. Whether you are dealing with unpaid client invoices, delayed vendor deliveries, a landlord withholding security deposits, or personal defaults, serving a formal demand is the critical first step. For money disputes, you can seek detailed recourse by drafting a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to secure your capital. If the recipient ignores this step, the sender typically escalates by filing a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link> in the appropriate court. However, it is vital to adhere to the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case India</Link> to ensure the claim remains legally enforceable.
                </p>
              </div>

              {/* Section 1 */}
              <section id="introduction-to-legal-notices" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  What is a Legal Notice in India?
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice is a formal written statement sent by an individual or organization to another party, conveying a clear intention to initiate legal action. It represents a structured, legal warning that outlines the sender's grievances, alleges specific breaches of contract or civil wrongs, and specifies the exact remedy sought. In the vast majority of civil and commercial conflicts in India, serving this document is the standard pre-litigation step that defines the boundaries of the subsequent lawsuit.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    From a procedural perspective, the notice functions as a means of communication between the legal representatives of the parties involved. When drafted by an advocate on their professional letterhead, it carries a sense of urgency and seriousness that standard emails, messages, or phone calls cannot convey. It indicates that the sender has formally engaged legal counsel and is fully prepared to approach the courts if their demands are ignored or rejected.
                  </p>
                  
                  <h3 id="defining-the-instrument" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Defining the Instrument of Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The document must specify a compliance window, which is the period granted to the recipient to settle the issue. This window is typically 15 days, 30 days, or two months, depending on the nature of the dispute and the applicable laws. If the recipient does not reply or comply within this window, the sender has the right to file a lawsuit in the competent civil court or approach the appropriate tribunal.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The ultimate goal of serving a legal notice is to avoid the lengthy, stressful, and expensive process of litigation. By presenting the facts clearly, citing the relevant legal provisions, and setting out the consequences of a trial, the notice encourages the recipient to engage in negotiations. In many commercial and financial disputes, the receipt of a notice prompts the default party to settle the dues, return the property, or cure the breach of contract immediately.
                  </p>

                  <h3 id="purpose-of-service" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Purpose and Intent of Service
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    undefined
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="legal-validity-and-provisions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Statutory Framework and Legal Provisions
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The practice of sending legal notices is embedded in various statutory provisions of Indian law. While some notices are optional, others are strictly mandated by specific acts. Understanding these statutory requirements is crucial, as failing to serve a mandatory notice can lead to the immediate dismissal of a lawsuit on technical grounds.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For instance, in cases where a contract has been breached, the notice acts as the formal declaration of breach, paving the way for claims of damages under Section 73 of the Indian Contract Act, 1872. It establishes that the non-defaulting party performed their obligations and demanded compliance, thereby satisfying the elements required to show a cause of action.
                  </p>

                  <h3 id="section-80-cpc-rules" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 80 of the Civil Procedure Code
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 80 of the Civil Procedure Code, 1908, it is mandatory to serve a legal notice to the Government or a public officer at least two months before filing any civil suit against them. This provision is designed to give the Government or public office an opportunity to review the matter, verify the facts, and resolve the dispute administratively, thereby preventing unnecessary expenditure of public funds on litigation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Another critical area where a legal notice is a mandatory statutory requirement is in cheque bounce cases under Section 138 of the Negotiable Instruments Act, 1881. When a cheque is dishonored due to insufficient funds, stop payment orders, or account closure, the payee must send a formal legal demand to the drawer of the cheque. This notice must be sent within 30 days of receiving the cheque return memo from the bank. The notice must demand the payment of the cheque amount within 15 days of receiving the notice.
                  </p>

                  <h3 id="negotiable-instruments-framework" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 138 of the Negotiable Instruments Act
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    undefined
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="when-to-send-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  When is it Mandatory or Advisable to Send a Legal Notice?
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    There are numerous situations in personal and business transactions where sending a legal notice is either legally required or highly beneficial. Identifying the right time to serve a notice is essential to protect your rights and recover your dues. The most common scenarios include consumer disputes, employer-employee conflicts, property disputes, breach of contract, and family matters.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In consumer disputes, if a company delivers a defective product, offers substandard service, or refuses to issue a valid refund, a notice is served to the company before approaching the consumer forum. Employees who have had their salaries withheld, full and final settlements delayed, or face wrongful termination can serve a notice to demand compliance from their employer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Landlords who refuse to refund the security deposit, or tenants who default on rent, are served notices to vacate or pay outstanding dues under the Transfer of Property Act, 1882. In addition to these scenarios, recovery remains possible even if you do not have a contract. For instance, you can consult a guide on /how-to-recover-money-without-written-agreement to understand how to establish a claim using bank statements, email trails, and WhatsApp conversations as valid proof in your legal notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Tenants and landlords alike must serve formal demand notices. In addition to these scenarios, recovery remains possible even if you do not have a contract. For instance, you can consult a guide on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand how to establish a claim using bank statements, email trails, and WhatsApp conversations as valid proof in your legal notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    undefined
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="notice-vs-lawsuit" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Notice vs. Direct Civil Lawsuit
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When faced with a dispute, many people wonder whether they should immediately file a lawsuit in court or start by serving a legal notice. In almost all civil matters, starting with a notice is the most sensible, cost-effective, and strategically sound approach. Filing a lawsuit is a time-consuming process that involves paying court fees, drafting detailed plaints, presenting witnesses, and waiting for years for a final decree.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice, on the other hand, is a swift pre-litigation step that can resolve the matter in a matter of weeks if the recipient is willing to settle. It also establishes your clean hands and good faith in court, showing that you gave the other party a fair chance to resolve the dispute before seeking judicial intervention.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    undefined
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Legal Notice Route</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Direct Civil Lawsuit</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        {[["Timeline","Fast (requires a 15 to 30 days compliance window)","Slow (takes 2 to 5 years for final disposal in civil court)"],["Initial Cost","Low (limited to advocate drafting and dispatch fees)","High (involves ad-valorem court fees, printing, and trial costs)"],["Judicial Involvement","None (served privately between advocates representing the parties)","High (involves hearings, summons, arguments, and trial evidence)"],["Chance of Settlement","High (provides an easy opportunity to settle out of court)","Moderate (settlement remains possible but after significant delay)"],["Pre-requisite Status","Acts as a mandatory step in specific statutes (e.g. NI Act)","Can be dismissed if mandatory notice is not served beforehand"]].map((row, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 font-bold text-slate-900">{row[0]}</td>
                            <td className="px-6 py-4">{row[1]}</td>
                            <td className="px-6 py-4">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="essential-components" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Essential Components of an Enforceable Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To be legally valid and enforceable in a court of law, a notice must contain specific essential details. An improperly drafted notice that lacks crucial details or contains factual contradictions can weaken your case and make it easy for the recipient to raise valid defenses.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must include sender details, recipient details, an advocate statement, detailed facts, cause of action, a specific demand, compliance window, and a litigation warning. Each of these elements must be carefully drafted by a professional. Any error in stating the facts can be used as an admission of liability or contradiction by the opposing counsel in court.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    undefined
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="step-by-step-process" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Process of Drafting and Serving a Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  {["Drafting and serving a legal notice involves a series of structured steps that must be carried out with precision. You must gather and review all relevant documents, engage an advocate for drafting, approve the signature, dispatch via registered post or speed post, and monitor the compliance window. If the compliance period expires without a resolution, you gain strong grounds to initiate formal legal action in the competent court or tribunal.","In the Indian judicial system, serving a legal notice is considered a critical step in establishing the bona fides of the plaintiff.","It shows the court that the plaintiff did not rush to file a suit but acted in good faith, providing the defendant with a reasonable window to rectify their default.","When a court evaluates a civil dispute, the presence of a well-drafted notice and the recipient's response or lack of response are heavily scrutinized.","If the defendant failed to respond to a notice, the court may draw an adverse inference against them, assuming that they had no valid defense to offer at that stage.","This procedural advantage highlights why drafting must be handled with utmost diligence by experienced counsel.","Additionally, under the General Clauses Act, 1897, the service of a notice is governed by strict rules of presumption.","If the notice is sent to the correct address via registered post, the service is deemed to be complete regardless of whether the recipient signs the acknowledgment card or refuses delivery.","This prevents parties from evading their liabilities by simply ignoring the postman.","In commercial arbitration, the notice to commence arbitration under Section 21 of the Arbitration and Conciliation Act, 1996, marks the official start of the dispute resolution timeline, which is crucial for determining interest calculations and limitation periods.","For employment matters, serving a notice regarding withheld salaries or delayed gratuity payouts serves as a formal warning before approaching the labor commissioner or filing a summary suit.","It puts the corporate management on notice that their failure to clear the employee's dues will lead to personal and corporate liabilities, including legal expenses and interest charges.","Therefore, whether it is a business dispute, personal loan default, landlord-tenant conflict, or consumer grievance, the legal notice remains the most effective and widely used instrument of pre-litigation strategy in the country, securing rights and recovering dues efficiently without clogging the judicial process.","Under Section 74 of the Indian Contract Act, 1872, any clause in an agreement stipulating a penalty for breach is subject to reasonable compensation standards, meaning that courts will only award damages that represent actual losses suffered by the party.","This."].map((para, index) => (
                    <p key={index} className="text-sm md:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    {[{"title":"Step 1: Document Gathering and Review","desc":"Collect all relevant documents, including agreements, invoices, bank statements, and email communications. Verify the facts, dates, and calculations to ensure there are no inconsistencies."},{"title":"Step 2: Legal Drafting by Advocate","desc":"Engage a professional advocate to draft the legal notice on their official letterhead. The advocate will structure the facts, cite the correct legal provisions, and state the demands and warnings clearly."},{"title":"Step 3: Signature and Approval","desc":"Review the draft carefully. Once satisfied, both the sender and the advocate must sign the document. The advocate's signature validates the notice as a formal legal instrument."},{"title":"Step 4: Dispatch and Service","desc":"Dispatch the notice via Registered Post, Speed Post, or courier to ensure there is a clear record of delivery. An electronic copy can also be sent via email or WhatsApp to speed up the process."},{"title":"Step 5: Monitoring the Compliance Period","desc":"Track the delivery status online. Keep the delivery receipt and acknowledgment card safely. Wait for the compliance period (usually 15 to 30 days) to expire before deciding on the next steps."}].map((step, index) => (
                      <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="checklist-and-evidence" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Senders
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Before instructing your advocate to draft and serve a legal notice, you must ensure that you have all the necessary evidence to support your claims. Having a complete document trail prevents the recipient from denying the facts and ensures a strong case if you have to approach the court. This includes agreements, financial records, communication history, transaction proofs, and prior follow-ups.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Legal Notice Evidence Checklist</h3>
                    <ul className="space-y-3">
                      {[{"title":"Written Agreements","desc":"Signed copies of contracts, service agreements, lease deeds, or partnership deeds that define the terms of the transaction."},{"title":"Financial Records","desc":"Bank account statements, ledger accounts, receipts, and payment logs showing the transfer of money or the outstanding balance."},{"title":"Communication History","desc":"Printouts of emails, WhatsApp logs, SMS, and letters exchanged with the recipient regarding the dispute."},{"title":"Transaction Proofs","desc":"Invoices, purchase orders, delivery manifests, and receipts showing that the goods or services were delivered or received."},{"title":"Prior Follow-ups","desc":"Evidence of prior reminders, notices, or demand letters sent to the recipient requesting the resolution of the dispute."}].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                          <span className="text-sm text-slate-700">
                            <strong>{item.title}:</strong> {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="how-to-respond" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  How to Respond When You Receive a Legal Notice
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Receiving a legal notice can be a stressful experience, but it is important to handle it calmly and professionally. Under Indian law, ignoring a notice is a serious mistake that can harm your legal position if the sender files a lawsuit. You must carefully read and analyze the notice, consult a qualified advocate, draft a formal reply notice, and dispatch it to the sender's advocate within the compliance window.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    By sending a professional reply, you signal to the sender that you are prepared to defend your rights in court. In many cases, a well-reasoned reply highlighting the weaknesses in the sender's claim prompts them to reconsider their position and seek an amicable settlement out of court.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="dispute-success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Dispute Resolution Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and pre-litigation strategies help resolve personal and commercial disputes without entering courtrooms:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" key={i}>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</p>
                          <p className="text-[10px] text-slate-500">Verified Client Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
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

            {/* Right Column Sidebar with Requested Advice Card */}
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
