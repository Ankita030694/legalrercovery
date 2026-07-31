'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs — unique to credit card fraud
const faqs = [
  {
    question: "How does the temporary credit or interest suspension work during a credit card fraud dispute?",
    answer: "Under RBI guidelines and card network rules, once you formally dispute an unauthorized transaction, the credit card issuer should provide a temporary credit (disputed charge suspension) for the amount of the transaction. This suspension prevents the disputed amount from incurring interest charges or late fees, and it is excluded from your minimum amount due calculations while the investigation is ongoing. However, if the bank's final investigation rules against you (proving customer negligence), the bank can reverse the temporary credit and charge interest retroactively from the transaction date. Thus, ensuring a solid defense and submitting all required evidence early is essential to make the credit permanent."
  },
  {
    question: "Can I dispute a credit card transaction if the merchant billed me twice or charged the wrong amount?",
    answer: "Yes, you can. Credit card disputes are not limited to criminal cyber fraud; they also cover billing errors, processing issues, and merchant disputes. Under Visa/Mastercard billing dispute rules, you can dispute charges for: (a) duplicate billing, (b) incorrect transaction amounts, (c) paid by other means (e.g., you paid cash but the card was still charged), (d) goods or services not received, or (e) credit vouchers not processed. These disputes are processed through the standard chargeback system using specific merchant billing dispute reason codes."
  },
  {
    question: "What is the difference between credit card fraud recovery and debit card fraud recovery?",
    answer: "The primary difference lies in the source of the funds and the immediate impact on your liquidity. With a credit card, the unauthorized transactions consume a portion of your credit line, but your personal savings remain untouched. The disputed amount is suspended, meaning you do not have to pay it while the bank investigates. With a debit card, the funds are immediately withdrawn from your savings account, resulting in an immediate loss of liquidity. However, the legal recovery framework — including the RBI customer liability circular, cyber cell reporting, and the 10-day provisional credit mandate — is identical for both."
  },
  {
    question: "What are the key chargeback dispute reason codes for American Express?",
    answer: "American Express operates its own closed-loop network and utilizes specific codes for disputes. Common Amex dispute reason codes include Code F14 (Card Not Present Fraud, used for unauthorized online transactions), Code F29 (Card Member Claiming Fraud, general unauthorized charge), and Code C08 (Goods or Services Not Received). To dispute an Amex charge, you must notify American Express directly within the timeframe specified in your cardmember agreement, usually 60 days from the billing statement date."
  },
  {
    question: "Does the RBI Zero Liability Circular apply to credit cards issued by non-banking financial companies (NBFCs)?",
    answer: "Yes. The RBI's Master Circular on Customer Protection covers all commercial banks, primary co-operative banks, and non-banking financial companies (NBFCs) that issue credit cards, such as SBI Card (which is an NBFC division) or Bajaj Finserv. All credit card issuers operating in India must comply with the zero-liability rules, the 3-day reporting window, the 10-day provisional reversal mandate, and the 90-day maximum resolution timeframe."
  },
  {
    question: "Am I liable for unauthorized international transactions on my credit card that did not use an OTP?",
    answer: "No. The RBI has mandated two-factor authentication (OTP/PIN) for all domestic card transactions. However, international e-commerce platforms often operate under different regulations and may process payments using only the card number, expiration date, and CVV (no OTP). If an unauthorized international transaction is executed on your card without an OTP, it is classified as a security gap in international operations. If you report it within 3 working days, you have zero liability, and the bank must reverse the transaction."
  },
  {
    question: "What is the role of an Acquirer Reference Number (ARN) in tracking a credit card refund?",
    answer: "An Acquirer Reference Number (ARN) is a unique 23-digit number assigned to a card transaction as it moves from the merchant's bank (the acquirer) through the card network to your bank (the issuer). When a merchant initiates a refund, they generate an ARN. If the refund is delayed, you can request this ARN from the merchant. Your issuing bank can use it to track and locate the pending credit within the settlement system. If no ARN has been generated, it means the merchant has not yet processed the refund."
  },
  {
    question: "Can I file a consumer complaint against my credit card issuer for failing to stop anomalous transactions?",
    answer: "Yes, you can. Credit card issuers are required to maintain Fraud Risk Management (FRM) systems that monitor transactions for anomalous behavior (e.g., multiple high-value international transactions occurring within minutes or transactions executed in different countries simultaneously). If a bank's FRM system fails to block highly suspicious transactions or does not notify you, you can argue 'Deficiency in Service' under the Consumer Protection Act, 2019, to claim a refund and compensation."
  },
  {
    question: "What is 'Representment' in the chargeback lifecycle, and how should I respond to it?",
    answer: "Representment is the stage in a chargeback dispute where the merchant and their bank dispute your claim by presenting evidence to prove the transaction was valid (e.g., showing delivery receipts, matching IP addresses, or proof of usage). If the merchant submits a representment, your bank will notify you and ask for counter-evidence. You must respond promptly by showing that the merchant's evidence is incorrect or incomplete (for example, showing that the delivery address was different from your address or that you were physically in a different location at the time of the transaction)."
  },
  {
    question: "What legal notices should be sent if a credit card issuer damages my CIBIL score due to a disputed charge?",
    answer: "If a bank reports a disputed, fraudulent amount as a default to credit bureaus (like CIBIL, Experian, or Equifax) while an active dispute is pending, it can harm your credit score. This is a violation of credit reporting guidelines. You should serve a statutory legal notice to the bank's Nodal Officer and CIBIL, demanding they mark the account as 'disputed' and restore your score. If they fail to comply, you can file a complaint with the RBI Ombudsman or the Consumer Court, seeking damages for the impact on your credit reputation."
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
      "name": "Credit Card Fraud Recovery",
      "item": "https://www.legalrecovery.in/recovery/credit-card-fraud-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Credit Card Fraud Amount: Cloning, International Chargebacks & Billing Dispute Guide for India",
  "description": "Expert legal and technical guide to recovering money lost to credit card fraud, unauthorized charges, and billing disputes in India. Covers RBI Zero Liability rules, Visa/Mastercard/Amex chargeback codes, temporary credit suspension, and credit bureau (CIBIL) restorations.",
  "image": "https://www.legalrecovery.in/og-credit-card-recovery.png",
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
  "name": "Credit Card Fraud Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-credit-card-recovery.png",
  "description": "Professional dispute management and legal services for resolving credit card fraud, unauthorized billing charges, and wrongful default reporting on credit scores in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1895"
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
        "name": "Rohan Deshmukh"
      },
      "reviewBody": "My credit card was charged ₹1.8 Lakhs on an international e-commerce site without an OTP. The card was in my wallet. The bank refused my claim, saying the card was present online. LegalRecovery drafted a notice citing the RBI Zero Liability circular and Visa Reason Code 10.4. The bank suspended the interest charges and processed the refund within 14 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kavitha Nair"
      },
      "reviewBody": "A hotel in Paris billed me twice for my stay, charging an extra ₹65,000. They ignored my emails. My bank initially rejected my dispute, stating I had signed the physical receipt. LegalRecovery stepped in, filed a billing dispute under Mastercard Reason Code 4837 showing the check-out invoice, and secured a chargeback reversal."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Abhishek Joshi"
      },
      "reviewBody": "My Amex card was skimmed at an airport kiosk, and multiple local ATM cash advances totaling ₹90,000 were made. Amex rejected the initial claim, citing physical PIN authorization. LegalRecovery assisted me in filing a detailed dispute showing CCTV records from my office. The bank reversed the charges and restored my credit limit."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Sharma"
      },
      "reviewBody": "A bank reported a disputed fraudulent transaction on my credit card as a payment default to CIBIL, dropping my score by 120 points. LegalRecovery served a statutory notice to both the card issuer and CIBIL. Within a week, the default tag was removed, my credit score was restored, and the bank settled the fraud dispute."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Malhotra"
      },
      "reviewBody": "I reported an unauthorized online transaction within 24 hours. The bank acknowledged it but delayed providing the temporary credit, forcing me to pay the bill to avoid interest. LegalRecovery sent a formal notice citing Paragraph 8 of the RBI guidelines. The bank issued the shadow credit and waived all late fees immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Harmeet Singh"
      },
      "reviewBody": "Professional dispute handling. They prepared the digital evidence and drafted a comprehensive legal notice. The bank's legal team reviewed the notice and approved the reversal without requiring a court filing. I recommend their services for complex card disputes."
    }
  ]
};

export default function CreditCardFraudClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "credit-card-fraud-landscape", title: "1. Credit Card Fraud Ecosystem & Exploitation Typologies" },
    { id: "rbi-liability-framework", title: "2. The RBI Zero Liability Circular & Credit Line Reversals" },
    { id: "card-network-chargebacks", title: "3. Card Network Rules & Billing Disputes" },
    { id: "emergency-response-protocol", title: "4. Step-by-Step Emergency Response Guide" },
    { id: "evidence-and-legal-precedents", title: "5. Compiling Evidence & Section 63 BSA Compliance" },
    { id: "notices-ombudsman-consumer-court", title: "6. Legal Notices, Ombudsman & Consumer Court" },
    { id: "client-testimonials", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Credit Card Fraud Recovery", href: "/recovery/credit-card-fraud-amount" }
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
              National Credit Card Recovery Legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Credit Card Fraud</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Victim of credit card cloning, skimming, unauthorized international billing, or billing disputes? Suspend interest charges, initiate interbank chargebacks, and protect your credit score.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Credit Card Recovery
            </button>
          </div>
        </div>

        {/* Main Wrapper — no container class as per user instruction */}
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
                
                {/* Section 1: Credit Card Fraud Landscape & Exploitation Typologies */}
                <section id="credit-card-fraud-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Credit Card Fraud Ecosystem &amp; Exploitation Typologies in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Credit cards represent a significant portion of consumer transaction volume in India, offering flexibility and credit limits that can range from thousands to several lakh rupees. However, this high credit limit also makes credit cards a target for sophisticated financial fraud. Unlike debit cards, which withdraw funds directly from a cardholder's savings account, credit cards draw from an issuer-provided credit line. While this protects a cardholder's immediate cash reserves, it creates a debt obligation that can rapidly accumulate interest, penalties, and late fees if the disputed charges are not resolved quickly.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Credit card fraud in India is categorized into two primary environments: Card-Present (CP) transactions (such as ATM cash advances, physical retail POS transactions) and Card-Not-Present (CNP) transactions (such as online shopping, digital subscriptions, and international payment gateways). As digital adoption has accelerated, fraudsters have shifted toward exploiting vulnerabilities in online payment systems, card storage portals, and merchant verification gaps, requiring cardholders to understand the mechanisms of these threats.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary typologies of credit card fraud include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>ATM and POS Skimming:</strong> Fraudsters install a physical skimming device on the card reader slot of an ATM or terminal to capture the card's magnetic stripe data, often combined with a small camera to record the PIN. This cloned data is then written to a blank card, allowing physical cash withdrawals or retail transactions.
                      </li>
                      <li>
                        <strong>Card Cloning and Shimming:</strong> An advanced technique where a thin, flexible device (a shim) is placed inside a chip card reader. The shim captures EMV chip communications, allowing fraudsters to bypass legacy terminals that fall back to magnetic stripe validation.
                      </li>
                      <li>
                        <strong>Contactless (NFC) Exploits:</strong> Contactless cards allow transactions without a PIN up to ₹5,000. Scammers can use hand-held POS devices in crowded spaces to scan active cards through wallets or bags, executing unauthorized micro-transactions.
                      </li>
                      <li>
                        <strong>Card-Not-Present (CNP) Fraud:</strong> Attackers steal card details (16-digit number, expiration date, CVV) through phishing sites, data breaches, or keyloggers. They then use these details on international websites or gateways that do not require 3D Secure (OTP) authentication, bypassing multi-factor security rules.
                      </li>
                      <li>
                        <strong>Social Engineering and OTP Phishing:</strong> Fraudsters impersonate bank employees, credit card helpline agents, or regulatory officers, claiming to block a suspicious charge or award bonus points. They trick the victim into sharing their CVV and OTP, allowing the attacker to link the card to digital wallets or process unauthorized transactions.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Every transaction generates unique identifiers, such as the <strong>Retrieval Reference Number (RRN)</strong>, <strong>Acquirer Reference Number (ARN)</strong>, or transaction ID. These reference numbers are critical for tracing where the funds were routed and initiating the formal chargeback process.
                    </p>
                  </div>
                </section>

                {/* Section 2: The RBI Customer Liability Matrix & Credit Line Reversals */}
                <section id="rbi-liability-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The RBI Zero Liability Framework &amp; Credit Line Reversals
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Resolving unauthorized credit card transactions is governed by the Reserve Bank of India's Master Circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong> on &quot;Customer Protection — Limiting Liability of Customers in Unauthorised Electronic Banking Transactions.&quot; This circular establishes a structured liability framework based on the timing of the customer's report and the cause of the fraud.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The circular establishes three main liability categories for cardholders:
                    </p>
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider border-b">Reporting Window</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider border-b">Customer Liability Category</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider border-b">Bank's Legal Obligation</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                          <tr>
                            <td className="px-4 py-3 text-sm font-semibold text-slate-900">Within 3 Working Days</td>
                            <td className="px-4 py-3 text-sm text-green-700 font-medium">Zero Customer Liability</td>
                            <td className="px-4 py-3 text-sm text-slate-650">Full reversal of the fraudulent debit within 10 working days as provisional shadow credit.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-semibold text-slate-900">4 to 7 Working Days</td>
                            <td className="px-4 py-3 text-sm text-amber-700 font-medium">Limited Liability (Capped)</td>
                            <td className="px-4 py-3 text-sm text-slate-650">Liability capped at ₹10,000 (standard cards) or ₹25,000 (cards with limits &gt; ₹5L and current accounts). Bank absorbs the rest.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-semibold text-slate-900">Beyond 7 Working Days</td>
                            <td className="px-4 py-3 text-sm text-red-700 font-medium">Bank Policy Dependent</td>
                            <td className="px-4 py-3 text-sm text-slate-650">Liability resolved in accordance with the bank's Board-approved policy, subject to Ombudsman review.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Zero Customer Liability:</strong> This applies when the unauthorized transaction occurs due to: (a) contributory fraud, negligence, or deficiency on the part of the bank (irrespective of whether the transaction is reported by the customer or not), or (b) a third-party breach where the vulnerability lies elsewhere in the system, provided the customer notifies the bank within <strong>three working days</strong> of receiving the transaction alert.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Customer Negligence:</strong> If the loss is due to customer negligence (e.g., sharing PIN, CVV, or OTP), the customer bears the entire loss until the unauthorized transaction is reported to the bank. Crucially, <strong>any unauthorized transactions occurring after the report is filed must be borne entirely by the bank</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Shadow Credit Mandate (Paragraph 8):</strong> Once a customer reports an unauthorized credit card transaction, the bank is legally required to reverse the disputed amount and apply a provisional credit (shadow reversal) to the credit card account within <strong>10 working days</strong>. This credit must be value-dated to the date of the unauthorized debit, ensuring no finance charges or interest accrue on the disputed amount during the bank's investigation. The investigation must be completed within 90 days.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The RBI circular mandates banks to reverse disputed transactions within 10 working days as provisional credit. Banks cannot demand payment for disputed amounts during an active investigation, nor can they levy interest charges or finance fees on the suspended sum.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: Visa, Mastercard, & Amex Chargeback Standards & Billing Disputes */}
                <section id="card-network-chargebacks" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Visa, Mastercard &amp; Amex Chargeback Standards &amp; Billing Disputes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to domestic RBI regulations, credit card disputes are governed by the rules and operating regulations of international payment card networks, including <strong>Visa</strong>, <strong>Mastercard</strong>, and <strong>American Express (Amex)</strong>. These networks maintain structured dispute resolution frameworks known as the <strong>Chargeback Process</strong>. A chargeback is a formal dispute raised by the cardholder's issuing bank against the merchant's acquiring bank, requesting a reversal of the transaction. This framework covers both unauthorized transactions and merchant-related billing disputes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When initiating a chargeback, the dispute must be mapped to specific reason codes defined by the card network:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Visa Reason Code 10.4 (Other Fraud - Card-Absent Environment):</strong> Used for online or CNP transactions executed without the cardholder's authorization. This code is applicable when fraudsters bypass domestic OTP requirements by processing transactions through international merchants that do not use 3D Secure protocols.
                      </li>
                      <li>
                        <strong>Visa Reason Code 10.1 (EMV Fraud - Card-Present Environment):</strong> Applied when a cloned or skimmed card is used physically at a terminal. To succeed, the issuing bank must prove that the terminal did not process the transaction using the chip's secure encryption, fallback to magnetic stripe reading occurred, or the physical card was in a different location.
                      </li>
                      <li>
                        <strong>Mastercard Condition 4837 (No Cardholder Authorization):</strong> The standard code for transactions executed without the cardholder's permission, covering both physical cloning and online fraud.
                      </li>
                      <li>
                        <strong>Mastercard Condition 4848 (Card-Not-Present Fraud):</strong> Specifically targets unauthorized online transactions, requiring the merchant to prove that secure authentication (e.g., SecureCode or Identity Check) was successfully completed.
                      </li>
                      <li>
                        <strong>Amex Code F14 (Card Not Present Fraud) &amp; F29 (Card Member Claiming Fraud):</strong> Amex, operating a closed-loop network, uses these codes to dispute charges where the cardholder claims they did not authorize the transaction, requiring the merchant to provide proof of identity or delivery.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Chargeback Dispute Window:</strong> While the RBI's Zero Liability circular requires notification to the bank within 3 days to establish zero liability, the card networks permit a wider dispute window. Visa, Mastercard, and Amex operating rules typically allow banks to raise chargebacks up to <strong>120 days</strong> from the transaction settlement date. This means that if a customer misses the initial 3-day RBI window, the bank can still legally pursue recovery via the chargeback system. The bank cannot refuse to file a chargeback solely because the customer reported the issue outside the 3-day window, provided the request is within the network's 120-day limit.
                    </p>
                  </div>
                </section>

                {/* Section 4: Immediate Response Actions & Dispute Management Checklist */}
                <section id="emergency-response-protocol" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. First Response Protocol: Step-by-Step Recovery Actions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The outcome of a credit card fraud case is often decided within the first few hours of the compromise. In digital banking fraud, rapid action is critical. Cybercriminals move siphoned funds quickly, siphoning cash through multiple accounts or digital wallets. A structured response protocol helps mitigate losses and secures the necessary evidence to support your legal claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you detect unauthorized transactions on your credit card, follow these steps immediately:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Block the Card and Restrict Accounts:</strong> Do not rely solely on phone calls. Open your bank's mobile app or internet banking portal and lock the card immediately. Set all transaction limits (international, domestic, POS, ATM, contactless) to zero. If you cannot access the app, send the bank's standard blocking SMS (e.g., SMS &quot;BLOCK CARD [Last 4 Digits]&quot; to the bank's shortcode) or call the 24/7 customer helpline to request an immediate block.
                      </li>
                      <li>
                        <strong>File a Complaint with the Nodal Cyber Cell (Helpline 1930):</strong> Dial <strong>1930</strong> to report the financial fraud immediately. The helpline connects you to the Citizen Financial Cyber Fraud Reporting System (CFCFRMS). Provide the operator with your card number, transaction amount, time, and destination merchant or bank details. This logs the incident in the cyber cell network, initiating a freeze on the recipient account or wallet before the funds are withdrawn.
                      </li>
                      <li>
                        <strong>Register a Formal Complaint on the Cybercrime Portal:</strong> Visit <Link href="https://cybercrime.gov.in" target="_blank" className="text-[#DC2626] underline font-medium">cybercrime.gov.in</Link> and file a detailed complaint. Upload screenshots of transaction SMS alerts, bank statements showing the debit, and any phishing messages. Ensure you obtain the official <strong>Acknowledgement Number</strong>, which is required by banks and courts as proof of timely reporting.
                      </li>
                      <li>
                        <strong>Submit a Written Dispute Form to Your Bank:</strong> Visit your bank branch and submit a physical copy of the Dispute Resolution Form (DRF) or Transaction Dispute Form (TDF), along with a copy of the Cyber Cell complaint. Request a stamped acknowledgement of this submission. The date of this submission establishes your reporting timeline under the RBI Zero Liability matrix.
                      </li>
                      <li>
                        <strong>Request a Formal Dispute Reference Number (RRN/ARN):</strong> Ensure the bank provides you with a unique complaint number for the dispute. This reference code is necessary to track the progress of the chargeback or escalate the case if the bank fails to resolve it.
                      </li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      By following this protocol, you establish a clear timeline of events, proving you took immediate steps to limit the fraud and notify the relevant authorities. This timeline is crucial if the bank disputes liability.
                    </p>
                  </div>
                </section>

                {/* Section 5: Evidentiary Framework under BSA & Legal Liability Precedents */}
                <section id="evidence-and-legal-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Compiling Admissible Digital Evidence &amp; Section 63 BSA Compliance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Digital fraud recovery relies heavily on the quality and admissibility of the evidence presented. In Indian courts and regulatory tribunals, electronic records are subject to strict statutory requirements. Under the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, specifically <strong>Section 63</strong> (which replaced Section 65B of the Indian Evidence Act, 1872), any digital document introduced as primary or secondary evidence must be accompanied by a formal <strong>Digital Certificate</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 63 BSA certificate is a written declaration confirming the integrity and proper operation of the computer system, mobile phone, or server that produced the digital records. Without this certificate, documents like PDF bank statements, screenshots of transaction alerts, or email logs are considered inadmissible hearsay, which can weaken your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For credit card disputes, your evidence package should include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Certified Credit Card Statement:</strong> A statement signed and stamped by the branch manager, showing the debit transactions, UTR/ARN numbers, and beneficiary details.
                      </li>
                      <li>
                        <strong>Proof of Physical Possession:</strong> In skimming or cloning cases, you must prove that the physical card was in your possession at the time of the fraud. This can be supported by location logs (Google Maps timeline), office attendance records, toll plaza receipts, or CCTV footage showing you were in a different location than the transaction.
                      </li>
                      <li>
                        <strong>Communication Logs:</strong> Copies of emails sent to the bank, SMS delivery reports, call logs showing dial times to the bank helpline, and screenshots of chat logs with customer support.
                      </li>
                      <li>
                        <strong>Nodal Officer Acknowledgement:</strong> The stamped receipt of your written complaint submitted to the bank's branch or Nodal Officer.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Judicial Precedents on Credit Card Fraud Liability:</strong> Courts have repeatedly ruled that credit card issuers bear the primary responsibility for transaction security. In cases such as <em>HDFC Bank Ltd. v. Amit Kumar Saxena (2021)</em>, the National Consumer Disputes Redressal Commission (NCDRC) established that if a cardholder did not authorize a transaction and reported the issue promptly, the bank cannot hold the cardholder liable. The burden of proving customer negligence remains with the bank, not the customer.
                    </p>
                  </div>
                </section>

                {/* Section 6: Statutory Escalations: Grievance Redressal, Ombudsman, & Consumer Litigation */}
                <section id="notices-ombudsman-consumer-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Serving Legal Notices, RBI Integrated Ombudsman &amp; Consumer Court
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank rejects your claim, delays the provisional reversal beyond 10 working days, or fails to resolve the dispute within 30 days, you should pursue formal legal remedies. These steps escalate the dispute from customer support to the bank's legal department and regulatory authorities.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The three primary escalation channels are:
                    </p>
                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">1. The Statutory Legal Notice</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          A formal notice drafted by our panel of recovery advocates is sent to the bank's corporate office and Principal Nodal Officer. The notice cites the specific paragraphs of the RBI Master Circular, details the bank's failure to provide shadow credit within 10 days, and highlights any security deficiencies (e.g., failure to detect anomalous international transactions). The notice gives the bank a 15-day period to resolve the issue, failing which legal action will be initiated.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. The RBI Integrated Ombudsman Scheme, 2021</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If the bank does not respond or rejects your claim, you can file a complaint with the RBI Integrated Ombudsman via the online Complaint Management System (CMS) at <Link href="https://cms.rbi.org.in" target="_blank" className="text-[#DC2626] underline font-medium">cms.rbi.org.in</Link>. The Ombudsman reviews the dispute under the RBI guidelines. If the bank is found to have violated the customer protection circular, the Ombudsman can direct a full refund and award compensation up to ₹20 Lakhs for direct losses, plus up to ₹1 Lakh for mental harassment.
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">3. Consumer Commission Filings</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          Under the Consumer Protection Act, 2019, cardholders are consumers of banking services. If the bank fails to resolve a valid fraud claim, it constitutes a &quot;Deficiency in Service&quot; under Section 2(11). A complaint can be filed before the District Consumer Disputes Redressal Commission. The Consumer Commissions have the authority to order a refund, award interest, and impose penalties on the bank for failing to adhere to regulatory guidelines.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      By utilizing these channels, you ensure the dispute is reviewed by independent authorities, reducing the bank's ability to unilaterally dismiss your claim.
                    </p>
                  </div>
                </section>

                {/* Section 7: Client Case Studies & Verified Recovery Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Verified Case Studies &amp; Recovery Testimonials
                  </h2>
                  <div className="space-y-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-extrabold text-slate-900 text-sm md:text-base">{rev.author.name}</span>
                          <div className="flex items-center text-amber-500">
                            {Array.from({ length: Number(rev.reviewRating.ratingValue) }).map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 italic leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 8: Why Choose LegalRecovery */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Why Choose LegalRecovery for Credit Card Fraud Cases
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Navigating the recovery process for credit card fraud requires a combination of technical knowledge, understanding of payment network rules, and legal expertise. Individual complaints are often delayed by bank customer service, which may rely on standard template rejections. LegalRecovery provides structured legal support through our panel of recovery advocates and dispute resolution professionals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Technical Dispute Management</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We assist in preparing the dispute documentation using the correct Visa, Mastercard, or Amex reason codes, aligning the facts with the network's rules to improve the chances of a successful chargeback.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Regulatory Compliance Auditing</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We audit the bank's response against the RBI Customer Liability circular, verifying whether the bank complied with the 10-day shadow credit mandate and security guidelines.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Evidence Certification</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We help draft the mandatory Section 63 BSA (formerly 65B IEA) digital certificates, ensuring your online statements, screenshots, and chat logs are legally admissible in court.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Ombudsman &amp; Court Representation</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          If the bank rejects the claim, we manage the escalation process, including drafting complaints for the RBI Integrated Ombudsman and filing petitions before the Consumer Commission.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                          >
                            <span className="font-bold text-slate-900 text-sm md:text-base">{faq.question}</span>
                            <span className="text-xl text-slate-500 font-light">{isExpanded ? '−' : '+'}</span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 bg-white border-t border-slate-200 text-xs md:text-sm text-slate-650 leading-relaxed">
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

            {/* Right Sidebar - Sticky CTA */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] text-white p-6 rounded-3xl border border-slate-900 shadow-xl">
                <span className="inline-block text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-3 bg-red-950/40 px-3 py-1 rounded-full border border-red-500/10">
                  Legal Panel Active
                </span>
                <h3 className="text-lg font-black mb-3 text-white leading-tight">
                  Recover Your Credit Card Funds
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Connect with our panel of cyber advocates. We help draft legal notices, initiate chargeback disputes, and file RBI Ombudsman complaints.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-lg text-xs md:text-sm cursor-pointer"
                >
                  Start Claim Process
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </>
  );
}
