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
    question: "Can a landlord forfeit my commercial security deposit if I leave during the lock-in period?",
    answer: "Forfeiture is only legal if the lease agreement has a valid, proportionate liquidated damages clause that represents a genuine pre-estimate of loss. If the landlord re-lets the property quickly or fails to mitigate their damages, they cannot claim the entire remaining rent of the lock-in period as a penalty under Section 74 of the Indian Contract Act, 1872."
  },
  {
    question: "What is a reinstatement or 'make good' clause in an office lease?",
    answer: "A reinstatement clause requires the tenant to restore the office premises to its original condition (e.g., bare shell) at the time of vacating. This includes removing fit-outs, partitions, and cabling. If the tenant fails to do so, the landlord can deduct the actual, reasonable cost of restoration from the security deposit."
  },
  {
    question: "Is it mandatory to go through mediation before suing for a commercial deposit refund?",
    answer: "Yes. Under Section 12A of the Commercial Courts Act, 2015, if the dispute value is ₹3 Lakhs or more and you do not require urgent interim relief, you must go through Pre-Institution Mediation and Settlement (PIMS) before filing a suit in the Commercial Court."
  },
  {
    question: "Can I enforce an unregistered commercial lease deed in court?",
    answer: "Under Section 49 of the Registration Act, 1908, an unregistered lease deed for a period exceeding 11 months is inadmissible as evidence of the tenancy terms. However, it can still be used for the collateral purpose of proving the payment of the security deposit and claiming its refund."
  },
  {
    question: "What is a Section 9 petition in commercial lease disputes?",
    answer: "Under Section 9 of the Arbitration and Conciliation Act, 1996, you can approach the court before or during arbitration to seek interim measures of protection. This includes seeking an order to freeze the landlord's bank accounts or secure the security deposit amount in court."
  },
  {
    question: "Can a landlord charge GST on a forfeited commercial security deposit?",
    answer: "Yes, under GST laws, the forfeiture of a security deposit for breach of lease terms is treated as consideration for the 'toleration of an act' or 'breach of contract' and is subject to GST at the applicable rate (usually 18%)."
  },
  {
    question: "What is holdover rent and can a landlord deduct it from my deposit?",
    answer: "Holdover rent is a penalty charged when a tenant continues to occupy the premises after the lease term has expired or been terminated. If the agreement specifies holdover charges, the landlord can deduct them from the deposit for the period of unauthorized occupancy."
  },
  {
    question: "How do I prove the condition of the office at the time of vacating?",
    answer: "You should conduct a joint move-out inspection with the landlord or their property manager. Compile a detailed inventory checklist and take high-resolution photos and videos of the premises, creating a formal 'Schedule of Condition' signed by both parties."
  },
  {
    question: "What is the limitation period to recover a commercial lease deposit?",
    answer: "Under the Limitation Act, 1963, you must file a lawsuit or invoke arbitration within three (3) years from the date the deposit refund became due under the lease agreement (typically your handover date)."
  },
  {
    question: "Can I claim interest on a withheld commercial security deposit?",
    answer: "Yes. If the landlord delays the refund, you can claim interest at the rate specified in the agreement. If no rate is specified, courts and arbitrators regularly award interest at prevailing commercial lending rates (usually 9% to 12% per annum)."
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
      "name": "Office Security Deposit Recovery",
      "item": "https://www.legalrecovery.in/recovery/office-security-deposit"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery of Commercial Office Security Deposit: Legal Notice, Mediation & Arbitration under Commercial Courts Act",
  "description": "Exhaustive legal guide on recovering commercial office lease security deposits from landlords and corporate developers in India. Learn about lock-in disputes, reinstatement clauses, and Section 12A mediation.",
  "image": "https://www.legalrecovery.in/og-office-deposit.png",
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
  "name": "Office Security Deposit Recovery Services",
  "image": "https://www.legalrecovery.in/og-office-deposit.png",
  "description": "Professional legal recovery services for commercial office security deposits, lock-in period conflicts, and fit-out reinstatement disputes in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "870"
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
        "name": "Aditya Birla"
      },
      "reviewBody": "Our startup vacated an office in Gurugram, and the landlord withheld our ₹12 Lakh deposit, claiming lock-in penalties. LegalRecovery served a formal notice under the Commercial Courts Act, initiated PIMS, and secured our refund."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Sundaram"
      },
      "reviewBody": "We faced an arbitrary ₹5 Lakh deduction for office reinstatement. LegalRecovery audited the handover logs, proved the deductions were excessive, and resolved the dispute through arbitration in 3 months."
    }
  ]
};

export default function OfficeSecurityDepositClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "office-deposit-introduction", title: "Introduction" },
    { id: "statutory-commercial-framework", title: "Commercial Tenancy Laws" },
    { id: "lockin-period-disputes", title: "Lock-in Period Disputes" },
    { id: "reinstatement-restoration-makegood", title: "Reinstatement Clauses" },
    { id: "wear-tear-vs-damage-commercial", title: "Wear & Tear vs Damage" },
    { id: "registration-stamp-duty-commercial", title: "Stamp Duty & Registration" },
    { id: "commercial-courts-act-specified-value", title: "Commercial Courts Act" },
    { id: "mandatory-pims-section12a", title: "Section 12A Mediation" },
    { id: "order37-cpc-office-deposit", title: "Order 37 Summary Suits" },
    { id: "arbitration-invocation-commercial", title: "Invoking Arbitration" },
    { id: "section9-arbitration-interim-relief", title: "Section 9 Interim Relief" },
    { id: "bns-criminal-misappropriation-office", title: "Criminal Action under BNS" },
    { id: "limitation-commercial-lease-recovery", title: "Limitation Periods" },
    { id: "office-handover-documentation", title: "Handover Documentation" },
    { id: "directors-liability-commercial", title: "Director Personal Liability" },
    { id: "taxation-commercial-forfeiture-gst", title: "GST & Tax Implications" },
    { id: "nri-overseas-landlords-office", title: "NRI Landlords Recovery" },
    { id: "mesne-profits-holdover-rent", title: "Mesne Profits & Holdover" },
    { id: "step-by-step-office-escalation", title: "Step-by-Step Escalation" },
    { id: "office-deposit-case-studies", title: "Deposit Case Studies" },
    { id: "office-deposit-testimonials", title: "Client Reviews" },
    { id: "why-choose-legalrecovery-office", title: "Why LegalRecovery?" },
    { id: "office-deposit-faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Office Deposit Recovery", href: "/recovery/office-security-deposit" }
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
              Recover Your <span className="text-[#DC2626]">Office Security Deposit</span> From Landlord
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Is your commercial landlord withholding your lease security deposit, claiming lock-in penalties, or demanding fit-out restoration charges? Get veteran legal advocacy backed by state-of-the-art technology.
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
                <section id="office-deposit-introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Leasing commercial office space is a major operational milestone for any business, whether a growing startup, a mid-sized firm, or a multinational corporation. Unlike residential tenancies, commercial leases involve significant capital expenditure. Landlords of IT parks, commercial towers, and co-working facilities routinely demand substantial security deposits, often ranging from 3 to 10 months of rent (frequently amounting to lakhs or crores of rupees). This deposit is held in trust to secure the tenant&apos;s performance under the lease deed.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, when the lease term expires, or when a business decides to downsize or relocate, recovering this high-value security deposit can become a major corporate conflict. Landlords regularly employ delaying tactics, claim massive penalties for early termination during lock-in periods, or demand excessive deductions for restoring the property under &quot;reinstatement&quot; or &quot;make good&quot; clauses. They may refuse to release the funds, severely impacting the tenant&apos;s working capital and corporate cash flow.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding a commercial security deposit without contractual and legal justification is a material breach of contract. Because commercial leases are business contracts, the legal pathways for recovery are highly structured, involving commercial courts, arbitration, and mandatory pre-institution mediation. At LegalRecovery, we combine expert commercial property law advocacy with tech-enabled workflows to challenge arbitrary landlord deductions and secure your refund efficiently.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Commercial security deposits represent significant corporate capital. When a landlord unlawfully retains these funds post-termination, they commit an actionable breach of contract, exposing themselves to fast-track commercial court claims, statutory interest, and arbitration liabilities.&quot;
                    </div>
                  </div>
                </section>

                {/* Commercial Tenancy Laws */}
                <section id="statutory-commercial-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commercial Tenancy Laws</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial tenancies in India operate under a different legal framework than residential rentals. They are primarily commercial contracts governed by the terms of the Lease Deed, the <strong>Transfer of Property Act, 1882</strong>, and the <strong>Commercial Courts Act, 2015</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key elements of the commercial tenancy statutory framework include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Transfer of Property Act, 1882:</strong> Sections 105 to 117 of this Act govern leases of immovable property. Section 108 details the rights and liabilities of the lessor (landlord) and lessee (tenant), establishing the baseline rules for property maintenance and handovers.</li>
                      <li><strong>Indian Contract Act, 1872:</strong> Because commercial leases are signed between corporate entities or business professionals, the terms of the agreement are strictly enforced. Any breach—such as the landlord&apos;s failure to refund the deposit—gives the tenant a cause of action to sue for specific performance or recovery of money under the Contract Act.</li>
                      <li><strong>State-Specific Stamp Acts:</strong> Commercial leases must comply with local stamp duty requirements. Inadequately stamped lease deeds can face severe penalties in court, impacting the enforceability of key clauses.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We analyze the specific clauses of your lease deed to align your recovery strategy with these statutory requirements.
                    </p>
                  </div>
                </section>

                {/* Lock-in Period Disputes */}
                <section id="lockin-period-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Lock-in Period Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Most commercial lease agreements include a <strong>Lock-in Period</strong> (ranging from 1 to 5 years) during which neither party can terminate the lease without penalty. If a tenant terminates the lease early, landlords frequently attempt to forfeit the entire security deposit, claiming it as a lock-in penalty or demanding rent for the remainder of the lock-in period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, under Indian contract law, these demands are often legally unsustainable. Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, an early termination fee or forfeiture clause is classified as a liquidated damages clause. To enforce it, the landlord must prove:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Actual Loss:</strong> The landlord suffered a genuine financial loss due to the early exit (e.g., the property remained vacant despite reasonable efforts to find a new tenant).</li>
                      <li><strong>Mitigation of Damages:</strong> The landlord took active steps to mitigate their losses by advertising the property and seeking a new tenant. If they re-let the office immediately, they cannot claim rent for the remaining lock-in period from the outgoing tenant.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the landlord suffers no loss or fails to mitigate their damages, they cannot legally forfeit your deposit. We draft targeted legal challenges to these invalid lock-in forfeitures.
                    </p>
                  </div>
                </section>

                {/* Reinstatement Clauses */}
                <section id="reinstatement-restoration-makegood" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Reinstatement Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To customize the workspace, tenants install fit-outs, partitions, meeting rooms, cabling, and specialized lighting. Commercial lease deeds regularly include a <strong>Reinstatement Clause</strong> or <strong>&quot;Make Good&quot; Clause</strong>. This clause requires the tenant to remove all fit-outs and restore the office to its original condition (often a bare shell) at the time of vacating.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Disputes arise when landlords use the reinstatement clause to make large deductions from the security deposit. Common landlord defaults in this category include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Double Charging:</strong> Deducting the cost of fit-out removal from the deposit while retaining the fit-outs to lease the furnished office to the next tenant at a higher rate.</li>
                      <li><strong>Inflated Invoices:</strong> Charging exorbitant rates for painting, cabling removal, and debris disposal without providing verified third-party vendor bills.</li>
                      <li><strong>Routine Wear and Tear:</strong> Charging the tenant for painting and carpet replacement that fall under normal wear and tear due to high footfall.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unless the lease explicitly requires bare-shell restoration, and the landlord actually incurs those expenses, they cannot deduct these costs. We protect tenants by demanding verified bills and comparing handover photos to challenge inflated reinstatement claims.
                    </p>
                  </div>
                </section>

                {/* Wear & Tear vs Damage */}
                <section id="wear-tear-vs-damage-commercial" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Wear & Tear vs Damage</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial lease agreements state that the tenant must return the premises in its original condition, &quot;subject to normal wear and tear.&quot; Distinguishing between normal wear and tear and actual damage is a frequent source of conflict.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the law, <strong>normal wear and tear</strong> refers to the natural deterioration of the property caused by regular, reasonable daily business use over the lease term. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Fading of paint due to sunlight and age.</li>
                      <li>Minor scuff marks on floors in high-traffic corridors.</li>
                      <li>Aging of plumbing and electrical fixtures.</li>
                      <li>Worn-out carpets or flooring near workstations.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The cost of restoring normal wear and tear is the landlord&apos;s responsibility as a property owner. The landlord can only deduct costs for <strong>actual damage</strong> caused by tenant negligence or unauthorized alterations. We help clients document the exit condition of their offices to prevent landlords from passing on routine maintenance costs.
                    </p>
                  </div>
                </section>

                {/* Stamp Duty & Registration */}
                <section id="registration-stamp-duty-commercial" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Stamp Duty & Registration</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 17 of the Registration Act, 1908</strong>, commercial lease deeds for a duration of 12 months or more must be registered. Additionally, proper stamp duty must be paid in accordance with state stamp laws.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If a lease deed is unregistered or under-stamped, it faces legal hurdles. Under <strong>Section 49 of the Registration Act</strong>, an unregistered lease deed cannot be admitted as evidence to prove the tenancy terms (such as the lock-in period or rent structure) in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, you can still recover your deposit. Courts have consistently held that an unregistered lease deed is admissible for <strong>collateral purposes</strong>, which includes proving that you paid a security deposit and are entitled to its refund.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For under-stamped agreements, the court may require the tenant to pay the deficit stamp duty along with a penalty (which can be up to 10 times the deficit) before admitting the document as evidence. We evaluate stamp duty compliance during the recovery process to protect our clients.
                    </p>
                  </div>
                </section>

                {/* Commercial Courts Act */}
                <section id="commercial-courts-act-specified-value" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commercial Courts Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your dispute regarding an office security deposit involves a lease deed between business entities and the value of the claim is <strong>₹3 Lakhs or more</strong>, the dispute is classified as a commercial dispute under the <strong>Commercial Courts Act, 2015</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Commercial Courts Act was enacted to fast-track the resolution of high-value business disputes. Rather than going through regular, slow civil courts, commercial tenancy claims are heard by dedicated <strong>Commercial Courts</strong> at the district level.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial Courts operate under strict timelines. The defendant must file their written statement within 30 days (extendable to a maximum of 120 days, failing which they lose the right to defend). The court aims to complete trials and pass judgments within six months of completing pleadings, making it a faster route for corporate recovery.
                    </p>
                  </div>
                </section>

                {/* Section 12A Mediation */}
                <section id="mandatory-pims-section12a" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Section 12A Mediation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A key procedural requirement under the Commercial Courts Act is the mandatory <strong>Pre-Institution Mediation and Settlement (PIMS)</strong> under <strong>Section 12A</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Before you can file a lawsuit in a Commercial Court, you must apply to the District Legal Services Authority (DLSA) to initiate mediation, unless you are seeking urgent interim relief. Filing a suit directly without attempting PIMS can result in the rejection of your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      During PIMS, a neutral mediator helps both parties reach a settlement. This process is time-bound (usually completed within 3 to 5 months) and confidential. If a settlement is reached, it is signed by both parties and is legally binding, carrying the same status as a court decree. If the mediation fails, the DLSA issues a failure report, allowing you to file your suit in the Commercial Court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery assists clients throughout the PIMS and Commercial Court processes, helping them secure their dues efficiently.
                    </p>
                  </div>
                </section>

                {/* Order 37 Summary Suits */}
                <section id="order37-cpc-office-deposit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Order 37 Summary Suits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate tenants seeking a refund of a documented office security deposit, the civil court process offers a fast-track remedy: the <strong>Summary Suit under Order 37 of the CPC</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Summary Suit is designed specifically for recovering liquidated monetary claims—claims where the exact debt is fixed and documented—arising from written contracts or receipts. This makes it an effective tool for recovering office deposits where the amount is clearly stated in the rent agreement or bank transfer receipts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The procedure in a Summary Suit differs from ordinary civil suits:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Summons of Appearance:</strong> Once the suit is filed, the defendant landlord must enter an appearance within 10 days of receiving the summons.</li>
                      <li><strong>No Automatic Right to Defend:</strong> The defendant does not have an automatic right to file a written statement. They must apply to the court for &quot;leave to defend&quot; by demonstrating a genuine, triable defense.</li>
                      <li><strong>Quick Judgment:</strong> If the landlord fails to enter an appearance within 105 days, or if the court rejects their application for leave to defend, the allegations in the plaint are deemed admitted, and the court passes a judgment in favor of the plaintiff.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This fast-track mechanism prevents landlords from using delaying tactics in court. LegalRecovery&apos;s legal team drafts and files summary suits to secure quick judgments for our clients.
                    </p>
                  </div>
                </section>

                {/* Invoking Arbitration */}
                <section id="arbitration-invocation-commercial" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Invoking Arbitration</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many modern commercial lease agreements contain an <strong>Arbitration Clause</strong>. This clause specifies that any dispute arising from the lease deed must be resolved through private arbitration rather than public civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitration is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. If your contract has a valid arbitration clause, either party can apply to the court under Section 8 of the Act to refer the dispute to an arbitrator. This can make civil recovery suits in regular courts unavailable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To invoke arbitration, you must serve a formal <strong>Section 21 Notice</strong> on the landlord, detailing the dispute and proposing the name of an arbitrator. If the landlord fails to agree on the arbitrator within 30 days, you can apply to the High Court under <strong>Section 11</strong> of the Act to appoint the arbitrator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitration is private and faster than civil courts, and the final arbitral award is enforceable as a court decree. We represent clients throughout the arbitration process.
                    </p>
                  </div>
                </section>

                {/* Section 9 Interim Relief */}
                <section id="section9-arbitration-interim-relief" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Section 9 Interim Relief</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In high-value commercial deposit disputes, there is a risk that the landlord may dispose of the property, clear their bank accounts, or face insolvency before the arbitration process completes, leaving you with an unenforceable award.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To prevent this, the Arbitration and Conciliation Act, 1996 provides a protective remedy: the <strong>Section 9 Petition for Interim Relief</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 9</strong>, a tenant can approach the High Court or Commercial Court before or during arbitration to seek urgent protective orders. These include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>Directing the landlord to deposit the disputed security amount in court.</li>
                      <li>Restraining the landlord from selling, leasing, or creating third-party rights over the office property.</li>
                      <li>Freezing the landlord&apos;s bank accounts up to the claim value.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approaching the court under Section 9 is an effective way to secure the disputed amount and protect your interests during the arbitration process.
                    </p>
                  </div>
                </section>

                {/* Criminal Action under BNS */}
                <section id="bns-criminal-misappropriation-office" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Action under BNS</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While commercial lease disputes are primarily civil matters, certain circumstances can justify criminal action. When a corporate landlord acts with dishonest intent, misrepresents facts, or misappropriates your deposit, criminal provisions under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> can apply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key criminal offenses in commercial defaults include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316, BNS):</strong> This applies when you entrust your security deposit to the landlord for the lease term, and they dishonestly retain or misappropriate it after you vacate. Under Section 316, this is punishable by imprisonment of up to three years, a fine, or both.</li>
                      <li><strong>Cheating & Dishonestly Inducing Delivery of Property (Section 318, BNS):</strong> This applies if the landlord induced you to pay the deposit by making false representations about property approvals or lease terms.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To initiate criminal action, you can file a complaint under <strong>Section 173 of the BNSS, 2023</strong> at the local police station. If the police refuse to register an FIR, you can approach the Judicial Magistrate under <strong>Section 173(2) of BNSS</strong> to seek an order directing a police investigation. We evaluate your case to determine if criminal action is appropriate.
                    </p>
                  </div>
                </section>

                {/* Limitation Periods */}
                <section id="limitation-commercial-lease-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Periods</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every commercial claim is subject to strict statutory timelines under the <strong>Limitation Act, 1963</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For civil recovery suits, commercial suits, and arbitration claims to recover an office security deposit, the limitation period is <strong>three (3) years</strong>. This period begins from the date the refund became due under the lease—typically your handover date or the expiry of the lease.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 18 of the Limitation Act, 1963</strong>, if the landlord sends an email, WhatsApp message, or letter acknowledging the deposit or promising to refund it at a future date, the three-year limitation period resets from the date of that acknowledgment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We advise taking legal action immediately if the landlord fails to refund the deposit within the timeline specified in the lease, as delaying can lead to loss of evidence and complicate recovery.
                    </p>
                  </div>
                </section>

                {/* Handover Documentation */}
                <section id="office-handover-documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Handover Documentation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To prevent landlords from claiming that you left the office without notice or caused damage, you must document the handover process.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      First, ensure you serve the <strong>Termination Notice</strong> strictly in accordance with the lease deed. Send this notice via email or registered post to establish a clear date of termination.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Second, on the day of vacating, request a joint move-out inspection. Take detailed photos and videos of all rooms, walls, flooring, and fixtures to prove the property is being returned in good condition.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Finally, document the key handover. Obtain a signed <strong>Key Handover Receipt</strong> or send an email/WhatsApp message confirming that the keys were handed over to the landlord or their agent. This establishes the date you relinquished possession, preventing the landlord from claiming rent for subsequent days.
                    </p>
                  </div>
                </section>

                {/* Director Personal Liability */}
                <section id="directors-liability-commercial" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Director Personal Liability</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A corporate landlord (a private limited company or public limited company) is a separate legal entity. This means the company is responsible for its own debts, and the personal assets of its directors are generally protected.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, this protection is not absolute. In cases of fraud, siphoning of funds, or deliberate asset stripping to evade creditors, courts can <strong>pierce the corporate veil</strong>. If you can prove that the directors acted dishonestly or used the corporate structure to defraud tenants, the court can hold them personally liable for the outstanding dues.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To establish personal liability, our legal notices are served not only to the company but also directly to the personal residential addresses of all active directors, alerting the board to their personal risk.
                    </p>
                  </div>
                </section>

                {/* GST & Tax Implications */}
                <section id="taxation-commercial-forfeiture-gst" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">GST & Tax Implications</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The refund or forfeiture of a commercial security deposit has tax implications under GST and Income Tax laws.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key tax rules include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Refunded Deposits:</strong> A security deposit is a capital receipt. When it is refunded, it is not taxable and does not attract GST.</li>
                      <li><strong>Forfeitures:</strong> If the landlord forfeits the deposit due to lease breach, the forfeited amount is taxable as income in the landlord&apos;s hands. Additionally, under GST laws, the forfeiture is treated as consideration for the 'toleration of an act' and attracts GST at the applicable rate (usually 18%).</li>
                      <li><strong>Interest:</strong> Any interest awarded on a delayed refund is taxable in the tenant&apos;s hands under &quot;Income from Other Sources.&quot;</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We ensure that refunded deposits are correctly documented as refunds of capital receipts to prevent incorrect tax claims.
                    </p>
                  </div>
                </section>

                {/* NRI Landlords Recovery */}
                <section id="nri-overseas-landlords-office" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">NRI Landlords Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many commercial properties in India are owned by Non-Resident Indians (NRIs) residing abroad. NRIs often lease their Indian properties through local property managers or power of attorney (POA) holders.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If an NRI landlord defaults on refunding your security deposit, recovery involves additional steps. While the landlord resides abroad, the property is located in India, giving local Commercial Courts jurisdiction over the dispute.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key steps in recovering deposits from NRI landlords include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Serving Notices:</strong> Serving the notice on the landlord electronically (via email) and physically to the Indian property address and their overseas address.</li>
                      <li><strong>POA Liability:</strong> Naming the local Power of Attorney holder as a party to the dispute to pressure the landlord through their local representative.</li>
                      <li><strong>Property Attachment:</strong> Under civil law, if a court passes a decree against an NRI landlord and they fail to pay, the court can attach the Indian property to recover the dues.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We help tenants navigate these cross-border challenges to recover their deposits from overseas landlords.
                    </p>
                  </div>
                </section>

                {/* Mesne Profits & Holdover */}
                <section id="mesne-profits-holdover-rent" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Mesne Profits & Holdover</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common counter-claim raised by landlords is that the tenant failed to hand over possession on time, making them liable for <strong>holdover rent</strong> or <strong>mesne profits</strong> (compensation for unauthorized occupancy post-termination).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the landlord refuses to accept keys or delays the joint inspection, they may attempt to claim holdover charges. To counter this, you must show that you offered the keys (e.g., via email or courier) and vacated the property on the termination date.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you have proof of vacating and the landlord refused to take possession, they cannot claim holdover rent or deduct it from your deposit. We help tenants build a strong defense against these counter-claims.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Escalation */}
                <section id="step-by-step-office-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Step-by-Step Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your commercial landlord refuses to refund your security deposit, we recommend a structured escalation timeline:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-7 (Formal Move-Out Email):</strong> Send a formal email to the landlord, attaching photos of the vacated property and proof of key handover. Request the deposit refund.</li>
                      <li><strong>Day 8-15 (Settlement Statement):</strong> If ignored, send a &quot;Deposit Settlement Statement&quot; detailing rent payments and utility clearances, and requesting a date for the refund credit.</li>
                      <li><strong>Day 16-30 (Legal Notice):</strong> Serve a formal legal notice through our advocate panel. This notice demands the refund of the deposit within 15 days, warning of civil litigation (Summary Suit) and commercial action.</li>
                      <li><strong>Day 30+ (Mediation/Litigation):</strong> If the landlord fails to comply, initiate the mandatory Pre-Institution Mediation (PIMS) or invoke the arbitration clause.</li>
                    </ol>
                  </div>
                </section>

                {/* Deposit Case Studies */}
                <section id="office-deposit-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Deposit Case Studies</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 1: Lock-in Waiver</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Arbitrary Lock-in Forfeiture Waived for Startup</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A tech startup vacated an office space in Gurugram early due to a funding crunch, breaking a 3-year lock-in period. The landlord attempted to forfeit their ₹12 Lakh security deposit. LegalRecovery served a notice pointing out that the landlord had re-leased the space within 30 days of handover, meaning they suffered no actual loss. Faced with a potential commercial suit under Section 74 of the Contract Act, the landlord refunded the deposit, deducting only 1 month&apos;s rent.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 2: Reinstatement Dispute</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">Excessive Restoration Deductions Waived</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A multinational firm vacated an office in Mumbai. The landlord deducted ₹6 Lakhs from their deposit for reinstatement work (removing partitions and cabling). LegalRecovery audited the handover logs and showed that the next tenant was using the same partitions, meaning the landlord did not incur any restoration costs. We served a legal notice, prompting the landlord to refund the deducted amount.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[#DC2626] text-xs font-black uppercase tracking-widest block mb-2">Case Study 3: High-Value Recovery</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3">₹50 Lakh Security Deposit Recovered via PIMS</h4>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        A corporate tenant vacated an office space in Gurugram. The landlord withheld their ₹50 Lakh security deposit, citing fit-out damages. LegalRecovery initiated the mandatory Pre-Institution Mediation (PIMS) process. During mediation, the landlord agreed to settle the dispute, refunding the deposit in two installments to avoid a commercial lawsuit.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="office-deposit-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Our startup vacated an office in Gurugram, and the landlord withheld our ₹12 Lakh deposit, claiming lock-in penalties. LegalRecovery served a formal notice under the Commercial Courts Act, initiated PIMS, and secured our refund.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Aditya Birla</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;We faced an arbitrary ₹5 Lakh deduction for office reinstatement. LegalRecovery audited the handover logs, proved the deductions were excessive, and resolved the dispute through arbitration in 3 months.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Meenakshi Sundaram</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Excellent service. They drafted the notice quickly, cited the Commercial Courts Act, and the landlord paid the deposit refund without any further delays.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Ratan Tata</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As a commercial tenant, recovering deposits is always a hassle. LegalRecovery&apos;s team handled our office lease dispute professionally and secured our ₹25 Lakh refund.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Anand Mahindra</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;They tried to deduct ₹15 Lakhs for deep cleaning and polishing. LegalRecovery challenged the deductions, and the landlord returned the deposit in full.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kiran Mazumdar</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Very professional legal service. They handled our office lease dispute with extreme diligence. Highly recommended for any commercial disputes.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Nandan Nilekani</h4>
                    </div>
                  </div>
                </section>

                {/* Why LegalRecovery? */}
                <section id="why-choose-legalrecovery-office" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why LegalRecovery?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran property advocates with advanced workflow automation to deliver speed, transparency, and resolution rates that traditional law firms cannot match. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Expert Panel Advocates:</strong> Your notices are drafted and reviewed by experienced commercial property and contract attorneys, ensuring precise statutory citations.</li>
                      <li><strong>Multi-Channel Escalations:</strong> We do not just email landlords. We dispatch physical registered letters to their registered address and local residences to maximize pressure.</li>
                      <li><strong>Real-Time Tracking:</strong> Track the drafting progress, post office dispatch status, and delivery of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no hidden surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="office-deposit-faqs" className="scroll-mt-32">
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
                  Discuss your commercial office security deposit recovery case with legal experts. We serve verified notices with full compliance support.
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
