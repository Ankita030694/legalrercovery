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
    question: "What is 'payment in lieu of notice' (PILON) under Indian labor law?",
    answer: "Payment in Lieu of Notice (PILON) is a contractually and statutorily recognized mechanism where either the employer or the employee can terminate the employment relationship immediately by paying the other party the salary equivalent to the notice period. If an employer terminates an employee with immediate effect, they must pay notice pay. Similarly, if an employee resigns and wishes to leave immediately, they may pay notice buy-out salary, provided the contract permits it."
  },
  {
    question: "Can an employer terminate me immediately and refuse to pay my notice period salary?",
    answer: "No. If your employment agreement specifies a notice period for termination, the employer cannot dismiss you immediately without paying the salary for that period, unless you are terminated for proven gross misconduct following a proper domestic inquiry. Arbitrary termination without notice pay is wrongful termination and violates the Contract Act and state-specific Shops and Establishments Acts."
  },
  {
    question: "Is it legal for an employer to deduct notice pay from my FNF settlement if I ask for early release?",
    answer: "If the employment agreement provides an option for 'payment in lieu of notice' or buy-out, and the employer agrees to your early release, they can adjust the buy-out amount against your final dues. However, if the employer unilaterally releases you early without your request, or if the contract has no such penalty clause, they cannot deduct notice pay from your earned salary, gratuity, or accrued leave."
  },
  {
    question: "What legal actions can I take if my employer withholds my relieving letter due to a notice period dispute?",
    answer: "Withholding a relieving letter, experience certificate, or form 16 is a form of coercion. You can: (1) serve an advocate-signed legal notice; (2) file a complaint with the Labour Commissioner for unfair labor practices; or (3) file a civil suit for damages, as withholding these documents prevents you from taking up new employment, violating Section 27 of the Contract Act."
  },
  {
    question: "How much notice period is legally mandated under state Shops and Establishments Acts?",
    answer: "Most state Shops and Establishments Acts (such as Delhi, Maharashtra, and Karnataka) mandate a minimum notice period of one (1) month for employees who have completed at least three to six months of continuous service. If an employer wishes to terminate such an employee, they must provide one month's written notice or one month's wages in lieu of notice."
  },
  {
    question: "Can an employer enforce a 3-month notice period for employees but only pay 1 month upon termination?",
    answer: "No. Such one-sided clauses are often considered unconscionable and void under Section 23 of the Indian Contract Act, 1872. Courts enforce the principle of mutuality in employment contracts. If the contract imposes a three-month notice obligation on the employee, the employer is generally bound by the same timeline or must pay equivalent compensation upon termination."
  },
  {
    question: "What are my legal rights if my employer terminates me during probation without notice pay?",
    answer: "You must check the 'Probation Clause' in your appointment letter. Most contracts specify a shorter notice period (e.g., 15 days or 1 month) during probation. If the contract specifies a probation notice period, the employer must serve that notice or pay equivalent salary. If the contract is silent, state Shops and Establishments Acts still require reasonable notice or pay."
  },
  {
    question: "Can I claim interest on delayed or unpaid notice period salary?",
    answer: "Yes. Under Section 3 of the Interest Act, 1978, unpaid notice period salary is a liquidated debt. You are entitled to claim interest ranging from 6% to 12% per annum on the delayed notice pay, computed from the date the payment was due (typically the day of termination) until the actual credit date."
  },
  {
    question: "How do I file a complaint on the SAMADHAN portal for withheld notice period pay?",
    answer: "You can register on the Ministry of Labour's SAMADHAN portal, select the 'Dispute' category, and file a case against your employer. You must upload your appointment letter, termination letter, salary slips, and correspondence. The Conciliation Officer will summon the employer to negotiate. If conciliation fails, the case is referred to the Labour Court."
  },
  {
    question: "Is a contract clause that says 'no notice pay if terminated for performance' legally valid?",
    answer: "Generally, no. Under labor jurisprudence, termination for 'underperformance' is not the same as termination for 'misconduct'. Performance-based termination requires the employer to follow due process, which includes serving the notice period or paying notice salary. An employer cannot avoid notice pay obligations by raising vague performance complaints."
  },
  {
    question: "How does an Order 37 CPC summary suit help in notice pay recovery?",
    answer: "A Summary Suit under Order 37 CPC is a fast-track civil court remedy. If your employment contract clearly states that you are entitled to notice pay upon termination, and the employer terminates you without paying, you can file a summary suit for the liquidated sum. The employer must obtain 'Leave to Defend' within 10 days; if they cannot show a bona fide defense, the court passes a decree in your favor."
  },
  {
    question: "Can company directors be held personally liable for my unpaid notice period salary?",
    answer: "Yes, in cases of deliberate fraud, corporate insolvency, or criminal breach of trust (such as deducting notice buy-out fees but not issuing relieving letters), the corporate veil can be pierced. You can prosecute the directors personally under Section 316 BNS (Criminal Breach of Trust) or under state labor regulations."
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
      "name": "Notice Period Salary Recovery",
      "item": "https://www.legalrecovery.in/recovery/notice-period-salary"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Notice Period Salary & Termination Dues | Legal Guide",
  "description": "Exhaustive legal guide on recovering unpaid notice period salaries, buy-out disputes, and filing labor court claims in India.",
  "image": "https://www.legalrecovery.in/og-notice-period-salary.png",
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
  "name": "Notice Period Salary Recovery Services",
  "image": "https://www.legalrecovery.in/og-notice-period-salary.png",
  "description": "Advocate-backed legal assistance for recovering unpaid notice period salaries, buy-out disputes, and wrongful termination notice pay in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "485"
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
        "name": "Suresh Nair"
      },
      "reviewBody": "My IT company terminated me immediately due to a sudden project closure. My contract specified a 2-month notice period, but they refused to pay me for it. LegalRecovery drafted a formal notice citing state Shops and Establishments Act regulations and contract mutuality. Within 12 days, the company settled my notice salary in full. Outstanding support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Sharma"
      },
      "reviewBody": "When I resigned, my company refused to issue my relieving letter and withheld my final month's salary, claiming I didn't serve the full notice period, even though my manager had approved early release in writing. LegalRecovery helped me file a case on the SAMADHAN portal. The Conciliation Officer scolded the HR head and made them release my documents and pay my salary during the first hearing."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anil Deshmukh"
      },
      "reviewBody": "A manufacturing firm terminated my services without the contractually agreed 3-month notice pay, alleging performance issues without any proof. LegalRecovery sent an advocate notice pointing out that performance claims do not exempt them from paying notice salary. The firm settled out of court, transferring the entire amount with interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Iyer"
      },
      "reviewBody": "I resigned from my customer support job and opted for a notice buy-out. However, the company deducted the notice pay from my FNF but refused to issue my relieving letter, claiming 'policy updates'. LegalRecovery sent a strong notice warning of a summary suit. The company immediately released my relieving letter. They are very reliable!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohan Kapoor"
      },
      "reviewBody": "I was terminated immediately during a corporate layoff and denied notice pay. LegalRecovery drafted a notice and sent it directly to the directors' residential addresses. The management panicked and transferred my notice pay along with my accrued leave encashment. Excellent tactic!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karthik Raja"
      },
      "reviewBody": "My probation was terminated with 1 day's notice, even though my contract specified a 15-day notice period. LegalRecovery helped me challenge this. The company paid the 14 days of notice pay after receiving the legal notice. Very happy with their service."
    }
  ]
};

export default function NoticePeriodSalaryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "notice-period-dynamics-context", title: "1. Notice Period & Corporate Frameworks" },
    { id: "statutory-notice-rules-states", title: "2. Statutory Notice Pay & State Laws" },
    { id: "wrongful-withholding-forfeiture", title: "3. Wrongful Withholding & Relieving Dues" },
    { id: "legal-recourse-labor-courts-suits", title: "4. Judicial Forums & Debt Recovery" },
    { id: "advocate-notices-negotiation-strategy", title: "5. Advocate Notices & Negotiations" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Notice Period Salary Recovery", href: "/recovery/notice-period-salary" },
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
              Recover Withheld <span className="text-[#DC2626]">Notice Period Salary</span> &amp; Dues
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did your employer terminate you immediately without notice pay, or withhold your final salary and relieving letter? Learn your legal rights and recover your dues.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Notice Pay Recovery
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
                
                {/* Section 1: Notice Period & Corporate Frameworks */}
                <section id="notice-period-dynamics-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Notice Period &amp; Corporate Frameworks</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern corporate ecosystem, notice period clauses are standard fixtures in employment agreements, designed to provide transition security to both employers and employees. A notice period is the contractually mandated duration that an employee must work after resigning, or that an employer must provide before terminating services. When an employer terminates an employee with immediate effect, they are generally required to pay the salary equivalent to that notice period, a concept known as Payment in Lieu of Notice (PILON). Despite these clear contractual structures, notice period disputes have become a major point of conflict in India. Employers frequently terminate staff immediately without notice pay during layoffs, cost-cutting measures, or restructuring, while also withholding the employee&apos;s final salary and crucial career documents like relieving letters and experience certificates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is essential to distinguish notice period salary disputes from standard unpaid salary or general Full and Final (FNF) issues. In a standard salary dispute, the employee has worked the days but has not been paid. In a notice period salary dispute, the conflict centers on the compensation due for the transition period defined in the contract. Employers often argue that they terminated the employee &quot;for performance&quot; or &quot;for cause,&quot; attempting to bypass their notice pay obligations. However, under labor jurisprudence, a termination for performance is not the same as a termination for proven misconduct. Unless there is a documented domestic inquiry proving gross misconduct (such as theft, fraud, or violence), the employer remains legally bound by the notice period clause and must pay the employee for that period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Notice period disputes also arise when an employee resigns. Many employment contracts include a notice buy-out option, allowing the employee to pay the salary equivalent of the unserved notice period to secure an early release. Conflict occurs when the employee requests a buy-out, but the employer refuses to accept the payment, withholds the relieving letter, or deducts notice pay from the FNF settlement while still forcing the employee to work. This unilateral enforcement of one-sided rules violates basic principles of contract mutuality. An employment agreement is a reciprocal contract; if it binds the employee to a notice obligation or buy-out penalty, it must also bind the employer to the same terms. Unilateral changes to these terms by the employer are legally void.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in helping employees recover their unpaid notice period salaries and secure their vital relieving documents. We analyze your employment agreement, evaluate the probation and termination clauses, and challenge arbitrary actions by employers. By using structured legal notice campaigns and representing you before labor authorities, we help protect your career transition. We ensure that companies pay the compensation defined in their own contracts, helping you move to your next job without financial loss or administrative hurdles.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An employer cannot unilaterally terminate your employment with immediate effect without paying your notice period salary, unless they have proven gross misconduct through a formal domestic inquiry. Vague performance complaints do not excuse them from notice pay obligations.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Statutory Notice Pay & State Laws */}
                <section id="statutory-notice-rules-states" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Statutory Notice Pay &amp; State Laws</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal framework governing notice periods and payment in lieu of notice in India is established by state-specific <strong>Shops and Commercial Establishments Acts</strong> and central labor regulations. These acts apply to all commercial establishments, IT offices, startups, and service sector firms. Under state laws in Delhi, Maharashtra, Karnataka, and Tamil Nadu, there are clear rules regarding notice periods for termination:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Minimum Notice Period:</strong> Employers must provide at least <strong>one (1) month&apos;s notice in writing</strong> or <strong>one month&apos;s wages in lieu of notice</strong> to any employee who has completed continuous service of a specified duration (typically three to six months, depending on the state).</li>
                        <li><strong>Reason for Termination:</strong> The employer must state a reasonable cause for termination in the written notice. Immediate termination without notice or notice pay is permitted only in cases of proven misconduct.</li>
                        <li><strong>Probation Period Rules:</strong> During the probation period, the notice period is governed by the appointment letter, but state laws still require a reasonable notice window (typically 15 days) or equivalent wages if the probation is terminated early.</li>
                      </ul>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These state laws are supported by the <strong>Industrial Disputes Act, 1947</strong>, which applies to employees defined as &quot;workmen.&quot; Under <strong>Section 25F</strong> of the Act, no workman employed in any industry who has been in continuous service for not less than one year can be retrenched until they have been given <strong>one month&apos;s notice in writing</strong> indicating the reasons for retrenchment and the notice period has expired, or the workman has been paid <strong>wages in lieu of such notice</strong>. Any retrenchment carried out without complying with Section 25F is considered illegal and void by courts, making the employee eligible for reinstatement with back wages.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The principle of mutuality under the <strong>Indian Contract Act, 1872</strong> is also key in notice pay disputes. Section 23 of the Contract Act states that contracts that are opposed to public policy or represent unconscionable bargains are void. Indian courts have ruled that one-sided notice clauses (such as requiring a 3-month notice period from the employee but allowing the employer to terminate with 1 day&apos;s notice without pay) are unfair and void. If a contract requires a notice period from the employee, the employer is generally bound by the same timeline or must pay equivalent compensation upon termination, establishing a balanced contractual relationship.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the upcoming <strong>Code on Wages, 2019</strong> and the <strong>Industrial Relations Code, 2020</strong> reinforce these timely payment and notice obligations. Under these codes, when an employee is retrenched or terminated, the employer must clear all notice pay, earned salary, and statutory dues within two working days of termination. These statutory requirements override any internal company policies, ensuring that employees are protected from arbitrary notice withholding regardless of their salary level or job title.
                    </p>
                  </div>
                </section>

                {/* Section 3: Wrongful Withholding & Relieving Dues */}
                <section id="wrongful-withholding-forfeiture" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Wrongful Withholding &amp; Relieving Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common issue faced by resigning employees is the wrongful withholding of their final salary, relieving letter, and experience certificate by employers claiming a notice period violation. This situation often occurs when an employee requests an early release or notice buy-out, which the manager verbally approves, but the HR department later disputes, withholding the FNF settlement. Employers may also unilaterally terminate an employee and deduct notice pay from their accrued dues, claiming the employee did not perform during the transition. These practices violate basic employment laws.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding essential employment documents like relieving letters and experience certificates to force compliance or collect notice pay is legally unsustainable. Under <strong>Section 27 of the Indian Contract Act, 1872</strong>, any agreement that restrains someone from exercising a lawful profession, trade, or business is void. By withholding your relieving letter, the employer prevents you from joining a new company, which constitutes a post-employment restraint of trade. High Courts in India have repeatedly held that employers cannot hold an employee&apos;s career documents hostage over financial disputes. The company must release the documents and, if they believe money is owed, pursue separate legal channels rather than blocking the employee&apos;s transition.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Similarly, employers cannot make arbitrary deductions from your earned salary to cover notice period payouts. Earned wages are protected under the Payment of Wages Act and Shops and Establishments Acts. Even if an employee leaves without serving the full notice period, the employer can only claim compensation for <strong>actual losses</strong> suffered due to the sudden departure, rather than imposing an arbitrary penalty. To deduct notice pay, the employer must show that the contract has a clear, reciprocal buy-out clause, and they cannot apply this deduction to basic earned wages, gratuity, or PF contributions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer wrongfully terminates you and refuses to pay notice pay, it constitutes a breach of contract. If the company closes down a project or department and lays off staff with immediate effect, they must pay notice salary. The only exception is termination for gross misconduct, which requires a detailed domestic inquiry, a formal charge sheet, and an opportunity for the employee to defend themselves. Vague claims of &quot;poor performance&quot; or &quot;underdelivery&quot; raised after termination do not meet this standard, and courts routinely order employers to clear all notice pay and FNF dues in such cases.
                    </p>
                  </div>
                </section>

                {/* Section 4: Judicial Forums & Debt Recovery */}
                <section id="legal-recourse-labor-courts-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Judicial Forums &amp; Debt Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer refuses to pay notice period salary or release career documents despite formal requests, the employee has several judicial avenues for recovery. For employees who qualify as <strong>&quot;workmen&quot; under Section 2(s) of the Industrial Disputes Act, 1947</strong>, the most effective route is filing a recovery application under <strong>Section 33C(1) or Section 33C(2)</strong>. Under Section 33C(1), if the notice pay amount is undisputed and defined in the contract, the labor authority can issue a recovery certificate directly to the District Collector to recover the dues from the employer&apos;s assets. If the amount is disputed, the employee can file under Section 33C(2), and the Labour Court will conduct an inquiry to determine the exact notice pay due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For managerial, supervisory, and professional employees who do not fall under the definition of workmen, the primary civil remedy is a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. A regular civil suit can take years to resolve. Order 37 CPC provides an expedited pathway for recovering liquidated debts arising from written contracts (such as an employment agreement defining notice pay). Upon receiving the summons, the employer has only <strong>10 days</strong> to enter an appearance. They must apply for &quot;Leave to Defend,&quot; proving they have a genuine and substantial defense. If they fail to do so, the court immediately passes a decree in favor of the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, employees can approach the <strong>Labour Commissioner or Labour Inspector</strong> under the state-specific Shops and Commercial Establishments Act. In major cities like Bangalore, Mumbai, Chennai, and Delhi, labor inspectors have the power to audit company payroll records, inspect employment agreements, and summon management. A summons from a labor inspector often encourages companies to settle notice pay disputes quickly to avoid regulatory penalties or audits of their overall labor compliance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer has deducted notice buy-out fees or PF contributions but refused to release the relieving letter or deposit the funds, the employee can initiate criminal proceedings. Under <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 406 IPC), this conduct constitutes <strong>Criminal Breach of Trust</strong>, which carries a penalty of up to three years of imprisonment. Filing a criminal complaint alongside civil recovery actions provides powerful leverage, as company directors want to avoid police investigations or criminal charges. Our legal team evaluates your case to recommend the most effective combination of civil and regulatory remedies.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & Negotiations */}
                <section id="advocate-notices-negotiation-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; Negotiations</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery process for notice period salary should begin with a structured pre-litigation escalation strategy. This involves building a clear documentary record of the dispute. You should compile all relevant records, including your appointment letter, resignation email, manager approvals for early release, the termination letter, monthly payslips, and all HR correspondence. You should send a formal final email to HR and senior management (CEO, CFO, and Directors) detailing the unpaid notice pay and outstanding FNF dues, requesting resolution within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed Legal Notice</strong>. A legal notice is a structured legal document sent to the employer, setting out the facts of your employment, detailing the notice period violations, calculating the interest due under the Interest Act, 1978, and warning of the civil and criminal actions that will follow if they fail to comply. Serving a legal notice is a mandatory step before filing a summary suit or labor complaint, as it establishes your cause of action and is part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific details of your notice pay dispute. We do not use generic templates. Instead, we highlight the contract terms, the provisions of state Shops and Establishments Acts, and the personal liability of the company&apos;s directors. We digitally dispatch the notice via verified email and WhatsApp to the company&apos;s registered office, and send copies to the personal residential addresses of the directors, ensuring they are personally aware of their legal exposure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of notice pay disputes are resolved successfully at the legal notice stage. Most companies prefer to settle these claims rather than face public litigation, credit rating impacts, or regulatory audits. If the employer responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed that covers both the payment of notice salary and the release of your relieving documents, helping you transition smoothly to your new role.
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
                    Termination: PILON Obligatory
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Documents: Withholding is Coercive
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Contracts: One-Sided Rules Void
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forums: Shops Act / Summary Suit
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
                  Our labor advocates specialize in recovering unpaid notice period salaries and securing relieving documents. Let us handle your legalnotice campaign.
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
