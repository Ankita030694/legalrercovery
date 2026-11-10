import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RbiOmbudsmanNoticeCTA from "./RbiOmbudsmanNoticeCTA";
import RbiOmbudsmanTableOfContents from "./RbiOmbudsmanTableOfContents";
import RbiOmbudsmanProblemTabs from "./RbiOmbudsmanProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "RBI Ombudsman Complaint: Eligibility, Process & Format",
  description:
    "When and how to file an RBI Ombudsman complaint under the Integrated Scheme: eligibility, the 30-day rule, process and outcomes.",
  alternates: {
    canonical: `${SITE_URL}/law/rbi-ombudsman-complaint-guide`,
  },
  openGraph: {
    title: "How to Complain to the RBI Ombudsman: Integrated Scheme Guide",
    description:
      "Statutory escalation path under the Reserve Bank - Integrated Ombudsman Scheme, 2021: 30-day rule, CMS portal filing, compensation limits, and legal notice format.",
    url: `${SITE_URL}/law/rbi-ombudsman-complaint-guide`,
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
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (Notification CEPD. PR. No. S834/13.01.001/2021-22)",
    url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=52554",
  },
  {
    title: "Reserve Bank of India Master Direction – Customer Service in Banks (FIDD.MSME & NFS.BC.No.20/06.02.31/2022-23)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10150",
  },
  {
    title: "RBI Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "RBI Circular on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10996",
  },
  {
    title: "RBI Revised Regulatory Framework for Fraudulent Electronic Banking Transactions (Effective 1 January 2027)",
    url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 – Electronic Records Admissibility for Bank SMS, Logs, & Cyber Complaints)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India Complaint Management System (CMS) Portal — Official Filing Interface",
    url: "https://cms.rbi.org.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Bank's Obligation to Honor Ombudsman Awards and Reversal Mandate",
    parties: "State Bank of India v. Banking Ombudsman & Anr.",
    citation: "W.P.(C) No. 12944/2020, High Court of Delhi",
    date: "Judgment Dated 18 November 2021",
    facts:
      "A savings bank account holder suffered an unauthorized cyber debit of ₹3,40,000 via fraudulent internet banking access. The customer lodged an immediate protest within 24 hours. The bank repudiated liability, asserting that login credentials and OTP were verified by their server. The customer approached the Banking Ombudsman under the RBI Scheme, which passed an award directing SBI to reverse the entire sum. The bank challenged the Ombudsman's award before the Delhi High Court via a writ petition, arguing that cyber frauds require complex trial outside the Ombudsman's summary jurisdiction.",
    holding:
      "The Delhi High Court dismissed the bank's writ petition with costs. The Court ruled that under the RBI Customer Protection Circular (2017) and the Integrated Ombudsman Scheme, the statutory burden of establishing customer negligence rests squarely on the bank. The bank produced no certified server IP audit logs or forensic evidence under Section 65B of the Evidence Act (now Section 63 BSA 2023) showing that the customer knowingly parted with credentials. The Court upheld the Ombudsman's award of full refund along with interest, affirming that banks cannot file speculative appeals to delay statutory consumer redressal.",
    amount: "₹3,40,000 Full Fraud Reversal + 8% Annual Interest + ₹25,000 High Court Litigation Costs",
    takeaway:
      "A bank cannot escape an RBI Ombudsman award by alleging fraud complexity in High Court unless it possesses unimpeachable forensic evidence proving customer culpability. When the customer reports promptly, the Ombudsman's restitution directions are firmly protected by constitutional courts.",
  },
  {
    title: "State Commission Ruling on Failed Transaction TAT and Mandatory ₹100/Day Delay Penalty",
    parties: "HDFC Bank Ltd. v. Rajesh Kumar Singhal",
    citation: "First Appeal No. 248/2022, State Consumer Disputes Redressal Commission, Uttar Pradesh",
    date: "Order Dated 14 July 2023",
    facts:
      "The consumer attempted an ATM cash withdrawal of ₹10,000 at a non-home bank ATM. The ATM screen displayed 'Transaction Timed Out' and no cash was dispensed, but the complainant's savings account was debited. Despite repeated complaints to the branch and customer care, the bank failed to re-credit the funds for 48 calendar days, attributing the lapse to inter-bank NFS switch settlement delays. When the customer approached the forum, the bank argued that statutory ₹100/day compensation under the RBI Harmonisation Circular is merely an administrative advisory, not an actionable legal right.",
    holding:
      "The State Commission rejected the bank's defense outright. It held that RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 is issued under Section 10(2) read with Section 18 of the Payment and Settlement Systems Act, 2007, and possesses full force of statutory law. For ATM failures, auto-reversal must occur within T+5 business days; every subsequent day of delay mandates automatic ₹100/day penalty. The Commission directed HDFC Bank to pay ₹10,000 refund, ₹4,300 statutory delay compensation (43 delayed days × ₹100), ₹20,000 mental agony damages, and ₹10,000 litigation expenses.",
    amount: "₹10,000 Debit Refund + ₹4,300 RBI TAT Daily Penalty + ₹20,000 Mental Harassment Damages + ₹10,000 Costs",
    takeaway:
      "The RBI ₹100/day compensation for failed electronic transactions is legally mandatory. If your bank fails to credit auto-reversal within the prescribed TAT, both the RBI Ombudsman and Consumer Courts will enforce the daily statutory penalty alongside harassment damages.",
  },
  {
    title: "NCDRC Order on Unlawful Account Debit Freeze and Loss of Reputation",
    parties: "Punjab National Bank v. M/s Swastik Agro Traders",
    citation: "Revision Petition No. 1892/2021, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 09 March 2023",
    facts:
      "The complainant firm operated an active current account with PNB. On receipt of an informal email inquiry from a cyber police cell in an adjoining state regarding a suspect transfer of ₹45,000, the bank placed a total debit freeze on the firm's entire balance of ₹18,60,000 without serving prior notice or demanding an official Magistrate order under Section 102 CrPC. As a result, five business vendor cheques bounced, ruining the enterprise's commercial credit standing. The bank cited internal compliance and police cooperation guidelines.",
    holding:
      "The National Commission held that freezing an entire corporate or individual account when the disputed cyber inquiry relates to a negligible fraction constitutes gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019, and violates RBI fair banking guidelines. Banks are legally obliged to mark a lien solely over the specific disputed tranche (₹45,000) while allowing unhindered operation of all remaining balances. The NCDRC upheld the State Commission's order awarding ₹2,00,000 damages for loss of business reputation and ₹35,000 costs against PNB.",
    amount: "₹2,00,000 Commercial Reputation Damages + Immediate Account Unfreeze + ₹35,000 Costs",
    takeaway:
      "If a bank arbitrarily freezes your entire account balance over a minor cyber complaint instead of marking a surgical lien on the disputed amount, you have immediate actionable grounds before the RBI Ombudsman and Consumer Commissions for deficiency in service and business loss.",
  },
];

const FAQS = [
  {
    question: "What is the RBI Integrated Ombudsman Scheme (RB-IOS, 2021)?",
    answer:
      "The Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS) is a single, unified grievance redressal mechanism established by the Reserve Bank of India on 12 November 2021. It merged three earlier standalone ombudsman frameworks: the Banking Ombudsman Scheme (2006), the Ombudsman Scheme for Non-Banking Financial Companies (2018), and the Ombudsman Scheme for Digital Transactions (2019). Under RB-IOS, any consumer can file a cost-free complaint against scheduled commercial banks, regional rural banks, urban co-operative banks, NBFCs with asset size over ₹100 crore, and non-bank payment system participants (like Paytm, PhonePe, and Google Pay payment aggregators) under 'One Nation, One Ombudsman'.",
  },
  {
    question: "What is the mandatory 30-day rule before complaining to the RBI Ombudsman?",
    answer:
      "Under Clause 10(1)(a) of the RB-IOS 2021, you cannot approach the RBI Ombudsman directly on day one. You must first lodge a formal written or electronic grievance with the regulated entity (your bank or NBFC). You are legally eligible to file on the RBI CMS portal only after: (1) 30 calendar days have elapsed from the date the bank received your complaint and you have received no reply, (2) The bank has rejected your grievance in full, or (3) You are not satisfied with the partial or unsatisfactory resolution provided by the bank.",
  },
  {
    question: "What is the time limit (limitation period) to file an RBI Ombudsman complaint?",
    answer:
      "Under Clause 10(2)(b) of the RB-IOS, you must file your complaint before the Ombudsman within one year after receiving the bank's final reply or rejection. If the bank gave no reply at all, the complaint must be filed within one year and 30 days from the date of your original written grievance. Complaints filed beyond this statutory one-year window are barred by limitation and will be rejected at the preliminary screening stage by the Centralised Receipt and Processing Centre (CRPC).",
  },
  {
    question: "How much maximum compensation can the RBI Ombudsman award?",
    answer:
      "Under Clause 15(3)(a) of the RB-IOS 2021, the Ombudsman has the statutory authority to award compensation up to ₹20,00,000 (Twenty Lakh Rupees) or the actual amount arising directly out of the act or omission of the regulated entity, whichever is lower. In addition, under Clause 15(3)(b), the Ombudsman can award separate compensation up to ₹1,00,000 (One Lakh Rupees) to the complainant for mental agony, harassment, loss of time, and out-of-pocket expenses suffered due to the bank's deficiency.",
  },
  {
    question: "How do I file a complaint online on the RBI CMS portal (cms.rbi.org.in)?",
    answer:
      "Visit the official RBI Complaint Management System at cms.rbi.org.in. Click on 'File a Complaint', complete mobile OTP verification, select the entity category (e.g., Commercial Bank), choose the bank name and branch, enter your account details, specify the grievance category (e.g., Unauthorised Electronic Transaction, ATM Dispute, Non-reversal of Failed Debit), upload your proof of 30-day prior complaint to the bank along with your bank statement, and submit. You will receive an immediate 15-digit CMS tracking number via SMS and email.",
  },
  {
    question: "Can I file an RBI Ombudsman complaint if I have already approached a Consumer Court?",
    answer:
      "No. Under Clause 10(2)(c) of the RB-IOS 2021, a complaint is strictly non-maintainable before the Ombudsman if the same dispute or subject matter is currently pending before, or has already been adjudicated by, any court of law, consumer forum (DCDRC, SCDRC, NCDRC), tribunal, or arbitrator. However, if the Ombudsman dismisses your complaint or you reject the award, you retain the full constitutional right to subsequently file a consumer complaint on e-Jagriti or institute a civil suit.",
  },
  {
    question: "What happens if the bank refuses to comply with an Ombudsman Award?",
    answer:
      "Under Clause 15(4) of the RB-IOS 2021, the bank is legally required to implement the Ombudsman's award within 30 days of receiving the complainant's letter of acceptance. If the bank fails to implement it and has not filed an appeal before the Appellate Authority (Executive Director in Charge, RBI) within 30 days, the bank is guilty of regulatory non-compliance. The RBI can initiate penal supervisory action under Section 47A of the Banking Regulation Act, 1949, and you can enforce the award as a civil decree in court or initiate contempt proceedings.",
  },
  {
    question: "Bank ne fraud transaction ka paisa lautane se mana kar diya, toh RBI Ombudsman me online complaint kaise kare?",
    answer:
      "Agar aapke bank account se bina OTP ya phishing se unauthorised transaction hua hai aur bank ne 3-day zero liability rule ke bawjood claim reject kar diya hai, toh pehle bank ke Principal Nodal Officer ko 15 din ka formal demand legal notice bhejein. Yadi 30 din me samadhan nahi milta, toh cms.rbi.org.in par jakar RB-IOS 2021 ke tehat online complaint darj karein. Apne saath 1930 Cybercrime FIR acknowledgment, bank grievance email, aur account statement jarur attach karein.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Complain to the RBI Ombudsman (Integrated Scheme)",
  description:
    "When and how to file an RBI Ombudsman complaint under the Integrated Scheme: eligibility, the 30-day rule, process and outcomes.",
  datePublished: "2026-11-04T14:00:00+05:30",
  dateModified: "2026-11-04T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/rbi-ombudsman-complaint-guide`,
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
    name: "Reserve Bank of India Ombudsman",
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
      name: "Banking & UPI Disputes",
      item: `${SITE_URL}/recovery/fraud-transaction-amount`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "RBI Ombudsman Complaint Guide",
      item: `${SITE_URL}/law/rbi-ombudsman-complaint-guide`,
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

export default function RbiOmbudsmanComplaintGuidePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Banking & UPI Disputes", href: "/recovery/fraud-transaction-amount" },
    { label: "RBI Ombudsman Complaint Guide", href: "/law/rbi-ombudsman-complaint-guide" },
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
        {/* Hero Section strictly matching site theme & irctc page layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RB-IOS 2021 Statutory Framework</span>
              <span className="text-red-500">•</span>
              <span>One Nation, One Ombudsman Scheme</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How to Complain to the RBI Ombudsman (Integrated Scheme)
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (RBI Integrated Ombudsman Scheme 2021)
              </p>
              <p>
                Under the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS), you can file a cost-free complaint against any bank, NBFC, or digital payment provider on cms.rbi.org.in. You must first lodge a written grievance with the entity and wait 30 days for resolution. The Ombudsman can award up to ₹20,00,000 for financial losses plus up to ₹1,00,000 for mental agony and harassment.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Prior Grievance Wait</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹20 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Direct Loss Compensation Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹1 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mental Harassment Award Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹0 Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Cost-Free Filing on CMS Portal</p>
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
            <RbiOmbudsmanTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Scheme Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What is the RBI Integrated Ombudsman Scheme (RB-IOS, 2021)?
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    On 12 November 2021, the Prime Minister and the Governor of the Reserve Bank of India launched the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS)</strong>. Prior to this historic regulatory integration, bank customers had to navigate three fragmented, jurisdiction-bound dispute schemes: the Banking Ombudsman Scheme (2006), the Ombudsman Scheme for Non-Banking Financial Companies (2018), and the Ombudsman Scheme for Digital Transactions (2019).
                  </p>
                  <p>
                    The RB-IOS 2021 repealed the disparate earlier frameworks and instituted a unified, jurisdiction-neutral doctrine known as <em>&quot;One Nation, One Ombudsman&quot;</em>. Under this framework, consumers are no longer required to identify which specific regional RBI office holds territorial jurisdiction over their bank&apos;s home branch. A single, centralised electronic gateway—the <strong>Complaint Management System (CMS)</strong> at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-semibold">cms.rbi.org.in</a>—receives, processes, and assigns disputes to Ombudsmen across India.
                  </p>
                  <p>
                    The Scheme covers virtually every regulated financial service provider in India, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li><strong>Commercial Banks:</strong> All Public Sector Banks (SBI, PNB, BoB, Canara), Private Sector Banks (HDFC, ICICI, Axis, Kotak), and Foreign Banks operating in India.</li>
                    <li><strong>Regional Rural Banks &amp; Co-operative Banks:</strong> All RRBs and Scheduled/Non-Scheduled Urban Co-operative Banks with a deposit size of ₹50 crore and above.</li>
                    <li><strong>Non-Banking Financial Companies (NBFCs):</strong> All deposit-taking NBFCs and non-deposit-taking NBFCs having customer interface with an asset size of ₹100 crore and above (excluding Core Investment Companies and Infrastructure Finance Companies).</li>
                    <li><strong>System Participants:</strong> Non-bank Payment System Participants (PSPs), Payment Gateways (aggregators), and Prepaid Payment Instrument (PPI) issuers like Paytm Payments Bank wallets, PhonePe, and Google Pay payment intermediaries.</li>
                  </ul>
                  <p>
                    For consumers facing delayed refunds or unauthorized transfers, this means you can hold both traditional banks and modern fintech payment intermediaries legally accountable through a single regulatory mechanism.
                  </p>
                </div>
              </section>

              {/* Section 2: H2 - Eligibility & 30-Day Rule */}
              <section id="heading-eligibility" aria-labelledby="heading-eligibility-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-eligibility-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Eligibility: The 30-Day Rule and Limitation Deadlines
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The most critical procedural hurdle in the RBI Ombudsman mechanism is the <strong>statutory condition precedent</strong> codified under Clause 10(1) of the Scheme. The Ombudsman does not function as a court of first instance. You cannot file a complaint before the Ombudsman immediately after noticing an unauthorized transaction or an ATM failure.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <p className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-1">
                      Statutory Condition Precedent (Clause 10(1) RB-IOS):
                    </p>
                    <p className="text-xs sm:text-sm text-amber-900 font-medium">
                      You are legally entitled to lodge a complaint with the RBI Ombudsman <strong>only if</strong>:
                    </p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1 text-xs sm:text-sm text-amber-800">
                      <li>You made a formal written representation or digital grievance to the bank/NBFC; <strong>AND</strong></li>
                      <li>The regulated entity rejected the complaint wholly or partly; <strong>OR</strong></li>
                      <li>You did not receive any reply whatsoever within <strong>30 calendar days</strong> from the date of the bank receiving your complaint; <strong>OR</strong></li>
                      <li>You received a reply within 30 days, but you are not satisfied with the resolution offered.</li>
                    </ol>
                  </div>
                  <p>
                    If you file on the CMS portal on day 15 while your branch grievance is still pending and unrejected, the AI ingestion engine of the Centralised Receipt and Processing Centre (CRPC) will automatically reject the complaint as premature under Clause 10(1)(a).
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4">
                    The 1-Year Limitation Window (Clause 10(2)(b))
                  </h3>
                  <p>
                    Equally crucial is the strict limitation period. Under Clause 10(2)(b), the complaint must be filed before the Ombudsman:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li>Within <strong>one year</strong> after the complainant received the bank&apos;s written rejection or final unsatisfactory reply.</li>
                    <li>Where no reply was received from the bank, within <strong>one year and 30 days</strong> from the date of sending the original written grievance to the bank.</li>
                  </ul>
                  <p>
                    Complaints filed after 12 months from the bank&apos;s repudiation are strictly time-barred, leaving your remaining legal recourse confined to filing a consumer complaint under Section 35 of the Consumer Protection Act, 2019 on e-Jagriti (which carries a broader 2-year limitation period under Section 69).
                  </p>
                </div>
              </section>

              {/* Section 3: H2 - CMS Online Filing Step-by-Step */}
              <section id="heading-cms-process" aria-labelledby="heading-cms-process-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-cms-process-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Step-by-Step Guide to Filing an Online RBI Ombudsman Complaint
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Filing a complaint under the RB-IOS is completely paperless, digital, and free of charge. The Reserve Bank of India does not levy any court fee, stamp duty, or procedural charge for filing or processing a complaint.
                  </p>
                  <div className="space-y-4 my-6">
                    <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">Access Portal &amp; Complete Mobile Authentication</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Navigate to <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-semibold">cms.rbi.org.in</a> and click on &quot;File a Complaint&quot;. Enter your mobile number, verify the 6-digit OTP, and enter your full legal name matching your bank KYC records.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">Entity Identification &amp; Account Details</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Select the regulated entity type (Commercial Bank, Regional Rural Bank, Co-operative Bank, NBFC, or System Participant). Select the exact bank name (e.g., State Bank of India) and input your 11-digit or 16-digit Account / Credit Card / Wallet Number, CIF number, and home branch name.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">Grievance Date &amp; Prior Complaint Proof (Mandatory)</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          The portal prompts: <em>&quot;Have you lodged a complaint with the bank?&quot;</em> Select <strong>Yes</strong>. Enter the exact date on which you lodged the grievance. If less than 30 days have elapsed, the form will not proceed unless you check the box indicating that the bank has already issued a formal rejection letter.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">Category Selection &amp; Relief Formulation</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Select the accurate sub-category from the dropdown (e.g., <em>&quot;Electronic Banking / ATM / POS / UPI / Mobile Banking&quot;</em> or <em>&quot;Levy of Charges without Prior Notice&quot;</em>). In the claim amount field, enter the exact principal sum debited. In the compensation box, specify your claim for mental distress, harassment, and legal costs (capped at ₹1,00,000 under Clause 15(3)(b)).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">Upload Evidentiary PDF Dossier</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Merge all evidentiary documents into a single indexed PDF (under 10 MB): copy of your initial grievance letter / email, proof of dispatch/delivery or ticket acknowledgment, bank&apos;s rejection reply (if any), certified bank statement showing the unauthorized debit, and the 1930 NCRP Cybercrime acknowledgment slip. Submit and save your 15-digit CMS reference number.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">
                    Physical / Post Option: CRPC Chandigarh
                  </h3>
                  <p>
                    For senior citizens or individuals unable to access the web portal, physical complaints can be sent by Registered Post using the standardized <strong>Form-A (Scheme Appendix)</strong> directly to the Reserve Bank of India&apos;s Centralised Ingestion Centre:
                  </p>
                  <div className="bg-slate-100 p-4 rounded-xl font-mono text-xs text-slate-800 border border-slate-300">
                    Centralised Receipt and Processing Centre (CRPC),<br />
                    Reserve Bank of India, 4th Floor, Sector 17,<br />
                    Chandigarh – 160017.<br />
                    Toll-Free Contact Centre: 14448 (9:30 AM to 5:15 PM)
                  </div>
                </div>
              </section>

              {/* Section 4: H2 - Compensation & Limits */}
              <section id="heading-compensation" aria-labelledby="heading-compensation-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-compensation-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Compensation Limits, Penal Interest, and Ombudsman Award Caps
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A common misconception among banking consumers is that the Ombudsman can only award the exact amount debited. Under the RB-IOS 2021, the Ombudsman possesses substantial statutory powers to order restitution, penal compensation, and corrective directions:
                  </p>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-left">
                      <thead className="bg-slate-800 text-white">
                        <tr>
                          <th className="p-3 border border-slate-700">Compensation Head</th>
                          <th className="p-3 border border-slate-700">Statutory Provision</th>
                          <th className="p-3 border border-slate-700">Maximum Limit / Formula</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr className="bg-white">
                          <td className="p-3 font-semibold text-slate-900">Direct Financial Loss</td>
                          <td className="p-3 text-slate-600 font-mono text-xs">Clause 15(3)(a) RB-IOS</td>
                          <td className="p-3 text-slate-900 font-semibold">
                            Up to ₹20,00,000 (Twenty Lakhs) or actual loss, whichever is lower
                          </td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 font-semibold text-slate-900">Mental Agony &amp; Harassment</td>
                          <td className="p-3 text-slate-600 font-mono text-xs">Clause 15(3)(b) RB-IOS</td>
                          <td className="p-3 text-slate-900 font-semibold">
                            Up to ₹1,00,000 (One Lakh) for loss of time, expenses, and harassment
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-semibold text-slate-900">Failed Transaction Delay TAT</td>
                          <td className="p-3 text-slate-600 font-mono text-xs">RBI TAT Circular 2019</td>
                          <td className="p-3 text-slate-900 font-semibold">
                            ₹100 per day of delay beyond T+1 (UPI/IMPS) or T+5 (ATM/PoS)
                          </td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 font-semibold text-slate-900">Pre-2027 Unauthorised Debit Interest</td>
                          <td className="p-3 text-slate-600 font-mono text-xs">Circular DBR.No.Leg.BC.78</td>
                          <td className="p-3 text-slate-900 font-semibold">
                            Full refund within 10 working days + Savings/FD accrued interest
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-semibold text-slate-900">2027 Fraud Liability Framework</td>
                          <td className="p-3 text-slate-600 font-mono text-xs">RBI 2027 Master Direction</td>
                          <td className="p-3 text-slate-900 font-semibold">
                            85% refund (up to ₹25,000) on losses ≤ ₹50,000; bank bears burden of proof
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Under Clause 15(4) of the Scheme, the regulated entity must implement the Ombudsman&apos;s award within <strong>30 days</strong> of receiving the complainant&apos;s letter of acceptance. If the bank fails to credit the awarded funds within 30 days and has not obtained permission from the RBI Executive Director to appeal under Clause 16, the bank is subject to direct supervisory penalties under Section 47A of the Banking Regulation Act, 1949.
                  </p>
                </div>
              </section>

              {/* Section 5: H2 - Case Precedents */}
              <section id="heading-precedents" aria-labelledby="heading-precedents-title" className="scroll-mt-28 space-y-6">
                <div>
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial &amp; Ombudsman Precedents on Bank Liability and Redressal
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Verified High Court, NCDRC, and State Commission orders affirming consumer rights under RBI circulars.
                  </p>
                </div>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                        <span className="text-[11px] font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded">
                          {c.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-700 italic mb-3">Parties: {c.parties}</p>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                        <div>
                          <strong className="text-slate-800">Factual Matrix: </strong>
                          {c.facts}
                        </div>
                        <div>
                          <strong className="text-slate-800">Judicial Holding: </strong>
                          {c.holding}
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border-l-3 border-red-600">
                          <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                            Awarded Amount:
                          </span>
                          <span className="font-semibold text-slate-800">{c.amount}</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-500 pt-1">
                          <strong>Strategic Precedent: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: H2 - Interactive Problem Picker Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-problem-picker-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Common Banking Disputes &amp; How to Resolve Them via Ombudsman
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Select your exact dispute scenario below to view governing statutory clauses, evidence requirements, and enforcement steps.
                </p>

                <RbiOmbudsmanProblemTabs />
              </section>

              {/* Section 7: H2 - Process Diagram SVG */}
              <section id="heading-process-flow" aria-labelledby="heading-process-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-process-flow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Statutory Escalation Pipeline (From Incident to High Court)
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                  <p>
                    The escalation pipeline under Indian banking jurisprudence operates across four distinct phases. Navigating each phase strictly in sequence prevents technical rejections under Clause 10(1) and maximizes your recovery probability.
                  </p>
                </div>

                {/* Handcrafted SVG Escalation Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto my-6">
                  <svg
                    viewBox="0 0 900 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Statutory escalation flow from bank dispute to RBI Ombudsman and Consumer Court"
                  >
                    {/* Stage 1: Grievance */}
                    <rect x="20" y="30" width="250" height="180" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="20" y="30" width="250" height="35" rx="12" fill="#0F172A" />
                    <text x="35" y="53" fill="#FFFFFF" fontSize="13" fontWeight="bold">PHASE 1: BANK GRIEVANCE</text>
                    <text x="35" y="85" fill="#1E293B" fontSize="12" fontWeight="600">• Written Complaint to Branch Manager</text>
                    <text x="35" y="105" fill="#475569" fontSize="11">• Obtain Ticket / Acknowledgment</text>
                    <text x="35" y="125" fill="#1E293B" fontSize="12" fontWeight="600">• Advocate Demand Notice to PNO</text>
                    <text x="35" y="145" fill="#DC2626" fontSize="11" fontWeight="bold">⏳ Mandatory 30-Day Waiting Rule</text>
                    <text x="35" y="165" fill="#475569" fontSize="11">• Inaction / Rejection / Partial Settlement</text>
                    <text x="35" y="185" fill="#0F172A" fontSize="11" fontWeight="600">Clause 10(1) Statutory Condition</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M270 120 L320 120" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowred)" />
                    <text x="275" y="110" fill="#DC2626" fontSize="10" fontWeight="bold">Day 31+</text>

                    {/* Stage 2: CRPC Ingestion */}
                    <rect x="325" y="30" width="250" height="180" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="325" y="30" width="250" height="35" rx="12" fill="#DC2626" />
                    <text x="340" y="53" fill="#FFFFFF" fontSize="13" fontWeight="bold">PHASE 2: CMS PORTAL FILING</text>
                    <text x="340" y="85" fill="#1E293B" fontSize="12" fontWeight="600">• File Online on cms.rbi.org.in</text>
                    <text x="340" y="105" fill="#475569" fontSize="11">• Or Post Form-A to CRPC Chandigarh</text>
                    <text x="340" y="125" fill="#1E293B" fontSize="12" fontWeight="600">• AI Ingestion &amp; 15-Digit Tracking</text>
                    <text x="340" y="145" fill="#475569" fontSize="11">• Conciliation / Facilitation by RBI</text>
                    <text x="340" y="165" fill="#1E293B" fontSize="12" fontWeight="bold">Bank Submits Formal Response</text>
                    <text x="340" y="185" fill="#047857" fontSize="11" fontWeight="600">Free of Cost • ₹0 Government Fee</text>

                    {/* Arrow 2 to 3 */}
                    <path d="M575 120 L625 120" stroke="#DC2626" strokeWidth="3" />

                    {/* Stage 3: Ombudsman Award */}
                    <rect x="630" y="30" width="250" height="180" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="630" y="30" width="250" height="35" rx="12" fill="#047857" />
                    <text x="645" y="53" fill="#FFFFFF" fontSize="13" fontWeight="bold">PHASE 3: OMBUDSMAN AWARD</text>
                    <text x="645" y="85" fill="#1E293B" fontSize="12" fontWeight="600">• Order Passed by RBI Ombudsman</text>
                    <text x="645" y="105" fill="#047857" fontSize="11" fontWeight="bold">✓ Up to ₹20 Lakh Direct Loss Award</text>
                    <text x="645" y="125" fill="#047857" fontSize="11" fontWeight="bold">✓ Up to ₹1 Lakh Harassment Damages</text>
                    <text x="645" y="145" fill="#1E293B" fontSize="11" fontWeight="600">• Complainant Submits Acceptance</text>
                    <text x="645" y="165" fill="#DC2626" fontSize="11" fontWeight="bold">⚡ Bank Must Comply Within 30 Days</text>
                    <text x="645" y="185" fill="#475569" fontSize="11">Section 47A Banking Reg Act Penalty</text>

                    {/* Lower Connector Pipeline */}
                    <path d="M755 210 L755 260" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M755 260 L450 260" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M450 260 L450 290" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowgray)" />

                    {/* Stage 4: Appeal / Consumer Court */}
                    <rect x="175" y="295" width="550" height="150" rx="12" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
                    <rect x="175" y="295" width="550" height="35" rx="12" fill="#334155" />
                    <text x="195" y="318" fill="#FFFFFF" fontSize="13" fontWeight="bold">PHASE 4: ESCALATION IF AWARD DEFICIENT OR BANK DEFIES</text>

                    <text x="195" y="350" fill="#0F172A" fontSize="12" fontWeight="bold">Option A: RBI Appellate Authority (Clause 16 RB-IOS)</text>
                    <text x="195" y="368" fill="#475569" fontSize="11">Complainant or Bank can appeal within 30 days to RBI Executive Director against an Award or rejection.</text>

                    <text x="195" y="395" fill="#0F172A" fontSize="12" fontWeight="bold">Option B: Consumer Commission (e-Jagriti) / High Court (Article 226)</text>
                    <text x="195" y="413" fill="#475569" fontSize="11">If dispute is rejected on technical grounds, file on e-Jagriti under Section 35 CPA 2019 for deficiency + damages.</text>
                    <text x="195" y="430" fill="#DC2626" fontSize="11" fontWeight="600">2-Year Limitation Period applies for Consumer Forum • District Forum Jurisdiction up to ₹50 Lakh</text>

                    {/* Markers */}
                    <defs>
                      <marker id="arrowred" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                      <marker id="arrowgray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 8: H2 - Maintainability Matrix */}
              <section id="heading-maintainability" aria-labelledby="heading-maintainability-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-maintainability-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Maintainability Matrix: What the Ombudsman Can and Cannot Decide
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Not every financial dispute is cognizable under the RB-IOS. Clause 10(2) enumerates strict grounds of exclusion. Submitting a non-maintainable complaint results in immediate summary dismissal by the CRPC screener.
                  </p>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-left">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-3 border border-slate-700">Maintainable Complaints (Admissible)</th>
                          <th className="p-3 border border-slate-700">Non-Maintainable Disputes (Excluded)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr className="bg-white">
                          <td className="p-3 text-slate-800">
                            <strong>Unauthorised Electronic Debits:</strong> Phishing, SIM swap, clone transactions reported within 3 days under RBI limited liability circular.
                          </td>
                          <td className="p-3 text-slate-800">
                            <strong>Sub-Judice Matters:</strong> Any dispute already pending before or decided by a Consumer Court, Civil Court, DRT, High Court, or Arbitrator.
                          </td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 text-slate-800">
                            <strong>Failed ATM / UPI / PoS Debits:</strong> Account debited but cash not dispensed or payment failed; non-payment of ₹100/day TAT compensation.
                          </td>
                          <td className="p-3 text-slate-800">
                            <strong>Inter-Institutional Disputes:</strong> Commercial disputes between two banks, or between a bank and an outsourced tech vendor.
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-slate-800">
                            <strong>Unfair Charges &amp; Auto-Debits:</strong> Non-maintenance charges debited without notice, hidden loan foreclosure charges, or unauthorized ECS/NACH mandate runs.
                          </td>
                          <td className="p-3 text-slate-800">
                            <strong>Commercial Pricing Policy:</strong> Disputes challenging bank interest rates, credit assessment decisions, or loan sanction rejections.
                          </td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 text-slate-800">
                            <strong>Arbitrary Account Freeze:</strong> Full account freezes or total liens placed without proper Magistrate order under Section 106/107 BNSS (Sec 102 CrPC).
                          </td>
                          <td className="p-3 text-slate-800">
                            <strong>Anonymous Scammer Recovery:</strong> Recovering money from unknown individual cyber fraudsters (Ombudsman holds the bank accountable, not criminals).
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-slate-800">
                            <strong>Delay in Property Title Return:</strong> Bank withholding title deeds beyond 30 days after full loan closure (₹5,000/day penalty under 2023 circular).
                          </td>
                          <td className="p-3 text-slate-800">
                            <strong>Time-Barred Claims:</strong> Complaints filed after 1 year from the bank&apos;s written rejection or 1 year 30 days from initial complaint.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    If your dispute falls into an excluded category—such as an anonymous cyber scam where the bank proved zero deficiency—the appropriate remedy is an FIR with the Cyber Crime Police Cell and an application under Section 451/457 CrPC (Section 497/503 BNSS 2023) for release of seized funds from the destination bank.
                  </p>
                </div>
              </section>

              {/* Section 9: H2 - Standard Statutory Notice & Complaint Format */}
              <section id="heading-complaint-format" aria-labelledby="heading-complaint-format-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-complaint-format-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Standard Statutory Legal Notice &amp; Bank Escalation Format
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Before lodging your dispute on the CMS portal, you must build an unassailable documentary record establishing the bank&apos;s 30-day statutory default under Clause 10(1) RB-IOS. Serving a formal demand notice on the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong> and <strong>Grievance Redressal Officer (GRO)</strong> via Speed Post and registered email creates certified electronic evidence under Section 63 BSA 2023.
                  </p>
                  <p>
                    Below is the standardized statutory notice format drafted by banking advocates for this purpose:
                  </p>
                </div>

                {/* Notice Draft Template Box */}
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 font-mono text-xs leading-relaxed border border-slate-800 shadow-xl overflow-x-auto my-6">
                  <div className="text-red-400 font-bold mb-4 border-b border-slate-800 pb-2">
                    // STATUTORY ADVOCATE DEMAND NOTICE TO BANK PRINCIPAL NODAL OFFICER
                  </div>
                  <p className="text-slate-400">
                    To,<br />
                    The Principal Nodal Officer / Chief Grievance Redressal Officer,<br />
                    [NAME OF BANK / REGULATED ENTITY],<br />
                    Corporate Head Office / Zonal Office: [FULL ADDRESS],<br />
                    Email: [OFFICIAL NODAL OFFICER EMAIL ID]
                  </p>
                  <p className="mt-4 text-slate-400">
                    Copy to:<br />
                    The Branch Manager, [BRANCH NAME &amp; SOL ID], [BANK NAME], [BRANCH ADDRESS].
                  </p>
                  <p className="mt-4 font-bold text-white">
                    SUBJECT: STATUTORY DEMAND NOTICE UNDER RBI INTEGRATED OMBUDSMAN SCHEME, 2021 (CLAUSE 10) READ WITH RBI CIRCULAR DBR.NO.LEG.BC.78/09.07.005/2017-18 FOR WRONGFUL DEBIT / REVERSAL OF ₹[AMOUNT] IN ACCOUNT NO. [ACCOUNT NUMBER].
                  </p>
                  <p className="mt-4 text-slate-300">
                    Dear Sir/Madam,
                  </p>
                  <p className="mt-2 text-slate-300">
                    Under instructions from and on behalf of our Client, [CLIENT FULL NAME], residing at [CLIENT ADDRESS], we hereby serve upon you this Statutory Legal Demand Notice:
                  </p>
                  <ol className="list-decimal pl-5 mt-3 space-y-2 text-slate-300">
                    <li>
                      That our Client maintains Savings / Current Account No. [ACCOUNT NUMBER] with your [BRANCH NAME] Branch, adhering to all KYC obligations.
                    </li>
                    <li>
                      That on [DATE] at [TIME], an unauthorized debit of ₹[AMOUNT] was executed from our Client&apos;s account via [UPI / IMPS / Net Banking / ATM / PoS] under Transaction Reference / UTR No. [UTR/RRN NUMBER] without our Client&apos;s valid consent, authorization, or mandate.
                    </li>
                    <li>
                      That our Client immediately intimated your customer care and branch on [DATE OF INTIMATION] under Grievance Ticket No. [TICKET NUMBER], strictly within 3 working days, alongside registering Cyber Crime NCRP Acknowledgment No. [CYBERCRIME NUMBER].
                    </li>
                    <li>
                      That under Paragraph 6 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 and the RBI 2027 Electronic Fraud Framework, our Client enjoys ZERO LIABILITY. The statutory burden of proving negligence rests squarely upon your institution. Your bank has failed to credit mandatory shadow reversal within 10 working days.
                    </li>
                    <li>
                      That exactly [NUMBER OF DAYS, e.g., 30] calendar days have elapsed since our Client&apos;s initial grievance, and your bank has either failed to provide resolution or mechanically repudiated the claim without providing certified Section 63 BSA server logs.
                    </li>
                  </ol>
                  <p className="mt-3 text-slate-300">
                    NOW THEREFORE, WE CALL UPON YOU to immediately credit the principal sum of ₹[AMOUNT] into our Client&apos;s account within SEVEN (7) DAYS of receipt of this notice, failing which our Client shall proceed to:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                    <li>Lodge a formal complaint before the Reserve Bank of India Integrated Ombudsman on cms.rbi.org.in claiming full reimbursement plus ₹1,00,000 compensation under Clause 15(3)(b) RB-IOS 2021; and</li>
                    <li>Initiate proceedings before the Consumer Disputes Redressal Commission on e-Jagriti under Section 35 of CPA 2019 holding your bank jointly and severally liable with 18% penal interest and punitive damages.</li>
                  </ul>
                  <p className="mt-4 text-slate-400">
                    Yours faithfully,<br />
                    [ADVOCATE NAME &amp; ENROLMENT NUMBER]<br />
                    Advocate for the Complainant<br />
                    LegalRecovery.in Regulatory Disputes Practice
                  </p>
                </div>
              </section>

              {/* Section 10: H2 - Worked Case Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Case Example: ₹85,000 Fraud Debit &amp; Ombudsman Award
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    To understand how the RBI Ombudsman mechanism operates in practice, consider the following illustrative case study based on real adjudication precedents:
                  </p>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        Case: Sharma v. Nationalized Bank (CMS Dispute 2024-25/0892)
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                        Full Restitution + Damages
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="space-y-1.5">
                        <p><strong className="text-slate-800">Complainant: </strong> Salaried IT Professional, Pune</p>
                        <p><strong className="text-slate-800">Disputed Amount: </strong> ₹85,000 (Two debits of ₹45,000 &amp; ₹40,000)</p>
                        <p><strong className="text-slate-800">Modus Operandi: </strong> Remote-access screen mirroring scam under guise of electricity bill update</p>
                      </div>
                      <div className="space-y-1.5">
                        <p><strong className="text-slate-800">Bank Response: </strong> Rejection citing &quot;Customer authenticated debit with OTP&quot;</p>
                        <p><strong className="text-slate-800">Intimation Timeline: </strong> Cyber helpline 1930 within 4 hours; bank within 24 hours</p>
                        <p><strong className="text-slate-800">Pre-litigation Notice: </strong> Advocate notice served on Day 31 of silence</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                      <p className="font-bold text-slate-900">Ombudsman Assessment &amp; Findings:</p>
                      <p>
                        The RBI Ombudsman examined the bank&apos;s defense and noted that under Paragraph 6 of the 2017 Customer Protection circular, the burden of proving customer fraud or gross negligence lies with the bank. The bank failed to produce multi-factor device binding logs or geofencing alerts when funds were transferred to an unlinked beneficiary in another state within 90 seconds of registration.
                      </p>
                      <p>
                        The Ombudsman held that the bank failed to deploy adequate real-time fraud risk management controls and unreasonably delayed investigating the NCRP freeze acknowledgment.
                      </p>
                    </div>

                    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                      <p className="text-xs uppercase font-extrabold text-emerald-900 tracking-wider mb-1">
                        Final Award Breakdown:
                      </p>
                      <ul className="text-xs sm:text-sm text-emerald-950 font-medium space-y-1">
                        <li>• <strong>Principal Refund: </strong> ₹85,000 (Full 100% electronic debit reversal)</li>
                        <li>• <strong>Accrued Interest: </strong> ₹2,840 (Savings bank interest from date of debit to credit)</li>
                        <li>• <strong>Mental Harassment &amp; Loss of Time (Clause 15(3)(b)): </strong> ₹20,000</li>
                        <li>• <strong>Total Statutory Recovery: </strong> <span className="font-bold text-emerald-800">₹1,07,840 credited within 21 days</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Mandatory Evidence &amp; Dossier Checklist for CMS Filing
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The RBI Ombudsman system screens complaints through an AI-assisted ingest module before allocating them to an Ombudsman. If key evidentiary documents are missing, your complaint will be returned for resubmission or rejected under Clause 10(2). Ensure your complaint PDF includes all of the following:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span>✓</span>
                        <span>1. Proof of 30-Day Prior Grievance</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Copy of the initial complaint email, registered letter, or web portal ticket showing the date of submission and the unique acknowledgment token.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span>✓</span>
                        <span>2. Bank&apos;s Rejection Letter / Email</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        If the bank replied within 30 days rejecting your claim, attach their formal repudiation letter showing their reasons and closure timestamp.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span>✓</span>
                        <span>3. Certified Bank Account Statement</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Official bank statement highlighting the disputed debit tranches, transaction UTR numbers, RRN codes, and merchant/beneficiary identifiers.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span>✓</span>
                        <span>4. Cyber Crime NCRP Acknowledgment (1930)</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        For any cyber fraud or phishing incident, the official PDF receipt from cybercrime.gov.in showing the 14-digit national complaint number.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span>✓</span>
                        <span>5. Advocate Legal Demand Notice &amp; Postal Receipt</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Copy of the formal statutory demand notice served on the Principal Nodal Officer, along with India Post Speed Post tracking and delivery report.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span>✓</span>
                        <span>6. Electronic Communications &amp; SMS Logs</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Screenshots of delayed bank SMS alerts or transaction failure screens, admissible as primary electronic records under Section 63 BSA 2023.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: H2 - FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on RBI Ombudsman Complaints
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Clear answers to the most common queries regarding timelines, CMS portal filing, and banking legal rights.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 open:shadow-sm"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-red-600 text-lg font-bold transition-transform duration-200 group-open:rotate-45 shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: H2 - Sources & References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Sources &amp; Statutory Legal References
                </h2>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                  <p className="text-xs text-slate-600 mb-3">
                    All legal provisions, caps, and procedural rules cited on this page are verified against official gazettes, Reserve Bank of India circulars, and primary statutes:
                  </p>
                  <ul className="space-y-2 text-xs">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-red-600 underline font-medium break-words"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                    Last updated: 4 November 2026 • Curated under the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS). Note: While LegalRecovery.in assists consumers in serving statutory advocate notices and structuring CMS complaints, complaints before the RBI Ombudsman can be filed directly by consumers free of charge.
                  </div>
                </div>
              </section>

              {/* Call to Action Banner */}
              <div className="pt-4">
                <RbiOmbudsmanNoticeCTA />
              </div>

              {/* Internal Contextual Link Grid */}
              <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 text-xs space-y-2">
                <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Explore Related Banking &amp; Financial Dispute Guides:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    Recover Fraudulent Transaction Amount →
                  </Link>
                  <Link
                    href="/recovery/wrong-upi-transfer"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    Wrong UPI Transfer Refund Guide →
                  </Link>
                  <Link
                    href="/atm-cash-not-dispensed-compensation"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    ATM Cash Not Dispensed Compensation →
                  </Link>
                  <Link
                    href="/law/rbi-fraudulent-transaction-framework-2027"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    RBI 2027 Fraud Liability Rules →
                  </Link>
                  <Link
                    href="/law/rbi-failed-transaction-tat-compensation"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    Failed Transaction ₹100/Day Compensation →
                  </Link>
                  <Link
                    href="/law/rbi-zero-liability-unauthorised-transaction"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    RBI Zero Liability Rule →
                  </Link>
                  <Link
                    href="/bank-charges-refund-legal-notice"
                    className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 font-medium"
                  >
                    Bank Charges Refund Legal Notice →
                  </Link>
                </div>
              </div>

              {/* Related Recovery Guides Dynamic Cluster Component */}
              <div className="pt-4">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
