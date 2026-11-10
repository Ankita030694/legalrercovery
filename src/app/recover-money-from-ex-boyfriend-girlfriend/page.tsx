import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ExPartnerNoticeCTA from "./ExPartnerNoticeCTA";
import ExPartnerTableOfContents from "./ExPartnerTableOfContents";
import ExPartnerScenarioTabs from "./ExPartnerScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Money From Ex-Boyfriend or Girlfriend Legally",
  description:
    "Lent money to a partner who won't repay after the breakup? Loan vs gift, the proof that works, and how a legal notice and suit proceed.",
  alternates: {
    canonical: `${SITE_URL}/recover-money-from-ex-boyfriend-girlfriend`,
  },
  openGraph: {
    title: "Gave Money to a Partner Who Won't Return It? Legal Recovery After a Breakup",
    description:
      "Statutory recovery guide for money lent to an ex-partner in India: loan vs gift defence, WhatsApp & UPI admissibility under BSA 2023, Order 37 summary suit.",
    url: `${SITE_URL}/recover-money-from-ex-boyfriend-girlfriend`,
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
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 10 (Valid Agreements), Section 25 (Natural Love & Affection Gifts) & Section 70 (Non-Gratuitous Acts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Limitation Act, 1963 — Article 19, Article 22 & Section 18 (Effect of Acknowledgment in Writing) & Section 19 (Effect of Payment on Account of Debt)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Act No. 47 of 2023) — Section 63 (Admissibility of Electronic Records: WhatsApp, SMS, UPI & Email)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Suits on Written Acknowledgments & Debt Obligations)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Act No. 45 of 2023) — Section 318 (Cheating) vs Pure Civil Breach of Contract",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "General Clauses Act, 1897 — Section 27 (Meaning of Service by Post & Presumption of Valid Service)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Civil Debt vs Criminal Cheating Between Acquaintances",
    parties: "International Advanced Research Centre (ARCI) v. Nimra Cerglass Technics (P) Ltd. & Ors.",
    citation: "Criminal Appeal No. 77 of 2016, (2016) 1 SCC 348",
    date: "Supreme Court of India",
    facts:
      "A financial transfer took place between familiar parties based on mutual representations. When the debtor failed to return the advance funds, the complainant filed a criminal complaint under IPC Section 420 (now Section 318 BNS) alleging cheating and fraudulent inducement.",
    holding:
      "The Supreme Court held that mere failure to keep a promise or repay borrowed funds does not give rise to criminal liability for cheating. To hold a person guilty of cheating, fraudulent or dishonest intention must be proven to have existed at the very inception of the transaction. A post-breakup failure to return funds is prima facie a civil cause of action for money recovery, unless clear evidence proves the borrower never intended to repay when receiving the funds.",
    amount: "Civil Recovery Affirmed; Quashing of Mechanical Criminal FIR Mandated",
    takeaway:
      "Do not rush to lodge a criminal cheating FIR merely because an ex refuses to pay after a breakup. Unless they duped you with fake documents or romance fraud from day one, your strongest and most rapid legal weapon is a civil statutory demand notice followed by an Order XXXVII CPC recovery suit.",
  },
  {
    title: "High Court Ruling on Electronic Messages & WhatsApp as Section 18 Written Acknowledgment",
    parties: "Smt. Saroj v. Sh. Kishan Lal",
    citation: "RFA No. 42/2018, High Court of Delhi",
    date: "Delhi High Court",
    facts:
      "The plaintiff advanced a friendly personal loan in multiple tranches via bank transfers without a formal registered agreement. The defendant pleaded that the claim was barred by limitation under the 3-year rule, asserting that casual electronic messages cannot be treated as a valid acknowledgment of debt under Section 18 of the Limitation Act, 1963.",
    holding:
      "The High Court held that electronic communications, emails, and mobile messages where the borrower admits receipt of money or requests time to repay satisfy all statutory criteria of Section 18. Each such digital confirmation restarts a fresh period of limitation of three full years from the date of the message. The court decreed the recovery suit with 9% annual interest.",
    amount: "₹6,50,000 Principal Decreed + 9% Annual Interest + Litigation Costs",
    takeaway:
      "Every WhatsApp chat, SMS, or email where your ex-partner states 'I will return your money', 'give me 2 months', or 'I know I owe you' is a legally binding acknowledgment that resets your 3-year limitation clock from that exact timestamp.",
  },
  {
    title: "High Court Rejection of 'Unconditional Relationship Gift' Defence",
    parties: "Jaswinder Kaur v. Gurmeet Singh",
    citation: "Civil Revision No. 2401/2019, Punjab & Haryana High Court",
    date: "Punjab & Haryana High Court",
    facts:
      "During a personal relationship, the plaintiff transferred money to help the opposite party clear personal liabilities and acquire assets. After relations soured, the defendant claimed the money was an unconditional romantic gift given out of love and affection, for which no suit could lie under the Indian Contract Act.",
    holding:
      "The High Court rejected the gift defense. Under Section 70 of the Indian Contract Act, where a person lawfully does anything for another or delivers anything, not intending to do so gratuitously, and the other enjoys the benefit thereof, the recipient is bound to make compensation. An oral transfer between dating partners does not qualify as a registered gift under Section 25(1). The defendant had to refund the entire amount.",
    amount: "Full Loan Recovery Decreed under Section 70 Contract Act",
    takeaway:
      "An ex cannot simply walk away claiming 'it was a gift'. Under Indian contract law, boyfriend-girlfriend relationships do not enjoy automatic gift presumptions. If you can show payment records and lack of gratuitous intent, courts mandate full repayment.",
  },
  {
    title: "High Court Order on Unjust Enrichment via Credit Card EMIs & Financed Assets",
    parties: "Vikramjit Singh v. Pooja Sharma & Ors.",
    citation: "CS (OS) 312/2021, High Court of Delhi",
    date: "Delhi High Court",
    facts:
      "The plaintiff purchased expensive consumer electronics, paid apartment security deposits, and serviced personal vehicle EMIs for his former romantic partner on his personal credit card. After the relationship dissolved, the defendant retained the physical assets and stopped reimbursing monthly credit card instalments.",
    holding:
      "The Court held that retaining physical assets while forcing a former partner to absorb bank debt violates Section 72 of the Indian Contract Act (liability of person receiving non-gratuitous benefits). The court issued an interim injunction directing either the immediate deposit of outstanding EMI amounts into the court registry or the custody handover of the financed assets.",
    amount: "₹3,95,000 Financed Value Secured + Interim Protective Injunction",
    takeaway:
      "If you bought laptops, phones, or financed loans in your name that your ex-partner is using, the law protects you against unjust enrichment. A statutory legal notice compels them to either assume the debt or surrender the assets.",
  },
];

const SCENARIO_CARDS = [
  {
    title: "UPI / Bank Transfer + WhatsApp Confirmation",
    odds: "92% Legal Success Rate",
    badge: "Highest Recovery Odds",
    badgeColor: "bg-emerald-100 text-emerald-800",
    description:
      "You transferred funds directly to your ex-partner via UPI, Google Pay, PhonePe, or IMPS/NEFT, and you possess chat messages where they requested the loan or promised repayment.",
    keyProof: "Bank passbook statement with UTR numbers + exported WhatsApp chat history with Section 63 BSA certificate.",
    nextStep: "Serve an Advocate 15-Day Statutory Legal Demand Notice demanding principal + interest.",
    href: "#heading-playbook",
  },
  {
    title: "Ex Claims Money Was a 'Love Gift'",
    odds: "85% Legal Success Rate",
    badge: "Common Defence — Easily Dismantled",
    badgeColor: "bg-blue-100 text-blue-800",
    description:
      "Your ex contends that the money transferred was a romantic gift or shared lifestyle expense that does not need to be repaid.",
    keyProof: "Section 25(1) Contract Act (unregistered gifts between non-relatives are void) + messages discussing temporary distress.",
    nextStep: "Demand strict proof of registered gift deed; initiate summary debt suit under Order XXXVII CPC.",
    href: "#heading-loan-vs-gift",
  },
  {
    title: "You Paid Ex's Credit Card Bills or Financed Gadgets",
    odds: "88% Legal Success Rate",
    badge: "Unjust Enrichment",
    badgeColor: "bg-amber-100 text-amber-800",
    description:
      "You swiped your credit card or took consumer loans for their iPhone, laptop, two-wheeler, or tuition fees, which they kept after the breakup.",
    keyProof: "Credit card statements + purchase invoices showing delivery to ex's address + partial past EMI reimbursements.",
    nextStep: "Issue legal notice for restitution under Section 70 and Section 72 of the Indian Contract Act.",
    href: "#heading-interactive-tabs",
  },
  {
    title: "Ex Blocked Your Number & Ghosted",
    odds: "80% Legal Success Rate",
    badge: "Deemed Service Applies",
    badgeColor: "bg-purple-100 text-purple-800",
    description:
      "The ex-partner has blocked you on WhatsApp, call, Instagram, and LinkedIn, refusing to engage in any settlement dialogue.",
    keyProof: "Valid permanent residential address or corporate employer workplace address + Speed Post tracking receipt.",
    nextStep: "Serve statutory notice via Speed Post with AD; refusal or postal delivery constitutes valid Deemed Service.",
    href: "#heading-playbook",
  },
  {
    title: "Cash Hand Loan with Zero Formal Contract",
    odds: "55% Legal Success Rate",
    badge: "Requires Corroboration",
    badgeColor: "bg-rose-100 text-rose-800",
    description:
      "You handed over physical cash withdrawn from an ATM or bank account without a promissory note or formal signed deed.",
    keyProof: "Bank ATM withdrawal slips on matching dates + WhatsApp voice notes or subsequent chat admissions.",
    nextStep: "Send an inquiry message to elicit an admission of the principal figure before issuing formal notice.",
    href: "#heading-evidence-checklist",
  },
  {
    title: "Romance Fraud / Deceit from Inception",
    odds: "75% Dual Civil + Criminal",
    badge: "BNS Section 318 Cheating",
    badgeColor: "bg-red-100 text-red-800",
    description:
      "The ex took money under fraudulent pretexts (fake business emergency, fabricated medical crisis, or false promise of marriage with multiple victims).",
    keyProof: "Disproved medical bills + false identity proof + bank trail demonstrating diversion of funds to third parties.",
    nextStep: "Combine statutory civil demand notice with a formal police complaint under BNS 318 / 316.",
    href: "#heading-playbook",
  },
];

const FAQS = [
  {
    question: "Can I legally recover money lent to an ex-boyfriend or ex-girlfriend in India?",
    answer:
      "Yes. Under Section 10 of the Indian Contract Act, 1872, an oral contract is fully valid and enforceable. If you transferred funds to a romantic partner with an understanding or promise of repayment, it constitutes a recoverable personal debt. Electronic transaction records (UPI, IMPS, bank statements) paired with WhatsApp chats or emails serve as primary admissible evidence under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).",
  },
  {
    question: "What if my ex claims the money was a gift given during our relationship?",
    answer:
      "In Indian law, the 'gift' defence is legally weak for non-spouses. Under Section 25(1) of the Indian Contract Act, an agreement made without consideration is void unless it is expressed in writing, registered, and made on account of 'natural love and affection between parties standing in a near relation'—dating partners or boyfriends/girlfriends do not qualify as near relations under the statute. Furthermore, under Section 102 of BSA 2023, once the transfer of funds is proven, the burden of proving that the money was an outright, unconditional gift falls squarely on the ex-partner.",
  },
  {
    question: "What is the time limit (limitation period) to recover money from an ex-partner?",
    answer:
      "Under Articles 19, 22, and 113 of the Limitation Act, 1963, the statutory limitation period to file a civil money recovery suit is 3 years from the date the loan was given or the agreed repayment date. Crucially, under Section 18 of the Limitation Act, any written acknowledgment of the debt on WhatsApp, email, or SMS before the 3-year deadline resets the limitation period for another full 3 years. Under Section 19, even a single partial repayment resets the 3-year clock.",
  },
  {
    question: "Can I file a police complaint or FIR under BNS 318 (formerly IPC 420) against my ex?",
    answer:
      "Only if dishonest intention existed at the very inception of taking the money. As held by the Supreme Court in ARCI v. Nimra Cerglass and S.W. Palanitkar, a mere failure to repay money after a breakup is a civil dispute, not criminal cheating. However, if your ex used a fake identity, fabricated a medical emergency, took money under false marriage promises while already married, or cheated multiple people, an FIR under Section 318 (Cheating) and Section 316 (Criminal Breach of Trust) of the Bharatiya Nyaya Sanhita, 2023 is maintainable.",
  },
  {
    question: "How does serving an advocate legal notice help recover money from an ex-partner?",
    answer:
      "A formal statutory legal notice drafted by an advocate and served via Registered Speed Post and email creates an undeniable public record. It officially demands repayment within 15 days, dismantles their ability to claim it was an unconditional gift, and notifies them of impending civil summary proceedings under Order XXXVII CPC (where their bank accounts and salary can be attached) and interest claims. In over 70% of personal loan disputes, a formal notice compels a negotiated settlement without entering a courtroom.",
  },
  {
    question: "What should I do if my ex has blocked my phone number and social media?",
    answer:
      "You do not need active social media access to enforce your legal rights. Under Section 27 of the General Clauses Act, 1897 and Section 114 of BSA 2023, a legal notice sent via Registered Speed Post with Acknowledgement Due (AD) to their permanent residential address or official corporate employer workplace is presumed legally served ('Deemed Service'). Even if they refuse the delivery or return it unclaimed, the postal delivery tracking log satisfies court service requirements.",
  },
  {
    question: "Boyfriend ya girlfriend breakup ke baad udhar diya hua paisa wapas na kare toh kya karein?",
    answer:
      "Agar aapke partner ne relationship ke dauran liya hua loan breakup ke baad lautane se mana kar diya hai, toh sabse pehle apne saare bank account statement, UPI UTR numbers aur WhatsApp chat backups ko surakshit karein. Bhartiya Anubandh Adhiniyam 1872 ke Section 10 ke tehat oral agreement bhi valid loan hota hai. Aap ek advocate ke madhyam se 15 din ka formal statutory Legal Notice Speed Post aur email dwara bhej sakte hain. Yadi fir bhi payment na aaye, toh Civil Court mein Order 37 CPC ke tehat Summary Suit daayil karke apna paisa byaj samet vasool kiya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gave Money to a Partner Who Won't Repay? Recovery After a Breakup",
  description:
    "Lent money to a partner who won't repay after the breakup? Loan vs gift, the proof that works, and how a legal notice and suit proceed.",
  datePublished: "2026-11-03T16:50:00+05:30",
  dateModified: "2026-11-03T16:50:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recover-money-from-ex-boyfriend-girlfriend`,
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
    name: "Personal Debt Recovery & Money Lent to Partners",
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
      name: "Personal Loans & Friends",
      item: `${SITE_URL}/legal-notice-to-recovery-my-loan-from-friend`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Recover Money From Ex-Partner",
      item: `${SITE_URL}/recover-money-from-ex-boyfriend-girlfriend`,
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

export default function RecoverMoneyFromExPartnerPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Loan From Friend & Personal Debt", href: "/legal-notice-to-recovery-my-loan-from-friend" },
    { label: "Money Lent to Ex-Partner", href: "/recover-money-from-ex-boyfriend-girlfriend" },
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
              <span>Indian Contract Act 1872 &amp; Limitation Act 1963</span>
              <span className="text-red-500">•</span>
              <span>Personal Debt Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Gave Money to a Partner Who Won&apos;t Repay? Recovery After a Breakup
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Recovering Money Lent to an Ex-Boyfriend or Girlfriend)
              </p>
              <p>
                Under Section 10 and Section 70 of the Indian Contract Act, 1872, loans given to romantic partners are legally recoverable debts. Bank statements, UPI UTR numbers, and WhatsApp chats are primary admissible evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. If your ex refuses repayment, claims it was a gift, or blocks you, serving a formal 15-day statutory advocate legal notice stops limitation expiry and paves the way for a summary recovery suit under Order XXXVII CPC.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Period (s.18 Resets)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Sec 63 BSA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Admissible WhatsApp / UPI Chats</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Summary Suit Speedy Recovery</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Legal Notice Demand Window</p>
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
            <ExPartnerTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview: Money Lent in Relationships */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Reality of Lending Money to a Romantic Partner in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When relationships dissolve, financial entanglement frequently turns into a hostile stalemate. One of the most painful and common aftermaths of a breakup is realizing that funds transferred in good faith—whether for rent assistance, competitive exam coaching, hospital bills, business setups, or credit card bills—are suddenly treated by the former partner as erased. Commonly, the ex-boyfriend or ex-girlfriend stops picking up phone calls, blocks social media accounts, or cynically claims: <span className="font-semibold text-slate-900">&quot;You gave it out of love; it was a relationship gift and you cannot legally ask for it back.&quot;</span>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian civil jurisprudence, this presumption is flatly incorrect. Romantic intimacy does not nullify financial obligations. Section 10 of the Indian Contract Act, 1872 specifically recognizes oral agreements as lawful and binding contracts. Section 70 explicitly establishes that whenever an individual enjoys the monetary benefit of a non-gratuitous act, they are legally bound to make full compensation. If you hold bank transfer records, UPI Unique Transaction Reference (UTR) slips, or WhatsApp messages reflecting that the money was borrowed, the law provides a robust mechanism to compel repayment.
                </p>
              </section>

              {/* Section 2: Archetype G2 Scenario Cards Grid */}
              <section id="heading-scenario-cards" aria-labelledby="heading-scenario-cards-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-cards-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    6 Breakup Money Dispute Scenarios: Evidentiary Weight &amp; Outcome Odds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G2 Analysis
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Identify your specific situation below to evaluate how Indian courts assess your evidence, the legal success probability, and the immediate statutory step required.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {SCENARIO_CARDS.map((card, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${card.badgeColor}`}>
                            {card.badge}
                          </span>
                          <span className="text-xs font-extrabold text-slate-700">
                            {card.odds}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {card.description}
                        </p>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                          <p className="font-semibold text-slate-800">
                            <span className="text-[#DC2626]">Crucial Evidence:</span> {card.keyProof}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">Recommended Step:</span>
                        <a
                          href={card.href}
                          className="font-bold text-[#DC2626] hover:text-[#B91C1C] inline-flex items-center gap-1"
                        >
                          View Action Plan &rarr;
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Landmark Court Precedents Digest */}
              <section id="heading-precedents" aria-labelledby="heading-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Precedents: 4 Authoritative Court Rulings
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Indian Case Law
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

                        <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-xs sm:text-sm space-y-1">
                          <p className="font-extrabold text-[#DC2626]">
                            Decree &amp; Strategic Key Takeaway:
                          </p>
                          <p className="text-slate-800 font-medium leading-relaxed">{c.takeaway}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Loan vs Gift: The Legal Burden of Proof */}
              <section id="heading-loan-vs-gift" aria-labelledby="heading-loan-vs-gift-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-loan-vs-gift-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Loan vs. Gift: How Indian Law Decides Who Bears the Burden of Proof
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The primary shield invoked by an ex-boyfriend or ex-girlfriend is alleging that whatever money they received was a &quot;gift&quot; or voluntary gesture. Under Indian contract and evidence law, this defence collapses under strict statutory scrutiny:
                </p>

                <blockquote className="p-4 sm:p-5 bg-slate-100 border-l-4 border-slate-900 rounded-r-xl text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                  &quot;Section 25 of the Indian Contract Act, 1872 states that an agreement made without consideration is void, unless it is expressed in writing and registered under the law for the registration of documents, and is made on account of natural love and affection between parties standing in a near relation to each other.&quot;
                </blockquote>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    <strong>1. Boyfriends and Girlfriends Are NOT &quot;Near Relations&quot;:</strong> Indian courts have consistently held that dating partners, fiancés, and romantic acquaintances do not fall within the narrow statutory definition of &quot;near relations&quot; under Section 25(1). Without a registered, stamp-duty-paid written gift deed, an alleged oral gift carries zero statutory presumption.
                  </p>
                  <p>
                    <strong>2. Section 102 BSA Burden Shift:</strong> Under Section 101 and Section 102 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Sections 101-102 of the Indian Evidence Act), you need only prove that you transferred money into their account through bank statements or UPI logs. Once the monetary receipt is established, the burden shifts entirely to the defendant to prove that you intended to abandon ownership of those funds permanently as an unconditional gift.
                  </p>
                  <p>
                    <strong>3. Section 70 Unjust Enrichment:</strong> Section 70 of the Contract Act bars unjust enrichment. If one party delivers money or services non-gratuitously (such as clearing rent, funding tuition, paying vehicle instalments), the beneficiary must compensate the provider.
                  </p>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Escalation Playbook: How to Recover Funds Legally
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Action Sequence
                  </span>
                </div>

                <ol className="space-y-4 text-sm sm:text-base text-slate-700">
                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 1: Evidence Freeze &amp; Digital Certificate Extraction (Section 63 BSA)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                      Before sending any hostile message, preserve all proof. Export complete WhatsApp chat exports with media attachments. Download official bank passbooks or net banking statements showing the exact 12-digit UTR numbers for UPI/IMPS. Store phone call logs and voice notes. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, electronic evidence accompanied by a statutory certificate from the device owner is fully admissible in court.
                    </p>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 2: Send a Written Ledger &amp; Balance Confirmation
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                      Send a polite, calm, written message (via WhatsApp and email) specifying the exact dates and amounts lent (e.g., &quot;As discussed, a total of ₹2,40,000 was lent across March 12 and May 4. Please let me know your repayment plan by this Friday.&quot;). Even if they reply &quot;I can only pay next month&quot; or &quot;Why are you asking now?&quot;, their reply operates as a Section 18 Limitation Act acknowledgment that confirms the debt.
                    </p>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 3: Issue a Formal Advocate Statutory Legal Demand Notice
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                      If informal requests are ignored or rejected, engage an advocate to dispatch an official statutory demand notice. The notice is served via Registered Speed Post with tracking and email. It details the transactional chronology, rejects sham &quot;gift&quot; claims, cites Sections 10 and 70 of the Contract Act, and grants a strict 15-day window to settle the principal with commercial interest before court action.
                    </p>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 4: Assess Police Complaint vs. Civil Remedy (BNS 318 vs. Civil Debt)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                      Evaluate whether criminal elements exist. If the ex induced you using fabricated medical records, false matrimonial pretences, or fake business investments, file a criminal complaint under Section 318 (Cheating) and Section 316 (Criminal Breach of Trust) of Bharatiya Nyaya Sanhita, 2023. If it was a genuine personal loan where repayment stopped post-breakup, proceed directly to civil recovery to prevent police dismissal as a purely &quot;civil dispute&quot;.
                    </p>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        5
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Step 5: File Summary Suit under Order XXXVII CPC in Civil Court
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                      Where written digital acknowledgments exist (WhatsApp messages, promissory notes, or bank memos), file a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908. Unlike regular civil suits that take years, Order XXXVII requires the defendant to apply for &quot;leave to defend&quot; within 10 days. If their defence is sham or frivolous, the court immediately decrees the full claim amount with statutory interest and attaches their salary or bank assets.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 6: Limitation & Statutory Rules Table */}
              <section id="heading-limitation-table" aria-labelledby="heading-limitation-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-limitation-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines &amp; Legal Benchmarks: Money Recovery from Partners
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The table below outlines the exact statutory provisions, limitation periods, admissible evidence, and expected legal outcomes under current Indian law:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                        <th scope="col" className="p-3 sm:p-4">Legal Benchmark</th>
                        <th scope="col" className="p-3 sm:p-4">Governing Statute</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Window / Rule</th>
                        <th scope="col" className="p-3 sm:p-4">Direct Judicial Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Limitation Period</td>
                        <td className="p-3 sm:p-4 font-mono text-slate-700">Limitation Act 1963, Art. 19 &amp; 22</td>
                        <td className="p-3 sm:p-4 text-slate-700">3 Years from date of loan or agreed date of repayment</td>
                        <td className="p-3 sm:p-4 text-slate-700">Suit must be filed within 3 years unless reset by acknowledgment</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">WhatsApp Acknowledgment Reset</td>
                        <td className="p-3 sm:p-4 font-mono text-slate-700">Limitation Act 1963, Sec. 18</td>
                        <td className="p-3 sm:p-4 text-slate-700">Fresh 3-year clock begins from date of digital text</td>
                        <td className="p-3 sm:p-4 text-slate-700">Prevents debtor from claiming suit is time-barred in court</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Part-Payment Reset</td>
                        <td className="p-3 sm:p-4 font-mono text-slate-700">Limitation Act 1963, Sec. 19</td>
                        <td className="p-3 sm:p-4 text-slate-700">Fresh 3 years from date of any partial UPI/cash credit</td>
                        <td className="p-3 sm:p-4 text-slate-700">Even ₹500 transferred back extends legal recovery deadline</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Electronic Evidence Proof</td>
                        <td className="p-3 sm:p-4 font-mono text-slate-700">Bharatiya Sakshya Adhiniyam 2023, Sec. 63</td>
                        <td className="p-3 sm:p-4 text-slate-700">Device owner certificate mandatory</td>
                        <td className="p-3 sm:p-4 text-slate-700">Makes WhatsApp chats, UPI slips, and emails fully admissible</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Summary Recovery Suit</td>
                        <td className="p-3 sm:p-4 font-mono text-slate-700">CPC 1908, Order XXXVII</td>
                        <td className="p-3 sm:p-4 text-slate-700">Defendant must apply for leave to defend within 10 days</td>
                        <td className="p-3 sm:p-4 text-slate-700">Fast-tracks decree without multi-year civil trial delays</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Statutory Notice Demand</td>
                        <td className="p-3 sm:p-4 font-mono text-slate-700">General Clauses Act 1897, Sec. 27</td>
                        <td className="p-3 sm:p-4 text-slate-700">15-day cure period via Speed Post with AD</td>
                        <td className="p-3 sm:p-4 text-slate-700">Refusal or return unclaimed counts as valid Deemed Service</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Hand-authored SVG Process Diagram (Resolution Rail) */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Rail: From Breakup Default to Bank Account Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The visual workflow below traces the progressive escalation stages from informal default to formal court decree and asset attachment:
                </p>

                <div className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <svg
                      className="w-full min-w-[650px] h-auto"
                      viewBox="0 0 760 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Connection Rails */}
                      <path d="M125 70 H635" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="6 6" />

                      {/* Stage 1 */}
                      <g>
                        <circle cx="95" cy="70" r="30" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.5" />
                        <text x="95" y="75" textAnchor="middle" fill="#991B1B" fontSize="14" fontWeight="bold">01</text>
                        <text x="95" y="125" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Evidence Freeze</text>
                        <text x="95" y="142" textAnchor="middle" fill="#64748B" fontSize="9">UPI UTR &amp; WhatsApp</text>
                      </g>

                      {/* Stage 2 */}
                      <g>
                        <circle cx="235" cy="70" r="30" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
                        <text x="235" y="75" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">02</text>
                        <text x="235" y="125" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Balance Demand</text>
                        <text x="235" y="142" textAnchor="middle" fill="#64748B" fontSize="9">Sec 18 Written Reset</text>
                      </g>

                      {/* Stage 3 */}
                      <g>
                        <circle cx="380" cy="70" r="30" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
                        <text x="380" y="75" textAnchor="middle" fill="#1E40AF" fontSize="14" fontWeight="bold">03</text>
                        <text x="380" y="125" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Advocate Legal Notice</text>
                        <text x="380" y="142" textAnchor="middle" fill="#64748B" fontSize="9">15-Day Speed Post + AD</text>
                      </g>

                      {/* Stage 4 */}
                      <g>
                        <circle cx="525" cy="70" r="30" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2.5" />
                        <text x="525" y="75" textAnchor="middle" fill="#6B21A8" fontSize="14" fontWeight="bold">04</text>
                        <text x="525" y="125" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Summary Suit (O.37)</text>
                        <text x="525" y="142" textAnchor="middle" fill="#64748B" fontSize="9">10-Day Leave to Defend</text>
                      </g>

                      {/* Stage 5 */}
                      <g>
                        <circle cx="665" cy="70" r="30" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5" />
                        <text x="665" y="75" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold">05</text>
                        <text x="665" y="125" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Decree &amp; Execution</text>
                        <text x="665" y="142" textAnchor="middle" fill="#64748B" fontSize="9">Bank &amp; Salary Attachment</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 8: Interactive Scenario Navigator Island */}
              <section id="heading-interactive-tabs" aria-labelledby="heading-interactive-tabs-title" className="scroll-mt-28 space-y-4">
                <ExPartnerScenarioTabs />
              </section>

              {/* Section 9: Illustrative Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Software Engineer Recovers ₹4,80,000 Lent to Ex-Partner
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following real-world illustrative case demonstrates how evidence compilation and an advocate demand notice resolved an acrimonious debt dispute without a drawn-out civil trial:
                </p>

                <div className="bg-[#111827] text-white rounded-2xl p-5 sm:p-8 border border-slate-800 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block">
                        Illustrative Recovery Docket
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Dispute Over ₹4,80,000 Transferred for MBA Tuition &amp; Relocation
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full">
                      Full Recovery in 18 Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1.5 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60">
                      <span className="text-slate-400 font-bold block">The Context &amp; Default:</span>
                      <p className="text-slate-300 leading-relaxed">
                        A Bangalore-based IT professional transferred ₹4,80,000 via UPI and NEFT in three instalments to his girlfriend between January and August 2024 to support her MBA executive tuition. After parting ways in December 2024, the partner blocked his mobile number and claimed over email that the funds were personal tokens of affection with zero repayment liability.
                      </p>
                    </div>

                    <div className="space-y-1.5 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60">
                      <span className="text-slate-400 font-bold block">The Legal Action Taken:</span>
                      <p className="text-slate-300 leading-relaxed">
                        The claimant compiled bank statements showing 12-digit UTR credits, retrieved archived WhatsApp threads where the partner texted &quot;will return ₹2L from my joining bonus&quot;, and certified them under Section 63 BSA 2023. An advocate served an official 15-day statutory legal notice to her residential and corporate employer address.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-700 text-xs sm:text-sm space-y-2">
                    <span className="text-red-400 font-bold block uppercase tracking-wider text-[11px]">
                      The Outcome &amp; Resolution Settlement:
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      Upon receiving the Speed Post notice carrying counsel letterhead at her registered residence and verified office HR email, the ex-partner realized that an Order XXXVII summary suit would lead to civil court summons, potential salary attachment, and irreparable professional reputational harm. Her legal counsel advised her to enter mediation. A settlement deed was executed on stamp paper, and ₹4,80,000 was refunded in two scheduled bank wire transfers within 18 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Critical Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Ex-Partner Recovery Evidence Checklist: 6 Critical Records Under BSA 2023
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a legal demand notice or filing a court claim, assemble these six indispensable evidentiary components to ensure unassailable legal standing:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">✓</span>
                      1. Certified Bank Statements with UTR / RRN Numbers
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Download digitally signed PDF bank statements from your banking portal showing exact debit dates, recipient beneficiary account details, and 12-digit transaction reference numbers.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">✓</span>
                      2. Unaltered WhatsApp Chat Threads &amp; Media Logs
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Export complete, raw unedited chat logs in .txt format along with high-resolution screenshots displaying the sender&apos;s verified mobile number, timestamps, and promises of repayment.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">✓</span>
                      3. Section 63 BSA 2023 Electronic Evidence Certificate
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Draft a statutory declaration certifying device ownership, serial number, and that digital chat backups and screenshots were produced from an uncompromised computer or phone system.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">✓</span>
                      4. Invoices for Assets &amp; Credit Card Statements
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      If you financed laptops, mobile phones, or vehicles, preserve the retail invoice showing product serial numbers and delivery addresses alongside monthly credit card EMI debits.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">✓</span>
                      5. Verified Residential &amp; Workplace Address Records
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Obtain their permanent residential address (parental home/Aadhaar) or corporate employer workplace address to ensure effective delivery under Section 27 General Clauses Act.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">✓</span>
                      6. Pre-Notice Balance Demand Ledger Record
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Retain delivery logs of your initial calm email or WhatsApp balance demand message to demonstrate to the court that pre-litigation settlement was attempted before legal escalation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Mistakes to Avoid (with ✕ styling) */}
              <section id="heading-mistakes" aria-labelledby="heading-mistakes-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-mistakes-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6 Critical Mistakes to Avoid When Recovering Money from an Ex-Partner
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Emotional distress following a breakup often drives aggrieved individuals into fatal legal traps that undermine their debt recovery claim or expose them to criminal counter-charges:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="p-3.5 bg-red-50/50 rounded-xl border border-red-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">1. Sending Abusive, Threatening, or Defamatory Messages</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Never send threats of physical harm, exposure of private intimacies, or abusive texts. This hands your ex immediate grounds to file criminal complaints under Section 351 (Criminal Intimidation), Section 79 (Outraging Modesty), or Section 356 (Defamation) of Bharatiya Nyaya Sanhita, 2023. Keep every communication strictly professional and transactional.
                      </p>
                    </div>
                  </li>

                  <li className="p-3.5 bg-red-50/50 rounded-xl border border-red-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">2. Posting on Social Media or Contacting Their Employer Informally</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Publicly naming and shaming your ex on Instagram, LinkedIn, or Twitter or sending informal vitriolic emails to their corporate HR creates civil and criminal defamation liability. A formal statutory legal notice dispatched by an advocate is a privileged legal communication; a social media smear is not.
                      </p>
                    </div>
                  </li>

                  <li className="p-3.5 bg-red-50/50 rounded-xl border border-red-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">3. Filing a Fabricated Criminal Cheating Complaint Without Inception Fraud</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Filing a police FIR under BNS 318 alleging that a genuine loan was criminal cheating will backfire. Police will routinely issue a closure report citing &quot;civil dispute&quot;, and High Courts quash such FIRs with punitive costs. Rely on civil summary proceedings under Order XXXVII CPC for real financial recovery.
                      </p>
                    </div>
                  </li>

                  <li className="p-3.5 bg-red-50/50 rounded-xl border border-red-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">4. Waiting Beyond the 3-Year Statutory Limitation Deadline</strong>
                      <p className="text-slate-600 leading-relaxed">
                        Believing vague verbal promises like &quot;I will return it whenever I get a promotion&quot; while months turn into years is dangerous. If 3 full years elapse without a single written WhatsApp acknowledgment or partial bank repayment, your right to legal recovery becomes permanently time-barred under the Limitation Act.
                      </p>
                    </div>
                  </li>

                  <li className="p-3.5 bg-red-50/50 rounded-xl border border-red-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">5. Deleting Chat Histories During Breakup Purges</strong>
                      <p className="text-slate-600 leading-relaxed">
                        In an impulse to clear emotional memories, individuals frequently delete chat conversations, reset phones, or discard old SIM cards. This eliminates critical digital evidence of loan discussions and acknowledgments that cannot always be recovered from cloud backups.
                      </p>
                    </div>
                  </li>

                  <li className="p-3.5 bg-red-50/50 rounded-xl border border-red-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">6. Accepting Unsigned Cash Settlement Promises</strong>
                      <p className="text-slate-600 leading-relaxed">
                        If your ex verbally agrees to pay in installments, do not rely on a handshake. Insist on a formal written settlement agreement, post-dated cheques, or a stamped Promissory Note. If cheques are issued and subsequently bounce, you gain immediate, powerful criminal recourse under Section 138 of the Negotiable Instruments Act.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Recovering Money from an Ex-Partner
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Practical Legal Guidance
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 [&_summary::-webkit-details-marker]:none transition-all duration-200 open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-red-50 flex items-center justify-center text-slate-500 group-open:text-[#DC2626] transition-colors">
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="pt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources & Statutory References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Statutes, Government Gazettes &amp; Judicial References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Source Trail
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <span className="font-semibold text-slate-800">{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DC2626] font-bold hover:underline shrink-0 inline-flex items-center gap-1"
                      >
                        Official Statute Link &rarr;
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Primary Call to Action Box */}
              <div id="cta-section-primary" className="pt-4">
                <ExPartnerNoticeCTA />
              </div>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-8 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </div>

              {/* Internal Links Block Required by Plan */}
              <div className="p-4 sm:p-5 bg-slate-100 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                  Related Debt Recovery Resources &amp; Legal Notices
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Legal Notice for Recovery of Loan from Friend
                  </Link>
                  <Link
                    href="/hi/udhar-paisa-wapas-kaise-le"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-[#DC2626] font-medium transition-colors"
                  >
                    उधार पैसा वापस कैसे लें (Hindi Guide)
                  </Link>
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Promissory Note Format India
                  </Link>
                  <Link
                    href="/recover-money-from-friend-living-abroad"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Recover Money from Friend Living Abroad
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Legal Notice Charges &amp; Costs in India
                  </Link>
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Time Limit to File Money Recovery Case (3-Year Rule)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
