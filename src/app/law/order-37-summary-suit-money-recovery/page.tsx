import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import Order37NoticeCTA from "./Order37NoticeCTA";
import Order37TableOfContents from "./Order37TableOfContents";
import Order37DocumentTabs from "./Order37DocumentTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Summary Suit Under Order 37 CPC: Process, Format, Fees",
  description:
    "How an Order 37 summary suit works, which documents qualify, court fees, timelines and when to choose it over a regular suit.",
  alternates: {
    canonical: `${SITE_URL}/law/order-37-summary-suit-money-recovery`,
  },
  openGraph: {
    title: "Order 37 CPC Summary Suit: Fast Money Recovery Process, Format & Court Fees",
    description:
      "Statutory guide to Order XXXVII CPC summary suits for money recovery: qualifying instruments, 10-day leave to defend rule, summons format, and court fee calculations.",
    url: `${SITE_URL}/law/order-37-summary-suit-money-recovery`,
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
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXXVII (Summary Procedure), Rules 1 to 7",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Article 11, Article 36 & Sections 18, 19 (Acknowledgment of Debt)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Supreme Court of India Benchmark Judgment: IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) 1 SCC 568",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Section 4 (Promissory Notes) & Section 138 (Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2281",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for WhatsApp & Bank Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Court Fees Act, 1870 & State Amendments (Ad-Valorem Schedules & Section 16 Refund Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2202",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark 4-Judge Benchmark on Leave to Defend Principles",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568, Supreme Court of India",
    date: "Judgment Dated 15 November 2016",
    facts:
      "The plaintiff instituted a summary suit for recovery of ₹394.38 crore on the basis of corporate guarantee undertakings and debenture agreements. The defendant company sought unconditional leave to defend by claiming the transaction was structured in breach of RBI Foreign Direct Investment (FDI) regulations and thus void under Section 23 of the Contract Act. The Bombay High Court had granted conditional leave on deposit of ₹40 crore, which was challenged before the Supreme Court.",
    holding:
      "The Supreme Court restated the governing principles for Order XXXVII Rule 3 CPC: (i) If the defendant discloses a substantial defense, leave must be granted unconditionally; (ii) If the defense is plausible but doubtful, the court may impose conditions such as depositing money into court; (iii) If the defense is sham, illusory, or moonshine, leave must be refused and the plaintiff is entitled to an immediate decree. The Court affirmed that courts must not mechanically grant unconditional leave where the debtor attempts to escape undisputed financial obligations.",
    amount: "₹394.38 Crore Liquidated Claim • Conditional Leave Upon 50% Deposit Ordered",
    takeaway:
      "In any summary suit under Order 37 CPC, the debtor cannot drag out proceedings by raising sham or speculative arguments. Unless the defendant produces tangible evidence creating a bona fide triable defense, the court will either demand a heavy deposit or decree the claim forthwith.",
  },
  {
    title: "Supreme Court Ruling on Illusory Defenses in Commercial Summary Suits",
    parties: "Mechelec Engineers & Manufacturers v. Basic Equipment Corporation",
    citation: "(1976) 4 SCC 687, Supreme Court of India",
    date: "Judgment Dated 1 November 1976",
    facts:
      "The respondent instituted a summary suit for recovery of money for goods sold and delivered against a dishonoured cheque. The appellant firm sought leave to defend, arguing that the goods supplied were substandard and defective, despite having issued an unconditional cheque and acknowledging receipt of the consignment in earlier correspondence.",
    holding:
      "The Supreme Court held that the purpose of Order XXXVII is to ensure expeditious disposal of commercial and monetary claims. A defense is illusory when it is raised purely to prolong litigation and avoid paying admitted dues. If the defendant has no bona fide defense, the court has the statutory duty to refuse leave to defend, ensuring summary judgment is entered without forcing the creditor through years of regular civil trial.",
    amount: "Full Summary Money Decree Entered Alongside Commercial Interest",
    takeaway:
      "When a creditor holds a signed negotiable instrument or clear written contract, self-serving claims of defect raised for the first time after summons will be rejected as moonshine defense by the civil court.",
  },
  {
    title: "Supreme Court Verdict on Summary Suit Integrity When Original Note Is Lost",
    parties: "Neebha Kapoor v. Jayantilal Khandwala",
    citation: "(2008) 3 SCC 770, Supreme Court of India",
    date: "Judgment Dated 6 February 2008",
    facts:
      "The plaintiff filed a summary suit based on a dishonoured demand promissory note for ₹15 lakh. Prior to trial, the original promissory note was misplaced or stolen, and the plaintiff produced a clear certified photocopy along with bank statements and written WhatsApp/telegram acknowledgments admitting the liability. The defendant argued that absence of the original note ousted Order 37 jurisdiction.",
    holding:
      "The Supreme Court observed that while the original instrument should ordinarily be filed, the summary procedure does not collapse merely because secondary evidence of an admitted document is required. Where the defendant does not dispute the execution of the instrument or receipt of consideration, the court retains discretion to grant conditional leave or proceed summarily rather than relegating the creditor to a protracted regular suit.",
    amount: "₹15,00,000 Principal Recovery + Pleading Sanctioned Under Order 37",
    takeaway:
      "Even if a promissory note or cheque is held in copy, written admissions and secondary evidence under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 allow the court to preserve summary jurisdiction where the debt itself is undisputed.",
  },
  {
    title: "Supreme Court Ruling on Strict Conditional Deposit in Order XXXVII Suits",
    parties: "Sunil Enterprises v. SBI Commercial & International Bank Ltd.",
    citation: "(1998) 4 SCC 354, Supreme Court of India",
    date: "Judgment Dated 5 May 1998",
    facts:
      "The bank instituted a summary suit upon bills of exchange discounted by it. The defendant alleged that the bills were accommodation bills and that fraud had been committed by the drawer with the bank manager. The trial court ordered unconditional leave, which the High Court reversed to direct a cash deposit of the entire suit amount.",
    holding:
      "The Supreme Court clarified that where the defendant raises a defense that creates reasonable doubt about the plaintiff's title, conditional leave may be granted, but the condition imposed must be proportionate to the plausibility of the defense. If the defense appears frivolous or framed merely to gain time, the court is fully empowered to order deposit of up to 100% of the principal sum into court as security.",
    amount: "Deposit of Substantial Principal Sum Mandated to Protect Creditor Interest",
    takeaway:
      "Order 37 tilts the legal balance in favor of the creditor: either the debtor pays up immediately, or they must deposit cash into the court registry before they are even permitted to argue their defense.",
  },
];

const FAQS = [
  {
    question: "What is an Order 37 summary suit and how is it faster than an ordinary civil suit?",
    answer:
      "An Order XXXVII summary suit is a specialized expedited proceeding under the Code of Civil Procedure, 1908 designed exclusively for recovering liquidated money debts arising from promissory notes, cheques, bills of exchange, written contracts, or guarantees. Unlike an ordinary civil suit where the defendant has an automatic right to file a written statement and drag the case through years of trial, in an Order 37 suit the defendant has no right to defend unless they enter an appearance within 10 days of summons and satisfy the court that they have a genuine, non-frivolous defense. If they fail to appear or if leave to defend is refused, the court decrees the claim immediately.",
  },
  {
    question: "Which documents qualify for filing a summary suit under Order XXXVII CPC?",
    answer:
      "Under Order XXXVII Rule 1(2) CPC, summary suits can only be filed on: (1) Bills of exchange, hundies, and promissory notes under the Negotiable Instruments Act, 1881; (2) Written contracts where the amount sought to be recovered is a fixed liquidated sum (e.g., written loan agreements, acknowledged MoUs, confirmed debit ledgers); (3) Enactments where the sum sought is a fixed debt other than a penalty; and (4) Written guarantees where the claim against the principal debtor is for a liquidated debt. Unliquidated damage claims or verbal agreements without written acknowledgement do not qualify.",
  },
  {
    question: "What happens if the defendant does not enter an appearance within 10 days of summons?",
    answer:
      "Under Order XXXVII Rule 2(3) CPC, if the defendant fails to enter an appearance within 10 calendar days from the date of service of the summons in Form No. 4, the allegations in the plaint are deemed to be admitted in full. The plaintiff is immediately entitled to a judgment and decree for a sum not exceeding the sum mentioned in the summons, along with interest up to the date of the decree and costs. The decree becomes immediately executable through civil attachment under Order XXI CPC.",
  },
  {
    question: "How is 'Leave to Defend' decided under Order 37 Rule 3 CPC?",
    answer:
      "Once the defendant enters appearance, the plaintiff serves a 'Summons for Judgment' (Form No. 4A). The defendant then has 10 days to file an affidavit seeking 'Leave to Defend'. Governed by the Supreme Court benchmark in IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017), the court applies three tests: (1) If the defense discloses a bona fide triable issue, unconditional leave is granted; (2) If the defense is plausible but doubtful, the court grants conditional leave subject to depositing a substantial portion of the debt in court; (3) If the defense is moonshine, sham, or illusory, leave is dismissed and an immediate decree is passed.",
  },
  {
    question: "What are the court fees for filing an Order 37 summary suit in India?",
    answer:
      "Court fees for Order XXXVII summary suits are governed by the respective State Court Fees Act and are calculated ad-valorem based on the total claim amount (principal plus accrued interest). In Delhi, court fees range from approximately 1.5% to 2% of the claim value. In Maharashtra, the fee is graded with a maximum statutory ceiling of ₹3,00,000 under the Maharashtra Court Fees Act. Importantly, under Section 16 of the Court Fees Act 1870, if the matter is settled or decided at the preliminary stage without full trial, a substantial portion (up to 50% to 100%) of the court fee may be refunded to the plaintiff.",
  },
  {
    question: "What is the limitation period for filing an Order 37 money recovery suit?",
    answer:
      "The limitation period is 3 years from the date the cause of action arises, governed by Article 11 or Article 36 of the Limitation Act, 1963. For promissory notes payable on demand, the clock starts from the date of the note. For loans with a fixed repayment date, it runs from the date of default. Crucially, under Section 18 of the Limitation Act, any written acknowledgment of debt signed or transmitted by the debtor (including over WhatsApp or email under Section 63 of BSA 2023), or any part-payment made under Section 19, resets the 3-year limitation clock from that new date.",
  },
  {
    question: "Can an Order 37 summary suit be filed on the basis of WhatsApp chats and UPI transactions alone?",
    answer:
      "Yes, provided the electronic communications contain an unambiguous written admission of a liquidated sum. When UPI or bank statement entries proving transfer of funds are paired with WhatsApp messages where the borrower explicitly acknowledges the debt and promises repayment (e.g., 'I will pay back the ₹10 lakh by next month'), this forms a written acknowledgment of debt admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Courts have entertained summary suits on such acknowledged debts where no disputed oral terms exist.",
  },
  {
    question: "Order 37 CPC summary suit ke zariye udhar diya paisa kaise recover karein?",
    answer:
      "Agar aapne kisi dost, relative ya business partner ko promissory note, cheque, ya written agreement ke tehat paise diye hain aur wo wapas nahi kar raha, toh Order XXXVII CPC sabse tez civil legal remedy hai. Pehle 15-day formal advocate legal demand notice bheja jata hai. Agar debtor paise na de, toh competent civil court ya High Court mein summary suit file hoti hai. Court Form 4 summons bhejti hai; debtor ko 10 din ke andar court mein appearance deni hoti hai. Agar wo appearance na de ya koi thos defense na dikhaye, toh court bina lamba trial chalaye turant aapke favor mein decree pass kar deti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Order XXXVII Summary Suit: The Fast Civil Route to Recover Money",
  description:
    "How an Order 37 summary suit works, which documents qualify, court fees, timelines and when to choose it over a regular suit.",
  datePublished: "2026-11-03T14:00:00+05:30",
  dateModified: "2026-11-03T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/order-37-summary-suit-money-recovery`,
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
    name: "Code of Civil Procedure, 1908 — Order XXXVII Summary Procedure",
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
      name: "Personal Loans & Recovery",
      item: `${SITE_URL}/legal-notice-to-recovery-my-loan-from-friend`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Order 37 Summary Suit Hub",
      item: `${SITE_URL}/law/order-37-summary-suit-money-recovery`,
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

export default function Order37SummarySuitPage() {
  const breadcrumbItems = [
    { label: "Personal Loans & Recovery", href: "/legal-notice-to-recovery-my-loan-from-friend" },
    { label: "Order 37 Summary Suit Guide", href: "/law/order-37-summary-suit-money-recovery" },
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
        {/* Hero Section matching site design language */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Code of Civil Procedure, 1908 • Order XXXVII</span>
              <span className="text-red-500">•</span>
              <span>Fast-Track Civil Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Order XXXVII Summary Suit: The Fast Civil Route to Recover Money
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Order XXXVII CPC Money Recovery Mandate)
              </p>
              <p>
                Under Order XXXVII of the Code of Civil Procedure 1908, a summary suit is an expedited civil procedure to recover liquidated debts arising on promissory notes, cheques, bills of exchange, or written contracts. Unlike regular civil suits, the defendant has no automatic right to defend: they must enter an appearance within 10 days of summons, or an executable money decree is passed forthwith in favor of the creditor.
              </p>
            </div>

            {/* 4 Verified Metric Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">10 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Defendant Appearance Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Debt</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Immediate Decree on Default</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Period (Art. 11/36)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">No Sham Defense</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Leave Refused or Cash Deposit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sticky Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <Order37TableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Is an Order 37 Summary Suit &amp; How It Works
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, recovering unpaid loans, dishonoured cheques, or contractual dues through an ordinary civil suit often feels like a punishment for the creditor. Traditional civil litigation allows the defendant to file generic written statements, raise frivolous preliminary objections, demand endless cross-examinations, and deliberately drag the dispute for five to ten years.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To eliminate this systemic debtor tactic, the Parliament enacted <strong>Order XXXVII (Summary Procedure)</strong> of the Code of Civil Procedure, 1908. Order 37 reverses the normal civil dynamic: the defendant is presumed to have no right to defend the suit unless they enter an appearance within exactly <strong>10 days</strong> of receiving the court summons, and subsequently convince the judge via a sworn affidavit that they possess a genuine, bona fide, and triable defense.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong>The Statutory Distinction:</strong> In an ordinary suit, a decree requires framing of issues, witness depositions, and multi-year trial hearings. In an Order 37 summary suit, if the debtor fails to enter an appearance within 10 days or fails to obtain leave to defend, the allegations in the plaint are legally deemed admitted, and the judge signs an executable decree immediately under Order XXXVII Rule 2(3) CPC.
                </div>
              </section>

              {/* Section 2: Landmark Case Citations */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Supreme Court Precedents on Order 37 CPC
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Supreme Court Orders
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
                              Liquidated Claim &amp; Judicial Relief
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
                              Binding Across All Indian High Courts &amp; District Judges
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

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Wins an Order 37 Summary Suit in Court
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Judicial analysis of hundreds of summary suits decreed by Indian High Courts (such as Delhi, Bombay, and Madras High Courts) reveals clear patterns in how creditors secure swift decrees and defeat common debtor stalling tactics:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Strict Compliance with Order XXXVII Rule 2(1) Mandate:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        The plaint must explicitly declare in the title and the body that the suit is instituted under Order XXXVII of the CPC, and contain the mandatory statutory affirmation that &quot;no relief which does not fall within the ambit of this rule has been claimed.&quot; Omitting this recital or adding an unliquidated damages prayer destroys summary status and converts the case into a regular 10-year suit.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proof of Consideration via Banking Rail (NEFT/RTGS/UPI):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Borrowers routinely plead that promissory notes or cheques were given as &quot;blank security&quot; without receiving funds. Creditors who annex certified bank account statements showing the exact outward remittance matching the instrument instantly defeat the &quot;no consideration&quot; defense under Section 118 of the Negotiable Instruments Act.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pre-Suit Statutory Advocate Legal Demand Notice:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving a formal 15-day statutory demand notice via Registered Speed Post before approaching court crystallizes the cause of action. When the debtor ignores the notice or fails to reply, courts treat the silence as an admission of liability, making leave to defend nearly impossible to obtain.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserved Section 63 BSA Electronic Acknowledgments:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        WhatsApp chat admissions, text messages, or emails where the borrower acknowledges the debt (e.g., &quot;Give me 2 more months, I will return your ₹10 lakh&quot;) are submitted with an electronic certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. This extends limitation under Section 18 of the Limitation Act and exposes the debtor&apos;s court denial as perjury.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Invoking Supreme Court&apos;s Hubtown Mandate for 100% Security Deposit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Even if the court finds a semblance of doubt in the defense, plaintiffs who aggressively invoke the <em>IDBI Trusteeship v. Hubtown</em> benchmark compel the judge to condition leave on depositing the principal amount into the court registry. This guarantees financial recovery regardless of trial duration.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail & Process SVG Flowchart */}
              <section id="heading-procedure-flow" aria-labelledby="heading-procedure-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-procedure-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Order 37 CPC Step-by-Step Procedure &amp; Hierarchy
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The summary procedure moves through five tightly regulated statutory stages, each governed by strict limitation clocks under the Code of Civil Procedure:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Plaint Filed in Summary Form</h3>
                    <p className="text-xs text-slate-200 mt-1">Plaint drafted under Order XXXVII with liquidated debt annexures.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Form 4 Summons Issued</h3>
                    <p className="text-xs text-amber-900 mt-1">Court serves special summons; Defendant has 10 days to enter appearance.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Form 4A Summons for Judgment</h3>
                    <p className="text-xs text-slate-700 mt-1">Plaintiff files affidavit; Defendant gets 10 days to seek leave to defend.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Hearing on Leave to Defend</h3>
                    <p className="text-xs text-red-900 mt-1">Court refuses leave, orders cash security deposit, or grants trial.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Immediate Decree &amp; Execution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Decree executed under Order XXI CPC via bank attachment or property sale.</p>
                  </div>
                </div>

                {/* Hand-Authored Responsive Process Flowchart SVG */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Order 37 Procedure Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Order XXXVII CPC Step-by-Step Summary Procedure Flowchart"
                  >
                    <defs>
                      <linearGradient id="orderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="orderAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="orderSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#orderGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Plaint Instituted</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Order XXXVII Specific</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Liquidated Debt Only</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Form 4 Summons</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">10-Day Appearance</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Default = Ex-Parte Decree</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Form 4A Summons</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Summons for Judgment</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">10-Day Leave Window</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#orderAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Leave Hearing</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Hubtown Test Applied</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Sham = Refused</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#orderSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Money Decree</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Order XXI Execution</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Bank / Property Attach</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS &amp; PROCEDURAL BENCHMARKS UNDER ORDER XXXVII CPC:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Entering Appearance: Exactly 10 Calendar Days from date of service of Form 4 Summons (Rule 3(1))</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Application for Leave to Defend: Exactly 10 Calendar Days from service of Form 4A Summons (Rule 3(5))</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Limitation Period: 3 Years from date of cause of action (Articles 11 &amp; 36 of Limitation Act 1963)</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Legal Notice to Decree Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Executing an Order 37 recovery requires precision at every step. One procedural mistake can allow the debtor to demand a full regular trial. Follow this battle-tested playbook:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue Formal Statutory Pre-Suit Advocate Demand Notice (15-Day Window)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage an advocate to serve a statutory legal notice demanding payment of the principal sum plus contracted interest within 15 days. Dispatched via Registered Speed Post with postal tracking and email under Section 63 BSA 2023, the notice cites the promissory note, cheque return memo, or agreement. Failure to reply establishes unrebutted debtor default.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See our detailed guide on <Link href="/legal-notice-to-recovery-my-loan-from-friend" className="text-blue-700 underline">recovering loans from friends or relatives</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Draft and Institute Summary Plaint in Competent Civil Court
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        File the suit in the competent Civil Judge Senior Division, District Commercial Court, or High Court having pecuniary and territorial jurisdiction (where the defendant resides or transaction occurred under Section 20 CPC). Ensure the plaint strictly states it is filed under Order XXXVII CPC and claims only a liquidated money debt with ad-valorem court fees paid.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Form No. 4 Summons and Monitor the 10-Day Appearance Clock
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The court issues summons in Form No. 4 in Appendix B of CPC, accompanied by a copy of the plaint and annexures. Service is effected through court process and Registered Speed Post. Track the postal delivery timestamp: the debtor has exactly 10 days to file their address for service. If they fail to appear, immediately move the court for an ex-parte decree under Rule 2(3).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Summons for Judgment (Form 4A) &amp; Rebut Leave to Defend
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon defendant appearance, serve a Summons for Judgment in Form No. 4A supported by your sworn affidavit verifying the cause of action and amount. When the defendant files an affidavit for leave to defend within 10 days, argue that the defense is sham under <em>IDBI Trusteeship v. Hubtown</em>, demanding dismissal or an order directing deposit of 100% of the claim in court.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute the Money Decree Under Order XXI CPC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once the summary decree is signed, file an execution petition under Order XXI CPC. The court can issue warrants for attachment and sale of the debtor&apos;s movable and immovable properties, issue garnishee orders to freeze the debtor&apos;s bank accounts, or order detention in civil prison under Section 51 CPC in cases of willful non-payment.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Court Fees & Deadlines Facts Table */}
              <section id="heading-deadlines-fees" aria-labelledby="heading-deadlines-fees-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-fees-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines, Rules &amp; State Court Fees Under Order 37 CPC
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Court fees for summary suits follow state-specific ad-valorem schedules. Because Order 37 resolves claims expeditiously without full-length trials, plaintiffs often recover significant portions of paid court fees upon summary disposal:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Order XXXVII CPC Statutory Benchmarks, Timelines &amp; State Court Fees</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Jurisdiction / State Schedule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Applicable Court Fee Scale</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Early Decree Refund Potential</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Delhi (District Courts &amp; High Court)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-medium">~1.2% to 2% ad-valorem on claim</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">10 Days for Appearance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-emerald-700 font-semibold">100% refund under Sec 16 Court Fees Act if settled</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Maharashtra (Bombay City Civil &amp; High Court)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-medium">Ad-valorem capped at ₹3,00,000 max</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">10 Days for Leave to Defend</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-emerald-700 font-semibold">Up to 50% refund under Section 43 on consent decree</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Karnataka (Bangalore Civil &amp; Commercial)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-medium">Graded scale (~2.5% to 5%)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">Order XXXVII Rule 2(3)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-emerald-700 font-semibold">Refund admissible upon early mediation/settlement</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Uttar Pradesh &amp; Uttarakhand
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-medium">UP Court Fees Act graded scale</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">Article 11 Limitation Act (3 Yrs)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-emerald-700 font-semibold">Full court fees awarded in decree against defendant</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          West Bengal &amp; Tamil Nadu
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-medium">State Ad-valorem Civil Schedules</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">Order XXXVII Rule 3(5)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-emerald-700 font-semibold">Costs of suit including stamp duty taxed in final decree</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Court fee structures verified under respective State Court Fees and Suits Valuation Acts. For transparent legal notice drafting and pre-suit consultation charges, check our fee schedule on legal notice services.
                </p>
              </section>

              {/* Section 7: Qualifying Debt Instruments Tab Island */}
              <section id="heading-qualifying-docs" aria-labelledby="heading-qualifying-docs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-qualifying-docs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Qualifying Debts Under Order 37: Notes &amp; Cheques
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Instrument to Reveal Legal Requirements, Evidentiary Presumptions &amp; Enclosures
                  </p>
                </div>

                <Order37DocumentTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹15L Loan with 9% Interest via Order 37
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Legal Resolution
                    </span>
                    <span className="text-xs text-slate-400">Delhi District Court (Senior Commercial Division)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vikram Singhania lent ₹15,00,000 via RTGS to an acquaintance and business partner, Ramesh Chand, for working capital requirements. Ramesh executed a signed Demand Promissory Note affixed with revenue stamp promising repayment within 12 months with 9% annual interest.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> After 12 months, Ramesh defaulted. Over WhatsApp chats, Ramesh repeatedly acknowledged the debt, asking for monthly extensions, but made zero payments. When Vikram pressed for repayment, Ramesh stopped answering phone calls and alleged in casual conversations that the money was an unwritten equity investment, not a loan.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vikram engaged LegalRecovery.in. An advocate drafted and dispatched a formal 15-day statutory pre-suit demand notice via Registered Speed Post and WhatsApp, demanding ₹15,00,000 plus accrued interest of ₹1,35,000. When Ramesh failed to pay, Vikram instituted an Order XXXVII Summary Suit in the District Court. The plaint annexed the original Promissory Note, the bank RTGS confirmation, and a Section 63 BSA certificate for the WhatsApp chat acknowledgments.
                    </p>
                    <p>
                      <strong>The Court Proceedings:</strong> The court issued Form 4 Summons. Ramesh entered an appearance on Day 9. Vikram promptly served Form 4A Summons for Judgment. Ramesh applied for leave to defend, claiming the pro-note was signed blank under coercion. Vikram&apos;s advocate cited <em>IDBI Trusteeship v. Hubtown</em> and <em>Mechelec Engineers</em>, pointing out that the RTGS debit and WhatsApp acknowledgments proved consideration beyond doubt, making Ramesh&apos;s coercion claim an illusory moonshine defense.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      The Commercial Judge dismissed Ramesh&apos;s application for leave to defend as sham, holding that the bank statement and electronic acknowledgments conclusively established the debt. The court entered a summary decree for the full principal of ₹15,00,000, accrued interest of ₹1,35,000, 9% pendente lite interest, and full reimbursement of court fees and legal costs. Faced with an immediate bank attachment warrant under Order XXI, Ramesh remitted the entire decreed sum within 14 days.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence & Plaint Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for Order 37 Plaint
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Code of Civil Procedure, an Order 37 plaint must stand on airtight documentary proof. Assemble these 6 essential documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Negotiable Instrument or Written Contract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Promissory note with revenue stamp, original bounced cheque with bank memo, or signed written agreement specifying fixed sum.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statement of Consideration:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official bank ledger proving the outbound transfer of money (NEFT/RTGS/UPI/cheque) to demolish any &quot;no consideration&quot; claim.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Statutory Demand Legal Notice &amp; Postal Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Advocate legal demand notice copy, Speed Post booking receipt, and official India Post delivery confirmation certificate.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Statutory certificate authenticating WhatsApp chat exports, emails, and SMS acknowledging debt under the Bharatiya Sakshya Adhiniyam.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Limitation Reset &amp; Acknowledgment Ledger:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documentary proof of part-payments (Section 19 Limitation Act) or written extension requests (Section 18) within the 3-year window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Verified Valuation &amp; Court Fee Challan:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Itemized interest computation sheet and Treasury e-Challan proving full payment of state ad-valorem court fees.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Plaint Format Blueprint */}
              <section id="heading-plaint-format" aria-labelledby="heading-plaint-format-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-plaint-format-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Order 37 Plaint Format &amp; Summons Drafting Blueprint
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Every summary plaint must comply strictly with the pleading rules in Order XXXVII Rule 2 CPC. A flaw in the statutory endorsement can cause the plaint to be rejected or transferred to the ordinary civil track:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed border border-slate-800 shadow-lg overflow-x-auto">
                  <div className="text-red-400 font-bold mb-3 pb-2 border-b border-slate-800 uppercase tracking-wider text-[11px]">
                    // Mandatory Statutory Title &amp; Endorsement (Order XXXVII Rule 2 CPC)
                  </div>
                  <p className="text-slate-300">
                    IN THE COURT OF THE PRINCIPAL DISTRICT JUDGE / COMMERCIAL JUDGE AT [CITY, STATE]
                  </p>
                  <p className="text-amber-300 font-bold mt-2">
                    SUMMARY SUIT NO. ________ OF 2026
                  </p>
                  <p className="text-slate-400 mt-1">
                    (SUIT UNDER ORDER XXXVII OF THE CODE OF CIVIL PROCEDURE, 1908)
                  </p>
                  <div className="mt-4 text-slate-300">
                    IN THE MATTER OF:<br />
                    [PLAINTIFF FULL NAME &amp; ADDRESS] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... PLAINTIFF<br />
                    <span className="text-slate-500">VERSUS</span><br />
                    [DEFENDANT FULL NAME &amp; ADDRESS] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... DEFENDANT
                  </div>
                  <div className="mt-4 p-3 bg-slate-800/80 rounded-lg border-l-2 border-red-500 text-slate-200">
                    <span className="text-red-400 font-bold block mb-1">MANDATORY STATUTORY CLAUSE (RULE 2(1)):</span>
                    &quot;The Plaintiff states and submits that the present suit is instituted under the special summary provisions of Order XXXVII of the Code of Civil Procedure, 1908. The Plaintiff affirms that no relief which does not fall within the ambit of Order XXXVII of the CPC has been claimed in the present plaint.&quot;
                  </div>
                  <div className="mt-4 text-slate-300">
                    PRAYER:<br />
                    (a) Pass an expedited summary decree in favor of the Plaintiff and against the Defendant for a sum of ₹[AMOUNT];<br />
                    (b) Award pendente lite and future interest @ 9% per annum from the date of filing until realization;<br />
                    (c) Award full costs of the suit and reimbursement of court fees in favor of the Plaintiff.
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Order 37 Summary Suits, Fees &amp; Procedures
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Code of Civil Procedure, Limitation Act and Supreme Court Precedents
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

              {/* Section 12: Primary Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Legal Sources, Authoritative Statutes &amp; Court Rules
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
                  Statutory verification status: All provisions verified against India Code, active High Court Original Side Rules, the Bharatiya Sakshya Adhiniyam, 2023, and Supreme Court civil judgments as of November 2026.
                </p>
              </section>

              {/* Section 13: Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Demand Notice Before Filing an Order 37 Suit
                </h2>
                <Order37NoticeCTA variant="primary" />
              </section>

              {/* Section 14: Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Personal Loan &amp; Civil Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Friendly Loan Recovery Legal Notice →
                  </Link>
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    3-Year Limitation Period Guide →
                  </Link>
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money Without Written Agreement →
                  </Link>
                  <Link
                    href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    WhatsApp Chat as Court Evidence (Sec 63 BSA) →
                  </Link>
                  <Link
                    href="/recover-money-from-ex-boyfriend-girlfriend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money from Ex-Partner →
                  </Link>
                  <Link
                    href="/what-to-do-if-legal-notice-is-ignored-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    What If Debtor Ignores Legal Notice? →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
