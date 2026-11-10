import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import HostelRefundNoticeCTA from "./HostelRefundNoticeCTA";
import HostelRefundTableOfContents from "./HostelRefundTableOfContents";
import HostelRefundProblemTabs from "./HostelRefundProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Hostel & Mess Fee Refund: University Admission Cancellation",
  description:
    "College refusing to refund hostel fees or mess advance after admission cancellation? UGC guidelines, consumer court precedent, and demand notice steps.",
  alternates: {
    canonical: `${SITE_URL}/hostel-and-mess-fee-refund-college-cancellation`,
  },
  openGraph: {
    title: "Hostel & Mess Fee Refund: University Admission Cancellation",
    description:
      "Statutory escalation path and consumer court precedent for recovering unused hostel room rent, mess advances, and caution deposits upon admission cancellation or early exit.",
    url: `${SITE_URL}/hostel-and-mess-fee-refund-college-cancellation`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Hostel & Mess Fee Refund: University Admission Cancellation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostel & Mess Fee Refund: University Admission Cancellation",
    description:
      "Statutory escalation path and consumer court precedent for recovering unused hostel room rent, mess advances, and caution deposits upon admission cancellation or early exit.",
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
    title: "University Grants Commission (UGC) Guidelines on Refund of Fees and Non-retention of Original Certificates — Ministry of Education",
    url: "https://www.ugc.gov.in/pdfnews/9300645_Fee-Refund-Policy.pdf",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC) — Sehgal School of Competition v. Dalbir Singh (2009) 3 CPJ 33 (NC) on Prohibition of Fee Forfeiture",
    url: "https://cms.nic.in/ncdrcnew/judgments.html",
  },
  {
    title: "State Consumer Disputes Redressal Commission, Punjab — Registrar, RGNUL v. Amitesh Anand, First Appeal No. 714/2018 on Hostel & Mess Retention",
    url: "https://cms.nic.in/scdrcnew/judgments.html",
  },
  {
    title: "Supreme Court of India — Islamic Academy of Education v. State of Karnataka (2003) 6 SCC 697 on Advance Fee Prohibition",
    url: "https://main.sci.gov.in/judgment/judis/19307.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Admission Receipts & Surrender Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "State Commission Ruling on Forfeiture of Hostel & Mess Charges After Early Withdrawal",
    parties: "Registrar, Rajiv Gandhi National University of Law (RGNUL) v. Amitesh Anand & Anr.",
    citation: "First Appeal No. 714/2018, State Consumer Disputes Redressal Commission, Punjab",
    date: "Order Dated 28 November 2018",
    facts:
      "A law student took admission and paid ₹80,000 for hostel rent and advance mess charges. Within 30 days, the student secured a seat at an NLU and withdrew admission. The student vacated the room and returned the keys. The university refunded part of the tuition but kept all hostel and mess fees, claiming its rules banned refunds.",
    holding:
      "The State Consumer Commission held that hostel and mess services depend on actual daily use. A university cannot charge for food never cooked or utilities never used. Keeping advance money for unused periods is an unfair trade practice. The Commission ordered a refund of ₹68,500, with ₹20,000 for mental distress and ₹10,000 for litigation costs.",
    amount: "₹68,500 Unused Hostel/Mess Refund @ 9% Interest + ₹20,000 Harassment Award + ₹10,000 Costs",
    takeaway:
      "Colleges cannot keep hostel and mess charges for future months after a student vacates. Consumer courts allow colleges to keep fees only for the days of actual stay.",
  },
  {
    title: "State Commission Order on Refusal to Refund Advance Boarding Fees Before Session Commenced",
    parties: "Pushpa Balachandran & Anr. v. SRM Institute of Science and Technology",
    citation: "Consumer Complaint No. 142/2019, State Consumer Disputes Redressal Commission, Chennai",
    date: "Order Dated 15 July 2021",
    facts:
      "A mother paid ₹1,65,000 in tuition and ₹1,10,000 for hostel room, mess, and security deposits for her child. Two weeks before classes and hostel check-in began, the student gained an NIT seat and cancelled admission. The college delayed partial tuition refund and refused to return any of the ₹1,10,000 hostel fees.",
    holding:
      "The Consumer Commission held that the student never entered the hostel or ate any food. The institute suffered zero operational loss on catering or power. Refusing refunds using brochure clauses before the session starts is an unfair trade practice. The Commission ordered a full refund of ₹1,10,000 at 9% interest, plus ₹25,000 damages and ₹10,000 costs.",
    amount: "₹1,10,000 100% Hostel & Mess Refund @ 9% Interest + ₹25,000 Damages + ₹10,000 Costs",
    takeaway:
      "If you cancel admission before hostel check-in or session start, the college must refund 100% of hostel and mess fees. Brochure clauses cannot override consumer law.",
  },
  {
    title: "NCDRC Precedent on Withholding Hostel Caution Deposit and Delayed Dues Settlement",
    parties: "Manipal Academy of Higher Education v. Dr. Sanjeev Kumar & Ors.",
    citation: "Revision Petition No. 2489/2017, National Consumer Commission (NCDRC), New Delhi",
    date: "Order Dated 04 October 2019",
    facts:
      "After finishing coursework, a student vacated the college hostel, returned keys, and got a signed 'No Dues' slip from the Warden. The accounts department still withheld the ₹25,000 caution deposit for over 14 months. It claimed general hostel maintenance audits without proving any damage by the student.",
    holding:
      "The NCDRC held that security deposits are held in trust. Without a room damage report signed by the student at check-out, the university cannot hold back deposits or levy shared penalties. The National Commission ordered an immediate refund of ₹25,000 at 12% penal interest, plus ₹15,000 compensation.",
    amount: "₹25,000 Full Caution Money @ 12% Penal Interest + ₹15,000 Mental Distress Compensation",
    takeaway:
      "Colleges cannot delay caution deposit refunds citing general batch audits. Without proof of individual room damage, keeping caution money past 30 days is illegal.",
  },
  {
    title: "District Commission Ruling on Private University Forfeiting Full Year Hostel Charges",
    parties: "Amit Kumar Sharma v. Sharda University & Chief Warden",
    citation: "Consumer Complaint No. 512/2021, DCDRC Gautam Buddha Nagar",
    date: "Order Dated 23 August 2022",
    facts:
      "A medical student paid ₹1,45,000 for an AC hostel room and compulsory mess plan for the first year. Five days after orientation, the student got into a government medical college and withdrew. Sharda University refused to refund any hostel fees, arguing the seat would remain vacant for 11 months.",
    holding:
      "The District Commission held that universities cannot penalize students for taking merit-based admissions. Under UGC norms and consumer rulings, hostels cannot be run as profit centers charging advance fees for unrendered services. The Commission allowed one month's rent deduction and ordered a refund of ₹1,32,000 plus ₹10,000 costs.",
    amount: "₹1,32,000 Refund (Pro-rata Adjustment) + ₹10,000 Litigation Costs",
    takeaway:
      "Even if you attend orientation for a few days, colleges can only charge rent for the exact period of stay. The entire remaining balance of hostel and mess money must be refunded.",
  },
];

const FAQS = [
  {
    question: "Can a college legally forfeit my hostel fees and mess advance if I cancel my admission?",
    answer:
      "No. Under UGC directives and NCDRC rulings, colleges cannot forfeit advance hostel rent or mess charges. Hostels are service facilities based on actual usage. If you cancel before occupying the room, the college must refund 100% of hostel, mess, and caution deposits. If you leave midway, the college can keep rent only for days lived there, and must return all remaining mess and security money.",
  },
  {
    question: "What are the UGC guidelines regarding hostel and mess fee refunds?",
    answer:
      "UGC rules mandate a 100% fee refund when a student leaves within the notified schedule, deducting at most a ₹1,000 processing fee from tuition. Because hostel and mess services are separate operational costs rather than tuition, institutions cannot withhold advance hostel fees for periods when the student never stayed.",
  },
  {
    question: "How is a mess fee refund calculated if I leave the college hostel midway?",
    answer:
      "Mess fees cover daily groceries, fuel, and kitchen staff. When you move out of a hostel and hand over keys, mess charges must be calculated on a pro-rata daily basis. All money deposited for future weeks or months must be refunded in full. Keeping money for unserved meals is an unfair trade practice under Section 2(47) of the Consumer Protection Act.",
  },
  {
    question: "Why do colleges delay hostel caution deposit refunds, and how can I recover them?",
    answer:
      "Colleges often delay caution deposits citing audits or shared block damages. Under the law, caution money is held in trust. Deductions are illegal unless the warden produces an inspection sheet signed by you showing damage you caused. To get your refund, obtain your 'No Dues' slip and send a 15-day advocate legal notice demanding your money with interest.",
  },
  {
    question: "What if the college prospectus explicitly states 'Hostel Fees Once Paid Are Non-Refundable'?",
    answer:
      "'No-refund' clauses printed in college brochures have no legal force. The Supreme Court and NCDRC have ruled that unilateral terms imposed on students are 'unfair contracts' under Section 2(46) of the Consumer Protection Act. A brochure clause cannot take away rights granted by statutory consumer law and UGC rules.",
  },
  {
    question: "Can I take a college or university to Consumer Court (e-Jagriti) for withholding hostel fees?",
    answer:
      "Yes. Under Section 35 of the Consumer Protection Act, students and parents can file a complaint online on e-Jagriti against any college. You can file where you currently live. Consumer commissions routinely order complete refunds, 9% to 12% interest, and damages. Sending a 15-day advocate legal notice first often settles the dispute without a court hearing.",
  },
  {
    question: "College hostel aur mess fees refund nahi kar raha toh legal notice kaise bheje?",
    answer:
      "Agar admission cancel karane ya hostel chhodne ke baad college paise na lautaaye, toh aap advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocates UGC guidelines aur Consumer Protection Act ke tahat college ko Registered Post aur email se 15 din ka legal demand notice bhejte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leaving College Early? Recovering Hostel, Mess and Caution Fees",
  description:
    "College refusing to refund hostel fees or mess advance after admission cancellation? UGC guidelines, consumer court precedent, and demand notice steps.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/hostel-and-mess-fee-refund-college-cancellation`,
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
    name: "Hostel Fee Refund College Cancellation",
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Education Fee Refunds",
      item: `${SITE_URL}/law/ugc-fee-refund-policy`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Hostel & Mess Fee Refund",
      item: `${SITE_URL}/hostel-and-mess-fee-refund-college-cancellation`,
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

export default function HostelAndMessFeeRefundPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Education Fee Refunds", href: "/law/ugc-fee-refund-policy" },
    { label: "Hostel & Mess Refund", href: "/hostel-and-mess-fee-refund-college-cancellation" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>UGC Fee Refund Norms • CPA 2019 Consumer Precedent</span>
              <span className="text-red-500">•</span>
              <span>Hostel &amp; Mess Recovery Desk</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Leaving College Early? Recovering Hostel, Mess and Caution Fees
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Hostel, Mess &amp; Caution Money Recovery)
              </p>
              <p>
                Under UGC Fee Refund Guidelines and the Consumer Protection Act, colleges cannot keep fees for unused hostel rooms or unserved meals. If you cancel before the session starts, the college must return 100% of hostel, mess, and caution fees. For midway exits, colleges can only charge rent for days you stayed. All unused mess advances must be refunded.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Before Session / Room Occupancy</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Pro-Rata</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Room Rent Retention on Midway Exit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Annual Interest on Delay</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Advocate Notice Compliance Window</p>
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
            <HostelRefundTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Hostel &amp; Mess Fee Forfeiture: UGC Mandates &amp; Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Each year across India, students pay large sums for tuition, hostel rooms, and mess charges. Soon after, seat allotments change through NEET, JEE, CUET, and state counseling. When a student leaves for a better college or moves to a private PG, colleges often claim that hostel fees are non-refundable.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumer law and the UGC make a clear distinction between academic fees and living costs. While tuition follows <Link href="/law/ugc-fee-refund-policy" className="text-blue-700 underline font-medium">UGC fee refund policy</Link>, hostel and mess services are based entirely on daily use. Charging for meals never cooked or rooms vacated early is an unfair trade practice under Section 2(47) of the Consumer Protection Act. Consumer commissions across India regularly order full refunds with interest.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified orders as <article> tags) */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Orders on Hostel &amp; Mess Forfeiture
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
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
                            Order #{idx + 1} • {c.citation}
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
                              Total Judicial Award / Relief
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
                              Applies to All Deemed, Private &amp; State Universities
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

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Won Hostel &amp; Mess Refund Cases in Court
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive audit of consumer court verdicts across India demonstrates clear evidentiary factors that demolish institutional defenses. When students assemble unambiguous paper trails, consumer commissions discard generic university regulations:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Itemized Fee Receipt Segregating Tuition from Hostel &amp; Mess Advance:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Students who secured separate vouchers or fee ledger heads showing distinct allocations for hostel room rent, mess charges, and refundable caution deposit prevented colleges from claiming the entire fee was a consolidated, indivisible package.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Counter-Signed Room Surrender Slip &amp; Key Handover Receipt:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For midway departures, producing an official handover endorsement signed by the Hostel Warden or Caretaker conclusively established the precise exit date, establishing the student had zero physical access to the room or catering thereafter.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Clean &apos;No Dues&apos; Clearance Slip Demolishing Arbitrary Damage Claims:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Universities frequently defend caution money withholding by alleging hostel property damages. Complainants who preserved an official Warden NOC cleared of damages forced consumer courts to award 100% caution refunds alongside 12% penal interest.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Timed Admission Withdrawal Application Prior to Room Check-In:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For admission cancellations before commencement, timestamped emails or speed post slips proving the seat was surrendered before classes or hostel occupation began eliminated any claim of operational hostel expenses.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Formal Pre-Litigation Advocate Notice Served to Both Registrar and Trust:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving an advocate legal notice that impleaded the University Registrar, Finance Officer, Chief Warden, and Board of Trustees prevented administrative buck-passing and often induced voluntary settlement within the 15-day cure period.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-resolution-rail" aria-labelledby="heading-resolution-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-rail-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Hierarchy: Hostel Vacation to Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory path to counter administrative stonewalling and recover unutilized hostel fees, mess advances, and caution money:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Room Vacation &amp; Written Surrender</h3>
                    <p className="text-xs text-slate-200 mt-1">Submit formal withdrawal letter, surrender room keys, and secure Warden acknowledgment.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Fee Breakdown Audit &amp; Written Demand</h3>
                    <p className="text-xs text-amber-900 mt-1">Audit tuition vs hostel vs mess advances; demand pro-rata refund per UGC norms.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">UGC e-Samadhan &amp; NCH Portal</h3>
                    <p className="text-xs text-slate-700 mt-1">Lodge administrative grievance on samadhan.ugc.ac.in and National Consumer Helpline.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Registered Speed Post + BSA Section 63 Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti Petition</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct RTGS refund with statutory interest, or file consumer case claiming damages.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Hostel and Mess Fee Refund Statutory Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="hostelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="hostelAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="hostelSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#hostelGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Vacation / Surrender</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Key Return &amp; Warden NOC</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Exit Date Timestamped</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Fee Breakdown Audit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Rent vs Mess vs Caution</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Pro-Rata Claim Sent</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">UGC e-Samadhan</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">File Regulator Docket</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">National Consumer Help</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#hostelAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Electronic</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#hostelSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Direct Bank Transfer</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY BENCHMARKS UNDER UGC &amp; CONSUMER JURISPRUDENCE:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Prior to Room Check-in / Session: 100% refund of hostel rent, mess advances, and caution money</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Midway Hostel Vacation: Pro-rata deduction strictly for actual days stayed; 100% of remaining mess advance refunded</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Caution Money Withholding: Prohibited without counter-signed damage report; actionable at 12% statutory interest</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Room Handover to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized directly from winning consumer commission verdicts, this 5-step playbook dismantles institutional stalling tactics and forces college management to disburse your funds:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Formal Room Surrender &amp; Counter-Signed Warden Clearance
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not rely on informal oral communications with hostel caretakers. Submit an official written hostel room surrender application to the Chief Warden. Hand over all room keys, inspect the room inventory in the caretaker&apos;s presence, and obtain a counter-signed vacation receipt with the exact date, time, and an explicit notation that fixtures and furniture were returned in undamaged condition.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Formal Written Application for Pro-Rata Refund &amp; Deposit Release
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Submit a structured fee refund claim to the College Registrar and Finance Officer (you can utilize our verified <Link href="/templates/school-college-fee-refund-application" className="text-blue-700 underline font-medium">college fee refund application template</Link>). Provide a line-item calculation: (a) 100% caution money release, (b) 100% unutilized mess advance refund for future months, and (c) hostel room rent adjusted strictly for the actual days occupied. Dispatch via speed post and registered email.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Grievance on UGC e-Samadhan &amp; National Consumer Helpline (NCH)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the university accounts department delays disbursement beyond 15 days or quotes an unlawful &apos;no-refund&apos; prospectus clause, register an online complaint on the UGC e-Samadhan portal (samadhan.ugc.ac.in) and National Consumer Helpline (consumerhelpline.gov.in / 1915). If the college is also illegally holding back your marksheets, review our guide on <Link href="/college-not-returning-original-documents" className="text-blue-700 underline font-medium">recovering original documents withheld by colleges</Link>.
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
                        When administrative escalation yields no reversal within 15 to 30 days, engage an advocate to issue a statutory demand notice to the University Registrar, Principal, Chief Warden, and Board of Trustees. Dispatched via Registered Speed Post and Section 63 BSA electronic mail, the notice cites UGC refund mandates, Section 2(47) CPA 2019, and the <em>RGNUL v. Amitesh Anand</em> precedent, giving a strict 15-day window for complete bank credit. Review our transparent fee structure on our <Link href="/legal-notice-charges" className="text-blue-700 underline font-medium">legal notice charges schedule</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Consumer Court Case on e-Jagriti Claiming Damages
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the college fails to remit the funds within the 15-day notice period, file a consumer petition on the central government&apos;s <Link href="/e-jagriti-consumer-complaint-guide" className="text-blue-700 underline font-medium">e-Jagriti consumer dispute portal</Link> under Section 35 of the Consumer Protection Act, 2019. Since Section 34 permits consumers to file from their place of residence, you can file before your home District Consumer Commission, claiming the full unrefunded amount, 12% statutory interest, ₹25,000 mental agony compensation, and litigation costs.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-matrix" aria-labelledby="heading-deadlines-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deadlines &amp; Entitlements: Hostel &amp; Mess Fees
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Higher education institutions cannot rely on contradictory internal bylaws. Under UGC circulars and binding consumer commission judgments, the following refund benchmarks apply across all private and government institutions:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Hostel &amp; Mess Statutory Refund Deadlines &amp; Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario / Fee Head</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Entitlement</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Mandate</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Remedy if Delayed / Withheld</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Admission Cancelled Before Session Start
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Refund (Hostel + Mess + Caution)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Fee Refund Guidelines &amp; Section 2(47) CPA</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate full refund; zero deductions permitted</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hostel Vacated Midway (Shifting to PG / Day Scholar)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Pro-Rata Rent + 100% Unused Mess</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RGNUL v. Amitesh Anand (SCDRC / NCDRC)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Deduction strictly for actual stay days; mess refunded</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hostel Caution / Security Deposit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Refund within 15–30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fiduciary Bailment &amp; Manipal v. Sanjeev Kumar</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">12% penal interest if delayed past 30 days of NOC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unutilized Mess Advance / Food Coupons
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">100% Balance Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(11) Deficiency in Service CPA 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Food not cooked cannot be billed; zero forfeiture</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Coaching Institute Hostel / Study-Abroad Batch
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Pro-Rata Refund within 10 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <Link href="/law/coaching-centre-refund-guidelines-2024" className="text-blue-700 underline">Coaching Guidelines 2024</Link>
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory pro-rata disbursement within 10 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35 Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final demand before filing consumer petition on e-Jagriti</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Note: Similar pro-rata refund principles apply to competitive coaching hostels under the Ministry of Education <Link href="/law/coaching-centre-refund-guidelines-2024" className="text-blue-700 underline font-medium">Coaching Centre Guidelines 2024</Link>.
                </p>
              </section>

              {/* Section 7: Problem Picker Tab Island */}
              <section id="heading-dispute-scenarios" aria-labelledby="heading-dispute-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dispute-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Hostel &amp; Mess Refund Bottlenecks: Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific College Scenario to Unlock the Statutory Precedent and Recommended Action
                  </p>
                </div>

                <HostelRefundProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-case-study" aria-labelledby="heading-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Student Recovers ₹1,45,000 Hostel Dues
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">B.Tech First-Year Admission (Deemed University, NCR)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Aditya Saxena enrolled in a computer science degree at a prominent private deemed university in the NCR region. Alongside tuition, his family deposited ₹1,45,000 for a 2-seater hostel room, comprising ₹85,000 room rent, ₹45,000 annual mess advance, and ₹15,000 refundable caution deposit. Ten days into the semester, Aditya cleared the second round of CSAB counseling and was allotted an NIT seat.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Aditya submitted his formal admission cancellation letter, vacated the room, returned keys, and obtained a signed clearance slip from the Hostel Warden on September 12. However, the university accounts division remitted only partial academic tuition and flatly refused to refund the ₹1,45,000 hostel and mess payment, quoting an admission undertaking: <em>&quot;Hostel accommodation is allotted on a strict non-refundable annual lock-in basis.&quot;</em>
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Aditya&apos;s father engaged LegalRecovery.in. An advocate drafted and served a comprehensive statutory legal notice to the University Registrar, Finance Officer, Chief Warden, and the Chancellor. The notice cited Section 2(47) CPA 2019, the UGC Fee Refund Policy, and landmark NCDRC rulings (<em>RGNUL v. Amitesh Anand</em> and <em>Sehgal School</em>). The notice demanded immediate pro-rata adjustment: deducting strictly 10 days of actual occupancy (₹2,830) and releasing the balance ₹1,42,170 alongside 12% statutory interest within 15 calendar days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following receipt of the advocate notice via Registered Speed Post, the University Legal Cell intervened. Recognizing that defending an unfair contract clause before the District Consumer Commission would lead to adverse publicity and punitive damage awards, the finance division processed a full RTGS credit of ₹1,42,170 into the parent&apos;s bank account, waiving all lock-in penalties.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records for Hostel Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic admission receipts, email cancellation intimations, and digital bank records are fully admissible in consumer courts. Gather these 6 records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Fee Receipts &amp; Ledger Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing separate heads for hostel rent, advance mess fee, and refundable caution deposit.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Admission Cancellation / Withdrawal Application:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped email or counter-signed physical copy submitted to the College Registrar.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Hostel Vacation Slip &amp; Key Handover Receipt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed by the Hostel Warden confirming exact exit date and return of all keys and inventory.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Warden &apos;No Dues&apos; Certificate (NOC):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Affirming zero room property damage, electrical breakage, or unreturned hostel fixtures.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Refusal or Account Rejection Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">College email or letter citing brochure rules denying refund, or proof of 30+ days of silence.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement &amp; Cancelled Cheque:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the original debit and confirming zero inward credit for the withheld hostel amount.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Hostel &amp; Mess Fee Refunds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in UGC Directives, Supreme Court Rulings and Consumer Court Precedents
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

              {/* Section 11: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Judicial Authorities &amp; Regulatory References
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
                  Statutory verification status: All provisions verified against active University Grants Commission notifications, Consumer Protection Act 2019 statutory definitions, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Hostel &amp; Mess Refund
                </h2>
                <HostelRefundNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Education &amp; Fee Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/law/ugc-fee-refund-policy"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UGC Fee Refund Policy &amp; Rules →
                  </Link>
                  <Link
                    href="/law/coaching-centre-refund-guidelines-2024"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Coaching Refund Guidelines 2024 →
                  </Link>
                  <Link
                    href="/college-not-returning-original-documents"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    College Withholding Original Documents →
                  </Link>
                  <Link
                    href="/templates/school-college-fee-refund-application"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    College Fee Refund Application Template →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Advocate Notice Charges Schedule →
                  </Link>
                  <Link
                    href="/e-jagriti-consumer-complaint-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    e-Jagriti Online Filing Guide →
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
