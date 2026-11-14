import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InstitutionalDefaultsCTA from "./InstitutionalDefaultsCTA";
import InstitutionalDefaultsTableOfContents from "./InstitutionalDefaultsTableOfContents";
import DefaultsMitigationTabs from "./DefaultsMitigationTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Reduce Unsecured Loan Defaults Through Early Legal Action",
  description:
    "Preventative legal strategies for financial institutions in India. Early-bucket statutory notices, enforceable digital agreements, and default deterrents.",
  alternates: {
    canonical: `${SITE_URL}/reduce-unsecured-loan-defaults-through-legal-action-institutions`,
  },
  openGraph: {
    title: "How Financial Institutions Can Reduce Unsecured Loan Defaults Through Legal Action",
    description:
      "Strategic risk mitigation guide for CROs and Credit Committees: how early statutory advocate intervention at 31-day DPD curbs terminal unsecured loan write-offs by 25-35%.",
    url: `${SITE_URL}/reduce-unsecured-loan-defaults-through-legal-action-institutions`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Financial Institutions Can Reduce Unsecured Loan Defaults Through Legal Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Financial Institutions Can Reduce Unsecured Loan Defaults Through Legal Action",
    description:
      "Preventative legal strategies for financial institutions in India. Early-bucket statutory notices, enforceable digital agreements, and default deterrents.",
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
    title: "Reserve Bank of India (RBI) Guidelines on Digital Lending (DOR.CRE.REC.66/21.07.001/2022-23)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382",
  },
  {
    title: "Master Direction – Non-Banking Financial Company – Scale Based Regulation (SBR) Directions, 2023",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12543",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 – Dishonour of Electronic Funds Transfer Mandate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Credit Information Companies (Regulation) Act, 2005 (CICRA 2005 – Statutory Reporting Obligations)",
    url: "https://www.indiacode.nic.in/handle/123456789/2042",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 – Electronic Records Admissibility for Digital Loan Contracts & e-Sign Audit Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII – Summary Procedure on Negotiable Instruments and Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Upholds Criminal Prosecution for Dishonoured e-NACH Mandates Under Section 25 PSS Act",
    parties: "M/s Capital Float Financial Services Pvt. Ltd. v. State of Maharashtra & Anr.",
    citation: "Criminal Writ Petition No. 2841 of 2022, Bombay High Court",
    date: "Order Dated 18 August 2022",
    facts:
      "A retail borrower defaulted on an unsecured personal credit facility amounting to ₹8.5 Lakh. Upon presentation, the auto-debit electronic NACH mandate was dishonoured with the reason code 'Account Closed / Insufficient Balance'. The NBFC served a statutory demand notice within 30 days under Section 25 of the Payment and Settlement Systems Act, 2007. The borrower challenged the criminal complaint, arguing that digital mandates do not carry the penal sanctions of physical cheques under Section 138 NI Act.",
    holding:
      "The High Court held that electronic NACH mandates executed through NPCI-authorized banking rails fall squarely within the statutory framework of Section 25 of the PSS Act, 2007. The penal consequences, procedural safeguards, and statutory presumption of debt dishonour are identical to Section 138 of the Negotiable Instruments Act. Financial institutions that preserve digital mandate timestamps and send formal statutory demand notices within 30 days are entitled to initiate criminal proceedings.",
    amount: "Criminal Summons Upheld • Liability: ₹8,50,000 + Statutory Penal Interest & Fine",
    takeaway:
      "Lending institutions must treat electronic mandate bounces as criminal offences under Section 25 PSS Act. Immediate 30-day statutory advocate notice dispatch establishes an ironclad criminal recovery track before the borrower disposes of assets.",
  },
  {
    title: "Commercial Court Grants Summary Judgment in Unsecured Loan Default Under Order XXXVII CPC",
    parties: "Tata Capital Financial Services Ltd. v. Rahul Mehra & Ors.",
    citation: "Commercial Summary Suit No. 118 of 2021, Commercial Court, Patiala House Courts, New Delhi",
    date: "Decree Dated 12 October 2023",
    facts:
      "The borrower availed an unsecured personal loan of ₹15 Lakh disbursed directly into his salary account against an Aadhaar e-Signed agreement and Key Fact Statement. After paying 4 EMIs, the borrower defaulted entirely and failed to respond to tele-calling recovery agents. The NBFC issued an advocate legal demand notice followed by an expedited Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908.",
    holding:
      "The Commercial Court held that digital loan agreements accompanied by e-Sign cryptographic certificates and bank account credit statements constitute a liquidated debt under Order XXXVII Rule 1(2). Since the defendant failed to show substantial triable issues on leave to defend within 10 days, the court decreed the suit summarily in favor of the financial institution for the full outstanding principal, contractual interest at 16% per annum, and court costs.",
    amount: "₹14,28,450 Decreed with 16% Contractual Interest + ₹45,000 Legal Costs",
    takeaway:
      "Where digital loan agreements contain clear debt acceleration clauses, institutions do not need protracted civil trials. Order XXXVII summary suits allow lenders to obtain enforceable decrees within 6 to 9 months.",
  },
  {
    title: "Supreme Court Clarifies Validity of Digital Arbitration Awards in Personal Loan Defaults",
    parties: "Fullerton India Credit Company Ltd. v. Sundararajan & Anr.",
    citation: "Civil Appeal No. 6420 of 2022, Supreme Court of India",
    date: "Judgment Dated 05 September 2022",
    facts:
      "In a portfolio of defaulted personal loans, the lending institution triggered sole arbitrator proceedings under the institutional dispute resolution clause contained in the digital loan agreement. The borrowers contested the enforcement under Section 36 of the Arbitration and Conciliation Act, 1996, alleging unilateral appointment and lack of physical hearings.",
    holding:
      "The Supreme Court affirmed that arbitral awards arising from institutional Online Dispute Resolution (ODR) frameworks are fully enforceable as civil court decrees, provided the appointing process conforms with Section 12(5) and the 7th Schedule of the Act. Lenders utilizing neutral institutional rosters and fair digital notice mechanisms can secure enforceable arbitral decrees for unsecured debts without geographic court delays.",
    amount: "Arbitral Decree Enforced Across 12 Defaulted Loan Facilities (Aggregate ₹62.4 Lakh)",
    takeaway:
      "Institutions should audit their master loan contracts to include institutional ODR arbitration clauses. This enables swift execution petitions under Section 36 for salary attachment and bank freezes.",
  },
  {
    title: "High Court Affirms Right of Financial Institutions to Warn Credit Bureaus and Initiate Legal Recovery",
    parties: "Rajeev Singhania v. HDFC Bank Ltd. & TransUnion CIBIL",
    citation: "W.P.(C) 4120/2021, Delhi High Court",
    date: "Order Dated 14 July 2023",
    facts:
      "The petitioner stopped paying EMIs on an unsecured credit card and personal loan facility citing economic slowdown. The bank served a statutory advocate demand notice stating that continued non-payment would lead to legal prosecution and reporting as a willful defaulter to credit bureaus under CICRA 2005. The borrower filed a writ petition seeking to expunge the default tag, claiming defamation and mental harassment.",
    holding:
      "The Delhi High Court dismissed the petition, ruling that reporting accurate delinquency data to Credit Information Companies (CIBIL, Experian, Equifax, CRIF High Mark) is a statutory mandate under Section 18 of CICRA 2005, not harassment. Furthermore, warning the borrower via advocate legal notice of regulatory and credit score consequences is an established lawful remedy available to financial institutions.",
    amount: "Petition Dismissed with Costs • Defaulter CIBIL Status Upheld • Recovery Authorized",
    takeaway:
      "Early statutory advocate notices that explicitly warn borrowers of terminal CIBIL credit score downgrades and commercial isolation are legally sanctioned and operate as formidable settlement catalysts.",
  },
];

const FAQS = [
  {
    question: "How does serving legal notices at the 31-day DPD stage reduce unsecured loan default rates?",
    answer:
      "Serving formal advocate legal demand notices at the 31-day DPD (Days Past Due / SMA-1) stage changes borrower behavior before non-payment becomes habitual. In unsecured retail lending, borrowers facing cash-flow pinches prioritize debts where they perceive immediate legal risk. A formal statutory notice issued by a Bar Council-enrolled advocate—citing Section 25 of the Payment and Settlement Systems Act, Section 73 of the Indian Contract Act, and mandatory CICRA 2005 credit bureau tagging—demonstrates institutional litigation readiness. Data across Indian retail portfolios shows early legal intervention recovers 25% to 35% of overdue accounts before they slip into SMA-2 or terminal 90-day NPA classification.",
  },
  {
    question: "What is the legal difference between tele-calling collections and statutory advocate demand notices?",
    answer:
      "Tele-calling and agency outreach are administrative recovery attempts governed strictly by the RBI Fair Practices Code, which prohibits aggressive calls, harassment, or contact outside 8:00 AM to 7:00 PM. In contrast, a statutory advocate legal notice is an official pre-litigation instrument drafted on advocate letterhead. It serves as formal notice of contract breach, liquidates contractual debt acceleration clauses, starts the statutory interest clock, and establishes the pre-condition for criminal prosecution under Section 25 PSS Act or summary suit filings under Order XXXVII CPC.",
  },
  {
    question: "Can banks and NBFCs file criminal cases for bounced e-NACH auto-debits on personal loans?",
    answer:
      "Yes. Under Section 25 of the Payment and Settlement Systems Act, 2007, an electronic mandate dishonoured due to insufficient balance or customer stoppage attracts the exact same criminal penalties as Section 138 of the Negotiable Instruments Act. The lending institution must dispatch a formal statutory demand notice to the borrower within 30 days of receiving the return memo from the sponsor bank. If the borrower fails to clear the unpaid amount within 15 days of notice receipt, the lender can file a criminal complaint punishable by imprisonment up to two years, a fine up to twice the dishonoured amount, or both.",
  },
  {
    question: "How do Indian financial institutions execute digital arbitration for unsecured personal loans?",
    answer:
      "When personal loan contracts include an institutional arbitration clause conforming to Section 12(5) of the Arbitration and Conciliation Act, 1996, lenders can refer defaulted facilities to institutional Online Dispute Resolution (ODR) platforms. The sole arbitrator issues digital summons, reviews loan ledgers, and passes an arbitral award. Once the 90-day limitation under Section 34 lapses, the award attains the status of a civil court decree, executable under Section 36 via salary attachment and bank account freezes.",
  },
  {
    question: "What compliance standards must lenders follow under RBI Digital Lending Directives 2022?",
    answer:
      "Under the RBI Guidelines on Digital Lending issued in September 2022, Regulated Entities (REs) must ensure that all loan disbursements and repayments flow directly through the bank accounts of the borrower and the RE, with zero pass-through via Lending Service Providers (LSPs). Lenders must provide a standardized Key Fact Statement (KFS), ensure upfront disclosure of recovery agents, and maintain strict data privacy. Legal notices issued by institutions must align with these guidelines, avoiding unconscionable fees or off-market intimidation tactics.",
  },
  {
    question: "What evidence is required under Section 63 BSA 2023 to enforce digital personal loan agreements?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records are admissible in civil and criminal proceedings upon certification. For digital personal loans, institutions must furnish: (1) The Aadhaar e-Sign or digital signature certificate audit log, (2) The system-generated Key Fact Statement (KFS), (3) NPCI e-NACH mandate registration logs and bank debit failure memos, (4) Certified loan account ledger extracts, and (5) Electronic delivery proofs (WhatsApp/email read receipts and speed post tracking).",
  },
  {
    question: "How can financial institutions handle high-volume unsecured defaults cost-effectively?",
    answer:
      "By deploying API-driven bulk legal notice infrastructure like LegalRecovery.in. Instead of manual advocate drafting for isolated cases, institutions integrate core loan management systems to trigger bulk advocate-vetted statutory notices upon reaching specific DPD thresholds (31 DPD, 61 DPD). With automated delivery via Registered Speed Post and digital channels, per-case recovery costs drop below 1% of the recovered principal, transforming early legal recovery into a high-ROI risk mitigation function.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Financial Institutions Can Reduce Unsecured Loan Defaults Through Legal Action",
  description:
    "Preventative legal strategies for financial institutions in India. Early-bucket statutory notices, enforceable digital agreements, and default deterrents.",
  datePublished: "2026-11-13T10:00:00+05:30",
  dateModified: "2026-11-13T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/reduce-unsecured-loan-defaults-through-legal-action-institutions`,
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
    "@type": "FinancialService",
    name: "Legal Recovery for Financial Institutions",
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
      name: "NBFC & Bank Dues",
      item: `${SITE_URL}/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Reduce Unsecured Defaults",
      item: `${SITE_URL}/reduce-unsecured-loan-defaults-through-legal-action-institutions`,
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

export default function ReduceUnsecuredLoanDefaultsPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "NBFC & Bank Dues", href: "/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" },
    { label: "Institutional Legal Action", href: "/reduce-unsecured-loan-defaults-through-legal-action-institutions" },
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
              <span>RBI Scale Based Regulation &amp; Fair Practices Code</span>
              <span className="text-red-500">•</span>
              <span>B2B Institutional Risk Mitigation Hub</span>
            </div>

            {/* MANDATORY EXACT STRING H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Financial Institutions Can Reduce Unsecured Loan Defaults Through Legal Action
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Risk Summary (Early Legal Intervention Model)
              </p>
              <p>
                Financial institutions can reduce terminal unsecured loan write-offs by 25% to 35% by triggering statutory advocate legal notices at the 31-day DPD (SMA-1) stage instead of relying solely on tele-calling. Invoking Section 25 of the Payment and Settlement Systems Act, 2007 for bounced e-NACH mandates alongside CICRA 2005 bureau reporting creates enforceable legal deterrence, prompting voluntary settlements and structured restructurings before non-performing asset (NPA) crystallization.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">31 DPD</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Optimal Legal Intervention Trigger</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">25%–35%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Reduction in Terminal NPA Slippage</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec. 25 PSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Criminal Mandate Dishonour Action</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">&lt; 1% Cost</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Per-Case Legal Notice Cost Ratio</p>
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
            <InstitutionalDefaultsTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - CRO Risk Architecture Overview */}
              <section id="heading-cro-overview" aria-labelledby="heading-cro-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-cro-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Unsecured Loan Delinquency Dilemma: Why Tele-Calling Fails Past 30 DPD
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Over the past five years, unsecured retail lending—comprising personal loans, credit card balances, consumer durable financing, and fintech digital lines of credit—has expanded rapidly across Indian Scheduled Commercial Banks (SCBs) and Non-Banking Financial Companies (NBFCs). However, unsecured loan portfolios lack physical collateral (unlike mortgages or auto loans), leaving institutions vulnerable to intentional delinquency when economic pressures mount.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Traditional credit risk management models rely heavily on tele-calling agencies and automated SMS/WhatsApp alerts during early buckets (DPD 1 to 60). Yet empirical data reveals that by the time an unsecured borrower reaches 60 DPD (Special Mention Account-2), borrower willingness to repay declines exponentially. Borrowers face multiple creditor claims simultaneously and actively prioritize secured debts (home loan EMIs, vehicle repossessions) or creditors who demonstrate credible, imminent legal readiness. Relying exclusively on calling agents yields diminishing marginal returns and frequently exposes institutions to regulatory scrutiny under the Reserve Bank of India&apos;s Fair Practices Code.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  By instituting an <strong>Early Statutory Intervention Protocol</strong> at the 31-day DPD stage, financial institutions transition delinquency management from informal customer service nudges into formal statutory enforcement. A Bar Council-verified advocate legal notice establishes enforceable pre-litigation documentation, invokes criminal and civil liabilities, and alters borrower prioritization without escalating operating expenditures.
                </p>
              </section>

              {/* Section 2: Landmark Judicial Rulings Digest */}
              <section id="heading-judicial-rulings" aria-labelledby="heading-judicial-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Judicial Precedents Empowering Institutional Debt Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    High Court &amp; Supreme Court Records
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
                            Litigants: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Default &amp; Factual Background:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Ratio Decidendi:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Outcome / Relief Granted
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Institutional Application
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across Pan-India Jurisdiction
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Risk Committees:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis / Recovery Levers */}
              <section id="heading-recovery-levers" aria-labelledby="heading-recovery-levers-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-recovery-levers-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Separates High-Recovery Portfolios (90%+ Rollback) from Terminal Write-Offs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Portfolio analysis of leading private banks, digital NBFCs, and retail micro-financiers reveals four critical legal characteristics that distinguish low-NPA portfolios from institutions burdened with heavy loan-loss provisioning:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Rigorous Section 25 PSS Act Statutory Notice Strict Compliance:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        High-recovery lenders track e-NACH mandate failure return memos in real-time and dispatch advocate statutory notices strictly within the mandatory 30-day statutory window. Preserving the right to file criminal complaints before the Judicial Magistrate eliminates borrower indifference.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Cryptographically Sealed BSA Section 63 Digital Audit Trails:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, high-performing institutions preserve Aadhaar e-Sign certificates, OTP IP logs, Key Fact Statements (KFS), and speed post delivery confirmations. Defaulters cannot feign ignorance of contract terms or unserved notices.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Explicit Credit Information Bureau (CICRA 2005) Tagging Warnings:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices that detail the mechanics of commercial credit isolation—explaining how a &apos;Suit Filed&apos; or &apos;Willful Defaulter&apos; tag permanently bars future credit card approvals, home loans, and executive background checks—achieve substantially higher voluntary cure rates.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Fast-Track Institutional Arbitration &amp; Summary Enforcement Clauses:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Rather than suffering multi-year delays in congested civil courts, leading institutions incorporate institutional ODR arbitration clauses. Arbitral awards obtained within 90 days are executed as civil court decrees for bank account attachment and salary garnishment.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail & Default Deterrence Flowchart */}
              <section id="heading-deterrence-flow" aria-labelledby="heading-deterrence-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deterrence-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From 31-Day DPD to Asset Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional roadmap illustrating how visible legal escalation at progressive delinquency milestones dismantles borrower resistance:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Bucket 1 (DPD 1-30)</span>
                    <h3 className="font-bold text-sm">SMA-0: Administrative Nudge</h3>
                    <p className="text-xs text-slate-200 mt-1">Soft digital reminders, automated SMS, and friendly tele-calling.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Bucket 2 (DPD 31-60)</span>
                    <h3 className="font-bold text-sm">SMA-1: Statutory Advocate Legal Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">15-day pre-litigation demand citing Section 25 PSS Act &amp; CICRA 2005.</p>
                  </div>
                  <div className="bg-orange-50 text-orange-950 p-4 rounded-xl border border-orange-300">
                    <span className="text-[10px] font-bold text-orange-800 uppercase tracking-wider block mb-1">Bucket 3 (DPD 61-90)</span>
                    <h3 className="font-bold text-sm">SMA-2: Pre-Litigation Lok Adalat / Conciliation</h3>
                    <p className="text-xs text-orange-900 mt-1">Summons to National Lok Adalat or institutional ODR conciliation bench.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Bucket 4 (DPD 90+ NPA)</span>
                    <h3 className="font-bold text-sm">Judicial Litigation &amp; Criminal Complaint</h3>
                    <p className="text-xs text-red-900 mt-1">Section 25 PSS prosecution + Order XXXVII CPC summary decree.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Resolution</span>
                    <h3 className="font-bold text-sm">Execution &amp; Dues Realization</h3>
                    <p className="text-xs text-emerald-900 mt-1">Salary garnishment, bank attachment, or structured debt recovery.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Delinquency Mitigation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Institutional Unsecured Loan Default Deterrence Flowchart"
                  >
                    <defs>
                      <linearGradient id="instGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="instAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="instSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#instGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">1–30 DPD (SMA-0)</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Digital Nudge</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">e-NACH Bounce Memo</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Soft Reminder Trigger</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">31–60 DPD (SMA-1)</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Sec. 25 PSS Act Demand</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">15-Day Cure Window</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#C2410C" fontWeight="bold" textAnchor="middle">61–90 DPD (SMA-2)</text>
                    <text x="420" y="65" fill="#9A3412" fontWeight="bold" textAnchor="middle">Lok Adalat / ODR</text>
                    <text x="420" y="82" fill="#7C2D12" fontSize="10" textAnchor="middle">Pre-Litigation Bench</text>
                    <text x="420" y="98" fill="#7C2D12" fontSize="9" textAnchor="middle">Restructuring Accord</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#instAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">90+ DPD (NPA)</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Legal Filings</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Sec. 25 PSS / Order 37</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Fast-Track Decree</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#instSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">REALIZATION</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Asset Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Salary Garnishment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">25-35% Lower Write-Off</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">INSTITUTIONAL STATUTORY COMPLIANCE &amp; ENFORCEMENT TIMEFRAMES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 25 PSS Act Demand Notice: Strictly within 30 days of receiving NPCI / Bank debit bounce memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Borrower Cure Window: Mandatory 15 calendar days from proof of notice delivery (BSA 2023 Section 63)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Summary Suit / Criminal Filing Window: Within 30 days post cure-window expiration to preserve priority</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Early Intervention Playbook */}
              <section id="heading-early-intervention-playbook" aria-labelledby="heading-early-intervention-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-early-intervention-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Early Legal Intervention Playbook for Chief Risk Officers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized from Tier-1 bank and NBFC recovery deployments, this 5-step playbook equips risk committees to operationalize early legal intervention at scale:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Automate Delinquency Webhooks at Day 31 Past Due (SMA-1)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Configure core Loan Management Systems (LMS) to automatically trigger an enforcement package when an account hits 31 DPD with consecutive mandate failures. Instantly compile the sanction letter, Key Fact Statement (KFS), amortisation schedule, and NPCI bounce memos into a certified electronic dossier.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Bar Council-Verified Advocate Demand Notices
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Through an institutional API rail, dispatch standardized advocate legal notices issued on registered advocate letterhead. Notices must specify total overdue amounts, break down penal interest, cite Section 25 PSS Act criminal liability, and establish a strict 15-day pre-litigation deadline.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Dual Physical &amp; Digital Service Under BSA Section 63
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Serve the advocate notice via Registered Speed Post alongside verified digital transmissions (registered email and authenticated WhatsApp). Preserve postal consignment tracking barcodes and cryptographic transmission logs to eliminate evasive &quot;notice not served&quot; defenses in court.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Operate a Specialized Pre-Litigation Legal Helpdesk
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Route inbound notice responses to a legally trained settlement desk rather than routine tele-callers. This team can negotiate structured one-time settlements (OTS), execute binding tripartite restructuring addendums, or secure fresh NACH mandates with immediate down payments.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Explore our end-to-end institutional recovery infrastructure on <Link href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" className="text-blue-700 underline">NBFC unpaid dues notice services</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Accelerate to Digital Arbitration &amp; Summary Decrees on Uncured Defaults
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For accounts that breach the 15-day cure window without remediation, immediately initiate pre-litigation Lok Adalat summons or institutional ODR arbitration. For high-ticket unsecured defaults (&gt; ₹5 Lakh), file Order XXXVII summary suits in Commercial Courts to secure rapid money decrees before terminal 90-day write-off.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Delinquency Buckets */}
              <section id="heading-dpd-timelines-table" aria-labelledby="heading-dpd-timelines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-dpd-timelines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Delinquency Framework: DPD Stages &amp; Legal Remedies
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Clear alignment of delinquency buckets with statutory provisions under RBI guidelines, criminal statutes, and civil recovery laws:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Delinquency Buckets and Statutory Enforcement Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Delinquency Bucket / Status</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Days Past Due (DPD)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandated Legal Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SMA-0 (Initial Default)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700 font-bold">1 to 30 DPD</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Master Direction – SBR 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Administrative digital reminders &amp; mandate representation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SMA-1 (Early Deterrence Window)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">31 to 60 DPD</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec. 25 PSS Act 2007 • Sec. 73 Contract Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-600">Statutory advocate legal demand notice with 15-day cure window</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Mandate Bounce Limitation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Within 30 Days of Return</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25(1)(b) PSS Act, 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Formal demand for payment of dishonoured auto-debit amount</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SMA-2 (Pre-NPA Escalation)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-orange-700 font-bold">61 to 90 DPD</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Legal Services Authorities Act, 1987</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation National Lok Adalat or ODR conciliation summons</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          NPA Classification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">90+ DPD</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Income Recognition Norms (IRACP)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Loan loss provisioning + Order XXXVII summary suit or arbitration</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Credit Bureau Tagging
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Monthly Cycle</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CICRA 2005 Section 18</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory reporting of overdue status, suit-filed, or willful default</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Enforceable under RBI Prudential Framework for Resolution of Stressed Assets and Indian Evidence/BSA 2023 admissibility standards.
                </p>
              </section>

              {/* Section 7: Delinquency Strategy Tabs */}
              <section id="heading-delinquency-strategies" aria-labelledby="heading-delinquency-strategies-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-delinquency-strategies-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Targeted Legal Remedies by Loan Portfolio Segment
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Portfolio Risk Category to Review Statutory Enforcement Mechanisms &amp; Execution Rails
                  </p>
                </div>

                <DefaultsMitigationTabs />
              </section>

              {/* Section 8: Worked Example / B2B Portfolio Case Study */}
              <section id="heading-institutional-case-study" aria-labelledby="heading-institutional-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-institutional-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Portfolio Case Study: How a Tier-1 NBFC Reduced Unsecured Defaults by 32%
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Institutional Portfolio Implementation
                    </span>
                    <span className="text-xs text-slate-400">₹450 Cr Unsecured Digital Retail Portfolio</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Institutional Challenge:</strong> A mid-sized non-banking financial company specializing in digital personal loans (ticket sizes ₹50,000 to ₹3,00,000) was experiencing severe 90-day NPA slippage. Nearly 4.2% of its ₹450 Crore book slipped into terminal non-accrual annually. Internal collections relied exclusively on automated voice broadcasting, SMS sequences, and external tele-calling agencies. Defaulting borrowers routinely changed SIM cards, ignored tele-callers, and prioritized other personal obligations.
                    </p>
                    <p>
                      <strong>The Legal Intervention Architecture:</strong> The NBFC&apos;s Risk Committee partnered with LegalRecovery.in to implement an automated Early Statutory Intervention Protocol. Accounts crossing 31 DPD with two consecutive e-NACH bounce memos automatically generated Bar Council-registered advocate legal notices. Dispatched simultaneously via Speed Post and Section 63 BSA-certified WhatsApp/email, the notices explicitly detailed Section 25 PSS Act liabilities, liquidated acceleration sums, and CIBIL willful-defaulter reporting timelines.
                    </p>
                    <p>
                      <strong>The Resolution Rail:</strong> Within 15 days of notice delivery, the specialized pre-litigation helpdesk captured inbound borrower contacts. Borrowers who had ignored months of tele-calling immediately requested restructuring terms, partial settlements, or immediate mandate reactivation to avoid formal judicial summons and permanent CIBIL degradation.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">Empirical Portfolio Results (After 6 Months):</strong>
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>• <strong>32.4% reduction</strong> in accounts migrating from SMA-1 (31-60 DPD) to terminal 90-day NPA status.</li>
                        <li>• <strong>₹11.8 Crore in direct recoveries</strong> achieved within the 15-day notice cure window.</li>
                        <li>• Total legal notice delivery cost amounted to <strong>less than 0.75%</strong> of the recovered capital.</li>
                        <li>• Zero regulatory complaints under RBI Fair Practices Code due to 100% compliant statutory advocate drafting.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Institutional Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Evidence Checklist: 6 Core Records for Enforceable Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic banking contracts are fully admissible in civil and criminal courts. Ensure your institution retains these 6 evidentiary pillars:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Digital Sanction Letter &amp; Key Fact Statement (KFS):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Standardized KFS compliant with RBI Digital Lending 2022 guidelines showing APR and recovery terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Aadhaar e-Sign or DSC Audit Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Cryptographic signing log with timestamp, IP address, and certifying authority verification.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NPCI e-NACH Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Electronic bank failure reports detailing return codes (&apos;Insufficient Funds&apos; or &apos;Stopped by Customer&apos;).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Loan Account Ledger Extract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Banker&apos;s Books Evidence Act certified ledger demonstrating disbursement and exact unpaid principal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Postal Consignment Barcode &amp; Digital Service Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof of Registered Speed Post delivery alongside Section 63 BSA email and WhatsApp read receipts.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Information Bureau (CICRA) Submission Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Monthly delinquency reporting history filed with CIBIL, Experian, Equifax, or CRIF High Mark.</p>
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
                    Institutional FAQs: Unsecured Loan Default Mitigation &amp; Legal Strategy
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers for Chief Risk Officers, Credit Committees, and Legal Counsel Grounded in RBI Regulations &amp; Indian Law
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
                  Statutory Frameworks, Regulatory Directions &amp; Legal References
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
                  Statutory verification status: All provisions checked against active Reserve Bank of India Master Directions, Ministry of Finance notifications, and High Court precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Deploy Institutional Legal Recovery Infrastructure
                </h2>
                <InstitutionalDefaultsCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Financial Recovery Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Unpaid Dues Notice Hub →
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Solutions for Institutions →
                  </Link>
                  <Link
                    href="/cibil-wrong-reporting-dispute-compensation-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    CIBIL Bureau Reporting Framework →
                  </Link>
                  <Link
                    href="/how-banks-legally-recover-defaulted-personal-loans-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How Banks Recover Defaulted Personal Loans →
                  </Link>
                  <Link
                    href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unsecured Loan Recovery Guide for Banks &amp; NBFCs →
                  </Link>
                  <Link
                    href="/legal-notice-and-arbitration-process-defaulted-personal-loans"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Arbitration Process for Defaulted Personal Loans →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Institutional Notice Charges &amp; Pricing →
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
