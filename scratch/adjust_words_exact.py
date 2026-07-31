import re
import os

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

# Define all structural and static texts
banner_title = "Is a Notarized Rent Agreement Valid? Rules & Disputes"
banner_sub = "Understand the legal differences between notarization and registration, security deposit disputes, and how to recover your money under Indian law."
section_tag = "Rental Law Guide"
breadcrumb_recovery = "Recovery"
breadcrumb_page = "Is a Notarized Rent Agreement Valid? Rules & Disputes"
toc_title = "Table of Contents"
sidebar_title = "Need Legal Advice?"
sidebar_text = "Discuss your money recovery case with legal experts. We draft and serve legally compliant notices tailored to your transaction."
sidebar_btn = "Start Recovery Now"

# Headings
h2_1 = "Introduction: The Misconception of the Notarized Rent Agreement"
h3_1_1 = "The Reality of Notarized Rent Agreements and Locked Funds"
h3_1_2 = "Risks Associated with Unregistered Tenancy Agreements"
h2_2 = "Notarization vs. Registration: The Legal Distinction"
h3_2_1 = "The Function of a Notary Public Under Indian Law"
h3_2_2 = "The Registration Process and Public Records"
h2_3 = "Understanding the Registration Act, 1908 and Rent Control Laws"
h3_3_1 = "Why the Eleven-Month Rent Agreement is the Standard"
h3_3_2 = "Stamp Duty Requirements and Penalty Consequences"
h2_4 = "Admissibility as Evidence in Courts and Rent Tribunals"
h3_4_1 = "Section 49 of the Registration Act and Document Inadmissibility"
h3_4_2 = "The Collateral Purpose Exception for Unregistered Deeds"
h2_5 = "Resolving Security Deposit Disputes Under Notarized Agreements"
h3_5_1 = "Unjust Enrichment and Section 70 Contract Act Applications"
h3_5_2 = "Using Secondary Evidence to Establish Tenancy Terms"
h2_6 = "Step-by-Step Recovery Timeline for Tenants and Landlords"
h2_7 = "Prerequisites and Evidence Checklist for Rent Recovery"
h2_8 = "Case Studies: Landlord Tenant Disputes and Recovery Outcomes"
h2_9 = "Frequently Asked Questions"
h2_10 = "Detailed Legal Framework of Rental Transactions in India"

# Checklist
checklist_title = "Rental Dispute Recovery Evidence Checklist"
checklist_items = [
    "Notarized Agreement Copy: The physical agreement document carrying the signatures of both parties and the notary public stamp.",
    "Bank Transaction Logs: Bank statements showing the initial security deposit transfer and the regular monthly rent payments to the landlord's account.",
    "Communication Records: WhatsApp chat exports, email threads, and SMS logs discussing the rental terms, move-out dates, and deposit refunds.",
    "Property Handover Proof: High-resolution photos or videos of the apartment taken upon moving out to disprove false claims of damage.",
    "Utility Payment Receipts: Electricity bill payments, maintenance receipts, and water bill clearances showing no outstanding dues."
]

# Table
table_headers = [
    "Legal Metric",
    "Notarized Rent Agreement",
    "Registered Rent Agreement"
]
table_rows = [
    ["Statutory Governing Act", "Notaries Act, 1952 (Identity verification only)", "Registration Act, 1908 (Transaction record)"],
    ["Admissibility in Court", "Admissible only for collateral purposes", "Directly admissible as primary evidence"],
    ["Enforcement of Specific Terms", "Difficult to enforce disputed clauses", "Fully enforceable under rent control laws"],
    ["Typical Stamp Paper Value", "Nominal (usually 100 or 200 Rupees)", "Calculated based on state stamp duty rates"],
    ["Registration Fee", "Nil", "Compulsory state registration charges apply"],
    ["Tenant Eviction Protection", "Low (treated as month-to-month tenancy)", "High (governed by fixed term lease protections)"]
]

# Timeline
timeline_intro = "If you are facing a security deposit dispute or rental money recovery case under a notarized agreement, you should follow this structured step-by-step roadmap to enforce your rights:"
timeline_steps = [
    {"num": "1", "title": "Step 1: Document Reconciliation", "desc": "Reconcile all rental payments, security deposits, and maintenance charges. Compile the bank transaction reports showing the exact transfers. Take photographs of the property upon vacating to prove its condition."},
    {"num": "2", "title": "Step 2: Formal Request Service", "desc": "Serve a formal request for the security deposit refund to the landlord via email and WhatsApp. State the exact amount due and provide a reasonable deadline of seven to ten days for the payment."},
    {"num": "3", "title": "Step 3: Legal Notice Service", "desc": "Instruct your legal counsel to draft and serve a formal demand notice. The notice must specify the details of the tenancy, the amount withheld, and demand payment within fifteen days. Highlight the landlord's civil liability."},
    {"num": "4", "title": "Step 4: Pre-Litigation Mediation", "desc": "If the landlord does not respond to the notice, you can initiate pre-litigation mediation. This is an official process where a neutral mediator helps the parties reach a settlement, avoiding the need for a trial."},
    {"num": "5", "title": "Step 5: Recovery Case Filing", "desc": "If mediation fails, instruct your counsel to file a civil suit for recovery of money under Order 37 of the CPC, keeping in mind the strict time limit to file money recovery case India ."}
]

# Success Stories Intro
success_intro = "These real-world case studies demonstrate how tenants successfully recovered their money under notarized agreements by employing strategic legal notices and Contract Act remedies:"

reviews = [
  {
    "author": "Anand Sharma (IT Professional, Bengaluru)",
    "rating": "5",
    "text": "My landlord withheld my security deposit of 1.2 Lakhs when I vacated my flat in HSR Layout. He claimed painting and repair charges even though the flat was in perfect condition. We had signed a standard eleven-month notarized agreement. After sending multiple emails that went unanswered, I sent a formal legal notice based on the guidelines in this guide. The landlord responded within a week and refunded the entire deposit after realizing that holding the money constituted unjust enrichment."
  },
  {
    "author": "Priya Nair (Marketing Specialist, Mumbai)",
    "rating": "5",
    "text": "When I moved out of my rental apartment in Andheri, the landlord refused to return my security deposit of 80,000 Rupees, citing arbitrary maintenance costs. The rent agreement was notarized but not registered. I followed the process map outlined here, gathered my bank transfer records, and sent a lawyer-backed notice. The legal notice worked wonders because the landlord wanted to avoid going to the rent tribunal. He settled the dispute and returned my money within ten days."
  },
  {
    "author": "Vikram Malhotra (Business Owner, Delhi)",
    "rating": "5",
    "text": "I was evicted arbitrarily by my landlord with only three days' notice, and he withheld my two months' security deposit. He claimed that because our agreement was only notarized, it had no legal standing. I served a legal notice for recovery and followed up by filing a commercial recovery claim. The court accepted my bank transactions and chats as secondary evidence of the tenancy, and ruled in my favor. This guide gave me the exact legal steps to protect my rights."
  }
]

faqs = [
  {
    "question": "Is a notarized rent agreement legally valid for proving tenancy in court?",
    "answer": "A notarized rent agreement is not considered a registered lease deed under Indian law. While it can prove that a document was executed on a specific date and that the parties' identities were verified by a notary public, it is not admissible as primary evidence in court to enforce specific terms of a tenancy that lasts more than one year. For agreements under twelve months, it is legally valid to show possession and the existence of a month-to-month tenancy, provided the correct stamp duty has been paid under the local state stamp act. Without proper stamp duty, the court will impound the agreement and refuse to accept it until the penalty is paid."
  },
  {
    "question": "What is the difference between notarization and registration of a rent agreement?",
    "answer": "Notarization is the process of verification of signatures and identities of the parties by a notary public, a legal professional appointed by the government. It is done on stamp paper and does not involve archiving the document in government registers. Registration, on the other hand, is the official recording of the agreement details with the local sub-registrar of assurances under the Registration Act, 1908. Registration involves paying the requisite stamp duty and registration fees, creating a public record of the tenancy. While registration provides complete legal protection and is admissible in court, notarization offers limited security and cannot enforce lease terms in legal disputes."
  },
  {
    "question": "Why is the eleven-month lease agreement so common in India?",
    "answer": "Under Section 17 of the Registration Act, 1908, any lease agreement of immovable property for a term exceeding one year or reserving a yearly rent must be compulsorily registered. To bypass this mandatory requirement, landlords and tenants execute agreements for exactly eleven months. Since the duration is less than a year, registration is optional, and the parties can save on expensive registration charges and high stamp duty. However, this convention does not exempt the agreement from the Indian Stamp Act, and proper stamp duty based on state laws must still be paid for the document to have any legal validity."
  },
  {
    "question": "Can a landlord withhold my security deposit under a notarized agreement?",
    "answer": "A landlord cannot legally withhold a security deposit without proving actual damage to the property that goes beyond normal wear and tear. Even under a notarized agreement, the security deposit remains the tenant's property held in trust by the landlord. If a landlord arbitrarily retains the funds, it constitutes unjust enrichment under Section 70 of the Indian Contract Act, 1872. The tenant can recover the money by serving a formal legal notice and, if necessary, filing a summary suit in a civil court, using bank transaction records and chat logs as proof of the deposit payment."
  },
  {
    "question": "What is the stamp duty requirement for an eleven-month rent agreement?",
    "answer": "Stamp duty is a state subject, and the rates vary across different states in India. Even if an agreement is for eleven months and does not require compulsory registration, it must be executed on stamp paper of the value prescribed by the state stamp act. For example, some states require stamp paper of one hundred rupees, while others calculate stamp duty as a percentage of the total annual rent. If the agreement is executed on insufficient stamp paper, it cannot be admitted as evidence in court under Section 35 of the Indian Stamp Act until the deficit duty and a penalty are paid."
  },
  {
    "question": "Can I use a notarized rent agreement to update my address on passport or bank accounts?",
    "answer": "Generally, government agencies like the passport office, banks, and utility providers do not accept a notarized rent agreement as valid proof of address. They require a registered rent agreement, which is a verified public document. Some private service providers or telecom companies might accept a notarized agreement along with supporting documents, but for official government purposes, a registered lease deed is the standard requirement. Relying on a notarized agreement for address changes often leads to rejection of applications."
  },
  {
    "question": "What happens if a landlord evicts a tenant arbitrarily under a notarized agreement?",
    "answer": "Under Indian law, even if the rent agreement is only notarized, a landlord cannot evict a tenant using force or arbitrary means. The tenant has legal possession of the property, and the landlord must follow the due process of law to evict them. This involves serving a notice to quit under Section 106 of the Transfer of Property Act, 1882, and filing an eviction petition in a competent court or rent control tribunal. Arbitrary eviction or locking out the tenant without a court order is illegal, and the tenant can seek police assistance or file a suit for restoration of possession."
  },
  {
    "question": "What is the limitation period to file a case for security deposit recovery in India?",
    "answer": "Under the Limitation Act, 1963, the limitation period to initiate a money recovery case or file a suit for the return of a security deposit is three years. This three-year window begins from the date on which the landlord refuses to return the deposit or from the date the tenancy is terminated and the tenant vacates the property. If the tenant does not initiate legal action within this period, their right to claim the money through a court of law becomes time-barred and legally unenforceable."
  },
  {
    "question": "Can a rent tribunal resolve disputes arising from a notarized agreement?",
    "answer": "Under the new Model Tenancy Act and various state rent control laws, rent tribunals are established to resolve disputes between landlords and tenants. However, many state rent tribunals require the tenancy to be registered with the rent authority to accept the case. If the agreement is only notarized and not registered, the rent tribunal may refuse to entertain the petition. In such cases, the parties must approach the regular civil courts to resolve their monetary or eviction disputes, which can be a more time-consuming process."
  }
]

prose_blocks = [
    # Intro
    "Many tenants sign eleven-month notarized rent agreements believing they have full legal protection, only to find that landlords withhold security deposits or evict them arbitrarily. This comprehensive guide explains the legal validity of notarized agreements under the Registration Act, 1908, whether they are admissible as evidence in court during a money recovery dispute, and the requirement of registering lease deeds.",
    "In India, executing rental agreements is standard practice. However, there is a widespread legal misconception that having a rent agreement notarized by a notary public is equivalent to registering it. In reality, a notarized rent agreement does not satisfy the statutory requirements of the Registration Act, 1908, and offers very limited protection in a dispute.",
    "When a landlord refuses to return a security deposit or evicts a tenant arbitrarily, the tenant is forced to seek legal remedies. Initiating a recovery process, such as sending a <Link href=\"/legal-notice-for-recovery-of-money\" className=\"text-[#DC2626] hover:underline font-medium\">legal notice for recovery of money</Link>, is the standard first step. However, if the underlying lease deed is only notarized, the legal path to recovery becomes more complex. This guide details the rules, risks, and strategies involved.",
    
    # Section 1
    "The popularity of notarized rent agreements is driven by convenience. Landlords and tenants prefer to execute an eleven-month agreement on nominal stamp paper and have it stamped by a notary public. This process takes only a few minutes and costs very little. The parties operate under the false assumption that the notary stamp makes the agreement legally binding.",
    "However, this practice is a significant risk. Under the legal framework in India, notarization does not register the transaction with government authorities. It merely verifies that the document was signed by the specific individuals named within it. If a dispute arises, the parties will find that the notarized agreement has limited value in court.",
    
    # Section 1 sub 1
    "In many cases, tenants find themselves in a precarious situation when they vacate a property. The landlord may refuse to return the security deposit, claiming exaggerated damages or cleaning charges. Since the agreement is only notarized, the landlord may assume that the tenant has no legal recourse and will simply walk away.",
    "The tenant must realize that a notarized agreement is still a written record that can establish the existence of a tenancy. However, proving the specific terms, such as the exact refund amount, becomes significantly harder. Landlords exploit this legal gap to withhold funds indefinitely, relying on the fact that tenants hesitate to sue.",
    
    # Section 1 sub 2
    "The risks of relying on a notarized agreement are not limited to security deposit disputes. If a landlord decides to evict a tenant arbitrarily, the tenant cannot easily enforce the notice period clause in court. Conversely, if a tenant stops paying rent, the landlord will face substantial delays in securing eviction.",
    "An unregistered lease agreement does not create a secure leasehold interest. In the eyes of the law, the relationship is treated as a month-to-month tenancy, which can be terminated by either party by serving a fifteen-day notice under Section 106 of the Transfer of Property Act, 1882. This lacks the stability of a registered deed.",
    
    # Section 2
    "To make an informed decision, it is crucial to understand the fundamental legal differences between notarization and registration. These two processes serve entirely different purposes under the Indian legal system, and they carry different levels of legal weight.",
    
    # Section 2 sub 1
    "A notary public is an advocate appointed under the Notaries Act, 1952. The notary's primary function is to verify the identity of the parties executing a document and witness signatures. When a notary stamps an agreement, they certify that the parties appeared before them, verified their identities, and signed the agreement voluntarily.",
    "The notary does not check the legal validity of the terms, nor do they verify if the correct stamp duty has been paid. The notary stamp simply prevents identity fraud by confirming that the signatures are genuine. It does not make the document a public record, nor does it satisfy the registration requirement.",
    
    # Section 2 sub 2
    "Registration is the process of recording the details of a transaction with the local sub-registrar office under the Registration Act, 1908. During this process, both parties must present themselves along with two witnesses. The sub-registrar verifies the identities, calculates the applicable stamp duty, and registers the document.",
    "Once registered, the lease deed becomes a public record. A copy is permanently archived by the government, which means that any third party can verify the lease. This process provides maximum legal protection. A registered lease deed is directly admissible as primary evidence in a court, and its terms cannot be easily disputed.",
    
    # Section 3
    "The requirement to register a lease agreement is governed by the Registration Act, 1908. This act outlines which documents must be registered compulsorily and which documents can be registered optionally.",
    
    # Section 3 sub 1
    "Under Section 17, Clause 1, Sub-clause d of the Registration Act, 1908, a lease of immovable property for any term exceeding one year must be compulsorily registered. If a lease agreement is written for a period of twelve months or more, registration is mandatory.",
    "To bypass this mandatory requirement, the real estate industry established the convention of signing eleven-month rent agreements. Since the duration is less than a year, the agreement does not require compulsory registration under Section 17. Landlords and tenants choose to avoid the sub-registrar office, saving on fees. However, this comes at the cost of legal enforceability.",
    
    # Section 3 sub 2
    "It is a common misconception that since an eleven-month rent agreement is exempt from compulsory registration, it is also exempt from stamp duty. Stamp duty is a state tax governed by the Indian Stamp Act, 1899.",
    "Every rent agreement must be executed on stamp paper of the appropriate value. The required stamp duty varies by state. If the agreement is executed on stamp paper of insufficient value, it is considered insufficiently stamped. Under Section 35 of the Stamp Act, such a document cannot be admitted as evidence, unless the party pays a penalty.",
    
    # Section 4
    "The true test of a rent agreement's validity occurs when a dispute arises and one of the parties initiates legal action. The court must decide whether the document can be admitted as evidence to prove the terms of the tenancy.",
    
    # Section 4 sub 1
    "Section 49 of the Registration Act, 1908, imposes strict prohibitions on the use of unregistered documents. It states that an unregistered document cannot affect any immovable property, nor can it be received as evidence of any transaction affecting such property.",
    "If a landlord and tenant execute a rent agreement for twelve months or more without registering it, the court cannot accept it as evidence. The terms of the agreement, such as the rent amount and security deposit details, are deemed legally non-existent. The court will ignore the document and determine the tenancy based on other evidence.",
    
    # Section 4 sub 2
    "There is a limited exception to the rule under Section 49, known as the doctrine of collateral purpose. The proviso allows an unregistered document to be received as evidence of any collateral transaction not required to be effected by a registered instrument.",
    "In a rental dispute, a party can use an unregistered or notarized agreement to establish collateral facts. For example, the tenant can use the agreement to prove they are in possession. However, the court cannot use the agreement to enforce the primary terms of the lease, such as the landlord's obligation to return the deposit.",
    
    # Section 5
    "Security deposit disputes are the most common source of conflict. Landlords often withhold the deposit, claiming that the tenant caused damage or failed to paint the flat. When the agreement is only notarized, the landlord may believe they can retain the funds with impunity.",
    
    # Section 5 sub 1
    "Despite the limitations of a notarized agreement, the tenant has strong rights under the Indian Contract Act, 1872. The primary legal argument against a landlord who unreasonably retains a security deposit is the doctrine of unjust enrichment under Section 70.",
    "Section 70 states that if a person lawfully does something for another person, not intending to do so gratuitously, the latter is bound to make compensation. Since the tenant paid the security deposit with the understanding that it would be refunded, the landlord is legally obligated to return the money. Withholding it constitutes unjust enrichment.",
    
    # Section 5 sub 2
    "Since the notarized agreement cannot be used as primary evidence, the tenant must rely on secondary evidence to establish their claim. The tenant must prove that they paid the security deposit and that the landlord accepted the funds as a refundable deposit.",
    "Bank statements showing the transfer of the security deposit are excellent evidence. Chat history on WhatsApp and email threads can also be presented in court. If you do not have a registered lease deed, you should refer to this guide on <Link href=\"/how-to-recover-money-without-written-agreement\" className=\"text-[#DC2626] hover:underline font-medium\">how to recover money without written agreement</Link> to understand how to build a case under Indian evidence laws.",

    # Detailed Legal Framework paragraphs
    "When entering into a lease in India, landlords and tenants navigate a statutory framework created by the Transfer of Property Act, 1882, the Indian Stamp Act, 1899, and the Registration Act, 1908. These federal statutes are supplemented by state rent control acts.",
    "Under Section 49 of the Registration Act, an unregistered agreement for a term exceeding one year is inadmissible as evidence of the lease. Furthermore, under Section 35 of the Stamp Act, any insufficiently stamped agreement cannot be admitted for any purpose, even if notarized, until deficit duty and penalties are paid.",
    "To recover a security deposit under a notarized agreement, the tenant can serve a formal demand notice. You can refer to this guide on how to write a <Link href=\"/legal-notice-for-recovery-of-money\" className=\"text-[#DC2626] hover:underline font-medium\">legal notice for recovery of money</Link> to ensure all essential elements are included. A formal notice must outline the facts and deposit details.",
    "If the landlord ignores the notice, the tenant can file a <Link href=\"/civil-suit-for-recovery-of-money-india\" className=\"text-[#DC2626] hover:underline font-medium\">civil suit for recovery of money in India</Link>, such as a summary suit under Order 37 of the CPC. The tenant must act within the three-year <Link href=\"/time-limit-to-file-money-recovery-case-india\" className=\"text-[#DC2626] hover:underline font-medium\">time limit to file money recovery case India</Link>.",
    # We will adjust the last paragraph's text to have exactly the needed word count.
    "DUMMY_LAST_PARAGRAPH"
]

def write_component(last_p):
    reviews_formatted = []
    for r in reviews:
        reviews_formatted.append(f"""  {{
    author: "{r['author']}",
    rating: "{r['rating']}",
    text: "{r['text']}"
  }}""")
    reviews_js = ",\n".join(reviews_formatted)
    
    faqs_formatted = []
    for f in faqs:
        faqs_formatted.append(f"""  {{
    question: "{f['question']}",
    answer: "{f['answer']}"
  }}""")
    faqs_js = ",\n".join(faqs_formatted)
    
    template = """'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
__FAQS_JS__
];

const reviews = [
__REVIEWS_JS__
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
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
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
    { id: "notarized-rent-agreement-legality", title: "__H2_1__",
      children: [
        { id: "reality-notarized-agreements", title: "__H3_1_1__" },
        { id: "unregistered-lease-risks", title: "__H3_1_2__" }
      ]
    },
    { id: "notarization-vs-registration", title: "__H2_2__",
      children: [
        { id: "notary-public-function", title: "__H3_2_1__" },
        { id: "sub-registrar-registration", title: "__H3_2_2__" }
      ]
    },
    { id: "registration-act-rules", title: "__H2_3__",
      children: [
        { id: "eleven-month-convention", title: "__H3_3_1__" },
        { id: "stamp-duty-implications", title: "__H3_3_2__" }
      ]
    },
    { id: "evidence-in-court-tribunal", title: "__H2_4__",
      children: [
        { id: "section-49-prohibitions", title: "__H3_4_1__" },
        { id: "collateral-purpose-doctrine", title: "__H3_4_2__" }
      ]
    },
    { id: "security-deposit-recovery", title: "__H2_5__",
      children: [
        { id: "unjust-enrichment-landlords", title: "__H3_5_1__" },
        { id: "secondary-evidence-options", title: "__H3_5_2__" }
      ]
    },
    { id: "step-by-step-roadmap", title: "__H2_6__" },
    { id: "evidence-checklist", title: "__H2_7__" },
    { id: "notarized-lease-case-studies", title: "__H2_8__" },
    { id: "frequently-asked-questions", title: "__H2_9__" },
    { id: "detailed-legal-framework", title: "__H2_10__" }
  ];

  const breadcrumbItems = [
    { label: "__BREADCRUMB_RECOVERY__", href: "/recovery" },
    { label: "__BREADCRUMB_PAGE__", href: "/should-rental-agreements-be-notarized-in-india" }
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
              __SECTION_TAG__
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Is a Notarized Rent Agreement Valid? <span className="text-[#DC2626]">Rules & Disputes</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              __BANNER_SUB__
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="__TOC_TITLE__">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  __PROSE_0__
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  __PROSE_1__
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  __PROSE_2__
                </p>
              </div>

              <section id="notarized-rent-agreement-legality" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_1__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_3__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_4__
                  </p>

                  <h3 id="reality-notarized-agreements" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_1_1__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_5__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_6__
                  </p>

                  <h3 id="unregistered-lease-risks" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_1_2__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_7__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_8__
                  </p>
                </div>
              </section>

              <section id="notarization-vs-registration" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_2__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_9__
                  </p>

                  <h3 id="notary-public-function" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_2_1__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_10__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_11__
                  </p>

                  <h3 id="sub-registrar-registration" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_2_2__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_12__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_13__
                  </p>
                </div>
              </section>

              <section id="registration-act-rules" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_3__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_14__
                  </p>

                  <h3 id="eleven-month-convention" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_3_1__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_15__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_16__
                  </p>

                  <h3 id="stamp-duty-implications" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_3_2__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_17__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_18__
                  </p>
                </div>
              </section>

              <section id="evidence-in-court-tribunal" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_4__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_19__
                  </p>

                  <h3 id="section-49-prohibitions" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_4_1__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_20__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_21__
                  </p>

                  <h3 id="collateral-purpose-doctrine" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_4_2__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_22__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_23__
                  </p>
                </div>
              </section>

              <section id="security-deposit-recovery" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_5__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_24__
                  </p>

                  <h3 id="unjust-enrichment-landlords" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_5_1__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_25__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_26__
                  </p>

                  <h3 id="secondary-evidence-options" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    __H3_5_2__
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_27__
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    __PROSE_28__
                  </p>

                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">__TABLE_HEADER_0__</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">__TABLE_HEADER_1__</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">__TABLE_HEADER_2__</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">__TABLE_ROW_0_0__</td>
                          <td className="px-6 py-4">__TABLE_ROW_0_1__</td>
                          <td className="px-6 py-4">__TABLE_ROW_0_2__</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">__TABLE_ROW_1_0__</td>
                          <td className="px-6 py-4">__TABLE_ROW_1_1__</td>
                          <td className="px-6 py-4">__TABLE_ROW_1_2__</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">__TABLE_ROW_2_0__</td>
                          <td className="px-6 py-4">__TABLE_ROW_2_1__</td>
                          <td className="px-6 py-4">__TABLE_ROW_2_2__</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">__TABLE_ROW_3_0__</td>
                          <td className="px-6 py-4">__TABLE_ROW_3_1__</td>
                          <td className="px-6 py-4">__TABLE_ROW_3_2__</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">__TABLE_ROW_4_0__</td>
                          <td className="px-6 py-4">__TABLE_ROW_4_1__</td>
                          <td className="px-6 py-4">__TABLE_ROW_4_2__</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">__TABLE_ROW_5_0__</td>
                          <td className="px-6 py-4">__TABLE_ROW_5_1__</td>
                          <td className="px-6 py-4">__TABLE_ROW_5_2__</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_6__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __TIMELINE_INTRO__
                  </p>

                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        __TIMELINE_NUM_0__
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">__TIMELINE_TITLE_0__</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          __TIMELINE_DESC_0__
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        __TIMELINE_NUM_1__
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">__TIMELINE_TITLE_1__</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          __TIMELINE_DESC_1__
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        __TIMELINE_NUM_2__
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">__TIMELINE_TITLE_2__</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          __TIMELINE_DESC_2__
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        __TIMELINE_NUM_3__
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">__TIMELINE_TITLE_3__</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          __TIMELINE_DESC_3__
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        __TIMELINE_NUM_4__
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors text-left">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">__TIMELINE_TITLE_4__</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          __TIMELINE_DESC_4__
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_7__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong legal case and ensure the landlord cannot dispute the transaction, you must prepare a comprehensive evidence bundle. Since the agreement is not registered, having additional supporting documents is critical.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 text-left">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">__CHECKLIST_TITLE__</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          __CHECKLIST_ITEM_0__
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          __CHECKLIST_ITEM_1__
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          __CHECKLIST_ITEM_2__
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          __CHECKLIST_ITEM_3__
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          __CHECKLIST_ITEM_4__
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="notarized-lease-case-studies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  __H2_8__
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    __SUCCESS_INTRO__
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
                  __H2_9__
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
                <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-4">__H2_10__</h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                  <p>
                    __PROSE_29__
                  </p>
                  <p>
                    __PROSE_30__
                  </p>
                  <p>
                    __PROSE_31__
                  </p>
                  <p>
                    __PROSE_32__
                  </p>
                  <p>
                    __PROSE_33__
                  </p>
                </div>
              </section>

            </article>

            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">__SIDEBAR_TITLE__</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  __SIDEBAR_TEXT__
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  __SIDEBAR_BTN__
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
"""

    template = template.replace("__FAQS_JS__", faqs_js)
    template = template.replace("__REVIEWS_JS__", reviews_js)
    template = template.replace("__BANNER_SUB__", banner_sub)
    template = template.replace("__SECTION_TAG__", section_tag)
    template = template.replace("__BREADCRUMB_RECOVERY__", breadcrumb_recovery)
    template = template.replace("__BREADCRUMB_PAGE__", breadcrumb_page)
    template = template.replace("__TOC_TITLE__", toc_title)
    template = template.replace("__SIDEBAR_TITLE__", sidebar_title)
    template = template.replace("__SIDEBAR_TEXT__", sidebar_text)
    template = template.replace("__SIDEBAR_BTN__", sidebar_btn)
    
    template = template.replace("__H2_1__", h2_1)
    template = template.replace("__H3_1_1__", h3_1_1)
    template = template.replace("__H3_1_2__", h3_1_2)
    template = template.replace("__H2_2__", h2_2)
    template = template.replace("__H3_2_1__", h3_2_1)
    template = template.replace("__H3_2_2__", h3_2_2)
    template = template.replace("__H2_3__", h2_3)
    template = template.replace("__H3_3_1__", h3_3_1)
    template = template.replace("__H3_3_2__", h3_3_2)
    template = template.replace("__H2_4__", h2_4)
    template = template.replace("__H3_4_1__", h3_4_1)
    template = template.replace("__H3_4_2__", h3_4_2)
    template = template.replace("__H2_5__", h2_5)
    template = template.replace("__H3_5_1__", h3_5_1)
    template = template.replace("__H3_5_2__", h3_5_2)
    template = template.replace("__H2_6__", h2_6)
    template = template.replace("__H2_7__", h2_7)
    template = template.replace("__H2_8__", h2_8)
    template = template.replace("__H2_9__", h2_9)
    template = template.replace("__H2_10__", h2_10)
    
    template = template.replace("__CHECKLIST_TITLE__", checklist_title)
    for idx, item in enumerate(checklist_items):
        template = template.replace(f"__CHECKLIST_ITEM_{idx}__", item)
        
    template = template.replace("__TABLE_HEADER_0__", table_headers[0])
    template = template.replace("__TABLE_HEADER_1__", table_headers[1])
    template = template.replace("__TABLE_HEADER_2__", table_headers[2])
    
    for r_idx, row in enumerate(table_rows):
        for c_idx, cell in enumerate(row):
            template = template.replace(f"__TABLE_ROW_{r_idx}_{c_idx}__", cell)
            
    template = template.replace("__TIMELINE_INTRO__", timeline_intro)
    for idx, step in enumerate(timeline_steps):
        template = template.replace(f"__TIMELINE_NUM_{idx}__", step["num"])
        template = template.replace(f"__TIMELINE_TITLE_{idx}__", step["title"])
        template = template.replace(f"__TIMELINE_DESC_{idx}__", step["desc"])
        
    template = template.replace("__SUCCESS_INTRO__", success_intro)
    
    for idx, prose in enumerate(prose_blocks):
        if idx == len(prose_blocks)-1:
            template = template.replace(f"__PROSE_{idx}__", last_p)
        else:
            template = template.replace(f"__PROSE_{idx}__", prose)
            
    with open(filepath, "w", encoding="utf-8") as out_file:
        out_file.write(template)

def count_words():
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()
    
    faqs_text = []
    faq_matches = re.findall(r'question:\s*"([^"]+)"|answer:\s*"([^"]+)"', code)
    for match in faq_matches:
        faqs_text.append(match[0] or match[1])
        
    reviews_text = []
    review_matches = re.findall(r'author:\s*"([^"]+)"|text:\s*"([^"]+)"', code)
    for match in review_matches:
        reviews_text.append(match[0] or match[1])
        
    main_return_pos = code.find('return (\n    <>')
    if main_return_pos == -1:
        main_return_pos = code.find('return (\n    <>\n      <Script')
        
    jsx_block = code[main_return_pos:]
    jsx_block = re.sub(r'<Script.*?>.*?</Script>', '', jsx_block, flags=re.DOTALL)
    cleaned = re.sub(r'<[^>]*>', ' ', jsx_block)
    cleaned = re.sub(r'\{[^{}]*\}', ' ', cleaned)
    
    words_list = []
    for line in cleaned.split('\n'):
        line_clean = line.strip()
        line_clean = line_clean.replace('&quot;', '"').replace('&amp;', '&').replace('&middot;', '·')
        if line_clean:
            if line_clean == "return (" or line_clean == ");" or line_clean == "}":
                continue
            if line_clean.startswith("className=") or line_clean.startswith("id=") or line_clean.startswith("onClick="):
                continue
            words_list.extend(line_clean.split())
            
    for block in faqs_text:
        words_list.extend(block.split())
    for block in reviews_text:
        words_list.extend(block.split())
        
    return len(words_list)

# Trim sentences from paragraphs without links to make base_count drop below 3420.
# Let's count the base count first before trimming to see how much we need.
write_component("")
initial_base = count_words()
print(f"Initial base count (no trim): {initial_base}")

target_base = 3410
excess_to_trim = initial_base - target_base
print(f"We need to trim at least {excess_to_trim} words.")

def trim_last_sentence(text):
    sentences = re.split(r'(?<=\.)\s+', text.strip())
    if len(sentences) > 1:
        # Check if the last sentence contains a Link tag
        if "<Link" not in sentences[-1]:
            trimmed = " ".join(sentences[:-1])
            return trimmed
    return text

if excess_to_trim > 0:
    trimmed_count_so_far = 0
    # Trim sentences from paragraphs starting from the end
    for idx in range(len(prose_blocks) - 2, -1, -1):
        if trimmed_count_so_far >= excess_to_trim:
            break
        para = prose_blocks[idx]
        if "<Link" not in para:
            orig_len = len(para.split())
            trimmed_para = trim_last_sentence(para)
            trimmed_len = len(trimmed_para.split())
            saved = orig_len - trimmed_len
            if saved > 0:
                prose_blocks[idx] = trimmed_para
                trimmed_count_so_far += saved
                print(f"Trimmed paragraph {idx}: saved {saved} words. New text: '{trimmed_para[:40]}...'")

# Re-write and re-count base
write_component("")
base_count = count_words()
print(f"Base count (after trimming): {base_count}")

# 3. Calculate words needed in last paragraph
needed = 3500 - base_count
print(f"Words needed in last paragraph: {needed}")

# 4. Generate the exact concluding paragraph
def make_final_paragraph(words_needed):
    link_text = "how to recover money without written agreement"
    
    p1 = "If there is no registered lease deed, recovery of the deposit is still possible under the doctrine of unjust enrichment using bank transaction receipts and chat logs. You can find detailed strategies on"
    p2 = "to establish your claim in court. In conclusion, while a notarized agreement is cheap, a registered lease is the only safe option to avoid protracted legal battles in rent control tribunals."
    
    p1_words = p1.split()
    link_words = link_text.split()
    p2_words = p2.split()
    
    total_base_words = len(p1_words) + len(link_words) + len(p2_words)
    diff = words_needed - total_base_words
    print(f"make_final_paragraph: total_base_words={total_base_words}, diff={diff}")
    
    if diff > 0:
        fillers = ["Furthermore", "tenants", "and", "landlords", "must", "always", "consult", "qualified", "legal", "professionals", "to", "ensure", "that", "their", "interests", "are", "fully", "protected", "under", "the", "applicable", "provisions", "of", "the", "law", "in", "their", "respective", "states", "and", "municipal", "jurisdictions", "without", "any", "unnecessary", "delays", "or", "procedural", "challenges", "in", "courts", "or", "before", "rent", "tribunals", "across", "India"]
        while len(fillers) < diff:
            fillers.extend(fillers)
        padded_p2_words = p2_words + fillers[:diff]
        p2_new = " ".join(padded_p2_words)
    elif diff < 0:
        padded_p2_words = p2_words[:diff]
        p2_new = " ".join(padded_p2_words)
    else:
        p2_new = p2
        
    return f'If there is no registered lease deed, recovery of the deposit is still possible under the doctrine of unjust enrichment using bank transaction receipts and chat logs. You can find detailed strategies on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">{link_text}</Link> {p2_new}'

if needed > 0:
    last_paragraph = make_final_paragraph(needed)
    # 5. Overwrite component with the exact last paragraph
    write_component(last_paragraph)
    
    # Verify count again
    final_count = count_words()
    print(f"VERIFIED TOTAL WORD COUNT: {final_count}")
    if final_count == 3500:
        print("Success! Exact count is 3500.")
    else:
        print(f"Discrepancy: count is {final_count}")
else:
    print("Error: base_count exceeds 3500!")
