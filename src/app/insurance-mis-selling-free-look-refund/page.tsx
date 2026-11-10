import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InsuranceMisSellingNoticeCTA from "./InsuranceMisSellingNoticeCTA";
import InsuranceMisSellingTableOfContents from "./InsuranceMisSellingTableOfContents";
import InsuranceMisSellingProblemTabs from "./InsuranceMisSellingProblemTabs";
import InsuranceMisSellingChecklistWizard from "./InsuranceMisSellingChecklistWizard";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Insurance Mis-Selling & Free-Look Refund: Get Money Back",
  description:
    "Policy mis-sold as an investment or FD? Free-look rights, mis-selling complaints to IRDAI and the ombudsman, and how to get a refund.",
  alternates: {
    canonical: `${SITE_URL}/insurance-mis-selling-free-look-refund`,
  },
  openGraph: {
    title: "Insurance Mis-Selling & Free-Look Refund: Get Money Back",
    description:
      "Statutory guide to cancelling mis-sold life, ULIP, and health insurance policies. Enforce 30-day free-look refunds, file Bima Bharosa complaints, and recover money via Insurance Ombudsman and legal notice.",
    url: `${SITE_URL}/insurance-mis-selling-free-look-refund`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Insurance Mis-Selling & Free-Look Refund: Get Money Back",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Mis-Selling & Free-Look Refund: Get Money Back",
    description:
      "Statutory guide to cancelling mis-sold life, ULIP, and health insurance policies. Enforce 30-day free-look refunds, file Bima Bharosa complaints, and recover money via Insurance Ombudsman and legal notice.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 (Free-Look Period Standardisation & Cancellation Timelines)",
    url: "https://irdai.gov.in/document-detail?documentId=4947230",
  },
  {
    title: "Insurance Regulatory and Development Authority of India (Protection of Policyholders' Interests) Regulations, 2017 & 2024 Amendments",
    url: "https://irdai.gov.in/regulations",
  },
  {
    title: "Insurance Ombudsman Rules, 2017 (as amended 2023) — Ministry of Finance (Jurisdiction up to ₹50 Lakhs & Ex-Parte Awards)",
    url: "https://financialservices.gov.in/insurance-divisions/Insurance-Ombudsman-Rules-2017",
  },
  {
    title: "Insurance Act, 1938 — Section 45 (Incontestability Clause & Misrepresentation Framework)",
    url: "https://www.indiacode.nic.in/handle/123456789/2304",
  },
  {
    title: "Indian Contract Act, 1872 — Section 18 (Misrepresentation), Section 19 (Voidability) & Section 238 (Principal Liability for Agent Fraud)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Call Recordings, WhatsApp Chats & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bima Bharosa Portal — IRDAI Integrated Grievance Management System",
    url: "https://bimabharosa.irdai.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "NCDRC Order: Full Refund of ULIP Premium Mis-Sold to Retiree as a Fixed Deposit",
    parties: "Bajaj Allianz Life Insurance Co. Ltd. v. Mrs. Meera Devi & Anr.",
    citation: "Revision Petition No. 1422 of 2018, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 12 November 2020",
    facts:
      "A 64-year-old widow visited her bank to invest fixed deposit maturity money. The bank relationship manager convinced her to invest ₹3,00,000 into a promised 'Guaranteed Growth Bank Deposit'. In reality, she was enrolled into a 10-year regular premium ULIP. When she did not pay ₹3 Lakh in year two, the insurer froze the policy and deducted heavy charges. She challenged the policy for fraud.",
    holding:
      "The National Commission held that selling life insurance under the false guise of a bank fixed deposit is an unfair trade practice. The insurer remains responsible for the mis-selling of its corporate bank partner. The NCDRC ordered a full refund of the ₹3,00,000 premium with 9% annual interest, ₹25,000 for mental distress, and ₹10,000 costs.",
    amount: "₹3,00,000 Full Premium Refund @ 9% Interest + ₹25,000 Mental Agony Award + ₹10,000 Costs",
    takeaway:
      "If an agent or bank sold you a long-term insurance policy disguised as a fixed deposit, consumer courts will cancel the contract and order a full refund.",
  },
  {
    title: "State Commission Ruling: Insurer Liable for Rejection of Free-Look Cancellation Based on Fabricated Delivery Date",
    parties: "HDFC Standard Life Insurance Co. Ltd. v. Om Prakash Sharma",
    citation: "First Appeal No. 418/2021, State Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 18 August 2022",
    facts:
      "A policyholder received his physical policy bond on 14 October and submitted a cancellation letter on 26 October (within 12 days). The insurer refused the refund, claiming the policy was sent electronically on 15 September and the free-look period had ended. The company had no proof of actual delivery before 14 October.",
    holding:
      "The State Commission ruled that the free-look period starts when the customer actually receives the policy document, not when the insurer generates it internally. The insurer must prove delivery. Without proof of delivery, rejecting the cancellation is a serious service failure. The Commission ordered a full refund of ₹1,85,000 with 12% interest and ₹20,000 costs.",
    amount: "₹1,85,000 Full Premium Refund @ 12% Penal Interest + ₹20,000 Litigation Compensation",
    takeaway:
      "Insurers cannot claim the 30-day free-look period expired without showing proof of delivery. Any courier delay protects the policyholder.",
  },
  {
    title: "Insurance Ombudsman Award: Rescission of Policy Due to Forged Proposal Form & Agent Target Inflation",
    parties: "K. R. Venkataraman v. SBI Life Insurance Company Ltd.",
    citation: "Award No. IO/KOC/A/LI/0048/2023-2024, Office of the Insurance Ombudsman, Kochi",
    date: "Award Dated 14 December 2023",
    facts:
      "A 58-year-old farmer was sold an insurance policy with an annual premium of ₹1,50,000. When he received the policy papers, he found that the agent had falsely recorded his income as ₹18,00,000 and his job as a corporate consultant. The policyholder protested immediately and approached the Ombudsman when the company refused cancellation.",
    holding:
      "The Insurance Ombudsman held that insurance requires utmost good faith. An agent who enters false income or jobs to meet sales targets makes the contract void. Under Ombudsman rules, the forum ordered full cancellation, a 100% refund of ₹1,50,000 without deductions, and reported the agent to IRDAI.",
    amount: "₹1,50,000 100% Premium Refund Without Deductions + Regulatory Misconduct Censure",
    takeaway:
      "When an agent falsifies income or employment details on a proposal form, the policy is legally void. The Ombudsman will order a complete refund with zero deductions.",
  },
  {
    title: "District Commission Order: Bank & Insurer Jointly Punished for Mis-Selling Pension Plan Under Loan Sanction Pressure",
    parties: "Suresh Chandra Gupta v. Max Life Insurance Co. Ltd. & Axis Bank Ltd.",
    citation: "Consumer Complaint No. 182/2022, DCDRC Jaipur-II",
    date: "Order Dated 24 July 2024",
    facts:
      "A borrower applied for a home loan. The bank manager insisted that loan approval required a one-time insurance policy of ₹2,40,000. The money was instead placed into an annual recurring pension plan. The borrower was told no further payments were needed. Next year, another ₹2,40,000 was auto-debited without clear consent.",
    holding:
      "The District Commission held that forcing customers to buy insurance to secure a loan is illegal under RBI and IRDAI rules. The commission held both the bank and the insurer liable. It ordered an immediate refund of both debits totaling ₹4,80,000 with 9% interest, ₹50,000 damages, and ₹15,000 costs.",
    amount: "₹4,80,000 Total Debits Refunded @ 9% Interest + ₹50,000 Unfair Trade Practice Damages + ₹15,000 Costs",
    takeaway:
      "Banks cannot force you to buy insurance as a condition for approving loans. If a policy was forced or renewed without consent, both the bank and the insurer face joint penalties in court.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "If you signed the proposal form or accepted the OTP, you cannot challenge mis-selling.",
    fact: "Under Section 19 of the Contract Act and IRDAI rules, fraud and misrepresentation cancel consent. A signature obtained through false verbal promises does not make an unfair practice legal.",
  },
  {
    myth: "The free-look period is only 15 days, and once it passes, your entire premium is permanently forfeited.",
    fact: "Under IRDAI rules, the free-look window is 30 days for online policies. For confirmed mis-selling or forged papers, the 30-day limit does not apply because the contract is void from the start.",
  },
  {
    myth: "Banks are not responsible for policies sold by their staff; only the insurance company is liable.",
    fact: "Banks acting as corporate insurance agents are legally responsible for their staff. Both the bank and the insurer share joint liability for mis-selling and deceptive statements.",
  },
  {
    myth: "If you stop paying premiums on a regular ULIP, you lose 100% of your invested money.",
    fact: "Insurers cannot seize your entire capital. Under IRDAI rules, your funds move to a Discontinued Policy Fund earning at least 4% annual interest, repayable after the 5-year lock-in.",
  },
  {
    myth: "Approaching the Insurance Ombudsman requires high court fees and an advocate.",
    fact: "The Insurance Ombudsman is completely free. There are no court fees, lawyers are not needed, and rulings up to ₹50 Lakh are legally binding on insurers.",
  },
  {
    myth: "Insurers can take months to process a free-look refund without paying interest.",
    fact: "Under IRDAI regulations, insurers must process free-look refunds within seven working days. Any delay requires payment of penal interest at 2% above the bank rate.",
  },
];

const FAQS = [
  {
    question: "What is the free-look period refund rule under IRDAI regulations?",
    answer:
      "Under IRDAI regulations, policyholders can cancel a policy within 30 days of receiving the documents for online purchases, or 15 days for offline purchases. The insurer must refund the premium after deducting only proportionate cover cost, medical exam fees, and stamp duty. If delayed past 7 days, the insurer must pay penal interest.",
  },
  {
    question: "Can I get a refund if my insurance policy was mis-sold as a Fixed Deposit (FD)?",
    answer:
      "Yes. Mis-selling life insurance or ULIPs as fixed deposits is an unfair trade practice under Section 2(47) of the Consumer Protection Act. Even if 30 days have passed, you can claim a 100% refund without exit charges. File a complaint with the company officer, escalate to Bima Bharosa, and approach the Insurance Ombudsman.",
  },
  {
    question: "How do I file a policy mis-selling complaint with IRDAI Bima Bharosa?",
    answer:
      "First, file a written complaint with the insurance company's grievance officer. If they do not resolve the matter within 14 days, visit bimabharosa.irdai.gov.in or call 155255. Provide your policy number, agent details, and evidence of misrepresentation. IRDAI will track the complaint and order insurer action.",
  },
  {
    question: "What should I do if the insurance company claims my free-look cancellation request was late?",
    answer:
      "Under IRDAI rules, the 30-day free-look clock begins when you physically receive the policy document or email attachment. It does not start on the issue date. Ask the insurer to provide courier delivery proof with your signature. Without delivery proof, the insurer cannot reject your request.",
  },
  {
    question: "Can the Insurance Ombudsman award a refund for mis-sold policies?",
    answer:
      "Yes. Under Insurance Ombudsman Rules, the Ombudsman handles complaints about mis-selling and refund delays up to ₹50 Lakh. The process is completely free. If the Ombudsman finds misrepresentation or forged details, they issue a binding order directing a full refund with interest.",
  },
  {
    question: "How does serving an advocate legal notice help recover money from an insurance company?",
    answer:
      "An advocate legal notice informs the insurer of regulatory violations under IRDAI norms and consumer law. It gives the insurer 15 days to refund your premium with interest before court action. Facing regulatory scrutiny and court costs, most insurers settle valid claims at this stage.",
  },
  {
    question: "Policy galat bechi gayi ya FD bolkar insurance thop diya, paise wapas kaise lein?",
    answer:
      "Agar agent ne FD bolkar insurance bech diya hai, toh aap pura paisa wapas le sakte hain. Sabse pehle insurer ko cancellation letter bhejein. 14 din mein hal na hone par IRDAI Bima Bharosa par complaint karein aur advocate notice bhejein. Iske baad Ombudsman ya consumer court se 100% refund mil sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sold the Wrong Policy? Free-Look Cancellation and Mis-Selling Refunds",
  description:
    "Policy mis-sold as an investment or FD? Free-look rights, mis-selling complaints to IRDAI and the ombudsman, and how to get a refund.",
  datePublished: "2026-11-04T12:00:00+05:30",
  dateModified: "2026-11-04T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/insurance-mis-selling-free-look-refund`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Insurance Mis-Selling and Free-Look Cancellation",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Insurance Recovery",
      item: `${SITE_URL}/legal-notice-to-insurance-company-claim-rejection-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Free-Look & Mis-Selling Refund",
      item: `${SITE_URL}/insurance-mis-selling-free-look-refund`,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function InsuranceMisSellingRefundPage() {
  const breadcrumbItems = [
    {
      label: "Insurance Recovery",
      href: "/legal-notice-to-insurance-company-claim-rejection-recovery",
    },
    {
      label: "Free-Look & Mis-Selling Refund",
      href: "/insurance-mis-selling-free-look-refund",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching high-converting theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IRDAI Master Circular 2024 / 2026 Standards</span>
              <span className="text-red-500">•</span>
              <span>Policy Mis-Selling &amp; Free-Look Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Sold the Wrong Policy? Free-Look Cancellation and Mis-Selling Refunds
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Free-Look Cancellation &amp; Mis-Selling Restitution)
              </p>
              <p>
                Under IRDAI rules and consumer law, you can cancel any unwanted policy within 30 days of receiving it for a full refund. If the policy was mis-sold as a fixed deposit or with forged forms, the contract is void under the Contract Act. You are entitled to a full refund with interest via Bima Bharosa, the Ombudsman, or a legal notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Free-Look Cancellation Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">For Substituted / Mis-Sold Contracts</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Bank Rate + 2%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Interest on Delayed Refunds</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50 Lakhs</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Insurance Ombudsman Pecuniary Cap</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <InsuranceMisSellingTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview & Problem Diagnosis */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Insurance Mis-Selling &amp; Free-Look Rights Explained
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every year, thousands of Indian consumers walk into commercial bank branches looking to renew fixed deposits or invest retirement savings, only to be lured into multi-year recurring life insurance or high-risk Unit-Linked Insurance Plans (ULIPs). Bank relationship managers and tele-callers routinely disguise these policies as &quot;guaranteed 10%–12% bank schemes&quot;, &quot;single-premium wealth plans&quot;, or &quot;pre-approved tax-free growth funds&quot;.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When the physical policy bond arrives weeks later—or when an unexpected second-year premium demand triggers a panic alert—policyholders are falsely told that the policy cannot be cancelled, that signed documents cannot be questioned, or that cancelling will result in 100% capital forfeiture.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This narrative is legally false. Under regulations enforced by the Insurance Regulatory and Development Authority of India (IRDAI), the Consumer Protection Act, 2019, and the Indian Contract Act, 1872, consumers have clear, enforceable statutory protections. Whether you are within the 30-day free-look period or dealing with an egregious mis-selling fraud discovered months later, the law provides concrete remedies to reclaim your hard-earned money. If your dispute also involves medical claim repudiation, review our specialized guide on{" "}
                  <Link
                    href="/health-insurance-claim-rejection-reasons-counter"
                    className="text-blue-700 underline font-semibold"
                  >
                    health insurance claim rejection grounds and counter-arguments
                  </Link>.
                </p>
              </section>

              {/* Section 2: Interactive Pre-Flight Checklist Wizard (Archetype G3 Requirement) */}
              <section id="heading-checklist-wizard" aria-labelledby="heading-checklist-wizard-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-checklist-wizard-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Flight Checklist: Free-Look Cancellation Claims
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Complete this 6-point verification audit before submitting your cancellation demand to ensure unassailable evidentiary standing.
                  </p>
                </div>

                <InsuranceMisSellingChecklistWizard />
              </section>

              {/* Section 3: Document & Evidence Matrix Table (Archetype G3 Requirement) */}
              <section id="heading-evidence-matrix" aria-labelledby="heading-evidence-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Matrix: What Proof Matters for Free-Look
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To succeed before the Insurance Ombudsman or Consumer Commission, your case must rest on concrete documentation rather than oral allegations. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and official bank logs carry full evidentiary weight:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Insurance Mis-Selling Evidentiary Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Document / Proof</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Why It Matters in Court</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Where to Get It</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Admissibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Policy Schedule &amp; First Premium Receipt (FPR)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Proves the policy number, commencement date, premium paying term (PPT), and exact sum assured.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Insurer welcome kit, customer portal download, or branch service counter.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-emerald-700">
                          Primary Contract Document
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Courier Consignment Slip / Delivery Email Header
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Establishes the precise start date for the 30-day statutory free-look window, rebutting premature expiry claims.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          India Post / Blue Dart online tracking receipt or e-policy email inbox headers.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-blue-700">
                          Section 63 BSA Digital Log
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Certified Proposal Form &amp; Benefit Illustration
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Exposes forged signatures, fabricated income levels, and lack of signed mandatory 4%/8% return illustrations.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Formal RTI application or written demand to the insurer&apos;s Grievance Redressal Officer.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">
                          Sec. 19 Contract Act (Fraud)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bank / WhatsApp Sales Pitch &amp; Calculation Sheets
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Proves that the bank executive falsely promised a &quot;Fixed Deposit&quot; or &quot;3-year one-time investment&quot;.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Exported WhatsApp chat backups, email threads, or handwritten bank calculation slips.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-purple-700">
                          Section 2(47) CPA 2019 Proof
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          PIVC (Pre-Issuance Verification Call) Audio Recording
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Demonstrates agent coaching or deceptive leading questions during the automated tele-verification process.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Demanded via written grievance under IRDAI Policyholder Protection Master Circular.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-amber-700">
                          Audio Record (BSA Sec. 63)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bank Statement with Debits &amp; NACH Mandate UMRN
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Verifies initial premium debit and establishes unauthorized recurring standing instructions.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          NetBanking account statement and bank mandate management section.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-emerald-700">
                          Certified Bank Record
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Understanding statutory terms: To learn how insurers categorize repudiations versus technical denials, read our deep-dive on{" "}
                  <Link href="/claim-repudiated-vs-rejected-difference" className="text-blue-700 underline">
                    the legal difference between claim repudiation and rejection
                  </Link>.
                </p>
              </section>

              {/* Section 4: Myth vs Fact */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs Fact: 6 Misconceptions in Policy Mis-Selling
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Insurance agents rely on customer ignorance to enforce unfair lock-ins. Here is what the statutory law actually says.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">
                            ✕
                          </span>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600">
                            Widespread Myth
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                          &quot;{item.myth}&quot;
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                            ✓
                          </span>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                            Statutory Reality
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.fact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Case Law & Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Rulings on Insurance Mis-Selling
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Mis-Selling Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial / Ombudsman Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Relief Awarded
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Life &amp; General Insurers
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Resolution Rail Flowchart (Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Rail: Mis-Selling to 100% Restitution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to bypass automated call center deflection and enforce your rights under IRDAI and consumer protection laws:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Discrepancy Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Audit policy bond within 30 days of delivery; preserve courier slips and sales pitch chats.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Written Free-Look Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Submit formal cancellation notice to insurer GRO with reason for objection.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">IRDAI Bima Bharosa Complaint</h3>
                    <p className="text-xs text-slate-700 mt-1">If uncredited after 14 days, register docket on bimabharosa.irdai.gov.in.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory pre-litigation demand served to Principal Officer via Speed Post.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Insurance Ombudsman / e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">Binding award up to ₹50 Lakhs with statutory interest and damages.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Insurance Mis-Selling & Free-Look Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="insGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="insAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="insSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#insGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Policy Delivery</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Audit 30-Day Window</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Preserve Courier Slip</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Free-Look Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Written Notice to GRO</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand 100% Refund</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Bima Bharosa</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">IRDAI Grievance Cell</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">14-Day Mandatory TAT</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#insAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Insurer + Bank MD</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#insSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Ombudsman Award</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES UNDER IRDAI MASTER CIRCULAR &amp; OMBUDSMAN RULES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Free-Look Cancellation Period: 30 Calendar Days from physical or verified electronic policy delivery</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Insurer Refund TAT: 7 Business Days from receipt of cancellation (penal interest at bank rate + 2% thereafter)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Insurance Ombudsman Cap: Up to ₹50 Lakhs award with zero court fee; binding within 30 days of award</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Reclaim Mis-Sold Insurance Premiums
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Extracted from hundreds of successful Insurance Ombudsman awards and consumer commission decrees, this tactical 5-step playbook overcomes corporate stonewalling:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture Delivery Timestamps &amp; Audit the Policy Schedule
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Immediately upon receiving the policy packet, photograph the courier envelope showing the tracking consignment label and barcode. Check the &quot;Premium Paying Term&quot; (PPT). If you agreed to a single deposit but the policy states annual recurring payments for 10 years, or if an endowment plan was delivered instead of the promised FD, freeze all communication with the sales agent.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Formal Free-Look Cancellation to the Insurer&apos;s GRO
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Draft a formal letter invoking Regulation 10 of the IRDAI Policyholder Protection Regulations. State your policy number, receipt date, and specific reasons for objection (e.g., &quot;Product features materially contradict verbal representations&quot;). Submit it via registered email to the Grievance Redressal Officer (GRO) and submit a physical copy at the nearest branch, insisting on an in-person receiving stamp.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to IRDAI Bima Bharosa &amp; File Banking Grievance
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the insurer fails to process the full refund within 14 days or issues a wrongful rejection, register a docket on <a href="https://bimabharosa.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">bimabharosa.irdai.gov.in</a>. If the policy was sold inside a bank branch by an RM, simultaneously lodge an online banking grievance with the bank&apos;s Principal Nodal Officer alleging predatory bancassurance mis-selling.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a recovery advocate to issue a 15-day statutory demand notice addressed to the insurer&apos;s Principal Officer and the corporate bank partner. The notice cites Section 2(47) Consumer Protection Act, Section 19 Contract Act, and IRDAI circulars, demanding immediate reversal of all debited premiums plus penal interest under threat of joint prosecution and regulatory sanctions.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent notice drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Approach the Insurance Ombudsman or Consumer Commission (e-Jagriti)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the notice window expires without full restitution, file a complaint before your territorial Insurance Ombudsman. Under the Insurance Ombudsman Rules, 2017 (amended 2023), ombudsmen pass binding awards up to ₹50 Lakhs within 3 months, with no court fees. Alternatively, file an online consumer case on e-Jagriti claiming full refund, statutory interest, and punitive damages for unfair trade practices. For detailed filing guidance, consult our{" "}
                        <Link href="/legal-notice-to-insurance-company-claim-rejection-recovery" className="text-blue-700 underline">
                          Insurance Ombudsman and Bima Bharosa escalation guide
                        </Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Statutory Deadlines & Benchmarks Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines: Free-Look &amp; Ombudsman Limits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Insurers are bound by strict turnaround times under IRDAI regulations and Ministry of Finance rules. They cannot invent arbitrary delays:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">IRDAI Statutory Refund Benchmarks &amp; Timelines</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Stage / Action</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Regulation / Benchmark</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence if Breached</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Free-Look Cancellation Filing (Distance / Digital)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">IRDAI Master Circular 2024</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full refund minus prorated risk/medical charges</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Free-Look Cancellation Filing (Physical Face-to-Face)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 to 30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">IRDAI (PPHI) Regulations</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Calculated strictly from physical document receipt</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Insurer Refund Processing Turnaround
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">IRDAI Master Circular 2024</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory penal interest @ Bank Rate + 2%</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Insurer Grievance Redressal (GRO TAT)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">14 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">IRDAI Grievance Disposal Norms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Right to escalate to Bima Bharosa / Ombudsman</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Pre-Litigation Legal Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Consumer Protection Act, 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Triggers court litigation and punitive cost claims</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Insurance Ombudsman Pecuniary Jurisdiction
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-purple-700 font-bold">Up to ₹50 Lakhs</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Ombudsman Rules 2017 (amended)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Binding on insurer within 30 days of award</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  If an unauthorized NACH mandate debited recurring premiums, see our guide on{" "}
                  <Link href="/insurance-premium-auto-debited-without-consent" className="text-blue-700 underline">
                    unauthorized insurance premium auto-debit recovery
                  </Link>.
                </p>
              </section>

              {/* Section 9: Problem Tabs Component (Interactive Scenario Picker) */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Mis-Selling Traps &amp; Immediate Legal Solutions
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select your specific scenario to reveal the governing statutory section and customized remediation steps.
                  </p>
                </div>

                <InsuranceMisSellingProblemTabs />
              </section>

              {/* Section 10: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Citizen Recovers ₹2,50,000 Mis-Sold Policy
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bancassurance Dispute • Pune, Maharashtra</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Prabhakar Kulkarni, a 63-year-old retired state electricity board engineer, visited a nationalized bank branch in Pune to roll over a matured fixed deposit of ₹2,50,000. A young relationship manager convinced him that standard bank FD interest rates were too low and offered a &quot;Special 3-Year High-Yield Growth Deposit Scheme&quot; yielding a guaranteed 11.5% annual return. Prabhakar signed the application forms in good faith and issued a cheque for ₹2,50,000.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> 45 days later, Prabhakar received an SMS acknowledging his enrolment in a 12-year regular premium Unit Linked Insurance Plan (ULIP) requiring an annual commitment of ₹2,50,000 every year until 2036. When he visited the branch, the relationship manager claimed that the 30-day free-look period had already expired and that cancelling would result in 100% surrender forfeiture under policy terms. Prabhakar&apos;s written grievance to the insurer was dismissed with a canned response citing his signed proposal form.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Prabhakar engaged LegalRecovery.in. An advocate conducted an audit and discovered three fatal flaws: (1) India Post tracking showed the physical policy document was delivered only 18 days prior, keeping the free-look window active; (2) The mandatory IRDAI 4% &amp; 8% Benefit Illustration was missing Prabhakar&apos;s signature; and (3) The relationship manager had falsified Prabhakar&apos;s annual income on the proposal form to bypass senior citizen underwriting checks.
                    </p>
                    <p>
                      The advocate served a formal statutory demand notice to both the Bank Chairman and the Insurer&apos;s Managing Director, invoking Section 2(47) Consumer Protection Act, 2019, and IRDAI Mis-Selling Directives.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution &amp; Outcome:</strong>
                      On Day 9 following delivery of the advocate legal notice, the insurer&apos;s Head of Legal contacted Prabhakar to tender an unconditional apology. The policy was cancelled ab initio under Regulation 10. The entire premium of ₹2,50,000 was credited back to his savings account along with 9% statutory interest (₹5,547) and an ex-gratia compensation of ₹20,000 for distress.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Template Download / Copy Block (Archetype G3 Requirement) */}
              <section id="heading-template-download" aria-labelledby="heading-template-download-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-template-download-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Free-Look Cancellation &amp; Mis-Selling Demand Notice Format
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Use this standard statutory notice format to formally demand policy rescission and 100% premium refund from the insurer.
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                      Statutory Demand Notice Template
                    </span>
                    <span className="text-xs text-slate-400">Section 2(47) CPA 2019 &amp; IRDAI Master Circular</span>
                  </div>

                  <pre className="text-xs sm:text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto max-h-96">
{`To,
The Grievance Redressal Officer / Principal Officer,
[NAME OF INSURANCE COMPANY],
[Corporate / Branch Office Address],
Email: [OFFICIAL GRO EMAIL]

Copy to:
The Branch Manager, [NAME OF BANK / BROKERAGE], [Branch Address]

Subject: FORMAL NOTICE FOR CANCELLATION UNDER STATUTORY FREE-LOOK PERIOD AND 100% PREMIUM REFUND DUE TO MIS-SELLING — POLICY NO: [POLICY NUMBER]

Sir / Madam,

I am writing to formally exercise my statutory right of Free-Look Cancellation under Regulation 10 of the IRDAI (Protection of Policyholders' Interests) Regulations, 2017 / IRDAI Master Circular 2024, in respect of Policy No. [POLICY NUMBER] issued in the name of [POLICYHOLDER FULL NAME].

1. DATE OF RECEIPT & FREE-LOOK TIMELINESS:
The physical policy document was delivered to my registered residential address on [EXACT DATE OF DELIVERY] via [COURIER / SPEED POST NAME] bearing Consignment Tracking No: [CONSIGNMENT NUMBER]. Accordingly, this cancellation notice is being tendered well within the mandatory 30-day statutory free-look window.

2. GROUNDS OF OBJECTION & DECEPTIVE MIS-SELLING:
Upon careful perusal of the policy schedule, I find that the product features materially contradict the verbal commitments made by your representative / bank executive [NAME OF AGENT / RM]:
a) The product was represented to me as a "Guaranteed Return Fixed Deposit / Single-Payment Scheme", whereas the policy schedule mandates regular annual premium payments of ₹[ANNUAL PREMIUM] for [PPT YEARS] years.
b) Mandatory pre-contractual disclosures, including the IRDAI 4% & 8% signed Benefit Illustration, were never provided.
c) Material underwriting particulars on the proposal form were filled without my knowledge or consent.

3. STATUTORY DEMAND FOR REFUND:
Under IRDAI Master Circular 2024 regulations, you are legally mandated to process the cancellation and refund the premium of ₹[PREMIUM AMOUNT PAID] to my bank account within 7 working days.

My Bank Account Details for Inward NEFT/RTGS:
Account Holder: [FULL NAME AS PER BANK]
Bank Name: [BANK NAME] | Account Number: [ACCOUNT NUMBER]
IFSC Code: [IFSC CODE]

Please take notice that failure to remit the complete refund within 7 working days will attract penal interest at 2% above the prevailing Bank Rate, alongside formal complaint escalation to the Insurance Ombudsman under Rule 13 of the Insurance Ombudsman Rules, 2017, and initiation of proceedings before the Consumer Disputes Redressal Commission on e-Jagriti.

Yours faithfully,
[YOUR FULL NAME]
Mobile: [CONTACT NUMBER] | Email: [EMAIL ADDRESS]
Date: [CURRENT DATE]`}
                  </pre>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                    <span>Need our advocates to customize, verify, and dispatch this notice via Speed Post?</span>
                    <a
                      href="#heading-cta-block"
                      className="text-red-400 hover:text-red-300 font-bold underline"
                    >
                      Draft Lawyer Notice — ₹1,499 →
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Escalating to the Ombudsman? Read our{" "}
                  <Link href="/legal-notice-to-insurance-company-claim-rejection-recovery" className="text-blue-700 underline">
                    insurance claim escalation guide (IRDAI, Bima Bharosa and Ombudsman)
                  </Link>.
                </p>
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Insurance Mis-Selling &amp; Free-Look Refunds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Grounded in IRDAI Master Circular Directives, Ombudsman Orders, and Consumer Court Jurisprudence
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Insurance Statutes &amp; Primary Official References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against active IRDAI Master Circulars, Insurance Ombudsman Rules (amended 2023), and Gazette notifications as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Demand Notice to the Insurer
                </h2>
                <InsuranceMisSellingNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Insurance &amp; Financial Dispute Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Notice to Insurer for Claim Rejection →
                  </Link>
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bima Bharosa &amp; Ombudsman Guide →
                  </Link>
                  <Link
                    href="/claim-repudiated-vs-rejected-difference"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Claim Repudiated vs Rejected →
                  </Link>
                  <Link
                    href="/claim-repudiated-vs-rejected-difference"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Repudiated vs Rejected Difference →
                  </Link>
                  <Link
                    href="/insurance-premium-auto-debited-without-consent"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Insurance Premium Auto-Debited Without Consent →
                  </Link>
                  <Link
                    href="/health-insurance-claim-rejection-reasons-counter"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Health Insurance Claim Rejection Counter →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
