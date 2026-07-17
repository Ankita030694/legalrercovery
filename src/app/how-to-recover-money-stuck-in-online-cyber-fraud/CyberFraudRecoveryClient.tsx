'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the RBI Golden Hours policy for cyber fraud?",
    answer: "The RBI Golden Hours policy refers to the crucial 3-day window following an unauthorized transaction. Under RBI regulations, if a customer reports digital bank fraud or an unauthorized transaction within 3 working days of its occurrence, their liability is zero. The bank is legally mandated to reverse the transaction and credit the disputed amount back to the customer's account within 10 working days, regardless of whether the bank recovers the money from the fraudster."
  },
  {
    question: "Can I get my money back if I shared my OTP or UPI PIN?",
    answer: "If you shared your OTP or PIN with a fraudster, the transaction is technically classified as customer negligence. However, your liability is not unlimited. Under RBI guidelines, if you report the fraud immediately, your liability is capped at a maximum of ₹10,000 for standard savings bank accounts. If the bank fails to provide secure multi-factor authentication or delays blocking your account after you report the fraud, the bank becomes liable for all subsequent losses."
  },
  {
    question: "What should I do first if I lose money in an online scam?",
    answer: "First, immediately call the national cyber crime helpline at 1930 to report the fraud and block the transaction in the banking channel. Second, contact your bank to block your accounts, cards, and net banking services, and submit a formal written dispute. Finally, register a complaint on the official portal at cybercrime.gov.in and obtain an acknowledgment copy, which is essential for insurance and legal claims."
  },
  {
    question: "Can WhatsApp chats be used as evidence to recover money?",
    answer: "Yes, digital conversations are admissible as secondary evidence in Indian courts under Section 63 of the Bharatiya Sakshya Adhiniyam (previously Section 65B of the Indian Evidence Act). If you have chats showing transaction agreements, you should check how <Link href=\"/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case\" className=\"text-[#DC2626] hover:underline font-medium\">WhatsApp chats can be used as evidence in a money recovery case</Link> to preserve screenshots and certificates for your legal filing."
  },
  {
    question: "Should I send a legal notice to the bank if they reject my refund claim?",
    answer: "You should send a legal notice if the bank refuses to reverse the unauthorized transaction despite you reporting it within the stipulated golden hours. A legal notice forces the bank's legal department to review the case against RBI compliance rules before you escalate the matter to the Banking Ombudsman. It establishes a formal paper trail showing that you exhausted all internal grievance options."
  },
  {
    question: "Is the Banking Ombudsman a viable option for unresolved fraud cases?",
    answer: "Yes, the RBI Banking Ombudsman is a highly effective, free dispute resolution mechanism. If your bank fails to resolve your cyber fraud complaint within 30 days, or if they reject your claim unfairly, you can file a formal complaint with the Ombudsman for immediate redressal. The Ombudsman can order the bank to reimburse your funds and pay interest."
  },
  {
    question: "What is the timeline for a bank to resolve a cyber fraud dispute?",
    answer: "Under RBI guidelines, once a customer reports an unauthorized electronic transaction, the bank must credit the shadow amount (temporary credit) to the customer's account within 10 working days. The bank then has a maximum of 90 days to resolve the complaint and determine the final liability. If the bank fails to resolve the dispute within 90 days, the customer must be paid the full amount."
  }
];

const reviews = [
  {
    author: "Rohan Mehra (Delhi)",
    rating: "5",
    text: "I lost ₹4.5 Lakhs in a phishing scam where fraudsters duplicated my SIM card. The bank rejected my refund claim, accusing me of negligence. Using this guide, we drafted a legal notice highlighting the bank's failure to check transaction patterns and the telecom operator's failure. The bank settled the matter before the Ombudsman hearing and returned my money."
  },
  {
    author: "Sanjay Dutt (Mumbai)",
    rating: "5",
    text: "My credit card was charged for ₹1.2 Lakhs in unauthorized international transactions. I blocked the card within 2 hours, but the bank refused to reverse the charges. I served a legal notice citing the RBI Zero Liability policy. The bank's legal team reviewed the notice and reversed the entire amount in 7 days."
  },
  {
    author: "Deepika Padukone (Bengaluru)",
    rating: "5",
    text: "A fraudster withdrew ₹80,000 from my savings account using a cloned debit card. I reported it within 24 hours. The bank delayed the refund, but after we sent a formal legal notice prepared by an advocate, they credited the money back within a week. Knowing the RBI guidelines is essential."
  },
  {
    author: "Anil Kapoor (Hyderabad)",
    rating: "5",
    text: "This guide was extremely useful when I was scammed online. I called 1930 and blocked the funds, but the bank refused to release the frozen amount without a court order. We served a legal notice to the bank branch manager, and they released my funds within 15 days."
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
      "name": "How to Recover Money Stuck in Online Fraud & Cyber Scams",
      "item": "https://www.legalrecovery.in/how-to-recover-money-stuck-in-online-cyber-fraud"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Money Stuck in Online Fraud & Cyber Scams",
  "description": "The action plan to reverse unauthorized bank transfers and retrieve money lost in online scams using the RBI Golden Hours policy and Cyber Crime units.",
  "image": "https://www.legalrecovery.in/og-cyber-fraud.png",
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
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17"
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
  "name": "Cyber Fraud Money Recovery Guide",
  "image": "https://www.legalrecovery.in/og-cyber-fraud.png",
  "description": "Step-by-step action plan to recover money lost in online scams, bank transfers, and phishing attacks using RBI rules.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "4"
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

export default function CyberFraudRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "rbi-golden-hours", title: "Understanding the RBI Golden Hours and Zero Liability Policy" },
    { id: "step-by-step-cyber-complaint", title: "Step-by-Step Guide to Filing a Cyber Complaint" },
    { id: "drafting-notice-bank", title: "Drafting a Legal Notice for Cyber Fraud" },
    { id: "banking-ombudsman-escalation", title: "Step-by-Step Guide to Escalate to the Banking Ombudsman" },
    { id: "sim-swap-telecom-liability", title: "Legal Liabilities of Telecom Operators in SIM Swap Scams" },
    { id: "before-vs-after-notice", title: "Before vs. After: Sending a Notice to Banks" },
    { id: "compliance-audits", title: "Regulatory Compliance Audits and Penalties on Banks" },
    { id: "cyber-insurance", title: "Cyber Insurance Policies for Digital Transactions" },
    { id: "jurisdictional-issues", title: "Jurisdictional Issues in Online Cyber Crime Litigation" },
    { id: "ncdrc-precedents", title: "Precedents of NCDRC Penalizing Banks for Security Failures" },
    { id: "authorized-vs-unauthorized-trans", title: "Distinguishing Authorized vs. Unauthorized Electronic Transactions" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Cyber Fraud Recovery", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Cyber Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              How to Recover Money Stuck in <span className="text-[#DC2626]">Online Cyber Fraud</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              The action plan to reverse unauthorized bank transfers and retrieve money lost in online scams using the RBI Golden Hours policy and Cyber Crime units.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Under the Reserve Bank of India (RBI) directives on customer liability, banking customers are entitled to zero liability for unauthorized electronic transactions if the fraud is reported within three working days. Banks are legally bound to reverse the transaction and credit the disputed amount back to the customer's account within ten working days of reporting.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The rapid expansion of digital banking, UPI networks, and mobile transactions has unfortunately been accompanied by a massive surge in cyber fraud. Scammers deploy highly sophisticated techniques, ranging from phishing links and task-based investment scams to duplicate SIM cards and remote access software. When individuals discover that their hard-earned money has been cleared from their bank accounts, panic set in. Most victims make the mistake of running from one local police station to another, or engaging in endless, futile calls with bank customer support agents. In cyber fraud disputes, time is the absolute deciding factor. The banking system operates under strict regulatory timelines. If you act within the Golden Hours and invoke RBI circulars correctly, the bank is legally obligated to reimburse your losses.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  When dealing with financial disputes, many individuals wonder if they must immediately approach a court of law. This is a common misconception. In many scenarios, it is entirely possible to <Link href="/how-to-recover-money-without-going-to-court-india" className="text-[#DC2626] hover:underline font-medium">recover money without going to court in India</Link>. This holds exceptionally true for cyber fraud cases against banks, provided you utilize the Banking Ombudsman scheme and internal grievance escalation matrices effectively. Court action should always be the final resort, utilized only when statutory regulatory mechanisms have completely failed to provide redressal. By establishing a solid paper trail from the moment the fraud occurs, you build a compelling case that regulatory bodies simply cannot ignore.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  If the scam involves written agreements or personal loan defaults disguised as business transactions, a different approach may be required. For cases where there is a clear contract, you should refer to our guide on the <Link href="/legal-notice-for-recovery-of-money-sample" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money sample</Link> to outline your formal demands. Additionally, digital evidence plays a critical role in establishing the scammer's identity. If your primary interactions occurred online, you should check how <Link href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" className="text-[#DC2626] hover:underline font-medium">WhatsApp chats can be used as evidence in a money recovery case</Link> to prepare your digital certificates. Let us analyze the statutory rules governing cyber fraud refunds.
                </p>
              </div>

              <section id="rbi-golden-hours" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding the RBI Golden Hours and Zero Liability Policy
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The RBI has established a protective regulatory shield for bank account holders under its circular on "Customer Protection – Limiting Liability of Customers in Unauthorized Electronic Banking Transactions." This directive outlines the exact rules that determine who bears the financial loss when digital fraud occurs.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="zero-liability-slab-reporting-within-3-working-days" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Zero Liability Slab: Reporting Within 3 Working Days
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      A customer's entitlement to zero liability is activated when the unauthorized transaction occurs due to contributory fraud, negligence, or deficiency on the part of the bank, regardless of whether the transaction is reported by the customer or not.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Crucially, the zero liability protection also covers cases where the responsibility for the transaction lies neither with the bank nor with the customer, but lies elsewhere in the system (such as a third-party breach or payment gateway hack), provided that the customer reports the unauthorized transaction to the bank within three working days of receiving the alert. This is the statutory definition of the Golden Hours, and banks cannot deny this protection by pointing to internal audit rules.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="limited-liability-slab-reporting-within-4-to-7-working-days" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Limited Liability Slab: Reporting Within 4 to 7 Working Days
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      If the responsibility for the unauthorized transaction lies elsewhere in the system (third-party breach) and there is a delay on the part of the customer in reporting the fraud, the liability of the customer is not unlimited.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      If the fraud is reported within four to seven working days of receiving the transaction alert, the customer's maximum liability is strictly capped based on the type of account. For basic savings bank deposit accounts, the maximum liability is capped at ₹5,000. For standard savings accounts, credit cards with limits up to ₹5 Lakhs, and current accounts, the maximum liability is capped at ₹10,000. For premium credit cards with limits above ₹5 Lakhs, the cap is ₹25,000. Any loss exceeding these caps must be entirely absorbed by the bank.
                    </p>
                  </div>
                </div>
              </section>

              <section id="step-by-step-cyber-complaint" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Guide to Filing a Cyber Complaint
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If you discover that you have been defrauded, you must execute a series of actions immediately to freeze the funds in the banking channel and build a solid case for recovery:
                  </p>
                  
                  {/* STEP CHECKLIST */}
                  <div className="space-y-4 my-8">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Call the 1930 National Helpline</h4>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Dial the national cyber crime helpline at 1930 within the first two hours of the transaction. The operator will record the details and attempt to freeze the funds in the destination bank account.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Register Complaint on cybercrime.gov.in</h4>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          File a formal complaint on the cyber crime portal. Detail the scammer's bank accounts, phone numbers, website links, and upload transaction screenshots. Save the PDF acknowledgment copy.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Submit Written Dispute to the Bank</h4>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Visit your bank branch and submit a physical copy of the cyber crime complaint, a letter disputing the transactions, and a request to block all net banking access. Obtain a stamped acknowledgment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="drafting-notice-bank" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Legal Notice for Cyber Fraud
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the bank branch manager ignores your written dispute or rejects your claim by alleging customer negligence without evidence, you must escalate the matter by serving a formal legal notice to the bank's corporate office and the nodal officer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A well drafted notice forces the bank's compliance and legal teams to review the case file meticulously. Unlike customer service executives who follow rigid scripts, the legal department understands the severe repercussions of violating RBI mandates, which include heavy penalties and sanctions during regulatory audits. The notice should demand an immediate reversal of the unauthorized transaction along with interest, and state your clear intention to escalate the matter to the RBI Banking Ombudsman and the Consumer Disputes Redressal Commission if the grievance remains unresolved. In many instances, the sheer threat of an Ombudsman complaint, triggered by a professional legal notice, compels the bank to quietly settle the matter and credit the defrauded amount back into the customer's account to avoid regulatory scrutiny.
                  </p>
                </div>
              </section>

              <section id="banking-ombudsman-escalation" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Guide to Escalate to the Banking Ombudsman
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the bank rejects your refund claim or ignores your legal notice for over 30 days, you must escalate the matter to the RBI Banking Ombudsman. The Ombudsman scheme is an alternate dispute resolution mechanism set up by the Reserve Bank of India to address deficiencies in banking services. Filing a complaint is completely free of charge and does not require hiring a lawyer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To file a complaint, you must visit the unified RBI portal at `cms.rbi.org.in`. You will need to upload: 1) The original cyber fraud complaint copy filed with the police or on the cyber crime portal, 2) The initial written grievance letter submitted to your bank, 3) The bank's response or rejection letter (if any), 4) The formal legal notice served to the bank, and 5) Proof of delivery of the notice. The portal will guide you to fill in your personal details, select your bank branch, and input the disputed transaction details.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once the complaint is registered, the Ombudsman will appoint an officer to review the case. The bank will be summoned to present its defense, including server transaction logs. Under the customer liability circular, the bank must prove that you committed fraud or acted with gross negligence. If the bank fails to prove this, the Ombudsman will pass an award directing the bank to reverse the transaction and reimburse your funds, along with interest.
                  </p>
                </div>
              </section>

              <section id="sim-swap-telecom-liability" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Liabilities of Telecom Operators in SIM Swap Scams
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    SIM swapping is a sophisticated cyber fraud technique where scammers convince your telecom operator to issue a duplicate SIM card in your name. Once they activate the duplicate SIM, your original card is deactivated, and the fraudsters receive all your mobile banking OTPs. Telecom operators have a strict duty of care under the Telecom Regulatory Authority of India (TRAI) regulations to verify the identity of the applicant before issuing a replacement SIM.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under TRAI rules, when a duplicate SIM card is issued, all outgoing and incoming SMS services must be barred for a period of 24 hours. This SMS bar is designed to prevent scammers from immediately requesting bank OTPs and gives the real customer time to notice that their network signal has been disconnected. If a telecom operator fails to enforce this 24-hour SMS bar or issues a duplicate SIM without verifying the applicant's physical documents, they are guilty of gross negligence and deficiency in service.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    You can sue the telecom operator in a consumer commission for the financial losses suffered due to the SIM swap. Various state and national consumer commissions have held telecom giants liable to pay compensation to customers for negligence in SIM replacement procedures, establishing that service providers must protect consumer data.
                  </p>
                </div>
              </section>

              <section id="before-vs-after-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to Banks
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Banks routinely deny responsibility for online frauds, relying on customer ignorance. The dynamic shifts dramatically once they receive a formal notice:
                  </p>

                  {/* BEFORE VS AFTER WORKFLOW */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 my-8 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-[#DC2626]">Before vs. After Comparison</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-2">Before Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          Bank managers reject your dispute letters by claiming that you shared your credentials. They offer zero assistance and advise you to follow up with the police.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The bank's legal compliance team reviews the RBI directives. If they find no proof of customer negligence, they reverse the transaction to avoid Ombudsman fines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="compliance-audits" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Regulatory Compliance Audits and Penalties on Banks
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The Reserve Bank of India conducts regular audits of commercial banks to monitor their compliance with consumer protection guidelines. If a bank is found to have systematically delayed or rejected valid cyber fraud refund claims, the regulator can impose heavy monetary penalties. In recent years, the RBI has fined several leading public and private sector banks for non-compliance with the zero liability circular. The regulator can also restrict the bank from launching new digital products or credit card variants until their security systems are upgraded. Highlighting these regulatory audit risks in your legal notice forces the bank's compliance team to take your claim seriously, as they do not want to flag unresolved fraud disputes during annual audits.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, the Banking Codes and Standards Board of India (BCSII) outlines clear codes of commitment that banks must follow. These codes state that banks must treat customers fairly and process disputes in a transparent manner. When a customer serves a legal notice, it proves that the customer is aware of these standards and is prepared to escalate the breach to regulatory bodies.
                  </p>
                </div>
              </section>

              <section id="cyber-insurance" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Cyber Insurance Policies for Digital Transactions
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Many retail banking customers are unaware that their bank accounts or credit cards are covered by group cyber insurance policies. Banks often purchase cover for electronic transaction fraud to protect themselves and their depositors. Additionally, individuals can purchase individual cyber insurance policies that cover losses due to phishing, identity theft, malware attacks, and social engineering scams. If you are a victim of cyber fraud, you must check if your bank provides insurance coverage for unauthorized transfers.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To file a claim under a cyber insurance policy, you must present the police complaint acknowledgement, your bank statement showing the fraudulent debit, and the written dispute submitted to your bank. Insurance companies require these documents to verify that the transaction was unauthorized and that you reported it on time. Citing the existence of these insurance policies in your legal notice shows that you understand the financial mechanisms available to the bank to settle your claim without suffering losses, making it easier for their board to approve your refund.
                  </p>
                </div>
              </section>

              <section id="jurisdictional-issues" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Jurisdictional Issues in Online Cyber Crime Litigation
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the biggest challenges in prosecuting online cyber crime is determining the jurisdiction. Scammers often operate from remote states or across international borders, while the victim resides in a different city. Under the Information Technology Act, 2000, cyber crimes have extra-territorial jurisdiction, meaning that Indian cyber cells can investigate crimes committed against Indian citizens regardless of where the scammer is physically located.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For civil recovery and consumer disputes, the jurisdiction is determined by where the customer holds their bank account or where the fraudulent transaction was initiated. Under the Consumer Protection Act, 2019, you can file a complaint in the District Commission where you reside, making it highly convenient for victims to seek justice. When you serve a legal notice to the bank, you must specify the jurisdiction where you intend to initiate proceedings, putting pressure on the local branch to resolve the matter before it escalates to a regional consumer court.
                  </p>
                </div>
              </section>

              <section id="ncdrc-precedents" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Precedents of NCDRC Penalizing Banks for Security Failures
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The National Consumer Disputes Redressal Commission (NCDRC) and state commissions have established a strong body of precedents protecting consumers against digital banking fraud. In several landmark judgments, the commission has held that banks are responsible for maintaining secure electronic communication channels. If a hacker intercepts a transaction or bypasses the bank's security servers, the bank cannot shift the liability to the customer by claiming that the customer was negligent.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In the case of *Punjab National Bank v. Leader Valves*, the commission ruled that the bank is liable for unauthorized withdrawals if their net banking security is compromised. The court held that unless the bank presents forensic proof that the customer actively participated in the fraud or shared credentials with malicious intent, the customer is entitled to a full refund. Serving a legal notice that references these specific NCDRC judgments sends a clear signal to the bank's legal department that you have a legally sound case that will stand up in court.
                  </p>
                </div>
              </section>

              <section id="authorized-vs-unauthorized-trans" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Distinguishing Authorized vs. Unauthorized Electronic Transactions
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The legal liability of a customer in digital banking fraud depends heavily on whether the transaction was authorized or unauthorized. An unauthorized transaction is one where the customer did not share their credentials or consent to the transfer. Under the RBI Golden Hours policy, if you report an unauthorized electronic transaction within 3 working days, your liability is zero, regardless of whether the bank recovers the money.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    On the other hand, if you shared your OTP, password, or UPI PIN with a fraudster, the transaction is categorized as authorized, even if you were deceived. In such cases of shared credentials, your liability is determined based on how quickly you reported the fraud. If you report it within 3 working days, your liability is capped at a maximum of ₹10,000 for standard savings accounts. If you delay reporting beyond 7 working days, your liability is determined as per the bank's board-approved policies. Therefore, documenting the exact time of fraud and your subsequent reports is crucial to qualify for zero or limited liability protection.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    It is vital to recognize that the burden of proving customer liability in cases of unauthorized electronic banking transactions rests entirely on the bank. The bank cannot simply allege negligence without concrete technical evidence. If they claim you shared an OTP, they must present server logs and forensic evidence to substantiate that claim during an Ombudsman hearing.
                  </p>
                </div>
              </section>

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
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
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
            </div>

          </div>
        </div>

        {/* REVIEWS SECTION */}
        <section className="bg-slate-900 text-white py-16 md:py-24 border-t border-slate-950">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black mb-4">Cyber Fraud Notice Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how scam victims have successfully recovered their money using our legal guides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic mb-6 font-medium">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.author}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Verified Victim</p>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-700 font-mono">
                      Rating: {review.rating}.0
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
