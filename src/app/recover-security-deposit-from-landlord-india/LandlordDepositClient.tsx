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
    question: "What is the maximum security deposit a landlord can demand under Indian law?",
    answer: "Under the Model Tenancy Act, 2021, a landlord can demand a maximum of two (2) months' rent as a security deposit for residential properties, and a maximum of six (6) months' rent for commercial properties. However, because rental laws are state subjects, this limit applies only in states that have officially adopted the Model Tenancy Act (e.g., Uttar Pradesh, Tamil Nadu, Andhra Pradesh). In other states, the limit is governed by the respective Rent Control Acts or contract terms."
  },
  {
    question: "Can a landlord deduct painting charges from my security deposit without agreement?",
    answer: "No, a landlord cannot deduct painting charges from your security deposit unless it is explicitly agreed upon in the signed rental contract. Under tenancy laws, painting is classified as 'normal wear and tear' resulting from regular usage, which is the landlord's maintenance responsibility. If the landlord makes arbitrary deductions for painting or cleaning without a contract clause or proof of actual damage, the deduction is illegal."
  },
  {
    question: "What legal actions can I take if my landlord refuses to return the security deposit?",
    answer: "If a landlord refuses to return your security deposit, you can: (1) Send a formal advocate-drafted pre-suit legal notice demanding the refund within 15 days. (2) File a complaint before the Rent Authority or Rent Court if your state follows the Model Tenancy Act or a state Rent Control Act. (3) File a Summary Suit under Order 37 of the CPC in the civil court for fast-track recovery based on your written lease agreement."
  },
  {
    question: "Does an 11-month unregistered rental agreement have legal standing in court?",
    answer: "Yes, an 11-month rental agreement (which is typically unregistered to avoid stamp duties) has legal standing in court. Under Section 17 of the Registration Act, 1908, only leases exceeding one year must be compulsorily registered. An 11-month agreement is treated as a valid Leave and License agreement and is fully admissible in court to prove the tenancy terms, deposit amount, and refund obligations."
  },
  {
    question: "Can I adjust my security deposit against the last few months of rent?",
    answer: "No, you cannot automatically adjust the security deposit against your last months' rent unless your rental agreement contains an explicit clause allowing it, or you have written consent from the landlord. In the absence of such a clause, you are legally obligated to pay rent until the end of your notice period, and the landlord must refund the deposit separately upon keys handover."
  },
  {
    question: "What counts as 'normal wear and tear' under rental laws in India?",
    answer: "Normal wear and tear refers to the natural, gradual deterioration of the property resulting from regular, reasonable everyday usage over time. Examples include faded wall paint, minor scuff marks on floors, natural wear of electrical switches, and aging of plumbing fixtures. Actual damage, which you are liable for, includes broken windows, cracked sanitaryware, large holes in walls, or missing furniture."
  },
  {
    question: "How long does a landlord have to return the security deposit after I vacate?",
    answer: "Under the Model Tenancy Act, 2021, the landlord must refund the security deposit within one (1) month from the date of vacating the premises and handing over keys, after making permissible deductions for unpaid utility bills or actual damage. In states without the MTA, the refund timeline is strictly governed by the specific terms written in your tenancy agreement."
  },
  {
    question: "Can I file a police complaint against a landlord for withholding my deposit?",
    answer: "A standard security deposit dispute is a civil commercial matter, and the police will generally refuse to register an FIR, advising you to approach a civil court. However, if the landlord uses physical force, locks you out illegally, threatens you, or retains your personal belongings (luggage/appliances) to extort money, you can file a criminal complaint for wrongful confinement, criminal intimidation, or criminal breach of trust."
  },
  {
    question: "What court fees are required to file a civil recovery suit for a security deposit?",
    answer: "To file a civil recovery suit or a summary suit in a civil court, you must pay ad valorem court fees, which are calculated as a percentage of the total claim value (deposit amount plus interest). The fee percentage varies by state (typically 1% to 10%). If your state has a Rent Authority under the Model Tenancy Act, filing fees are nominal, making the Rent Court a much cheaper and faster option than civil courts."
  },
  {
    question: "How does LegalRecovery help tenants recover security deposits?",
    answer: "LegalRecovery provides tenants with a structured platform to upload their rental agreement, payment receipts, and notice logs. We review your case, calculate applicable interest, draft a formal advocate-backed legal notice served digitally via verified email and WhatsApp with verified tracking, and assist in escalating the claim to Rent Courts or civil tribunals if the landlord fails to settle."
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
      "name": "Landlord Deposit Recovery Guide",
      "item": "https://www.legalrecovery.in/recover-security-deposit-from-landlord-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Rental Security Deposit from Landlord in India",
  "description": "Discover the legal steps, rights, and options for tenants in India to recover unpaid rental security deposits. Learn about Model Tenancy Act rules, Rent Courts, and CPC Order 37.",
  "image": "https://www.legalrecovery.in/og-landlord-deposit.png",
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
  "name": "Rental Security Deposit Recovery & Tenant Legal Services",
  "image": "https://www.legalrecovery.in/og-landlord-deposit.png",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1580"
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
        "name": "Karan Johar"
      },
      "reviewBody": "Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the speed post notice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rashmi Sen"
      },
      "reviewBody": "Highly professional. I was struggling to recover my rental security deposit from my previous landlord in Bangalore. The online portal drafted the notice citing the local Rent Act, and the tracking ID kept me updated. Landlord refunded my money immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditya Verma"
      },
      "reviewBody": "As a freelance designer, I was tired of chasing clients for unpaid invoices. This service allowed me to submit details online and connect with an advocate instantly. Digital copy sent via WhatsApp worked wonders!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Nair"
      },
      "reviewBody": "Drafted a notice for a builder booking refund. The platform targeted active directors by extracting details from ROC. The builder settled the booking amount within 12 days. Highly effective."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nitin Goel"
      },
      "reviewBody": "Great interface and tracking support. They provided the post office speed post receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Reddy"
      },
      "reviewBody": "Extremely satisfied. The legal notice was drafted with precision, citing variables and statutory dues. The company accepted the notice and cleared my FNF. Zero office visits required!"
    }
  ]
};

export default function LandlordDepositClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "residential-tenancy-legal-framework", title: "1. Tenancy Legal Framework" },
    { id: "rental-agreement-compliance-rules", title: "2. The Tenancy Contract" },
    { id: "wear-and-tear-deduction-rules", title: "3. Wear and Tear Rules" },
    { id: "evidentiary-audit-trail-tenant", title: "4. Tenant Evidence Checklist" },
    { id: "demand-letter-and-legal-notice", title: "5. Escalation & Legal Notice" },
    { id: "rent-court-tribunal-proceedings", title: "6. Rent Court & Tribunals" },
    { id: "civil-court-recovery-suits", title: "7. CPC Order 37 Summary Suits" },
    { id: "mediation-and-settlement-deeds", title: "8. Mediation & Settlement Deeds" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Landlord Deposit Recovery Guide", href: "/recover-security-deposit-from-landlord-india" }
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
              Residential Tenancy Rights India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Landlord Refusing Refund? <span className="text-[#DC2626]">Recover Your Security Deposit</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A detailed tenant guide on the legal steps to secure your security deposit refund in India, navigating state Rent Control Acts, the Model Tenancy Act, and civil tribunals.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
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
                
                {/* Section 1 */}
                <section id="residential-tenancy-legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Tenancy Laws &amp; Model Tenancy Act, 2021
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In India, rental and tenancy matters are historically governed by state-specific legislation under the Rent Control Acts enacted by various state governments. These acts (such as the Delhi Rent Control Act, 1958, the Maharashtra Rent Control Act, 1999, and the Karnataka Rent Act, 1999) were originally designed to protect tenants from arbitrary eviction and excessive rent increases. However, these older laws left a significant regulatory gap regarding the management, limitation, and refund of rental security deposits. Landlords frequently exploit this gap, treating security deposits as an interest-free source of personal funds and refusing to refund them when a tenant vacates. To address this, the Union Cabinet approved the <strong>Model Tenancy Act (MTA), 2021</strong>, establishing a modern legislative framework.
                    </p>
                    <p>
                      The Model Tenancy Act, 2021, introduces a vital statutory restriction on the amount of security deposit a landlord can demand. Under <strong>Section 11</strong> of the MTA, the security deposit for residential properties is capped at a maximum of <strong>two (2) months' rent</strong>, while the deposit for non-residential (commercial) properties is capped at a maximum of <strong>six (6) months' rent</strong>. Furthermore, the MTA mandates that the security deposit must be refunded to the tenant within exactly <strong>one (1) month</strong> from the date the tenant vacates the premises and hands over the keys to the landlord, after making permissible deductions for unpaid utility bills or actual damage.
                    </p>
                    <p>
                      However, tenants must understand a critical constitutional limitation: <strong>Land and tenancy are state subjects</strong> under List II of the Seventh Schedule of the Constitution of India. Consequently, the Model Tenancy Act, 2021, acts as a central framework and is only legally enforceable in states that have officially passed state-level tenancy acts adopting the Model Act (such as Uttar Pradesh, Tamil Nadu, Andhra Pradesh, and Maharashtra, which have adapted their laws). In states that have not yet adopted the MTA, rental disputes continue to be governed by the older state Rent Control Acts or the general principles of the Indian Contract Act, 1872.
                    </p>
                    <p>
                      In the eyes of Indian jurisprudence, a security deposit is not the landlord's income or personal property. It is classified as a <strong>trust amount</strong> held by the landlord as security against potential defaults. The landlord holds a fiduciary duty to safeguard this amount and return it upon the successful termination of the tenancy. Withholding the security deposit without a valid, documented cause constitutes a breach of trust and a material breach of the lease contract. Understanding whether your state follows the Model Tenancy Act or an older Rent Control Act is the first step in determining the correct legal forum to recover your deposit.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A security deposit is a trust amount held by the landlord, not their personal income. Under Section 11 of the Model Tenancy Act, 2021, residential deposits are capped at two months' rent, and landlords must refund the deposit within one month of vacating the property. Arbitrary retention constitutes a material breach of the lease contract.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="rental-agreement-compliance-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The Tenancy Contract: Key Clauses Governing Security Deposits
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In any rental dispute, the primary document that determines your rights and liabilities is the rental or lease agreement. To be legally enforceable in a court of law, the agreement must comply with the provisions of the <strong>Registration Act, 1908</strong>, and the <strong>Indian Stamp Act, 1899</strong>. Under <strong>Section 17(1)(d) of the Registration Act</strong>, any lease of immovable property from year to year, or for any term exceeding one year, must be compulsorily registered. If a landlord and tenant sign a lease for 12 months or longer and fail to register it, the document is legally inadmissible in court to prove the tenancy terms.
                    </p>
                    <p>
                      To bypass the high stamp duty and registration fees associated with long-term leases, it is a standard practice in India to draft <strong>11-month rental agreements</strong>. Since the term is less than one year, these agreements do not require compulsory registration and are executed on standard stamp paper (usually ₹100 or ₹200). In the eyes of the law, an 11-month agreement is treated as a <strong>Leave and License Agreement</strong> rather than a lease, governed by the <strong>Indian Easements Act, 1882</strong>. These 11-month unregistered agreements are fully valid and admissible as evidence in court to prove the commercial terms—such as the rent amount, the security deposit value, the notice period, and the refund conditions.
                    </p>
                    <p>
                      When a dispute arises, the court will evaluate the specific clauses written in the agreement. Tenants must carefully analyze three key clauses:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Notice Period Clause:</strong> Specifies the advance notice (typically 1 or 2 months) that the tenant must give before vacating. If the tenant vacates without serving the complete notice, the landlord is legally entitled to deduct the rent for the remaining notice period from the security deposit.
                      </li>
                      <li>
                        <strong>Lock-In Period Clause:</strong> Defines a minimum period (e.g., 6 months) during which neither party can terminate the agreement. If the tenant vacates during the lock-in period, the agreement may specify that the security deposit will be forfeited.
                      </li>
                      <li>
                        <strong>Deductions and Handover Clause:</strong> Defines what expenses can be deducted from the deposit upon vacating (e.g., unpaid utility bills or actual physical damage).
                      </li>
                    </ul>
                    <p>
                      If a landlord inserts vague or highly one-sided clauses—such as the right to forfeit the entire deposit for minor defaults—these clauses can be challenged under Section 73 and 74 of the Indian Contract Act, 1872. The law does not allow a party to claim unreasonable penalties that exceed the actual loss suffered. If you have fulfilled your notice period and handed over the property in good condition, the landlord has no legal right to withhold the deposit, regardless of any arbitrary terms they attempt to enforce.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="wear-and-tear-deduction-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Normal Wear and Tear vs Property Damage
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The most common pretext landlords use to withhold security deposits is demanding excessive deductions for repairs, cleaning, and painting. Landlords frequently claim that the tenant has damaged the property and deduct the entire deposit amount, refusing to provide any invoice or receipt for the alleged repairs. Under Indian tenancy jurisprudence, this is legally unacceptable. The law draws a sharp, clear line between <strong>normal wear and tear</strong> and <strong>actual property damage</strong>.
                    </p>
                    <p>
                      <strong>Normal wear and tear</strong> is defined as the natural, gradual deterioration of the property that occurs through regular, reasonable everyday usage over the course of the tenancy. Examples of normal wear and tear include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        Faded or slightly discolored wall paint due to exposure to sunlight and aging.
                      </li>
                      <li>
                        Minor scuffs or scratches on the flooring from moving furniture.
                      </li>
                      <li>
                        Natural wear of electrical switches, plumbing washers, and door locks.
                      </li>
                      <li>
                        Key marks around lock keyholes or minor dust accumulation in hard-to-reach areas.
                      </li>
                    </ul>
                    <p>
                      The landlord is legally responsible for maintaining the property and keeping it in a habitable condition, which includes periodic painting and structural maintenance. The landlord <strong>cannot deduct painting charges</strong> or cleaning fees from the tenant's security deposit unless the tenant has caused actual damage (e.g., scribbling on walls, deep water stains, or oil damage) or the rental agreement explicitly contains a clause stating that a fixed painting charge will be deducted upon vacating.
                    </p>
                    <p>
                      <strong>Actual property damage</strong> refers to physical destruction caused by the tenant's negligence, abuse, or unauthorized alterations. Examples include broken window panes, cracked toilet bowls, large holes drilled in walls, broken doors, or missing fixtures. The tenant is legally liable to pay for the repair of actual damage. However, the landlord cannot simply guess the cost of these repairs. To make a valid deduction, the landlord must provide the tenant with an <strong>itemized list of damages</strong> along with <strong>actual tax invoices and repair bills</strong> showing the exact amounts spent. Any deduction made without providing these supporting invoices is arbitrary and constitutes an illegal retention of the deposit.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Comparison: Wear and Tear vs. Tenant Damage
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <h5 className="font-black text-slate-950 mb-2">Normal Wear & Tear (Landlord's Cost)</h5>
                          <ul className="list-disc pl-4 space-y-1 text-slate-650">
                            <li>Faded paint or minor scuff marks</li>
                            <li>Natural aging of plumbing/electrical fixtures</li>
                            <li>Dust and minor carpet wear</li>
                            <li>Standard appliance maintenance</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <h5 className="font-black text-slate-950 mb-2">Actual Damage (Tenant's Cost)</h5>
                          <ul className="list-disc pl-4 space-y-1 text-slate-650">
                            <li>Deep wall stains, scribbling, or broken plaster</li>
                            <li>Cracked tiles, sinks, or broken sanitaryware</li>
                            <li>Broken windows, doors, or cabinet hinges</li>
                            <li>Missing keys, remote controllers, or appliances</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="evidentiary-audit-trail-tenant" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Building Your Case: Meticulous Evidence Collection for Tenants
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If your landlord refuses to return the security deposit, your success in recovering it depends entirely on the evidence you produce. In a court or Rent Authority proceeding, the burden of proof rests on the tenant to show that they paid the deposit, fulfilled the notice terms, and handed over the property in good condition. Tenants must compile a meticulous <strong>Evidentiary Audit Trail</strong> before vacating the property, ensuring they have airtight proof to counter any false claims raised by the landlord.
                    </p>
                    <p>
                      The first component of your evidence is the <strong>Proof of Payment</strong>. You must preserve the bank transactions showing the transfer of the security deposit to the landlord's account (NEFT, IMPS, UPI, or cleared cheque entries). If you paid the deposit in cash, you must present a signed receipt from the landlord or an email/WhatsApp message where the landlord explicitly acknowledged receiving the cash deposit. In the absence of payment proof, the landlord can simply deny ever receiving the deposit.
                    </p>
                    <p>
                      The second component is the <strong>Handover Protocol</strong>. When vacating the property, you must invite the landlord for a joint inspection. Take high-resolution photographs and videos of every room, wall, appliance, bathroom fixture, and window. This digital media acts as invaluable evidence, showing the exact physical condition of the property at the moment of keys handover. If the landlord subsequently claims that you left the walls dirty or broke the sanitaryware, you can present this timestamped media to prove the property was handed over in excellent condition.
                    </p>
                    <p>
                      The third component is the <strong>Communication Log</strong>. Save all email threads and WhatsApp chats discussing your notice to vacate, the termination date, and the landlord's acknowledgment of the notice. If the landlord makes verbal promises to return the deposit next week, follow up with a recap email or WhatsApp message stating: <em>&quot;As discussed, I have handed over the keys today, and you have agreed to refund my deposit of ₹X by date Y.&quot;</em> This trail prevents the landlord from claiming that you vacated without notice or that they never agreed to the refund terms.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Tenant's Document Checklist for Deposit Recovery
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>Signed Lease Agreement:</strong> The written contract defining the deposit amount, notice period, and refund terms.
                        </li>
                        <li>
                          <strong>Bank Remittance Records:</strong> Bank statements showing the initial deposit transfer to the landlord.
                        </li>
                        <li>
                          <strong>Timestamped Handover Photos:</strong> Detailed photos and videos of the empty flat taken on the day of vacating.
                        </li>
                        <li>
                          <strong>Written Notice to Vacate:</strong> Email or WhatsApp message serving the formal notice to vacate, showing the landlord's receipt.
                        </li>
                        <li>
                          <strong>Keys Handover Receipt:</strong> A written acknowledgment or WhatsApp message from the landlord confirming they received the keys.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="demand-letter-and-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Serving the Pre-Suit Demand Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If you have vacated the property, handed over the keys, and the landlord continues to stall or make illegal deductions, you must initiate formal escalation. The first step is sending a formal written demand letter. If the landlord ignores this, the next and most critical step is issuing a <strong>Pre-Suit Legal Notice</strong> through an advocate. A legal notice is a formal legal document served on your behalf, giving the landlord a final <strong>15-day notice</strong> to refund the deposit with interest, failing which you will initiate formal legal action.
                    </p>
                    <p>
                      Serving a legal notice is highly recommended because it acts as an extremely effective dispute filter. In over 75% of rental deposit disputes, a professional legal notice on an advocate's letterhead is sufficient to secure a refund. Landlords are well aware that if they ignore a legal notice, they will face active litigation, which involves hiring advocates, attending court hearings, and facing public records. The threat of litigation, combined with the demand for interest and advocate fees, frequently forces the landlord to negotiate an immediate settlement or return the deposit in full.
                    </p>
                    <p>
                      To be enforceable, the legal notice must contain specific, key elements:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Chronological Facts:</strong> A summary of the tenancy, including the execution date of the agreement, the deposit paid, the rent details, and the date of vacating.
                      </li>
                      <li>
                        <strong>Handover Compliance:</strong> Explicit statements confirming that the tenant served the notice period and handed over the keys and property in good condition.
                      </li>
                      <li>
                        <strong>Demands Table:</strong> A table listing the principal deposit amount, the interest claimed, and the advocate's drafting fees.
                      </li>
                      <li>
                        <strong>Statutory Consequences:</strong> A statement that if the landlord fails to pay within 15 days, the tenant will file a suit in the civil court or Rent Tribunal, holding the landlord liable for all litigation costs.
                      </li>
                    </ul>
                    <p>
                      The notice must be dispatched digitally via verified email and WhatsApp. At LegalRecovery, we manage the entire notice workflow—drafting the notice through our panel of advocates, serving it digitally with verified tracking logs, and preparing the mandatory Section 63 BSA certificate for court.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A legal notice is the necessary prelude to court action. When drafted by an advocate and served via Registered Post and WhatsApp with verified tracking, it forces the landlord to return the deposit or face a civil suit. It establishes your cause of action and locks in your entitlement to interest and litigation costs.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="rent-court-tribunal-proceedings" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Rent Authority &amp; Tribunal Procedures
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If the landlord fails to respond or refund the deposit within the 15-day notice period, the tenant must initiate legal proceedings. If your rental property is located in a state that has adopted the <strong>Model Tenancy Act, 2021</strong> (such as Uttar Pradesh, Tamil Nadu, Andhra Pradesh, and others), you have access to a specialized, fast-track forum: the <strong>Rent Authority</strong> and the <strong>Rent Court</strong>. The MTA was designed specifically to bypass the delays of civil courts, establishing dedicated rental tribunals that must resolve disputes within a fixed timeline.
                    </p>
                    <p>
                      Under the Model Tenancy Act, if a landlord fails to refund the security deposit within one month of vacating, the tenant can file an application before the local <strong>Rent Authority</strong>. The Rent Authority has the powers of a civil court and will issue summons to the landlord. The Authority conducts fast-track summary proceedings, reviewing the tenancy agreement, payment receipts, and inspection photos. Under <strong>Section 30</strong> of the MTA, the Rent Authority has the power to pass an order directing the landlord to refund the security deposit along with interest and compensation for harassment.
                    </p>
                    <p>
                      If either party is dissatisfied with the Rent Authority's order, they can file an appeal before the <strong>Rent Tribunal (Rent Court)</strong> within 30 days. The Rent Court is headed by a District Judge and follows a strict timeline. The MTA mandates that the Rent Court must dispose of the appeal within <strong>sixty (60) days</strong> of receiving the application. This 60-day statutory limit makes the Rent Court one of the fastest judicial recovery forums in India, ensuring that tenants do not have to wait years to recover their deposit.
                    </p>
                    <p>
                      In states that follow the older <strong>Rent Control Acts</strong>, the tenant can file a petition before the <strong>Rent Controller</strong>. The Rent Controller has similar powers to hear disputes regarding tenancy terms and security deposits. Filing fees before the Rent Authority or Rent Controller are nominal, making this a highly cost-effective option for tenants. However, you must ensure that your rental agreement was in writing and complied with local stamp duty rules, as Rent Authorities will require a written agreement to entertain the petition.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="civil-court-recovery-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Civil Suits for Rental Deposit Refunds
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If your rental property is located in a state that has not yet adopted the Model Tenancy Act, or if your rental arrangement does not fall under the jurisdiction of local Rent Control Acts (e.g., high-value commercial properties or company-leased premises), the primary judicial remedy to recover your deposit is filing a <strong>Summary Suit</strong> in the Civil Court. A summary suit is a specialized, fast-track civil proceeding filed under <strong>Order XXXVII (Order 37) of the Code of Civil Procedure, 1908 (CPC)</strong>.
                    </p>
                    <p>
                      Order 37 is designed specifically for recovering liquidated debts or monetary claims arising out of written contracts. A signed Leave and License Agreement or a Lease Deed satisfies the requirement of a written contract under Order 37. In a summary suit, the landlord (defendant) does not have an automatic right to defend the case. When the suit is filed and summons are served, the landlord must enter an appearance within exactly <strong>10 days</strong>. If they fail to do so, the allegations in your plaint are deemed admitted, and the court immediately passes a judgment and recovery decree in your favor.
                    </p>
                    <p>
                      If the landlord enters an appearance, the tenant serves a &quot;Summons for Judgment.&quot; The landlord must then file an application showing <strong>&quot;Leave to Defend&quot;</strong> supported by an affidavit explaining their deductions. The court will inspect their defense: if the landlord has deducted money for painting, cleaning, or vague damages without providing actual tax invoices or a contract clause, the court will declare the defense a sham. The court will either deny leave and pass a decree, or order the landlord to deposit the entire disputed security deposit in court as a condition to contest the case, which frequently forces the landlord to settle.
                    </p>
                    <p>
                      The limitation period for filing a summary suit or a civil recovery suit is <strong>three (3) years</strong> under the Limitation Act, 1963, starting from the date the deposit refund first became due (usually the date you vacated the property). While civil suits require paying ad valorem court fees, the judge has the statutory power under Section 35 of the CPC to award all litigation costs, including court fees and advocate charges, to the successful tenant, ensuring that you recover the full value of your deposit and notice costs.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Statutory Feature</th>
                            <th className="border border-slate-200 p-3">Rent Authority (Model Tenancy Act)</th>
                            <th className="border border-slate-200 p-3">Civil Court (CPC Order 37 Summary Suit)</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Statutory Timelines</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">MTA mandates disposal within 60 days</td>
                            <td className="border border-slate-200 p-3">Summary procedure (usually decided in 6-12 months)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Upfront Filing Fees</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Nominal application fees</td>
                            <td className="border border-slate-200 p-3">Ad valorem court fees (1% - 10% of claim value)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Tenancy Registration</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Requires written agreement registered with Authority</td>
                            <td className="border border-slate-200 p-3">Accepts unregistered 11-month Leave & License agreements</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="mediation-and-settlement-deeds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Amicable Resolution: Structuring Settlement Deeds and Keys Handover
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The ultimate goal of any tenancy dispute resolution is to secure the refund of your deposit, not to engage in endless legal litigation. Therefore, at every stage of the process—whether during initial discussions, after serving the legal notice, or during active Rent Court proceedings—tenants must remain open to out-of-court settlements. In fact, serving a professional legal notice often prompts the landlord to propose a compromise. However, you must document the settlement terms in a formal <strong>Settlement Deed</strong> or <strong>Memorandum of Understanding (MOU)</strong> to prevent the landlord from defaulting again.
                    </p>
                    <p>
                      The Settlement Deed must be drafted with precise, protective clauses to safeguard your interests:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Agreed Refund Amount:</strong> Specify the exact amount the landlord will refund. If they are making deductions for actual damages, the deed must state that these deductions are final and that no further claims will be raised.
                      </li>
                      <li>
                        <strong>Payment Schedule:</strong> Define the date and method of payment. It is highly recommended to demand the refund in a single installment via online bank transfer (NEFT/RTGS/IMPS).
                      </li>
                      <li>
                        <strong>Keys Handover Protocol:</strong> The deed must link the keys handover to the payment. The tenant should hand over the physical keys to the landlord only <strong>after</strong> the refund amount has successfully cleared in the tenant's bank account. This provides the tenant with maximum leverage.
                      </li>
                      <li>
                        <strong>Mutual Release:</strong> A clause stating that both parties release each other from all past, present, and future claims arising out of the tenancy, preventing the landlord from raising new quality or damage claims later.
                      </li>
                    </ul>
                    <p>
                      At LegalRecovery, we act as a tech-enabled partner for tenants. We assist in conducting settlement negotiations, drafting legally binding Settlement Deeds, and managing keys handover protocols, ensuring that you recover your stuck deposit securely, efficiently, and without the stress of direct confrontation. If your landlord is refusing to return your security deposit, use our automated platform today to draft your legal notice and secure your refund.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Never hand over the keys to the property without securing your refund. A formal Settlement Deed must be signed, linking the keys handover to the receipt of the refund in your bank account, and releasing both parties from any subsequent damage claims.&quot;
                    </div>
                  </div>
                </section>

                {/* Client Reviews Section */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the speed post notice.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Karan Johar (Gurugram)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Highly professional. I was struggling to recover my rental security deposit from my previous landlord in Bangalore. The online portal drafted the notice citing the local Rent Act, and the tracking ID kept me updated. Landlord refunded my money immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rashmi Sen (Bangalore)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As a freelance designer, I was tired of chasing clients for unpaid invoices. This service allowed me to submit details online and connect with an advocate instantly. Digital copy sent via WhatsApp worked wonders!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Aditya Verma (Pune)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Drafted a notice for a builder booking refund. The platform targeted active directors by extracting details from ROC. The builder settled the booking amount within 12 days. Highly effective.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Divya Nair (Kochi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Great interface and tracking support. They provided the post office speed post receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Nitin Goel (Delhi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Extremely satisfied. The legal notice was drafted with precision, citing variables and statutory dues. The company accepted the notice and cleared my FNF. Zero office visits required!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Pooja Reddy (Hyderabad)</h4>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block font-sans">
                    FAQs
                  </h2>
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
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40 text-left">
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
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Rental Deposit</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Send a formal legal notice to your landlord to recover your security deposit refund legally.
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
