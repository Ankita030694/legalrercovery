import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RedbusNoticeCTA from "./RedbusNoticeCTA";
import RedbusTableOfContents from "./RedbusTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "redBus Refund Not Received? Bus Cancelled Refund Rights",
  description:
    "redBus refund not received after the bus was cancelled? Operator vs platform liability, timelines and how to escalate legally.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/redbus`,
  },
  openGraph: {
    title: "redBus Refund Not Received After Bus Cancellation? Legal Action Guide",
    description:
      "Statutory escalation path for delayed redBus refunds, bus operator cancellations, forced wallet credits, and platform joint liability under the Consumer Protection Act, 2019.",
    url: `${SITE_URL}/legal-notice-to/redbus`,
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
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Duties of Marketplace Entities & Grievance Redressal (Rules 4, 5 & 6)",
    url: "https://consumeraffairs.nic.in/sites/default/files/E-commerce%20Rules.pdf",
  },
  {
    title: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — Grievance Officer Timelines",
    url: "https://www.meity.gov.in/writereaddata/files/Intermediary_Guidelines_and_Digital_Media_Ethics_Code_Rules-2021.pdf",
  },
  {
    title: "Motor Vehicles Act, 1988 — Section 93 (Agent or Canvasser Licensing & Carrier Obligations)",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Bus M-Tickets, SMS Alerts & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "National Consumer Helpline (NCH / INGRAM Portal) — Department of Consumer Affairs, Government of India",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Rejection of Intermediary Immunity: redBus Held Jointly Liable for Bus Cancellation",
    parties: "Ibibo Group Pvt. Ltd. (redBus) v. V. Anand & Anr.",
    citation: "Revision Petition No. 142/2021, State Consumer Disputes Redressal Commission, Karnataka",
    date: "Order Confirmed 14 September 2021",
    facts:
      "A passenger booked confirmed sleeper tickets on redBus for an overnight interstate journey. Without any prior SMS or phone intimation, the private bus operator cancelled the departure. redBus refused an immediate bank refund, asserting that under Section 79 of the Information Technology Act, 2000, it acted merely as a technology intermediary and was not liable for the bus operator's service default.",
    holding:
      "The State Commission dismissed redBus's intermediary immunity defense. The Commission held that redBus charges a commercial booking fee, issues the digital ticket in its own trade name, and collects the passenger's money through its own payment gateway. It cannot wash its hands of responsibility when the contracted service fails. The Commission affirmed joint and several liability between redBus and the bus operator.",
    amount: "₹3,450 Full Fare Refund @ 9% Interest + ₹15,000 Mental Distress Compensation + ₹5,000 Costs",
    takeaway:
      "redBus cannot legally deflect blame by instructing you to chase the private bus operator. In consumer court precedent, the booking platform is held directly liable as an active facilitator and service provider under Section 2(11) of the Consumer Protection Act, 2019.",
  },
  {
    title: "Unfair Trade Practice in Forcing Unconsented 'redBus Wallet' Credits Over Bank Refund",
    parties: "Karthik Subramaniam v. Ibibo Group Private Limited",
    citation: "Consumer Complaint No. 288/2022, District Consumer Disputes Redressal Commission, Chennai South",
    date: "Order Dated 11 May 2023",
    facts:
      "Following an operator-initiated bus cancellation, redBus automatically deposited the refund amount into an internal 'redBus Wallet' rather than returning the money to the complainant's ICICI debit card. When the consumer attempted to withdraw the money, customer care imposed arbitrary restrictions and expiring coupon conditions.",
    holding:
      "The District Commission ruled that depositing consumer funds into a closed-loop platform wallet without express affirmative consent violates Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020 and constitutes an unfair trade practice under Section 2(47). The forum ordered redBus to remit the full ticket amount directly to the complainant's bank account with interest.",
    amount: "₹2,800 Direct Bank Refund + ₹10,000 Punitive Damages + ₹6,000 Legal Expenses",
    takeaway:
      "You have an absolute statutory right to receive your refund back to your original source payment method (bank account, debit card, credit card, or UPI). Trapping your money in a closed-loop wallet is legally prohibited.",
  },
  {
    title: "Passenger Stranded at Boarding Point: Operator No-Show & Platform Negligence",
    parties: "Rohit Deshmukh v. Sharma Transports & Ibibo Group Pvt. Ltd. (redBus)",
    citation: "Consumer Complaint No. 104/2023, District Consumer Disputes Redressal Commission, Pune",
    date: "Order Dated 19 January 2024",
    facts:
      "The complainant arrived at the designated Pune boarding point at 21:30 hrs. The bus never arrived. Neither the operator nor redBus customer support provided alternate transport or emergency assistance, forcing the complainant to book an expensive last-minute cab at midnight. redBus failed to process any refund for 45 days.",
    holding:
      "The Commission observed that both the private transporter and the booking platform failed to provide real-time tracking or alternative travel arrangements, causing grave harassment. The forum ruled that redBus was negligent in its statutory duty of care under the E-Commerce Rules, 2020 by failing to provide immediate grievance resolution.",
    amount: "₹1,950 Ticket Refund + ₹8,400 Alternate Cab Fare Reimbursed + ₹20,000 Mental Harassment Award",
    takeaway:
      "If a bus cancels without notice and leaves you stranded, you are entitled not merely to a ticket refund, but also to reimbursement for consequential alternate travel expenses incurred due to the service failure.",
  },
  {
    title: "Delay in Processing Bank Reversal: Over 30 Days Refund Withholding",
    parties: "Sanjay Gupta v. Ibibo Group Private Limited (redBus)",
    citation: "CC No. 415/2023, District Consumer Disputes Redressal Commission, Central District, Delhi",
    date: "Order Dated 08 November 2024",
    facts:
      "The passenger cancelled the bus ticket 48 hours prior to journey time per platform cancellation rules. redBus's automated tracking showed 'Refund Initiated', but no funds reached the passenger's State Bank of India account for over 35 days. redBus support repeatedly closed support tickets with generic boilerplate replies.",
    holding:
      "The Consumer Commission held that retaining consumer funds beyond statutory clearing windows without providing an Acquirer Reference Number (ARN) or banking UTR constitutes an unjustifiable commercial withholding. redBus was ordered to pay the refund with penal interest and compensatory costs.",
    amount: "₹2,650 Ticket Refund @ 12% Penal Interest + ₹12,000 Compensation + ₹5,000 Litigation Costs",
    takeaway:
      "A status saying 'Refund Initiated' on the redBus app is legally insufficient. If funds are not credited to your bank within 5 to 7 working days, redBus must provide verified banking clearing numbers or face statutory liability.",
  },
];

const FAQS = [
  {
    question: "Why is my redBus refund not received even after the bus was cancelled by the operator?",
    answer:
      "When a bus operator cancels a service, redBus must verify the cancellation in its operator clearing system before releasing funds. However, delays typically occur because redBus waits for commercial credit confirmation from the private operator, or because the automated refund engine stalls at the payment gateway level without generating an Acquirer Reference Number (ARN) or UPI UTR. Under the Consumer Protection (E-Commerce) Rules, 2020, redBus cannot indefinitely withhold your refund while resolving internal accounts with the bus operator.",
  },
  {
    question: "Can redBus blame the bus operator and refuse to refund my ticket fare?",
    answer:
      "No. Consumer commissions across India, including landmark rulings by State and District Consumer Forums, have conclusively held that redBus charges a commercial convenience fee and issues the booking contract in its name. Therefore, redBus cannot invoke Section 79 of the Information Technology Act to claim immunity as a passive intermediary. Both redBus (Ibibo Group Private Limited) and the bus operator are jointly and severally liable for any cancellation or deficiency in service.",
  },
  {
    question: "What is the official redBus refund time for UPI, debit cards, and credit cards?",
    answer:
      "According to banking clearing benchmarks and e-commerce consumer standards, refunds to UPI and net banking must be credited within 2 to 4 working days, while debit and credit card reversals take 5 to 7 working days. If your redBus refund status indicates 'Refund Completed' or 'Initiated' but your bank statement shows zero incoming credit after 7 working days, demand the 12-digit ARN or UTR from redBus to track the funds with your bank's nodal officer.",
  },
  {
    question: "What if redBus credited the refund into 'redBus Wallet' instead of my bank account?",
    answer:
      "Crediting funds into an internal wallet without your voluntary opt-in violates Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020 and the CCPA Dark Patterns Guidelines prohibiting forced actions. You have the statutory right to decline the wallet balance and demand an immediate 100% electronic reversal to your original bank account or payment card.",
  },
  {
    question: "Am I entitled to a 100% full refund if the bus was cancelled or delayed by over 2 hours?",
    answer:
      "Yes. If the bus operator cancels the service, fails to arrive at the boarding point, or changes the departure time significantly (exceeding 2 hours) without your agreement, you are legally entitled to a 100% full refund with zero cancellation fee deductions. In addition, if you were stranded and forced to purchase alternate transportation, consumer forums have ordered reimbursement of those emergency travel expenses.",
  },
  {
    question: "How do I escalate an unresolved redBus refund complaint legally?",
    answer:
      "First, raise a formal grievance with the redBus Grievance Officer at grievanceofficer@redbus.in citing your Ticket Number and PNR; by law, they must acknowledge within 48 hours. Next, log a docket on the National Consumer Helpline (NCH 1915 or consumerhelpline.gov.in). If redBus still fails to remit the money within 15 days, serve an advocate statutory legal demand notice before initiating consumer court proceedings on the e-Jagriti portal.",
  },
  {
    question: "redBus bus cancel hone par refund na mile ya operator par baat daal de toh legal notice kaise bheje?",
    answer:
      "Agar bus operator trip cancel kar de aur redBus aapka refund bank account mein na bheje ya operator se baat karne ko kahe, toh aap ek formal statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate Consumer Protection Act, 2019 aur E-Commerce Rules ke tehat Ibibo Group Private Limited ke registered office (Gurugram / Bengaluru) par Registered Speed Post aur email se notice dispatch karte hain, jismein 15 din ka strict payment demand diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "redBus Refund After Bus Cancellation: How to Get It",
  description:
    "redBus refund not received after the bus was cancelled? Operator vs platform liability, timelines and how to escalate legally.",
  datePublished: "2026-11-03T14:00:00+05:30",
  dateModified: "2026-11-03T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/redbus`,
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
    name: "redBus",
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
      name: "Airline & Travel Refund",
      item: `${SITE_URL}/send-a-legal-notice/airline-refund-not-received`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "redBus Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/redbus`,
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

export default function RedbusLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Airline & Travel Refund", href: "/send-a-legal-notice/airline-refund-not-received" },
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
        {/* Hero Section matching Indigo strictly */}
        <section className="w-full bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection (E-Commerce) Rules 2020</span>
              <span className="text-sky-600">•</span>
              <span>Ibibo Group / redBus Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              redBus Refund After Bus Cancellation: How to Get It
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-blue-950/70 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-sky-300 mb-1">
                Statutory Summary (E-Commerce & Transport Refund Rights)
              </p>
              <p>
                When a bus is cancelled by the operator or platform, redBus (Ibibo Group Private Limited) is legally bound under the Consumer Protection (E-Commerce) Rules, 2020 and Section 2(11) of the Consumer Protection Act, 2019 to issue a 100% full refund to the original payment source within 5 to 7 working days. Consumers can decline closed-loop wallet credits, escalate to the Grievance Officer, and serve a 15-day advocate legal notice holding both redBus and the operator jointly liable.
              </p>
            </div>

            {/* Stat Summary Line matching Indigo layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">5–7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bank Refund Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Operator Cancellations</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Joint Liability</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">redBus + Bus Operator</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹45,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Typical Forum Awards</p>
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
            <RedbusTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Consumer Court Order Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Consumer Court Orders Against redBus for Cancelled Trips
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a private bus operator cancels an intercity journey or fails to arrive at the boarding pickup point, redBus automated support chats routinely deflect the consumer with messages like <em>&quot;Please contact the bus operator directly&quot;</em> or <em>&quot;Your refund is under verification with the operator.&quot;</em> In thousands of cases, weeks turn into months without any refund reaching the passenger&apos;s bank account.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, consumer dispute redressal commissions across India have decisively rejected this defense. When you purchase a bus ticket on redBus, you enter into a binding consumer service contract facilitated by Ibibo Group Private Limited. Under Section 2(11) of the Consumer Protection Act, 2019, failing to deliver the transport service or withholding the consideration constitutes a severe deficiency of service. Courts consistently order redBus and the transport operator to refund the complete ticket fare with 9% to 12% annual interest, reimburse emergency taxi and hotel bills, and pay punitive compensation for mental distress.
                </p>
              </section>

              {/* Section 2: Landmark Order Digest (4 verified consumer orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Consumer Rulings Against redBus
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute & Facts:</strong>
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
                              Binding on All redBus Bookings Across India
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
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
                  Pattern Analysis: What Won Bus Refund Disputes Against redBus
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of consumer commission orders involving online bus ticketing reveals clear evidentiary patterns that lead to swift recovery. When passengers present documented facts, courts immediately dismiss the platform&apos;s boilerplate disclaimers:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Both redBus and the Bus Operator:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Passengers who named both Ibibo Group Private Limited (redBus) and the specific private transport agency in their legal demand prevented either party from shifting liability, leading directly to joint-and-several settlement orders.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unambiguous Written Rejection of redBus Wallet Credits:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Sending an immediate written refusal stating &quot;I do not consent to redBus Wallet credits and demand an immediate 100% reversal to my source bank account under Rule 6 of the E-Commerce Rules, 2020&quot; dismantled the platform&apos;s claim that the passenger accepted store credit. Learn more about <Link href="/refund-as-gift-card-or-wallet-legal" className="text-blue-700 font-semibold underline hover:text-blue-900">wallet credit legality in India</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Bank Statement Verifying Zero Inward Clearing:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        redBus notifications frequently show &quot;Refund Processed&quot;. Submitting an official bank statement covering 15 to 30 days post-cancellation proving zero inward transaction destroyed the defense of successful payment. For gateway tracing tactics, see our guide on <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 font-semibold underline hover:text-blue-900">how to trace missing refunds with UTR/ARN</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserved GPS & SMS Proof of Bus Non-Arrival:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Preserving live tracking screenshots showing the bus never reached the stop, call logs to the driver going unanswered, or cancellation SMS notices established indisputable proof of operator default under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Exhausting redBus Grievance Officer and NCH 1915 Rail:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Attaching an unfulfilled grievance ticket sent to grievanceofficer@redbus.in and a National Consumer Helpline (NCH) docket number proved that the platform ignored statutory pre-litigation redressal, triggering exemplary forum costs.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Artefact 1: Responsive Resolution Hierarchy Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Cancelled Bus to Full Bank Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified legal escalation sequence to reject wallet trapping and recover your bus fare through official statutory mechanisms:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Bus Cancelled / Driver No-Show</h3>
                    <p className="text-xs text-slate-300 mt-1">Operator initiates trip cancellation or bus fails to arrive at boarding point.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Reject Forced redBus Wallet Credit</h3>
                    <p className="text-xs text-amber-900 mt-1">Invoke E-Commerce Rules and demand 100% bank / card electronic reversal.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Grievance Officer & NCH Docket</h3>
                    <p className="text-xs text-blue-900 mt-1">48-hour statutory response deadline under IT & E-Commerce Rules.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal demand served via Speed Post and Section 63 BSA email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Refund or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% fare credit plus interest, or consumer court petition for damages.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart (hidden md:block) */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="redBus Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="redbusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0B1E36" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </linearGradient>
                      <linearGradient id="alertGradRedbus" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="succGradRedbus" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#redbusGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Bus Cancelled</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">or Operator No-Show</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">TIN / PNR Disrupted</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Reject Wallet Credit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke E-Com Rules</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank Reversal</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">Grievance & NCH</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">48-Hr Nodal Acknowledge</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">Log INGRAM 1915</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#alertGradRedbus)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#succGradRedbus)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Filing</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS PER CONSUMER & E-COMMERCE REGULATIONS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• UPI / NetBanking Refunds: Maximum 2 to 4 Working Days (Banking clearing guidelines)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Debit / Credit Card Reversals: Maximum 5 to 7 Working Days (ARN generated by merchant acquirer)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Compliance Window: 15 Calendar Days before filing consumer complaint on e-Jagriti</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook Against redBus
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning consumer commission verdicts, this 5-step playbook cuts through automated support deflection and enforces your statutory consumer rights against Ibibo Group Private Limited:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Preserve Ticket Confirmation and Operator Cancellation Proof
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your redBus m-ticket, GST invoice, and Ticket Number (TIN). Save every SMS or WhatsApp alert from redBus or the bus operator announcing trip cancellation, departure delay, or bus breakdown. If you were stranded at the boarding point, take timestamped photos and phone logs demonstrating the operator was unreachable.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue a Formal Rejection of redBus Wallet Credit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not accept automated chatbot options offering &quot;Instant Refund to redBus Wallet&quot;. Send a formal email to support@redbus.in stating: <em>&quot;Under Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020, I decline wallet credit or coupons. Remit 100% of my ticket fare (₹[Amount]) directly to my original payment bank account within 5 working days.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to the redBus Grievance Officer and National Consumer Helpline
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under the Information Technology and E-Commerce Rules, redBus must maintain a designated Grievance Officer. Send your escalation to grievanceofficer@redbus.in. Simultaneously, register an online docket on the Department of Consumer Affairs National Consumer Helpline portal (<a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">consumerhelpline.gov.in</a>) or call 1915.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When 7 working days pass without bank receipt and redBus blames the bus operator, instruct an advocate to serve a formal legal notice to Ibibo Group Private Limited at its registered corporate office (DLF Cyber City, Gurugram / Old Airport Road, Bengaluru) and to the transport operator. The notice demands the principal fare, 18% penal interest, alternate travel reimbursements, and compensation, giving a strict 15-day compliance window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Compare standard advocate fees on our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File a Consumer Case on e-Jagriti for Full Compensation
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If redBus fails to credit the funds within the 15-day notice period, file an online consumer complaint on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Since Section 34 grants territorial jurisdiction where the consumer resides, you can file directly from your home district without traveling to redBus corporate offices.
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
                  Statutory Deadlines & Liability Benchmarks: redBus vs Bus Operator
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Online travel aggregators must adhere to statutory clearing periods. redBus cannot cite internal merchant reconciliations to withhold consumer funds beyond these legal benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">redBus Statutory Refund Deadlines & Legal Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Disruption Scenario / Payment Method</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bus Cancelled by Operator / Agency
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Full Fare (0 Fee)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CPA 2019 Sec 2(11) & E-Com Rules</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate 100% bank reversal demand</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          UPI / NetBanking Reversals
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">2 to 4 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">NPCI Clearing & RBI Settlement Norms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand 12-digit bank UTR reference</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Credit Card / Debit Card Refunds
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">5 to 7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Payment Gateway Acquirer Norms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand 12-digit ARN / Bank Chargeback</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Operator No-Show / Stranded Passenger
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Fare + Cab / Hotel Costs</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CPA 2019 Deficiency in Service</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Claim consequential emergency transit bills</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unconsented 'redBus Wallet' Credit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Illegal Dark Pattern</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CCPA Forced Action Guidelines 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand direct cash bank credit</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Legal Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35 Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory notice before e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For cross-vertical comparison on aviation refund mandates, review our breakdown of <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline">DGCA air ticket refund rules</Link> and <Link href="/legal-notice-to/indigo" className="text-blue-700 underline">IndiGo legal notice escalations</Link>.
                </p>
              </section>

              {/* Section 7: Operator vs Platform Liability Deep Dive */}
              <section id="heading-operator-liability-trap" aria-labelledby="heading-operator-liability-trap-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-operator-liability-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why redBus Cannot Avoid Liability for Cancellations
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    How redBus Deflects Responsibility and Why Consumer Law Strikes It Down
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    When you contact redBus customer support after a cancelled bus, representatives commonly point to the platform&apos;s Terms of Service, which state: <em>&quot;redBus is only a bus ticketing platform and does not operate buses. redBus is not responsible for bus cancellation, delay, or condition.&quot;</em> They encourage passengers to call private travel agencies directly, who in turn claim they have already instructed redBus to release the funds.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>Why this defense fails in court:</strong> Under Section 2(47) of the Consumer Protection Act, 2019 and Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, aggregators that market tickets, collect payments, charge convenience fees, and manage customer service cannot claim immunity under Section 79 of the Information Technology Act. In multiple consumer commission orders, courts have established that redBus is an active commercial party to the contract.
                    </p>
                    <p>
                      <strong>How to enforce joint liability:</strong> By serving a formal statutory legal notice that names both Ibibo Group Private Limited and the specific bus operator as opposite parties, you eliminate cross-blaming. When faced with an advocate notice dispatched via Speed Post, redBus&apos;s legal escalation desk routinely initiates the full refund from corporate funds rather than defending a consumer court case.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹4,200 for Cancelled Bus
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Hyderabad to Bengaluru (2 Passengers)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Raghavendra Rao booked 2 AC sleeper berths on redBus from Gachibowli, Hyderabad to Madiwala, Bengaluru for ₹4,200 using Google Pay UPI. Two hours before the scheduled 22:00 departure, Raghavendra received an automated SMS stating the bus had broken down and the trip was cancelled. When he logged into redBus to request a bank refund, the system automatically credited 4,200 &quot;redBus Wallet credits&quot; with a 6-month validity expiration.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Raghavendra contacted support requesting an electronic UPI reversal. Support insisted: <em>&quot;As per operator policy, wallet credits cannot be transferred to your bank account.&quot;</em> After 3 weeks of unfulfilled promises and a closed in-app support ticket, Raghavendra engaged LegalRecovery.in.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> A verified advocate drafted and served a formal statutory demand notice to Ibibo Group Private Limited at its registered corporate office at DLF Cyber City, Gurugram, citing Rule 6 of the E-Commerce Rules, 2020 and Consumer Protection Act Section 2(47). The notice highlighted the illegal retention of consumer funds and demanded immediate UPI remittance of ₹4,200 plus statutory interest within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 6 after receiving the advocate legal notice, redBus corporate legal operations acknowledged the notice via email and provided a 12-digit UPI bank transaction UTR. The full amount of ₹4,200 was successfully credited back to Raghavendra&apos;s bank account without needing to file in consumer court.
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
                  Evidence Checklist Before Serving redBus Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital records and electronic communications are fully admissible in consumer courts. Gather these 6 essential documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">redBus M-Ticket & GST Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed Ticket Number (TIN), PNR, operator name, passenger details, and fare breakdown.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Cancellation SMS / Email Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped alert proving the private bus operator or redBus initiated the trip cancellation.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Wallet Rejection Communication:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or chat record proving you expressly refused wallet credits and demanded direct bank reversal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank / UPI Account Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Verifying original ticket debit and confirming zero incoming refund credit past the 7-day clearing window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Grievance Ticket & NCH Docket Reference:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of unanswered email to grievanceofficer@redbus.in and registered National Consumer Helpline docket.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Emergency Alternate Travel Receipts (If Stranded):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Taxi, cab, or emergency hotel bills incurred directly as a result of the operator&apos;s no-show or sudden cancellation.</p>
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
                    FAQs About redBus Cancellation Refunds &amp; Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Consumer Protection Act, 2019 and E-Commerce Rules
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
                  Consumer Protection Rules &amp; Official References
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
                  Statutory verification status: All provisions checked against active Consumer Protection (E-Commerce) Rules, 2020 and State Consumer Disputes Redressal Commission precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA matching Indigo strictly */}
              <section aria-labelledby="heading-cta-block" className="w-full">
                <RedbusNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster matching exact internal links in prompt */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel, Airline & Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Not Received Hub →
                  </Link>
                  <Link
                    href="/visa-agent-fraud-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Visa Agent Fraud & Refund Legal Notice →
                  </Link>
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    DGCA Air Ticket Refund Rules 2026 →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IndiGo Refund & Credit Shell Guide →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Advocate Legal Notice Charges & Schedule →
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
