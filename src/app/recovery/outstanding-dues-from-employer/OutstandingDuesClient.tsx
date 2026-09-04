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
    answer: "No. Vested ESOPs are your earned property. Companies cannot cancel them unless there is proven fraud or theft. Upon resignation, you can exercise vested options within the plan window. Denying exercise requests is a direct breach of contract."
  },
  {
    question: "What legal recourse do I have for unpaid sales commissions in India?",
    answer: "Sales incentives are binding agreements under the Indian Contract Act 1872. Once you hit your target, the company must pay. You can serve a formal legal notice. You can also file an Order 37 summary suit in civil court."
  },
  {
    question: "How long does a consultant have to sue an employer for unpaid retainer fees?",
    answer: "You have three years under the Limitation Act 1963. The timeline begins on the invoice due date. Written emails acknowledging the debt reset this three-year period."
  },
  {
    question: "Is withholding maternity wages a criminal offense under Indian law?",
    answer: "Yes. Withholding maternity pay violates Section 21 of the Maternity Benefit Act 1961. Defaulting employers face up to one year of imprisonment and statutory fines. Firing an employee during maternity leave is also illegal."
  },
  {
    question: "Can an employer claw back my sign-on bonus if they terminate me without cause?",
    answer: "No. If a company fires you without cause, they cannot reclaim your sign-on bonus. Arbitrary clawbacks act as unfair penalties under Section 74 of the Contract Act. Courts reject these penalty claims."
  },
  {
    question: "What is a Summary Suit (Order 37 CPC) and how does it help recover dues?",
    answer: "An Order 37 summary suit is a fast-track civil remedy. It recovers liquidated debts from written contracts and unpaid invoices. The defendant must obtain court leave to defend within 10 days or face an immediate decree."
  },
  {
    question: "Can I approach the Labour Commissioner for unpaid freelance or consulting fees?",
    answer: "No. Labour courts only handle traditional employees and workmen. Independent consultants are commercial service providers. They must recover unpaid fees through civil courts, MSME councils, or commercial arbitration."
  },
  {
    question: "How do I prove my target achievements if the company locks me out of Salesforce/CRM?",
    answer: "Preserve secondary records before leaving. Save weekly progress emails, client sign-offs, and target screenshots. WhatsApp chats and appraisal letters also serve as valid digital evidence under the Bharatiya Sakshya Adhiniyam 2023."
  },
  {
    question: "Can I file an insolvency case against a company for outstanding commission dues?",
    answer: "Yes. Employees and contractors are operational creditors under the IBC 2016. If your undisputed dues exceed ₹1 Crore, you can serve a Section 8 demand notice. Unsettled claims can be filed before the NCLT."
  },
  {
    question: "Can directors be held personally liable for outstanding contractual dues of a company?",
    answer: "Usually, corporate entities offer limited liability. However, courts pierce the corporate veil if directors siphon money or commit fraud. Directors can also face criminal prosecution for cheating under the BNS 2023."
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
    { id: "outstanding-dues-introduction", title: "Introduction to Outstanding Employment Dues" },
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
                
                {/* Introduction */}
                <section id="outstanding-dues-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction to Outstanding Employment Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Modern compensation includes far more than a basic monthly salary. High-growth firms offer stock options, sales commissions, sign-on bonuses, and relocation payouts. Companies also hire independent consultants and retainers on commercial contracts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unfortunately, companies often withhold these non-salary dues when employees resign. HR teams use bureaucratic delays, portal lockouts, or sudden policy changes to avoid payments. They freeze commissions, block vested stock options, or ignore consultant invoices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding earned earnings is a direct breach of contract. Whether you are an executive fighting for vested shares, a salesperson seeking commissions, or a mother denied maternity pay, the law is on your side. LegalRecovery combines legal expertise with digital tracking to help you recover every rupee with interest.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Non-salary compensation is contractually protected pay. Unilaterally cancelling, reducing, or delaying these components constitutes an actionable breach of contract under Indian law.&quot;
                    </div>
                  </div>
                </section>

                {/* ESOP & Equity Disputes */}
                <section id="esop-equity-defaults" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">ESOP & Equity Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employee Stock Option Plans (ESOPs) are a core reward in the technology and startup sectors. They allow employees to buy company shares at fixed grant prices. However, equity packages often spark high-value disputes during employee exits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The most common dispute happens when employers cancel vested options. Options vest after specific milestones or time periods. Once options vest, they become the employee&apos;s earned legal property. A company cannot cancel vested options during an ordinary resignation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Common corporate defaults in equity compensation include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Exercise Denials:</strong> Blocking portal access or rejecting option exercise forms during your notice period.</li>
                      <li><strong>Clawback Manipulations:</strong> Attempting to revoke vested options without proving gross employee misconduct.</li>
                      <li><strong>Valuation Withholding:</strong> Refusing to share Fair Market Value data needed for exercise cost calculations.</li>
                      <li><strong>Buyback Defaults:</strong> Promising share buybacks during funding rounds but delaying cash disbursements indefinitely.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      ESOPs are governed by the grant agreement and <strong>Section 62(1)(b) of the Companies Act, 2013</strong>. Canceling vested shares is an unlawful breach of contract. We audit grant terms, serve demand notices to boards of directors, and file civil suits to recover lost equity value.
                    </p>
                  </div>
                </section>

                {/* Commissions & Incentives */}
                <section id="incentives-commissions-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commissions & Incentives</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sales professionals and executives often earn substantial income through performance incentives. Payouts depend on hit revenue targets, closed deals, or profit margins. Because companies calculate incentives internally, defaults and accounting disputes happen frequently.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often claim that employees must be actively employed on payout dates. However, Indian courts reject this defense when targets were completed during active tenure. Once you deliver the agreed results, your right to the commission becomes an accrued asset.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Common incentive disputes include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Retroactive Policy Cuts:</strong> Changing target schemes or reducing commission rates after deals are closed.</li>
                      <li><strong>Delayed Accounting:</strong> Postponing sales audits until after the employee exits to avoid payouts.</li>
                      <li><strong>Client Delay Excuses:</strong> Refusing commissions because a client delayed payment, shifting company risk onto workers.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Indian Contract Act, 1872</strong>, incentive plans are legally binding agreements. If you have proof of target completion, your company must pay. We demand audit records, issue assertive legal notices, and file recovery suits for unpaid commissions.
                    </p>
                  </div>
                </section>

                {/* Allowances & Travel Dues */}
                <section id="allowances-reimbursements-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Allowances & Travel Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Companies offer various expense schemes, including relocation grants, sign-on bonuses, and business travel reimbursements. When employees spend personal funds for work, companies hold that money in trust.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Disputes often arise over sign-on bonus clawbacks. Many contracts state that workers leaving within one year must refund bonuses. However, if the employer terminates you without cause, clawbacks are unenforceable. Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, arbitrary clawbacks act as illegal penalties.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers also delay travel reimbursements during exits by claiming missing receipts. When you provide submission proof and manager sign-offs, these claims become undisputed debts. Withholding approved expenses is unlawful.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery helps clients compile expense receipts, challenge clawback clauses, and demand full reimbursement. We ensure all pending business expenses are recovered during exit settlements.
                    </p>
                  </div>
                </section>

                {/* Maternity Benefits Recovery */}
                <section id="maternity-benefit-withholding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Maternity Benefits Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Maternity Benefit Act, 1961</strong> guarantees economic security and employment protection for working mothers. Any woman who has worked for 80 days in the preceding 12 months is entitled to 26 weeks of fully paid leave.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Despite these clear rules, some companies illegally withhold payments or terminate pregnant employees. Under <strong>Section 12</strong> of the Act, firing or dismissing a woman during maternity leave is strictly unlawful. Any termination during this period is legally void.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Eligible employees also receive a statutory medical bonus of ₹3,500. Under <strong>Section 21</strong>, withholding maternity benefits is a criminal offense punishable by up to one year in prison and fines.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we protect working mothers. We serve formal notices citing the Maternity Benefit Act. If employers refuse to pay, we file claims before the Controlling Authority to secure wages, interest, and penalties.
                    </p>
                  </div>
                </section>

                {/* Consulting & Retainer Fees */}
                <section id="independent-retainers-consultants" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consulting & Retainer Fees</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many businesses rely on independent contractors, freelancers, and retainers. These professionals deliver software, marketing, or design work under commercial service contracts rather than employment rolls.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Independent contractors do not have access to standard labor courts. When a client defaults on invoices, the dispute is governed purely by the <strong>Indian Contract Act, 1872</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover unpaid professional fees, consultants must prove three elements:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Scope of Work:</strong> Proof that deliverables matched the agreed contractual specifications.</li>
                      <li><strong>Invoice Records:</strong> Verified emails showing invoices were delivered to and acknowledged by the client.</li>
                      <li><strong>Project Approvals:</strong> Written sign-offs or client messages accepting the completed project milestones.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery enforces consulting agreements. We issue commercial demand notices highlighting breach of contract and intellectual property rights. If needed, we file summary suits or commercial cases to recover your fees.
                    </p>
                  </div>
                </section>

                {/* Employee vs Contractor Status */}
                <section id="legal-distinction-employee-contractor" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Employee vs Contractor Status</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Knowing whether you are an employee or an independent contractor is essential. This distinction determines which court or authority has legal jurisdiction over your claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts examine actual working realities rather than contract labels. In <strong>Dharangadhra Chemical Works Ltd. v. State of Saurashtra</strong>, the Supreme Court established the control test. If a company directs your hours, methods, and equipment, you are legally an employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In contrast, if you control your schedule, use your own tools, and invoice with GST, you are an independent contractor. Employees can file in Labor Courts, while contractors must file in Civil Courts, MSME councils, or commercial arbitration.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Selecting the correct legal forum avoids costly dismissals. We review your working relationship to pick the fastest legal remedy for your case.
                    </p>
                  </div>
                </section>

                {/* Written Proof & Dashboards */}
                <section id="written-contracts-importance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Written Proof & Dashboards</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering outstanding compensation depends on the quality of your evidence. Unwritten promises and verbal assurances carry little weight in court. You need a verifiable paper trail showing agreed terms and actual performance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key evidence to collect includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Written Agreements:</strong> Signed employment contracts, ESOP letters, commission plans, and scope addendums.</li>
                      <li><strong>Performance Records:</strong> Screenshots of CRM dashboards, sales logs, code repositories, and client sign-offs.</li>
                      <li><strong>Manager Confirmations:</strong> Emails or Slack chats acknowledging target hits or approving travel expense bills.</li>
                      <li><strong>Financial Documents:</strong> Raised tax invoices, GST returns, and bank statements showing past payments.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Download these records before the company revokes your portal access. Under the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, digital logs and emails are admissible when accompanied by a statutory certificate. We help clients preserve this vital electronic evidence.
                    </p>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-non-salary-dues" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      All claims for outstanding compensation must meet strict statutory deadlines. Under the <strong>Limitation Act, 1963</strong>, missing your deadline bars you from legal relief.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For civil suits, summary claims, and breach of contract cases involving commissions, ESOPs, or invoices, the limitation period is <strong>three (3) years</strong>. The clock starts on the date the payment was due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, written company acknowledgments reset this clock. An email acknowledging the debt starts a fresh three-year limitation period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, waiting too long risks lost evidence or employer insolvency. We recommend serving a legal notice within 30 days of default to protect your rights.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="cpc-order37-summary-suit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consultants and executives who cannot access labor courts need rapid civil remedies. The Code of Civil Procedure offers a fast-track solution: the <strong>Summary Suit under Order 37</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Order 37 applies specifically to fixed, liquidated monetary claims supported by contracts, invoices, or cheques. It is an effective option for recovering unpaid retainer fees, commissions, and bonuses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Summary suits follow an expedited timeline:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons for Appearance:</strong> The employer must enter an appearance within 10 days of receiving court summons.</li>
                      <li><strong>Leave to Defend:</strong> The company does not have an automatic right to defend. They must convince the judge that they have a genuine triable defense.</li>
                      <li><strong>Immediate Judgment:</strong> If the company fails to appear or lacks a defense, the court awards judgment to the plaintiff.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This fast-track process stops companies from using stalling tactics. LegalRecovery drafts and files Order 37 summary suits to secure rapid recovery decrees.
                    </p>
                  </div>
                </section>

                {/* Commercial Courts & PIMS */}
                <section id="commercial-courts-arbitration" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commercial Courts & PIMS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Disputes over consulting retainers, sales contracts, or vendor invoices valued at ₹3 Lakhs or more fall under the <strong>Commercial Courts Act, 2015</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A central requirement is mandatory <strong>Pre-Institution Mediation and Settlement (PIMS)</strong> under Section 12A. Before filing in court, you must apply to the District Legal Services Authority (DLSA) for mediation, unless seeking urgent interim relief.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      During PIMS, a neutral mediator helps both parties settle within three months. Signed settlements carry the legal weight of a court decree. If talks fail, the DLSA issues a failure report, enabling you to file in Commercial Court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial Courts follow tight procedural deadlines, making them much faster than regular civil courts. LegalRecovery manages both PIMS mediation and Commercial Court litigation for fast results.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-breach-trust" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Most compensation disputes are civil, but deliberate employer fraud justifies criminal charges. The <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> penalizes dishonest conduct and misappropriation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key criminal provisions include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> Applies when employers withhold deductions like TDS or PF without remitting them to government accounts.</li>
                      <li><strong>Cheating (Section 318, BNS):</strong> Applies when companies make false promises about incentives or ESOPs with no intention to pay.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To initiate criminal proceedings, you can lodge a complaint under <strong>Section 173 of the BNSS, 2023</strong> at your police station. If police delay action, you can petition a Judicial Magistrate for an investigation order.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Criminal action creates personal liability for company directors. We evaluate your case to determine if criminal filings will speed up your recovery.
                    </p>
                  </div>
                </section>

                {/* NCLT Insolvency Petitions */}
                <section id="corporate-insolvency-ibc-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">NCLT Insolvency Petitions</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a company defaults across multiple staff members and vendors, insolvency procedures become relevant. The <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong> provides a strong recovery mechanism.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the IBC, employees and contractors qualify as <strong>Operational Creditors</strong>. If undisputed dues exceed <strong>₹1 Crore</strong> (individually or jointly with colleagues), you can file an insolvency petition before the NCLT.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The IBC recovery process follows three steps:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Section 8 Demand Notice:</strong> Serve a statutory notice with contracts, invoices, and default calculations.</li>
                      <li><strong>10-Day Response Window:</strong> The company has 10 days to pay or show an existing genuine dispute.</li>
                      <li><strong>Section 9 Petition:</strong> If unpaid, file an NCLT petition to initiate corporate insolvency proceedings.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Insolvency filings risk stripping directors of company control. Because of this risk, companies often settle dues quickly after receiving a Section 8 notice. LegalRecovery manages these insolvency filings seamlessly.
                    </p>
                  </div>
                </section>

                {/* Director Personal Liability */}
                <section id="directors-piercing-veil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Director Personal Liability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Incorporated companies exist as separate legal entities from their founders. Generally, corporate debts do not attach to directors&apos; personal bank accounts or private homes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, this corporate protection has clear limits. In cases of fraud or deliberate asset stripping, courts will <strong>pierce the corporate veil</strong>. When directors use corporate shells to defraud workers, judges hold them personally liable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under statutes like the Payment of Gratuity Act and EPF Act, managers and directors are defined as employers. They face personal prosecution and imprisonment for defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We dispatch legal notices to registered offices and directors&apos; homes. Highlighting personal liability motivates leadership to resolve outstanding dues quickly.
                    </p>
                  </div>
                </section>

                {/* Maternity Controlling Authority */}
                <section id="commissioner-maternity-authority" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Maternity Controlling Authority</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer withholds maternity benefits, you can seek fast administrative relief. The Maternity Benefit Act 1961 offers a specialized resolution mechanism outside regular civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 17</strong> of the Act, you can file a formal complaint with the local <strong>Controlling Authority</strong>. The officer has clear statutory powers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Examine Company Books:</strong> Summon wage registers, attendance logs, and medical records.</li>
                      <li><strong>Order Direct Payment:</strong> Direct the employer to pay all pending maternity wages and medical bonuses.</li>
                      <li><strong>Levy Statutory Penalties:</strong> Direct delayed payment interest and initiate prosecution for statutory violations.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Controlling Authority&apos;s directives are legally binding. Unpaid amounts are recovered as land revenue arrears by district collectors. LegalRecovery helps working mothers file and manage these official claims.
                    </p>
                  </div>
                </section>

                {/* GST & Retainer Invoice Claims */}
                <section id="invoice-recovery-gst-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">GST & Retainer Invoice Claims</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering consultant fees involves tax rules under Goods and Services Tax (GST) laws. When you raise a professional invoice, you must deposit the GST component with the government.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a client defaults on your invoice, you still face tax liabilities. You must pay GST by the 20th of the following month, even if unpaid. This creates severe personal cash flow strain.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal claims demand the total invoice amount including GST plus interest. Furthermore, under <strong>Section 16 of the CGST Act</strong>, clients who fail to pay within 180 days must reverse their claimed Input Tax Credit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery structures contractor claims to protect your cash flow. We ensure you recover professional fees alongside all tax liabilities.
                    </p>
                  </div>
                </section>

                {/* Foreign Employers Recovery */}
                <section id="international-employer-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Foreign Employers Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many Indian tech professionals work remotely for firms in the US, UK, or Europe. These overseas companies rarely have local Indian offices, paying via wire transfers or digital platforms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When foreign clients default, local labor inspectors cannot easily serve notices abroad. However, effective international legal remedies remain available.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We follow three essential steps for cross-border recovery:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Review Jurisdiction Terms:</strong> Check governing law clauses to establish applicable dispute mechanisms.</li>
                      <li><strong>Send International Demand Notices:</strong> Dispatch formal notices physically and electronically to foreign headquarters.</li>
                      <li><strong>Overseas Legal Enforcement:</strong> Collaborate with international legal partners or initiate commercial arbitration.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Foreign companies value international compliance and typically settle to avoid global reputational harm. We help remote Indian professionals recover cross-border earnings.
                    </p>
                  </div>
                </section>

                {/* Arbitration Clauses */}
                <section id="arbitration-employment-contracts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Arbitration Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executive employment agreements often feature an <strong>Arbitration Clause</strong>. This requires parties to settle contractual compensation disputes via private arbitration rather than public courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitrations are governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. Under Section 8, either party can ask courts to refer the dispute to a designated arbitrator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While private arbitration can be quick, arbitrator fees are often substantial. Routine workman claims are non-arbitrable in India and belong before public labor courts. Arbitration clauses primarily bind executives and independent contractors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery examines your arbitration clause for validity. If enforceable, we represent you throughout arbitration proceedings to secure a binding award.
                    </p>
                  </div>
                </section>

                {/* Evidence Checklist */}
                <section id="evidence-trail-non-salary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Collect and organize your records before starting legal action. Solid documentation strengthens your demand notice and accelerates settlement negotiations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Contractual & Financial Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Signed employment contracts or professional service agreements.</li>
                          <li>ESOP grant letters and official scheme documents.</li>
                          <li>Approved sales target matrices and commission formulas.</li>
                          <li>Bank statements showing past salary and bonus deposits.</li>
                          <li>Form 16, Form 26AS, and TDS certificates.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Performance & Separation Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Screenshots of CRM dashboards and completed project sheets.</li>
                          <li>Approved travel expense bills and reimbursement submissions.</li>
                          <li>Resignation emails, acceptance letters, and relieving certificates.</li>
                          <li>Manager emails confirming target achievement.</li>
                          <li>Slack, WhatsApp, and email records discussing pending dues.</li>
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
                        An engineering director resigned with vested options worth ₹25 Lakhs. The startup attempted to cancel the options by blocking his portal access. LegalRecovery served a formal notice to the board highlighting breach of contract. The company relented, reopened portal access, and processed the option exercise.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Commission Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Unpaid Sales Commission Recovered for Enterprise Sales Lead</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A sales lead closed a ₹2 Crore deal qualifying for an ₹8 Lakh commission. Following his resignation, the firm claimed the deal fell outside his active tenure. LegalRecovery compiled CRM logs and email sign-offs proving active closure. We served a legal notice under the Contract Act, and the firm settled in full.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: Consulting Retainer Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Freelance Developer Recovers Unpaid Retainer Fees</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A software developer completed a six-month project for an agency. The agency defaulted on three invoices totaling ₹4.5 Lakhs, citing client delays. LegalRecovery issued a commercial notice and prepared an Order 37 summary suit. Facing a lawsuit, the agency cleared all outstanding fees with GST within 15 days.
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
                        &quot;My previous employer refused to process vested ESOPs worth 15 Lakhs after I resigned. LegalRecovery sent a formal notice to the board. The issue was resolved in 20 days!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rohan Deshmukh</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They withheld my statutory maternity pay after I left. LegalRecovery helped me file with the Controlling Authority. The company settled with interest within one month.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Priyanjana Sen</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I waited six months for ₹6 Lakhs in sales commissions. LegalRecovery sent a strong notice, and the company paid the entire sum with a formal apology.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Amit Singhal</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Recovering freelance dues used to be a nightmare. LegalRecovery made the legal notice dispatch seamless. The client paid my invoices right away.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kriti Sharma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They tried to claw back my sign-on bonus after a no-cause termination. LegalRecovery cited Section 74 of the Contract Act, and the firm dropped the claim immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Varun Mehta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Recovered pending retainer fees from a US client. LegalRecovery handled the cross-border notice process smoothly. Highly recommended for remote consultants.&quot;
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
                      LegalRecovery is India&apos;s leading legal tech recovery platform. We combine veteran advocate expertise with digital workflows for rapid, transparent recoveries. Here is why clients rely on our platform:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Senior Panel Advocates:</strong> Experienced labor and commercial lawyers draft notices with precise statutory citations.</li>
                      <li><strong>Multi-Channel Escalations:</strong> We deliver registered post notices to company offices and directors&apos; homes for maximum impact.</li>
                      <li><strong>Live Tracking:</strong> Monitor notice drafting progress and postal delivery directly on your client dashboard.</li>
                      <li><strong>Transparent Pricing:</strong> Transparent flat fees with zero hidden charges or unexpected hourly bills.</li>
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
