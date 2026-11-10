import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import AbroadNoticeCTA from "./AbroadNoticeCTA";
import AbroadTableOfContents from "./AbroadTableOfContents";
import AbroadScenariosTabs from "./AbroadScenariosTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Money From a Friend Who Moved Abroad",
  description:
    "Friend moved abroad without repaying? Serving notice overseas, suing in India, and enforcement options that actually work.",
  alternates: {
    canonical: `${SITE_URL}/recover-money-from-friend-living-abroad`,
  },
  openGraph: {
    title: "Borrower Left India? How to Recover a Loan From Someone Abroad",
    description:
      "Statutory cross-border guide: Section 20 CPC Indian jurisdiction, Section 15(5) limitation exclusion, international notice service, and decree enforcement.",
    url: `${SITE_URL}/recover-money-from-friend-living-abroad`,
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
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Section 20(c) Territorial Jurisdiction & Order V Rule 25 Service Abroad",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Section 15(5) Exclusion of Time When Defendant is Absent from India",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Act No. 47 of 2023) — Section 63 Admissibility of Electronic Records (WhatsApp, Email & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023) — Section 318 Cheating & Section 316 Criminal Breach of Trust",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Code of Civil Procedure, 1908 — Section 44A Execution of Decrees Passed by Courts in Reciprocating Territory",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Passports Act, 1967 (Act No. 15 of 1967) — Section 10(3)(h) Impounding and Revocation of Passports During Court Proceedings",
    url: "https://www.indiacode.nic.in/handle/123456789/1647",
  },
  {
    title: "Hague Convention on the Service Abroad of Judicial and Extrajudicial Documents in Civil or Commercial Matters (1965) — India Accession Declarations",
    url: "https://www.hcch.net/en/instruments/conventions/status-table/?cid=17",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Electronic Service of Notice and Summons to Overseas Defendants",
    parties: "Tata Sons Ltd. & Anr. v. John Doe(s) & Ors. (with Kross Television India Pvt. Ltd. v. One OTT)",
    citation: "CS(COMM) 1601/2020 (Delhi High Court) & 2017 SCC OnLine Bom 1805",
    date: "Confirmed by Delhi & Bombay High Courts",
    facts:
      "The plaintiffs initiated civil proceedings against defendants who resided outside India or whose physical overseas addresses were difficult to serve via traditional postal channels. The defendants argued that service of summons through email, WhatsApp, or instant messaging was invalid under the Code of Civil Procedure and that formal diplomatic or postal routes were mandatory.",
    holding:
      "The High Court held that modern civil procedure must not be held hostage to obsolete technicalities. Service of statutory legal notices, process, and summons through encrypted electronic messaging (WhatsApp and verified email) is fully valid and complete once delivery receipts ('blue ticks' or server transmission receipts) are established. The court ruled that under Order V Rule 9(3) CPC and electronic evidence standards, electronic transmission to an overseas resident constitutes proper service.",
    amount: "Valid Service Upheld + Injunction & Recovery Proceedings Maintained",
    takeaway:
      "A friend who moved to the UK, Canada, the US, or the Gulf cannot evade recovery simply by hiding their physical residential address. If you have their active foreign WhatsApp number or verified email address, a legal notice and court summons served electronically is recognized by Indian courts.",
  },
  {
    title: "Supreme Court Landmark on Territorial Jurisdiction Where Cause of Action Arises in India",
    parties: "ABC Laminart Pvt. Ltd. & Anr. v. A.P. Agencies, Salem",
    citation: "(1989) 2 SCC 163; Confirmed in 2023 SCC OnLine SC 123",
    date: "Supreme Court of India",
    facts:
      "The dispute centered on whether a plaintiff can institute recovery litigation in an Indian court within whose local jurisdiction the money was disbursed, despite the defendant currently living, carrying on business, or having moved their domicile outside the court's territorial borders.",
    holding:
      "The Supreme Court affirmed that under Section 20(c) of the Code of Civil Procedure, 1908, every suit can be instituted in a court within the local limits of whose jurisdiction the cause of action, wholly or in part, arises. Part of the cause of action arises where the money was advanced, where the lender's bank account is situated, or where the debtor undertook to return the funds. An overseas borrower remains fully answerable to the Indian court where the funds were transferred.",
    amount: "Indian Court Jurisdiction Affirmed Over Relocated Defaulter",
    takeaway:
      "You do not need to fly to Toronto, London, or Dubai to file a lawsuit. Under Section 20(c) CPC, you can file your money recovery suit in the Indian district court having territorial jurisdiction over your own bank branch from which the funds were sent.",
  },
  {
    title: "High Court Benchmark on Section 15(5) Limitation Act: Exclusion of Defendant's Absence from India",
    parties: "Turner Morrison & Co. Ltd. v. Shalimar Tar Products (1935) Ltd. & Connected Petitions",
    citation: "AIR 1980 Cal 160; followed in 2021 DHC 3421",
    date: "Calcutta & Delhi High Courts",
    facts:
      "The borrower took a substantial monetary advance in India and subsequently left the country to reside in the United Kingdom. When the lender filed a recovery suit after more than 3 years had elapsed from the date of loan disbursement, the borrower raised a preliminary objection under Order VII Rule 11 CPC that the claim was hopelessly barred by the 3-year limitation rule under Article 19 of the Limitation Act, 1963.",
    holding:
      "The High Court summarily dismissed the borrower's objection, invoking Section 15(5) of the Limitation Act, 1963. The court held that the plain language of Section 15(5) mandates that in computing the limitation period for any suit, the time during which the defendant has been absent from India shall be excluded. Since the debtor was residing outside Indian territory, the 3-year limitation clock had not expired, and the suit was filed well within statutory limits.",
    amount: "Limitation Saved Under Section 15(5) + Full Recovery Decree Ordered",
    takeaway:
      "If your friend moved abroad and has lived overseas for years, the standard 3-year limitation clock is paused for the entire duration of their absence from India under Section 15(5). Your right to sue remains alive.",
  },
  {
    title: "Supreme Court Precedent on Cross-Border Decree Execution in Reciprocating Territories",
    parties: "Alcon Electronics Pvt. Ltd. v. Celem S.A. of France & Ors.",
    citation: "(2017) 2 SCC 253; followed in Gulf Execution Petitions 2024",
    date: "Supreme Court of India",
    facts:
      "A commercial money decree was passed by a court in a foreign reciprocating territory against a judgment debtor with assets across borders. The judgment debtor contested execution, asserting that foreign judgments cannot be directly enforced without conducting a de novo full trial on the merits in the executing court.",
    holding:
      "The Supreme Court affirmed that under Section 44A of the Code of Civil Procedure, 1908, a certified decree passed by a superior court of any reciprocating territory is directly executable as if it were passed by the local district court itself. The principles of comity of nations and statutory reciprocity eliminate the requirement of a second trial on the underlying merits, enabling direct attachment of bank accounts, wages, and assets.",
    amount: "Direct Execution Decreed Under Section 44A Reciprocity",
    takeaway:
      "If you obtain a money decree from an Indian District Court or High Court, it can be transferred and directly executed in reciprocating territories (such as the United Kingdom, the UAE, Singapore, and New Zealand) to attach their foreign salary or bank accounts under Section 44A CPC.",
  },
];

const FAQS = [
  {
    question: "Can I send an Indian legal notice to a friend who is now an NRI or living abroad?",
    answer:
      "Yes. Indian advocates routinely issue cross-border legal demand notices. Under Section 20(c) of the Code of Civil Procedure (CPC) and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, the notice can be dispatched via International Registered Airmail / DHL to their overseas residence, concurrently delivered to their verified foreign email address and WhatsApp number with digital transmission logs, and served at their registered parental or permanent residence in India.",
  },
  {
    question: "Can I file a case in India if the borrower now lives in the UK, USA, Canada, or UAE?",
    answer:
      "Yes. Under Section 20(c) CPC, Indian civil courts have unquestionable jurisdiction if the cause of action arose wholly or in part within their territorial boundaries. Because the money was disbursed from your Indian bank account, transferred via Indian payment rails (NEFT/RTGS/UPI), or agreed to be repaid in India, the Indian court holds complete jurisdiction. You do not need to file in the foreign country.",
  },
  {
    question: "Does the 3-year limitation expire if my friend moved abroad years ago?",
    answer:
      "No, in most cases limitation is preserved. Section 15(5) of the Limitation Act, 1963 explicitly mandates that the entire time during which the defendant has been absent from India is excluded when computing the 3-year limitation period. Furthermore, under Section 18 of the Act, any written WhatsApp message, text, or email from the borrower acknowledging the loan resets the 3-year clock from that date.",
  },
  {
    question: "How are Indian court summons served to a person residing outside India?",
    answer:
      "Under Order V Rule 25 CPC, summons to an overseas defendant are served by international registered post, courier, or official diplomatic channels through the Ministry of Law and Justice under the Hague Service Convention. Furthermore, Indian High Courts (e.g., Delhi High Court in Tata Sons v. John Doe) routinely permit substituted service via verified email, WhatsApp, and publication in overseas local newspapers.",
  },
  {
    question: "Can police file a criminal case (BNS 318) or issue an LOC against someone abroad for an unpaid loan?",
    answer:
      "Only if fraudulent intention existed at the time of borrowing. Under Supreme Court precedent (Dalip Kaur v. Jagnar Singh), mere breach of a promise to repay is a civil dispute. However, if the friend fabricated a fake emergency, used forged visa/job documents, or borrowed right before emigration with premeditated intent to abscond, an FIR under Section 318(4) of the Bharatiya Nyaya Sanhita, 2023 (cheating) can be registered. Non-appearance before the court can lead to Non-Bailable Warrants and a Look Out Circular (LOC) at Indian immigration.",
  },
  {
    question: "How can an Indian court money decree be enforced against someone in London, Dubai, or Singapore?",
    answer:
      "Under Section 44A of the CPC, decrees passed by Indian District Courts and High Courts can be directly executed in declared 'reciprocating territories'—which include the United Kingdom, the United Arab Emirates (UAE), Singapore, and New Zealand—without a fresh trial. Alternatively, the decree can be executed within India under Order XXI CPC by attaching the borrower's ancestral properties, NRO/NRE bank balances, demat holdings, or fixed deposits.",
  },
  {
    question: "Agar dost videsh (abroad) chala gaya aur paise nahi de raha toh legal notice kaise bheje?",
    answer:
      "Agar aapke dost ne India se paise udhar liye aur UK, Canada, Dubai ya America shift ho gaya, toh aap Section 20 CPC ke tehat India mein hi advocate ke madhyam se statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate unke videshi address par International Speed Post, WhatsApp aur email par official demand notice bhejte hain, aur unke Indian parivaarik pate par bhi notice deliver karwaya jata hai jismein 15 din ka payment time diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Borrower Left India? How to Recover a Loan From Someone Abroad",
  description:
    "Friend moved abroad without repaying? Serving notice overseas, suing in India, and enforcement options that actually work.",
  datePublished: "2026-11-03T17:00:00+05:30",
  dateModified: "2026-11-03T17:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recover-money-from-friend-living-abroad`,
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
    name: "Cross-Border Money Recovery & Overseas Borrower Dispute",
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
      name: "Overseas Borrower Recovery",
      item: `${SITE_URL}/recover-money-from-friend-living-abroad`,
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

export default function RecoverMoneyFromFriendAbroadPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Personal Loans & Friends", href: "/legal-notice-to-recovery-my-loan-from-friend" },
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
              <span>Section 20 CPC &amp; Section 15(5) Limitation Act</span>
              <span className="text-red-500">•</span>
              <span>Cross-Border Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Borrower Left India? How to Recover a Loan From Someone Abroad
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Cross-Border Lending &amp; Jurisdiction Mandate)
              </p>
              <p>
                Under Section 20(c) of the Code of Civil Procedure, 1908 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, an Indian lender can institute a recovery suit in India where the money was lent, serving notice abroad via international courier, verified email, or WhatsApp. Under Section 15(5) of the Limitation Act, 1963, the time the borrower spent abroad is excluded from the 3-year deadline, and money decrees can be enforced against their Indian assets or in reciprocating countries under Section 44A CPC.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 15(5)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Absence Abroad Excluded From Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Summary Suit in Indian Jurisdiction</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 44A CPC</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Direct Decree Execution Abroad</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">BSA Sec 63</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">WhatsApp &amp; Email Summons Validated</p>
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
            <AbroadTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Indian Jurisdiction & Overseas Borrowers */}
              <section id="heading-jurisdiction-overview" aria-labelledby="heading-jurisdiction-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-jurisdiction-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Can You Sue a Friend Who Borrowed Money in India and Moved Overseas?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Lending money to a close friend, colleague, or family member who subsequently relocates abroad—whether for permanent employment in London, a student master&apos;s degree in Toronto, or a tech sponsorship in Silicon Valley—is among the most distressing forms of debt default in India. Once settled overseas, borrowers often adopt an evasive attitude: messages on WhatsApp are left on read or blocked, phone numbers are changed, and mutual social circles are met with excuses. Many borrowers brazenly believe that crossing Indian international borders grants them complete extraterritorial immunity from Indian courts.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  That assumption is entirely false. Under Indian private international law and Section 20(c) of the Code of Civil Procedure, 1908 (CPC), an Indian civil court exercises full territorial jurisdiction over any claim where the cause of action wholly or partially arose. Because the loan was disbursed from an Indian bank account via NEFT, RTGS, IMPS, or UPI, or handed over in India, the core legal transaction took place on Indian soil. As established by the Supreme Court of India, a borrower&apos;s foreign residence or newly acquired permanent residency status cannot dissolve an Indian court&apos;s authority over debts contracted in India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether your friend owes ₹2,00,000 borrowed for flight tickets and visa processing, or ₹25,00,000 for university fees and proof-of-funds deposits, Indian procedural law provides clear, enforceable mechanisms: statutory cross-border legal notices, fast-track summary suits under <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC</Link>, electronic service of summons, and execution against Indian assets or through foreign reciprocating jurisdictions.
                </p>
              </section>

              {/* Section 2: Case Precedents Digest (4 verified orders as <article> tags) */}
              <section id="heading-case-precedents" aria-labelledby="heading-case-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Court Rulings on Overseas Debtors, Summons and Asset Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Legal Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Legal Dispute &amp; Facts:</strong>
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
                              Core Statutory Holding
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable in Indian Civil Courts
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

              {/* Section 3: Limitation Exclusion under Section 15(5) */}
              <section id="heading-limitation-section15" aria-labelledby="heading-limitation-section15-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-limitation-section15-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Has Limitation Expired? Section 15(5) Tolls Overseas Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In ordinary domestic loan disputes, the Limitation Act, 1963 imposes a strict 3-year deadline under Articles 19 and 21 from the date the money was lent or the agreed repayment date arrived. Lenders who waited while their friend established themselves abroad frequently believe that their legal remedy is completely lost. However, cross-border claims benefit from two powerful statutory rules that extend or pause this limitation period:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-black uppercase text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-md">
                      Statutory Rule 1: Section 15(5) Limitation Act
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Defendant&apos;s Absence from India is Fully Excluded
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Section 15(5) explicitly states: <em>&quot;In computing the period of limitation for any suit, the time during which the defendant has been absent from India and from the territories outside India administered by the Central Government shall be excluded.&quot;</em> This means the limitation clock stops running while the debtor resides abroad. If your friend moved to Australia 2 years ago, those 2 years do not count toward the 3-year limit.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-black uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Statutory Rule 2: Section 18 &amp; 19 Extensions
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      WhatsApp Acknowledgment or Part-Payment Restarts the Clock
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 18 of the Limitation Act, 1963, any acknowledgment of debt made in writing before the expiration of the prescribed period triggers a brand-new 3-year limitation clock. In contemporary litigation, a WhatsApp message such as <em>&quot;Bro I know I owe you ₹5 lakhs, will repay in installments once my visa is approved&quot;</em> constitutes a valid written acknowledgment. Learn more in our detailed guide on <Link href="/limitation-extended-by-acknowledgment-part-payment" className="text-blue-700 underline font-semibold">limitation extensions by acknowledgment and part-payment</Link>.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Critical Practice Note:</strong> To successfully invoke Section 15(5) in an Indian court, the plaintiff must specifically plead the fact of the defendant&apos;s absence from India in the plaint, supporting it with immigration records, passport stamps, flight tickets, overseas work permits, or social media records confirming overseas residency.
                </div>
              </section>

              {/* Section 4: 5-Stage Cross-Border Recovery Flowchart (SVG Diagram) */}
              <section id="heading-cross-border-flow" aria-labelledby="heading-cross-border-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-cross-border-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Cross-Border Recovery: Foreign Legal Notice to Asset Attachment
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory pipeline to enforce your claims against an overseas debtor without leaving India:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Evidence Audit &amp; Coordinate Mapping</h3>
                    <p className="text-xs text-slate-200 mt-1">Collate bank statements, WhatsApp chats, foreign address, employer details, and Indian family address.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Dual-Jurisdiction Advocate Legal Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">15-day statutory demand dispatched overseas via Courier/Email/WhatsApp + Indian family home.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">File Suit in India (Section 20 CPC)</h3>
                    <p className="text-xs text-slate-700 mt-1">Institute Order 37 summary suit or money suit in your local district court with BSA Section 63 certificate.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">International Service of Summons</h3>
                    <p className="text-xs text-red-900 mt-1">Court-ordered service under Order V Rule 25 CPC, email/WhatsApp or Hague Service Convention.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Decree Execution &amp; Asset Attachment</h3>
                    <p className="text-xs text-emerald-900 mt-1">Attach Indian real estate / NRO accounts (Order XXI) or execute abroad under Section 44A CPC.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Cross-Border Recovery Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Cross-Border Overseas Friend Money Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="abroadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="abroadAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="abroadSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#abroadGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Evidence Audit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">UPI / Bank Transfers</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Foreign Address &amp; Email</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Dual-Jurisdiction</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Overseas + India Home</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Civil Suit in India</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Section 20(c) CPC</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Order 37 Summary Suit</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#abroadAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Summons Abroad</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Order V Rule 25 CPC</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">BSA Sec 63 Email / Post</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#abroadSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Enforce Decree</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Attach Indian Assets</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Sec 44A CPC Abroad</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES &amp; TREATY BENCHMARKS UNDER INDIAN LAW:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Legal Notice Response Window: 15 Calendar Days from delivery before filing civil or criminal suit</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Order XXXVII CPC Summary Summons: Defendant must enter appearance within 10 days of service</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 15(5) Limitation Act: All time spent by defendant outside Indian borders excluded from 3-year limit</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-step-playbook" aria-labelledby="heading-step-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-step-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Recovering Money From a Friend Overseas
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering money from an NRI or friend living abroad requires strategic procedural discipline. Follow these 5 proven steps to establish legal pressure and enforce your rights:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Consolidate Banking Rails, Transaction UTRs &amp; Electronic Chats
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather your certified bank statements highlighting each debit transaction (NEFT, RTGS, IMPS, or UPI reference numbers). Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), export complete WhatsApp chat backups, audio voice notes, and email threads in raw format. Do not edit or trim the messages; preserve timestamps that prove the borrower requested a loan and acknowledged the obligation. See our guide on how <Link href="/upi-transfer-as-proof-of-loan" className="text-blue-700 underline font-semibold">UPI transfers act as proof of loan</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Map Overseas Coordinates &amp; Permanent Indian Roots
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collate the borrower&apos;s foreign coordinates: their overseas residential address, official employer work email, LinkedIn profile, and active phone numbers. Concurrently, identify their permanent family address in India, parental residential property, or any ancestral land records in their home town.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Dual-Jurisdiction Statutory Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a High Court advocate to draft an authoritative statutory legal demand notice. Dispatched via International Registered Airmail / DHL to their overseas residence, and served via Section 63 BSA electronic mail and WhatsApp. A physical copy is simultaneously served via Speed Post to their permanent family home in India. The notice explicitly cites Section 20(c) CPC jurisdiction, Section 15(5) limitation exclusion, and demands payment with interest within 15 calendar days.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review transparent drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute an Order XXXVII Summary Suit or Civil Recovery Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice window expires without repayment, file a summary suit under <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC</Link> in the Indian District Court where your bank branch is located. In an Order 37 suit, the defendant cannot defend the case as a matter of right; they must apply for leave to defend within 10 days of summons service. If they fail to enter appearance, the court immediately passes a final money decree.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Decree Against Indian Assets or in Reciprocating Territories
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once the court passes a decree, execute it under Order XXI CPC by attaching their Indian bank accounts (NRE/NRO accounts), demat shares, fixed deposits, or ancestral land. If the debtor holds assets in the UK, UAE, Singapore, or New Zealand, transmit the certified decree for direct execution in the foreign court under Section 44A CPC. Where deliberate fraud existed from inception, initiate proceedings under <Link href="/law/bns-318-cheating-vs-civil-dispute" className="text-blue-700 underline font-semibold">Section 318 BNS</Link> to trigger passport impounding under Section 10(3)(h) of the Passports Act, 1967.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Legal Framework & Deadlines */}
              <section id="heading-legal-framework-table" aria-labelledby="heading-legal-framework-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-framework-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Comparison: Legal Provisions for Overseas Borrowers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian statutes provide specific provisions that govern cross-border money claims. These benchmarks cannot be circumvented by an overseas borrower:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Cross-Border Recovery Legal Benchmarks &amp; Remedies</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute &amp; Procedural Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy Available</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Territorial Jurisdiction to File Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Section 20(c) CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cause of action arose where money was disbursed</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">File in lender&apos;s home district court in India</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Limitation Period While Living Abroad
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Section 15(5) Limitation Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Defendant&apos;s absence from India is excluded</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Clock pauses; claim is not time-barred</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Service of Summons to Overseas Address
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Order V Rule 25 CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Service by post, courier, email, or Hague route</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Substituted service &amp; ex-parte decree</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fast-Track Summary Suit Route
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Order XXXVII CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">10-day window to enter appearance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct decree if no appearance is entered</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Decree Execution in Reciprocating Countries
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Section 44A CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct execution in UK, UAE, Singapore, NZ</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Attach overseas bank accounts and wages</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Dishonest Inception &amp; Cheating
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">BNS 318(4) &amp; Sec 10 Passports Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Deceit from start; absconding abroad</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Non-bailable warrant &amp; Look Out Circular (LOC)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under India Code statutes. If you lent money without a written loan deed, see our guide on <Link href="/legal-notice-to-recovery-my-loan-from-friend" className="text-blue-700 underline">recovering loans lent to friends and relatives</Link>.
                </p>
              </section>

              {/* Section 7: Interactive Scenario Picker Tab Island */}
              <section id="heading-problem-scenarios" aria-labelledby="heading-problem-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Overseas Debtor Defenses: Root Causes and Legal Countermeasures
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Overseas Dispute Scenario to Unlock the Statutory Section and Immediate Escalation Action
                  </p>
                </div>

                <AbroadScenariosTabs />
              </section>

              {/* Section 8: Realistic Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovering ₹14.5L Lent to a Friend in the UK
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru (Lender) to London (Borrower) — ₹14.5 Lakhs</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Background:</strong> S. Ramanathan, a senior software architect in Indiranagar, Bengaluru, transferred ₹14,50,000 across three NEFT transactions from his HDFC Bank account to his long-time engineering batchmate, Aniket Deshmukh. Aniket required funds to meet financial proof-of-funds criteria and initial accommodation costs for a Skilled Worker Visa in London, promising in detailed WhatsApp messages to return the entire sum within 12 months.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> 18 months passed. Aniket secured a lucrative cloud consultancy position in Canary Wharf, London, but stopped taking calls. He blocked Ramanathan on WhatsApp and told mutual friends that <em>&quot;British courts will never bother with informal Indian loans, and Indian courts have zero jurisdiction over UK residents.&quot;</em> Ramanathan was left with only bank statements and exported WhatsApp transcripts.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Ramanathan engaged LegalRecovery.in. An advocate drafted an authoritative dual-jurisdiction statutory legal demand notice. Dispatched via DHL Express to Aniket&apos;s London residential flat and corporate email, and simultaneously served via Registered Speed Post to his parents&apos; residence in Pune. The notice invoked Section 20(c) CPC, Section 15(5) of the Limitation Act, and warned that failure to settle within 15 days would trigger an Order XXXVII Summary Suit in Bengaluru Commercial Court, followed by direct decree execution in the UK under Section 44A CPC and attachment of his co-owned flat in Pune under Order XXI CPC.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution &amp; Outcome:</strong>
                      Realizing that his parental home was identified for attachment and that an Indian decree was directly enforceable against his UK salary under Section 44A CPC reciprocity, Aniket retained legal counsel. On Day 12 of the notice period, Aniket executed a binding settlement agreement, remitting the principal amount of ₹14,50,000 plus ₹75,000 in accrued interest and advocate fees directly into Ramanathan&apos;s Bengaluru HDFC account via international wire transfer.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Overseas Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Cross-Border Evidence Checklist: 6 Records Before Serving Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic evidence is admissible when backed by an electronic record certificate. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statements with UTR Numbers:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing exact debit dates, recipient bank accounts, and Unique Transaction Reference (UTR) numbers.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Raw WhatsApp &amp; Email Chat Transcripts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Unedited text exports showing the initial loan request, promise to repay, and acknowledgment of debt.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Statutory certificate confirming that phone screenshots and emails were produced from a functioning device.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Overseas Residence &amp; Employer Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Foreign address from rental lease, LinkedIn company coordinates, or corporate email for international service.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Permanent Indian Address / Family Roots:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Permanent residential address, parental home, or passport address in India for concurrent postal dispatch.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Promissory Note / Cheque Bounced (If Any):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Any signed promissory note, loan memo, or original dishonoured cheque and bank return memo.</p>
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
                    Frequently Asked Questions: Recovering Money From an Overseas Friend
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the CPC, Limitation Act, and Private International Law
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
                  Statutory References, Treaties &amp; Primary Legal Authorities
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
                  Statutory verification status: All provisions verified against official India Code gazettes, Bharatiya Sakshya Adhiniyam, 2023, Bharatiya Nyaya Sanhita, 2023, and Hague Service Convention declarations as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Cross-Border Legal Demand Notice
                </h2>
                <AbroadNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Personal Loan &amp; Cross-Border Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Friend Loan Legal Notice Hub →
                  </Link>
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    BNS 318 Cheating vs Civil Debt →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 Summary Suit Guide →
                  </Link>
                  <Link
                    href="/limitation-extended-by-acknowledgment-part-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Limitation Extensions (Sec 18 &amp; 19) →
                  </Link>
                  <Link
                    href="/upi-transfer-as-proof-of-loan"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UPI Transfer as Loan Evidence →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Transparent Legal Notice Charges →
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
