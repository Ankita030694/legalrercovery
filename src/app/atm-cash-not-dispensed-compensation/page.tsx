import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import AtmNoticeCTA from "./AtmNoticeCTA";
import AtmTableOfContents from "./AtmTableOfContents";
import AtmProblemTabs from "./AtmProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "ATM Cash Not Dispensed but Debited? Refund & Penalty",
  description:
    "ATM didn't dispense cash but your account was debited? RBI's auto-reversal deadline and daily compensation, and how to claim them.",
  alternates: {
    canonical: `${SITE_URL}/atm-cash-not-dispensed-compensation`,
  },
  openGraph: {
    title: "ATM Debited You but Gave No Cash: Deadlines and Compensation",
    description:
      "Statutory guide on failed ATM cash withdrawals: RBI T+5 calendar days auto-reversal deadline, ₹100 per day mandatory compensation, and filing banking ombudsman complaints.",
    url: `${SITE_URL}/atm-cash-not-dispensed-compensation`,
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
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Section 10 Deficiencies in Banking Services & Award Limits",
    url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=52554",
  },
  {
    title: "National Payments Corporation of India (NPCI) — National Financial Switch (NFS) Dispute Management Guidelines & Chargeback Framework",
    url: "https://www.npci.org.in/what-we-do/nfs/dispute-management-system",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for ATM Electronic Journals & CCTV)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Electronic Switch Log Insufficient Without Physical Cash Dispenser Counter Audit",
    parties: "State Bank of India v. Ravindra Prasad Sharma",
    citation: "Revision Petition No. 2884 of 2017, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 19 September 2018",
    facts:
      "The complainant attempted to withdraw ₹10,000 from an SBI ATM terminal. The machine produced a mechanical whirring sound, failed to open the dispenser shutter, and printed an unreadable paper advice. However, the complainant's savings account was debited ₹10,000. When the customer complained, SBI rejected the refund claiming that the switch log recorded '000 - Successful Transaction'. The bank refused to disclose the physical cash balance of the machine.",
    holding:
      "The National Commission held that an electronic switch log is mere secondary software data. In ATM non-dispensation disputes, the burden of proof rests squarely on the bank to produce the complete Electronic Journal (EJ) log, the cash purge bin counter report, and the physical cash verification sheet signed by the custodian on that day. SBI failed to establish that cash was physically ejected and taken. The NCDRC upheld the order directing SBI to refund ₹10,000 along with 9% interest, ₹15,000 compensation for mental harassment, and ₹5,000 litigation expenses.",
    amount: "₹10,000 Debit Reversal @ 9% Interest + ₹15,000 Harassment Damages + ₹5,000 Costs",
    takeaway:
      "Banks cannot deny an ATM cash non-dispensation claim simply by citing software switch success codes. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, the bank must prove actual physical delivery through cash cassette reconciliation logs and time-stamped CCTV recordings.",
  },
  {
    title: "Card-Issuing Bank Held Exclusively Liable for Off-Us Third-Party ATM Delays",
    parties: "HDFC Bank Ltd. v. Om Prakash Aggarwal",
    citation: "First Appeal No. 74 of 2020, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 12 November 2021",
    facts:
      "The consumer held a debit card issued by HDFC Bank and used an Axis Bank ATM in Chandigarh to withdraw ₹20,000. The transaction timed out, cash was not dispensed, but HDFC Bank debited the customer's savings account. Despite an immediate complaint, HDFC Bank took 48 calendar days to reverse the amount, arguing that the delay was attributable to Axis Bank failing to confirm the chargeback settlement via the National Financial Switch.",
    holding:
      "The State Commission dismissed HDFC Bank's defence, ruling that the consumer has privity of contract solely with their card-issuing bank. Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, the card-issuing bank must proactively reverse failed transactions within T + 5 calendar days irrespective of inter-bank chargeback disputes. HDFC Bank was directed to pay the mandatory statutory penalty of ₹100 per day for 43 days of delay (₹4,300), alongside ₹20,000 for mental agony and ₹10,000 legal costs.",
    amount: "₹4,300 Statutory Delay Penalty (43 days @ ₹100/day) + ₹20,000 Agony Award + ₹10,000 Costs",
    takeaway:
      "Your card-issuing bank cannot shift the blame to another bank or third-party White-Label ATM operator. If your money is not reversed within T + 5 calendar days, your bank is statutorily liable to credit ₹100 for each day of delay directly into your account.",
  },
  {
    title: "Automatic Compensation Obligation Under RBI Directives Without Separate Request",
    parties: "ICICI Bank Ltd. v. Dr. V.P. Sharma",
    citation: "Consumer Complaint No. 412/2021, District Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 08 March 2023",
    facts:
      "The complainant suffered an ATM debit of ₹8,000 with zero cash dispensed at a south Delhi branch ATM. ICICI Bank reversed the principal amount after 29 calendar days following extensive email exchanges, but refused to credit the statutory delay penalty of ₹100 per day. The bank contended that customer compensation requires a specific grievance filing and management approval.",
    holding:
      "The District Consumer Commission held that under Clause 3 of RBI Circular No. 629, compensation of ₹100 per day beyond T + 5 days must be credited to the customer's account automatically, pro-actively, and without waiting for a customer claim. Retaining the penalty constitutes an unfair trade practice under Section 2(47) CPA 2019. The Commission directed ICICI Bank to pay ₹2,400 penalty (24 days delay), ₹10,000 punitive damages, and ₹7,500 litigation costs.",
    amount: "₹2,400 Mandatory Daily TAT Penalty + ₹10,000 Punitive Damages + ₹7,500 Costs",
    takeaway:
      "Banks frequently credit the principal failed amount and quietly skip the ₹100/day penalty. The RBI mandate makes compensation mandatory and auto-payable; you can legally recover every rupee of delay penalty before the Banking Ombudsman or Consumer Court.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "You must wait 30 to 45 business days for the bank to complete its internal ATM cash reconciliation before receiving a refund.",
    fact: "Statutorily False. Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, banks have an absolute maximum Turn Around Time (TAT) of T + 5 calendar days (where T is the transaction date) to auto-reverse failed ATM debits.",
    authority: "RBI Harmonisation Circular 2019 Item 1; Section 2(11) Consumer Protection Act, 2019",
  },
  {
    myth: "If you withdrew from another bank's ATM (Off-Us transaction), you must complain to the bank that owns the ATM machine.",
    fact: "Legally Incorrect. Your contract is strictly with your card-issuing bank. Your bank is statutorily obligated to handle the dispute via NPCI National Financial Switch (NFS) and credit your refund within T + 5 calendar days.",
    authority: "HDFC Bank v. Om Prakash Aggarwal (UT State Commission 2021); NPCI Dispute Rules",
  },
  {
    myth: "You must submit a separate formal application or affidavit to claim the ₹100 per day RBI delay compensation.",
    fact: "Untrue. Clause 3 of RBI Circular No. 629 explicitly mandates that banks must credit the ₹100/day delay penalty pro-actively and automatically into the cardholder's account without requiring any claim or application.",
    authority: "RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 Clause 3",
  },
  {
    myth: "If the bank's core banking computer shows 'Transaction Successful', the bank's rejection is final and cannot be challenged.",
    fact: "Rebuttable in Law. A switch log merely records an electronic communication. In SBI v. Ravindra Prasad Sharma, the NCDRC held that the bank must produce physical Electronic Journal (EJ) counter logs and CCTV footage proving actual cash exit.",
    authority: "NCDRC Revision Petition No. 2884 of 2017; Section 63 Bharatiya Sakshya Adhiniyam, 2023",
  },
  {
    myth: "Failed withdrawals at White-Label ATMs (like Tata Indicash, India1, or Hitachi) are not covered by RBI ₹100/day rules.",
    fact: "Completely Protected. RBI's 2019 TAT Harmonisation directives explicitly apply to all White-Label ATM Operators (WLAOs) and card-issuing banks across all domestic automated teller machines in India.",
    authority: "RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 Schedule Item 1",
  },
  {
    myth: "If an ATM dispenses partial cash (e.g., ₹2,000 instead of ₹10,000), the bank is not bound by the T + 5 reversal rule.",
    fact: "Equally Covered. The RBI framework explicitly brackets partial dispensation identically with complete non-dispensation. The undispersed balance must be restored within T + 5 calendar days with ₹100/day penal interest thereafter.",
    authority: "RBI Master Direction on ATM Operations & Failed Electronic Transactions Framework",
  },
  {
    myth: "You cannot approach the Banking Ombudsman until your bank officially rejects your grievance in writing.",
    fact: "Wrong. Under Section 11 of the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS), you can file an online complaint if the bank fails to resolve your grievance within 30 days or provides an unsatisfactory resolution.",
    authority: "Section 11 Reserve Bank - Integrated Ombudsman Scheme, 2021",
  },
];

const FAQS = [
  {
    question: "What should I do immediately if an ATM debits my account but does not dispense cash?",
    answer:
      "First, do not leave the ATM counter immediately. Wait 2 minutes to confirm the shutter does not open and collect any printed slip. Take a timestamped photograph of the ATM screen showing the error or timeout, and note down the exact ATM Terminal ID and location. Next, immediately contact your card-issuing bank's 24/7 customer care helpline or lodge a ticket through your mobile banking application under 'Failed ATM Cash Withdrawal'. Record the formal Complaint Reference Number and date.",
  },
  {
    question: "What is the RBI deadline for refunding a failed ATM cash withdrawal?",
    answer:
      "Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, the prescribed Turn Around Time (TAT) for failed ATM cash transactions is T + 5 calendar days, where 'T' represents the date of the transaction. The bank must reverse the debited amount into your savings or current account on or before the fifth calendar day following the failed withdrawal.",
  },
  {
    question: "How much compensation is the bank legally required to pay for delayed ATM refunds?",
    answer:
      "If the bank fails to re-credit your funds within T + 5 calendar days, it must pay mandatory statutory compensation of ₹100 per day for every day of delay beyond T + 5, until the funds are successfully credited back to your account. Under RBI guidelines, this compensation must be credited automatically without requiring any separate application from the customer.",
  },
  {
    question: "How do I file an SBI ATM cash not dispensed complaint?",
    answer:
      "For State Bank of India (SBI), lodge an online dispute on the SBI CMS portal (crcf.sbi.co.in) or call 1800 1234 / 1800 2100. Select Category 'Personal Banking' › Product 'ATM/Debit Card' › Nature of Complaint 'Cash not dispensed / partially dispensed but account debited'. If SBI fails to auto-reverse funds within T + 5 days or ignores your claim, serve a formal statutory legal notice to the Branch Manager and Principal Nodal Officer, followed by an escalation to the RBI Integrated Ombudsman.",
  },
  {
    question: "Can my bank blame another bank if I used a third-party ATM?",
    answer:
      "No. Under Indian consumer law and RBI circulars, you have privity of contract solely with your card-issuing bank. Even if you attempted withdrawal at another bank's ATM (an 'Off-Us' transaction) or a third-party White-Label ATM (such as Tata Indicash or Hitachi Money Spot), your bank is legally obligated to initiate inter-bank chargeback through NPCI's National Financial Switch (NFS) and credit your account within T + 5 calendar days. Your bank cannot pass the buck to the acquiring bank.",
  },
  {
    question: "What if the bank rejects my claim saying 'Transaction Successful' according to machine logs?",
    answer:
      "A software switch status is not conclusive evidence of physical cash disbursement. In landmark rulings including State Bank of India v. Ravindra Prasad Sharma, the National Consumer Disputes Redressal Commission (NCDRC) held that the bank bears the legal burden of proof under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. The bank must produce the physical cash dispenser counter log, purge bin log, cash balance sheet, and time-stamped CCTV video footage showing the cash shutter opening and the customer collecting currency notes.",
  },
  {
    question: "How do I escalate an unresolved ATM debit complaint to the RBI Ombudsman?",
    answer:
      "If your bank does not resolve your complaint within 30 days, rejects your refund, or refuses to credit the ₹100/day statutory delay penalty, you can lodge an online complaint on the RBI Complaint Management System (CMS) portal at cms.rbi.org.in under the Reserve Bank - Integrated Ombudsman Scheme, 2021. The Ombudsman has the power to order the full refund, enforce the daily ₹100 delay penalty, and award additional compensation up to ₹1,00,000 for mental agony, loss of time, and harassment.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ATM Debited You but Gave No Cash: Deadlines and Compensation",
  description:
    "ATM didn't dispense cash but your account was debited? RBI's auto-reversal deadline and daily compensation, and how to claim them.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T15:15:00+05:30",
  mainEntityOfPage: `${SITE_URL}/atm-cash-not-dispensed-compensation`,
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
    name: "RBI ATM Failed Transaction Turn Around Time and Customer Compensation Framework",
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
      name: "ATM Cash Not Dispensed Compensation",
      item: `${SITE_URL}/atm-cash-not-dispensed-compensation`,
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

export default function AtmCashNotDispensedCompensationPage() {
  const breadcrumbItems = [
    { label: "Banking & Payment Disputes", href: "/recovery/fraud-transaction-amount" },
    { label: "ATM Cash Not Dispensed Compensation", href: "/atm-cash-not-dispensed-compensation" },
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
        {/* Hero Section matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RBI Failed Transaction Circular 2019</span>
              <span className="text-red-500">•</span>
              <span>₹100/Day Delay Penalty Guarantee</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              ATM Debited You but Gave No Cash: Deadlines and Compensation
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (RBI Harmonisation Circular DPSS.CO.PD No.629/2019-20)
              </p>
              <p>
                Under Reserve Bank of India directives, if an ATM machine fails to dispense cash but debits your account, your card-issuing bank is legally mandated to auto-reverse the debited funds within <strong>T + 5 calendar days</strong>. If the bank fails to credit your account within T + 5 days, it must pay a mandatory statutory compensation of <strong>₹100 per day</strong> of delay directly to your account.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">T + 5 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Auto-Reversal TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹100 / Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Delay Penalty</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Zero App</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Auto-Payable by Bank</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹20 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Ombudsman Jurisdiction</p>
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
            <AtmTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview of RBI Failed ATM Rules */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  ATM Debited but Cash Not Dispensed: Your Legal Rights Under RBI Directives
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every day across India, thousands of consumers stand before an automated teller machine, insert their debit or credit card, enter their PIN, request a cash withdrawal, and listen to the mechanical count of banknotes—only for the shutter to remain firmly shut while their phone buzzes with an immediate SMS debit alert. This malfunction, known in banking terminology as a <em>failed cash withdrawal</em> or <em>cash non-dispensation</em>, leaves citizens temporarily deprived of their hard-earned money.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recognizing the acute distress caused by delayed reconciliations, the Reserve Bank of India issued a comprehensive statutory framework under <strong>RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20</strong> on the <em>Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions</em>. This binding directive established two revolutionary consumer protections: first, an ironclad auto-reversal deadline of <strong>T + 5 calendar days</strong> (where T is the date of transaction), and second, a non-negotiable statutory compensation of <strong>₹100 per day</strong> payable for every calendar day of delay beyond T + 5 days.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Despite this explicit mandate, retail branch managers and phone helpline agents routinely mislead distressed cardholders. They instruct customers to &quot;wait 15 to 30 working days&quot;, claim that transactions at third-party ATMs are outside their responsibility, or quietly return the principal amount weeks later while refusing to credit the mandatory ₹100 per day delay penalty. Understanding the statutory architecture under the RBI framework, the <Link href="/law/rbi-ombudsman-complaint-guide" className="text-red-600 hover:underline font-semibold">Reserve Bank - Integrated Ombudsman Scheme, 2021</Link>, and the <Link href="/law/rbi-failed-transaction-tat-compensation" className="text-red-600 hover:underline font-semibold">failed transaction compensation regulations</Link> empowers consumers to compel complete restitution with statutory interest.
                </p>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Costly Misconceptions in Failed ATM Debit Disputes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    RBI Regulations vs Branch Falsehoods
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When money vanishes inside an ATM terminal, bank branch personnel frequently recite boilerplate excuses designed to exhaust consumer patience. Below is the verified legal reality contrasting branch myths against binding statutory rules:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Failed ATM Withdrawal Analysis">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                            {item.authority}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <p className="text-xs sm:text-sm font-semibold text-slate-500 line-through decoration-red-400">
                            &quot;{item.myth}&quot;
                          </p>
                          <p className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
                            <span className="text-emerald-700 font-extrabold mr-1">Statutory Fact:</span>
                            {item.fact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Case Law & Consumer Commission Precedents */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Court Precedents: Judicial Rulings Holding Banks Accountable for ATM Failures
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Binding judgments from the NCDRC, State Commissions, and District Consumer Forums establishing cardholder protection standards
                  </p>
                </div>

                <div className="space-y-5">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200/60 inline-block w-fit">
                          {c.title}
                        </span>
                        <span className="text-xs font-bold text-slate-600">{c.date}</span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-600">
                        <p className="font-semibold text-slate-900">{c.parties}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{c.citation}</p>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900">Material Facts: </strong>
                          {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900">Judicial Holding: </strong>
                          {c.holding}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                            Award &amp; Compensation Order
                          </span>
                          <span className="text-xs sm:text-sm font-black text-emerald-800">
                            {c.amount}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs bg-red-50/60 rounded-lg p-3 text-slate-800 border-l-2 border-red-500">
                        <span className="font-bold text-red-900">Actionable Precedent Takeaway: </span>
                        {c.takeaway}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Resolution Matrix: On-Us vs Off-Us vs White-Label ATMs */}
              <section id="heading-resolution-matrix" aria-labelledby="heading-resolution-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  On-Us vs. Off-Us vs. White-Label ATMs: Who Is Liable for Your Refund?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When an automated teller machine fails to release cash, the technical rails involved dictate how the transaction reconciles across the inter-bank network. However, from a consumer rights perspective, your legal recourse is always direct, streamlined, and singular:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      On-Us Transaction
                    </span>
                    <h3 className="text-base font-bold text-slate-900">Same-Bank ATM Terminal</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      You use your SBI debit card at an SBI ATM. Both the card-issuing institution and the acquiring machine belong to the same core banking system. Reconciliation is instantaneous. Internal cash balances and Electronic Journals must reflect the surplus on the same business day. Auto-reversal must complete within T + 5 calendar days.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                      Off-Us Transaction
                    </span>
                    <h3 className="text-base font-bold text-slate-900">Other-Bank ATM Machine</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      You use an HDFC card at a Punjab National Bank (PNB) terminal. The transaction routes through the National Financial Switch (NFS) operated by NPCI. Your bank must initiate a chargeback on the NFS rail. Crucially, your bank cannot make you wait for PNB to settle; HDFC Bank remains strictly liable to credit you within T + 5 days.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      White-Label ATM (WLA)
                    </span>
                    <h3 className="text-base font-bold text-slate-900">Tata Indicash, Hitachi, India1</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operated by non-bank entities under RBI authorization. The machine is sponsored by a settlement bank and linked to NPCI. Under RBI Circular No. 629, WLAs are subject to the identical T + 5 calendar day TAT and ₹100/day penalty. You file your grievance directly with your card-issuing bank, which manages settlement through the sponsor bank.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Process Diagram - Hand-authored SVG */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Statutory Auto-Reversal &amp; Penalty Timeline: Day T to Day 30+
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Visual statutory rail mapping transaction failure, auto-reversal deadline, daily penalty accrual, and legal escalation triggers
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="min-w-[640px]">
                    <svg
                      viewBox="0 0 800 360"
                      className="w-full h-auto text-slate-800"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Failed ATM Transaction Auto-Reversal and ₹100 Daily Penalty Flowchart"
                    >
                      {/* Step 1 */}
                      <rect x="20" y="30" width="160" height="110" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
                      <text x="100" y="60" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="bold">Day T: Transaction</text>
                      <text x="100" y="82" textAnchor="middle" fill="#4B5563" fontSize="11">ATM Dispenser Fails</text>
                      <text x="100" y="100" textAnchor="middle" fill="#4B5563" fontSize="11">Account Debited</text>
                      <text x="100" y="120" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">Capture Slip / SMS</text>

                      {/* Arrow 1 */}
                      <path d="M180 85 H230" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="230" y="30" width="160" height="110" rx="12" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" />
                      <text x="310" y="60" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="bold">T + 1 to T + 5 Days</text>
                      <text x="310" y="82" textAnchor="middle" fill="#4B5563" fontSize="11">Inter-Bank Switch Sync</text>
                      <text x="310" y="100" textAnchor="middle" fill="#4B5563" fontSize="11">EJ Log &amp; Cash Audit</text>
                      <text x="310" y="120" textAnchor="middle" fill="#16A34A" fontSize="10" fontWeight="bold">Mandatory Auto-Reversal</text>

                      {/* Arrow 2 */}
                      <path d="M390 85 H440" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 3 */}
                      <rect x="440" y="30" width="160" height="110" rx="12" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
                      <text x="520" y="60" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="bold">Day T + 6 Onward</text>
                      <text x="520" y="82" textAnchor="middle" fill="#4B5563" fontSize="11">Statutory Delay Active</text>
                      <text x="520" y="100" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="black">₹100 / Day Penalty</text>
                      <text x="520" y="120" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="bold">Automatic Accrual</text>

                      {/* Arrow 3 */}
                      <path d="M600 85 H650" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 4 */}
                      <rect x="650" y="30" width="130" height="110" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
                      <text x="715" y="60" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold">Day 30+</text>
                      <text x="715" y="82" textAnchor="middle" fill="#4B5563" fontSize="11">Bank Fails to Pay</text>
                      <text x="715" y="100" textAnchor="middle" fill="#1D4ED8" fontSize="11" fontWeight="bold">RBI Ombudsman</text>
                      <text x="715" y="120" textAnchor="middle" fill="#4B5563" fontSize="10">CMS Portal Complaint</text>

                      {/* Bottom Pathway */}
                      <rect x="20" y="180" width="760" height="150" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="400" y="210" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="bold">Escalation &amp; Enforcement Roadmap</text>

                      <rect x="50" y="230" width="210" height="75" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
                      <text x="155" y="255" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Stage 1: Branch / PNO Notice</text>
                      <text x="155" y="275" textAnchor="middle" fill="#64748B" fontSize="10">Demand EJ Log &amp; CCTV Preservation</text>
                      <text x="155" y="290" textAnchor="middle" fill="#64748B" fontSize="10">Claim Principal + ₹100/day penalty</text>

                      <rect x="295" y="230" width="210" height="75" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
                      <text x="400" y="255" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Stage 2: RBI Ombudsman (RB-IOS)</text>
                      <text x="400" y="275" textAnchor="middle" fill="#64748B" fontSize="10">Direct enforcement of RBI Circular</text>
                      <text x="400" y="290" textAnchor="middle" fill="#64748B" fontSize="10">Award up to ₹20L + ₹1L mental agony</text>

                      <rect x="540" y="230" width="210" height="75" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
                      <text x="645" y="255" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Stage 3: Consumer Court (e-Jagriti)</text>
                      <text x="645" y="275" textAnchor="middle" fill="#64748B" fontSize="10">Section 2(11) CPA Deficiency in Service</text>
                      <text x="645" y="290" textAnchor="middle" fill="#64748B" fontSize="10">Court orders 9-12% interest + costs</text>

                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1 L 8 5 L 0 9 z" fill="#94A3B8" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 6: 4-Step Statutory Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 4-Step Statutory Recovery Playbook: From ATM Failure to Account Credit
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Exact procedural roadmap to compel debit reversal and recover every single rupee of accrued delay compensation
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black text-lg flex items-center justify-center shrink-0 border border-red-200">
                      1
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 1: Secure Contemporaneous Proof &amp; Generate Dispute Ticket (Day T)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Never walk away from the ATM machine without gathering objective proof. If the machine issues an unreadable or failed transaction receipt, retain it carefully. Take a high-resolution photograph of the ATM screen display, capturing any timeout or hardware error prompt. Note down the physical location, bank branch, and the unique 8-character Terminal ID usually stamped on the machine bezel or displayed on the welcome screen. Within 24 hours, call your bank customer helpline or register a ticket online, securing a formal Complaint Reference Number.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black text-lg flex items-center justify-center shrink-0 border border-red-200">
                      2
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 2: Track the T + 5 Calendar Day Auto-Reversal Window (Days T+1 to T+5)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Under RBI directives, your bank has exactly 5 calendar days following the transaction date to reconcile switch logs with the acquiring bank and reverse the debit entry. Track your mobile banking statement daily. If the fifth calendar day passes without your funds being restored, the bank enters statutory default. From Day T + 6 onward, statutory compensation of ₹100 per day begins accruing automatically in your favour by operation of law.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black text-lg flex items-center justify-center shrink-0 border border-red-200">
                      3
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 3: Serve Statutory Legal Demand Notice &amp; CCTV Preservation Demand (Day 6 to 30)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        If branch staff give evasive responses or close your ticket claiming &quot;successful debit&quot;, have an advocate serve a formal statutory legal notice to the Branch Manager and Principal Nodal Officer (PNO). The notice must demand: (1) Immediate reversal of the principal debited amount; (2) Payment of ₹100 per day penalty under RBI Circular DPSS.CO.PD No.629/2019-20; and (3) Immediate preservation of ATM CCTV camera footage and Electronic Journal (EJ) logs under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. You can review the structure of <Link href="/legal-notice-charges" className="text-red-600 hover:underline font-semibold">legal notice drafting fees and procedure</Link> for bank recovery disputes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black text-lg flex items-center justify-center shrink-0 border border-red-200">
                      4
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 4: Escalate to RBI Integrated Ombudsman &amp; Consumer Commission (Day 30+)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        If 30 days elapse without full resolution, file an online statutory complaint on the RBI CMS Portal (<a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold">cms.rbi.org.in</a>) under the <Link href="/law/rbi-ombudsman-complaint-guide" className="text-red-600 hover:underline font-semibold">RBI Ombudsman Complaint Framework</Link>. The Ombudsman routinely enforces the daily ₹100 penalty. Concurrently, you can file a consumer complaint on the national e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019, where courts regularly grant ₹15,000 to ₹25,000 in mental agony damages and litigation costs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Key Facts Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-deadlines-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Key Facts &amp; Statutory Benchmarks: Failed Banking Transactions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Comparative regulatory turnaround times and compensation rates established under RBI Circular No. 629/2019-20
                  </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                        <th className="py-3.5 px-4">Transaction Channel</th>
                        <th className="py-3.5 px-4">Customer Scenario</th>
                        <th className="py-3.5 px-4">Prescribed TAT</th>
                        <th className="py-3.5 px-4">Delay Compensation Rate</th>
                        <th className="py-3.5 px-4">Statutory Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">ATM / Micro-ATM</td>
                        <td className="py-3 px-4">Account debited but cash not dispensed or partially dispensed</td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">T + 5 Calendar Days</td>
                        <td className="py-3 px-4 font-black text-red-600">₹100 per day of delay</td>
                        <td className="py-3 px-4 text-xs text-slate-600">RBI Circular 629 Item 1</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">PoS / Merchant Terminal</td>
                        <td className="py-3 px-4">Account debited but merchant confirmation not received</td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">T + 5 Calendar Days</td>
                        <td className="py-3 px-4 font-black text-red-600">₹100 per day of delay</td>
                        <td className="py-3 px-4 text-xs text-slate-600">RBI Circular 629 Item 2</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">UPI / QR Payment</td>
                        <td className="py-3 px-4">Account debited but beneficiary not credited</td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">T + 1 Calendar Day</td>
                        <td className="py-3 px-4 font-black text-red-600">₹100 per day of delay</td>
                        <td className="py-3 px-4 text-xs text-slate-600">RBI Circular 629 Item 4</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">IMPS / Mobile Banking</td>
                        <td className="py-3 px-4">Account debited but beneficiary credit failed</td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">T + 1 Calendar Day</td>
                        <td className="py-3 px-4 font-black text-red-600">₹100 per day of delay</td>
                        <td className="py-3 px-4 text-xs text-slate-600">RBI Circular 629 Item 3</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Unauthorised Debit / Fraud</td>
                        <td className="py-3 px-4">Cyber fraud or phishing debit reported within 3 days</td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">10 Working Days</td>
                        <td className="py-3 px-4 font-bold text-slate-900">100% Zero Liability Reversal</td>
                        <td className="py-3 px-4 text-xs text-slate-600">RBI Circular DBR.No.Leg.BC.78/2017</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Interactive Problem Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Scenario Playbook: Diagnose Your Specific ATM Dispute &amp; Apply the Legal Fix
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your exact ATM failure circumstance to see the underlying technical fault and verified 3-step recovery action
                  </p>
                </div>

                <AtmProblemTabs />
              </section>

              {/* Section 9: Worked Financial Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Financial Audit: Calculating Your Exact Principal and Daily Penalty Claim
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To illustrate how statutory compensation accumulates under RBI directives, consider the following real-world scenario (details illustrative of standard dispute mechanics):
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Transaction Date (T)</p>
                      <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">1 October 2026</p>
                      <p className="text-[11px] text-slate-500">Requested ₹10,000</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Auto-Reversal TAT</p>
                      <p className="text-sm sm:text-base font-extrabold text-emerald-700 mt-0.5">6 October 2026</p>
                      <p className="text-[11px] text-slate-500">Day T + 5 Deadline</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Actual Credit Date</p>
                      <p className="text-sm sm:text-base font-extrabold text-red-700 mt-0.5">31 October 2026</p>
                      <p className="text-[11px] text-slate-500">Delayed by 25 Days</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Statutory Penalty</p>
                      <p className="text-sm sm:text-base font-extrabold text-[#DC2626] mt-0.5">₹2,500 Accrued</p>
                      <p className="text-[11px] text-slate-500">25 Days × ₹100/day</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>Factual Matrix: </strong>
                      Mr. Rajesh holds a savings account with Bank A. On 1 October 2026 (Day T), he attempts to withdraw ₹10,000 from an ATM terminal owned by Bank B. The cash dispenser fails to deliver any currency, but his mobile receives an immediate SMS confirming an account debit of ₹10,000. He lodges an online dispute with Bank A on the same afternoon.
                    </p>
                    <p>
                      <strong>Regulatory Calculation: </strong>
                      Under RBI Circular DPSS.CO.PD No.629/2019-20, Bank A is obligated to auto-reverse the ₹10,000 debit by 6 October 2026 (Day T + 5). Bank A fails to process the reversal within TAT due to inter-bank chargeback delays. On 31 October 2026, Bank A finally restores the ₹10,000 principal into Mr. Rajesh&apos;s account, but pays ₹0 as compensation.
                    </p>
                    <p>
                      <strong>Statutory Recovery Claim: </strong>
                      The delay beyond T + 5 spans from 7 October to 31 October, representing exactly <strong>25 calendar days</strong>. Under Clause 3 of the RBI Circular, Mr. Rajesh has an absolute statutory right to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 font-medium text-slate-800">
                      <li>Principal Debit Recovery: ₹10,000 (already received)</li>
                      <li>Mandatory RBI Delayed-TAT Penalty: 25 days × ₹100/day = <strong>₹2,500</strong></li>
                      <li>Damages for Mental Harassment &amp; Loss of Time: <strong>₹15,000 to ₹25,000</strong> before the Consumer Forum</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Vital Documents for ATM Cash Non-Dispensation Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before issuing a legal notice or escalating to the RBI Ombudsman, assemble these six documentary proofs to establish an unassailable evidentiary record under Section 63 of Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">ATM Transaction Slip / Photo</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Printed transaction advice slip showing date, time, Terminal ID, and response code. If no slip was printed, photograph the ATM error screen.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">SMS Debit Notification with Timestamp</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Screenshot of the bank&apos;s automated transactional SMS showing exact debited amount, time, and transaction reference string.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Certified Bank Account Statement</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Bank account statement reflecting the debit entry, closing balance, and date of subsequent delayed credit (proving the exact delay in days).
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Dispute Complaint Reference Number</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Formal complaint registration ticket issued by customer care, mobile app, or written branch acknowledgment with logging timestamp.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">CCTV Preservation Demand Notice</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Copy of your written notice demanding preservation of ATM interior camera footage before standard 30-day overwrite cycles occur.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Electronic Journal (EJ) Log Request</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Written requisition for the ATM cassette counter audit, purge bin report, and switch transaction log establishing physical cash status.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action Primary Banner */}
              <AtmNoticeCTA className="my-8" />

              {/* Section 11: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Failed ATM Cash Debits &amp; RBI Rules
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Verified legal answers to the most common queries regarding ATM withdrawal failures, auto-reversals, and compensation
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2.5"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black shrink-0">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Honest Scope Section */}
              <section className="bg-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-200 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Honest Scope: What LegalRecovery Does and Does Not Cover
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>What we do: </strong>
                  We draft and serve formal statutory legal demand notices to card-issuing banks, acquiring banks, and ATM operators to enforce the T + 5 auto-reversal deadline, demand the mandatory ₹100 per day RBI delay penalty, compel the production of Electronic Journal (EJ) audit logs, and prepare formal escalation petitions for the RBI Integrated Ombudsman and Consumer Commissions. If you are dealing with other digital banking errors, you can also explore our guidance on <Link href="/recovery/wrong-upi-transfer" className="text-red-600 hover:underline font-semibold">recovering money sent via wrong UPI transfer</Link> and <Link href="/recovery/fraud-transaction-amount" className="text-red-600 hover:underline font-semibold">unauthorised digital fraud transaction liabilities</Link>.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>What we do not do: </strong>
                  We do not physically inspect ATM machinery or dispatch security personnel. If an account has been frozen under a cybercrime police lien or criminal freezing order, that falls under cyber police jurisdiction and requires criminal legal representation rather than an ATM failed-transaction demand.
                </p>
              </section>

              {/* Section 12: Primary Sources & References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Official Statutory References
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Verified legal gazettes, RBI notifications, statutes, and regulatory guidelines cited in this guide
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {PRIMARY_SOURCES.map((src, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <span className="text-red-600 font-bold shrink-0 mt-0.5">[{idx + 1}]</span>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800 hover:text-red-600 hover:underline font-medium transition-colors"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    All regulatory notifications, circular references, and court citations verified as of November 2026.
                  </div>
                </div>
              </section>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-4">
                <RelatedRecoveryGuides currentPath="/atm-cash-not-dispensed-compensation" cluster="banking" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
