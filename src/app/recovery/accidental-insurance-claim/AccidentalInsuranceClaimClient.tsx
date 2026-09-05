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
    answer: "Under IRDAI rules, an accident is a sudden physical event. It must happen through external, violent, and visible means. The harm must come directly from an event like a crash or fall. It cannot be intentional or self-inflicted. It also cannot come from an existing illness. For example, a heart attack while driving is an internal illness. Insurers treat heart attacks as medical conditions rather than accidents."
  },
  {
    question: "My insurer rejected my accidental death claim saying it was due to a 'pre-existing condition.' Is this valid?",
    answer: "No. Such rejections are often illegal. Insurers must look at the direct cause of death. If an accident caused the death, an old illness cannot stop the payout. For example, a heart patient who dies in a car crash died from physical trauma. You can challenge wrongful rejections using post-mortem reports and doctor records. Consumer courts routinely reject insurer excuses based on unrelated past health issues."
  },
  {
    question: "What is the time limit to file a personal accident insurance claim?",
    answer: "Most policies ask you to notify the insurer within 48 hours. But IRDAI rules say delay alone cannot justify claim rejection. Hospital care, severe trauma, or late knowledge of group cover are valid reasons for delay. You should submit claim forms within 30 to 90 days. Under the Limitation Act, 1963, you have 3 years to file a legal case."
  },
  {
    question: "Can I claim under multiple Personal Accident policies simultaneously?",
    answer: "Yes. You can claim under multiple personal accident policies at the same time. Personal accident plans are fixed-benefit policies, not expense claims. You get the full agreed lump sum upon death or permanent disability. If you hold three policies of ₹10 lakhs each, you can get ₹30 lakhs in total. You only need to disclose all policies when filing your claim."
  },
  {
    question: "What is the difference between Permanent Total Disability and Permanent Partial Disability in a PA claim?",
    answer: "Permanent Total Disability (PTD) means you can no longer work at any job. It covers the loss of both hands, both eyes, or total paralysis. PTD pays 100% to 125% of the sum insured. Permanent Partial Disability (PPD) means losing a specific body part. This includes losing one finger, a toe, or hearing in one ear. Insurers pay PPD based on fixed percentages in the policy chart."
  },
  {
    question: "My insurer says the accident happened while I was 'under the influence of alcohol,' and they've rejected the claim. What can I do?",
    answer: "Insurers must prove alcohol was the direct cause of the crash. Hospital notes mentioning the smell of alcohol do not prove drunkenness. The insurer must produce a lab blood test showing alcohol above legal limits. Under the Motor Vehicles Act, the legal limit is 30 mg per 100 ml. If another vehicle hit you, the alcohol excuse fails. You can overturn this rejection before the Insurance Ombudsman using police reports."
  },
  {
    question: "What is the role of the Insurance Ombudsman in accidental insurance claim disputes?",
    answer: "The Insurance Ombudsman is a free and fast dispute forum for consumers. It handles claim rejections, delays, and disputes up to ₹50 lakhs. The Ombudsman tries mediation first, then issues a binding award. The insurer must follow the Ombudsman award within 30 days. Most cases wrap up within 90 days without needing a lawyer."
  },
  {
    question: "Can I file a complaint at both the Insurance Ombudsman and the Consumer Forum?",
    answer: "No. You cannot file in both forums at the same time. Ombudsman rules bar cases that are already pending in court. You should try the Ombudsman first because it is fast and free. If you are unhappy with the award, you can go to the Consumer Court. You can also go straight to Consumer Court if your claim exceeds ₹50 lakhs."
  },
  {
    question: "How is the disability percentage determined for a Permanent Partial Disability (PPD) claim?",
    answer: "PPD payouts follow the table of benefits in your policy. The table sets a fixed percentage for losing specific body parts. If an injury is not listed, a government medical board assesses the disability. Insurers often try to cut the payout using their own panel doctors. You can challenge unfair medical reports before the Ombudsman or Consumer Court."
  },
  {
    question: "What happens if the policyholder dies and the nominee's details are not updated in the policy?",
    answer: "If nominee records are missing, benefits pass to the legal heirs. The heirs must provide a Legal Heir Certificate or Succession Certificate. For smaller claims, insurers often accept an indemnity bond. A missing nominee creates paperwork, but it does not cancel the claim. Insurers cannot reject an accidental death claim just because nominee details were not updated."
  },
  {
    question: "Is a First Information Report (FIR) mandatory for filing a personal accident insurance claim?",
    answer: "An FIR is usually needed for road crashes, workplace accidents, and unnatural deaths. For home falls or minor mishaps, hospital Medico-Legal Case (MLC) records are enough. If the police refuse to register an FIR, you can complain to a magistrate. Section 175(3) of the BNSS, 2023, empowers magistrates to order an investigation."
  },
  {
    question: "What is the IRDAI-mandated timeline for settling a personal accident insurance claim?",
    answer: "Under IRDAI rules, insurers must settle claims within 30 days of getting all papers. If the insurer opens an inquiry, it must finish within 45 days. Any delay beyond this requires the insurer to pay penal interest. This interest is 2% above the bank rate and runs until full payment is made."
  },
  {
    question: "Can my employer's group personal accident insurance claim be denied because I am no longer employed?",
    answer: "No. Coverage depends on the date of the accident. If the injury happened while you were employed, the claim is valid. Resigning later does not cancel your accrued benefits. The insurer must pay if the accident happened during active service. Ask your HR team for a letter confirming your coverage on the accident date."
  },
  {
    question: "What legal action can I take if the insurer offers a significantly lower settlement than expected?",
    answer: "Reject the low offer in writing and ask for an exact calculation sheet. File a complaint with the company Grievance Officer citing policy terms. If the insurer refuses to pay, take the case to the Insurance Ombudsman. For larger claims, file a case under the Consumer Protection Act, 2019. Consumer courts can award the full claim balance along with damages for harassment."
  },
  {
    question: "Are accidental injuries during adventure sports covered under standard PA policies?",
    answer: "Standard policies exclude risky adventure sports like skydiving or paragliding. However, many insurers sell special adventure riders for an extra fee. If you take part in sports like trekking or racing, buy this rider when taking the policy. Without a rider, claims from high-risk sports will be rejected."
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
      "reviewBody": "The insurer rejected my father's accidental death claim, citing non-disclosure. LegalRecovery filed an Ombudsman complaint backed by autopsy records. The Ombudsman ruled in our favor and recovered ₹25 lakhs within 60 days."
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
      "reviewBody": "After a motorcycle crash, the insurer downgraded my disability rating. LegalRecovery served a legal notice demanding fair reassessment. We secured our full permanent total disability payout right away."
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
      "reviewBody": "The insurance company stalled my husband's claim for 8 months. LegalRecovery stepped in through Bima Bharosa and issued legal notices. The insurer released the full payout within 3 weeks."
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
      "reviewBody": "The insurer denied my group accident claim because I had resigned. LegalRecovery proved the accident occurred while I was employed. We recovered the full ₹8 lakh payout."
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
      "reviewBody": "The insurer rejected my son's football injury under adventure sports rules. LegalRecovery showed that college sports are not excluded activities. The Ombudsman awarded the full temporary disability benefit."
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
      "reviewBody": "The insurer paid only 40% of my wife's permanent disability claim. LegalRecovery filed a Consumer Court case with government medical reports. The court awarded the full sum plus interest and damages."
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
    { id: "introduction", title: "Introduction to Accidental Insurance Claim Disputes" },
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
              Insurance companies often deny genuine accident claims without legal grounds. You have the right to recover your full death or disability benefits. We enforce IRDAI rules and handle Ombudsman and court cases to recover your money.
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

                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction to Accidental Insurance Claim Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Accidents happen without warning and cause sudden financial stress for families. Personal accident insurance acts as a vital safety net during such crises. It covers injuries, hospital stays, disability, and accidental death. Yet insurers often reject genuine claims on flimsy grounds. Companies delay payouts or cut claim amounts using confusing policy terms.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel sees these unfair claim denials every day. A factory worker had his total disability claim cut to just 20% after a hand injury. A widow was denied a ₹50 lakh death claim when the insurer falsely claimed alcohol use. Another person suffered hip fractures and was denied temporary disability benefits. Our team stepped in and overturned these rejections through formal legal channels.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      India has a large accident insurance market. Policies include retail plans, group covers from employers, and motor accident covers. Millions of citizens also hold schemes like the Pradhan Mantri Suraksha Bima Yojana. Despite these policies, claimants face major roadblocks when filing claims. Insurers use aggressive exclusions and biased investigators to avoid payouts. Delays force families to accept unfair discounts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian insurance laws protect policyholders against arbitrary claim denials. IRDAI rules mandate strict settlement deadlines and penal interest for delays. The Insurance Ombudsman offers a free forum to resolve disputes quickly. The Consumer Protection Act, 2019, penalizes bad insurance service. Our platform helps families recover their rightful accident claims with interest.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An insurance policy is a contract of utmost good faith. Denying valid claims breaches that duty and violates consumer rights under Indian law.&quot;
                    </div>
                  </div>
                </section>

                {/* Understanding PA Insurance */}
                <section id="understanding-pa-insurance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Understanding PA Insurance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A personal accident policy is a fixed-benefit contract. It works differently from standard health insurance. Health insurance pays back actual hospital bills up to the sum insured. In contrast, personal accident insurance pays an agreed lump sum. The payout arrives once the accident occurs. Hospital bills do not limit the payout. You can hold multiple accident policies and claim full payouts from each. The rule of contribution does not apply to personal accident covers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A good accident policy covers four main benefits. Accidental Death pays 100% of the sum insured directly to the nominee. Permanent Total Disability (PTD) covers complete loss of work capacity, like losing both eyes or limbs. PTD pays 100% to 125% of the cover amount. Permanent Partial Disability (PPD) covers specific losses like a finger, toe, or hearing. Payouts follow a fixed percentage table in the policy. Temporary Total Disablement provides weekly cash support while you recover from injuries.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many accident policies also offer extra riders and welfare benefits. Hospital cash allowance gives daily cash support during hospital stays. Medical expense covers pay for immediate trauma care. Education benefits support the school fees of dependent children after fatal accidents. Home change benefits help modify houses for wheelchair access. Transportation benefits pay the cost of moving mortal remains. Reviewing your policy schedule reveals the exact benefits you can claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Personal accident covers come through several common channels. Retail policies are bought directly from insurance firms. Employer group policies protect staff during active service. The Pradhan Mantri Suraksha Bima Yojana offers low-cost accidental death cover through banks. Motor policies mandate owner-driver accident cover across India. Each policy type has clear rules for claim recovery.
                    </p>
                  </div>
                </section>

                {/* Legal & Regulatory Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal &amp; Regulatory Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian insurance law gives strong protection to consumers against unfair company practices. The rules place strict duties on registered insurance firms. Insurers must act in good faith and back every rejection with solid proof. Knowing your legal remedies helps overturn unfair claim denials.
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">The Insurance Act, 1938 (as amended in 2015)</h3>
                      <p className="text-sm text-red-900 leading-relaxed">
                        Section 45 gives strong protection against claim rejections for non-disclosure. After three years from policy issue, an insurer cannot dispute past health disclosures. Within three years, the insurer must prove intentional fraud. The hidden fact must have a direct link to the accident. An old health issue cannot void a claim caused by an external crash.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">IRDAI Protection of Policyholders&apos; Interests Regulations, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed mb-3">
                        These regulations set clear rules and timelines for claim settlements:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                        <li><strong>Claim Acknowledgment:</strong> Insurers must acknowledge every claim within 3 working days.</li>
                        <li><strong>Settlement Without Investigation:</strong> Straightforward claims must be settled within 30 days of receiving all papers.</li>
                        <li><strong>Settlement With Investigation:</strong> Inquiries must conclude within 45 days.</li>
                        <li><strong>Penal Interest for Delay:</strong> Insurers must pay bank rate plus 2% interest for any delay.</li>
                        <li><strong>Written Rejection:</strong> Rejections must be in writing and cite exact policy clauses.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Consumer Protection Act, 2019</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Consumer Protection Act protects policyholders as consumers. Unfair claim rejections count as a deficiency in service. You can file a case before the District Consumer Commission for claims up to ₹50 lakhs. State and National Commissions handle larger dispute amounts. Consumer courts can award the full claim sum, plus interest and damages for mental agony. You can also file your case online through the eDaakhil portal.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Insurance Ombudsman Rules, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Insurance Ombudsman offers an easy and free path to resolve disputes. Seventeen regional offices operate across India. The Ombudsman handles claims up to ₹50 lakhs. Hearings are informal and do not require a lawyer. The Ombudsman tries mediation first and issues an award within 90 days. An Ombudsman award is legally binding on the insurance company.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Motor Vehicles Act, 1988 (for Accident Claims Involving Vehicles)</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        Road accidents provide an extra path for legal recovery. Victims or families can approach the Motor Accident Claims Tribunal (MACT). Section 166 governs fault claims based on driver negligence. The tribunal awards compensation based on age, income, and family needs. A MACT claim runs independently from your personal accident policy. You can claim benefits from both forums at the same time.
                      </p>
                    </div>
                  </div>
                </section>

                {/* The Claim Process */}
                <section id="claim-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Claim Process</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a personal accident claim properly prevents delay tactics by insurance surveyors. Insurers look for minor mistakes to reject valid claims. Follow this clear step-by-step roadmap to protect your rights:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm text-slate-650">
                      <li>
                        <strong>Medical Care &amp; FIR Registration (Day 0):</strong> Get medical care immediately after any accident. File an FIR for road crashes or workplace accidents. For home falls or minor mishaps, get a Medico-Legal Case (MLC) report from the hospital. The police record must state the exact date, time, and facts of the accident.
                      </li>
                      <li>
                        <strong>Notify the Insurance Company (Within 24-48 Hours):</strong> Inform the insurance company about the accident within 24 to 48 hours. Early notice opens your claim file. Courts hold that hospital care justifies a reasonable reporting delay. Send notice by email, mobile app, and phone. Always save your claim reference number.
                      </li>
                      <li>
                        <strong>Fill the Claim Form (Days 1-7):</strong> Get the claim form for your specific claim category. Pick the right form for death, disability, or hospital costs. Fill in every box accurately to match your medical and police papers. Inaccurate entries create avoidable roadblocks. Our legal team reviews claim forms before submission.
                      </li>
                      <li>
                        <strong>Submit Supporting Documents (Days 7-15):</strong> Gather all required papers into an indexed folder:
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li><strong>For Accidental Death:</strong> Death certificate, autopsy report, police FIR, inquest report, and nominee KYC papers.</li>
                          <li><strong>For Permanent Disability:</strong> Government medical board disability certificate, hospital discharge summary, and test scans.</li>
                          <li><strong>For Temporary Disablement:</strong> Doctor rest certificate, employer leave records, and salary deduction slips.</li>
                          <li><strong>Common to All Claims:</strong> Signed claim form, PAN card copy, and cancelled bank cheque.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Assessment &amp; Settlement (Days 15-45):</strong> The insurer checks documents and may appoint an investigator. Cooperate with the investigator and keep copies of all papers you hand over. Never sign blank settlement vouchers without legal advice. Approved payouts must go directly to your bank account. If the insurer denies the claim, demand a written rejection letter.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Rejection Grounds & Counters */}
                <section id="common-rejection-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Rejection Grounds &amp; Counters</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Knowing common insurer rejection arguments helps build a strong legal defense. Most claim denials rely on narrow clause readings or unverified investigator notes. Our legal team uses binding court rulings to overturn unfair rejections:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">1. &quot;Non-Disclosure in the Proposal Form&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The insurer claims the policyholder hid past illnesses in the proposal form.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> Section 45 of the Insurance Act protects policies older than three years. Insurers cannot question old disclosures after three continuous years. Also, insurers must prove a direct link between the illness and the crash. A lifestyle disease cannot cause a highway collision. Courts routinely strike down rejections that lack a causal link.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">2. &quot;Death or Injury Due to Alcohol&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The insurer claims the insured person was drunk during the accident.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> The insurer must prove alcohol caused the crash. Hospital notes mentioning alcohol smell do not prove drunkenness. The insurer must produce a lab blood test showing alcohol above legal limits. The Motor Vehicles Act permits up to 30 mg of alcohol per 100 ml of blood. If another vehicle caused the crash, the alcohol excuse fails.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">3. &quot;Self-Inflicted Injury or Suicide&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The insurer claims the death was intentional rather than accidental.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> The burden of proving suicide rests on the insurance company. Insurers must provide clear forensic proof or suicide notes. A routine unnatural death police file does not prove suicide. Indian law presumes an accident rather than suicide. Courts reject mere guesswork in drowning or fall cases.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">4. &quot;Late Notification Beyond Policy Deadlines&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The insurer rejects the claim because it was reported past the policy deadline.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> IRDAI circulars state that delay alone cannot justify claim rejection. Hospital care, severe trauma, or remote locations are valid reasons for delay. The insurer must prove that the delay harmed its ability to verify the accident. Police papers and hospital records preserve evidence regardless of notification dates.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">5. &quot;Disability Downgrading (PTD vs PPD)&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> The insurer downgrades a total disability claim to a lower partial disability bracket.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> Insurers often rely on their own doctors to cut payouts. Claimants have the right to submit a government medical board certificate. Consumer courts favor official medical boards over insurance panel doctors. The law checks whether the injury ended the person&apos;s ability to do their job. Courts award full total disability when professionals lose core work skills.
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
                      Follow a structured path to compel the insurer to pay your claim. Each step increases legal and regulatory pressure on the company. Skipping steps can weaken your case in consumer court. Our legal team guides you through every stage:
                    </p>

                    <div className="space-y-5">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 1: Internal Grievance Redressal (Mandatory First Step)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Every insurer must have a Grievance Redressal Officer (GRO). Send a written complaint to the GRO pointing out all factual errors. Attach medical papers, police reports, and relevant policy terms. IRDAI requires the insurer to resolve grievances within 15 working days. A rejection or silence from the GRO allows you to escalate to higher forums.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 2: IRDAI Bima Bharosa Portal</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Escalate unresolved claims to the IRDAI Bima Bharosa online portal. The regulator monitors company response times and tracks open complaints. Filing a complaint creates compliance pressure on the insurer. These records provide valuable evidence for the Insurance Ombudsman later.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 3: Insurance Ombudsman</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The Insurance Ombudsman offers a free and efficient forum across India. You can file a complaint within one year of receiving the insurer&apos;s final rejection. The Ombudsman resolves claims up to ₹50 lakhs across 17 regional offices. The process does not require court fees or lawyers. An award from the Ombudsman binds the insurer within 30 days.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 4: Formal Legal Notice</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Serve a formal legal notice through an advocate if grievances fail. We send notices by registered post and email to company directors and heads of legal. The notice demands full payment with interest within 15 days. Most insurers settle legitimate claims at this point to avoid court cases.
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
                      The Consumer Protection Act, 2019, provides a strong court remedy for insurance recovery. Policyholders are protected consumers, and wrongful claim rejection is a deficiency in service. Claimants can file cases before District Consumer Commissions for disputes up to ₹50 lakhs. State and National Commissions handle larger claim amounts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumer courts have wide powers to grant relief. Courts routinely award compensation for mental agony and financial hardship. Insurers must pay interest of 9% to 12% per year on delayed claims. Consumer courts can also penalize insurers for gross negligence and award legal costs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      You can file consumer complaints online using the eDaakhil portal. The filing needs policy papers, rejection letters, medical records, and past emails. Working with experienced insurance advocates ensures strong legal pleadings and faster hearings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Road accident victims can also seek relief under the Motor Vehicles Act, 1988. Claimants can file a claim petition before the Motor Accident Claims Tribunal (MACT). Section 166 covers claims based on driver fault and vehicle liability. MACT compensation runs alongside private personal accident insurance. Claimants can recover money from both forums without conflict.
                    </p>
                  </div>
                </section>

                {/* Evidence & Documentation */}
                <section id="documentation-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence &amp; Documentation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Solid documentation is the key to winning any personal accident claim dispute. Courts rely on written records rather than verbal statements. Our team compiles an organized dossier to counter insurer rejections:
                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Policy Document &amp; Schedule:</strong> Policy schedule, terms, riders, and disability benefit tables.
                      </li>
                      <li>
                        <strong>Police Records:</strong> Certified FIR copy, spot panchanama, witness statements, and final police report.
                      </li>
                      <li>
                        <strong>Medical Records:</strong> MLC certificates, hospital discharge summaries, post-mortem reports, and disability certificates.
                      </li>
                      <li>
                        <strong>Correspondence Trail:</strong> Claim submission receipts, insurer query letters, replies, and rejection notices.
                      </li>
                      <li>
                        <strong>Identity &amp; Bank Papers:</strong> Identity cards, nominee KYC proofs, bank passbook copies, and premium receipts.
                      </li>
                      <li>
                        <strong>Extra Evidence:</strong> Accident photos, witness statements, CCTV clips, employer letters, and tax returns.
                      </li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      Pro Tip: Translate local language police papers into English before submission. Keep certified copies of all papers and never part with original records.
                    </div>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel has recovered accident claim payouts from top insurers. We resolve tough claim rejections across India:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Intoxication Rejection Overturned.</span>
                        <h3 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹25 Lakhs Death Benefit After Alcohol Exclusion Rejection.</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software engineer died in a highway crash with a truck. The insurer rejected the claim, citing alcohol smell in autopsy notes. We proved that police performed no chemical blood tests. Police records confirmed the truck driver was on the wrong side of the road. The Insurance Ombudsman ordered full payment of ₹25 lakhs with interest.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Disability Downgrading Corrected.</span>
                        <h3 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹12 Lakhs After Insurer Reclassified Total Disability.</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A supervisor suffered spinal injuries when scaffolding collapsed. The insurer cut his total disability claim to a 60% partial claim. We submitted an independent government medical board certificate confirming total disability. The Consumer Court ordered payment of the full ₹12 lakhs plus compensation.
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
                        &quot;The insurer rejected my father&apos;s accidental death claim, citing non-disclosure. LegalRecovery filed an Ombudsman complaint backed by autopsy records. The Ombudsman ruled in our favor and recovered ₹25 lakhs within 60 days.&quot;
                      </p>
                      <h3 className="font-extrabold text-xs text-slate-900">— Radhika Nair</h3>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;After a motorcycle crash, the insurer downgraded my disability rating. LegalRecovery served a legal notice demanding fair reassessment. We secured our full permanent total disability payout right away.&quot;
                      </p>
                      <h3 className="font-extrabold text-xs text-slate-900">— Vikram Singh Chauhan</h3>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurance company stalled my husband&apos;s claim for 8 months. LegalRecovery stepped in through Bima Bharosa and issued legal notices. The insurer released the full payout within 3 weeks.&quot;
                      </p>
                      <h3 className="font-extrabold text-xs text-slate-900">— Priyanka Deshmukh</h3>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurer denied my group accident claim because I had resigned. LegalRecovery proved the accident occurred while I was employed. We recovered the full ₹8 lakh payout.&quot;
                      </p>
                      <h3 className="font-extrabold text-xs text-slate-900">— Aman Gupta</h3>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurer rejected my son&apos;s football injury under adventure sports rules. LegalRecovery showed that college sports are not excluded activities. The Ombudsman awarded the full temporary disability benefit.&quot;
                      </p>
                      <h3 className="font-extrabold text-xs text-slate-900">— Shobha Menon</h3>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurer paid only 40% of my wife&apos;s permanent disability claim. LegalRecovery filed a Consumer Court case with government medical reports. The court awarded the full sum plus interest and damages.&quot;
                      </p>
                      <h3 className="font-extrabold text-xs text-slate-900">— Deepak Rawat</h3>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us? */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery combines experienced insurance advocates with an easy digital case tracker. We help claimants overturn wrongful rejections and recover accident payouts:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Dedicated Insurance Lawyers:</strong> Our advocates focus on IRDAI rules and consumer court litigation.</li>
                      <li><strong>Ready-to-File Dossiers:</strong> We build well-organized evidence dossiers for the Ombudsman and Consumer Court.</li>
                      <li><strong>Multi-Track Recovery:</strong> We run internal complaints, Bima Bharosa filings, Ombudsman petitions, and legal notices together.</li>
                      <li><strong>Live Digital Tracking:</strong> Track your claim, legal notices, and court dates from our secure portal.</li>
                      <li><strong>Clear Upfront Fees:</strong> We charge transparent flat fees with no hidden costs or percentages.</li>
                      <li><strong>Pan-India Reach:</strong> Our panel handles cases across all 17 Ombudsman offices and state commissions.</li>
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
                  Recover your rejected accident insurance claim with expert legal help. We draft legal notices and handle Insurance Ombudsman and Consumer Court cases.
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
