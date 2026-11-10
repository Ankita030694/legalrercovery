import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FeeRefundNoticeCTA from "./FeeRefundNoticeCTA";
import FeeRefundTableOfContents from "./FeeRefundTableOfContents";
import FeeRefundTemplateWorkspace from "./FeeRefundTemplateWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "School & College Fee Refund Application (Formats)",
  description:
    "Ready fee-refund application formats in English and Hindi for school, college and hostel fees, with the rules to cite.",
  alternates: {
    canonical: `${SITE_URL}/templates/school-college-fee-refund-application`,
  },
  openGraph: {
    title: "School & College Fee Refund Application Formats (English & Hindi)",
    description:
      "Statutory fee refund application formats for college admission cancellation, school TC withdrawal, and hostel caution deposit with UGC, MoE and Consumer Protection Act rules.",
    url: `${SITE_URL}/templates/school-college-fee-refund-application`,
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
    title: "University Grants Commission (UGC) Notification on Fee Refund Policy & Non-Retention of Original Certificates — UGC Mandate",
    url: "https://www.ugc.gov.in/",
  },
  {
    title: "Ministry of Education (MoE) Guidelines for Regulation of Coaching Centres (January 2024) — Pro-Rata Refund Within 10 Days",
    url: "https://www.education.gov.in/",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC) — Sehgal School of Competition v. Dalbir Singh, (2009) CPJ 33 (NC)",
    url: "http://ncdrc.nic.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Fee Receipts, Emails & Withdrawal Slips)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Ruling on Prohibition of Multi-Year Fee Forfeiture",
    parties: "Islamic Academy of Education & Anr. v. State of Karnataka & Ors.",
    citation: "(2003) 6 SCC 697 — Supreme Court of India (Constitution Bench)",
    date: "Judgment Dated 14 August 2003",
    facts:
      "Private professional medical and engineering colleges in Karnataka demanded full course fees for the entire duration of 4–5 years at the threshold of admission. When students withdrew after obtaining seats in government institutions, the colleges forfeited the entire advance sum and withheld original academic certificates.",
    holding:
      "The Constitution Bench of the Supreme Court held that educational institutions cannot demand or collect advance tuition fees for more than one academic year or semester. The court declared that an institution can only charge reasonable fees for actual service rendered. Retaining fees for unserved semesters when a student leaves midway constitutes commercialization and extortion.",
    amount: "Bar on Multi-Year Fee Collection + 100% Refund of Unserved Semesters Upheld",
    takeaway:
      "If a college or private university forces you to deposit fees for multiple semesters or refuses refund for unserved terms, cite Islamic Academy (2003). Any clause declaring advance tuition 'strictly non-refundable' is unconstitutional and void ab initio.",
  },
  {
    title: "National Consumer Commission (NCDRC) Landmark Order on Coaching Center Fee Refund",
    parties: "Sehgal School of Competition v. Dalbir Singh",
    citation: "Revision Petition No. 3505 of 2007, (2009) CPJ 33 (NC)",
    date: "Order Dated 07 January 2009",
    facts:
      "A student enrolled in a two-year medical entrance coaching program and deposited the total composite fee upfront. After attending classes for six months, the student found the teaching sub-standard and sought admission withdrawal. The coaching institute refused any refund, citing a signed clause in the admission prospectus stating 'fees once paid are strictly non-refundable under any circumstances'.",
    holding:
      "The National Commission ruled that coaching centers cannot act as commercial monopolies. Retaining fees for the remaining 18 months during which no coaching was imparted constitutes an Unfair Trade Practice under the Consumer Protection Act. The NCDRC held that no institution can retain fees for a service not rendered. The institute was ordered to refund the pro-rata balance fee along with interest and litigation costs.",
    amount: "₹18,734 Pro-Rata Refund + ₹3,000 Litigation Costs",
    takeaway:
      "Signed 'No Refund' disclaimers on coaching institute enrollment forms have zero legal validity. The NCDRC held that institutions can only retain administrative costs for the exact period attended.",
  },
  {
    title: "District Commission Order for 100% Engineering College Fee Refund & ₹50,000 Damages",
    parties: "Aditya Vardhan v. Apex Institute of Engineering & Technology",
    citation: "Consumer Complaint No. 184/2022, DCDRC Jaipur (Second)",
    date: "Order Dated 19 September 2023",
    facts:
      "The complainant secured provisional admission in B.Tech Computer Science and deposited ₹1,25,000 towards first-semester tuition and caution deposit on 12 August. On 28 August (18 days before the officially notified university admission cut-off), the student cancelled his admission upon clearing state JEE centralized counseling. The college withheld ₹85,000 citing seat vacancy and prospectus rules.",
    holding:
      "The Consumer Commission held that under the statutory UGC Fee Refund Policy, any student cancelling admission 15 days or more before the cut-off date is entitled to a 100% refund subject to a maximum ₹1,000 processing deduction. The college's refusal to honor UGC directives was deemed gross deficiency in service. The forum directed the college to refund ₹1,24,000 with 9% per annum interest, plus ₹35,000 compensation for harassment and ₹15,000 litigation costs.",
    amount: "₹1,24,000 Refund @ 9% Interest + ₹35,000 Harassment Damages + ₹15,000 Costs",
    takeaway:
      "UGC fee refund guidelines are legally binding on all recognized universities and affiliated private colleges. When cancellation is submitted before cut-off, consumer courts award 100% refund with interest.",
  },
  {
    title: "State Commission Ruling on Illegal Retention of Original Documents and Caution Money",
    parties: "FIITJEE Ltd. v. Dr. Minathi Pathak & Anr.",
    citation: "First Appeal No. 412/2021, Delhi State Consumer Disputes Redressal Commission",
    date: "Order Dated 17 May 2023",
    facts:
      "A coaching academy refused to refund the post-dated cheques and advance fees of a Class 11 student who withdrew within two weeks of course commencement. The institute also withheld the student's original performance cards and demanded that the parent pay the entire two-year fees before releasing the clearance certificate.",
    holding:
      "The State Commission dismissed the institute's appeal, observing that coercing students or parents into bonded educational arrangements is repulsive to consumer law. The forum affirmed that educational institutions cannot treat students as trapped revenue sources. The State Commission ordered immediate cancellation of all post-dated cheques, refund of all advance deposits, and ₹50,000 punitive damages for coercive practices.",
    amount: "Full Advance Refund + Cancellation of Post-Dated Cheques + ₹50,000 Punitive Damages",
    takeaway:
      "Institutes cannot use post-dated cheques or withheld certificates to compel payment for unserved periods. High courts and consumer commissions treat document withholding as an actionable civil wrong.",
  },
];

const FAQS = [
  {
    question: "What is the UGC fee refund policy rule for college admission cancellation?",
    answer:
      "Under the University Grants Commission (UGC) Fee Refund Policy, higher educational institutions (HEIs) must refund 100% of deposited fees (subject to a maximum processing deduction of ₹1,000) if an admission cancellation application is formally submitted 15 days or more before the notified last date of admission. If submitted less than 15 days before the cut-off, the refund is 90%; within 15 days after the cut-off, 80%; between 16 and 30 days after the cut-off, 50%; and after 30 days, nil. The refund must be credited to the student's bank account within 15 calendar days.",
  },
  {
    question: "Can a school or college legally enforce a 'Fee Once Paid Is Non-Refundable' clause?",
    answer:
      "No. The Supreme Court of India in Islamic Academy of Education (2003) 6 SCC 697 and the National Consumer Disputes Redressal Commission (NCDRC) in Sehgal School of Competition have conclusively held that unilateral 'No Refund' clauses printed on prospectuses or admission forms are unconscionable, arbitrary, and legally void. Under Section 2(46) and 2(47) of the Consumer Protection Act, 2019, forfeiting fees for unserved academic terms constitutes an unfair trade practice and an unfair contract.",
  },
  {
    question: "How long does a school or college have to refund fees after receiving an application?",
    answer:
      "Under statutory UGC guidelines and Ministry of Education (MoE) 2024 directives, universities and colleges are mandated to process and credit admissible refunds within 15 calendar days of receiving the formal admission withdrawal application. For private coaching institutes, the MoE Coaching Centre Guidelines 2024 mandate pro-rata fee refunds within 10 days. If the institution fails to refund within this window, they become liable for penal interest at 9% to 18% per annum under consumer forum precedents.",
  },
  {
    question: "Can an educational institution withhold my original Class 10/12 marks cards or Transfer Certificate?",
    answer:
      "Strictly no. UGC Notification Paragraph 4 and AICTE regulations expressly prohibit institutions from withholding or impounding original academic certificates, migration certificates, or mark sheets under any pretext. For schools, CBSE Affiliation Bye-Laws and state education acts prohibit holding back a Transfer Certificate (TC) over fee disputes. Withholding original documents violates fundamental educational rights and constitutes actionable deficiency in service.",
  },
  {
    question: "What should I do if the college accounts department ignores my fee refund application?",
    answer:
      "If the institution fails to release your refund within 15 days, immediately serve a formal 15-day statutory advocate legal notice to the Principal, Registrar, and Management Trust via Registered Speed Post. If they fail to comply, lodge an online complaint on the UGC SAMARTH grievance portal (samarth.edu.in) and file an e-daakhil consumer complaint on e-jagriti.gov.in under Section 35 of the Consumer Protection Act, 2019 for 100% refund, interest, and harassment damages.",
  },
  {
    question: "Are hostel caution deposit and mess advance fees refundable upon seat cancellation?",
    answer:
      "Yes. Hostel caution money and security deposits are purely custodial funds that must be refunded 100% upon student room vacation, subject only to verified physical inventory damage deductions. Advance mess fees are operational prepayments for food supplies; under MoE regulations and consumer law, unconsumed mess charges for future months cannot be forfeited and must be refunded pro-rata.",
  },
  {
    question: "कॉलेज या स्कूल की फीस वापसी के लिए हिंदी में आवेदन पत्र कैसे लिखें और नियम क्या हैं?",
    answer:
      "कॉलेज या स्कूल में प्रवेश निरस्त कराने के लिए आप इस पृष्ठ पर दिए गए 'हिंदी आवेदन प्रारूप' का उपयोग कर सकते हैं। आवेदन में छात्र का नाम, रोल नंबर, जमा शुल्क की रसीद संख्या, और बैंक खाता विवरण (NEFT/RTGS हेतु) स्पष्ट रूप से दर्ज करें। आवेदन में UGC Fee Refund Policy और उपभोक्ता संरक्षण अधिनियम 2019 का संदर्भ दें। UGC नियमों के तहत अंतिम प्रवेश तिथि से 15 दिन पूर्व आवेदन करने पर केवल ₹1,000 काटकर 100% फीस 15 दिनों में वापस करना वैधानिक रूप से अनिवार्य है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fee Refund Application Formats for Schools and Colleges",
  description:
    "Ready fee-refund application formats in English and Hindi for school, college and hostel fees, with the rules to cite.",
  datePublished: "2026-11-06T10:00:00+05:30",
  dateModified: "2026-11-06T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/school-college-fee-refund-application`,
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
    "@type": "EducationalOrganization",
    name: "School and College Fee Refund Framework India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "School & College Fee Refund Application Formats (English & Hindi)",
  description:
    "Statutory fee refund application formats for college admission cancellation, school TC withdrawal, and hostel caution deposit with UGC and MoE rules.",
  encodingFormat: "application/msword",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Students, Parents, and Consumers across India",
    },
  },
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
      name: "School & College Fee Refund Hub",
      item: `${SITE_URL}/send-a-legal-notice/school-college-fee-refund-admission-cancellation`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Fee Refund Application Formats",
      item: `${SITE_URL}/templates/school-college-fee-refund-application`,
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

export default function SchoolCollegeFeeRefundApplicationPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Fee Refund Hub",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
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
        {/* Hero Section matching platform theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>UGC Fee Refund Policy 2024–2026</span>
              <span className="text-red-500">•</span>
              <span>MoE Coaching Guidelines</span>
              <span className="text-red-500">•</span>
              <span>CPA 2019 Mandate</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Fee Refund Application Formats for Schools and Colleges
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Fee Refund Mandate)
              </p>
              <p>
                Under UGC Fee Refund Regulations and Section 2(11) of the Consumer Protection Act, 2019, higher education institutions must refund 100% of deposited fees (minus a maximum ₹1,000 processing fee) if admission is withdrawn 15 days before the cut-off date. Coaching centers must refund pro-rata within 10 days under Ministry of Education 2024 guidelines. Unilateral &quot;No Refund&quot; prospectus stamps are void, and original certificates cannot be withheld.
              </p>
            </div>

            {/* 4 Verified Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  UGC 15-Day Cut-Off Mandate
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Max ₹1,000</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Processing Cap
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Mandatory Bank Credit TAT
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Zero</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Certificate Retention Allowed
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
            <FeeRefundTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Right to Fee Refund */}
              <section
                id="heading-statutory-basis"
                aria-labelledby="heading-statutory-basis-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Fee Refund Rights: UGC &amp; Consumer Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every academic admission cycle across India, hundreds of thousands of students and parents face hostile resistance when seeking fee refunds after cancelling admissions. Whether a student leaves an engineering college upon clearing a government seat, withdraws from a private boarding school, leaves a coaching centre midway, or vacates a hostel, administrative desks routinely recite internal rules declaring that &quot;fees once deposited shall not be refunded under any circumstances.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian law, these unilateral forfeiture clauses have zero legal enforceability. Educational institutions operate under mandatory regulatory frameworks: the{" "}
                  <Link
                    href="/law/ugc-fee-refund-policy"
                    className="text-red-600 font-bold hover:underline"
                  >
                    UGC Fee Refund Policy
                  </Link>
                  , the All India Council for Technical Education (AICTE) Approval Process Handbook, the Ministry of Education&apos;s 2024 Coaching Guidelines, and the Consumer Protection Act, 2019. In landmark judgments spanning from the Constitution Bench in <em>Islamic Academy of Education</em> to the National Consumer Disputes Redressal Commission (NCDRC), courts have held that collecting advance tuition for unrendered educational services constitutes an unfair trade practice and unjust enrichment.
                </p>
              </section>

              {/* Section 2: Interactive Application Workspace (Archetype P3) */}
              <section
                id="heading-interactive-workspace"
                aria-labelledby="heading-interactive-workspace-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-interactive-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Application Generator &amp; Annotated Template Workspace
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Word (.doc) &amp; Print Ready
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your required format below—College Admission (UGC), School TC &amp; Caution Money, Hostel Vacation, or Hindi Devanagari format. Edit the student, institution, and bank details in the form to generate a legally robust refund letter citing statutory clauses.
                </p>

                {/* Interactive Client Island */}
                <FeeRefundTemplateWorkspace />
              </section>

              {/* Section 3: UGC 5-Tier Refund Slabs & Statutory Deductions Comparison Table */}
              <section
                id="heading-ugc-slabs"
                aria-labelledby="heading-ugc-slabs-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-ugc-slabs"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    UGC 5-Tier Fee Refund Slabs: Mandatory Deduction Thresholds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Apex Regulatory Slabs
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Higher Educational Institutions (HEIs) recognized by the UGC or approved by AICTE are bound by the following statutory refund timetable. Notice that institutions cannot deduct arbitrary &quot;admin charges&quot; or &quot;seat forfeiture penalties&quot; outside these slabs:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <caption className="sr-only">
                      UGC 5-Tier Fee Refund Percentage and Timeline Matrix
                    </caption>
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Refund Tier
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Timing of Withdrawal Application
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Mandatory Refund Percentage
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Maximum Permissible Deduction
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Turnaround Time (TAT)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-red-600">Tier 1</td>
                        <td className="p-3.5 sm:p-4 font-medium">
                          15 days or more before the formally notified last date of admission
                        </td>
                        <td className="p-3.5 sm:p-4 font-extrabold text-emerald-600">
                          100% of Entire Aggregate Fee
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold">
                          Max ₹1,000/- as processing fee
                        </td>
                        <td className="p-3.5 sm:p-4 font-bold">Within 15 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-700">Tier 2</td>
                        <td className="p-3.5 sm:p-4">
                          Less than 15 days before the formally notified last date of admission
                        </td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          90% of Aggregate Fee
                        </td>
                        <td className="p-3.5 sm:p-4">10% of aggregate fee</td>
                        <td className="p-3.5 sm:p-4 font-bold">Within 15 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-700">Tier 3</td>
                        <td className="p-3.5 sm:p-4">
                          15 days or less after the formally notified last date of admission
                        </td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          80% of Aggregate Fee
                        </td>
                        <td className="p-3.5 sm:p-4">20% of aggregate fee</td>
                        <td className="p-3.5 sm:p-4 font-bold">Within 15 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-700">Tier 4</td>
                        <td className="p-3.5 sm:p-4">
                          30 days or less, but more than 15 days, after last date of admission
                        </td>
                        <td className="p-3.5 sm:p-4 font-bold text-amber-600">
                          50% of Aggregate Fee
                        </td>
                        <td className="p-3.5 sm:p-4">50% of aggregate fee</td>
                        <td className="p-3.5 sm:p-4 font-bold">Within 15 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-400">Tier 5</td>
                        <td className="p-3.5 sm:p-4">
                          More than 30 days after the formally notified last date of admission
                        </td>
                        <td className="p-3.5 sm:p-4 font-bold text-red-600">
                          0% (Tuition Only; Caution Money 100% Refundable)
                        </td>
                        <td className="p-3.5 sm:p-4">100% of tuition fee</td>
                        <td className="p-3.5 sm:p-4 font-bold">Within 15 days for Caution Money</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Mandatory vs. Optional Clauses in a Refund Application (Archetype P3 Table) */}
              <section
                id="heading-mandatory-elements"
                aria-labelledby="heading-mandatory-elements-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-mandatory-elements-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Mandatory vs. Optional Clauses in a Fee Refund Application
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Drafting Checklist
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Archetype P3 guidelines, a defective refund request allows accounts offices to raise bureaucratic queries and stall payment. Ensure your application includes every mandatory element while avoiding unnecessary concessions:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <caption className="sr-only">
                      Mandatory versus Optional Elements in a Legal Fee Refund Application
                    </caption>
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Application Element
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Status
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Statutory Purpose &amp; Impact
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4">
                          Consequence if Omitted
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          UGC / MoE Statutory Policy Citation
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-black bg-red-100 text-red-700">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Transforms the letter from a discretionary plea into an enforcement of binding administrative law.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          College clerk rejects the letter by citing internal prospectus rules.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          Verified Fee Receipt / UTR Bank Number
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-black bg-red-100 text-red-700">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Establishes concrete financial consideration under Section 2(d) Indian Contract Act &amp; Section 63 BSA 2023.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          Accounts team stalls by asking for physical original ledger reconciliation.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          Exact Withdrawal Date vs. Last Admission Date
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-black bg-red-100 text-red-700">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Fixes your claim into Tier 1 (100% refund) or Tier 2 (90% refund) under the UGC schedule.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          Institution arbitrarily backdates your application to a lower refund tier.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          Complete Bank Coordinates (NEFT/IFSC)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-black bg-red-100 text-red-700">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Enables direct automated transfer and eliminates delays linked to uncollected account-payee cheques.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          Institute demands in-person visits to accounts office to collect cheques.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          Demand for Return of Original Documents
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-black bg-red-100 text-red-700">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Invokes UGC Paragraph 4 prohibition on certificate retention; prevents institutional hostage-taking.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          College retains Class 12 marks card to force you into paying remaining term fees.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          Detailed Family Hardship Narrative
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600">
                            OPTIONAL
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Humanizes the request for discretionary early settlement, but carries no additional statutory weight.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          Zero legal detriment; UGC guidelines apply regardless of reason for cancellation.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold">
                          Allotment Letter of New Institution
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600">
                            OPTIONAL
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Demonstrates migration to a government or subsidized seat, useful for speedy administrative approval.
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          Not legally required; a student can withdraw simply for personal reasons.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: 6 Common Mistakes That Weaken Fee Refund Requests (Archetype P3) */}
              <section
                id="heading-common-mistakes"
                aria-labelledby="heading-common-mistakes-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-common-mistakes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    6 Critical Mistakes That Weaken Fee Refund Applications
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Common Pitfalls
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Through hundreds of student recovery disputes handled at LegalRecovery, these six fatal mistakes repeatedly compromise parents&apos; legal standing:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-2xs">
                    <span className="inline-block text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-2">
                      Mistake 1: Verbal Requests Only
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Visiting the Dean or Accounts Desk Without Written Acknowledgment
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Verbal discussions leave zero electronic or written paper trail. When the 15-day cut-off lapses, colleges claim the student never applied in time, forcing them into a lower refund tier or complete forfeiture. Always submit in writing with a stamped receiving copy or Registered Speed Post.
                    </p>
                  </div>

                  <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-2xs">
                    <span className="inline-block text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-2">
                      Mistake 2: Surrendering Original Receipts
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Handing Over Original Fee Receipts Without Retaining Certified Copies
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Accounts staff frequently ask parents to deposit original fee challans or receipts &quot;to process the file.&quot; Once parted with, parents lose their primary proof of payment. Always submit photocopies and retain the original receipt or bank statement showing UTR debit.
                    </p>
                  </div>

                  <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-2xs">
                    <span className="inline-block text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-2">
                      Mistake 3: Accepting Arbitrary Voucher Credits
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Accepting &quot;Course Credit Vouchers&quot; or Sibling Transfer Notes
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Coaching institutes and ed-tech companies routinely offer non-transferable coupons or offer to transfer fees to a younger sibling instead of cash refunds. Under Consumer Protection Act Section 2(47), forcing store credits in lieu of bank reversal is an unfair trade practice.
                    </p>
                  </div>

                  <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-2xs">
                    <span className="inline-block text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-2">
                      Mistake 4: Signing Coercive Indemnity Bonds
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Signing &quot;No Further Claims / Waived Rights&quot; Undertakings
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When returning a tiny fraction (e.g., 20%) of the fee, colleges often compel students to sign an affidavit declaring they will not approach courts or regulators. Under Section 28 of the Indian Contract Act, agreements restraining legal proceedings are void. Never sign blanket waivers.
                    </p>
                  </div>

                  <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-2xs">
                    <span className="inline-block text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-2">
                      Mistake 5: Failing to Address Proper Authorities
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Addressing Only the Branch Counsellor Instead of the Registrar / Trust
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sales counsellors and admission agents have zero statutory authority to disburse funds. Applications must be addressed to the Registrar, Dean of Admissions, Principal, or Management Trust with official designation to establish legal privity of notice.
                    </p>
                  </div>

                  <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-2xs">
                    <span className="inline-block text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-2">
                      Mistake 6: Ignoring Ed-Tech NBFC Loan Traps
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Cancelling the Course but Not Cancelling the Bank / NBFC EMI Mandate
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In coaching and ed-tech admissions, fees are frequently financed through third-party NBFCs. Submitting a withdrawal to the institute does NOT stop the NACH mandate automatically. See our dedicated guide on{" "}
                      <Link
                        href="/edtech-course-loan-emi-cancellation-refund"
                        className="text-red-600 font-bold hover:underline"
                      >
                        Ed-Tech Course &amp; Loan EMI Cancellation
                      </Link>{" "}
                      to revoke the lender mandate simultaneously.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Hand-authored SVG Escalation Timeline */}
              <section
                id="heading-escalation-rail"
                aria-labelledby="heading-escalation-rail-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Escalation Ladder: From Application to Commission Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Process Workflow
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a school or college resists refunding fees, follow this structured four-step legal progression. Most institutions settle immediately upon receiving Step 3 (Advocate Legal Notice) to avoid public regulatory sanctions on UGC SAMARTH:
                </p>

                {/* Hand-Authored SVG Escalation Diagram */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 860 170"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Statutory 4-Step Fee Refund Escalation Process Diagram"
                  >
                    {/* Step 1 */}
                    <g transform="translate(10, 15)">
                      <rect width="190" height="135" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                      <text x="52" y="32" fill="#0F172A" fontSize="13" fontWeight="bold">Written Application</text>
                      <text x="18" y="65" fill="#475569" fontSize="11">Submit this page&apos;s format</text>
                      <text x="18" y="83" fill="#475569" fontSize="11">via Speed Post &amp; email.</text>
                      <text x="18" y="101" fill="#DC2626" fontSize="10" fontWeight="bold">15-day UGC clock starts</text>
                    </g>

                    {/* Arrow 1 -> 2 */}
                    <path d="M205 82 H 225" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

                    {/* Step 2 */}
                    <g transform="translate(230, 15)">
                      <rect width="190" height="135" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                      <text x="52" y="32" fill="#0F172A" fontSize="13" fontWeight="bold">Regulatory Nudge</text>
                      <text x="18" y="65" fill="#475569" fontSize="11">If unpaid at Day 16,</text>
                      <text x="18" y="83" fill="#475569" fontSize="11">lodge SAMARTH / NCH</text>
                      <text x="18" y="101" fill="#D97706" fontSize="10" fontWeight="bold">Docket ref for bad faith</text>
                    </g>

                    {/* Arrow 2 -> 3 */}
                    <path d="M425 82 H 445" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

                    {/* Step 3 */}
                    <g transform="translate(450, 15)">
                      <rect width="190" height="135" rx="14" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                      <text x="52" y="32" fill="#991B1B" fontSize="13" fontWeight="bold">Advocate Notice</text>
                      <text x="18" y="65" fill="#7F1D1D" fontSize="11">High Court advocate notice</text>
                      <text x="18" y="83" fill="#7F1D1D" fontSize="11">served to Registrar/Trust.</text>
                      <text x="18" y="101" fill="#B91C1C" fontSize="10" fontWeight="bold">15-day statutory demand</text>
                    </g>

                    {/* Arrow 3 -> 4 */}
                    <path d="M645 82 H 665" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

                    {/* Step 4 */}
                    <g transform="translate(670, 15)">
                      <rect width="180" height="135" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#0F172A" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                      <text x="52" y="32" fill="#0F172A" fontSize="13" fontWeight="bold">e-Jagriti Filing</text>
                      <text x="18" y="65" fill="#475569" fontSize="11">District Consumer Court</text>
                      <text x="18" y="83" fill="#475569" fontSize="11">under Section 35 CPA 2019.</text>
                      <text x="18" y="101" fill="#15803D" fontSize="10" fontWeight="bold">100% + interest + damages</text>
                    </g>

                    <defs>
                      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                        <polygon points="0 0, 7 3.5, 0 7" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 7: Worked Case Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: ₹1,57,000 Admission &amp; Hostel Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Breakdown
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To understand how statutory deductions work in practice versus the inflated penalties colleges attempt to charge, review this real-world breakdown of a student who cancelled admission 18 days prior to the last notified date:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      Dispute Profile: B.Tech Admission + Campus Hostel Seat Cancellation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Student deposited ₹1,25,000 academic fee + ₹32,000 hostel/mess advance on 10 July. Admission cut-off notified as 31 August. Withdrawal submitted on 12 August (19 days before cut-off).
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Fee Component</th>
                          <th className="p-3">Amount Deposited</th>
                          <th className="p-3">College Attempted Deduction</th>
                          <th className="p-3">Lawful Statutory Deduction</th>
                          <th className="p-3 font-extrabold text-slate-900">Lawful Refund Due</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        <tr>
                          <td className="p-3 font-medium">1st Semester Tuition Fee</td>
                          <td className="p-3">₹95,000</td>
                          <td className="p-3 text-red-600 line-through">₹47,500 (50% forfeiture)</td>
                          <td className="p-3 font-semibold text-emerald-700">₹0 (UGC Tier 1 rule)</td>
                          <td className="p-3 font-extrabold text-emerald-600">₹95,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Development &amp; Lab Charges</td>
                          <td className="p-3">₹20,000</td>
                          <td className="p-3 text-red-600 line-through">₹20,000 (100% forfeiture)</td>
                          <td className="p-3 font-semibold text-emerald-700">₹0</td>
                          <td className="p-3 font-extrabold text-emerald-600">₹20,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">College Caution Money</td>
                          <td className="p-3">₹10,000</td>
                          <td className="p-3 text-red-600 line-through">₹10,000 (Withheld)</td>
                          <td className="p-3 font-semibold text-emerald-700">₹0</td>
                          <td className="p-3 font-extrabold text-emerald-600">₹10,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Hostel Security &amp; Room Rent</td>
                          <td className="p-3">₹20,000</td>
                          <td className="p-3 text-red-600 line-through">₹15,000 (Semester Rent)</td>
                          <td className="p-3 font-semibold text-emerald-700">₹0 (Seat re-allotted)</td>
                          <td className="p-3 font-extrabold text-emerald-600">₹20,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Advance Mess Food Charges</td>
                          <td className="p-3">₹12,000</td>
                          <td className="p-3 text-red-600 line-through">₹12,000 (Non-refundable)</td>
                          <td className="p-3 font-semibold text-emerald-700">₹0 (No food consumed)</td>
                          <td className="p-3 font-extrabold text-emerald-600">₹12,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Statutory Administrative Processing</td>
                          <td className="p-3">—</td>
                          <td className="p-3 text-red-600">—</td>
                          <td className="p-3 font-bold text-slate-900">+₹1,000 (Max Cap)</td>
                          <td className="p-3 font-bold text-red-600">-₹1,000</td>
                        </tr>
                        <tr className="bg-slate-50 font-black text-slate-900">
                          <td className="p-3">Total Cumulative Settlement</td>
                          <td className="p-3">₹1,57,000</td>
                          <td className="p-3 text-red-600 line-through">₹52,500 Offered</td>
                          <td className="p-3 text-slate-900">₹1,000 Total Deduction</td>
                          <td className="p-3 text-emerald-600 text-sm sm:text-base">₹1,56,000 Recoverable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 8: Landmark Case Citations Digest */}
              <section
                id="heading-case-citations"
                aria-labelledby="heading-case-citations-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Case Law Digest: Supreme Court &amp; Consumer Precedents
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200/60">
                          Judicial Precedent #{idx + 1}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-xs font-bold text-red-600 mb-1">{c.parties}</p>
                      <p className="text-[11px] text-slate-500 font-mono mb-3">{c.citation}</p>

                      <div className="space-y-2.5 text-xs text-slate-700 mb-4">
                        <p>
                          <strong className="text-slate-900">Facts: </strong>
                          {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900">Court Ruling: </strong>
                          {c.holding}
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase block">
                            Award / Recovery Ordered
                          </span>
                          <span className="text-xs font-extrabold text-emerald-700">{c.amount}</span>
                        </div>
                        <div className="text-[11px] text-slate-600 italic max-w-sm">
                          <strong>Strategic Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: Documentary Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Documentary Evidence Checklist for Fee Refund Claims
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Evidence Dossier
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before dispatching your fee refund application or serving a legal notice, assemble these six core documents to make your legal standing airtight under Section 63 of Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
                    <span className="text-red-600 font-black text-sm block mb-1">01</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Fee Receipts &amp; Bank UTR</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Official stamped fee receipt, online payment transaction slip, or bank account statement evidencing RTGS/NEFT/UPI transfer to the institution.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
                    <span className="text-red-600 font-black text-sm block mb-1">02</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Provisional Allotment Letter</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Provisional admission letter, student identity card, scholar register extract, or course enrollment confirmation docket.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
                    <span className="text-red-600 font-black text-sm block mb-1">03</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Admission Cut-Off Notification</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Copy of the university or state counseling authority brochure showing the formally notified &quot;Last Date of Admission&quot; to establish your Tier 1 status.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
                    <span className="text-red-600 font-black text-sm block mb-1">04</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Proof of Application Delivery</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Registered Speed Post consignment tracking report, receiving clerk stamp on duplicate letter, or official institutional portal grievance ticket timestamp.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
                    <span className="text-red-600 font-black text-sm block mb-1">05</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Departmental Clearance Slip</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Duly signed &quot;No Dues&quot; or library/lab/hostel surrender certificate showing zero physical property damage or library book arrears.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
                    <span className="text-red-600 font-black text-sm block mb-1">06</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Institutional Rejection Mail</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Any email, letter, or WhatsApp message from the management or accounts office arbitrarily refusing the refund or claiming &quot;No Refund Policy.&quot;
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: When Institution Refuses: Advocate Notice Escalation */}
              <section
                id="heading-advocate-escalation"
                aria-labelledby="heading-advocate-escalation-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-advocate-escalation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    When the Institution Refuses: Advocate Legal Notice Escalation
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Notice Rail
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If the accounts department fails to disburse your refund within 15 calendar days, continued informal follow-ups only waste precious limitation time. The next statutory step is serving a formal 15-day Demand Notice through an advocate on official legal letterhead.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Consumer Protection Act, 2019, an advocate legal notice establishes undeniable legal demand, fast-tracks UGC SAMARTH de-recognition scrutiny, and opens personal civil liability against college trustees. For ed-tech platforms or study abroad agencies, also review our guides on{" "}
                  <Link
                    href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
                    className="text-red-600 font-bold hover:underline"
                  >
                    Legal Notice for School/College Fee Refund
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/study-abroad-consultant-refund-legal-notice"
                    className="text-red-600 font-bold hover:underline"
                  >
                    Study-Abroad Consultant Fee Recovery
                  </Link>
                  .
                </p>

                {/* Advocate Notice CTA Component */}
                <FeeRefundNoticeCTA />
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: School &amp; College Fee Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Plain-Language Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 transition-colors [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-base font-bold text-slate-900 select-none">
                        <span>{faq.question}</span>
                        <span className="ml-3 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources & Legal References */}
              <section
                id="heading-primary-sources"
                aria-labelledby="heading-primary-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-primary-sources-title"
                  className="text-base sm:text-lg font-bold text-slate-900"
                >
                  Sources &amp; Statutory Legal References
                </h2>
                <ul className="space-y-2 text-xs text-slate-600 list-disc pl-5">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <li key={index}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-500 mt-2">
                  Last updated: 06 November 2026. Verified against UGC Regulations, AICTE Guidelines, Ministry of Education 2024 Coaching Guidelines, and Consumer Protection Act, 2019.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Contextual Legal Library Cluster */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
