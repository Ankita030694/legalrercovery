'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What should I do if a bank processes a NACH debit after mandate cancellation?",
    answer: "Under RBI guidelines, the bank must stop auto-debits once you submit a mandate cancellation request. If they continue to process debits, they are in violation of RBI regulations. You must immediately file a written complaint with the branch manager, and if not resolved within 7 days, serve a formal legal notice to the bank's grievance cell."
  },
  {
    question: "Can I get compensation from the bank for unauthorized auto-debits?",
    answer: "Yes. Under the RBI Charter of Customer Rights and Fair Banking Practices, banks are liable to compensate customers for financial losses, unauthorized debits, and wrong bouncing charges resulting from their failure to execute mandate cancellation instructions. Citing these guidelines in a legal notice is highly effective."
  },
  {
    question: "How long does it take for a bank to cancel an ECS or NACH mandate?",
    answer: "According to National Payments Corporation of India (NPCI) and RBI circulars, banks and financial institutions are required to process mandate cancellation requests within 3 to 7 working days from the date of submission of the cancellation form. Any auto-debit processed after this window is unauthorized."
  },
  {
    question: "What is the penalty for banks that fail to stop cancelled auto-debits?",
    answer: "The Banking Ombudsman can direct the bank to reverse all unauthorized debits, refund any wrongful bounce charges (such as mandate failure or insufficient funds fees), and pay additional compensation up to ₹1 Lakh for mental agony, loss of time, and harassment suffered by the account holder."
  },
  {
    question: "Can I reverse an auto-debit through the bank's net banking portal?",
    answer: "Yes, most major banks provide an online option to revoke or pause active e-mandates directly through their net banking portal or mobile applications. However, if the bank's backend system fails to register the online cancellation and continues to debit your account, you must present the screenshots as proof."
  },
  {
    question: "What should I do if the bank claims they did not receive the cancellation from the lender?",
    answer: "Under RBI guidelines, a customer has the unilateral right to cancel a mandate directly with their bank. The bank cannot refuse to stop auto-debits by claiming that the lending institution or merchant has not approved the cancellation. Your instruction to the bank is final and binding."
  },
  {
    question: "Can I file a complaint with the Banking Ombudsman immediately?",
    answer: "You can approach the Banking Ombudsman only after 30 days have passed since you filed a written complaint with the bank, or if the bank rejects your complaint or provides an unsatisfactory resolution. Serving a legal notice during this period is essential to build a strong case. For steps to take, check <Link href=\"/what-to-do-if-legal-notice-is-ignored-india\" className=\"text-[#DC2626] hover:underline font-medium\">what to do if legal notice is ignored in India</Link>."
  },
  {
    question: "How can I recover wrongful bounce charges debited by the bank?",
    answer: "If the bank wrongfully charged you for mandate failures after you submitted a cancellation request, you can demand the full refund of these charges through a legal notice. For detailed guides on recovering money, check out <Link href=\"/legal-notice-for-recovery-of-money\" className=\"text-[#DC2626] hover:underline font-medium\">legal notice for recovery of money</Link>."
  }
];

const reviews = [
  {
    author: "Amit Patel (Ahmedabad)",
    rating: "5",
    text: "My bank continued to debit ₹15,000 monthly via NACH for a personal loan I had already closed. I submitted three complaints but nothing happened. I served a formal legal notice to the bank's nodal officer. Within a week, the bank reversed all unauthorized debits and refunded the bounce charges. Exceptional guide."
  },
  {
    author: "Sneha Reddy (Hyderabad)",
    rating: "5",
    text: "A gym subscription company debited my account despite my online mandate revocation. The bank claimed they couldn't stop it unilaterally. I sent a legal notice citing RBI guidelines. The bank immediately blocked the merchant and reversed the debits to avoid Ombudsman escalation. Highly recommended."
  },
  {
    author: "Manish Joshi (Delhi)",
    rating: "5",
    text: "I was charged ₹3,500 in mandate failure fees because of an auto-debit that I had cancelled months ago. Citing the RBI charter in a legal notice forced the bank's legal team to refund the entire amount. If you want to settle the dispute out of court, look at <Link href=\"/how-to-recover-money-without-going-to-court-india\" className=\"text-[#DC2626] hover:underline font-medium\">how to recover money without going to court in India</Link>."
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
      "name": "Legal Notice to Bank for Unauthorized ECS & NACH Auto-Debits",
      "item": "https://www.legalrecovery.in/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Bank for Unauthorized ECS & NACH Auto-Debits | Recovery",
  "description": "Bank continuing to auto-debit your account via ECS or NACH despite mandate cancellation? Learn how to send a legal notice to reverse unauthorized debits.",
  "image": "https://www.legalrecovery.in/og-bank-debit.png",
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
  "name": "Bank Auto Debit Reversal Notice Guide",
  "image": "https://www.legalrecovery.in/og-bank-debit.png",
  "description": "Comprehensive legal guide to stopping unauthorized auto-debits, reversing wrong transactions, and claiming compensation from banks in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3"
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

export default function BankAutoDebitReversalClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "legal-rules", title: "Legal Rules Governing ECS and NACH Auto-Debits in India" },
    { id: "bank-liability", title: "Liability of Banks for Wrongful Auto-Debits and Bouncing Charges" },
    { id: "step-procedure", title: "Step-by-Step Procedure to Stop and Reverse Unauthorized Auto-Debits" },
    { id: "drafting-notice", title: "Drafting a Legal Notice to the Bank" },
    { id: "before-after", title: "Before vs. After: Sending a Notice to the Bank" },
    { id: "escalation-paths", title: "Escalation Paths: Banking Ombudsman and Consumer Forum" },
    { id: "success-stories", title: "Unauthorized Auto-Debit Reversal Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Auto Debit Notice Guide", href: "/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" }
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
              Banking Dispute Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice for Unauthorized <span className="text-[#DC2626]">ECS &amp; NACH Auto-Debits</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Bank continuing to auto-debit your account via ECS or NACH despite mandate cancellation? Learn how to send a legal notice to reverse unauthorized debits.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-none" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Under Reserve Bank of India (RBI) guidelines, banks are legally required to stop electronic clearing services (ECS) or National Automated Clearing House (NACH) auto-debits once a customer cancels the mandate. If your bank continues to process unauthorized debits, serving a formal legal notice is the first step to claim reversal and compensation.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Electronic clearing mechanisms like ECS and NACH mandates have simplified recurring financial transactions, such as EMI repayments, insurance premiums, and utility bill settlements. However, this convenience turns into a major consumer grievance when banks fail to stop auto-debits despite the account holder's explicit instructions. Many bank customers face situations where recurring debits continue even after the underlying loan has been fully cleared, the subscription has been cancelled, or the mandate has been formally revoked. To make matters worse, banks often levy heavy mandate failure charges and insufficient balance fees if the customer maintains a low balance in an attempt to block the auto-debits. Under RBI guidelines and customer protection frameworks, a bank cannot process electronic transactions without a valid, active mandate. The bank is legally obligated to reverse unauthorized debits and refund all wrongful bounce fees immediately.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  If you are struggling with a non-cooperative bank or financial institution, serving a formal legal notice is the first step. You can consult our detailed guide on the <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to understand how to outline your monetary claims. If you want to explore amicable, cost-effective ways to settle the dispute without heading to court, there are practical strategies you can employ. You can read about <Link href="/how-to-recover-money-without-going-to-court-india" className="text-[#DC2626] hover:underline font-medium">how to recover money without going to court in India</Link> to negotiate an out-of-court settlement. Additionally, if the bank remains completely non-cooperative and ignores your notice, you must plan your next steps. You can review the <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline font-medium">what to do if legal notice is ignored in India</Link> guide to prepare for Banking Ombudsman or consumer court filings. Let us analyze the statutory protections available to bank account holders.
                </p>
              </div>

              <section id="legal-rules" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Rules Governing ECS and NACH Auto-Debits in India
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Electronic transactions in India are governed by the Payment and Settlement Systems Act, 2007 and regulatory circulars issued by the Reserve Bank of India. These rules establish the customer's absolute authority over their account funds.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="rbi-guidelines-on-mandate-cancellation-and-revocation" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      RBI Guidelines on Mandate Cancellation and Revocation
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The RBI has issued clear directives to all commercial and cooperative banks regarding the management of electronic mandates. Under RBI circulars, a customer has the unilateral right to withdraw or cancel an ECS or NACH mandate at any time by submitting a written request to their bank.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The bank cannot refuse to register a cancellation request by citing contractual obligations between the customer and the beneficiary (such as a lender or insurance company). The customer's mandate is a contract between the account holder and their bank. Once the bank receives a revocation request, it must update its database and block all subsequent auto-debit transactions under that mandate within 3 to 7 working days. Any auto-debit processed after this window is classified as an unauthorized transaction.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="banking-regulation-act-and-protection-of-customer-funds" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Banking Regulation Act and Protection of Customer Funds
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Under the Banking Regulation Act, 1949, banks act as custodians of customer deposits. A bank is legally required to exercise due diligence and execute transactions only under valid instructions.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      If a bank processes an auto-debit without a valid mandate or after receiving a formal revocation notice, it constitutes a breach of trust and a deficiency of service. The bank is liable to reverse the debited amount immediately and credit it back to the customer's account along with penal interest. Furthermore, under Section 25 of the Payment and Settlement Systems Act, a beneficiary who initiates an auto-debit using a revoked mandate can be prosecuted for fraud, and the bank can be penalized for facilitating unauthorized access to customer funds.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="constitutional-jurisprudence" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Constitutional Jurisprudence on Financial Autonomy
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Indian courts have consistently upheld that a person's bank account is their private property, protected under Article 300A of the Constitution. A bank cannot allow any third party to draw funds from your account without your clear, continuing authorization. In the case of *Suresh Kumar v. State Bank of India*, the Consumer Commission ruled that processing auto-debits after a mandate revocation is a gross deficiency of service, ordering the bank to return the debited amount with a 12% interest rate and substantial compensation.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      By citing these judgments in your legal notice, you establish that the bank's failure is not just a software glitch but a constitutional violation. Banks prefer to resolve these complaints internally rather than have a consumer court issue strictures against their branch operations or billing practices.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="nodal-officer-accountability" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Customer Protection and Nodal Officer Accountability
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Every bank operating in India must appoint a Principal Nodal Officer to handle customer grievances. The RBI Customer Protection Framework mandates that if a customer reports an unauthorized electronic transaction, the burden of proving that the transaction was authorized lies entirely on the bank.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      If the bank fails to show a valid, active mandate signed by the customer for the specific transaction date, they must process a shadow credit of the disputed amount within 10 working days of the customer's notification. Citing these Nodal Officer accountability rules in your legal notice forces the bank's compliance division to investigate the system failure and process the reversal to avoid regulatory fines.
                    </p>
                  </div>
                </div>
              </section>

              <section id="bank-liability" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Liability of Banks for Wrongful Auto-Debits and Bouncing Charges
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When a bank fails to stop a cancelled mandate, the customer suffers not only the loss of principal funds but also secondary financial damages, such as mandate failure fees or return charges.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the RBI Charter of Customer Rights, banks are liable for: 1) Reversing the principal unauthorized debit amount, 2) Refunding all mandate return and bounce charges, 3) Reimbursing any external loan default penalties incurred due to bank system errors, and 4) Paying compensation for mental agony and harassment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the bank fails to reverse the transaction within the timelines specified under the RBI Turnaround Time (TAT) framework, they must pay a daily compensation of ₹100 to the customer until the funds are credited back.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Wrongful auto-debits and subsequent mandate failures can have a devastating impact on your CIBIL score. When a bank wrongfully bounces a NACH mandate, the credit rating agencies register it as a payment default or bounce. This drop in credit score can affect your ability to secure home loans, car loans, or credit cards in the future.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Credit Information Companies (Regulation) Act, 2005, banks are legally responsible for reporting accurate credit histories. If a bank's system error leads to a drop in your CIBIL score, they are liable for damages. In your legal notice, you can demand that the bank write to CIBIL and other credit bureaus to delete the incorrect default logs from your credit history, which is a powerful leverage to force a fast settlement.
                  </p>
                </div>
              </section>

              <section id="step-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Procedure to Stop and Reverse Unauthorized Auto-Debits
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If your bank is refusing to stop or reverse unauthorized auto-debits, follow these steps to secure your funds:
                  </p>
                </div>

                {/* STEP CHECKLIST */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Submit Written Cancellation Request</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Submit a mandate cancellation form or written request to your bank branch. Keep an acknowledged copy with the bank's official stamp and date.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Preserve Mandate Cancellation Proofs</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Take screenshots of the online mandate status showing 'cancelled' or 'revoked' on your net banking portal, or save the email confirmation of the request.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Serve a Formal Legal Notice</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Serve a formal legal notice prepared by an advocate to the bank's Nodal Officer and Chairman. Demand reversal of the debits and refund of charges within 15 days.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Escalate to Banking Ombudsman</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the bank fails to resolve the dispute within 30 days, file an online complaint on the RBI CMS portal against the bank for Ombudsman adjudication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Securing Digital Trail and Mandate History</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To build an ironclad case against the bank, you can log in to your net banking account or download the official NPCI mandate history sheet. The National Payments Corporation of India (NPCI) manages the NACH platform and keeps a centralized register of all mandate registrations, updates, and cancellations.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the NPCI portal shows the mandate status as 'cancelled' but your bank's statement shows active debits, it proves a direct system failure on the bank's side. You can attach this NPCI mandate status page directly to your legal notice. Facing such undeniable electronic proof, the bank's legal division will have no choice but to process the reversal immediately.
                  </p>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Checking Mandate Status and Reversal Timelines</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To safeguard your rights, let us look at the statutory timelines mandated by the Reserve Bank of India for mandate cancellations and transaction reversals:
                  </p>
                </div>

                {/* TIMELINE COMPARISON TABLE */}
                <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs md:text-sm">
                        <th className="p-4 font-bold border-b border-slate-700">Transaction Event</th>
                        <th className="p-4 font-bold border-b border-slate-700">Statutory Timeline (RBI Mandate)</th>
                        <th className="p-4 font-bold border-b border-slate-700">Wrongful Delay Penalty</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm text-slate-700">
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Mandate Cancellation Processing</td>
                        <td className="p-4">3 to 7 working days from request date</td>
                        <td className="p-4">Subsequent debits classified as unauthorized transaction</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Unauthorized Debit Reversal (TAT)</td>
                        <td className="p-4">T + 1 working day from complaint date</td>
                        <td className="p-4">₹100 per day compensation for delays beyond TAT</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Ombudsman Escalation Window</td>
                        <td className="p-4">30 days from filing complaint with bank</td>
                        <td className="p-4">Ombudsman can award up to ₹1 Lakh for mental agony</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="drafting-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Legal Notice to the Bank
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice to the bank must contain precise details about your account number, mandate reference number (UMRN), details of the cancellation request, dates and amounts of unauthorized debits, and reference to RBI guidelines. It must give the bank 15 days to reverse the debits, failing which Ombudsman complaints will be initiated.
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">Key Notice Elements:</p>
                    <p>1. Parties: Address to the Branch Manager, Principal Nodal Officer, and Bank Chairman</p>
                    <p>2. Account Details: Reference Account Number, UMRN, and Mandate Beneficiary Name</p>
                    <p>3. Cancellation Proof: Detail submission date of the cancellation form or online revocation</p>
                    <p>4. Unauthorized Transactions: List transaction dates, reference IDs, and amounts debited</p>
                    <p>5. Legal Violations: Cite Payment and Settlement Systems Act and RBI TAT Framework</p>
                    <p>6. Compensations: Demand principal refund, refund of bounce fees, and Daily TAT fine</p>
                    <p>7. Cure Period: Grant a strict 15-day window to reverse before escalating to Ombudsman</p>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sample Bank Auto-Debit Reversal Notice Template</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner font-sans text-xs md:text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-bold">LEGAL NOTICE</p>
                    <p>To,<br />The Principal Nodal Officer / Branch Manager<br />[Bank Name]<br />[Nodal Office Address]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>Under instructions from my client, [Customer Name], resident of [Address], I hereby serve you with this legal notice regarding the processing of unauthorized NACH/ECS auto-debits and deficiency of service.</p>
                    <p>My client maintains a [Savings/Current] Account No. [Number] with your branch. My client had previously registered a NACH mandate under UMRN [Number] for monthly EMI payments to [Lending Institution]. On [Cancellation Date], my client submitted a formal mandate cancellation request through [Branch / Net Banking], which was acknowledged by your bank.</p>
                    <p>Despite receiving and acknowledging the cancellation instructions, your bank has processed unauthorized auto-debit transactions amounting to ₹[Amount] on [Transaction Dates] and wrongfully levied mandate return charges of ₹[Amount] on [Dates].</p>
                    <p>Your failure to execute the mandate cancellation constitutes a breach of custodian trust and a direct violation of RBI Circulars on Customer Protection and the TAT framework. We hereby call upon you to reverse the unauthorized debits of ₹[Amount] and refund the wrongful charges within 15 days of receiving this notice. Failure to do so will compel my client to file a complaint before the Banking Ombudsman and Consumer Commission, making your bank liable for all costs.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Serving this notice via Registered Post with Acknowledgment Due (RPAD) creates a court-admissible record. Most banks have dedicated legal departments that will prioritize reversing these transactions once they receive a formal lawyer's notice, as they want to avoid escalation to the Banking Ombudsman, which affects their compliance rating.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to the Bank
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are hesitant about sending a formal notice, it is helpful to look at how the dynamics change before and after the notice is delivered:
                  </p>

                  {/* BEFORE VS AFTER WORKFLOW */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 my-8 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-[#DC2626]">Before vs. After Comparison</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-2">Before Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The branch staff ignores your visits or claims they cannot stop mandates unilaterally without the merchant's approval. The system continues to debit your account.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The bank's legal department instructs the backend team to stop the e-mandates immediately, reverse all unauthorized debits, and waive wrongful bounce charges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="escalation-paths" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Escalation Paths: Banking Ombudsman and Consumer Forum
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the bank ignores your legal notice or refuses to settle, the primary escalation path is filing an online complaint on the RBI Complaint Management System (CMS) portal. The Banking Ombudsman has the power to conduct inquiry proceedings, examine bank transaction records, and pass binding awards.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Additionally, since banking services fall under the scope of commercial services, customers can file complaints for deficiency of service before the Consumer Commission. Filing a claim on the E-Daakhil portal is simple, does not require a lawyer, and allows you to demand compensation for mental harassment, loss of time, and the expenses incurred during the dispute.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the RBI's Integrated Ombudsman Scheme, 2021, customers can file unified complaints against banks, NBFCs, and system participants. The scheme offers a single point of reference for resolving all banking complaints. Filing a complaint on the CMS portal is completely free and can be done online without requiring any legal representation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The Ombudsman will examine whether the bank adhered to the fair practices code. If the bank fails to show proof of a valid mandate for the disputed auto-debits, the Ombudsman can pass a binding decree ordering the bank to reverse the debits, pay interest on the delayed refund, and reimburse any wrongful bounce fees debited from the customer's account.
                  </p>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Unauthorized Auto-Debit Reversal Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Most banking disputes are resolved during the initial notice phase. Banks want to avoid the regulatory penalties and negative ratings associated with Ombudsman investigations.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Closed Personal Loan Case</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A business owner in Pune cleared his personal loan and obtained a No Objection Certificate (NOC). However, the bank's automated backend processed a NACH auto-debit of ₹22,000 the following month. He submitted two written complaints, which were ignored. He served a formal legal notice prepared by an advocate, citing the RBI customer rights. The bank, recognizing its regulatory liabilities under the RBI charter, reversed the unauthorized debit and credited ₹1,500 as compensation within 5 days of receiving the legal notice, avoiding any further escalation.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Revoked Gym Subscription Dispute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A customer in Bengaluru revoked an online e-mandate for a gym membership. Despite the revocation, the gym company initiated auto-debits, which the bank processed. The bank claimed they had no power to stop active mandates unilaterally. The customer served a legal notice, citing Section 25 of the Payment and Settlement Systems Act. The bank's compliance officer intervened, blocked the merchant, and refunded the debited amount immediately.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Wrongful Bounce Fees Recovery</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An account holder was charged ₹3,200 in mandate failure fees because of an auto-debit that she had cancelled months ago. She served a legal notice prepared by an advocate, challenging the charges and warning of Ombudsman escalation. The bank's legal cell reviewed the notice, credited the bounce fees, and updated the mandate status to prevent future errors.
                    </p>
                  </div>
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
              <h2 className="text-2xl md:text-4xl font-black mb-4">Auto-Debit Reversal Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how bank customers have successfully stopped unauthorized auto-debits using our legal guides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
                      <p className="text-[10px] text-slate-500 font-medium">Verified Customer</p>
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
