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
    question: "What should I do if my salary slip shows PF deduction, but my EPFO portal shows no deposit?",
    answer: "First, check your EPFO portal passbook via the unified portal or UMANG app to confirm the default. If the employer has deducted the employee's share but failed to deposit it, they have committed a criminal offense. Reach out to your HR first. If they fail to deposit it within a week, file a formal complaint on the EPFiGMS portal and send a legal notice."
  },
  {
    question: "What is EPFiGMS and how does it help in PF recovery?",
    answer: "EPFiGMS (EPF i-Grievance Management System) is the official online grievance portal of the EPFO. Employees can register complaints regarding non-payment, non-deposit of PF, or transfer delays. Once a grievance is registered, it is sent to the local Regional Provident Fund Commissioner who must investigate and resolve it."
  },
  {
    question: "What is Section 7A of the EPF Act?",
    answer: "Section 7A of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, empowers the Regional Provident Fund Commissioner to conduct a judicial inquiry to determine if an employer has defaulted on contributions, and to calculate the exact outstanding dues. The Commissioner has the power to summon the employer, audit books, and pass binding recovery orders."
  },
  {
    question: "Can directors be jailed for not depositing PF?",
    answer: "Yes. Under the EPF Act and the Bharatiya Nyaya Sanhita, 2023 (formerly IPC), deducting employee contributions from their salary and failing to deposit them with the EPFO is a cognizable and non-bailable offense of Criminal Breach of Trust (Section 314/316 BNS). It carries a penalty of up to 3 years of imprisonment."
  },
  {
    question: "How does the EPFO recover unpaid dues from defaulting companies?",
    answer: "If an employer fails to pay the dues calculated under a Section 7A inquiry, the EPFO's Recovery Officers can issue attachment orders under Section 8F. This allows them to freeze the employer's bank accounts, seize their office properties, or recover dues directly from the company's clients."
  },
  {
    question: "What is the interest rate and damages charged on delayed PF deposits?",
    answer: "Defaulting employers are liable to pay simple interest of 12% per annum under Section 7Q of the Act, along with penal damages under Section 14B. The damages can range from 5% to 25% of the defaulted amount, depending on the period of delay."
  },
  {
    question: "Is there a limitation period for recovering unpaid PF dues from an employer?",
    answer: "No. There is no limitation period under the EPF Act, 1952 for recovering outstanding PF contributions. The EPFO can initiate inquiry and recovery proceedings against an employer even after several years of default. However, employees should file grievances early to secure their retirement savings."
  },
  {
    question: "What is the difference between Employee Share and Employer Share in EPF?",
    answer: "In a standard EPF account, 12% of the employee's basic salary & DA is deducted as the employee's share. The employer is legally obligated to match this with a 12% contribution. Out of the employer's 12%, 8.33% goes to the Employee Pension Scheme (EPS) and 3.67% goes to the EPF account."
  },
  {
    question: "Can an employer deduct their share of PF from my CTC?",
    answer: "Yes, if your employment contract specifies that the CTC (Cost to Company) includes both the employee and employer shares of PF, the employer can deduct their share from the gross CTC. However, the final net take-home salary must still comply with minimum wage rules, and the deductions must be properly deposited with the EPFO."
  },
  {
    question: "What happens to my PF dues if the company files for bankruptcy/insolvency?",
    answer: "Under Section 36(4) of the Insolvency and Bankruptcy Code (IBC), 2016, employee provident fund dues are completely excluded from the liquidation estate of the company. The insolvency resolution professional cannot use these funds to clear other bank debts; the PF dues must be paid to the employees on a priority basis."
  },
  {
    question: "Can I file a complaint with the Labour Commissioner for PF non-payment?",
    answer: "Yes, you can file a complaint with the Assistant Labour Commissioner under the Shops and Establishments Act, but the primary regulatory authority for PF recovery is the EPFO. Filing a grievance on EPFiGMS is generally faster and more effective since the EPFO has direct enforcement and attachment powers."
  },
  {
    question: "Is WhatsApp communication or email confirmation valid proof of PF default in court?",
    answer: "Yes, emails and digital communication confirming salary deductions and promising PF deposits are fully admissible under Section 63 of the BNS, 2023 (formerly Section 65B of the Evidence Act), provided they are accompanied by a statutory authenticity certificate."
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
      "name": "PF Amount Recovery",
      "item": "https://www.legalrecovery.in/recovery/pf-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Employer Not Depositing PF? Recovery Options & EPFiGMS Complaint Guide",
  "description": "Comprehensive guide on recovering unpaid Provident Fund (PF) contributions from employers in India. Learn about EPFiGMS, Section 7A inquiry, and criminal penalties.",
  "image": "https://www.legalrecovery.in/og-pf-recovery.png",
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
  "name": "PF Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-pf-recovery.png",
  "description": "Expert legal assistance for recovering unpaid Provident Fund (PF) deposits from employers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "670"
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
        "name": "Vikram Sengupta"
      },
      "reviewBody": "My previous company deducted PF from my salary for 8 months but never deposited it in my UAN. LegalRecovery drafted a formal notice citing BNS Criminal Breach of Trust. Within 15 days of receiving the notice, the directors cleared all the backlog in my EPFO portal. Saved my retirement funds!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kiran Nair"
      },
      "reviewBody": "After resigning, my startup refused to clear my 1 year of pending PF deposits. LegalRecovery helped me file a detailed grievance on the EPFiGMS portal and served a legal notice to the founders. The EPFO initiated an inquiry, and the company deposited my dues with interest. Exceptional legal support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Madhuri Joshi"
      },
      "reviewBody": "A software firm withheld my PF and relieving documents because I raised a voice against delayed salaries. LegalRecovery's notice made them realize they face up to 3 years in jail for PF default. HR released the relieving letter and deposited all PF arrears within a week."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Abhishek Goel"
      },
      "reviewBody": "Highly professional legal tech platform. They audited my salary slips, calculated the exact PF default, and prepared my petition. The EPFO Commissioner issued bank attachment notices, and my employer finally cleared the dues. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Srinivas Murthy"
      },
      "reviewBody": "I had a complicated PF dispute with an employer who claimed my CTC structure didn't cover PF. LegalRecovery analyzed the contract, cited the EPF Act applicability limits, and sent a strong notice. The company processed the backlog without any litigation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ritu Malhotra"
      },
      "reviewBody": "The best service for employee rights. They handled my unpaid PF and gratuity dues simultaneously. Their legal notice reached the corporate directors and board members, prompting them to clear my entire FNF dues within 12 days. Very grateful!"
    }
  ]
};

export default function PfAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "pf-overview", title: "Overview of EPF Dues" },
    { id: "statutory-applicability-epf", title: "EPF Applicability Rules" },
    { id: "pf-contribution-slabs", title: "Contribution Slabs" },
    { id: "employer-default-scenarios", title: "PF Default Scenarios" },
    { id: "detecting-pf-deductions", title: "Detecting Non-Payment" },
    { id: "legal-consequences-default", title: "Employer Consequences" },
    { id: "criminal-breach-of-trust", title: "Criminal Breach of Trust" },
    { id: "epfigms-online-portal", title: "EPFiGMS Portal Guide" },
    { id: "filing-complaint-epfigms", title: "How to File on EPFiGMS" },
    { id: "section-7a-inquiry", title: "Section 7A Inquiry" },
    { id: "damages-and-interest-levy", title: "Interest & Damages" },
    { id: "recovery-attachment-officers", title: "EPFO Attachment Powers" },
    { id: "limitation-periods-pf", title: "Limitation Periods" },
    { id: "pre-litigation-escalation", title: "Written Escalations" },
    { id: "pf-recovery-legal-notice", title: "Serving Legal Notice" },
    { id: "labor-commissioner-route", title: "Labour Dept Recourse" },
    { id: "bankruptcy-insolvency-pf", title: "Company Insolvency" },
    { id: "digital-evidence-pf", title: "Digital Evidence" },
    { id: "pf-recovery-case-studies", title: "Success Stories" },
    { id: "pf-client-reviews", title: "Client Reviews" },
    { id: "pf-our-assistance-approach", title: "Why Choose Us?" },
    { id: "pf-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Provident Fund Recovery", href: "/recovery/pf-amount" },
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
              India&apos;s Premium Employee Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Is your <span className="text-[#DC2626]">Employer Not Depositing PF</span> Dues?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover your deducted Provident Fund savings. Get expert legal tech representation to file grievances on EPFiGMS, serve legal notices, and trigger EPFO actions against defaulting companies.
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
                
                {/* Section 1: Overview of EPF Dues */}
                <section id="pf-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview of EPF Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Employee Provident Fund (EPF) represents one of the most critical retirement benefits and social security systems for working professionals in India. Governed by the <strong>Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952</strong>, this system is a mandatory savings scheme co-funded by the employee and the employer. Each month, a portion of the employee&apos;s basic salary is deducted, which must be matched by the employer and deposited into the employee&apos;s UAN (Universal Account Number) account. Unfortunately, a common issue faced by employees across India is PF default—where the employer deducts the PF portion from the employee&apos;s monthly paycheck but fails to deposit it with the EPFO.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This non-deposit of PF represents a direct statutory violation and constitutes a serious breach of trust. Defaulting companies often use the deducted funds to manage their own cash flow, leaving employees unaware of the default until they check their EPF passbook or attempt to withdraw funds. Withholding PF savings is illegal and represents a criminal offense under Indian labor and criminal codes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in helping professionals recover their unpaid PF dues. We guide you through the process of auditing passbooks, filing complaints on the EPFiGMS portal, serving formal legal notices, and escalating disputes before the Regional Provident Fund Commissioner. This guide outlines the legal structures, employee rights, and procedures available to recover your PF dues.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Provident Fund is a statutory trust fund. Deducting money from an employee&apos;s wages and failing to deposit it with the government is a serious criminal offense that can lead to personal prosecution of company directors.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: EPF Applicability Rules */}
                <section id="statutory-applicability-epf" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EPF Applicability Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952, applies to every factory or establishment engaged in any industry specified in Schedule I of the Act that employs <strong>twenty (20) or more employees</strong>. Once an establishment is covered under the Act, it remains covered even if the employee count drops below twenty.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees, enrollment in the EPF scheme is mandatory if their basic salary and dearness allowance (DA) is up to **₹15,000 per month**. For employees earning above ₹15,000, coverage is voluntary, but once they opt into the scheme, the employer is legally bound to comply with the statutory contribution rules. The Act covers manual, clerical, managerial, and technical workers in private companies, retail establishments, IT firms, and startups.
                    </p>
                  </div>
                </section>

                {/* Section 3: Contribution Slabs */}
                <section id="pf-contribution-slabs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Contribution Slabs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The EPF contribution structure mandates a 12% deduction from the employee&apos;s basic salary + DA, which is matched by a corresponding 12% contribution from the employer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The employer&apos;s 12% contribution is split as follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>3.67%:</strong> Deposited directly into the Employee Provident Fund (EPF) account.</li>
                      <li><strong>8.33%:</strong> Directed to the Employee Pension Scheme (EPS) account, providing a pension post-retirement.</li>
                      <li><strong>0.50%:</strong> EDLI (Employees&apos; Deposit Linked Insurance) contribution, providing life insurance cover.</li>
                      <li><strong>0.50%:</strong> EPF Administrative charges (paid entirely by the employer).</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Any failure to deposit these exact splits into the designated accounts by the 15th of the following month constitutes a statutory default.
                    </p>
                  </div>
                </section>

                {/* Section 4: PF Default Scenarios */}
                <section id="employer-default-scenarios" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">PF Default Scenarios</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Provident Fund defaults generally fall into three distinct categories:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Deducted but Not Deposited:</strong> The most severe default, where the employer shows PF deductions on your salary slips but fails to deposit the funds with the EPFO.</li>
                      <li><strong>Delayed Deposit:</strong> The employer deposits the contributions but routinely misses the statutory deadline (the 15th of the following month), attracting interest and penal damages.</li>
                      <li><strong>Non-Enrollment:</strong> The employer fails to register eligible employees under the EPF scheme entirely, depriving them of retirement and insurance benefits.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We analyze your UAN passbook and salary slips to identify the exact nature of the default and determine the appropriate recovery steps.
                    </p>
                  </div>
                </section>

                {/* Section 5: Detecting Non-Payment */}
                <section id="detecting-pf-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Detecting Non-Payment</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Homebuyers and employees alike must keep a close watch on their accounts to detect defaults early. To verify if your employer is depositing your PF contributions regularly:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li>Log in to the **EPFO Member Portal** using your Universal Account Number (UAN) and password.</li>
                      <li>Download and inspect your **EPF Passbook**. Check if monthly credits match the deductions shown on your salary slips.</li>
                      <li>Install the **UMANG App** to view passbook balances and receive real-time credit notifications on your mobile.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your salary slips show PF deductions but your passbook remains uncredited, you have clear evidence of a default.
                    </p>
                  </div>
                </section>

                {/* Section 6: Employer Consequences */}
                <section id="legal-consequences-default" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Employer Consequences</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers who default on PF contributions face severe administrative, financial, and criminal consequences. The EPFO is a powerful regulatory body with judicial enforcement capabilities.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the EPF Act, the EPFO can levy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Section 7Q Interest:</strong> Simple interest of 12% per annum on the outstanding contribution amount for the period of delay.</li>
                      <li><strong>Section 14B Damages:</strong> Penal damages ranging from 5% to 25% of the defaulted amount, depending on the delay duration.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These penalties are in addition to the principal contributions due, creating significant financial pressure on defaulting companies.
                    </p>
                  </div>
                </section>

                {/* Section 7: Criminal Breach of Trust */}
                <section id="criminal-breach-of-trust" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Breach of Trust</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Deducting the employee&apos;s share of PF from their salary and failing to deposit it with the EPFO is classified as a serious criminal offense. Under the Explanation to <strong>Section 405 of the Indian Penal Code (IPC)</strong> (now corresponding to relevant sections of the **Bharatiya Nyaya Sanhita, 2023**), any employer who deducts the employee&apos;s contribution and fails to pay it to the fund is deemed to have dishonestly used the money, committing the offense of **Criminal Breach of Trust**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This is a cognizable and non-bailable offense that carries a penalty of up to **three (3) years of imprisonment**, a fine, or both. The EPFO frequently files First Information Reports (FIRs) against defaulting employers under these sections. Copied notices to company directors outlining these criminal consequences are highly effective in forcing them to settle outstanding dues immediately to avoid arrest.
                    </p>
                  </div>
                </section>

                {/* Section 8: EPFiGMS Portal Guide */}
                <section id="epfigms-online-portal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EPFiGMS Portal Guide</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To streamline grievance resolution, the EPFO launched the **EPF i-Grievance Management System (EPFiGMS)**. This portal allows employees to submit formal complaints online directly to the respective Regional EPFO office, eliminating the need to visit offices in person.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The EPFiGMS portal handles a variety of claims, including non-deposit of PF, delayed transfers, settlement issues, and profile errors. Grievances submitted through the portal are monitored by the Head Office, and regional officers are mandated to investigate and resolve them within a set timeframe.
                    </p>
                  </div>
                </section>

                {/* Section 9: How to File on EPFiGMS */}
                <section id="filing-complaint-epfigms" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">How to File on EPFiGMS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a complaint on the EPFiGMS portal is a straightforward process:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li>Visit the official portal at <strong>epfigms.gov.in</strong> and select &apos;Register Grievance.&apos;</li>
                      <li>Select your status as &apos;PF Member&apos; and enter your UAN and security code. Click &apos;Get Details&apos; and &apos;Get OTP.&apos;</li>
                      <li>Enter the OTP sent to your registered mobile. Under &apos;Grievance Details,&apos; select the specific PF account number of the defaulting employer.</li>
                      <li>Choose the grievance category (e.g. &apos;Non-Deposit of PF contributions by the establishment&apos;) and write a detailed description of the default.</li>
                      <li>Upload supporting documents, such as your salary slips showing PF deductions and your passbook PDF. Click &apos;Submit.&apos;</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon submission, you will receive a unique registration number to track your grievance status.
                    </p>
                  </div>
                </section>

                {/* Section 10: Section 7A Inquiry */}
                <section id="section-7a-inquiry" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Section 7A Inquiry</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a formal complaint regarding PF default is received, or when the EPFO audits identify defaults, the Regional Provident Fund Commissioner can initiate a judicial inquiry under <strong>Section 7A of the EPF Act</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Section 7A inquiry is a formal proceeding where the Commissioner acts as a civil court:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The Commissioner has the power to summon the employer&apos;s management and direct them to produce payroll records, audited books, and bank accounts.</li>
                      <li>If the employer fails to appear, the Commissioner can conduct the inquiry ex-parte.</li>
                      <li>Upon review, the Commissioner passes a binding order calculating the exact outstanding contribution amount due to the employees.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 11: Interest & Damages */}
                <section id="damages-and-interest-levy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Interest &amp; Damages</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once a default is established through a Section 7A inquiry, the employer is hit with heavy financial levies designed to penalize non-compliance and compensate the fund for loss of interest.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These levies are governed by:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Section 7Q:</strong> A mandatory simple interest of 12% per annum, calculated from the date the contributions became due until the date of actual payment.</li>
                      <li><strong>Section 14B:</strong> Penal damages calculated on the defaulted amount. The damages range from 5% to 25% depending on the delay duration.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers cannot seek waivers on the employee&apos;s share of interest or damages, ensuring that your core retirement savings are protected.
                    </p>
                  </div>
                </section>

                {/* Section 12: EPFO Attachment Powers */}
                <section id="recovery-attachment-officers" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EPFO Attachment Powers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to deposit the dues calculated under the Section 7A order, the EPFO&apos;s Recovery Officers can initiate recovery under <strong>Section 8 of the Act</strong>. The Recovery Officers hold extraordinary powers to enforce payments:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Bank Account Attachment (Section 8F):</strong> They can issue attachment notices directly to the employer&apos;s banks, freezing their corporate accounts and recovering the dues directly.</li>
                      <li><strong>Property Attachment:</strong> They can attach and sell the developer&apos;s or employer&apos;s moveable and immoveable properties to recover outstanding dues.</li>
                      <li><strong>Arrest Warrant:</strong> They have the power to arrest the employer or designated directors and commit them to civil prison for non-compliance.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 13: Limitation Periods */}
                <section id="limitation-periods-pf" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A vital protection for employees is that the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952, does **not** prescribe any limitation period for recovering outstanding PF dues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The EPFO can initiate inquiry and recovery proceedings against a defaulting establishment at any time, even after several years of default. However, we strongly advise employees to raise grievances as soon as they detect a default to prevent the company from dissolving, filing for bankruptcy, or absconding, which complicates recovery.
                    </p>
                  </div>
                </section>

                {/* Section 14: Written Escalations */}
                <section id="pre-litigation-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Written Escalations</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal legal action, it is strategically wise to execute a structured, written escalation process. This initial stage serves two purposes: first, it provides the developer with a clear opportunity to resolve the issue amicably; second, it creates a crucial paper trail proving that the buyer acted in good faith and exhausted administrative remedies before approaching the courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We recommend a 30-day pre-litigation escalation cycle:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Formal Cancellation Email (Day 1-10):</strong> Send a formal email to the builder&apos;s customer care and sales head. State clearly your decision to cancel the booking, cite the specific reasons (e.g., project delay, failure to execute the BBA), and request a full refund of the booking amount within 15 days. Attach copies of the booking form and payment receipts.</li>
                      <li><strong>Written Reminder & Call Audit (Day 11-20):</strong> If the developer fails to respond or offers vague verbal assurances, send a written reminder. Document any phone calls or in-person discussions by sending a follow-up email summarizing the conversation (e.g., &quot;As discussed on the phone today, you promised to process my refund by next week...&quot;).</li>
                      <li><strong>Final Written Demand (Day 21-30):</strong> Send a final written demand via registered email and speed post to the developer&apos;s registered corporate office. State that if the refund is not processed within 7 days, you will be forced to initiate legal proceedings, holding the developer liable for interest and legal expenses.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 15: Serving Legal Notice */}
                <section id="pf-recovery-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When informal follow-ups and escalation emails fail to yield results, serving a formal <strong>Legal Notice</strong> is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 16: Labour Dept Recourse */}
                <section id="labor-commissioner-route" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Dept Recourse</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While the EPFO is the primary regulatory authority for PF recovery, employees can also approach the state **Labour Department** as a parallel recourse. Under state-specific Shops and Commercial Establishments Acts, withholding statutory benefits like PF represents a major compliance violation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employees can file a formal complaint with the local Assistant Labour Commissioner. The Commissioner has the power to summon the employer, inspect their payroll books, and direct them to clear all outstanding FNF dues (including PF and salary arrears) to avoid license suspension or local prosecution.
                    </p>
                  </div>
                </section>

                {/* Section 17: Company Insolvency */}
                <section id="bankruptcy-insolvency-pf" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Company Insolvency</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a company enters insolvency or liquidation under the Insolvency and Bankruptcy Code, 2016 (IBC), unsecured creditors and vendors face severe write-offs. However, the law provides strong protection for employee retirement savings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under **Section 36(4) of the IBC**, the provident fund, pension fund, and gratuity fund of a company are explicitly excluded from the liquidation estate of the corporate debtor. This means these trust funds cannot be used to pay off bank loans or other secured debts, and must be paid to the employees in full, providing absolute security during corporate bankruptcy.
                    </p>
                  </div>
                </section>

                {/* Section 18: Digital Evidence */}
                <section id="digital-evidence-pf" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Digital Evidence</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In modern employment disputes, the paper trail is almost entirely digital. Corporate communications occur over email, Slack channels, Microsoft Teams, and WhatsApp. It is a common concern among employees whether these digital conversations hold weight in a court of law. The answer is a resounding yes, provided they are formatted and backed by the correct legal certificates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under **Section 63 of the Bharatiya Sakshya Adhiniyam, 2023** (formerly Section 65B of the Indian Evidence Act, 1872), electronic records are fully admissible as secondary evidence in legal proceedings. This includes email acknowledgments from HR promising a payment date, WhatsApp chats with your manager discussing pending FNF amounts, and Slack screenshots proving your active participation in handovers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To make this evidence admissible, you must provide a signed **Section 63 Certificate** (formerly 65B). This certificate is a written declaration confirming that the device used to print or retrieve the digital record (your laptop or phone) was in active, working condition, and the data has not been tampered with. We guide our clients on how to preserve their chat histories, archive emails, and prepare these certificates to build an airtight evidentiary file.
                    </p>
                  </div>
                </section>

                {/* Section 19: Success Stories */}
                <section id="pf-recovery-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, we have successfully resolved hundreds of complex PF recovery and employment dues disputes across India. Our data-driven legal notice strategy and structured escalation flow have proven effective against startups, mid-sized firms, and large multinational corporations alike. Below are representative examples of recoveries handled by our legal panel:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Startup PF Default</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered 8 Months of Unpaid PF Deposits</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A product manager in Noida discovered that their startup deducted PF from their salary but failed to deposit it in their UAN. We served a legal notice copied directly to all board directors citing Criminal Breach of Trust under BNS. Recognizing the personal criminal liability and the threat of an EPFO audit, the founders deposited all PF arrears within 15 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Startup Funding Crunch</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">EPFiGMS Complaint Triggers Full Settlement</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          An employee in Bangalore was denied their PF deposits after the company faced a funding crunch. We assisted them in filing a detailed complaint on the EPFiGMS portal with salary slips. The EPFO Commissioner initiated a Section 7A inquiry, leading the company to clear all backlog dues with interest to avoid bank account attachment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 20: Client Reviews */}
                <section id="pf-client-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My previous company deducted PF from my salary for 8 months but never deposited it in my UAN. LegalRecovery drafted a formal notice citing BNS Criminal Breach of Trust. Within 15 days of receiving the notice, the directors cleared all the backlog in my EPFO portal. Saved my retirement funds!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vikram Sengupta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;After resigning, my startup refused to clear my 1 year of pending PF deposits. LegalRecovery helped me file a detailed grievance on the EPFiGMS portal and served a legal notice to the founders. The EPFO initiated an inquiry, and the company deposited my dues with interest. Exceptional legal support!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kiran Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;A software firm withheld my PF and relieving documents because I raised a voice against delayed salaries. LegalRecovery&apos;s notice made them realize they face up to 3 years in jail for PF default. HR released the relieving letter and deposited all PF arrears within a week.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Madhuri Joshi</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Highly professional legal tech platform. They audited my salary slips, calculated the exact PF default, and prepared my petition. The EPFO Commissioner issued bank attachment notices, and my employer finally cleared the dues. Highly recommended!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Abhishek Goel</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I had a complicated PF dispute with an employer who claimed my CTC structure didn&apos;t cover PF. LegalRecovery analyzed the contract, cited the EPF Act applicability limits, and sent a strong notice. The company processed the backlog without any litigation.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Srinivas Murthy</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The best service for employee rights. They handled my unpaid PF and gratuity dues simultaneously. Their legal notice reached the corporate directors and board members, prompting them to clear my entire FNF dues within 12 days. Very grateful!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Ritu Malhotra</h4>
                    </div>
                  </div>
                </section>

                {/* Section 21: Why Choose Us? */}
                <section id="pf-our-assistance-approach" className="scroll-mt-32">
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
                <section id="pf-faqs" className="scroll-mt-32">
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
                <h3 className="text-sm font-black mb-3">Recover PF Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your unpaid PF case with labor law experts. We serve verified notices with full compliance support.
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
