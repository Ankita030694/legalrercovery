'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs — unique to insurance claim recovery
const faqs = [
  {
    question: "What are the statutory timelines for an insurer to resolve an insurance claim in India?",
    answer: "Under the IRDAI (Protection of Policyholders' Interests) Regulations, 2017, an insurance company is required to settle or reject a claim within 30 days from the date of receipt of the last necessary document or clarification. If the claim requires further investigation (e.g., in cases of suspected fraud or complex claims), the insurer must initiate the investigation within 30 days of receiving the claim. The investigation must be completed within 180 days from the date of the claim's receipt. Any delay beyond these statutory windows requires the insurer to pay interest on the claim amount."
  },
  {
    question: "What is the penalty if an insurance company delays settling a claim?",
    answer: "If an insurer delays the settlement of a claim beyond the statutory 30-day window (or the investigation completion window), the insurer is legally liable to pay interest to the policyholder. Under the IRDAI Protection of Policyholders' Interests Regulations, the interest rate is mandated to be 2% above the prevailing bank rate (the repo rate set by the RBI) at the beginning of the financial year. This interest is calculated from the date of receipt of the last document by the insurer until the actual date of payment, and it must be paid automatically along with the claim amount."
  },
  {
    question: "Can an insurer reject a health insurance claim citing a 'pre-existing disease' if the policy is old?",
    answer: "Under the IRDAI standardization guidelines, insurers cannot reject a health insurance claim based on a 'pre-existing disease' (PED) once the policy has completed eight continuous years of coverage. This period is known as the 'Moratorium Period'. After eight years of continuous renewals, the policy is immune from rejection or cancellation on grounds of non-disclosure or PED, except in cases of proven active fraud. Additionally, for policies younger than eight years, the insurer can only reject a claim if they establish that the specific disease was directly related to the non-disclosed condition and fell within the policy's standard exclusions."
  },
  {
    question: "What is the Insurance Ombudsman, and who can file a complaint with them?",
    answer: "The Insurance Ombudsman is a quasi-judicial authority established by the Government of India under the Insurance Ombudsman Rules, 2017, to resolve disputes between individual policyholders and insurance companies. You can file a complaint with the Ombudsman if: (1) You have first submitted a written complaint to the insurer's Grievance Redressal Officer (GRO) and it was rejected, partially resolved, or left unanswered for 30 days. (2) The total claim value (including compensation sought) does not exceed ₹50 Lakhs. (3) The complaint is filed within one year of receiving the insurer's rejection letter. There is no fee for filing a complaint with the Insurance Ombudsman."
  },
  {
    question: "Can an insurance company reject a motor insurance claim if the driver's license was expired?",
    answer: "An insurer can reject a motor insurance claim if the vehicle was being driven by a person without a valid driving license at the time of the accident, as this is a fundamental breach of the policy terms and the Motor Vehicles Act. However, courts and consumer forums have established the 'doctrine of fundamental breach'. If the expired license or lack of license was not the direct, contributing cause of the accident (e.g., if a parked vehicle was hit by another car), the insurer may be directed to settle the claim on a 'non-standard basis', usually paying up to 75% of the total assessed loss, rather than repudiating the claim entirely."
  },
  {
    question: "What is the Bima Bharosa portal, and how does it help in resolving claims?",
    answer: "Bima Bharosa (formerly the Integrated Grievance Management System or IGMS) is an online portal operated by the IRDAI that provides a centralized platform for policyholders to register and track complaints against insurance companies. When you file a complaint on Bima Bharosa, it is automatically forwarded to the insurer's internal systems under IRDAI monitoring. The insurance company is required to acknowledge the complaint within 3 days and resolve it within 15 days. If the company fails to resolve it or if you are unsatisfied with the response, the portal provides a direct path to escalate the dispute to the IRDAI's regulatory team or the Insurance Ombudsman."
  },
  {
    question: "What is a 'Reasoned Repudiation Letter', and why is it legally important?",
    answer: "A Repudiation Letter is the formal document issued by an insurance company when it rejects a claim. Under IRDAI regulations and Supreme Court rulings, the insurer must provide clear, specific, and reasoned grounds for rejecting the claim, citing the exact policy clauses and evidence relied upon. The insurer cannot reject a claim using vague or general terms. Legally, the insurer is bound by the reasons stated in the repudiation letter; they cannot introduce new grounds or reasons for rejection later in court or before the Ombudsman. This makes the repudiation letter the foundation of your legal dispute."
  },
  {
    question: "Can my claim be rejected if the hospital was not part of the insurer's preferred network?",
    answer: "No. While insurance companies prefer cash-less treatments at their network hospitals, they cannot reject a reimbursement claim solely because the treatment was received at a non-network or preferred provider network (PPN) hospital. As long as the hospital meets the minimum requirements set by the IRDAI (such as registration with local authorities, a minimum number of inpatient beds, qualified medical staff, and maintained medical records), you are entitled to file a reimbursement claim. The insurer must assess the claim on its merits in accordance with the standard policy terms."
  },
  {
    question: "What is the role of a surveyor in motor and property insurance claims?",
    answer: "Under Section 64UM of the Insurance Act, 1938, any claim exceeding ₹20,000 in motor or property insurance must be assessed by an independent, IRDAI-licensed Surveyor and Loss Assessor. The surveyor's report is a key document that assesses the cause and extent of the loss. While the surveyor's recommendations are not binding on the insurer or courts, they carry substantial evidentiary weight. If the insurer rejects the surveyor's findings or delays settlement beyond the surveyor's report submission, they must provide detailed justifications. You are entitled to receive a copy of the surveyor's report upon request."
  },
  {
    question: "What digital evidence is required to dispute a cashless claim rejection at a hospital?",
    answer: "To dispute a cashless claim rejection, you must preserve: (1) The initial pre-authorization request form submitted by the hospital TPA desk. (2) The insurer's query letters and the hospital's responses. (3) The formal cashless rejection letter showing the reasons for denial. (4) The detailed indoor case sheets, discharge summary, diagnostic reports, and final itemized hospital bill. (5) All email exchanges with the insurer or TPA. All digital documents and emails introduced in consumer forums must be accompanied by a digital certificate under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023."
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
      "name": "Insurance Claim Recovery",
      "item": "https://www.legalrecovery.in/recovery/insurance-claim-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Wrongfully Rejected Insurance Claim Amount: Health, Life & Motor Dispute Guide for India",
  "description": "Comprehensive legal and regulatory guide to recovering wrongfully rejected or delayed insurance claims in India. Covers IRDAI 2017 regulations, delayed claim interest penalties, Insurance Ombudsman cms.rbi.org.in escalations, and Consumer Court filings.",
  "image": "https://www.legalrecovery.in/og-insurance-recovery.png",
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
  "name": "Insurance Claim Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-insurance-recovery.png",
  "description": "Expert legal services for resolving wrongfully rejected or delayed health, life, and motor insurance claims in India. Includes GRO escalations, Bima Bharosa filings, and Insurance Ombudsman representation.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1680"
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
        "name": "Manish Verma"
      },
      "reviewBody": "My father's health insurance claim of ₹4.2 Lakhs was rejected by the insurer citing a pre-existing diabetic condition, even though the policy was 9 years old. LegalRecovery stepped in, drafted a formal notice citing the IRDAI Moratorium Period rules, and escalated the dispute. The insurer settled the claim in full with interest within 12 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Kulkarni"
      },
      "reviewBody": "After a major car accident, the insurer rejected my motor claim of ₹1.8 Lakhs on the grounds that the driving license had expired three days prior. LegalRecovery challenged the rejection in Consumer Court, establishing that the license status was not the cause of the accident. The court ordered the bank to settle the claim at 75% on a non-standard basis."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arun Prakash"
      },
      "reviewBody": "My critical illness claim of ₹8 Lakhs was delayed for over 5 months under the guise of an ongoing investigation. LegalRecovery filed a complaint on the Bima Bharosa portal and served a statutory notice. The insurer completed the investigation, approved the claim, and paid ₹24,000 in delayed interest penalty."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ritu Srivastava"
      },
      "reviewBody": "A cashless claim for my knee surgery was rejected at the hospital TPA desk because the hospital was outside the insurer's network. LegalRecovery guided me through the reimbursement filing process and drafted a strong representation showing the hospital met all IRDAI criteria. The insurer refunded the entire bill amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Devendra Joshi"
      },
      "reviewBody": "My life insurance claim for my late husband was rejected citing non-disclosure of high blood pressure. LegalRecovery filed a complaint with the Insurance Ombudsman showing the medical history was unrelated. The Ombudsman ruled in our favor, directing a full payment of the ₹25 Lakhs sum assured."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Girish Nair"
      },
      "reviewBody": "Professional legal drafting and advisory. They cited the exact IRDAI regulations and helped me compile a complete set of medical evidence with a Section 63 BSA certificate. The insurer settled the claim without requiring a long court battle."
    }
  ]
};

export default function InsuranceClaimAmountClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "insurance-claim-landscape", title: "1. The Insurance Claim Landscape & Rejection Ecosystem" },
    { id: "irdai-timelines-and-interest", title: "2. IRDAI Claim Settlement Timelines & Delay Penalties" },
    { id: "grounds-for-rejection", title: "3. Common Grounds for Wrongful Claim Rejections" },
    { id: "dispute-protocol", title: "4. Step-by-Step Claim Disputation & Grievance Redressal" },
    { id: "evidence-and-precedents", title: "5. Compiling Evidence & Section 63 BSA Compliance" },
    { id: "ombudsman-and-consumer-court", title: "6. Bima Bharosa Portal, Ombudsman & Consumer Commissions" },
    { id: "client-testimonials", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Insurance Claim Recovery", href: "/recovery/insurance-claim-amount" }
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
              National Insurance Recovery Legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Insurance Claim</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Was your health, life, or motor insurance claim wrongfully rejected or delayed? Claim interest penalties under the IRDAI circular, escalate via Bima Bharosa, and secure your payout.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Insurance Claim Recovery
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
                
                {/* Section 1: The Insurance Claim Landscape & Rejection Ecosystem */}
                <section id="insurance-claim-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Insurance Claim Landscape &amp; Rejection Ecosystem in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Insurance contracts in India are based on the legal principle of <strong>Uberrimae Fidei</strong> (utmost good faith), which requires both the policyholder and the insurer to disclose all material facts honestly. The insurance sector operates under the regulatory supervision of the <strong>Insurance Regulatory and Development Authority of India (IRDAI)</strong> and is governed by the Insurance Act, 1938. Claims are divided into three primary segments: health insurance, life insurance, and general insurance (including motor, property, and travel insurance).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      While insurance provides a critical financial safety net, disputes over claim payouts are common. Insurers may reject claims to manage their loss ratios, utilizing complex exclusions, technical conditions, or alleging non-disclosure of material facts. For policyholders, a claim rejection or delay during a health crisis, property loss, or the death of a primary earner can cause severe financial stress.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unlike standard debt recovery, resolving an insurance claim dispute requires navigating specific insurance regulations, interpreting policy wordings, and understanding the role of Third Party Administrators (TPAs) and independent surveyors. Establishing that a rejection was wrongful requires matching the medical or physical facts of the claim with IRDAI guidelines, which override conflicting policy clauses.
                    </p>
                  </div>
                </section>

                {/* Section 2: IRDAI Claim Settlement Timelines & Delay Penalties */}
                <section id="irdai-timelines-and-interest" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. IRDAI Claim Settlement Timelines &amp; Delayed Interest Penalties
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

                {/* Section 3: Common Grounds for Wrongful Claim Rejections */}
                <section id="grounds-for-rejection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Common Grounds for Wrongful Insurance Claim Rejections
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Insurance claims are rejected under various pretexts. Understanding these common grounds helps in identifying wrongful rejections and preparing a response:
                    </p>
                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">1. Alleged Pre-Existing Disease (PED) Non-Disclosure</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          In health insurance, claims are frequently rejected because the insurer alleges the policyholder did not disclose a pre-existing condition (like hypertension or diabetes) when purchasing the policy. However, rejections are wrongful if the disease being treated is medically unrelated to the non-disclosed condition, or if the policy has completed the 8-year Moratorium Period, which protects older policies from non-disclosure disputes.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. Delay in Intimation or Submission</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Policies often state that claims must be intimated within 24 to 48 hours of hospitalization or accident, and documents submitted within 7 to 15 days. However, the IRDAI has clarified that insurers cannot reject genuine claims solely due to delayed intimation or document submission if the delay was due to unavoidable circumstances (such as medical emergencies or the death of a family member).
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">3. Technical Exclusions and Definition Gaps</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Claims may be denied based on strict interpretations of definitions (e.g., claiming a treatment was 'cosmetic' rather than therapeutic, or that a ward admission did not meet the 24-hour minimum stay). These rejections can be challenged if the medical treating doctor certifies that the admission and procedure were medically necessary.
                        </p>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">4. Disagreement over Valuation and Loss Assessment</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          In motor and property claims, insurers may offer payouts significantly lower than the actual repair costs, relying on depreciation rates or disputing the surveyor's assessment. These valuations can be challenged by submitting independent repair estimates and referencing the Insured Declared Value (IDV) guidelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Step-by-Step Claim Disputation & Grievance Redressal */}
                <section id="dispute-protocol" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Step-by-Step Claim Disputation &amp; Grievance Redressal Protocol
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your insurance claim is rejected or delayed, you should follow an escalating dispute process to challenge the insurer's decision:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li>
                        <strong>Obtain the Repudiation Letter:</strong> Request the formal claim rejection letter from the insurer. This document must state the specific policy clauses and reasons for the rejection, which will form the basis of your dispute.
                      </li>
                      <li>
                        <strong>Submit a Grievance to the Nodal Officer (GRO):</strong> File a written complaint with the insurance company's Grievance Redressal Officer (GRO). Include medical certificates, surveyor reports, and a response to the repudiation points. The insurer must acknowledge the complaint within 3 days and respond within 15 days.
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

                {/* Section 5: Compiling Evidence & Section 63 BSA Compliance */}
                <section id="evidence-and-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Compiling Admissible Evidence &amp; Section 63 BSA Compliance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Resolving insurance disputes relies on the quality of the evidence compiled. Under the **Bharatiya Sakshya Adhiniyam (BSA), 2023**, specifically **Section 63** (which replaced Section 65B of the Indian Evidence Act), any digital records (such as PDF medical bills, scan reports, email threads, or digital surveyor reports) must be accompanied by a formal **Digital Certificate**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A Section 63 BSA certificate is a signed declaration confirming the authenticity and integrity of the device and system that generated the electronic records. Without this certificate, digital evidence may be deemed inadmissible in consumer forums or civil courts, which can weaken your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For insurance claim disputes, your evidence package should include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>
                        <strong>Detailed Medical Records:</strong> Discharge summaries, daily doctor sheets, test reports, and itemized hospital bills, with certifications from the treating hospital.
                      </li>
                      <li>
                        <strong>Independent Surveyor Report:</strong> In motor or property claims, a copy of the official loss assessment report submitted by the IRDAI Surveyor.
                      </li>
                      <li>
                        <strong>Dispute Correspondence:</strong> Copies of all emails sent to the insurer, submission receipts, and tracking logs of documents sent to the TPA or GRO.
                      </li>
                      <li>
                        <strong>Treating Doctor Certificate:</strong> A formal letter from the treating surgeon or doctor clarifying that the admission was medically necessary and explaining how it relates to or differs from any alleged pre-existing conditions.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Relevant Judicial Precedents:</strong> The Supreme Court of India in cases such as <em>Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022)</em> has ruled that insurance companies should not take a hyper-technical approach to claim settlement or reject claims on trivial grounds (such as minor delays in intimation) when the loss is genuine. The courts emphasized that the purpose of insurance is to provide security, and insurers must act fairly when assessing claims.
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
                          A formal notice drafted by our panel of recovery advocates is served to the insurer's corporate office and GRO. The notice details the bank's/insurer's violation of IRDAI regulations, challenges the repudiation grounds with medical or surveyor evidence, and demands settlement of the claim with the statutory 2% interest penalty on the delay. The notice sets a 15-day deadline for resolution before escalating to court.
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
                    8. Why Choose LegalRecovery for Insurance Claim Disputes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Navigating the recovery process for insurance claims requires a combination of medical knowledge, understanding of policy terms, and regulatory expertise. Individual complaints are often delayed by insurer customer service, which may rely on standard template rejections. LegalRecovery provides structured legal support through our panel of recovery advocates and dispute resolution professionals.
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
                          We audit the claim processing timelines against the IRDAI 2017 regulations, calculating any delayed interest penalties due under the guidelines.
                        </p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Evidence Structuring</h4>
                        <p className="text-xs md:text-sm text-slate-650">
                          We help draft the mandatory Section 63 BSA digital certificates, ensuring your medical records, surveyor files, and emails are legally admissible in court.
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
                  Recover Wrongfully Rejected Claims
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Connect with our panel of insurance recovery advocates. We help draft legal notices, file Bima Bharosa escalations, and represent you before the Ombudsman.
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
        serviceName="Insurance Claim Wrongful Rejection Legal Recovery Assistance"
        amount={1999}
      />
    </>
  );
}
