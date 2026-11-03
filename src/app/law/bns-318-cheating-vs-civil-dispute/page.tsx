import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BnsNoticeCTA from "./BnsNoticeCTA";
import BnsTableOfContents from "./BnsTableOfContents";
import BnsRouteTabs from "./BnsRouteTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "BNS 318 Cheating vs Civil Dispute: When Police Act",
  description:
    "BNS 318 (old IPC 420) applies only to dishonest intent from the start. Learn when a police complaint works for money not returned.",
  alternates: {
    canonical: `${SITE_URL}/law/bns-318-cheating-vs-civil-dispute`,
  },
  openGraph: {
    title: "Will Police Register Cheating Under BNS 318, or Is It a Civil Dispute?",
    description:
      "Statutory analysis of Section 318 Bharatiya Nyaya Sanhita (old IPC 420) vs civil money recovery. Understand criminal dishonest inducement at inception, BNS 316 breach of trust, and Order 37 summary suits.",
    url: `${SITE_URL}/law/bns-318-cheating-vs-civil-dispute`,
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
    title: "Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023) — Section 318 (Cheating) & Section 316 (Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (Act No. 46 of 2023) — Section 173 (Information in cognizable cases) & Section 175(3) (Magistrate inquiry direction)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Act No. 47 of 2023) — Section 63 (Admissibility of electronic records, chats, and UPI transaction logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Limitation Act, 1963 (Act No. 36 of 1963) — Article 19, Section 18 (Acknowledgment in writing) & Section 19 (Effect of payment on account of debt)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Procedure for Recovery of Debts and Liquidated Demands)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Supreme Court of India Judgment on Breach of Contract vs Criminal Cheating — Dalip Kaur & Ors. v. Jagnar Singh & Anr. (2009) 14 SCC 696",
    url: "https://main.sci.gov.in/judgment/judis/35165.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Inception Test: Mere Failure to Keep Promise Is Not Cheating",
    parties: "Hridaya Ranjan Prasad Verma & Ors. v. State of Bihar & Anr.",
    citation: "(2000) 4 SCC 168, Supreme Court of India",
    date: "Judgment Delivered 31 March 2000",
    facts:
      "The appellant entered into an agreement for sale of land and took consideration. Subsequent disputes arose regarding title perfection and clearance, leading the purchaser to lodge a criminal complaint alleging cheating under Section 420 IPC (now BNS Section 318). The magistrate took cognizance and issued process.",
    holding:
      "The Supreme Court of India held that the distinction between a mere breach of contract and the offence of cheating depends on the intention of the accused at the time of inducement. Subsequent failure to fulfill a promise cannot make an act an offence of cheating unless fraudulent or dishonest intention existed right from the beginning. Where intention turns dishonest only subsequent to the transaction, the remedy is exclusively civil in nature.",
    amount: "Criminal Proceedings Quashed; Civil Forum Affirmed",
    takeaway:
      "To attract Section 318 BNS, you must demonstrate that the borrower had no intention to repay at the very moment they took your money. If they intended to repay but later encountered financial hardship or broke their promise, police cannot legally register an FIR under Section 318.",
  },
  {
    title: "Supreme Court Ruling on Friendly Loans: Default in Repayment Does Not Amount to Cheating",
    parties: "Dalip Kaur & Ors. v. Jagnar Singh & Anr.",
    citation: "(2009) 14 SCC 696, Supreme Court of India",
    date: "Judgment Delivered 10 August 2009",
    facts:
      "The respondent advanced money to the appellants pursuant to an agreement. When the appellants defaulted on their financial commitments and failed to refund the advance consideration, the respondent filed a criminal complaint under Sections 406 and 420 IPC. The High Court declined to quash the proceedings.",
    holding:
      "Setting aside the High Court order, the Supreme Court ruled that an offence of cheating requires fraudulent or dishonest inducement at the inception of the transaction. A dispute arising out of non-refund of an advance or default in repayment of money borrowed is purely a civil dispute. Converting a civil breach of contract into a criminal offence amounts to abuse of the judicial process.",
    amount: "Criminal FIR Quashed; Complainant Directed to Civil Remedy",
    takeaway:
      "If a friend or relative borrows funds for personal needs and later fails to return the sum, police stations will routinely refuse an FIR citing Dalip Kaur. Your legal remedy is a civil demand notice followed by a Summary Suit under Order 37 CPC.",
  },
  {
    title: "Apex Court Bar on Cloaking Civil Recovery as Criminal Prosecution",
    parties: "Vijay Kumar Ghai & Ors. v. The State of West Bengal & Anr.",
    citation: "(2022) 7 SCC 124, Supreme Court of India",
    date: "Judgment Delivered 22 March 2022",
    facts:
      "The complainant company entered into a commercial agreement for joint venture and paid substantial funds. Following business deadlock and commercial disagreements, the complainant registered an FIR under Sections 406, 420, and 120B IPC alleging cheating and criminal breach of trust.",
    holding:
      "The Supreme Court deprecated the rampant practice of invoking criminal machinery to exert pressure in civil recovery disputes. The Court reiterated that Section 420 IPC (BNS 318) and Section 406 IPC (BNS 316) have distinct legal ingredients: cheating requires dishonest intent at inception, whereas criminal breach of trust requires lawful entrustment followed by dishonest misappropriation. Attempting to pressurise a debtor through criminal threats is impermissible.",
    amount: "FIR and Charge-Sheet Quashed with Strict Strictures",
    takeaway:
      "Threatening a debtor with a police complaint when no deception existed at the start can backfire. Advocates advise issuing a structured statutory legal notice that locks in electronic admissions before initiating civil or criminal steps.",
  },
  {
    title: "High Court Precedent on Hand Loans: Lack of Deceit Renders Matter Purely Civil",
    parties: "Sarabjit Singh v. State of Punjab & Anr.",
    citation: "CRM-M-24152-2022, Punjab and Haryana High Court",
    date: "Judgment Delivered 17 January 2023",
    facts:
      "The complainant advanced an unsecured friendly loan of ₹8,50,000 in cash and bank transfer to an acquaintance for overseas travel expenses. The borrower failed to repay within the agreed 6-month period and switched off his phone. The complainant persuaded police to register an FIR under Section 420 IPC.",
    holding:
      "The High Court quashed the FIR, observing that advancing a friendly loan creates a debtor-creditor relationship. Unless the borrower induced the loan through forged documents, false identity, or fictitious guarantees, mere refusal or inability to repay cannot be given a criminal hue. The police cannot act as a debt collection agency for private financial transactions.",
    amount: "₹8,50,000 Dispute Relegated to Civil Suit with Limitation Protection",
    takeaway:
      "Police officers are explicitly prohibited from acting as recovery agents. Unless you possess documentary proof of deception (such as forged collateral, impersonation, or fabricated hospital records), civil summary proceedings are substantially faster and legally sound.",
  },
];

const FAQS = [
  {
    question: "What is BNS 318, and how does it replace Section 420 of the Indian Penal Code (IPC)?",
    answer:
      "Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS), which came into force on 1 July 2024, replaces Section 415 and Section 420 of the repealed Indian Penal Code (IPC). Specifically, Section 318(1) defines the offence of cheating, Section 318(2) prescribes simple cheating punishable with imprisonment up to 3 years or fine, Section 318(3) covers cheating with knowledge of causing wrongful loss to a person whose interest the offender was bound to protect, and Section 318(4) replaces old IPC Section 420 (cheating and dishonestly inducing delivery of property), carrying rigorous imprisonment up to 7 years alongside a mandatory fine.",
  },
  {
    question: "Will the police register a cheating FIR under BNS 318 if my friend does not return borrowed money?",
    answer:
      "Generally, no. Under established Supreme Court precedents (Dalip Kaur, 2009 and Hridaya Ranjan Prasad Verma, 2000), mere failure or refusal to repay a personal loan is a civil breach of contract, not criminal cheating. The police will register an FIR under BNS 318(4) only if you produce documentary evidence proving that the borrower had fraudulent or dishonest intentions at the exact moment of borrowing—such as providing forged documents, creating a fictitious emergency, or using an assumed identity. Without proof of inception fraud, police will endorse your complaint as 'Matter is of Civil Nature' and direct you to civil court.",
  },
  {
    question: "What is the legal difference between BNS 318 (Cheating) and BNS 316 (Criminal Breach of Trust)?",
    answer:
      "The critical distinction lies in how the accused obtained possession of the money or property. Under Section 318 BNS (Cheating / old IPC 420), the victim is deceived through dishonest misrepresentation from the very inception into handing over the property. Under Section 316 BNS (Criminal Breach of Trust / old IPC 405/406), the property was lawfully and willingly entrusted to the accused in a fiduciary capacity, and the accused only subsequently converted or dishonestly misappropriated it to their own use.",
  },
  {
    question: "Can I file both a police complaint and a civil recovery suit for the same unpaid debt?",
    answer:
      "Yes. The Supreme Court has repeatedly affirmed that civil remedies and criminal proceedings are not mutually exclusive. If a debtor deceived you with false pretences (criminal cheating under BNS 318) and also owes you money, you have the constitutional right to seek criminal prosecution under Section 173 BNSS while simultaneously filing a Summary Suit under Order XXXVII CPC or a civil recovery suit for return of principal plus interest. However, filing a false criminal complaint solely to coerce civil debt recovery can attract quashing under Section 528 BNSS (old 482 CrPC).",
  },
  {
    question: "How do WhatsApp chats and UPI transactions prove a personal loan in court?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, replacing Section 65B of the Indian Evidence Act), electronic records—including WhatsApp messages, SMS exchanges, and UPI transaction confirmations—are fully admissible as primary electronic evidence. Messages where the borrower explicitly acknowledges the debt, requests repayment extensions, or specifies the loan amount constitute written acknowledgments under Section 18 of the Limitation Act, 1963, resetting the 3-year limitation clock from each date of acknowledgment.",
  },
  {
    question: "What should I do if the police refuse to register my cheating complaint under BNS 318?",
    answer:
      "If the Station House Officer (SHO) refuses to register an FIR under Section 173(1) BNSS, you must send the written complaint by Registered Speed Post to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under Section 173(3) BNSS. If the senior police officer also declines action, your advocate can file a private criminal complaint along with an application under Section 175(3) BNSS before the Judicial Magistrate, who has statutory authority to direct the police to register an FIR and submit an investigation report.",
  },
  {
    question: "Dost paise wapas nahi kar raha — kya police complaint ho sakti hai ya legal notice bhejna hoga?",
    answer:
      "Agar aapne dost ya rishtedaar ko UPI ya cash se udhaar paisa diya hai aur woh wapas nahi de raha, toh police aamtaur par ise 'Civil Mamla' (Civil Dispute) bata kar FIR darj karne se mana kar deti hai. Criminal cheating case (BNS 318) tabhi banta hai jab dost ne shuru se hi jhooth bol kar paisa thaga ho (jaise nakli documents ya farzi scheme). Sahi kanooni tarika yeh hai ki pehle ek verified advocate ke dwara 15 din ka formal Legal Notice bheja jaye. Agar phir bhi paisa na mile, toh civil court mein Order 37 CPC ke tehat Summary Suit daal kar court se decree aur bank account attach karwaya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Will Police Register Cheating Under BNS 318, or Is It a Civil Dispute?",
  description:
    "BNS 318 (old IPC 420) applies only to dishonest intent from the start. Learn when a police complaint works for money not returned.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/bns-318-cheating-vs-civil-dispute`,
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
    name: "Bharatiya Nyaya Sanhita Section 318 Cheating vs Civil Recovery",
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
      name: "Personal Loan Recovery Hub",
      item: `${SITE_URL}/legal-notice-to-recovery-my-loan-from-friend`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "BNS 318 Cheating vs Civil Dispute",
      item: `${SITE_URL}/law/bns-318-cheating-vs-civil-dispute`,
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

export default function BnsCheatingVsCivilPage() {
  const breadcrumbItems = [
    { label: "Personal Loan Recovery", href: "/legal-notice-to-recovery-my-loan-from-friend" },
    { label: "BNS 318 vs Civil Dispute", href: "/law/bns-318-cheating-vs-civil-dispute" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Bharatiya Nyaya Sanhita, 2023 (BNS §318)</span>
              <span className="text-red-500">•</span>
              <span>In Force Since <time dateTime="2024-07-01">1 July 2024</time></span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Will Police Register Cheating Under BNS 318, or Is It a Civil Dispute?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (BNS 318 Inception Test vs Civil Debt Recovery)
              </p>
              <p>
                Police will only register an FIR under Section 318(4) BNS (old IPC 420) if dishonest intention and deceit existed at the exact moment money was taken. Under settled Supreme Court jurisprudence, mere failure to repay a friendly loan or breach of contract is strictly a civil dispute. To recover funds, creditors must serve a 15-day statutory legal notice and file a Summary Suit under Order XXXVII CPC within the 3-year limitation window.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Act Civil Recovery Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Up to 7 Yrs</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Rigorous Imprisonment under BNS §318(4)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fast-Track CPC Summary Suit Decree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Advocate Demand Notice Window</p>
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
            <BnsTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statute Overview */}
              <section id="heading-statute-overview" aria-labelledby="heading-statute-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statute-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Understanding Section 318 BNS: The Post-July 2024 Legal Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When money lent in good faith is not returned, the instinctive reaction of most lenders is to approach the nearest police station demanding an FIR for &quot;cheating&quot; or &quot;420&quot;. However, on 1 July 2024, the Indian Penal Code (IPC) was replaced by the Bharatiya Nyaya Sanhita, 2023 (BNS). The historic provisions of IPC Section 415 (cheating) and IPC Section 420 (cheating and dishonestly inducing delivery of property) now stand consolidated under <strong>Section 318 of the BNS</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While the statutory wording of cheating has been modernized under Section 318, the judicial bar established by the Supreme Court remains unwavering: <em>criminal law cannot be weaponized to enforce commercial debts or friendly hand loans</em>. Unless the complainant can demonstrate that the borrower harbored fraudulent intentions at the inception of the transaction, police stations will formally refuse an FIR, endorsing the complaint as a pure &quot;civil dispute&quot;.
                </p>
              </section>

              {/* Section 2: Clause-by-Clause Annotation (Archetype L1 Mandatory) */}
              <section id="heading-clauses-annotation" aria-labelledby="heading-clauses-annotation-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clauses-annotation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Clause-by-Clause Annotation: Section 318 Bharatiya Nyaya Sanhita
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Exhaustive Legal Breakdown of BNS Section 318 Subsections (1) to (4) with Practical Interpretations
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Subsection 1 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <span className="text-xs font-extrabold px-3 py-1 bg-slate-100 text-slate-800 rounded-full uppercase tracking-wider">
                        BNS Section 318(1) • Statutory Definition of Cheating
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Replaces IPC §415</span>
                    </div>

                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/21733"
                      className="border-l-4 border-slate-900 pl-4 py-2 bg-slate-50 rounded-r-lg text-xs sm:text-sm text-slate-800 italic leading-relaxed font-serif"
                    >
                      &quot;Whoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property to any person, or to consent that any person shall retain any property, or intentionally induces the person so deceived to do or omit to do anything which he would not do or omit if he were not so deceived, and which act or omission causes or is likely to cause damage or harm to that person in body, mind, reputation or property, is said to &apos;cheat&apos;.&quot;
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900 font-bold block">What This Means in Plain English:</strong>
                      <p className="leading-relaxed">
                        Cheating requires two concurrent elements: (1) deception practiced on the victim, and (2) fraudulent or dishonest inducement that causes the victim to part with money or property that they would otherwise never have surrendered. If there was no deception at the time of handing over the money, cheating does not exist.
                      </p>
                    </div>

                    <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl text-xs text-slate-800 leading-relaxed">
                      <strong className="text-red-900 font-bold block mb-1">Concrete Practical Example:</strong>
                      A colleague asks for ₹2,00,000 claiming his father is critically admitted in ICU, showing forged hospital bills and fake prescriptions. In reality, his father is completely healthy at home, and the money was gambled online. This constitutes cheating under BNS 318(1) because the inducement was fraudulent at inception.
                    </div>
                  </article>

                  {/* Subsection 2 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <span className="text-xs font-extrabold px-3 py-1 bg-slate-100 text-slate-800 rounded-full uppercase tracking-wider">
                        BNS Section 318(2) • Punishment for Simple Cheating
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Replaces IPC §417</span>
                    </div>

                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/21733"
                      className="border-l-4 border-slate-900 pl-4 py-2 bg-slate-50 rounded-r-lg text-xs sm:text-sm text-slate-800 italic leading-relaxed font-serif"
                    >
                      &quot;Whoever cheats shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.&quot;
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900 font-bold block">What This Means in Plain English:</strong>
                      <p className="leading-relaxed">
                        Subsection (2) governs simple cheating where property is not directly delivered, but the victim was deceitfully induced to alter their legal position, grant an unmerited commercial concession, or perform an act resulting in pecuniary loss or reputational injury.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed">
                      <strong className="text-slate-900 font-bold block mb-1">Concrete Practical Example:</strong>
                      An individual falsely poses as a verified procurement agent for a public sector unit, inducing a vendor to hold back stock or cancel competing customer orders, resulting in massive operational losses.
                    </div>
                  </article>

                  {/* Subsection 3 */}
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <span className="text-xs font-extrabold px-3 py-1 bg-slate-100 text-slate-800 rounded-full uppercase tracking-wider">
                        BNS Section 318(3) • Cheating with Knowledge of Fiduciary Duty
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Replaces IPC §418</span>
                    </div>

                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/21733"
                      className="border-l-4 border-slate-900 pl-4 py-2 bg-slate-50 rounded-r-lg text-xs sm:text-sm text-slate-800 italic leading-relaxed font-serif"
                    >
                      &quot;Whoever cheats with the knowledge that he is likely thereby to cause wrongful loss to a person whose interest in the transaction to which the cheating relates, he was bound, either by law, or by a legal contract, to protect, shall be punished with imprisonment of either description for a term which may extend to five years, or with fine, or with both.&quot;
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900 font-bold block">What This Means in Plain English:</strong>
                      <p className="leading-relaxed">
                        This provision imposes enhanced liability (up to 5 years) on trustees, guardians, attorneys, financial advisors, or fiduciaries who cheat individuals whose financial interests they were bound by statute or contractual obligation to safeguard.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed">
                      <strong className="text-slate-900 font-bold block mb-1">Concrete Practical Example:</strong>
                      A legal guardian or wealth manager appointed to administer minor child trust funds deceives the beneficiary and liquidates mutual fund portfolios into their personal offshore accounts.
                    </div>
                  </article>

                  {/* Subsection 4 */}
                  <article className="bg-white rounded-2xl border border-red-200 p-5 sm:p-7 shadow-sm space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                    <div className="pl-2 space-y-4">
                      <div className="flex items-center justify-between gap-2 border-b border-red-100 pb-2">
                        <span className="text-xs font-extrabold px-3 py-1 bg-red-100 text-red-800 rounded-full uppercase tracking-wider">
                          BNS Section 318(4) • Cheating &amp; Dishonestly Inducing Delivery of Property
                        </span>
                        <span className="text-xs text-red-600 font-bold">Direct Replacement of IPC §420</span>
                      </div>

                      <blockquote
                        cite="https://www.indiacode.nic.in/handle/123456789/21733"
                        className="border-l-4 border-red-600 pl-4 py-2 bg-red-50/50 rounded-r-lg text-xs sm:text-sm text-slate-900 italic leading-relaxed font-serif"
                      >
                        &quot;Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.&quot;
                      </blockquote>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold block">What This Means in Plain English:</strong>
                        <p className="leading-relaxed">
                          This is the core criminal section applied to financial fraud and loan scams. To sustain a charge under BNS 318(4), the prosecution must establish that: (1) the accused made a representation that was fraudulent to their knowledge, (2) the victim was induced to transfer money, promissory notes, or property based on that deception, and (3) the accused acted with dishonest intent from inception. Unlike simple cheating, Subsection (4) carries up to 7 years imprisonment, is cognizable, and attracts mandatory financial fines.
                        </p>
                      </div>

                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-slate-800 leading-relaxed">
                        <strong className="text-red-900 font-bold block mb-1">Concrete Practical Example:</strong>
                        An acquaintance claims to own prime commercial land, displays forged title deeds, and takes ₹15,00,000 as token booking advance. Land revenue records later reveal that the property belongs to the state government. This is an open-and-shut case of BNS 318(4) cheating and dishonest inducement.
                      </div>
                    </div>
                  </article>
                </div>
              </section>

              {/* Section 3: BNS 318 vs Civil Default vs BNS 316 Comparison Table */}
              <section id="heading-bns-vs-civil" aria-labelledby="heading-bns-vs-civil-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bns-vs-civil-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cheating (BNS 318) vs Criminal Breach of Trust (BNS 316) vs Civil Loan Default
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Understanding where your money recovery dispute fits is essential to avoiding police refusal and preserving your civil limitation. The following comparative matrix outlines who is covered, who is excluded, and the legal mechanism governing each route:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">BNS 318 vs BNS 316 vs Civil Recovery Dispute Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Parameter</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">BNS §318 (Old IPC §420)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">BNS §316 (Old IPC §406)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Civil Debt Recovery (Order 37 CPC)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Primary Legal Classification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Criminal Fraud</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Criminal Misappropriation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Civil Contract Breach</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          State of Mind at Inception
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-800">
                          Dishonest / deceitful intention from Day 1
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Lawful possession at start; intent turns dishonest later
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Bona fide intention at start; borrower defaults later
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Who Is Covered?
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Victims of fake investment schemes, forged property collateral, ghost companies, Ponzi scams
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Business partners, agents, or bailees who refuse to return entrusted funds or inventory
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Personal loans to friends, relatives, ex-partners, unpaid invoices, or unsecured hand loans
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Who Is NOT Covered?
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600">
                          Borrowers who faced business losses, genuine financial hardship, or made partial repayments
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600">
                          Parties where property was transferred as an outright loan rather than held in fiduciary trust
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600">
                          Claims filed after 3 years from due date without written acknowledgment (time-barred debts)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Police Response
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-emerald-800 font-semibold">
                          Registers FIR under BNSS §173 if deception is documented
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Registers FIR if fiduciary entrustment agreement is proven
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-600 font-bold">
                          Refuses FIR; endorses complaint as &apos;Civil Nature&apos;
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Primary Legal Forum
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Judicial Magistrate Court (BNSS §175 / §223)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Judicial Magistrate Court
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-blue-700 font-bold">
                          Civil Court (District Court / Commercial Court)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Landmark Apex Court Precedents */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court Precedents on Loan Default vs Criminal Cheating
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Apex Court Jurisprudence
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
                              Judicial Determination
                            </span>
                            <span className="text-sm sm:text-base font-black text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All High Courts &amp; Police Stations (Art. 141)
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your case:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Pattern Analysis - When Police Act */}
              <section id="heading-police-pattern" aria-labelledby="heading-police-pattern-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-police-pattern-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidentiary Pattern Analysis: What Convinces Police to Register an FIR Under BNS 318
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Police officers are legally conditioned to reject private loan complaints because Section 173 BNSS mandates preliminary enquiry for offences punishable between 3 and 7 years. When complainants produce verifiable digital evidence proving dishonest inducement, police are legally compelled to take action:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Fabricated Pretext or Impersonation at Inception:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Demonstrating that the borrower concocted non-existent medical crises, displayed forged employment offer letters, or created fictitious company balance sheets satisfies the legal requirement of deception under BNS 318(1).
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Immediate Siphoning or Diversion of Loan Funds:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        If bank statement trails prove that funds borrowed ostensibly for a specific emergency were instantly transferred to betting apps, crypto wallets, or third-party accounts within minutes, criminal intent is firmly corroborated.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Issuing Cheques from Already Closed Bank Accounts:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        While an ordinary cheque bounce attracts Section 138 of the NI Act, handing over a security cheque from an account that was closed months prior to issuance elevates the default into deliberate criminal cheating under BNS 318(4).
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Serial Default and Modus Operandi Involving Multiple Victims:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Attaching complaints or statements from two or more acquaintances cheated by the same individual using an identical pretext demolishes the defense of an isolated friendly loan default, establishing habitual criminal fraud.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Speed Post Refusal of Statutory Demand Notice:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving an advocate legal demand notice via Registered Speed Post that is deliberately refused or ignored establishes pre-litigation bad faith, showing the Magistrate that the borrower is actively absconding from their legal liability.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 6: Decision Tree Flowchart */}
              <section id="heading-decision-flow" aria-labelledby="heading-decision-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-decision-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Decision Tree: Police Complaint (BNS 318) vs Civil Summary Suit
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured legal flowchart to determine whether your dispute warrants a police FIR or an immediate civil recovery suit before statutory limitation expires:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Dispute Assessment</h3>
                    <p className="text-xs text-slate-200 mt-1">Money lent to friend, relative, or partner remains unpaid after due date.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Inception Test</h3>
                    <p className="text-xs text-amber-900 mt-1">Did the borrower practice fraud/deception at the time of taking the money?</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3A (If No Fraud)</span>
                    <h3 className="font-bold text-sm">Civil Recovery Route</h3>
                    <p className="text-xs text-slate-700 mt-1">Serve 15-day Legal Notice + File Summary Suit under Order 37 CPC.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 3B (If Fraud Existed)</span>
                    <h3 className="font-bold text-sm">Criminal Cheating Route</h3>
                    <p className="text-xs text-red-900 mt-1">Lodge BNSS §173 Complaint with SHO for FIR under BNS §318(4).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Judicial Enforcement</h3>
                    <p className="text-xs text-emerald-900 mt-1">Court decree &amp; asset attachment or Magistrate summons / non-bailable warrant.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Legal Decision Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="BNS 318 Cheating vs Civil Recovery Decision Flowchart"
                  >
                    <defs>
                      <linearGradient id="bnsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="bnsAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bnsSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#bnsGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Money Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Unpaid Personal Loan</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Borrower Ignored Dues</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Inception Audit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Was fraud proven?</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Fake pretext / identity</text>

                    {/* Arrow 2 Up to Criminal */}
                    <path d="M 320 45 L 350 45" stroke="#DC2626" strokeWidth="2" />
                    {/* Arrow 2 Down to Civil */}
                    <path d="M 320 85 L 350 85" stroke="#047857" strokeWidth="2" />

                    {/* Branch A: Criminal */}
                    <rect x="350" y="10" width="140" height="70" rx="10" fill="url(#bnsAlert)" />
                    <text x="420" y="32" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">YES: BNS §318(4)</text>
                    <text x="420" y="50" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Criminal Cheating</text>
                    <text x="420" y="68" fill="#FEE2E2" fontSize="9" textAnchor="middle">BNSS §173 Police FIR</text>

                    {/* Branch B: Civil */}
                    <rect x="350" y="90" width="140" height="70" rx="10" fill="url(#bnsSucc)" />
                    <text x="420" y="112" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">NO: CIVIL DEBT</text>
                    <text x="420" y="130" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Order 37 CPC Suit</text>
                    <text x="420" y="148" fill="#D1FAE5" fontSize="9" textAnchor="middle">3-Year Limitation Limit</text>

                    {/* Arrow to Next Step */}
                    <path d="M 490 45 L 520 65" stroke="#64748B" strokeWidth="2" />
                    <path d="M 490 125 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Legal Notice</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">15-Day Demand Notice</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Sec 63 BSA Digital Proof</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bnsGrad)" />
                    <text x="760" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Court Decree &amp; Attach</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Criminal Conviction</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="175" width="820" height="75" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="198" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REMEDY RULES UNDER INDIAN LAW:</text>
                    <text x="25" y="218" fill="#475569" fontSize="10">• Civil Recovery: 3 Years from date of cause of action (Limitation Act 1963, Art. 19; restarted by WhatsApp/UPI under s.18/19)</text>
                    <text x="25" y="234" fill="#475569" fontSize="10">• Criminal Cheating: Cognizable offence punishable with up to 7 years imprisonment + mandatory fine under BNS §318(4)</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Enforcement Playbook: From Evidence Assembly to Debt Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether pursuing a criminal complaint under BNS Section 318 or a civil summary recovery suit, follow this battle-tested 5-step legal playbook:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Compile Electronic Banking Records &amp; Digital Debt Admissions
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), download certified bank statements reflecting outward transfer UTR numbers, account debits, and UPI transaction logs. Export complete WhatsApp and SMS chat histories containing discussions of the loan, promises of repayment, and admission of debt amounts. See our dedicated guide on <Link href="/upi-transfer-as-proof-of-loan" className="text-blue-700 underline font-semibold">UPI transfer as proof of loan</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a 15-Day Statutory Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate draft and serve an official statutory legal notice to the borrower. The notice must detail the exact principal advanced, agreed repayment schedule, accrued interest, and a strict 15-day deadline. Crucially, the notice warns the debtor of civil recovery under Order XXXVII CPC alongside Section 318 BNS criminal prosecution if fraudulent inducement occurred. Check transparent rates on our <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File a Cognizable Police Complaint Under BNSS Section 173 (If Deception Is Proven)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the borrower induced the loan through fake documents, impersonation, or fictitious emergencies, submit a detailed written complaint to the Station House Officer (SHO) under Section 173(1) BNSS. If the SHO refuses an FIR, send the complaint by Registered Post to the Superintendent of Police under Section 173(3) BNSS.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Approach Judicial Magistrate via Section 175(3) BNSS Application
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Where police authorities fail to act on a clear case of BNS 318(4) cheating, your advocate can file an application under Section 175(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS, replacing Section 156(3) CrPC) before the Judicial Magistrate. The Magistrate possesses statutory jurisdiction to order the police to register an FIR and submit an investigation report.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate a Summary Suit Under Order XXXVII of the CPC for Fast Debt Decree
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For personal loans with written chat acknowledgments, promissory notes, or dishonoured cheques, file a Summary Suit under Order 37 CPC. Unlike ordinary civil suits that take years, the defendant must obtain judicial leave to defend by establishing a genuine defense. If leave is denied, the court immediately passes a decree for the full principal amount plus statutory interest. Learn more about <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order 37 summary suit money recovery</Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Fact Table of Deadlines, Limitation & Penalties */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines, Limitation Limits &amp; Penal Sanctions: BNS vs Civil Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Both criminal complaints and civil suits are bound by strict statutory limitation periods and penal thresholds that determine the viability of recovery:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Deadlines, Limitation and Penalties Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Action / Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Time Limit / Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Maximum Legal Consequence / Penalty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Civil Suit for Money Lent
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 Years from default date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Limitation Act 1963, Article 19</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Attachment of debtor bank accounts &amp; immovable property</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Limitation Clock Extension
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Resets for fresh 3 years</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Limitation Act 1963, Section 18 &amp; 19</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Triggered by written WhatsApp acknowledgment or partial UPI payment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Simple Cheating (BNS §318(2))
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">No statutory limitation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 318(2) BNS 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to 3 years imprisonment or fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cheating &amp; Inducing Delivery (BNS §318(4))
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Cognizable &amp; Non-Bailable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 318(4) BNS 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-700">Up to 7 years rigorous imprisonment + mandatory fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Criminal Breach of Trust (BNS §316)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Cognizable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 316(2) BNS 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to 5 years imprisonment or fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Legal Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18 Limitation Act &amp; CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation demand establishing formal default and interest liability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Statutory verification note: Under Section 18 of the Limitation Act, 1963, a debtor acknowledging their loan via WhatsApp or email restarts the 3-year limitation clock afresh from the date of that message.
                </p>
              </section>

              {/* Section 9: Dispute Scenarios Tab Island */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Dispute Scenarios: Identify Your Legal Route &amp; Police Action Feasibility
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Scenario to Reveal Likely Police Response, Applicable Law, and the Right Enforcement Strategy
                  </p>
                </div>

                <BnsRouteTabs />
              </section>

              {/* Section 10: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Lender Recovers ₹6,50,000 Loan After Debtor Falsely Claimed Medical Crisis
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Legal Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru, Karnataka (Personal Hand Loan)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Sunita Rao advanced ₹6,50,000 via three IMPS and UPI bank transfers to her former business colleague, Rohan Mehta, in August 2025. Rohan pleaded an urgent financial crisis, claiming his mother required emergency cancer surgery at a private hospital in Bengaluru and promised full repayment within 90 days.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> After 90 days, Rohan blocked Sunita&apos;s phone number and social media profiles. Sunita visited the hospital and discovered that Rohan&apos;s mother had never been admitted, and the estimate slips shared on WhatsApp were forged. Sunita approached her local police station to file an FIR. The station writer initially refused to accept the complaint, remarking that &quot;money disputes are civil matters for the court&quot;.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Sunita engaged LegalRecovery.in. An advocate drafted an exhaustive statutory legal demand notice invoking Section 318(4) of the Bharatiya Nyaya Sanhita, 2023, and Section 18 of the Limitation Act, 1963. The notice highlighted the forged hospital estimate slips as conclusive evidence of fraudulent inducement at inception under Section 63 BSA. Simultaneously, a formal complaint was prepared under Section 173(3) BNSS addressed to the Deputy Commissioner of Police (DCP).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Upon delivery of the advocate legal notice via Registered Speed Post and email, Rohan realised that his criminal exposure under BNS 318(4) carried up to 7 years non-bailable imprisonment. Facing imminent DCP inquiry and an Order 37 summary suit, Rohan engaged his counsel and entered into a formal registered settlement agreement, transferring ₹6,50,000 in full settlement within 14 days.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Critical Documents Before Serving Notice or Approaching Police
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital banking records are fully admissible in court. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statements / UPI Transfer Receipts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing exact debit dates, transfer amounts, recipient beneficiary names, and 12-digit bank UTR numbers.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Exported WhatsApp &amp; SMS Chat History:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the request for funds, loan purpose, promises to repay, and admissions of unpaid balance under Section 63 BSA.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Promissory Note / Loan Agreement / Receipt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Any written acknowledgment, promissory note (on revenue stamp), or informal receipt executed by the borrower.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Deception at Inception (If Cheating Claimed):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Forged hospital invoices, fake business agreements, or false collateral proofs demonstrating fraud from Day 1.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dishonoured Cheque &amp; Bank Return Memo (If Any):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original bounced cheque and bank slip showing &apos;Funds Insufficient&apos; or &apos;Account Closed&apos;.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Postal Speed Post Tracking Proof of Legal Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">India Post consignment tracking slip confirming deemed delivery or deliberate refusal under Section 27 General Clauses Act.</p>
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
                    Frequently Asked Questions About BNS 318, Cheating FIRs &amp; Civil Money Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Bharatiya Nyaya Sanhita, Limitation Act, and Supreme Court Jurisprudence
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
                  Primary Statutes, Supreme Court Judgments &amp; Official References
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
                  Statutory verification status: All provisions checked against active India Code repositories for Bharatiya Nyaya Sanhita, 2023, Bharatiya Nagarik Suraksha Sanhita, 2023, Bharatiya Sakshya Adhiniyam, 2023, and Supreme Court rulings as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Money Recovery
                </h2>
                <BnsNoticeCTA variant="primary" />
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
                    Friendly Loan Recovery Legal Notice Hub →
                  </Link>
                  <Link
                    href="/recover-money-from-ex-boyfriend-girlfriend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money From Ex-Boyfriend or Girlfriend →
                  </Link>
                  <Link
                    href="/upi-transfer-as-proof-of-loan"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UPI Transfer as Proof of Loan under BSA 2023 →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 Summary Suit Fast Recovery Guide →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Advocate Fees →
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
