import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import DistributorNoticeCTA from "./DistributorNoticeCTA";
import DistributorTableOfContents from "./DistributorTableOfContents";
import DistributorProblemTabs from "./DistributorProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Distributor or Dealer Not Paying Dues? Legal Recovery",
  description:
    "Dealer or distributor sitting on your dues? Ledger confirmations, MSME interest, cheque routes and demand notices for manufacturers.",
  alternates: {
    canonical: `${SITE_URL}/distributor-dealer-dues-recovery`,
  },
  openGraph: {
    title: "Recovering Outstanding Dues From Distributors and Dealers in India",
    description:
      "Legal playbook for manufacturers, super-stockists and wholesalers to recover overdue dealer balances via ledger confirmations, security cheques, MSME ODR and Order 37 suits.",
    url: `${SITE_URL}/distributor-dealer-dues-recovery`,
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
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15, 16 & 18 (45-Day Cap, 3× RBI Bank Rate Compound Interest & ODR Reference)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Negotiable Instruments Act, 1881 — Sections 20, 138, 139, 141 & 143A (Dishonour of Security Cheques, Inchoate Instruments & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Code of Civil Procedure, 1908 — Order XXXVII Rule 1(2) (Summary Suits on Written Contracts, Invoices & Signed Balance Confirmations) & Order XXXVIII Rule 5",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Income-tax Act, 1961 — Section 43B(h) (Disallowance of Unpaid Micro & Small Enterprise Dues Beyond 15/45 Days in Buyer Tax Audit Form 3CD)",
    url: "https://incometaxindia.gov.in/",
  },
  {
    title:
      "Sale of Goods Act, 1930 — Sections 42, 55 & 61 (Deemed Acceptance of Consignments, Suit for Price & Award of Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Limitation Act, 1963 — Article 1, Article 14, Article 113 & Sections 18–19 (Running Dealer Accounts, Written Ledger Acknowledgment & Part-Payment)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 — Section 28 (Entries in Books of Account Kept in Course of Business) & Section 63 (Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const SCENARIO_CARDS = [
  {
    badge: "Scenario 01 • Highest Recovery Speed",
    title: "You Hold a Security Cheque or Post-Dated Cheque (PDC) From the Dealer",
    odds: "High Pre-Trial Settlement Odds (Within 15–45 Days)",
    situation:
      "At dealership onboarding or during credit dispatch, you collected a signed security cheque or PDC from the dealer/stockist. Now the dealer is sitting on overdue invoices and ignoring calls.",
    route:
      "Crystallize the exact net debit balance in your ledger, send a 3-day intimation email/WhatsApp stating you are presenting Security Cheque No. [XXXXXX] for ₹[Amount], deposit the cheque, and if dishonoured, serve a statutory Section 138 NI Act notice within 30 days.",
    statutoryHook: "Sections 20 & 138 NI Act + Sripati Singh v. State of Jharkhand (SC 2021)",
    jumpHref: "#heading-step-playbook",
    jumpLabel: "See Cheque Presentation & Notice Steps →",
  },
  {
    badge: "Scenario 02 • Fast-Track Civil / Summary Route",
    title: "You Have a Signed Ledger Confirmation or Balance Confirmation Letter",
    odds: "Strong Summary Decree Odds Under Order 37 CPC",
    situation:
      "The distributor signed or stamped your annual/quarterly balance confirmation statement, reconciled the running ledger on email/WhatsApp, or issued a written repayment schedule admitting the outstanding balance.",
    route:
      "Serve a 15-day Advocate Demand Notice invoking the written admission of debt. If unpaid, file a Summary Suit under Order XXXVII CPC where the dealer has no automatic right to defend without court leave and deposit of security.",
    statutoryHook: "Order XXXVII Rule 1(2) CPC + Section 18 Limitation Act 1963",
    jumpHref: "#heading-legal-basis",
    jumpLabel: "See Written Admission Law →",
  },
  {
    badge: "Scenario 03 • Statutory 3× RBI Interest + Tax Lever",
    title: "You Are an Udyam-Registered Manufacturer (Micro or Small Enterprise)",
    odds: "High Leverage Before March 31 Tax Audit",
    situation:
      "Your manufacturing unit holds a valid Udyam Registration as a Micro or Small Enterprise (MSE) and supplied goods to a distributor, stockist, or institutional dealer who has delayed payment past 45 days.",
    route:
      "Serve a statutory demand notice computing monthly compound interest at 3× the RBI Bank Rate (16.50% p.a.) under Section 16 MSMED Act and warning the dealer's CA/auditor of 100% expense disallowance under Section 43B(h) of the Income-tax Act, followed by an MSME ODR Portal reference.",
    statutoryHook: "Sections 15–18 MSMED Act 2006 + Section 43B(h) Income-tax Act",
    jumpHref: "#heading-escalation-flow",
    jumpLabel: "See MSME ODR & 43B(h) Rail →",
  },
  {
    badge: "Scenario 04 • Informal / Unwritten Dealership",
    title: "You Have Tax Invoices, E-Way Bills & Transport LR (No Formal Agreement)",
    odds: "Solid Recovery via GST ITC Trail & Legal Notice",
    situation:
      "You supplied goods on credit against WhatsApp or telephonic orders without a stamped dealership contract. However, you have GST Tax Invoices, E-Way Bills, Lorry Receipts (Bilty), and the dealer claimed Input Tax Credit (ITC) in GSTR-2B.",
    route:
      "Under Delhi and Bombay High Court rulings, accepted tax invoices backed by E-Way bill delivery logs and ITC utilization form a binding written contract. Serve a formal Legal Notice itemizing the invoice-wise ledger to lock admission before filing an Order 37 or Commercial Suit.",
    statutoryHook: "Section 42 Sale of Goods Act + Bharat Forge v. Onil Gulati (Del HC)",
    jumpHref: "#heading-dealer-defences",
    jumpLabel: "See Informal Supply Counter-Steps →",
  },
  {
    badge: "Scenario 05 • Countering Post-Sale Excuses",
    title: "Dealer Claims 'Unsold Stock', 'Damaged Goods', or 'ASM Promised Rebate'",
    odds: "Strong When Rebutted With 7-Day Inspection Rule",
    situation:
      "Months after receiving the consignment and selling most of it, the dealer refuses to clear the balance—demanding that your sales team take back slow-moving stock or deducting unapproved 'target schemes' allegedly promised by an ex-salesman.",
    route:
      "Rebut the excuse immediately through an Advocate Legal Notice citing Section 42 of the Sale of Goods Act (deemed acceptance after reasonable inspection window) and Section 92 BSA 2023 (barring oral modifications to written invoice terms).",
    statutoryHook: "Section 42 Sale of Goods Act 1930 + Sections 91–92 BSA 2023",
    jumpHref: "#heading-dealer-defences",
    jumpLabel: "Open Dealer Excuse Counter-Matrix →",
  },
  {
    badge: "Scenario 06 • High-Risk Default / Asset Flight",
    title: "Distributor Shutting Shop, Diverting Stock, or Trading Under New GSTIN",
    odds: "Urgent Action Required (Attachment Before Judgment)",
    situation:
      "Your territory dealer has stopped answering calls, vacated or renamed the godown, or started selling competitor brands under a family member's new proprietorship/partnership firm to dodge your old ledger.",
    route:
      "Verify the PAN 4th character from the GSTIN ('P' for Proprietor, 'F' for Partnership) to fix 100% personal liability on the individual owners. Serve an urgent demand notice at residential addresses and move for attachment of bank accounts and godown stock under Order 38 Rule 5 CPC.",
    statutoryHook: "Section 25 Partnership Act 1932 + Order XXXVIII Rule 5 CPC",
    jumpHref: "#heading-mistakes-avoid",
    jumpLabel: "See Asset-Flight Protection Rules →",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling That Security Cheques Given Under a Commercial Dealership Attract Section 138 NI Act",
    parties: "Sripati Singh (since deceased) Through His Son Gaurav Singh v. State of Jharkhand & Anr.",
    citation: "Criminal Appeal Nos. 1269–1270 of 2021, Supreme Court of India (2021 SCC OnLine SC 1002)",
    date: "Judgment Dated 28 October 2021",
    facts:
      "In a commercial recovery dispute, cheques had been handed over by the debtor as 'security' toward repayment of advanced sums/dues. When the debtor defaulted on the promised payment schedule, the creditor presented the security cheques, which were dishonoured. The accused sought to quash the Section 138 criminal complaint by arguing that a cheque issued merely as 'security' at the inception of a transaction cannot trigger criminal prosecution under Section 138 of the Negotiable Instruments Act.",
    holding:
      "A Division Bench of the Supreme Court decisively rejected the 'security cheque' defence. The Court held that a cheque issued as security pursuant to a financial or commercial contract is not a worthless piece of paper; if the debt or liability matures and remains unpaid on the date the cheque is presented for encashment, Section 138 of the NI Act applies with full force. Unless the debtor cleared the outstanding ledger balance prior to presentation, criminal prosecution is fully maintainable.",
    amount: "Section 138 Prosecution Restored for Full Dishonoured Cheque Value + Statutory Fine up to 2× Cheque Amount",
    takeaway:
      "If your dealership appointment form records a security cheque from the distributor, that cheque becomes a powerful criminal recovery weapon the moment their invoice credit period expires and the ledger remains unpaid.",
  },
  {
    title: "Delhi High Court Precedent on Maintainability of Order 37 Summary Suit Based on Tax Invoices & Ledger Confirmation",
    parties: "M/s Bharat Forge Ltd. v. Onil Gulati",
    citation: "AIR 2005 Delhi 369 / (2005) 121 DLT 357, High Court of Delhi",
    date: "Judgment Dated 19 May 2005",
    facts:
      "The plaintiff manufacturer supplied commercial goods to the defendant dealer against formal tax invoices containing the price, description of goods, and specific payment and interest terms. Upon default, the manufacturer filed a fast-track Summary Suit under Order XXXVII of the Code of Civil Procedure. The dealer sought unconditional leave to defend, arguing that no formal bilateral dealership contract was signed and that an open running account cannot be sued upon under Order 37 CPC.",
    holding:
      "The Delhi High Court held that an invoice which sets out the description of goods, price, and terms of payment, when acted upon and accepted by the buyer on delivery of goods, constitutes a 'written contract' within the contemplation of Order XXXVII Rule 2 of the CPC. The Court ruled that sham and moonshine defences raised for the first time after receiving a legal notice cannot entitle a defaulting dealer to unconditional leave to defend.",
    amount: "Summary Decree for Principal Invoice Dues + Contractual Interest Awarded",
    takeaway:
      "Even if you do not have a 20-page signed dealership agreement, your GST tax invoices containing printed terms, paired with delivery challans/E-Way bills, qualify as a written contract for a fast-track Order 37 Summary Suit.",
  },
  {
    title: "Division Bench Ruling on 3-Year Limitation in Running Non-Mutual Dealer Ledger Accounts",
    parties: "Bharath Skins Corporation v. Taneja Skins Company Pvt. Ltd.",
    citation: "(2011) 186 DLT 290 (DB) / 2011 SCC OnLine Del 5523, High Court of Delhi (Division Bench)",
    date: "Judgment Dated 21 December 2011",
    facts:
      "The supplier supplied leather goods to a buyer over several years on a running credit account where the buyer made periodic on-account part payments rather than bill-to-bill settlements. When the supplier sued for the closing ledger balance, the buyer argued that all invoices older than 3 years were time-barred under Article 14 of the Limitation Act.",
    holding:
      "The Division Bench held that where goods are supplied continuously under a single running, non-mutual account and the dealer makes periodic on-account payments credited against the running balance, Article 14 (which applies to individual independent sales) does not apply. Instead, residuary Article 113 of the Limitation Act governs the account, and the 3-year limitation period begins to run only when the right to sue accrues—namely, when the dealer refuses to pay the demanded balance or the business relationship terminates.",
    amount: "Full Closing Ledger Balance Decreed Along With Pendente Lite & Future Interest",
    takeaway:
      "When your distributor makes on-account part payments into a continuous running ledger, they cannot easily claim that older individual invoices are time-barred—especially when backed by Section 19 part-payment records.",
  },
  {
    title: "Supreme Court Ruling That Statutory MSMED Arbitration & 3× Compound Interest Override Private Dealership Clauses",
    parties: "Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd. (Unit 2) & Anr.",
    citation: "(2023) 6 SCC 401, Supreme Court of India",
    date: "Judgment Dated 31 October 2022",
    facts:
      "Buyers challenged the jurisdiction of the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, arguing that their private supply/dealership agreements contained independent arbitration or forum-selection clauses that barred statutory MSME recovery.",
    holding:
      "The Supreme Court held that Chapter V of the MSMED Act, 2006 (Sections 15 to 23) is a special beneficial statute with an explicit non-obstante clause in Section 18(1) and Section 24. Statutory MSME recovery and mandatory compound interest at 3 times the RBI Bank Rate override any conflicting private dealership contract or unilateral credit extension.",
    amount: "100% Principal Invoice Dues + Mandatory Monthly Compound Interest at 3× RBI Bank Rate Upheld",
    takeaway:
      "If your manufacturing business is registered as a Micro or Small Enterprise (Udyam), no clause in a distributor agreement can waive your right to claim 3× RBI compound interest on overdue dealer invoices.",
  },
];

const FAQS = [
  {
    question: "How can a manufacturer or wholesaler legally recover outstanding dues from a defaulting distributor or dealer?",
    answer:
      "A manufacturer or wholesaler has four primary statutory routes to recover dealer dues in India: (1) Serving a 15-day Advocate Legal Demand Notice backed by a reconciled ledger, GST E-Way bills, and transport LRs; (2) Presenting the dealer's security cheque or PDC and initiating criminal prosecution under Section 138 of the Negotiable Instruments Act within 30 days of dishonour; (3) Filing an online delayed-payment reference on the MSME ODR Portal (if the supplier is a registered Micro or Small Enterprise) to claim principal plus 3× RBI Bank Rate monthly compound interest under Section 16; or (4) Filing a fast-track Summary Suit under Order XXXVII CPC or a Commercial Court claim based on signed balance confirmations.",
  },
  {
    question: "Can we file a Section 138 cheque bounce case using a blank security cheque given by the dealer at appointment?",
    answer:
      "Yes. In Sripati Singh v. State of Jharkhand (2021) and Bir Singh v. Mukesh Kumar (2019), the Supreme Court held that a blank signed security cheque handed over during dealership onboarding is an 'inchoate instrument' under Section 20 of the Negotiable Instruments Act. If the dealer defaults on outstanding invoices and fails to pay despite demand, the manufacturer is legally entitled to fill in the crystallized net ledger balance due on the date of presentation and deposit the cheque. If it bounces, full criminal liability under Section 138 is attracted.",
  },
  {
    question: "What if we supplied goods to a dealer on credit without a signed dealership agreement?",
    answer:
      "A formal stamped dealership contract is not mandatory to recover money in court. Under Section 42 of the Sale of Goods Act, 1930, and settled High Court precedents (such as Bharat Forge Ltd. v. Onil Gulati), your GST Tax Invoices, E-Way Bill Part-A and Part-B logs, signed Transport Bilty (Lorry Receipts), and proof that the dealer availed Input Tax Credit (ITC) in GSTR-2B establish a binding written commercial contract enforceable under Order XXXVII of the CPC.",
  },
  {
    question: "How do we counter a distributor who refuses payment claiming unsold stock, damaged goods, or oral sales schemes?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, once a dealer receives a consignment, retains it beyond the reasonable inspection window (typically 7 to 15 days printed on the tax invoice), and claims GST Input Tax Credit, the goods are deemed unconditionally accepted on a Principal-to-Principal outright sale basis. Furthermore, under Sections 91 and 92 of the Bharatiya Sakshya Adhiniyam, 2023, a dealer cannot use unverified oral promises by a former sales manager (ASM/RSM) to deduct unauthorised rebates without an official GST Credit Note from your finance department.",
  },
  {
    question: "Can a manufacturer claim MSME compound interest and use Section 43B(h) against a defaulting dealer?",
    answer:
      "Yes, provided the manufacturer holds an Udyam Registration as a Micro or Small Enterprise (MSE) prior to the supply of goods. Under Sections 15 and 16 of the MSMED Act, 2006, if the dealer fails to pay within 45 days (or 15 days where there is no written credit term), the dealer is liable to pay monthly compound interest at 3 times the RBI Bank Rate (currently 3 × 5.50% = 16.50% p.a.). Additionally, under Section 43B(h) of the Income-tax Act, 1961, if the dealer's account remains unpaid past March 31, the dealer's statutory auditor must report and disallow the entire purchase expense in Form 3CD, creating an immediate ~30% income-tax liability for the dealer.",
  },
  {
    question: "What is the time limit (limitation period) to recover old running ledger balances from a dealer?",
    answer:
      "For an individual unpaid invoice, Article 14 of the Limitation Act, 1963 prescribes 3 years from the date of delivery (or Article 15 from the expiry of the fixed credit period). However, where you maintain a continuous running, non-mutual account where the dealer makes periodic on-account part payments, Article 113 applies (3 years from when the right to sue accrues upon refusal). Crucially, every written balance confirmation or WhatsApp/email admission under Section 18, and every NEFT/RTGS/UPI/cheque part-payment under Section 19, restarts a fresh 3-year limitation clock.",
  },
  {
    question: "Dealer ya distributor udhar maal ka paisa nahi de raha toh legal notice kaise bheje?",
    answer:
      "Agar aapka distributor, stockist ya dealer maal lene ke baad payment rok kar baitha hai, toh sabse pehle uska running ledger, GST invoices, E-Way bills aur transport bilty (LR) ek jagah jama karein. Agar aapke paas dealer ka security cheque hai toh 3 din ka written intimation dekar cheque bank mein lagayein, ya seedhe LegalRecovery.in ke madhyam se Advocate Legal Demand Notice (Registered Speed Post, Email aur WhatsApp par) bhejein jismein 15 din ke andar principal amount aur 18% commercial interest (ya MSME 3× compound interest) ki mang ki jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Recovering Outstanding Dues From Distributors and Dealers",
  description:
    "Dealer or distributor sitting on your dues? Ledger confirmations, MSME interest, cheque routes and demand notices for manufacturers.",
  datePublished: "2026-11-04T11:20:00+05:30",
  dateModified: "2026-11-04T11:20:00+05:30",
  mainEntityOfPage: `${SITE_URL}/distributor-dealer-dues-recovery`,
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
  about: [
    {
      "@type": "Thing",
      name: "Distributor and Dealer Debt Recovery",
    },
    {
      "@type": "Legislation",
      name: "Micro, Small and Medium Enterprises Development Act, 2006",
    },
    {
      "@type": "Legislation",
      name: "Negotiable Instruments Act, 1881",
    },
  ],
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
      name: "Vendor & Invoice Recoveries",
      item: `${SITE_URL}/services/vendor-and-invoice-recoveries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSME & B2B Recovery",
      item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Distributor & Dealer Dues Recovery",
      item: `${SITE_URL}/distributor-dealer-dues-recovery`,
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

export default function DistributorDealerDuesRecoveryPage() {
  const breadcrumbItems = [
    { label: "Vendor & Invoice Recoveries", href: "/services/vendor-and-invoice-recoveries" },
    { label: "MSME & B2B Recovery", href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice" },
    { label: "Distributor & Dealer Dues Recovery", href: "/distributor-dealer-dues-recovery" },
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
        {/* Hero Section strictly matching IRCTC theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>B2B Channel Recovery Guide</span>
              <span className="text-red-500">•</span>
              <span>MSMED Sec 16, NI Act Sec 138 &amp; Order 37 CPC</span>
              <span className="text-red-500">•</span>
              <span>Updated <time dateTime="2026-11-04">Nov 2026</time></span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Recovering Outstanding Dues From Distributors and Dealers
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Quick Answer (Manufacturer &amp; Wholesaler Recovery Rights)
              </p>
              <p>
                Manufacturers and wholesalers can recover unpaid distributor or dealer dues through four statutory tracks: presenting onboarding security cheques under Section 138 of the NI Act, filing an MSME ODR claim for 3× RBI Bank Rate compound interest (Section 16 MSMED Act) with Section 43B(h) tax disallowance leverage, or instituting an Order XXXVII CPC summary suit within 3 years of the last ledger acknowledgment—starting with a 15-day Advocate Demand Notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15–45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 15 MSMED Credit Cap &amp; Sec 43B(h) Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3× Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Monthly Compound Interest (Sec 16 MSMED)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">30 + 15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 138 Security Cheque Notice &amp; Cure</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation From Last Ledger Admission / Part-Pay</p>
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
            <DistributorTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1 (Archetype G2 Hero Element): Scenario Cards Grid */}
              <section id="heading-scenario-cards" aria-labelledby="heading-scenario-cards-title" className="scroll-mt-28 space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Archetype G2 • Channel-Partner Recovery Scenarios
                  </span>
                  <h2
                    id="heading-scenario-cards-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Dealer or Distributor Default Scenario Matches Your Ledger?
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In Indian B2B distribution—across FMCG, electricals, auto spares, building materials, agro-chemicals, textiles, and pharma—dealers rarely default overnight. First, rotation slows down; next, on-account payments shrink; finally, the stockist stops picking up your sales team&apos;s calls or shifts to a rival brand while sitting on your credit inventory. Your exact legal recovery route depends on the documentary hooks you hold today:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {SCENARIO_CARDS.map((card, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626]">
                            {card.badge}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                            {card.odds}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <strong className="text-slate-900">Your Situation:</strong> {card.situation}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                          <strong className="text-slate-900">Recommended Legal Action:</strong> {card.route}
                        </p>
                      </div>

                      <div className="pl-2 pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-semibold text-slate-500">
                          {card.statutoryHook}
                        </span>
                        <a
                          href={card.jumpHref}
                          className="text-xs font-extrabold text-[#DC2626] hover:text-red-800 shrink-0"
                        >
                          {card.jumpLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 2 (Archetype G2): Legal Basis With Quoted Statutes & Reference Table */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Legal Provisions Govern Distributor and Dealer Dues Recovery in India?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike retail consumer disputes, manufacturer-to-distributor transactions are commercial Principal-to-Principal sales governed by a powerful combination of mercantile statutes. When a dealer withholds payment for delivered stock, Indian law equips the supplier with both civil attachment remedies and quasi-criminal cheque prosecution:
                </p>

                {/* Quoted Statutes Blockquotes (Archetype G2 requirement) */}
                <div className="space-y-4">
                  <blockquote
                    cite="https://www.indiacode.nic.in/handle/123456789/2390"
                    className="bg-white border-l-4 border-[#404447] rounded-r-2xl p-4 sm:p-6 shadow-sm space-y-2"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      Section 42 &amp; Section 55, Sale of Goods Act, 1930 — Deemed Acceptance &amp; Suit for Price
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800 italic leading-relaxed">
                      &ldquo;The buyer is deemed to have accepted the goods when he intimates to the seller that he has accepted them, or when the goods have been delivered to him and he does any act in relation to them which is inconsistent with the ownership of the seller, or when, after the lapse of a reasonable time, he retains the goods without intimating to the seller that he has rejected them.&rdquo;
                    </p>
                    <footer className="text-xs text-slate-600 font-medium pt-1">
                      <strong>Why it matters for manufacturers:</strong> Once a distributor receives your consignment via E-Way bill, claims GST Input Tax Credit (ITC) in GSTR-2B, or resells part of the lot without raising a written defect objection within your invoice&apos;s 7–15 day inspection window, the law bars them from raising an &ldquo;unsold or defective stock&rdquo; excuse months later.
                    </footer>
                  </blockquote>

                  <blockquote
                    cite="https://www.indiacode.nic.in/handle/123456789/2013"
                    className="bg-white border-l-4 border-[#DC2626] rounded-r-2xl p-4 sm:p-6 shadow-sm space-y-2"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-600">
                      Section 15 &amp; Section 16, MSMED Act, 2006 (as amended by the MSMED Amendment Act, 2026) — 45-Day Ceiling &amp; 3× Compound Interest
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800 italic leading-relaxed">
                      &ldquo;Where any buyer fails to make payment of the amount to the supplier, as required under section 15, the buyer shall, notwithstanding anything contained in any agreement between the buyer and the supplier or in any law for the time being in force, be liable to pay compound interest with monthly rests to the supplier on that amount from the appointed day… at three times of the bank rate notified by the Reserve Bank.&rdquo;
                    </p>
                    <footer className="text-xs text-slate-600 font-medium pt-1">
                      <strong>Why it matters for MSE manufacturers:</strong> Even if your distributor forced a 90-day credit cycle or signed no credit agreement at all, statutory interest at 3× RBI Bank Rate (currently 16.50% p.a. compounded monthly) starts running from Day 46 (or Day 16 if no written credit period exists). See our guide on the <Link href="/law/msmed-amendment-act-2026" className="text-blue-700 underline font-semibold">MSMED Amendment Act 2026</Link>.
                    </footer>
                  </blockquote>
                </div>

                {/* Key Facts & Legal Routes Table */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mt-4">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Legal Routes for Distributor and Dealer Dues Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Route / Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Primary Legal Basis</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Required Proof / Trigger</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Relief / Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec 55 &amp; 61 Sale of Goods Act + Sec 43B(h) IT Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Reconciled ledger, GST invoices, E-Way bills, LRs</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15-Day Payment Window</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Principal + 18% invoice interest / Sec 43B(h) audit alert</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Security Cheque / PDC Criminal Case
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 20, 138, 141 &amp; 143A NI Act, 1881</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Dishonoured cheque + Bank Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Notice in 30d; Suit in 1m after 15d cure</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to 2 yrs jail / 2× cheque fine + 20% interim relief</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          MSME ODR Portal / MSEFC Reference
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 15–18 MSMED Act 2006 / 2026 Amendment</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Udyam Registration (Micro/Small) + Delivery proof</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Triggered on Day 46 (or Day 16)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Principal + 3× RBI Bank Rate monthly compound interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Summary Suit (Fast-Track Civil)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII Rule 1(2) CPC, 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Signed balance confirmation, invoices, or bounced cheque</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 Years from Last Admission / Part-Pay</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Defendant must enter appearance in 10 days; no automatic trial delay</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Commercial Court Suit (&ge; ₹3 Lakh)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Commercial Courts Act, 2015 (Sec 12A &amp; Order XIII-A)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Running dealer ledger + GST/transport records</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">3 Years (plus Sec 12A mediation time)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Summary judgment without oral evidence + Order 38 attachment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 (Archetype G2): Step-by-Step <ol> Playbook */}
              <section id="heading-step-playbook" aria-labelledby="heading-step-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-step-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 6-Step Legal Playbook to Recover Overdue Balances From a Defaulting Dealer
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a distributor or dealer crosses your credit limit and begins dodging your finance team, informal phone follow-ups by sales executives often weaken your position. Follow this disciplined 6-step legal escalation sequence:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Stop Credit Dispatches &amp; Reconcile the Running Ledger With GST / Transport Proof
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Place an immediate credit hold on the dealer code. Reconcile your Tally/SAP running account statement by matching every unpaid GST tax invoice with its e-Invoice IRN, E-Way Bill Part-A &amp; Part-B delivery logs, and signed Transport Lorry Receipt (Bilty) or delivery challan. Verify that all legitimate target credit notes or scheme rebates already approved by finance have been accounted for so your net principal figure is crystal-clear.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure a Written Balance Confirmation or Limitation-Extending Admission (Section 18/19)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before relations turn hostile, send the ledger statement via official email and WhatsApp asking the dealer to confirm the closing balance for statutory audit purposes, or request a token NEFT/RTGS/UPI part-payment. Under <Link href="/limitation-extended-by-acknowledgment-part-payment" className="text-blue-700 underline font-semibold">Section 18 and Section 19 of the Limitation Act</Link>, even a WhatsApp message from the dealer saying <em>&ldquo;Will clear ₹5 lakhs next month, market is slow&rdquo;</em> or a ₹10,000 part-payment locks in debt admission and restarts the 3-year limitation period.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Crystallize Liability &amp; Present the Dealer&apos;s Security Cheque (If Held)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If you hold a blank or undated security cheque taken at the time of dealership appointment, send a formal written intimation (by email and WhatsApp) notifying the dealer that since ₹[Net Principal] is overdue past the credit period, you are filling and presenting Security Cheque No. [XXXXXX] on [Date] unless RTGS payment is received within 72 hours. Present the cheque within its 3-month validity and preserve the original Bank Return Memo upon dishonour.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Statutory Advocate Legal Demand Notice (With Sec 138 / Sec 16 / Sec 43B(h) Leverage)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate dispatch a formal Legal Demand Notice via Registered Speed Post (RPAD) as well as email and WhatsApp (under Section 63 BSA 2023) to the dealership firm, its proprietor, or all partners/directors at both their business and residential addresses. If a cheque bounced, the notice must be served within 30 days of the return memo demanding payment within 15 days under Section 138 NI Act. If you are an Udyam-registered MSE, attach the <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-blue-700 underline font-semibold">3× RBI Bank Rate compound interest sheet</Link> and put the dealer on notice of <Link href="/law/section-43bh-msme-payment-rule" className="text-blue-700 underline font-semibold">Section 43B(h) income-tax disallowance</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Launch Parallel Statutory Action: Section 138 Prosecution + MSME ODR / Order 37 Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the dealer fails to settle within the 15-day notice window, do not rely on a single slow track. Under Supreme Court law (<Link href="/cheque-bounce-and-civil-suit-together" className="text-blue-700 underline font-semibold">simultaneous Section 138 complaint and civil recovery suit</Link>), you can file a criminal Section 138 complaint (and seek 20% interim compensation under Section 143A) while simultaneously filing an <Link href="/msme-odr-portal-delayed-payment-guide" className="text-blue-700 underline font-semibold">MSME ODR Portal reference</Link> or an <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII Summary Suit</Link> in the court having jurisdiction over your manufacturing/invoicing office.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      6
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce Bank Account Attachment &amp; Oppose Any Unsecured Appeal (75% Pre-Deposit Rule)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the dealer attempts to liquidate godown inventory during litigation, apply for attachment before judgment under Order XXXVIII Rule 5 CPC. Once an MSME ODR arbitral award is passed in your favour, the dealer cannot even challenge the award in court without first depositing <strong>75% of the awarded principal plus compound interest</strong> under Section 19 of the MSMED Act.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 4 (Archetype G2 Mandatory Block): Mistakes to Avoid (<ul> with ✕ styling) */}
              <section id="heading-mistakes-avoid" aria-labelledby="heading-mistakes-avoid-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-mistakes-avoid-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5 Costly Mistakes Manufacturers Make That Ruin Dealer Dues Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Defense lawyers representing defaulting distributors look for specific procedural gaps in a manufacturer&apos;s paperwork to obtain unconditional leave to defend or quash cheque bounce complaints. Avoid these five operational errors:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Filling a Security Cheque for an Amount Higher Than the Reconciled Ledger Balance:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 138 of the NI Act (<em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel</em>, SC 2022), if a dealer made part-payments or earned approved credit notes before you presented the cheque, and you fill or present the cheque for a higher unadjusted figure, the entire Section 138 criminal complaint can fail. Always fill the exact net debit balance verified on the date of presentation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Not Recording Security Cheque Serial Numbers in the Dealership Appointment Form:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When taking 2 or 3 blank signed cheques during dealer onboarding, always mention the cheque numbers and bank name in the Dealership Application Form or a covering letter stating that the manufacturer is authorized to fill and present them against any overdue running balance. This destroys the &ldquo;stolen or misused old cheque&rdquo; defence.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Allowing Field Sales Staff to Send Emails Admitting &ldquo;Stock Return&rdquo; Without Finance Approval:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Defaulting dealers often pressure Area Sales Managers into sending casual WhatsApp messages or emails promising to &ldquo;take back slow-moving stock&rdquo; or grant an off-invoice discount. In court, the dealer uses that message to manufacture a &ldquo;triable dispute&rdquo; and delay summary judgment. Centralize all overdue communications through your credit-control or legal team.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Suing Only the Trade Name Without Naming the Proprietor, Partners, or Directors:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        A proprietorship trade name (e.g., <em>&ldquo;M/s Laxmi Enterprises&rdquo;</em>) is not a separate legal entity; your notice must name the individual proprietor (e.g., <em>&ldquo;Mr. Rajesh Agarwal, Proprietor of M/s Laxmi Enterprises&rdquo;</em>). For partnerships and private limited companies, omitting the active partners or directors under <Link href="/cheque-bounce-case-against-company-directors" className="text-blue-700 underline font-semibold">Section 141 of the NI Act</Link> allows the individuals to escape personal liability.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Issuing a Unilateral GST Credit Note Too Early When the Dealer Has Not Paid:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Some suppliers hastily issue a GST credit note to reduce their tax output when a dealer defaults. Doing so without a settlement agreement allows the dealer to argue in court that you voluntarily waived or reduced the invoice price! Never issue a commercial or GST credit note for bad debts unless structured properly with legal advice.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Resolution Rail Flowchart (IRCTC style) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  B2B Channel Recovery Architecture: From Overdue Dealer Ledger to Bank Realization
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How manufacturers and super-stockists convert an overdue distributor ledger into an enforceable multi-track recovery action:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Credit Hold &amp; Ledger Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Freeze dispatches; compile GST invoices, E-Way bills, LRs &amp; GSTR-2B ITC proof.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Balance Admission / Present PDC</h3>
                    <p className="text-xs text-amber-900 mt-1">Lock Sec 18 balance confirmation or present onboarding Security Cheque.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve Sec 138 NI Act + Sec 16 MSMED (3× RBI) + Sec 43B(h) tax audit warning.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Parallel Statutory Forum Filing</h3>
                    <p className="text-xs text-slate-700 mt-1">Sec 138 Magistrate Court + MSME ODR Portal / Order 37 Summary Suit.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Settlement or Decree Execution</h3>
                    <p className="text-xs text-emerald-900 mt-1">20% interim relief (Sec 143A), 75% MSE pre-deposit, or bank attachment.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Distributor Recovery Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 860 270"
                    width="860"
                    height="270"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[720px]"
                    role="img"
                    aria-label="Distributor and Dealer Dues Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="distGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="distAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="distSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="145" height="95" rx="10" fill="url(#distGrad)" />
                    <text x="82" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="82" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Freeze &amp; Audit</text>
                    <text x="82" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Tax Invoices + E-Way</text>
                    <text x="82" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Transport LR + GSTR-2B</text>

                    <path d="M 155 67 L 182 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="182" y="20" width="145" height="95" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="254" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="254" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Lock Liability</text>
                    <text x="254" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Signed Ledger Confirm</text>
                    <text x="254" y="98" fill="#78350F" fontSize="9" textAnchor="middle">or Present Security PDC</text>

                    <path d="M 327 67 L 354 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="354" y="20" width="150" height="95" rx="10" fill="url(#distAlert)" />
                    <text x="429" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="429" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="429" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="429" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Sec 138 + 43B(h) + MSMED</text>

                    <path d="M 504 67 L 531 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="531" y="20" width="145" height="95" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="603" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="603" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">Parallel Filing</text>
                    <text x="603" y="82" fill="#334155" fontSize="10" textAnchor="middle">Sec 138 NI Act + ODR</text>
                    <text x="603" y="98" fill="#475569" fontSize="9" textAnchor="middle">or Order 37 Summary Suit</text>

                    <path d="M 676 67 L 703 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="703" y="20" width="145" height="95" rx="10" fill="url(#distSucc)" />
                    <text x="775" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="775" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="775" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">RTGS Settlement / Award</text>
                    <text x="775" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Bank &amp; Stock Attachment</text>

                    {/* Bottom Summary Box */}
                    <rect x="10" y="140" width="838" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="164" fill="#0F172A" fontWeight="bold" fontSize="11">THREE FINANCIAL LEVERS THAT COMPEL DEFAULTING DEALERS TO SETTLE BEFORE TRIAL:</text>
                    <text x="25" y="186" fill="#475569" fontSize="10">1. Criminal Warrant &amp; 20% Interim Payout (Sec 138 &amp; 143A NI Act): Bounced security cheque triggers criminal summons and up to 20% interim deposit.</text>
                    <text x="25" y="205" fill="#475569" fontSize="10">2. Buyer Tax Disallowance (Sec 43B(h) Income-Tax Act): Unpaid Micro/Small supplier bills crossing March 31 add 100% of invoice value to dealer&apos;s taxable income.</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">3. Mandatory 3× RBI Bank Rate Compound Interest (Sec 16 MSMED Act): Accrues monthly at 16.50% p.a. and is non-deductible as an expense under Section 23.</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Interactive Dealer Default & Excuse Counter-Matrix (IRCTC Tabs style) */}
              <section id="heading-dealer-defences" aria-labelledby="heading-dealer-defences-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dealer-defences-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Dismantling Common Distributor &amp; Dealer Excuses: Statutory Counter-Strategies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Interactive Guide: Select the Specific Excuse Raised by Your Dealer to View the Legal Rebuttal
                  </p>
                </div>

                <DistributorProblemTabs />
              </section>

              {/* Section 7: Landmark Order Digest (IRCTC style <article> cards) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Precedents: 4 Verifiable Court Rulings on Dealer &amp; Distributor Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; High Court Records
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Commercial Context &amp; Dispute:</strong>
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
                              Legal Relief / Holding Impact
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Applicability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across Commercial &amp; Magistrate Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for manufacturers &amp; suppliers:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Example (IRCTC dark card style) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Switchgear Manufacturer Recovers ₹16,40,000 + ₹2,18,000 Interest From Defaulting Stockist in 19 Days
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative B2B Channel Recovery Scenario
                    </span>
                    <span className="text-xs text-slate-400">Rajkot Manufacturer vs. Kanpur Electrical Distributor</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Commercial Setup:</strong> VoltEdge Switchgears Pvt. Ltd. (an Udyam-registered Small Enterprise in Rajkot, Gujarat) appointed M/s Awadh Electricals &amp; Co. (a partnership firm in Kanpur, UP) as its regional distributor with a 30-day credit period and ₹20,00,000 credit limit. At appointment, VoltEdge collected two signed blank security cheques drawn on the partnership&apos;s bank account, recorded in Clause 9 of the Dealership Application Form.
                    </p>
                    <p>
                      <strong>The Default &amp; Excuse:</strong> Between April and July 2026, VoltEdge supplied 6 consignments of MCBs and distribution boards totaling ₹21,40,000 via GST e-Invoices and E-Way bills. Awadh Electricals paid ₹5,00,000 on-account in August 2026, leaving a net reconciled debit balance of <strong>₹16,40,000</strong>. In September 2026, the distributor onboarded a competing brand and stopped clearing dues, claiming on phone calls that ₹6,00,000 worth of stock was &ldquo;slow-moving&rdquo; and that the former Area Sales Manager had verbally promised an extra 4% turnover rebate.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> VoltEdge froze further dispatches and engaged LegalRecovery.in. First, a 72-hour written intimation was sent by email and WhatsApp notifying both partners of Awadh Electricals that Security Cheque No. 448912 was being filled and presented for the exact reconciled ledger balance of ₹16,40,000. When the cheque returned dishonoured with the memo <em>&ldquo;Payment Stopped by Drawer&rdquo;</em>, an advocate dispatched a combined <strong>Section 138 NI Act + Section 16 MSMED Act + Section 43B(h) Legal Notice</strong> to the firm and both partners at their shop and residential addresses. The notice demanded ₹16,40,000 principal plus ₹2,41,800 accrued 3× RBI compound interest within 15 days, and copied the firm&apos;s tax audit notice regarding Section 43B(h) disallowance.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution (Day 19):</strong>
                      Faced with imminent Section 138 criminal summons in the Rajkot Magistrate Court (where VoltEdge&apos;s bank account was situated under Section 142(2)(a) NI Act) alongside a mandatory MSME ODR reference, the partners of Awadh Electricals contacted VoltEdge&apos;s counsel on Day 12 of the notice window. On Day 19, the distributor remitted <strong>₹18,58,000</strong> (100% principal of ₹16,40,000 + ₹2,18,000 agreed overdue interest) via two RTGS tranches in exchange for a formal No-Dues Certificate and return of the dishonoured cheque.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: B2B Evidence Checklist (IRCTC 6-card grid style) */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Manufacturer &amp; Wholesaler Evidence Checklist: 6 Documents to Assemble Before Sending Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 28 (entries in books of account regularly kept in the course of business) and Section 63 (admissibility of electronic records) of the Bharatiya Sakshya Adhiniyam, 2023, a clean documentary trail prevents the dealer from manufacturing a dispute:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dealership Appointment Form / KYC Dossier:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed dealer application form, GST registration certificate, PAN of firm/proprietor/partners, and security cheque covering letter.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Reconciled Running Ledger &amp; Balance Confirmation:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Complete chronological ledger export (Tally/SAP/Zoho) along with any signed balance confirmation letter or WhatsApp/email admission.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">GST Tax Invoices &amp; E-Way Bill Part-A / Part-B Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Every unpaid tax invoice showing HSN, GSTIN, e-Invoice IRN/QR code, printed payment/interest terms, and active E-Way bills.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Transport Bilty (Lorry Receipt) &amp; Delivery Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Transporter LR / Consignment Note, Gate Pass, or POD bearing the dealer&apos;s godown receiving rubber stamp and signature.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">GSTR-1 Filing &amp; Buyer GSTR-2B ITC Reflection Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof that you reported the B2B invoices in GSTR-1 and paid output tax, demonstrating the dealer availed Input Tax Credit.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dishonoured Security Cheque &amp; Bank Return Memo:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original bounced PDC or security cheque plus the bank&apos;s CTS return memo showing the exact dishonour code and date.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Honest Scope Block (Section 7 requirement) */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do in Dealer &amp; Distributor Disputes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">
                      ✓ What We Do For Manufacturers &amp; Suppliers
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Audit your dealer ledger, invoices, E-Way bills, and security cheque status to choose the highest-leverage statutory route.</li>
                      <li>Draft and serve formal Advocate Legal Demand Notices (under Sec 138 NI Act, Sec 15–16 MSMED Act, Sec 43B(h) IT Act, and Order 37 CPC) via Registered Speed Post, Email, and WhatsApp.</li>
                      <li>Execute multi-dealer bulk legal notice campaigns for brands and super-stockists cleaning up overdue receivables across multiple states.</li>
                      <li>Prepare MSME ODR Portal reference filings, Section 12A pre-institution mediation applications, and Order 37 / Section 138 pleadings.</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 block">
                      ✕ What We Cannot Do (Statutory &amp; Practical Boundaries)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                      <li>We do not engage extralegal field recovery agents or physical intimidation to seize stock from a dealer&apos;s godown without a court order.</li>
                      <li>We cannot revive a claim where the last invoice, part-payment, or written acknowledgment is older than 3 years and no fresh Section 18/19 admission or Section 25(3) Contract Act promise is obtained.</li>
                      <li>We cannot file an MSME ODR claim for supplies delivered <em>before</em> your date of Udyam Registration (per the Supreme Court ruling in <em>Silpi Industries</em>)—those claims must proceed via Order 37 CPC or Section 138 NI Act.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs (IRCTC Accordion style) */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Distributor &amp; Dealer Outstanding Dues Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Practical Legal Answers on Security Cheques, Running Ledgers, MSME Interest &amp; Demand Notices
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

              {/* Section 12: Primary Sources Block (IRCTC style) */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Commercial Laws &amp; Official References
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
                  Statutory verification status: All commercial provisions checked against the MSMED Act 2006 (as amended in August 2026), Negotiable Instruments Act 1881, Sale of Goods Act 1930, Code of Civil Procedure 1908, and Income-tax Act Section 43B(h) as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory B2B Demand Notice to Your Defaulting Distributor or Dealer
                </h2>
                <DistributorNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related B2B, MSME &amp; Cheque Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Delayed Payment: Samadhaan/ODR vs Legal Notice →
                  </Link>
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSMED Amendment Act 2026 for Suppliers →
                  </Link>
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) Buyer Tax Disallowance Lever →
                  </Link>
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME ODR Portal Filing Guide →
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME 3× RBI Interest Calculator →
                  </Link>
                  <Link
                    href="/cheque-bounce-and-civil-suit-together"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 138 Cheque Case &amp; Civil Suit Together →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; B2B Fee Schedule →
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
