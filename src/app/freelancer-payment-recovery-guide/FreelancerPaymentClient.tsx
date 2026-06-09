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
    question: "Do freelancers in India have the same legal rights to payment as full-time employees?",
    answer: "No, they have different but equally powerful rights. Full-time employees are protected under labor laws (such as the Payment of Wages Act or Shops and Establishments Act). Freelancers and independent contractors, however, are governed by commercial and contract law (the Indian Contract Act, 1872). While freelancers cannot approach the Labour Commissioner directly, they can recover payments through Summary Suits, MSME Samadhan (if registered), or civil recovery suits. The legal process for commercial recovery is often faster because it is based on transactional records like invoices and deliverables rather than subjective employment factors."
  },
  {
    question: "Is an email agreement or verbal contract legally binding for a freelance project in India?",
    answer: "Yes, absolutely. Under Section 10 of the Indian Contract Act, 1872, oral agreements and email confirmations are fully valid contracts, provided there is free consent, competent parties, lawful consideration, and a lawful object. A formal, signed paper agreement is not mandatory. If you have an email thread outlining the scope of work, budget, and delivery timelines, and a reply from the client saying 'Please proceed', it constitutes a legally binding contract. Digital communications are fully admissible in court."
  },
  {
    question: "Can I register as an MSME as an individual freelancer, and how does it help with payment recovery?",
    answer: "Yes. Freelancers, proprietary consultants, and individual professionals can register on the government's Udyam portal under the Micro, Small, and Medium Enterprises (MSME) category for free. Once registered, you are protected under the MSMED Act, 2006. If a client defaults on payment beyond 45 days, you can file a case directly on the MSME Samadhan portal. The client will be legally liable to pay compound interest at three times the RBI bank rate on the delayed payment, representing a massive deterrent against payment delays."
  },
  {
    question: "Can a client refuse to pay by claiming the work quality was 'not up to expectations' after delivery?",
    answer: "Only if they raised a formal objection immediately upon delivery. Under contract law, if a client receives a deliverable, integrates it, uses it for their business, or remains silent for a reasonable period, it constitutes 'deemed acceptance'. A client cannot retroactively claim poor performance as an afterthought to avoid paying a long-overdue invoice. If they have used your work product, they are legally bound to pay for it under the doctrine of quantum meruit (payment for work done)."
  },
  {
    question: "What should I do if a client revokes my access to Figma, Slack, or GitHub after I deliver the work without payment?",
    answer: "This is a common client tactic. First, ensure you have taken screenshots of your active work product, submission logs, and client approval messages on those platforms before access is cut. Under Section 70 of the Indian Contract Act, 1872, a person who does a non-gratuitous act (like software development or design) is entitled to compensation. Revoking access without payment represents unjust enrichment. The digital trail showing you submitted the work and they received it is sufficient to secure a court decree."
  },
  {
    question: "Can I legally stop a client from using my work product if they have not cleared my invoice?",
    answer: "Yes. Unless your contract explicitly states that intellectual property (IP) transfers upon *creation*, the standard legal position is that IP rights transfer to the client only upon *full payment*. If the client uses your designs, code, copy, or strategies without clearing your dues, they are guilty of copyright infringement. You can send a cease-and-desist legal notice demanding they take down the work, and file for an injunction in court, which can freeze their websites or applications."
  },
  {
    question: "What is the time limit (limitation period) to file a lawsuit against a client for unpaid freelance dues?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or a Summary Suit (Order 37 CPC) for unpaid commercial invoices is three (3) years. This clock starts ticking from the date the invoice became overdue (the payment due date listed on the invoice) or from the date the client last acknowledged the debt in writing (such as an email saying 'We will clear this invoice next month')."
  },
  {
    question: "Can I send a legal notice to an international client who has defaulted on payments?",
    answer: "Yes, you can serve a legal notice to an international client. The notice is served via official email and international registered post to their corporate headquarters. It must cite the governing law specified in your contract (usually Indian law if you are based in India and the contract is silent) and international commercial principles. International companies are highly sensitive to legal compliance and brand reputation, and a formal notice on advocate letterhead often prompts their legal department to process the settlement to avoid cross-border disputes."
  },
  {
    question: "How does a Summary Suit (Order 37 CPC) differ from a regular civil recovery suit?",
    answer: "A regular civil suit can take years as the defendant can delay proceedings with endless replies. A Summary Suit under Order 37 of the CPC is a fast-track procedure specifically for recovery of liquidated debts (such as unpaid invoices). Once summons are served, the client must enter an appearance within 10 days and seek the court's 'leave to defend'. The court will deny leave unless they have a genuine, substantial defense. If denied, the court immediately passes a judgment in your favor."
  },
  {
    question: "What evidence should I compile before sending a legal notice to a defaulting client?",
    answer: "You must secure: (1) The contract, statement of work, or email threads showing the budget and scope approval; (2) The unpaid invoices with proof of delivery (emails or platform submission logs); (3) Proof of client acceptance (emails, Slack messages, or chats saying 'Looks good' or 'Approved'); (4) WhatsApp or email conversations showing their promises to pay or excuses for delay; (5) Bank statements showing that no credit has been received for the invoiced amounts."
  }
];

const reviews = [
  {
    id: "rev-fl-1",
    name: "Aarav Mehta (UI/UX Designer)",
    rating: 5,
    review: "A startup client in Delhi refused to pay my final project milestone of ₹85,000, claiming they did not like the designs after using them on their live app. LegalRecovery served a formal legal notice for copyright infringement and breach of contract. Within 8 days of the Speed Post delivery, the startup founders cleared my full invoice and requested a formal release deed. Fantastic platform!"
  },
  {
    id: "rev-fl-2",
    name: "Pooja Krishnan (Freelance Content Lead)",
    rating: 5,
    review: "An agency delayed my invoice payments for four months, ignoring my emails. Since I am registered under Udyam, LegalRecovery helped me draft a notice referencing the MSME Samadhan rules and statutory interest. The agency's finance head contacted me immediately and processed the payment along with a delay compensation. Legal-tech makes recovery simple!"
  },
  {
    id: "rev-fl-3",
    name: "Saurabh Nambiar (Full Stack Developer)",
    rating: 5,
    review: "An international e-commerce client cut my GitHub and Slack access without paying for two months of custom coding. LegalRecovery drafted a notice highlighting Section 70 of the Contract Act and sent it via email and post. The company realizes their IP was at risk and settled the outstanding ₹1.8 Lakhs within the notice period. Brilliant work!"
  },
  {
    id: "rev-fl-4",
    name: "Dr. Ritika Sen (Corporate Trainer)",
    rating: 5,
    review: "A client cancelled a training workshop a day before and refused to pay the agreed retainer, citing 'internal scheduling issues'. LegalRecovery served a formal notice outlining breach of contract. The corporate client settled the retainer amount of ₹65,000 to avoid litigation. The tracking and vetting features are outstanding."
  },
  {
    id: "rev-fl-5",
    name: "Vikram Roy (Creative Director)",
    rating: 5,
    review: "A marketing agency went completely silent on my invoice of ₹1.2 Lakhs. LegalRecovery's notice warned them of Summary Suits under Order 37 CPC. The agency realized we were serious, called our legal panel, and processed a bank transfer in 5 days. Flat pricing is highly transparent."
  },
  {
    id: "rev-fl-6",
    name: "Nisha & Team (Software Consultancy)",
    rating: 5,
    review: "A client defaulted on payments for our development sprint. LegalRecovery served a formal legal notice to all three directors. Face with personal liability warnings, the directors cleared the sprint payments of ₹3.2 Lakhs. Excellent legal support for freelancers."
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
      "name": "Freelancer Payment Recovery Guide",
      "item": "https://www.legalrecovery.in/freelancer-payment-recovery-guide"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Freelancer Payment Recovery Guide: How to Recover Unpaid Invoices in India",
  "description": "Exhaustive legal guide for freelancers and contractors to recover unpaid invoices, deal with contract breaches, invoke MSMED Act protection, and file summary suits in India.",
  "image": "https://www.legalrecovery.in/og-freelancer-recovery.png",
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
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
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
  "name": "Freelancer Payment Recovery Services",
  "image": "https://www.legalrecovery.in/og-freelancer-recovery.png",
  "description": "Professional legal assistance for freelancers and contractors to recover unpaid invoices, handle client defaults, and file MSME/civil claims in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "710"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(rev.rating)
    },
    "author": {
      "@type": "Person",
      "name": rev.name
    },
    "reviewBody": rev.review
  }))
};

export default function FreelancerPaymentClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "freelancer-legal-status", title: "1. Legal Status of Freelancers & Contractors" },
    { id: "breach-of-contract-act", title: "2. Rights under the Indian Contract Act, 1872" },
    { id: "msmed-act-protection", title: "3. MSME Samadhan: Protection for Freelancers" },
    { id: "cpc-order-37-summary-suit", title: "4. Summary Suits for Fast-Track Recovery" },
    { id: "digital-evidence-bsa-2023", title: "5. Digital Evidence: Slack, Email & BSA 2023" },
    { id: "legal-notice-advocate-letterhead", title: "6. Serving Advocate Notice to Defaulting Clients" },
    { id: "nclt-insolvency-bankruptcy", title: "7. Corporate Defaults & IBC/NCLT Petitions" },
    { id: "success-stories-reviews", title: "8. Success Stories & Client Reviews" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Freelancer Payment Recovery", href: "/freelancer-payment-recovery-guide" }
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
              Client <span className="text-[#DC2626]">Refusing to Pay</span> Your Invoice?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Freelancers are not powerless. Citing quality feedback retroactively or cutting platform access without payment is legally invalid under contract law. Settle your B2B invoice defaults, protect your intellectual property, and recover outstanding dues online.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Recovery Now
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
                
                {/* 1. Legal Status of Freelancers & Contractors */}
                <section id="freelancer-legal-status" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Legal Status of Freelancers &amp; Contractors</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Indian gig economy has seen explosive growth over the past decade, transforming how companies scale their operations. Today, independent developers, designers, content writers, marketing consultants, and digital strategists manage project lifecycles for startups and conglomerates alike. However, despite their integral role, freelancers operate under a distinct legal structure compared to full-time employees. When clients delay or refuse payment, gig workers often feel powerless, believing that because they lack a traditional HR department or labor union backing, they have no recourse. This is a significant misconception.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian jurisprudence, a full-time worker operates under a <strong>&quot;contract of service&quot;</strong>, placing them within the protective scope of labor laws such as the Payment of Wages Act, 1936, and state-specific Shops and Commercial Establishments Acts. A freelancer or independent contractor, however, operates under a <strong>&quot;contract for services&quot;</strong>. This places the relationship squarely within the domain of commercial law, business-to-business (B2B) transactions, and contract jurisprudence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While this means freelancers cannot file complaints with the Labour Commissioner, it also grants them significant advantages. Commercial disputes are governed by precise, objective timelines and transactional proof (such as invoices, delivery receipts, and email communications). The client cannot obscure payment defaults behind corporate HR policies, performance appraisals, or subjective evaluations. The law treats an unpaid freelance invoice as a commercial debt, and the legal remedies available—including fast-track summary suits, MSME regulatory actions, and intellectual property injunctions—are often more rapid and severe than labor conciliation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our mission is to empower the independent workforce with professional, technology-driven legal solutions. We help freelancers bridge the gap between creative delivery and commercial enforcement. By utilizing our panel of commercial advocates, we assist you in structuring a formal recovery campaign that establishes clear legal liability, demanding the payment of your invoices along with statutory interest and damages for delayed settlement.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Freelancers are commercial entities under the law. An unpaid project invoice is an outstanding business debt, and defaulting clients face the same civil, regulatory, and intellectual property liabilities as any corporate defaulter.&quot;
                    </div>
                  </div>
                </section>

                {/* 2. Rights under the Indian Contract Act, 1872 */}
                <section id="breach-of-contract-act" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Rights under the Indian Contract Act, 1872</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The foundation of every freelance engagement is a contract. Under the <strong>Indian Contract Act, 1872</strong>, a contract is defined as an agreement enforceable by law. A common mistake freelancers make is believing they have no case if they did not sign a physical, stamped paper document.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 10</strong> of the Contract Act, all agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not hereby expressly declared to be void. The law does not mandate a specific format:
                    </p>
                    <div className="space-y-6 pl-4 border-l-2 border-slate-200">
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm md:text-base">A. Written Contracts and Statements of Work (SOW)</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          If you have a signed Master Services Agreement (MSA) or a Statement of Work, the terms defined therein (milestones, payment schedules, and late fees) are absolute. Failure to pay within the agreed timeline represents a direct breach of contract under Section 73, making the client liable for the principal amount plus interest.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm md:text-base">B. Email and Digital Agreements</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          Under the IT Act, 2000, agreements finalized over email exchanges, Slack, or Upwork/Fiverr proposal systems are fully binding contracts. If you sent a scope of work with pricing and the client replied with a confirmation (e.g., &quot;Looks good, please start&quot;), the contract is legally formed.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-sm md:text-base">C. Verbal and Oral Contracts</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          Indian law fully recognizes oral contracts. The difficulty lies in proving the terms. If you have WhatsApp chats or calls where the client acknowledges the work done and promises to pay, this circumstantial evidence validates the oral agreement in court.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition, Section 70 of the Contract Act provides for the doctrine of <strong>quantum meruit</strong> (payment for work done). It states that when a person lawfully does anything for another person, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation to the former. If a client integrates your code, publishes your articles, or uses your designs, they have enjoyed the benefit of your work and are legally obligated to pay you, regardless of any contract technicality.
                    </p>
                  </div>
                </section>

                {/* 3. MSME Samadhan: Protection for Freelancers */}
                <section id="msmed-act-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. MSME Samadhan: Protection for Freelancers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For registered freelancers, the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong> provides the most powerful recovery mechanism in India. Individual freelancers, proprietary consultants, and independent agencies can easily secure an **Udyam Registration** online for free.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once registered as a micro or small enterprise, you gain statutory protections under Section 15 to 24 of the MSMED Act:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>The 45-Day Payment Limit (Section 15):</strong> The buyer of your services must make payment on or before the date agreed upon in writing. If no agreement exists, payment must be made within 15 days of delivery. Crucially, the law mandates that the payment period agreed in writing cannot exceed <strong>45 days</strong>. Any contract clause specifying a 60-day or 90-day payment cycle is voided by this central statute.</li>
                      <li><strong>Compound Interest Penalty (Section 16):</strong> If the buyer defaults on payments past the 45-day limit, they are legally liable to pay compound interest with monthly rests on the delayed amount. This interest is calculated at <strong>three times the bank rate</strong> notified by the RBI (currently amounting to a penalty of approximately 20% to 24% per annum).</li>
                      <li><strong>MSEFC Portal (MSME Samadhan):</strong> If the client defaults, you can file a dispute online on the MSME Samadhan portal. The case is referred to the Micro and Small Enterprises Facilitation Council (MSEFC) of your state. The Council conducts conciliation and arbitration. If the buyer loses, they must pay the principal plus the statutory compound interest.</li>
                      <li><strong>Restrictions on Appeals (Section 19):</strong> If the buyer wants to appeal the MSEFC order in a higher court, they must deposit <strong>75% of the ordered amount</strong> in court before the appeal is even admitted. This creates a massive financial barrier for defaulting clients.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we actively assist Udyam-registered freelancers in structuring demands referencing the MSMED Act. The prospect of facing compound interest penalties and facilitation council summons is often enough to make companies clear outstanding invoices immediately.
                    </p>
                  </div>
                </section>

                {/* 4. Summary Suits for Fast-Track Recovery */}
                <section id="cpc-order-37-summary-suit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits for Fast-Track Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you are not registered under the MSMED Act, the primary civil remedy for recovering outstanding freelance invoices is filing a **Summary Suit** under **Order 37 of the Code of Civil Procedure, 1908 (CPC)**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A summary suit is a specialized, fast-track recovery proceeding designed for claims arising out of written contracts or liquidated monetary demands (such as invoices, bills, and agreements). It prevents the client from using standard delay tactics:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Strict Appearance Deadline:</strong> Once the court serves summons under Order 37, the client must enter an appearance within <strong>10 days</strong>. If they fail to appear, the allegations in your petition are deemed admitted, and the court immediately passes a judgment and recovery decree in your favor.</li>
                      <li><strong>Leave to Defend:</strong> If the client enters an appearance, they cannot simply file a written reply denying the debt. They must file a petition seeking 'Leave to Defend'. The court will inspect their defense: if it is found to be a sham, vague, or a delay tactic, the court will deny leave and pass a decree immediately.</li>
                      <li><strong>Conditional Deposits:</strong> If the court grants leave, it often makes it conditional on the client depositing the entire disputed invoice amount (or a substantial portion of it) in the court's bank account. This ensures that if you win the trial, the money is already secured.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Summary suits are a highly effective tool for freelancers because the client cannot drag the case out for years. Faced with the requirement to deposit disputed funds in court, most corporate clients prefer settling the invoice out of court.
                    </p>
                  </div>
                </section>

                {/* 5. Digital Evidence: Slack, Email & BSA 2023 */}
                <section id="digital-evidence-bsa-2023" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Digital Evidence: Slack, Email &amp; BSA 2023</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In gig work, communication happens almost entirely in digital workspaces: Slack channels, Trello boards, Jira cards, WhatsApp groups, Figma comments, and email threads. When a client defaults and revokes your access, they often hope that your evidence has been destroyed. Therefore, compiling a secure digital backup of your project history is critical.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, electronic records are fully admissible as evidence, governed by the Information Technology Act, 2000, and the new <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the old Evidence Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure your digital trail is accepted as primary evidence in a court or facilitation council:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Export Portal Communications:</strong> Save PDF copies of email threads showing scope approvals, delivery submissions, and client feedback. Export Slack or Teams chats where managers acknowledge your work or promise payment dates.</li>
                      <li><strong>WhatsApp Delivery Tracking:</strong> Screenshot chats showing deliverable links and messages indicating receipt (blue ticks). Under Section 63 of the BSA, WhatsApp records are accepted, provided they are accompanied by a digital certification.</li>
                      <li><strong>Electronic Evidence Certificate (Section 63 BSA):</strong> When presenting digital screenshots or printed emails in court, you must attach a certificate under Section 63 of the BSA. This certificate is a signed declaration confirming that the device used was under your control, functioning properly, and that the data has not been tampered with.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our technology platform helps you compile this digital evidence file. We assist in preparing the necessary Section 63 BSA declarations, ensuring that your digital trail is legally sound and ready for advocate notice integration or court presentation.
                    </p>
                  </div>
                </section>

                {/* 6. Serving Advocate Notice to Defaulting Clients */}
                <section id="legal-notice-advocate-letterhead" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Serving Advocate Notice to Defaulting Clients</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating summary suits or filing complaints on the MSME portal, the most effective and low-cost step is to serve a **formal legal notice** on an advocate&apos;s letterhead.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice acts as a structured final warning. It communicates to the defaulting client that you have formal legal backing and are prepared to escalate. The notice contains:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 text-sm text-slate-650">
                      <p><strong>1. The Statement of Facts:</strong> A chronological detail of the freelance contract, the deliverables submitted, the invoices sent, and the client&apos;s subsequent silence or delay.</p>
                      <p><strong>2. The Legal Violations:</strong> Reference to Section 73 (Breach of Contract) and Section 70 (Quantum Meruit) of the Contract Act, and Section 15 of the MSMED Act (if applicable).</p>
                      <p><strong>3. The Financial Demands:</strong> A clear breakdown of the principal invoice amount, late fees, interest calculated from the payment due date, and the legal drafting charges of the notice itself.</p>
                      <p><strong>4. The Compliance Deadline:</strong> A strict demand to settle the dues within 15 days, failing which civil and regulatory actions will be launched.</p>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our statistics show that **approximately 80% of freelance payment disputes are resolved successfully within 15 days of serving a professional notice**. Corporate entities prefer clearing outstanding invoice amounts to facing public litigation, commercial interest penalties, or having their legal departments tied up in court proceedings. We send the notice physically via Speed Post to their registered offices and digitally via email/WhatsApp for maximum impact.
                    </p>
                  </div>
                </section>

                {/* 7. Corporate Defaults & IBC/NCLT Petitions */}
                <section id="nclt-insolvency-bankruptcy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Corporate Defaults &amp; IBC/NCLT Petitions</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defaulting client is a Private Limited or Public Limited company, and the unpaid dues have accumulated to a substantial sum (e.g., across multiple projects or retainer months), freelancers have an additional remedy under the <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the IBC, freelancers are classified as **Operational Creditors**. If a corporate debtor defaults on payments, operational creditors can initiate corporate insolvency resolution proceedings:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 8 Demand Notice:</strong> Before approaching the National Company Law Tribunal (NCLT), you must serve a statutory Demand Notice under Section 8 of the IBC. This notice gives the company exactly <strong>10 days</strong> to either clear the dues or prove a pre-existing dispute (which must have been raised before the notice was sent).</li>
                      <li><strong>The Impact of Section 8:</strong> Receipt of a Section 8 notice is a severe issue for a corporate board. If the company fails to pay, you can file a petition under Section 9 before the NCLT. If admitted, the NCLT can suspend the company's board of directors, appoint an administrator, and initiate bankruptcy proceedings.</li>
                      <li><strong>Joint Petitions:</strong> While the minimum default threshold for NCLT petitions is ₹1 Crore, multiple operational creditors (e.g., several freelancers defaulted on by the same startup or agency) can club their dues together to meet the threshold.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Faced with a Section 8 demand notice and the existential threat of corporate insolvency, companies almost universally settle outstanding dues immediately, as they cannot risk NCLT intervention.
                    </p>
                  </div>
                </section>

                {/* 8. Success Stories & Client Reviews */}
                <section id="success-stories-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Success Stories &amp; Reviews</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      We have recovered project payments, milestone dues, and retainer fees for gig workers across India. Below are representative case studies:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Startup App Development</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.8 Lakh in Bengaluru</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A client cut access to Figma and GitHub without paying the final milestone. We drafted a notice citing Section 70 of the Contract Act. Fearing intellectual property claims and copyright infringement actions, the company settled within 5 days, clearing the full invoice.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: MSME Retainer Claim</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹2.8 Lakh Invoice Dues in Chennai</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          An agency delayed monthly retainer payments for six months. The freelancer used our platform to serve a notice referencing Udyam registration and compound interest. The agency cleared the principal amount along with interest to avoid MSEFC summons.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviews.map((r, i) => (
                        <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-sm text-slate-700 italic mb-4">&quot;{r.review}&quot;</p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {r.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 9. FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">9. FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
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

            {/* Right Sidebar */}
            <div className="space-y-8 sticky top-24">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Invoice Recovery?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your freelancer payment dispute with commercial law advocates. We serve registered notices with tracking support.
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
