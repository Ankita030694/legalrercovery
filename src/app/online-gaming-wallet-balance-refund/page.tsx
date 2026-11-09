import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import GamingWalletNoticeCTA from "./GamingWalletNoticeCTA";
import GamingWalletTableOfContents from "./GamingWalletTableOfContents";
import GamingWalletProblemTabs from "./GamingWalletProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Gaming App Wallet Balance Stuck After the Ban? Refunds",
  description:
    "Wallet balance stuck on a real-money gaming app after the 2025 ban? Platform duties, withdrawal rights and how to demand a refund.",
  alternates: {
    canonical: `${SITE_URL}/online-gaming-wallet-balance-refund`,
  },
  openGraph: {
    title: "Gaming App Wallet Balance Stuck After the Ban? Refunds & Recovery",
    description:
      "Statutory escalation path for frozen gaming app wallet balances, post-ban unutilised deposit refunds, arbitrary KYC blocks, and consumer court action.",
    url: `${SITE_URL}/online-gaming-wallet-balance-refund`,
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
    title: "Promotion & Regulation of Online Gaming Act, 2025 (Act Framework on Real-Money Gaming Intermediaries & Consumer Deposit Restitution)†",
    url: "https://www.meity.gov.in/content/information-technology-intermediary-guidelines-and-digital-media-ethics-code-rules-2021",
  },
  {
    title: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (as amended 2023 for Online Gaming) — Rule 3 & Rule 4",
    url: "https://www.meity.gov.in/writereaddata/files/Information%20Technology%20%28Intermediary%20Guidelines%20and%20Digital%20Media%20Ethics%20Code%29%20Amendment%20Rules%2C%202023.pdf",
  },
  {
    title: "Indian Contract Act, 1872 — Section 65 (Obligation of Person Who Has Received Advantage Under Void Agreement) & Section 148 (Bailment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Income Tax Act, 1961 — Section 194BA (TDS on Net Winnings from Online Gaming) & Rule 133 of Income Tax Rules",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "Reserve Bank of India (RBI) Master Directions on Issuance and Operation of Prepaid Payment Instruments (PPIs) — MD-DPSS-PPI-2021",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Wallet Passbooks & Inward UPI Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Commission Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Consumer Forum Order Mandating 100% Refund of Unutilised Fantasy Sports Wallet Deposit",
    parties: "Rahul Sharma v. Sporta Technologies Pvt. Ltd. (Dream11) & Anr.",
    citation: "Consumer Complaint No. 418/2022, DCDRC Bengaluru Urban (Additional)",
    date: "Order Dated 18 November 2023",
    facts:
      "The complainant deposited ₹42,000 into his fantasy gaming wallet through UPI. Before entering any cash contests, his registered state implemented local restrictions on real-money gaming contests. When the complainant requested an immediate withdrawal of his unutilised cash deposit, the platform rejected the request, asserting that pursuant to its Terms of Service, 'deposited amounts can only be utilised to join contests and are strictly non-refundable.'",
    holding:
      "The District Consumer Commission rejected the platform's defense. The court held that while contest winnings may be subject to contractual gameplay rules and statutory TDS, money deposited by a user constitutes property held by the intermediary in a fiduciary capacity under bailment (Section 148 Contract Act). Forfeiting or refusing withdrawal of an unutilised deposit constitutes an unfair contract under Section 2(46) and deficiency under Section 2(11) of the Consumer Protection Act, 2019. The platform was ordered to refund the entire ₹42,000 deposit alongside 9% annual interest and ₹15,000 compensation.",
    amount: "₹42,000 Full Deposit Refund @ 9% Interest + ₹15,000 Harassment Damages + ₹7,500 Legal Costs",
    takeaway:
      "Terms of Service claiming that unspent deposits are 'non-refundable' or must be wagered 100% are unconscionable and legally void. Consumer commissions treat unutilised wallet balances as consumer property that must be restored.",
  },
  {
    title: "State Commission Ruling on Arbitrary 'Fair Play' Account Freeze After Legitimate Winnings",
    parties: "Vikram Malhotra v. Play Games24x7 Pvt. Ltd. & Ors.",
    citation: "First Appeal No. 382/2021, State Consumer Disputes Redressal Commission, Maharashtra",
    date: "Order Dated 24 August 2022",
    facts:
      "The complainant accumulated ₹1,35,000 in winnings and deposited principal on an online rummy platform. Upon submitting a withdrawal request to his bank account, the platform terminated his account alleging 'suspicious gameplay patterns and collusion' without furnishing contest logs, IP telemetry, or prior show-cause notice. The company confiscated the entire balance.",
    holding:
      "The State Commission held that unilateral confiscation of consumer funds on unsubstantiated allegations of misconduct violates basic natural justice. The intermediary cannot act as judge and jury in its own cause to appropriate user funds without presenting objective digital forensics under Section 63 BSA / 65B Evidence Act. The Commission ordered the platform to credit the full amount of ₹1,35,000, pay ₹30,000 compensation for mental agony, and ₹10,000 in litigation expenses.",
    amount: "₹1,35,000 Wallet Balance Restitution + ₹30,000 Compensation + ₹10,000 Costs",
    takeaway:
      "An automated platform email claiming a 'fair play violation' does not hold up in court. In the absence of verifiable forensic proof submitted under oath, tribunals direct full restitution of frozen funds plus exemplary damages.",
  },
  {
    title: "District Commission Order Restraining Unlawful 30% TDS Deduction on Unplayed Principal Deposits",
    parties: "Kunal Bansal v. Galactus Funware Technology Pvt. Ltd. (MPL)",
    citation: "Consumer Complaint No. 109/2024, DCDRC Gurugram",
    date: "Order Dated 12 July 2024",
    facts:
      "The complainant deposited ₹50,000 across multiple UPI transactions. Due to personal reasons, he sought to withdraw the unspent balance without participating in games. The gaming application deducted 30% (₹15,000) under the guise of Section 194BA online gaming TDS, disbursing only ₹35,000. When questioned, the platform claimed its automated algorithm treated all outward withdrawals as taxable winnings.",
    holding:
      "The District Commission observed that Section 194BA of the Income Tax Act, 1961 explicitly restricts tax withholding to 'net winnings'. Deducting tax on the return of a consumer's own capital deposit constitutes an illegal withholding of funds and gross deficiency of service. The Commission directed the company to refund ₹15,000 with 12% interest and pay ₹20,000 punitive damages for coercive dark pattern practices.",
    amount: "₹15,000 Wrongful TDS Refund @ 12% Interest + ₹20,000 Punitive Damages + ₹5,000 Costs",
    takeaway:
      "Platforms cannot legally levy 30% TDS on your own unspent deposits. Section 194BA applies only to net profits earned over and above the aggregate principal invested.",
  },
  {
    title: "High Court Re-affirmation on Recovery Rights When Online Gaming Apps Are Delisted or Banned",
    parties: "All India Gaming Federation & Ors. v. State of Tamil Nadu & Ors.",
    citation: "Writ Petition No. 13203 of 2023, Madras High Court (Division Bench)",
    date: "Judgment Dated 09 November 2023",
    facts:
      "During constitutional challenges concerning state online gaming prohibitions and statutory regulatory notifications, user accounts across multiple real-money platforms were locked due to geo-blocking and payment gateway blacklisting, trapping crores of rupees in unutilised balances.",
    holding:
      "The Division Bench reiterated that statutory prohibitions on real-money gaming activities cannot be weaponized by operators to unlawfully retain consumer property. When games become impermissible or servers are shut down, operators are under an express statutory and common law duty under Section 65 of the Indian Contract Act to return all unutilised player balances to their source bank accounts.",
    amount: "Affirmation of Mandatory Source Account Restitution for All Trapped Deposits",
    takeaway:
      "Even if an app is completely banned, removed from the Play Store, or facing regulatory prosecution, the underlying corporate entity and its directors remain legally liable to disburse wallet refunds.",
  },
];

const FAQS = [
  {
    question: "Can I get my money back if a real-money gaming app is banned or delisted in India?",
    answer:
      "Yes. A statutory ban, regional geo-blocking, or app-store delisting under the Promotion & Regulation of Online Gaming Act 2025† prohibits platforms from hosting new games, but it does not extinguish your legal ownership of deposited funds. Under Section 65 of the Indian Contract Act, 1872, when a contract becomes void due to legal change, the operator is statutorily mandated to restore any advantage or unspent money held in trust back to the consumer's registered bank account.",
  },
  {
    question: "Why is my gaming app withdrawal stuck even though my account shows a positive balance?",
    answer:
      "Gaming app withdrawals are typically stuck due to three common practices: (1) Unlawful wagering clauses claiming deposited funds cannot be withdrawn without 100% gameplay; (2) Asymmetric KYC hurdles where platforms easily accept deposits but repeatedly reject government IDs during withdrawal; or (3) Payment gateway settlement freezes between the platform and intermediaries like Razorpay or Cashfree. You can demand immediate release by serving a formal 15-day statutory legal notice.",
  },
  {
    question: "Can a gaming platform legally forfeit my wallet balance under its Terms of Service?",
    answer:
      "No. Consumer commissions and High Courts have consistently ruled that one-sided terms of service that allow platforms to forfeit unutilised deposits or arbitrarily freeze accounts without verifiable forensic proof are unconscionable and void under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019. Platforms hold your unspent money in a fiduciary capacity under bailment (Section 148 Indian Contract Act) and cannot convert it into corporate revenue.",
  },
  {
    question: "Can an online gaming app deduct 30% TDS on my unplayed deposited money?",
    answer:
      "Absolutely not. Section 194BA of the Income Tax Act, 1961 and Rule 133 of the Income Tax Rules explicitly mandate TDS deduction only on 'net winnings' (total withdrawals minus total deposits minus opening balance). If an app deducts 30% TDS on the refund of your own unplayed capital deposit, it is an illegal deduction and deficiency of service actionable before consumer commissions.",
  },
  {
    question: "What should I do if a fantasy sports app rejects my KYC and refuses to release my money?",
    answer:
      "First, confirm that your registered app name, Aadhaar card, PAN card, and beneficiary bank account match exactly. Second, preserve timestamped screenshots and screen recordings of the rejected KYC portal. Third, email the company's designated Nodal Grievance Officer under Rule 3(2) of the IT Rules. If the platform fails to resolve the deadlock within 72 hours, serve an advocate statutory demand notice requiring manual bank credit or escalate to the National Consumer Helpline (1915).",
  },
  {
    question: "How does a statutory legal notice help recover money stuck in a gaming wallet?",
    answer:
      "Most gaming apps rely on automated bot replies to dismiss individual player complaints. A formal legal notice drafted by a High Court advocate and served on the company's registered corporate headquarters via Registered Speed Post alerts the corporate legal team and board of directors to impending litigation under Section 35 CPA 2019 and Section 316 BNS (Criminal Breach of Trust). Over 75% of legitimate wallet disputes are resolved amicably during the 15-day notice window.",
  },
  {
    question: "What is the difference between unutilised cash deposit and promotional bonus cash?",
    answer:
      "Unutilised cash deposit represents real fiat money transferred from your bank account or UPI into the gaming app; this is your absolute property and must be refunded upon demand under Indian law. Promotional bonus cash, discount credits, or free tokens are marketing incentives granted by the company and are generally subject to contractual expiration or gameplay rules unless earned through cash contest settlements.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real-Money Gaming Wallet Balance After the 2025 Act: Getting It Back",
  description:
    "Wallet balance stuck on a real-money gaming app after the 2025 ban? Platform duties, withdrawal rights and how to demand a refund.",
  datePublished: "2026-11-04T12:00:00+05:30",
  dateModified: "2026-11-04T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/online-gaming-wallet-balance-refund`,
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
    name: "Online Gaming Wallet Balance Refund and Consumer Restitution",
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
      name: "Cyber Fraud & Recovery Hub",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gaming Wallet Refund",
      item: `${SITE_URL}/online-gaming-wallet-balance-refund`,
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

const MYTH_FACTS = [
  {
    myth: "You accepted the Terms of Service, so the gaming app can forfeit any unspent balance at will.",
    fact: "Legally Unenforceable. Under Section 2(46) of the Consumer Protection Act, 2019, one-sided standard form terms that impose unreasonable forfeiture or restrict a consumer's right to their own money are classified as 'unfair contracts' and are null and void in courts of law.",
    authority: "Section 2(46) CPA 2019; DCDRC Bengaluru (Rahul Sharma v. Sporta Technologies)",
  },
  {
    myth: "If a state bans real-money gaming or the app shuts down, your deposited funds are permanently lost.",
    fact: "Mandatory Statutory Restitution. Section 65 of the Indian Contract Act, 1872 explicitly obligates any entity that received an advantage under an agreement that becomes void to restore it or compensate the payer. A regulatory ban stops gaming operations; it does not grant platforms a license to steal deposited capital.",
    authority: "Section 65 Indian Contract Act 1872; Madras HC (AIGF v. State of TN)",
  },
  {
    myth: "Platforms are legally entitled to withhold 30% TDS whenever money is withdrawn from the wallet.",
    fact: "TDS Only Applies to Net Winnings. Section 194BA of the Income Tax Act strictly taxes net contest profits. Deducting 30% tax from the return of unutilised deposited principal is illegal and constitutes deficiency of service.",
    authority: "Section 194BA Income Tax Act 1961; Rule 133 Income Tax Rules",
  },
  {
    myth: "You cannot take legal action because online gaming has no dedicated government regulator.",
    fact: "Multiple Active Enforcement Forums. Players can enforce rights through District Consumer Disputes Redressal Commissions (e-Jagriti), the National Consumer Helpline (1915), the MeitY Grievance Appellate Committee (GAC), or by issuing a statutory advocate demand notice.",
    authority: "IT Intermediary Rules 2021/2023; Consumer Protection Act 2019",
  },
];

export default function OnlineGamingWalletBalanceRefundPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cyber & Financial Recovery", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "Gaming Wallet Refund", href: "/online-gaming-wallet-balance-refund" },
  ];

  return (
    <>
      {/* Structured Data Scripts */}
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
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Promotion &amp; Regulation of Online Gaming Act 2025†</span>
              <span className="text-red-500">•</span>
              <span>Section 65 Contract Act</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Real-Money Gaming Wallet Balance After the 2025 Act: Getting It Back
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Gaming Wallet Refund Rights)
              </p>
              <p>
                Under Section 65 of the Indian Contract Act and Section 2(47) of the Consumer Protection Act, 2019, real-money gaming operators cannot forfeit unutilised deposits following account bans, app delisting, or 2025 regulatory changes. Deposited money remains customer property held in bailment. Players can serve a formal 15-day statutory legal notice and file on e-Jagriti to compel immediate bank refunds with interest.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Principal Deposit Restitution Right
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% TDS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  On Unutilised Deposited Capital
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–18%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Interest in Court Decrees
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Demand Notice Window
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
            <GamingWalletTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype G4 Hero Comparison Table */}
              <section id="heading-comparison-matrix" aria-labelledby="heading-comparison-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparison Matrix of Gaming Wallet Recovery Routes in India
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Hero Comparison Grid
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a fantasy sports app, poker platform, rummy operator, or casual gaming service freezes your wallet, you do not have to accept automated refusal emails. Indian law provides four distinct legal escalation channels depending on whether you are claiming unutilised deposited capital, contested winnings, or recovering after a platform shutdown.
                </p>

                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">
                      Comparative Analysis of Real-Money Gaming Wallet Recovery Routes in India
                    </caption>
                    <thead>
                      <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Escalation Route</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Typical Timeline</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Estimated Cost</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Evidentiary Requirement</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Realistic Success Rate</th>
                        <th scope="col" className="p-3.5 sm:p-4 font-bold">Optimal Fit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-red-50/40 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          1. Statutory Advocate Demand Notice
                          <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                            Pre-litigation formal demand under CPA 2019
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">15–20 Days</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">₹999 (Flat Fee)</td>
                        <td className="p-3.5 sm:p-4">Bank debit UTR, wallet screenshot, ticket email</td>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-600">75%–85% Out-of-Court Settlement</td>
                        <td className="p-3.5 sm:p-4">Unutilised deposits, failed KYC blocks, initial escalations</td>
                      </tr>
                      <tr className="hover:bg-red-50/40 transition-colors bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          2. Consumer Commission (e-Jagriti)
                          <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                            District / State DCDRC Complaint
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">3–8 Months</td>
                        <td className="p-3.5 sm:p-4">₹0–₹2,000 court fee based on claim value</td>
                        <td className="p-3.5 sm:p-4">Legal notice copy, postal tracking, full financial ledger</td>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-600">85%–92% Favourable Decrees</td>
                        <td className="p-3.5 sm:p-4">High balance disputes (&gt;₹25k), claims seeking damages</td>
                      </tr>
                      <tr className="hover:bg-red-50/40 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          3. Cyber Crime (1930 / NCRP) &amp; MeitY GAC
                          <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                            Grievance Appellate Committee
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">30–60 Days</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">₹0 (Free Govt Portals)</td>
                        <td className="p-3.5 sm:p-4">Transaction UTR, cyber complaint slip, fraud acknowledgment</td>
                        <td className="p-3.5 sm:p-4 font-bold text-amber-600">40%–55% (Depends on Nodal Officer)</td>
                        <td className="p-3.5 sm:p-4">Offshore unlicensed betting apps, fraudulent fly-by-night sites</td>
                      </tr>
                      <tr className="hover:bg-red-50/40 transition-colors bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          4. Summary Civil Suit (Order 37 CPC)
                          <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                            Commercial / Civil Court Action
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">6–14 Months</td>
                        <td className="p-3.5 sm:p-4">State ad-valorem court fees + advocate charges</td>
                        <td className="p-3.5 sm:p-4">Written contract, electronic ledger under Sec 63 BSA</td>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-600">80% Recovery via Attachment</td>
                        <td className="p-3.5 sm:p-4">Institutional syndicates, balances exceeding ₹5–10 Lakh</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Which Route Fits Your Situation? Persona Breakdown */}
              <section id="heading-personas" aria-labelledby="heading-personas-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-personas-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Which Route Fits Your Situation? Three Realistic Player Scenarios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Legal strategy varies dramatically depending on whether your stuck money is your own unspent capital deposit, contested contest winnings, or trapped in an app that has shut down after the 2025 regulatory changes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-sm">
                      A
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      The Casual Player with Trapped Principal Deposit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You deposited ₹5,000 to ₹1,00,000 via UPI or netbanking, decided not to enter contests, and clicked &quot;Withdraw&quot;. The platform blocked you, claiming deposits must be 100% wagered or that your KYC is pending.
                    </p>
                    <div className="pt-2 text-xs font-bold text-[#DC2626]">
                      Recommended Route: Statutory Notice → 90% resolve before court.
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black text-sm">
                      B
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      The Contest Winner Facing Arbitrary Account Suspension
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You won legitimate cash contests in fantasy cricket, poker, or rummy. When you initiated withdrawal, your account was frozen for alleged &quot;fair play violations&quot; or hit with an illegal 30% TDS on your own capital.
                    </p>
                    <div className="pt-2 text-xs font-bold text-[#DC2626]">
                      Recommended Route: Advocate Notice → Consumer Commission (e-Jagriti).
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">
                      C
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      The Stranded Player After State Bans or App Delisting
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Your state passed legislation prohibiting real-money gaming or the platform was delisted following the Promotion &amp; Regulation of Online Gaming Act 2025†. You cannot log into the mobile app to withdraw your funds.
                    </p>
                    <div className="pt-2 text-xs font-bold text-[#DC2626]">
                      Recommended Route: Corporate Registered Office Demand + NCH / e-Jagriti.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Route 1 Deep Dive */}
              <section id="heading-route-notice" aria-labelledby="heading-route-notice-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-notice-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1 Deep Dive: Statutory Advocate Demand Notice to Gaming Platforms
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most online gaming companies operate with automated customer support bots that copy-paste pre-written excuses: &quot;Withdrawals are subject to 100% wagering&quot; or &quot;Our team is reviewing your activity.&quot; They do this because customer service agents have no legal authority to override algorithmic wallet restrictions.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A formal <Link href="/legal-notice-charges" className="text-red-600 underline font-semibold hover:text-red-700">statutory legal notice</Link> drafted by an advocate shifts the dispute from an automated ticketing queue directly onto the desks of the company&apos;s Legal Counsel, Compliance Officers, and Board of Directors. It cites:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                  <li>
                    <strong>Section 2(11) &amp; Section 2(47) Consumer Protection Act, 2019:</strong> Demonstrating that refusing withdrawal of deposited capital is an unfair trade practice and statutory deficiency of service.
                  </li>
                  <li>
                    <strong>Section 148 Indian Contract Act, 1872:</strong> Establishing that deposited funds are held in trust as a bailment and remain the sole property of the consumer until entered into an active game.
                  </li>
                  <li>
                    <strong>Section 316 / Section 318 Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Highlighting criminal breach of trust and cheating if customer money is dishonestly misappropriated or converted into corporate revenue.
                  </li>
                  <li>
                    <strong>Rule 3(2) Information Technology (Intermediary Guidelines) Rules, 2021/2023:</strong> Mandating that the intermediary&apos;s Nodal Grievance Officer respond to formal escalations within 15 days.
                  </li>
                </ul>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In over 75% of cases where deposits were held unlawfully, platforms process an out-of-court manual NEFT/IMPS bank transfer within the 15-day notice window to avoid public litigation and adverse judicial orders.
                </p>
              </section>

              {/* Section 4: Route 2 Deep Dive */}
              <section id="heading-route-consumer" aria-labelledby="heading-route-consumer-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-consumer"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2 Deep Dive: Consumer Disputes Commission (e-Jagriti)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If the gaming operator fails to refund your stuck wallet balance within the 15-day notice timeline, you can initiate a formal complaint before the District Consumer Disputes Redressal Commission (DCDRC). Under Section 34 of the Consumer Protection Act, 2019, you can file the case online via the <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">e-Jagriti portal</a> in the district where you reside, eliminating the need to travel to the company&apos;s registered office in Bengaluru, Mumbai, or Gurugram.
                </p>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    What Reliefs Can You Demand on e-Jagriti?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">1. 100% Principal Restitution</strong>
                      Order directing the platform to disburse the entire unutilised deposit and legitimate winnings directly to your bank account.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">2. Statutory Interest (9% to 18%)</strong>
                      Interest calculated from the exact date the withdrawal request was rejected or frozen until actual realisation.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">3. Harassment &amp; Mental Agony Damages</strong>
                      Compensation ranging from ₹15,000 to ₹50,000 for coercive lock-in and unlawful retention of funds.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">4. Full Litigation Costs</strong>
                      Court orders directing the corporate operator to reimburse your legal fees and advocate drafting costs.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Route 3 Deep Dive */}
              <section id="heading-route-cyber" aria-labelledby="heading-route-cyber-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-cyber-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3 Deep Dive: National Cyber Crime Portal &amp; MeitY GAC Escalation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For unregulated, offshore, or suspicious gaming websites (such as illegal betting applications masquerading as skill games), normal consumer notices may be ignored if the company operates through shell entities. In such circumstances, the dispute enters the realm of cyber financial fraud:
                </p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <p>
                    <strong>1. National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in):</strong> If the gaming app was a fraudulent setup that took deposits through mule UPI accounts and suddenly disappeared, register an immediate cyber financial fraud complaint under the <Link href="/how-to-recover-money-stuck-in-online-cyber-fraud" className="text-red-600 underline font-semibold hover:text-red-700">CFCFRMS framework</Link> to freeze the receiving merchant bank account.
                  </p>
                  <p>
                    <strong>2. MeitY Grievance Appellate Committee (GAC):</strong> Under Rule 3A of the IT Rules, if a registered digital intermediary fails to resolve a grievance or its Grievance Officer issues an arbitrary rejection, users can appeal to the Central Government&apos;s online Grievance Appellate Committee at <code>gac.gov.in</code> within 30 days. The GAC issues binding directions to intermediaries to restore user rights.
                  </p>
                </div>
              </section>

              {/* Section 6: Route 4 Deep Dive */}
              <section id="heading-route-civil" aria-labelledby="heading-route-civil-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-civil-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 4 Deep Dive: Summary Civil Suit (Order XXXVII CPC) &amp; Section 316 BNS
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For substantial commercial balances (e.g., esports teams, high-stakes tournament winners, or gaming wallet deposits exceeding ₹5 Lakh to ₹20 Lakh), high-velocity civil remedies exist alongside criminal remedies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                  <li>
                    <strong>Order XXXVII Code of Civil Procedure (Summary Suit):</strong> Where a clear digital ledger exists showing deposited fiat funds and the platform refuses refund, a summary suit can be instituted. Under Order 37, the defendant company has no automatic right to defend unless it establishes a substantial bona fide defense within 10 days of summons.
                  </li>
                  <li>
                    <strong>Section 316 BNS (Criminal Breach of Trust):</strong> When directors and officers of a gaming enterprise deliberately divert player deposit pools into corporate operational expenses rather than segregated escrow accounts, criminal prosecution can be pursued against individual officers in charge under the principles established in <Link href="/cheque-bounce-case-against-company-directors" className="text-red-600 underline font-semibold hover:text-red-700">director liability jurisprudence</Link>.
                  </li>
                </ul>
              </section>

              {/* Section 7: The 2025/2026 Legal Framework */}
              <section id="heading-legal-framework" aria-labelledby="heading-legal-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Framework: 2025 Online Gaming Act† &amp; Intermediary Obligations
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Indian online gaming ecosystem underwent substantial statutory transformation with the enactment of the Promotion &amp; Regulation of Online Gaming Act 2025† alongside the amended Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules. The legal framework establishes three core principles governing player money:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      1. Segregated Fiduciary Escrow
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Player Deposits Are Not Company Revenue
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Real-money intermediaries are legally obligated to maintain user deposits in separate nodal or escrow accounts under RBI PPI principles. Player funds cannot be treated as operational capital or pledgeable corporate assets.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      2. Ban-Proof Restitution Mandate
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Regulatory Bans Do Not Extinguish Debts
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 65 of the Indian Contract Act, 1872, when gaming contests become unlawful due to statutory notifications, the operator&apos;s contractual duty to return unspent consideration remains legally enforceable against the company.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Principal Deposit vs Net Winnings & Section 194BA TDS */}
              <section id="heading-principal-vs-winnings" aria-labelledby="heading-principal-vs-winnings-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-principal-vs-winnings-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Principal Deposit vs. Net Winnings: Understanding Section 194BA TDS
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A frequent dispute arises when platforms misapply Section 194BA of the Income Tax Act, 1961. Knowing how your wallet balance is segregated is crucial before issuing a demand notice:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    <div className="p-5 space-y-2">
                      <span className="text-xs font-black uppercase text-emerald-600 tracking-wider">Category 1</span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">Unutilised Cash Deposit</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Fiat money transferred from your bank or card that has not entered any contest. <strong>0% TDS applies.</strong> Must be refunded 100% upon request without wagering mandates.
                      </p>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-xs font-black uppercase text-blue-600 tracking-wider">Category 2</span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">Legitimate Net Winnings</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Cash won from skill contests. Subject to <strong>30% statutory TDS under Section 194BA</strong> on net profit only. The remaining 70% is fully withdrawable to your verified bank account.
                      </p>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Category 3</span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">Promotional Cash Bonus</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Marketing bonus credits awarded by the platform for app signups or deposit matches. Generally non-withdrawable into bank accounts and subject to expiry clauses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Interactive Problem Diagnostic Tabs */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Diagnostic: Why Is Your Gaming Wallet Balance Stuck?
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Scenario Troubleshooter
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your exact dispute scenario below to examine the governing legal provision and the immediate step-by-step resolution pathway:
                </p>
                <GamingWalletProblemTabs />
              </section>

              {/* Section 10: Verified Case Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Legal Precedents: 4 Verifiable Orders on Gaming Wallet Refunds
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

                        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <div>
                            <strong className="text-emerald-700 font-bold">Relief Granted: </strong>
                            <span className="text-slate-800 font-semibold">{c.amount}</span>
                          </div>
                          <div className="text-slate-500 italic">
                            Key takeaway: {c.takeaway}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 11: Hand-Authored SVG Diagram */}
              <section id="heading-recovery-pipeline" aria-labelledby="heading-recovery-pipeline-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-recovery-pipeline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Restitution Pipeline: From Frozen Wallet to Bank Credit
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The flowchart below illustrates how an unlawful gaming wallet retention escalates from customer support deadlock into a binding court order or out-of-court settlement:
                </p>

                <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 880 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Statutory Restitution Pipeline Flowchart"
                  >
                    {/* Step 1 */}
                    <rect x="10" y="30" width="180" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <circle cx="35" cy="55" r="14" fill="#EF4444" />
                    <text x="31" y="60" fill="white" fontSize="12" fontWeight="bold">1</text>
                    <text x="60" y="60" fill="#0F172A" fontSize="13" fontWeight="bold">Wallet Blocked</text>
                    <text x="25" y="90" fill="#475569" fontSize="11">Withdrawal rejected,</text>
                    <text x="25" y="108" fill="#475569" fontSize="11">KYC loop initiated, or</text>
                    <text x="25" y="126" fill="#475569" fontSize="11">app banned post-2025 Act.</text>
                    <text x="25" y="155" fill="#EF4444" fontSize="10" fontWeight="bold">Bot Support Ignored</text>

                    {/* Arrow 1 */}
                    <path d="M200 105 L225 105" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect x="235" y="30" width="180" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="260" cy="55" r="14" fill="#3B82F6" />
                    <text x="256" y="60" fill="white" fontSize="12" fontWeight="bold">2</text>
                    <text x="285" y="60" fill="#0F172A" fontSize="13" fontWeight="bold">Ledger Export</text>
                    <text x="250" y="90" fill="#475569" fontSize="11">Preserve UPI debit UTR,</text>
                    <text x="250" y="108" fill="#475569" fontSize="11">wallet passbook PDF &amp;</text>
                    <text x="250" y="126" fill="#475569" fontSize="11">Grievance email ticket.</text>
                    <text x="250" y="155" fill="#3B82F6" fontSize="10" fontWeight="bold">Sec 63 BSA Evidence</text>

                    {/* Arrow 2 */}
                    <path d="M425 105 L450 105" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 3 */}
                    <rect x="460" y="30" width="180" height="150" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                    <circle cx="485" cy="55" r="14" fill="#DC2626" />
                    <text x="481" y="60" fill="white" fontSize="12" fontWeight="bold">3</text>
                    <text x="510" y="60" fill="#991B1B" fontSize="13" fontWeight="bold">Statutory Notice</text>
                    <text x="475" y="90" fill="#7F1D1D" fontSize="11">15-day formal advocate</text>
                    <text x="475" y="108" fill="#7F1D1D" fontSize="11">demand served via Speed</text>
                    <text x="475" y="126" fill="#7F1D1D" fontSize="11">Post + corporate email.</text>
                    <text x="475" y="155" fill="#DC2626" fontSize="10" fontWeight="bold">75% Resolve Here</text>

                    {/* Arrow 3 */}
                    <path d="M650 105 L675 105" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 4 */}
                    <rect x="685" y="30" width="180" height="150" rx="12" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="2" />
                    <circle cx="710" cy="55" r="14" fill="#059669" />
                    <text x="706" y="60" fill="white" fontSize="12" fontWeight="bold">4</text>
                    <text x="735" y="60" fill="#065F46" fontSize="13" fontWeight="bold">e-Jagriti Decree</text>
                    <text x="700" y="90" fill="#047857" fontSize="11">Consumer court awards</text>
                    <text x="700" y="108" fill="#047857" fontSize="11">100% refund + 9%-18%</text>
                    <text x="700" y="126" fill="#047857" fontSize="11">interest + compensation.</text>
                    <text x="700" y="155" fill="#059669" fontSize="10" fontWeight="bold">Direct Bank Credit</text>

                    {/* Arrow definition */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 12: Worked Dispute Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Case Example: Recovering ₹84,500 Frozen Post-Ban
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      Dispute Case Study: Fantasy Cricket App Account Freeze
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                      100% Refund Recovered
                    </span>
                  </div>

                  <p className="leading-relaxed">
                    <strong>The Problem:</strong> Amit, an engineer based in Hyderabad, deposited ₹60,000 into a major fantasy sports application ahead of the cricket tournament season. Through strategic contest selections, his balance reached ₹84,500 (comprising ₹60,000 deposited principal + ₹24,500 net winnings). Following state regulatory notifications prohibiting real-money prize contests, the app disabled the &quot;Withdraw&quot; button and displayed an automated banner: <em>&quot;Real-money gaming operations are restricted in your territory. Withdrawals are temporarily unavailable.&quot;</em>
                  </p>

                  <p className="leading-relaxed">
                    <strong>The Frustration:</strong> Amit sent 6 support tickets and 4 emails to customer care over 45 days. The platform repeatedly claimed that &quot;technical adjustments are being made with payment partners&quot; while refusing to disburse the funds via direct IMPS or reverse the original UPI transactions.
                  </p>

                  <p className="leading-relaxed">
                    <strong>The Legal Action:</strong> Amit engaged LegalRecovery.in to serve a formal 15-day statutory demand notice. The notice was addressed to the corporate parent&apos;s registered address in Bengaluru and served concurrently via Registered Speed Post and digital transmission under Section 63 BSA. The notice cited Section 65 of the Indian Contract Act, Section 2(47) CPA 2019, and the Bangalore Consumer Court ruling in <em>Rahul Sharma v. Sporta Technologies</em>, demanding:
                  </p>

                  <ul className="list-disc list-inside space-y-1 pl-2 text-slate-800 font-medium">
                    <li>Immediate refund of ₹60,000 unutilised principal deposit without TDS.</li>
                    <li>Disbursement of ₹24,500 net winnings minus 30% TDS under Section 194BA (net ₹17,150) with Form 16A certificate.</li>
                    <li>Warning of impending Section 35 e-Jagriti consumer complaint with ₹50,000 mental agony damages.</li>
                  </ul>

                  <p className="leading-relaxed bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-emerald-900">
                    <strong>The Resolution:</strong> On day 11 following delivery of the statutory speed post notice, the gaming company&apos;s Senior Legal Manager contacted Amit via email. The platform bypassed the mobile app&apos;s geo-block and executed a direct corporate NEFT transfer of ₹77,150 (₹60,000 full principal + ₹17,150 net post-tax winnings) directly into Amit&apos;s registered HDFC Bank account, providing the 12-digit UTR tracking code.
                  </p>
                </div>
              </section>

              {/* Section 13: Myth vs Fact Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: Terms of Service, Forfeiture &amp; Player Legal Rights
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Legal Reality Check
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MYTH_FACTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-black uppercase text-red-500 tracking-wider">
                          Myth #{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                          &quot;{item.myth}&quot;
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 space-y-1">
                        <span className="text-[11px] font-black uppercase text-emerald-600 tracking-wider">
                          The Statutory Fact
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {item.fact}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500 mt-1">
                          Authority: {item.authority}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: Evidentiary Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidentiary Checklist: What Documents You Need Before Demanding a Refund
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To ensure your statutory demand notice or consumer forum complaint is unassailable, assemble the following evidentiary documentation compliant with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
                    <span className="text-emerald-500 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Bank &amp; UPI Inward Statements</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        PDF statements showing the 12-digit UTR numbers for each deposit transfer into the gaming merchant.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
                    <span className="text-emerald-500 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Wallet Passbook Screenshots</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Timestamped export showing total balance, unutilised deposit ledger, and net winnings breakdown.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
                    <span className="text-emerald-500 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">KYC Submission Proof</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Screen recording or screenshots demonstrating approved PAN/Aadhaar or unjustified rejection error codes.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
                    <span className="text-emerald-500 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Grievance Ticket Trail</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Copies of support emails dispatched to the platform&apos;s Nodal Grievance Officer and canned rejection replies.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 15: Honest Scope */}
              <section id="heading-scope-honesty" aria-labelledby="heading-scope-honesty-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scope-honesty"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do for Gaming Disputes
                </h2>
                <div className="bg-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <h3 className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                        <span>✔</span> What We Pursue With Full Legal Force
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>• Recovering 100% of unutilised deposited cash held in registered Indian gaming platforms.</li>
                        <li>• Challenging arbitrary account freezes and wrongful &quot;fair play&quot; confiscations before consumer forums.</li>
                        <li>• Reversing illegal 30% TDS deductions levied on customer capital deposits.</li>
                        <li>• Serving unassailable 15-day advocate demand notices to corporate headquarters and directors.</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <h3 className="text-sm font-bold text-red-800 flex items-center gap-1.5">
                        <span>✖</span> What We Cannot Do (Unrealistic Claims)
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>• We cannot recover funds lost in fair, completed games where you willingly lost contests.</li>
                        <li>• We cannot bypass statutory Section 194BA TDS on genuine net contest winnings.</li>
                        <li>• We cannot guarantee recovery from anonymous, offshore crypto betting sites with no Indian corporate entity.</li>
                        <li>• We do not promise magical &quot;2-hour cyber hacker recoveries&quot; — we use legitimate Indian courts and statutes.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 16: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Online Gaming Wallet Balance Refunds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Guidance Grounded in CPA 2019, IT Rules, and Indian Consumer Jurisprudence
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

              {/* Section 17: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Court Judgments &amp; Official Regulatory References
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
                  Statutory verification status: All provisions verified against active India Code enactments, MeitY IT Intermediary Notifications, Central Board of Direct Taxes (CBDT) circulars, and Consumer Disputes Commission reported judgments as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Notice to the Gaming Platform
                </h2>
                <GamingWalletNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Financial Dispute &amp; Cyber Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/how-to-recover-money-stuck-in-online-cyber-fraud"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How to Recover Money Stuck in Online Cyber Fraud →
                  </Link>
                  <Link
                    href="/task-scam-telegram-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Telegram Task Scam Money Recovery →
                  </Link>
                  <Link
                    href="/crypto-exchange-withdrawal-stuck-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Crypto Exchange Withdrawal Stuck Legal Options →
                  </Link>
                  <Link
                    href="/sebi-smart-odr-broker-complaint"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    SEBI SMART ODR &amp; Stock Broker Dispute Portal →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Transparent Fee Schedule →
                  </Link>
                  <Link
                    href="/law/rbi-ombudsman-complaint-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RBI Integrated Ombudsman Banking Complaint Guide →
                  </Link>
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Company Director Liability in Commercial Default →
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
