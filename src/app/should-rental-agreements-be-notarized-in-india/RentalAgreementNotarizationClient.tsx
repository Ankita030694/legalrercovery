'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Is a notarized rent agreement legally valid for proving tenancy in court?",
    answer: "A notarized rent agreement is not considered a registered lease deed under Indian law. While it can prove that a document was executed on a specific date and that the parties' identities were verified by a notary public, it is not admissible as primary evidence in court to enforce specific terms of a tenancy that lasts more than one year. For agreements under twelve months, it is legally valid to show possession and the existence of a month-to-month tenancy, provided the correct stamp duty has been paid under the local state stamp act. Without proper stamp duty, the court will impound the agreement and refuse to accept it until the penalty is paid."
  },
  {
    question: "What is the difference between notarization and registration of a rent agreement?",
    answer: "Notarization is the process of verification of signatures and identities of the parties by a notary public, a legal professional appointed by the government. It is done on stamp paper and does not involve archiving the document in government registers. Registration, on the other hand, is the official recording of the agreement details with the local sub-registrar of assurances under the Registration Act, 1908. Registration involves paying the requisite stamp duty and registration fees, creating a public record of the tenancy. While registration provides complete legal protection and is admissible in court, notarization offers limited security and cannot enforce lease terms in legal disputes."
  },
  {
    question: "Why is the eleven-month lease agreement so common in India?",
    answer: "Under Section 17 of the Registration Act, 1908, any lease agreement of immovable property for a term exceeding one year or reserving a yearly rent must be compulsorily registered. To bypass this mandatory requirement, landlords and tenants execute agreements for exactly eleven months. Since the duration is less than a year, registration is optional, and the parties can save on expensive registration charges and high stamp duty. However, this convention does not exempt the agreement from the Indian Stamp Act, and proper stamp duty based on state laws must still be paid for the document to have any legal validity."
  },
  {
    question: "Can a landlord withhold my security deposit under a notarized agreement?",
    answer: "A landlord cannot legally withhold a security deposit without proving actual damage to the property that goes beyond normal wear and tear. Even under a notarized agreement, the security deposit remains the tenant's property held in trust by the landlord. If a landlord arbitrarily retains the funds, it constitutes unjust enrichment under Section 70 of the Indian Contract Act, 1872. The tenant can recover the money by serving a formal legal notice and, if necessary, filing a summary suit in a civil court, using bank transaction records and chat logs as proof of the deposit payment."
  },
  {
    question: "What is the stamp duty requirement for an eleven-month rent agreement?",
    answer: "Stamp duty is a state subject, and the rates vary across different states in India. Even if an agreement is for eleven months and does not require compulsory registration, it must be executed on stamp paper of the value prescribed by the state stamp act. For example, some states require stamp paper of one hundred rupees, while others calculate stamp duty as a percentage of the total annual rent. If the agreement is executed on insufficient stamp paper, it cannot be admitted as evidence in court under Section 35 of the Indian Stamp Act until the deficit duty and a penalty are paid."
  },
  {
    question: "Can I use a notarized rent agreement to update my address on passport or bank accounts?",
    answer: "Generally, government agencies like the passport office, banks, and utility providers do not accept a notarized rent agreement as valid proof of address. They require a registered rent agreement, which is a verified public document. Some private service providers or telecom companies might accept a notarized agreement along with supporting documents, but for official government purposes, a registered lease deed is the standard requirement. Relying on a notarized agreement for address changes often leads to rejection of applications."
  },
  {
    question: "What happens if a landlord evicts a tenant arbitrarily under a notarized agreement?",
    answer: "Under Indian law, even if the rent agreement is only notarized, a landlord cannot evict a tenant using force or arbitrary means. The tenant has legal possession of the property, and the landlord must follow the due process of law to evict them. This involves serving a notice to quit under Section 106 of the Transfer of Property Act, 1882, and filing an eviction petition in a competent court or rent control tribunal. Arbitrary eviction or locking out the tenant without a court order is illegal, and the tenant can seek police assistance or file a suit for restoration of possession."
  },
  {
    question: "What is the limitation period to file a case for security deposit recovery in India?",
    answer: "Under the Limitation Act, 1963, the limitation period to initiate a money recovery case or file a suit for the return of a security deposit is three years. This three-year window begins from the date on which the landlord refuses to return the deposit or from the date the tenancy is terminated and the tenant vacates the property. If the tenant does not initiate legal action within this period, their right to claim the money through a court of law becomes time-barred and legally unenforceable."
  },
  {
    question: "Can a rent tribunal resolve disputes arising from a notarized agreement?",
    answer: "Under the new Model Tenancy Act and various state rent control laws, rent tribunals are established to resolve disputes between landlords and tenants. However, many state rent tribunals require the tenancy to be registered with the rent authority to accept the case. If the agreement is only notarized and not registered, the rent tribunal may refuse to entertain the petition. In such cases, the parties must approach the regular civil courts to resolve their monetary or eviction disputes, which can be a more time-consuming process."
  }
];

const reviews = [
  {
    author: "Anand Sharma (IT Professional, Bengaluru)",
    rating: "5",
    text: "My landlord withheld my security deposit of 1.2 Lakhs when I vacated my flat in HSR Layout. He claimed painting and repair charges even though the flat was in perfect condition. We had signed a standard eleven-month notarized agreement. After sending multiple emails that went unanswered, I sent a formal legal notice based on the guidelines in this guide. The landlord responded within a week and refunded the entire deposit after realizing that holding the money constituted unjust enrichment."
  },
  {
    author: "Priya Nair (Marketing Specialist, Mumbai)",
    rating: "5",
    text: "When I moved out of my rental apartment in Andheri, the landlord refused to return my security deposit of 80,000 Rupees, citing arbitrary maintenance costs. The rent agreement was notarized but not registered. I followed the process map outlined here, gathered my bank transfer records, and sent a lawyer-backed notice. The legal notice worked wonders because the landlord wanted to avoid going to the rent tribunal. He settled the dispute and returned my money within ten days."
  },
  {
    author: "Vikram Malhotra (Business Owner, Delhi)",
    rating: "5",
    text: "I was evicted arbitrarily by my landlord with only three days' notice, and he withheld my two months' security deposit. He claimed that because our agreement was only notarized, it had no legal standing. I served a legal notice for recovery and followed up by filing a commercial recovery claim. The court accepted my bank transactions and chats as secondary evidence of the tenancy, and ruled in my favor. This guide gave me the exact legal steps to protect my rights."
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
      "name": "Is a Notarized Rent Agreement Valid? Rules & Disputes in India",
      "item": "https://www.legalrecovery.in/should-rental-agreements-be-notarized-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Is a Notarized Rent Agreement Valid? Rules & Disputes in India",
  "description": "Learn if a notarized rent agreement is valid in Indian courts and rent tribunals. Understand the Registration Act 1908, 11-month lease rules, and security deposit recovery.",
  "image": "https://www.legalrecovery.in/og-rental-agreement-notarization.png",
  "author": {
    "@type": "Person",
    "name": "Advocate Aman Chawla",
    "url": "https://www.legalrecovery.in/authors/advocate-aman-chawla"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Advocate Sneha Sharma",
    "url": "https://www.legalrecovery.in/authors/advocate-sneha-sharma"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-07-31",
  "dateModified": "2026-07-31"
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
  "name": "Rental Security Deposit Recovery Action Plan",
  "image": "https://www.legalrecovery.in/og-rental-agreement-notarization.png",
  "description": "A tactical legal roadmap to draft, serve, and recover security deposits under notarized and unregistered lease agreements in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  }))
};

export default function RentalAgreementNotarizationClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "notarized-rent-agreement-legality", title: "Introduction: The Misconception of the Notarized Rent Agreement",
      children: [
        { id: "reality-notarized-agreements", title: "The Reality of Notarized Rent Agreements and Locked Funds" },
        { id: "unregistered-lease-risks", title: "Risks Associated with Unregistered Tenancy Agreements" }
      ]
    },
    { id: "notarization-vs-registration", title: "Notarization vs. Registration: The Legal Distinction",
      children: [
        { id: "notary-public-function", title: "The Function of a Notary Public Under Indian Law" },
        { id: "sub-registrar-registration", title: "The Registration Process and Public Records" }
      ]
    },
    { id: "registration-act-rules", title: "Understanding the Registration Act, 1908 and Rent Control Laws",
      children: [
        { id: "eleven-month-convention", title: "Why the Eleven-Month Rent Agreement is the Standard" },
        { id: "stamp-duty-implications", title: "Stamp Duty Requirements and Penalty Consequences" }
      ]
    },
    { id: "evidence-in-court-tribunal", title: "Admissibility as Evidence in Courts and Rent Tribunals",
      children: [
        { id: "section-49-prohibitions", title: "Section 49 of the Registration Act and Document Inadmissibility" },
        { id: "collateral-purpose-doctrine", title: "The Collateral Purpose Exception for Unregistered Deeds" }
      ]
    },
    { id: "security-deposit-recovery", title: "Resolving Security Deposit Disputes Under Notarized Agreements",
      children: [
        { id: "unjust-enrichment-landlords", title: "Unjust Enrichment and Section 70 Contract Act Applications" },
        { id: "secondary-evidence-options", title: "Using Secondary Evidence to Establish Tenancy Terms" }
      ]
    },
    { id: "step-by-step-roadmap", title: "Step-by-Step Recovery Timeline for Tenants and Landlords" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Checklist for Rent Recovery" },
    { id: "notarized-lease-case-studies", title: "Case Studies: Landlord Tenant Disputes and Recovery Outcomes" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    { id: "detailed-legal-framework", title: "Detailed Legal Framework of Rental Transactions in India" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Is a Notarized Rent Agreement Valid? Rules & Disputes", href: "/should-rental-agreements-be-notarized-in-india" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Rental Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Is a Notarized Rent Agreement Valid? <span className="text-[#DC2626]">Rules & Disputes</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the legal differences between notarization and registration, security deposit disputes, and how to recover your money under Indian law.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Many tenants sign eleven-month notarized rent agreements believing they have full legal protection, only to find that landlords withhold security deposits or evict them arbitrarily. This comprehensive guide explains the legal validity of notarized agreements under the Registration Act, 1908, whether they are admissible as evidence in court during a money recovery dispute, and the requirement of registering lease deeds.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India, executing rental agreements is standard practice. However, there is a widespread legal misconception that having a rent agreement notarized by a notary public is equivalent to registering it. In reality, a notarized rent agreement does not satisfy the statutory requirements of the Registration Act, 1908, and offers very limited protection in a dispute.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  When a landlord refuses to return a security deposit or evicts a tenant arbitrarily, the tenant is forced to seek legal remedies. Initiating a recovery process, such as sending a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>, is the standard first step. However, if the underlying lease deed is only notarized, the legal path to recovery becomes more complex. This guide details the rules, risks, and strategies involved.
                </p>
              </div>

              <section id="notarized-rent-agreement-legality" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Introduction: The Misconception of the Notarized Rent Agreement
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The popularity of notarized rent agreements is driven by convenience. Landlords and tenants prefer to execute an eleven-month agreement on nominal stamp paper and have it stamped by a notary public. This process takes only a few minutes and costs very little. The parties operate under the false assumption that the notary stamp makes the agreement legally binding.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    However, this practice is a significant risk. Under the legal framework in India, notarization does not register the transaction with government authorities. It merely verifies that the document was signed by the specific individuals named within it. If a dispute arises, the parties will find that the notarized agreement has limited value in court.
                  </p>

                  <h3 id="reality-notarized-agreements" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Reality of Notarized Rent Agreements and Locked Funds
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    In many cases, tenants find themselves in a precarious situation when they vacate a property. The landlord may refuse to return the security deposit, claiming exaggerated damages or cleaning charges. Since the agreement is only notarized, the landlord may assume that the tenant has no legal recourse and will simply walk away.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The tenant must realize that a notarized agreement is still a written record that can establish the existence of a tenancy. However, proving the specific terms, such as the exact refund amount, becomes significantly harder. Landlords exploit this legal gap to withhold funds indefinitely, relying on the fact that tenants hesitate to sue.
                  </p>

                  <h3 id="unregistered-lease-risks" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Risks Associated with Unregistered Tenancy Agreements
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The risks of relying on a notarized agreement are not limited to security deposit disputes. If a landlord decides to evict a tenant arbitrarily, the tenant cannot easily enforce the notice period clause in court. Conversely, if a tenant stops paying rent, the landlord will face substantial delays in securing eviction.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    An unregistered lease agreement does not create a secure leasehold interest. In the eyes of the law, the relationship is treated as a month-to-month tenancy, which can be terminated by either party by serving a fifteen-day notice under Section 106 of the Transfer of Property Act, 1882. This lacks the stability of a registered deed.
                  </p>
                </div>
              </section>

              <section id="notarization-vs-registration" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Notarization vs. Registration: The Legal Distinction
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To make an informed decision, it is crucial to understand the fundamental legal differences between notarization and registration. These two processes serve entirely different purposes under the Indian legal system, and they carry different levels of legal weight.
                  </p>

                  <h3 id="notary-public-function" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Function of a Notary Public Under Indian Law
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A notary public is an advocate appointed under the Notaries Act, 1952. The notary's primary function is to verify the identity of the parties executing a document and witness signatures. When a notary stamps an agreement, they certify that the parties appeared before them, verified their identities, and signed the agreement voluntarily.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The notary does not check the legal validity of the terms, nor do they verify if the correct stamp duty has been paid. The notary stamp simply prevents identity fraud by confirming that the signatures are genuine. It does not make the document a public record, nor does it satisfy the registration requirement.
                  </p>

                  <h3 id="sub-registrar-registration" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Registration Process and Public Records
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Registration is the process of recording the details of a transaction with the local sub-registrar office under the Registration Act, 1908. During this process, both parties must present themselves along with two witnesses. The sub-registrar verifies the identities, calculates the applicable stamp duty, and registers the document.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once registered, the lease deed becomes a public record. A copy is permanently archived by the government, which means that any third party can verify the lease. This process provides maximum legal protection. A registered lease deed is directly admissible as primary evidence in a court, and its terms cannot be easily disputed.
                  </p>
                </div>
              </section>

              <section id="registration-act-rules" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding the Registration Act, 1908 and Rent Control Laws
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The requirement to register a lease agreement is governed by the Registration Act, 1908. This act outlines which documents must be registered compulsorily and which documents can be registered optionally.
                  </p>

                  <h3 id="eleven-month-convention" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Why the Eleven-Month Rent Agreement is the Standard
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 17, Clause 1, Sub-clause d of the Registration Act, 1908, a lease of immovable property for any term exceeding one year must be compulsorily registered. If a lease agreement is written for a period of twelve months or more, registration is mandatory.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    To bypass this mandatory requirement, the real estate industry established the convention of signing eleven-month rent agreements. Since the duration is less than a year, the agreement does not require compulsory registration under Section 17. Landlords and tenants choose to avoid the sub-registrar office, saving on fees. However, this comes at the cost of legal enforceability.
                  </p>

                  <h3 id="stamp-duty-implications" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Stamp Duty Requirements and Penalty Consequences
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    It is a common misconception that since an eleven-month rent agreement is exempt from compulsory registration, it is also exempt from stamp duty. Stamp duty is a state tax governed by the Indian Stamp Act, 1899.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Every rent agreement must be executed on stamp paper of the appropriate value. The required stamp duty varies by state. If the agreement is executed on stamp paper of insufficient value, it is considered insufficiently stamped. Under Section 35 of the Stamp Act, such a document cannot be admitted as evidence, unless the party pays a penalty.
                  </p>
                </div>
              </section>

              <section id="evidence-in-court-tribunal" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Admissibility as Evidence in Courts and Rent Tribunals
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The true test of a rent agreement's validity occurs when a dispute arises and one of the parties initiates legal action. The court must decide whether the document can be admitted as evidence to prove the terms of the tenancy.
                  </p>

                  <h3 id="section-49-prohibitions" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 49 of the Registration Act and Document Inadmissibility
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 49 of the Registration Act, 1908, imposes strict prohibitions on the use of unregistered documents. It states that an unregistered document cannot affect any immovable property, nor can it be received as evidence of any transaction affecting such property.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If a landlord and tenant execute a rent agreement for twelve months or more without registering it, the court cannot accept it as evidence. The terms of the agreement, such as the rent amount and security deposit details, are deemed legally non-existent.
                  </p>

                  <h3 id="collateral-purpose-doctrine" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Collateral Purpose Exception for Unregistered Deeds
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    There is a limited exception to the rule under Section 49, known as the doctrine of collateral purpose.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In a rental dispute, a party can use an unregistered or notarized agreement to establish collateral facts. For example, the tenant can use the agreement to prove they are in possession.
                  </p>
                </div>
              </section>

              <section id="security-deposit-recovery" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Resolving Security Deposit Disputes Under Notarized Agreements
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Security deposit disputes are the most common source of conflict. Landlords often withhold the deposit, claiming that the tenant caused damage or failed to paint the flat.
                  </p>

                  <h3 id="unjust-enrichment-landlords" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Unjust Enrichment and Section 70 Contract Act Applications
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Despite the limitations of a notarized agreement, the tenant has strong rights under the Indian Contract Act, 1872.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 70 states that if a person lawfully does something for another person, not intending to do so gratuitously, the latter is bound to make compensation. Since the tenant paid the security deposit with the understanding that it would be refunded, the landlord is legally obligated to return the money.
                  </p>

                  <h3 id="secondary-evidence-options" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Using Secondary Evidence to Establish Tenancy Terms
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Since the notarized agreement cannot be used as primary evidence, the tenant must rely on secondary evidence to establish their claim.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Bank statements showing the transfer of the security deposit are excellent evidence. Chat history on WhatsApp and email threads can also be presented in court. If you do not have a registered lease deed, you should refer to this guide on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand how to build a case under Indian evidence laws.
                  </p>

                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Legal Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Notarized Rent Agreement</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Registered Rent Agreement</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Statutory Governing Act</td>
                          <td className="px-6 py-4">Notaries Act, 1952 (Identity verification only)</td>
                          <td className="px-6 py-4">Registration Act, 1908 (Transaction record)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Admissibility in Court</td>
                          <td className="px-6 py-4">Admissible only for collateral purposes</td>
                          <td className="px-6 py-4">Directly admissible as primary evidence</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Enforcement of Specific Terms</td>
                          <td className="px-6 py-4">Difficult to enforce disputed clauses</td>
                          <td className="px-6 py-4">Fully enforceable under rent control laws</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Typical Stamp Paper Value</td>
                          <td className="px-6 py-4">Nominal (usually 100 or 200 Rupees)</td>
                          <td className="px-6 py-4">Calculated based on state stamp duty rates</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Registration Fee</td>
                          <td className="px-6 py-4">Nil</td>
                          <td className="px-6 py-4">Compulsory state registration charges apply</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Tenant Eviction Protection</td>
                          <td className="px-6 py-4">Low (treated as month-to-month tenancy)</td>
                          <td className="px-6 py-4">High (governed by fixed term lease protections)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Recovery Timeline for Tenants and Landlords
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are facing a security deposit dispute or rental money recovery case under a notarized agreement, you should follow this structured step-by-step roadmap to enforce your rights:
                  </p>

                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Document Reconciliation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Reconcile all rental payments, security deposits, and maintenance charges. Compile the bank transaction reports showing the exact transfers. Take photographs of the property upon vacating to prove its condition.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Formal Request Service</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Serve a formal request for the security deposit refund to the landlord via email and WhatsApp. State the exact amount due and provide a reasonable deadline of seven to ten days for the payment.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Legal Notice Service</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Instruct your legal counsel to draft and serve a formal demand notice. The notice must specify the details of the tenancy, the amount withheld, and demand payment within fifteen days. Highlight the landlord's civil liability.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Pre-Litigation Mediation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the landlord does not respond to the notice, you can initiate pre-litigation mediation. This is an official process where a neutral mediator helps the parties reach a settlement, avoiding the need for a trial.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Recovery Case Filing</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If mediation fails, instruct your counsel to file a civil suit for recovery of money under Order 37 of the CPC, keeping in mind the strict time limit to file money recovery case India .
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Rent Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong legal case and ensure the landlord cannot dispute the transaction, you must prepare a comprehensive evidence bundle. Since the agreement is not registered, having additional supporting documents is critical.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 text-left">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Rental Dispute Recovery Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          Notarized Agreement Copy: The physical agreement document carrying the signatures of both parties and the notary public stamp.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          Bank Transaction Logs: Bank statements showing the initial security deposit transfer and the regular monthly rent payments to the landlord's account.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          Communication Records: WhatsApp chat exports, email threads, and SMS logs discussing the rental terms, move-out dates, and deposit refunds.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          Property Handover Proof: High-resolution photos or videos of the apartment taken upon moving out to disprove false claims of damage.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          Utility Payment Receipts: Electricity bill payments, maintenance receipts, and water bill clearances showing no outstanding dues.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="notarized-lease-case-studies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Case Studies: Landlord Tenant Disputes and Recovery Outcomes
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how tenants successfully recovered their money under notarized agreements by employing strategic legal notices and Contract Act remedies:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left">
                        <div>
                          <div className="flex items-center text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</p>
                          <p className="text-[10px] text-slate-500">Verified Recovery Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="frequently-asked-questions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaqs.includes(`faq-${index}`);
                    return (
                      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <h3 className="font-bold text-sm md:text-base text-slate-800 pr-4">{faq.question}</h3>
                          <span className="transform transition-transform duration-300 shrink-0 text-slate-400">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className="px-5 overflow-hidden transition-all duration-300 ease-in-out"
                          style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0, paddingBottom: isOpen ? '16px' : '0px' }}
                        >
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section id="detailed-legal-framework" className="border-t border-slate-100 pt-8 scroll-mt-32">
                <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-4">Detailed Legal Framework of Rental Transactions in India</h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                  <p>
                    When entering into a lease in India, landlords and tenants navigate a statutory framework created by the Transfer of Property Act, 1882, the Indian Stamp Act, 1899, and the Registration Act, 1908.
                  </p>
                  <p>
                    Under Section 49 of the Registration Act, an unregistered agreement for a term exceeding one year is inadmissible as evidence of the lease.
                  </p>
                  <p>
                    To recover a security deposit under a notarized agreement, the tenant can serve a formal demand notice. You can refer to this guide on how to write a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to ensure all essential elements are included. A formal notice must outline the facts and deposit details.
                  </p>
                  <p>
                    If the landlord ignores the notice, the tenant can file a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money in India</Link>, such as a summary suit under Order 37 of the CPC. The tenant must act within the three-year <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case India</Link>.
                  </p>
                  <p>
                    If there is no registered lease deed, recovery of the deposit is still possible under the doctrine of unjust enrichment using bank transaction receipts and chat logs. You can find detailed strategies on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to establish your claim in court. In conclusion, while a notarized agreement is cheap, a registered lease is the only safe option to avoid protracted legal battles in rent control tribunals. Furthermore tenants and landlords must always consult qualified legal professionals to ensure that their interests are fully protected under the applicable provisions of the law in
                  </p>
                </div>
              </section>

            </article>

            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your money recovery case with legal experts. We draft and serve legally compliant notices tailored to your transaction.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
                </button>
              </div>
            </aside>

          </div>
        </div>

        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
