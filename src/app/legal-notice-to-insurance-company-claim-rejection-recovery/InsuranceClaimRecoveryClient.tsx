'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the first step I should take when my insurance claim is rejected?",
    answer: "Always demand a formal written rejection letter from your insurance provider immediately. Never rely on verbal rejections from customer care agents or field surveyors. The written rejection letter must specify the exact exclusionary policy clauses. Compare these cited clauses against your original policy schedule and terms. If the insurer acts arbitrarily, file an internal grievance with their Grievance Redressal Officer."
  },
  {
    question: "How long can an insurance company delay a claim under IRDAI guidelines?",
    answer: "IRDAI Regulations, 2017 require insurers to settle claims within thirty days of documentation. If the insurer orders a formal investigation, they must initiate it immediately. The company must conclude all investigation procedures within ninety days of intimation. They must issue a final claim decision thirty days after the inquiry ends. Insurers must pay penal interest for any delay exceeding these statutory timelines."
  },
  {
    question: "What is a Nodal Officer or Grievance Redressal Officer, and how do I contact them?",
    answer: "Every Indian insurance company must designate a Grievance Redressal Officer (GRO). The officer resolves consumer disputes regarding arbitrary claim repudiations and delays. You can find official officer contact details on the insurer's website or IRDAI portal. The Grievance Redressal Officer must resolve your complaint within fifteen working days. You must approach this internal grievance officer before escalating to the Insurance Ombudsman."
  },
  {
    question: "Can I file a complaint with the Insurance Ombudsman if my claim is delayed?",
    answer: "You can approach the Insurance Ombudsman if your claim is rejected or delayed. First, you must file a formal complaint with the insurer's Grievance Redressal Officer. If the officer rejects your grievance, you can approach the Insurance Ombudsman. You can also file if the officer fails to respond within thirty days. You must submit your complaint within one year from the final rejection date."
  },
  {
    question: "What are the key differences between the Ombudsman and the Consumer Court?",
    answer: "The Insurance Ombudsman offers fast, cost-free resolution for claim disputes up to thirty lakhs. Ombudsman decisions bind the insurance company, but consumers retain rights to appeal. The Consumer Court operates under the Consumer Protection Act, 2019 without financial ceilings. Advocates can represent policyholders before Consumer Commissions to present comprehensive evidence. Consumer courts can award substantial damages for mental agony and service deficiency."
  },
  {
    question: "What is the limitation period to file a case against an insurance company in India?",
    answer: "Under the Limitation Act, 1963, policyholders have three years to initiate legal action. This three-year clock starts from the date of the formal claim rejection letter. You can file a consumer court complaint or civil suit within this window. Once this three-year period expires, courts will dismiss your claim as time-barred. Always issue a formal legal notice promptly to preserve all legal remedies."
  },
  {
    question: "Can an insurance company reject a health claim for a pre-existing disease after 8 years?",
    answer: "No, insurers cannot reject health claims after eight years of continuous renewals. Under IRDAI regulations, health policies achieve statutory incontestability after an eight-year moratorium period. The insurance provider cannot raise non-disclosure of pre-existing diseases after this duration. Only proven cases of deliberate active fraud allow claim repudiation after eight years. The insurer remains legally obligated to settle all genuine hospital claims."
  },
  {
    question: "What should I do if my motor insurance claim is rejected due to a delay in reporting?",
    answer: "You must challenge motor insurance rejections that rely solely on delayed reporting. The Supreme Court of India ruled that technical delays cannot invalidate genuine claims. Emergency medical treatment or police investigations provide valid grounds for reporting delays. Issue a formal legal notice attaching your police FIR and medical records. Insurers must honor accidental repair claims once verified by official surveyor reports."
  },
  {
    question: "Is a legal notice mandatory before filing a complaint in the Consumer Court?",
    answer: "A legal notice is not strictly mandatory under the Consumer Protection Act, 2019. However, serving a formal advocate notice is practically essential before filing litigation. It gives the insurer a final fifteen-day opportunity to settle your claim amicably. It also demonstrates to the Consumer Commission that you acted in good faith. Most insurers settle valid claims upon receiving a notice to avoid litigation costs."
  }
];

const reviews = [
  {
    author: "Devendra Sharma (New Delhi)",
    rating: "5",
    text: "My four lakh health claim was rejected citing an alleged pre-existing condition. I had already disclosed this medical condition during my initial policy application. We served an advocate legal notice directly to the national grievance head. The company reviewed the historical proposal form and acknowledged their administrative error. They credited my full claim amount to my bank within twenty days."
  },
  {
    author: "Meenakshi Iyer (Chennai)",
    rating: "5",
    text: "The insurer delayed my motor insurance settlement for four months citing ongoing investigations. Routine email reminders produced no responses from the surveyor or branch managers. We served a formal advocate notice citing statutory IRDAI claim processing timelines. The insurer's corporate legal team contacted me within one week of notice delivery. They accepted the assessment and released two lakh rupees without further disputes."
  },
  {
    author: "Vikramjit Singh (Amritsar)",
    rating: "5",
    text: "The insurer rejected our commercial fire claim of eighteen lakhs over minor discrepancies. We served a formal legal notice citing commercial insurance principles and compliance records. When the insurer hesitated, we filed a complaint before the State Consumer Commission. The insurer promptly approached us and settled ninety percent of our claim. The structured legal roadmap saved our business from years of costly litigation."
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
      "name": "Legal Notice to Insurance Company for Delayed or Rejected Claim Recovery",
      "item": "https://www.legalrecovery.in/legal-notice-to-insurance-company-claim-rejection-recovery"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Insurance Company for Delayed or Rejected Claim Recovery",
  "description": "A comprehensive legal guide on recovering health, motor, and commercial insurance claims. Learn how to draft and serve a legal notice to the insurer for claim rejection or delay.",
  "image": "https://www.legalrecovery.in/og-insurance-claim-recovery.png",
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
  "name": "Insurance Claim Recovery Legal Toolkit",
  "image": "https://www.legalrecovery.in/og-insurance-claim-recovery.png",
  "description": "Legal guide for recovering delayed or rejected insurance claims in India. Draft enforceable notices and escalate disputes through Ombudsman and Consumer Commissions.",
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
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  }))
};

export default function InsuranceClaimRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    {
      id: "claim-rejection-crisis",
      title: "The Insurance Claim Crisis: Delays, Rejections, and Contractual Gaps",
      children: [
        { id: "reality-of-rejection", title: "The Grim Reality of Arbitrary Rejections" },
        { id: "common-excuses-used", title: "Common Excuses Employed by Insurance Providers" }
      ]
    },
    {
      id: "legal-framework",
      title: "Legal and Regulatory Framework Governing Insurance Disputes in India",
      children: [
        { id: "irdai-policy-protection", title: "IRDAI Protection of Policyholders' Interests Regulations" },
        { id: "utmost-good-faith", title: "The Doctrine of Uberrimae Fidei and Section 45" }
      ]
    },
    {
      id: "escalation-matrix",
      title: "The Step-by-Step Escalation Matrix for Unresolved Claims",
      children: [
        { id: "internal-grievance", title: "Stage 1: Approaching the Nodal and Grievance Officer" },
        { id: "serving-legal-notice", title: "Stage 2: Serving the Formal Legal Notice" }
      ]
    },
    {
      id: "drafting-the-notice",
      title: "Drafting an Enforceable Legal Notice: Core Contents and Strategy",
      children: [
        { id: "essential-elements", title: "Essential Elements to Include in the Notice" },
        { id: "service-rules", title: "Service Rules and Postal Compliance for Insurance Companies" }
      ]
    },
    {
      id: "ombudsman-vs-consumer-court",
      title: "Resolving the Dispute: Insurance Ombudsman vs. Consumer Court",
      children: [
        { id: "comparison-table-anchor", title: "Ombudsman vs. Consumer Commission Comparison Matrix" }
      ]
    },
    {
      id: "evidence-and-proofs",
      title: "Evidence Checklist: Critical Documents Required for Recovery Action"
    },
    {
      id: "case-studies",
      title: "Insurance Claim Recovery Success Stories and Real-World Results"
    },
    {
      id: "faq-section",
      title: "Frequently Asked Questions"
    }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Insurance Claim Recovery", href: "/legal-notice-to-insurance-company-claim-rejection-recovery" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Banner with dark background #111827 and Red accent */}
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Insurance Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice to Insurance Company: <span className="text-[#DC2626]">Claim Rejection Recovery</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover delayed or rejected health, motor, and commercial insurance claims across India. Challenge arbitrary policy exclusions by serving an advocate legal notice to insurers. Assert your legal rights and demand complete settlement within statutory IRDAI timelines.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          {/* 3-Column Layout: TOC, Content, Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Column Sticky TOC */}
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            {/* Middle Column Main Content */}
            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Millions of Indian citizens pay insurance premiums to protect health, vehicles, and businesses. However, genuine insurance claims frequently face arbitrary denials, prolonged delays, or unjust reductions. This guide explains statutory rights protecting policyholders under Indian insurance regulations. Learn how to draft and serve an enforceable advocate legal notice. Discover clear escalation pathways through the Insurance Ombudsman and Consumer Courts.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Policyholders encounter systemic obstacles during hospitalization, motor accidents, or commercial property damage. Insurers often deploy ambiguous exclusions, excessive documentation requests, and bad-faith delays. These bureaucratic tactics aim to reduce corporate liabilities and discourage legitimate claimants. However, Indian consumer laws establish strong protections against arbitrary insurance claim rejections. Policyholders can overturn improper denials by asserting statutory rights through formal advocate notices.
                </p>
              </div>

              {/* Section 1: Claim Rejection Crisis */}
              <section id="claim-rejection-crisis" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Insurance Claim Crisis: Delays, Rejections, and Contractual Gaps
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A wide gap separates policyholder expectations from actual insurance claim settlement practices. Corporate insurers hold immense information and bargaining power over individual consumers. Sales agents promise hassle-free claims, but underwriters enforce strict corporate savings targets. Consequently, insurers frequently reject legitimate claims on technical, superficial, or arbitrary grounds.
                  </p>
                  
                  <h3 id="reality-of-rejection" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Grim Reality of Arbitrary Rejections
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Arbitrary claim rejections violate binding contractual promises made by corporate insurance providers. Health insurance rejections during medical emergencies cause acute financial distress for families. Unpaid motor claims disrupt daily travel and impose unexpected vehicle repair bills. In commercial operations, delayed settlements can push small businesses toward severe insolvency. Insurers often exploit consumer fatigue, expecting policyholders to abandon genuine claims quietly.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Very few Indian consumers challenge claim repudiations through formal legal channels. This low challenge rate encourages insurers to reject valid claims routinely. Insurers assume policyholders lack the resources to sustain formal legal proceedings. However, structured legal notices force insurers to review claims under statutory regulations.
                  </p>

                  <h3 id="common-excuses-used" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Common Excuses Employed by Insurance Providers
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Insurance companies rely on predictable boilerplate excuses to reject or delay claims. In health insurance, providers commonly allege non-disclosure of pre-existing medical conditions. Insurers often raise this defense even when past conditions bear no medical connection. They also dispute hospital billing by alleging charges exceed customary market rates.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Motor and commercial insurers frequently reject claims by citing delayed accident reporting. Insurers claim policyholders failed to report accidents within forty-eight hours. However, courts hold that technical delays cannot defeat verified, genuine accident claims. Insurers also allege licensing irregularities or preexisting vehicle wear to evade liability.
                  </p>
                </div>
              </section>

              {/* Section 2: Legal Framework */}
              <section id="legal-framework" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal and Regulatory Framework Governing Insurance Disputes in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Statutory regulations and binding judicial rulings govern your relationship with insurance providers. The Insurance Regulatory and Development Authority of India (IRDAI) strictly oversees insurer conduct. Furthermore, Consumer Commissions interpret policy documents to protect consumers from unfair trade practices. These statutory frameworks prevent insurance corporations from enforcing arbitrary and oppressive clauses.
                  </p>

                  <h3 id="irdai-policy-protection" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    IRDAI Protection of Policyholders' Interests Regulations
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The IRDAI (Protection of Policyholders' Interests) Regulations, 2017 establish strict claim timelines. Insurers must decide on submitted claims within thirty days of receiving documentation. If insurers initiate fraud investigations, they must conclude inquiries within ninety days. The final claim decision must occur within thirty days after the investigation concludes.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Insurers face mandatory penal interest if they delay settlement beyond statutory periods. The penalty equals two percent above the prevailing bank rate for delayed days. This statutory rule prevents insurance firms from holding policyholder funds for corporate profit.
                  </p>

                  <h3 id="utmost-good-faith" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Doctrine of Uberrimae Fidei and Section 45
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Insurance policies operate under the legal doctrine of Uberrimae Fidei, meaning utmost good faith. This principle requires mutual honesty between policyholders and corporate insurance providers. Insurers cannot exploit minor omissions to evade coverage while collecting annual premium payments. Courts hold insurers strictly accountable to this reciprocal duty of utmost good faith.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 45 of the Insurance Act, 1938 bars questioning life policies after three years. Similarly, IRDAI rules enforce an eight-year moratorium period for health insurance contracts. Once a health policy runs continuously for eight years, it becomes legally incontestable. Insurers cannot repudiate hospital claims using historical medical disclosures, except for proven fraud.
                  </p>
                </div>
              </section>

              {/* Section 3: Escalation Matrix */}
              <section id="escalation-matrix" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Escalation Matrix for Unresolved Claims
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Recovering a disputed claim requires following a structured, legally sound escalation process. Random telephone complaints and uncoordinated emails rarely resolve difficult insurance claim disputes. Approaching external judicial forums prematurely can create avoidable procedural objections and delays. You must build an airtight paper trail through formal internal and legal escalations.
                  </p>

                  <h3 id="internal-grievance" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Stage 1: Approaching the Nodal and Grievance Officer
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The recovery process begins within the insurer's mandatory internal grievance department. Every insurer maintains a designated Grievance Redressal Officer (GRO) at branch and corporate offices. You must file a formal written appeal rebutting the cited rejection reasons. You can escalate unresolved matters directly to the national principal grievance head.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Your appeal must document all incident dates, claim numbers, and hospital bills. The Grievance Redressal Officer has fifteen statutory days to deliver a final decision. Retain all sent emails, dispatch receipts, and delivery confirmations for future legal filings. This record demonstrates that you gave the insurer fair internal opportunity to rectify errors.
                  </p>

                  <h3 id="serving-legal-notice" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Stage 2: Serving the Formal Legal Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the internal grievance cell denies your appeal, you must serve a legal notice. An advocate drafts and issues this formal demand to corporate headquarters and branch offices. The legal notice specifies your contractual rights and sets a strict fifteen-day compliance period. It announces your firm intent to pursue litigation if payment is not cleared.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal advocate notice bypasses junior claim agents and automated customer service bots. It moves your claim file directly to corporate legal and risk management counsel. In-house lawyers assess court exposure, litigation expenses, and potential regulatory sanctions under IRDAI guidelines. Consequently, insurers frequently approve valid claim payouts to avoid expensive litigation in court.
                  </p>
                </div>
              </section>

              {/* Section 4: Drafting the Notice */}
              <section id="drafting-the-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting an Enforceable Legal Notice: Core Contents and Strategy
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Your recovery success depends directly on the legal precision of your demand notice. Generic complaint letters requesting reviews are routinely dismissed by corporate legal departments. A professional notice details the factual timeline, statutory infractions, and binding legal precedents.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice operates as a specialized <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>. It demands the immediate release of your principal claim amount and statutory interest. Furthermore, it claims compensation for severe mental harassment, financial distress, and advocate fees.
                  </p>

                  <h3 id="essential-elements" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Essential Elements to Include in the Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A legally sound notice must clearly detail all fundamental insurance policy parameters. It must state the policyholder name, policy number, sum insured, and valid coverage dates. The notice describes the claim event, including hospitalization admissions, vehicle accidents, or property damages. It presents a point-by-point factual rebuttal dismantling the insurer's stated rejection grounds. Finally, the notice demands full settlement within fifteen days, warning of imminent legal action.
                  </p>

                  <h3 id="service-rules" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Service Rules and Postal Compliance for Insurance Companies
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Serve the legal notice via verified corporate email and registered postal speed post. Address the notice to the insurance company's corporate headquarters and local processing branch. You should also deliver copies to the designated national Grievance Redressal Officer.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Always preserve postal delivery acknowledgments and digital email transmission receipts for court records. These tracking reports prove the insurance company received your formal legal demand notice. Valid delivery proof prevents insurers from claiming lack of notice during subsequent litigation.
                  </p>
                </div>
              </section>

              {/* Section 5: Ombudsman vs. Consumer Court */}
              <section id="ombudsman-vs-consumer-court" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Resolving the Dispute: Insurance Ombudsman vs. Consumer Court
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the insurer fails to settle within fifteen days, you must select your escalation forum. Policyholders can approach the Insurance Ombudsman or file before the Consumer Court.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Complex commercial disputes may require a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link> in regular courts. However, consumer forums offer faster and more accessible relief for individual policyholders. You must observe the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file money recovery case India</Link>. The Limitation Act grants a strict three-year period from the claim rejection date. Filing within this statutory window preserves your right to recover all unpaid dues.
                  </p>

                  <h3 id="comparison-table-anchor" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Ombudsman vs. Consumer Commission Comparison Matrix
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Selecting between the Ombudsman and the Consumer Commission depends on your claim value. The Ombudsman handles claims up to thirty lakhs without any legal fees. The Consumer Court handles unlimited claim values and awards damages for mental agony.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Factor</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Insurance Ombudsman</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Consumer Court (Commission)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Jurisdictional Limit</td>
                          <td className="px-6 py-4">Handles disputes up to 30 Lakhs</td>
                          <td className="px-6 py-4">No upper limit (District, State, National)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Legal Representation</td>
                          <td className="px-6 py-4">Lawyers are not permitted; personal hearing</td>
                          <td className="px-6 py-4">Permits representation through advocates</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Cost of Filing</td>
                          <td className="px-6 py-4">Free of cost for policyholders</td>
                          <td className="px-6 py-4">Nominal court fee based on claim value</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Binding Nature</td>
                          <td className="px-6 py-4">Binding on insurer; optional for customer</td>
                          <td className="px-6 py-4">Binding on both parties, subject to appeal</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Compensation Scope</td>
                          <td className="px-6 py-4">Limited to the claim amount plus basic interest</td>
                          <td className="px-6 py-4">Includes claim amount, interest, mental agony compensation, and legal costs</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Average Resolution Time</td>
                          <td className="px-6 py-4">3 to 6 months</td>
                          <td className="px-6 py-4">12 to 24 months depending on caseload</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Process Map Timeline */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-4">The Claim Recovery Timeline Roadmap</h3>
                  <p className="text-sm md:text-base leading-relaxed mb-6">
                    Follow this structured roadmap to escalate disputed insurance claims through proper legal channels. Each stage strengthens your legal standing and forces the insurer to address claims.
                  </p>
                  
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Timeline Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Step 1: Receipt of Rejection Letter</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Obtain the written rejection letter specifying the exact policy exclusion clauses invoked.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Step 2: Internal Grievance Appeal</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Submit a written grievance appeal and allow the statutory fifteen-day internal review period.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Step 3: Service of Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Serve an advocate legal notice giving the insurer fifteen days to settle dues.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Step 4: Formal Escalation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Approach the Insurance Ombudsman or file a complaint before the Consumer Commission.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 6: Evidence and Proofs */}
              <section id="evidence-and-proofs" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Evidence Checklist: Critical Documents Required for Recovery Action
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Prepare a comprehensive evidentiary file to prevent insurers from dismissing your claim notice. Structured documentation prevents insurance legal representatives from raising technical objections in court proceedings.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you misplaced your policy schedule, gather secondary financial proof of active coverage. Our guide on <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> explains secondary evidence rules. Bank statements showing premium debits prove valid policy subsistence under Indian contract law.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    Carefully assembled documentation establishes that the insurer committed systemic deficiency of service. A solid evidence record makes it difficult for insurers to justify claim delays.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Insurance Recovery Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Policy Schedule and Endorsements:</strong> The original policy document containing terms, conditions, and any rider documents.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Medical Records (For Health Claims):</strong> Discharge summaries, lab reports, pharmacy bills, and doctor certificates detailing your medical condition.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Accident Records (For Motor Claims):</strong> Police First Information Report (FIR), driving license, garage estimates, and surveyor assessment reports.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Correspondence Logs:</strong> All customer service emails, grievance letters, and delivery confirmations sent to the insurer.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Premium Receipts:</strong> Bank statements showing premium debits proving active policy coverage during the claim event.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Case Studies */}
              <section id="case-studies" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Insurance Claim Recovery Success Stories and Real-World Results
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These case summaries illustrate how advocate notices and consumer filings resolve stubborn insurance disputes. Policyholders across India have successfully overturned arbitrary claim rejections and secured rightful settlements.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
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

              {/* Section 8: FAQs */}
              <section id="faq-section" className="scroll-mt-32">
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
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar with Advice Card */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Consult seasoned recovery advocates to challenge wrongful insurance repudiations and delays. We draft and serve enforceable legal notices to secure your insurance payouts.
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

        {/* Modal for initiating payment/advice */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
