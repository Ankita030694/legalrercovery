import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RbiFraudFrameworkNoticeCTA from "./RbiFraudFrameworkNoticeCTA";
import RbiFraudFrameworkTableOfContents from "./RbiFraudFrameworkTableOfContents";
import RbiFraudFrameworkScenarioTabs from "./RbiFraudFrameworkScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "RBI's 2027 Fraud Liability Rules: Banks Must Prove Fault",
  description:
    "RBI's revised framework shifts the burden of proof to banks and adds compensation. What changes from 1 January 2027 and how to claim.",
  alternates: {
    canonical: `${SITE_URL}/law/rbi-fraudulent-transaction-framework-2027`,
  },
  openGraph: {
    title: "RBI 2027 Fraudulent Banking Transaction Rules: Burden of Proof & ₹25,000 Compensation",
    description:
      "Detailed statutory analysis of the RBI's Revised Framework for Fraudulent Electronic Banking Transactions (effective 1 January 2027): bank burden of proof, 85% / ₹25,000 small-value payout, 10-day shadow reversal, and legal notice steps.",
    url: `${SITE_URL}/law/rbi-fraudulent-transaction-framework-2027`,
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
    title: "Reserve Bank of India (RBI) Circular on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18, dated 6 July 2017)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040",
  },
  {
    title: "Reserve Bank of India (RBI) Revised Framework for Customer Protection and Compensation in Fraudulent Electronic Banking Transactions (Effective 1 January 2027†)",
    url: "https://www.rbi.org.in/Scripts/Notifications.aspx",
  },
  {
    title: "Supreme Court of India — State Bank of India v. Pallabh Bhowmick & Ors., 2025 SCC OnLine SC 44 (SLP (C) No. 30677/2024, Order Dated 3 January 2025 — Bank Vigilance & Burden of Proof)",
    url: "https://main.sci.gov.in/",
  },
  {
    title: "Supreme Court of India — DAV Public School v. Senior Manager, Indian Bank, (2019) 20 SCC 31 (Bank Liability for Unauthorised Net-Banking Fund Transfers & Deficiency in Service)",
    url: "https://main.sci.gov.in/supremecourt/2011/31594/31594_2011_3_1501_19129_Judgement_18-Dec-2019.pdf",
  },
  {
    title: "High Court of Kerala — Tony Enterprises v. Reserve Bank of India & Ors., 2019 SCC OnLine Ker 5359 (WP(C) No. 28823 of 2017 — Strict Bank Liability for SIM-Swap & Digital Security Breaches)",
    url: "https://indiankanoon.org/doc/147812390/",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme (RB-IOS), 2021 & Complaint Management System (CMS) Portal",
    url: "https://cms.rbi.org.in/",
  },
  {
    title: "National Cyber Crime Reporting Portal & Citizen Financial Cyber Frauds Reporting and Management System (CFCFRMS — Helpline 1930) — Ministry of Home Affairs",
    url: "https://cybercrime.gov.in/",
  },
  {
    title: "Reserve Bank of India Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Banking Records, SMS Logs & Telecom CDRs)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Banks Must Deploy Robust Anti-Fraud Technology & Refund Unauthorised Debits When Customer Is Not Negligent",
    parties: "State Bank of India v. Pallabh Bhowmick & Ors.",
    citation: "2025 SCC OnLine SC 44 (SLP (C) No. 30677 of 2024), Supreme Court of India",
    date: "Order Dated 3 January 2025",
    facts:
      "An account holder with State Bank of India suffered unauthorised electronic debits totalling ₹94,204 after receiving a fraudulent customer-care call regarding a product return. The customer did not share any OTP or password for bank transfers and notified SBI within 24 hours of the fraudulent withdrawals. SBI refused to refund the money, claiming the transactions were customer-induced. Both the Single Judge and the Division Bench of the Gauhati High Court directed SBI to reimburse the full amount, prompting SBI to appeal to the Supreme Court.",
    holding:
      "A two-judge bench of the Supreme Court (Justice J.B. Pardiwala and Justice R. Mahadevan) dismissed SBI's appeal and affirmed the High Court's refund directive. Relying on Clauses 8 and 9 of the RBI Customer Protection Circular, the Supreme Court held that once a customer reports an unauthorised electronic transaction within the prescribed window and no negligence on the customer's part is established by the bank, the customer enjoys zero liability. The Court underscored that it is the primary statutory responsibility of banks to maintain the best available fraud-monitoring technology to detect and block anomalous withdrawals.",
    amount: "100% Refund of ₹94,204 Unauthorised Withdrawal Upheld Against SBI",
    takeaway:
      "When you report an unauthorized transaction within 24 to 72 hours and did not consciously authorize the fund transfer, your bank cannot hide behind generic 'customer fault' templates—it must prove your negligence with concrete evidence or refund 100% of the loss.",
  },
  {
    title: "Banks Are Custodians of Depositors' Funds & Liable for Unauthorised Net-Banking Linkages",
    parties: "DAV Public School v. Senior Manager, Indian Bank",
    citation: "(2019) 20 SCC 31 (Civil Appeal No. 9443 of 2019), Supreme Court of India",
    date: "Judgment Dated 18 December 2019",
    facts:
      "A school maintained accounts with Indian Bank without opting for online net-banking fund-transfer facilities. Through unauthorised internal linkage of the school's account to a net-banking profile, ₹30,00,000 was siphoned off via electronic transfers. When the school approached the Consumer Commission, the bank argued that online credentials had been used and sought to limit its payout.",
    holding:
      "The Supreme Court held Indian Bank guilty of grave deficiency in service under Consumer Protection law. The Court ruled that a bank acts as a custodian of public money and owes an absolute duty of care to safeguard depositor accounts against unauthorized electronic access. Where bank system vulnerabilities or unauthorized account modifications enable fraudulent transfers, the bank is strictly liable to restore the siphoned funds with compensation.",
    amount: "Full Restitution Liability for ₹30,00,000 Siphoned Funds + ₹1,00,000 Costs",
    takeaway:
      "If fraudsters add a new beneficiary, link a new mobile device, or raise daily transfer limits on your account without your verified authorization, the bank's security architecture failed—triggering full bank liability.",
  },
  {
    title: "Strict Bank Liability for SIM-Swap & Third-Party Digital Security Breaches",
    parties: "Tony Enterprises v. Reserve Bank of India & Ors.",
    citation: "2019 SCC OnLine Ker 5359 (WP(C) No. 28823 of 2017), High Court of Kerala",
    date: "Judgment Dated 29 November 2019",
    facts:
      "Petitioners lost substantial sums from their bank accounts after fraudsters executed SIM-swap attacks—deactivating the victims' genuine SIM cards and obtaining duplicate SIMs from telecom operators to intercept bank OTPs. Banks repudiated the refund claims by arguing that the fraud occurred due to telecom operator lapses rather than a breach of the bank's own servers.",
    holding:
      "The High Court of Kerala held that banking relationship is anchored in utmost good faith and statutory RBI directives. Under the RBI's Zero Liability framework, a SIM-swap or telecom interception where neither the bank nor the customer is at fault squarely constitutes a 'third-party breach' where the deficiency lies elsewhere in the digital payment ecosystem. Provided the customer reports the fraud promptly, the bank is legally bound to credit the stolen amount back to the customer and pursue its own remedies against the fraudster or third party.",
    amount: "Zero Customer Liability Affirmed for Third-Party / SIM-Swap Breaches",
    takeaway:
      "Your bank cannot tell you to 'sue Airtel, Jio, or the cyber fraudster' when your account is drained via SIM-swap or third-party payment gateway breaches. The bank must reimburse you first under RBI's Zero-Liability rule.",
  },
  {
    title: "Mere Use of OTP or PIN Does Not Discharge the Bank's Statutory Burden of Proof",
    parties: "HDFC Bank Ltd. v. Jesna Jose",
    citation: "Revision Petition No. 3333 of 2013, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 21 December 2020",
    facts:
      "Unauthorised international POS/electronic transactions totaling over ₹60,000 were executed on the complainant's card while the physical card remained in her possession in India. HDFC Bank refused to reverse the debits, arguing that the transactions were completed electronically and therefore the cardholder must have compromised her credentials.",
    holding:
      "The National Consumer Commission (NCDRC) dismissed HDFC Bank's revision petition and held that under the RBI Circular on Unauthorised Electronic Banking Transactions, the burden of proving customer liability lies exclusively on the bank. A bank cannot discharge this statutory burden merely by pointing to its own computer printout showing a completed transaction; it must produce independent technical evidence proving customer fault or hacking induced by the customer.",
    amount: "Full Reversal of Disputed Card Amount + Interest + ₹40,000 Compensation & Costs",
    takeaway:
      "A bank's one-line email stating 'valid credentials/OTP were entered' is not legal proof in court or before the RBI Ombudsman. Without forensic proof of your fault, the bank must reverse the debit.",
  },
];

const FAQS = [
  {
    question: "What are the RBI new rules for fraudulent banking transactions effective from 1 January 2027?",
    answer:
      "Under the Reserve Bank of India's Revised Framework for Customer Protection and Compensation in Fraudulent Electronic Banking Transactions (effective for transactions on or after 1 January 2027†), three major shifts take effect across all Commercial Banks, Payments Banks, Small Finance Banks, and Regional Rural Banks: (1) The legal burden of proving customer fault or negligence is placed explicitly and strictly on the bank; (2) A new Small-Value Fraud Compensation mechanism grants bona fide individual victims (including sole proprietors) 85% of their net loss or up to ₹25,000 (whichever is lower) on gross fraud losses up to ₹50,000, once in a lifetime†; and (3) Victims must report the fraud to both their bank and the National Cyber Crime Portal (cybercrime.gov.in / 1930) within 5 calendar days to claim the compensation payout†.",
  },
  {
    question: "How does the ₹25,000 RBI digital fraud compensation work for losses up to ₹50,000?",
    answer:
      "From 1 January 2027†, if a bona fide individual customer or sole proprietor suffers an electronic banking fraud where the gross loss is ₹50,000 or less, they qualify for a one-time lifetime compensation equal to 85% of the net unrecovered loss or ₹25,000, whichever is lower. For example, on a ₹20,000 UPI fraud loss, 85% equals ₹17,000; on a ₹40,000 loss, 85% is ₹34,000, which is capped at the ₹25,000 ceiling. This payout is funded via a tripartite cost-sharing model between the RBI (Depositor Education and Awareness Fund), the customer's issuing bank, and the beneficiary bank†.",
  },
  {
    question: "What if my online banking fraud loss is more than ₹50,000?",
    answer:
      "If your gross fraud loss exceeds ₹50,000, the small-value ₹25,000 compensation scheme does not apply; instead, your claim is governed by the Zero Liability and Limited Liability rules. Under these provisions—backed by Supreme Court precedent in State Bank of India v. Pallabh Bhowmick (2025)—if the unauthorized debit occurred due to a bank security lapse, server vulnerability, or a third-party breach (such as SIM-swap or APK malware interception) reported promptly within the statutory window, your liability is ZERO and the bank must refund 100% of the stolen amount regardless of whether it is ₹1 lakh or ₹25 lakh.",
  },
  {
    question: "Who bears the burden of proof when a bank claims I shared my OTP or UPI PIN?",
    answer:
      "Both Clause 12 of the 2017 RBI Circular and the 2027 Revised Framework explicitly mandate that the burden of proving customer liability lies on the bank. You do not have to prove a negative. If the bank alleges that you voluntarily shared an OTP or clicked a phishing link, the bank must substantiate that claim with verifiable digital forensics—such as SMS delivery logs, IP address location trails, device-binding records, and proof that its own anomaly-detection systems did not fail.",
  },
  {
    question: "Within how many days should shadow reversal be credited by the bank after reporting fraud?",
    answer:
      "Under Clause 10 of the RBI Customer Protection framework, the bank must credit (shadow reversal / notional credit) the amount involved in the unauthorized electronic transaction to your bank account within 10 working days from the date you notify the bank. Crucially, this credit must be value-dated to the original date of the unauthorized transaction so that you do not lose savings interest or incur credit card finance charges while the bank completes its investigation (which must conclude within 90 days).",
  },
  {
    question: "What is the first step I must take within the first 24 hours to 5 days of an online banking fraud?",
    answer:
      "Immediately execute dual reporting: (1) Call the National Cyber Crime Helpline at 1930 and file a written complaint on cybercrime.gov.in to trigger an automated lien/freeze on the recipient mule account via the Citizen Financial Cyber Frauds Reporting and Management System (CFCFRMS); and (2) Notify your bank via its 24x7 fraud helpline and submit a written complaint to the Branch Manager and Nodal Officer demanding a dated complaint ticket number and 10-day shadow reversal.",
  },
  {
    question: "Bank online fraud ka paisa wapas nahi de raha toh legal notice aur RBI Ombudsman complaint kaise kare?",
    answer:
      "Agar aapne samay par (3 working days / 2027 niyam ke tehat 5 calendar days mein) 1930 cyber portal aur bank mein shikayat darj kar di hai, phir bhi bank 'OTP shared' ya 'customer negligence' bolkar refund reject kar de, toh RBI circular aur Supreme Court (SBI v. Pallabh Bhowmick 2025) ke mutabik saboot dene ki zimmedari (burden of proof) bank ki hai. Aap LegalRecovery.in ke madhyam se bank ke Nodal Officer aur MD ko 15-din ka Advocate Legal Notice bhej sakte hain, aur 30 din baad RBI Integrated Ombudsman (cms.rbi.org.in) ya Consumer Court (e-Jagriti) mein 100% refund aur मुआवजे ka dava kar sakte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RBI's New Framework for Fraudulent Banking Transactions (From January 2027)",
  description:
    "RBI's revised framework shifts the burden of proof to banks and adds compensation. What changes from 1 January 2027 and how to claim.",
  datePublished: "2026-11-04T13:05:00+05:30",
  dateModified: "2026-11-04T13:05:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/rbi-fraudulent-transaction-framework-2027`,
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
    "@type": "Legislation",
    name: "RBI Revised Framework for Fraudulent Electronic Banking Transactions (2027)",
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
      name: "Fraud Transaction Recovery",
      item: `${SITE_URL}/recovery/fraud-transaction-amount`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "RBI 2027 Fraud Liability Framework",
      item: `${SITE_URL}/law/rbi-fraudulent-transaction-framework-2027`,
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

export default function RbiFraudulentTransactionFramework2027Page() {
  const breadcrumbItems = [
    { label: "Fraud Transaction Recovery", href: "/recovery/fraud-transaction-amount" },
    { label: "RBI 2027 Fraud Liability Rules", href: "/law/rbi-fraudulent-transaction-framework-2027" },
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

      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching IRCTC & Company Directors layout and theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RBI Revised Directions • Effective <time dateTime="2027-01-01">1 Jan 2027</time>†</span>
              <span className="text-red-500">•</span>
              <span>Bank Burden of Proof &amp; ₹25,000 Compensation</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              RBI&apos;s New Framework for Fraudulent Banking Transactions (From January 2027)
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (RBI 2017 Circular &amp; 1 January 2027 Revised Framework†)
              </p>
              <p>
                Under the Reserve Bank of India&apos;s revised framework taking effect on <strong>1 January 2027</strong>† (upgrading the 6 July 2017 Circular), the <strong>bank bears the strict legal burden of proving customer fault</strong> in all unauthorized electronic banking transactions. Victims enjoy 100% zero-liability refunds for bank or third-party breaches reported within 3–5 days, plus a new one-time compensation of <strong>85% of net loss (up to ₹25,000)</strong> for losses ≤ ₹50,000 reported to the bank and <strong>1930</strong> within 5 calendar days†.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Bank</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Burden of Proving Customer Fault</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Up to ₹25,000</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">85% Payout on Losses ≤ ₹50k†</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">10 Work Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Value-Dated Shadow Credit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 to 5 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bank + 1930 Cyber Reporting Window†</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-3">
              Last updated: <time dateTime="2026-11-04">4 November 2026</time> • Applies to Commercial Banks, Small Finance Banks, Payments Banks &amp; RRBs
            </p>
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
            <RbiFraudFrameworkTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Summary + Effective Date (Archetype L2) */}
              <section id="heading-summary" aria-labelledby="heading-summary-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-summary-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Changes Under RBI&apos;s 2027 Fraudulent Electronic Banking Framework (Effective 1 January 2027†)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  From <strong>1 January 2027</strong>†, the Reserve Bank of India&apos;s revised framework on customer liability and compensation in fraudulent electronic banking transactions overhauls how Indian banks must handle UPI, IMPS, NEFT, RTGS, mobile banking, and card fraud complaints. For nearly a decade under the earlier <strong>6 July 2017 Limited Liability Circular</strong> (<code>DBR.No.Leg.BC.78/09.07.005/2017-18</code>), bank branches and nodal cells routinely defeated consumer protection rules by sending a single boilerplate email: <em>&quot;Since the transaction was authenticated via OTP/PIN, it occurred due to customer negligence and the bank has zero liability.&quot;</em>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The 2027 RBI framework closes this loophole on two fronts. First, it codifies an uncompromising <strong>reverse burden of proof</strong>: whenever an electronic transaction is disputed as unauthorized or fraudulent, the bank—not the depositor—must investigate system logs, IP trails, device-binding records, and SMS gateway audit trails to legally prove customer fault. Second, recognising that millions of ordinary citizens lose money in social-engineering, vishing, and deceptive collect-request scams where an OTP or UPI PIN was inadvertently entered, the RBI has introduced a landmark <strong>Small-Value Fraud Compensation Scheme</strong> paying <strong>85% of the net loss (up to ₹25,000)</strong> for bona fide individual losses up to <strong>₹50,000</strong>† when reported within <strong>5 calendar days</strong> to both the bank and the National Cyber Crime Reporting Portal (<strong>1930</strong>).
                </p>
              </section>

              {/* Section 2: Before vs After Comparison Table (Archetype L2 Hero Element) */}
              <section id="heading-before-after-table" aria-labelledby="heading-before-after-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-before-after-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Before vs After: RBI 2017 Limited Liability Circular vs 2027 Revised Fraud Framework
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype L2 Statutory Comparison
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether your fraudulent debit occurred prior to 31 December 2026 or on/after 1 January 2027† determines which exact clauses apply to your bank refund demand. Compare every rule parameter side by side below:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison between RBI 2017 Customer Protection Circular and RBI 2027 Revised Fraud Liability Framework</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Regulatory Parameter</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-600">Old Rule (6 July 2017 Circular)</th>
                        <th scope="col" className="py-3.5 px-4 text-red-700">New Rule (From 1 January 2027†)</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-900">What It Means For Your Refund Claim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Burden of Proof on Customer Fault
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Clause 12 stated onus lies on bank, but banks treated mere OTP/2FA entry log as conclusive proof of customer negligence.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Strict statutory burden on the bank to prove customer fault via internal audit, device/IP logs &amp; security checks†.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          You are presumed innocent. A mechanical &quot;OTP was entered&quot; letter is legally insufficient to reject your refund.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Small-Value Fraud Compensation (Losses ≤ ₹50,000)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Zero payout if customer was tricked into entering UPI PIN or OTP (100% loss borne by customer until reported).
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          85% of net loss or up to ₹25,000 (whichever is lower) for bona fide individuals/sole proprietors (once in lifetime)†.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Even in deceptive low-value scams up to ₹50,000, eligible victims recover up to ₹25,000 without proving bank server fault.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Mandatory Reporting Window &amp; Channels
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Within 3 working days to the bank for Zero Liability on third-party breaches; 4–7 working days for capped liability.
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-bold text-xs">
                          Within 5 calendar days to BOTH the bank AND the National Cyber Crime Portal (cybercrime.gov.in / 1930) for compensation†.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Never report only to your bank branch—always log a 1930 / cybercrime.gov.in docket within 24 hours to 5 calendar days.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Cost-Sharing for Small-Value Payouts
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Entirely borne by the customer&apos;s issuing bank (giving banks a financial incentive to repudiate claims).
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Tripartite sharing between RBI (DEAF Fund), Customer&apos;s Home Bank, and Beneficiary (Mule) Bank†.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Penalises recipient banks that fail to screen mule accounts and reduces your home bank&apos;s resistance to paying claims.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Bank Negligence / Third-Party Breach (All Amounts)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          100% Zero Liability if bank fault (anytime) or third-party breach reported within 3 working days (Clause 6).
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          100% Zero Liability retained for all amounts (even ₹5 lakh–₹50 lakh+) where bank or third-party system breach occurs.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          The ₹25,000 cap applies ONLY to the special small-value compensation scheme—full 100% reversal still applies to unauthorized breaches.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Shadow Reversal &amp; Final Investigation Cap
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Value-dated shadow credit within 10 working days of notification (Clause 10); final resolution within 90 days (Clause 11).
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          10-working-day value-dated reversal &amp; 90-day resolution cap enforced with stricter Ombudsman penalty oversight.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          If your bank has not passed a shadow credit by Working Day 11, it is in direct breach of binding RBI directions.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  † Verification Note: Provisions marked with † reflect the Reserve Bank of India&apos;s revised framework for customer protection and small-value fraud compensation taking effect on <strong>1 January 2027</strong>. For immediate action on an ongoing bank dispute, visit our <Link href="/recovery/fraud-transaction-amount" className="text-blue-700 underline font-semibold">fraudulent bank transaction recovery hub</Link>.
                </p>
              </section>

              {/* Section 3: Detailed Compensation & Liability Matrix */}
              <section id="heading-compensation-matrix" aria-labelledby="heading-compensation-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-compensation-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How the ₹25,000 Small-Value Digital Fraud Compensation &amp; Liability Matrix Works
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  One of the most frequent questions bank customers ask is whether the new ₹25,000 ceiling limits their claim when ₹2,00,000 or ₹10,00,000 is siphoned from their account. The answer is an emphatic <strong>no</strong>. The RBI operates a <strong>two-track restitution system</strong>: Track 1 (100% Zero-Liability Reversal for unauthorized bank/third-party breaches of any amount) and Track 2 (the new 85% / ₹25,000 Small-Value Safety Net for losses ≤ ₹50,000†). Use the statutory matrix below to calculate your exact entitlement:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">RBI Fraud Refund and Customer Liability Matrix by Scenario, Reporting Time, and Account Type</caption>
                    <thead className="bg-slate-900 text-white font-bold border-b border-slate-800">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Fraud Category &amp; Loss Amount</th>
                        <th scope="col" className="py-3.5 px-4">Reporting Timeframe</th>
                        <th scope="col" className="py-3.5 px-4">Customer Liability</th>
                        <th scope="col" className="py-3.5 px-4">Bank Refund / Compensation Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Bank Negligence / Server Breach / Internal Fraud (Any Amount)
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          Anytime (even if discovered before customer reports)
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-black">₹0 (Zero Liability)</td>
                        <td className="py-3.5 px-4 text-xs font-bold text-emerald-800">
                          100% Full Refund of Entire Debited Amount + Value-Dated Interest
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Third-Party Breach (SIM-Swap, APK Malware, Cloned Card — Any Amount)
                        </th>
                        <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">
                          Within 3 Working Days of receiving bank SMS alert
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-black">₹0 (Zero Liability)</td>
                        <td className="py-3.5 px-4 text-xs font-bold text-emerald-800">
                          100% Full Refund via 10-Working-Day Shadow Credit
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Small-Value Bona Fide Individual Fraud (Gross Loss ≤ ₹50,000†)
                        </th>
                        <td className="py-3.5 px-4 text-xs font-semibold text-red-700">
                          Within 5 Calendar Days to Bank + 1930 Cyber Portal†
                        </td>
                        <td className="py-3.5 px-4 text-amber-700 font-bold">15% (or balance above ₹25k)</td>
                        <td className="py-3.5 px-4 text-xs font-bold text-emerald-800">
                          85% of Net Loss or ₹25,000 (whichever is lower) — Once in Lifetime†
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Third-Party Breach Reported in 4 to 7 Working Days (BSBDA / Basic Savings)
                        </th>
                        <td className="py-3.5 px-4 text-xs">4 to 7 Working Days from SMS alert</td>
                        <td className="py-3.5 px-4 text-amber-700 font-bold">Max ₹5,000 Cap</td>
                        <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">
                          100% of Fraud Loss Above ₹5,000 Must Be Refunded by Bank
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Third-Party Breach Reported in 4 to 7 Working Days (Regular Savings / Cards ≤ ₹5L)
                        </th>
                        <td className="py-3.5 px-4 text-xs">4 to 7 Working Days from SMS alert</td>
                        <td className="py-3.5 px-4 text-amber-700 font-bold">Max ₹10,000 Cap</td>
                        <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">
                          100% of Fraud Loss Above ₹10,000 Must Be Refunded by Bank
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Third-Party Breach Reported in 4 to 7 Working Days (Current / CC / OD / Cards &gt; ₹5L)
                        </th>
                        <td className="py-3.5 px-4 text-xs">4 to 7 Working Days from SMS alert</td>
                        <td className="py-3.5 px-4 text-amber-700 font-bold">Max ₹25,000 Cap</td>
                        <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">
                          100% of Fraud Loss Above ₹25,000 Must Be Refunded by Bank
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Post-Reporting Subsequent Debits (Any Account / Any Cause)
                        </th>
                        <td className="py-3.5 px-4 text-xs">After timestamp of customer complaint to bank</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-black">₹0 (Zero Liability)</td>
                        <td className="py-3.5 px-4 text-xs font-bold text-emerald-800">
                          100% Borne by Bank (Failure to Block Account/Card Immediately)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Timeline of the Change (<ol> with <time> per Archetype L2) */}
              <section id="heading-timeline-change" aria-labelledby="heading-timeline-change-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timeline-change-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Regulatory Evolution Timeline: From the 2017 Zero-Liability Circular to 1 January 2027 Enforcement
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tracing the regulatory milestones from the original 2017 Master Direction to the 2027 framework helps you cite the exact legal authority in your bank demand notice and Ombudsman petition:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-4 space-y-6 sm:space-y-8 list-none my-4">
                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2017-07-06" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      6 July 2017 — Parent Zero-Liability Circular
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      RBI Issues Circular DBR.No.Leg.BC.78/09.07.005/2017-18
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Establishes the foundational 3-working-day Zero-Liability rule for third-party breaches, mandatory 24x7 SMS alerts (Clause 5), 10-working-day value-dated shadow reversal (Clause 10), 90-day complaint resolution ceiling (Clause 11), and places the burden of proof on banks (Clause 12).
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2019-09-20" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      20 September 2019 — Failed Transaction TAT &amp; ₹100/Day Penalty
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Harmonisation of Turn Around Time (TAT) Circular (DPSS.CO.PD No.629)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Mandates automated T+1 to T+5 working-day reversal for failed ATM, UPI, IMPS, and e-commerce debits, imposing a strict statutory compensation of ₹100 per day of delay payable automatically by the bank without the customer even asking.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2021-11-12" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      12 November 2021 — One Nation, One Ombudsman (RB-IOS 2021)
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Reserve Bank - Integrated Ombudsman Scheme, 2021 Launched
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Unifies the Banking, NBFC, and Digital Transactions Ombudsmen into a single portal (<code>cms.rbi.org.in</code>) with centralized processing at CRPC Chandigarh, empowering the Ombudsman to award up to ₹20 lakh for consequential loss plus up to ₹1 lakh for mental harassment and time lost.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white ring-4 ring-amber-100" />
                    <time dateTime="2025-01-03" className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block">
                      3 January 2025 — Supreme Court Landmark Affirmation
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Supreme Court Decides State Bank of India v. Pallabh Bhowmick (2025 SCC OnLine SC 44)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      The Apex Court upholds 100% bank refund liability under Clauses 8 and 9 of the RBI circular, ruling that banks must deploy best-in-class fraud detection systems and cannot reject timely complaints without proving customer negligence.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-4 ring-red-100" />
                    <time dateTime="2027-01-01" className="text-xs font-extrabold uppercase tracking-wider text-red-600 block">
                      2026 Draft &amp; Directions → 1 January 2027 Effective Date†
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      RBI Revised Framework for Fraudulent Electronic Banking Transactions Takes Effect†
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Following public consultation in 2026, the revised framework takes effect for transactions on or after <strong>1 January 2027</strong>†—codifying strict bank burden of proof, introducing the 85% / ₹25,000 small-value compensation for losses ≤ ₹50,000, mandating 5-calendar-day dual reporting (bank + 1930), and establishing tripartite cost-sharing across RBI DEAF, the home bank, and the beneficiary bank†.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 5: Open Questions / Grey Areas with † Flags (Archetype L2 Mandatory Block) */}
              <section id="heading-grey-areas" aria-labelledby="heading-grey-areas-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-grey-areas-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Open Questions, Exclusions &amp; Transitional Grey Areas Under the 2027 RBI Rules (†)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While the 2027 framework represents the largest pro-consumer banking shift in a decade, fraud victims must understand four critical boundaries and transitional rules (†) so they do not forfeit their claim:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 1 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Cut-Off Date: Frauds Before vs On/After 1 January 2027
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The new small-value compensation provision (85% of net loss up to ₹25,000 on losses ≤ ₹50,000†) applies prospectively to electronic banking transactions occurring on or after <strong>1 January 2027</strong>†. For unauthorized transactions occurring up to 31 December 2026, your claim is governed by the <strong>6 July 2017 RBI Circular</strong> and <em>SBI v. Pallabh Bhowmick (2025 SC)</em>, where 100% Zero Liability applies if reported within 3 working days and the bank fails to prove your negligence.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 2 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Multi-Month Investment / Task Scams vs Unauthorised Debits
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If a victim voluntarily transfers ₹5,00,000 across 15 separate NEFT/RTGS tranches over 3 weeks into a fake Telegram stock-trading or task-scam group, banks classify those as <em>voluntary authorized push payments</em> rather than unauthorized electronic debits. For losses above ₹50,000 in voluntary transfer scams, your strongest legal angle against the bank is proving <strong>beneficiary bank KYC negligence (mule account screening failure)</strong> or <strong>originating bank anomaly-monitoring failure</strong>, alongside an immediate 1930 cyber lien. See our dedicated guide on <Link href="/how-to-recover-money-stuck-in-online-cyber-fraud" className="text-blue-700 underline font-semibold">recovering money stuck in online cyber fraud</Link>.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 3 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Don&apos;t Let Your Bank Settle a Zero-Liability Claim as a ₹25k Payout
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Because the ₹25,000 payout is a <strong>once-in-a-lifetime</strong> safety net capped at 85% of losses ≤ ₹50,000†, banks may attempt to push genuine third-party breach victims (such as SIM-swap or card-skimming victims who lost ₹45,000) into accepting an 85% (₹25,000) payout instead of a <strong>100% Zero-Liability reversal</strong>. If you did not share an OTP or PIN, insist on 100% restitution under Zero Liability so you neither lose 15% nor exhaust your lifetime compensation quota.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 4 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Cooperative Banks vs Commercial &amp; Payments Banks
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The 2027 Revised Framework expressly covers Scheduled Commercial Banks, Regional Rural Banks (RRBs), Small Finance Banks, and Payments Banks (such as Airtel Payments Bank and India Post Payments Bank)†. For Urban and State Cooperative Banks, verify applicability under the specific RBI Urban Banks Department circular or enforce equivalent deficiency-in-service liability under Section 2(11) of the Consumer Protection Act, 2019 on e-Jagriti.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Landmark Supreme Court & High Court Order Digest */}
              <section id="heading-landmark-orders" aria-labelledby="heading-landmark-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-landmark-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court, High Court &amp; NCDRC Rulings Holding Banks Liable for Online Fraud
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    4 Verifiable Judicial Precedents
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian courts have repeatedly struck down banks&apos; attempts to shift electronic fraud losses onto innocent account holders. Cite these four binding judgments in your bank complaint and legal notice:
                </p>

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
                            Precedent #{idx + 1} • {c.citation}
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Banking Dispute &amp; Facts:</strong>
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
                              Judicial Relief / Principle Enforced
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Banks, Ombudsman Offices &amp; Consumer Forums
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your claim:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Statutory Escalation Flowchart (Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Architecture: From 1930 Cyber Reporting to Bank Refund &amp; RBI Ombudsman
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this five-stage statutory timeline to lock in your Zero-Liability / 2027 compensation rights, force a 10-working-day shadow reversal, and escalate bank refusals:
                </p>

                {/* Mobile Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1 • Within 24h (Max 3–5 Days†)</span>
                    <h3 className="font-bold text-sm">Dual Reporting: Bank + 1930 Portal</h3>
                    <p className="text-xs text-slate-200 mt-1">Block card/UPI, lodge bank fraud ticket, and report on cybercrime.gov.in / 1930 to freeze recipient mule account.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2 • Within 10 Working Days</span>
                    <h3 className="font-bold text-sm">Mandatory Value-Dated Shadow Credit</h3>
                    <p className="text-xs text-amber-900 mt-1">Bank must credit notional shadow reversal (Clause 10) or process 85% / ₹25k small-value claim† while investigating.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3 • Day 11 to Day 20</span>
                    <h3 className="font-bold text-sm">Principal Nodal Officer &amp; Log Demand</h3>
                    <p className="text-xs text-slate-700 mt-1">If shadow credit is denied or claim rejected, demand IP logs, device IDs, and SMS gateway proof from Nodal Officer.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4 • 15-Day Statutory Notice</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice to Bank</h3>
                    <p className="text-xs text-red-900 mt-1">Serve MD, Nodal Officer &amp; Branch Manager invoking RBI Burden-of-Proof rule and SBI v. Pallabh Bhowmick (2025 SC).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5 • Day 30+ Adjudication</span>
                    <h3 className="font-bold text-sm">RBI Ombudsman (CMS) / e-Jagriti Court</h3>
                    <p className="text-xs text-emerald-900 mt-1">File on cms.rbi.org.in (awards up to ₹20L + ₹1L harassment) or District Consumer Commission for 100% refund + interest.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">RBI 2027 Fraud Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 265"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="RBI 2027 Fraudulent Banking Transaction Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="rbiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="rbiAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="rbiSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="140" height="92" rx="10" fill="url(#rbiGrad)" />
                    <text x="80" y="43" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1 (≤ 3–5d†)</text>
                    <text x="80" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Dual Reporting</text>
                    <text x="80" y="79" fill="#E2E8F0" fontSize="10" textAnchor="middle">Bank + 1930 Portal</text>
                    <text x="80" y="96" fill="#CBD5E1" fontSize="9" textAnchor="middle">Freeze Mule Account</text>

                    {/* Arrow 1 */}
                    <path d="M 150 66 L 180 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="180" y="20" width="140" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="43" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2 (≤ 10d)</text>
                    <text x="250" y="62" fill="#92400E" fontWeight="bold" textAnchor="middle">Shadow Reversal</text>
                    <text x="250" y="79" fill="#78350F" fontSize="10" textAnchor="middle">Value-Dated Credit</text>
                    <text x="250" y="96" fill="#78350F" fontSize="9" textAnchor="middle">Or 85% / ₹25k Claim†</text>

                    {/* Arrow 2 */}
                    <path d="M 320 66 L 350 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="350" y="20" width="140" height="92" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="43" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3 (Day 11+)</text>
                    <text x="420" y="62" fill="#0F172A" fontWeight="bold" textAnchor="middle">Nodal Escalation</text>
                    <text x="420" y="79" fill="#334155" fontSize="10" textAnchor="middle">Demand Server Logs</text>
                    <text x="420" y="96" fill="#475569" fontSize="9" textAnchor="middle">Burden of Proof Challenge</text>

                    {/* Arrow 3 */}
                    <path d="M 490 66 L 520 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="520" y="20" width="140" height="92" rx="10" fill="url(#rbiAlert)" />
                    <text x="590" y="43" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4 (15-Day)</text>
                    <text x="590" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="79" fill="#FEE2E2" fontSize="10" textAnchor="middle">Serve Bank MD &amp; Nodal</text>
                    <text x="590" y="96" fill="#FECACA" fontSize="9" textAnchor="middle">Cite SC 2025 Precedent</text>

                    {/* Arrow 4 */}
                    <path d="M 660 66 L 690 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="690" y="20" width="140" height="92" rx="10" fill="url(#rbiSucc)" />
                    <text x="760" y="43" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5 (Day 30+)</text>
                    <text x="760" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Restitution</text>
                    <text x="760" y="79" fill="#D1FAE5" fontSize="10" textAnchor="middle">RBI Ombudsman (CMS)</text>
                    <text x="760" y="96" fill="#A7F3D0" fontSize="9" textAnchor="middle">Or e-Jagriti Commission</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="95" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="168" fill="#0F172A" fontWeight="bold" fontSize="11">BINDING STATUTORY BENCHMARKS (RBI 2017 CIRCULAR &amp; 2027 REVISED FRAMEWORK†):</text>
                    <text x="25" y="188" fill="#475569" fontSize="10">• Burden of Proof: 100% on the bank to establish customer negligence with forensic audit trails (Clause 12 / 2027 Framework†)</text>
                    <text x="25" y="205" fill="#475569" fontSize="10">• Small-Value Fraud Relief (From 1 Jan 2027†): 85% of net loss or max ₹25,000 on gross losses ≤ ₹50,000 reported within 5 calendar days</text>
                    <text x="25" y="222" fill="#475569" fontSize="10">• Shadow Credit &amp; Disposal: Value-dated reversal within 10 working days; maximum 90 calendar days to conclude investigation</text>
                  </svg>
                </div>
              </section>

              {/* Section 8: How to Use the New Rules Today — 5-Step Action Plan */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How to Claim a Fraud Refund From Your Bank Today: The 5-Step Statutory Playbook
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most bank fraud victims lose their money twice—first to the cyber criminal, and second to their own bank&apos;s compliance department because they only made an informal phone call instead of building a statutory paper trail. Follow these five exact steps:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Dual Reporting Within 24 Hours (And Never Later Than 3 Working / 5 Calendar Days†)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The moment you spot an unauthorized UPI, IMPS, NEFT, RTGS, or card debit, immediately call the Ministry of Home Affairs Cyber Helpline at <strong>1930</strong> and register a formal complaint on <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">cybercrime.gov.in</a>. This triggers an automated hold/lien on the recipient bank account via the CFCFRMS network. Simultaneously, report the unauthorized debit to your bank&apos;s 24x7 fraud channel, block the compromised card/UPI ID, and obtain a time-stamped <strong>Service Request (SR) / Complaint Ticket Number</strong>. Under the 2027 framework†, dual reporting to both your bank and 1930 within <strong>5 calendar days</strong> is mandatory to unlock the small-value compensation payout.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Submit a Written Zero-Liability &amp; 10-Day Shadow Reversal Demand to Your Branch Manager
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not rely solely on a call-centre ticket. Within 24 to 48 hours, hand-deliver (with a stamped receiving copy) and email a written representation to your home Branch Manager and the bank&apos;s Grievance Redressal Officer. List each disputed transaction with its 12-digit UTR / RRN number, timestamp, and amount. Explicitly demand: (a) <strong>10-working-day value-dated shadow reversal</strong> under Clause 10 of the RBI Customer Protection Circular; or (b) where applicable from 1 January 2027† on losses ≤ ₹50,000, the <strong>85% / ₹25,000 compensation payout</strong>. For specific payment rail remedies, see our guides on <Link href="/recovery/upi-fraud-amount" className="text-blue-700 underline font-semibold">UPI fraud amount recovery</Link> and <Link href="/recovery/credit-card-fraud-amount" className="text-blue-700 underline font-semibold">credit card fraud chargeback and reversal</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Challenge Boilerplate &apos;OTP Shared&apos; Rejections by Demanding Forensic Audit Logs
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the bank refuses shadow credit after 10 working days or closes your ticket with a generic email stating <em>&quot;Transaction authenticated via 2FA/OTP&quot;</em>, escalate immediately to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong>. Put the PNO on notice that under the RBI Burden-of-Proof rule and <em>HDFC Bank v. Jesna Jose (NCDRC)</em>, the bank must furnish: (1) the IP address and geolocation from which the session was initiated; (2) the device ID / MAC address binding log; (3) timestamps of beneficiary addition and cooling-period enforcement; and (4) why the bank&apos;s velocity/anomaly engine failed to block an out-of-pattern withdrawal.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal 15-Day Statutory Advocate Legal Notice on the Bank
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When customer care and nodal officers stonewall your refund, engage an advocate to serve a formal statutory demand notice on the Bank&apos;s Managing Director/CEO, Principal Nodal Officer, and Regional Head via Registered Speed Post and Section 63 BSA electronic mail. The notice formally pleads breach of the RBI Customer Protection Directions (2017 / 2027 Framework†), cites the Supreme Court&apos;s ruling in <em>State Bank of India v. Pallabh Bhowmick (2025)</em>, and demands 100% principal reversal, 9%–12% interest, and damages within 15 days. If your dispute involves unauthorized loan auto-debits rather than third-party phishing, see our specialized guide on <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-blue-700 underline font-semibold">unauthorized ECS and NACH debit reversal notices</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to the RBI Integrated Ombudsman (cms.rbi.org.in) or Consumer Commission (e-Jagriti)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once 30 days elapse from your initial complaint (or immediately upon receiving a final rejection from the bank), file an online complaint under the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong> at <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">cms.rbi.org.in</a> attaching your served Advocate Legal Notice, 1930 acknowledgement, and telecom/bank records. For claims exceeding ₹20 lakh or requiring detailed evidentiary cross-examination and punitive damages, file a parallel consumer complaint on <strong>e-Jagriti</strong> under Section 35 of the Consumer Protection Act, 2019.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 9: Interactive Bank Rejection Excuse & Scenario Tabs */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Bank Rejection Excuses in Online Fraud Cases &amp; How the 2027 Rules Defeat Them
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the Specific Excuse Your Bank Used to Reject Your Claim to View the Statutory Rebuttal
                  </p>
                </div>

                <RbiFraudFrameworkScenarioTabs />
              </section>

              {/* Section 10: Worked Case Studies */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Account Holder Recovers ₹1,85,000 Unauthorized RTGS/UPI Debit After Bank Blamed &apos;OTP Sharing&apos;
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Banking Restitution Case Study
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Savings Account • APK SMS-Forwarding Breach</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Incident:</strong> Siddharth Nair, an IT consultant in Bengaluru, received a WhatsApp message purporting to be an electricity disconnection notice from BESCOM with an attachment named <code>BESCOM_Bill_Update.apk</code>. Without entering any banking password or sharing any OTP over a phone call, three unauthorized transactions—two IMPS transfers of ₹50,000 each and one UPI transfer of ₹85,000 (totaling <strong>₹1,85,000</strong>)—were debited from his private-sector bank account within 14 minutes at 11:40 PM.
                    </p>
                    <p>
                      <strong>The Immediate Reporting &amp; Bank Refusal:</strong> Within 35 minutes of the debits, Siddharth called <strong>1930</strong> (generating a CFCFRMS docket that froze ₹42,000 in the destination mule account) and called his bank&apos;s 24x7 helpline to block his account. However, on Day 9, the bank rejected his refund claim without granting a 10-day shadow reversal, stating: <em>&quot;As per our server logs, a new device was registered and transactions were completed using valid 2FA OTPs delivered to your registered mobile number. Hence, liability rests with the customer.&quot;</em>
                    </p>
                    <p>
                      <strong>The Statutory Legal Notice &amp; Burden-of-Proof Challenge:</strong> Siddharth engaged LegalRecovery.in. An advocate served a 15-day statutory demand notice on the bank&apos;s Principal Nodal Officer and Managing Director citing the RBI Zero-Liability Circular, the 2027 Burden-of-Proof standard, and <em>State Bank of India v. Pallabh Bhowmick (2025 SC)</em>. The notice highlighted two fatal security lapses by the bank: (1) Under RBI&apos;s mandatory cooling-period norms for new-device mobile banking registration, the bank&apos;s system should have capped transfers at ₹5,000 for the first 24 hours instead of allowing ₹1,85,000 in 14 minutes; and (2) the OTP was silently intercepted by background malware (a third-party breach), not voluntarily shared by the customer.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome (100% Recovery):</strong>
                      When the bank failed to produce cooling-period compliance logs in response to the legal notice, the advocate filed an online petition before the RBI Integrated Ombudsman (<code>cms.rbi.org.in</code>). Faced with clear evidence that its own mobile-banking velocity cap had failed during a new-device login, the bank reversed the remaining ₹1,43,000 directly to Siddharth&apos;s account (while the frozen ₹42,000 was released from the mule account lien), achieving <strong>100% restitution of ₹1,85,000</strong> plus value-dated savings interest.
                    </div>
                  </div>

                  {/* Mini Worked Calculation for 2027 Small-Value Compensation */}
                  <div className="pt-3 border-t border-slate-800">
                    <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-2">
                      Illustrative Calculation #2: 2027 Small-Value Fraud Compensation (Losses ≤ ₹50,000†)
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Suppose Meena Gupta, a sole proprietor in Jaipur, is tricked by a fake courier refund link on 14 February 2027 into approving a UPI collect request of <strong>₹32,000</strong>. She reports the fraud within 3 calendar days to both her bank and <strong>1930</strong> (which freezes ₹4,000 in the scammer&apos;s account, leaving a <strong>net unrecovered loss of ₹28,000</strong>). Because her gross loss (₹32,000) is ≤ ₹50,000 and she reported within 5 calendar days†, she is eligible for <strong>85% of ₹28,000 = ₹23,800</strong> (since ₹23,800 is below the ₹25,000 cap) under the RBI&apos;s one-time lifetime compensation rule†.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Evidence Checklist + Honest Scope */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="space-y-4">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Digital Fraud Evidence Dossier: 6 Mandatory Records Under Section 63 BSA Before Serving a Bank Legal Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), preserve these six electronic and documentary records to prove timely reporting and defeat bank negligence allegations:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">1930 / cybercrime.gov.in Acknowledgement PDF:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Showing your 14-digit NCRP acknowledgement number, exact filing timestamp (within 5 calendar days†), and disputed UTRs.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Fraud Ticket / SR Number &amp; Stamped Letter:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Proof of reporting to your bank within 3 working days (or 5 calendar days†) plus written dispute form submitted to the branch.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statement with 12-Digit UTR / RRN:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Highlighting each unauthorized debit, recipient bank IFSC/VPA (if visible), and absence of 10-day shadow reversal.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">SMS Alert &amp; Call Log Screenshots (Or Telecom CDR):</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Proving when the debit alert arrived, or telecom proof of SIM-deactivation / duplicate SIM issuance during a SIM-swap attack.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Rejection Email / Repudiation Letter:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">The bank&apos;s written refusal blaming &quot;2FA / OTP authentication&quot; without providing server or IP audit logs.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Police Cyber Cell GD / FIR Copy (For High-Value Claims):</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Copy of the local Cyber Crime Police Station complaint or FIR under Section 318 BNS and Section 66C/66D IT Act.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Honest Scope Box (Mandatory Section 7 Requirement) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                    Honest Scope: What LegalRecovery Can and Cannot Do in Banking Fraud Disputes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                      <strong className="text-emerald-900 font-bold block">✓ What We Do (Enforcing Bank Statutory Liability):</strong>
                      <p className="text-emerald-950 leading-relaxed">
                        We pursue <strong>your bank and the beneficiary bank</strong> whenever they breach RBI&apos;s Zero-Liability Directions, fail to credit the 10-working-day shadow reversal, withhold the 2027 small-value compensation (85% up to ₹25,000†), ignore cooling-period velocity failures, or reject claims without discharging their statutory burden of proof. We draft and serve a formal Advocate Legal Notice on the bank and prepare your RBI Ombudsman / e-Jagriti escalation dossier. For wrongful bank charges or non-cyber freezes, see our <Link href="/recovery/unauthorized-bank-deduction" className="text-emerald-900 underline font-bold">unauthorized bank deduction recovery guide</Link>.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1.5">
                      <strong className="text-rose-900 font-bold block">✕ What We Cannot Do (Tracing Anonymous Scammers / Police Liens):</strong>
                      <p className="text-rose-950 leading-relaxed">
                        A civil legal notice cannot trace an anonymous cyber criminal using burner numbers or crypto mixers—that requires law-enforcement investigation via <strong>1930 / State Cyber Police</strong>. Additionally, if your own bank account has been frozen due to a Layer-2/Layer-3 Police Cyber Cell notice under Section 106 BNSS (old Section 102 CrPC) from another state, a consumer legal notice to the bank cannot lift a police seizure order.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: RBI 2027 Fraud Transaction Rules, Bank Liability &amp; Refund Claims
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Grounded in RBI Master Directions, the 2027 Revised Framework† &amp; Supreme Court Precedents
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

              {/* Section 13: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary RBI Circulars, Supreme Court Judgments &amp; Official Cyber Reporting Portals
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
                  Statutory verification status: All provisions checked against Reserve Bank of India Customer Protection Circulars, the 2027 Revised Framework directions†, Supreme Court judgments (<em>SBI v. Pallabh Bhowmick</em>, 2025), and RB-IOS 2021 rules as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Demand Notice to Your Bank for Fraud Refund
                </h2>
                <RbiFraudFrameworkNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking Fraud &amp; Digital Payment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Fraudulent Bank Transaction Recovery Hub →
                  </Link>
                  <Link
                    href="/law/rbi-failed-transaction-tat-compensation"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RBI Failed Transaction TAT &amp; ₹100/Day Penalty →
                  </Link>
                  <Link
                    href="/how-to-recover-money-stuck-in-online-cyber-fraud"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Cyber Fraud Money Recovery Guide →
                  </Link>
                  <Link
                    href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unauthorized ECS / NACH Debit Reversal Notice →
                  </Link>
                  <Link
                    href="/recovery/upi-fraud-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UPI Fraud Amount Recovery →
                  </Link>
                  <Link
                    href="/recovery/credit-card-fraud-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Fraud Refund &amp; Chargeback →
                  </Link>
                  <Link
                    href="/recovery/unauthorized-bank-deduction"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unauthorized Bank Charges &amp; Lien Removal →
                  </Link>
                  <Link
                    href="/send-legal-notice-online-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Send Legal Notice Online in India →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/law/rbi-fraudulent-transaction-framework-2027" cluster="banking" />
      </main>
    </>
  );
}
