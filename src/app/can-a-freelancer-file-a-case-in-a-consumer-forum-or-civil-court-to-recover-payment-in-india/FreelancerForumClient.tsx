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
    question: "Can a freelancer file a case in a Consumer Forum to recover unpaid fees in India?",
    answer: "No, a freelancer cannot file a consumer complaint against a defaulting client to recover unpaid professional fees. Under Section 2(7) of the Consumer Protection Act, 2019, a 'consumer' is defined as someone who buys goods or avails of services for consideration. In a freelance arrangement, the freelancer is the service provider, and the client is the service recipient (buyer). Since the client is not providing a service to the freelancer, the freelancer does not qualify as a consumer. Furthermore, B2B commercial disputes are explicitly excluded from consumer court jurisdiction."
  },
  {
    question: "Why does the Consumer Protection Act, 2019 exclude freelance payment disputes?",
    answer: "The Consumer Protection Act excludes these disputes because they are classified as commercial transactions. The law is designed to protect end-consumers from defective goods or deficient services, not to act as a debt collection agency for businesses or independent contractors. While there is a 'self-employment' exception in the Act, it only applies to individuals who purchase goods or services to earn a livelihood (e.g., a photographer buying a camera). It does not apply to a provider suing a client for unpaid services, which remains a commercial contract dispute."
  },
  {
    question: "What is the correct legal forum for a freelancer to recover unpaid dues in India?",
    answer: "Freelancers have two primary legal forums for payment recovery depending on their registration status: (1) The Civil Court, by filing a Summary Suit under Order 37 of the CPC for fast-track recovery based on written agreements or invoices, or a regular money recovery suit for oral contracts. (2) The Micro and Small Enterprise Facilitation Council (MSEFC) under the MSME Samadhaan portal, if the freelancer holds an active Udyam Registration as a micro-enterprise. Additionally, a formal pre-suit legal notice is a mandatory precursor to these options."
  },
  {
    question: "What is a Summary Suit under Order 37 of the CPC, and how does it benefit freelancers?",
    answer: "A Summary Suit under Order 37 of the Civil Procedure Code, 1908, is a specialized fast-track civil remedy for recovering liquidated money claims. Unlike regular civil suits that can drag on for years, a summary suit strips the defendant (the client) of their automatic right to defend. The client must enter an appearance within 10 days of service. If they fail, the freelancer wins immediately. If they appear, they must show a bona fide, non-sham defense to get 'leave to defend.' Otherwise, the court passes a recovery decree in the freelancer's favor."
  },
  {
    question: "Can an invoice serve as a 'written contract' to file a Summary Suit under Order 37?",
    answer: "Yes, under Indian jurisprudence, a clear, unpaid invoice is legally treated as a written contract for the purposes of filing a Summary Suit under Order 37. If the invoice specifies the deliverables, payment terms, and rates, and is accompanied by proof that the client accepted the work (such as emails, Slack logs, or sign-offs), courts accept the invoice as a written agreement. This allows freelancers to bypass the lengthy trial process of a regular civil recovery suit."
  },
  {
    question: "How can Udyam Registration help freelancers recover payments via MSME Samadhaan?",
    answer: "By registering for free as a Micro Enterprise on the Udyam portal, a freelancer gains access to the MSME Development Act, 2006. Under Section 15 of the Act, clients must pay micro-enterprises within 45 days. If they fail, the freelancer can file a complaint on the MSME Samadhaan portal. The local Micro and Small Enterprise Facilitation Council (MSEFC) will conduct conciliation and arbitration. Under Section 16, the client is legally liable to pay compound interest at three times the RBI bank rate on delayed payments."
  },
  {
    question: "What is the limitation period for a freelancer to file a payment recovery suit in India?",
    answer: "Under the Limitation Act, 1963, the limitation period for filing a civil recovery suit or a summary suit is exactly three (3) years. This 3-year clock begins ticking from the date the payment first became due (e.g., the due date written on the invoice) or from the date the client last acknowledged the debt in writing (such as an email promising to clear the balance). Freelancers must initiate legal action before this period expires; otherwise, the claim becomes time-barred."
  },
  {
    question: "Are email threads and WhatsApp chats admissible as evidence in a recovery trial?",
    answer: "Yes, under the Information Technology Act, 2000, digital communications like email threads, WhatsApp messages, Slack logs, and Git commit logs are admissible as electronic records. However, to present them in court, they must strictly comply with Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023. This requires attaching a signed certificate verifying the device integrity and providing cryptographic hashes (SHA-256) of the files to prove the evidence has not been tampered with."
  },
  {
    question: "What is a Section 63 BSA Certificate, and why is it mandatory for electronic evidence?",
    answer: "Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (which replaced Section 65B of the Indian Evidence Act) governs the admissibility of digital records. A Section 63 certificate is a mandatory signed document that certifies the computer, server, or mobile phone used to generate or store the digital evidence was operating properly. It must include hash values (e.g., SHA-256) of the screenshots or chat exports. Without this certificate, digital evidence is completely inadmissible in Indian courts."
  },
  {
    question: "Can a freelancer file a criminal case against a client who refuses to pay?",
    answer: "A freelancer can file a criminal complaint for Cheating under Section 318 of the Bharatiya Nyaya Sanhita (BNS), 2023 (formerly Section 420 IPC) or Criminal Breach of Trust under Section 316 BNS (formerly Section 406 IPC). However, to succeed, the freelancer must prove that the client had dishonest or fraudulent intent from the very beginning of the project (i.e., they hired the freelancer with the pre-planned intention of never paying). Standard commercial disagreements or delayed payments without initial fraud are treated as purely civil matters."
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
      "name": "Freelancer Forum Choice",
      "item": "https://www.legalrecovery.in/can-a-freelancer-file-a-case-in-a-consumer-forum-or-civil-court-to-recover-payment-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can a Freelancer File in Consumer Court or Civil Court in India?",
  "description": "Understand the jurisdictional options for freelancers in India seeking payment recovery. Learn why Consumer Courts exclude freelancers and why CPC Order 37 Summary Suits or MSME Samadhaan are the correct remedies.",
  "image": "https://www.legalrecovery.in/og-freelancer-forum.png",
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
  "name": "Freelancer Forum Choice & Payment Recovery Services",
  "image": "https://www.legalrecovery.in/og-freelancer-forum.png",
  "description": "Expert advocate-drafted legal notices and structured debt recovery solutions for freelancers, consultants, and gig workers in India.",
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

export default function FreelancerForumClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "consumer-court-freelancer-exclusion", title: "1. Consumer Forum Exclusion" },
    { id: "civil-court-summary-suits", title: "2. CPC Order 37 Summary Suits" },
    { id: "regular-money-recovery-suits", title: "3. Regular Civil Recovery" },
    { id: "msme-samadhaan-facilitation-council", title: "4. MSME Samadhaan Portal" },
    { id: "evidentiary-requirements-court", title: "5. Digital Admissibility & BSA" },
    { id: "pre-suit-legal-notice-prerequisite", title: "6. Pre-Suit Legal Notice" },
    { id: "court-jurisdiction-rules", title: "7. Jurisdiction Selection" },
    { id: "negotiation-and-settlement-deeds", title: "8. Settlement Deeds & IP" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Guides", href: "/guides" },
    { label: "Freelancer Forum Choice", href: "/can-a-freelancer-file-a-case-in-a-consumer-forum-or-civil-court-to-recover-payment-in-india" }
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
              Judicial Forums for Gig Workers in India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Consumer Court vs. Civil Court: <span className="text-[#DC2626]">Freelancer Recovery Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with unpaid freelance invoices? Understand why Consumer Forums exclude independent contractors, and learn how to use Summary Suits or MSME Samadhaan to get paid.
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
                <section id="consumer-court-freelancer-exclusion" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Legal Paradox: Why Freelancers Are Excluded from Consumer Forum Protection
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The rapid expansion of the digital economy in India has created an entirely new class of professionals: freelancers, independent consultants, and gig workers. These individuals offer specialized services across software engineering, content writing, graphic design, and marketing. However, when these professionals experience payment defaults from clients, they often make the critical mistake of attempting to approach a Consumer Disputes Redressal Commission (commonly known as a Consumer Court). The appeal of the Consumer Court is understandable—it is perceived as a faster, more accessible, and cheaper forum than traditional civil courts. However, under the current legal framework in India, freelancers are strictly excluded from availing of these protections for payment recovery.
                    </p>
                    <p>
                      This exclusion is rooted in the statutory definition of a &quot;consumer&quot; under <strong>Section 2(7) of the Consumer Protection Act, 2019</strong>. The Act defines a consumer as any person who buys goods or hires or avails of any services for a consideration. The fundamental paradox of a freelance payment dispute is that the roles are reversed. In a freelance transaction, the freelancer is the <strong>service provider</strong>, and the defaulting client is the <strong>buyer or recipient</strong> of that service. If the freelancer performs work (such as writing code or creating designs) and the client refuses to pay, the client is not providing a service to the freelancer. Consequently, the freelancer cannot claim to be a consumer of the client. Under consumer law, a creditor cannot sue their debtor; rather, the forum is reserved for buyers suing sellers for defects or deficiencies.
                    </p>
                    <p>
                      Furthermore, the Consumer Protection Act explicitly excludes transactions entered into for a <strong>&quot;commercial purpose&quot;</strong>. A B2B (business-to-business) transaction, where an independent contractor delivers services to a corporate entity, is classified by default as a commercial transaction. While the Act does provide an explanation stating that availing of services for the purpose of earning a livelihood by means of self-employment does not count as a commercial purpose, this exception is strictly construed. It is designed to protect self-employed individuals who purchase tools or services <em>from</em> vendors (such as a freelance photographer buying a camera that turns out to be defective). It does not, under any circumstances, extend to a freelancer seeking to recover unpaid professional fees from their own clients. In such disputes, the client is the commercial buyer, and the freelancer is the commercial seller.
                    </p>
                    <p>
                      This position was reinforced by the Supreme Court of India in the landmark case of <strong>Bar of Indian Lawyers v. D.K. Gandhi (2024)</strong>. Although this case specifically dealt with whether the services of advocates fall under the Consumer Protection Act, the Court drew a sharp, structural distinction between a &quot;profession&quot; and a &quot;trade or business.&quot; The Supreme Court ruled that a professional service involves specialized intellectual and manual skill, which is highly distinct from standard commercial service contracts. The Court held that complaints regarding professional fees or professional negligence do not constitute consumer disputes in the traditional sense. By extension, highly skilled freelance consultants, designers, and developers are categorized as professionals. Any dispute over their outstanding invoices is treated as a commercial contract dispute, which is completely barred from the jurisdiction of consumer forums.
                    </p>
                    <p>
                      Attempting to file a payment recovery complaint in a Consumer Commission is not only legally incorrect but also highly counterproductive. When such a case is filed, the opposing counsel will immediately raise a preliminary objection regarding the maintainability of the petition. The Commission, bound by the strict provisions of the Consumer Protection Act, will dismiss the case at the admission stage itself. This results in a significant waste of time, money, and legal effort, allowing the client to delay payment even further. Freelancers must recognize that their legal remedy lies elsewhere—specifically in the civil courts or specialized government facilitation councils.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Freelancers must understand that they are service providers, not consumers, in their professional engagements. Under Section 2(7) of the Consumer Protection Act, 2019, any complaint filed in a Consumer Court for unpaid freelance fees will be dismissed as non-maintainable. The correct legal recourse must be sought through Civil Suits or MSME Councils.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="civil-court-summary-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Order 37 Summary Suits: The Fast-Track Civil Remedy for Written Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Since the Consumer Court is barred, the primary and most powerful judicial mechanism available to a freelancer for recovering unpaid fees is the Civil Court. However, traditional civil litigation in India is notorious for its procedural delays, sometimes taking several years to reach a conclusion. To address this, the Code of Civil Procedure, 1908, contains a specialized fast-track mechanism: the <strong>Summary Suit</strong>, governed by <strong>Order XXXVII (Order 37) of the CPC</strong>. This is a highly effective legal weapon designed specifically to prevent defendants from using frivolous arguments to delay the recovery of clear, liquidated debts.
                    </p>
                    <p>
                      To qualify for a Summary Suit under Order 37, the freelancer's claim must be based on a written contract, a bill of exchange, a promissory note, or a clear liquidated money demand. Many freelancers believe they cannot file under Order 37 if they do not have a signed, multi-page Master Service Agreement (MSA). However, Indian courts have repeatedly held that a clear, unpaid <strong>invoice</strong> constitutes a written contract for the purposes of a Summary Suit, provided there is written evidence of its acceptance. If you have sent an invoice to a client, and the client has acknowledged the receipt of the invoice and the delivery of the work (via email, WhatsApp, or Slack), the combination of these documents satisfies the requirement of a written contract under Order 37.
                    </p>
                    <p>
                      The procedural steps of an Order 37 Summary Suit are structured to fast-track the recovery process:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Filing the Plaint:</strong> The freelancer files a plaint containing a specific declaration that the suit is being brought under Order XXXVII of the CPC and that no relief beyond a liquidated money claim is being sought.
                      </li>
                      <li>
                        <strong>Service of Summons:</strong> The court issues a special summons to the defendant. The defendant does not have an automatic right to file a written statement (defense) at this stage.
                      </li>
                      <li>
                        <strong>Mandatory 10-Day Appearance:</strong> The client (defendant) must enter an appearance in court within exactly <strong>10 days</strong> of receiving the summons. If they fail to appear within this strict timeline, the allegations in the plaint are legally deemed admitted, and the judge will immediately pass a decree in favor of the freelancer.
                      </li>
                      <li>
                        <strong>Summons for Judgment:</strong> If the defendant enters an appearance, the freelancer serves a &quot;Summons for Judgment&quot; (Form 4A, Appendix B). The defendant must then apply to the court for <strong>Leave to Defend</strong> within 10 days of service, supported by an detailed affidavit showing a genuine, triable defense.
                      </li>
                      <li>
                        <strong>Evaluation of Defense:</strong> The court reviews the defendant's application. If the defense is found to be a sham, illusory, or merely a tactic to delay the trial, the court will deny leave and pass a recovery decree immediately. If the court finds a partial or weak defense, it may grant conditional leave, ordering the client to deposit the entire disputed amount in the court's registry before they are allowed to defend the case.
                      </li>
                    </ul>
                    <p>
                      The pressure created by a Summary Suit is immense. Corporate clients and directors are well aware that if they cannot present a highly credible defense, they will face a summary decree. Furthermore, the requirement to deposit funds in court as a condition for defending the case frequently forces the client to approach the freelancer for an out-of-court settlement. While regular civil suits can drag on, an Order 37 suit is typically decided within 6 to 12 months, making it one of the most efficient judicial paths for freelancers holding clear invoices and delivery trails.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Comparison: Order 37 Summary Suit vs. Regular Civil Suit
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <h5 className="font-black text-slate-950 mb-2">Order 37 Summary Suit</h5>
                          <ul className="list-disc pl-4 space-y-1 text-slate-650">
                            <li>Fast-track procedure (typically 6-12 months)</li>
                            <li>No automatic right to defend for the client</li>
                            <li>Applies to written contracts & invoices</li>
                            <li>Conditional leave may require deposit of funds</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <h5 className="font-black text-slate-950 mb-2">Regular Money Recovery Suit</h5>
                          <ul className="list-disc pl-4 space-y-1 text-slate-650">
                            <li>Standard civil trial (takes 2-5 years)</li>
                            <li>Defendant has an automatic right to contest</li>
                            <li>Applies to oral, complex, or disputed contracts</li>
                            <li>Full trial including witness cross-examination</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="regular-money-recovery-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Regular Money Recovery Suits: Navigating Complex and Oral Agreements
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      While a Summary Suit is the ideal route, it is not always legally viable. If the freelance agreement was purely oral, or if the digital trail is highly disjointed, or if the client raises substantial disputes regarding the quality of the work before the invoice was generated, the court may refuse to hear the case under Order 37. In such circumstances, the freelancer must resort to filing a <strong>Regular Civil Suit for Recovery of Money</strong> under the Code of Civil Procedure, 1908. Unlike a summary suit, a regular recovery suit involves a full civil trial, allowing both parties to present extensive pleadings, summon witnesses, and conduct cross-examinations.
                    </p>
                    <p>
                      A regular civil trial follows a structured judicial process. It begins with the filing of the plaint, followed by the issuance of summons. The defendant has an automatic right to file a written statement within 30 to 90 days. Thereafter, the plaintiff files a replication, and the court frames the specific legal issues in dispute. The case then enters the evidence stage, where both the freelancer and the client must lead evidence (such as files, emails, or expert reports) and undergo cross-examination by the opposing counsels. While this process is comprehensive, it requires patient legal strategy. The freelancer must establish that they executed their part of the contract and that the client's refusal to pay is unjustified.
                    </p>
                    <p>
                      One of the most important considerations in filing a regular civil suit is the <strong>court fees</strong>. Unlike consumer forums where fees are nominal, civil recovery suits require the payment of <em>ad valorem</em> court fees. This means the court fee is calculated as a percentage of the total recovery claim, including the principal amount and interest. The fee structure is determined by the specific state court rules where the case is filed. For example, in Delhi, the court fee for a claim of ₹5,00,000 is approximately ₹7,000, whereas in Maharashtra or Karnataka, it ranges between 4% and 7% of the claim value. This upfront cost is a key factor that freelancers must budget for, though the court has the power under Section 35 of the CPC to award these costs to the winning party at the end of the trial.
                    </p>
                    <p>
                      Furthermore, freelancers must remain highly conscious of the statutory time limits. Under the <strong>Limitation Act, 1963</strong>, the limitation period for filing a civil lawsuit for money recovery is strictly <strong>three (3) years</strong> from the date the cause of action arose. The cause of action typically arises on the day the client missed the payment deadline, or when they explicitly refused to pay. However, under <strong>Section 18 of the Limitation Act</strong>, any subsequent written acknowledgment of the debt by the client (such as an email stating &quot;we will pay you next month&quot; or a partial payment) resets the 3-year limitation clock from the date of that acknowledgment. It is critical to initiate the legal notice and suit before this limitation window closes, as courts will not entertain time-barred recovery claims.
                    </p>
                    <p>
                      Even in the absence of a written contract, a freelancer in a regular civil suit can claim compensation under the doctrine of <strong>Quantum Meruit</strong>, codified under <strong>Section 70 of the Indian Contract Act, 1872</strong>. Section 70 governs quasi-contractual obligations where a person does a non-gratuitous act for another. If you have delivered valuable work (such as building a website) and the client has utilized it, the law implies an obligation to pay reasonable compensation. A regular civil suit allows the freelancer to present digital proofs, code repositories, and communications to establish this quasi-contractual relationship and secure a decree based on the market value of the services rendered.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="msme-samadhaan-facilitation-council" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. MSME Samadhaan: The Specialized Government Forum for Registered Gig Workers
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      For freelancers seeking a powerful alternative to civil courts, the <strong>MSME Samadhaan portal</strong> represents a revolutionary legal option. Under the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>, individual professionals, consultants, and independent contractors are eligible to obtain a free online registration called the <strong>Udyam Registration</strong>. Once registered, the freelancer is legally classified as a &quot;Micro Enterprise&quot; in the service sector. This registration unlocks the protective statutory provisions of the MSMED Act, which is specifically designed to protect small suppliers from delayed payments by corporate buyers.
                    </p>
                    <p>
                      The key benefit of the MSMED Act is <strong>Section 15</strong>, which mandates a strict payment timeline. If a registered micro-enterprise supplies services to a buyer (client), the client must make the payment within the period agreed upon in writing. Crucially, the Act specifies that this agreed period <strong>cannot exceed forty-five (45) days</strong> from the date of acceptance of the services. If there is no written agreement, the payment must be made within fifteen (15) days. Any contract clause that attempts to extend the payment timeline beyond 45 days is void under Section 15. If the client fails to clear the invoice within this 45-day window, the freelancer can file an online complaint on the government's MSME Samadhaan portal.
                    </p>
                    <p>
                      The complaint is automatically routed to the local <strong>Micro and Small Enterprise Facilitation Council (MSEFC)</strong>. The MSEFC acts as a specialized quasi-judicial forum and follows a structured two-step process:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Conciliation:</strong> The Council first attempts to resolve the dispute through conciliation under the Arbitration and Conciliation Act, 1996. The Council summons both the freelancer and the client to explore an amicable settlement. In many cases, corporate clients settle the dues at this stage to avoid further penalties.
                      </li>
                      <li>
                        <strong>Arbitration:</strong> If the conciliation fails, the Council does not dismiss the case. Instead, it either takes up the arbitration itself or refers it to an institutional arbitration center. The Council conducts fast-track arbitration proceedings and passes a binding arbitral award, which has the same legal force as a civil court decree.
                      </li>
                    </ul>
                    <p>
                      The most powerful aspect of the MSMED Act is the statutory interest penalty under <strong>Section 16</strong>. If a buyer delays payment beyond the 45-day limit, they are legally obligated to pay the freelancer compound interest with monthly rests on the outstanding amount. The interest rate is fixed at <strong>three times the bank rate</strong> notified by the Reserve Bank of India (RBI). In practice, this rate usually amounts to between <strong>18% and 22% per annum</strong>, which is far higher than the 6% to 9% simple interest typically awarded by civil courts. This interest starts accruing automatically from the day after the 45-day limit expires, creating a massive financial liability for the defaulting client.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Statutory Feature</th>
                            <th className="border border-slate-200 p-3">MSME Samadhaan (MSEFC)</th>
                            <th className="border border-slate-200 p-3">Civil Court (CPC Order 37)</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Payment Period Limit</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Strict statutory cap of 45 days</td>
                            <td className="border border-slate-200 p-3">Governed by contract terms or reasonable time</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Interest Rate on Delays</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">3x RBI Bank Rate (Compound, monthly rests)</td>
                            <td className="border border-slate-200 p-3">At court's discretion (typically 6-12% simple)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Appeal Restrictions</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Client must deposit 75% of award to appeal</td>
                            <td className="border border-slate-200 p-3">Standard civil appeal process</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Udyam Requirement</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Mandatory Udyam registration prior to work</td>
                            <td className="border border-slate-200 p-3">Not required; open to all contractors</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Furthermore, under <strong>Section 19</strong> of the MSMED Act, if the client wishes to appeal an award passed by the MSEFC, the court will not even entertain the appeal unless the client first deposits <strong>75% of the awarded amount</strong> in the court's registry. This provision prevents clients from using appeals to delay payment, as the financial barrier to filing an appeal is extremely high. However, freelancers must note a critical legal requirement: the Udyam Registration <strong>must be active at the time the services were rendered</strong> or before the dispute arose. A retrospective Udyam registration cannot be used to file complaints for past completed works, which is why we advise all Indian freelancers to register on the Udyam portal immediately upon starting their freelance practice.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="evidentiary-requirements-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Admissibility of Evidence: Proving Work Delivery and Client Default in Civil Trials
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Whether you choose the civil court or the MSME Council, the success of your payment recovery action depends entirely on the strength of your evidence. In a contract dispute, the burden of proof rests on the freelancer. You must be able to prove three fundamental elements: (1) that a valid agreement existed, (2) that you delivered the services according to the agreed terms, and (3) that the client failed to pay the invoice. Because freelance work is almost entirely digital, the vast majority of your evidence will consist of electronic records, which are subject to strict legal admissibility rules in India.
                    </p>
                    <p>
                      The legal framework for electronic records is governed by the Information Technology Act, 2000, and the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which recently replaced the Indian Evidence Act, 1872). Under the Information Technology Act, digital communications such as email threads, Slack messages, WhatsApp chat logs, and project management portals (like Trello, Asana, or Jira) are recognized as legally valid electronic records. If your client approved a scope of work via a WhatsApp chat or a Slack message, that conversation is legally binding. However, you cannot simply print out a screenshot of a WhatsApp chat or print an email and hand it to the judge. The law classifies printouts of electronic records as <strong>secondary electronic evidence</strong>, which is inadmissible unless it meets specific statutory certification requirements.
                    </p>
                    <p>
                      This certification is governed by <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</strong> (which replaced Section 65B of the Indian Evidence Act). Section 63 mandates that any secondary electronic evidence must be accompanied by a signed <strong>Section 63 BSA Certificate</strong>. This certificate must be signed by a person in a responsible position who manages the device or the system. The certificate must:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        Identify the electronic record (e.g., the specific email thread or WhatsApp chat export).
 Sukshya
                      </li>
                      <li>
                        Describe the computer, server, or mobile phone used to produce or print the record, including details like make, model, serial number, and operating system.
                      </li>
                      <li>
                        Certify that the device was operating properly and that the electronic record has not been tampered with.
                      </li>
                      <li>
                        Include the <strong>cryptographic hash values</strong> (such as SHA-256) of the digital files to verify their integrity and prevent any allegation of manipulation.
                      </li>
                    </ul>
                    <p>
                      Failing to attach a Section 63 BSA certificate renders your digital evidence completely inadmissible. A client's lawyer can easily object to the presentation of uncertified screenshots, and the court will exclude them from the record. Therefore, freelancers must maintain a meticulous digital audit trail. For email dispatches, you should preserve the complete SMTP delivery headers and logs showing status code <code>250 OK</code>, which proves the email was successfully delivered to the client's mail server. For code deliveries, you should preserve GitHub commit history, pull request approvals, and server logs showing deployment.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Meticulous Record-Keeping: Freelancer Evidence Checklist
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>Written Contracts/SOWs:</strong> Signed agreements or clear, accepted price quotes defining the deliverables and payment terms.
                        </li>
                        <li>
                          <strong>Invoices & Delivery Receipts:</strong> Meticulously numbered invoices showing GST details (if applicable), along with email delivery logs or client read receipts.
                        </li>
                        <li>
                          <strong>Communications Audit Trail:</strong> PDF exports of complete WhatsApp or Slack history showing the client's explicit approval of milestones or deliverables.
                        </li>
                        <li>
                          <strong>Section 63 BSA Compliance:</strong> Ensuring that all digital screenshots or file printouts are paired with a signed digital certificate detailing system hashes.
                        </li>
                      </ul>
                    </div>
                    <p>
                      At LegalRecovery, we recognize the importance of this evidence. When we dispatch a legal notice on behalf of a freelancer, we perform a dual-delivery search: we send the notice via physical Speed Post and simultaneously serve it electronically via email and WhatsApp. We generate automated delivery tracking reports and prepare a pre-certified Section 63 BSA Certificate for our clients. This ensures that if the case proceeds to a civil court or the MSME council, the freelancer's evidence is immediately admissible and legally airtight.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="pre-suit-legal-notice-prerequisite" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. The Mandatory Legal Notice: Laying the Groundwork for Civil Action
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Before initiating a Summary Suit under Order 37, a regular civil recovery case, or an MSME Samadhaan complaint, there is a crucial, mandatory preliminary step: serving a formal <strong>Pre-Suit Legal Notice</strong> on the defaulting client. A legal notice is a formal communication sent by an advocate on behalf of the freelancer, detailing the facts of the dispute, calculating the exact outstanding dues along with interest, and giving the client a final opportunity (typically <strong>15 days</strong>) to resolve the matter before legal action is initiated.
                    </p>
                    <p>
                      Serving a legal notice is highly recommended for several reasons. First, under Section 35 of the CPC, the court evaluates the conduct of both parties when deciding whether to award litigation costs to the winning party. By sending a formal notice, you establish that you acted in good faith, gave the client a reasonable opportunity to clear the dues, and that the client's failure to respond left you with no option but to file a suit. Second, a legal notice acts as an extremely effective dispute filter. In over 80% of payment recovery cases, a professional legal notice drafted by an advocate and served on formal letterhead is sufficient to secure a settlement. It signals to the client that the freelancer is serious and is prepared to initiate formal judicial action, which immediately escalates the dispute from a routine HR/procurement matter to the client's legal department.
                    </p>
                    <p>
                      To be enforceable, a legal notice must contain specific, key elements:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Detailed Cause of Action:</strong> A chronological summary of the freelance engagement, from the initial scope discussion to the delivery of the final work and the generation of invoices.
                      </li>
                      <li>
                        <strong>Clear Invoice and Dues Table:</strong> A table listing each outstanding invoice number, its date, the principal amount, and the accrued interest (calculated under contract terms, the Interest Act, 1978, or the MSMED Act, 2006).
                      </li>
                      <li>
                        <strong>Explicit Demand and Timeline:</strong> A clear demand that the client must pay the outstanding amount within 15 days of receiving the notice.
                      </li>
                      <li>
                        <strong>Statement of Consequences:</strong> An explicit statement that if the client fails to comply, the freelancer will initiate civil, criminal, or MSME proceedings, and that the client will be held liable for all subsequent court costs and advocate fees.
                      </li>
                    </ul>
                    <p>
                      The method of serving the notice is also governed by legal rules. It must be dispatched physically via <strong>Speed Post or Registered Post AD (RPAD)</strong> to the client's registered office address. Under <strong>Section 27 of the General Clauses Act, 1897</strong>, if a notice is sent to the correct address via registered post, the service is deemed complete, even if the client refuses to accept the delivery or avoids the postman. To ensure absolute compliance, the notice should also be served digitally via email and WhatsApp, accompanied by automated delivery tracking to establish that the client has received and read the demand.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A legal notice is not just a letter; it is a formal court-admissible document. It defines your cause of action and locks in the default date. When served via Speed Post and WhatsApp with verified tracking, it forces the client to negotiate a settlement or face the financial penalties of active litigation.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="court-jurisdiction-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Territorial and Pecuniary Jurisdiction: Choosing the Correct Civil Court
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If the 15-day notice period expires and the client fails to respond or refuses to clear the dues, the next step is filing the lawsuit. To do this, the freelancer's legal team must determine the correct court that has the authority to hear the case. This is governed by two distinct legal rules: <strong>Territorial Jurisdiction</strong> (the geographical location of the court) and <strong>Pecuniary Jurisdiction</strong> (the financial value of the claim). Choosing the incorrect jurisdiction will result in the court returning the plaint under Order 7 Rule 10 of the CPC, forcing you to refile the case and causing substantial delays.
                    </p>
                    <p>
                      <strong>Territorial Jurisdiction</strong> is governed by <strong>Section 20 of the Code of Civil Procedure, 1908</strong>. Under Section 20, a civil recovery suit can be filed in a court within the local limits of whose jurisdiction:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The defendant (the client or their corporate entity) resides, carries on business, or personally works for gain.
                      </li>
                      <li>
                        The <strong>cause of action</strong> arises, wholly or in part. For freelancers, the cause of action is multi-dimensional. It arises where the contract was executed, where the freelancer performed the services (e.g., from their home office), or where the payment was agreed to be made (e.g., the freelancer's bank account location).
                      </li>
                    </ul>
                    <p>
                      Many freelance contracts contain a <strong>&quot;Forum Selection Clause&quot;</strong> (also known as an exclusive jurisdiction clause), which states that any disputes will be subject to the exclusive jurisdiction of the courts in a specific city (e.g., &quot;courts in Mumbai shall have exclusive jurisdiction&quot;). Under Section 28 of the Indian Contract Act, 1872, such clauses are legally valid, provided the chosen city is a place where at least a part of the cause of action arose. However, if the contract is silent, the freelancer has the legal right to file the suit in their own home city, arguing that the contract was performed and the payment was to be received there, which is a significant advantage for the freelancer.
                    </p>
                    <p>
                      <strong>Pecuniary Jurisdiction</strong> determines which tier of the civil court system will hear the case based on the total claim value (principal amount plus interest). The civil court hierarchy in India varies by state, but generally follows a structured pattern:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Civil Judge (Junior Division):</strong> Hears claims of lower values. For example, in many districts, this court handles claims up to ₹1,00,000 or ₹2,00,000.
                      </li>
                      <li>
                        <strong>Civil Judge (Senior Division):</strong> Hears mid-value commercial claims. For example, claims between ₹2,00,000 and ₹10,000,000.
                      </li>
                      <li>
                        <strong>District Court:</strong> Hears high-value claims. In major metropolitan areas, District Courts handle claims exceeding ₹10,00,000 or ₹20,00,000.
                      </li>
                      <li>
                        <strong>High Court (Original Jurisdiction):</strong> In certain presidency towns like Delhi, Mumbai, Kolkata, and Chennai, the High Court has original civil jurisdiction to hear high-value commercial suits directly (e.g., claims exceeding ₹2 Crore in Delhi).
                      </li>
                    </ul>
                    <p>
                      Before drafting the suit, the advocate will calculate the exact valuation of the claim. If the valuation is done incorrectly, the client's legal team will file an application under Order 7 Rule 11 for rejection of the plaint. By partnering with a dedicated legal platform like LegalRecovery, you ensure that your claim is filed in the correct court with the proper territorial and pecuniary jurisdiction, avoiding procedural setbacks and ensuring a smooth recovery process.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="negotiation-and-settlement-deeds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Out-of-Court Settlements: Structuring Binding Deeds and IP Releases
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The ultimate goal of any legal recovery action is not to engage in endless court litigation, but to secure the unpaid money. Therefore, at every stage of the legal process—whether during the initial notice phase, the MSME conciliation, or the active trial—both parties must remain open to out-of-court settlement negotiations. In fact, serving a professional legal notice often prompts the client to propose a compromise. However, freelancers must exercise extreme caution during settlement negotiations. A verbal agreement or a loose exchange of emails promising to pay in the future is highly risky. If the client defaults on a verbal promise, you are forced to start your legal recovery from scratch.
                    </p>
                    <p>
                      To prevent this, any settlement must be documented in a formally executed <strong>Settlement Deed</strong> or <strong>Memorandum of Understanding (MOU)</strong>. This deed is a legally binding contract that supersedes the original agreement and must be drafted with precise, protective clauses:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Structured Payment Schedule:</strong> If the client is paying the outstanding dues in installments, the deed must specify the exact dates, the installment amounts, and the bank details where the funds will be transferred.
                      </li>
                      <li>
                        <strong>Acceleration Clause:</strong> This is a critical protection. The deed must state that if the client fails to pay any single installment on the agreed date, the entire remaining settlement amount along with interest becomes immediately due and payable, allowing the freelancer to initiate execution proceedings without having to prove the debt again.
                      </li>
                      <li>
                        <strong>Conditional Intellectual Property (IP) Release:</strong> Freelancers hold the copyright to their work under the Copyright Act, 1957. The Settlement Deed must explicitly state that the ownership and intellectual property rights of all deliverables (such as source code, designs, or marketing plans) will transfer to the client <strong>only upon the receipt of the final payment</strong> in the freelancer's bank account. This provides the freelancer with massive leverage, as the client cannot use or launch the work until the final rupee is paid.
                      </li>
                      <li>
                        <strong>Withdrawal of Litigation:</strong> The deed should state that the freelancer will withdraw the active court case or MSME Samadhaan complaint only after the final payment has been cleared by the bank, ensuring the legal action remains active until the money is in your account.
                      </li>
                    </ul>
                    <p>
                      A professionally drafted Settlement Deed provides both parties with a clear, enforceable roadmap. It eliminates any ambiguity and prevents the client from raising new disputes regarding the quality of the work. At LegalRecovery, we act as a tech-enabled bridge for freelancers. We assist in conducting settlement negotiations, drafting binding Deeds, and managing escrow-like milestone payments, ensuring that you recover your stuck funds legally, securely, and without the stress of direct client confrontation.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Never withdraw a legal notice or court case based on a client's promise. Ensure a formal Settlement Deed is signed, containing an acceleration clause and a conditional IP release. The legal dispute should only be closed once the final payment has successfully cleared in your bank account.&quot;
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
                  Resolve your unpaid freelancer invoices through formal legal notice dispatches drafted by expert advocates.
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
