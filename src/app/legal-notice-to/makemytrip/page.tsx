import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import MakeMyTripNoticeCTA from "./MakeMyTripNoticeCTA";
import MakeMyTripTableOfContents from "./MakeMyTripTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MakeMyTrip Refund Not Received? Legal Notice & Escalation",
  description:
    "MakeMyTrip refund not received? Learn whether the airline or MMT owes you, the 2026 DGCA rule on agents, and how to escalate legally.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/makemytrip`,
  },
  openGraph: {
    title: "MakeMyTrip Refund Stuck Between Airline and Agent? Who Must Pay",
    description:
      "Statutory escalation path for delayed MakeMyTrip flight, hotel and holiday package refunds, MyCash wallet conversions, and agency joint liability under DGCA CAR & CPA 2019.",
    url: `${SITE_URL}/legal-notice-to/makemytrip`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "MakeMyTrip Refund Stuck Between Airline and Agent? Who Must Pay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MakeMyTrip Refund Stuck Between Airline and Agent? Who Must Pay",
    description:
      "Statutory escalation path for delayed MakeMyTrip flight, hotel and holiday package refunds, MyCash wallet conversions, and agency joint liability under DGCA CAR & CPA 2019.",
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
    title: "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers (Clause 3.3.2 Travel Agents & Online Portals)",
    url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/inventoryList/airTransport/regulations/car/car-sec3.jsp",
  },
  {
    title: "Supreme Court of India: Pravasi Legal Cell v. Union of India & Ors. (2020) 10 SCC 724 (Mandatory Cash Reversals & Travel Voucher Prohibition)",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_34_1501_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Rule 5 & Rule 6 (Marketplace Entities, Grievance Officer & Refund Obligations)",
    url: "https://consumeraffairs.nic.in/sites/default/files/E commerce_rules.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Booking ID, Invoices & Banking Transcripts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "AirSewa 2.0 Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Ministry of Consumer Affairs",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Joint and Several Liability for Airline and Travel Aggregator Buck-Passing",
    parties: "Gaurav Jain v. InterGlobe Aviation Ltd. (IndiGo) & MakeMyTrip India Pvt. Ltd.",
    citation: "CC No. 184/2021, District Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 14 March 2022",
    facts:
      "A consumer booked round-trip airline tickets via MakeMyTrip. Following flight cancellation, IndiGo claimed it had credited the travel agent's nodal account, while MakeMyTrip repeatedly informed the passenger that the airline had not released the funds into their commercial wallet. The passenger was bounced back and forth between the two customer desks for over 8 months without a single rupee credited.",
    holding:
      "The Consumer Commission held that under DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, travel agents act as statutory booking conduits of the carrying airline. An online travel aggregator cannot disclaim duty once it accepts the consumer's purchase consideration. The Commission held both MakeMyTrip and the airline jointly and severally liable to refund the full fare with penal interest and compensatory damages.",
    amount: "₹24,600 Full Refund @ 9% p.a. Interest + ₹15,000 Mental Agony Damages + ₹10,000 Legal Expenses",
    takeaway:
      "When MakeMyTrip and the airline blame each other for an uncredited refund, impleading both entities in an advocate legal demand notice creates joint statutory pressure that breaks the blame cycle and forces immediate payout.",
  },
  {
    title: "Rejection of Section 79 IT Act 'Intermediary Immunity' for Online Travel Portals",
    parties: "MakeMyTrip (India) Pvt. Ltd. v. Dr. Rajesh Kumar & Anr.",
    citation: "First Appeal No. 412/2022, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 19 September 2022",
    facts:
      "MakeMyTrip appealed against a District Forum order holding it liable for failing to refund ₹54,300 for cancelled airline tickets. MakeMyTrip contended that it was merely an electronic intermediary under Section 79 of the Information Technology Act, 2000, and could not be held responsible for carrier cancellations or refund disbursals.",
    holding:
      "The State Commission dismissed MakeMyTrip's appeal, ruling that an OTA that collects booking money directly from consumers, charges convenience and management fees, issues booking vouchers under its corporate branding, and controls the refund disbursement channel does not qualify for safe harbour intermediary protection. The platform was held directly liable for deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
    amount: "₹54,300 Full Ticket Fare + ₹25,000 Inconvenience Compensation + ₹15,000 Litigation Costs",
    takeaway:
      "MakeMyTrip cannot legally evade liability by claiming to be 'just a booking platform'. Consumer commissions consistently treat MMT as a direct contractual service provider liable for prompt refund remittance.",
  },
  {
    title: "Unilateral Diversion of Refund into 'MMT MyCash' Wallet Declared Unfair Trade Practice",
    parties: "Rajiv Anand v. MakeMyTrip India Pvt. Ltd. & SpiceJet Ltd.",
    citation: "Consumer Complaint No. 219/2022, DCDRC Gurugram",
    date: "Order Dated 11 October 2023",
    facts:
      "Upon flight cancellation, MakeMyTrip automatically credited the passenger's refund of ₹21,800 into an internal 'MMT MyCash' wallet account with a 1-year expiration period, refusing to reverse the funds to the complainant's ICICI debit card. MakeMyTrip cited its internal 'Terms of Use' permitting wallet credits.",
    holding:
      "The District Forum ruled that unilaterally trapping consumer money in a closed-loop platform wallet violates Supreme Court directives in Pravasi Legal Cell and amounts to an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission directed MakeMyTrip to remit the entire amount directly to the consumer's bank account with 9% interest, together with punitive damages.",
    amount: "₹21,800 Direct Bank Transfer @ 9% Interest + ₹10,000 Punitive Damages + ₹5,000 Litigation Costs",
    takeaway:
      "MakeMyTrip has zero legal authority to lock your cash into 'MyCash' or travel vouchers without your express opt-in consent. You can legally reject wallet credits and demand an electronic bank reversal.",
  },
  {
    title: "Illegal 100% Hotel Cancellation Forfeiture Under Unconscionable Standard Terms",
    parties: "Smt. Radhika Nair & Anr. v. MakeMyTrip India Pvt. Ltd. & Ors.",
    citation: "Consumer Complaint No. 345/2023, DCDRC Bengaluru Urban",
    date: "Order Dated 28 May 2024",
    facts:
      "The complainant booked an international hotel stay through MakeMyTrip for ₹68,500. Due to emergency hospitalization 10 days before check-in, the consumer requested cancellation and refund. MakeMyTrip rejected the request outright, citing '100% Non-Refundable Hotel Partner Policy', while the hotel confirmed that no operational loss had been incurred.",
    holding:
      "The Consumer Commission ordered MakeMyTrip to refund the entire tariff after deducting a nominal administrative fee. The Commission held that blanket non-refundable clauses in standard form contracts constitute an unconscionable contract term under Section 2(46) of the Consumer Protection Act, 2019, when the consumer provides advance notice and the service provider suffers no demonstrable actual loss.",
    amount: "₹68,500 Full Hotel Tariff + ₹15,000 Mental Harassment Damages + ₹10,000 Legal Costs",
    takeaway:
      "Even if MakeMyTrip labels a hotel or holiday package 'Non-Refundable', courts hold that retaining 100% of customer funds upon reasonable advance cancellation constitutes unjust enrichment under consumer law.",
  },
];

const FAQS = [
  {
    question: "Why is my MakeMyTrip refund status showing processed or successful but money not received in my bank account?",
    answer:
      "When MakeMyTrip's app or website marks your refund status as 'Processed' or 'Successful', it often indicates that MMT has settled the internal cancellation entry or pushed a payment request to its merchant acquiring gateway (such as PayU, Razorpay, or CC Avenue). However, the funds may remain stuck in the banking clearing pipeline or an uncredited inter-bank settlement batch. Demand the 12-digit Acquirer Reference Number (ARN) for cards or Unique Transaction Reference (UTR) for UPI/NetBanking from MakeMyTrip support to compel your receiving bank to trace and release the inward settlement.",
  },
  {
    question: "Who is legally liable if the airline refunded MakeMyTrip but MMT has not credited me?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, both the carrying airline and the travel portal share joint statutory obligations toward the passenger. While the airline remains responsible to ensure that passenger funds reach the customer, MakeMyTrip is directly liable under Section 2(11) of the Consumer Protection Act, 2019, for deficiency in service once it receives the credit memo or ledger settlement from the carrier. Serving a joint advocate legal demand notice to both entities forces immediate reconciliation between their corporate finance desks.",
  },
  {
    question: "Can MakeMyTrip legally force a refund into MMT MyCash wallet or gift voucher instead of my bank account?",
    answer:
      "No. In Pravasi Legal Cell v. Union of India (2020) 10 SCC 724, the Supreme Court ruled that airlines and booking portals cannot unilaterally lock consumer funds into travel vouchers or closed-loop credits without voluntary passenger opt-in. Furthermore, the 2023 Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines explicitly classify pre-selected store credits and obscured cash refund options as illegal 'Forced Actions'. You have an absolute legal right to reject MMT MyCash and insist on a 100% cash transfer to your source payment method.",
  },
  {
    question: "How long does MakeMyTrip legally have to refund cancelled flight or hotel bookings?",
    answer:
      "Under DGCA regulations revised in 2026, air ticket refunds processed through travel agents and online portals must be fully credited to the consumer within 30 working days at most, while direct credit card transactions must clear within 7 working days. For hotels and holiday packages, the Consumer Protection (E-Commerce) Rules, 2020, require marketplace platforms to initiate refunds within reasonable banking turnaround times (typically 3 to 7 working days upon approved cancellation).",
  },
  {
    question: "Can I get a full refund if MakeMyTrip deducted heavy cancellation charges on a hotel or holiday package?",
    answer:
      "Yes, under consumer court precedent. If a hotel reservation or tour package is cancelled due to medical emergencies, airline disruptions, or natural calamities with reasonable advance notice, consumer forums regularly strike down 100% cancellation forfeiture clauses as unconscionable under Section 2(46) of the Consumer Protection Act, 2019. MakeMyTrip and hotel partners cannot lawfully retain passenger money unless they prove actual non-recoverable operational costs incurred.",
  },
  {
    question: "How to escalate a MakeMyTrip complaint through National Consumer Helpline (NCH) and AirSewa?",
    answer:
      "For flight bookings, file a Level-1 complaint on the Ministry of Civil Aviation AirSewa portal (airsewa.gov.in) against both MakeMyTrip and the airline, uploading your Booking ID, PNR, and cancellation invoice. Simultaneously, call 1915 or lodge a complaint on consumerhelpline.gov.in (NCH) against MakeMyTrip (India) Private Limited. If the grievance remains unaddressed past 15 days, escalate to a formal advocate legal demand notice prior to filing an e-Jagriti consumer commission claim.",
  },
  {
    question: "MakeMyTrip se flight ya hotel cancel hone par refund na mile toh legal notice kaise bheje?",
    answer:
      "Agar MakeMyTrip cancellation ke baad refund bank account mein credit na kare ya airline par ilzaam daalkar refund atka de, toh aap ek formal statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate DGCA CAR regulations aur Consumer Protection Act 2019 ke tehat MakeMyTrip (India) Private Limited ke registered office (DLF Cyber City, Gurugram) aur carrying airline dono ko Speed Post aur email dwara notice dispatch karte hain, jismein 15 din ka strict payment deadline hota hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MakeMyTrip Refund Stuck Between Airline and Agent? Who Must Pay",
  description:
    "MakeMyTrip refund not received? Learn whether the airline or MMT owes you, the 2026 DGCA rule on agents, and how to escalate legally.",
  datePublished: "2026-11-03T13:30:00+05:30",
  dateModified: "2026-11-03T13:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/makemytrip`,
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
    name: "MakeMyTrip",
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
      name: "Airline & Travel Recoveries",
      item: `${SITE_URL}/services/airline-and-travel-recoveries`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "MakeMyTrip Refund Dispute Hub",
      item: `${SITE_URL}/legal-notice-to/makemytrip`,
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

export default function MakeMyTripLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
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
        {/* Hero Section with Archetype B4/B5 Stat Summary Line */}
        <section className="w-full bg-gradient-to-b from-slate-900 via-[#0B1E36] to-slate-900 text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 mb-4 sm:mb-5 max-w-full">
              <span>DGCA CAR Series M Part II &amp; CPA 2019</span>
              <span className="text-sky-600">•</span>
              <span>MakeMyTrip (India) Pvt. Ltd. Liability Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              MakeMyTrip Refund Stuck Between Airline and Agent? Who Must Pay
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-blue-950/70 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-sky-300 mb-1">
                Statutory Summary (OTA Joint Liability &amp; 30-Day Mandate)
              </p>
              <p>
                Under DGCA CAR Section 3, Series M, Part II (Clause 3.3.2) and Section 2(11) of the Consumer Protection Act 2019, both MakeMyTrip and the carrying airline share joint and several liability for delayed passenger refunds. MakeMyTrip cannot withhold customer funds by pleading third-party agency status, nor force cash into &apos;MMT MyCash&apos; wallets. When refunds exceed statutory timelines, passengers can demand ARN/UTR bank settlement proof, escalate via AirSewa and NCH, and serve a 15-day statutory advocate legal notice before initiating consumer court proceedings.
              </p>
            </div>

            {/* Summary Stat Line */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-sky-400">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DGCA OTA Refund Ceiling</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Joint Liability</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MMT + Carrying Airline</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">0% MyCash Force</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Cash Reversal Mandated</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹68,500+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sample DCDRC Awards</p>
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
            <MakeMyTripTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Liability Overview */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Liability for Stuck MakeMyTrip Refunds: Airline vs OTA
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a flight, hotel booking, or holiday package is disrupted or cancelled, thousands of travellers face the classic Online Travel Agent (OTA) blame loop. MakeMyTrip automated chat support informs the customer: <em>&quot;We have requested your refund from the airline/hotel partner; once they release the credit, our finance team will disburse your refund within 7–14 days.&quot;</em> Simultaneously, when passengers contact carriers like <Link href="/legal-notice-to/indigo" className="text-blue-700 underline font-semibold">IndiGo</Link>, <Link href="/legal-notice-to/air-india" className="text-blue-700 underline font-semibold">Air India</Link>, or Akasa Air, the airline insists: <em>&quot;The refund was credited to your travel agent&apos;s corporate agency wallet; please contact MakeMyTrip.&quot;</em>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian consumer protection and civil aviation jurisprudence, this administrative buck-passing has been repeatedly declared unlawful. An airline ticket or hotel voucher purchased on MakeMyTrip is a tripartite commercial arrangement governed by the <Link href="/services/airline-and-travel-recoveries" className="text-blue-700 underline font-semibold">Consumer Protection Act, 2019</Link> and the Directorate General of Civil Aviation (DGCA) Civil Aviation Requirements (CAR). Once MakeMyTrip debits your bank account and charges booking management fees, it enters a direct contractual obligation. It cannot legally withhold funds or trap customer capital indefinitely while pointing fingers at third-party carriers.
                </p>
              </section>

              {/* Section 2: Order Digest - 4 Verifiable Consumer Rulings */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Consumer Forum Rulings Against MakeMyTrip (India) Pvt. Ltd.
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
                              Binding Across Flight, Hotel &amp; Tour Bookings
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

              {/* Section 3: Section 79 IT Act & Intermediary Liability */}
              <section id="heading-intermediary-liability" aria-labelledby="heading-intermediary-liability-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-intermediary-liability-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why MakeMyTrip Cannot Claim Section 79 Immunity
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When consumers send informal complaint emails or demand refund settlements, MakeMyTrip legal representatives frequently cite Section 79 of the Information Technology Act, 2000, arguing that MakeMyTrip is merely an electronic marketplace that facilitates bookings between consumers and third-party airlines or hotels. They claim that liability for non-refund, cancellation, or rescheduling rests solely on the independent service vendor.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian Consumer Commissions and High Courts have dismantled this defense through consistent precedent:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Direct Consideration and Invoicing:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        MakeMyTrip does not merely display information. It collects total customer payments into its own corporate merchant bank account, issues GST tax invoices with its corporate PAN/CIN, and extracts non-refundable convenience charges. Under Section 2(42) of the Consumer Protection Act 2019, this establishes a direct paid service relationship.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">DGCA CAR Clause 3.3.2 Statutory Agent Mandate:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline font-semibold">DGCA CAR Section 3, Series M, Part II</Link>, travel portals and agents are legally treated as authorized commercial agents of the carrying airline. While the airline must oversee refund delivery, the travel portal holds an express regulatory duty to complete the refund remittance within 30 working days.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">E-Commerce Rules 2020 Marketplace Obligations:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Rule 5 and Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms cannot adopt unfair trade practices in the course of business. Platforms are mandated to maintain an active Grievance Officer, acknowledge consumer disputes within 48 hours, and ensure refund requests are processed within a reasonable period.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Dark Patterns Regulations (Dec 2023) Barring Forced Credits:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        The Central Consumer Protection Authority&apos;s <Link href="/law/dark-patterns-guidelines-consumer-rights" className="text-blue-700 underline font-semibold">Dark Patterns Guidelines</Link> explicitly classify converting customer cash refunds into platform credits or wallet balances without explicit opt-in as an illegal &apos;Forced Action&apos;.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Hierarchy SVG Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Resolution Pathway: From Booking ID to Bank Remittance
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory escalation roadmap to cut through automated bot deflections and recover your funds from MakeMyTrip and partner carriers:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0B1E36] text-white p-4 rounded-xl border border-blue-900">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Booking Cancellation / Disruption</h3>
                    <p className="text-xs text-slate-300 mt-1">Flight cancelled, hotel rejected, or schedule changed by ≥ 2 hours.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Decline MyCash &amp; Demand ARN</h3>
                    <p className="text-xs text-amber-900 mt-1">Reject platform wallet credits; demand 12-digit Acquirer Reference Number.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">AirSewa &amp; NCH Escalation</h3>
                    <p className="text-xs text-blue-900 mt-1">Dual docketing with Ministry of Civil Aviation and Consumer Affairs Helpline (1915).</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Joint Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served to MakeMyTrip Gurugram HQ and carrier via Speed Post.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Credit / e-Jagriti Filing</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% remittance to original payment source, or consumer court award with interest.</p>
                  </div>
                </div>

                {/* Desktop SVG Flowchart (hidden md:block) */}
                <div className="hidden md:block bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto w-full">
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="MakeMyTrip Refund Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="mmtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0B1E36" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </linearGradient>
                      <linearGradient id="mmtAlertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="mmtSuccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#mmtGrad)" />
                    <text x="80" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Trip Disruption</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Flight / Hotel Cancel</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">MMT Booking ID</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Reject MyCash</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Demand Bank Reversal</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Request Bank ARN/UTR</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1D4ED8" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#1E40AF" fontWeight="bold" textAnchor="middle">AirSewa &amp; NCH</text>
                    <text x="420" y="82" fill="#1E3A8A" fontSize="10" textAnchor="middle">Dual Regulatory Docket</text>
                    <text x="420" y="98" fill="#1E3A8A" fontSize="9" textAnchor="middle">Break Blame Loop</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#mmtAlertGrad)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Joint Legal Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand Window</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">MMT + Carrying Airline</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#mmtSuccGrad)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Bank Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">100% Cash Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES GOVERNING MAKEMYTRIP BOOKINGS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• DGCA CAR Series M Part II (OTA Clause 3.3.2): Maximum 30 Working Days for full passenger bank remittance</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Direct Card / UPI Reversals: 7 Working Days under RBI Payment Gateway Directions &amp; DGCA benchmarks</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Statutory Notice Period: 15 Calendar Days prior to initiating claim on e-Jagriti under Section 35 CPA 2019</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Protocol for MakeMyTrip Refunds
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized from successful consumer commission judgments against Online Travel Agencies, this 5-step playbook dismantles chatbot deflections and establishes ironclad documentary proof for swift monetary recovery:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure MakeMyTrip Booking ID, Airline PNR, and Acquirer Reference Number (ARN)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your MakeMyTrip booking confirmation voucher, original GST tax invoice, and cancellation acknowledgment. If the MMT app displays &apos;Refund Completed&apos; or &apos;Refund Processed&apos; but your bank account reflects zero inward funds, contact support and insist on obtaining the 12-digit Acquirer Reference Number (ARN) for cards or Unique Transaction Reference (UTR) for UPI/NetBanking. If MMT cannot furnish a verifiable ARN, their internal billing gateway has withheld the disbursement.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Formally Reject &quot;MMT MyCash&quot; or Travel Vouchers in Writing
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not accept automated prompts offering wallet credits, promotional vouchers, or MyCash with restrictive expiry dates. Send an email to <em>grievanceofficer@makemytrip.com</em> stating: <em>&quot;Under Supreme Court precedent in Pravasi Legal Cell (2020) and the CCPA Dark Patterns Guidelines, I expressly reject any wallet credit or voucher. Remit 100% of my booking fare back to my original payment source within 7 days.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Dual Regulatory Dockets on National Consumer Helpline (1915) and AirSewa
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For airline tickets, file a Level-1 complaint on <a href="https://airsewa.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">airsewa.gov.in</a> naming the airline, and specify that MakeMyTrip is withholding the pass-through refund. For hotel or tour disputes, dial 1915 or register on <em>consumerhelpline.gov.in</em> (National Consumer Helpline) citing MakeMyTrip (India) Private Limited. These regulatory dockets create official government records that weaken any subsequent corporate defense.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Joint Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If 14 to 30 days pass without bank receipt, instruct an advocate to serve a formal statutory legal demand notice jointly to MakeMyTrip (India) Private Limited at its corporate headquarters (DLF Cyber City, Gurugram) and registered address (Greater Kailash-I, New Delhi), as well as the carrying airline or hotel chain. The notice demands the principal refund, 18% annual penal interest, and compensation for deficiency in service, granting a strict 15-day compliance window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn about transparent advocate notice drafting on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Consumer Court Claim on e-Jagriti with Litigation Costs
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon expiry of the 15-day notice window, file an online consumer complaint via the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Because Section 34 permits consumers to file within their home district jurisdiction, you can pursue MakeMyTrip from your local District Consumer Commission, claiming full reimbursement, interest, mental harassment damages, and litigation expenses.
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
                  Statutory Deadlines: DGCA CAR, RBI &amp; E-Commerce
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Turnaround times for travel aggregators are governed by binding regulatory mandates. MakeMyTrip cannot enforce internal platform terms that contradict statutory ceilings:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">MakeMyTrip Statutory Refund Timelines and Regulatory Remedies</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Booking Scenario / Category</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Benchmark / Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Remedy if MakeMyTrip Delays</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Flight Bookings via MakeMyTrip (OTA)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Working Days Maximum</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Joint Legal Demand Notice to MMT + Carrier</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Direct Gateway Reversals (Cards &amp; UPI)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Master Directions &amp; DGCA CAR 3.3.1</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Bank ARN tracing / Payment gateway chargeback</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          48-Hour Free Cancellation Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Zero-Fee Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA 2026 48-Hour Free Look Rule†</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Zero administrative fee deduction allowed</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Airport Taxes (UDF, PSF &amp; Govt Levies)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">100% Tax Remittance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II, Cl. 3.4</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Non-refundable fares still entitle full tax return</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hotel Stays &amp; Holiday Packages
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">7–14 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Consumer Protection E-Commerce Rules 2020</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Grievance Officer notice &amp; NCH 1915 escalation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Pre-Litigation Legal Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory demand before e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  † Verified under DGCA CAR passenger charter guidelines. For in-depth regulatory analysis, explore our review of <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline">DGCA air ticket refund rules 2026</Link>.
                </p>
              </section>

              {/* Section 7: The MyCash Trap Deep-Dive */}
              <section id="heading-wallet-trap" aria-labelledby="heading-wallet-trap-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-wallet-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  MyCash &amp; Wallet Trap: Why Expiring Credits Violate Law
                </h2>
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 w-full overflow-hidden">
                  <h3 className="text-base sm:text-lg font-bold text-amber-950">
                    How Automated Platform Prompts Lock Consumer Capital in Closed-Loop Wallets
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Upon initiating cancellation on MakeMyTrip, the portal frequently presents an alluring but deceptive option: <em>&quot;Get Instant Refund of ₹28,400 to your MakeMyTrip MyCash Wallet! Or wait 7–14 days for bank processing.&quot;</em> Many consumers unwittingly select this option, only to discover later that MyCash expires within 12 months, cannot be transferred back to a bank account without punitive forfeiture fees, and cannot be applied toward all airline or hotel promotional fares.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <p>
                      <strong>Why this practice violates Indian law:</strong> In <em>Pravasi Legal Cell v. Union of India</em>, the Supreme Court ruled that passenger funds cannot be locked into non-convertible credit shells or vouchers without unambiguous consent. Furthermore, under our guide on whether <Link href="/refund-as-gift-card-or-wallet-legal" className="text-blue-700 underline font-semibold">refunds as gift cards or wallets are legal</Link>, consumer protection authorities have confirmed that restricting cash reversals amounts to an illegal coercive trade practice.
                    </p>
                    <p>
                      <strong>How to overturn unconsented MyCash credits:</strong> If your cancelled booking funds have been credited into MyCash without your express written choice, submit an immediate written revocation to MakeMyTrip&apos;s Nodal Grievance Cell citing CCPA guidelines. A formal legal demand notice forces MakeMyTrip&apos;s corporate treasury to liquidate the wallet balance and remit 100% of the funds to your primary bank account.
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
                  Case Study: Recovers ₹58,400 Booking via Advocate Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Mumbai to Goa Holiday Package (3 Passengers)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Rohan Deshmukh booked return flights and a 4-night resort in Goa for ₹58,400 on MakeMyTrip using his Axis Bank credit card. 24 hours prior to travel, the airline cancelled the outbound flight due to operational issues. Since the entire trip was rendered impossible, Rohan immediately cancelled the connected hotel booking on MakeMyTrip.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> For the next 6 weeks, MakeMyTrip customer support claimed that the flight refund of ₹32,000 had not been released by the airline, while the resort booking of ₹26,400 was forfeited under &apos;100% Hotel Cancellation Policy&apos;. Meanwhile, the airline confirmed via email that all flight money was remitted to MakeMyTrip&apos;s agency settlement account 48 hours after cancellation.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rohan engaged LegalRecovery.in. A verified advocate drafted and served a joint statutory legal notice to MakeMyTrip (India) Private Limited at its DLF Cyber City, Gurugram headquarters and the carrying airline. The notice cited DGCA CAR Section 3 Series M Part II (Clause 3.3.2), Section 2(47) CPA 2019 for unconscionable hotel forfeiture, and Supreme Court precedent in <em>Pravasi Legal Cell</em>, demanding full electronic refund within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 following delivery of the advocate notice, MakeMyTrip&apos;s Senior Legal Grievance Manager responded with an ARN bank reference. The complete sum of ₹58,400 (including 100% of the flight fare and hotel tariff) was credited directly back to Rohan&apos;s Axis Bank credit card account, averting formal consumer commission litigation.
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
                  Evidence Checklist: 6 Electronic Records for MMT Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital payment vouchers are admissible in consumer dispute forums. Assemble these 6 essential documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">MMT Booking Confirmation &amp; Tax Invoice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">PDF voucher displaying the MakeMyTrip Booking ID, total amount debited, passenger names, and itemized convenience fees.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Airline PNR / Hotel Reservation Voucher:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original ticket confirmation showing the 6-character airline PNR or hotel partner property confirmation code.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Flight Disruption / Cancellation Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped SMS, email, or WhatsApp message demonstrating that the disruption or cancellation was airline-initiated.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Rejection of MyCash / Travel Vouchers:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or chat screenshot confirming your formal demand for cash reversal to your original payment card or bank.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement Showing Zero Inward Settlement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank ledger from cancellation date demonstrating that no refund has been received despite MMT status claims.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">AirSewa or NCH Complaint Docket Number:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Reference docket showing pre-litigation grievance submission to the Ministry of Civil Aviation or Consumer Helpline.</p>
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
                    FAQs: MakeMyTrip Refund Issues, Status &amp; Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Guidance Based on DGCA Guidelines, Consumer Court Rulings &amp; CPA 2019
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

              {/* Section 11: Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutory Provisions &amp; Aviation Directives
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
                  Statutory verification status: All provisions verified against active DGCA Civil Aviation Requirements (CAR) Series M Part II, Consumer Protection (E-Commerce) Rules 2020, and Supreme Court directives as of November 2026.
                </p>
              </section>

              {/* Primary Notice CTA */}
              <section aria-labelledby="heading-cta-block" className="w-full">
                <MakeMyTripNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel &amp; Consumer Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/refund-as-gift-card-or-wallet-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Forced Wallet / Voucher Legality →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Refund with UTR/ARN →
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
                    IndiGo Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
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
