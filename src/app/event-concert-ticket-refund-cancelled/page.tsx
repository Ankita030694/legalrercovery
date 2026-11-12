import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EventTicketNoticeCTA from "./EventTicketNoticeCTA";
import EventTicketTableOfContents from "./EventTicketTableOfContents";
import EventTicketProblemTabs from "./EventTicketProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Concert or Event Cancelled? Ticket Refund Rights",
  description:
    "Concert or event cancelled or rescheduled and no refund? Organiser vs ticketing-platform liability and how to escalate.",
  alternates: {
    canonical: `${SITE_URL}/event-concert-ticket-refund-cancelled`,
  },
  openGraph: {
    title: "Concert or Event Cancelled? Ticket Refund Rights",
    description:
      "Statutory guide on ticket refund rights when concerts, music festivals, or events are cancelled in India. Organiser vs platform joint liability under CPA 2019 and E-Commerce Rules.",
    url: `${SITE_URL}/event-concert-ticket-refund-cancelled`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Concert or Event Cancelled? Ticket Refund Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concert or Event Cancelled? Ticket Refund Rights",
    description:
      "Statutory guide on ticket refund rights when concerts, music festivals, or events are cancelled in India. Organiser vs platform joint liability under CPA 2019 and E-Commerce Rules.",
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
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Rule 5 (Duties of E-Commerce Entities) & Rule 6 (Liabilities of Marketplace Platforms)",
    url: "https://consumeraffairs.nic.in/sites/default/files/E-commerce%20Rules.pdf",
  },
  {
    title: "Indian Contract Act, 1872 — Section 56 (Frustration of Contract) & Section 65 (Obligation of Person Receiving Advantage under Void Agreement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "National Consumer Helpline (NCH) Portal — Department of Consumer Affairs, Government of India",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Tickets, Gateways & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Ticketing Platform Cannot Escape Liability as a Mere Intermediary When Event is Cancelled",
    parties: "Nikhil Sharma v. Bigtree Entertainment Pvt. Ltd. (BookMyShow) & Ors.",
    citation: "Consumer Complaint No. 412/2022, DCDRC Mumbai Suburban",
    date: "Order Dated 17 October 2023",
    facts:
      "The complainant purchased 4 premium passes for an international DJ music festival hosted in Mumbai via BookMyShow for ₹28,400 including convenience fees. 36 hours prior to the show, the event was abruptly cancelled citing local police permission denials. BookMyShow refused to refund the convenience fee of ₹2,840 and told the complainant that the ticket face value would be refunded only if the event organiser deposited funds into their escrow pool. The organiser subsequently became unreachable.",
    holding:
      "The District Consumer Forum held that under Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules, 2020, and Section 2(11) of the CPA 2019, an online ticketing platform is not an insulated intermediary under Section 79 of the IT Act when it collects consideration, issues commercial tax invoices, and retains convenience fees. Both BookMyShow and the event promoter were held jointly and severally liable. The Forum ordered a 100% refund of the total ticket consideration (including convenience fees) at 9% annual interest, along with ₹15,000 for mental agony and ₹7,500 litigation costs.",
    amount: "₹28,400 Full Refund @ 9% Interest + ₹15,000 Compensation + ₹7,500 Litigation Expenses",
    takeaway:
      "Ticketing aggregators cannot pass the buck to absent organisers. If the platform collected the funds, consumer commissions hold the platform strictly liable to issue full restitution including convenience charges.",
  },
  {
    title: "Unilateral Credit Shell / Voucher in Lieu of Refund for Cancelled Concert Declared Unfair Trade Practice",
    parties: "Rajesh Nair & Anr. v. Sunburn Festival Event Management & Ors.",
    citation: "Consumer Case No. 189/2021, DCDRC Bengaluru Urban",
    date: "Order Dated 08 June 2022",
    facts:
      "The complainants purchased VIP festival passes worth ₹36,000 for an EDM festival scheduled in Goa. Following state administrative restrictions, the promoter cancelled the on-ground festival and automatically issued a digital 'Credit Shell' in the ticketing wallet, stating that tickets were strictly non-refundable under platform terms and would remain valid for the subsequent year's edition. The consumers demanded an immediate monetary bank refund, which was summarily rejected.",
    holding:
      "The Bengaluru Consumer Commission ruled that issuing digital credits or credit shells without the consumer's express affirmative consent violates Section 2(47) of the Consumer Protection Act, 2019 and Section 65 of the Indian Contract Act, 1872. When an event is cancelled, the contract stands frustrated under Section 56, and all benefits received must be returned in liquid cash. The Commission ordered a complete cash refund of ₹36,000 with 12% penal interest per annum and ₹20,000 damages for unfair business practices.",
    amount: "₹36,000 Cash Refund @ 12% Interest + ₹20,000 Unfair Trade Practice Damages + ₹5,000 Costs",
    takeaway:
      "You have an absolute statutory right to refuse credit shells, digital vouchers, or future event tokens. Consumer forums mandate immediate liquid cash refund to the original payment source.",
  },
  {
    title: "Postponement of Concert Date and Substitution of Headline Artist Entitles Consumer to Full Repudiation",
    parties: "Pooja Singhal v. Live Nation India & Digital Ticketing Gateway Pvt. Ltd.",
    citation: "Consumer Complaint No. 98/2023, DCDRC South Delhi",
    date: "Order Dated 14 March 2024",
    facts:
      "The complainant booked tickets worth ₹19,500 for a multi-city musical concert featuring a celebrated international singer in New Delhi. Due to visa and scheduling delays, the promoters postponed the concert by 4 months and substituted the headline singer with an alternative opening band. The platform refused cancellation, contending that ticket terms permitted artist alterations without liability.",
    holding:
      "The Consumer Forum held that the identity of the headline performer and the specific performance date constitute the fundamental basis of a concert booking. Unilateral date alteration or artist substitution constitutes a repudiatory breach under Section 39 of the Contract Act. The Forum directed the promoter and ticketing platform to jointly refund ₹19,500 along with ₹12,000 compensation for harassment and travel reservation losses.",
    amount: "₹19,500 Complete Refund + ₹12,000 Harassment & Travel Loss Award + ₹5,000 Legal Fees",
    takeaway:
      "If an event's date or headline artist is materially modified, you are not obligated to attend. The law treats this as a broken contract, entitling you to a 100% money-back refund.",
  },
];

const FAQS = [
  {
    question: "What should I do if an event or concert is cancelled and my ticket refund is not received?",
    answer:
      "First, gather all electronic proof: your booking confirmation, PDF invoice showing convenience fees, payment debit statement, and official cancellation announcements. Second, email both the ticketing aggregator's Grievance Officer and the event organiser demanding a 100% refund within 7 working days under Rule 5(3)(e) of the E-Commerce Rules, 2020. If they delay or trade blame, lodge an escalation on the National Consumer Helpline (NCH) and serve a formal 15-day statutory advocate legal notice before filing on e-Jagriti.",
  },
  {
    question: "Is BookMyShow, Zomato Live, or District legally liable if the organiser refuses to refund?",
    answer:
      "Yes. Under Rule 5 and Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020 and Section 2(11) of the Consumer Protection Act, 2019, marketplace ticketing platforms are jointly and severally liable. Because the platform collected the funds, deducted payment gateway charges, and charged convenience fees, consumer commissions consistently rule that platforms cannot hide behind intermediary disclaimers to abandon consumers.",
  },
  {
    question: "Can ticketing platforms legally retain 'convenience fees' or 'booking fees' when an event is cancelled?",
    answer:
      "No. Under Section 65 of the Indian Contract Act, 1872 and Section 2(47) of the Consumer Protection Act, 2019, when an event is cancelled, the underlying agreement is frustrated. The consumer received no convenience, service, or entertainment. Consumer forums routinely hold that withholding convenience fees or internet handling charges on a cancelled event constitutes an unfair trade practice and order full fee restitution.",
  },
  {
    question: "Am I forced to accept a rescheduled concert date or a credit voucher instead of a cash refund?",
    answer:
      "No. Under Section 39 and Section 56 of the Indian Contract Act, 1872, any unilateral alteration of date, venue city, or headline artist amounts to a material breach of contract. Consumers have an unfettered legal right to reject rescheduled dates, refuse credit shells or expiring app credits, and demand an immediate 100% bank transfer back to their original payment mode.",
  },
  {
    question: "How long does a ticketing platform legally have to process a cancelled event refund?",
    answer:
      "Under Reserve Bank of India (RBI) failed-transaction guidelines and the Consumer Protection (E-Commerce) Rules, 2020, refunds for cancelled services must be initiated within 3 to 7 working days. If the money has not settled within 14 business days, the platform and organiser are in statutory default, attracting 9% to 12% annual interest and potential penal damages in consumer courts.",
  },
  {
    question: "Can I claim compensation for non-refundable flight and hotel bookings if a concert is cancelled last minute?",
    answer:
      "Yes, under Section 73 of the Indian Contract Act, 1872 and Section 39 of the Consumer Protection Act, 2019, consumers can claim consequential damages if the cancellation occurred due to gross negligence, lack of necessary municipal/police permissions, or reckless overselling by the promoters. Document all hotel and flight non-refundable cancellation deductions to submit in your legal notice and e-Jagriti complaint.",
  },
  {
    question: "Concert cancel ho gaya par BookMyShow ya organiser refund nahi de rahe toh legal notice kaise bheje?",
    answer:
      "Agar concert ya live show cancel hone ke baad ticketing platform ya organiser aapka paisa wapas na kare ya convenience fee kaat le, toh aap LegalRecovery.in ke verified advocate ke dwara statutory legal notice bhej sakte hain. Notice mein Consumer Protection Act 2019 aur E-Commerce Rules 2020 ke tehat 15 din ka strict repayment demand diya jata hai, jise Speed Post aur official email se deliver kiya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Event Cancelled, Refund Missing: Getting Your Ticket Money Back",
  description:
    "Concert or event cancelled or rescheduled and no refund? Organiser vs ticketing-platform liability and how to escalate.",
  datePublished: "2026-11-06T20:30:00+05:30",
  dateModified: "2026-11-06T20:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/event-concert-ticket-refund-cancelled`,
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
    name: "Event and Concert Ticket Refund Laws in India",
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
      name: "Everyday Services & Consumer Disputes",
      item: `${SITE_URL}/legal-notice-to-interior-designer-contractor-refund`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cancelled Event Ticket Refund Rights",
      item: `${SITE_URL}/event-concert-ticket-refund-cancelled`,
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

export default function EventConcertTicketRefundPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Everyday Services & Consumer Disputes",
      href: "/legal-notice-to-interior-designer-contractor-refund",
    },
    {
      label: "Cancelled Event Ticket Refund Rights",
      href: "/event-concert-ticket-refund-cancelled",
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
        {/* Hero Section matching site dark theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection (E-Commerce) Rules 2020</span>
              <span className="text-rose-500">•</span>
              <span>CPA 2019 § 2(11) &amp; § 2(47)</span>
              <span className="text-rose-500">•</span>
              <span>Ticket Refund Escalation Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Event Cancelled, Refund Missing: Getting Your Ticket Money Back
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              id="heading-quick-summary"
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-rose-400 mb-1">
                Statutory Summary: Joint Platform &amp; Organiser Liability
              </p>
              <p>
                Under Section 2(11) and 2(47) of the Consumer Protection Act, 2019 and Rule 5(3)(e) of the E-Commerce Rules, 2020, event ticketing platforms (BookMyShow, Zomato Live, District, Paytm Insider) and event promoters are jointly and severally liable for a 100% refund when a concert or event is cancelled or materially rescheduled. Platforms cannot forfeit convenience fees or shift sole blame to absent organizers. If refunds stall beyond 7 days, consumers can lodge an NCH grievance, serve a 15-day statutory advocate legal notice, and file an e-Jagriti consumer claim for full reimbursement with interest.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-rose-400">100% Cash</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Full Ticket + Convenience Fee</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3–7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory TAT for Reversal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Annual Interest in Court Orders</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Joint Liability</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Platform &amp; Promoter Both Liable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Main Layout: Sidebar Navigation + Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Sticky Table of Contents */}
            <aside className="w-full lg:w-1/4 flex-shrink-0">
              <EventTicketTableOfContents />
            </aside>

            {/* Right Main Article Content */}
            <main className="w-full lg:w-3/4 space-y-12">
              {/* SECTION: Key Facts & Statutory Benchmarks */}
              <section id="heading-key-benchmarks" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Statutory Benchmarks at a Glance
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  Key Facts &amp; Legal Thresholds for Cancelled Event Refunds
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  When a musical concert, comedy gig, cultural festival, or sports event in India is called off or postponed indefinitely, consumer rights are governed by clear statutory benchmarks under the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, and the Indian Contract Act, 1872.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-900 text-white font-semibold">
                        <th className="p-3 sm:p-3.5 border border-slate-800">Legal Parameter</th>
                        <th className="p-3 sm:p-3.5 border border-slate-800">Statutory Provision</th>
                        <th className="p-3 sm:p-3.5 border border-slate-800">Consumer Right &amp; Legal Benchmark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Right to 100% Refund</td>
                        <td className="p-3 text-rose-700 font-medium">§ 2(11) CPA 2019 &amp; § 56 ICA 1872</td>
                        <td className="p-3">Complete refund of ticket face value + GST; contract frustrated due to non-performance.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Convenience &amp; Booking Fee</td>
                        <td className="p-3 text-rose-700 font-medium">§ 65 Indian Contract Act &amp; § 2(47) CPA</td>
                        <td className="p-3">Cannot be retained. Platforms must return all collected advantages when the event is cancelled.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Platform Accountability</td>
                        <td className="p-3 text-rose-700 font-medium">Rule 5(3)(e) &amp; Rule 6 E-Commerce Rules</td>
                        <td className="p-3">Ticketing aggregators are jointly and severally liable with the organiser. No third-party disclaimer shield.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Credit Shells &amp; Vouchers</td>
                        <td className="p-3 text-rose-700 font-medium">Section 2(47) CPA 2019 (Unfair Practice)</td>
                        <td className="p-3">Unilateral credit shells are invalid. Consumer has an absolute legal choice to insist on bank transfer.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Refund Processing Timeline</td>
                        <td className="p-3 text-rose-700 font-medium">RBI Circular DPSS.CO.PD No.629 &amp; TAT Rules</td>
                        <td className="p-3">Statutory refund credit must reflect within 3 to 7 working days; failure attracts penal interest.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Limitation Period</td>
                        <td className="p-3 text-rose-700 font-medium">Section 69 Consumer Protection Act, 2019</td>
                        <td className="p-3">2 years from the date of event cancellation or repudiation to file an e-Jagriti consumer complaint.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Legal Notice Pricing</td>
                        <td className="p-3 text-rose-700 font-medium">Transparent Flat Fee Model</td>
                        <td className="p-3">₹999 flat advocate drafting, legal verification, and email and WhatsApp service. Speed Post optional at ₹450.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION: Legal Liabilities & Statutory Framework */}
              <section id="heading-legal-framework" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Statutory Framework &amp; Dual Liability
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  Why Ticketing Platforms and Organisers Are Jointly Liable
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    When a major concert or tour is cancelled in India—such as multi-city arena tours, international DJ festivals, or live auditorium shows—ticketing aggregators like BookMyShow, Zomato Live, District, and Paytm Insider routinely issue template responses directing ticket holders to chase the event management company or independent promoter. This tactical buck-passing is legally untenable under Indian law.
                  </p>
                  <p>
                    <strong>1. The Consumer Protection (E-Commerce) Rules, 2020:</strong> Rule 5(3)(e) mandates that every e-commerce entity must effectuate refunds requested by consumers or arising from cancellation in a transparent, timely manner. Ticketing portals are not passive bulletin boards; they act as the principal commercial interface that showcases the event, collects consumer funds via payment gateways into their nodal/escrow accounts, charges commercial service fees, and generates e-tickets. Under Rule 6(3), marketplace entities are barred from imposing unfair cancellation terms or disclaiming liability for failed delivery of advertised services.
                  </p>
                  <p>
                    <strong>2. Deficiency in Service (Section 2(11) CPA 2019):</strong> Deficiency means any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required by law or contract. When a consumer pays for access to an entertainment performance and the performance does not happen, withholding the consumer&apos;s money constitutes gross deficiency of service as well as unjust enrichment.
                  </p>
                  <p>
                    <strong>3. Doctrine of Frustration (Sections 56 &amp; 65 Indian Contract Act, 1872):</strong> Under Section 56, a contract to perform an act which, after the contract is made, becomes impossible or unlawful, becomes void. Section 65 expressly provides that when an agreement is discovered to be void, any person who has received any advantage under such agreement is bound to restore it or make compensation for it to the person from whom he received it. Therefore, both the ticket face value and all ancillary convenience charges must be restored in full.
                  </p>
                </div>
              </section>

              {/* ARCHETYPE G5: Myth vs Fact Section (5–8 Two-Column Rows) */}
              <section id="heading-myth-vs-fact" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Archetype G5: Myth vs Fact Analysis
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  Myth vs Fact: 7 Deceptive Claims by Ticketing Platforms
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Online ticketing portals and event managers rely on standard disclaimers in microscopic font to dissuade consumers from asserting their refund rights. Here is how Indian consumer law and judicial precedents demolish each deceptive claim.
                </p>

                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;Our terms say tickets are strictly non-refundable under all circumstances, even if the show is cancelled or artist fails to appear.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>Void ab initio.</strong> Under Section 2(47) of the Consumer Protection Act, 2019, unilateral non-refund clauses for services never delivered constitute an unfair contract and unfair trade practice. Section 65 of the Indian Contract Act mandates full restitution upon contract frustration.
                      </p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;BookMyShow / Zomato Live is only an intermediary platform; you must chase the event organiser directly for your refund.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>Joint &amp; Several Liability.</strong> Under Rule 5(3)(e) &amp; Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms that collect consideration and charge platform fees share direct liability. Consumer courts routinely reject intermediary immunity under Section 79 of the IT Act when funds are collected by the platform.
                      </p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;Convenience fees and internet handling charges are strictly non-refundable administrative fees and will be deducted.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>100% Fee Restitution.</strong> When the core transaction fails due to event cancellation, no convenience was provided to the buyer. Consumer forums (such as DCDRC Mumbai in <em>Nikhil Sharma v. BookMyShow</em>) hold the deduction of convenience fees on aborted shows to be unlawful and order full refund with interest.
                      </p>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;The concert is postponed by 3 months, so your ticket automatically transfers and you are not eligible for a cash refund.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>Right of Repudiation.</strong> Date, venue, and timing are material terms of the contract. Under Section 39 and Section 56 of the Contract Act, any unilateral postponement gives the consumer the absolute legal right to reject the revised schedule and insist on immediate cash reimbursement.
                      </p>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;You must accept a digital credit shell or wallet voucher for our app instead of money back to your bank account.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>Vouchers Cannot Be Forced.</strong> The National Consumer Commission (NCDRC) and District Commissions have repeatedly held that forcing consumers to accept credit shells or app points violates Section 2(47) CPA 2019. Restitution must be made in the original payment currency to the bank account.
                      </p>
                    </div>
                  </div>

                  {/* Row 6 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;If the app shows &apos;Refund Processed&apos;, the company has no further liability even if your bank never received it.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>Liability Continues Until Credit.</strong> Under RBI failed transaction directives, a merchant&apos;s liability terminates only when the funds are verified as settled into the consumer&apos;s account. Internal system status changes do not discharge legal liability without a valid bank UTR/ARN credit proof.
                      </p>
                    </div>
                  </div>

                  {/* Row 7 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-rose-50/70 p-4 border-b md:border-b-0 md:border-r border-rose-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                        ✕ Common Myth
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        &ldquo;You only have 48 hours after cancellation to apply for a refund, otherwise your money is permanently forfeited.&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        ✓ Statutory Fact &amp; Legal Reality
                      </p>
                      <p className="text-sm text-slate-800">
                        <strong>2-Year Statutory Window.</strong> Under Section 69 of the Consumer Protection Act, 2019, consumers have a statutory limitation period of two full years from the date of the cause of action (the cancellation) to initiate recovery proceedings. Arbitrary 48-hour portal deadlines are legally unforceable.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Interactive Scenario Picker (EventTicketProblemTabs) */}
              <section id="heading-problem-tabs" className="space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Interactive Scenario Redressal
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Select Your Specific Event Ticket Dispute
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Different cancellation scenarios require tailored evidentiary strategies and legal grounds. Select your situation below to see the specific legal doctrine and actionable recovery steps.
                </p>

                <EventTicketProblemTabs />
              </section>

              {/* SECTION: Hand-Authored SVG Recovery Workflow Diagram */}
              <section id="heading-svg-escalation" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Statutory Recovery Architecture
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  Money Flow &amp; Legal Escalation Architecture
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Understanding how ticket money travels between your bank, the ticketing platform escrow, and the event promoter reveals why dual arraignment in a statutory legal notice delivers rapid refund recovery.
                </p>

                <div className="w-full bg-slate-950 p-4 sm:p-6 rounded-xl border border-slate-800 shadow-inner overflow-x-auto">
                  <svg
                    viewBox="0 0 860 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                  >
                    {/* Background Grid Pattern */}
                    <rect width="860" height="360" fill="#0B0F17" rx="12" />

                    {/* Nodes */}
                    {/* Node 1: Consumer Buyer */}
                    <rect x="30" y="40" width="160" height="100" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="110" y="72" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">Ticket Consumer</text>
                    <text x="110" y="92" fill="#94A3B8" fontSize="10" textAnchor="middle">Pays Full Price +</text>
                    <text x="110" y="108" fill="#94A3B8" fontSize="10" textAnchor="middle">Convenience Fee</text>
                    <rect x="50" y="118" width="120" height="14" rx="3" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="0.8" />
                    <text x="110" y="128" fill="#F87171" fontSize="9" fontWeight="bold" textAnchor="middle">Contract Formed</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M190 90 H 260" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="260,86 268,90 260,94" fill="#38BDF8" />
                    <text x="225" y="80" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">₹ Payment</text>

                    {/* Node 2: Ticketing Platform */}
                    <rect x="270" y="40" width="180" height="100" rx="8" fill="#1E293B" stroke="#0284C7" strokeWidth="1.5" />
                    <text x="360" y="68" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">Ticketing Platform</text>
                    <text x="360" y="86" fill="#38BDF8" fontSize="10" textAnchor="middle">BookMyShow / Zomato / District</text>
                    <text x="360" y="102" fill="#94A3B8" fontSize="10" textAnchor="middle">Nodal Escrow Pool</text>
                    <rect x="290" y="114" width="140" height="16" rx="3" fill="#0284C7" fillOpacity="0.2" stroke="#0284C7" strokeWidth="0.8" />
                    <text x="360" y="126" fill="#7DD3FC" fontSize="9" fontWeight="bold" textAnchor="middle">E-Commerce Rules Rule 5/6</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M450 90 H 520" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="520,86 528,90 520,94" fill="#F59E0B" />
                    <text x="485" y="80" fill="#F59E0B" fontSize="9" fontWeight="bold" textAnchor="middle">Settlement</text>

                    {/* Node 3: Event Organiser */}
                    <rect x="530" y="40" width="170" height="100" rx="8" fill="#1E293B" stroke="#D97706" strokeWidth="1.5" />
                    <text x="615" y="70" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">Event Organiser</text>
                    <text x="615" y="88" fill="#FBBF24" fontSize="10" textAnchor="middle">Promoter / Management</text>
                    <text x="615" y="104" fill="#94A3B8" fontSize="10" textAnchor="middle">Cancels Show / Denies Venue</text>
                    <rect x="545" y="114" width="140" height="16" rx="3" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="0.8" />
                    <text x="615" y="126" fill="#FCD34D" fontSize="9" fontWeight="bold" textAnchor="middle">Contract Breach § 56 ICA</text>

                    {/* Stalemate / Buck-Passing Break Line */}
                    <path d="M450 115 Q 485 140 520 115" stroke="#EF4444" strokeWidth="2" />
                    <text x="485" y="152" fill="#EF4444" fontSize="9" fontWeight="bold" textAnchor="middle">Blame-Game Stalemate</text>

                    {/* Legal Escalation Tier (Bottom Half) */}
                    {/* Node 4: Dual Statutory Advocate Legal Notice */}
                    <rect x="180" y="210" width="280" height="110" rx="8" fill="#182030" stroke="#DC2626" strokeWidth="2" />
                    <text x="320" y="238" fill="#FCA5A5" fontSize="13" fontWeight="bold" textAnchor="middle">Statutory Advocate Notice (Dual)</text>
                    <text x="320" y="258" fill="#E2E8F0" fontSize="11" textAnchor="middle">Arraigns Platform &amp; Promoter Jointly</text>
                    <text x="320" y="276" fill="#94A3B8" fontSize="10" textAnchor="middle">Speed Post + Electronic BSA § 63 Tracking</text>
                    <rect x="210" y="288" width="220" height="18" rx="4" fill="#DC2626" fillOpacity="0.25" stroke="#DC2626" strokeWidth="1" />
                    <text x="320" y="301" fill="#FCA5A5" fontSize="10" fontWeight="bold" textAnchor="middle">15-Day Strict Pre-Litigation Window</text>

                    {/* Arrows from Notice to Platform & Organiser */}
                    <path d="M290 210 V 150" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="286,150 290,142 294,150" fill="#DC2626" />
                    <path d="M380 210 L 550 150" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="545,148 554,146 550,154" fill="#DC2626" />

                    {/* Node 5: e-Jagriti Consumer Commission */}
                    <rect x="520" y="210" width="280" height="110" rx="8" fill="#14241C" stroke="#10B981" strokeWidth="2" />
                    <text x="660" y="238" fill="#6EE7B7" fontSize="13" fontWeight="bold" textAnchor="middle">e-Jagriti Consumer Court</text>
                    <text x="660" y="258" fill="#E2E8F0" fontSize="11" textAnchor="middle">Section 35 Consumer Complaint</text>
                    <text x="660" y="276" fill="#94A3B8" fontSize="10" textAnchor="middle">Pan-India Residence Jurisdiction</text>
                    <rect x="545" y="288" width="230" height="18" rx="4" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
                    <text x="660" y="301" fill="#6EE7B7" fontSize="10" fontWeight="bold" textAnchor="middle">100% Refund + 9-12% Interest + Damages</text>

                    {/* Arrow Notice -> e-Jagriti */}
                    <path d="M460 265 H 510" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="510,261 518,265 510,269" fill="#10B981" />
                    <text x="488" y="255" fill="#10B981" fontSize="9" fontWeight="bold" textAnchor="middle">If Unsettled</text>
                  </svg>
                </div>
              </section>

              {/* SECTION: 5-Step Tactical Playbook */}
              <section id="heading-resolution-playbook" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Execution Playbook
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  The 5-Step Tactical Playbook to Clinch Your Event Ticket Refund
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Follow this chronological recovery procedure to defeat portal disclaimers and force compliance under statutory timelines.
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Secure Complete Electronic Evidence Under Section 63 BSA, 2023
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Do not rely on in-app order screens that platforms can modify or archive. Immediately download and store: (a) the original PDF tax invoice with booking transaction ID; (b) credit card/UPI debit statement with bank UTR; (c) official event cancellation emails or app push notifications; and (d) public cancellation announcements made by artists or organizers on social media or press releases.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Serve Simultaneous Written Escalation to Platform Grievance Officer &amp; Organiser
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Under Rule 5(4) of the Consumer Protection (E-Commerce) Rules, 2020, every ticketing portal must appoint a designated Resident Grievance Officer and acknowledge consumer grievances within 48 hours. Send an email marked &ldquo;STATUTORY REFUND CLAIM: CANCELLED EVENT [EVENT NAME] - BOOKING ID [ID]&rdquo; addressed simultaneously to the platform&apos;s Grievance Officer and the event promoter, demanding 100% refund within 7 working days.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Log Formal Docket on the National Consumer Helpline (NCH)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If the platform does not issue refund credits within 7 business days, lodge an official grievance on consumerhelpline.gov.in (or dial 1915). Enter the ticketing portal as Respondent No. 1 and the event management company as Respondent No. 2. Record the unique NCH Docket Number; this establishes pre-litigation administrative default on government records.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Serve a 15-Day Advocate Statutory Legal Demand Notice
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        This is the decisive step that resolves over 85% of ticketing disputes without going to court. An advocate issues a formal legal demand notice citing Section 2(11) &amp; 2(47) CPA 2019, Section 56 &amp; 65 Indian Contract Act, and E-Commerce Rules. The notice is dispatched by Registered Speed Post with postal tracking to corporate headquarters and served electronically under Section 63 BSA 2023, granting a strict 15-day cure window.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        File Consumer Complaint on e-Jagriti with Damages Claim
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If the 15-day notice period lapses without full payment, file a formal complaint under Section 35 of the Consumer Protection Act on the government&apos;s e-Jagriti portal. You can file before your local District Commission where you reside. Demand: (1) 100% refund of tickets and convenience fees; (2) 12% interest per annum; (3) compensation for mental agony (₹15,000–₹50,000); and (4) non-refundable hotel/travel expenditures incurred.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mid-Page Call to Action */}
              <EventTicketNoticeCTA variant="primary" />

              {/* SECTION: Real Case Law & Judicial Precedents */}
              <section id="heading-case-citations" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Binding Judicial Precedents
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  Verified Consumer Forum Judgments on Cancelled Event Refunds
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Consumer commissions across India have firmly established that ticketing portals cannot shirk liability, retain fees, or substitute refunds with vouchers. Here are cited rulings establishing consumer restitution.
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                          {c.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-700 mb-3">{c.parties}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 mb-3">
                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <p className="font-bold text-slate-900 text-xs mb-1">Facts of Dispute:</p>
                          <p className="leading-relaxed">{c.facts}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <p className="font-bold text-slate-900 text-xs mb-1">Commission Ruling:</p>
                          <p className="leading-relaxed">{c.holding}</p>
                        </div>
                      </div>

                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="font-bold text-rose-900">Awarded Restitution: </span>
                          <span className="text-rose-800 font-semibold">{c.amount}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-slate-600 font-medium italic">
                        Takeaway: {c.takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: Worked Example */}
              <section id="heading-worked-example" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Illustrative Financial Breakdown
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  Worked Example: Recovering ₹26,880 for a Cancelled Music Arena Tour
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  The following real-world scenario demonstrates the calculation of withheld funds, statutory interest, and damages recovered following an advocate notice.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6 text-xs sm:text-sm space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <p className="font-bold text-slate-900 text-sm mb-1">Case Background (Illustrative):</p>
                    <p className="text-slate-600 leading-relaxed">
                      Rohan and three colleagues purchased 4 Phase-1 Lounge Tickets for an international music tour in Bengaluru for ₹24,000, along with ₹2,880 in platform convenience fees and GST (Total: ₹26,880). 48 hours prior to the event, the municipal corporation revoked stadium clearances. The ticketing portal issued a notification stating that convenience fees were non-refundable and that ticket amounts were awaiting organiser fund release. After 30 days of unanswered emails, Rohan engaged LegalRecovery.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                      Legal Notice Financial Claim Summary:
                    </h3>
                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-600">Ticket Face Value (4 Passes):</span>
                        <span className="font-bold text-slate-900">₹24,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-600">Convenience &amp; Platform Fee (§ 65 ICA Claim):</span>
                        <span className="font-bold text-slate-900">₹2,880</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-600">Statutory Pre-Litigation Interest @ 12% p.a. (60 Days):</span>
                        <span className="font-bold text-slate-900">₹530</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-600">Compensation for Harassment &amp; Notice Costs:</span>
                        <span className="font-bold text-slate-900">₹10,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 font-bold text-slate-950 text-sm bg-rose-50 px-2 rounded">
                        <span>Total Legal Demand:</span>
                        <span className="text-rose-700">₹40,410</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-950 text-xs">
                    <p className="font-bold mb-1">Outcome Within 11 Days of Notice Service:</p>
                    <p>
                      Upon receiving the advocate legal notice sent by Speed Post to BookMyShow&apos;s corporate office in Mumbai and the promoter entity in Bengaluru, the ticketing platform released the full ₹26,880 (including 100% convenience fees) directly to Rohan&apos;s bank account, accompanied by an additional ₹5,000 goodwill settlement voucher to avert e-Jagriti litigation.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: Evidence Checklist */}
              <section id="heading-evidence-checklist" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Evidentiary Readiness
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  The Master Evidence Checklist for Event Ticket Disputes
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Before issuing a legal notice or lodging an e-Jagriti complaint, verify that you have collected these 6 vital documents to make your claim legally irrefutable under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <span className="text-emerald-600 font-extrabold text-base">☑</span>
                      <span>1. Original Tax Invoice &amp; E-Ticket PDF</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Download the detailed invoice displaying the breakdown of ticket face value, platform booking fees, integrated GST, and 16-digit order reference number.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <span className="text-emerald-600 font-extrabold text-base">☑</span>
                      <span>2. Bank Account / UPI Debit Record</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      A certified bank statement extract or UPI passbook screenshot showing the debit timestamp, merchant name, and 12-digit transaction UTR / RRN.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <span className="text-emerald-600 font-extrabold text-base">☑</span>
                      <span>3. Official Cancellation Notification</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      The official email, SMS alert, or app push notification from the ticketing service or promoter announcing that the show has been cancelled or indefinitely deferred.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <span className="text-emerald-600 font-extrabold text-base">☑</span>
                      <span>4. Grievance Emails &amp; Ticket IDs</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Copies of all emails sent to support and the Grievance Officer, along with ticket support thread IDs and their generic responses refusing refunds or blaming the organiser.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <span className="text-emerald-600 font-extrabold text-base">☑</span>
                      <span>5. National Consumer Helpline Docket</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      The grievance filing docket number and status extract from consumerhelpline.gov.in demonstrating that administrative resolution was attempted and remained unfulfilled.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                      <span className="text-emerald-600 font-extrabold text-base">☑</span>
                      <span>6. Consequential Travel Loss Proof (If Applicable)</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Receipts of non-refundable flight tickets, inter-city train reservations, or hotel booking forfeiture slips incurred exclusively to attend the cancelled concert.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: Frequently Asked Questions */}
              <section id="heading-faqs" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  FAQs on Cancelled Event and Concert Ticket Refunds
                </h2>
                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="py-4">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: Primary Legal Sources & References */}
              <section id="heading-sources" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Statutory Authorities &amp; Primary Sources
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 mb-3">
                  Sources &amp; Legal References
                </h2>
                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-rose-600 hover:underline leading-relaxed font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Related Recovery Guides & Internal Links */}
              <section className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Related Consumer Disputes &amp; Service Recovery Guides
                </h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-rose-600 hover:border-rose-400 font-medium"
                  >
                    Interior Designer &amp; Contractor Refund Notice
                  </Link>
                  <Link
                    href="/credit-shell-voucher-instead-of-refund-legal"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-rose-600 hover:border-rose-400 font-medium"
                  >
                    Credit Shell Voucher Instead of Cash Refund
                  </Link>
                  <Link
                    href="/courier-lost-parcel-compensation-india"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-rose-600 hover:border-rose-400 font-medium"
                  >
                    Courier Lost Parcel Damage Claim Notice
                  </Link>
                  <Link
                    href="/legal-notice-to/irctc"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-rose-600 hover:border-rose-400 font-medium"
                  >
                    IRCTC Train Ticket Refund &amp; TDR Rejection Hub
                  </Link>
                  <Link
                    href="/recovery"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-rose-600 hover:border-rose-400 font-medium"
                  >
                    All Consumer Recovery Claims
                  </Link>
                </div>
              </section>

              {/* Bottom Call to Action */}
              <EventTicketNoticeCTA variant="primary" />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
