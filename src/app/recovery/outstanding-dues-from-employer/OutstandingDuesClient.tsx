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
    question: "Can an employer unilaterally cancel my vested ESOPs when I resign?",
    answer: "No, vested ESOPs are your earned property and cannot be unilaterally cancelled or clawed back unless there is a specific, legally valid clause for 'termination for cause' (like fraud or theft). If you resign normally, you have the right to exercise your vested options within the exercise period specified in the ESOP Scheme. If the employer refuses to process your exercise request, it constitutes a breach of contract."
  },
  {
    question: "What legal recourse do I have for unpaid sales commissions in India?",
    answer: "Sales commissions are governed by the Indian Contract Act, 1872. If you have achieved the target and the commission has accrued, the employer is legally bound to pay it. You can serve a formal legal notice for breach of contract. If the dues remain unpaid, you can file a Summary Suit under Order 37 of the CPC for fast-track recovery based on written agreements and performance dashboards."
  },
  {
    question: "How long does a consultant have to sue an employer for unpaid retainer fees?",
    answer: "Under Article 113 of the Schedule to the Limitation Act, 1963, the limitation period to file a civil recovery suit or summary suit for unpaid professional/retainer fees is three (3) years from the date the invoice became due or from the date the debt was last acknowledged in writing by the company."
  },
  {
    question: "Is withholding maternity wages a criminal offense under Indian law?",
    answer: "Yes, under Section 21 of the Maternity Benefit Act, 1961, if an employer fails to pay maternity benefits or discharges/dismisses a woman during her maternity leave, they can be prosecuted. The offense is punishable with imprisonment of not less than three months, which may extend to one year, and a fine."
  },
  {
    question: "Can an employer claw back my sign-on bonus if they terminate me without cause?",
    answer: "Generally, no. Sign-on bonus clawback clauses are designed to ensure employee retention. If the employer terminates your employment without cause before the bond period ends, they cannot legally enforce the clawback. Such arbitrary clawbacks violate Section 74 of the Indian Contract Act, 1872, as they act as a penalty rather than reasonable damages."
  },
  {
    question: "What is a Summary Suit (Order 37 CPC) and how does it help recover dues?",
    answer: "A Summary Suit is a fast-track civil remedy under Order 37 of the CPC for recovering liquidated monetary claims arising from written contracts, invoices, or cheques. Unlike regular civil suits, the defendant does not have an automatic right to defend the case; they must apply to the court for 'leave to defend' within 10 days of service, showing a genuine triable dispute."
  },
  {
    question: "Can I approach the Labour Commissioner for unpaid freelance or consulting fees?",
    answer: "No. The Labour Commissioner and Labor Courts only have jurisdiction over 'workmen' or 'employees' under labor statutes. Independent consultants and freelancers are classified as independent contractors. Their disputes are governed by commercial contract law, and they must seek remedies through civil courts or arbitration."
  },
  {
    question: "How do I prove my target achievements if the company locks me out of Salesforce/CRM?",
    answer: "You must preserve secondary evidence, such as weekly performance reports sent via email, screenshot logs of target completion, client sign-offs, WhatsApp chats with your manager confirming achievements, and appraisal letters. Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, digital prints and emails are admissible in court when accompanied by a statutory certificate."
  },
  {
    question: "Can I file an insolvency case against a company for outstanding commission dues?",
    answer: "Yes, under the Insolvency and Bankruptcy Code (IBC), 2016, employees and consultants are operational creditors. If your total undisputed outstanding dues exceed ₹1 Crore, you can serve a statutory demand notice under Section 8. If the company fails to pay or show an existing dispute within 10 days, you can file an insolvency petition before the NCLT."
  },
  {
    question: "Can directors be held personally liable for outstanding contractual dues of a company?",
    answer: "Generally, directors have limited liability because a private limited company is a separate legal entity. However, if you can prove that the directors engaged in fraud, siphoned off company funds, or stripped assets deliberately to evade paying dues, courts can 'pierce the corporate veil' and hold the directors personally liable under civil law or prosecute them under BNS 2023 for cheating."
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
      "name": "Recovery of Outstanding Dues",
      "item": "https://www.legalrecovery.in/recovery/outstanding-dues-from-employer"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Outstanding Dues from Employer: Legal Notice & Action for ESOPs, Commission, Retainers, & Maternity Pay in India",
  "description": "Exhaustive legal guide on recovering unpaid non-salary dues, including vested ESOPs, sales commissions, relocation allowances, maternity benefits, and independent retainer fees.",
  "image": "https://www.legalrecovery.in/og-outstanding-dues.png",
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
  "datePublished": "2026-06-05",
  "dateModified": "2026-06-05"
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
  "name": "Outstanding Dues Recovery Services",
  "image": "https://www.legalrecovery.in/og-outstanding-dues.png",
  "description": "Expert legal recovery assistance for ESOP disputes, unpaid sales commissions, maternity wages, and independent consulting retainer fees.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "910"
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
      "reviewBody": "My previous company refused to process my vested ESOP exercise worth 15 Lakhs post-resignation. LegalRecovery's structured legal notice to the board of directors resolved the issue in 20 days. Highly professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanjana Sen"
      },
      "reviewBody": "They withheld my statutory maternity benefit after I resigned. Team LegalRecovery helped me file a complaint with the Controlling Authority, and the company settled the dues with interest within a month."
    }
  ]
};

export default function OutstandingDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "outstanding-dues-introduction", title: "Introduction" },
    { id: "esop-equity-defaults", title: "ESOP & Equity Disputes" },
    { id: "incentives-commissions-claims", title: "Commissions & Incentives" },
    { id: "allowances-reimbursements-claims", title: "Allowances & Travel Dues" },
    { id: "maternity-benefit-withholding", title: "Maternity Benefits Recovery" },
    { id: "independent-retainers-consultants", title: "Consulting & Retainer Fees" },
    { id: "legal-distinction-employee-contractor", title: "Employee vs Contractor Status" },
    { id: "written-contracts-importance", title: "Written Proof & Dashboards" },
    { id: "limitation-non-salary-dues", title: "Limitation Periods" },
    { id: "cpc-order37-summary-suit", title: "Order 37 Summary Suits" },
    { id: "commercial-courts-arbitration", title: "Commercial Courts & PIMS" },
    { id: "bns-criminal-breach-trust", title: "Criminal Action under BNS" },
    { id: "corporate-insolvency-ibc-claims", title: "NCLT Insolvency Petitions" },
    { id: "directors-piercing-veil", title: "Director Personal Liability" },
    { id: "commissioner-maternity-authority", title: "Maternity Controlling Authority" },
    { id: "invoice-recovery-gst-compliance", title: "GST & Retainer Invoice Claims" },
    { id: "international-employer-jurisdiction", title: "Foreign Employers Recovery" },
    { id: "arbitration-employment-contracts", title: "Arbitration Clauses" },
    { id: "evidence-trail-non-salary", title: "Evidence Checklist" },
    { id: "outstanding-dues-cases", title: "Dues Case Studies" },
    { id: "client-reviews-dues", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-dues", title: "Why LegalRecovery?" },
    { id: "outstanding-dues-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Outstanding Dues Recovery", href: "/recovery/outstanding-dues-from-employer" }
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
              India&apos;s Premium Legal Tech Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Your <span className="text-[#DC2626]">Outstanding Dues</span> From Employer
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid sales commissions, vested ESOPs, maternity pay, relocation allowances, and independent retainer fees. Get veteran legal advocacy backed by state-of-the-art technology.
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
                
                {/* Introduction */}
                <section id="outstanding-dues-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern employment landscape, compensation is rarely a simple matter of a fixed monthly salary. To attract and retain high-performing talent, businesses—ranging from fast-growing startups to established multinational corporations—design complex, multi-tiered compensation packages. These packages regularly include non-salary elements such as Employee Stock Option Plans (ESOPs), performance-linked sales commissions, sign-on bonuses, relocation payouts, travel reimbursements, and statutory maternity benefits. Furthermore, many organizations rely on independent consultants, freelancers, and retainers who operate under distinct commercial agreements rather than traditional employment contracts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While these complex compensation structures align incentives and support remote collaboration, they also introduce significant friction when a relationship ends or when a company faces a financial crunch. At LegalRecovery, we regularly observe a concerning corporate trend: when companies decide to cut costs, conserve cash, or penalize resigning employees, they target these non-salary outstanding dues first. HR and finance departments frequently employ bureaucratic delays, complex policy interpretations, and access blockages to avoid paying earned commissions, relisting vested equity, or settling outstanding professional retainer invoices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding these dues is a direct breach of contract and a severe violation of the law. Outstanding dues represent compensation for value you have already delivered. Whether you are an executive disputing vested stock options, a sales head fighting for earned commissions, a mother whose statutory maternity benefit has been withheld, or a contractor waiting on unpaid invoices, the law provides robust pathways for recovery. At LegalRecovery, we combine expert legal advocacy with technology-driven workflows to pierce corporate defenses and ensure that every rupee of your outstanding dues is recovered with interest.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Non-salary compensation components represent contractually binding and statutorily protected earnings. When an employer unilaterally alters, delays, or denies these components, they commit an actionable breach of contract, exposing the entity and its directors to civil liability, summary suits, and statutory penalties.&quot;
                    </div>
                  </div>
                </section>

                {/* ESOP & Equity Disputes */}
                <section id="esop-equity-defaults" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">ESOP & Equity Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employee Stock Option Plans (ESOPs) have become a cornerstone of compensation in the startup and technology sectors. They allow employees to participate in the growth of the company by purchasing equity at a pre-determined price. However, equity compensation is also one of the most common sources of high-value disputes when an employee resigns or is terminated.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary issue arises when an employer attempts to unilaterally cancel or claw back options that have already vested. Under the law, options vest as a result of time spent or milestones achieved, representing earned compensation. Once an option has vested, it is the property of the employee. The company cannot cancel vested options during a normal resignation. The employee has a contractual right to exercise these options within the exercise period specified in the ESOP Scheme.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Common employer defaults in equity compensation include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Exercise Denials:</strong> Refusing to process the employee&apos;s option exercise application during the notice period or post-exit window.</li>
                      <li><strong>Clawback Manipulations:</strong> Attempting to apply retroactive clawback clauses for normal exits by falsely labeling them as &quot;terminations for cause.&quot;</li>
                      <li><strong>Valuation Withholding:</strong> Failing to provide the Fair Market Value (FMV) assessment required for the employee to calculate tax liabilities and exercise costs.</li>
                      <li><strong>Buyback Defaults:</strong> Agreeing to buy back the shares during a liquidity event but withholding the cash payout indefinitely.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      ESOP disputes are governed by the ESOP Scheme document, the specific Letter of Grant, and the <strong>Companies Act, 2013 (Section 62(1)(b))</strong>. If an employer illegally denies your vested options, it constitutes a material breach of contract. We help employees audit their grant letters, compute the valuation of their vested options, serve formal demand notices to the company&apos;s board, and, if necessary, initiate civil suits to enforce the contract and claim damages for the lost value of the equity.
                    </p>
                  </div>
                </section>

                {/* Commissions & Incentives */}
                <section id="incentives-commissions-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commissions & Incentives</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For sales, business development, and executive roles, commissions and performance-linked incentives often make up a significant portion of annual earnings. Unlike fixed salary, these payouts are calculated based on targets, revenue milestones, or profit margins. Because commission calculations involve internal data and accounting cycles, they are highly susceptible to employer defaults and manipulation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often attempt to avoid commission payouts using several common tactics. A frequent excuse is that the employee must be &quot;actively on the payroll on the date of disbursement.&quot; While this clause is common, it is legally vulnerable if the employee completed all target parameters and the commission accrued during their active employment. Courts have repeatedly ruled that once the employee has performed their side of the bargain, the incentive is an accrued right that cannot be wiped out by a subsequent separation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Other common disputes include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Retrospective Policy Changes:</strong> Unilaterally modifying target structures or commission percentages after the performance period has ended.</li>
                      <li><strong>Delayed Accounting:</strong> Delaying the audit of sales books to push the payout calculation past the employee&apos;s exit date.</li>
                      <li><strong>Client Default Excuses:</strong> Refusing to pay commissions on closed deals because the client is slow to pay the company, transferring the company&apos;s business risk onto the employee.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Indian Contract Act, 1872</strong>, commission agreements are binding bilateral contracts. If you have documented proof of target achievement—such as CRM dashboards, email approvals, or performance certificates—the company cannot withhold payment. We assist clients by demanding a formal audit of the incentive calculations, serving targeted legal notices to recover unpaid commissions, and filing recovery suits to secure these performance-linked dues.
                    </p>
                  </div>
                </section>

                {/* Allowances & Travel Dues */}
                <section id="allowances-reimbursements-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Allowances & Travel Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To facilitate operations, companies offer various allowances and expense reimbursement schemes. These include relocation allowances, sign-on bonuses, business travel reimbursements, client entertainment budgets, and home-office allowances. When employees incur out-of-pocket expenses for business activities, the company holds these funds in trust.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common dispute involves sign-on bonus clawback clauses. Many contracts state that if an employee leaves within 12 months, they must return the sign-on bonus. However, if the company terminates the employee without cause, or if the employee is forced to resign due to toxic work conditions or unpaid salary, the company cannot legally enforce this clawback. Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, arbitrary clawbacks that do not reflect actual, reasonable losses incurred by the employer are classified as invalid penalties.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, companies often withhold travel and operational reimbursements during the exit process, claiming that bills are missing or were submitted late. If you have proof of submission and manager approval, these reimbursements are undisputed debts. Withholding them is an illegal deduction from your compensation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery helps clients compile their reimbursement claims, review sign-on bonus agreements, and counter invalid clawback demands. We ensure these travel, operational, and relocation allowances are fully accounted for and recovered as part of the overall settlement.
                    </p>
                  </div>
                </section>

                {/* Maternity Benefits Recovery */}
                <section id="maternity-benefit-withholding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Maternity Benefits Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Maternity Benefit Act, 1961</strong> (amended in 2017) is a protective statute designed to secure women&apos;s employment and economic independence during maternity. The Act mandates that every woman who has worked for an employer for at least 80 days in the 12 months preceding her expected delivery date is entitled to 26 weeks of fully paid maternity leave.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Despite the clear statutory mandate, some employers attempt to evade these payments. We frequently see cases where companies constructively discharge pregnant employees, refuse to pay maternity wages, or delay payments indefinitely. Under <strong>Section 12</strong> of the Act, it is unlawful for an employer to discharge, dismiss, or reduce the wages of a woman during her maternity leave. Any termination during this period is invalid and constitutes a serious statutory offense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to the 26 weeks of paid leave, women are entitled to a medical bonus of ₹3,500 (or the amount revised by the government). If an employer withholds these benefits, they violate central labor laws. Under <strong>Section 21</strong>, the failure to pay maternity benefits is a criminal offense punishable by imprisonment of up to one year and a fine.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we protect the rights of working mothers. We serve formal notices to defaulting employers citing the strict provisions of the Maternity Benefit Act. If the company fails to comply, we assist in filing formal complaints before the Controlling Authority (Assistant Labour Commissioner) to secure the dues, interest, and statutory penalties.
                    </p>
                  </div>
                </section>

                {/* Consulting & Retainer Fees */}
                <section id="independent-retainers-consultants" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consulting & Retainer Fees</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The modern economy relies heavily on professional retainers, freelancers, and independent contractors. These professionals provide specialized services, such as software development, marketing, business advisory, and design, without being enrolled on the company&apos;s permanent payroll. Instead, their relationship is governed by professional service agreements or retainership contracts, and payments are processed against raised invoices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common challenge for independent retainers is the lack of payment protection under traditional labor laws. When a client company defaults on an invoice or terminates a retainer contract without paying the notice fee, the consultant cannot approach the Labour Commissioner. Their dispute is strictly commercial and is governed by the <strong>Indian Contract Act, 1872</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover unpaid retainer fees, the consultant must rely on the terms of the service agreement. Key elements to establish include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Scope of Work:</strong> Proof that the services were delivered in accordance with the agreement.</li>
                      <li><strong>Invoice Validation:</strong> Emails showing that invoices were sent, received, and acknowledged by the client company.</li>
                      <li><strong>Acceptance of Deliverables:</strong> Written sign-offs or client approvals of the completed project milestones.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery provides specialized contract enforcement services for freelancers and independent consultants. We draft commercial demand notices that emphasize breach of contract and intellectual property ownership (retaining the right to withhold deliverables if unpaid). If the client does not settle, we assist in filing summary suits or commercial recovery cases to secure the outstanding fees.
                    </p>
                  </div>
                </section>

                {/* Employee vs Contractor Status */}
                <section id="legal-distinction-employee-contractor" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Employee vs Contractor Status</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When recovering outstanding dues, determining whether you are classified as an employee or an independent contractor is a critical first step. This classification determines which laws protect you and which legal forums (Labor Courts vs. Civil/Commercial Courts) have jurisdiction over your dispute.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts use specific legal tests to determine this status, looking beyond the label used in your contract. In landmark judgments such as <strong>Dharangadhra Chemical Works Ltd. v. State of Saurashtra</strong>, the Supreme Court established the &quot;control test&quot; and the &quot;integration test.&quot; Under these tests, you are likely classified as an employee if the company controls not only what work you do but also how and when you do it, and if your work is integrated into the core operations of the business.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Conversely, if you retain independence over your working hours, use your own equipment, work for multiple clients, and raise invoices with GST, you are classified as an independent contractor. While employees can access Labor Courts and Shops Act inspectors, independent contractors must seek remedies through civil litigation, commercial arbitration, or Micro and Small Enterprise Facilitation Councils (MSEFC).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding this distinction is vital to avoid filing in the wrong forum, which can lead to dismissals and delays. At LegalRecovery, we analyze your contract and day-to-day work relationship to select the correct legal strategy for your specific status.
                    </p>
                  </div>
                </section>

                {/* Written Proof & Dashboards */}
                <section id="written-contracts-importance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Written Proof & Dashboards</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In any legal dispute regarding outstanding dues, the strength of your case depends on your evidence. Verbal promises, informal commitments, or unconfirmed discussions are difficult to enforce. To build an airtight case, you must compile a structured paper trail that documents your contract, your performance, and the company&apos;s default.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Crucial evidence for recovering non-salary dues includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Written Agreements:</strong> Signed employment contracts, ESOP grant letters, commission agreements, and signed addendums detailing target structures.</li>
                      <li><strong>Performance Logs:</strong> Screenshots of CRM dashboards (like Salesforce or HubSpot), completed project sheets, sales reports, and client sign-offs confirming target completion.</li>
                      <li><strong>Written Acknowledgments:</strong> Emails from managers or HR acknowledging your target achievements, approving expense bills, or promising payment dates.</li>
                      <li><strong>Invoices and Statements:</strong> Raised professional invoices, GST filing logs, and bank statements showing partial payments or historical payouts.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is important to download and preserve these records before the company revokes your access to work email, Slack, and CRM portals. Under the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, digital evidence is fully admissible in Indian courts, provided it is supported by a statutory certificate verifying its authenticity and integrity. We guide our clients through this collection process to ensure all digital evidence is legally preserved.
                    </p>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-non-salary-dues" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every legal claim for outstanding dues is bound by strict statutory timelines. Under the <strong>Limitation Act, 1963</strong>, you must initiate legal action within a specific window, or you lose the right to enforce your claim in a court of law.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For civil recovery suits, summary suits, and breach of contract claims arising from unpaid commissions, ESOPs, or retainer invoices, the limitation period is <strong>three (3) years</strong> from the date the payment became due. For example, if an invoice or commission payout was due on June 5, 2023, you must file a lawsuit before June 5, 2026.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, the limitation period can be reset. If the employer sends an email or text message acknowledging the outstanding debt or promising to pay at a future date before the three-year window expires, a fresh limitation period of three years begins from the date of that acknowledgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While three years may seem like a long time, delaying action can lead to lost evidence, company insolvency, or directors leaving the country. We advise serving a formal legal notice as soon as payment is delayed beyond 30 days to establish your claim and protect your rights.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="cpc-order37-summary-suit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For independent consultants, executives, and employees who cannot access labor forums, the ordinary civil court process can be slow. To address this, the Code of Civil Procedure (CPC) provides a fast-track remedy: the <strong>Summary Suit under Order 37</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is designed specifically for recovering liquidated monetary claims—claims where the exact debt is fixed and documented—arising from written contracts, invoices, or bounced cheques. This makes it an effective tool for recovering unpaid retainer fees, commissions, and sign-on bonuses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedure in a Summary Suit differs from ordinary civil suits:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons of Appearance:</strong> Once the suit is filed, the defendant company must enter an appearance within 10 days of receiving the summons.</li>
                      <li><strong>No Automatic Right to Defend:</strong> The defendant does not have an automatic right to file a written statement. They must apply for &quot;leave to defend&quot; by demonstrating that they have a genuine, triable defense.</li>
                      <li><strong>Quick Judgment:</strong> If the defendant fails to enter an appearance within 10 days, or if the court rejects their application for leave to defend, the allegations in the plaint are deemed admitted, and the court passes a judgment in favor of the plaintiff.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This fast-track mechanism prevents companies from using delaying tactics in court. LegalRecovery&apos;s legal team specializes in drafting and filing Order 37 summary suits, ensuring all necessary documentation is presented to secure quick judgments.
                    </p>
                  </div>
                </section>

                {/* Commercial Courts & PIMS */}
                <section id="commercial-courts-arbitration" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commercial Courts & PIMS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your dispute regarding outstanding dues involves a commercial contract—such as an independent consulting agreement, business development contract, or vendor invoice—and the value of the claim is ₹3 Lakhs or more, the dispute falls under the <strong>Commercial Courts Act, 2015</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Commercial Courts Act was enacted to speed up the resolution of commercial disputes in India. One of its key features is the mandatory <strong>Pre-Institution Mediation and Settlement (PIMS)</strong> under Section 12A. Before you can file a lawsuit in a Commercial Court, you must apply to the District Legal Services Authority (DLSA) to initiate mediation, unless you are seeking urgent interim relief.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      During PIMS, a neutral mediator helps both parties reach a settlement. This process is time-bound (usually completed within three months) and confidential. If a settlement is reached, it is signed by both parties and is legally binding, carrying the same status as a court decree. If the mediation fails, the DLSA issues a failure report, allowing you to file your suit in the Commercial Court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial Courts operate under strict timelines for filings, evidence, and arguments, making them faster than regular civil courts. LegalRecovery assists clients throughout the PIMS and Commercial Court processes, helping them secure their dues efficiently.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-breach-trust" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While outstanding dues disputes are primarily civil and commercial matters, certain circumstances can justify criminal action. When an employer acts with dishonest intent, misrepresents facts, or misappropriates funds, criminal provisions under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> can apply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key criminal offenses in outstanding dues disputes include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> This applies when an employer deducts funds from your compensation (such as tax deductions or employee contributions) but fails to deposit them with the relevant authorities or withhold them dishonestly.</li>
                      <li><strong>Cheating (Section 318, BNS):</strong> This applies if the company induced you to perform services or join the organization by making false promises about incentives, bonuses, or ESOPs that they had no intention of honoring.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To initiate criminal action, you must file a detailed complaint under <strong>Section 173 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> at the local police station. If the police refuse to register an FIR, you can approach the Judicial Magistrate under <strong>Section 173(2) of BNSS</strong> to seek an order directing a police investigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Criminal proceedings are serious and can result in the arrest of company directors. They should be used selectively when clear evidence of fraud or misappropriation exists. At LegalRecovery, we evaluate the facts of your case to determine if criminal actions are appropriate to support your recovery.
                    </p>
                  </div>
                </section>

                {/* NCLT Insolvency Petitions */}
                <section id="corporate-insolvency-ibc-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">NCLT Insolvency Petitions</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a company defaults on payments to multiple employees, consultants, and vendors, it may be facing insolvency. In such cases, the <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong> offers a powerful remedy for recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the IBC, employees, consultants, and contractors are classified as <strong>Operational Creditors</strong>. If your total undisputed outstanding dues exceed the statutory threshold of <strong>₹1 Crore</strong> (which can be met individually or collectively by a group of joint employee petitioners), you can file an insolvency petition before the National Company Law Tribunal (NCLT).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The IBC process involves the following steps:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Section 8 Demand Notice:</strong> You must serve a formal demand notice on the debtor company, attaching invoices, contracts, and proof of default.</li>
                      <li><strong>10-Day Response Window:</strong> The company has 10 days to pay the dues or prove that a genuine dispute exists.</li>
                      <li><strong>Section 9 Petition:</strong> If the company fails to pay or show a dispute, you can file a petition before the NCLT to initiate the Corporate Insolvency Resolution Process (CIRP).</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing an NCLT petition is a serious action that can result in the company&apos;s management losing control of the business to an Insolvency Professional. As a result, companies often settle outstanding dues quickly after receiving a Section 8 notice to protect their business. LegalRecovery&apos;s insolvency lawyers assist clients in drafting notices and representing them before the NCLT.
                    </p>
                  </div>
                </section>

                {/* Director Personal Liability */}
                <section id="directors-piercing-veil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Director Personal Liability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A private limited company or public limited company is a separate legal entity under the law. This means the company is responsible for its own debts, and the personal assets of its directors and shareholders are generally protected. This is known as the doctrine of corporate personality.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, this protection is not absolute. In cases of fraud, siphoning of funds, or deliberate asset stripping to evade creditors, courts can <strong>pierce the corporate veil</strong>. If you can prove that the directors acted dishonestly or used the corporate structure to defraud employees and consultants, the court can hold them personally liable for the outstanding dues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, under various labor statutes (such as the Payment of Gratuity Act and the Employees&apos; Provident Funds Act), directors and managers are classified as &quot;employers&quot; and can face personal prosecution, including imprisonment, for non-compliance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To establish personal liability, our legal notices are served not only to the company but also directly to the personal residential addresses of all active directors. This alerts the board to their personal risk and encourages them to settle the outstanding dues.
                    </p>
                  </div>
                </section>

                {/* Maternity Controlling Authority */}
                <section id="commissioner-maternity-authority" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Maternity Controlling Authority</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer withholds maternity benefits, discharges you during maternity leave, or denies your right to paid time off, you can seek assistance through the state&apos;s labor administration. The Maternity Benefit Act, 1961 provides an administrative remedy that is faster than civil litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 17</strong> of the Act, any woman who has been denied maternity benefits can file a formal complaint with the <strong>Controlling Authority</strong> (typically the local Inspector or Assistant Labour Commissioner). Once the complaint is filed, the authority is empowered to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Conduct Inquiries:</strong> Direct the employer to produce attendance registers, wages books, and medical certificates.</li>
                      <li><strong>Order Payments:</strong> Issue an order directing the employer to pay the outstanding maternity benefits and medical bonuses.</li>
                      <li><strong>Impose Penalties:</strong> Direct the employer to pay interest on delayed payments and initiate prosecution for statutory violations.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Controlling Authority&apos;s orders are legally binding. If the employer fails to pay the ordered amount, it can be recovered as an arrear of land revenue through the local Collector. LegalRecovery helps working mothers draft complaints, compile medical records, and represent them before the Controlling Authority.
                    </p>
                  </div>
                </section>

                {/* GST & Retainer Invoice Claims */}
                <section id="invoice-recovery-gst-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">GST & Retainer Invoice Claims</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For independent consultants and freelancers, recovering outstanding dues involves tax and compliance considerations. When you raise an invoice for professional services, you are typically required to charge Goods and Services Tax (GST) if you are registered under the GST Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a client company defaults on an invoice, you still face tax liabilities. Under GST laws, you must deposit the GST component of the raised invoice with the government by the 20th of the following month, regardless of whether the client has paid you. This can create a cash flow challenge, leaving you out of pocket for both the services rendered and the tax deposited.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To address this, our legal claims demand the recovery of the complete invoice value, including the GST component, along with interest to cover your tax costs. Additionally, we analyze compliance under <strong>Section 16 of the CGST Act</strong>. If a company does not pay a consultant&apos;s invoice within 180 days, they must reverse any Input Tax Credit (ITC) they claimed on that invoice, adding a tax penalty to their unpaid debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery helps consultants manage these tax issues during the recovery process. We ensure that all claims are structured to recover both the principal fees and the associated tax liabilities.
                    </p>
                  </div>
                </section>

                {/* Foreign Employers Recovery */}
                <section id="international-employer-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Foreign Employers Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The growth of remote work has allowed many Indian software developers, designers, and consultants to work for foreign employers located in the US, UK, Europe, or Southeast Asia. Often, these foreign entities do not have a physical office or subsidiary in India, paying their remote staff through international wire transfers or digital wallets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a foreign employer defaults on outstanding dues, recovery can be complex. Because the employer has no physical presence in India, local labor inspectors cannot serve summonses easily. However, you still have options for recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key steps in international recovery include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Jurisdiction Clauses:</strong> Reviewing your contract to determine the governing law and jurisdiction. Many contracts specify that the laws of the employer&apos;s country apply, while others allow for local jurisdiction where the services are performed.</li>
                      <li><strong>International Notices:</strong> Serving a formal legal notice electronically and physically to the company&apos;s overseas headquarters. This often prompts action, as foreign companies are sensitive to international compliance risks.</li>
                      <li><strong>Collaborative Legal Action:</strong> If the claim is significant, we work with international legal partners to initiate proceedings in the employer&apos;s home country or file commercial disputes under international arbitration terms.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we help remote workers protect their interests. We review international service agreements, draft cross-border demand notices, and select appropriate strategies to recover outstanding dues from overseas employers.
                    </p>
                  </div>
                </section>

                {/* Arbitration Clauses */}
                <section id="arbitration-employment-contracts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Arbitration Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many modern employment agreements, especially for senior executives, directors, and independent consultants, contain an <strong>Arbitration Clause</strong>. This clause specifies that any dispute arising from the contract must be resolved through private arbitration rather than public courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitration is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. If your contract contains a valid arbitration clause, either party can apply to the court under Section 8 of the Act to refer the dispute to an arbitrator. This can make civil recovery suits in regular courts unavailable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While arbitration is private and can be faster than civil courts, it can also be expensive, as the parties must pay the arbitrator&apos;s fees. However, under Indian law, employment disputes involving traditional &quot;workmen&quot; are generally considered non-arbitrable, as they fall under the jurisdiction of public Labor Courts. Arbitration clauses are typically enforceable only for managerial staff, senior executives, and independent consultants.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery helps clients evaluate the validity of arbitration clauses in their contracts. If enforceable, we represent clients in the arbitration process, from appointing the arbitrator to presenting the case and enforcing the final arbitral award.
                    </p>
                  </div>
                </section>

                {/* Evidence Checklist */}
                <section id="evidence-trail-non-salary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating legal action to recover outstanding dues, you must compile and organize your evidence. The following checklist outlines the essential documents and records you should gather to support your claim:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Contractual & Financial Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Signed employment agreement or professional service contract.</li>
                          <li>ESOP grant letters and copy of the company&apos;s ESOP Scheme.</li>
                          <li>Approved commission structures and targets.</li>
                          <li>Bank statements showing past payments and salary credits.</li>
                          <li>Form 16, Form 26AS, and TDS certificates.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Performance & Separation Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Screenshots of target completion dashboards (CRM logs, code commits).</li>
                          <li>Approved expense bills and reimbursement submissions.</li>
                          <li>Resignation letter, acceptance email, and relieving documents.</li>
                          <li>Written approvals of target achievements from managers.</li>
                          <li>WhatsApp, Slack, and email chats discussing outstanding payments.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Dues Case Studies */}
                <section id="outstanding-dues-cases" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Dues Case Studies</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 1: ESOP Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Vested Equity Secured from Tech Startup</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        An engineering director resigned from a fintech startup to join another company. At the time of his resignation, he had vested options worth ₹25 Lakhs. The company&apos;s HR department attempted to cancel these options, citing a clause that required him to exercise them within 10 days of exit, while refusing to provide the necessary exercise portal access. LegalRecovery served a formal notice to the board of directors, highlighting the breach of contract. The company relented, restored portal access, and processed the option exercise.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Commission Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Unpaid Sales Commission Recovered for Enterprise Sales Lead</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        An enterprise sales lead closed a deal worth ₹2 Crores, which qualified him for a commission of ₹8 Lakhs based on his target sheet. Following his resignation, the company refused to pay the commission, claiming that the deal&apos;s billing cycle fell outside his active tenure. LegalRecovery gathered CRM logs and email approvals showing that the deal was closed and approved during his active employment. We served a legal notice under the Indian Contract Act, 1872, prompting the company to settle the commission in full to avoid a civil lawsuit.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: Consulting Retainer Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Freelance Developer Recovers Unpaid Retainer Fees</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        An independent software developer worked with a mid-sized marketing agency on a six-month retainer contract. After completing the project, the agency defaulted on her final three invoices, totaling ₹4.5 Lakhs, claiming client delays. LegalRecovery drafted a commercial notice and prepared a summary suit under Order 37 of the CPC. Faced with a potential lawsuit, the agency paid the outstanding fees, including the GST component, within 15 days.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews-dues" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My previous company refused to process my vested ESOP exercise worth 15 Lakhs post-resignation. LegalRecovery&apos;s structured legal notice to the board of directors resolved the issue in 20 days. Highly professional service!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rohan Deshmukh</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They withheld my statutory maternity benefit after I resigned. Team LegalRecovery helped me file a complaint with the Controlling Authority, and the company settled the dues with interest within a month.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Priyanjana Sen</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I was waiting on ₹6 Lakhs of unpaid sales commission for six months. LegalRecovery drafted a strong notice, and the company paid the entire amount along with a formal apology.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Amit Singhal</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As a freelance consultant, recovering dues from clients is always a nightmare. LegalRecovery&apos;s automated platform made the notice dispatch process quick, and the client settled my invoices immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kriti Sharma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They tried to claw back my sign-on bonus after they terminated me without cause. LegalRecovery cited Section 74 of the Contract Act, and the company backed down immediately. Exceptional service!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Varun Mehta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Recovered my pending international retainer fees from a US-based client. LegalRecovery&apos;s team handled the cross-border notice process with ease. Highly recommend for remote workers.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Neha Kapoor</h4>
                    </div>
                  </div>
                </section>

                {/* Why LegalRecovery? */}
                <section id="why-choose-legalrecovery-dues" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why LegalRecovery?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran advocates with advanced workflow automation to deliver speed, transparency, and resolution rates that traditional law firms cannot match. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Expert Panel Advocates:</strong> Your notices are drafted and reviewed by experienced labor and contract attorneys, ensuring precise statutory citations.</li>
                      <li><strong>Multi-Channel Escalations:</strong> We do not just email HR. We dispatch physical registered letters to the registered company office and personal residences of all active directors to maximize pressure.</li>
                      <li><strong>Real-Time Tracking:</strong> Track the drafting progress, post office dispatch status, and delivery of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no hidden surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="outstanding-dues-faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">FAQs</h2>
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your outstanding dues case with legal experts. We serve verified notices with full compliance support.
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
