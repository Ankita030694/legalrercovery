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
    question: "Can an employer withhold my sales incentives simply because I resigned?",
    answer: "No. If you have already achieved the defined performance targets during your active employment, the incentives have accrued and represent earned debt. Withholding these payments post-resignation is a breach of contract unless a highly specific, legally enforceable clawback or roll-off clause was agreed upon in writing beforehand."
  },
  {
    question: "Is it legal for an employer to deny incentives during the notice period?",
    answer: "In general, no. During the notice period, you remain a full employee of the company and are entitled to all terms of your employment contract, including salary and incentive payouts. Any unilateral change or denial of incentives during the notice period is considered an unauthorized deduction and a breach of contract."
  },
  {
    question: "What is the limitation period to claim unpaid sales commission in India?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil money recovery suit or invoke arbitration for unpaid incentives or sales commission is three (3) years from the date the payment became due under the contract or target sheet."
  },
  {
    question: "Are sales incentives considered 'wages' under Indian labor laws?",
    answer: "Yes. Under Section 2(vi) of the Payment of Wages Act, 1936, and the Code on Wages, 2019, 'wages' include any additional remuneration payable under the terms of employment, whether called a bonus, commission, or incentive. This applies if the amount is calculable and part of the agreed terms."
  },
  {
    question: "Can an employer retrospectively change target metrics to deny my incentives?",
    answer: "No. Unilateral retrospective changes to target metrics after the performance period has commenced or concluded are legally invalid. Once you perform your part based on the initial target structure, the incentive becomes an accrued right that cannot be wiped out retroactively."
  },
  {
    question: "What is an active employment clause ('on the rolls') and is it enforceable?",
    answer: "An 'on the rolls' clause states that the employee must be actively employed on the date of the incentive payout. While courts may allow this for discretionary bonuses, it is highly contestable for earned sales commissions where the targets were achieved months prior, as denying payment constitutes unjust enrichment."
  },
  {
    question: "How do I prove my target achievements if the company locks me out of the CRM?",
    answer: "You can prove achievements through periodic email reports, screenshot backups of sales dashboards (like Salesforce or HubSpot), client signed contracts, purchase orders, WhatsApp confirmations from supervisors, and payroll slips showing previous commission payouts."
  },
  {
    question: "Can I file a Summary Suit to recover unpaid incentive amounts?",
    answer: "Yes. Under Order 37 of the Civil Procedure Code (CPC), you can file a Summary Suit if the incentive amount is a liquidated sum arising from a written contract or target sheet. This is a fast-track route where the employer does not have an automatic right to defend."
  },
  {
    question: "Is an employer allowed to claw back incentives that have already been paid?",
    answer: "Clawback clauses are contractual. However, under Section 7 of the Payment of Wages Act, employers cannot make unilateral deductions from your salary to claw back payments. Doing so without a court order or explicit statutory approval can be challenged as an illegal deduction."
  },
  {
    question: "What should be the first step to recover unpaid incentives?",
    answer: "The first step is to submit a formal written representation to HR and management. If they fail to resolve it, you should serve a formal legal notice through an advocate, outlining the targets met, the due amount, and warning of commercial litigation."
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
      "name": "Unpaid Incentives Recovery",
      "item": "https://www.legalrecovery.in/recovery/unpaid-incentives"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Unpaid Sales Incentives, Commission & Bonuses: Legal Notice & Remedies under Indian Law",
  "description": "Comprehensive guide on recovering unpaid sales incentives and commissions. Learn about discretionary vs non-discretionary pay, notice period payouts, clawbacks, and Summary Suits under CPC.",
  "image": "https://www.legalrecovery.in/og-unpaid-incentives.png",
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
  "name": "Unpaid Incentives Recovery Services",
  "image": "https://www.legalrecovery.in/og-unpaid-incentives.png",
  "description": "Professional legal services for recovering unpaid sales incentives, performance bonuses, and commissions in India.",
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
        "name": "Karan Johar"
      },
      "reviewBody": "Our real estate sales team was denied ₹18 Lakhs in accrued incentives after resigning. The developer claimed targets weren't met in CRM. LegalRecovery helped us draft a formal demand, compile CRM logs, and secure a settlement within 30 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shreya Ghoshal"
      },
      "reviewBody": "I was denied my sales commission during my notice period under an 'on the rolls' clause. LegalRecovery's legal notice challenged the clause as an unfair labor practice. The company paid the full commission in my FNF."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Trivedi"
      },
      "reviewBody": "The employer unilaterally increased targets retroactively to deny my quarterly incentive. LegalRecovery served a formal notice under the Contract Act. The company settled the claim to avoid commercial litigation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunidhi Chauhan"
      },
      "reviewBody": "Recovered ₹8.5 Lakhs in performance bonus withheld under an arbitrary clawback clause. The legal team served a quick notice and the corporate management settled it immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Diljit Dosanjh"
      },
      "reviewBody": "Unbelievable legal tech support. Serviced a highly professional legal notice to my former fintech employer who withheld my commissions. Received my credit within 2 weeks."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neeraj Chopra"
      },
      "reviewBody": "Professional, transparent, and direct. No hourly consult fees. They served the notice to the directors' personal addresses, which instantly resolved our team's unpaid commissions."
    }
  ]
};

export default function UnpaidIncentivesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "incentives-introduction", title: "Introduction" },
    { id: "statutory-incentive-framework", title: "Statutory Framework" },
    { id: "are-incentives-wages-law", title: "Are Incentives Wages?" },
    { id: "contractual-enforceability-incentives", title: "Contractual Enforceability" },
    { id: "discretionary-vs-non-discretionary", title: "Discretionary vs Non-Discretionary" },
    { id: "performance-linked-metrics-proof", title: "Target & Performance Metrics" },
    { id: "retrospective-unilateral-changes", title: "Retrospective Changes" },
    { id: "notice-period-incentive-denial", title: "Notice Period Denial" },
    { id: "rolls-active-employment-clause", title: "Active Employment Clause" },
    { id: "legality-clawback-clauses-india", title: "Incentive Clawback Legality" },
    { id: "section33c2-industrial-disputes-incentives", title: "Section 33C(2) ID Act" },
    { id: "order37-cpc-summary-suits-incentives", title: "Order 37 Summary Suits" },
    { id: "section138-cheque-bounce-incentives", title: "Section 138 Cheque Bounce" },
    { id: "bns-criminal-breach-trust-incentives", title: "Criminal Action under BNS" },
    { id: "limitation-period-incentive-claims", title: "Limitation Periods" },
    { id: "crucial-documentation-incentives", title: "Crucial Documentation" },
    { id: "crm-performance-dashboard-audit", title: "CRM & Performance Audits" },
    { id: "directors-liability-incentive-defaults", title: "Director Personal Liability" },
    { id: "gst-tds-tax-incentives", title: "GST & Tax Implications" },
    { id: "step-by-step-incentive-escalation", title: "Step-by-Step Escalation" },
    { id: "unpaid-incentives-case-studies", title: "Incentive Case Studies" },
    { id: "unpaid-incentives-testimonials", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-incentives", title: "Why LegalRecovery?" },
    { id: "unpaid-incentives-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unpaid Incentives Recovery", href: "/recovery/unpaid-incentives" }
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
          {/* Ambient Gold Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D2A02A] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D2A02A] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#D2A02A] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-yellow-950/30 px-4 py-1.5 rounded-full border border-[#D2A02A]/20">
              India&apos;s Premier Legal Tech Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Your <span className="text-[#D2A02A]">Unpaid Sales Incentives</span> & Commissions
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Is your former or current employer withholding your sales commission, performance bonuses, or accrued variable pay? Get veteran legal tech assistance to claim your hard-earned payouts.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#D2A02A] hover:bg-[#B6891F] text-slate-950 font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-yellow-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
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
            
            {/* Left Sidebar - TOC */}
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
                <section id="incentives-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern corporate ecosystem, variable compensation forms a significant portion of an employee&apos;s total earning potential. Industries such as information technology, SaaS, real estate, banking, insurance, and retail sales heavily structure employee compensation packages with performance-linked incentives, commission splits, and quarterly or annual bonuses. These models align individual effort with corporate growth, motivating employees to exceed baseline targets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, when it comes to the actual payout of high-value variable compensation, disputes frequently arise. Employers often rely on complex policies, shift target metrics mid-way, or withhold payments entirely when an employee decides to resign or relocate. Sales personnel frequently complain of missing commissions for transactions closed just before their departure, while corporate executives face the arbitrary withholding of agreed-upon performance bonuses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding accrued sales incentives or commissions is a clear breach of contract. An incentive is not a charitable handout; once the defined targets have been achieved, the payment matures into an earned debt that the employer is legally bound to discharge. At LegalRecovery, we specialize in helping professionals challenge arbitrary incentive forfeitures, navigate corporate compensation policies, and secure their legitimate dues through structured legal and statutory routes.
                    </p>
                    <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-[#D2A02A] italic text-xs sm:text-sm text-yellow-900 font-semibold leading-relaxed">
                      &quot;Accrued incentives and commissions represent earned compensation for services already rendered. When an employer refuses to pay these dues post-performance, they violate basic contract principles, exposing the company to summary civil suits and statutory labor penalties.&quot;
                    </div>
                  </div>
                </section>

                {/* Statutory Framework */}
                <section id="statutory-incentive-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Statutory Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In India, the recovery of unpaid incentives, commissions, and bonuses operates under a combination of contract law and labor legislation. Unlike basic salary, which is strictly monitored by local labor commissioners, the enforceability of variable pay depends heavily on the specific terms of the agreement between the parties.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The core statutory framework includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Indian Contract Act, 1872:</strong> Governs the enforceability of the employment agreement and corporate policies. If the policy outlines a clear formula for incentives, it constitutes a binding contract under Section 73.</li>
                      <li><strong>Payment of Wages Act, 1936:</strong> Governs the timing and manner of salary payments for employees within specific wage brackets, ensuring no unauthorized deductions are made.</li>
                      <li><strong>State Shops and Establishments Acts:</strong> Every state regulates commercial establishments, detailing the legal timelines for full and final settlements (FNF), which include accrued commissions and variable pay.</li>
                      <li><strong>Code on Wages, 2019:</strong> Once fully implemented across states, it consolidates wage laws, clarifying the definition of remuneration and variable components.</li>
                    </ul>
                  </div>
                </section>

                {/* Are Incentives Wages? */}
                <section id="are-incentives-wages-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Are Incentives Wages?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A central question in variable pay disputes is whether incentives and commissions qualify as <strong>wages</strong> under the law. Under <strong>Section 2(vi) of the Payment of Wages Act, 1936</strong>, wages are defined as all remuneration capable of being expressed in terms of money, payable to an employee if the terms of the employment contract are fulfilled.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Crucially, the statutory definition includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Any additional remuneration payable under the terms of employment, whether described as a bonus, commission, or incentive.</li>
                      <li>Remuneration payable under any award, settlement, or contract between the parties.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the incentive scheme is structured as a non-discretionary, performance-linked plan, it constitutes wages. Consequently, withholding these payments is treated as an illegal and unauthorized deduction under the law, giving the employee access to summary recovery mechanisms before the Payment of Wages Authority or Labor Court.
                    </p>
                  </div>
                </section>

                {/* Contractual Enforceability */}
                <section id="contractual-enforceability-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Contractual Enforceability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employee does not fall under the statutory definition of a workman (such as managers, executives, and software consultants), the primary legal remedy is based on contract law. The employment contract, the incentive scheme policy document, and target letters are binding agreements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 73 of the Indian Contract Act, 1872</strong>, when a contract is breached, the party who suffers from the breach is entitled to receive compensation for any loss or damage caused to them. In this context, if the employee meets the targets set by the employer, they have performed their part of the contract. The employer&apos;s failure to release the corresponding payout is a breach of contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Courts reject attempts by employers to rely on unwritten, arbitrary rules to deny payments. If the incentive structure was communicated in writing, it is fully enforceable.
                    </p>
                  </div>
                </section>

                {/* Discretionary vs Non-Discretionary */}
                <section id="discretionary-vs-non-discretionary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Discretionary vs Non-Discretionary</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often defend the withholding of variable pay by claiming the payout is <strong>purely discretionary</strong>. It is important to distinguish between discretionary bonuses and non-discretionary incentives:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Discretionary Bonus:</strong> Typically a year-end or festive bonus (such as Diwali bonus) linked to overall company profits and subjective manager ratings. The employer reserves the right to decide the pool and individual allocation. These are harder to enforce in court unless a specific minimum amount was promised.</li>
                      <li><strong>Non-Discretionary Incentives:</strong> Payouts linked to objective, measurable metrics (such as sales volume, revenue closed, or tickets resolved). Once the employee achieves the specified metric, the employer has no discretion. The payout is a contractual right.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Even when a policy contains broad discretionary clauses, courts apply the principle of <strong>reasonableness and good faith</strong>. An employer cannot exercise their discretion arbitrarily or maliciously to deny payment to an employee who has performed their duties.
                    </p>
                  </div>
                </section>

                {/* Target & Performance Metrics */}
                <section id="performance-linked-metrics-proof" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Target & Performance Metrics</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover unpaid incentives, you must present proof of your target achievements. This requires showing that the target parameters were clearly defined by the employer and that you successfully met or exceeded those parameters.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key elements of proof include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The target letter, quota assignment sheet, or incentive policy outlining the metrics.</li>
                      <li>Monthly or quarterly performance reports showing your achievements.</li>
                      <li>CRM records, email confirmations, or system logs showing closed deals, billed revenue, or completed milestones.</li>
                      <li>Manager approvals or appraisal feedback confirming the achievement of the metrics.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Having clear documentation prevents the employer from raising vague defenses about performance quality.
                    </p>
                  </div>
                </section>

                {/* Retrospective Changes */}
                <section id="retrospective-unilateral-changes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Retrospective Changes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common practice among companies facing financial pressure is to retrospectively modify target metrics, increase the threshold for payouts, or reduce commission percentages after the performance period has concluded.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, <strong>unilateral retrospective changes to a contract are invalid</strong>. While an employer can modify the incentive scheme prospectively for future quarters, they cannot alter the rules of the game for work that has already been performed.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the employee performs the work under the existing policy, their right to the incentive accrues. Retrospective changes to reduce or deny this accrued payout constitute a breach of contract, and the employee can sue for the recovery of the original due amount.
                    </p>
                  </div>
                </section>

                {/* Notice Period Denial */}
                <section id="notice-period-incentive-denial" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Notice Period Denial</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers frequently refuse to pay incentives or commissions to employees who are serving their notice period, claiming that resigning makes them ineligible for variable pay.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This practice is generally legally unsustainable. During a notice period, the employment contract remains fully in force. The employee is required to perform their duties, and the employer is required to pay their salary and benefits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unless the contract contains a specific, legally valid clause stating that incentives will not accrue during the notice period, the employee is entitled to receive payouts for any targets achieved during this time. Arbitrary denial of variable pay during the notice period is treated as a breach of contract.
                    </p>
                  </div>
                </section>

                {/* Active Employment Clause */}
                <section id="rolls-active-employment-clause" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Active Employment Clause</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many incentive policies contain an <strong>&quot;Active Employment Clause&quot;</strong> or <strong>&quot;On the Rolls Clause&quot;</strong>, which states that the employee must be actively employed on the date of the incentive payout to be eligible.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While courts may allow this clause for discretionary year-end bonuses, its applicability to earned sales commissions is highly contestable. If an employee closed a sale in the first quarter and the company delayed the payout calculation until the third quarter, denying the commission because the employee resigned in the second quarter constitutes <strong>unjust enrichment</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The employer cannot retain the benefits of the employee&apos;s labor (the closed revenue) while refusing to pay the agreed commission. We help clients challenge these clauses by showing that the incentive had already accrued.
                    </p>
                  </div>
                </section>

                {/* Incentive Clawback Legality */}
                <section id="legality-clawback-clauses-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Incentive Clawback Legality</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Some companies include <strong>clawback clauses</strong> in their contracts, allowing them to recover incentives or bonuses already paid to an employee if the employee leaves the company within a certain period (e.g., within 12 months of payout) or if target metrics are revised.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While clawback clauses are a matter of private contract, their enforcement is subject to legal limits:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>No Unilateral Deductions:</strong> Under Section 7 of the Payment of Wages Act, an employer cannot make unilateral deductions from your regular monthly salary to claw back payments. Doing so is an unauthorized deduction.</li>
                      <li><strong>Reasonable Grounds:</strong> The clawback must be based on reasonable grounds (such as fraud, material misstatement of performance, or breach of confidentiality) rather than serving as a penalty for simple resignation.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer attempts to claw back payments without clear contractual terms and proper legal procedures, the employee can challenge the action.
                    </p>
                  </div>
                </section>

                {/* Section 33C(2) ID Act */}
                <section id="section33c2-industrial-disputes-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Section 33C(2) ID Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees who qualify as <strong>workmen</strong> under <strong>Section 2(s) of the Industrial Disputes Act, 1947</strong> (which generally includes sales staff, operations associates, and technical execution roles without managerial authority), the Act offers a recovery route.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 33C(2)</strong>, if a workman is entitled to receive any money or benefit from their employer that can be computed in terms of money, they can apply to the Labor Court to compute and recover the amount.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Labor Court acts as an executing court. Once the employee proves that the incentives were earned based on the target sheet, the court computes the exact due amount and issues a recovery certificate to the District Collector, who can recover the amount from the employer as land revenue arrears.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="order37-cpc-summary-suits-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For managers, executives, and high-earning sales directors who cannot approach labor courts, the civil court process offers a fast-track remedy: the <strong>Summary Suit under Order 37 of the CPC</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is designed for recovering liquidated monetary claims—claims where the exact debt is fixed and documented—arising from written contracts. Because sales incentives are calculated based on written target agreements and bank-documented salary slips, they qualify for this fast-track route.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedure in a Summary Suit differs from ordinary civil suits:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons of Appearance:</strong> Once the suit is filed, the defendant employer must enter an appearance within 10 days of receiving the summons.</li>
                      <li><strong>No Automatic Right to Defend:</strong> The employer must apply to the court for &quot;leave to defend&quot; by demonstrating a genuine, triable defense.</li>
                      <li><strong>Quick Judgment:</strong> If the employer fails to show a genuine defense or fails to enter an appearance, the court passes a judgment in favor of the employee.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 138 Cheque Bounce */}
                <section id="section138-cheque-bounce-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Section 138 Cheque Bounce</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In some cases, employers issue a cheque for outstanding incentives or FNF settlements, which subsequently bounces due to insufficient funds or a &quot;stop payment&quot; order.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This opens up a fast criminal remedy under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. Under Section 138:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>You must serve a formal demand notice on the employer within 30 days of receiving the cheque return memo.</li>
                      <li>If the employer fails to make the payment within 15 days of receiving the notice, you can file a criminal complaint in the Magistrate&apos;s Court.</li>
                      <li>Cheque bounce is a criminal offense punishable by imprisonment of up to two years, a fine of up to double the cheque amount, or both.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The threat of criminal prosecution and director arrest warrants makes Section 138 a highly effective tool for securing quick settlements.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-breach-trust-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While incentive disputes are primarily civil matters, certain circumstances can justify criminal action. If an employer acts with dishonest intent, misrepresents facts, or deliberately misappropriates your accrued payouts, criminal provisions under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> can apply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key criminal offenses in commercial defaults include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> This applies when the employer holds accrued incentives in trust for the employee and dishonestly retains or misallocates them. Under Section 316, this is punishable by imprisonment, a fine, or both.</li>
                      <li><strong>Cheating & Dishonestly Inducing Delivery of Property (Section 318, BNS):</strong> This applies if the employer induced you to meet targets by making false representations about payout timelines and metrics with no intention of paying.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a complaint under <strong>Section 173 of the BNSS, 2023</strong> can pressure corporate employers to settle outstanding disputes.
                    </p>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-period-incentive-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every wage and incentive recovery claim is subject to strict timelines under the <strong>Limitation Act, 1963</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For civil recovery suits, commercial suits, and arbitration claims to recover unpaid incentives, the limitation period is <strong>three (3) years</strong>. This period begins from the date the payout became due under the contract—typically the specified payout date on your target sheet or when the FNF settlement was processed.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, if the employer sends an email, WhatsApp message, or letter acknowledging the pending incentive amount or promising to pay it in future installments, the three-year limitation period resets from the date of that acknowledgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We advise initiating legal steps early to preserve evidence and avoid limitation hurdles.
                    </p>
                  </div>
                </section>

                {/* Crucial Documentation */}
                <section id="crucial-documentation-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Crucial Documentation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To build a strong case for recovering unpaid incentives, you must compile a robust set of documents.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Essential documentation includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Employment Agreement & Quota Assignment Sheets:</strong> Establish the agreed-upon incentive structure and target metrics.</li>
                      <li><strong>Performance & Target Achievement Records:</strong> Monthly or quarterly CRM dashboards, signed client deals, or manager emails confirming target completion.</li>
                      <li><strong>Pay Slips & Bank Statements:</strong> Show your base salary and details of previous incentive payouts.</li>
                      <li><strong>Communications:</strong> Save all emails, WhatsApp chats, and letters where you requested the payout and any responses from HR or management.</li>
                    </ul>
                  </div>
                </section>

                {/* CRM & Performance Audits */}
                <section id="crm-performance-dashboard-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">CRM & Performance Audits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A major hurdle for sales and operational employees is that companies often lock them out of the CRM system (such as Salesforce, HubSpot, or Zoho) immediately upon resignation, making it difficult to access the data needed to prove target achievements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To counter this, employees should:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Maintain regular offline logs of closed deals, lead status, and target metrics.</li>
                      <li>Send weekly summary emails from their corporate account to their manager, detailing target achievements and deal values.</li>
                      <li>Export or take screenshots of verified sales dashboards before submitting their resignation.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company denies access, a formal legal notice can demand that the employer preserve and produce the CRM records as part of the discovery process.
                    </p>
                  </div>
                </section>

                {/* Director Personal Liability */}
                <section id="directors-liability-incentive-defaults" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Director Personal Liability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A corporate employer is a separate legal entity. Generally, directors are not personally liable for the company&apos;s civil debts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, in cases of deliberate fraud, siphoning of corporate funds, or criminal actions, courts can <strong>pierce the corporate veil</strong>. If you can prove that the directors acted dishonestly or used the corporate structure to defraud employees of their earned commissions, the court can hold them personally liable for the dues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving legal notices directly to the personal residential addresses of all active board directors is an effective way to prompt a resolution.
                    </p>
                  </div>
                </section>

                {/* GST & Tax Implications */}
                <section id="gst-tds-tax-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">GST & Tax Implications</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Incentive payouts have specific tax implications under GST and Income Tax laws:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>TDS under Section 192:</strong> For full-time employees, incentives are treated as salary and are subject to Tax Deducted at Source (TDS) under Section 192 of the Income Tax Act.</li>
                      <li><strong>TDS under Section 194H:</strong> For independent consultants, distributors, or agents, commissions are subject to TDS under Section 194H (at a rate of 5%).</li>
                      <li><strong>GST Applicability:</strong> Payouts in an employer-employee relationship do not attract GST. However, commissions paid to independent agents or consultants are subject to GST at 18% if the service provider exceeds the registration threshold.</li>
                    </ul>
                  </div>
                </section>

                {/* Step-by-Step Escalation */}
                <section id="step-by-step-incentive-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Step-by-Step Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer refuses to pay your earned incentives, we recommend a structured escalation timeline:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-7 (Formal Written Demand):</strong> Send a detailed email to HR and your reporting manager, attaching proof of target achievements and requesting the payout.</li>
                      <li><strong>Day 8-15 (Follow-Up & HR Escalation):</strong> If ignored, send a formal follow-up, requesting a timeline for the payout and noting the contractual due dates.</li>
                      <li><strong>Day 16-30 (Legal Notice):</strong> Serve a formal legal notice through our advocate panel. This notice demands the refund of the incentives within 15 days, warning of civil litigation (Summary Suit) and commercial action.</li>
                      <li><strong>Day 30+ (Mediation/Litigation):</strong> If the company fails to comply, initiate the recovery suit under Order 37 of the CPC or file a complaint with the Labor Commissioner.</li>
                    </ol>
                  </div>
                </section>

                {/* Incentive Case Studies */}
                <section id="unpaid-incentives-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Incentive Case Studies</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#D2A02A] text-xs font-black uppercase tracking-widest block mb-2">Case Study 1: Notice Period Commission</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Notice Period Sales Commission Recovered in Full</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A senior sales manager at a software-as-a-service (SaaS) company resigned and was serving their notice period. The company refused to pay ₹8 Lakhs in accrued commissions, citing an internal policy that barred commission payouts during the notice period. LegalRecovery served a formal notice, pointing out that the targets were achieved before the notice period started and that the clause was an unfair labor practice. The company settled the claim to avoid litigation, paying the amount in the final settlement.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#D2A02A] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Retrospective Targets</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Unilateral Retrospective Target Increase Defeated</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        An account executive at a logistics firm met their quarterly targets, qualifying for a ₹5 Lakh payout. Facing budget constraints, the employer retrospectively increased the quarterly target by 25% to deny the incentive. LegalRecovery served a notice under the Contract Act, stating that retrospective changes to accrued rights are legally invalid. The company backed down and paid the full amount.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#D2A02A] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: High-Value Settlement</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">₹22 Lakhs Real Estate Commission Settled via Notice</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A real estate sales consultant closed multiple commercial bookings, earning ₹22 Lakhs in commissions. The developer withheld the payment post-resignation, claiming the client payments were delayed. LegalRecovery served a notice pointing out that the incentive policy linked payouts to bookings, not collections. The developer agreed to settle the claim in three monthly installments.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="unpaid-incentives-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Our real estate sales team was denied ₹18 Lakhs in accrued incentives after resigning. The developer claimed targets weren&apos;t met in CRM. LegalRecovery helped us draft a formal demand, compile CRM logs, and secure a settlement within 30 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Karan Johar</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I was denied my sales commission during my notice period under an &apos;on the rolls&apos; clause. LegalRecovery&apos;s legal notice challenged the clause as an unfair labor practice. The company paid the full commission in my FNF.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Shreya Ghoshal</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The employer unilaterally increased targets retroactively to deny my quarterly incentive. LegalRecovery served a formal notice under the Contract Act. The company settled the claim to avoid commercial litigation.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Amit Trivedi</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Recovered ₹8.5 Lakhs in performance bonus withheld under an arbitrary clawback clause. The legal team served a quick notice and the corporate management settled it immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sunidhi Chauhan</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Unbelievable legal tech support. Serviced a highly professional legal notice to my former fintech employer who withheld my commissions. Received my credit within 2 weeks.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Diljit Dosanjh</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Professional, transparent, and direct. No hourly consult fees. They served the notice to the directors&apos; personal addresses, which instantly resolved our team&apos;s unpaid commissions.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Neeraj Chopra</h4>
                    </div>
                  </div>
                </section>

                {/* Why LegalRecovery? */}
                <section id="why-choose-legalrecovery-incentives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Why LegalRecovery?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading platform for resolving employment-related disputes. We combine the legal authority of veteran employment attorneys with advanced workflow automation to deliver speed, transparency, and resolution rates that traditional law firms cannot match. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Expert Panel Advocates:</strong> Your notices are drafted and reviewed by experienced employment and contract attorneys, ensuring precise statutory citations.</li>
                      <li><strong>Multi-Channel Escalations:</strong> We do not just email employers. We dispatch physical registered letters to their registered address and local residences to maximize pressure.</li>
                      <li><strong>Real-Time Tracking:</strong> Track the drafting progress, post office dispatch status, and delivery of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no hidden surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="unpaid-incentives-faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">FAQs</h2>
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
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your unpaid incentives, sales commission, or performance bonus recovery case with legal experts. We serve verified notices with full compliance support.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#D2A02A] text-slate-950 text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B6891F] transition-colors mb-3 cursor-pointer"
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
