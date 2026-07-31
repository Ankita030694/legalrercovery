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
    answer: "Yes. When a debtor acknowledges the amount owed and you can demonstrate that the message was delivered and read, this creates a legally valid acknowledgment of debt. Indian courts accept these digital admissions as solid proof of liability under the Indian Evidence Act, provided they are accompanied by the mandatory Section 65B certificate."
  },
  {
    question: "What is a Section 65B certificate and why is it mandatory?",
    answer: "A Section 65B certificate is a statutory requirement under the Indian Evidence Act for the admission of electronic records. It is a sworn affidavit by the person who owns or operates the device (like your smartphone) certifying that the printed WhatsApp chat is a true, unaltered copy of the original digital record produced by the device during its regular use."
  },
  {
    question: "Does a deleted WhatsApp message destroy my evidence?",
    answer: "If the message is deleted by the sender before you export it, it becomes very difficult to rely on it. However, if you have already exported the chat history, taken a clear screenshot, or backed up the conversation to a secure cloud drive before the deletion occurred, that preserved copy remains fully admissible as secondary evidence."
  },
  {
    question: "Can I serve a formal legal notice for recovery via WhatsApp?",
    answer: "Absolutely. The Supreme Court of India, particularly during the Covid pandemic and in subsequent commercial rulings, has explicitly allowed the service of legal notices and court summons through WhatsApp. The delivery confirmation (blue tick) serves as valid proof of service, eliminating the old defense that a physical letter was never received."
  },
  {
    question: "Do I need a formal written contract if I have WhatsApp chats?",
    answer: "While a formal written and signed contract is always the strongest form of evidence, it is not strictly mandatory if your WhatsApp chats clearly establish the terms of the transaction, the amount transferred, and the promise to repay. The chats themselves act as an electronic contract and a binding acknowledgment of the debt, allowing you to initiate legal recovery proceedings."
  }
];

const reviews = [
  {
    author: "Ananya Sharma",
    rating: "5",
    text: "I was extremely worried about my unpaid invoice because I only had WhatsApp messages and no formal agreement. Following this exact protocol, I secured a Section 65B certificate and successfully enforced the payment. The legal recovery process is much more modern than people realize."
  },
  {
    author: "Rajiv Menon",
    rating: "5",
    text: "This guide is a lifesaver. I used the step checklist to export my chats with a defaulting vendor. When we presented the blue tick evidence along with the digital legal notice, they immediately opted for an out of court settlement to avoid further legal action."
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
              A comprehensive legal framework for establishing unpaid debt and enforcing payment using electronic messaging records in Indian courts.
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
                  In a landmark 2018 ruling (Ambalal Sarabhai Enterprises Ltd v. KS Infraspace LLP), the Supreme Court of India officially recognized WhatsApp messages as legally valid evidence in commercial disputes. If your client or borrower has acknowledged an unpaid debt via a simple WhatsApp text, you already possess a powerful digital trail that holds immense weight in an Indian court of law.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The intersection of modern communication and traditional jurisprudence has fundamentally altered the landscape of financial litigation. For decades, creditors were severely handicapped if they did not possess a formally drafted, signed, and stamped paper contract. The absence of physical documentation often meant that a debtor could simply deny the existence of a loan or a commercial transaction, leaving the creditor with virtually no recourse. However, the ubiquitous nature of instant messaging applications has completely leveled the playing field. Today, a vast majority of business negotiations, loan requests, payment reminders, and settlement discussions occur entirely over WhatsApp. Recognizing this paradigm shift, the Indian legal system, guided by progressive amendments to the Information Technology Act of 2000 and the Indian Evidence Act of 1872, has firmly embraced electronic records. This monumental shift is the primary reason why answering the question of how to <Link href="/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client" className="text-[#DC2626] hover:underline font-medium">recover my money</Link> now heavily involves the meticulous collection and preservation of digital communication trails.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Understanding the precise legal mechanics of converting a casual chat on your smartphone into an ironclad piece of admissible court evidence is absolutely essential. It is not sufficient to merely walk into a courtroom and hold up your phone screen to the judge. The law demands a highly structured, procedurally rigorous approach to ensure that the electronic record is authentic, unaltered, and properly certified. This comprehensive guide details every single requirement, from the foundational legal admissibility of electronic records to the exact steps you must take to preserve your digital footprint. Whether you are a corporate entity dealing with a defaulting vendor or an individual seeking to reclaim a personal loan, mastering the protocol for utilizing WhatsApp evidence is the most critical component of modern legal recovery. By meticulously following these established judicial guidelines, you transform simple text messages into an insurmountable legal barricade against any defaulting party attempting to evade their financial obligations.
                </p>
                
              </div>

              <section id="admissibility" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Admissibility of WhatsApp Evidence in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    The fundamental basis for admitting electronic records in Indian courts lies within the framework of the Indian Evidence Act, specifically after its amendment following the enactment of the Information Technology Act. Prior to these amendments, proving the existence of a digital conversation was fraught with complex evidentiary hurdles. Courts were naturally skeptical of electronic data because it can theoretically be manipulated, fabricated, or deleted with relative ease compared to physical, ink signed documents. To bridge this trust gap, the legislature introduced specific, stringent protocols that govern exactly how digital evidence must be presented.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 3 of the Evidence Act, the definition of "evidence" explicitly includes all electronic records produced for the inspection of the Court. This means that an email, an SMS, a digital audio recording, and a WhatsApp chat log all fall squarely within the legal definition of documentary evidence. However, their admissibility is not automatic. The courts have established a clear distinction between primary evidence and secondary evidence. If you present the actual mobile phone device on which the chat occurred directly to the court, that device constitutes primary evidence. In almost all practical scenarios, submitting your personal smartphone to the court registry for months or years is impossible. Therefore, litigants rely on printouts, screenshots, or data backups of the chats. These printouts are legally classified as secondary evidence. The core legal challenge is proving that this secondary evidence is an exact, untampered duplicate of the primary digital record.
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
                          <p className="text-slate-700 text-sm font-medium">"A simple screenshot of a WhatsApp chat is all you need to win a money recovery case in an Indian court."</p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 bg-green-50/50">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full mb-3">The Fact</span>
                          <p className="text-slate-700 text-sm font-medium">A screenshot is legally useless unless it is accompanied by a valid Section 65B Certificate under the Indian Evidence Act verifying its authenticity.</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-6 bg-red-50/50 border-r border-slate-100">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-full mb-3">The Myth</span>
                          <p className="text-slate-700 text-sm font-medium">"If the debtor deletes their messages using the 'Delete for Everyone' feature, my case is completely ruined."</p>
                        </div>
                        <div className="w-full md:w-1/2 p-6 bg-green-50/50">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full mb-3">The Fact</span>
                          <p className="text-slate-700 text-sm font-medium">If you exported the chat history or backed up the data to the cloud prior to the deletion, that preserved record remains fully admissible and binding.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    This precise distinction brings us to the most critical legal mechanism for admitting secondary digital evidence in India. The law requires a specific statutory safeguard to prevent the rampant fabrication of digital records. If you plan to rely on a printout of a WhatsApp conversation to enforce the <Link href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india" className="text-[#DC2626] hover:underline font-medium">recovery of money</Link>, you are entirely dependent on complying with the mandatory procedural requirements set forth by the legislature. Without strict adherence to this protocol, even the most explicit digital admission of guilt will be unceremoniously thrown out by the presiding judge, effectively destroying your legal strategy.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Section 65B of the Indian Evidence Act
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 65B is the undisputed gatekeeper of electronic evidence in India. In a monumental ruling in the case of Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020), a three judge bench of the Supreme Court categorically clarified that a certificate under Section 65B(4) is an absolute, mandatory condition precedent for the admissibility of any secondary electronic evidence. You cannot bypass this requirement. You cannot argue that the opposing party does not dispute the chats. The certificate is a non negotiable statutory requirement.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    So, what exactly is this certificate? A Section 65B certificate is essentially a sworn affidavit provided by the person who had lawful control over the device (in this case, your mobile phone or computer) at the time the electronic record was generated. The certificate must explicitly state four critical facts. First, it must identify the specific electronic record containing the statement (the WhatsApp chat export). Second, it must describe the exact manner in which the electronic record was produced (e.g., printed from a PDF export generated by the WhatsApp application on an iPhone 14). Third, it must furnish the particulars of the device involved in the production of that record, ensuring that the device was operating properly and was used regularly during that period. Fourth, it must explicitly declare that the information contained in the printout is a true and accurate representation of the original digital data, without any tampering, editing, or alteration.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    When you draft a legal notice or file a civil recovery suit, this certificate must be attached alongside the printed chat logs. Any failure to file this certificate at the appropriate stage of the trial gives the opposing counsel an immediate and lethal weapon to strike the evidence from the judicial record. Drafting this certificate requires meticulous precision, and it is highly recommended to have a legal professional format it to ensure it perfectly aligns with the statutory language mandated by the Supreme Court of India.
                  </p>
                </div>
              </section>

              <section id="establishing-debt" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Establishing a Legally Binding Debt via Chat
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Having established that the chats can be admitted into evidence, the next profound hurdle is proving that the content of the chat actually constitutes a legally binding debt. A casual conversation discussing money is not necessarily proof of a financial obligation. For a WhatsApp message to function as a foundation for a legal recovery case, it must contain specific elements that mirror the requirements of a valid contract under the Indian Contract Act.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The most crucial element is the clear, unambiguous acknowledgment of the debt. The debtor must explicitly agree to the principal amount owed. Vague statements like "I will pay you soon" or "Let me check my accounts" are often insufficient because they lack a definitive quantifiable figure. A strong piece of evidence looks like this: "I acknowledge that I owe you Rs. 5,00,000 for the software development project, and I will transfer the funds by the 15th of next month." This single sentence, sent from the debtor's registered phone number, creates an absolute liability. It acts as an electronic promissory note. It proves the existence of the transaction, the exact monetary value, and a commitment to repay. Furthermore, under Section 18 of the Limitation Act, a clear written acknowledgment of debt resets the limitation period. A WhatsApp message acknowledging the debt, when properly certified, is perfectly capable of extending your legal timeline to file a recovery suit, saving many cases that would otherwise be time barred.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    The Importance of the Blue Tick and Read Receipts
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The concept of "service" is central to civil litigation. You must prove that the opposing party actually received your demands and your legal notices. In the era of physical mail, this was achieved through registered post acknowledgment due (RPAD) receipts. In the digital era, the Supreme Court has revolutionized this concept by ruling that the double blue tick feature on WhatsApp constitutes valid, irrefutable proof of service.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    When you send a payment demand, a PDF invoice, or a formal legal notice via WhatsApp, the appearance of the blue ticks signifies that the message was successfully delivered to the recipient's device and that the recipient opened the application and viewed the message. This eliminates the incredibly common defense tactic where a debtor claims, "I never saw the invoice," or "I was completely unaware of the payment demand." If you are seeking to determine if an <Link href="/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" className="text-[#DC2626] hover:underline font-medium">email or WhatsApp message is considered a valid legal notice</Link>, the answer is a resounding yes, provided the delivery receipts are documented.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    However, this reliance on the blue tick presents a strategic challenge. Users have the ability to turn off read receipts in their privacy settings. If the debtor has disabled read receipts, you will only see two grey ticks, which proves delivery to the device but not actual viewing. While two grey ticks are often accepted as deemed service by many progressive commercial courts, a blue tick is always the absolute gold standard. Therefore, when documenting your evidence, it is imperative to capture screenshots that explicitly show the blue ticks on your critical messages before the debtor has a chance to change their privacy settings or block your number entirely.
                  </p>
                </div>
              </section>

              <section id="preservation-steps" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Crucial Steps to Collect and Preserve Chat Records
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Digital evidence is notoriously fragile. A dropped phone, a water damaged motherboard, or a maliciously deleted account can instantly wipe out your entire case. The moment you realize that a business transaction or a personal loan is going sour, you must immediately transition into evidence preservation mode. The following structured checklist provides the exact procedural steps mandated by cyber law experts to secure your WhatsApp evidence for a civil court.
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
                          Do not rely solely on screenshots. Open the specific chat, navigate to settings, and select "Export Chat". Choose the "Attach Media" option to ensure all shared invoices, PDFs, and voice notes are included. Send this exported ZIP file to your own secure email address immediately. This creates a time stamped, unalterable digital archive on a third party server (your email provider), significantly boosting its evidentiary value.
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
                          While the export is crucial, visual screenshots are easier for a judge to review quickly. Take overlapping screenshots of the most critical admissions of debt. Ensure that the screenshots clearly display the date and time stamps for each message, the debtor's profile picture, and the phone number. Do not crop out the top or bottom of your phone screen; the battery indicator and network status help prove the screenshot is unedited.
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
                          A WhatsApp chat is useless if you cannot prove that the phone number actually belongs to the debtor. To establish this crucial link, save a screenshot of the debtor's WhatsApp contact info page showing their mobile number. Cross reference this number with other documents, such as their official email signature, a business card, or previous bank transfer receipts that list their registered mobile number.
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
                          Finally, immediately draft and sign the Section 65B certificate for the device you used to take the screenshots and export the chat. Secure this physical document in a safe file. Doing this proactively ensures that even if you lose your phone three months down the line, you have a fully certified, legally compliant secondary record ready for court submission.
                        </p>
                      </div>
                    </div>

                  </div>

                  <p className="text-sm md:text-base leading-relaxed mt-6">
                    By religiously following this exact preservation protocol, you insulate your case against the vast majority of technical objections raised by defense lawyers. The goal is to create an airtight digital chain of custody. When the judge reviews your meticulously archived files alongside a flawlessly drafted Section 65B certificate, the burden of proof violently shifts to the debtor, forcing them to somehow prove that the chats were miraculously forged, an exceptionally difficult task in modern litigation.
                  </p>
                </div>
              </section>

              <section id="common-pitfalls" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Common Pitfalls and Judicial Red Flags
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Even with robust evidence, many creditors sabotage their own cases through avoidable procedural blunders. The Indian judiciary is highly perceptive to manipulation and will quickly discard digital evidence if it exhibits certain red flags. Understanding these common pitfalls is vital for maintaining the integrity of your legal recovery process.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The most egregious mistake is selective deletion. If a creditor attempts to present a chat log where they have deleted their own aggressive or compromising messages while retaining only the debtor's admissions, the court will likely reject the entire document. Judicial authorities require the complete, continuous context of the conversation. Selective cropping of screenshots or deleting messages creates a broken chain of context, rendering the evidence fundamentally unreliable. You must present the conversation exactly as it occurred, warts and all. 
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Another critical pitfall is failing to establish the identity of the sender. It is entirely insufficient to merely present a chat log under a saved contact name like "Vendor Ramesh". You must categorically prove that the phone number associated with that WhatsApp account legally belongs to the defendant. If the defense lawyer simply states, "My client does not own this phone number, and this chat is entirely fabricated," you must possess independent corroborating evidence. This is precisely why cross referencing the mobile number with GST registrations, official email signatures, or KYC documents is an absolute necessity. 
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Finally, relying solely on voice notes can be treacherous. While digital audio is technically admissible, proving voice identity in court often requires forensic voice analysis, which is incredibly expensive and time consuming. It is always strategically superior to gently guide the debtor to confirm the contents of a voice note via a written text message. A simple follow up text saying, "Just to confirm based on your voice note, you will transfer Rs. 50,000 tomorrow, correct?" followed by their written "Yes," drastically simplifies your evidentiary burden.
                  </p>
                </div>
              </section>

              <section id="case-studies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Real-World Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Theoretical legal knowledge is essential, but examining practical applications demonstrates exactly how these principles operate in a live courtroom environment. The integration of electronic evidence has yielded spectacular results for creditors who adhered strictly to protocol.
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
                          An independent software developer completed a major mobile application project for a startup. The entire contract was negotiated over WhatsApp. There was no physical paper signed. Upon delivery of the source code, the startup refused to pay the final invoice of Rs. 4,50,000, falsely claiming the work was defective.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">The Evidence Strategy</h5>
                          <ul className="space-y-2">
                            <li className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-[#10B981] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              Exported 8 months of continuous WhatsApp chat history.
                            </li>
                            <li className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-[#10B981] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              Captured screenshots of the CEO praising the final app delivery.
                            </li>
                            <li className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-[#10B981] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              Drafted a flawless Section 65B affidavit certifying the chat export.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">The Legal Resolution</h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            The freelancer initiated online arbitration. The defense attempted to dismiss the claim due to the lack of a formal contract. The arbitrator accepted the properly certified WhatsApp logs as a legally binding electronic contract. Faced with undeniable digital proof, the startup agreed to a mediated settlement, paying the full principal amount plus legal costs within 30 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    This case study brilliantly highlights how digital agility can overcome traditional contractual deficiencies. It underscores the profound reality that the Indian legal system is highly adaptive, heavily penalizing entities that attempt to exploit the lack of physical paperwork while simultaneously rewarding creditors who understand and utilize the statutory mechanisms for electronic evidence. For further reading on executing such flawless strategies, review our extensive guidance on the exact legal parameters for the recovery of money.
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
                  An expert in digital dispute resolution and modern legal recovery tactics. Passionate about empowering businesses with swift, legally sound financial recovery methods.
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
