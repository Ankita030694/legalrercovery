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
    question: "Is it legal for an company in India to take a security deposit from an employee?",
    answer: "Generally, taking a cash security deposit from an employee is considered a highly coercive and unfair labor practice. While some companies do it under the guise of an 'employment bond' or 'training bond,' they can only legally enforce it to recover actual, documented training expenses. If no specialized training was provided, the company cannot legally withhold or forfeit your security deposit."
  },
  {
    question: "Can an employer deduct a security deposit from my monthly salary?",
    answer: "No, monthly deductions from your salary to build a security deposit violate Section 7 of the Payment of Wages Act, 1936. The Act lists permissible deductions (like tax, provident fund, or advances), and 'employee security deposits' are not included. Any such deduction made without government approval is illegal."
  },
  {
    question: "What should I do if my employer is holding my original educational certificates?",
    answer: "Withholding an employee's original educational certificates (degrees, marksheets, or passports) is illegal and constitutes a violation of your fundamental Right to Livelihood under Article 21 of the Constitution. You should immediately send a formal legal notice demanding their return. If they refuse, you can file a complaint with the Labour Commissioner and lodge a police complaint for Criminal Breach of Trust."
  },
  {
    question: "Can an company file a case against me for breaking an employment bond?",
    answer: "An employer can only file a case to recover proportionate training costs if they spent significant, documented funds on your specialized training and you left before the bond period ended. If they did not provide any training, or if they demand an arbitrary, excessive penalty, the bond is considered invalid and unenforceable under Section 74 of the Indian Contract Act, 1872."
  },
  {
    question: "What if the company threatens to bounce a security cheque I gave them?",
    answer: "Many employers ask for blank security cheques at the time of joining and threaten to file a cheque bounce case under Section 138 of the Negotiable Instruments Act if you resign early. Legally, a security cheque cannot be used to enforce an invalid contract or penalty. You should immediately send a written letter revoking the authorization of that cheque and instruct your bank to 'stop payment' to protect yourself."
  },
  {
    question: "What is the time limit to file a suit to recover my security deposit?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or summary suit to claim a refund of your security deposit is three (3) years from the date the payment was due to be refunded (typically your last working day or the completion of the bond period)."
  },
  {
    question: "Does the Supreme Court support employment bonds?",
    answer: "The Supreme Court of India (e.g., in Vijaya Bank & Anr. v. Prashant B. Narnaware) has held that employment bonds are enforceable only if they are reasonable, proportionate, and intended to recover actual expenses incurred by the employer on training. The court does not support arbitrary penalties or excessive bond periods that restrict an employee's freedom of trade."
  },
  {
    question: "How do I prove that I paid a security deposit if the company didn't give me a receipt?",
    answer: "You can prove the payment using bank transaction records (online transfer receipts), salary slips showing monthly deductions labeled as 'security deposit' or 'retention money,' and email exchanges with HR or management acknowledging the deposit amount."
  },
  {
    question: "Can the Labour Commissioner help me get my original certificates back?",
    answer: "Yes, the Labour Commissioner and Shops and Establishments inspectors have the power to summon employers who indulge in unfair labor practices like holding original certificates. They can direct the company to return the documents immediately during conciliation proceedings."
  },
  {
    question: "What is the criminal section for an employer withholding personal documents?",
    answer: "Under the Bharatiya Nyaya Sanhita (BNS), 2023, withholding an employee's original personal certificates constitutes Criminal Breach of Trust under Section 316 (formerly Section 406 of the IPC). It is a criminal offense punishable by imprisonment of up to three years, a fine, or both."
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
      "name": "Security Deposit Recovery",
      "item": "https://www.legalrecovery.in/recovery/security-deposit"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Employee Security Deposit & Withheld Certificates: Legal Remedies in India",
  "description": "Exhaustive legal guide on recovering security deposits, salary deductions, and withheld original educational certificates from employers in India.",
  "image": "https://www.legalrecovery.in/og-security-deposit.png",
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
  "name": "Security Deposit Recovery Services",
  "image": "https://www.legalrecovery.in/og-security-deposit.png",
  "description": "Professional legal assistance to recover employee security deposits, monthly salary deductions, and withheld educational certificates in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "940"
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
        "name": "Rahul Verma"
      },
      "reviewBody": "My employer withheld ₹50,000 which they deducted from my salary as a security deposit for a bond. LegalRecovery served a formal notice and I got my refund within 10 days without going to court."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Simran Kaur"
      },
      "reviewBody": "They refused to return my original B.Tech degree certificates because I resigned before the 2-year bond. LegalRecovery drafted a notice highlighting BNS criminal sections, and HR returned my documents the next day!"
    }
  ]
};

export default function SecurityDepositClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "security-deposit-introduction", title: "Introduction" },
    { id: "types-of-security-deposits", title: "Types of Deposits" },
    { id: "legality-of-salary-deductions", title: "Payment of Wages Act" },
    { id: "employment-bonds-enforceability", title: "Bond Enforceability" },
    { id: "withholding-original-certificates", title: "Withholding Certificates" },
    { id: "constitutional-right-to-livelihood", title: "Right to Livelihood" },
    { id: "section27-contract-act-restraint", title: "Restraint of Trade Laws" },
    { id: "evidence-needed-deposit-recovery", title: "Evidence Checklist" },
    { id: "limitation-deposit-recovery", title: "Limitation Periods" },
    { id: "summary-suits-deposit-recovery", title: "Order 37 Summary Suits" },
    { id: "labour-commissioner-deposit-disputes", title: "Labour Commissioner Role" },
    { id: "bns-criminal-breach-trust-certificates", title: "Criminal Action under BNS" },
    { id: "negotiable-instruments-cheque-abuse", title: "Cheque Abuse Counters" },
    { id: "supreme-court-precedents-bonds", title: "Judicial Precedents" },
    { id: "state-shops-acts-prohibitions", title: "State-Specific Rules" },
    { id: "taxation-tds-refunded-deposits", title: "Tax & TDS Rules" },
    { id: "international-remote-bonds", title: "Foreign Contracts & Bonds" },
    { id: "arbitration-employment-bonds", title: "Arbitration Clauses" },
    { id: "step-by-step-escalation-deposit", title: "Step-by-Step Escalation" },
    { id: "security-deposit-case-studies", title: "Deposit Recovery Cases" },
    { id: "security-deposit-testimonials", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-deposits", title: "Why LegalRecovery?" },
    { id: "security-deposit-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Security Deposit Recovery", href: "/recovery/security-deposit" }
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
              India&apos;s Premium Legal Tech Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Your <span className="text-[#DC2626]">Security Deposit & Certificates</span> From Employer
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did your employer withhold your security deposit, deduct retention money, or lock away your original educational marksheets? Get veteran legal advocacy backed by state-of-the-art technology.
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
                
                {/* Introduction */}
                <section id="security-deposit-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Entering a new employment relationship is meant to be a professional partnership built on mutual value and legal respect. However, a highly coercive practice continues to plague the Indian corporate and industrial sectors, particularly affecting fresh graduates, software developers, and entry-level professionals. To prevent employees from resigning, corporate entities frequently demand monetary security deposits, deduct monthly retention amounts from salaries, enforce punitive training bonds, or physically seize original educational marksheets and degrees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These practices are designed to hold the employee hostaged within the organization, creating a modern form of corporate servitude. When an employee decides to resign due to better opportunities, toxic work environments, or personal reasons, HR and finance departments frequently refuse to refund the deposit, invoke arbitrary bond penalties, or withhold the employee&apos;s original academic documents. This leaves the employee facing severe professional stagnation and financial loss.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is vital to understand that your security deposits and original certificates are your personal property. Withholding them under the guise of an employment bond or notice period default is, in most cases, completely illegal and unenforceable. The Indian legal system provides clear protections against such coercive practices. At LegalRecovery, we help employees navigate the complex legal frameworks under contract law, labor codes, and criminal statutes to recover their security deposits and secured certificates swiftly.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A security deposit or educational certificate is not corporate collateral. Withholding an employee&apos;s personal documents or earned salary as a retention measure is a direct breach of contract, a violation of the fundamental Right to Livelihood, and a criminal breach of trust under Indian law.&quot;
                    </div>
                  </div>
                </section>

                {/* Types of Deposits */}
                <section id="types-of-security-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Types of Deposits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers utilize various methods to secure financial leverage over employees. Understanding how your deposit was collected is critical to determining the appropriate legal strategy for recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The three most common forms of employee security deposits in India are:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Upfront Cash Deposits:</strong> Demanding a lump-sum amount (ranging from ₹20,000 to over ₹1,000,000) at the time of joining as a condition for issuing the appointment letter. This is often labeled as a &quot;training deposit&quot; or &quot;security bond.&quot;</li>
                      <li><strong>Monthly Salary Deductions:</strong> Deducting a fixed portion of the employee&apos;s monthly salary (e.g., ₹5,000 per month) for the first year of employment. This is commonly referred to as &quot;retention money&quot; or &quot;accruing security deposit.&quot;</li>
                      <li><strong>Post-Dated Security Cheques:</strong> Forcing the employee to sign and hand over one or more blank, post-dated cheques during onboarding. The company then threatens to file criminal cheque bounce charges if the employee resigns before the contract period.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      All three methods are highly coercive. Regardless of the label used in your employment contract, the company cannot legally forfeit these deposits unless they can prove actual, reasonable financial losses directly related to specialized training or onboarding costs. We assist clients by auditing their contract terms, analyzing transaction trails, and targeting the specific type of deposit for recovery.
                    </p>
                  </div>
                </section>

                {/* Payment of Wages Act */}
                <section id="legality-of-salary-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Payment of Wages Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer deducts a security deposit directly from your monthly earnings, they violate central labor legislation. The primary law protecting employees against arbitrary salary deductions is the <strong>Payment of Wages Act, 1936</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 7</strong> of the Payment of Wages Act explicitly lists the only permissible deductions an employer can make from an employee&apos;s wages. These include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Deductions for income tax, professional tax, or other statutory dues.</li>
                      <li>Deductions for contributions to Employees&apos; Provident Fund (EPF) and ESI.</li>
                      <li>Deductions for recovery of advances or loans granted by the employer.</li>
                      <li>Deductions authorized by a court order or the government.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      A &quot;security deposit,&quot; &quot;retention fund,&quot; or &quot;performance bond deduction&quot; is <strong>not</strong> included in Section 7. Therefore, any monthly deduction made from your salary to build a security deposit is a direct violation of the law, even if you signed a contract authorizing it. Contract clauses that violate statutory laws are void from the beginning.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We help clients identify these illegal deductions in their salary slips. We draft formal representations to the employer pointing out the violations of the Payment of Wages Act, which often prompts immediate refunds to avoid labor inspector audits and statutory fines.
                    </p>
                  </div>
                </section>

                {/* Bond Enforceability */}
                <section id="employment-bonds-enforceability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Bond Enforceability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often justify withholding security deposits by pointing to employment or training bonds. These bonds require an employee to serve a minimum period (often 1 to 3 years) or pay a financial penalty if they leave early. However, under Indian contract jurisprudence, the enforceability of these bonds is highly restricted.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, an employer cannot enforce a bond penalty simply because the contract was broken. For an employment bond to be legally valid and enforceable, the employer must prove:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Actual Expenses:</strong> The company spent specific, documented funds on providing specialized, out-of-the-ordinary training to the employee. Regular on-the-job training or basic orientation does not qualify.</li>
                      <li><strong>Reasonable Damages:</strong> The penalty claimed in the bond is a reasonable estimate of the actual loss suffered by the company, rather than a punitive fine.</li>
                      <li><strong>Proportionate Recovery:</strong> If the employee has completed a portion of the bond period, the recovery amount must be reduced proportionately.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company did not spend money on specialized training, or if they demand the entire bond amount as a penalty without proving actual loss, the bond is void. The company cannot legally forfeit your security deposit under the guise of bond enforcement. We draft comprehensive legal defenses citing Section 74 to nullify these invalid bonds.
                    </p>
                  </div>
                </section>

                {/* Withholding Certificates */}
                <section id="withholding-original-certificates" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Withholding Certificates</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most coercive and legally indefensible practices in the employment sector is the physical retention of an employee&apos;s original educational certificates, marksheets, or passports. Employers frequently demand these documents during onboarding, claiming they are needed for &quot;safe custody&quot; or to &quot;verify credentials,&quot; and then refuse to return them when the employee resigns.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This practice is <strong>completely illegal</strong>. Educational degrees, marksheets, and identity documents are your personal property. An employer has no ownership rights over them under any circumstances. Even if you have signed an employment bond or are in a notice period dispute, the company cannot legally hold your certificates as leverage.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding original certificates is a coercive tactic that acts as an invalid restraint of your freedom to work. Regulatory bodies like the University Grants Commission (UGC) and the All India Council for Technical Education (AICTE) have issued strict guidelines prohibiting institutions and associated employers from retaining original documents of candidates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we treat certificate withholding as a priority case. We draft urgent demand notices pointing out the illegality of document retention, which carries serious civil and criminal consequences for the company&apos;s management.
                    </p>
                  </div>
                </section>

                {/* Right to Livelihood */}
                <section id="constitutional-right-to-livelihood" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Right to Livelihood</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The practice of holding an employee&apos;s educational certificates or enforcing excessive bonds is not just a breach of contract; it is a violation of your fundamental constitutional rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Article 21 of the Constitution of India</strong>, every citizen is guaranteed the Right to Life, which the Supreme Court has repeatedly interpreted to include the <strong>Right to Livelihood</strong>. Your educational degrees and professional certificates are essential tools for earning a livelihood. When an employer physically retains these documents, they prevent you from seeking alternative employment, registering for higher education, or practicing your profession.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      By blocking your ability to work elsewhere, the employer deprives you of your livelihood without the authority of law. This elevates the dispute from a private contractual matter to a violation of constitutional rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In cases involving government or public sector entities, we file Writ Petitions (specifically a Writ of Mandamus) under Article 226 of the Constitution before the High Court, seeking urgent directions to compel the immediate release of the withheld certificates.
                    </p>
                  </div>
                </section>

                {/* Restraint of Trade Laws */}
                <section id="section27-contract-act-restraint" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Restraint of Trade Laws</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect their business interests, companies often include restrictive clauses in employment agreements. These include non-compete clauses (preventing you from working for a competitor) and non-solicitation clauses. When combined with an employment bond, these clauses act as barriers to professional exit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These restrictions are governed by <strong>Section 27 of the Indian Contract Act, 1872</strong>. Section 27 explicitly states that any agreement that restricts a person from exercising a lawful profession, trade, or business of any kind is <strong>void</strong> to that extent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts have consistently upheld this principle. While an employer can protect confidential business data or trade secrets, they cannot prevent an employee from using their skills and experience to seek other employment. Post-employment non-compete clauses are completely unenforceable in India.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer forfeits your security deposit or threatens legal action based on a non-compete clause, they violate Section 27. We help employees challenge these void clauses and ensure their right to practice their profession is protected.
                    </p>
                  </div>
                </section>

                {/* Evidence Checklist */}
                <section id="evidence-needed-deposit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover a security deposit or withheld certificates, you must compile a structured paper trail. This evidence is crucial to support your legal notice and represent your case in court or before labor authorities.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Essential evidence to gather includes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Deposit & Bond Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Signed employment agreement or bond contract.</li>
                          <li>Online transfer receipts for upfront security deposits.</li>
                          <li>Salary slips showing monthly security or retention deductions.</li>
                          <li>Email confirmations from HR acknowledging receipt of the deposit.</li>
                          <li>Photocopies or scan copies of the handed-over certificates.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Separation & Communication Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Document submission receipts or certificate handover sheets.</li>
                          <li>Resignation email, exit clearance logs, and IT sign-offs.</li>
                          <li>Emails or WhatsApp messages where you requested the return of your deposit/certificates and the company refused.</li>
                          <li>Stop-payment request confirmations sent to your bank for security cheques.</li>
                          <li>Timeline of events documenting when and to whom the documents were given.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-deposit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every claim for the recovery of money or documents is subject to strict statutory timelines. Under the <strong>Limitation Act, 1963</strong>, you must initiate legal action within a specific period, or you lose the right to seek remedies in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For civil recovery suits and summary suits to claim a refund of your security deposit, the limitation period is <strong>three (3) years</strong>. This period begins from the date the refund became due under the contract—typically your last working day or the completion of the contract period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For the recovery of physical documents (like educational certificates), the limitation period to file a suit for recovery of movable property is also <strong>three (3) years</strong> from the date you demanded their return and the employer refused.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, if the employer sends a written acknowledgment of the deposit or promises to refund it at a future date before the three-year window expires, a fresh limitation period of three years begins from the date of that acknowledgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We advise taking legal action as soon as the standard exit clearance window (30-45 days) expires, as delaying can lead to loss of evidence and complicate recovery.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="summary-suits-deposit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees and consultants seeking a refund of upfront cash security deposits or accumulated salary deductions, the civil court process offers a fast-track remedy: the <strong>Summary Suit under Order 37 of the CPC</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is designed specifically for recovering liquidated monetary claims—claims where the exact debt is fixed and documented—arising from written contracts, invoices, or receipts. This makes it an effective tool for recovering security deposits where the amount is clearly stated in the employment agreement or bank transfer receipts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedure in a Summary Suit differs from ordinary civil suits:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons of Appearance:</strong> Once the suit is filed, the defendant company must enter an appearance within 10 days of receiving the summons.</li>
                      <li><strong>No Automatic Right to Defend:</strong> The defendant does not have an automatic right to file a written statement. They must apply to the court for &quot;leave to defend&quot; by demonstrating a genuine, triable defense.</li>
                      <li><strong>Quick Judgment:</strong> If the defendant fails to enter an appearance within 10 days, or if the court rejects their application for leave to defend, the allegations in the plaint are deemed admitted, and the court passes a judgment in favor of the plaintiff.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This fast-track mechanism prevents companies from using delaying tactics in court. LegalRecovery&apos;s legal team drafts and files summary suits to secure quick judgments for our clients.
                    </p>
                  </div>
                </section>

                {/* Labour Commissioner Role */}
                <section id="labour-commissioner-deposit-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Commissioner Role</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to comply with a legal notice demanding the return of your deposit or certificates, you can seek assistance through the state&apos;s labor administration. The government provides a mediation mechanism through the Office of the Labour Commissioner.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file a formal complaint with the local labor office under the state&apos;s <strong>Shops and Commercial Establishments Act</strong>. Shops inspectors and Assistant Labour Commissioners have the statutory power to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summon Employers:</strong> Issue directions to the employer&apos;s management to appear for joint conciliation meetings.</li>
                      <li><strong>Conduct Inspections:</strong> Audit the company&apos;s payroll registers, attendance books, and document clearance logs.</li>
                      <li><strong>Order Restitution:</strong> Direct the company to return the withheld educational certificates and refund illegal salary deductions immediately.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Labour Commissioner proceedings are less formal than court trials and are focused on achieving an amicable settlement. If the employer refuses to comply despite clear evidence of illegal document retention or salary deductions, the labor officer can initiate prosecution against the company. We help clients draft and file these administrative complaints.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-breach-trust-certificates" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While monetary recovery is primarily a civil matter, the physical withholding of an employee&apos;s original educational certificates constitutes a serious criminal offense under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key criminal provisions that apply to certificate withholding include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> This applies when you entrust your original educational documents to the employer for verification purposes, and they dishonestly retain or convert them for their own use (e.g., as leverage for a bond). Under Section 316, this is punishable by imprisonment of up to three years, a fine, or both.</li>
                      <li><strong>Cheating & Dishonestly Inducing Delivery of Property (Section 318, BNS):</strong> This applies if the company induced you to hand over your certificates by making false representations about verification policies, with the intent of holding them hostage.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To initiate criminal action, you can file a complaint under <strong>Section 173 of the BNSS, 2023</strong> at the local police station. The threat of criminal prosecution, which names the company&apos;s HR manager and directors personally, is a powerful motivator that often leads to the immediate return of withheld documents.
                    </p>
                  </div>
                </section>

                {/* Cheque Abuse Counters */}
                <section id="negotiable-instruments-cheque-abuse" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Cheque Abuse Counters</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common coercive tactic used by employers is to demand signed, blank cheques from employees at the time of joining as a &quot;security deposit.&quot; If the employee decides to resign before the contract or bond period ends, the employer threatens to write a large amount on the cheque, present it to the bank, and file a criminal cheque bounce case under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you face this threat, you must take immediate preventive steps. Under the law, a cheque bounce case is only valid if the cheque was issued to discharge a <strong>legally enforceable debt or liability</strong>. A penalty under an invalid employment bond is not a legally enforceable debt. If the company did not spend money on specialized training, they cannot legally present the cheque.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect yourself, you should take the following actions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Revoke Authorization:</strong> Send a formal email and registered letter to the company revoking their authorization to use the security cheque, stating that there is no legally enforceable debt.</li>
                      <li><strong>Stop Payment:</strong> Instruct your bank in writing to place a 'stop payment' order on the specific cheque numbers, citing 'revocation of security authorization.'</li>
                      <li><strong>Police Intimation:</strong> File a police complaint documenting that the company holds your security cheques and is threatening to misuse them.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Taking these steps builds a strong defense and makes it difficult for the company to prosecute you under Section 138. We guide clients through this process to protect them from cheque abuse.
                    </p>
                  </div>
                </section>

                {/* Judicial Precedents */}
                <section id="supreme-court-precedents-bonds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Judicial Precedents</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts have established a strong body of precedents protecting employees against coercive deposits and arbitrary bonds. Key judicial rulings to note include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Vijaya Bank & Anr. v. Prashant B. Narnaware:</strong> In this ruling, the Supreme Court of India affirmed that employment bonds are enforceable only if they are reasonable, proportionate, and intended to recover actual expenses incurred by the employer on training. The court does not support arbitrary penalties.</li>
                      <li><strong>Niranjan Shankar Golikari v. Century Spinning and Manufacturing Co. Ltd.:</strong> The Supreme Court clarified that while negative covenants (restrictions) are valid during the active term of employment to protect business interests, any restriction that extends post-employment is void under Section 27 of the Contract Act.</li>
                      <li><strong>SICPA India Limited v. Shri Devendra Dutt Pathak:</strong> The Delhi High Court held that an employer cannot claim the entire bond amount as a penalty unless they can show they suffered a loss equivalent to that amount. The court only allowed recovery of actual training costs.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These judgments show that the judiciary protects employees from arbitrary contracts. We cite these precedents in our legal notices to demonstrate to employers that their bonds and forfeitures are legally unsustainable.
                    </p>
                  </div>
                </section>

                {/* State-Specific Rules */}
                <section id="state-shops-acts-prohibitions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">State-Specific Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to central statutes like the Payment of Wages Act, private sector employment in India is regulated by state-specific <strong>Shops and Commercial Establishments Acts</strong>. These acts govern working hours, leaves, and exit settlements, and some states have specific provisions regarding deposits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For example:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Karnataka:</strong> The Karnataka Shops and Commercial Establishments Act prohibits employers from collecting cash security deposits from employees unless approved by the government for specific roles handling valuable assets.</li>
                      <li><strong>Maharashtra:</strong> Under the Maharashtra Shops and Establishments Act, employers are required to settle all exit dues within a specified time, and arbitrary withholding of salary or deposits is classified as an offense.</li>
                      <li><strong>Delhi & Tamil Nadu:</strong> Local shops inspectors have powers to inspect establishment registers and verify that no unauthorized salary deductions are being made.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We analyze the location of your employer&apos;s registered office to apply the correct state-specific provisions in our claims, increasing pressure through local administrative channels.
                    </p>
                  </div>
                </section>

                {/* Tax & TDS Rules */}
                <section id="taxation-tds-refunded-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Tax & TDS Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery or forfeiture of a security deposit involves tax implications under the <strong>Income Tax Act, 1961</strong>. Understanding how these transactions are classified is important for your tax filings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key tax rules include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Refunded Deposits:</strong> A security deposit is a capital receipt. When it is refunded to you, it is not taxable as income.</li>
                      <li><strong>Salary Deductions:</strong> If the deposit was built through monthly salary deductions, those deductions were made from your gross taxable salary. You have already paid income tax on that money. When the company refunds it, it must not be taxed again.</li>
                      <li><strong>Forfeitures:</strong> If the company illegally forfeits your deposit and you do not recover it, you can claim it as a capital loss in certain contexts. If the company pays you interest on delayed refunds, that interest is taxable under &quot;Income from Other Sources.&quot;</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We ensure that refunded deposits are correctly documented as refunds of capital receipts to prevent double taxation or incorrect TDS deductions by the employer.
                    </p>
                  </div>
                </section>

                {/* Foreign Contracts & Bonds */}
                <section id="international-remote-bonds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Foreign Contracts & Bonds</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      With the growth of remote work, many Indian software engineers and professionals work for foreign companies based in the US, UK, or Europe. To secure commitment, some foreign employers include security deposit or training bond clauses in remote service agreements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a foreign employer defaults on refunding a deposit or threatens to enforce a bond overseas, recovery can be complex. Because they lack a physical office in India, local labor inspectors cannot serve summonses easily. However, you still have options.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      First, we review the contract to identify the governing law. If the contract is governed by Indian law, we can initiate civil recovery proceedings. If governed by foreign law, we draft international demand notices citing relevant contract principles. Foreign companies are sensitive to international compliance and contract risks and often settle disputes to avoid legal issues.
                    </p>
                  </div>
                </section>

                {/* Arbitration Clauses */}
                <section id="arbitration-employment-bonds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Arbitration Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Modern employment contracts, especially for senior staff and executives, often contain an <strong>Arbitration Clause</strong>. This clause specifies that any dispute arising from the contract, including bond disputes and deposit claims, must be resolved through private arbitration rather than civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitration is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. If your contract has a valid arbitration clause, either party can apply to the court to refer the dispute to an arbitrator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While arbitration is private, it can be expensive as the parties must pay the arbitrator&apos;s fees. However, under Indian law, employment disputes involving traditional &quot;workmen&quot; are generally considered non-arbitrable, as they fall under the jurisdiction of public Labor Courts. Arbitration clauses are typically enforceable only for managerial staff, senior executives, and independent consultants. We help clients evaluate these clauses and represent them in the arbitration process if needed.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Escalation */}
                <section id="step-by-step-escalation-deposit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Step-by-Step Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your security deposit is withheld or certificates are detained, we recommend a structured escalation timeline:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-7 (Formal Demand Email):</strong> Send a formal email to HR and your manager requesting the return of your deposit/certificates, attaching proof of exit clearance.</li>
                      <li><strong>Day 8-15 (Revocation & Stop-Payment):</strong> If ignored, send a letter revoking authorization for any security cheques and instruct your bank to stop payment. Demand a written confirmation of document release.</li>
                      <li><strong>Day 16-30 (Legal Notice):</strong> Serve a formal legal notice through our advocate panel. This notice demands the return of documents and deposits within 15 days, citing BNS and Contract Act provisions.</li>
                      <li><strong>Day 30+ (Court/Labour Complaint):</strong> If the company fails to comply, file a complaint with the Labour Commissioner and, if certificates are held, lodge a police complaint for Criminal Breach of Trust.</li>
                    </ol>
                  </div>
                </section>

                {/* Deposit Recovery Cases */}
                <section id="security-deposit-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Deposit Recovery Cases</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 1: Certificate Release</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Withheld Original Marksheets Recovered from IT Firm</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A software trainee resigned from an IT services company after 6 months due to a medical emergency. The company refused to return his original educational certificates, demanding ₹1.5 Lakhs under an employment bond. LegalRecovery served an urgent legal notice citing Section 316 of the BNS (Criminal Breach of Trust). Realizing the criminal liability involved in retaining personal documents, the company returned the certificates within 3 days and waived the bond demand.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Salary Deductions Refund</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Recovered Monthly Security Deductions for Sales Executive</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A company deducted ₹3,000 per month from a sales executive&apos;s salary as 'retention money' for a 1-year bond. When she resigned after 10 months, the company forfeited the accumulated ₹30,000. LegalRecovery served a notice pointing out that monthly security deductions violate Section 7 of the Payment of Wages Act, 1936. The company settled the claim and refunded the entire amount to avoid labor inspector audits.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: Upfront Deposit Refund</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Upfront Training Deposit Recovered from Analytics Company</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A candidate paid ₹50,000 as an upfront security deposit when joining an analytics firm under a 2-year bond. He resigned after 8 months due to non-payment of regular incentives. The firm refused to refund the deposit. LegalRecovery filed a summary suit under Order 37 of the CPC based on the deposit receipt. The court directed the firm to show proof of actual training costs. Unable to provide proof, the company settled the dispute out of court, refunding the deposit with interest.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="security-deposit-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My employer withheld ₹50,000 which they deducted from my salary as a security deposit for a bond. LegalRecovery served a formal notice and I got my refund within 10 days without going to court.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rahul Verma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They refused to return my original B.Tech degree certificates because I resigned before the 2-year bond. LegalRecovery drafted a notice highlighting BNS criminal sections, and HR returned my documents the next day!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Simran Kaur</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They threatened to file a cheque bounce case using a security cheque I gave during onboarding. LegalRecovery helped me draft a stop-payment and revocation letter, and the company backed down immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Anand Joshi</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Recovered my upfront deposit of ₹1 Lakh from a coaching institute after I resigned. The process was completely transparent, and I tracked everything from my dashboard.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Meera Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Very professional legal service. They handled my educational document recovery case with extreme diligence. Highly recommended for any employment disputes.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Siddharth Sen</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They withheld my certificates and FNF. LegalRecovery sent a strong notice and got both my money and degrees returned in 2 weeks. Grateful for their help.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Pooja Roy</h4>
                    </div>
                  </div>
                </section>

                {/* Why LegalRecovery? */}
                <section id="why-choose-legalrecovery-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why LegalRecovery?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran advocates with advanced workflow automation to deliver speed, transparency, and resolution rates that traditional law firms cannot match. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Expert Panel Advocates:</strong> Your notices are drafted and reviewed by experienced labor and contract attorneys, ensuring precise statutory citations.</li>
                      <li><strong>Multi-Channel Escalations:</strong> We do not just email HR. We dispatch physical registered letters to the registered company office and personal residences of all active directors to maximize pressure.</li>
                      <li><strong>Real-Time Tracking:</strong> Track the drafting progress, post office dispatch status, and delivery of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no hidden surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="security-deposit-faqs" className="scroll-mt-32">
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
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your security deposit or bond recovery case with legal experts. We serve verified notices with full compliance support.
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
