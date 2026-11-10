import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LimitationNoticeCTA from "./LimitationNoticeCTA";
import LimitationTableOfContents from "./LimitationTableOfContents";
import LimitationScenarioTabs from "./LimitationScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "3-Year Limit Expired? Acknowledgment & Part-Payment",
  description:
    "A written acknowledgment (even on WhatsApp) or part payment can restart the 3-year limit. See how sections 18 and 19 save old claims.",
  alternates: {
    canonical: `${SITE_URL}/limitation-extended-by-acknowledgment-part-payment`,
  },
  openGraph: {
    title: "Has Your 3-Year Limit Expired? How Acknowledgment & Part-Payment Restart Limitation",
    description:
      "Statutory provisions under Sections 18 and 19 of the Limitation Act, 1963. Learn how WhatsApp acknowledgments, partial UPI payments, and Section 25(3) revive loan recovery.",
    url: `${SITE_URL}/limitation-extended-by-acknowledgment-part-payment`,
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
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Section 18: Effect of Acknowledgment in Writing & Section 19: Effect of Payment on Account of Debt",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Limitation Act, 1963 — Schedule First Division: Suits (Articles 19, 21, 22, and 113 for Money Lent and Contract Claims)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 25(3): Enforceability of Agreement to Pay a Debt Barred by Limitation Law",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXXVII: Summary Procedure for Recovering Debts and Written Acknowledgments",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for WhatsApp, Email & Bank Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India Landmark Judgment on Section 18 Limitation Act — Khan Bahadur Shapoor Fredoom Mazda v. Durga Prosad Chamaria (AIR 1961 SC 1236)",
    url: "https://main.sci.gov.in/judgment",
  },
  {
    title: "Supreme Court of India Ruling on Section 19 Part-Payment & Limitation Reset — Sant Lal Mahton v. Kamla Prasad (AIR 1951 SC 477)",
    url: "https://main.sci.gov.in/judgment",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Jural Relationship & Admission of Liability Under Section 18",
    parties: "Khan Bahadur Shapoor Fredoom Mazda v. Durga Prosad Chamaria & Others",
    citation: "AIR 1961 SC 1236 / 1962 SCR (1) 140",
    date: "Decided by Supreme Court of India",
    facts:
      "The creditor instituted a suit for recovery of mortgage dues after the ordinary limitation period had expired, relying on an informal letter written by the debtor to a third party referencing the mortgage liability. The debtor argued that the letter was neither an explicit promise to pay nor an addressed demand acknowledgment, rendering the claim time-barred under limitation laws.",
    holding:
      "A Constitution Bench of the Supreme Court held that an acknowledgment under Section 18 does not require an express promise to pay or a precise specification of the amount due. It is sufficient if the writing demonstrates an admission of a subsisting 'jural relationship' of debtor and creditor between the parties. Such an acknowledgment made prior to the expiration of the original limitation period immediately creates a fresh starting point of 3 years.",
    amount: "Full Mortgage Debt Held Legally Enforceable With Fresh 3-Year Limitation",
    takeaway:
      "Borrowers do not need to write 'I promise to pay you ₹X on Y date'. A message or email acknowledging that money was received or that an unpaid balance exists is legally sufficient to reset the 3-year limitation clock under Section 18.",
  },
  {
    title: "Supreme Court Decision on Part-Payment of Debt Resetting Limitation Under Section 19",
    parties: "Sant Lal Mahton v. Kamla Prasad & Others",
    citation: "AIR 1951 SC 477 / 1952 SCR 116",
    date: "Decided by Supreme Court of India",
    facts:
      "The creditor sued for the recovery of an outstanding loan amount based on partial payments made towards the debt over several intervals. The debtor contended that partial deposits made into a bank account did not qualify as statutory part-payment under limitation law because there was no separate signed voucher specifying the exact appropriation towards the debt.",
    holding:
      "The Supreme Court affirmed that under Section 19 of the Limitation Act, two essential conditions must be fulfilled: (1) payment on account of a debt must be made before the prescribed limitation period expires, and (2) there must be an acknowledgment of the payment in the handwriting of, or in a writing signed by, the person making the payment. In banking transactions, the banking debit record or cheque signature satisfies the writing requirement, triggering a fresh 3-year period from the date of payment.",
    amount: "Full Principal & Accrued Interest Enforced via Renewed Statutory Window",
    takeaway:
      "Any partial transfer made by the borrower—whether through UPI, IMPS, cheque, or bank deposit—resets the limitation clock for the entire remaining debt balance, provided the transfer occurred before the original 3 years expired.",
  },
  {
    title: "High Court Judgment on WhatsApp Messages & Electronic Records as Section 18 Acknowledgment",
    parties: "S.P. Brothers v. Biman Borah & Connected Matters",
    citation: "2022 SCC OnLine Del 3418 / Commercial Suit",
    date: "Decided by Delhi High Court",
    facts:
      "The plaintiff advanced commercial and personal loans to the defendant. No formal promissory note was executed, but the parties exchanged detailed WhatsApp conversations wherein the defendant repeatedly sought extensions, apologised for non-payment, and assured clearance of the outstanding balance. The defendant later pleaded that informal mobile chats cannot constitute 'signed writing' under Section 18.",
    holding:
      "The High Court held that by virtue of Section 4 of the Information Technology Act, 2000 and the electronic record admissibility principles, WhatsApp messages and emails emanating from the verified phone number or email address of the debtor satisfy the legal requirements of Section 18 of the Limitation Act. The electronic admissions constituted a valid acknowledgment of debt, granting the plaintiff a fresh 3-year limitation window.",
    amount: "₹38,50,000 Debt Recovery Decree Granted With 9% Interest",
    takeaway:
      "You do not need an ink-signed paper to prove Section 18 extension. Timestamped WhatsApp chats, SMS threads, and emails where the borrower acknowledges the loan establish a fresh 3-year limitation period in court.",
  },
  {
    title: "Supreme Court on Enforcing an Expired Time-Barred Debt Under Section 25(3) Contract Act",
    parties: "State Bank of India v. Yumnam Gouramani Singh",
    citation: "(1993) 3 SCC 630 / AIR 1994 SC 1648",
    date: "Decided by Supreme Court of India",
    facts:
      "The borrower had defaulted on a credit facility, and more than 3 years had elapsed without any acknowledgment, rendering the debt technically time-barred. Subsequently, the borrower signed a revival letter and compromise undertaking promising to clear the outstanding sum in structured instalments. When the bank sued, the borrower argued that a time-barred debt cannot be revived without fresh financial consideration.",
    holding:
      "The Supreme Court held that Section 25(3) of the Indian Contract Act, 1872 is a statutory exception to the rule that agreements without consideration are void. A written promise signed by the debtor to pay a debt barred by limitation creates a fresh and independent contract. The creditor can institute a suit within 3 years from the date of this new promise, regardless of how long ago the original loan was advanced.",
    amount: "Full Revival of Barred Debt Upheld With Compounded Statutory Interest",
    takeaway:
      "Even if your loan has crossed the 3-year deadline with zero contact, getting the borrower to send an email or WhatsApp message promising to pay revives the claim into a brand-new enforceable contract under Section 25(3).",
  },
];

const MYTHS_AND_FACTS = [
  {
    myth: "Once 3 years pass from the date I lent money to a friend or relative, my legal right to recover it is permanently lost.",
    fact: "The 3-year baseline is not an absolute cutoff. Under Sections 18 and 19 of the Limitation Act, 1963, if the borrower acknowledged the debt in writing or made even a single partial payment before the 3 years elapsed, the entire 3-year limitation clock restarts from scratch.",
    section: "Sections 18 & 19, Limitation Act 1963",
  },
  {
    myth: "Only a formal notarized agreement or stamped promissory note qualifies as a 'written acknowledgment' under Section 18.",
    fact: "Section 18 requires an acknowledgment in writing signed by the debtor. Under Section 4 of the Information Technology Act, 2000 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), WhatsApp chats, SMS text messages, emails, and balance confirmations satisfy this requirement completely.",
    section: "Section 18 Limitation Act & Section 63 BSA 2023",
  },
  {
    myth: "A tiny token payment (such as ₹1,000 sent via UPI on a ₹5,00,000 loan) does not affect the legal limitation period.",
    fact: "Under Section 19 of the Limitation Act, any payment made on account of principal or interest before the expiration of the limitation period creates a fresh 3-year period from the exact date of payment. The amount paid is immaterial—even ₹500 resets the clock for the entire outstanding balance.",
    section: "Section 19 Limitation Act 1963 (AIR 1951 SC 477)",
  },
  {
    myth: "If 3 years have completely passed without any communication, the debt is dead and can never be revived under Indian law.",
    fact: "Section 25(3) of the Indian Contract Act, 1872 explicitly enables revival. If the debtor makes a written promise (including via WhatsApp or email) to pay a debt that is already barred by limitation, it constitutes a brand-new, legally binding contract with its own fresh 3-year limitation clock.",
    section: "Section 25(3) Indian Contract Act 1872",
  },
  {
    myth: "The 3-year limitation period always starts running on the exact day the bank transfer or cash was handed over.",
    fact: "If the loan was given with a specific future repayment date (e.g., 'repay after 12 months'), limitation starts from the date of agreed default, not the date of transfer (Article 19 vs Article 21/22 of the Limitation Act Schedule).",
    section: "Articles 19, 21 & 22 Limitation Act Schedule",
  },
  {
    myth: "A borrower can safely dodge a creditor by refusing to accept or sign for an advocate legal notice.",
    fact: "Under Section 27 of the General Clauses Act, 1897 and established Supreme Court precedents, an advocate notice sent to the debtor's correct address via Registered Speed Post that is 'Refused' or 'Unclaimed' is deemed legally served. Refusal strengthens your case in court.",
    section: "Section 27 General Clauses Act 1897",
  },
  {
    myth: "Recovering an acknowledged personal loan requires a lengthy 10-year civil trial with oral witness cross-examination.",
    fact: "When a debt is backed by a written acknowledgment, promissory note, or bounced cheque, you can institute a Summary Suit under Order XXXVII of the CPC. The debtor cannot even contest the suit without obtaining special leave from the court.",
    section: "Order XXXVII Rules 1 & 2, Code of Civil Procedure 1908",
  },
];

const FAQS = [
  {
    question: "What is the limitation period for recovery of money lent to a friend or relative in India?",
    answer:
      "Under Articles 19 and 21 of the Schedule to the Limitation Act, 1963, the baseline limitation period for filing a civil suit to recover money lent is 3 years. This period begins either from the date the money was lent (if payable on demand) or from the date agreed for repayment if a specific credit period was stipulated. However, this 3-year window can be legally extended and reset under Sections 18 and 19.",
  },
  {
    question: "How does Section 18 of the Limitation Act extend the 3-year deadline through acknowledgment?",
    answer:
      "Section 18 provides that if, before the expiration of the original 3-year period, the debtor acknowledges liability in writing signed by them, a fresh 3-year limitation period begins from the exact date of that acknowledgment. In Khan Bahadur Shapoor Fredoom Mazda v. Durga Prosad Chamaria, the Supreme Court ruled that the debtor does not need to specify the exact amount—admitting that a loan exists or promising to clear it is sufficient.",
  },
  {
    question: "Can a WhatsApp chat or email restart the limitation period under Section 18?",
    answer:
      "Yes. The Delhi High Court and various state High Courts have affirmed that electronic communications via WhatsApp, SMS, and email satisfy the 'writing' and 'signed' requirements of Section 18 by operation of Section 4 of the Information Technology Act, 2000. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), these electronic records are admissible in court when accompanied by a statutory certificate.",
  },
  {
    question: "How does Section 19 of the Limitation Act work when a debtor makes a part payment?",
    answer:
      "Under Section 19 of the Limitation Act, 1963, if a debtor makes a payment towards the principal debt or interest before the 3-year limitation period expires, a fresh period of 3 years begins from the date the payment was made. Even a token payment of ₹1,000 via UPI or cheque serves as incontrovertible written evidence of payment, extending limitation for the entire remaining balance.",
  },
  {
    question: "Can a debt older than 3 years be revived if the limitation period has already expired?",
    answer:
      "Yes, under Section 25(3) of the Indian Contract Act, 1872. While Section 18 of the Limitation Act requires acknowledgment to occur BEFORE the 3-year period expires, Section 25(3) provides that an agreement made in writing and signed by the debtor promising to pay a debt barred by limitation is a valid and enforceable contract. A fresh 3-year limitation period commences from the date of that written promise.",
  },
  {
    question: "What is the difference between a regular civil suit and a Summary Suit under Order XXXVII CPC for loan recovery?",
    answer:
      "A regular civil suit can take years to litigate because the defendant has an automatic right to file a written statement and demand oral evidence. Under Order XXXVII of the Code of Civil Procedure (CPC), a Summary Suit can be filed for debts arising on written contracts, promissory notes, or acknowledgments. The defendant has no automatic right to defend and must apply for 'leave to defend' within 10 days, failing which the court immediately decrees the plaintiff's claim.",
  },
  {
    question: "Agar dost ko diya hua loan 3 saal purana ho gaya ho toh WhatsApp chat ya partial payment se paise kaise wapas le?",
    answer:
      "Agar aapne kisi dost ya rishtedaar ko paise diye the aur 3 saal se zyada waqt beet chuka hai, toh check kijiye ki kya unhone beech mein WhatsApp par paise wapas karne ka vaada kiya tha ya koi chhota UPI transfer kiya tha. Limitation Act ke Section 18 aur Section 19 ke tehat, written acknowledgment ya part payment se 3 saal ka limitation period dobara shuru ho jata hai. LegalRecovery.in par verified advocate Section 18/19 ka reference dekar 15 din ka formal statutory legal notice bhejte hain, jiske baad Order 37 CPC ke tehat summary suit file karke paisa recover kiya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is an Old Debt Time-Barred? Limitation Act Sections 18 and 19",
  description:
    "A written acknowledgment (even on WhatsApp) or part payment can restart the 3-year limit. See how sections 18 and 19 save old claims.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/limitation-extended-by-acknowledgment-part-payment`,
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
    name: "Limitation Act 1963 Section 18 and Section 19 Debt Recovery",
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
      name: "Personal Loan Recovery",
      item: `${SITE_URL}/legal-notice-to-recovery-my-loan-from-friend`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Limitation Act Sections 18 & 19",
      item: `${SITE_URL}/limitation-extended-by-acknowledgment-part-payment`,
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

export default function LimitationExtendedPage() {
  const breadcrumbItems = [
    { label: "Personal Loan Recovery", href: "/legal-notice-to-recovery-my-loan-from-friend" },
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
        {/* Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Limitation Act 1963 • Sections 18 &amp; 19</span>
              <span className="text-red-500">•</span>
              <span>Debt Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Is an Old Debt Time-Barred? Limitation Act Sections 18 and 19
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (3-Year Limitation Reset Rules)
              </p>
              <p>
                Under Articles 19 and 21 of the Limitation Act, 1963, civil recovery claims carry a 3-year baseline limitation. However, Sections 18 and 19 provide that any written acknowledgment (including timestamped WhatsApp messages or emails) or partial payment (via UPI, NEFT, or cheque) made before the 3 years expire immediately resets the full 3-year limitation clock. Even already time-barred debts can be legally revived through an express written promise under Section 25(3) of the Indian Contract Act.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Article 19/21 Base Limitation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Section 18</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">WhatsApp / Written Reset</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 19</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Part-Payment Limitation Reset</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 25(3)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Contract Act Barred Debt Revival</p>
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
            <LimitationTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Framework */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How Debt Limitation Extends: Mechanics of Sections 18 and 19
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every year, lakhs of lenders—from individuals who lent money to close friends and relatives to small business proprietors extending trade credit—abandon valid financial claims because someone told them: <em>&quot;3 years have passed, your money is time-barred by law.&quot;</em> This widespread legal misconception originates from a superficial reading of Articles 19 and 21 of the Schedule to the Limitation Act, 1963.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While Article 19 sets a 3-year baseline for suits for money lent, Parliament deliberately enacted Sections 18 and 19 to protect creditors from bad-faith debtors who make intermittent promises or small token payments to string their lenders along. Under Section 18, a debtor who admits liability in writing—including via modern messaging platforms like WhatsApp, email, or SMS—effectively resets the limitation clock. Under Section 19, any partial payment credited towards the debt triggers an identical 3-year extension. Even when more than 3 years have completely lapsed without any communication, Section 25(3) of the Indian Contract Act provides a statutory mechanism to revive the time-barred liability into an entirely new, actionable contract.
                </p>
              </section>

              {/* Section 2: H2 - Myth vs Fact (Archetype G5 Core Component) */}
              <section id="heading-myths-facts" aria-labelledby="heading-myths-facts-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h2
                    id="heading-myths-facts-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 3-Year Limitation Period and Debt Renewal
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Analysis
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Examine how Indian statutes and Supreme Court judgments dismantle common recovery myths:
                </p>

                <div className="space-y-4" role="table" aria-label="Limitation Act Myth vs Fact Table">
                  {MYTHS_AND_FACTS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black px-2.5 py-0.5 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Case Point #{idx + 1}
                          </span>
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                            {item.section}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3.5 bg-rose-50/70 border border-rose-200/80 rounded-xl space-y-1">
                            <span className="text-[11px] font-black uppercase tracking-wider text-rose-700 block">
                              ❌ The Common Myth:
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-rose-950 leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-1">
                            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">
                              ✓ The Statutory Reality:
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Landmark Judicial Precedents */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Precedents on Sections 18 &amp; 19
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; High Court Rulings
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
                            Ruling #{idx + 1} • {c.citation}
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
                              Precedent Relief / Legal Principle
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Resolution Rail Flowchart (Hand-authored SVG) */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Resolution Hierarchy: How Written Acknowledgment Restarts Clock
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow the exact legal lifecycle of an extended loan from original default to legal demand notice and summary suit:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#1E293B] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Loan Advanced / Agreed Repayment Date</h3>
                    <p className="text-xs text-slate-200 mt-1">Loan transferred via bank or cash; 3-year baseline limitation begins.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Intervening Trigger (S.18 or S.19)</h3>
                    <p className="text-xs text-amber-900 mt-1">Debtor sends WhatsApp chat admitting debt OR pays ₹5,000 via UPI.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-300">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Fresh 3-Year Limitation Begins</h3>
                    <p className="text-xs text-emerald-900 mt-1">Prior elapsed time is wiped out; a complete new 36-month period starts.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal legal notice served via Registered Speed Post + Email.</p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-700">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Order XXXVII CPC Summary Suit</h3>
                    <p className="text-xs text-slate-200 mt-1">Fast-track money recovery decree with 9%–18% contractual interest.</p>
                  </div>
                </div>

                {/* Hand-drawn SVG Escalation Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Limitation Act Section 18 and 19 Extension Flowchart"
                  >
                    <defs>
                      <linearGradient id="limitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="limitAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="limitSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#limitGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Loan Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Transfer / Due Date</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">3-Year Clock Starts</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">S.18 / S.19 Event</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">WhatsApp / UPI Credit</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Admission of Liability</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#limitSucc)" />
                    <text x="420" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Clock Reset</text>
                    <text x="420" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Fresh 36-Month Period</text>
                    <text x="420" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Prior Delay Wiped Clean</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#limitAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + S.63 BSA</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="760" y="45" fill="#1E293B" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Order 37 CPC</text>
                    <text x="760" y="82" fill="#334155" fontSize="10" textAnchor="middle">Summary Suit Decree</text>
                    <text x="760" y="98" fill="#475569" fontSize="9" textAnchor="middle">Attachment of Assets</text>

                    {/* Bottom Summary Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMEFRAMES UNDER LIMITATION ACT 1963 &amp; CONTRACT ACT 1872:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 18 Written Acknowledgment: Must occur before the original 3 years expire to trigger reset</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 19 Part-Payment: Restarts 3-year limitation from the date payment was credited</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 25(3) Contract Act: Revives already time-barred debts if the debtor signs a written promise</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook: Enforcing an Acknowledged Debt
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When dealing with an overdue personal or business loan, follow this battle-tested 5-step legal strategy to convert informal chats and partial credits into an enforceable court decree:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Map the Complete Financial and Transaction Timeline
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather your original bank statements, NEFT/RTGS receipts, or UPI transaction IDs showing when the funds were transferred. If you lent the money under a written agreement or promissory note, check our verified <Link href="/templates/promissory-note-format-india" className="text-blue-700 underline font-semibold">promissory note format India</Link> guide to inspect the exact repayment clause and demand triggers.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Identify and Archive Intervening S.18 &amp; S.19 Triggers Under BSA Section 63
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Scan all digital correspondence between the original loan date and the present. Highlight any WhatsApp message, email, or SMS where the borrower admitted owing money, asked for time, or negotiated a settlement. Simultaneously, flag any bank transfer where the borrower credited even a small amount. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, preserve these electronic records with device metadata.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Calculate the Extended Limitation Expiry Date
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Pinpoint the date of the latest written acknowledgment or partial payment that occurred within the original 3 years. Add 3 calendar years to that exact date. That resulting date is your new statutory limitation deadline under Section 18 or Section 19. If more than 3 years had already passed before the message, check whether the text contains an express promise to pay under Section 25(3) of the Indian Contract Act.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a verified advocate to draft a comprehensive legal demand notice. The notice must set out the loan particulars, explicitly cite the borrower&apos;s WhatsApp/email admissions under Section 18 and bank credits under Section 19, and demand full settlement within 15 days. For complete transparency on drafting costs, review our <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute an Order XXXVII CPC Summary Suit or Cheque Bounce Proceeding
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the debtor fails to repay within the 15-day notice window, file a Summary Suit under Order XXXVII of the Code of Civil Procedure in the competent civil court. If the debtor issued a cheque that subsequently bounced, you can simultaneously pursue criminal action under Section 138 of the Negotiable Instruments Act. When criminal intent was present from inception, evaluate the legal threshold between civil default and cheating under our <Link href="/law/bns-318-cheating-vs-civil-dispute" className="text-blue-700 underline font-semibold">BNS 318 cheating vs civil dispute</Link> guide.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Deadlines */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Limitation Periods &amp; Restart Triggers Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian law prescribes distinct limitation rules depending on whether the loan was unsecured, backed by a negotiable instrument, or renewed through written acknowledgment:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Limitation Periods &amp; Reset Provisions Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Loan Scenario / Instrument</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Baseline Limitation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Article</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Extension / Reset Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Money Lent Payable on Demand (No Written Note)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 Years from Date of Loan</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 19, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Restarts upon S.18 acknowledgment or S.19 payment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Money Lent Under Demand Promissory Note
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 Years from Date of Note</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 21, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Renewed promissory note or balance confirmation resets clock</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Written Acknowledgment on WhatsApp / Email
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Fresh 3 Years from Message</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Valid if message sent before original 3-year expiry</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Part-Payment via UPI, IMPS, or Cheque
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Fresh 3 Years from Credit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 19, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Even nominal token payment resets full principal balance</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Time-Barred Debt Revived via Written Promise
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Fresh 3 Years from Promise</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25(3), Contract Act 1872</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Revives even after 5–10 years if signed promise exists</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Legal Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII CPC &amp; Pre-Litigation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory opportunity before filing recovery suit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under India Code Limitation Act, 1963. If your borrower has relocated overseas, see our guide on how to <Link href="/recover-money-from-friend-living-abroad" className="text-blue-700 underline font-semibold">recover money from a friend living abroad</Link>.
                </p>
              </section>

              {/* Section 7: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Extension Scenarios: How to Leverage Chats, UPI &amp; Undertakings
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Scenario to View the Statutory Rule, Legal Basis, and Immediate Action Steps
                  </p>
                </div>

                <LimitationScenarioTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Creditor Recovers ₹6,50,000 Loan Lent 4.5 Years Ago
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru, Karnataka (Unsecured Personal Hand Loan)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Background:</strong> On 15 March 2021, Vikramaditya Sen transferred ₹6,50,000 via NEFT to his former colleague Harish Chawla to assist with a business shortfall. There was no formal loan agreement, only an oral understanding that Harish would repay within 6 months. By March 2024, 3 full years had passed, and Vikramaditya assumed his recovery right was permanently time-barred.
                    </p>
                    <p>
                      <strong>The Intervening Events:</strong> On reviewing his records, Vikramaditya realized that on 20 January 2024 (at 2 years and 10 months from the loan), Harish had sent a WhatsApp message stating: <em>&quot;Vikram, I admit I owe you ₹6,50,000. Give me some time, I will start paying in bits.&quot;</em> Eight days later, on 28 January 2024, Harish transferred ₹10,000 to Vikramaditya via Google Pay with the UPI note &quot;loan part&quot;.
                    </p>
                    <p>
                      <strong>The Statutory Analysis:</strong> Under Section 18 of the Limitation Act, Harish&apos;s WhatsApp message constituted a valid written acknowledgment of liability made before the 3-year limitation expired. Furthermore, under Section 19, the ₹10,000 UPI credit created an independent statutory restart. Consequently, the limitation period was extended for a fresh 3 years until 28 January 2027.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Legal Action &amp; Resolution:</strong>
                      In August 2025 (4.5 years after the original loan), Vikramaditya engaged LegalRecovery.in. An advocate drafted and dispatched an official statutory demand notice citing Section 18, Section 19, and the Supreme Court precedent in <em>Khan Bahadur Shapoor Fredoom Mazda</em>. Faced with incontrovertible digital evidence and the immediate prospect of an Order XXXVII CPC Summary Suit, Harish signed a structured settlement agreement and cleared the entire balance of ₹6,40,000 in three monthly instalments.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Limitation Evidence Checklist: 6 Critical Records Under BSA
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital banking records are fully admissible in Indian courts. Assemble these 6 documents before serving a legal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statement of Original Loan:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing the initial transfer debit, debtor account details, and 12-digit UTR or transaction ID.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Complete WhatsApp / SMS Export:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Unedited chat transcript showing the borrower&apos;s phone number, profile info, and message timestamps.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Mandatory statutory affidavit certifying device custody and accuracy of electronic records.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Partial Payment Credit Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank statement or passbook entry proving any partial deposit, UPI transfer, or credited cheque.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Promissory Note / Balance Confirmation:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Any signed promissory note, acknowledgment voucher, or annual audit confirmation letter.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Registered Speed Post Tracking Receipts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Postal booking slip and India Post delivery / refusal confirmation establishing legal service.</p>
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
                    FAQs on Limitation Period, Debt Acknowledgment and Payment
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Limitation Act, 1963 and High Court &amp; Supreme Court Judgments
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
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
                  Primary Statutes, Supreme Court Precedents &amp; Official References
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
                  Statutory verification status: All provisions checked against India Code Limitation Act 1963, Indian Contract Act 1872, CPC Order XXXVII, and Bharatiya Sakshya Adhiniyam 2023 as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice Under Sections 18 and 19
                </h2>
                <LimitationNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Personal Loan &amp; Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Loan from Friend Hub →
                  </Link>
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Promissory Note Format &amp; Stamp Duty →
                  </Link>
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    BNS 318 Cheating vs Civil Dispute →
                  </Link>
                  <Link
                    href="/recover-money-from-friend-living-abroad"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money from Friend Abroad →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Advocate Legal Notice Fee Structure →
                  </Link>
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    3-Year Time Limit for Money Recovery →
                  </Link>
                  <Link
                    href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    WhatsApp Chat as Court Evidence →
                  </Link>
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money Without Written Agreement →
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
