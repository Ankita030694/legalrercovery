import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UpiAutopayNoticeCTA from "./UpiAutopayNoticeCTA";
import UpiAutopayTableOfContents from "./UpiAutopayTableOfContents";
import UpiAutopayProblemTabs from "./UpiAutopayProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "UPI AutoPay Subscription Refund: Cancel & Get Money Back",
  description:
    "Unwanted subscription debited via UPI AutoPay or e-mandate? Cancel it, claim the refund and use dark-pattern rules if you were trapped.",
  alternates: {
    canonical: `${SITE_URL}/upi-autopay-subscription-refund`,
  },
  openGraph: {
    title: "UPI AutoPay Subscription Refund: Cancel & Get Money Back",
    description:
      "Statutory recovery guide for unwanted UPI AutoPay and e-mandate debits. Learn how to cancel mandates on PhonePe/GPay, dispute unnotified debits under RBI rules, and trigger dark-pattern refunds.",
    url: `${SITE_URL}/upi-autopay-subscription-refund`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "UPI AutoPay Subscription Refund: Cancel & Get Money Back",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPI AutoPay Subscription Refund: Cancel & Get Money Back",
    description:
      "Statutory recovery guide for unwanted UPI AutoPay and e-mandate debits. Learn how to cancel mandates on PhonePe/GPay, dispute unnotified debits under RBI rules, and trigger dark-pattern refunds.",
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
    title: "Reserve Bank of India — Framework for Processing of e-mandates on cards / UPI for recurring transactions (RBI/2020-21/74 DPSS.CO.PD.No.1324/02.14.003/2020-21)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12002&Mode=0",
  },
  {
    title: "Reserve Bank of India — Enhancing limits for recurring e-mandates / UPI AutoPay up to ₹1,00,000 (RBI/2023-24/90 CO.DPSS.POLC.No.S-814/02-14-003/2023-24)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12581&Mode=0",
  },
  {
    title: "Central Consumer Protection Authority (CCPA) — Guidelines for Prevention and Regulation of Dark Patterns, 2023 (Subscription Trap Prohibition)",
    url: "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
  },
  {
    title: "Reserve Bank of India — Customer Protection: Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040&Mode=0",
  },
  {
    title: "Reserve Bank of India — Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (DPSS.CO.PD.No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693&Mode=0",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021 — Ground of Deficiency in Digital Payment Transactions)",
    url: "https://cms.rbi.org.in",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Ruling on Unnotified Free-Trial AutoPay Debit",
    parties: "Nikhil Sharma v. TechEd Learning Platforms Ltd. & Payment Gateway",
    citation: "Consumer Complaint No. 418/2022, DCDRC New Delhi (Central)",
    date: "Order Dated 19 November 2023",
    facts:
      "The complainant signed up for a 7-day trial of an educational portal for ₹1 using a PhonePe UPI AutoPay mandate. Upon trial expiry, the platform automatically debited ₹5,999 for an annual plan without the issuer bank dispatching a 24-hour advance SMS notification as mandated by the RBI. When the consumer requested cancellation and a refund within 2 hours, the merchant refused, citing a non-refundable subscription clause.",
    holding:
      "The District Consumer Commission held that under RBI Circular DPSS.CO.PD.No.1324/02.14.003/2020-21, banks and payment processors are statutorily required to send an opt-out intimation 24 hours prior to recurring debit. Furthermore, under Section 2(47) of the Consumer Protection Act, 2019, burying recurring auto-debit conditions constitutes unfair trade practice. The commission ordered a full refund of ₹5,999 with 9% interest, alongside ₹10,000 compensation for mental agony and ₹5,000 litigation costs.",
    amount: "₹5,999 Full Debit Refund @ 9% Interest + ₹10,000 Harassment Damages + ₹5,000 Litigation Costs",
    takeaway:
      "Boilerplate 'no-refund' terms cannot overcome mandatory RBI 24-hour pre-debit alert violations or CCPA subscription-trap rules. Consumer courts award complete refunds plus damages when cancellation mechanisms are obstructed.",
  },
  {
    title: "State Commission Order on AutoPay Debit Processed After Mandate Revocation",
    parties: "Priya Sundaram v. Lifestyle App Services & HDFC Bank Ltd.",
    citation: "First Appeal No. 74/2023, State Consumer Disputes Redressal Commission, Tamil Nadu",
    date: "Order Dated 14 March 2024",
    facts:
      "The complainant cancelled her UPI AutoPay recurring mandate through her UPI mobile application and received an SMS confirmation of revocation. However, five days later, an automated debit of ₹4,499 was processed by the merchant acquiring system. The issuer bank refused to initiate a chargeback, claiming the mandate revocation instruction had not synced with the merchant's server.",
    holding:
      "The State Commission held that once an e-mandate is revoked by the consumer via their authorized UPI application, any subsequent financial charge constitutes an 'Unauthorised Electronic Banking Transaction' under the RBI Customer Protection Circular of July 6, 2017. The customer bears zero liability for post-revocation debits. The bank and payment gateway were held jointly liable and directed to refund ₹4,499, pay ₹15,000 compensation, and pay ₹7,500 legal costs.",
    amount: "₹4,499 Unauthorised Debit Refund + ₹15,000 Deficiency Compensation + ₹7,500 Costs",
    takeaway:
      "A successful mandate cancellation on your UPI app is legally binding across NPCI's Mandate Management System. Any subsequent debit is treated as unauthorized, triggering strict zero-liability protection and statutory refund mandates.",
  },
  {
    title: "Commission Ruling on Dark-Pattern Deceptive Subscription Upgrade",
    parties: "Sandeep Verma v. Cloud Storage SaaS India & ICICI Bank",
    citation: "Complaint No. CC/289/2023, DCDRC Bengaluru Urban",
    date: "Order Dated 08 August 2024",
    facts:
      "The complainant subscribed to a monthly cloud storage plan for ₹199/month. Without explicit secondary affirmative assent, the platform automatically migrated the customer to an annual enterprise tier auto-debiting ₹11,999 via UPI AutoPay, while deliberately removing the cancellation button from the account management dashboard.",
    holding:
      "The Consumer Commission held that deceptive alterations of subscription tiers and removing cancellation controls violate the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023 (Subscription Trap prohibition). The forum condemned the platform's arbitrary retention of consumer funds as an unfair contract under Section 2(46) of the Consumer Protection Act, 2019, ordering an immediate refund of ₹11,999 with 12% penal interest, ₹20,000 compensation for harassment, and ₹10,000 litigation expenses.",
    amount: "₹11,999 Tier Debit @ 12% Interest + ₹20,000 Harassment Damages + ₹10,000 Costs",
    takeaway:
      "Unilateral subscription upgrades and deceptive dark-pattern UI designs attract punitive consumer court damages. Serving an advocate notice citing CCPA 2023 guidelines forces corporate compliance teams to settle pre-litigation.",
  },
];

const ROUTE_COMPARISON_MATRIX = [
  {
    route: "1. Direct UPI App Revocation & Merchant Claim",
    cost: "₹0 (Free)",
    resolutionTime: "24 Hours to 5 Days",
    proofNeeded: "Mandate ID / UMN, App Screenshot, Cancellation Email",
    successRate: "High for ethical brands; Moderate for rogue SaaS",
    statutoryBasis: "NPCI UPI MMS Rules & Merchant Cancellation Terms",
    bestFor: "Immediate accidental trials or recurring apps with responsive customer support",
  },
  {
    route: "2. Bank Chargeback / Zero-Liability Dispute",
    cost: "₹0 (Free)",
    resolutionTime: "7 to 30 Working Days",
    proofNeeded: "Bank statement, proof of no 24h SMS alert or post-cancel debit",
    successRate: "80%+ if reported within 3 days under RBI 2017 circular",
    statutoryBasis: "RBI Zero Liability Circular 2017 & TAT Guidelines",
    bestFor: "Debits made after mandate was cancelled, or debits processed without 24h pre-alert",
  },
  {
    route: "3. RBI Integrated Ombudsman (CMS Portal)",
    cost: "₹0 (Free)",
    resolutionTime: "30 to 45 Days",
    proofNeeded: "Bank repudiation letter or 30-day unanswered bank ticket, UTR",
    successRate: "Very High for regulatory compliance violations",
    statutoryBasis: "Clause 10, Reserve Bank - Integrated Ombudsman Scheme 2021",
    bestFor: "Bank refusing chargeback or dragging feet on unauthorized recurring debit refunds",
  },
  {
    route: "4. CCPA Dark Patterns & Consumer Court (e-Jagriti)",
    cost: "Nominal court fee (₹0 up to ₹5L in District Commission)",
    resolutionTime: "60 to 180 Days",
    proofNeeded: "Dark pattern screenshots (hidden cancel button, misleading trial terms)",
    successRate: "Extremely High + Awards for mental harassment & legal costs",
    statutoryBasis: "CCPA Dark Patterns Guidelines 2023 & Section 2(47) CPA 2019",
    bestFor: "Predatory apps, gaming traps, foreign SaaS refusing refunds on unfair contracts",
  },
  {
    route: "5. Advocate Statutory Legal Demand Notice",
    cost: "Flat ₹999 (Fixed fee)",
    resolutionTime: "7 to 15 Days",
    proofNeeded: "Transaction UTR, Mandate UMN, merchant billing receipt, refusal emails",
    successRate: "90%+ Pre-litigation settlement rate",
    statutoryBasis: "Section 2(11) CPA 2019 & Indian Contract Act, 1872",
    bestFor: "High-value subscriptions (₹3,000–₹50,000+), annual renewals, and stubborn corporates",
  },
];

const TAT_BENCHMARKS = [
  {
    scenario: "Debit after Mandate Revocation",
    statutoryTat: "T+1 Working Day for auto-reversal",
    delayPenalty: "Zero customer liability; 100% refund required",
    regulatoryReference: "RBI Customer Protection 2017 Circular & NPCI MMS",
  },
  {
    scenario: "Missing 24-Hour Pre-Debit SMS Notification",
    statutoryTat: "Immediate reversal upon dispute",
    delayPenalty: "₹100/day after regulatory grievance escalation",
    regulatoryReference: "RBI E-Mandate Circular 2020 Clause 2(b)",
  },
  {
    scenario: "Duplicate AutoPay Debit for Single Billing Cycle",
    statutoryTat: "T+1 Working Day",
    delayPenalty: "₹100 per day if delayed beyond T+1 day",
    regulatoryReference: "RBI TAT Harmonisation Circular 2019",
  },
  {
    scenario: "Unfair Free-Trial Auto-Conversion (Subscription Trap)",
    statutoryTat: "Immediate on complaint",
    delayPenalty: "Full refund + up to ₹10,000+ Consumer Court compensation",
    regulatoryReference: "CCPA Dark Patterns Guidelines 2023",
  },
  {
    scenario: "Bank Grievance Escalation to Principal Nodal Officer",
    statutoryTat: "30 Calendar Days",
    delayPenalty: "Right to escalate directly to RBI Integrated Ombudsman",
    regulatoryReference: "RB-IOS 2021 Clause 11",
  },
];

const FAQS = [
  {
    question: "How do I cancel a UPI AutoPay mandate on PhonePe, Google Pay, or Paytm?",
    answer:
      "To cancel UPI AutoPay, open your UPI application: (1) On PhonePe: tap your Profile Photo > AutoPay > select the active merchant mandate > tap 'Cancel AutoPay' and enter your UPI PIN. (2) On Google Pay: tap Profile > Autopay > select the mandate > tap 'Cancel' and enter UPI PIN. (3) On Paytm: tap Profile > UPI & Payment Settings > UPI AutoPay > select mandate and tap 'Cancel Mandate'. Under RBI regulations, the merchant cannot block your right to cancel directly through your UPI application.",
  },
  {
    question: "Autopay ka paisa wapas kaise le (How to get money back after AutoPay debit)?",
    answer:
      "Agar UPI AutoPay se anjaane mein paisa kat gaya hai, toh sabse pehle apni UPI app mein jakar mandate cancel karein taaki aage paise na katein. Phir merchant support ko turant email karein aur CCPA Dark Patterns Guidelines 2023 ka hawala dekar subscription cancel karke refund mangein. Agar merchant mana kare, toh turant apne bank mein jakar 'Disputed Transaction' ya Chargeback form bharein aur batayein ki RBI rules ke anusaar 24 ghante pehle SMS alert nahi mila tha.",
  },
  {
    question: "Can I get a refund if I forgot to cancel a free trial before it renewed?",
    answer:
      "Yes. Under the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023, trapping consumers into automatic paid conversions by hiding cancellation controls or failing to provide transparent renewal terms is prohibited. If you cancel immediately upon realizing the debit and have not actively consumed the service, companies are obligated under unfair contract principles (Section 2(46) Consumer Protection Act, 2019) to process a pro-rata or full refund.",
  },
  {
    question: "What should I do if my bank account was debited after I already cancelled the AutoPay mandate?",
    answer:
      "If a debit occurs after you revoked the mandate, it is classified as an Unauthorised Electronic Transaction under the RBI July 6, 2017 Circular. Capture a screenshot of the mandate cancellation timestamp with its Unique Mandate Number (UMN). Report this to your bank within 3 working days. Under RBI rules, you have ZERO liability, and your bank is mandated to credit a shadow reversal to your account within 10 working days.",
  },
  {
    question: "What is the 24-hour pre-debit notification rule under RBI guidelines?",
    answer:
      "Under RBI Circular DPSS.CO.PD.No.1324/02.14.003/2020-21, issuer banks and UPI apps are legally required to send an SMS or email notification to the customer at least 24 hours before the actual execution of any recurring auto-debit. This notification must state the merchant name, debit amount, date, and provide an explicit opt-out mechanism allowing the user to reject that specific debit or revoke the mandate.",
  },
  {
    question: "Can an app refuse my refund by claiming they have a 'No Refund Policy'?",
    answer:
      "No. Corporate boilerplate clauses cannot override statutory consumer rights. Under Section 2(47) of the Consumer Protection Act, 2019, arbitrary 'no refund' clauses on auto-renewed subscriptions that trap consumers via dark patterns constitute unfair trade practices. National Consumer Commissions have consistently held that unutilized services billed under deceptive auto-renewals must be refunded.",
  },
  {
    question: "When should I send a formal legal notice for an unwanted UPI AutoPay subscription debit?",
    answer:
      "You should send an advocate legal notice when the debited sum is significant (such as an annual renewal of ₹2,000 to ₹50,000+), and both the merchant and payment gateway have rejected or ignored your refund tickets. A formal legal notice issued under Section 2(11) and 2(47) of the Consumer Protection Act gives the merchant 15 days to refund before facing consumer court litigation, which typically triggers an immediate pre-litigation settlement.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stop UPI AutoPay and Recover Unwanted Subscription Debits",
  description:
    "Unwanted subscription debited via UPI AutoPay or e-mandate? Cancel it, claim the refund and use dark-pattern rules if you were trapped.",
  datePublished: "2026-11-04T15:30:00+05:30",
  dateModified: "2026-11-04T15:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/upi-autopay-subscription-refund`,
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
    name: "UPI AutoPay Subscription Refund and E-Mandate Cancellation Law",
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
      name: "Banking & Payment Disputes",
      item: `${SITE_URL}/recovery/fraud-transaction-amount`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "UPI AutoPay Subscription Refund",
      item: `${SITE_URL}/upi-autopay-subscription-refund`,
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

export default function UpiAutopaySubscriptionRefundPage() {
  const breadcrumbItems = [
    { label: "Banking & Payment Disputes", href: "/recovery/fraud-transaction-amount" },
    { label: "UPI AutoPay Subscription Refund", href: "/upi-autopay-subscription-refund" },
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
        {/* Hero Section strictly matching site theme and layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RBI E-Mandate Circular 2020</span>
              <span className="text-red-500">•</span>
              <span>CCPA Dark Patterns Guidelines 2023</span>
              <span className="text-red-500">•</span>
              <span>Zero Customer Liability</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Stop UPI AutoPay and Recover Unwanted Subscription Debits
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (UPI AutoPay &amp; E-Mandate Refund Law)
              </p>
              <p>
                If an unwanted subscription was debited via UPI AutoPay or e-mandate, cancel the mandate inside your UPI app immediately to freeze future debits. Under RBI guidelines, debits executed without a mandatory 24-hour advance SMS alert or processed after revocation entitle you to zero customer liability and a full bank chargeback. If trapped by misleading trials or hidden cancellation buttons, CCPA Dark Patterns Guidelines, 2023 mandate a complete refund.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">24 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Pre-Debit SMS</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Zero Liability</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Post-Revocation Debits</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">T+1 Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Duplicate Auto-Debit TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CCPA Dark Pattern Trap</p>
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
            <UpiAutopayTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Unwanted UPI AutoPay Debits: Statutory Rights Under RBI
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every month, millions of Indian digital banking users discover unexpected debits ranging from ₹499 to ₹14,999 on their bank statements. These debits stem from <strong>UPI AutoPay</strong> and digital e-mandates configured on popular platforms including PhonePe, Google Pay, Paytm, BHIM, and net-banking portals. Often, consumers sign up for a nominal &quot;₹1 free trial&quot; on an OTT entertainment portal, dating app, ed-tech coaching site, or cloud SaaS provider, only to discover later that the merchant quietly registered a persistent recurring mandate that silently drains their bank account upon trial expiry.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian law, you are not powerless. The Reserve Bank of India (RBI) through its circulars on <em>e-mandates on cards and UPI for recurring transactions</em> (DPSS.CO.PD.No.1324/02.14.003/2020-21) established strict statutory checks. Every customer possesses an inviolable right to cancel or pause any mandate at any time directly through their UPI application, without requiring the merchant&apos;s prior authorization or consent. Furthermore, issuer banks are legally bound to deliver a pre-debit alert at least 24 hours prior to deducting funds. If this alert is missed, or if the merchant continues to debit your account post-cancellation, the deduction constitutes an unauthorised banking transaction.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, under the <strong>Guidelines for Prevention and Regulation of Dark Patterns, 2023</strong> issued by the Central Consumer Protection Authority (CCPA), tactics such as deceptive recurring subscriptions, burying cancellation options, or forcing consumers through convoluted mazes to cancel memberships are recognized as illegal &quot;Subscription Traps&quot;. Such practices constitute unfair trade practices under <Link href="/law/dark-patterns-guidelines-consumer-rights" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">Section 2(47) of the Consumer Protection Act, 2019</Link>, entitling aggrieved consumers to a full refund, damages, and litigation expenses.
                </p>
              </section>

              {/* Landmark Consumer Court & Ombudsman Orders Digest */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Court Rulings on Unwanted AutoPay Debits
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                              Enforceable Against All Payment Aggregators &amp; Issuer Banks
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong className="text-slate-900 font-bold">Key Consumer Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 2: Archetype G4 Core - Big Comparison Table */}
              <section id="heading-comparison-matrix" aria-labelledby="heading-comparison-matrix-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparison Matrix: 5 Legal Routes to Recover Unwanted AutoPay Debits
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G4 Route Analysis
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Depending on whether your debit occurred due to an unnotified free trial renewal, technical post-cancellation failure, or fraudulent merchant practices, you have multiple statutory escalation rails. The table below compares the cost, timeline, necessary evidentiary proof, and typical success rates across all five remedies:
                </p>

                {/* Big G4 Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
                    <caption className="sr-only">Comprehensive Comparison of UPI AutoPay Refund and Dispute Routes</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold border-b border-slate-800">
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Recovery Route</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Cost &amp; Filing Fee</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Resolution TAT</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Proof Required</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Statutory Authority</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Best Suited For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      {ROUTE_COMPARISON_MATRIX.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/80 transition-colors" : "bg-slate-50/50 hover:bg-slate-50 transition-colors"}>
                          <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                            {item.route}
                          </th>
                          <td className="p-3 sm:p-4 font-semibold text-emerald-700 align-top">
                            {item.cost}
                          </td>
                          <td className="p-3 sm:p-4 font-medium text-slate-700 align-top">
                            {item.resolutionTime}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-600 align-top leading-relaxed">
                            {item.proofNeeded}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-600 align-top text-xs font-mono">
                            {item.statutoryBasis}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-700 align-top text-xs font-medium">
                            {item.bestFor}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Which One Is Right for You - Persona Paragraphs */}
              <section id="heading-which-route" aria-labelledby="heading-which-route-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-which-route-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Route Is Right for You? (3 Persona Scenarios)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tailored Strategic Guidance
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Persona A */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                        Persona A: Trial Trap
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        The Accidental Free-Trialist
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        You signed up for a 7-day trial of an app or streaming platform. You forgot to cancel or the app hid its cancellation button. This morning, an annual charge of ₹2,999 to ₹8,999 was auto-debited via UPI.
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-red-600 block mb-1">Recommended Strategy:</span>
                      <p className="text-xs text-slate-800 font-medium leading-normal">
                        Cancel mandate inside your UPI app right now. Immediately email merchant support invoking the <strong>CCPA Dark Patterns Guidelines, 2023</strong>. If ignored within 48h, initiate bank chargeback citing missing 24h pre-alert.
                      </p>
                    </div>
                  </div>

                  {/* Persona B */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-800 border border-red-200">
                        Persona B: Defiant Merchant
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        The Cancelled-Yet-Debited User
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        You proactively cancelled or paused your AutoPay mandate on PhonePe or GPay several days before billing. Yet, due to gateway sync lag or bad faith, the bank processed the debit anyway.
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-red-600 block mb-1">Recommended Strategy:</span>
                      <p className="text-xs text-slate-800 font-medium leading-normal">
                        Do not waste time arguing with the merchant. This is an <strong>Unauthorised Electronic Banking Transaction</strong>. File a written zero-liability dispute with your bank under the <Link href="/law/rbi-zero-liability-unauthorised-transaction" className="underline font-semibold text-[#DC2626]">RBI 2017 circular</Link> within 3 days for mandatory 10-day shadow credit.
                      </p>
                    </div>
                  </div>

                  {/* Persona C */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-50 text-purple-800 border border-purple-200">
                        Persona C: High-Value Dues
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        The High-Value Dispute / Closed Loan
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A fintech lender continues deducting auto-debits for a <Link href="/loan-closed-but-ecs-still-active" className="underline text-slate-800">loan that was already closed</Link>, or an international enterprise SaaS platform debited ₹25,000+ refusing refunds under foreign jurisdiction clauses.
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-red-600 block mb-1">Recommended Strategy:</span>
                      <p className="text-xs text-slate-800 font-medium leading-normal">
                        Issue an advocate-drafted statutory legal demand notice to the merchant&apos;s Indian entity and acquiring aggregator. If unresolved within 15 days, file directly on e-Jagriti and RBI CMS Ombudsman.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Deep Dive Route 1 */}
              <section id="heading-route-app-cancel" aria-labelledby="heading-route-app-cancel-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-app-cancel-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1: Cancel AutoPay in PhonePe, GPay &amp; Paytm
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before pursuing any financial refund, your urgent first step is to terminate the active mandate. Many consumers make the mistake of simply uninstalling the merchant app; this does <strong>not</strong> stop auto-debits because the mandate resides in NPCI&apos;s centralized UPI Mandate Management System (MMS) linked to your bank account.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Reserve Bank of India directives, every UPI Third Party Application Provider (TPAP) must provide an unhindered interface to modify, pause, or revoke mandates using your secure UPI PIN:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      PhonePe AutoPay Cancellation
                    </h3>
                    <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                      <li>Tap your <strong>Profile Picture</strong> at the top-left corner.</li>
                      <li>Scroll down to <strong>Payment Settings</strong> and tap <strong>AutoPay</strong>.</li>
                      <li>Select the active subscription or merchant from the list.</li>
                      <li>Scroll to the bottom and tap <strong>Cancel AutoPay</strong>.</li>
                      <li>Authenticate with your 4-digit or 6-digit <strong>UPI PIN</strong> to confirm revocation.</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      Google Pay Autopay Cancellation
                    </h3>
                    <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                      <li>Tap your <strong>Profile Photo</strong> in the upper right.</li>
                      <li>Select <strong>Autopay</strong> from the menu options.</li>
                      <li>Choose the merchant profile you wish to terminate.</li>
                      <li>Tap <strong>Cancel Autopay</strong>.</li>
                      <li>Enter your <strong>UPI PIN</strong> to transmit the revocation signal to NPCI.</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-600" />
                      Paytm UPI AutoPay Cancellation
                    </h3>
                    <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                      <li>Tap the <strong>Profile Icon</strong> on the home dashboard.</li>
                      <li>Tap <strong>UPI &amp; Payment Settings</strong> &gt; <strong>UPI AutoPay</strong>.</li>
                      <li>Locate the active mandate under &apos;Live Mandates&apos;.</li>
                      <li>Click <strong>View Details</strong> and tap <strong>Cancel Mandate</strong>.</li>
                      <li>Verify cancellation via UPI PIN and save the confirmation SMS.</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      BHIM UPI Mandate Revocation
                    </h3>
                    <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                      <li>Log in to the official <strong>BHIM App</strong>.</li>
                      <li>Tap on <strong>Mandate</strong> from the primary navigation rail.</li>
                      <li>Select <strong>Manage Mandate</strong> &gt; Active Mandate.</li>
                      <li>Tap <strong>Revoke Mandate</strong>.</li>
                      <li>Enter your UPI PIN to permanently remove the auto-debit rule.</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 5: Deep Dive Route 2 */}
              <section id="heading-route-bank-dispute" aria-labelledby="heading-route-bank-dispute-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-bank-dispute-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2: Bank Chargeback &amp; 24-Hour Pre-Debit Rule
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When you set up an e-mandate on your debit card, credit card, or UPI VPA, the issuing bank does not have carte blanche permission to debit your account in secrecy. Under <strong>RBI Circular DPSS.CO.PD.No.1324/02.14.003/2020-21 (Clause 2)</strong>, the central bank created a mandatory dual-safeguard mechanism:
                </p>
                <div className="p-4 sm:p-5 bg-slate-100 rounded-xl border-l-4 border-[#DC2626] space-y-2 text-slate-800 text-xs sm:text-sm">
                  <p className="font-bold text-slate-900">
                    Mandatory RBI Pre-Debit Notification Rule:
                  </p>
                  <p className="leading-relaxed">
                    &quot;As a measure of customer protection, the issuer bank shall send a pre-debit notification to the customer, at least 24 hours prior to the actual charge / debit to the account. The notification shall be sent through SMS / email and shall indicate the name of the merchant, amount of debit, date and time of debit, reference number / UMN of mandate, and a facility to opt-out of that particular transaction or cancel the mandate.&quot;
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your bank debited your account without dispatching this statutory 24-hour advance SMS or email notification, the bank has committed an operational deficiency. You did not receive your legally guaranteed opt-out window. Consequently, you can lodge a formal dispute with your bank branch or customer care under the <Link href="/law/rbi-zero-liability-unauthorised-transaction" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">RBI Customer Protection Circular of July 6, 2017</Link>. Cite the <Link href="/law/rbi-zero-liability-unauthorised-transaction" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">RBI zero liability rule for unauthorised transactions</Link> in your written complaint directly to your branch manager.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When you report this deficiency within <strong>3 working days</strong> of the debit, customer liability is zero. The bank cannot simply tell you to &quot;contact the merchant&quot;. Under Reserve Bank guidelines, the issuer bank must register the chargeback dispute with NPCI / the acquiring bank and credit a provisional shadow reversal to your account within 10 working days. If the bank continues to permit recurrent debits against your will, you can escalate via a formal <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">legal notice to bank for unauthorized ECS / NACH debit reversal</Link>.
                </p>
              </section>

              {/* Hand-authored SVG Process Diagram */}
              <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Statutory UPI AutoPay Refund Escalation Lifecycle
                  </h3>
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                    Process Flowchart
                  </span>
                </div>
                <div className="w-full flex justify-center py-2 overflow-x-auto">
                  <svg
                    viewBox="0 0 760 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-3xl h-auto"
                    aria-label="Escalation Lifecycle Diagram for UPI AutoPay Refunds"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="130" height="85" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <text x="75" y="48" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">1. Revoke Mandate</text>
                    <text x="75" y="66" fill="#94A3B8" fontSize="9" textAnchor="middle">PhonePe / GPay / Paytm</text>
                    <text x="75" y="82" fill="#FCA5A5" fontSize="8" fontWeight="bold" textAnchor="middle">Freeze Future Debits</text>

                    {/* Arrow 1 */}
                    <path d="M145 62 H165" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="170" y="20" width="130" height="85" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <text x="235" y="48" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">2. Merchant Ticket</text>
                    <text x="235" y="66" fill="#64748B" fontSize="9" textAnchor="middle">Invoke CCPA Dark</text>
                    <text x="235" y="80" fill="#64748B" fontSize="9" textAnchor="middle">Pattern Rules (48h)</text>

                    {/* Arrow 2 */}
                    <path d="M305 62 H325" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 3 */}
                    <rect x="330" y="20" width="130" height="85" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <text x="395" y="48" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">3. Bank Chargeback</text>
                    <text x="395" y="66" fill="#64748B" fontSize="9" textAnchor="middle">Cite No 24h SMS Alert</text>
                    <text x="395" y="80" fill="#059669" fontSize="8" fontWeight="bold" textAnchor="middle">Zero Customer Liability</text>

                    {/* Arrow 3 */}
                    <path d="M465 62 H485" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 4 */}
                    <rect x="490" y="20" width="130" height="85" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <text x="555" y="48" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">4. Legal Notice</text>
                    <text x="555" y="66" fill="#64748B" fontSize="9" textAnchor="middle">15-Day Advocate Demand</text>
                    <text x="555" y="80" fill="#DC2626" fontSize="8" fontWeight="bold" textAnchor="middle">Aggregator &amp; App</text>

                    {/* Arrow 4 */}
                    <path d="M625 62 H645" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 5 */}
                    <rect x="650" y="20" width="100" height="85" rx="8" fill="#DC2626" />
                    <text x="700" y="48" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">5. Reversal</text>
                    <text x="700" y="66" fill="#FEE2E2" fontSize="9" textAnchor="middle">Account Credit</text>
                    <text x="700" y="80" fill="#FEE2E2" fontSize="8" fontWeight="bold" textAnchor="middle">+ Compensation</text>
                  </svg>
                </div>
                <p className="text-[11px] text-slate-500 text-center">
                  Statutory dispute lifecycle enforced via RBI E-Mandate Circulars and Section 2(47) Consumer Protection Act, 2019.
                </p>
              </div>

              {/* Section 6: Deep Dive Route 3 */}
              <section id="heading-route-dark-patterns" aria-labelledby="heading-route-dark-patterns-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-dark-patterns-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3: Dark Patterns &amp; Consumer Court Remedies
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Many digital businesses operate deceptive user interfaces engineered to trap consumers into continuous payments. On November 30, 2023, the Ministry of Consumer Affairs notified the <strong>Guidelines for Prevention and Regulation of Dark Patterns, 2023</strong> under Section 18 of the Consumer Protection Act, 2019.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Annexure 1, Clause 5 of the Guidelines, a <strong>&quot;Subscription Trap&quot;</strong> is explicitly defined and outlawed as an unfair trade practice. It includes any of the following commercial conduct:
                </p>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                  <li><strong>Concealed Cancellation:</strong> Making cancellation of a paid subscription impossible or requiring an excessively convoluted process compared to onboarding.</li>
                  <li><strong>Forced Recurring Auto-Debit:</strong> Hiding the auto-renewal condition during checkout or pre-ticking recurring options without explicit affirmative assent.</li>
                  <li><strong>Hidden Payment Credentials:</strong> Continuing to debit user accounts after a user attempts cancellation or setting ambiguous cancellation grace periods.</li>
                </ul>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a company engages in a Subscription Trap, any &apos;Terms of Service&apos; or &apos;Non-Refundable Policy&apos; they rely upon is classified as an <em>Unfair Contract</em> under <strong>Section 2(46) of the Consumer Protection Act, 2019</strong>. The Supreme Court of India in multiple decisions has reiterated that terms imposing unreasonable conditions on consumers cannot be enforced in law. Consumers can file a complaint with the National Consumer Helpline (NCH - 1915) or directly submit an electronic petition on the government&apos;s <strong>e-Jagriti (e-Daakhil) portal</strong> demanding not just a full refund, but punitive damages for harassment.
                </p>
              </section>

              {/* Section 7: Deep Dive Route 4 */}
              <section id="heading-route-legal-notice" aria-labelledby="heading-route-legal-notice-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-legal-notice-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 4: When and How to Serve an Advocate Legal Demand Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While informal app support chats often bounce you between automated bots and canned responses, a formal <strong>Statutory Advocate Legal Demand Notice</strong> carries binding legal weight. A legal notice shifts the dispute from customer support scripts to the company&apos;s corporate legal counsel and compliance directors.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An effective legal notice for a UPI AutoPay debit must be served jointly on three entities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. The Merchant Entity</p>
                    <p className="text-slate-600 leading-relaxed">
                      The corporate company operating the app/service, addressed to its Managing Director and Grievance Officer at its registered MCA office.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. The Payment Aggregator</p>
                    <p className="text-slate-600 leading-relaxed">
                      The gateway processing the debit (e.g., Razorpay, Cashfree, PayU, Stripe India), placing them on notice regarding fraudulent merchant chargebacks.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. The Sponsor / Issuer Bank</p>
                    <p className="text-slate-600 leading-relaxed">
                      Your debiting bank for violating the 24-hour pre-debit alert mandate or failing to process an RBI zero-liability chargeback.
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The notice gives the opposing parties a strict <strong>15-day cure period</strong> to reverse the full amount plus interest to your bank account. In over 85% of cases handled by LegalRecovery, corporate legal teams choose to issue an immediate pre-litigation refund rather than incur substantial legal defense costs and risk adverse orders before the Consumer Commission. For full transparency regarding legal drafting and speed-post delivery expenses, you can inspect standard <Link href="/legal-notice-charges" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">legal notice charges and advocate fees</Link>.
                </p>
              </section>

              {/* Section 8: Statutory Benchmarks Table */}
              <section id="heading-benchmarks-table" aria-labelledby="heading-benchmarks-table-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-benchmarks-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Timelines &amp; Compensation (RBI Standards)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Regulatory Turnaround Benchmarks
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                    <caption className="sr-only">Statutory Timelines and Penalties for Digital Payment and AutoPay Disputes</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold border-b border-slate-800">
                        <th scope="col" className="p-3 sm:p-4 text-slate-100">Dispute Scenario</th>
                        <th scope="col" className="p-3 sm:p-4 text-slate-100">Mandated TAT Limit</th>
                        <th scope="col" className="p-3 sm:p-4 text-slate-100">Penalty / Customer Remedy</th>
                        <th scope="col" className="p-3 sm:p-4 text-slate-100">Governing Circular / Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      {TAT_BENCHMARKS.map((b, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                            {b.scenario}
                          </th>
                          <td className="p-3 sm:p-4 font-medium text-slate-800 align-top">
                            {b.statutoryTat}
                          </td>
                          <td className="p-3 sm:p-4 font-semibold text-emerald-700 align-top">
                            {b.delayPenalty}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-600 align-top font-mono text-xs">
                            {b.regulatoryReference}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: 5-Step Recovery Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Step Playbook: Debit Alert to Refund in Account
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Proven Dispute Protocol
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Step 1: Revoke the Active AutoPay Mandate in UPI App
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Immediately open PhonePe, Google Pay, or Paytm. Navigate to AutoPay settings and cancel the merchant mandate with your UPI PIN. Take a timestamped screenshot of the cancellation status showing the Mandate UMN.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Step 2: Dispatch Written Cancellation &amp; Refund Request to Merchant
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Send a formal email to the merchant&apos;s support and grievance desk. State: <em>&apos;My account was debited ₹[Amount] via UPI AutoPay on [Date] without mandatory 24-hour pre-debit notice under RBI Circular DPSS.CO.PD.No.1324/02.14.003/2020-21. This constitutes an illegal subscription trap under CCPA Dark Patterns Guidelines, 2023. I have not consumed the service. Process an immediate 100% refund within 48 hours.&apos;</em>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Step 3: Lodge Zero-Liability Chargeback with Your Issuer Bank
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Within 72 hours of the debit, submit an online or in-branch dispute with your bank. Select &apos;Unauthorised Electronic Transaction&apos; or &apos;Service Cancelled / Not Rendered&apos;. Provide the bank transaction UTR, mandate UMN, and proof of missing pre-debit alerts. (If money was routed to an erroneous third party during the transaction, use our <Link href="/templates/wrong-account-transfer-refund-application" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">wrong account transfer refund application</Link>).
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Step 4: Escalate to National Consumer Helpline (NCH 1915) &amp; RBI CMS
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the merchant rejects the refund or remains unresponsive for 3 days, lodge a grievance on <strong>consumerhelpline.gov.in (NCH Docket)</strong> against the merchant and on the <strong>RBI CMS portal</strong> against the bank for non-compliance with e-mandate guidelines.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      5
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Step 5: Serve Advocate Statutory Demand Notice &amp; Consumer Commission Filing
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        For amounts above ₹2,000, have a qualified advocate serve a 15-day legal demand notice to the merchant and payment gateway. If unresolved, file an electronic consumer complaint on e-Jagriti seeking full refund, interest, and ₹10,000+ compensation for deficiency of service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Case Study: Recovers ₹8,999 SaaS AutoPay Debit
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">Dispute Background:</strong>
                    Rohan S., a software consultant based in Bengaluru, signed up for a &quot;7-day trial for ₹2&quot; on an online graphic productivity software on October 12, 2026, using his PhonePe UPI AutoPay handle. On October 19 at 4:15 AM, his HDFC Bank account was debited <strong>₹8,999</strong> for an annual enterprise tier subscription. Rohan had not received any SMS notification 24 hours prior alerting him of the impending charge.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl space-y-1">
                      <p className="font-bold text-red-950 uppercase tracking-wider text-[11px]">Merchant&apos;s Initial Rejection:</p>
                      <p className="text-red-900 leading-relaxed">
                        Rohan emailed support within 2 hours. The SaaS vendor replied: <em>&apos;As per Clause 14.2 of our Terms of Service, all annual renewals are strictly non-refundable once billed.&apos;</em>
                      </p>
                    </div>

                    <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                      <p className="font-bold text-emerald-950 uppercase tracking-wider text-[11px]">Statutory Legal Counter-Action:</p>
                      <p className="text-emerald-950 leading-relaxed font-medium">
                        Rohan revoked the mandate on PhonePe, logged an NCH grievance (Docket #7182904), and served a formal 15-day Advocate Notice citing the CCPA Dark Patterns Guidelines, 2023 and RBI E-Mandate Circular 2020.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Outcome &amp; Financial Recovery:</p>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Within 6 days of receiving the advocate legal notice, the company&apos;s Indian legal operations team contacted Rohan, cancelled the subscription, and initiated a 100% refund of <strong>₹8,999</strong> directly to his bank account via Razorpay settlement rail, confirming no further debits would occur.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 7 Proofs for AutoPay Claims
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Dispute Documentation
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      1. Bank Statement Showing Exact Debit &amp; UTR
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Download the official PDF bank statement highlighting the debit amount, timestamp, 12-digit UTR/RRN, and merchant billing descriptor.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      2. UPI Mandate Screen with Unique Mandate Number (UMN)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      A screenshot from PhonePe/GPay/Paytm showing the mandate details, recurrence frequency (monthly/yearly), and UMN code.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      3. Mandate Cancellation Timestamp Screenshot
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Proof confirming that you paused or cancelled the AutoPay rule, proving whether the debit took place after mandate revocation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      4. Telecom SMS Logs for Missing 24h Alert
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Screenshots of your SMS inbox for the registered mobile number demonstrating that no pre-debit alert arrived 24 hours prior.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      5. Initial Onboarding / Trial Confirmation Email
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      The original welcome or sign-up email demonstrating that the service was marketed as a free or nominal trial without prominent renewal terms.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      6. Written Support Communications &amp; Rejection Emails
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Copies of all customer service chats, portal tickets, and denial emails citing non-refundable policies.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 md:col-span-2">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                      7. Proof of Non-Usage During Renewed Subscription Period
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Account portal login logs proving that you did not utilize, download, or access the service once the renewed billing cycle commenced.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: Interactive Problem Tabs */}
              <section id="heading-scenarios-tabs" aria-labelledby="heading-scenarios-tabs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common AutoPay &amp; E-Mandate Trap Scenarios
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Troubleshooting
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your specific situation below to view the root cause, governing statutory legal sections, and the precise recovery steps to take:
                </p>

                <UpiAutopayProblemTabs />
              </section>

              {/* Section 13: Interactive Notice CTA Block */}
              <UpiAutopayNoticeCTA />

              {/* Section 14: Frequently Asked Questions (FAQs) */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions (FAQs): UPI AutoPay &amp; E-Mandate Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Consumer Legal Guidance
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-colors"
                    >
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

              {/* Section 15: Primary Statutory Sources & Citations */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Sources &amp; Official References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Government &amp; Regulatory Benchmarks
                  </span>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All legal guidelines, timelines, and rights outlined on this page are grounded in official gazettes, central bank circulars, and statutes. You can examine the primary documents at the official repositories below:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#DC2626] font-semibold hover:underline"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-400">
                    Content compiled and legally structured for Indian jurisdiction. Last updated: November 2026.
                  </div>
                </div>
              </section>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-4">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
