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
    question: "What constitutes a 'project payment default' under Indian commercial law?",
    answer: "A project payment default occurs when a client fails to disburse milestone payments, retainers, or final project closures defined in a written agreement (such as a Statement of Work or Service Level Agreement) after the contractor has delivered the corresponding services or deliverables and met the criteria for billing."
  },
  {
    question: "How does an arbitration clause in a project contract affect my right to sue in court?",
    answer: "If your project agreement contains a valid arbitration clause, Section 8 of the Arbitration and Conciliation Act, 1996 mandates that civil courts must refer the dispute to arbitration. You cannot bypass this clause to file a regular lawsuit, but you can file for urgent interim relief under Section 9 of the Act, or file a statutory complaint under the MSMED Act if you are a registered MSME."
  },
  {
    question: "What is the legal status of verbal approvals for project scope changes?",
    answer: "While oral contracts are legally recognized under Section 10 of the Indian Contract Act, 1872, proving verbal approvals for scope changes in court is extremely difficult. Employers and clients routinely deny verbal changes when invoices are due. It is critical to back up verbal agreements with email confirmations, Slack logs, or signed addendums to establish a valid debt."
  },
  {
    question: "How can MSME Samadhaan help in recovering pending project milestone payments?",
    answer: "If you have a valid Udyam Registration as a Micro or Small Enterprise, you can file a claim on the MSME Samadhaan portal. The buyer must pay within 45 days. If they fail, they are liable to pay compound interest at three times the RBI bank rate. The Facilitation Council conducts conciliation and arbitration to issue a binding award."
  },
  {
    question: "Can a client withhold the final project payment by claiming the deliverables have bugs or defects?",
    answer: "No. A client cannot withhold the entire final project payment by raising vague, undocumented quality or bug complaints after accepting the work. Under the Contract Act, the client must notify you of specific defects in writing and provide a reasonable time to rectify them. Using minor bugs to withhold major payments is viewed by courts as bad faith."
  },
  {
    question: "What is a Statement of Work (SOW) and how is it used as evidence in recovery disputes?",
    answer: "A Statement of Work (SOW) is a contract document that details the project scope, timelines, milestones, deliverables, and acceptance criteria. In legal recovery disputes, the SOW acts as the primary proof of what was agreed. Proving that you delivered what was specified in the SOW is critical to establishing a breach of contract."
  },
  {
    question: "What is the limitation period for recovering unpaid project payments?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit, commercial suit, or MSME Samadhaan claim for unpaid project invoices is three (3) years from the date the invoice payment became due or the date the project default occurred. Any written acknowledgment of the debt (such as email promises to pay) resets this 3-year clock."
  },
  {
    question: "How does a summary suit under Order 37 CPC apply to project invoice defaults?",
    answer: "A Summary Suit under Order 37 CPC is a fast-track civil court process for recovering liquidated debts. If your project claim is backed by written contracts, signed work orders, and clear invoices, you can file a summary suit. The client has no automatic right to defend; they must apply for 'Leave to Defend' within 10 days of summons, and prove they have a substantial defense."
  },
  {
    question: "Can I withhold source code, assets, or project delivery if the client refuses to pay my invoices?",
    answer: "Yes, unless the contract specifies otherwise (such as 'work for hire' clauses transferring ownership immediately). Under Section 221 of the Contract Act and general contract principles, a service provider can exercise a lien over project assets, source code, or deliverables in their possession until their outstanding invoices are cleared."
  },
  {
    question: "What is pre-institution mediation in commercial project disputes?",
    answer: "Under the Commercial Courts Act, 2015, if your project dispute value is ₹3 lakh or more, you must initiate pre-institution mediation before filing a commercial suit. This is a mandatory step conducted through District Legal Services Authorities to encourage out-of-court settlements, unless you require urgent interim relief."
  },
  {
    question: "How can a cheque bounce notice under Section 138 NI Act speed up project payment recovery?",
    answer: "If the client issued cheques for your project payments that subsequently bounced due to insufficient funds, you can serve a statutory 15-day notice under Section 138 of the Negotiable Instruments Act. If they fail to pay within 15 days, you can file a criminal case. The threat of criminal prosecution, fines up to double the cheque amount, and imprisonment often forces immediate settlement."
  },
  {
    question: "Can company directors be held personally liable for unpaid corporate project invoices?",
    answer: "Under corporate law, directors enjoy limited liability. However, you can pierce the corporate veil and hold them personally liable if you prove corporate fraud, siphoning of assets, or criminal breach of trust. In criminal cases under Section 138 NI Act or Section 316 BNS, the directors signing the cheques or managing the company are personally prosecuted."
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
      "name": "Pending Project Payment Recovery",
      "item": "https://www.legalrecovery.in/recovery/pending-project-payment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Project Payments & B2B Milestone Dues | Legal Guide",
  "description": "Exhaustive legal guide on B2B project payment recovery, milestone disputes, MSME Samadhaan claims, and summary suits under Order 37 CPC in India.",
  "image": "https://www.legalrecovery.in/og-pending-project-payment.png",
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
  "name": "Pending Project Payment Recovery Services",
  "image": "https://www.legalrecovery.in/og-pending-project-payment.png",
  "description": "Advocate-backed legal assistance for recovering outstanding project payments, B2B milestone fees, and MSME Samadhaan disputes in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "520"
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
        "name": "Meera Krishnan"
      },
      "reviewBody": "My software development firm executed a web application project. The client paid initial milestones but refused to release the final 20% milestone of ₹4,50,000, raising vague bug complaints after accepting the delivery. LegalRecovery drafted a formal notice warning of an Order 37 CPC summary suit. The client's legal team settled the entire amount in 10 days. Outstanding support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kunal Shah"
      },
      "reviewBody": "As a digital marketing contractor, my project retainer invoices of ₹5,80,000 were delayed for 6 months by a corporate client. LegalRecovery filed my case on the MSME Samadhaan portal. The Facilitation Council (MSEFC) summoned the buyer, and they settled my entire bill with interest during the conciliation phase to avoid paying 3x RBI compound interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditi Rao"
      },
      "reviewBody": "My creative agency completed a branding project. The client canceled the project mid-way and refused to pay vendor costs. LegalRecovery sent a strong notice highlighting the breach of contract under Section 73 of the Contract Act. The client cleared the cancellation fees immediately. Very reliable service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sandeep Hegde"
      },
      "reviewBody": "An infrastructure company delayed my civil project milestone payments. I was struggling to pay my subcontractors. LegalRecovery intervened, drafted a notice targeting the company directors, and structured a payment plan. The company stuck to the plan, and my cash flow is back on track."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Nair"
      },
      "reviewBody": "Our UI/UX design studio provided services to a startup. The startup delayed our payments for four months. LegalRecovery drafted a summary suit threat. Fearing court proceedings and asset attachment, the startup founders paid our dues immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohan Joshi"
      },
      "reviewBody": "A corporate client bounced their post-dated payment cheques for milestone payouts. LegalRecovery drafted a statutory 15-day notice under Section 138 of the Negotiable Instruments Act. The client paid the full amount via RTGS on the 10th day to avoid criminal prosecution. Incredibly effective!"
    }
  ]
};

export default function PendingProjectPaymentClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "project-payment-corporate-context", title: "1. Milestone Disputes & Project Realities" },
    { id: "contract-law-sow-protections", title: "2. Contractual Protections & SOW Rights" },
    { id: "msme-project-recourse", title: "3. MSME Samadhaan & Milestone Dues" },
    { id: "fast-track-recovery-suits", title: "4. Judicial Forums & Debt Recovery" },
    { id: "pre-litigation-notice-strategy", title: "5. Advocate Notices & Negotiations" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Pending Project Payment Recovery", href: "/recovery/pending-project-payment" },
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
              India&apos;s Premium B2B Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Pending <span className="text-[#DC2626]">Project Payments</span> &amp; Milestone Dues
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with clients withholding project milestone payments, delaying retainers, or raising post-facto quality disputes? Know your legal options and recover your outstanding dues.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Project Recovery
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
                
                {/* Section 1: Milestone Disputes & Project Realities */}
                <section id="project-payment-corporate-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Milestone Disputes &amp; Project Realities</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern commercial and service sectors, project-based contracts are widely used to structure business deliverables, ranging from software development and digital marketing campaigns to civil construction and corporate consulting. These contracts are typically structured around &quot;milestones,&quot; where payments are tied to the completion of specific project phases or deliverables. While this milestone system is designed to align payments with progress, it often becomes a major source of dispute. Clients frequently delay milestone approvals, withhold final payments, or demand scope changes without adjusting the payment terms. For the contractor or agency, these delays disrupt cash flows, making it difficult to fund ongoing operations, pay employees, and clear vendor liabilities.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is critical to distinguish pending project payment disputes from standard unpaid salary or general consultancy fee disputes. Salary disputes are governed by labor laws, while project payment disputes represent B2B commercial transactions governed by commercial contract laws. Project payment disputes are characterized by complex milestone structures, where the client&apos;s obligation to pay is tied to the contractor meeting specific technical or project criteria. Clients often exploit this complexity by raising vague quality or bug complaints only when the invoice is due, or by introducing scope creep (demanding extra work without additional compensation). Navigating these disputes requires a deep understanding of commercial contract law, project documentation, and fast-track recovery procedures.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common challenge in project disputes is the imbalance of power between large corporate clients and smaller service agencies or independent contractors. Smaller firms are often hesitant to take legal action for fear of losing future business, damaging their reputation, or being dragged through slow, expensive civil court trials. Some corporate clients exploit this hesitation by demanding deep discounts, delaying milestone sign-offs for months, or forcing contractors to accept bad settlements. Unilateral payment defaults violate basic contract principles and statutory regulations. The project agreement is a reciprocal contract where the contractor provides services in exchange for timely payment. When a client fails to pay, the contractor has the legal right to demand compliance, claim statutory interest, and seek damages for breach of contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in helping service agencies, IT firms, and independent contractors recover their outstanding project payments and protect their business operations. We analyze your project agreement, Statement of Work (SOW), work completion certificates, and invoice ledgers to build a strong case against your client. By using structured legal notice campaigns, filing MSME Samadhaan claims, and representing you before facilitation councils or commercial courts, we help you recover what is yours. We ensure that corporate clients comply with their payment obligations, helping you maintain cash flow and protect your business.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A client cannot withhold your project payment by raising vague, undocumented quality complaints after the work has been completed. Project dues are commercial debts, and delayed payments entitle you to claim statutory interest and damages.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Contractual Protections & SOW Rights */}
                <section id="contract-law-sow-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Contractual Protections &amp; SOW Rights</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A project-based transaction is governed by the provisions of the <strong>Indian Contract Act, 1872</strong>. The primary document defining the project scope, timelines, milestones, and payment terms is the <strong>Statement of Work (SOW)</strong> or <strong>Service Level Agreement (SLA)</strong>. This document is a legally binding contract. When a client accepts your services or takes possession of project deliverables but refuses to disburse the agreed milestone payments, they commit a fundamental <strong>breach of contract</strong>. This breach gives the contractor the legal right to claim the outstanding principal along with interest and damages.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 73</strong> of the Indian Contract Act, 1872, the party who suffers from a breach of contract is entitled to receive compensation for any loss or damage caused to them by the breach. In project disputes, these damages include:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Outstanding Milestone Value:</strong> The unpaid principal amount for work completed and accepted.</li>
                        <li><strong>Interest for Delay:</strong> Compensation for the loss of use of the funds, calculated from the invoice due date.</li>
                        <li><strong>Consequential Losses:</strong> Financial costs incurred by the contractor due to the default, such as interest paid on loans taken to execute the project or penalties paid to sub-vendors.</li>
                      </ul>
                      Section 74 of the Act also governs liquidated damages, enforcing any pre-agreed penalty clauses defined in the project agreement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Clients often try to defend against breach of contract claims by raising disputes over project scope, changes, or quality of work. To challenge these defenses, the contractor must show that the project was executed according to the contract terms. Providing work completion certificates, milestone sign-offs, inspection reports, and emails from the client approving the work acts as proof of performance. Under contract law, if a client accepts the work and uses the project deliverables (such as occupying a renovated office or using a developed software system), they cannot withhold payment. Any subsequent complaints are viewed by courts as late excuses to avoid payment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To establish a strong breach of contract claim, the contractor must maintain an organized trail of all project records. This includes the main contract, written approvals for any changes in project scope, monthly progress reports, and tax invoices showing GST declaration. If the client refuses to pay, a well-drafted legal notice referencing Section 73 of the Contract Act shows them that their default will result in civil litigation, commercial suits, and liability for interest and legal costs, encouraging them to settle.
                    </p>
                  </div>
                </section>

                {/* Section 3: MSME Samadhaan & Milestone Dues */}
                <section id="msme-project-recourse" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. MSME Samadhaan &amp; Milestone Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary statutory shield protecting micro and small business contractors in India is the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>. The Act was specifically enacted to address the issue of delayed payments to MSMEs, which can ruin smaller business operations. Under <strong>Section 15</strong> of the Act, when a registered MSME contractor provides goods or services to a buyer, the buyer must make the payment on or before the date agreed upon in writing. Crucially, the law mandates that this agreed credit period <strong>cannot exceed forty-five (45) days</strong> from the date of acceptance of the services or goods. Any contract clause that attempts to extend the credit window beyond 45 days is legally void to that extent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer fails to make the payment within the 45-day window, <strong>Section 16</strong> of the MSMED Act, 2006, imposes a severe financial penalty. The buyer is legally liable to pay <strong>compound interest with monthly rests</strong> to the MSME contractor on the outstanding amount. The interest rate is fixed at <strong>three times (3x) the bank rate</strong> notified by the Reserve Bank of India (RBI). This rate is significantly higher than standard commercial bank interest rates or civil court interest rates, serving as a powerful deterrent against buyers who delay vendor payments to manage their own cash flow.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To enforce these rights, registered MSME contractors can file a claim online on the <strong>MSME Samadhaan portal</strong> (samadhaan.msme.gov.in). The application is referred to the state-level <strong>Micro and Small Enterprise Facilitation Council (MSEFC)</strong>, which acts as a statutory arbitration forum. The MSEFC process is structured to resolve disputes quickly:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Conciliation Phase:</strong> The council first initiates conciliation between the contractor and the buyer. The buyer is summoned to resolve the dispute amicably.</li>
                        <li><strong>Arbitration Phase:</strong> If conciliation fails, the council proceeds to arbitrate the dispute itself or refers it to an alternative dispute resolution center. The council then issues a binding arbitration award.</li>
                        <li><strong>Pre-Deposit Requirement:</strong> If the buyer wishes to appeal the MSEFC award in a higher court, Section 19 of the Act requires them to <strong>deposit seventy-five percent (75%) of the awarded amount</strong> with the court, preventing them from using frivolous appeals as a delay tactic.</li>
                      </ul>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The MSMED Act protections apply to all registered micro and small enterprises providing services or manufacturing goods (traders are generally excluded). The contractor must have a valid <strong>Udyam Registration Certificate</strong> at the time the services were rendered or the contract was signed. By leveraging the MSME Samadhaan mechanism, our legal team can bypass slow civil courts and help you recover your contractor dues along with statutory compound interest, forcing corporate buyers to settle their outstanding liabilities.
                    </p>
                  </div>
                </section>

                {/* Section 4: Judicial Forums & Debt Recovery */}
                <section id="fast-track-recovery-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Judicial Forums &amp; Debt Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If pre-litigation notices and mediation fail to resolve the dispute, the contractor must choose the appropriate judicial forum to recover the debt. For non-MSME contractors, the primary civil remedy for fast-track recovery is a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. A regular civil suit can take years to resolve. Order 37 CPC provides an expedited pathway for recovering liquidated debts arising from written contracts, signed invoices, or purchase orders. Upon receiving the summons, the client has only <strong>10 days</strong> to enter an appearance and must apply for &quot;Leave to Defend,&quot; proving they have a genuine and substantial defense. If they fail to do so, the court immediately passes a decree in favor of the contractor.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another option is the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>, which is highly effective against corporate debtors. Under the IBC, contractors are classified as <strong>Operational Creditors</strong>. If a corporate client defaults on paying outstanding invoices above the statutory threshold (currently ₹1 crore), the contractor can serve a demand notice under Section 8 of the IBC. If the company fails to pay or show a pre-existing dispute within 10 days, the contractor can petition the National Company Law Tribunal (NCLT) to initiate corporate insolvency proceedings. The threat of losing control of the company often forces directors to clear outstanding contractor debts immediately.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the client issued cheques for contractor payments that subsequently bounced due to insufficient funds, the contractor can initiate criminal proceedings under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. The contractor must serve a statutory 15-day notice within 30 days of the cheque bounce. If the client fails to pay within 15 days, the contractor can file a criminal complaint before a judicial magistrate. The threat of criminal prosecution, fines up to double the cheque amount, and imprisonment often forces immediate settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For disputes containing an <strong>Arbitration Clause</strong> in the contractor agreement, the dispute must be referred to an independent arbitrator under the <strong>Arbitration and Conciliation Act, 1996</strong>. Arbitration provides a private, structured forum outside the civil courts, resulting in a binding arbitral award that can be executed as a court decree. Our legal team evaluates your contractor agreement, outstanding amount, and debtor profile to recommend the most effective legal forum, ensuring a fast-track recovery.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & Negotiations */}
                <section id="pre-litigation-notice-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; Negotiations</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery process for unpaid project invoices should begin with a structured pre-litigation escalation strategy. This involves building a clear documentary record of the debt. You should compile all relevant records, including the contractor agreement, purchase orders, work completion certificates, raised invoices, proof of GST filing, and client communication logs. You should send a formal final demand email to the client&apos;s finance team and senior management, attaching a detailed statement of accounts and requesting a resolution within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed Legal Notice</strong>. A legal notice is a structured legal document sent to the debtor, setting out the facts of your transaction, detailing the payment default, calculating the interest due under the contract or the Interest Act, 1978, and warning of the civil, regulatory, and criminal actions that will follow if they fail to comply. Serving a legal notice is a mandatory step before filing a summary suit or MSME claim, as it establishes your cause of action and forms part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific details of your contractor dispute. We do not use generic templates. Instead, we highlight the contract terms, the provisions of the MSMED Act or the Contract Act, and the personal liability of the company&apos;s directors. We send the notice via Registered Speed Post with Acknowledgment Due (AD) to the company&apos;s registered corporate office, and send copies to the personal residential addresses of the directors. Piercing the corporate veil in this manner ensures that the directors are personally aware of the dispute, which often prompts the company&apos;s legal team to propose a settlement to protect their management from litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of contractor payment disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to settle these claims rather than face public litigation, credit rating impacts, or regulatory audits. If the client responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed that covers both the payment timeline and the release of any project deliverables, helping you protect your business interests.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-600 text-xs sm:text-sm italic mb-4 leading-relaxed">
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
                <h3 className="text-sm font-black text-slate-900 mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    MSME: Max 45-Day Payout (Sec 15)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Interest: 3x RBI Compound Rate (Sec 16)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Contract: Damages for Breach (Sec 73)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forums: MSME Samadhaan / Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Escalation: Advocate Notice to Directors
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
                  Our corporate advocates specialize in recovering B2B project dues and filing MSME Samadhaan cases. Let us handle your legalnotice campaign.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  Consult Advocate Now
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
