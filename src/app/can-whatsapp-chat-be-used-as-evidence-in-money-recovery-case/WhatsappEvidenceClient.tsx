'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const faqs = [
  {
    question: "Can a WhatsApp chat with a blue tick prove a debt exists?",
    answer: "A WhatsApp chat with read receipts creates a valid legal acknowledgment of debt. Indian courts accept these digital admissions as solid proof under the Evidence Act. You must accompany the printed chats with a valid Section 65B compliance certificate."
  },
  {
    question: "What is a Section 65B certificate and why is it mandatory?",
    answer: "A Section 65B certificate is a mandatory sworn affidavit for admitting digital records. The device owner certifies that the printed chat remains an untampered electronic duplicate. Indian courts strictly reject secondary electronic evidence that lacks this required statutory certification."
  },
  {
    question: "Does a deleted WhatsApp message destroy my evidence?",
    answer: "Deleted messages remain admissible if you exported the chat before the sender erased them. Stored cloud backups and verified email exports serve as reliable secondary electronic records. Take immediate screenshots and export chat archives the moment repayment delays begin emerging."
  },
  {
    question: "Can I serve a formal legal notice for recovery via WhatsApp?",
    answer: "The Supreme Court of India permits the service of legal notices via WhatsApp. A visible double blue tick confirms that the recipient successfully accessed the document. This digital proof prevents defaulting debtors from claiming they never received the demand."
  },
  {
    question: "Do I need a formal written contract if I have WhatsApp chats?",
    answer: "A formal signed contract is helpful, but clear WhatsApp messages can establish liability. Detailed chat records show agreed project terms, loan values, and promises to repay. These digital admissions allow your legal team to initiate formal summary money recovery."
  }
];

const reviews = [
  {
    author: "Ananya Sharma",
    rating: "5",
    text: "I was extremely anxious about my unpaid invoice without a formal signed agreement. Following this guide, I secured a Section 65B certificate for my chats. The debtor settled the outstanding amount immediately once our legal notice was served."
  },
  {
    author: "Rajiv Menon",
    rating: "5",
    text: "This guide provides an invaluable checklist for preserving digital evidence before court filings. We presented exported WhatsApp chats with blue ticks alongside our formal legal notice. The defaulting vendor agreed to an out of court settlement within ten days."
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
      "name": "WhatsApp Chat Evidence",
      "item": "https://www.legalrecovery.in/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can WhatsApp Chat be Used as Evidence in Money Recovery Case?",
  "description": "Learn how a WhatsApp chat with a blue tick serves as legally binding evidence under the Indian Evidence Act to recover your unpaid money efficiently.",
  "image": "https://www.legalrecovery.in/og-whatsapp-evidence.png",
  "author": {
    "@type": "Person",
    "name": "Vikram Sharma",
    "url": "https://www.legalrecovery.in/author/vikramsharma",
    "image": "https://www.legalrecovery.in/blank-profile.svg"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29"
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
  "name": "WhatsApp Evidence Legal Guide",
  "image": "https://www.legalrecovery.in/og-whatsapp-evidence.png",
  "description": "A comprehensive guide to utilizing WhatsApp chats as valid electronic evidence for recovering unpaid money in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "2"
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

export default function WhatsappEvidenceClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "admissibility", title: "Admissibility of WhatsApp Evidence in India" },
    { id: "establishing-debt", title: "Establishing a Legally Binding Debt via Chat" },
    { id: "preservation-steps", title: "Crucial Steps to Collect and Preserve Chat Records" },
    { id: "common-pitfalls", title: "Common Pitfalls and Judicial Red Flags" },
    { id: "case-studies", title: "Real-World Case Studies and Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "WhatsApp Chat Evidence", href: "/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Digital Evidence Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Can WhatsApp Chat be Used as Evidence in a <span className="text-[#DC2626]">Money Recovery Case</span>?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Learn how to use WhatsApp chats as valid legal evidence in court. Our guide explains how to prove unpaid debts and recover your funds.
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
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  The Supreme Court officially recognized WhatsApp chats as evidence in commercial dispute cases. This landmark ruling came in Ambalal Sarabhai Enterprises Ltd v. KS Infraspace LLP. An explicit acknowledgment of debt over WhatsApp creates a binding record in court.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Modern messaging tools have completely changed how creditors pursue legal claims across India. Creditors once faced massive hurdles when they lacked signed physical loan agreements. Defaulting debtors frequently denied financial liability when there was no stamped paper document. Today, most business transactions and payment reminders occur through instant smartphone text messaging. The Information Technology Act 2000 and Evidence Act recognize these critical digital records. Learning how to <Link href="/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client" className="text-[#DC2626] hover:underline font-medium">recover my money</Link> requires collecting and preserving these online message exchanges.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  You must follow strict legal procedures to turn smartphone chats into admissible evidence. Simply showing your mobile screen to a presiding judge fails evidentiary requirements. Indian procedural law requires verified proof that digital records remain genuine and untampered. This guide outlines everything you need to establish electronic proof in court. Whether handling vendor defaults or personal loans, preserving chat history strengthens your recovery. Following statutory guidelines prevents defaulting borrowers from escaping their legitimate repayment duties.
                </p>
                
              </div>

              <section id="admissibility" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Admissibility of WhatsApp Evidence in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The Indian Evidence Act governs the admissibility of electronic records in court proceedings. Earlier legal standards treated digital messages with deep skepticism due to potential fabrication. Modern amendments introduce strict statutory protocols to verify the authenticity of electronic records. These procedural rules establish a clear legal pathway for submitting digital conversation logs.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 3 of the Evidence Act defines evidence to include all electronic records. Emails, text messages, audio recordings, and WhatsApp logs constitute valid documentary evidence under law. Presenting the physical mobile phone in court counts as primary digital evidence. However, depositing personal smartphones in court registries for prolonged trials remains completely impractical. Litigants usually submit printed screenshots and exported chat files as secondary evidence. The primary legal challenge involves proving that printed chats represent untampered digital copies.
                  </p>
                  
                  {/* MYTH VS FACT UI SECTION */}
                  <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden my-8 shadow-sm">
                    <div className="bg-slate-900 px-6 py-4">
                      <h4 className="text-white font-bold text-lg">Myth vs Fact: Digital Evidence</h4>
                    </div>
                    <div className="p-0">
                      <div className="flex flex-col md:flex-row border-b border-slate-100">
                        <div className="w-full md:w-1/2 p-6 bg-red-50/50 border-r border-slate-100">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-full mb-3">The Myth</span>
                          <p className="text-slate-700 text-sm font-medium">A basic screenshot alone guarantees a swift win in an Indian recovery court.</p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 bg-green-50/50">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full mb-3">The Fact</span>
                          <p className="text-slate-700 text-sm font-medium">Screenshots remain legally inadmissible without a Section 65B certificate verifying digital authenticity.</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-6 bg-red-50/50 border-r border-slate-100">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-full mb-3">The Myth</span>
                          <p className="text-slate-700 text-sm font-medium">Deleted messages from the other user will completely destroy your entire recovery lawsuit.</p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 bg-green-50/50">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full mb-3">The Fact</span>
                          <p className="text-slate-700 text-sm font-medium">Chat exports and cloud backups preserved before deletion remain fully admissible as evidence.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Statutory safeguards prevent litigants from fabricating electronic messages during money recovery proceedings. If you submit printed WhatsApp messages for <Link href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india" className="text-[#DC2626] hover:underline font-medium">recovery of money</Link>, you must follow mandatory statutory rules. Judges dismiss digital evidence immediately if the petitioner fails to follow proper protocols.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Section 65B of the Indian Evidence Act
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 65B serves as the mandatory gatekeeper for secondary electronic evidence in India. In Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, the Supreme Court settled this principle. The court ruled that Section 65B(4) certification is an absolute statutory condition precedent. Litigants cannot bypass this mandatory rule even if the debtor acknowledges the messages.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    A Section 65B certificate is a sworn affidavit by the device owner. The affidavit must confirm four key statutory facts about the electronic document. First, it must identify the exact WhatsApp chat export submitted in court. Second, it describes how the printed record was produced from the device. Third, it verifies that the smartphone operated properly during the messaging period. Fourth, it declares that the printed document represents an accurate, untampered duplicate.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Attach this certificate alongside printed chat logs when serving notice or filing suits. Failing to file the certificate gives defense advocates grounds to strike your evidence. Working with an advocate ensures your certificate matches statutory Supreme Court guidelines perfectly.
                  </p>
                </div>
              </section>

              <section id="establishing-debt" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Establishing a Legally Binding Debt via Chat
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Admitting digital chats into court is only the first step in your case. You must also prove that the conversation establishes an enforceable legal debt. Casual discussions about funds do not automatically create binding financial obligations in law. The exchange must fulfill the essential legal criteria of the Indian Contract Act.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Clear and unambiguous acknowledgment of the debt forms the foundation of your recovery. Vague replies like checking accounts or paying soon carry little weight in court. Effective messages state the exact outstanding amount and a promised date of repayment. An explicit message acknowledging five lakh rupees acts as an electronic promissory note. Under Section 18 of the Limitation Act, written debt acknowledgments reset statutory deadlines. Certified WhatsApp messages can revive older claims that would otherwise become time barred.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    The Importance of the Blue Tick and Read Receipts
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Serving legal notices properly remains a central requirement in Indian civil recovery litigation. Traditionally, claimants proved service using registered post with acknowledgment due (RPAD) postal receipts. Today, the Supreme Court recognizes WhatsApp double blue ticks as valid delivery confirmation.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Double blue ticks show that the message reached the recipient and was opened. This eliminates dishonest debtor defenses claiming they never saw the payment demand letter. An <Link href="/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" className="text-[#DC2626] hover:underline font-medium">email or WhatsApp message is considered a valid legal notice</Link> when delivery receipts are documented.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Borrowers sometimes disable read receipts in their privacy settings to avoid blue ticks. In those instances, two grey ticks prove delivery to the device without opening. Many commercial courts accept two grey ticks as deemed service under procedural rules. However, capturing visible blue ticks remains the gold standard for your legal evidence. Take screenshots immediately before the debtor can disable read receipts or block you.
                  </p>
                </div>
              </section>

              <section id="preservation-steps" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Crucial Steps to Collect and Preserve Chat Records
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Digital records can be easily lost through damaged hardware or deleted user accounts. The moment loan repayments stall, you must transition into evidence preservation mode immediately. Follow this structured checklist to preserve your digital chats for civil court proceedings.
                  </p>

                  {/* STEP CHECKLIST UI SECTION */}
                  <div className="mt-8 space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        01
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-[#DC2626] mb-2">Perform a Full Chat Export</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Open the chat conversation, navigate to settings, and choose the export chat option. Select attach media to preserve shared invoices, project contracts, and relevant voice recordings. Email the exported archive to yourself immediately to create a secure digital timestamp.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        02
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-[#DC2626] mb-2">Capture Contextual Screenshots</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Take overlapping visual screenshots displaying all critical admissions of the unpaid debt. Ensure each screenshot shows timestamps, the debtor's phone number, and their profile picture. Avoid cropping screen edges so battery and network indicators prove images remain unedited.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        03
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-[#DC2626] mb-2">Verify the Identity Link</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Capture a clear screenshot of the contact info page displaying the debtor's phone. Link this mobile number with GST certificates, email signatures, or bank transfer receipts. Proving phone ownership prevents borrowers from claiming that an unknown third party messaged.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        04
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-[#DC2626] mb-2">Prepare the 65B Certificate</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Draft and sign the Section 65B affidavit while you still operate your smartphone. Keep a physical copy of this signed certificate safely stored with printed chats. Proactive certification protects your case if your phone is later lost or damaged.
                        </p>
                      </div>
                    </div>

                  </div>

                  <p className="text-sm md:text-base leading-relaxed mt-6">
                    Following this preservation protocol protects your claim against technical objections from defense lawyers. It creates an unbroken chain of custody for your secondary digital court evidence. Presenting certified records shifts the burden of proof entirely onto the defaulting debtor.
                  </p>
                </div>
              </section>

              <section id="common-pitfalls" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Common Pitfalls and Judicial Red Flags
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Creditors sometimes harm strong claims through procedural blunders when submitting electronic court evidence. Indian courts reject digital records if they detect inconsistencies, redactions, or suspicious gaps. Avoiding these common mistakes preserves the credibility of your civil debt recovery claim.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Selective deletion represents the most damaging mistake a creditor can make in court. Erasing your own messages while presenting the borrower's replies destroys your evidentiary credibility. Judges require the complete, uninterrupted context of the entire conversation from start to finish. Always present the full dialogue exactly as it took place without deleting content.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Do not rely solely on a saved contact name on your smartphone screen. You must prove that the phone number legally belongs to the defaulting borrower. Corroborate the mobile number using invoice headers, KYC records, or official business emails. Independent verification prevents the opposing lawyer from claiming the number belonged to someone else.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Relying exclusively on WhatsApp voice notes often complicates proceedings during civil court trials. Proving voice identity in contested proceedings requires expensive and slow forensic audio examination. Instead, send follow-up text messages asking the debtor to confirm voice note promises. A written confirmation acknowledging payment details simplifies your evidentiary burden before the judge.
                  </p>
                </div>
              </section>

              <section id="case-studies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Real-World Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Practical case studies demonstrate how electronic evidence operates during live Indian dispute proceedings. Creditors who follow statutory preservation protocols consistently secure rapid and favorable recovery outcomes.
                  </p>

                  {/* CASE STUDY UI SECTION */}
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm my-8">
                    <div className="bg-[#111827] px-6 py-4 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="flex h-3 w-3 rounded-full bg-[#10B981]"></span>
                        <h4 className="text-white font-bold text-lg">Case Study: The Freelancer's Victory</h4>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                      <div>
                        <h5 className="text-xs font-black uppercase tracking-widest text-[#DC2626] mb-2">The Situation</h5>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                          A software developer built a custom mobile application for an Indian tech startup. The parties negotiated the entire contract over WhatsApp without signing physical paper documents. After source code delivery, the startup refused payment of four lakh fifty thousand.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">The Evidence Strategy</h5>
                          <ul className="space-y-2">
                            <li className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-[#10B981] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              Exported eight months of continuous, unbroken WhatsApp chat history records and attachments.
                            </li>
                            <li className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-[#10B981] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              Captured timestamped screenshots showing the startup founder approving final application deliverables.
                            </li>
                            <li className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-[#10B981] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              Drafted a complete Section 65B compliance affidavit certifying the chat export printout.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">The Legal Resolution</h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            The developer initiated arbitration proceedings to claim the unpaid project invoice balance. The startup argued that the lack of signed contracts barred any monetary recovery. However, the arbitrator accepted certified WhatsApp records as a binding electronic agreement. Faced with undeniable digital evidence, the company paid all dues within thirty days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    This dispute shows how digital agility overcomes the absence of traditional paper agreements. Indian legal forums penalize parties that exploit missing paperwork to evade legitimate debts. Following statutory procedures for electronic evidence empowers creditors to secure full payment recoveries.
                  </p>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32">
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
                          <span className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Author Aside placed on the right as per specifications */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm relative">
                  <Image 
                    src="/blank-profile.svg" 
                    alt="Vikram Sharma Author Image" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg">Vikram Sharma</h3>
                <p className="text-xs text-[#DC2626] font-bold uppercase tracking-wider mb-3">Legal Strategist</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vikram Sharma specializes in digital dispute resolution and modern Indian money recovery strategies. He empowers businesses and professionals to resolve complex financial disputes through statutory procedures.
                </p>
                <time dateTime="2026-06-29" className="block mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-semibold border-t border-slate-100 pt-3">
                  Updated: June 29, 2026
                </time>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}
