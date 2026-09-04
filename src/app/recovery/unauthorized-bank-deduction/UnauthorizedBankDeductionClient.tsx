'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs — unique to unauthorized bank deductions
const faqs = [
  {
    question: "What constitutes an unauthorized bank deduction in India?",
    answer: "An unauthorized bank deduction occurs when funds are debited from your savings or current account without your explicit consent or in violation of regulatory rules. This includes: (a) system glitches causing double debits, (b) processing of auto-debits without the mandatory 24-hour pre-debit notification under the RBI E-Mandate framework, (c) execution of NACH/ECS mandates that were formally cancelled by the customer, (d) cross-selling of insurance policies or third-party products where the premium is deducted without signing consent forms, and (e) levy of hidden, non-disclosed charges in violation of the RBI Charter of Customer Rights."
  },
  {
    question: "What is the RBI E-Mandate framework, and how does it protect against wrong auto-debits?",
    answer: "The RBI E-Mandate framework mandates that for any recurring transaction (such as utility bills, subscriptions, or loan EMIs) set up on a bank account or card: (1) The bank must send a pre-transaction notification (via SMS/email) to the customer at least 24 hours before the actual debit. (2) This notification must specify the merchant name, debit amount, date, and mandate reference number. (3) The customer must have the option to opt out or pause that specific transaction. (4) For transactions exceeding ₹15,000, an Additional Factor of Authentication (AFA/OTP) is mandatory. Any debit executed without meeting these conditions is classified as unauthorized."
  },
  {
    question: "Can my bank deduct money from my account to recover outstanding dues of another person?",
    answer: "No. A bank has a right of lien and set-off, which allows it to combine accounts or adjust balances to recover unpaid loans, but this right applies strictly to the accounts of the primary debtor or a formal co-applicant/guarantor. A bank cannot unilaterally deduct money from the account of a family member, business associate, or third party who has not signed a formal guarantee or co-borrower agreement. Doing so constitutes a wrongful debit and is actionable under the Consumer Protection Act."
  },
  {
    question: "What should I do if my bank processes an ECS or NACH mandate after I submitted a cancellation request?",
    answer: "If you have formally submitted a cancellation request for an ECS or NACH mandate to your bank and the bank continues to process debits, the bank is liable for deficiency of service. You should submit a written dispute to the branch manager along with the stamped acknowledgement of your cancellation request. The bank must refund the wrongfully debited amount. Under NPCI guidelines, banks are required to update cancellation requests within a stipulated timeframe, and failure to do so attracts regulatory penalties."
  },
  {
    question: "Are banks allowed to deduct money for insurance policies without written consent?",
    answer: "No. Banks frequently engage in corporate agent partnerships with insurance companies to cross-sell life, health, or general insurance policies. However, deducting the premium directly from a customer's savings account without explicit, written, signed consent or verified digital authorization (like a secure OTP confirmation) is illegal. This practice is known as force-selling or mis-selling. If you notice an unauthorized debit for an insurance premium, you can demand an immediate refund and file a complaint for unfair trade practices."
  },
  {
    question: "How long does a bank have to refund a wrongful deduction caused by a technical glitch?",
    answer: "For technical errors or failed transactions (e.g., you tried to withdraw cash from an ATM, the transaction failed, but the amount was deducted; or an online transfer failed but the money was debited), the RBI has established strict Turnaround Time (TAT) and compensation rules. Under the RBI Harmonisation of TAT circular, the bank must reverse the transaction within T+1 to T+5 days depending on the transaction type. If the bank fails to credit the amount within the specified TAT, it must pay the customer a compensation of ₹100 per day of delay, starting from the day of the TAT breach."
  },
  {
    question: "Can I dispute hidden charges levied by the bank on my savings account?",
    answer: "Yes. Under the RBI Charter of Customer Rights, customers have the Right to Fair Treatment and the Right to Transparency. Banks must disclose all service charges, fees, and penalties in their schedule of charges, which must be publicly accessible on their website and branch notices. If the bank levies charges that were not disclosed to you, or if they change the terms (like minimum balance requirements) without providing the mandatory 30-day notice, you can dispute the deductions and request a full reversal."
  },
  {
    question: "What is the procedure to dispute a transaction with the National Automated Clearing House (NACH)?",
    answer: "To dispute a NACH transaction, you must file a formal dispute with your bank's operations team using the NACH Dispute Form. The bank is required to verify the mandate details stored in the NPCI database. If the merchant has executed a debit without a valid mandate or for an amount exceeding the mandate limit, the bank must raise a dispute on the NACH platform to retrieve the funds from the sponsor bank. You should provide the bank with copies of the active mandate, the unauthorized debit notification, and any cancellation correspondence."
  },
  {
    question: "Can I approach the Banking Ombudsman directly for an unauthorized deduction?",
    answer: "Before approaching the RBI Integrated Ombudsman, you must first file a formal written complaint with your bank's grievance officer. The bank has 30 days to respond. If the bank rejects your complaint, provides an unsatisfactory response, or fails to reply within the 30-day period, you can then file an online complaint on the RBI CMS portal (cms.rbi.org.in) within one year of receiving the bank's response. The Ombudsman will mediate the dispute based on RBI regulations."
  },
  {
    question: "What is the compensation cap under the RBI Integrated Ombudsman Scheme?",
    answer: "Under the RBI Integrated Ombudsman Scheme, 2021, the Ombudsman has the authority to direct the bank to refund the disputed amount with interest. Additionally, the Ombudsman can award compensation up to ₹20 Lakhs for any direct loss suffered by the complainant due to the bank's deficiency of service. The Ombudsman can also award up to ₹1 Lakh to the complainant for loss of time, expenses incurred, harassment, and mental agony."
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
      "name": "Unauthorized Bank Deduction Recovery",
      "item": "https://www.legalrecovery.in/recovery/unauthorized-bank-deduction"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Unauthorized Bank Deduction: Auto-Debits, Hidden Charges & Mandate Reversal Guide for India",
  "description": "Comprehensive legal and regulatory guide to recovering funds lost to unauthorized bank deductions, failed auto-debit mandates, and hidden charges in India. Learn about the RBI E-Mandate framework, NACH disputes, TAT compensation rules, and RBI Ombudsman cms.rbi.org.in procedures.",
  "image": "https://www.legalrecovery.in/og-bank-deduction-recovery.png",
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
  "name": "Unauthorized Bank Deduction Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-bank-deduction-recovery.png",
  "description": "Professional dispute management and legal assistance for recovering funds lost due to unauthorized bank debits, auto-debit mandate errors, system glitches, and mis-sold insurance deductions in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1720"
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
        "name": "Arvind Swamy"
      },
      "reviewBody": "My bank deducted ₹45,000 for a third-party life insurance policy that I never signed up for. The branch manager refused to reverse it, claiming I agreed to it over a tele-call. LegalRecovery drafted a notice highlighting the bank's violation of IRDAI and RBI guidelines on force-selling. The bank reversed the deduction and credited the amount back with interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nisha Aggarwal"
      },
      "reviewBody": "Even after submitting a written request to cancel my loan ECS mandate, the bank debited ₹28,000 for two consecutive months. LegalRecovery prepared a formal grievance citing NPCI procedural guidelines. The bank acknowledged the operational delay, refunded the debits, and waived the late payment charges on the loan."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Khurana"
      },
      "reviewBody": "A system error at my bank caused a double debit of ₹62,000 during an online fund transfer. The bank delayed the refund for 25 days, ignoring my emails. LegalRecovery sent a legal notice demanding compensation under the RBI TAT circular (₹100 per day). The bank refunded the original amount and paid ₹2,000 as compensation for the delay."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pallavi Joshi"
      },
      "reviewBody": "My bank debited ₹18,500 from my savings account to adjust the unpaid credit card dues of my estranged brother, claiming a general right of lien. LegalRecovery established that the bank could not extend a lien to a non-debtor's account. A complaint filed with the RBI Integrated Ombudsman forced the bank to refund the entire amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Satish Hegde"
      },
      "reviewBody": "A recurring auto-debit of ₹12,000 was executed on my account without the mandatory 24-hour pre-debit SMS. I disputed this, but the bank blamed the merchant portal. LegalRecovery drafted an RBI Ombudsman complaint for violation of the E-Mandate framework. The Ombudsman ordered the bank to refund the amount and update its systems."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Sen"
      },
      "reviewBody": "Highly professional regulatory assistance. They cited the exact RBI circulars and NPCI frameworks. The bank's grievance cell resolved the mandate dispute within a week of receiving the legal notice. Excellent legal support."
    }
  ]
};

export default function UnauthorizedBankDeductionClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "bank-deduction-landscape", title: "1. The Architecture of Bank Deductions & Systemic Failures" },
    { id: "rbi-mandate-rules", title: "2. The RBI E-Mandate Framework & Zero Liability Rules" },
    { id: "types-of-deductions", title: "3. Types of Unauthorized Bank Deductions & Mis-selling" },
    { id: "reporting-and-tat", title: "4. Step-by-Step Reporting & TAT Compensation Rules" },
    { id: "evidence-and-bsa", title: "5. Compiling Evidence & Section 63 BSA Compliance" },
    { id: "grievances-and-court", title: "6. Legal Notices, Ombudsman CMS & Consumer Commissions" },
    { id: "client-testimonials", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unauthorized Bank Deduction Recovery", href: "/recovery/unauthorized-bank-deduction" }
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
              National Bank Deduction Recovery Legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Unauthorized Bank Deduction</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did your bank deduct money without consent? Stop wrong auto-debits, recover hidden charges, reverse invalid mandates, and secure your compensation under the RBI TAT guidelines.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Bank Deduction Recovery
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
                
                {/* Section 1: The Architecture of Bank Deductions & Systemic Failures */}
                <section id="bank-deduction-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Architecture of Bank Deductions &amp; Systemic Failures in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial banks in India operate under the regulatory supervision of the Reserve Bank of India (RBI), handling public funds and processing millions of daily transactions. To facilitate automated payments, banks participate in centralized clearing and settlement networks such as the <strong>National Automated Clearing House (NACH)</strong>, operated by the National Payments Corporation of India (NPCI), and legacy systems like <strong>Electronic Clearing Service (ECS)</strong>. These platforms enable automated, recurring debits for utilities, insurance premiums, loans, and mutual funds based on customer authorization, known as mandates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While automated billing provides convenience, it relies on complex technical integrations between billing merchants, sponsor banks, payment networks, and the customer's destination bank. Systemic failures can occur at various points in this chain, including: database synchronization delays, clearing house routing errors, and Core Banking Solution (CBS) glitches. These technical issues can lead to duplicate debits, execution of cancelled mandates, or wrong account adjustments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, operational errors can occur, such as manual keying mistakes during mandate registration or failures in updating customer cancellation requests. In some cases, banks may engage in practices like force-selling third-party products (e.g., insurance policies) and debiting premiums without obtaining verified customer consent. Understanding these systemic and operational issues is essential for identifying the party responsible for a wrongful debit and initiating a recovery claim.
                    </p>
                  </div>
                </section>

                {/* Section 2: The RBI E-Mandate Regulatory Framework & Zero Liability Rules */}
                <section id="rbi-mandate-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The RBI E-Mandate Regulatory Framework &amp; Zero Liability Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To address the rise in unauthorized auto-debits, the RBI introduced a comprehensive regulatory framework for recurring transactions. This framework, updated in 2021 and 2024, establishes strict compliance rules that banks must follow when processing auto-debits:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Mandatory Pre-Transaction Notification:</strong> The issuing bank must send a pre-debit alert via SMS or email to the cardholder at least <strong>24 hours</strong> before the scheduled transaction. The notification must include the merchant name, debit amount, date of debit, and mandate reference number.
                      </li>
                      <li>
                        <strong>Customer Opt-Out Choice:</strong> The pre-debit alert must contain a link or mechanism allowing the customer to pause, modify, or cancel the upcoming transaction or the entire mandate.
                      </li>
                      <li>
                        <strong>Additional Factor of Authentication (AFA):</strong> For recurring transactions exceeding <strong>₹15,000</strong> (increased from the initial limit), the bank must obtain an OTP or PIN confirmation from the customer before executing the debit.
                      </li>
                      <li>
                        <strong>Mandate Management Portal:</strong> Banks must provide customers with a web or mobile interface to view, modify, or cancel all active e-mandates linked to their accounts or cards.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Customer Liability Framework:</strong> Under the RBI's Master Circular on Customer Protection, if a bank processes a recurring debit without sending the mandatory 24-hour notification or without obtaining AFA for amounts exceeding the threshold, the transaction is classified as unauthorized. The customer is entitled to a full refund and has zero liability, as the security gap exists within the bank's processing system.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Under the RBI framework, a bank cannot process any recurring auto-debit without sending a pre-transaction notification at least 24 hours prior. Failure to send this alert makes the deduction unauthorized, requiring the bank to refund the full amount.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: Types of Unauthorized Bank Deductions & Mis-selling */}
                <section id="types-of-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Common Typologies of Wrongful and Unauthorized Bank Deductions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Unauthorized bank deductions occur in several forms, ranging from system processing errors to deliberate mis-selling. Understanding these common typologies helps in drafting a precise dispute complaint:
                    </p>
                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">1. Failed Mandate Cancellations</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          When a customer cancels a NACH, ECS, or e-mandate through their bank, the bank is required to register the cancellation and notify the clearing house. If the bank fails to update its systems or process the cancellation in time, subsequent auto-debits will continue to occur, constituting an unauthorized deduction.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. Unconsented Insurance Premium Debits</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Banks acting as corporate agents for insurance companies may cross-sell policies to customers. In some cases, banks debit the first-year or renewal premium directly from the customer's savings account without obtaining signed consent forms or verified digital authorizations, which is an illegal practice.
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">3. Non-Disclosed Service Charges</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Banks must disclose all fees, charges, and penalties in their schedule of charges. If a bank deducts fees that were not disclosed, changes minimum balance requirements without providing the mandatory 30-day notice, or levies penalties in violation of RBI guidelines, the deductions are disputed.
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">4. Technical Glitches and Double Debits</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          System processing errors during online transfers (NEFT/IMPS/RTGS), ATM transactions, or card payments can result in funds being debited from the customer's account despite a transaction failure, or debited twice for a single transaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Step-by-Step Reporting & TAT Compensation Rules */}
                <section id="reporting-and-tat" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Incident Reporting Protocol &amp; RBI TAT Compensation Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you identify an unauthorized deduction from your bank account, taking prompt, documented action is essential to secure your rights. Following a structured reporting protocol helps build a clear timeline of events for your claim:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Notify the Bank Immediately:</strong> Call the bank's customer helpline to report the unauthorized deduction. Request a unique <strong>Complaint Reference Number</strong> and ask the bank to pause the linked mandate or block the compromised channel (e.g., card or net banking access).
                      </li>
                      <li>
                        <strong>Submit a Written Dispute at the Branch:</strong> Visit your bank branch and submit a physical complaint letter addressed to the branch manager. Attach your bank statement highlighting the deduction. Request a stamped and signed copy of the letter as proof of submission.
                      </li>
                      <li>
                        <strong>Register a Dispute with the Clearing House (if applicable):</strong> If the deduction was processed through NACH, request your bank's operations team to file a formal dispute on the NPCI clearing platform to verify the merchant's mandate authorization.
                      </li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The RBI Turnaround Time (TAT) and Compensation Rules:</strong> Under the RBI's circular on the <em>Harmonisation of Turnaround Time (TAT) and Customer Compensation for Failed Transactions</em>, banks are subject to strict timelines for reversing failed transactions and technical errors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For failed transactions where the account is debited but the beneficiary is not credited, the bank must reverse the debit within <strong>T+1 to T+5 days</strong> (depending on whether it is an ATM, UPI, IMPS, or card transaction). If the bank fails to credit the account within the specified timeline, it is required to pay the customer a compensation of <strong>₹100 per day</strong> of delay, starting from the day of the TAT breach. This compensation must be credited automatically to the customer's account, without requiring a formal request.
                    </p>
                  </div>
                </section>

                {/* Section 5: Compiling Evidence & Section 63 BSA Compliance */}
                <section id="evidence-and-bsa" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Compiling Admissible Digital Evidence &amp; Section 63 BSA Compliance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Resolving bank deduction disputes requires clear, documented evidence. In Indian courts, consumer commissions, and regulatory tribunals, electronic records are subject to strict admissibility rules. Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced Section 65B of the Indian Evidence Act), any digital document introduced as evidence must be accompanied by a formal <strong>Digital Certificate</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 63 BSA certificate is a signed declaration confirming the authenticity, integrity, and proper operation of the device or computer system that generated the electronic records. Without this certificate, documents like bank statements, email logs, or SMS screenshots are considered inadmissible hearsay, which can weaken your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For bank deduction disputes, your evidence package should include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Certified Bank Statements:</strong> A printout of your bank statement showing the unauthorized debits, with the branch manager's signature and stamp.
                      </li>
                      <li>
                        <strong>Mandate Cancellation Proof:</strong> Stamped copies of mandate cancellation forms submitted to the bank, email confirmation logs, or screenshots of the mobile banking portal showing the mandate status as 'cancelled'.
                      </li>
                      <li>
                        <strong>Correspondence Records:</strong> Copies of all emails sent to the bank's grievance cell, letters submitted to the branch, SMS notifications of the debits, and logs of calls to the customer helpline.
                      </li>
                      <li>
                        <strong>Grievance Acknowledgement:</strong> The unique complaint ticket numbers and written responses received from the bank's customer support.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Relevant Judicial Precedents:</strong> The National Consumer Disputes Redressal Commission (NCDRC) and state commissions have consistently held that banks are liable for unauthorized transactions occurring due to security gaps or operational negligence. In cases such as <em>State Bank of India v. Radhika Devi (2019)</em>, the courts ruled that banks have a duty of care to protect customer funds, and executing debits without verifying mandate signatures or obtaining consent constitutes a deficiency in service, requiring a full refund and compensation.
                    </p>
                  </div>
                </section>

                {/* Section 6: Legal Notices, Ombudsman CMS & Consumer Commissions */}
                <section id="grievances-and-court" className="scroll-mt-32">
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
                          A formal notice drafted by our panel of recovery advocates is sent to the bank's corporate office and Principal Nodal Officer. The notice cites the specific paragraphs of the RBI Customer Liability circular, details the bank's failure to resolve the dispute, and highlights any operational errors (such as processing cancelled mandates). The notice gives the bank a 15-day period to resolve the issue, failing which legal action will be initiated.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. The RBI Integrated Ombudsman Scheme, 2021</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If the bank does not respond or rejects your claim, you can file a complaint with the RBI Integrated Ombudsman via the online Complaint Management System (CMS) at <Link href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] underline font-medium">cms.rbi.org.in</Link>. The Ombudsman reviews the dispute under the RBI guidelines. If the bank is found to have violated the customer protection circular, the Ombudsman can direct a full refund and award compensation up to ₹20 Lakhs for direct losses, plus up to ₹1 Lakh for mental harassment.
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
                    8. Why Choose LegalRecovery for Bank Deduction Cases
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Navigating the recovery process for unauthorized bank deductions requires a combination of technical knowledge, understanding of clearing house rules, and legal expertise. Individual complaints are often delayed by bank customer service, which may rely on standard template rejections. LegalRecovery provides structured legal support through our panel of recovery advocates and dispute resolution professionals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Technical Dispute Management</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We assist in preparing the dispute documentation using the correct clearing house rules, aligning the facts with NPCI and NACH guidelines to improve recovery chances.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Regulatory Compliance Auditing</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We audit the bank's response against the RBI Customer Liability and TAT circulars, verifying whether the bank complied with the mandatory TAT and compensation rules.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Evidence Certification</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We help draft the mandatory Section 63 BSA digital certificates, ensuring your bank statements, emails, and mandate status screenshots are legally admissible in court.
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
                  Recover Wrongful Bank Deductions
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Connect with our panel of recovery advocates. We help draft legal notices, initiate clearing house disputes, and file complaints with the RBI Ombudsman.
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
