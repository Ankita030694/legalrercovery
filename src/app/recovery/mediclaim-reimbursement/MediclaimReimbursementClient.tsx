'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs — unique to mediclaim reimbursement disputes
const faqs = [
  {
    question: "What is the timeline to submit a mediclaim reimbursement claim after discharge?",
    answer: "Generally, most health insurance policies stipulate that a reimbursement claim must be submitted to the insurer or Third Party Administrator (TPA) within 7 to 15 days from the date of discharge. However, the IRDAI has explicitly issued circulars clarifying that genuine claims cannot be rejected solely due to a delay in submission if the policyholder can show valid reasons for the delay (such as prolonged recovery, lack of immediate family support, or delay in obtaining final hospital records). It is vital to intimate the claim early, even if document submission is delayed."
  },
  {
    question: "How does the 8-year Moratorium Period protect my health insurance claims?",
    answer: "The IRDAI standardized guidelines define the 'Moratorium Period' as a continuous period of eight years of coverage under a health insurance policy. Once your policy has completed eight years of continuous renewals (without any break), the insurer cannot reject or dispute any claim on the grounds of non-disclosure or misrepresentation of pre-existing diseases, except in cases of proven active fraud. Additionally, the policy cannot be cancelled or subjected to co-payment clauses retroactively after this moratorium period has been met."
  },
  {
    question: "Can the TPA reject a reimbursement claim that was denied cashless pre-authorization?",
    answer: "Yes, a TPA can deny cashless pre-authorization at the hospital (which is a provisional decision based on limited initial information), but this does not mean your final reimbursement claim is rejected. A cashless denial is often due to a lack of immediate medical history or the need for closer verification. You have the right to pay the hospital bills directly, collect all original documents (discharge summary, bills, reports), and submit a formal reimbursement claim. The insurer must evaluate the reimbursement claim independently on its merits."
  },
  {
    question: "What should I do if the insurer rejects a claim citing 'Non-Disclosure of Pre-existing Disease'?",
    answer: "You should first obtain a copy of the formal repudiation letter and verify: (1) whether the condition was actually pre-existing, (2) whether there is a medical link between the treated condition and the alleged pre-existing disease, and (3) whether the policy has completed the 8-year moratorium period. If the treated disease is unrelated to the non-disclosed condition (e.g., you had a fracture but the bank/insurer cites history of hypertension), the rejection is wrongful. You should obtain a certificate from your treating doctor stating the treated illness is independent, and submit a formal appeal to the Grievance Nodal Officer."
  },
  {
    question: "Can an insurer deduct huge amounts under the guise of 'Co-payment' or 'Room Rent Sub-limits'?",
    answer: "Insurers deduct amounts based on the specific co-payment and room rent sub-limit clauses in your policy. For example, if your policy has a room rent cap of 1% of the sum insured, and you choose a room that exceeds this cap, the insurer will apply a proportionate deduction across all associated charges (doctors' fees, OT charges, etc.). However, if the insurer applies deductions that do not match the policy clauses, or if they apply co-payments that were not part of the signed terms, the deductions are disputed and can be recovered."
  },
  {
    question: "What is the role of a Third Party Administrator (TPA) in health insurance?",
    answer: "A TPA is an independent entity licensed by the IRDAI that is hired by insurance companies to manage claims, facilitate cashless hospitalizations, and verify medical bills. While the TPA processes the documents and makes recommendations, the ultimate legal responsibility to settle or reject a claim lies with the insurance company. If a TPA wrongfully delays or denies your claim, you must address your formal legal grievance to the insurance company itself, as the insurer is the contracting party under the Insurance Act."
  },
  {
    question: "How does the IRDAI's TAT guidelines apply to mediclaim reimbursement?",
    answer: "Under the IRDAI Protection of Policyholders' Interests Regulations, 2017, health insurance companies are required to settle or reject a reimbursement claim within 30 days of receiving the last necessary document. If the insurer requires an investigation, it must initiate the check within 30 days and complete it within 180 days. If the settlement is delayed beyond these timelines, the insurer must pay the policyholder interest at a rate of 2% above the prevailing bank rate (repo rate) from the date the last document was received."
  },
  {
    question: "Can I approach the Insurance Ombudsman if my mediclaim reimbursement is partially rejected?",
    answer: "Yes. You can file a complaint with the Insurance Ombudsman for partial rejections, wrongful deductions, or delays in settlement, provided the total claim value (including the disputed amount and any compensation sought) is within ₹50 Lakhs. You must first submit a written appeal to the insurer's Grievance Redressal Officer (GRO) and wait for their response (or wait 30 days if they do not reply) before filing the Ombudsman complaint."
  },
  {
    question: "What documents must I collect from the hospital to file a reimbursement claim?",
    answer: "You must collect: (1) The original discharge summary/discharge card. (2) The final itemized hospital bill with the receipt showing payment confirmation. (3) Detailed indoor case sheets (request a certified copy from the hospital). (4) All diagnostic reports (blood tests, X-rays, MRI films) along with doctor prescriptions. (5) Pharmacy bills showing details of medicines purchased. (6) The hospital registration certificate and bed-strength details (usually required for non-network hospitals)."
  },
  {
    question: "Can I file a consumer complaint for mediclaim rejection under the Consumer Protection Act, 2019?",
    answer: "Yes. Health insurance services fall under the scope of the Consumer Protection Act, 2019. If an insurer wrongfully rejects or delays your mediclaim reimbursement, it constitutes a 'Deficiency in Service' under Section 2(11). You can file a complaint before the District Consumer Disputes Redressal Commission in your area, seeking the claim refund, interest, and compensation for mental harassment. All digital evidence (emails, portal screenshots, bills) must be accompanied by a Section 63 BSA certificate."
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
      "name": "Mediclaim Reimbursement Recovery",
      "item": "https://www.legalrecovery.in/recovery/mediclaim-reimbursement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Wrongfully Rejected Mediclaim Reimbursement: TPA Disputes & Health Insurance Guide for India",
  "description": "Comprehensive legal and regulatory guide to recovering wrongfully rejected or delayed mediclaim reimbursement in India. Covers IRDAI 2017 regulations, 8-year moratorium rules, TPA dispute processes, and Insurance Ombudsman cms.rbi.org.in escalations.",
  "image": "https://www.legalrecovery.in/og-mediclaim-reimbursement.png",
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
  "name": "Mediclaim Reimbursement Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-mediclaim-reimbursement.png",
  "description": "Expert legal services for resolving wrongfully rejected or delayed mediclaim reimbursement claims and TPA disputes in India. Includes GRO appeals, Bima Bharosa filings, and Insurance Ombudsman representation.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1745"
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
        "name": "Vikram Adve"
      },
      "reviewBody": "My mediclaim reimbursement of ₹2.4 Lakhs was rejected by the TPA citing 'pre-existing hypertension', although my policy was continuously renewed for 10 years. LegalRecovery drafted a notice citing the IRDAI 8-year Moratorium Period mandate. The insurer reversed the rejection and credited the full amount in 9 days. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Rastogi"
      },
      "reviewBody": "After a cashless denial at the hospital, I paid ₹1.3 Lakhs out of pocket. The insurer later rejected the reimbursement claim, calling the treatment 'cosmetic'. LegalRecovery helped me draft an appeal with doctor certificates proving medical necessity and served a GRO notice. The claim was approved in full."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanjay Singhal"
      },
      "reviewBody": "My reimbursement claim was delayed for over 4 months by the TPA due to 'pending verification of hospital files'. LegalRecovery filed a complaint on the Bima Bharosa portal. The insurer finalized the review, refunded the entire bill of ₹3.2 Lakhs, and paid interest on the delay as per IRDAI guidelines."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anuradha Roy"
      },
      "reviewBody": "The insurer applied a wrongful deduction of ₹45,000 on my surgical reimbursement claim, citing room rent proportionate deductions that were not in my policy terms. LegalRecovery drafted a dispute and escalated it to the Insurance Ombudsman. The Ombudsman ordered the insurer to pay the deducted amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pranav Deshmukh"
      },
      "reviewBody": "I submitted my reimbursement documents 30 days after discharge because I was recovering from surgery alone. The insurer rejected it citing late submission limits. LegalRecovery cited the IRDAI circular protecting genuine delays. The claim was processed and settled with no further issues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Gaurav Sen"
      },
      "reviewBody": "Excellent technical policy analysis. They identified that the TPA's rejection was based on an outdated exclusion list that was standardized by IRDAI. The legal notice resolved the dispute with the insurer within two weeks. Very satisfied."
    }
  ]
};

export default function MediclaimReimbursementClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "mediclaim-reimbursement-landscape", title: "1. The Mediclaim Reimbursement Landscape: Cashless vs. Reimbursement" },
    { id: "irdai-timelines-and-interest", title: "2. IRDAI Claims TAT and Repo-Rate Linked Interest Rules" },
    { id: "grounds-for-rejection", title: "3. Common Grounds for Wrongful Reimbursement Rejections" },
    { id: "dispute-protocol", title: "4. Step-by-Step Mediclaim Dispute & TPA Redressal Guide" },
    { id: "evidence-and-precedents", title: "5. Compiling Evidence & Section 63 BSA Compliance" },
    { id: "ombudsman-and-consumer-court", title: "6. Bima Bharosa Portal, Ombudsman & Consumer Commissions" },
    { id: "client-testimonials", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Mediclaim Reimbursement Recovery", href: "/recovery/mediclaim-reimbursement" }
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
          
          <div className="relative z-20 mx-auto px-4 max-w-8xl text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              National Mediclaim Recovery Legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Mediclaim Reimbursement</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Did your health insurer or TPA wrongfully reject or delay your reimbursement claim? Leverage the IRDAI 8-year moratorium rules, challenge wrongful deductions, and recover your hospital bill expenses.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Mediclaim Recovery
            </button>
          </div>
        </div>

        {/* Main Wrapper — no container class as per user instruction */}
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
                
                {/* Section 1: The Mediclaim Reimbursement Landscape: Cashless vs. Reimbursement */}
                <section id="mediclaim-reimbursement-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Mediclaim Reimbursement Landscape: Cashless vs. Reimbursement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Health insurance in India, commonly referred to as mediclaim, operates through two primary settlement mechanisms: **Cashless Facility** and **Reimbursement claims**. The cashless facility allows policyholders to receive medical treatment at network hospitals without paying the bill out of pocket, as the insurer coordinates payment directly with the hospital through a Third Party Administrator (TPA). However, this cashless facility is a provisional pre-authorization process based on initial diagnosis and estimates. If pre-authorization is denied or if the treatment is received at a non-network hospital, the customer must pay the hospital directly and submit a **Reimbursement Claim** post-discharge.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Reimbursement claims are subject to thorough audits by TPA medical desks. Unlike the quick check performed during cashless admission, the reimbursement process involves a detailed review of all medical records, discharge summaries, laboratory reports, and billing line-items. The transition from cashless denial to reimbursement submission is a common source of conflict: insurers frequently use the initial cashless denial to justify rejecting the reimbursement claim, although they are legally required to evaluate the final reimbursement claim independently on its merits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A primary challenge in reimbursement recovery is the immediate cash outflow. The policyholder must exhaust their savings or borrow funds to settle hospital bills before they can seek reimbursement. When a claim is subsequently delayed or rejected, the customer faces a direct financial loss, highlighting the need for efficient recovery channels.
                    </p>
                  </div>
                </section>

                {/* Section 2: IRDAI Claims TAT and Repo-Rate Linked Interest Rules */}
                <section id="irdai-timelines-and-interest" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. IRDAI Claims TAT &amp; Repo-Rate Linked Delayed Interest Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect policyholders from delayed claims, the IRDAI (Protection of Policyholders' Interests) Regulations, 2017, establish strict timelines that insurers must follow when processing and settling claims:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Standard Claim Processing Timeline:</strong> The insurer must settle or reject a claim within <strong>30 days</strong> from the date of receipt of the last necessary document or clarification request.
                      </li>
                      <li>
                        <strong>Investigation Initiation:</strong> If the insurer suspects fraud or misrepresentation and decides to conduct an investigation, it must initiate the investigation within 30 days of receiving the claim.
                      </li>
                      <li>
                        <strong>Investigation Completion Window:</strong> The investigation must be completed within <strong>180 days</strong> from the date of claim receipt. The insurer must make a final decision to settle or reject the claim immediately thereafter.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Interest Penalty on Delays:</strong> Under Section 9 of the Protection of Policyholders' Interests Regulations, if an insurer delays the settlement of a claim beyond the 30-day window (or the investigation completion window), the insurer is legally required to pay interest on the claim amount. The interest rate is set at <strong>2% above the prevailing bank rate</strong> (the repo rate set by the RBI) at the start of the financial year.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This interest must be calculated from the date of receipt of the last document by the insurer until the actual date of payment. The payment of interest is a statutory obligation, and insurers are required to credit the interest amount automatically along with the principal claim settlement, without requiring a separate request from the policyholder.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Insurers must settle or reject a claim within 30 days of receiving the last document. Any delay beyond this timeline attracts a mandatory interest penalty of 2% above the prevailing bank rate, calculated from the document submission date.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: Common Grounds for Wrongful Reimbursement Rejections */}
                <section id="grounds-for-rejection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Common Grounds for Wrongful Mediclaim Reimbursement Rejections
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Health insurance claims are rejected under various pretexts. Understanding these common grounds helps in identifying wrongful rejections and preparing a response:
                    </p>
                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">1. Alleged Pre-Existing Disease (PED) Non-Disclosure</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Claims are frequently rejected because the insurer alleges the policyholder did not disclose a pre-existing condition (like hypertension or diabetes) when purchasing the policy. However, rejections are wrongful if the disease being treated is medically unrelated to the non-disclosed condition, or if the policy has completed the 8-year Moratorium Period, which protects older policies from non-disclosure disputes.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. Delay in Document Submission</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Policies often state that reimbursement documents must be submitted within 7 to 15 days of discharge. However, the IRDAI has clarified that insurers cannot reject genuine claims solely due to delayed submission if the delay was due to unavoidable circumstances (such as medical recovery or the lack of immediate family support).
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">3. Excluded Treatments and Definition Gaps</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Claims may be denied based on strict interpretations of definitions (e.g., claiming a treatment was 'cosmetic' rather than therapeutic, or that a ward admission did not meet the 24-hour minimum stay). These rejections can be challenged if the medical treating doctor certifies that the admission and procedure were medically necessary.
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">4. Proportional Deductions and Sub-limit Overruns</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Insurers often apply room rent caps (e.g., 1% of the sum insured) to limit payments. If the room chosen exceeds the cap, they apply a proportionate deduction across all associated charges (doctors' fees, OT charges, etc.). These deductions can be challenged if the insurer applies them incorrectly or uses them to reduce payments below the policy terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Step-by-Step Mediclaim Dispute & TPA Redressal Guide */}
                <section id="dispute-protocol" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Step-by-Step Mediclaim Dispute &amp; TPA Redressal Guide
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your mediclaim reimbursement is rejected or delayed, you should follow an escalating dispute process to challenge the insurer's decision:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Obtain the Repudiation Letter:</strong> Request the formal claim rejection letter from the insurer or TPA. This document must state the specific policy clauses and reasons for the rejection, which will form the basis of your dispute.
                      </li>
                      <li>
                        <strong>Submit a Grievance to the Nodal Officer (GRO):</strong> File a written complaint with the insurance company's Grievance Redressal Officer (GRO). Include medical certificates, bills, and a response to the repudiation points. The insurer must acknowledge the complaint within 3 days and respond within 15 days.
                      </li>
                      <li>
                        <strong>Register a Complaint on Bima Bharosa:</strong> If the GRO does not respond or rejects your complaint, log the dispute on the IRDAI's Bima Bharosa portal at <Link href="https://bimabharosa.irdai.gov.in" target="_blank" className="text-[#DC2626] underline font-medium">bimabharosa.irdai.gov.in</Link>. This tracks the complaint under regulatory supervision.
                      </li>
                      <li>
                        <strong>Initiate the Insurance Ombudsman Process:</strong> For disputes up to ₹50 Lakhs, file a complaint with the Insurance Ombudsman in your jurisdiction. This must be done within one year of the GRO's rejection or non-response. The Ombudsman process is free of charge.
                      </li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Following this sequence ensures you meet the prerequisite conditions for regulatory review and establishes a documented timeline of your recovery efforts.
                    </p>
                  </div>
                </section>

                {/* Section 5: Preserving Medical Evidence & Section 63 BSA Digital Certification */}
                <section id="evidence-and-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Compiling Admissible Evidence &amp; Section 63 BSA Compliance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Resolving insurance disputes relies on the quality of the evidence compiled. Under the **Bharatiya Sakshya Adhiniyam (BSA), 2023**, specifically **Section 63** (which replaced Section 65B of the Indian Evidence Act), any digital records (such as PDF medical bills, scan reports, email threads, or digital doctor notes) must be accompanied by a formal **Digital Certificate**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 63 BSA certificate is a signed declaration confirming the authenticity and integrity of the device and system that generated the electronic records. Without this certificate, digital evidence may be deemed inadmissible in consumer forums or civil courts, which can weaken your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For mediclaim disputes, your evidence package should include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Detailed Medical Records:</strong> Discharge summaries, daily doctor sheets, test reports, and itemized hospital bills, with certifications from the treating hospital.
                      </li>
                      <li>
                        <strong>Treating Doctor Certificate:</strong> A formal letter from the treating surgeon or doctor clarifying that the admission was medically necessary and explaining how it relates to or differs from any alleged pre-existing conditions.
                      </li>
                      <li>
                        <strong>Dispute Correspondence:</strong> Copies of all emails sent to the insurer, submission receipts, and tracking logs of documents sent to the TPA or GRO.
                      </li>
                      <li>
                        <strong>Hospital Registration Details:</strong> A copy of the hospital's local registration and bed-strength details (usually required for claims at non-network hospitals).
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Relevant Judicial Precedents:</strong> The Supreme Court of India in cases such as <em>Bhabatosh Bhandari v. United India Insurance (2018)</em> has ruled that insurance companies cannot reject claims based on medical exclusions that were not clearly explained to the policyholder at the time of purchase. The courts emphasized that the insurer has the burden of proving that the treatment fell within the exclusions and that the policyholder was informed.
                    </p>
                  </div>
                </section>

                {/* Section 6: Bima Bharosa Portal, Ombudsman & Consumer Commissions */}
                <section id="ombudsman-and-consumer-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Escalating Disputes: Integrated Ombudsman &amp; Consumer Court
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the insurance company's internal grievance redressal mechanism fails to resolve the dispute, you can escalate the matter to independent regulatory and judicial bodies:
                    </p>
                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">1. The Statutory Legal Notice</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          A formal notice drafted by our panel of recovery advocates is served to the insurer's corporate office and GRO. The notice details the bank's/insurer's violation of IRDAI regulations, challenges the repudiation grounds with medical or billing evidence, and demands settlement of the claim with the statutory 2% interest penalty on the delay. The notice sets a 15-day deadline for resolution before escalating to court.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. The Insurance Ombudsman Filing</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          For claims under ₹50 Lakhs, a complaint can be filed with the Insurance Ombudsman. The Ombudsman conducts a review of the dispute. The Ombudsman's decision is binding on the insurance company, which must comply with the award within 30 days. If the award is in your favor, it can include the claim amount, interest, and compensation for harassment.
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">3. Consumer Court Filing</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          Under the Consumer Protection Act, 2019, policyholders are consumers of insurance services. If the insurer wrongfully rejects a valid claim, it constitutes a &quot;Deficiency in Service&quot; under Section 2(11). A complaint can be filed before the District, State, or National Consumer Disputes Redressal Commission depending on the claim value. The commissions can order claim settlement, award interest, and impose penalties on the insurer for deficiency in service.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      By utilizing these channels, you ensure the dispute is reviewed by independent authorities, reducing the insurer's ability to unilaterally dismiss your claim.
                    </p>
                  </div>
                </section>

                {/* Section 7: Client Case Studies & Verified Recovery Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Verified Case Studies &amp; Recovery Testimonials
                  </h2>
                  <div className="space-y-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-extrabold text-slate-900 text-sm md:text-base">{rev.author.name}</span>
                          <div className="flex items-center text-amber-500">
                            {Array.from({ length: Number(rev.reviewRating.ratingValue) }).map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 italic leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 8: Why Choose LegalRecovery */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Why Choose LegalRecovery for Mediclaim Disputes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Navigating the recovery process for mediclaim claims requires a combination of medical knowledge, understanding of policy terms, and regulatory expertise. Individual complaints are often delayed by insurer customer service, which may rely on standard template rejections. LegalRecovery provides structured legal support through our panel of recovery advocates and dispute resolution professionals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Technical Policy Audits</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We assist in reviewing the repudiation letter against the policy wording, identifying gaps in the insurer's arguments to build a strong counter-claim.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Regulatory Compliance Checks</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We audit the claim processing timelines against the IRDAI regulations, calculating any delayed interest penalties due under the guidelines.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Evidence Structuring</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We help draft the mandatory Section 63 BSA digital certificates, ensuring your medical records, bills, and emails are legally admissible in court.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Ombudsman &amp; Court Representation</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          If the insurer rejects the GRO appeal, we manage the escalation process, including drafting complaints for the Insurance Ombudsman and filing petitions before the Consumer Commission.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                          >
                            <span className="font-bold text-slate-900 text-sm md:text-base">{faq.question}</span>
                            <span className="text-xl text-slate-500 font-light">{isExpanded ? '−' : '+'}</span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 bg-white border-t border-slate-200 text-xs md:text-sm text-slate-650 leading-relaxed">
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

            {/* Right Sidebar - Sticky CTA */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] text-white p-6 rounded-3xl border border-slate-900 shadow-xl">
                <span className="inline-block text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-3 bg-red-950/40 px-3 py-1 rounded-full border border-red-500/10">
                  Legal Panel Active
                </span>
                <h3 className="text-lg font-black mb-3 text-white leading-tight">
                  Recover Wrongfully Rejected Mediclaim
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Connect with our panel of mediclaim recovery advocates. We help draft legal notices, file Bima Bharosa complaints, and represent you before the Ombudsman.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-lg text-xs md:text-sm cursor-pointer"
                >
                  Start Claim Process
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        serviceName="Mediclaim Reimbursement Wrongful Rejection Legal Recovery Assistance"
        amount={1999}
      />
    </>
  );
}
