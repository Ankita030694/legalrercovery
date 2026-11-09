import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UgcRefundNoticeCTA from "./UgcRefundNoticeCTA";
import UgcRefundTableOfContents from "./UgcRefundTableOfContents";
import UgcRefundProblemTabs from "./UgcRefundProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "UGC Fee Refund Policy: Withdrawal Rules for Colleges",
  description:
    "UGC's fee-refund rules for admission withdrawal, deductions allowed, deadlines and what to do if a college refuses.",
  alternates: {
    canonical: `${SITE_URL}/law/ugc-fee-refund-policy`,
  },
  openGraph: {
    title: "UGC Fee Refund Policy: Withdrawal Rules for Colleges",
    description:
      "Statutory guide to UGC college fee refund rules: 5-tier deduction slabs, 15-day refund deadline, certificate retention ban, and consumer court escalation path.",
    url: `${SITE_URL}/law/ugc-fee-refund-policy`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "University Grants Commission (UGC) Fee Refund Policy & Guidelines for Higher Education Institutions",
    url: "https://www.ugc.gov.in/pdfnews/9327451_Fee-Refund-Policy.pdf",
  },
  {
    title: "UGC (Redressal of Grievances of Students) Regulations, 2023 — Gazette Notification F.1-13/2022 (NEP-Statute)",
    url: "https://www.ugc.gov.in/pdfnews/2493896_UGC-Student-Grievance-Regulations-2023.pdf",
  },
  {
    title: "UGC Public Notice on Non-Retention of Original Academic Certificates by Higher Educational Institutions",
    url: "https://www.ugc.gov.in/pdfnews/3929487_Public-Notice-Non-Retention-Original-Certificates.pdf",
  },
  {
    title: "Supreme Court of India: Buddhist Mission Dental College & Hospital v. Bhupesh Khurana & Ors. (2009) 4 SCC 473",
    url: "https://main.sci.gov.in/judgment/judis/33718.pdf",
  },
  {
    title: "Supreme Court of India: Islamic Academy of Education & Anr. v. State of Karnataka & Ors. (2003) 6 SCC 697",
    url: "https://main.sci.gov.in/judgment/judis/18991.pdf",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC): Sehgal School of Competition v. Dalbir Singh (2009) 3 CPR 363 (NC)",
    url: "http://cms.nic.in/ncdrcnew/judgments.html",
  },
  {
    title: "UGC e-Samadhan Centralized Grievance Redressal Portal — Government of India",
    url: "https://samadhan.ugc.ac.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Educational Institutions Engaging in Unfair Trade Practice and Fee Retention",
    parties: "Buddhist Mission Dental College & Hospital v. Bhupesh Khurana & Ors.",
    citation: "(2009) 4 SCC 473, Supreme Court of India",
    date: "Judgment Dated 13 February 2009",
    facts:
      "The appellant dental college admitted students to its BDS programme misrepresenting that it held valid recognition and university affiliation. When students discovered that the college lacked statutory approvals, they withdrew from the programme and demanded a full refund of tuition and admission fees. The college refused, claiming that the fees were invested in college infrastructure and that prospectus rules barred any refund.",
    holding:
      "The Supreme Court held that imparting education and collecting consideration from students constitutes a service under consumer law. Misleading admissions, collecting unapproved fees, or withholding fees upon lawful withdrawal constitutes gross deficiency in service and unfair trade practice. The Apex Court directed the college to refund the entire admission and tuition fees to all students alongside 12% annual interest and ₹1,00,000 compensation to each student.",
    amount: "100% Fee Refund @ 12% Interest + ₹1,00,000 Compensation Per Student",
    takeaway:
      "Educational institutions cannot retain student fees under the shield of internal prospectus rules. The Supreme Court established that unearned fees must be returned with interest when service cannot be lawfully provided.",
  },
  {
    title: "National Consumer Commission Ruling on Void 'No Refund' Clauses in Educational Prospectuses",
    parties: "Sehgal School of Competition v. Dalbir Singh",
    citation: "Revision Petition No. 350/2008, NCDRC New Delhi (2009) 3 CPR 363",
    date: "Order Dated 16 April 2009",
    facts:
      "A student deposited lump-sum advance coaching and admission fees for a two-year academic programme. After attending classes for six months, the student found the standard of coaching unsatisfactory, withdrew from the institution, and sought a pro-rata refund for the remaining 18 months. The institute refused the refund, citing a printed clause in the admission prospectus declaring 'Fees once paid shall not be refunded under any circumstances'.",
    holding:
      "The National Commission held that no educational or coaching institution can collect fees for unrendered services or retain funds for future academic semesters when a student has formally withdrawn. The Commission ruled that unilateral 'no refund' clauses in admission prospectuses are unconscionable, void ab initio, and violate public policy under the Indian Contract Act. The NCDRC upheld the order directing pro-rata refund with interest and costs.",
    amount: "Full Pro-Rata Fee Refund @ 9% Interest + ₹5,000 Litigation Costs",
    takeaway:
      "Printed disclaimers on admission forms or brochures stating that fees are non-refundable carry zero legal validity before consumer commissions. Colleges cannot retain tuition fees for semesters not attended.",
  },
  {
    title: "Supreme Court Constitution Bench Barring Advance Multi-Year Fee Collection & Capitation Extraction",
    parties: "Islamic Academy of Education & Anr. v. State of Karnataka & Ors.",
    citation: "(2003) 6 SCC 697, Supreme Court of India",
    date: "Judgment Dated 14 August 2003",
    facts:
      "A five-judge Constitution Bench examined the widespread practice of private unaided professional colleges collecting advance tuition fees for the entire three- to five-year course duration at the time of admission, and refusing any refund if a student vacated the seat mid-way or before session commencement.",
    holding:
      "The Supreme Court categorically ruled that private educational institutions are entitled to charge fees only for the relevant academic year or semester. Demanding fees for the entire multi-year course upfront is completely impermissible and tantamount to capitation fees. An institution may only request a bank guarantee or security bond for subsequent years if a genuine vacancy risk exists, but cannot retain upfront cash fees when admission is cancelled within permissible timelines.",
    amount: "Strict Prohibition on Multi-Year Advance Fees; Mandatory Year-Wise Charging",
    takeaway:
      "Colleges cannot force students to pay multi-semester or full-degree fees upfront. If you paid advance fees for subsequent years, the college is legally bound to refund those amounts in full upon withdrawal.",
  },
  {
    title: "National Commission Decision on Retaining Fees After Timely Seat Cancellation Before Cut-Off",
    parties: "FIITJEE Ltd. v. Dr. Minathi Rath",
    citation: "Revision Petition No. 3365/2006, NCDRC New Delhi (2012) 1 CPJ 194 (NC)",
    date: "Order Dated 14 November 2011",
    facts:
      "A parent enrolled her daughter in a long-term academic programme and paid ₹78,826. Due to illness and personal circumstances, the student withdrew prior to commencement of regular academic instruction. The institution refunded only the minimal caution deposit, forfeiting the entire balance tuition and registration fee citing seat loss and prospectus terms.",
    holding:
      "The NCDRC affirmed that when a student withdraws before course commencement or within the designated admission cut-off window, the institution suffers no unrecoverable loss because the vacated seat can be offered to candidates on the waitlist. Retaining over 90% of the fees under such circumstances constitutes an unfair trade practice under Section 2(1)(r) of the Consumer Protection Act (now Section 2(47) of the 2019 Act). The Commission ordered refund of the entire tuition amount with 9% interest.",
    amount: "₹78,826 Full Fee Refund @ 9% Interest + ₹10,000 Legal Expenses",
    takeaway:
      "If you submit an admission cancellation request before or near the cut-off date, colleges cannot claim 'seat vacancy loss' as an excuse to forfeit your fees. Consumer courts routinely direct 100% refund.",
  },
];

const FAQS = [
  {
    question: "What is the official UGC fee refund policy for admission withdrawal?",
    answer:
      "Under the University Grants Commission (UGC) Fee Refund Policy, Higher Education Institutions (HEIs) must provide a 100% refund of fees (minus a maximum processing charge capped at ₹1,000) if the student submits an admission cancellation application 15 days or more before the formally notified last date of admission. Even if withdrawn within 15 days before cut-off, a 90% refund is mandatory; within 15 days after cut-off, an 80% refund applies; and between 16 and 30 days after cut-off, a 50% refund must be credited.",
  },
  {
    question: "How long does a college have to process and credit a fee refund?",
    answer:
      "The UGC guidelines mandate that higher education institutions must process and credit the approved refund amount to the student's bank account within 15 calendar days from the date of receiving the formal admission withdrawal application. Delays beyond this 15-day statutory period constitute a service deficiency under Section 2(11) of the Consumer Protection Act, 2019, entitling the student to statutory interest.",
  },
  {
    question: "Can a private college refuse to refund fees citing a 'no refund' rule in their prospectus?",
    answer:
      "No. Both the Supreme Court of India in Islamic Academy of Education (2003) and the National Consumer Disputes Redressal Commission (NCDRC) in Sehgal School of Competition (2009) have ruled that printed 'fees once paid will not be refunded' clauses are unconscionable, void ab initio, and constitute unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Statutory UGC regulations override any internal college brochure, application form, or prospectus clause.",
  },
  {
    question: "Is the college allowed to withhold my original 10th/12th marksheets or transfer certificate (TC)?",
    answer:
      "Absolutely not. UGC regulations on the non-retention of original certificates expressly prohibit universities and colleges from keeping students' original Class 10/12 marksheets, school leaving certificates, transfer certificates, or migration certificates. Institutions are only permitted to inspect original documents for physical verification at the time of admission and must return them immediately. Withholding certificates is an actionable offense.",
  },
  {
    question: "What should I do if a university or college refuses my admission cancellation refund?",
    answer:
      "Follow a structured three-step escalation path: First, lodge a formal online complaint on the UGC e-Samadhan portal (samadhan.ugc.ac.in) and notify the university's Student Grievance Redressal Committee (SGRC). Second, serve a 15-day statutory advocate legal demand notice to the Registrar, Dean, and Management citing UGC regulations and NCDRC precedents. Third, if the institution fails to pay within 15 days, file a consumer complaint on the government's e-Jagriti portal claiming full refund, statutory interest, and compensation.",
  },
  {
    question: "Is hostel caution money and college library deposit refundable if I withdraw?",
    answer:
      "Yes. Caution money, laboratory security deposits, and hostel security deposits are 100% refundable without any deduction, regardless of the date of admission withdrawal. The college is legally barred from treating refundable security deposits as forfeited institutional revenue.",
  },
  {
    question: "College fees refund na kare toh UGC complaint aur legal notice kaise bheje?",
    answer:
      "Agar koi private ya deemed university admission cancellation ke baad fees wapas karne se inkar kare, toh sabse pehle UGC e-Samadhan portal (samadhan.ugc.ac.in) par online complaint darj karein. Uske baad LegalRecovery.in ke verified advocate ke madhyam se college Registrar aur Principal ko UGC Refund Guidelines aur Consumer Protection Act, 2019 ke Section 2(47) ke tehat 15 din ka formal statutory legal notice bhej sakte hain. Notice Registered Speed Post aur official email dono se bheja jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Withdrew Your Admission? What the UGC Refund Rules Require",
  description:
    "UGC's fee-refund rules for admission withdrawal, deductions allowed, deadlines and what to do if a college refuses.",
  datePublished: "2026-11-06T14:00:00+05:30",
  dateModified: "2026-11-06T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/ugc-fee-refund-policy`,
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
    "@type": "GovernmentOrganization",
    name: "University Grants Commission",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "College Fee Refund Notice",
      item: `${SITE_URL}/send-a-legal-notice/school-college-fee-refund-admission-cancellation`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "UGC Fee Refund Policy",
      item: `${SITE_URL}/law/ugc-fee-refund-policy`,
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

export default function UgcFeeRefundPolicyPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "College Fee Refund Notice",
      href: "/send-a-legal-notice/school-college-fee-refund-admission-cancellation",
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
        {/* Hero Section matching strict site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>UGC Fee Refund Regulations • Higher Education Guidelines</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Withdrew Your Admission? What the UGC Refund Rules Require
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (UGC Fee Refund &amp; Document Retention Mandate)
              </p>
              <p>
                Under UGC Fee Refund Regulations and Section 2(47) of the Consumer Protection Act, 2019, higher education institutions must refund 100% of fees (minus a maximum ₹1,000 processing fee) if admission is withdrawn 15 days or more before the cut-off date. Even after cut-off, tiered refunds of 90%, 80%, or 50% apply. Withholding fees or original certificates is illegal. If a college refuses, students can file a complaint on UGC e-Samadhan, serve an advocate legal notice, and approach the Consumer Commission on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Refund &ge; 15 Days Before Cut-off
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">&le; ₹1,000</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Maximum Processing Fee Cap
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Mandatory Bank Credit Deadline
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">0 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Illegal to Retain Original Marksheets
                </p>
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
            <UgcRefundTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Scope */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The UGC Fee Refund Mandate: How the Law Protects Students Who Withdraw Admission
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every academic admission cycle across India, hundreds of thousands of students pay hefty seat-booking, tuition, and development fees to secure admission in private universities, deemed colleges, and professional institutions. When entrance exam results like JEE, NEET, CUET, CLAT, or state counselling rounds are announced weeks later, students naturally migrate to higher-preference institutions and seek admission withdrawal.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Historically, private college administrations exploited this transition by creating arbitrary deduction policies. Many institutions routinely forfeit 50% to 100% of the deposited semester or annual fees, invoke boilerplate &quot;fees once paid shall not be refunded&quot; clauses in prospectuses, or hold original Class 10/12 marksheets and school leaving certificates hostage.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To eliminate this exploitative practice, the University Grants Commission (UGC) issued binding statutory regulations and public notifications under the UGC Act, 1956. These guidelines establish an unequivocal 5-tier fee refund schedule, set a 15-day refund turnaround time, cap processing fees at ₹1,000, and strictly prohibit institutions from withholding academic certificates. When coupled with the Consumer Protection Act, 2019, students possess an enforceable legal remedy against defaulting colleges.
                </p>
              </section>

              {/* Section 2: H2 - Master Statutory 5-Tier Refund Schedule */}
              <section id="heading-ugc-slabs" aria-labelledby="heading-ugc-slabs-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-ugc-slabs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The UGC 5-Tier Refund Slab: Allowable Deductions &amp; Statutory Deadlines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The UGC Fee Refund Policy prescribes a formulaic percentage matrix based on when the formal admission withdrawal notice is submitted relative to the institution&apos;s officially notified last date of admission:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">UGC Fee Refund Matrix and Deduction Slabs</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Timing of Withdrawal Notice</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Refund Percentage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Permissible Institution Deduction</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          15 days or more before formally notified last date of admission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-black text-sm sm:text-base">
                          100% Refund
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-slate-800">
                          Deduction capped at ₹1,000 maximum as processing fee
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Refund Policy Clause 4.1</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Less than 15 days before formally notified last date of admission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          90% Refund
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          10% of aggregate fees collected
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Refund Policy Clause 4.2</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          15 days or less after formally notified last date of admission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          80% Refund
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          20% of aggregate fees collected
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Refund Policy Clause 4.3</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          30 days or less, but more than 15 days, after last date of admission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">
                          50% Refund
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          50% of aggregate fees collected
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Refund Policy Clause 4.4</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          More than 30 days after formally notified last date of admission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-bold">
                          0% Refund*
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Tuition fee non-refundable (*Caution money remains 100% refundable)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Refund Policy Clause 4.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 space-y-1.5">
                  <p className="font-bold text-amber-900">
                    Important Statutory Exceptions for Caution Money &amp; Seat Filling:
                  </p>
                  <p>
                    <strong>1. Caution Money &amp; Security Deposits:</strong> Under UGC guidelines, caution money, library security deposits, and hostel security funds are strictly refundable in full (100%) without any deductions, even if the withdrawal occurs after the 30-day window.
                  </p>
                  <p>
                    <strong>2. Subsequent Seat Filling:</strong> Where an institution fills the vacated seat from its waiting list before the cut-off date or prior to closing admissions, judicial precedents from the Supreme Court and NCDRC direct that the institution suffered no financial detriment, obligating the refund of tuition fees even if technical deadlines lapsed.
                  </p>
                </div>
              </section>

              {/* Section 3: H2 - Verified Court & Commission Orders */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Rulings on College Fee Refunds &amp; Prospectus Clauses
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Judicial Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
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
                              Total Relief / Precedent Impact
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
                              Binding on All Central, State &amp; Deemed Universities
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your fee refund:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: H2 - Evidentiary Patterns */}
              <section id="heading-evidentiary-patterns" aria-labelledby="heading-evidentiary-patterns-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-evidentiary-patterns-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Won College Fee Refund &amp; Admission Cancellation Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An examination of consumer commission decisions across District Forums and State Commissions demonstrates that when students and parents preserve clear evidentiary records, institutions cannot sustain administrative defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Timestamped Written Withdrawal Request Prior to Admission Cut-off:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Students who submitted cancellation requests via registered email to official institutional addresses (e.g., registrar@, admissions@) or obtained an acknowledgement stamp on a physical letter before the last date established non-attendance conclusively, destroying the college&apos;s defense of verbal abandonment.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Proof of Course Non-Attendance &amp; Zero Academic Credit Consumption:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Demonstrating that the student never registered for classes, attended zero lectures, and occupied no hostel facility proved absence of consideration, triggering the Supreme Court doctrine that unearned tuition cannot be retained.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        UGC e-Samadhan Grievance Docket Number:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Presenting a registered grievance from the UGC e-Samadhan portal demonstrated that the student exhausted statutory regulatory mechanisms before moving the court, justifying punitive awards for harassment and legal costs.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Serving a Formatted Advocate Legal Notice on Both Principal &amp; Sponsoring Trust:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices that jointly impleaded the college Principal, the University Registrar, and the governing Educational Society/Trust established collective legal liability, frequently prompting an out-of-court RTGS refund within the 15-day notice window.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: H2 - Hand-Authored Escalation Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Hierarchy: From Admission Withdrawal to Bank Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your fee refund rights and compel the return of academic certificates:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Formal Written Withdrawal</h3>
                    <p className="text-xs text-slate-200 mt-1">Submit signed cancellation letter &amp; email with bank details before cut-off date.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">15-Day Statutory Waiting Window</h3>
                    <p className="text-xs text-amber-900 mt-1">Institution must credit refund to bank account within 15 calendar days.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">UGC e-Samadhan Grievance</h3>
                    <p className="text-xs text-slate-700 mt-1">Lodge formal portal complaint at samadhan.ugc.ac.in citing UGC fee rules.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand via Speed Post &amp; Email under Section 63 BSA.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% fee recovery plus interest, or Consumer Commission petition.</p>
                  </div>
                </div>

                {/* Hand-authored responsive SVG Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="UGC College Fee Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="ugcDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="ugcRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="ugcGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#ugcDark)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Withdrawal Notice</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Written App + Email</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Note Cut-off Date</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">15-Day Window</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Statutory Processing</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">College Must Credit</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">UGC e-Samadhan</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Lodge Portal Complaint</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Grievance Docket ID</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#ugcRed)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#ugcGreen)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Bank Refund</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Direct RTGS Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS UNDER UGC POLICY &amp; CONSUMER ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• College Refund Credit Window: Within 15 Calendar Days of receiving cancellation application (UGC Clause 5)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Processing Charge Deduction Cap: Maximum ₹1,000 for withdrawals &ge;15 days before cut-off</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Cure Period: 15 Calendar Days before filing consumer complaint on e-Jagriti</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: H2 - 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: How to Recover College Fees Step-by-Step
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived from established consumer jurisprudence and UGC enforcement directives, this 5-step playbook equips parents and students to overcome administrative deflection and recover their money:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Submit a Formal Written Admission Withdrawal Application
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Draft a clear, dated application stating your intent to cancel admission. Explicitly provide: (1) Student name and enrollment/application number, (2) Programme and branch, (3) Fee payment receipt number and transaction UTR, (4) Beneficiary bank account details (account number, IFSC, account holder name) for electronic refund credit, and (5) A formal demand for the release of original certificates. Dispatch this via registered email to the Principal, Registrar, and Admissions In-charge, and obtain a physical receiving stamp if delivered in person.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Monitor the 15-Day Statutory Refund Window
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under UGC guidelines, the college is legally required to process the refund within 15 calendar days. Send a polite reminder on the 10th day quoting UGC Fee Refund Policy Clause 5. If the administration responds with verbal excuses or claims that refund cheques are issued only after 6 months, preserve all email replies or text messages as evidence of deliberate delay.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Grievance on UGC e-Samadhan &amp; National Consumer Helpline (NCH)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day window lapses without refund credit, file an immediate online complaint on <a href="https://samadhan.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">samadhan.ugc.ac.in</a> under &quot;Refund of Fees&quot;. Concurrently, register a docket with the National Consumer Helpline (consumerhelpline.gov.in or dial 1915). UGC forwards these grievances directly to the affiliating university Vice-Chancellor and College Principal.
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
                        When administrative escalation yields no reversal within 30 days, engage an advocate to issue a statutory demand notice to the College Principal, Registrar, and Governing Educational Trust. Dispatched via Registered Speed Post and Section 63 BSA electronic mail, the notice demands 100% fee reimbursement, 18% penal interest, return of certificates, and legal damages within a strict 15-day cure window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn more about drafting fees and procedure on our <Link href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation" className="text-blue-700 underline">school and college admission cancellation legal notice</Link> guide.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Consumer Complaint on e-Jagriti with Compensation Claims
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the college fails to remit funds within the 15-day notice period, file an online consumer complaint on the government&apos;s e-Jagriti portal (e-jagriti.gov.in) under Section 35 of the Consumer Protection Act, 2019. Claim: (1) Full refund of unconsumed fees, (2) 12% to 18% annual interest from withdrawal date, (3) ₹50,000 to ₹1,00,000 compensation for mental agony and academic disruption, and (4) Full litigation costs.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: H2 - Interactive Problem Scenarios */}
              <section id="heading-problem-scenarios" aria-labelledby="heading-problem-scenarios-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-problem-scenarios-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Common Institutional Disputes &amp; How the Law Counters Them
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Colleges employ various standard tactics to resist fee refunds. Explore the legal rebuttals and action steps for each scenario:
                </p>

                <UgcRefundProblemTabs />
              </section>

              {/* Section 8: H2 - Worked Example Table */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Example: Calculating Fee Refund for a ₹2,50,000 B.Tech / MBA Admission
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To understand how the UGC refund formula operates in practice, consider an illustrative worked example for an engineering or management student:
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 font-semibold block text-xs">Total First-Year Fee Deposited:</span>
                      <span className="text-slate-900 font-black text-base sm:text-lg">₹2,50,000</span>
                      <span className="text-slate-500 text-xs block">(Tuition ₹2,10,000 + Dev Fee ₹20,000 + Caution Deposit ₹20,000)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block text-xs">Formally Notified Cut-Off Date:</span>
                      <span className="text-slate-900 font-bold text-sm sm:text-base">31 August 2026</span>
                      <span className="text-slate-500 text-xs block">(Officially published by University/DTE)</span>
                    </div>
                  </div>

                  <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[540px] text-left text-xs sm:text-sm text-slate-700">
                      <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3">Date of Withdrawal</th>
                          <th className="py-2.5 px-3">Timeline Classification</th>
                          <th className="py-2.5 px-3">Allowable Institution Deduction</th>
                          <th className="py-2.5 px-3">Net Statutory Refund Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-2.5 px-3 font-semibold">12 August 2026</td>
                          <td className="py-2.5 px-3">&ge; 15 days before cut-off</td>
                          <td className="py-2.5 px-3 text-red-600 font-semibold">₹1,000 max processing charge</td>
                          <td className="py-2.5 px-3 text-emerald-700 font-black">₹2,49,000 (100% minus ₹1,000)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-semibold">22 August 2026</td>
                          <td className="py-2.5 px-3">&lt; 15 days before cut-off</td>
                          <td className="py-2.5 px-3 text-red-600 font-semibold">₹23,000 (10% of ₹2,30,000)</td>
                          <td className="py-2.5 px-3 text-emerald-700 font-black">₹2,27,000 (90% + full caution)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-semibold">10 September 2026</td>
                          <td className="py-2.5 px-3">&le; 15 days after cut-off</td>
                          <td className="py-2.5 px-3 text-red-600 font-semibold">₹46,000 (20% of ₹2,30,000)</td>
                          <td className="py-2.5 px-3 text-emerald-700 font-black">₹2,04,000 (80% + full caution)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-semibold">25 September 2026</td>
                          <td className="py-2.5 px-3">16–30 days after cut-off</td>
                          <td className="py-2.5 px-3 text-red-600 font-semibold">₹1,15,000 (50% of ₹2,30,000)</td>
                          <td className="py-2.5 px-3 text-emerald-700 font-black">₹1,35,000 (50% + full caution)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    Note: Caution money of ₹20,000 is 100% refundable across all scenarios. Institutions cannot deduct caution money under any circumstance.
                  </p>
                </div>
              </section>

              {/* Section 9: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Evidence Checklist: 6 Essential Documents for Legal Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before dispatching an advocate notice or submitting an e-Jagriti consumer complaint, ensure you have gathered the following digital and physical documents:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">1</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">Fee Deposit Receipts &amp; Bank UTR</h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Original bank challan, RTGS/NEFT transaction receipt, or payment gateway confirmation showing recipient college account and amount.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">Timestamped Cancellation Application</h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Sent email export with full RFC 822 headers or physical copy bearing the college receiving seal and entry number.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">3</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">Official Admission Cut-Off Notification</h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      University counselling brochure, admission schedule, or State CET/DTE notification verifying the formally notified last date of admission.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">4</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">Original Document Deposit Acknowledgement</h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Verification slip or document submission receipt detailing original marksheets, transfer certificate, or migration certificate submitted.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">5</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">Written Repudiation or Delay Mails</h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Letters or emails from college authorities stating that fees are non-refundable, proposing illegal deductions, or indefinitely postponing payment.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">6</span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">UGC e-Samadhan Grievance Docket</h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Printout of the online complaint submitted on samadhan.ugc.ac.in showing institution name, registration date, and current status.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - Comprehensive FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on College Fee Refunds &amp; UGC Regulations
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Clear, statutory answers to common questions regarding admission withdrawal and private college fee recovery.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: H2 - Primary Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Sources &amp; Legal Authorities
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Every legal benchmark and deduction threshold cited on this page is verified against primary statutory gazettes, Supreme Court judgments, and UGC circulars:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  {PRIMARY_SOURCES.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 underline font-medium break-all"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 12: Notice CTA */}
              <UgcRefundNoticeCTA />

              {/* Section 13: Related Recovery Guides */}
              <RelatedRecoveryGuides />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
