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
    question: "Is a company legally required to reimburse business travel expenses in India?",
    answer: "Yes, if the expenses were incurred for official business purposes and comply with the company's travel policy or explicit management approvals. Under the Indian Contract Act, 1872, an employment agreement constitutes a mutual contract. When an employee spends personal funds on behalf of the employer for official travel (such as flights, lodging, or transport), the employer is contractually and legally bound to indemnify the employee and clear the verified dues."
  },
  {
    question: "What happens if I used my personal credit card for corporate bookings and was terminated before reimbursement?",
    answer: "The company remains fully liable to reimburse you for all approved business bookings made on your personal credit card, regardless of your employment status. Termination does not extinguish the company's liability for debts incurred by you on its behalf. If the company refuses to reimburse, you can serve a legal notice and file a recovery suit, claiming not only the principal travel amount but also any credit card interest charges accumulated due to their default."
  },
  {
    question: "Can a company reject a travel bill because I booked a higher class than allowed, despite approval?",
    answer: "No. If a manager or HR explicitly approved the booking (via email, Slack, or travel portal override) beforehand, the company cannot retroactively reject the reimbursement by citing the standard policy caps. The explicit approval acts as a waiver of the standard policy limits, creating a binding obligation on the company to clear the bill."
  },
  {
    question: "How do I recover unpaid daily allowances (per diem) promised for international deputation?",
    answer: "Per diem or daily allowances promised during onsite deputation are legally enforceable under your deputation letter or the company's global mobility policy. To recover unpaid per diems, compile: (1) Your signed deputation letter specifying the daily allowance rate; (2) Passport entry/exit stamps proving the duration of your stay; (3) Expense portal entries showing unpaid daily rates. You can serve a legal notice demanding payment under breach of contract."
  },
  {
    question: "Can an employer withhold travel reimbursements as part of notice period disputes?",
    answer: "No. Employers cannot unilaterally offset or withhold approved travel reimbursements to settle disputes regarding notice periods, asset returns, or non-compete clauses. Approved reimbursements represent personal funds you lent to the company for operations. Withholding these funds without your explicit authorization is an illegal deduction and constitutes a breach of contract."
  },
  {
    question: "How does the Limitation Act, 1963 apply to outstanding travel conveyance bills?",
    answer: "Under the Limitation Act, 1963, you have a statutory window of three (3) years to file a legal suit for the recovery of money. The limitation period begins from the date the reimbursement claim became due (usually 15-30 days after submission) or from the date the employer formally acknowledged the debt in writing (such as an email saying 'we will clear it next month'). Company policies setting short submission windows cannot override your statutory right to recover these debts in court."
  },
  {
    question: "Why are travel allowances excluded from the definition of wages under labor law?",
    answer: "Under Section 2(vi) of the Payment of Wages Act, 1936, the term 'wages' explicitly excludes any travelling allowance, the value of travel concessions, or any sum paid to defray special expenses entailed by the nature of employment. Since travel expenses are not 'wages,' they cannot be recovered through a standard wage non-payment claim before a Labour Authority. Instead, they must be recovered through civil recovery suits or under Shops and Establishments Act regulations."
  },
  {
    question: "What constitutes 'unjust enrichment' when an employee pays for official corporate travel?",
    answer: "Under Section 70 of the Indian Contract Act, 1872, if an employee incurs travel expenses to benefit the company (e.g., meeting clients, closing deals, auditing vendor sites) and did not intend to do so for free, the company cannot keep the benefits while refusing to pay for the travel. Doing so constitutes 'unjust enrichment.' The law obligates the company to compensate the employee for the funds spent."
  },
  {
    question: "Can I file a cheating (BNS) case against my employer for not paying approved travel bills?",
    answer: "Yes, if you can prove dishonest intent. If the management induced you to pay for expensive flights or hotel bookings on your personal card, promising reimbursement, while secretly planning to lay you off or withhold payouts, it constitutes Cheating (Section 318 BNS) and Criminal Breach of Trust (Section 316 BNS). Fearing criminal prosecution, corporate directors often settle outstanding claims immediately."
  },
  {
    question: "Can I claim the credit card interest charges caused by delayed employer travel reimbursements?",
    answer: "Yes. Under Section 73 of the Indian Contract Act, 1872, the injured party is entitled to compensation for any loss or damage which naturally arose in the usual course of things from the breach. If the employer's delay forced you to roll over credit card balances and incur heavy interest (up to 42% p.a.), you can claim these interest expenses as consequential damages in your recovery notice and suit."
  },
  {
    question: "How do I submit my outstanding travel bills to the RP during company bankruptcy?",
    answer: "If your employer enters Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code, 2016 (IBC), you must submit your claims for outstanding travel reimbursements to the appointed Resolution Professional. You must file 'Form D' (Claim by Operational Creditor) along with travel tickets, portal approvals, and bank statements showing personal payments."
  },
  {
    question: "What electronic evidence is needed to prove flight, hotel, and cab expense claims in court?",
    answer: "You must compile: (1) Approved travel requests (portal logs or emails); (2) Booking PDFs and boarding passes; (3) Tax invoices from airlines/hotels; (4) Credit card statements proving payment; (5) Written company travel policy. All digital records must be supported by an authenticity certificate under Section 63 of the BNS, 2023 (formerly Section 65B of the Evidence Act)."
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
      "name": "Travel Reimbursement Recovery",
      "item": "https://www.legalrecovery.in/recovery/travel-reimbursement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Company Refusing to Pay Travel Dues? Recovery Guide & Legal Notice Options",
  "description": "Exhaustive legal guide on recovering unpaid employee travel expenses, flight bookings, hotel bills, conveyance allowance, and per diems in India.",
  "image": "https://www.legalrecovery.in/og-travel-recovery.png",
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
  "name": "Travel Reimbursement Recovery Services",
  "image": "https://www.legalrecovery.in/og-travel-recovery.png",
  "description": "Professional legal tech assistance for recovering unpaid business travel, flights, hotels, and conveyance expenses from employers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "488"
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
        "name": "Vikramaditya Rao"
      },
      "reviewBody": "My previous employer refused to clear ₹2,10,000 in flight and hotel bills for three international client visits, claiming the bookings exceeded standard policy caps, even though the CFO had emailed approval. LegalRecovery drafted a notice highlighting Section 70 and 73. The company processed the payments in my FNF within two weeks."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Nair"
      },
      "reviewBody": "I was traveling extensively for client deployments and spent ₹65,000 on fuel and local cabs. After my resignation, the manager blocked my approvals. LegalRecovery helped me compile a digital audit trail and served a formal notice to the board. The corporate team approved all bills immediately. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anupam Sen"
      },
      "reviewBody": "Unpaid onsite per diem and international travel allowance of ₹1,80,000 was withheld by my agency. LegalRecovery sent a strong notice warning of a summary recovery suit under Order 37. The agency settled my claims and deposited the money in my bank account. Excellent support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shweta Kulkarni"
      },
      "reviewBody": "My company relocated me to Ahmedabad and promised in writing to clear all flight and packing costs. Later, they claimed I didn't stay long enough to qualify. LegalRecovery drafted a notice showing the policy lacked any clawback clause. They paid the ₹90,000 relocation travel dues to avoid litigation."
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
      "reviewBody": "I was forced to use my personal credit card to book emergency business travel for the CEO. When the startup ran out of funds, they ignored my claims. LegalRecovery served a notice pointing out personal liability of the directors and Cheating under BNS. The founders cleared the credit card bill with interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Reddy"
      },
      "reviewBody": "Recovered travel conveyance arrears and delayed per diems within 10 days of serving the LegalRecovery advocate notice. The team was highly responsive, professional, and audited my documents meticulously."
    }
  ]
};

export default function TravelReimbursementClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "travel-reimbursement-overview", title: "Overview of Travel Dues" },
    { id: "statutory-exclusion-wages", title: "Travel Allowances Excluded from Wages" },
    { id: "corporate-travel-policy-binding", title: "Binding Force of Travel Policy" },
    { id: "documentation-standards-audit", title: "Travel Documentation & Audit Rules" },
    { id: "unpaid-flight-hotel-bookings", title: "Recovering Flight & Hotel Bookings" },
    { id: "local-conveyance-fuel-allowances", title: "Conveyance & Fuel Reimbursements" },
    { id: "per-diem-daily-allowances", title: "Recovering Daily Per Diem Dues" },
    { id: "relocation-shifting-travel", title: "Relocation Shifting Travel Recovery" },
    { id: "limitation-act-cpc-remedies", title: "Civil Remedies & Limitation Act" },
    { id: "summary-suits-order-37", title: "Summary Suits for Travel Debts (Order 37)" },
    { id: "unjust-enrichment-benefit", title: "Section 70 Contract Act & Benefit" },
    { id: "breach-of-contract-damages", title: "Section 73 Contract Act Damages" },
    { id: "corporate-credit-cards", title: "Personal Liability & Corporate Credit Cards" },
    { id: "labor-department-dispute", title: "Labour Department Complaints" },
    { id: "insolvency-priority-travel", title: "Travel Claims under IBC Waterfall" },
    { id: "serving-legal-notice", title: "Serving an Advocate Notice" },
    { id: "electronic-evidence-audit", title: "Admissibility of Electronic Travel Records" },
    { id: "case-studies", title: "Travel Recovery Case Studies" },
    { id: "reviews-section", title: "Client Reviews" },
    { id: "our-reimbursement-assistance", title: "Why Choose Us?" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Travel Reimbursement Recovery", href: "/recovery/travel-reimbursement" },
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
              Recover Unpaid <span className="text-[#DC2626]">Travel Reimbursements</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did your employer fail to reimburse official flights, hotels, cabs, per diems, or conveyance bills? Get advocate-backed legal notice campaigns to recover your business travel dues.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Travel Dues Recovery
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
                
                {/* Section 1: Overview of Travel Dues */}
                <section id="travel-reimbursement-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview of Travel Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Business travel is a fundamental driver of growth in modern corporations. Sales pitches, client deployments, system audits, onsite collaborations, and global mobility initiatives all require employees to travel domestically or internationally. While companies often utilize travel agents or corporate travel portals for booking, a substantial amount of business expenditure is made by employees directly out of their own pocket or personal credit cards. Whether it is paying for emergency flight changes, booking local cab transport (Ola/Uber), booking hotel rooms during client emergencies, or paying for official business meals, these expenses represent personal funds advanced by the employee for the employer&apos;s direct benefit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unfortunately, travel reimbursement defaults are a pervasive issue across corporate India. Defaulter companies—often struggling with cash flow, undergoing restructuring, or managing mass layoffs—frequently use travel audits as a tool to delay or deny payments. Employees are left to shoulder heavy credit card bills, and when they resign, employers routinely freeze these claims or claim they are forfeited. Unilateral rejections or blocking travel conveyance bills represents a major contractual violation, depriving employees of their hard-earned personal savings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we represent employees to recover their unpaid business travel dues. We assist you in auditing travel policies, compiling digital evidence (boarding passes, invoices, hotel receipts, manager email approvals), and executing strategic pre-litigation notice campaigns. This guide provides a detailed analysis of your legal standing and remedies to recover travel reimbursement claims.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Employee business travel expenses are not benefits or perquisites; they are out-of-pocket personal loans extended to the company. Employers are legally obligated to indemnify employees for all approved expenses incurred for official business operations.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Travel Allowances Excluded from Wages */}
                <section id="statutory-exclusion-wages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Travel Allowances Excluded from Wages</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian labor law, it is vital to distinguish travel reimbursements from standard salary. The **Payment of Wages Act, 1936**, under Section 2(vi), defines wages as all remunerations payable for services rendered. Crucially, the statutory definition explicitly **excludes** the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Any travelling allowance or the value of any travelling concession.</li>
                      <li>Any sum paid to the employed person to defray special expenses entailed on him by the nature of his employment.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because travel reimbursements are legally categorized as expense defrayals rather than 'wages,' they are excluded from the scope of standard wage recovery claims before labor inspectors. Employees seeking to recover travel bills must utilize alternative legal remedies: (1) Contractual recovery suits in civil courts, (2) Shops and Establishments Act complaints, or (3) Section 33C recovery claims under the Industrial Disputes Act (for workmen).
                    </p>
                  </div>
                </section>

                {/* Section 3: Binding Force of Travel Policy */}
                <section id="corporate-travel-policy-binding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Binding Force of Travel Policy</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An employer&apos;s written **Corporate Travel Policy** is not a discretionary guidelines manual; it is a legally binding extension of the employment contract. The policy defines eligibility limits, travel class (economy, business), lodging caps, and submission timelines.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once an employee books travel and submits bills complying with this policy, the company is contractually obligated to reimburse them. If the company unilaterally rejects claims that fall within the policy, or retroactively changes the policy caps to reduce payouts, it commits a direct breach of contract under Section 73 of the **Indian Contract Act, 1872**. The employee is entitled to enforce the policy terms in a court of law.
                    </p>
                  </div>
                </section>

                {/* Section 4: Travel Documentation & Audit Rules */}
                <section id="documentation-standards-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Travel Documentation &amp; Audit Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To establish a legally enforceable claim, you must adhere to proper documentation standards. The **Income Tax Rules, 1962 (Rule 2BB)** and standard corporate audit norms require employees to substantiate travel claims with:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Travel Authorizations:</strong> Pre-travel approvals from reporting managers or HR via email, travel portals (Concur, Happay), or Slack.</li>
                      <li><strong>Aviation &amp; Hospitality Invoices:</strong> GST-compliant tax invoices from airlines, travel agents (MakeMyTrip, Yatra), and hotels.</li>
                      <li><strong>Boarding Passes:</strong> Boarding passes are critical primary evidence showing that the flight was actually boarded and the travel occurred.</li>
                      <li><strong>Conveyance Logs:</strong> Itemized cab bills (Ola/Uber ride receipts) and fuel billing receipts.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 5: Recovering Flight & Hotel Bookings */}
                <section id="unpaid-flight-hotel-bookings" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Recovering Flight &amp; Hotel Bookings</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Flight bookings and hotel stays represent the largest cost elements in business travel. When an employer asks an employee to make these bookings on their personal credit card due to 'corporate card limits' or 'urgent bookings,' they induce the employee to lend personal credit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company subsequently delays or refuses to reimburse these charges, the employee faces serious financial distress, including high credit card interest rates (up to 42% per annum) and damage to their credit score (CIBIL). We assist you in serving legal notices that hold the company and its active directors personally liable for siphoning personal credit under the guise of official business.
                    </p>
                  </div>
                </section>

                {/* Section 6: Conveyance & Fuel Reimbursements */}
                <section id="local-conveyance-fuel-allowances" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Conveyance &amp; Fuel Reimbursements</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Local conveyance, cab fares, and fuel allowances represent routine business travel costs that quickly accumulate to substantial sums. Sales executives, site engineers, and field auditors are particularly vulnerable to conveyance defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often reject conveyance logs, claiming lack of detail or missed submission deadlines. Under the Contract Act, if conveyance logs are supported by GPS ride maps (such as Uber/Ola receipts) or odometer logs, and the travel was performed for official duties, the employer cannot use minor procedural delays to refuse reimbursement.
                    </p>
                  </div>
                </section>

                {/* Section 7: Recovering Daily Per Diem Dues */}
                <section id="per-diem-daily-allowances" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Recovering Daily Per Diem Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Per Diem refers to the daily allowance paid to employees during official travel to cover daily out-of-pocket food, laundry, and incidental costs. For employees deputed on international assignments, per diem allowances are substantial, representing a critical part of their total compensation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer fails to disburse the promised per diems, the employee is forced to spend personal savings to survive in foreign locations. To recover unpaid per diems, we establish the duration of travel using passport stamps and compare it with the per diem rates specified in your deputation letter. This creates a clear, liquidated debt that is legally recoverable.
                    </p>
                  </div>
                </section>

                {/* Section 8: Relocation Shifting Travel Recovery */}
                <section id="relocation-shifting-travel" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Relocation Shifting Travel Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a company transfers an employee to a different city or recruits an candidate from another location, they usually promise to reimburse relocation travel and shifting costs (packers and movers, temporary stay, family travel tickets).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employee resigns shortly after relocation, companies often try to apply clawback clauses to relocate travel costs. However, clawbacks are only valid if explicitly agreed to in a signed relocation agreement. If no clawback agreement was signed, or if the company terminated the employee, the company must reimburse all relocation travel costs in full.
                    </p>
                  </div>
                </section>

                {/* Section 9: Civil Remedies & Limitation Act */}
                <section id="limitation-act-cpc-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Civil Remedies &amp; Limitation Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the **Limitation Act, 1963**, the statutory limitation period for filing a recovery suit for unpaid travel expenses is **three (3) years**. This period begins from the date the reimbursement became due, or from the date the company last acknowledged the outstanding dues in writing (via email, FNF draft, or settlement letter).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This three-year window provides ample time for legal recovery. However, employees should not delay, as companies facing financial distress may enter liquidation or dissolve, which complicates recovery.
                    </p>
                  </div>
                </section>

                {/* Section 10: Summary Suits for Travel Debts (Order 37) */}
                <section id="summary-suits-order-37" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Summary Suits for Travel Debts (Order 37)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For fast-track recovery of travel dues, filing a **Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)** is highly recommended. Unlike regular civil suits, summary suits are expedited:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The employer (defendant) has no right to defend the suit unless they apply for **&apos;Leave to Defend&apos;** within 10 days of receiving the summons.</li>
                      <li>To get leave, they must show a substantial defense. If the court finds their defense is frivolous or meant to delay, it will reject the application and pass a decree in favor of the employee immediately.</li>
                      <li>This allows employees to get a decree within 6 to 12 months, bypassing lengthy trials.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 11: Section 70 Contract Act & Benefit */}
                <section id="unjust-enrichment-benefit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Section 70 Contract Act &amp; Benefit</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under **Section 70 of the Indian Contract Act, 1872**, if a person lawfully does anything for another, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the latter must compensate the former.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employee travels to secure contracts or audit projects, they do so not as a personal favor, but for the company&apos;s benefit. Since the company enjoys the commercial benefits of those activities, it cannot refuse to reimburse the employee. The court will enforce the company&apos;s obligation to compensate the employee under the doctrine of quasi-contract.
                    </p>
                  </div>
                </section>

                {/* Section 12: Section 73 Contract Act Damages */}
                <section id="breach-of-contract-damages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Section 73 Contract Act Damages</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under **Section 73 of the Indian Contract Act, 1872**, the party who suffers from a breach of contract is entitled to receive compensation for any loss or damage caused to him which naturally arose in the usual course of things from the breach.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer defaults on travel reimbursements, the employee faces direct financial damages:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The **principal amount** of travel bills.</li>
                      <li>**Interest damages** (usually 12% to 18% p.a.) for the period of delay.</li>
                      <li>**Consequential damages**, such as credit card interest charges or CIBIL score recovery costs, if the default directly led to bank defaults.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 13: Personal Liability & Corporate Credit Cards */}
                <section id="corporate-credit-cards" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Personal Liability &amp; Corporate Credit Cards</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many companies issue corporate credit cards to employees for travel bookings. However, these cards are often issued under a joint liability structure, meaning the employee is personally liable to the bank for the dues, and the company is liable to reimburse the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company defaults on payments to the credit card provider, the bank will target the employee, which damages their credit rating. In such cases, the employee can initiate recovery action against the company directors for breach of indemnity, forcing the company to pay the bank directly.
                    </p>
                  </div>
                </section>

                {/* Section 14: Labour Department Complaints */}
                <section id="labor-department-dispute" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Department Complaints</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While travel reimbursements are not 'wages,' withholding these funds during full and final (FNF) settlements represents a major compliance violation under state-specific **Shops and Commercial Establishments Acts**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employees can file a formal complaint with the local **Labour Inspector or Assistant Labour Commissioner**. The Commissioner has the power to summon the employer and direct them to clear all outstanding FNF dues (including salaries and travel arrears) to avoid business license suspension or local prosecution.
                    </p>
                  </div>
                </section>

                {/* Section 15: Travel Claims under IBC Waterfall */}
                <section id="insolvency-priority-travel" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Travel Claims under IBC Waterfall</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the company enters liquidation or insolvency under the **Insolvency and Bankruptcy Code, 2016 (IBC)**, employee travel reimbursement claims are categorized as operational debts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To secure outstanding travel dues, employees must file **Form D (Claim by Operational Creditor)** with the appointed Resolution Professional (RP). Attach hotel bookings, flight tickets, and portal approval screenshots to register your claim and receive payouts under the distribution waterfall.
                    </p>
                  </div>
                </section>

                {/* Section 16: Serving an Advocate Notice */}
                <section id="serving-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving an Advocate Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When informal follow-ups and escalation emails fail to yield results, serving a formal **Legal Notice** is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 17: Admissibility of Electronic Travel Records */}
                <section id="electronic-evidence-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Admissibility of Electronic Travel Records</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In modern employment disputes, the paper trail is almost entirely digital. Corporate communications occur over email, Slack channels, Microsoft Teams, and WhatsApp. It is a common concern among employees whether these digital conversations hold weight in a court of law. The answer is a resounding yes, provided they are formatted and backed by the correct legal certificates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under **Section 63 of the Bharatiya Nyaya Sanhita, 2023** (formerly Section 65B of the Indian Evidence Act, 1872), electronic records are fully admissible as secondary evidence in legal proceedings. To meet admissibility standards, you must present the digital printouts along with a signed electronic authenticity certificate. This certificate must confirm that the computer or device used to access the emails or portal was operating properly, and the record has not been tampered with.
                    </p>
                  </div>
                </section>

                {/* Section 18: Travel Recovery Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Travel Recovery Case Studies</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-slate-900 mb-2">Case Study 1: Recovery of Flight and Hotel Dues</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A senior sales director resigned from an IT firm. The firm withheld ₹2,10,000 in flight and hotel bills for three international client visits, claiming the bookings exceeded standard policy caps, even though the CFO had emailed approval. LegalRecovery served a formal notice highlighting Section 70 and 73. The company processed the payments in his FNF within two weeks.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-slate-900 mb-2">Case Study 2: Relocation Travel Expenses</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A project manager relocated from Kolkata to Pune. The company promised to reimburse packer and mover and family travel costs. When he resigned within 10 months, the firm applied a clawback. LegalRecovery showed that the relocation policy lacked a clawback clause. A legal notice forced the firm to pay the ₹90,000 relocation travel dues to avoid litigation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 19: Client Reviews */}
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

                {/* Section 20: Why Choose Us? */}
                <section id="our-reimbursement-assistance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we combine legal expertise with technology to provide the most efficient recovery services for employees. Our structured approach includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Policed Claims Audit:</strong> We audit your travel invoices, boarding passes, and portal approvals to calculate the exact legally enforceable debt.</li>
                      <li><strong>Advocate Drafts:</strong> Custom notices prepared by specialized corporate and labor advocates on official letterheads.</li>
                      <li><strong>Personal Director Service:</strong> We dispatch notices directly to active board directors at their residential addresses, piercing the corporate veil.</li>
                      <li><strong>Parallel Filings:</strong> Coordinating complaints to local Labour departments and preparation of summary recovery suits.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 21: Frequently Asked Questions */}
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
