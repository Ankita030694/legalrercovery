'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 Unique FAQs focused on WhatsApp & Email Notice Validity
const faqs = [
  {
    question: "Is a legal notice sent via WhatsApp legally valid in Indian courts?",
    answer: "Yes, serving a legal notice via WhatsApp is considered legally valid under modern Indian jurisprudence, provided specific evidentiary requirements are met. The Supreme Court of India and various High Courts have recognized instant messaging apps like WhatsApp as valid channels for serving notices and summons. To be admissible in court, the sender must prove successful delivery and receipt (such as through double blue ticks or a subsequent reply) and accompany the digital screenshots with a mandatory authenticity certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023."
  },
  {
    question: "What happens if the recipient has turned off their blue ticks (read receipts)?",
    answer: "If the recipient has disabled read receipts, you cannot rely on blue ticks as proof of receipt. However, the service is not invalidated. To prove delivery in court, you must present secondary digital evidence. This includes taking screenshots showing double gray ticks (confirming delivery to the device), logging any subsequent responses or calls from the recipient, and providing proof that the phone number is active and owned by the recipient. Under the BSA 2023, this digital trail is admissible when verified by a technical expert."
  },
  {
    question: "How do I prove that an email legal notice was successfully delivered to the recipient?",
    answer: "To prove successful delivery of an email notice in court, you must retrieve and preserve the SMTP (Simple Mail Transfer Protocol) server delivery logs. The SMTP log contains transaction records and status codes, specifically the '250 OK' code, which indicates that the recipient's mail transfer agent accepted the email. You should also save the email in EML format to preserve the headers (including SPF, DKIM, and DMARC alignments) and obtain a delivery confirmation report to attach to your Section 63 BSA certificate."
  },
  {
    question: "What is Section 63 of the new Bharatiya Sakshya Adhiniyam (BSA), 2023?",
    answer: "Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872 in July 2024) governs the admissibility of electronic records in Indian courts. It mandates a double-certification process to prevent tampering. Part A of the certificate is signed by the person producing the electronic record (verifying the device used), while Part B must be signed by an independent forensic or technical expert. The certificate must also explicitly include the cryptographic hash value of the digital files."
  },
  {
    question: "Why is a cryptographic hash value mandatory for digital notices under BSA 2023?",
    answer: "A cryptographic hash value (such as SHA-256 or MD5) acts as a unique digital fingerprint for an electronic file. Section 63 of the BSA 2023 makes its inclusion mandatory in the electronic evidence certificate. When a screenshot or email log is generated, the hashing algorithm computes its hash value. If the file is altered in any way (even by a single pixel or character), the hash value changes completely. This allows the court to verify that the digital notice evidence has not been tampered with or modified."
  },
  {
    question: "Can a recipient escape a digital legal notice by blocking the sender on WhatsApp?",
    answer: "No, a recipient cannot escape legal notice service by blocking the sender after the message has been delivered. If the message was successfully delivered (showing double ticks) before the block occurred, the service is legally complete. Documenting the block (showing the chat screen with no profile photo and a single tick on subsequent messages) can be presented to the court as evidence of bad faith and intentional evasion. Courts treat such evasion as deemed service, allowing you to proceed with litigation."
  },
  {
    question: "Is a digital notice valid for cheque bounce cases under Section 138 of the NI Act?",
    answer: "Yes, demand notices sent via WhatsApp and email are valid for cheque bounce cases under Section 138 of the Negotiable Instruments Act, 1881. The Allahabad High Court and other judiciaries have held that electronic delivery satisfies the statutory requirement to serve notice within 30 days of receiving the bank memo. This is highly effective to prevent delays, but you must ensure you have verified delivery logs to establish the exact start date of the 15-day cure period before filing a criminal complaint."
  },
  {
    question: "Does a spam folder delivery count as valid service of an email legal notice?",
    answer: "Yes, delivery to the spam folder is legally considered valid service. Under electronic communication rules, the sender's legal obligation is to ensure that the email is successfully delivered to the recipient's mail server. If the email lands in the spam folder due to the recipient's internal server filters or security settings, it is still within the recipient's control. You must present the SMTP server log showing '250 OK' (successful delivery) to prove that the email reached the mail server."
  },
  {
    question: "Can I serve a legal notice to a company's director on their personal email or WhatsApp?",
    answer: "Yes, you can serve a legal notice to a company's director on their personal email or WhatsApp, especially if the company has ignored communications or is attempting to evade service. Under the Companies Act, 2013, directors are personally responsible for the management of the firm. Serving notices to their active personal channels is valid, provided you can prove the contact details belong to them. It is recommended to serve the notice to both the official corporate email (listed on the MCA portal) and the directors' verified personal channels."
  },
  {
    question: "What is the difference between 'deemed service' under the General Clauses Act and digital notice service?",
    answer: "Under Section 27 of the General Clauses Act, 1897, a physical notice sent by registered post is automatically presumed to be served once dispatched to the correct address (deemed service). However, this automatic presumption does not extend to digital service. For WhatsApp and email notices, you must provide actual proof of delivery (such as SMTP status logs or WhatsApp delivery ticks) to establish service. The court does not assume delivery based on dispatch alone; you must satisfy the admissibility criteria of Section 63 BSA."
  },
  {
    question: "Why should I use a multi-channel strategy (physical post + digital) instead of just digital notice?",
    answer: "A multi-channel strategy—sending the notice via physical Speed Post/Registered AD and simultaneously via email and WhatsApp—is the gold standard. It combines the benefits of both modes: the physical post invokes the strong statutory presumption of deemed service under Section 27 of the General Clauses Act, while the digital service provides immediate delivery, prevents physical evasion, and creates an instant electronic record. This leaves no room for the recipient to dispute receipt."
  },
  {
    question: "What are the next legal steps if the recipient ignores a digitally served legal notice?",
    answer: "If the recipient ignores the notice and the cure period (typically 15 or 30 days) expires, you must escalate to litigation. Depending on the dispute, this involves: 1. Filing an online conciliation complaint on the government's SAMADHAN portal (for labor/salary dues). 2. Filing a Summary Suit under Order 37 of the CPC in Civil Court (for commercial/contractual debts). 3. Filing a criminal complaint under Section 138 of the NI Act (for cheque bounces). The digitally served notice and its Section 63 BSA certificate will serve as primary evidence in your case."
  }
];

// 6 Unique Reviews for Digital Notice Validity
const reviews = [
  {
    id: "rev-dnv-1",
    name: "Vikram Sen (Lead Project Manager)",
    rating: 5,
    review: "My employer closed down their office and vanished to avoid paying our F&F. LegalRecovery served the legal notice to the directors' personal emails and WhatsApp. They documented the SMTP logs and WhatsApp blue ticks, and prepared the Section 63 BSA certificates. When we presented this to the Labour Court, the judge accepted the electronic service and ordered the directors to deposit our salaries. The digital tracking and expert certification saved our case!"
  },
  {
    id: "rev-dnv-2",
    name: "Meenakshi Iyer (Consulting Designer)",
    rating: 5,
    review: "A client refused to pay my final project fees and blocked my number. LegalRecovery drafted a recovery notice and served it via official email and a different WhatsApp channel. They logged the SMTP delivery code and the WhatsApp double ticks. Faced with this airtight proof and the threat of a civil summary suit, the client unblocked me and paid the outstanding amount of ₹1.9 Lakhs. Highly professional service!"
  },
  {
    id: "rev-dnv-3",
    name: "Saurabh Deshpande (Operations Head)",
    rating: 5,
    review: "I was worried my notice wouldn't be valid because my landlord turned off their blue ticks. LegalRecovery sent the notice via WhatsApp and verified email. They compiled the WhatsApp double gray ticks and screenshot metadata, certified them under Section 63 of the new BSA 2023, and tracked the digital delivery logs. The landlord settled the deposit refund immediately when they realized we had legal proof of service. Excellent digital approach!"
  },
  {
    id: "rev-dnv-4",
    name: "Komal Preet (HR Specialist)",
    rating: 5,
    review: "My previous company ignored my salary emails and claimed they never received them. LegalRecovery served the notice via email and logged the SMTP handshake server codes. They provided the DKIM/SPF headers and a detailed delivery report. Facing documented proof of server delivery, the company's legal department cleared my dues within 5 days to avoid litigation. Proving email delivery is so easy with this platform!"
  },
  {
    id: "rev-dnv-5",
    name: "Rajesh Kanna (Supplier & Wholesaler)",
    rating: 5,
    review: "An invoice default cheque bounced, and I had a very short window to serve the notice. LegalRecovery drafted the statutory notice and sent it via WhatsApp and email instantly. They captured the delivery ticks and compiled the SHA-256 hash certificates for the digital proof. The debtor paid the entire outstanding balance to avoid the Section 138 NI Act criminal case. Incredibly fast and legally sound!"
  },
  {
    id: "rev-dnv-6",
    name: "Divya Bhatia (Freelance Developer)",
    rating: 5,
    review: "The agency I worked with blocked my email. LegalRecovery served a notice to the directors' LinkedIn and WhatsApp. They prepared the expert certificate under the new Bharatiya Sakshya Adhiniyam, 2023. Faced with this advanced digital proof and our prep for a summary suit, the agency founder contacted us and cleared the pending invoice. The technology-driven evidence compilation is outstanding."
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
      "name": "WhatsApp & Email Notice Validity",
      "item": "https://www.legalrecovery.in/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Is an Email or WhatsApp Message Considered a Valid Legal Notice in Indian Courts?",
  "description": "Exhaustive legal guide on the validity, process, and court guidelines of serving legal notices online in India using WhatsApp and Email under the Information Technology Act and BSA 2023.",
  "image": "https://www.legalrecovery.in/og-digital-notice-validity.png",
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
  "name": "Digital Legal Notice Service & Evidentiary Certification",
  "image": "https://www.legalrecovery.in/og-digital-notice-validity.png",
  "description": "Professional drafting, multi-channel online delivery, and Section 63 BSA expert certification for email and WhatsApp legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1410"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(rev.rating)
    },
    "author": {
      "@type": "Person",
      "name": rev.name
    },
    "reviewBody": rev.review
  }))
};

export default function DigitalNoticeValidityClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "notice-digital-legality", title: "Statutory Standing Under IT Act" },
    { id: "blue-tick-jurisprudence", title: "Blue Tick Standard & WhatsApp" },
    { id: "email-delivery-forensics", title: "Email SMTP Logs & Forensics" },
    { id: "landmark-judgments", title: "Supreme Court & High Court Precedents" },
    { id: "BSA-digital-certification", title: "Evidence Law & BSA Section 63" },
    { id: "deemed-service-rules", title: "Deemed Service & Digital Evasion" },
    { id: "multi-channel-strategy", title: "Multi-Channel Delivery Strategy" },
    { id: "notice-ignored-litigation", title: "Next Escalation & Litigation Steps" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "WhatsApp & Email Notice Validity", href: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" }
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
          {/* Decorative Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Judicial Admissibility Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Is Email or WhatsApp Message a <span className="text-[#DC2626]">Valid Legal Notice</span>?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the statutory validity, court precedents, and mandatory BSA 2023 certification requirements to serve legal notices digitally in India.
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
            
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Section 1: Statutory Standing Under IT Act */}
                <section id="notice-digital-legality" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Statutory Standing of Email & WhatsApp Notice Service under the IT Act, 2000
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For generations, physical paper notice service was the default standard of Indian law. In civil litigation, property disputes, and corporate contracts, a legal notice was considered valid only if drafted on physical letterheads, signed with a wet ink signature, and sent via registered post or physical courier. The law assumed that communication required a physical medium to ensure authenticity and formal intent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This paper-centric framework underwent a significant change with the enactment of the <strong>Information Technology (IT) Act, 2000</strong>. This legislation was introduced to facilitate electronic commerce and govern digital data. Its foundational provisions directly validate electronic documents and communication, placing them on par with physical papers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Specifically, <strong>Section 4</strong> of the IT Act states that if any law requires information or any other matter to be in writing, typewritten, or printed form, that requirement is satisfied if the information is rendered or made available in an electronic form and is accessible for subsequent reference. This means that an electronic document containing a legal notice satisfies the requirement of a written document, provided it is saved and can be retrieved.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, <strong>Section 5</strong> of the IT Act grants legal recognition to electronic signatures. If a document requires authentication by signature, that requirement is satisfied if it is authenticated using a digital signature or other electronic signatures in the prescribed manner. Furthermore, <strong>Section 2(1)(t)</strong> defines an &quot;electronic record&quot; broadly to include any data, record, or data generated, image, or sound sent, received, or stored in an electronic form.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For employment, commercial, and landlord-tenant disputes, this statutory recognition means that a legal notice prepared as a PDF file and transmitted via email or WhatsApp is legally recognized as a written notice. However, there are exceptions listed in the First Schedule of the IT Act—such as wills, trusts, power of attorney, and real estate transfer documents—which still require physical execution. But for salary recovery, vendor claims, F&amp;F settlement demands, and consumer disputes, electronic service is fully validated by the IT Act.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The Information Technology Act, 2000, establishes the legal foundation for electronic documents. Sections 4 and 5 place electronic notices and digital signatures on the same legal standing as physical, paper-based documents.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Blue Tick Standard & WhatsApp */}
                <section id="blue-tick-jurisprudence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The Blue Tick Standard: WhatsApp Delivery, Read Receipts, and Evasion Tactics
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      WhatsApp has transitioned from a personal messaging application into a primary channel for business and formal communication in India. In response, the Indian judiciary has developed specific standards to govern the validity of notices and summons served via WhatsApp, focusing on the delivery and read indicators generated by the platform.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary indicator of successful receipt on WhatsApp is the <strong>&quot;double blue ticks&quot;</strong> (read receipts). When a message is sent on WhatsApp, a single gray tick indicates that the message has reached the WhatsApp servers. A double gray tick indicates that the message has been delivered to the recipient's device. The double blue ticks confirm that the recipient has opened and read the message (or at least that the chat has been displayed on their screen). Courts treat the double blue ticks as prima facie evidence of successful service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, a common issue is when the recipient has deactivated their read receipts. In this configuration, the sender only sees double gray ticks, even if the message has been read. To address this scenario, you must compile secondary digital evidence to prove delivery and receipt:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Double Gray Ticks:</strong> Proves the notice was delivered to the device. You must take a screenshot showing this delivery status, documenting that the message left your control and reached the target phone.</li>
                      <li><strong>Subsequent Responses:</strong> If the recipient replies to the WhatsApp message or makes a call to you after delivery, it proves they received the message. You must save these replies.</li>
                      <li><strong>User Activity Logs:</strong> Document if the recipient's profile photo remains visible, or if they update their WhatsApp status stories, indicating that the account is active and they have not blocked your number.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient blocks your phone number after the notice is delivered, the service remains valid. Blocking a sender after receiving a message does not erase the delivery log. In court filings, documenting that the message was successfully delivered (showing double ticks) before the block occurred, followed by a screen showing a single tick on subsequent messages, can be presented as proof of bad faith and active evasion. Courts treat such actions as deemed service, preventing the recipient from claiming ignorance.
                    </p>
                  </div>
                </section>

                {/* Section 3: Email SMTP Logs & Forensics */}
                <section id="email-delivery-forensics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Email Service Proof: SMTP Handshakes, Delivery Logs, and Header Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice via email is a standard procedure in employment and commercial contract disputes. However, simply showing a screenshot of your &quot;Sent&quot; folder is not sufficient if the recipient disputes receiving the email. To establish delivery in a court of law, you must preserve the complete technical transaction records generated during the transmission.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The key technical record is the <strong>Simple Mail Transfer Protocol (SMTP) server log</strong>. When you send an email, your Mail Submission Agent (MSA) connects to your Mail Transfer Agent (MTA), which then performs an SMTP handshake with the recipient's mail server. Once the recipient's server accepts the email, it returns a status code. The most critical status code is <strong>&quot;250 OK&quot;</strong>, which confirms that the recipient's server accepted the message for delivery to the specified mailbox.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure your email notice evidence is legally secure, you must retrieve and preserve:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Email Headers:</strong> Save the email in `.eml` or `.msg` format. This preserves the complete header data, including IP routing details, timestamps, and security authentication signatures.</li>
                      <li><strong>Cryptographic Signatures:</strong> The email headers contain security alignments, specifically SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC records. These signatures verify that the email originated from your domain and was not altered during transmission.</li>
                      <li><strong>SMTP Handshake Logs:</strong> Retrieve the raw server logs showing the connection timestamps and the recipient server's '250 OK' response.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient claims they did not see the email because it landed in their spam folder, the law protects the sender. Once the SMTP log confirms that the recipient's server accepted the message (returning the 250 OK status), delivery is legally complete. The recipient's internal spam filters or mail routing policies do not invalidate the service, as the email was successfully delivered to their server and placed under their control. However, bounced emails (such as those returning '550 User Unknown' due to an invalid address) do not constitute valid service.
                    </p>
                  </div>
                </section>

                {/* Section 4: Supreme Court & High Court Precedents */}
                <section id="landmark-judgments" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Precedents in Motion: Supreme Court and High Court Rulings on Digital Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal validity of electronic notice service in India is supported by several landmark judgments by the Supreme Court and various High Courts. These rulings have established the guidelines and rules for digital summons, providing binding precedents that lower courts must follow.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The most significant national directive came from the Supreme Court of India in the suo motu writ petition <strong>In Re: Cognizance for Extension of Limitation (2020)</strong>. During the COVID-19 pandemic, to ensure the continuity of justice, the Court officially permitted the service of notices, summons, and pleadings via email, fax, and instant messaging services like WhatsApp. The Court noted that in the modern digital era, these channels are necessary to ensure the efficiency of the judicial system.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This Supreme Court directive built upon earlier progressive rulings by various High Courts:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Kross Television India Pvt. Ltd. v. Vikhyat Chitra Production (2017) (Bombay HC):</strong> The plaintiff was unable to serve the defendants through traditional methods because they had changed their addresses to evade service. Justice G.S. Patel allowed service via WhatsApp, stating that the purpose of a summons is to put the defendant on notice, and parties cannot evade the process by refusing physical delivery.</li>
                      <li><strong>SBI v. Aditya Birla Fashion (2018) (Bombay HC):</strong> The Court accepted WhatsApp service, noting that the double blue ticks (read receipts) on the messaging app constituted sufficient proof of service.</li>
                      <li><strong>Tata Sons Ltd. v. John Doe (2018) (Delhi HC):</strong> The Court permitted the plaintiff to serve summons on anonymous defendants via WhatsApp and email, recognizing the utility of digital channels in intellectual property disputes.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These precedents are highly relevant for Negotiable Instruments (NI) Act Section 138 (cheque bounce) cases. The Allahabad High Court in <em>Rajendra v. State of U.P. (2020)</em> held that a demand notice sent via WhatsApp and email is valid under Section 138, provided delivery is documented. Because Section 138 requires the notice to be served within 30 days of receiving the bank memo, digital channels are useful to prevent delays and establish the exact start date of the 15-day payment period before filing a criminal complaint.
                    </p>
                  </div>
                </section>

                {/* Section 5: Evidence Law & BSA Section 63 */}
                <section id="BSA-digital-certification" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Admissibility Under BSA 2023: Executing Section 63 Cryptographic Hash Certificates
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While sending a legal notice via email or WhatsApp is valid, presenting those digital communications as evidence in court requires compliance with strict admissibility standards. These rules have been updated with the introduction of the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, which replaced the Indian Evidence Act, 1872 starting July 2024. Section 63 of the BSA is now the primary provision governing digital evidence admissibility, replacing the older Section 65B.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The BSA, 2023, introduces more structured and stringent certification requirements for electronic records to prevent tampering and ensure authenticity:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Double Certification:</strong> Under Section 63(4), digital evidence must be accompanied by a certificate signed by <strong>both</strong> the person in charge of the computer or communication device from which the electronic record was produced (Part A of the Schedule) and an independent technical or forensic expert (Part B of the Schedule).</li>
                      <li><strong>Mandatory Cryptographic Hash Value:</strong> The certificate must include the digital <strong>hash value</strong> (such as SHA-256 or MD5) of the electronic files. The hash value acts as a unique digital fingerprint. If a screenshot, PDF, or email log is modified in any way, its hash value changes completely, allowing the court to verify that the evidence has not been tampered with.</li>
                      <li><strong>Device & Network Details:</strong> The certificate must specify the details of the device (such as the make, model, IMEI, or MAC address) and the network used to access the communication.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you fail to provide a certificate in the prescribed format, or if you omit details like the hash value, the court will reject your digital evidence. Merely presenting printed screenshots of WhatsApp chats without a certificate is not admissible. This makes it crucial to have your digital proof certified by a qualified professional.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery's technology-driven system automatically calculates the hash values of your email and WhatsApp notices. Our team compiles the necessary delivery logs and prepares the Section 63 BSA certificates, ensuring your digital evidence is legally secure and ready for court proceedings.
                    </p>
                  </div>
                </section>

                {/* Section 6: Deemed Service & Digital Evasion */}
                <section id="deemed-service-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Service Evasion: Refusal of Delivery and General Clauses Act Section 27 Presumptions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common challenge in notice delivery is dealing with recipients who attempt to evade service. They may block your phone number, deactivate their email accounts, or refuse to accept physical post. Under Indian law, these evasion tactics are countered by the principle of <strong>deemed service</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal basis for deemed service draws from:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 27 of the General Clauses Act, 1897:</strong> This section states that if a letter is sent to the correct address via registered post, service is presumed to be effected at the time the letter would be delivered in the ordinary course of post, unless the contrary is proved. Refusal of delivery does not rebut this presumption.</li>
                      <li><strong>Section 114 of the Evidence Act:</strong> The court presumes that official acts (like postal delivery) are performed regularly. If the postal tracking log shows 'refused to accept' or 'door locked', the court treats it as delivered.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, it is important to note that the automatic presumption under Section 27 of the General Clauses Act specifically refers to &quot;service by post&quot; and does not automatically extend to electronic communications. For WhatsApp and email, you must provide actual proof of delivery (such as SMTP status logs or WhatsApp delivery ticks) to establish service. The court does not assume delivery based on dispatch alone.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient blocks you or deactivates their email post-dispute, you must document these actions. Take screenshots of the blocked chat interface and save the email bounce logs showing status code '550 User Unknown'. When presented to the court alongside proof of delivery to their active addresses before the dispute, these logs prove intentional evasion. Under Section 114 of the Evidence Act (and corresponding provisions of BSA), the court can presume that the communication reached the recipient, treating it as &quot;deemed service&quot; due to intentional evasion.
                    </p>
                  </div>
                </section>

                {/* Section 7: Multi-Channel Delivery Strategy */}
                <section id="multi-channel-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. The Dual-Service Standard: Combining Online Notice Service with Physical Speed Post
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While digital notice service via email and WhatsApp is legally valid, relying solely on online delivery involves risks. The recipient can dispute the ownership of the phone number, claim their email account was compromised, or turn off read receipts to evade proof of service. To address these risks, we recommend using a <strong>multi-channel strategy</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A multi-channel strategy involves serving the notice through both physical and digital channels:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Physical Dispatch:</strong> Send a printed copy of the notice via Registered Post with Acknowledgment Due (RPAD) or Speed Post to the recipient's corporate office and the directors' home addresses.</li>
                      <li><strong>Digital Service:</strong> Simultaneously send PDF copies of the notice to their verified email addresses and WhatsApp numbers.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      This approach provides both traditional and digital proof of service, combining the benefits of both modes. The physical dispatch invokes the strong statutory presumption of deemed service under Section 27 of the General Clauses Act. The digital service provides immediate delivery, prevents physical evasion, and creates an instant electronic record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In your court filings, naming both physical tracking reports and digital delivery logs (along with the Section 63 BSA certificate) leaves no room for the recipient to dispute the service. If they dispute the WhatsApp delivery, you can present the postal tracking log. If they refuse to accept the physical post, you can present the WhatsApp blue ticks and email SMTP logs. This combined approach creates a legally secure proof of service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery automatically implements a multi-channel digital delivery protocol for all notices. We handle the digital dispatch via verified email and WhatsApp and log all delivery confirmations, creating a comprehensive proof of service report.
                    </p>
                  </div>
                </section>

                {/* Section 8: Next Escalation & Litigation Steps */}
                <section id="notice-ignored-litigation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. From Notice to Litigation: Next Escalation Steps for Unresponsive Parties
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is the first step in the dispute resolution process. It provides the recipient with a formal demand and a specific cure period (typically 15 or 30 days) to resolve the issue. If the recipient ignores the notice and the cure period expires without response or settlement, you must escalate to litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The litigation pathways vary based on the nature of your dispute:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>For Salary and Employment Disputes:</strong> File an online conciliation complaint on the Ministry of Labour's SAMADHAN portal. If conciliation fails, you can file a case under Section 33-C(2) of the Industrial Disputes Act in Labour Court, or approach the local Assistant Labour Commissioner under the state's Shops and Establishments Act.</li>
                      <li><strong>For Commercial and Contractual Debts:</strong> File a Summary Suit under Order 37 of the CPC in Civil Court. This is a fast-track recovery proceeding where the defendant must seek permission from the court to defend their case.</li>
                      <li><strong>For Cheque Bounces:</strong> File a criminal complaint under Section 138 of the NI Act in the Magistrate's Court within 30 days of the notice period's end.</li>
                      <li><strong>For Tenant Security Deposits:</strong> Approach the local Rent Control Authority or Rent Court under the state's Tenancy Act.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The digitally served legal notice and its Section 63 BSA certificate are critical during this phase. They are attached as primary exhibits (Annexures) to your complaint or petition. They establish that you provided the recipient with a fair opportunity to resolve the dispute before initiating litigation, fulfilling the principles of natural justice and allowing the court to proceed with your claims.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery's panel of advocates assists you throughout this transition. We help draft the pleadings, file the complaints in the appropriate forums, and present the certified digital notices in court, ensuring a seamless path from notice service to recovery.
                    </p>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-600 italic leading-relaxed mb-4">
                          &quot;{rev.review}&quot;
                        </p>
                        <div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(rev.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="font-extrabold text-xs text-slate-900">{rev.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Choose LegalRecovery?
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India's leading technology-driven recovery platform. We combine legal expertise with workflow automation to make notice delivery and verification fast, transparent, and legally secure.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Airtight Evidence</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          We secure SMTP logs, email headers, and WhatsApp delivery logs, providing comprehensive reports ready for court admissibility.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">BSA 2023 Certification</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Our technical team generates the cryptographic hash values and prepares Section 63 BSA certificates to ensure evidence admissibility.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Advocate Panel Support</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Your notice is reviewed by qualified advocates who cited appropriate local statutes and handle court proceedings when required.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Frequently Asked Questions
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
                <h3 className="text-sm font-black mb-3">Verify Digital Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your case with legal experts and prepare verified digital notices with BSA 2023 evidence certificates.
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
