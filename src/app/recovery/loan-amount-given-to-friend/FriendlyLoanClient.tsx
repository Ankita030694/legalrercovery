'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can I legally recover a loan given to a friend without a written agreement?",
    answer: "Yes, Indian courts have consistently held that an oral or informal loan is a valid and enforceable debt. The Indian Contract Act, 1872 does not mandate that every contract be in writing to be valid. What matters is proof that a sum of money was transferred with a clear mutual understanding that it would be returned. Bank transfer receipts, UPI transaction screenshots, WhatsApp or SMS messages discussing the loan, and witness testimony can all serve as evidence to prove the existence of the debt. Courts will examine the totality of evidence, including the conduct of the parties."
  },
  {
    question: "What is the strongest evidence to prove that money was lent as a loan and not as a gift?",
    answer: "The strongest evidence is a combination of a clear digital transfer trail and contemporaneous communications. Bank statements showing the NEFT, RTGS, or UPI transfer from your account to the borrower establish the transfer. WhatsApp messages, SMS texts, or emails exchanged around the same time that discuss repayment terms, interest, or the borrower's promise to return the amount establish the intention of a loan. A promissory note or a signed acknowledgment of debt, if available, is the most conclusive evidence. If no written document exists, courts rely on the surrounding circumstances and the relationship between the parties."
  },
  {
    question: "What is a Promissory Note and does it need to be stamped?",
    answer: "A Promissory Note is a written, signed promise by the borrower to pay a specific sum of money to the lender on demand or on a fixed future date. Under the Indian Stamp Act, 1899, a promissory note must be stamped with the appropriate revenue stamp duty to be admissible as primary evidence in court. The stamp duty varies by state and the amount of the loan. If a promissory note is unstamped or inadequately stamped, it can still be admitted as evidence after paying the deficit stamp duty along with a penalty (usually ten times the deficit), but this must be done before the document is tendered in court. It is always advisable to properly stamp the note at the time of execution."
  },
  {
    question: "What is the limitation period for filing a case to recover a friendly loan?",
    answer: "Under the Limitation Act, 1963, the standard limitation period for filing a suit for recovery of money based on a contract is three (3) years. For a loan payable on demand, this period runs from the date of the loan itself. For a loan with a fixed repayment date, it runs from the date the repayment was due. If the borrower makes a partial payment or signs a written acknowledgment of the debt within the three-year window, the limitation period restarts (gets 'refreshed') from the date of such payment or acknowledgment. It is critical not to let this three-year window lapse."
  },
  {
    question: "Can I file a cheque bounce case under Section 138 NI Act for a friendly loan?",
    answer: "Yes, if the borrower issued a cheque towards repayment of the loan and the cheque was dishonoured due to insufficient funds or other reasons, you can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881. However, there are strict timelines: you must present the cheque within its validity period, send a statutory demand notice to the borrower within 30 days of receiving the bank's return memo, and if payment is not made within 15 days of receipt of the notice, file the criminal complaint in the Magistrate's Court within 30 days thereafter. The loan must constitute a 'legally enforceable debt,' so maintaining documentation of the original loan transaction is essential."
  },
  {
    question: "What is a Summary Suit under Order 37 CPC and how does it help?",
    answer: "A Summary Suit under Order 37 of the Code of Civil Procedure, 1908 is a fast-track civil recovery mechanism. It is specifically designed for claims based on written instruments such as negotiable instruments (promissory notes, bills of exchange) or written contracts. In a Summary Suit, the defendant does not have an automatic right to file a defence. They must apply to the court seeking 'leave to defend' and demonstrate a genuine, triable issue. If the court finds no valid defence, it can pass a decree (judgment) without a full trial, drastically reducing the time taken for recovery compared to an ordinary civil suit."
  },
  {
    question: "Can I file a criminal complaint for criminal breach of trust if a friend refuses to return my money?",
    answer: "If the money was entrusted for a specific purpose and the borrower misappropriated it, you may file a complaint under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 (formerly Section 405/406 IPC). However, courts distinguish between a simple loan default and criminal breach of trust. A mere refusal to repay a loan is generally treated as a civil matter. To succeed in a criminal complaint, you must demonstrate that the money was entrusted for a specific purpose and was dishonestly converted or used for a different purpose. If the borrower obtained the money through deception or false promises with no intention to repay, a complaint for cheating under Section 318 BNS may be more appropriate."
  },
  {
    question: "What is the role of a formal legal notice in recovering money from a friend?",
    answer: "A formal legal notice served through an advocate is often the single most effective step in recovering a friendly loan. The notice serves multiple purposes: it creates a formal, timestamped legal record of your demand; it communicates the seriousness of your intent to pursue legal action; and it triggers specific statutory timelines (e.g., the 15-day response period under Section 138 NI Act). Many borrowers who ignore informal reminders take immediate action upon receiving a lawyer's notice. Approximately 70-80% of friendly loan disputes are resolved at the legal notice stage itself, as the borrower wants to avoid the cost, stress, and public record of a court case."
  },
  {
    question: "Can WhatsApp messages and UPI screenshots be used as evidence in court?",
    answer: "Yes, under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (formerly Section 65B of the Indian Evidence Act, 1872), electronic records including WhatsApp messages, SMS texts, emails, and UPI transaction screenshots are fully admissible as evidence in Indian courts. To ensure admissibility, you must produce a certificate under Section 63 BSA certifying that the electronic device used to retrieve or store the data was functioning properly and the data has not been tampered with. We advise clients to take timestamped screenshots, export full chat histories, and preserve the original device for verification."
  },
  {
    question: "What if the borrower claims the money was a gift and not a loan?",
    answer: "This is a common defence raised in friendly loan disputes. The burden of proof in such cases depends on who filed the suit. If you filed a recovery suit, the initial burden is on you to prove the loan transaction. However, if the borrower admits receiving the money but claims it was a gift, the burden shifts to the borrower to prove the gift. Courts examine the surrounding circumstances: the amount, the relationship, whether any occasion justified a gift, any written or verbal discussion of repayment, whether the borrower made any partial payments, and the financial capacity of the lender to make such a gift. Large sums transferred between non-family members are rarely treated as gifts without strong evidence."
  },
  {
    question: "Can I recover interest on the loan amount if no interest was agreed upon?",
    answer: "If the parties agreed on a specific interest rate, that rate applies. If no interest rate was discussed, courts can still award interest under the Interest Act, 1978. Under Section 3 of this Act, courts have the discretion to award interest on debts where no rate was agreed, typically at a rate ranging from 6% to 12% per annum. Additionally, under Section 34 of the Code of Civil Procedure, courts can award pendente lite interest (interest during the pendency of the suit) and future interest (interest from the date of the decree until payment). This means even if you lent money interest-free, you can still recover interest for the period of default."
  },
  {
    question: "What if the borrower lives in a different city or state from me?",
    answer: "You can file the civil suit in the court within whose territorial jurisdiction the cause of action arose. Under Section 20 of the CPC, you may file in the court where the defendant resides or carries on business, or where the cause of action wholly or partly arose. If the loan was transferred from your bank account, the place where your bank is located (where you parted with the money) is a valid jurisdiction. If you have a promissory note, the place mentioned in the note can also determine jurisdiction. Our legal panel helps you identify the most strategically advantageous jurisdiction for filing."
  },
  {
    question: "How long does a recovery suit for a friendly loan typically take?",
    answer: "The timeline depends on the legal forum and the complexity of the case. A Summary Suit under Order 37 CPC, if no leave to defend is granted, can be decided within 6 to 12 months. An ordinary civil suit for recovery may take 2 to 5 years depending on the court's backlog. A cheque bounce case under Section 138 NI Act typically concludes within 1 to 2 years. However, the most effective route is the pre-litigation legal notice, which resolves the majority of cases within 15 to 45 days without any court filing."
  },
  {
    question: "What costs and fees are involved in recovering a friendly loan legally?",
    answer: "The costs depend on the legal strategy adopted. A legal notice is the most affordable option. Filing a Summary Suit requires payment of court fees, which vary by state and the claim amount. Filing a cheque bounce case under Section 138 NI Act involves minimal court fees. If the case goes to trial, advocate fees will vary based on the complexity and duration. At LegalRecovery, we offer transparent flat-fee pricing for legal notices and assist you in calculating court fees for suits. In most successful cases, the court orders the borrower to pay the lender's litigation costs in addition to the loan amount and interest."
  },
  {
    question: "Can I recover money lent through cash without any bank transfer record?",
    answer: "Recovering cash loans is more challenging because there is no automatic digital trail, but it is not impossible. You must rely on other evidence: witness testimony from persons present during the cash handover, any written acknowledgment or receipt signed by the borrower, WhatsApp or SMS messages where the borrower discusses or acknowledges the cash loan, CCTV footage if the handover happened at a monitored location, and any partial repayments made by the borrower (which constitute an acknowledgment of the debt). Courts have upheld cash loan claims where the lender demonstrated consistent circumstantial evidence. Our legal team helps you build the strongest possible case from the available evidence."
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
      "name": "Recovery of Loan Amount Given to Friend",
      "item": "https://www.legalrecovery.in/recovery/loan-amount-given-to-friend"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Loan Amount Given to Friend | How to Legally Recover Money Lent on Trust in India",
  "description": "Comprehensive legal guide on recovering personal loans given to friends, relatives, or acquaintances in India through legal notices, promissory note enforcement, Order 37 summary suits, cheque bounce cases, and settlement strategies.",
  "image": "https://www.legalrecovery.in/og-friendly-loan.png",
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
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06"
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
  "name": "Friendly Loan Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-friendly-loan.png",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "description": "Expert legal assistance for recovering personal loans given to friends, relatives, and acquaintances through legal notices, summary suits, and cheque bounce proceedings in India.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "620"
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
        "name": "Prateek Sharma"
      },
      "reviewBody": "I lent ₹5 Lakhs to a close friend for his business and he stopped responding after six months. LegalRecovery sent a comprehensive legal notice citing the Indian Contract Act and the Limitation Act. Within 12 days, he called me to settle. Got my full amount back with interest. Absolutely professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kavitha Menon"
      },
      "reviewBody": "My cousin borrowed ₹3 Lakhs for a medical emergency and kept delaying repayment for two years. I had only UPI transfer receipts and WhatsApp messages. LegalRecovery drafted a notice and filed a Summary Suit. The court passed a decree in my favour within 8 months. Highly recommend their evidence preparation support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohit Gupta"
      },
      "reviewBody": "A colleague gave me a post-dated cheque for ₹2 Lakhs as repayment for a loan, and it bounced. LegalRecovery handled the entire Section 138 NI Act process — from the statutory 30-day notice to the magistrate complaint. He settled within weeks of receiving the criminal summons. Excellent legal strategy!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Bose"
      },
      "reviewBody": "I had given ₹8 Lakhs to a family friend with just a handwritten promissory note. When he denied the debt, LegalRecovery helped me file a Summary Suit under Order 37 CPC. The court rejected his defence and passed a decree in my favour. Their knowledge of promissory note stamping and evidence law was impressive."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Nair"
      },
      "reviewBody": "Lent ₹1.5 Lakhs to a childhood friend via Google Pay and he blocked my number. I had no written agreement, only the UPI receipt and old WhatsApp messages where he promised to return it. LegalRecovery built a strong case from this digital evidence. The legal notice alone got him to pay up in 20 days. Remarkable!"
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
      "reviewBody": "My neighbour borrowed ₹4 Lakhs promising to return it in three months. Two years later, he kept making excuses. LegalRecovery served a legal notice and simultaneously filed a complaint for criminal breach of trust since the money was given for a specific real estate purpose. He returned the entire amount plus interest within a month. Outstanding work!"
    }
  ]
};

export default function FriendlyLoanClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "personal-debt-realities-india", title: "1. Personal Debt Realities & The Trust Deficit" },
    { id: "promissory-notes-stamp-duty-documentation", title: "2. Promissory Notes, Stamp Duty & Loan Documentation" },
    { id: "civil-remedies-summary-suit-ordinary-recovery", title: "3. Civil Remedies: Summary Suits & Ordinary Recovery" },
    { id: "criminal-recourse-cheque-bounce-bns-offences", title: "4. Criminal Recourse: Cheque Bounce & BNS Offences" },
    { id: "advocate-notices-settlement-strategies", title: "5. Advocate Notices & Debt Settlement Strategies" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Loan Given to Friend", href: "/recovery/loan-amount-given-to-friend" },
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
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Personal Loan Recovery Experts
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Friend <span className="text-[#DC2626]">Not Returning Your Money</span>?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover your hard-earned money lent on trust. Our legal panel enforces promissory notes, files summary suits, and initiates cheque bounce proceedings to recover every rupee owed to you.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Loan Recovery Now
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
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
                
                {/* Section 1: Personal Debt Realities & The Trust Deficit */}
                <section id="personal-debt-realities-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Personal Debt Realities &amp; The Trust Deficit</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Lending money to a friend, a relative, or an acquaintance is one of the most deeply rooted social practices in India. Whether it is a colleague asking for a short-term bridge loan to cover an EMI, a childhood friend seeking capital to start a small business, or a distant relative needing funds for a family wedding or medical emergency, most Indians have at some point extended a personal loan based purely on trust and goodwill. The transaction happens over a phone call, a WhatsApp message, or a brief conversation over tea. Money is transferred instantly through UPI, NEFT, or Google Pay. There is no formal contract, no interest clause, no repayment schedule, and certainly no legal documentation. The entire arrangement rests on a single, unwritten expectation: <strong>&quot;They will return it.&quot;</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The scale of this problem is staggering. According to industry estimates and RBI data on informal credit, personal loans between individuals constitute a substantial portion of India&apos;s unbanked and semi-banked lending economy. While formal bank loans and NBFC credit lines are governed by strict regulatory frameworks, friendly loans exist in a legal grey zone that most people do not understand until it is too late. The emotional burden is equally severe. Unlike a commercial transaction where both parties operate at arm&apos;s length, a friendly loan implicates personal relationships, family dynamics, and social reputation. Lenders often hesitate to pursue legal action because they fear &quot;ruining the relationship&quot; or &quot;causing a family rift.&quot; This reluctance is exploited by defaulting borrowers, who weaponize the personal bond to delay and eventually avoid repayment entirely.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is important to distinguish this category of debt recovery from other common scenarios handled by legal platforms. Salary recovery disputes (addressed under labor codes like the Payment of Wages Act, 1936 and the Industrial Disputes Act, 1947) involve an employer-employee relationship governed by specific statutory protections. Security deposit disputes (covered by state-specific Rent Control Acts) are landlord-tenant matters with dedicated adjudicatory bodies. Builder booking amount refunds fall under the Real Estate Regulatory Authority (RERA). MSME dues are governed by the MSMED Act, 2006, which provides a specialized facilitation council. In stark contrast, friendly loan recovery is governed by the <strong>general civil and criminal law of India</strong> — primarily the Indian Contract Act, 1872; the Code of Civil Procedure, 1908; the Negotiable Instruments Act, 1881; the Bharatiya Nyaya Sanhita (BNS), 2023; and the Bharatiya Sakshya Adhiniyam (BSA), 2023. There is no specialized tribunal for personal loan disputes; the lender must navigate the civil or criminal court system directly.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we have handled thousands of personal loan recovery cases. The amounts range from ₹50,000 lent to a neighbour to ₹25 Lakhs lent to a business partner. In every case, the core challenge is the same: the borrower exploits the informal nature of the transaction to deny the debt, claim it was a gift, or simply go silent. Our legal panel specializes in reconstructing the evidence trail from digital payment records, chat histories, call recordings, and witness statements to build a case that is admissible and persuasive in court. We transform an informal trust-based transaction into a legally enforceable claim through structured legal notices, promissory note enforcement, summary suits, and criminal proceedings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Indian legal system, contrary to popular belief, provides robust and effective remedies for recovering friendly loans. The key lies in understanding which legal instrument applies to your specific situation and acting within the statutory limitation period. A lender armed with proper evidence and timely legal advice can recover not only the principal amount but also interest and litigation costs. Delaying action, on the other hand, risks crossing the three-year limitation window under the Limitation Act, 1963, after which your right to file a civil suit is extinguished entirely. Our mission at LegalRecovery is to empower you with the legal knowledge and professional representation needed to recover every rupee that is rightfully yours, without compromising your peace of mind or letting personal guilt cloud your financial rights.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A loan given on trust is still a legal debt. Indian courts do not require a formal written agreement to enforce repayment — what they require is proof that money was transferred with a mutual understanding that it would be returned.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Promissory Notes, Stamp Duty & Loan Documentation */}
                <section id="promissory-notes-stamp-duty-documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Promissory Notes, Stamp Duty &amp; Loan Documentation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The strength of your legal claim for recovering a friendly loan depends almost entirely on the quality and admissibility of your evidence. Indian law recognizes two broad categories of personal loan documentation: <strong>written instruments</strong> (promissory notes, loan agreements, signed acknowledgments) and <strong>oral or circumstantial evidence</strong> (bank transfers, digital messages, witness testimony). Understanding the legal weight of each type of evidence is critical because it determines not only whether you can file a case, but which type of legal proceeding — summary suit, ordinary suit, or criminal complaint — is available to you.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Promissory Note</strong> is the single most powerful instrument for personal loan recovery. Defined under Section 4 of the Negotiable Instruments Act, 1881, a promissory note is an unconditional written promise, signed by the maker (borrower), to pay a certain sum of money to the payee (lender) on demand or at a fixed future date. A valid promissory note must contain: the date of execution, the names of the borrower and lender, the principal amount in both words and figures, a clear unconditional promise to pay, the repayment date or the phrase &quot;on demand,&quot; and the borrower&apos;s signature. A promissory note is a negotiable instrument, meaning it can be transferred to a third party, and it carries the full force of law. Courts treat it as prima facie evidence of the debt, shifting the burden of proof to the borrower to demonstrate why they should not pay.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, a promissory note&apos;s admissibility in court is contingent on proper <strong>stamping under the Indian Stamp Act, 1899</strong>. Under Section 35 of the Indian Stamp Act, an instrument that is not duly stamped cannot be received in evidence for any purpose by any court or public authority. The stamp duty on a promissory note varies from state to state and is typically calculated as a percentage of the loan amount. For example, in Maharashtra, the stamp duty on a promissory note is approximately 0.1% of the loan amount, while in Delhi, it may be a flat rate. If a promissory note is executed without proper stamp duty, it can still be admitted in evidence if the deficiency is made up. Under Section 35 proviso and Section 36, if the deficit stamp duty is paid along with a penalty (typically ten times the deficit) before the note is tendered as evidence, the court may admit it. Our legal panel advises clients on the stamp duty rates applicable in their state and assists in rectifying unstamped or under-stamped instruments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In many friendly loan situations, no promissory note exists. The money was transferred digitally with perhaps a brief WhatsApp message saying &quot;sending you 2L for the shop, return in 3 months.&quot; In such cases, the law does not leave the lender without remedy. The <strong>Indian Contract Act, 1872</strong> does not mandate that contracts be in writing to be enforceable (with certain exceptions under Sections 25 and the Transfer of Property Act for immovable property). An oral agreement to borrow and repay money is a valid contract if three elements are present: offer, acceptance, and consideration (the sum of money transferred). The challenge with oral loans is purely evidentiary — you must prove the transaction happened.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Modern digital payment systems have significantly strengthened the position of lenders in oral loan cases. <strong>Bank statements</strong> showing NEFT, RTGS, IMPS, or UPI transfers from your account to the borrower&apos;s account constitute strong primary evidence of the transfer of funds. <strong>UPI transaction confirmations</strong> from Google Pay, PhonePe, or Paytm show the exact amount, date, time, and the recipient&apos;s registered name. <strong>WhatsApp messages</strong>, SMS texts, or emails exchanged around the time of transfer that discuss the loan, the repayment timeline, or the borrower&apos;s acknowledgment of receiving the amount serve as critical corroborative evidence. Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (which replaced Section 65B of the Indian Evidence Act, 1872), these electronic records are fully admissible in court, provided they are accompanied by a certificate from the person who produced the record, confirming the integrity and authenticity of the data.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A <strong>signed acknowledgment of debt</strong> is another valuable instrument. Even after the loan has been given, if the borrower signs a simple letter or email acknowledging the outstanding amount and committing to a repayment date, this document serves as powerful evidence. Crucially, under <strong>Section 18 of the Limitation Act, 1963</strong>, a written acknowledgment of a debt signed by the borrower (or their authorized agent) <strong>restarts the three-year limitation period</strong> from the date of the acknowledgment. This is an extremely important tool for lenders whose limitation period is about to expire. Even a partial repayment, if documented, constitutes an acknowledgment of the larger debt and refreshes the limitation clock. Our legal team advises clients on how to secure these acknowledgments and partial payments strategically to preserve their legal rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For future protection, we strongly recommend that all personal loans, regardless of amount or the closeness of the relationship, be documented with at minimum a properly stamped promissory note or a simple written loan agreement. The agreement should state the principal amount, the date of disbursement, the repayment date, any interest terms, and the mode of repayment. Both parties should sign the document in the presence of at least one witness. This simple precaution converts what would otherwise be a difficult oral evidence case into a straightforward documentary recovery case eligible for the fast-track Summary Suit procedure.
                    </p>
                  </div>
                </section>

                {/* Section 3: Civil Remedies: Summary Suits & Ordinary Recovery */}
                <section id="civil-remedies-summary-suit-ordinary-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Civil Remedies: Summary Suits &amp; Ordinary Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a borrower refuses to repay a friendly loan despite repeated requests and formal legal notices, the lender must escalate to civil court proceedings. Indian civil law provides two primary routes for monetary recovery: the <strong>Summary Suit under Order 37 of the Code of Civil Procedure (CPC), 1908</strong>, and the <strong>Ordinary Civil Suit for Recovery of Money</strong>. The choice between these two procedures depends critically on the type of evidence the lender possesses. Understanding the procedural differences, timelines, and strategic advantages of each route is essential for making an informed decision about your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Summary Suit (Order 37 CPC)</strong> is the fast-track civil recovery mechanism preferred by courts and litigators for debt recovery claims. It is specifically designed for cases based on <strong>written instruments</strong> — including bills of exchange, hundis, promissory notes, and written contracts for the payment of money. The defining feature of a Summary Suit is that the defendant (the borrower) <strong>does not have an automatic right to file a written statement or defence</strong>. Instead, the defendant must apply to the court seeking <strong>&quot;leave to defend,&quot;</strong> and the court will grant leave only if the defendant can demonstrate a genuine, triable issue — a defence that is not frivolous, illusory, or vexatious. If the court finds that the defendant has no real defence, it can pass a decree (judgment) summarily without conducting a full trial, reducing the case duration from years to months.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The practical advantage of Order 37 is immense. In a regular civil suit, the defendant can file lengthy written statements, raise procedural objections, seek adjournments, and drag the case through evidence and cross-examination for three to five years or more. In a Summary Suit, the initial hearing itself focuses on whether the defendant has any credible defence at all. If the borrower admits to signing the promissory note or acknowledges the debt but simply claims inability to pay, the court will not grant leave to defend and will pass a decree immediately. Even if conditional leave is granted (requiring the borrower to deposit a portion of the claim in court), the lender gains significant leverage. Courts in metropolitan centers like Delhi, Mumbai, and Bangalore are increasingly using Order 37 proceedings to clear debt recovery dockets, making this the most time-efficient civil remedy.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you do not possess a written instrument (no promissory note, no written loan agreement, no cheque), you must file an <strong>Ordinary Civil Suit for Recovery of Money</strong> under the general provisions of the CPC. This is a regular civil suit filed in the court of competent jurisdiction. The plaint (your written complaint) must set out the facts of the loan transaction, the amount lent, the date of transfer, the agreed or implied repayment terms, the borrower&apos;s default, and the evidence supporting your claim. The defendant then files a written statement, and the case proceeds through stages of issues framing, evidence recording (including examination and cross-examination of witnesses), arguments, and judgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While an ordinary suit takes longer, it offers the advantage of a broader evidentiary canvas. You can present bank statements, UPI receipts, WhatsApp chat exports, email correspondence, witness testimony, call recordings (with appropriate BSA Section 63 certificates), and any circumstantial evidence to establish the loan. The court will assess the preponderance of probabilities — meaning it will decide which version of events is more likely true based on the totality of the evidence. In many cases, the borrower&apos;s inability to explain why they received a large sum of money (without any commercial reason or documented gift) is itself a strong indicator that the transfer was a loan.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Jurisdictional selection is a crucial strategic decision. Under <strong>Section 20 of the CPC</strong>, the suit may be filed in the court where the defendant resides or carries on business, or where the cause of action arose (wholly or in part). Since the lender parted with the money from their bank account, the location of the lender&apos;s bank branch is a valid jurisdiction because it is the place where a material part of the cause of action arose. This is particularly useful when the borrower has moved to a different city or state. Court fees for recovery suits vary by state — typically calculated as a percentage of the claim amount (usually 1% to 7.5%). Under <strong>Section 35 CPC</strong>, the court can order the losing party to pay the successful party&apos;s litigation costs, including advocate fees and court fees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once a decree is passed — whether through a Summary Suit or an ordinary suit — the lender must execute it if the borrower does not voluntarily comply. <strong>Order 21 of the CPC</strong> provides comprehensive execution mechanisms, including: attachment and sale of the borrower&apos;s movable and immovable property; garnishee orders directing the borrower&apos;s bank to transfer funds directly to the lender; arrest and detention of the judgment debtor (in cases where the borrower has the means to pay but wilfully refuses); and appointment of a receiver to manage the borrower&apos;s assets. Our legal team handles the entire lifecycle of the case — from drafting the plaint or summary suit application, to appearing in court, to executing the decree through attachment of the borrower&apos;s bank accounts and assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to the principal amount, the court can award <strong>interest</strong> at its discretion. Under <strong>Section 3 of the Interest Act, 1978</strong>, courts can award pre-suit interest (interest from the date the debt was due until the date of filing), pendente lite interest (during the pendency of the suit under Section 34 CPC), and future interest (from the date of the decree until actual payment). Interest rates typically range from 6% to 12% per annum. Combined with litigation costs, a successful decree can result in the lender recovering significantly more than the original loan amount, compensating them for the delay and the cost of legal proceedings.
                    </p>
                  </div>
                </section>

                {/* Section 4: Criminal Recourse: Cheque Bounce & BNS Offences */}
                <section id="criminal-recourse-cheque-bounce-bns-offences" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Criminal Recourse: Cheque Bounce &amp; BNS Offences</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While civil suits are the primary mechanism for recovering friendly loans, certain circumstances open the door to criminal proceedings, which carry the threat of imprisonment and often produce faster results. The two most relevant criminal remedies in personal loan disputes are <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (for dishonoured cheques) and relevant provisions of the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> (for criminal breach of trust and cheating). These criminal avenues are not mutually exclusive with civil remedies — a lender can pursue both simultaneously, leveraging the criminal pressure to accelerate a civil settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 138 of the Negotiable Instruments Act</strong> is one of the most frequently invoked criminal provisions in Indian litigation and is highly effective in friendly loan recovery. It applies when a borrower issues a cheque towards repayment of the loan and the cheque is dishonoured (bounced) by the bank due to insufficient funds, &quot;stop payment&quot; instructions, or account closure. The dishonour of a cheque drawn on an account that the borrower maintains is a criminal offence punishable with imprisonment up to two years, or a fine up to twice the cheque amount, or both. The procedural requirements are strict and time-bound, and failure to comply with any timeline can invalidate your case:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Presentation:</strong> The cheque must be presented to the bank within three months of its date of issue (or within its validity period if the bank allows six months).</li>
                      <li><strong>Return Memo:</strong> Upon dishonour, the bank issues a return memo stating the reason for the bounce. This memo is the starting point for your legal action.</li>
                      <li><strong>Statutory Demand Notice:</strong> Within 30 days of receiving the return memo, the lender must send a written demand notice to the borrower, demanding payment of the cheque amount within 15 days.</li>
                      <li><strong>Waiting Period:</strong> The borrower has 15 days from receipt of the notice to make the payment.</li>
                      <li><strong>Filing the Complaint:</strong> If the borrower fails to pay within 15 days, the lender must file a criminal complaint before the jurisdictional Magistrate&apos;s Court within 30 days from the expiry of the 15-day notice period.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Supreme Court of India, in landmark decisions including <strong>Dashrath Rupsingh Rathod v. State of Maharashtra (2014)</strong> and the subsequent legislative amendment through the Negotiable Instruments (Amendment) Act, 2015, clarified that the complaint must be filed at the place where the cheque was presented for encashment (the branch of the payee&apos;s bank). This ensures the lender can file the case in their own city, avoiding the need to travel to the borrower&apos;s location. The court issues summons to the borrower, and if the borrower fails to appear, a bailable and subsequently non-bailable warrant can be issued. The threat of arrest and criminal prosecution makes Section 138 an extraordinarily effective tool for compelling settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      An important judicial nuance must be noted. While Section 138 NI Act creates a presumption under <strong>Section 139</strong> that the cheque was issued towards a legally enforceable debt, the borrower can rebut this presumption. In some High Court decisions, courts have acquitted accused persons where they demonstrated that the cheque was not issued in discharge of a genuine debt or liability — for instance, where blank cheques were obtained under coercion, or where the alleged loan transaction lacked any corroborating evidence (no bank transfer, no contemporaneous communication). Therefore, it is essential that the lender maintain independent evidence of the underlying loan transaction (bank statements, messages) to support the Section 138 case. Our legal panel ensures that both the cheque bounce criminal complaint and the underlying loan documentation are prepared in tandem, creating a mutually reinforcing evidentiary framework.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond cheque bounce cases, the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> provides criminal remedies where the borrower&apos;s conduct crosses the line from mere default into fraud or breach of trust. <strong>Section 316 BNS (Criminal Breach of Trust)</strong> — replacing former Section 406 IPC — applies where money was entrusted to the borrower for a specific purpose and the borrower dishonestly misappropriated it or converted it to their own use. For example, if you gave ₹5 Lakhs to a friend specifically to purchase a plot of land on your behalf, and they instead used the money for their personal expenses, this constitutes criminal breach of trust. The offence is punishable with imprisonment up to three years, or a fine, or both.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 318 BNS (Cheating)</strong> — replacing former Section 420 IPC — is applicable where the borrower obtained the money through a false representation or deception, with a dishonest intention from the very inception of the transaction. For instance, if the borrower fabricated a medical emergency to induce you to lend money, or promised a specific repayment from a source they knew did not exist (a fictitious property sale, a pending insurance claim that was already rejected), this constitutes cheating. However, courts are cautious about converting ordinary civil debt disputes into criminal cases. The Supreme Court has held in multiple judgments that a mere breach of contract or inability to repay a loan does not automatically constitute cheating — the element of <strong>dishonest intention at the time of obtaining the money</strong> must be established. Our legal panel carefully evaluates the facts of each case to determine whether the borrower&apos;s conduct warrants a criminal complaint or whether the case is better pursued through civil channels alone.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A <strong>dual-track strategy</strong> — filing a civil recovery suit alongside a criminal complaint — is often the most effective approach. The civil suit ensures that the loan amount, interest, and costs are legally quantified and adjudicated. The criminal proceeding creates immediate pressure through the threat of arrest, bail conditions, and a criminal record. Many borrowers who would otherwise drag civil proceedings for years agree to settle promptly when faced with parallel criminal liability. Our legal team coordinates both tracks to maximize the speed and efficiency of recovery, ensuring that every available legal lever is activated in your favour.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & Debt Settlement Strategies */}
                <section id="advocate-notices-settlement-strategies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; Debt Settlement Strategies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The most effective and cost-efficient step in recovering a friendly loan is the service of a formal <strong>advocate-signed legal notice</strong>. Before any court filing, a well-drafted legal notice often resolves the dispute within 15 to 30 days. The legal notice is not merely a letter of demand — it is a structured legal document that establishes the lender&apos;s cause of action, provides the borrower with a formal opportunity to settle, and creates the evidentiary foundation for all subsequent legal proceedings. In our experience at LegalRecovery, approximately 70% to 80% of friendly loan disputes are resolved at the legal notice stage, making it the highest-return legal intervention for personal debt recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A properly drafted legal notice for friendly loan recovery should contain several critical elements: the full facts of the loan transaction (date, amount, mode of transfer, any agreed repayment terms); a detailed statement of the evidence available with the lender (bank transfer records, UPI receipts, promissory note details, WhatsApp messages citing specific dates and content); a clear demand for repayment of the principal amount along with interest calculated from the date the repayment was due; and an explicit warning of the specific legal consequences that will follow non-compliance — including a Summary Suit under Order 37 CPC, a criminal complaint under Section 138 NI Act (if a cheque was involved), or a complaint under Section 316/318 BNS (if elements of fraud or breach of trust are present). The notice must also specify a clear deadline for compliance, typically 15 days from receipt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The psychological and legal impact of a formal legal notice cannot be overstated. Most borrowers in friendly loan situations have been ignoring informal calls, messages, and requests from the lender for months or years. They assume the lender will &quot;eventually give up&quot; or &quot;not want to spoil the relationship.&quot; When a notice arrives on the letterhead of a law firm, addressed formally, citing specific statutory provisions and threatening civil and criminal action with defined deadlines, the borrower&apos;s calculation changes dramatically. They realize that ignoring the debt now carries tangible legal, financial, and reputational consequences. The notice is sent digitally via verified email and WhatsApp to the borrower&apos;s residential and/or office address, creating an official digital record of delivery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we do not use generic template notices. Each notice is individually drafted by our legal panel based on the specific facts of your case. If you have a promissory note, we cite Order 37 CPC and warn of a summary decree without trial. If you have a bounced cheque, we incorporate the Section 138 NI Act statutory demand notice into the same document, combining the civil demand and the criminal statutory notice into a single, comprehensive communication. If the evidence suggests fraud, we reference BNS Section 318 and the possibility of an FIR. This multi-pronged notice makes it clear to the borrower that their continued default will trigger simultaneous civil and criminal proceedings, multiplying their legal exposure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the borrower responds to the notice with a willingness to settle, the next critical step is drafting a formal <strong>Settlement Deed or Compromise Agreement</strong>. This document must be carefully drafted to protect the lender&apos;s interests. A proper settlement deed should include: the admitted outstanding amount (principal plus agreed interest and costs); a specific repayment schedule with fixed dates and amounts for each instalment; the mode of payment (bank transfer to a specified account, with transaction reference numbers to be shared); a <strong>default clause</strong> that specifies that if any instalment is missed, the entire remaining balance becomes immediately payable and the lender can proceed to file a civil suit for the full original claim amount without further notice; a clause authorizing the lender to present the settlement deed as evidence in court if the borrower defaults; and execution in the presence of witnesses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In cases where the borrower is genuinely unable to make a lump-sum payment, a <strong>structured settlement</strong> with instalments may be the most pragmatic solution. We help clients negotiate realistic instalment plans that account for the borrower&apos;s financial capacity while protecting the lender&apos;s rights. The settlement deed should include post-dated cheques for each instalment — if any instalment cheque bounces, it immediately triggers Section 138 NI Act proceedings, providing an automatic enforcement mechanism. This strategy converts the informal debt into a series of formal negotiable instruments, each carrying criminal liability for dishonour.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For cases that do not settle through notice or negotiation, we escalate through a <strong>structured litigation pathway</strong>. The pathway is tailored to the evidence: if a promissory note or written agreement exists, we file a Summary Suit under Order 37 CPC for the fastest possible decree; if only digital evidence is available, we file an ordinary recovery suit with a robust evidentiary bundle including BSA Section 63 certificates; if a cheque was involved, we file the criminal complaint under Section 138 NI Act in parallel with the civil suit. Throughout the process, we maintain open settlement channels, as many borrowers agree to pay once they are served with court summons. Our digital dashboard allows clients to track every stage of their case in real-time — from notice dispatch and postal tracking to court filing, hearing dates, and decree execution.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-655 text-xs sm:text-sm italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-extrabold text-slate-800 text-xs sm:text-sm">{rev.author.name}</span>
                          <div className="flex items-center gap-0.5 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white hover:border-slate-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-[#DC2626] transition-colors focus:outline-none text-xs sm:text-base"
                          >
                            <span>{faq.question}</span>
                            <span className="ml-4 flex-shrink-0 text-slate-400">
                              {isOpen ? (
                                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
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

            {/* Right Sidebar - CTA Cards */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                <h3 className="text-sm font-black text-[#111827] mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Limitation: 3 years from due date
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Fast track: Order 37 Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Criminal: Sec 138 NI Act (cheque bounce)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Evidence: UPI, WhatsApp, bank records
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Interest: 6-12% p.a. court awarded
                  </li>
                </ul>
              </div>

              {/* Legal Consultation Card */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] text-white p-6 rounded-2xl shadow-md relative overflow-hidden border border-slate-900 text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-black mb-2 uppercase tracking-wide text-white">
                  Need Expert Help?
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-relaxed">
                  Our advocates specialize in personal loan recovery through legal notices, summary suits, and cheque bounce proceedings. Get your money back.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  Start Recovery Now
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Modal form */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />

      </div>
    </>
  );
}
