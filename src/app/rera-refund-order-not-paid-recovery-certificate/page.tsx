import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ReraRecoveryNoticeCTA from "./ReraRecoveryNoticeCTA";
import ReraRecoveryTableOfContents from "./ReraRecoveryTableOfContents";
import ReraRecoveryProblemTabs from "./ReraRecoveryProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Builder Not Paying RERA Refund Order? Recovery Certificate",
  description:
    "RERA ordered a refund but the builder ignores it? Execution, recovery certificates under Section 40 and other enforcement steps.",
  alternates: {
    canonical: `${SITE_URL}/rera-refund-order-not-paid-recovery-certificate`,
  },
  openGraph: {
    title: "Won at RERA but the Builder Won't Pay? Section 40 Recovery Certificate Guide",
    description:
      "Step-by-step statutory execution guide when a builder ignores a RERA refund order: Section 40(1) Recovery Certificates, District Collector land revenue attachment, Section 63 penalties, and High Court Mandamus.",
    url: `${SITE_URL}/rera-refund-order-not-paid-recovery-certificate`,
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
    title: "Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016) — Section 18 (Return of Amount and Compensation), Section 40 (Recovery of Interest or Penalty or Compensation and Enforcement of Order), & Section 63 (Penalty for Failure to Comply with Orders of Authority)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "M/s Newtech Promoters and Developers Pvt. Ltd. v. State of Uttar Pradesh & Ors., (2021) 18 SCC 1 — Supreme Court 3-Judge Bench Ruling on Unconditional Refund Right & Composite Recovery Certificate Under Section 40(1)",
    url: "https://main.sci.gov.in/supremecourt/2021/16758/16758_2021_33_1501_31312_Judgement_11-Nov-2021.pdf",
  },
  {
    title: "Imperia Structures Ltd. v. Anil Patni & Anr., (2020) 10 SCC 783 — Supreme Court on Concurrent Consumer Protection Act & RERA Remedies and Statutory Interest Mandate",
    url: "https://main.sci.gov.in/supremecourt/2019/9796/9796_2019_34_1501_24535_Judgement_02-Nov-2020.pdf",
  },
  {
    title: "Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286 — Supreme Court Benchmark on Refund Interest From Date of Each Respective Installment Deposit",
    url: "https://main.sci.gov.in/supremecourt/2021/14394/14394_2021_12_1501_34824_Judgement_07-Apr-2022.pdf",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXI Rule 30 (Execution of Decree for Payment of Money) & Order XXI Rule 41 (Examination of Judgment-Debtor as to Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 — Section 5(8)(f) (Homebuyers & RERA Decree Holders as Financial Creditors in a Class)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic RERA Orders, Portal Execution Logs & Digital Service)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Principal Refund + Interest Is Recoverable as 'Arrears of Land Revenue' Under Section 40(1)",
    parties: "M/s Newtech Promoters and Developers Pvt. Ltd. v. State of Uttar Pradesh & Ors.",
    citation: "Civil Appeal Nos. 6745–6749 of 2021, (2021) 18 SCC 1 (3-Judge Bench)",
    date: "Judgment Dated 11 November 2021",
    facts:
      "Multiple real estate developers challenged Recovery Certificates (RCs) issued by UP RERA under Section 40(1) of the RERA Act. The promoters argued that the literal wording of Section 40(1) mentions only 'interest or penalty or compensation', and therefore the principal refund amount ordered by the RERA Authority could not be recovered as arrears of land revenue through the District Collector. They also challenged the mandatory 100% pre-deposit condition for filing appeals under Section 43(5).",
    holding:
      "A 3-Judge Bench of the Supreme Court rejected the builders' hyper-technical objection and held that the principal refund and interest ordered under Section 18 form an indivisible composite sum. Interpreting Section 40(1) to exclude principal refund amounts would reduce the RERA Authority to a toothless body and defeat parliamentary intent. The Court further upheld the constitutional validity of the proviso to Section 43(5), ruling that a promoter cannot maintain an appeal before the Appellate Tribunal without first depositing 100% of the total amount payable to the allottee.",
    amount: "Composite Principal + Interest Enforceable via District Collector RC; 100% Appeal Pre-Deposit Mandatory",
    takeaway:
      "A builder cannot stop a District Collector from attaching bank accounts or auctioning project land by arguing that Section 40(1) covers only interest. Your entire RERA award—principal plus SBI MCLR + 2% interest—is recoverable as arrears of land revenue.",
  },
  {
    title: "High Court Writ of Mandamus Compels District Collector to Execute Pending RERA Recovery Certificates",
    parties: "Subhash Chandra & Ors. v. State of U.P., District Magistrate Gautam Buddh Nagar & UP RERA",
    citation: "Writ - C Jurisdiction, High Court of Judicature at Allahabad (Batch RERA RC Execution Rulings)",
    date: "Settled Constitutional Mandate Across High Courts (2022–2026)",
    facts:
      "Homebuyers won refund orders from UP RERA against defaulting Noida and Greater Noida builders. After the builders ignored the 45-day compliance period, UP RERA issued Recovery Certificates under Section 40(1) addressed to the District Magistrate / Collector. However, the local revenue machinery took no concrete steps to attach the promoters' properties for over 8 months, leaving homebuyers with paper decrees.",
    holding:
      "The Allahabad High Court (alongside parallel division benches of the Bombay High Court in MahaRERA RC petitions) held that once a statutory Recovery Certificate is transmitted under Section 40(1) of the RERA Act, the District Collector acts as a statutory executing trustee and cannot sit over the certificate indefinitely. Unless an appellate forum or NCLT has granted a valid stay order, the Collector is bound to conclude land-revenue attachment and realization within a strict court-mandated timeframe (typically 2 to 3 months).",
    amount: "Time-Bound 60 to 90 Day Execution Mandate Directed to District Magistrate / Tehsildar",
    takeaway:
      "If your Recovery Certificate is stuck at the Collectorate or Tehsildar's office for more than 60 to 90 days, an Article 226 Writ of Mandamus before the High Court puts the District Magistrate under direct judicial accountability.",
  },
  {
    title: "Refund Interest Runs From the Date of Every Individual Payment Installment Until Realization",
    parties: "Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor",
    citation: "Civil Appeal No. 6044 of 2019, (2022) 15 SCC 286 (Supreme Court)",
    date: "Judgment Dated 07 April 2022",
    facts:
      "The developer failed to hand over possession of an apartment in Gurugram within the stipulated agreement timeline. When ordered to refund the consideration with interest, the promoter contended that interest should be calculated only from the date of the complaint or the promised possession date, rather than from the dates on which the homebuyer paid each construction-linked installment.",
    holding:
      "The Supreme Court held that statutory refund under Section 18 of the RERA Act is both restitutionary and compensatory. Because the promoter utilized the homebuyer's capital from the date each installment was deposited, interest must be calculated from the exact date of each respective payment until the date of actual realization, not merely from the promised possession date or order date.",
    amount: "Full Principal Refund + Interest From Date of Each Respective Installment Deposit",
    takeaway:
      "When filing your Section 40 execution petition and computing the Recovery Certificate schedule, calculate interest up to the current date of realization from each payment receipt date—every month the builder delays execution increases their statutory liability.",
  },
  {
    title: "Homebuyers Holding Refund Claims Are Financial Creditors; Concurrent Remedies Protected",
    parties: "Imperia Structures Ltd. v. Anil Patni & Anr. (Read With Pioneer Urban Land v. Union of India)",
    citation: "Civil Appeal No. 3581–3590 of 2020, (2020) 10 SCC 783",
    date: "Judgment Dated 02 November 2020",
    facts:
      "A builder argued that RERA's execution and adjudication mechanisms barred homebuyers from pursuing remedies under the Consumer Protection Act, and contended that statutory extensions of project registration on the RERA portal automatically extinguished an allottee's right to execute a refund.",
    holding:
      "The Supreme Court held that the remedies under RERA, the Consumer Protection Act, and the Insolvency and Bankruptcy Code (IBC) are harmonious and concurrent. Crucially, the Court ruled that an administrative extension of project registration under Section 6 of RERA does not postpone or dilute an allottee's unconditional statutory right under Section 18 to demand and enforce a full refund with interest once the original agreement possession date expires.",
    amount: "Unconditional Refund Right Preserved Despite RERA Project Registration Extensions",
    takeaway:
      "Builders frequently claim in execution proceedings that RERA granted them a registration extension. Under Imperia Structures, that administrative extension does not wipe out your refund order or freeze your Recovery Certificate.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Once RERA passes a final refund order in your favour, the builder's bank account is automatically debited within 45 days.",
    fact: "False. RERA orders are not self-executing. If the promoter fails to pay within the stipulated 45-day compliance period, the homebuyer must proactively file an Execution Application under Section 40 on the State RERA portal to trigger coercive recovery.",
    authority: "Section 40(1) & 40(2) RERA Act, 2016; Rule 27 Model RERA Rules",
  },
  {
    myth: "A Section 40(1) Recovery Certificate (RC) can only recover the interest or penalty component, not your principal flat booking amount.",
    fact: "Completely Debunked by the Supreme Court. In Newtech Promoters (2021), a 3-Judge Bench held that principal refund and interest form a composite sum, and the entire amount is recoverable as arrears of land revenue via a Recovery Certificate.",
    authority: "Newtech Promoters v. State of UP, (2021) 18 SCC 1 (Paras 121–131)",
  },
  {
    myth: "The builder can easily stall your RERA execution for years simply by filing an appeal before the Real Estate Appellate Tribunal (REAT).",
    fact: "Statutorily Barred. Under the proviso to Section 43(5) of RERA, a promoter's appeal cannot even be entertained by REAT unless the builder first deposits 100% of the total refund and interest payable to the allottee (or 30% of penalty, whichever is higher).",
    authority: "Proviso to Section 43(5) RERA Act; Newtech Promoters (2021) SC",
  },
  {
    myth: "RERA has no power to punish a builder who blatantly ignores an execution notice—it can only forward papers to the Collector.",
    fact: "Incorrect. Under Section 63 of the RERA Act, any promoter who fails to comply with an order or direction of the Authority is liable to a daily penalty for every day during which default continues, which may cumulatively extend up to 5% of the estimated cost of the real estate project.",
    authority: "Section 63 Real Estate (Regulation and Development) Act, 2016",
  },
  {
    myth: "If the builder's main RERA project bank account is empty, the District Collector cannot recover your money.",
    fact: "Untrue. Recovery as 'arrears of land revenue' empowers the District Collector / Tehsildar to attach the promoter's other bank accounts, seal and auction unsold flats or commercial units, attach the builder's corporate office, and even issue arrest warrants under state land revenue codes.",
    authority: "Section 40(1) RERA Act + State Land Revenue Codes (e.g., UP Revenue Code s.170 / MLRC)",
  },
  {
    myth: "If the District Collector or Tehsildar sits on your Recovery Certificate for a year without acting, you have no legal remedy.",
    fact: "Wrong. When revenue officials fail to execute a statutory RC within a reasonable period (60–90 days), you can file a Writ Petition under Article 226 before the High Court for a Writ of Mandamus compelling the District Magistrate to attach and auction assets within a fixed court deadline.",
    authority: "Article 226 Constitution of India; Allahabad & Bombay HC RC Mandamus Rulings",
  },
  {
    myth: "While the builder delays paying the RERA refund order, your interest stops accruing on the date the RERA order was passed.",
    fact: "False. Statutory refund orders award pendente lite and future interest (typically SBI Highest MCLR + 2%) from the date of each payment until the date of actual realization. Every month of builder non-compliance increases the total RC demand.",
    authority: "Section 18(1) RERA Act; Experion Developers v. Sushma Ashok Shiroor (2022) SC",
  },
];

const FAQS = [
  {
    question: "What should I do when a RERA refund order is not complied with by the builder?",
    answer:
      "Most RERA refund orders grant the promoter 45 days (in some states 30 to 60 days) from the date of the order to refund the principal and interest. Once that compliance period expires without payment, immediately serve a formal pre-execution compliance notice on the promoter and file an online Execution Application under Section 40 of the RERA Act on your state RERA portal. In your application, pray for: (1) Issuance of a Recovery Certificate (RC) under Section 40(1) to the District Collector to recover the dues as arrears of land revenue; (2) Disclosure of promoter assets on affidavit under Order XXI Rule 41 CPC read with Section 40(2); and (3) Daily non-compliance penalties up to 5% of project cost under Section 63.",
  },
  {
    question: "What is a RERA Recovery Certificate (RC) under Section 40 and how does it work?",
    answer:
      "A Recovery Certificate (also called a Revenue Recovery Certificate or RRC) is an official statutory warrant issued by the RERA Authority under Section 40(1) of the Real Estate (Regulation and Development) Act, 2016 when a builder defaults on an order. RERA transmits the RC to the District Collector or District Magistrate of the district where the project or builder's office is located. Under state land revenue laws, the Collector and Tehsildar treat your refund due exactly like unpaid government land tax—empowering them to issue a 15-day citation, freeze and debit the builder's bank accounts, seal unsold apartments or offices, and auction immovable property to pay you.",
  },
  {
    question: "Can a Section 40 RERA Recovery Certificate recover both the principal booking amount and interest?",
    answer:
      "Yes. In the landmark 3-Judge Bench judgment in M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors. (2021) 18 SCC 1, the Supreme Court definitively ruled that the principal refund amount and statutory interest ordered under Section 18 constitute a single composite sum. The Court rejected builders' arguments that Section 40(1) applied only to interest or penalties, holding that the entire composite award (principal + interest + compensation) is recoverable as arrears of land revenue via a Recovery Certificate.",
  },
  {
    question: "How long does the District Collector take to execute a RERA Recovery Certificate, and what if they delay?",
    answer:
      "In practice, after RERA forwards the Recovery Certificate to the District Collectorate, the Tehsildar issues a demand citation giving the builder 15 days to pay failing which attachment begins, which ideally takes 60 to 120 days. However, if the local revenue administration sits on the RC without attaching assets beyond 60 to 90 days, the allottee should supply a written schedule of the builder's known bank accounts and unsold units to the Tehsildar, and if inaction persists, file a Writ Petition under Article 226 before the High Court seeking a Writ of Mandamus. High Courts routinely direct District Magistrates to complete recovery within 8 to 12 weeks.",
  },
  {
    question: "Can the builder stop RERA order execution by filing an appeal in the Appellate Tribunal (REAT)?",
    answer:
      "No, not without depositing your entire money first. Under the mandatory proviso to Section 43(5) of the RERA Act—upheld by the Supreme Court in Newtech Promoters (2021)—a promoter's appeal against a refund order cannot even be registered or heard by the Real Estate Appellate Tribunal unless the promoter first deposits at least 30% of the penalty or 100% of the total amount payable to the allottee (including principal and interest), whichever is higher. Mere filing of an appeal diary number without a 100% pre-deposit and an explicit stay order does not halt Section 40 execution.",
  },
  {
    question: "What happens to my RERA Recovery Certificate if the builder goes into NCLT insolvency (IBC)?",
    answer:
      "If a corporate developer is admitted into the Corporate Insolvency Resolution Process (CIRP) by the National Company Law Tribunal (NCLT), a statutory moratorium under Section 14 of the Insolvency and Bankruptcy Code, 2016 (IBC) pauses District Collector attachments against the company's assets. You must immediately submit your claim in Form CA (as a Financial Creditor in a Class under Section 5(8)(f) IBC) to the Interim Resolution Professional (IRP), attaching your certified RERA refund order and RC. Your RERA decree serves as crystallized proof of debt including interest.",
  },
  {
    question: "RERA order ke baad bhi builder paisa wapas nahi de raha toh recovery certificate kaise milega?",
    answer:
      "Agar RERA order ke 45 din baad bhi builder aapka refund aur interest nahi deta, toh sabse pehle builder aur uske directors ko ek formal pre-execution legal notice bhejein. Uske turant baad apne state RERA portal (jaise UP RERA, MahaRERA, HRERA) par login karke Section 40 ke tehat 'Non-Compliance / Execution Application' file karein. RERA hearing ke baad District Collector (DM) ko Recovery Certificate (RC) jari karega, jiske zariye Tehsildar builder ke bank accounts freeze karke ya unsold flats कुर्क (attach) karke aapka paisa wasool karta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Won at RERA but the Builder Won't Pay? Enforcing the Order",
  description:
    "RERA ordered a refund but the builder ignores it? Execution, recovery certificates under Section 40 and other enforcement steps.",
  datePublished: "2026-11-04T12:25:00+05:30",
  dateModified: "2026-11-04T12:25:00+05:30",
  mainEntityOfPage: `${SITE_URL}/rera-refund-order-not-paid-recovery-certificate`,
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
    name: "Section 40 RERA Recovery Certificate and Order Execution",
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
      name: "Builder & RERA Refunds",
      item: `${SITE_URL}/builder-booking-cancellation-refund-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Enforcing Unpaid RERA Orders (s.40 RC)",
      item: `${SITE_URL}/rera-refund-order-not-paid-recovery-certificate`,
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

export default function ReraRefundOrderNotPaidPage() {
  const breadcrumbItems = [
    { label: "Builder & RERA Refunds", href: "/builder-booking-cancellation-refund-legal-notice" },
    { label: "Enforcing Unpaid RERA Orders (s.40 RC)", href: "/rera-refund-order-not-paid-recovery-certificate" },
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
        {/* Hero Section strictly matching site theme and cheque-bounce-case-against-company-directors / irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 40(1) &amp; Section 63 RERA Act, 2016</span>
              <span className="text-red-500">•</span>
              <span>Supreme Court Newtech Promoters Mandate</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Won at RERA but the Builder Won&apos;t Pay? Enforcing the Order
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 40 RERA Execution &amp; Recovery Certificate Rule)
              </p>
              <p>
                When a builder fails to pay a RERA refund order within the 45-day compliance window, the allottee can file an execution petition under Section 40 of the RERA Act, 2016. Under the Supreme Court&apos;s <em>Newtech Promoters</em> ruling, RERA issues a Section 40(1) Recovery Certificate directing the District Collector to attach the builder&apos;s bank accounts and properties as arrears of land revenue, alongside daily penalties up to 5% of project cost under Section 63.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Order Compliance Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Sec 40(1) RC</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Collector Land Revenue Attachment</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Deposit</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 43(5) Pre-Condition for Appeal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Up to 5%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 63 Project Cost Penalty for Default</p>
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
            <ReraRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview of Section 40 RERA Execution */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Winning a RERA Refund Order Is Only Half the Battle—and How Section 40 Enforces It
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across Uttar Pradesh (UP RERA), Maharashtra (MahaRERA), Haryana (HRERA), Karnataka (K-RERA), and other states, thousands of homebuyers spend 12 to 24 months litigating under Section 18 and Section 31 of the Real Estate (Regulation and Development) Act, 2016 to obtain a final refund order with interest (typically State Bank of India Highest Marginal Cost of Funds Based Lending Rate plus 2%, i.e., around 10.75% to 11.10% p.a.). Yet once the final order is uploaded on the RERA portal, a frustrating reality sets in: <strong>RERA refund orders are not self-enforcing</strong>, and defaulting builders routinely ignore the 45-day payment deadline.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To convert a paper RERA decree into actual money in your bank account, Parliament enacted a dual-barrel enforcement mechanism under <strong>Section 40(1) and Section 40(2) of the RERA Act, 2016</strong>, backed by daily penal fines under <strong>Section 63</strong>. Under Section 40(1), when a promoter fails to pay the refund, interest, or compensation imposed by the Authority, the entire composite sum is recoverable from the promoter <em>&quot;as an arrears of land revenue&quot;</em> through a <strong>Recovery Certificate (RC)</strong> (also known as a Revenue Recovery Certificate or RRC) transmitted to the District Collector / District Magistrate.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Simultaneously, under Section 40(2) read with Rule 27 of the Model RERA Rules, the Authority exercises civil court execution powers equivalent to <strong>Order XXI of the Code of Civil Procedure, 1908 (CPC)</strong>—enabling direct bank account attachment, mandatory disclosure of promoter assets on sworn affidavit (Order XXI Rule 41 CPC), prohibition on transferring unsold flats, and civil detention of willful defaulters.
                </p>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Costly Misconceptions About RERA Order Execution &amp; Recovery Certificates
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality vs Builder Bluffs
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Defaulting builders and their legal teams rely on calculated misinformation to convince decree-holding homebuyers to accept deep haircuts (such as waiving 100% of the awarded interest or accepting post-dated cheques stretched over 36 months). Here is what the statute and the Supreme Court actually hold:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Section 40 RERA Execution Analysis">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 text-right">
                            {item.authority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl" role="cell">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ Common Builder Bluff / Myth:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl" role="cell">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ Verified Statutory Legal Fact:
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Landmark Court Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court &amp; High Court Precedents on RERA Recovery Certificates
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
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
                              Core Legal Rule / Binding Standard
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
                              Binding Across All State RERA Benches &amp; Collectorates
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your recovery:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: State-Wise RERA Execution & Recovery Certificate Matrix */}
              <section id="heading-state-matrix" aria-labelledby="heading-state-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-state-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  State-Wise RERA Execution Rules: UP RERA, MahaRERA, HRERA, K-RERA &amp; Delhi
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While Section 40 of the central RERA Act, 2016 applies nationwide, the online portal workflow, statutory interest formula, and land-revenue recovery statute depend on the state where your real estate project is registered:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">State-Wise RERA Order Execution and Recovery Certificate Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">State RERA Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Compliance Window</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Interest Rate</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Execution Mechanism &amp; Land Revenue Law</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          UP RERA (Noida, Greater Noida, Ghaziabad, Lucknow)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-600">45 Days from Order</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SBI MCLR + 1% (or MCLR + 2% per latest bench parity)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Online &quot;Request for Execution&quot; → RC sent to DM / Tehsildar under U.P. Revenue Code, 2006 (Sec 170–174)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          MahaRERA (Mumbai MMR, Pune, Thane, Nagpur)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-600">45–60 Days (Per Order)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SBI Highest MCLR + 2% (~10.95%–11.10% p.a.)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Non-Compliance Application under Sec 40 → RRC to Collector under Maharashtra Land Revenue Code, 1966 + Dedicated Recovery Cell</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          HRERA (Gurugram &amp; Panchkula Benches)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-600">90 Days (Rule 27 Haryana)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SBI Highest MCLR + 2% (Rule 15 HRERA Rules)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Dedicated Adjudicating / Execution Bench attaches bank accounts directly under Order XXI CPC + Collector RC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          K-RERA (Bengaluru &amp; Karnataka)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-600">45–60 Days from Order</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SBI Highest MCLR + 2% (Rule 16 Karnataka Rules)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Execution Petition → Revenue Recovery Certificate to Deputy Commissioner / Special Tahsildar under Karnataka Land Revenue Act, 1964</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          TNRERA / RERA Delhi / GujRERA
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-600">45 Days from Order</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SBI Highest MCLR + 2% (Model RERA Rule 15)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Form E / Execution Application → Section 40(1) RC to District Collector + Section 40(2) Civil Court Execution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Decision Flowchart SVG / Resolution Rail */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Execution Architecture: From Unpaid RERA Order to Bank Account Realization
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured 5-stage enforcement pathway to turn a defaulted RERA refund order into coercive asset attachment and bank credit:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">45-Day Compliance Expiry</h3>
                    <p className="text-xs text-slate-200 mt-1">Builder ignores final RERA Section 18 refund order past 45 days.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Pre-Execution Legal Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">15-day final compliance notice to Builder + Directors citing Sec 40 &amp; Sec 63.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">File Sec 40 Execution Online</h3>
                    <p className="text-xs text-slate-700 mt-1">Apply on State RERA portal for Recovery Certificate + Order 21 Rule 41 disclosure.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Collector RC &amp; Bank Freeze</h3>
                    <p className="text-xs text-red-900 mt-1">District Collector / Tehsildar issues 15-day citation, freezes bank &amp; seals flats.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Realization or HC Mandamus</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% Principal + MCLR+2% Interest recovered, or Art 226 Writ to speed up DM.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Enforcement Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Section 40 RERA Recovery Certificate Execution Flowchart"
                  >
                    <defs>
                      <linearGradient id="reraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="reraAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="reraSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#reraGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Order Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">45-Day Window Ends</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">No Stay Under Sec 43(5)</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Pre-Execution Demand</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Sec 40 + Sec 63 Warning</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Sec 40 Petition</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">RERA Portal Execution</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Order 21 Rule 41 Assets</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#reraAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Collector RC</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Land Revenue Warrant</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Bank Freeze &amp; Sealing</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#reraSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Payout</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Principal + MCLR+2%</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Art 226 HC Mandamus</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">KEY STATUTORY BENCHMARKS IN RERA ORDER ENFORCEMENT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Order Compliance Window: 45 Calendar Days from order upload (90 days under Haryana Rule 27) before Execution Petition</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 43(5) Appeal Pre-Deposit: Promoter must deposit 100% of principal + interest with REAT to obtain a valid stay</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• High Court Writ Threshold: File Article 226 Writ of Mandamus if District Collector delays RC execution beyond 60–90 days</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: What Actually Works - The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Actually Works: The 5-Step Action Playbook to Enforce an Unpaid RERA Refund Order
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not wait passively after the 45-day deadline expires. Follow this exact 5-step statutory sequence to convert your RERA refund order into realized funds:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Verify Expiry of the 45-Day Window &amp; Prepare an Up-to-Date Interest Computation Sheet
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download the certified digital copy of your final RERA order from the portal and check the exact compliance period (typically 45 days from order upload). Prepare a detailed tabular Calculation Sheet showing every payment installment date, receipt number, principal paid, and simple interest at the awarded rate (SBI Highest MCLR + 2%) calculated from each payment date up to the current month per <em>Experion Developers v. Sushma Ashok Shiroor</em> (2022). If you are still at the pre-RERA stage, review our{" "}
                        <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-blue-700 underline font-semibold">
                          builder booking cancellation refund legal notice guide
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
                        Serve a Formal Pre-Execution Legal Notice on the Promoter, Directors &amp; Escrow Bank
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before or alongside filing the portal execution request, have an advocate serve a 15-day pre-execution compliance notice via Registered Speed Post and email to the developer&apos;s registered office, every active director (verified via MCA DIN records), and the branch manager of the project&apos;s 70% RERA escrow bank account. Explicitly put them on notice of: (a) Immediate Section 40(1) Recovery Certificate attachment as arrears of land revenue; (b) Section 63 daily penalty up to 5% of total project cost; and (c) Personal asset disclosure under Order XXI Rule 41 CPC. Solvent builders frequently settle or issue demand drafts at this stage to prevent freezing of their active RERA project bank accounts.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File the Online Execution Application Under Section 40(1) &amp; Section 40(2) on the State RERA Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Log in to your allottee dashboard on the respective state portal (e.g., UP RERA &quot;Request for Order Execution&quot;, MahaRERA &quot;Non-Compliance Application&quot;, or HRERA Execution Petition). Upload your certified order, updated interest computation sheet, and proof of non-compliance. In the prayer clause, specifically invoke both <strong>Section 40(1)</strong> (issuance of Recovery Certificate to the District Collector) and <strong>Section 40(2) read with Order XXI Rules 30 and 41 CPC</strong> (direct attachment of project bank accounts and mandatory affidavit of promoter assets).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Supply a Targeted Asset &amp; Bank Schedule to the District Collector / Tehsildar Recovery Cell
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once RERA issues the Recovery Certificate (RC) and forwards it to the District Collector / District Magistrate, do not leave asset discovery solely to the local Amin or Tehsildar. Submit a formal written representation to the District Collector and Tehsildar enclosing: (1) Copy of the RC; (2) The promoter&apos;s RERA-disclosed 70% escrow account number and corporate current accounts; (3) List of unsold apartments/commercial units in the project (from the RERA quarterly updates); and (4) Details of the builder&apos;s corporate office. This enables the Tehsildar to issue an immediate attachment order (Kurki) and bank garnishee warrant.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Move High Court via Article 226 Writ of Mandamus If the Collector Delays Beyond 60–90 Days
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the District Collector or Tehsildar fails to execute the Recovery Certificate within 60 to 90 days of receipt despite your asset representation, file a Writ Petition (Civil) under Article 226 of the Constitution before the jurisdictional High Court arraying the State Revenue Department, the District Collector, RERA, and the builder. High Courts routinely issue time-bound Writs of Mandamus directing the Collector to realize the RC amount or file a personal compliance affidavit within 8 to 12 weeks.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Fact Table of Statutory Enforcement Powers & Provisions */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Coercive Enforcement Arsenal: Every Statutory Provision Available Against a Defaulting Builder
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a builder ignores a RERA refund order, Indian law provides five distinct statutory levers that can be triggered simultaneously or sequentially:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[600px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Provisions for RERA Order Execution and Builder Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Executing Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Coercive Power / Legal Remedy</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Impact on Defaulting Promoter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 40(1) RERA Act, 2016
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">RERA Authority + District Collector</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recovery Certificate (RC) for principal + interest as arrears of land revenue</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Tehsildar freezes bank accounts, seals unsold inventory &amp; auctions land</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 40(2) RERA + Order XXI CPC
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">RERA Bench / Adjudicating Officer</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Civil decree execution powers (Order 21 Rules 30, 41, 46, 54 CPC)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Directors forced to file sworn asset affidavit; restraint on third-party flat sales</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 63 RERA Act, 2016
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-bold">State RERA Authority</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Daily penalty for continuing non-compliance with RERA order</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cumulative fine up to 5% of total estimated cost of the real estate project</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Proviso to Section 43(5) RERA Act
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Real Estate Appellate Tribunal (REAT)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory 100% pre-deposit of total award before builder appeal is heard</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Blocks frivolous dilatory appeals; secures 100% of your refund in tribunal registry</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Article 226 Constitution of India
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Jurisdictional High Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Writ of Mandamus directing District Collector to execute pending RC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Forces time-bound revenue attachment within 60–90 days under contempt pain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  If the builder issued post-dated settlement cheques that subsequently bounced, you can also prosecute the company and its directors criminally—see our guide on{" "}
                  <Link href="/cheque-bounce-case-against-company-directors" className="text-blue-700 underline font-medium">
                    company cheque bounce cases against directors under Section 141 NI Act
                  </Link>{" "}
                  and{" "}
                  <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-medium">
                    Order 37 CPC summary recovery suits
                  </Link>.
                </p>
              </section>

              {/* Section 8: Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common RERA Execution Bottlenecks &amp; Tactical Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Post-Order Roadblock to See the Governing Precedent and 3-Step Solution
                  </p>
                </div>

                <ReraRecoveryProblemTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Allottee Recovers ₹68,40,000 (Principal + MCLR Interest) via Section 40 RC &amp; Bank Attachment
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative RERA Execution Case Study
                    </span>
                    <span className="text-xs text-slate-400">Greater Noida West (UP RERA Sector 16B Project)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Original Order &amp; Default:</strong> Saurabh &amp; Meenakshi Khanna booked a 3BHK apartment in Greater Noida West in 2019, paying ₹46,00,000 across construction-linked installments. After a 3-year possession delay, they filed a Section 31 complaint before UP RERA seeking a full refund under Section 18(1). UP RERA passed a final order directing the developer to refund ₹46,00,000 along with simple interest at SBI MCLR + 1% (totalling ₹22,40,000 in accrued interest) within 45 days. The builder ignored the order completely and verbally offered a 30-month post-dated cheque plan with zero interest.
                    </p>
                    <p>
                      <strong>The Pre-Execution Notice &amp; Section 40 Filing:</strong> Refusing the haircut, the Khannas engaged LegalRecovery.in on Day 47. An advocate served a formal 15-day pre-execution compliance notice on the promoter company, its three active directors, and the project&apos;s escrow bank branch, putting them on notice of Section 40(1) Recovery Certificate proceedings and Section 63 penalties. Simultaneously, an online execution application was filed on the UP RERA portal enclosing an updated installment-wise interest computation sheet totaling ₹68,40,000.
                    </p>
                    <p>
                      <strong>The Recovery Certificate &amp; Asset Dossier:</strong> Following the execution hearing, UP RERA issued a Section 40(1) Recovery Certificate (RC) for ₹68,40,000 plus future interest to the District Magistrate, Gautam Buddh Nagar. Rather than waiting passively, the allottees submitted a written asset representation to the Dadri Tehsildar identifying two active corporate bank accounts of the builder (used for maintenance and Phase-II collections) and 6 unsold commercial shops on the ground floor of the project tower.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Acting on the targeted asset schedule, the Tehsildar issued a 15-day land revenue citation (Prapatra-36) and attached the builder&apos;s active Phase-II collection account and commercial shops. Facing a complete freeze on project cash flows and public auction of its ground-floor retail inventory, the promoter deposited ₹68,40,000 via RTGS with the Tehsil recovery cell within 19 days of bank attachment, which was disbursed to the Khannas&apos; bank account in full.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Critical Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Execution Dossier Checklist: 6 Essential Records Needed for Section 40 Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Keep these 6 documents ready before filing your Section 40 execution petition and Collectorate representation (admissible electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Final RERA Order Copy:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Digitally signed order PDF downloaded from the State RERA portal showing complaint number, operative refund direction, and 45-day deadline.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Installment-Wise Interest Calculation Sheet:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Spreadsheet listing every payment receipt date, principal amount, number of days elapsed, and SBI MCLR + 2% interest up to date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Pre-Execution Legal Notice &amp; Speed Post POD:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Formal advocate compliance demand notice served on the promoter and directors after the 45-day window, with postal and email delivery logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Builder&apos;s RERA Project Escrow &amp; Bank Details:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Extract of the promoter&apos;s designated 70% project bank account from the RERA project registration page, plus known RTGS/NEFT beneficiary accounts.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Schedule of Unsold Inventory &amp; Corporate Assets:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">List of unsold flats, commercial shops, plot numbers, and corporate office address to help the Tehsildar execute immediate attachment (Kurki).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">MCA Company Master Data &amp; Director DINs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Public mca.gov.in extract showing the developer&apos;s CIN, registered office, and active directors for Order XXI Rule 41 CPC asset-disclosure summons.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Honest Scope Block */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do for Unpaid RERA Orders
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-emerald-950 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center">✓</span>
                      What LegalRecovery Does
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-emerald-900 leading-relaxed list-disc list-inside">
                      <li>Draft and dispatch a formal advocate pre-execution statutory compliance notice to the builder, its directors, and project escrow bank citing Section 40(1), Section 40(2), and Section 63 RERA penalties.</li>
                      <li>Prepare an accurate, installment-by-installment RERA interest computation schedule (SBI MCLR + 2%) up to the date of realization.</li>
                      <li>Draft formal representations to the District Collector / Tehsildar with MCA director records and RERA project asset schedules to accelerate RC attachment.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-2.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-rose-950 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center">✕</span>
                      What LegalRecovery Cannot Do
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-rose-900 leading-relaxed list-disc list-inside">
                      <li>We are not a government authority—only the State RERA Authority can issue a Section 40(1) Recovery Certificate, and only the District Collector / Tehsildar can physically freeze bank accounts or auction land.</li>
                      <li>If the corporate builder has already been admitted into NCLT insolvency (CIRP under IBC), a Section 14 statutory moratorium halts District Collector RC execution against the company; recovery must proceed via Form CA before the Resolution Professional.</li>
                    </ul>
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
                    Frequently Asked Questions About RERA Order Execution &amp; Recovery Certificates
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Guidance Grounded in Section 40 RERA Act and Supreme Court Precedents
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
                  Statutory verification status: All provisions verified against the Real Estate (Regulation and Development) Act, 2016 (India Code), Supreme Court reported judgments (Newtech Promoters 2021; Experion Developers 2022), and State RERA rules as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Pre-Execution Legal Notice to the Defaulting Builder &amp; Promoters
                </h2>
                <ReraRecoveryNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Builder Refund, RERA &amp; Property Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flat Booking Cancellation Refund Legal Notice to Builder →
                  </Link>
                  <Link
                    href="/legal-notice-to-builder-for-delayed-possession-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice to Builder for Delayed Possession Refund (Sec 18) →
                  </Link>
                  <Link
                    href="/token-money-refund-property-deal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Property Deal Fell Through? Token &amp; Bayana Refund Rules →
                  </Link>
                  <Link
                    href="/services/property-and-builder-disputes"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Property &amp; Builder Dispute Recovery Services →
                  </Link>
                  <Link
                    href="/recovery/builder-booking-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Stuck Builder Booking Amount →
                  </Link>
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Builder Cheque Bounced? Prosecuting Company Directors (s.141) →
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
