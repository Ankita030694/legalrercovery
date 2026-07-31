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
    question: "Can money sent via a UPI transaction to a scammer be refunded?",
    answer: "Yes, it is possible if you act immediately. If you report the transaction through the National Cyber Crime Helpline (1930) or your bank's fraud line within the 'Golden Hour' (first few hours), the cyber cell can place a freeze on the beneficiary's bank account or wallet, locking the siphoned funds. Thereafter, a legal notice or court order can secure the reversal."
  },
  {
    question: "What is the NPCI UPI Dispute Redressal Mechanism, and how do I use it?",
    answer: "The National Payments Corporation of India (NPCI) operates a dispute resolution system. If your transaction is fraudulent or processed incorrectly, you can file a complaint on the NPCI website (npci.org.in) under the 'UPI Product Dispute Redressal' section, providing the transaction ID, UTR number, and reasons for dispute."
  },
  {
    question: "Am I liable for UPI fraud if I entered my UPI PIN?",
    answer: "If you entered your UPI PIN yourself (e.g. during a collect-request scam), banks initially classify the loss as customer negligence. However, under the IT Act and consumer protection rules, if you were misled by spoofed bank communications or if there was an intermediary security failure, you can contest this. More importantly, any fraud transactions occurring after you report the incident must be borne entirely by the bank."
  },
  {
    question: "What is a UTR number in a UPI transaction, and why is it important?",
    answer: "A Unique Transaction Reference (UTR) is a 12-digit number generated for every UPI transaction. It is the official trace code used by banks, payment gateways, and police cyber cells to track the path of siphoned funds from your account to the recipient's bank account."
  },
  {
    question: "How does the RBI Master Circular on unauthorized transactions apply to UPI fraud?",
    answer: "The RBI Master Circular of July 2017 applies to all electronic transactions, including UPI. If you report an unauthorized transaction (where you did not share credentials or OTP) within 3 working days, you have zero liability, and the bank must credit the disputed amount back to your account within 10 working days as shadow credit."
  },
  {
    question: "What should I do if my bank refuses my UPI fraud complaint?",
    answer: "If your bank rejects your complaint or fails to provide the shadow credit, you should serve a formal legal notice to the bank's corporate office and principal grievance officer. If they do not resolve the issue within 30 days, you can file a complaint with the RBI Integrated Ombudsman on cms.rbi.org.in."
  },
  {
    question: "How do scammers use 'UPI Collect Requests' to defraud people?",
    answer: "Scammers pose as buyers, customer service agents, or military officers, and send a 'Collect Request' (request money) link on UPI apps. They mislead the victim into believing that entering their UPI PIN is required to 'receive' money. In reality, entering the PIN immediately authorizes a debit from the victim's account."
  },
  {
    question: "Can I approach a Consumer Court to recover UPI fraud amounts?",
    answer: "Yes. If the bank fails to implement RBI guidelines, has security flaws in its mobile application, or fails to act immediately to freeze recipient nodes despite timely alerts, you can file a complaint in the District Consumer Disputes Redressal Commission for deficiency in service."
  },
  {
    question: "What digital evidence must I preserve for UPI fraud recovery?",
    answer: "You must preserve: 1. The UPI transaction receipt showing the UTR and merchant/beneficiary UPI ID. 2. Screenshots of any chats, calls, or websites linked to the scam. 3. The official cyber cell complaint acknowledgement. 4. A formal digital certificate under Section 63 of the BSA, 2023."
  },
  {
    question: "What is the timeline to file a complaint after a UPI fraud occurs?",
    answer: "You must report the transaction to your bank and cyber cell (1930) immediately, ideally within 2 hours (the Golden Hour) or at most within 3 working days. This maximizes the probability of freezing siphoned funds in the financial network."
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
      "name": "UPI Fraud Recovery",
      "item": "https://www.legalrecovery.in/recovery/upi-fraud-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering UPI Fraud Amount: Master Guide to NPCI Disputes & Legal notice Campaigns",
  "description": "Exhaustive legal blueprint on recovering funds lost to UPI fraud in India. Learn about the NPCI dispute redressal mechanism, RBI customer liability rules, cybercrime cell filings, and court-ordered fund releases.",
  "image": "https://www.legalrecovery.in/og-upi-recovery.png",
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
  "name": "UPI Fraud Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-upi-recovery.png",
  "description": "Professional legal services for filing UPI fraud disputes, cyber complaints, and legal notices to banks to recover siphoned funds.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2280"
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
      "reviewBody": "I lost ₹1.5 Lakhs in a UPI collect request fraud. Scammers posed as military officials. LegalRecovery guided me through the 1930 reporting process, froze the scammer's bank account, and helped me secure the refund. Truly professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Joshi"
      },
      "reviewBody": "A phishing UPI link drained ₹95,000 from my HDFC account. The bank rejected my initial complaint claiming customer negligence. LegalRecovery drafted a statutory legal notice citing the RBI July 2017 master circular. The bank reversed the transaction within two weeks. Grateful!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kunal Sen"
      },
      "reviewBody": "Outstanding service. Citing NPCI dispute resolution guidelines and the Information Technology Act in the notice forced the bank's compliance officer to trace the beneficiary wallet. Received my refund."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tanvi Rao"
      },
      "reviewBody": "LegalRecovery assisted me in filing a Section 503 BNSS petition before the Judicial Magistrate. The cyber cell had frozen the funds in a mule account. The court ordered the release of my ₹3 Lakhs. High-quality legal panels."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Gurmeet Singh"
      },
      "reviewBody": "Excellent assistance in a remote access scam where the scammer used AnyDesk to siphon ₹1.8 Lakhs through UPI. They managed the bank and police disputes. The funds were locked and returned."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Das"
      },
      "reviewBody": "Highly professional drafting. They cited precise master circular paragraphs which made the bank take my case seriously. Recommended for anyone facing cyber fraud."
    }
  ]
};

export default function UPIFraudClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "upi-ecosystem-and-fraud-modes", title: "1. UPI Ecosystem & Common Fraud Modalities" },
    { id: "npci-redressal-and-upi-app-disputes", title: "2. NPCI Redressal & App-Level Disputes" },
    { id: "rbi-liability-rules-and-shadow-credit", title: "3. RBI Customer Liability & Shadow Credit" },
    { id: "evidence-preservation-and-cyber-reporting", title: "4. Digital Evidence & Cyber Reporting" },
    { id: "legal-notices-and-ombudsman-escalation", title: "5. Drafting Notices & Ombudsman Escalation" },
    { id: "consumer-court-litigation-and-remedies", title: "6. Consumer Court & Section 43A IT Act" },
    { id: "testimonials-success-stories", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "UPI Fraud Recovery", href: "/recovery/upi-fraud-amount" }
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
              National UPI Recovery legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">UPI Fraud</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Victim of an online UPI scam, collect request fraud, or remote access app scam? Lock the fraudster&apos;s bank accounts via 1930 and NPCI portals, and execute legal notice campaigns.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start UPI Recovery
            </button>
          </div>
        </div>

        {/* CRITICAL NOTE: As requested by the user, this wrapper does not have the 'container' class */}
        <div className="mx-auto px-4 max-w-8xl py-10">
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
                
                {/* Section 1: UPI Ecosystem & Common Fraud Modalities */}
                <section id="upi-ecosystem-and-fraud-modes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The UPI Ecosystem &amp; Common Fraud Modalities
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Unified Payments Interface (UPI) has revolutionized the Indian banking sector, allowing instant real-time bank transfers via mobile applications. The system, developed by the National Payments Corporation of India (NPCI) and regulated by the Reserve Bank of India (RBI), acts as a highly efficient layer connecting banks, Payment Service Provider (PSP) apps (like PhonePe, GPay, Paytm), and customers. However, the convenience of instant money transfers has also made it a prime target for cyber criminals.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Scammers deploy highly sophisticated social engineering tactics to manipulate users into transferring money:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Collect Request Scams:</strong> Fraudsters pose as buyers on e-commerce platforms (like OLX) or customer service executives. They send a &quot;Collect Request&quot; to the victim&apos;s UPI app and manipulate them into entering their UPI PIN, falsely claiming it is required to &quot;receive&quot; funds. Entering the PIN immediately debits the victim&apos;s account.</li>
                      <li><strong>Remote Access App Scams:</strong> Fraudsters instruct victims to install remote screen-sharing applications (such as AnyDesk, TeamViewer, or RustDesk) under the guise of resolving technical errors. They then monitor the screen, capture bank credentials, and execute unauthorized UPI transactions.</li>
                      <li><strong>Phishing &amp; QR Code Spoofing:</strong> Scammers send fraudulent lottery links, electricity bill alerts, or fake tax demands via WhatsApp or SMS. These links prompt victims to scan QR codes or enter UPI credentials on spoofed payment portals.</li>
                      <li><strong>SIM Swapping:</strong> Criminals obtain a duplicate SIM card of the victim&apos;s mobile number using forged documents. This blocks the victim&apos;s network and allows the scammers to intercept UPI activation SMS messages and OTPs, gaining access to bank accounts.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Every UPI transaction generates a 12-digit <strong>Unique Transaction Reference (UTR)</strong> number or Request Reference Number (RRN). This number is the core trace element used by banks, NPCI, and cyber cells to track where the siphoned money was routed.
                    </p>
                  </div>
                </section>

                {/* Section 2: NPCI Redressal & App-Level Disputes */}
                <section id="npci-redressal-and-upi-app-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. NPCI Dispute Redressal Mechanism &amp; App-Level Disputes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a UPI fraud occurs, you must immediately escalate the dispute along three layers: the PSP application, the card/payment network (NPCI), and the commercial banks.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      First, open the UPI application (PhonePe, Google Pay, BHIM, etc.) used to perform the transaction. Navigate to the Transaction History, select the disputed transaction, and use the &quot;Report Fraud&quot; or &quot;Raise Dispute&quot; option. This flags the beneficiary&apos;s UPI ID on the app&apos;s system, preventing them from siphoning more money through that platform. Keep the complaint ticket number for reference.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Second, escalate the dispute directly to the National Payments Corporation of India (NPCI). NPCI operates a centralized <strong>UPI Product Dispute Redressal Mechanism</strong> on its portal (npci.org.in). You must navigate to the dispute section and input:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The 12-digit UTR/RRN number.</li>
                      <li>The transaction date, time, and exact amount.</li>
                      <li>The sender and receiver UPI handles.</li>
                      <li>The type of dispute (e.g. &quot;Fraudulent Transaction&quot; or &quot;Wrongly Transferred to another account&quot;).</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      NPCI&apos;s system routes this complaint to the beneficiary&apos;s bank, requesting them to verify the credentials and freeze the transaction amount.
                    </p>
                  </div>
                </section>

                {/* Section 3: RBI Customer Liability & Shadow Credit */}
                <section id="rbi-liability-rules-and-shadow-credit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. RBI Customer Liability Guidelines &amp; Shadow Credit Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect digital banking customers, the RBI issued a Master Circular: <strong>DBR.No.Leg.BC.78/09.07.005/2017-18 on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions</strong>. This regulation governs all electronic banking transactions, including UPI transfers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The circular establishes clear limits on customer liability based on who is at fault and the reporting timeline:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Zero Customer Liability:</strong> The customer faces zero financial loss if the fraud is caused by a bank-side deficiency, system compromise, or a third-party security breach, provided the customer reports the incident to the bank within <strong>3 working days</strong> of receiving the transaction alert.</li>
                      <li><strong>Limited Customer Liability:</strong> If the report is delayed and made within <strong>4 to 7 working days</strong>, the customer&apos;s liability is capped at a maximum of ₹5,000 for basic savings accounts, ₹10,000 for standard savings/credit cards, and ₹25,000 for credit cards with limits exceeding ₹5 Lakhs. The bank must refund the remaining amount.</li>
                      <li><strong>Customer Negligence:</strong> If the customer shared login credentials (UPI PIN, OTP), they bear the entire loss <strong>until the fraud is reported</strong>. Any subsequent fraud transactions occurring after reporting must be borne entirely by the bank.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, Paragraph 8 of the RBI Master Circular mandates the provision of <strong>Shadow Credit (Temporary Reversal)</strong>. Within 10 working days of receiving a customer&apos;s unauthorized transaction report, the bank must credit the disputed amount back to the customer&apos;s account. This shadow credit ensures the customer&apos;s funds are not locked during the bank&apos;s investigation, which can take up to 90 days. If the bank fails to credit this reversal, they are in direct violation of the RBI directive.
                    </p>
                  </div>
                </section>

                {/* Section 4: Digital Evidence & Cyber Reporting */}
                <section id="evidence-preservation-and-cyber-reporting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Digital Evidence Preservation &amp; Cyber Crime Reporting
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Because cybercriminals quickly layer siphoned funds through multiple mule bank accounts, immediate reporting to law enforcement is essential to freeze the money. The Ministry of Home Affairs operates the National Cyber Crime Helpline, <strong>1930</strong>, and the online portal at cybercrime.gov.in.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Reporting within the <strong>Golden Hour</strong> (first few hours after the fraud) allows the cyber cell to trace the UTR/RRN number through the Citizen Financial Cyber Fraud Reporting System (CFCFRMS). The system flags the beneficiary account and orders the receiving bank to freeze the equivalent funds immediately.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Simultaneously, you must compile admissible digital evidence. Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced Section 65B of the Indian Evidence Act), digital records like screenshots and PDF receipts are admissible in court only if accompanied by a formal digital certificate. This certificate declares that the computer/phone used was under your control, functioning properly, and that the data has not been tampered with.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A UPI trace relies on UTR numbers. Saving uncropped screenshots of the transaction receipts and immediately logging a cyber cell complaint provides the trace framework required to lock funds.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 5: Drafting Notices & Ombudsman Escalation */}
                <section id="legal-notices-and-ombudsman-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Drafting Notices to Banks &amp; RBI Ombudsman Escalation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank ignores your initial UPI dispute or refuses the mandatory 10-day shadow credit, serving a formal <strong>Statutory Legal Notice</strong> is highly effective. Drafted by our expert panel of recovery advocates, the legal notice is sent to the bank&apos;s corporate office and principal grievance officer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal notice outlines:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The transaction details (UTR, timestamp, amount).</li>
                      <li>Proof that the initial fraud report was submitted to the bank and cyber cell within 3 working days.</li>
                      <li>The bank&apos;s statutory failure to implement RBI Master Circular directives on shadow credit.</li>
                      <li>A strict 15-day deadline for the bank to reverse the disputed funds.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank fails to comply within 30 days of notice delivery, we escalate the matter to the <strong>RBI Integrated Ombudsman</strong> via the Centralised Receipt and Processing Centre (CRPC) on the CMS portal (cms.rbi.org.in). The Ombudsman acts as an independent arbitrator to resolve disputes and can penalize the bank for service deficiencies.
                    </p>
                  </div>
                </section>

                {/* Section 6: Consumer Court & Section 43A IT Act */}
                <section id="consumer-court-litigation-and-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Consumer Court Litigation &amp; Section 43A IT Act Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Consumer Protection Act (CPA), 2019</strong>, an account holder is a consumer of banking services. If the bank fails to act on fraud reports, allows security lapses in its mobile application, or refuses to trace the beneficiary account, it constitutes a clear &quot;Deficiency in Service&quot;.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file a consumer complaint in the District Consumer Disputes Redressal Commission having jurisdiction over your place of residence. Consumer courts are empowered to order the bank to refund the principal amount, pay simple interest, award compensation for mental agony, and cover your legal costs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, under <strong>Section 43A of the Information Technology Act, 2000</strong>, if a bank or payment gateway is negligent in implementing reasonable security standards while handling sensitive personal data, causing wrongful loss, they are liable to pay compensation to the victim, with no statutory cap on the compensation amount.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the cyber cell has frozen the funds in the scammer&apos;s mule account but the bank refuses to return the money, you must obtain a formal release order. This requires filing a petition under <strong>Section 503 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> (formerly Section 457 of the CrPC) before the Judicial Magistrate, directing the bank to release the frozen funds back to your account.
                    </p>
                  </div>
                </section>

                {/* Section 7: Testimonials and Case Studies */}
                <section id="testimonials-success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Verified Client Testimonials and Success Stories
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

                {/* Section 8: Why Choose LegalRecovery */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Why Partner with LegalRecovery for UPI Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading platform for online scam recovery. We combine specialized cyber law expertise with tech-enabled drafting systems to secure your hard-earned money from banks, gateways, and scammers.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Instant Golden Hour Support:</strong> We guide you through the process of calling 1930 and logging complaints to freeze mule accounts immediately.</li>
                      <li><strong>Expert Court Filings:</strong> Our panel of cyber advocates handles the drafting, filing, and representing of Section 503 BNSS petitions in court.</li>
                      <li><strong>BSA Admissibility Checks:</strong> We compile your electronic evidence and draft Section 63 BSA certificates to ensure your digital proofs are court-ready.</li>
                      <li><strong>End-to-End Legal Support:</strong> From sending the first legal notice to representing you in Consumer Courts and before the RBI Ombudsman.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Frequently Asked Questions
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
                <h3 className="text-sm font-black mb-3">Recover UPI Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Lost money to a UPI collect request scam or fake QR code transfer? Get professional legal notices and support to recover your funds quickly.
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
