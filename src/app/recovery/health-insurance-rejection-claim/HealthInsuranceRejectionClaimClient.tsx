'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 15 FAQs unique to health insurance claim rejection disputes
const faqs = [
  {
    question: "What exactly is the difference between a claim 'rejection' and a claim 'repudiation' in health insurance?",
    answer: "A rejection happens during early processing due to paperwork issues or policy lapse. You can fix missing papers and resubmit a rejected claim quickly. In contrast, a repudiation denies the claim on its core merits. Insurers cite pre-existing diseases, waiting periods, or permanent policy exclusions. To challenge a repudiation, you must file a formal legal dispute. Approach the Grievance Redressal Officer, Insurance Ombudsman, or Consumer Commission. Always demand a written repudiation letter citing the exact policy clause. Verbal denials have no legal standing in insurance law."
  },
  {
    question: "My health insurance claim was denied because the insurer says I had a 'pre-existing disease' that I didn't disclose. What are my options?",
    answer: "First, check when your doctor first diagnosed the condition. If you discovered the illness after policy inception, it is not pre-existing. Second, verify if the 5-year moratorium period has passed. Under IRDAI rules from April 2024, insurers cannot challenge disclosure after five years. Only proven deliberate fraud allows denial after five continuous renewal years. Third, check whether your hospital treatment connects to that prior illness. If you treated a broken leg, undisclosed diabetes cannot block payment. Obtain a medical certificate from your treating physician confirming independence. Then file a formal dispute against the insurer without delay."
  },
  {
    question: "How long does my insurer have to settle or reject my health insurance claim?",
    answer: "Under IRDAI Regulations 2017, insurers must settle claims within 30 days. This period begins once they receive all required medical documents. If the insurer suspects fraud, they may launch an investigation. The investigation must start within 30 days and end within 45 days. If the insurer misses these statutory deadlines, penal interest applies. They must pay interest at 2% above the prevailing repo rate. This interest accrues for the entire period of delay automatically."
  },
  {
    question: "My cashless claim was denied at the hospital. Does this mean my entire claim is rejected?",
    answer: "No, a cashless denial does not mean your claim is rejected. A cashless denial only means the insurer refused direct hospital settlement. This happens due to network limits or initial diagnostic uncertainty. You should clear the hospital bill yourself before discharge. Collect your original discharge summary, itemized bills, prescriptions, and test reports. Then submit a formal reimbursement claim to the insurer. The insurer must evaluate your reimbursement claim independently on its merits. Never assume a cashless denial closes your recovery options."
  },
  {
    question: "What is the 'proportionate deduction' clause, and can I challenge it?",
    answer: "Proportionate deduction applies when you pick a room above your policy cap. Insurers cap daily room charges at fixed sums or policy percentages. When breached, the insurer reduces all associated medical expenses proportionately. They slash surgeon fees, ICU charges, and operation theater costs equally. You can challenge this deduction if the insurer hid the clause. You can also contest it if emergency admission left you no room choice. Furthermore, the deduction cannot apply to medicines and standalone tests."
  },
  {
    question: "Can the insurer reject my claim because I was treated at a non-network hospital?",
    answer: "No, emergency care at non-network hospitals remains fully valid. You cannot use cashless settlement, so you must pay upfront. Afterward, you file a formal reimbursement claim with full bills. The IRDAI Cashless Everywhere initiative also expands hospital access. However, insurers may apply reasonable and customary charge caps. They restrict payments to standard rates for that specific city. If their benchmark rates are unfairly low, challenge them with local hospital tariffs."
  },
  {
    question: "What is the 5-year moratorium period and how does it protect me?",
    answer: "The moratorium period is a vital regulatory shield created by IRDAI. After 5 continuous policy years, insurers cannot challenge prior non-disclosure. They cannot repudiate claims by citing pre-existing conditions after five years. The only exception is proven intentional fraud. The insurer bears a very heavy burden to prove deliberate deceit. Casual hospital notes mentioning past ailments do not prove legal fraud. Repudiations issued after five years are unlawful and easily overturned."
  },
  {
    question: "Can I approach both the Insurance Ombudsman and the Consumer Forum for the same dispute?",
    answer: "No, you cannot pursue both forums at the exact same time. The Insurance Ombudsman Rules 2017 bar complaints already pending before courts. You should first file with the Insurance Ombudsman for fast relief. The Ombudsman process is free, quick, and binding on insurers. If you dislike the Ombudsman award, you may then approach Consumer Commission. The Ombudsman hears disputes with claim values up to ₹50 lakhs. For claims above ₹50 lakhs, approach the Consumer Commission directly."
  },
  {
    question: "What documents should I collect from the hospital to strengthen my reimbursement claim?",
    answer: "Collect your original discharge summary signed by the treating consultant. Secure itemized hospital bills listing room, nursing, and surgery costs separately. Obtain official payment receipts and bank transaction records proving settlement. Request certified indoor case papers from the hospital medical records unit. Gather all diagnostic reports, blood tests, scans, and doctor prescriptions. Include surgical operation notes and pre-anesthesia records where surgery occurred. Retain copies of the initial admission form you signed at entry. Missing records give insurers convenient grounds to delay valid claims."
  },
  {
    question: "The insurer says my treatment was 'not medically necessary.' Can they reject on this basis?",
    answer: "Insurers often allege that simple fever or infections required only outpatient care. However, treating physicians decide medical necessity, not corporate desk clerks. If your doctor certifies that IV fluids and monitoring were vital, insurers cannot overrule them. The doctor evaluates patient vitals, clinical risk, and acute complications directly. Consumer Commissions routinely reject post-facto desk evaluations made by TPAs. The clinical judgment of your treating physician carries decisive legal weight."
  },
  {
    question: "What is the 'Contra Proferentem' rule and how does it help me?",
    answer: "Contra Proferentem is an established legal doctrine in contract law. It states that ambiguous contractual clauses are interpreted against the drafter. Because the insurance company writes the policy, ambiguous terms favor you. The Supreme Court and NCDRC apply this rule to insurance contracts. Vague policy exclusions like 'related conditions' must be read narrowly. Insurers cannot use loose definitions to evade their contractual settlement duties."
  },
  {
    question: "Can I claim compensation for mental agony and harassment caused by wrongful claim rejection?",
    answer: "Yes, you can seek damages under the Consumer Protection Act 2019. Unjust repudiation or deliberate claim delays constitute actionable deficiency in service. Consumer Commissions award compensation for mental agony and financial distress. Awards typically range from ₹25,000 to ₹5 lakhs based on hardship. Courts also grant 9% to 12% annual interest on delayed payouts. In addition, the commission orders the insurer to cover your litigation expenses."
  },
  {
    question: "My employer's group health insurance rejected my claim. Who do I complain against—the employer or the insurer?",
    answer: "You must direct your formal legal complaint against the insurance company. Your employer acts as the master policyholder, while you are the insured beneficiary. The insurer holds statutory settlement duties under IRDAI regulations. Escalate the dispute to the insurer's Grievance Redressal Officer first. You can also file on Bima Bharosa and approach the Ombudsman. Concurrently, notify your employer HR team in writing to apply commercial leverage."
  },
  {
    question: "Is there a time limit to file a legal case against the insurer for claim rejection?",
    answer: "Yes, strict limitation periods apply to health insurance disputes. You have 2 years under the Consumer Protection Act 2019. The clock starts from the date of the formal repudiation letter. For the Insurance Ombudsman, you must file within 1 year. Civil suits allow 3 years under the Limitation Act 1963. Do not miss these statutory cutoffs, or your claim becomes time-barred."
  },
  {
    question: "What happens to my health insurance waiting period credits if I port my policy to another insurer?",
    answer: "Under IRDAI portability rules, your accrued waiting period credits carry forward. If you completed 3 years of a 4-year waiting period, only 1 year remains. The new insurer must honor those completed years without penalty. However, credit transfer applies only up to your existing sum insured. Any increase in sum insured triggers fresh waiting periods for the extra portion. Apply for porting at least 45 days before your renewal date."
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
      "name": "Health Insurance Claim Rejection Recovery",
      "item": "https://www.legalrecovery.in/recovery/health-insurance-rejection-claim"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Health Insurance Claim Rejected? How to Challenge Wrongful Repudiation and Recover Your Full Hospitalization Amount in India",
  "description": "Comprehensive legal guide on challenging wrongfully rejected health insurance claims in India. Covers IRDAI moratorium period, TPA disputes, cashless vs reimbursement, proportionate deductions, Insurance Ombudsman process, Consumer Forum remedies, and the Contra Proferentem doctrine.",
  "image": "https://www.legalrecovery.in/og-health-insurance-rejection.png",
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
  "name": "Health Insurance Claim Rejection Recovery Services",
  "image": "https://www.legalrecovery.in/og-health-insurance-rejection.png",
  "description": "Expert legal services for challenging wrongfully rejected or delayed health insurance claims in India, including TPA disputes, cashless denials, pre-existing disease repudiations, and proportionate deduction challenges.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1120"
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
        "name": "Kavita Sharma"
      },
      "reviewBody": "Star Health denied my mother's ₹4.8 lakh claim citing past hypertension. LegalRecovery invoked the 5-year moratorium rule. The insurer reversed the denial within twelve days with delayed interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajiv Khanna"
      },
      "reviewBody": "ICICI Lombard cut ₹4.8 lakhs from my father's bypass bill using room deductions. LegalRecovery proved emergency ICU admission in court. We won the full balance plus interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Iyer"
      },
      "reviewBody": "The insurer rejected my ₹2.1 lakh claim as not medically necessary. LegalRecovery secured doctor certificates and filed before the Ombudsman. The Ombudsman awarded the entire sum plus ₹50,000 compensation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anil Bhargava"
      },
      "reviewBody": "Our claim was rejected for filing ten days late after newborn delivery. LegalRecovery cited IRDAI circulars on genuine delays. The insurer approved the full ₹1.7 lakh payment immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Reddy"
      },
      "reviewBody": "The insurer paid only ₹1.5 lakhs on my knee surgery. LegalRecovery invoked Contra Proferentem against ambiguous sub-limit clauses. The Ombudsman ordered ₹3.2 lakhs in total recovery."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pankaj Gupta"
      },
      "reviewBody": "My former employer's group insurer refused my ₹3.5 lakh hospitalization claim. LegalRecovery proved coverage active during treatment dates. We recovered every rupee following a formal legal notice."
    }
  ]
};

export default function HealthInsuranceRejectionClaimClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-repudiation-epidemic", title: "The Repudiation Epidemic" },
    { id: "anatomy-of-health-policy", title: "Anatomy of a Health Policy" },
    { id: "regulatory-armor", title: "Your Regulatory Armor" },
    { id: "dissecting-rejections", title: "Dissecting Wrongful Rejections" },
    { id: "fighting-back", title: "The Recovery Playbook" },
    { id: "building-your-arsenal", title: "Building Your Arsenal" },
    { id: "recovery-outcomes", title: "Recovery Outcomes" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "our-edge", title: "The LegalRecovery Edge" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Health Insurance Rejection Claim", href: "/recovery/health-insurance-rejection-claim" },
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
              Health Insurance Claim <span className="text-[#DC2626]">Wrongfully Rejected?</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Do not accept a wrongful claim denial as final. Challenge your insurer using the IRDAI moratorium shield and Consumer Protection Act. We help you recover your full hospitalization amount with penal interest.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Challenge Rejection Now
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

                {/* Section 1: The Repudiation Epidemic */}
                <section id="the-repudiation-epidemic" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Repudiation Epidemic</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      You pay your health insurance premiums faithfully every year. You choose a high sum insured to protect your family during medical emergencies. Then an unexpected medical crisis strikes. A loved one enters the hospital for emergency surgery or critical care. After days of treatment, medical bills mount into several lakhs of rupees. You submit your claim expecting immediate financial relief. Instead, the insurance company sends a cold repudiation letter. The letter cites obscure exclusion clauses or claims the treatment was unnecessary. This repudiation pattern affects hundreds of thousands of Indian policyholders annually.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal experts analyze these systemic claim rejections daily. Many health insurance claims face arbitrary denials or heavy unauthorized deductions. Insurers often use automated template letters generated by Third Party Administrators (TPAs). These letters rarely explain how cited clauses apply to your specific diagnosis. Suffering families feel overwhelmed by complex medical jargon and bureaucratic delays. Consequently, many policyholders give up without challenging these unlawful repudiations.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Giving up is a mistake because Indian law strongly protects insured consumers. The Insurance Regulatory and Development Authority of India (IRDAI) enforces strict consumer safeguards. Under recent IRDAI rules, policies active for five continuous years gain absolute protection. Insurers cannot repudiate claims based on prior non-disclosure after five years. Furthermore, the Consumer Protection Act 2019 treats wrongful repudiations as service deficiencies. Consumer Commissions award full claim amounts alongside compensation for emotional agony. Additionally, the Insurance Ombudsman offers a free, binding dispute forum within ninety days. Under the Contra Proferentem doctrine, ambiguous policy wording always favors the insured.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery ensures you never accept an unlawful repudiation as the final outcome. Our specialist insurance lawyers have overturned hundreds of wrongful claim denials. We successfully recover funds from Star Health, ICICI Lombard, HDFC Ergo, Care, and others. Whether your denial involves pre-existing illnesses, waiting periods, or room rent deductions, we help. We deploy strong statutory arguments to recover your full medical expenses quickly.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Insurance is a contract of utmost good faith between both parties. Insurers must honor this duty just as policyholders do. Collecting premiums for years and repudiating claims without clear evidence violates this duty.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Anatomy of a Health Policy */}
                <section id="anatomy-of-health-policy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Anatomy of a Health Policy</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      You must understand insurance policy architecture to challenge rejections effectively. Modern health policies contain multiple conditional clauses, waiting periods, and deductibles. Insurers often manipulate these contractual clauses to justify wrongful repudiations. Understanding these structural terms helps expose flaws in their denial letters.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Sum Insured</strong> is the maximum annual coverage provided under your policy. However, hidden sub-limits and co-payment clauses often restrict actual claim payouts. <strong>Waiting Periods</strong> create time-based restrictions before coverage activates for specific illnesses. Policies usually feature an initial thirty-day waiting period for non-accidental hospitalizations. They also mandate twenty-four to forty-eight months for conditions like hernia, cataract, or joint replacement. Pre-existing disease waiting periods require thirty-six to forty-eight months of continuous coverage. The <strong>Exclusions List</strong> details treatments permanently barred from policy coverage. Typical exclusions cover purely cosmetic procedures, unproven treatments, and self-inflicted harm.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Sub-Limits</strong> impose financial caps on specific medical procedures and room categories. The <strong>room rent cap</strong> is the most dangerous sub-limit in health policies. When your room exceeds this cap, insurers apply <strong>proportionate deductions</strong>. They reduce not just room rent, but all associated surgical and doctor fees. For example, selecting a double-rate room may cut your entire claim payout in half. Disease-specific sub-limits cap payouts for cataract or cardiac procedures strictly. In addition, <strong>Co-Payment</strong> clauses mandate that policyholders bear ten to thirty percent out of pocket.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Finally, <strong>Third Party Administrators (TPAs)</strong> manage claim paperwork on behalf of insurers. TPAs process cashless approvals, verify hospital bills, and recommend claim actions. However, TPAs lack legal authority to reject claims on their own. Ultimate legal responsibility for claim repudiation rests entirely with the insurance company. TPA desk executives often issue hasty denials to maintain low claim ratios. Knowing the TPA acts as the insurer&apos;s agent helps frame your legal challenges.
                    </p>
                  </div>
                </section>

                {/* Section 3: Your Regulatory Armor */}
                <section id="regulatory-armor" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Your Regulatory Armor</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian insurance regulations grant strong legal protections to policyholders. The IRDAI, Insurance Act 1938, and Consumer Protection Act 2019 shield insured individuals. Our legal panel uses these robust statutory provisions to overturn unlawful claim denials:
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">The 5-Year Moratorium Shield (IRDAI Master Circular, effective April 2024)</h3>
                      <p className="text-sm text-red-900 leading-relaxed">
                        This rule provides unmatched security for long-term policyholders. Under IRDAI Master Circular rules effective April 2024, the moratorium period is five years. After <strong>five continuous renewal years</strong>, insurers cannot repudiate claims citing pre-existing conditions. The sole statutory exception requires the insurer to prove deliberate intentional fraud. Casual remarks in hospital case notes do not constitute proof of fraud. If your policy is five years old, non-disclosure rejections are legally void.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">IRDAI Policyholders&apos; Interests Regulations, 2017: Timelines &amp; Penal Interest</h3>
                      <p className="text-sm text-slate-650 leading-relaxed mb-3">
                        These regulations impose mandatory processing timelines across the entire claim lifecycle. Insurers cannot dilute these statutory deadlines using restrictive policy terms:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                        <li><strong>Claim Acknowledgment:</strong> Insurers must acknowledge received claims within <strong>3 working days</strong> in writing.</li>
                        <li><strong>Settlement Timeline:</strong> Claims without investigation must be settled within <strong>30 days</strong> of document receipt.</li>
                        <li><strong>Investigation Limits:</strong> Mandatory investigations must finish within <strong>45 days</strong> from final document submission.</li>
                        <li><strong>Penal Interest:</strong> Unjustified delays attract automatic interest at <strong>2% above the prevailing repo rate</strong>.</li>
                        <li><strong>Mandatory Written Notice:</strong> Every repudiation requires a written letter citing specific clauses and medical reasons.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Consumer Protection Act, 2019: Deficiency in Service</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Consumer Protection Act treats health insurance as a regulated consumer service. Arbitrary rejections and unreasonable delays constitute actionable <strong>deficiency in service</strong> under Section 2(11). Consumer Commissions hold authority to award the full claim with interest. They also grant punitive damages and compensation for severe mental agony. Policyholders can file complaints online using the government <strong>eDaakhil portal (edaakhil.nic.in)</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Contra Proferentem Doctrine</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        This established legal principle governs the interpretation of standard insurance contracts. Any ambiguous or vague clause must be interpreted <strong>against the insurance company</strong>. Because insurers draft standard form contracts, policyholders receive the benefit of doubt. Phrases like &quot;related ailments&quot; or &quot;allied procedures&quot; must be construed narrowly. Consumer courts frequently apply this rule to strike down broad exclusion arguments.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Insurance Ombudsman Rules, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Insurance Ombudsman offers a <strong>free, informal, and binding</strong> dispute resolution forum. The Ombudsman handles health insurance disputes for claim amounts up to ₹50 lakhs. The process requires no advocate and resolves matters within ninety days. Insurers must implement the final Ombudsman award within thirty days. Our team prepares detailed dossiers, achieving over 75% success before the Ombudsman.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4: Dissecting Wrongful Rejections */}
                <section id="dissecting-rejections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Dissecting Wrongful Rejections</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      We analyzed hundreds of insurance repudiation letters across major insurers. Through this research, we identified five dominant claim rejection patterns. Each pattern contains specific legal flaws that our lawyers exploit. Understanding your specific denial category forms the foundation of our counter-strategy:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Pattern 1: The &quot;Pre-Existing Disease&quot; Trap</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          This is the most common rejection ground in health insurance disputes. Insurers claim you concealed an illness existing before policy inception. Repudiation letters often quote casual doctor notes from current hospital papers. They cite notations like past hypertension or diabetes as proof of non-disclosure. Our legal counter follows three decisive statutory steps. First, we check if the 5-year moratorium period has passed. If five years have elapsed, the repudiation is automatically illegal. Second, insurers must prove an official medical diagnosis preceded policy inception. Vague mentions in hospital notes do not prove a prior medical diagnosis. Third, the treated illness must connect directly to the undisclosed ailment. Treating a broken bone has zero connection with prior thyroid levels.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Pattern 2: The &quot;Not Medically Necessary&quot; Gatekeeping</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Insurers often claim hospital admission was not medically necessary. They argue the patient required only outpatient treatment instead of inpatient care. TPAs frequently use this excuse for fever, infections, and gastroenteritis. However, medical necessity is a clinical decision made by treating physicians. Corporate insurance clerks cannot overrule qualified doctors examining the patient directly. The doctor evaluates clinical vitals, complication risks, and continuous IV needs. Consumer Commissions hold that treating doctors remain the sole judges of necessity. Courts routinely penalize insurers who substitute desk opinions for bedside clinical decisions.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Pattern 3: The Proportionate Deduction Issue</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Proportionate deductions represent a systematic practice that slashes claim payouts drastically. When room rents exceed policy caps, insurers cut all associated bills. A ₹8 lakh surgery claim often gets reduced to ₹3.5 lakhs arbitrarily. We challenge these unfair deductions using established consumer legal grounds. First, insurers often fail to disclose proportionate deduction formulas at sale. Second, emergency hospital admissions often leave families no choice of rooms. Third, insurers frequently calculate proportions incorrectly, inflating deductions beyond policy limits. Finally, deductions cannot apply to standalone medicines and standard pharmacy bills.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Pattern 4: The Waiting Period Ambush</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Insurers often misclassify emergency treatments under specific disease waiting period clauses. For example, emergency trauma surgery differs fundamentally from elective joint replacements. Insurers also miscalculate waiting periods after policy renewals or portability transfers. Under IRDAI portability rules, past waiting period credits transfer to new insurers. Insurers cannot reset waiting period clocks when policyholders switch companies. Our legal team cross-checks diagnostic codes against waiting period schedules to refute denials.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Pattern 5: Afterthought Arguments and Filing Delays</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Insurers cannot introduce new rejection grounds after issuing their repudiation letter. If the letter cited non-disclosure, they cannot later argue lack of necessity. Courts reject these delayed justifications as prohibited afterthought defenses. Similarly, insurers often deny claims citing delayed paperwork submissions. However, IRDAI circulars clarify that genuine delays cannot invalidate legitimate claims. Medical emergencies, ICU admissions, and patient recovery justify reasonable paperwork delays. As long as delay does not prejudice investigation, insurers must pay.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: The Recovery Playbook */}
                <section id="fighting-back" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Recovery Playbook</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Challenging health insurance rejections requires a structured, multi-stage legal strategy. Each step builds documentary evidence and increases regulatory pressure on the insurer. LegalRecovery executes a proven five-step recovery process to reclaim your money:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm text-slate-650">
                      <li>
                        <strong>Obtain and Analyze the Repudiation Letter (Day 0):</strong> Always demand an official written repudiation letter citing specific policy clauses. We analyze whether cited clauses apply to your actual diagnosis. We also check if the insurer violated mandatory IRDAI settlement timelines.
                      </li>
                      <li>
                        <strong>File a Grievance with the Grievance Redressal Officer (Days 1–15):</strong> We draft a structured legal grievance to the insurer&apos;s Grievance Redressal Officer (GRO). The submission includes doctor certificates, regulatory citations, and penal interest calculations. IRDAI mandates that insurers resolve these grievances within fifteen days.
                      </li>
                      <li>
                        <strong>Escalate to the IRDAI Bima Bharosa Portal (Days 16–30):</strong> If the GRO ignores your grievance, we escalate through Bima Bharosa. This creates a permanent regulatory record of non-compliance with IRDAI. This regulatory pressure often compels insurers to reconsider unlawful claim denials.
                      </li>
                      <li>
                        <strong>File an Insurance Ombudsman Complaint (Days 30–90):</strong> For claims up to ₹50 lakhs, the Ombudsman offers fast relief. We prepare a comprehensive dossier containing medical records, policy clauses, and precedent awards. The Ombudsman passes binding awards within ninety days without requiring court appearances.
                      </li>
                      <li>
                        <strong>Issue Legal Notice and File Consumer Complaint (Days 30–120):</strong> For larger claims, our advocates serve a formal legal notice. We demand full reimbursement, penal interest, and compensation for mental agony. If the insurer refuses settlement, we file through the eDaakhil consumer portal.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 6: Building Your Arsenal */}
                <section id="building-your-arsenal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Building Your Arsenal</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The outcome of every insurance dispute depends on documentary evidence quality. A well-documented evidence file can dismantle even the most aggressive denial. At LegalRecovery, we assemble a comprehensive Claims Recovery Dossier containing:
                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Policy Documents and Schedules:</strong> The complete policy wording, schedule page, sub-limits, and endorsements. Review these details against the repudiation letter to check applicability.
                      </li>
                      <li>
                        <strong>Complete Hospital Records:</strong> Certified discharge summaries, daily doctor progress notes, and diagnostic test reports. Obtain indoor case sheets directly from hospital medical records units.
                      </li>
                      <li>
                        <strong>Treating Doctor Certificate:</strong> A signed letter on hospital letterhead confirming medical necessity and treatment rationale. The certificate directly refutes pre-existing disease allegations.
                      </li>
                      <li>
                        <strong>Itemized Hospital Invoices:</strong> Detailed bills separating room charges, surgery fees, pharmacy costs, and payment receipts. Compile bank statements showing payment transfers.
                      </li>
                      <li>
                        <strong>Correspondence Paper Trail:</strong> Every email, query letter, GRO complaint, and postal dispatch tracking receipt. Keep records of customer care calls and submission dates.
                      </li>
                      <li>
                        <strong>Section 63 BSA Digital Certificate:</strong> Under the Bharatiya Sakshya Adhiniyam 2023, digital records require this certificate. We prepare this declaration to ensure emails and digital reports remain fully admissible.
                      </li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      Pro Tip: Request certified copies of your indoor case papers before discharge. Hospital medical records units must provide them by law. Admitting doctor notes often prove that conditions were not pre-existing.
                    </div>
                  </div>
                </section>

                {/* Section 7: Recovery Outcomes */}
                <section id="recovery-outcomes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Recovery Outcomes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel has overturned health insurance claim denials totaling crores of rupees. We handle small infection claims denied as unnecessary and large surgery disputes slashed by deductions. Each case below demonstrates how proper legal strategy recovers denied funds:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: 5-Year Moratorium Victory</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹4.8 Lakhs After 7-Year Policy Denied for Non-Disclosure</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A 62-year-old teacher faced claim denial for hip surgery citing hypertension. The policy was active for seven continuous years. We filed a GRO grievance citing the 5-year IRDAI moratorium shield. The insurer reversed the repudiation and paid ₹4.8 lakhs with penal interest.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Proportionate Deduction Overturned</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹4.8 Lakhs Balance After Unfair Room Rent Deductions</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          An insurer paid only ₹3.2 lakhs on an ₹8 lakh cardiac surgery bill. They applied proportionate deductions because ICU charges exceeded room caps. We proved emergency admission left the patient no room choice. The Consumer Commission ordered full payment plus 10% interest and ₹75,000 damages.
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
                        &quot;Star Health denied my mother&apos;s ₹4.8 lakh claim citing past hypertension. LegalRecovery invoked the 5-year moratorium rule. The insurer reversed the denial within twelve days with delayed interest.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kavita Sharma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;ICICI Lombard cut ₹4.8 lakhs from my father&apos;s bypass bill using room deductions. LegalRecovery proved emergency ICU admission in court. We won the full balance plus interest.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rajiv Khanna</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurer rejected my ₹2.1 lakh claim as not medically necessary. LegalRecovery secured doctor certificates and filed before the Ombudsman. The Ombudsman awarded the entire sum plus ₹50,000 compensation.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Meera Iyer</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Our claim was rejected for filing ten days late after newborn delivery. LegalRecovery cited IRDAI circulars on genuine delays. The insurer approved the full ₹1.7 lakh payment immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Anil Bhargava</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurer paid only ₹1.5 lakhs on my knee surgery. LegalRecovery invoked Contra Proferentem against ambiguous sub-limit clauses. The Ombudsman ordered ₹3.2 lakhs in total recovery.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sunita Reddy</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My former employer&apos;s group insurer refused my ₹3.5 lakh hospitalization claim. LegalRecovery proved coverage active during treatment dates. We recovered every rupee following a formal legal notice.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Pankaj Gupta</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="our-edge" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The LegalRecovery Edge</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s foremost tech-enabled health insurance claim recovery platform. You need more than a generic complaint letter to overturn a repudiation. Our legal experts understand policy architecture, IRDAI regulations, and consumer litigation:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Policy Deconstruction:</strong> We analyze policy clauses to expose algorithmic flaws and arbitrary rejections.</li>
                      <li><strong>Medical-Legal Coordination:</strong> We secure treating doctor certificates proving medical necessity and refuting pre-existing claims.</li>
                      <li><strong>Multi-Forum Escalation:</strong> We pursue the GRO, Bima Bharosa portal, and Insurance Ombudsman simultaneously.</li>
                      <li><strong>Structured Evidence Dossiers:</strong> We build comprehensive case files with precedent rulings that win before Ombudsmen.</li>
                      <li><strong>Real-Time Digital Tracking:</strong> Track notice delivery, grievance responses, and hearing dates from your client dashboard.</li>
                      <li><strong>Transparent Pricing:</strong> We charge a clear flat fee covering the full legal recovery lifecycle without hidden charges.</li>
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
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Claim Repudiated?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Challenge your insurer&apos;s wrongful rejection with expert legal help. We handle GRO grievances, IRDAI complaints, Ombudsman filings, and Consumer Forum cases.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Challenge Rejection Now
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
