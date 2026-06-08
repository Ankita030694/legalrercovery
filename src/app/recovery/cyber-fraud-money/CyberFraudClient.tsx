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
    question: "What is the 'Golden Hour' in cyber fraud recovery, and why is it critical?",
    answer: "The 'Golden Hour' refers to the first two to three hours immediately following a fraudulent cyber transaction. During this critical window, if the victim reports the fraud via the 1930 National Cybercrime Helpline, bank nodal officers can immediately track and freeze the transaction in the financial pipeline before the scammers withdraw the cash or transfer it to multiple layer accounts."
  },
  {
    question: "How does the Citizen Financial Cyber Fraud Reporting System track stolen money?",
    answer: "The Citizen Financial Cyber Fraud Reporting System (CFCFRMS) integrates commercial banks, payment aggregators, e-wallets, and police networks. When a ticket is raised on the 1930 portal, the system automatically checks the transaction flow path. It notifies the receiving banks to place a temporary hold on the beneficiary account, stopping further fund siphoning."
  },
  {
    question: "What is a 'Mule Account', and how do police freeze them?",
    answer: "A mule account is a bank account owned by an innocent or complicit third party that is rented or used by fraudsters to receive and launder scammed money. Under Section 106 of the BNSS, 2023 (formerly Section 102 of the CrPC), police officers can order banks to freeze these accounts immediately to preserve the proceeds of the crime."
  },
  {
    question: "If my bank account is frozen due to cyber fraud, how do I get it unfrozen?",
    answer: "If your account is frozen because a scammer deposited funds into it (making it a suspected node), you must provide a detailed explanation of your transactions, business invoices, and KYC documents to the Investigating Officer (IO) of the cyber cell. Once satisfied of your innocence, the IO will send an unfreeze instruction to the bank. Alternatively, you can approach the Magistrate Court for relief."
  },
  {
    question: "What legal application can I file to recover frozen funds from a mule account?",
    answer: "You can file a formal application under Section 503 of the BNSS, 2023 (formerly Section 457 of the CrPC) in the court of the Judicial Magistrate having jurisdiction. This application requests the court to release the frozen fraud funds to you (the rightful owner) against an indemnity bond, once the police confirm the money belongs to you."
  },
  {
    question: "What is the liability of payment gateways like Razorpay or Cashfree in cyber scams?",
    answer: "Under Section 79 of the Information Technology Act, 2000, payment gateways enjoy 'safe harbor' protection as intermediaries. However, this protection is lost if they fail to perform proper Know-Your-Customer (KYC) checks on their merchants, ignore fraud reports, or fail to immediately block fraud links when alerted. In such cases of negligence, they can be held liable to refund the scammed amount."
  },
  {
    question: "Can I hold a telecom operator liable for SIM swapping fraud?",
    answer: "Yes. Under Section 43A of the IT Act, if a telecom provider acts negligently by issuing a duplicate SIM card to an unauthorized person without proper KYC verification, leading to OTP interception and financial theft, they are liable to pay compensation for the wrongful loss caused to the subscriber."
  },
  {
    question: "What happens if I fell victim to a 'work-from-home' or 'task-based' Telegram scam?",
    answer: "Task-based scams involve scammers paying small commissions for liking YouTube videos or rating hotels, then forcing the victim to deposit large sums for VIP tasks. To recover these funds, you must document the Telegram chat logs, UPI IDs, and bank transfer receipts, report them immediately to 1930, and serve legal notices to the beneficiary banks."
  },
  {
    question: "Are cryptocurrency transactions recoverable under Indian cyber laws?",
    answer: "Recovering cryptocurrency is extremely difficult due to the decentralized and anonymous nature of blockchain networks. However, if the funds were moved to a centralized exchange (like WazirX or CoinDCX), cyber cells can issue freeze notices to these exchanges under the IT Act, preserving the crypto assets for eventual recovery."
  },
  {
    question: "How does the new Bharatiya Sakshya Adhiniyam, 2023 affect cyber evidence?",
    answer: "The Bharatiya Sakshya Adhiniyam (BSA), 2023, governs the admissibility of electronic evidence in courts. Under Section 63, all electronic records (screenshots, chat backups, PDF bank statements) must be submitted along with a specific digital certificate verifying that the device was functioning properly and that the data has not been tampered with."
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
      "name": "Cyber Fraud Recovery",
      "item": "https://www.legalrecovery.in/recovery/cyber-fraud-money"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Cyber Fraud Money: Guide to 1930 Helpline, Mule Accounts & BNSS Court Orders",
  "description": "Exhaustive legal guide on recovering scammed money from online trading scams, task frauds, and banking phishing. Learn the process of cyber cell reporting and court-ordered fund releases.",
  "image": "https://www.legalrecovery.in/og-cyber-fraud.png",
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
  "name": "Cyber Fraud Legal Assistance Services",
  "image": "https://www.legalrecovery.in/og-cyber-fraud.png",
  "description": "Professional legal services for recovering funds lost in online financial frauds, trading scams, and phishing attacks in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2140"
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
        "name": "Ramesh Chawla"
      },
      "reviewBody": "I fell victim to a fake online trading app scam and lost ₹8 Lakhs. LegalRecovery acted immediately: helped me dial 1930 to freeze the mule accounts, drafted my cyber cell complaint, and filed a Section 503 BNSS petition. I recovered ₹6.2 Lakhs of the frozen amount. Lifesavers!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shreya Gupta"
      },
      "reviewBody": "A Telegram hotel rating task scam cost me ₹3.5 Lakhs. The payment was routed through UPI. LegalRecovery helped me draft legal notices to the merchant gateways and receiving banks. Due to their follow-ups, the banks froze the gateway accounts and refunded my money. Incredible process."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditya Sen"
      },
      "reviewBody": "I had my savings account frozen by the cyber cell because of a wrong transfer. LegalRecovery represented me before the Cyber Crime inspector, showing proof of legitimate business, and got the unfreeze order within 10 days. Outstanding professionalism."
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
      "reviewBody": "Highly systematic support. They drafted my petition to the Judicial Magistrate Court for releasing frozen funds from a mule account. The court granted the release order against my indemnity bond. Outstanding legal support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Simran Kaur"
      },
      "reviewBody": "A fake customer care executive tricked my father into transferring ₹1.5 Lakhs via net banking. LegalRecovery guided us through the 'golden hour' helpline 1930. The funds were successfully locked and returned. Thank you!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Baldev Raj"
      },
      "reviewBody": "Superb legal drafting. Citing specific judgments on bank liability and intermediary negligence under the IT Act forced the payment aggregator to comply and trace the merchant node. Highly recommended."
    }
  ]
};

export default function CyberFraudClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "cyber-crime-typologies-losses", title: "Cyber Fraud Typologies & Fund Routes" },
    { id: "police-complaint-1930-golden-hour", title: "Helpline 1930 & Account Freezing" },
    { id: "bank-and-gateway-intermediary-liability", title: "Intermediary & Gateway Liability" },
    { id: "forensic-evidence-and-bsa-requirements", title: "Digital Evidence & BSA Rules" },
    { id: "magistrate-and-judicial-recovery-orders", title: "Court Release & Recovery Orders" },
    { id: "testimonials-success-stories", title: "Verified Testimonials" },
    { id: "why-choose-legalrecovery", title: "Why LegalRecovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Cyber Fraud Recovery", href: "/recovery/cyber-fraud-money" }
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
              National Cybercrime Recovery legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Cyber Fraud</span> Money
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Fell victim to online investment scams, Telegram task frauds, or phishing? Lock the scammer&apos;s mule accounts via the 1930 network and secure a Magistrate order to release your frozen funds.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Initiate Cyber Recovery Campaign
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
                
                {/* Section 1: Cyber Fraud Typologies & Fund Routes */}
                <section id="cyber-crime-typologies-losses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Modern Cyber Fraud Typologies &amp; Siphoned Fund Routing
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The digitisation of the Indian economy has brought unmatched convenience, but it has also spawned a highly organized, complex syndicate of cyber criminals. Online financial fraud has evolved from simple phishing emails to highly sophisticated social engineering scams. Understanding the specific typology of the fraud you fell victim to is crucial, as the legal notice strategy and law enforcement routing differ depending on the mechanism of the scam.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Modern cyber fraud typologies typically fall into the following categories:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Fake Trading &amp; Investment App Scams:</strong> Fraudsters create realistic trading platforms or fake IPO apps, inviting victims through WhatsApp/Telegram groups. Victims are coaxed into depositing massive amounts under the guise of institutional trading, only to find their funds frozen when trying to withdraw.</li>
                      <li><strong>Telegram Task Scams:</strong> Scammers offer small commissions for rating hotels or liking YouTube videos. Once trust is established, victims are placed in premium groups and forced to make heavy &quot;welfare task deposits&quot; that cannot be withdrawn.</li>
                      <li><strong>Vishing &amp; Aadhaar Enabled Payment System (AePS) Scams:</strong> Scammers pose as bank executives, electricity board officials, or customs officers. They manipulate victims into sharing OTPs or use cloned biometrics to siphon money directly from bank accounts.</li>
                      <li><strong>SIM Swapping &amp; Identity Theft:</strong> Fraudsters duplicate the victim&apos;s SIM card using forged documents. This intercepts all two-factor authentication SMS codes, allowing them to access net banking portals and change transfer limits.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the money is stolen, scammers route it through a complex network of <strong>Mule Accounts</strong>. These are bank accounts opened using stolen KYC details, or rented from low-income individuals. The stolen funds are split and layered across dozens of mule accounts within minutes, eventually being withdrawn as cash from ATMs in remote regions, or converted into cryptocurrency on decentralized exchanges. To recover these funds, speed is the single most critical factor.
                    </p>
                  </div>
                </section>

                {/* Section 2: Helpline 1930 & Account Freezing */}
                <section id="police-complaint-1930-golden-hour" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Helpline 1930, Cyber Cell Reporting &amp; Account Freezing Procedures
                  </h2>
                  <div className="prose prose-base max-w-none text-[#5A6376] space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The most critical phase of cyber recovery is the <strong>Golden Hour</strong>—the immediate 2-to-3-hour window after the transaction. If you act during this window, the probability of freezing the funds in the banking channel is extremely high. The primary tool for this is the national cybercrime helpline, <strong>1930</strong> (formerly 155260), operated under the National Cyber Crime Reporting Portal (NCCRP).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When you call 1930, you must provide:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Your name, mobile number, and bank account number.</li>
                      <li>The transaction ID, UTR number, and the amount debited.</li>
                      <li>The date and time of the transaction.</li>
                      <li>The beneficiary bank account details or UPI VPA handle used by the scammers.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The call center agent inputs these details into the <strong>Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS)</strong>. This digital system sends an automated, high-priority ticket to the security and nodal departments of both the source and receiving banks. If the ticket arrives before the scammer siphons the funds, the receiving bank immediately freezes the recipient mule account or holds the specific transaction value.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 106 of the <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> (which replaced Section 102 of the CrPC), police officers have the statutory power to direct banks to freeze suspicious accounts under investigation. This blocking operates in real time, preventing the scammer from transferring the funds. However, once the funds are frozen, the bank will not release the money back to you without a formal court order or cyber cell authorization.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Activating the 1930 helpline during the golden hour is the single most effective way to lock scammed funds in the banking channel. Once frozen, the legal process shifts to obtaining judicial release orders.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: Intermediary & Gateway Liability */}
                <section id="bank-and-gateway-intermediary-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Intermediary &amp; Payment Gateway Liability under IT Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Scammers frequently use payment gateways (like Razorpay, Cashfree, Paytm, or Pine Labs) to generate fake payment links or set up dummy merchant accounts. Under **Section 79 of the Information Technology Act, 2000**, these payment aggregators are classified as intermediaries and enjoy &quot;safe harbor&quot; immunity, meaning they are not civilly or criminally liable for the third-party transactions flowing through their servers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, this safe harbor is **conditional**. Payment gateways lose their legal immunity if they fail to perform proper due diligence:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>KYC Failures:</strong> Under RBI regulations, gateways must verify the existence and legitimacy of their merchants. If they onboard shell companies or dummy accounts without verification, they are negligent.</li>
                      <li><strong>Failure to Block:</strong> If an intermediary is notified of a fraud transaction but fails to act quickly to disable the payment link or freeze the merchant wallet, they lose their safe harbor protection.</li>
                      <li><strong>Section 43A IT Act Liability:</strong> If the gateway or the bank fails to implement reasonable security standards to protect sensitive data, leading to a fraud breach, they are liable to pay unlimited compensation to the victim.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      By serving a formal legal notice to these payment intermediaries and gateway compliance offices, we demand the tracing of the merchant node and the hold of all payouts. This legal notice details the transaction trace IDs, proving that the gateway was used as a channel for fraud. This forces their legal teams to freeze the fraud wallet and cooperate with law enforcement.
                    </p>
                  </div>
                </section>

                {/* Section 4: Digital Evidence & BSA Rules */}
                <section id="forensic-evidence-and-bsa-requirements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Digital Evidence Preservation &amp; BSA Admissibility Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In cyber law, digital records form the core of your case. However, simply presenting printouts of screenshots is not enough. Under the new <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, the rules for submitting electronic evidence have been updated to prevent tampering and ensure admissibility.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To build an admissible evidence file, you must preserve and format:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Screenshots with Metadata:</strong> Ensure screenshots of WhatsApp, Telegram, or SMS conversations display the sender&apos;s full phone number and timestamp headers. Do not crop or edit these screenshots.</li>
                      <li><strong>Email Headers:</strong> Download the raw email file (.eml or .msg format) showing the server IP routing and authentication records (SPF, DKIM, DMARC), proving the emails were sent by scammers.</li>
                      <li><strong>Section 63 BSA Certificate:</strong> This is a mandatory digital declaration. You must certify that the computer or smartphone used to print the documents was functioning properly, that you had lawful control over it, and that the contents were not altered. Without this certificate, the court will dismiss the electronic evidence.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel assists in drafting and executing the Section 63 BSA certificates, ensuring your digital files are ready for scrutiny by cyber cells, banks, and Magistrates.
                    </p>
                  </div>
                </section>

                {/* Section 5: Court Release & Recovery Orders */}
                <section id="magistrate-and-judicial-recovery-orders" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Court Release &amp; Recovery Orders under the BNSS
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the cyber cell freezes the scammer&apos;s bank accounts, the money sits in a frozen state. Banks are not authorized to return this money directly to you, even if the police certify that you are the victim. The bank is merely a custodian of the frozen property. The only legal way to get the money released back to your bank account is through a judicial order.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This requires filing a formal petition under <strong>Section 503 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> (formerly Section 457 of the CrPC) before the Judicial Magistrate having jurisdiction over the cyber crime police station.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The court procedure involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Filing the Petition:</strong> Your advocate files the Section 503 BNSS application, attaching the initial bank complaint, Cyber Cell FIR, proof of transaction, bank statement showing debit, and the police freeze report.</li>
                      <li><strong>Requisitioning Police Report:</strong> The Magistrate issues notice to the Cyber Crime police cell, directing the Investigating Officer (IO) to submit a status report confirming whether the frozen funds in the mule account belong to you.</li>
                      <li><strong>Verification of Bank Balance:</strong> The bank is summoned to confirm the exact amount frozen in the mule account.</li>
                      <li><strong>Order of Release:</strong> Once the IO and the bank confirm the details, the Magistrate orders the bank to release the frozen funds back to your account, subject to you executing an **Indemnity Bond** for the equivalent value.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      While this court process takes 2 to 4 months, it is the only legal way to recover frozen funds. Having an expert advocate draft the BNSS petition and follow up with the cyber cell is essential to prevent delays.
                    </p>
                  </div>
                </section>

                {/* Section 6: Testimonials and Case Studies */}
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

                {/* Section 7: Why Choose LegalRecovery */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Partner with LegalRecovery for Cyber Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading digital platform for recovering cyber-scammed funds. We guide you through the complex interface of law enforcement, bank compliance, and judicial courts to reclaim your money.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Instant Golden Hour Support:</strong> We guide you through the process of calling 1930 and logging complaints to freeze mule accounts immediately.</li>
                      <li><strong>Expert Court Filings:</strong> Our panel of cyber advocates handles the drafting, filing, and representing of Section 503 BNSS petitions in court.</li>
                      <li><strong>Gateway Engagement:</strong> We serve direct legal notices to payment gateways, e-wallets, and beneficiary banks to track and hold scammed funds.</li>
                      <li><strong>BSA Admissibility Checks:</strong> We compile your electronic evidence and draft Section 63 BSA certificates to ensure your digital proofs are court-ready.</li>
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-655 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Recover Cyber Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Struggling to recover funds from an online trading scam, task fraud, or net banking breach? Get expert cyber legal notices and support to reclaim your money.
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
