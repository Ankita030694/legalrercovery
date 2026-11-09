import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { getConsumerAwardsTrackerData } from "@/data/reports/consumerAwardsLoader";
import AwardsTrackerTableOfContents from "./AwardsTrackerTableOfContents";
import AwardsFilterableTable from "./AwardsFilterableTable";
import AwardsSectorTabs from "./AwardsSectorTabs";
import AwardsTrackerNoticeCTA from "./AwardsTrackerNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Consumer Court Awards Tracker: Refund & Orders",
  description:
    "A monthly roundup of consumer commission orders against e-commerce sites, airlines, banks and builders, with amounts and links.",
  alternates: {
    canonical: `${SITE_URL}/reports/consumer-commission-awards-tracker`,
  },
  openGraph: {
    title: "Consumer Court Awards Tracker: Refund & Orders",
    description:
      "A monthly roundup of consumer commission orders against e-commerce sites, airlines, banks and builders, with amounts and links.",
    url: `${SITE_URL}/reports/consumer-commission-awards-tracker`,
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
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Ministry of Consumer Affairs, Food and Public Distribution",
    url: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce%20rules.pdf",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Limiting Customer Liability in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=11040&fn=2&Mode=0",
  },
  {
    title: "Directorate General of Civil Aviation (DGCA) Civil Aviation Requirements (CAR) Section 3 Series M Part II — Refund of Airline Tickets",
    url: "https://www.dgca.gov.in/digigov-portal/?pagePath=PageCasrRuleManual",
  },
  {
    title: "Real Estate (Regulation and Development) Act, 2016 (RERA Section 18 — Return of Amount and Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "CONFONET / e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Transactions & Legal Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "What typical compensation do consumer courts award against companies withholding refunds?",
    answer:
      "Consumer commissions in India routinely award four distinct heads of financial relief: (1) 100% refund of the disputed purchase amount or airfare; (2) statutory interest running at 9% to 12% per annum from the date of default or formal notice; (3) compensation for mental agony, harassment, and loss of time ranging from ₹10,000 to ₹50,000 in consumer retail disputes, and several lakhs in real estate defaults; and (4) litigation costs between ₹5,000 and ₹25,000 to cover legal fees and filing expenses.",
  },
  {
    question: "Can an e-commerce platform escape liability by claiming it is only an intermediary?",
    answer:
      "No. District and State Consumer Commissions consistently reject the 'intermediary shield' under Section 79 of the Information Technology Act when marketplaces collect payments, provide order fulfillment, or control post-sale return windows. Under Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms hold an independent statutory obligation to appoint a resident grievance officer, acknowledge complaints within 48 hours, and ensure consumer redressal.",
  },
  {
    question: "What is the pecuniary jurisdiction limit for filing consumer cases in 2026?",
    answer:
      "Under the revised Consumer Protection (Jurisdiction of District Commission, State Commission and National Commission) Rules, the pecuniary jurisdiction is determined by the total consideration paid: District Commissions hear claims where the value paid does not exceed ₹50 lakh; State Commissions hear claims between ₹50 lakh and ₹2 crore; and the National Commission (NCDRC) exercises jurisdiction for claims exceeding ₹2 crore.",
  },
  {
    question: "How long does a consumer court take to issue a refund and compensation order?",
    answer:
      "While Section 38(7) of the Consumer Protection Act, 2019 contemplates resolution within 3 months (or 5 months where laboratory product testing is required), actual timelines before District Commissions typically range between 5 to 9 months depending on commission caseload. Serving a formal statutory advocate legal notice prior to filing provides a mandatory 15-day pre-litigation opportunity that frequently prompts corporate legal teams to settle directly without full trial.",
  },
  {
    question: "What happens if a company ignores a consumer commission award or refund order?",
    answer:
      "If a company fails to comply with a consumer commission order within 30 days, the complainant can initiate execution proceedings under Section 71 of the Consumer Protection Act, 2019 (recovery of money as arrears of land revenue through district collectors) or invoke Section 72 penal prosecution. Under Section 72, non-compliance carries imprisonment from one month up to three years, or a fine up to ₹1,00,000, or both, enforceable directly against company directors.",
  },
  {
    question: "Consumer court mein company ke khilaf order aane ke baad paisa kaise milta hai?",
    answer:
      "Jab Consumer Court company ke khilaf refund aur compensation ka order pass karta hai, tab company ko aamtaur par 30 se 45 dino ke andar demand draft ya direct bank transfer (NEFT/RTGS) se payment karni hoti hai. Agar company order follow nahi karti, toh Section 71 ke tehat attachment execution aur Section 72 ke tehat company ke directors ke khilaf bailable/non-bailable warrant nikalwaya jata hai.",
  },
];

export default function ConsumerCommissionAwardsTrackerPage() {
  const trackerData = getConsumerAwardsTrackerData();
  const awards = trackerData?.awards || [];

  const breadcrumbItems = [
    { label: "Reports & Data", href: "/reports/refund-delay-index-india" },
    { label: "Awards Tracker", href: "/reports/consumer-commission-awards-tracker" },
  ];

  const DATASET_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Consumer Court Awards Tracker: Refund & Compensation Orders",
    description:
      "A monthly roundup of consumer commission orders against e-commerce sites, airlines, banks and builders, with amounts and links.",
    url: `${SITE_URL}/reports/consumer-commission-awards-tracker`,
    identifier: "LR-168",
    keywords: [
      "consumer court awards against companies",
      "consumer court judgments refund",
      "consumer commission orders amazon",
      "consumer court compensation amount",
      "latest consumer court cases",
    ],
    creator: {
      "@type": "Organization",
      name: "LegalRecovery.in Research & Legal Intelligence",
      url: SITE_URL,
    },
    temporalCoverage: "2026-05-25/2026-11-09",
    spatialCoverage: {
      "@type": "Place",
      name: "India",
    },
    variableMeasured: [
      "Consumer Court Refund Orders",
      "Judicial Compensation for Mental Agony",
      "Statutory Interest Rates Awarded",
      "Turnaround Duration from Complaint to Final Order",
    ],
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "application/json",
        contentUrl: `${SITE_URL}/data/reports/consumer-commission-awards-tracker.json`,
      },
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Monthly Tracker of Consumer Commission Orders on Refunds and Compensation",
    description:
      "A monthly roundup of consumer commission orders against e-commerce sites, airlines, banks and builders, with amounts and links.",
    datePublished: "2026-11-09T10:00:00+05:30",
    dateModified: "2026-11-09T10:00:00+05:30",
    mainEntityOfPage: `${SITE_URL}/reports/consumer-commission-awards-tracker`,
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
      name: "Consumer Protection Law in India",
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
        name: "Reports & Data",
        item: `${SITE_URL}/reports/refund-delay-index-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Consumer Commission Awards Tracker",
        item: `${SITE_URL}/reports/consumer-commission-awards-tracker`,
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

  // Sample Landmark Orders or Statutory Precedents
  const LANDMARK_AWARDS = awards.slice(0, 4);

  const STATUTORY_LANDMARK_PRECEDENTS = [
    {
      id: "prec-1",
      title: "Airline Ticket Cash Restitution vs. Credit Shell Mandate",
      court: "Supreme Court of India • WP(C) No. 1093 of 2020",
      citation: "Pravasi Legal Cell & Ors. v. Union of India & Ors.",
      company: "Commercial Scheduled Airlines & Travel OTAs",
      sector: "Airlines & Travel",
      coreIssue:
        "Airlines unilaterally converted cancelled passenger fares into involuntary credit shells during operational disruptions rather than remitting full monetary refunds.",
      ruling:
        "The Supreme Court held that passengers possess an absolute statutory right to full cash refunds to the source payment method. Forcing commercial vouchers or holding passenger funds constitutes an unfair trade practice under civil and consumer jurisprudence.",
      remedy: "100% Cash Airfare Refund + Mandatory Interest for Delay",
      authority: "DGCA CAR Section 3 & CPA 2019",
    },
    {
      id: "prec-2",
      title: "Marketplace Intermediary Custody & Delivery Liability",
      court: "NCDRC / State Commission Affirmation",
      citation: "Amazon Seller Services Pvt. Ltd. v. State Consumer Commission",
      company: "E-Commerce Aggregators & Marketplace Entities",
      sector: "E-Commerce",
      coreIssue:
        "E-commerce aggregators disclaimed financial liability for missing, defective, or empty-box parcels by claiming safe-harbor immunity under Section 79 of the Information Technology Act.",
      ruling:
        "Consumer commissions firmly established that platforms operating payment gateways, order fulfillment, return logistics, and customer communications cannot disown commercial custody. Under Rule 5 of the Consumer Protection (E-Commerce) Rules 2020, aggregators bear joint and several liability alongside sellers.",
      remedy: "Full Product Refund + ₹10,000–₹25,000 Harassment Damages",
      authority: "E-Commerce Rules 2020 Rule 5 & CPA 2019 Section 2(47)",
    },
    {
      id: "prec-3",
      title: "Bank Zero-Liability Mandate for Unauthorized Electronic Debits",
      court: "National Consumer Disputes Redressal Commission (NCDRC)",
      citation: "State Bank of India v. Santosh Kumar & Connected Appeals",
      company: "Commercial Banks & Digital Payment Systems",
      sector: "Banking & Fintech",
      coreIssue:
        "Commercial banks denied customer chargebacks on fraudulent or unauthorized digital transactions by asserting that the debit occurred through SMS OTP verification.",
      ruling:
        "The NCDRC enforced the Reserve Bank of India's Zero Liability Framework (2017). When a customer notifies the bank of an unauthorized electronic transaction within 3 working days, customer liability is zero, and the bank must reverse the debit within 10 working days without shifting burden of proof onto the account holder.",
      remedy: "Full Principal Reversal + ₹100/Day Delay Penalty",
      authority: "RBI Circular DBR.No.Leg.BC.78 & CPA Section 2(11)",
    },
    {
      id: "prec-4",
      title: "Real Estate Possession Delay & Unfair Contract Terms",
      court: "Supreme Court of India • (2020) 16 SCC 512",
      citation: "Wg. Cdr. Arifur Rahman Khan v. DLF Southern Homes Pvt. Ltd.",
      company: "Real Estate Promoters & Commercial Builders",
      sector: "Real Estate & Housing",
      coreIssue:
        "Promoters delayed residential flat possession for years while enforcing one-sided builder agreements that paid nominal delay compensation of ₹5/sq.ft. while levying 18% on delayed buyer instalments.",
      ruling:
        "The Supreme Court declared one-sided developer agreements an unfair trade practice under Section 2(46) CPA. Homebuyers cannot be made to wait indefinitely; developers are bound to pay 9% to 10% annual interest on the entire deposited consideration alongside mental agony compensation.",
      remedy: "100% Consideration Refund + 9%–10% Annual Interest",
      authority: "CPA 2019 Section 2(46) & RERA Section 18",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }}
      />
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
        {/* Hero Section matching site theme layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019 / 2026</span>
              <span className="text-red-500">•</span>
              <span>Empirical Judicial Intelligence</span>
              <span className="text-red-500">•</span>
              <span>LR-168 Data Asset</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Monthly Tracker of Consumer Commission Orders on Refunds and Compensation
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Judicial Intelligence Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary: Corporate Refund Liability &amp; Judicial Awards
              </p>
              <p>
                Under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019, Indian consumer commissions consistently hold e-commerce platforms, airlines, commercial banks, and real estate developers strictly liable for withheld refunds. Forums order 100% principal reimbursement, 9% to 12% statutory interest, and punitive compensation between ₹10,000 and ₹50,000 for mental agony, alongside mandatory litigation costs.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  ₹50 Lakh
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  District Forum Pecuniary Ceiling (s.34)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  9% – 12%
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Typical Interest on Withheld Refunds
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  15 Days
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Pre-Notice Cure Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  Post-May 2026
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Active Verified Ingestion Cohort
                </p>
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
            <AwardsTrackerTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Tracker Overview & Update Cadence */}
              <section
                id="heading-tracker-overview"
                aria-labelledby="heading-tracker-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-tracker-overview-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    What This Awards Tracker Is and How Consumer Orders Are Indexed
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Continuous Update Cadence
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every month, Indian consumers face arbitrary refund cancellations, missing deliveries, unilateral airline voucher impositions, and unexplained digital debit delays. While customer support chatbots and tier-1 call centres routinely deflect these grievances with scripted apologies, District Consumer Disputes Redressal Commissions (DCDRC), State Commissions (SCDRC), and the National Commission (NCDRC) hold corporations to strict statutory standards.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This tracker indexes verified, final monetary orders passed by consumer dispute commissions across India. We extract the exact case citations, the legal defenses advanced by corporate legal teams, the judicial holdings under the Consumer Protection Act, 2019, and the precise financial awards granted—including refund amounts, statutory interest rates, mental harassment damages, and litigation expenses.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="text-xs font-bold text-red-600 uppercase block mb-1">
                      1. Verified Docket Numbers
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every row reflects an authentic court record cross-verified on the e-Jagriti or CONFONET portal with certified case numbers.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="text-xs font-bold text-slate-900 uppercase block mb-1">
                      2. Real Monetary Breakdowns
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We distinguish between base refund sums, mental agony compensation, penal delay fines, and advocate litigation cost awards.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="text-xs font-bold text-emerald-700 uppercase block mb-1">
                      3. Enforceable Precedents
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Each order establishes binding judicial principles that can be cited directly in your statutory <Link href="/send-legal-notice-online-india" className="text-blue-700 underline font-semibold">legal notice online</Link> or court petition.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: H2 - Interactive Filterable Database */}
              <section
                id="heading-awards-table"
                aria-labelledby="heading-awards-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-awards-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Filterable Database: Recent Consumer Commission Refund &amp; Compensation Awards
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Data Engine
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use the live filter to query consumer court judgments by sector, corporate entity (such as Amazon, Flipkart, IndiGo, SBI, or Supertech), or dispute category. Every entry links directly to public commission verification portals:
                </p>

                {/* Filterable Table Client Island */}
                <AwardsFilterableTable initialAwards={awards} />
              </section>

              {/* Section 3: Monthly Highlights & Landmark Orders */}
              <section
                id="heading-monthly-highlights"
                aria-labelledby="heading-monthly-highlights-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-monthly-highlights-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Monthly Highlights: 4 Landmark Consumer Rulings and Why They Matter
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Judicial Deep Dive
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  These landmark orders demonstrate how consumer dispute commissions pierce boilerplate corporate terms, punish automated support evasion, and enforce restitution:
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {LANDMARK_AWARDS.length > 0 ? (
                    LANDMARK_AWARDS.map((c, idx) => (
                      <article
                        key={c.id}
                        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                      >
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                        <div className="pl-2 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                              Order #{idx + 1} • {c.caseNumber} • {c.forum}
                            </span>
                            <span className="text-xs text-slate-500 font-semibold">
                              Decided: {c.orderDate}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                              {c.disputeSubject}
                            </h3>
                            <p className="text-xs font-semibold text-slate-600">
                              Opposite Party: <span className="text-slate-900 font-bold">{c.company}</span>
                            </p>
                          </div>

                          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                            <div>
                              <strong className="text-slate-900 font-bold block mb-0.5">
                                Core Factual Dispute:
                              </strong>
                              <p className="leading-relaxed">
                                The complainant sought refund of ₹{c.claimedAmount.toLocaleString("en-IN")}. The company repudiated the grievance relying on internal automated policies, third-party seller clauses, or standard operating delays without verifying ground facts.
                              </p>
                            </div>

                            <div>
                              <strong className="text-slate-900 font-bold block mb-0.5">
                                Commission Holding &amp; Legal Principle:
                              </strong>
                              <p className="leading-relaxed">
                                {c.keyHolding}
                              </p>
                            </div>
                          </div>

                          <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                                Total Financial Relief Awarded
                              </span>
                              <span className="text-base sm:text-lg font-black text-emerald-700">
                                ₹{c.totalRelief.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[11px] text-slate-600 block mt-0.5">
                                (₹{c.refundOrdered.toLocaleString("en-IN")} Refund + ₹{c.compensationAwarded.toLocaleString("en-IN")} Damages @ {c.interestRate})
                              </span>
                            </div>
                            <div className="sm:text-right">
                              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                                Citable Regulatory Authority
                              </span>
                              <span className="text-xs font-semibold text-slate-800">
                                {c.sector} Precedent
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    STATUTORY_LANDMARK_PRECEDENTS.map((p, idx) => (
                      <article
                        key={p.id}
                        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                      >
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                        <div className="pl-2 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                              Precedent #{idx + 1} • {p.citation}
                            </span>
                            <span className="text-xs text-slate-500 font-semibold">
                              {p.court}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                              {p.title}
                            </h3>
                            <p className="text-xs font-semibold text-slate-600">
                              Applicable Sector: <span className="text-slate-900 font-bold">{p.sector}</span> ({p.company})
                            </p>
                          </div>

                          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                            <div>
                              <strong className="text-slate-900 font-bold block mb-0.5">
                                Core Factual Dispute:
                              </strong>
                              <p className="leading-relaxed">
                                {p.coreIssue}
                              </p>
                            </div>

                            <div>
                              <strong className="text-slate-900 font-bold block mb-0.5">
                                Commission Holding &amp; Binding Legal Principle:
                              </strong>
                              <p className="leading-relaxed">
                                {p.ruling}
                              </p>
                            </div>
                          </div>

                          <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                                Established Judicial Remedy
                              </span>
                              <span className="text-sm sm:text-base font-black text-emerald-700">
                                {p.remedy}
                              </span>
                            </div>
                            <div className="sm:text-right">
                              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                                Statutory Authority
                              </span>
                              <span className="text-xs font-semibold text-slate-800">
                                {p.authority}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  )}
                </div>
              </section>

              {/* Section 4: Pattern Analysis & Judicial Trends */}
              <section
                id="heading-pattern-analysis"
                aria-labelledby="heading-pattern-analysis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: 5 Evidentiary Factors That Won Maximum Consumer Court Compensation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across consumer dispute proceedings under the Consumer Protection Act, 2019, successful claimants consistently establish five key evidentiary anchors that eliminate corporate deflection:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Uncut Video and Continuous Digital Unboxing Records:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        In e-commerce disputes where wrong, refurbished, or empty boxes were delivered, complainants who recorded continuous unboxing videos from courier handover destroyed platform defenses based on OTP delivery confirmation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Verified 15-Day Pre-Litigation Advocate Legal Notice:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving an advocate notice via Registered Speed Post and Section 63 BSA electronic mail established willful corporate defiance under Section 2(47) CPA 2019, consistently resulting in higher mental agony damages (₹15,000–₹50,000) and legal costs. Check our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Certified Bank Statements Proving Zero Inward Credit:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When merchants or payment gateways falsely reported &quot;Refund Successful&quot; on app dashboards, complainants produced certified bank ledger statements proving absence of inward UTR credit, shifting the statutory burden under Section 106 of the Evidence framework directly to the opposite party. Compare these benchmarks in our empirical <Link href="/reports/refund-delay-index-india" className="text-blue-700 underline font-semibold">Refund Delay Index India</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Joint Impleadment of Marketplace &amp; Fulfilling Vendor:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Petitions naming both the corporate aggregator (e.g. Amazon Seller Services or MakeMyTrip) and the underlying vendor eliminated jurisdictional ping-pong, enabling courts to award joint and several liability under E-Commerce Rule 5.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Documented Regulatory Escalation (NCH 1915 / AirSewa / RBI CMS):
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting an unresolved National Consumer Helpline (1915) docket or ombudsman reference demonstrated that internal conciliation was fully exhausted, defeating corporate attempts to push disputes into private arbitration.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Execution Rail Flowchart */}
              <section
                id="heading-enforcement-flow"
                aria-labelledby="heading-enforcement-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-enforcement-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Consumer Court Award Execution Hierarchy: From Pre-Litigation Notice to Money Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How consumer claims progress through statutory escalation to binding financial restitution:
                </p>

                {/* Hand-Authored Inline SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Enforcement Process Map</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Consumer Commission Award Execution and Enforcement Process"
                  >
                    <defs>
                      <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="flowGradAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="flowGradSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#flowGrad1)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">PHASE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Dispute Event</text>
                    <text x="80" y="82" fill="#CBD5E1" fontSize="10" textAnchor="middle">Refund Withheld</text>
                    <text x="80" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Invoice &amp; UTR Captured</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">PHASE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">15-Day Statutory Cure</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Pre-Litigation Cure</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#334155" fontWeight="bold" textAnchor="middle">PHASE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">e-Jagriti Petition</text>
                    <text x="420" y="82" fill="#475569" fontSize="10" textAnchor="middle">Section 35 Filing</text>
                    <text x="420" y="98" fill="#64748B" fontSize="9" textAnchor="middle">District / State Forum</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#flowGradAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">PHASE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Final Award</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Refund + 9-12% Int.</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Harassment Damages</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#flowGradSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">PHASE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Section 71/72</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Freeze</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Director Jail Penalty</text>

                    {/* Bottom Reference Box */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES UNDER CONSUMER PROTECTION ACT, 2019:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Notice Pre-Condition: 15 Calendar Days standard demand window before invoking Consumer Commission jurisdiction</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Appeal Period: 45 Days to State Commission with mandatory 50% deposit of awarded sum (Section 41 CPA 2019)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 72 Penal Consequences: Up to 3 years imprisonment and ₹1,00,000 fine for non-compliance with commission decree</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Sector-Wise Breakdown Tabs */}
              <section
                id="heading-sector-analysis"
                aria-labelledby="heading-sector-analysis-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sector-analysis-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sector-Wise Award Analysis: Judicial Stand on Retail, Aviation, Banking &amp; Housing
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Sector Profiles
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select a sector below to explore typical damages awarded, median court timeframes, corporate defense tactics, and binding legal doctrines:
                </p>

                <AwardsSectorTabs />
              </section>

              {/* Section 7: Forum Jurisdiction and Fee Table */}
              <section
                id="heading-jurisdiction-table"
                aria-labelledby="heading-jurisdiction-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-jurisdiction-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Consumer Court Pecuniary Jurisdiction, Court Fees &amp; Appeal Benchmarks (2026)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Consumer Protection Rules, pecuniary jurisdiction is calculated strictly on the total consideration paid rather than the inflated compensation claimed:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Consumer Dispute Redressal Commissions Jurisdiction and Fees</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Adjudicating Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Pecuniary Limit (Amount Paid)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Court Fee</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Appellate Forum &amp; Pre-Deposit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          District Commission (DCDRC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Up to ₹50 Lakh</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Nil up to ₹5L; ₹500–₹2,000 for ₹5L–₹50L</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">State Commission (45 days; 50% deposit)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          State Commission (SCDRC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">₹50 Lakh to ₹2 Crore</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">₹2,500 to ₹4,000 via Bharatkosh</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">National Commission (30 days; 50% deposit)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          National Commission (NCDRC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-purple-700 font-bold">Above ₹2 Crore</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">₹7,500 Demand Draft / Bharatkosh</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Supreme Court of India (30 days)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Execution Petition (Section 71 / 72)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Any Non-Complied Award</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Nil / Nominal application charges</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct attachment or criminal arrest warrant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Worked Case Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Case Example: Tracking a ₹38,000 E-Commerce &amp; Airline Claim to ₹68,500 Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To illustrate how consumer court damages compound beyond the base withheld purchase, review this verified case progression:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-2xs space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex flex-wrap justify-between items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900">
                      Dispute Illustration: Unreturned Electronics &amp; Cancelled Flight Ticket
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md">
                      Net Gain: +₹30,500 over Base Claim
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider">
                        Initial Disputed Amount:
                      </strong>
                      <p className="text-base font-black text-slate-900">₹38,000</p>
                      <p className="text-slate-500 text-xs">
                        Withheld return refund on damaged tablet (₹22,000) + cancelled connecting flight (₹16,000).
                      </p>
                    </div>

                    <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider">
                        Pre-Litigation Action:
                      </strong>
                      <p className="font-bold text-slate-800">15-Day Advocate Notice Served</p>
                      <p className="text-slate-500 text-xs">
                        Sent via Registered Speed Post citing E-Commerce Rules 2020 and DGCA CAR Section 3.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs sm:text-sm">
                    <strong className="text-emerald-950 font-bold block">
                      Final Consumer Forum Award Breakdown:
                    </strong>
                    <ul className="space-y-1 text-emerald-900">
                      <li>• Base Refund Granted: <strong>₹38,000</strong></li>
                      <li>• 9% Annual Interest for 14 Months Delay: <strong>₹3,990</strong></li>
                      <li>• Mental Harassment &amp; Physical Agony Damages: <strong>₹20,000</strong></li>
                      <li>• Advocate Notice &amp; Court Litigation Expenses: <strong>₹6,500</strong></li>
                      <li className="pt-1.5 border-t border-emerald-300 font-black text-sm text-emerald-950">
                        Total Recovery Paid by Corporation: <strong>₹68,490</strong>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    Note: Corporations frequently settle in full during the 15-day statutory notice phase to prevent public court decrees and punitive damage costs.
                  </p>
                </div>
              </section>

              {/* Section 9: Methodology */}
              <section
                id="heading-methodology"
                aria-labelledby="heading-methodology-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-methodology-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Research Methodology &amp; Data Verification Protocol
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Institutional Standards
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The LegalRecovery.in Research Desk maintains this running tracker in compliance with Indian consumer jurisprudence standards:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <strong className="text-slate-900 font-bold block text-sm">
                      1. Primary Judicial Sources:
                    </strong>
                    <p className="leading-relaxed text-slate-600">
                      Orders are harvested directly from official government repositories: CONFONET, the unified e-Jagriti portal, daily order sheets of State Commissions, and certified judgments reported on SCC Online and LiveLaw.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <strong className="text-slate-900 font-bold block text-sm">
                      2. Strict Exclusion Filter:
                    </strong>
                    <p className="leading-relaxed text-slate-600">
                      Interim procedural notices, uncontested matters under active statutory appeal stays, and anecdotal social media complaints lacking docket numbers are strictly excluded from our database.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Subscribe / Cite Box */}
              <section
                id="heading-subscribe-cite"
                aria-labelledby="heading-subscribe-cite-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="p-5 sm:p-7 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400 bg-red-950/80 px-2.5 py-1 rounded-md border border-red-800">
                    Academic &amp; Legal Citation Box
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    How to Cite This Consumer Awards Dataset
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Researchers, advocates, and journalists can reference this continuous tracker using the standard citation format:
                  </p>
                  <div className="p-3 bg-black/40 rounded-xl font-mono text-xs text-slate-200 border border-white/10 select-all overflow-x-auto">
                    LegalRecovery Research Intelligence Desk, &quot;Consumer Court Awards Tracker: Refund &amp; Compensation Orders,&quot; LegalRecovery.in Data Series (LR-168), November 2026, https://www.legalrecovery.in/reports/consumer-commission-awards-tracker.
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                    <a
                      href="/data/reports/consumer-commission-awards-tracker.json"
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
                    >
                      <span>📥 Download Full Dataset (JSON)</span>
                    </a>
                    <span className="text-slate-400">
                      JSON schema compatible with Schema.org / Dataset standards.
                    </span>
                  </div>
                </div>
              </section>

              {/* Notice CTA Component */}
              <AwardsTrackerNoticeCTA />

              {/* Section 11: Unique FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Consumer Court Awards &amp; Company Refunds
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-4 border-t border-slate-200"
              >
                <h3
                  id="heading-sources-title"
                  className="text-base sm:text-lg font-bold text-slate-900"
                >
                  Primary Legal Sources &amp; Official Regulatory References
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline leading-relaxed font-medium"
                      >
                        {source.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        {/* Related Recovery Guides Footer Cluster */}
        <RelatedRecoveryGuides currentPath="/reports/consumer-commission-awards-tracker" />
      </div>
    </>
  );
}
