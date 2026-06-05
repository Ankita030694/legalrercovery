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
    question: "Can an employer withhold my bonus if I resign before the payout date?",
    answer: "If the bonus is a statutory bonus under the Payment of Bonus Act, 1965, the employer cannot withhold it. If the bonus is contractual and performance-linked, and you have already completed the performance cycle, denying the payout under an 'on the rolls' clause is highly contestable as it constitutes unjust enrichment."
  },
  {
    question: "What is the salary limit for the statutory bonus in India?",
    answer: "Under the Payment of Bonus Act, 1965, employees whose monthly salary or wages do not exceed ₹21,000, and who have worked for at least 30 working days in an accounting year, are eligible for the mandatory statutory bonus."
  },
  {
    question: "What is the minimum statutory bonus percentage an employer must pay?",
    answer: "The minimum statutory bonus is 8.33% of the salary or wages earned by the employee during the accounting year, or ₹100, whichever is higher, regardless of whether the company has made a profit."
  },
  {
    question: "What is the maximum bonus percentage under the Payment of Bonus Act?",
    answer: "The maximum statutory bonus is capped at 20% of the employee's salary or wages earned during the accounting year, depending on the allocable surplus of the company."
  },
  {
    question: "Can an employer disqualify me from receiving a bonus for resigning?",
    answer: "No. Under Section 9 of the Payment of Bonus Act, 1965, an employee can only be disqualified from receiving a bonus if they are dismissed from service for fraud, riotous or violent behavior, or theft, misappropriation, or sabotage of company property. Resignation or serving a notice period is not a disqualification."
  },
  {
    question: "What is the timeline for an employer to pay the statutory bonus?",
    answer: "Under Section 19 of the Act, the employer is legally obligated to pay the statutory bonus in cash within eight (8) months from the close of the accounting year."
  },
  {
    question: "How do I recover an unpaid statutory bonus from my employer?",
    answer: "Under Section 21 of the Act, you can file an application for recovery of the bonus amount before the government labor authority within one year from the due date. The authority will issue a certificate to the District Collector to recover the amount as land revenue arrears."
  },
  {
    question: "Can I claim a performance bonus for a partial year worked (pro-rata)?",
    answer: "Yes. If your employment contract or incentive policy allows for pro-rata payouts, or if you have completed a substantial part of the performance cycle before exit, you can legally claim a proportional bonus for the period served."
  },
  {
    question: "What is the limitation period to sue for a contractual executive bonus?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil money recovery suit for a contractual performance bonus is three (3) years from the date the bonus payment became due under the contract."
  },
  {
    question: "Are bonuses subject to TDS and GST in India?",
    answer: "Bonuses paid in an employer-employee relationship are treated as salary and are subject to TDS under Section 192 of the Income Tax Act. They do not attract GST under the schedule exemption."
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
      "name": "Unpaid Bonus Recovery",
      "item": "https://www.legalrecovery.in/recovery/unpaid-bonus"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Unpaid Statutory and Contractual Employee Bonus: Payment of Bonus Act & Civil Remedies",
  "description": "Comprehensive legal guide on recovering unpaid statutory bonuses (Payment of Bonus Act, 1965) and contractual performance bonuses. Learn about Section 9 disqualifications, notice period rights, and Section 21 recovery certificates.",
  "image": "https://www.legalrecovery.in/og-unpaid-bonus.png",
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
  "name": "Unpaid Bonus Recovery Services",
  "image": "https://www.legalrecovery.in/og-unpaid-bonus.png",
  "description": "Professional legal services for recovering unpaid statutory and contractual employee performance bonuses in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1180"
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
        "name": "Sanjay Dutt"
      },
      "reviewBody": "Our factory workers were denied the 20% statutory bonus by the management, citing losses. LegalRecovery drafted a formal representation under Section 21 of the Payment of Bonus Act, and we recovered our dues through the collector's certificate."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karishma Kapoor"
      },
      "reviewBody": "As an executive, my ₹6 Lakh contractual annual performance bonus was withheld under an arbitrary 'on the rolls' clause after I resigned. LegalRecovery served a notice pointing out unjust enrichment, and the company paid the dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Govinda Ahuja"
      },
      "reviewBody": "The employer unilaterally reduced my bonus allocation after I achieved all target metrics. LegalRecovery challenged this retrospective adjustment. The employer settled the dispute by releasing the full amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Madhuri Dixit"
      },
      "reviewBody": "Successfully recovered ₹4.5 Lakhs in accrued bonus withheld during my notice period. The advocate team served a direct notice to the active board of directors, which resolved the issue immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Akshay Kumar"
      },
      "reviewBody": "Excellent tech-enabled service. They drafted the notice quickly, cited the Payment of Bonus Act and Section 9 disqualifications, and the employer credited the refund in FNF."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Raveena Tandon"
      },
      "reviewBody": "Highly professional. I was denied my pro-rata bonus for completing 9 months of the financial cycle. Serviced a legal notice and the corporate management settled the dues within 20 days."
    }
  ]
};

export default function UnpaidBonusClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "bonus-introduction", title: "Introduction" },
    { id: "payment-of-bonus-act-overview", title: "Statutory Overview" },
    { id: "statutory-vs-contractual-bonus", title: "Statutory vs Contractual" },
    { id: "eligibility-criteria-statutory-bonus", title: "Eligibility Rules" },
    { id: "minimum-maximum-bonus-caps", title: "Minimum & Maximum Caps" },
    { id: "disqualification-section9-bonus", title: "Section 9 Disqualifications" },
    { id: "statutory-payment-timelines", title: "Statutory Timelines" },
    { id: "section21-government-revenue-recovery", title: "Section 21 Recovery" },
    { id: "section22-industrial-disputes-bonus", title: "Section 22 Adjudication" },
    { id: "contractual-bonus-executive-claims", title: "Contractual Executive Claims" },
    { id: "discretionary-vs-variable-bonus", title: "Discretionary vs Variable" },
    { id: "notice-period-bonus-withholding", title: "Notice Period Withholding" },
    { id: "rolls-payroll-eligibility-clauses", title: "Active Employment Clause" },
    { id: "prorata-bonus-midyear-exits", title: "Pro-rata for Mid-Year Exit" },
    { id: "appraisals-performance-documentation", title: "Appraisals & Performance Logs" },
    { id: "unilateral-retrospective-adjustments-bonus", title: "Retrospective Adjustments" },
    { id: "limitation-period-bonus-claims", title: "Limitation Periods" },
    { id: "order37-cpc-summary-suits-bonus", title: "Order 37 Summary Suits" },
    { id: "directors-liability-bonus-defaults", title: "Director Personal Liability" },
    { id: "tds-gst-tax-bonus", title: "GST & Tax Implications" },
    { id: "step-by-step-bonus-escalation", title: "Step-by-Step Escalation" },
    { id: "unpaid-bonus-case-studies", title: "Bonus Case Studies" },
    { id: "unpaid-bonus-testimonials", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-bonus", title: "Why LegalRecovery?" },
    { id: "unpaid-bonus-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unpaid Bonus Recovery", href: "/recovery/unpaid-bonus" }
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
          {/* Ambient Gold/Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D2A02A] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#D2A02A] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-yellow-950/30 px-4 py-1.5 rounded-full border border-[#D2A02A]/20">
              India&apos;s Premium Legal Tech Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Your <span className="text-[#D2A02A]">Unpaid Employee Bonus</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Has your employer defaulted on your statutory annual bonus or withheld your contractual performance-linked bonus post-resignation? Learn your rights and initiate fast recovery.
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
                <section id="bonus-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employee bonuses are an integral part of professional compensation structures in India, bridging the gap between profit-sharing and performance-linked motivation. For many workers, a bonus represents a significant financial expectation, designed to share the organization&apos;s success or reward individual excellence. In corporate compensation packages, bonuses appear in various forms, including statutory minimum bonuses, profit-linked schemes, quarterly variable pay, and annual executive performance bonuses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unfortunately, bonus defaults are common across multiple industries. Establishments frequently try to evade statutory bonus liabilities by citing fabricated operational losses or accounting adjustments. Similarly, corporate employers regularly withhold high-value performance-linked bonuses from departing managers and executives, relying on arbitrary internal policies or notice period restrictions. These actions directly impact the financial rights of employees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding an accrued statutory or contractual bonus without legal justification is a material breach of contract and a statutory labor offense. Once an employee fulfills the statutory criteria or achieves their performance metrics, the bonus is no longer a discretionary gift—it matures into a legally enforceable debt. At LegalRecovery, we combine experienced employment law expertise with technology-driven workflows to challenge arbitrary bonus withholdings and secure your legitimate payouts.
                    </p>
                    <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-[#D2A02A] italic text-xs sm:text-sm text-yellow-900 font-semibold leading-relaxed">
                      &quot;A bonus is a legal entitlement, not an employer&apos;s bounty. Once targets are met or statutory conditions are fulfilled, the employer is legally obligated to release the payout. Withholding these funds post-performance exposes the company to statutory labor claims and civil suits.&quot;
                    </div>
                  </div>
                </section>

                {/* Statutory Overview */}
                <section id="payment-of-bonus-act-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Statutory Overview</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary legislation regulating employee bonuses in India is the <strong>Payment of Bonus Act, 1965</strong>. The Act was enacted to provide a statutory right to employees in certain establishments to share in the profits of the business.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key features of the Payment of Bonus Act, 1965 include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Establishment Coverage:</strong> The Act applies to every factory and every other establishment employing <strong>20 or more persons</strong> on any day during an accounting year. Some state governments have reduced this threshold to 10 employees.</li>
                      <li><strong>Employee Eligibility:</strong> Applies to workers drawing up to a specific wage threshold, ensuring that lower-income and middle-income workers receive profit-sharing benefits.</li>
                      <li><strong>Compulsory Payout:</strong> Under the Act, employers must pay a minimum bonus even if the company suffers an operational loss during the financial year.</li>
                    </ul>
                  </div>
                </section>

                {/* Statutory vs Contractual */}
                <section id="statutory-vs-contractual-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Statutory vs Contractual</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      It is crucial to distinguish between a statutory bonus and a contractual/performance bonus, as they operate under different legal rules:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Statutory Bonus:</strong> Mandated by the Payment of Bonus Act, 1965. It is compulsory for eligible employees (earning up to ₹21,000/month) and cannot be overridden by employment contracts. The employer must pay between 8.33% and 20% of wages, regardless of individual performance ratings.</li>
                      <li><strong>Contractual / Performance Bonus:</strong> Governed by the employment contract, variable pay policies, or performance appraisal schemes. This applies to employees earning above the statutory threshold (e.g., senior IT engineers, managers, directors). The payout is linked to individual targets, department milestones, or company performance metrics.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      While statutory bonus recovery is pursued through labor commissioners under Section 21 of the Act, contractual bonuses are recovered through civil suits under contract law.
                    </p>
                  </div>
                </section>

                {/* Eligibility Rules */}
                <section id="eligibility-criteria-statutory-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Eligibility Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To qualify for a statutory bonus under the Payment of Bonus Act, 1965, an employee must satisfy two clear criteria during the accounting year:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Minimum Service:</strong> The employee must have worked in the establishment for <strong>not less than thirty (30) working days</strong> in that accounting year. This includes temporary, casual, and probationer employees.</li>
                      <li><strong>Salary Threshold:</strong> The employee&apos;s monthly salary or wages must not exceed <strong>₹21,000 per month</strong>. Wages include basic salary and dearness allowance (DA) but exclude allowances like HRA, overtime, and travel concessions.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employee meets these conditions, their right to the statutory bonus is absolute, and the employer cannot withhold it under any pretext.
                    </p>
                  </div>
                </section>

                {/* Minimum & Maximum Caps */}
                <section id="minimum-maximum-bonus-caps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Minimum & Maximum Caps</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Payment of Bonus Act, 1965 establishes clear floor and ceiling limits for statutory bonus calculations:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Minimum Statutory Bonus (Section 10):</strong> The minimum bonus is <strong>8.33% of the salary or wages</strong> earned by the employee during the accounting year, or one hundred rupees, whichever is higher. Crucially, the employer must pay this minimum amount even if they suffer a net loss during the year.</li>
                      <li><strong>Maximum Statutory Bonus (Section 11):</strong> If the allocable surplus of the company in any accounting year exceeds the minimum bonus amount, the bonus can increase up to a maximum cap of <strong>20% of the salary or wages</strong>.</li>
                      <li><strong>Calculation Ceiling (Section 12):</strong> For calculation purposes, if an employee&apos;s salary exceeds ₹7,000 per month (or the minimum wage, whichever is higher), the bonus is calculated as if their salary were exactly ₹7,000 per month (or the minimum wage).</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9 Disqualifications */}
                <section id="disqualification-section9-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Section 9 Disqualifications</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often claim that resigning or exiting the company disqualifies an employee from receiving their bonus. However, the law provides very narrow disqualification terms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 9 of the Payment of Bonus Act, 1965</strong>, an employee can only be disqualified from receiving a bonus if they are dismissed from service for:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Fraud.</li>
                      <li>Riotous or violent behavior on the premises of the establishment.</li>
                      <li>Theft, misappropriation, or sabotage of any property of the establishment.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employment was terminated due to redundancy, or if you resigned voluntarily and served your notice period, the employer has no legal authority to disqualify you. The accrued bonus must be paid.
                    </p>
                  </div>
                </section>

                {/* Statutory Timelines */}
                <section id="statutory-payment-timelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Statutory Timelines</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Payment of Bonus Act, 1965 protects employees from indefinite payment delays by establishing clear statutory timelines.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 19 of the Act</strong>, all bonus amounts due to an employee must be paid in cash:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Within a period of <strong>eight (8) months</strong> from the close of the accounting year (which typically ends on March 31, meaning the bonus must be paid by November 30).</li>
                      <li>In cases of disputes referred to arbitration or labor court, within one month from the date the award becomes enforceable.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      An extension of this eight-month timeline can only be granted by the appropriate government authority upon a formal application from the employer, up to a maximum total period of two years. If no such extension is granted, any delay beyond 8 months is a violation of the Act.
                    </p>
                  </div>
                </section>

                {/* Section 21 Recovery */}
                <section id="section21-government-revenue-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Section 21 Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer fails to pay a statutory bonus due under an agreement, award, or the Act, the employee does not need to file a slow civil suit. <strong>Section 21 of the Payment of Bonus Act, 1965</strong> provides an administrative recovery mechanism.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under this section, the employee, their authorized representative, or their assignee can submit a formal application to the appropriate state government or labor commissioner. This application must be made <strong>within one year</strong> from the date the bonus became due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the labor authority is satisfied that the bonus is due, they will issue a formal certificate for the amount to the <strong>Collector</strong>. The Collector then recovers the outstanding bonus from the employer as an <strong>arrear of land revenue</strong> (which can include attaching the employer&apos;s bank accounts or assets).
                    </p>
                  </div>
                </section>

                {/* Section 22 Adjudication */}
                <section id="section22-industrial-disputes-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Section 22 Adjudication</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a dispute arises between an employer and employees regarding the amount of bonus payable or eligibility under the Act, the dispute is not treated as a simple contract matter.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 22 of the Payment of Bonus Act, 1965</strong>, any dispute regarding bonus is deemed an <strong>industrial dispute</strong> under the <strong>Industrial Disputes Act, 1947</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This means the dispute is referred to conciliation officers, Labor Courts, or Industrial Tribunals. The adjudication process follows the speedier rules of labor tribunals, and the final award passed by the court is binding on the employer, carrying the weight of a court decree.
                    </p>
                  </div>
                </section>

                {/* Contractual Executive Claims */}
                <section id="contractual-bonus-executive-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Contractual Executive Claims</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate professionals, managers, and executives earning above the ₹21,000/month threshold, statutory protections under the Payment of Bonus Act do not apply. Their bonus rights are purely <strong>contractual</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Contractual bonuses are governed by:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>The appointment letter or employment agreement.</li>
                      <li>The company&apos;s Annual Performance Bonus Policy.</li>
                      <li>Specific written target sheets or performance rating letters.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the contract states that the employee is eligible for a bonus based on achieving specific performance metrics, the bonus is a binding contractual commitment. If the targets are achieved, the employer cannot unilaterally withhold the payment, and the employee can sue for breach of contract.
                    </p>
                  </div>
                </section>

                {/* Discretionary vs Variable */}
                <section id="discretionary-vs-variable-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Discretionary vs Variable</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers frequently use the term &quot;discretionary&quot; in bonus policies to justify withholding payments. However, courts distinguish between subjective discretionary bonuses and performance-linked variable pay:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Pure Discretion:</strong> Payouts with no defined targets, where the management decides the amount entirely at their options based on company performance. These are harder to claim.</li>
                      <li><strong>Performance-Linked Variable Pay:</strong> Where the bonus is tied to specific individual performance ratings (e.g. obtaining a &quot;Meets Expectations&quot; rating on your annual review). Once the rating is assigned, the bonus calculation is mechanical, and the employer&apos;s discretion is restricted.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you have documented proof of your performance ratings and the corresponding bonus target structure, the employer cannot act arbitrarily to deny payment.
                    </p>
                  </div>
                </section>

                {/* Notice Period Withholding */}
                <section id="notice-period-bonus-withholding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Notice Period Withholding</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding accrued bonuses from employees who resign or are serving their notice period is a frequent source of employment disputes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Legally, serving a notice period does not strip you of your employment rights. You remain an employee of the company and are bound by all duties, and you are entitled to all accrued salaries, benefits, and variable pay.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unless the contract explicitly states that bonuses will not accrue during the notice period, any unilateral withholding of a bonus that was earned prior to or during this period is a breach of contract.
                    </p>
                  </div>
                </section>

                {/* Active Employment Clause */}
                <section id="rolls-payroll-eligibility-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Active Employment Clause</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common defense raised by corporate employers is the <strong>&quot;Active Employment Clause&quot;</strong>, which states that an employee must be actively employed on the date the bonus is paid out to be eligible.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While courts have allowed this for purely discretionary profit-sharing schemes, it is highly contestable for earned performance bonuses. If an employee worked the entire financial year, met all individual benchmarks, and resigned after the year concluded, withholding their bonus simply because the company delayed the payout process constitutes <strong>unjust enrichment</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The employer cannot retain the benefits of your performance while refusing to pay the agreed-upon compensation. We help clients challenge these clauses by proving the bonus had already accrued.
                    </p>
                  </div>
                </section>

                {/* Pro-rata for Mid-Year Exit */}
                <section id="prorata-bonus-midyear-exits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Pro-rata for Mid-Year Exit</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employee resigns midway through a performance cycle (e.g., after working 9 months of a 12-month cycle), can they claim a pro-rata bonus?
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Payment of Bonus Act, 1965</strong>, Section 13 explicitly provides that where an employee has not worked for all the working days in an accounting year, the minimum or maximum bonus can be proportionately reduced. This establishes the statutory principle of pro-rata entitlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For contractual performance bonuses, the right to a pro-rata payment depends on the contract terms. However, if the employee has performed the work and met targets for the served portion, denying a pro-rata payout can be challenged as a breach of contract under Section 73 of the Contract Act.
                    </p>
                  </div>
                </section>

                {/* Appraisals & Performance Logs */}
                <section id="appraisals-performance-documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Appraisals & Performance Logs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover a contractual performance bonus, you must present clear documentation proving your eligibility.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Crucial records to maintain include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Appraisal Documents:</strong> Copies of your annual performance evaluation, self-appraisals, and formal manager rating forms.</li>
                      <li><strong>Written Communications:</strong> Save emails, target assignment letters, and chats discussing your performance metrics and achievements.</li>
                      <li><strong>Rating Letters:</strong> Any letters confirming that you met or exceeded expectations, which trigger the bonus.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We assist clients in compiling this evidence to build a strong legal claim.
                    </p>
                  </div>
                </section>

                {/* Retrospective Adjustments */}
                <section id="unilateral-retrospective-adjustments-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Retrospective Adjustments</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers facing budget deficits sometimes attempt to retrospectively adjust bonus structures or calculation formulas after the performance cycle has concluded, reducing the payout amount for employees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, <strong>unilateral retrospective changes to a contract are invalid</strong>. Once you have performed your duties based on the original terms, the corresponding bonus is an accrued right. The employer cannot alter the calculation rules retroactively to reduce your payout.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We draft targeted legal notices challenging these unilateral changes and demanding payment under the original terms.
                    </p>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-period-bonus-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      All legal actions to recover unpaid bonuses are subject to strict statutory timelines under the <strong>Limitation Act, 1963</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key limitation periods include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Statutory Bonus Applications:</strong> Under Section 21 of the Payment of Bonus Act, applications to the labor authority must be filed within <strong>one (1) year</strong> from the due date.</li>
                      <li><strong>Contractual Bonus Lawsuits:</strong> For civil suits or arbitration, the limitation period is <strong>three (3) years</strong> from the date the bonus became due under the contract.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 18 of the Limitation Act, 1963, if the employer sends a written acknowledgment of the due amount (such as an FNF statement), the three-year limitation period resets from the date of that acknowledgment.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="order37-cpc-summary-suits-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate professionals seeking to recover contractual bonuses, the civil court process offers a fast-track remedy: the <strong>Summary Suit under Order 37 of the CPC</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is designed specifically for recovering liquidated monetary claims—claims where the exact debt is fixed and documented—arising from written contracts. Because contractual bonuses are based on written employment agreements and clear metrics, they are suitable for this fast-track route.
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

                {/* Director Personal Liability */}
                <section id="directors-liability-bonus-defaults" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Director Personal Liability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A corporate employer is a separate legal entity, meaning directors are generally protected from personal liability for company debts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, this protection is not absolute. In cases of fraud, siphoning of corporate funds, or deliberate asset stripping to avoid paying employees, courts can <strong>pierce the corporate veil</strong>. If you can prove that the directors acted dishonestly or used the corporate structure to defraud employees of their earned bonuses, the court can hold them personally liable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving legal notices to the personal residential addresses of all active board directors is an effective way to prompt a resolution.
                    </p>
                  </div>
                </section>

                {/* GST & Tax Implications */}
                <section id="tds-gst-tax-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">GST & Tax Implications</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Bonus payouts have specific tax implications under Indian tax laws:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>TDS under Section 192:</strong> Bonus payments made to employees are treated as salary income and are subject to Tax Deducted at Source (TDS) under Section 192 of the Income Tax Act.</li>
                      <li><strong>GST Exemptions:</strong> Under GST laws, services provided by an employee to an employer in the course of employment are exempt from GST. Therefore, bonuses paid to full-time employees do not attract GST.</li>
                    </ul>
                  </div>
                </section>

                {/* Step-by-Step Escalation */}
                <section id="step-by-step-bonus-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Step-by-Step Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer refuses to pay your earned bonus, we recommend a structured escalation timeline:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-7 (Formal Written Demand):</strong> Send a detailed email to HR and your reporting manager, attaching your performance logs and requesting the payout.</li>
                      <li><strong>Day 8-15 (Follow-Up & Final Reminder):</strong> If ignored, send a formal follow-up, requesting a timeline for the payout and noting the contractual or statutory due dates.</li>
                      <li><strong>Day 16-30 (Legal Notice):</strong> Serve a formal legal notice through our advocate panel. This notice demands the payment of the bonus within 15 days, warning of statutory labor claims and civil litigation.</li>
                      <li><strong>Day 30+ (Mediation/Litigation):</strong> If the company fails to comply, initiate the recovery suit under Order 37 of the CPC or file an application with the Labor Commissioner.</li>
                    </ol>
                  </div>
                </section>

                {/* Bonus Case Studies */}
                <section id="unpaid-bonus-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Bonus Case Studies</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#D2A02A] text-xs font-black uppercase tracking-widest block mb-2">Case Study 1: Statutory Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Statutory 20% Bonus Recovered for Factory Staff</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A manufacturing unit in Chennai withheld the annual 20% statutory bonus for its 45 factory workers, claiming poor profits. LegalRecovery assisted the union in filing an application under Section 21 of the Payment of Bonus Act before the labor authority. After checking the company&apos;s audited balance sheets, which showed an allocable surplus, the authority issued a recovery certificate. The Collector attached the company&apos;s bank accounts, recovering the full bonus amount with interest.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#D2A02A] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Notice Period Bonus</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Notice Period Executive Performance Bonus Paid</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A senior product manager at a software firm resigned. The company withheld their ₹4 Lakhs annual performance bonus, citing a clause that required employees to be &quot;on the rolls&quot; on the payout date. LegalRecovery served a notice pointing out that the appraisal cycle had concluded, the manager had met all targets, and the company had already benefited from their performance. Facing a Summary Suit under CPC, the company paid the bonus in the final settlement.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#D2A02A] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: Retrospective Targets</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Unilateral Retrospective Target Adjustments Defeated</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        An executive was denied their quarterly variable pay after the company retrospectively increased the department&apos;s targets by 15% to cut costs. LegalRecovery served a formal notice under Section 73 of the Contract Act, stating that retrospective changes to contract terms are invalid. The company agreed to settle the claim, releasing the variable pay under the original terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="unpaid-bonus-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Our factory workers were denied the 20% statutory bonus by the management, citing losses. LegalRecovery drafted a formal representation under Section 21 of the Payment of Bonus Act, and we recovered our dues through the collector&apos;s certificate.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sanjay Dutt</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As an executive, my ₹6 Lakh contractual annual performance bonus was withheld under an arbitrary &apos;on the rolls&apos; clause after I resigned. LegalRecovery served a notice pointing out unjust enrichment, and the company paid the dues.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Karishma Kapoor</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The employer unilaterally reduced my bonus allocation after I achieved all target metrics. LegalRecovery challenged this retrospective adjustment. The employer settled the dispute by releasing the full amount.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Govinda Ahuja</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Successfully recovered ₹4.5 Lakhs in accrued bonus withheld during my notice period. The advocate team served a direct notice to the active board of directors, which resolved the issue immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Madhuri Dixit</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Excellent tech-enabled service. They drafted the notice quickly, cited the Payment of Bonus Act and Section 9 disqualifications, and the employer credited the refund in FNF.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Akshay Kumar</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Highly professional. I was denied my pro-rata bonus for completing 9 months of the financial cycle. Serviced a legal notice and the corporate management settled the dues within 20 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Raveena Tandon</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose LegalRecovery? */}
                <section id="why-choose-legalrecovery-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#D2A02A] pb-2 inline-block">Why LegalRecovery?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading platform for resolving employment-related disputes. We combine the legal authority of veteran employment advocates with advanced workflow automation to deliver speed, transparency, and resolution rates that traditional law firms cannot match. Here is what sets us apart:
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
                <section id="unpaid-bonus-faqs" className="scroll-mt-32">
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
                  Discuss your unpaid statutory or contractual performance bonus recovery case with legal experts. We serve verified notices with full compliance support.
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
