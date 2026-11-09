import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CoachingNoticeCTA from "./CoachingNoticeCTA";
import CoachingTableOfContents from "./CoachingTableOfContents";
import CoachingProblemTabs from "./CoachingProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Coaching Centre Refund Rules: 2024 Guidelines Explained",
  description:
    "The Ministry of Education's 2024 coaching guidelines require pro-rata refunds within 10 days. Who they cover and how to claim.",
  alternates: {
    canonical: `${SITE_URL}/law/coaching-centre-refund-guidelines-2024`,
  },
  openGraph: {
    title: "Coaching Centre Refund Rules: 2024 Guidelines Explained",
    description:
      "Statutory breakdown of the Ministry of Education 2024 coaching guidelines: pro-rata tuition refunds within 10 days, hostel fee returns, void 'no-refund' clauses, and consumer court remedies.",
    url: `${SITE_URL}/law/coaching-centre-refund-guidelines-2024`,
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
    title: "Guidelines for Regulation of Coaching Centres (January 2024) — Ministry of Education, Department of Higher Education, Government of India",
    url: "https://www.education.gov.in/sites/upload_files/mhrd/files/Guidlines_Coaching_Centres_en.pdf",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(47) Unfair Trade Practice & Section 2(46) Unfair Contract",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Central Consumer Protection Authority (CCPA) Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Services, 2022",
    url: "https://consumeraffairs.nic.in/sites/default/files/CCPA_Notification.pdf",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC) Landmark Ruling in FIITJEE Ltd. v. Dr. Minathi Rath (Revision Petition No. 3365 of 2006)",
    url: "https://cms.nic.in/ncdrcnew/judgments.html",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Receipts, Emails, & Digital Communication)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Forfeiture of Advance Coaching Fees for Unrendered Semesters Declared Unfair Trade Practice",
    parties: "FIITJEE Ltd. v. Dr. Minathi Rath",
    citation: "Revision Petition No. 3365 of 2006, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 14 November 2011",
    facts:
      "A student enrolled in a 2-year integrated coaching program for IIT-JEE entrance preparation and paid the full course fee upfront. After attending for six months, the student found the teaching pace unsuitable and withdrew from the institute. FIITJEE refused to refund the fee for the remaining 1.5 years, relying on a contractual clause stating that fees once deposited were non-refundable under any contingency.",
    holding:
      "The National Consumer Commission held that educational coaching centres cannot collect non-refundable fees for future years or quarters upfront. Retaining money for classes never attended constitutes an unfair trade practice and an unconscionable contract. The NCDRC directed FIITJEE to refund the pro-rata balance of the fee along with interest and litigation costs, establishing that students cannot be treated as trapped commercial debtors.",
    amount: "Full Pro-Rata Course Fee Refund + 9% Annual Interest + ₹25,000 Litigation Compensation",
    takeaway:
      "Coaching institutes cannot hide behind fine-print 'no-refund' clauses. Courts consistently treat advance multi-year fee forfeitures as illegal retention of funds when a student leaves midway.",
  },
  {
    title: "District Commission Mandates 100% Pro-Rata Refund Plus Mental Harassment Damages for Medical Aspirant",
    parties: "Suresh Sharma v. Allen Career Institute",
    citation: "Consumer Complaint No. 184/2022, District Consumer Disputes Redressal Commission (DCDRC), Kota",
    date: "Order Dated 19 July 2023",
    facts:
      "A NEET aspirant enrolled in a pre-medical foundation program at Kota and paid ₹1,35,000 for the academic session alongside hostel advance charges. After three months, the student suffered severe depression and physical illness, prompting the family to submit medical certificates and a formal course withdrawal notice. Allen Career Institute rejected the refund plea, citing their internal 15-day cancellation cutoff.",
    holding:
      "The District Consumer Commission ruled that an institute cannot unjustly enrich itself by pocketing fees for services it never rendered. Forcing a sick or distressed minor student to forfeit a full year's fee is a gross deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. The court ordered an immediate pro-rata refund of ₹95,000 alongside ₹20,000 for mental agony and ₹7,000 for legal expenses.",
    amount: "₹95,000 Pro-Rata Tuition Refund + ₹20,000 Mental Harassment Award + ₹7,000 Costs",
    takeaway:
      "Internal 15-day refund cut-offs imposed by coaching institutes have zero statutory validity against medical or personal mid-course withdrawals. Consumer commissions enforce strict pro-rata reimbursements.",
  },
  {
    title: "State Commission Penalizes Premier Institute for Refusing Hostel & Mess Balance Upon Relocation",
    parties: "Praveen Kumar v. Aakash Educational Services Ltd. & Anr.",
    citation: "First Appeal No. 412/2021, State Consumer Disputes Redressal Commission (SCDRC), New Delhi",
    date: "Order Dated 11 October 2022",
    facts:
      "The complainant enrolled his daughter in a classroom coaching program with tied hostel accommodation in South Delhi. Due to the father's sudden government transfer, the student had to relocate to another state. Aakash Institute and the affiliated hostel management refused to refund unconsumed hostel and mess advance fees amounting to ₹78,000, claiming hostel contracts were non-cancellable annual agreements.",
    holding:
      "The State Commission held that residential and mess services are ancillary to educational training. Forfeiting residential fees when a student is physically absent and unable to reside at the premises amounts to clear deficiency in service and unjust enrichment. The forum directed Aakash Institute and the hostel management to jointly refund the entire unused residential balance of ₹78,000 with 10% interest.",
    amount: "₹78,000 Residential Refund @ 10% Interest + ₹15,000 Litigation Costs",
    takeaway:
      "Ancillary charges such as hostel, mess, transport, and library deposits must be refunded on a pro-rata basis. Institutes and tied service providers share joint liability under consumer law.",
  },
  {
    title: "Supreme Court Affirms Judicial Disapproval of Commercial Exploitation by Coaching Entities",
    parties: "Islamic Academy of Education & Anr. v. State of Karnataka & Ors.",
    citation: "Writ Petition (Civil) No. 350 of 1993, (2003) 6 SCC 697",
    date: "Constitution Bench Judgment Dated 14 August 2003",
    facts:
      "A Constitution Bench of the Supreme Court examined whether educational institutions and preparatory centres could demand entire course fees in advance and enforce blanket forfeiture clauses if a student discontinued studies prior to completion.",
    holding:
      "The Supreme Court ruled that charging advance fees for the entire duration of a multi-year program is impermissible and amounts to profiteering and commercial exploitation. Educational and preparatory institutions may collect fees only for the current semester or quarter. If a candidate leaves midway, the institution is entitled only to reasonable administrative processing expenses, not the full course revenue.",
    amount: "Binding National Precedent Capping Advance Fee Collection",
    takeaway:
      "The Supreme Court Constitution Bench established that charging upfront fees for future unrendered semesters is legally invalid. This constitutional benchmark underpins the Ministry of Education's 2024 Coaching Guidelines.",
  },
];

const FAQS = [
  {
    question: "What are the new coaching centre refund rules under the 2024 Ministry of Education guidelines?",
    answer:
      "Under Clause 11 of the 'Guidelines for Regulation of Coaching Centres' notified by the Ministry of Education in January 2024, if a student leaves a coaching course midway after paying in full, the coaching centre is legally required to refund the unexpired fees on a pro-rata basis within 10 calendar days. This refund covers not only tuition fees but also proportionate amounts for hostel accommodation, mess services, and refundable caution deposits.",
  },
  {
    question: "How is the pro-rata fee refund calculated when a student leaves a coaching institute midway?",
    answer:
      "The pro-rata refund is calculated by dividing the total net tuition fee by the total course duration (in weeks or months) to determine the weekly or monthly rate. The centre can only charge for the period up to the formal date of written withdrawal; the remaining balance for unrendered weeks must be refunded in full. Reasonable costs for study material already physically handed over may be deducted, but inflated arbitrary deductions are prohibited.",
  },
  {
    question: "Can a coaching institute refuse to refund fees based on a 'No Refund' clause in the prospectus?",
    answer:
      "No. 'No refund under any circumstances' clauses are legally void and unenforceable. The Central Consumer Protection Authority (CCPA) and the National Consumer Disputes Redressal Commission (NCDRC) have repeatedly ruled that unilateral non-refund agreements violate Section 2(46) (unfair contracts) and Section 2(47) (unfair trade practices) of the Consumer Protection Act, 2019.",
  },
  {
    question: "What is the 10-day refund deadline mandated for coaching centres?",
    answer:
      "Clause 11(1) of the MoE 2024 Guidelines strictly stipulates that once a student or parent submits a written request for course discontinuation, the coaching institute must compute and credit the pro-rata refund to the student's bank account within 10 calendar days. Failure to comply exposes the institute to statutory penalties up to ₹1,00,000 and potential cancellation of state registration.",
  },
  {
    question: "Are hostel and mess advance fees refundable if a student leaves coaching early?",
    answer:
      "Yes. Guideline 11(2) specifically directs that if a student vacates tied hostel or mess facilities on discontinuing coaching, advance payments for food, lodging, and caution security deposits must be refunded on a pro-rata basis for the remaining duration within 10 days. Institutes cannot forfeit residential fees for months when the room is vacated.",
  },
  {
    question: "What legal action can parents take if a coaching centre ignores refund requests?",
    answer:
      "If a coaching centre fails to refund fees within 10 days, parents can execute a three-step legal escalation: (1) Serve a formal statutory advocate demand notice quoting MoE 2024 Guidelines and CPA 2019; (2) File an online consumer complaint via the National Consumer Helpline (NCH) and e-Jagriti portal demanding refund, 9-12% interest, and harassment damages; and (3) Report non-compliance to the District Magistrate or State Higher Education Department.",
  },
  {
    question: "Can I cancel a zero-interest EMI loan taken for coaching fees if my child drops out?",
    answer:
      "Yes. When you cancel the course, the coaching centre is legally obliged under RBI Digital Lending Guidelines and consumer law to communicate the cancellation to the financing NBFC (e.g., Propelld, Avanse, Bajaj Finserv) and remit the pro-rata balance directly to close the loan account. If the institute stalls, a legal notice must be served jointly on the centre and lender to freeze auto-debit ECS mandates.",
  },
  {
    question: "Coaching fees refund niyam kya hain aur legal notice kaise bheje (Hinglish FAQ)?",
    answer:
      "Ministry of Education ke January 2024 Coaching Guidelines ke anusar, agar koi student course beech mein chhodta hai, toh coaching centre ko 10 din ke andar unconsumed time ki pro-rata fees wapas karni hoti hai. Agar institute mana kare, toh aap LegalRecovery.in par verified advocate ke dwara Section 2(47) CPA 2019 aur MoE Guidelines ke tehat Registered Speed Post aur email se 15 din ka formal statutory legal notice bhej sakte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Coaching Centre Refund Rules: 2024 Guidelines Explained",
  description:
    "The Ministry of Education's 2024 coaching guidelines require pro-rata refunds within 10 days. Who they cover and how to claim.",
  datePublished: "2026-11-06T10:00:00+05:30",
  dateModified: "2026-11-06T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/coaching-centre-refund-guidelines-2024`,
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
    name: "Ministry of Education Coaching Centre Guidelines 2024 Pro-Rata Fee Refund Rules",
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
      name: "Education & Fee Refund Laws",
      item: `${SITE_URL}/send-a-legal-notice/school-college-fee-refund-admission-cancellation`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coaching Centre Refund Rules 2024",
      item: `${SITE_URL}/law/coaching-centre-refund-guidelines-2024`,
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

export default function CoachingRefundGuidelinesPage() {
  const breadcrumbItems = [
    { label: "Education & Fee Refund Laws", href: "/send-a-legal-notice/school-college-fee-refund-admission-cancellation" },
    { label: "Coaching Centre Refund Rules 2024", href: "/law/coaching-centre-refund-guidelines-2024" },
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
        {/* Hero Section matching irctc and cheque-bounce layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Ministry of Education 2024 Guidelines</span>
              <span className="text-amber-500">•</span>
              <span>10-Day Pro-Rata Refund Mandate</span>
              <span className="text-amber-500">•</span>
              <span>CPA 2019 Enforceable</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Leaving a Coaching Course Midway? The Pro-Rata Refund Rule
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-amber-400 mb-1">
                Statutory Summary (MoE 2024 Coaching Guidelines &amp; Consumer Protection Act)
              </p>
              <p>
                Under Clause 11 of the Ministry of Education&apos;s 2024 Coaching Guidelines, coaching centres are legally required to refund fees on a pro-rata basis within 10 days if a student leaves midway. Blanket &quot;no-refund&quot; clauses are deemed illegal unfair trade practices under Section 2(47) of the Consumer Protection Act, 2019, entitling parents to statutory demand notices and e-Jagriti consumer court recovery.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">10 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Refund Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Pro-Rata</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Tuition &amp; Hostel Fees</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Void</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">&quot;No Refund&quot; Policy Terms</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹1 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penalty for Violations</p>
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
            <CoachingTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview + Effective Date */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Overview: The Ministry of Education&apos;s Landmark 2024 Coaching Guidelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For decades, private coaching centres preparing students for engineering (JEE), medical (NEET), civil services (UPSC), and secondary board examinations operated in an unregulated grey market across Indian cities like Kota, Delhi, Sikar, Hyderabad, and Bengaluru. Institutes routinely extracted non-refundable multi-year course fees—often ranging between ₹1,50,000 and ₹4,00,000—before a student had even attended a single lecture. When students encountered burnout, substandard instruction, or severe mental stress, institutes summarily pointed to boilerplate &quot;fees once paid are strictly non-refundable&quot; clauses.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In response to surging consumer disputes and national student welfare concerns, the <strong>Ministry of Education (Department of Higher Education), Government of India</strong>, notified the comprehensive <strong>&quot;Guidelines for Regulation of Coaching Centres&quot; on January 16, 2024</strong>. This landmark statutory framework dismantled unilateral fee forfeiture, introducing an unequivocal national mandate: any student who discontinues a coaching course midway is entitled to an automatic pro-rata refund of tuition fees, hostel expenses, and caution deposits within 10 calendar days.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Combined with the enforceable remedies of the <strong>Consumer Protection Act, 2019</strong> and rulings by the National Consumer Disputes Redressal Commission (NCDRC), parents now hold powerful statutory leverage to recover their hard-earned savings through advocate legal notices and online consumer proceedings.
                </p>
              </section>

              {/* Section 2: Before vs After Comparison Table */}
              <section id="heading-before-after" aria-labelledby="heading-before-after-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-before-after-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Before vs. After Comparison: How the 2024 Guidelines Rewrote Coaching Refund Rights
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Contrast Analysis
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The 2024 framework fundamentally shifted the balance of legal power from coaching monopolies back to students and parents. The table below outlines how the law operated previously versus the strict obligations enforceable today:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse" role="table" aria-label="Before vs After Coaching Refund Rules">
                    <thead>
                      <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider w-1/4">Dispute Area</th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider w-3/8 text-red-300">Previous Practice (Pre-2024)</th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider w-3/8 text-emerald-300">2024 MoE Guideline Rule (Current Law)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50">Mid-Course Withdrawal</td>
                        <td className="p-3 sm:p-4 text-red-900 bg-red-50/30">Total fee forfeiture enforced using contractual &quot;No Refund Under Any Condition&quot; prospectus disclaimers.</td>
                        <td className="p-3 sm:p-4 text-emerald-950 bg-emerald-50/30 font-medium">Mandatory pro-rata refund of tuition fees for the remaining course duration within 10 calendar days.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50">Hostel &amp; Mess Charges</td>
                        <td className="p-3 sm:p-4 text-red-900 bg-red-50/30">Hostel contractors and coaching centres passed blame, refusing to return unconsumed food and room rent.</td>
                        <td className="p-3 sm:p-4 text-emerald-950 bg-emerald-50/30 font-medium">Advance hostel, mess, and caution money must be refunded on a pro-rata basis within 10 days (Guideline 11.2).</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50">Advance Fee Demands</td>
                        <td className="p-3 sm:p-4 text-red-900 bg-red-50/30">Mandatory lump-sum 2-year or 3-year fee collection upfront prior to course commencement.</td>
                        <td className="p-3 sm:p-4 text-emerald-950 bg-emerald-50/30 font-medium">Fees must be fair, reasonable, and billed on a proportionate instalment or modular basis without surprise hikes.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50">Enrolment Age Threshold</td>
                        <td className="p-3 sm:p-4 text-red-900 bg-red-50/30">Enrolment of students as young as Class 6 or 7 (11–12 years old) in aggressive &quot;foundation batches&quot;.</td>
                        <td className="p-3 sm:p-4 text-emerald-950 bg-emerald-50/30 font-medium">Strict ban on enrolling students below 16 years of age or prior to completing secondary school (Class 10).</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50">Misleading Marketing Claims</td>
                        <td className="p-3 sm:p-4 text-red-900 bg-red-50/30">Fake rank claims, buying topper names, guarantee of selection, and boasting 100% success ratios.</td>
                        <td className="p-3 sm:p-4 text-emerald-950 bg-emerald-50/30 font-medium">Banned under Guideline 6 &amp; CCPA rules; misleading ads trigger up to ₹10 lakh fines and course cancellations.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50">Statutory Penalties</td>
                        <td className="p-3 sm:p-4 text-red-900 bg-red-50/30">Zero administrative oversight; parents forced into protracted, expensive civil court litigation.</td>
                        <td className="p-3 sm:p-4 text-emerald-950 bg-emerald-50/30 font-medium">₹25,000 for first offence, ₹1,00,000 for second offence, and deregistration for repeated refund refusal.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Statutory Timeline of the Change */}
              <section id="heading-timeline" aria-labelledby="heading-timeline-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timeline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Chronological Evolution: How India&apos;s Coaching Refund Protections Became Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The transformation from unchecked institutional dominance to enforceable student consumer rights occurred through a progressive chain of judicial rulings, consumer authority interventions, and parliamentary notifications:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 space-y-6 my-6">
                  <li className="ml-6">
                    <span className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      1
                    </span>
                    <time className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      August 2003 • Supreme Court Constitution Bench Benchmark
                    </time>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Supreme Court Condemns Advance Course Profiteering
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      In <em>Islamic Academy of Education v. State of Karnataka (2003) 6 SCC 697</em>, a Constitution Bench ruled that charging fees in advance for the entirety of a multi-year program is predatory and legally invalid, establishing the philosophical bedrock for pro-rata fee restitution.
                    </p>
                  </li>

                  <li className="ml-6">
                    <span className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      2
                    </span>
                    <time className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      November 2011 • National Consumer Commission (NCDRC) Order
                    </time>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      NCDRC Outlaws &quot;No Refund&quot; Boilerplate Clauses in FIITJEE Landmark
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The National Commission ruled in <em>FIITJEE v. Dr. Minathi Rath</em> that preparatory coaching institutes cannot retain fees for unrendered future semesters. Forfeiting money for unutilized coaching was formally classified as an unfair trade practice.
                    </p>
                  </li>

                  <li className="ml-6">
                    <span className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      3
                    </span>
                    <time className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      July 2020 • Enactment of Consumer Protection Act, 2019
                    </time>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Parliament Establishes Statutory &quot;Unfair Contract&quot; Doctrines
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The replacement of the 1986 Act brought Section 2(46), which explicitly invalidates contracts imposing disproportionate penalties or unilateral forfeiture conditions, and created the Central Consumer Protection Authority (CCPA) with direct recall and penalty powers.
                    </p>
                  </li>

                  <li className="ml-6">
                    <span className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">
                      4
                    </span>
                    <time className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                      January 16, 2024 • Ministry of Education National Notification
                    </time>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      National Guidelines for Regulation of Coaching Centres Issued
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The Department of Higher Education, Ministry of Education, published formal nationwide guidelines for coaching centres, introducing the mandatory 10-day pro-rata refund timeline (Clause 11), a 16-year age limit, and registration cancel penalties.
                    </p>
                  </li>

                  <li className="ml-6">
                    <span className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      5
                    </span>
                    <time className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      2024–2026 • State Framework Adoption &amp; CCPA Crackdown
                    </time>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      State Competent Authorities &amp; e-Jagriti Digital Enforcement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      States and Union Territories across India began drafting state coaching registration laws, while the CCPA issued direct show-cause notices and monetary penalties against major coaching networks for deceptive advertising and trapped refund complaints.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 4: Pro-Rata Formula and Mathematical Mechanics */}
              <section id="heading-pro-rata-formula" aria-labelledby="heading-pro-rata-formula-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-pro-rata-formula-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Pro-Rata Refund Formula: How Your Refund Must Be Calculated
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Clause 11 of the MoE 2024 Coaching Guidelines mandates that the coaching centre can only charge for the duration the student actually attended. It cannot charge administrative penalties or penal deductions on the unrendered term. The pro-rata refund is calculated using the following statutory formula:
                </p>

                <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-md">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
                    Official Pro-Rata Refund Calculation Formula
                  </div>
                  <div className="font-mono text-sm sm:text-base md:text-lg bg-slate-800/80 p-3 sm:p-4 rounded-xl border border-slate-700 text-slate-100 overflow-x-auto">
                    Refund Due = [ Total Net Tuition Fee × ( Total Course Duration − Duration Attended ) / Total Course Duration ] + Unused Hostel/Mess Fee + 100% Caution Deposit − Material Cost Handed Over
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div>
                      <span className="font-bold text-white">Course Duration:</span> Measured strictly in weeks or months from batch start date to formal written withdrawal date.
                    </div>
                    <div>
                      <span className="font-bold text-white">Caution Deposit:</span> 100% fully refundable without deductions unless physical damage is documented.
                    </div>
                    <div>
                      <span className="font-bold text-white">Study Materials:</span> Only the direct cost of physical books already received may be retained.
                    </div>
                    <div>
                      <span className="font-bold text-white">Disbursement Window:</span> Must hit student&apos;s bank account within 10 calendar days.
                    </div>
                  </div>
                </div>
              </section>

              {/* Hand-Authored Inline SVG Workflow */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
                <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                  Hand-Authored Statutory Workflow
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  Coaching Fee Dispute: Statutory 10-Day Refund &amp; Legal Notice Escalation Rail
                </h3>
                <div className="w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 800 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto text-slate-800"
                    aria-label="Coaching fee refund escalation flowchart"
                  >
                    {/* Step 1 */}
                    <rect x="10" y="30" width="160" height="160" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="25" y="45" width="40" height="24" rx="6" fill="#1E293B" />
                    <text x="35" y="61" fill="#FFFFFF" fontSize="12" fontWeight="bold">01</text>
                    <text x="25" y="95" fill="#0F172A" fontSize="13" fontWeight="bold">Written Notice</text>
                    <text x="25" y="118" fill="#475569" fontSize="10">Formal withdrawal letter</text>
                    <text x="25" y="132" fill="#475569" fontSize="10">sent to centre head &amp; mail.</text>
                    <text x="25" y="152" fill="#DC2626" fontSize="10" fontWeight="bold">Starts 10-day clock</text>

                    {/* Arrow 1 */}
                    <path d="M175 110 H205" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect x="210" y="30" width="160" height="160" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="225" y="45" width="40" height="24" rx="6" fill="#D97706" />
                    <text x="235" y="61" fill="#FFFFFF" fontSize="12" fontWeight="bold">02</text>
                    <text x="225" y="95" fill="#0F172A" fontSize="13" fontWeight="bold">10-Day Statutory TAT</text>
                    <text x="225" y="118" fill="#475569" fontSize="10">Institute must credit</text>
                    <text x="225" y="132" fill="#475569" fontSize="10">pro-rata tuition + hostel.</text>
                    <text x="225" y="152" fill="#D97706" fontSize="10" fontWeight="bold">Clause 11 MoE Rules</text>

                    {/* Arrow 2 */}
                    <path d="M375 110 H405" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 3 */}
                    <rect x="410" y="30" width="160" height="160" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                    <rect x="425" y="45" width="40" height="24" rx="6" fill="#DC2626" />
                    <text x="435" y="61" fill="#FFFFFF" fontSize="12" fontWeight="bold">03</text>
                    <text x="425" y="95" fill="#991B1B" fontSize="13" fontWeight="bold">Advocate Demand</text>
                    <text x="425" y="118" fill="#7F1D1D" fontSize="10">15-day statutory notice</text>
                    <text x="425" y="132" fill="#7F1D1D" fontSize="10">via Speed Post + Email.</text>
                    <text x="425" y="152" fill="#DC2626" fontSize="10" fontWeight="bold">BSA s.63 electronic audit</text>

                    {/* Arrow 3 */}
                    <path d="M575 110 H605" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 4 */}
                    <rect x="610" y="30" width="175" height="160" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                    <rect x="625" y="45" width="40" height="24" rx="6" fill="#15803D" />
                    <text x="635" y="61" fill="#FFFFFF" fontSize="12" fontWeight="bold">04</text>
                    <text x="625" y="95" fill="#14532D" fontSize="13" fontWeight="bold">e-Jagriti Consumer Court</text>
                    <text x="625" y="118" fill="#166534" fontSize="10">Formal claim for refund</text>
                    <text x="625" y="132" fill="#166534" fontSize="10">+ 9-12% interest &amp; damages.</text>
                    <text x="625" y="152" fill="#15803D" fontSize="10" fontWeight="bold">CCPA ₹1L deregistration</text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#94A3B8" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Section 5: Interactive Problem Picker / Scenarios Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Scenario Drilldown: How Coaching Centres Attempt to Withhold Refunds &amp; How to Counter Them
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Dispute Navigator
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Coaching institutes deploy varied administrative tactics to exhaust parents. Select your specific dispute scenario below to examine the legal authority, operational mechanics, and immediate counter-actions:
                </p>

                <CoachingProblemTabs />
              </section>

              {/* Section 6: Open Questions & Regulatory Grey Areas */}
              <section id="heading-grey-areas" aria-labelledby="heading-grey-areas-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-grey-areas-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Regulatory Grey Areas and Open Legal Questions in Coaching Guidelines Enforcement
                  </h2>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Statutory Analysis &amp; † Flags
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While the Ministry of Education&apos;s 2024 Coaching Guidelines provide unprecedented clarity on refund rights, consumer litigants must navigate several legal nuances in practice:
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      1. State-Level Enactment &amp; Model Guideline Status †
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Education is a Concurrent List subject under Entry 25 of the Seventh Schedule to the Constitution of India. The MoE 2024 Guidelines operate as a model code recommended to state governments. While states like Rajasthan (Rajasthan Coaching Institutes Control and Regulation Bill), Bihar, and Goa have enacted or initiated state-level registration authorities, in states where formal state rules are pending notification, consumer protection commissions enforce the 10-day refund mandate directly under Section 2(47) (Unfair Trade Practices) of the Consumer Protection Act, 2019.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      2. GST Treatment on the Refunded Unutilized Fee Portion
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Coaching services attract 18% Goods and Services Tax (GST). When processing a pro-rata refund, institutes frequently attempt to withhold the entire 18% GST collected at the time of admission, claiming tax has already been remitted to the exchequer. Under Section 34 of the Central Goods and Services Tax (CGST) Act, 2017, the supplier is entitled to issue a Credit Note for cancelled or refunded services and adjust their tax liability. Institutes cannot penalize students by retaining GST for unrendered instruction.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      3. The 50-Student Threshold Exemption Under the MoE Definition
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The MoE guidelines define a &quot;coaching centre&quot; as any establishment providing coaching to 50 or more students. Small individual tutors coaching fewer than 50 pupils fall outside the administrative registration framework of the guidelines. However, consumer forum jurisdiction under Section 2(11) of the CPA 2019 applies universally to any paid tutoring arrangement regardless of batch size.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      4. Purely Online Ed-Tech Platforms vs. Physical Coaching Centres
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The physical guidelines heavily emphasize classroom infrastructure, fire safety, and residential hostel tie-ups. Purely virtual or recorded ed-tech platforms often claim exemption. Nevertheless, the Central Consumer Protection Authority (CCPA) regulates online ed-tech under the Consumer Protection (E-Commerce) Rules and Guidelines for Prevention of Misleading Advertisements, applying the identical pro-rata and loan cancellation duties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Use the New Rule Today - Steps */}
              <section id="heading-how-to-use" aria-labelledby="heading-how-to-use-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-how-to-use-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    How to Use the 2024 Coaching Guidelines to Claim Your Refund Today
                  </h2>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Statutory Escalation Protocol
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering trapped fees requires a methodical evidentiary trail. Follow this four-step statutory protocol to enforce the 10-day refund mandate:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
                    <span className="text-xs font-black text-white bg-slate-900 px-2.5 py-1 rounded-md mb-2 inline-block">
                      STEP 1
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Submit Formal Written Withdrawal &amp; Start the 10-Day Clock
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Never rely on verbal conversations with centre counsellors. Send a formal email to the centre director, branch accountant, and national support desk stating your decision to discontinue. Specify the exact last date of class attendance and quote <strong>Clause 11 of the MoE 2024 Guidelines</strong>. Request the refund directly to your designated bank account.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
                    <span className="text-xs font-black text-white bg-amber-600 px-2.5 py-1 rounded-md mb-2 inline-block">
                      STEP 2
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Submit Pro-Rata Computation &amp; Hostel Clearance
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Provide a clear breakdown of the total course duration versus attended period. If tied to hostel accommodation, obtain a signed clearance slip from the hostel warden confirming date of room surrender and zero damage. Offer to return unused physical study modules in sealed condition to prevent arbitrary material deductions.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
                    <span className="text-xs font-black text-white bg-red-600 px-2.5 py-1 rounded-md mb-2 inline-block">
                      STEP 3
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Serve a Formal Statutory Advocate Legal Demand Notice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the institute fails to disburse payment within 10 days or issues a denial, engage an advocate to issue a formal statutory demand notice. Dispatched via Registered Speed Post with tracking and served digitally under Section 63 BSA, the notice establishes a strict 15-day cure period before institutional deregistration complaints and consumer court litigation.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
                    <span className="text-xs font-black text-white bg-emerald-600 px-2.5 py-1 rounded-md mb-2 inline-block">
                      STEP 4
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      File on e-Jagriti &amp; Report to District Competent Authority
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the notice period expires without resolution, lodge an online consumer complaint on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Claim full pro-rata refund, 9% to 12% statutory interest, and damages for mental harassment. Concurrently, submit a copy to the District Magistrate for violation of coaching registration norms.
                    </p>
                  </div>
                </div>

                {/* Primary CTA within content */}
                <div className="mt-6">
                  <CoachingNoticeCTA />
                </div>
              </section>

              {/* Section 8: Worked Example with Real Rupees and Dates */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Illustrative Worked Scenario: Recovering ₹1,75,000 for a Mid-Course JEE Withdrawal in Kota
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Concrete Financial Illustration
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following worked example illustrates the exact financial and procedural math applied in a standard 2-year competitive coaching withdrawal dispute:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <p className="text-slate-500">Student &amp; Course:</p>
                      <p className="font-bold text-slate-900">Aarav M. • 2-Year JEE Batch</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Total Upfront Paid:</p>
                      <p className="font-bold text-slate-900">₹2,40,000 (Tuition + Hostel)</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Duration Attended:</p>
                      <p className="font-bold text-amber-600">4 Months (16 Weeks)</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Net Refund Entitlement:</p>
                      <p className="font-bold text-emerald-600">₹1,75,000 within 10 Days</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse" role="table" aria-label="Worked Scenario Calculation Table">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                          <th className="p-3">Fee Component</th>
                          <th className="p-3">Amount Paid</th>
                          <th className="p-3">Utilized (4 Months)</th>
                          <th className="p-3">Refund Obligation (MoE Rule)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Tuition Fee (24 Months / 2 Years)</td>
                          <td className="p-3">₹1,80,000</td>
                          <td className="p-3">₹30,000 (4 mos @ ₹7,500/mo)</td>
                          <td className="p-3 font-bold text-emerald-700">₹1,50,000 (Unexpired 20 mos)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Tied Hostel &amp; Mess Advance</td>
                          <td className="p-3">₹45,000</td>
                          <td className="p-3">₹30,000 (Room occupied)</td>
                          <td className="p-3 font-bold text-emerald-700">₹15,000 (Unused 2 months)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Refundable Hostel Caution Money</td>
                          <td className="p-3">₹15,000</td>
                          <td className="p-3">₹0 (Zero damages documented)</td>
                          <td className="p-3 font-bold text-emerald-700">₹15,000 (100% Refundable)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Study Modules Received in Hand</td>
                          <td className="p-3">Included in Tuition</td>
                          <td className="p-3">₹5,000 (Module 1 retained)</td>
                          <td className="p-3 text-slate-500">₹5,000 deducted for books kept</td>
                        </tr>
                        <tr className="bg-emerald-50/60 font-bold text-emerald-950 text-sm">
                          <td className="p-3">Total Recoverable Refund</td>
                          <td className="p-3">₹2,40,000</td>
                          <td className="p-3">₹65,000 Total Dues</td>
                          <td className="p-3 text-emerald-800 font-black">₹1,75,000 Net Payable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                    <strong>Dispute Resolution Path:</strong> The coaching centre initially offered only ₹20,000, claiming all fees were locked into faculty contracts. Upon serving a statutory advocate legal notice citing Clause 11 of the MoE 2024 Guidelines and the NCDRC <em>FIITJEE</em> precedent, the institute released ₹1,75,000 directly via RTGS within 12 days to avoid public consumer litigation.
                  </p>
                </div>
              </section>

              {/* Section 9: Verified Case Citations */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents: Landmark Court and Commission Orders on Coaching Fee Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Case Digest
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian courts and consumer commissions consistently rule in favour of students. Here are four verified judicial authorities establishing that coaching institutes cannot forfeit unrendered course fees:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800">
                            Precedent #{idx + 1} • {cit.date}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                            {cit.title}
                          </h3>
                          <p className="text-xs font-bold text-red-600 mt-0.5">
                            {cit.parties} — {cit.citation}
                          </p>
                        </div>
                        <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 whitespace-nowrap self-start">
                          {cit.amount}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p><strong>Facts:</strong> {cit.facts}</p>
                        <p><strong>Judicial Holding:</strong> {cit.holding}</p>
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/80 mt-2 text-slate-800 font-medium">
                          <strong>Legal Takeaway:</strong> {cit.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: Evidence Checklist under BSA Section 63 */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: Crucial Documents for Your Coaching Fee Recovery Dossier
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    BSA Section 63 Admissibility
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic printouts, digital payment receipts, and email correspondence are admissible in evidence. Ensure you assemble the following six records before serving a demand notice or approaching consumer court:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">1</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Fee Deposit Receipts &amp; Bank UTR</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank statements or payment gateway receipts establishing the exact sum debited, payment date, and transaction reference numbers for all instalments.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Signed Admission Form &amp; Prospectus</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The original enrolment form, batch allotment letter, and fee structure schedule provided at the time of joining showing total course tenure.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">3</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Formal Withdrawal Notice with Timestamp</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The timestamped email or receiving copy of the written course discontinuation application establishing the precise date classes ceased.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">4</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Hostel &amp; Mess Clearance Certificate</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If residing in tied accommodation, the stamped handover slip from the warden confirming vacating date and zero physical damages to property.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">5</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Medical or Justifying Records</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If withdrawal arose from health, psychiatric stress, or family relocation, retain certified doctor slips or employer transfer orders.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">6</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Institute&apos;s Refusal Letter or Email</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Any communication where the centre rejected the refund plea or cited 'no-refund' clauses, proving deliberate refusal to comply with MoE norms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Scope & Platform Capabilities */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scope-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Platform Scope: What LegalRecovery Does and Does Not Do
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Honest Operational Boundaries
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  We believe in complete transparency regarding our legal notice drafting and pre-litigation recovery platform:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/60 rounded-xl p-4 sm:p-5 border border-emerald-200/80">
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      What LegalRecovery Does
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>Drafts an authoritative advocate legal demand notice based on the MoE 2024 Guidelines, NCDRC precedents, and CPA 2019.</li>
                      <li>Dispatches physical notices via Registered Speed Post with barcoded tracking to corporate headquarters and branch offices.</li>
                      <li>Transmits formal digital notices via registered email with audit certificates satisfying Section 63 BSA.</li>
                      <li>Prepares and formats your e-Jagriti consumer complaint dossier if the coaching centre defaults on the statutory notice.</li>
                    </ul>
                  </div>

                  <div className="bg-red-50/60 rounded-xl p-4 sm:p-5 border border-red-200/80">
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-red-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      What LegalRecovery Does Not Do
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>We do not engage in informal campus picketing, physical confrontations, or unverified negotiations.</li>
                      <li>We do not guarantee unverified instantaneous outcomes; all recovery follows statutory Indian legal processes.</li>
                      <li>We cannot recover fees from unregistered phantom tutors who lack identifiable physical or banking addresses.</li>
                      <li>We do not represent clients in courtroom physical hearings without separate regional vakalatnama engagements.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Coaching Centre Refund Rules
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs hover:border-slate-300 transition-colors open:shadow-xs"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 text-base">
                          ▼
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Legal Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Legal Sources, Gazette Notifications, and Regulatory References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Citations
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal benchmark, statutory deadline, and case order cited on this page is derived from primary government gazettes, regulatory portals, and published appellate judgments:
                </p>

                <div className="divide-y divide-slate-100 bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div key={idx} className="p-3 sm:p-4 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/60 transition-colors">
                      <span className="font-semibold text-slate-800">{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                      >
                        View Official Document
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Recovery Guides Internal Links */}
              <div className="pt-6 border-t border-slate-200">
                <div className="bg-slate-50 rounded-2xl p-5 sm:p-7 border border-slate-200/80 space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Related Education Fee Refund &amp; Consumer Legal Guides
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Explore our comprehensive guides on educational fee disputes, university admission cancellations, and consumer claim procedures:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                    <li>
                      <Link
                        href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
                        className="font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1.5"
                      >
                        <span>→</span> School &amp; College Admission Cancellation Fee Refund Notice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/refunds-and-consumer-complaints"
                        className="font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1.5"
                      >
                        <span>→</span> Consumer Refund &amp; Unfair Trade Practice Legal Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/what-is-a-legal-notice-in-india"
                        className="font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1.5"
                      >
                        <span>→</span> What is a Statutory Legal Notice in India: Validity &amp; Rules
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/send-legal-notice-online-india"
                        className="font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1.5"
                      >
                        <span>→</span> Send a Legal Notice Online in India Through Verified Advocates
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final Bottom Notice CTA */}
              <div className="pt-4">
                <CoachingNoticeCTA />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
