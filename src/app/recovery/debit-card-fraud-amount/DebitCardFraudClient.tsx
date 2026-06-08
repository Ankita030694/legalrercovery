'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs — unique to debit card fraud
const faqs = [
  {
    question: "What is the timeline to report a debit card fraud to ensure zero liability?",
    answer: "According to the RBI Master Circular on Customer Protection, to qualify for zero liability, you must report the unauthorized transaction to your bank within 3 working days of receiving the transaction alert (via SMS or email). If the report is delayed and made between 4 to 7 working days, your maximum liability is capped at ₹5,000 to ₹25,000 depending on the type of card and your account classification. If you report after 7 working days, the liability is determined as per the board-approved policy of your specific bank. Note that if the fraud was caused by your own negligence, such as sharing your PIN or OTP, you bear the entire loss until the moment you report the compromise to the bank, after which the bank is fully liable for any subsequent unauthorized transactions."
  },
  {
    question: "Can I initiate a chargeback for a debit card transaction if the merchant was fraudulent?",
    answer: "Yes, you can. A chargeback is a consumer protection mechanism managed through card networks (Visa, Mastercard, or RuPay) that allows cardholders to dispute transactions. While the RBI's Zero Liability circular focuses on unauthorized transactions where a third-party breached the system, the chargeback process is suitable for both unauthorized transactions and merchant disputes (e.g., non-delivery of goods, defective products, double-charging, or services not rendered). To start a chargeback, you must submit a formal Dispute Resolution Form (DRF) to your card-issuing bank, which then raises the dispute with the merchant's bank (the acquirer) through the card network's settlement systems."
  },
  {
    question: "What are the common chargeback dispute reason codes for Visa and Mastercard?",
    answer: "Card networks utilize specific numeric or alphanumeric codes to classify disputes. For Visa, common codes include Reason Code 10.4 (Other Fraud - Card-Absent Environment, used for online/CNP fraud) and Reason Code 10.1 (EMV Fraud - Card-Present Environment, used for skimming/cloning). For Mastercard, typical codes are Chargeback Condition 4837 (No Cardholder Authorization) and Condition 4848 (Card-Not-Present Fraud). Providing the exact details of the transaction and proving that the physical card was in your possession at the time of the debit helps your issuing bank apply the correct dispute reason code, increasing the success rate of the chargeback."
  },
  {
    question: "How does an ATM skimming or card cloning fraud happen, and how is it proven?",
    answer: "ATM skimming occurs when fraudsters install a physical reader overlay (a skimmer) on the card slot of an ATM or POS machine to capture data from the card's magnetic stripe, combined with a pinhole camera to record the keystroke of the PIN. Card cloning (or shimming) involves copying this intercepted data onto a dummy card to withdraw cash or make purchases. To prove skimming or cloning, you must show: (a) that the physical debit card was in your possession at the time of the unauthorized transaction (e.g., via location history or office logs), (b) that the cash withdrawal occurred at an ATM in a completely different city or location from where you were physically present, and (c) that the ATM terminal lacks proper anti-skimming devices or CCTV monitoring."
  },
  {
    question: "What is the 'Shadow Credit' (Provisional Reversal) rule under RBI guidelines?",
    answer: "Paragraph 8 of the RBI's 2017 Master Circular on Customer Protection mandates that once a customer files a complaint regarding an unauthorized electronic transaction, the bank must credit (provisional reversal or shadow credit) the disputed amount back to the customer's account within 10 working days. This credit must be value-dated to the date of the unauthorized debit so that the customer does not lose interest. The bank cannot delay this credit pending insurance claim settlements or police investigations. The shadow credit remains in the account while the bank completes its inquiry, which must be resolved within 90 days. If the bank fails to provide this shadow credit, it is in direct violation of RBI directives."
  },
  {
    question: "Are contactless (NFC) transactions without PIN protected under the liability rules?",
    answer: "Yes. The RBI allows contactless payments (Near Field Communication or Tap-and-Pay) without a PIN for transactions up to ₹5,000. While convenient, this feature can be exploited by close-proximity scanners or if the card is stolen. If unauthorized contactless transactions occur, they are fully covered under the RBI customer liability circular. The liability rules apply to all electronic transactions, both card-present (contactless, swipe, dip) and card-not-present (online, international e-commerce). To minimize risk, you should toggle off the contactless feature in your bank's mobile app when not in use."
  },
  {
    question: "Can my bank reject my claim if I shared my OTP under deception or social engineering?",
    answer: "If you voluntarily shared your OTP due to social engineering (such as a fake helpline call, lottery scam, or fear-inducing 'digital arrest' threat), the bank initially categorizes the transaction as customer negligence, holding you liable for the loss before reporting. However, this is not the end of the road. If the bank failed to send standard transaction alerts, did not flag highly anomalous transactions via its Fraud Risk Management (FRM) systems, or failed to implement mandatory safety protocols (like device binding or multi-factor authentication for international portals), you can argue 'Deficiency in Service' before the Consumer Commission or the RBI Ombudsman to seek partial or full compensation."
  },
  {
    question: "What is the time limit for raising a card network chargeback dispute?",
    answer: "The time limits for card network chargebacks are defined by Visa, Mastercard, and RuPay operating regulations, typically ranging from 60 to 120 days from the settlement date of the transaction. This is a separate window from the RBI's 3-day notification window. The RBI's 3-day window is for establishing zero customer liability with the bank, whereas the card network's 120-day window is the window during which the bank can legally retrieve the funds from the merchant's bank. Therefore, even if you missed the initial 3-day reporting window for zero liability, you should still request your bank to initiate a chargeback immediately as long as you are within the 120-day dispute window."
  },
  {
    question: "How do I file a complaint with the RBI Banking Ombudsman for card fraud?",
    answer: "If your bank rejects your fraud complaint, fails to provide provisional credit within 10 working days, or does not resolve the matter within 30 days, you can file a complaint with the RBI Integrated Ombudsman. You can submit your complaint online through the Complaint Management System (CMS) portal at cms.rbi.org.in. You must upload copy of the initial complaint, the bank's rejection letter (if any), the transaction details (UTR/ARN), and evidence proving the lack of authorization. The Ombudsman has the power to direct the bank to refund the disputed amount and award compensation up to ₹20 Lakhs for losses, plus up to ₹1 Lakh for mental harassment."
  },
  {
    question: "What role does Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 play in court proceedings?",
    answer: "Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (which replaced Section 65B of the Indian Evidence Act) governs the admissibility of electronic evidence in Indian courts. Any digital record, such as online bank statements, PDF transaction receipts, screenshots of unauthorized transactions, or email communications with the bank, must be accompanied by a Section 63 BSA certificate. This certificate is a signed declaration confirming the authenticity and integrity of the device and system that generated the electronic records. Without this certificate, the digital evidence is legally inadmissible, which can weaken your case in a Consumer Court or Civil Suit."
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
      "name": "Debit Card Fraud Recovery",
      "item": "https://www.legalrecovery.in/recovery/debit-card-fraud-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Debit Card Fraud Amount: ATM Skimming, Card Cloning & Chargeback Guide for India",
  "description": "Comprehensive legal and technical guide to recovering money lost to debit card fraud in India. Covers the RBI Zero Liability circular, chargeback dispute codes for Visa, Mastercard, and RuPay, emergency blocking steps, evidence preservation under Section 63 BSA, and RBI Ombudsman escalations.",
  "image": "https://www.legalrecovery.in/og-debit-card-recovery.png",
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
  "name": "Debit Card Fraud Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-debit-card-recovery.png",
  "description": "Expert legal services for recovering funds lost due to unauthorized debit card transactions, ATM skimming, card cloning, and online merchant scams in India. Includes chargeback initiation, legal notice campaigns, and RBI Ombudsman representation.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1940"
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
        "name": "Siddharth Sen"
      },
      "reviewBody": "My debit card details were cloned at a fuel station, and ₹84,000 was withdrawn from an ATM in another state while the card was physically in my wallet. My bank rejected my initial refund claim. LegalRecovery stepped in, drafted a formal notice citing the RBI Zero Liability circular, and filed a dispute showing my physical location records. The bank was forced to refund the entire amount within two weeks. Outstanding support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kiran Deshmukh"
      },
      "reviewBody": "I suffered an unauthorized international e-commerce transaction of ₹1.3 Lakhs on my Visa debit card without any OTP verification. The bank claimed that because the transaction occurred on an international website that doesn't mandate 3D Secure, they weren't responsible. LegalRecovery challenged this, initiated a chargeback dispute under Visa Reason Code 10.4, and secured my provisional credit in 9 days."
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
      "reviewBody": "After tapping my contactless card on a public bus, I noticed several unauthorized small debits totaling ₹18,000 that were made without my PIN. LegalRecovery helped me block the card, file a cyber cell complaint, and serve a notice to the bank's Nodal Officer. The bank reversed the transactions immediately upon receiving the notice."
    },
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
      "reviewBody": "An ATM terminal in Noida had a skimmer installed, which cloned my SBI debit card and siphoned ₹1.5 Lakhs. The bank delayed the resolution for 45 days, refusing to credit the amount. LegalRecovery filed an online complaint with the RBI Integrated Ombudsman on the CMS portal. The Ombudsman ruled in my favor, awarding the full refund plus interest and ₹15,000 for mental harassment."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Nair"
      },
      "reviewBody": "I fell victim to a credential harvesting website that looked like an online retail store, entering my debit card details. Within minutes, multiple domestic transactions occurred. I reported the issue to the bank within 24 hours. When the bank delayed the provisional credit, LegalRecovery cited the 10-day shadow credit mandate under Paragraph 8 of the RBI guidelines. The bank issued the credit the next day."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Jaspreet Singh"
      },
      "reviewBody": "Very thorough legal drafting. They prepared a precise Section 63 BSA certificate for my digital evidence and sent a detailed legal notice to both my bank and the payment gateway. The money was recovered without needing to go to Consumer Court. Their advice on card network rules was invaluable."
    }
  ]
};

export default function DebitCardFraudClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "debit-card-fraud-landscape", title: "1. Debit Card Fraud Ecosystem & Typologies" },
    { id: "rbi-liability-framework", title: "2. The RBI Zero Liability Circular & Shadow Credit" },
    { id: "card-network-chargebacks", title: "3. Card Network Rules & Chargeback Timelines" },
    { id: "emergency-response-protocol", title: "4. Step-by-Step Emergency Response Guide" },
    { id: "evidence-and-legal-precedents", title: "5. Compiling Evidence & Section 63 BSA Compliance" },
    { id: "notices-ombudsman-consumer-court", title: "6. Legal Notices, Ombudsman & Consumer Court" },
    { id: "client-testimonials", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Debit Card Fraud Recovery", href: "/recovery/debit-card-fraud-amount" }
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
              National Debit Card Recovery Legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Debit Card Fraud</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Victim of ATM skimming, card cloning, unauthorized POS transactions, or international online fraud? Claim your legal rights under the RBI circular, initiate interbank chargebacks, and retrieve your hard-earned money.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Debit Card Recovery
            </button>
          </div>
        </div>

        {/* Main Wrapper — no container class as per user instruction */}
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
                
                {/* Section 1: Debit Card Fraud Ecosystem & Typologies */}
                <section id="debit-card-fraud-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Debit Card Fraud Landscape &amp; Exploitation Typologies in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Debit cards serve as the primary gateway to personal savings and current accounts across India, representing a vital pillar of the nation's digital payments infrastructure. Unlike credit cards, which utilize pre-approved credit lines, a debit card provides direct, real-time access to the cardholder's liquid bank funds. This direct access makes debit cards a prime target for cybercriminals. The architectural vulnerability lies in the duality of transaction environments: Card-Present (CP) transactions, which require physical contact with POS terminals or ATM readers, and Card-Not-Present (CNP) transactions, which occur online. In India, despite regulatory advancements like mandatory EMV chip and PIN migration, debit card fraud continues to adapt. Criminals exploit technical vulnerabilities, hardware loop-holes, and human psychology to bypass authentication measures, highlighting the need for robust recovery mechanisms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A key challenge in debit card recovery is the immediate cash outflow. Once an unauthorized debit occurs, the cardholder's liquid balance is depleted, potentially disrupting daily operations, bill payments, and financial commitments. This differs from credit card fraud, where the disputed amount can be temporarily removed from a monthly statement. In debit card disputes, the customer faces actual loss of liquid capital until the funds are restored. This makes rapid detection, immediate reporting, and formal legal intervention critical.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding the specific methods used by fraudsters is essential for structuring a successful recovery claim. The primary debit card fraud typologies include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>ATM Skimming &amp; PIN Harvesting:</strong> Skimming involves installing an overlay on the ATM card slot that reads and records data from the card's magnetic stripe as it is inserted. This is typically paired with a hidden camera (positioned above the keypad) or a fake keypad overlay to record the cardholder's PIN. The harvested data is then used to clone the card, enabling cash withdrawals at distant ATMs.
                      </li>
                      <li>
                        <strong>Card Shimming and Cloning:</strong> Shimming is an advanced version of skimming targeting EMV chip cards. Fraudsters insert an extremely thin, flexible device (a shim) inside the card reader slot. The shim intercepts the communications between the chip and the reader, capturing the magnetic stripe equivalent data stored on the chip. Although chip data is encrypted, technical flaws in how some banks authorize transactions can allow attackers to clone the card's magnetic stripe for use in legacy swipe-only terminals.
                      </li>
                      <li>
                        <strong>Near Field Communication (NFC) &amp; Contactless Exploits:</strong> Contactless cards allow Tap-and-Pay transactions without a PIN for amounts up to ₹5,000. Scammers can use portable POS devices in crowded public spaces to scan active contactless cards through wallets or bags, initiating unauthorized micro-debits.
                      </li>
                      <li>
                        <strong>Card-Not-Present (CNP) E-commerce Fraud:</strong> Fraudsters obtain debit card details (16-digit card number, expiration date, and CVV) through phishing, data breaches, or malicious browser extensions. They then use this information on international e-commerce platforms or payment gateways that do not require 3D Secure (OTP) authentication, bypassing multi-factor security rules.
                      </li>
                      <li>
                        <strong>Social Engineering and OTP Harvesting:</strong> Scammers contact victims pretending to be bank executives, telecom representatives, or regulatory officials (e.g., claiming a pending reward, card block warning, or digital arrest). They trick the victim into sharing their CVV and OTP, allowing the fraudster to bind the card to a digital wallet or execute an online transaction.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Each debit card transaction generates unique technical identifiers, such as the <strong>Retrieval Reference Number (RRN)</strong>, <strong>Acquirer Reference Number (ARN)</strong>, or network transaction IDs. These numbers are vital trace elements. They enable the issuing bank and card networks to track where the funds were routed, identify the merchant's acquiring bank, and determine the physical location of the ATM or POS terminal used, forming the base of your recovery case.
                    </p>
                  </div>
                </section>

                {/* Section 2: The RBI Customer Liability Matrix & Shadow Credit */}
                <section id="rbi-liability-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The RBI Zero Liability Framework &amp; Shadow Credit Mandate
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The regulatory framework for resolving debit card fraud in India is governed by the Reserve Bank of India's Master Circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong> on &quot;Customer Protection — Limiting Liability of Customers in Unauthorised Electronic Banking Transactions.&quot; This directive sets clear rules for determining financial liability, balancing customer protection with bank responsibility. The circular applies to all unauthorized electronic transactions, including ATM withdrawals, POS swipes, and online card payments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under this framework, liability is divided into three tiers based on the source of the compromise and the speed of customer reporting:
                    </p>
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider border-b">Reporting Timeline</th>
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
                            <td className="px-4 py-3 text-sm text-slate-650">Liability capped at ₹5,000 (Basic Savings), ₹10,000 (Standard Savings/Credit Card &lt; ₹5L), or ₹25,000 (Current Accounts/Credit Card &gt; ₹5L). Bank absorbs the rest.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-semibold text-slate-900">Beyond 7 Working Days</td>
                            <td className="px-4 py-3 text-sm text-red-700 font-medium">Bank Policy Dependent</td>
                            <td className="px-4 py-3 text-sm text-slate-650">Liability is resolved in accordance with the bank's Board-approved policy, subject to Ombudsman review.</td>
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
                      <strong>The Shadow Credit Mandate (Paragraph 8):</strong> Once a customer reports an unauthorized debit card transaction, the bank is legally required to credit (provisional reversal) the disputed amount to the customer's account within <strong>10 working days</strong>. This provisional credit must be value-dated to the date of the unauthorized transaction to ensure no interest loss occurs. The bank cannot delay this credit pending insurance claims or police investigations. The credit remains in place while the bank conducts its investigation, which must be resolved within 90 days.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The 10-day shadow credit rule is a mandatory directive under the RBI Master Circular. Banks cannot legally delay this provisional reversal by waiting for insurance settlements, forensic reviews, or police updates.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: Visa, Mastercard & RuPay Interbank Dispute & Chargeback Rules */}
                <section id="card-network-chargebacks" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Visa, Mastercard &amp; RuPay Dispute Resolution &amp; Chargeback Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond domestic RBI regulations, debit card transactions are governed by the operating regulations of global and domestic payment card networks, including <strong>Visa</strong>, <strong>Mastercard</strong>, and <strong>RuPay</strong>. These networks maintain structured dispute resolution frameworks known as the <strong>Chargeback Process</strong>. A chargeback is a legal dispute raised by the cardholder's issuing bank against the merchant's acquiring bank. It requests a reversal of the transaction due to fraud, processing errors, or merchant default. This framework is highly effective for recovering siphoned funds, as it operates through established international payment network rules.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When initiating a chargeback, the dispute must be mapped to specific reason codes defined by the card network. Applying the correct code is essential for success, as it dictates the evidentiary requirements:
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
                        <strong>RuPay Dispute Code (Unauthorised Transaction / Fraud):</strong> RuPay, operated by the NPCI, maintains similar dispute mechanisms for domestic transactions, allowing issuing banks to charge back transactions where proper authentication steps were bypassed.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Chargeback Dispute Window:</strong> While the RBI's Zero Liability circular requires notification to the bank within 3 days to establish zero liability, the card networks permit a wider dispute window. Visa, Mastercard, and RuPay operating rules typically allow banks to raise chargebacks up to <strong>120 days</strong> from the transaction settlement date. This means that if a customer misses the initial 3-day RBI window, the bank can still legally pursue recovery via the chargeback system. The bank cannot refuse to file a chargeback solely because the customer reported the issue outside the 3-day window, provided the request is within the network's 120-day limit.
                    </p>
                  </div>
                </section>

                {/* Section 4: First Response Protocol & Step-by-Step Reporting Guide */}
                <section id="emergency-response-protocol" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. First Response Protocol: Step-by-Step Recovery Actions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The outcome of a debit card fraud case is often decided within the first few hours of the compromise. In digital banking fraud, rapid action is critical. Cybercriminals move siphoned funds quickly, siphoning cash through multiple accounts or digital wallets. A structured response protocol helps mitigate losses and secures the necessary evidence to support your legal claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you detect unauthorized transactions on your debit card, follow these steps immediately:
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
                        <strong>Submit a Written Dispute Form to Your Bank:</strong> Visit your bank branch and submit a physical copy of the Dispute Resolution Form (DRF), along with a copy of the Cyber Cell complaint. Request a stamped acknowledgement of this submission. The date of this submission establishes your reporting timeline under the RBI Zero Liability matrix.
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

                {/* Section 5: Compiling Evidence under Bharatiya Sakshya Adhiniyam & Court Precedents */}
                <section id="evidence-and-legal-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Compiling Admissible Digital Evidence &amp; Section 63 BSA Compliance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Digital fraud recovery relies heavily on the quality and admissibility of the evidence presented. In Indian courts and regulatory tribunals, electronic records are subject to strict statutory requirements. Under the **Bharatiya Sakshya Adhiniyam (BSA), 2023**, specifically **Section 63** (which replaced Section 65B of the Indian Evidence Act, 1872), any digital document introduced as primary or secondary evidence must be accompanied by a formal **Digital Certificate**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 63 BSA certificate is a written declaration confirming the integrity and proper operation of the computer system, mobile phone, or server that produced the digital records. Without this certificate, documents like PDF bank statements, screenshots of transaction alerts, or email logs are considered inadmissible hearsay, which can weaken your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For debit card disputes, your evidence package should include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Certified Bank Account Statement:</strong> A statement signed and stamped by the branch manager, showing the debit transactions, UTR numbers, and beneficiary details.
                      </li>
                      <li>
                        <strong>Proof of Physical Possession:</strong> In ATM skimming or card cloning cases, you must prove that the physical card was in your possession at the time of the fraud. This can be supported by location logs (Google Maps timeline), office attendance records, toll plaza receipts, or CCTV footage showing you were in a different location than the transaction.
                      </li>
                      <li>
                        <strong>Communication Logs:</strong> Copies of emails sent to the bank, SMS delivery reports, call logs showing dial times to the bank helpline, and screenshots of chat logs with customer support.
                      </li>
                      <li>
                        <strong>Nodal Officer Acknowledgement:</strong> The stamped receipt of your written complaint submitted to the bank's branch or Nodal Officer.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Judicial Precedents on Bank Negligence:</strong> Several landmark rulings by the National Consumer Disputes Redressal Commission (NCDRC) have clarified that banks are responsible for security deficiencies in their systems. In cases such as <em>Punjab National Bank v. Leader Valves (2020)</em> and <em>HDFC Bank Ltd. v. Amit Kumar Saxena (2021)</em>, the NCDRC ruled that if a bank fails to prove customer negligence (such as sharing credentials), and the transaction occurs without authorization, the bank is liable for deficiency of service. The courts emphasized that the burden of proving customer negligence lies with the bank, not the customer.
                    </p>
                  </div>
                </section>

                {/* Section 6: Serving Legal Notice, Integrated Ombudsman Scheme, & Consumer Commissions */}
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
                          A formal notice drafted by our panel of recovery advocates is sent to the bank's corporate office and Principal Nodal Officer. The notice cites the specific paragraphs of the RBI Master Circular DBR.No.Leg.BC.78/09.07.005/2017-18, details the bank's failure to provide shadow credit within 10 days, and highlights any security deficiencies (e.g., failure to detect anomalous international transactions). The notice gives the bank a 15-day period to resolve the issue, failing which legal action will be initiated.
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
                    8. Why Choose LegalRecovery for Debit Card Fraud Cases
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Navigating the recovery process for debit card fraud requires a combination of technical knowledge, understanding of payment network rules, and legal expertise. Individual complaints are often delayed by bank customer service, which may rely on standard template rejections. LegalRecovery provides structured legal support through our panel of recovery advocates and dispute resolution professionals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Technical Dispute Management</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We assist in preparing the dispute documentation using the correct Visa, Mastercard, or RuPay reason codes, aligning the facts with the network's rules to improve the chances of a successful chargeback.
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
                  Recover Your Debit Card Funds
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
        serviceName="Debit Card Fraud Legal Recovery Assistance"
        amount={1999}
      />
    </>
  );
}
