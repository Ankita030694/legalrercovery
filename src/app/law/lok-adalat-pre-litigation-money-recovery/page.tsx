import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LokAdalatNoticeCTA from "./LokAdalatNoticeCTA";
import LokAdalatTableOfContents from "./LokAdalatTableOfContents";
import LokAdalatProblemTabs from "./LokAdalatProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Pre-Litigation Lok Adalat for Money Recovery: Guide",
  description:
    "How pre-litigation Lok Adalats work for money claims: free filing, a binding award, which cases qualify, and how to apply.",
  alternates: {
    canonical: `${SITE_URL}/law/lok-adalat-pre-litigation-money-recovery`,
  },
  openGraph: {
    title: "Pre-Litigation Lok Adalat for Money Recovery: Complete Statutory Guide",
    description:
      "Comprehensive breakdown of resolving debt and money disputes via pre-litigation Lok Adalat under the Legal Services Authorities Act, 1987. Free filing, civil court decree status, and execution under Order 21 CPC.",
    url: `${SITE_URL}/law/lok-adalat-pre-litigation-money-recovery`,
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
    title: "Legal Services Authorities Act, 1987 (Act No. 39 of 1987) — Section 19 (Organization of Lok Adalats), Section 20 (Cognizance of Cases), & Section 21 (Award of Lok Adalat)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "National Legal Services Authority (Lok Adalat) Regulations, 2009 (as amended) — Gazette of India Notification on Pre-Litigation Conciliation Procedure",
    url: "https://nalsa.gov.in/acts-rules/regulations/national-legal-services-authority-lok-adalats-regulations-2009",
  },
  {
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXI (Execution of Decrees and Orders) & Section 89 (Settlement of Disputes Outside Court)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Court Fees Act, 1870 — Section 16 (Refund of Court Fee on Settlement via Lok Adalat under Section 89 CPC)",
    url: "https://www.indiacode.nic.in/handle/123456789/2293",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 138 (Dishonour of Cheque) & Section 147 (Offences to be Compoundable)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Supreme Court of India — State of Punjab & Anr. v. Jalour Singh & Ors. (2008) 2 SCC 660 (Finality and Non-Appealability of Lok Adalat Awards)",
    url: "https://main.sci.gov.in/judgment/judis/30528.pdf",
  },
  {
    title: "Supreme Court of India — K.N. Govindan Kutty Menon v. C.D. Shaji (2012) 2 SCC 31 (Deemed Civil Decree Status of Section 138 Lok Adalat Awards)",
    url: "https://main.sci.gov.in/judgment/judis/38746.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Lok Adalat Award Possesses Exact Character of Civil Court Decree (Non-Appealable)",
    parties: "State of Punjab & Anr. v. Jalour Singh & Ors.",
    citation: "Civil Appeal No. 7188 of 2008, (2008) 2 SCC 660 (Supreme Court of India)",
    date: "Judgment Dated 18 January 2008",
    facts:
      "A motor accident compensation claim was referred to a Lok Adalat organized by the High Court. The Lok Adalat bench determined an enhanced award. The appellant State of Punjab attempted to appeal against the Lok Adalat order before a Division Bench of the High Court, asserting that the award was excessive.",
    holding:
      "The Supreme Court ruled that under Section 21 of the Legal Services Authorities Act, 1987, every award of a Lok Adalat is deemed to be a decree of a Civil Court. Section 21(2) explicitly mandates that no appeal shall lie against an award of the Lok Adalat to any court. A Lok Adalat cannot adjudicate or determine a dispute judicially; it merely records a settlement or compromise arrived at by the parties. Once signed, the award is final and cannot be reopened by an appeal or revision.",
    amount: "Doctrine of Absolute Finality & Statutory Bar on Appeals Affirmed",
    takeaway:
      "When you settle a debt at a pre-litigation Lok Adalat, the debtor cannot drag you into appellate courts or delay payment through appeals. The award is final and binding on both sides from the moment it is signed.",
  },
  {
    title: "Compoundable Cheque Bounce Lok Adalat Award Enforceable as Civil Decree",
    parties: "K.N. Govindan Kutty Menon v. C.D. Shaji",
    citation: "Criminal Appeal No. 2410 of 2011, (2012) 2 SCC 31 (Supreme Court of India)",
    date: "Judgment Dated 23 November 2011",
    facts:
      "The appellant filed a criminal complaint under Section 138 of the Negotiable Instruments Act for cheque dishonour. The dispute was referred to a Lok Adalat where parties executed a compromise agreement. When the respondent defaulted on the agreed payment schedule, the appellant filed an Execution Petition in a Civil Court under Order 21 CPC. The High Court rejected the execution petition, holding that a criminal court award could not be executed as a civil decree.",
    holding:
      "A three-judge bench of the Supreme Court reversed the High Court, definitively ruling that even if a dispute originated before a criminal court under Section 138 of the NI Act, once it is compromised before a Lok Adalat, Section 21 of the Legal Services Authorities Act creates a statutory legal fiction. The award is deemed to be a decree of a Civil Court and is executable before an ordinary Civil Court through property attachment, salary garnishment, or civil imprisonment under Order 21 CPC.",
    amount: "Universal Execution Power Under Order 21 CPC for NI Act Awards",
    takeaway:
      "Even if a cheque dishonour or compoundable complaint settles in Lok Adalat, you do not have to initiate a separate civil suit if the debtor defaults. You directly execute the award as a full Civil Court decree.",
  },
  {
    title: "Award Passed Without Free Consent of Both Parties Is Void Ab Initio",
    parties: "B.P. Moideen Sevamandir & Anr. v. A.M. Kutty Hassan",
    citation: "Civil Appeal No. 841 of 2009, (2009) 2 SCC 198 (Supreme Court of India)",
    date: "Judgment Dated 06 February 2009",
    facts:
      "A money recovery and property dispute was sent to a Lok Adalat. The conciliators drafted settlement terms and passed an award based on discussions, despite one party refusing to sign the memorandum of compromise and objecting to the settlement valuation.",
    holding:
      "The Supreme Court struck down the award, reaffirming that a Lok Adalat has no judicial power to adjudicate, determine, or impose any decision on non-consenting parties. Compromise or mutual settlement between the parties is the sine qua non (essential condition) for passing a valid award under Section 20. If either party does not freely agree, the Lok Adalat must return the matter to the regular court or close the pre-litigation docket without passing an award.",
    amount: "Consent-Driven Integrity of Lok Adalat System Protected",
    takeaway:
      "Pre-litigation Lok Adalats cannot force a creditor to accept an unfair haircut or compel a debtor against their will. An award is only valid when both parties voluntarily sign the joint terms of compromise.",
  },
  {
    title: "Lok Adalat Decree Operates as Res Judicata and Cannot Be Challenged in Civil Suit",
    parties: "P.T. Thomas v. Thomas Job",
    citation: "Civil Appeal No. 4605 of 2005, (2005) 6 SCC 478 (Supreme Court of India)",
    date: "Judgment Dated 04 August 2005",
    facts:
      "Following a money compromise recorded before a Lok Adalat, one of the parties filed a fresh regular civil suit challenging the compromise decree, claiming mistake of fact and seeking a declaration that the settlement was void.",
    holding:
      "The Supreme Court held that an award of a Lok Adalat, which is deemed to be a decree of a Civil Court, has the effect of a consent decree. It operates as res judicata between the parties and bars any fresh suit on the same cause of action. The only very narrow remedy available to an aggrieved party is an extraordinary writ petition under Article 226 or 227 of the Constitution before the High Court, and that too solely on strict grounds of proved fraud or misrepresentation.",
    amount: "Complete Bar on Subsequent Money Suits Established",
    takeaway:
      "Once an award is executed at a pre-litigation Lok Adalat, the debtor is permanently barred from filing a subsequent suit to dispute the debt or delay repayment.",
  },
];

const FAQS = [
  {
    question: "What is a pre-litigation Lok Adalat and how does it help recover money?",
    answer:
      "A pre-litigation Lok Adalat is an official statutory dispute resolution forum organized under Section 19(5)(ii) of the Legal Services Authorities Act, 1987 by the District Legal Services Authority (DLSA) or Taluk Legal Services Committee (TLSC). It allows creditors and debtors to resolve monetary disputes (unpaid invoices, bounced cheques, friendly loans, or contract arrears) before any lawsuit is filed in court. When parties agree to terms, the panel passes an award that has the exact legal effect of a Civil Court decree under Section 21, executable immediately without a 3-year trial.",
  },
  {
    question: "What are the court fees for filing a pre-litigation money recovery claim?",
    answer:
      "Filing a pre-litigation claim before a Lok Adalat is completely free. There are zero court fees, zero application stamps, and zero process charges payable to the District Legal Services Authority (DLSA). Furthermore, under Section 16 of the Court Fees Act, 1870, if a pending civil money suit is referred to a Lok Adalat and settled, the court refunds 100% of the court fees already deposited by the plaintiff.",
  },
  {
    question: "Is a pre-litigation Lok Adalat award legally binding and appealable?",
    answer:
      "Yes, it is strictly binding and non-appealable. Under Section 21(1) of the Legal Services Authorities Act, 1987, the award is legally deemed to be a decree of a competent Civil Court. Under Section 21(2), no appeal lies against an award of the Lok Adalat to any court. The Supreme Court settled in State of Punjab v. Jalour Singh (2008) that because the award is passed on mutual consent, neither party can challenge it through an appeal or revision.",
  },
  {
    question: "What happens if the opposite party ignores the Lok Adalat pre-litigation notice?",
    answer:
      "Pre-litigation Lok Adalat is a voluntary conciliation mechanism. If the debtor fails to appear despite receiving summons from the DLSA Secretary, the Lok Adalat panel cannot pass a default or ex-parte judgment against them. Instead, the DLSA issues a Non-Settlement Certificate / Disposal Report. You can then immediately use that certificate along with your advocate legal notice to file a formal Civil Money Suit or Order 37 Summary Suit, proving to the court that you made bona fide pre-litigation settlement efforts.",
  },
  {
    question: "How can I execute a Lok Adalat award if the debtor defaults on agreed payments?",
    answer:
      "Under Section 21 of the Legal Services Authorities Act, 1987 read with Order 21 of the Code of Civil Procedure (CPC), an unpaid Lok Adalat award is directly executable as a decree of the Principal Civil Court. As affirmed by the Supreme Court in K.N. Govindan Kutty Menon (2012), you file an Execution Petition (EP) in the Civil Court having territorial jurisdiction. The court can execute the award by attaching the debtor's bank accounts, placing liens on real estate, garnishing salaries, or ordering civil detention.",
  },
  {
    question: "Which money recovery disputes qualify for a pre-litigation Lok Adalat?",
    answer:
      "Almost all civil and compoundable commercial disputes qualify, including: (1) Unpaid vendor invoices and supplier commercial debts, (2) Dishonoured cheques under Section 138 NI Act (compoundable under Section 147), (3) Bank and NBFC NPA loan One-Time Settlements (OTS), (4) Unreturned security deposits and advance token money, (5) Unpaid salary arrears and freelance service dues, and (6) Friendly loans supported by promissory notes or bank transfers. Non-compoundable criminal offences are strictly barred under Section 19(5) proviso.",
  },
  {
    question: "When is the next National Lok Adalat held in India?",
    answer:
      "National Lok Adalats are organized nationwide by the National Legal Services Authority (NALSA) four times a year (quarterly) on pre-scheduled Saturdays across all High Courts, District Courts, and Taluk Courts simultaneously. In addition to National Lok Adalats, District Legal Services Authorities (DLSAs) hold regular, continuous pre-litigation Lok Adalats on working days throughout the year.",
  },
  {
    question: "Pre-litigation Lok Adalat mein paisa recover karne ke liye apply kaise karein?",
    answer:
      "Pre-litigation Lok Adalat mein claim file karne ke liye aapko apne District Court complex mein sthit District Legal Services Authority (DLSA) ke Secretary ke pass ek sadharan Pre-Litigation Application submit karni hoti hai. Ismein dispute ki details, unpaid amount, opposite party ka complete address, aur proof of debt (bank transfer, invoice, promissory note) lagane hote hain. DLSA opposite party ko notice bhej kar date par bulati hai, jahan dono parties ki sahmati se final civil decree award pass hota hai bina kisi court fees ke.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Settling a Money Dispute at a Pre-Litigation Lok Adalat",
  description:
    "How pre-litigation Lok Adalats work for money claims: free filing, a binding award, which cases qualify, and how to apply.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/lok-adalat-pre-litigation-money-recovery`,
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
    name: "Lok Adalat Money Recovery",
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
      name: "Process & Core Law",
      item: `${SITE_URL}/send-legal-notice-online-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Pre-Litigation Lok Adalat",
      item: `${SITE_URL}/law/lok-adalat-pre-litigation-money-recovery`,
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

export default function LokAdalatMoneyRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Process & Core Law", href: "/send-legal-notice-online-india" },
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
              <span>Legal Services Authorities Act, 1987</span>
              <span className="text-red-500">•</span>
              <span>Pre-Litigation Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Settling a Money Dispute at a Pre-Litigation Lok Adalat
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 19 &amp; 21 LSA Act Mandate)
              </p>
              <p>
                Under Section 19(5) of the Legal Services Authorities Act, 1987, any creditor can refer an unsettled monetary claim to a pre-litigation Lok Adalat before the District Legal Services Authority (DLSA) with zero court fees. When parties reach terms, the resulting award carries the binding force of a Civil Court decree under Section 21 with no appeal permitted, executable directly under Order 21 CPC.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹0 Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Zero Court Fee Pre-Litigation Filing</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">s.21 Decree</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Deemed Civil Court Decree Status</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">No Appeal</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Final &amp; Absolute Under Jalour Singh</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">4x Yearly</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">National Lok Adalats Across India</p>
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
            <LokAdalatTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Statutory Basis */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Is a Pre-Litigation Lok Adalat &amp; Enforcement
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, pursuing an unpaid commercial debt, returned cheque, or loan recovery through conventional civil courts can be a costly, exhausting ordeal. Plaintiffs must pay ad-valorem state court fees—often ranging between 5% and 10% of the principal claim upfront—before waiting anywhere from three to seven years for a contested trial to conclude. For many small businesses, professionals, and individual lenders, the court fee burden alone discourages pursuing legitimate claims.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Parliament introduced a potent, cost-effective alternative through the <strong className="text-slate-900">Legal Services Authorities Act, 1987 (Act No. 39 of 1987)</strong>. Under Section 19(5)(ii) of the Act, Lok Adalats possess statutory jurisdiction not only over pending court litigations but also over <em>pre-litigation disputes</em>—matters falling within the jurisdiction of civil, commercial, or compoundable criminal courts that have not yet been formally filed.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a creditor lodges a pre-litigation application before the District Legal Services Authority (DLSA) or Taluk Legal Services Committee (TLSC), the authority issues an official summons to the defaulting party. Before a neutral conciliation bench composed of a sitting or retired judicial officer and an advocate conciliator, the parties negotiate a structured repayment or compromise settlement. Most importantly, under Section 21 of the Act, the resulting settlement award operates with the full legal effect of a Civil Court decree. If the debtor defaults on the agreed schedule, the creditor bypasses years of trial and proceeds straight to property attachment or bank account freezing under Order 21 of the Code of Civil Procedure (CPC).
                </p>
              </section>

              {/* Section 2: H2 - Landmark Judicial Precedents */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents on Lok Adalat Money Awards
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Supreme Court Case Law
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Judicial Context:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Supreme Court Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Power Established
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Binding Territory
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              All High Courts &amp; Subordinate Civil Courts in India
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

              {/* Section 3: H2 - Strategic Comparison: Lok Adalat vs Civil Money Suit */}
              <section id="heading-lok-vs-suit" aria-labelledby="heading-lok-vs-suit-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-lok-vs-suit-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Lok Adalat vs Regular Civil Money Suit Compared
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the right legal recovery channel determines whether you recover funds within weeks or spend years entangled in court corridors. The following comparative matrix outlines the statutory and operational differences between initiating a pre-litigation Lok Adalat dispute and filing a traditional civil money suit:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Pre-Litigation Lok Adalat vs Regular Civil Money Suit Comparison</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Strategic Factor</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-800 bg-emerald-50/60">Pre-Litigation Lok Adalat</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900">Regular Civil Money Suit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Court Fees Payable
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700 bg-emerald-50/30">
                          ₹0 (Completely Free Filing)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">
                          5% to 10% ad-valorem state court fee on claim amount
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Time to Final Enforceable Order
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700 bg-emerald-50/30">
                          30 to 90 Days (1 to 2 Sessions)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">
                          3 to 7 Years (Contested pleadings, evidence, trial)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Legal Status of Award / Decree
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900 bg-emerald-50/30">
                          Deemed Civil Court Decree (Section 21 LSA Act)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">
                          Civil Court Judgment &amp; Decree (Section 33 CPC)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Right of Appeal by Debtor
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700 bg-emerald-50/30">
                          Zero Right of Appeal (Section 21(2) Statutory Bar)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">
                          First Appeal (s.96 CPC) + Second Appeal (s.100 CPC)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Enforcement Mechanism
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900 bg-emerald-50/30">
                          Direct Execution Petition under Order 21 CPC
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">
                          Execution Petition after exhausting appeal limitation
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          If Opposite Party Refuses to Settle
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-amber-700 bg-emerald-50/30">
                          Non-Settlement Certificate (Can sue in Civil Court)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">
                          Case proceeds to ex-parte or contested hearing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Want to compare traditional civil filing expenses? Check our guide on{" "}
                  <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
                    legal notice charges
                  </Link>{" "}
                  and consumer forum fees via our{" "}
                  <Link href="/tools/consumer-commission-fee-jurisdiction-calculator" className="text-blue-700 underline font-semibold">
                    consumer commission fee calculator
                  </Link>.
                </p>
              </section>

              {/* Section 4: H2 - Resolution Rail Flowchart (Hand-authored SVG) */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation &amp; Settlement: Application to Award
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The pre-litigation Lok Adalat follows an exact statutory conciliation procedure regulated by NALSA. Follow this structured roadmap to navigate your dispute from notice dispatch to decree execution:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Pre-Litigation Demand Notice</h3>
                    <p className="text-xs text-slate-200 mt-1">15-day formal advocate notice offering DLSA pre-litigation settlement.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Lodge Application with DLSA</h3>
                    <p className="text-xs text-amber-900 mt-1">Submit petition with debt evidence before the District Legal Services Authority (₹0 fee).</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">DLSA Issues Official Summons</h3>
                    <p className="text-xs text-slate-700 mt-1">Court summons dispatched to debtor for physical or virtual conciliation.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Conciliation &amp; Joint Award</h3>
                    <p className="text-xs text-red-900 mt-1">Parties execute consent terms; Lok Adalat bench passes Section 21 Civil Decree.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Direct Bank Recovery or Execution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Debtor pays agreed sum; if defaulted, direct attachment under Order 21 CPC.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Pre-Litigation Settlement Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Pre-Litigation Lok Adalat Recovery Process Flowchart"
                  >
                    <defs>
                      <linearGradient id="lokGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="lokAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="lokSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#lokGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">15-Day Demand Served</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Invokes DLSA Option</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Apply to DLSA</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Pre-Litigation Docket</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Zero Court Fees</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Official Summons</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">DLSA Summons Debtor</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Pre-Lok Adalat Sitting</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#lokAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Binding Award</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Section 21 Decree</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Zero Appeal Allowed</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#lokSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Order 21 Execution</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">LEGAL SERVICES AUTHORITIES ACT &amp; CPC STATUTORY BENCHMARKS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 19(5)(ii) LSA Act: Explicit jurisdiction over pre-litigation disputes not yet filed in court</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 21(1) &amp; (2) LSA Act: Award is deemed a Civil Court decree with absolute bar on appeals</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Order XXI CPC: Immediate execution petition filed if debtor breaches agreed settlement instalments</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: H2 - The 5-Step DLSA Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook to File Claims at DLSA Lok Adalat
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Following the correct statutory protocol ensures your dispute is swiftly listed and successfully transformed into an executable civil decree:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Pre-Litigation Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before approaching the DLSA, have an advocate dispatch a formal demand notice to the defaulting debtor via Registered Speed Post and digital channels. The notice must specify the exact principal amount, statutory interest claimed, underlying contract or invoice dates, and explicitly state that failing payment within 15 days, the claim will be referred to the District Legal Services Authority for pre-litigation cognizance under Section 19(5) of the LSA Act.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        You can easily draft and send this notice via our{" "}
                        <Link href="/send-legal-notice-online-india" className="text-blue-700 underline font-semibold">
                          online legal notice service
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Form-1 Pre-Litigation Application with District Legal Services Authority (DLSA)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Draft a concise application addressed to the Secretary, DLSA at the District Court complex where either the creditor or the debtor resides, or where the cause of action arose. Attach copies of the legal notice, postal delivery receipts, unpaid invoices, promissory notes, or bank account statements proving the debt. There are zero court fees or filing stamps required.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        DLSA Issues Official Pre-Litigation Notice to the Debtor
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The DLSA office assigns a unique Pre-Litigation Dispute (PLD) registration number and issues an official notice bearing the court seal to the opposite party. Because the notice originates from the District Court administration, debtors treat it with far greater seriousness than informal follow-up calls or collection reminders.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Attend Pre-Lok Adalat Conciliation Sitting &amp; Draft Consent Terms
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Both parties appear before the conciliation bench (conducted physically or virtually via e-Lok Adalat platforms). The judicial member and advocate conciliator assist parties in finding common ground—such as waiving penal interest in exchange for guaranteed lump-sum payments or structured monthly post-dated cheques. Once terms are finalized, a formal Memorandum of Compromise is drawn up and signed by both parties and their counsels.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issuance of Section 21 Award &amp; Direct Order 21 Execution if Breached
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The Lok Adalat bench formally passes the award under Section 21 of the Legal Services Authorities Act. Both parties receive certified copies. If the debtor honours the agreed schedule, the dispute concludes permanently. If the debtor defaults on any instalment, the creditor immediately lodges an Execution Petition (EP) in the local civil court under Order 21 CPC to attach the debtor&apos;s bank accounts or movable/immovable assets without ever having to file a fresh suit.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: H2 - Claims Eligibility Matrix */}
              <section id="heading-eligibility" aria-labelledby="heading-eligibility-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-eligibility-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Which Debts Qualify for Pre-Litigation Lok Adalat?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While Lok Adalats have wide jurisdiction over civil and compoundable disputes, the statute draws a firm boundary around non-compoundable offences. The following matrix outlines what can and cannot be resolved through a pre-litigation Lok Adalat:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">✓</span>
                      <h3 className="font-bold text-base text-emerald-950">Qualifying Money Disputes (Eligible)</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-emerald-900 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700">•</span>
                        <span><strong>B2B Vendor &amp; Supplier Invoices:</strong> Unpaid commercial bills for goods delivered or services rendered.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700">•</span>
                        <span><strong>Dishonoured Cheques (Section 138 NI Act):</strong> Compoundable under Section 147 before criminal complaint registration.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700">•</span>
                        <span><strong>Bank Loan &amp; Credit Card Defaults:</strong> NPA loan compromise and One-Time Settlements (OTS).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700">•</span>
                        <span><strong>Salary &amp; Employment Dues:</strong> Withheld full and final settlement (FnF), unpaid incentives, and bonus arrears.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700">•</span>
                        <span><strong>Security Deposits &amp; Advance Tokens:</strong> Landlord rental deposits, builder advance booking refunds.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700">•</span>
                        <span><strong>Promissory Notes &amp; Friendly Loans:</strong> Written loan acknowledgments with bank transfer audit trails.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50/70 border border-red-200 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-red-800">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">✕</span>
                      <h3 className="font-bold text-base text-red-950">Non-Qualifying Claims (Statutorily Barred)</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-red-900 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">•</span>
                        <span><strong>Non-Compoundable Criminal Offences:</strong> Serious criminal fraud, forgery, or cognizable crimes barred under Section 19(5) proviso.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">•</span>
                        <span><strong>Time-Barred Claims Past 3 Years:</strong> Debts where the 3-year limitation period under Limitation Act, 1963 has expired without acknowledgment.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">•</span>
                        <span><strong>Insolvency &amp; IBC Proceedings:</strong> Corporate debtors under active NCLT Moratorium under Section 14 IBC 2016.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">•</span>
                        <span><strong>Disputes Involving Minors Without Guardian:</strong> Compromises affecting rights of minors without leave of the competent court.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">•</span>
                        <span><strong>Claims Requiring Ex-Parte Declarations:</strong> Cases where the debtor refuses to appear and ex-parte decree is sought.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - Dispute Type Navigator (Interactive Tab Island) */}
              <section id="heading-dispute-types" aria-labelledby="heading-dispute-types-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dispute-types-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Money Claims Handled at Pre-Litigation Lok Adalats
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Claim Category to Unlock the Governing Statutory Rule and Action Hierarchy
                  </p>
                </div>

                <LokAdalatProblemTabs />
              </section>

              {/* Section 8: H2 - Worked Recovery Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Vendor Recovers ₹6.2L via Lok Adalat
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Pre-Litigation Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Urban District Court (Commercial Supplier Dispute)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vardhan Agro Solutions supplied packaging raw materials valued at ₹6,20,000 to a mid-sized food processing company in Bengaluru under signed purchase orders and GST tax invoices. The buyer accepted the consignments without quality objections but defaulted on payment past the 45-day credit cycle, offering evasive replies for over 7 months.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Vardhan consulted local civil advocates who estimated that filing a regular commercial recovery suit would require paying over ₹55,000 in state court fees upfront, plus continuous trial expenses over an estimated 3-to-4-year court battle. Vardhan could not afford to lock up additional capital in litigation fees.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vardhan engaged LegalRecovery.in. An advocate drafted and dispatched a formal 15-day pre-litigation legal demand notice invoking Section 19(5) of the Legal Services Authorities Act, 1987. When the debtor failed to remit the full amount within 15 days, the advocate filed a zero-fee pre-litigation application before the Secretary, DLSA Bengaluru Urban at the City Civil Court complex.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Upon receiving official summons from the DLSA Secretary, the managing director of the buyer company appeared before the Lok Adalat conciliation bench. Facing the immediate prospect of an unappealable civil decree, the debtor agreed to a structured settlement: ₹3,20,000 paid via RTGS on the spot, and two monthly post-dated cheques of ₹1,50,000 each. The Lok Adalat bench recorded the settlement and issued an award under Section 21. Both subsequent cheques cleared successfully, recovering 100% of the ₹6,20,000 principal in 42 days with zero court fee expenditure.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records for DLSA Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  To ensure the Lok Adalat conciliator panel can quickly verify your monetary claim and establish the debtor&apos;s liability, assemble these 6 essential documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Primary Agreement or Commercial Contract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed agreement, purchase order (PO), service contract, lease deed, or promissory note showing repayment obligations.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">GST Tax Invoices &amp; Delivery Proofs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Counter-signed delivery challans, transport bilti receipts, or completion certificates proving goods or services were received.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statements / Dishonour Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified bank statement showing debited funds or bank return memo for dishonoured cheques with return reason code.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Debtor Written Debt Acknowledgment:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Emails, WhatsApp messages, or balance confirmation letters where the debtor admitted the outstanding balance within 3 years.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Advocate Legal Demand Notice &amp; Postal Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of the statutory notice sent along with India Post Speed Post tracking report confirming delivery at debtor&apos;s address.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Debtor Complete Contact &amp; Business Address:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Accurate residential and corporate address, MCA DIN/CIN extract, email IDs, and phone numbers for DLSA summons dispatch.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Lok Adalat Money Recovery &amp; Settlements
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Legal Services Authorities Act, CPC, and Supreme Court Precedents
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

              {/* Section 11: H2 - Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutory Authorities &amp; Official NALSA / Court References
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
                  Statutory verification status: All provisions verified against the Legal Services Authorities Act, 1987, NALSA (Lok Adalat) Regulations, 2009, and active Supreme Court of India precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Pre-Litigation Legal Notice Before DLSA Lok Adalat
                </h2>
                <LokAdalatNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Recovery &amp; Pre-Litigation Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-legal-notice-online-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Send Legal Notice Online India →
                  </Link>
                  <Link
                    href="/national-consumer-helpline-complaint-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    National Consumer Helpline Guide →
                  </Link>
                  <Link
                    href="/tools/consumer-commission-fee-jurisdiction-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Consumer Court Fee Calculator →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Costs →
                  </Link>
                  <Link
                    href="/how-to-verify-legal-notice-genuine"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Verify If a Legal Notice Is Genuine →
                  </Link>
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Reply to Legal Notice Format →
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
