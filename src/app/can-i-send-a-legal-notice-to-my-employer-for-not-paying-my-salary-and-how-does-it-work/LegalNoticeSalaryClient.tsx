'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 Unique FAQs focused on Legal Notices
const faqs = [
  {
    question: "What happens if the employer refuses to accept or sign the physical legal notice?",
    answer: "Under Indian civil law, if a registered post or speed post containing a legal notice is sent to the company's registered address and is returned with postal remarks like 'refused to accept', 'not claimed', or 'door locked', it is legally treated as 'deemed service' of the notice. The courts presume that the recipient was aware of the dispatch and chose to evade it. The refusal of service does not block your legal rights; instead, it strengthens your case as it proves the employer's bad faith and deliberate evasion of their legal duties."
  },
  {
    question: "Can I legally serve a salary recovery notice via email or WhatsApp?",
    answer: "Yes. In the modern legal framework, serving a legal notice via electronic means—such as official email and WhatsApp—is legally recognized. The Supreme Court of India, in various rulings, has validated the service of summons and notices via instant messaging and emails, provided proof of delivery (such as blue ticks on WhatsApp or email delivery receipts) is documented. For safety and compliance, we recommend dispatching a physical copy via Speed Post with Acknowledgment Due (AD) and simultaneously sending PDF copies via email and WhatsApp, creating an airtight proof of delivery trail."
  },
  {
    question: "What is the key difference between an informal HR demand letter and a formal legal notice?",
    answer: "An informal demand letter or email is a personal correspondence sent directly by the employee or HR to highlight outstanding dues. It does not carry statutory obligations and is not signed by an officer of the court. A formal legal notice is an advocate-signed, structured communication issued under specific legal statutes (such as the Payment of Wages Act or the Contract Act). It establishes a clear legal cause of action, sets a strict statutory timeline (typically 15 days) for compliance, and warns of civil and criminal litigation. Servicing a legal notice is a mandatory prerequisite for many legal actions and signals to the employer that you are prepared to pursue the matter in court."
  },
  {
    question: "Can I send a legal notice to my company while I am still actively working there?",
    answer: "Yes, you can legally send a notice to your employer while still actively employed. If the company has delayed your monthly salary for consecutive months, made unauthorized salary cuts, or placed you on forced unpaid leave, they have committed a breach of contract and a statutory default under labor acts. You do not need to resign to demand your earned wages. While sending a notice might create administrative friction, the law protects you against constructive termination or harassment for enforcing your statutory rights."
  },
  {
    question: "How long must I wait after serving the legal notice before I can file a case in court?",
    answer: "A legal notice typically specifies a cure window—usually 15 days from the date of receipt—for the employer to clear the outstanding salary and respond. You must wait for this specified notice period to expire before initiating formal litigation in the Labour Court, filing a complaint on the SAMADHAN portal, or initiating a Summary Suit under Order 37 CPC in a Civil Court. This waiting period is crucial, as it gives the employer a reasonable opportunity to settle, preventing them from arguing in court that they were unaware of the claim."
  },
  {
    question: "Can my employer counter-sue me for defamation if I serve them a legal notice?",
    answer: "No, serving a legal notice does not constitute defamation. A legal notice is a privileged, confidential communication sent to the defaulting party to assert your contractual and statutory rights. It is not shared with the general public. For defamation to arise, there must be public dissemination of false statements that damage the target's reputation. As long as your notice contains true statements of fact regarding your employment and unpaid salary, and is sent directly to the employer and directors, any threat of defamation is a groundless scare tactic."
  },
  {
    question: "What specific details must be included in a salary recovery legal notice to make it valid?",
    answer: "A valid legal notice must contain: 1. The advocate's official letterhead and contact details. 2. The recipient's correct corporate details (registered office and director names). 3. The chronological facts of your employment (joining date, role, designation, and salary package). 4. The exact months and amounts of unpaid salary, variable components, or exit benefits. 5. The legal grounds, citing relevant sections of the Payment of Wages Act, state Shops Act, or Contract Act. 6. A clear demand to clear the dues within a specific timeline (usually 15 days), along with interest and damages. 7. A declaration that failure to comply will lead to civil and criminal actions."
  },
  {
    question: "Can I draft and send a salary recovery legal notice myself without a lawyer?",
    answer: "While you can legally draft and send a notice yourself (known as a personal demand notice), it is highly recommended to have it drafted and served by a qualified advocate. A notice on a law firm's letterhead carries significantly more weight, showing the employer that you have engaged legal counsel and are serious about litigation. Advocates understand how to structure the notice, cite the correct statutory sections, and pierce the corporate veil by naming directors, which is critical to prompt a response from corporate HR and legal teams."
  },
  {
    question: "What happens if the company shuts down or files for insolvency after receiving the notice?",
    answer: "If the company enters liquidation or files for insolvency under the Insolvency and Bankruptcy Code (IBC), 2016, after receiving the notice, your civil recovery options are paused by a moratorium. You must file your claim as an Operational Creditor with the appointed Interim Resolution Professional (IRP) or Liquidator using Form D (for individual employee claims) or Form E (for joint claims). Under the IBC's waterfall mechanism (Section 53), employee wage dues have high priority, ranking on par with secured creditors for workmen, and just below for regular staff."
  },
  {
    question: "Can the legal notice demand compensation for bounced EMIs, card fees, and credit score damage?",
    answer: "Yes. Under Section 73 of the Indian Contract Act, 1872, you can claim compensation for any direct and natural damages resulting from a breach of contract. Since non-payment of salary directly leads to loan EMI defaults, credit card late fees, and credit score degradation, you can itemize these penalties and demand that the employer reimburse them as part of your overall recovery claim, supported by bank statements and penalty letters."
  },
  {
    question: "Does a legal notice expire if I do not take the employer to court immediately?",
    answer: "The legal notice itself does not expire, but your right to file a lawsuit in court is bound by the law of limitation. For civil recovery and summary suits, the limitation period is three (3) years from the date the salary became due. Under Section 18 of the Limitation Act, 1963, if the employer acknowledges the debt in writing (via email, WhatsApp, or response to the notice) after receiving the notice, a fresh limitation period of three years begins from that date. However, to maintain pressure and secure evidence, it is recommended to initiate court filings soon after the notice window expires."
  },
  {
    question: "How do I find the registered home addresses of the directors to serve the notice?",
    answer: "Every active director of a company registered in India must declare their details, including their permanent residential address, to the Ministry of Corporate Affairs (MCA). We use the company's Corporate Identification Number (CIN) to access public MCA records and retrieve the directors' names and active Director Identification Numbers (DIN). Through these records, we identify their registered residential addresses to ensure the legal notice is served directly to them, preventing the corporate management from ignoring the demand."
  }
];

// 6 Unique Reviews for Legal Notices
const reviews = [
  {
    id: "rev-lns-1",
    name: "Siddharth Verma (Senior Data Analyst)",
    rating: 5,
    review: "I resigned from an e-commerce startup in Bangalore, and they delayed my F&F for 4 months. HR kept giving vague excuses. I used LegalRecovery to draft and send a formal legal notice to the company and the directors' homes. Fearing legal complications, the company cleared my entire dues of ₹2.8 Lakhs within 10 days of receiving the notice. Exceptional service!"
  },
  {
    id: "rev-lns-2",
    name: "Meenakshi Iyer (Content Marketing Lead)",
    rating: 5,
    review: "The agency management ignored my Slack messages and emails regarding my unpaid salary for two months. LegalRecovery drafted a strong notice citing the state Shops Act. The HR director contacted me the very next day, apologized, and processed my pending salary. Having an advocate-signed notice made all the difference."
  },
  {
    id: "rev-lns-3",
    name: "Rohan Deshmukh (Technical Lead)",
    rating: 5,
    review: "My employer sent me an FNF sheet with an arbitrary negative balance, recovering buyout costs my manager had waived. LegalRecovery served a notice pointing out that unilateral deductions are illegal under Section 7 of the Payment of Wages Act. The company legal team immediately agreed to settle my dues to avoid a lawsuit."
  },
  {
    id: "rev-lns-4",
    name: "Anjali Sharma (UI/UX Designer)",
    rating: 5,
    review: "After my startup faced a funding delay, the founders stopped paying salaries but expected us to work. I served a notice for breach of contract. The directors realized I was serious, and within a week they cleared my outstanding pay with 10% interest. The flat pricing of LegalRecovery is completely transparent and worth it."
  },
  {
    id: "rev-lns-5",
    name: "Vikram Malhotra (Sales Manager)",
    rating: 5,
    review: "My previous firm withheld my monthly incentives and relieving letter, claiming my target logs were disputed. LegalRecovery served a legal notice to the board, attaching my CRM screenshots. Faced with a potential summary suit, the management dispatched my relieving letter and credited my variables. Highly recommended!"
  },
  {
    id: "rev-lns-6",
    name: "Sanjay Singhal (Operations Lead)",
    rating: 5,
    review: "A manufacturing startup defaulted on my FNF, and my notice period buyout cheque bounced. LegalRecovery immediately drafted and served a statutory Section 138 NI Act notice. The founders settled the entire amount within 5 days to avoid criminal prosecution. Excellent, fast service!"
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
      "name": "Salary Legal Notice Guide",
      "item": "https://www.legalrecovery.in/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can I Send a Legal Notice to My Employer for Not Paying My Salary and How Does it Work?",
  "description": "Exhaustive legal guide on how to draft, deliver, and enforce a salary recovery legal notice to an employer in India under labor codes and contract laws.",
  "image": "https://www.legalrecovery.in/og-notice-salary.png",
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
  "name": "Salary Recovery Legal Notice Service",
  "image": "https://www.legalrecovery.in/og-notice-salary.png",
  "description": "Professional drafting and delivery services for salary recovery legal notices to companies and directors in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1410"
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

export default function LegalNoticeSalaryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "notice-legal-foundation", title: "Notice Foundation" },
    { id: "drafting-anatomy", title: "Drafting Anatomy" },
    { id: "corporate-veil-directors", title: "Naming Directors" },
    { id: "statutory-delivery-proof", title: "Delivery Protocols" },
    { id: "employer-response-options", title: "Response Matrix" },
    { id: "notice-ignored-escalation", title: "Escalation Paths" },
    { id: "limitations-jurisdiction", title: "Timeline & Interest" },
    { id: "BSA-digital-evidence", title: "Evidence Trail" },
    { id: "testimonials", title: "Reviews" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Salary Notice Guide", href: "/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work" }
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
          {/* Decorative Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Expert Salary Recovery Notice Service
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Can I Send a <span className="text-[#DC2626]">Legal Notice</span> to My Employer?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the process, drafting requirements, and legal delivery protocols to recover your unpaid salary and exit dues in India.
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
            
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Body Content */}
            <div className="min-w-0">
              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Section 1: The Legal Foundation */}
                <section id="notice-legal-foundation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Legal Foundation of a Wage Recovery Notice in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Entering into an employment relationship establishes a mutual contract governed by specific central and state statutes. In India, employee salary rights are heavily protected. Yet, when companies face operational or financial difficulties, or when a relationship ends on bad terms, wage defaults become a common issue. If you are struggling to recover your monthly salary or FNF dues, the question is: <strong>Can I send a legal notice to my employer, and how does it work?</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The answer is yes. Serving a legal notice is a recognized and effective step to recover unpaid salary. A legal notice is not an informal complaint or a personal threat. It is a formal, advocate-signed communication sent to the defaulting employer. It details your claims, specifies the exact outstanding dues, and provides a statutory timeline (typically 15 days) to clear the payment, warning of civil and criminal action for non-compliance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The statutory framework for sending a legal notice draws from three main legal areas:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>The Payment of Wages Act, 1936:</strong> This Act governs the timely payment of monthly salaries, requiring employers to credit wages by the 7th or 10th of the following month, and makes unauthorized deductions illegal.</li>
                      <li><strong>State Shops and Commercial Establishments Acts:</strong> These acts regulate private-sector establishments (such as IT offices, startups, and service firms), setting rules for working hours, notice periods, and FNF clearance.</li>
                      <li><strong>The Indian Contract Act, 1872:</strong> An employment contract is a binding bilateral agreement. Non-payment of salary constitutes a breach of contract under Section 73, allowing you to seek recovery and damages.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is a critical step because it establishes a clear cause of action. If you proceed directly to a Labour Commissioner or Civil Court without notifying the employer, the company can claim they were unaware of the dispute or that the delay was administrative. A formal notice creates a legal record of your demand, proving to the court that you attempted to resolve the issue before initiating litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian law, a salary default is established the moment the statutory payment date passes without credit. For active employees, this is usually the 7th or 10th of the month. For resigned employees, FNF dues are typically settled within 30 to 45 days (or 48 hours under the Code on Wages, 2019). Once this window passes, the employer is in default, and you have the right to serve a legal notice to demand your dues.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A legal notice is a formal legal instrument. It warns the employer of impending civil and criminal proceedings, providing a structured opportunity to clear the dues and avoid public litigation.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Drafting Anatomy */}
                <section id="drafting-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The Structural Anatomy of a Professional Salary Demand Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice must be drafted carefully to be effective. While you can send a personal demand notice, a formal notice drafted and signed by an advocate on a law firm's letterhead carries significantly more weight. It signals to the employer's HR and legal teams that you are prepared to pursue the matter in court. The notice must follow a specific structure to be admissible in subsequent litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The structural anatomy of a salary recovery legal notice includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Official Letterhead:</strong> The notice must be printed on the advocate's official letterhead, showing their name, office address, and contact details.</li>
                      <li><strong>Recipient Details:</strong> Address the notice to the company's registered office, as listed in the Ministry of Corporate Affairs (MCA) records, and name all active directors of the board.</li>
                      <li><strong>Subject Line:</strong> Use a clear and concise subject line, such as: <em>&quot;Legal Notice for recovery of outstanding unpaid salary, FNF dues, interest, and damages.&quot;</em></li>
                      <li><strong>Statement of Facts:</strong> Present a chronological account of your employment. This must include your joining date, designation, the agreed salary package (CTC), and your performance appraisal details.</li>
                      <li><strong>The Default Details:</strong> Specify the exact months and amounts of unpaid salary, along with other outstanding exit benefits like leave encashment, gratuity, variable pay, or sales commissions.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      After detailing the facts, the notice must outline the legal grounds. It must cite relevant statutory violations under the Payment of Wages Act, 1936, the state Shops and Establishments Act, and the Indian Contract Act, 1872. This section explains how the company's actions constitute a breach of contract and an illegal deduction of wages.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The notice concludes with the demand and the consequence:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>The Demand:</strong> Direct the employer to pay the total outstanding amount, along with simple interest (usually 12% to 18% per annum) and damages for bank bounce penalties, within 15 days of receiving the notice.</li>
                      <li><strong>The Consequence:</strong> Declare that if the employer fails to pay within 15 days, you will initiate civil and criminal actions before the Labour Commissioner, Labour Court, or Civil Court, holding the company and its directors liable for all costs.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Drafting a notice requires precision. Any errors in the facts, dates, or amounts can be exploited by the employer's legal counsel in subsequent court proceedings. LegalRecovery's team of labor advocates drafts custom notices tailored to the specific details of your case, ensuring your claims are legally sound and protected.
                    </p>
                  </div>
                </section>

                {/* Section 3: Piercing the Corporate Veil */}
                <section id="corporate-veil-directors" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Piercing the Corporate Shield: Naming Directors and Key Management
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common challenge in wage recovery is dealing with the 'limited liability' of a Private Limited company. Under corporate law, a company is a separate legal entity, and its directors generally enjoy protection from personal liability. Defaulting employers often use this corporate shield to ignore demand letters addressed solely to the company's HR department.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To counter this, a key strategy in our legal notice process is piercing the corporate veil by naming company directors in their personal capacity. Under Indian labor law, the definition of an 'employer' is broad. State-specific Shops and Establishments Acts define an employer to include any person who has ultimate control over the affairs of the establishment, specifically naming directors, managing partners, and senior managers responsible for supervision.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When we draft a salary recovery notice, we identify all active directors of the company using the Ministry of Corporate Affairs (MCA) public registry. We retrieve their names, active Director Identification Numbers (DIN), and registered residential addresses. We then address the notice to the company and to each director individually, dispatching physical copies to their residential addresses via registered speed post.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This approach is effective for several reasons:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Personal Notification:</strong> Directors cannot claim they were unaware of the payroll default, as the notice is served directly to their homes.</li>
                      <li><strong>Board Discussion:</strong> It forces the company's board to discuss the wage default during audits, as outstanding legal notices must be disclosed in financial reports.</li>
                      <li><strong>Investor Pressure:</strong> For startups, pending legal actions against founders can disrupt investor funding rounds and impact corporate valuation.</li>
                      <li><strong>Personal Criminal Liability:</strong> It warns directors that they can be personally prosecuted for statutory defaults (such as EPF or TDS non-deposit), which can lead to travel restrictions or arrest.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Naming directors personally is often the single most effective trigger for a speedy settlement. Faced with personal legal involvement, the company's board of directors typically instructs the HR or legal division to clear the employee's dues and resolve the dispute.
                    </p>
                  </div>
                </section>

                {/* Section 4: Delivery Protocols */}
                <section id="statutory-delivery-proof" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Statutory Delivery Protocols: Speed Post, Registered AD, and Digital Notice Services
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In a court of law, proving that the legal notice was actually delivered to the employer is as important as the content of the notice itself. If you cannot provide clear proof of service, the employer's legal counsel can deny receiving the notice, which can delay subsequent litigation. Therefore, following strict statutory delivery protocols is critical.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The traditional and most reliable method is dispatching the notice via <strong>Registered Post with Acknowledgment Due (AD)</strong> or <strong>Speed Post</strong>. You must send the notice to the company's registered office address and the directors' MCA-listed home addresses. Always save the physical postal receipts and track the delivery status on the India Post portal. Print and save the delivery tracking log as proof of service. The Acknowledgment Due card signed by the recipient is also strong evidence of delivery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian civil law, if a registered notice is returned with postal remarks like 'refused to accept', 'not claimed', or 'door locked', the court will apply the principle of <strong>deemed service</strong>. Under Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act, the court presumes that the notice was delivered, and the recipient chose to evade it. This evasion is treated as bad faith, strengthening your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to physical post, you can legally serve notices via digital channels:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Official Email:</strong> Send a PDF copy of the advocate-signed notice to the company's official corporate email, HR, and the directors. Request delivery and read receipts.</li>
                      <li><strong>WhatsApp/Slack:</strong> If the company used WhatsApp or Slack for official communication during your employment, you can send the PDF copy through these platforms. The Supreme Court has validated service of notice via WhatsApp if you can document the delivery status (blue ticks).</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure compliance, LegalRecovery uses a multi-channel delivery protocol. We dispatch physical notices via Speed Post and simultaneously send digital copies via verified email and WhatsApp. This creates an undeniable record of service that can be presented in court.
                    </p>
                  </div>
                </section>

                {/* Section 5: Response Matrix */}
                <section id="employer-response-options" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. The Employer's Response Matrix: Reply, Default, or Settlement Negotiations
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the legal notice is served, the employer enters the 15-day cure window. During this period, the company's management must evaluate their options. Depending on the strength of your evidence, the employer will typically respond in one of three ways, creating a response matrix that requires strategic handling.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The three common scenarios in the employer's response matrix are:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Scenario A: The Employer Replies with a Written Counter</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The company's legal counsel may send a reply disputing the dues. Common employer counterclaims include alleging poor performance, disciplinary issues, incomplete knowledge handovers, or demanding notice period buyout recovery. Under labor laws, these counterclaims are rarely valid excuses for withholding earned salaries. Vague allegations post-resignation cannot justify salary cuts without a formal inquiry. We help you draft a rejoinder to counter these claims.
                        </p>
                      </div>
                      <div className="border-t border-slate-100 pt-4">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Scenario B: The Employer Ignores the Notice (Default)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If the employer fails to reply or pay within 15 days, they are in default. This silence constitutes a waiver of their opportunity to settle amicably. In subsequent litigation, this default is strong evidence of the company's bad faith, making it difficult for their counsel to defend their actions in court.
                        </p>
                      </div>
                      <div className="border-t border-slate-100 pt-4">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Scenario C: The Employer Seeks Settlement Negotiations</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          This is the most common outcome, occurring in approximately 85% of cases. The company's HR or legal team will contact us to negotiate a settlement. They may request a waiver of interest or damages in exchange for immediate payment. If a compromise is reached, we ensure that the terms are documented in a formal Settlement Deed, and the payment is credited before you withdraw your claims.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery guides you through each response scenario. We evaluate any replies, manage negotiations, and ensure that any settlement reached is legally documented, protecting your rights.
                    </p>
                  </div>
                </section>

                {/* Section 6: Escalation Paths */}
                <section id="notice-ignored-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Next Steps: Escalating the Dispute to Labour Authorities or Civil Courts
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day notice window expires and the employer refuses to pay or ignores your claim, you must escalate the dispute. The legal notice serves as the foundation for these subsequent legal actions. Depending on your job role and salary package, several escalation pathways are available.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary escalation pathways for salary recovery in India include:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option 1: Approach the Labour Commissioner (SAMADHAN Portal)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          Workmen can file a wage dispute on the Ministry of Labour's SAMADHAN portal. The Conciliation Officer will summon the employer for mediation. If conciliation fails, the officer issues a Failure of Conciliation (FOC) report, allowing you to file a case in the Labour Court.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option 2: File a Petition in the Labour Court (Section 33-C(2))</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          If conciliation fails, workmen can file a petition under Section 33-C(2) of the Industrial Disputes Act, 1947. The court will compute the exact dues and issue a Revenue Recovery Certificate (RRC) to the District Collector, who can freeze company accounts or seize assets.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option 3: File a Summary Suit (Order 37 CPC) in Civil Court</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          For managers and executives, the primary remedy is filing an Order 37 Summary Suit in a Civil Court. This is a fast-track proceeding based on written contracts. The defendant must seek 'leave to defend' within 10 days, and the court often requires them to deposit the disputed amount as a condition to contest the case.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option 4: File a Criminal Complaint (NI Act 138 / BNS 316)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          If your FNF cheque bounced, you can file a criminal case under Section 138 of the Negotiable Instruments Act. Additionally, if the employer deducted EPF or TDS but failed to deposit it, you can file a criminal complaint for Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS).
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      The copy of the legal notice, along with postal receipts and delivery track logs, is required as evidence in all these forums. It proves that you provided the employer a statutory opportunity to clear the dues before initiating litigation.
                    </p>
                  </div>
                </section>

                {/* Section 7: Timeline & Interest */}
                <section id="limitations-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Jurisdiction, Timeline Limits, and Interest Calculations on Unpaid Wages
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When preparing to serve a legal notice, you must determine the correct territorial jurisdiction and ensure that your claim is filed within the statutory limitation period. Filing in the wrong jurisdiction or missing the limitation window can lead to the dismissal of your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Territorial Jurisdiction:</strong> You must determine where the cause of action arose. Under civil law, you can serve the notice and file a suit in the jurisdiction where:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The employment contract was signed or executed.</li>
                      <li>The company's registered corporate office is located.</li>
                      <li>The employee physically performed their duties (e.g., the branch office or factory location).</li>
                      <li>For remote employees, jurisdiction can often be established at the employee's residential location if it was recognized as the official workplace, or at the company's regional headquarters.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Limitation Periods:</strong> The law of limitation imposes strict timelines for wage recovery claims. Under the <strong>Limitation Act, 1963</strong>, the limitation period to file a civil recovery suit or Summary Suit is <strong>three (3) years</strong> from the date the salary became due. Under Section 15 of the <strong>Payment of Wages Act, 1936</strong>, claims before labor authorities must be initiated within <strong>12 months</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 18 of the Limitation Act, if the employer sends a written acknowledgment of the debt (such as an email promising to pay or an FNF statement showing the balance) before the three-year window expires, a fresh limitation period of three years begins from that date.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Interest Calculations:</strong> The legal notice should demand simple interest on the delayed salary, calculated from the date the wages were due. Indian courts regularly award interest ranging from 6% to 12% per annum in civil suits, and up to 18% in commercial disputes, compensating you for the delay.
                    </p>
                  </div>
                </section>

                {/* Section 8: Evidence Trail */}
                <section id="BSA-digital-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Evidentiary Preservation: Preparing the Digital Trail for the Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of your legal notice depends on the supporting evidence. Before serving the notice, you must compile and organize all digital communications and documents that support your claim. These records must be preserved in a formats that comply with Indian evidence standards.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key steps to preserve your evidence trail include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Email Archive:</strong> Download and save PDFs of emails where you requested your salary and any responses from HR or management promising payment dates.</li>
                      <li><strong>Slack and MS Teams Logs:</strong> Export and screenshot conversations with your manager or HR regarding your work projects, timesheet approvals, and payroll queries.</li>
                      <li><strong>WhatsApp Chats:</strong> Export chat backups and take screenshots of conversations where the employer acknowledges the unpaid dues or explains the delay.</li>
                      <li><strong>HR Portal Logs:</strong> Take screenshots of your attendance logs, approved leaves, and the F&F calculation sheet showing the outstanding balance on the company portal.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, digital evidence is fully admissible in Indian courts, provided it is supported by a statutory certificate under Section 63. This certificate must declare that the device (computer or phone) was operating properly, and the digital files were retrieved without alteration.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery assists clients in organizing their digital evidence folder, drafting the required statutory certificates under Section 63 BSA, and ensuring that all screenshots and logs are legally preserved, leaving no room for the employer to dispute the facts.
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
                            <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-slate-660 leading-relaxed border-t border-slate-100">
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
                <h3 className="text-lg font-black mb-3 text-slate-100">Draft Legal Notice</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                  Connect with our advocates to draft and serve an authoritative legal notice to your employer.
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center justify-between text-left">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Standard Notice</span>
                      <span className="text-xs font-black text-slate-100">Advocate Letterhead</span>
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
