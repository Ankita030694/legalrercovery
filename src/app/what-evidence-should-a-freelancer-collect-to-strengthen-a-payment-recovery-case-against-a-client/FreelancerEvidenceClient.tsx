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
    question: "What is the most critical piece of evidence a freelancer needs to recover payments in India?",
    answer: "The most critical piece of evidence is the contract trail. This does not have to be a formal 30-page agreement; it can be a series of emails, Slack threads, WhatsApp messages, or Upwork/Fiverr work orders. The key is to prove 'Offer and Acceptance' (what work was requested and what price was agreed) under Section 10 of the Indian Contract Act, 1872. Without a contract trail showing the client requested the services and agreed to pay, it is extremely difficult to claim a default."
  },
  {
    question: "How can I prove work delivery in court if the client claims they never received it?",
    answer: "You can prove work delivery using digital transmission logs. Keep original emails containing the deliverables, download logs from file transfer platforms (like WeTransfer or Dropbox), and push history from version control systems (like GitHub or GitLab). Additionally, preserve client acknowledgments such as emails or WhatsApp messages saying 'looks good' or 'received.' To make these digital logs admissible, you must pair them with a Section 63 BSA certificate."
  },
  {
    question: "Is a WhatsApp chat considered legally valid evidence in Indian civil courts?",
    answer: "Yes, under the Information Technology Act, 2000, WhatsApp chats are recognized as valid electronic records. However, to present WhatsApp chats in court as evidence of contract or delivery, you must comply with Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023. This means you must attach a signed Section 63 certificate detailing the phone used and its cryptographic hash values, proving the chat screenshot or export has not been altered."
  },
  {
    question: "What is a Section 63 BSA Certificate, and how do I prepare one?",
    answer: "A Section 63 BSA Certificate (which replaced the Section 65B certificate under the Evidence Act) is a mandatory declaration certifying the authenticity of secondary electronic evidence. It must describe the device (e.g., iPhone 14, Dell laptop) used to access the record, declare that the device was operating properly, and provide SHA-256 cryptographic hashes of the files or logs. The certificate must be signed by the user of the device or system administrator to be admissible."
  },
  {
    question: "Does client deduction of TDS (Tax Deducted at Source) prove they owe me money?",
    answer: "Yes. Under Indian tax law, if a client deducts TDS from your invoices and registers it under your PAN in Form 26AS, it is considered an admission of the transaction and a clear acknowledgment of the debt. If they deduct TDS but fail to release the actual payment, you can present Form 26AS in court as a strong piece of evidence proving the client acknowledged the value of the services and their liability to pay."
  },
  {
    question: "Can an unpaid invoice alone be used to file a Summary Suit under Order 37 CPC?",
    answer: "An invoice alone is rarely sufficient unless it is supported by proof of work delivery and acceptance. However, if you have an invoice detailing the services and terms, and you can show a digital trail where the client received the invoice and either approved it or failed to dispute it within the payment window, courts treat the invoice as a written commercial contract, enabling you to file a fast-track Summary Suit under Order 37."
  },
  {
    question: "What is 'scope creep,' and how do I document it for a payment recovery case?",
    answer: "Scope creep refers to extra work demanded by the client beyond the originally agreed contract. To document scope creep, you must preserve every communication where the client requested additions and you indicated that these additions would incur extra costs. Do not perform out-of-scope work without obtaining written confirmation of the extra rates via email or chat; otherwise, the court may reject your claims for additional payment."
  },
  {
    question: "How long should a freelancer preserve communication logs after a project is finished?",
    answer: "You should preserve all contract, delivery, and communication logs for at least three (3) years after the completion of the project. Under the Limitation Act, 1963, the limitation period for filing a civil lawsuit for money recovery is exactly three years from the date the payment became due. If you discard your logs early, you will have no evidence to present in court if you need to initiate recovery."
  },
  {
    question: "What is the best way to handle oral agreements when a payment dispute occurs?",
    answer: "If you had an oral agreement, you must immediately establish a written record. Send the client a polite 'recap email' outlining the agreed terms, deliverables, and rates discussed verbally. If the client responds to that email acknowledging the terms or does not object to it while accepting the work, that email thread acts as a written confirmation of the oral contract, which can be presented as admissible evidence in court."
  },
  {
    question: "How does LegalRecovery help freelancers compile their evidence file?",
    answer: "LegalRecovery provides freelancers with a structured platform to upload invoices, emails, and chat logs. Our legal-tech system reviews your files for completeness, automatically calculates interest penalties, generates the required Section 63 BSA certificates for your digital dispatches, and matches your documents to draft an advocate-backed legal notice served via physical Speed Post and verified WhatsApp/email tracking."
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
      "name": "Guides",
      "item": "https://www.legalrecovery.in/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Freelancer Evidence Checklist",
      "item": "https://www.legalrecovery.in/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Evidence Checklist for Freelancer Payment Recovery in India",
  "description": "Discover the legal evidence checklist freelancers in India must compile to recover outstanding payments. Learn how to archive emails, WhatsApp chats, invoices, and comply with Section 63 BSA.",
  "image": "https://www.legalrecovery.in/og-freelancer-evidence.png",
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
  "name": "Freelancer Evidence Review & Legal Notices",
  "image": "https://www.legalrecovery.in/og-freelancer-evidence.png",
  "description": "Professional document auditing and advocate-backed legal notices with Section 63 BSA digital certificates for gig workers in India.",
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

export default function FreelancerEvidenceClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "freelance-contractual-existence-proof", title: "1. Contractual Existence Proof" },
    { id: "service-delivery-and-acceptance-records", title: "2. Delivery & Acceptance Proof" },
    { id: "invoice-compliance-and-tax-trails", title: "3. Invoice & Tax Verification" },
    { id: "digital-evidence-bsa-certification", title: "4. Section 63 BSA Certificate" },
    { id: "client-default-and-evasion-documentation", title: "5. Evasion & Bad Faith Logs" },
    { id: "pre-suit-demands-and-notices", title: "6. Demand & Notice Audit" },
    { id: "quantum-meruit-and-quasi-contract-evidence", title: "7. Section 70 Quasi-Contracts" },
    { id: "evidence-file-compilation-best-practices", title: "8. Master Evidence File Setup" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Guides", href: "/guides" },
    { label: "Freelancer Evidence Checklist", href: "/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client" }
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
              Evidence Collection Guide for Indian Freelancers
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Airtight Evidence Checklist: <span className="text-[#DC2626]">Recover Unpaid Freelance Dues</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A detailed guide on compiling, indexing, and validating the commercial and digital evidence required to win payment recovery cases in Indian courts and MSME councils.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
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
                
                {/* Section 1 */}
                <section id="freelance-contractual-existence-proof" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Establishing the Legal Agreement: Documenting Offer, Acceptance, and Commercial Intent
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In any contract dispute or payment recovery case under Indian law, the first and most fundamental hurdle is proving the existence of a valid contract. For freelancers, whose work is often initiated in dynamic, informal environments, this step can be challenging. Many clients exploit this informality by claiming that there was no binding agreement, that the terms were vague, or that no formal contract was ever signed. Under the **Indian Contract Act, 1872**, this argument is legally invalid. Section 10 of the Act specifies that all agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration, and with a lawful object. The law does not mandate that a contract must be a physical, notarized document signed on stamp paper to be enforceable; oral agreements and electronic communications are equally binding.
                    </p>
                    <p>
                      To establish an enforceable agreement in court, the freelancer must present clear evidence of **Offer and Acceptance** and **Consensus ad Idem** (meeting of the minds). In the freelance context, this is achieved by documenting the communication trail that preceded the start of the work. You must gather all initial project proposals, scope documents, price quotes, and estimate sheets that you sent to the client. This constitutes the &quot;Offer.&quot; Next, you must present the client's response—such as an email stating &quot;please proceed with this proposal,&quot; a signed purchase order, or a WhatsApp chat saying &quot;let's go ahead with this scope at the agreed rate.&quot; This constitutes the &quot;Acceptance.&quot; The combination of these documents establishes a legally binding contract.
                    </p>
                    <p>
                      Furthermore, the freelancer must show that there was mutual consideration. Consideration is the price agreed upon for the services. To prove this, you must compile your rate cards, hourly pricing agreements, or milestone payment schedules discussed in writing. If the client has paid an advance deposit or cleared past milestones, these transactions are extremely valuable. Bank statements showing that the client paid a 25% advance or cleared the first milestone invoice act as an undeniable admission of the commercial agreement. It proves that the client recognized you as a contractor and accepted the pricing terms, preventing them from later claiming that no agreement existed or that the rates were never finalized.
                    </p>
                    <p>
                      Even if the agreement was purely oral (e.g., discussed over a phone call or in a physical meeting), you can establish its existence by presenting a subsequent **&quot;recap email.&quot;** It is a critical best practice for freelancers to send a written summary immediately after any verbal discussion, stating: <em>&quot;As discussed on our call today, I will deliver X by date Y for fee Z. Please let me know if any details differ.&quot;</em> If the client responds to this email, or fails to object to its terms while allowing you to commence work, the email chain becomes a legally admissible confirmation of the oral contract. Gathering this pre-project documentation is the first step in building an airtight recovery case.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A signed, multi-page agreement is not a prerequisite for payment recovery. Under Section 10 of the Indian Contract Act, a combination of proposals, emails, and chat logs discussing scope and pricing constitutes a legally binding contract. Gathering this offer-and-acceptance trail is essential to defeat a client's claim of 'no written agreement.'&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="service-delivery-and-acceptance-records" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Work Delivery and Milestones: Compiling Airtight Proof of Completion
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Once the existence of the contract is established, the next burden of proof is to show that you fulfilled your obligations under that contract. In payment disputes, clients frequently try to justify non-payment by claiming that the work was never delivered, that it was delivered late, or that the quality of the deliverables did not meet the agreed specifications. To counter this defense, the freelancer must compile a meticulous archive of **Work Delivery and Acceptance** records. In a digital work environment, every submission leaves a trail; your job is to organize this trail chronologically so it is easily understood by an advocate or a judge.
                    </p>
                    <p>
                      The primary proof of delivery is the transmission log. For files sent via email, you must preserve the original sent emails, complete with attachments and the recipient's address. If you delivered large assets through cloud storage or transfer platforms (such as Google Drive, Dropbox, or WeTransfer), you must download and archive the transfer receipts and access logs. These logs show the exact date and time the client downloaded the files. For software developers, version control systems are a goldmine of evidence. Exporting git commit histories, pull request merges, and deployment logs (such as Vercel or AWS deploy receipts) provides irrefutable, cryptographic proof that the code was completed and delivered to the client's repository.
                    </p>
                    <p>
                      Equally important is proving the client's **Acceptance** of the work. If the client received the deliverables and expressed satisfaction, even briefly, that communication must be preserved. Save screenshots and text exports of messages saying: &quot;This looks great,&quot; &quot;The designs are approved,&quot; or &quot;We have deployed the changes to production.&quot; If the client raised feedback or requested revisions, document that you completed those revisions. Show the communication loop where they requested changes, you delivered the updated files, and they responded with final approvals. This loop establishes that you worked in good faith and met all project milestones.
                    </p>
                    <p>
                      Finally, you must document **unjust enrichment**—meaning the client is utilizing your work while refusing to pay for it. If you designed a website and the website is live under the client's domain, take screenshots and archive the source code matching the live site. If you wrote copy and it is published on their blog, print the pages to PDF. If you developed an app and it is listed on the Play Store, record it. Proving that the client accepted the work and is actively enjoying its commercial benefits, while withholding the agreed payment, is a powerful argument in civil recovery and MSME proceedings, making it very difficult for the client to deny their payment liabilities.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="invoice-compliance-and-tax-trails" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Invoicing and Financial Audits: Matching Invoices with GST and TDS Logs
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Invoices are the formal commercial documents that translate work delivery into financial debt. Under Indian civil law, particularly for filing a Summary Suit under Order 37 of the CPC, an invoice is treated as a commercial contract. However, to serve as strong legal evidence, your invoices must be clear, compliant, and integrated with official tax records. Freelancers must maintain an organized invoicing system where each invoice is sequentially numbered, clearly states the date of issue, the due date, the detailed description of the services rendered, the payment instructions, and any late payment interest terms.
                    </p>
                    <p>
                      The most powerful, yet frequently overlooked, financial evidence for freelancers in India is the **TDS (Tax Deducted at Source) trail**. Under Section 194J or 194C of the Income Tax Act, 1961, corporate clients are legally required to deduct TDS (typically 10% or 2% for professional services) from a freelancer's invoice before releasing the payment. This deducted tax is then deposited with the government and registered under the freelancer's PAN. The client must file quarterly TDS returns, which are reflected in the freelancer's **Form 26AS** and Annual Information Statement (AIS) on the Income Tax portal.
                    </p>
                    <p>
                      If a client deducts TDS from your invoice and registers it in your Form 26AS, but fails to pay you the remaining invoice amount, they have handed you an airtight legal weapon. In the eyes of the law, the act of deducting TDS and filing it under your PAN is a formal **admission of transaction and liability**. It proves that the client acknowledged the validity of your invoice, accepted the services, and recorded the business expense in their official books of accounts. A client cannot claim in court that the work was defective or that no contract existed if they have already deducted TDS for that specific invoice. Presenting a certified copy of Form 26AS showing the client's PAN, the invoice value, and the deducted tax is highly persuasive evidence in civil recovery trials.
                    </p>
                    <p>
                      Additionally, freelancers who are registered under GST must ensure that their invoices comply with GST rules and are filed in their **GSTR-1 and GSTR-3B returns**. When you upload the invoice details to the GST portal, the transaction is reflected in the client's GSTR-2B, allowing them to claim Input Tax Credit (ITC). If the client has claimed ITC on your invoice while refusing to pay you, they are committing financial fraud. Documenting this tax trail by matching your GSTR-1 filings, bank ledger accounts showing zero receipts, and Form 26AS entries creates an absolute financial audit trail that makes it impossible for the client to dispute the debt.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Financial Document</th>
                            <th className="border border-slate-200 p-3">Legal Significance in Court</th>
                            <th className="border border-slate-200 p-3">How to Extract / Prove</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Sequential Invoices</td>
                            <td className="border border-slate-200 p-3">Acts as the written contract and defines the principal debt amount.</td>
                            <td className="border border-slate-200 p-3">PDF invoices matching email dispatches and scopes.</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Form 26AS (TDS Logs)</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Unconditional admission of liability and transaction.</td>
                            <td className="border border-slate-200 p-3">Download from Income Tax e-filing portal (PAN-linked).</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">GST GSTR-1 Ledger</td>
                            <td className="border border-slate-200 p-3">Proves commercial reporting; prevents client from denying invoice.</td>
                            <td className="border border-slate-200 p-3">Export filed GSTR-1 sheets from GST portal.</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Bank Statement / Ledger</td>
                            <td className="border border-slate-200 p-3">Proves non-payment (absence of credit entry) for the invoice period.</td>
                            <td className="border border-slate-200 p-3">Certified bank statement showing no inward remittance.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="digital-evidence-bsa-certification" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Electronic Evidence Admissibility: Compliance with Section 63 BSA 2023 Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Because freelancers operate almost exclusively online, their evidence files consist primarily of digital records—emails, WhatsApp chat logs, Slack screenshots, and Git commits. While the **Information Technology Act, 2000**, recognizes electronic records as legally valid, presenting them in a court trial requires strict adherence to procedural law. Under Indian law, any printout or copy of an electronic record is classified as secondary evidence. To be admissible as evidence, it must strictly comply with the certification rules laid down under **Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023** (which recently replaced Section 65B of the Indian Evidence Act, 1872).
                    </p>
                    <p>
                      Failing to provide a Section 63 BSA Certificate renders your digital evidence completely inadmissible. In a dispute, the client's advocate will immediately object to any screenshots or printed emails that lack this certificate. To ensure your digital logs are accepted by the judge, you must prepare a signed Section 63 certificate that details the computer or mobile device used to store and print the records. The certificate must explicitly state:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The exact description of the device (such as Dell Inspiron laptop, model number, serial number, and operating system).
                      </li>
                      <li>
                        That the device was operating properly and was in your lawful control during the period when the records were created.
                      </li>
                      <li>
                        That the digital files (e.g., email printouts or exported WhatsApp PDF chats) are true and accurate copies of the originals and have not been altered or tampered with.
                      </li>
                      <li>
                        The **cryptographic hash values** (such as SHA-256) of the files to verify their integrity and prevent any allegation of manipulation.
                      </li>
                    </ul>
                    <p>
                      When collecting chat evidence, simple screenshots are weak because they do not contain complete metadata and can be easily challenged as manipulated. Instead, freelancers should use the **&quot;Export Chat&quot;** feature in WhatsApp or Slack. This feature generates a complete, unedited text file containing the entire conversation log, dates, times, and phone numbers. If you present this exported file alongside the signed Section 63 BSA Certificate containing its SHA-256 hash, the evidence becomes legally bulletproof. At LegalRecovery, we automatically generate certified digital tracking logs and help prepare Section 63 BSA Certificates for all client communications, protecting your rights in court.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Anatomy of an Airtight Digital Certificate (Section 63 BSA)
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                        <li>
                          <strong>System Specifications:</strong> Serial numbers and MAC addresses of the laptop/mobile phone used to access the accounts.
                        </li>
                        <li>
                          <strong>Cryptographic Hashes:</strong> Generating a SHA-256 hash of the screenshots or chat export files using standard hashing tools (e.g., <code>certutil -hashfile filename SHA256</code>) to lock the file integrity.
                        </li>
                        <li>
                          <strong>Ordinary Course Declaration:</strong> Attesting that the communications were generated and received in the regular course of business activities.
                        </li>
                        <li>
                          <strong>Official Signature:</strong> Signed by the freelancer under oath (often notarized as an affidavit) to prevent denial of authenticity.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="client-default-and-evasion-documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Documenting Evasion and Bad Faith: Chronology of Payment Delays
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In civil litigation, the conduct of the parties plays a vital role. If you can show that you made repeated, polite attempts to resolve the payment dispute amicably, while the client responded with evasive tactics, ignored messages, or outright bad faith, you will secure the court's sympathy. Furthermore, showing bad faith is essential if you wish to file a criminal complaint for **Cheating under Section 318 of the BNS, 2023** (formerly Section 420 IPC), which requires proving that the client had fraudulent intent. To do this, you must compile a detailed **Evasion and Bad Faith Log**.
                    </p>
                    <p>
                      Start by documenting your follow-up chronology. Compile every payment reminder email you sent, showing the dates, times, and the lack of response. If the client did respond, preserve those messages. In many payment disputes, clients will make a series of broken promises, saying: &quot;We will release the payment next Friday,&quot; or &quot;Our finance team is processing it.&quot; Each of these broken promises is a critical piece of evidence. It proves that the client acknowledged the debt and promised to pay, which resets the limitation clock and defeats any later claim that they did not owe the money.
                    </p>
                    <p>
                      Next, preserve evidence of **active evasion**. If the client has blocked your phone number, deleted the Slack channel, or deactivated your access to the project repository immediately after receiving the final deliverables, take screenshots. If they refuse to take your calls, keep a call log showing the outgoing calls and duration. If you have sent them invoices via platforms that show read receipts, capture those receipts. This trail proves to the court that the client did not have a genuine dispute over quality, but was actively evading their financial liabilities.
                    </p>
                    <p>
                      Finally, perform a **corporate search** to identify the directors and officers behind the business. Under the Companies Act, 2013, if the client is a private limited company, the directors can sometimes be held liable or targeted in legal notices to create pressure. You can extract the company's master data, registered office address, and director names directly from the **Ministry of Corporate Affairs (MCA) portal**. Documenting this corporate structure alongside the evasion log ensures that your legal notice is served directly to the active decision-makers of the company, maximizing your chances of recovery.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Evasion is a powerful indicator of bad faith. Proving that the client blocked your access, deleted communications, or made repeated broken promises establishes a clear default and can support criminal cheating complaints. Documenting this chronology is vital for civil and criminal recovery.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="pre-suit-demands-and-notices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Pre-Suit Communication Audit: Preserving Legal Notices and Dispatches
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Before a freelancer files a lawsuit in a civil court or approaches the MSME Facilitation Council, they must establish that they gave the client a formal, final opportunity to settle the debt. This is done by serving a **Pre-Suit Legal Notice**. In court, the legal notice and its proof of service are the foundational documents that define your cause of action. If you cannot prove that the notice was successfully served on the client, your case can face severe procedural challenges. Therefore, you must maintain a complete pre-suit communication audit.
                    </p>
                    <p>
                      The audit begins with the notice itself. You must preserve the final signed copy of the notice drafted by your advocate, detailing the specific demand and the 15-day timeline. Next, you must preserve the **proof of dispatch**. When sending a physical notice, it must be sent via **Registered Post AD or Speed Post** through the Indian Post Office. Keep the physical booking receipts containing the unique tracking number (e.g., <code>ED123456789IN</code>). Once the notice is delivered, download and print the official tracking report from the India Post website showing &quot;Item Delivered.&quot;
                    </p>
                    <p>
                      Under **Section 27 of the General Clauses Act, 1897**, if a formal document is sent to the correct address via registered post, the service is legally deemed complete. Even if the client refuses to accept the delivery, or if the postman returns it with the mark &quot;Refused,&quot; the law treats this as **deemed service**. You must preserve the returned, unopened envelope in its original state as evidence of the client's refusal, which acts as a major point of bad faith in court.
                    </p>
                    <p>
                      To ensure absolute service, the notice should also be dispatched digitally via email and WhatsApp. For email service, print the email showing the sent time and obtain the SMTP delivery logs. For WhatsApp, take screenshots showing the double blue ticks or the read receipt details, and pair them with a Section 63 BSA Certificate. Finally, preserve the client's reply to the notice (if any). If the client replies through their advocate, their response will frequently contain admissions of the transaction or contradictory statements that your legal team can exploit during the trial to secure a quick decree.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="quantum-meruit-and-quasi-contract-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Proving Quasi-Contractual Entitlement: Section 70 Evidence Standards
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In cases where a formal contract was never signed, or if the contract was terminated midway, freelancers must rely on the quasi-contractual remedy of **Quantum Meruit** under **Section 70 of the Indian Contract Act, 1872**. This section states that where a person lawfully does anything for another, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the latter is bound to make compensation. However, because there is no formal contract defining the payment terms, the evidentiary standard for Section 70 is exceptionally fact-intensive. The freelancer must prove three statutory conditions with clear, documented evidence.
                    </p>
                    <p>
                      The first condition is proving that the act was **lawful**. You must show that the work was requested by the client and performed in a legitimate business context. You can prove this by presenting email instructions, design briefs, or slack chats where the client explicitly asked you to perform the work. If the client provided you with assets, branding guidelines, or databases to work with, preserve those files. This proves that you did not perform the services unilaterally, but did so at the client's request.
                    </p>
                    <p>
                      The second condition is proving **non-gratuitous intent**—meaning you expected to be paid. In court, the client may attempt to argue that the work was done as a free trial, a pitch, or an internship. To defeat this, you must present price quotes, estimates, or email exchanges where you discussed your rates or invoice policies. If you have a standard rate card published on your website, or if you can show bank statements of past paid projects for the same client, this establishes a clear commercial intent, proving that you never intended to work gratuitously.
                    </p>
                    <p>
                      The third condition is proving that the client **enjoyed the benefit** of your services. This is the core of a Section 70 claim. If you developed a software module and the client integrated it into their live application, provide the live URL and code comparison. If you designed marketing flyers and the client launched them on social media, take screenshots of their active campaigns. Showing that the client has retained your work and is actively using it to generate business value, while refusing to compensate you, establishes **unjust enrichment**. This forces the court to award you reasonable compensation matching the market rate of the services, even without a formal contract.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="evidence-file-compilation-best-practices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. The Master Evidence File: Structuring Your Case Folder for Litigation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      When a payment dispute occurs, freelancers often make the mistake of sending disorganized, scattered screenshots and files to their advocates, causing significant delays. To ensure a fast-track recovery via a Summary Suit or MSME Facilitation Council, you must compile an organized **Master Evidence File**. This file acts as a structured repository of your case, allowing your legal team to draft the legal notice and prepare the plaint with absolute precision.
                    </p>
                    <p>
                      Your Master Evidence File should be organized into folders corresponding to the chronology of the project:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Folder 1: The Contract:</strong> Signed agreements, purchase orders, proposals, price quotes, and email acceptance threads.
                      </li>
                      <li>
                        <strong>Folder 2: The Deliverables:</strong> Deliverable files, download links, git commit histories, staging URLs, and push logs.
                      </li>
                      <li>
                        <strong>Folder 3: Invoices & Taxes:</strong> Sequentially numbered invoices, Form 26AS reports, and filed GSTR-1 returns.
                      </li>
                      <li>
                        <strong>Folder 4: Reminders & Evasion:</strong> Follow-up email chains, WhatsApp exports, call logs, MCA corporate master data.
                      </li>
                      <li>
                        <strong>Folder 5: Section 63 BSA compliance:</strong> Pre-calculated SHA-256 hash sheets and signed system certificates.
                      </li>
                    </ul>
                    <p>
                      By maintaining this level of organization, you eliminate any potential loopholes that the client's legal team can exploit. It allows your advocate to cite specific dates, times, and document reference numbers in the legal notice, demonstrating to the client that you have an airtight case. In many payment disputes, when a client receives a legal notice that is backed by such a precise evidence summary, they recognize that contesting the case in court will be a losing battle and immediately offer a settlement.
                    </p>
                    <p>
                      At LegalRecovery, we specialize in helping freelancers build this Master Evidence File. Our automated platform guides you through uploading your documents, reviews your digital logs for legal compliance, automatically prepares the required Section 63 BSA certificates, and connects you with expert advocates to dispatch formal dispatches. By combining legal expertise with advanced technology, we ensure that your rights are protected, your evidence is airtight, and your outstanding freelance payments are recovered securely and efficiently.
                    </p>
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
                      <h4 className="font-extrabold text-xs text-slate-900">— Rashmi Sen (Chennai)</h4>
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
                <h3 className="text-sm font-black mb-3">Recover Freelance Payments</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Build an airtight evidence file and dispatch formal legal notices through expert advocate dispatches.
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
