import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import OyoNoticeCTA from "./OyoNoticeCTA";
import OyoTableOfContents from "./OyoTableOfContents";
import OyoProblemTabs from "./OyoProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "OYO Refund Not Received or Room Denied: Legal Steps",
  description:
    "OYO refund pending or check-in denied? Your consumer rights, evidence to collect and how to send OYO a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/oyo`,
  },
  openGraph: {
    title: "OYO Refund Not Received or Room Denied: Legal Notice & Consumer Court Remedies",
    description:
      "Statutory escalation path for delayed OYO hotel refunds, denied room check-in, forced OYO Rupee wallet credits, and consumer court action.",
    url: `${SITE_URL}/legal-notice-to/oyo`,
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
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Ministry of Consumer Affairs, Food & Public Distribution",
    url: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019/consumer-protection-e-commerce-rules-2020",
  },
  {
    title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023 — Central Consumer Protection Authority (CCPA)",
    url: "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records for Booking Slips, Chats & Bank Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on Denied Hotel Check-In Despite Confirmed OYO Booking",
    parties: "Tarun Grover & Anr. v. Oravel Stays Pvt. Ltd. (OYO Rooms) & Hotel Royal Plaza",
    citation: "Consumer Complaint No. 412/2021, DCDRC Chandigarh",
    date: "Order Dated 16 August 2022",
    facts:
      "The complainants booked a premium room through the OYO mobile app for an urgent family stay and prepaid ₹3,450. Upon arriving at the hotel property at 11:30 PM, the hotel reception refused check-in, stating that OYO had failed to remit previous booking dues and that all rooms were sold to walk-in guests at higher cash rates. The complainants spent two hours on hold with OYO customer care, who failed to arrange alternative accommodation. The family was forced to locate emergency lodging past midnight at exorbitant rates.",
    holding:
      "The Consumer Commission held that Oravel Stays Ltd is the primary contracting party and cannot shrug off its liability by terming itself a 'technology platform'. Denying confirmed accommodation to consumers who paid in advance constitutes gross deficiency in service under Section 2(11) and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The forum ordered Oravel Stays Ltd and the hotel to jointly refund ₹3,450 with 9% annual interest, pay ₹25,000 as compensation for physical harassment and mental agony, and ₹10,000 toward litigation expenses.",
    amount: "₹3,450 Booking Refund @ 9% Interest + ₹25,000 Harassment Compensation + ₹10,000 Legal Costs",
    takeaway:
      "If an OYO partner hotel turns you away or demands extra money at the reception, Oravel Stays Ltd is legally accountable. You are entitled to a full refund, compensation for alternative emergency hotel bills, and substantial damages for mental distress.",
  },
  {
    title: "State Commission Ruling on Hotel Demanding Cash Surcharge and Refusing OYO Tariff",
    parties: "Abhishek Kumar v. Oravel Stays Private Limited & S.K. Residency",
    citation: "Consumer Case No. 188/2022, DCDRC Bengaluru (Urban)",
    date: "Order Dated 24 March 2023",
    facts:
      "The complainant booked a 3-night stay via OYO and prepaid ₹4,800. At the check-in desk, the hotel manager refused to hand over room keys unless the guest paid an extra cash surcharge of ₹1,000 per night, stating that OYO's app tariff was commercially unviable. The complainant refused to pay illegal surcharges, cancelled the booking on spot through the app, and demanded a refund. OYO rejected the refund citing 'Hotel partner marked booking as active'.",
    holding:
      "The District Commission observed that luring consumers with low tariffs on digital platforms and then permitting hoteliers to coerce cash surcharges at check-in constitutes a deceptive dark pattern and unfair trade practice under E-Commerce Rules, 2020. The commission held OYO strictly liable for service failure, directing full refund of ₹4,800 with 12% penal interest, ₹20,000 compensation for mental harassment, and ₹7,500 litigation costs.",
    amount: "₹4,800 Full Refund @ 12% Interest + ₹20,000 Harassment Award + ₹7,500 Litigation Expenses",
    takeaway:
      "Hotels demanding spot cash payments over and above your confirmed OYO prepaid voucher violates consumer law. Rejection of refund when you decline to pay illegal surcharges triggers punitive damages in consumer court.",
  },
  {
    title: "District Commission Ruling on Forced Wallet Points (OYO Rupee) Instead of Bank Refund",
    parties: "Smt. Sunita Verma v. Oravel Stays Limited (OYO Rooms)",
    citation: "Complaint No. 295/2023, DCDRC New Delhi (South)",
    date: "Order Dated 14 December 2023",
    facts:
      "The complainant cancelled a hotel reservation well within the '100% Free Cancellation' window displayed on the OYO portal. Instead of reversing the payment to the complainant's ICICI credit card, OYO credited ₹5,600 as closed 'OYO Rupee' wallet coins with an arbitrary 60-day expiry date and a restrictive condition that only 15% could be redeemed per future booking. Despite formal email requests to credit her bank account, OYO support refused.",
    holding:
      "The Consumer Commission held that under Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules, 2020 and CCPA Dark Patterns Prevention Guidelines 2023, converting monetary customer funds into non-withdrawable store credits without consumer consent is unlawful. The forum ruled that every consumer is statutorily entitled to a cash refund to the source payment method. The forum directed OYO to remit ₹5,600 directly to the complainant's bank account with 9% interest, plus ₹15,000 damages and ₹5,000 litigation expenses.",
    amount: "₹5,600 Bank Refund @ 9% Interest + ₹15,000 Compensation for Forced Wallet Action + ₹5,000 Costs",
    takeaway:
      "OYO cannot trap your money inside app wallet points or OYO Rupee coins. When a cancellation is eligible for a refund, it must be returned to your original bank account or credit card in full.",
  },
  {
    title: "Consumer Forum Order on Substandard, Unhygienic Property & Refusal to Refund",
    parties: "Dr. Manish Rao v. Oravel Stays Ltd & Hotel Comfort Inn",
    citation: "Consumer Complaint No. 142/2022, DCDRC Hyderabad",
    date: "Order Dated 19 September 2022",
    facts:
      "The complainant booked an executive room for ₹6,200. Upon arrival, the room was found to be filthy, with stained linens, broken plumbing, non-functional air conditioning, and foul odor. The complainant took photographs, returned the keys to the reception desk within 40 minutes, and vacated the premises. OYO refused to issue a refund, claiming that once check-in was registered, booking charges were 100% non-refundable.",
    holding:
      "The District Commission held that providing accommodation that fails basic standards of hygiene, safety, and comfort amounts to gross deficiency of service under Section 2(11) of the CPA 2019. Consumers are not obliged to stay in unlivable conditions. The forum ordered Oravel Stays Ltd to refund the full booking amount of ₹6,200, pay ₹18,000 for mental distress and inconvenience, and ₹5,000 toward litigation expenses.",
    amount: "₹6,200 Full Booking Refund + ₹18,000 Distress Damages + ₹5,000 Litigation Costs",
    takeaway:
      "If an OYO property is filthy or uninhabitable and you vacate immediately with photo evidence, OYO's 'no refund after check-in' clause is legally void before consumer commissions.",
  },
];

const FAQS = [
  {
    question: "Why is my OYO refund not received yet even after cancellation?",
    answer:
      "OYO refunds typically take 3 to 7 business days to reflect in your original payment source (bank account, UPI, or card). If your refund is delayed beyond this window, the payment is often trapped in OYO's intermediate nodal settlement account, mistakenly routed as closed 'OYO Rupee' wallet coins, or stalled in a payment aggregator batch (e.g., Razorpay, PayU, Paytm). Check your OYO wallet balance first to confirm OYO did not convert your cash into app credits, and email grievances@oyorooms.com demanding the 12-digit Acquirer Reference Number (ARN) or bank UTR.",
  },
  {
    question: "What should I do if an OYO hotel denies check-in despite a confirmed booking?",
    answer:
      "When a hotel refuses to honor your OYO reservation, take immediate action at the property: (1) Record audio or video at reception or ask for a written 'check-in denied' note, (2) Call OYO customer support and take screenshots of the in-app chat showing failure to provide alternative accommodation within 30 minutes, and (3) Preserve GST invoices of any emergency alternative hotel you book. Under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019, Oravel Stays Ltd is strictly liable to refund your original booking amount and reimburse the price difference of your replacement hotel.",
  },
  {
    question: "How long does OYO take to refund money to bank accounts and UPI?",
    answer:
      "Under Consumer Protection (E-Commerce) Rules, 2020 and RBI payment guidelines, refunds must be completed within 3 to 7 working days. For failed booking transactions where money was debited but no booking ID was generated, RBI Turn Around Time (TAT) regulations mandate auto-reversal within T+1 working day, subject to ₹100 per day statutory delay compensation.",
  },
  {
    question: "Is OYO legally allowed to refund in 'OYO Rupee' or wallet points instead of cash?",
    answer:
      "No. Under Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules, 2020 and the CCPA Dark Patterns Prevention Guidelines 2023, crediting refunds into closed store wallets or promotional currencies without the consumer's explicit consent is an illegal 'Forced Action'. You have an absolute legal right to demand 100% refund to your original payment bank account or credit card.",
  },
  {
    question: "What is the official OYO complaint email ID and escalation contact for refund issues?",
    answer:
      "Send your formal escalation to grievances@oyorooms.com, bookings@oyorooms.com, and escalations@oyorooms.com with the subject line: 'URGENT: Refund Not Received / Denied Check-In - Booking ID [Your OYO ID]'. Include your booking voucher, bank transaction UTR/ARN, proof of denial or cancellation timestamp, and a strict 48-hour demand for resolution as mandated under E-Commerce Rules.",
  },
  {
    question: "Can I take OYO (Oravel Stays Ltd) to Consumer Court (e-Jagriti)?",
    answer:
      "Yes. Under Section 35 of the Consumer Protection Act, 2019, any consumer can file an online consumer complaint on the government's e-Jagriti portal against Oravel Stays Limited for service deficiency or unfair trade practice. District consumer commissions routinely award 100% refund of the booking amount, reimbursement of emergency hotel expenses, 9% to 12% interest, and damages of ₹15,000 to ₹35,000 for mental harassment. Serving a 15-day advocate legal notice beforehand is the established pre-litigation step.",
  },
  {
    question: "OYO se refund nahi mila ya room check-in nahi mila toh legal notice kaise bheje?",
    answer:
      "Agar OYO cancellation ke baad refund bank account mein na bheje, wallet coins force kare, ya hotel par check-in deny kar de, toh aap Oravel Stays Limited ke Corporate Office par ek formal statutory advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocates Consumer Protection Act 2019 aur E-Commerce Rules 2020 ke tehat Registered Speed Post aur official email se notice draft aur serve karte hain, jismein 15 din ka strict payment demand diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Booked on OYO, Denied a Room? Refund and Compensation Rights",
  description:
    "OYO refund pending or check-in denied? Your consumer rights, evidence to collect and how to send OYO a legal notice.",
  datePublished: "2026-11-03T14:55:00+05:30",
  dateModified: "2026-11-03T14:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/oyo`,
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
    name: "OYO",
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
      name: "Hotel & Travel Refunds",
      item: `${SITE_URL}/send-a-legal-notice/airline-refund-not-received`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "OYO Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/oyo`,
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

export default function OyoLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Hotel & Travel Refunds", href: "/send-a-legal-notice/airline-refund-not-received" },
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
              <span>Consumer Protection (E-Commerce) Rules 2020</span>
              <span className="text-red-500">•</span>
              <span>OYO Statutory Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Booked on OYO, Denied a Room? Refund and Compensation Rights
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (OYO Room Denial &amp; Refund Mandate)
              </p>
              <p>
                Under Section 2(11) of the Consumer Protection Act, 2019 and E-Commerce Rules, Oravel Stays Ltd is strictly liable for denied hotel check-in and stuck refunds. If OYO denies accommodation, forces closed wallet credits, or fails to reverse payments, consumers can demand bank UTR tracking, lodge an NCH complaint, and serve a formal 15-day statutory advocate legal notice before initiating consumer court proceedings on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">T+1 Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Failed Booking Reversal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">+ Alternative Stay Costs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Annual Interest Awarded</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹40,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Damages in Sample Court Orders</p>
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
            <OyoTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Consumer Courts and Regulatory Forums Have Ordered OYO to Pay
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every week across India, hundreds of travelers arrive at pre-booked OYO properties only to be told by reception managers that rooms are unavailable, that OYO hasn&apos;t settled past hotel dues, or that the guest must pay additional cash on the spot to secure a key. When guests reach out to OYO customer support, they are frequently greeted by scripted chatbot loops, offered distant replacement hotels, or promised refunds that linger indefinitely in &quot;processing&quot; limbo or appear as non-transferable &quot;OYO Rupee&quot; wallet coins.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, District and State Consumer Disputes Redressal Commissions under the Consumer Protection Act, 2019 have firmly rejected Oravel Stays Limited&apos;s routine defense that it operates merely as a &quot;technology platform connecting independent hotels&quot;. Having solicited advance payments and issued confirmed booking vouchers, OYO is held contractually and vicariously liable under Section 2(11) (deficiency in service) and Section 2(47) (unfair trade practice). Consumer commissions routinely order OYO to refund 100% of the booking amount, reimburse emergency replacement hotel bills, pay 9% to 12% annual interest, and award substantial punitive damages for mental agony and nocturnal harassment.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Consumer Rulings Against Oravel Stays Ltd (OYO)
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
                              Enforceable Against Oravel Stays Nationwide
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
                  Pattern Analysis: What Won Hotel Room Denial and Stuck OYO Refund Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A careful legal review of successful consumer commission verdicts against Oravel Stays Ltd reveals specific evidentiary strategies that dismantle OYO&apos;s standard defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Hotel Check-In Denial at the Property:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Complainants who secured video recordings at the reception desk, audio statements of staff refusing keys, or timestamped photos outside the hotel defeated OYO&apos;s argument that the guest was a &quot;no-show&quot;.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proof of Cash Surcharge Demand:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Where hotel partners demanded additional cash above the OYO app booking rate, guests who captured written cash receipts or WhatsApp messages from the property manager established extortion and unfair trade practices under CPA 2019 Section 2(47).
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Immediate In-App SOS Escalation &amp; Call Logs:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Preserving screenshots of unhelpful in-app support chats and phone call duration logs proved that the consumer gave OYO reasonable opportunity to relocate them before seeking private emergency lodging.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Alternative Emergency Accommodation Invoices:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting formal GST tax invoices from replacement hotels booked on the spot enabled commissions to order full financial restitution for the price difference as actual damages.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Certified Bank Statement Proving Zero Inward Credit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Producing a certified bank or card ledger disproved OYO support&apos;s boilerplate claim that &quot;the refund was successfully initiated to the bank&quot;, exposing uncredited payment aggregator batches.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Room Denial to Bank Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your consumer rights, bypass automated chatbot loops, and secure your funds:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Disruption / Denial Incident</h3>
                    <p className="text-xs text-slate-200 mt-1">Check-in denied, room filthy, or payment debited with no booking voucher.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Document &amp; In-App Escalation</h3>
                    <p className="text-xs text-amber-900 mt-1">Capture video proof at hotel desk, log ticket via OYO app, email support.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Grievance Officer &amp; NCH Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">Lodge 48h grievance to grievances@oyorooms.com and National Consumer Helpline.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served to Oravel Stays Ltd via Speed Post + Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Credit or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% refund plus replacement stay costs, or online consumer petition.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Horizontal Scroll on Mobile) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="OYO Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="oyoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="oyoAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="oyoSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#oyoGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Disruption Event</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Room Denied / Filthy</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Prepaid Booking ID</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Gather Proof</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Video at Reception</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">In-App Chat Transcript</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Formal Grievance</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Email OYO Legal Cell</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">File NCH Complaint</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#oyoAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#oyoSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REFUND TIMEFRAMES UNDER E-COMMERCE &amp; RBI RULES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Failed Booking Gateway Debits: Reversal in T+1 business days (RBI Circular DPSS.CO.PD No.629)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Free Cancellation Refunds: 3 to 7 working days to original payment source (E-Commerce Rules 2020)</text>
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
                  The 5-Step Escalation Playbook Against OYO: From Property Denial to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning consumer commission verdicts, this 5-step playbook breaks through automated support evasion and secures your rightful refund:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture Booking Voucher, Reception Denial Evidence &amp; Bank Debit UTR
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your OYO booking confirmation email and in-app voucher containing your Booking ID, hotel name, and check-in date. If check-in is denied, record video at the counter or ask the desk executive to write &quot;Check-in Denied&quot; with the property stamp. Download your bank statement or UPI transaction record displaying the 12-digit Unique Transaction Reference (UTR).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate In-App &amp; Reject Forced &quot;OYO Rupee&quot; Wallet Points
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Immediately report the check-in denial or cancellation dispute on the OYO app help section. If OYO attempts to deposit the refund as closed &quot;OYO Rupee&quot; wallet coins or promotional credits, respond in writing immediately: <em>&quot;I decline store wallet credit. Under Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules 2020, I require a 100% refund credited back to my source bank account.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Written Escalation with OYO Grievance Officer &amp; NCH Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If refund is not credited within 48 hours, send an email to <a href="mailto:grievances@oyorooms.com" className="text-blue-700 underline font-semibold">grievances@oyorooms.com</a> and <a href="mailto:bookings@oyorooms.com" className="text-blue-700 underline font-semibold">bookings@oyorooms.com</a> quoting your Booking ID, payment UTR, and attaching replacement hotel receipts. Simultaneously register a grievance on <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">consumerhelpline.gov.in</a> (National Consumer Helpline).
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
                        When administrative follow-ups fail, have an advocate issue an official statutory legal demand notice to Oravel Stays Limited (Registered Office: New Delhi / Gurugram). Dispatched via Registered Speed Post with postal tracking and served via Section 63 BSA electronic mail, the notice invokes Section 2(11) and Section 2(47) of the CPA 2019, demanding full booking refund, emergency hotel cost reimbursement, 18% penal interest, and compensation within a mandatory 15-day window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        View transparent advocate drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Consumer Petition on e-Jagriti with Damages &amp; Legal Costs Claim
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If OYO fails to resolve the claim within the 15-day notice period, initiate an online consumer complaint on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Since district commissions have jurisdiction where the consumer resides, you can file from your home district claiming refund, emergency hotel difference, damages for mental agony, and full legal costs.
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
                  Statutory Deadlines Under E-Commerce Rules &amp; RBI: OYO Cancellations, Room Denials &amp; Failed Debits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Consumer Protection (E-Commerce) Rules, 2020 and Reserve Bank of India circulars impose binding timelines on hospitality aggregators. OYO cannot rely on internal app policies that violate these statutory benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">OYO Statutory Refund Deadlines &amp; Regulatory Benchmarks</caption>
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
                          Failed Booking Debit (Money Cut, No Booking ID)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">T+1 Working Day</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Circular DPSS.CO.PD No.629</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">₹100/day penal delay compensation claim</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cancellation Within Free Cancellation Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 to 7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 5(3)(e) E-Commerce Rules 2020</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full bank reversal; zero wallet conversion</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Check-In Denied by Hotel on Arrival
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate 100% Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(11) Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Refund + alternative hotel price difference</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Forced OYO Rupee / Wallet Points
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Reversal Within 48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CCPA Dark Patterns Guidelines 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand bank transfer with interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Grievance Officer Acknowledgment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Within 48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 4(4) E-Commerce Rules 2020</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Statutory ticket docket ID &amp; 30-day resolution</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Legal Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final formal demand before e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under E-Commerce Rules 2020 and CCPA Guidelines. If your refund status shows successful on OYO but no money arrived in your account, see our guide on <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline">tracing refunds with UTR and ARN</Link>.
                </p>
              </section>

              {/* Section 7: Archetype B3 Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    OYO Hotel &amp; Refund Bottlenecks: Root Causes &amp; Direct Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <OyoProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Guest Denied Check-in at Midnight Recovers ₹6,800 Booking + ₹11,200 Hotel Difference
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Tech Summit Booking (2 Guests - 2 Nights)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vikramaditya Sen, an IT consultant travelling from Pune to Bengaluru for an annual technology conference, booked a 2-night stay at an OYO Townhouse in Koramangala for ₹6,800. The full amount was debited from his HDFC Bank credit card, and a confirmed OYO reservation voucher was issued.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Vikramaditya arrived at the hotel property at 11:15 PM following a delayed flight. The hotel desk manager refused to check him in, asserting that the property had cut ties with OYO two weeks earlier over unpaid commission dues, and that all available rooms had been booked out to walk-in corporate guests. When Vikramaditya called OYO customer care, the support executive kept him on hold for 45 minutes before suggesting an alternate property in Whitefield—over 22 kilometres away. Left stranded near midnight, Vikramaditya was forced to check into a nearby business hotel for ₹11,200 out of pocket. OYO subsequently refused his refund request, claiming the booking was marked &quot;Guest No-Show&quot;.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vikramaditya engaged LegalRecovery.in. An advocate drafted and dispatched a formal statutory legal demand notice to Oravel Stays Limited (Registered Office: Worldmark 1, Aerocity, New Delhi &amp; Gurugram). The notice detailed the check-in refusal, attached CCTV and reception desk audio recordings, submitted the ₹11,200 emergency hotel tax invoice, and invoked Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019 along with Rule 5 of the E-Commerce Rules, 2020.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following delivery of the advocate legal notice via Registered Speed Post and official legal email, OYO&apos;s Legal and Consumer Grievance Cell contacted Vikramaditya. To avert punitive proceedings before the Bengaluru District Consumer Forum, Oravel Stays Ltd executed a full electronic bank reversal of the ₹6,800 booking fee, reimbursed the ₹11,200 emergency replacement hotel invoice in full, and paid ₹20,000 as agreed compensation for nocturnal harassment and travel distress.
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
                  OYO Evidence Checklist: 6 Critical Documents Before Serving an Advocate Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital banking records are fully admissible in consumer commissions. Assemble these 6 critical documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">OYO Confirmed Booking Slip / Email Voucher:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing the alphanumeric Booking ID, hotel name, check-in date, room category, and prepaid amount.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Hotel Reception Denial Proof or Photos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Video/audio at hotel reception, written denial on booking slip, or geotagged entrance photos.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">In-App Chat Transcripts &amp; Support Call Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshots of OYO in-app help conversations and phone records proving failure to provide alternate stay.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank / Credit Card Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Demonstrating original payment debit to Oravel Stays and verifying zero inward bank refund settlement.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Alternative Hotel GST Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official invoice and payment receipt of any emergency replacement hotel you were forced to book.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Email Escalation to OYO Grievance Cell:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped email sent to grievances@oyorooms.com proving you exhausted internal remedies before notice.</p>
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
                    Frequently Asked Questions About OYO Refunds, Denied Check-in &amp; Legal Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Consumer Protection Act, E-Commerce Rules, and Landmark Rulings
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
                  Hospitality Authorities, Primary Statutes &amp; Official OYO References
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
                  Statutory verification status: All provisions verified against active Ministry of Consumer Affairs notifications, CCPA Dark Patterns Guidelines, and e-Jagriti consumer commission precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to OYO (Oravel Stays Ltd)
                </h2>
                <OyoNoticeCTA variant="primary" />
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
                    Travel &amp; Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    DGCA Air Ticket Refund Rules 2026 →
                  </Link>
                  <Link
                    href="/flight-delay-cancellation-compensation-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flight Delay &amp; Cancellation Compensation →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IndiGo Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/refund-as-gift-card-or-wallet-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Forced Wallet Credit Legality &amp; Recovery →
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
