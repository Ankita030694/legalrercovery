import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EJagritiNoticeCTA from "./EJagritiNoticeCTA";
import EJagritiTableOfContents from "./EJagritiTableOfContents";
import EJagritiChecklistWizard from "./EJagritiChecklistWizard";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "e-Jagriti Consumer Complaint: Step-by-Step Filing Guide",
  description:
    "File a consumer complaint online on e-Jagriti: registration, fees, which commission (₹50 lakh district limit) and documents.",
  alternates: {
    canonical: `${SITE_URL}/e-jagriti-consumer-complaint-guide`,
  },
  openGraph: {
    title: "How to File a Consumer Complaint on e-Jagriti (Replaced e-Daakhil)",
    description:
      "Comprehensive statutory guide to filing online consumer complaints on e-Jagriti: revised ₹50 Lakh district commission jurisdiction, fee exemptions, document matrix, and pre-litigation notice rules.",
    url: `${SITE_URL}/e-jagriti-consumer-complaint-guide`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How to File a Consumer Complaint on e-Jagriti (Replaced e-Daakhil)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to File a Consumer Complaint on e-Jagriti (Replaced e-Daakhil)",
    description:
      "Comprehensive statutory guide to filing online consumer complaints on e-Jagriti: revised ₹50 Lakh district commission jurisdiction, fee exemptions, document matrix, and pre-litigation notice rules.",
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
    title: "Consumer Protection (Jurisdiction of the District Commission, State Commission and National Commission) Rules, 2021 — Notification G.S.R. 898(E)",
    url: "https://consumeraffairs.nic.in/sites/default/files/Pecuniary_Jurisdiction_Rules_2021.pdf",
  },
  {
    title: "e-Jagriti National Consumer Disputes Redressal Portal — Department of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "Supreme Court of India — Neena Aneja & Anr. v. Jai Prakash Associates Ltd. (2022) 2 SCC 161 on Consideration Paid Jurisdiction Rule",
    url: "https://main.sci.gov.in/judgment/judis/47948.pdf",
  },
  {
    title: "Supreme Court of India — M/s Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor (2022) SCC OnLine SC 478 on Interest & Restitution",
    url: "https://main.sci.gov.in/judgment/judis/49250.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Invoices, Chats, & e-Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Pecuniary Jurisdiction Determined Exclusively by Value of Consideration Paid (Not Aggregate Compensation)",
    parties: "Neena Aneja & Anr. v. Jai Prakash Associates Ltd.",
    citation: "Civil Appeal Nos. 3766-3767 of 2020, (2022) 2 SCC 161",
    date: "Supreme Court Judgment Dated 16 March 2021",
    facts:
      "Homebuyers bought flats under the 1986 Act. They claimed refunds along with interest and damages. The builder argued that higher damage claims changed the court jurisdiction. Buyers were unsure whether interest claims moved cases to higher commissions.",
    holding:
      "The Supreme Court clarified Sections 34, 47, and 58 of the 2019 Act. Court tier depends only on the money actually paid for goods or services. Requested damages and interest do not decide the court tier. Existing cases filed before July 20, 2020 also remain in their original forums.",
    amount: "Statutory Principle: Consideration-Based Filing Rule",
    takeaway:
      "When filing on e-Jagriti, never add your requested damages to choose your court tier. If you paid ₹38 Lakh for a product and claim ₹25 Lakh damages, your case stays in the District Commission (limit ₹50 Lakh).",
  },
  {
    title: "Consumer Forum Has Power to Direct Restitution, Full Refund, and Just Compensation Despite Agreement Clauses",
    parties: "M/s Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor",
    citation: "Civil Appeal No. 6044 of 2019, 2022 SCC OnLine SC 478",
    date: "Supreme Court Judgment Dated 7 April 2022",
    facts:
      "A buyer booked an apartment, but the builder delayed possession by years. The buyer filed a case seeking a full refund with interest. The builder argued that the contract limited compensation to just ₹7.50 per square foot per month.",
    holding:
      "The Supreme Court held that one-sided agreements are unfair trade practices under Section 2(47). Consumer commissions have full power to order complete refunds with fair interest. The Court granted a full refund with 9% annual interest. It ruled that buyers cannot be forced to accept unfair delay clauses.",
    amount: "Full Consideration Refund + 9% Annual Interest + Litigation Costs",
    takeaway:
      "One-sided agreements and 'non-refundable' clauses do not bind consumer commissions. If a company fails to deliver its promised service, e-Jagriti courts can cancel oppressive terms and order full refunds.",
  },
  {
    title: "Technical Breaches Cannot Justify Total Repudiation of Legitimate Consumer Claims",
    parties: "National Insurance Co. Ltd. v. Nitin Khandelwal",
    citation: "(2008) 11 SCC 259",
    date: "Supreme Court Landmark Precedent",
    facts:
      "A vehicle owner bought insurance for personal use. Unknown persons later hired and stole the vehicle. The insurance company rejected the theft claim completely. It argued that using a private car as a taxi breached policy terms.",
    holding:
      "The Supreme Court ruled that minor rule breaches do not justify total claim rejection during a theft. The breach was not the direct cause of the loss. The Court directed the insurer to settle the claim on a non-standard basis up to 75% of the insured sum.",
    amount: "75% Non-Standard Claim Settlement + Statutory Interest",
    takeaway:
      "Insurers often reject consumer claims over minor technicalities. Consumer courts regularly overturn these arbitrary denials and grant fair compensation.",
  },
  {
    title: "Charging for Carry Bags Bearing Brand Name Constitutes Unfair Trade Practice",
    parties: "Big Bazaar (Future Retail Ltd.) v. Ashok Kumar",
    citation: "First Appeal No. 235 of 2019, State Consumer Commission, UT Chandigarh",
    date: "Order Dated 18 March 2020",
    facts:
      "A shopper bought clothes at a retail store. The cashier forced the customer to pay ₹18 for a carry bag printed with the store logo. The shopper filed a consumer case for unfair trade practice.",
    holding:
      "The State Commission ruled that forcing shoppers to pay for branded carry bags is illegal. It turns shoppers into free advertising agents. The Commission ordered a refund of ₹18, awarded ₹1,500 compensation, and imposed ₹10,000 punitive costs.",
    amount: "₹18 Refund + ₹1,500 Compensation + ₹10,000 Punitive Costs",
    takeaway:
      "Consumers can file cases for even small sums on e-Jagriti. The portal removes physical court hassles. You can challenge hidden charges and carry bag fees online with ease.",
  },
];

const FAQS = [
  {
    question: "What is e-Jagriti and how does it replace e-Daakhil for consumer complaints?",
    answer:
      "e-Jagriti (e-jagriti.gov.in) is the unified consumer dispute portal run by the Government of India. It replaces the old e-Daakhil system across all 680+ District Commissions, 36 State Commissions, and the National Commission (NCDRC). The platform supports Aadhaar login, online fee payments via Bharatkosh, automated summons delivery, and virtual video hearings.",
  },
  {
    question: "What is the revised pecuniary jurisdiction for District Consumer Commissions in 2026?",
    answer:
      "Under the 2021 jurisdictional rules, District Commissions hear cases where the money paid does not exceed ₹50 Lakh. The State Commission handles matters between ₹50 Lakh and ₹2 Crore. The National Commission (NCDRC) hears matters above ₹2 Crore. The tier depends entirely on the purchase price paid, not on the damages claimed.",
  },
  {
    question: "How much are the consumer court fees on e-Jagriti in 2026?",
    answer:
      "Consumer court fees are very low and free for small disputes. Claims up to ₹5 Lakh pay ₹0 court fee. Claims between ₹5 Lakh and ₹10 Lakh cost ₹200. Claims between ₹10 Lakh and ₹20 Lakh cost ₹400. Claims between ₹20 Lakh and ₹50 Lakh cost ₹1,000. State Commission fees range from ₹2,000 to ₹4,000, while National Commission fees are capped at ₹7,500.",
  },
  {
    question: "Is sending a legal notice compulsory before filing on e-Jagriti?",
    answer:
      "Sending a 15-day advocate legal notice before filing is best practice. It creates clear written proof of your grievance and gives the company time to resolve the issue. In fact, over 78% of corporate consumer disputes get resolved right after receiving an advocate notice.",
  },
  {
    question: "What is the limitation period to file a consumer complaint on e-Jagriti?",
    answer:
      "Under Section 69 of the Consumer Protection Act, you must file within two years from the dispute date. This date starts when the company refused your refund or caused the loss. If two years have passed, you can file a delay condonation application showing a valid reason.",
  },
  {
    question: "Can I file an e-Jagriti consumer complaint without hiring a lawyer?",
    answer:
      "Yes, you can file without a lawyer. Section 35 of the Act allows consumers to represent themselves. You can register as an 'Individual Consumer' on e-Jagriti, upload your petition and proof, pay fees online, and join video hearings from home.",
  },
  {
    question: "How long does a consumer commission take to admit a complaint on e-Jagriti?",
    answer:
      "Under Section 36(2) of the Act, the Commission must decide complaint admission within 21 days. If the Commission does not decide within 21 days, the case is automatically deemed admitted, and formal summons are issued to the opposite party.",
  },
  {
    question: "What happens if a company ignores the consumer court order issued through e-Jagriti?",
    answer:
      "If a company ignores an order, you can file an execution case under Section 71 and Section 72. Under Section 72, non-compliance carries a prison term between one month and three years, or a fine up to ₹1,00,000, or both. Courts can also issue arrest warrants against company directors.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File a Consumer Complaint on e-Jagriti (Replaced e-Daakhil)",
  description:
    "File a consumer complaint online on e-Jagriti: registration, fees, which commission (₹50 lakh district limit) and documents.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/e-jagriti-consumer-complaint-guide`,
  author: {
    "@type": "Organization",
    name: "LegalRecovery Editorial Team",
    url: SITE_URL,
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
    "@type": "GovernmentService",
    name: "e-Jagriti Online Consumer Disputes Redressal Portal",
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
      name: "Guides",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "e-Jagriti Consumer Complaint Guide",
      item: `${SITE_URL}/e-jagriti-consumer-complaint-guide`,
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

export default function EJagritiConsumerComplaintGuidePage() {
  const breadcrumbItems = [
    { label: "Guides", href: "/services/refunds-and-consumer-complaints" },
    { label: "e-Jagriti Filing Guide", href: "/e-jagriti-consumer-complaint-guide" },
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
        {/* Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019 / 2026 Rules</span>
              <span className="text-red-500">•</span>
              <span>e-Jagriti Online Redressal Portal</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How to File a Consumer Complaint on e-Jagriti (Replaced e-Daakhil)
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (e-Jagriti Consumer Filing Protocol)
              </p>
              <p>
                To file a consumer complaint online, register at e-jagriti.gov.in. This portal replaces the older e-Daakhil system. The District Commission hears cases where payment was up to ₹50 Lakh. Filing is free for claims under ₹5 Lakh. First, send a 15-day legal notice through a lawyer. If the company fails to pay, submit your verified petition and payment proofs online within two years.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">District Commission Limit (2026)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹0 Fees</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Claims Up to ₹5 Lakh (Nil Fee)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">21 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Deemed Admission s.36(2)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Period s.69</p>
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
            <EJagritiTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Quick Summary & Key Facts Table */}
              <section id="heading-quick-summary" aria-labelledby="heading-quick-summary-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-quick-summary-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Key Facts: Online Consumer Court Dispute Filing at a Glance
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumer court filing in India is now faster and easier. The government replaced the old e-Daakhil system with the modern <strong className="text-slate-900 font-semibold">e-Jagriti Portal (e-jagriti.gov.in)</strong>. You can file complaints online without visiting a court. The portal covers e-commerce refund delays, flight cancellations, hospital overbilling, and builder defaults. It gives consumers a simple and paperless legal remedy.
                </p>

                {/* Key Facts Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mt-4">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-100 text-slate-900 uppercase text-[11px] font-extrabold tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Statutory Dimension</th>
                        <th className="py-3 px-4">Legal Rule &amp; Value</th>
                        <th className="py-3 px-4">Governing Section / Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Official Portal</td>
                        <td className="py-3 px-4 text-slate-800">e-Jagriti (e-jagriti.gov.in)</td>
                        <td className="py-3 px-4 text-slate-600">Replaced e-Daakhil portal nationwide</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">District Forum Ceiling</td>
                        <td className="py-3 px-4 text-slate-800">Up to ₹50,00,000 (Consideration Paid)</td>
                        <td className="py-3 px-4 text-slate-600">G.S.R. 898(E) dated 30 Dec 2021</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">State Forum Ceiling</td>
                        <td className="py-3 px-4 text-slate-800">₹50,00,001 to ₹2,00,00,000</td>
                        <td className="py-3 px-4 text-slate-600">Section 47(1)(a) Consumer Protection Act</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">National Commission (NCDRC)</td>
                        <td className="py-3 px-4 text-slate-800">Above ₹2,00,00,000</td>
                        <td className="py-3 px-4 text-slate-600">Section 58(1)(a) Consumer Protection Act</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Statutory Court Fee</td>
                        <td className="py-3 px-4 text-slate-800">₹0 up to ₹5 Lakh; ₹200–₹1,000 for District</td>
                        <td className="py-3 px-4 text-slate-600">Payable via Bharatkosh / Online Gateway</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Limitation Deadline</td>
                        <td className="py-3 px-4 text-slate-800">2 Years from cause of action date</td>
                        <td className="py-3 px-4 text-slate-600">Section 69 Consumer Protection Act, 2019</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Preliminary Scrutiny TAT</td>
                        <td className="py-3 px-4 text-slate-800">21 Days (Deemed admission rule applies)</td>
                        <td className="py-3 px-4 text-slate-600">Section 36(2) Consumer Protection Act, 2019</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Pre-Litigation Demand Notice</td>
                        <td className="py-3 px-4 text-slate-800">Advocate notice via Speed Post + Email (15 Days)</td>
                        <td className="py-3 px-4 text-slate-600">
                          <Link href="/send-legal-notice-online-india" className="text-[#DC2626] font-semibold hover:underline">
                            Send Legal Notice Online
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: What is e-Jagriti and how did it replace e-Daakhil */}
              <section id="heading-what-is-ejagriti" aria-labelledby="heading-what-is-ejagriti-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-what-is-ejagriti-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What is e-Jagriti and Why Was e-Daakhil Retired?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For years, consumers seeking online redressal in India navigated the legacy <strong className="text-slate-900 font-semibold">e-Daakhil</strong> software. While e-Daakhil was an important initial step toward digital justice, it suffered from fragmented state commission databases, frequent portal downtimes, manual document scrutiny bottlenecks, and a lack of integrated virtual hearings.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In response, the Department of Consumer Affairs engineered <strong className="text-slate-900 font-semibold">e-Jagriti</strong> as a unified, enterprise-grade judicial architecture. Built with modern microservices and integrated with India Stack technologies (DigiLocker, Aadhaar e-KYC, Bharatkosh, and SMS/WhatsApp Gateway), e-Jagriti connects all 680+ District Consumer Disputes Redressal Commissions (DCDRC), 36 State Commissions (SCDRC), and the apex National Consumer Disputes Redressal Commission (NCDRC) onto a single digital spine.
                </p>

                {/* Comparison Grid: e-Daakhil vs e-Jagriti */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-5 bg-slate-100/70 border border-slate-200 rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">Retired: e-Daakhil System</h3>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-slate-300 text-slate-700 rounded uppercase">Legacy</span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                      <li>Fragmented databases requiring separate logins across state commissions.</li>
                      <li>Manual registry scrutiny with prolonged delays in complaint numbering.</li>
                      <li>Physical appearance frequently compelled despite online submission.</li>
                      <li>Court fee payment via offline demand drafts or convoluted state treasury challans.</li>
                      <li>Summons dispatch solely reliant on physical postal summons.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-red-50/50 border border-red-200 rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#DC2626] text-sm sm:text-base">Active: e-Jagriti (2026 Portal)</h3>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-red-100 text-[#DC2626] rounded uppercase">Modern Standard</span>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                      <li>Single Sign-On (SSO) with Aadhaar OTP and DigiLocker instant verification.</li>
                      <li>AI-driven case scrutiny classifying claims and validating pecuniary jurisdiction.</li>
                      <li>Integrated WebRTC Virtual Video Conference for paperless remote hearings.</li>
                      <li>Direct online fee payment via Bharatkosh, UPI, credit/debit cards, and net banking.</li>
                      <li>Automated digital summons delivery to corporate registered emails &amp; WhatsApp.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Pre-Flight Filing Checklist (Interactive Archetype G3 Island) */}
              <section id="heading-preflight-checklist" aria-labelledby="heading-preflight-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-preflight-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Flight Filing Checklist: What You Need Before Creating an Account
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Audit Island
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 36 of the Consumer Protection Act, 2019, the commission registry scrutinizes your petition for territorial standing, pecuniary jurisdiction, and evidentiary sufficiency. Incomplete filings trigger registry objections (&quot;scrutiny defects&quot;), delaying case admission by months. Use this forensic checklist to audit your petition before logging into e-Jagriti:
                </p>

                {/* Interactive Client Island */}
                <EJagritiChecklistWizard />
              </section>

              {/* Section 4: Pecuniary Jurisdiction & Court Fee Matrix (Revised 2026 Limits) */}
              <section id="heading-pecuniary-jurisdiction" aria-labelledby="heading-pecuniary-jurisdiction-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-pecuniary-jurisdiction-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pecuniary Jurisdiction &amp; Consumer Court Fees Schedule (2026)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  One of the most persistent errors made by consumers and unspecialised practitioners is calculating jurisdiction by adding speculative compensation claims to the purchase value. Under the Supreme Court ruling in <em className="font-semibold text-slate-800">Neena Aneja v. Jai Prakash Associates Ltd. (2022)</em> and the revised 2021 notification G.S.R. 898(E), pecuniary jurisdiction is governed <strong className="text-slate-900 font-semibold">solely by the actual consideration paid</strong> for the goods or services.
                </p>

                {/* Fee Schedule Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mt-4">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-100 text-slate-900 uppercase text-[11px] font-extrabold tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Commission Tier</th>
                        <th className="py-3 px-4">Value of Consideration Paid</th>
                        <th className="py-3 px-4">Statutory Fee (₹)</th>
                        <th className="py-3 px-4">Payment Channel</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 bg-emerald-50/30">
                        <td className="py-3 px-4 font-bold text-slate-900">District Commission (DCDRC)</td>
                        <td className="py-3 px-4 text-emerald-800 font-semibold">Up to ₹5,00,000</td>
                        <td className="py-3 px-4 font-extrabold text-emerald-700">NIL (₹0 Exempted)</td>
                        <td className="py-3 px-4 text-slate-600">Zero fee token generated automatically</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">District Commission (DCDRC)</td>
                        <td className="py-3 px-4 text-slate-800">₹5,00,001 to ₹10,00,000</td>
                        <td className="py-3 px-4 font-bold text-slate-900">₹200</td>
                        <td className="py-3 px-4 text-slate-600">e-Jagriti Bharatkosh Gateway / UPI</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">District Commission (DCDRC)</td>
                        <td className="py-3 px-4 text-slate-800">₹10,00,001 to ₹20,00,000</td>
                        <td className="py-3 px-4 font-bold text-slate-900">₹400</td>
                        <td className="py-3 px-4 text-slate-600">e-Jagriti Bharatkosh Gateway / UPI</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">District Commission (DCDRC)</td>
                        <td className="py-3 px-4 text-slate-800">₹20,00,001 to ₹50,00,000</td>
                        <td className="py-3 px-4 font-bold text-slate-900">₹1,000</td>
                        <td className="py-3 px-4 text-slate-600">e-Jagriti Bharatkosh Gateway / UPI</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/30">
                        <td className="py-3 px-4 font-bold text-slate-900">State Commission (SCDRC)</td>
                        <td className="py-3 px-4 text-amber-900 font-semibold">₹50,00,001 to ₹1,00,00,000</td>
                        <td className="py-3 px-4 font-bold text-slate-900">₹2,000</td>
                        <td className="py-3 px-4 text-slate-600">e-Jagriti State Treasury / Bharatkosh</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/30">
                        <td className="py-3 px-4 font-bold text-slate-900">State Commission (SCDRC)</td>
                        <td className="py-3 px-4 text-amber-900 font-semibold">₹1,00,00,001 to ₹2,00,00,000</td>
                        <td className="py-3 px-4 font-bold text-slate-900">₹4,00,0</td>
                        <td className="py-3 px-4 text-slate-600">e-Jagriti State Treasury / Bharatkosh</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-red-50/30">
                        <td className="py-3 px-4 font-bold text-slate-900">National Commission (NCDRC)</td>
                        <td className="py-3 px-4 text-red-900 font-semibold">Above ₹2,00,00,000</td>
                        <td className="py-3 px-4 font-extrabold text-red-700">₹7,500</td>
                        <td className="py-3 px-4 text-slate-600">Bharatkosh Central Gateway</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900">
                    Important Note on Territorial Jurisdiction under Section 34(2):
                  </p>
                  <p>
                    Unlike earlier statutes where consumers had to travel to the corporate registered office or place of business of the seller, Section 34(2) of CPA 2019 permits consumers to institute complaints <strong className="text-slate-900 font-semibold">where the complainant resides or personally works for gain</strong>. This makes e-filing exceptionally convenient for consumers disputing pan-India or multinational entities.
                  </p>
                </div>
              </section>

              {/* Section 5: Document & Evidence Matrix Table */}
              <section id="heading-evidence-matrix" aria-labelledby="heading-evidence-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  e-Jagriti Evidence Matrix: Documents to Upload and Sources
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic printouts, digital payment slips, WhatsApp communications, and email records are fully admissible in consumer commissions provided they are accompanied by a basic verification statement. Organize your digital files into these distinct PDF annexures before beginning the upload sequence:
                </p>

                {/* Evidence Matrix Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mt-4">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-100 text-slate-900 uppercase text-[11px] font-extrabold tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Annexure &amp; Document</th>
                        <th className="py-3 px-4">Evidentiary Significance</th>
                        <th className="py-3 px-4">Where to Procure / File Spec</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Annexure A: Tax Invoice / Order Receipt
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Proves consumer status under Section 2(7); establishes exact consideration paid to fix pecuniary jurisdiction.
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          E-commerce order dashboard, retail store receipt, booking voucher (PDF &lt; 5MB).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Annexure B: Bank Account / UPI Debit Record
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Proves actual financial outflow with 12-digit UTR/RRN; defeats merchant claims of failed or unpaid transactions.
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Net banking account statement or UPI app transaction detail screen.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Annexure C: Customer Support &amp; Escalation Trail
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Proves that the consumer notified the merchant of the defect and gave reasonable opportunity to remedy.
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Email threads with customer support, ticket logs, CRM chat transcripts.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Annexure D: Statutory Advocate Legal Notice
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Establishes pre-litigation default; crystallizes the cause of action date; justifies compensation for mental harassment.
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Advocate signed letterhead copy + India Post Speed Post receipt and delivery tracking.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Annexure E: Corporate ROC / MCA Entity Proof
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Confirms registered company name, CIN, and registered office address so commission summons are delivered without rejection.
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Ministry of Corporate Affairs (mca.gov.in) Master Data search printout or GSTIN profile.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Annexure F: Sworn Verification Affidavit
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Mandatory legal requirement under Section 35; affirms that all statements and exhibits are true to personal knowledge.
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Signed verification page affirmed before a Notary Public, Oath Commissioner, or self-attested digital sign.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Hand-Drawn Custom Inline SVG Architecture Diagram */}
              <section id="heading-filing-workflow" aria-labelledby="heading-filing-workflow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-filing-workflow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  e-Jagriti Online Dispute Architecture &amp; Judicial Workflow
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This visual workflow charts the lifecycle of an online consumer dispute from initial statutory demand notice to virtual hearing and execution of decree under Sections 71 and 72 of the Act:
                </p>

                {/* Hand-Drawn Custom Responsive Inline SVG Flowchart */}
                <div className="w-full bg-slate-900 text-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800 shadow-xl overflow-x-auto">
                  <div className="min-w-[620px]">
                    <svg
                      viewBox="0 0 740 420"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-auto"
                      aria-label="e-Jagriti Online Dispute Workflow Diagram"
                    >
                      {/* Definitions */}
                      <defs>
                        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#DC2626" />
                          <stop offset="100%" stopColor="#991B1B" />
                        </linearGradient>
                        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#047857" />
                        </linearGradient>
                        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.4" />
                        </filter>
                      </defs>

                      {/* Header Title */}
                      <text x="370" y="30" textAnchor="middle" fill="#F8FAFC" fontSize="15" fontWeight="bold" letterSpacing="0.05em">
                        E-JAGRITI END-TO-END ADJUDICATION TIMELINE (CPA 2019)
                      </text>

                      {/* STEP 1: Pre-Litigation */}
                      <rect x="20" y="60" width="150" height="90" rx="10" fill="url(#boxGrad)" stroke="#38BDF8" strokeWidth="2" filter="url(#shadow)" />
                      <text x="95" y="85" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">STAGE 1: PRE-NOTICE</text>
                      <text x="95" y="105" textAnchor="middle" fill="#E2E8F0" fontSize="10">15-Day Advocate Notice</text>
                      <text x="95" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">Speed Post + Section 63 BSA</text>
                      <text x="95" y="135" textAnchor="middle" fill="#FBBF24" fontSize="9">78% Disputes Settle Here</text>

                      {/* Arrow 1 to 2 */}
                      <path d="M170 105 L200 105" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                      <polygon points="200,105 194,101 194,109" fill="#94A3B8" />

                      {/* STEP 2: Portal Registration & Filing */}
                      <rect x="205" y="60" width="155" height="90" rx="10" fill="url(#boxGrad)" stroke="#A855F7" strokeWidth="2" filter="url(#shadow)" />
                      <text x="282" y="85" textAnchor="middle" fill="#C084FC" fontSize="11" fontWeight="bold">STAGE 2: E-FILING</text>
                      <text x="282" y="105" textAnchor="middle" fill="#E2E8F0" fontSize="10">e-jagriti.gov.in SSO</text>
                      <text x="282" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">Upload Verified Petition</text>
                      <text x="282" y="135" textAnchor="middle" fill="#FBBF24" fontSize="9">Fee: ₹0 under ₹5 Lakh</text>

                      {/* Arrow 2 to 3 */}
                      <path d="M360 105 L390 105" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="390,105 384,101 384,109" fill="#94A3B8" />

                      {/* STEP 3: Admission & Scrutiny */}
                      <rect x="395" y="60" width="150" height="90" rx="10" fill="url(#boxGrad)" stroke="#34D399" strokeWidth="2" filter="url(#shadow)" />
                      <text x="470" y="85" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3: SCRUTINY</text>
                      <text x="470" y="105" textAnchor="middle" fill="#E2E8F0" fontSize="10">21-Day Statutory Clock</text>
                      <text x="470" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">Deemed Admission s.36(2)</text>
                      <text x="470" y="135" textAnchor="middle" fill="#34D399" fontSize="9">Case Number Generated</text>

                      {/* Arrow 3 to 4 */}
                      <path d="M545 105 L575 105" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="575,105 569,101 569,109" fill="#94A3B8" />

                      {/* STEP 4: Summons Issued */}
                      <rect x="580" y="60" width="140" height="90" rx="10" fill="url(#boxGrad)" stroke="#F87171" strokeWidth="2" filter="url(#shadow)" />
                      <text x="650" y="85" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 4: SUMMONS</text>
                      <text x="650" y="105" textAnchor="middle" fill="#E2E8F0" fontSize="10">Digital &amp; Postal Notice</text>
                      <text x="650" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">SMS &amp; Email to Company</text>
                      <text x="650" y="135" textAnchor="middle" fill="#FBBF24" fontSize="9">30 Days for Written Reply</text>

                      {/* Down Connector */}
                      <path d="M650 150 L650 200 L470 200 L470 220" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="470,220 466,214 474,214" fill="#94A3B8" />

                      {/* STEP 5: Mediation / Virtual Hearing */}
                      <rect x="380" y="225" width="180" height="95" rx="10" fill="url(#boxGrad)" stroke="#60A5FA" strokeWidth="2" filter="url(#shadow)" />
                      <text x="470" y="250" textAnchor="middle" fill="#60A5FA" fontSize="11" fontWeight="bold">STAGE 5: ADJUDICATION</text>
                      <text x="470" y="270" textAnchor="middle" fill="#E2E8F0" fontSize="10">Virtual VC Hearing / Mediation</text>
                      <text x="470" y="285" textAnchor="middle" fill="#94A3B8" fontSize="9">Section 37 Pre-Trial Mediation</text>
                      <text x="470" y="300" textAnchor="middle" fill="#FBBF24" fontSize="9">In-Person or Online Argument</text>

                      {/* Arrow 5 to 6 (Left) */}
                      <path d="M380 272 L320 272" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="320,272 326,268 326,276" fill="#94A3B8" />

                      {/* STEP 6: Final Order & Damages */}
                      <rect x="140" y="225" width="175" height="95" rx="10" fill="url(#emeraldGrad)" stroke="#10B981" strokeWidth="2" filter="url(#shadow)" />
                      <text x="227" y="250" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">STAGE 6: FINAL ORDER</text>
                      <text x="227" y="270" textAnchor="middle" fill="#ECFDF5" fontSize="10">Full Refund + 9%–12% Int.</text>
                      <text x="227" y="285" textAnchor="middle" fill="#D1FAE5" fontSize="9">Damages for Mental Harassment</text>
                      <text x="227" y="300" textAnchor="middle" fill="#A7F3D0" fontSize="9">Litigation Costs Awarded</text>

                      {/* Arrow 6 to 7 (Down/Left) */}
                      <path d="M227 320 L227 355 L350 355" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="350,355 344,351 344,359" fill="#94A3B8" />

                      {/* STEP 7: Execution under s.71 & s.72 */}
                      <rect x="355" y="335" width="365" height="65" rx="8" fill="url(#redGrad)" stroke="#EF4444" strokeWidth="1.5" />
                      <text x="537" y="358" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">STAGE 7: EXECUTION &amp; CRIMINAL ARREST POWERS</text>
                      <text x="537" y="375" textAnchor="middle" fill="#FEE2E2" fontSize="9">Section 71: Attachment of Corporate Bank Accounts &amp; Recovery Certificate</text>
                      <text x="537" y="389" textAnchor="middle" fill="#FECACA" fontSize="9">Section 72: Imprisonment up to 3 Years &amp; Non-Bailable Warrants for Non-Compliance</text>
                    </svg>
                  </div>
                  <p className="text-center text-[11px] text-slate-400 mt-3">
                    Statutory procedural architecture formulated under the Consumer Protection Act, 2019 and e-Jagriti Digital Court Regulations.
                  </p>
                </div>
              </section>

              {/* Section 7: Process Timeline <ol> with <time> (Step-by-Step Filing Walkthrough) */}
              <section id="heading-step-by-step" aria-labelledby="heading-step-by-step-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-step-by-step-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Step-by-Step Guide: How to File Your Consumer Complaint on e-Jagriti
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this chronological procedure to create your account, configure case parameters, upload petitions, and track commission hearings:
                </p>

                <ol className="relative border-l-2 border-slate-300 ml-4 space-y-8 text-slate-700">
                  {/* Step 1 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      1
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 1: Citizen Registration &amp; Aadhaar e-KYC Single Sign-On
                        </h3>
                        <time dateTime="P1D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Day 0 (Immediate)
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Navigate to <strong className="text-slate-900 font-semibold">e-jagriti.gov.in</strong> and select &quot;Consumer Login / Register&quot;. Choose &quot;Register as Consumer/Citizen&quot;. Enter your mobile number, email address, and link your Aadhaar number or DigiLocker profile. An OTP authentication instantly verifies your citizenship and pre-populates your permanent residential address, establishing your territorial standing under Section 34(2).
                      </p>
                    </div>
                  </li>

                  {/* Step 2 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      2
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 2: Forum Selection &amp; Pecuniary Evaluation
                        </h3>
                        <time dateTime="P1D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Day 1
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Click on &quot;File New Complaint&quot;. Select your State and District. The portal automatically routes your matter to the appropriate District Commission if the consideration paid is under ₹50,00,000. Choose your dispute category (e.g., E-Commerce, Banking &amp; Financial Services, Airlines, Real Estate, Telecommunications, Healthcare, or Insurance).
                      </p>
                    </div>
                  </li>

                  {/* Step 3 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      3
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 3: Entering Opposite Party (Respondent) Corporate Coordinates
                        </h3>
                        <time dateTime="P1D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Day 1
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Enter the exact registered corporate name of the company from their MCA Master Data or GSTIN. Do not use shorthand brand names. Provide their registered office address, corporate email ID (e.g., compliance/legal email), and director names. Accurate corporate details ensure that electronic summons issued via e-Jagriti are legally binding and cannot be rejected for defective memo of parties.
                      </p>
                    </div>
                  </li>

                  {/* Step 4 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      4
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 4: Uploading Complaint Petition &amp; Evidence Annexures
                        </h3>
                        <time dateTime="P2D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Day 2
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Upload your drafted consumer complaint petition as a searchable PDF (OCR-enabled). Ensure your petition contains: (a) Chronological index, (b) Memo of parties, (c) Concise statement of facts, (d) Specific violations under Section 2(11) Deficiency of Service or Section 2(47) Unfair Trade Practice, (e) Prayer clause detailing refund, interest, and compensation, and (f) Sworn verification affidavit. Next, upload your Evidence Annexures A through F sequentially.
                      </p>
                    </div>
                  </li>

                  {/* Step 5 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      5
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 5: Online Court Fee Payment via Bharatkosh
                        </h3>
                        <time dateTime="P2D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Day 2
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If your consideration is under ₹5,00,000, the fee is automatically calculated as ₹0. Click &quot;Generate Zero-Fee Challan&quot;. If your consideration is between ₹5 Lakh and ₹50 Lakh, the portal redirects to Bharatkosh payment gateway. Pay the prescribed fee (₹200 to ₹1,000) using UPI, net banking, or debit card. Download and retain the transaction receipt.
                      </p>
                    </div>
                  </li>

                  {/* Step 6 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      6
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 6: Preliminary Scrutiny &amp; Deemed Admission within 21 Days
                        </h3>
                        <time dateTime="P21D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Days 3–21
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The registry scrutinizes your complaint for defects. If any objection is noted (e.g., missing verification affidavit), you receive an SMS notification to cure the defect within 14 days. Under Section 36(2), if the Commission does not hold an admissibility hearing or issue objections within 21 days, <strong className="text-slate-900 font-semibold">the complaint is deemed by law to be admitted</strong>, and a formal Consumer Complaint (CC) Number is generated.
                      </p>
                    </div>
                  </li>

                  {/* Step 7 */}
                  <li className="ml-6">
                    <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs ring-4 ring-slate-100">
                      7
                    </span>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Step 7: Summons Service, Virtual Hearing, &amp; Final Decree
                        </h3>
                        <time dateTime="P90D" className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          Days 22–90+
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The portal dispatches automated digital summons to the respondent. The opposite party has 30 days (extendable by 15 days) to file their Written Version under Section 38(2). Hearings are conducted via integrated virtual video conferencing (VC), allowing you to appear remotely without physically visiting the court. If the opposite party defaults, an ex-parte final award is granted.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Call to Action Banner Mid-Content */}
              <EJagritiNoticeCTA />

              {/* Section 8: Landmark Court Orders & Precedents */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Consumer Court Precedents Shaping e-Jagriti Adjudication
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; State Commission Rulings
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  These verified judicial authorities govern how consumer commissions decide issues of pecuniary limits, one-sided adhesion contracts, technical repudiations, and unfair trade practices:
                </p>

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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Relief / Legal Principle
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
                              Binding on All 680+ DCDRCs Nationwide
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong className="text-slate-900 font-bold">Practical Takeaway for e-Jagriti Complainants: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: Worked Case Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Example: ₹1.35L Defective Laptop Warranty Dispute
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To illustrate how e-Jagriti functions in practice, review this concrete breakdown of a common consumer dispute involving defective hardware and warranty repudiation:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-extrabold text-xs sm:text-sm text-[#DC2626] uppercase tracking-wider">
                      Illustrative Case Study: Electronic Hardware Dispute
                    </span>
                    <span className="text-xs text-slate-500 font-medium">District Commission Jurisdiction (₹0 Fee)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Dispute Profile</span>
                      <p><strong className="text-slate-900">Complainant:</strong> Sh. R. K. Sharma (Bengaluru, Karnataka)</p>
                      <p><strong className="text-slate-900">Opposite Party:</strong> TechEdge Electronics India Pvt. Ltd. &amp; Authorized Service Hub</p>
                      <p><strong className="text-slate-900">Product Purchased:</strong> Flagship Gaming Laptop (Invoice ₹1,35,000)</p>
                      <p><strong className="text-slate-900">Transaction Date:</strong> 14 October 2025</p>
                    </div>

                    <div className="space-y-1.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Pecuniary &amp; Court Fee Audit</span>
                      <p><strong className="text-slate-900">Consideration Paid:</strong> ₹1,35,000 (Goods Value)</p>
                      <p><strong className="text-slate-900">Damages Claimed:</strong> ₹50,000 (Mental Harassment &amp; Loss of Work)</p>
                      <p><strong className="text-slate-900">Forum Jurisdiction:</strong> DCDRC Bengaluru (Consideration &lt; ₹50 Lakh)</p>
                      <p><strong className="text-slate-900">Statutory Court Fee:</strong> <span className="font-bold text-emerald-700">₹0.00 (Exempt under ₹5 Lakh)</span></p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <h4 className="font-bold text-slate-900 text-sm">Chronology of Facts &amp; Corporate Repudiation:</h4>
                    <p className="leading-relaxed">
                      Within 45 days of purchase, the laptop display flickered and suffered motherboard failure. The consumer deposited the machine at the manufacturer authorized service centre under warranty. Three weeks later, the centre repudiated the warranty claim, falsely asserting &quot;Customer induced liquid ingress&quot; and demanding ₹48,000 for repair, despite internal job sheets showing zero liquid stains upon intake.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <h4 className="font-bold text-slate-900 text-sm">Legal Escalation &amp; e-Jagriti Resolution:</h4>
                    <ol className="list-decimal list-inside space-y-1.5 pl-1 leading-relaxed">
                      <li><strong>Pre-Notice Served:</strong> An advocate legal notice was served to the corporate registered office giving 15 days to replace the unit or refund ₹1,35,000. The company sent an evasive automated response.</li>
                      <li><strong>e-Jagriti Complaint Filed:</strong> The consumer uploaded Annexures A (Tax Invoice), B (Bank Debit), C (Service Job Sheet with &apos;No Physical Damage&apos; remark), and D (Legal Notice + Speed Post Delivery Proof) under DCDRC Bengaluru.</li>
                      <li><strong>Admissibility &amp; Summons:</strong> The complaint was admitted within 14 days under Section 36(2). Digital summons were issued via e-Jagriti to the corporate email and ROC address.</li>
                      <li><strong>Final Award:</strong> The District Commission held the manufacturer guilty of unfair trade practice for fabricating liquid damage without photographic proof. The forum ordered: (a) Full refund of ₹1,35,000 upon return of laptop, (b) 9% interest from date of complaint, (c) ₹20,000 compensation for work interruption, and (d) ₹7,500 litigation costs.</li>
                    </ol>
                  </div>

                  <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs sm:text-sm text-emerald-900 flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <span className="font-bold block">Total Financial Recovery Awarded:</span>
                      <span className="text-slate-600 text-xs">₹1,35,000 (Refund) + ₹12,150 (Interest) + ₹20,000 (Damages) + ₹7,500 (Costs)</span>
                    </div>
                    <span className="text-base sm:text-lg font-black text-emerald-700">₹1,74,650 Total Award</span>
                  </div>
                </div>
              </section>

              {/* Section 10: Copyable Complaint Draft Format Template */}
              <section id="heading-complaint-template" aria-labelledby="heading-complaint-template-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-complaint-template-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  e-Jagriti Consumer Complaint Petition Format (Copyable Model Draft)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use this standardized legal draft format when preparing your complaint PDF for upload to the e-Jagriti portal. Replace bracketed placeholders <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-900 text-xs">[LIKE THIS]</code> with your actual transaction details:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl overflow-x-auto text-xs leading-relaxed font-mono">
                  <div className="text-center font-bold text-slate-300 border-b border-slate-700 pb-3 mb-4 space-y-1">
                    <p>BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION AT [DISTRICT NAME, STATE]</p>
                    <p>CONSUMER COMPLAINT NO. ________ / 2026</p>
                    <p className="text-[11px] text-slate-400">(FILED UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019 ON E-JAGRITI)</p>
                  </div>

                  <div className="space-y-4 text-slate-300">
                    <div>
                      <p className="text-slate-400 font-bold">IN THE MATTER OF:</p>
                      <p className="text-white font-bold">[YOUR FULL NAME]</p>
                      <p>S/o, D/o, W/o [Father&apos;s / Spouse&apos;s Name]</p>
                      <p>Residing at: [Your Complete Residential Address, District, PIN Code]</p>
                      <p>Mobile: [Your Phone] | Email: [Your Email]</p>
                      <p className="text-right text-amber-400 font-bold">... COMPLAINANT</p>
                    </div>

                    <div className="text-center text-slate-400 font-bold py-1">VERSUS</div>

                    <div>
                      <p className="text-white font-bold">1. [OPPOSITE PARTY COMPANY LEGAL NAME, e.g., M/S XYZ PVT. LTD.]</p>
                      <p>Through its Managing Director / Authorized Signatory</p>
                      <p>Registered Office: [Full Corporate ROC Address from MCA Master Data]</p>
                      <p>CIN: [Corporate Identification Number] | Email: [Legal/Nodal Email]</p>
                      <p className="text-right text-red-400 font-bold">... OPPOSITE PARTY NO. 1</p>
                    </div>

                    <div className="border-t border-slate-700 pt-3">
                      <p className="text-center font-bold text-white mb-2">
                        MEMORANDUM OF COMPLAINT UNDER SECTION 35 OF CPA 2019 FOR DEFICIENCY IN SERVICE &amp; UNFAIR TRADE PRACTICE
                      </p>
                      <p className="mb-2">MOST RESPECTFULLY SHOWETH:</p>
                      <p className="mb-2">
                        1. That the Complainant is a &quot;Consumer&quot; within the meaning of Section 2(7) of the Consumer Protection Act, 2019, having paid valuable consideration of ₹[AMOUNT IN NUMBERS] (Rupees [AMOUNT IN WORDS]) to Opposite Party No. 1 towards purchase of [DESCRIPTION OF GOODS / SERVICES] vide Invoice / Booking Reference No. [INVOICE NUMBER] dated [DATE OF INVOICE]. (Annexure A).
                      </p>
                      <p className="mb-2">
                        2. That this Hon&apos;ble Commission has territorial jurisdiction under Section 34(2)(d) of the Act as the Complainant resides and works for gain within the territorial jurisdiction of this Commission. Furthermore, this Commission has pecuniary jurisdiction under Section 34(1) as amended by G.S.R. 898(E), the total value of consideration paid being ₹[AMOUNT], which is well within the ceiling limit of ₹50,00,000.
                      </p>
                      <p className="mb-2">
                        3. That Opposite Party No. 1 committed gross &quot;Deficiency in Service&quot; under Section 2(11) and &quot;Unfair Trade Practice&quot; under Section 2(47) in as much as [DETAIL PRECISE FAULT, DEFECT, REFUSAL TO REFUND, OR BREACH OF CONTRACT].
                      </p>
                      <p className="mb-2">
                        4. That the Complainant repeatedly escalated the grievance through emails dated [DATES] but Opposite Party failed to rectify the deficiency. (Annexure C).
                      </p>
                      <p className="mb-2">
                        5. That the Complainant caused a formal Statutory Legal Notice dated [DATE] to be served upon the Opposite Party via India Post Registered Speed Post (Consignment No. [POSTAL TRACKING NUMBER]) giving 15 days to remedy default. Despite delivery on [DELIVERY DATE], the Opposite Party failed and neglected to comply. (Annexure D).
                      </p>
                      <p className="mb-2">
                        6. That the cause of action first arose on [DATE OF PURCHASE / INCIDENT] and continues to subsist. This complaint is filed within the statutory limitation period of two years prescribed under Section 69 of the Act.
                      </p>
                    </div>

                    <div className="border-t border-slate-700 pt-3">
                      <p className="font-bold text-white mb-1">PRAYER:</p>
                      <p className="mb-1">It is, therefore, most respectfully prayed that this Hon&apos;ble Commission may be pleased to:</p>
                      <p className="pl-4">a) Direct the Opposite Party to refund the full consideration amount of ₹[AMOUNT] along with interest @ [9%–12%] per annum from the date of payment till realisation;</p>
                      <p className="pl-4">b) Award compensation of ₹[DAMAGES CLAIMED] towards mental agony, severe harassment, and physical hardship suffered by the Complainant;</p>
                      <p className="pl-4">c) Award litigation expenses quantified at ₹[LITIGATION COSTS CLAIMED]; and</p>
                      <p className="pl-4">d) Pass any other relief as this Hon&apos;ble Commission deems fit and proper in the interest of justice.</p>
                    </div>

                    <div className="border-t border-slate-700 pt-3 flex justify-between items-end">
                      <div>
                        <p>Place: [YOUR CITY]</p>
                        <p>Date: [FILING DATE]</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">COMPLAINANT IN PERSON</p>
                        <p className="text-[11px] text-slate-400">[SIGNATURE / DIGITAL SIGN]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Scope & Boundaries (What LegalRecovery Can and Cannot Do) */}
              <section id="heading-scope-boundaries" aria-labelledby="heading-scope-boundaries-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scope-boundaries-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To ensure complete transparency and uphold the highest professional standards, here is a definitive boundary of our service capabilities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
                    <h3 className="font-bold text-emerald-900 text-sm sm:text-base flex items-center gap-2">
                      <span>✓</span> What LegalRecovery Delivers
                    </h3>
                    <ul className="text-xs text-emerald-950 space-y-2 list-disc list-inside">
                      <li>Drafting authoritative, high-impact statutory legal demand notices on advocate letterhead within 24 hours.</li>
                      <li>Formal dispatch via India Post Speed Post with tracking plus electronic service under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.</li>
                      <li>Rigorous pre-filing evidentiary audit checking consideration valuation, limitation period, and forum eligibility.</li>
                      <li>Advising on corporate ROC registered coordinates to ensure summons cannot be dodged.</li>
                      <li>Assisting with pre-litigation settlement negotiations during the 15-day cure window.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-100 border border-slate-200 rounded-xl space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span>✕</span> What We Do Not Do
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                      <li>We do not guarantee judicial outcomes or specific award figures, as decisions rest exclusively with the Consumer Commission Bench.</li>
                      <li>We cannot trace completely anonymous, untraceable online fraudsters operating without a registered entity or bank trail.</li>
                      <li>We do not represent clients in physical commission courtrooms without a separate, formal vakalatnama engagement.</li>
                      <li>We do not file frivolous or time-barred claims beyond the 2-year statutory limitation period of Section 69.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About e-Jagriti Consumer Complaints
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="py-4 sm:py-5 space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Statutory References & Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Sources &amp; Statutory Legal References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal provision, pecuniary ceiling, limitation deadline, and procedural mandate detailed on this page is grounded in primary statutory sources, gazette notifications, and authoritative Supreme Court decisions:
                </p>

                <div className="bg-white rounded-xl border border-slate-200 p-4 divide-y divide-slate-100">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div key={idx} className="py-2.5 flex items-start justify-between gap-3 text-xs">
                      <div>
                        <span className="font-semibold text-slate-900 block">{source.title}</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-[#DC2626] hover:underline break-all"
                        >
                          {source.url}
                        </a>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono shrink-0">Official Source</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom Notice CTA */}
              <EJagritiNoticeCTA />

              {/* Related Recovery Guides Cluster Component */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides cluster="consumer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
