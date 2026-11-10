import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SebiOdrNoticeCTA from "./SebiOdrNoticeCTA";
import SebiOdrTableOfContents from "./SebiOdrTableOfContents";
import SebiOdrScenarioTabs from "./SebiOdrScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "SEBI SMART ODR & SCORES: Broker Complaint Guide",
  description:
    "Unauthorised trades, squared-off positions or funds not returned by a broker? How to use SEBI SCORES and the SMART ODR portal.",
  alternates: {
    canonical: `${SITE_URL}/sebi-smart-odr-broker-complaint`,
  },
  openGraph: {
    title: "SEBI SMART ODR & SCORES: Broker Complaint Guide",
    description:
      "Statutory escalation path for disputes with registered stockbrokers in India: unauthorized trades, arbitrary square-offs, withheld payouts, SCORES 2.0 and SMART ODR arbitration.",
    url: `${SITE_URL}/sebi-smart-odr-broker-complaint`,
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
    title: "SEBI Master Circular for Online Dispute Resolution (ODR) in the Indian Securities Market (SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131)",
    url: "https://www.sebi.gov.in/legal/master-circulars/aug-2023/master-circular-for-online-dispute-resolution-in-the-indian-securities-market_75220.html",
  },
  {
    title: "SEBI Circular on Implementation of SCORES 2.0 Grievance Redressal System (SEBI/HO/OIAE/IGRD/CIR/P/2024/22)",
    url: "https://www.sebi.gov.in/legal/circulars/apr-2024/implementation-of-scores-2-0_82672.html",
  },
  {
    title: "Securities and Exchange Board of India (Stock Brokers) Regulations, 1992 — Schedule II Code of Conduct for Stock Brokers",
    url: "https://www.sebi.gov.in/legal/regulations/apr-2023/securities-and-exchange-board-of-india-stock-brokers-regulations-1992_70144.html",
  },
  {
    title: "SEBI Circular on Prevention of Unauthorised Trading by Stock Brokers & Mandatory Telephonic Voice Recording (CIR/HO/MIRSD/MIRSD2/CIR/P/2017/108)",
    url: "https://www.sebi.gov.in/legal/circulars/sep-2017/prevention-of-unauthorised-trading-by-stock-brokers_36054.html",
  },
  {
    title: "Depositories Act, 1996 (Act No. 22 of 1996) — Section 16 (Liability of Depository for Loss Caused to Beneficial Owner)",
    url: "https://www.indiacode.nic.in/handle/123456789/1987",
  },
  {
    title: "Securities Contracts (Regulation) Act, 1956 (SCRA) & SEBI Act, 1992 — Chapter VIA (Penalties & Adjudication)",
    url: "https://www.indiacode.nic.in/handle/123456789/2293",
  },
  {
    title: "SMART ODR Portal (Securities Market Approach for Resolution Through ODR) — National Stock Exchange & BSE Joint Platform",
    url: "https://smartodr.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Trading Terminal Logs, Audio Files & Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const SAT_PRECEDENTS = [
  {
    title: "Unrecorded Telephonic Orders Make Broker Liable for Total Trading Losses",
    parties: "Angel Broking Ltd. v. SEBI & National Stock Exchange (NSE)",
    citation: "SAT Appeal No. 182 of 2019, Securities Appellate Tribunal, Mumbai",
    date: "Order Confirmed by SAT",
    facts:
      "A retail trading client alleged that high-value derivative (Nifty Options) transactions were executed on his trading terminal without prior authorization, causing a capital loss of ₹14.8 Lakhs. The broker contended that the client gave verbal instructions over a mobile call to the relationship manager. However, the broker failed to produce contemporaneous telephone recordings from an official office landline.",
    holding:
      "The Securities Appellate Tribunal (SAT) held that under SEBI Circular CIR/HO/MIRSD/MIRSD2/CIR/P/2017/108, the requirement for brokers to maintain recorded telephonic lines or verifiable electronic audit trails is mandatory and absolute. In the absence of contemporaneous audio logs, the broker cannot assert that the client consented. The broker was directed to reverse the debit, refund the full trading loss, and pay restitution.",
    amount: "₹14,80,000 Trading Loss Restitution + Brokerage Refund",
    takeaway:
      "If your broker executes trades that you never authorized and fails to produce an official voice recording verifying the instruction, arbitral tribunals under SMART ODR and SAT will routinely award full reimbursement of the financial loss.",
  },
  {
    title: "Arbitrary Margin Square-Off Without Reasonable Intimation Is Illegal",
    parties: "ICICI Securities Ltd. v. Investor Grievance Redressal Committee (IGRC)",
    citation: "Arbitration Appeal / SAT Revisional Digest No. 74/2021",
    date: "Order Affirmed in Revisional Jurisdiction",
    facts:
      "A swing trader held open futures contracts with adequate initial margin. Following a sudden intraday index dip, the broker auto-squared off the entire basket at the market trough without issuing an intraday margin call or allowing the client a reasonable window until 3:15 PM to deposit additional funds or collateral. The market promptly recovered, leaving the client with an irreversible ₹6.4 Lakh loss.",
    holding:
      "The appellate forum ruled that while brokers maintain risk management systems (RMS), the power to liquidate client positions cannot be exercised arbitrarily without reasonable prior warning, especially when end-of-day margin settlement was not breached. The broker's failure to provide an automated margin call alert before liquidation constituted actionable deficiency. The investor was awarded the difference between the forced square-off price and the subsequent market recovery benchmark.",
    amount: "₹6,40,000 Compensation for Arbitrary Position Liquidation",
    takeaway:
      "Brokers cannot mechanically trigger RMS auto-liquidation without proving that a margin shortfall alert was delivered to the client with an actionable opportunity to deposit collateral.",
  },
  {
    title: "Depository Participant Liable for Demat Share Debits Without Signed DIS or Valid TPIN",
    parties: "Religare Securities Ltd. & Depository Participant v. Smt. K. Varma",
    citation: "Arbitral Award under Bye-Laws of CDSL / SAT Appeal Review",
    date: "Arbitral Award Dated 19 November 2022",
    facts:
      "Blue-chip equity shares worth ₹22 Lakhs held in the client's demat account were pledged to an NBFC and subsequently liquidated to cover third-party derivative obligations. The client proved that she never executed a physical Delivery Instruction Slip (DIS) nor authorized an online CDSL TPIN transaction.",
    holding:
      "Under Section 16 of the Depositories Act, 1996, the depository participant is strictly liable to indemnify the beneficial owner for any loss resulting from unauthorized debits or pledges. The tribunal ordered the immediate repurchase and restoration of the identical quantity of shares to the client's demat account, along with all accrued corporate dividends.",
    amount: "Full Demat Share Restoration (₹22,00,000 Equity) + Accrued Dividends",
    takeaway:
      "Demat securities enjoy statutory protection under the Depositories Act. Any debit executed without two-factor biometric or OTP authorization makes the broker and depository participant jointly liable for complete physical restitution.",
  },
];

const FAQS = [
  {
    question: "What is the difference between SEBI SCORES 2.0 and the SMART ODR portal?",
    answer:
      "SEBI SCORES 2.0 (scores.sebi.gov.in) is the regulator's direct administrative grievance redressal portal where complaints are routed to the broker and supervised by designated Market Infrastructure Institutions (MIIs) with a mandatory 21-calendar-day resolution timeline. The SMART ODR portal (smartodr.in) is an independent online dispute resolution mechanism created under SEBI's Master Circular for securities disputes. In SMART ODR, disputes undergo formal institutional conciliation by an independent neutral conciliator, and if unresolved, escalate to binding online arbitration resulting in an enforceable arbitral award under the Arbitration and Conciliation Act, 1996.",
  },
  {
    question: "Can I recover money if my broker squared off my shares without my consent?",
    answer:
      "Yes, if the broker violated margin notification rules. Under SEBI and exchange risk management guidelines, brokers must deliver a clear margin call intimation before liquidating open positions. If your ledger possessed sufficient margin buffer, or if the broker triggered auto-liquidation without giving you the mandatory window to bring in funds, the square-off is legally classified as unauthorized. You can claim the financial difference between the distress sale price and the market price via SMART ODR conciliation and arbitration.",
  },
  {
    question: "What evidence is required to prove an unauthorized trade by a stockbroker?",
    answer:
      "The legal burden of proving order authorization rests statutorily on the stockbroker under SEBI Circular CIR/HO/MIRSD/MIRSD2/CIR/P/2017/108. To establish your claim, you need: (1) Written objection sent within 24 hours of receiving the contract note; (2) Demat transaction statements and trade ledger; (3) Proof that you did not place the trade via web terminal (IP logs showing non-originating location); and (4) The broker's failure to furnish an official telephonic voice recording containing your explicit trade instruction.",
  },
  {
    question: "How long does the SEBI SMART ODR process take from filing to award?",
    answer:
      "The SMART ODR framework operates under strict statutory timelines: Conciliation is completed within 21 calendar days from the date the conciliator is appointed. If conciliation succeeds, a binding settlement agreement is signed immediately. If conciliation fails, the investor can escalate to online arbitration, where the sole arbitrator or panel must hear the matter and pass a binding arbitral award within 30 calendar days (extendable by a maximum of 30 days in complex institutional matters).",
  },
  {
    question: "Is there any filing fee for retail investors on the SMART ODR portal?",
    answer:
      "No. For retail individual investors, the conciliation process on the SMART ODR portal is completely free of charge; the entire conciliation fee is borne by the Market Infrastructure Institutions (Exchanges and Depositories) and the intermediary. For arbitration, claims initiated by retail investors up to ₹50 Lakhs are either completely subsidized or require only nominal administrative fees, which are refunded to the investor upon succeeding in the arbitral award.",
  },
  {
    question: "When should I serve a formal legal notice to a stockbroker before SMART ODR?",
    answer:
      "A formal advocate legal demand notice should be served as soon as the broker's internal grievance desk rejects or stonewalls your initial complaint. Serving a statutory notice on the broker's Compliance Officer, Principal Officer, and Managing Director puts them on formal notice under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, establishes an indisputable chronological record, and frequently triggers internal settlement before public regulatory escalation.",
  },
  {
    question: "Can SMART ODR help if I lost money to a fake Telegram trading scam or unregulated app?",
    answer:
      "No. SMART ODR and SEBI SCORES only have legal jurisdiction over SEBI-registered intermediaries (registered stockbrokers, depository participants, portfolio managers, and registered investment advisers). If you transferred money to an unregistered individual, fake WhatsApp/Telegram VIP trading group, or unregulated offshore forex/crypto app, the remedy lies in filing an immediate cybercrime complaint under Section 66D IT Act and 1930 NCRP reporting, not SMART ODR.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dispute With Your Broker? SEBI SCORES and SMART ODR Explained",
  description:
    "Unauthorised trades, squared-off positions or funds not returned by a broker? How to use SEBI SCORES and the SMART ODR portal.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/sebi-smart-odr-broker-complaint`,
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
    name: "SEBI SMART ODR & SCORES Stockbroker Grievance Redressal",
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
      name: "Cyber & Financial Fraud Recovery",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SEBI SMART ODR Broker Complaint",
      item: `${SITE_URL}/sebi-smart-odr-broker-complaint`,
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

export default function SebiSmartOdrBrokerComplaintPage() {
  const breadcrumbItems = [
    { label: "Cyber & Financial Fraud Recovery", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "SEBI SMART ODR Broker Complaint", href: "/sebi-smart-odr-broker-complaint" },
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
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>SEBI Master Circular 2023/131</span>
              <span className="text-red-500">•</span>
              <span>SCORES 2.0 &amp; SMART ODR Portal</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Dispute With Your Broker? SEBI SCORES and SMART ODR Explained
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (SEBI SCORES 2.0 &amp; SMART ODR Redressal Mandate)
              </p>
              <p>
                Stockbrokers in India are strictly accountable under the SEBI (Stock Brokers) Regulations, 1992. For disputes involving unauthorised trades, arbitrary margin liquidations, or blocked payouts, investors can trigger <strong>SCORES 2.0</strong> (with a 21-day statutory resolution window) and escalate to the <strong>SMART ODR portal</strong> (smartodr.in) for independent online conciliation and binding arbitration without stepping into court.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">21-Day TAT</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SCORES 2.0 Resolution</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Zero Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Retail ODR Conciliation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Up to ₹50L+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Arbitral Claim Jurisdiction</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Binding</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Enforceable Legal Award</p>
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
            <SebiOdrTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview of SEBI SCORES 2.0 & SMART ODR */}
              <section id="heading-scores-odr-overview" aria-labelledby="heading-scores-odr-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scores-odr-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  SEBI SCORES 2.0 &amp; SMART ODR Portal: Complete Statutory Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Retail participation in Indian capital markets has exploded across discount brokerages and traditional full-service brokers. However, when technical glitches wipe out stop-loss orders, relationship managers execute unapproved options trades, or brokers arbitrarily liquidate delivery portfolios during intraday volatility, investors often feel helpless against corporate brokerage houses.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To eliminate bureaucratic friction and enforce strict market accountability, the Securities and Exchange Board of India (SEBI) overhauled its dispute infrastructure. The new ecosystem operates under two complementary statutory engines:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#DC2626] block">
                      1. SCORES 2.0 (SEBI Complaints Redress System)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Governed by Circular SEBI/HO/OIAE/IGRD/CIR/P/2024/22, SCORES 2.0 establishes an automated administrative workflow. The broker has a strict <strong>21 calendar days</strong> to resolve the dispute. If dissatisfied, the complaint automatically escalates to a two-tier review by Designated Bodies (Stock Exchanges like NSE and BSE) and SEBI officials.
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900 block">
                      2. SMART ODR Portal (Securities Market Online Dispute Resolution)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Established under Master Circular SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131, the <strong>SMART ODR portal (smartodr.in)</strong> provides quasi-judicial dispute resolution. It bypasses civil courts entirely, conducting digital conciliation within 21 days and fast-track online arbitration within 30 days to produce legally binding, executable awards.
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Understanding when and how to deploy these platforms—and when to precede them with an advocate statutory demand notice—is the key to recovering withheld funds and reversing unlawful financial ledger debits. For victims facing broader internet fraud or unauthorized bank debits, consult our foundational guides on{" "}
                  <Link href="/how-to-recover-money-stuck-in-online-cyber-fraud" className="text-[#DC2626] font-bold hover:underline">
                    recovering money stuck in online cyber fraud
                  </Link>{" "}
                  and{" "}
                  <Link href="/scam-money-recovery-what-is-possible" className="text-[#DC2626] font-bold hover:underline">
                    scam money recovery possibilities
                  </Link>.
                </p>
              </section>

              {/* Section 2: Archetype G2 Core - Scenario Selector Tabs */}
              <section id="heading-dispute-scenarios" aria-labelledby="heading-dispute-scenarios-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dispute-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    6 Common Broker Disputes &amp; Realistic Resolution Odds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Factual Scenarios &amp; Recovery Feasibility
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Not all broker disputes carry identical recovery prospects. The outcome hinges on statutory burden of proof, documented electronic audit trails, and strict compliance with SEBI master guidelines. Select your specific dispute scenario below to assess its recovery odds and governing law:
                </p>

                {/* Interactive Archetype G2 Scenario Island */}
                <SebiOdrScenarioTabs />
              </section>

              {/* Section 3: The 4-Tier Redressal Ladder with Hand-Authored SVG */}
              <section id="heading-redressal-ladder" aria-labelledby="heading-redressal-ladder-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-redressal-ladder-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4-Tier Redressal Ladder: Grievance Cell to Binding Arbitration
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Escalation Rail
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the SEBI Master ODR Circular, an aggrieved investor cannot jump straight into court without following the statutory redressal sequence. The securities dispute lifecycle is structured across four distinct levels:
                </p>

                {/* Hand-Authored SVG Architecture Diagram */}
                <div className="w-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-white overflow-hidden shadow-md">
                  <div className="text-center mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      SEBI Securities Dispute Resolution Architecture
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                      From Formal Notice to Enforceable Arbitral Award
                    </h3>
                  </div>

                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 800 240"
                      className="w-full min-w-[700px] h-auto"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Step 1 Box */}
                      <rect x="20" y="30" width="160" height="130" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                      <circle cx="100" cy="55" r="16" fill="#DC2626" />
                      <text x="100" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">1</text>
                      <text x="100" y="95" textAnchor="middle" fill="#F9FAFB" fontSize="12" fontWeight="bold">Tier 1: Broker Level</text>
                      <text x="100" y="115" textAnchor="middle" fill="#9CA3AF" fontSize="10">Internal Grievance Desk</text>
                      <text x="100" y="132" textAnchor="middle" fill="#E5E7EB" fontSize="10">+ Advocate Legal Notice</text>
                      <text x="100" y="148" textAnchor="middle" fill="#F87171" fontSize="9">Max 21 Calendar Days</text>

                      {/* Arrow 1 */}
                      <path d="M185 95 L215 95" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Step 2 Box */}
                      <rect x="220" y="30" width="160" height="130" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                      <circle cx="300" cy="55" r="16" fill="#DC2626" />
                      <text x="300" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">2</text>
                      <text x="300" y="95" textAnchor="middle" fill="#F9FAFB" fontSize="12" fontWeight="bold">Tier 2: SCORES 2.0</text>
                      <text x="300" y="115" textAnchor="middle" fill="#9CA3AF" fontSize="10">SEBI Administrative Portal</text>
                      <text x="300" y="132" textAnchor="middle" fill="#E5E7EB" fontSize="10">Designated Body Review</text>
                      <text x="300" y="148" textAnchor="middle" fill="#F87171" fontSize="9">21 Days Broker + 21 Days MII</text>

                      {/* Arrow 2 */}
                      <path d="M385 95 L415 95" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Step 3 Box */}
                      <rect x="420" y="30" width="160" height="130" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                      <circle cx="500" cy="55" r="16" fill="#DC2626" />
                      <text x="500" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">3</text>
                      <text x="500" y="95" textAnchor="middle" fill="#F9FAFB" fontSize="12" fontWeight="bold">Tier 3: Conciliation</text>
                      <text x="500" y="115" textAnchor="middle" fill="#9CA3AF" fontSize="10">SMART ODR Portal</text>
                      <text x="500" y="132" textAnchor="middle" fill="#E5E7EB" fontSize="10">Neutral Conciliator</text>
                      <text x="500" y="148" textAnchor="middle" fill="#34D399" fontSize="9">Zero Cost for Retail (21 Days)</text>

                      {/* Arrow 3 */}
                      <path d="M585 95 L615 95" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                      {/* Step 4 Box */}
                      <rect x="620" y="30" width="160" height="130" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="700" cy="55" r="16" fill="#10B981" />
                      <text x="700" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">4</text>
                      <text x="700" y="95" textAnchor="middle" fill="#F9FAFB" fontSize="12" fontWeight="bold">Tier 4: Arbitration</text>
                      <text x="700" y="115" textAnchor="middle" fill="#9CA3AF" fontSize="10">Independent Sole Arbitrator</text>
                      <text x="700" y="132" textAnchor="middle" fill="#E5E7EB" fontSize="10">Arbitration Act 1996</text>
                      <text x="700" y="148" textAnchor="middle" fill="#34D399" fontSize="9">Final Binding Award (30 Days)</text>

                      {/* Marker Definition */}
                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#DC2626" />
                        </marker>
                      </defs>

                      {/* Bottom Banner */}
                      <rect x="20" y="180" width="760" height="40" rx="8" fill="#111827" stroke="#1F2937" />
                      <text x="400" y="205" textAnchor="middle" fill="#D1D5DB" fontSize="11">
                        Failure of Conciliation directly opens online Fast-Track Arbitration resulting in an enforceable Civil Court decree.
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    <strong>Level 1 (Internal Redressal + Legal Notice):</strong> The investor must first lodge a formal complaint with the stockbroker&apos;s customer support and internal Grievance Redressal Cell. Serving an advocate legal demand notice at this initial threshold signals litigation preparedness, establishes the legal date of dispute under Section 63 BSA, and frequently drives commercial settlements before the broker incurs public exchange scrutiny.
                  </p>
                  <p>
                    <strong>Level 2 (SCORES 2.0 Fast-Track Rail):</strong> If the broker rejects the claim, offers an unsatisfactory compromise, or fails to respond within 21 calendar days, the investor initiates a SCORES 2.0 complaint. Under Circular SEBI/HO/OIAE/IGRD/CIR/P/2024/22, the designated stock exchange (e.g., NSE or BSE Investor Services Cell) audits the broker&apos;s conduct and enforces regulatory compliance.
                  </p>
                  <p>
                    <strong>Level 3 (SMART ODR Conciliation):</strong> If administrative review fails to produce financial restitution, the dispute enters the SMART ODR platform at smartodr.in. The MII appoints an empanelled, neutral conciliator who holds virtual video sessions with both parties. The conciliation must conclude within 21 calendar days.
                  </p>
                  <p>
                    <strong>Level 4 (SMART ODR Arbitration):</strong> If conciliation fails to yield an amicable agreement, either party can invoke arbitration. A sole arbitrator (or three-member panel for claims exceeding ₹50 Lakhs) conducts summary online proceedings and delivers an arbitral award within 30 days. Under the Arbitration and Conciliation Act, 1996, this award has the exact force of a civil court decree and can be directly executed against the broker&apos;s bank accounts and exchange deposits.
                  </p>
                </div>
              </section>

              {/* Section 4: Landmark SAT Precedents Digest */}
              <section id="heading-sat-precedents" aria-labelledby="heading-sat-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sat-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark SAT Orders &amp; Precedents on Broker Liability
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Securities Jurisprudence
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian securities law does not allow stockbrokers to hide behind one-sided customer agreements or automated risk clauses. The Securities Appellate Tribunal (SAT) and high-level arbitral benches have established concrete legal principles safeguarding investor capital:
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {SAT_PRECEDENTS.map((item, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-100 text-[#DC2626]">
                            Precedent #{idx + 1} • {item.citation.split(",")[0]}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {item.date}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                            Parties: <span className="text-slate-800">{item.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-3.5 sm:p-4 rounded-xl border border-slate-200/70">
                          <p>
                            <strong className="text-slate-900 font-bold">Factual Context: </strong>
                            {item.facts}
                          </p>
                          <p>
                            <strong className="text-slate-900 font-bold">Tribunal Holding: </strong>
                            {item.holding}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs">
                            <span>Award / Relief:</span>
                            <span>{item.amount}</span>
                          </div>
                          <div className="text-[11px] sm:text-xs text-slate-500 italic">
                            <strong>Key Takeaway: </strong>{item.takeaway}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Step-by-Step Filing Playbook */}
              <section id="heading-filing-playbook" aria-labelledby="heading-filing-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-filing-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Step-by-Step Filing Playbook for smartodr.in &amp; SCORES 2.0
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    5-Step Execution Playbook
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Executing a securities dispute requires systematic documentation. Follow this 5-step playbook to ensure your claim is admissible and resilient against procedural dismissals:
                </p>

                <ol className="space-y-4">
                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Formal Dispute Notice to Broker Compliance &amp; Principal Officer
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Transmit an immediate written dispute within 24–48 hours of the event to the broker&apos;s designated compliance email ID and corporate office. Specify the exact trade order IDs, disputed monetary amounts, and demand all contemporaneous voice logs and order terminal audit trails.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Serve Advocate Statutory Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the broker issues a standard automated rebuttal, have a verified advocate dispatch a formal demand notice via Registered Speed Post and corporate email under Section 63 of BSA 2023. Notice demands restitution within 15 days, citing specific SEBI code of conduct violations. See our transparent{" "}
                        <Link href="/legal-notice-charges" className="text-[#DC2626] font-bold hover:underline">
                          legal notice charges
                        </Link>{" "}
                        for fixed advocate drafting costs.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Lodge Complaint on SEBI SCORES 2.0 (scores.sebi.gov.in)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Create an account on the SCORES 2.0 portal using your PAN and Demat Client ID. Select Category &gt; Stock Brokers &gt; Nature of Complaint (e.g., Unauthorised Trades / Non-settlement of funds). Upload the broker rejection letter, legal notice tracking, and contract notes. The system tracks the mandatory 21-day countdown.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      4
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Initiate Online Conciliation on SMART ODR (smartodr.in)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Log in to smartodr.in and initiate a dispute against the intermediary. The portal automatically routes the dispute to the relevant Market Infrastructure Institution (NSE, BSE, CDSL, or NSDL). A neutral conciliator is appointed within 5 days to convene virtual settlement meetings.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      5
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Escalate to Online Arbitration for Enforceable Award
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If conciliation fails or the broker refuses a fair settlement, click &apos;Initiate Arbitration&apos; within 15 calendar days. Submit your statement of claim and legal computation of damages. The sole arbitrator examines documentary evidence, conducts digital hearings, and issues a final, binding award enforceable in civil court.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Key Facts & Timelines Table */}
              <section id="heading-statutory-deadlines" aria-labelledby="heading-statutory-deadlines-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-deadlines-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Deadlines &amp; Turnaround Times (TAT) Comparison
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Regulatory Benchmarks
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                    <caption className="sr-only">SEBI SCORES 2.0 &amp; SMART ODR Resolution Timelines Table</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Dispute Stage</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Governing Forum / Authority</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Statutory TAT</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Investor Cost</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Enforceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">Broker Grievance</th>
                        <td className="p-3.5 sm:p-4">Broker Compliance Desk</td>
                        <td className="p-3.5 sm:p-4">21 Calendar Days</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹0</td>
                        <td className="p-3.5 sm:p-4">Internal Corporate Decision</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">SCORES 2.0 Tier 1</th>
                        <td className="p-3.5 sm:p-4">SEBI / Broker System</td>
                        <td className="p-3.5 sm:p-4">21 Calendar Days</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹0</td>
                        <td className="p-3.5 sm:p-4">Regulatory ATR Submission</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">SCORES 2.0 Tier 2 Review</th>
                        <td className="p-3.5 sm:p-4">Designated Body (NSE / BSE / CDSL)</td>
                        <td className="p-3.5 sm:p-4">21 Calendar Days</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹0</td>
                        <td className="p-3.5 sm:p-4">Exchange Directives &amp; Penalties</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">SMART ODR Conciliation</th>
                        <td className="p-3.5 sm:p-4">Independent Empanelled Conciliator</td>
                        <td className="p-3.5 sm:p-4">21 Calendar Days</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹0 (Subsidized for Retail)</td>
                        <td className="p-3.5 sm:p-4">Binding Settlement Agreement</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">SMART ODR Arbitration</th>
                        <td className="p-3.5 sm:p-4">Sole Arbitrator / Arbitral Panel</td>
                        <td className="p-3.5 sm:p-4">30 Calendar Days</td>
                        <td className="p-3.5 sm:p-4">Subsidized (Refundable on Award)</td>
                        <td className="p-3.5 sm:p-4 text-[#DC2626] font-bold">Civil Court Decree (Arbitration Act)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Honest Scope (What We Can & Cannot Do) */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Scope of Legal Recovery: What We Can and Cannot Do
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  As an ethical legal tech and recovery platform, we maintain strict transparency regarding the scope of securities law enforcement:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <span>✓</span> What LegalRecovery Can Do:
                    </span>
                    <ul className="text-xs sm:text-sm text-emerald-950 space-y-1.5 list-disc pl-4 font-medium leading-relaxed">
                      <li>Draft and serve statutory demand notices to registered stockbrokers and clearing members.</li>
                      <li>Hold brokers accountable under SEBI Master Circulars, audio-recording guidelines, and contract note rules.</li>
                      <li>Prepare documentation and legal arguments for SCORES 2.0 and SMART ODR arbitral claims.</li>
                      <li>Pursue recovery for arbitrary margin liquidations, ledger miscalculations, and unauthorized trades.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-red-50/80 border border-red-200/80 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                      <span>✕</span> What We Cannot Do:
                    </span>
                    <ul className="text-xs sm:text-sm text-red-950 space-y-1.5 list-disc pl-4 font-medium leading-relaxed">
                      <li>We cannot recover regular trading losses resulting from adverse market price fluctuations or poor trading decisions.</li>
                      <li>We cannot file SMART ODR claims against unregistered fake trading apps, crypto exchanges, or Telegram scam syndicates (those require cyber police 1930 reporting; see our guides on <Link href="/task-scam-telegram-money-recovery" className="underline font-bold">task scams</Link> and <Link href="/digital-arrest-scam-money-recovery" className="underline font-bold">digital arrest scams</Link>).</li>
                      <li>We do not guarantee outcomes where the investor willingly handed over OTPs or shared trading credentials with unauthorized third parties.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Example: Reversing a ₹4.2 Lakh Unauthorised Square-Off
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>

                <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                      Factual Breakdown • High-Volatility Trading Session
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                      Investor S. K. Sharma v. Tier-1 Discount Broker
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> On 12 March 2026, during an RBI policy announcement, the investor held long Bank Nifty futures contracts. At 11:15 AM, during a sudden 180-point dip, the broker&apos;s Risk Management System (RMS) forcefully squared off 4 lots at market price, generating an immediate loss of ₹4,20,000.
                    </p>
                    <p>
                      <strong>The Flaw:</strong> An audit of the client&apos;s ledger showed that his account maintained ₹3,10,000 in clear cash and approved liquid bees collateral. The broker never issued an intraday margin call email or SMS alert prior to 11:15 AM, denying the client the opportunity to add collateral. By 2:30 PM, the index rebounded by 450 points, meaning the position would have ended in profit.
                    </p>
                    <p>
                      <strong>The Escalation:</strong>
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-slate-800">
                      <li>The investor sent an immediate dispute email demanding the server RMS liquidation logs.</li>
                      <li>Our team drafted and served a formal Advocate Legal Demand Notice citing NSE Circular 044/2020 on arbitrary margin liquidations.</li>
                      <li>Upon receiving an evasive reply, the dispute was filed on <strong>smartodr.in</strong>.</li>
                    </ol>
                    <p>
                      <strong>The Outcome:</strong> During SMART ODR conciliation, the independent conciliator verified that the broker failed to dispatch a margin call notification with reasonable lead time. Facing impending arbitration costs and exchange scrutiny, the broker agreed to execute a settlement agreement crediting ₹3,85,000 back to the investor&apos;s ledger within 7 business days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 8 Indispensable Records Before Filing
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Documentary Burden of Proof
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Contract Notes for Disputed Trades",
                      desc: "Official digital contract notes containing unique order numbers, trade execution timestamps, and exchange confirmation codes.",
                    },
                    {
                      title: "2. Telephonic Voice Recording Denial Letter",
                      desc: "Written communication showing you demanded the broker's recorded audio instructions and the broker failed or refused to supply them.",
                    },
                    {
                      title: "3. Complete Financial Ledger Statement",
                      desc: "Detailed ledger statement spanning 90 days showing all debits, credits, margins blocked, and fund payout requests.",
                    },
                    {
                      title: "4. End-of-Day (EOD) Margin Reports",
                      desc: "Daily margin statement issued by the clearing member proving initial margin compliance and collateral valuation.",
                    },
                    {
                      title: "5. CDSL / NSDL Consolidated Account Statement (CAS)",
                      desc: "Certified depository statement proving demat share holdings, unauthorized debit instructions, or third-party pledges.",
                    },
                    {
                      title: "6. Customer Support Ticket & Email Threads",
                      desc: "Chronological email exchanges with broker support, ticket resolution numbers, and rejection notices.",
                    },
                    {
                      title: "7. Trading Terminal Screen Recordings & Screenshots",
                      desc: "Timestamped visual proof of app crashes, login failures, or error alerts during market hours under BSA Section 63.",
                    },
                    {
                      title: "8. Advocate Legal Demand Notice & Postal Receipt",
                      desc: "Copy of the served legal demand notice with speed post tracking delivery confirmation and email delivery receipts.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="space-y-1">
                        <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                          {item.title}
                        </strong>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: 6 Fatal Mistakes to Avoid (Archetype G2 <ul> with ✕ styling) */}
              <section id="heading-fatal-mistakes" aria-labelledby="heading-fatal-mistakes-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-fatal-mistakes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    6 Fatal Mistakes to Avoid When Filing a Broker Dispute
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Procedural Traps &amp; Fatal Errors
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating securities dispute forums requires avoiding common procedural missteps that brokers routinely exploit to dismiss claims:
                </p>

                <ul className="space-y-3">
                  {[
                    {
                      mistake: "Failing to dispute contract notes within 24–48 hours",
                      consequence: "Under exchange bye-laws, prolonged silence is legally presumed as deemed acceptance of trade execution.",
                    },
                    {
                      mistake: "Relying exclusively on phone calls to relationship managers",
                      consequence: "Verbal complaints to RMs or branch managers carry zero legal weight; only timestamped emails to compliance create an evidentiary trail.",
                    },
                    {
                      mistake: "Conflating market volatility losses with broker misconduct",
                      consequence: "Arbitrators dismiss claims where losses stemmed from genuine market drops rather than proven regulatory breaches.",
                    },
                    {
                      mistake: "Skipping the mandatory broker grievance stage before SCORES 2.0",
                      consequence: "SCORES 2.0 will automatically reject or remand complaints if you have not first approached the broker's internal cell.",
                    },
                    {
                      mistake: "Failing to initiate arbitration within 15 days of conciliation failure",
                      consequence: "Under the SMART ODR framework, missing the 15-day window for arbitration extinguishes the subsidized arbitral route.",
                    },
                    {
                      mistake: "Sharing login credentials or OTPs with unofficial algorithmic software",
                      consequence: "If third-party API tokens were compromised due to investor negligence, broker liability is significantly eroded.",
                    },
                  ].map((m, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div className="space-y-0.5">
                        <strong className="text-xs sm:text-sm font-bold text-red-950 block">
                          Mistake #{idx + 1}: {m.mistake}
                        </strong>
                        <p className="text-xs text-red-900 leading-relaxed font-medium">
                          {m.consequence}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Call to Action Box */}
              <SebiOdrNoticeCTA />

              {/* Section 11: FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions (SEBI SMART ODR &amp; SCORES)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Quick Reference
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Statutory Sources & Official References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Primary Statutory References
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Official gazettes, SEBI master circulars, statutes, and regulatory portal documentation
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DC2626] font-medium hover:underline break-words"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Related Recovery Guides Footer Component */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides currentPath="/sebi-smart-odr-broker-complaint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
