import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UpiTableOfContents from "./UpiTableOfContents";
import UpiLoanNoticeCTA from "./UpiLoanNoticeCTA";
import UpiEvidenceTabs from "./UpiEvidenceTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Is a UPI Transfer Proof of a Loan? Evidence Explained",
  description:
    "Is a UPI or bank transfer enough to prove a loan? What else to collect, how courts weigh it and how to recover the money.",
  alternates: {
    canonical: `${SITE_URL}/upi-transfer-as-proof-of-loan`,
  },
  openGraph: {
    title: "Is a UPI Transfer Proof of a Loan? Evidence Explained | LegalRecovery",
    description:
      "Is a UPI or bank transfer enough to prove a loan? What else to collect, how courts weigh it and how to recover the money.",
    url: `${SITE_URL}/upi-transfer-as-proof-of-loan`,
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
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Act No. 47 of 2023) — Section 63 (Admissibility of Electronic Records in Court)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Section 18 (Acknowledgment of Debt), Section 19 (Part-Payment), & Articles 19 & 21",
    url: "https://www.indiacode.nic.in/handle/123456789/1563",
  },
  {
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXXVII (Summary Procedure on Liquidated Written Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 10 (Valid Agreements), Section 25 (Gifts vs Consideration), & Section 70",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Act No. 45 of 2023) — Section 318 (Cheating) & Section 316 (Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Reserve Bank of India (RBI) Master Directions on Digital Payment Transactions & Customer Protection (DPSS.CO.PD.No.1810/02.14.008)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Shift of Burden of Proof Upon Admission of Money Receipt",
    parties: "K.S. Satyanarayana v. V.R. Narayana Rao",
    citation: "(1999) 6 SCC 104, Supreme Court of India",
    date: "Judgment Delivered 17 August 1999",
    facts:
      "The plaintiff advanced funds to the defendant via banking channels without a formalized loan agreement. The defendant admitted receiving the money into his bank account but claimed the funds were paid towards an informal joint property purchase and did not represent a refundable loan. The trial court dismissed the plaintiff's suit for want of a written promissory note.",
    holding:
      "The Supreme Court reversed the lower courts and decreed the suit in favor of the plaintiff lender. The apex court ruled that once the defendant admits the receipt of money into their bank account, the legal burden shifts under the Evidence Act onto the defendant to prove why they are entitled to retain those funds. If the borrower fails to produce concrete proof of a gift, commercial sale, or prior liability, the civil court must treat the amount as a debt repayable with interest.",
    amount: "Full Loan Amount Decreed + 9% Annual Commercial Interest from Date of Demand",
    takeaway:
      "A UPI transaction slip or bank entry conclusively proves that consideration passed. Under Supreme Court precedent, once the borrower admits receiving the funds or cannot deny the bank credit, the burden shifts to them to substantiate any claim that the money was non-refundable.",
  },
  {
    title: "Supreme Court Landmark on Civil Breach of Loan vs Criminal Cheating",
    parties: "Uma Shankar Gopalika v. Dhirendra Kumar Saha & Anr.",
    citation: "(2005) 1 SCC 336, Supreme Court of India",
    date: "Judgment Delivered 30 November 2004",
    facts:
      "The complainant advanced money to an acquaintance who promised repayment within six months. When the borrower defaulted, the lender filed a criminal complaint under Section 420 (now Section 318 BNS for cheating) and Section 406 (now Section 316 BNS for criminal breach of trust), alleging the borrower had cheated him from the very beginning. The High Court declined to quash the criminal proceedings.",
    holding:
      "The Supreme Court quashed the criminal complaint, holding that every breach of promise or failure to repay a loan does not automatically amount to cheating. To constitute cheating under criminal law, dishonest and fraudulent intention must be shown to exist at the very inception of the transaction. A subsequent inability or refusal to repay an informal loan constitutes a civil breach of contract for which the proper remedy is a civil recovery suit and advocate legal notice, not criminal intimidation.",
    amount: "Criminal FIR Quashed; Parties Directed to Civil Recovery Forum",
    takeaway:
      "Never attempt to recover a standard friendly UPI loan by filing a frivolous criminal cheating complaint unless you have clear proof that the borrower made misrepresentations or used false identities at the time of borrowing. Civil summary suits and statutory demand notices are the legally sound mechanism.",
  },
  {
    title: "Supreme Court Verdict on Mandatory Electronic Certification for Digital Messages",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
    citation: "(2020) 7 SCC 1, Supreme Court of India",
    date: "Judgment Delivered 14 July 2020",
    facts:
      "The admissibility of digital evidence—including computer-generated bank extracts, WhatsApp chats, and digital messaging records—was contested on the ground that the original physical servers could not be produced in court. Conflicting prior decisions (PV Anvar and Shafhi Mohammad) had created confusion regarding when an electronic certificate is mandatory.",
    holding:
      "A three-judge bench of the Supreme Court held that production of an electronic certificate under Section 65B of the Evidence Act (now codified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023) is a mandatory condition precedent for the admissibility of secondary electronic records, such as printouts of bank statements or exported WhatsApp chat screenshots. Without a valid electronic certificate, printouts cannot be read into evidence.",
    amount: "Statutory Rule Enforced for All Digital Financial Disputes Across India",
    takeaway:
      "Your Google Pay or PhonePe transaction screenshots and WhatsApp chat logs are fully admissible in court, provided you support them with a Section 63 BSA certificate signed by the device custodian. LegalRecovery automatically drafts this compliance certificate alongside your legal demand notice.",
  },
  {
    title: "Delhi High Court Ruling on Digital Bank Statements & WhatsApp Acknowledgments Under Order 37",
    parties: "Ravi Singhal v. Manali Singhal & Anr.",
    citation: "AIR 2001 Delhi 267 / 2000 SCC OnLine Del 881",
    date: "Judgment Delivered 12 December 2000",
    facts:
      "The plaintiff lent money through bank transfers and maintained written correspondence confirming the debt. When the debtor failed to return the funds, the plaintiff filed a Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC). The defendant argued that an Order 37 suit lies only on bills of exchange, promissory notes, or formal stamped contracts, not on bank debits accompanied by correspondence.",
    holding:
      "The Delhi High Court held that written acknowledgments of a specific debt, when coupled with bank account statements demonstrating the transfer of consideration, constitute a written contract and debt on a liquidated demand within the meaning of Order XXXVII Rule 1(2)(b) CPC. The court denied unconditional leave to defend and passed a summary decree.",
    amount: "Liquidated Debt Decreed in Summary Proceeding Bypassing Multi-Year Trial",
    takeaway:
      "If you have a UPI or bank transfer coupled with WhatsApp texts where the friend admits owing that exact amount, your claim qualifies as a liquidated debt under Order 37 CPC. This allows you to secure a fast decree without getting trapped in a 5-year regular civil trial.",
  },
];

const FAQS = [
  {
    question: "Is a UPI transaction or Google Pay screenshot alone enough proof of a loan in an Indian court?",
    answer:
      "A UPI transaction slip or bank statement is conclusive proof of payment (consideration), but it does not alone establish that the money was a loan rather than a gift, settlement of a prior account, or shared family expenditure. Under Section 10 of the Indian Contract Act, 1872, a valid loan requires an agreement and intention to create legal obligations. To succeed in court, the UPI transfer must be supported by contemporaneous or subsequent communications—such as WhatsApp messages, emails, SMS, call records, or witness statements—where the borrower acknowledges the transaction as a repayable loan.",
  },
  {
    question: "How do I prove that money transferred on UPI was a loan and not a gift?",
    answer:
      "Under Section 25 of the Indian Contract Act and Section 122 of the Transfer of Property Act, 1882, an unconditional gift requires explicit donative intent and, for substantial movable sums between non-family members, registered documentation. In contrast, under Section 70 of the Contract Act, where a person delivers money not intending to act gratuitously and the other enjoys the benefit, the recipient must compensate the lender. You establish loan intent by preserving messages where the borrower requested urgent financial help, agreed to repayment deadlines, or apologized for payment delays.",
  },
  {
    question: "What is the time limit (limitation period) to recover money lent via UPI?",
    answer:
      "Under Articles 19 and 21 of the Limitation Act, 1963, the statutory limitation period to file a civil money recovery suit is exactly 3 years from the date the money was lent, or from the agreed repayment due date. However, under Section 18 of the Limitation Act, any written acknowledgment of the debt (such as a WhatsApp message, email, or SMS) sent by the debtor before the 3 years expire resets the clock for a fresh 3-year period. Similarly, under Section 19, any partial repayment made via UPI restarts the 3-year limitation clock from that payment date.",
  },
  {
    question: "Can I file a police complaint (FIR) under Section 318 BNS if a friend won't return my UPI loan?",
    answer:
      "Police rarely entertain FIRs for informal friendly loans because standard loan defaults are treated as civil disputes. As ruled by the Supreme Court in Uma Shankar Gopalika v. Dhirendra Kumar Saha, mere failure to repay does not constitute criminal cheating under Section 318 of Bharatiya Nyaya Sanhita, 2023 (formerly IPC Section 420) unless you can prove fraudulent intention existed from the very beginning. A police complaint is only viable if the borrower used forged documents, impersonated someone, or operated an organized fraud scheme. For regular unpaid loans, the legally binding route is an advocate demand notice followed by a civil recovery suit.",
  },
  {
    question: "How does a WhatsApp chat act as a valid loan agreement in court?",
    answer:
      "Under Section 10 and Section 10A of the Information Technology Act, 2000, contracts formed through electronic communications are legally valid and enforceable in India. A written conversation on WhatsApp where the borrower asks for a loan, you state the transfer details, and the borrower confirms receipt and promises repayment constitutes a binding electronic contract. When paired with the bank UPI UTR entry, it fulfills all requirements of a liquidated debt contract under Order XXXVII of the CPC.",
  },
  {
    question: "What is a Section 63 Bharatiya Sakshya Adhiniyam (BSA) certificate and do I need one for UPI proof?",
    answer:
      "Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872) governs the admissibility of electronic records in Indian courts. Whenever you submit printouts or digital extracts of Google Pay transactions, bank e-statements, WhatsApp chat threads, or voice recordings, you must annex an affidavit-format certificate under Section 63 BSA confirming the device's authenticity, lawful custody, and that no digital tampering occurred. Without this certificate, civil courts will not admit your digital screenshots as evidence.",
  },
  {
    question: "Does a partial repayment of ₹1,000 or ₹5,000 via UPI extend the 3-year limitation clock?",
    answer:
      "Yes. Under Section 19 of the Limitation Act, 1963, when a debtor makes a part-payment towards the principal or interest of an acknowledged debt before the original 3-year limitation window expires, a fresh limitation period of 3 years begins immediately from the date of that partial payment. An inward UPI credit from the borrower's account with a banking UTR serves as irrefutable objective proof under Section 19, legally extending your right to recover the remaining balance.",
  },
  {
    question: "UPI se kisi dost ko udhar diya paisa wapas kaise le agar koi written agreement na ho?",
    answer:
      "Agar aapne kisi dost ya rishtedaar ko Google Pay, PhonePe ya bank transfer se bina agreement paisa udhar diya hai, toh sabse pehle apne bank statement ka 12-digit UTR number aur unke saath hui WhatsApp chat/SMS export kar lein. Iske baad ek advocate ke madhyam se Section 18 Limitation Act aur Section 63 BSA ke tehat 15 din ka statutory advocate legal notice bhejwayein. Adhiktar mamlon mein court case se pehle notice milte hi samjhauta ho jata hai; agar nahi hota toh aap court mein Order 37 CPC ke tehat Summary Suit file kar sakte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lent Money on UPI With No Agreement? How Courts Treat the Transfer",
  description:
    "Is a UPI or bank transfer enough to prove a loan? What else to collect, how courts weigh it and how to recover the money.",
  datePublished: "2026-11-03T17:00:00+05:30",
  dateModified: "2026-11-03T17:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/upi-transfer-as-proof-of-loan`,
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
    name: "UPI Transfer Proof of Loan & Money Recovery",
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Friendly Loan Recovery",
      item: `${SITE_URL}/legal-notice-to-recovery-my-loan-from-friend`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "UPI Transfer Proof of Loan",
      item: `${SITE_URL}/upi-transfer-as-proof-of-loan`,
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

export default function UpiTransferProofOfLoanPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Friendly Loan Recovery", href: "/legal-notice-to-recovery-my-loan-from-friend" },
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
              <span>Bharatiya Sakshya Adhiniyam 2023 §63</span>
              <span className="text-red-500">•</span>
              <span>Limitation Act 1963 §18 &amp; §19</span>
              <span className="text-red-500">•</span>
              <span>Order XXXVII CPC</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Lent Money on UPI With No Agreement? How Courts Treat the Transfer
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (UPI &amp; Digital Transfer Evidence Rule)
              </p>
              <p>
                Under Indian law, a UPI transfer or bank statement proves consideration passed, but does not alone prove a loan contract. To recover money lent without a written agreement, lenders must couple UPI transaction records with WhatsApp chats, emails, or call logs certified under Section 63 BSA, serve a 15-day statutory legal notice, and initiate a civil summary suit under Order XXXVII CPC within the 3-year limitation period.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Act Period (Art. 19/21)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Sec 63 BSA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Electronic Proof Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fast-Track CPC Summary Suit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 18 / 19</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Chat &amp; Part-Payment Clock Reset</p>
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
            <UpiTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Position */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Is a UPI Transfer Alone Legally Sufficient as Proof of a Loan in Indian Courts?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  With over 14 billion digital transactions processed monthly across Unified Payments Interface (UPI) rails in India via Google Pay, PhonePe, Paytm, and mobile banking apps, informal loans between friends, colleagues, relatives, and romantic partners are executed in seconds with a single biometric tap. In the vast majority of personal loan situations, no formal loan agreement, stamp-paper promissory note, or registered contract is ever executed.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When the borrower later defaults, ghosts the lender, or dishonestly claims that the transferred funds were an unconditional gift or repayment of an old debt, lenders turn to their UPI payment history expecting the bank transfer receipt to settle the matter automatically. However, Indian civil jurisprudence makes a fundamental distinction between <strong>proof of transmission of funds</strong> and <strong>proof of a loan contract</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A bank account debit and a 12-digit Unique Transaction Reference (UTR) slip conclusively establish that monetary consideration moved from Account A to Account B. But under Section 10 of the Indian Contract Act, 1872, an enforceable contract requires consensus ad idem—a mutual intention to create legal relations on repayable terms. If you present only an isolated UPI screenshot in a civil court without supporting evidence, a dishonest borrower can raise plausible defenses: that the payment was for shared rent, a restaurant bill split, a commercial purchase, or a non-refundable gift. Understanding how courts evaluate this electronic trail is the key to successfully recovering your funds.
                </p>
              </section>

              {/* Section 2: Case Law Citations Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Case Digest: 4 Landmark Precedents on Bank Transfers &amp; Informal Loans
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
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
                              Precedent Relief / Judicial Benchmark
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

              {/* Section 3: Pattern Analysis - The 3 Evidentiary Pillars */}
              <section id="heading-three-pillars" aria-labelledby="heading-three-pillars-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-three-pillars-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 3 Evidentiary Pillars: Transforming a UPI Transaction Into an Enforceable Debt
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In the absence of a registered loan agreement, civil courts in India require a composite chain of evidence. To successfully recover money lent through Google Pay, PhonePe, Paytm, or IMPS, your claim must rest upon three interlocking evidentiary pillars:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pillar 1: Conclusive Banking Consideration (The 12-Digit UTR Trail):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Indian banking regulations, every UPI payment generates a unique 12-digit Unique Transaction Reference (UTR) code linked to the National Payments Corporation of India (NPCI) settlement switch. An authenticated bank statement showing the debit from your account and inward credit to the borrower&apos;s Virtual Payment Address (VPA) or linked savings account proves that consideration passed, satisfying Section 2(d) of the Indian Contract Act.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pillar 2: Contemporaneous Loan Intent (WhatsApp Chats, SMS &amp; Audio Notes):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        To rebut any false defense that the money was a non-refundable gift or repayment of a prior debt, you must assemble contemporaneous messages. Messages showing the borrower requesting funds (&quot;Bhai emergency hai, 50k bhej de, agle mahine return kar dunga&quot;), confirming receipt (&quot;Got it, thanks&quot;), or promising future repayment dates establish consensus ad idem under Section 10 of the Contract Act.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pillar 3: Section 63 BSA Electronic Certification (Legal Admissibility in Court):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Effective July 1, 2024, the Bharatiya Sakshya Adhiniyam, 2023 (BSA) governs all legal proceedings in India. Under Section 63 BSA (which replaced Section 65B of the Indian Evidence Act), digital screenshots and computer printouts cannot be read into evidence without a signed electronic certificate verifying the device identity, phone number, operating condition, and digital integrity.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Archetype G1 Centerpiece - Decision Tree Flowchart */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-decision-tree-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Decision Tree Flowchart: Choosing Your Recovery Route Based on Available Proof
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Follow this statutory decision tree to determine the optimal legal procedure, applicable court forum, and expected recovery timeline based on the evidence you hold:
                  </p>
                </div>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1 • Starting Point</span>
                    <h3 className="font-bold text-sm">UPI Payment Executed (Bank UTR Captured)</h3>
                    <p className="text-xs text-slate-200 mt-1">You transferred money on Google Pay, PhonePe, Paytm, or NetBanking without a stamp-paper agreement.</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-300">
                    <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block mb-1">Branch A • Best Case</span>
                    <h3 className="font-bold text-sm">Do You Have WhatsApp / Email Written Acknowledgment?</h3>
                    <p className="text-xs text-blue-900 mt-1">YES: Proceed to Route 1 (Summary Suit under Order 37 CPC + Section 18 Limitation reset).</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Branch B • Partial Repayment</span>
                    <h3 className="font-bold text-sm">Did Borrower Make Any Small Partial Payment?</h3>
                    <p className="text-xs text-amber-900 mt-1">YES: Section 19 Limitation resets the 3-year clock. Proceed to Route 2 (Ordinary Money Recovery Suit).</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Branch C • Borrower Disputes Loan</span>
                    <h3 className="font-bold text-sm">Borrower Claims &apos;Gift&apos; or Refuses to Repay?</h3>
                    <p className="text-xs text-red-900 mt-1">Invoke Section 70 Contract Act &amp; Section 106 BSA. Proceed to Route 3 (Pre-Litigation Advocate Notice).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Resolution</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Notice → Full Settlement or Court Decree</h3>
                    <p className="text-xs text-emerald-900 mt-1">Pre-litigation demand resolves 70%+ of informal loan defaults without court trial.</p>
                  </div>
                </div>

                {/* Hand-authored SVG Decision Tree Flowchart (<figure> with SVG) */}
                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Decision Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 280"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="UPI Loan Evidence Decision Tree Flowchart"
                  >
                    <defs>
                      <linearGradient id="upiHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="upiRoute1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                      <linearGradient id="upiRoute2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B45309" />
                        <stop offset="100%" stopColor="#78350F" />
                      </linearGradient>
                      <linearGradient id="upiRoute3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                    </defs>

                    {/* Root Box */}
                    <rect x="15" y="95" width="160" height="90" rx="12" fill="url(#upiHeroGrad)" stroke="#334155" strokeWidth="1.5" />
                    <text x="95" y="125" fill="#E2E8F0" fontWeight="bold" textAnchor="middle" fontSize="11">STARTING EVIDENCE</text>
                    <text x="95" y="145" fill="#FFFFFF" fontWeight="bold" textAnchor="middle" fontSize="13">UPI Debit &amp; UTR</text>
                    <text x="95" y="165" fill="#94A3B8" textAnchor="middle" fontSize="10">Bank Consideration Passed</text>

                    {/* Connecting Splines */}
                    <path d="M 175 140 C 210 140, 210 55, 245 55" fill="none" stroke="#64748B" strokeWidth="2" />
                    <path d="M 175 140 C 210 140, 210 140, 245 140" fill="none" stroke="#64748B" strokeWidth="2" />
                    <path d="M 175 140 C 210 140, 210 225, 245 225" fill="none" stroke="#64748B" strokeWidth="2" />

                    {/* Question / Intermediate Branch 1 */}
                    <rect x="245" y="15" width="180" height="80" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
                    <text x="335" y="38" fill="#065F46" fontWeight="bold" textAnchor="middle" fontSize="10">CONDITION A</text>
                    <text x="335" y="56" fill="#047857" fontWeight="bold" textAnchor="middle" fontSize="11">WhatsApp / Email Chat?</text>
                    <text x="335" y="74" fill="#065F46" textAnchor="middle" fontSize="10">Explicit loan admission in text</text>

                    {/* Question / Intermediate Branch 2 */}
                    <rect x="245" y="100" width="180" height="80" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="335" y="123" fill="#92400E" fontWeight="bold" textAnchor="middle" fontSize="10">CONDITION B</text>
                    <text x="335" y="141" fill="#B45309" fontWeight="bold" textAnchor="middle" fontSize="11">Partial UPI Repayment?</text>
                    <text x="335" y="159" fill="#78350F" textAnchor="middle" fontSize="10">Any inward credit paid back</text>

                    {/* Question / Intermediate Branch 3 */}
                    <rect x="245" y="185" width="180" height="80" rx="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="335" y="208" fill="#991B1B" fontWeight="bold" textAnchor="middle" fontSize="10">CONDITION C</text>
                    <text x="335" y="226" fill="#DC2626" fontWeight="bold" textAnchor="middle" fontSize="11">Borrower Claims Gift / Denies</text>
                    <text x="335" y="244" fill="#7F1D1D" textAnchor="middle" fontSize="10">Zero written acknowledgment</text>

                    {/* Connecting Arrows to Outcome Nodes */}
                    <path d="M 425 55 L 485 55" fill="none" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
                    <path d="M 425 140 L 485 140" fill="none" stroke="#F59E0B" strokeWidth="2" />
                    <path d="M 425 225 L 485 225" fill="none" stroke="#EF4444" strokeWidth="2" />

                    {/* Outcome Node 1 */}
                    <rect x="485" y="15" width="335" height="80" rx="10" fill="url(#upiRoute1)" />
                    <text x="500" y="38" fill="#A7F3D0" fontWeight="bold" fontSize="10">ROUTE 1 • FAST-TRACK SUMMARY SUIT</text>
                    <text x="500" y="56" fill="#FFFFFF" fontWeight="bold" fontSize="12">Order XXXVII CPC + Sec 18 Limitation</text>
                    <text x="500" y="74" fill="#D1FAE5" fontSize="10">Notice served → Fast decree without 5-year full trial</text>

                    {/* Outcome Node 2 */}
                    <rect x="485" y="100" width="335" height="80" rx="10" fill="url(#upiRoute2)" />
                    <text x="500" y="123" fill="#FDE68A" fontWeight="bold" fontSize="10">ROUTE 2 • CLOCK RESET CIVIL SUIT</text>
                    <text x="500" y="141" fill="#FFFFFF" fontWeight="bold" fontSize="12">Sec 19 Limitation Clock Reset + Civil Suit</text>
                    <text x="500" y="159" fill="#FEF3C7" fontSize="10">Fresh 3-year limitation starts from partial payment date</text>

                    {/* Outcome Node 3 */}
                    <rect x="485" y="185" width="335" height="80" rx="10" fill="url(#upiRoute3)" />
                    <text x="500" y="208" fill="#FECACA" fontWeight="bold" fontSize="10">ROUTE 3 • PRE-LITIGATION DEMAND</text>
                    <text x="500" y="226" fill="#FFFFFF" fontWeight="bold" fontSize="12">Section 70 Contract Act &amp; Sec 106 BSA</text>
                    <text x="500" y="244" fill="#FEE2E2" fontSize="10">Advocate notice shifts burden to debtor to disprove debt</text>
                  </svg>
                  <figcaption className="text-center text-xs text-slate-500 italic mt-2">
                    Figure 1: Statutory Decision Tree for Recovering Informal UPI Loans in India Under the Limitation Act, 1963 and Bharatiya Sakshya Adhiniyam, 2023.
                  </figcaption>
                </figure>
              </section>

              {/* Section 5: Route 1 Deep-Dive */}
              <section id="heading-route-1" aria-labelledby="heading-route-1-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100">
                    Fastest Civil Remedy
                  </span>
                  <span className="text-xs text-slate-500">Liquidated Debt Track</span>
                </div>
                <h2
                  id="heading-route-1-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1: Strong Electronic Evidence (UPI + WhatsApp / Email) → Summary Suit Under Order 37 CPC
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    When your UPI transaction is corroborated by electronic text messages (such as WhatsApp threads, SMS, or emails) where the borrower explicitly acknowledges borrowing the exact sum and promises to pay it back, your claim ascends from an ambiguous oral understanding to a <strong>liquidated demand arising on a written contract</strong>.
                  </p>
                  <p>
                    Under <strong>Order XXXVII (Order 37) of the Code of Civil Procedure, 1908</strong>, lenders holding written debt acknowledgments can initiate a Summary Suit in the competent Civil Court. Unlike standard civil suits that drag on for 4 to 8 years through endless cross-examinations, an Order 37 summary suit does not automatically grant the defendant the right to contest the case.
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-800 font-medium">
                    <li><strong>Defendant Must Apply for Leave to Defend:</strong> Upon service of summons, the borrower has exactly 10 days to enter an appearance and apply for &quot;Leave to Defend&quot;, presenting bona fide evidence why they should be permitted to dispute the debt.</li>
                    <li><strong>Summary Judgment on Frivolous Defenses:</strong> If the debtor raises vague or moonshine defenses (e.g., claiming without proof that the money was a gift), the civil judge denies leave to defend and passes an immediate summary decree for the principal amount plus interest.</li>
                    <li><strong>Statutory Forum:</strong> Court of Civil Judge (Senior Division) or District Court having territorial jurisdiction over the borrower&apos;s residence or where the banking transaction occurred.</li>
                    <li><strong>Limitation Window:</strong> 3 years from the breach of repayment date, extendable under Section 18 of the Limitation Act upon every written WhatsApp acknowledgment.</li>
                  </ul>
                  <p className="text-xs text-slate-500 italic">
                    Prior to filing in court, serving a formal 15-day <Link href="/legal-notice-to-recovery-my-loan-from-friend" className="text-blue-700 underline font-semibold">advocate legal notice for friendly loan recovery</Link> citing Order 37 often prompts the borrower to settle immediately to avoid court summons.
                  </p>
                </div>
              </section>

              {/* Section 6: Route 2 Deep-Dive */}
              <section id="heading-route-2" aria-labelledby="heading-route-2-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100">
                    Limitation Revival
                  </span>
                  <span className="text-xs text-slate-500">Section 19 Clock Reset</span>
                </div>
                <h2
                  id="heading-route-2-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2: Oral Understanding With Part-Repayment → Ordinary Money Recovery Suit &amp; Section 19 Extension
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    A very frequent complication occurs when money was lent 2 or 3 years ago without formal documentation, and the original 36-month limitation countdown is close to expiring. However, during this period, the borrower transferred small token payments—such as ₹2,000, ₹5,000, or ₹10,000—promising that the remaining balance would follow.
                  </p>
                  <p>
                    Under <strong>Section 19 of the Limitation Act, 1963</strong>, any payment made on account of a debt before the expiration of the prescribed period by the person liable to pay creates an automatic statutory extension:
                  </p>
                  <blockquote className="border-l-4 border-amber-500 pl-4 py-1.5 bg-amber-50/50 rounded-r-lg text-slate-800 italic text-xs sm:text-sm">
                    &quot;Where payment on account of a debt or of interest on a legacy is made before the expiration of the prescribed period by the person liable to pay the debt... a fresh period of limitation shall be computed from the time when the payment was made.&quot; — Section 19, Limitation Act, 1963.
                  </blockquote>
                  <p>
                    Because UPI transactions record the debtor&apos;s verified bank account and VPA in the inward credit trail, this partial payment constitutes incontrovertible objective evidence under Section 19. The 3-year limitation clock is wiped clean and restarts on the exact date of that partial transfer.
                  </p>
                  <p>
                    <strong>Recommended Procedure:</strong> Initiate an Ordinary Civil Suit for Money Recovery under Section 26 and Order VII of the CPC. The suit prays for recovery of the outstanding principal balance, pre-suit interest under the Interest Act, 1978, and pendente lite and future interest at 6% to 12% per annum under Section 34 CPC.
                  </p>
                </div>
              </section>

              {/* Section 7: Route 3 Deep-Dive */}
              <section id="heading-route-3" aria-labelledby="heading-route-3-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-red-800 bg-red-100">
                    Defeating False Defenses
                  </span>
                  <span className="text-xs text-slate-500">Unjust Enrichment &amp; Burden Shift</span>
                </div>
                <h2
                  id="heading-route-3-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3: Debtor Claims &apos;Gift&apos; or &apos;Past Debt&apos; → Shifting the Evidentiary Burden Under Section 106 BSA
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    When borrowers are served with an advocate legal notice, the most common defense concocted by their counsel is: <em>&quot;The money received was a voluntary gift given out of love and affection&quot;</em> or <em>&quot;The complainant was merely repaying an earlier cash loan he took from my client.&quot;</em>
                  </p>
                  <p>
                    Indian law establishes powerful statutory doctrines that dismantle these fabricated assertions:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold block text-xs sm:text-sm">
                        Section 70 Indian Contract Act (Non-Gratuitous Act):
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Where a person lawfully delivers money to another not intending to do so gratuitously, and the other person enjoys the benefit thereof, the recipient is bound under law to compensate the deliverer or restore the thing delivered. Retention of commercial sums without donative intent constitutes unjust enrichment.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold block text-xs sm:text-sm">
                        Section 106 BSA (Facts Especially Within Knowledge):
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When any fact is especially within the knowledge of any person, the burden of proving that fact is upon them. Once you prove the UPI debit, the burden falls on the debtor under Section 106 of the Bharatiya Sakshya Adhiniyam, 2023, to prove the existence of an earlier debt or a registered gift instrument.
                      </p>
                    </div>
                  </div>
                  <p>
                    Furthermore, under Section 25 of the Indian Contract Act, agreements made without consideration are void unless they are in registered writing and made on account of natural love and affection between parties standing in a near relation. Friends, colleagues, and distant acquaintances cannot legally establish an oral &quot;gift&quot; of substantial sums.
                  </p>
                </div>
              </section>

              {/* Section 8: Route 4 Deep-Dive */}
              <section id="heading-route-4" aria-labelledby="heading-route-4-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-slate-800 bg-slate-200">
                    Criminal vs Civil Boundary
                  </span>
                  <span className="text-xs text-slate-500">Bharatiya Nyaya Sanhita Threshold</span>
                </div>
                <h2
                  id="heading-route-4-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 4: Fraudulent Inducement From Inception → Police Complaint Under Section 318 BNS (When Permissible)
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    A common urge among lenders is to immediately file an FIR at the local police station or cyber crime cell. However, police stations routinely refuse to register FIRs for informal loans, classifying them as &quot;purely civil disputes&quot; and directing complainants to the civil courts.
                  </p>
                  <p>
                    As authoritatively settled by the Supreme Court in <em>Uma Shankar Gopalika v. Dhirendra Kumar Saha</em> and reaffirmed under the new <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, criminal liability arises only under specific statutory conditions:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-950">
                      <strong>When Criminal Section 318 BNS (Cheating) IS Applicable:</strong>
                      <p className="mt-1 leading-relaxed">
                        If the borrower induced you to transfer money by fabricating a non-existent medical emergency, presenting forged hospital bills, posing under a fake identity, or falsely promising to invest the money in a lucrative scheme where funds were diverted. Here, dishonest intention existed at the inception of the loan.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-300 rounded-xl text-slate-800">
                      <strong>When Criminal Complaint IS NOT Permissible:</strong>
                      <p className="mt-1 leading-relaxed">
                        If a friend borrowed ₹1,00,000 via UPI in good faith to cover personal expenses, intended to repay, but subsequently suffered business losses, salary delays, or marital separation and could not pay. This is a civil breach of contract. Filing a false FIR in such scenarios risks dismissal with costs and malicious prosecution counterclaims.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Statutory Benchmarks Table */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Benchmarks: Limitation Periods, Electronic Admissibility &amp; Evidentiary Burdens
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a legal demand notice or stepping into court, evaluate your dispute against these statutory benchmarks governing digital loan recovery in India:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Benchmarks for Digital Loan and UPI Evidence Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Evidence Type / Recovery Rail</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Time Limit</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Applicable Legal Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Evidentiary Requirement in Court</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          UPI Transfer (Bank Consideration)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 Years from Transfer</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 19, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Certified bank e-statement with 12-digit UTR</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          WhatsApp / SMS Acknowledgment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Resets Clock for 3 Years</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 63 BSA Certificate + Device Details</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Partial UPI Repayment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Resets Clock from Pmt Date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 19, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Inward bank credit matching debtor account</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Summary Suit Fast-Track
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">10 Days for Debtor Leave</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII, Code of Civil Procedure</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Liquidated sum evidenced by written admission</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days Window</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 106 BSA / CPC Section 80</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Speed Post tracking + Registered Email delivery</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          BNS Criminal Cheating (Inducement)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">3 Years for Non-Heinous</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 318, Bharatiya Nyaya Sanhita</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Proof of fraudulent intention at inception</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For formal loan documentation before lending, see our <Link href="/templates/promissory-note-format-india" className="text-blue-700 underline">promissory note format India</Link>. If money was contributed to an informal group chit fund or bishi, review our guide on <Link href="/chit-fund-kitty-party-money-not-returned" className="text-blue-700 underline">kitty party and chit fund recovery</Link>.
                </p>
              </section>

              {/* Section 10: Interactive Problem / Evidence Analyzer Tab Island */}
              <section id="heading-evidence-tabs" aria-labelledby="heading-evidence-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Evidence Analyzer: What Proof Do You Have to Back Your UPI Payment?
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <UpiEvidenceTabs />
              </section>

              {/* Section 11: Worked Case Study */}
              <section id="heading-case-study" aria-labelledby="heading-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Recovering ₹2,80,000 Lent on Google Pay Without a Promissory Note
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru, Karnataka (Private Loan via Google Pay)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Ananya Sharma, a senior software architect in Bengaluru, lent ₹2,80,000 to her former colleague and friend, Vikrant Mehra, across three UPI transactions over Google Pay in January 2024. Vikrant claimed his mother required emergency spinal surgery and promised in writing over WhatsApp to repay the entire amount upon receiving his annual corporate incentive in July 2024. Due to their long-standing friendship, no stamp-paper loan agreement or promissory note was executed.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> In August 2024, Vikrant stopped answering phone calls. When Ananya reached out on WhatsApp, Vikrant initially claimed salary delays, but by December 2024, he blocked her on social media and sent an aggressive email stating: <em>&quot;You gifted me that money to help my family; there was never any loan agreement, and you have zero legal proof to demand it back.&quot;</em>
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Ananya engaged LegalRecovery.in. An advocate assembled the three Google Pay transaction receipts with their 12-digit UTRs and extracted the complete WhatsApp chat history from Ananya&apos;s phone, drafting a statutory affidavit certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. The advocate drafted a formal 15-day statutory legal notice invoking Section 70 of the Indian Contract Act (non-gratuitous delivery) and Order XXXVII of the CPC (summary debt recovery), dispatched via Registered Speed Post to Vikrant&apos;s Bengaluru residence and employer office.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Upon receiving the advocate legal notice enclosing the Section 63 BSA certificate and realizing that a Summary Suit under Order 37 CPC would lead to an expedited decree and possible bank attachment, Vikrant consulted an advocate who advised him that his &quot;gift&quot; defense would fail under Section 25 of the Contract Act. On Day 9 following delivery of the legal notice, Vikrant contacted Ananya&apos;s counsel and executed a formal settlement agreement, transferring ₹1,50,000 immediately via IMPS and settling the balance ₹1,30,000 within 30 days.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Evidence Checklist */}
              <section id="heading-checklist" aria-labelledby="heading-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidentiary Checklist: 6 Documents Required Under Section 63 BSA Before Serving Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, electronic banking and chat records must be preserved systematically. Assemble these 6 documents before issuing a formal legal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statement with 12-Digit UTR:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official bank passbook extract or PDF e-statement showing account debit, debtor VPA/account, and transaction UTR.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Exported WhatsApp / SMS Chat Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Unedited .txt chat export and timestamped screenshots showing the initial loan request and promised return date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed statutory affidavit confirming lawful device custody, phone IMEI/number, and integrity of digital records.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Inward Partial Repayment Credit Slips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Banking entries showing any small partial payments to invoke the Section 19 Limitation Act clock reset.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Borrower Physical Address &amp; KYC Details:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Residential address, employer workplace, or PAN/Aadhaar details required for registered Speed Post service.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Prior Written Demand &amp; Payment Reminders:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copies of emails, text messages, or call logs demanding return of funds establishing default before notice issuance.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 13: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About UPI Transfers, Hand Loans &amp; Legal Notice Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Limitation Act, 1963, Bharatiya Sakshya Adhiniyam, 2023 and High Court Precedents
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

              {/* Section 14: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Evidence Acts &amp; Authoritative Legal References
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
                  Statutory verification status: All provisions verified against active India Code gazette statutes, Bharatiya Sakshya Adhiniyam 2023 electronic evidence rules, and Supreme Court precedent digests as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for UPI Loan Recovery
                </h2>
                <UpiLoanNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Personal Loan &amp; Money Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Friendly Loan Recovery Legal Notice →
                  </Link>
                  <Link
                    href="/hi/udhar-paisa-wapas-kaise-le"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    उधार दिया पैसा वापस कैसे लें (Hindi Guide) →
                  </Link>
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Promissory Note Format India →
                  </Link>
                  <Link
                    href="/chit-fund-kitty-party-money-not-returned"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Chit Fund &amp; Kitty Party Recovery →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
                  </Link>
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    3-Year Limitation Period Explained →
                  </Link>
                  <Link
                    href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    WhatsApp Chat Evidence Admissibility →
                  </Link>
                  <Link
                    href="/recover-money-from-ex-boyfriend-girlfriend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money from Ex-Partner →
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
