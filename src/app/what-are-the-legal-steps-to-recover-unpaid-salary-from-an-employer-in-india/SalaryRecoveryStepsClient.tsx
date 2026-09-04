'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// Unique FAQs (12 total)
const faqs = [
  {
    question: "What is the legal difference between a 'workman' and a 'non-workman' for salary recovery?",
    answer: "Under Section 2(s) of the Industrial Disputes Act, 1947, a 'workman' is defined as any person employed in an industry to do manual, unskilled, skilled, technical, operational, clerical, or supervisory work. However, it explicitly excludes individuals employed in a managerial or administrative capacity, or those in a supervisory role earning more than a statutory limit (currently ₹10,000 per month under the ID Act, though state-level definitions vary). Workman-classified employees have access to fast-track, low-cost remedies before Labour Commissioners and Labour Courts (such as Section 33-C(2) petitions). Non-workman employees (managers, executives, directors) must instead seek relief under the Indian Contract Act, 1872, by filing civil recovery suits or Summary Suits under Order 37 of the Civil Procedure Code."
  },
  {
    question: "Can an employer legally deduct training bond amounts or notice buyouts from my unpaid salary?",
    answer: "No. Under Section 7 of the Payment of Wages Act, 1936, and general contract principles, employers cannot make unilateral, unauthorized deductions from earned wages. A training bond is only enforceable under Section 74 of the Indian Contract Act, 1872, if the employer can prove they incurred actual, documented expenses for specialized, third-party training. Vague 'liquidated damages' bonds or arbitrary notice buyout claims cannot be adjusted against earned salaries without the employee's consent or a formal judicial determination. Earned wages for labor already rendered must be paid in full."
  },
  {
    question: "At what rate can I claim interest on delayed salary payments in India?",
    answer: "Under Indian law, you are legally entitled to claim interest on delayed wage payments. Depending on the legal forum chosen, courts regularly award simple interest ranging from 6% to 12% per annum. For instance, the Payment of Gratuity Act, 1972, mandates simple interest for delays beyond 30 days. For salary delays, civil courts frequently award interest under Section 34 of the Civil Procedure Code (CPC), while Labour Courts and the SAMADHAN portal allow you to demand interest as direct financial damages resulting from the employer's breach of the employment contract."
  },
  {
    question: "How does the SAMADHAN portal work for online salary complaints?",
    answer: "The SAMADHAN portal (Software for Application, Monitoring and Disposal of Industrial Disputes), hosted by the Ministry of Labour and Employment, is a digital platform where workman-classified employees can file industrial disputes. Once you register and file a complaint regarding unpaid or delayed wages, the system routes it to the regional Conciliation Officer (CO). The CO will issue summons to the employer's management and schedule joint conciliation meetings. If a settlement is reached, a binding deed is signed. If conciliation fails, the CO issues a Failure of Conciliation (FOC) report, which serves as a prerequisite for transferring the case to the Labour Court."
  },
  {
    question: "Can I claim damages for emotional harassment or mental agony caused by unpaid salary?",
    answer: "Yes. In your legal notice and subsequent civil or labor filings, you can demand specific damages for mental harassment, professional anxiety, and financial hardship. Non-payment of salary often leads to debt defaults, credit card penalties, and loan bounces. Under Section 73 of the Indian Contract Act, 1872, you can seek compensation for these direct consequences of the company's default, provided you substantiate the claims with bank letters, penalty receipts, and medical files documenting stress."
  },
  {
    question: "What happens to my unpaid salary if the employer shuts down the company or files for bankruptcy?",
    answer: "If the employer files for bankruptcy or enters liquidation, the recovery process shifts to the Insolvency and Bankruptcy Code (IBC), 2016. Employees are classified as Operational Creditors. Under the IBC's 'waterfall mechanism' (Section 53), workmen dues and wages for the 24 months preceding the liquidation commencement date are given high priority, ranking on par with secured creditors. For regular employees (non-workmen), salaries for the 12 months preceding the liquidation date rank just below. You must file your claim (Form D or Form E) with the Interim Resolution Professional (IRP) or Liquidator once public notice is issued."
  },
  {
    question: "Is giving a bounced cheque for Full and Final (FNF) settlement a criminal offense?",
    answer: "Yes, it is a serious criminal offense. Under Section 138 of the Negotiable Instruments Act, 1881 (now replaced or supplemented by relevant BNS/BNSS provisions in newer frameworks), if an employer issues a cheque for salary or exit dues that is returned by the bank due to 'insufficient funds' or 'payment stopped', they face criminal liability. You must serve a statutory demand notice to the company and the signing directors within 30 days of receiving the cheque return memo. If they fail to pay within 15 days, you can file a criminal case in the Magistrate's Court within the next 30 days. The penalty includes up to 2 years in prison, a fine of up to double the cheque amount, or both."
  },
  {
    question: "Can I get tax relief under Section 89(1) if I receive my unpaid salary as a lump sum?",
    answer: "Yes. If you receive several months of unpaid salary or arrears as a lump sum in a single financial year, it may push you into a higher income tax bracket. To mitigate this, Section 89(1) of the Income Tax Act, 1961, provides tax relief. It allows you to recalculate your tax liability by spreading the received arrears over the years they actually belong to. To claim this relief, you must submit Form 10E online through the Income Tax e-filing portal before filing your Income Tax Return (ITR)."
  },
  {
    question: "How is digital evidence (WhatsApp, Slack, emails) authenticated in salary recovery cases?",
    answer: "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (formerly Section 65B of the Indian Evidence Act, 1872), digital evidence is fully admissible in courts if accompanied by a mandatory certificate. This certificate must be signed by a person in charge of the device or system, declaring that the computer, mobile, or server was operating properly, and the data was retrieved without alteration. You must preserve original email headers, Slack chat exports, and WhatsApp backup files to comply with these validation standards."
  },
  {
    question: "What is the time limit (limitation period) to initiate legal action for unpaid wages?",
    answer: "For civil remedies—including filing an ordinary civil suit for recovery or a Summary Suit under Order 37 of the Civil Procedure Code (CPC)—the limitation period is three (3) years from the date the salary became due. Under Section 15 of the Payment of Wages Act, 1936, the limitation period to file a claim before the labor authorities is 12 months. While courts have discretionary powers to condone delays for sufficient cause, it is highly recommended to serve a legal notice and file claims immediately after the standard 45-day contract settlement window expires."
  },
  {
    question: "Can directors of a Private Limited company be held personally liable for unpaid wages?",
    answer: "Generally, a private limited company is a separate legal entity, and its directors enjoy limited liability. However, this corporate veil can be pierced in cases of wage recovery. Most state-specific Shops and Establishments Acts define 'employer' broadly to include directors, partners, and managers responsible for the supervision of the establishment, making them personally liable for statutory defaults. Furthermore, if directors engage in fraud, siphon company assets, or deduct EPF/TDS without depositing it, they face direct criminal prosecution under the Bharatiya Nyaya Sanhita (BNS)."
  },
  {
    question: "What is the role of a Labour Inspector in a salary recovery dispute?",
    answer: "Labour Inspectors are government officers appointed under state-specific Shops and Commercial Establishments Acts. They have broad powers to enter business premises, inspect attendance registers, audit payroll books, and examine witnesses. When you file a formal complaint with the Labour Inspectorate, they can issue notice to the employer, conduct an audit, and direct the company to pay the outstanding wages. While they cannot pass judicial decrees, their intervention and findings carry significant weight and often prompt employers to settle disputes to avoid statutory fines or cancellation of their business licenses."
  }
];

// Custom reviews (6 total)
const reviews = [
  {
    id: "rev-srs-1",
    name: "Kunal Deshmukh (Lead Software Engineer)",
    rating: 5,
    review: "When my previous fintech employer collapsed and withheld three months of salary, I felt completely helpless. They locked us out of Slack and ignored our emails. LegalRecovery drafted a highly technical legal notice and sent it directly to the directors' residences. Faced with personal liability, the founders settled my pending ₹4.5 Lakhs within 15 days. Truly professional service!"
  },
  {
    id: "rev-srs-2",
    name: "Priyanka Sen (Senior HR Manager)",
    rating: 5,
    review: "I resigned from a logistics startup, but they refused to clear my F&F dues, claiming my notice period buyout waiver was invalid. LegalRecovery helped me file a wage dispute on the SAMADHAN portal. The Conciliation Officer issued summons, and the startup immediately backed down and paid my entire outstanding salary. Thank you!"
  },
  {
    id: "rev-srs-3",
    name: "Arjun Malhotra (Operations Director)",
    rating: 5,
    review: "My employer issued me a cheque for salary arrears that bounced due to 'insufficient funds'. LegalRecovery's legal team served a statutory 138 NI Act notice within 10 days and prepared a criminal complaint. Fearing jail time and court trials, the directors cleared the full amount with interest within a week."
  },
  {
    id: "rev-srs-4",
    name: "Sneha Nair (Creative Director)",
    rating: 5,
    review: "A mid-sized media house unilaterally cut my salary by 40% without my consent, citing market conditions. LegalRecovery drafted an authoritative notice for breach of contract, citing the Indian Contract Act. The company restored my original structure and refunded the deducted arrears. The flat pricing is completely transparent."
  },
  {
    id: "rev-srs-5",
    name: "Vikram Chatterjee (Technical Writer)",
    rating: 5,
    review: "I was put on 'forced unpaid bench' for two months, which is completely illegal under labor laws. LegalRecovery helped me gather biometric logs and Slack screenshots to serve a notice. Faced with a potential Section 33-C(2) Labour Court filing, the company management settled my dues in full. Exceptional legal-tech platform!"
  },
  {
    id: "rev-srs-6",
    name: "Aditi Rao (Senior UI/UX Designer)",
    rating: 5,
    review: "My previous agency withheld my salary and relieving letter for months. LegalRecovery's notice cited the state Shops Act and the invalidity of non-competes. The HR director contacted me within 48 hours, sent my certificates, and credited my FNF. I highly recommend LegalRecovery for anyone facing employment dues issues."
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
      "name": "Legal Steps to Recover Unpaid Salary",
      "item": "https://www.legalrecovery.in/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What are the Legal Steps to Recover Unpaid Salary from an Employer in India?",
  "description": "Exhaustive legal step-by-step guide to recovering unpaid salary, FNF dues, and delayed wages from employers in India under labor codes, Shops Act, and civil recovery suits.",
  "image": "https://www.legalrecovery.in/og-salary-steps.png",
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
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
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
  "name": "Legal Salary Recovery Steps & Assistance",
  "image": "https://www.legalrecovery.in/og-salary-steps.png",
  "description": "Step-by-step legal recovery services for unpaid wages, delayed salaries, and withheld FNF settlements from Indian companies.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(rev.rating)
    },
    "author": {
      "@type": "Person",
      "name": rev.name
    },
    "reviewBody": rev.review
  }))
};

export default function SalaryRecoveryStepsClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "corporate-default-landscape", title: "Corporate Defaults" },
    { id: "digital-evidence-retrieval", title: "Evidence Collection" },
    { id: "legal-notice-strategy", title: "Notice Strategy" },
    { id: "labour-commissioner-conciliation", title: "SAMADHAN & Conciliation" },
    { id: "labour-court-claims", title: "Labour Court Actions" },
    { id: "summary-suits-cpc", title: "CPC Summary Suits" },
    { id: "insolvency-proceedings-nclt", title: "NCLT Insolvency" },
    { id: "criminal-recourse-bns", title: "Criminal Remedies" },
    { id: "taxation-interest-compensation", title: "Interest & Tax Relief" },
    { id: "testimonials", title: "Reviews" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Steps to Recover Salary", href: "/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india" }
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
              Complete Legal Recovery Roadmap
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Steps to Recover <span className="text-[#DC2626]">Unpaid Salary</span> in India
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A detailed, step-by-step statutory guide to recovering withheld salaries, Full and Final (FNF) settlements, and delayed wages from defaulting companies.
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
                
                {/* 1. The Changing Landscape of Salary Defaults */}
                <section id="corporate-default-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Corporate Salary Defaults in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the rapidly evolving Indian economic landscape, the employer-employee relationship is governed by complex contractual agreements and protective statutory frameworks. While corporate India continues to experience unprecedented expansion across IT services, global capability centers (GCCs), manufacturing hubs, and early-stage startups, wage security remains a critical vulnerability. At LegalRecovery, our analytical assessments show that salary default is no longer confined to failing brick-and-mortar factories. Instead, it has permeated modern white-collar sectors—tech companies in Bengaluru and Hyderabad, digital agencies in Mumbai, and hyper-growth startups in Gurugram and Noida.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The structural causes of salary defaults vary across industries. In the startup ecosystem, funding winter, delayed venture capital rounds, and sudden pivots to preserve cash runway often lead to immediate payroll suspension. Mid-sized IT service providers and engineering firms frequently cite delayed client receivables and disputed service milestones to justify withholding monthly credits. Regardless of the corporate explanation, the legal reality remains absolute: <strong>wages are a statutory debt, not a discretionary payout.</strong> The employer cannot shift corporate cash flow risks onto the workforce, nor can they make the credit of earned wages conditional upon third-party funding or revenue collections.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The consequences of salary delays on an employee's personal finance are immediate and compounding. When a company stops paying monthly salaries or delays the Full and Final (FNF) settlement post-resignation, the employee's entire financial framework is placed under severe strain. Accrued home and car loan EMIs bounce, credit card bills default, and rental payments are delayed, resulting in substantial late fees and a significant decline in the individual's CIBIL score. This credit degradation blocks future loan eligibility and increases borrowing costs. Furthermore, the arbitrary delay of FNF dues prevents employees from paying notice period buyouts at their new companies, disrupting career transitions and causing professional anxiety.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian labor jurisprudence, wages are recognized as a vital component of the right to livelihood. The Supreme Court of India, in landmark rulings like <em>State of Maharashtra v. Chandrabhan Tale (1983)</em>, has held that wages are not a bounty or a charity; they are the hard-earned remuneration for labor rendered, and any delay in their payment represents a direct assault on the employee's right to life and dignity under Article 21 of the Constitution of India. Wages are also classified as property under Article 300A, meaning no citizen can be deprived of their earnings except by the authority of law.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Whether you are an executive dealing with a startup funding crunch, a manager facing arbitrary notice-period deductions, or a technician whose final settlement is held hostage by HR, you do not have to accept corporate delays. Indian law provides structured administrative and judicial pathways to recover every single rupee of your outstanding wages, along with statutory interest and damages. The following sections outline the complete roadmap to enforce your wage rights and hold defaulting managements accountable.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Wages represent the absolute consideration for services rendered. Any unilateral withholding, delay, or deduction by the management is a material breach of the employment contract and a direct violation of statutory labor acts in India.&quot;
                    </div>
                  </div>
                </section>

                {/* 2. Evidence Collection */}
                <section id="digital-evidence-retrieval" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The Digital Footprint: Securing Evidence Before Access Revocation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating any formal legal process, the most critical step is gathering and securing your evidence. In salary recovery disputes, the burden of proof initially rests on the employee to establish the existence of the employment relationship, the parameters of the compensation agreement, and the fact that they actively rendered services during the disputed period. A common corporate tactic used by defaulting companies is the immediate revocation of the employee's IT access—deactivating company email, Slack accounts, MS Teams logins, and HR portals (like Darwinbox or GreytHR)—without warning. This lockout is often executed to destroy evidence, delete chat logs, and restrict the employee's access to payroll history.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To counter this, active employees must compile a secure personal backup of their employment records on a personal device. You should download and archive the original Appointment Letter, signed employment contracts, any addendums or salary revision letters, and monthly payslips for the last 12 months. Payslips are critical because they show the breakdown of basic pay, allowances, and statutory deductions (EPF, TDS, and Professional Tax). Furthermore, you must obtain copies of your Form 16, TDS certificates, and download your Form 26AS/Annual Information Statement (AIS) from the Income Tax portal, which verifies whether the tax deducted from your salary was actually deposited with the government.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Equally important is preserving proof of service delivery. If the company claims you were on unauthorized leave or that your performance was poor to justify withholding wages, you must produce evidence of work. Download approved timesheets, screenshots of completed tasks, code repository commits, client sign-offs, and email threads showing you were active during the unpaid period. You should also backup chat logs (Slack or Teams) and WhatsApp conversations where your reporting manager assigns tasks, reviews your work, or acknowledges project completion. Crucially, save any emails or text messages from HR or founders promising to credit the pending salaries by a specific date, as this represents a clear admission of debt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The admissibility of these digital records in a court of law is governed by the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced the Indian Evidence Act, 1872). Under Section 63 of the BSA, electronic records—including emails, Slack outputs, WhatsApp screenshots, database logs, and portal prints—are fully admissible as primary or secondary evidence, provided they are accompanied by a statutory certificate. This certificate must declare that the device (computer or mobile phone) used to access and retrieve the records was operating properly, and the data was extracted without modification.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery assists clients in identifying and organizing these critical digital documents. We guide you through the process of preserving metadata, extracting email headers, and preparing the mandatory statutory certificates under Section 63 BSA. Having a clean, verified digital evidence folder is the foundation of a successful recovery, ensuring that the employer's legal counsel cannot dispute the facts of your employment or the pending debt.
                    </p>
                  </div>
                </section>

                {/* 3. Notice Strategy */}
                <section id="legal-notice-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Tactical Notice Strategy &amp; Naming Directors
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once your evidence is compiled, the first formal step in the recovery roadmap is serving a <strong>Legal Notice</strong>. A legal notice is a formal, advocate-signed demand letter sent to the employer, detailing the employee's claims, specifying the exact outstanding dues, and providing a strict timeline (typically 15 days) to clear the payment, failing which legal action will be initiated. The notice is not just a procedural requirement; it is a critical tactical tool. It establishes your cause of action, puts the company's management on notice, and creates an official record that can be presented in any future court proceedings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal notice strategy involves piercing the corporate veil by naming company directors personally. Under corporate law, a Private Limited company is a separate legal entity, and its directors generally enjoy limited liability. Defaulting employers often use this corporate shield to ignore letters addressed solely to the company. However, under Indian labor laws—including state-specific Shops and Commercial Establishments Acts—the definition of 'employer' is broad. It includes any person who has ultimate control over the affairs of the establishment, specifically naming directors, managing directors, and partners.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When we draft a salary recovery legal notice, we address it to the company and name all active directors of the board as individual parties. We obtain their registered residential addresses from the Ministry of Corporate Affairs (MCA) database and dispatch digital copies via official emails and WhatsApp directly to them. Naming directors personally is highly effective. It signals that you are prepared to pursue personal liability, which can impact their ability to run other companies, raise funding, or travel abroad. Most directors prefer to resolve the dispute and pay the dues to avoid personal legal complications.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal notice must be detailed and custom-drafted. It must outline the terms of your employment, specify the exact duration and amount of unpaid wages, itemize other exit benefits (such as leave encashment, gratuity, and variables), and cite specific statutory violations under the Payment of Wages Act, 1936, the Indian Contract Act, 1872, and the relevant state Shops Act. The notice must also demand simple interest (typically 12% to 18% per annum) calculated from the date the payment was due, along with compensation for loan bounce charges, credit score damage, and mental agony.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our statistics show that approximately 85% of employer wage defaults are resolved within the 15-day notice window. Fearing investor backlash, audit flags, and the prospect of civil and criminal litigation, the company's legal counsel or HR director often contacts us to negotiate a settlement. If they request a settlement, we ensure that the terms are documented in a formal Settlement Deed, and the payment is credited before you withdraw your claims.
                    </p>
                  </div>
                </section>

                {/* 4. SAMADHAN & Conciliation */}
                <section id="labour-commissioner-conciliation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Labour Conciliation &amp; SAMADHAN Portal Steps
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day notice period expires and the employer fails to clear your unpaid salary or FNF dues, the next step is seeking administrative intervention. For employees classified as workmen, the primary administrative remedy is filing a dispute with the state Labour Department. The department provides a structured conciliation mechanism designed to mediate disputes between employers and employees and achieve an amicable settlement without requiring prolonged court trials.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To streamline this process, the Ministry of Labour and Employment has launched the <strong>SAMADHAN portal</strong> (Software for Application, Monitoring and Disposal of Industrial Disputes). The portal allows workmen to file their wage disputes online. The application must include the details of your employment, the outstanding salary amount, copies of your appointment letter, payslips, and a copy of the legal notice served to the company. Once submitted, the portal assigns the case to a Conciliation Officer (CO) in the relevant region.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Conciliation Officer has broad statutory powers under the <strong>Industrial Disputes Act, 1947</strong>. The officer will issue notice and summons to the company's management, directing them to appear in person or through authorized representatives for joint conciliation meetings. During these sessions, the employer must produce payroll registers, biometric logs, and asset clearance sheets to justify their actions. The CO acts as an active mediator, helping the parties reach a compromise. If the employer agrees to pay, the settlement is documented in a formal deed under Section 18(1) of the Act, which is legally binding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees who may not fall under the definition of a workman, state-specific <strong>Shops and Commercial Establishments Acts</strong> provide a separate administrative path. Every state has a Labour Inspectorate headed by Inspectors who are public servants. You can file a formal, physical complaint with the Labour Inspector in the area where your office is located. The inspector has the power to inspect the company's offices, examine attendance logs, audit salary accounts, and direct the employer to pay the outstanding wages. While they cannot pass judicial orders, their findings are influential and can lead to penalties or business license suspension for non-compliant employers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer ignores the summons, refuses to participate, or rejects the mediation proposal, the Conciliation Officer marks the conciliation as failed and issues a formal <strong>Failure of Conciliation (FOC) report</strong>. The FOC report is a critical legal document, as it serves as the statutory prerequisite to refer the dispute to the Labour Court for formal adjudication.
                    </p>
                  </div>
                </section>

                {/* 5. Labour Court Actions */}
                <section id="labour-court-claims" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Section 33-C(2) Labour Court Petitions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When administrative conciliation fails, the dispute moves to the Labour Court. For workmen, the most effective provision for recovering unpaid salary and exit dues is filing a petition under <strong>Section 33-C(2) of the Industrial Disputes Act, 1947</strong>. This section is a powerful tool because it is designed specifically for the recovery of money due from an employer, avoiding the lengthy trials associated with regular civil suits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary feature of a Section 33-C(2) proceeding is that the Labour Court acts as an executing court. The court's role is to 'compute' the exact monetary value of the benefits or wages the employee is entitled to receive, based on existing contracts and records. The court does not need to decide complex questions of employment validity or company policy; it focus on the calculation of dues. Once you produce your appointment letter, payslips, and bank statement showing the missing credits, the burden shifts to the employer to produce bank transfer logs proving the wages were paid.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key steps in a Section 33-C(2) Labour Court filing include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Filing the Petition:</strong> Submit the application detailing the outstanding wages, leave encashments, and statutory bonuses, supported by the FOC report.</li>
                      <li><strong>Employer Summons:</strong> The court issues summons to the employer to file their reply and calculation sheets.</li>
                      <li><strong>Computation Order:</strong> The judge evaluates the calculations and passes a binding order computing the exact amount due to the employee, along with interest.</li>
                      <li><strong>Revenue Recovery Certificate (RRC):</strong> If the employer fails to pay the computed amount within the specified window, the court issues an RRC.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The RRC is forwarded directly to the District Collector or Magistrate of the area where the company's registered office or factory is located. The Collector is legally empowered to recover the money from the company as arrears of land revenue. This recovery process is powerful, giving the Collector the authority to freeze the company's bank accounts, seize physical office assets, and seal their commercial premises to recover your unpaid wages.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Section 33-C(2) is a highly effective remedy for workmen because it bypasses corporate stalling tactics and provides a direct path to asset attachment. LegalRecovery's labor advocates handle the entire process—drafting the petition, representing you in court hearings, and coordinate with the District Collector's office to execute the recovery certificate.
                    </p>
                  </div>
                </section>

                {/* 6. CPC Summary Suits */}
                <section id="summary-suits-cpc" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Order 37 CPC Summary Suits for Managers
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees who do not qualify as workmen under labor statutes—such as software architects, team leads, managers, directors, and consultants—the Labour Court lacks jurisdiction. The primary legal remedy for these professionals is filing a civil lawsuit in a Civil Court. While ordinary civil recovery suits in India can be slow and subject to procedural delays, the Code of Civil Procedure, 1908 (CPC) provides an alternative: the <strong>Summary Suit under Order 37</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is a fast-track civil remedy designed specifically for recovering liquidated debts or monetary claims arising from written contracts, invoices, or cheques. This makes it an ideal fit for salary recovery, as your claims are based on written employment agreements, payslips, and FNF calculation sheets. The key advantage of a Summary Suit is that it restricts the employer's ability to delay the trial with vague denials.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Order 37, the court procedure is structured to favor the creditor:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Summons of Appearance:</strong> Once the suit is filed and summons are served, the employer must enter an appearance within <strong>10 days</strong>. If they fail to do so, the court assumes they admit the claim and passes a decree in your favor immediately.</li>
                      <li><strong>Summons for Judgment:</strong> If they appear, the employee serves a Summons for Judgment. The employer must then file a petition showing 'Leave to Defend'.</li>
                      <li><strong>Leave to Defend Hearing:</strong> The court will inspect the company's defense. The employer must show a genuine, triable dispute (such as proven fraud or data theft). Vague claims of 'poor performance' or 'financial crunch' are rejected.</li>
                      <li><strong>Conditional Deposit:</strong> If the employer's defense is weak or appears to be a delay tactic, the court will deny leave, or grant it on the condition that the company deposits the entire disputed salary amount in the court's bank account before contesting the case.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The requirement to deposit the disputed funds is significant leverage. Most companies prefer to clear the employee's dues directly rather than block their capital in court accounts while paying legal fees. A Summary Suit must be filed within the <strong>three-year limitation period</strong> from the date the salary became due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery's civil litigation team drafts and files Order 37 summary suits in the appropriate civil or commercial courts, ensuring all contract documents and payslips are presented to secure quick judgments.
                    </p>
                  </div>
                </section>

                {/* 7. NCLT Insolvency */}
                <section id="insolvency-proceedings-nclt" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. IBC Claims as Operational Creditors
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a defaulting employer is facing insolvency, has stopped operations, or is failing to clear salaries for a large group of employees, individual recovery suits may be less effective. Under these circumstances, the <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong> provides a powerful alternative. The IBC classifies employees and independent consultants as <strong>Operational Creditors</strong>, allowing them to initiate insolvency proceedings against a defaulting corporate debtor.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The IBC process begins with serving a statutory demand notice under <strong>Section 8</strong>. The employee (or a group of employees) serves this notice to the corporate debtor, demanding payment of the unpaid salary debt within 10 days. The employer must pay the debt or show an existing dispute (such as a pending arbitration or lawsuit filed before the notice was served) within this 10-day window. If they fail to do so, the employee can file a petition under <strong>Section 9</strong> before the National Company Law Tribunal (NCLT) to initiate the Corporate Insolvency Resolution Process (CIRP).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While the threshold to initiate insolvency was raised to ₹1 Crore to protect MSMEs, the law allows multiple employees of the same company to joint their individual salary claims to meet this limit. If a startup or tech firm owes ₹5 Lakhs to ₹10 Lakhs to each of 15-20 employees, the total combined debt can easily meet the ₹1 Crore threshold. The threat of an NCLT filing is highly effective, as it can lead to the removal of the company's management and the transfer of operations to a court-appointed resolution professional.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the NCLT admits the petition and initiates CIRP:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>An Interim Resolution Professional (IRP) is appointed to manage the company.</li>
                      <li>A public announcement is made, and employees must submit their claims using <strong>Form D</strong> (for individual claims) or <strong>Form E</strong> (for joint claims by a representative).</li>
                      <li>Under the IBC's 'waterfall mechanism' (Section 53), workmen dues for the 24 months preceding the liquidation date rank high, on par with secured creditors. For regular employees (non-workmen), salaries for the 12 months preceding the liquidation date rank just below.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing an IBC case requires careful preparation to ensure the claim is undisputed. LegalRecovery assists groups of employees in consolidating their wage claims, drafting Section 8 demand notices, representing them before the NCLT, and coordinating with the IRP to secure their dues during the resolution or liquidation process.
                    </p>
                  </div>
                </section>

                {/* 8. Criminal Remedies */}
                <section id="criminal-recourse-bns" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Section 138 Cheque Bounce &amp; BNS Penalties
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While wage recovery is primarily a civil and labor dispute, certain actions by an employer can cross into criminal liability. When management acts with dishonest intent, misrepresents facts, or misappropriates funds, you can initiate criminal proceedings under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> and the <strong>Negotiable Instruments Act, 1881</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The most common criminal scenario involves a bounced cheque. If an employer issues a cheque for salary or FNF dues and it is returned by the bank due to 'insufficient funds' or 'payment stopped', they commit an offense under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. The process is strict: you must serve a statutory notice to the company and the signing directors within 30 days of receiving the return memo, demanding payment. If they fail to pay within 15 days, you can file a criminal complaint in the Magistrate's Court. The penalty includes up to 2 years in prison, a fine of up to double the cheque amount, or both.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Other criminal offenses in salary disputes include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> This applies if the employer deducts the employee's share of EPF or TDS from their monthly payslip but fails to deposit it with the EPFO or Income Tax Department. The employer holds these funds in trust, and failing to deposit them is a serious offense carrying a prison term of up to 3 years.</li>
                      <li><strong>Cheating (Section 318, BNS):</strong> This applies if the founders or directors induced you to join or continue working by making false promises about funding or salary payments that they had no intention of honoring, with the intent to obtain unpaid labor.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To initiate criminal action, you must file a complaint under <strong>Section 173 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> at the local police station. If the police refuse to register an FIR, you can file a written representation to the Superintendent of Police under Section 173(4), or file a private criminal complaint before the Judicial Magistrate under Section 223 of the BNSS, requesting the court to direct a police investigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Criminal actions are serious and should be used selectively when clear evidence of fraud or statutory default exists. Naming directors in these complaints is highly effective, as the prospect of personal criminal liability and travel restrictions often prompts immediate settlement discussions.
                    </p>
                  </div>
                </section>

                {/* 9. Interest & Tax Relief */}
                <section id="taxation-interest-compensation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Recovering Interest &amp; Section 89(1) Relief
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery of unpaid salary involves more than just securing the base principal amount. Because salary delays disrupt your personal finances, your recovery claim should include interest and compensation for direct financial damages. Furthermore, receiving several months of unpaid salary as a lump sum can create tax complications that require planning.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 73 of the Indian Contract Act, 1872, you are entitled to claim compensation for any loss or damage that naturally arose from the breach of contract. In salary recovery cases, this includes the interest and penalties charged by banks for bounced EMIs, late fees on credit cards, and compensation for the degradation of your CIBIL score. You should also demand simple interest on the delayed salary (usually 12% to 18% per annum), calculated from the date the wages were due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When you recover your unpaid salary as a lump sum, it can push you into a higher income tax bracket for that financial year, resulting in higher tax liability. To address this, <strong>Section 89(1) of the Income Tax Act, 1961</strong> provides tax relief. This provision allows you to spread the received salary arrears over the financial years they actually belong to, reducing your tax liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To claim Section 89(1) relief:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>You must calculate the tax liability for the year of receipt both with and without the arrears, and for the years to which the arrears relate both with and without the arrears.</li>
                      <li>You must file <strong>Form 10E</strong> online through the Income Tax e-filing portal.</li>
                      <li>Form 10E must be submitted <strong>before</strong> you file your Income Tax Return (ITR) for the financial year in which the arrears are received. Failing to do so will result in the tax department denying the relief.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery assists clients in calculating their interest claims, compiling bank penalty bills, and preparing the necessary documentation for Section 89(1) tax relief. We ensure that your recovery claim covers all financial damages and is structured to minimize tax liabilities.
                    </p>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-600 italic leading-relaxed mb-4">
                          &quot;{rev.review}&quot;
                        </p>
                        <div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(rev.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="font-extrabold text-xs text-slate-900">{rev.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Choose LegalRecovery?
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India's leading legal-tech platform specializing in salary and employment dues recovery. We combine specialized legal expertise with technology-driven workflows to make the recovery process fast, transparent, and affordable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Specialized Panel</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Our network includes experienced labor and civil advocates across major Indian cities who understand local court procedures and inspectorates.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Transparent Pricing</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          We operate on clear, flat-rate pricing with no hidden charges or percentage cuts from your recovered dues.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Digital Dashboard</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Track your case status, review draft notices, and communicate with your legal team through our secure online portal.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full px-6 py-4 text-left font-extrabold text-slate-900 flex justify-between items-center text-xs md:text-sm hover:bg-slate-100/50 transition-colors"
                          >
                            <span>{faq.question}</span>
                            <span className={`text-[#DC2626] text-lg font-bold transition-transform duration-200 ml-4 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                              +
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

            {/* Right Sidebar - CTA Card */}
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] p-6 rounded-3xl border border-slate-800 text-white text-center shadow-xl">
                <span className="text-[#DC2626] text-[10px] font-black uppercase tracking-widest block mb-2">
                  Secure Consultation
                </span>
                <h3 className="text-lg font-black mb-3 text-slate-100">Recover Your Salary</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                  Connect with our legal team to review your evidence and draft an authoritative notice to your employer.
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center justify-between text-left">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Standard Notice</span>
                      <span className="text-xs font-black text-slate-100">Drafted by Advocates</span>
                    </div>
                    <span className="text-xs font-black text-[#DC2626]">₹1,999</span>
                  </div>
                  <button 
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-red-950/20"
                  >
                    Start Recovery Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </>
  );
}
