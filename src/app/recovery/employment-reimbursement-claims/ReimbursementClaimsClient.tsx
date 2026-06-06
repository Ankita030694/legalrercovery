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
    question: "What is considered a valid business expense for reimbursement under Indian law?",
    answer: "A valid business expense is any cost incurred by an employee wholly, necessarily, and exclusively in the performance of their official duties. This includes official business travel (flights, cabs, trains), hotel stays, client entertainment, work-from-home utility bills (internet, phone) mandated by company policy, office supplies, and professional training fees. To be legally recoverable, the expense must align with the company's written policy or be backed by explicit management approval."
  },
  {
    question: "Can my employer reject an expense claim if I lost the physical receipt?",
    answer: "While employers have the right to request proof of expenses, rejecting a claim solely due to a lost physical receipt is illegal if alternative digital proof exists. You can submit digital credit card statements, bank transaction logs, Uber/Ola email invoices, or vendor-generated PDF bills. If the transaction is verifiable and the expense was authorized for official business, the employer is legally obligated to clear it. Withholding payment despite proof is a breach of contract."
  },
  {
    question: "Is there a statutory time limit for submitting reimbursement claims?",
    answer: "Company policies usually set internal deadlines (e.g., 30 to 90 days) for submitting expense bills. However, under the Limitation Act, 1963, the statutory limitation period to legally recover unpaid dues or debts through a civil court is three (3) years from the date the expense was incurred or when the reimbursement became due. Company-imposed deadlines cannot override your statutory right to recover personal funds spent on corporate operations."
  },
  {
    question: "Does the Payment of Wages Act, 1936 cover employee business expense reimbursements?",
    answer: "No. The Payment of Wages Act, 1936 regulates the timely payment of 'wages' and protects against unauthorized deductions. However, the statutory definition of 'wages' under Section 2(vi) explicitly excludes travelling allowances, the value of travel concessions, and special expense reimbursements. Therefore, you cannot recover travel bills through a standard Payment of Wages petition. Instead, you must pursue remedies under the Shops and Establishments Act, the Industrial Disputes Act (for workmen), or a civil recovery suit."
  },
  {
    question: "Can an employer withhold my relocation expenses if I resign within a year?",
    answer: "An employer can only withhold or claw back relocation expenses if there is a clear, written, and bilaterally signed relocation agreement or clawback clause in your employment contract. The clawback period must be reasonable (typically 12 months) and the company must prove they actually incurred the shifting costs. If no such clause exists in writing, the employer cannot unilaterally withhold your shifting or temporary housing reimbursements upon resignation."
  },
  {
    question: "How long does a summary suit under Order 37 CPC take to recover unpaid expenses?",
    answer: "A Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC) is a fast-track debt recovery mechanism. Unlike standard civil suits that can drag on for years, a summary suit does not allow the defendant (employer) to defend the case as a matter of right unless they obtain formal leave to defend from the judge. If the employer has no substantial defense and the debt is proven by email approvals or expense portal logs, summary suits are typically resolved within 6 to 12 months."
  },
  {
    question: "What constitutes 'unjust enrichment' under Section 70 of the Contract Act for employees?",
    answer: "Section 70 of the Indian Contract Act, 1872 deals with non-gratuitous acts. If an employee lawfully incurs expenses for the company's business operations (which they did not intend to do for free) and the company enjoys the commercial benefits of those activities (e.g., client acquisitions, vendor deliveries), the company cannot unjustly enrich itself by refusing to reimburse the employee. The court will enforce the company's obligation to restore or compensate the employee for the funds spent."
  },
  {
    question: "Can I file a police complaint (BNS/IPC) against my company for withholding out-of-pocket expenses?",
    answer: "Yes. Deducting or withholding money that an employee has paid out-of-pocket for company operations can constitute a criminal offense. Under the Bharatiya Nyaya Sanhita, 2023 (formerly the IPC), if an employer induces an employee to spend their personal savings for business expenses with the promise of reimbursement, but has no intention of paying it back, it constitutes Cheating (Section 318 BNS) and Criminal Breach of Trust (Section 316 BNS). Filing an FIR is highly effective when corporate fraud or deliberate siphoning is suspected."
  },
  {
    question: "Can my company offset my pending reimbursements against my notice period buyout dues?",
    answer: "Only if your employment contract explicitly permits such offsets. Unilateral adjustments where the employer wipes out verified, approved travel or relocation claims to cover notice buyout disputes are illegal. Approved reimbursements represent personal money you lent to the company for operations. Withholding these funds without explicit authorization is an illegal deduction and constitutes a breach of contract."
  },
  {
    question: "Are employee expense reimbursements subject to Income Tax or TDS in India?",
    answer: "No. Actual reimbursements for business expenses incurred wholly, necessarily, and exclusively in the performance of official duties are not taxable income and are not subject to Tax Deducted at Source (TDS). However, to qualify for tax exemption under the Income Tax Act, 1961, the employee must submit proper, valid bills, and the employer must maintain record of these business expenses. If an employer treats reimbursements as taxable perks without cause, it violates tax guidelines."
  },
  {
    question: "What happens to my reimbursement claims if the company files for bankruptcy under IBC?",
    answer: "Under the Insolvency and Bankruptcy Code, 2016 (IBC), when a company enters Corporate Insolvency Resolution Process (CIRP), employee dues (including salaries, gratuity, and verified business expense reimbursements) are categorized under operational debts. While workmen salaries have high priority, other employee reimbursement claims are processed by the Resolution Professional. Employees must file 'Form D' (Claim by Operational Creditor) to secure their dues during the insolvency process."
  },
  {
    question: "What digital evidence is required to prove an unpaid reimbursement claim in court?",
    answer: "To recover reimbursement claims, compile: (1) Screenshots of the company's expense portal showing claims marked 'approved' or 'pending review'; (2) Emails from managers authorizing the travel or purchase; (3) Digital invoices, tickets, and GST bills; (4) Bank/Credit Card statements showing personal payments; (5) Written company policies. All digital records must be supported by an electronic certificate under Section 63 of the BNS, 2023 (formerly Section 65B Evidence Act) to be admissible."
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
      "name": "Employment Reimbursement Claims",
      "item": "https://www.legalrecovery.in/recovery/employment-reimbursement-claims"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Employer Withholding Reimbursements? Recovery Notice & Legal Options Guide",
  "description": "Exhaustive legal guide on recovering unpaid employee business expense reimbursements, travel bills, relocation costs, and WFH allowances in India.",
  "image": "https://www.legalrecovery.in/og-reimbursement-recovery.png",
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
  "name": "Employee Reimbursement Recovery Services",
  "image": "https://www.legalrecovery.in/og-reimbursement-recovery.png",
  "description": "Expert legal tech assistance to recover unpaid employee travel, relocation, and out-of-pocket business expenses in India.",
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
        "name": "Rajesh Varma"
      },
      "reviewBody": "I spent over ₹1,45,000 on official flights and client hosting out of my own pocket. After I resigned, the company refused to clear the bills, claiming I didn't submit them within their internal 30-day window. LegalRecovery served a formal notice citing the Limitation Act. The company cleared all my dues within 12 days to avoid a summary recovery suit."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Pillai"
      },
      "reviewBody": "During a mass layoff, my employer withheld WFH setup and internet allowances promised in writing. LegalRecovery helped me draft an escalation and served a notice warning of a Shops & Establishments complaint. The company processed my FNF and pending allowances immediately. Highly professional service!"
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
      "reviewBody": "My previous firm withheld my relocation shifting expenses (₹85,000) claiming I resigned within their clawback period, even though they terminated me. LegalRecovery analyzed my contract, identified that clawback didn't apply to employer-led termination, and sent a notice. The company deposited the full amount. Brilliant legal counsel!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nisha Deshmukh"
      },
      "reviewBody": "I paid for a cloud architecture certification based on an email approval from my manager. When the appraisal went poorly, HR refused to reimburse me. LegalRecovery drafted a notice highlighting Section 70 of the Contract Act. The corporate legal team realized they had no defense and reimbursed the exam fees."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karthik Iyer"
      },
      "reviewBody": "A startup withheld ₹1,12,000 of my travel expense reimbursements for months. LegalRecovery guided me on compiling portal screenshots and email approvals with a Section 63 BNS certificate, then served a notice. The founders settled the dues out-of-court to protect their funding reputation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Sen"
      },
      "reviewBody": "My employer did not pay for project procurement costs that I paid with my personal credit card. LegalRecovery's notice pointing out Criminal Breach of Trust forced the directors to pay the principal along with credit card interest charges. Excellent, prompt support!"
    }
  ]
};

export default function ReimbursementClaimsClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "reimbursement-overview", title: "Overview of Reimbursement Dues" },
    { id: "categories-of-expenses", title: "Categories of Reimbursable Expenses" },
    { id: "policy-contract-framework", title: "Contractual & Policy Frameworks" },
    { id: "legal-standing-wages", title: "Reimbursements vs Wages Definition" },
    { id: "employer-delay-tactics", title: "Common Delay & Rejection Tactics" },
    { id: "evidence-compilation", title: "Compiling Bulletproof Evidence" },
    { id: "pre-litigation-steps", title: "Internal Escalation & Auditing" },
    { id: "breach-of-contract", title: "Breach of Contract (Section 73)" },
    { id: "summary-suit-recovery", title: "Summary Suits (Order 37 CPC)" },
    { id: "shops-establishments-recourse", title: "Shops & Establishments Recourse" },
    { id: "insolvency-treatment", title: "Expense Claims in Insolvency (IBC)" },
    { id: "unjust-enrichment", title: "Unjust Enrichment & Section 70" },
    { id: "corporate-fraud-cheating", title: "Corporate Fraud & BNS Criminality" },
    { id: "serving-legal-notice", title: "Serving a Strategic Legal Notice" },
    { id: "digital-audit-trail", title: "Digital Audit Trails & Admissibility" },
    { id: "case-studies", title: "Success Case Studies" },
    { id: "reviews-section", title: "Client Reviews" },
    { id: "our-reimbursement-assistance", title: "Why Choose Us?" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Reimbursement Claims", href: "/recovery/employment-reimbursement-claims" },
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
              Recover Unpaid <span className="text-[#DC2626]">Employee Reimbursements</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did you spend personal funds on company travel, client acquisition, WFH setup, or relocation? Get advocate-backed representation to serve legal notices and recover your outstanding reimbursement dues.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Expense Recovery
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
                
                {/* Section 1: Overview of Reimbursement Dues */}
                <section id="reimbursement-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview of Reimbursement Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern corporate ecosystem, employees frequently spend their personal savings to keep business operations running smoothly. Whether it is booking international flights for sales pitches, paying vendor invoices during emergencies, hosting clients for business development, setting up high-speed internet for work-from-home, or shifting household goods during relocation, these out-of-pocket expenses are made with the clear promise of reimbursement. According to basic contractual and social security norms, these expenditures represent interest-free personal loans extended by the employee to their employer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unfortunately, employee expense reimbursement defaults have become a widespread issue in startups, medium enterprises, and multinational corporations alike. Companies facing cash flow shortages or entering layoffs frequently look for ways to trim expenses, and withholding employee reimbursements is a common tactic. Since these funds are out-of-pocket expenses, withholding them directly depletes the employee&apos;s personal savings. Employers often exploit internal policies, claim lost receipts, or cite resignation as grounds to deny these claims, leaving employees frustrated and unpaid.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in corporate labor rights and debt recovery. We guide professionals through the process of compiling digital audit trails, executing pre-litigation demands, serving formal advocate notices to corporate boards, and pursuing recovery actions before Labour Commissioners and Civil Courts. This guide provides an exhaustive review of your legal rights and remedies to recover unpaid employee reimbursement claims.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A company cannot use corporate policies or employee resignation to permanently retain personal funds spent by an employee on corporate operations. Withholding verified business reimbursements is a breach of contract and constitutes unjust enrichment.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Categories of Reimbursable Expenses */}
                <section id="categories-of-expenses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Categories of Reimbursable Expenses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employee reimbursement claims fall into several major categories, each with specific documentation standards:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Business Travel &amp; Conveyance:</strong> Flights, trains, cab fares (Ola/Uber), fuel allowances, hotel stays, and daily allowances (per diem) incurred for business trips.</li>
                      <li><strong>Client Entertainment &amp; Business Development:</strong> Cost of hosting clients, meals, team dinners, or marketing events authorized by management to secure business contracts.</li>
                      <li><strong>Relocation &amp; Shifting Allowances:</strong> Costs associated with transfer, including packing and moving charges, family transport tickets, brokerage fees, and temporary guesthouse accommodation promised during recruitment.</li>
                      <li><strong>Work from Home (WFH) &amp; Utility Allowances:</strong> Office desks, chairs, high-speed broadband installation, monthly internet bills, and mobile connections mandated to execute daily operations remotely.</li>
                      <li><strong>Professional Development:</strong> Certification fees, subscription tools, or training costs authorized in writing by the manager to upgrade skills.</li>
                      <li><strong>Out-of-Pocket Procurement:</strong> Emergency payments made by employees directly to vendors, SaaS software platforms, or stationery shops on behalf of the company.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3: Contractual & Policy Frameworks */}
                <section id="policy-contract-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Contractual &amp; Policy Frameworks</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the eyes of the law, the employment relationship is governed by a contract. This contract is not limited to the initial offer letter or appointment letter; it extends to the company&apos;s <strong>Employee Handbook</strong>, <strong>Travel Policy</strong>, <strong>Relocation Policy</strong>, and standard operating procedures. Once these policies are published by the company, they are legally binding on both the employer and the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employee incurs expenses within the limits defined by the Travel or Expense Policy, the company has a contractual obligation to reimburse them. An employer cannot retroactively change their policies or apply new rules to deny claims that were validly submitted under the policy in force when the expense was incurred. Unilateral changes to policies to deny claims constitute a breach of contractual terms under the <strong>Indian Contract Act, 1872</strong>.
                    </p>
                  </div>
                </section>

                {/* Section 4: Reimbursements vs Wages Definition */}
                <section id="legal-standing-wages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Reimbursements vs Wages Definition</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding the legal distinction between &apos;wages&apos; and &apos;reimbursements&apos; is critical for selecting the right recovery forum. Under Section 2(vi) of the <strong>Payment of Wages Act, 1936</strong>, wages are defined as all remunerations payable to an employee for services rendered. Crucially, the Act explicitly <strong>excludes</strong> the following from the definition of wages:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li>The value of any house accommodation, supply of light, water, medical attendance or other amenity.</li>
                      <li>Any travelling allowance or the value of any travelling concession.</li>
                      <li>Any sum paid to the employed person to defray special expenses entailed on him by the nature of his employment.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because business expenses and travel allowances are excluded from the definition of wages, they cannot be claimed under standard Payment of Wages petitions before the Authority. Instead, they must be recovered as a breach of contract under civil law, or as outstanding operational dues during settlement disputes under State Shops and Establishments rules.
                    </p>
                  </div>
                </section>

                {/* Section 5: Common Delay & Rejection Tactics */}
                <section id="employer-delay-tactics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Common Delay &amp; Rejection Tactics</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Defaulter employers use a variety of administrative and procedural loopholes to delay or reject valid expense claims:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>The &apos;Lost Receipt&apos; Argument:</strong> Citing the loss of a physical bill as grounds to reject the entire claim, despite digital invoices (PDFs/emails) and bank statements proving the transaction.</li>
                      <li><strong>Retroactive Caps:</strong> Applying budget caps or policy changes retroactively to claims that were already authorized and submitted under the previous limits.</li>
                      <li><strong>Resignation Penalty:</strong> Claiming that once an employee submits their resignation, all pending expense claims are frozen or forfeited under &quot;management discretion.&quot;</li>
                      <li><strong>Clawback Exploitation:</strong> Arbitrarily adjusting relocation shifting expenses against notice period buyout costs, even when termination was initiated by the company.</li>
                      <li><strong>Infinite Audit Loop:</strong> Keeping claims in a perpetual state of audit, asking for repetitive proofs or justifications to delay payouts indefinitely.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team identifies these tactics and compiles evidence to counter each corporate excuse, demonstrating that company policies cannot override statutory recovery rights.
                    </p>
                  </div>
                </section>

                {/* Section 6: Compiling Bulletproof Evidence */}
                <section id="evidence-compilation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Compiling Bulletproof Evidence</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before serving a legal notice or filing a recovery suit, you must compile solid evidence to establish the debt. Collect the following documents:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Written Policy Documents:</strong> PDF copies of the company&apos;s Travel Policy, WFH Allowance Policy, and Employee Handbook.</li>
                      <li><strong>Managerial Approvals:</strong> Emails, Slack messages, or MS Teams chats showing the manager authorizing the travel, client dinner, or certification.</li>
                      <li><strong>Expense Portal Records:</strong> Screenshots of the company&apos;s expense portal (Concur, Happay, Zoho Expense) showing claims marked as &apos;Approved,&apos; &apos;Verified,&apos; or &apos;Pending Disbursement.&apos;</li>
                      <li><strong>Invoices and Receipts:</strong> PDF invoices, boarding passes, cab receipts, and merchant bills.</li>
                      <li><strong>Payment Proof:</strong> Bank account statements or credit card statements showing that you paid the vendor out of your personal accounts.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7: Internal Escalation & Auditing */}
                <section id="pre-litigation-steps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Internal Escalation &amp; Auditing</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A structured, documented escalation process shows courts that you acted in good faith. We recommend a 3-step internal escalation audit:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>First Written Demand (Day 1-10):</strong> Send an email to the expense audit and finance team, copying your reporting manager. List the exact Claim IDs, amounts, and approval dates. Demand clearance within 7 days.</li>
                      <li><strong>HR &amp; Finance Head Escalation (Day 11-20):</strong> If ignored, escalate to the Chief Financial Officer (CFO) and Chief Human Resources Officer (CHRO). Attach the policy guidelines and portal screenshots proving the claims were approved.</li>
                      <li><strong>Pre-Notice Warning (Day 21-30):</strong> Send a final warning email to the corporate board. State that if the outstanding dues are not credited to your account within 5 days, you will be forced to initiate legal recovery proceedings.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 8: Breach of Contract (Section 73) */}
                <section id="breach-of-contract" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Breach of Contract (Section 73)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The core legal foundation for recovering expense claims is breach of contract. Under <strong>Section 73 of the Indian Contract Act, 1872</strong>, when a contract has been broken, the party who suffers by such breach is entitled to receive, from the party who has broken the contract, compensation for any loss or damage caused to him thereby.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      By failing to reimburse business expenses incurred as per company policy, the employer violates the contract of employment. The employee has a legal right to claim compensation, which includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The <strong>principal amount</strong> of the approved reimbursements.</li>
                      <li><strong>Interest damages</strong> (typically 12% to 18% per annum) if the employee had to pay credit card interest due to corporate delay.</li>
                      <li>Legal expenses incurred to recover the dues.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9: Summary Suits (Order 37 CPC) */}
                <section id="summary-suit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Summary Suits (Order 37 CPC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For quick recovery of outstanding expenses, filing a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong> is highly effective. A summary suit can be filed for the recovery of a liquidated amount of money arising on a written contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key features of a summary suit include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The employer (defendant) cannot file a defense automatically. They must apply for <strong>&apos;Leave to Defend&apos;</strong> within 10 days of receiving the summons.</li>
                      <li>To get leave, the employer must prove they have a substantial defense. If the court finds their defense is a sham (e.g. denying claims that their own portal marks as approved), the court will dismiss the application and pass a decree in favor of the employee immediately.</li>
                      <li>This bypasses lengthy trials, resulting in recovery within 6 to 12 months.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10: Shops & Establishments Recourse */}
                <section id="shops-establishments-recourse" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Shops &amp; Establishments Recourse</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employees working in commercial establishments, shops, IT parks, or corporate offices can file complaints under their respective state&apos;s <strong>Shops and Establishments Act</strong>. Under these acts, withholding statutory benefits, contractual salaries, or authorized operational expenses during full and final (FNF) settlements represents a major compliance violation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The employee can submit a petition to the local <strong>Labour Inspector or Assistant Labour Commissioner</strong>. The Inspector holds the authority to summon HR and finance representatives, audit payroll books, and direct the company to clear the outstanding dues to avoid business license suspension or heavy fines.
                    </p>
                  </div>
                </section>

                {/* Section 11: Expense Claims in Insolvency (IBC) */}
                <section id="insolvency-treatment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Expense Claims in Insolvency (IBC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If a company enters bankruptcy or insolvency under the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>, employee expense claims are categorized as operational debts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While salaries of workmen have high priority under the distribution waterfall (Section 53 IBC), other employee out-of-pocket reimbursements must be formally submitted to the Resolution Professional (RP). Employees must file <strong>Form D (Claim by Operational Creditor)</strong> along with bank statements and portal approvals to register their claims and secure their share of payouts during corporate liquidation.
                    </p>
                  </div>
                </section>

                {/* Section 12: Unjust Enrichment & Section 70 */}
                <section id="unjust-enrichment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Unjust Enrichment &amp; Section 70</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 70 of the Indian Contract Act, 1872</strong>, if a person lawfully does anything for another person, or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation to the former in respect of, or to restore, the thing so done or delivered.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This principle of quasi-contract prevents <strong>Unjust Enrichment</strong>. When an employee uses their personal money to pay for business trips, client meetings, or vendor services, they clearly do not intend to do so for free. Since the company enjoys the commercial benefits of those actions (such as client signings or business expansion), it cannot retain the employee&apos;s funds. The court will enforce the company&apos;s obligation to reimburse the employee.
                    </p>
                  </div>
                </section>

                {/* Section 13: Corporate Fraud & BNS Criminality */}
                <section id="corporate-fraud-cheating" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Corporate Fraud &amp; BNS Criminality</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding out-of-pocket expenses is not just a civil breach; it can escalate to a criminal offense if there is fraudulent intent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly the IPC):
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316 BNS):</strong> If an employer entrusts an employee with corporate travel or client management, induces them to pay from personal funds with a promise of reimbursement, and subsequently pocket the money or refuse to pay, it constitutes a criminal breach of trust.</li>
                      <li><strong>Cheating (Section 318 BNS):</strong> If management induces the employee to spend personal savings on company assets or SaaS licenses while secretly intending to layoff the employee or withhold reimbursements, it constitutes cheating.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a police complaint or warning of criminal BNS filings in the legal notice is highly effective in forcing startup founders and board directors to settle outstanding expense bills quickly.
                    </p>
                  </div>
                </section>

                {/* Section 14: Serving a Strategic Legal Notice */}
                <section id="serving-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving a Strategic Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When internal follow-ups and escalation emails fail to yield results, serving a formal <strong>Legal Notice</strong> is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 15: Digital Audit Trails & Admissibility */}
                <section id="digital-audit-trail" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Digital Audit Trails &amp; Admissibility</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In modern employment disputes, the paper trail is almost entirely digital. Corporate communications occur over email, Slack channels, Microsoft Teams, and WhatsApp. It is a common concern among employees whether these digital conversations hold weight in a court of law. The answer is a resounding yes, provided they are formatted and backed by the correct legal certificates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 63 of the Bharatiya Nyaya Sanhita, 2023</strong> (formerly Section 65B of the Indian Evidence Act, 1872), electronic records are fully admissible as secondary evidence in legal proceedings. To meet admissibility standards, you must present the digital printouts along with a signed electronic authenticity certificate. This certificate must confirm that the computer or device used to access the emails or portal was operating properly, and the record has not been tampered with.
                    </p>
                  </div>
                </section>

                {/* Section 16: Success Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Case Studies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 mb-2">Case Study 1: Recovery of Travel Expenses from an MNC</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          A senior sales manager was terminated during a reorganization. The company withheld ₹1,45,000 in flight and client entertainment expenses, claiming that he failed to submit them within the company&apos;s 30-day window. LegalRecovery served a formal notice citing the Limitation Act. The company cleared all his dues within 12 days to avoid a summary recovery suit.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 mb-2">Case Study 2: Relocation Allowance Claim</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          A software engineer resigned within 10 months. The company clawed back ₹85,000 relocation expenses. LegalRecovery analyzed the contract, showing that clawback only applied to termination for cause. A legal notice forced the company to refund the clawed-back amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 17: Client Reviews */}
                <section id="reviews-section" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {reviewSchema.review.map((rev, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 text-amber-500 mb-3">
                            {"★".repeat(Number(rev.reviewRating.ratingValue))}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                        </div>
                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <span className="text-xs font-black text-slate-950 block">{rev.author.name}</span>
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-0.5 block">Verified Client</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 18: Our Legal Assistance Approach */}
                <section id="our-reimbursement-assistance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we combine legal expertise with technology to provide the most efficient recovery services for employees. Our structured approach includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Policed Claims Audit:</strong> We audit your invoices, bank transactions, and portal approvals to calculate the exact legally enforceable debt.</li>
                      <li><strong>Advocate Drafts:</strong> Custom notices prepared by specialized corporate and labor advocates on official letterheads.</li>
                      <li><strong>Personal Director Service:</strong> We dispatch notices directly to active board directors at their residential addresses, piercing the corporate veil.</li>
                      <li><strong>Parallel Filings:</strong> Coordinating complaints to local Labour departments and preparation of summary recovery suits.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 19: Frequently Asked Questions */}
                <section id="faqs-section" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Frequently Asked Questions</h2>
                  <div className="space-y-4 mt-6">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={index} className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5 text-left font-extrabold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
                          >
                            <span>{faq.question}</span>
                            <span className="text-[#DC2626] text-xl font-bold ml-2">
                              {isExpanded ? "−" : "+"}
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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

            {/* Right Sidebar - Action Box */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white p-6 rounded-3xl shadow-md border border-slate-800 text-center">
                <span className="inline-block bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Recover Dues Online
                </span>
                <h3 className="text-lg font-black tracking-tight mb-2">Notice Campaign</h3>
                <p className="text-xs text-slate-400 font-medium mb-6 leading-relaxed">
                  Draft and send professional legal notices to the corporate directors within 24 hours.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-semibold">Campaign Fee:</span>
                    <span className="font-extrabold">₹1,999 (All Inclusive)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-semibold">Success Rate:</span>
                    <span className="font-extrabold text-green-400">85% Amicable Settle</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-semibold">TAT:</span>
                    <span className="font-extrabold">24 Working Hours</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wider"
                >
                  Start Campaign
                </button>
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
