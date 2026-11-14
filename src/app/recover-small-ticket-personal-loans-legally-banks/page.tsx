import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SmallTicketRecoveryCTA from "./SmallTicketRecoveryCTA";
import SmallTicketRecoveryTOC from "./SmallTicketRecoveryTOC";
import SmallTicketRecoveryTabs from "./SmallTicketRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Small-Ticket Personal Loans: Bank Legal Strategy",
  description:
    "Cost-effective legal solutions for banks and FinTechs to recover small-ticket personal loans under ₹2 Lakhs in India. Low-cost notices and Lok Adalat.",
  alternates: {
    canonical: `${SITE_URL}/recover-small-ticket-personal-loans-legally-banks`,
  },
  openGraph: {
    title: "Recover Small-Ticket Personal Loans: Bank Legal Strategy",
    description:
      "Cost-effective legal solutions for banks and FinTechs to recover small-ticket personal loans under ₹2 Lakhs in India. Low-cost notices and Lok Adalat.",
    url: `${SITE_URL}/recover-small-ticket-personal-loans-legally-banks`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Recover Small-Ticket Personal Loans - Bank & FinTech Legal Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Small-Ticket Personal Loans: Bank Legal Strategy",
    description:
      "Cost-effective legal solutions for banks and FinTechs to recover small-ticket personal loans under ₹2 Lakhs in India. Low-cost notices and Lok Adalat.",
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
    title: "Legal Services Authorities Act, 1987 (Sections 19, 20, 21 — Pre-Litigation Lok Adalat & Finality of Award) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2034",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction – Reserve Bank of India (Digital Lending) Directions, 2022 (as updated 2026)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12382",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction on Fair Practices Code for Lenders (Recovery Agents & Customer Due Diligence)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12140",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for e-NACH, SMS & WhatsApp Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "National Legal Services Authority (NALSA) Regulations, 2009 (Pre-Litigation Settlement Modalities for Institutional Banking)",
    url: "https://nalsa.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Finality and Binding Nature of Lok Adalat Awards",
    parties: "State of Punjab & Anr. v. Jalour Singh & Ors.",
    citation: "(2008) 2 SCC 660",
    date: "Supreme Court of India (Decided 18 January 2008)",
    facts:
      "A motor accident compensation claim was settled in a Lok Adalat. The High Court entertained a writ petition modifying the quantum awarded. The issue arose whether an order or award passed by a Lok Adalat under Section 21 of the Legal Services Authorities Act, 1987 can be challenged by way of an appeal or regular writ petition.",
    holding:
      "The Supreme Court of India held that an award of a Lok Adalat is final and deemed to be a decree of a Civil Court. Section 21(2) of the 1987 Act explicitly provides that no appeal shall lie to any court from any award made by a Lok Adalat. The only limited remedy is under Article 226/227 on grounds of fraud. Once a borrower signs a pre-litigation settlement before the Lok Adalat, it operates as an irrevocable decree immediately executable through civil court process.",
    amount: "Deemed Civil Court Decree • No Judicial Appeal Permissible under Section 21(2)",
    takeaway:
      "For banks and FinTechs recovering small-ticket loans, a Lok Adalat settlement eliminates years of appellate delays. The settlement memo converts directly into an executable civil decree at zero court fees.",
  },
  {
    title: "Supreme Court Confirmation of Executability of Pre-Litigation Lok Adalat Awards in Criminal Matters",
    parties: "K.N. Govindan Kutty Menon v. C.D. Shaji",
    citation: "(2012) 2 SCC 51",
    date: "Supreme Court of India (Decided 23 November 2011)",
    facts:
      "A cheque dishonour complaint was referred to the Lok Adalat under the Legal Services Authorities Act, 1987. A settlement was arrived at, but the respondent defaulted on the agreed payment schedule. The complainant filed an execution petition in the Civil Court to recover the settled amount. The High Court rejected the execution petition asserting that since the matter originated in a criminal court, it could not be executed as a civil decree.",
    holding:
      "Overruling the High Court, the Supreme Court held that by virtue of the legal fiction created under Section 21 of the Legal Services Authorities Act, 1987, even if a matter is referred by a criminal court under Section 138 of the Negotiable Instruments Act, the award passed by the Lok Adalat must be treated as a decree of a Civil Court and is executable by that court under Order XXI of the Code of Civil Procedure (CPC).",
    amount: "Executability under Order XXI CPC confirmed for all statutory financial settlements",
    takeaway:
      "When a small-ticket personal loan default under Section 25 PSS Act or Section 138 NI Act is compromised in a pre-litigation Lok Adalat, the bank obtains a complete, executable civil money decree without having to file a separate money suit or pay ad-valorem stamp fees.",
  },
  {
    title: "Supreme Court on Bar of Fresh Civil Suits After Lok Adalat Compromise",
    parties: "P.T. Thomas v. Thomas Job",
    citation: "(2005) 6 SCC 478",
    date: "Supreme Court of India (Decided 4 August 2005)",
    facts:
      "Parties reached an amicable settlement before the Lok Adalat regarding property and financial recovery obligations. Subsequently, the respondent attempted to wriggle out of the compromise by initiating a fresh original suit. The appellant contested the maintainability of the fresh proceedings.",
    holding:
      "The Supreme Court affirmed that an award of a Lok Adalat is not just a decision between the parties, but has been elevated to the status of a decree of a civil court. It acts as an absolute bar on subsequent civil suits regarding the same claim. The dispute reaches complete judicial closure, and the executing court is empowered to attach bank accounts or movable assets to satisfy the award.",
    amount: "Absolute Bar on Subsequent Litigation • Summary Asset Attachment Enabled",
    takeaway:
      "Small-ticket borrowers who compromise at Lok Adalat cannot subsequently file vexatious consumer complaints or civil suits disputing interest calculations or loan processing charges.",
  },
  {
    title: "Supreme Court Directives on Compounding and Deterring Frivolous Payment Evasion",
    parties: "Damodar S. Prabhu v. Sayed Babalal H.",
    citation: "(2010) 5 SCC 663",
    date: "Supreme Court of India (Decided 3 May 2010)",
    facts:
      "In a series of dishonoured payment matters, the Supreme Court examined the systemic blockage of trial courts by high-volume small-ticket dishonour cases and laid down structured graduated costs to incentivize early settlement at the pre-litigation or notice stage.",
    holding:
      "The Supreme Court held that the dishonour of payment instruments under commercial statutes is essentially a regulatory offence intended to maintain the credibility of commerce. It prescribed that compounding at early stages (legal notice or pre-litigation Lok Adalat) attracts zero penalty, whereas delaying settlement until trial attracts graded court fees up to 15% of the debt amount, creating strong financial incentives for defaulting borrowers to settle promptly.",
    amount: "Zero-Cost Compounding Window Established for Early Notice & Lok Adalat Stage",
    takeaway:
      "Statutory notices must cite the Damodar S. Prabhu precedent to inform delinquent borrowers that settling at the notice or pre-litigation Lok Adalat phase spares them substantial escalating trial court compounding costs.",
  },
];

const FAQS = [
  {
    question: "Why does traditional civil litigation fail for personal loans under ₹2 Lakhs in India?",
    answer:
      "Traditional civil suits (Order 37 Summary Suits or regular money recovery suits) fail for small-ticket personal loans (₹15,000 to ₹1,50,000) due to prohibitive unit economics. Filing an individual civil suit requires 5% to 10% ad-valorem state court fees, private advocate appearance fees of ₹15,000 to ₹35,000, physical process-server costs, and 24 to 36 months of trial time. For an unpaid loan of ₹40,000, incurring ₹30,000 in upfront legal expenditure results in negative recovery ROI even if the bank ultimately wins a judgment.",
  },
  {
    question: "How does Pre-Litigation Lok Adalat work for small-ticket bank loan recovery?",
    answer:
      "Under Sections 19 and 20 of the Legal Services Authorities Act, 1987, banks and NBFCs sponsor bulk delinquent loan files to the District Legal Services Authority (DLSA) before instituting a lawsuit. The DLSA issues official judicial summons to the borrowers for National or State Lok Adalat sessions. There is zero court fee, the process is informal and conciliatory, and any mutual agreement reached is signed into an award under Section 21 that carries the full force of a non-appealable civil court decree executable under Order XXI CPC.",
  },
  {
    question: "Can banks file Section 25 PSS Act complaints for bounced e-NACH mandates on small loans?",
    answer:
      "Yes. Section 25 of the Payment and Settlement Systems Act, 2007 provides that dishonour of an electronic funds transfer (such as an e-NACH auto-debit or UPI AutoPay mandate) due to insufficiency of funds is a criminal offence on par with Section 138 of the Negotiable Instruments Act. A bank must serve a statutory 15-day demand notice within 30 days of receiving the return memo from the clearing house. If unpaid, the bank can institute a criminal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class.",
  },
  {
    question: "What is Online Dispute Resolution (ODR) and how do digital lenders use it?",
    answer:
      "Online Dispute Resolution (ODR) is an algorithmic and video-mediated platform that resolves loan defaults without physical court visits. Digital lenders and FinTech NBFCs incorporate an ODR arbitration/conciliation clause into their digital sanction agreements. Delinquent borrowers receive automated WhatsApp and SMS summons to an online conciliation room where trained, neutral conciliators negotiate an agreed repayment schedule, which is electronically executed under the Information Technology Act, 2000 and Section 73 of the Arbitration and Conciliation Act, 1996.",
  },
  {
    question: "What legal notice format should banks use for micro personal loans to remain RBI-compliant?",
    answer:
      "Statutory notices for small-ticket retail loans must strictly adhere to the RBI Fair Practices Code and Digital Lending Guidelines 2022/2026. Notices must be issued on official advocate letterhead, state the precise principal, interest, and penal charges break-up, avoid abusive or threatening language, explicitly offer a 15-day rectification or Lok Adalat conciliation window, and be transmitted via Registered Speed Post alongside digital communications backed by a Section 63 BSA electronic evidence certificate.",
  },
  {
    question: "What happens if a borrower fails to attend the Pre-Litigation Lok Adalat?",
    answer:
      "Attendance at a pre-litigation Lok Adalat cannot be physically compelled by warrant because it is a conciliation forum. However, when a borrower fails to attend after receiving official DLSA summons, the DLSA issues a 'Non-Settlement / Failure Certificate'. The bank then uses this judicial record to demonstrate bad-faith evasion before the Magistrate Court under Section 25 PSS Act or under Order 37 CPC, securing rapid bailable warrants and ex-parte attachment orders.",
  },
  {
    question: "How can banks legally trace small-ticket borrowers who have changed phone numbers and relocated?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, banks can serve statutory notices to verified digital endpoints captured during KYC, including alternate email IDs, employer domains, and UPI linked handles. Furthermore, reporting the default across all four credit bureaus (CIBIL, Experian, CRIF, Equifax) restricts the borrower from accessing utility connections, rental portals, or new credit, forcing the borrower to initiate contact to remove bureau delinquency flags.",
  },
  {
    question: "Small-ticket personal loan default par bank legal notice kaise bheje aur Lok Adalat mein settlement kaise karein?",
    answer:
      "Agar personal loan borrower ₹15,000 se ₹1,50,000 tak ki EMI default karta hai, toh bank ya NBFC Legal Services Authorities Act 1987 aur Section 25 PSS Act ke tehat action leti hai. Pehle 15-day statutory advocate notice Speed Post aur WhatsApp se bheja jata hai. Iske baad matter District Legal Services Authority (DLSA) ki Pre-Litigation Lok Adalat mein sponsor kiya jata hai jahan zero court fees par settlement decree milti hai, jise Civil Court se execute karwaya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Recover Small-Ticket Personal Loans Legally",
  description:
    "Cost-effective legal solutions for banks and FinTechs to recover small-ticket personal loans under ₹2 Lakhs in India. Low-cost notices and Lok Adalat.",
  datePublished: "2026-11-13T14:00:00+05:30",
  dateModified: "2026-11-13T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recover-small-ticket-personal-loans-legally-banks`,
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
    "@type": "FinancialProduct",
    name: "Small-Ticket Personal Loan Recovery",
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
      name: "Personal Loan & Unsecured Loan Recovery",
      item: `${SITE_URL}/bulk-recovery-cases-all-in-one-affordable-solutions`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "How Banks Can Recover Small-Ticket Personal Loans Legally",
      item: `${SITE_URL}/recover-small-ticket-personal-loans-legally-banks`,
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

export default function RecoverSmallTicketPersonalLoansPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bulk Recovery Solutions", href: "/bulk-recovery-cases-all-in-one-affordable-solutions" },
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
              <span>Legal Services Authorities Act 1987</span>
              <span className="text-red-500">•</span>
              <span>Section 25 PSS Act &amp; Pre-Litigation Lok Adalat</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Recover Small-Ticket Personal Loans Legally
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Small-Ticket Recovery Mandate)
              </p>
              <p>
                Under the Legal Services Authorities Act, 1987 (Sections 19–21) and Section 25 of the Payment and Settlement Systems Act, 2007, banks and digital FinTechs recover defaulted small-ticket personal loans (₹15,000 to ₹1,50,000) cost-effectively via flat-fee digital advocate notices, Online Dispute Resolution (ODR), and mass Pre-Litigation Lok Adalats, obtaining non-appealable civil decree settlements with zero court fees.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">&lt; ₹2 Lakhs</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Target Ticket Size Bracket</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹0 Court Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Pre-Litigation Lok Adalat Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">45–60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fast-Track ODR &amp; DLSA TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Final Decree</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 21 LSA Non-Appealable</p>
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
            <SmallTicketRecoveryTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - The Unit Economics Crisis */}
              <section id="heading-unit-economics" aria-labelledby="heading-unit-economics-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-unit-economics-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Unit Economics Crisis in Small-Ticket Personal Loan Recoveries
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Over the past five years, the rapid proliferation of digital lending apps, neo-banks, and FinTech non-banking financial companies (NBFCs) has expanded the unsecured micro-personal loan market in India to unprecedented volumes. However, credit portfolios characterized by average ticket sizes between ₹15,000 and ₹1,50,000 face a catastrophic structural dilemma when non-performing assets (NPAs) surge: <strong>traditional litigation costs more than the underlying debt.</strong>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Filing an individual Summary Suit under Order 37 of the Code of Civil Procedure (CPC) or an individual criminal complaint under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act (PSS Act) costs between ₹18,000 and ₹45,000 in court fees, advocate retaining retainers, process-server expenses, and appearance charges. For a defaulted loan of ₹35,000, pursuing traditional court action leads to an immediate net balance sheet deficit, even if the decree is eventually secured two years later.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Simultaneously, aggressive tele-calling and unregulated third-party collection agencies are strictly constrained by the Reserve Bank of India’s (RBI) Master Directions on Fair Practices Code and Digital Lending Guidelines. Any instance of borrower harassment, unapproved contacts, or timing violations results in punitive regulatory fines and reputational blowback. To resolve this dilemma, forward-thinking institutional lenders are transitioning from manual collection harassment to <strong>industrialized, low-cost statutory notice dispatch and mass Pre-Litigation Lok Adalat rails.</strong>
                </p>
              </section>

              {/* Section 2: H2 - Court Precedents */}
              <section id="heading-legal-precedents" aria-labelledby="heading-legal-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Supreme Court Precedents Empowering Institutional Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 mb-3 border-b border-slate-100">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                          Precedent {idx + 1} • {c.citation}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">{c.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-600 mb-3">{c.parties}</p>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                        <p>
                          <strong className="text-slate-900">Facts &amp; Dispute:</strong> {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900">Judicial Holding:</strong> {c.holding}
                        </p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 text-xs text-slate-800 leading-snug">
                        <span className="font-extrabold text-slate-900 block mb-0.5">
                          Institutional Takeaway:
                        </span>
                        {c.takeaway}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: H2 - Pre-Litigation Lok Adalat Rail */}
              <section id="heading-lok-adalat-rail" aria-labelledby="heading-lok-adalat-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-lok-adalat-rail-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pre-Litigation Lok Adalat: The Sovereign Zero-Fee Recovery Rail
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Established under the <strong>Legal Services Authorities Act, 1987</strong>, Lok Adalats represent one of India&apos;s most potent statutory dispute settlement mechanisms. For commercial banks, regional rural banks (RRBs), and FinTech NBFCs, the <em>Pre-Litigation Lok Adalat</em> format (governed by Sections 19 and 20 of the Act) solves the small-ticket cost barrier entirely.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                    <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Zero Ad-Valorem Court Fees
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Unlike regular civil courts where institutions must deposit 5% to 10% of the claim amount upfront, pre-litigation Lok Adalat proceedings carry <strong>zero court fees</strong> under Section 21. If a pre-existing suit was filed and subsequently settled in Lok Adalat, 100% of the court fee is refunded to the institution.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                    <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Decree Equivalent under Section 21
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every award rendered by a Lok Adalat is legally deemed to be a <strong>decree of a Civil Court</strong>. As affirmed in <em>State of Punjab v. Jalour Singh</em> and <em>P.T. Thomas v. Thomas Job</em>, no appeal lies against this award, completely extinguishing borrower evasion tactics.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                    <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Judicial Summons via DLSA
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Notice to the defaulting borrower is issued directly under the seal of the District Legal Services Authority (DLSA), presided over by the District Principal Judge. Borrowers treat official judicial summons with far greater urgency than agency collection calls.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                    <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      Direct Execution under Order XXI CPC
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the borrower breaches the payment milestones agreed upon in the Lok Adalat award, the lender bypasses the trial process and files directly for <strong>execution under Order XXI of the Code of Civil Procedure</strong> for salary attachment or bank account freezing.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: H2 - Online Dispute Resolution (ODR) */}
              <section id="heading-odr-rail" aria-labelledby="heading-odr-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-odr-rail-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Online Dispute Resolution (ODR): The Digital Infrastructure for Micro-Loans
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For FinTech platforms disbursing loans in tier-2, tier-3, and tier-4 geographies, physical court appearances are operationally unviable. <strong>Online Dispute Resolution (ODR)</strong> platforms—endorsed by NITI Aayog and backed by the Arbitration and Conciliation Act, 1996 and Information Technology Act, 2000—bridge this distance through digital mediation and expedited digital conciliation.
                </p>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-lg space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      The ODR Technical &amp; Legal Workflow
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
                      Section 63 BSA Digital Audit Trail
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <p className="font-bold text-red-400 mb-1">1. Automated Docketing</p>
                      <p className="text-slate-300 leading-relaxed">
                        API sync transmits defaulted loan ledgers, e-sign agreements, and bank dishonour memos into digital case dockets with instant hash generation.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <p className="font-bold text-red-400 mb-1">2. Multi-Channel Summons</p>
                      <p className="text-slate-300 leading-relaxed">
                        Borrower receives interactive video-call links via SMS, WhatsApp, and email with verified electronic delivery timestamps certified under BSA 2023.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <p className="font-bold text-red-400 mb-1">3. E-Settlement Agreement</p>
                      <p className="text-slate-300 leading-relaxed">
                        Parties enter virtual conciliation room. Mutually agreed settlement terms are digital-stamped and Aadhaar e-signed, forming a binding contract under Section 73 Arbitration Act.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Comparison Table */}
              <section id="heading-strategy-comparison" aria-labelledby="heading-strategy-comparison-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-strategy-comparison-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparison: Pre-Litigation Lok Adalat vs. Section 138/25 vs. Civil Suit vs. ODR
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Framework Matrix
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Choosing the right legal recovery rail depends on loan ticket size, borrower cooperativeness, and available documentary evidence. The matrix below contrasts the operational and financial viability of each legal avenue for small-ticket personal loan portfolios.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
                        <th scope="col" className="p-3 sm:p-3.5">Recovery Mechanism</th>
                        <th scope="col" className="p-3 sm:p-3.5">Governing Statute</th>
                        <th scope="col" className="p-3 sm:p-3.5">Upfront Legal Cost</th>
                        <th scope="col" className="p-3 sm:p-3.5">Typical Timeline</th>
                        <th scope="col" className="p-3 sm:p-3.5">Legal Enforceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Pre-Litigation Lok Adalat</td>
                        <td className="p-3">Legal Services Authorities Act, 1987 ss. 19–21</td>
                        <td className="p-3 text-emerald-600 font-bold">₹0 Court Fees (Flat admin only)</td>
                        <td className="p-3 font-semibold">30–60 Days</td>
                        <td className="p-3 font-medium text-emerald-700">Deemed Civil Court Decree (No Appeal)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Section 25 PSS Act / 138 NI Act</td>
                        <td className="p-3">Payment &amp; Settlement Systems Act / NI Act</td>
                        <td className="p-3 text-amber-600 font-medium">Moderate (₹5k–₹15k per docket)</td>
                        <td className="p-3 font-semibold">12–24 Months</td>
                        <td className="p-3 font-medium text-slate-900">Criminal Liability + 2x Fine Compounding</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Order 37 CPC Summary Suit</td>
                        <td className="p-3">Code of Civil Procedure, 1908 Order XXXVII</td>
                        <td className="p-3 text-red-600 font-bold">High (5%–10% ad-valorem fee + counsel)</td>
                        <td className="p-3 font-semibold">18–36 Months</td>
                        <td className="p-3 font-medium text-slate-900">Civil Money Decree (Subject to Appeal)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Online Dispute Resolution (ODR)</td>
                        <td className="p-3">Arbitration &amp; Conciliation Act 1996 s.73 / IT Act</td>
                        <td className="p-3 text-emerald-600 font-medium">Low (SaaS subscription + fee)</td>
                        <td className="p-3 font-semibold">21–45 Days</td>
                        <td className="p-3 font-medium text-emerald-700">Executable Conciliated Settlement Agreement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Matrix */}
              <section id="heading-interactive-scenarios" aria-labelledby="heading-interactive-scenarios-title" className="scroll-mt-28">
                <SmallTicketRecoveryTabs />
              </section>

              {/* Section 7: Process Flow Diagram (Hand-drawn SVG) */}
              <section id="heading-recovery-architecture" aria-labelledby="heading-recovery-architecture-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-recovery-architecture-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Tier Small-Ticket Legal Recovery Funnel
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Institutional Process Architecture
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To recover high-volume portfolios without eroding margins, institutions deploy a tiered legal funnel. Each tier filters delinquent accounts based on responsiveness, escalating only stubborn defaults to formal court proceedings while settling 65%–75% at tiers 1 and 2.
                </p>

                {/* Hand-drawn SVG Architecture */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="min-w-[680px]">
                    <svg
                      viewBox="0 0 760 300"
                      className="w-full h-auto text-slate-800"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="gradTier1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#334155" />
                        </linearGradient>
                        <linearGradient id="gradTier2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#DC2626" />
                          <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                        <linearGradient id="gradTier3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#047857" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                        <linearGradient id="gradTier4" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#B45309" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>

                      {/* Tier 1 Box */}
                      <rect x="20" y="20" width="160" height="110" rx="10" fill="url(#gradTier1)" />
                      <text x="100" y="48" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">TIER 1 (0–30 DPD)</text>
                      <text x="100" y="70" fill="#E2E8F0" fontSize="10" textAnchor="middle">e-NACH Return Memo</text>
                      <text x="100" y="86" fill="#CBD5E1" fontSize="9" textAnchor="middle">NPCI Code R01/R08 Logging</text>
                      <text x="100" y="104" fill="#93C5FD" fontSize="9" fontWeight="bold" textAnchor="middle">Digital Reminder Notice</text>

                      {/* Arrow 1 -> 2 */}
                      <path d="M 180 75 L 210 75" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                      <polygon points="210,75 204,71 204,79" fill="#94A3B8" />

                      {/* Tier 2 Box */}
                      <rect x="210" y="20" width="160" height="110" rx="10" fill="url(#gradTier2)" />
                      <text x="290" y="48" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">TIER 2 (31–60 DPD)</text>
                      <text x="290" y="70" fill="#FEE2E2" fontSize="10" textAnchor="middle">Section 25 Statutory Notice</text>
                      <text x="290" y="86" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + WhatsApp API</text>
                      <text x="290" y="104" fill="#FEF08A" fontSize="9" fontWeight="bold" textAnchor="middle">Section 63 BSA Audit Trail</text>

                      {/* Arrow 2 -> 3 */}
                      <path d="M 370 75 L 400 75" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="400,75 394,71 394,79" fill="#94A3B8" />

                      {/* Tier 3 Box */}
                      <rect x="400" y="20" width="160" height="110" rx="10" fill="url(#gradTier3)" />
                      <text x="480" y="48" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">TIER 3 (61–90 DPD)</text>
                      <text x="480" y="70" fill="#D1FAE5" fontSize="10" textAnchor="middle">Pre-Litigation Lok Adalat</text>
                      <text x="480" y="86" fill="#A7F3D0" fontSize="9" textAnchor="middle">DLSA Court Summons</text>
                      <text x="480" y="104" fill="#FDE68A" fontSize="9" fontWeight="bold" textAnchor="middle">Zero Court Fee Conciliation</text>

                      {/* Arrow 3 -> 4 */}
                      <path d="M 560 75 L 590 75" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="590,75 584,71 584,79" fill="#94A3B8" />

                      {/* Tier 4 Box */}
                      <rect x="590" y="20" width="150" height="110" rx="10" fill="url(#gradTier4)" />
                      <text x="665" y="48" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">TIER 4 (91+ DPD)</text>
                      <text x="665" y="70" fill="#FEF3C7" fontSize="10" textAnchor="middle">Decree Execution</text>
                      <text x="665" y="86" fill="#FDE68A" fontSize="9" textAnchor="middle">Order XXI CPC Attachment</text>
                      <text x="665" y="104" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">JMFC Section 25 Action</text>

                      {/* Bottom Banner Outcomes */}
                      <rect x="20" y="155" width="720" height="120" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                      <text x="40" y="180" fill="#0F172A" fontSize="12" fontWeight="bold">PORTFOLIO SETTLEMENT FUNNEL METRICS (PER 1,000 SMALL ACCOUNTS):</text>
                      
                      <circle cx="50" cy="210" r="5" fill="#3B82F6" />
                      <text x="65" y="214" fill="#334155" fontSize="11">Tier 1 &amp; 2 Statutory Notice Dispatch: <strong>40%–48%</strong> Borrower Voluntary Cure / Partial Payment</text>

                      <circle cx="50" cy="235" r="5" fill="#10B981" />
                      <text x="65" y="239" fill="#334155" fontSize="11">Tier 3 Pre-Litigation Lok Adalat / ODR: <strong>25%–30%</strong> Enforceable Compromise Award</text>

                      <circle cx="50" cy="260" r="5" fill="#DC2626" />
                      <text x="65" y="264" fill="#334155" fontSize="11">Net Legal Portfolio Resolution: <strong>68%–78% Total Recovery</strong> with Legal Cost &lt; 5% of Portfolio Face Value</text>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-case-study" aria-labelledby="heading-case-study-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-study-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: FinTech NBFC 1,200 Defaulted Accounts Portfolio
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Unit Economics
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To quantify how Pre-Litigation Lok Adalats and bulk statutory digital notices rescue lending unit economics, examine the comparative financial model below reflecting an institutional retail portfolio.
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800">
                    <p className="font-bold text-slate-900 mb-1">Portfolio Baseline Profile:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li><strong>Total Delinquent Accounts:</strong> 1,200 personal loan borrowers (90+ DPD)</li>
                      <li><strong>Average Principal Outstanding:</strong> ₹38,500 per borrower</li>
                      <li><strong>Total Defaulted Book Value:</strong> ₹4,62,00,000 (₹4.62 Crore)</li>
                      <li><strong>Underlying Instrument:</strong> Bounced e-NACH mandates on digital lending platform</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50/50 border border-red-200 rounded-xl p-4 space-y-2">
                      <h3 className="text-sm font-bold text-red-950 flex items-center justify-between">
                        <span>Traditional Civil Court Action</span>
                        <span className="text-[10px] bg-red-200 text-red-800 px-2 py-0.5 rounded font-black">NEGATIVE ROI</span>
                      </h3>
                      <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                        <p><strong>Court Fees &amp; Filing (per docket):</strong> ₹4,200</p>
                        <p><strong>Advocate Drafting &amp; Appearance:</strong> ₹18,000</p>
                        <p><strong>Total Legal Expense (1,200 cases):</strong> ₹2,66,40,000 (57% of book)</p>
                        <p><strong>Average Disposal Timeline:</strong> 30 Months</p>
                        <p><strong>Net Recovery After Legal Fees:</strong> ₹42,00,000 (Disastrous margin erosion)</p>
                      </div>
                    </div>

                    <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 space-y-2">
                      <h3 className="text-sm font-bold text-emerald-950 flex items-center justify-between">
                        <span>Bulk Notice + Lok Adalat Rail</span>
                        <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded font-black">HIGH PROFITABILITY</span>
                      </h3>
                      <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                        <p><strong>Speed Post &amp; Section 25 Bulk Notice:</strong> Flat fee via LegalRecovery.in</p>
                        <p><strong>Lok Adalat DLSA Institutional Sponsoring:</strong> ₹0 Court Fees</p>
                        <p><strong>Total Legal Expense (1,200 cases):</strong> ₹18,50,000 (4.0% of book)</p>
                        <p><strong>Average Settlement Timeline:</strong> 45 to 60 Days</p>
                        <p><strong>Net Collected Amount (72% resolution):</strong> ₹3,14,14,000 (Net ROI &gt; 16x)</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    Note: Figures presented above are illustrative baseline projections based on historical DLSA National Lok Adalat settlement ratios and bulk statutory demand notice conversion metrics.
                  </p>
                </div>
              </section>

              {/* Section 9: Notice Format & Playbook */}
              <section id="heading-statutory-notice-playbook" aria-labelledby="heading-statutory-notice-playbook-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-notice-playbook"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Low-Cost Statutory Notice Template &amp; Settlement Protocol
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Advocate Draft
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To preserve legal enforceability under Section 25 PSS Act and protect the lender from RBI fair practices scrutiny, the demand notice must avoid threatening rhetoric and focus strictly on statutory timelines, payment break-ups, and the pre-litigation settlement opportunity.
                </p>

                <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-7 shadow-lg font-mono text-xs leading-relaxed space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
                    <span>STATUTORY DEMAND NOTICE UNDER SECTION 25 PSS ACT &amp; LOK ADALAT NOTICE</span>
                    <span>ADVOCATE DRAFT</span>
                  </div>
                  <p className="text-slate-400">
                    BY SPEED POST A.D. &amp; REGISTERED ELECTRONIC TRANSMISSION (BSA SECTION 63)
                  </p>
                  <p>
                    <strong>TO:</strong> [Borrower Full Name], Residing at: [Borrower Permanent Address as per KYC]
                    <br />
                    <strong>MOBILE / WHATSAPP:</strong> [+91-XXXXXXXXXX] | <strong>EMAIL:</strong> [borrower@domain.com]
                  </p>
                  <p>
                    <strong>SUB:</strong> STATUTORY DEMAND NOTICE UNDER SECTION 25 OF THE PAYMENT AND SETTLEMENT SYSTEMS ACT, 2007 FOR DISHONOUR OF ELECTRONIC FUNDS TRANSFER (e-NACH MANDATE) OF ₹[AMOUNT] IN LOAN ACCOUNT NO. [LOAN_ACC_NO].
                  </p>
                  <p>
                    Under instructions from and on behalf of our client, [Bank / FinTech NBFC Name], we state as follows:
                  </p>
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                    <li>
                      That you availed an unsecured Personal Loan of ₹[Sanctioned Amount] on [Loan Date] under Loan Agreement No. [Agreement No.], agreeing to repay the same in [No.] monthly installments via e-NACH auto-debit mandate.
                    </li>
                    <li>
                      That installment payment for ₹[EMI Amount] presented through NPCI clearing house on [Date] was returned unpaid by your banker with Reason Code: [R01 - Insufficient Funds / R08 - Account Closed], evidenced by the Electronic Clearing Return Memo dated [Memo Date].
                    </li>
                    <li>
                      That under Section 25(1) of the Payment and Settlement Systems Act, 2007, dishonour of an electronic mandate for insufficiency of funds attracts criminal penalties including imprisonment up to 2 years, or fine up to twice the amount, or both.
                    </li>
                    <li>
                      Pursuant to Section 25(3)(b) of the PSS Act, 2007, we hereby call upon you to pay the defaulted sum of ₹[Outstanding Amount] within <strong>fifteen (15) days</strong> of receipt of this notice.
                    </li>
                    <li>
                      Take further notice that in the interest of amicable dispute resolution, our client has simultaneously nominated your loan account for the upcoming <strong>National / Pre-Litigation Lok Adalat</strong> convened under the auspices of the District Legal Services Authority (DLSA). You may settle your dues in full or mutually restructure the payment schedule before the Hon&apos;ble Lok Adalat Bench without incurring any court fees or litigation charges.
                    </li>
                  </ol>
                  <p className="text-slate-400 pt-2 border-t border-slate-800">
                    Issued by: [Name of Empanelled Advocate], Enrollment No.: [Bar Council No.], on behalf of [Bank / NBFC Name].
                  </p>
                </div>
              </section>

              {/* Section 10: Primary Legal Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Authorities &amp; Regulatory Directions
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Gazette &amp; Court Links
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  All recovery protocols, notice architectures, and Lok Adalat referrals recommended on this hub derive directly from enacted Acts of Parliament, Supreme Court precedents, and RBI Master Directions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:shadow-xs transition-all"
                    >
                      <span className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        {source.title}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-2 truncate">
                        {source.url} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Section 11: Comprehensive FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Small-Ticket Loan Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Institutional Q&amp;A
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {idx + 1}. {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Primary Institutional CTA */}
              <section className="pt-4">
                <SmallTicketRecoveryCTA variant="primary" />
              </section>

              {/* Related Recovery Guides Cluster Navigation */}
              <div className="pt-8 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
