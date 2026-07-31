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
    question: "Is it legal for an employer to retain a portion of my salary under a retention policy?",
    answer: "No, under Section 7 of the Payment of Wages Act, 1936, employers are strictly prohibited from making unauthorized deductions from an employee's wages. A retention policy that holds back earned monthly pay is not a permissible deduction. Any contract clause permitting such withholding is legally invalid."
  },
  {
    question: "What legal actions can I take if my employer refuses to release my retained salary?",
    answer: "You can: (1) serve a formal advocate-signed legal notice; (2) file a complaint with the Labour Commissioner or local Labour Inspector; (3) file a Summary Suit under Order 37 of the CPC for fast-track recovery; or (4) file a criminal complaint for Criminal Breach of Trust under Section 316 BNS if there is fraudulent withholding."
  },
  {
    question: "How long can an employer withhold my retained salary after I resign?",
    answer: "Under Section 5(2) of the Payment of Wages Act, 1936, when an employee's service is terminated or they resign, all outstanding dues, including any retained salary or deferred wages, must be cleared within two (2) working days. Any company policy extending this past 30-45 days is legally vulnerable."
  },
  {
    question: "What is the limitation period for recovering withheld or retained salary?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or commercial suit for outstanding salary is three (3) years from the date the payment became due. Any written acknowledgment of the debt (such as email responses from HR promising payment) resets this 3-year clock."
  },
  {
    question: "Can an employer forfeit my retained salary if I resign before the milestone date?",
    answer: "While success-based target bonuses can be structured as conditional, basic earned salary components cannot be forfeited. Under Section 23 and Section 27 of the Indian Contract Act, 1872, contract clauses that penalize an employee financially for resigning or restrict their career transitions are void."
  },
  {
    question: "Can I approach the Labour Commissioner directly for my retained salary?",
    answer: "Yes, you can file a dispute online via the SAMADHAN portal of the Ministry of Labour. The Conciliation Officer will summon the employer for joint mediation. If conciliation fails, the officer will issue a Failure of Conciliation Report, allowing you to proceed directly to the Labour Court."
  },
  {
    question: "What is the difference between a Summary Suit and a Regular Civil Suit for salary recovery?",
    answer: "In a regular suit, the employer can drag the trial for years. In a Summary Suit under Order 37 CPC, the employer does not have an automatic right to defend. They must apply for 'Leave to Defend' within 10 days of summons. If their defense is found to be a sham, the court will pass a decree in your favor."
  },
  {
    question: "What constitutes criminal breach of trust under BNS in withholding salary?",
    answer: "Under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS), if an employer deducts salary components from your pay (like provident fund or retention cuts) but fails to deposit or release them, pocketing the funds instead, it constitutes a criminal breach of trust, punishable by imprisonment."
  },
  {
    question: "Can I hold company directors personally liable for my retained salary?",
    answer: "While companies enjoy separate legal entity status, you can pierce the corporate veil and hold directors personally liable if you prove corporate fraud or siphoning of funds. In criminal cases under labor acts or Section 316 BNS, directors responsible for daily operations are personally prosecuted."
  },
  {
    question: "How do I prove my performance if my employer claims I didn't meet the retention criteria?",
    answer: "You should compile performance appraisal letters, target achievement logs, appreciation emails from managers, and your resignation acceptance letter. Vague, post-resignation performance complaints raised by employers are rarely accepted by labor commissioners or courts."
  },
  {
    question: "What digital evidence is admissible to prove my retained salary claim?",
    answer: "Payslips showing the retention deductions, bank statements showing salary credits, email communications from HR promising payouts, and asset clearance logs are admissible. Under Section 63 BNS, you must provide a signed authenticity certificate for these electronic records."
  },
  {
    question: "Can I claim interest on delayed retained salary payouts?",
    answer: "Yes, you can claim interest under Section 3 of the Interest Act, 1978. Courts and labor tribunals routinely award interest ranging from 6% to 12% per annum on delayed salary and gratuity payouts. The interest can be demanded in your legal notice."
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
      "name": "Retained Salary Recovery",
      "item": "https://www.legalrecovery.in/recovery/retained-salary"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Retained Salary & Withheld Deferred Pay | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding retained salaries, withheld retention bonuses, and deferred compensation in India.",
  "image": "https://www.legalrecovery.in/og-retained-salary.png",
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
  "name": "Retained Salary Recovery Services",
  "image": "https://www.legalrecovery.in/og-retained-salary.png",
  "description": "Advocate-backed legal assistance for recovering outstanding retained salaries, withheld retention bonuses, and deferred compensation in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "410"
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
      "reviewBody": "My previous IT company retained ₹25,000 per month from my basic salary under a 2-year retention policy. When I resigned after 18 months, they refused to release the accrued ₹4,50,000, claiming I breached the bond. LegalRecovery sent a strong legal notice citing Section 7 of the Payment of Wages Act. The company released the entire amount in 10 days. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Sen"
      },
      "reviewBody": "A startup withheld my retention bonus of ₹3,00,000 because I resigned a week before the milestone date. LegalRecovery drafted a notice warning of an Order 37 CPC summary suit and Section 27 Contract Act violations. The startup's board agreed to settle, transferring the balance. Highly recommended for professionals."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karan Malhotra"
      },
      "reviewBody": "My employer withheld my deferred compensation of ₹5,20,000, citing quality issues post-resignation. LegalRecovery helped me file a complaint on the SAMADHAN portal. The Labour Commissioner issued a summons to the CEO, and they settled my dues during the conciliation meeting. Outstanding support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Reddy"
      },
      "reviewBody": "Recovered my retained salary of ₹2,80,000. LegalRecovery helped me audit my payslips showing the cuts, and served an advocate notice directly to the directors. The company cleared my dues immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditya Varma"
      },
      "reviewBody": "The company deducted PF contributions but failed to deposit them, while also withholding my final salary. LegalRecovery sent a notice highlighting BNS Section 316 criminal breach of trust. The management deposited the PF and cleared my salary immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Roy"
      },
      "reviewBody": "Excellent service for employees facing withheld salary issues. Professional, transparent, and highly effective. They resolved my retention bonus dispute in two weeks."
    }
  ]
};

export default function RetainedSalaryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "retained-salary-disputes-context", title: "1. Overview & Deferred Compensation" },
    { id: "statutory-framework-retained-wages", title: "2. Payment of Wages Act Protections" },
    { id: "retention-agreements-enforceability", title: "3. Legality of Forfeiture Clauses" },
    { id: "labour-commissioner-conciliation-retention", title: "4. Labour Department Conciliation" },
    { id: "summary-suits-order-37-retention", title: "5. Summary Suits (Order 37 CPC)" },
    { id: "criminal-remedies-breach-of-trust-retention", title: "6. BNS Criminal Breach of Trust" },
    { id: "essential-evidence-retention-trails", title: "7. Evidence, Payslips & PF Logs" },
    { id: "payout-escalation-legal-demand", title: "8. Escalation & Legal Notices" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Retained Salary Recovery", href: "/recovery/retained-salary" },
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
              Recover Withheld <span className="text-[#DC2626]">Retained Salary</span> &amp; Deferred Pay
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with employers withholding your retained wages, deferred compensation, or retention bonuses? Serve advocate-backed legal notices and initiate fast-track recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Salary Recovery
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
                
                {/* Section 1: Overview & Deferred Compensation */}
                <section id="retained-salary-disputes-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overview &amp; Deferred Compensation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern corporate ecosystem, companies frequently utilize various compensation structures to align employee performance with business objectives and ensure talent retention. Among these structures, &quot;retained salary,&quot; &quot;deferred compensation,&quot; and &quot;retention bonuses&quot; are commonly deployed. Retained salary refers to a portion of an employee&apos;s earned monthly wages that the employer unilaterally holds back, promising to pay it in a lump sum at the end of a project, financial year, or a specific tenure milestone. Deferred compensation is a structured payout plan where earned compensation is scheduled for disbursement at a future date. While these mechanisms are designed to incentivize long-term commitment, they often become a source of intense dispute when the employer refuses to release these accumulated funds upon separation or resignation. At LegalRecovery, we specialize in helping employees recover these withheld and deferred salary amounts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A key distinction of retained salary disputes is the nature of the employer&apos;s withholding. In standard salary delay cases, the employer simply fails to pay the monthly dues due to cash flow problems. In retained salary cases, however, the withholding is often a deliberate policy choice, backed by contractual clauses or corporate policies. The employer may claim that the employee did not satisfy the retention condition, resigned before the milestone date, or that the payout was contingent on company performance. Recovering these dues requires analyzing the employment agreement, identifying the nature of the retention clause, and challenging it under statutory labor and contract laws.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The withholding of earned wages under the guise of &quot;retention policies&quot; is often legally unsustainable in India. Under labor jurisprudence, wages are considered a property right and an essential element of the right to life with dignity under Article 21 of the Constitution. An employer cannot create arbitrary &quot;retention rules&quot; that override central statutory protections. When an employee has performed the labor, they are entitled to the corresponding wages. Any attempt to withhold these wages to enforce a notice period or prevent resignation is viewed by courts as coercive and illegal, providing a strong basis for recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering retained salary involves several distinct legal avenues, depending on the employee&apos;s role, salary level, and contract terms. For non-managerial employees (workmen), approaching the Labour Commissioner under the Industrial Disputes Act, 1947, is highly effective. For managerial and executive staff, options include filing a Summary Suit under Order XXXVII of the CPC for breach of contract or serving a statutory demand notice. Additionally, if the employer&apos;s retention of salary involves a fraudulent intent to deprive the employee of their dues, filing a criminal complaint for Criminal Breach of Trust under Section 316 of the BNS provides powerful leverage.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Withholding earned wages under the guise of retention policies violates Indian labor laws. If you have performed the labor, you are entitled to the salary. Our team enforces your rights to recover all deferred and retained dues.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Payment of Wages Act Protections */}
                <section id="statutory-framework-retained-wages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Payment of Wages Act Protections</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary legislative shield protecting employees against unauthorized salary deductions and retention policies is the <strong>Payment of Wages Act, 1936</strong>. The Act was enacted to ensure that employers pay wages on time and do not make arbitrary deductions. Under Section 3 of the Act, every employer is personally responsible for the payment of all wages required to be paid under the Act to persons employed by him. Any system where the employer routinely holds back a portion of the basic salary or allowances is a direct violation of the Act&apos;s core purpose.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 7</strong> of the Payment of Wages Act, 1936, the wages of an employed person must be paid to him without deductions of any kind except those authorized by or under the Act. Section 7 provides an exhaustive list of permissible deductions, such as deductions for taxes, EPF contributions, or recovery of advances. Crucially, &quot;salary retention for performance&quot; or &quot;talent retention withholding&quot; is <strong>not</strong> a permissible deduction under Section 7. Any contract clause that permits the employer to deduct or retain salary for these reasons is legally void to that extent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, <strong>Section 5</strong> of the Act mandates the timely payment of wages. It states that the wages of every person employed in any establishment must be paid before the expiry of the seventh day (for establishments with fewer than 1,000 employees) or tenth day (for larger establishments) after the last day of the wage period. If an employee resigns or is terminated, Section 5(2) requires the employer to clear all outstanding wages within two working days of termination. Holding back the retained salary for months after resignation directly violates this statutory timeline.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to the Payment of Wages Act, the <strong>Code on Wages, 2019</strong>, which consolidates and replaces previous wage-related laws, reinforces the employer&apos;s obligation to pay wages on time and limits deductions to a maximum of 50% of the total wages in any month. The Code strictly prohibits any unauthorized withholding of wages. The principles of the Code on Wages can be used by our legal team to show that the employer&apos;s salary retention practices are unlawful and constitute a statutory violation, regardless of the employee&apos;s title or salary.
                    </p>
                  </div>
                </section>

                {/* Section 3: Legality of Forfeiture Clauses */}
                <section id="retention-agreements-enforceability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Legality of Forfeiture Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often present employees with &quot;Retention Agreements&quot; or &quot;Deferred Payout Policies&quot; as a condition for promotion, bonus awards, or project assignments. These agreements typically state that a portion of the salary or bonus is deferred and will only be paid if the employee remains with the company for a specific period (e.g., &quot;Retention salary of ₹50,000 per month will be accumulated and paid after 2 years of continuous service&quot;). If the employee resigns before the milestone date, the employer claims the retained amount is forfeited. However, the enforceability of these forfeiture clauses is highly contestable under Indian contract law.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 23</strong> of the Indian Contract Act, 1872, any agreement is void if its object or consideration is forbidden by law, defeats the provisions of any law, or is opposed to public policy. An agreement that requires an employee to forfeit their earned salary simply because they resigned is opposed to public policy and defeats the provisions of the Payment of Wages Act. Courts have repeatedly held that while employers can structure success-based bonuses as discretionary, they cannot withhold earned salary components (such as basic pay, HRA, or allowances) that represent compensation for work already performed.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, <strong>Section 27</strong> of the Indian Contract Act, 1872, states that every agreement by which anyone is restrained from exercising a lawful profession, trade, or business of any kind is to that extent void. Forfeiture clauses in retention agreements are often designed to act as a financial penalty, restraining the employee from resigning and taking up new employment. Indian courts (such as in the landmark Supreme Court ruling in Percept D&apos;Mark v. Zaheer Khan) have held that post-employment restrictions and financial penalties designed to prevent employees from changing jobs are invalid under Section 27.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a retention agreement is structured as a deferred compensation plan, the employee&apos;s entitlement is protected by the terms of the contract and the principle of good faith. If the employee completes the project milestones or performs the services, their right to the deferred salary matures. The employer cannot use a subsequent resignation as an excuse to avoid paying for completed services. A well-drafted legal notice will challenge these forfeiture clauses, showing the employer that their retention agreement is legally vulnerable and unlikely to survive court scrutiny.
                    </p>
                  </div>
                </section>

                {/* Section 4: Labour Department Conciliation */}
                <section id="labour-commissioner-conciliation-retention" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Labour Department Conciliation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer refuses to release the retained salary despite formal demands and legal notices, the next step is to approach the state&apos;s Labour Department. The government provides an administrative conciliation mechanism through the Office of the Labour Commissioner. The primary goal of this department is to mediate disputes between employers and employees and achieve an amicable settlement without putting the employee through lengthy court trials.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To streamline this process, the Ministry of Labour and Employment has launched the <strong>SAMADHAN portal</strong> (Software for Application, Monitoring and Disposal of Industrial Disputes). Through this portal, you can file your salary recovery dispute online. Once the application is admitted, the case is assigned to a Conciliation Officer (CO) who acts as a mediator. The CO has the statutory power to issue summons to the employer&apos;s management and direct them to appear for joint conciliation meetings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      During these proceedings, the employer must produce payroll registers, attendance sheets, and asset clearance logs. If a settlement is reached, a formal &quot;Settlement Deed&quot; is signed under Section 18(1) of the Industrial Disputes Act, 1947, which is legally binding. If the employer fails to appear or refuses to settle despite clear evidence, the Conciliation Officer submits a &quot;Failure of Conciliation Report&quot; (FOC) to the government, paving the way to refer the dispute directly to the Labour Court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approach the Labour Inspector under the state-specific <strong>Shops and Commercial Establishments Act</strong>. The Labour Inspector has the power to inspect the company&apos;s premises, audit payroll records, and summon the management. In cities like Bangalore, Mumbai, or Delhi, a summons from a Labour Inspector is a powerful tool, as companies want to avoid regulatory audits and penalties for wage violations.
                    </p>
                  </div>
                </section>

                {/* Section 5: Summary Suits (Order 37 CPC) */}
                <section id="summary-suits-order-37-retention" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Summary Suits (Order 37 CPC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For managerial, administrative, and executive-level employees who do not fall under the definition of &quot;workmen&quot; under labor laws, the primary civil court remedy is a <strong>Summary Suit under Order XXXVII of the CPC</strong>. Regular civil suits in India are notoriously slow, taking years to resolve, as defendants can delay trials by filing lengthy written statements and seeking multiple adjournments. Order 37 bypasses these delays by introducing a fast-track procedure where the defendant does not have an automatic right to contest the suit. It applies to suits for the recovery of a liquidated debt arising on a written contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedural steps of a Summary Suit are strictly timed. Upon filing, the court issues a specialized summons in Form 4 to the employer. The employer must enter an appearance, in person or through an advocate, within <strong>10 days</strong> of receiving the summons. If they fail to do so, the allegations in the plaint are deemed admitted, and the court immediately passes a decree in the employee&apos;s favor, allowing for rapid recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer enters an appearance, the employee serves a &quot;Summons for Judgment.&quot; The employer then has 10 days to file an application for <strong>&quot;Leave to Defend&quot;</strong>. To obtain leave, the employer must convince the court through an affidavit that they have a substantial and bona fide defense, rather than a sham or delay tactic. If the court finds the defense is a mere delay tactic (for example, admitting they withheld the salary but claiming the employee resigned before the milestone date), it will deny leave and pass a decree, or grant &quot;conditional leave&quot; requiring the employer to deposit a portion of the disputed amount into court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Securing a decree under Order 37 CPC is followed by execution under Order 21. The executing court has the power to attach the employer&apos;s bank accounts, seize and sell their assets, and even arrest the employer or company directors in cases of deliberate evasion. Because the legal burden shifts to the debtor during the &quot;Leave to Defend&quot; phase, serving a summary suit often encourages employers to enter out-of-court settlement discussions to protect their assets.
                    </p>
                  </div>
                </section>

                {/* Section 6: BNS Criminal Breach of Trust */}
                <section id="criminal-remedies-breach-of-trust-retention" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. BNS Criminal Breach of Trust</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding an employee&apos;s earned salary goes beyond a civil contract breach; it can escalate to a criminal offense if the employer acts with fraudulent intent. In India, employees often face situations where the employer deducts EPF contributions or salary retention amounts from their monthly pay but fails to deposit them or release them, pocketing the funds instead. This conduct constitutes a criminal offense, exposing the employer&apos;s management and directors to police investigations, FIRs, and criminal prosecution.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 406 of the IPC), <strong>Criminal Breach of Trust</strong> is defined as dishonestly misappropriating or converting to one&apos;s own use any property entrusted to a person, or dishonestly using or disposing of that property in violation of any direction of law. Wages earned by an employee are held in trust by the employer until payout. If the employer deducts retention amounts from your monthly pay and then dishonestly refuses to pay them out, they commit a criminal breach of trust, which carries a penalty of up to three years of imprisonment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, if the employer has deducted the employee&apos;s share of Provident Fund (PF) contributions from their salary but failed to deposit it with the EPFO, it is a statutory offense. The Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1852, states that such non-deposit constitutes criminal breach of trust. By reporting this to the Regional Provident Fund Commissioner, the employee can initiate a statutory inquiry under Section 7A, which can lead to the attachment of the employer&apos;s bank accounts and the arrest of the defaulting management.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In cases where the employer induced the employee to join the company or accept a project by promising a retention bonus, but secretly intended to withhold the payout through arbitrary policy changes, a complaint for <strong>Cheating under Section 318 BNS</strong> can be filed. Serving a legal notice that highlights these criminal BNS liabilities and copies the directors personally is a highly effective way to force a settlement.
                    </p>
                  </div>
                </section>

                {/* Section 7: Evidence, Payslips & PF Logs */}
                <section id="essential-evidence-retention-trails" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Evidence, Payslips &amp; PF Logs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of any legal recovery action depends on the quality of your documentary evidence. In salary retention disputes, the primary challenge is establishing the exact calculation of the outstanding amount and proving that the retention conditions were met. The foundation of your case consists of the employment agreement, retention policy documents, monthly payslips showing the deductions, and bank statements showing the actual salary credits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Written agreements and retention policy emails define the retention conditions. In court, the employee must show that they performed the work according to these terms. Providing email updates, project completion certificates, performance appraisals, and target achievement logs acts as proof of performance. Having a record of the employer&apos;s acceptance of resignation and asset clearance is critical.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Electronic records must comply with the statutory requirements under Section 63 of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 65B of the Indian Evidence Act). This requires providing a signed certificate verifying the authenticity of email trails, Slack communications, or WhatsApp messages. Without this certificate, courts may refuse to admit digital records, which could weaken the case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employees should maintain organized archives of all client communications, target achievement logs, invoice delivery receipts, and monthly payout statements. Periodically securing signed &quot;balance confirmations&quot; or &quot;reconciliation sheets&quot; from the employer&apos;s finance team provides an official admission of debt, making it difficult for them to contest the outstanding amount.
                    </p>
                  </div>
                </section>

                {/* Section 8: Escalation & Legal Notices */}
                <section id="payout-escalation-legal-demand" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Escalation &amp; Legal Notices</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal litigation, it is essential to follow a structured pre-litigation escalation process. This shows courts that you acted in good faith and exhausted all informal remedies. The escalation should begin with a formal email to the employer&apos;s finance team, attaching a reconciliation sheet showing all earned salaries, deductions, retention amounts, and the outstanding balance. If this is ignored, escalate the communication to the employer&apos;s Chief Financial Officer (CFO) and Chief Executive Officer (CEO), demanding a formal response within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If executive escalation fails, the next step is to serve a formal <strong>Legal Notice</strong>. A legal notice is a structured, advocate-signed document sent to the debtor, setting out the facts of the transaction, detailing the default, demanding payment of the outstanding dues within a strict window (typically 15 days), and warning of the legal actions that will be taken if they fail to comply. A legal notice is not just a warning; it establishes your cause of action and forms part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel drafts custom notices tailored to the specific facts of your case. We do not use generic templates. Instead, we highlight the employer&apos;s violations of the contract, the statutory interest liabilities under the contract or Interest Act, and the criminal consequences of bounced cheques or cheating. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the debtor&apos;s corporate office. Crucially, we also send copies of the notice to the personal residential addresses of the company&apos;s directors, piercing the corporate veil and encouraging immediate settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of B2B payment disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to settle undisputed dues rather than face public litigation, credit rating downgrades, or asset attachment. If the debtor responds with a counter-claim or denies the debt, their reply helps our legal team understand their defense strategy, allowing us to prepare a stronger petition for the MSEFC, a Summary Suit, or cheque bounce proceedings.
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
                    Wages Act: No Arbitrary Cuts (Sec 7)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forfeitures: Restraints Void (Contract Sec 27)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Fast-Track: Order 37 CPC Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Statutory: SAMADHAN Commissioner Route
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Criminal: BNS Sec 316 Breach of Trust
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
                  Our labor advocates specialize in recovering withheld retained salaries, deferred compensation, and unpaid retention bonuses. Let us handle your legalnotice campaign.
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
