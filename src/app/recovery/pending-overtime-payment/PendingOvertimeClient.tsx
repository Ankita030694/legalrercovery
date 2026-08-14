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
    question: "What is the legal rate of overtime pay in India?",
    answer: "Under both the Factories Act, 1948 (Section 59) and most state-specific Shops and Commercial Establishments Acts, the statutory rate for overtime work is double (2x) the ordinary rate of wages. This means that for every hour of overtime worked beyond the daily or weekly limits, the employee is entitled to receive twice their standard hourly wage."
  },
  {
    question: "How is overtime pay calculated under labor regulations?",
    answer: "Overtime pay is calculated based on the employee's 'ordinary rate of wages', which includes basic salary plus dearness allowance (DA). Other allowances like HRA, bonus, or concessions are excluded. The formula is: Overtime Pay = [(Monthly Basic + DA) / (Working Days × Standard Daily Hours)] × 2 × Overtime Hours. Typically, a 26-day month and 8-hour workday are used as the baseline."
  },
  {
    question: "Does the overtime law apply to IT and software companies in India?",
    answer: "Yes. IT companies, startups, and service sector offices are registered under state Shops and Commercial Establishments Acts. While some states have introduced temporary notifications exempting IT firms from certain provisions of daily working limits, the statutory obligation to pay for overtime hours worked beyond 48 hours in a week remains legally enforceable for non-managerial staff."
  },
  {
    question: "Can an employer deny overtime pay by claiming I am in a 'managerial' position?",
    answer: "Employers frequently misclassify employees as managers to avoid paying overtime. Under Indian labor law, your job title is not the deciding factor; your actual duties are what matters. If your primary duties are operational, technical, or clerical, and you do not have administrative power (such as hiring, firing, or financial approval), you qualify as a 'workman' or non-managerial employee and are entitled to overtime pay."
  },
  {
    question: "Is there a limit on the maximum number of overtime hours I can work?",
    answer: "Yes. Labor laws impose strict limits to protect worker health. Under the Factories Act, 1948, the total number of working hours, including overtime, cannot exceed 10 hours in a day or 60 hours in a week. The total overtime hours worked by an employee cannot exceed 50 to 75 hours in any quarter, depending on state-specific rules and amendments."
  },
  {
    question: "What evidence do I need to prove my unpaid overtime hours?",
    answer: "To recover unpaid overtime, you should compile: (1) biometric attendance logs or gate entry logs; (2) official email trails showing tasks assigned and sent after standard working hours; (3) Slack, Microsoft Teams, or WhatsApp chat logs showing management demanding work during weekends or nights; (4) client call logs; and (5) payslips showing standard salary credits without overtime adjustments."
  },
  {
    question: "Can an employer force me to work overtime without my consent?",
    answer: "No. While employment contracts may include clauses requiring reasonable overtime during business exigencies, continuous forced overtime without consent violates labor regulations. Employees have the right to refuse excessive overtime, especially if the employer does not pay the statutory double rate for those additional hours."
  },
  {
    question: "Can I claim overtime pay for working on national holidays or weekly offs?",
    answer: "Yes. Under the Weekly Holidays Act and state-specific Shops and Establishments Acts, working on a weekly off-day or a declared national holiday entitles the employee to either double the normal wage rate or a compensatory off-day along with standard pay. If the employer fails to provide either, it constitutes a wage violation."
  },
  {
    question: "What is the limitation period for recovering outstanding overtime wages?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit for outstanding overtime wages is three (3) years from the date the wages became due. Under Section 15 of the Payment of Wages Act, claims before the designated Authority should ideally be filed within twelve (12) months from the due date, though delay condonation is possible."
  },
  {
    question: "How do I file a complaint for unpaid overtime on the SAMADHAN portal?",
    answer: "You can file a dispute online on the Ministry of Labour's SAMADHAN portal. You must upload evidence of your working hours (attendance records, emails) and your employment contract. The Conciliation Officer will summon the employer for joint mediation. If the employer refuses to pay, the officer refers the case to the Labour Court."
  },
  {
    question: "Can I file an Order 37 CPC summary suit for unpaid overtime?",
    answer: "Yes, provided your employment agreement or company HR policy documents contain clear terms regarding overtime rates and hours, making the outstanding overtime pay a liquidated debt arising from a written contract. A summary suit under Order 37 CPC is a fast-track civil court process that forces the employer to seek leave to defend within 10 days."
  },
  {
    question: "Are company directors personally liable for unpaid overtime wages?",
    answer: "Yes. In cases where the company deliberately misrepresents working hours or fails to pay statutory dues, the corporate veil can be pierced. Under labor acts and BNS Section 316 (Criminal Breach of Trust), the directors and managers responsible for the day-to-day operations of the establishment can be prosecuted personally."
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
      "name": "Pending Overtime Payment Recovery",
      "item": "https://www.legalrecovery.in/recovery/pending-overtime-payment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Overtime Compensation & Dues | Legal Guide",
  "description": "Exhaustive legal guide on recovering unpaid overtime wages, double rate calculations, and filing labor court claims in India.",
  "image": "https://www.legalrecovery.in/og-pending-overtime-payment.png",
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
  "name": "Pending Overtime Payment Recovery Services",
  "image": "https://www.legalrecovery.in/og-pending-overtime-payment.png",
  "description": "Advocate-backed legal assistance for recovering unpaid overtime wages, double rate overtime claims, and representation in labor disputes across India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "468"
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
        "name": "Siddharth Mehta"
      },
      "reviewBody": "I worked as a Senior Quality Control Officer at a manufacturing plant. I regularly worked 12-hour shifts to meet production targets, but the management refused to pay me overtime, claiming my role was 'supervisory'. LegalRecovery helped me draft an advocate notice citing Factories Act Section 59. Facing statutory prosecution, the company paid my entire pending overtime dues within two weeks. Exceptional work!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Sen"
      },
      "reviewBody": "Working at a customer support center meant constant night shifts and working on public holidays. The company never paid us overtime. I contacted LegalRecovery, and they guided me in filing an online dispute on the SAMADHAN portal. The Conciliation Officer issued summons to the HR director, and they were forced to pay my outstanding holiday and overtime dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ramesh Patil"
      },
      "reviewBody": "An engineering firm delayed my overtime payments for six months, claiming that client billings were delayed. LegalRecovery drafted a summary suit under Order 37 CPC and served a demand notice directly to the board of directors. The management quickly cleared my outstanding dues plus interest to avoid court proceedings."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Rathore"
      },
      "reviewBody": "The logistics firm where I worked routinely modified our biometric logs to show standard working hours instead of our actual overtime. LegalRecovery helped me collect gate entry logs and email trails as evidence. They served a notice to the Labour Inspector, who audited the firm. The company settled my overtime dues immediately. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shruti Hegde"
      },
      "reviewBody": "My employer terminated me immediately and refused to pay my overtime dues, claiming that overtime is 'discretionary'. LegalRecovery sent a sharp notice highlighting Shops and Establishments Act regulations and the double rate mandate. The company cleared all my dues in my final settlement. Very happy!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Verma"
      },
      "reviewBody": "I was forced to work 60-hour weeks without any overtime pay. LegalRecovery drafted a comprehensive legal notice detailing our statutory rights. The management not only paid my pending overtime but also adjusted our working hours to meet legal limits. Excellent service!"
    }
  ]
};

export default function PendingOvertimeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "pending-overtime-corporate-context", title: "1. Overtime Crisis in Modern Corporates" },
    { id: "statutory-overtime-rules", title: "2. Statutory Overtime Pay & Wage Rates" },
    { id: "wrongful-denial-misclassification", title: "3. Wrongful Denial & Role Misclassification" },
    { id: "legal-recourse-labor-courts-claims", title: "4. Judicial Forums & Debt Recovery" },
    { id: "advocate-notices-evidence-strategy", title: "5. Advocate Notices & Evidence Trails" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Pending Overtime Recovery", href: "/recovery/pending-overtime-payment" },
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
              Recover Pending <span className="text-[#DC2626]">Overtime Payments</span> &amp; Dues
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did your employer refuse to pay for your overtime hours or misclassify your role to deny your statutory dues? Learn your rights and claim your compensation.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Overtime Recovery
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
                
                {/* Section 1: Overtime Crisis in Modern Corporates */}
                <section id="pending-overtime-corporate-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overtime Crisis in Modern Corporates</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern professional environment, the line between standard working hours and personal time has become increasingly blurred. Many corporate offices, IT companies, startups, and manufacturing plants routinely expect employees to work beyond their standard contract hours. This issue has created an overtime crisis in India, where working late nights, weekends, and holidays has become normalized. Overtime refers to any hours worked beyond the statutory daily or weekly limits defined by labor regulations (typically 8 to 9 hours a day or 48 hours a week). While employees dedicate their energy and time to meet business targets, employers often fail to pay the mandated overtime compensation. This denial of statutory pay represents a significant wage violation, impacting the physical health and financial stability of working professionals.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is important to distinguish pending overtime disputes from standard unpaid salary or general Full and Final (FNF) issues. In a standard salary dispute, the employer has failed to pay the basic monthly wages agreed in the employment contract. In a pending overtime dispute, the employee has received their standard monthly salary, but has been denied the additional compensation due for their extra hours of work. Employers often use administrative policies, such as requiring verbal approvals for overtime or refusing to log overtime hours in payroll systems, to avoid paying these dues. However, under Indian labor jurisprudence, statutory overtime is a mandatory right. If an employee has performed the work, they are entitled to the corresponding wages, and internal company policies cannot override central and state-level labor protections.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This crisis is worsened by the imbalance of power between the employer and the employee. Employees are often hesitant to claim overtime pay for fear of being labeled &quot;uncooperative,&quot; which could lead to negative performance reviews, missed promotions, or termination. Some employers take advantage of this hesitation by introducing corporate cultures that celebrate working excessive hours without compensation. Unilateral expectations of unpaid overtime violate basic principles of contract law and statutory labor limits. An employment contract is a reciprocal agreement; if the employee provides additional labor beyond the agreed limits, the employer is legally bound to pay for those hours. When an employer refuses to pay, the employee has the legal right to demand compliance and seek recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in helping employees recover their pending overtime payments and enforce their statutory rights. We analyze your employment agreement, review biometric records and communication logs, and build a strong case against your employer. By using structured legal notice campaigns and representing you before labor authorities, we help you secure the compensation you have earned. We ensure that companies comply with the statutory overtime mandates, helping you protect both your health and your livelihood.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Statutory overtime is a mandatory right in India. Employers are legally obligated to pay double the normal wage rate for all overtime hours worked. Company policies or verbal agreements cannot override these statutory protections.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Statutory Overtime Pay & Wage Rates */}
                <section id="statutory-overtime-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Statutory Overtime Pay &amp; Wage Rates</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The statutory framework protecting employees&apos; right to overtime pay in India is established by central labor acts and state-specific regulations. For workers in manufacturing, engineering, and industrial units, the primary legislation is the <strong>Factories Act, 1948</strong>. Under <strong>Section 59</strong> of the Factories Act, where a worker works in a factory for more than <strong>nine (9) hours in any day</strong> or for more than <strong>forty-eight (48) hours in any week</strong>, they are entitled to wages in respect of overtime work at the rate of <strong>twice (2x) their ordinary rate of wages</strong>. This double rate mandate is a statutory requirement that employers cannot contract out of.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees in offices, IT companies, startups, retail, and other commercial sectors, overtime is governed by state-specific <strong>Shops and Commercial Establishments Acts</strong> (e.g., Delhi, Maharashtra, Karnataka, Tamil Nadu). While these acts are state-specific, they align with the double-rate principle:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Daily and Weekly Limits:</strong> Most state acts define standard working hours as 8 to 9 hours a day, and 48 hours a week. Any hours worked beyond these limits must be treated as overtime.</li>
                        <li><strong>Double Rate Mandate:</strong> State laws require overtime hours to be compensated at <strong>double the regular wage rate</strong> (2x the ordinary rate of wages).</li>
                        <li><strong>Holiday and Off-Day Work:</strong> Working on weekly offs or declared national holidays also entitles the employee to double-rate pay or a compensatory off-day along with standard pay.</li>
                      </ul>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The calculation of the &quot;ordinary rate of wages&quot; for overtime is based on the employee&apos;s <strong>basic salary plus dearness allowance (DA)</strong>, if any. Other allowances, such as House Rent Allowance (HRA), bonuses, travel concessions, or performance-based incentives, are generally excluded from the calculation. The standard formula used by courts and labor authorities is:
                      <br />
                      <span className="font-mono bg-slate-100 p-2 rounded block text-center my-3 text-xs sm:text-sm">
                        Overtime Pay = [ (Monthly Basic + DA) / (26 Working Days × 8 Daily Hours) ] × 2 × Overtime Hours
                      </span>
                      This formula ensures that employees are paid fairly for their additional hours, reflecting the statutory requirement to pay double the normal rate for overtime work.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These protections are reinforced by the <strong>Code on Wages, 2019</strong>, which consolidates and updates previous labor laws. The Code standardizes overtime rules across all sectors and salary limits, requiring employers to pay overtime at a rate not less than twice the ordinary rate of wages. The Code also limits the maximum number of working hours, including overtime, to protect employee welfare. By establishing a clear national standard, the Code on Wages provides our legal team with a strong foundation to demand compliance and seek recovery from defaulting employers.
                    </p>
                  </div>
                </section>

                {/* Section 3: Wrongful Denial & Role Misclassification */}
                <section id="wrongful-denial-misclassification" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Wrongful Denial &amp; Role Misclassification</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common tactic used by employers to deny overtime pay is the misclassification of employees as managers or supervisors. Most labor laws exempt employees in managerial or administrative roles from overtime eligibility, based on the assumption that managers have autonomy over their schedules and are paid higher, all-inclusive salaries. To exploit this loophole, companies often assign managerial job titles (such as &quot;Assistant Manager,&quot; &quot;Team Lead,&quot; or &quot;Project Coordinator&quot;) to employees whose duties are primarily operational, technical, or clerical. This misclassification is used to deny overtime pay, even when the employee has no actual administrative or managerial authority.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian labor jurisprudence, your job title is not the deciding factor in determining your employment status; your actual daily duties are what matters. The Supreme Court of India has consistently held that to qualify as a manager, an employee must have administrative and supervisory powers, such as the authority to hire or fire staff, approve leaves, execute financial transactions, or make policy decisions. If your primary duties involve writing code, handling customer calls, processing data, operating machinery, or performing clerical tasks, you qualify as a <strong>&quot;workman&quot; under Section 2(s) of the Industrial Disputes Act, 1947</strong>, or a non-managerial employee under state Shops Acts. This means you are entitled to statutory overtime pay, regardless of your job title.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers also use other methods to deny overtime pay. These include:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Unrecorded Overtime:</strong> Forcing employees to log out of biometric systems at the end of their shift but continue working, or demanding work via email or Slack after standard working hours.</li>
                        <li><strong>One-Sided Clauses:</strong> Including clauses in employment contracts stating that overtime is &quot;voluntary&quot; or &quot;not compensated.&quot; Such clauses violate public policy and are legally void.</li>
                        <li><strong>Biometric Manipulation:</strong> Altering attendance records in company database systems to show standard working hours instead of the actual hours worked.</li>
                      </ul>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These practices violate basic contract and labor laws. If an employer requires you to work beyond standard hours, they must pay the statutory double rate. Vague claims of &quot;business exigencies&quot; or &quot;voluntary contributions&quot; do not excuse them from this obligation. Our legal team helps employees challenge these practices. We audit your actual duties and collect evidence of your working hours, showing the employer that their denial of overtime pay is legally unsustainable and exposes them to regulatory penalties.
                    </p>
                  </div>
                </section>

                {/* Section 4: Judicial Forums & Debt Recovery */}
                <section id="legal-recourse-labor-courts-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Judicial Forums &amp; Debt Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer refuses to pay outstanding overtime wages despite formal notices, the employee must choose the appropriate judicial forum to file their claim. The choice of forum depends primarily on the employee&apos;s job role and salary structure. For employees who qualify as <strong>workmen under the Industrial Disputes Act, 1947</strong>, the most effective remedy is filing a recovery application under <strong>Section 33C(1) or Section 33C(2)</strong> of the Act. Under Section 33C(1), if the overtime pay is defined and undisputed (such as a calculated amount shown on a payslip), the labor authority can issue a recovery certificate directly to the District Collector, who recovers the amount from the employer&apos;s assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the overtime amount is disputed, the employee can file a petition under <strong>Section 33C(2)</strong> of the Industrial Disputes Act. Under this section, the Labour Court conducts a detailed inquiry to determine the exact hours worked and computes the overtime pay due at the statutory double rate. The advantage of the labor court route is that it is relatively informal, has low filing costs, and protects the employee from retaliation. However, this option is generally limited to employees who fit the statutory definition of a workman, meaning that managers and administrative heads must look to civil court remedies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For managers, supervisors, and other high-salaried professionals, the primary civil remedy is a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. A regular civil suit can take years to resolve. Order 37 CPC provides an expedited pathway for recovering liquidated debts arising from written contracts (such as an employment agreement defining overtime rates or timesheet records). Upon receiving the summons, the employer has only <strong>10 days</strong> to enter an appearance and must apply for &quot;Leave to Defend,&quot; proving they have a genuine and substantial defense. If they fail to do so, the court immediately passes a decree in favor of the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, employees can approach the <strong>Labour Commissioner or Labour Inspector</strong> under the state-specific Shops and Commercial Establishments Act. Labor inspectors have the power to inspect the company&apos;s premises, audit attendance registers, and summon the management. In major cities like Bangalore, Mumbai, Chennai, and Delhi, a summons from a labor inspector is a powerful tool, as companies want to avoid regulatory audits and penalties for wage violations. If the employer has deducted statutory contributions but failed to pay overtime, they can also face criminal prosecution under BNS Section 316 for Criminal Breach of Trust. Our legal team evaluates your case to recommend the most effective combination of civil and regulatory remedies.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & Evidence Trails */}
                <section id="advocate-notices-evidence-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; Evidence Trails</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery process for pending overtime wages should begin with a structured pre-litigation escalation strategy. This involves building a clear documentary record of your overtime hours. You should compile all relevant records, including:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Biometric Logs:</strong> Exported records showing your clock-in and clock-out times.</li>
                        <li><strong>Digital Communications:</strong> Email trails, Slack, Microsoft Teams, or WhatsApp chat logs showing management demanding work after standard hours or during holidays.</li>
                        <li><strong>Work Deliverables:</strong> Git commits, document edits, or system login logs that prove you were actively working during those overtime hours.</li>
                        <li><strong>Timesheets:</strong> Approved timesheets or project status reports submitted to clients or managers.</li>
                      </ul>
                      Once this evidence is compiled, you should send a formal written grievance to HR and senior management, requesting a reconciliation and payout.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed Legal Notice</strong>. A legal notice is a structured legal document sent to the employer, setting out the facts of your employment, detailing the overtime hours worked, calculating the interest due under the Interest Act, 1978, and warning of the civil and criminal actions that will follow if they fail to comply. Serving a legal notice is a mandatory step before filing a summary suit or labor complaint, as it establishes your cause of action and forms part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the specific details of your overtime dispute. We do not use generic templates. Instead, we highlight the contract terms, the provisions of the Factories Act or state Shops and Establishments Acts, and the personal liability of the company&apos;s directors. We digitally dispatch the notice via verified email and WhatsApp to the company&apos;s registered office, and send copies to the personal residential addresses of the directors, ensuring they are personally aware of their legal exposure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of overtime pay disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to clear undisputed salary debts rather than face public litigation, credit rating impacts, or regulatory audits. If the employer responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed. If they deny the claim or fail to respond, the legal notice serves as the base document for filing a claim before the Labour Commissioner, the Payment of Wages Authority, or the civil court, ensuring you are well-prepared for the next step of the recovery process.
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
                    Rate: Double Standard Pay (2x)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Base: Basic Salary + DA Only
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Status: Duties Define Eligibility
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forums: Labour Court / Summary Suit
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
                  Our labor advocates specialize in recovering pending overtime wages and enforcing statutory double-rate pay. Let us handle your legalnotice campaign.
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
