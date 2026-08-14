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
    question: "Can I copy and paste a sample legal notice and send it myself?",
    answer: "While sample notice formats provide a clear understanding of the structure and legal clauses, copying and sending them yourself without an advocate is not recommended. A legal notice sent on an advocate's official letterhead carries significantly more authority and legal weight. Furthermore, minor mistakes in drafting, such as incorrect statutory citations, vague calculations, or improper notice periods, can be used against you in court."
  },
  {
    question: "What is the standard notice period that must be given in a money recovery sample?",
    answer: "Under standard Indian civil procedure, the debtor must be given a notice period of 15 days from the date of receipt of the notice to clear the outstanding amount. In some specific cases, such as notices to government departments under Section 80 of the CPC, a mandatory 60-day notice period is required. For most commercial and personal loans, 15 days is the standard and legally accepted timeframe."
  },
  {
    question: "Is a sample legal notice valid if it is sent via email or WhatsApp?",
    answer: "Yes, under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (previously Section 65B of the Indian Evidence Act), electronic communications are admissible. If a notice is sent as a PDF via email or WhatsApp and delivery can be tracked (such as blue ticks or read receipts), it is considered validly served."
  },
  {
    question: "What statutory acts are cited in a commercial invoice recovery sample?",
    answer: "A commercial invoice recovery notice typically cites the Indian Contract Act, 1872 (for breach of contract), the Sale of Goods Act, 1930 (if it involves delivery of physical goods), and the Interest Act, 1978 (to claim interest on delayed payments). If the creditor is registered under the MSMED Act, 2006, they can also cite Section 15 and 16 of the Act to claim compound interest at three times the bank rate."
  },
  {
    question: "What acts are cited in a personal loan recovery notice sample?",
    answer: "For a personal or friendly loan, the notice cites Section 10 and 73 of the Indian Contract Act, 1872, for breach of agreement. If a Promissory Note was executed, it will reference Section 4 and Section 78 of the Negotiable Instruments Act, 1881. If a cheque was issued and bounced, Section 138 of the Negotiable Instruments Act is cited."
  },
  {
    question: "How do I calculate the interest in a recovery notice draft?",
    answer: "The interest calculation must be clearly stated in the notice. If your contract specifies an interest rate, calculate the interest from the date the payment was due until the date of the notice. If no rate is specified, you can claim interest under the Interest Act, 1978. Commercial interest rates are usually calculated between 12% and 18% per simple interest per annum, while personal interest rates range from 6% to 9%."
  },
  {
    question: "Can I demand legal notice drafting fees from the debtor?",
    answer: "Yes, it is standard legal practice to include a clause demanding that the debtor pay the costs incurred for drafting and sending the legal notice. This is usually listed as 'Advocate Fee' or 'Legal Notice Charges' and typically ranges from ₹1,000 to ₹5,000 depending on the complexity of the notice. The debtor is demanded to pay this sum along with the principal and interest."
  },
  {
    question: "What happens if a debtor replies to my legal notice with a counter-claim?",
    answer: "If the debtor replies with a counter-claim or disputes the debt, you must analyze their reply carefully with your advocate. If their defense is baseless, you can send a rejoinder notice clarifying the facts or proceed directly to file a lawsuit (such as an Order 37 Summary Suit). Their reply is valuable because it creates a written record of their defense, which they cannot easily change in court."
  },
  {
    question: "How do I handle a corporate debtor that has gone into liquidation?",
    answer: "If the corporate debtor has initiated bankruptcy or liquidation, sending a standard recovery notice may be barred under the 'moratorium period' of the Insolvency and Bankruptcy Code (IBC). In such cases, you must file your financial claim as an Operational or Financial Creditor with the Interim Resolution Professional (IRP) using the specific forms (Form B or Form C) provided under IBC rules."
  },
  {
    question: "What details of bank transfers should be included in a loan recovery sample?",
    answer: "You must include the date of transfer, the sender's bank name, the recipient's bank name and account number, the exact transaction ID (UTR number for NEFT/RTGS/IMPS), and the amount transferred. Providing these bank details in the notice body leaves no room for the debtor to deny receiving the funds, making the notice highly enforceable."
  },
  {
    question: "Can a legal notice demand the return of company property along with money?",
    answer: "Yes. If the dispute involves a contractor or business partner who has failed to return physical assets (laptops, proprietary software, data) along with unpaid advances, you can include a specific clause demanding the immediate return of these assets under threat of criminal prosecution for Criminal Breach of Trust (Section 316 BNS / 406 IPC)."
  },
  {
    question: "Is a legal notice necessary before filing a Summary Suit under Order 37 CPC?",
    answer: "While a legal notice is not technically mandatory before filing a Summary Suit under Order 37, it is highly recommended. Serving a notice provides the court with concrete proof that you gave the debtor a final opportunity to settle. It also establishes the debtor's silence or admission of debt, which helps in obtaining a quick decree from the judge without a trial."
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
      "name": "Legal Notice for Recovery of Money Sample",
      "item": "https://www.legalrecovery.in/legal-notice-for-recovery-of-money-sample"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice for Recovery of Money Samples: Drafts, Formats, and Clause Guide in India",
  "description": "Comprehensive legal drafts and templates for money recovery in India. View sample legal notices for friendly loans, B2B invoices, and freelancer fees.",
  "image": "https://www.legalrecovery.in/og-money-recovery-sample.png",
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
  "datePublished": "2026-06-10",
  "dateModified": "2026-06-10"
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
  "name": "Money Recovery Notice Drafting",
  "image": "https://www.legalrecovery.in/og-money-recovery-sample.png",
  "description": "Professional drafting and custom review of legal notices for money recovery using standard formats.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "980"
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
        "name": "Karan Johar"
      },
      "reviewBody": "The friendly loan sample on this page helped me understand what details were missing in my self-drafted notice. I hired their advocate service to refine it, and my friend returned the money within 12 days. Highly informative!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nisha Gokhale"
      },
      "reviewBody": "As a small business owner, B2B defaults are constant. The commercial invoice notice sample provided here is extremely precise. It covered all the points, including the Interest Act and MSME clauses. Excellent layout."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Debashish Bannerjee"
      },
      "reviewBody": "Excellent breakdown of the clauses. I was able to verify the draft sent to me by my local lawyer and realized he missed adding the directors' personal liability. I had it updated using the guidelines here."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ritika Sen"
      },
      "reviewBody": "The freelancer notice sample is perfect. I was facing a default from an overseas client's Indian branch. The notice was served via email and WhatsApp using their guidelines, and the client settled the invoice immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Venkatesh Prasad"
      },
      "reviewBody": "Very thorough legal templates. Citing BNS and new codes shows that the drafts are up-to-date. Used their legal platform to dispatch the notice via speed post. The debtor responded and cleared the dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shivani Mehta"
      },
      "reviewBody": "The clause-by-clause analysis is brilliant. It explains the purpose of every single sentence in a legal notice, helping a layperson understand the process without getting lost in legal jargon. Brilliant job!"
    }
  ]
};

export default function LegalNoticeRecoverySampleClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction & Drafting Philosophy" },
    { id: "sample-loan", title: "Sample 1: Friendly Loan Recovery" },
    { id: "sample-invoice", title: "Sample 2: B2B Commercial Invoices" },
    { id: "sample-freelancer", title: "Sample 3: Freelancer & Agency Fees" },
    { id: "legal-anatomy", title: "Clause-by-Clause Legal Anatomy" },
    { id: "customization-mistakes", title: "Mistakes to Avoid in Customization" },
    { id: "testimonials", title: "Reviews & Case Studies" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice for Recovery of Money Sample", href: "/legal-notice-for-recovery-of-money-sample" },
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
        
        {/* Expanded Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for Recovery of Money <span className="text-[#DC2626]">Samples &amp; Formats</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              View and download legally vetted templates for personal loans, unpaid commercial invoices, and freelancer agreements. Learn the statutory clauses and draft your recovery notice with advocate precision.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Get Custom Draft Now
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
                
                {/* Introduction & Drafting Philosophy */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Introduction &amp; Drafting Philosophy
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal drafting is a precise science that leaves no room for ambiguity, emotional exaggeration, or personal grievances. When a debtor defaults on a financial obligation, the creditor&apos;s natural reaction is frustration. However, when converting that frustration into a legal document, the language must undergo a transformation. A <strong>Legal Notice for the Recovery of Money</strong> must be drafted with cold, objective, and logical precision. It acts as the opening statement in what could eventually become a judicial record, and judges pay close attention to the consistency between the facts stated in the initial notice and the subsequent plaint filed in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The philosophy behind an effective legal notice is simple: to make the debtor realize that the cost of defending a lawsuit will far exceed the cost of settling the debt immediately. To achieve this, the notice must outline three elements clearly: an undisputed right of the creditor to receive the money, an undeniable default by the debtor, and a credible threat of swift civil and criminal action. If a notice is vague, lacks precise dates of transactions, or contains mathematical errors in calculating interest, it signals to the debtor that the creditor is unprepared, encouraging them to ignore the notice or reply with a dismissive counter-claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In this guide, we provide three distinct, professionally vetted sample drafts representing the most common scenarios of payment defaults in India: friendly loans, commercial B2B invoices, and freelancer/independent contractor service fees. Each draft is accompanied by a detailed statutory commentary explaining why specific clauses are used. By studying these formats, you will gain a clear understanding of the structural anatomy of formal legal notices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, we must emphasize a critical caveat: <em>a sample notice is a blueprint, not a final solution.</em> Every financial dispute has unique facts, electronic evidence trails, and jurisdictional elements. Copying and pasting a template and sending it on your own personal letterhead rarely yields results. In the legal ecosystem of India, a notice digitally dispatched under an advocate&apos;s seal and signature carries serious weight. It signals to the debtor that you have engaged professional counsel and are ready to execute your legal threats. At LegalRecovery, we pair you with veteran civil and commercial lawyers who customize these templates to fit your specific transaction, ensuring maximum enforceability.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A sample format provides structure, but the strength of a notice lies in its customized facts and the authority of the advocate&apos;s letterhead. Treat the template as a guide, and leave the execution to professional counsel.&quot;
                    </div>
                  </div>
                </section>

                {/* Sample 1: Recovery of Personal & Friendly Loans */}
                <section id="sample-loan" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Sample 1: Recovery of Personal &amp; Friendly Loans
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Lending money to friends, relatives, or colleagues is a common social practice, but it frequently results in default. When personal follow-ups fail, a formal notice must be sent. Below is a sample draft for recovering a personal loan backed by a promissory note and bank transaction records:
                    </p>
                    
                    <div className="relative">
                      <div className="bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl font-mono text-[11px] leading-relaxed overflow-x-auto select-none shadow-inner blur-sm pointer-events-none">
                        <p className="text-center font-bold text-xs text-red-400 mb-4">[ADVOCATE OFFICE LETTERHEAD - ADDRESS &amp; CONTACT DETAILS]</p>
                        <p className="mb-4">Ref. No. LR/PL/2026/1025 <span className="float-right">Date: 10.06.2026</span></p>
                        <p className="mb-4 font-bold">BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD)</p>
                        <p className="mb-4">To,<br />
                        Mr. Rohan Sharma,<br />
                        S/o Mr. Vijay Sharma,<br />
                        Flat No. 402, Elite Apartments, Sector 15,<br />
                        Gurugram, Haryana - 122001</p>
                        
                        <p className="mb-4 font-bold text-center">SUBJECT: LEGAL NOTICE FOR THE RECOVERY OF OUTSTANDING LOAN AMOUNT OF RS. 5,00,000/- (RUPEES FIVE LAKHS ONLY) ALONG WITH INTEREST</p>
                        
                        <p className="mb-4">Dear Sir,</p>
                        <p className="mb-4">Under instructions from and on behalf of my client, Mr. Akhil Srivastava, S/o Mr. Ramesh Srivastava, residing at H-12, Green Park Extension, New Delhi - 110016 (hereinafter referred to as &quot;my Client&quot;), I hereby serve upon you this Legal Notice:</p>
                        
                        <p className="mb-4">1. That you and my Client have shared a close professional and personal relationship for over five years. In the month of October 2025, you approached my Client representing that you were facing an urgent medical emergency in your family and required financial assistance of Rs. 5,00,000/- (Rupees Five Lakhs Only).</p>
                        
                        <p className="mb-4">2. That relying on your representations and assurances of repayment within six months, my Client lent you a sum of Rs. 5,00,000/-. The transaction was executed via bank transfer from my Client&apos;s HDFC Bank Account (A/c No. XXXXXX1234) to your ICICI Bank Account (A/c No. XXXXXX5678) via IMPS (Transaction Ref No. HDFCTXN987654) on 15.10.2025. In addition, you executed a Promissory Note dated 15.10.2025 in favor of my Client, promising to repay the loan on or before 15.04.2026 along with simple interest at the rate of 9% per annum.</p>
                        
                        <p className="mb-4">3. That as per the agreed terms, the loan matured on 15.04.2026. However, you failed to repay the loan or pay the interest due. My Client contacted you repeatedly through phone calls and WhatsApp messages (dated 16.04.2026, 25.04.2026, and 05.05.2026) requesting repayment. While you initially acknowledged the debt and promised to repay, you subsequently stopped responding to my Client&apos;s communications, which indicates a dishonest intention to default.</p>
                        
                        <p className="mb-4">4. That you are currently liable to pay my Client the principal amount of Rs. 5,00,000/- along with accrued interest at 9% per annum from 15.10.2025 to 10.06.2026, amounting to Rs. 29,250/-, totaling Rs. 5,29,250/-, plus Rs. 2,500/- towards advocate charges for this notice.</p>
                        
                        <p className="mb-4">5. I hereby call upon you to pay the entire outstanding sum of Rs. 5,31,750/- (Rupees Five Lakhs Thirty-One Thousand Seven Hundred and Fifty Only) to my Client within 15 (fifteen) days from the receipt of this Legal Notice, failing which I have strict instructions to initiate civil and criminal actions against you under the Indian Contract Act, 1872, the Negotiable Instruments Act, 1881, and corresponding sections of the Bharatiya Nyaya Sanhita, 2023, at your sole risk, cost, and consequence.</p>
                        
                        <p className="mb-4">Yours faithfully,</p>
                        <p className="mb-4">[Signature]<br />
                        <strong>Amitabh Sen</strong><br />
                        Advocate, Delhi High Court<br />
                        Enrollment No. D/7654/2015</p>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 rounded-2xl backdrop-blur-[2px]">
                        <span className="bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md mb-2">
                          🔒 Format Preview Locked
                        </span>
                        <button 
                          onClick={() => setIsPaymentModalOpen(true)}
                          className="bg-white hover:bg-gray-100 text-slate-900 text-[11px] font-extrabold px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
                        >
                          Unlock Custom Notice
                        </button>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-6 mb-2">Statutory Commentary on Personal Loan Notice</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      This template relies heavily on establishing two key facts: the <strong>transfer of funds</strong> and the <strong>promise to repay</strong>. 
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>
                        <strong>Pecuniary Details:</strong> By detailing the exact bank account numbers, dates, and transaction UTR numbers (Clause 2), the notice establishes an indisputable trail of money. In court, the debtor cannot claim that they never received the money.
                      </li>
                      <li>
                        <strong>Promissory Note:</strong> The reference to a Promissory Note brings the notice under the purview of Section 4 of the Negotiable Instruments Act. This allows the creditor to file a Summary Suit under Order 37 of the CPC, forcing the debtor to obtain &quot;leave to defend&quot; rather than dragging the suit through a regular civil trial.
                      </li>
                      <li>
                        <strong>BNS/IPC Threat:</strong> While default is primarily civil, Clause 3 establishes that the debtor&apos;s sudden silence and avoidance of communications point toward a dishonest intention to deceive from the inception, laying down the groundwork for a potential Cheating complaint (Section 318 BNS / 420 IPC) if the debtor continues to evade.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Sample 2: Recovery of Unpaid B2B Commercial Invoices */}
                <section id="sample-invoice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Sample 2: Recovery of Unpaid B2B Commercial Invoices
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In commercial business operations, outstanding trade receivables can paralyze cash flows. If a purchaser refuses to pay for goods delivered or services rendered under a valid tax invoice, a commercial notice is mandatory. Below is a sample draft designed for B2B transactions:
                    </p>
                    
                    <div className="relative">
                      <div className="bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl font-mono text-[11px] leading-relaxed overflow-x-auto select-none shadow-inner blur-sm pointer-events-none">
                        <p className="text-center font-bold text-xs text-red-400 mb-4">[COMMERCIAL LAW CHAMBERS LETTERHEAD - DELHI NCR OFFICE]</p>
                        <p className="mb-4">Ref. No. CLC/COM/2026/0411 <span className="float-right">Date: 10.06.2026</span></p>
                        <p className="mb-4 font-bold">BY SPEED POST &amp; EMAIL</p>
                        <p className="mb-4">To,<br />
                        The Managing Director,<br />
                        Apex Logistics Private Limited,<br />
                        Registered Office: Corporate Towers, Bandra Kurla Complex,<br />
                        Mumbai, Maharashtra - 400051<br />
                        Email: md@apexlogistics.in</p>
                        
                        <p className="mb-4 font-bold text-center">SUBJECT: STATUTORY DEMAND NOTICE FOR PAYMENT OF OUTSTANDING COMMERCIAL INVOICES AMOUNTING TO RS. 12,45,000/- (RUPEES TWELVE LAKHS FORTY-FIVE THOUSAND ONLY) WITH INTEREST AT 18% P.A.</p>
                        
                        <p className="mb-4">Dear Sir/Madam,</p>
                        <p className="mb-4">Under instructions from and on behalf of my client, <strong>M/s. Vardhman Steel Traders</strong>, a partnership firm registered under the Indian Partnership Act, 1932, having its principal place of business at Industrial Area, Phase-I, Ludhiana, Punjab (hereinafter referred to as &quot;my Client&quot;), I hereby serve this Legal Notice upon you and your directors:</p>
                        
                        <p className="mb-4">1. That my Client is engaged in the manufacturing and supply of high-grade industrial steel sheets. Your company, Apex Logistics Private Limited (hereinafter referred to as the &quot;Buyer&quot;), placed a Purchase Order (Ref. No. AL/PO/2026/012) dated 12.01.2026 for the supply of 50 metric tons of steel sheets as per specifications.</p>
                        
                        <p className="mb-4">2. That in compliance with the Purchase Order, my Client dispatched the goods via Delivery Challan No. DC/987 dated 20.01.2026. The goods were delivered to your designated warehouse in Mumbai and were accepted without any protest or quality disputes. My Client subsequently raised Tax Invoice No. GST/2026/089 dated 21.01.2026 for a total sum of Rs. 12,45,000/- (inclusive of GST), stipulating a credit period of 30 days, failing which interest at 18% p.a. would apply.</p>
                        
                        <p className="mb-4">3. That the credit period expired on 20.02.2026. Despite receiving the goods and enjoying their utility, your company failed to clear the invoice. My Client sent multiple reminders via email (dated 22.02.2026, 05.03.2026, and 20.03.2026) to your accounts department. In response, your accounts manager sent an email on 25.03.2026 acknowledging the outstanding amount and promising payment by 15.04.2026. However, no payment has been received to date.</p>
                        
                        <p className="mb-4">4. That your company has wrongfully withheld my Client&apos;s capital. Your company is liable to pay the principal of Rs. 12,45,000/- along with interest at 18% p.a. from 20.02.2026 to 10.06.2026, amounting to Rs. 67,230/-, totaling Rs. 13,12,230/-, plus Rs. 5,000/- towards notice fees.</p>
                        
                        <p className="mb-4">5. I hereby call upon you to pay the total sum of Rs. 13,17,230/- within 15 (fifteen) days from the receipt of this notice, failing which my Client will initiate recovery proceedings under the Commercial Courts Act, 2015, or file a Summary Suit under Order 37 of the CPC in Delhi High Court (having territorial jurisdiction over the place of contract execution), and initiate insolvency actions under Section 9 of the Insolvency and Bankruptcy Code, 2016, at your sole risk and cost.</p>
                        
                        <p className="mb-4">Yours faithfully,</p>
                        <p className="mb-4">[Signature]<br />
                        <strong>Vikramaditya Sharma</strong><br />
                        Senior Partner, Commercial Law Chambers<br />
                        Enrollment No. D/1043/2008</p>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 rounded-2xl backdrop-blur-[2px]">
                        <span className="bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md mb-2">
                          🔒 Format Preview Locked
                        </span>
                        <button 
                          onClick={() => setIsPaymentModalOpen(true)}
                          className="bg-white hover:bg-gray-100 text-slate-900 text-[11px] font-extrabold px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
                        >
                          Unlock Custom Notice
                        </button>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-6 mb-2">Statutory Commentary on Commercial Notice</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      Commercial B2B defaults are handled under specialized commercial statutes. The draft above is structured with specific strategic levers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>
                        <strong>MSME &amp; Interest Act:</strong> Clause 2 explicitly mentions the Invoice terms and credit period. By citing 18% p.a. interest, it leverages the <strong>Interest Act, 1978</strong>. If the seller is registered as an MSME, they can claim interest at three times the RBI bank rate under the <strong>MSMED Act, 2006</strong>, which should be explicitly stated in the draft if applicable.
                      </li>
                      <li>
                        <strong>Written Acknowledgment:</strong> Clause 3 references an email from the accounts department acknowledging the debt. This written acknowledgment is a vital shield under <strong>Section 18 of the Limitation Act</strong>, resetting the 3-year limitation clock and preventing the debtor from raising false quality disputes later in court.
                      </li>
                      <li>
                        <strong>Insolvency &amp; Commercial Suits:</strong> Clause 5 threatens two primary remedies: a Summary Suit (Order 37 CPC) and an Insolvency Petition under <strong>Section 9 of the Insolvency and Bankruptcy Code (IBC)</strong>. For corporate entities, the threat of insolvency (which can lead to the company being taken over by an IRP) is a massive deterrent, often forcing immediate out-of-court settlement.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Sample 3: Recovery of Freelancer & Agency Fees */}
                <section id="sample-freelancer" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Sample 3: Recovery of Freelancer &amp; Agency Fees
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Freelancers, software designers, and media agencies often operate without formal stamp-paper agreements, relying instead on email work proposals or WhatsApp agreements. Below is a sample draft designed for recovering unpaid fees in the gig economy:
                    </p>
                    
                    <div className="relative">
                      <div className="bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl font-mono text-[11px] leading-relaxed overflow-x-auto select-none shadow-inner blur-sm pointer-events-none">
                        <p className="text-center font-bold text-xs text-red-400 mb-4">[LEGAL RECOVERY PARTNERS - ADVOCATES &amp; SOLICITORS]</p>
                        <p className="mb-4">Ref. No. LRP/FR/2026/088 <span className="float-right">Date: 10.06.2026</span></p>
                        <p className="mb-4 font-bold">BY EMAIL &amp; WHATSAPP DELIVERED</p>
                        <p className="mb-4">To,<br />
                        The CEO &amp; Founders,<br />
                        Novus Tech Solutions LLP,<br />
                        B-305, Co-working Hub, Sector 62,<br />
                        Noida, Uttar Pradesh - 201301<br />
                        Email: contact@novustech.in</p>
                        
                        <p className="mb-4 font-bold text-center">SUBJECT: LEGAL NOTICE FOR PAYMENT OF UNPAID WEB DEVELOPMENT AND CONSULTING FEES OF RS. 1,50,000/- (RUPEES ONE LAKH FIFTY THOUSAND ONLY)</p>
                        
                        <p className="mb-4">Dear Sir/Madam,</p>
                        <p className="mb-4">Under instructions from and on behalf of my client, <strong>Ms. Riya Sen</strong>, residing at Flat 104, Block-C, Dwarka Sector 10, New Delhi - 110075 (hereinafter referred to as &quot;my Client&quot;), I hereby serve this Legal Notice upon your firm and its active partners:</p>
                        
                        <p className="mb-4">1. That my Client is a professional independent Full-Stack Web Developer. Your firm Novus Tech Solutions LLP, through its partner Mr. Sameer Mehta, approached my Client in November 2025 to develop a custom e-commerce website. The scope of work, timelines, and payment terms were agreed upon via email correspondence dated 15.11.2025 and subsequent WhatsApp chats.</p>
                        
                        <p className="mb-4">2. That the agreed fee was Rs. 3,00,000/-, split into 50% advance (Rs. 1,50,000/-) and 50% upon successful delivery and hosting of the website. Your firm paid the advance of Rs. 1,50,000/- via bank transfer on 18.11.2025, and my Client initiated the project.</p>
                        
                        <p className="mb-4">3. That my Client completed the website development and successfully hosted it on your staging server on 15.01.2026. On 18.01.2026, Mr. Sameer Mehta sent an email confirming that the design and functionality were satisfactory and authorized the website to go live on your primary domain. My Client complied, and the website went live on 20.01.2026. My Client raised final Invoice No. RS/2026/015 for Rs. 1,50,000/- on 20.01.2026, with a payment deadline of 10 days.</p>
                        
                        <p className="mb-4">4. That since 30.01.2026, your firm has failed to clear the final payment. When my Client followed up via WhatsApp, Mr. Sameer Mehta sent messages claiming client payment delays. My Client has preserved all WhatsApp chats and email acknowledgments. Your firm has enjoyed the full commercial utility of the website developed by my Client while withholding her legitimate dues, which constitutes an illegal enrichments.</p>
                        
                        <p className="mb-4">5. I hereby call upon your firm and partners to pay the outstanding final fee of Rs. 1,50,000/- along with interest at 12% p.a. from 30.01.2026 to 10.06.2026, amounting to Rs. 6,500/-, totaling Rs. 1,56,500/-, along with Rs. 2,000/- towards legal notice drafting charges, within 15 days from the receipt of this notice, failing which my Client will file a civil suit for breach of contract and quantum meruit, and file a complaint for cheating under Section 318 BNS (420 IPC) in Delhi courts.</p>
                        
                        <p className="mb-4">Yours faithfully,</p>
                        <p className="mb-4">[Signature]<br />
                        <strong>Pooja Deshmukh</strong><br />
                        Partner, Legal Recovery Partners<br />
                        Enrollment No. MAH/4321/2018</p>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 rounded-2xl backdrop-blur-[2px]">
                        <span className="bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md mb-2">
                          🔒 Format Preview Locked
                        </span>
                        <button 
                          onClick={() => setIsPaymentModalOpen(true)}
                          className="bg-white hover:bg-gray-100 text-slate-900 text-[11px] font-extrabold px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
                        >
                          Unlock Custom Notice
                        </button>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-6 mb-2">Statutory Commentary on Gig Economy Notice</h3>
                    <p className="text-sm text-slate-650 leading-relaxed">
                      Gig workers and independent agencies often worry that the lack of a stamp-paper agreement prevents them from taking legal action. This notice template demonstrates how digital contracts are enforced:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>
                        <strong>Electronic Contract Enforceability:</strong> Section 10A of the <strong>Information Technology Act, 2000</strong> explicitly states that contracts formed electronically (via email, WhatsApp, or chat) are legally valid. Clause 1 establishes that the contract was formed via email.
                      </li>
                      <li>
                        <strong>Quantum Meruit:</strong> Clause 4 states that the firm is actively using the website. Under <strong>Section 70 of the Indian Contract Act</strong>, if a person lawfully does anything for another person or delivers anything to them, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the latter is bound to make compensation. Even without a formal contract, the debtor must pay for work accepted.
                      </li>
                      <li>
                        <strong>Liability of Partners:</strong> Novus Tech Solutions is an LLP. The notice is addressed to the LLP and the partners personally, leveraging <strong>Section 27 and 28 of the LLP Act, 2008</strong>, to ensure the partners cannot hide behind the corporate entity if personal misconduct or misappropriation is involved.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Clause-by-Clause Legal Anatomy */}
                <section id="legal-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Clause-by-Clause Legal Anatomy
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To draft or customize a legal notice correctly, one must understand the specific legal purpose behind every block of text. A standard legal notice is divided into distinct sections, each holding statutory importance:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">1. Advocate Letterhead &amp; Dispatch Date</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The advocate&apos;s official letterhead establishes professional credibility. The date listed on the notice is critical because it marks the start of the statutory notice timeline. It is also used to calculate the exact interest accrual and determines the limitation period timeline.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">2. Service Method &amp; Addresses</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Indicating &quot;BY SPEED POST&quot; or &quot;BY REGISTERED POST WITH AD&quot; is necessary to satisfy the court that the notice was sent through legally recognized channels. The addresses of the debtor must be exact. In corporate defaults, sending notices to the registered office address as listed on the MCA (Ministry of Corporate Affairs) portal is a statutory requirement to serve a corporate entity validly.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">3. The Statement of Instructions</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A legal notice must always state that the advocate is acting &quot;under instructions from and on behalf of&quot; their client. An advocate cannot send a recovery notice in their own personal capacity. This statement creates the formal relationship of attorney and client, protecting the advocate and confirming the client&apos;s authorization.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">4. Chronology of Facts &amp; Contract Terms</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          This is the core of the notice. It must outline the contract, the dates, the bank accounts, the invoices, and the performance of obligations. It should show that the creditor did everything required, and the default lies entirely with the debtor. Vague phrases like &quot;you owe some money&quot; are legally useless; the notice must specify the exact transaction details.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">5. The Statement of Default and Silences</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          You must prove that the debtor has defaulted. Outline the dates of reminders, emails, and phone calls. If the debtor promised to pay and defaulted, cite those messages. This proves to the court that the debtor is not merely facing a delay but has intentionally withheld your capital.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">6. The Specific Notice Period (15 Days)</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The notice must grant the debtor a specific notice period—usually 15 days—to repay. This notice period is a mandatory buffer under civil law. If you file a suit before the notice period expires, the court can dismiss your case on the grounds of premature filing.
                        </p>
                      </div>

                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">7. The Consequence &amp; Legal Threat Clause</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          This clause outlines the exact lawsuits and complaints you will file if they fail to comply. It mentions civil suits (Order 37 Summary Suits), criminal breach of trust, or insolvency actions. It must state that the debtor will be held liable for all court fees, advocate charges, and damages, creating financial pressure.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Mistakes to Avoid in Customization */}
                <section id="customization-mistakes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Mistakes to Avoid in Customization
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Customizing a sample legal notice without professional guidance can lead to serious legal errors that can ruin your recovery chances. At LegalRecovery, we regularly review self-drafted notices and identify several critical mistakes that creditors must avoid:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Vague Calculations:</strong> You must state the exact principal and interest due down to the last rupee. Saying &quot;around Rs. 5 Lakhs&quot; or &quot;along with appropriate interest&quot; makes the notice legally deficient. If the matter goes to a Summary Suit under Order 37, the court requires a liquidated (exact) sum to pass a decree.
                      </li>
                      <li>
                        <strong>Incorrect Notice Period:</strong> Giving less than 15 days for a response is a common error. The debtor&apos;s advocate will easily claim in court that their client was not given a reasonable opportunity to reply or clear the dues, which can lead to the judge denying you the recovery of legal costs.
                      </li>
                      <li>
                        <strong>Confusing Civil Breach with Criminal Cheating:</strong> Many self-drafted notices threaten the debtor with immediate arrest. Under Indian law, a simple inability to pay a debt is a civil contract breach, not cheating. Citing criminal sections without proof of dishonest intention at the inception of the transaction can lead to the debtor filing a harassment counter-claim or getting your criminal complaint quashed by the High Court.
                      </li>
                      <li>
                        <strong>Incorrect Corporate Service:</strong> If you are recovering money from a company, sending the notice only to a manager or HR is invalid. The notice must be served at the registered office of the company as listed on the MCA portal, and addressed to the Managing Director or CEO. If served incorrectly, the company can claim they never received the notice.
                      </li>
                      <li>
                        <strong>Failing to Keep Service Proof:</strong> Creditors often lose the postal speed post receipts or tracking reports. Without these receipts, you cannot prove to the judge that the notice was successfully served. Keep physical receipts and print out the delivery tracking reports from the India Post website as soon as the notice is delivered.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Reviews & Case Studies */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Reviews &amp; Case Studies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, we have successfully resolved hundreds of complex recovery disputes using customized notice formats. Below are representative examples of how the right draft template resolved payment defaults:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Friendly Loan Default Resolved</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3 Lakhs from Friend</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A client in Hyderabad lent ₹3 Lakhs via UPI bank transfer to a childhood friend. After a year of evasion, the client downloaded our loan recovery template. Realizing the complexity of promissory notes and jurisdiction clauses, they hired our platform to customize and serve the notice. Our advocate digitally dispatched the notice to the debtor&apos;s email and WhatsApp. The friend contacted the client within 5 days of delivery, apologized, and cleared the debt.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Freelance Agency Settlement</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.5 Lakhs Unpaid retainer</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A boutique design agency in Mumbai delivered a brand identity kit to a client. The client stopped responding to emails and withheld the final ₹1.5 Lakhs retainer. Using our gig economy service contract template, our legal panel drafted a notice outlining the electronic contract validity and the doctrine of quantum meruit. The notice was served via email and WhatsApp. The client settled the dues in full to avoid a public commercial suit.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviewSchema.review.map((rev, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-amber-500 text-sm">★</span>
                            ))}
                          </div>
                          <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
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
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Need a Custom Notice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Don&apos;t rely on generic templates. Discuss your case with legal experts. We draft and serve professionally vetted notices tailored to your transaction.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Draft Notice Now
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
