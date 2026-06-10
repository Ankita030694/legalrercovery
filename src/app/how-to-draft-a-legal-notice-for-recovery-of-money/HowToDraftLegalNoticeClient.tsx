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
    question: "Do I need stamp paper to draft and send a legal notice for money recovery?",
    answer: "No, a legal notice for the recovery of money does not need to be printed on stamp paper. Under Indian law, a legal notice is printed on the official letterhead of the practicing advocate who is issuing it. Stamp papers are reserved for executing contracts, deeds, and affidavits, not for demand notices."
  },
  {
    question: "Can I draft and send a money recovery notice myself without a lawyer?",
    answer: "Yes, you can legally draft and send a demand letter yourself. However, it is not recommended for court-admissible purposes. A notice sent on an advocate's official letterhead carries professional weight, signals serious intent, and ensures all statutory citations (like the Interest Act and Contract Act) are correctly drafted. Most debtors ignore self-sent notices, whereas an advocate-sent notice yields an 80%+ response rate."
  },
  {
    question: "What is the standard font size and spacing for drafting legal documents in India?",
    answer: "Historically, green ledger paper was used with typewriter formatting. Today, following directives from the Supreme Court and High Courts, the accepted standard is standard white A4-size paper, printed on both sides. The recommended font is Times New Roman or Garamond, size 14, with double line spacing (or 1.5 line spacing) and margins of 3.5 cm at the top/bottom, 4 cm on the left, and 2 cm on the right."
  },
  {
    question: "Is it necessary for the client to sign the legal notice alongside the advocate?",
    answer: "While it is not strictly mandatory for the client to sign a notice served through an advocate, it is a highly recommended best practice in Indian legal chambers. Having the client sign the notice (usually under a statement like 'Reviewed and confirmed by me') prevents the client from later disowning the claims in court and prevents the debtor from claiming the advocate acted without proper authority."
  },
  {
    question: "What happens if I write the wrong default date in the notice?",
    answer: "Writing an incorrect default date is a critical mistake. Under the Limitation Act, 1963, you have a strict 3-year limitation window to file a recovery suit from the date the default occurred (cause of action). If you state an incorrect default date, the debtor can use it in court to argue that your suit is time-barred. Always verify default dates with bank statements or ledger logs before drafting."
  },
  {
    question: "How do I calculate and draft the interest claim in a recovery notice?",
    answer: "If your contract has an agreed interest clause (e.g., 18% p.a. for commercial invoices), specify that rate. If there is no written contract or the contract is silent on interest, you must invoke the Interest Act, 1978. Draft a clause stating that you are demanding simple interest at a standard market rate (usually 9% to 12% p.a.) calculated from the date the payment became due until actual realization."
  },
  {
    question: "Can I send a legal notice in Hindi or local regional languages?",
    answer: "Yes, a legal notice can be drafted and sent in any language that the recipient understands. However, English is the most common language used for B2B commercial disputes and corporate matters. For local or individual disputes in states where the regional language is dominant, drafting in the local language (like Hindi, Marathi, or Tamil) is effective and ensures the debtor cannot claim they didn't understand the notice."
  },
  {
    question: "How do I draft a notice if the debtor is a partnership firm?",
    answer: "When drafting a notice to a partnership firm, you must address it to the partnership entity itself and also name all the active partners personally ('jointly and severally'). addressed as: 'To, M/s [Firm Name] through its partner Mr. A and Partner Mr. B'. This ensures that the partners cannot escape personal liability by hiding behind the firm's name."
  },
  {
    question: "What does 'Without Prejudice' mean in a legal notice draft?",
    answer: "Writing 'Without Prejudice' at the top of a legal draft means that any settlement offers, admissions, or concessions made in the communication cannot be used as evidence against you in court if the negotiations fail. It protects your rights to pursue full claims in subsequent trials if the debtor rejects the settlement."
  },
  {
    question: "How do I specify the compliance notice period in the draft?",
    answer: "You must give the debtor a clear compliance period, which is typically fifteen (15) days from the date of receipt of the notice. For specific laws like Section 138 of the NI Act (cheque bounce), a 15-day notice period is a strict statutory requirement. For general money recovery, a 15-day or 21-day period is standard."
  },
  {
    question: "Can I claim the advocate's drafting fees from the debtor in the notice?",
    answer: "Yes. It is standard legal practice to include a clause demanding that the debtor pay the advocate's drafting and dispatch charges (usually quantified as a flat fee, e.g., ₹2,500 to ₹5,500) because their default forced you to incur legal expenses. While they may negotiate this during settlement, it serves as a strong point of leverage."
  },
  {
    question: "What if the debtor refuses to sign the acknowledgment of the physical notice?",
    answer: "If the debtor refuses to accept delivery of the Speed Post or Registered Post envelope, the post office will return it with a remarks slip ('Refused' or 'Not Claimed'). Under Section 27 of the General Clauses Act, 1897, a refused post is deemed to be validly served ('constructive service'). Keep the unopened returned envelope safely; the court will accept it as proof of service."
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
      "name": "How to Draft a Legal Notice",
      "item": "https://www.legalrecovery.in/how-to-draft-a-legal-notice-for-recovery-of-money"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Draft a Legal Notice for Recovery of Money: Step-by-Step Writing Guide",
  "description": "Learn the legal syntax, paragraph formatting, essential clauses, statutory references, and formatting rules to draft an enforceable money recovery legal notice in India.",
  "image": "https://www.legalrecovery.in/og-how-to-draft-notice.png",
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
  "name": "Legal Notice Drafting Assistant",
  "image": "https://www.legalrecovery.in/og-how-to-draft-notice.png",
  "description": "Professional advocate-verified legal notice drafting assistance and template structures for debt recovery under Indian law.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1040"
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
        "name": "Sanjay Deshmukh"
      },
      "reviewBody": "As a small business owner, I was struggling to draft notices for invoice collections. This guide explained the exact clauses to write under the Interest Act. LegalRecovery drafted the notice on advocate letterhead, and we got our ₹1.8L dues paid."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Sundaram"
      },
      "reviewBody": "The explanation of 'Under Instructions' and 'Without Prejudice' clauses was eye-opening. I draft contracts and notices for my agency, and this detailed guide has become my primary template reference. Highly precise legal writing advice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kunal Kapoor"
      },
      "reviewBody": "I sent a notice myself last year and it got rejected because I got the default date wrong. This guide showed me exactly how the Limitation Act is impacted by the default date. I used LegalRecovery to redraft it professionally, and it worked."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tanvi Rastogi"
      },
      "reviewBody": "Super helpful formatting guidelines. I didn't know about the Supreme Court directive on A4 paper printing. The text templates for friendly loans and invoice collections are highly practical. Excellent resource."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Verma"
      },
      "reviewBody": "The segment on drafting partnership and corporate notices helped me address the notice to the directors personally. The pressure worked wonders, and they cleared my dues within 10 days of service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepa Nair"
      },
      "reviewBody": "Clear, step-by-step breakdown of how a legal notice is structured. The template for claiming interest under the Interest Act 1978 was exactly what I needed. Professional drafting made easy."
    }
  ]
};

export default function HowToDraftLegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction & Formatting Standards" },
    { id: "anatomy", title: "Anatomy of a Money Recovery Notice" },
    { id: "clauses", title: "Drafting Clauses for Different Debts" },
    { id: "statutes", title: "Key Legal Terms & Statutory Bases" },
    { id: "mistakes", title: "Critical Drafting Mistakes to Avoid" },
    { id: "how-platform-works", title: "How LegalRecovery Simplifies Drafting" },
    { id: "testimonials", title: "Success Stories & Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "How to Draft a Legal Notice", href: "/how-to-draft-a-legal-notice-for-recovery-of-money" },
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
              Professional Drafting &amp; Writing Manual
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              How to Draft a <span className="text-[#DC2626]">Legal Notice for Recovery of Money</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Master the art of legal drafting: learn essential clauses, statutory frameworks (Section 73 Contract Act, Interest Act 1978), professional formatting standards, and terminology.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Draft My Notice Now
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
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
                
                {/* Introduction & Formatting Standards */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Introduction &amp; Formatting Standards
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal drafting is a highly structured discipline where the choice of words, punctuation, and structural alignment directly affects the enforceability of your claims in court. A legal notice for the recovery of money is not merely a request for payment; it is a formal, statutory communication that creates a legal record. If drafted poorly, it can expose you to counter-claims, compromise your position under the Limitation Act, or lead to the dismissal of subsequent lawsuits due to procedural errors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Before examining the text of the notice, you must understand the physical and digital <strong>formatting standards</strong> observed in Indian legal practice. While there is a traditional preference for certain layouts, modern guidelines have significantly streamlined formatting:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">1. Paper Selection: Green Ledger vs. White A4</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Historically, advocate offices drafted notices on green ledger paper (8.5&quot; x 14&quot; legal size) because of its durability. However, this is a custom rather than a statutory requirement. In recent years, the <strong>Supreme Court of India</strong> and several High Courts (such as Delhi, Bombay, and Calcutta High Courts) have issued administrative circulars mandating the use of standard white A4-size paper (printed on both sides) to reduce environmental impact and maintain uniform records. In professional practice, printing the notice on high-quality white A4 paper using the advocate&apos;s official letterhead is the accepted standard.
                        </p>
                      </div>
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">2. Margins, Typography, and Spacing</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          To ensure readability and space for court stampings, adhere to standard judicial margins: a margin of 3.5 cm (1.37 inches) at the top and bottom, 4.0 cm (1.57 inches) on the left side, and 2.0 cm (0.78 inches) on the right side. The standard font is <strong>Times New Roman</strong> or <strong>Garamond</strong> with a font size of 14 points for the body text. Line spacing should be set to double spacing (2.0) or 1.5 spacing, and paragraphs must be fully justified to present a neat, professional layout.
                        </p>
                      </div>
                      <div className="border-l-4 border-[#DC2626] pl-4">
                        <p className="text-sm text-slate-700 leading-relaxed font-bold">3. Advocate Letterhead Requirement</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          For a legal notice to carry formal legal weight, it must be printed on the official letterhead of a practicing advocate registered with the Bar Council of India. The letterhead must display the advocate&apos;s name, enrollment number, office address, contact numbers, and email. While you can send a demand notice yourself, a notice sent under an advocate&apos;s stamp shows the debtor that you have initialized the formal litigation pipeline.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Anatomy of a Money Recovery Notice */}
                <section id="anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    The Anatomy of a Money Recovery Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every well-drafted legal notice for money recovery must follow a precise structure. Omitting any of these sections can weaken the document&apos;s legal validity. The drafting anatomy consists of six core modules:
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">Module 1: The Address Block &amp; Reference details</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          At the top left, under the letterhead, specify the reference number (e.g., Ref: AD/2026/MR-104) and the exact date of dispatch. Below this, state the delivery method (e.g., &quot;BY SPEED POST WITH AD&quot; or &quot;BY REGISTERED POST&quot;). Address the notice directly to the debtor using their full legal name, parentage (if available), and complete physical address. If the debtor is a company, it must be addressed to the company through its active directors or authorized signatories.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">Module 2: The Client Authorization Statement (&quot;Under Instructions&quot;)</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The draft must begin with a formal statement of authorization. This clause establishes that the advocate is acting as an agent on behalf of the client and that the facts detailed are based on the client&apos;s instructions. A standard opening phrase is: <em>&quot;Under instructions from and on behalf of my client [Client&apos;s Name], residing at [Address], I hereby serve you with the following legal notice...&quot;</em>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">Module 3: Numbered Chronology of Facts</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The facts must be presented in chronological order using numbered paragraphs. Begin by defining the relationship between the parties (e.g., debtor-creditor, supplier-buyer, employer-employee). Detail when the transaction took place, the date the agreement was signed, how the funds were transferred (citing bank transactions or invoice numbers), and the date the payment was supposed to be returned.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">Module 4: The Default and Liability Quantification</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Clearly identify the exact date the debtor defaulted on the payment. State the total outstanding amount, separating the <strong>Principal Outstanding</strong> from the <strong>Interest Accrued</strong>. You must specify the interest rate and the statutory basis for claiming interest (e.g. contractual terms or Interest Act, 1978). Detail all subsequent reminders (emails, messages, calls) sent to the debtor that went unanswered.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">Module 5: The Demand and 15-Day Notice Period</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The notice must contain a clear, unambiguous demand calling upon the debtor to pay the total quantified amount within a specific notice period — typically <strong>fifteen (15) days</strong> from the receipt of the notice. It must state that the notice period is a final opportunity to settle the debt and avoid litigation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">Module 6: Signature and Confirmed Sign-off</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          The notice must be signed by the advocate. Additionally, we strongly recommend including a <strong>Client Sign-off Block</strong> at the bottom of the last page, stating: <em>&quot;The contents of this legal notice have been read by me/explained to me, and I confirm the same to be true and correct.&quot;</em> followed by the client&apos;s signature. This prevents the debtor from claiming in court that the advocate drafted unauthorized claims.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Drafting Clauses for Different Debts */}
                <section id="clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Drafting Clauses for Different Debts
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Different types of outstanding money require different drafting approaches and statutory references. Below are three code-like legal clause templates illustrating how to draft demand clauses for friendly loans, commercial receivables, and gig economy payments:
                    </p>

                    <div className="space-y-6">
                      
                      {/* Friendly Loan Drafting Clause */}
                      <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl font-mono text-xs border border-slate-800 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-[#DC2626] font-bold">CLAUSE TEMPLATE: FRIENDLY LOAN RECOVERY</span>
                          <span className="text-slate-500">Interest Act, 1978</span>
                        </div>
                        <p className="leading-relaxed">
                          &quot;That my Client, out of goodwill and friendly relations, advanced a personal loan of Rs. [Amount] to you on [Date] via [Bank Transfer/Cheque]. You had promised to repay the said loan by [Due Date]. However, you failed to repay the same on the due date. Under the provisions of the Interest Act, 1978, my Client hereby demands interest at the rate of 9% per annum from the date the debt became due (i.e. [Due Date]) until actual realization. You are hereby called upon to pay the principal sum of Rs. [Amount] and accrued interest of Rs. [Interest Amount] totaling Rs. [Total] within 15 days of this notice.&quot;
                        </p>
                      </div>

                      {/* Commercial B2B Invoice Drafting Clause */}
                      <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl font-mono text-xs border border-slate-800 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-[#DC2626] font-bold">CLAUSE TEMPLATE: B2B COMMERCIAL INVOICES</span>
                          <span className="text-slate-500">Contract Terms / MSMED Act</span>
                        </div>
                        <p className="leading-relaxed">
                          &quot;That my Client supplied goods under Purchase Order [PO Number] and raised Invoice No. [Invoice Number] dated [Date] for Rs. [Invoice Value]. The terms of the invoice explicitly state that payments delayed beyond 30 days attract interest at 18% per annum. [OR: My Client is a registered MSME unit under UDYAM-[Number], and under Section 16 of the MSMED Act, 2006, you are liable to pay compound interest with monthly rests at three times the bank rate notified by the RBI]. You have failed to clear the principal invoice sum of Rs. [Amount]. You are hereby called upon to pay Rs. [Amount] plus commercial interest of Rs. [Interest] within 15 days.&quot;
                        </p>
                      </div>

                      {/* Freelancer Retainer Drafting Clause */}
                      <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl font-mono text-xs border border-slate-800 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-[#DC2626] font-bold">CLAUSE TEMPLATE: GIG ECONOMY &amp; RETAINERS</span>
                          <span className="text-slate-500">Section 70 / Quantum Meruit</span>
                        </div>
                        <p className="leading-relaxed">
                          &quot;That my Client rendered professional services as a software developer as per the Retainer Agreement dated [Date]. My Client delivered the milestones on [Date], which were accepted by your team via email. However, you have withheld the final milestone payment of Rs. [Amount] citing arbitrary quality issues post-delivery. Under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit), my Client is entitled to receive fair compensation for the services rendered. You are called upon to clear the outstanding retainer fee of Rs. [Amount] along with legal drafting costs of Rs. [Fee] within 15 days.&quot;
                        </p>
                      </div>

                    </div>
                  </div>
                </section>

                {/* Key Legal Terms & Statutory Bases */}
                <section id="statutes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Key Legal Terms &amp; Statutory Bases
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To draft a legally sound notice, you must understand the statutory provisions and phrases that form the legal foundation of a recovery claim in India. These include:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Section 73 of the Indian Contract Act, 1872</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          This section entitles you to receive compensation from the defaulting party for any loss or damage caused by their breach of contract. The draft must show that the debtor&apos;s failure to pay is a direct breach of contract, and you are claiming the outstanding money as direct damages. Section 73 does not allow claims for indirect or remote losses, so focus strictly on the debt principal and direct interest.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. The Interest Act, 1978 (Notice Prerequisite)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If your contract does not mention interest, you cannot demand interest in court unless you have served a <strong>prior written notice</strong> containing an interest demand. Under the Interest Act, 1978, you must state in your notice that you are claiming interest at a specific rate from the date of the notice (or the default date) until actual payment. This clause is a mandatory prerequisite for the court to grant pre-suit interest.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Section 27 of the General Clauses Act, 1897</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          This provision covers the presumption of service. If a legal notice is addressed correctly, prepaid, and dispatched via Registered Post or Speed Post, the law presumes that delivery has been completed. Even if the debtor refuses the envelope or leaves it unclaimed, the court treats it as constructive service under Section 27.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For digital service (via email or WhatsApp double blue ticks), you must cite Section 63 of the BSA, 2023 (which replaced Section 65B of the Indian Evidence Act). When filing subsequent suits, your advocate must submit a Section 63 BSA certificate to make screenshots of the digital delivery admissible.
                        </p>
                      </div>
                    </div>

                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Drafting Phrase</th>
                            <th className="p-3">Legal Meaning / Usage</th>
                            <th className="p-3">Statutory Relevance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Under Instructions</td>
                            <td className="p-3">Establishes that the advocate is acting as an authorized agent for the client.</td>
                            <td className="p-3">Code of Civil Procedure, Order 3</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Without Prejudice</td>
                            <td className="p-3">Any compromise or settlement terms proposed cannot be used against you in court.</td>
                            <td className="p-3">Indian Evidence Act, Section 23</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Jointly and Severally</td>
                            <td className="p-3">Used when addressing multiple debtors (partners/directors) to hold all or any of them liable.</td>
                            <td className="p-3">Indian Contract Act, Section 43</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Cause of Action</td>
                            <td className="p-3">The factual ground (default of payment) that gives you the right to sue.</td>
                            <td className="p-3">Limitation Act, 1963</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Critical Drafting Mistakes to Avoid */}
                <section id="mistakes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Critical Drafting Mistakes to Avoid
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly drafted notice can damage your recovery prospects before you even reach the courtroom. When drafting, make sure to avoid these five common errors:
                    </p>

                    <ul className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Mistake 1: Omitting the Date of Default:</strong> 
                        Failing to state the exact date the debt became due makes it difficult to calculate the 3-year limitation window under the Limitation Act. The debtor can claim that the debt is older and time-barred.
                      </li>
                      <li>
                        <strong>Mistake 2: Missing Interest Claims:</strong> 
                        If you fail to claim interest or specify the rate in the notice, you may lose the legal right to claim interest for the pre-suit period under the Interest Act, 1978.
                      </li>
                      <li>
                        <strong>Mistake 3: Targeting the Wrong Entity:</strong> 
                        If the debtor is a company, the notice must be addressed to the registered company name (e.g. &quot;Acme Tech Pvt Ltd&quot;) and not just a brand name. Addressing the notice incorrectly makes it legally invalid.
                      </li>
                      <li>
                        <strong>Mistake 4: Setting Too Short a Notice Period:</strong> 
                        Indian courts require giving the debtor a reasonable time to comply — standardly fifteen (15) days. For statutory filings like cheque bounces (Section 138 NI Act), giving less than 15 days will result in the immediate dismissal of the case.
                      </li>
                      <li>
                        <strong>Mistake 5: Making Detrimental Admissions:</strong> 
                        Do not include statements that suggest you accepted defective goods, agreed to waive payments, or admitted to personal defaults. Every statement in the notice must be carefully vetted.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* How LegalRecovery Simplifies Drafting */}
                <section id="how-platform-works" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    How LegalRecovery Simplifies Drafting
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Drafting a legally sound notice requires precision and an understanding of statutory details. Our <strong>LegalRecovery</strong> engine simplifies this process, connecting you with verified legal professionals and automating the drafting workflow:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">1</span>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Secure Information Submission</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Fill out our structured questionnaire, detailing the transaction dates, default amount, and debtor coordinates. Upload your invoices, agreements, bank receipts, and digital records (WhatsApp/email logs) to our secure, encrypted dashboard.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">2</span>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Advocate Assignment &amp; Vetting</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Your case is assigned to a practicing advocate from our partner panel who specializes in money recovery. They vet your evidence, structure the chronology of facts, calculate interest, and draft a notice on their official letterhead.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">3</span>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Draft Review &amp; Approval</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          The draft notice is shared with you for approval on your dashboard. You can review the details, suggest corrections, and confirm that the facts are stated accurately before the document is finalized.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">4</span>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 m-0">Dispatch &amp; Digital Tracking</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Once approved, the notice is signed by the advocate and dispatched via Speed Post. Concurrently, it is served digitally via verified email and WhatsApp. You receive real-time updates and India Post tracking details directly on your dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Success Stories & Reviews */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Success Stories &amp; Reviews
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Using a professional, advocate-drafted notice has helped hundreds of clients recover outstanding money without resorting to expensive lawsuits. Below are three representative case studies:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 1: Friendly Loan Dispute</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.5 Lakhs personal loan</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A lender in Pune had given a ₹3.5L friendly loan. The borrower went silent. We audited the bank transfer logs and drafted a notice on advocate letterhead. The borrower settled the loan within a week.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 2: Trade Receivable Recovery</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹6.8 Lakhs invoice dues</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A manufacturer in Gujarat faced defaults on B2B invoices. We drafted a notice citing Interest Act provisions and served it on the buyer. The buyer cleared the outstanding dues to avoid litigation.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case 3: Freelance Contract Payout</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.2 Lakhs milestone dues</h4>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          A developer in Mumbai was denied payment for app delivery. We drafted a notice invoking Section 70 Contract Act and served it via WhatsApp/Speed Post. The client settled the invoice shortly after.
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
                <h3 className="text-sm font-black mb-3">Need Legal Support?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We handle the entire recovery notice process for you, from evidence audit and advocate drafting to dispatching and tracking.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Setup
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
