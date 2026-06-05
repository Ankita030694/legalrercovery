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
    question: "Is it legal for a landlord to deduct painting charges from my security deposit?",
    answer: "No. Unless explicitly agreed upon in a signed rent agreement, a landlord cannot unilaterally deduct painting charges. Under standard tenancy principles, painting and normal aging of walls fall under 'normal wear and tear,' which is the landlord's responsibility. Deducting these costs without a specific contract clause is illegal."
  },
  {
    question: "How long does a landlord legally have to refund my security deposit in India?",
    answer: "Generally, the security deposit must be refunded on the day of vacating the property and handing over the keys. If the state has adopted the Model Tenancy Act, 2021, the landlord must refund the security deposit within one month of the tenant vacating the premises, after making any reasonable, agreed-upon deductions."
  },
  {
    question: "What is the maximum security deposit a landlord can demand under the Model Tenancy Act?",
    answer: "Under the Model Tenancy Act, 2021, the security deposit to be paid by the tenant in advance is capped at a maximum of two (2) months' rent for residential premises, and a maximum of one (1) month's rent for non-residential (commercial) premises."
  },
  {
    question: "Can I recover my security deposit if my rent agreement is unregistered?",
    answer: "Yes. While an unregistered rent agreement for a duration exceeding 11 months cannot be used to prove tenancy terms in court under Section 49 of the Registration Act, it is fully admissible for 'collateral purposes,' which includes proving that you paid a security deposit and are entitled to its refund."
  },
  {
    question: "What legal notice should I send to a landlord who refuses to refund my deposit?",
    answer: "You should send a formal Legal Notice drafted by a lawyer. The notice must specify the details of the rent agreement, the date of move-out, the proof of key handover, and demand the return of the deposit within 15 days, warning of civil litigation (Summary Suit) and criminal action for misappropriation."
  },
  {
    question: "Can I adjust my security deposit against my last month's rent?",
    answer: "Generally, rent agreements prohibit tenants from adjusting the security deposit against the rent of the notice period. You are contractually obligated to pay the rent, and the landlord is obligated to refund the deposit. However, if the landlord shows clear signs of default, tenants often request mutual adjustment."
  },
  {
    question: "Can I file a police complaint against my landlord for withholding my deposit?",
    answer: "Yes. If the landlord retains your deposit with dishonest intent despite you clearing all utility bills and handing over the keys, you can file a police complaint for Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023."
  },
  {
    question: "What is normal wear and tear in a rental property?",
    answer: "Normal wear and tear refers to the natural degradation of a property caused by regular, reasonable daily use over time. This includes faded paint, minor scuff marks on floors, worn-out carpets, and aging plumbing. Landlords cannot deduct costs for restoring these, as they are part of property ownership risks."
  },
  {
    question: "What legal action can I take for a high-value commercial rental deposit default?",
    answer: "For commercial leases where the deposit is high (exceeding ₹3 Lakhs), you can file a commercial suit or a Summary Suit under Order 37 of the CPC. Additionally, you must complete the mandatory Pre-Institution Mediation and Settlement (PIMS) process under the Commercial Courts Act, 2015."
  },
  {
    question: "Can I sue a co-living platform or broker for withholding my deposit?",
    answer: "Yes. Co-living platforms and managed-rental startups are service providers. If they withhold your deposit unfairly, they commit a 'deficiency in service' under the Consumer Protection Act, 2019. You can file a complaint before the Consumer Disputes Redressal Forum for a refund, interest, and compensation."
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
      "name": "Rental Security Deposit Recovery",
      "item": "https://www.legalrecovery.in/recovery/rental-security-deposit"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Rental Security Deposit from Landlord: Legal Notice & Action under Model Tenancy Act in India",
  "description": "Comprehensive legal guide on recovering rental security deposits from landlords, property managers, and co-living platforms in India. Learn about legal notices, Rent Courts, and Summary Suits.",
  "image": "https://www.legalrecovery.in/og-rental-deposit.png",
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
  "name": "Rental Security Deposit Recovery Services",
  "image": "https://www.legalrecovery.in/og-rental-deposit.png",
  "description": "Expert legal recovery services to claim rental security deposit refunds and contest arbitrary painting/cleaning deductions in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "890"
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
        "name": "Vikram Adve"
      },
      "reviewBody": "My landlord in Bangalore refused to return my ₹1.2 Lakh security deposit, demanding arbitrary painting fees. LegalRecovery served a formal notice and I received my full refund within 12 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shruti Iyer"
      },
      "reviewBody": "A co-living platform kept delaying my deposit refund for three months. LegalRecovery sent a strong notice warning of consumer court action, and they credited my account within a week."
    }
  ]
};

export default function RentalSecurityDepositClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "rental-deposit-introduction", title: "Introduction" },
    { id: "statutory-framework-tenancy", title: "Legal Framework" },
    { id: "valid-vs-invalid-deductions", title: "Permissible Deductions" },
    { id: "model-tenancy-act-deposit-cap", title: "Model Tenancy Act Cap" },
    { id: "security-deposit-interest", title: "Interest on Deposits" },
    { id: "documentation-essential-tenancy", title: "Evidence Checklist" },
    { id: "commercial-rental-deposits", title: "Commercial vs Residential" },
    { id: "notice-to-quit-compliance", title: "Notice & Handover Logs" },
    { id: "rent-agreement-stamp-duty", title: "Unregistered Agreements" },
    { id: "limitation-rental-deposit-recovery", title: "Limitation Periods" },
    { id: "order37-cpc-rental-summary", title: "Order 37 Summary Suits" },
    { id: "rent-authority-and-tribunals", title: "Rent Court Proceedings" },
    { id: "bns-criminal-breach-trust-rental", title: "Criminal Action under BNS" },
    { id: "consumer-protection-rental-platforms", title: "Consumer Court Options" },
    { id: "state-specific-tenancy-rules", title: "State-Specific Rules" },
    { id: "taxation-forfeited-rental-deposits", title: "Tax & TDS Implications" },
    { id: "international-tenants-nri-landlords", title: "NRI Landlords Recovery" },
    { id: "arbitration-clauses-lease-agreements", title: "Arbitration in Leases" },
    { id: "step-by-step-rental-escalation", title: "Step-by-Step Escalation" },
    { id: "rental-deposit-case-studies", title: "Deposit Case Studies" },
    { id: "rental-deposit-testimonials", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-rental", title: "Why LegalRecovery?" },
    { id: "rental-deposit-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Rental Deposit Recovery", href: "/recovery/rental-security-deposit" }
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
              Recover Your <span className="text-[#DC2626]">Rental Security Deposit</span> From Landlord
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Is your landlord refusing to refund your security deposit, demanding arbitrary painting deductions, or ignoring your calls? Get veteran legal advocacy backed by state-of-the-art technology.
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
                <section id="rental-deposit-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Securing a rental property—whether a residential apartment in Mumbai, a tech-hub flat in Bangalore, or a commercial office space in Gurugram—requires a significant upfront financial commitment. Tenants are routinely required to pay a substantial security deposit to the landlord. This deposit is intended to serve as a financial shield for the property owner, protecting against potential defaults on rent, outstanding utility bills, or severe structural damage caused to the property during the lease term.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, when a tenancy ends, recovering this security deposit frequently turns into a major conflict. Landlords across India often view the security deposit as their own revenue, rather than money held in trust. As move-out dates approach, many landlords stop answering calls, make vague claims of damage, demand arbitrary painting and deep-cleaning fees, or refuse to process refunds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This leaves tenants in a vulnerable position. Many rely on their refunded deposit to secure their next home or fund relocation expenses. Withholding a rental security deposit without a contractually agreed and legally valid justification is a direct breach of contract and a form of financial misappropriation. At LegalRecovery, we combine expert property law advocacy with tech-enabled workflows to challenge arbitrary landlord deductions and recover your security deposit swiftly.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A rental security deposit remains the tenant&apos;s property held in trust by the landlord. Any deduction made from this deposit must be backed by documented evidence of damage exceeding normal wear and tear, and must comply strictly with the terms of the lease agreement.&quot;
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="statutory-framework-tenancy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Tenancy relations in India are governed by state-specific laws and central guidelines. Because land and tenancy are state subjects under the Constitution of India, different rules apply depending on where the property is located.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary legal pillars governing rental security deposits are:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>State Rent Control Acts:</strong> Traditional rent control laws (such as the Maharashtra Rent Control Act, 1999 or the Karnataka Rent Control Act, 1999) protect tenants against eviction and govern rent revisions, though they do not always detail security deposit refunds.</li>
                      <li><strong>Model Tenancy Act, 2021:</strong> Introduced by the central government, the Model Tenancy Act provides a modern template for tenancy regulation. It mandates the establishment of dedicated Rent Authorities, Rent Courts, and Rent Tribunals to resolve disputes quickly. Most importantly, it establishes clear limits on security deposits.</li>
                      <li><strong>Indian Contract Act, 1872:</strong> The Rent Agreement or Lease Deed is a legally binding contract under the Contract Act. If a landlord fails to return the deposit as agreed, they commit a material breach of contract, allowing the tenant to seek damages and recovery through civil courts.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We analyze the location of your property and the terms of your rent agreement to select the correct statutory channel for recovery.
                    </p>
                  </div>
                </section>

                {/* Permissible Deductions */}
                <section id="valid-vs-invalid-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Permissible Deductions</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A frequent source of dispute is the deductions landlords make from security deposits before refunding the balance. Landlords often attempt to pass on maintenance and renovation costs to the outgoing tenant.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The law distinguishes between valid deductions and arbitrary deductions:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Permissible Deductions</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Unpaid rent or pending monthly maintenance dues.</li>
                          <li>Outstanding electricity, water, gas, or internet bills.</li>
                          <li>Actual cost of repairing physical damage caused by tenant negligence (e.g., broken doors, shattered windows, damaged fixtures).</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Arbitrary/Illegal Deductions</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Painting charges for repainting walls (which is part of normal wear and tear due to aging, unless specified in the contract).</li>
                          <li>Routine maintenance and deep-cleaning fees (unless the tenant left the property in an unusually dirty condition).</li>
                          <li>Replacing old appliances or plumbing fixtures that failed due to age and regular use.</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unless a deduction is backed by invoices and relates to damage caused by the tenant, the landlord cannot deduct it from the deposit. We help tenants challenge these arbitrary deductions and demand a detailed settlement sheet.
                    </p>
                  </div>
                </section>

                {/* Model Tenancy Act Cap */}
                <section id="model-tenancy-act-deposit-cap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Model Tenancy Act Cap</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To prevent landlords from demanding excessive upfront sums, the <strong>Model Tenancy Act, 2021</strong> introduced statutory caps on rental security deposits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 11</strong> of the Model Tenancy Act, the security deposit paid by a tenant is capped at:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>A maximum of <strong>two (2) months&apos; rent</strong> for residential properties.</li>
                      <li>A maximum of <strong>one (1) month&apos;s rent</strong> for non-residential (commercial) properties.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your landlord is located in a state that has adopted the Model Tenancy Act (such as Uttar Pradesh, Tamil Nadu, Andhra Pradesh, or Odisha), any lease agreement requiring a security deposit higher than this cap is a violation of the Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, the Act mandates that the landlord must inspect the property and refund the security deposit <strong>within one month</strong> of the tenant vacating the premises. If the landlord fails to refund the deposit within this timeline, the tenant can approach the Rent Authority for recovery.
                    </p>
                  </div>
                </section>

                {/* Interest on Deposits */}
                <section id="security-deposit-interest" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Interest on Deposits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a landlord retains your security deposit for an extended period, they benefit from those funds. If they withhold the deposit illegally after you vacate, you have the right to claim interest on the delayed payment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian contract and tenancy jurisprudence, courts regularly award interest on delayed security refunds. Depending on the forum (Civil Courts, Rent Authorities, or Consumer Forums), courts often grant simple interest ranging from <strong>6% to 12% per annum</strong> from the date the deposit became due (typically your move-out date) until the date of actual payment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In commercial tenancies, if the lease agreement has a clause specifying interest on delayed refunds, that rate is contractually binding. If no rate is specified, interest can be claimed under the <strong>Interest Act, 1978</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We include interest calculations in our legal notices, emphasizing that the landlord&apos;s liability increases with every day of delay.
                    </p>
                  </div>
                </section>

                {/* Evidence Checklist */}
                <section id="documentation-essential-tenancy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Checklist</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover your rental deposit, you must compile a structured paper trail. This evidence is crucial to support your legal notice and prove your case in court or before tenancy boards.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Essential evidence to gather includes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Lease & Payment Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Signed and stamped Rent Agreement or Lease Deed.</li>
                          <li>Bank statements or transaction receipts showing the transfer of the security deposit.</li>
                          <li>Rent payment receipts and utility bill payment confirmations.</li>
                          <li>Inventory list signed by both parties at the time of moving in.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900 mb-3">Exit & Handover Records</h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                          <li>Notice to quit email or letter sent to the landlord.</li>
                          <li>Photos and videos of the property&apos;s condition on the day you vacated (proving no damage).</li>
                          <li>Key handover acknowledgment or receipt signed by the landlord or property manager.</li>
                          <li>WhatsApp or email chats discussing the move-out inspection and deposit refund.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Commercial vs Residential */}
                <section id="commercial-rental-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commercial vs Residential</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal remedies and procedures for recovering rental deposits differ significantly between residential and commercial tenancies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key differences include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>residential Tenancies:</strong> Governed by Rent Control Acts, Model Tenancy Act provisions, and consumer protection laws (if managed by platforms). The disputes are focused on tenants&apos; rights, arbitrary painting charges, and quick resolutions.</li>
                      <li><strong>commercial Tenancies:</strong> Governed by the lease contract terms and the <strong>Commercial Courts Act, 2015</strong>. The deposit amounts are much higher (often lakhs or crores), and disputes regularly involve fit-out periods, reinstatement of property to its original condition, and lease termination clauses.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      For commercial lease deposit defaults exceeding ₹3 Lakhs, the dispute is classified as a commercial dispute. The parties must complete the mandatory Pre-Institution Mediation (PIMS) before filing a suit in a Commercial Court. We tailor our recovery strategies to match the residential or commercial nature of your lease.
                    </p>
                  </div>
                </section>

                {/* Notice & Handover Logs */}
                <section id="notice-to-quit-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Notice & Handover Logs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To prevent landlords from claiming that you left the property without notice or caused damage, you must document your exit process.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      First, ensure you serve the <strong>Notice to Quit</strong> strictly in accordance with the rent agreement (typically 1 or 2 months in advance). Send this notice via email or registered post to establish a clear date of termination.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Second, on the day of vacating the property, request a joint move-out inspection. Take detailed photos and videos of all rooms, walls, appliances, and fixtures to prove the property is being returned in good condition.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Finally, document the key handover. Obtain a signed key handover receipt or send an email/WhatsApp message confirming that the keys were handed over to the landlord or their agent. This establishes the date you relinquished possession, preventing the landlord from claiming rent for subsequent days.
                    </p>
                  </div>
                </section>

                {/* Unregistered Agreements */}
                <section id="rent-agreement-stamp-duty" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Unregistered Agreements</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common concern for tenants is the validity of unregistered rent agreements. In India, rent agreements for a duration exceeding 11 months must be registered under the <strong>Registration Act, 1908</strong>. Many landlords avoid registration to save on stamp duty and registration fees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your agreement is unregistered, you still have rights. Under <strong>Section 49 of the Registration Act</strong>, while an unregistered document cannot be used to prove the terms of the tenancy (like the lease duration or rent revision clauses), it is admissible as evidence in court for <strong>collateral purposes</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Proving that you paid a security deposit and are entitled to its refund is classified as a collateral purpose. Therefore, you can use an unregistered rent agreement, along with bank transaction receipts, to prove the debt and recover your deposit in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, if the agreement was under-stamped (insufficient stamp duty was paid), the court may require you to pay the deficit stamp duty and a penalty before admitting the document as evidence. We guide clients on how to handle these compliance issues during the recovery process.
                    </p>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-rental-deposit-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every claim for the recovery of a rental deposit is subject to strict statutory timelines under the <strong>Limitation Act, 1963</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For civil recovery suits and Summary Suits to claim a refund of your rental security deposit, the limitation period is <strong>three (3) years</strong>. This period begins from the date the refund became due under the contract—typically the day you vacated the property and handed over the keys.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, if the landlord sends an email, WhatsApp message, or letter acknowledging the deposit or promising to refund it at a future date, the three-year limitation period resets from the date of that acknowledgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While three years may seem like a long time, we advise taking legal action immediately if the landlord fails to refund the deposit within 30 days of move-out, as delaying can lead to loss of evidence and complicate recovery.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="order37-cpc-rental-summary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For tenants seeking a refund of a documented rental deposit, the civil court process offers a fast-track remedy: the <strong>Summary Suit under Order 37 of the CPC</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is designed specifically for recovering liquidated monetary claims—claims where the exact debt is fixed and documented—arising from written contracts, invoices, or receipts. This makes it an effective tool for recovering rental deposits where the amount is clearly stated in the rent agreement or bank transfer receipts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedure in a Summary Suit differs from ordinary civil suits:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons of Appearance:</strong> Once the suit is filed, the defendant landlord must enter an appearance within 10 days of receiving the summons.</li>
                      <li><strong>No Automatic Right to Defend:</strong> The defendant does not have an automatic right to file a written statement. They must apply to the court for &quot;leave to defend&quot; by demonstrating a genuine, triable defense.</li>
                      <li><strong>Quick Judgment:</strong> If the landlord fails to enter an appearance within 10 days, or if the court rejects their application for leave to defend, the allegations in the plaint are deemed admitted, and the court passes a judgment in favor of the plaintiff.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This fast-track mechanism prevents landlords from using delaying tactics in court. LegalRecovery&apos;s legal team drafts and files summary suits to secure quick judgments for our clients.
                    </p>
                  </div>
                </section>

                {/* Rent Court Proceedings */}
                <section id="rent-authority-and-tribunals" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Rent Court Proceedings</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your property is located in a state that has adopted the Model Tenancy Act, you can approach dedicated rental authorities for resolution, bypassing regular civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Model Tenancy Act establishes a three-tier dispute resolution system:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Rent Authority:</strong> Headed by an officer of the rank of Deputy Collector, the Rent Authority handles registration of tenancies and mediates initial disputes regarding deposits and maintenance.</li>
                      <li><strong>Rent Court:</strong> Headed by a Sub-Divisional Magistrate or equivalent, the Rent Court hears appeals from the Rent Authority and resolves disputes regarding eviction, rent revisions, and deposit recovery.</li>
                      <li><strong>Rent Tribunal:</strong> Headed by a District Judge, the Rent Tribunal hears appeals from the Rent Court, and its decisions are final.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      These authorities are mandated to resolve disputes within <strong>60 days</strong>, making them much faster than regular civil courts. We help tenants draft applications and represent them before Rent Courts to recover their deposits.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-breach-trust-rental" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While rental disputes are primarily civil matters, certain circumstances can justify criminal action. When a landlord acts with dishonest intent, misrepresents facts, or misappropriates your deposit, criminal provisions under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> can apply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary criminal offense that applies is <strong>Criminal Breach of Trust (Section 316, BNS)</strong>. This applies when you entrust your security deposit to the landlord for the duration of the lease, and they dishonestly retain or misappropriate it after you vacate. Under Section 316, this is punishable by imprisonment of up to three years, a fine, or both.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To initiate criminal action, you can file a complaint under <strong>Section 173 of the BNSS, 2023</strong> at the local police station. If the police refuse to register an FIR, you can approach the Judicial Magistrate under <strong>Section 173(2) of BNSS</strong> to seek an order directing a police investigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The threat of criminal prosecution, which names the landlord personally, is a powerful motivator that often leads to the immediate refund of withheld deposits. We evaluate your case to determine if criminal action is appropriate.
                    </p>
                  </div>
                </section>

                {/* Consumer Court Options */}
                <section id="consumer-protection-rental-platforms" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consumer Court Options</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      With the growth of managed-rental startups and co-living platforms, many tenants lease properties through commercial platforms rather than directly from individual landlords.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you rent through a commercial platform or broker and they refuse to refund your deposit or make arbitrary deductions, you have rights as a consumer under the <strong>Consumer Protection Act, 2019</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because these platforms charge fees for managing the property, they are classified as service providers. Withholding your deposit unfairly constitutes a <strong>deficiency in service</strong> and an <strong>unfair trade practice</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file a complaint before the <strong>District Consumer Disputes Redressal Commission</strong> (for claims up to ₹50 Lakhs). Consumer forums are tenant-friendly and can direct the platform to refund the deposit, pay interest, and award compensation for harassment and legal costs. We help tenants draft and file consumer complaints against these platforms.
                    </p>
                  </div>
                </section>

                {/* State-Specific Rules */}
                <section id="state-specific-tenancy-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">State-Specific Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Tenancy rules vary significantly by state. Key state-specific rules to note include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Karnataka (Bangalore):</strong> The Karnataka Rent Control Act, 1999 governs traditional tenancies. In Bangalore, landlords routinely demand 5 to 10 months&apos; rent as a security deposit. We regularly challenge these high deposits when landlords attempt to withhold them.</li>
                      <li><strong>Maharashtra (Mumbai/Pune):</strong> Governed by the Maharashtra Rent Control Act, 1999. Agreements must be registered, and landlords must deposit the rent agreement copy with the local sub-registrar.</li>
                      <li><strong>Delhi:</strong> Governed by the Delhi Rent Control Act, 1958. Disputes are heard by Rent Controllers. We assist Delhi tenants in filing claims for deposit refunds before the Rent Controller.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We apply the correct state-specific provisions based on your property&apos;s location to ensure compliance and maximize recovery pressure.
                    </p>
                  </div>
                </section>

                {/* Tax & TDS Implications */}
                <section id="taxation-forfeited-rental-deposits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Tax & TDS Implications</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The refund or forfeiture of a rental deposit has tax implications under the <strong>Income Tax Act, 1961</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key tax rules include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Refunded Deposits:</strong> A security deposit is a capital receipt. When it is refunded to you, it is not taxable as income.</li>
                      <li><strong>Forfeitures:</strong> If a landlord forfeits your deposit due to rent default, the forfeited amount is taxable as income in the landlord&apos;s hands under &quot;Income from House Property&quot; or &quot;Income from Other Sources.&quot;</li>
                      <li><strong>Interest:</strong> Any interest awarded by a court or tribunal on a delayed refund is taxable in the tenant&apos;s hands under &quot;Income from Other Sources.&quot;</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We ensure that refunded deposits are correctly documented as refunds of capital receipts to prevent incorrect tax claims.
                    </p>
                  </div>
                </section>

                {/* NRI Landlords Recovery */}
                <section id="international-tenants-nri-landlords" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">NRI Landlords Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many property owners in India are Non-Resident Indians (NRIs) residing in the US, UK, Middle East, or Europe. NRIs often lease their Indian properties through local property managers or power of attorney (POA) holders.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an NRI landlord defaults on refunding your security deposit, recovery involves additional steps. While the landlord resides abroad, the property is located in India, giving local Rent Courts jurisdiction over the dispute.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key steps in recovering deposits from NRI landlords include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Serving Notices:</strong> Serving the legal notice on the landlord electronically (via email) and physically to the Indian property address and their overseas address.</li>
                      <li><strong>POA Liability:</strong> Naming the local Power of Attorney holder as a party to the dispute to pressure the landlord through their local representative.</li>
                      <li><strong>Property Attachment:</strong> Under civil law, if a court passes a decree against an NRI landlord and they fail to pay, the court can attach the Indian property to recover the dues.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We help tenants navigate these cross-border challenges to recover their deposits from overseas landlords.
                    </p>
                  </div>
                </section>

                {/* Arbitration in Leases */}
                <section id="arbitration-clauses-lease-agreements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Arbitration in Leases</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Modern rent agreements, especially for commercial properties and high-value residential leases, often contain an <strong>Arbitration Clause</strong>. This clause specifies that any dispute arising from the agreement must be resolved through private arbitration rather than public civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitration is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. If your agreement has a valid arbitration clause, either party can apply to the court to refer the dispute to an arbitrator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While arbitration is private and can be faster than civil courts, it can also be expensive as the parties must pay the arbitrator&apos;s fees. However, under Indian law, residential tenancy disputes in states with Rent Control Acts are generally considered non-arbitrable, as public Rent Courts have exclusive jurisdiction. Arbitration clauses are typically enforceable only in commercial leases and high-value, non-rent-controlled tenancies. We help clients evaluate these clauses and select the appropriate dispute resolution path.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Escalation */}
                <section id="step-by-step-rental-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Step-by-Step Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your landlord refuses to refund your security deposit, we recommend a structured escalation timeline:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-7 (Formal Move-Out Email):</strong> Send a formal email to the landlord and property manager, attaching photos of the vacated property and proof of key handover. Request the deposit refund.</li>
                      <li><strong>Day 8-15 (Settlement Statement):</strong> If ignored, send a &quot;Deposit Settlement Statement&quot; detailing rent payments and utility clearances, and requesting a date for the refund credit.</li>
                      <li><strong>Day 16-30 (Legal Notice):</strong> Serve a formal legal notice through our advocate panel. This notice demands the refund of the deposit within 15 days, warning of civil litigation (Summary Suit) and criminal action.</li>
                      <li><strong>Day 30+ (Court/Rent Complaint):</strong> If the landlord fails to comply, file a complaint with the Rent Court or initiate a Summary Suit in the civil court.</li>
                    </ol>
                  </div>
                </section>

                {/* Deposit Case Studies */}
                <section id="rental-deposit-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Deposit Case Studies</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 1: Painting Charges Waiver</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Arbitrary Deductions Waived for Bangalore Tenant</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A tenant vacated a residential flat in Bangalore after a 2-year lease. The landlord attempted to deduct ₹40,000 from his ₹1.5 Lakh deposit for painting and deep cleaning. The rent agreement did not have a clause authorizing painting deductions. LegalRecovery served a legal notice pointing out that painting falls under normal wear and tear and demanding the full refund. The landlord settled the claim, returning the entire deposit without deductions.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Co-Living Platform Refund</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Recovered Delayed Deposit from Co-Living Platform</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A student rented a room through a co-living platform in Pune. After vacating, the platform delayed refunding her ₹30,000 deposit for three months, citing administrative approvals. LegalRecovery drafted a formal notice warning of deficiency in service under the Consumer Protection Act, 2019. Faced with a potential consumer court case, the platform refunded the deposit with interest within 7 days.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: Commercial Lease Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">High-Value Commercial Deposit Recovered for Tech Startup</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A tech startup vacated an office space in Gurugram. The landlord withheld their ₹8 Lakh security deposit, claiming fit-out damages. LegalRecovery compiled photos of the vacated office proving no damage and served a notice under the Commercial Courts Act, 2015, initiating the PIMS process. During mediation, the landlord agreed to settle the dispute, refunding the deposit in two installments to avoid a commercial lawsuit.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="rental-deposit-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My landlord in Bangalore refused to return my ₹1.2 Lakh security deposit, demanding arbitrary painting fees. LegalRecovery served a formal notice and I received my full refund within 12 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vikram Adve</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;A co-living platform kept delaying my deposit refund for three months. LegalRecovery sent a strong notice warning of consumer court action, and they credited my account within a week.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Shruti Iyer</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My landlord stopped answering my calls after I vacated. LegalRecovery tracked him down, served a physical notice to his residence, and got my ₹80,000 deposit returned.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rajesh Khanna</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As a commercial tenant, recovering deposits is always a hassle. LegalRecovery&apos;s team handled our office lease dispute professionally and secured our ₹5 Lakh refund.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sunita Deshpande</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Excellent service. They drafted the notice quickly, cited the Model Tenancy Act, and the landlord paid the deposit refund without any further delays.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Manoj Bajpayee</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They tried to deduct ₹50,000 for deep cleaning and polishing. LegalRecovery challenged the deductions, and the landlord returned the deposit in full.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Divya Dutta</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us? */}
                <section id="why-choose-legalrecovery-rental" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran property advocates with advanced workflow automation to deliver speed, transparency, and resolution rates that traditional law firms cannot match. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Expert Panel Advocates:</strong> Your notices are drafted and reviewed by experienced property and contract attorneys, ensuring precise statutory citations.</li>
                      <li><strong>Multi-Channel Escalations:</strong> We do not just email landlords. We dispatch physical registered letters to their registered address and local residences to maximize pressure.</li>
                      <li><strong>Real-Time Tracking:</strong> Track the drafting progress, post office dispatch status, and delivery of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no hidden surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="rental-deposit-faqs" className="scroll-mt-32">
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
                  Discuss your rental security deposit recovery case with legal experts. We serve verified notices with full compliance support.
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
