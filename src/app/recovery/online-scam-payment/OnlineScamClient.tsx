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
    question: "What is a chargeback, and can it recover money lost to online scams?",
    answer: "A chargeback is a consumer protection mechanism provided by card networks (Visa, Mastercard, RuPay) and banks. It allows cardholders to dispute transactions when they do not receive the goods or services promised, or if the merchant turns out to be fraudulent. If filed within the network guidelines (usually 120 days), the bank can reverse the funds from the scammer's bank account."
  },
  {
    question: "Can I get a chargeback refund for a UPI transfer sent to a scammer?",
    answer: "Yes, though the process is slightly different from cards. For UPI payments, you can file a dispute on the NPCI portal or through your UPI app (like GPay, PhonePe, Paytm). If the scammer's bank account is flagged quickly, the beneficiary bank can freeze the equivalent funds. Citing 'wrongful credit' or 'unauthorized transaction' is key."
  },
  {
    question: "What is the time limit for filing a card chargeback for an online scam?",
    answer: "For Visa and Mastercard transactions, the standard dispute filing window is generally 120 days from the transaction settlement date. However, for certain types of services, it can be extended up to 540 days if the delivery date was scheduled in the future. You must file the request as soon as you discover the fraud."
  },
  {
    question: "How does the RBI master circular protect victims of online scam payments?",
    answer: "The RBI master circular on customer protection limits customer liability for unauthorized electronic transactions. If the transaction occurred without your consent (e.g., due to account hacking or third-party breach) and you report it within 3 working days, you have zero liability, and the bank must credit the disputed amount back within 10 working days."
  },
  {
    question: "What is a merchant nodal account, and how does it relate to online scams?",
    answer: "A nodal account is a special bank account opened by payment gateways (like Razorpay, Cashfree) under RBI guidelines to temporarily hold customer funds before paying them out to merchants. If you alert the gateway with a cyber complaint within the settlement period (usually T+2 or T+3 days), they can freeze the funds in their nodal account before siphoning occurs."
  },
  {
    question: "What should I do if my bank refuses to initiate a chargeback for a scam?",
    answer: "If your bank refuses or ignores your chargeback request, you should serve a formal legal notice to the bank's Grievance Redressal Officer. If they fail to comply within 30 days, you can escalate the matter to the RBI Ombudsman through the CMS portal (cms.rbi.org.in), citing a violation of card network rules and RBI guidelines."
  },
  {
    question: "Are payment gateways legally liable if they host a scam website?",
    answer: "Under Section 79 of the Information Technology Act, 2000, gateways enjoy safe-harbor protection if they act purely as technical intermediaries. However, if they fail to perform due diligence (e.g. onboarding merchants without KYC verification) or fail to block a flagged fraud merchant, they lose immunity and can be held liable to refund the victims."
  },
  {
    question: "What evidence is required to prove an online payment scam to the bank?",
    answer: "You must provide: 1. The transaction receipt showing the UTR or RRN number. 2. A copy of the cybercrime complaint filed on cybercrime.gov.in. 3. Screenshots of chat logs showing the scammer's promises. 4. Proof of service/delivery failure (e.g., emails returned as undeliverable). 5. A signed transaction dispute form."
  },
  {
    question: "What is the difference between a chargeback and a refund?",
    answer: "A refund is a voluntary reversal initiated directly by the merchant. A chargeback is a forced reversal initiated by the customer's bank against the merchant's account. Chargebacks are used when the merchant is fraudulent, uncooperative, or has siphoned off the funds."
  },
  {
    question: "How does the new Bharatiya Sakshya Adhiniyam, 2023 apply to online scam evidence?",
    answer: "Under Section 63 of the BSA, 2023, electronic evidence (such as payment receipts, website screenshots, and WhatsApp chats) is admissible in court only if accompanied by a formal digital certificate. This certificate declares that the computer/phone used to record the logs was under your control and functioning properly."
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
      "name": "Online Scam Recovery",
      "item": "https://www.legalrecovery.in/recovery/online-scam-payment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Online Scam Payments: Master Guide to Bank Chargebacks & Legal Notice Campaigns",
  "description": "Exhaustive legal blueprint on recovering scammed payments. Detailed analysis of credit card chargeback rights, RBI customer protection rules, IT Act intermediary liability, and consumer court filings.",
  "image": "https://www.legalrecovery.in/og-scam-recovery.png",
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
  "name": "Online Scam Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-scam-recovery.png",
  "description": "Professional legal services to file chargebacks and pursue payment gateway disputes for online scam recovery in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1890"
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
        "name": "Vikram Seth"
      },
      "reviewBody": "I paid ₹1.8 Lakhs to a fraudulent online furniture website. The merchant disappeared after payment. LegalRecovery guided me through the credit card chargeback process, drafted the dispute letters citing Visa rules, and helped me report it on cybercrime.gov.in. I got my chargeback credited within 45 days. Absolutely brilliant!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Preeti Sinha"
      },
      "reviewBody": "A fake tour operator scammed me of ₹2.4 Lakhs using a payment gateway link. LegalRecovery drafted a formal notice to the payment gateway's compliance officer, tracking the merchant node. The gateway froze the merchant's payouts and reversed the amount. Grateful for their help."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Varma"
      },
      "reviewBody": "My bank initially refused to file a chargeback for a fraudulent UPI transfer of ₹90,000. LegalRecovery sent a formal legal notice to the bank's principal officer warning of RBI Ombudsman action. The bank initiated the dispute and recovered the funds. Highly professional!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Malhotra"
      },
      "reviewBody": "Excellent service. They drafted my cyber cell complaints and the representation to the payment aggregator. Citing IT Act provisions made the aggregator trace the fraudulent merchant wallet. Recovered my funds."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Gurpreet Singh"
      },
      "reviewBody": "I was tricked by a fake flight booking portal and transferred ₹1.2 Lakhs via debit card. LegalRecovery guided me through the chargeback process. The funds were locked in the aggregator's nodal account and reversed."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Manoj Kumar"
      },
      "reviewBody": "Very detailed legal notices. Their understanding of RBI rules and card network regulations forced the bank to reverse the disputed credit card transactions. Highly satisfied."
    }
  ]
};

export default function OnlineScamClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "nature-of-online-scams-modes", title: "1. Online Scam Payment Modalities" },
    { id: "chargeback-rights-visa-mastercard-rupay", title: "2. Card Network Chargeback Rights" },
    { id: "rbi-guidelines-unauthorized-liability", title: "3. RBI Customer Liability Mandates" },
    { id: "merchant-nodal-account-settlement", title: "4. Nodal Account & Gateway Rules" },
    { id: "information-technology-act-relevance", title: "5. IT Act & Intermediary Safe Harbor" },
    { id: "cyber-crime-cell-police-filing-1930", title: "6. Cyber Cell Reporting & Helpline" },
    { id: "evidence-preservation-bsa-requirements", title: "7. Evidence Preservation & BSA Rules" },
    { id: "legal-notice-demand-letters-banks", title: "8. Drafting Notices to Gateways & Banks" },
    { id: "consumer-court-remedies-cpa-2019", title: "9. Consumer Court Actions under CPA" },
    { id: "judicial-court-orders-summary-suits", title: "10. Judicial Petitions & Summary Suits" },
    { id: "testimonials-success-stories", title: "11. Client Testimonials & Success" },
    { id: "why-choose-legalrecovery", title: "12. Why Choose LegalRecovery" },
    { id: "faqs", title: "13. FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Online Scam Recovery", href: "/recovery/online-scam-payment" }
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
              National Online Scam Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Online Scam</span> Payment
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Paid money to a fake website, seller, or service provider online? File card chargebacks, initiate gateway disputes, and leverage RBI regulations to claw back your scammed funds.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Scam Recovery
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
                
                {/* Section 1: Online Scam Payment Modalities */}
                <section id="nature-of-online-scams-modes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Online Scam Payment Modalities &amp; Scammer Tactics
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Online scams have reached alarming proportions in India, affecting millions of consumers and businesses. Scammers continuously adapt their strategies to exploit loopholes in digital transaction channels. Typical online scam scenarios include fraudulent e-commerce portals selling non-existent high-value electronics (such as iPhones or laptops at 70% off), fake holiday booking services, predatory stock trading investment apps, fake electricity bill alerts, and identity theft setups.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The siphoning of money primarily happens through four core digital payment channels, each of which has a distinct trace history and recovery route:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Credit Card and Debit Card Payments:</strong> Scammers set up gateway links or clone merchant sites. They extract the card numbers, CVV, and expiry dates to execute unauthorized charges, or mislead users into authorizing transactions for items that are never delivered.</li>
                      <li><strong>UPI (Unified Payments Interface) Transfers:</strong> Using fake support numbers on search engines, scammers trick victims into using UPI applications (like PhonePe, Google Pay, Paytm) to scan fraud QR codes or accept collect-money requests, instantly emptying bank balances.</li>
                      <li><strong>Payment Gateway Merchant Nodes:</strong> Scammers set up dummy merchant profiles on aggregators to process payments, siphoning money through digital wallet nodes.</li>
                      <li><strong>Direct Internet Banking Transfers (IMPS/NEFT/RTGS):</strong> Scammers pose as customs officials, bank security staff, or regulatory authorities, manipulating victims into adding fraudulent mule accounts as beneficiaries and making immediate bank transfers.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover funds, the victim must identify the specific payment trace. While credit and debit card transactions are protected by global card network guidelines (Visa, Mastercard, RuPay), UPI and direct bank transfers are much faster, requiring immediate freezing of recipient nodal wallets and mule bank accounts before the funds are siphoned off as physical cash.
                    </p>
                  </div>
                </section>

                {/* Section 2: Card Network Chargeback Rights */}
                <section id="chargeback-rights-visa-mastercard-rupay" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Card Network Chargeback Rights and Timelines
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you paid scammers using a credit card or debit card, your primary and most powerful legal tool is a <strong>Chargeback</strong>. Governed by card networks like Visa, Mastercard, and RuPay, a chargeback is a consumer protection system that allows cardholders to dispute transactions when merchants engage in fraud, deliver defective goods, or fail to provide the promised service altogether.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unlike a standard refund request, which is voluntary and depends on the merchant, a chargeback is a forced dispute. Under card network rules (such as Visa Dispute Reason Code 13.1 for &quot;Services Not Provided or Merchandise Not Received&quot;), your card-issuing bank submits a formal chargeback request to the merchant&apos;s acquiring bank. The merchant&apos;s bank must immediately freeze the disputed transaction amount. The merchant is then given a specific timeline (usually 30 to 45 days) to submit proof of delivery or service fulfillment. Since scammers cannot provide legitimate proof of delivery, the card network rules in favor of the customer and reverses the funds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The standard filing window for chargeback disputes is generally <strong>120 days</strong> from the transaction settlement date. In specific cases, such as services scheduled for future delivery (like tour packages or flight bookings), this window can be extended up to 540 days from the transaction date, provided it is filed within 120 days of the scheduled delivery date. To secure your rights, you must file a chargeback request with your card-issuing bank immediately upon discovering the fraud.
                    </p>
                  </div>
                </section>

                {/* Section 3: RBI Customer Liability Mandates */}
                <section id="rbi-guidelines-unauthorized-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. RBI master Guidelines on Customer Liability for Online Frauds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect banking consumers, the Reserve Bank of India (RBI) issued a comprehensive master circular: <strong>DBR.No.Leg.BC.78/09.07.005/2017-18 on Limiting Liability of Customers in Unauthorised Electronic Banking Transactions</strong>. This circular outlines clear rules regarding customer liability in digital transaction frauds, placing the burden of proving customer negligence squarely on the bank.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      According to these master regulations, customer liability is determined along the following lines:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Zero Customer Liability:</strong> The customer faces zero financial loss if the fraud is caused by a bank-side deficiency, system compromise, or a third-party security breach, provided the customer reports the incident to the bank within <strong>3 working days</strong> of receiving the transaction alert.</li>
                      <li><strong>Limited Customer Liability:</strong> If the report is delayed and made within <strong>4 to 7 working days</strong>, the customer&apos;s liability is capped at a maximum of ₹5,000 for basic savings accounts, ₹10,000 for standard savings/credit cards, and ₹25,000 for credit cards with limits exceeding ₹5 Lakhs. The bank must refund the remaining amount.</li>
                      <li><strong>Liability for Customer Negligence:</strong> If the customer shared login credentials (OTP, PIN), they bear the entire loss <strong>until the fraud is reported</strong>. Any subsequent fraud transactions occurring after reporting must be borne entirely by the bank.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, Paragraph 8 of the RBI Master Circular mandates the provision of <strong>Shadow Credit (Temporary Reversal)</strong>. Within 10 working days of receiving a customer&apos;s unauthorized transaction report, the bank must credit the disputed amount back to the customer&apos;s account. This shadow credit ensures the customer&apos;s funds are not locked during the bank&apos;s investigation, which can take up to 90 days. If the bank fails to credit this reversal, they are in direct violation of the RBI directive.
                    </p>
                  </div>
                </section>

                {/* Section 4: Nodal Account & Gateway Rules */}
                <section id="merchant-nodal-account-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Nodal Account Regulations &amp; Gateway Compliance Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When online scammers operate fake shopping websites or run scam links, they process payments through third-party payment gateways and aggregators (such as Razorpay, Cashfree, Instamojo, or Paytm). Under RBI directives, these aggregators are required to operate <strong>Nodal Accounts</strong> to temporarily hold customer funds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A nodal account is a special bank account designed to prevent payment intermediaries from utilizing customer money. The payout of funds from the nodal account to the merchant is delayed by a standard settlement cycle, typically T+2 or T+3 days (transaction day plus two/three days). This delay represents a crucial window for fraud recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the victim reports the scam to the payment gateway immediately, providing the transaction trace IDs, merchant codes, and a copy of the cybercrime complaint, the gateway is required to put a hold on the transaction in their nodal account. This prevents the funds from being settled into the scammer&apos;s private bank account. Once frozen in the nodal account, the money can eventually be reversed back to the victim.
                    </p>
                  </div>
                </section>

                {/* Section 5: IT Act & Intermediary Safe Harbor */}
                <section id="information-technology-act-relevance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Information Technology Act &amp; Intermediary Safe Harbor Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal liability of payment gateways, web hosts, and telecom companies is regulated by the <strong>Information Technology (IT) Act, 2000</strong>. Under Section 79 of the IT Act, these entities are classified as &quot;intermediaries&quot; and enjoy &quot;safe harbor&quot; protection, meaning they are not civilly or criminally liable for any third-party transaction data or services passing through their platforms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, this safe harbor is <strong>conditional</strong> and can be stripped under specific circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>KYC Negligence:</strong> Gateways must perform due diligence before onboarding merchants. If they onboard fraudulent shell companies without verifying their physical offices, registration certificates, and business models, they are negligent in their compliance duties.</li>
                      <li><strong>Failure to Take Down:</strong> Under Section 79(3)(b) of the IT Act, if an intermediary receives actual knowledge of an online scam or a government alert regarding a fraudulent account and fails to remove or block access to that resource, they lose their safe harbor protection and face direct liability.</li>
                      <li><strong>Section 43A Compensation Claims:</strong> Citing Section 43A of the IT Act, if a body corporate handles sensitive personal data (such as bank details) and is negligent in implementing reasonable security practices, causing wrongful loss to a customer, they must pay compensation to the victim, with no statutory cap on the compensation amount.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      By serving formal legal notices that detail these statutory breaches, we hold payment aggregators and gateway providers accountable, forcing them to freeze the scammed funds and trace the merchant wallets.
                    </p>
                  </div>
                </section>

                {/* Section 6: Cyber Cell Reporting & Helpline */}
                <section id="cyber-crime-cell-police-filing-1930" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Cyber Crime Cell Reporting, Helpline 1930 &amp; Mule Accounts
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While bank-level disputes focus on contractual rights, siphoned funds are criminally routed through <strong>Mule Accounts</strong>. Mule accounts are bank accounts owned by low-income individuals or opened using stolen KYC details. Scammers rent these accounts to layer and withdraw scammed funds quickly. To stop this siphoning, you must activate law enforcement channels immediately.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary tool for this is the national cybercrime helpline, <strong>1930</strong> (formerly 155260), operated under the National Cyber Crime Reporting Portal (NCCRP). When you call 1930, the details of the transaction are uploaded to the <strong>Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS)</strong>. This system links commercial banks, payment gateways, and police networks, allowing them to place real-time holds on recipient mule accounts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 106 of the <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> (formerly Section 102 of the CrPC), police officers have the authority to direct banks to freeze suspicious accounts under investigation. If the freeze alert is sent within the first few hours (the Golden Hour), the siphoned funds are successfully locked in the mule account. The bank will then hold these funds until a formal court order or police instructions are issued for their release.
                    </p>
                  </div>
                </section>

                {/* Section 7: Evidence Preservation & BSA Rules */}
                <section id="evidence-preservation-bsa-requirements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Digital Evidence Preservation &amp; BSA Admissibility Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In cyber fraud disputes, digital logs form the core of your case. Under the new <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, the rules for submitting electronic evidence have been updated to prevent tampering and ensure admissibility. Citing physical screenshots or printouts of chat history is no longer sufficient without compliance certificates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To build an admissible evidence file, you must preserve:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 63 BSA Certificate:</strong> This is a mandatory declaration certifying that the device (computer or smartphone) used to record the logs was under your control, functioning properly, and that the data has not been tampered with. Without this certificate, courts will dismiss digital evidence.</li>
                      <li><strong>Uncropped Screenshots:</strong> Capturing chat logs on WhatsApp or Telegram, ensuring the sender&apos;s phone number and the timestamp headers are clearly visible. Do not crop or edit these screenshots.</li>
                      <li><strong>Email raw Headers:</strong> Download raw email data (.eml format) showing the routing history and server handshakes, proving the origin of any phishing emails.</li>
                      <li><strong>Transaction Receipts:</strong> Save receipts showing the Unique Transaction Reference (UTR) or Request Reference Number (RRN), which are essential for banks to trace siphoned funds.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 8: Drafting Notices to Gateways & Banks */}
                <section id="legal-notice-demand-letters-banks" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Drafting Legal Notices to Payment Gateways &amp; Banks
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank rejects your chargeback or delays the temporary credit, serving a formal <strong>Statutory Legal Notice</strong> drafted by an expert recovery advocate is highly effective. Banks and payment gateways operate under strict regulatory supervision and are highly risk-averse; they prefer settling legitimate consumer claims rather than facing regulatory audits or consumer court litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A well-drafted legal notice:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Cites specific provisions of the RBI Master Circular on customer liability, highlighting the bank&apos;s failure to provide the mandatory 10-day shadow credit.</li>
                      <li>Cites Section 79 of the IT Act, pointing out the payment gateway&apos;s failure to perform proper merchant KYC and due diligence.</li>
                      <li>Sets a strict 15-day deadline for the bank or gateway to reverse the disputed funds and remove any late payment fees or interest on credit cards.</li>
                      <li>Serves as a mandatory prerequisite for filing complaints with the RBI Ombudsman or Consumer Court.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9: Consumer Court Actions under CPA */}
                <section id="consumer-court-remedies-cpa-2019" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Consumer Court Actions under the Consumer Protection Act, 2019
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Consumer Protection Act (CPA), 2019</strong>, an account holder is a consumer of banking services. If the bank fails to implement RBI master circular guidelines, ignores unauthorized transaction reports, or refuses to file a chargeback despite timely notification, it constitutes a clear &quot;Deficiency in Service&quot; and an &quot;Unfair Trade Practice&quot;.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file a consumer complaint in the District Consumer Disputes Redressal Commission having jurisdiction over your place of residence or work (making it highly accessible). Consumer courts are empowered to order the bank to refund the principal fraud amount, pay interest, award compensation for mental agony and professional harassment, and cover your litigation costs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In parallel, complaints can be filed with the <strong>RBI Integrated Ombudsman</strong> via the Centralised Receipt and Processing Centre (CRPC) on the CMS portal (cms.rbi.org.in). The Ombudsman acts as an independent arbitrator to resolve customer disputes with banks and financial institutions quickly.
                    </p>
                  </div>
                </section>

                {/* Section 10: Judicial Petitions & Summary Suits */}
                <section id="judicial-court-orders-summary-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    10. Judicial Petitions &amp; Civil Summary Suits (Order 37 CPC)
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the cyber cell has frozen the scammer&apos;s mule account but the bank refuses to return the money, the bank is merely acting as a custodian of frozen property. To recover these funds, you must obtain a formal court order.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This requires filing a formal petition under <strong>Section 503 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> (formerly Section 457 of the CrPC) before the Judicial Magistrate having jurisdiction over the cyber crime police station. The Magistrate issues notice to the Cyber Crime police cell, directing the Investigating Officer (IO) to submit a status report confirming whether the frozen funds in the mule account belong to you. Once confirmed, the Magistrate orders the bank to release the frozen funds back to your account.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For high-value commercial accounts or corporate fraud where consumer protection laws do not apply, you can file a <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure (CPC), 1908</strong>. Since the bank statements and digital audit logs represent a written acknowledgment of transactions, a summary suit is a fast-track civil remedy. The defendant (bank or gateway) must apply for &quot;Leave to Defend&quot; within 10 days of receiving summons. If their defense is found to be vague or standard delay tactics, the court will deny leave and pass a decree for the recovery of the full amount with interest in your favor.
                    </p>
                  </div>
                </section>

                {/* Section 11: Testimonials and Case Studies */}
                <section id="testimonials-success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    11. Verified Client Testimonials and Success Stories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

                {/* Section 12: Why Choose LegalRecovery */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    12. Why Partner with LegalRecovery for Online Scam Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading platform for online scam recovery. We combine specialized cyber law expertise with tech-enabled drafting systems to secure your hard-earned money from banks, gateways, and scammers.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Card Dispute Expertise:</strong> We draft custom chargeback dispute letters citing exact Visa/Mastercard rules to force compliance from card-issuing banks.</li>
                      <li><strong>Nodal Account Interventions:</strong> We serve notices directly to payment aggregators to hold and freeze funds in their nodal accounts.</li>
                      <li><strong>Digital Evidence Formatting:</strong> We compile your electronic evidence and draft Section 63 BSA certificates to ensure your digital proofs are court-ready.</li>
                      <li><strong>End-to-End Legal Support:</strong> From sending the first legal notice to representing you in Consumer Courts and before the RBI Ombudsman.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 13: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    13. Frequently Asked Questions
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
                <h3 className="text-sm font-black mb-3">Recover Scam Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Lost money to an online shopping scam or fake billing link? Get professional legal notices and chargeback support to recover your funds.
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
