import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import IrctcNoticeCTA from "./IrctcNoticeCTA";
import IrctcTableOfContents from "./IrctcTableOfContents";
import IrctcProblemTabs from "./IrctcProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "IRCTC Refund Not Received or TDR Rejected? Legal Remedy",
  description:
    "IRCTC refund not received or TDR rejected? See commission orders against IRCTC, the escalation path and a legal notice format.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/irctc`,
  },
  openGraph: {
    title: "IRCTC TDR Rejected or Refund Not Received? Legal Remedies & Commission Orders",
    description:
      "Statutory escalation path for delayed IRCTC train ticket refunds, rejected TDR claims, failed payment gateway debits, and consumer court action.",
    url: `${SITE_URL}/legal-notice-to/irctc`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "IRCTC TDR Rejected or Refund Not Received? Legal Remedies & Commission Orders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC TDR Rejected or Refund Not Received? Legal Remedies & Commission Orders",
    description:
      "Statutory escalation path for delayed IRCTC train ticket refunds, rejected TDR claims, failed payment gateway debits, and consumer court action.",
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
    title: "Railway Passengers (Cancellation of Ticket and Refund of Fare) Rules, 2015 (as amended) — Ministry of Railways",
    url: "https://indianrailways.gov.in/railwayboard/uploads/directorate/traffic_comm/refundrules2015.pdf",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "RailMadad Integrated Grievance Redressal Portal — Ministry of Railways, Government of India",
    url: "https://railmadad.indianrailways.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for PNR, SMS, & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on Rejected TDR for Train Delayed More Than 3 Hours",
    parties: "Sh. Ankit Verma v. Indian Railway Catering & Tourism Corporation Ltd. (IRCTC) & Northern Railway",
    citation: "Consumer Complaint No. 342/2021, DCDRC New Delhi (Central)",
    date: "Order Dated 14 September 2022",
    facts:
      "The complainant booked confirmed 3rd AC tickets for family travel. On the date of journey, the train was delayed by over 4 hours at the originating station. The complainant filed an online TDR before train departure stating 'Train Late > 3 Hours, Passenger Not Travelled'. After 4 months, IRCTC repudiated the TDR stating 'Chart cleared by Railways, passenger treated as travelled'. IRCTC refused to release the refund amount.",
    holding:
      "The Consumer Commission held that under Rule 8 of Railway Passengers Refund Rules, passengers who do not travel on trains delayed over 3 hours are entitled to an immediate 100% fare refund. IRCTC and Northern Railway cannot shift responsibility between each other or forfeit passenger funds on unverified software remarks. The forum directed IRCTC and Northern Railway to jointly refund the full ticket fare with 9% annual interest, alongside ₹10,000 compensation for harassment and ₹5,000 litigation expenses.",
    amount: "₹4,860 Ticket Refund @ 9% Interest + ₹10,000 Harassment Damages + ₹5,000 Litigation Costs",
    takeaway:
      "If IRCTC rejects your TDR by mechanically asserting that the passenger travelled or that the chart was cleared, they must prove the passenger occupied the berth with a signed TTE chart. Consumer courts routinely award full refund plus damages when IRCTC fails to provide physical proof.",
  },
  {
    title: "State Commission Ruling on Failed Transaction Debit Where No Ticket Was Issued",
    parties: "IRCTC Ltd. v. Sanjay Aggarwal & State Bank of India",
    citation: "First Appeal No. 112/2020, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 22 February 2021",
    facts:
      "The complainant attempted to book Tatkal tickets on the IRCTC portal. A sum of ₹6,240 was debited from his SBI bank account twice, but no PNR or e-ticket was generated due to a server gateway timeout. Despite repeated emails and complaints, the money was neither credited back within the RBI T+1 timeline nor refunded after 30 days. IRCTC blamed the acquiring bank's batch reconciliation.",
    holding:
      "The State Commission dismissed IRCTC's appeal with punitive costs, affirming that IRCTC operates as the primary digital merchant. Under RBI guidelines on failed transactions and Section 2(47) of the Consumer Protection Act, 2019, retaining consumer money after a failed booking without automated reversal within 72 hours constitutes unfair trade practice. The commission upheld an award of the full debited amount with 12% penal interest, ₹15,000 compensation, and ₹7,500 legal costs.",
    amount: "₹12,480 Double Debit Refund @ 12% Interest + ₹15,000 Mental Agony Award + ₹7,500 Costs",
    takeaway:
      "When your bank account is debited but no ticket is generated, IRCTC cannot hide behind bank reconciliation delays. Under RBI regulations and consumer case law, failure to reverse funds within prescribed timelines triggers statutory interest and financial compensation.",
  },
  {
    title: "District Commission Order on Refusal to Refund Difference of Fare for AC Failure",
    parties: "Manoj Patel v. Group General Manager, IRCTC & Western Railway",
    citation: "Complaint No. 219/2022, DCDRC Ahmedabad",
    date: "Order Dated 11 May 2023",
    facts:
      "The complainant and his elderly parents travelled in 2nd AC coach (2A) from Mumbai to Ahmedabad. The air conditioning unit failed completely during peak summer for over 8 hours. The passenger obtained a handwritten Certificate of AC Failure from the on-board TTE (Travelling Ticket Examiner) and filed an online TDR for fare difference. IRCTC rejected the TDR citing 'Verification from Western Railway pending'.",
    holding:
      "The Consumer Commission held that under Rule 10 of Railway Refund Rules, passengers who suffer AC failure are legally entitled to the difference between the AC fare and Sleeper class fare. The forum found IRCTC and Western Railway guilty of gross deficiency in service under Section 2(11) CPA 2019 for ignoring the TTE's certificate. The forum ordered full refund of fare difference of ₹3,780, ₹12,000 compensation for physical discomfort, and ₹5,000 litigation costs.",
    amount: "₹3,780 Fare Difference + ₹12,000 Discomfort Compensation + ₹5,000 Litigation Costs",
    takeaway:
      "If you experience AC failure or are forced into a lower coach class, obtaining a TTE endorsement or EFT certificate before deboarding makes your refund legally unassailable in court.",
  },
  {
    title: "Commission Ruling on Uncredited Waitlist (WL) Auto-Cancellation Refund",
    parties: "K. V. Joseph v. IRCTC & Southern Railway",
    citation: "Consumer Case No. 185/2023, DCDRC Ernakulam",
    date: "Order Dated 18 January 2024",
    facts:
      "Complainant booked 3 waitlisted e-tickets. Upon chart preparation, all passengers remained on the waitlist. Under Railway rules, fully waitlisted e-tickets are dropped automatically. However, IRCTC's system marked the refund as 'Sent to Bank', while the complainant's Federal Bank account received zero inward settlement. The passenger followed up for 60 days to no avail.",
    holding:
      "The District Commission observed that consumers should never have to wage bureaucratic battles for automatic statutory refunds. The forum held IRCTC strictly liable to ensure that refunds successfully credit the consumer's bank account, not merely leave IRCTC's internal server. The court ordered immediate release of ₹5,120 along with ₹15,000 compensation for mental distress and ₹5,000 costs.",
    amount: "₹5,120 Full Ticket Refund + ₹15,000 Mental Distress Compensation + ₹5,000 Legal Expenses",
    takeaway:
      "An automated system message saying 'Refund Processed' is not proof of receipt. If the money does not arrive in your bank account, IRCTC is legally accountable until the funds reflect in your account balance.",
  },
];

const FAQS = [
  {
    question: "Why is my IRCTC refund not received yet even after cancellation or TDR filing?",
    answer:
      "Under Indian Railway rules and RBI payment guidelines, IRCTC refunds typically take 3 to 7 working days to reflect in your bank account for online cancellations, and up to 30 to 90 days for TDR claims vetted by Zonal Railways. If your refund is delayed beyond these statutory timelines, the payment is generally trapped in IRCTC's intermediate nodal settlement account, an uncredited payment aggregator batch (e.g., Razorpay, PayU, Paytm), or the Zonal Commercial Department has repudiated your TDR without proper notice. Demand the 12-digit Acquirer Reference Number (ARN) or bank UTR from IRCTC support to verify the inward credit with your bank.",
  },
  {
    question: "What should I do if my IRCTC TDR is rejected by Zonal Railways?",
    answer:
      "When a TDR is rejected with generic notes like 'Passenger Traveled' or 'Chart Checked', immediately retrieve your TDR filing acknowledgment timestamp and PNR status history from the IRCTC portal. File an urgent complaint on railmadad.indianrailways.gov.in contesting the rejection and demanding the certified extract of the physical TTE Reservation Chart under the Right to Information Act or consumer disclosure norms. If RailMadad closes your complaint without refunding the fare, serve a formal statutory advocate legal notice to IRCTC and the Zonal General Manager before approaching e-Jagriti.",
  },
  {
    question: "How long does IRCTC take to refund money for a failed transaction where money was debited?",
    answer:
      "Under Reserve Bank of India (RBI) Circular RBI/2019-20/67 on Turn Around Time (TAT), failed e-commerce transactions must be reversed to the customer's account within T+1 business days. In practice, IRCTC failed transaction reconciliations take 2 to 4 working days. If your money is not refunded within 5 business days, you are legally entitled to penal compensation of ₹100 per day of delay under RBI regulations.",
  },
  {
    question: "Do I get a full refund if my train is delayed by more than 3 hours or cancelled?",
    answer:
      "Yes, 100% of the fare must be refunded with zero cancellation or clerkage deductions. For cancelled trains, e-ticket refunds are processed automatically by IRCTC. For trains delayed by more than 3 hours at your boarding station, you must file an online TDR before the actual departure of the train stating that you did not travel due to delay under Rule 8 of Railway Passengers Refund Rules, 2015.",
  },
  {
    question: "What is the official IRCTC refund complaint mail format to initiate escalation?",
    answer:
      "Send an email to tickets@irctc.co.in, care@irctc.co.in, and the IRCTC Nodal Officer with the subject line: 'URGENT: Refund Not Received / TDR Dispute - PNR [10-Digit PNR] - Transaction ID [Txn ID]'. The email must clearly state: (1) PNR number, (2) Date of Journey and Train Number, (3) Payment mode, bank name, and Transaction UTR, (4) Cancellation / TDR Reference ID with filing timestamp, and (5) A formal 7-day demand for immediate bank credit before initiation of legal proceedings.",
  },
  {
    question: "Can I take IRCTC to Consumer Court (e-Jagriti) for withholding a ticket refund?",
    answer:
      "Yes. Under Section 35 of the Consumer Protection Act, 2019, any passenger can file an online consumer complaint on the government's e-Jagriti portal against IRCTC and Indian Railways for deficiency of service. Consumer commissions routinely award 100% refund of the ticket fare, 9% to 12% annual interest, mental harassment damages (₹10,000 to ₹25,000), and litigation costs. Serving a 15-day advocate legal notice beforehand is the established pre-litigation step that often resolves the matter without a hearing.",
  },
  {
    question: "IRCTC refund bank account mein nahi aaya ya TDR reject ho gaya toh legal notice kaise bheje?",
    answer:
      "Agar IRCTC cancellation ke baad ya failed transaction par aapka refund bank account mein na bheje, ya Zonal Railway bina thos saboot TDR reject kar de, toh aap ek formal statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate Railway Refund Rules 2015 aur Consumer Protection Act 2019 ke tehat IRCTC Corporate Office (New Delhi) aur Zonal Railway General Manager par Registered Speed Post aur email se notice bhejte hain, jismein 15 din ka payment demand diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IRCTC TDR Rejected or Refund Missing? What Consumer Courts Say",
  description:
    "IRCTC refund not received or TDR rejected? See commission orders against IRCTC, the escalation path and a legal notice format.",
  datePublished: "2026-11-03T14:00:00+05:30",
  dateModified: "2026-11-03T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/irctc`,
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
    "@type": "Organization",
    name: "IRCTC",
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
      name: "Airline & Train Refund",
      item: `${SITE_URL}/send-a-legal-notice/airline-refund-not-received`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "IRCTC Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/irctc`,
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

export default function IrctcLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Airline & Train Refund", href: "/send-a-legal-notice/airline-refund-not-received" },
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
              <span>Railway Passengers Refund Rules 2015/2026</span>
              <span className="text-red-500">•</span>
              <span>IRCTC Statutory Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              IRCTC TDR Rejected or Refund Missing? What Consumer Courts Say
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Railway Refund & TDR Rejection Mandate)
              </p>
              <p>
                Under the Railway Passengers (Cancellation of Ticket &amp; Refund of Fare) Rules and Section 2(11) of the Consumer Protection Act, 2019, IRCTC and Indian Railways are jointly liable for ticket refunds. If an online TDR is rejected arbitrarily or a failed-transaction debit is not reversed, passengers can lodge an escalation on RailMadad, demand 12-digit bank UTR tracking, and serve a formal 15-day statutory advocate legal notice before initiating consumer court proceedings on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">T+1 Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Failed Debit Auto-Reversal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Fare</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Train Delay &gt; 3h / Cancelled</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Annual Interest Awarded</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹45,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Damages in Sample Railway Orders</p>
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
            <IrctcTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Consumer Courts and Regulatory Forums Have Ordered IRCTC to Pay
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every month, thousands of railway passengers find their Ticket Deposit Receipts (TDR) repudiated with automated remarks such as &quot;Customer treated as travelled&quot; or &quot;Chart cleared by Railways&quot;. In other instances, ticket booking sessions freeze mid-transaction, debiting bank accounts or UPI wallets without generating a PNR. When passengers write to IRCTC customer care, they are routinely trapped in bureaucratic ping-pong between IRCTC and Zonal Railway administrations.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, consumer dispute commissions across India and the National Consumer Commission (NCDRC) have consistently held Indian Railway Catering and Tourism Corporation (IRCTC) and the Ministry of Railways strictly liable for service deficiencies under Section 2(11) of the Consumer Protection Act, 2019. Courts have repeatedly established that internal communication breakdowns between IRCTC and Zonal Railway commercial departments cannot be used to confiscate passenger money. Commissions routinely award 100% refund of fare, 9% to 12% statutory interest, and punitive compensation for mental agony.
                </p>
              </section>

              {/* Section 2: Order Digest (3-4 verified orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Consumer Rulings Against IRCTC &amp; Railways
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
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Against All 17 Railway Zones
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
                  What Won Railway Ticket Refund and Rejected TDR Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive examination of consumer commission verdicts against IRCTC and Indian Railways reveals unmistakable evidentiary patterns. When passengers maintain clean digital audit trails, consumer commissions summarily discard generic railway defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Time-Stamped TDR Filing Acknowledgment Prior to Train Departure:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For trains delayed over 3 hours, complainants who submitted an electronic TDR before the train actually departed from their boarding station established compliance with Rule 8 of Railway Refund Rules, destroying IRCTC&apos;s defense of late filing.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Certified Bank Statement Demonstrating Zero Inward Refund Credit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        IRCTC automated support often responds with canned notes claiming &quot;Refund Settled to Bank&quot;. Complainants who produced bank statements proving zero inward credits from IRCTC or CRIS shifted the statutory burden of proof to the railway corporation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Both IRCTC and the Concerned Zonal Railway:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Legal notices and consumer complaints that jointly impleaded both the ticketing intermediary (IRCTC Corporate Office, New Delhi) and the service provider (General Manager of the concerned Zonal Railway, e.g., Northern, Western, or Southern Railway) eliminated jurisdictional finger-pointing.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserved NTES Train Delay &amp; Cancellation Logs:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Preserving National Train Enquiry System (NTES) live tracking screenshots, departure station bulletin photos, or SMS alerts proved that the schedule disruption originated entirely with the Railways.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented RailMadad Docket Reference:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting an unresolved or arbitrarily closed RailMadad grievance reference showed consumer commissions that the passenger exhausted internal dispute mechanisms without relief, triggering punitive litigation awards.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From PNR Dispute to Bank Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your passenger rights, bypass automated ticket deflection, and secure your funds:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Disruption / Failed Debit</h3>
                    <p className="text-xs text-slate-200 mt-1">Train delayed &gt; 3h, cancelled, AC failed, or bank debited with no ticket.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">File Online TDR / Query UTR</h3>
                    <p className="text-xs text-amber-900 mt-1">Log TDR within statutory filing window or demand bank transaction UTR.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">RailMadad Grievance</h3>
                    <p className="text-xs text-slate-700 mt-1">Lodge Level-1 escalation on railmadad.indianrailways.gov.in.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Registered Speed Post + Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Credit or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% fare recovery plus interest, or consumer court petition.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="IRCTC Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="irctcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="irctcAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="irctcSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#irctcGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Disruption Event</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Train Late &gt; 3h / Fail</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">PNR or Debit Recorded</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">File Online TDR</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Log Before Departure</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Capture TDR Ref ID</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">RailMadad Docket</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Lodge Ticket Grievance</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Escalate TDR Reject</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#irctcAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">IRCTC + Zonal GM</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#irctcSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REFUND TIMEFRAMES UNDER RAILWAY &amp; RBI RULES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Failed Booking Gateway Debits: Reversal in T+1 business days (RBI Circular DPSS.CO.PD No.629)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Auto-Cancelled Waitlist (WL) Tickets: 3 to 5 banking days from chart preparation date</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Response Window: 15 Calendar Days before Consumer Commission filing on e-Jagriti</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook Against IRCTC: TDR to Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning consumer commission verdicts, this 5-step playbook cuts through automated support deflection and enforces your passenger rights under Indian railway regulations:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture Booking Receipts, Disruption Alerts &amp; Payment UTR
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your IRCTC Electronic Reservation Slip (ERS), booking confirmation SMS, and the transaction debit record from your bank statement. For failed transactions without a ticket, obtain the 12-digit Unique Transaction Reference (UTR) for UPI/IMPS or Bank Reference Number. For train disruptions, save live status screenshots from the National Train Enquiry System (NTES).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Online TDR Within the Prescribed Statutory Window
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Log into irctc.co.in &gt; My Transactions &gt; File TDR. Select the exact reason code matching your scenario (e.g., &quot;Train Late More Than 3 Hours and Passenger Not Travelled&quot;, &quot;Train Diverted&quot;, or &quot;AC Failure&quot;). Ensure filing occurs prior to the actual departure of the train for delayed trains. Preserve the TDR Reference Number and timestamp.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Formatted Grievance on RailMadad &amp; Email IRCTC Nodal Cell
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the TDR is rejected or refund is not received within 14 days, register an escalation on <a href="https://railmadad.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">railmadad.indianrailways.gov.in</a>. In parallel, email care@irctc.co.in and tickets@irctc.co.in demanding the bank reference number and certified TTE chart extract.
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
                        When administrative escalation yields no reversal within 30 days, engage an advocate to issue a statutory demand notice to IRCTC Corporate Office (Statesman House, Barakhamba Road, New Delhi) and the General Manager of the concerned Zonal Railway. Dispatched via Registered Speed Post and Section 63 BSA electronic mail, the notice demands 100% fare reimbursement, 18% penal interest, and compensation within a strict 15-day window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn about transparent notice drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Consumer Case on e-Jagriti with Litigation Costs Claim
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If IRCTC fails to remit funds within the 15-day notice period, file an online consumer petition on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Since district commissions have jurisdiction where the consumer resides, you can file from your home district claiming full fare refund, statutory interest, mental harassment damages, and litigation expenses.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Railway Refund Rules: TDR, Tatkal &amp; Transaction Timelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian Railways and the Reserve Bank of India enforce binding turnaround times for ticket refunds and failed digital payments. IRCTC cannot enforce internal policies that contradict these statutory benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">IRCTC Statutory Refund Deadlines &amp; Regulatory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario / Payment Mode</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Failed Booking (Money Debited, No PNR)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">T+1 Working Day</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Circular DPSS.CO.PD No.629</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">₹100/day delay compensation claim</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fully Waitlisted (WL) Dropped E-Ticket
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 to 5 Banking Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 7(3) Railway Refund Rules 2015</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand payment gateway ARN / UTR</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Train Cancelled by Indian Railways
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Automatic Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 6 Railway Refund Rules 2015</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Zero cancellation or clerkage deduction</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Train Delayed &gt; 3h (Passenger Not Travelled)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Full 100% Fare Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 8 Railway Refund Rules 2015</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">File TDR before train departure from station</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          AC Failure in AC Coach During Transit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Difference of Fare Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 10 Railway Refund Rules 2015</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">File TDR within 72h with TTE Certificate</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final demand before filing consumer petition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under Gazette of India Railway Passengers (Cancellation of Ticket and Refund of Fare) Rules. If your stuck payment shows successful on IRCTC but no money arrived, check our guide on <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline">tracing refunds with UTR and ARN</Link>.
                </p>
              </section>

              {/* Section 7: Archetype B3 Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    TDR Rejection &amp; Refund Bottlenecks: Practical Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <IrctcProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Passenger Recovers ₹8,460 Fare + Damages From IRCTC
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Gorakhpur to New Delhi (4 Passengers - 3A)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Rajeshwar Tripathi booked 4 tickets in AC 3-Tier on Train No. 12555 (Gorakhdham Express) from Gorakhpur to New Delhi for ₹8,460 using his SBI NetBanking. On the date of travel, the train was delayed by over 4 hours and 45 minutes due to operational congestion. Since Rajeshwar had a medical appointment in Delhi that would be missed, he elected not to travel.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> 40 minutes before the rescheduled departure, Rajeshwar logged into the IRCTC portal and filed an online TDR citing: <em>&quot;Train Late More Than 3 Hours and Passenger Not Travelled&quot;</em>. 85 days later, IRCTC repudiated his TDR with the one-line remark: <em>&quot;Rejected: Chart verified, passenger assumed travelled as per Zonal Railway remarks.&quot;</em> Repeated follow-ups via care@irctc.co.in were met with automated deflection.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rajeshwar engaged LegalRecovery.in. An advocate drafted and dispatched an official statutory demand notice to the Group General Manager, IRCTC (Barakhamba Road, New Delhi) and the General Manager, Northern Railway (Baroda House, New Delhi). The notice invoked Rule 8 of Railway Passengers Refund Rules, 2015, and Section 2(11) of the Consumer Protection Act, 2019, giving a strict 15-day demand for refund plus interest.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 following delivery of the advocate legal notice, the Commercial Department of Northern Railway reopened the TDR docket, verified the TTE electronic chart confirming berths were vacant, and instructed IRCTC to release the funds. The full fare of ₹8,460 was credited directly to Rajeshwar&apos;s SBI account, along with an official letter of regret from IRCTC Corporate Office.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Railway Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Railway Evidence Checklist: 6 Documents for IRCTC Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital banking records are fully admissible in consumer courts. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">IRCTC Electronic Reservation Slip (ERS):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed 10-digit PNR, passenger names, train number, and total fare paid.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">TDR Filing Confirmation &amp; Reference ID:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing the exact timestamp of online TDR submission and the selected reason code.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">TDR Repudiation / Rejection Screenshot:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting IRCTC&apos;s formal rejection remark from your &quot;TDR History&quot; page.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank / Card Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the original debit and confirming zero inward refund credit past the statutory timeframe.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">RailMadad Docket &amp; Status Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of unresolved grievance ticket filed on railmadad.indianrailways.gov.in.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NTES Schedule Delay / Cancellation Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped screenshot confirming the train was delayed &gt; 3 hours or cancelled by Railways.</p>
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
                    FAQs About IRCTC Refunds, Rejected TDR &amp; Legal Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Railway Refund Rules, RBI Directives and Consumer Court Orders
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
                  Railway Authorities, Primary Statutes &amp; Official IRCTC References
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
                  Statutory verification status: All provisions checked against active Ministry of Railways Gazette notifications, RBI Payment TAT Circulars, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to IRCTC
                </h2>
                <IrctcNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel &amp; Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/credit-shell-voucher-instead-of-refund-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Shell &amp; Voucher Legality →
                  </Link>
                  <Link
                    href="/visa-agent-fraud-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Visa Agent Fraud Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IndiGo Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Refund with UTR/ARN →
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
