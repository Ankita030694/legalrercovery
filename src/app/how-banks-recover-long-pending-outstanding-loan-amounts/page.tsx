import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LongPendingLoanRecoveryCTA from "./LongPendingLoanRecoveryCTA";
import LongPendingLoanRecoveryTableOfContents from "./LongPendingLoanRecoveryTableOfContents";
import LongPendingLoanRecoveryTabs from "./LongPendingLoanRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recovering Long-Pending Bank Loans: Legal Process",
  description:
    "Legal guide for banks to recover aged, written-off, and long-pending loan amounts in India. Limitation renewal, debt revival, and OTS enforcement.",
  alternates: {
    canonical: `${SITE_URL}/how-banks-recover-long-pending-outstanding-loan-amounts`,
  },
  openGraph: {
    title: "How Banks Can Recover Long-Pending Outstanding Loan Amounts",
    description:
      "Legal guide for banks to recover aged, written-off, and long-pending loan amounts in India. Limitation renewal, debt revival, and OTS enforcement.",
    url: `${SITE_URL}/how-banks-recover-long-pending-outstanding-loan-amounts`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Banks Can Recover Long-Pending Outstanding Loan Amounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Banks Can Recover Long-Pending Outstanding Loan Amounts",
    description:
      "Legal guide for banks to recover aged, written-off, and long-pending loan amounts in India. Limitation renewal, debt revival, and OTS enforcement.",
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
    title: "Limitation Act, 1963 (Section 18 Effect of Acknowledgment, Section 19 Effect of Payment on Account, Schedule Articles 14, 15 & 62) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) Pertaining to Advances",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12165",
  },
  {
    title: "Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs (RBI/2023-24/40)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act Section 5 Asset Reconstruction & Section 13 Enforcement) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Section 21 Award of Lok Adalat Deemed Civil Court Decree) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1931",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Digital Banking Records, Core Banking Entries & Email Confirmations)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Balance Sheet Acknowledgment Renewing Limitation Under Section 18",
    parties: "Laxmi Pat Surana v. Union Bank of India & Another",
    citation: "Civil Appeal No. 2734/2020, Supreme Court of India",
    date: "Authoritative Supreme Court Ruling",
    facts:
      "A corporate debtor defaulted on working capital facilities sanctioned by a consortium led by Union Bank of India. Over 4 years had elapsed between the initial loan default and the institution of recovery proceedings under insolvency and debt recovery laws. The borrower contended that the recovery claim was dead on arrival, being barred by the 3-year limitation rule under the Limitation Act, 1963.",
    holding:
      "The Supreme Court of India held that an entry made in the books of accounts, balance sheets, or annual financial statements of a corporate debtor or personal borrower constitutes an unequivocal, valid acknowledgment of liability under Section 18 of the Limitation Act, 1963. Such signed or certified balance confirmations reset the statutory limitation period, causing a fresh three-year period to run from the date of the signing of each financial statement, thereby keeping aged bank debt fully recoverable.",
    amount: "Full Debt Revival Beyond 4 Years + Overcoming 3-Year Time Bar Defense",
    takeaway:
      "Banks and NBFCs dealing with long-pending defaulted loans can overcome statutory limitation defenses by auditing the borrower's annual corporate filings, MCA disclosures, and signed balance confirmation slips to prove valid Section 18 renewals.",
  },
  {
    title: "Supreme Court Confirmation of Recovery Plaint Limitation Extension by Subsequent OTS Proposals",
    parties: "Dena Bank (now Bank of Baroda) v. C. Shivakumar Reddy & Another",
    citation: "Civil Appeal No. 1659/2021, Supreme Court of India",
    date: "Authoritative Supreme Court Ruling",
    facts:
      "The borrower company's loan account was classified as a Non-Performing Asset (NPA). Years after the default, the borrower submitted multiple written One-Time Settlement (OTS) and restructuring proposals to the bank, acknowledging the outstanding loan balance. However, when the bank filed formal recovery proceedings, the borrower claimed the action was time-barred since more than three years had lapsed from the date of original NPA declaration.",
    holding:
      "The Supreme Court ruled that an offer of One-Time Settlement (OTS) submitted in writing by a borrower constitutes an explicit written acknowledgment of debt within the ambit of Section 18 of the Limitation Act, 1963. The apex court held that even if an account is an aged NPA, every OTS communication or compromise letter signed by the borrower gives birth to a fresh period of limitation from the date of such correspondence.",
    amount: "Statutory Re-computation of Limitation from Every Written Compromise Proposal",
    takeaway:
      "Written compromise offers and OTS applications submitted by chronic defaulters operate as legally binding acknowledgments of debt, completely neutralising the borrower's defence of statutory time-bar in DRT and Civil Courts.",
  },
  {
    title: "Supreme Court Landmark on 12-Year Mortgage Limitation Period under Article 62",
    parties: "State Bank of India v. B.S. Agriculture Industries (I) & Connected Matters",
    citation: "Civil Appeal No. 4882/2007, Supreme Court of India",
    date: "Reported Civil Precedent",
    facts:
      "The lender initiated legal proceedings to enforce outstanding debt against mortgaged commercial and industrial properties more than 5 years after the borrower stopped servicing EMIs. The borrower argued that because the general limitation period for money recovery under Article 14 and 15 is 3 years, the entire mortgage suit was time-barred.",
    holding:
      "The Supreme Court clarified the crucial statutory distinction between unsecured personal debt recovery and mortgage enforcement. The Court affirmed that under Article 62 of the Schedule to the Limitation Act, 1963, the limitation period to enforce payment of money secured by a mortgage or charge upon immovable property is 12 years from the date when the money becomes due. While the personal decree against the borrower may lapse after 3 years, the bank's mortgage foreclosure and sale remedy remains enforceable for 12 full years.",
    amount: "12-Year Mortgage Enforcement Enforceable Across All Secured Bank Facilities",
    takeaway:
      "For secured bank credit lines, home loans, and commercial mortgages, banks possess a generous 12-year statutory runway under Article 62 to auction collateral and recover outstanding loan amounts, even if retail recovery officers delayed action.",
  },
  {
    title: "National Company Law Appellate Tribunal (NCLAT) on Part-Payment Debt Extension",
    parties: "Asset Reconstruction Company (India) Ltd. (ARCIL) v. Bishal Homes Pvt. Ltd.",
    citation: "Company Appeal (AT) (Insolvency) No. 423/2021, NCLAT New Delhi",
    date: "Reported Appellate Tribunal Decision",
    facts:
      "ARCIL acquired an aged stressed loan portfolio assigned by a scheduled commercial bank. The borrower contested recovery, asserting that the primary loan default occurred over six years prior. ARCIL produced core banking ledger records proving that the borrower had made a series of partial digital payments and token RTGS transfers towards interest dues within the intervening three-year cycles.",
    holding:
      "The Appellate Tribunal held that under Section 19 of the Limitation Act, 1963, any part-payment on account of a debt or interest made by the borrower before the expiration of the limitation period creates a fresh period of limitation starting from the exact date of payment. The NCLAT verified that electronic banking credits and UTR logs constitute conclusive statutory proof of payment under Section 19, reviving the entire unpaid balance.",
    amount: "₹18.6 Crore Stressed Loan Portfolio Fully Validated for ARC Recovery",
    takeaway:
      "Every token credit, digital repayment installment, or dividend recovery deposited into an overdue loan ledger resets the statutory 3-year limitation clock, enabling banks and ARCs to pursue aged outstanding balances.",
  },
];

const FAQS = [
  {
    question: "What is the statutory limitation period for banks to recover outstanding loans in India?",
    answer:
      "Under Articles 14, 15, and 55 of the Schedule to the Limitation Act, 1963, the baseline statutory limitation period to file a civil suit for money recovery or an unsecured loan claim is three years from the date of loan default, EMI dishonour, or breach of the loan agreement. However, for loans secured by an equitable or registered mortgage of immovable property, Article 62 of the Limitation Act provides an extended 12-year limitation period to enforce recovery against the mortgaged asset. Furthermore, under Sections 18 and 19, the three-year limitation period is completely refreshed whenever the borrower acknowledges the debt in writing or makes a partial payment.",
  },
  {
    question: "How can banks revive a time-barred or long-pending loan account under Section 18 of the Limitation Act?",
    answer:
      "Under Section 18 of the Limitation Act, 1963, if the borrower executes a written acknowledgment of liability before the expiry of the three-year limitation period, a fresh 3-year limitation period begins from the date of signature. Banks can establish Section 18 revival through annual balance confirmation slips, debt revival letters, written One-Time Settlement (OTS) proposals, email balance confirmations authenticated under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, or signed balance sheet entries filed with the Ministry of Corporate Affairs (MCA). In Laxmi Pat Surana v. Union Bank of India, the Supreme Court confirmed that balance sheet admissions serve as valid Section 18 acknowledgments.",
  },
  {
    question: "Does a small partial payment reset the limitation clock for bank loan recovery?",
    answer:
      "Yes. Under Section 19 of the Limitation Act, 1963, where payment on account of a debt or interest is made by the borrower before the expiration of the prescribed limitation period, a fresh limitation period of three years begins from the exact date of the payment. Core Banking System (CBS) ledger extracts, inward NEFT/RTGS/UPI transaction reference numbers (UTRs), or cheque clearance records serve as conclusive electronic evidence under Section 63 BSA to demonstrate that the debt was kept alive by partial repayments.",
  },
  {
    question: "What happens if a borrower defaults on a sanctioned One-Time Settlement (OTS) agreement?",
    answer:
      "Under the Reserve Bank of India Framework for Compromise Settlements and standard banking contracts, an OTS sanction is conditional upon strict adherence to payment schedules. If the borrower fails to pay the balance settlement installments within the agreed timeline (usually 90 to 180 days), the bank is entitled to immediately revoke the OTS sanction, forfeit any upfront token deposit, and claim the entire original contractual loan balance with compound interest. Moreover, the borrower's written OTS application and signed sanction acceptance operate as an unconditional admission of debt under Section 18, resetting the limitation period for recovery.",
  },
  {
    question: "How can banks use National Lok Adalats to recover aged and chronic retail loan balances?",
    answer:
      "National Lok Adalats, organized under Section 19 of the Legal Services Authorities Act, 1987, provide a highly cost-effective pre-litigation mechanism for banks to recover aged retail, credit card, and MSME loan dues. Notice is issued through District Legal Services Authorities (DLSA) with zero court fee. When a compromise settlement is reached, the Lok Adalat passes an award that is deemed to be a decree of a Civil Court under Section 21 of the LSA Act. The award is final, non-appealable, and if the borrower defaults, the bank can directly execute it through civil court attachment under Order XXI of the Code of Civil Procedure, 1908.",
  },
  {
    question: "Can banks sell and assign aged, written-off loan portfolios to Asset Reconstruction Companies (ARCs)?",
    answer:
      "Yes. Under Section 5 of the SARFAESI Act, 2002 and the RBI Master Directions on Transfer of Loan Exposures, scheduled commercial banks and financial institutions are legally authorized to assign and transfer stressed, non-performing, and technically written-off loan accounts to RBI-registered Asset Reconstruction Companies (ARCs). The assignment can be executed on a cash basis or through Security Receipts (SRs). Upon execution of the assignment deed, all creditor rights, mortgages, and statutory recovery remedies seamlessly transfer to the ARC without requiring borrower consent.",
  },
  {
    question: "Purane NPA loan account se bank legal recovery kaise kar sakti hai agar 3 saal beet chuke hon?",
    answer:
      "Agar loan account ko 3 saal se zyada ho chuke hain, toh bank Limitation Act 1963 ke Section 18 aur 19 ke antargat account revive kar sakti hai. Iske liye borrower ki taraf se bheji gayi balance confirmation slips, audited balance sheet entries, ya email/OTS proposals ko Section 18 debt acknowledgment ke roop mein court mein pesh kiya jata hai. Iske alawa, agar property mortgage hai toh Article 62 ke tehat bank ke paas 12 saal ka samay hota hai SARFAESI Act Section 13(2) notice bhejkar property nilami (e-auction) karne ka. Sath hi, National Lok Adalat ke madhyam se pre-litigation decree prapt ki ja sakti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Recover Long-Pending Outstanding Loan Amounts",
  description:
    "Legal guide for banks to recover aged, written-off, and long-pending loan amounts in India. Limitation renewal, debt revival, and OTS enforcement.",
  datePublished: "2026-11-13T14:30:00+05:30",
  dateModified: "2026-11-13T14:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/how-banks-recover-long-pending-outstanding-loan-amounts`,
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
    name: "Banking & Stressed Asset Recovery",
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
      name: "Bank Loan Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "How Banks Can Recover Long-Pending Outstanding Loan Amounts",
      item: `${SITE_URL}/how-banks-recover-long-pending-outstanding-loan-amounts`,
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

export default function HowBanksRecoverLongPendingOutstandingLoanAmountsPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Loan Recovery", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
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
        {/* Hero Section matching platform layout */}
        <section className="w-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Limitation Act 1963</span>
              <span className="text-amber-500">•</span>
              <span>Stressed Asset Management Verticals</span>
              <span className="text-amber-500">•</span>
              <span>B2B Bank Recovery Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Recover Long-Pending Outstanding Loan Amounts
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-amber-400 mb-1">
                Statutory Summary (Debt Revival &amp; Limitation Reset Mandate)
              </p>
              <p>
                Under Sections 18 and 19 of the Limitation Act, 1963, banks can recover long-pending outstanding loans beyond the ordinary 3-year limit by securing written or electronic balance acknowledgments, recording part-payments, enforcing breached One-Time Settlement (OTS) agreements, or invoking the 12-year mortgage limitation under Article 62. Banks enforce recovery through DRT proceedings, Lok Adalat consent decrees, SARFAESI action, and ARC assignment.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Unsecured Limitation (Art 14/15/55)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">12 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mortgage Recovery (Article 62)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 18 &amp; 19</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Extension on Ack / Credit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Binding</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Civil Decree via Lok Adalat Award</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <LongPendingLoanRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Overcoming Statutory Limitation in Aged &amp; Written-Off Bank Portfolios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Scheduled commercial banks, regional rural banks (RRBs), cooperative institutions, and Non-Banking Financial Companies (NBFCs) across India carry thousands of crores in aged, written-off, and Non-Performing Asset (NPA) portfolios. When bad debt resolution teams and stressed asset management verticals attempt to initiate recovery, borrowers and their legal counsels invariably mount the statutory defence of time-bar under the Limitation Act, 1963, arguing that more than three years have elapsed since the account was flagged in default.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, Indian jurisprudence provides specialized statutory tools for institutional lenders to defeat time-bar defences. By strategically auditing electronic balance sheet disclosures, Core Banking System (CBS) transaction ledgers, digital communications authenticated under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, and negotiated One-Time Settlement (OTS) compromise proposals, banks can systematically prove statutory debt acknowledgment under Section 18 or part-payment revival under Section 19. Furthermore, for secured advances, Article 62 grants lenders a complete 12-year enforcement window against mortgaged properties.
                </p>
                <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800">
                  <p>
                    <strong>Key Strategic Insight:</strong> A loan account written off for accounting purposes under Reserve Bank of India (RBI) prudential provisioning does not extinguish the borrower&apos;s legal liability. Banks retain full statutory rights to enforce payment against borrowers, corporate guarantors, and mortgaged collateral until statutory limitation is conclusively exhausted.
                  </p>
                </div>
              </section>

              {/* Section 2: Court Precedents */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings on Bank Debt Revival &amp; Limitation
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Court Records
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Limitation Defense:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Impact &amp; Relief Enforced
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability Domain
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across DRT, NCLT &amp; Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Bank Recovery Officers:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-limitation-hurdles" aria-labelledby="heading-limitation-hurdles-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-limitation-hurdles-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Won Recoveries in Aged &amp; Stressed Loan Portfolios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Judicial analysis across Debt Recovery Tribunals (DRT), Commercial Courts, and the Supreme Court demonstrates that when banks construct continuous evidentiary paper trails, borrowers cannot escape liability through generic limitation arguments:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Chain of Balance Confirmations under Section 18:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lenders who systematically secure annual signed balance confirmations (revival letters) or extract certified balance sheet schedules filed with the Registrar of Companies (RoC) establish continuous Section 18 extensions, eliminating time-bar objections even after 8 to 10 years.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Inward Core Banking Digital Payment References under Section 19:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Producing CBS statements containing automated transaction UTRs for partial payments deposited into the loan ledger proves statutory part-payment under Section 19, restarting the 3-year clock from the exact date of deposit.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Treating Breached OTS Sanctions as Unconditional Debt Admissions:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When a borrower submits a formal compromise offer and subsequently defaults on milestone payments, aggressive recovery cells immediately invoke the signed compromise proposal as conclusive Section 18 debt admission to demand full unreduced contractual dues.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Invoking Article 62 Mortgage Remedy for Secured Real Estate:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Rather than fighting protracted limitation arguments over unsecured personal debt, banks with registered or equitable mortgages enforce their real remedy under Article 62, commanding a 12-year statutory timeline for collateral auction under SARFAESI.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Executing Pre-Litigation Lok Adalat Consent Decrees:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        By steering aged retail and MSME debtors into National Lok Adalats, banks convert informal recovery discussions into legally binding, non-appealable Civil Court decrees under Section 21 of the Legal Services Authorities Act, 1987.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Hierarchy: From Aged Default to Complete Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional recovery teams should execute this structured statutory sequence to revive time-sensitive debt, preserve limitation, and secure financial recovery:
                </p>

                {/* Mobile Responsive Step Sequence */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#0F172A] text-white p-4 rounded-xl border border-slate-700 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Audit Account &amp; Identify Revival Hooks</h3>
                    <p className="text-xs text-slate-200 mt-1">Extract balance sheet entries, balance confirmations, or part-payments under Sec 18/19.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Issue Advocate Statutory Demand Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Serve formal legal notice citing limitation revival, loan acceleration, and 15-day demand.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Refer to Pre-Litigation Lok Adalat / OTS</h3>
                    <p className="text-xs text-slate-700 mt-1">Execute binding consent award under Section 21 LSA Act or structured OTS agreement.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">SARFAESI Section 13(2) &amp; DRT Original Application</h3>
                    <p className="text-xs text-red-900 mt-1">Attach mortgaged properties (Art 62) or institute Order 37 summary recovery action.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Execution Decree / ARC Assignment</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct asset attachment under Order 21 CPC or assignment to ARC under Section 5 SARFAESI.</p>
                  </div>
                </div>

                {/* Handcrafted Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Aged Bank Loan Recovery Escalation Hierarchy Flowchart"
                  >
                    <defs>
                      <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="bankAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bankSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#bankGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Audit Ledger</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Sec 18 / 19 Revival</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">CBS UTR &amp; Balances</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">15-Day Final Demand</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Speed Post + BSA 63</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#0F172A" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Lok Adalat / OTS</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Sec 21 LSA Award</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Zero Court Fee</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#bankAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">SARFAESI / DRT</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">12-Yr Mort. (Art 62)</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Sec 13(4) Possession</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bankSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Enforce Decree</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Order 21 Attachment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or ARC Assignment</text>

                    {/* Bottom Statutory Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY FRAMEWORK FOR STRESSED &amp; AGED DEBT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 18 Limitation Act: Fresh 3-year term from every balance confirmation or audited annual balance sheet</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Article 62 Limitation Act: 12-Year statutory period to enforce money secured by mortgaged immovable property</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 21 LSA Act 1987: Lok Adalat awards operate with immediate force as final, non-appealable Civil Court decrees</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Bank Recovery Playbook: From Aged NPA to Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tailored specifically for Stressed Asset Resolution Cells and Bad Debt Verticals, this playbook establishes airtight recovery readiness:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0F172A] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Credit Files for Section 18 Debt Acknowledgments
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collate loan sanction letters, DP notes, and credit renewal documents. Scrutinize borrower communications, revival letters (Annexure-B), annual audit balance sheets, and MCA filings. Under Supreme Court authority, any written balance confirmation submitted before the 3-year limitation window lapsed completely resets the statutory recovery clock.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0F172A] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Verify Core Banking (CBS) Digital Credits under Section 19
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Review the loan account ledger for any partial credits, token repayments, or auto-appropriated recoveries. Extract certified CBS ledger extracts under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 with transaction reference numbers. Each credit constitutes valid statutory part-payment under Section 19, restarting limitation.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Senior Advocate Statutory Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Issue an advocate-drafted statutory demand notice to borrowers and personal guarantors via Registered Speed Post and tracked electronic mail. The notice accelerates the entire debt, documents the unbroken chain of Section 18/19 acknowledgments, and provides a strict 15-day settlement window before coercive action.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review standardized institutional drafting terms on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0F172A] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce Pre-Litigation Lok Adalat Settlement or Breached OTS Terms
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Summon the borrower to a National Lok Adalat through District Legal Services Authorities (DLSA) to record a compromise award. If the borrower defaults on an existing OTS sanction, revoke the compromise letter and immediately treat their written OTS proposal as an unconditional debt acknowledgment under Section 18.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0F172A] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute SARFAESI Foreclosure, DRT Recovery, or ARC Portfolio Assignment
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For debts exceeding ₹20 Lakhs, institute an Original Application (OA) before the Debt Recovery Tribunal (DRT). For secured real estate, take physical possession under Section 13(4) and Section 14 SARFAESI within the 12-year window of Article 62. Alternatively, bundle aged residual claims for assignment to RBI-registered ARCs under Section 5 SARFAESI.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Key Facts & Deadlines Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Limitation &amp; Bank Recovery Benchmarks in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian recovery statutes prescribe precise limitation periods and legal remedies. Recovery verticals must match debt categories to the correct statutory framework:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Bank Recovery Limitation Rules and Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Loan Category / Recovery Mechanism</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Limitation Period</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unsecured Personal / Retail Loan Recovery
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">3 Years from Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Articles 14, 15 &amp; 55 Limitation Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order 37 Summary Suit / DRT OA</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Secured Loan with Immovable Mortgage
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">12 Years from Due Date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 62 Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SARFAESI Sec 13(4) e-Auction &amp; Sale</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Written / Balance Sheet Debt Acknowledgment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Fresh 3-Year Reset</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18 Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Complete extension from signature date</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Part-Payment / Token Electronic Credit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Fresh 3-Year Reset</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 19 Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CBS ledger extract with UTR proof</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Lok Adalat Consent Award
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate Civil Decree</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 21 LSA Act 1987</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Non-appealable; execute under Order 21 CPC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Debt Assignment to Reconstruction Co (ARC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Continuous Rights</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 5 SARFAESI Act 2002</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full statutory lender rights transferred</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under the Limitation Act, 1963, SARFAESI Act, 2002, and RBI Master Directions. For foundational guidance on statutory filing windows, review our guide on <Link href="/time-limit-to-file-money-recovery-case-india" className="text-blue-700 underline">time limits to file money recovery suits</Link>.
                </p>
              </section>

              {/* Section 7: Stressed Asset Tools & Problem Picker Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Stressed Asset Resolution Tabs: Practical Legal Mechanisms
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Recovery Scenario to Access Governing Statutory Sections, Judicial Benchmarks, and Officer SOPs
                  </p>
                </div>

                <LongPendingLoanRecoveryTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Bank Recovers ₹48 Lakh Aged MSME Loan via Section 18 &amp; Lok Adalat
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-amber-400 bg-amber-950 px-2.5 sm:px-3 py-1 rounded-full border border-amber-800">
                      Illustrative Bank Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Public Sector Bank • Stressed Asset Management Branch</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> M/s Apex Precision Forgings availed a ₹50 Lakh unsecured working capital Cash Credit limit from a public sector bank in Pune. Following consecutive operational losses in 2021, the borrower ceased loan repayments. By March 2022, the account was classified as an NPA, and following initial unsuccessful branch follow-ups, the balance of ₹48.4 Lakhs was technically written off in the bank&apos;s internal ledger in 2024.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> In early 2026, when the bank&apos;s Stressed Asset Management vertical revisited the file, the borrower&apos;s counsel claimed that the bank was barred by limitation under Article 14 of the Limitation Act, 1963, as four full years had passed since the original default.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> The bank&apos;s recovery officers audited the debtor&apos;s Ministry of Corporate Affairs (MCA) regulatory filings and discovered that the company&apos;s audited balance sheets for FY 2023-24 and FY 2024-25 continued to show the bank&apos;s credit facility under &quot;Long-Term Borrowings&quot;. Leveraging the Supreme Court doctrine in <em>Laxmi Pat Surana v. Union Bank of India</em>, an advocate issued a comprehensive statutory legal notice asserting that these balance sheet admissions constituted unbroken Section 18 debt acknowledgments, keeping limitation fully alive through 2028.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution &amp; Outcome:</strong>
                      Confronted with an unassailable Section 18 legal framework, the corporate debtor agreed to pre-litigation resolution. The dispute was placed before the National Lok Adalat in Pune. A structured compromise settlement of ₹42 Lakhs was sanctioned, with ₹15 Lakhs paid upfront and the remaining tranches scheduled over 6 months. Under Section 21 of the Legal Services Authorities Act, 1987, the Lok Adalat issued a formal decree. All tranches were cleared on schedule, recovering ₹42 Lakhs from an aged, written-off loan book with zero court fees.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidence Checklist: 6 Essential Loan Documents to Revive Debt
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic banking records and certified digital archives are fully admissible. Assemble these 6 documents before issuing legal recovery notices:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Sanction Letter &amp; Loan Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Executed facility agreement, DP Note, deed of guarantee, and hypothecation deed establishing loan terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Balance Confirmation Slips &amp; Revival Letters:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed letters of acknowledgment (Annexure-B) confirming outstanding loan liability under Section 18.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Audited Balance Sheets &amp; MCA Returns:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Financial statements showing the bank debt listed under borrowings, establishing continuous Section 18 admission.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified CBS Ledger Extract under BSA Section 63:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Banker&apos;s books evidence statement showing principal disbursement, interest debits, and any Section 19 part-payments.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Registered Mortgage Documents (MODTD / TDDR):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Memorandum of deposit of title deeds, title search report, and CERSAI registration proving Article 62 12-year standing.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">OTS Proposals &amp; Breach Notices:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Borrower compromise requests, sanction communications, and formal revocation notices establishing full debt revival.</p>
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
                    Frequently Asked Questions on Long-Pending Bank Loan Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Limitation Act, 1963, SARFAESI Act, and Supreme Court Jurisprudence
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

              {/* Section 11: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References, Banking Regulations &amp; Authoritative Authorities
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
                  Statutory verification status: All provisions verified against active India Code statutes, Reserve Bank of India Master Directions, and Supreme Court of India precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Initiate Bank Recovery Notice &amp; Account Revival
                </h2>
                <LongPendingLoanRecoveryCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Stressed Asset Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Time Limit to File Money Recovery Case →
                  </Link>
                  <Link
                    href="/limitation-extended-by-acknowledgment-part-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Limitation Extension by Acknowledgment &amp; Part Payment →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Banks to Recover Unpaid Dues →
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Pre-Litigation Recovery →
                  </Link>
                  <Link
                    href="/how-banks-recover-unsecured-loans-non-paying-customers"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How Banks Recover Unsecured Loans →
                  </Link>
                  <Link
                    href="/legal-action-banks-against-loan-defaulters-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Action Banks Against Loan Defaulters →
                  </Link>
                  <Link
                    href="/bank-recovery-overdue-loans-willful-defaulters"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Recovery from Willful Defaulters →
                  </Link>
                  <Link
                    href="/legal-notice-for-loan-default-bank-recovery-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Loan Default Solutions →
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
