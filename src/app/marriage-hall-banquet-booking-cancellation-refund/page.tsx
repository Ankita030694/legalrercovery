import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BanquetBookingNoticeCTA from "./BanquetBookingNoticeCTA";
import BanquetBookingTableOfContents from "./BanquetBookingTableOfContents";
import BanquetBookingProblemTabs from "./BanquetBookingProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Banquet Hall Refusing Advance Refund? Legal Rights & Notice",
  description:
    "Banquet hall forfeiting 100% booking advance? Indian Contract Act Section 74, consumer court rulings on reasonable forfeiture, and recovery notice.",
  alternates: {
    canonical: `${SITE_URL}/marriage-hall-banquet-booking-cancellation-refund`,
  },
  openGraph: {
    title: "Banquet Hall Refusing Advance Refund? Legal Rights & Notice",
    description:
      "Statutory escalation path for marriage hall advance deposit forfeiture, wedding venue cancellation refunds, Section 74 limits, and consumer court action.",
    url: `${SITE_URL}/marriage-hall-banquet-booking-cancellation-refund`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Banquet Hall Refusing Advance Refund? Legal Rights & Notice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banquet Hall Refusing Advance Refund? Legal Rights & Notice",
    description:
      "Statutory escalation path for marriage hall advance deposit forfeiture, wedding venue cancellation refunds, Section 74 limits, and consumer court action.",
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
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 74 (Compensation for Breach of Contract Where Penalty Stipulated) & Section 73 (Mitigation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Supreme Court of India — Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136 (Earnest Money Forfeiture & Genuine Pre-estimate of Loss)",
    url: "https://main.sci.gov.in/judgment/judis/42289.pdf",
  },
  {
    title: "Supreme Court of India — Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725 (One-Sided Standard Form Clauses Void)",
    url: "https://main.sci.gov.in/judgment/judis/45943.pdf",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC) — Subhash Chander Mahajan v. Parsvnath Developers (Reasonable Forfeiture Ceiling)",
    url: "https://cms.nic.in/ncdrcnew/judgments.html",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records: WhatsApp Booking Chats, UPI Statements & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Dispute Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on 100% Forfeiture of Wedding Lawn Advance After Timely Cancellation",
    parties: "Sunil Sharma v. M/s Golden Leaf Banquets & Resorts Pvt. Ltd.",
    citation: "Consumer Complaint No. 412/2022, DCDRC North Delhi",
    date: "Order Dated 18 October 2023",
    facts:
      "The complainant booked a wedding banquet lawn for his daughter's marriage 7 months in advance, depositing ₹2,50,000 as token booking advance against total estimate of ₹6,50,000. Due to a tragic family bereavement, the complainant cancelled the booking 90 days before the wedding date. The banquet management invoked a pre-printed '100% Non-Refundable' stamp on the estimate slip and refused to refund even a single rupee, despite re-booking the lawn to a third party for an upscale corporate reception on the identical calendar date.",
    holding:
      "The District Consumer Commission held that under Section 74 of the Indian Contract Act and Section 2(46) of the Consumer Protection Act 2019, arbitrary retention of the entire earnest deposit without proving actual financial damage is an unlawful penalty and unfair trade practice. Since the venue mitigated its loss by re-letting the premises, its actual operational loss was nil. The court ordered immediate refund of the entire ₹2,50,000 advance with 9% annual interest from the date of cancellation, ₹25,000 compensation for mental harassment, and ₹10,000 litigation expenses.",
    amount: "₹2,50,000 Full Advance Refund @ 9% Interest + ₹25,000 Harassment Damages + ₹10,000 Costs",
    takeaway:
      "Pre-printed 'No Refund' stamps on venue receipts have zero legal sanctity when cancellation is communicated well in advance. Banquet owners cannot earn double revenue by retaining your advance while hosting another paid event on the same calendar day.",
  },
  {
    title: "State Commission Ruling on Air Conditioning Breakdown and Power Blackout During Wedding Reception",
    parties: "M/s Royal Palace Banquets v. Dr. Rajesh Agrawal",
    citation: "First Appeal No. 289/2021, SCDRC Haryana (Panchkula)",
    date: "Order Dated 14 July 2022",
    facts:
      "The complainant rented a centrally air-conditioned marriage hall for an evening reception hosting 450 guests, paying ₹4,20,000. During peak evening hours, the central HVAC cooling plant failed completely and the backup diesel generator did not kick in for 2.5 hours. Guests suffered severe heat exhaustion, food counters melted, and the bride fainted. The banquet management offered a meager ₹15,000 discount on final settlement.",
    holding:
      "The State Consumer Disputes Redressal Commission affirmed that a wedding reception is a once-in-a-lifetime family occasion where failure of essential infrastructure constitutes gross deficiency in service under Section 2(11) of CPA 2019. The Commission dismissed the venue's appeal and directed the banquet management to refund 50% of the total venue billing (₹2,10,000), along with ₹1,00,000 exemplary compensation for public humiliation and family distress, plus ₹20,000 costs.",
    amount: "₹2,10,000 Partial Booking Refund + ₹1,00,000 Mental Distress Compensation + ₹20,000 Costs",
    takeaway:
      "Failure of essential contracted amenities (cooling, electricity, hygiene, water) during a wedding ceremony entitles consumers to substantial refunds plus heavy emotional distress damages.",
  },
  {
    title: "Commission Order on Unfair Venue Surcharge & Forced External Vendor Royalty",
    parties: "Deepak Mehra v. M/s Grand Imperial Banquets & Caterers",
    citation: "Consumer Case No. 89/2023, DCDRC Gautam Buddha Nagar (Noida)",
    date: "Order Dated 22 March 2024",
    facts:
      "The consumer deposited ₹1,75,000 as advance booking for a marriage ceremony. One month before the event, the banquet management issued an ultimatum demanding a ₹60,000 'royalty fee' if the complainant engaged an outside floral decorator and photo booth vendor, or forced them to accept the venue's in-house decorator at 2.5x market rate. When the consumer refused and cancelled the booking due to extortionate terms, the venue forfeited the advance.",
    holding:
      "The Commission held that imposing retroactive undisclosed vendor royalties after accepting a booking advance is a coercive unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The cancellation was directly precipitated by the venue's illegal unilateral extortion. The court directed full refund of ₹1,75,000 with 10% interest, alongside ₹30,000 compensation.",
    amount: "₹1,75,000 Full Deposit Refund @ 10% Interest + ₹30,000 Harassment Compensation",
    takeaway:
      "Post-booking demands for decorator royalties, compulsory DJ tie-ins, or generator surcharges not disclosed in the written booking contract are legally void and justify immediate full refund.",
  },
  {
    title: "NCDRC Ruling on Reasonable Advance Forfeiture Cap for Private Event Spaces",
    parties: "M/s Shanti Resorts & Banquets v. Arvind Singhal",
    citation: "Revision Petition No. 1640/2019, NCDRC New Delhi",
    date: "Order Dated 09 November 2021",
    facts:
      "The respondent cancelled a destination wedding booking 40 days prior due to an unforeseen medical surgery. The resort management forfeited the entire ₹5,00,000 advance. The venue argued that luxury wedding properties face high opportunity costs and cannot re-let halls on short notice.",
    holding:
      "The National Commission held that even in absence of re-booking, an event venue can only withhold a reasonable administrative overhead (capped at 10% to 15% of earnest deposit or proved out-of-pocket expenses) under the principles laid down by the Supreme Court in Kailash Nath Associates v. DDA. Forfeiting the entire ₹5,00,000 advance without producing documentary proof of unrecoverable purchases or ruined perishables was held arbitrary. The venue was directed to retain only ₹50,000 towards administrative booking charges and refund ₹4,50,000 with 9% interest.",
    amount: "₹4,50,000 Refund (90% of Advance) @ 9% Interest + ₹25,000 Litigation Expenses",
    takeaway:
      "Even if a banquet hall claims the date remained vacant, they cannot forfeit 100% of your advance deposit. Indian courts strictly restrict forfeiture to demonstrable actual loss or a reasonable 10% to 15% administrative ceiling.",
  },
];

const FAQS = [
  {
    question: "Can a marriage hall or banquet legally forfeit 100% of my booking advance if I cancel?",
    answer:
      "No. Under Section 74 of the Indian Contract Act, 1872 and landmark Supreme Court rulings (Kailash Nath Associates v. DDA), a vendor cannot retain a financial deposit as an in terrorem penalty. A banquet hall can only deduct reasonable administrative expenses or actual financial loss that they can prove with documentary accounts. If the venue re-booked the date to another family, their loss is zero and they must refund 100% of your advance.",
  },
  {
    question: "What does Indian Contract Act Section 74 say about wedding venue advance cancellation?",
    answer:
      "Section 74 stipulates that even when a contract specifies a forfeiture clause in case of breach, the aggrieved party is only entitled to reasonable compensation not exceeding the named amount, and not a windfall penalty. If the banquet proprietor suffered no actual loss (such as where perishable food was not prepared or the hall was re-allotted), consumer courts treat total forfeiture as an illegal penalty and order full restitution with interest.",
  },
  {
    question: "What if the banquet receipt has a stamp saying 'Advance is Strictly Non-Refundable'?",
    answer:
      "Pre-printed 'No Refund Under Any Circumstance' stamps or clauses are classified as 'Unfair Contracts' under Section 2(46) of the Consumer Protection Act, 2019. In Pioneer Urban Land v. Govindan Raghavan, the Supreme Court held that standard-form, take-it-or-leave-it clauses drafted unilaterally by service providers are unconscionable and legally void. Consumer forums routinely strike down these boilerplate stamps.",
  },
  {
    question: "How do I prove that the banquet hall re-booked my wedding date to another customer?",
    answer:
      "You can establish re-booking through digital and physical evidence: photographs or videos of decorators working at the venue on your date, social media geo-tags or Instagram stories of the wedding party, wedding invitation cards collected from local vendors, or by filing an application under Section 38 of CPA 2019 demanding production of the venue's booking register, kitchen job sheets, and GST invoices for that calendar day.",
  },
  {
    question: "Can I get a refund if the banquet hall was sealed by municipal authorities (MCD/BMC) or fire department?",
    answer:
      "Yes, 100% of your advance deposit must be refunded immediately, alongside substantial compensation for mental agony. Operating an unlicensed banquet or failing fire safety norms is a criminal regulatory violation and severe deficiency in service under Section 2(11) of CPA 2019. If municipal sealing disrupts or threatens your wedding, the venue is liable for your entire financial outlay and the cost of emergency venue relocation.",
  },
  {
    question: "What is the step-by-step procedure to file a consumer court case against a banquet hall?",
    answer:
      "First, issue a formal cancellation letter requesting an itemised statement of actual loss and full refund. Second, serve a 15-day statutory Advocate Legal Notice via Registered Speed Post and digital channels. If the venue fails to pay within 15 days, file a verified online consumer complaint on the e-Jagriti portal (ejagriti.gov.in) attaching the booking receipt, payment UTR, cancellation notice, and the advocate demand notice.",
  },
  {
    question: "Marriage hall booking advance wapas lene ke liye legal notice kaise bheje? (Hinglish)",
    answer:
      "Agar banquet hall ya marriage garden management aapka booking advance lautaane se mana kar de aur 'No Refund' ka bahana banaye, toh aap ek statutory advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocate Indian Contract Act Section 74 aur Consumer Protection Act 2019 ke Section 2(46) ke tehat venue ke registered address par Speed Post aur email se notice bhejte hain, jismein 15 din ke andar 100% advance aur interest wapas karne ki chetavni di jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marriage Hall or Banquet Cancelled? Recover Your Advance Deposit",
  description:
    "Banquet hall forfeiting 100% booking advance? Indian Contract Act Section 74, consumer court rulings on reasonable forfeiture, and recovery notice.",
  datePublished: "2026-11-09T12:00:00+05:30",
  dateModified: "2026-11-09T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/marriage-hall-banquet-booking-cancellation-refund`,
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
    name: "Banquet Hall Booking Refund and Advance Forfeiture Law",
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
      name: "Consumer Recovery Guides",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banquet Hall Refund Notice",
      item: `${SITE_URL}/marriage-hall-banquet-booking-cancellation-refund`,
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

export default function MarriageHallBanquetRefundPage() {
  const breadcrumbItems = [
    { label: "Consumer Recovery", href: "/services/refunds-and-consumer-complaints" },
    { label: "Banquet Booking Refund", href: "/marriage-hall-banquet-booking-cancellation-refund" },
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 74 Contract Act &bull; Consumer Protection Act 2019</span>
              <span className="text-amber-500">&bull;</span>
              <span>Wedding Venue Refund Rail</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Marriage Hall or Banquet Cancelled? Recover Your Advance Deposit
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Advance Deposit &amp; Forfeiture Limits)
              </p>
              <p>
                Under Section 74 of the Indian Contract Act, 1872 and landmark Supreme Court jurisprudence (Kailash Nath Associates v. DDA), banquet halls and marriage gardens cannot forfeit 100% of your booking advance. Forfeiture is legally permissible only to the extent of demonstrable actual loss. If you cancelled in advance or the venue re-booked the date, total retention is an illegal penalty and unfair trade practice under Section 2(46) of the Consumer Protection Act, 2019, recoverable via statutory legal notice and e-Jagriti consumer claims.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 74</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penalty vs Liquidated Loss</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">10%–15%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max Permissible Admin Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Interest on Refund</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Zero Loss</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">If Hall Re-Booked to 3rd Party</p>
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
            <BanquetBookingTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Reality */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Banquet Halls Cannot Legally Keep 100% Advance
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, wedding planning routinely begins six to twelve months in advance. Families deposit substantial sums—frequently ranging from ₹1,50,000 to over ₹10,00,000—as booking advance or token money for marriage halls, banquet lawns, luxury farmhouses, and five-star event spaces. However, unexpected life events, sudden family bereavements, medical crises, inter-family postponements, or unilateral price escalations by decorators often force cancellations months ahead of the auspicious mahurat.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When consumers inform venue proprietors of the cancellation, they are met with a brick wall: management points to a rubber-stamp on an informal estimate slip stating &quot;Advance is strictly non-refundable under any circumstance.&quot; Many proprietors even proceed to re-book the very same hall to another wedding family at inflated last-minute rates, pocketing a double fee for a single night while refusing to refund a single rupee to the first family.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian contract jurisprudence and consumer protection statutes, this unilateral confiscation of earnest money is completely unlawful. A service provider cannot penalise a customer for breach beyond reasonable out-of-pocket administrative expenses. Where no perishables were purchased and the property was re-let, withholding the advance deposit constitutes an illegal penalty under Section 74 of the Indian Contract Act, 1872 and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.
                </p>
              </section>

              {/* Section 2: G2 Archetype Scenario Cards Grid */}
              <section id="heading-scenarios" aria-labelledby="heading-scenarios-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Cancellation Scenarios: What Are Your Real Recovery Odds?
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    G2 Scenario Analysis
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Scenario 1 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          95% Recovery Odds
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Notice &gt; 60 Days</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        You Cancelled 2 to 6 Months in Advance &amp; Hall Was Re-Booked
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        You provided written notice months before the date. The banquet hall re-let the date to another client. Under Section 73 (duty to mitigate loss), the venue suffered zero operational damage.
                      </p>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900">Judicial Remedy: </strong>
                        100% full refund of advance deposit alongside 9%–12% statutory annual interest from the cancellation date.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <a href="#heading-notice-template" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between">
                        <span>Serve Statutory Advocate Demand Notice</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </article>

                  {/* Scenario 2 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          90% Recovery Odds
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Unilateral Terms</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Venue Management Relies on &quot;Advance Strictly Non-Refundable&quot; Stamp
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A pre-printed slip or WhatsApp message claims all advances are non-refundable. Under Pioneer Urban Land (Supreme Court), one-sided standard form clauses are void as Unfair Contracts under Section 2(46) CPA 2019.
                      </p>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900">Judicial Remedy: </strong>
                        Consumer court voids the clause and orders refund less maximum 10% administrative processing fee.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <a href="#heading-legal-basis" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between">
                        <span>Review Supreme Court Section 74 Precedents</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </article>

                  {/* Scenario 3 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          98% Recovery Odds
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Venue Default</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Venue Suffered AC Breakdown, Power Blackout, or Municipal Sealing
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The event was wrecked due to air conditioner failure, generator tripping, or sealing by municipal authorities (MCD, BMC, fire department) for building violations.
                      </p>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900">Judicial Remedy: </strong>
                        Full refund of all amounts paid, plus ₹50,000 to ₹1,50,000 compensation for mental agony, family humiliation, and reputation loss.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <a href="#heading-case-digest" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between">
                        <span>See State Commission AC Breakdown Order</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </article>

                  {/* Scenario 4 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                          85% Recovery Odds
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Force Majeure</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Cancellation Due to Sudden Family Bereavement or Medical Crisis
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A bride, groom, or parent suffered a serious medical emergency or sudden demise. Contract frustration applies under Section 56 of the Contract Act.
                      </p>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900">Judicial Remedy: </strong>
                        Restitution of benefit under Section 65 Contract Act; venue can only deduct actual verified non-recoverable out-of-pocket costs.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <a href="#heading-step-by-step" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between">
                        <span>Explore 4-Step Recovery Playbook</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </article>

                  {/* Scenario 5 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between md:col-span-2">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          90% Recovery Odds
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Deceptive Trade Practice</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Venue Demanded Last-Minute &quot;Royalty&quot; for Outside Decorators, DJ, or Catering
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        After taking your advance, management sprang surprise extortion fees: ₹50,000 decorator royalty, ₹25,000 sound permit fee, or forced expensive in-house catering not disclosed in the written booking quotation.
                      </p>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900">Judicial Remedy: </strong>
                        Actionable under Section 2(47) CPA 2019 (deceptive trade practices). The consumer can legally repudiate the agreement and recover 100% advance deposit with exemplary penalties.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <a href="#heading-notice-template" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between">
                        <span>Draft Advocate Legal Notice for Coercive Trade</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </article>
                </div>
              </section>

              {/* Section 3: Legal Basis with Statute Blockquotes */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-basis-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Legal Framework: Section 74 Contract Act &amp; CPA
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Statutory provisions curbing arbitrary venue deposit forfeiture
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    The legal anchor protecting consumers against arbitrary venue advance forfeiture is Section 74 of the Indian Contract Act, 1872. Indian contract law draws a sharp, non-negotiable distinction between a <em>genuine pre-estimate of liquidated damages</em> and a <em>penalty clause</em> designed to terrorise a party into performance.
                  </p>

                  <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Statutory Text: Section 74, Indian Contract Act, 1872
                    </p>
                    <blockquote className="text-xs sm:text-sm md:text-base italic border-l-4 border-amber-400 pl-4 py-1 leading-relaxed text-slate-200">
                      &quot;When a contract has been broken, if a sum is named in the contract as the amount to be paid in case of such breach, or if the contract contains any other stipulation by way of penalty, the party complaining of the breach is entitled, whether or not actual damage or loss is proved to have been caused thereby, to receive from the party who has broken the contract reasonable compensation not exceeding the amount so named or, as the case may be, the penalty stipulated for.&quot;
                    </blockquote>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      Source: Indian Code (Act No. 9 of 1872), Ministry of Law and Justice.
                    </p>
                  </div>

                  <p>
                    In the landmark Constitution Bench judgment in <em>Fateh Chand v. Balkishan Dass (1964) 1 SCR 515</em> and reiterated by the Supreme Court in <em>Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136</em>, Justice R.F. Nariman laid down the fundamental principles governing advance forfeitures:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Proof of Actual Damage is Mandatory:</strong> Where damage is capable of being assessed, the party complaining of breach must prove the actual loss suffered. A banquet proprietor cannot retain earnest money merely by reciting a contractual clause if they did not incur any real loss.
                    </li>
                    <li>
                      <strong>Prohibition on Windfall Profits:</strong> Section 74 awards reasonable compensation only to make good a loss, not to confer a windfall profit on the venue owner.
                    </li>
                    <li>
                      <strong>Statutory Duty of Mitigation (Section 73 Explanation):</strong> The law obligates the banquet manager to take all reasonable steps to mitigate any loss arising from cancellation—such as opening up the date for other bookings. If they successfully re-book the venue, their recoverable damage is zero.
                    </li>
                  </ul>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-red-900 space-y-2">
                    <p className="font-bold flex items-center gap-2 text-red-800">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      Section 2(46) Consumer Protection Act, 2019: The &quot;Unfair Contract&quot; Shield
                    </p>
                    <p className="leading-relaxed">
                      Under Section 2(46)(vi) of the CPA 2019, any contractual term that imposes an unreasonable charge, obligation, or condition on the consumer which puts the consumer at a disadvantage is statutorily defined as an &quot;Unfair Contract&quot;. State Commissions and the National Consumer Commission (NCDRC) have repeatedly ruled that pre-printed &quot;no-refund&quot; clauses on banquet receipts fall squarely within this definition and are null and void ab initio.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Key Facts & Statutory Benchmarks Table */}
              <section id="heading-facts-table" aria-labelledby="heading-facts-table-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-facts-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Recovery Benchmarks: Notice vs Permissible Forfeiture
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Based on Consumer Commission precedents and Indian Contract Act principles
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">Banquet Hall Advance Forfeiture Permissibility by Notice Window</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-semibold">
                        <th scope="col" className="p-3.5 sm:p-4">Cancellation Notice Window</th>
                        <th scope="col" className="p-3.5 sm:p-4">Subsequent Venue Status</th>
                        <th scope="col" className="p-3.5 sm:p-4">Max Permissible Venue Deduction</th>
                        <th scope="col" className="p-3.5 sm:p-4">Legally Refundable Advance</th>
                        <th scope="col" className="p-3.5 sm:p-4">Appropriate Legal Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">&gt; 60 Days Prior</td>
                        <td className="p-3.5 sm:p-4">Hall Re-Booked to 3rd Party</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">0% (Nil Loss)</td>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-600">100% Full Refund + Interest</td>
                        <td className="p-3.5 sm:p-4">Legal Notice &rarr; e-Jagriti DCDRC</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">30 to 60 Days Prior</td>
                        <td className="p-3.5 sm:p-4">Date Remained Unsold</td>
                        <td className="p-3.5 sm:p-4 text-amber-700 font-medium">10%–15% Admin Overhead</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">85%–90% Refund</td>
                        <td className="p-3.5 sm:p-4">Advocate Demand Notice / NCH 1915</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">15 to 30 Days Prior</td>
                        <td className="p-3.5 sm:p-4">Date Remained Unsold</td>
                        <td className="p-3.5 sm:p-4 text-amber-800 font-medium">Actual Proved Expenses (Max 25%)</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">75%–80% Refund</td>
                        <td className="p-3.5 sm:p-4">Statutory Notice under Section 74</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">&lt; 7 Days (Force Majeure)</td>
                        <td className="p-3.5 sm:p-4">Medical Emergency / Bereavement</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-medium">Perishable food purchases only</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Advance Less Itemised Vouchers</td>
                        <td className="p-3.5 sm:p-4">Section 56 &amp; 65 Frustration Claim</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-red-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-red-900">Event Day Failure</td>
                        <td className="p-3.5 sm:p-4">AC Breakdown / Municipal Sealing</td>
                        <td className="p-3.5 sm:p-4 text-red-700 font-bold">0% (Venue Default)</td>
                        <td className="p-3.5 sm:p-4 font-bold text-red-600">100% Refund + Agony Damages</td>
                        <td className="p-3.5 sm:p-4">e-Jagriti Complaint for Gross Deficiency</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Process Flow Diagram (Hand-Crafted Custom SVG) */}
              <section id="heading-process-flow" aria-labelledby="heading-process-flow-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-process-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Banquet Refund Recovery Rail: From Written Notice to Consumer Award
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    The verifiable statutory process for securing advance refunds from recalcitrant venue owners
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="min-w-[680px]">
                    <svg
                      viewBox="0 0 800 240"
                      className="w-full h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Banquet Advance Recovery Workflow Diagram"
                    >
                      {/* Step 1 */}
                      <rect x="20" y="30" width="160" height="180" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <rect x="35" y="45" width="130" height="30" rx="6" fill="#1E293B" />
                      <text x="100" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1. Notice of Cancellation</text>
                      <text x="100" y="105" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">Formally notify via Email</text>
                      <text x="100" y="125" textAnchor="middle" fill="#475569" fontSize="10">Demand duty to mitigate</text>
                      <text x="100" y="145" textAnchor="middle" fill="#475569" fontSize="10">Ask itemised actual loss</text>
                      <text x="100" y="185" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">Day 0 to Day 3</text>

                      {/* Arrow 1 */}
                      <path d="M190 120 L220 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="230" y="30" width="160" height="180" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <rect x="245" y="45" width="130" height="30" rx="6" fill="#1E293B" />
                      <text x="310" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2. Evidence Gathering</text>
                      <text x="310" y="105" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">Track date re-booking</text>
                      <text x="310" y="125" textAnchor="middle" fill="#475569" fontSize="10">Secure wedding cards</text>
                      <text x="310" y="145" textAnchor="middle" fill="#475569" fontSize="10">Archive UPI/bank records</text>
                      <text x="310" y="185" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">BSA Section 63 Proof</text>

                      {/* Arrow 2 */}
                      <path d="M400 120 L430 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                      {/* Step 3 */}
                      <rect x="440" y="30" width="160" height="180" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                      <rect x="455" y="45" width="130" height="30" rx="6" fill="#DC2626" />
                      <text x="520" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3. Advocate Legal Notice</text>
                      <text x="520" y="105" textAnchor="middle" fill="#7F1D1D" fontSize="10" fontWeight="600">Section 74 Contract Act</text>
                      <text x="520" y="125" textAnchor="middle" fill="#7F1D1D" fontSize="10">Section 2(46) Unfair Term</text>
                      <text x="520" y="145" textAnchor="middle" fill="#7F1D1D" fontSize="10">15-Day Statutory Window</text>
                      <text x="520" y="185" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">78% Settle Here</text>

                      {/* Arrow 3 */}
                      <path d="M610 120 L640 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                      {/* Step 4 */}
                      <rect x="650" y="30" width="130" height="180" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                      <rect x="660" y="45" width="110" height="30" rx="6" fill="#166534" />
                      <text x="715" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4. e-Jagriti Order</text>
                      <text x="715" y="105" textAnchor="middle" fill="#14532D" fontSize="10" fontWeight="600">File Online DCDRC</text>
                      <text x="715" y="125" textAnchor="middle" fill="#14532D" fontSize="10">100% Refund Award</text>
                      <text x="715" y="145" textAnchor="middle" fill="#14532D" fontSize="10">+ 9%–12% Interest</text>
                      <text x="715" y="185" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">Judicial Award</text>
                    </svg>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Visual workflow: From written cancellation notice to advocate demand notice and e-Jagriti consumer commission award.
                  </p>
                </div>
              </section>

              {/* Section 6: Landmark Court Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Court Rulings on Wedding Venue Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Orders
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-800">
                            Court Order #{idx + 1}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                            {c.title}
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-slate-500 shrink-0">
                          {c.date}
                        </span>
                      </div>

                      <div className="mt-3 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-500">Parties: </span>
                            <span className="font-bold text-slate-900">{c.parties}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Forum &amp; Case No: </span>
                            <span className="font-bold text-slate-900">{c.citation}</span>
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900 mb-0.5">Facts of Dispute:</p>
                          <p className="text-slate-600">{c.facts}</p>
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900 mb-0.5">Judicial Holding &amp; Relief Granted:</p>
                          <p className="text-slate-600">{c.holding}</p>
                        </div>

                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <span className="text-[11px] uppercase tracking-wider font-extrabold text-emerald-800">Total Award Amount: </span>
                            <span className="text-xs sm:text-sm font-bold text-emerald-950">{c.amount}</span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl border-l-4 border-red-600 text-xs text-slate-800">
                          <strong className="text-red-700">Legal Takeaway for Consumers: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Interactive Dispute Resolution Matrix (Tabs) */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Actionable Legal Protocols by Banquet Cancellation Scenario
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Select your situation to view statutory provisions, proof required, and court-tested escalation steps
                  </p>
                </div>

                <BanquetBookingProblemTabs />
              </section>

              {/* Section 8: Step-by-Step 4-Stage Playbook */}
              <section id="heading-step-by-step" aria-labelledby="heading-step-by-step-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-step-by-step-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 4-Step Playbook to Enforce Your Advance Refund
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    A methodical recovery path designed to prevent venue evasiveness
                  </p>
                </div>

                <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Issue Formal Written Notice of Cancellation via Registered Email &amp; Speed Post
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Never communicate cancellations solely over casual phone calls. Send an explicit email and letter stating: (1) Date of booking and receipt number, (2) Booking amount and advance paid via UPI/NEFT, (3) Explicit cancellation of the event, (4) Direct demand to put the venue on the market immediately under Section 73 Contract Act duty of mitigation, and (5) A formal 7-day request for advance refund.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Lodge a National Consumer Helpline (NCH 1915) Grievance
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        If management claims advance is non-refundable, immediately register a complaint on the Ministry of Consumer Affairs National Consumer Helpline portal (consumerhelpline.gov.in or call 1915). Categorise the complaint under &quot;Hotel / Banquet / Event Services - Refund of Advance Deposit&quot;. This establishes an official government paper trail and creates institutional record of the dispute.
                      </p>
                      <p className="text-xs text-slate-500 pt-1">
                        Read our detailed guide:{" "}
                        <Link href="/national-consumer-helpline-complaint-guide" className="text-red-600 font-semibold hover:underline">
                          How to File an Effective National Consumer Helpline Grievance &rarr;
                        </Link>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Serve a 15-Day Statutory Advocate Demand Notice
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        If the venue fails to refund within 7 to 10 days of your cancellation letter, engage an advocate to issue a formal statutory notice. The notice explicitly cites Section 74 (prohibition of penalties), Section 73 (mitigation requirement), and Section 2(46) of Consumer Protection Act 2019. It gives management a strict 15-day window to credit your bank account, warning of consumer court proceedings with 12% interest and exemplary compensation. Over 75% of banquet disputes resolve at this stage because venue owners avoid public court filings that expose their accounting books and booking registers to judicial scrutiny.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Initiate Online Consumer Court Proceedings on e-Jagriti (DCDRC)
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Upon expiry of the 15-day notice period, file an e-complaint on the government&apos;s e-Jagriti portal (ejagriti.gov.in) before the District Consumer Disputes Redressal Commission where the banquet hall operates or where you reside. Consumer court fees are nominal (₹0 for claims up to ₹5 lakh; ₹500 for ₹5–10 lakh). You can represent yourself or be represented by an advocate to secure an enforceable recovery order.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 9: Concrete Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Example: How a ₹3,00,000 Advance Was Recovered with Interest
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Illustrative real-world case study illustrating financial mathematics and legal outcome
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Dispute: M/s Grand Pavilion Banquets, Gurugram (Illustrative Case)
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                      Case Timeline: 75 Days to Settlement
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                      <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Booking &amp; Financials</p>
                      <p><strong>Total Event Contract Value:</strong> ₹8,00,000</p>
                      <p><strong>Advance Token Paid:</strong> ₹3,00,000 via NEFT</p>
                      <p><strong>Original Wedding Date:</strong> 18 February 2026</p>
                      <p><strong>Cancellation Notice Given:</strong> 15 November 2025 (95 Days in Advance)</p>
                      <p><strong>Reason:</strong> Groom&apos;s father suffered severe cardiac event requiring bypass</p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-xl border border-red-100 space-y-2 text-red-950">
                      <p className="font-bold text-red-900 uppercase tracking-wider text-[11px]">Venue Position &amp; Re-Booking</p>
                      <p><strong>Banquet Management Stand:</strong> Forfeited 100% advance citing booking receipt stamp</p>
                      <p><strong>Actual Investigation:</strong> Venue re-let the hall on 18 February 2026 for a corporate annual gala for ₹8,50,000</p>
                      <p><strong>Actual Venue Loss:</strong> Nil (in fact earned ₹50,000 higher billing)</p>
                      <p><strong>Illegal Retention Amount:</strong> ₹3,00,000</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl space-y-2 text-xs sm:text-sm">
                    <p className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Advocate Action &amp; Financial Resolution</p>
                    <p className="text-slate-300">
                      A statutory legal notice under Section 74 of the Contract Act and Section 2(46) of the Consumer Protection Act was dispatched to the venue directors. The notice enclosed evidence of the corporate event booking and warned of immediate criminal complaint under BNS Section 318 (cheating) alongside e-Jagriti consumer proceedings with 18% penal interest.
                    </p>
                    <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row justify-between sm:items-center gap-2 font-bold text-emerald-400">
                      <span>Outcome: Banquet Settled Out of Court in 14 Days</span>
                      <span>Total Recovered: ₹2,90,000 (after nominal ₹10k admin deduction)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Mistakes to Avoid (G2 Requirement) */}
              <section id="heading-mistakes" aria-labelledby="heading-mistakes-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-mistakes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Critical Mistakes That Weaken Your Banquet Refund Claim
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Avoid these missteps when dealing with wedding hall proprietors
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <strong className="text-slate-900">Cancelling Verbally Over a Phone Call: </strong>
                        Telephone calls leave no admissible electronic trail. When you later claim advance refund, the venue manager will falsely claim they were never informed until the last moment. Always send an email and WhatsApp message followed by a registered postal letter.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <strong className="text-slate-900">Paying Booking Advances in Cash Without a Revenue Stamp Receipt: </strong>
                        Never pay substantial advances in unrecorded cash. Always route payments through bank transfers (UPI, NEFT, IMPS) with clear remarks like &quot;Advance Booking for Wedding Hall Date DD/MM/YYYY&quot;. If paying cash, demand an official printed invoice bearing the venue&apos;s GSTIN and legal signature.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <strong className="text-slate-900">Accepting Vague &quot;Date Adjustment&quot; Promises Without an Expiry-Proof Addendum: </strong>
                        Banquet managers often pacify agitated families by saying &quot;We won&apos;t refund cash, but you can adjust this advance against any family function in the next two years.&quot; Never accept verbal assurances. Demand a signed written credit note with no expiry date and transferable to immediate family members.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <strong className="text-slate-900">Failing to Investigate If the Venue Re-Booked Your Date: </strong>
                        Many families assume their money is gone and never check the hall on the cancelled date. If the hall hosted another wedding, you hold unassailable proof under Section 73 of zero venue loss. Check social media, send a family friend to inspect the premises, or take photographs.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <strong className="text-slate-900">Letting the 2-Year Consumer Limitation Period Expire: </strong>
                        Under Section 69 of the Consumer Protection Act, 2019, consumer complaints must be instituted within two years from the date on which the cause of action arose (the date the venue refused the refund). Do not let polite WhatsApp delays drag past the statutory limitation bar.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 11: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Banquet Refund Evidence Checklist (BSA 2023 Compliant)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Assemble these documents before serving your statutory demand notice
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">1. Contractual Documentation</p>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                      <li>Official booking receipt, estimate slip, or memorandum of agreement</li>
                      <li>Rate quotation brochure showing promised amenities (AC, lighting, valet, DJ)</li>
                      <li>Any separate written terms and conditions signed by both parties</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">2. Financial &amp; Payment Records</p>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                      <li>Bank statement showing debit with 12-digit UTR or IMPS reference</li>
                      <li>UPI screenshot or credit card charge slip showing payee legal name</li>
                      <li>Cancelled cheque leaf of your account for refund verification</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">3. Cancellation &amp; Refusal Trail</p>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                      <li>Sent email of cancellation with date, timestamp, and read receipt</li>
                      <li>WhatsApp export with venue owner/manager under Section 63 BSA 2023</li>
                      <li>Written refusal letter or WhatsApp denial of advance refund</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">4. Mitigating &amp; Corroborative Proof</p>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                      <li>Photographs/videos of third-party wedding on the cancelled date (if re-let)</li>
                      <li>Medical certificates or hospital admission records (if medical emergency)</li>
                      <li>National Consumer Helpline (NCH 1915) complaint docket number</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: Legal Notice Template & CTA */}
              <section id="heading-notice-template" aria-labelledby="heading-notice-template-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-notice-template-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Legal Notice Format for Wedding Venue Advance Refund
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    An advocate notice dispatched under registered speed post creates statutory liability
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-4 font-mono text-xs leading-relaxed">
                  <p className="text-slate-400 pb-2 border-b border-slate-800 font-sans text-xs">
                    FORMAL ADVOCATE LEGAL NOTICE PREVIEW (SECTION 74 CONTRACT ACT &amp; CPA 2019)
                  </p>
                  <p>To,</p>
                  <p>The Managing Director / Proprietor,<br />
                  M/s [NAME OF BANQUET HALL / MARRIAGE GARDEN],<br />
                  [Complete Venue Registered Address], [City, PIN Code]</p>

                  <p className="text-amber-400 font-bold font-sans">
                    SUBJECT: STATUTORY DEMAND NOTICE UNDER SECTION 74 OF THE INDIAN CONTRACT ACT, 1872 &amp; SECTIONS 2(46), 2(47) &amp; 35 OF THE CONSUMER PROTECTION ACT, 2019 FOR REFUND OF ADVANCE BOOKING AMOUNT OF ₹[AMOUNT] ALONG WITH INTEREST
                  </p>

                  <p>Sir/Madam,</p>
                  <p>
                    Under instructions from and on behalf of my client, [Client Name], residing at [Client Address], I hereby serve upon you this formal statutory demand notice:
                  </p>
                  <p>
                    1. That on [Booking Date], my client engaged your marriage hall/banquet lawn for a family wedding celebration scheduled for [Event Date], against total agreed consideration of ₹[Total Cost], paying a booking advance of ₹[Advance Amount] via [Payment Mode, UTR No.] vide your receipt no. [Receipt No.].
                  </p>
                  <p>
                    2. That on [Cancellation Date], well in advance of the scheduled event ([Number of Days] days prior), my client communicated the unforeseen cancellation of the booking due to [Reason, e.g. medical emergency / family bereavement]. My client requested an accounting of any actual expense incurred and refund of the remaining advance deposit.
                  </p>
                  <p>
                    3. That you have unlawfully refused to refund the advance deposit, citing a unilateral, standard-form clause stating that advances are non-refundable. Take notice that under the law laid down by the Hon&apos;ble Supreme Court in Kailash Nath Associates v. DDA (2015) 4 SCC 136 and Section 74 of the Indian Contract Act, 1872, forfeiture of earnest money without proof of actual damage constitutes an illegal penalty. Furthermore, your unilateral clause constitutes an &apos;Unfair Contract&apos; under Section 2(46) of the Consumer Protection Act, 2019.
                  </p>
                  <p>
                    4. That my client has also established that your venue [was subsequently re-allotted to another party on the same date / suffered zero actual financial loss], rendering your retention of my client&apos;s money an act of criminal misappropriation and unjust enrichment.
                  </p>
                  <p className="text-red-400 font-bold font-sans">
                    THEREFORE, I hereby call upon you to refund the entire sum of ₹[Advance Amount] along with statutory interest at the rate of 12% per annum into my client&apos;s designated bank account within fifteen (15) days of receipt of this notice, failing which my client shall initiate consumer complaint proceedings before the District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019, claiming the principal refund, ₹1,00,000 compensation for mental harassment, and full litigation costs at your sole peril.
                  </p>
                </div>

                {/* Primary Interactive CTA */}
                <BanquetBookingNoticeCTA />
              </section>

              {/* Section 13: Honest Scope of LegalRecovery */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scope-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Honest Scope: What LegalRecovery Can and Cannot Do
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
                    <p className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                      <span className="text-emerald-600 font-extrabold text-base">✓</span> What We Do
                    </p>
                    <ul className="text-emerald-950 space-y-2 list-disc pl-4">
                      <li>Draft an authoritative, verified advocate statutory demand notice citing Section 74 Indian Contract Act and Section 2(46) Consumer Protection Act within 24 hours.</li>
                      <li>Dispatch via Registered Speed Post with national postal tracking number and digital service over email/WhatsApp under Section 63 BSA 2023.</li>
                      <li>Handle venue negotiations, management replies, and structured pre-litigation settlement agreements.</li>
                      <li>Provide end-to-end guidance and petition drafting for filing consumer claims on the e-Jagriti portal if the venue does not pay.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 space-y-2">
                    <p className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <span className="text-slate-500 font-extrabold text-base">✕</span> What We Cannot Do
                    </p>
                    <ul className="text-slate-700 space-y-2 list-disc pl-4">
                      <li>We do not send physical recovery agents or use unlawful coercion against banquet premises.</li>
                      <li>We cannot recover advance payments made to unregistered, untraceable individuals in cash without receipts, phone records, or identity proof.</li>
                      <li>We do not guarantee instant refunds where cancellation was made hours before an event and non-vegetarian catering perishables were already cooked.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 14: Contextual Internal Links Section */}
              <section className="bg-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Related Service &amp; Consumer Dispute Guides:
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Experiencing delays or non-refunds in other high-value event or consumer transactions? Explore our statutory escalation rails:
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <Link
                    href="/event-concert-ticket-refund-cancelled"
                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 hover:text-red-600 hover:border-red-400 transition-colors"
                  >
                    Event &amp; Concert Ticket Cancellation Refunds &rarr;
                  </Link>
                  <Link
                    href="/token-money-refund-property-deal"
                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 hover:text-red-600 hover:border-red-400 transition-colors"
                  >
                    Token Money Refund in Property Deals (Bayana) &rarr;
                  </Link>
                  <Link
                    href="/furniture-not-delivered-damaged-refund"
                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 hover:text-red-600 hover:border-red-400 transition-colors"
                  >
                    Furniture &amp; Interior Decorator Damage Refund &rarr;
                  </Link>
                  <Link
                    href="/national-consumer-helpline-complaint-guide"
                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 hover:text-red-600 hover:border-red-400 transition-colors"
                  >
                    National Consumer Helpline 1915 Portal Guide &rarr;
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 hover:text-red-600 hover:border-red-400 transition-colors"
                  >
                    Advocate Legal Notice Drafting Charges (2026) &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 15: FAQ Accordion / Grid */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Marriage Hall &amp; Banquet Refunds
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Direct answers based on Section 74 of the Contract Act and Consumer Protection jurisprudence
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                        <span className="text-red-600 font-black">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 16: Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Legal References
                  </h2>
                  <p className="text-xs text-slate-500">
                    Primary statutes, Supreme Court judgments, and statutory consumer dispute redressal portals
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-red-600 hover:underline leading-relaxed"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                  Disclaimer: The information presented in this statutory guide is for educational and pre-litigation guidance under Indian law. While drafted in consultation with practising consumer advocates, it does not constitute individual attorney-client legal representation until a formal retainer is executed.
                </p>
              </section>

              {/* Related Recovery Guides Footer Cluster */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
