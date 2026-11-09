import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import RbiZeroLiabilityTableOfContents from "./RbiZeroLiabilityTableOfContents";
import RbiZeroLiabilityNoticeCTA from "./RbiZeroLiabilityNoticeCTA";
import RbiZeroLiabilityEligibilityChecker from "./RbiZeroLiabilityEligibilityChecker";

export const revalidate = 86400;

const PAGE_URL = `${SITE_URL}/law/rbi-zero-liability-unauthorised-transaction`;

export const metadata: Metadata = {
  title: "RBI Zero Liability Rule: Unauthorised Transaction Refunds",
  description:
    "Report within 3 working days for zero liability. RBI's customer liability rules, shadow-reversal timelines and how to claim your money back.",
  keywords: [
    "rbi zero liability unauthorised transaction",
    "within how many working days should shadow reversal be credited",
    "unauthorised transaction refund rbi",
    "state bank of india must refund unauthorized withdrawals",
    "customer liability rbi circular",
    "rbi circular dbr.no.leg.bc.78/09.07.005/2017-18",
    "shadow credit 10 working days rbi",
    "limited liability 4 to 7 working days rbi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Unauthorised Bank Transaction? RBI's Zero & Limited Liability Rulebook",
    description:
      "Complete clause-by-clause Q&A on RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18: 3-day zero liability, 10-working-day shadow reversal, burden of proof, and Supreme Court precedents.",
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RBI Zero Liability Rule: Unauthorised Transaction Refunds",
    description:
      "Report within 3 working days for zero liability. RBI's customer liability rules, shadow-reversal timelines and how to claim your money back.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title:
      "Reserve Bank of India (RBI) Circular No. RBI/2017-18/15 (DBR.No.Leg.BC.78/09.07.005/2017-18) dated 6 July 2017 — Customer Protection: Limiting Liability of Customers in Unauthorised Electronic Banking Transactions",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040",
  },
  {
    title:
      "Reserve Bank of India Circular No. RBI/2018-19/101 (DPSS.CO.PD.No.1414/02.14.006/2018-19) dated 4 January 2019 — Customer Protection: Limiting Liability of Customers in Unauthorised Electronic Payment Transactions in Prepaid Payment Instruments (PPIs)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11446",
  },
  {
    title:
      "Bombay High Court (Division Bench) — Jaiprakash Kulkarni & Anr. v. The Banking Ombudsman & Bank of Baroda, Writ Petition No. 1150 of 2023 (2024 SCC OnLine Bom 1666)",
    url: "https://bombayhighcourt.nic.in/",
  },
  {
    title:
      "Reserve Bank – Integrated Ombudsman Scheme, 2021 (RB-IOS) & Complaint Management System (CMS) Portal",
    url: "https://cms.rbi.org.in/",
  },
  {
    title:
      "Reserve Bank of India (Commercial Banks – Responsible Business Conduct) Amendment Directions, 2026 — Revised Framework for Fraudulent Electronic Banking Transactions (Effective 1 January 2027†)",
    url: "https://www.rbi.org.in/",
  },
  {
    title:
      "National Cyber Crime Reporting Portal (NCRP) & 1930 Citizen Financial Cyber Frauds Reporting System — Ministry of Home Affairs",
    url: "https://cybercrime.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA) — Section 63 (Admissibility of Electronic Bank Statements, SMS Logs, Call Recordings & NCRP Dockets)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "State Bank of India Must Refund Unauthorised Withdrawals Reported Within 3 Working Days",
    parties: "State Bank of India v. Pallabh Bhowmick & Ors.",
    citation: "SLP (C) Diary No. 55621/2024, Supreme Court of India (Aff'g WA 282/2024, Gauhati HC)",
    date: "Order Dated 03 January 2025",
    facts:
      "In October 2021, an SBI savings account holder attempted to return an online apparel order and received a phone call from a fraudster impersonating customer support. Tricked into installing a malicious remote-access application, three unauthorised debits totalling ₹94,204.80 were siphoned from his SBI account. The customer notified SBI within 24 hours (well inside the 3-working-day RBI window). Both SBI and the RBI Ombudsman rejected the refund claim, contending that the transactions occurred via Google Pay and alleging customer negligence.",
    holding:
      "A Supreme Court bench comprising Justice J.B. Pardiwala and Justice R. Mahadevan dismissed SBI's appeal and upheld the Gauhati High Court Division Bench order directing a 100% refund. The Court held that under Clauses 8, 9, and 12 of the RBI Circular dated 6 July 2017, a customer who reports an unauthorised electronic transaction within 3 working days enjoys Zero Liability where no deliberate sharing of OTP or MPIN is proved by the bank. The Supreme Court emphasised that banks possess advanced fraud-monitoring infrastructure and cannot shift blame onto customers when high-velocity unauthorised debits bypass bank security filters.",
    amount: "100% Refund of ₹94,204.80 Ordered Against State Bank of India",
    takeaway:
      "If you were duped into downloading an APK or remote-support tool without consciously authorising the specific debit via OTP/MPIN and you notified your bank within 3 working days, your bank cannot reject your claim with generic 'customer negligence' templates.",
  },
  {
    title: "Bank Bears Strict Burden of Proof Under Clause 12; Cyber-Police Pendency Cannot Block Refund",
    parties: "Jaiprakash Kulkarni & Anr. v. The Banking Ombudsman & Bank of Baroda",
    citation: "Writ Petition No. 1150 of 2023, 2024 SCC OnLine Bom 1666 (Bombay High Court DB)",
    date: "Judgment Dated 06 May 2024",
    facts:
      "A total of ₹76,90,000 was siphoned from the petitioners' account at Bank of Baroda through 23 unauthorised online transactions to unknown beneficiaries added without the customer's consent or OTP sharing. The petitioners notified the bank within hours of receiving the alerts. Both the bank and the Banking Ombudsman refused reversal, claiming that police cyber-cell investigation was still pending.",
    holding:
      "The Division Bench of the Bombay High Court quashed the Ombudsman's rejection and ordered Bank of Baroda to refund the entire ₹76.90 lakh with 6% annual interest. The Court held that Paragraph 6(b) and Paragraph 12 of the RBI Circular dated 6 July 2017 place the statutory burden of proving customer negligence exclusively on the bank. Once a customer reports a third-party breach within 3 working days and forensic/bank logs show no voluntary OTP sharing, the bank must credit the account within 10 working days without waiting for police recovery or insurance settlement.",
    amount: "₹76,90,000 Full Principal Refund + 6% Annual Interest",
    takeaway:
      "Your bank cannot tell you to 'wait until the cyber police catch the fraudster'. Under Paragraph 9 of the RBI Circular, bank liability under Zero Liability is independent of criminal recovery.",
  },
  {
    title: "Bank Strictly Liable for Unauthorised Overseas Withdrawals When Card Is in Customer's Possession",
    parties: "State Bank of India v. P.V. George",
    citation: "RSA No. 1097 of 2018, 2019 (1) KLT 305 (Kerala High Court)",
    date: "Judgment Dated 29 January 2019",
    facts:
      "An SBI account holder in Kerala received midnight SMS alerts showing ₹2,40,000 withdrawn across multiple ATM transactions in Brazil while his physical debit card remained safely in his possession in India. He immediately reported the cloning fraud to the branch. SBI refused to reimburse the loss, arguing that ATM withdrawals cannot occur without a PIN.",
    holding:
      "The Kerala High Court held State Bank of India strictly liable to refund the unauthorised withdrawals with interest and costs. Distinguishing between customer fault and third-party skimming/system vulnerability, the Court ruled that when a customer promptly notifies the bank of impossible geographic transactions, the bank must protect the depositor's money under the RBI Zero Liability directive.",
    amount: "₹2,40,000 Full Reversal + Statutory Interest & Litigation Costs",
    takeaway:
      "In card cloning, skimming, or unauthenticated international POS debits, physical possession of your card in India coupled with prompt reporting establishes Zero Liability.",
  },
  {
    title: "Credit Card Issuer Cannot Demand Payment or Levy Interest on Unauthorised Fraudulent Swipes",
    parties: "HDFC Bank Ltd. v. Jesna Jose",
    citation: "Revision Petition No. 3333 of 2013, I (2021) CPJ 42 (NC) (NCDRC New Delhi)",
    date: "Order Dated 21 December 2020",
    facts:
      "Multiple international POS transactions were executed on the complainant's credit card without her authorisation or pre-transaction OTP verification. Despite immediate dispute intimation, the bank demanded bill payment, levied finance charges, and damaged her credit profile.",
    holding:
      "The National Consumer Disputes Redressal Commission (NCDRC) held that under the RBI Circular on Limiting Liability of Customers in Unauthorised Electronic Banking Transactions, the onus of proving that the cardholder intentionally compromised card security rests on the bank. Where a security breach occurs without customer fault, the bank is guilty of deficiency in service under Section 2(11) of the Consumer Protection Act if it refuses to reverse the charges.",
    amount: "Full Reversal of Disputed Card Charges + ₹40,000 Compensation + ₹5,000 Costs",
    takeaway:
      "If your credit card is billed for an unauthorised transaction, Paragraph 9(ii) of the RBI Circular forbids the bank from charging any interest or late fees on the disputed component.",
  },
];

const FAQS = [
  {
    question: "Within how many working days should shadow reversal be credited by the bank under RBI rules?",
    answer:
      "Under Paragraph 9(i) of RBI Circular No. RBI/2017-18/15 (DBR.No.Leg.BC.78/09.07.005/2017-18) dated 6 July 2017, the bank must credit (shadow reversal / provisional credit) the amount involved in the unauthorised electronic banking transaction to the customer's account within 10 working days from the date of notification by the customer, without waiting for the settlement of any insurance claim.",
  },
  {
    question: "What is the time limit to report an unauthorised bank transaction for Zero Liability?",
    answer:
      "Under Paragraph 6(b) of the RBI Customer Liability Circular, if an unauthorised transaction occurs due to a third-party breach where the deficiency lies neither with the bank nor with the customer, you must notify the bank within 3 working days of receiving the transaction alert from the bank (excluding the date you received the alert) to qualify for 100% Zero Liability. If the fraud resulted from the bank's own contributory negligence or security failure under Paragraph 6(a), you have Zero Liability regardless of when you report it.",
  },
  {
    question: "What is my maximum liability if I report an unauthorised transaction between 4 and 7 working days?",
    answer:
      "Under Paragraph 7(b) and Table 1 of the 6 July 2017 RBI Circular, if you report a third-party breach between 4 and 7 working days after receiving the bank's SMS/email communication, your maximum per-transaction liability is capped at the transaction value or the statutory ceiling—whichever is lower: ₹5,000 for Basic Savings Bank Deposit (BSBDA) accounts; ₹10,000 for regular Savings Accounts, Prepaid Wallets (PPIs), Credit Cards with limits up to ₹5 lakh, and MSME Current/OD accounts; and ₹25,000 for all other Current/Cash Credit/Overdraft accounts and Credit Cards with limits above ₹5 lakh.",
  },
  {
    question: "Who bears the burden of proof in an unauthorised electronic banking transaction dispute?",
    answer:
      "Under Paragraph 12 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 (and reaffirmed under the 2027 Revised Framework), the burden of proving customer liability in case of unauthorised electronic banking transactions lies exclusively on the bank. The bank cannot reject your claim with a bare assertion that an OTP was used; it must produce verifiable technical logs proving customer negligence or deliberate credential sharing.",
  },
  {
    question: "Why did the Supreme Court hold that State Bank of India must refund unauthorized withdrawals?",
    answer:
      "In State Bank of India v. Pallabh Bhowmick & Ors. (decided 3 January 2025), the Supreme Court upheld the Gauhati High Court judgment directing SBI to refund ₹94,204.80 siphoned after a customer was tricked into installing a fraudulent app during an online return inquiry. Because the customer notified SBI within 24 hours (within the 3-working-day window) and never voluntarily shared an OTP/MPIN to authorise those debits, the Supreme Court ruled that Clauses 8 and 9 of the 2017 RBI Circular mandate a full refund and banks must maintain robust fraud-detection systems.",
  },
  {
    question: "Am I liable for transactions that happen after I have called the bank helpline to block my account or card?",
    answer:
      "Never. Even if you were tricked into sharing an OTP or PIN on an initial transaction, the second sentence of Paragraph 7(a)(i) of the RBI Circular explicitly mandates that 'any loss occurring after the reporting of the unauthorised transaction shall be borne by the bank.' Once you notify the bank via toll-free helpline, SMS block code, or portal, 100% of any subsequent debit is the bank's unconditional responsibility.",
  },
  {
    question: "How does the 1 January 2027 RBI Fraudulent Transaction Framework change the 2017 Zero Liability rules?",
    answer:
      "While the 6 July 2017 circular protects victims of 'unauthorised' transactions (bank fault or third-party breaches without OTP sharing), the RBI Revised Framework for Fraudulent Electronic Banking Transactions (effective 1 January 2027†) expands protection to small-value social-engineering and scam-induced frauds up to ₹50,000. Bona fide individual victims who report to both their bank and 1930 / cybercrime.gov.in within 5 calendar days become eligible for a one-time lifetime compensation of 85% of net loss or ₹25,000, whichever is lower†.",
  },
  {
    question: "Bank account ya UPI se binameri marzi paise kat gaye aur bank refund mana kar raha hai toh kya karein?",
    answer:
      "Agar aapke bank account, credit card ya UPI se bina OTP share kiye (jaise APK hack, SIM swap ya card cloning se) paise kate hain aur aapne 3 working days ke andar bank aur 1930 cyber helpline par complaint darj kara di hai, toh RBI ke 6 July 2017 Zero Liability Circular ke Paragraph 9 ke tahat bank ko 10 working days mein 100% rakam (Shadow Reversal) wapas karni hoti hai. Bank ke mana karne par aap advocate ke madhyam se Bank Nodal Officer ko 15-day Statutory Legal Notice bhejkar RBI Ombudsman (CMS) aur Consumer Court (e-Jagriti) mein dava kar sakte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Unauthorised Bank Transaction? RBI's Zero and Limited Liability Rules",
  description:
    "Report within 3 working days for zero liability. RBI's customer liability rules, shadow-reversal timelines and how to claim your money back.",
  datePublished: "2026-11-04T13:05:00+05:30",
  dateModified: "2026-11-04T13:05:00+05:30",
  mainEntityOfPage: PAGE_URL,
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
    name: "RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 Customer Protection Zero and Limited Liability in Unauthorised Electronic Banking Transactions",
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
      name: "RBI Zero & Limited Liability Rules",
      item: PAGE_URL,
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

export default function RbiZeroLiabilityUnauthorisedTransactionPage() {
  const noticePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const breadcrumbItems = [
    { label: "Fraud Transaction Recovery", href: "/recovery/fraud-transaction-amount" },
    { label: "RBI Zero & Limited Liability Rules", href: "/law/rbi-zero-liability-unauthorised-transaction" },
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
        {/* Hero Section strictly matching site theme and irctc / cheque-bounce-case-against-company-directors layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18</span>
              <span className="text-red-500">•</span>
              <span>In Force Since 6 July 2017 (Updated Nov 2026)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Unauthorised Bank Transaction? RBI&apos;s Zero and Limited Liability Rules
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Rulebook Summary (RBI Circular RBI/2017-18/15 • Clauses 6, 7, 9 &amp; 12)
              </p>
              <p>
                Under RBI Circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong>, bank customers enjoy <strong>100% Zero Liability</strong> for unauthorised electronic transactions caused by bank deficiency or third-party breaches if reported within <strong>3 working days</strong> (and capped liability of ₹5,000–₹25,000 if reported in 4–7 working days). Your bank bears the burden of proof and must credit a value-dated <strong>shadow reversal within 10 working days</strong>.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">100% Zero Liability Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">10 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Shadow Reversal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹5k–₹25k</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">4–7 Day Limited Liability Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">On Bank</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Clause 12 Burden of Proof</p>
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
            <RbiZeroLiabilityTableOfContents />

            {/* Main Content Body (Archetype L3: 10–14 Rulebook Q&A H2s First, No Tables Above the Fold) */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Rulebook Q&A 1: When Does a Customer Have 100% Zero Liability? */}
              <section id="heading-zero-liability-rule" aria-labelledby="heading-zero-liability-rule-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-zero-liability-rule-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  1. When Does a Bank Customer Have 100% Zero Liability for an Unauthorised Transaction?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Paragraph 6 of RBI Circular No. RBI/2017-18/15 (DBR.No.Leg.BC.78/09.07.005/2017-18) dated 6 July 2017, a customer is legally entitled to 100% Zero Liability in two situations: (a) whenever the unauthorised transaction arises from contributory fraud, negligence, or deficiency on the part of the bank (even if not reported by the customer); or (b) in any third-party breach where neither the bank nor the customer is at fault and the customer notifies the bank within 3 working days of receiving the bank&apos;s transaction alert.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Reserve Bank of India enacted this binding statutory directive under Section 35A of the Banking Regulation Act, 1949 to stop commercial banks from hiding behind one-sided account terms. Under <strong>Paragraph 6(a)</strong>, if the loss occurs due to a bank server vulnerability, an insider employee leak, card skimming at an ATM, or an international transaction processed without mandatory Additional Factor of Authentication (AFA/OTP), the customer&apos;s liability is <strong>zero from Day 1</strong>—irrespective of whether or when the customer reports it.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Paragraph 6(b)</strong>, where the fraud originates from a <strong>third-party system breach</strong>—such as a compromised merchant database, a telecom SIM-swap attack, or a malicious APK/remote-screen exploit where the customer never voluntarily shared their OTP or MPIN to authorise the payment—the customer incurs <strong>zero financial loss</strong> provided they notify the bank within <strong>three working days</strong> of receiving the communication from the bank regarding the unauthorised debit. Crucially, Footnote 1 to Paragraph 6(b) specifies that the 3-working-day count <em>excludes the exact date on which the customer received the alert</em>.
                </p>
              </section>

              {/* Rulebook Q&A 2: Limited Liability Window (4 to 7 Working Days) */}
              <section id="heading-limited-liability-window" aria-labelledby="heading-limited-liability-window-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-limited-liability-window-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  2. What Is Your Limited Liability If You Report Between 4 and 7 Working Days?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Paragraph 7(b) and Table 1 of the 6 July 2017 RBI Circular, if a third-party breach is reported with a delay of 4 to 7 working days after receiving the bank&apos;s transaction alert, the customer&apos;s per-transaction liability is strictly capped at the transaction value or ₹5,000 (BSBDA accounts), ₹10,000 (regular Savings Accounts, Prepaid Wallets, Credit Cards up to ₹5 lakh limit, and MSME/Individual Current or OD accounts), or ₹25,000 (large Current/OD accounts and Credit Cards above ₹5 lakh limit)—whichever is lower.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Banks frequently mislead customers into believing that missing the 3-working-day window forfeits the entire refund claim. That is false under the RBI rulebook. If ₹1,80,000 is siphoned from your regular savings account in a third-party breach and you report it on the <strong>5th working day</strong> after receiving the SMS alert, the bank can deduct at most <strong>₹10,000</strong> (your limited liability cap under Table 1) and must statutorily refund the remaining <strong>₹1,70,000</strong> to your account.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Only when a customer delays reporting <strong>beyond 7 working days</strong> after receiving the bank&apos;s alert does liability fall under the bank&apos;s Board-approved policy (Paragraph 7(b)(ii)). Even then, the bank must publicly display that Board-approved policy and provide every customer with its details at the time of account opening. For active recovery assistance on disputed debits, review our dedicated hub on <Link href="/recovery/fraud-transaction-amount" className="text-blue-700 underline font-semibold">recovering fraudulent UPI, card and bank transaction amounts</Link>.
                </p>
              </section>

              {/* Rulebook Q&A 3: Within How Many Working Days Should Shadow Reversal Be Credited? */}
              <section id="heading-shadow-reversal-10-days" aria-labelledby="heading-shadow-reversal-10-days-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-shadow-reversal-10-days-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  3. Within How Many Working Days Should Shadow Reversal Be Credited by the Bank?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Paragraph 9(i) and 9(ii) of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, the bank must credit (shadow reversal) the amount involved in the unauthorised electronic transaction to the customer&apos;s account within 10 working days from the date of notification by the customer—value-dated to the exact date the unauthorised transaction occurred, and without waiting for any insurance settlement.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This is one of the most heavily searched banking rules in India (and a core benchmark in JAIIB/CAIIB banking examinations and Ombudsman adjudications): <strong>10 working days from the date of customer notification</strong>. A &quot;shadow reversal&quot; (or provisional credit) restores the disputed funds to your account ledger while the bank conducts its internal forensic or chargeback investigation.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-black">•</span>
                    <span>
                      <strong>Value-Dated to the Date of Fraud (Paragraph 9(ii)):</strong> For a savings or overdraft account, back-dating the shadow credit to the date of the unauthorised debit ensures you lose zero savings interest and pay zero penal overdraft interest. For a credit card, it ensures zero 36%–42% finance charges or late-payment penalties accrue on the fraudulent swipe.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-black">•</span>
                    <span>
                      <strong>No Insurance Delay Excuse (Paragraph 9(i)):</strong> Banks carry Bankers&apos; Indemnity and Cyber Crime Insurance policies, but Paragraph 9 explicitly forbids banks from delaying your 10-working-day shadow credit while waiting for their insurer to approve or settle the claim.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Rulebook Q&A 4: Who Bears the Burden of Proof? */}
              <section id="heading-burden-of-proof" aria-labelledby="heading-burden-of-proof-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-burden-of-proof-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  4. Who Bears the Burden of Proof in an Unauthorised Electronic Transaction Dispute?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Paragraph 12 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 states in a single, unconditional sentence: &quot;The burden of proving customer liability in case of unauthorised electronic banking transactions shall lie on the bank.&quot;
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In practice, almost every retail bank in India initially rejects fraud complaints with a standard two-line email stating: <em>&quot;The transaction was authenticated via 2FA/OTP/MPIN; hence the bank is not liable.&quot;</em> Under <strong>Paragraph 12</strong>, that mechanical assertion does not discharge the bank&apos;s statutory burden.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  As the Bombay High Court held in <em>Jaiprakash Kulkarni v. Banking Ombudsman &amp; Bank of Baroda</em> (2024), the mere fact that an electronic system recorded an OTP or IP log does not prove that the <strong>customer negligently shared credentials</strong>—especially where SIM-cloning, malware SMS-forwarding APKs, man-in-the-middle attacks, or unverified beneficiary additions occurred. To deny a refund, the bank must furnish concrete forensic evidence establishing affirmative customer negligence.
                </p>
              </section>

              {/* Inline Secondary CTA */}
              <RbiZeroLiabilityNoticeCTA variant="secondary" />

              {/* Rulebook Q&A 5: What If the Customer Shared an OTP — Who Pays for Losses After Reporting? */}
              <section id="heading-customer-negligence-cutoff" aria-labelledby="heading-customer-negligence-cutoff-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-customer-negligence-cutoff-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5. What If You Were Tricked Into Sharing an OTP—Who Bears Losses After You Notify the Bank?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Paragraph 7(a)(i) of the 6 July 2017 RBI Circular, where the loss is due to negligence by a customer (such as sharing payment credentials/OTP), the customer bears the loss only until they report the unauthorised transaction to the bank; 100% of any loss occurring after the reporting of the unauthorised transaction must be borne by the bank.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This is a vital legal lifeline in multi-tranche phishing frauds. Suppose a fraudster tricks an account holder at 2:10 PM into sharing an OTP for a ₹15,000 debit. Realising the scam immediately, the customer calls the bank&apos;s 24x7 toll-free fraud hotline at 2:14 PM or sends the mandatory SMS block command. If the bank&apos;s IVR fails to freeze the account immediately and the fraudster executes three more debits of ₹50,000 each at 2:22 PM, 2:25 PM, and 2:30 PM, <strong>Paragraph 7(a)(i)</strong> makes the bank <strong>100% liable for the ₹1,50,000 debited after 2:14 PM</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, under <strong>Paragraph 7(a)(ii)</strong>, banks are expressly encouraged by the RBI to waive even the pre-reporting customer liability in cases of tricked credentials via a Board-approved policy. If you instead transferred money yourself to an unintended recipient or wrong account number, use our <Link href="/templates/wrong-account-transfer-refund-application" className="text-blue-700 underline font-semibold">wrong account transfer refund application format</Link> to initiate beneficiary-bank lien marking and reversal.
                </p>
              </section>

              {/* Rulebook Q&A 6: What Is the 90-Day Final Resolution Limit? */}
              <section id="heading-90-day-resolution-rule" aria-labelledby="heading-90-day-resolution-rule-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-90-day-resolution-rule-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6. What Happens If the Bank Fails to Resolve Your Complaint Within 90 Days?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Paragraph 11 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, a bank must resolve the complaint and establish customer liability, if any, within a period not exceeding 90 days from the date of receipt of the complaint. If the bank is unable to resolve the complaint within 90 days, the bank must permanently pay the customer the full compensation prescribed in Paragraphs 6 to 8.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The RBI inserted Paragraph 11 to prevent banks from keeping a customer&apos;s shadow credit in perpetual &quot;lien&quot; or &quot;under investigation&quot; status for years. The bank has a strict <strong>90-calendar-day outer ceiling</strong> from the complaint date to complete its forensic audit and prove customer liability. If Day 90 expires without conclusive proof of customer negligence, the provisional shadow reversal becomes absolute and irrevocable, with zero loss of debit-account interest or imposition of credit-card interest.
                </p>
              </section>

              {/* Rulebook Q&A 7: Do Zero Liability Rules Cover UPI, Credit Cards, and Prepaid Wallets (PPIs)? */}
              <section id="heading-upi-credit-card-wallets" aria-labelledby="heading-upi-credit-card-wallets-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-upi-credit-card-wallets-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  7. Does the RBI Zero Liability Circular Cover UPI, Credit Cards, and Prepaid Wallets (PPIs)?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Yes. Paragraph 4 of the 6 July 2017 Circular covers all remote/online electronic banking transactions (Internet Banking, Mobile Banking, UPI, IMPS, NEFT/RTGS, and Card-Not-Present CNP transactions) as well as face-to-face ATM and POS transactions. Additionally, RBI Circular DPSS.CO.PD.No.1414/02.14.006/2018-19 dated 4 January 2019 extends the exact same 3-day Zero Liability and 10-day shadow reversal rules to Prepaid Payment Instruments (PPIs) and mobile wallets.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether an unauthorised debit hit your savings account via a UPI collect/push exploit on Google Pay, PhonePe, or Paytm, or via an unauthenticated credit card swipe or wallet transfer, the statutory protections are identical. Under the 4 January 2019 PPI Circular, even non-bank wallet issuers must provide 24x7 reporting channels, send mandatory SMS alerts for every debit, cap 4–7 day reporting liability at ₹10,000, and credit shadow reversal within <strong>10 days</strong>. If your bank instead deducted wrongful auto-debits or bounce fees, see our guide on <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-blue-700 underline font-semibold">serving a legal notice for unauthorised ECS/NACH debit reversal</Link> and <Link href="/recovery/unauthorized-bank-deduction" className="text-blue-700 underline font-semibold">recovering unauthorised bank charges and liens</Link>.
                </p>
              </section>

              {/* Rulebook Q&A 8: Why Did the Supreme Court Order State Bank of India to Refund Unauthorised Withdrawals? */}
              <section id="heading-sbi-supreme-court-ruling" aria-labelledby="heading-sbi-supreme-court-ruling-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sbi-supreme-court-ruling-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  8. Why Did the Supreme Court Rule That State Bank of India Must Refund Unauthorized Withdrawals?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    In State Bank of India v. Pallabh Bhowmick &amp; Ors. (SLP (C) Diary No. 55621/2024, decided 3 January 2025), the Supreme Court upheld the Gauhati High Court Division Bench ruling that State Bank of India must refund ₹94,204.80 siphoned from a customer&apos;s account via a malicious third-party app, because the customer reported the fraud within 24 hours (inside the 3-working-day Zero Liability window) and never voluntarily shared an OTP or MPIN to authorise the debits.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This landmark 2025 Supreme Court order destroys the two most common excuses banks use to reject cyber-fraud victims: (1) claiming that the transaction happened through a third-party UPI app like Google Pay or PhonePe, and (2) claiming that installing an app during a customer-service call automatically equals &quot;customer negligence&quot;. The Supreme Court observed that banks hold the statutory duty to deploy robust anomaly-detection technology capable of flagging suspicious, rapid-fire withdrawals, and must honour Clauses 8 and 9 of the 2017 RBI Circular when customers report promptly.
                </p>
              </section>

              {/* Rulebook Q&A 9: Mandatory SMS Alerts & Direct Reply Reporting */}
              <section id="heading-sms-alerts-reporting" aria-labelledby="heading-sms-alerts-reporting-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sms-alerts-reporting-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  9. What Duties Does Paragraph 5 Impose on Banks Regarding SMS Alerts and Loss Reporting?
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Paragraphs 4 and 5 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, banks must mandatorily register all electronic banking customers for SMS alerts, send instant SMS alerts for every electronic debit, allow customers to report unauthorised transactions simply by replying to the SMS alert without searching for a helpline number, and send an immediate acknowledgment with a registered complaint number.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If a bank fails to send an instant SMS alert for an electronic banking debit, or if its toll-free fraud hotline/IVR was unreachable when you tried to report the loss, the bank violates <strong>Paragraph 5</strong>. Under the RBI circular, the 3-working-day reporting window is measured strictly from the date of <em>receiving the communication from the bank</em>—meaning if no SMS was delivered, your 3-day window begins only when you first receive your passbook update or email statement. Additionally, always report the incident on the <strong>1930 National Cyber Crime Helpline</strong> and <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">cybercrime.gov.in</a> (see our Hindi guide on <Link href="/hi/cyber-fraud-paisa-wapas-kaise-milega" className="text-blue-700 underline font-semibold">साइबर फ्रॉड का पैसा वापस कैसे मिलेगा</Link> for step-by-step 1930 freeze procedure).
                </p>
              </section>

              {/* Rulebook Q&A 10: How Does the 1 January 2027 RBI Revised Framework Change Customer Compensation? */}
              <section id="heading-2027-revised-framework" aria-labelledby="heading-2027-revised-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-2027-revised-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  10. How Does the 1 January 2027 RBI Revised Framework Change Fraud Compensation? (†)
                </h2>
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#DC2626] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Effective 1 January 2027†, the RBI&apos;s Revised Framework for Fraudulent Electronic Banking Transactions (issued via the June 2026 Responsible Business Conduct Amendment Directions) replaces the 2017 circular for transactions on or after that date—retaining the bank&apos;s strict burden of proof while introducing a new one-time compensation of 85% of net loss or ₹25,000 (whichever is lower)† for small-value frauds up to ₹50,000† reported within 5 calendar days†, even where the victim was tricked into authorising the payment.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the 2017 circular, if a victim was manipulated through social engineering, fake KYC threats, or &quot;digital arrest&quot; coercion into entering their own UPI PIN or reading out an OTP, banks routinely denied refunds under Paragraph 7(a) as &quot;customer-authorised transactions&quot;. The <strong>1 January 2027 framework†</strong> closes that gap for small retail losses (gross loss ≤ ₹50,000) by creating a tripartite compensation pool shared by the RBI, the customer&apos;s bank, and the beneficiary bank—provided the victim reports to both their bank and the <strong>1930 / NCRP portal within 5 calendar days</strong>†. For a full breakdown of the new rules, read our dedicated guide on the <Link href="/law/rbi-fraudulent-transaction-framework-2027" className="text-blue-700 underline font-semibold">RBI Fraudulent Transaction Framework 2027</Link>.
                </p>
              </section>

              {/* Section 11: Archetype L3 Static Yes/No Eligibility Checker + Interactive Calculator & Scenario Tabs */}
              <section id="heading-eligibility-checker" aria-labelledby="heading-eligibility-checker-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-eligibility-checker-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  11. RBI Zero &amp; Limited Liability Eligibility Checker (Static Yes/No + Interactive Calculator)
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Verify the 5-point statutory Yes/No rulebook checklist below or use the interactive calculator to determine your exact refund entitlement under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18:
                </p>

                {/* Static Server-Rendered Yes/No Eligibility List (Mandatory for L3 Archetype) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-3">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                    Statutory 5-Point Yes/No Eligibility Checklist (Clauses 6, 7 &amp; 9)
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>1. Electronic Banking or PPI Channel:</strong> Did the debit occur via UPI, IMPS, NEFT, RTGS, Internet/Mobile Banking, Debit/Credit Card (POS/ATM/Online), or a regulated Prepaid Wallet? (<em>If YES → Covered under RBI Circulars 2017-18/15 &amp; 2018-19/101</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>2. Absence of Deliberate Credential Sharing (or Post-Notification Debit):</strong> Did the debit occur without you consciously sharing an OTP/PIN/MPIN for that transaction—OR did it occur <em>after</em> you had already alerted the bank helpline? (<em>If YES → Eligible for Zero/Limited Liability</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>3. Reported Within 3 Working Days of Bank Alert:</strong> Did you notify your bank within <strong>3 working days</strong> after the date on which you received the SMS/email debit alert? (<em>If YES → 100% Zero Liability under Paragraph 6(b)</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>4. Reported Between 4 and 7 Working Days:</strong> If you missed the 3-day window, did you notify the bank within <strong>4 to 7 working days</strong> of the alert? (<em>If YES → Bank must refund 100% of the loss above the ₹5,000 / ₹10,000 / ₹25,000 Table 1 cap</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>5. 10 Working Days Elapsed Without Shadow Reversal:</strong> Have more than <strong>10 working days</strong> passed since your complaint without the bank crediting a value-dated shadow reversal? (<em>If YES → Bank is in statutory breach of Paragraph 9; serve an Advocate Legal Notice &amp; file on RBI CMS</em>)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Client Island: Interactive Liability Calculator + 4 Dispute Scenario Tabs */}
                <RbiZeroLiabilityEligibilityChecker />
              </section>

              {/* Section 12: RBI Circular Tables 1 & 2 + 2017 vs 2027 Comparison Matrix (Placed Below the Fold per L3 Spec) */}
              <section id="heading-liability-tables" aria-labelledby="heading-liability-tables-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-liability-tables-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  12. Official RBI Customer Liability Tables (Table 1, Table 2 &amp; 2017 vs. 2027 Framework)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Below are the exact statutory liability slabs reproduced from Paragraph 7 of RBI Circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong> alongside a side-by-side comparison with the upcoming <strong>1 January 2027 Revised Framework†</strong>:
                </p>

                {/* Table A: RBI Table 2 (Overall Liability by Reporting Window) */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[600px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">RBI Circular Table 2 — Summary of Customer Liability by Reporting Time</caption>
                    <thead className="bg-slate-900 text-white font-bold border-b border-slate-800">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Nature of Breach &amp; Time Taken to Report from Date of Receiving Bank Alert</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Customer&apos;s Liability (RBI Circular Clause)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandatory Bank Reversal Duty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Contributory fraud / negligence / deficiency on the part of the bank (irrespective of reporting by customer)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Zero Liability (₹0) — Para 6(a)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">100% value-dated reversal within 10 working days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Third-party breach reported within 3 working days (excluding date of alert communication)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Zero Liability (₹0) — Para 6(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">100% shadow reversal within 10 working days (Para 9)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Third-party breach reported within 4 to 7 working days
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Capped at ₹5,000 / ₹10,000 / ₹25,000 (Table 1) — Para 7(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Bank refunds 100% of amount exceeding the Table 1 cap within 10 working days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Third-party breach reported beyond 7 working days
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700 font-semibold">As per Bank&apos;s Board-Approved Policy — Para 7(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Policy must be transparently disclosed; 3-day clock starts only when alert delivered</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Loss occurring AFTER customer notifies the bank (even in OTP negligence cases)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Zero Liability (₹0) — Para 7(a)(i)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">100% of post-reporting debits borne unconditionally by the bank</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Table B: RBI Table 1 (Maximum Customer Liability for 4–7 Day Reporting by Account Type) */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">RBI Circular Table 1 — Maximum Customer Liability by Account Type (4 to 7 Working Days)</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Type of Bank Account / Card / Payment Instrument (RBI Table 1)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Maximum Customer Liability (4–7 Working Days)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Basic Savings Bank Deposit (BSBD) Accounts
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-extrabold text-emerald-700">₹5,000 (or transaction value, whichever is lower)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          All other Savings Bank accounts • Pre-paid Payment Instruments (PPIs) &amp; Gift Cards • Credit Cards with limit up to ₹5 lakh • Current / Cash Credit / Overdraft accounts of MSMEs • Current / CC / OD accounts of Individuals with annual average balance up to ₹25 lakh
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-extrabold text-blue-700">₹10,000 (or transaction value, whichever is lower)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          All other Current / Cash Credit / Overdraft accounts • Credit Cards with limit above ₹5 lakh
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-extrabold text-amber-700">₹25,000 (or transaction value, whichever is lower)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 13: Hand-Authored SVG Process Diagram + Mobile Step Sequence */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  13. Statutory Escalation Flowchart: From Unauthorised Debit to 10-Day Shadow Credit &amp; Ombudsman Award
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this 5-stage statutory escalation rail to lock in your 3-working-day Zero Liability timestamp and force your bank to release your refund:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1 • Day 0 to Day 3</span>
                    <h3 className="font-bold text-sm">Notify Bank &amp; Call 1930 Immediately</h3>
                    <p className="text-xs text-slate-200 mt-1">Reply to bank SMS alert, block card/UPI via 24x7 helpline, and log NCRP docket on 1930 / cybercrime.gov.in within 3 working days.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2 • Within 10 Working Days</span>
                    <h3 className="font-bold text-sm">Demand Paragraph 9 Shadow Reversal</h3>
                    <p className="text-xs text-amber-900 mt-1">File written dispute form at branch &amp; Nodal Officer demanding value-dated shadow credit within 10 working days.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3 • Day 11 to Day 15</span>
                    <h3 className="font-bold text-sm">Challenge Generic &apos;OTP Shared&apos; Denial</h3>
                    <p className="text-xs text-slate-700 mt-1">Invoke Paragraph 12 burden of proof &amp; SBI v. Pallabh Bhowmick (2025) demanding forensic server/IP logs.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4 • 15-Day Statutory Notice</span>
                    <h3 className="font-bold text-sm">Serve Advocate Legal Notice to Bank MD &amp; Nodal Cell</h3>
                    <p className="text-xs text-red-900 mt-1">Dispatch formal advocate legal notice via Speed Post + Email demanding principal + interest.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5 • Day 30 Onwards</span>
                    <h3 className="font-bold text-sm">RBI Ombudsman (CMS) or Consumer Court (e-Jagriti)</h3>
                    <p className="text-xs text-emerald-900 mt-1">Escalate to cms.rbi.org.in (RB-IOS 2021) or file deficiency petition on e-Jagriti for 100% refund + damages.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">RBI Zero-Liability Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 265"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[720px]"
                    role="img"
                    aria-label="RBI Zero Liability Unauthorised Transaction Refund Flowchart"
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

                    {/* Step 1 */}
                    <rect x="10" y="20" width="142" height="92" rx="10" fill="url(#rbiGrad)" />
                    <text x="81" y="43" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 1 (≤ 3 DAYS)</text>
                    <text x="81" y="63" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Report to Bank &amp; 1930</text>
                    <text x="81" y="81" fill="#E2E8F0" fontSize="10" textAnchor="middle">SMS Reply + Helpline</text>
                    <text x="81" y="97" fill="#CBD5E1" fontSize="9" textAnchor="middle">Locks Zero Liability (Para 6)</text>

                    <path d="M 152 66 L 180 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="142" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="251" y="43" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2 (≤ 10 DAYS)</text>
                    <text x="251" y="63" fill="#92400E" fontWeight="bold" textAnchor="middle">Shadow Reversal</text>
                    <text x="251" y="81" fill="#78350F" fontSize="10" textAnchor="middle">Mandatory Provisional Credit</text>
                    <text x="251" y="97" fill="#78350F" fontSize="9" textAnchor="middle">Value-Dated (Para 9)</text>

                    <path d="M 322 66 L 350 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="142" height="92" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="421" y="43" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3 (PARA 12)</text>
                    <text x="421" y="63" fill="#0F172A" fontWeight="bold" textAnchor="middle">Burden on Bank</text>
                    <text x="421" y="81" fill="#334155" fontSize="10" textAnchor="middle">Demand Forensic Logs</text>
                    <text x="421" y="97" fill="#475569" fontSize="9" textAnchor="middle">Max 90d Resolution (Para 11)</text>

                    <path d="M 492 66 L 520 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="142" height="92" rx="10" fill="url(#rbiAlert)" />
                    <text x="591" y="43" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4 (DAY 11+)</text>
                    <text x="591" y="63" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="591" y="81" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="591" y="97" fill="#FECACA" fontSize="9" textAnchor="middle">Bank Nodal Officer + MD</text>

                    <path d="M 662 66 L 690 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="92" rx="10" fill="url(#rbiSucc)" />
                    <text x="760" y="43" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5 (DAY 30+)</text>
                    <text x="760" y="63" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Ombudsman / Court</text>
                    <text x="760" y="81" fill="#D1FAE5" fontSize="10" textAnchor="middle">cms.rbi.org.in (RB-IOS)</text>
                    <text x="760" y="97" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti + HC Writ</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="140" width="820" height="105" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="164" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY BENCHMARKS UNDER RBI CIRCULAR DBR.No.Leg.BC.78/09.07.005/2017-18 &amp; 2027 FRAMEWORK (†):</text>
                    <text x="25" y="185" fill="#475569" fontSize="10">• Within 3 Working Days (excluding alert date): 100% Zero Customer Liability in third-party breaches (Paragraph 6(b))</text>
                    <text x="25" y="202" fill="#475569" fontSize="10">• Within 10 Working Days of Notification: Bank must credit value-dated Shadow Reversal without waiting for insurance (Paragraph 9)</text>
                    <text x="25" y="219" fill="#475569" fontSize="10">• Within 90 Calendar Days: Outer limit for bank to prove customer negligence under Paragraph 12; else full claim stands allowed</text>
                    <text x="25" y="236" fill="#B91C1C" fontSize="10" fontWeight="bold">• From 1 Jan 2027†: Losses ≤ ₹50,000 reported within 5 calendar days get 85% or ₹25,000 one-time payout even in social-engineering scams</text>
                  </svg>
                </div>
              </section>

              {/* Section 14: Landmark Court Precedents Digest (Strictly matching IRCTC / CompanyDirectors <article> cards) */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    14. Landmark Supreme Court, High Court &amp; NCDRC Precedents Enforcing RBI Zero Liability
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Rulings
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
                              Judicial Relief / Binding Order
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Authority Cited
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Clauses 6, 8, 9 &amp; 12 RBI Circular (6 July 2017)
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your bank dispute:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 15: Worked Case Study (Dark Slate Card strictly matching IRCTC / CompanyDirectors) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  15. Worked Case Study: Account Holder Recovers ₹1,42,000 Unauthorised IMPS/UPI Debits After Bank Refused 10-Day Shadow Credit
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Banking Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Savings Account • APK SMS-Forwarding Exploit</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Incident (14 August 2026):</strong> Siddharth Nair, a software engineer in Bengaluru, received a WhatsApp message with a fake electricity-disconnection APK file. Without his knowledge, background malware intercepted incoming SMS messages while he was asleep. Between 1:15 AM and 1:28 AM, three unauthorised IMPS and UPI transfers of ₹49,000, ₹48,000, and ₹45,000 (totalling <strong>₹1,42,000</strong>) were debited from his private-sector savings account.
                    </p>
                    <p>
                      <strong>Prompt Reporting (Within 7 Hours — Day 1):</strong> At 8:10 AM the same morning, Siddharth saw the debit alerts, called the bank&apos;s 24x7 fraud hotline to block his mobile banking and UPI, registered NCRP Docket No. 22908260041298 on the <strong>1930 Cyber Helpline</strong>, and submitted a written dispute letter at his home branch.
                    </p>
                    <p>
                      <strong>The Bank&apos;s Illegal Refusal (Day 14):</strong> Instead of crediting a shadow reversal within <strong>10 working days</strong> under Paragraph 9 of the 6 July 2017 RBI Circular, the bank closed his ticket on Day 14 stating: <em>&quot;Transactions were completed using valid device binding and OTP; hence bank is not liable.&quot;</em>
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Siddharth engaged LegalRecovery.in (flat ₹{noticePrice} fee—see our <Link href="/legal-notice-charges" className="text-sky-400 underline">legal notice charges</Link>). An advocate served a 15-day statutory legal demand notice on the Bank&apos;s Principal Nodal Officer and Managing Director, citing <strong>Paragraphs 6(b), 9(i), and 12 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18</strong> and the Supreme Court&apos;s 2025 ruling in <em>State Bank of India v. Pallabh Bhowmick</em>—demanding the bank&apos;s server logs explaining how a new payee cooling-off period was bypassed at 1:15 AM.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome (Day 12 After Legal Notice):</strong>
                      Faced with an imminent RBI Integrated Ombudsman (CMS) escalation and Consumer Commission filing where the bank could not justify how three midnight transfers to a newly added beneficiary bypassed velocity controls, the Bank&apos;s Nodal Cell reopened the claim and credited the full <strong>₹1,42,000</strong> back to Siddharth&apos;s savings account, value-dated to 14 August 2026.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 16: 6-Point BSA Section 63 Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  16. Banking Evidence Checklist: 6 Essential Records Before Serving a Zero-Liability Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic banking logs, SMS timestamps, and NCRP dockets are primary evidence before the RBI Ombudsman and Consumer Commissions. Assemble these 6 records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Bank Debit SMS / Email Alert Screenshot:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the exact date and timestamp when the bank first communicated the unauthorised transaction to you (fixing the start of the 3-working-day clock).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Reporting to Bank Within 3 (or 4–7) Working Days:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank complaint ticket number, SMS reply log, outbound call log to the 24x7 bank helpline, or stamped branch dispute letter.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">1930 Cyber Helpline / NCRP Acknowledgement PDF:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">14-digit NCRP complaint acknowledgement downloaded from cybercrime.gov.in showing the transaction UTRs reported for lien-marking.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Account / Credit Card Statement Showing 12-Digit UTR / RRN:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official PDF statement highlighting each unauthorised debit, beneficiary account/VPA, and absence of 10-day shadow reversal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank&apos;s Rejection Email or Unresolved Ticket Log:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing that the bank mechanically blamed you without providing forensic proof under Paragraph 12 or ignored your complaint past 10 working days.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Telecom Operator Call/SMS History (For SIM-Swap / Post-Call Debits):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Demonstrating either sudden SIM deactivation or proving that subsequent debits occurred after your first call to the bank helpline.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 17: Honest Scope Block (Mandatory per Prompt §7 / §8.10) */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  17. Honest Recovery Scope: What LegalRecovery Can and Cannot Do in Banking Fraud Disputes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                      ✓ What We Do: Enforce Your Bank&apos;s Statutory Liability
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      We pursue <strong>your bank or card/wallet issuer</strong> when it breaches RBI Circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong>—including refusing the mandatory 10-working-day shadow reversal, failing to block your account after you called the helpline, permitting high-velocity midnight debits or non-OTP international swipes, or rejecting a 3-day Zero Liability claim without discharging its Clause 12 burden of proof. Our advocate legal notice sets up rapid escalation to the <strong>RBI Integrated Ombudsman (CMS)</strong> and <strong>e-Jagriti Consumer Commission</strong>.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 block mb-1.5">
                        ✕ What We Cannot Do: Trace Anonymous Fraudsters or Unfreeze Police Liens
                      </span>
                      We cannot trace anonymous Telegram/WhatsApp cyber criminals once funds have been withdrawn in cash from mule accounts, nor do we handle unfreezing bank accounts that have been debit-frozen by state cyber police cells due to incoming P2P crypto or gaming credits. Where you voluntarily transferred funds over days in an investment or task scam, bank liability under the 2017 circular does not apply unless the bank ignored a freeze request or the loss falls within the 2027 small-value compensation cap†.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 18: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    18. Frequently Asked Questions: RBI Zero Liability, Shadow Reversal &amp; Bank Refunds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, Supreme Court Rulings &amp; the 2027 Framework
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

              {/* Section 19: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  19. Primary RBI Circulars, Supreme Court Judgments &amp; Official Regulatory References
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
                  † Statutory verification status: Clauses 4 to 12 and Tables 1 &amp; 2 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 (dated 6 July 2017) and the Supreme Court ruling in <em>State Bank of India v. Pallabh Bhowmick</em> (3 January 2025) are in active force as of November 2026. Provisions marked with † relate to the RBI Revised Framework for Fraudulent Electronic Banking Transactions scheduled to take effect on 1 January 2027.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve an RBI Zero-Liability Legal Demand Notice to Your Bank
                </h2>
                <RbiZeroLiabilityNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster (Includes all 5 row.internal_links + contextual banking links) */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking, UPI &amp; Cyber Fraud Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Fraudulent Transaction Amount Recovery Hub →
                  </Link>
                  <Link
                    href="/templates/wrong-account-transfer-refund-application"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Wrong Account Transfer Refund Application Format →
                  </Link>
                  <Link
                    href="/hi/cyber-fraud-paisa-wapas-kaise-milega"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    साइबर फ्रॉड का पैसा वापस कैसे मिलेगा (1930 गाइड) →
                  </Link>
                  <Link
                    href="/law/rbi-fraudulent-transaction-framework-2027"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RBI 2027 Fraudulent Transaction Framework (†) →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Transparent Fee Schedule →
                  </Link>
                  <Link
                    href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unauthorised ECS / NACH Auto-Debit Reversal →
                  </Link>
                  <Link
                    href="/recovery/unauthorized-bank-deduction"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unauthorised Bank Charges &amp; Lien Removal →
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
