'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema rewritten for high readability
const faqs = [
  {
    question: "Is it legal for an company in India to take a security deposit from an employee?",
    answer: "Taking cash security deposits from employees is generally an unfair labour practice. Employers can only enforce training bonds to recover actual, documented training costs. If no specialized training occurred, the company cannot legally withhold your deposit."
  },
  {
    question: "Can an employer deduct a security deposit from my monthly salary?",
    answer: "No. Monthly salary deductions for security deposits violate Section 7 of the Payment of Wages Act 1936. The Act lists permitted deductions like taxes and provident funds. Arbitrary deductions without government permission are unlawful."
  },
  {
    question: "What should I do if my employer is holding my original educational certificates?",
    answer: "Withholding an employee's original marksheets or degrees is illegal. It violates your constitutional Right to Livelihood under Article 21. Send a formal legal notice immediately demanding their return. You can also file a police complaint for criminal breach of trust."
  },
  {
    question: "Can an company file a case against me for breaking an employment bond?",
    answer: "A company can only sue to recover actual, documented training expenses. If they provided no specialized training, the bond is unenforceable. Under Section 74 of the Indian Contract Act, courts reject arbitrary penalty claims."
  },
  {
    question: "What if the company threatens to bounce a security cheque I gave them?",
    answer: "Security cheques cannot enforce invalid bond penalties. Send an email immediately revoking your cheque authorization. Instruct your bank to place a stop-payment order. File a police complaint if the employer threatens cheque bounce action."
  },
  {
    question: "What is the time limit to file a suit to recover my security deposit?",
    answer: "Under the Limitation Act 1963, you have three years to file a recovery suit. The clock starts from your last working day or the date your refund became due."
  },
  {
    question: "Does the Supreme Court support employment bonds?",
    answer: "The Supreme Court enforces bonds only if they cover actual, documented training costs. Courts do not enforce arbitrary exit penalties. Excessive bond terms that restrict employment freedom violate Section 27 of the Contract Act."
  },
  {
    question: "How do I prove that I paid a security deposit if the company didn't give me a receipt?",
    answer: "You can prove payments through bank transfer records and salary slips showing retention deductions. You can also use HR emails acknowledging deposit receipts."
  },
  {
    question: "Can the Labour Commissioner help me get my original certificates back?",
    answer: "Yes. Labour commissioners and Shops and Establishments inspectors have the legal authority to summon employers. They direct companies to return personal documents during conciliation meetings."
  },
  {
    question: "What is the criminal section for an employer withholding personal documents?",
    answer: "Withholding personal documents constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (formerly Section 406 IPC). It carries imprisonment for up to three years, a fine, or both."
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
    { id: "security-deposit-introduction", title: "Introduction to Security Deposit Recovery in India" },
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
                
                {/* Introduction */}
                <section id="security-deposit-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction to Security Deposit Recovery in India</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Starting a new job should be a positive career move. However, many Indian firms exploit new hires through unfair retention tactics. They demand monetary deposits or deduct monthly pay. Some companies enforce punitive bonds or confiscate original college degrees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      These unfair practices trap employees in toxic workplaces. When workers resign, employers often refuse to refund security money. They also withhold academic marksheets and issue hollow legal threats. This causes unfair career delays and emotional distress.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Your original certificates and earned money belong solely to you. Employers cannot legally withhold personal documents or money as exit collateral. Indian labor laws and criminal statutes protect employees from these abusive terms. At LegalRecovery, we help you reclaim your money and certificates quickly.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A security deposit or educational degree is not company collateral. Withholding personal records or earned salary violates your Right to Livelihood. It constitutes an unlawful breach of trust under Indian law.&quot;
                    </div>
                  </div>
                </section>

                {/* Types of Deposits */}
                <section id="types-of-security-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Types of Deposits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers collect security deposits in several different ways. Knowing how the firm took your money helps us choose the best legal remedy.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The three most common forms of employee deposits in India are:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Upfront Cash Deposits:</strong> Companies demand a cash deposit before handing over your offer letter. They often call this a training bond or onboarding deposit.</li>
                      <li><strong>Monthly Salary Deductions:</strong> The employer withholds a fixed cut from your monthly pay during your first year. They usually label this as retention money or security funds.</li>
                      <li><strong>Post-Dated Security Cheques:</strong> Employers force new hires to sign blank cheques during onboarding. They later threaten cheque bounce cases if you leave early.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      All three practices are coercive and strictly restricted under Indian law. Employers cannot keep this money without proving actual, direct training losses. We audit your employment agreements to build a fast recovery claim.
                    </p>
                  </div>
                </section>

                {/* Payment of Wages Act */}
                <section id="legality-of-salary-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Payment of Wages Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Deducting security money from your regular salary is unlawful. The primary protective legislation is the <strong>Payment of Wages Act, 1936</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 7</strong> of the Act sets strict rules for wage deductions. Employers may only deduct specific permitted items:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Statutory taxes such as income tax and professional tax.</li>
                      <li>Mandatory contributions to Provident Fund (EPF) and ESI schemes.</li>
                      <li>Documented recoveries of employee loans or salary advances.</li>
                      <li>Deductions expressly ordered by a court of law or government decree.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Security deposits and retention funds are <strong>not</strong> listed in Section 7. Therefore, deducting deposit money from monthly wages is completely illegal. Any employment clause allowing such deductions is null and void.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We highlight these statutory violations directly in formal demand notices. Employers usually refund the money quickly to prevent labor inspection fines.
                    </p>
                  </div>
                </section>

                {/* Bond Enforceability */}
                <section id="employment-bonds-enforceability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Bond Enforceability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often justify withholding deposits by citing training bonds. These contracts require workers to serve fixed tenures or face steep monetary penalties. However, Indian contract law strictly limits these claims.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, employers cannot enforce punitive damages. To validate a bond claim, the employer must establish three key facts:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Actual Expenses:</strong> The company spent specific funds on exclusive, specialized employee training. Routine on-the-job orientation does not count.</li>
                      <li><strong>Reasonable Damages:</strong> The bond sum reflects genuine economic loss rather than a penalty.</li>
                      <li><strong>Proportionate Recovery:</strong> Deductions must decrease proportionately with the duration of service completed.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Without clear training bills, the company cannot forfeit your money. Employers cannot use unverified bonds to seize your deposits. We cite Section 74 to overturn these arbitrary bond forfeitures.
                    </p>
                  </div>
                </section>

                {/* Withholding Certificates */}
                <section id="withholding-original-certificates" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Withholding Certificates</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Retaining an employee&apos;s original marksheets or degrees is deeply unethical and illegal. Employers take these documents during onboarding under the pretext of verification. They then refuse to release them when the employee resigns.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This conduct is <strong>entirely unlawful</strong>. Your academic certificates are your exclusive personal property. An employer never acquires legal ownership or a lien over your degrees. Even during notice period disputes, withholding documents remains strictly forbidden.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Both the University Grants Commission (UGC) and AICTE expressly forbid retaining candidate certificates. Keeping documents unlawfully restricts your right to seek other employment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery treats document retention cases with urgent priority. We serve strong demand notices that trigger immediate administrative and legal consequences.
                    </p>
                  </div>
                </section>

                {/* Right to Livelihood */}
                <section id="constitutional-right-to-livelihood" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Right to Livelihood</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Seizing personal degrees and enforcing harsh bonds violates your fundamental constitutional rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Article 21 of the Constitution of India</strong> guarantees the Right to Life. The Supreme Court confirms that this includes the <strong>Right to Livelihood</strong>. Your educational degrees are essential assets for professional work. When an employer withholds them, you cannot join another firm or pursue studies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This unlawful retention directly strips away your constitutional freedom to work. It transforms a routine employment dispute into a serious constitutional violation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For public sector cases, we file Writ Petitions under Article 226 of the Constitution. The High Court can issue an urgent Writ of Mandamus directing the immediate return of your records.
                    </p>
                  </div>
                </section>

                {/* Restraint of Trade Laws */}
                <section id="section27-contract-act-restraint" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Restraint of Trade Laws</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Companies often add restrictive covenants to employment letters. These include non-compete clauses that ban you from working for competitors. When coupled with bonds, they unlawfully restrict your career mobility.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Such covenants are governed by <strong>Section 27 of the Indian Contract Act, 1872</strong>. The statute provides that any agreement restraining a person from exercising a lawful trade or profession is <strong>void</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts strictly enforce this statutory protection. Companies may safeguard trade secrets, but they cannot restrict an employee&apos;s labor. Post-employment non-compete clauses are completely void in India.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      An employer cannot seize your deposit based on an invalid non-compete term. We help employees challenge these void restrictions and safeguard their professional careers.
                    </p>
                  </div>
                </section>

                {/* Evidence Checklist */}
                <section id="evidence-needed-deposit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering your deposit and certificates requires a well-documented paper trail. Solid records strengthen your legal notice and courtroom filings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Gather these vital documents before starting legal action:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Deposit & Bond Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Signed employment contracts, offer letters, and bond terms.</li>
                          <li>Bank transfer receipts for upfront deposit payments.</li>
                          <li>Salary slips showing monthly retention fund deductions.</li>
                          <li>HR emails confirming receipt of money or certificates.</li>
                          <li>Photocopies or scanned copies of handed-over documents.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Separation & Communication Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Document handover receipts signed by HR or managers.</li>
                          <li>Resignation letters, exit clearance forms, and asset handovers.</li>
                          <li>Emails or WhatsApp messages showing the employer&apos;s refusal to refund.</li>
                          <li>Bank receipts showing stop-payment requests for security cheques.</li>
                          <li>A detailed timeline of events from onboarding to exit.</li>
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
                      Every legal claim must follow statutory filing deadlines. Under the <strong>Limitation Act, 1963</strong>, delaying your claim can extinguish your right to recover.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The limitation period for recovering monetary security deposits is <strong>three (3) years</strong>. Time begins running on your last working day or when the refund was due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For retrieving personal certificates, you also have a <strong>three (3) year</strong> limit. This period runs from the date you demanded your documents and the company refused.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, written company acknowledgments reset this clock. An email promising a future refund starts a fresh three-year period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We advise taking legal action promptly after exit clearance delays exceed 30 days. Early action preserves evidence and speeds up your refund.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="summary-suits-deposit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Civil courts offer an expedited procedure for unpaid deposits: the <strong>Summary Suit under Order 37 of the CPC</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Order 37 applies to fixed, liquidated monetary claims based on written contracts or receipts. This makes it ideal for recovering security deposits verified by employment letters or bank slips.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Summary suits move much faster than ordinary civil trials:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons for Appearance:</strong> The company must formally appear in court within 10 days of receiving notice.</li>
                      <li><strong>No Automatic Defense:</strong> The employer cannot file a standard defense freely. They must first prove to the judge that they have a genuine triable defense.</li>
                      <li><strong>Immediate Decree:</strong> If the employer defaults or fails to obtain leave to defend, the court enters judgment for the plaintiff.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This fast mechanism stops companies from dragging out litigation. LegalRecovery prepares and files these summary suits to secure rapid court decrees.
                    </p>
                  </div>
                </section>

                {/* Labour Commissioner Role */}
                <section id="labour-commissioner-deposit-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Commissioner Role</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer ignores your legal notice, state labor authorities can intervene. The local Labour Commissioner office provides free, fast dispute mediation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can lodge a formal grievance under the state&apos;s <strong>Shops and Commercial Establishments Act</strong>. Labor officers have clear statutory powers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summon Management:</strong> Compel company directors and HR heads to attend conciliation hearings.</li>
                      <li><strong>Audit Company Records:</strong> Inspect payroll registers, attendance logs, and deduction records on site.</li>
                      <li><strong>Direct Restitution:</strong> Instruct the company to return withheld certificates and refund illegal deductions promptly.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Labor hearings avoid long court formalities and prioritize fast settlements. Continued company refusal can trigger government prosecution. We help clients draft and file these official labor complaints.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-breach-trust-certificates" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Financial recovery is mainly civil, but seizing certificates is a criminal act. The <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> establishes clear penalties for document retention.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key criminal provisions against withholding certificates include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> You entrusted your documents solely for verification. Keeping them dishonestly as bond collateral carries up to three years in prison, a fine, or both.</li>
                      <li><strong>Cheating and Dishonest Inducement (Section 318, BNS):</strong> Applies when employers misrepresent verification rules to take original certificates with fraudulent intent.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file an official complaint under <strong>Section 173 of the BNSS, 2023</strong> at your local police station. Naming directors and HR managers in criminal complaints usually forces an immediate release of documents.
                    </p>
                  </div>
                </section>

                {/* Cheque Abuse Counters */}
                <section id="negotiable-instruments-cheque-abuse" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Cheque Abuse Counters</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many employers force candidates to submit blank cheques at joining. If you resign, they threaten to present the cheque and file a case under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can neutralize this threat quickly. Section 138 applies solely to cheques issued for a <strong>legally enforceable debt</strong>. Penalties under unverified employment bonds are not valid legal debts. Employers cannot legally cash cheques without documented training expenses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Protect yourself immediately by taking these essential steps:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Revoke Authorization:</strong> Email and send a written notice revoking company authority to use the cheque.</li>
                      <li><strong>Issue Stop Payment:</strong> Instruct your bank to stop payment due to revoked security authorization.</li>
                      <li><strong>File Police Intimation:</strong> Lodge a written report with police stating the employer is threatening cheque misuse.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These prompt actions block Section 138 liability. We assist clients in drafting these revocation notices and protecting their bank accounts.
                    </p>
                  </div>
                </section>

                {/* Judicial Precedents */}
                <section id="supreme-court-precedents-bonds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Judicial Precedents</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts consistently protect employees from unfair bond forfeitures. Several landmark rulings establish these protections:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Vijaya Bank & Anr. v. Prashant B. Narnaware:</strong> The Supreme Court held that bonds are valid only to recover reasonable, actual training costs. Judges will not enforce arbitrary penalties.</li>
                      <li><strong>Niranjan Shankar Golikari v. Century Spinning and Manufacturing Co. Ltd.:</strong> The Supreme Court confirmed that post-employment restrictions are void under Section 27 of the Contract Act.</li>
                      <li><strong>SICPA India Limited v. Shri Devendra Dutt Pathak:</strong> The Delhi High Court ruled that firms cannot claim arbitrary bond sums without showing equal actual loss.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These landmark rulings prove that employers cannot enforce one-sided bonds. We cite these precedents in our legal notices to secure rapid settlements.
                    </p>
                  </div>
                </section>

                {/* State-Specific Rules */}
                <section id="state-shops-acts-prohibitions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">State-Specific Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      State-level <strong>Shops and Commercial Establishments Acts</strong> regulate local corporate offices. These acts govern working hours, leaves, and final settlement timelines.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key state regulations include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Karnataka:</strong> State law bars employers from taking cash deposits from staff without prior government approval.</li>
                      <li><strong>Maharashtra:</strong> Requires firms to pay final dues promptly. Withholding wages or deposits constitutes an offense.</li>
                      <li><strong>Delhi & Tamil Nadu:</strong> Labor inspectors examine company registers to penalize illegal wage deductions.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We invoke local state rules based on the company&apos;s registered address. This local administrative pressure leads to faster resolutions.
                    </p>
                  </div>
                </section>

                {/* Tax & TDS Rules */}
                <section id="taxation-tds-refunded-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Tax & TDS Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering or forfeiting deposits involves tax rules under the <strong>Income Tax Act, 1961</strong>. Proper classification ensures you avoid tax errors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Essential tax principles include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Refunded Deposits:</strong> A security deposit is a capital receipt. When returned to you, it is non-taxable.</li>
                      <li><strong>Salary Deductions:</strong> Deductions were taken from gross salary where tax was already paid. A refund must not be taxed twice.</li>
                      <li><strong>Forfeitures and Interest:</strong> Unrecovered deposits can qualify as losses. Any delayed refund interest is taxed under Other Sources.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We ensure settlements clearly describe refunds as capital receipts. This protects you from wrongful employer TDS cuts.
                    </p>
                  </div>
                </section>

                {/* Foreign Contracts & Bonds */}
                <section id="international-remote-bonds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Foreign Contracts & Bonds</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many Indian developers work remotely for companies in the US, UK, or Europe. Some foreign firms insert training bonds or security deposits into remote contracts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a foreign firm defaults on a refund, cross-border issues arise. Indian labor officers cannot easily serve summons abroad. However, practical legal solutions exist.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We first inspect the contract&apos;s governing law. If Indian law applies, we file civil claims here. Under foreign law, we issue formal cross-border demand notices. International firms take compliance risks seriously and often settle promptly.
                    </p>
                  </div>
                </section>

                {/* Arbitration Clauses */}
                <section id="arbitration-employment-bonds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Arbitration Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executive contracts often include an <strong>Arbitration Clause</strong>. This requires parties to resolve bond disputes via private arbitration rather than civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitrations are governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. When a valid clause exists, either party can petition the court to appoint an arbitrator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Private arbitration can be fast, but arbitrator fees are often costly. Under Indian law, routine workman disputes are non-arbitrable and belong before public labor courts. Arbitration clauses primarily bind senior executives and independent contractors. We review your clause to pick the most efficient legal path.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Escalation */}
                <section id="step-by-step-escalation-deposit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Step-by-Step Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer withholds your deposit or certificates, use this structured four-step timeline:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Days 1-7 (Formal Demand Email):</strong> Email HR and leadership demanding your deposit and certificates with proof of clearance.</li>
                      <li><strong>Days 8-15 (Revocation & Stop-Payment):</strong> Revoke security cheque authorization in writing and place a bank stop-payment order.</li>
                      <li><strong>Days 16-30 (Legal Notice):</strong> Serve a formal advocate notice giving 15 days to comply under BNS and Contract Act rules.</li>
                      <li><strong>Day 30+ (Labour Complaint & Police Action):</strong> File a complaint with the Labour Commissioner and report document retention to the police.</li>
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
                        A trainee left an IT firm after six months for medical reasons. The company retained his degree marksheets and demanded ₹1.5 Lakhs. LegalRecovery served an urgent notice citing Section 316 BNS. Facing personal criminal liability, the company returned his certificates within three days and waived the bond.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Salary Deductions Refund</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Recovered Monthly Security Deductions for Sales Executive</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A firm deducted ₹3,000 monthly as retention money from a sales executive. When she resigned, the company seized ₹30,000. LegalRecovery served notice citing Section 7 of the Payment of Wages Act. To avoid labor inspection audits, the employer refunded the entire sum.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: Upfront Deposit Refund</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Upfront Training Deposit Recovered from Analytics Company</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        An employee paid ₹50,000 upfront deposit when joining an analytics firm. When he resigned, the firm refused any refund. LegalRecovery filed an Order 37 summary suit. The court ordered proof of training expenses. Unable to provide proof, the company settled out of court with interest.
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
                        &quot;My employer withheld ₹50,000 deducted from my wages as a bond deposit. LegalRecovery served a formal notice. I got my complete refund in ten days without going to court.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rahul Verma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They withheld my original B.Tech degree after I left before the bond term. LegalRecovery sent a strong notice citing BNS provisions. HR returned my degrees the next morning!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Simran Kaur</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They threatened a cheque bounce suit using a blank cheque given at onboarding. LegalRecovery helped me issue a stop-payment and revocation letter. The company backed down completely.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Anand Joshi</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Recovered my ₹1 Lakh deposit from a coaching institute after resigning. The entire procedure was clear and trackable on my dashboard.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Meera Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Very skilled legal team. They recovered my original educational certificates with great diligence. Highly recommended for employment conflicts.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Siddharth Sen</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They held my certificates and final settlement. LegalRecovery sent an assertive notice and recovered my money and certificates within two weeks.&quot;
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
                      LegalRecovery is India&apos;s leading legal tech recovery platform. We combine expert advocate authority with digital automation for fast, transparent results. Here is why professionals trust our platform:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Experienced Panel Advocates:</strong> Senior employment lawyers draft every notice with precise statutory citations.</li>
                      <li><strong>Multi-Channel Dispatch:</strong> We send speed post notices to company headquarters and directors&apos; residential addresses.</li>
                      <li><strong>Live Tracking:</strong> Monitor drafting progress and post office tracking directly on your client dashboard.</li>
                      <li><strong>Transparent Flat Fees:</strong> Clear flat fees with no hidden costs or surprising hourly bills.</li>
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
