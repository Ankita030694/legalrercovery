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
    answer: "Under standard IRDAI guidelines, an accident is a sudden and unforeseen physical event. It must occur through external, violent, and visible means. The injury must result directly from an identifiable event like a crash or fall. It cannot be intentional, self-inflicted, or caused by a pre-existing medical disease. For instance, a heart attack while driving represents an internal medical illness. Therefore, insurers classify heart failures as disease-related events rather than accidental injuries."
  },
  {
    question: "My insurer rejected my accidental death claim saying it was due to a 'pre-existing condition.' Is this valid?",
    answer: "No, such rejections are often invalid under Indian insurance jurisprudence. Insurers must apply the established proximate cause doctrine to all claims. If an accident was the dominant cause of death, prior illnesses cannot bar recovery. For example, heart patients dying in highway collisions suffered fatal physical trauma. You should challenge arbitrary denials using autopsy reports and independent doctor certificates. Consumer Commissions consistently reject insurer attempts to blame unrelated pre-existing ailments."
  },
  {
    question: "What is the time limit to file a personal accident insurance claim?",
    answer: "Most policies ask claimants to intimate the insurer within forty-eight hours. However, IRDAI rules clarify that delays alone cannot justify outright rejection. Hospitalization, intensive care, or unawareness of group coverage constitute valid grounds for delay. Formal claim documents must be submitted within thirty to ninety days generally. Under the Limitation Act 1963, you have three years to initiate litigation."
  },
  {
    question: "Can I claim under multiple Personal Accident policies simultaneously?",
    answer: "Yes, you can claim under multiple Personal Accident insurance policies concurrently. Personal Accident insurance functions as a defined-benefit contract, not an expense reimbursement. You receive the agreed lump sum upon death or covered permanent disability. Holding three separate policies with ₹10 lakh coverage yields ₹30 lakhs total. You must simply disclose existing policies to every insurer during claim submission."
  },
  {
    question: "What is the difference between Permanent Total Disability and Permanent Partial Disability in a PA claim?",
    answer: "Permanent Total Disability (PTD) prevents an insured person from engaging in gainful employment. PTD covers the loss of both hands, both eyes, or complete paralysis. PTD claims pay 100% to 125% of the capital sum insured. In contrast, Permanent Partial Disability (PPD) involves the permanent loss of specific body parts. PPD covers injuries like losing one finger, a toe, or partial hearing. Insurers settle PPD claims using percentages fixed in the policy disability schedule."
  },
  {
    question: "My insurer says the accident happened while I was 'under the influence of alcohol,' and they've rejected the claim. What can I do?",
    answer: "Insurers must prove intoxication was the direct proximate cause of the crash. The mere mention of alcohol odor in hospital notes does not prove intoxication. The insurer must provide a laboratory Blood Alcohol Content (BAC) forensic report. Under the Motor Vehicles Act, the legal threshold is 30mg per 100ml. If a speeding third-party truck caused the crash, the alcohol exclusion fails. You can overturn such rejections before the Ombudsman using official police reports."
  },
  {
    question: "What is the role of the Insurance Ombudsman in accidental insurance claim disputes?",
    answer: "The Insurance Ombudsman offers a free, fast, and informal dispute resolution mechanism. It resolves claim rejections, unfair delays, and policy disputes up to ₹50 lakhs. The Ombudsman first attempts conciliation before passing a formal written award. Awards passed by the Ombudsman bind the insurer completely within thirty days. The entire process concludes within ninety days without requiring any private lawyer."
  },
  {
    question: "Can I file a complaint at both the Insurance Ombudsman and the Consumer Forum?",
    answer: "No, you cannot pursue both forums at the exact same time. The Insurance Ombudsman Rules 2017 prohibit entertaining matters already pending before courts. You should explore the Ombudsman forum first because it is quick and cost-free. If the Ombudsman passes an unsatisfactory award, you can approach the Consumer Commission. You can also file directly before Consumer Commissions for claims exceeding ₹50 lakhs."
  },
  {
    question: "How is the disability percentage determined for a Permanent Partial Disability (PPD) claim?",
    answer: "PPD percentages are determined by the policy schedule table of benefits. The schedule assigns specific percentages for distinct physical losses like fingers or limbs. When an injury is unlisted, a government medical board issues a disability certificate. Insurers often try to downgrade disability assessments using their own empanelled doctors. You can challenge biased internal assessments before the Ombudsman or Consumer Court successfully."
  },
  {
    question: "What happens if the policyholder dies and the nominee's details are not updated in the policy?",
    answer: "If nominee records are missing, benefits transfer to the deceased person's legal heirs. Legal heirs must submit a Legal Heir Certificate or Succession Certificate. For smaller claim amounts, insurers often accept an indemnity bond with supporting affidavits. An outdated nominee record creates procedural paperwork but does not extinguish claim rights. Insurers cannot reject accidental death claims solely because nominee records were unrevised."
  },
  {
    question: "Is a First Information Report (FIR) mandatory for filing a personal accident insurance claim?",
    answer: "An FIR is generally mandatory for road collisions, fatal workplace incidents, and unnatural deaths. For domestic falls or sports mishaps without third-party involvement, hospital Medico-Legal Case (MLC) records suffice. If police officers refuse to lodge an FIR, file a formal magistrate complaint. Section 175(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 empowers magistrates to order investigations."
  },
  {
    question: "What is the IRDAI-mandated timeline for settling a personal accident insurance claim?",
    answer: "Under IRDAI Regulations 2017, insurers must settle claims within thirty days of receiving documents. If the insurer launches a fraud investigation, it must complete within forty-five days. Delayed settlements attract mandatory penal interest at 2% above the prevailing bank rate. This penal interest accrues automatically from the document completion date until final payment."
  },
  {
    question: "Can my employer's group personal accident insurance claim be denied because I am no longer employed?",
    answer: "Coverage under employer group policies depends on the exact date of the accident. If the injury occurred during active employment, the claim remains fully payable. Resigning after the accident occurs does not invalidate your accrued claim benefits. The insurer must honor all claims where the accident happened during active service. Request written confirmation from your employer HR confirming your active coverage dates."
  },
  {
    question: "What legal action can I take if the insurer offers a significantly lower settlement than expected?",
    answer: "Reject the unfair offer in writing and demand a detailed computation breakdown. File a formal complaint with the insurer's Grievance Redressal Officer citing policy terms. If the insurer upholds the deduction, escalate the case to the Insurance Ombudsman. For substantial underpayments, file a consumer complaint under the Consumer Protection Act 2019. Consumer Commissions award the remaining claim balance alongside compensation for mental agony."
  },
  {
    question: "Are accidental injuries during adventure sports covered under standard PA policies?",
    answer: "Standard personal accident insurance policies exclude hazardous adventure sports like paragliding or skydiving. However, many insurance companies provide adventure sports riders for an additional premium charge. If you participate in mountaineering or racing, purchase this endorsement at policy inception. Claims arising from high-risk sports without the dedicated rider will face repudiation."
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
      "reviewBody": "The insurer rejected my father's accidental death claim citing non-disclosure. LegalRecovery filed an Ombudsman complaint backed by autopsy records. The Ombudsman ruled in our favor, recovering ₹25 lakhs within sixty days."
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
      "reviewBody": "After a severe motorcycle collision, the insurer downgraded my disability classification. LegalRecovery served a formal legal notice demanding statutory reassessment. We secured the full permanent total disability payout promptly."
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
      "reviewBody": "The insurance company stalled my husband's accidental death settlement for eight months. LegalRecovery intervened through Bima Bharosa and issued legal notices. The insurer released the entire settlement within three weeks."
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
      "reviewBody": "The insurer denied my group accident claim because I had resigned. LegalRecovery proved the accident occurred during my active service period. We successfully recovered the full ₹8 lakh compensation."
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
      "reviewBody": "The insurer rejected my son's football injury under adventure sports exclusions. LegalRecovery demonstrated that collegiate sports are not hazardous exclusions. The Ombudsman awarded the full temporary disablement benefit."
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
      "reviewBody": "The insurer settled only 40% of my wife's permanent disability claim. LegalRecovery filed a Consumer Commission complaint with independent medical board evaluations. The forum awarded the full sum plus interest and damages."
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
              Insurance companies often deny legitimate accident claims without valid legal grounds. You have the right to recover your death or disability benefits. Our legal recovery platform enforces strict IRDAI compliance against unfair claim rejections.
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
                      Accidents strike without warning and trigger sudden severe financial hardship for families. Personal accident insurance serves as an essential financial lifeline during unforeseen tragedies. It covers critical injuries, hospitalization, disability, or unfortunate death of the breadwinner. Unfortunately, insurance companies often reject genuine accidental claims on flimsy grounds. Insurers frequently delay settlements or arbitrarily reduce payouts through opaque policy clauses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel witnesses the human cost of these claim denials daily. A factory worker faced disability downgrading after crushing his hand in machinery. His legitimate total disability claim was reduced to a mere twenty percent. A grieving widow was denied her accidental death claim of fifty lakhs. The insurer falsely claimed alcohol involvement without presenting credible forensic evidence. Another claimant suffered hip fractures and faced rejection for temporary disablement benefits. Our dedicated insurance panel successfully overturned these unjust rejections through regulatory escalation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      India has a massive personal accident insurance market across multiple policy sectors. Coverage spans individual policies, employer group schemes, and mandatory motor accident covers. Millions also hold government-backed policies like Pradhan Mantri Suraksha Bima Yojana. Despite extensive coverage, policyholders encounter systemic hurdles during the claim settlement process. Insurers routinely deploy aggressive exclusions and biased investigators to evade legitimate payouts. Procedural delays force vulnerable claimants to accept unfairly discounted settlement amounts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian insurance regulations strongly protect policyholders against arbitrary claim denials by insurers. IRDAI regulations mandate strict settlement timelines and penal interest for unjustified delays. The Insurance Ombudsman provides a free and binding forum for aggrieved consumers. The Consumer Protection Act 2019 penalizes deficiency in insurance claim service. Our platform helps policyholders secure their full accidental claim settlements with interest.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;An insurance policy is a contract of utmost good faith between parties. Refusing legitimate claims breaches legal duty and constitutes serious deficiency in service.&quot;
                    </div>
                  </div>
                </section>

                {/* Understanding PA Insurance */}
                <section id="understanding-pa-insurance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Understanding PA Insurance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A personal accident policy functions as a defined benefit financial contract. It differs fundamentally from standard health insurance policies based on medical indemnity. Health insurance reimburses actual hospital expenses up to the selected sum insured. In contrast, personal accident insurance pays a predetermined lump sum benefit. The payout is made immediately when a covered accidental event occurs. Hospital bills do not determine the exact payout under accident benefit covers. Claimants can hold multiple accident policies and claim full payouts from each. There is no principle of contribution applicable across separate personal accident policies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A comprehensive accident policy provides coverage across four distinct benefit categories. Accidental death benefit pays one hundred percent of capital sum insured. The payout goes directly to the nominee upon accidental loss of life. Permanent Total Disability covers complete and irreversible loss of working capacity. PTD covers loss of both limbs, sight, or total physical incapacitation. Insurers pay one hundred to one hundred twenty-five percent for PTD. Permanent Partial Disability covers specific losses like a finger, toe, or hearing. Insurers pay fixed percentages based on the contractual disability benefit schedule. Temporary Total Disablement provides weekly financial compensation during medical recovery periods.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Comprehensive accident policies also include valuable supplementary riders and welfare benefits. Hospitalization expense reimbursement covers immediate medical costs resulting from traumatic accidental injuries. Daily hospital cash allowance provides fixed daily stipends during continuous inpatient hospitalization. Education benefits secure the future schooling of dependent children after fatal accidents. Home adaptation benefits fund structural modifications required to accommodate permanent physical disabilities. Transportation cover reimburses expenses for moving mortal remains to the native location. Reviewing your policy schedule clarifies the precise coverage entitlements available for recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Personal accident coverage is distributed through several common commercial and statutory channels. Individual retail policies provide customized coverage purchased directly from general insurance providers. Employers purchase group accident policies to protect active employees during employment tenure. Pradhan Mantri Suraksha Bima Yojana offers affordable accidental death cover through banks. Motor insurance policies mandate compulsory owner-driver personal accident coverage across Indian roads. Each policy category follows specific procedural guidelines during the claim recovery process.
                    </p>
                  </div>
                </section>

                {/* Legal & Regulatory Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal &amp; Regulatory Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian insurance law establishes a robust framework that shields consumers against unfair practices. The statutory architecture imposes strict procedural obligations on all registered insurance companies. Insurers must act in good faith and justify claim rejections with evidence. Understanding statutory remedies is essential for overturning wrongful personal accident claim denials.
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">The Insurance Act, 1938 (as amended in 2015)</h3>
                      <p className="text-sm text-red-900 leading-relaxed">
                        Section 45 provides powerful statutory protection against claim rejections for alleged misrepresentation. After a policy completes three years, the insurer cannot dispute proposal disclosures. Within three years, the insurer must conclusively prove deliberate fraud or material suppression. The suppressed fact must have a direct causal connection with the accident. Unrelated medical disclosures cannot invalidate claims arising from external physical accidental impacts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">IRDAI Protection of Policyholders&apos; Interests Regulations, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed mb-3">
                        The IRDAI Protection of Policyholders Interests Regulations 2017 govern claim settlement procedures. Insurers must adhere strictly to statutory timelines and face mandatory penal consequences:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                        <li><strong>Claim Acknowledgment:</strong> Insurers must formally acknowledge every claim within three working days of receipt.</li>
                        <li><strong>Settlement Timeline (No Investigation):</strong> Insurers must settle straightforward claims within thirty days of receiving all documents.</li>
                        <li><strong>Settlement Timeline (With Investigation):</strong> Insurers must complete investigations and settle claims within forty-five days maximum.</li>
                        <li><strong>Penal Interest for Delay:</strong> Insurers must pay bank rate plus two percent interest for delays.</li>
                        <li><strong>Written Rejection:</strong> Insurers must issue written rejection letters quoting specific contractual exclusion clauses.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Consumer Protection Act, 2019</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Consumer Protection Act 2019 recognizes policyholders as protected consumers under law. Unjust claim rejections or unreasonable delays constitute actionable deficiency in insurance service. Claimants can approach Consumer Commissions having jurisdiction based on pecuniary claim value. District Commissions handle claims up to fifty lakhs with prompt summary trials. State and National Commissions handle larger dispute values across higher financial thresholds. Consumer courts award the full claim amount alongside compensation for mental agony. Aggrieved claimants can file their consumer complaints online through the eDaakhil portal.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Insurance Ombudsman Rules, 2017</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        The Insurance Ombudsman offers an accessible and free forum for resolving disputes. Seventeen regional Ombudsman offices operate across India to address individual insurance grievances. The Ombudsman adjudicates accidental insurance claim disputes valued up to fifty lakhs. Proceedings involve informal hearings without the mandatory requirement of engaging external advocates. The Ombudsman first attempts conciliation and then passes an award within ninety days. An Ombudsman award becomes legally binding on the insurer upon claimant acceptance.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">The Motor Vehicles Act, 1988 (for Accident Claims Involving Vehicles)</h3>
                      <p className="text-sm text-slate-650 leading-relaxed">
                        Accidents involving motor vehicles provide an additional independent statutory avenue for recovery. Victims or legal heirs can approach the Motor Accident Claims Tribunal. Section 166 of the Motor Vehicles Act 1988 governs fault-based motor claims. The tribunal calculates substantial compensation based on age, income, and family dependency. A MACT claim proceeds independently from your contractual personal accident insurance claim. Claimants have the legal right to recover compensation simultaneously from both legal forums.
                      </p>
                    </div>
                  </div>
                </section>

                {/* The Claim Process */}
                <section id="claim-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The Claim Process</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing an accidental insurance claim correctly prevents procedural objections by insurance surveyors. Insurers exploit minor reporting discrepancies to delay settlements or repudiate valid claims. Following a disciplined procedural roadmap protects your legal rights throughout the process:
                    </p>
                    <ol className="list-decimal pl-6 space-y-5 text-sm text-slate-650">
                      <li>
                        <strong>Immediate Medical Attention &amp; FIR Registration (Day 0):</strong> Immediate medical attention remains the paramount priority following any sudden traumatic accident. You must immediately register an FIR for road collisions or workplace accidents. For non-vehicular injuries, obtain a formal Medico-Legal Case report from treating doctors. The police report must accurately describe the accident date, time, and circumstances. Inconsistencies between police records and claim forms invite aggressive insurer investigation queries.
                      </li>
                      <li>
                        <strong>Intimate the Insurance Company (Within 24-48 Hours):</strong> Inform the insurance company about the accident within twenty-four to forty-eight hours. Prompt intimation satisfies standard policy terms and initiates the insurer claim file. Courts hold that reasonable delay due to hospitalization cannot justify claim repudiation. Submit intimations through email, mobile applications, and customer care phone channels simultaneously. Always secure and preserve the official claim reference number for future correspondence.
                      </li>
                      <li>
                        <strong>Obtain and Complete the Claim Form (Days 1-7):</strong> Request the official claim form corresponding to your specific accidental claim category. Select the appropriate form for accidental death, permanent disability, or hospital expenses. Complete every section accurately to avoid contradictions with medical and police records. Inaccurate entries regarding pre-existing conditions or accident details create avoidable claim hurdles. Our legal panel reviews claim forms before submission to ensure complete accuracy.
                      </li>
                      <li>
                        <strong>Compile and Submit Supporting Documents (Days 7-15):</strong> Compile all mandatory evidentiary documents into an organized and indexed submission dossier:
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li><strong>For Accidental Death:</strong> Death certificate, post-mortem report, police FIR, inquest panchanama, and nominee KYC details.</li>
                          <li><strong>For Permanent Disability:</strong> Government medical board disability certificate, hospital discharge summary, and diagnostic imaging scans.</li>
                          <li><strong>For Temporary Total Disablement:</strong> Treating doctor incapacity certificate, employer leave records, and salary deduction proofs.</li>
                          <li><strong>Common to All Claims:</strong> Duly signed claim form, PAN card copy, and cancelled bank settlement cheque.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Insurer Assessment, Investigation &amp; Settlement (Days 15-45):</strong> The insurer reviews documents and may appoint an independent investigator for verification. Cooperate fully with investigators while preserving copies of all submitted documentary evidence. Never sign blank discharge vouchers or unconditional settlement receipts without careful legal verification. Insurers must disburse approved settlement funds directly to your verified bank account. If the insurer repudiates the claim, demand an official written rejection letter.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Rejection Grounds & Counters */}
                <section id="common-rejection-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Rejection Grounds &amp; Counters</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding insurer rejection arguments enables claimants to formulate decisive legal counter strategies. Most claim repudiations rely on hyper-technical clause interpretations or unverified investigator assertions. Our legal panel utilizes established judicial precedents to overturn arbitrary claim rejections:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">1. &quot;Non-Disclosure / Misrepresentation in the Proposal Form&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> Insurers argue the policyholder concealed pre-existing medical conditions in the proposal form.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> Section 45 of the Insurance Act 1938 protects policies exceeding three years. Insurers cannot question policy declarations after three continuous years of active coverage. Furthermore, insurers must establish a direct causal nexus between illness and accidents. A pre-existing lifestyle condition cannot cause an external vehicular collision on highways. Courts consistently reject insurer repudiations where undisclosed health conditions lacked causal connection.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">2. &quot;Death / Injury Due to Intoxication (Alcohol or Drugs)&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> Insurers deny claims alleging the insured was intoxicated during the accidental event.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> Insurers must conclusively prove intoxication as the proximate cause of the accident. Mere hospital notes mentioning alcohol smell do not constitute valid forensic proof. Insurers must produce a laboratory blood alcohol test exceeding legal statutory limits. The Motor Vehicles Act permits blood alcohol concentration up to thirty milligrams. Moreover, third-party negligence causing the accident supersedes allegations of driver alcohol consumption.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">3. &quot;Self-Inflicted Injury or Suicide&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> Insurers claim the fatal injury was intentionally self-inflicted rather than accidental.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> The legal burden of proving suicide rests entirely upon the insurance company. Insurers must provide clear forensic proof or suicide notes demonstrating deliberate intent. Police investigation under unnatural death provisions does not automatically establish intentional suicide. The law maintains a strong legal presumption favoring accidental death over suicide. Courts reject speculative insurer suicide allegations in accidental drowning or poisoning cases.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">4. &quot;Delayed Intimation Beyond the Policy Timeline&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> Insurers repudiate claims citing failure to intimate within strict contractual deadlines.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> IRDAI circulars explicitly prohibit insurers from rejecting claims solely for delayed intimation. Legitimate reasons like hospitalization, trauma, or rural location justify delays in reporting. Insurers must demonstrate that delayed intimation caused tangible prejudice to their investigation. Police panchanamas and hospital records preserve contemporaneous evidence regardless of notification timing. Adjudicating authorities routinely strike down claim rejections based entirely on intimation delays.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-3">5. &quot;Disability Classification Dispute (PTD vs. PPD Downgrading)&quot;</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-2">
                          <strong>The Insurer&apos;s Argument:</strong> Insurers downgrade permanent total disability claims to lower partial disability payment brackets.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          <strong>The Legal Counter:</strong> Insurers often rely on empanelled medical examiners to minimize disability payout obligations. Claimants have the legal right to present government medical board disability certificates. Consumer Commissions accept official disability assessments over internal insurance company medical opinions. The legal test evaluates whether injuries permanently terminate the insured person&apos;s specific occupation. Courts mandate full total disability compensation when professionals lose their core functional ability.
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
                      Aggrieved claimants should follow a structured escalation hierarchy to enforce claim payment. Each regulatory tier creates increasing legal and compliance pressure on the insurer. Skipping statutory stages can weaken the evidentiary foundation required for higher consumer courts. Our legal team manages every escalation tier to maximize claim recovery prospects:
                    </p>

                    <div className="space-y-5">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 1: Internal Grievance Redressal (Mandatory First Step)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Every insurance company must maintain a dedicated Grievance Redressal Officer under law. Submit a detailed written complaint to the GRO outlining all factual errors. Attach medical reports, police records, and relevant contractual clauses supporting your claim. IRDAI mandates that the insurer must resolve grievances within fifteen working days. Obtaining an adverse response or facing non-response unlocks higher statutory grievance forums.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 2: IRDAI Bima Bharosa Portal</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Escalate unresolved insurance disputes to the IRDAI Bima Bharosa online grievance portal. The regulator monitors company responsiveness and tracks pending consumer complaints on IGMS. Registering grievances creates administrative pressure and establishes an official regulatory audit trail. Insurer grievance resolution metrics directly impact their annual regulatory ratings and compliance audits. This documented grievance history reinforces your position before the Insurance Ombudsman later.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 3: Insurance Ombudsman</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The Insurance Ombudsman provides an efficient and cost-free dispute resolution forum nationwide. Claimants can file complaints within one year of receiving final insurer rejection. The Ombudsman adjudicates personal accident claims up to fifty lakhs across seventeen offices. The forum conducts hearings without requiring court fees or formal advocate representation. Awards passed by the Ombudsman become legally binding on insurers within thirty days. Our team prepares comprehensive dossiers that achieve high success rates before Ombudsmen.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">Level 4: Formal Legal Notice</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Serve a formal legal notice through an advocate if internal grievances fail. We serve notices digitally and via registered post to corporate headquarters and executives. The notice demands immediate claim settlement with statutory penal interest and compensation. Insurers receive a strict fifteen-day compliance window to settle outstanding claim dues. Most insurers prefer settling legitimate claims at this stage to avoid litigation.
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
                      The Consumer Protection Act 2019 provides an effective judicial mechanism for recovery. Policyholders qualify as protected consumers while wrongful claim rejection constitutes deficiency in service. Aggrieved claimants file complaints before Consumer Commissions based on pecuniary claim value. District Commissions adjudicate claims up to fifty lakhs with streamlined summary procedure. State and National Commissions handle higher dispute values across structured appellate hierarchies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumer Commissions possess extensive powers to grant comprehensive financial and punitive relief. Courts routinely award substantial compensation for mental harassment and acute financial hardship. Insurers must pay interest ranging between nine and twelve percent per annum. Consumer courts also impose punitive damages against insurers demonstrating willful claim handling negligence. The forum directs insurance companies to reimburse advocate fees and litigation costs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Claimants can file consumer complaints conveniently online through the central eDaakhil portal. The submission requires policy schedules, rejection letters, medical records, and prior correspondence. Engaging experienced insurance litigation counsel significantly improves legal arguments and procedural compliance. Robust pleadings before Consumer Commissions ensure rapid hearings and favorable judicial recovery orders.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Motor accident victims enjoy parallel statutory compensation under the Motor Vehicles Act 1988. Claimants can file compensation petitions before the Motor Accident Claims Tribunal. Section 166 governs fault claims based on driver negligence and vehicular liability. The tribunal assesses compensation using structured formulas considering income, age, and dependent survivors. MACT remedies operate completely independently from private personal accident insurance policy claims. Claimants can legally recover full compensation from both forums without statutory conflict.
                    </p>
                  </div>
                </section>

                {/* Evidence & Documentation */}
                <section id="documentation-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence &amp; Documentation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Comprehensive documentation forms the bedrock of every successful personal accident claim dispute. Courts and tribunals evaluate documentary evidence rather than unsubstantiated oral claims by parties. Our platform compiles an organized claim dossier to dismantle flawed insurer repudiation arguments:
                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>The Policy Document &amp; Schedule:</strong> Original policy schedule, detailed coverage terms, endorsement riders, and disability compensation tables.
                      </li>
                      <li>
                        <strong>The FIR and Police Investigation Records:</strong> Certified FIR copies, spot panchanama, witness statements, and final police investigation reports.
                      </li>
                      <li>
                        <strong>Medical Records (Complete &amp; Chronological):</strong> Medico-Legal Case certificates, hospital discharge summaries, post-mortem reports, and disability certificates.
                      </li>
                      <li>
                        <strong>Correspondence Trail:</strong> Claim submission receipts, insurer query letters, written responses, and formal rejection notices.
                      </li>
                      <li>
                        <strong>Financial &amp; Identity Documents:</strong> Insured identity documents, nominee KYC proofs, bank passbook copies, and premium receipts.
                      </li>
                      <li>
                        <strong>Supplementary Evidence (Case-Specific):</strong> Accident photographs, eyewitness affidavits, CCTV footage, employer certificates, and income tax returns.
                      </li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      Pro Tip: Translate regional language police reports into English through certified translation services before submission. Keep notarized copies of all documents and never surrender your original evidentiary records.
                    </div>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel has recovered substantial accident claim amounts from leading insurers. We resolve complex repudiations involving public and private general insurance companies nationwide:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Intoxication Rejection Overturned</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹25 Lakhs Accidental Death Benefit After Alcohol Exclusion Rejection</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software engineer died in a highway collision with a speeding truck. The insurer rejected the accidental death claim alleging intoxication based on post-mortem notes. We proved that no chemical blood alcohol testing was performed by authorities. The police investigation confirmed the truck driver was driving on the wrong side. The Insurance Ombudsman ordered full settlement of twenty-five lakhs with penal interest.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Disability Downgrading Corrected</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹12 Lakhs After Insurer Reclassified PTD as PPD</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A construction supervisor suffered severe spinal and leg injuries during scaffolding collapse. The insurer downgraded his permanent total disability claim to partial disability at sixty percent. We presented an independent government medical board certificate certifying total permanent locomotor disability. The Consumer Commission directed full settlement of twelve lakhs plus deficiency compensation.
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
                        &quot;The insurer rejected my father&apos;s accidental death claim citing non-disclosure. LegalRecovery filed an Ombudsman complaint backed by comprehensive hospital and police records. The Ombudsman ruled in our favor and twenty-five lakhs was credited promptly.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Radhika Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My insurer downgraded my permanent disability claim to partial status after an accident. LegalRecovery served a formal legal notice demanding correct disability reclassification under policy terms. The insurer reassessed the claim and disbursed our full total disability payout.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vikram Singh Chauhan</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurance company delayed my husband&apos;s claim for eight months with repetitive queries. LegalRecovery escalated the dispute via Bima Bharosa and dispatched an advocate notice. The entire claim was settled in our bank account within three weeks.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Priyanka Deshmukh</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The insurer denied my group accident claim because I had recently resigned. LegalRecovery proved the accident occurred during active employment and secured eight lakhs. Their understanding of corporate insurance contracts and employee benefit regulations is outstanding.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Aman Gupta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The company rejected our sports injury claim under an alleged hazardous activities exclusion. LegalRecovery proved that college football does not qualify as an excluded dangerous sport. The Insurance Ombudsman accepted the argument and ordered complete disablement benefit payment.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Shobha Menon</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Our insurer offered only forty percent compensation for severe permanent disability injuries. LegalRecovery approached the Consumer Commission and secured an independent medical board evaluation. The court awarded full policy sum insured with twelve percent interest and damages.&quot;
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
                      LegalRecovery combines experienced insurance litigation advocates with an automated case management infrastructure. We help claimants overturn wrongful rejections and recover accidental benefits without administrative friction:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Specialized Insurance Litigation Panel:</strong> Experienced advocates specializing in IRDAI regulations and insurance consumer litigation manage your case.</li>
                      <li><strong>Ombudsman-Ready Dossier Preparation:</strong> We draft indexed evidentiary dossiers meeting strict standards required by Ombudsmen and Commissions.</li>
                      <li><strong>Multi-Track Recovery Strategy:</strong> We simultaneously deploy internal grievances, Bima Bharosa filings, Ombudsman petitions, and legal notices.</li>
                      <li><strong>Real-Time Digital Dashboard:</strong> Track claim progress, notice delivery status, and tribunal updates through our secure portal.</li>
                      <li><strong>Transparent Flat-Fee Pricing:</strong> We operate on clear upfront pricing without hidden fees or claim recovery percentages.</li>
                      <li><strong>Pan-India Jurisdiction Coverage:</strong> Our panel provides seamless representation across all seventeen Ombudsman offices and state commissions.</li>
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
                  Recover your rejected accidental insurance claim with experienced legal counsel. We draft legal notices and handle Insurance Ombudsman and Consumer Forum petitions.
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
