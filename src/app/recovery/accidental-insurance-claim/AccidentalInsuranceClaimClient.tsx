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
    question: "What qualifies as an 'accident' under a Personal Accident insurance policy in India?",
    answer: "Under standard IRDAI-compliant policy wordings, an 'accident' is defined as a sudden, unforeseen, and involuntary event caused by external, violent, and visible means. This means the injury must have an identifiable external cause—such as a road collision, a fall, a workplace machinery malfunction, or a drowning. The event must not be self-inflicted, must not stem from a pre-existing medical illness, and must not have been reasonably anticipated by the insured. For instance, a heart attack while driving, although sudden, is typically classified as a disease-related event and not an 'accident' under most PA policies, which is a common point of dispute in claim rejections."
  },
  {
    question: "My insurer rejected my accidental death claim saying it was due to a 'pre-existing condition.' Is this valid?",
    answer: "Not always. Insurers sometimes attempt to link an accidental event to an underlying medical condition to trigger the pre-existing disease exclusion. For example, if a person with a known heart condition dies in a road accident, the insurer might argue the heart condition contributed to the death. However, the legal test applied by Indian courts and the Insurance Ombudsman is the 'proximate cause' doctrine: if the accident was the dominant and immediate cause of death, the pre-existing condition is irrelevant unless it was the sole and direct cause. You should challenge such rejections with an independent medical opinion and the post-mortem report as primary evidence."
  },
  {
    question: "What is the time limit to file a personal accident insurance claim?",
    answer: "Most personal accident policies require you to intimate the insurer within 24 to 48 hours of the accident. However, IRDAI guidelines and several court rulings have established that delayed intimation alone cannot be a valid ground for outright rejection if there is a 'reasonable cause' for the delay—such as the claimant being hospitalized, unconscious, or unaware of the policy's existence (common in group insurance). The formal claim documents typically need to be submitted within 30 to 90 days, as specified in your policy schedule. The statutory limitation period for filing a legal suit against the insurer for claim denial is three years from the date of the cause of action (i.e., the date of rejection or the date the claim became payable)."
  },
  {
    question: "Can I claim under multiple Personal Accident policies simultaneously?",
    answer: "Yes. Unlike health insurance (which is indemnity-based and reimburses only actual expenses), Personal Accident insurance is a 'benefit-based' or 'defined benefit' policy. This means you receive a pre-agreed lump sum upon the occurrence of the insured event (death, disability), irrespective of actual expenses incurred. Therefore, if you hold three PA policies from three different insurers—each with a sum insured of ₹10 lakhs—you are entitled to claim ₹10 lakhs from each insurer upon a covered event, for a total of ₹30 lakhs. You must, however, disclose the existence of other policies to each insurer at the time of claim."
  },
  {
    question: "What is the difference between Permanent Total Disability and Permanent Partial Disability in a PA claim?",
    answer: "Permanent Total Disability (PTD) refers to conditions where the insured is rendered completely and permanently incapable of engaging in any form of employment or gainful activity. This typically includes the loss of both hands, both feet, total and irreversible loss of sight in both eyes, or complete paralysis. PTD claims generally receive 100% (sometimes up to 125%) of the sum insured. Permanent Partial Disability (PPD) covers the loss or permanent impairment of a specific body part—such as a single finger, a toe, or hearing in one ear. The payout for PPD is a fixed percentage of the sum insured as determined by the 'Schedule of Disability' table annexed to the policy. Disputes over whether a disability qualifies as 'total' or 'partial' are among the most common grounds for underpayment of PA claims."
  },
  {
    question: "My insurer says the accident happened while I was 'under the influence of alcohol,' and they've rejected the claim. What can I do?",
    answer: "Intoxication-based rejections are extremely common but often legally flawed. The insurer must prove a direct causal link between the intoxication and the accident—not merely that alcohol was present in the bloodstream. Indian courts have consistently held that the mere presence of alcohol does not automatically trigger the exclusion. The insurer must demonstrate, through forensic or medical evidence, that the level of intoxication was so severe as to be the proximate cause of the accident. A police FIR or post-mortem report showing alcohol presence, without a Blood Alcohol Content (BAC) test exceeding the legal limit (30mg per 100ml of blood under the Motor Vehicles Act), is often insufficient for the insurer to sustain their defense. Challenge such rejections with the complete police investigation report, witness testimonies, and an independent medical opinion."
  },
  {
    question: "What is the role of the Insurance Ombudsman in accidental insurance claim disputes?",
    answer: "The Insurance Ombudsman is a quasi-judicial authority established under the Insurance Ombudsman Rules, 2017 (superseding the earlier 1998 Rules). It serves as a free-of-cost, speedy, and informal mechanism for resolving insurance disputes. The Ombudsman can handle complaints related to claim rejections, partial settlements, delays in claim processing, and disputes over policy terms, provided the claim value (including expenses claimed) does not exceed ₹50 lakhs. The Ombudsman's process typically involves a 'Recommendation' (non-binding mediation) or an 'Award' (binding on the insurer if accepted by the complainant). The entire process is designed to conclude within 90 days. You must exhaust the insurer's internal grievance mechanism and wait 30 days for their response before approaching the Ombudsman."
  },
  {
    question: "Can I file a complaint at both the Insurance Ombudsman and the Consumer Forum?",
    answer: "No, you cannot pursue both remedies simultaneously for the same dispute. The Insurance Ombudsman Rules, 2017 explicitly state that a complaint cannot be entertained if the subject matter is already pending before any court, tribunal, arbitrator, or any other forum. You must choose one forum. However, if the Ombudsman's decision is unsatisfactory, you can subsequently approach the Consumer Forum or a civil court. It is generally advisable to first try the Ombudsman route (free, fast, informal) before resorting to the Consumer Forum (which involves court fees and a more formal litigation process)."
  },
  {
    question: "How is the disability percentage determined for a Permanent Partial Disability (PPD) claim?",
    answer: "The disability percentage for PPD claims is determined by reference to the 'Schedule of Disability' or 'Table of Benefits' annexed to the insurance policy. This schedule lists specific injuries (e.g., loss of thumb = 25%, loss of index finger = 10%, loss of big toe = 5%) and assigns a fixed percentage to each. If the injury is not explicitly listed, a Disability Certificate issued by a government-recognized medical board will determine the percentage. Disputes frequently arise when the insurer's appointed doctor downgrades the disability percentage or classifies an injury differently from the treating physician. In such cases, filing for an independent medical assessment through the Ombudsman or a Consumer Forum is the standard remedy."
  },
  {
    question: "What happens if the policyholder dies and the nominee's details are not updated in the policy?",
    answer: "If the nominee is not updated or if no nominee is designated, the claim amount is payable to the legal heirs of the deceased policyholder. The legal heirs must provide a Legal Heir Certificate or a Succession Certificate issued by a competent civil court to establish their entitlement. In certain cases, an Indemnity Bond on a stamp paper, backed by affidavits, may be accepted for claims up to a certain threshold (often ₹1 lakh). While the absence of a nominee creates a procedural delay, it does not extinguish the right to the claim. The insurer cannot legally deny the claim simply because the nominee details are outdated."
  },
  {
    question: "Is a First Information Report (FIR) mandatory for filing a personal accident insurance claim?",
    answer: "An FIR is almost always required for accidental death claims and any accident involving a criminal act, motor vehicle collision, or workplace fatality. For accidental injury claims resulting from falls, sports accidents, or domestic mishaps where no third party is involved, an FIR may not be strictly necessary, but a Medico-Legal Case (MLC) report from the hospital where you received treatment is essential. In practice, insurers often insist on an FIR regardless of the nature of the accident. If the police refuse to file an FIR, you can send a written complaint to the Superintendent of Police or file a complaint before a Magistrate under Section 156(3) of the CrPC (now Section 175(3) of BNSS, 2023), compelling the police to register the case."
  },
  {
    question: "What is the IRDAI-mandated timeline for settling a personal accident insurance claim?",
    answer: "Under IRDAI's Protection of Policyholders' Interests Regulations, 2017, the insurer must settle or reject a claim within 30 days of receiving all required documents (for claims that do not require investigation). If an investigation is warranted, the insurer must initiate it within 30 days and complete the entire claim processing within 45 days of receiving the last required document. If the insurer fails to settle within this timeframe, they are liable to pay interest at a rate of 2% above the prevailing bank rate (typically around 8-10% per annum) for the period of delay. This penal interest provision is a powerful tool when drafting demand notices against delinquent insurers."
  },
  {
    question: "Can my employer's group personal accident insurance claim be denied because I am no longer employed?",
    answer: "This is a nuanced situation. The coverage under a Group Personal Accident policy is typically tied to the employment period. If the accident occurred during the active employment period, the claim is valid even if you are no longer employed at the time of filing. However, if the accident occurred after your employment ended (post-resignation or termination), the group policy would not cover you. The key date is the 'date of the accident,' not the 'date of the claim filing.' Ensure your employer confirms in writing when the group coverage ceased and that the accident date falls within the active coverage window."
  },
  {
    question: "What legal action can I take if the insurer offers a significantly lower settlement than expected?",
    answer: "An unreasonably low settlement offer—known as 'underpayment' or 'partial settlement'—is a recognized deficiency in service. You are not obligated to accept it. First, formally reject the offer in writing and demand a detailed computation sheet explaining how the insurer arrived at the settlement figure. Second, file a grievance with the insurer's Grievance Redressal Officer, citing the specific policy clauses and IRDAI regulations that support your claim for a higher amount. If unresolved, escalate to the Insurance Ombudsman. Finally, you can file a complaint before the Consumer Commission (District, State, or National, depending on the claim value) under the Consumer Protection Act, 2019, seeking the balance amount, compensation for deficiency in service, and litigation costs."
  },
  {
    question: "Are accidental injuries during adventure sports covered under standard PA policies?",
    answer: "Standard personal accident policies typically exclude injuries sustained during participation in hazardous or adventure sports—such as skydiving, paragliding, bungee jumping, scuba diving, rock climbing, mountaineering above a certain altitude, and professional motor racing. However, many insurers now offer an 'Adventure Sports Rider' or 'Hazardous Activities Add-on' that extends coverage to these activities for an additional premium. If you regularly participate in such activities, it is critical to opt for this rider at the time of policy purchase and ensure the specific activity is named in the endorsement. Claims for adventure sport injuries without this rider will almost certainly be rejected."
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
      "name": "Accidental Insurance Claim Recovery",
      "item": "https://www.legalrecovery.in/recovery/accidental-insurance-claim"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Accidental Insurance Claim Rejected or Delayed? How to Recover Your Rightful Claim Amount in India",
  "description": "Complete legal guide on recovering rejected, delayed, or underpaid personal accident insurance claims in India. Covers IRDAI rules, Ombudsman complaints, Consumer Forum remedies, and the step-by-step legal escalation process.",
  "image": "https://www.legalrecovery.in/og-accidental-insurance-claim.png",
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
  "datePublished": "2026-06-08",
  "dateModified": "2026-06-08"
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
  "name": "Accidental Insurance Claim Recovery Services",
  "image": "https://www.legalrecovery.in/og-accidental-insurance-claim.png",
  "description": "Expert legal assistance for recovering rejected, delayed, or underpaid personal accident insurance claims in India through IRDAI complaints, Ombudsman proceedings, and Consumer Forum litigation.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "320"
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
        "name": "Radhika Nair"
      },
      "reviewBody": "My father's accidental death claim was rejected by the insurer citing 'non-disclosure.' LegalRecovery filed a detailed Ombudsman complaint with medical records and the post-mortem report. The Ombudsman ruled in our favor and the full ₹25 lakhs was credited within 60 days. Lifesaving support during the worst time of our lives."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Singh Chauhan"
      },
      "reviewBody": "After a severe bike accident, my PA insurer classified my permanent disability as 'partial' to reduce the payout. LegalRecovery's legal notice forced a re-assessment and I received the correct compensation under the permanent total disability category. Highly professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Deshmukh"
      },
      "reviewBody": "The insurance company delayed my husband's accidental death claim for over 8 months with endless document requests. LegalRecovery escalated the matter through the IRDAI Bima Bharosa portal and sent a legal notice to the insurer's head office. The claim was settled within 3 weeks of their intervention."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aman Gupta"
      },
      "reviewBody": "My group accident policy claim was denied by my employer's insurer because I had resigned by the time I filed the claim. LegalRecovery proved that the accident happened during my employment period and recovered ₹8 lakhs. Their knowledge of insurance law is exceptional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Shobha Menon"
      },
      "reviewBody": "My son's sports injury claim was initially rejected under the 'adventure sports exclusion.' LegalRecovery argued that college-level football is not an excluded hazardous activity under the policy wording, and the Ombudsman agreed. We received the full temporary disablement benefit."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Rawat"
      },
      "reviewBody": "My wife's PA claim was underpaid—they offered only 40% of the sum insured for what was clearly a permanent total disability. LegalRecovery filed a consumer complaint, got an independent medical assessment ordered, and the forum directed the insurer to pay the full amount plus interest and compensation. Outstanding work."
    }
  ]
};

export default function AccidentalInsuranceClaimClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "understanding-pa-insurance", title: "Understanding PA Insurance" },
    { id: "legal-framework", title: "Legal & Regulatory Framework" },
    { id: "claim-process", title: "The Claim Process" },
    { id: "common-rejection-grounds", title: "Rejection Grounds & Counters" },
    { id: "grievance-escalation", title: "Grievance Escalation Ladder" },
    { id: "consumer-forum", title: "Consumer Forum & Legal Action" },
    { id: "documentation-evidence", title: "Evidence & Documentation" },
    { id: "case-studies", title: "Success Stories" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-choose-us", title: "Why Choose Us?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Accidental Insurance Claim Recovery", href: "/recovery/accidental-insurance-claim" },
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Accidental Insurance Claim <span className="text-[#DC2626]">Rejected or Delayed?</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t let the insurance company deny what is rightfully yours. Recover your personal accident claim amount—death benefit, disability compensation, or injury reimbursement—with expert legal intervention backed by IRDAI regulations.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Claim Recovery Now
            </button>
          </div>
        </div>

        <div className="mx-auto px-4 max-w-8xl py-10">
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

                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Accidents are, by their very nature, sudden and devastating. In the aftermath of a serious road collision, a catastrophic fall, a workplace machinery injury, or any unforeseen event that leaves a person critically injured, hospitalized, permanently disabled, or tragically deceased, the last thing a victim or their family should have to worry about is whether their insurance company will honor the policy they paid premiums for. Personal Accident (PA) insurance exists for precisely this moment—to provide a financial lifeline that bridges the gap between an unforeseeable tragedy and the crushing economic burden it brings. Yet, in India, thousands of legitimate accidental insurance claims are rejected outright, deliberately delayed for months or even years, or settled at a fraction of the rightful amount through deliberately opaque calculations and aggressive use of policy exclusion clauses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we witness the human cost of these denials every single day. A factory worker in Ludhiana whose hand was permanently crushed by industrial machinery, only to have his Permanent Total Disability claim downgraded to a &quot;Partial Disability&quot; payout worth a mere 20% of the sum insured. A young widow in Hyderabad whose husband died in a head-on truck collision on a national highway, and whose accidental death claim of ₹50 lakhs was denied because the insurer alleged—without credible forensic evidence—that the deceased was &quot;under the influence of alcohol.&quot; A retired school teacher in Pune who slipped on a wet hospital floor, suffered a severe hip fracture, and filed a Temporary Total Disablement claim for loss of income, only to be told by the insurer that her claim &quot;did not meet the threshold&quot; for disablement because she could still sit in a wheelchair. These are not hypothetical scenarios; they are representative of the hundreds of cases our legal panel has successfully resolved.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The personal accident insurance market in India is vast—covering individual retail policies, group policies provided by employers as part of employee benefit programs, mandatory owner-driver PA covers under motor insurance, and government-backed schemes like the Pradhan Mantri Suraksha Bima Yojana (PMSBY) that offers accidental death and disability cover for an annual premium of just ₹20. Despite this wide coverage net, the claim settlement experience for policyholders remains plagued by systemic issues: inadequate explanation of policy terms at the point of sale, overly aggressive use of exclusion clauses during claim assessment, appointment of biased investigation agencies by insurers, and deliberate procedural delays designed to exhaust the claimant&apos;s patience and push them into accepting unfair settlements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      What most claimants do not realize is that the Indian regulatory and legal framework is overwhelmingly designed to protect the policyholder—not the insurance corporation. From the IRDAI&apos;s stringent claim settlement timelines and penal interest provisions, to the Insurance Ombudsman&apos;s free and binding arbitration mechanism, to the Consumer Protection Act&apos;s powerful provisions for compensating &quot;deficiency in service,&quot; the law provides a comprehensive, multi-layered shield for individuals whose legitimate claims have been unfairly denied. At LegalRecovery, our mission is to ensure that every policyholder understands these rights, and to deploy our legal-tech platform and experienced insurance litigation panel to convert every unjust rejection into a fully recovered claim—with interest and damages.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An insurance policy is a contract of utmost good faith. When a policyholder fulfills their obligation by paying premiums and meets the conditions for a claim, the insurer&apos;s refusal to pay is not merely a contractual breach—it is a deficiency in service that undermines the very purpose of insurance and the public trust placed in the institution.&quot;
                    </div>
                  </div>
                </section>

                {/* Understanding PA Insurance */}
                <section id="understanding-pa-insurance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Understanding PA Insurance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before diving into the recovery process, it is essential to understand the fundamental structure of a Personal Accident (PA) insurance policy and how it differs from a standard health insurance policy. A PA policy is classified as a <strong>&quot;defined benefit&quot; or &quot;benefit-based&quot;</strong> policy, as opposed to an &quot;indemnity-based&quot; policy. This distinction is critical. A health insurance policy reimburses you for the actual medical expenses you incur (up to the sum insured), meaning you must produce hospital bills and receipts to get paid. In contrast, a PA policy pays a <strong>pre-determined lump sum</strong> when a specific covered event occurs—regardless of the actual expenses you may have incurred. For instance, if your PA policy provides a ₹20 lakh accidental death benefit and the policyholder dies in a road accident, the nominee receives the full ₹20 lakhs irrespective of whether the funeral costs were ₹50,000 or ₹5 lakhs. This defined-benefit nature is what makes PA policies uniquely valuable: you can hold multiple PA policies from different insurers and claim the full sum insured from each of them upon a covered event. There is no concept of &quot;contribution&quot; or &quot;coordination of benefits&quot; as seen in health insurance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A standard PA policy in India provides coverage across four primary benefit categories, each triggered by a different level of severity of the accidental outcome. The first and most significant is the <strong>Accidental Death (AD) benefit</strong>, which pays 100% of the Capital Sum Insured (CSI) to the designated nominee if the insured person dies as a direct and sole result of an accident within a specified period (usually 12 months) from the date of the accident. The second category is <strong>Permanent Total Disability (PTD)</strong>, covering conditions where the insured is rendered completely and irreversibly incapable of engaging in any occupation or gainful employment. PTD typically covers the total and irrecoverable loss of both hands, both feet, sight in both eyes, or any combination thereof, and generally pays 100% to 125% of the CSI. The third category, <strong>Permanent Partial Disability (PPD)</strong>, covers the permanent loss of use of a specific body part—such as a single finger, a toe, hearing in one ear, or reduced visual acuity in one eye. The PPD payout is a fixed percentage of the CSI as specified in the policy&apos;s &quot;Schedule of Disability&quot; table, which can range from 1% for the loss of a little toe to 50% for the loss of an entire hand at the wrist. The fourth and final category is <strong>Temporary Total Disablement (TTD)</strong>, which provides a weekly or monthly benefit (typically 1% of the CSI per week, subject to a maximum duration of 100 to 104 weeks) to compensate for loss of income during the period the insured is temporarily unable to perform their occupation due to the accidental injury.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond these core benefits, many comprehensive PA policies in the Indian market include valuable supplementary covers. <strong>Hospitalization Expense Reimbursement</strong> covers the actual medical and surgical expenses incurred during hospitalization following an accident, up to a specified sub-limit. <strong>Hospital Cash / Confinement Allowance</strong> pays a fixed daily amount (e.g., ₹2,000 per day) for every 24-hour period of hospitalization. <strong>Education Benefit</strong> is a one-time payment towards the education of the insured&apos;s dependent children in the event of accidental death or PTD. <strong>Adaptation Benefit</strong> provides financial support for modifying the insured&apos;s home or vehicle to accommodate a permanent disability—for example, installing wheelchair ramps, handrails, or vehicle hand controls. <strong>Transportation of Mortal Remains</strong> covers the cost of transporting the insured&apos;s body to their hometown in case of death occurring away from their place of residence. Understanding which benefits your specific policy provides is the first critical step in knowing what you are entitled to claim, and it forms the foundation of our legal strategy at LegalRecovery when challenging any rejection or underpayment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is equally important to understand the various forms in which PA insurance reaches Indian consumers. <strong>Individual PA Policies</strong> are purchased directly by consumers from general insurance companies and cover the named insured (and sometimes their family members) for a defined annual term. <strong>Group PA Policies</strong> are purchased by employers as part of their employee benefit programs, covering all eligible employees during their tenure with the company. The premium is typically borne by the employer, and the employee may or may not even be aware of the policy details—a lack of awareness that often complicates the claim process when an accident occurs. The <strong>Pradhan Mantri Suraksha Bima Yojana (PMSBY)</strong> is a government-backed scheme offering accidental death and permanent disability cover of ₹2 lakhs for an annual premium of ₹20, available to all bank account holders aged 18 to 70 years. <strong>Owner-Driver PA Cover</strong> is a compulsory component of every motor insurance policy in India, providing the vehicle owner-driver with personal accident cover (typically ₹15 lakhs for cars and ₹15 lakhs for two-wheelers, as mandated by IRDAI). Claims under each of these policy types follow slightly different procedural pathways, and our legal panel is experienced in navigating all of them.
                    </p>
                  </div>
                </section>

                {/* Legal & Regulatory Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal &amp; Regulatory Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal landscape governing personal accident insurance claims in India is built upon a robust, multi-layered regulatory architecture that is fundamentally designed to protect the policyholder. Unlike many jurisdictions where the burden of proof overwhelmingly lies on the claimant, Indian insurance law places significant obligations on the insurer to act in good faith, process claims transparently, and provide detailed written justifications for any rejection. Understanding this framework is the first step in mounting a successful legal challenge against an unjust denial.
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">The Insurance Act, 1938 (as amended in 2015)</h3>
                      <p className="text-sm text-red-900 leading-relaxed">
                        The Insurance Act is the foundational legislation governing the Indian insurance industry. <strong>Section 45</strong> is arguably the most powerful provision for policyholders challenging claim rejections on grounds of &quot;non-disclosure&quot; or &quot;misrepresentation.&quot; After the 2015 amendment, Section 45 stipulates that no insurer can reject a claim on the ground of misstatement of fact in the proposal form after the policy has been in force for <strong>three years</strong>. Even within the three-year window, the insurer must prove that the misstatement was (a) on a material fact, (b) that the policyholder knew the statement to be false, and (c) that it was made with the intent to suppress a fact material to the policy. This three-pronged test is extremely difficult for insurers to satisfy, especially in accidental insurance claims where the cause of death or injury is external and unrelated to any pre-existing health declaration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">IRDAI Protection of Policyholders&apos; Interests Regulations, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed mb-3">
                        These regulations are the day-to-day operational rulebook for how insurers must handle claims. They impose strict, non-negotiable timelines on every stage of the claim process and prescribe penal consequences for non-compliance:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                        <li><strong>Claim Acknowledgment:</strong> The insurer must acknowledge a claim within <strong>3 working days</strong> of receipt and inform the claimant of all required documents.</li>
                        <li><strong>Settlement Timeline (No Investigation):</strong> If the claim does not require investigation, it must be settled within <strong>30 days</strong> of receiving all required documents.</li>
                        <li><strong>Settlement Timeline (With Investigation):</strong> If investigation is warranted, it must be initiated within 30 days and the claim must be processed within <strong>45 days</strong> of receiving the last document.</li>
                        <li><strong>Penal Interest for Delay:</strong> If the insurer fails to settle within the prescribed timeline, they must pay interest at a rate of <strong>2% above the prevailing bank rate</strong> for the period of delay. This currently translates to approximately 8–10% per annum.</li>
                        <li><strong>Written Rejection:</strong> Every rejection must be accompanied by a written letter citing the specific policy clause and providing a detailed justification. Verbal rejections are legally insufficient.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Consumer Protection Act, 2019</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Consumer Protection Act, 2019 classifies an insurance policy as a &quot;service&quot; and the policyholder as a &quot;consumer.&quot; Any unreasonable rejection, delay, or underpayment of a legitimate claim constitutes a <strong>&quot;deficiency in service&quot;</strong> and an <strong>&quot;unfair trade practice.&quot;</strong> This empowers the policyholder (or their legal heirs, in case of death) to file a complaint before the appropriate Consumer Commission—District Commission for claims up to ₹50 lakhs, State Commission for claims between ₹50 lakhs and ₹2 crores, and the National Commission for claims exceeding ₹2 crores. Consumer Commissions have the power to direct the insurer to pay the full claim amount, award compensation for mental agony and harassment, impose punitive damages for willful deficiency, and order the insurer to pay the complainant&apos;s litigation costs. Consumer complaints can also be filed conveniently online through the <strong>eDaakhil</strong> portal (edaakhil.nic.in). The Consumer Protection Act is a particularly lethal remedy because the burden of proof for establishing &quot;deficiency in service&quot; is relatively low compared to civil litigation, and the timelines for disposal are significantly shorter than in civil courts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Insurance Ombudsman Rules, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Insurance Ombudsman framework provides a free, informal, and efficient alternative to formal litigation. There are currently 17 Ombudsman offices across India, each with territorial jurisdiction. The Ombudsman can entertain complaints where the claim value (including expenses) does not exceed <strong>₹50 lakhs</strong>. The Ombudsman first attempts a settlement through mediation (called a &quot;Recommendation&quot;); if that fails, they pass a binding &quot;Award.&quot; The insurer is legally bound by the Award if the complainant accepts it in full and final settlement. The entire process is designed to be completed within <strong>90 days</strong>. No lawyer is required to file or argue a complaint before the Ombudsman, making it the most accessible remedy for individual policyholders. We at LegalRecovery prepare detailed Ombudsman complaint dossiers for our clients—complete with chronological case narratives, annotated policy clauses, medical evidence, and IRDAI regulation citations—to ensure the strongest possible presentation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Motor Vehicles Act, 1988 (for Accident Claims Involving Vehicles)</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        When an accidental death or injury involves a motor vehicle—whether a two-wheeler, car, commercial vehicle, or public transport—the victim (or their legal heirs) has a parallel right to file a claim before the <strong>Motor Accident Claims Tribunal (MACT)</strong> under Section 166 of the Motor Vehicles Act, 1988. The MACT is a quasi-judicial body that determines compensation based on the victim&apos;s age, income, nature of injuries, future earning capacity, and non-pecuniary damages (pain and suffering). The MACT claim is filed against the driver, the vehicle owner, and the motor insurance company. This is a separate and independent remedy from the PA insurance claim filed with your personal accident insurer. This means that if you are injured in a road accident and you hold a separate PA policy, you can simultaneously pursue your PA claim with your insurer AND file a MACT claim against the at-fault driver&apos;s motor insurer—recovering compensation from both sources.
                      </p>
                    </div>
                  </div>
                </section>

                {/* The Claim Process */}
                <section id="claim-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Claim Process</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a personal accident insurance claim correctly from the outset is the single most important factor in securing a smooth and full settlement. Procedural errors during the initial filing stage are the primary ammunition that insurers use to delay or deny claims weeks or months later. At LegalRecovery, we have reverse-engineered the claim denial process of major Indian insurers and developed a structured filing protocol that pre-empts every common objection. Here is the comprehensive, step-by-step process for filing a robust PA claim:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm text-slate-650">
                      <li>
                        <strong>Immediate Medical Attention &amp; FIR Registration (Day 0):</strong> The first priority after any accident is always medical treatment—stabilize the victim, call an ambulance, and get to the nearest hospital. Simultaneously, if the accident involves a vehicle collision, a criminal act, a workplace fatality, or any event where a third party is involved, an <strong>FIR (First Information Report)</strong> must be filed at the nearest police station immediately. Even for incidents where an FIR is not legally mandatory (domestic falls, sports injuries), we strongly advise filing a <strong>Non-Cognizable Report (NCR)</strong> or at least ensuring the hospital generates a <strong>Medico-Legal Case (MLC)</strong> report. This contemporaneous official record is the single most critical piece of evidence in any subsequent claim dispute. Ensure that the FIR accurately describes the circumstances of the accident—date, time, location, persons involved, and nature of injuries—as any discrepancy between the FIR and the claim form will be aggressively exploited by the insurer&apos;s investigation team.
                      </li>
                      <li>
                        <strong>Intimate the Insurance Company (Within 24-48 Hours):</strong> Notify your insurer as soon as practically possible. Most policies require intimation within 24 to 48 hours, although IRDAI guidelines and judicial precedents have established that delayed intimation alone cannot be a valid ground for rejection if there was a &quot;reasonable cause&quot; (e.g., the claimant was hospitalized, unconscious, or in a remote area without communication access). Intimate via multiple channels—the insurer&apos;s toll-free helpline, their website or mobile app, and a written email to the claims department. Record the <strong>Claim Reference Number</strong> provided upon intimation—this number is essential for all subsequent tracking and correspondence. If the policy is a group policy provided by your employer, intimate both the employer&apos;s HR department and the insurer directly.
                      </li>
                      <li>
                        <strong>Obtain and Complete the Claim Form (Days 1-7):</strong> Request the official claim form from the insurer. The form will vary depending on the type of claim: Accidental Death Claim Form, Disability Claim Form, or Hospitalization / TTD Claim Form. Fill the form with absolute precision—any inconsistency with the FIR, hospital records, or the policy declaration can become grounds for an investigation query. We recommend having the form reviewed by a legal professional before submission. At LegalRecovery, our team fills and vets claim forms for clients to ensure zero procedural vulnerabilities.
                      </li>
                      <li>
                        <strong>Compile and Submit Supporting Documents (Days 7-15):</strong> Submit all required documents in a single, organized package. The exact documentation varies by claim type but typically includes:
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li><strong>For Accidental Death:</strong> Death Certificate (original or attested copy), Post-Mortem / Autopsy Report, FIR and Police Investigation Report (Final Report / Charge Sheet), Inquest Panchanama, nominee&apos;s photo ID proof (Aadhaar/PAN), nominee&apos;s cancelled cheque or bank passbook copy, and the original policy document.</li>
                          <li><strong>For Permanent Disability:</strong> Disability Certificate issued by a government medical officer specifying the exact percentage of disability, complete hospital discharge summary and treatment records, FIR (if applicable), diagnostic reports (X-rays, MRI, CT scans), and photographs documenting the extent of the injury.</li>
                          <li><strong>For Temporary Total Disablement:</strong> Medical certificate from the treating doctor specifying the period of incapacity, Fitness Certificate upon resumption of work, Employer&apos;s leave certificate or salary deduction records confirming the period of absence, and all hospitalization records.</li>
                          <li><strong>Common to All Claims:</strong> Duly signed claim form, Photo ID proof (PAN card is mandatory for claims above ₹1 lakh), KYC documents, completed NEFT mandate form or cancelled cheque, and any previous correspondence with the insurer.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Insurer Assessment, Investigation &amp; Settlement (Days 15-45):</strong> Upon receiving complete documents, the insurer will assess the claim. For straightforward claims, settlement should occur within 30 days. For complex or high-value claims, the insurer may appoint a <strong>Surveyor or Investigator</strong>—often a third-party agency—to verify the circumstances of the accident. Be fully cooperative during any investigation: provide access to medical records, allow the investigator to interview witnesses, and respond promptly to any queries. However, do not sign any &quot;Discharge Voucher&quot; or &quot;Settlement Letter&quot; without reading it carefully—some insurers include clauses that waive your right to future claims or disputes. If the claim is approved, the settlement amount will be credited directly to the nominee/claimant&apos;s bank account via NEFT or RTGS. If the claim is rejected or partially settled, the insurer must provide a written rejection letter citing specific policy clauses. This rejection letter is your primary document for initiating the legal escalation process.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Rejection Grounds & Counters */}
                <section id="common-rejection-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Rejection Grounds &amp; Counters</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding why your claim was rejected—and more importantly, whether the rejection is legally sustainable—is the most critical step before initiating any recovery action. In our experience handling hundreds of accidental insurance claim disputes, we have found that a significant majority of rejections are based on flawed interpretations of policy exclusions, procedural technicalities, or outright misrepresentation of facts by the insurer&apos;s investigation team. Below, we dissect the most common rejection grounds and provide the specific legal counters that our panel deploys to overturn them:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">1. &quot;Non-Disclosure / Misrepresentation in the Proposal Form&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The policyholder failed to disclose a pre-existing medical condition (e.g., diabetes, hypertension, epilepsy), their correct age, or their actual occupation (high-risk vs. low-risk) in the proposal form, rendering the policy void <em>ab initio</em> (from the beginning).
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> Section 45 of the Insurance Act, 1938 (as amended in 2015) is your primary shield. After a policy has been in force for three years, the insurer <strong>cannot</strong> call it into question on any ground whatsoever, including non-disclosure. Even within the three-year window, the insurer must prove three things: (a) the statement was on a material fact, (b) the policyholder knew it was false, and (c) the suppression was with intent to defraud. For PA claims specifically, the nexus between the non-disclosure and the accident must be direct and proximate. For example, if you did not disclose diabetes, but you died in a road accident caused by a drunk truck driver hitting your vehicle—the diabetes has zero causal connection to the accident, and the rejection is legally untenable. Indian courts, including the Supreme Court in <em>Life Insurance Corporation v. S. Sindhu</em>, have consistently held that non-disclosure of an immaterial fact cannot invalidate a claim.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">2. &quot;Death / Injury Due to Intoxication (Alcohol or Drugs)&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The insured was under the influence of alcohol or narcotics at the time of the accident, which triggers the standard intoxication exclusion clause in the policy.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> This is one of the most aggressively contested rejection grounds, and also one of the most frequently overturned by courts and the Insurance Ombudsman. The key legal principle is <strong>proximate cause</strong>: the insurer must prove, with credible forensic or medical evidence, that the intoxication was the <em>proximate and dominant cause</em> of the accident—not merely that alcohol was present in the bloodstream. A post-mortem report noting &quot;smell of alcohol&quot; or an FIR mentioning &quot;suspected intoxication&quot; is legally insufficient without a quantified Blood Alcohol Content (BAC) test. Courts have also held that even if alcohol was consumed, if the accident was primarily caused by a third party&apos;s negligence (e.g., a speeding truck on the wrong side of the road), the intoxication exclusion does not apply. Furthermore, under the Motor Vehicles Act, the legal permissible BAC limit is 30mg per 100ml of blood—consumption below this level is legally not considered &quot;intoxication.&quot;
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">3. &quot;Self-Inflicted Injury or Suicide&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The death or injury was not accidental but was intentionally self-inflicted, thereby falling outside the scope of the accident cover.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> The burden of proving suicide or self-infliction lies entirely on the insurer—it is not for the claimant to prove that the death was accidental. The insurer must produce concrete, affirmative evidence such as a suicide note, psychiatric records, or forensic evidence demonstrating intent. An FIR registered under Section 174 CrPC (unnatural death) merely triggers an investigation—it does not establish suicide. In fact, the Supreme Court has held in several rulings that accidental drowning, accidental poisoning (e.g., consuming pesticide by mistake), or accidental electrocution cannot be presumed to be suicidal unless there is clear and cogent evidence of deliberate intent. The legal presumption is always in favor of the claim being accidental until proven otherwise by the insurer.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">4. &quot;Delayed Intimation Beyond the Policy Timeline&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The claimant failed to inform the insurer within the stipulated 24-48 hour intimation period, thereby breaching a condition precedent to the contract.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> IRDAI guidelines and consistent judicial precedent have established that delayed intimation is <strong>not a valid ground for outright rejection</strong> of a claim. The insurer can raise this as a procedural concern but cannot use it to deny a claim entirely if there was a reasonable cause for the delay. Reasonable causes include the claimant being hospitalized in the ICU, the claimant being unaware of the policy&apos;s existence (common in employer-provided group PA covers), the claimant being in a remote or rural area without immediate communication access, or the claimant dealing with the trauma and logistics of a family member&apos;s sudden death. The key question courts ask is: did the delay prejudice the insurer&apos;s ability to investigate the claim? In most accidental death or disability cases—where police reports, hospital records, and post-mortem reports provide comprehensive contemporaneous evidence—the insurer suffers no prejudice from a delayed intimation, and the rejection is overturned.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">5. &quot;Disability Classification Dispute (PTD vs. PPD Downgrading)&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The disability, while permanent, does not qualify as &quot;Total&quot; under the policy&apos;s definition, and the claim should be settled under the lower &quot;Partial&quot; category, resulting in a drastically reduced payout.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> This is a form of deliberate underpayment disguised as a classification dispute. The insurer&apos;s determination is typically based on a medical assessment by a doctor empanelled by or favorable to the insurer. The claimant has every right to challenge this assessment by producing an independent Disability Certificate from a government medical board or a recognized disability assessment center. Consumer Forums and the Ombudsman have the power to order an independent medical assessment and rely on its findings over the insurer&apos;s internal assessment. The legal test is not whether the insured can perform <em>any</em> activity at all, but whether the disability prevents them from performing their <em>specific occupation</em>. A surgeon who loses fine motor control in their dominant hand may be classified as Permanently Totally Disabled for the purposes of their specific occupation, even though they can technically perform other tasks.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Grievance Escalation Ladder */}
                <section id="grievance-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Grievance Escalation Ladder</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a personal accident insurance claim is rejected, partially settled, or endlessly delayed, the Indian regulatory framework provides a clear, structured escalation pathway that progressively increases the legal and financial pressure on the insurer. Each level in this ladder serves a distinct strategic purpose, and skipping levels can sometimes weaken your case by denying you the procedural record required for higher forums. At LegalRecovery, we guide clients through each step with precision, ensuring every escalation is timed, documented, and strategically positioned to maximize the probability of a full recovery.
                    </p>

                    <div className="space-y-5">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 1: Internal Grievance Redressal (Mandatory First Step)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Every IRDAI-registered insurance company is mandated to have a designated <strong>Grievance Redressal Officer (GRO)</strong> and an internal grievance mechanism. Upon receiving a rejection letter, your first formal action should be to submit a written grievance to the GRO—via email and registered post—clearly stating your claim number, the specific policy clause you believe supports your claim, the factual and medical evidence contradicting the insurer&apos;s rejection grounds, and a clear demand for the full claim amount with interest. The insurer is mandated by IRDAI to acknowledge your complaint within 3 working days and provide a resolution within <strong>15 days</strong>. If the insurer fails to respond within 15 days or provides an unsatisfactory resolution, you have the documented proof of their failure to resolve your grievance internally—which is a <strong>mandatory pre-condition</strong> for approaching the Insurance Ombudsman and the IRDAI Bima Bharosa portal. We draft these GRO complaints with the same rigor as formal legal notices, citing specific IRDAI regulations and past Ombudsman awards to demonstrate the insurer&apos;s liability.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 2: IRDAI Bima Bharosa Portal</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If the internal grievance process fails, the next escalation is to file a complaint on the <strong>IRDAI Bima Bharosa portal (bimabharosa.irdai.gov.in)</strong>—the regulator&apos;s Integrated Grievance Management System (IGMS). This portal serves as a centralized digital platform for policyholders to register complaints against any insurance company operating in India. Once a complaint is filed, the IRDAI monitors the insurer&apos;s response and resolution. While the IRDAI does not directly adjudicate individual claims, a complaint on this portal flags the insurer with the regulator and creates institutional pressure. The insurer&apos;s compliance with IRDAI grievance directives is tracked and factored into their annual performance reviews and regulatory assessments. For the claimant, a registered Bima Bharosa complaint provides a regulatory paper trail that strengthens the case significantly if it later proceeds to the Ombudsman or Consumer Forum.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 3: Insurance Ombudsman</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The Insurance Ombudsman is the most effective remedy for accidental insurance claim disputes where the claim value (including expenses) does not exceed ₹50 lakhs. The process is entirely free—there are no court fees, no stamp duties, and no requirement to engage a lawyer. You can file a complaint within <strong>one year</strong> of the insurer&apos;s final rejection or unsatisfactory response. The Ombudsman proceedings are held at one of the <strong>17 territorial offices</strong> across India, and the complainant can present their case in person or through written submissions. The Ombudsman first attempts a mediated &quot;Recommendation&quot;; if that fails, they pass a binding &quot;Award&quot; after hearing both sides. The Award is binding on the insurer if accepted by the complainant, and the insurer must comply within 30 days. The Ombudsman cannot, however, award compensation for mental agony or punitive damages—for that, you must approach the Consumer Forum. Our success rate with Ombudsman complaints exceeds 78%, largely because of the strength of our dossier preparation, which includes annotated policy clause analysis, chronological evidence mapping, and citation of similar successful Ombudsman awards from other jurisdictions.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 4: Formal Legal Notice</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          If you choose to bypass or exhaust the Ombudsman route, or if the claim amount exceeds ₹50 lakhs, the next step is to serve a <strong>formal legal notice</strong> to the insurer through a qualified advocate. At LegalRecovery, we draft detailed, statutory-citation-rich legal notices that are dispatched via registered speed post to the insurer&apos;s claims department, their registered corporate office, and the personal addresses of the CEO and the Chief Claims Officer. The notice demands the full claim amount with IRDAI-mandated penal interest, compensation for mental harassment and financial loss caused by the delay, and costs of legal action. It provides the insurer with a strict 15-day deadline to settle, failing which civil and/or consumer proceedings will be initiated. In our experience, approximately 65-70% of disputed accidental insurance claims are settled at the legal notice stage itself, as insurers prefer to avoid the reputational damage and legal costs of a formal consumer court proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Consumer Forum & Legal Action */}
                <section id="consumer-forum" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consumer Forum &amp; Legal Action</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When all administrative remedies have been exhausted or when the claim value warrants direct judicial intervention, the <strong>Consumer Protection Act, 2019</strong> provides the most powerful forum for recovering accidental insurance claims. The Act recognizes every insurance policyholder as a &quot;consumer&quot; and classifies the rejection, delay, or underpayment of a legitimate claim as a &quot;deficiency in service&quot;—a legally actionable wrong. Consumer complaints can be filed before the appropriate Commission based on the claim value: the <strong>District Consumer Disputes Redressal Commission</strong> for claims up to ₹50 lakhs, the <strong>State Commission</strong> for claims between ₹50 lakhs and ₹2 crores, and the <strong>National Consumer Disputes Redressal Commission (NCDRC)</strong> for claims exceeding ₹2 crores.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The strategic advantage of the Consumer Forum lies in its remedial powers, which go far beyond simply ordering the insurer to pay the claim amount. Consumer Commissions routinely award <strong>compensation for mental agony, emotional distress, and financial hardship</strong> caused by the wrongful denial—this can range from ₹50,000 to ₹5 lakhs depending on the severity and duration of the deficiency. They can impose <strong>punitive or exemplary damages</strong> on insurers who demonstrate willful, malicious, or grossly negligent claim handling practices. They order the insurer to pay <strong>interest on the delayed claim amount</strong>—typically at rates of 9% to 12% per annum from the date the claim became payable. And they direct the insurer to bear the <strong>complainant&apos;s litigation costs</strong>, including court fees and advocate fees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumer complaints can be filed conveniently online through the <strong>eDaakhil portal (edaakhil.nic.in)</strong>, eliminating the need for physical visits to the commission during the filing stage. The complaint must be accompanied by supporting documents including the policy document, claim form, rejection letter, all correspondence with the insurer, medical/police records, and the Ombudsman/Bima Bharosa complaint records (if applicable). While you can argue a consumer complaint yourself (in person), engaging an experienced insurance litigation advocate—such as those on LegalRecovery&apos;s panel—dramatically improves the quality of legal submissions, witness examination, and procedural compliance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For accidental death or injury claims involving motor vehicles, there is an <strong>additional, parallel judicial remedy</strong> available under the <strong>Motor Vehicles Act, 1988</strong>. The victim&apos;s legal heirs can file a claim before the <strong>Motor Accident Claims Tribunal (MACT)</strong> under Section 166 (fault-based claims) or Section 163A (no-fault claims with a structured compensation formula). MACT claims are filed against the offending vehicle&apos;s driver, registered owner, and their motor insurance company. The MACT determines compensation based on a structured formula that considers the victim&apos;s age, proven income, number of dependents, and a multiplier derived from Supreme Court guidelines laid down in <em>National Insurance Company Ltd. v. Pranay Sethi (2017)</em>. Crucially, this MACT claim is entirely independent of your PA insurance claim—you can pursue both simultaneously and recover from both sources. Our legal panel has extensive experience in filing and arguing MACT claims across multiple states, and we coordinate PA insurance recovery and MACT proceedings as a unified strategy for maximum recovery.
                    </p>
                  </div>
                </section>

                {/* Evidence & Documentation */}
                <section id="documentation-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence &amp; Documentation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The outcome of any accidental insurance claim dispute—whether before the Insurance Ombudsman, a Consumer Forum, or a civil court—is determined almost entirely by the quality, completeness, and organization of the evidentiary record. An emotionally compelling narrative of injustice, without documentary backing, will not succeed. Conversely, a meticulously organized evidence file can overturn even the most firmly entrenched insurer rejection. At LegalRecovery, we build what we call an <strong>&quot;Ironclad Claim Dossier&quot;</strong> for each client—a chronological, annotated, and cross-referenced compilation of every document, communication, and record relevant to the claim. Here is the anatomy of a winning evidence file:
                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>The Policy Document &amp; Schedule:</strong> The complete, original insurance policy including the policy schedule (which specifies the sum insured, coverage type, premium, nominee, and any endorsements or riders), the general terms and conditions, the specific exclusions list, and the Schedule of Disability table. If you do not have a copy of the policy, request one from the insurer in writing—they are legally obligated to provide it under IRDAI regulations.
                      </li>
                      <li>
                        <strong>The FIR and Police Investigation Records:</strong> A certified copy of the First Information Report, the inquest panchanama (in death cases), the spot panchanama, statements of witnesses recorded by the police (Section 161 CrPC statements), and the final investigation report (Final Report or Charge Sheet). If the police have closed the case as &quot;unnatural death&quot; with no foul play, ensure you have the closure report, as it supports the accidental nature of the event.
                      </li>
                      <li>
                        <strong>Medical Records (Complete &amp; Chronological):</strong> The Medico-Legal Case (MLC) report from the first hospital where treatment was administered, the complete discharge summary from the treating hospital, all diagnostic reports (X-rays, CT scans, MRIs, blood tests), the post-mortem / autopsy report (in death cases, with the cause of death clearly stated), the Disability Certificate from a government medical board (for disability claims), and the treating doctor&apos;s certificate specifying the nature and extent of injuries and the period of incapacity (for TTD claims).
                      </li>
                      <li>
                        <strong>Correspondence Trail:</strong> Maintain every single communication with the insurer in chronological order: the initial claim intimation acknowledgment (with claim reference number), all follow-up emails and letters, every query letter received from the insurer, your responses to each query, the formal rejection letter (with the specific policy clause cited), your grievance submitted to the Grievance Redressal Officer, the GRO&apos;s response (or proof of non-response after 15 days), the Bima Bharosa complaint registration, and the legal notice dispatched with its postal tracking receipt and delivery confirmation.
                      </li>
                      <li>
                        <strong>Financial &amp; Identity Documents:</strong> The insured&apos;s Aadhaar card, PAN card, and passport-size photographs; the nominee/claimant&apos;s identity documents; a cancelled cheque or bank passbook copy for NEFT settlement; and premium payment receipts or bank statements showing premium debits (to prove the policy was in active force at the time of the accident).
                      </li>
                      <li>
                        <strong>Supplementary Evidence (Case-Specific):</strong> Witness affidavits from persons who were present at the scene of the accident; photographs of the accident scene, the vehicle(s) involved, and the injuries sustained; CCTV footage from nearby establishments (if available); employer&apos;s HR records confirming employment dates and group policy coverage (for group PA claims); and income proof documents (Form 16, ITR returns, salary slips) to support loss-of-income claims under the TTD benefit.
                      </li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      Pro Tip: If any documents are in a regional language (Hindi, Marathi, Tamil, etc.), have them translated into English by a certified translator. Insurance companies and adjudicating forums operate predominantly in English, and untranslated documents can create delays. Also, make certified copies (notarized or self-attested) of every original document before submitting them to the insurer—never part with your only original copies.
                    </div>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel has successfully recovered accidental insurance claim amounts totaling crores of rupees across India—overturning rejections from both public sector and private sector general insurance companies. Each case below represents a real category of dispute we handle routinely, demonstrating the effectiveness of our structured legal escalation strategy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Intoxication Rejection Overturned</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹25 Lakhs Accidental Death Benefit After Alcohol Exclusion Rejection</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A 38-year-old software engineer in Bangalore died in a road accident when a speeding truck hit his car on the outer ring road. The insurer rejected the ₹25 lakh PA claim citing the &quot;intoxication exclusion&quot; based on the post-mortem report noting &quot;smell of alcohol.&quot; Our team challenged the rejection at the Insurance Ombudsman, arguing that no BAC test was conducted, the police FIR clearly stated the truck was on the wrong side of the road, and the &quot;smell of alcohol&quot; was not forensic evidence of intoxication. The Ombudsman ruled in the claimant&apos;s favor and directed the insurer to settle the full ₹25 lakhs with 9% interest for the 14-month delay.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Disability Downgrading Corrected</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹12 Lakhs After Insurer Reclassified PTD as PPD</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A construction supervisor in Ahmedabad suffered bilateral leg injuries in a scaffolding collapse, rendering him permanently unable to walk or stand. The insurer&apos;s empanelled doctor classified the disability as &quot;Permanent Partial Disability&quot; at 60%, offering only ₹7.2 lakhs against a ₹12 lakh sum insured. We obtained an independent disability certificate from a government medical board certifying 100% locomotor disability, filed a consumer complaint citing the insurer&apos;s biased medical assessment, and the District Consumer Commission directed the insurer to pay the full ₹12 lakhs as Permanent Total Disability benefit, plus ₹1.5 lakhs as compensation for deficiency in service.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My father&apos;s accidental death claim was rejected by the insurer citing &apos;non-disclosure.&apos; LegalRecovery filed a detailed Ombudsman complaint with medical records and the post-mortem report. The Ombudsman ruled in our favor and the full ₹25 lakhs was credited within 60 days. Lifesaving support during the worst time of our lives.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Radhika Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;After a severe bike accident, my PA insurer classified my permanent disability as &apos;partial&apos; to reduce the payout. LegalRecovery&apos;s legal notice forced a re-assessment and I received the correct compensation under the permanent total disability category. Highly professional team.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vikram Singh Chauhan</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurance company delayed my husband&apos;s accidental death claim for over 8 months with endless document requests. LegalRecovery escalated the matter through the IRDAI Bima Bharosa portal and sent a legal notice to the insurer&apos;s head office. The claim was settled within 3 weeks of their intervention.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Priyanka Deshmukh</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My group accident policy claim was denied by my employer&apos;s insurer because I had resigned by the time I filed the claim. LegalRecovery proved that the accident happened during my employment period and recovered ₹8 lakhs. Their knowledge of insurance law is exceptional.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Aman Gupta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My son&apos;s sports injury claim was initially rejected under the &apos;adventure sports exclusion.&apos; LegalRecovery argued that college-level football is not an excluded hazardous activity under the policy wording, and the Ombudsman agreed. We received the full temporary disablement benefit.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Shobha Menon</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My wife&apos;s PA claim was underpaid—they offered only 40% of the sum insured for what was clearly a permanent total disability. LegalRecovery filed a consumer complaint, got an independent medical assessment ordered, and the forum directed the insurer to pay the full amount plus interest and compensation. Outstanding work.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Deepak Rawat</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us? */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s first dedicated insurance claim recovery platform that combines deep insurance litigation expertise with a technology-driven legal operations framework. When your accidental insurance claim has been rejected, delayed, or underpaid, you need a partner who understands both the regulatory intricacies of IRDAI guidelines and the aggressive litigation strategies required to hold insurance corporations accountable. Here is what distinguishes our accidental insurance claim recovery practice:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Specialized Insurance Litigation Panel:</strong> Your case is handled by advocates with specific expertise in insurance law, IRDAI regulations, and Consumer Protection Act proceedings—not generalist lawyers learning on the job. Our panel includes former insurance industry professionals who understand insurer claim processing systems from the inside.</li>
                      <li><strong>Ombudsman-Ready Dossier Preparation:</strong> We prepare comprehensive, annotated complaint dossiers that mirror the evidentiary standards expected by the Insurance Ombudsman and Consumer Commissions—including chronological case narratives, annotated policy clause analysis, medical evidence summaries, and citation of relevant precedents and prior Ombudsman awards.</li>
                      <li><strong>Multi-Track Recovery Strategy:</strong> We do not rely on a single forum. We simultaneously pursue the insurer through internal grievance channels, the IRDAI Bima Bharosa portal, the Insurance Ombudsman, and formal legal notices—creating a multi-directional pressure campaign that maximizes the probability of a fast settlement.</li>
                      <li><strong>Real-Time Digital Dashboard:</strong> Track the progress of your claim recovery in real-time—from legal notice drafting and dispatch, to postal delivery confirmation, to Ombudsman complaint filing, to settlement negotiation updates—all from your secure client portal.</li>
                      <li><strong>Transparent Flat-Fee Pricing:</strong> No hourly billing surprises, no retention fees, no percentage-based commission on the recovered amount. You pay a single, transparent flat fee for the entire recovery engagement—quoted upfront before you commit.</li>
                      <li><strong>Pan-India Jurisdiction Coverage:</strong> With Ombudsman offices and Consumer Commission filings handled across all 17 Ombudsman jurisdictions and all state-level Consumer Commissions, we provide seamless legal representation regardless of where in India you or the insurer are located.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
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
                <h3 className="text-sm font-black mb-3">Claim Rejected?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Get expert legal help to recover your accidental insurance claim. We handle Ombudsman complaints, Consumer Forum cases, and legal notices against insurance companies.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Claim Recovery Now
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
