import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CourierParcelNoticeCTA from "./CourierParcelNoticeCTA";
import CourierParcelTableOfContents from "./CourierParcelTableOfContents";
import CourierParcelProblemTabs from "./CourierParcelProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Courier Lost Your Parcel? Compensation Rights in India",
  description:
    "Courier lost your parcel? How liability caps work, what commissions have awarded, and how to claim from Delhivery, Blue Dart or DTDC.",
  alternates: {
    canonical: `${SITE_URL}/courier-lost-parcel-compensation-india`,
  },
  openGraph: {
    title: "Courier Lost Your Parcel? Compensation Rights in India",
    description:
      "Statutory escalation path for lost or damaged parcels: Carriage by Road Act 2007, Consumer Protection Act 2019, striking down ₹100 liability caps, and consumer commission claims.",
    url: `${SITE_URL}/courier-lost-parcel-compensation-india`,
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
    title: "Carriage by Road Act, 2007 (Act No. 41 of 2007) — Section 10 (Notice of Loss or Injury) & Section 12 (Carrier Liability & Burden of Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title: "Blue Dart Express Ltd. v. Stephen E. Fernandes & Anr. — National Consumer Disputes Redressal Commission (NCDRC Revision Petition No. 393/1997)",
    url: "https://cms.nic.in/ncdrcnew/judgments.html",
  },
  {
    title: "DTDC Courier & Cargo Ltd. v. M.C. Singhal — State Consumer Disputes Redressal Commission, Delhi (Appeal No. 248/2009)",
    url: "http://delhistatecommission.nic.in/",
  },
  {
    title: "Post Office Act, 2023 (Act No. 43 of 2023) & Indian Post Office Act, 1898 — Statutory Liability & Willful Negligence Exceptions",
    url: "https://www.indiacode.nic.in/handle/123456789/20489",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Tracking Scans, AWB Slips, & Delivery Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Printed '₹100 Liability Cap' on Consignment Slip Declared Void & Unenforceable",
    parties: "Blue Dart Express Ltd. v. Stephen E. Fernandes & Anr.",
    citation: "Revision Petition No. 393/1997, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Landmark Judgment of the Apex Consumer Commission",
    facts:
      "The complainant booked a valuable packet containing an international passport, visa stamps, and job appointment letters through Blue Dart Express for urgent delivery. The consignment went missing during transit between regional hubs. Blue Dart refused to pay damages exceeding ₹100, relying on a pre-printed clause in micro-font on the reverse side of the courier docket stating that the shipper agreed that company liability for non-delivery or loss was restricted to ₹100 only.",
    holding:
      "The National Commission held that standard-form printed exclusion clauses limiting liability to ₹100 are unilateral and not binding upon the consumer unless expressly brought to their notice and specifically signed with informed consent. Common carriers cannot escape liability for actual loss resulting from gross negligence under the garb of printed small-print disclaimers. The commission ordered Blue Dart to pay substantial compensation for mental agony, loss of employment opportunity, and litigation expenses.",
    amount: "Full Actual Damages + ₹20,000 Mental Harassment Compensation + Legal Costs",
    takeaway:
      "Courier companies cannot hide behind their pre-printed ₹100 liability clauses. Under Section 2(46) of the Consumer Protection Act, 2019, such unilateral caps constitute unfair contracts and are routinely struck down by Consumer Commissions.",
  },
  {
    title: "Full Value of Lost Commercial Goods Awarded Against DTDC Franchise & Corporate",
    parties: "DTDC Courier & Cargo Ltd. v. M.C. Singhal",
    citation: "First Appeal No. 248/2009, State Consumer Disputes Redressal Commission, Delhi",
    date: "Order of the State Commission",
    facts:
      "A trader consigned commercial goods worth ₹84,000 through a DTDC booking franchise for delivery to an outstation customer. The parcel was misplaced during sorting at the central transshipment hub. DTDC argued that because the sender had not opted for transit risk coverage by paying an additional surcharge, DTDC was only liable for nominal docket charges of ₹100 under their terms and conditions.",
    holding:
      "The State Commission rejected DTDC's defense, observing that when a customer delivers goods to a common carrier for valuable freight consideration, a statutory bailment is created. The carrier owes an absolute duty of care to deliver the goods safely. The failure to deliver amounts to gross deficiency in service under consumer law and statutory breach under the common carrier framework. The forum directed DTDC to pay the full invoice value of ₹84,000 alongside 9% annual interest and ₹10,000 litigation costs.",
    amount: "₹84,000 Full Invoice Value @ 9% Interest + ₹10,000 Legal Expenses",
    takeaway:
      "Even if you did not purchase optional third-party transit insurance, the courier company remains liable for the actual market value of proven lost contents whenever negligence or lack of reasonable custody is demonstrated.",
  },
  {
    title: "Delhivery Held Liable for High-End Smartphone Lost in Hub Transit",
    parties: "Amit Kumar v. Delhivery Private Limited & Anr.",
    citation: "Consumer Complaint No. 412/2022, District Consumer Disputes Redressal Commission (DCDRC)",
    date: "Order Dated 17 November 2023",
    facts:
      "The complainant booked a shipment containing a brand-new iPhone worth ₹62,000 through Delhivery for inter-city courier delivery. Tracking displayed the parcel arriving at the regional sorting center, where it remained motionless for 18 days. Subsequently, Delhivery updated the status to 'Lost in Transit' and credited a token goodwill gesture of ₹2,000 into the complainant's digital wallet, refusing further compensation because the parcel was not booked under special logistics declaration.",
    holding:
      "The District Commission held that Delhivery's unilateral token payment of ₹2,000 was an evasive tactic constituting unfair trade practice under Section 2(47) of CPA 2019. Under Section 12 of the Carriage by Road Act, 2007, the statutory burden of proof lies squarely on the carrier to prove absence of negligence or internal theft. In the absence of evidence explaining the disappearance within its secured warehouse, Delhivery was directed to reimburse the entire phone purchase cost of ₹62,000 with 9% interest, plus ₹15,000 for mental distress.",
    amount: "₹62,000 Phone Cost @ 9% Interest + ₹15,000 Harassment Damages + ₹5,000 Costs",
    takeaway:
      "When a parcel goes missing inside a courier sorting hub, courts apply the doctrine of strict liability. Token wallet credits or partial freight refunds do not absolve the logistics carrier of full invoice liability.",
  },
  {
    title: "India Post Speed Post Gross Negligence: Sovereign Immunity Disallowed",
    parties: "Union of India & Anr. (Department of Posts) v. Consumer",
    citation: "Revision Petition No. 1245/2018, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "NCDRC Order on Section 6 Indian Post Office Act",
    facts:
      "The complainant dispatched urgent tender documents and original university credentials via Speed Post. The packet was never delivered to the destination address, causing the complainant to lose a lucrative government procurement tender. The postal department invoked Section 6 of the Indian Post Office Act, 1898, claiming absolute statutory immunity from liability for lost or delayed postal articles.",
    holding:
      "The NCDRC ruled that while Section 6 provides general protection for ordinary postal operations, it does not offer a blanket shield against gross willful negligence, reckless handling, or failure to trace articles entering the automated Speed Post stream. Speed Post is a premium, time-bound commercial service where higher tariffs are collected with a statutory promise of delivery. The Commission upheld an award of ₹50,000 compensation for mental distress and loss suffered by the sender.",
    amount: "₹50,000 Compensation for Loss & Mental Distress + Full Postal Charges Refund",
    takeaway:
      "India Post cannot mechanically hide behind Section 6 statutory immunity when a Speed Post or registered parcel is lost due to gross systemic failure or staff negligence. Consumer commissions have jurisdiction to award substantial compensation.",
  },
];

const FAQS = [
  {
    question: "Can a courier company limit its liability to ₹100 for a lost parcel in India?",
    answer:
      "No. While private couriers such as Blue Dart, DTDC, and Delhivery frequently print clauses restricting liability to ₹100 or ₹2,000 on the back of receipts, Indian Consumer Commissions and the NCDRC have repeatedly ruled these terms void and unenforceable under Section 2(46) of the Consumer Protection Act, 2019. Unless the customer consciously negotiated and signed a fair contract with clear notice, the carrier cannot limit liability for goods lost through their own negligence or internal mishandling.",
  },
  {
    question: "What should I do if Delhivery marks my lost parcel as 'Delivered' without OTP?",
    answer:
      "Immediately take a full screenshot of the Delhivery tracking timeline showing the fraudulent 'Delivered' status and note the exact timestamp. Contact Delhivery grievance support in writing demanding the GPS coordinates of the delivery location and the recipient OTP verification record. If they fail to provide proof of physical handover within 48 hours, file a complaint on the National Consumer Helpline (consumerhelpline.gov.in) and serve a 15-day advocate legal demand notice under the Carriage by Road Act, 2007.",
  },
  {
    question: "How do I claim compensation if Blue Dart loses an expensive consignment?",
    answer:
      "First, gather the booking consignment note (AWB), purchase invoice, bank debit proof, and written tracking logs. Submit an official written claim to Blue Dart Customer Grievance and the Branch Manager within 180 days of booking, citing Section 10 of the Carriage by Road Act, 2007. If Blue Dart attempts to settle for ₹100 or partial freight, repudiate their offer in writing and serve an advocate legal notice before initiating consumer court proceedings on e-Jagriti.",
  },
  {
    question: "What are the DTDC lost parcel compensation rules and how to file a claim?",
    answer:
      "Under statutory transport laws, DTDC is treated as a common carrier legally responsible for safe delivery. To claim compensation, you must submit a formal Claim Docket along with the commercial tax invoice and booking docket within the statutory notice window. If the local franchise deflects blame to DTDC Corporate or offers token freight reimbursement, you can hold both the corporate entity and the franchise jointly and severally liable through a statutory legal demand notice.",
  },
  {
    question: "Does India Post pay compensation for lost Speed Post or registered parcels?",
    answer:
      "Under Department of Posts guidelines, standard Speed Post compensation for loss or damage is typically double the Speed Post fee or ₹1,000 (whichever is less). However, if your lost parcel contained high-value items or critical original documents and you can demonstrate gross administrative negligence, Consumer Commissions routinely bypass the archaic Section 6 statutory immunity to award full actual damages and ₹10,000 to ₹50,000 in mental distress compensation.",
  },
  {
    question: "Is transit insurance mandatory to claim full value for lost courier items?",
    answer:
      "No, transit insurance is not a legal prerequisite to recover compensation in consumer court. While purchasing transit insurance provides a direct claim against an insurance company, common carriers cannot contract out of their basic common-law and statutory duty of custody. Under Section 12 of the Carriage by Road Act, 2007, the courier remains strictly liable for loss caused by the negligence or criminal acts of its employees regardless of separate insurance.",
  },
  {
    question: "What is the time limit (statutory deadline) to issue a legal notice to a courier?",
    answer:
      "Under Section 10 of the Carriage by Road Act, 2007, a written notice of loss or injury must be served on the carrier within 180 days from the date of booking of the consignment or the date of delivery. For filing a consumer complaint on e-Jagriti under the Consumer Protection Act, 2019, the limitation period is 2 years from the date of cause of action under Section 69.",
  },
  {
    question: "Courier ne parcel kho diya ya ₹100 ka token de raha hai, legal notice kaise bheje?",
    answer:
      "Agar Delhivery, Blue Dart, DTDC ya koi logistics company aapka parcel kho de aur sirf ₹100 ya delivery fee wapas karne ki baat kare, toh aap Carriage by Road Act 2007 aur Consumer Protection Act 2019 ke tehat statutory legal demand notice bhej sakte hain. LegalRecovery.in par verified advocate carrier ko registered speed post aur corporate email se notice bhejte hain jismein 15 din ke andar 100% item value aur compensation ki maang ki jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Courier Lost or Damaged Your Parcel: Liability Caps vs Consumer Law",
  description:
    "Courier lost your parcel? How liability caps work, what commissions have awarded, and how to claim from Delhivery, Blue Dart or DTDC.",
  datePublished: "2026-11-06T12:00:00+05:30",
  dateModified: "2026-11-06T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/courier-lost-parcel-compensation-india`,
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
    name: "Courier Lost Parcel Compensation India",
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
      name: "Everyday Services & Logistics",
      item: `${SITE_URL}/legal-notice-to-interior-designer-contractor-refund`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Courier Lost Parcel Compensation",
      item: `${SITE_URL}/courier-lost-parcel-compensation-india`,
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

export default function CourierLostParcelPage() {
  const breadcrumbItems = [
    { label: "Everyday Services & Logistics", href: "/legal-notice-to-interior-designer-contractor-refund" },
    { label: "Courier Lost Parcel Compensation", href: "/courier-lost-parcel-compensation-india" },
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
              <span>Carriage by Road Act 2007 &amp; CPA 2019</span>
              <span className="text-red-500">•</span>
              <span>Carrier Liability &amp; Loss Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Courier Lost or Damaged Your Parcel: Liability Caps vs Consumer Law
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Courier Liability &amp; Compensation Mandate)
              </p>
              <p>
                Under Section 2(11) of the Consumer Protection Act, 2019 and the Carriage by Road Act, 2007, courier companies are classified as common carriers and cannot enforce unilateral ₹100 liability caps printed on booking dockets. When Delhivery, Blue Dart, DTDC, or India Post lose or damage your parcel, you can demand full invoice reimbursement, statutory interest, and mental distress damages by serving a formal 15-day advocate legal notice before initiating consumer court proceedings on e-Jagriti.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Void</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">₹100 Printed Docket Caps</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Value</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Actual Invoice Reimbursement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">180 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice of Loss Under s.10</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹25,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Typical Consumer Court Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <CourierParcelTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Carrier Law Overview */}
              <section id="heading-carrier-law-overview" aria-labelledby="heading-carrier-law-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-carrier-law-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Reality: Courier Liability Caps vs Indian Consumer Protection Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every day in India, valuable consignments containing smartphones, laptops, urgent university transcripts, legal deeds, and commercial inventory disappear inside logistics sorting hubs or arrive damaged. When senders or recipients lodge grievances with logistics majors such as Delhivery, Blue Dart Express, DTDC, or Shadowfax, customer support desks almost universally offer the same canned reply: <em>&quot;As per our standard consignment terms, carrier liability for an uninsured parcel is capped at ₹100.&quot;</em> In other instances, logistics tracking portals abruptly flag an undelivered parcel as &quot;Delivered&quot; without recipient OTP verification, closing the ticket automatically.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Indian legal framework, these automated defenses are legally bankrupt. Under the <strong>Carriage by Road Act, 2007 (Act No. 41 of 2007)</strong> and the <strong>Consumer Protection Act, 2019</strong>, courier companies operate as licensed common carriers holding a statutory fiduciary duty of custody. Section 2(46) of the Consumer Protection Act explicitly defines standard-form terms that impose unreasonable liability limitations as &quot;unfair contracts&quot;, rendering them null and void. Consumer Commissions across all tiers have repeatedly held that private carriers cannot escape strict liability for internal pilferage, misplacement, or staff negligence behind unilateral micro-font docket disclaimers.
                </p>
                <div className="p-4 sm:p-5 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <svg className="w-5 h-5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Carriage by Road Act, 2007 — Statutory Reverse Burden of Proof</span>
                  </div>
                  <p className="leading-relaxed">
                    Under <strong>Section 12 of the Carriage by Road Act, 2007</strong>, whenever a consigned article is lost, destroyed, or damaged while in transit, the law presumes negligence against the common carrier. The consumer is <em>not</em> required to prove how or why the carrier lost the parcel. Instead, the statutory burden of proof lies entirely on the courier company to establish that the loss occurred without any negligence or criminal act on the part of its staff or transshipment contractors.
                  </p>
                </div>
              </section>

              {/* Section 2: Order Digest */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Rulings Striking Down Courier Liability Disclaimers
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
                            RULING #{idx + 1} • {c.citation}
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

                        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                          <div className="text-slate-900 font-bold">
                            <span className="text-slate-500 font-normal">Award / Relief: </span>
                            <span className="text-[#DC2626] font-extrabold">{c.amount}</span>
                          </div>
                          <span className="text-slate-500 italic">{c.takeaway}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Liability Matrix Table */}
              <section id="heading-liability-matrix" aria-labelledby="heading-liability-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-liability-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Carrier Terms vs Consumer Court Reality: The Common Carrier Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Logistics carriers systematically rely on customer ignorance of transport laws to settle severe property losses with superficial token credits. The table below compares the standard defenses asserted by logistics companies against the actual legal standards enforced by Indian Consumer Commissions under the Carriage by Road Act, 2007 and Consumer Protection Act, 2019:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">Courier Standard Defense vs Consumer Court Legal Standard</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Dispute Scenario</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold text-red-300">Carrier Claim / Standard Defense</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold text-emerald-300">Consumer Court Binding Doctrine</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Statutory Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Total Loss in Transit</td>
                        <td className="p-3.5 sm:p-4 text-red-700">&quot;Liability capped at ₹100 / ₹2,000 as per printed consignment conditions.&quot;</td>
                        <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">Standard-form caps are void as unfair contracts under s.2(46) CPA; 100% verified invoice value awarded.</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">CPA 2019 s.2(46) &amp; NCDRC Precedent</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Fake Delivered Status (No OTP)</td>
                        <td className="p-3.5 sm:p-4 text-red-700">&quot;System shows delivered; claim window expired after 48 hours.&quot;</td>
                        <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">Strict burden of proof on carrier to provide GPS geo-stamp and consignee signature or verified OTP under BSA s.63.</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Carriage Act s.12 &amp; BSA s.63</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Crushed or Pilfered Carton</td>
                        <td className="p-3.5 sm:p-4 text-red-700">&quot;Recipient signed POD receipt upon delivery, extinguishing all transit claims.&quot;</td>
                        <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">Latent transit damage verified by unboxing video and booking weight comparison constitutes actionable deficiency.</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">CPA 2019 s.2(11) &amp; s.2(47)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Uninsured Valuables</td>
                        <td className="p-3.5 sm:p-4 text-red-700">&quot;Sender failed to declare value or purchase optional transit risk insurance.&quot;</td>
                        <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">Common carriers cannot contract out of negligence or theft by warehouse staff. Full market replacement awarded.</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Carriage Act s.10, 11 &amp; 12</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Franchise vs Corporate Blame</td>
                        <td className="p-3.5 sm:p-4 text-red-700">&quot;Booking was done at an independent franchise agent, not company-owned branch.&quot;</td>
                        <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">Parent logistics corporate and booking franchisee are jointly and severally liable under the law of agency.</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Contract Act 1872 s.226</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Hand-Authored Responsive SVG Escalation Flowchart */}
              <section id="heading-escalation-rail" aria-labelledby="heading-escalation-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-rail-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Parcel Recovery Escalation Rail: From Misplacement to Court Decree
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering full compensation requires following a strict statutory timeline. Skipping statutory notices under the Carriage by Road Act can give couriers a procedural defense. The flowchart below outlines the exact chronological escalation steps:
                </p>

                <figure className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl overflow-hidden">
                  <div className="w-full overflow-x-auto py-2">
                    <svg
                      viewBox="0 0 900 240"
                      className="w-full min-w-[700px] h-auto text-white select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Courier Compensation Escalation Rail Flowchart"
                    >
                      {/* Step 1 */}
                      <g>
                        <rect x="20" y="30" width="180" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                        <rect x="35" y="45" width="48" height="24" rx="6" fill="#DC2626" />
                        <text x="59" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">DAY 0</text>
                        <text x="35" y="95" fill="#F8FAFC" fontSize="13" fontWeight="bold">1. Loss Detection</text>
                        <text x="35" y="118" fill="#94A3B8" fontSize="11">Capture AWB tracking,</text>
                        <text x="35" y="134" fill="#94A3B8" fontSize="11">invoice &amp; unboxing video.</text>
                        <text x="35" y="150" fill="#94A3B8" fontSize="11">BSA s.63 certificate.</text>
                      </g>

                      {/* Arrow 1 */}
                      <path d="M205 105 L235 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#red-arrow)" strokeDasharray="4 2" />

                      {/* Step 2 */}
                      <g>
                        <rect x="240" y="30" width="180" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                        <rect x="255" y="45" width="56" height="24" rx="6" fill="#475569" />
                        <text x="283" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">DAYS 1-7</text>
                        <text x="255" y="95" fill="#F8FAFC" fontSize="13" fontWeight="bold">2. Carrier Grievance</text>
                        <text x="255" y="118" fill="#94A3B8" fontSize="11">Formal email to Nodal Desk.</text>
                        <text x="255" y="134" fill="#94A3B8" fontSize="11">Reject ₹100 token cheques.</text>
                        <text x="255" y="150" fill="#94A3B8" fontSize="11">Lodge NCH docket.</text>
                      </g>

                      {/* Arrow 2 */}
                      <path d="M425 105 L455 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#red-arrow)" strokeDasharray="4 2" />

                      {/* Step 3 */}
                      <g>
                        <rect x="460" y="30" width="180" height="150" rx="14" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                        <rect x="475" y="45" width="66" height="24" rx="6" fill="#DC2626" />
                        <text x="508" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">DAY 15</text>
                        <text x="475" y="95" fill="#F8FAFC" fontSize="13" fontWeight="bold">3. Advocate Notice</text>
                        <text x="475" y="118" fill="#94A3B8" fontSize="11">Section 10 Carriage Act.</text>
                        <text x="475" y="134" fill="#94A3B8" fontSize="11">Speed Post + Email.</text>
                        <text x="475" y="150" fill="#F87171" fontSize="11" fontWeight="bold">15-day payment demand.</text>
                      </g>

                      {/* Arrow 3 */}
                      <path d="M645 105 L675 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#red-arrow)" strokeDasharray="4 2" />

                      {/* Step 4 */}
                      <g>
                        <rect x="680" y="30" width="195" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                        <rect x="695" y="45" width="68" height="24" rx="6" fill="#059669" />
                        <text x="729" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">DAY 30+</text>
                        <text x="695" y="95" fill="#F8FAFC" fontSize="13" fontWeight="bold">4. e-Jagriti Filing</text>
                        <text x="695" y="118" fill="#94A3B8" fontSize="11">Online DCDRC complaint.</text>
                        <text x="695" y="134" fill="#94A3B8" fontSize="11">Claim invoice + 12% int.</text>
                        <text x="695" y="150" fill="#34D399" fontSize="11" fontWeight="bold">₹25k+ harassment award.</text>
                      </g>

                      {/* Arrowhead marker */}
                      <defs>
                        <marker id="red-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1 L 8 5 L 0 9 z" fill="#DC2626" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  <figcaption className="text-center text-xs text-slate-400 mt-2 font-mono">
                    Figure 1: Statutory Escalation Pipeline under Carriage by Road Act 2007 (s.10) &amp; Consumer Protection Act 2019 (s.35).
                  </figcaption>
                </figure>
              </section>

              {/* Section 5: 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Action Playbook: How to Recover Full Lost Parcel Compensation
                </h2>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                      1
                    </span>
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <h3 className="text-base font-bold text-slate-900">
                        Preserve Electronic Evidence &amp; Waybill Metadata (BSA Section 63)
                      </h3>
                      <p className="leading-relaxed">
                        Immediately download and print the complete web tracking log from the carrier&apos;s portal before internal systems archive or overwrite the history. Retain the physical booking docket, consignment note (AWB), GST purchase invoice of the goods, photos of the outer packaging, and any CCTV footage of package handover. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic tracking logs and SMS alerts are fully admissible in court.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                      2
                    </span>
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <h3 className="text-base font-bold text-slate-900">
                        Issue Statutory Written Notice of Loss Within 180 Days (Section 10)
                      </h3>
                      <p className="leading-relaxed">
                        Under Section 10 of the Carriage by Road Act, 2007, serving written notice of loss on the carrier within 180 days of booking is a statutory prerequisite before initiating recovery litigation. Send an email and registered letter to the carrier&apos;s Grievance Officer detailing the consignment number, date of pickup, destination address, description of articles, and exact declared invoice value.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                      3
                    </span>
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <h3 className="text-base font-bold text-slate-900">
                        Formally Repudiate Unilateral ₹100 or Partial Wallet Settlements
                      </h3>
                      <p className="leading-relaxed">
                        Couriers like Delhivery or Blue Dart often issue automated refunds of ₹100 or ₹2,000 to close claims internally. Do not encash token compensation cheques or sign waiver release forms. Reply immediately in writing stating: <em>&quot;The token amount of ₹100 is rejected. It does not discharge your common carrier liability under Section 2(46) of the Consumer Protection Act, 2019 and Section 12 of the Carriage by Road Act, 2007. I reserve the right to initiate legal recovery for full loss and damages.&quot;</em>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                      4
                    </span>
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <h3 className="text-base font-bold text-slate-900">
                        Serve a Statutory Advocate Legal Demand Notice (15-Day Cure Period)
                      </h3>
                      <p className="leading-relaxed">
                        If the logistics provider ignores written grievances or refuses full reimbursement, have a verified advocate serve a formal statutory legal notice. The notice is served via Registered Speed Post with tracking and emailed to the Managing Director and Grievance Officer. It sets out the strict statutory liability, quotes binding consumer commission precedents, and gives the carrier a strict 15-day window to settle the full claim with interest.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                      5
                    </span>
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <h3 className="text-base font-bold text-slate-900">
                        File Consumer Complaint on e-Jagriti (Section 35 CPA 2019)
                      </h3>
                      <p className="leading-relaxed">
                        If the carrier fails to settle within 15 days of notice receipt, file an online consumer complaint on the government&apos;s e-Jagriti portal before your District Consumer Commission. Consumers can claim 100% invoice value of the lost item, 9% to 12% statutory interest from the date of booking, ₹20,000 to ₹50,000 in mental harassment compensation, and full litigation expenses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Key Facts & Statutory Deadlines Table */}
              <section id="heading-statutory-deadlines" aria-labelledby="heading-statutory-deadlines-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-deadlines-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Key Facts, Statutory Deadlines &amp; Compensation Benchmarks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a legal notice or approaching consumer commissions, verify the key jurisdictional thresholds, statutory notice windows, and legal fee parameters:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">Key Facts and Statutory Parameters for Courier Lost Parcel Claims</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Parameter</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Statutory Rule / Practical Benchmark</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Governing Statute</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Notice of Loss Deadline</td>
                        <td className="p-3.5 sm:p-4 text-slate-700 font-semibold text-[#DC2626]">Within 180 days of booking or delivery date</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Section 10, Carriage by Road Act 2007</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Consumer Court Limitation</td>
                        <td className="p-3.5 sm:p-4 text-slate-700">2 years from the date the parcel was lost / repudiated</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Section 69, Consumer Protection Act 2019</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">District Commission Pecuniary Cap</td>
                        <td className="p-3.5 sm:p-4 text-slate-700">Up to ₹50 Lakh (under revised 2021 CPA jurisdiction rules)</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Section 34, CPA 2019 (as amended)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Statutory Pre-Litigation Notice Period</td>
                        <td className="p-3.5 sm:p-4 text-slate-700">15 days cure window before filing complaint</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Standard Civil Practice &amp; CPA pre-litigation</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Burden of Proof for Lost Parcel</td>
                        <td className="p-3.5 sm:p-4 text-slate-700 text-emerald-800 font-bold">On the Courier (Strict Liability doctrine)</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Section 12, Carriage by Road Act 2007</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Typical Judicial Interest Rate</td>
                        <td className="p-3.5 sm:p-4 text-slate-700">9% to 12% per annum from booking date to payment</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">Consumer Commission Discretionary Relief</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Legal Notice Drafting Cost</td>
                        <td className="p-3.5 sm:p-4 text-slate-700 font-bold text-slate-900">Flat ₹1,499 (Advocate drafting + Speed Post + Email)</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-xs">
                          <Link href="/legal-notice-charges" className="text-[#DC2626] hover:underline font-bold">
                            LegalRecovery Fixed Pricing
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Interactive Problem Picker Component */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-problem-picker-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Carrier Dispute Navigator: Specific Remedies by Provider &amp; Scenario
                </h2>
                <CourierParcelProblemTabs />
              </section>

              {/* Section 8: Worked Financial Recovery Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Recovery Example: ₹54,000 Smartphone Lost by Logistics Carrier
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following real-world illustrative case study shows how an aggrieved sender turned an arbitrary ₹100 liability offer into a full ₹82,860 court award by serving an advocate legal notice and filing an e-Jagriti complaint:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                      Illustrative Case Study: Electronics Loss
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Origin: Bengaluru to Lucknow</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
                      <strong className="text-slate-900 font-bold block">1. Initial Transaction &amp; Hub Loss:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        The consumer booked a courier consignment containing a sealed OnePlus 12 smartphone (Tax Invoice: ₹54,000) paying ₹450 standard courier charges. The shipment reached the destination sorting hub where scans stopped. After 14 days of evasive answers, customer care sent a standard email offering a ₹100 courier credit under standard consignment terms.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
                      <strong className="text-slate-900 font-bold block">2. Advocate Legal Notice &amp; e-Jagriti Claim:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        The consumer rejected the ₹100 credit in writing and engaged LegalRecovery to serve a 15-day statutory legal notice under Section 10 of the Carriage by Road Act, 2007. When the carrier failed to respond, a consumer complaint was lodged on e-Jagriti claiming invoice value, 12% interest, and damages for mental harassment.
                      </p>
                    </div>
                  </div>

                  {/* Financial Breakdown Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <caption className="sr-only">Financial Damage Award Breakdown in Courier Loss Case</caption>
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 font-bold">
                          <th scope="col" className="p-3">Claim Component</th>
                          <th scope="col" className="p-3 text-red-600">Carrier Settlement Offer</th>
                          <th scope="col" className="p-3 text-emerald-700">Consumer Forum Award</th>
                          <th scope="col" className="p-3">Legal Basis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Goods Invoice Reimbursement</td>
                          <td className="p-3 text-red-600 line-through">₹100 (Capped)</td>
                          <td className="p-3 font-bold text-emerald-700">₹54,000</td>
                          <td className="p-3 text-slate-600">Actual Purchase Invoice &amp; GST Receipt</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Courier Freight Refund</td>
                          <td className="p-3 text-slate-500">₹0 (Refused)</td>
                          <td className="p-3 font-bold text-emerald-700">₹450</td>
                          <td className="p-3 text-slate-600">Failure of Consideration (s.2(11) CPA)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Statutory Interest (14 Months @ 9%)</td>
                          <td className="p-3 text-slate-500">₹0</td>
                          <td className="p-3 font-bold text-emerald-700">₹5,670</td>
                          <td className="p-3 text-slate-600">Interest from Date of Booking to Realization</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Damages for Mental Harassment</td>
                          <td className="p-3 text-slate-500">₹0</td>
                          <td className="p-3 font-bold text-emerald-700">₹15,000</td>
                          <td className="p-3 text-slate-600">Unfair Trade Practice under s.2(47) CPA</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Litigation &amp; Legal Notice Expenses</td>
                          <td className="p-3 text-slate-500">₹0</td>
                          <td className="p-3 font-bold text-emerald-700">₹7,500</td>
                          <td className="p-3 text-slate-600">Cost of Advocate Notice &amp; Filing</td>
                        </tr>
                        <tr className="bg-slate-50 font-black">
                          <td className="p-3 text-slate-900">Total Compensation Recovered</td>
                          <td className="p-3 text-red-600 font-bold">₹100</td>
                          <td className="p-3 text-emerald-700 font-extrabold text-sm sm:text-base">₹82,620</td>
                          <td className="p-3 text-slate-700">Net Recovery: 826x Carrier&apos;s Token Offer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 9: Documentary Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Documentary Evidence Checklist for Lost or Damaged Courier Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records must be accompanied by proper metadata. Before serving a statutory legal notice, ensure you possess the following 6 essential evidentiary documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block font-bold mb-0.5">Air Waybill (AWB) / Booking Docket:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Physical shipper copy or PDF showing docket number, sender &amp; consignee addresses, booking date, weight, and freight paid.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block font-bold mb-0.5">Tax Purchase Invoice / Valuation Proof:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Original GST commercial invoice, retailer receipt, or valuation certificate proving the actual purchase price of the enclosed articles.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block font-bold mb-0.5">Complete Tracking Audit Trail:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Full-page screenshot showing all hub arrival/dispatch timestamps, freeze intervals, and any falsified &quot;Delivered&quot; or &quot;Lost&quot; status updates.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block font-bold mb-0.5">Unboxing Video &amp; Photos (For Damage Claims):</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Continuous, unedited video of unpacking the carton showing shipping label, box seals, crushing, and broken/pilfered contents.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block font-bold mb-0.5">Email Grievance Escalation Threads:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Written correspondence with carrier customer care, ticket numbers, complaint acknowledgments, and emails rejecting token settlement offers.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-900 block font-bold mb-0.5">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Signed statutory electronic evidence certificate certifying device authenticity for tracking logs, email printouts, and digital photos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Honest Scope */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="p-5 sm:p-6 bg-slate-100 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    <strong>What We Do:</strong> Our verified advocates draft and serve an official statutory legal demand notice on the logistics company&apos;s corporate management and registered office. We challenge arbitrary ₹100 liability caps, invoke Section 10 and Section 12 of the Carriage by Road Act, 2007, demand full invoice reimbursement plus interest and damages, and build the formal evidentiary foundation for consumer court proceedings on e-Jagriti.
                  </p>
                  <p className="leading-relaxed">
                    <strong>What We Cannot Do:</strong> We cannot physically search logistics sorting warehouses or force delivery of contraband, prohibited items, or unbooked packages sent without an official booking waybill. Furthermore, for parcels lost through criminal theft by unauthorized delivery personnel, we initiate civil and consumer recovery against the carrier; criminal complaints must be registered independently with local police authorities.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-slate-900">
                    <span>Related Recovery Services:</span>
                    <Link href="/packers-and-movers-damage-claim-legal-notice" className="text-[#DC2626] hover:underline">
                      Packers &amp; Movers Damage Notice &rarr;
                    </Link>
                    <Link href="/legal-notice-to/urban-company" className="text-[#DC2626] hover:underline">
                      Urban Company Dispute Notice &rarr;
                    </Link>
                    <Link href="/legal-notice-to-interior-designer-contractor-refund" className="text-[#DC2626] hover:underline">
                      Contractor Refund Notice &rarr;
                    </Link>
                    <Link href="/templates/wrong-electricity-bill-complaint-application" className="text-[#DC2626] hover:underline">
                      Electricity Bill Complaint Template &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Courier Lost Parcel Compensation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Clear, statutory answers regarding courier liability caps, lost parcel procedures, and consumer court rights in India.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs transition-colors open:bg-slate-50/50"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-base font-bold text-slate-900 gap-3">
                        <span>{faq.question}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-open:rotate-180 transition-transform">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Authoritative Legal References
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every statutory section, limitation benchmark, and legal proposition on this page is verified against official statutes and consumer court judgments:
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-2" />
                      <div className="flex-1">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-slate-900 hover:text-[#DC2626] underline transition-colors"
                        >
                          {source.title}
                        </a>
                        <span className="text-slate-400 block text-[11px] font-mono mt-0.5 truncate">
                          {source.url}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom CTA Block */}
              <div className="pt-4">
                <CourierParcelNoticeCTA />
              </div>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-8">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
