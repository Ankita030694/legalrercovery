import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CashCreditTableOfContents from "./CashCreditTableOfContents";
import CashCreditScenarioTabs from "./CashCreditScenarioTabs";
import CashCreditCTA from "./CashCreditCTA";

export const revalidate = 86400;

const PAGE_URL = "/cash-credit-overdraft-stock-statement-default-recall-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const EXACT_H1 =
  "Cash Credit (CC) & Overdraft Recall Strategy: Handling Drawing-Power Shortfalls & Hypothecated Stock Diversion";
const META_TITLE = "CC / Overdraft Loan Recall Notice: Stock & DP Default Guide";
const META_DESCRIPTION =
  "SME borrower stopped stock statements or diverted hypothecated stock? RBI Out-of-Order NPA triggers, CC recall notices, stock audits & BNS s.316 action.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(EXACT_H1),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
    title:
      "RBI Master Circular — Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) Pertaining to Advances (Para 2.2 'Out of Order' & 180-Day Stock Statement Rule)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12642",
  },
  {
    title:
      "RBI Master Directions on Fraud Risk Management in Commercial Banks (including Regional Rural Banks) and All India Financial Institutions (2024)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12702",
  },
  {
    title:
      "RBI Circular — Opening of Current Accounts by Banks: Need for Discipline (Restrictions on Non-Lending Banks for CC/OD Borrowers)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11945",
  },
  {
    title:
      "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 (Sections 2(1)(n), 13(2), 13(4)(d) & 26D)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title:
      "The Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 Criminal Breach of Trust & Section 318 Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Admissibility of Electronic Records) & Bankers' Books Evidence Act, 1891",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Recovery of Debts and Bankruptcy (RDB) Act, 1993 (Section 19(12)–(15) Interim Attachment & Receiver Powers of DRT)",
    url: "https://www.indiacode.nic.in/handle/123456789/1918",
  },
];

const JUDICIAL_PRECEDENTS = [
  {
    title: "Natural Justice Mandate Before Fraud Classification of Diverted CC/OD Accounts",
    parties: "State Bank of India & Ors. v. Rajesh Agarwal & Ors.",
    citation: "(2023) 6 SCC 1, Supreme Court of India",
    date: "27 March 2023",
    facts:
      "Consortium banks classified stressed working-capital accounts as 'Fraud' under RBI Master Directions based on forensic audit findings of fund diversion and stock irregularities without furnishing the audit report or hearing the borrowers.",
    holding:
      "The Supreme Court upheld banks' substantive regulatory authority to declare fraudulent accounts under RBI Directions, but held that principles of audi alteram partem must be read into the process: lenders must serve the forensic/stock audit report via a Show-Cause Notice, consider the borrower's representation, and pass a reasoned order.",
    takeaway:
      "When hypothecated stock vanishes, serve the empanelled stock/forensic audit report alongside a formal Show-Cause Notice before locking Fraud classification, preventing High Court Article 226 stays.",
  },
  {
    title: "Criminal Liability vs Civil Breach When Hypothecated Assets Are Dishonestly Stripped",
    parties: "Indian Oil Corporation v. NEPC India Ltd. & Ors.",
    citation: "(2006) 6 SCC 736, Supreme Court of India",
    date: "20 July 2006",
    facts:
      "A debtor hypothecated movable equipment to secure commercial dues and subsequently removed critical components without creditor consent, prompting criminal complaints for breach of trust and cheating.",
    holding:
      "The Supreme Court clarified that while an ordinary hypothecation leaves possession with the debtor and does not automatically make every default criminal, dishonestly removing or disposing of hypothecated property held under an express trust/entrustment clause—or inducing credit via fraudulent representations—attracts criminal prosecution alongside civil recovery.",
    takeaway:
      "Bank counsel invoking BNS Section 316 and Section 318 must specifically plead the Deed of Hypothecation trust-entrustment clause and attach fabricated stock statements proving dishonest inducement or siphoning.",
  },
  {
    title: "Constitutional Backing for SARFAESI Enforcement Over Hypothecated Movables & Book Debts",
    parties: "Mardia Chemicals Ltd. & Ors. v. Union of India & Ors.",
    citation: "(2004) 4 SCC 311, Supreme Court of India",
    date: "08 April 2004",
    facts:
      "Defaulting industrial borrowers challenged secured creditors' statutory power under Section 13 of the SARFAESI Act to enforce security interests without prior civil court adjudication.",
    holding:
      "The Supreme Court upheld Section 13 enforcement over both mortgaged immovables and hypothecated movables/receivables, while mandating fair consideration of borrower objections (codified as Section 13(3A) 15-day reasoned reply).",
    takeaway:
      "Once a CC/OD account crosses NPA classification and the 60-day Section 13(2) demand expires, banks hold statutory power under Section 13(4)(d) to demand direct payment from the borrower's trade debtors.",
  },
  {
    title: "Unimpeded Enforcement Sequence for Secured Creditors Post-Section 13(2) Expiry",
    parties: "Standard Chartered Bank v. V. Noble Kumar & Ors.",
    citation: "(2013) 9 SCC 620, Supreme Court of India",
    date: "22 August 2013",
    facts:
      "Secured creditors faced procedural resistance from borrowers attempting to stall possession and enforcement measures before actual deprivation of secured assets.",
    holding:
      "The Supreme Court affirmed that borrowers cannot invoke Section 17 DRT remedies prematurely prior to actual Section 13(4) measures, reinforcing the secured creditor's structured statutory sequence to seize collateral and invoke Section 14 assistance.",
    takeaway:
      "Keep CC recall notices, NPA date computation, CERSAI filings, and Section 13(2)/(4) steps strictly documented so borrowers cannot obtain ex-parte tactical stays.",
  },
];

const FAQS = [
  {
    question:
      "When does a Cash Credit (CC) or Overdraft (OD) account become 'Out of Order' and NPA under RBI IRACP rules?",
    answer:
      "Under Para 2.2 of RBI's Master Circular on IRACP norms, a CC/OD account is classified as 'Out of Order' if: (a) the outstanding balance remains continuously in excess of the sanctioned limit or Drawing Power (DP) for 90 days; (b) there are no credits continuously for 90 days as on the balance sheet date, or credits during the 90-day period are not enough to cover the interest debited during that period; or (c) regular/ad-hoc credit limits are not reviewed or renewed within 180 days from the due date. Once 'Out of Order' persists for 90 days, the account turns Non-Performing Asset (NPA).",
  },
  {
    question:
      "How does non-submission of monthly stock statements trigger NPA even if interest is paid?",
    answer:
      "RBI IRACP norms mandate that Drawing Power (DP) in working-capital limits must be computed from current stock statements not older than 3 months (90 days). If a borrower fails to submit fresh stock statements beyond 3 months, the outstanding balance against stale DP is treated as irregular; if this irregularity continues for another 90 days (i.e., 180 days from the last valid stock statement date), the CC account must be classified as NPA regardless of whether monthly interest debits were serviced.",
  },
  {
    question:
      "Can a bank issue a Cash Credit recall notice before the account completes 90 days of NPA?",
    answer:
      "Yes. A contractual Loan Recall-cum-Guarantee Invocation Notice does not require waiting for Day 90 NPA classification. Standard Sanction Letters and Deeds of Hypothecation designate non-submission of stock statements, diversion of sales proceeds to non-consortium current accounts, unauthorized disposal of hypothecated inventory, or Drawing Power deficits as immediate Events of Default—empowering the bank to freeze operations ('Credit-Only' mode), cancel undrawn limits, and recall the entire facility immediately.",
  },
  {
    question:
      "How can a bank legally collect hypothecated book debts directly from the borrower's customers?",
    answer:
      "Two statutory routes apply. First, immediately upon facility recall, the bank can invoke the Irrevocable Power of Attorney inside its CERSAI-registered Deed of Hypothecation to notify major corporate buyers of its first charge over receivables. Second, after NPA classification and expiry of the 60-day SARFAESI Section 13(2) demand period, the Authorized Officer can serve a binding statutory notice under Section 13(4)(d) directing the borrower's trade debtors to remit invoiced amounts directly to the bank; such payment legally discharges the buyer's liability to the borrower.",
  },
  {
    question:
      "What criminal sections apply when an SME borrower siphons or empties hypothecated godown stock?",
    answer:
      "Where an unannounced stock audit confirms that hypothecated inventory held in trust under the Deed of Hypothecation has been dishonestly disposed of without routing sale proceeds into the CC account, banks can initiate criminal proceedings under Bharatiya Nyaya Sanhita (BNS), 2023 Section 316 (Criminal Breach of Trust, replacing IPC s.405/406/409). If the borrower submitted fabricated stock statements, bogus debtor lists, or inflated CA certificates to draw excess Drawing Power, Section 318 (Cheating, replacing IPC s.415/420) also applies.",
  },
  {
    question:
      "Must the bank follow any mandatory procedure before declaring a stock-diversion account as 'Fraud'?",
    answer:
      "Yes. Under the Supreme Court's binding judgment in SBI v. Rajesh Agarwal (2023) and RBI's 2024 Master Directions on Fraud Risk Management, banks must adhere to audi alteram partem before classifying an account as Fraud. The bank must commission a Stock or Forensic Audit, issue a Show-Cause Notice enclosing the audit findings with clear particulars of stock/fund diversion, grant a reasonable window (typically 21 days per RBI guidelines) for written representation, and pass a reasoned speaking order.",
  },
  {
    question:
      "What happens if the bank's hypothecation charge over stock and book debts is not registered on CERSAI?",
    answer:
      "Under Section 26D of the SARFAESI Act, 2002, a secured creditor cannot exercise statutory enforcement rights under Chapter III (including Section 13(4)(d) book-debt garnishee notices or Section 13(4)(a) seizure of hypothecated movables) unless the security interest has been duly registered with CERSAI (Central Registry). For corporate borrowers, registration of Form CHG-1 with the Registrar of Companies (RoC) under Companies Act Section 77 is equally essential to preserve priority during IBC insolvency.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T15:25:00+05:30",
  dateModified: "2026-11-19T15:25:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
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
    name: "Cash Credit & Overdraft Loan Recall Strategy for Indian Banks",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Banks Execute a Cash Credit & Overdraft Recall for Stock Diversion and DP Shortfall",
  description:
    "Step-by-step institutional SOP for Indian banks handling missing stock statements, Drawing Power deficits, non-consortium sales routing, and hypothecated stock siphoning.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Detect Early Warning Signals (EWS) & Recompute Drawing Power",
      text: "Compare GSTR-1 outward supplies against 90-day CC credit summations, verify stock statement aging against the 90/180-day RBI IRACP cap, and recompute true Drawing Power after deducting unpaid trade creditors and >90-day obsolete receivables.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Conduct Unannounced Physical Stock Audit & Lock CBS Debit Freeze",
      text: "Depute an empanelled CA/Stock Auditor to prepare a GPS-tagged godown panchnama and activate a 'Credit-Only' / Drawing-Power freeze in CBS once shortfall breaches sanction covenants.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch Composite CC/OD Loan Recall & Guarantee Invocation Notice",
      text: "Serve an Advocate-signed Facility Recall-cum-Guarantee Invocation Notice via Email, WhatsApp, and Speed Post RPAD demanding full repayment within 7 to 15 days and citing exclusive routing breaches.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trigger Book-Debt Garnishee, SARFAESI s.13(2) & DRT Interim Attachment",
      text: "Verify CERSAI s.26D and RoC CHG-1 filings, issue Section 13(2) on collateral security, serve Section 13(4)(d) direct payment demands on major trade debtors, and move DRT s.19(12) to freeze non-consortium current accounts.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Initiate RBI Fraud Show-Cause (Rajesh Agarwal Compliant) & BNS s.316/s.318",
      text: "Where physical stock has vanished, issue a reasoned Show-Cause Notice enclosing the stock/forensic audit report prior to Fraud classification and file EOW criminal complaints under BNS Sections 316 and 318.",
    },
  ],
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
      name: "Banks Loan Recovery",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CC & Overdraft Recall Strategy",
      item: CANONICAL_URL,
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

export default function CashCreditOverdraftRecallPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository; advocate attribution follows institutional standard.
  const breadcrumbItems = [
    { label: "Banks Loan Recovery", href: "/industries/banks-loan-recovery" },
    { label: "CC & Overdraft Recall Strategy", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-01 &middot; Commercial &amp; Cooperative Banks</span>
              <span className="text-red-500">&bull;</span>
              <span>RBI IRACP &middot; SARFAESI &middot; BNS s.316/s.318</span>
              <span className="text-red-500">&bull;</span>
              <span>SME Working Capital SOP</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link in first 250 words */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (SME Credit Monitoring &amp; Bank Legal)
              </span>
              <p>
                When an SME borrower halts monthly stock statements, operates below Drawing Power (DP), or diverts sales into non-consortium current accounts, banks must not wait for Day 90 NPA status. Under RBI IRACP &lsquo;Out of Order&rsquo; norms (90-day excess/interest shortfall and 180-day stale stock statement cap), lenders inside our{" "}
                <Link
                  href="/industries/banks-loan-recovery"
                  className="text-red-300 underline decoration-red-400/70 hover:text-white font-bold"
                >
                  Indian Banks NPA Legal Recovery Hub
                </Link>{" "}
                can freeze operations, issue an immediate CC/OD Recall-cum-Guarantee Notice, serve SARFAESI s.13(4)(d) book-debt garnishees, and invoke BNS s.316/s.318 for siphoned stock.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">90 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  RBI &lsquo;Out of Order&rsquo; DP / Credit Shortfall NPA Trigger
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">180 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Hard Ceiling for Stale Stock Statements &amp; Limit Renewal
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">s.13(4)(d)</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Direct Statutory Garnishee to Borrower&apos;s Trade Debtors
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">BNS 316/318</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Criminal Breach &amp; Cheating for Vanished Hypothecated Stock
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <CashCreditTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
              <section
                id="heading-dp-crisis"
                aria-labelledby="heading-dp-crisis-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      01
                    </span>
                    <h2
                      id="heading-dp-crisis-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Working-Capital CC &amp; OD Accounts Bleed Before Day 90
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    The Structural Blind Spot in Revolving SME Facilities vs Fixed-EMI Term Loans
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Unlike fixed-installment term loans where a missed EMI immediately flashes SMA-0 on Day 1, revolving Cash Credit (CC) and Overdraft (OD) facilities allow distressed SME borrowers to camouflage insolvency for months. A borrower experiencing liquidity collapse routinely keeps monthly interest debits marginally serviced through circular RTGS transfers or ad-hoc unsecured borrowings while quietly liquidating hypothecated raw materials, finished goods, and trade receivables.
                  </p>
                  <p>
                    By the time the branch waits for a conventional 90-day interest overdue trigger and initiates a{" "}
                    <Link
                      href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      SARFAESI Section 13(2) demand notice
                    </Link>
                    , the primary working-capital security—godown inventory and collectible book debts—has already been stripped. Sales proceeds have been routed into undisclosed current accounts at non-consortium banks, leaving the lending bank with an empty factory shed and an under-collateralized immovable mortgage that takes 12 to 24 months to monetize.
                  </p>
                  <p>
                    Effective working-capital credit monitoring therefore shifts legal intervention upstream—from post-NPA litigation to pre-NPA Drawing Power (DP) enforcement. Treating missed stock statements, GST-to-CBS turnover mismatches, and Drawing Power deficits as immediate contractual Events of Default allows Credit Monitoring Heads and Bank Legal Counsel to lock the facility, verify physical stock, alert trade buyers, and issue an enforceable Facility Recall-cum-Guarantee Invocation Notice before primary security evaporates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 bg-red-50/70 rounded-xl border border-red-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Early Red Flag #1
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block font-bold">
                      Stale Stock Statements
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Missing or copy-pasted monthly stock &amp; creditor statements past the 10th of each month signal inventory depletion.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      Early Red Flag #2
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block font-bold">
                      GST vs CBS Mismatch
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      High GSTR-1 outward sales alongside flat CC credit summations prove non-consortium current-account sales diversion.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Early Red Flag #3
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block font-bold">
                      Inward Cheque / LC Returns
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Frequent limit overdrawals, devolvement of inland Letters of Credit, or &gt;90-day aged debtors eroding eligible DP.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Statutory Matrix Table */}
              <section
                id="heading-rbi-iracp"
                aria-labelledby="heading-rbi-iracp-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      02
                    </span>
                    <h2
                      id="heading-rbi-iracp-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      RBI IRACP &lsquo;Out of Order&rsquo; &amp; 180-Day Stock Statement Rules
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Controlling Regulatory Triggers for CC/OD Asset Classification, DP Freeze &amp; Legal Recall
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Under RBI&apos;s Master Circular on Income Recognition, Asset Classification and Provisioning (IRACP), a Cash Credit or Overdraft facility does not require an unpaid term installment to become Non-Performing. Credit officers must track four distinct statutory triggers simultaneously inside Core Banking Systems (CBS) and cite the exact sub-clause in every pre-NPA cure notice or Loan Recall demand.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">RBI / Statutory Trigger</th>
                        <th className="p-3.5 border-b border-slate-800 text-red-300">Exact Regulatory Threshold</th>
                        <th className="p-3.5 border-b border-slate-800">NPA Classification Effect</th>
                        <th className="p-3.5 border-b border-slate-800">Mandatory Bank Legal Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Continuous Excess Over Sanctioned Limit / DP
                        </td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">
                          90 consecutive days above Limit or computed DP
                        </td>
                        <td className="p-3.5">
                          Immediate &lsquo;Out of Order&rsquo; &rarr; Sub-Standard NPA on Day 90 (daily EOD check)
                        </td>
                        <td className="p-3.5">
                          Day 30 DP Cure Notice &rarr; Day 60 CBS Debit Freeze &rarr; Day 91 Facility Recall + SARFAESI s.13(2)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Zero Credits or Interest-Shortfall Credits
                        </td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">
                          90 days with no credits, or credits &lt; interest debited during the 90-day window
                        </td>
                        <td className="p-3.5">
                          &lsquo;Out of Order&rsquo; NPA even if balance stays numerically below sanctioned ceiling
                        </td>
                        <td className="p-3.5">
                          Pull GSTR-1 sales data to detect diverted current accounts; issue Exclusive Routing Breach Recall
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Stale / Unsubmitted Stock Statements
                        </td>
                        <td className="p-3.5 font-semibold text-amber-700">
                          Stock statement &gt; 3 months old = Irregular; persisting another 90 days (180 days total)
                        </td>
                        <td className="p-3.5">
                          Mandatory NPA on Day 180 from last valid stock statement date even if interest is paid
                        </td>
                        <td className="p-3.5">
                          Day 45 Covenant Breach Notice &rarr; Unannounced Stock Audit &rarr; Zero out DP in CBS at Day 90
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Non-Renewal / Non-Review of CC/OD Limit
                        </td>
                        <td className="p-3.5 font-semibold text-amber-700">
                          Regular / ad-hoc limit not reviewed or renewed within 180 days from due date
                        </td>
                        <td className="p-3.5">
                          Technical NPA classification across all borrower facilities (borrower-wise IRACP rule)
                        </td>
                        <td className="p-3.5">
                          Serve 30-day Renewal Documentation Warning citing automatic recall upon 180-day expiry
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Non-Consortium Current Account Opening
                        </td>
                        <td className="p-3.5 font-semibold text-slate-900">
                          RBI Current Account Discipline (Exposure &ge; &#8377;5 Cr / &#8377;50 Cr Escrow mandates)
                        </td>
                        <td className="p-3.5">
                          Early Warning Signal (EWS) for cash siphoning &amp; Red-Flagged Account (RFA) review
                        </td>
                        <td className="p-3.5">
                          Serve Cease-and-Desist on third-party bank + DRT s.19(12) account attachment petition
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Visual Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                aria-labelledby="heading-decision-tree-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      03
                    </span>
                    <h2
                      id="heading-decision-tree-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      CC/OD Recall Decision Tree: Stock Audit to Book-Debt Freeze
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Operational Escalation Rails Based on Physical Stock Audit Findings &amp; Ticket Size
                  </p>
                </div>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block bg-slate-950 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                  <svg
                    viewBox="0 0 860 320"
                    width={860}
                    height={320}
                    role="img"
                    aria-label="Cash Credit and Overdraft Recall Decision Tree from Stock Statement Default to SARFAESI and BNS Action"
                    className="w-full h-auto"
                  >
                    <defs>
                      <marker
                        id="cc-arrow"
                        viewBox="0 0 10 10"
                        refX="9"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
                      </marker>
                      <marker
                        id="cc-arrow-red"
                        viewBox="0 0 10 10"
                        refX="9"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#F87171" />
                      </marker>
                    </defs>

                    {/* Stage 1: Trigger */}
                    <rect x="15" y="115" width="175" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="102" y="140" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="700">STAGE 1 · DAY 30–45</text>
                    <text x="102" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Stock Default / EWS</text>
                    <text x="102" y="178" textAnchor="middle" fill="#CBD5E1" fontSize="10">No Stock Stmt / GST Gap</text>
                    <text x="102" y="193" textAnchor="middle" fill="#CBD5E1" fontSize="10">DP Shortfall &gt; 15%</text>

                    <line x1="190" y1="160" x2="235" y2="160" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#cc-arrow)" />

                    {/* Stage 2: Audit & Freeze */}
                    <rect x="238" y="105" width="185" height="110" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="330" y="128" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="700">STAGE 2 · DAY 45–60</text>
                    <text x="330" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Audit + CBS Freeze</text>
                    <text x="330" y="166" textAnchor="middle" fill="#CBD5E1" fontSize="10">1. Unannounced Stock Audit</text>
                    <text x="330" y="182" textAnchor="middle" fill="#CBD5E1" fontSize="10">2. Set CBS &lsquo;Credit-Only&rsquo;</text>
                    <text x="330" y="198" textAnchor="middle" fill="#CBD5E1" fontSize="10">3. 7-Day Recall + Guarantor</text>

                    {/* Branch Lines */}
                    <path d="M 423 135 L 470 60 L 495 60" fill="none" stroke="#34D399" strokeWidth="2" markerEnd="url(#cc-arrow)" />
                    <path d="M 423 160 L 495 160" fill="none" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#cc-arrow)" />
                    <path d="M 423 185 L 470 260 L 495 260" fill="none" stroke="#F87171" strokeWidth="2" markerEnd="url(#cc-arrow-red)" />

                    {/* Track A: Stock Intact / Receivables Live */}
                    <rect x="498" y="18" width="345" height="82" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="515" y="39" fill="#6EE7B7" fontSize="10" fontWeight="700">TRACK A · STOCK INTACT OR SOLVENT TRADE DEBTORS</text>
                    <text x="515" y="58" fill="#FFFFFF" fontSize="12" fontWeight="800">SARFAESI s.13(2) + s.13(4)(d) Book-Debt Garnishee</text>
                    <text x="515" y="76" fill="#D1FAE5" fontSize="10">Direct buyer payment notices + Collateral Rule 8 / s.14 possession</text>
                    <text x="515" y="90" fill="#A7F3D0" fontSize="9.5">Mandatory pre-check: CERSAI s.26D &amp; RoC Form CHG-1 active</text>

                    {/* Track B: Sales Diverted / >=20L or <20L */}
                    <rect x="498" y="118" width="345" height="84" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="515" y="139" fill="#7DD3FC" fontSize="10" fontWeight="700">TRACK B · NON-CONSORTIUM ROUTING / UNSECURED GAP</text>
                    <text x="515" y="158" fill="#FFFFFF" fontSize="12" fontWeight="800">DRT OA s.19(12) (&ge;&#8377;20L) or Order 37 / s.138 (&lt;&#8377;20L)</text>
                    <text x="515" y="176" fill="#E2E8F0" fontSize="10">Attach third-party current accounts + Appoint Receiver over stock</text>
                    <text x="515" y="190" fill="#BAE6FD" fontSize="9.5">Invoke Personal / Corporate Guarantors concurrently</text>

                    {/* Track C: Vanished Stock / Fraud */}
                    <rect x="498" y="218" width="345" height="84" rx="12" fill="#450A0A" stroke="#DC2626" strokeWidth="1.8" />
                    <text x="515" y="239" fill="#FCA5A5" fontSize="10" fontWeight="700">TRACK C · EMPTY GODOWN / FABRICATED STATEMENTS</text>
                    <text x="515" y="258" fill="#FFFFFF" fontSize="12" fontWeight="800">RBI RFA Show-Cause + BNS s.316 &amp; s.318 EOW FIR</text>
                    <text x="515" y="276" fill="#FEE2E2" fontSize="10">Serve Forensic Audit (Rajesh Agarwal rule) &rarr; Fraud Order + EOW</text>
                    <text x="515" y="290" fill="#FECACA" fontSize="9.5">Parallel collateral SARFAESI s.13(2) &amp; IBC Part III Guarantor action</text>
                  </svg>
                </div>

                {/* Mobile Stacked Flow Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400">Stage 1 · Day 30–45</span>
                    <p className="font-bold text-sm mt-0.5">Stock Default &amp; EWS Detection</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Missing stock statements, GST vs CBS sales diversion, or DP shortfall &gt;15% triggers immediate legal review.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-[10px] font-bold uppercase text-amber-800">Stage 2 · Day 45–60</span>
                    <p className="font-bold text-sm text-slate-900 mt-0.5">Unannounced Stock Audit &amp; CBS Debit Freeze</p>
                    <p className="text-xs text-slate-700 mt-1">
                      Empanelled CA verifies godown inventory; bank activates &lsquo;Credit-Only&rsquo; CBS flag and issues 7-day Recall-cum-Guarantee Notice.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[10px] font-bold uppercase text-emerald-800">Track A · Solvent Buyers / Intact Stock</span>
                    <p className="font-bold text-sm text-slate-900 mt-0.5">SARFAESI s.13(2) + s.13(4)(d) Book-Debt Garnishee</p>
                    <p className="text-xs text-slate-700 mt-1">
                      Confirm CERSAI s.26D charge and issue direct payment notices to Tier-1 trade debtors alongside collateral possession.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <span className="text-[10px] font-bold uppercase text-[#DC2626]">Track B &amp; C · Diverted Cash or Vanished Stock</span>
                    <p className="font-bold text-sm text-slate-900 mt-0.5">DRT s.19(12) Attachment + BNS s.316/s.318 &amp; RBI RFA</p>
                    <p className="text-xs text-slate-700 mt-1">
                      Freeze secret current accounts via DRT/Civil Court, serve Rajesh Agarwal Show-Cause Notice, and prosecute stock siphoning under BNS s.316/318.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                aria-labelledby="heading-scenario-tabs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      04
                    </span>
                    <h2
                      id="heading-scenario-tabs-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      4 Working-Capital Default &amp; Stock Diversion Playbooks
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Interactive Tactical Matrix for Credit Monitoring Officers &amp; Stressed Asset Legal Counsel
                  </p>
                </div>

                <CashCreditScenarioTabs />
              </section>

              {/* Section 5: Book-Debt Garnishee & Non-Consortium Routing */}
              <section
                id="heading-book-debts"
                aria-labelledby="heading-book-debts-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      05
                    </span>
                    <h2
                      id="heading-book-debts-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Book-Debt Garnishee Notices &amp; Non-Consortium Routing Blocks
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Intercepting Trade Receivables Before Borrowers Funnel Collections Outside the Bank
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In manufacturing, wholesale trading, and EPC SME accounts, book debts frequently represent 45% to 70% of eligible Drawing Power. Yet most branches treat book debts as paper security that cannot be recovered once a borrower turns hostile. In reality, Indian statutory law gives secured lenders a direct cash-interception mechanism against the borrower&apos;s customers—provided the bank acts while invoices remain unpaid.
                  </p>
                  <p>
                    <strong>1. Pre-NPA Assignment &amp; PoA Notice to Top Buyers:</strong> Standard bank Deeds of Hypothecation contain an Irrevocable Power of Attorney authorizing the bank to demand and collect hypothecated receivables directly upon an Event of Default. The moment a CC Recall Notice is issued, Bank Legal Counsel should serve formal Notices of Hypothecation Charge on the top 10 to 25 corporate buyers listed in the borrower&apos;s last aged-receivables statement, attaching the CERSAI Registration Certificate and warning that paying any non-consortium account will not extinguish the bank&apos;s prior statutory charge.
                  </p>
                  <p>
                    <strong>2. Statutory SARFAESI Section 13(4)(d) Garnishee Demand:</strong> Once the account is classified NPA and the 60-day Section 13(2) demand window expires without full discharge, Section 13(4)(d) of the SARFAESI Act empowers the Authorized Officer to issue a binding written notice to any person who owes money to the borrower (trade debtors, PSU buyers, or contract principals), directing them to remit the payable amount directly to the bank. Crucially, Section 13(5) grants full statutory discharge to any trade debtor who honours the bank&apos;s Section 13(4)(d) notice—eliminating corporate buyers&apos; fear of double liability.
                  </p>
                  <p>
                    <strong>3. Blocking Secret Current Accounts at Third-Party Banks:</strong> Where GST GSTR-1 filings confirm active billing despite dead CBS credits, serve a regulatory intimation on the third-party bank citing RBI&apos;s Current Account Discipline Circular (prohibiting non-lending banks from maintaining current accounts for CC/OD borrowers above prescribed exposure tiers) and simultaneously move an urgent Interim Application under Section 19(12) of the RDB Act before the{" "}
                    <Link
                      href="/e-drt-original-application-filing-guide-for-banks"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      e-DRT Original Application bench
                    </Link>{" "}
                    (for claims &ge; &#8377;20 Lakh) or Order XXXVIII Rule 5 CPC (for sub-&#8377;20 Lakh exposures) to freeze those diverted balances.
                  </p>
                </div>
              </section>

              {/* Section 6: Worked Financial Ledger */}
              <section
                id="heading-worked-ledger"
                aria-labelledby="heading-worked-ledger-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      06
                    </span>
                    <h2
                      id="heading-worked-ledger-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Ledger: &#8377;1.80 Cr CC Drawing-Power Shortfall &amp; Recall
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Illustrative SME Auto-Component Manufacturer Account Showing Real DP Collapse vs Book Declaration
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-700">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                        Sanctioned Cash Credit Limit: &#8377;1,80,00,000 (25% Stock Margin &middot; 40% Book-Debt Margin)
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        CBS Ledger Balance Drawn: &#8377;1,78,40,000 | Interest Rate: 11.25% p.a. (EBLR + 2.75%)
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-950 text-red-300 border border-red-800">
                      Audit DP Deficit: &#8377;1,01,90,000
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                          <th className="py-2.5 pr-4">Working-Capital Component</th>
                          <th className="py-2.5 pr-4">Borrower&apos;s Stale Statement (Day 105)</th>
                          <th className="py-2.5 pr-4">Physical Stock Audit Verification</th>
                          <th className="py-2.5">Eligible DP After Margin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="py-2.5 pr-4 font-semibold text-white">Paid Stock (Gross Stock &minus; Unpaid Creditors)</td>
                          <td className="py-2.5 pr-4 text-slate-300">&#8377;1,60,00,000</td>
                          <td className="py-2.5 pr-4 text-red-400 font-bold">&#8377;58,00,000 (&#8377;1.02 Cr missing)</td>
                          <td className="py-2.5 text-emerald-400 font-bold">&#8377;43,50,000 (75%)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 font-semibold text-white">Eligible Book Debts (&le; 90 Days Aging)</td>
                          <td className="py-2.5 pr-4 text-slate-300">&#8377;1,05,00,000</td>
                          <td className="py-2.5 pr-4 text-amber-300 font-bold">&#8377;55,00,000 (&#8377;50L &gt;120d / disputed)</td>
                          <td className="py-2.5 text-emerald-400 font-bold">&#8377;33,00,000 (60%)</td>
                        </tr>
                        <tr className="bg-slate-800/70">
                          <td className="py-3 pr-4 font-extrabold text-white">Net Computed Drawing Power (DP)</td>
                          <td className="py-3 pr-4 text-slate-300 font-bold">&#8377;1,83,00,000 (Capped at &#8377;1.80 Cr)</td>
                          <td className="py-3 pr-4 text-red-300 font-extrabold">True Security Value: &#8377;1,13,00,000</td>
                          <td className="py-3 text-amber-400 font-extrabold">&#8377;76,50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-red-950/60 border border-red-800/70 rounded-xl p-3.5">
                      <p className="text-[10px] uppercase tracking-wider text-red-300 font-bold">Immediate Overdrawn Deficit</p>
                      <p className="text-lg font-black text-white mt-0.5">&#8377;1,01,90,000</p>
                      <p className="text-[11px] text-red-200 mt-0.5">Balance &#8377;1.784 Cr &minus; Revised DP &#8377;76.5L</p>
                    </div>
                    <div className="bg-emerald-950/60 border border-emerald-800/70 rounded-xl p-3.5">
                      <p className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">Recoverable via s.13(4)(d)</p>
                      <p className="text-lg font-black text-white mt-0.5">&#8377;55,00,000</p>
                      <p className="text-[11px] text-emerald-200 mt-0.5">Direct Garnishee to 4 Tier-1 OEM Buyers</p>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-3.5">
                      <p className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">Monthly Interest Bleed</p>
                      <p className="text-lg font-black text-white mt-0.5">&#8377;1,67,250 / mo</p>
                      <p className="text-[11px] text-slate-300 mt-0.5">Plus non-capitalized penal charges per RBI</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  <strong>Credit Monitoring Takeaway:</strong> Acting at Day 105 instead of waiting for Day 180 saves &#8377;55 Lakh in live OEM receivables via direct buyer notices, prevents further withdrawal of &#8377;1.60 Lakh in remaining headroom, and establishes hard documentary proof of &#8377;1.02 Crore in unaccounted stock for BNS Section 316 and RBI Fraud Show-Cause proceedings.
                </div>
              </section>

              {/* Section 7: Stock Inspection, CERSAI & BSA 2023 s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      07
                    </span>
                    <h2
                      id="heading-evidence-checklist-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Hypothecated Stock Inspection, CERSAI &amp; BSA s.63 Checklist
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Evidentiary Hygiene Required Before Issuing CC Recall, SARFAESI s.13(2) or EOW Complaints
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <strong className="text-sm font-bold text-slate-900 block">
                      1. Charge Registration Verification (CERSAI &amp; RoC)
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download live CERSAI Asset ID covering &lsquo;Hypothecation of Stocks &amp; Book Debts&rsquo; (mandatory under SARFAESI s.26D) and MCA Form CHG-1 / Certificate of Registration of Charge for Pvt Ltd / LLP borrowers under Companies Act s.77.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <strong className="text-sm font-bold text-slate-900 block">
                      2. Signed Stock Statements &amp; DP Computation Sheets
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Compile the last 6–12 monthly Stock &amp; Receivables Statements bearing borrower seal/signature, CBS Drawing Power calculation sheets, and formal reminder emails evidencing consecutive months of non-submission.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <strong className="text-sm font-bold text-slate-900 block">
                      3. GPS-Tagged Physical Stock Audit Panchnama
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ensure the empanelled Stock Auditor records geo-tagged photographs, factory gate entry timestamps, stock-register mismatches, and witness signatures—proving exact physical deficit on the inspection date.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <strong className="text-sm font-bold text-slate-900 block">
                      4. BSA 2023 s.63 &amp; Bankers&apos; Books s.2A Certificates
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach dual statutory certificates covering CBS ledger statements, penal-charge non-capitalization schedules, GSTR-1 comparison downloads, and Email + WhatsApp + Speed Post RPAD delivery receipts for the Recall Notice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: BNS s.316/s.318 & RBI Fraud Red-Flagging */}
              <section
                id="heading-criminal-fraud"
                aria-labelledby="heading-criminal-fraud-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      08
                    </span>
                    <h2
                      id="heading-criminal-fraud-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      BNS s.316/s.318 Criminal Action &amp; RBI Fraud Red-Flagging
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Converting Deliberate Stock Siphoning Into High-Leverage Criminal &amp; Regulatory Accountability
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When an SME promoter empties a hypothecated warehouse or submits fabricated debtor schedules to keep drawing funds, civil recovery alone rewards delay. Indian criminal law under the Bharatiya Nyaya Sanhita (BNS), 2023 provides two sharp creditor remedies when properly pleaded alongside the Deed of Hypothecation:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>BNS Section 316 (Criminal Breach of Trust — replacing IPC ss.405/406/409):</strong> Applies where the Deed of Hypothecation explicitly stipulates that the borrower holds hypothecated inventory and realized sale proceeds in fiduciary trust for the bank, and the borrower dishonestly sells or removes the stock without routing proceeds into the CC account.
                    </li>
                    <li>
                      <strong>BNS Section 318 (Cheating — replacing IPC ss.415/420):</strong> Applies where the borrower dishonestly induces the bank to maintain or enhance Drawing Power by submitting forged/inflated stock statements, fictitious buyer invoices, or bogus CA certificates.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Mandatory Safeguard (RBI 2024 Fraud Directions &amp; SBI v. Rajesh Agarwal):</strong> Never notify CRILC/RBI of a final &lsquo;Fraud&rsquo; classification based solely on an internal branch memo. First tag the account as a Red-Flagged Account (RFA) upon EWS triggers, commission an external Forensic/Stock Audit, serve a detailed Show-Cause Notice enclosing the audit report with a minimum 21-day representation window, and pass a reasoned Board/Committee speaking order. Skipping audi alteram partem invites instant High Court writ quashing.
                </div>
              </section>

              {/* Section 9: Judicial Precedents */}
              <section
                id="heading-precedents"
                aria-labelledby="heading-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      09
                    </span>
                    <h2
                      id="heading-precedents-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Verified Judicial Precedents on Hypothecation &amp; CC Recall
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Supreme Court Rulings Governing Fraud Classification, Criminal Breach &amp; SARFAESI Enforcement
                  </p>
                </div>

                <div className="space-y-4">
                  {JUDICIAL_PRECEDENTS.map((item, idx) => (
                    <article
                      key={idx}
                      className="relative bg-slate-50 rounded-xl border border-slate-200 p-5 pl-6 space-y-2.5 overflow-hidden"
                    >
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600">
                        <strong className="text-slate-900">Case:</strong> {item.parties}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Holding:</strong> {item.holding}
                      </p>
                      <p className="text-xs text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 font-medium">
                        <strong>Creditor Playbook Rule:</strong> {item.takeaway}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: Dual-Track B2B CTA */}
              <section
                id="heading-dual-cta"
                aria-labelledby="heading-dual-cta-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      10
                    </span>
                    <h2
                      id="heading-dual-cta-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Issue a CC Recall Notice or Onboard Zonal Credit Monitoring
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Pilot One Live Working-Capital Recall Today or Upload 10–10,000+ SMA/NPA Accounts via CSV
                  </p>
                </div>

                <CashCreditCTA />
              </section>

              {/* Section 11: Mandatory IND-01 Hub, Calculator, Template & Sibling Cross-Links */}
              <section
                id="heading-bank-network"
                aria-labelledby="heading-bank-network-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      11
                    </span>
                    <h2
                      id="heading-bank-network-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      IND-01 Bank Recovery Hub, Calculators &amp; Notice Templates
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 pl-10">
                    Connected Institutional Tools, Drafts &amp; Statutory Playbooks Across Your NPA Pipeline
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/industries/banks-loan-recovery"
                    className="group p-4 rounded-xl bg-slate-900 text-white border border-slate-800 hover:border-[#DC2626] transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Parent Industry Pillar Hub
                    </span>
                    <p className="text-sm font-bold mt-1 group-hover:text-red-300">
                      Pre-Litigation Loan Recall &amp; NPA Recovery Infrastructure for Indian Banks &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="group p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Interactive T1 Calculator
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-emerald-800">
                      Bank Recovery Forum Selector &amp; e-DRT OA Fee Calculator &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="group p-4 rounded-xl bg-red-50 border border-red-200 hover:border-[#DC2626] transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Editable P1 Notice Pack
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#DC2626]">
                      Advocate-Vetted Loan Recall cum Personal/Corporate Guarantee Invocation Notice &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                    className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Sibling Spoke &middot; L1 Statute Guide
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#DC2626]">
                      SARFAESI Section 13(2) &amp; 13(3A) Bank Compliance Checklist &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                    className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Sibling Spoke &middot; Physical Possession
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#DC2626]">
                      SARFAESI Section 14 DM/CMM 9-Point Affidavit &amp; Possession Workflow &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                    className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Sibling Spoke &middot; Sub-&#8377;20L Matrix
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#DC2626]">
                      Bank Loan Recovery Below &#8377;20 Lakh DRT Threshold (5 Legal Routes) &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Core Bank Notice Portal
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#DC2626]">
                      Send a Legal Notice for Banks to Recover Unpaid Loan Dues &rarr;
                    </p>
                  </Link>

                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Zero-Court-Fee Compromise Route
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#DC2626]">
                      Pre-Litigation National Lok Adalat Money Recovery Law &amp; Bulk OTS &rarr;
                    </p>
                  </Link>
                </div>
              </section>

              {/* Section 12: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      12
                    </span>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Frequently Asked Questions: CC/OD Recall &amp; Stock Diversion
                    </h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                    >
                      <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources & Advocate Attribution */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      13
                    </span>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Primary RBI Directions, Bare Acts &amp; Statutory Portals
                    </h2>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                  <div>
                    <p className="font-bold text-slate-900">
                      Legal Attribution: Anuj Anand Malik (Advocate &amp; Founder, AMA Legal Solutions)
                    </p>
                    <p className="mt-0.5">
                      Prepared exclusively from the institutional creditor perspective for Scheduled Commercial Banks, Small Finance Banks &amp; Cooperative Banks. Updated: 19 November 2026.
                    </p>
                  </div>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors whitespace-nowrap"
                  >
                    Institutional Bulk Desk &rarr;
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Outside <main> */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
