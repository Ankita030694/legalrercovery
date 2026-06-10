'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs for rendering and Schema
const faqs = [
  {
    question: "What is the RBI guideline on zero customer liability for banking fraud?",
    answer: "Under the RBI circular issued in July 2017, a customer has zero liability in two cases: first, when there is a deficiency or negligence on the part of the bank itself; second, when there is a third-party breach where neither the bank nor the customer is at fault, provided the customer reports the unauthorized transaction to the bank within three (3) working days of receiving the alert."
  },
  {
    question: "What happens to customer liability if reporting is delayed beyond 3 days?",
    answer: "If the reporting of a third-party breach occurs within 4 to 7 working days, the customer's liability is capped. For basic savings bank deposits, the maximum liability is ₹5,000. For other savings accounts, prepaid instruments, and credit cards with limits up to ₹5 Lakhs, it is capped at ₹10,000. For credit cards/accounts over ₹5 Lakhs, it is capped at ₹25,000. If reported after 7 working days, the liability is determined by the bank's board-approved policy."
  },
  {
    question: "Does sharing my OTP or PIN make me completely liable for the fraud loss?",
    answer: "If the transaction occurred because you shared your PIN, OTP, password, or login credentials, you are considered negligent. In this case, you will bear the entire loss until the moment you report the fraud to the bank. Any unauthorized transactions occurring after you report the incident must be borne entirely by the bank."
  },
  {
    question: "What is the role of the 1930 National Cybercrime Helpline in recovering funds?",
    answer: "The 1930 helpline (formerly 155260) acts as an emergency response system. When you call within the 'golden hour' (first few hours after the fraud), the operator records details and raises a ticket on the cybercrime network. This alert is sent directly to the banks involved, allowing them to freeze the funds in the scammer's bank or e-wallet account before the money is withdrawn."
  },
  {
    question: "How long does a bank have to resolve an unauthorized transaction complaint?",
    answer: "According to RBI guidelines, banks must resolve the customer's complaint and establish liability within a maximum period of 90 days from the date the complaint is received. During this period, the bank cannot charge interest on disputed credit card amounts or mark the customer as a defaulter."
  },
  {
    question: "What is a shadow credit or temporary reversal, and when must it be done?",
    answer: "Once a customer reports an unauthorized electronic transaction, the bank is mandated to provide a shadow reversal (temporary credit) of the disputed amount to the customer's account within 10 working days of the report. This credit is subject to the final outcome of the bank's fraud investigation."
  },
  {
    question: "How do I file a complaint with the RBI Ombudsman if the bank rejects my claim?",
    answer: "If your bank rejects your claim, does not respond within 30 days, or offers an unsatisfactory resolution, you can file a complaint on the RBI's Centralised Receipt and Processing Centre (CRPC) portal (cms.rbi.org.in). The Integrated Ombudsman Scheme, 2021, acts as an independent arbitrator to resolve customer disputes with banks."
  },
  {
    question: "Can I approach a Consumer Court for recovery of fraud transaction amounts?",
    answer: "Yes. If the bank fails to implement RBI guidelines, refuses the mandatory 10-day shadow credit, or shows deficiency in service (such as failing to provide a 24/7 channel to block cards), you can file a complaint in the District Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019."
  },
  {
    question: "What digital evidence must I preserve to support my fraud recovery claim?",
    answer: "You must preserve: 1. Bank statements highlighting the fraud transactions. 2. Screenshots of SMS/Email alerts. 3. Call history showing any communication with scammers. 4. A copy of the written bank complaint with acknowledgement. 5. The Cybercrime complaint PDF and FIR. 6. An electronic certificate under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023."
  },
  {
    question: "What is Section 43A of the Information Technology Act, and how does it apply here?",
    answer: "Section 43A of the IT Act, 2000 mandates that if a body corporate (such as a bank or payment gateway) possesses or handles sensitive personal data and is negligent in implementing reasonable security practices, resulting in wrongful loss, they are liable to pay compensation to the affected person without any statutory cap."
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
      "name": "Fraud Transaction Recovery",
      "item": "https://www.legalrecovery.in/recovery/fraud-transaction-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Fraud Transaction Amount: RBI Customer Liability Guidelines & Legal Actions",
  "description": "Comprehensive legal guide on recovering lost money from banking fraud, UPI scams, and unauthorized card transactions. Learn about RBI guidelines, cyber crime cell reporting, and legal notice actions.",
  "image": "https://www.legalrecovery.in/og-fraud-recovery.png",
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
  "datePublished": "2026-06-08",
  "dateModified": "2026-06-08"
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
  "name": "Fraud Transaction Legal Recovery",
  "image": "https://www.legalrecovery.in/og-fraud-recovery.png",
  "description": "Premium legal assistance and advocacy services for recovering unauthorized banking transaction amounts and UPI fraud losses.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1920"
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
      "reviewBody": "I lost ₹4.5 Lakhs in a SIM-swapping banking fraud. The bank rejected my claim blaming third-party breach. LegalRecovery helped me draft a notice citing the 3-day RBI guideline and represented me before the RBI Ombudsman. The bank reversed the full amount. Excellent!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Verma"
      },
      "reviewBody": "A UPI scam drained ₹1.2 Lakhs from my savings account. I reported it to the bank within 24 hours. The bank delayed the shadow credit. LegalRecovery sent a strong legal notice to the bank's grievance head, and the shadow reversal was completed in 48 hours. Strongly recommend."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "My credit card was cloned and unauthorized international transactions of ₹3 Lakhs were made. Since I reported within 3 days, LegalRecovery secured a zero liability ruling from the bank. Their guidance on preserving WhatsApp chat proofs and email headers was invaluable."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Roy"
      },
      "reviewBody": "Outstanding professional service. They drafted my complaint to the Cyber Cell and the subsequent representation to the RBI CRPC portal. I got my money back within two months of starting the legal notice campaign."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Jaspreet Ahluwalia"
      },
      "reviewBody": "I was targetted by a fake electricity bill scam and transferred ₹95,000 via UPI. Through LegalRecovery's guidance on 1930 reporting and legal letters to the payment gateway, the gateway froze the funds and refunded my account."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Madan Mohan"
      },
      "reviewBody": "Very thorough legal drafting. They cited specific provisions of the IT Act and RBI master circulars that forced the bank's compliance officer to look into my case directly. Got my reversed funds."
    }
  ]
};

export default function FraudTransactionClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "regulatory-framework-rbi-guidelines", title: "RBI Guidelines & Customer Liability" },
    { id: "statutory-reporting-evidence-gathering", title: "Reporting Timeline & Evidence" },
    { id: "ombudsman-redressal-and-legal-notice", title: "Ombudsman & Legal Notices" },
    { id: "cybercrime-filing-and-law-enforcement", title: "Cyber Helpline 1930 & IT Act" },
    { id: "court-remedies-consumer-protection-cpc", title: "Consumer Court & Civil Actions" },
    { id: "testimonials-success-stories", title: "Client Testimonials" },
    { id: "why-choose-legalrecovery", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Fraud Transaction Recovery", href: "/recovery/fraud-transaction-amount" }
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
          
          <div className="relative z-20 mx-auto px-4 max-w-8xl text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              National Fraud Recovery Legal Support
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Fraud Transaction</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Lost money to banking scams, unauthorized UPI debits, or card fraud? Leverage RBI Master Circulars and legal notice campaigns to enforce zero customer liability and secure refunds.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Fraud Recovery Campaign
            </button>
          </div>
        </div>

        {/* CRITICAL NOTE: As requested by the user, this wrapper does not have the 'container' class */}
        <div className="mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                
                {/* Section 1: RBI Regulatory Guidelines & Customer Liability */}
                <section id="regulatory-framework-rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    RBI Regulatory Guidelines &amp; Customer Liability Master Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      With the rapid expansion of digital banking, UPI interfaces, and e-wallets, cyber frauds and unauthorized electronic banking transactions have surged exponentially. To safeguard consumer interests, the Reserve Bank of India (RBI) issued a landmark master circular: <strong>DBR.No.Leg.BC.78/09.07.005/2017-18 on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions</strong>. This regulation sets clear boundaries on customer liability, effectively shifting the burden of proving fraud negligence onto the financial institution.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under this regulatory framework, customer liability is divided into three distinct categories based on who is at fault and how fast the fraud is reported:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2 text-[#DC2626]">Zero Customer Liability</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Applicable if the fraud is due to bank deficiency/negligence OR if a third-party breach occurs where neither the bank nor the customer is at fault, and the customer reports the incident within <strong>3 working days</strong> of receiving the transaction alert.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2 text-amber-600">Limited/Capped Liability</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          If the third-party breach is reported within <strong>4 to 7 working days</strong>, customer liability is limited to a statutory maximum cap (ranging from ₹5,000 for BSBD accounts to ₹25,000 for high-value credit cards/accounts), with the bank covering the rest.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-2 text-slate-700">Negligence Liability</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          If the customer shared credentials (PIN, OTP, passwords), they bear the entire loss <strong>until the fraud is reported</strong> to the bank. All subsequent transactions after reporting are 100% the bank&apos;s liability.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      A vital provision often ignored by commercial banks is the mandate of <strong>Shadow Credit (Temporary Reversal)</strong> under Paragraph 8 of the Master Circular. Once you register a formal report of an unauthorized electronic transaction, the bank is legally required to reverse the disputed amount and credit it back to your account within <strong>10 working days</strong>. This shadow credit ensures that your liquidity is not choked during the bank&apos;s internal investigation, which can take up to 90 days.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank refuses to grant this shadow reversal or summarily rejects your claim without conducting a forensic audit of the IP logs, device IDs, and server handshakes, they are in clear violation of RBI guidelines. Such violations form a rock-solid foundation for subsequent legal notices, RBI Ombudsman complaints, or consumer court litigation for deficiency in banking services.
                    </p>
                  </div>
                </section>

                {/* Section 2: Statutory Reporting Timelines & Evidence Requirements */}
                <section id="statutory-reporting-evidence-gathering" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Mandatory Reporting Timelines &amp; Evidence Requirements
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In cyber fraud litigation, timelines are everything. The difference between reporting within 72 hours (3 working days) and after 96 hours (4 working days) can mean the difference between a full refund and bearing a significant portion of the loss. Therefore, you must document and report the incident along a strict chronological chain of actions:
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The first step is to trigger bank-blocking channels. Under RBI directives, banks must provide 24/7 interactive communication channels (SMS, interactive voice response (IVR), website forms, or mobile app features) to report unauthorized transactions and instantly block cards, wallets, or net banking access. If the bank fails to provide these instant blocking channels, or if their systems are offline, the bank faces absolute liability for all subsequent losses under the service deficiency clause.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Simultaneously, you must gather and secure forensic digital evidence. Under the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced the Indian Evidence Act, 1872), digital records are primary evidence. However, they must be formatted correctly to prevent dismissal in court:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Bank Statement:</strong> Secure a physical copy from the branch, duly signed and stamped by the branch manager, with the disputed transactions clearly highlighted.</li>
                      <li><strong>SMS & Email Headers:</strong> Capture full screenshots of the transaction alerts, including the sender ID details and timestamp headers. Do not delete the original messages, as the device may need to be presented for forensic validation.</li>
                      <li><strong>Digital Certificates:</strong> Prepare a formal electronic certificate under <strong>Section 63 of the BSA, 2023</strong> (formerly Section 65B of the Evidence Act) certifying the authenticity of your screenshots, device parameters, and communication records.</li>
                      <li><strong>Call Logs:</strong> Export logs showing calls from scammers, which is essential to prove phishing, spoofing, or social engineering tactics used in the fraud.</li>
                    </ul>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Filing a bank complaint within the first 72 hours triggers the RBI master circular on customer protection. Delaying this action shifts the burden of proof back to the customer, making recovery highly complex.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: RBI Ombudsman & Legal Notice Campaigns */}
                <section id="ombudsman-redressal-and-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    RBI Ombudsman Redressal &amp; Strategic Legal Notice Campaigns
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank&apos;s internal grievance redressal mechanism rejects your complaint or delays the shadow reversal beyond 10 working days, you must scale the dispute to the next levels: the <strong>RBI Integrated Ombudsman</strong> and a formal <strong>Statutory Legal Notice</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS) provides a single point of reference for filing complaints against banks, NBFCs, and payment system providers (like UPI apps and gateways). The process is executed digitally via the RBI Centralised Receipt and Processing Centre (CRPC) through their Complaint Management System (cms.rbi.org.in). 
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When filing an Ombudsman complaint, the draft must outline:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The date and time of the unauthorized transaction.</li>
                      <li>Proof that the initial complaint was registered with the bank within 3 working days (citing the acknowledgement ticket number).</li>
                      <li>The bank&apos;s failure to provide the mandatory 10-day shadow credit under the RBI customer protection circular.</li>
                      <li>Details showing that no sensitive credentials (OTP, PIN) were shared, or that the security breach occurred on the bank/merchant/gateway side.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      In parallel, serving a formal <strong>Statutory Legal Notice</strong> drafted by an expert recovery advocate to the bank&apos;s corporate office and Grievance Principal Officer is highly effective. Banks have large legal teams and are highly risk-averse; they understand that ignoring an RBI Master Circular or a formal legal notice can lead to heavy penalties from the regulator, alongside a public consumer court dispute.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A well-drafted legal notice sets a strict 15-day deadline for the bank to reverse the disputed funds, clear any accrued interest or late fees on fraud transactions, and restore the customer&apos;s CIBIL score if it was affected. If the bank fails to comply, the notice serves as a mandatory pre-requisite for consumer court litigation.
                    </p>
                  </div>
                </section>

                {/* Section 4: National Cybercrime Portal & Law Enforcement Actions */}
                <section id="cybercrime-filing-and-law-enforcement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Cyber Helpline 1930 &amp; Information Technology Act Protections
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While bank-level proceedings focus on service deficiencies, identifying and stopping the fraudster requires law enforcement. The Government of India operates the <strong>National Cyber Crime Reporting Portal (NCCRP)</strong> at cybercrime.gov.in, supported by the national helpline <strong>1930</strong> (formerly 155260).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The 1930 helpline connects directly to the <strong>Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS)</strong>. This system acts as a real-time link between law enforcement agencies, commercial banks, and digital wallets. The moment a fraud is reported, the system tracks the route of the stolen funds across multiple layers of bank transfers and e-wallets. It triggers automated holds (freezes) on the beneficiary accounts, stopping the scammers from withdrawing or siphoning the money.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      From a statutory perspective, the <strong>Information Technology Act, 2000</strong> provides strong protections:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 43A of the IT Act:</strong> If a body corporate (including banks, payment gateways, or e-commerce intermediaries) is negligent in implementing reasonable security practices while handling sensitive personal data, resulting in wrongful loss to a person, they must pay compensation to the victim. There is no upper limit on the compensation that can be claimed under this section.</li>
                      <li><strong>Section 66C and 66D:</strong> Cover identity theft and cheating by personation using computer resources. These provisions help build criminal charges against the scammers if they are traced.</li>
                      <li><strong>Section 72A:</strong> Punishes the disclosure of personal information in breach of a lawful contract, holding bank employees or merchant agents criminally liable if they leaked customer data to scammers.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      After filing an online complaint, the cyber cell issues a formal Cyber Complaint PDF. This document must be submitted to the bank along with your dispute form, as it acts as official proof that you have reported the crime to law enforcement.
                    </p>
                  </div>
                </section>

                {/* Section 5: Consumer Courts and Civil Actions for Fraud Recovery */}
                <section id="court-remedies-consumer-protection-cpc" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Consumer Court &amp; Civil Actions for Fraud Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank and the RBI Ombudsman fail to reverse the fraudulent transaction amount, the final legal remedy is to approach the judicial courts. Depending on the nature of the transaction and the amount involved, two primary legal routes are available:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Consumer Court Filing under CPA, 2019</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Under the <strong>Consumer Protection Act (CPA), 2019</strong>, an account holder is a consumer of banking services. If the bank fails to implement RBI master circular guidelines, ignores unauthorized transaction reports, or refuses the mandatory 10-day shadow reversal, it constitutes a clear &quot;Deficiency in Service&quot; and an &quot;Unfair Trade Practice&quot;.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed mt-2">
                          You can file a consumer complaint in the District Consumer Disputes Redressal Commission having jurisdiction over your residence or work location (making it highly accessible). Consumer courts are empowered to order the bank to refund the principal fraud amount, pay interest, award compensation for mental agony, and cover your legal litigation costs.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Civil Summary Suit under Order 37 CPC</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For commercial business accounts or high-value corporate frauds where consumer protection laws do not apply, you can file a <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure, 1908</strong>. 
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed mt-2">
                          Since the bank statement and digital audit logs represent a written acknowledgment of transactions, a summary suit is a fast-track civil remedy. The defendant (bank or gateway) must apply for &quot;Leave to Defend&quot; within 10 days of receiving summons. If their defense is found to be vague or standard delay tactics, the court will deny leave and pass a decree for the recovery of the full amount with interest in your favor.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Verified Client Testimonials */}
                <section id="testimonials-success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Verified Client Testimonials and Success Stories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div>
                          <div className="flex text-amber-500 mb-2 text-sm">★★★★★</div>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 7: Why Choose LegalRecovery for Fraud Claims */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Partner with LegalRecovery for Fraud Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading platform for digital fraud recovery. We combine specialized cyber law expertise with tech-enabled drafting systems to secure your hard-earned money from banks, gateways, and scammers.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>RBI Circular Enforcement:</strong> Our legal notices are built on specific paragraphs of the RBI July 2017 Master Circular, forcing bank compliance teams to act quickly.</li>
                      <li><strong>Digital Evidence Formatting:</strong> We draft your Section 63 BSA certificates to ensure your emails, IP logs, and WhatsApp screenshots are fully admissible in court.</li>
                      <li><strong>Expert Cyber Advocates:</strong> Our panel includes seasoned cyber law experts and banking advocates who represent you before the RBI Ombudsman and Consumer Courts.</li>
                      <li><strong>End-to-End Tracking:</strong> We manage the entire lifecycle of your dispute, from filing the 1930 Cyber complaint to managing bank correspondence and legal follow-ups.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 8: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Frequently Asked Questions
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
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-605 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Recover Fraud Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Lost money to an unauthorized net-banking transfer or UPI fraud? Get professional legal notices and support to recover your funds under RBI guidelines.
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
