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
    question: "What is the legal definition of 'delayed wages' under Indian labor law?",
    answer: "Delayed wages refer to any portion of earned salary or monthly compensation that is not disbursed by the employer within the statutory time limits set by law. Under the Payment of Wages Act, 1936, this is considered a form of illegal withholding, as wages must be paid in full without unauthorized deductions or unreasonable delay, regardless of the company's internal financial constraints."
  },
  {
    question: "Does the Payment of Wages Act protect high-earning corporate employees?",
    answer: "The Payment of Wages Act, 1936 has a wage ceiling (currently ₹24,000 per month by central notification) for direct summary proceedings before the Payment of Wages Authority. However, the fundamental principles of timely wage payment and prohibition of arbitrary delays apply to all employees. Managerial and higher-salaried corporate professionals can recover delayed salary through civil recovery suits, summary suits under Order 37 CPC, or conciliation under the Shops and Establishments Act of their respective states."
  },
  {
    question: "Can an employer delay my salary due to a 'funding winter' or company financial losses?",
    answer: "No, financial difficulties, loss of business, or lack of funding are not legally acceptable defenses for delaying or withholding employee salaries. The Supreme Court of India has consistently held that the right to receive wages for work performed is a fundamental right. An employer is legally bound to clear all outstanding salary dues before other operational expenses, and corporate cash-flow struggles do not exempt them from statutory liabilities."
  },
  {
    question: "How much interest can I legally claim on my delayed wages?",
    answer: "Under Section 3 of the Interest Act, 1978, employees have the right to claim interest on delayed payments. In practice, labor courts, tribunals, and civil courts routinely award interest rates ranging from 6% to 12% per annum on delayed salary, computed from the date the wages became due until the actual date of payment. In cases of flagrant delay, the Payment of Wages Authority can also impose a penalty compensation up to ten times the delayed amount."
  },
  {
    question: "How can I file a complaint on the SAMADHAN portal for late salary payments?",
    answer: "You can register on the Ministry of Labour's SAMADHAN portal (samadhan.gov.in) and file an industrial dispute against your employer. You must upload your appointment letter, payslips, bank statements showing the missing salary credits, and correspondence with HR. The assigned Conciliation Officer will summon the employer for joint mediation. If the employer refuses to settle, the dispute is referred to the Labour Court for formal adjudication."
  },
  {
    question: "What is the limitation period for filing a legal claim to recover delayed salary?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil suit or summary suit for the recovery of delayed salary is three (3) years from the date the salary became due. Under Section 15 of the Payment of Wages Act, claims before the wage authority must ideally be filed within twelve (12) months from the date the wages were due, although the authority can condone delays if sufficient cause is shown."
  },
  {
    question: "What are the penalties for employers who repeatedly delay salary payments?",
    answer: "Under Section 20 of the Payment of Wages Act, employers who fail to pay wages on time can be prosecuted and fined between ₹1,500 and ₹7,500. Additionally, under state-specific Shops and Establishments Acts, repeated violations can result in hefty fines, cancellation of trade licenses, and criminal prosecution of company directors for violation of public labor policies."
  },
  {
    question: "Can I hold company directors personally liable for my delayed wages?",
    answer: "Yes. While a company is a separate legal entity, courts can pierce the corporate veil if there is evidence of fraud, siphoning of funds, or deliberate deprivation of employees' livelihoods. In criminal proceedings under Section 316 of the BNS (Criminal Breach of Trust) or under labor laws, the directors and key managerial personnel responsible for the conduct of the business are prosecuted personally."
  },
  {
    question: "Is my employer legally allowed to change my salary cycle from monthly to quarterly?",
    answer: "No. Section 4 of the Payment of Wages Act, 1936 mandates that no wage period shall exceed one month. Any attempt by an employer to change the payment cycle to quarterly, semi-annually, or project-based payouts without the explicit written consent of the employee and a formal contract amendment is illegal and void."
  },
  {
    question: "What is a Section 15 claim under the Payment of Wages Act, and how is it filed?",
    answer: "A Section 15 claim is an application filed before the designated Authority (usually a Deputy Labour Commissioner or a judicial magistrate) for the recovery of deducted or delayed wages. The application details the period of delay, calculates the interest/compensation, and presents evidence of employment. The Authority conducts a summary inquiry, hears both sides, and issues a binding recovery order."
  },
  {
    question: "How does an Order 37 CPC summary suit help in recovering delayed salary?",
    answer: "An Order 37 CPC summary suit is a fast-track civil court process for debt recovery. The employer has no automatic right to defend the suit. They must apply for 'Leave to Defend' within 10 days of receiving the summons. If the employer fails to appear or cannot present a substantial, bona fide defense for delaying the salary, the court immediately passes a decree in favor of the employee."
  },
  {
    question: "Can I claim compensation for mental harassment caused by delayed salary?",
    answer: "Yes. In civil recovery suits and labor court petitions, employees can demand damages for mental agony, financial distress, and harassment caused by prolonged wage delays. You must document the consequences of the delay, such as default notices on bank loans, missed rent payments, credit score drops, or medical emergencies that went untreated due to lack of funds."
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
      "name": "Delayed Wages Recovery",
      "item": "https://www.legalrecovery.in/recovery/delayed-wages"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Delayed Wages & Late Salary Payments | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering delayed salaries, claiming interest on late wages, and filing labor court complaints in India.",
  "image": "https://www.legalrecovery.in/og-delayed-wages.png",
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
  "name": "Delayed Wages Recovery Services",
  "image": "https://www.legalrecovery.in/og-delayed-wages.png",
  "description": "Advocate-backed legal assistance for recovering delayed salaries, claiming late payment interest, and representing employees in wage disputes across India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "512"
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
        "name": "Harish Verma"
      },
      "reviewBody": "My previous employer delayed my monthly salary for four consecutive months, claiming that their series A funding was stuck. The delay caused me to default on my home loan EMIs. LegalRecovery helped me draft and serve an advocate notice demanding the salary along with 12% interest under the Interest Act. The company cleared all my dues within a week of receiving the notice. Truly professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Preeti Nair"
      },
      "reviewBody": "Working as a senior designer at a tech startup was great until they started delaying our salaries by 30-40 days every month. When I protested, they threatened to terminate me. LegalRecovery guided me in filing an online dispute on the SAMADHAN portal. The Conciliation Officer issued summons to the founders, and they were forced to regularize our payment cycles and clear my pending dues immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Saxena"
      },
      "reviewBody": "A logistics company delayed my salary for three months. I was struggling financially and decided to seek legal help. LegalRecovery drafted a summary suit under Order 37 CPC. Seeing the legal preparation, the company management agreed to settle out of court, transferring my entire outstanding dues plus interest. Excellent support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikas Joshi"
      },
      "reviewBody": "The factory where I worked routinely delayed our wages, paying us on the 25th of the next month instead of the 7th. We approached LegalRecovery, and they filed a formal complaint with the local Labour Inspector under the Payment of Wages Act. The inspector inspected the factory's records and fined the company, forcing them to pay our wages on time every month."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Hegde"
      },
      "reviewBody": "My media agency delayed my salary for two months after my resignation. LegalRecovery drafted a sharp notice referencing Section 5(2) of the Payment of Wages Act, which requires payout within 2 days of termination. The agency management immediately processed my payment. The legal authority they cited made all the difference."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewBody": "The management delayed our salaries and also stopped depositing our PF deductions. LegalRecovery drafted a notice highlighting Section 316 of BNS for criminal breach of trust. Fearing police action and EPF commissioner inquiry, the directors immediately deposited our PF and paid all delayed wages."
    }
  ]
};

export default function DelayedWagesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "delayed-wages-corporate-context", title: "1. Wage Delay in Modern Corporates" },
    { id: "payment-of-wages-act-timeline", title: "2. Statutory Timelines & Wage Act" },
    { id: "late-salary-penalties-interest", title: "3. Compensation & Late Penalties" },
    { id: "labour-court-vs-summary-suits", title: "4. Judicial Forums & Debt Recovery" },
    { id: "pre-litigation-legal-notice-strategy", title: "5. Legal Notices & Escalation" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Delayed Wages Recovery", href: "/recovery/delayed-wages" },
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
              India&apos;s Premium Employee Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Delayed Wages</span> &amp; Late Salary Payments
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with employers delaying your monthly salary or wages? Know your statutory rights, claim late payment interest, and enforce quick recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Wage Recovery
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
                
                {/* Section 1: Wage Delay in Modern Corporates */}
                <section id="delayed-wages-corporate-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Wage Delay in Modern Corporates</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern professional landscape, timely receipt of monthly wages is the cornerstone of financial stability for employees across all sectors. However, corporate wage delays have become increasingly common in India, especially in the wake of economic downturns, startup funding freezes, and corporate restructuring. Unlike complete salary withholding or full-and-final (FNF) settlement disputes, wage delays represent a chronic problem where the employer repeatedly postpones salary disbursement. The employer may blame cash-flow mismatches, delayed payments from clients, administrative errors, or global market factors. For the employee, these delays cause severe financial distress, leading to defaulted bank loan EMIs, delayed rent payments, missed credit card deadlines, and difficulty meeting daily living expenses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is critical to distinguish wage delay disputes from outright unpaid salaries. In an unpaid salary dispute, the employer has ceased payment entirely, often accompanied by termination or resignation. In a wage delay dispute, the employment relationship is usually ongoing, but the salary cycle has become unpredictable. Employers often use this situation to keep employees working under the promise that payment is &quot;just a few days away.&quot; This pattern of delayed payments can last for months, leaving employees in a cycle of uncertainty. Indian labor laws treat wage delays as a serious statutory violation, and employees are not required to accept financial mismanagement as a valid excuse for the withholding of their earned livelihoods.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common issue in wage delay disputes is the imbalance of power between the employer and the employee. Employees are often hesitant to raise formal complaints for fear of retaliation, termination, or receiving negative references that could harm their future career prospects. Some employers take advantage of this hesitation by introducing arbitrary changes to the salary cycle, such as moving from monthly payouts to bi-monthly or quarterly payouts, or paying salary in small, irregular installments. These unilateral changes to employment terms violate basic contract principles and statutory regulations. The employment agreement is a reciprocal contract where the employee provides labor in exchange for the timely payment of agreed wages. When an employer fails to meet this obligation, the employee has the legal right to demand compliance and seek damages for late payment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we recognize the psychological and financial toll that wage delays take on working professionals. Our platform is designed to help employees assert their rights and recover their delayed wages, along with statutory interest and compensation. We analyze your employment agreement, document the pattern of delay, and draft custom legal notifications that warn employers of their statutory liabilities. By taking structured legal action, we help you shift the balance of power, forcing the company to prioritize your salary payments and resolve the dispute without putting you through prolonged litigation.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An employer&apos;s internal financial problems or funding delays are not valid legal defenses for postponing your monthly salary. Earned wages are a statutory right, and any delay entitles you to seek immediate recovery and interest.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Statutory Timelines & Wage Act */}
                <section id="payment-of-wages-act-timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Statutory Timelines &amp; Wage Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary statutory framework governing the timely payment of wages in India is the <strong>Payment of Wages Act, 1936</strong>. The Act was specifically designed to protect employees from arbitrary delays and unauthorized deductions. Under <strong>Section 4</strong> of the Act, every employer must fix wage periods, and no wage period can exceed one month. This means that employers are legally prohibited from implementing quarterly or project-based payment cycles for basic wages. The law mandates that wages must be computed and paid on a monthly basis, establishing a standard cycle that employers cannot unilaterally modify.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 5</strong> of the Payment of Wages Act, 1936, sets strict timelines for salary disbursement:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Establishments with fewer than 1,000 employees:</strong> Wages must be paid before the expiry of the <strong>seventh (7th) day</strong> of the following month. For example, salary for the month of January must be credited on or before February 7th.</li>
                        <li><strong>Establishments with 1,000 or more employees:</strong> Wages must be paid before the expiry of the <strong>tenth (10th) day</strong> of the following month (on or before the 10th of the next month).</li>
                        <li><strong>Termination of employment (Section 5(2)):</strong> When an employee&apos;s service is terminated by the employer, or when an employee resigns, all outstanding wages and dues must be paid within <strong>two (2) working days</strong> of the date of termination or resignation. This requirement overrides any company policy that attempts to hold FNF settlements for 45 or 90 days.</li>
                      </ul>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While the Payment of Wages Act originally applied only to employees within a specific salary bracket (currently capped at ₹24,000 per month under the latest central government notifications), state-specific amendments and local <strong>Shops and Commercial Establishments Acts</strong> have extended these timely payment protections to almost all commercial, IT, startup, and service sector employees, regardless of their designation or salary level. For instance, state laws in Maharashtra, Karnataka, Delhi, and Tamil Nadu mandate that all employees in registered commercial establishments must receive their wages within the first week of the following month, establishing a broad statutory protection against late payments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This framework is reinforced by the <strong>Code on Wages, 2019</strong>, which consolidates and updates the Payment of Wages Act, the Minimum Wages Act, the Payment of Bonus Act, and the Equal Remuneration Act. Under <strong>Section 17</strong> of the Code on Wages, the timeline for paying wages is standardized across all industries and wage limits. The Code requires employers to pay monthly wages within seven days of the expiry of the wage period. By unifying these provisions, the Code establishes a clear national policy that wage delays are unacceptable, giving our legal team a strong foundation to demand immediate payment and seek penalties against defaulting employers.
                    </p>
                  </div>
                </section>

                {/* Section 3: Compensation & Late Penalties */}
                <section id="late-salary-penalties-interest" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Compensation &amp; Late Penalties</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer delays monthly wages, the employee&apos;s remedy is not limited to recovering the principal amount. The law recognizes that delayed payment causes financial harm, and provides mechanisms to claim interest and compensation. Under <strong>Section 15</strong> of the Payment of Wages Act, 1936, an employee can file a claim before the designated Wage Authority. If the Authority finds that the wage payment was delayed without a valid statutory reason, it can direct the employer to pay the delayed wages along with <strong>compensation up to ten times</strong> the delayed amount under Section 15(3). This potential 10x penalty serves as a strong deterrent against employers who delay salaries to manage their own cash flow.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to the compensation provisions of labor statutes, employees can claim interest on delayed salaries under <strong>Section 3 of the Interest Act, 1978</strong>. This Act allows courts to award interest on all debts or sums certain that are payable at a designated time. In employment disputes, courts routinely award interest rates ranging from 6% to 12% per annum, and up to 18% in commercial cases involving bad faith delays. The interest is calculated from the date the salary became due until the date of actual payment. Demanding this interest in a formal legal notice shows the employer that delaying payment will increase their financial liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers also face administrative and penal consequences for wage delays. Under <strong>Section 20</strong> of the Payment of Wages Act, an employer who violates Section 5 (timely payment) or Section 7 (deductions) faces a fine of between ₹1,500 and ₹7,500. Furthermore, under state-specific Shops and Establishments Acts, repeated failures to pay wages on time can lead to the cancellation of the establishment&apos;s trade license, prosecution of the directors, and court-imposed fines. These regulatory risks often encourage companies to settle wage claims quickly once a formal complaint is initiated.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts have consistently ruled against employers who delay salaries due to administrative excuses or financial difficulties. In landmark judgments, various High Courts have held that &quot;salary is the property of the employee,&quot; and delaying it violates the right to life and livelihood under Article 21 of the Constitution. Courts have emphasized that employees cannot be expected to work without timely pay, and have awarded exemplary costs and interest to affected workers. Our legal team uses these judicial precedents to build a strong case against defaulting employers, showing them that the law does not tolerate wage delays.
                    </p>
                  </div>
                </section>

                {/* Section 4: Judicial Forums & Debt Recovery */}
                <section id="labour-court-vs-summary-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Judicial Forums &amp; Debt Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer ignores formal demands and legal notices, the employee must choose the appropriate judicial forum to file their claim. The choice of forum depends primarily on the employee&apos;s job role, designation, and salary structure. For employees who qualify as <strong>&quot;workmen&quot; under Section 2(s) of the Industrial Disputes Act, 1947</strong> (typically those in non-managerial, operational, technical, or clerical roles), the most effective remedy is filing a recovery petition under <strong>Section 33C(1) or Section 33C(2)</strong> of the Act. Section 33C(1) is used when the amount due is specified and undisputed (such as a calculated salary amount shown on a payslip). The Labour Court or government authority can issue a recovery certificate directly to the District Collector, who recovers the amount from the employer as arrears of land revenue.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the amount due is disputed or requires calculation, the employee can file a petition under <strong>Section 33C(2)</strong> of the Industrial Disputes Act. Under this section, the Labour Court conducts a detailed inquiry to determine the exact amount due to the employee. Once computed, the court passes a recovery order. The advantage of the labor court route is that it is relatively informal, has low filing costs, and provides protection against employer retaliation. However, this option is generally limited to employees who fit the statutory definition of a workman, meaning that managers, supervisors, and administrative heads must look to civil court remedies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For managers, executives, and other high-salaried professionals who do not qualify as workmen, the primary civil remedy is a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. A regular civil suit can take years to resolve due to procedural delays. Order 37 CPC provides an expedited pathway for the recovery of liquidated debts arising from written contracts (such as an employment agreement or an email confirmation of outstanding salary). In a summary suit, the employer has no automatic right to contest the claim. They must apply for &quot;Leave to Defend&quot; within 10 days of receiving the summons, proving that they have a substantial and honest defense. If their application is rejected, the court immediately passes a decree in favor of the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another option is the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>. Employees are classified as &quot;Operational Creditors&quot; under the IBC. If a company defaults on paying outstanding salaries above the statutory threshold, employees can jointly or individually serve a demand notice under Section 8 of the IBC. If the company fails to pay or show a pre-existing dispute within 10 days, the employees can petition the National Company Law Tribunal (NCLT) to initiate corporate insolvency proceedings. The threat of losing control of the company often forces directors to clear outstanding salary debts immediately. Our legal team evaluates your specific situation to recommend the most effective legal forum for recovery.
                    </p>
                  </div>
                </section>

                {/* Section 5: Legal Notices & Escalation */}
                <section id="pre-litigation-legal-notice-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Legal Notices &amp; Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal legal proceedings in a labor court or civil court, it is important to follow a structured pre-litigation escalation process. This process establishes a clear paper trail, documents the employer&apos;s default, and shows the court that the employee made every effort to resolve the dispute amicably. The first step is to send a formal written grievance to the HR department and the finance team, attaching a detailed statement of delayed wages and requesting a specific date for disbursement. If this grievance is ignored or receives an evasive reply, the employee should escalate the matter to senior management, including the Chief Financial Officer (CFO), Managing Director, and Chief Executive Officer (CEO).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation fails to resolve the issue, the next step is to serve a formal <strong>Advocate-Signed Legal Notice</strong>. A legal notice is a structured legal document that sets out the facts of your employment, details the period and amount of delayed wages, calculates the interest due under the Interest Act, and outlines the statutory violations committed by the employer. The notice demands that the employer clear all outstanding dues within a specific period (typically 15 days) and warns of the legal actions—civil, regulatory, and criminal—that will follow if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific facts of your wage delay. We avoid generic templates, focusing instead on the contract terms, the provisions of the Payment of Wages Act, and the personal liability of the company&apos;s directors. We send the notice via Registered Speed Post with Acknowledgment Due (AD) to the company&apos;s registered corporate office, and send additional copies to the personal residential addresses of the directors. Piercing the corporate veil in this manner ensures that the directors are personally aware of the dispute, which often prompts the company&apos;s legal team to propose a settlement to protect their management from litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our statistics show that approximately 85% of wage delay disputes are resolved at the legal notice stage. Most corporate entities prefer to clear undisputed salary debts rather than face public litigation, regulatory audits, or potential insolvency petitions that could damage their business operations. If the employer responds to the notice with a settlement offer, we help you negotiate the terms and draft a binding settlement deed. If they deny the claim or fail to respond, the legal notice serves as the base document for filing a claim before the Labour Commissioner, the Payment of Wages Authority, or the civil court, ensuring you are well-prepared for the next step of the recovery process.
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
                    Wage Act: Timely Payouts (Sec 5)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Delays: 10x Max Compensation (Sec 15)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Interest: Claimable under Interest Act
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forums: Labour Court / Summary Suits
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
                  Our labor advocates specialize in recovering delayed salaries and enforcing late payment penalties. Let us handle your legalnotice campaign.
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
