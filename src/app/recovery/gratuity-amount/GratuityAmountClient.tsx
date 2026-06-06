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
    question: "How is gratuity eligibility determined?",
    answer: "To be eligible for gratuity under the Payment of Gratuity Act, 1972, an employee must have completed at least 5 years of continuous service with an establishment that has 10 or more employees. However, the 5-year continuous service condition is completely waived if the termination of services is due to the death or disablement of the employee."
  },
  {
    question: "What is the 240-day rule for gratuity?",
    answer: "Under Section 2A of the Act, if an employee works for 4 years and at least 240 days in the 5th year (or 190 days in the case of mines and seasonal establishments), courts have repeatedly ruled that the employee has completed the required 5 years of continuous service. This makes the employee fully eligible for gratuity."
  },
  {
    question: "What is the formula to calculate my gratuity amount?",
    answer: "Gratuity is calculated using the formula: (15 / 26) * Last Drawn Basic Salary & DA * Years of Service. Here, a month is treated as 26 working days, and 15 days of salary are paid for each completed year of service. Any service period of 6 months or more in the final year is rounded up to a full year."
  },
  {
    question: "How long does an employer have to pay gratuity after resignation or retirement?",
    answer: "Under Section 7(3) of the Act, the employer is legally obligated to arrange for the payment of the gratuity amount within 30 days from the date it becomes payable (such as the last working day)."
  },
  {
    question: "Can my employer forfeit my gratuity if I am terminated?",
    answer: "An employer can only forfeit gratuity under Section 4(6) of the Act in cases where the employee's services were terminated for riotous or disorderly conduct, violence, or an act of moral turpitude, or where the employee caused financial damage to the employer's property. The forfeiture can only be to the extent of the damage caused, must be backed by a proper domestic inquiry, and must follow a formal show-cause notice."
  },
  {
    question: "What should I do if my employer is delaying my gratuity payment?",
    answer: "First, submit a formal application in Form I to your employer. If they fail to respond or pay within 30 days, send a formal legal notice through an advocate. If the notice does not resolve the issue, file a complaint in Form N before the Controlling Authority (Assistant Labour Commissioner) in your district."
  },
  {
    question: "Is there a limit on the maximum tax-free gratuity amount in India?",
    answer: "Yes, the maximum tax-free gratuity limit for private-sector employees under Section 10(10) of the Income Tax Act, 1961 is currently ₹20 Lakhs (which was increased from ₹10 Lakhs). Any gratuity received beyond this threshold is subject to income tax."
  },
  {
    question: "What is Form N and how does it help in gratuity recovery?",
    answer: "Form N is the statutory application form used to file a complaint before the Controlling Authority (Assistant Labour Commissioner) when there is a dispute regarding the eligibility, calculation, or non-payment of gratuity. The authority will summon the employer, conduct hearings, and pass a binding order."
  },
  {
    question: "Can directors of a company be held criminally liable for non-payment of gratuity?",
    answer: "Yes. Under Section 9 of the Act, any employer who avoids paying gratuity or makes false statements to avoid payment faces criminal prosecution. This offense carries a mandatory minimum imprisonment of 3 months, which can extend up to 1 year, a fine of up to ₹20,000, or both. Directors can be prosecuted personally if they are the designated 'employers' under the Act."
  },
  {
    question: "Am I entitled to interest if my gratuity payment is delayed by the employer?",
    answer: "Yes, under Section 7(3A) of the Act, if the employer fails to pay the gratuity within 30 days, they must pay simple interest on the delayed amount. The interest rate is specified by the Central Government (currently around 7% to 10% per annum) from the date the gratuity became payable until the date of actual payment."
  },
  {
    question: "What happens to my gratuity if my company goes bankrupt or into liquidation?",
    answer: "Under Section 53 of the Insolvency and Bankruptcy Code (IBC), 2016, employee gratuity dues are given top priority. Crucially, the gratuity fund of a company is excluded from the liquidation estate. This means it cannot be used to pay off other creditors and must be paid to the employees in full."
  },
  {
    question: "Is there a limitation period for filing a gratuity claim before the Controlling Authority?",
    answer: "The rules specify that an application in Form N should be filed within 90 days of the dispute. However, the Controlling Authority is legally empowered to condone any delay and accept the application after this period if the employee can demonstrate 'sufficient cause' for the delay."
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
      "name": "Gratuity Amount Recovery",
      "item": "https://www.legalrecovery.in/recovery/gratuity-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Employer Not Paying Gratuity? statutory Dues Recovery & Form N under Gratuity Act",
  "description": "Comprehensive guide on recovering unpaid gratuity from employers in India. Learn about Form I, Form N, the 240-day rule, interest on delay, and Controlling Authority complaints.",
  "image": "https://www.legalrecovery.in/og-gratuity-recovery.png",
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
  "name": "Gratuity Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-gratuity-recovery.png",
  "description": "Expert legal assistance for recovering unpaid gratuity amounts and FNF dues from employers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "510"
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
        "name": "Harish Chandra"
      },
      "reviewBody": "My former IT employer withheld my gratuity of ₹3.5 Lakhs after 6 years of service, claiming my resignation notice was shorter by 5 days. LegalRecovery sent a strong legal notice citing the Payment of Gratuity Act. Within 10 days, the company processed the payment with interest. Truly professional!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kavitha Swaminathan"
      },
      "reviewBody": "I worked for a manufacturing firm for 4 years and 10 months and was denied gratuity. LegalRecovery explained the 240-day rule under Section 2A and filed Form N before the Controlling Authority. The authority ruled in my favor and ordered a full refund. Incredible support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nitin Saxena"
      },
      "reviewBody": "The company tried to forfeit my gratuity, alleging poor performance post-resignation. LegalRecovery's notice made the HR realize that gratuity can only be forfeited for specific misconduct under Section 4(6) and not for performance issues. Got my full dues in 15 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Preeti Deshpande"
      },
      "reviewBody": "After my father's demise, his company delayed the gratuity payment for months. LegalRecovery drafted a formal notice on our behalf. The company released the entire amount of ₹6.2 Lakhs along with interest. Highly recommend their legal assistance."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohan Alvares"
      },
      "reviewBody": "Excellent legal tech platform. They computed my gratuity accurately, handled all correspondence, and prepared my Form N petition. The Assistant Labour Commissioner issued an order, and the builder finally cleared my dues to avoid bank account freezing. Thank you!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Debashish Banerjee"
      },
      "reviewBody": "I was running around for 8 months to get my gratuity cleared from a retail company. LegalRecovery's notice copied to the company's board of directors worked wonders. The corporate office cleared the FNF within 12 days. Very satisfied with the service."
    }
  ]
};

export default function GratuityAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "gratuity-overview", title: "Overview of Gratuity" },
    { id: "gratuity-statutory-applicability", title: "Establishment Coverage" },
    { id: "continuous-service-rule", title: "The 5-Year Rule" },
    { id: "gratuity-240-days-rule", title: "The 240-Day Rule" },
    { id: "gratuity-calculation-formula", title: "Calculation Formula" },
    { id: "nomination-gratuity", title: "Nominations & Death Claims" },
    { id: "withholding-forfeiture-gratuity", title: "Forfeiture Rules" },
    { id: "pre-legal-application-form-i", title: "Form I Submission" },
    { id: "gratuity-legal-notice", title: "Serving Legal Notice" },
    { id: "filing-form-n-controlling-authority", title: "Form N Complaint" },
    { id: "controlling-authority-hearings", title: "Hearing Proceedings" },
    { id: "gratuity-recovery-certificate", title: "Section 8 Certificates" },
    { id: "appealing-authority-gratuity", title: "Appeal Process" },
    { id: "penalties-non-payment", title: "Criminal Penalties" },
    { id: "gratuity-limitation-timeline", title: "Limitation Periods" },
    { id: "gratuity-interest-delayed-payment", title: "Delayed Pay Interest" },
    { id: "bankruptcy-insolvency-gratuity", title: "Company Insolvency" },
    { id: "gratuity-taxation-exemptions", title: "Taxation & Exemptions" },
    { id: "gratuity-case-studies", title: "Success Stories" },
    { id: "gratuity-client-reviews", title: "Client Reviews" },
    { id: "gratuity-our-recovery-approach", title: "Why Choose Us?" },
    { id: "gratuity-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Gratuity Dues Recovery", href: "/recovery/gratuity-amount" },
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
              India&apos;s Dedicated Employee Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Is your <span className="text-[#DC2626]">Employer Not Paying Gratuity</span> Dues?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover your statutory gratuity dues. Get expert legal tech representation to file Form I, serve legal notices, and complain in Form N to hold defaulting employers accountable.
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
                
                {/* Section 1: Overview of Gratuity */}
                <section id="gratuity-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview of Gratuity</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Gratuity represents a significant statutory benefit provided to employees in India, serving as a token of appreciation for their long-term, continuous service to an establishment. Governed primarily by the <strong>Payment of Gratuity Act, 1972</strong>, this payment is a mandatory financial obligation for employers rather than a voluntary bonus or discretionary perk. Upon resignation, retirement, superannuation, or termination after a specified period of service, an employee is legally entitled to receive a lump-sum gratuity payout. Unfortunately, many employers fail to clear these dues during the Full and Final (FNF) settlement process, citing company policies, notice period disputes, or performance issues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The withholding of gratuity causes considerable distress to departing employees. It represents a direct violation of a statutory mandate that carries severe penalties under Indian labor laws. Defaulting employers frequently exploit the employee&apos;s lack of familiarity with labor department procedures to delay payments indefinitely. Understanding your statutory rights and the formal channels available for recovery is essential to ensuring you receive your hard-earned retirement and separation benefits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in helping professionals recover their unpaid gratuity dues. Our legal tech platform guides you through the process of submitting statutory applications, serving formal legal notices, and filing petitions before the Controlling Authority to secure your payments. This comprehensive guide outlines the legal structures, eligibility rules, and procedural steps to recover your unpaid gratuity.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Gratuity is not a bounty or a matter of charity; it is a statutory right earned through years of dedicated service. The law actively penalizes employers who attempt to delay or deny this payout.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Establishment Coverage */}
                <section id="gratuity-statutory-applicability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Establishment Coverage</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The applicability of the Payment of Gratuity Act, 1972, is broad and covers a wide range of workplaces. Under Section 1(3) of the Act, the statute applies to every factory, mine, oilfield, plantation, port, railway company, and shop or establishment in which <strong>ten (10) or more employees</strong> are employed, or were employed on any day of the preceding twelve months. Once an establishment falls under the purview of the Act, it remains bound by the statute even if the number of employees subsequently drops below ten.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The definition of 'employee' under the Act includes any person (other than an apprentice) employed on wages in any establishment, factory, or office to do any manual, semi-skilled, skilled, technical, administrative, clerical, or managerial work. This means that IT professionals, software developers, sales executives, mid-level managers, and corporate directors are all fully covered by the Act. Private companies, startups, educational institutions, hospitals, and NGOs that meet the ten-employee threshold are legally mandated to pay gratuity to their eligible staff.
                    </p>
                  </div>
                </section>

                {/* Section 3: The 5-Year Rule */}
                <section id="continuous-service-rule" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The 5-Year Rule</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary eligibility condition for receiving gratuity under Section 4(1) of the Act is that the employee must have rendered <strong>continuous service for at least five (5) years</strong> with the establishment. This service can be terminated upon superannuation, retirement, resignation, or termination due to illness or accident. However, there is a crucial statutory exception to this rule: the requirement of five years of continuous service is completely waived if the termination of the employee&apos;s services is due to <strong>death or disablement</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the event of an employee&apos;s death or permanent disablement during their tenure, the employer is legally obligated to pay the gratuity to the employee or their nominees/legal heirs immediately, regardless of the total number of years served (even if they worked for only a few months). For all other separations (resignation or termination), the five-year service threshold must be satisfied. We analyze the employment contract and service history to establish eligibility and counter employer arguments regarding service gaps or probation periods.
                    </p>
                  </div>
                </section>

                {/* Section 4: The 240-Day Rule */}
                <section id="gratuity-240-days-rule" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The 240-Day Rule</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common area of dispute between employers and employees is when an employee resigns shortly before completing five calendar years of service (e.g. at 4 years and 10 months). Employers frequently deny gratuity in these cases, claiming the employee failed to meet the strict 5-year calendar mark. However, Section 2A of the Act defines "continuous service" and introduces the <strong>240-day rule</strong>, which provides vital protection for employees in these situations.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 2A, an employee is deemed to have completed a year of continuous service if they have actually worked for at least <strong>240 days</strong> in the preceding 12 months (or 190 days in the case of mines, plantations, or offices working less than 6 days a week). High Courts across India have repeatedly ruled that if an employee completes four years and at least 240 days of work in the fifth year, they are deemed to have completed the five years of continuous service required for gratuity eligibility.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This means that if you have worked for 4 years and 240 days (including paid leaves, national holidays, and weekends), you are fully eligible for gratuity. Defaulting companies often try to ignore this rule to avoid payouts, but our legal team regularly cites these High Court precedents to enforce compliance and secure payouts for eligible clients.
                    </p>
                  </div>
                </section>

                {/* Section 5: Calculation Formula */}
                <section id="gratuity-calculation-formula" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Calculation Formula</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The method for calculating the gratuity amount is explicitly defined under Section 4(2) of the Act. For every completed year of service or part thereof in excess of six months, the employer must pay the employee gratuity at the rate of fifteen (15) days&apos; wages based on the rate of wages last drawn by the employee. The standard mathematical formula used for this calculation is:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-semibold text-slate-800 text-sm leading-relaxed mb-4">
                      Gratuity Amount = (15 / 26) * Last Drawn Monthly Basic Salary &amp; DA * Years of Service
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      In this formula, a month is calculated as 26 working days (excluding Sundays), and the &apos;Last Drawn Wages&apos; component includes your Basic Salary and Dearness Allowance (DA) only. House Rent Allowance (HRA), special allowances, bonuses, and commissions are excluded from this calculation. When calculating the total years of service, any service period of six months or more in the final year is rounded up to a full year (e.g. 5 years and 7 months is rounded to 6 years), while any period less than six months is ignored (e.g. 5 years and 4 months is calculated as 5 years).
                    </p>
                  </div>
                </section>

                {/* Section 6: Nominations & Death Claims */}
                <section id="nomination-gratuity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Nominations &amp; Death Claims</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Section 6 of the Act mandates that every employee who has completed one year of service must submit a formal nomination in <strong>Form F</strong> to their employer. This nomination distributes the gratuity amount to designated family members in the event of the employee&apos;s death during their tenure. The nomination must be made in favor of one or more members of the employee&apos;s &apos;family,&apos; as defined by the Act. Any nomination made in favor of an outsider when the employee has a family is legally invalid.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the event of an employee&apos;s death, the employer must pay the gratuity to the nominees immediately, or to the legal heirs if no nomination was filed. As noted, the 5-year continuous service requirement is completely waived for death claims. If the nominee is a minor, the Controlling Authority will deposit the amount in a bank for the benefit of the minor until they attain majority. We assist families in preparing documentation and filing death claims to secure these benefits without delay.
                    </p>
                  </div>
                </section>

                {/* Section 7: Forfeiture Rules */}
                <section id="withholding-forfeiture-gratuity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Forfeiture Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common tactic used by defaulting employers to withhold gratuity is citing Section 4(6) of the Act. This section permits the forfeiture of gratuity, but only under strict, limited conditions. Specifically, the gratuity of an employee whose services have been terminated can be forfeited:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>To the extent of any financial damage or loss caused to the employer&apos;s property, provided the termination was due to the employee&apos;s willful omission or negligence.</li>
                      <li>Wholly or partially, if the services of the employee were terminated for riotous or disorderly conduct, violence, or any act of moral turpitude committed during employment.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Crucially, the employer cannot forfeit gratuity under Section 4(6) unless the employee&apos;s services were formally terminated through a domestic inquiry that established the misconduct. Gratuity cannot be withheld for general performance issues, notice period shortfalls, or pending asset handovers. If the employer fails to conduct a proper inquiry or issue a show-cause notice, any forfeiture is illegal, and the employee is entitled to a full refund.
                    </p>
                  </div>
                </section>

                {/* Section 8: Form I Submission */}
                <section id="pre-legal-application-form-i" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Form I Submission</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating legal proceedings, an employee must formally request their gratuity using the statutory format. Under Rule 7(1) of the Payment of Gratuity (Central) Rules, 1972, the employee must submit a written application in <strong>Form I</strong> to the employer. This application should ideally be submitted within thirty (30) days from the date the gratuity became payable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Form I requires detailed information, including the date of appointment, the date of resignation or retirement, the last drawn basic salary, and the calculation of the gratuity amount. Submitting Form I is a critical step because it creates a formal record of your claim and triggers the employer&apos;s statutory 30-day timeline to pay or issue a notice explaining any delay. If the employer ignores Form I, the employee has strong grounds to escalate the dispute.
                    </p>
                  </div>
                </section>

                {/* Section 9: Serving Legal Notice */}
                <section id="gratuity-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer ignores your Form I application or refuses to pay, serving a formal <strong>Legal Notice</strong> is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 10: Form N Complaint */}
                <section id="filing-form-n-controlling-authority" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Form N Complaint</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to pay your gratuity despite receiving Form I and a legal notice, you can escalate the dispute to the state labor department. Under Rule 10(1) of the Gratuity Rules, the employee can file a formal complaint in <strong>Form N</strong> before the <strong>Controlling Authority</strong> (usually the Assistant Labour Commissioner) in their district.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The process for filing a Form N complaint involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Drafting the Petition:</strong> Outline the details of your employment, length of service, last drawn wages, and the calculated gratuity amount. State clearly that the employer has failed to pay the dues despite a formal demand.</li>
                      <li><strong>Attaching Documents:</strong> Attach copies of your appointment letter, salary slips, resignation acceptance, Form I copy with proof of delivery, and the legal notice.</li>
                      <li><strong>Filing:</strong> Submit the application (with required copies) to the Controlling Authority in person or via registered post.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the complaint is admitted, the Controlling Authority will initiate an inquiry and issue a notice to both the employee and the employer, directing them to appear for a hearing.
                    </p>
                  </div>
                </section>

                {/* Section 11: Hearing Proceedings */}
                <section id="controlling-authority-hearings" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Hearing Proceedings</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Controlling Authority conducts proceedings in a quasi-judicial manner, issuing a notice in <strong>Form O</strong> to both parties, requiring them to appear for a hearing. The primary goal is to examine the dispute, review the evidence, and determine the exact amount of gratuity payable to the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      During the hearings, the employer must produce payroll registers, attendance sheets, and asset clearance logs. The employee presents their appointment letter, salary slips, and resignation acceptance. If the employer fails to appear despite receiving notices, the Controlling Authority can proceed with the case ex-parte and pass an order based on the evidence presented by the employee.
                    </p>
                  </div>
                </section>

                {/* Section 12: Section 8 Certificates */}
                <section id="gratuity-recovery-certificate" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Section 8 Certificates</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the Controlling Authority rules in favor of the employee and issues an order directing the employer to pay, the employer must comply within thirty (30) days. If the employer refuses to pay despite the order, the employee can initiate recovery under <strong>Section 8 of the Act</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 8, the Controlling Authority issues a formal <strong>Recovery Certificate</strong> to the District Collector. The Collector is then legally empowered to recover the calculated dues from the employer as "arrears of land revenue." This includes the power to freeze the company&apos;s bank accounts, attach their physical office assets, or seal their premises to recover your hard-earned wages.
                    </p>
                  </div>
                </section>

                {/* Section 13: Appeal Process */}
                <section id="appealing-authority-gratuity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Appeal Process</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If either the employee or the employer is dissatisfied with the Controlling Authority&apos;s order, they can file an appeal under <strong>Section 7(7) of the Act</strong>. The appeal must be filed before the <strong>Appellate Authority</strong> (typically the Regional Labour Commissioner) within <strong>60 days</strong> from the date of the order.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, the Act places a strict condition on employers seeking to appeal: the employer must deposit the entire disputed gratuity amount with the Appellate Authority before the appeal can be admitted. This pre-deposit requirement prevents employers from filing frivolous appeals simply to delay payments, protecting the interests of the employee.
                    </p>
                  </div>
                </section>

                {/* Section 14: Criminal Penalties */}
                <section id="penalties-non-payment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Penalties</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Payment of Gratuity Act, 1972, contains strict penal provisions to deter employers from avoiding their statutory obligations. Under <strong>Section 9(2) of the Act</strong>, any employer who avoids paying gratuity or makes false statements to reduce the payable amount faces criminal prosecution.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This offense carries a mandatory minimum imprisonment of three (3) months, which can extend up to <strong>one year</strong>, or a fine of up to <strong>₹20,000</strong>, or both. Because non-payment of gratuity is a criminal offense, serving a notice that highlights these penalties often pressures directors to settle outstanding dues immediately to avoid personal prosecution.
                    </p>
                  </div>
                </section>

                {/* Section 15: Limitation Periods */}
                <section id="gratuity-limitation-timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Timing is critical when recovering outstanding dues. Under the Gratuity Rules, an employee should ideally file a Form I application within 30 days of resignation, and file a Form N complaint before the Controlling Authority within <strong>90 days</strong> of the dispute.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you have missed these timelines, your claim is not lost. The Controlling Authority has the power to condone delays and accept late applications if you can demonstrate "sufficient cause" (such as ongoing settlement negotiations or medical issues). High Courts have ruled that since gratuity is a statutory right, technical delays should not be used to deny employees their dues.
                    </p>
                  </div>
                </section>

                {/* Section 16: Delayed Pay Interest */}
                <section id="gratuity-interest-delayed-payment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Delayed Pay Interest</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your gratuity payment is delayed beyond 30 days, you are entitled to claim interest. Under Section 7(3A) of the Act, if the gratuity is not paid within the prescribed time, the employer is liable to pay simple interest on the delayed amount.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The interest rate is specified by the Central Government (currently around 7% to 10% per annum) and runs from the date the gratuity became payable until the date of actual payment. We calculate this interest and include it in our legal demands, ensuring you are compensated for the delay.
                    </p>
                  </div>
                </section>

                {/* Section 17: Company Insolvency */}
                <section id="bankruptcy-insolvency-gratuity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Company Insolvency</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      During insolvency proceedings under the Insolvency and Bankruptcy Code, 2016 (IBC), employees are often concerned about losing their retirement dues. However, the law provides strong protection for employee gratuity funds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 36(4) of the IBC, the gratuity fund of a company is excluded from the liquidation estate. This means the assets of the gratuity fund cannot be used to pay off secured creditors or bank loans, and must be paid to the employees in full, providing critical security during corporate liquidations.
                    </p>
                  </div>
                </section>

                {/* Section 18: Taxation & Exemptions */}
                <section id="gratuity-taxation-exemptions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Taxation &amp; Exemptions</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Gratuity payments received by employees are eligible for tax exemptions under Section 10(10) of the Income Tax Act, 1961. For government employees, the entire gratuity amount is completely exempt from tax.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For private-sector employees covered under the Payment of Gratuity Act, the maximum tax-free limit is currently <strong>₹20 Lakhs</strong>. Any amount received beyond this threshold is subject to income tax according to the employee&apos;s tax slab.
                    </p>
                  </div>
                </section>

                {/* Section 19: Success Stories */}
                <section id="gratuity-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, we have successfully resolved hundreds of complex gratuity recovery and employment dues disputes across India. Our data-driven legal notice strategy and structured escalation flow have proven effective against startups, mid-sized firms, and large multinational corporations alike. Below are representative examples of recoveries handled by our legal panel:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Notice Period Discrepancy</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.5 Lakhs Gratuity from IT Firm</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software engineer in Gurugram resigned after six years of service. The employer withheld their gratuity, claiming a short notice period of 5 days. We served a legal notice outlining that gratuity cannot be forfeited for minor notice shortfalls. The HR released the entire amount of ₹3.5 Lakhs along with interest within 10 days of notice delivery.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: 240-Day Rule Dispute</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Form N Action Yields Full Gratuity</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          An employee worked for 4 years and 10 months (completing 240 working days in the 5th year) but was denied gratuity. We filed Form N before the Controlling Authority. The authority ruled in favor of the employee, ordering a 100% refund of the gratuity amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 20: Client Reviews */}
                <section id="gratuity-client-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My former IT employer withheld my gratuity of ₹3.5 Lakhs after 6 years of service, claiming my resignation notice was shorter by 5 days. LegalRecovery sent a strong legal notice citing the Payment of Gratuity Act. Within 10 days, the company processed the payment with interest. Truly professional!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Harish Chandra</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I worked for a manufacturing firm for 4 years and 10 months and was denied gratuity. LegalRecovery explained the 240-day rule under Section 2A and filed Form N before the Controlling Authority. The authority ruled in my favor and ordered a full refund. Incredible support!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kavitha Swaminathan</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The company tried to forfeit my gratuity, alleging poor performance post-resignation. LegalRecovery's notice made the HR realize that gratuity can only be forfeited for specific misconduct under Section 4(6) and not for performance issues. Got my full dues in 15 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Nitin Saxena</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;After my father's demise, his company delayed the gratuity payment for months. LegalRecovery drafted a formal notice on our behalf. The company released the entire amount of ₹6.2 Lakhs along with interest. Highly recommend their legal assistance.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Preeti Deshpande</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Excellent legal tech platform. They computed my gratuity accurately, handled all correspondence, and prepared my Form N petition. The Assistant Labour Commissioner issued an order, and the builder finally cleared my dues to avoid bank account freezing. Thank you!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rohan Alvares</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I was running around for 8 months to get my gratuity cleared from a retail company. LegalRecovery's notice copied to the company's board of directors worked wonders. The corporate office cleared the FNF within 12 days. Very satisfied with the service.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Debashish Banerjee</h4>
                    </div>
                  </div>
                </section>

                {/* Section 21: Why Choose Us? */}
                <section id="gratuity-our-recovery-approach" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran labor advocates with advanced workflow automation to deliver unmatched speed, transparency, and resolution rates. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Attorney-Drafted Quality:</strong> Your notice is individually reviewed and drafted by a qualified legal professional, ensuring precise statutory citations tailored to your specific case facts.</li>
                      <li><strong>VC/Director Escalation:</strong> We do not just email HR. We dispatch physical registered letters to the registered company office and personal residences of all active directors, maximizing pressure.</li>
                      <li><strong>Digital Dashboard:</strong> Track the drafting progress, post dispatch tracking, and delivery status of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no retention fee surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 22: FAQs Accordion */}
                <section id="gratuity-faqs" className="scroll-mt-32">
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
                <h3 className="text-sm font-black mb-3">Recover Gratuity Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your gratuity recovery case with labor law experts. We serve verified notices with full compliance support.
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
